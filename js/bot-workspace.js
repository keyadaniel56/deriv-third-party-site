/* =========================================================================
 * BotWorkspace — wraps Blockly workspace + trade engine interpreter.
 * Toolbox XML is fetched first, then passed to Blockly.inject at creation.
 * Requires: window.Blockly (CDN), bot-blocks.js, bot-engine.js
 * ========================================================================= */
var BotWorkspace = (function () {
    'use strict';

    let workspace = null;
    let interpreter = null;
    let isRunning = false;
    let symbol = 'R_100';
    let toolboxDom = null;

    function init(containerId) {
        const container = document.getElementById(containerId);
        if (!container || !window.Blockly) return false;

        container.innerHTML = '';

        const injectOpts = {
            renderer: 'zelos',
            trashcan: true,
            zoom: { wheel: true, startScale: 0.82 },
            scrollbars: true,
        };

        if (toolboxDom) {
            injectOpts.toolbox = toolboxDom;
        }

        try {
            workspace = window.Blockly.inject(container, injectOpts);
        } catch (e) {
            console.error('Blockly.inject failed:', e);
            return false;
        }

        return true;
    }

    function loadToolbox(xmlText) {
        try {
            toolboxDom = window.Blockly.Xml.textToDom(xmlText);
        } catch (e) {
            console.warn('Could not parse toolbox XML:', e);
            toolboxDom = null;
        }
    }

    function loadXml(xmlText) {
        if (!workspace || !xmlText) return false;
        try {
            const dom = window.Blockly.Xml.textToDom(xmlText);
            window.Blockly.Xml.clearWorkspaceAndLoadFromXml(dom, workspace);
            return true;
        } catch (e) {
            console.error('Failed to load XML:', e);
            return false;
        }
    }

    function getXml() {
        if (!workspace) return '';
        try {
            const dom = window.Blockly.Xml.workspaceToDom(workspace);
            return window.Blockly.Xml.domToPrettyText(dom);
        } catch (e) {
            return '';
        }
    }

    function generateCode() {
        if (!workspace) return '';
        try {
            return window.Blockly.JavaScript.javascriptGenerator.workspaceToCode(workspace);
        } catch (e) {
            console.error('Code generation failed:', e);
            return '';
        }
    }

    function buildFullCode() {
        const generated = generateCode();
        if (!generated) return null;

        return `
            var BinaryBotPrivateInit;
            var BinaryBotPrivateStart;
            var BinaryBotPrivateBeforePurchase;
            var BinaryBotPrivateDuringPurchase;
            var BinaryBotPrivateAfterPurchase;
            var BinaryBotPrivateLastTickTime;
            var BinaryBotPrivateTickAnalysisList = [];
            var BinaryBotPrivateHasCalledTradeOptions = false;

            function recursiveList(list, final_list){
                for(var i=0; i < list.length; i++){
                    if(typeof(list[i]) === 'object'){
                        recursiveList(list[i], final_list);
                    }
                    if(typeof(list[i]) == 'number'){
                        final_list.push(list[i]);
                    }
                }
                return final_list;
            }

            function BinaryBotPrivateRun(f, arg) {
                if (f) return f(arg);
                return false;
            }
            function BinaryBotPrivateTickAnalysis() {
                var currentTickTime = Bot.getLastTick(true);
                while (currentTickTime === 'MarketIsClosed') {
                    sleep(5);
                    currentTickTime = Bot.getLastTick(true);
                }
                currentTickTime = currentTickTime.epoch;
                if (currentTickTime === BinaryBotPrivateLastTickTime) {
                    return;
                }
                BinaryBotPrivateLastTickTime = currentTickTime;
                for (var BinaryBotPrivateI = 0; BinaryBotPrivateI < BinaryBotPrivateTickAnalysisList.length; BinaryBotPrivateI++) {
                    BinaryBotPrivateRun(BinaryBotPrivateTickAnalysisList[BinaryBotPrivateI]);
                }
            }
            var BinaryBotPrivateLimitations = {};
            ${generated}
            BinaryBotPrivateRun(BinaryBotPrivateInit);
            while (true) {
                BinaryBotPrivateTickAnalysis();
                BinaryBotPrivateRun(BinaryBotPrivateStart);
                if (!BinaryBotPrivateHasCalledTradeOptions) {
                    sleep(1);
                    continue;
                }
                while (watch('before')) {
                    BinaryBotPrivateTickAnalysis();
                    BinaryBotPrivateRun(BinaryBotPrivateBeforePurchase);
                }
                while (watch('during')) {
                    BinaryBotPrivateTickAnalysis();
                    BinaryBotPrivateRun(BinaryBotPrivateDuringPurchase);
                }
                BinaryBotPrivateTickAnalysis();
                if (!BinaryBotPrivateRun(BinaryBotPrivateAfterPurchase)) {
                    break;
                }
            }
        `;
    }

    function runBot(opts) {
        if (isRunning) return false;
        if (!workspace) return false;

        const fullCode = buildFullCode();
        if (!fullCode) {
            console.error('No code generated — add blocks to the workspace first.');
            return false;
        }

        if (opts && opts.symbol) symbol = opts.symbol;

        const Interpreter = window.BotEngine && window.BotEngine.Interpreter;
        if (!Interpreter) {
            console.error('Trade engine interpreter not loaded.');
            return false;
        }

        isRunning = true;
        interpreter = Interpreter();

        interpreter.run(fullCode).catch(function (err) {
            console.error('Bot error:', err);
            isRunning = false;
        });

        return true;
    }

    function stopBot() {
        if (!isRunning || !interpreter) return;
        isRunning = false;
        if (interpreter.stop) {
            interpreter.stop().then(function () {}).catch(function () {});
        }
        interpreter = null;
        interpreter = window.BotEngine && window.BotEngine.Interpreter ? window.BotEngine.Interpreter() : null;
    }

    function clear() {
        if (workspace) workspace.clear();
    }

    function resize() {
        if (workspace) window.Blockly.svgResize(workspace);
    }

    function undo() {
        if (workspace) workspace.undo(false);
    }

    function redo() {
        if (workspace) workspace.undo(true);
    }

    function zoomIn() {
        if (workspace) {
            workspace.zoom(workspace.options.zoomControlsPosition === 'start' ? -1 : 1);
        }
    }

    function zoomOut() {
        if (workspace) {
            workspace.zoom(workspace.options.zoomControlsPosition === 'start' ? 1 : -1);
        }
    }

    function getWorkspace() { return workspace; }
    function getRunning() { return isRunning; }

    return {
        init: init,
        loadToolbox: loadToolbox,
        loadXml: loadXml,
        getXml: getXml,
        generateCode: generateCode,
        buildFullCode: buildFullCode,
        runBot: runBot,
        stopBot: stopBot,
        clear: clear,
        resize: resize,
        undo: undo,
        redo: redo,
        zoomIn: zoomIn,
        zoomOut: zoomOut,
        getWorkspace: getWorkspace,
        getRunning: getRunning,
    };
})();
