import * as esbuild from 'esbuild';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = __dirname;
const BOT_APP = path.join(ROOT, 'bot-app', 'src', 'external', 'bot-skeleton');
const BOT_INDICATORS = path.join(ROOT, 'bot-app', 'src', 'external', 'indicators');
const BOT_SRC = path.join(ROOT, 'bot-app', 'src');

function makePlugin() {
    return {
        name: 'resolve-paths',
        setup(build) {
            // API / service shims
            build.onResolve({ filter: /api-base/ }, () => ({
                path: path.join(ROOT, 'bot-shims', 'api-base-bridge.js'),
            }));
            build.onResolve({ filter: /ticks_service/ }, () => ({
                path: path.join(ROOT, 'bot-shims', 'ticks-service-shim.js'),
            }));
            build.onResolve({ filter: /dbot-store/ }, () => ({
                path: path.join(ROOT, 'bot-shims', 'dbot-store-shim.js'),
            }));
            build.onResolve({ filter: /backward-compatibility/ }, () => ({
                path: path.join(ROOT, 'bot-shims', 'empty.js'),
            }));
            build.onResolve({ filter: /accumulators-proposal-handler/ }, () => ({
                path: path.join(ROOT, 'bot-shims', 'empty.js'),
            }));
            build.onResolve({ filter: /connection-status-stream/ }, () => ({
                path: path.join(ROOT, 'bot-shims', 'rxjs.js'),
            }));
            build.onResolve({ filter: /active-symbol-categorization/ }, () => ({
                path: path.join(ROOT, 'bot-shims', 'active-symbol-categorization.js'),
            }));

            // Common data / shared
            build.onResolve({ filter: /common-data/ }, () => ({
                path: path.join(ROOT, 'bot-shims', 'common-data.js'),
            }));
            build.onResolve({ filter: /file-saver/ }, () => ({
                path: path.join(ROOT, 'bot-shims', 'file-saver.js'),
            }));
            build.onResolve({ filter: /^localforage$/ }, () => ({
                path: path.join(ROOT, 'bot-shims', 'localforage.js'),
            }));
            build.onResolve({ filter: /^lz-string$/ }, () => ({
                path: path.join(ROOT, 'bot-shims', 'lz-string.js'),
            }));
            build.onResolve({ filter: /^rxjs$/ }, () => ({
                path: path.join(ROOT, 'bot-shims', 'rxjs.js'),
            }));

            // Scratch shared
            build.onResolve({ filter: /\.\.\/shared$/ }, (args) => {
                if (args.resolveDir.includes('scratch')) {
                    return { path: path.join(ROOT, 'bot-shims', 'scratch-shared-shim.js') };
                }
                return undefined;
            });

            // Image imports
            build.onResolve({ filter: /images$/ }, (args) => {
                if (args.path.includes('blocks/images') || args.path.includes('../images')) {
                    return { path: path.join(ROOT, 'bot-shims', 'block-images.js') };
                }
                return undefined;
            });
        },
    };
}

const commonConfig = {
    platform: 'browser',
    target: 'es2020',
    define: {
        'process.env.NODE_ENV': '"production"',
        'window.__webpack_public_path__': '""',
    },
    alias: {
        '@deriv-com/translations': path.join(ROOT, 'bot-shims', 'translations.js'),
        '@deriv-com/utils': path.join(ROOT, 'bot-shims', 'translations.js'),
        '@/components/shared': path.join(ROOT, 'bot-shims', 'shared.js'),
        '@/components/shared/utils/common-data': path.join(ROOT, 'bot-shims', 'common-data.js'),
        '@/components/bot-notification/bot-notification': path.join(ROOT, 'bot-shims', 'bot-notification.js'),
        '@/components/bot-notification/bot-notification-utils': path.join(ROOT, 'bot-shims', 'bot-notification.js'),
        '@/constants/backend-error-messages': path.join(ROOT, 'bot-shims', 'backend-errors.js'),
        '@/utils/clone': path.join(ROOT, 'bot-shims', 'clone.js'),
        '@': BOT_SRC,
        '@/external/bot-skeleton': BOT_APP,
        '@/external/indicators': BOT_INDICATORS,
        '@/external': path.join(BOT_SRC, 'external'),
    },
    logLevel: 'warning',
    plugins: [makePlugin()],
};

// Build 1: Trade Engine + Interpreter
console.log('Building trade engine bundle...');
const engineCtx = await esbuild.context({
    ...commonConfig,
    entryPoints: [path.join(ROOT, 'bot-shims', 'bundle-entry.js')],
    bundle: true,
    format: 'iife',
    globalName: 'BotEngine',
    outfile: path.join(ROOT, 'bot-bundle', 'bot-engine.js'),
});

await engineCtx.rebuild();
console.log('✓ bot-engine.js built');
await engineCtx.dispose();

// Build 2: Block definitions
console.log('Building block definitions bundle...');
const blocksCtx = await esbuild.context({
    ...commonConfig,
    entryPoints: [path.join(ROOT, 'bot-shims', 'blocks-entry.js')],
    bundle: true,
    format: 'iife',
    globalName: 'BotBlocks',
    outfile: path.join(ROOT, 'bot-bundle', 'bot-blocks.js'),
    external: ['blockly'],
});

await blocksCtx.rebuild();
console.log('✓ bot-blocks.js built');
await blocksCtx.dispose();

console.log('Build complete!');
