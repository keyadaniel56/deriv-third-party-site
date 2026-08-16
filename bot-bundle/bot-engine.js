var BotEngine = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

  // node_modules/lodash.debounce/index.js
  var require_lodash = __commonJS({
    "node_modules/lodash.debounce/index.js"(exports2, module2) {
      var FUNC_ERROR_TEXT = "Expected a function";
      var NAN = 0 / 0;
      var symbolTag = "[object Symbol]";
      var reTrim = /^\s+|\s+$/g;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsOctal = /^0o[0-7]+$/i;
      var freeParseInt = parseInt;
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      var objectProto = Object.prototype;
      var objectToString = objectProto.toString;
      var nativeMax = Math.max;
      var nativeMin = Math.min;
      var now = function() {
        return root.Date.now();
      };
      function debounce2(func, wait, options) {
        var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
        if (typeof func != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        wait = toNumber(wait) || 0;
        if (isObject(options)) {
          leading = !!options.leading;
          maxing = "maxWait" in options;
          maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        function invokeFunc(time) {
          var args = lastArgs, thisArg = lastThis;
          lastArgs = lastThis = void 0;
          lastInvokeTime = time;
          result = func.apply(thisArg, args);
          return result;
        }
        function leadingEdge(time) {
          lastInvokeTime = time;
          timerId = setTimeout(timerExpired, wait);
          return leading ? invokeFunc(time) : result;
        }
        function remainingWait(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result2 = wait - timeSinceLastCall;
          return maxing ? nativeMin(result2, maxWait - timeSinceLastInvoke) : result2;
        }
        function shouldInvoke(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
          return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
        }
        function timerExpired() {
          var time = now();
          if (shouldInvoke(time)) {
            return trailingEdge(time);
          }
          timerId = setTimeout(timerExpired, remainingWait(time));
        }
        function trailingEdge(time) {
          timerId = void 0;
          if (trailing && lastArgs) {
            return invokeFunc(time);
          }
          lastArgs = lastThis = void 0;
          return result;
        }
        function cancel() {
          if (timerId !== void 0) {
            clearTimeout(timerId);
          }
          lastInvokeTime = 0;
          lastArgs = lastCallTime = lastThis = timerId = void 0;
        }
        function flush() {
          return timerId === void 0 ? result : trailingEdge(now());
        }
        function debounced() {
          var time = now(), isInvoking = shouldInvoke(time);
          lastArgs = arguments;
          lastThis = this;
          lastCallTime = time;
          if (isInvoking) {
            if (timerId === void 0) {
              return leadingEdge(lastCallTime);
            }
            if (maxing) {
              timerId = setTimeout(timerExpired, wait);
              return invokeFunc(lastCallTime);
            }
          }
          if (timerId === void 0) {
            timerId = setTimeout(timerExpired, wait);
          }
          return result;
        }
        debounced.cancel = cancel;
        debounced.flush = flush;
        return debounced;
      }
      function isObject(value) {
        var type = typeof value;
        return !!value && (type == "object" || type == "function");
      }
      function isObjectLike(value) {
        return !!value && typeof value == "object";
      }
      function isSymbol(value) {
        return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
      }
      function toNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        if (isObject(value)) {
          var other = typeof value.valueOf == "function" ? value.valueOf() : value;
          value = isObject(other) ? other + "" : other;
        }
        if (typeof value != "string") {
          return value === 0 ? value : +value;
        }
        value = value.replace(reTrim, "");
        var isBinary = reIsBinary.test(value);
        return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
      }
      module2.exports = debounce2;
    }
  });

  // node_modules/@deriv/js-interpreter/lib/js-interpreter.js
  var require_js_interpreter = __commonJS({
    "node_modules/@deriv/js-interpreter/lib/js-interpreter.js"(exports, module) {
      (function webpackUniversalModuleDefinition(root, factory) {
        if (typeof exports === "object" && typeof module === "object")
          module.exports = factory();
        else if (typeof define === "function" && define.amd)
          define([], factory);
        else if (typeof exports === "object")
          exports["JSInterpreter"] = factory();
        else
          root["JSInterpreter"] = factory();
      })(exports, function() {
        return (
          /******/
          (() => {
            var __webpack_modules__ = {
              /***/
              "./node_modules/vm-browserify/index.js": (
                /*!*********************************************!*\
                  !*** ./node_modules/vm-browserify/index.js ***!
                  \*********************************************/
                /***/
                ((__unused_webpack_module, exports) => {
                  var indexOf = function(xs, item) {
                    if (xs.indexOf) return xs.indexOf(item);
                    else for (var i = 0; i < xs.length; i++) {
                      if (xs[i] === item) return i;
                    }
                    return -1;
                  };
                  var Object_keys = function(obj) {
                    if (Object.keys) return Object.keys(obj);
                    else {
                      var res = [];
                      for (var key in obj) res.push(key);
                      return res;
                    }
                  };
                  var forEach = function(xs, fn) {
                    if (xs.forEach) return xs.forEach(fn);
                    else for (var i = 0; i < xs.length; i++) {
                      fn(xs[i], i, xs);
                    }
                  };
                  var defineProp = (function() {
                    try {
                      Object.defineProperty({}, "_", {});
                      return function(obj, name, value) {
                        Object.defineProperty(obj, name, {
                          writable: true,
                          enumerable: false,
                          configurable: true,
                          value
                        });
                      };
                    } catch (e) {
                      return function(obj, name, value) {
                        obj[name] = value;
                      };
                    }
                  })();
                  var globals = [
                    "Array",
                    "Boolean",
                    "Date",
                    "Error",
                    "EvalError",
                    "Function",
                    "Infinity",
                    "JSON",
                    "Math",
                    "NaN",
                    "Number",
                    "Object",
                    "RangeError",
                    "ReferenceError",
                    "RegExp",
                    "String",
                    "SyntaxError",
                    "TypeError",
                    "URIError",
                    "decodeURI",
                    "decodeURIComponent",
                    "encodeURI",
                    "encodeURIComponent",
                    "escape",
                    "eval",
                    "isFinite",
                    "isNaN",
                    "parseFloat",
                    "parseInt",
                    "undefined",
                    "unescape"
                  ];
                  function Context() {
                  }
                  Context.prototype = {};
                  var Script = exports.Script = function NodeScript(code) {
                    if (!(this instanceof Script)) return new Script(code);
                    this.code = code;
                  };
                  Script.prototype.runInContext = function(context) {
                    if (!(context instanceof Context)) {
                      throw new TypeError("needs a 'context' argument.");
                    }
                    var iframe = document.createElement("iframe");
                    if (!iframe.style) iframe.style = {};
                    iframe.style.display = "none";
                    document.body.appendChild(iframe);
                    var win = iframe.contentWindow;
                    var wEval = win.eval, wExecScript = win.execScript;
                    if (!wEval && wExecScript) {
                      wExecScript.call(win, "null");
                      wEval = win.eval;
                    }
                    forEach(Object_keys(context), function(key) {
                      win[key] = context[key];
                    });
                    forEach(globals, function(key) {
                      if (context[key]) {
                        win[key] = context[key];
                      }
                    });
                    var winKeys = Object_keys(win);
                    var res = wEval.call(win, this.code);
                    forEach(Object_keys(win), function(key) {
                      if (key in context || indexOf(winKeys, key) === -1) {
                        context[key] = win[key];
                      }
                    });
                    forEach(globals, function(key) {
                      if (!(key in context)) {
                        defineProp(context, key, win[key]);
                      }
                    });
                    document.body.removeChild(iframe);
                    return res;
                  };
                  Script.prototype.runInThisContext = function() {
                    return eval(this.code);
                  };
                  Script.prototype.runInNewContext = function(context) {
                    var ctx = Script.createContext(context);
                    var res = this.runInContext(ctx);
                    if (context) {
                      forEach(Object_keys(ctx), function(key) {
                        context[key] = ctx[key];
                      });
                    }
                    return res;
                  };
                  forEach(Object_keys(Script.prototype), function(name) {
                    exports[name] = Script[name] = function(code) {
                      var s = Script(code);
                      return s[name].apply(s, [].slice.call(arguments, 1));
                    };
                  });
                  exports.isContext = function(context) {
                    return context instanceof Context;
                  };
                  exports.createScript = function(code) {
                    return exports.Script(code);
                  };
                  exports.createContext = Script.createContext = function(context) {
                    var copy = new Context();
                    if (typeof context === "object") {
                      forEach(Object_keys(context), function(key) {
                        copy[key] = context[key];
                      });
                    }
                    return copy;
                  };
                })
              ),
              /***/
              "./original-repo/acorn.js": (
                /*!********************************!*\
                  !*** ./original-repo/acorn.js ***!
                  \********************************/
                /***/
                (function(module2, exports2) {
                  var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
                  (function(root, mod) {
                    if (true) return mod(exports2);
                    if (true) return !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports2], __WEBPACK_AMD_DEFINE_FACTORY__ = mod, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports2, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== void 0 && (module2.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                    mod(root.acorn || (root.acorn = {}));
                  })(this, function(exports3) {
                    "use strict";
                    exports3.version = "0.4.1";
                    var options, input, inputLen, sourceFile;
                    exports3.parse = function(inpt, opts) {
                      input = String(inpt);
                      inputLen = input.length;
                      setOptions(opts);
                      initTokenState();
                      return parseTopLevel(options.program);
                    };
                    var defaultOptions = exports3.defaultOptions = {
                      // `ecmaVersion` indicates the ECMAScript version to parse. Must
                      // be either 3 or 5. This
                      // influences support for strict mode, the set of reserved words, and
                      // support for getters and setter.
                      ecmaVersion: 5,
                      // Turn on `strictSemicolons` to prevent the parser from doing
                      // automatic semicolon insertion.
                      strictSemicolons: false,
                      // When `allowTrailingCommas` is false, the parser will not allow
                      // trailing commas in array and object literals.
                      allowTrailingCommas: true,
                      // By default, reserved words are not enforced. Enable
                      // `forbidReserved` to enforce them.
                      forbidReserved: false,
                      // When `locations` is on, `loc` properties holding objects with
                      // `start` and `end` properties in `{line, column}` form (with
                      // line being 1-based and column 0-based) will be attached to the
                      // nodes.
                      locations: false,
                      // A function can be passed as `onComment` option, which will
                      // cause Acorn to call that function with `(block, text, start,
                      // end)` parameters whenever a comment is skipped. `block` is a
                      // boolean indicating whether this is a block (`/* */`) comment,
                      // `text` is the content of the comment, and `start` and `end` are
                      // character offsets that denote the start and end of the comment.
                      // When the `locations` option is on, two more parameters are
                      // passed, the full `{line, column}` locations of the start and
                      // end of the comments.
                      onComment: null,
                      // Nodes have their start and end characters offsets recorded in
                      // `start` and `end` properties (directly on the node, rather than
                      // the `loc` object, which holds line/column data. To also add a
                      // [semi-standardized][range] `range` property holding a `[start,
                      // end]` array with the same numbers, set the `ranges` option to
                      // `true`.
                      //
                      // [range]: https://bugzilla.mozilla.org/show_bug.cgi?id=745678
                      ranges: false,
                      // It is possible to parse multiple files into a single AST by
                      // passing the tree produced by parsing the first file as
                      // `program` option in subsequent parses. This will add the
                      // toplevel forms of the parsed file to the `Program` (top) node
                      // of an existing parse tree.
                      program: null,
                      // When `location` is on, you can pass this to record the source
                      // file in every node's `loc` object.
                      sourceFile: null,
                      // This value, if given, is stored in every node, whether
                      // `location` is on or off.
                      directSourceFile: null
                    };
                    function setOptions(opts) {
                      options = opts || {};
                      for (var opt in defaultOptions) if (!Object.prototype.hasOwnProperty.call(options, opt))
                        options[opt] = defaultOptions[opt];
                      sourceFile = options.sourceFile || null;
                    }
                    var getLineInfo = exports3.getLineInfo = function(input2, offset) {
                      for (var line = 1, cur = 0; ; ) {
                        lineBreak.lastIndex = cur;
                        var match = lineBreak.exec(input2);
                        if (match && match.index < offset) {
                          ++line;
                          cur = match.index + match[0].length;
                        } else break;
                      }
                      return { line, column: offset - cur };
                    };
                    exports3.tokenize = function(inpt, opts) {
                      input = String(inpt);
                      inputLen = input.length;
                      setOptions(opts);
                      initTokenState();
                      var t = {};
                      function getToken(forceRegexp) {
                        readToken(forceRegexp);
                        t.start = tokStart;
                        t.end = tokEnd;
                        t.startLoc = tokStartLoc;
                        t.endLoc = tokEndLoc;
                        t.type = tokType;
                        t.value = tokVal;
                        return t;
                      }
                      getToken.jumpTo = function(pos, reAllowed) {
                        tokPos = pos;
                        if (options.locations) {
                          tokCurLine = 1;
                          tokLineStart = lineBreak.lastIndex = 0;
                          var match;
                          while ((match = lineBreak.exec(input)) && match.index < pos) {
                            ++tokCurLine;
                            tokLineStart = match.index + match[0].length;
                          }
                        }
                        tokRegexpAllowed = reAllowed;
                        skipSpace();
                      };
                      return getToken;
                    };
                    var tokPos;
                    var tokStart, tokEnd;
                    var tokStartLoc, tokEndLoc;
                    var tokType, tokVal;
                    var tokRegexpAllowed;
                    var tokCurLine, tokLineStart;
                    var lastStart, lastEnd, lastEndLoc;
                    var inFunction, labels, strict;
                    function raise(pos, message) {
                      var loc = getLineInfo(input, pos);
                      message += " (" + loc.line + ":" + loc.column + ")";
                      var err = new SyntaxError(message);
                      err.pos = pos;
                      err.loc = loc;
                      err.raisedAt = tokPos;
                      throw err;
                    }
                    var empty = [];
                    var _num = { type: "num" }, _regexp = { type: "regexp" }, _string = { type: "string" };
                    var _name = { type: "name" }, _eof = { type: "eof" };
                    var _break = { keyword: "break" }, _case = { keyword: "case", beforeExpr: true }, _catch = { keyword: "catch" };
                    var _continue = { keyword: "continue" }, _debugger = { keyword: "debugger" }, _default = { keyword: "default" };
                    var _do = { keyword: "do", isLoop: true }, _else = { keyword: "else", beforeExpr: true };
                    var _finally = { keyword: "finally" }, _for = { keyword: "for", isLoop: true }, _function = { keyword: "function" };
                    var _if = { keyword: "if" }, _return = { keyword: "return", beforeExpr: true }, _switch = { keyword: "switch" };
                    var _throw = { keyword: "throw", beforeExpr: true }, _try = { keyword: "try" }, _var = { keyword: "var" };
                    var _while = { keyword: "while", isLoop: true }, _with = { keyword: "with" }, _new = { keyword: "new", beforeExpr: true };
                    var _this = { keyword: "this" };
                    var _null = { keyword: "null", atomValue: null }, _true = { keyword: "true", atomValue: true };
                    var _false = { keyword: "false", atomValue: false };
                    var _in = { keyword: "in", binop: 7, beforeExpr: true };
                    var keywordTypes = {
                      "break": _break,
                      "case": _case,
                      "catch": _catch,
                      "continue": _continue,
                      "debugger": _debugger,
                      "default": _default,
                      "do": _do,
                      "else": _else,
                      "finally": _finally,
                      "for": _for,
                      "function": _function,
                      "if": _if,
                      "return": _return,
                      "switch": _switch,
                      "throw": _throw,
                      "try": _try,
                      "var": _var,
                      "while": _while,
                      "with": _with,
                      "null": _null,
                      "true": _true,
                      "false": _false,
                      "new": _new,
                      "in": _in,
                      "instanceof": { keyword: "instanceof", binop: 7, beforeExpr: true },
                      "this": _this,
                      "typeof": { keyword: "typeof", prefix: true, beforeExpr: true },
                      "void": { keyword: "void", prefix: true, beforeExpr: true },
                      "delete": { keyword: "delete", prefix: true, beforeExpr: true }
                    };
                    var _bracketL = { type: "[", beforeExpr: true }, _bracketR = { type: "]" }, _braceL = { type: "{", beforeExpr: true };
                    var _braceR = { type: "}" }, _parenL = { type: "(", beforeExpr: true }, _parenR = { type: ")" };
                    var _comma = { type: ",", beforeExpr: true }, _semi = { type: ";", beforeExpr: true };
                    var _colon = { type: ":", beforeExpr: true }, _dot = { type: "." }, _question = { type: "?", beforeExpr: true };
                    var _slash = { binop: 10, beforeExpr: true }, _eq = { isAssign: true, beforeExpr: true };
                    var _assign = { isAssign: true, beforeExpr: true };
                    var _incDec = { postfix: true, prefix: true, isUpdate: true }, _prefix = { prefix: true, beforeExpr: true };
                    var _logicalOR = { binop: 1, beforeExpr: true };
                    var _logicalAND = { binop: 2, beforeExpr: true };
                    var _bitwiseOR = { binop: 3, beforeExpr: true };
                    var _bitwiseXOR = { binop: 4, beforeExpr: true };
                    var _bitwiseAND = { binop: 5, beforeExpr: true };
                    var _equality = { binop: 6, beforeExpr: true };
                    var _relational = { binop: 7, beforeExpr: true };
                    var _bitShift = { binop: 8, beforeExpr: true };
                    var _plusMin = { binop: 9, prefix: true, beforeExpr: true };
                    var _multiplyModulo = { binop: 10, beforeExpr: true };
                    exports3.tokTypes = {
                      bracketL: _bracketL,
                      bracketR: _bracketR,
                      braceL: _braceL,
                      braceR: _braceR,
                      parenL: _parenL,
                      parenR: _parenR,
                      comma: _comma,
                      semi: _semi,
                      colon: _colon,
                      dot: _dot,
                      question: _question,
                      slash: _slash,
                      eq: _eq,
                      name: _name,
                      eof: _eof,
                      num: _num,
                      regexp: _regexp,
                      string: _string
                    };
                    for (var kw in keywordTypes) exports3.tokTypes["_" + kw] = keywordTypes[kw];
                    function makePredicate(words) {
                      words = words.split(" ");
                      var f = "", cats = [];
                      out: for (var i = 0; i < words.length; ++i) {
                        for (var j = 0; j < cats.length; ++j)
                          if (cats[j][0].length == words[i].length) {
                            cats[j].push(words[i]);
                            continue out;
                          }
                        cats.push([words[i]]);
                      }
                      function compareTo(arr) {
                        if (arr.length == 1) return f += "return str === " + JSON.stringify(arr[0]) + ";";
                        f += "switch(str){";
                        for (var i2 = 0; i2 < arr.length; ++i2) f += "case " + JSON.stringify(arr[i2]) + ":";
                        f += "return true}return false;";
                      }
                      if (cats.length > 3) {
                        cats.sort(function(a, b) {
                          return b.length - a.length;
                        });
                        f += "switch(str.length){";
                        for (var i = 0; i < cats.length; ++i) {
                          var cat = cats[i];
                          f += "case " + cat[0].length + ":";
                          compareTo(cat);
                        }
                        f += "}";
                      } else {
                        compareTo(words);
                      }
                      return new Function("str", f);
                    }
                    var isReservedWord3 = makePredicate("abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile");
                    var isReservedWord5 = makePredicate("class enum extends super const export import");
                    var isStrictReservedWord = makePredicate("implements interface let package private protected public static yield");
                    var isStrictBadIdWord = makePredicate("eval arguments");
                    var isKeyword = makePredicate("break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this");
                    var nonASCIIwhitespace = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/;
                    var nonASCIIidentifierStartChars = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F0\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC";
                    var nonASCIIidentifierChars = "\u0300-\u036F\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u0620-\u0649\u0672-\u06D3\u06E7-\u06E8\u06FB-\u06FC\u0730-\u074A\u0800-\u0814\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0840-\u0857\u08E4-\u08FE\u0900-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962-\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09D7\u09DF-\u09E0\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5F-\u0B60\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C01-\u0C03\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62-\u0C63\u0C66-\u0C6F\u0C82\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2-\u0CE3\u0CE6-\u0CEF\u0D02\u0D03\u0D46-\u0D48\u0D57\u0D62-\u0D63\u0D66-\u0D6F\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E34-\u0E3A\u0E40-\u0E45\u0E50-\u0E59\u0EB4-\u0EB9\u0EC8-\u0ECD\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F41-\u0F47\u0F71-\u0F84\u0F86-\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1029\u1040-\u1049\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u170E-\u1710\u1720-\u1730\u1740-\u1750\u1772\u1773\u1780-\u17B2\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1920-\u192B\u1930-\u193B\u1951-\u196D\u19B0-\u19C0\u19C8-\u19C9\u19D0-\u19D9\u1A00-\u1A15\u1A20-\u1A53\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1B46-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C00-\u1C22\u1C40-\u1C49\u1C5B-\u1C7D\u1CD0-\u1CD2\u1D00-\u1DBE\u1E01-\u1F15\u200C\u200D\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2D81-\u2D96\u2DE0-\u2DFF\u3021-\u3028\u3099\u309A\uA640-\uA66D\uA674-\uA67D\uA69F\uA6F0-\uA6F1\uA7F8-\uA800\uA806\uA80B\uA823-\uA827\uA880-\uA881\uA8B4-\uA8C4\uA8D0-\uA8D9\uA8F3-\uA8F7\uA900-\uA909\uA926-\uA92D\uA930-\uA945\uA980-\uA983\uA9B3-\uA9C0\uAA00-\uAA27\uAA40-\uAA41\uAA4C-\uAA4D\uAA50-\uAA59\uAA7B\uAAE0-\uAAE9\uAAF2-\uAAF3\uABC0-\uABE1\uABEC\uABED\uABF0-\uABF9\uFB20-\uFB28\uFE00-\uFE0F\uFE20-\uFE26\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F";
                    var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
                    var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");
                    var newline = /[\n\r\u2028\u2029]/;
                    var lineBreak = /\r\n|[\n\r\u2028\u2029]/g;
                    var isIdentifierStart = exports3.isIdentifierStart = function(code) {
                      if (code < 65) return code === 36;
                      if (code < 91) return true;
                      if (code < 97) return code === 95;
                      if (code < 123) return true;
                      return code >= 170 && nonASCIIidentifierStart.test(String.fromCharCode(code));
                    };
                    var isIdentifierChar = exports3.isIdentifierChar = function(code) {
                      if (code < 48) return code === 36;
                      if (code < 58) return true;
                      if (code < 65) return false;
                      if (code < 91) return true;
                      if (code < 97) return code === 95;
                      if (code < 123) return true;
                      return code >= 170 && nonASCIIidentifier.test(String.fromCharCode(code));
                    };
                    function line_loc_t() {
                      this.line = tokCurLine;
                      this.column = tokPos - tokLineStart;
                    }
                    function initTokenState() {
                      tokCurLine = 1;
                      tokPos = tokLineStart = 0;
                      tokRegexpAllowed = true;
                      skipSpace();
                    }
                    function finishToken(type, val) {
                      tokEnd = tokPos;
                      if (options.locations) tokEndLoc = new line_loc_t();
                      tokType = type;
                      skipSpace();
                      tokVal = val;
                      tokRegexpAllowed = type.beforeExpr;
                    }
                    function skipBlockComment() {
                      var startLoc = options.onComment && options.locations && new line_loc_t();
                      var start2 = tokPos, end = input.indexOf("*/", tokPos += 2);
                      if (end === -1) raise(tokPos - 2, "Unterminated comment");
                      tokPos = end + 2;
                      if (options.locations) {
                        lineBreak.lastIndex = start2;
                        var match;
                        while ((match = lineBreak.exec(input)) && match.index < tokPos) {
                          ++tokCurLine;
                          tokLineStart = match.index + match[0].length;
                        }
                      }
                      if (options.onComment)
                        options.onComment(
                          true,
                          input.slice(start2 + 2, end),
                          start2,
                          tokPos,
                          startLoc,
                          options.locations && new line_loc_t()
                        );
                    }
                    function skipLineComment() {
                      var start2 = tokPos;
                      var startLoc = options.onComment && options.locations && new line_loc_t();
                      var ch = input.charCodeAt(tokPos += 2);
                      while (tokPos < inputLen && ch !== 10 && ch !== 13 && ch !== 8232 && ch !== 8233) {
                        ++tokPos;
                        ch = input.charCodeAt(tokPos);
                      }
                      if (options.onComment)
                        options.onComment(
                          false,
                          input.slice(start2 + 2, tokPos),
                          start2,
                          tokPos,
                          startLoc,
                          options.locations && new line_loc_t()
                        );
                    }
                    function skipSpace() {
                      while (tokPos < inputLen) {
                        var ch = input.charCodeAt(tokPos);
                        if (ch === 32) {
                          ++tokPos;
                        } else if (ch === 13) {
                          ++tokPos;
                          var next2 = input.charCodeAt(tokPos);
                          if (next2 === 10) {
                            ++tokPos;
                          }
                          if (options.locations) {
                            ++tokCurLine;
                            tokLineStart = tokPos;
                          }
                        } else if (ch === 10 || ch === 8232 || ch === 8233) {
                          ++tokPos;
                          if (options.locations) {
                            ++tokCurLine;
                            tokLineStart = tokPos;
                          }
                        } else if (ch > 8 && ch < 14) {
                          ++tokPos;
                        } else if (ch === 47) {
                          var next2 = input.charCodeAt(tokPos + 1);
                          if (next2 === 42) {
                            skipBlockComment();
                          } else if (next2 === 47) {
                            skipLineComment();
                          } else break;
                        } else if (ch === 160) {
                          ++tokPos;
                        } else if (ch >= 5760 && nonASCIIwhitespace.test(String.fromCharCode(ch))) {
                          ++tokPos;
                        } else {
                          break;
                        }
                      }
                    }
                    function readToken_dot() {
                      var next2 = input.charCodeAt(tokPos + 1);
                      if (next2 >= 48 && next2 <= 57) return readNumber(true);
                      ++tokPos;
                      return finishToken(_dot);
                    }
                    function readToken_slash() {
                      var next2 = input.charCodeAt(tokPos + 1);
                      if (tokRegexpAllowed) {
                        ++tokPos;
                        return readRegexp();
                      }
                      if (next2 === 61) return finishOp(_assign, 2);
                      return finishOp(_slash, 1);
                    }
                    function readToken_mult_modulo() {
                      var next2 = input.charCodeAt(tokPos + 1);
                      if (next2 === 61) return finishOp(_assign, 2);
                      return finishOp(_multiplyModulo, 1);
                    }
                    function readToken_pipe_amp(code) {
                      var next2 = input.charCodeAt(tokPos + 1);
                      if (next2 === code) return finishOp(code === 124 ? _logicalOR : _logicalAND, 2);
                      if (next2 === 61) return finishOp(_assign, 2);
                      return finishOp(code === 124 ? _bitwiseOR : _bitwiseAND, 1);
                    }
                    function readToken_caret() {
                      var next2 = input.charCodeAt(tokPos + 1);
                      if (next2 === 61) return finishOp(_assign, 2);
                      return finishOp(_bitwiseXOR, 1);
                    }
                    function readToken_plus_min(code) {
                      var next2 = input.charCodeAt(tokPos + 1);
                      if (next2 === code) {
                        if (next2 == 45 && input.charCodeAt(tokPos + 2) == 62 && newline.test(input.slice(lastEnd, tokPos))) {
                          tokPos += 3;
                          skipLineComment();
                          skipSpace();
                          return readToken();
                        }
                        return finishOp(_incDec, 2);
                      }
                      if (next2 === 61) return finishOp(_assign, 2);
                      return finishOp(_plusMin, 1);
                    }
                    function readToken_lt_gt(code) {
                      var next2 = input.charCodeAt(tokPos + 1);
                      var size = 1;
                      if (next2 === code) {
                        size = code === 62 && input.charCodeAt(tokPos + 2) === 62 ? 3 : 2;
                        if (input.charCodeAt(tokPos + size) === 61) return finishOp(_assign, size + 1);
                        return finishOp(_bitShift, size);
                      }
                      if (next2 == 33 && code == 60 && input.charCodeAt(tokPos + 2) == 45 && input.charCodeAt(tokPos + 3) == 45) {
                        tokPos += 4;
                        skipLineComment();
                        skipSpace();
                        return readToken();
                      }
                      if (next2 === 61)
                        size = input.charCodeAt(tokPos + 2) === 61 ? 3 : 2;
                      return finishOp(_relational, size);
                    }
                    function readToken_eq_excl(code) {
                      var next2 = input.charCodeAt(tokPos + 1);
                      if (next2 === 61) return finishOp(_equality, input.charCodeAt(tokPos + 2) === 61 ? 3 : 2);
                      return finishOp(code === 61 ? _eq : _prefix, 1);
                    }
                    function getTokenFromCode(code) {
                      switch (code) {
                        // The interpretation of a dot depends on whether it is followed
                        // by a digit.
                        case 46:
                          return readToken_dot();
                        // Punctuation tokens.
                        case 40:
                          ++tokPos;
                          return finishToken(_parenL);
                        case 41:
                          ++tokPos;
                          return finishToken(_parenR);
                        case 59:
                          ++tokPos;
                          return finishToken(_semi);
                        case 44:
                          ++tokPos;
                          return finishToken(_comma);
                        case 91:
                          ++tokPos;
                          return finishToken(_bracketL);
                        case 93:
                          ++tokPos;
                          return finishToken(_bracketR);
                        case 123:
                          ++tokPos;
                          return finishToken(_braceL);
                        case 125:
                          ++tokPos;
                          return finishToken(_braceR);
                        case 58:
                          ++tokPos;
                          return finishToken(_colon);
                        case 63:
                          ++tokPos;
                          return finishToken(_question);
                        // '0x' is a hexadecimal number.
                        case 48:
                          var next2 = input.charCodeAt(tokPos + 1);
                          if (next2 === 120 || next2 === 88) return readHexNumber();
                        // Anything else beginning with a digit is an integer, octal
                        // number, or float.
                        case 49:
                        case 50:
                        case 51:
                        case 52:
                        case 53:
                        case 54:
                        case 55:
                        case 56:
                        case 57:
                          return readNumber(false);
                        // Quotes produce strings.
                        case 34:
                        case 39:
                          return readString(code);
                        // Operators are parsed inline in tiny state machines. '=' (61) is
                        // often referred to. `finishOp` simply skips the amount of
                        // characters it is given as second argument, and returns a token
                        // of the type given by its first argument.
                        case 47:
                          return readToken_slash(code);
                        case 37:
                        case 42:
                          return readToken_mult_modulo();
                        case 124:
                        case 38:
                          return readToken_pipe_amp(code);
                        case 94:
                          return readToken_caret();
                        case 43:
                        case 45:
                          return readToken_plus_min(code);
                        case 60:
                        case 62:
                          return readToken_lt_gt(code);
                        case 61:
                        case 33:
                          return readToken_eq_excl(code);
                        case 126:
                          return finishOp(_prefix, 1);
                      }
                      return false;
                    }
                    function readToken(forceRegexp) {
                      if (!forceRegexp) tokStart = tokPos;
                      else tokPos = tokStart + 1;
                      if (options.locations) tokStartLoc = new line_loc_t();
                      if (forceRegexp) return readRegexp();
                      if (tokPos >= inputLen) return finishToken(_eof);
                      var code = input.charCodeAt(tokPos);
                      if (isIdentifierStart(code) || code === 92) return readWord();
                      var tok = getTokenFromCode(code);
                      if (tok === false) {
                        var ch = String.fromCharCode(code);
                        if (ch === "\\" || nonASCIIidentifierStart.test(ch)) return readWord();
                        raise(tokPos, "Unexpected character '" + ch + "'");
                      }
                      return tok;
                    }
                    function finishOp(type, size) {
                      var str = input.slice(tokPos, tokPos + size);
                      tokPos += size;
                      finishToken(type, str);
                    }
                    function readRegexp() {
                      var content = "", escaped, inClass, start2 = tokPos;
                      for (; ; ) {
                        if (tokPos >= inputLen) raise(start2, "Unterminated regular expression");
                        var ch = input.charAt(tokPos);
                        if (newline.test(ch)) raise(start2, "Unterminated regular expression");
                        if (!escaped) {
                          if (ch === "[") inClass = true;
                          else if (ch === "]" && inClass) inClass = false;
                          else if (ch === "/" && !inClass) break;
                          escaped = ch === "\\";
                        } else escaped = false;
                        ++tokPos;
                      }
                      var content = input.slice(start2, tokPos);
                      ++tokPos;
                      var mods = readWord1();
                      if (mods && !/^[gmsiy]*$/.test(mods)) raise(start2, "Invalid regexp flag");
                      return finishToken(_regexp, new RegExp(content, mods));
                    }
                    function readInt(radix, len) {
                      var start2 = tokPos, total = 0;
                      for (var i = 0, e = len == null ? Infinity : len; i < e; ++i) {
                        var code = input.charCodeAt(tokPos), val;
                        if (code >= 97) val = code - 97 + 10;
                        else if (code >= 65) val = code - 65 + 10;
                        else if (code >= 48 && code <= 57) val = code - 48;
                        else val = Infinity;
                        if (val >= radix) break;
                        ++tokPos;
                        total = total * radix + val;
                      }
                      if (tokPos === start2 || len != null && tokPos - start2 !== len) return null;
                      return total;
                    }
                    function readHexNumber() {
                      tokPos += 2;
                      var val = readInt(16);
                      if (val == null) raise(tokStart + 2, "Expected hexadecimal number");
                      if (isIdentifierStart(input.charCodeAt(tokPos))) raise(tokPos, "Identifier directly after number");
                      return finishToken(_num, val);
                    }
                    function readNumber(startsWithDot) {
                      var start2 = tokPos, isFloat = false, octal = input.charCodeAt(tokPos) === 48;
                      if (!startsWithDot && readInt(10) === null) raise(start2, "Invalid number");
                      if (input.charCodeAt(tokPos) === 46) {
                        ++tokPos;
                        readInt(10);
                        isFloat = true;
                      }
                      var next2 = input.charCodeAt(tokPos);
                      if (next2 === 69 || next2 === 101) {
                        next2 = input.charCodeAt(++tokPos);
                        if (next2 === 43 || next2 === 45) ++tokPos;
                        if (readInt(10) === null) raise(start2, "Invalid number");
                        isFloat = true;
                      }
                      if (isIdentifierStart(input.charCodeAt(tokPos))) raise(tokPos, "Identifier directly after number");
                      var str = input.slice(start2, tokPos), val;
                      if (isFloat) val = parseFloat(str);
                      else if (!octal || str.length === 1) val = parseInt(str, 10);
                      else if (/[89]/.test(str) || strict) raise(start2, "Invalid number");
                      else val = parseInt(str, 8);
                      return finishToken(_num, val);
                    }
                    function readString(quote) {
                      tokPos++;
                      var out = "";
                      for (; ; ) {
                        if (tokPos >= inputLen) raise(tokStart, "Unterminated string constant");
                        var ch = input.charCodeAt(tokPos);
                        if (ch === quote) {
                          ++tokPos;
                          return finishToken(_string, out);
                        }
                        if (ch === 92) {
                          ch = input.charCodeAt(++tokPos);
                          var octal = /^[0-7]+/.exec(input.slice(tokPos, tokPos + 3));
                          if (octal) octal = octal[0];
                          while (octal && parseInt(octal, 8) > 255) octal = octal.slice(0, -1);
                          if (octal === "0") octal = null;
                          ++tokPos;
                          if (octal) {
                            if (strict) raise(tokPos - 2, "Octal literal in strict mode");
                            out += String.fromCharCode(parseInt(octal, 8));
                            tokPos += octal.length - 1;
                          } else {
                            switch (ch) {
                              case 110:
                                out += "\n";
                                break;
                              // 'n' -> '\n'
                              case 114:
                                out += "\r";
                                break;
                              // 'r' -> '\r'
                              case 120:
                                out += String.fromCharCode(readHexChar(2));
                                break;
                              // 'x'
                              case 117:
                                out += String.fromCharCode(readHexChar(4));
                                break;
                              // 'u'
                              case 85:
                                out += String.fromCharCode(readHexChar(8));
                                break;
                              // 'U'
                              case 116:
                                out += "	";
                                break;
                              // 't' -> '\t'
                              case 98:
                                out += "\b";
                                break;
                              // 'b' -> '\b'
                              case 118:
                                out += "\v";
                                break;
                              // 'v' -> '\u000b'
                              case 102:
                                out += "\f";
                                break;
                              // 'f' -> '\f'
                              case 48:
                                out += "\0";
                                break;
                              // 0 -> '\0'
                              case 13:
                                if (input.charCodeAt(tokPos) === 10) ++tokPos;
                              // '\r\n'
                              case 10:
                                if (options.locations) {
                                  tokLineStart = tokPos;
                                  ++tokCurLine;
                                }
                                break;
                              default:
                                out += String.fromCharCode(ch);
                                break;
                            }
                          }
                        } else {
                          if (ch === 13 || ch === 10 || ch === 8232 || ch === 8233) raise(tokStart, "Unterminated string constant");
                          out += String.fromCharCode(ch);
                          ++tokPos;
                        }
                      }
                    }
                    function readHexChar(len) {
                      var n = readInt(16, len);
                      if (n === null) raise(tokStart, "Bad character escape sequence");
                      return n;
                    }
                    var containsEsc;
                    function readWord1() {
                      containsEsc = false;
                      var word, first3 = true, start2 = tokPos;
                      for (; ; ) {
                        var ch = input.charCodeAt(tokPos);
                        if (isIdentifierChar(ch)) {
                          if (containsEsc) word += input.charAt(tokPos);
                          ++tokPos;
                        } else if (ch === 92) {
                          if (!containsEsc) word = input.slice(start2, tokPos);
                          containsEsc = true;
                          if (input.charCodeAt(++tokPos) != 117)
                            raise(tokPos, "Expecting Unicode escape sequence \\uXXXX");
                          ++tokPos;
                          var esc = readHexChar(4);
                          var escStr = String.fromCharCode(esc);
                          if (!escStr) raise(tokPos - 1, "Invalid Unicode escape");
                          if (!(first3 ? isIdentifierStart(esc) : isIdentifierChar(esc)))
                            raise(tokPos - 4, "Invalid Unicode escape");
                          word += escStr;
                        } else {
                          break;
                        }
                        first3 = false;
                      }
                      return containsEsc ? word : input.slice(start2, tokPos);
                    }
                    function readWord() {
                      var word = readWord1();
                      var type = _name;
                      if (!containsEsc) {
                        if (isKeyword(word)) type = keywordTypes[word];
                        else if (options.forbidReserved && (options.ecmaVersion === 3 ? isReservedWord3 : isReservedWord5)(word) || strict && isStrictReservedWord(word))
                          raise(tokStart, "The keyword '" + word + "' is reserved");
                      }
                      return finishToken(type, word);
                    }
                    function next() {
                      lastStart = tokStart;
                      lastEnd = tokEnd;
                      lastEndLoc = tokEndLoc;
                      readToken();
                    }
                    function setStrict(strct) {
                      strict = strct;
                      tokPos = lastEnd;
                      if (options.locations) {
                        while (tokPos < tokLineStart) {
                          tokLineStart = input.lastIndexOf("\n", tokLineStart - 2) + 1;
                          --tokCurLine;
                        }
                      }
                      skipSpace();
                      readToken();
                    }
                    function node_t() {
                      this.type = null;
                      this.start = tokStart;
                      this.end = null;
                    }
                    function node_loc_t() {
                      this.start = tokStartLoc;
                      this.end = null;
                      if (sourceFile !== null) this.source = sourceFile;
                    }
                    function startNode() {
                      var node = new node_t();
                      if (options.locations)
                        node.loc = new node_loc_t();
                      if (options.directSourceFile)
                        node.sourceFile = options.directSourceFile;
                      if (options.ranges)
                        node.range = [tokStart, 0];
                      return node;
                    }
                    function startNodeFrom(other) {
                      var node = new node_t();
                      node.start = other.start;
                      if (options.locations) {
                        node.loc = new node_loc_t();
                        node.loc.start = other.loc.start;
                      }
                      if (options.ranges)
                        node.range = [other.range[0], 0];
                      return node;
                    }
                    function finishNode(node, type) {
                      node.type = type;
                      node.end = lastEnd;
                      if (options.locations)
                        node.loc.end = lastEndLoc;
                      if (options.ranges)
                        node.range[1] = lastEnd;
                      return node;
                    }
                    function isUseStrict(stmt) {
                      return options.ecmaVersion >= 5 && stmt.type === "ExpressionStatement" && stmt.expression.type === "Literal" && stmt.expression.value === "use strict";
                    }
                    function eat(type) {
                      if (tokType === type) {
                        next();
                        return true;
                      }
                    }
                    function canInsertSemicolon() {
                      return !options.strictSemicolons && (tokType === _eof || tokType === _braceR || newline.test(input.slice(lastEnd, tokStart)));
                    }
                    function semicolon() {
                      if (!eat(_semi) && !canInsertSemicolon()) unexpected();
                    }
                    function expect(type) {
                      if (tokType === type) next();
                      else unexpected();
                    }
                    function unexpected() {
                      raise(tokStart, "Unexpected token");
                    }
                    function checkLVal(expr) {
                      if (expr.type !== "Identifier" && expr.type !== "MemberExpression")
                        raise(expr.start, "Assigning to rvalue");
                      if (strict && expr.type === "Identifier" && isStrictBadIdWord(expr.name))
                        raise(expr.start, "Assigning to " + expr.name + " in strict mode");
                    }
                    function parseTopLevel(program) {
                      lastStart = lastEnd = tokPos;
                      if (options.locations) lastEndLoc = new line_loc_t();
                      inFunction = strict = null;
                      labels = [];
                      readToken();
                      var node = program || startNode(), first3 = true;
                      if (!program) node.body = [];
                      while (tokType !== _eof) {
                        var stmt = parseStatement();
                        node.body.push(stmt);
                        if (first3 && isUseStrict(stmt)) setStrict(true);
                        first3 = false;
                      }
                      return finishNode(node, "Program");
                    }
                    var loopLabel = { kind: "loop" }, switchLabel = { kind: "switch" };
                    function parseStatement() {
                      if (tokType === _slash || tokType === _assign && tokVal == "/=")
                        readToken(true);
                      var starttype = tokType, node = startNode();
                      switch (starttype) {
                        case _break:
                        case _continue:
                          next();
                          var isBreak = starttype === _break;
                          if (eat(_semi) || canInsertSemicolon()) node.label = null;
                          else if (tokType !== _name) unexpected();
                          else {
                            node.label = parseIdent();
                            semicolon();
                          }
                          for (var i = 0; i < labels.length; ++i) {
                            var lab = labels[i];
                            if (node.label == null || lab.name === node.label.name) {
                              if (lab.kind != null && (isBreak || lab.kind === "loop")) break;
                              if (node.label && isBreak) break;
                            }
                          }
                          if (i === labels.length) raise(node.start, "Unsyntactic " + starttype.keyword);
                          return finishNode(node, isBreak ? "BreakStatement" : "ContinueStatement");
                        case _debugger:
                          next();
                          semicolon();
                          return finishNode(node, "DebuggerStatement");
                        case _do:
                          next();
                          labels.push(loopLabel);
                          node.body = parseStatement();
                          labels.pop();
                          expect(_while);
                          node.test = parseParenExpression();
                          semicolon();
                          return finishNode(node, "DoWhileStatement");
                        // Disambiguating between a `for` and a `for`/`in` loop is
                        // non-trivial. Basically, we have to parse the init `var`
                        // statement or expression, disallowing the `in` operator (see
                        // the second parameter to `parseExpression`), and then check
                        // whether the next token is `in`. When there is no init part
                        // (semicolon immediately after the opening parenthesis), it is
                        // a regular `for` loop.
                        case _for:
                          next();
                          labels.push(loopLabel);
                          expect(_parenL);
                          if (tokType === _semi) return parseFor(node, null);
                          if (tokType === _var) {
                            var init = startNode();
                            next();
                            parseVar(init, true);
                            finishNode(init, "VariableDeclaration");
                            if (init.declarations.length === 1 && eat(_in))
                              return parseForIn(node, init);
                            return parseFor(node, init);
                          }
                          var init = parseExpression(false, true);
                          if (eat(_in)) {
                            checkLVal(init);
                            return parseForIn(node, init);
                          }
                          return parseFor(node, init);
                        case _function:
                          next();
                          return parseFunction(node, true);
                        case _if:
                          next();
                          node.test = parseParenExpression();
                          node.consequent = parseStatement();
                          node.alternate = eat(_else) ? parseStatement() : null;
                          return finishNode(node, "IfStatement");
                        case _return:
                          if (!inFunction) raise(tokStart, "'return' outside of function");
                          next();
                          if (eat(_semi) || canInsertSemicolon()) node.argument = null;
                          else {
                            node.argument = parseExpression();
                            semicolon();
                          }
                          return finishNode(node, "ReturnStatement");
                        case _switch:
                          next();
                          node.discriminant = parseParenExpression();
                          node.cases = [];
                          expect(_braceL);
                          labels.push(switchLabel);
                          for (var cur, sawDefault; tokType != _braceR; ) {
                            if (tokType === _case || tokType === _default) {
                              var isCase = tokType === _case;
                              if (cur) finishNode(cur, "SwitchCase");
                              node.cases.push(cur = startNode());
                              cur.consequent = [];
                              next();
                              if (isCase) cur.test = parseExpression();
                              else {
                                if (sawDefault) raise(lastStart, "Multiple default clauses");
                                sawDefault = true;
                                cur.test = null;
                              }
                              expect(_colon);
                            } else {
                              if (!cur) unexpected();
                              cur.consequent.push(parseStatement());
                            }
                          }
                          if (cur) finishNode(cur, "SwitchCase");
                          next();
                          labels.pop();
                          return finishNode(node, "SwitchStatement");
                        case _throw:
                          next();
                          if (newline.test(input.slice(lastEnd, tokStart)))
                            raise(lastEnd, "Illegal newline after throw");
                          node.argument = parseExpression();
                          semicolon();
                          return finishNode(node, "ThrowStatement");
                        case _try:
                          next();
                          node.block = parseBlock();
                          node.handler = null;
                          if (tokType === _catch) {
                            var clause = startNode();
                            next();
                            expect(_parenL);
                            clause.param = parseIdent();
                            if (strict && isStrictBadIdWord(clause.param.name))
                              raise(clause.param.start, "Binding " + clause.param.name + " in strict mode");
                            expect(_parenR);
                            clause.guard = null;
                            clause.body = parseBlock();
                            node.handler = finishNode(clause, "CatchClause");
                          }
                          node.guardedHandlers = empty;
                          node.finalizer = eat(_finally) ? parseBlock() : null;
                          if (!node.handler && !node.finalizer)
                            raise(node.start, "Missing catch or finally clause");
                          return finishNode(node, "TryStatement");
                        case _var:
                          next();
                          parseVar(node);
                          semicolon();
                          return finishNode(node, "VariableDeclaration");
                        case _while:
                          next();
                          node.test = parseParenExpression();
                          labels.push(loopLabel);
                          node.body = parseStatement();
                          labels.pop();
                          return finishNode(node, "WhileStatement");
                        case _with:
                          if (strict) raise(tokStart, "'with' in strict mode");
                          next();
                          node.object = parseParenExpression();
                          node.body = parseStatement();
                          return finishNode(node, "WithStatement");
                        case _braceL:
                          return parseBlock();
                        case _semi:
                          next();
                          return finishNode(node, "EmptyStatement");
                        // If the statement does not start with a statement keyword or a
                        // brace, it's an ExpressionStatement or LabeledStatement. We
                        // simply start parsing an expression, and afterwards, if the
                        // next token is a colon and the expression was a simple
                        // Identifier node, we switch to interpreting it as a label.
                        default:
                          var maybeName = tokVal, expr = parseExpression();
                          if (starttype === _name && expr.type === "Identifier" && eat(_colon)) {
                            for (var i = 0; i < labels.length; ++i)
                              if (labels[i].name === maybeName) raise(expr.start, "Label '" + maybeName + "' is already declared");
                            var kind = tokType.isLoop ? "loop" : tokType === _switch ? "switch" : null;
                            labels.push({ name: maybeName, kind });
                            node.body = parseStatement();
                            labels.pop();
                            node.label = expr;
                            return finishNode(node, "LabeledStatement");
                          } else {
                            node.expression = expr;
                            semicolon();
                            return finishNode(node, "ExpressionStatement");
                          }
                      }
                    }
                    function parseParenExpression() {
                      expect(_parenL);
                      var val = parseExpression();
                      expect(_parenR);
                      return val;
                    }
                    function parseBlock(allowStrict) {
                      var node = startNode(), first3 = true, strict2 = false, oldStrict;
                      node.body = [];
                      expect(_braceL);
                      while (!eat(_braceR)) {
                        var stmt = parseStatement();
                        node.body.push(stmt);
                        if (first3 && allowStrict && isUseStrict(stmt)) {
                          oldStrict = strict2;
                          setStrict(strict2 = true);
                        }
                        first3 = false;
                      }
                      if (strict2 && !oldStrict) setStrict(false);
                      return finishNode(node, "BlockStatement");
                    }
                    function parseFor(node, init) {
                      node.init = init;
                      expect(_semi);
                      node.test = tokType === _semi ? null : parseExpression();
                      expect(_semi);
                      node.update = tokType === _parenR ? null : parseExpression();
                      expect(_parenR);
                      node.body = parseStatement();
                      labels.pop();
                      return finishNode(node, "ForStatement");
                    }
                    function parseForIn(node, init) {
                      node.left = init;
                      node.right = parseExpression();
                      expect(_parenR);
                      node.body = parseStatement();
                      labels.pop();
                      return finishNode(node, "ForInStatement");
                    }
                    function parseVar(node, noIn) {
                      node.declarations = [];
                      node.kind = "var";
                      for (; ; ) {
                        var decl = startNode();
                        decl.id = parseIdent();
                        if (strict && isStrictBadIdWord(decl.id.name))
                          raise(decl.id.start, "Binding " + decl.id.name + " in strict mode");
                        decl.init = eat(_eq) ? parseExpression(true, noIn) : null;
                        node.declarations.push(finishNode(decl, "VariableDeclarator"));
                        if (!eat(_comma)) break;
                      }
                      return node;
                    }
                    function parseExpression(noComma, noIn) {
                      var expr = parseMaybeAssign(noIn);
                      if (!noComma && tokType === _comma) {
                        var node = startNodeFrom(expr);
                        node.expressions = [expr];
                        while (eat(_comma)) node.expressions.push(parseMaybeAssign(noIn));
                        return finishNode(node, "SequenceExpression");
                      }
                      return expr;
                    }
                    function parseMaybeAssign(noIn) {
                      var left = parseMaybeConditional(noIn);
                      if (tokType.isAssign) {
                        var node = startNodeFrom(left);
                        node.operator = tokVal;
                        node.left = left;
                        next();
                        node.right = parseMaybeAssign(noIn);
                        checkLVal(left);
                        return finishNode(node, "AssignmentExpression");
                      }
                      return left;
                    }
                    function parseMaybeConditional(noIn) {
                      var expr = parseExprOps(noIn);
                      if (eat(_question)) {
                        var node = startNodeFrom(expr);
                        node.test = expr;
                        node.consequent = parseExpression(true);
                        expect(_colon);
                        node.alternate = parseExpression(true, noIn);
                        return finishNode(node, "ConditionalExpression");
                      }
                      return expr;
                    }
                    function parseExprOps(noIn) {
                      return parseExprOp(parseMaybeUnary(), -1, noIn);
                    }
                    function parseExprOp(left, minPrec, noIn) {
                      var prec = tokType.binop;
                      if (prec != null && (!noIn || tokType !== _in)) {
                        if (prec > minPrec) {
                          var node = startNodeFrom(left);
                          node.left = left;
                          node.operator = tokVal;
                          var op = tokType;
                          next();
                          node.right = parseExprOp(parseMaybeUnary(), prec, noIn);
                          var exprNode = finishNode(node, op === _logicalOR || op === _logicalAND ? "LogicalExpression" : "BinaryExpression");
                          return parseExprOp(exprNode, minPrec, noIn);
                        }
                      }
                      return left;
                    }
                    function parseMaybeUnary() {
                      if (tokType.prefix) {
                        var node = startNode(), update8 = tokType.isUpdate;
                        node.operator = tokVal;
                        node.prefix = true;
                        tokRegexpAllowed = true;
                        next();
                        node.argument = parseMaybeUnary();
                        if (update8) checkLVal(node.argument);
                        else if (strict && node.operator === "delete" && node.argument.type === "Identifier")
                          raise(node.start, "Deleting local variable in strict mode");
                        return finishNode(node, update8 ? "UpdateExpression" : "UnaryExpression");
                      }
                      var expr = parseExprSubscripts();
                      while (tokType.postfix && !canInsertSemicolon()) {
                        var node = startNodeFrom(expr);
                        node.operator = tokVal;
                        node.prefix = false;
                        node.argument = expr;
                        checkLVal(expr);
                        next();
                        expr = finishNode(node, "UpdateExpression");
                      }
                      return expr;
                    }
                    function parseExprSubscripts() {
                      return parseSubscripts(parseExprAtom());
                    }
                    function parseSubscripts(base, noCalls) {
                      if (eat(_dot)) {
                        var node = startNodeFrom(base);
                        node.object = base;
                        node.property = parseIdent(true);
                        node.computed = false;
                        return parseSubscripts(finishNode(node, "MemberExpression"), noCalls);
                      } else if (eat(_bracketL)) {
                        var node = startNodeFrom(base);
                        node.object = base;
                        node.property = parseExpression();
                        node.computed = true;
                        expect(_bracketR);
                        return parseSubscripts(finishNode(node, "MemberExpression"), noCalls);
                      } else if (!noCalls && eat(_parenL)) {
                        var node = startNodeFrom(base);
                        node.callee = base;
                        node.arguments = parseExprList(_parenR, false);
                        return parseSubscripts(finishNode(node, "CallExpression"), noCalls);
                      } else return base;
                    }
                    function parseExprAtom() {
                      switch (tokType) {
                        case _this:
                          var node = startNode();
                          next();
                          return finishNode(node, "ThisExpression");
                        case _name:
                          return parseIdent();
                        case _num:
                        case _string:
                        case _regexp:
                          var node = startNode();
                          node.value = tokVal;
                          node.raw = input.slice(tokStart, tokEnd);
                          next();
                          return finishNode(node, "Literal");
                        case _null:
                        case _true:
                        case _false:
                          var node = startNode();
                          node.value = tokType.atomValue;
                          node.raw = tokType.keyword;
                          next();
                          return finishNode(node, "Literal");
                        case _parenL:
                          var tokStartLoc1 = tokStartLoc, tokStart1 = tokStart;
                          next();
                          var val = parseExpression();
                          val.start = tokStart1;
                          val.end = tokEnd;
                          if (options.locations) {
                            val.loc.start = tokStartLoc1;
                            val.loc.end = tokEndLoc;
                          }
                          if (options.ranges)
                            val.range = [tokStart1, tokEnd];
                          expect(_parenR);
                          return val;
                        case _bracketL:
                          var node = startNode();
                          next();
                          node.elements = parseExprList(_bracketR, true, true);
                          return finishNode(node, "ArrayExpression");
                        case _braceL:
                          return parseObj();
                        case _function:
                          var node = startNode();
                          next();
                          return parseFunction(node, false);
                        case _new:
                          return parseNew();
                        default:
                          unexpected();
                      }
                    }
                    function parseNew() {
                      var node = startNode();
                      next();
                      node.callee = parseSubscripts(parseExprAtom(), true);
                      if (eat(_parenL)) node.arguments = parseExprList(_parenR, false);
                      else node.arguments = empty;
                      return finishNode(node, "NewExpression");
                    }
                    function parseObj() {
                      var node = startNode(), first3 = true, sawGetSet = false;
                      node.properties = [];
                      next();
                      while (!eat(_braceR)) {
                        if (!first3) {
                          expect(_comma);
                          if (options.allowTrailingCommas && eat(_braceR)) break;
                        } else first3 = false;
                        var prop = { key: parsePropertyName() }, isGetSet = false, kind;
                        if (eat(_colon)) {
                          prop.value = parseExpression(true);
                          kind = prop.kind = "init";
                        } else if (options.ecmaVersion >= 5 && prop.key.type === "Identifier" && (prop.key.name === "get" || prop.key.name === "set")) {
                          isGetSet = sawGetSet = true;
                          kind = prop.kind = prop.key.name;
                          prop.key = parsePropertyName();
                          if (tokType !== _parenL) unexpected();
                          prop.value = parseFunction(startNode(), false);
                        } else unexpected();
                        if (prop.key.type === "Identifier" && (strict || sawGetSet)) {
                          for (var i = 0; i < node.properties.length; ++i) {
                            var other = node.properties[i];
                            if (other.key.name === prop.key.name) {
                              var conflict = kind == other.kind || isGetSet && other.kind === "init" || kind === "init" && (other.kind === "get" || other.kind === "set");
                              if (conflict && !strict && kind === "init" && other.kind === "init") conflict = false;
                              if (conflict) raise(prop.key.start, "Redefinition of property");
                            }
                          }
                        }
                        node.properties.push(prop);
                      }
                      return finishNode(node, "ObjectExpression");
                    }
                    function parsePropertyName() {
                      if (tokType === _num || tokType === _string) return parseExprAtom();
                      return parseIdent(true);
                    }
                    function parseFunction(node, isStatement) {
                      if (tokType === _name) node.id = parseIdent();
                      else if (isStatement) unexpected();
                      else node.id = null;
                      node.params = [];
                      var first3 = true;
                      expect(_parenL);
                      while (!eat(_parenR)) {
                        if (!first3) expect(_comma);
                        else first3 = false;
                        node.params.push(parseIdent());
                      }
                      var oldInFunc = inFunction, oldLabels = labels;
                      inFunction = true;
                      labels = [];
                      node.body = parseBlock(true);
                      inFunction = oldInFunc;
                      labels = oldLabels;
                      if (strict || node.body.body.length && isUseStrict(node.body.body[0])) {
                        for (var i = node.id ? -1 : 0; i < node.params.length; ++i) {
                          var id = i < 0 ? node.id : node.params[i];
                          if (isStrictReservedWord(id.name) || isStrictBadIdWord(id.name))
                            raise(id.start, "Defining '" + id.name + "' in strict mode");
                          if (i >= 0) {
                            for (var j = 0; j < i; ++j) if (id.name === node.params[j].name)
                              raise(id.start, "Argument name clash in strict mode");
                          }
                        }
                      }
                      return finishNode(node, isStatement ? "FunctionDeclaration" : "FunctionExpression");
                    }
                    function parseExprList(close, allowTrailingComma, allowEmpty) {
                      var elts = [], first3 = true;
                      while (!eat(close)) {
                        if (!first3) {
                          expect(_comma);
                          if (allowTrailingComma && options.allowTrailingCommas && eat(close)) break;
                        } else first3 = false;
                        if (allowEmpty && tokType === _comma) elts.push(null);
                        else elts.push(parseExpression(true));
                      }
                      return elts;
                    }
                    function parseIdent(liberal) {
                      var node = startNode();
                      node.name = tokType === _name ? tokVal : liberal && !options.forbidReserved && tokType.keyword || unexpected();
                      tokRegexpAllowed = false;
                      next();
                      return finishNode(node, "Identifier");
                    }
                  });
                })
              ),
              /***/
              "./original-repo/interpreter.js": (
                /*!**************************************!*\
                  !*** ./original-repo/interpreter.js ***!
                  \**************************************/
                /***/
                (function(__unused_webpack_module2, __unused_webpack_exports, __webpack_require__2) {
                  "use strict";
                  var acorn = __webpack_require__2(
                    /*! ./original-repo/acorn.js */
                    "./original-repo/acorn.js"
                  );
                  var Interpreter2 = function(code, opt_initFunc) {
                    if (typeof code === "string") {
                      code = this.parse_(code, "code");
                    }
                    this.nodeConstructor = code.constructor;
                    var ast = new this.nodeConstructor({ options: {} });
                    for (var prop in code) {
                      ast[prop] = prop === "body" ? code[prop].slice() : code[prop];
                    }
                    this.ast = ast;
                    this.initFunc_ = opt_initFunc;
                    this.paused_ = false;
                    this.polyfills_ = [];
                    this.functionCounter_ = 0;
                    this.stepFunctions_ = /* @__PURE__ */ Object.create(null);
                    var stepMatch = /^step([A-Z]\w*)$/;
                    var m;
                    for (var methodName in this) {
                      if (typeof this[methodName] === "function" && (m = methodName.match(stepMatch))) {
                        this.stepFunctions_[m[1]] = this[methodName].bind(this);
                      }
                    }
                    this.globalScope = this.createScope(this.ast, null);
                    this.globalObject = this.globalScope.object;
                    this.ast = this.parse_(this.polyfills_.join("\n"), "polyfills");
                    this.polyfills_ = void 0;
                    Interpreter2.stripLocations_(this.ast, void 0, void 0);
                    var state = new Interpreter2.State(this.ast, this.globalScope);
                    state.done = false;
                    this.stateStack = [state];
                    this.run();
                    this.value = void 0;
                    this.ast = ast;
                    var state = new Interpreter2.State(this.ast, this.globalScope);
                    state.done = false;
                    this.stateStack.length = 0;
                    this.stateStack[0] = state;
                    this["stateStack"] = this.stateStack;
                  };
                  Interpreter2.Completion = {
                    NORMAL: 0,
                    BREAK: 1,
                    CONTINUE: 2,
                    RETURN: 3,
                    THROW: 4
                  };
                  Interpreter2.PARSE_OPTIONS = {
                    "locations": true,
                    "ecmaVersion": 5
                  };
                  Interpreter2.READONLY_DESCRIPTOR = {
                    configurable: true,
                    enumerable: true,
                    writable: false
                  };
                  Interpreter2.NONENUMERABLE_DESCRIPTOR = {
                    configurable: true,
                    enumerable: false,
                    writable: true
                  };
                  Interpreter2.READONLY_NONENUMERABLE_DESCRIPTOR = {
                    configurable: true,
                    enumerable: false,
                    writable: false
                  };
                  Interpreter2.NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR = {
                    configurable: false,
                    enumerable: false,
                    writable: false
                  };
                  Interpreter2.VARIABLE_DESCRIPTOR = {
                    configurable: false,
                    enumerable: true,
                    writable: true
                  };
                  Interpreter2.STEP_ERROR = { "STEP_ERROR": true };
                  Interpreter2.SCOPE_REFERENCE = { "SCOPE_REFERENCE": true };
                  Interpreter2.VALUE_IN_DESCRIPTOR = { "VALUE_IN_DESCRIPTOR": true };
                  Interpreter2.REGEXP_TIMEOUT = { "REGEXP_TIMEOUT": true };
                  Interpreter2.toStringCycles_ = [];
                  Interpreter2.vm = null;
                  Interpreter2.nativeGlobal = self ? self : this;
                  Interpreter2.WORKER_CODE = [
                    "onmessage = function(e) {",
                    "var result;",
                    "var data = e.data;",
                    "switch (data[0]) {",
                    "case 'split':",
                    // ['split', string, separator, limit]
                    "result = data[1].split(data[2], data[3]);",
                    "break;",
                    "case 'match':",
                    // ['match', string, regexp]
                    "result = data[1].match(data[2]);",
                    "break;",
                    "case 'search':",
                    // ['search', string, regexp]
                    "result = data[1].search(data[2]);",
                    "break;",
                    "case 'replace':",
                    // ['replace', string, regexp, newSubstr]
                    "result = data[1].replace(data[2], data[3]);",
                    "break;",
                    "case 'exec':",
                    // ['exec', regexp, lastIndex, string]
                    "var regexp = data[1];",
                    "regexp.lastIndex = data[2];",
                    "result = [regexp.exec(data[3]), data[1].lastIndex];",
                    "break;",
                    "default:",
                    "throw Error('Unknown RegExp operation: ' + data[0]);",
                    "}",
                    "postMessage(result);",
                    "};"
                  ];
                  Interpreter2.legalArrayLength = function(x) {
                    var n = x >>> 0;
                    return n === Number(x) ? n : NaN;
                  };
                  Interpreter2.legalArrayIndex = function(x) {
                    var n = x >>> 0;
                    return String(n) === String(x) && n !== 4294967295 ? n : NaN;
                  };
                  Interpreter2.stripLocations_ = function(node, start2, end) {
                    if (start2) {
                      node["start"] = start2;
                    } else {
                      delete node["start"];
                    }
                    if (end) {
                      node["end"] = end;
                    } else {
                      delete node["end"];
                    }
                    for (var name in node) {
                      if (name !== "loc" && node.hasOwnProperty(name)) {
                        var prop = node[name];
                        if (prop && typeof prop === "object") {
                          Interpreter2.stripLocations_(prop, start2, end);
                        }
                      }
                    }
                  };
                  Interpreter2.prototype["REGEXP_MODE"] = 2;
                  Interpreter2.prototype["REGEXP_THREAD_TIMEOUT"] = 1e3;
                  Interpreter2.prototype["POLYFILL_TIMEOUT"] = 1e3;
                  Interpreter2.prototype.getterStep_ = false;
                  Interpreter2.prototype.setterStep_ = false;
                  Interpreter2.prototype.appendCodeNumber_ = 0;
                  Interpreter2.prototype.parse_ = function(code, sourceFile) {
                    var options = {};
                    for (var name in Interpreter2.PARSE_OPTIONS) {
                      options[name] = Interpreter2.PARSE_OPTIONS[name];
                    }
                    options["sourceFile"] = sourceFile;
                    return acorn.parse(code, options);
                  };
                  Interpreter2.prototype.appendCode = function(code) {
                    var state = this.stateStack[0];
                    if (!state || state.node["type"] !== "Program") {
                      throw Error("Expecting original AST to start with a Program node.");
                    }
                    if (typeof code === "string") {
                      code = this.parse_(code, "appendCode" + this.appendCodeNumber_++);
                    }
                    if (!code || code["type"] !== "Program") {
                      throw Error("Expecting new AST to start with a Program node.");
                    }
                    this.populateScope_(code, state.scope);
                    Array.prototype.push.apply(state.node["body"], code["body"]);
                    state.done = false;
                  };
                  Interpreter2.prototype.step = function() {
                    var stack = this.stateStack;
                    var startTime = Date.now();
                    do {
                      var state = stack[stack.length - 1];
                      if (!state) {
                        return false;
                      }
                      var node = state.node, type = node["type"];
                      if (type === "Program" && state.done) {
                        return false;
                      } else if (this.paused_) {
                        return true;
                      }
                      try {
                        var nextState = this.stepFunctions_[type](stack, state, node);
                      } catch (e) {
                        if (e !== Interpreter2.STEP_ERROR) {
                          throw e;
                        }
                      }
                      if (nextState) {
                        stack.push(nextState);
                      }
                      if (this.getterStep_) {
                        throw Error("Getter not supported in this context");
                      }
                      if (this.setterStep_) {
                        throw Error("Setter not supported in this context");
                      }
                    } while (!node["end"] && startTime + this["POLYFILL_TIMEOUT"] > Date.now());
                    return true;
                  };
                  Interpreter2.prototype.run = function() {
                    while (!this.paused_ && this.step()) {
                    }
                    return this.paused_;
                  };
                  Interpreter2.prototype.initGlobal = function(globalObject) {
                    this.setProperty(
                      globalObject,
                      "NaN",
                      NaN,
                      Interpreter2.NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR
                    );
                    this.setProperty(
                      globalObject,
                      "Infinity",
                      Infinity,
                      Interpreter2.NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR
                    );
                    this.setProperty(
                      globalObject,
                      "undefined",
                      void 0,
                      Interpreter2.NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR
                    );
                    this.setProperty(
                      globalObject,
                      "window",
                      globalObject,
                      Interpreter2.READONLY_DESCRIPTOR
                    );
                    this.setProperty(
                      globalObject,
                      "this",
                      globalObject,
                      Interpreter2.NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR
                    );
                    this.setProperty(globalObject, "self", globalObject);
                    this.OBJECT_PROTO = new Interpreter2.Object(null);
                    this.FUNCTION_PROTO = new Interpreter2.Object(this.OBJECT_PROTO);
                    this.initFunction(globalObject);
                    this.initObject(globalObject);
                    globalObject.proto = this.OBJECT_PROTO;
                    this.setProperty(
                      globalObject,
                      "constructor",
                      this.OBJECT,
                      Interpreter2.NONENUMERABLE_DESCRIPTOR
                    );
                    this.initArray(globalObject);
                    this.initString(globalObject);
                    this.initBoolean(globalObject);
                    this.initNumber(globalObject);
                    this.initDate(globalObject);
                    this.initRegExp(globalObject);
                    this.initError(globalObject);
                    this.initMath(globalObject);
                    this.initJSON(globalObject);
                    var thisInterpreter = this;
                    var func = this.createNativeFunction(
                      function(x) {
                        throw EvalError("Can't happen");
                      },
                      false
                    );
                    func.eval = true;
                    this.setProperty(
                      globalObject,
                      "eval",
                      func,
                      Interpreter2.NONENUMERABLE_DESCRIPTOR
                    );
                    this.setProperty(
                      globalObject,
                      "parseInt",
                      this.createNativeFunction(parseInt, false),
                      Interpreter2.NONENUMERABLE_DESCRIPTOR
                    );
                    this.setProperty(
                      globalObject,
                      "parseFloat",
                      this.createNativeFunction(parseFloat, false),
                      Interpreter2.NONENUMERABLE_DESCRIPTOR
                    );
                    this.setProperty(
                      globalObject,
                      "isNaN",
                      this.createNativeFunction(isNaN, false),
                      Interpreter2.NONENUMERABLE_DESCRIPTOR
                    );
                    this.setProperty(
                      globalObject,
                      "isFinite",
                      this.createNativeFunction(isFinite, false),
                      Interpreter2.NONENUMERABLE_DESCRIPTOR
                    );
                    var strFunctions = [
                      [escape, "escape"],
                      [unescape, "unescape"],
                      [decodeURI, "decodeURI"],
                      [decodeURIComponent, "decodeURIComponent"],
                      [encodeURI, "encodeURI"],
                      [encodeURIComponent, "encodeURIComponent"]
                    ];
                    for (var i = 0; i < strFunctions.length; i++) {
                      var wrapper = /* @__PURE__ */ (function(nativeFunc) {
                        return function(str) {
                          try {
                            return nativeFunc(str);
                          } catch (e) {
                            thisInterpreter.throwException(thisInterpreter.URI_ERROR, e.message);
                          }
                        };
                      })(strFunctions[i][0]);
                      this.setProperty(
                        globalObject,
                        strFunctions[i][1],
                        this.createNativeFunction(wrapper, false),
                        Interpreter2.NONENUMERABLE_DESCRIPTOR
                      );
                    }
                    this["OBJECT"] = this.OBJECT;
                    this["OBJECT_PROTO"] = this.OBJECT_PROTO;
                    this["FUNCTION"] = this.FUNCTION;
                    this["FUNCTION_PROTO"] = this.FUNCTION_PROTO;
                    this["ARRAY"] = this.ARRAY;
                    this["ARRAY_PROTO"] = this.ARRAY_PROTO;
                    this["REGEXP"] = this.REGEXP;
                    this["REGEXP_PROTO"] = this.REGEXP_PROTO;
                    this["DATE"] = this.DATE;
                    this["DATE_PROTO"] = this.DATE_PROTO;
                    if (this.initFunc_) {
                      this.initFunc_(this, globalObject);
                    }
                  };
                  Interpreter2.prototype.functionCodeNumber_ = 0;
                  Interpreter2.prototype.initFunction = function(globalObject) {
                    var thisInterpreter = this;
                    var wrapper;
                    var identifierRegexp = /^[A-Za-z_$][\w$]*$/;
                    wrapper = function Function2(var_args) {
                      if (arguments.length) {
                        var code = String(arguments[arguments.length - 1]);
                      } else {
                        var code = "";
                      }
                      var argsStr = Array.prototype.slice.call(arguments, 0, -1).join(",").trim();
                      if (argsStr) {
                        var args = argsStr.split(/\s*,\s*/);
                        for (var i = 0; i < args.length; i++) {
                          var name = args[i];
                          if (!identifierRegexp.test(name)) {
                            thisInterpreter.throwException(
                              thisInterpreter.SYNTAX_ERROR,
                              "Invalid function argument: " + name
                            );
                          }
                        }
                        argsStr = args.join(", ");
                      }
                      try {
                        var ast = this.parse_(
                          "(function(" + argsStr + ") {" + code + "})",
                          "function" + this.functionCodeNumber_++
                        );
                      } catch (e) {
                        thisInterpreter.throwException(
                          thisInterpreter.SYNTAX_ERROR,
                          "Invalid code: " + e.message
                        );
                      }
                      if (ast["body"].length !== 1) {
                        thisInterpreter.throwException(
                          thisInterpreter.SYNTAX_ERROR,
                          "Invalid code in function body."
                        );
                      }
                      var node = ast["body"][0]["expression"];
                      return thisInterpreter.createFunction(node, thisInterpreter.globalScope, "anonymous");
                    };
                    this.FUNCTION = this.createNativeFunction(wrapper, true);
                    this.setProperty(
                      globalObject,
                      "Function",
                      this.FUNCTION,
                      Interpreter2.NONENUMERABLE_DESCRIPTOR
                    );
                    this.setProperty(
                      this.FUNCTION,
                      "prototype",
                      this.FUNCTION_PROTO,
                      Interpreter2.NONENUMERABLE_DESCRIPTOR
                    );
                    this.setProperty(
                      this.FUNCTION_PROTO,
                      "constructor",
                      this.FUNCTION,
                      Interpreter2.NONENUMERABLE_DESCRIPTOR
                    );
                    this.FUNCTION_PROTO.nativeFunc = function() {
                    };
                    this.FUNCTION_PROTO.nativeFunc.id = this.functionCounter_++;
                    this.FUNCTION_PROTO.illegalConstructor = true;
                    this.setProperty(
                      this.FUNCTION_PROTO,
                      "length",
                      0,
                      Interpreter2.READONLY_NONENUMERABLE_DESCRIPTOR
                    );
                    this.FUNCTION_PROTO.class = "Function";
                    wrapper = function apply(thisArg, args) {
                      var state = thisInterpreter.stateStack[thisInterpreter.stateStack.length - 1];
                      state.func_ = this;
                      state.funcThis_ = thisArg;
                      state.arguments_ = [];
                      if (args !== null && args !== void 0) {
                        if (args instanceof Interpreter2.Object) {
                          state.arguments_ = thisInterpreter.arrayPseudoToNative(args);
                        } else {
                          thisInterpreter.throwException(
                            thisInterpreter.TYPE_ERROR,
                            "CreateListFromArrayLike called on non-object"
                          );
                        }
                      }
                      state.doneExec_ = false;
                    };
                    this.setNativeFunctionPrototype(this.FUNCTION, "apply", wrapper);
                    wrapper = function call(thisArg) {
                      var state = thisInterpreter.stateStack[thisInterpreter.stateStack.length - 1];
                      state.func_ = this;
                      state.funcThis_ = thisArg;
                      state.arguments_ = [];
                      for (var i = 1; i < arguments.length; i++) {
                        state.arguments_.push(arguments[i]);
                      }
                      state.doneExec_ = false;
                    };
                    this.setNativeFunctionPrototype(this.FUNCTION, "call", wrapper);
                    this.polyfills_.push(
                      // Polyfill copied from:
                      // developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind
                      "Object.defineProperty(Function.prototype, 'bind',",
                      "{configurable: true, writable: true, value:",
                      "function bind(oThis) {",
                      "if (typeof this !== 'function') {",
                      "throw TypeError('What is trying to be bound is not callable');",
                      "}",
                      "var aArgs   = Array.prototype.slice.call(arguments, 1),",
                      "fToBind = this,",
                      "fNOP    = function() {},",
                      "fBound  = function() {",
                      "return fToBind.apply(this instanceof fNOP",
                      "? this",
                      ": oThis,",
                      "aArgs.concat(Array.prototype.slice.call(arguments)));",
                      "};",
                      "if (this.prototype) {",
                      "fNOP.prototype = this.prototype;",
                      "}",
                      "fBound.prototype = new fNOP();",
                      "return fBound;",
                      "}",
                      "});",
                      ""
                    );
                    wrapper = function toString5() {
                      return String(this);
                    };
                    this.setNativeFunctionPrototype(this.FUNCTION, "toString", wrapper);
                    this.setProperty(
                      this.FUNCTION,
                      "toString",
                      this.createNativeFunction(wrapper, false),
                      Interpreter2.NONENUMERABLE_DESCRIPTOR
                    );
                    wrapper = function valueOf2() {
                      return this.valueOf();
                    };
                    this.setNativeFunctionPrototype(this.FUNCTION, "valueOf", wrapper);
                    this.setProperty(
                      this.FUNCTION,
                      "valueOf",
                      this.createNativeFunction(wrapper, false),
                      Interpreter2.NONENUMERABLE_DESCRIPTOR
                    );
                  };
                  Interpreter2.prototype.initObject = function(globalObject) {
                    var thisInterpreter = this;
                    var wrapper;
                    wrapper = function Object2(value) {
                      if (value === void 0 || value === null) {
                        if (thisInterpreter.calledWithNew()) {
                          return this;
                        } else {
                          return thisInterpreter.createObjectProto(thisInterpreter.OBJECT_PROTO);
                        }
                      }
                      if (!(value instanceof Interpreter2.Object)) {
                        var box = thisInterpreter.createObjectProto(
                          thisInterpreter.getPrototype(value)
                        );
                        box.data = value;
                        return box;
                      }
                      return value;
                    };
                    this.OBJECT = this.createNativeFunction(wrapper, true);
                    this.setProperty(
                      this.OBJECT,
                      "prototype",
                      this.OBJECT_PROTO,
                      Interpreter2.NONENUMERABLE_DESCRIPTOR
                    );
                    this.setProperty(
                      this.OBJECT_PROTO,
                      "constructor",
                      this.OBJECT,
                      Interpreter2.NONENUMERABLE_DESCRIPTOR
                    );
                    this.setProperty(
                      globalObject,
                      "Object",
                      this.OBJECT,
                      Interpreter2.NONENUMERABLE_DESCRIPTOR
                    );
                    var throwIfNullUndefined = function(value) {
                      if (value === void 0 || value === null) {
                        thisInterpreter.throwException(
                          thisInterpreter.TYPE_ERROR,
                          "Cannot convert '" + value + "' to object"
                        );
                      }
                    };
                    wrapper = function getOwnPropertyNames(obj) {
                      throwIfNullUndefined(obj);
                      var props = obj instanceof Interpreter2.Object ? obj.properties : obj;
                      return thisInterpreter.arrayNativeToPseudo(
                        Object.getOwnPropertyNames(props)
                      );
                    };
                    this.setProperty(
                      this.OBJECT,
                      "getOwnPropertyNames",
                      this.createNativeFunction(wrapper, false),
                      Interpreter2.NONENUMERABLE_DESCRIPTOR
                    );
                    wrapper = function keys2(obj) {
                      throwIfNullUndefined(obj);
                      if (obj instanceof Interpreter2.Object) {
                        obj = obj.properties;
                      }
                      return thisInterpreter.arrayNativeToPseudo(Object.keys(obj));
                    };
                    this.setProperty(
                      this.OBJECT,
                      "keys",
                      this.createNativeFunction(wrapper, false),
                      Interpreter2.NONENUMERABLE_DESCRIPTOR
                    );
                    wrapper = function create_(proto) {
                      if (proto === null) {
                        return thisInterpreter.createObjectProto(null);
                      }
                      if (!(proto instanceof Interpreter2.Object)) {
                        thisInterpreter.throwException(
                          thisInterpreter.TYPE_ERROR,
                          "Object prototype may only be an Object or null"
                        );
                      }
                      return thisInterpreter.createObjectProto(proto);
                    };
                    this.setProperty(
                      this.OBJECT,
                      "create",
                      this.createNativeFunction(wrapper, false),
                      Interpreter2.NONENUMERABLE_DESCRIPTOR
                    );
                    this.polyfills_.push(
                      "(function() {",
                      "var create_ = Object.create;",
                      "Object.create = function create(proto, props) {",
                      "var obj = create_(proto);",
                      "props && Object.defineProperties(obj, props);",
                      "return obj;",
                      "};",
                      "})();",
                      ""
                    );
                    wrapper = function defineProperty(obj, prop, descriptor) {
                      prop = String(prop);
                      if (!(obj instanceof Interpreter2.Object)) {
                        thisInterpreter.throwException(
                          thisInterpreter.TYPE_ERROR,
                          "Object.defineProperty called on non-object"
                        );
                      }
                      if (!(descriptor instanceof Interpreter2.Object)) {
                        thisInterpreter.throwException(
                          thisInterpreter.TYPE_ERROR,
                          "Property description must be an object"
                        );
                      }
                      if (!obj.properties[prop] && obj.preventExtensions) {
                        thisInterpreter.throwException(
                          thisInterpreter.TYPE_ERROR,
                          "Can't define property '" + prop + "', object is not extensible"
                        );
                      }
                      thisInterpreter.setProperty(
                        obj,
                        prop,
                        Interpreter2.VALUE_IN_DESCRIPTOR,
                        descriptor.properties
                      );
                      return obj;
                    };
                    this.setProperty(
                      this.OBJECT,
                      "defineProperty",
                      this.createNativeFunction(wrapper, false),
                      Interpreter2.NONENUMERABLE_DESCRIPTOR
                    );
                    this.polyfills_.push(
                      // Flatten the descriptor to remove any inheritance or getter functions.
                      "(function() {",
                      "var defineProperty_ = Object.defineProperty;",
                      "Object.defineProperty = function defineProperty(obj, prop, d1) {",
                      "var d2 = {};",
                      "if ('configurable' in d1) d2.configurable = d1.configurable;",
                      "if ('enumerable' in d1) d2.enumerable = d1.enumerable;",
                      "if ('writable' in d1) d2.writable = d1.writable;",
                      "if ('value' in d1) d2.value = d1.value;",
                      "if ('get' in d1) d2.get = d1.get;",
                      "if ('set' in d1) d2.set = d1.set;",
                      "return defineProperty_(obj, prop, d2);",
                      "};",
                      "})();",
                      "Object.defineProperty(Object, 'defineProperties',",
                      "{configurable: true, writable: true, value:",
                      "function defineProperties(obj, props) {",
                      "var keys = Object.keys(props);",
                      "for (var i = 0; i < keys.length; i++) {",
                      "Object.defineProperty(obj, keys[i], props[keys[i]]);",
                      "}",
                      "return obj;",
                      "}",
                      "});",
                      ""
                    );
                    wrapper = function getOwnPropertyDescriptor(obj, prop) {
                      if (!(obj instanceof Interpreter2.Object)) {
                        thisInterpreter.throwException(
                          thisInterpreter.TYPE_ERROR,
                          "Object.getOwnPropertyDescriptor called on non-object"
                        );
                      }
                      prop = String(prop);
                      if (!(prop in obj.properties)) {
                        return void 0;
                      }
                      var descriptor = Object.getOwnPropertyDescriptor(obj.properties, prop);
                      var getter = obj.getter[prop];
                      var setter = obj.setter[prop];
                      var pseudoDescriptor = thisInterpreter.createObjectProto(thisInterpreter.OBJECT_PROTO);
                      if (getter || setter) {
                        thisInterpreter.setProperty(pseudoDescriptor, "get", getter);
                        thisInterpreter.setProperty(pseudoDescriptor, "set", setter);
                      } else {
                        thisInterpreter.setProperty(
                          pseudoDescriptor,
                          "value",
                          descriptor.value
                        );
                        thisInterpreter.setProperty(
                          pseudoDescriptor,
                          "writable",
                          descriptor.writable
                        );
                      }
                      thisInterpreter.setProperty(
                        pseudoDescriptor,
                        "configurable",
                        descriptor.configurable
                      );
                      thisInterpreter.setProperty(
                        pseudoDescriptor,
                        "enumerable",
                        descriptor.enumerable
                      );
                      return pseudoDescriptor;
                    };
                    this.setProperty(
                      this.OBJECT,
                      "getOwnPropertyDescriptor",
                      this.createNativeFunction(wrapper, false),
                      Interpreter2.NONENUMERABLE_DESCRIPTOR
                    );
                    wrapper = function getPrototypeOf(obj) {
                      throwIfNullUndefined(obj);
                      return thisInterpreter.getPrototype(obj);
                    };
                    this.setProperty(
                      this.OBJECT,
                      "getPrototypeOf",
                      this.createNativeFunction(wrapper, false),
                      Interpreter2.NONENUMERABLE_DESCRIPTOR
                    );
                    wrapper = function isExtensible2(obj) {
                      return Boolean(obj) && !obj.preventExtensions;
                    };
                    this.setProperty(
                      this.OBJECT,
                      "isExtensible",
                      this.createNativeFunction(wrapper, false),
                      Interpreter2.NONENUMERABLE_DESCRIPTOR
                    );
                    wrapper = function preventExtensions(obj) {
                      if (obj instanceof Interpreter2.Object) {
                        obj.preventExtensions = true;
                      }
                      return obj;
                    };
                    this.setProperty(
                      this.OBJECT,
                      "preventExtensions",
                      this.createNativeFunction(wrapper, false),
                      Interpreter2.NONENUMERABLE_DESCRIPTOR
                    );
                    this.setNativeFunctionPrototype(
                      this.OBJECT,
                      "toString",
                      Interpreter2.Object.prototype.toString
                    );
                    this.setNativeFunctionPrototype(
                      this.OBJECT,
                      "toLocaleString",
                      Interpreter2.Object.prototype.toString
                    );
                    this.setNativeFunctionPrototype(
                      this.OBJECT,
                      "valueOf",
                      Interpreter2.Object.prototype.valueOf
                    );
                    wrapper = function hasOwnProperty2(prop) {
                      throwIfNullUndefined(this);
                      if (this instanceof Interpreter2.Object) {
                        return String(prop) in this.properties;
                      }
                      return this.hasOwnProperty(prop);
                    };
                    this.setNativeFunctionPrototype(this.OBJECT, "hasOwnProperty", wrapper);
                    wrapper = function propertyIsEnumerable(prop) {
                      throwIfNullUndefined(this);
                      if (this instanceof Interpreter2.Object) {
                        return Object.prototype.propertyIsEnumerable.call(this.properties, prop);
                      }
                      return this.propertyIsEnumerable(prop);
                    };
                    this.setNativeFunctionPrototype(this.OBJECT, "propertyIsEnumerable", wrapper);
                    wrapper = function isPrototypeOf(obj) {
                      while (true) {
                        obj = thisInterpreter.getPrototype(obj);
                        if (!obj) {
                          return false;
                        }
                        if (obj === this) {
                          return true;
                        }
                      }
                    };
                    this.setNativeFunctionPrototype(this.OBJECT, "isPrototypeOf", wrapper);
                  };
                  Interpreter2.prototype.initArray = function(globalObject) {
                    var thisInterpreter = this;
                    var wrapper;
                    wrapper = function Array2(var_args) {
                      if (thisInterpreter.calledWithNew()) {
                        var newArray = this;
                      } else {
                        var newArray = thisInterpreter.createArray();
                      }
                      var first3 = arguments[0];
                      if (arguments.length === 1 && typeof first3 === "number") {
                        if (isNaN(Interpreter2.legalArrayLength(first3))) {
                          thisInterpreter.throwException(
                            thisInterpreter.RANGE_ERROR,
                            "Invalid array length"
                          );
                        }
                        newArray.properties.length = first3;
                      } else {
                        for (var i = 0; i < arguments.length; i++) {
                          newArray.properties[i] = arguments[i];
                        }
                        newArray.properties.length = i;
                      }
                      return newArray;
                    };
                    this.ARRAY = this.createNativeFunction(wrapper, true);
                    this.ARRAY_PROTO = this.ARRAY.properties["prototype"];
                    this.setProperty(
                      globalObject,
                      "Array",
                      this.ARRAY,
                      Interpreter2.NONENUMERABLE_DESCRIPTOR
                    );
                    wrapper = function isArray(obj) {
                      return obj && obj.class === "Array";
                    };
                    this.setProperty(
                      this.ARRAY,
                      "isArray",
                      this.createNativeFunction(wrapper, false),
                      Interpreter2.NONENUMERABLE_DESCRIPTOR
                    );
                    this.setProperty(
                      this.ARRAY_PROTO,
                      "length",
                      0,
                      { configurable: false, enumerable: false, writable: true }
                    );
                    this.ARRAY_PROTO.class = "Array";
                    this.polyfills_.push(
                      "Object.defineProperty(Array.prototype, 'pop',",
                      "{configurable: true, writable: true, value:",
                      "function pop() {",
                      "if (!this) throw TypeError();",
                      "var o = Object(this);",
                      "var len = o.length >>> 0;",
                      "if (!len || len < 0) {",
                      "o.length = 0;",
                      "return undefined;",
                      "}",
                      "len--;",
                      "var x = o[len];",
                      "delete o[len];",
                      // Needed for non-arrays.
                      "o.length = len;",
                      "return x;",
                      "}",
                      "});",
                      "Object.defineProperty(Array.prototype, 'push',",
                      "{configurable: true, writable: true, value:",
                      "function push(var_args) {",
                      "if (!this) throw TypeError();",
                      "var o = Object(this);",
                      "var len = o.length >>> 0;",
                      "for (var i = 0; i < arguments.length; i++) {",
                      "o[len] = arguments[i];",
                      "len++;",
                      "}",
                      "o.length = len;",
                      "return len;",
                      "}",
                      "});",
                      "Object.defineProperty(Array.prototype, 'shift',",
                      "{configurable: true, writable: true, value:",
                      "function shift() {",
                      "if (!this) throw TypeError();",
                      "var o = Object(this);",
                      "var len = o.length >>> 0;",
                      "if (!len || len < 0) {",
                      "o.length = 0;",
                      "return undefined;",
                      "}",
                      "var value = o[0];",
                      "for (var i = 0; i < len - 1; i++) {",
                      "o[i] = o[i + 1];",
                      "}",
                      "delete o[i];",
                      // Needed for non-arrays.
                      "o.length = len - 1;",
                      "return value;",
                      "}",
                      "});",
                      "Object.defineProperty(Array.prototype, 'unshift',",
                      "{configurable: true, writable: true, value:",
                      "function unshift(var_args) {",
                      "if (!this) throw TypeError();",
                      "var o = Object(this);",
                      "var len = o.length >>> 0;",
                      "if (!len || len < 0) {",
                      "len = 0;",
                      "}",
                      "for (var i = len - 1; i >= 0; i--) {",
                      "o[i + arguments.length] = o[i];",
                      "}",
                      "for (var i = 0; i < arguments.length; i++) {",
                      "o[i] = arguments[i];",
                      "}",
                      "return o.length = len + arguments.length;",
                      "}",
                      "});",
                      "Object.defineProperty(Array.prototype, 'reverse',",
                      "{configurable: true, writable: true, value:",
                      "function reverse() {",
                      "if (!this) throw TypeError();",
                      "var o = Object(this);",
                      "var len = o.length >>> 0;",
                      "if (!len || len < 2) {",
                      "return o;",
                      // Not an array, or too short to reverse.
                      "}",
                      "for (var i = 0; i < len / 2 - 0.5; i++) {",
                      "var x = o[i];",
                      "o[i] = o[len - i - 1];",
                      "o[len - i - 1] = x;",
                      "}",
                      "return o;",
                      "}",
                      "});",
                      "Object.defineProperty(Array.prototype, 'indexOf',",
                      "{configurable: true, writable: true, value:",
                      "function indexOf(searchElement, fromIndex) {",
                      "if (!this) throw TypeError();",
                      "var o = Object(this);",
                      "var len = o.length >>> 0;",
                      "var n = fromIndex | 0;",
                      "if (!len || n >= len) {",
                      "return -1;",
                      "}",
                      "var i = Math.max(n >= 0 ? n : len - Math.abs(n), 0);",
                      "while (i < len) {",
                      "if (i in o && o[i] === searchElement) {",
                      "return i;",
                      "}",
                      "i++;",
                      "}",
                      "return -1;",
                      "}",
                      "});",
                      "Object.defineProperty(Array.prototype, 'lastIndexOf',",
                      "{configurable: true, writable: true, value:",
                      "function lastIndexOf(searchElement, fromIndex) {",
                      "if (!this) throw TypeError();",
                      "var o = Object(this);",
                      "var len = o.length >>> 0;",
                      "if (!len) {",
                      "return -1;",
                      "}",
                      "var n = len - 1;",
                      "if (arguments.length > 1) {",
                      "n = fromIndex | 0;",
                      "if (n) {",
                      "n = (n > 0 || -1) * Math.floor(Math.abs(n));",
                      "}",
                      "}",
                      "var i = n >= 0 ? Math.min(n, len - 1) : len - Math.abs(n);",
                      "while (i >= 0) {",
                      "if (i in o && o[i] === searchElement) {",
                      "return i;",
                      "}",
                      "i--;",
                      "}",
                      "return -1;",
                      "}",
                      "});",
                      "Object.defineProperty(Array.prototype, 'slice',",
                      "{configurable: true, writable: true, value:",
                      "function slice(start, end) {",
                      "if (!this) throw TypeError();",
                      "var o = Object(this);",
                      "var len = o.length >>> 0;",
                      // Handle negative value for "start"
                      "start |= 0;",
                      "start = (start >= 0) ? start : Math.max(0, len + start);",
                      // Handle negative value for "end"
                      "if (typeof end !== 'undefined') {",
                      "if (end !== Infinity) {",
                      "end |= 0;",
                      "}",
                      "if (end < 0) {",
                      "end = len + end;",
                      "} else {",
                      "end = Math.min(end, len);",
                      "}",
                      "} else {",
                      "end = len;",
                      "}",
                      "var size = end - start;",
                      "var cloned = [];",
                      "for (var i = 0; i < size; i++) {",
                      "cloned[i] = o[start + i];",
                      "}",
                      "return cloned;",
                      "}",
                      "});",
                      "Object.defineProperty(Array.prototype, 'splice',",
                      "{configurable: true, writable: true, value:",
                      "function splice(start, deleteCount, var_args) {",
                      "if (!this) throw TypeError();",
                      "var o = Object(this);",
                      "var len = o.length >>> 0;",
                      "start |= 0;",
                      "if (start < 0) {",
                      "start = Math.max(len + start, 0);",
                      "} else {",
                      "start = Math.min(start, len);",
                      "}",
                      "if (arguments.length < 1) {",
                      "deleteCount = len - start;",
                      "} else {",
                      "deleteCount |= 0;",
                      "deleteCount = Math.max(0, Math.min(deleteCount, len - start));",
                      "}",
                      "var removed = [];",
                      // Remove specified elements.
                      "for (var i = start; i < start + deleteCount; i++) {",
                      "removed[removed.length++] = o[i];",
                      "o[i] = o[i + deleteCount];",
                      "}",
                      // Move other element to fill the gap.
                      "for (var i = start + deleteCount; i < len - deleteCount; i++) {",
                      "o[i] = o[i + deleteCount];",
                      "}",
                      // Delete superfluous properties.
                      "for (var i = len - deleteCount; i < len; i++) {",
                      "delete o[i];",
                      "}",
                      "len -= deleteCount;",
                      // Insert specified items.
                      "for (var i = len - 1; i >= start; i--) {",
                      "o[i + arguments.length - 2] = o[i];",
                      "}",
                      "len += arguments.length - 2;",
                      "for (var i = 2; i < arguments.length; i++) {",
                      "o[start + i - 2] = arguments[i];",
                      "}",
                      "o.length = len;",
                      "return removed;",
                      "}",
                      "});",
                      "Object.defineProperty(Array.prototype, 'concat',",
                      "{configurable: true, writable: true, value:",
                      "function concat(var_args) {",
                      "if (!this) throw TypeError();",
                      "var o = Object(this);",
                      "var cloned = [];",
                      "for (var i = -1; i < arguments.length; i++) {",
                      "var value = (i === -1) ? o : arguments[i];",
                      "if (Array.isArray(value)) {",
                      "cloned.push.apply(cloned, value);",
                      "} else {",
                      "cloned.push(value);",
                      "}",
                      "}",
                      "return cloned;",
                      "}",
                      "});",
                      "Object.defineProperty(Array.prototype, 'join',",
                      "{configurable: true, writable: true, value:",
                      "function join(opt_separator) {",
                      "if (!this) throw TypeError();",
                      "var o = Object(this);",
                      "var sep = typeof opt_separator === 'undefined' ?",
                      "',' : ('' + opt_separator);",
                      "var str = '';",
                      "for (var i = 0; i < o.length; i++) {",
                      "if (i && sep) {",
                      "str += sep;",
                      "}",
                      "str += o[i];",
                      "}",
                      "return str;",
                      "}",
                      "});",
                      // Polyfill copied from:
                      // developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/every
                      "Object.defineProperty(Array.prototype, 'every',",
                      "{configurable: true, writable: true, value:",
                      "function every(callbackfn, thisArg) {",
                      "if (!this || typeof callbackfn !== 'function') throw TypeError();",
                      "var t, k;",
                      "var o = Object(this);",
                      "var len = o.length >>> 0;",
                      "if (arguments.length > 1) t = thisArg;",
                      "k = 0;",
                      "while (k < len) {",
                      "if (k in o && !callbackfn.call(t, o[k], k, o)) return false;",
                      "k++;",
                      "}",
                      "return true;",
                      "}",
                      "});",
                      // Polyfill copied from:
                      // developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
                      "Object.defineProperty(Array.prototype, 'filter',",
                      "{configurable: true, writable: true, value:",
                      "function filter(fun, var_args) {",
                      "if (this === void 0 || this === null || typeof fun !== 'function') throw TypeError();",
                      "var o = Object(this);",
                      "var len = o.length >>> 0;",
                      "var res = [];",
                      "var thisArg = arguments.length >= 2 ? arguments[1] : void 0;",
                      "for (var i = 0; i < len; i++) {",
                      "if (i in o) {",
                      "var val = o[i];",
                      "if (fun.call(thisArg, val, i, o)) res.push(val);",
                      "}",
                      "}",
                      "return res;",
                      "}",
                      "});",
                      // Polyfill copied from:
                      // developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
                      "Object.defineProperty(Array.prototype, 'forEach',",
                      "{configurable: true, writable: true, value:",
                      "function forEach(callback, thisArg) {",
                      "if (!this || typeof callback !== 'function') throw TypeError();",
                      "var t, k;",
                      "var o = Object(this);",
                      "var len = o.length >>> 0;",
                      "if (arguments.length > 1) t = thisArg;",
                      "k = 0;",
                      "while (k < len) {",
                      "if (k in o) callback.call(t, o[k], k, o);",
                      "k++;",
                      "}",
                      "}",
                      "});",
                      // Polyfill copied from:
                      // developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map
                      "Object.defineProperty(Array.prototype, 'map',",
                      "{configurable: true, writable: true, value:",
                      "function map(callback, thisArg) {",
                      "if (!this || typeof callback !== 'function') throw TypeError();",
                      "var t, a, k;",
                      "var o = Object(this);",
                      "var len = o.length >>> 0;",
                      "if (arguments.length > 1) t = thisArg;",
                      "a = new Array(len);",
                      "k = 0;",
                      "while (k < len) {",
                      "if (k in o) a[k] = callback.call(t, o[k], k, o);",
                      "k++;",
                      "}",
                      "return a;",
                      "}",
                      "});",
                      // Polyfill copied from:
                      // developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
                      "Object.defineProperty(Array.prototype, 'reduce',",
                      "{configurable: true, writable: true, value:",
                      "function reduce(callback /*, initialValue*/) {",
                      "if (!this || typeof callback !== 'function') throw TypeError();",
                      "var o = Object(this), len = o.length >>> 0, k = 0, value;",
                      "if (arguments.length === 2) {",
                      "value = arguments[1];",
                      "} else {",
                      "while (k < len && !(k in o)) k++;",
                      "if (k >= len) {",
                      "throw TypeError('Reduce of empty array with no initial value');",
                      "}",
                      "value = o[k++];",
                      "}",
                      "for (; k < len; k++) {",
                      "if (k in o) value = callback(value, o[k], k, o);",
                      "}",
                      "return value;",
                      "}",
                      "});",
                      // Polyfill copied from:
                      // developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight
                      "Object.defineProperty(Array.prototype, 'reduceRight',",
                      "{configurable: true, writable: true, value:",
                      "function reduceRight(callback /*, initialValue*/) {",
                      "if (null === this || 'undefined' === typeof this || 'function' !== typeof callback) throw TypeError();",
                      "var o = Object(this), len = o.length >>> 0, k = len - 1, value;",
                      "if (arguments.length >= 2) {",
                      "value = arguments[1];",
                      "} else {",
                      "while (k >= 0 && !(k in o)) k--;",
                      "if (k < 0) {",
                      "throw TypeError('Reduce of empty array with no initial value');",
                      "}",
                      "value = o[k--];",
                      "}",
                      "for (; k >= 0; k--) {",
                      "if (k in o) value = callback(value, o[k], k, o);",
                      "}",
                      "return value;",
                      "}",
                      "});",
                      // Polyfill copied from:
                      // developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/some
                      "Object.defineProperty(Array.prototype, 'some',",
                      "{configurable: true, writable: true, value:",
                      "function some(fun/*, thisArg*/) {",
                      "if (!this || typeof fun !== 'function') throw TypeError();",
                      "var o = Object(this);",
                      "var len = o.length >>> 0;",
                      "var thisArg = arguments.length >= 2 ? arguments[1] : void 0;",
                      "for (var i = 0; i < len; i++) {",
                      "if (i in o && fun.call(thisArg, o[i], i, o)) {",
                      "return true;",
                      "}",
                      "}",
                      "return false;",
                      "}",
                      "});",
                      "Object.defineProperty(Array.prototype, 'sort',",
                      "{configurable: true, writable: true, value:",
                      "function sort(opt_comp) {",
                      // Bubble sort!
                      "if (!this) throw TypeError();",
                      "if (typeof opt_comp !== 'function') {",
                      "opt_comp = undefined;",
                      "}",
                      "for (var i = 0; i < this.length; i++) {",
                      "var changes = 0;",
                      "for (var j = 0; j < this.length - i - 1; j++) {",
                      "if (opt_comp ? (opt_comp(this[j], this[j + 1]) > 0) :",
                      "(String(this[j]) > String(this[j + 1]))) {",
                      "var swap = this[j];",
                      "this[j] = this[j + 1];",
                      "this[j + 1] = swap;",
                      "changes++;",
                      "}",
                      "}",
                      "if (!changes) break;",
                      "}",
                      "return this;",
                      "}",
                      "});",
                      "Object.defineProperty(Array.prototype, 'toLocaleString',",
                      "{configurable: true, writable: true, value:",
                      "function toLocaleString() {",
                      "if (!this) throw TypeError();",
                      "var o = Object(this);",
                      "var out = [];",
                      "for (var i = 0; i < o.length; i++) {",
                      "out[i] = (o[i] === null || o[i] === undefined) ? '' : o[i].toLocaleString();",
                      "}",
                      "return out.join(',');",
                      "}",
                      "});",
                      ""
                    );
                  };
                  Interpreter2.prototype.initString = function(globalObject) {
                    var thisInterpreter = this;
                    var wrapper;
                    wrapper = function String2(value) {
                      value = arguments.length ? Interpreter2.nativeGlobal.String(value) : "";
                      if (thisInterpreter.calledWithNew()) {
                        this.data = value;
                        return this;
                      } else {
                        return value;
                      }
                    };
                    this.STRING = this.createNativeFunction(wrapper, true);
                    this.setProperty(
                      globalObject,
                      "String",
                      this.STRING,
                      Interpreter2.NONENUMERABLE_DESCRIPTOR
                    );
                    this.setProperty(
                      this.STRING,
                      "fromCharCode",
                      this.createNativeFunction(String.fromCharCode, false),
                      Interpreter2.NONENUMERABLE_DESCRIPTOR
                    );
                    var functions = [
                      "charAt",
                      "charCodeAt",
                      "concat",
                      "indexOf",
                      "lastIndexOf",
                      "slice",
                      "substr",
                      "substring",
                      "toLocaleLowerCase",
                      "toLocaleUpperCase",
                      "toLowerCase",
                      "toUpperCase",
                      "trim"
                    ];
                    for (var i = 0; i < functions.length; i++) {
                      this.setNativeFunctionPrototype(
                        this.STRING,
                        functions[i],
                        String.prototype[functions[i]]
                      );
                    }
                    wrapper = function localeCompare(compareString, locales, options) {
                      locales = thisInterpreter.pseudoToNative(locales);
                      options = thisInterpreter.pseudoToNative(options);
                      try {
                        return String(this).localeCompare(compareString, locales, options);
                      } catch (e) {
                        thisInterpreter.throwException(
                          thisInterpreter.ERROR,
                          "localeCompare: " + e.message
                        );
                      }
                    };
                    this.setNativeFunctionPrototype(this.STRING, "localeCompare", wrapper);
                    wrapper = function split(separator, limit, callback) {
                      var string = String(this);
                      limit = limit ? Number(limit) : void 0;
                      if (thisInterpreter.isa(separator, thisInterpreter.REGEXP)) {
                        separator = separator.data;
                        thisInterpreter.maybeThrowRegExp(separator, callback);
                        if (thisInterpreter["REGEXP_MODE"] === 2) {
                          if (Interpreter2.vm) {
                            var sandbox = {
                              "string": string,
                              "separator": separator,
                              "limit": limit
                            };
                            var code = "string.split(separator, limit)";
                            var jsList = thisInterpreter.vmCall(code, sandbox, separator, callback);
                            if (jsList !== Interpreter2.REGEXP_TIMEOUT) {
                              callback(thisInterpreter.arrayNativeToPseudo(jsList));
                            }
                          } else {
                            var splitWorker = thisInterpreter.createWorker();
                            var pid = thisInterpreter.regExpTimeout(
                              separator,
                              splitWorker,
                              callback
                            );
                            splitWorker.onmessage = function(e) {
                              clearTimeout(pid);
                              callback(thisInterpreter.arrayNativeToPseudo(e.data));
                            };
                            splitWorker.postMessage(["split", string, separator, limit]);
                          }
                          return;
                        }
                      }
                      var jsList = string.split(separator, limit);
                      callback(thisInterpreter.arrayNativeToPseudo(jsList));
                    };
                    this.setAsyncFunctionPrototype(this.STRING, "split", wrapper);
                    wrapper = function match(regexp, callback) {
                      var string = String(this);
                      if (thisInterpreter.isa(regexp, thisInterpreter.REGEXP)) {
                        regexp = regexp.data;
                      } else {
                        regexp = new RegExp(regexp);
                      }
                      thisInterpreter.maybeThrowRegExp(regexp, callback);
                      if (thisInterpreter["REGEXP_MODE"] === 2) {
                        if (Interpreter2.vm) {
                          var sandbox = {
                            "string": string,
                            "regexp": regexp
                          };
                          var code = "string.match(regexp)";
                          var m = thisInterpreter.vmCall(code, sandbox, regexp, callback);
                          if (m !== Interpreter2.REGEXP_TIMEOUT) {
                            callback(m && thisInterpreter.arrayNativeToPseudo(m));
                          }
                        } else {
                          var matchWorker = thisInterpreter.createWorker();
                          var pid = thisInterpreter.regExpTimeout(regexp, matchWorker, callback);
                          matchWorker.onmessage = function(e) {
                            clearTimeout(pid);
                            callback(e.data && thisInterpreter.arrayNativeToPseudo(e.data));
                          };
                          matchWorker.postMessage(["match", string, regexp]);
                        }
                        return;
                      }
                      var m = string.match(regexp);
                      callback(m && thisInterpreter.arrayNativeToPseudo(m));
                    };
                    this.setAsyncFunctionPrototype(this.STRING, "match", wrapper);
                    wrapper = function search(regexp, callback) {
                      var string = String(this);
                      if (thisInterpreter.isa(regexp, thisInterpreter.REGEXP)) {
                        regexp = regexp.data;
                      } else {
                        regexp = new RegExp(regexp);
                      }
                      thisInterpreter.maybeThrowRegExp(regexp, callback);
                      if (thisInterpreter["REGEXP_MODE"] === 2) {
                        if (Interpreter2.vm) {
                          var sandbox = {
                            "string": string,
                            "regexp": regexp
                          };
                          var code = "string.search(regexp)";
                          var n = thisInterpreter.vmCall(code, sandbox, regexp, callback);
                          if (n !== Interpreter2.REGEXP_TIMEOUT) {
                            callback(n);
                          }
                        } else {
                          var searchWorker = thisInterpreter.createWorker();
                          var pid = thisInterpreter.regExpTimeout(regexp, searchWorker, callback);
                          searchWorker.onmessage = function(e) {
                            clearTimeout(pid);
                            callback(e.data);
                          };
                          searchWorker.postMessage(["search", string, regexp]);
                        }
                        return;
                      }
                      callback(string.search(regexp));
                    };
                    this.setAsyncFunctionPrototype(this.STRING, "search", wrapper);
                    wrapper = function replace_(substr, newSubstr, callback) {
                      var string = String(this);
                      newSubstr = String(newSubstr);
                      if (thisInterpreter.isa(substr, thisInterpreter.REGEXP)) {
                        substr = substr.data;
                        thisInterpreter.maybeThrowRegExp(substr, callback);
                        if (thisInterpreter["REGEXP_MODE"] === 2) {
                          if (Interpreter2.vm) {
                            var sandbox = {
                              "string": string,
                              "substr": substr,
                              "newSubstr": newSubstr
                            };
                            var code = "string.replace(substr, newSubstr)";
                            var str = thisInterpreter.vmCall(code, sandbox, substr, callback);
                            if (str !== Interpreter2.REGEXP_TIMEOUT) {
                              callback(str);
                            }
                          } else {
                            var replaceWorker = thisInterpreter.createWorker();
                            var pid = thisInterpreter.regExpTimeout(
                              substr,
                              replaceWorker,
                              callback
                            );
                            replaceWorker.onmessage = function(e) {
                              clearTimeout(pid);
                              callback(e.data);
                            };
                            replaceWorker.postMessage(["replace", string, substr, newSubstr]);
                          }
                          return;
                        }
                      }
                      callback(string.replace(substr, newSubstr));
                    };
                    this.setAsyncFunctionPrototype(this.STRING, "replace", wrapper);
                    this.polyfills_.push(
                      "(function() {",
                      "var replace_ = String.prototype.replace;",
                      "String.prototype.replace = function replace(substr, newSubstr) {",
                      "if (typeof newSubstr !== 'function') {",
                      // string.replace(string|regexp, string)
                      "return replace_.call(this, substr, newSubstr);",
                      "}",
                      "var str = this;",
                      "if (substr instanceof RegExp) {",
                      // string.replace(regexp, function)
                      "var subs = [];",
                      "var m = substr.exec(str);",
                      "while (m) {",
                      "m.push(m.index, str);",
                      "var inject = newSubstr.apply(null, m);",
                      "subs.push([m.index, m[0].length, inject]);",
                      "m = substr.global ? substr.exec(str) : null;",
                      "}",
                      "for (var i = subs.length - 1; i >= 0; i--) {",
                      "str = str.substring(0, subs[i][0]) + subs[i][2] + str.substring(subs[i][0] + subs[i][1]);",
                      "}",
                      "} else {",
                      // string.replace(string, function)
                      "var i = str.indexOf(substr);",
                      "if (i !== -1) {",
                      "var inject = newSubstr(str.substr(i, substr.length), i, str);",
                      "str = str.substring(0, i) + inject + str.substring(i + substr.length);",
                      "}",
                      "}",
                      "return str;",
                      "};",
                      "})();",
                      ""
                    );
                  };
                  Interpreter2.prototype.initBoolean = function(globalObject) {
                    var thisInterpreter = this;
                    var wrapper;
                    wrapper = function Boolean2(value) {
                      value = Interpreter2.nativeGlobal.Boolean(value);
                      if (thisInterpreter.calledWithNew()) {
                        this.data = value;
                        return this;
                      } else {
                        return value;
                      }
                    };
                    this.BOOLEAN = this.createNativeFunction(wrapper, true);
                    this.setProperty(
                      globalObject,
                      "Boolean",
                      this.BOOLEAN,
                      Interpreter2.NONENUMERABLE_DESCRIPTOR
                    );
                  };
                  Interpreter2.prototype.initNumber = function(globalObject) {
                    var thisInterpreter = this;
                    var wrapper;
                    wrapper = function Number2(value) {
                      value = arguments.length ? Interpreter2.nativeGlobal.Number(value) : 0;
                      if (thisInterpreter.calledWithNew()) {
                        this.data = value;
                        return this;
                      } else {
                        return value;
                      }
                    };
                    this.NUMBER = this.createNativeFunction(wrapper, true);
                    this.setProperty(
                      globalObject,
                      "Number",
                      this.NUMBER,
                      Interpreter2.NONENUMERABLE_DESCRIPTOR
                    );
                    var numConsts = [
                      "MAX_VALUE",
                      "MIN_VALUE",
                      "NaN",
                      "NEGATIVE_INFINITY",
                      "POSITIVE_INFINITY"
                    ];
                    for (var i = 0; i < numConsts.length; i++) {
                      this.setProperty(
                        this.NUMBER,
                        numConsts[i],
                        Number[numConsts[i]],
                        Interpreter2.NONCONFIGURABLE_READONLY_NONENUMERABLE_DESCRIPTOR
                      );
                    }
                    wrapper = function toExponential(fractionDigits) {
                      try {
                        return Number(this).toExponential(fractionDigits);
                      } catch (e) {
                        thisInterpreter.throwException(thisInterpreter.ERROR, e.message);
                      }
                    };
                    this.setNativeFunctionPrototype(this.NUMBER, "toExponential", wrapper);
                    wrapper = function toFixed(digits) {
                      try {
                        return Number(this).toFixed(digits);
                      } catch (e) {
                        thisInterpreter.throwException(thisInterpreter.ERROR, e.message);
                      }
                    };
                    this.setNativeFunctionPrototype(this.NUMBER, "toFixed", wrapper);
                    wrapper = function toPrecision(precision) {
                      try {
                        return Number(this).toPrecision(precision);
                      } catch (e) {
                        thisInterpreter.throwException(thisInterpreter.ERROR, e.message);
                      }
                    };
                    this.setNativeFunctionPrototype(this.NUMBER, "toPrecision", wrapper);
                    wrapper = function toString5(radix) {
                      try {
                        return Number(this).toString(radix);
                      } catch (e) {
                        thisInterpreter.throwException(thisInterpreter.ERROR, e.message);
                      }
                    };
                    this.setNativeFunctionPrototype(this.NUMBER, "toString", wrapper);
                    wrapper = function toLocaleString(locales, options) {
                      locales = locales ? thisInterpreter.pseudoToNative(locales) : void 0;
                      options = options ? thisInterpreter.pseudoToNative(options) : void 0;
                      return Number(this).toLocaleString(locales, options);
                    };
                    this.setNativeFunctionPrototype(this.NUMBER, "toLocaleString", wrapper);
                  };
                  Interpreter2.prototype.initDate = function(globalObject) {
                    var thisInterpreter = this;
                    var wrapper;
                    wrapper = function Date2(value, var_args) {
                      if (!thisInterpreter.calledWithNew()) {
                        return Interpreter2.nativeGlobal.Date();
                      }
                      var args = [null].concat(Array.from(arguments));
                      this.data = new (Function.prototype.bind.apply(
                        Interpreter2.nativeGlobal.Date,
                        args
                      ))();
                      return this;
                    };
                    this.DATE = this.createNativeFunction(wrapper, true);
                    this.DATE_PROTO = this.DATE.properties["prototype"];
                    this.setProperty(
                      globalObject,
                      "Date",
                      this.DATE,
                      Interpreter2.NONENUMERABLE_DESCRIPTOR
                    );
                    this.setProperty(
                      this.DATE,
                      "now",
                      this.createNativeFunction(Date.now, false),
                      Interpreter2.NONENUMERABLE_DESCRIPTOR
                    );
                    this.setProperty(
                      this.DATE,
                      "parse",
                      this.createNativeFunction(Date.parse, false),
                      Interpreter2.NONENUMERABLE_DESCRIPTOR
                    );
                    this.setProperty(
                      this.DATE,
                      "UTC",
                      this.createNativeFunction(Date.UTC, false),
                      Interpreter2.NONENUMERABLE_DESCRIPTOR
                    );
                    var functions = [
                      "getDate",
                      "getDay",
                      "getFullYear",
                      "getHours",
                      "getMilliseconds",
                      "getMinutes",
                      "getMonth",
                      "getSeconds",
                      "getTime",
                      "getTimezoneOffset",
                      "getUTCDate",
                      "getUTCDay",
                      "getUTCFullYear",
                      "getUTCHours",
                      "getUTCMilliseconds",
                      "getUTCMinutes",
                      "getUTCMonth",
                      "getUTCSeconds",
                      "getYear",
                      "setDate",
                      "setFullYear",
                      "setHours",
                      "setMilliseconds",
                      "setMinutes",
                      "setMonth",
                      "setSeconds",
                      "setTime",
                      "setUTCDate",
                      "setUTCFullYear",
                      "setUTCHours",
                      "setUTCMilliseconds",
                      "setUTCMinutes",
                      "setUTCMonth",
                      "setUTCSeconds",
                      "setYear",
                      "toDateString",
                      "toISOString",
                      "toJSON",
                      "toGMTString",
                      "toLocaleDateString",
                      "toLocaleString",
                      "toLocaleTimeString",
                      "toTimeString",
                      "toUTCString"
                    ];
                    for (var i = 0; i < functions.length; i++) {
                      wrapper = /* @__PURE__ */ (function(nativeFunc) {
                        return function(var_args) {
                          var date = this.data;
                          if (!(date instanceof Date)) {
                            thisInterpreter.throwException(
                              thisInterpreter.TYPE_ERROR,
                              nativeFunc + " not called on a Date"
                            );
                          }
                          var args = [];
                          for (var i2 = 0; i2 < arguments.length; i2++) {
                            args[i2] = thisInterpreter.pseudoToNative(arguments[i2]);
                          }
                          return date[nativeFunc].apply(date, args);
                        };
                      })(functions[i]);
                      this.setNativeFunctionPrototype(this.DATE, functions[i], wrapper);
                    }
                  };
                  Interpreter2.prototype.initRegExp = function(globalObject) {
                    var thisInterpreter = this;
                    var wrapper;
                    wrapper = function RegExp2(pattern, flags) {
                      if (thisInterpreter.calledWithNew()) {
                        var rgx = this;
                      } else {
                        if (flags === void 0 && thisInterpreter.isa(pattern, thisInterpreter.REGEXP)) {
                          return pattern;
                        }
                        var rgx = thisInterpreter.createObjectProto(thisInterpreter.REGEXP_PROTO);
                      }
                      pattern = pattern === void 0 ? "" : String(pattern);
                      flags = flags ? String(flags) : "";
                      thisInterpreter.populateRegExp(
                        rgx,
                        new Interpreter2.nativeGlobal.RegExp(pattern, flags)
                      );
                      return rgx;
                    };
                    this.REGEXP = this.createNativeFunction(wrapper, true);
                    this.REGEXP_PROTO = this.REGEXP.properties["prototype"];
                    this.setProperty(
                      globalObject,
                      "RegExp",
                      this.REGEXP,
                      Interpreter2.NONENUMERABLE_DESCRIPTOR
                    );
                    this.setProperty(
                      this.REGEXP.properties["prototype"],
                      "global",
                      void 0,
                      Interpreter2.READONLY_NONENUMERABLE_DESCRIPTOR
                    );
                    this.setProperty(
                      this.REGEXP.properties["prototype"],
                      "ignoreCase",
                      void 0,
                      Interpreter2.READONLY_NONENUMERABLE_DESCRIPTOR
                    );
                    this.setProperty(
                      this.REGEXP.properties["prototype"],
                      "multiline",
                      void 0,
                      Interpreter2.READONLY_NONENUMERABLE_DESCRIPTOR
                    );
                    this.setProperty(
                      this.REGEXP.properties["prototype"],
                      "source",
                      "(?:)",
                      Interpreter2.READONLY_NONENUMERABLE_DESCRIPTOR
                    );
                    this.polyfills_.push(
                      "Object.defineProperty(RegExp.prototype, 'test',",
                      "{configurable: true, writable: true, value:",
                      "function test(str) {",
                      "return !!this.exec(str);",
                      "}",
                      "});"
                    );
                    wrapper = function exec(string, callback) {
                      var regexp = this.data;
                      string = String(string);
                      regexp.lastIndex = Number(thisInterpreter.getProperty(this, "lastIndex"));
                      thisInterpreter.maybeThrowRegExp(regexp, callback);
                      if (thisInterpreter["REGEXP_MODE"] === 2) {
                        if (Interpreter2.vm) {
                          var sandbox = {
                            "string": string,
                            "regexp": regexp
                          };
                          var code = "regexp.exec(string)";
                          var match = thisInterpreter.vmCall(code, sandbox, regexp, callback);
                          if (match !== Interpreter2.REGEXP_TIMEOUT) {
                            thisInterpreter.setProperty(this, "lastIndex", regexp.lastIndex);
                            callback(matchToPseudo(match));
                          }
                        } else {
                          var execWorker = thisInterpreter.createWorker();
                          var pid = thisInterpreter.regExpTimeout(regexp, execWorker, callback);
                          var thisPseudoRegExp = this;
                          execWorker.onmessage = function(e) {
                            clearTimeout(pid);
                            thisInterpreter.setProperty(thisPseudoRegExp, "lastIndex", e.data[1]);
                            callback(matchToPseudo(e.data[0]));
                          };
                          execWorker.postMessage(["exec", regexp, regexp.lastIndex, string]);
                        }
                        return;
                      }
                      var match = regexp.exec(string);
                      thisInterpreter.setProperty(this, "lastIndex", regexp.lastIndex);
                      callback(matchToPseudo(match));
                      function matchToPseudo(match2) {
                        if (match2) {
                          var result = thisInterpreter.arrayNativeToPseudo(match2);
                          thisInterpreter.setProperty(result, "index", match2.index);
                          thisInterpreter.setProperty(result, "input", match2.input);
                          return result;
                        }
                        return null;
                      }
                    };
                    this.setAsyncFunctionPrototype(this.REGEXP, "exec", wrapper);
                  };
                  Interpreter2.prototype.initError = function(globalObject) {
                    var thisInterpreter = this;
                    this.ERROR = this.createNativeFunction(function Error2(opt_message) {
                      if (thisInterpreter.calledWithNew()) {
                        var newError = this;
                      } else {
                        var newError = thisInterpreter.createObject(thisInterpreter.ERROR);
                      }
                      thisInterpreter.populateError(newError, opt_message);
                      return newError;
                    }, true);
                    this.setProperty(
                      globalObject,
                      "Error",
                      this.ERROR,
                      Interpreter2.NONENUMERABLE_DESCRIPTOR
                    );
                    this.setProperty(
                      this.ERROR.properties["prototype"],
                      "message",
                      "",
                      Interpreter2.NONENUMERABLE_DESCRIPTOR
                    );
                    this.setProperty(
                      this.ERROR.properties["prototype"],
                      "name",
                      "Error",
                      Interpreter2.NONENUMERABLE_DESCRIPTOR
                    );
                    var createErrorSubclass = function(name) {
                      var constructor = thisInterpreter.createNativeFunction(
                        function(opt_message) {
                          if (thisInterpreter.calledWithNew()) {
                            var newError = this;
                          } else {
                            var newError = thisInterpreter.createObject(constructor);
                          }
                          thisInterpreter.populateError(newError, opt_message);
                          return newError;
                        },
                        true
                      );
                      thisInterpreter.setProperty(
                        constructor,
                        "prototype",
                        thisInterpreter.createObject(thisInterpreter.ERROR),
                        Interpreter2.NONENUMERABLE_DESCRIPTOR
                      );
                      thisInterpreter.setProperty(
                        constructor.properties["prototype"],
                        "name",
                        name,
                        Interpreter2.NONENUMERABLE_DESCRIPTOR
                      );
                      thisInterpreter.setProperty(
                        globalObject,
                        name,
                        constructor,
                        Interpreter2.NONENUMERABLE_DESCRIPTOR
                      );
                      return constructor;
                    };
                    this.EVAL_ERROR = createErrorSubclass("EvalError");
                    this.RANGE_ERROR = createErrorSubclass("RangeError");
                    this.REFERENCE_ERROR = createErrorSubclass("ReferenceError");
                    this.SYNTAX_ERROR = createErrorSubclass("SyntaxError");
                    this.TYPE_ERROR = createErrorSubclass("TypeError");
                    this.URI_ERROR = createErrorSubclass("URIError");
                  };
                  Interpreter2.prototype.initMath = function(globalObject) {
                    var myMath = this.createObjectProto(this.OBJECT_PROTO);
                    this.setProperty(
                      globalObject,
                      "Math",
                      myMath,
                      Interpreter2.NONENUMERABLE_DESCRIPTOR
                    );
                    var mathConsts = [
                      "E",
                      "LN2",
                      "LN10",
                      "LOG2E",
                      "LOG10E",
                      "PI",
                      "SQRT1_2",
                      "SQRT2"
                    ];
                    for (var i = 0; i < mathConsts.length; i++) {
                      this.setProperty(
                        myMath,
                        mathConsts[i],
                        Math[mathConsts[i]],
                        Interpreter2.READONLY_NONENUMERABLE_DESCRIPTOR
                      );
                    }
                    var numFunctions = [
                      "abs",
                      "acos",
                      "asin",
                      "atan",
                      "atan2",
                      "ceil",
                      "cos",
                      "exp",
                      "floor",
                      "log",
                      "max",
                      "min",
                      "pow",
                      "random",
                      "round",
                      "sin",
                      "sqrt",
                      "tan"
                    ];
                    for (var i = 0; i < numFunctions.length; i++) {
                      this.setProperty(
                        myMath,
                        numFunctions[i],
                        this.createNativeFunction(Math[numFunctions[i]], false),
                        Interpreter2.NONENUMERABLE_DESCRIPTOR
                      );
                    }
                  };
                  Interpreter2.prototype.initJSON = function(globalObject) {
                    var thisInterpreter = this;
                    var myJSON = thisInterpreter.createObjectProto(this.OBJECT_PROTO);
                    this.setProperty(
                      globalObject,
                      "JSON",
                      myJSON,
                      Interpreter2.NONENUMERABLE_DESCRIPTOR
                    );
                    var wrapper = function parse(text) {
                      try {
                        var nativeObj = JSON.parse(String(text));
                      } catch (e) {
                        thisInterpreter.throwException(thisInterpreter.SYNTAX_ERROR, e.message);
                      }
                      return thisInterpreter.nativeToPseudo(nativeObj);
                    };
                    this.setProperty(myJSON, "parse", this.createNativeFunction(wrapper, false));
                    wrapper = function stringify(value, replacer, space) {
                      if (replacer && replacer.class === "Function") {
                        thisInterpreter.throwException(
                          thisInterpreter.TYPE_ERROR,
                          "Function replacer on JSON.stringify not supported"
                        );
                      } else if (replacer && replacer.class === "Array") {
                        replacer = thisInterpreter.arrayPseudoToNative(replacer);
                        replacer = replacer.filter(function(word) {
                          return typeof word === "string" || typeof word === "number";
                        });
                      } else {
                        replacer = null;
                      }
                      if (typeof space !== "string" && typeof space !== "number") {
                        space = void 0;
                      }
                      var nativeObj = thisInterpreter.pseudoToNative(value);
                      try {
                        var str = JSON.stringify(nativeObj, replacer, space);
                      } catch (e) {
                        thisInterpreter.throwException(thisInterpreter.TYPE_ERROR, e.message);
                      }
                      return str;
                    };
                    this.setProperty(
                      myJSON,
                      "stringify",
                      this.createNativeFunction(wrapper, false)
                    );
                  };
                  Interpreter2.prototype.isa = function(child, constructor) {
                    if (child === null || child === void 0 || !constructor) {
                      return false;
                    }
                    var proto = constructor.properties["prototype"];
                    if (child === proto) {
                      return true;
                    }
                    child = this.getPrototype(child);
                    while (child) {
                      if (child === proto) {
                        return true;
                      }
                      child = child.proto;
                    }
                    return false;
                  };
                  Interpreter2.prototype.populateRegExp = function(pseudoRegexp, nativeRegexp) {
                    pseudoRegexp.data = new RegExp(nativeRegexp.source, nativeRegexp.flags);
                    this.setProperty(
                      pseudoRegexp,
                      "lastIndex",
                      nativeRegexp.lastIndex,
                      Interpreter2.NONENUMERABLE_DESCRIPTOR
                    );
                    this.setProperty(
                      pseudoRegexp,
                      "source",
                      nativeRegexp.source,
                      Interpreter2.READONLY_NONENUMERABLE_DESCRIPTOR
                    );
                    this.setProperty(
                      pseudoRegexp,
                      "global",
                      nativeRegexp.global,
                      Interpreter2.READONLY_NONENUMERABLE_DESCRIPTOR
                    );
                    this.setProperty(
                      pseudoRegexp,
                      "ignoreCase",
                      nativeRegexp.ignoreCase,
                      Interpreter2.READONLY_NONENUMERABLE_DESCRIPTOR
                    );
                    this.setProperty(
                      pseudoRegexp,
                      "multiline",
                      nativeRegexp.multiline,
                      Interpreter2.READONLY_NONENUMERABLE_DESCRIPTOR
                    );
                  };
                  Interpreter2.prototype.populateError = function(pseudoError, opt_message) {
                    if (opt_message) {
                      this.setProperty(
                        pseudoError,
                        "message",
                        String(opt_message),
                        Interpreter2.NONENUMERABLE_DESCRIPTOR
                      );
                    }
                    var tracebackData = [];
                    for (var i = this.stateStack.length - 1; i >= 0; i--) {
                      var state = this.stateStack[i];
                      var node = state.node;
                      if (node["type"] === "CallExpression") {
                        var func = state.func_;
                        if (func && tracebackData.length) {
                          tracebackData[tracebackData.length - 1].name = this.getProperty(func, "name");
                        }
                      }
                      if (node["loc"] && (!tracebackData.length || node["type"] === "CallExpression")) {
                        tracebackData.push({ loc: node["loc"] });
                      }
                    }
                    var name = String(this.getProperty(pseudoError, "name"));
                    var message = String(this.getProperty(pseudoError, "message"));
                    var stackString = name + ": " + message + "\n";
                    for (var i = 0; i < tracebackData.length; i++) {
                      var loc = tracebackData[i].loc;
                      var name = tracebackData[i].name;
                      var locString = loc["source"] + ":" + loc["start"]["line"] + ":" + loc["start"]["column"];
                      if (name) {
                        stackString += "  at " + name + " (" + locString + ")\n";
                      } else {
                        stackString += "  at " + locString + "\n";
                      }
                    }
                    this.setProperty(
                      pseudoError,
                      "stack",
                      stackString.trim(),
                      Interpreter2.NONENUMERABLE_DESCRIPTOR
                    );
                  };
                  Interpreter2.prototype.createWorker = function() {
                    var blob = this.createWorker.blob_;
                    if (!blob) {
                      blob = new Blob(
                        [Interpreter2.WORKER_CODE.join("\n")],
                        { type: "application/javascript" }
                      );
                      this.createWorker.blob_ = blob;
                    }
                    return new Worker(URL.createObjectURL(blob));
                  };
                  Interpreter2.prototype.vmCall = function(code, sandbox, nativeRegExp, callback) {
                    var options = { "timeout": this["REGEXP_THREAD_TIMEOUT"] };
                    try {
                      return Interpreter2.vm["runInNewContext"](code, sandbox, options);
                    } catch (e) {
                      callback(null);
                      this.throwException(this.ERROR, "RegExp Timeout: " + nativeRegExp);
                    }
                    return Interpreter2.REGEXP_TIMEOUT;
                  };
                  Interpreter2.prototype.maybeThrowRegExp = function(nativeRegExp, callback) {
                    var ok;
                    if (this["REGEXP_MODE"] === 0) {
                      ok = false;
                    } else if (this["REGEXP_MODE"] === 1) {
                      ok = true;
                    } else {
                      if (Interpreter2.vm) {
                        ok = true;
                      } else if (typeof Worker === "function" && typeof URL === "function") {
                        ok = true;
                      } else if (true) {
                        try {
                          Interpreter2.vm = __webpack_require__2(
                            /*! vm */
                            "./node_modules/vm-browserify/index.js"
                          );
                        } catch (e) {
                        }
                        ok = !!Interpreter2.vm;
                      } else {
                      }
                    }
                    if (!ok) {
                      callback(null);
                      this.throwException(this.ERROR, "Regular expressions not supported: " + nativeRegExp);
                    }
                  };
                  Interpreter2.prototype.regExpTimeout = function(nativeRegExp, worker, callback) {
                    var thisInterpreter = this;
                    return setTimeout(function() {
                      worker.terminate();
                      callback(null);
                      try {
                        thisInterpreter.throwException(
                          thisInterpreter.ERROR,
                          "RegExp Timeout: " + nativeRegExp
                        );
                      } catch (e) {
                      }
                    }, this["REGEXP_THREAD_TIMEOUT"]);
                  };
                  Interpreter2.prototype.createObject = function(constructor) {
                    return this.createObjectProto(constructor && constructor.properties["prototype"]);
                  };
                  Interpreter2.prototype.createObjectProto = function(proto) {
                    if (typeof proto !== "object") {
                      throw Error("Non object prototype");
                    }
                    var obj = new Interpreter2.Object(proto);
                    if (this.isa(obj, this.ERROR)) {
                      obj.class = "Error";
                    }
                    return obj;
                  };
                  Interpreter2.prototype.createArray = function() {
                    var array = this.createObjectProto(this.ARRAY_PROTO);
                    this.setProperty(
                      array,
                      "length",
                      0,
                      { configurable: false, enumerable: false, writable: true }
                    );
                    array.class = "Array";
                    return array;
                  };
                  Interpreter2.prototype.createFunctionBase_ = function(argumentLength, isConstructor) {
                    var func = this.createObjectProto(this.FUNCTION_PROTO);
                    if (isConstructor) {
                      var proto = this.createObjectProto(this.OBJECT_PROTO);
                      this.setProperty(
                        func,
                        "prototype",
                        proto,
                        Interpreter2.NONENUMERABLE_DESCRIPTOR
                      );
                      this.setProperty(
                        proto,
                        "constructor",
                        func,
                        Interpreter2.NONENUMERABLE_DESCRIPTOR
                      );
                    } else {
                      func.illegalConstructor = true;
                    }
                    this.setProperty(
                      func,
                      "length",
                      argumentLength,
                      Interpreter2.READONLY_NONENUMERABLE_DESCRIPTOR
                    );
                    func.class = "Function";
                    return func;
                  };
                  Interpreter2.prototype.createFunction = function(node, scope, opt_name) {
                    var func = this.createFunctionBase_(node["params"].length, true);
                    func.parentScope = scope;
                    func.node = node;
                    var name = node["id"] ? String(node["id"]["name"]) : opt_name || "";
                    this.setProperty(
                      func,
                      "name",
                      name,
                      Interpreter2.READONLY_NONENUMERABLE_DESCRIPTOR
                    );
                    return func;
                  };
                  Interpreter2.prototype.createNativeFunction = function(nativeFunc, isConstructor) {
                    var func = this.createFunctionBase_(nativeFunc.length, isConstructor);
                    func.nativeFunc = nativeFunc;
                    nativeFunc.id = this.functionCounter_++;
                    this.setProperty(
                      func,
                      "name",
                      nativeFunc.name,
                      Interpreter2.READONLY_NONENUMERABLE_DESCRIPTOR
                    );
                    return func;
                  };
                  Interpreter2.prototype.createAsyncFunction = function(asyncFunc) {
                    var func = this.createFunctionBase_(asyncFunc.length, true);
                    func.asyncFunc = asyncFunc;
                    asyncFunc.id = this.functionCounter_++;
                    this.setProperty(
                      func,
                      "name",
                      asyncFunc.name,
                      Interpreter2.READONLY_NONENUMERABLE_DESCRIPTOR
                    );
                    return func;
                  };
                  Interpreter2.prototype.nativeToPseudo = function(nativeObj) {
                    if (nativeObj instanceof Interpreter2.Object) {
                      throw Error("Object is already pseudo");
                    }
                    if (typeof nativeObj !== "object" && typeof nativeObj !== "function" || nativeObj === null) {
                      return nativeObj;
                    }
                    if (nativeObj instanceof RegExp) {
                      var pseudoRegexp = this.createObjectProto(this.REGEXP_PROTO);
                      this.populateRegExp(pseudoRegexp, nativeObj);
                      return pseudoRegexp;
                    }
                    if (nativeObj instanceof Date) {
                      var pseudoDate = this.createObjectProto(this.DATE_PROTO);
                      pseudoDate.data = new Date(nativeObj.valueOf());
                      return pseudoDate;
                    }
                    if (typeof nativeObj === "function") {
                      var thisInterpreter = this;
                      var wrapper = function() {
                        var args = Array.prototype.slice.call(arguments).map(function(i2) {
                          return thisInterpreter.pseudoToNative(i2);
                        });
                        var value = nativeObj.apply(thisInterpreter, args);
                        return thisInterpreter.nativeToPseudo(value);
                      };
                      var prototype = Object.getOwnPropertyDescriptor(nativeObj, "prototype");
                      return this.createNativeFunction(wrapper, !!prototype);
                    }
                    if (Array.isArray(nativeObj)) {
                      var pseudoArray = this.createArray();
                      for (var i = 0; i < nativeObj.length; i++) {
                        if (i in nativeObj) {
                          this.setProperty(pseudoArray, i, this.nativeToPseudo(nativeObj[i]));
                        }
                      }
                      return pseudoArray;
                    }
                    var pseudoObj = this.createObjectProto(this.OBJECT_PROTO);
                    for (var key in nativeObj) {
                      this.setProperty(pseudoObj, key, this.nativeToPseudo(nativeObj[key]));
                    }
                    return pseudoObj;
                  };
                  Interpreter2.prototype.pseudoToNative = function(pseudoObj, opt_cycles) {
                    if (typeof pseudoObj !== "object" && typeof pseudoObj !== "function" || pseudoObj === null) {
                      return pseudoObj;
                    }
                    if (!(pseudoObj instanceof Interpreter2.Object)) {
                      throw Error("Object is not pseudo");
                    }
                    if (this.isa(pseudoObj, this.REGEXP)) {
                      var nativeRegExp = new RegExp(pseudoObj.data.source, pseudoObj.data.flags);
                      nativeRegExp.lastIndex = pseudoObj.data.lastIndex;
                      return nativeRegExp;
                    }
                    if (this.isa(pseudoObj, this.DATE)) {
                      return new Date(pseudoObj.data.valueOf());
                    }
                    var cycles = opt_cycles || {
                      pseudo: [],
                      native: []
                    };
                    var i = cycles.pseudo.indexOf(pseudoObj);
                    if (i !== -1) {
                      return cycles.native[i];
                    }
                    cycles.pseudo.push(pseudoObj);
                    var nativeObj;
                    if (this.isa(pseudoObj, this.ARRAY)) {
                      nativeObj = [];
                      cycles.native.push(nativeObj);
                      var len = this.getProperty(pseudoObj, "length");
                      for (var i = 0; i < len; i++) {
                        if (this.hasProperty(pseudoObj, i)) {
                          nativeObj[i] = this.pseudoToNative(this.getProperty(pseudoObj, i), cycles);
                        }
                      }
                    } else {
                      nativeObj = {};
                      cycles.native.push(nativeObj);
                      var val;
                      for (var key in pseudoObj.properties) {
                        val = this.pseudoToNative(pseudoObj.properties[key], cycles);
                        Object.defineProperty(
                          nativeObj,
                          key,
                          { value: val, writable: true, enumerable: true, configurable: true }
                        );
                      }
                    }
                    cycles.pseudo.pop();
                    cycles.native.pop();
                    return nativeObj;
                  };
                  Interpreter2.prototype.arrayNativeToPseudo = function(nativeArray) {
                    var pseudoArray = this.createArray();
                    var props = Object.getOwnPropertyNames(nativeArray);
                    for (var i = 0; i < props.length; i++) {
                      this.setProperty(pseudoArray, props[i], nativeArray[props[i]]);
                    }
                    return pseudoArray;
                  };
                  Interpreter2.prototype.arrayPseudoToNative = function(pseudoArray) {
                    var nativeArray = [];
                    for (var key in pseudoArray.properties) {
                      nativeArray[key] = this.getProperty(pseudoArray, key);
                    }
                    nativeArray.length = Interpreter2.legalArrayLength(
                      this.getProperty(pseudoArray, "length")
                    ) || 0;
                    return nativeArray;
                  };
                  Interpreter2.prototype.getPrototype = function(value) {
                    switch (typeof value) {
                      case "number":
                        return this.NUMBER.properties["prototype"];
                      case "boolean":
                        return this.BOOLEAN.properties["prototype"];
                      case "string":
                        return this.STRING.properties["prototype"];
                    }
                    if (value) {
                      return value.proto;
                    }
                    return null;
                  };
                  Interpreter2.prototype.getProperty = function(obj, name) {
                    if (this.getterStep_) {
                      throw Error("Getter not supported in that context");
                    }
                    name = String(name);
                    if (obj === void 0 || obj === null) {
                      this.throwException(
                        this.TYPE_ERROR,
                        "Cannot read property '" + name + "' of " + obj
                      );
                    }
                    if (typeof obj === "object" && !(obj instanceof Interpreter2.Object)) {
                      throw TypeError("Expecting native value or pseudo object");
                    }
                    if (name === "length") {
                      if (this.isa(obj, this.STRING)) {
                        return String(obj).length;
                      }
                    } else if (name.charCodeAt(0) < 64) {
                      if (this.isa(obj, this.STRING)) {
                        var n = Interpreter2.legalArrayIndex(name);
                        if (!isNaN(n) && n < String(obj).length) {
                          return String(obj)[n];
                        }
                      }
                    }
                    do {
                      if (obj.properties && name in obj.properties) {
                        var getter = obj.getter[name];
                        if (getter) {
                          this.getterStep_ = true;
                          return getter;
                        }
                        return obj.properties[name];
                      }
                    } while (obj = this.getPrototype(obj));
                    return void 0;
                  };
                  Interpreter2.prototype.hasProperty = function(obj, name) {
                    if (!(obj instanceof Interpreter2.Object)) {
                      throw TypeError("Primitive data type has no properties");
                    }
                    name = String(name);
                    if (name === "length" && this.isa(obj, this.STRING)) {
                      return true;
                    }
                    if (this.isa(obj, this.STRING)) {
                      var n = Interpreter2.legalArrayIndex(name);
                      if (!isNaN(n) && n < String(obj).length) {
                        return true;
                      }
                    }
                    do {
                      if (obj.properties && name in obj.properties) {
                        return true;
                      }
                    } while (obj = this.getPrototype(obj));
                    return false;
                  };
                  Interpreter2.prototype.setProperty = function(obj, name, value, opt_descriptor) {
                    if (this.setterStep_) {
                      throw Error("Setter not supported in that context");
                    }
                    name = String(name);
                    if (obj === void 0 || obj === null) {
                      this.throwException(
                        this.TYPE_ERROR,
                        "Cannot set property '" + name + "' of " + obj
                      );
                    }
                    if (typeof obj === "object" && !(obj instanceof Interpreter2.Object)) {
                      throw TypeError("Expecting native value or pseudo object");
                    }
                    if (opt_descriptor && ("get" in opt_descriptor || "set" in opt_descriptor) && ("value" in opt_descriptor || "writable" in opt_descriptor)) {
                      this.throwException(this.TYPE_ERROR, "Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
                    }
                    var strict = !this.stateStack || this.getScope().strict;
                    if (!(obj instanceof Interpreter2.Object)) {
                      if (strict) {
                        this.throwException(this.TYPE_ERROR, "Can't create property '" + name + "' on '" + obj + "'");
                      }
                      return;
                    }
                    if (this.isa(obj, this.STRING)) {
                      var n = Interpreter2.legalArrayIndex(name);
                      if (name === "length" || !isNaN(n) && n < String(obj).length) {
                        if (strict) {
                          this.throwException(this.TYPE_ERROR, "Cannot assign to read only property '" + name + "' of String '" + obj.data + "'");
                        }
                        return;
                      }
                    }
                    if (obj.class === "Array") {
                      var len = obj.properties.length;
                      var i;
                      if (name === "length") {
                        if (opt_descriptor) {
                          if (!("value" in opt_descriptor)) {
                            return;
                          }
                          value = opt_descriptor.value;
                        }
                        value = Interpreter2.legalArrayLength(value);
                        if (isNaN(value)) {
                          this.throwException(this.RANGE_ERROR, "Invalid array length");
                        }
                        if (value < len) {
                          for (i in obj.properties) {
                            i = Interpreter2.legalArrayIndex(i);
                            if (!isNaN(i) && value <= i) {
                              delete obj.properties[i];
                            }
                          }
                        }
                      } else if (!isNaN(i = Interpreter2.legalArrayIndex(name))) {
                        obj.properties.length = Math.max(len, i + 1);
                      }
                    }
                    if (obj.preventExtensions && !(name in obj.properties)) {
                      if (strict) {
                        this.throwException(this.TYPE_ERROR, "Can't add property '" + name + "', object is not extensible");
                      }
                      return;
                    }
                    if (opt_descriptor) {
                      var descriptor = {};
                      if ("get" in opt_descriptor && opt_descriptor.get) {
                        obj.getter[name] = opt_descriptor.get;
                        descriptor.get = this.setProperty.placeholderGet_;
                      }
                      if ("set" in opt_descriptor && opt_descriptor.set) {
                        obj.setter[name] = opt_descriptor.set;
                        descriptor.set = this.setProperty.placeholderSet_;
                      }
                      if ("configurable" in opt_descriptor) {
                        descriptor.configurable = opt_descriptor.configurable;
                      }
                      if ("enumerable" in opt_descriptor) {
                        descriptor.enumerable = opt_descriptor.enumerable;
                      }
                      if ("writable" in opt_descriptor) {
                        descriptor.writable = opt_descriptor.writable;
                        delete obj.getter[name];
                        delete obj.setter[name];
                      }
                      if ("value" in opt_descriptor) {
                        descriptor.value = opt_descriptor.value;
                        delete obj.getter[name];
                        delete obj.setter[name];
                      } else if (value !== Interpreter2.VALUE_IN_DESCRIPTOR) {
                        descriptor.value = value;
                        delete obj.getter[name];
                        delete obj.setter[name];
                      }
                      try {
                        Object.defineProperty(obj.properties, name, descriptor);
                      } catch (e) {
                        this.throwException(this.TYPE_ERROR, "Cannot redefine property: " + name);
                      }
                      if ("get" in opt_descriptor && !opt_descriptor.get) {
                        delete obj.getter[name];
                      }
                      if ("set" in opt_descriptor && !opt_descriptor.set) {
                        delete obj.setter[name];
                      }
                    } else {
                      if (value === Interpreter2.VALUE_IN_DESCRIPTOR) {
                        throw ReferenceError("Value not specified.");
                      }
                      var defObj = obj;
                      while (!(name in defObj.properties)) {
                        defObj = this.getPrototype(defObj);
                        if (!defObj) {
                          defObj = obj;
                          break;
                        }
                      }
                      if (defObj.setter && defObj.setter[name]) {
                        this.setterStep_ = true;
                        return defObj.setter[name];
                      }
                      if (defObj.getter && defObj.getter[name]) {
                        if (strict) {
                          this.throwException(this.TYPE_ERROR, "Cannot set property '" + name + "' of object '" + obj + "' which only has a getter");
                        }
                      } else {
                        try {
                          obj.properties[name] = value;
                        } catch (e) {
                          if (strict) {
                            this.throwException(this.TYPE_ERROR, "Cannot assign to read only property '" + name + "' of object '" + obj + "'");
                          }
                        }
                      }
                    }
                  };
                  Interpreter2.prototype.setProperty.placeholderGet_ = function() {
                    throw Error("Placeholder getter");
                  };
                  Interpreter2.prototype.setProperty.placeholderSet_ = function() {
                    throw Error("Placeholder setter");
                  };
                  Interpreter2.prototype.setNativeFunctionPrototype = function(obj, name, wrapper) {
                    this.setProperty(
                      obj.properties["prototype"],
                      name,
                      this.createNativeFunction(wrapper, false),
                      Interpreter2.NONENUMERABLE_DESCRIPTOR
                    );
                  };
                  Interpreter2.prototype.setAsyncFunctionPrototype = function(obj, name, wrapper) {
                    this.setProperty(
                      obj.properties["prototype"],
                      name,
                      this.createAsyncFunction(wrapper),
                      Interpreter2.NONENUMERABLE_DESCRIPTOR
                    );
                  };
                  Interpreter2.prototype.getScope = function() {
                    var scope = this.stateStack[this.stateStack.length - 1].scope;
                    if (!scope) {
                      throw Error("No scope found.");
                    }
                    return scope;
                  };
                  Interpreter2.prototype.createScope = function(node, parentScope) {
                    var strict = false;
                    if (parentScope && parentScope.strict) {
                      strict = true;
                    } else {
                      var firstNode = node["body"] && node["body"][0];
                      if (firstNode && firstNode.expression && firstNode.expression["type"] === "Literal" && firstNode.expression.value === "use strict") {
                        strict = true;
                      }
                    }
                    var object = this.createObjectProto(null);
                    var scope = new Interpreter2.Scope(parentScope, strict, object);
                    if (!parentScope) {
                      this.initGlobal(scope.object);
                    }
                    this.populateScope_(node, scope);
                    return scope;
                  };
                  Interpreter2.prototype.createSpecialScope = function(parentScope, opt_object) {
                    if (!parentScope) {
                      throw Error("parentScope required");
                    }
                    var object = opt_object || this.createObjectProto(null);
                    return new Interpreter2.Scope(parentScope, parentScope.strict, object);
                  };
                  Interpreter2.prototype.getValueFromScope = function(name) {
                    var scope = this.getScope();
                    while (scope && scope !== this.globalScope) {
                      if (name in scope.object.properties) {
                        return scope.object.properties[name];
                      }
                      scope = scope.parentScope;
                    }
                    if (scope === this.globalScope && this.hasProperty(scope.object, name)) {
                      return this.getProperty(scope.object, name);
                    }
                    var prevNode = this.stateStack[this.stateStack.length - 1].node;
                    if (prevNode["type"] === "UnaryExpression" && prevNode["operator"] === "typeof") {
                      return void 0;
                    }
                    this.throwException(this.REFERENCE_ERROR, name + " is not defined");
                  };
                  Interpreter2.prototype.setValueToScope = function(name, value) {
                    var scope = this.getScope();
                    var strict = scope.strict;
                    while (scope && scope !== this.globalScope) {
                      if (name in scope.object.properties) {
                        scope.object.properties[name] = value;
                        return void 0;
                      }
                      scope = scope.parentScope;
                    }
                    if (scope === this.globalScope && (!strict || this.hasProperty(scope.object, name))) {
                      return this.setProperty(scope.object, name, value);
                    }
                    this.throwException(this.REFERENCE_ERROR, name + " is not defined");
                  };
                  Interpreter2.prototype.populateScope_ = function(node, scope) {
                    if (node["type"] === "VariableDeclaration") {
                      for (var i = 0; i < node["declarations"].length; i++) {
                        this.setProperty(
                          scope.object,
                          node["declarations"][i]["id"]["name"],
                          void 0,
                          Interpreter2.VARIABLE_DESCRIPTOR
                        );
                      }
                    } else if (node["type"] === "FunctionDeclaration") {
                      this.setProperty(
                        scope.object,
                        node["id"]["name"],
                        this.createFunction(node, scope),
                        Interpreter2.VARIABLE_DESCRIPTOR
                      );
                      return;
                    } else if (node["type"] === "FunctionExpression") {
                      return;
                    } else if (node["type"] === "ExpressionStatement") {
                      return;
                    }
                    var nodeClass = node["constructor"];
                    for (var name in node) {
                      var prop = node[name];
                      if (prop && typeof prop === "object") {
                        if (Array.isArray(prop)) {
                          for (var i = 0; i < prop.length; i++) {
                            if (prop[i] && prop[i].constructor === nodeClass) {
                              this.populateScope_(prop[i], scope);
                            }
                          }
                        } else {
                          if (prop.constructor === nodeClass) {
                            this.populateScope_(prop, scope);
                          }
                        }
                      }
                    }
                  };
                  Interpreter2.prototype.calledWithNew = function() {
                    return this.stateStack[this.stateStack.length - 1].isConstructor;
                  };
                  Interpreter2.prototype.getValue = function(ref) {
                    if (ref[0] === Interpreter2.SCOPE_REFERENCE) {
                      return this.getValueFromScope(ref[1]);
                    } else {
                      return this.getProperty(ref[0], ref[1]);
                    }
                  };
                  Interpreter2.prototype.setValue = function(ref, value) {
                    if (ref[0] === Interpreter2.SCOPE_REFERENCE) {
                      return this.setValueToScope(ref[1], value);
                    } else {
                      return this.setProperty(ref[0], ref[1], value);
                    }
                  };
                  Interpreter2.prototype.throwException = function(errorClass, opt_message) {
                    if (opt_message === void 0) {
                      var error2 = errorClass;
                    } else {
                      var error2 = this.createObject(errorClass);
                      this.populateError(error2, opt_message);
                    }
                    this.unwind(Interpreter2.Completion.THROW, error2, void 0);
                    throw Interpreter2.STEP_ERROR;
                  };
                  Interpreter2.prototype.unwind = function(type, value, label) {
                    if (type === Interpreter2.Completion.NORMAL) {
                      throw TypeError("Should not unwind for NORMAL completions");
                    }
                    loop: for (var stack = this.stateStack; stack.length > 0; stack.pop()) {
                      var state = stack[stack.length - 1];
                      switch (state.node["type"]) {
                        case "TryStatement":
                          state.cv = { type, value, label };
                          return;
                        case "CallExpression":
                        case "NewExpression":
                          if (type === Interpreter2.Completion.RETURN) {
                            state.value = value;
                            return;
                          } else if (type !== Interpreter2.Completion.THROW) {
                            throw Error("Unsynatctic break/continue not rejected by Acorn");
                          }
                          break;
                        case "Program":
                          state.done = true;
                          break loop;
                      }
                      if (type === Interpreter2.Completion.BREAK) {
                        if (label ? state.labels && state.labels.indexOf(label) !== -1 : state.isLoop || state.isSwitch) {
                          stack.pop();
                          return;
                        }
                      } else if (type === Interpreter2.Completion.CONTINUE) {
                        if (label ? state.labels && state.labels.indexOf(label) !== -1 : state.isLoop) {
                          return;
                        }
                      }
                    }
                    var realError;
                    if (this.isa(value, this.ERROR)) {
                      var errorTable = {
                        "EvalError": EvalError,
                        "RangeError": RangeError,
                        "ReferenceError": ReferenceError,
                        "SyntaxError": SyntaxError,
                        "TypeError": TypeError,
                        "URIError": URIError
                      };
                      var name = String(this.getProperty(value, "name"));
                      var message = this.getProperty(value, "message").valueOf();
                      var errorConstructor = errorTable[name] || Error;
                      realError = errorConstructor(message);
                      realError.stack = String(this.getProperty(value, "stack"));
                    } else {
                      realError = String(value);
                    }
                    throw realError;
                  };
                  Interpreter2.prototype.createGetter_ = function(func, left) {
                    if (!this.getterStep_) {
                      throw Error("Unexpected call to createGetter");
                    }
                    this.getterStep_ = false;
                    var funcThis = Array.isArray(left) ? left[0] : left;
                    var node = new this.nodeConstructor({ options: {} });
                    node["type"] = "CallExpression";
                    var state = new Interpreter2.State(
                      node,
                      this.stateStack[this.stateStack.length - 1].scope
                    );
                    state.doneCallee_ = true;
                    state.funcThis_ = funcThis;
                    state.func_ = func;
                    state.doneArgs_ = true;
                    state.arguments_ = [];
                    return state;
                  };
                  Interpreter2.prototype.createSetter_ = function(func, left, value) {
                    if (!this.setterStep_) {
                      throw Error("Unexpected call to createSetter");
                    }
                    this.setterStep_ = false;
                    var funcThis = Array.isArray(left) ? left[0] : this.globalObject;
                    var node = new this.nodeConstructor({ options: {} });
                    node["type"] = "CallExpression";
                    var state = new Interpreter2.State(
                      node,
                      this.stateStack[this.stateStack.length - 1].scope
                    );
                    state.doneCallee_ = true;
                    state.funcThis_ = funcThis;
                    state.func_ = func;
                    state.doneArgs_ = true;
                    state.arguments_ = [value];
                    return state;
                  };
                  Interpreter2.prototype.boxThis_ = function(value) {
                    if (value === void 0 || value === null) {
                      return this.globalObject;
                    }
                    if (!(value instanceof Interpreter2.Object)) {
                      var box = this.createObjectProto(this.getPrototype(value));
                      box.data = value;
                      return box;
                    }
                    return value;
                  };
                  Interpreter2.Value;
                  Interpreter2.State = function(node, scope) {
                    this.node = node;
                    this.scope = scope;
                  };
                  Interpreter2.Scope = function(parentScope, strict, object) {
                    this.parentScope = parentScope;
                    this.strict = strict;
                    this.object = object;
                  };
                  Interpreter2.Object = function(proto) {
                    this.getter = /* @__PURE__ */ Object.create(null);
                    this.setter = /* @__PURE__ */ Object.create(null);
                    this.properties = /* @__PURE__ */ Object.create(null);
                    this.proto = proto;
                  };
                  Interpreter2.Object.prototype.proto = null;
                  Interpreter2.Object.prototype.class = "Object";
                  Interpreter2.Object.prototype.data = null;
                  Interpreter2.Object.prototype.toString = function() {
                    if (!(this instanceof Interpreter2.Object)) {
                      return String(this);
                    }
                    if (this.class === "Array") {
                      var cycles = Interpreter2.toStringCycles_;
                      cycles.push(this);
                      try {
                        var strs = [];
                        var maxLength = this.properties.length;
                        var truncated = false;
                        if (maxLength > 1024) {
                          maxLength = 1e3;
                          truncated = true;
                        }
                        for (var i = 0; i < maxLength; i++) {
                          var value = this.properties[i];
                          strs[i] = value instanceof Interpreter2.Object && cycles.indexOf(value) !== -1 ? "..." : value;
                        }
                        if (truncated) {
                          strs.push("...");
                        }
                      } finally {
                        cycles.pop();
                      }
                      return strs.join(",");
                    }
                    if (this.class === "Error") {
                      var cycles = Interpreter2.toStringCycles_;
                      if (cycles.indexOf(this) !== -1) {
                        return "[object Error]";
                      }
                      var name, message;
                      var obj = this;
                      do {
                        if ("name" in obj.properties) {
                          name = obj.properties["name"];
                          break;
                        }
                      } while (obj = obj.proto);
                      var obj = this;
                      do {
                        if ("message" in obj.properties) {
                          message = obj.properties["message"];
                          break;
                        }
                      } while (obj = obj.proto);
                      cycles.push(this);
                      try {
                        name = name && String(name);
                        message = message && String(message);
                      } finally {
                        cycles.pop();
                      }
                      return message ? name + ": " + message : String(name);
                    }
                    if (this.data !== null) {
                      return String(this.data);
                    }
                    return "[object " + this.class + "]";
                  };
                  Interpreter2.Object.prototype.valueOf = function() {
                    if (this.data === void 0 || this.data === null || this.data instanceof RegExp) {
                      return this;
                    }
                    if (this.data instanceof Date) {
                      return this.data.valueOf();
                    }
                    return (
                      /** @type {(boolean|number|string)} */
                      this.data
                    );
                  };
                  Interpreter2.prototype["stepArrayExpression"] = function(stack, state, node) {
                    var elements = node["elements"];
                    var n = state.n_ || 0;
                    if (!state.array_) {
                      state.array_ = this.createArray();
                      state.array_.properties.length = elements.length;
                    } else {
                      this.setProperty(state.array_, n, state.value);
                      n++;
                    }
                    while (n < elements.length) {
                      if (elements[n]) {
                        state.n_ = n;
                        return new Interpreter2.State(elements[n], state.scope);
                      }
                      n++;
                    }
                    stack.pop();
                    stack[stack.length - 1].value = state.array_;
                  };
                  Interpreter2.prototype["stepAssignmentExpression"] = function(stack, state, node) {
                    if (!state.doneLeft_) {
                      state.doneLeft_ = true;
                      var nextState = new Interpreter2.State(node["left"], state.scope);
                      nextState.components = true;
                      return nextState;
                    }
                    if (!state.doneRight_) {
                      if (!state.leftReference_) {
                        state.leftReference_ = state.value;
                      }
                      if (state.doneGetter_) {
                        state.leftValue_ = state.value;
                      }
                      if (!state.doneGetter_ && node["operator"] !== "=") {
                        var leftValue = this.getValue(state.leftReference_);
                        state.leftValue_ = leftValue;
                        if (this.getterStep_) {
                          state.doneGetter_ = true;
                          var func = (
                            /** @type {!Interpreter.Object} */
                            leftValue
                          );
                          return this.createGetter_(func, state.leftReference_);
                        }
                      }
                      state.doneRight_ = true;
                      if (node["operator"] === "=" && node["left"]["type"] === "Identifier") {
                        state.destinationName = node["left"]["name"];
                      }
                      return new Interpreter2.State(node["right"], state.scope);
                    }
                    if (state.doneSetter_) {
                      stack.pop();
                      stack[stack.length - 1].value = state.setterValue_;
                      return;
                    }
                    var value = state.leftValue_;
                    var rightValue = state.value;
                    switch (node["operator"]) {
                      case "=":
                        value = rightValue;
                        break;
                      case "+=":
                        value += rightValue;
                        break;
                      case "-=":
                        value -= rightValue;
                        break;
                      case "*=":
                        value *= rightValue;
                        break;
                      case "/=":
                        value /= rightValue;
                        break;
                      case "%=":
                        value %= rightValue;
                        break;
                      case "<<=":
                        value <<= rightValue;
                        break;
                      case ">>=":
                        value >>= rightValue;
                        break;
                      case ">>>=":
                        value >>>= rightValue;
                        break;
                      case "&=":
                        value &= rightValue;
                        break;
                      case "^=":
                        value ^= rightValue;
                        break;
                      case "|=":
                        value |= rightValue;
                        break;
                      default:
                        throw SyntaxError("Unknown assignment expression: " + node["operator"]);
                    }
                    var setter = this.setValue(state.leftReference_, value);
                    if (setter) {
                      state.doneSetter_ = true;
                      state.setterValue_ = value;
                      return this.createSetter_(setter, state.leftReference_, value);
                    }
                    stack.pop();
                    stack[stack.length - 1].value = value;
                  };
                  Interpreter2.prototype["stepBinaryExpression"] = function(stack, state, node) {
                    if (!state.doneLeft_) {
                      state.doneLeft_ = true;
                      return new Interpreter2.State(node["left"], state.scope);
                    }
                    if (!state.doneRight_) {
                      state.doneRight_ = true;
                      state.leftValue_ = state.value;
                      return new Interpreter2.State(node["right"], state.scope);
                    }
                    stack.pop();
                    var leftValue = state.leftValue_;
                    var rightValue = state.value;
                    var value;
                    switch (node["operator"]) {
                      case "==":
                        value = leftValue == rightValue;
                        break;
                      case "!=":
                        value = leftValue != rightValue;
                        break;
                      case "===":
                        value = leftValue === rightValue;
                        break;
                      case "!==":
                        value = leftValue !== rightValue;
                        break;
                      case ">":
                        value = leftValue > rightValue;
                        break;
                      case ">=":
                        value = leftValue >= rightValue;
                        break;
                      case "<":
                        value = leftValue < rightValue;
                        break;
                      case "<=":
                        value = leftValue <= rightValue;
                        break;
                      case "+":
                        value = leftValue + rightValue;
                        break;
                      case "-":
                        value = leftValue - rightValue;
                        break;
                      case "*":
                        value = leftValue * rightValue;
                        break;
                      case "/":
                        value = leftValue / rightValue;
                        break;
                      case "%":
                        value = leftValue % rightValue;
                        break;
                      case "&":
                        value = leftValue & rightValue;
                        break;
                      case "|":
                        value = leftValue | rightValue;
                        break;
                      case "^":
                        value = leftValue ^ rightValue;
                        break;
                      case "<<":
                        value = leftValue << rightValue;
                        break;
                      case ">>":
                        value = leftValue >> rightValue;
                        break;
                      case ">>>":
                        value = leftValue >>> rightValue;
                        break;
                      case "in":
                        if (!(rightValue instanceof Interpreter2.Object)) {
                          this.throwException(
                            this.TYPE_ERROR,
                            "'in' expects an object, not '" + rightValue + "'"
                          );
                        }
                        value = this.hasProperty(rightValue, leftValue);
                        break;
                      case "instanceof":
                        if (!this.isa(rightValue, this.FUNCTION)) {
                          this.throwException(
                            this.TYPE_ERROR,
                            "Right-hand side of instanceof is not an object"
                          );
                        }
                        value = leftValue instanceof Interpreter2.Object ? this.isa(leftValue, rightValue) : false;
                        break;
                      default:
                        throw SyntaxError("Unknown binary operator: " + node["operator"]);
                    }
                    stack[stack.length - 1].value = value;
                  };
                  Interpreter2.prototype["stepBlockStatement"] = function(stack, state, node) {
                    var n = state.n_ || 0;
                    var expression = node["body"][n];
                    if (expression) {
                      state.n_ = n + 1;
                      return new Interpreter2.State(expression, state.scope);
                    }
                    stack.pop();
                  };
                  Interpreter2.prototype["stepBreakStatement"] = function(stack, state, node) {
                    var label = node["label"] && node["label"]["name"];
                    this.unwind(Interpreter2.Completion.BREAK, void 0, label);
                  };
                  Interpreter2.prototype.evalCodeNumber_ = 0;
                  Interpreter2.prototype["stepCallExpression"] = function(stack, state, node) {
                    if (!state.doneCallee_) {
                      state.doneCallee_ = 1;
                      var nextState = new Interpreter2.State(node["callee"], state.scope);
                      nextState.components = true;
                      return nextState;
                    }
                    if (state.doneCallee_ === 1) {
                      state.doneCallee_ = 2;
                      var func = state.value;
                      if (Array.isArray(func)) {
                        state.func_ = this.getValue(func);
                        if (func[0] === Interpreter2.SCOPE_REFERENCE) {
                          state.directEval_ = func[1] === "eval";
                        } else {
                          state.funcThis_ = func[0];
                        }
                        func = state.func_;
                        if (this.getterStep_) {
                          state.doneCallee_ = 1;
                          return this.createGetter_(
                            /** @type {!Interpreter.Object} */
                            func,
                            state.value
                          );
                        }
                      } else {
                        state.func_ = func;
                      }
                      state.arguments_ = [];
                      state.n_ = 0;
                    }
                    var func = state.func_;
                    if (!state.doneArgs_) {
                      if (state.n_ !== 0) {
                        state.arguments_.push(state.value);
                      }
                      if (node["arguments"][state.n_]) {
                        return new Interpreter2.State(node["arguments"][state.n_++], state.scope);
                      }
                      if (node["type"] === "NewExpression") {
                        if (!(func instanceof Interpreter2.Object) || func.illegalConstructor) {
                          this.throwException(this.TYPE_ERROR, func + " is not a constructor");
                        }
                        if (func === this.ARRAY) {
                          state.funcThis_ = this.createArray();
                        } else {
                          var proto = func.properties["prototype"];
                          if (typeof proto !== "object" || proto === null) {
                            proto = this.OBJECT_PROTO;
                          }
                          state.funcThis_ = this.createObjectProto(proto);
                        }
                        state.isConstructor = true;
                      }
                      state.doneArgs_ = true;
                    }
                    if (!state.doneExec_) {
                      state.doneExec_ = true;
                      if (!(func instanceof Interpreter2.Object)) {
                        this.throwException(this.TYPE_ERROR, func + " is not a function");
                      }
                      var funcNode = func.node;
                      if (funcNode) {
                        var scope = this.createScope(funcNode["body"], func.parentScope);
                        for (var i = 0; i < funcNode["params"].length; i++) {
                          var paramName = funcNode["params"][i]["name"];
                          var paramValue = state.arguments_.length > i ? state.arguments_[i] : void 0;
                          this.setProperty(scope.object, paramName, paramValue);
                        }
                        var argsList = this.createArray();
                        for (var i = 0; i < state.arguments_.length; i++) {
                          this.setProperty(argsList, i, state.arguments_[i]);
                        }
                        this.setProperty(scope.object, "arguments", argsList);
                        var name = funcNode["id"] && funcNode["id"]["name"];
                        if (name) {
                          this.setProperty(scope.object, name, func);
                        }
                        if (!scope.strict) {
                          state.funcThis_ = this.boxThis_(state.funcThis_);
                        }
                        this.setProperty(
                          scope.object,
                          "this",
                          state.funcThis_,
                          Interpreter2.READONLY_DESCRIPTOR
                        );
                        state.value = void 0;
                        return new Interpreter2.State(funcNode["body"], scope);
                      } else if (func.eval) {
                        var code = state.arguments_[0];
                        if (typeof code !== "string") {
                          state.value = code;
                        } else {
                          try {
                            var ast = this.parse_(
                              String(code),
                              "eval" + this.evalCodeNumber_++
                            );
                          } catch (e) {
                            this.throwException(this.SYNTAX_ERROR, "Invalid code: " + e.message);
                          }
                          var evalNode = new this.nodeConstructor({ options: {} });
                          evalNode["type"] = "EvalProgram_";
                          evalNode["body"] = ast["body"];
                          Interpreter2.stripLocations_(evalNode, node["start"], node["end"]);
                          var scope = state.directEval_ ? state.scope : this.globalScope;
                          if (scope.strict) {
                            scope = this.createScope(ast, scope);
                          } else {
                            this.populateScope_(ast, scope);
                          }
                          this.value = void 0;
                          return new Interpreter2.State(evalNode, scope);
                        }
                      } else if (func.nativeFunc) {
                        if (!state.scope.strict) {
                          state.funcThis_ = this.boxThis_(state.funcThis_);
                        }
                        state.value = func.nativeFunc.apply(state.funcThis_, state.arguments_);
                      } else if (func.asyncFunc) {
                        var thisInterpreter = this;
                        var callback = function(value) {
                          state.value = value;
                          thisInterpreter.paused_ = false;
                        };
                        var argLength = func.asyncFunc.length - 1;
                        var argsWithCallback = state.arguments_.concat(
                          new Array(argLength)
                        ).slice(0, argLength);
                        argsWithCallback.push(callback);
                        this.paused_ = true;
                        if (!state.scope.strict) {
                          state.funcThis_ = this.boxThis_(state.funcThis_);
                        }
                        func.asyncFunc.apply(state.funcThis_, argsWithCallback);
                        return;
                      } else {
                        this.throwException(this.TYPE_ERROR, func.class + " is not callable");
                      }
                    } else {
                      stack.pop();
                      if (state.isConstructor && typeof state.value !== "object") {
                        stack[stack.length - 1].value = state.funcThis_;
                      } else {
                        stack[stack.length - 1].value = state.value;
                      }
                    }
                  };
                  Interpreter2.prototype["stepCatchClause"] = function(stack, state, node) {
                    if (!state.done_) {
                      state.done_ = true;
                      var scope = this.createSpecialScope(state.scope);
                      this.setProperty(scope.object, node["param"]["name"], state.throwValue);
                      return new Interpreter2.State(node["body"], scope);
                    } else {
                      stack.pop();
                    }
                  };
                  Interpreter2.prototype["stepConditionalExpression"] = function(stack, state, node) {
                    var mode = state.mode_ || 0;
                    if (mode === 0) {
                      state.mode_ = 1;
                      return new Interpreter2.State(node["test"], state.scope);
                    }
                    if (mode === 1) {
                      state.mode_ = 2;
                      var value = Boolean(state.value);
                      if (value && node["consequent"]) {
                        return new Interpreter2.State(node["consequent"], state.scope);
                      } else if (!value && node["alternate"]) {
                        return new Interpreter2.State(node["alternate"], state.scope);
                      }
                      this.value = void 0;
                    }
                    stack.pop();
                    if (node["type"] === "ConditionalExpression") {
                      stack[stack.length - 1].value = state.value;
                    }
                  };
                  Interpreter2.prototype["stepContinueStatement"] = function(stack, state, node) {
                    var label = node["label"] && node["label"]["name"];
                    this.unwind(Interpreter2.Completion.CONTINUE, void 0, label);
                  };
                  Interpreter2.prototype["stepDebuggerStatement"] = function(stack, state, node) {
                    stack.pop();
                  };
                  Interpreter2.prototype["stepDoWhileStatement"] = function(stack, state, node) {
                    if (node["type"] === "DoWhileStatement" && state.test_ === void 0) {
                      state.value = true;
                      state.test_ = true;
                    }
                    if (!state.test_) {
                      state.test_ = true;
                      return new Interpreter2.State(node["test"], state.scope);
                    }
                    if (!state.value) {
                      stack.pop();
                    } else if (node["body"]) {
                      state.test_ = false;
                      state.isLoop = true;
                      return new Interpreter2.State(node["body"], state.scope);
                    }
                  };
                  Interpreter2.prototype["stepEmptyStatement"] = function(stack, state, node) {
                    stack.pop();
                  };
                  Interpreter2.prototype["stepEvalProgram_"] = function(stack, state, node) {
                    var n = state.n_ || 0;
                    var expression = node["body"][n];
                    if (expression) {
                      state.n_ = n + 1;
                      return new Interpreter2.State(expression, state.scope);
                    }
                    stack.pop();
                    stack[stack.length - 1].value = this.value;
                  };
                  Interpreter2.prototype["stepExpressionStatement"] = function(stack, state, node) {
                    if (!state.done_) {
                      state.done_ = true;
                      return new Interpreter2.State(node["expression"], state.scope);
                    }
                    stack.pop();
                    this.value = state.value;
                  };
                  Interpreter2.prototype["stepForInStatement"] = function(stack, state, node) {
                    if (!state.doneInit_) {
                      state.doneInit_ = true;
                      if (node["left"]["declarations"] && node["left"]["declarations"][0]["init"]) {
                        if (state.scope.strict) {
                          this.throwException(
                            this.SYNTAX_ERROR,
                            "for-in loop variable declaration may not have an initializer."
                          );
                        }
                        return new Interpreter2.State(node["left"], state.scope);
                      }
                    }
                    if (!state.doneObject_) {
                      state.doneObject_ = true;
                      if (!state.variable_) {
                        state.variable_ = state.value;
                      }
                      return new Interpreter2.State(node["right"], state.scope);
                    }
                    if (!state.isLoop) {
                      state.isLoop = true;
                      state.object_ = state.value;
                      state.visited_ = /* @__PURE__ */ Object.create(null);
                    }
                    if (state.name_ === void 0) {
                      gotPropName: while (true) {
                        if (state.object_ instanceof Interpreter2.Object) {
                          if (!state.props_) {
                            state.props_ = Object.getOwnPropertyNames(state.object_.properties);
                          }
                          while (true) {
                            var prop = state.props_.shift();
                            if (prop === void 0) {
                              break;
                            }
                            if (!Object.prototype.hasOwnProperty.call(
                              state.object_.properties,
                              prop
                            )) {
                              continue;
                            }
                            if (state.visited_[prop]) {
                              continue;
                            }
                            state.visited_[prop] = true;
                            if (!Object.prototype.propertyIsEnumerable.call(
                              state.object_.properties,
                              prop
                            )) {
                              continue;
                            }
                            state.name_ = prop;
                            break gotPropName;
                          }
                        } else if (state.object_ !== null && state.object_ !== void 0) {
                          if (!state.props_) {
                            state.props_ = Object.getOwnPropertyNames(state.object_);
                          }
                          while (true) {
                            var prop = state.props_.shift();
                            if (prop === void 0) {
                              break;
                            }
                            state.visited_[prop] = true;
                            if (!Object.prototype.propertyIsEnumerable.call(
                              state.object_,
                              prop
                            )) {
                              continue;
                            }
                            state.name_ = prop;
                            break gotPropName;
                          }
                        }
                        state.object_ = this.getPrototype(state.object_);
                        state.props_ = null;
                        if (state.object_ === null) {
                          stack.pop();
                          return;
                        }
                      }
                    }
                    if (!state.doneVariable_) {
                      state.doneVariable_ = true;
                      var left = node["left"];
                      if (left["type"] === "VariableDeclaration") {
                        state.variable_ = [Interpreter2.SCOPE_REFERENCE, left["declarations"][0]["id"]["name"]];
                      } else {
                        state.variable_ = null;
                        var nextState = new Interpreter2.State(left, state.scope);
                        nextState.components = true;
                        return nextState;
                      }
                    }
                    if (!state.variable_) {
                      state.variable_ = state.value;
                    }
                    if (!state.doneSetter_) {
                      state.doneSetter_ = true;
                      var value = state.name_;
                      var setter = this.setValue(state.variable_, value);
                      if (setter) {
                        return this.createSetter_(setter, state.variable_, value);
                      }
                    }
                    state.name_ = void 0;
                    state.doneVariable_ = false;
                    state.doneSetter_ = false;
                    if (node["body"]) {
                      return new Interpreter2.State(node["body"], state.scope);
                    }
                  };
                  Interpreter2.prototype["stepForStatement"] = function(stack, state, node) {
                    var mode = state.mode_ || 0;
                    if (mode === 0) {
                      state.mode_ = 1;
                      if (node["init"]) {
                        return new Interpreter2.State(node["init"], state.scope);
                      }
                    } else if (mode === 1) {
                      state.mode_ = 2;
                      if (node["test"]) {
                        return new Interpreter2.State(node["test"], state.scope);
                      }
                    } else if (mode === 2) {
                      state.mode_ = 3;
                      if (node["test"] && !state.value) {
                        stack.pop();
                      } else {
                        state.isLoop = true;
                        return new Interpreter2.State(node["body"], state.scope);
                      }
                    } else if (mode === 3) {
                      state.mode_ = 1;
                      if (node["update"]) {
                        return new Interpreter2.State(node["update"], state.scope);
                      }
                    }
                  };
                  Interpreter2.prototype["stepFunctionDeclaration"] = function(stack, state, node) {
                    stack.pop();
                  };
                  Interpreter2.prototype["stepFunctionExpression"] = function(stack, state, node) {
                    stack.pop();
                    state = stack[stack.length - 1];
                    state.value = this.createFunction(node, state.scope, state.destinationName);
                  };
                  Interpreter2.prototype["stepIdentifier"] = function(stack, state, node) {
                    stack.pop();
                    if (state.components) {
                      stack[stack.length - 1].value = [Interpreter2.SCOPE_REFERENCE, node["name"]];
                      return;
                    }
                    var value = this.getValueFromScope(node["name"]);
                    if (this.getterStep_) {
                      var func = (
                        /** @type {!Interpreter.Object} */
                        value
                      );
                      return this.createGetter_(func, this.globalObject);
                    }
                    stack[stack.length - 1].value = value;
                  };
                  Interpreter2.prototype["stepIfStatement"] = Interpreter2.prototype["stepConditionalExpression"];
                  Interpreter2.prototype["stepLabeledStatement"] = function(stack, state, node) {
                    stack.pop();
                    var labels = state.labels || [];
                    labels.push(node["label"]["name"]);
                    var nextState = new Interpreter2.State(node["body"], state.scope);
                    nextState.labels = labels;
                    return nextState;
                  };
                  Interpreter2.prototype["stepLiteral"] = function(stack, state, node) {
                    stack.pop();
                    var value = node["value"];
                    if (value instanceof RegExp) {
                      var pseudoRegexp = this.createObjectProto(this.REGEXP_PROTO);
                      this.populateRegExp(pseudoRegexp, value);
                      value = pseudoRegexp;
                    }
                    stack[stack.length - 1].value = value;
                  };
                  Interpreter2.prototype["stepLogicalExpression"] = function(stack, state, node) {
                    if (node["operator"] !== "&&" && node["operator"] !== "||") {
                      throw SyntaxError("Unknown logical operator: " + node["operator"]);
                    }
                    if (!state.doneLeft_) {
                      state.doneLeft_ = true;
                      return new Interpreter2.State(node["left"], state.scope);
                    }
                    if (!state.doneRight_) {
                      if (node["operator"] === "&&" && !state.value || node["operator"] === "||" && state.value) {
                        stack.pop();
                        stack[stack.length - 1].value = state.value;
                      } else {
                        state.doneRight_ = true;
                        return new Interpreter2.State(node["right"], state.scope);
                      }
                    } else {
                      stack.pop();
                      stack[stack.length - 1].value = state.value;
                    }
                  };
                  Interpreter2.prototype["stepMemberExpression"] = function(stack, state, node) {
                    if (!state.doneObject_) {
                      state.doneObject_ = true;
                      return new Interpreter2.State(node["object"], state.scope);
                    }
                    var propName;
                    if (!node["computed"]) {
                      state.object_ = state.value;
                      propName = node["property"]["name"];
                    } else if (!state.doneProperty_) {
                      state.object_ = state.value;
                      state.doneProperty_ = true;
                      return new Interpreter2.State(node["property"], state.scope);
                    } else {
                      propName = state.value;
                    }
                    stack.pop();
                    if (state.components) {
                      stack[stack.length - 1].value = [state.object_, propName];
                    } else {
                      var value = this.getProperty(state.object_, propName);
                      if (this.getterStep_) {
                        var func = (
                          /** @type {!Interpreter.Object} */
                          value
                        );
                        return this.createGetter_(func, state.object_);
                      }
                      stack[stack.length - 1].value = value;
                    }
                  };
                  Interpreter2.prototype["stepNewExpression"] = Interpreter2.prototype["stepCallExpression"];
                  Interpreter2.prototype["stepObjectExpression"] = function(stack, state, node) {
                    var n = state.n_ || 0;
                    var property = node["properties"][n];
                    if (!state.object_) {
                      state.object_ = this.createObjectProto(this.OBJECT_PROTO);
                      state.properties_ = /* @__PURE__ */ Object.create(null);
                    } else {
                      var propName = state.destinationName;
                      if (!state.properties_[propName]) {
                        state.properties_[propName] = {};
                      }
                      state.properties_[propName][property["kind"]] = state.value;
                      state.n_ = ++n;
                      property = node["properties"][n];
                    }
                    if (property) {
                      var key = property["key"];
                      if (key["type"] === "Identifier") {
                        var propName = key["name"];
                      } else if (key["type"] === "Literal") {
                        var propName = key["value"];
                      } else {
                        throw SyntaxError("Unknown object structure: " + key["type"]);
                      }
                      state.destinationName = propName;
                      return new Interpreter2.State(property["value"], state.scope);
                    }
                    for (var key in state.properties_) {
                      var kinds = state.properties_[key];
                      if ("get" in kinds || "set" in kinds) {
                        var descriptor = {
                          configurable: true,
                          enumerable: true,
                          get: kinds["get"],
                          set: kinds["set"]
                        };
                        this.setProperty(
                          state.object_,
                          key,
                          Interpreter2.VALUE_IN_DESCRIPTOR,
                          descriptor
                        );
                      } else {
                        this.setProperty(state.object_, key, kinds["init"]);
                      }
                    }
                    stack.pop();
                    stack[stack.length - 1].value = state.object_;
                  };
                  Interpreter2.prototype["stepProgram"] = function(stack, state, node) {
                    var expression = node["body"].shift();
                    if (expression) {
                      state.done = false;
                      return new Interpreter2.State(expression, state.scope);
                    }
                    state.done = true;
                  };
                  Interpreter2.prototype["stepReturnStatement"] = function(stack, state, node) {
                    if (node["argument"] && !state.done_) {
                      state.done_ = true;
                      return new Interpreter2.State(node["argument"], state.scope);
                    }
                    this.unwind(Interpreter2.Completion.RETURN, state.value, void 0);
                  };
                  Interpreter2.prototype["stepSequenceExpression"] = function(stack, state, node) {
                    var n = state.n_ || 0;
                    var expression = node["expressions"][n];
                    if (expression) {
                      state.n_ = n + 1;
                      return new Interpreter2.State(expression, state.scope);
                    }
                    stack.pop();
                    stack[stack.length - 1].value = state.value;
                  };
                  Interpreter2.prototype["stepSwitchStatement"] = function(stack, state, node) {
                    if (!state.test_) {
                      state.test_ = 1;
                      return new Interpreter2.State(node["discriminant"], state.scope);
                    }
                    if (state.test_ === 1) {
                      state.test_ = 2;
                      state.switchValue_ = state.value;
                      state.defaultCase_ = -1;
                    }
                    while (true) {
                      var index = state.index_ || 0;
                      var switchCase = node["cases"][index];
                      if (!state.matched_ && switchCase && !switchCase["test"]) {
                        state.defaultCase_ = index;
                        state.index_ = index + 1;
                        continue;
                      }
                      if (!switchCase && !state.matched_ && state.defaultCase_ !== -1) {
                        state.matched_ = true;
                        state.index_ = state.defaultCase_;
                        continue;
                      }
                      if (switchCase) {
                        if (!state.matched_ && !state.tested_ && switchCase["test"]) {
                          state.tested_ = true;
                          return new Interpreter2.State(switchCase["test"], state.scope);
                        }
                        if (state.matched_ || state.value === state.switchValue_) {
                          state.matched_ = true;
                          var n = state.n_ || 0;
                          if (switchCase["consequent"][n]) {
                            state.isSwitch = true;
                            state.n_ = n + 1;
                            return new Interpreter2.State(
                              switchCase["consequent"][n],
                              state.scope
                            );
                          }
                        }
                        state.tested_ = false;
                        state.n_ = 0;
                        state.index_ = index + 1;
                      } else {
                        stack.pop();
                        return;
                      }
                    }
                  };
                  Interpreter2.prototype["stepThisExpression"] = function(stack, state, node) {
                    stack.pop();
                    stack[stack.length - 1].value = this.getValueFromScope("this");
                  };
                  Interpreter2.prototype["stepThrowStatement"] = function(stack, state, node) {
                    if (!state.done_) {
                      state.done_ = true;
                      return new Interpreter2.State(node["argument"], state.scope);
                    } else {
                      this.throwException(state.value);
                    }
                  };
                  Interpreter2.prototype["stepTryStatement"] = function(stack, state, node) {
                    if (!state.doneBlock_) {
                      state.doneBlock_ = true;
                      return new Interpreter2.State(node["block"], state.scope);
                    }
                    if (state.cv && state.cv.type === Interpreter2.Completion.THROW && !state.doneHandler_ && node["handler"]) {
                      state.doneHandler_ = true;
                      var nextState = new Interpreter2.State(node["handler"], state.scope);
                      nextState.throwValue = state.cv.value;
                      state.cv = void 0;
                      return nextState;
                    }
                    if (!state.doneFinalizer_ && node["finalizer"]) {
                      state.doneFinalizer_ = true;
                      return new Interpreter2.State(node["finalizer"], state.scope);
                    }
                    stack.pop();
                    if (state.cv) {
                      this.unwind(state.cv.type, state.cv.value, state.cv.label);
                    }
                  };
                  Interpreter2.prototype["stepUnaryExpression"] = function(stack, state, node) {
                    if (!state.done_) {
                      state.done_ = true;
                      var nextState = new Interpreter2.State(node["argument"], state.scope);
                      nextState.components = node["operator"] === "delete";
                      return nextState;
                    }
                    stack.pop();
                    var value = state.value;
                    if (node["operator"] === "-") {
                      value = -value;
                    } else if (node["operator"] === "+") {
                      value = +value;
                    } else if (node["operator"] === "!") {
                      value = !value;
                    } else if (node["operator"] === "~") {
                      value = ~value;
                    } else if (node["operator"] === "delete") {
                      var result = true;
                      if (Array.isArray(value)) {
                        var obj = value[0];
                        if (obj === Interpreter2.SCOPE_REFERENCE) {
                          obj = state.scope;
                        }
                        var name = String(value[1]);
                        try {
                          delete obj.properties[name];
                        } catch (e) {
                          if (state.scope.strict) {
                            this.throwException(this.TYPE_ERROR, "Cannot delete property '" + name + "' of '" + obj + "'");
                          } else {
                            result = false;
                          }
                        }
                      }
                      value = result;
                    } else if (node["operator"] === "typeof") {
                      value = value && value.class === "Function" ? "function" : typeof value;
                    } else if (node["operator"] === "void") {
                      value = void 0;
                    } else {
                      throw SyntaxError("Unknown unary operator: " + node["operator"]);
                    }
                    stack[stack.length - 1].value = value;
                  };
                  Interpreter2.prototype["stepUpdateExpression"] = function(stack, state, node) {
                    if (!state.doneLeft_) {
                      state.doneLeft_ = true;
                      var nextState = new Interpreter2.State(node["argument"], state.scope);
                      nextState.components = true;
                      return nextState;
                    }
                    if (!state.leftSide_) {
                      state.leftSide_ = state.value;
                    }
                    if (state.doneGetter_) {
                      state.leftValue_ = state.value;
                    }
                    if (!state.doneGetter_) {
                      var leftValue = this.getValue(state.leftSide_);
                      state.leftValue_ = leftValue;
                      if (this.getterStep_) {
                        state.doneGetter_ = true;
                        var func = (
                          /** @type {!Interpreter.Object} */
                          leftValue
                        );
                        return this.createGetter_(func, state.leftSide_);
                      }
                    }
                    if (state.doneSetter_) {
                      stack.pop();
                      stack[stack.length - 1].value = state.setterValue_;
                      return;
                    }
                    var leftValue = Number(state.leftValue_);
                    var changeValue;
                    if (node["operator"] === "++") {
                      changeValue = leftValue + 1;
                    } else if (node["operator"] === "--") {
                      changeValue = leftValue - 1;
                    } else {
                      throw SyntaxError("Unknown update expression: " + node["operator"]);
                    }
                    var returnValue = node["prefix"] ? changeValue : leftValue;
                    var setter = this.setValue(state.leftSide_, changeValue);
                    if (setter) {
                      state.doneSetter_ = true;
                      state.setterValue_ = returnValue;
                      return this.createSetter_(setter, state.leftSide_, changeValue);
                    }
                    stack.pop();
                    stack[stack.length - 1].value = returnValue;
                  };
                  Interpreter2.prototype["stepVariableDeclaration"] = function(stack, state, node) {
                    var declarations = node["declarations"];
                    var n = state.n_ || 0;
                    var declarationNode = declarations[n];
                    if (state.init_ && declarationNode) {
                      this.setValueToScope(declarationNode["id"]["name"], state.value);
                      state.init_ = false;
                      declarationNode = declarations[++n];
                    }
                    while (declarationNode) {
                      if (declarationNode["init"]) {
                        state.n_ = n;
                        state.init_ = true;
                        state.destinationName = declarationNode["id"]["name"];
                        return new Interpreter2.State(declarationNode["init"], state.scope);
                      }
                      declarationNode = declarations[++n];
                    }
                    stack.pop();
                  };
                  Interpreter2.prototype["stepWithStatement"] = function(stack, state, node) {
                    if (!state.doneObject_) {
                      state.doneObject_ = true;
                      return new Interpreter2.State(node["object"], state.scope);
                    } else if (!state.doneBody_) {
                      state.doneBody_ = true;
                      var scope = this.createSpecialScope(state.scope, state.value);
                      return new Interpreter2.State(node["body"], scope);
                    } else {
                      stack.pop();
                    }
                  };
                  Interpreter2.prototype["stepWhileStatement"] = Interpreter2.prototype["stepDoWhileStatement"];
                  this.Interpreter = Interpreter2;
                  Interpreter2.prototype["step"] = Interpreter2.prototype.step;
                  Interpreter2.prototype["run"] = Interpreter2.prototype.run;
                  Interpreter2.prototype["appendCode"] = Interpreter2.prototype.appendCode;
                  Interpreter2.prototype["createObject"] = Interpreter2.prototype.createObject;
                  Interpreter2.prototype["createObjectProto"] = Interpreter2.prototype.createObjectProto;
                  Interpreter2.prototype["createAsyncFunction"] = Interpreter2.prototype.createAsyncFunction;
                  Interpreter2.prototype["createNativeFunction"] = Interpreter2.prototype.createNativeFunction;
                  Interpreter2.prototype["getProperty"] = Interpreter2.prototype.getProperty;
                  Interpreter2.prototype["setProperty"] = Interpreter2.prototype.setProperty;
                  Interpreter2.prototype["nativeToPseudo"] = Interpreter2.prototype.nativeToPseudo;
                  Interpreter2.prototype["pseudoToNative"] = Interpreter2.prototype.pseudoToNative;
                })
              )
              /******/
            };
            var __webpack_module_cache__ = {};
            function __webpack_require__(moduleId) {
              var cachedModule = __webpack_module_cache__[moduleId];
              if (cachedModule !== void 0) {
                return cachedModule.exports;
              }
              var module2 = __webpack_module_cache__[moduleId] = {
                /******/
                // no module.id needed
                /******/
                // no module.loaded needed
                /******/
                exports: {}
                /******/
              };
              __webpack_modules__[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
              return module2.exports;
            }
            (() => {
              __webpack_require__.n = (module2) => {
                var getter = module2 && module2.__esModule ? (
                  /******/
                  () => module2["default"]
                ) : (
                  /******/
                  () => module2
                );
                __webpack_require__.d(getter, { a: getter });
                return getter;
              };
            })();
            (() => {
              __webpack_require__.d = (exports2, definition) => {
                for (var key in definition) {
                  if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports2, key)) {
                    Object.defineProperty(exports2, key, { enumerable: true, get: definition[key] });
                  }
                }
              };
            })();
            (() => {
              __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
            })();
            (() => {
              __webpack_require__.r = (exports2) => {
                if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                  Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
                }
                Object.defineProperty(exports2, "__esModule", { value: true });
              };
            })();
            var __webpack_exports__ = {};
            (() => {
              "use strict";
              __webpack_require__.r(__webpack_exports__);
              __webpack_require__.d(__webpack_exports__, {
                /* harmony export */
                "default": () => __WEBPACK_DEFAULT_EXPORT__
                /* harmony export */
              });
              var _original_repo_interpreter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! ../original-repo/interpreter */
                "./original-repo/interpreter.js"
              );
              var _original_repo_interpreter__WEBPACK_IMPORTED_MODULE_0___default = /* @__PURE__ */ __webpack_require__.n(_original_repo_interpreter__WEBPACK_IMPORTED_MODULE_0__);
              const __WEBPACK_DEFAULT_EXPORT__ = _original_repo_interpreter__WEBPACK_IMPORTED_MODULE_0__.Interpreter;
            })();
            __webpack_exports__ = __webpack_exports__["default"];
            return __webpack_exports__;
          })()
        );
      });
    }
  });

  // bot-shims/bundle-entry.js
  var bundle_entry_exports = {};
  __export(bundle_entry_exports, {
    Interface: () => Interface_default,
    Interpreter: () => interpreter_default,
    Observer: () => Observer,
    TradeEngine: () => TradeEngine,
    globalObserver: () => observer
  });

  // node_modules/redux/dist/redux.mjs
  function formatProdErrorMessage(code) {
    return `Minified Redux error #${code}; visit https://redux.js.org/Errors?code=${code} for the full message or use the non-minified dev environment for full errors. `;
  }
  var $$observable = /* @__PURE__ */ (() => typeof Symbol === "function" && Symbol.observable || "@@observable")();
  var symbol_observable_default = $$observable;
  var randomString = () => Math.random().toString(36).substring(7).split("").join(".");
  var ActionTypes = {
    INIT: `@@redux/INIT${/* @__PURE__ */ randomString()}`,
    REPLACE: `@@redux/REPLACE${/* @__PURE__ */ randomString()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${randomString()}`
  };
  var actionTypes_default = ActionTypes;
  function isPlainObject(obj) {
    if (typeof obj !== "object" || obj === null)
      return false;
    let proto = obj;
    while (Object.getPrototypeOf(proto) !== null) {
      proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(obj) === proto || Object.getPrototypeOf(obj) === null;
  }
  function createStore(reducer, preloadedState, enhancer) {
    if (typeof reducer !== "function") {
      throw new Error(true ? formatProdErrorMessage(2) : `Expected the root reducer to be a function. Instead, received: '${kindOf(reducer)}'`);
    }
    if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
      throw new Error(true ? formatProdErrorMessage(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
    }
    if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
      enhancer = preloadedState;
      preloadedState = void 0;
    }
    if (typeof enhancer !== "undefined") {
      if (typeof enhancer !== "function") {
        throw new Error(true ? formatProdErrorMessage(1) : `Expected the enhancer to be a function. Instead, received: '${kindOf(enhancer)}'`);
      }
      return enhancer(createStore)(reducer, preloadedState);
    }
    let currentReducer = reducer;
    let currentState = preloadedState;
    let currentListeners = /* @__PURE__ */ new Map();
    let nextListeners = currentListeners;
    let listenerIdCounter = 0;
    let isDispatching = false;
    function ensureCanMutateNextListeners() {
      if (nextListeners === currentListeners) {
        nextListeners = /* @__PURE__ */ new Map();
        currentListeners.forEach((listener, key) => {
          nextListeners.set(key, listener);
        });
      }
    }
    function getState() {
      if (isDispatching) {
        throw new Error(true ? formatProdErrorMessage(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
      }
      return currentState;
    }
    function subscribe(listener) {
      if (typeof listener !== "function") {
        throw new Error(true ? formatProdErrorMessage(4) : `Expected the listener to be a function. Instead, received: '${kindOf(listener)}'`);
      }
      if (isDispatching) {
        throw new Error(true ? formatProdErrorMessage(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
      }
      let isSubscribed = true;
      ensureCanMutateNextListeners();
      const listenerId = listenerIdCounter++;
      nextListeners.set(listenerId, listener);
      return function unsubscribe() {
        if (!isSubscribed) {
          return;
        }
        if (isDispatching) {
          throw new Error(true ? formatProdErrorMessage(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        }
        isSubscribed = false;
        ensureCanMutateNextListeners();
        nextListeners.delete(listenerId);
        currentListeners = null;
      };
    }
    function dispatch(action) {
      if (!isPlainObject(action)) {
        throw new Error(true ? formatProdErrorMessage(7) : `Actions must be plain objects. Instead, the actual type was: '${kindOf(action)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
      }
      if (typeof action.type === "undefined") {
        throw new Error(true ? formatProdErrorMessage(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
      }
      if (typeof action.type !== "string") {
        throw new Error(true ? formatProdErrorMessage(17) : `Action "type" property must be a string. Instead, the actual type was: '${kindOf(action.type)}'. Value was: '${action.type}' (stringified)`);
      }
      if (isDispatching) {
        throw new Error(true ? formatProdErrorMessage(9) : "Reducers may not dispatch actions.");
      }
      try {
        isDispatching = true;
        currentState = currentReducer(currentState, action);
      } finally {
        isDispatching = false;
      }
      const listeners = currentListeners = nextListeners;
      listeners.forEach((listener) => {
        listener();
      });
      return action;
    }
    function replaceReducer(nextReducer) {
      if (typeof nextReducer !== "function") {
        throw new Error(true ? formatProdErrorMessage(10) : `Expected the nextReducer to be a function. Instead, received: '${kindOf(nextReducer)}`);
      }
      currentReducer = nextReducer;
      dispatch({
        type: actionTypes_default.REPLACE
      });
    }
    function observable() {
      const outerSubscribe = subscribe;
      return {
        /**
         * The minimal observable subscription method.
         * @param observer Any object that can be used as an observer.
         * The observer object should have a `next` method.
         * @returns An object with an `unsubscribe` method that can
         * be used to unsubscribe the observable from the store, and prevent further
         * emission of values from the observable.
         */
        subscribe(observer2) {
          if (typeof observer2 !== "object" || observer2 === null) {
            throw new Error(true ? formatProdErrorMessage(11) : `Expected the observer to be an object. Instead, received: '${kindOf(observer2)}'`);
          }
          function observeState() {
            const observerAsObserver = observer2;
            if (observerAsObserver.next) {
              observerAsObserver.next(getState());
            }
          }
          observeState();
          const unsubscribe = outerSubscribe(observeState);
          return {
            unsubscribe
          };
        },
        [symbol_observable_default]() {
          return this;
        }
      };
    }
    dispatch({
      type: actionTypes_default.INIT
    });
    const store = {
      dispatch,
      subscribe,
      getState,
      replaceReducer,
      [symbol_observable_default]: observable
    };
    return store;
  }
  function compose(...funcs) {
    if (funcs.length === 0) {
      return (arg) => arg;
    }
    if (funcs.length === 1) {
      return funcs[0];
    }
    return funcs.reduce((a, b) => (...args) => a(b(...args)));
  }
  function applyMiddleware(...middlewares) {
    return (createStore2) => (reducer, preloadedState) => {
      const store = createStore2(reducer, preloadedState);
      let dispatch = () => {
        throw new Error(true ? formatProdErrorMessage(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
      };
      const middlewareAPI = {
        getState: store.getState,
        dispatch: (action, ...args) => dispatch(action, ...args)
      };
      const chain = middlewares.map((middleware) => middleware(middlewareAPI));
      dispatch = compose(...chain)(store.dispatch);
      return {
        ...store,
        dispatch
      };
    };
  }

  // node_modules/redux-thunk/dist/redux-thunk.mjs
  function createThunkMiddleware(extraArgument) {
    const middleware = ({ dispatch, getState }) => (next) => (action) => {
      if (typeof action === "function") {
        return action(dispatch, getState, extraArgument);
      }
      return next(action);
    };
    return middleware;
  }
  var thunk = createThunkMiddleware();

  // bot-shims/backend-errors.js
  var error_map = {
    InsufficientBalance: "Insufficient balance.",
    CustomLimitsReached: "Custom limits reached.",
    OfferingsValidationError: "Offerings validation error.",
    InvalidCurrency: "Invalid currency.",
    ContractBuyValidationError: "Contract buy validation error.",
    NotDefaultCurrency: "Not the default currency.",
    PleaseAuthenticate: "Please authenticate.",
    FinancialAssessmentRequired: "Financial assessment required.",
    InvalidToken: "Invalid token.",
    DailyLossLimitExceeded: "Daily loss limit exceeded.",
    ClientUnwelcome: "Client unwelcome.",
    PriceMoved: "Price has moved."
  };
  var getLocalizedErrorMessage = (error2, details) => {
    if (typeof error2 === "string") return error_map[error2] || error2;
    if (error2 && error2.code) return error_map[error2.code] || error2.code;
    return "Unknown error";
  };

  // node_modules/immutable/dist/immutable.es.js
  var IS_INDEXED_SYMBOL = "@@__IMMUTABLE_INDEXED__@@";
  function isIndexed(maybeIndexed) {
    return Boolean(maybeIndexed && // @ts-expect-error: maybeIndexed is typed as `{}`, need to change in 6.0 to `maybeIndexed && typeof maybeIndexed === 'object' && IS_INDEXED_SYMBOL in maybeIndexed`
    maybeIndexed[IS_INDEXED_SYMBOL]);
  }
  var IS_KEYED_SYMBOL = "@@__IMMUTABLE_KEYED__@@";
  function isKeyed(maybeKeyed) {
    return Boolean(maybeKeyed && // @ts-expect-error: maybeKeyed is typed as `{}`, need to change in 6.0 to `maybeKeyed && typeof maybeKeyed === 'object' && IS_KEYED_SYMBOL in maybeKeyed`
    maybeKeyed[IS_KEYED_SYMBOL]);
  }
  function isAssociative(maybeAssociative) {
    return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
  }
  var IS_COLLECTION_SYMBOL = "@@__IMMUTABLE_ITERABLE__@@";
  function isCollection(maybeCollection) {
    return Boolean(maybeCollection && // @ts-expect-error: maybeCollection is typed as `{}`, need to change in 6.0 to `maybeCollection && typeof maybeCollection === 'object' && IS_COLLECTION_SYMBOL in maybeCollection`
    maybeCollection[IS_COLLECTION_SYMBOL]);
  }
  var Collection = function Collection2(value) {
    return isCollection(value) ? value : Seq(value);
  };
  var KeyedCollection = /* @__PURE__ */ (function(Collection3) {
    function KeyedCollection2(value) {
      return isKeyed(value) ? value : KeyedSeq(value);
    }
    if (Collection3) KeyedCollection2.__proto__ = Collection3;
    KeyedCollection2.prototype = Object.create(Collection3 && Collection3.prototype);
    KeyedCollection2.prototype.constructor = KeyedCollection2;
    return KeyedCollection2;
  })(Collection);
  var IndexedCollection = /* @__PURE__ */ (function(Collection3) {
    function IndexedCollection2(value) {
      return isIndexed(value) ? value : IndexedSeq(value);
    }
    if (Collection3) IndexedCollection2.__proto__ = Collection3;
    IndexedCollection2.prototype = Object.create(Collection3 && Collection3.prototype);
    IndexedCollection2.prototype.constructor = IndexedCollection2;
    return IndexedCollection2;
  })(Collection);
  var SetCollection = /* @__PURE__ */ (function(Collection3) {
    function SetCollection2(value) {
      return isCollection(value) && !isAssociative(value) ? value : SetSeq(value);
    }
    if (Collection3) SetCollection2.__proto__ = Collection3;
    SetCollection2.prototype = Object.create(Collection3 && Collection3.prototype);
    SetCollection2.prototype.constructor = SetCollection2;
    return SetCollection2;
  })(Collection);
  Collection.Keyed = KeyedCollection;
  Collection.Indexed = IndexedCollection;
  Collection.Set = SetCollection;
  var ITERATE_KEYS = 0;
  var ITERATE_VALUES = 1;
  var ITERATE_ENTRIES = 2;
  var REAL_ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = "@@iterator";
  var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;
  var Iterator = function Iterator2(next) {
    this.next = next;
  };
  Iterator.prototype.toString = function toString() {
    return "[Iterator]";
  };
  Iterator.KEYS = ITERATE_KEYS;
  Iterator.VALUES = ITERATE_VALUES;
  Iterator.ENTRIES = ITERATE_ENTRIES;
  Iterator.prototype.inspect = Iterator.prototype.toSource = function() {
    return this.toString();
  };
  Iterator.prototype[ITERATOR_SYMBOL] = function() {
    return this;
  };
  function iteratorValue(type, k, v, iteratorResult) {
    var value = type === ITERATE_KEYS ? k : type === ITERATE_VALUES ? v : [k, v];
    iteratorResult ? iteratorResult.value = value : iteratorResult = {
      // @ts-expect-error ensure value is not undefined
      value,
      done: false
    };
    return iteratorResult;
  }
  function iteratorDone() {
    return { value: void 0, done: true };
  }
  function hasIterator(maybeIterable) {
    if (Array.isArray(maybeIterable)) {
      return true;
    }
    return !!getIteratorFn(maybeIterable);
  }
  function isIterator(maybeIterator) {
    return !!(maybeIterator && // @ts-expect-error: maybeIterator is typed as `{}`
    typeof maybeIterator.next === "function");
  }
  function getIterator(iterable) {
    var iteratorFn = getIteratorFn(iterable);
    return iteratorFn && iteratorFn.call(iterable);
  }
  function getIteratorFn(iterable) {
    var iteratorFn = iterable && // @ts-expect-error: maybeIterator is typed as `{}`
    (REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL] || // @ts-expect-error: maybeIterator is typed as `{}`
    iterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === "function") {
      return iteratorFn;
    }
  }
  function isEntriesIterable(maybeIterable) {
    var iteratorFn = getIteratorFn(maybeIterable);
    return iteratorFn && iteratorFn === maybeIterable.entries;
  }
  function isKeysIterable(maybeIterable) {
    var iteratorFn = getIteratorFn(maybeIterable);
    return iteratorFn && iteratorFn === maybeIterable.keys;
  }
  var DELETE = "delete";
  var SHIFT = 5;
  var SIZE = 1 << SHIFT;
  var MASK = SIZE - 1;
  var NOT_SET = {};
  function MakeRef() {
    return { value: false };
  }
  function SetRef(ref) {
    if (ref) {
      ref.value = true;
    }
  }
  function OwnerID() {
  }
  function ensureSize(iter) {
    if (iter.size === void 0) {
      iter.size = iter.__iterate(returnTrue);
    }
    return iter.size;
  }
  function wrapIndex(iter, index) {
    if (typeof index !== "number") {
      var uint32Index = index >>> 0;
      if ("" + uint32Index !== index || uint32Index === 4294967295) {
        return NaN;
      }
      index = uint32Index;
    }
    return index < 0 ? ensureSize(iter) + index : index;
  }
  function returnTrue() {
    return true;
  }
  function wholeSlice(begin, end, size) {
    return (begin === 0 && !isNeg(begin) || size !== void 0 && begin <= -size) && (end === void 0 || size !== void 0 && end >= size);
  }
  function resolveBegin(begin, size) {
    return resolveIndex(begin, size, 0);
  }
  function resolveEnd(end, size) {
    return resolveIndex(end, size, size);
  }
  function resolveIndex(index, size, defaultIndex) {
    return index === void 0 ? defaultIndex : isNeg(index) ? size === Infinity ? size : Math.max(0, size + index) | 0 : size === void 0 || size === index ? index : Math.min(size, index) | 0;
  }
  function isNeg(value) {
    return value < 0 || value === 0 && 1 / value === -Infinity;
  }
  var IS_RECORD_SYMBOL = "@@__IMMUTABLE_RECORD__@@";
  function isRecord(maybeRecord) {
    return Boolean(maybeRecord && // @ts-expect-error: maybeRecord is typed as `{}`, need to change in 6.0 to `maybeRecord && typeof maybeRecord === 'object' && IS_RECORD_SYMBOL in maybeRecord`
    maybeRecord[IS_RECORD_SYMBOL]);
  }
  function isImmutable(maybeImmutable) {
    return isCollection(maybeImmutable) || isRecord(maybeImmutable);
  }
  var IS_ORDERED_SYMBOL = "@@__IMMUTABLE_ORDERED__@@";
  function isOrdered(maybeOrdered) {
    return Boolean(maybeOrdered && // @ts-expect-error: maybeOrdered is typed as `{}`, need to change in 6.0 to `maybeOrdered && typeof maybeOrdered === 'object' && IS_ORDERED_SYMBOL in maybeOrdered`
    maybeOrdered[IS_ORDERED_SYMBOL]);
  }
  var IS_SEQ_SYMBOL = "@@__IMMUTABLE_SEQ__@@";
  function isSeq(maybeSeq) {
    return Boolean(maybeSeq && // @ts-expect-error: maybeSeq is typed as `{}`, need to change in 6.0 to `maybeSeq && typeof maybeSeq === 'object' && MAYBE_SEQ_SYMBOL in maybeSeq`
    maybeSeq[IS_SEQ_SYMBOL]);
  }
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  function isArrayLike(value) {
    if (Array.isArray(value) || typeof value === "string") {
      return true;
    }
    return value && typeof value === "object" && // @ts-expect-error check that `'length' in value &&`
    Number.isInteger(value.length) && // @ts-expect-error check that `'length' in value &&`
    value.length >= 0 && // @ts-expect-error check that `'length' in value &&`
    (value.length === 0 ? (
      // Only {length: 0} is considered Array-like.
      Object.keys(value).length === 1
    ) : (
      // An object is only Array-like if it has a property where the last value
      // in the array-like may be found (which could be undefined).
      // @ts-expect-error check that `'length' in value &&`
      value.hasOwnProperty(value.length - 1)
    ));
  }
  var Seq = /* @__PURE__ */ (function(Collection3) {
    function Seq2(value) {
      return value === void 0 || value === null ? emptySequence() : isImmutable(value) ? value.toSeq() : seqFromValue(value);
    }
    if (Collection3) Seq2.__proto__ = Collection3;
    Seq2.prototype = Object.create(Collection3 && Collection3.prototype);
    Seq2.prototype.constructor = Seq2;
    Seq2.prototype.toSeq = function toSeq3() {
      return this;
    };
    Seq2.prototype.toString = function toString5() {
      return this.__toString("Seq {", "}");
    };
    Seq2.prototype.cacheResult = function cacheResult() {
      if (!this._cache && this.__iterateUncached) {
        this._cache = this.entrySeq().toArray();
        this.size = this._cache.length;
      }
      return this;
    };
    Seq2.prototype.__iterate = function __iterate2(fn, reverse3) {
      var cache = this._cache;
      if (cache) {
        var size = cache.length;
        var i = 0;
        while (i !== size) {
          var entry = cache[reverse3 ? size - ++i : i++];
          if (fn(entry[1], entry[0], this) === false) {
            break;
          }
        }
        return i;
      }
      return this.__iterateUncached(fn, reverse3);
    };
    Seq2.prototype.__iterator = function __iterator2(type, reverse3) {
      var cache = this._cache;
      if (cache) {
        var size = cache.length;
        var i = 0;
        return new Iterator(function() {
          if (i === size) {
            return iteratorDone();
          }
          var entry = cache[reverse3 ? size - ++i : i++];
          return iteratorValue(type, entry[0], entry[1]);
        });
      }
      return this.__iteratorUncached(type, reverse3);
    };
    return Seq2;
  })(Collection);
  var KeyedSeq = /* @__PURE__ */ (function(Seq2) {
    function KeyedSeq2(value) {
      return value === void 0 || value === null ? emptySequence().toKeyedSeq() : isCollection(value) ? isKeyed(value) ? value.toSeq() : value.fromEntrySeq() : isRecord(value) ? value.toSeq() : keyedSeqFromValue(value);
    }
    if (Seq2) KeyedSeq2.__proto__ = Seq2;
    KeyedSeq2.prototype = Object.create(Seq2 && Seq2.prototype);
    KeyedSeq2.prototype.constructor = KeyedSeq2;
    KeyedSeq2.prototype.toKeyedSeq = function toKeyedSeq3() {
      return this;
    };
    return KeyedSeq2;
  })(Seq);
  var IndexedSeq = /* @__PURE__ */ (function(Seq2) {
    function IndexedSeq2(value) {
      return value === void 0 || value === null ? emptySequence() : isCollection(value) ? isKeyed(value) ? value.entrySeq() : value.toIndexedSeq() : isRecord(value) ? value.toSeq().entrySeq() : indexedSeqFromValue(value);
    }
    if (Seq2) IndexedSeq2.__proto__ = Seq2;
    IndexedSeq2.prototype = Object.create(Seq2 && Seq2.prototype);
    IndexedSeq2.prototype.constructor = IndexedSeq2;
    IndexedSeq2.of = function of() {
      return IndexedSeq2(arguments);
    };
    IndexedSeq2.prototype.toIndexedSeq = function toIndexedSeq2() {
      return this;
    };
    IndexedSeq2.prototype.toString = function toString5() {
      return this.__toString("Seq [", "]");
    };
    return IndexedSeq2;
  })(Seq);
  var SetSeq = /* @__PURE__ */ (function(Seq2) {
    function SetSeq2(value) {
      return (isCollection(value) && !isAssociative(value) ? value : IndexedSeq(value)).toSetSeq();
    }
    if (Seq2) SetSeq2.__proto__ = Seq2;
    SetSeq2.prototype = Object.create(Seq2 && Seq2.prototype);
    SetSeq2.prototype.constructor = SetSeq2;
    SetSeq2.of = function of() {
      return SetSeq2(arguments);
    };
    SetSeq2.prototype.toSetSeq = function toSetSeq2() {
      return this;
    };
    return SetSeq2;
  })(Seq);
  Seq.isSeq = isSeq;
  Seq.Keyed = KeyedSeq;
  Seq.Set = SetSeq;
  Seq.Indexed = IndexedSeq;
  Seq.prototype[IS_SEQ_SYMBOL] = true;
  var ArraySeq = /* @__PURE__ */ (function(IndexedSeq2) {
    function ArraySeq2(array) {
      this._array = array;
      this.size = array.length;
    }
    if (IndexedSeq2) ArraySeq2.__proto__ = IndexedSeq2;
    ArraySeq2.prototype = Object.create(IndexedSeq2 && IndexedSeq2.prototype);
    ArraySeq2.prototype.constructor = ArraySeq2;
    ArraySeq2.prototype.get = function get11(index, notSetValue) {
      return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
    };
    ArraySeq2.prototype.__iterate = function __iterate2(fn, reverse3) {
      var array = this._array;
      var size = array.length;
      var i = 0;
      while (i !== size) {
        var ii = reverse3 ? size - ++i : i++;
        if (fn(array[ii], ii, this) === false) {
          break;
        }
      }
      return i;
    };
    ArraySeq2.prototype.__iterator = function __iterator2(type, reverse3) {
      var array = this._array;
      var size = array.length;
      var i = 0;
      return new Iterator(function() {
        if (i === size) {
          return iteratorDone();
        }
        var ii = reverse3 ? size - ++i : i++;
        return iteratorValue(type, ii, array[ii]);
      });
    };
    return ArraySeq2;
  })(IndexedSeq);
  var ObjectSeq = /* @__PURE__ */ (function(KeyedSeq2) {
    function ObjectSeq2(object) {
      var keys2 = Object.keys(object).concat(
        Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(object) : []
      );
      this._object = object;
      this._keys = keys2;
      this.size = keys2.length;
    }
    if (KeyedSeq2) ObjectSeq2.__proto__ = KeyedSeq2;
    ObjectSeq2.prototype = Object.create(KeyedSeq2 && KeyedSeq2.prototype);
    ObjectSeq2.prototype.constructor = ObjectSeq2;
    ObjectSeq2.prototype.get = function get11(key, notSetValue) {
      if (notSetValue !== void 0 && !this.has(key)) {
        return notSetValue;
      }
      return this._object[key];
    };
    ObjectSeq2.prototype.has = function has5(key) {
      return hasOwnProperty.call(this._object, key);
    };
    ObjectSeq2.prototype.__iterate = function __iterate2(fn, reverse3) {
      var object = this._object;
      var keys2 = this._keys;
      var size = keys2.length;
      var i = 0;
      while (i !== size) {
        var key = keys2[reverse3 ? size - ++i : i++];
        if (fn(object[key], key, this) === false) {
          break;
        }
      }
      return i;
    };
    ObjectSeq2.prototype.__iterator = function __iterator2(type, reverse3) {
      var object = this._object;
      var keys2 = this._keys;
      var size = keys2.length;
      var i = 0;
      return new Iterator(function() {
        if (i === size) {
          return iteratorDone();
        }
        var key = keys2[reverse3 ? size - ++i : i++];
        return iteratorValue(type, key, object[key]);
      });
    };
    return ObjectSeq2;
  })(KeyedSeq);
  ObjectSeq.prototype[IS_ORDERED_SYMBOL] = true;
  var CollectionSeq = /* @__PURE__ */ (function(IndexedSeq2) {
    function CollectionSeq2(collection) {
      this._collection = collection;
      this.size = collection.length || collection.size;
    }
    if (IndexedSeq2) CollectionSeq2.__proto__ = IndexedSeq2;
    CollectionSeq2.prototype = Object.create(IndexedSeq2 && IndexedSeq2.prototype);
    CollectionSeq2.prototype.constructor = CollectionSeq2;
    CollectionSeq2.prototype.__iterateUncached = function __iterateUncached(fn, reverse3) {
      if (reverse3) {
        return this.cacheResult().__iterate(fn, reverse3);
      }
      var collection = this._collection;
      var iterator = getIterator(collection);
      var iterations = 0;
      if (isIterator(iterator)) {
        var step;
        while (!(step = iterator.next()).done) {
          if (fn(step.value, iterations++, this) === false) {
            break;
          }
        }
      }
      return iterations;
    };
    CollectionSeq2.prototype.__iteratorUncached = function __iteratorUncached(type, reverse3) {
      if (reverse3) {
        return this.cacheResult().__iterator(type, reverse3);
      }
      var collection = this._collection;
      var iterator = getIterator(collection);
      if (!isIterator(iterator)) {
        return new Iterator(iteratorDone);
      }
      var iterations = 0;
      return new Iterator(function() {
        var step = iterator.next();
        return step.done ? step : iteratorValue(type, iterations++, step.value);
      });
    };
    return CollectionSeq2;
  })(IndexedSeq);
  var EMPTY_SEQ;
  function emptySequence() {
    return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
  }
  function keyedSeqFromValue(value) {
    var seq = maybeIndexedSeqFromValue(value);
    if (seq) {
      return seq.fromEntrySeq();
    }
    if (typeof value === "object") {
      return new ObjectSeq(value);
    }
    throw new TypeError(
      "Expected Array or collection object of [k, v] entries, or keyed object: " + value
    );
  }
  function indexedSeqFromValue(value) {
    var seq = maybeIndexedSeqFromValue(value);
    if (seq) {
      return seq;
    }
    throw new TypeError(
      "Expected Array or collection object of values: " + value
    );
  }
  function seqFromValue(value) {
    var seq = maybeIndexedSeqFromValue(value);
    if (seq) {
      return isEntriesIterable(value) ? seq.fromEntrySeq() : isKeysIterable(value) ? seq.toSetSeq() : seq;
    }
    if (typeof value === "object") {
      return new ObjectSeq(value);
    }
    throw new TypeError(
      "Expected Array or collection object of values, or keyed object: " + value
    );
  }
  function maybeIndexedSeqFromValue(value) {
    return isArrayLike(value) ? new ArraySeq(value) : hasIterator(value) ? new CollectionSeq(value) : void 0;
  }
  function asImmutable() {
    return this.__ensureOwner();
  }
  function asMutable() {
    return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
  }
  var imul = typeof Math.imul === "function" && Math.imul(4294967295, 2) === -2 ? Math.imul : function imul2(a, b) {
    a |= 0;
    b |= 0;
    var c = a & 65535;
    var d = b & 65535;
    return c * d + ((a >>> 16) * d + c * (b >>> 16) << 16 >>> 0) | 0;
  };
  function smi(i32) {
    return i32 >>> 1 & 1073741824 | i32 & 3221225471;
  }
  var defaultValueOf = Object.prototype.valueOf;
  function hash(o) {
    if (o == null) {
      return hashNullish(o);
    }
    if (typeof o.hashCode === "function") {
      return smi(o.hashCode(o));
    }
    var v = valueOf(o);
    if (v == null) {
      return hashNullish(v);
    }
    switch (typeof v) {
      case "boolean":
        return v ? 1108378657 : 1108378656;
      case "number":
        return hashNumber(v);
      case "string":
        return v.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(v) : hashString(v);
      case "object":
      case "function":
        return hashJSObj(v);
      case "symbol":
        return hashSymbol(v);
      default:
        if (typeof v.toString === "function") {
          return hashString(v.toString());
        }
        throw new Error("Value type " + typeof v + " cannot be hashed.");
    }
  }
  function hashNullish(nullish) {
    return nullish === null ? 1108378658 : (
      /* undefined */
      1108378659
    );
  }
  function hashNumber(n) {
    if (n !== n || n === Infinity) {
      return 0;
    }
    var hash2 = n | 0;
    if (hash2 !== n) {
      hash2 ^= n * 4294967295;
    }
    while (n > 4294967295) {
      n /= 4294967295;
      hash2 ^= n;
    }
    return smi(hash2);
  }
  function cachedHashString(string) {
    var hashed = stringHashCache[string];
    if (hashed === void 0) {
      hashed = hashString(string);
      if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
        STRING_HASH_CACHE_SIZE = 0;
        stringHashCache = {};
      }
      STRING_HASH_CACHE_SIZE++;
      stringHashCache[string] = hashed;
    }
    return hashed;
  }
  function hashString(string) {
    var hashed = 0;
    for (var ii = 0; ii < string.length; ii++) {
      hashed = 31 * hashed + string.charCodeAt(ii) | 0;
    }
    return smi(hashed);
  }
  var COLLISION_HASH_BASE = (Math.random() * 1048576 | 1) % 1048576 || 40503;
  function hashCollisionKey(key) {
    if (typeof key !== "string") {
      return hash(key);
    }
    var hashed = 0;
    for (var ii = 0; ii < key.length; ii++) {
      hashed = COLLISION_HASH_BASE * hashed + key.charCodeAt(ii) | 0;
    }
    return hashed;
  }
  function hashSymbol(sym) {
    var hashed = symbolMap[sym];
    if (hashed !== void 0) {
      return hashed;
    }
    hashed = nextHash();
    symbolMap[sym] = hashed;
    return hashed;
  }
  function hashJSObj(obj) {
    var hashed;
    if (usingWeakMap) {
      hashed = weakMap.get(obj);
      if (hashed !== void 0) {
        return hashed;
      }
    }
    hashed = obj[UID_HASH_KEY];
    if (hashed !== void 0) {
      return hashed;
    }
    if (!canDefineProperty) {
      hashed = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
      if (hashed !== void 0) {
        return hashed;
      }
      hashed = getIENodeHash(obj);
      if (hashed !== void 0) {
        return hashed;
      }
    }
    hashed = nextHash();
    if (usingWeakMap) {
      weakMap.set(obj, hashed);
    } else if (isExtensible !== void 0 && isExtensible(obj) === false) {
      throw new Error("Non-extensible objects are not allowed as keys.");
    } else if (canDefineProperty) {
      Object.defineProperty(obj, UID_HASH_KEY, {
        enumerable: false,
        configurable: false,
        writable: false,
        value: hashed
      });
    } else if (obj.propertyIsEnumerable !== void 0 && obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
      obj.propertyIsEnumerable = function() {
        return this.constructor.prototype.propertyIsEnumerable.apply(
          this,
          // eslint-disable-next-line prefer-rest-params
          arguments
        );
      };
      obj.propertyIsEnumerable[UID_HASH_KEY] = hashed;
    } else if (obj.nodeType !== void 0) {
      obj[UID_HASH_KEY] = hashed;
    } else {
      throw new Error("Unable to set a non-enumerable property on object.");
    }
    return hashed;
  }
  var isExtensible = Object.isExtensible;
  var canDefineProperty = (function() {
    try {
      Object.defineProperty({}, "@", {});
      return true;
    } catch (e) {
      return false;
    }
  })();
  function getIENodeHash(node) {
    if (node && node.nodeType > 0) {
      switch (node.nodeType) {
        case 1:
          return node.uniqueID;
        case 9:
          return node.documentElement && node.documentElement.uniqueID;
      }
    }
  }
  function valueOf(obj) {
    return obj.valueOf !== defaultValueOf && typeof obj.valueOf === "function" ? (
      // @ts-expect-error weird the "obj" parameter as `valueOf` should not have a parameter
      obj.valueOf(obj)
    ) : obj;
  }
  function nextHash() {
    var nextHash2 = ++_objHashUID;
    if (_objHashUID & 1073741824) {
      _objHashUID = 0;
    }
    return nextHash2;
  }
  var usingWeakMap = typeof WeakMap === "function";
  var weakMap;
  if (usingWeakMap) {
    weakMap = /* @__PURE__ */ new WeakMap();
  }
  var symbolMap = /* @__PURE__ */ Object.create(null);
  var _objHashUID = 0;
  var UID_HASH_KEY = "__immutablehash__";
  if (typeof Symbol === "function") {
    UID_HASH_KEY = Symbol(UID_HASH_KEY);
  }
  var STRING_HASH_CACHE_MIN_STRLEN = 16;
  var STRING_HASH_CACHE_MAX_SIZE = 255;
  var STRING_HASH_CACHE_SIZE = 0;
  var stringHashCache = {};
  var ToKeyedSequence = /* @__PURE__ */ (function(KeyedSeq2) {
    function ToKeyedSequence2(indexed, useKeys) {
      this._iter = indexed;
      this._useKeys = useKeys;
      this.size = indexed.size;
    }
    if (KeyedSeq2) ToKeyedSequence2.__proto__ = KeyedSeq2;
    ToKeyedSequence2.prototype = Object.create(KeyedSeq2 && KeyedSeq2.prototype);
    ToKeyedSequence2.prototype.constructor = ToKeyedSequence2;
    ToKeyedSequence2.prototype.get = function get11(key, notSetValue) {
      return this._iter.get(key, notSetValue);
    };
    ToKeyedSequence2.prototype.has = function has5(key) {
      return this._iter.has(key);
    };
    ToKeyedSequence2.prototype.valueSeq = function valueSeq2() {
      return this._iter.valueSeq();
    };
    ToKeyedSequence2.prototype.reverse = function reverse3() {
      var this$1$1 = this;
      var reversedSequence = reverseFactory(this, true);
      if (!this._useKeys) {
        reversedSequence.valueSeq = function() {
          return this$1$1._iter.toSeq().reverse();
        };
      }
      return reversedSequence;
    };
    ToKeyedSequence2.prototype.map = function map2(mapper, context) {
      var this$1$1 = this;
      var mappedSequence = mapFactory(this, mapper, context);
      if (!this._useKeys) {
        mappedSequence.valueSeq = function() {
          return this$1$1._iter.toSeq().map(mapper, context);
        };
      }
      return mappedSequence;
    };
    ToKeyedSequence2.prototype.__iterate = function __iterate2(fn, reverse3) {
      var this$1$1 = this;
      return this._iter.__iterate(function(v, k) {
        return fn(v, k, this$1$1);
      }, reverse3);
    };
    ToKeyedSequence2.prototype.__iterator = function __iterator2(type, reverse3) {
      return this._iter.__iterator(type, reverse3);
    };
    return ToKeyedSequence2;
  })(KeyedSeq);
  ToKeyedSequence.prototype[IS_ORDERED_SYMBOL] = true;
  var ToIndexedSequence = /* @__PURE__ */ (function(IndexedSeq2) {
    function ToIndexedSequence2(iter) {
      this._iter = iter;
      this.size = iter.size;
    }
    if (IndexedSeq2) ToIndexedSequence2.__proto__ = IndexedSeq2;
    ToIndexedSequence2.prototype = Object.create(IndexedSeq2 && IndexedSeq2.prototype);
    ToIndexedSequence2.prototype.constructor = ToIndexedSequence2;
    ToIndexedSequence2.prototype.includes = function includes3(value) {
      return this._iter.includes(value);
    };
    ToIndexedSequence2.prototype.__iterate = function __iterate2(fn, reverse3) {
      var this$1$1 = this;
      var i = 0;
      reverse3 && ensureSize(this);
      return this._iter.__iterate(
        function(v) {
          return fn(v, reverse3 ? this$1$1.size - ++i : i++, this$1$1);
        },
        reverse3
      );
    };
    ToIndexedSequence2.prototype.__iterator = function __iterator2(type, reverse3) {
      var this$1$1 = this;
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse3);
      var i = 0;
      reverse3 && ensureSize(this);
      return new Iterator(function() {
        var step = iterator.next();
        return step.done ? step : iteratorValue(
          type,
          reverse3 ? this$1$1.size - ++i : i++,
          step.value,
          step
        );
      });
    };
    return ToIndexedSequence2;
  })(IndexedSeq);
  var ToSetSequence = /* @__PURE__ */ (function(SetSeq2) {
    function ToSetSequence2(iter) {
      this._iter = iter;
      this.size = iter.size;
    }
    if (SetSeq2) ToSetSequence2.__proto__ = SetSeq2;
    ToSetSequence2.prototype = Object.create(SetSeq2 && SetSeq2.prototype);
    ToSetSequence2.prototype.constructor = ToSetSequence2;
    ToSetSequence2.prototype.has = function has5(key) {
      return this._iter.includes(key);
    };
    ToSetSequence2.prototype.__iterate = function __iterate2(fn, reverse3) {
      var this$1$1 = this;
      return this._iter.__iterate(function(v) {
        return fn(v, v, this$1$1);
      }, reverse3);
    };
    ToSetSequence2.prototype.__iterator = function __iterator2(type, reverse3) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse3);
      return new Iterator(function() {
        var step = iterator.next();
        return step.done ? step : iteratorValue(type, step.value, step.value, step);
      });
    };
    return ToSetSequence2;
  })(SetSeq);
  var FromEntriesSequence = /* @__PURE__ */ (function(KeyedSeq2) {
    function FromEntriesSequence2(entries3) {
      this._iter = entries3;
      this.size = entries3.size;
    }
    if (KeyedSeq2) FromEntriesSequence2.__proto__ = KeyedSeq2;
    FromEntriesSequence2.prototype = Object.create(KeyedSeq2 && KeyedSeq2.prototype);
    FromEntriesSequence2.prototype.constructor = FromEntriesSequence2;
    FromEntriesSequence2.prototype.entrySeq = function entrySeq2() {
      return this._iter.toSeq();
    };
    FromEntriesSequence2.prototype.__iterate = function __iterate2(fn, reverse3) {
      var this$1$1 = this;
      return this._iter.__iterate(function(entry) {
        if (entry) {
          validateEntry(entry);
          var indexedCollection = isCollection(entry);
          return fn(
            indexedCollection ? entry.get(1) : entry[1],
            indexedCollection ? entry.get(0) : entry[0],
            this$1$1
          );
        }
      }, reverse3);
    };
    FromEntriesSequence2.prototype.__iterator = function __iterator2(type, reverse3) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse3);
      return new Iterator(function() {
        while (true) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          var entry = step.value;
          if (entry) {
            validateEntry(entry);
            var indexedCollection = isCollection(entry);
            return iteratorValue(
              type,
              indexedCollection ? entry.get(0) : entry[0],
              indexedCollection ? entry.get(1) : entry[1],
              step
            );
          }
        }
      });
    };
    return FromEntriesSequence2;
  })(KeyedSeq);
  ToIndexedSequence.prototype.cacheResult = ToKeyedSequence.prototype.cacheResult = ToSetSequence.prototype.cacheResult = FromEntriesSequence.prototype.cacheResult = cacheResultThrough;
  function flipFactory(collection) {
    var flipSequence = makeSequence(collection);
    flipSequence._iter = collection;
    flipSequence.size = collection.size;
    flipSequence.flip = function() {
      return collection;
    };
    flipSequence.reverse = function() {
      var reversedSequence = collection.reverse.apply(this);
      reversedSequence.flip = function() {
        return collection.reverse();
      };
      return reversedSequence;
    };
    flipSequence.has = function(key) {
      return collection.includes(key);
    };
    flipSequence.includes = function(key) {
      return collection.has(key);
    };
    flipSequence.cacheResult = cacheResultThrough;
    flipSequence.__iterateUncached = function(fn, reverse3) {
      var this$1$1 = this;
      return collection.__iterate(function(v, k) {
        return fn(k, v, this$1$1) !== false;
      }, reverse3);
    };
    flipSequence.__iteratorUncached = function(type, reverse3) {
      if (type === ITERATE_ENTRIES) {
        var iterator = collection.__iterator(type, reverse3);
        return new Iterator(function() {
          var step = iterator.next();
          if (!step.done) {
            var k = step.value[0];
            step.value[0] = step.value[1];
            step.value[1] = k;
          }
          return step;
        });
      }
      return collection.__iterator(
        type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES,
        reverse3
      );
    };
    return flipSequence;
  }
  function mapFactory(collection, mapper, context) {
    var mappedSequence = makeSequence(collection);
    mappedSequence.size = collection.size;
    mappedSequence.has = function(key) {
      return collection.has(key);
    };
    mappedSequence.get = function(key, notSetValue) {
      var v = collection.get(key, NOT_SET);
      return v === NOT_SET ? notSetValue : mapper.call(context, v, key, collection);
    };
    mappedSequence.__iterateUncached = function(fn, reverse3) {
      var this$1$1 = this;
      return collection.__iterate(
        function(v, k, c) {
          return fn(mapper.call(context, v, k, c), k, this$1$1) !== false;
        },
        reverse3
      );
    };
    mappedSequence.__iteratorUncached = function(type, reverse3) {
      var iterator = collection.__iterator(ITERATE_ENTRIES, reverse3);
      return new Iterator(function() {
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        var key = entry[0];
        return iteratorValue(
          type,
          key,
          mapper.call(context, entry[1], key, collection),
          step
        );
      });
    };
    return mappedSequence;
  }
  function reverseFactory(collection, useKeys) {
    var reversedSequence = makeSequence(collection);
    reversedSequence._iter = collection;
    reversedSequence.size = collection.size;
    reversedSequence.reverse = function() {
      return collection;
    };
    if (collection.flip) {
      reversedSequence.flip = function() {
        var flipSequence = flipFactory(collection);
        flipSequence.reverse = function() {
          return collection.flip();
        };
        return flipSequence;
      };
    }
    reversedSequence.get = function(key, notSetValue) {
      return collection.get(useKeys ? key : -1 - key, notSetValue);
    };
    reversedSequence.has = function(key) {
      return collection.has(useKeys ? key : -1 - key);
    };
    reversedSequence.includes = function(value) {
      return collection.includes(value);
    };
    reversedSequence.cacheResult = cacheResultThrough;
    reversedSequence.__iterate = function(fn, reverse3) {
      var this$1$1 = this;
      var i = 0;
      reverse3 && ensureSize(collection);
      return collection.__iterate(
        function(v, k) {
          return fn(v, useKeys ? k : reverse3 ? this$1$1.size - ++i : i++, this$1$1);
        },
        !reverse3
      );
    };
    reversedSequence.__iterator = function(type, reverse3) {
      var i = 0;
      reverse3 && ensureSize(collection);
      var iterator = collection.__iterator(ITERATE_ENTRIES, !reverse3);
      return new Iterator(function() {
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        return iteratorValue(
          type,
          // `__iterator` is an arrow function, so `this` is not the reversed
          // sequence here — read `reversedSequence.size` explicitly.
          useKeys ? entry[0] : reverse3 ? reversedSequence.size - ++i : i++,
          entry[1],
          step
        );
      });
    };
    return reversedSequence;
  }
  function filterFactory(collection, predicate, context, useKeys) {
    var filterSequence = makeSequence(collection);
    if (useKeys) {
      filterSequence.has = function(key) {
        var v = collection.get(key, NOT_SET);
        return v !== NOT_SET && !!predicate.call(context, v, key, collection);
      };
      filterSequence.get = function(key, notSetValue) {
        var v = collection.get(key, NOT_SET);
        return v !== NOT_SET && predicate.call(context, v, key, collection) ? v : notSetValue;
      };
    }
    filterSequence.__iterateUncached = function(fn, reverse3) {
      var this$1$1 = this;
      var iterations = 0;
      collection.__iterate(function(v, k, c) {
        if (predicate.call(context, v, k, c)) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$1$1);
        }
      }, reverse3);
      return iterations;
    };
    filterSequence.__iteratorUncached = function(type, reverse3) {
      var iterator = collection.__iterator(ITERATE_ENTRIES, reverse3);
      var iterations = 0;
      return new Iterator(function() {
        while (true) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          var entry = step.value;
          var key = entry[0];
          var value = entry[1];
          if (predicate.call(context, value, key, collection)) {
            return iteratorValue(type, useKeys ? key : iterations++, value, step);
          }
        }
      });
    };
    return filterSequence;
  }
  function countByFactory(collection, grouper, context) {
    var groups = Map2().asMutable();
    collection.__iterate(function(v, k) {
      groups.update(grouper.call(context, v, k, collection), 0, function(a) {
        return a + 1;
      });
    });
    return groups.asImmutable();
  }
  function groupByFactory(collection, grouper, context) {
    var isKeyedIter = isKeyed(collection);
    var groups = (isOrdered(collection) ? OrderedMap() : Map2()).asMutable();
    collection.__iterate(function(v, k) {
      groups.update(
        grouper.call(context, v, k, collection),
        function(a) {
          return a = a || [], a.push(isKeyedIter ? [k, v] : v), a;
        }
      );
    });
    var coerce = collectionClass(collection);
    return groups.map(function(arr) {
      return reify(collection, coerce(arr));
    }).asImmutable();
  }
  function partitionFactory(collection, predicate, context) {
    var isKeyedIter = isKeyed(collection);
    var groups = [[], []];
    collection.__iterate(function(v, k) {
      groups[predicate.call(context, v, k, collection) ? 1 : 0].push(
        isKeyedIter ? [k, v] : v
      );
    });
    var coerce = collectionClass(collection);
    return groups.map(function(arr) {
      return reify(collection, coerce(arr));
    });
  }
  function sliceFactory(collection, begin, end, useKeys) {
    var originalSize = collection.size;
    if (wholeSlice(begin, end, originalSize)) {
      return collection;
    }
    if (typeof originalSize === "undefined" && (begin < 0 || end < 0)) {
      return sliceFactory(collection.toSeq().cacheResult(), begin, end, useKeys);
    }
    var resolvedBegin = resolveBegin(begin, originalSize);
    var resolvedEnd = resolveEnd(end, originalSize);
    var resolvedSize = resolvedEnd - resolvedBegin;
    var sliceSize;
    if (resolvedSize === resolvedSize) {
      sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
    }
    var sliceSeq = makeSequence(collection);
    sliceSeq.size = sliceSize === 0 ? sliceSize : collection.size && sliceSize || void 0;
    if (!useKeys && isSeq(collection) && sliceSize >= 0) {
      sliceSeq.get = function(index, notSetValue) {
        index = wrapIndex(this, index);
        return index >= 0 && index < sliceSize ? collection.get(index + resolvedBegin, notSetValue) : notSetValue;
      };
    }
    sliceSeq.__iterateUncached = function(fn, reverse3) {
      var this$1$1 = this;
      if (sliceSize === 0) {
        return 0;
      }
      if (reverse3) {
        return this.cacheResult().__iterate(fn, reverse3);
      }
      var skipped = 0;
      var isSkipping = true;
      var iterations = 0;
      collection.__iterate(function(v, k) {
        if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$1$1) !== false && iterations !== sliceSize;
        }
      });
      return iterations;
    };
    sliceSeq.__iteratorUncached = function(type, reverse3) {
      if (sliceSize !== 0 && reverse3) {
        return this.cacheResult().__iterator(type, reverse3);
      }
      if (sliceSize === 0) {
        return new Iterator(iteratorDone);
      }
      var iterator = collection.__iterator(type, reverse3);
      var skipped = 0;
      var iterations = 0;
      return new Iterator(function() {
        while (skipped++ < resolvedBegin) {
          iterator.next();
        }
        if (++iterations > sliceSize) {
          return iteratorDone();
        }
        var step = iterator.next();
        if (useKeys || type === ITERATE_VALUES || step.done) {
          return step;
        }
        if (type === ITERATE_KEYS) {
          return iteratorValue(type, iterations - 1, void 0, step);
        }
        return iteratorValue(type, iterations - 1, step.value[1], step);
      });
    };
    return sliceSeq;
  }
  function takeWhileFactory(collection, predicate, context) {
    var takeSequence = makeSequence(collection);
    takeSequence.__iterateUncached = function(fn, reverse3) {
      var this$1$1 = this;
      if (reverse3) {
        return this.cacheResult().__iterate(fn, reverse3);
      }
      var iterations = 0;
      collection.__iterate(
        function(v, k, c) {
          return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$1$1);
        }
      );
      return iterations;
    };
    takeSequence.__iteratorUncached = function(type, reverse3) {
      var this$1$1 = this;
      if (reverse3) {
        return this.cacheResult().__iterator(type, reverse3);
      }
      var iterator = collection.__iterator(ITERATE_ENTRIES, reverse3);
      var iterating = true;
      return new Iterator(function() {
        if (!iterating) {
          return iteratorDone();
        }
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        var k = entry[0];
        var v = entry[1];
        if (!predicate.call(context, v, k, this$1$1)) {
          iterating = false;
          return iteratorDone();
        }
        return type === ITERATE_ENTRIES ? step : iteratorValue(type, k, v, step);
      });
    };
    return takeSequence;
  }
  function skipWhileFactory(collection, predicate, context, useKeys) {
    var skipSequence = makeSequence(collection);
    skipSequence.__iterateUncached = function(fn, reverse3) {
      var this$1$1 = this;
      if (reverse3) {
        return this.cacheResult().__iterate(fn, reverse3);
      }
      var isSkipping = true;
      var iterations = 0;
      collection.__iterate(function(v, k, c) {
        if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$1$1);
        }
      });
      return iterations;
    };
    skipSequence.__iteratorUncached = function(type, reverse3) {
      var this$1$1 = this;
      if (reverse3) {
        return this.cacheResult().__iterator(type, reverse3);
      }
      var iterator = collection.__iterator(ITERATE_ENTRIES, reverse3);
      var skipping = true;
      var iterations = 0;
      return new Iterator(function() {
        var step;
        var k;
        var v;
        do {
          step = iterator.next();
          if (step.done) {
            if (useKeys || type === ITERATE_VALUES) {
              return step;
            }
            if (type === ITERATE_KEYS) {
              return iteratorValue(type, iterations++, void 0, step);
            }
            return iteratorValue(type, iterations++, step.value[1], step);
          }
          var entry = step.value;
          k = entry[0];
          v = entry[1];
          skipping && (skipping = predicate.call(context, v, k, this$1$1));
        } while (skipping);
        return type === ITERATE_ENTRIES ? step : iteratorValue(type, k, v, step);
      });
    };
    return skipSequence;
  }
  var ConcatSeq = /* @__PURE__ */ (function(Seq2) {
    function ConcatSeq2(iterables) {
      this._wrappedIterables = iterables.flatMap(function(iterable) {
        if (iterable._wrappedIterables) {
          return iterable._wrappedIterables;
        }
        return [iterable];
      });
      this.size = this._wrappedIterables.reduce(function(sum2, iterable) {
        if (sum2 !== void 0) {
          var size = iterable.size;
          if (size !== void 0) {
            return sum2 + size;
          }
        }
      }, 0);
      this[IS_KEYED_SYMBOL] = this._wrappedIterables[0][IS_KEYED_SYMBOL];
      this[IS_INDEXED_SYMBOL] = this._wrappedIterables[0][IS_INDEXED_SYMBOL];
      this[IS_ORDERED_SYMBOL] = this._wrappedIterables[0][IS_ORDERED_SYMBOL];
    }
    if (Seq2) ConcatSeq2.__proto__ = Seq2;
    ConcatSeq2.prototype = Object.create(Seq2 && Seq2.prototype);
    ConcatSeq2.prototype.constructor = ConcatSeq2;
    ConcatSeq2.prototype.__iterateUncached = function __iterateUncached(fn, reverse3) {
      if (this._wrappedIterables.length === 0) {
        return;
      }
      if (reverse3) {
        return this.cacheResult().__iterate(fn, reverse3);
      }
      var iterableIndex = 0;
      var useKeys = isKeyed(this);
      var iteratorType = useKeys ? ITERATE_ENTRIES : ITERATE_VALUES;
      var currentIterator = this._wrappedIterables[iterableIndex].__iterator(
        iteratorType,
        reverse3
      );
      var keepGoing = true;
      var index = 0;
      while (keepGoing) {
        var next = currentIterator.next();
        while (next.done) {
          iterableIndex++;
          if (iterableIndex === this._wrappedIterables.length) {
            return index;
          }
          currentIterator = this._wrappedIterables[iterableIndex].__iterator(
            iteratorType,
            reverse3
          );
          next = currentIterator.next();
        }
        var fnResult = useKeys ? fn(next.value[1], next.value[0], this) : fn(next.value, index, this);
        keepGoing = fnResult !== false;
        index++;
      }
      return index;
    };
    ConcatSeq2.prototype.__iteratorUncached = function __iteratorUncached(type, reverse3) {
      var this$1$1 = this;
      if (this._wrappedIterables.length === 0) {
        return new Iterator(iteratorDone);
      }
      if (reverse3) {
        return this.cacheResult().__iterator(type, reverse3);
      }
      var iterableIndex = 0;
      var currentIterator = this._wrappedIterables[iterableIndex].__iterator(
        type,
        reverse3
      );
      return new Iterator(function() {
        var next = currentIterator.next();
        while (next.done) {
          iterableIndex++;
          if (iterableIndex === this$1$1._wrappedIterables.length) {
            return next;
          }
          currentIterator = this$1$1._wrappedIterables[iterableIndex].__iterator(
            type,
            reverse3
          );
          next = currentIterator.next();
        }
        return next;
      });
    };
    return ConcatSeq2;
  })(Seq);
  function concatFactory(collection, values2) {
    var isKeyedCollection = isKeyed(collection);
    var iters = [collection].concat(values2).map(function(v) {
      if (!isCollection(v)) {
        v = isKeyedCollection ? keyedSeqFromValue(v) : indexedSeqFromValue(Array.isArray(v) ? v : [v]);
      } else if (isKeyedCollection) {
        v = KeyedCollection(v);
      }
      return v;
    }).filter(function(v) {
      return v.size !== 0;
    });
    if (iters.length === 0) {
      return collection;
    }
    if (iters.length === 1) {
      var singleton = iters[0];
      if (singleton === collection || isKeyedCollection && isKeyed(singleton) || isIndexed(collection) && isIndexed(singleton)) {
        return singleton;
      }
    }
    return new ConcatSeq(iters);
  }
  function flattenFactory(collection, depth, useKeys) {
    var flatSequence = makeSequence(collection);
    flatSequence.__iterateUncached = function(fn, reverse3) {
      if (reverse3) {
        return this.cacheResult().__iterate(fn, reverse3);
      }
      var iterations = 0;
      var stopped = false;
      function flatDeep(iter, currentDepth) {
        iter.__iterate(function(v, k) {
          if ((!depth || currentDepth < depth) && isCollection(v)) {
            flatDeep(v, currentDepth + 1);
          } else {
            iterations++;
            if (fn(v, useKeys ? k : iterations - 1, flatSequence) === false) {
              stopped = true;
            }
          }
          return !stopped;
        }, reverse3);
      }
      flatDeep(collection, 0);
      return iterations;
    };
    flatSequence.__iteratorUncached = function(type, reverse3) {
      if (reverse3) {
        return this.cacheResult().__iterator(type, reverse3);
      }
      var iterator = collection.__iterator(type, reverse3);
      var stack = [];
      var iterations = 0;
      return new Iterator(function() {
        while (iterator) {
          var step = iterator.next();
          if (step.done !== false) {
            iterator = stack.pop();
            continue;
          }
          var v = step.value;
          if (type === ITERATE_ENTRIES) {
            v = v[1];
          }
          if ((!depth || stack.length < depth) && isCollection(v)) {
            stack.push(iterator);
            iterator = v.__iterator(type, reverse3);
          } else {
            return useKeys ? step : iteratorValue(type, iterations++, v, step);
          }
        }
        return iteratorDone();
      });
    };
    return flatSequence;
  }
  function flatMapFactory(collection, mapper, context) {
    var coerce = collectionClass(collection);
    return collection.toSeq().map(function(v, k) {
      return coerce(mapper.call(context, v, k, collection));
    }).flatten(true);
  }
  function interposeFactory(collection, separator) {
    var interposedSequence = makeSequence(collection);
    interposedSequence.size = collection.size && collection.size * 2 - 1;
    interposedSequence.__iterateUncached = function(fn, reverse3) {
      var this$1$1 = this;
      var iterations = 0;
      collection.__iterate(
        function(v) {
          return (!iterations || fn(separator, iterations++, this$1$1) !== false) && fn(v, iterations++, this$1$1) !== false;
        },
        reverse3
      );
      return iterations;
    };
    interposedSequence.__iteratorUncached = function(type, reverse3) {
      var iterator = collection.__iterator(ITERATE_VALUES, reverse3);
      var iterations = 0;
      var step;
      return new Iterator(function() {
        if (!step || iterations % 2) {
          step = iterator.next();
          if (step.done) {
            return step;
          }
        }
        return iterations % 2 ? iteratorValue(type, iterations++, separator) : iteratorValue(type, iterations++, step.value, step);
      });
    };
    return interposedSequence;
  }
  function sortFactory(collection, comparator, mapper) {
    if (!comparator) {
      comparator = defaultComparator;
    }
    var isKeyedCollection = isKeyed(collection);
    var index = 0;
    var entries3 = collection.toSeq().map(function(v, k) {
      return [k, v, index++, mapper ? mapper(v, k, collection) : v];
    }).valueSeq().toArray();
    entries3.sort(function(a, b) {
      return comparator(a[3], b[3]) || a[2] - b[2];
    }).forEach(
      isKeyedCollection ? function(v, i) {
        entries3[i].length = 2;
      } : function(v, i) {
        entries3[i] = v[1];
      }
    );
    return isKeyedCollection ? KeyedSeq(entries3) : isIndexed(collection) ? IndexedSeq(entries3) : SetSeq(entries3);
  }
  function maxFactory(collection, comparator, mapper) {
    if (!comparator) {
      comparator = defaultComparator;
    }
    if (mapper) {
      var entry = collection.toSeq().map(function(v, k) {
        return [v, mapper(v, k, collection)];
      }).reduce(function(a, b) {
        return maxCompare(comparator, a[1], b[1]) ? b : a;
      });
      return entry && entry[0];
    }
    return collection.reduce(function(a, b) {
      return maxCompare(comparator, a, b) ? b : a;
    });
  }
  function maxCompare(comparator, a, b) {
    var comp = comparator(b, a);
    return comp === 0 && b !== a && (b === void 0 || b === null || b !== b) || comp > 0;
  }
  function zipWithFactory(keyIter, zipper, iters, zipAll2) {
    var zipSequence = makeSequence(keyIter);
    var sizes = new ArraySeq(iters).map(function(i) {
      return i.size;
    });
    zipSequence.size = zipAll2 ? sizes.max() : sizes.min();
    zipSequence.__iterate = function(fn, reverse3) {
      var iterator = this.__iterator(ITERATE_VALUES, reverse3);
      var step;
      var iterations = 0;
      while (!(step = iterator.next()).done) {
        if (fn(step.value, iterations++, this) === false) {
          break;
        }
      }
      return iterations;
    };
    zipSequence.__iteratorUncached = function(type, reverse3) {
      var iterators = iters.map(
        function(i) {
          return i = Collection(i), getIterator(reverse3 ? i.reverse() : i);
        }
      );
      var iterations = 0;
      var isDone = false;
      return new Iterator(function() {
        var steps;
        if (!isDone) {
          steps = iterators.map(function(i) {
            return i.next();
          });
          isDone = zipAll2 ? steps.every(function(s) {
            return s.done;
          }) : steps.some(function(s) {
            return s.done;
          });
        }
        if (isDone) {
          return iteratorDone();
        }
        return iteratorValue(
          type,
          iterations++,
          zipper.apply(
            null,
            steps.map(function(s) {
              return s.value;
            })
          )
        );
      });
    };
    return zipSequence;
  }
  function reify(iter, seq) {
    return iter === seq ? iter : isSeq(iter) ? seq : iter.constructor(seq);
  }
  function validateEntry(entry) {
    if (entry !== Object(entry)) {
      throw new TypeError("Expected [K, V] tuple: " + entry);
    }
  }
  function collectionClass(collection) {
    return isKeyed(collection) ? KeyedCollection : isIndexed(collection) ? IndexedCollection : SetCollection;
  }
  function makeSequence(collection) {
    return Object.create(
      (isKeyed(collection) ? KeyedSeq : isIndexed(collection) ? IndexedSeq : SetSeq).prototype
    );
  }
  function cacheResultThrough() {
    if (this._iter.cacheResult) {
      this._iter.cacheResult();
      this.size = this._iter.size;
      return this;
    }
    return Seq.prototype.cacheResult.call(this);
  }
  function defaultComparator(a, b) {
    if (a === void 0 && b === void 0) {
      return 0;
    }
    if (a === void 0) {
      return 1;
    }
    if (b === void 0) {
      return -1;
    }
    return a > b ? 1 : a < b ? -1 : 0;
  }
  function isValueObject(maybeValue) {
    return Boolean(maybeValue && // @ts-expect-error: maybeValue is typed as `{}`
    typeof maybeValue.equals === "function" && // @ts-expect-error: maybeValue is typed as `{}`
    typeof maybeValue.hashCode === "function");
  }
  function is(valueA, valueB) {
    if (valueA === valueB || valueA !== valueA && valueB !== valueB) {
      return true;
    }
    if (!valueA || !valueB) {
      return false;
    }
    if (typeof valueA.valueOf === "function" && typeof valueB.valueOf === "function") {
      valueA = valueA.valueOf();
      valueB = valueB.valueOf();
      if (valueA === valueB || valueA !== valueA && valueB !== valueB) {
        return true;
      }
      if (!valueA || !valueB) {
        return false;
      }
    }
    return !!(isValueObject(valueA) && isValueObject(valueB) && valueA.equals(valueB));
  }
  function update$1(collection, key, notSetValue, updater) {
    return updateIn(
      // @ts-expect-error Index signature for type string is missing in type V[]
      collection,
      [key],
      notSetValue,
      updater
    );
  }
  function merge$1() {
    var iters = [], len = arguments.length;
    while (len--) iters[len] = arguments[len];
    return mergeIntoKeyedWith(this, iters);
  }
  function mergeWith$1(merger) {
    var iters = [], len = arguments.length - 1;
    while (len-- > 0) iters[len] = arguments[len + 1];
    if (typeof merger !== "function") {
      throw new TypeError("Invalid merger function: " + merger);
    }
    return mergeIntoKeyedWith(this, iters, merger);
  }
  function mergeIntoKeyedWith(collection, collections, merger) {
    var iters = [];
    for (var ii = 0; ii < collections.length; ii++) {
      var collection$1 = KeyedCollection(collections[ii]);
      if (collection$1.size !== 0) {
        iters.push(collection$1);
      }
    }
    if (iters.length === 0) {
      return collection;
    }
    if (collection.toSeq().size === 0 && !collection.__ownerID && iters.length === 1) {
      return isRecord(collection) ? collection : collection.constructor(iters[0]);
    }
    return collection.withMutations(function(collection2) {
      var mergeIntoCollection = merger ? function(value, key) {
        update$1(
          collection2,
          key,
          NOT_SET,
          function(oldVal) {
            return oldVal === NOT_SET ? value : merger(oldVal, value, key);
          }
        );
      } : function(value, key) {
        collection2.set(key, value);
      };
      for (var ii2 = 0; ii2 < iters.length; ii2++) {
        iters[ii2].forEach(mergeIntoCollection);
      }
    });
  }
  var toString2 = Object.prototype.toString;
  function isPlainObject2(value) {
    if (!value || typeof value !== "object" || toString2.call(value) !== "[object Object]") {
      return false;
    }
    var proto = Object.getPrototypeOf(value);
    if (proto === null) {
      return true;
    }
    var parentProto = proto;
    var nextProto = Object.getPrototypeOf(proto);
    while (nextProto !== null) {
      parentProto = nextProto;
      nextProto = Object.getPrototypeOf(parentProto);
    }
    return parentProto === proto;
  }
  function isDataStructure(value) {
    return typeof value === "object" && (isImmutable(value) || Array.isArray(value) || isPlainObject2(value));
  }
  function isProtoKey(key) {
    return typeof key === "string" && (key === "__proto__" || key === "constructor");
  }
  function arrCopy(arr, offset) {
    offset = offset || 0;
    var len = Math.max(0, arr.length - offset);
    var newArr = new Array(len);
    for (var ii = 0; ii < len; ii++) {
      newArr[ii] = arr[ii + offset];
    }
    return newArr;
  }
  function shallowCopy(from) {
    if (Array.isArray(from)) {
      return arrCopy(from);
    }
    var to = {};
    for (var key in from) {
      if (isProtoKey(key)) {
        continue;
      }
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    return to;
  }
  function mergeDeepWithSources(collection, sources, merger) {
    return mergeWithSources(collection, sources, deepMergerWith(merger));
  }
  function mergeWithSources(collection, sources, merger) {
    if (!isDataStructure(collection)) {
      throw new TypeError(
        "Cannot merge into non-data-structure value: " + collection
      );
    }
    if (isImmutable(collection)) {
      return typeof merger === "function" && collection.mergeWith ? collection.mergeWith.apply(collection, [merger].concat(sources)) : collection.merge ? collection.merge.apply(collection, sources) : collection.concat.apply(collection, sources);
    }
    var isArray = Array.isArray(collection);
    var merged = collection;
    var Collection3 = isArray ? IndexedCollection : KeyedCollection;
    var mergeItem = isArray ? function(value) {
      if (merged === collection) {
        merged = shallowCopy(merged);
      }
      merged.push(value);
    } : function(value, key) {
      if (isProtoKey(key)) {
        return;
      }
      var hasVal = hasOwnProperty.call(merged, key);
      var nextVal = hasVal && merger ? merger(merged[key], value, key) : value;
      if (!hasVal || nextVal !== merged[key]) {
        if (merged === collection) {
          merged = shallowCopy(merged);
        }
        merged[key] = nextVal;
      }
    };
    for (var i = 0; i < sources.length; i++) {
      Collection3(sources[i]).forEach(mergeItem);
    }
    return merged;
  }
  function deepMergerWith(merger) {
    function deepMerger(oldValue, newValue, key) {
      return isDataStructure(oldValue) && isDataStructure(newValue) && areMergeable(oldValue, newValue) ? mergeWithSources(oldValue, [newValue], deepMerger) : merger ? merger(oldValue, newValue, key) : newValue;
    }
    return deepMerger;
  }
  function areMergeable(oldDataStructure, newDataStructure) {
    var oldSeq = Seq(oldDataStructure);
    var newSeq = Seq(newDataStructure);
    return isIndexed(oldSeq) === isIndexed(newSeq) && isKeyed(oldSeq) === isKeyed(newSeq);
  }
  function mergeDeep() {
    var iters = [], len = arguments.length;
    while (len--) iters[len] = arguments[len];
    return mergeDeepWithSources(this, iters);
  }
  function mergeDeepWith(merger) {
    var iters = [], len = arguments.length - 1;
    while (len-- > 0) iters[len] = arguments[len + 1];
    return mergeDeepWithSources(this, iters, merger);
  }
  function mergeDeepIn(keyPath) {
    var iters = [], len = arguments.length - 1;
    while (len-- > 0) iters[len] = arguments[len + 1];
    return updateIn(
      this,
      keyPath,
      emptyMap(),
      function(m) {
        return mergeDeepWithSources(m, iters);
      }
    );
  }
  function mergeIn(keyPath) {
    var iters = [], len = arguments.length - 1;
    while (len-- > 0) iters[len] = arguments[len + 1];
    return updateIn(this, keyPath, emptyMap(), function(m) {
      return mergeWithSources(m, iters);
    });
  }
  function setIn$1(collection, keyPath, value) {
    return updateIn(collection, keyPath, NOT_SET, function() {
      return value;
    });
  }
  function setIn(keyPath, v) {
    return setIn$1(this, keyPath, v);
  }
  function update(key, notSetValue, updater) {
    return arguments.length === 1 ? key(this) : update$1(this, key, notSetValue, updater);
  }
  function updateIn$1(keyPath, notSetValue, updater) {
    return updateIn(this, keyPath, notSetValue, updater);
  }
  function wasAltered() {
    return this.__altered;
  }
  function withMutations(fn) {
    var mutable = this.asMutable();
    fn(mutable);
    return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
  }
  var IS_MAP_SYMBOL = "@@__IMMUTABLE_MAP__@@";
  function isMap(maybeMap) {
    return Boolean(maybeMap && // @ts-expect-error: maybeMap is typed as `{}`, need to change in 6.0 to `maybeMap && typeof maybeMap === 'object' && IS_MAP_SYMBOL in maybeMap`
    maybeMap[IS_MAP_SYMBOL]);
  }
  function invariant(condition, error2) {
    if (!condition) {
      throw new Error(error2);
    }
  }
  function assertNotInfinite(size) {
    invariant(size !== Infinity, "Cannot perform this action with an infinite size.");
  }
  var Map2 = /* @__PURE__ */ (function(KeyedCollection2) {
    function Map3(value) {
      return value === void 0 || value === null ? emptyMap() : isMap(value) && !isOrdered(value) ? value : emptyMap().withMutations(function(map2) {
        var iter = KeyedCollection2(value);
        assertNotInfinite(iter.size);
        iter.forEach(function(v, k) {
          return map2.set(k, v);
        });
      });
    }
    if (KeyedCollection2) Map3.__proto__ = KeyedCollection2;
    Map3.prototype = Object.create(KeyedCollection2 && KeyedCollection2.prototype);
    Map3.prototype.constructor = Map3;
    Map3.prototype.toString = function toString5() {
      return this.__toString("Map {", "}");
    };
    Map3.prototype.get = function get11(k, notSetValue) {
      return this._root ? this._root.get(0, void 0, k, notSetValue) : notSetValue;
    };
    Map3.prototype.set = function set3(k, v) {
      return updateMap(this, k, v);
    };
    Map3.prototype.remove = function remove3(k) {
      return updateMap(this, k, NOT_SET);
    };
    Map3.prototype.deleteAll = function deleteAll(keys2) {
      var collection = Collection(keys2);
      if (collection.size === 0) {
        return this;
      }
      return this.withMutations(function(map2) {
        collection.forEach(function(key) {
          return map2.remove(key);
        });
      });
    };
    Map3.prototype.clear = function clear2() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._root = null;
        this.__hash = void 0;
        this.__altered = true;
        return this;
      }
      return emptyMap();
    };
    Map3.prototype.sort = function sort2(comparator) {
      return OrderedMap(sortFactory(this, comparator));
    };
    Map3.prototype.sortBy = function sortBy2(mapper, comparator) {
      return OrderedMap(sortFactory(this, comparator, mapper));
    };
    Map3.prototype.map = function map2(mapper, context) {
      var this$1$1 = this;
      return this.withMutations(function(map3) {
        map3.forEach(function(value, key) {
          map3.set(key, mapper.call(context, value, key, this$1$1));
        });
      });
    };
    Map3.prototype.__iterator = function __iterator2(type, reverse3) {
      return new MapIterator(this, type, reverse3);
    };
    Map3.prototype.__iterate = function __iterate2(fn, reverse3) {
      var this$1$1 = this;
      var iterations = 0;
      this._root && this._root.iterate(function(entry) {
        iterations++;
        return fn(entry[1], entry[0], this$1$1);
      }, reverse3);
      return iterations;
    };
    Map3.prototype.__ensureOwner = function __ensureOwner2(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        if (this.size === 0) {
          return emptyMap();
        }
        this.__ownerID = ownerID;
        this.__altered = false;
        return this;
      }
      return makeMap(this.size, this._root, ownerID, this.__hash);
    };
    return Map3;
  })(KeyedCollection);
  Map2.isMap = isMap;
  var MapPrototype = Map2.prototype;
  MapPrototype[IS_MAP_SYMBOL] = true;
  MapPrototype[DELETE] = MapPrototype.remove;
  MapPrototype.removeAll = MapPrototype.deleteAll;
  MapPrototype.setIn = setIn;
  MapPrototype.removeIn = MapPrototype.deleteIn = deleteIn;
  MapPrototype.update = update;
  MapPrototype.updateIn = updateIn$1;
  MapPrototype.merge = MapPrototype.concat = merge$1;
  MapPrototype.mergeWith = mergeWith$1;
  MapPrototype.mergeDeep = mergeDeep;
  MapPrototype.mergeDeepWith = mergeDeepWith;
  MapPrototype.mergeIn = mergeIn;
  MapPrototype.mergeDeepIn = mergeDeepIn;
  MapPrototype.withMutations = withMutations;
  MapPrototype.wasAltered = wasAltered;
  MapPrototype.asImmutable = asImmutable;
  MapPrototype["@@transducer/init"] = MapPrototype.asMutable = asMutable;
  MapPrototype["@@transducer/step"] = function(result, arr) {
    return result.set(arr[0], arr[1]);
  };
  MapPrototype["@@transducer/result"] = function(obj) {
    return obj.asImmutable();
  };
  var ArrayMapNode = function ArrayMapNode2(ownerID, entries3) {
    this.ownerID = ownerID;
    this.entries = entries3;
  };
  ArrayMapNode.prototype.get = function get(shift, keyHash, key, notSetValue) {
    var entries3 = this.entries;
    for (var ii = 0, len = entries3.length; ii < len; ii++) {
      if (is(key, entries3[ii][0])) {
        return entries3[ii][1];
      }
    }
    return notSetValue;
  };
  ArrayMapNode.prototype.update = function update2(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    var removed = value === NOT_SET;
    var entries3 = this.entries;
    var idx = 0;
    var len = entries3.length;
    for (; idx < len; idx++) {
      if (is(key, entries3[idx][0])) {
        break;
      }
    }
    var exists = idx < len;
    if (exists ? entries3[idx][1] === value : removed) {
      return this;
    }
    SetRef(didAlter);
    (removed || !exists) && SetRef(didChangeSize);
    if (removed && entries3.length === 1) {
      return;
    }
    if (!exists && !removed && entries3.length >= MAX_ARRAY_MAP_SIZE) {
      return createNodes(ownerID, entries3, key, value);
    }
    var isEditable = ownerID && ownerID === this.ownerID;
    var newEntries = isEditable ? entries3 : arrCopy(entries3);
    if (exists) {
      if (removed) {
        idx === len - 1 ? newEntries.pop() : newEntries[idx] = newEntries.pop();
      } else {
        newEntries[idx] = [key, value];
      }
    } else {
      newEntries.push([key, value]);
    }
    if (isEditable) {
      this.entries = newEntries;
      return this;
    }
    return new ArrayMapNode(ownerID, newEntries);
  };
  var BitmapIndexedNode = function BitmapIndexedNode2(ownerID, bitmap, nodes) {
    this.ownerID = ownerID;
    this.bitmap = bitmap;
    this.nodes = nodes;
  };
  BitmapIndexedNode.prototype.get = function get2(shift, keyHash, key, notSetValue) {
    if (keyHash === void 0) {
      keyHash = hash(key);
    }
    var bit = 1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK);
    var bitmap = this.bitmap;
    return (bitmap & bit) === 0 ? notSetValue : this.nodes[popCount(bitmap & bit - 1)].get(
      shift + SHIFT,
      keyHash,
      key,
      notSetValue
    );
  };
  BitmapIndexedNode.prototype.update = function update3(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    if (keyHash === void 0) {
      keyHash = hash(key);
    }
    var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
    var bit = 1 << keyHashFrag;
    var bitmap = this.bitmap;
    var exists = (bitmap & bit) !== 0;
    if (!exists && value === NOT_SET) {
      return this;
    }
    var idx = popCount(bitmap & bit - 1);
    var nodes = this.nodes;
    var node = exists ? nodes[idx] : void 0;
    var newNode = updateNode(
      node,
      ownerID,
      shift + SHIFT,
      keyHash,
      key,
      value,
      didChangeSize,
      didAlter
    );
    if (newNode === node) {
      return this;
    }
    if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
      return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
    }
    if (exists && !newNode && nodes.length === 2 && isLeafNode(nodes[idx ^ 1])) {
      return nodes[idx ^ 1];
    }
    if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
      return newNode;
    }
    var isEditable = ownerID && ownerID === this.ownerID;
    var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
    var newNodes = exists ? newNode ? setAt(nodes, idx, newNode, isEditable) : spliceOut(nodes, idx, isEditable) : spliceIn(nodes, idx, newNode, isEditable);
    if (isEditable) {
      this.bitmap = newBitmap;
      this.nodes = newNodes;
      return this;
    }
    return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
  };
  var HashArrayMapNode = function HashArrayMapNode2(ownerID, count2, nodes) {
    this.ownerID = ownerID;
    this.count = count2;
    this.nodes = nodes;
  };
  HashArrayMapNode.prototype.get = function get3(shift, keyHash, key, notSetValue) {
    if (keyHash === void 0) {
      keyHash = hash(key);
    }
    var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
    var node = this.nodes[idx];
    return node ? node.get(shift + SHIFT, keyHash, key, notSetValue) : notSetValue;
  };
  HashArrayMapNode.prototype.update = function update4(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    if (keyHash === void 0) {
      keyHash = hash(key);
    }
    var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
    var removed = value === NOT_SET;
    var nodes = this.nodes;
    var node = nodes[idx];
    if (removed && !node) {
      return this;
    }
    var newNode = updateNode(
      node,
      ownerID,
      shift + SHIFT,
      keyHash,
      key,
      value,
      didChangeSize,
      didAlter
    );
    if (newNode === node) {
      return this;
    }
    var newCount = this.count;
    if (!node) {
      newCount++;
    } else if (!newNode) {
      newCount--;
      if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
        return packNodes(ownerID, nodes, newCount, idx);
      }
    }
    var isEditable = ownerID && ownerID === this.ownerID;
    var newNodes = setAt(nodes, idx, newNode, isEditable);
    if (isEditable) {
      this.count = newCount;
      this.nodes = newNodes;
      return this;
    }
    return new HashArrayMapNode(ownerID, newCount, newNodes);
  };
  var HashCollisionNode = function HashCollisionNode2(ownerID, keyHash, entries3) {
    this.ownerID = ownerID;
    this.keyHash = keyHash;
    this.entries = entries3;
    this._index = void 0;
  };
  HashCollisionNode.prototype._positionOf = function _positionOf(key, buildIndex) {
    var entries3 = this.entries;
    var index = this._index;
    if (index === void 0 && buildIndex && entries3.length >= MIN_HASH_COLLISION_INDEX_SIZE) {
      index = this._buildIndex();
    }
    if (index !== void 0) {
      var positions = index[hashCollisionKey(key)];
      if (positions !== void 0) {
        for (var jj = 0; jj < positions.length; jj++) {
          var ii = positions[jj];
          if (is(key, entries3[ii][0])) {
            return ii;
          }
        }
      }
      return -1;
    }
    for (var ii$1 = 0, len = entries3.length; ii$1 < len; ii$1++) {
      if (is(key, entries3[ii$1][0])) {
        return ii$1;
      }
    }
    return -1;
  };
  HashCollisionNode.prototype._buildIndex = function _buildIndex() {
    var index = /* @__PURE__ */ Object.create(null);
    var entries3 = this.entries;
    for (var ii = 0, len = entries3.length; ii < len; ii++) {
      var secondaryHash = hashCollisionKey(entries3[ii][0]);
      var positions = index[secondaryHash];
      if (positions !== void 0) {
        positions.push(ii);
      } else {
        index[secondaryHash] = [ii];
      }
    }
    this._index = index;
    return index;
  };
  HashCollisionNode.prototype.get = function get4(shift, keyHash, key, notSetValue) {
    var idx = this._positionOf(key, true);
    return idx === -1 ? notSetValue : this.entries[idx][1];
  };
  HashCollisionNode.prototype.update = function update5(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    if (keyHash === void 0) {
      keyHash = hash(key);
    }
    var removed = value === NOT_SET;
    if (keyHash !== this.keyHash) {
      if (removed) {
        return this;
      }
      SetRef(didAlter);
      SetRef(didChangeSize);
      return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
    }
    var entries3 = this.entries;
    var len = entries3.length;
    var isEditable = ownerID && ownerID === this.ownerID;
    var foundIdx = this._positionOf(key, isEditable);
    var idx = foundIdx === -1 ? len : foundIdx;
    var exists = foundIdx !== -1;
    if (exists ? entries3[idx][1] === value : removed) {
      return this;
    }
    SetRef(didAlter);
    (removed || !exists) && SetRef(didChangeSize);
    if (removed && len === 2) {
      return new ValueNode(ownerID, this.keyHash, entries3[idx ^ 1]);
    }
    var newEntries = isEditable ? entries3 : arrCopy(entries3);
    if (exists) {
      if (removed) {
        idx === len - 1 ? newEntries.pop() : newEntries[idx] = newEntries.pop();
        if (isEditable) {
          this._index = void 0;
        }
      } else {
        newEntries[idx] = [key, value];
      }
    } else {
      newEntries.push([key, value]);
      if (isEditable && this._index !== void 0) {
        var secondaryHash = hashCollisionKey(key);
        var positions = this._index[secondaryHash];
        if (positions !== void 0) {
          positions.push(len);
        } else {
          this._index[secondaryHash] = [len];
        }
      }
    }
    if (isEditable) {
      this.entries = newEntries;
      return this;
    }
    return new HashCollisionNode(ownerID, this.keyHash, newEntries);
  };
  var ValueNode = function ValueNode2(ownerID, keyHash, entry) {
    this.ownerID = ownerID;
    this.keyHash = keyHash;
    this.entry = entry;
  };
  ValueNode.prototype.get = function get5(shift, keyHash, key, notSetValue) {
    return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
  };
  ValueNode.prototype.update = function update6(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    var removed = value === NOT_SET;
    var keyMatch = is(key, this.entry[0]);
    if (keyMatch ? value === this.entry[1] : removed) {
      return this;
    }
    SetRef(didAlter);
    if (removed) {
      SetRef(didChangeSize);
      return;
    }
    if (keyMatch) {
      if (ownerID && ownerID === this.ownerID) {
        this.entry[1] = value;
        return this;
      }
      return new ValueNode(ownerID, this.keyHash, [key, value]);
    }
    SetRef(didChangeSize);
    return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
  };
  ArrayMapNode.prototype.iterate = HashCollisionNode.prototype.iterate = function(fn, reverse3) {
    var entries3 = this.entries;
    for (var ii = 0, maxIndex = entries3.length - 1; ii <= maxIndex; ii++) {
      if (fn(entries3[reverse3 ? maxIndex - ii : ii]) === false) {
        return false;
      }
    }
  };
  BitmapIndexedNode.prototype.iterate = HashArrayMapNode.prototype.iterate = function(fn, reverse3) {
    var nodes = this.nodes;
    for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
      var node = nodes[reverse3 ? maxIndex - ii : ii];
      if (node && node.iterate(fn, reverse3) === false) {
        return false;
      }
    }
  };
  ValueNode.prototype.iterate = function(fn, reverse3) {
    return fn(this.entry);
  };
  var MapIterator = /* @__PURE__ */ (function(Iterator3) {
    function MapIterator2(map2, type, reverse3) {
      this._type = type;
      this._reverse = reverse3;
      this._stack = map2._root && mapIteratorFrame(map2._root);
    }
    if (Iterator3) MapIterator2.__proto__ = Iterator3;
    MapIterator2.prototype = Object.create(Iterator3 && Iterator3.prototype);
    MapIterator2.prototype.constructor = MapIterator2;
    MapIterator2.prototype.next = function next() {
      var type = this._type;
      var stack = this._stack;
      while (stack) {
        var node = stack.node;
        var index = stack.index++;
        var maxIndex = void 0;
        if (node.entry) {
          if (index === 0) {
            return mapIteratorValue(type, node.entry);
          }
        } else if (node.entries) {
          maxIndex = node.entries.length - 1;
          if (index <= maxIndex) {
            return mapIteratorValue(
              type,
              node.entries[this._reverse ? maxIndex - index : index]
            );
          }
        } else {
          maxIndex = node.nodes.length - 1;
          if (index <= maxIndex) {
            var subNode = node.nodes[this._reverse ? maxIndex - index : index];
            if (subNode) {
              if (subNode.entry) {
                return mapIteratorValue(type, subNode.entry);
              }
              stack = this._stack = mapIteratorFrame(subNode, stack);
            }
            continue;
          }
        }
        stack = this._stack = this._stack.__prev;
      }
      return iteratorDone();
    };
    return MapIterator2;
  })(Iterator);
  function mapIteratorValue(type, entry) {
    return iteratorValue(type, entry[0], entry[1]);
  }
  function mapIteratorFrame(node, prev) {
    return {
      node,
      index: 0,
      __prev: prev
    };
  }
  function makeMap(size, root, ownerID, hash2) {
    var map2 = Object.create(MapPrototype);
    map2.size = size;
    map2._root = root;
    map2.__ownerID = ownerID;
    map2.__hash = hash2;
    map2.__altered = false;
    return map2;
  }
  var EMPTY_MAP;
  function emptyMap() {
    return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
  }
  function updateMap(map2, k, v) {
    var newRoot;
    var newSize;
    if (!map2._root) {
      if (v === NOT_SET) {
        return map2;
      }
      newSize = 1;
      newRoot = new ArrayMapNode(map2.__ownerID, [[k, v]]);
    } else {
      var didChangeSize = MakeRef();
      var didAlter = MakeRef();
      newRoot = updateNode(
        map2._root,
        map2.__ownerID,
        0,
        void 0,
        k,
        v,
        didChangeSize,
        didAlter
      );
      if (!didAlter.value) {
        return map2;
      }
      newSize = map2.size + (didChangeSize.value ? v === NOT_SET ? -1 : 1 : 0);
    }
    if (map2.__ownerID) {
      map2.size = newSize;
      map2._root = newRoot;
      map2.__hash = void 0;
      map2.__altered = true;
      return map2;
    }
    return newRoot ? makeMap(newSize, newRoot) : emptyMap();
  }
  function updateNode(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    if (!node) {
      if (value === NOT_SET) {
        return node;
      }
      SetRef(didAlter);
      SetRef(didChangeSize);
      return new ValueNode(ownerID, keyHash, [key, value]);
    }
    return node.update(
      ownerID,
      shift,
      keyHash,
      key,
      value,
      didChangeSize,
      didAlter
    );
  }
  function isLeafNode(node) {
    return node.constructor === ValueNode || node.constructor === HashCollisionNode;
  }
  function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
    if (node.keyHash === keyHash) {
      return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
    }
    var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
    var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
    var newNode;
    var nodes = idx1 === idx2 ? [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)] : (newNode = new ValueNode(ownerID, keyHash, entry), idx1 < idx2 ? [node, newNode] : [newNode, node]);
    return new BitmapIndexedNode(ownerID, 1 << idx1 | 1 << idx2, nodes);
  }
  function createNodes(ownerID, entries3, key, value) {
    if (!ownerID) {
      ownerID = new OwnerID();
    }
    var node = new ValueNode(ownerID, hash(key), [key, value]);
    for (var ii = 0; ii < entries3.length; ii++) {
      var entry = entries3[ii];
      node = node.update(ownerID, 0, void 0, entry[0], entry[1]);
    }
    return node;
  }
  function packNodes(ownerID, nodes, count2, excluding) {
    var bitmap = 0;
    var packedII = 0;
    var packedNodes = new Array(count2);
    for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
      var node = nodes[ii];
      if (node !== void 0 && ii !== excluding) {
        bitmap |= bit;
        packedNodes[packedII++] = node;
      }
    }
    return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
  }
  function expandNodes(ownerID, nodes, bitmap, including, node) {
    var count2 = 0;
    var expandedNodes = new Array(SIZE);
    for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
      expandedNodes[ii] = bitmap & 1 ? nodes[count2++] : void 0;
    }
    expandedNodes[including] = node;
    return new HashArrayMapNode(ownerID, count2 + 1, expandedNodes);
  }
  function popCount(x) {
    x -= x >> 1 & 1431655765;
    x = (x & 858993459) + (x >> 2 & 858993459);
    x = x + (x >> 4) & 252645135;
    x += x >> 8;
    x += x >> 16;
    return x & 127;
  }
  function setAt(array, idx, val, canEdit) {
    var newArray = canEdit ? array : arrCopy(array);
    newArray[idx] = val;
    return newArray;
  }
  function spliceIn(array, idx, val, canEdit) {
    var newLen = array.length + 1;
    if (canEdit && idx + 1 === newLen) {
      array[idx] = val;
      return array;
    }
    var newArray = new Array(newLen);
    var after = 0;
    for (var ii = 0; ii < newLen; ii++) {
      if (ii === idx) {
        newArray[ii] = val;
        after = -1;
      } else {
        newArray[ii] = array[ii + after];
      }
    }
    return newArray;
  }
  function spliceOut(array, idx, canEdit) {
    var newLen = array.length - 1;
    if (canEdit && idx === newLen) {
      array.pop();
      return array;
    }
    var newArray = new Array(newLen);
    var after = 0;
    for (var ii = 0; ii < newLen; ii++) {
      if (ii === idx) {
        after = 1;
      }
      newArray[ii] = array[ii + after];
    }
    return newArray;
  }
  var MAX_ARRAY_MAP_SIZE = SIZE / 4;
  var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
  var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;
  var MIN_HASH_COLLISION_INDEX_SIZE = 16;
  function coerceKeyPath(keyPath) {
    if (isArrayLike(keyPath) && typeof keyPath !== "string") {
      return keyPath;
    }
    if (isOrdered(keyPath)) {
      return keyPath.toArray();
    }
    throw new TypeError("Invalid keyPath: expected Ordered Collection or Array: " + keyPath);
  }
  function quoteString(value) {
    try {
      return typeof value === "string" ? JSON.stringify(value) : String(value);
    } catch (_ignoreError) {
      return JSON.stringify(value);
    }
  }
  function has(collection, key) {
    return isImmutable(collection) ? (
      // @ts-expect-error key might be a number or symbol, which is not handled be Record key type
      collection.has(key)
    ) : (
      // @ts-expect-error key might be anything else than PropertyKey, and will return false in that case but runtime is OK
      isDataStructure(collection) && hasOwnProperty.call(collection, key)
    );
  }
  function get6(collection, key, notSetValue) {
    return isImmutable(collection) ? collection.get(key, notSetValue) : !has(collection, key) ? notSetValue : (
      // @ts-expect-error weird "get" here,
      typeof collection.get === "function" ? (
        // @ts-expect-error weird "get" here,
        collection.get(key)
      ) : (
        // @ts-expect-error key is unknown here,
        collection[key]
      )
    );
  }
  function remove(collection, key) {
    if (!isDataStructure(collection)) {
      throw new TypeError("Cannot update non-data-structure value: " + collection);
    }
    if (isImmutable(collection)) {
      if (!collection.remove) {
        throw new TypeError("Cannot update immutable value without .remove() method: " + collection);
      }
      return collection.remove(key);
    }
    if (!hasOwnProperty.call(collection, key)) {
      return collection;
    }
    var collectionCopy = shallowCopy(collection);
    if (Array.isArray(collectionCopy)) {
      collectionCopy.splice(key, 1);
    } else {
      delete collectionCopy[key];
    }
    return collectionCopy;
  }
  function set(collection, key, value) {
    if (isProtoKey(key)) {
      return collection;
    }
    if (!isDataStructure(collection)) {
      throw new TypeError("Cannot update non-data-structure value: " + collection);
    }
    if (isImmutable(collection)) {
      if (!collection.set) {
        throw new TypeError("Cannot update immutable value without .set() method: " + collection);
      }
      return collection.set(key, value);
    }
    if (hasOwnProperty.call(collection, key) && value === collection[key]) {
      return collection;
    }
    var collectionCopy = shallowCopy(collection);
    collectionCopy[key] = value;
    return collectionCopy;
  }
  function updateIn(collection, keyPath, notSetValue, updater) {
    if (!updater) {
      updater = notSetValue;
      notSetValue = void 0;
    }
    var updatedValue = updateInDeeply(
      isImmutable(collection),
      // @ts-expect-error type issues with Record and mixed types
      collection,
      coerceKeyPath(keyPath),
      0,
      notSetValue,
      updater
    );
    return updatedValue === NOT_SET ? notSetValue : updatedValue;
  }
  function updateInDeeply(inImmutable, existing, keyPath, i, notSetValue, updater) {
    var wasNotSet = existing === NOT_SET;
    if (i === keyPath.length) {
      var existingValue = wasNotSet ? notSetValue : existing;
      var newValue = updater(existingValue);
      return newValue === existingValue ? existing : newValue;
    }
    if (!wasNotSet && !isDataStructure(existing)) {
      throw new TypeError("Cannot update within non-data-structure value in path [" + Array.from(keyPath).slice(0, i).map(quoteString) + "]: " + existing);
    }
    var key = keyPath[i];
    var nextExisting = wasNotSet ? NOT_SET : get6(existing, key, NOT_SET);
    var nextUpdated = updateInDeeply(
      nextExisting === NOT_SET ? inImmutable : isImmutable(nextExisting),
      // @ts-expect-error mixed type
      nextExisting,
      keyPath,
      i + 1,
      notSetValue,
      updater
    );
    return nextUpdated === nextExisting ? existing : nextUpdated === NOT_SET ? remove(existing, key) : set(wasNotSet ? inImmutable ? emptyMap() : {} : existing, key, nextUpdated);
  }
  function removeIn(collection, keyPath) {
    return updateIn(collection, keyPath, function() {
      return NOT_SET;
    });
  }
  function deleteIn(keyPath) {
    return removeIn(this, keyPath);
  }
  var IS_LIST_SYMBOL = "@@__IMMUTABLE_LIST__@@";
  function isList(maybeList) {
    return Boolean(maybeList && // @ts-expect-error: maybeList is typed as `{}`, need to change in 6.0 to `maybeList && typeof maybeList === 'object' && IS_LIST_SYMBOL in maybeList`
    maybeList[IS_LIST_SYMBOL]);
  }
  var List = /* @__PURE__ */ (function(IndexedCollection2) {
    function List2(value) {
      var empty = emptyList();
      if (value === void 0 || value === null) {
        return empty;
      }
      if (isList(value)) {
        return value;
      }
      var iter = IndexedCollection2(value);
      var size = iter.size;
      if (size === 0) {
        return empty;
      }
      assertNotInfinite(size);
      if (size > 0 && size < SIZE) {
        return makeList(0, size, SHIFT, void 0, new VNode(iter.toArray()));
      }
      return empty.withMutations(function(list) {
        list.setSize(size);
        iter.forEach(function(v, i) {
          return list.set(i, v);
        });
      });
    }
    if (IndexedCollection2) List2.__proto__ = IndexedCollection2;
    List2.prototype = Object.create(IndexedCollection2 && IndexedCollection2.prototype);
    List2.prototype.constructor = List2;
    List2.of = function of() {
      return this(arguments);
    };
    List2.prototype.toString = function toString5() {
      return this.__toString("List [", "]");
    };
    List2.prototype.get = function get11(index, notSetValue) {
      index = wrapIndex(this, index);
      if (index >= 0 && index < this.size) {
        index += this._origin;
        var node = listNodeFor(this, index);
        return node && node.array[index & MASK];
      }
      return notSetValue;
    };
    List2.prototype.set = function set3(index, value) {
      return updateList(this, index, value);
    };
    List2.prototype.remove = function remove3(index) {
      return !this.has(index) ? this : index === 0 ? this.shift() : index === this.size - 1 ? this.pop() : this.splice(index, 1);
    };
    List2.prototype.insert = function insert(index, value) {
      return this.splice(index, 0, value);
    };
    List2.prototype.clear = function clear2() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = this._origin = this._capacity = 0;
        this._level = SHIFT;
        this._root = this._tail = this.__hash = void 0;
        this.__altered = true;
        return this;
      }
      return emptyList();
    };
    List2.prototype.push = function push() {
      var values2 = arguments;
      var oldSize = this.size;
      return this.withMutations(function(list) {
        setListBounds(list, 0, oldSize + values2.length);
        for (var ii = 0; ii < values2.length; ii++) {
          list.set(oldSize + ii, values2[ii]);
        }
      });
    };
    List2.prototype.pop = function pop() {
      return setListBounds(this, 0, -1);
    };
    List2.prototype.unshift = function unshift() {
      var values2 = arguments;
      return this.withMutations(function(list) {
        setListBounds(list, -values2.length);
        for (var ii = 0; ii < values2.length; ii++) {
          list.set(ii, values2[ii]);
        }
      });
    };
    List2.prototype.shift = function shift() {
      return setListBounds(this, 1);
    };
    List2.prototype.shuffle = function shuffle(random) {
      if (random === void 0) random = Math.random;
      return this.withMutations(function(mutable) {
        var current = mutable.size;
        var destination;
        var tmp;
        while (current) {
          destination = Math.floor(random() * current--);
          tmp = mutable.get(destination);
          mutable.set(destination, mutable.get(current));
          mutable.set(current, tmp);
        }
      });
    };
    List2.prototype.concat = function concat2() {
      var arguments$1 = arguments;
      var seqs = [];
      for (var i = 0; i < arguments.length; i++) {
        var argument = arguments$1[i];
        var seq = IndexedCollection2(
          typeof argument !== "string" && hasIterator(argument) ? argument : [argument]
        );
        if (seq.size !== 0) {
          seqs.push(seq);
        }
      }
      if (seqs.length === 0) {
        return this;
      }
      if (this.size === 0 && !this.__ownerID && seqs.length === 1) {
        return this.constructor(seqs[0]);
      }
      return this.withMutations(function(list) {
        seqs.forEach(function(seq2) {
          return seq2.forEach(function(value) {
            return list.push(value);
          });
        });
      });
    };
    List2.prototype.setSize = function setSize(size) {
      return setListBounds(this, 0, size);
    };
    List2.prototype.map = function map2(mapper, context) {
      var this$1$1 = this;
      return this.withMutations(function(list) {
        for (var i = 0; i < this$1$1.size; i++) {
          list.set(i, mapper.call(context, list.get(i), i, this$1$1));
        }
      });
    };
    List2.prototype.slice = function slice3(begin, end) {
      var size = this.size;
      if (wholeSlice(begin, end, size)) {
        return this;
      }
      return setListBounds(
        this,
        resolveBegin(begin, size),
        resolveEnd(end, size)
      );
    };
    List2.prototype.__iterator = function __iterator2(type, reverse3) {
      var index = reverse3 ? this.size : 0;
      var values2 = iterateList(this, reverse3);
      return new Iterator(function() {
        var value = values2();
        return value === DONE ? iteratorDone() : iteratorValue(type, reverse3 ? --index : index++, value);
      });
    };
    List2.prototype.__iterate = function __iterate2(fn, reverse3) {
      var index = reverse3 ? this.size : 0;
      var values2 = iterateList(this, reverse3);
      var value;
      while ((value = values2()) !== DONE) {
        if (fn(value, reverse3 ? --index : index++, this) === false) {
          break;
        }
      }
      return index;
    };
    List2.prototype.__ensureOwner = function __ensureOwner2(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        if (this.size === 0) {
          return emptyList();
        }
        this.__ownerID = ownerID;
        this.__altered = false;
        return this;
      }
      return makeList(
        this._origin,
        this._capacity,
        this._level,
        this._root,
        this._tail,
        ownerID,
        this.__hash
      );
    };
    return List2;
  })(IndexedCollection);
  List.isList = isList;
  var ListPrototype = List.prototype;
  ListPrototype[IS_LIST_SYMBOL] = true;
  ListPrototype[DELETE] = ListPrototype.remove;
  ListPrototype.merge = ListPrototype.concat;
  ListPrototype.setIn = setIn;
  ListPrototype.deleteIn = ListPrototype.removeIn = deleteIn;
  ListPrototype.update = update;
  ListPrototype.updateIn = updateIn$1;
  ListPrototype.mergeIn = mergeIn;
  ListPrototype.mergeDeepIn = mergeDeepIn;
  ListPrototype.withMutations = withMutations;
  ListPrototype.wasAltered = wasAltered;
  ListPrototype.asImmutable = asImmutable;
  ListPrototype["@@transducer/init"] = ListPrototype.asMutable = asMutable;
  ListPrototype["@@transducer/step"] = function(result, arr) {
    return result.push(arr);
  };
  ListPrototype["@@transducer/result"] = function(obj) {
    return obj.asImmutable();
  };
  var VNode = function VNode2(array, ownerID) {
    this.array = array;
    this.ownerID = ownerID;
  };
  VNode.prototype.removeBefore = function removeBefore(ownerID, level, index) {
    if ((index & (1 << level + SHIFT) - 1) === 0 || this.array.length === 0) {
      return this;
    }
    var originIndex = index >>> level & MASK;
    if (originIndex >= this.array.length) {
      return new VNode([], ownerID);
    }
    var removingFirst = originIndex === 0;
    var newChild;
    if (level > 0) {
      var oldChild = this.array[originIndex];
      newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
      if (newChild === oldChild && removingFirst) {
        return this;
      }
    }
    if (removingFirst && !newChild) {
      return this;
    }
    var editable = editableVNode(this, ownerID);
    if (!removingFirst) {
      for (var ii = 0; ii < originIndex; ii++) {
        editable.array[ii] = void 0;
      }
    }
    if (newChild) {
      editable.array[originIndex] = newChild;
    }
    return editable;
  };
  VNode.prototype.removeAfter = function removeAfter(ownerID, level, index) {
    if (index === (level ? 1 << level + SHIFT : SIZE) || this.array.length === 0) {
      return this;
    }
    var sizeIndex = index - 1 >>> level & MASK;
    if (sizeIndex >= this.array.length) {
      return this;
    }
    var newChild;
    if (level > 0) {
      var oldChild = this.array[sizeIndex];
      newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
      if (newChild === oldChild && sizeIndex === this.array.length - 1) {
        return this;
      }
    }
    var editable = editableVNode(this, ownerID);
    editable.array.splice(sizeIndex + 1);
    if (newChild) {
      editable.array[sizeIndex] = newChild;
    }
    return editable;
  };
  var DONE = {};
  function iterateList(list, reverse3) {
    var left = list._origin;
    var right = list._capacity;
    var tailPos = getTailOffset(right);
    var tail = list._tail;
    return iterateNodeOrLeaf(list._root, list._level, 0);
    function iterateNodeOrLeaf(node, level, offset) {
      return level === 0 ? iterateLeaf(node, offset) : iterateNode(node, level, offset);
    }
    function iterateLeaf(node, offset) {
      var array = offset === tailPos ? tail && tail.array : node && node.array;
      var from = offset > left ? 0 : left - offset;
      var to = right - offset;
      if (to > SIZE) {
        to = SIZE;
      }
      return function() {
        if (from === to) {
          return DONE;
        }
        var idx = reverse3 ? --to : from++;
        return array && array[idx];
      };
    }
    function iterateNode(node, level, offset) {
      var values2;
      var array = node && node.array;
      var from = offset > left ? 0 : left - offset >> level;
      var to = (right - offset >> level) + 1;
      if (to > SIZE) {
        to = SIZE;
      }
      return function() {
        while (true) {
          if (values2) {
            var value = values2();
            if (value !== DONE) {
              return value;
            }
            values2 = null;
          }
          if (from === to) {
            return DONE;
          }
          var idx = reverse3 ? --to : from++;
          values2 = iterateNodeOrLeaf(
            array && array[idx],
            level - SHIFT,
            offset + (idx << level)
          );
        }
      };
    }
  }
  function makeList(origin, capacity, level, root, tail, ownerID, hash2) {
    var list = Object.create(ListPrototype);
    list.size = capacity - origin;
    list._origin = origin;
    list._capacity = capacity;
    list._level = level;
    list._root = root;
    list._tail = tail;
    list.__ownerID = ownerID;
    list.__hash = hash2;
    list.__altered = false;
    return list;
  }
  function emptyList() {
    return makeList(0, 0, SHIFT);
  }
  function updateList(list, index, value) {
    index = wrapIndex(list, index);
    if (index !== index) {
      return list;
    }
    if (index >= list.size || index < 0) {
      return list.withMutations(function(list2) {
        index < 0 ? setListBounds(list2, index).set(0, value) : setListBounds(list2, 0, index + 1).set(index, value);
      });
    }
    index += list._origin;
    var newTail = list._tail;
    var newRoot = list._root;
    var didAlter = MakeRef();
    if (index >= getTailOffset(list._capacity)) {
      newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
    } else {
      newRoot = updateVNode(
        newRoot,
        list.__ownerID,
        list._level,
        index,
        value,
        didAlter
      );
    }
    if (!didAlter.value) {
      return list;
    }
    if (list.__ownerID) {
      list._root = newRoot;
      list._tail = newTail;
      list.__hash = void 0;
      list.__altered = true;
      return list;
    }
    return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
  }
  function updateVNode(node, ownerID, level, index, value, didAlter) {
    var idx = index >>> level & MASK;
    var nodeHas = node && idx < node.array.length;
    if (!nodeHas && value === void 0) {
      return node;
    }
    var newNode;
    if (level > 0) {
      var lowerNode = node && node.array[idx];
      var newLowerNode = updateVNode(
        lowerNode,
        ownerID,
        level - SHIFT,
        index,
        value,
        didAlter
      );
      if (newLowerNode === lowerNode) {
        return node;
      }
      newNode = editableVNode(node, ownerID);
      newNode.array[idx] = newLowerNode;
      return newNode;
    }
    if (nodeHas && node.array[idx] === value) {
      return node;
    }
    if (didAlter) {
      SetRef(didAlter);
    }
    newNode = editableVNode(node, ownerID);
    if (value === void 0 && idx === newNode.array.length - 1) {
      newNode.array.pop();
    } else {
      newNode.array[idx] = value;
    }
    return newNode;
  }
  function editableVNode(node, ownerID) {
    if (ownerID && node && ownerID === node.ownerID) {
      return node;
    }
    return new VNode(node ? node.array.slice() : [], ownerID);
  }
  function listNodeFor(list, rawIndex) {
    if (rawIndex >= getTailOffset(list._capacity)) {
      return list._tail;
    }
    if (rawIndex < 1 << list._level + SHIFT) {
      var node = list._root;
      var level = list._level;
      while (node && level > 0) {
        node = node.array[rawIndex >>> level & MASK];
        level -= SHIFT;
      }
      return node;
    }
  }
  function validateListBoundsRequest(list, begin, end) {
    var requestedOrigin = list._origin + (begin === void 0 ? 0 : begin);
    var requestedCapacity = end === void 0 ? list._capacity : end < 0 ? list._capacity + end : list._origin + end;
    if (Number.isFinite(requestedCapacity) && requestedCapacity > MAX_LIST_SIZE || Number.isFinite(requestedOrigin) && requestedOrigin < -MAX_LIST_SIZE || Number.isFinite(requestedCapacity) && Number.isFinite(requestedOrigin) && requestedCapacity - requestedOrigin > MAX_LIST_SIZE) {
      throw new RangeError(
        "Invalid List size: a List cannot hold more than " + MAX_LIST_SIZE + " (2 ** 30) values."
      );
    }
  }
  function setListBounds(list, begin, end) {
    validateListBoundsRequest(list, begin, end);
    if (begin !== void 0) {
      begin |= 0;
    }
    if (end !== void 0) {
      end |= 0;
    }
    var owner = list.__ownerID || new OwnerID();
    var oldOrigin = list._origin;
    var oldCapacity = list._capacity;
    var newOrigin = oldOrigin + begin;
    var newCapacity = end === void 0 ? oldCapacity : end < 0 ? oldCapacity + end : oldOrigin + end;
    if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
      return list;
    }
    if (newOrigin >= newCapacity) {
      return list.clear();
    }
    var newLevel = list._level;
    var newRoot = list._root;
    var offsetShift = 0;
    while (newOrigin + offsetShift < 0) {
      newRoot = new VNode(
        newRoot && newRoot.array.length ? [void 0, newRoot] : [],
        owner
      );
      newLevel += SHIFT;
      offsetShift += levelCapacity(newLevel);
    }
    if (offsetShift) {
      newOrigin += offsetShift;
      oldOrigin += offsetShift;
      newCapacity += offsetShift;
      oldCapacity += offsetShift;
    }
    var oldTailOffset = getTailOffset(oldCapacity);
    var newTailOffset = getTailOffset(newCapacity);
    while (newTailOffset >= levelCapacity(newLevel + SHIFT)) {
      newRoot = new VNode(
        newRoot && newRoot.array.length ? [newRoot] : [],
        owner
      );
      newLevel += SHIFT;
    }
    var oldTail = list._tail;
    var newTail = newTailOffset < oldTailOffset ? listNodeFor(list, newCapacity - 1) : newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail;
    if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
      newRoot = editableVNode(newRoot, owner);
      var node = newRoot;
      for (var level = newLevel; level > SHIFT; level -= SHIFT) {
        var idx = oldTailOffset >>> level & MASK;
        node = node.array[idx] = editableVNode(node.array[idx], owner);
      }
      node.array[oldTailOffset >>> SHIFT & MASK] = oldTail;
    }
    if (newCapacity < oldCapacity) {
      newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
    }
    if (newOrigin >= newTailOffset) {
      newOrigin -= newTailOffset;
      newCapacity -= newTailOffset;
      newLevel = SHIFT;
      newRoot = void 0;
      newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);
    } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
      offsetShift = 0;
      while (newRoot) {
        var beginIndex = newOrigin >>> newLevel & MASK;
        if (beginIndex !== newTailOffset >>> newLevel & MASK) {
          break;
        }
        if (beginIndex) {
          offsetShift += (1 << newLevel) * beginIndex;
        }
        newLevel -= SHIFT;
        newRoot = newRoot.array[beginIndex];
      }
      if (newRoot && newOrigin > oldOrigin) {
        newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
      }
      if (newRoot && newTailOffset < oldTailOffset) {
        newRoot = newRoot.removeAfter(
          owner,
          newLevel,
          newTailOffset - offsetShift
        );
      }
      if (offsetShift) {
        newOrigin -= offsetShift;
        newCapacity -= offsetShift;
      }
    }
    if (list.__ownerID) {
      list.size = newCapacity - newOrigin;
      list._origin = newOrigin;
      list._capacity = newCapacity;
      list._level = newLevel;
      list._root = newRoot;
      list._tail = newTail;
      list.__hash = void 0;
      list.__altered = true;
      return list;
    }
    return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
  }
  function getTailOffset(size) {
    return size < SIZE ? 0 : size - 1 >>> SHIFT << SHIFT;
  }
  var MAX_LIST_SIZE = Math.pow(2, 30);
  function levelCapacity(exp) {
    return exp < 31 ? 1 << exp : Math.pow(2, exp);
  }
  function isOrderedMap(maybeOrderedMap) {
    return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
  }
  var OrderedMap = /* @__PURE__ */ (function(Map3) {
    function OrderedMap2(value) {
      return value === void 0 || value === null ? emptyOrderedMap() : isOrderedMap(value) ? value : emptyOrderedMap().withMutations(function(map2) {
        var iter = KeyedCollection(value);
        assertNotInfinite(iter.size);
        iter.forEach(function(v, k) {
          return map2.set(k, v);
        });
      });
    }
    if (Map3) OrderedMap2.__proto__ = Map3;
    OrderedMap2.prototype = Object.create(Map3 && Map3.prototype);
    OrderedMap2.prototype.constructor = OrderedMap2;
    OrderedMap2.of = function of() {
      return this(arguments);
    };
    OrderedMap2.prototype.toString = function toString5() {
      return this.__toString("OrderedMap {", "}");
    };
    OrderedMap2.prototype.get = function get11(k, notSetValue) {
      var index = this._map.get(k);
      return index !== void 0 ? this._list.get(index)[1] : notSetValue;
    };
    OrderedMap2.prototype.clear = function clear2() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._map.clear();
        this._list.clear();
        this.__altered = true;
        return this;
      }
      return emptyOrderedMap();
    };
    OrderedMap2.prototype.set = function set3(k, v) {
      return updateOrderedMap(this, k, v);
    };
    OrderedMap2.prototype.remove = function remove3(k) {
      return updateOrderedMap(this, k, NOT_SET);
    };
    OrderedMap2.prototype.__iterate = function __iterate2(fn, reverse3) {
      var this$1$1 = this;
      return this._list.__iterate(
        function(entry) {
          return entry && fn(entry[1], entry[0], this$1$1);
        },
        reverse3
      );
    };
    OrderedMap2.prototype.__iterator = function __iterator2(type, reverse3) {
      return this._list.fromEntrySeq().__iterator(type, reverse3);
    };
    OrderedMap2.prototype.__ensureOwner = function __ensureOwner2(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map.__ensureOwner(ownerID);
      var newList = this._list.__ensureOwner(ownerID);
      if (!ownerID) {
        if (this.size === 0) {
          return emptyOrderedMap();
        }
        this.__ownerID = ownerID;
        this.__altered = false;
        this._map = newMap;
        this._list = newList;
        return this;
      }
      return makeOrderedMap(newMap, newList, ownerID, this.__hash);
    };
    return OrderedMap2;
  })(Map2);
  OrderedMap.isOrderedMap = isOrderedMap;
  OrderedMap.prototype[IS_ORDERED_SYMBOL] = true;
  OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;
  function makeOrderedMap(map2, list, ownerID, hash2) {
    var omap = Object.create(OrderedMap.prototype);
    omap.size = map2 ? map2.size : 0;
    omap._map = map2;
    omap._list = list;
    omap.__ownerID = ownerID;
    omap.__hash = hash2;
    omap.__altered = false;
    return omap;
  }
  var EMPTY_ORDERED_MAP;
  function emptyOrderedMap() {
    return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()));
  }
  function updateOrderedMap(omap, k, v) {
    var map2 = omap._map;
    var list = omap._list;
    var i = map2.get(k);
    var has5 = i !== void 0;
    var newMap;
    var newList;
    if (v === NOT_SET) {
      if (!has5) {
        return omap;
      }
      if (list.size >= SIZE && list.size >= map2.size * 2) {
        newList = list.filter(function(entry, idx) {
          return entry !== void 0 && i !== idx;
        });
        newMap = newList.toKeyedSeq().map(function(entry) {
          return entry[0];
        }).flip().toMap();
        if (omap.__ownerID) {
          newMap.__ownerID = newList.__ownerID = omap.__ownerID;
        }
      } else {
        newMap = map2.remove(k);
        newList = i === list.size - 1 ? list.pop() : list.set(i, void 0);
      }
    } else if (has5) {
      if (v === list.get(i)[1]) {
        return omap;
      }
      newMap = map2;
      newList = list.set(i, [k, v]);
    } else {
      newMap = map2.set(k, list.size);
      newList = list.set(list.size, [k, v]);
    }
    if (omap.__ownerID) {
      omap.size = newMap.size;
      omap._map = newMap;
      omap._list = newList;
      omap.__hash = void 0;
      omap.__altered = true;
      return omap;
    }
    return makeOrderedMap(newMap, newList);
  }
  var IS_STACK_SYMBOL = "@@__IMMUTABLE_STACK__@@";
  function isStack(maybeStack) {
    return Boolean(maybeStack && // @ts-expect-error: maybeStack is typed as `{}`, need to change in 6.0 to `maybeStack && typeof maybeStack === 'object' && MAYBE_STACK_SYMBOL in maybeStack`
    maybeStack[IS_STACK_SYMBOL]);
  }
  var Stack = /* @__PURE__ */ (function(IndexedCollection2) {
    function Stack2(value) {
      return value === void 0 || value === null ? emptyStack() : isStack(value) ? value : emptyStack().pushAll(value);
    }
    if (IndexedCollection2) Stack2.__proto__ = IndexedCollection2;
    Stack2.prototype = Object.create(IndexedCollection2 && IndexedCollection2.prototype);
    Stack2.prototype.constructor = Stack2;
    Stack2.of = function of() {
      return this(arguments);
    };
    Stack2.prototype.toString = function toString5() {
      return this.__toString("Stack [", "]");
    };
    Stack2.prototype.get = function get11(index, notSetValue) {
      var head = this._head;
      index = wrapIndex(this, index);
      while (head && index--) {
        head = head.next;
      }
      return head ? head.value : notSetValue;
    };
    Stack2.prototype.peek = function peek() {
      return this._head && this._head.value;
    };
    Stack2.prototype.push = function push() {
      var arguments$1 = arguments;
      if (arguments.length === 0) {
        return this;
      }
      var newSize = this.size + arguments.length;
      var head = this._head;
      for (var ii = arguments.length - 1; ii >= 0; ii--) {
        head = {
          value: arguments$1[ii],
          next: head
        };
      }
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = void 0;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };
    Stack2.prototype.pushAll = function pushAll(iter) {
      iter = IndexedCollection2(iter);
      if (iter.size === 0) {
        return this;
      }
      if (this.size === 0 && isStack(iter)) {
        return iter;
      }
      assertNotInfinite(iter.size);
      var newSize = this.size;
      var head = this._head;
      iter.__iterate(
        function(value) {
          newSize++;
          head = {
            value,
            next: head
          };
        },
        /* reverse */
        true
      );
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = void 0;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };
    Stack2.prototype.pop = function pop() {
      return this.slice(1);
    };
    Stack2.prototype.clear = function clear2() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._head = void 0;
        this.__hash = void 0;
        this.__altered = true;
        return this;
      }
      return emptyStack();
    };
    Stack2.prototype.slice = function slice3(begin, end) {
      if (wholeSlice(begin, end, this.size)) {
        return this;
      }
      var resolvedBegin = resolveBegin(begin, this.size);
      var resolvedEnd = resolveEnd(end, this.size);
      if (resolvedEnd !== this.size) {
        return IndexedCollection2.prototype.slice.call(this, begin, end);
      }
      var newSize = this.size - resolvedBegin;
      var head = this._head;
      while (resolvedBegin--) {
        head = head.next;
      }
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = void 0;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };
    Stack2.prototype.__ensureOwner = function __ensureOwner2(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        if (this.size === 0) {
          return emptyStack();
        }
        this.__ownerID = ownerID;
        this.__altered = false;
        return this;
      }
      return makeStack(this.size, this._head, ownerID, this.__hash);
    };
    Stack2.prototype.__iterate = function __iterate2(fn, reverse3) {
      var this$1$1 = this;
      if (reverse3) {
        return new ArraySeq(this.toArray()).__iterate(
          function(v, k) {
            return fn(v, k, this$1$1);
          },
          reverse3
        );
      }
      var iterations = 0;
      var node = this._head;
      while (node) {
        if (fn(node.value, iterations++, this) === false) {
          break;
        }
        node = node.next;
      }
      return iterations;
    };
    Stack2.prototype.__iterator = function __iterator2(type, reverse3) {
      if (reverse3) {
        return new ArraySeq(this.toArray()).__iterator(type, reverse3);
      }
      var iterations = 0;
      var node = this._head;
      return new Iterator(function() {
        if (node) {
          var value = node.value;
          node = node.next;
          return iteratorValue(type, iterations++, value);
        }
        return iteratorDone();
      });
    };
    return Stack2;
  })(IndexedCollection);
  Stack.isStack = isStack;
  var StackPrototype = Stack.prototype;
  StackPrototype[IS_STACK_SYMBOL] = true;
  StackPrototype.shift = StackPrototype.pop;
  StackPrototype.unshift = StackPrototype.push;
  StackPrototype.unshiftAll = StackPrototype.pushAll;
  StackPrototype.withMutations = withMutations;
  StackPrototype.wasAltered = wasAltered;
  StackPrototype.asImmutable = asImmutable;
  StackPrototype["@@transducer/init"] = StackPrototype.asMutable = asMutable;
  StackPrototype["@@transducer/step"] = function(result, arr) {
    return result.unshift(arr);
  };
  StackPrototype["@@transducer/result"] = function(obj) {
    return obj.asImmutable();
  };
  function makeStack(size, head, ownerID, hash2) {
    var map2 = Object.create(StackPrototype);
    map2.size = size;
    map2._head = head;
    map2.__ownerID = ownerID;
    map2.__hash = hash2;
    map2.__altered = false;
    return map2;
  }
  var EMPTY_STACK;
  function emptyStack() {
    return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
  }
  function reduce(collection, reducer, reduction, context, useFirst, reverse3) {
    assertNotInfinite(collection.size);
    collection.__iterate(function(v, k, c) {
      if (useFirst) {
        useFirst = false;
        reduction = v;
      } else {
        reduction = reducer.call(context, reduction, v, k, c);
      }
    }, reverse3);
    return reduction;
  }
  function keyMapper(v, k) {
    return k;
  }
  function entryMapper(v, k) {
    return [k, v];
  }
  function not(predicate) {
    return function() {
      var args = [], len = arguments.length;
      while (len--) args[len] = arguments[len];
      return !predicate.apply(this, args);
    };
  }
  function neg(predicate) {
    return function() {
      var args = [], len = arguments.length;
      while (len--) args[len] = arguments[len];
      return -predicate.apply(this, args);
    };
  }
  function defaultNegComparator(a, b) {
    return a < b ? 1 : a > b ? -1 : 0;
  }
  function deepEqual(a, b) {
    if (a === b) {
      return true;
    }
    if (!isCollection(b) || // @ts-expect-error size should exists on Collection
    a.size !== void 0 && b.size !== void 0 && a.size !== b.size || // @ts-expect-error __hash exists on Collection
    a.__hash !== void 0 && // @ts-expect-error __hash exists on Collection
    b.__hash !== void 0 && // @ts-expect-error __hash exists on Collection
    a.__hash !== b.__hash || isKeyed(a) !== isKeyed(b) || isIndexed(a) !== isIndexed(b) || // @ts-expect-error Range extends Collection, which implements [Symbol.iterator], so it is valid
    isOrdered(a) !== isOrdered(b)) {
      return false;
    }
    if (a.size === 0 && b.size === 0) {
      return true;
    }
    var notAssociative = !isAssociative(a);
    if (isOrdered(a)) {
      var entries3 = a.entries();
      return b.every(function(v, k) {
        var entry = entries3.next().value;
        return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
      }) && entries3.next().done;
    }
    var flipped = false;
    if (a.size === void 0) {
      if (b.size === void 0) {
        if (typeof a.cacheResult === "function") {
          a.cacheResult();
        }
      } else {
        flipped = true;
        var _ = a;
        a = b;
        b = _;
      }
    }
    var allEqual = true;
    var bSize = (
      // @ts-expect-error b is Range | Repeat | Collection<unknown, unknown> as it may have been flipped, and __iterate is valid
      b.__iterate(function(v, k) {
        if (notAssociative ? (
          // @ts-expect-error has exists on Collection
          !a.has(v)
        ) : flipped ? (
          // @ts-expect-error type of `get` does not "catch" the version with `notSetValue`
          !is(v, a.get(k, NOT_SET))
        ) : (
          // @ts-expect-error type of `get` does not "catch" the version with `notSetValue`
          !is(a.get(k, NOT_SET), v)
        )) {
          allEqual = false;
          return false;
        }
      })
    );
    return allEqual && // @ts-expect-error size should exists on Collection
    a.size === bSize;
  }
  var Range = /* @__PURE__ */ (function(IndexedSeq2) {
    function Range2(start2, end, step) {
      if (step === void 0) step = 1;
      if (!(this instanceof Range2)) {
        return new Range2(start2, end, step);
      }
      invariant(step !== 0, "Cannot step a Range by 0");
      invariant(
        start2 !== void 0,
        "You must define a start value when using Range"
      );
      invariant(
        end !== void 0,
        "You must define an end value when using Range"
      );
      step = Math.abs(step);
      if (end < start2) {
        step = -step;
      }
      this._start = start2;
      this._end = end;
      this._step = step;
      this.size = Math.max(0, Math.ceil((end - start2) / step - 1) + 1);
      if (this.size === 0) {
        if (EMPTY_RANGE) {
          return EMPTY_RANGE;
        }
        EMPTY_RANGE = this;
      }
    }
    if (IndexedSeq2) Range2.__proto__ = IndexedSeq2;
    Range2.prototype = Object.create(IndexedSeq2 && IndexedSeq2.prototype);
    Range2.prototype.constructor = Range2;
    Range2.prototype.toString = function toString5() {
      return this.size === 0 ? "Range []" : "Range [ " + this._start + "..." + this._end + (this._step !== 1 ? " by " + this._step : "") + " ]";
    };
    Range2.prototype.get = function get11(index, notSetValue) {
      return this.has(index) ? this._start + wrapIndex(this, index) * this._step : notSetValue;
    };
    Range2.prototype.includes = function includes3(searchValue) {
      var possibleIndex = (searchValue - this._start) / this._step;
      return possibleIndex >= 0 && possibleIndex < this.size && possibleIndex === Math.floor(possibleIndex);
    };
    Range2.prototype.slice = function slice3(begin, end) {
      if (wholeSlice(begin, end, this.size)) {
        return this;
      }
      begin = resolveBegin(begin, this.size);
      end = resolveEnd(end, this.size);
      if (end <= begin) {
        return new Range2(0, 0);
      }
      return new Range2(
        this.get(begin, this._end),
        this.get(end, this._end),
        this._step
      );
    };
    Range2.prototype.indexOf = function indexOf3(searchValue) {
      var offsetValue = searchValue - this._start;
      if (offsetValue % this._step === 0) {
        var index = offsetValue / this._step;
        if (index >= 0 && index < this.size) {
          return index;
        }
      }
      return -1;
    };
    Range2.prototype.lastIndexOf = function lastIndexOf2(searchValue) {
      return this.indexOf(searchValue);
    };
    Range2.prototype.__iterate = function __iterate2(fn, reverse3) {
      var size = this.size;
      var step = this._step;
      var value = reverse3 ? this._start + (size - 1) * step : this._start;
      var i = 0;
      while (i !== size) {
        if (fn(value, reverse3 ? size - ++i : i++, this) === false) {
          break;
        }
        value += reverse3 ? -step : step;
      }
      return i;
    };
    Range2.prototype.__iterator = function __iterator2(type, reverse3) {
      var size = this.size;
      var step = this._step;
      var value = reverse3 ? this._start + (size - 1) * step : this._start;
      var i = 0;
      return new Iterator(function() {
        if (i === size) {
          return iteratorDone();
        }
        var v = value;
        value += reverse3 ? -step : step;
        return iteratorValue(type, reverse3 ? size - ++i : i++, v);
      });
    };
    Range2.prototype.equals = function equals3(other) {
      return other instanceof Range2 ? this._start === other._start && this._end === other._end && this._step === other._step : deepEqual(this, other);
    };
    return Range2;
  })(IndexedSeq);
  var EMPTY_RANGE;
  var IS_SET_SYMBOL = "@@__IMMUTABLE_SET__@@";
  function isSet(maybeSet) {
    return Boolean(maybeSet && // @ts-expect-error: maybeSet is typed as `{}`,  need to change in 6.0 to `maybeSeq && typeof maybeSet === 'object' && MAYBE_SET_SYMBOL in maybeSet`
    maybeSet[IS_SET_SYMBOL]);
  }
  var Set = /* @__PURE__ */ (function(SetCollection2) {
    function Set2(value) {
      return value === void 0 || value === null ? emptySet() : isSet(value) && !isOrdered(value) ? value : emptySet().withMutations(function(set3) {
        var iter = SetCollection2(value);
        assertNotInfinite(iter.size);
        iter.forEach(function(v) {
          return set3.add(v);
        });
      });
    }
    if (SetCollection2) Set2.__proto__ = SetCollection2;
    Set2.prototype = Object.create(SetCollection2 && SetCollection2.prototype);
    Set2.prototype.constructor = Set2;
    Set2.of = function of() {
      return this(arguments);
    };
    Set2.fromKeys = function fromKeys(value) {
      return this(KeyedCollection(value).keySeq());
    };
    Set2.intersect = function intersect(sets) {
      sets = Collection(sets).toArray();
      return sets.length ? SetPrototype.intersect.apply(Set2(sets.pop()), sets) : emptySet();
    };
    Set2.union = function union(sets) {
      sets = Collection(sets).toArray();
      return sets.length ? SetPrototype.union.apply(Set2(sets.pop()), sets) : emptySet();
    };
    Set2.prototype.toString = function toString5() {
      return this.__toString("Set {", "}");
    };
    Set2.prototype.has = function has5(value) {
      return this._map.has(value);
    };
    Set2.prototype.add = function add(value) {
      return updateSet(this, this._map.set(value, value));
    };
    Set2.prototype.remove = function remove3(value) {
      return updateSet(this, this._map.remove(value));
    };
    Set2.prototype.clear = function clear2() {
      return updateSet(this, this._map.clear());
    };
    Set2.prototype.map = function map2(mapper, context) {
      var this$1$1 = this;
      var didChanges = false;
      var newMap = updateSet(
        this,
        this._map.mapEntries(function(ref) {
          var v = ref[1];
          var mapped = mapper.call(context, v, v, this$1$1);
          if (mapped !== v) {
            didChanges = true;
          }
          return [mapped, mapped];
        }, context)
      );
      return didChanges ? newMap : this;
    };
    Set2.prototype.union = function union() {
      var iters = [], len = arguments.length;
      while (len--) iters[len] = arguments[len];
      iters = iters.filter(function(x) {
        return x.size !== 0;
      });
      if (iters.length === 0) {
        return this;
      }
      if (this.size === 0 && !this.__ownerID && iters.length === 1) {
        return this.constructor(iters[0]);
      }
      return this.withMutations(function(set3) {
        for (var ii = 0; ii < iters.length; ii++) {
          if (typeof iters[ii] === "string") {
            set3.add(iters[ii]);
          } else {
            SetCollection2(iters[ii]).forEach(function(value) {
              return set3.add(value);
            });
          }
        }
      });
    };
    Set2.prototype.intersect = function intersect() {
      var iters = [], len = arguments.length;
      while (len--) iters[len] = arguments[len];
      if (iters.length === 0) {
        return this;
      }
      iters = iters.map(function(iter) {
        return SetCollection2(iter);
      });
      var toRemove = [];
      this.forEach(function(value) {
        if (!iters.every(function(iter) {
          return iter.includes(value);
        })) {
          toRemove.push(value);
        }
      });
      return this.withMutations(function(set3) {
        toRemove.forEach(function(value) {
          set3.remove(value);
        });
      });
    };
    Set2.prototype.subtract = function subtract() {
      var iters = [], len = arguments.length;
      while (len--) iters[len] = arguments[len];
      if (iters.length === 0) {
        return this;
      }
      iters = iters.map(function(iter) {
        return SetCollection2(iter);
      });
      var toRemove = [];
      this.forEach(function(value) {
        if (iters.some(function(iter) {
          return iter.includes(value);
        })) {
          toRemove.push(value);
        }
      });
      return this.withMutations(function(set3) {
        toRemove.forEach(function(value) {
          set3.remove(value);
        });
      });
    };
    Set2.prototype.sort = function sort2(comparator) {
      return OrderedSet(sortFactory(this, comparator));
    };
    Set2.prototype.sortBy = function sortBy2(mapper, comparator) {
      return OrderedSet(sortFactory(this, comparator, mapper));
    };
    Set2.prototype.wasAltered = function wasAltered3() {
      return this._map.wasAltered();
    };
    Set2.prototype.__iterate = function __iterate2(fn, reverse3) {
      var this$1$1 = this;
      return this._map.__iterate(function(k) {
        return fn(k, k, this$1$1);
      }, reverse3);
    };
    Set2.prototype.__iterator = function __iterator2(type, reverse3) {
      return this._map.__iterator(type, reverse3);
    };
    Set2.prototype.__ensureOwner = function __ensureOwner2(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map.__ensureOwner(ownerID);
      if (!ownerID) {
        if (this.size === 0) {
          return this.__empty();
        }
        this.__ownerID = ownerID;
        this._map = newMap;
        return this;
      }
      return this.__make(newMap, ownerID);
    };
    return Set2;
  })(SetCollection);
  Set.isSet = isSet;
  var SetPrototype = Set.prototype;
  SetPrototype[IS_SET_SYMBOL] = true;
  SetPrototype[DELETE] = SetPrototype.remove;
  SetPrototype.merge = SetPrototype.concat = SetPrototype.union;
  SetPrototype.withMutations = withMutations;
  SetPrototype.asImmutable = asImmutable;
  SetPrototype["@@transducer/init"] = SetPrototype.asMutable = asMutable;
  SetPrototype["@@transducer/step"] = function(result, arr) {
    return result.add(arr);
  };
  SetPrototype["@@transducer/result"] = function(obj) {
    return obj.asImmutable();
  };
  SetPrototype.__empty = emptySet;
  SetPrototype.__make = makeSet;
  function updateSet(set3, newMap) {
    if (set3.__ownerID) {
      set3.size = newMap.size;
      set3._map = newMap;
      return set3;
    }
    return newMap === set3._map ? set3 : newMap.size === 0 ? set3.__empty() : set3.__make(newMap);
  }
  function makeSet(map2, ownerID) {
    var set3 = Object.create(SetPrototype);
    set3.size = map2 ? map2.size : 0;
    set3._map = map2;
    set3.__ownerID = ownerID;
    return set3;
  }
  var EMPTY_SET;
  function emptySet() {
    return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
  }
  function getIn$1(collection, searchKeyPath, notSetValue) {
    var keyPath = coerceKeyPath(searchKeyPath);
    var i = 0;
    while (i !== keyPath.length) {
      collection = get6(collection, keyPath[i++], NOT_SET);
      if (collection === NOT_SET) {
        return notSetValue;
      }
    }
    return collection;
  }
  function getIn(searchKeyPath, notSetValue) {
    return getIn$1(this, searchKeyPath, notSetValue);
  }
  function hasIn$1(collection, keyPath) {
    return getIn$1(collection, keyPath, NOT_SET) !== NOT_SET;
  }
  function hasIn(searchKeyPath) {
    return hasIn$1(this, searchKeyPath);
  }
  function toObject() {
    assertNotInfinite(this.size);
    var object = {};
    this.__iterate(function(v, k) {
      if (isProtoKey(k)) {
        return;
      }
      object[k] = v;
    });
    return object;
  }
  function toJS(value) {
    if (!value || typeof value !== "object") {
      return value;
    }
    if (!isCollection(value)) {
      if (!isDataStructure(value)) {
        return value;
      }
      value = Seq(value);
    }
    if (isKeyed(value)) {
      var result$1 = {};
      value.__iterate(function(v, k) {
        if (isProtoKey(k)) {
          return;
        }
        result$1[k] = toJS(v);
      });
      return result$1;
    }
    var result = [];
    value.__iterate(function(v) {
      result.push(toJS(v));
    });
    return result;
  }
  function hashCollection(collection) {
    if (collection.size === Infinity) {
      return 0;
    }
    var ordered = isOrdered(collection);
    var keyed = isKeyed(collection);
    var h = ordered ? 1 : 0;
    collection.__iterate(keyed ? ordered ? function(v, k) {
      h = 31 * h + hashMerge(hash(v), hash(k)) | 0;
    } : function(v, k) {
      h = h + hashMerge(hash(v), hash(k)) | 0;
    } : ordered ? function(v) {
      h = 31 * h + hash(v) | 0;
    } : function(v) {
      h = h + hash(v) | 0;
    });
    return murmurHashOfSize(collection.size, h);
  }
  function murmurHashOfSize(size, h) {
    h = imul(h, 3432918353);
    h = imul(h << 15 | h >>> -15, 461845907);
    h = imul(h << 13 | h >>> -13, 5);
    h = (h + 3864292196 | 0) ^ size;
    h = imul(h ^ h >>> 16, 2246822507);
    h = imul(h ^ h >>> 13, 3266489909);
    h = smi(h ^ h >>> 16);
    return h;
  }
  function hashMerge(a, b) {
    return a ^ b + 2654435769 + (a << 6) + (a >> 2) | 0;
  }
  function mixin(ctor, methods) {
    var keyCopier = function(key) {
      ctor.prototype[key] = methods[key];
    };
    Object.keys(methods).forEach(keyCopier);
    Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(methods).forEach(keyCopier);
    return ctor;
  }
  Collection.Iterator = Iterator;
  mixin(Collection, {
    // ### Conversion to other types
    toArray: function toArray() {
      assertNotInfinite(this.size);
      var array = new Array(this.size || 0);
      var useTuples = isKeyed(this);
      var i = 0;
      this.__iterate(function(v, k) {
        array[i++] = useTuples ? [k, v] : v;
      });
      return array;
    },
    toIndexedSeq: function toIndexedSeq() {
      return new ToIndexedSequence(this);
    },
    toJS: function toJS$1() {
      return toJS(this);
    },
    toKeyedSeq: function toKeyedSeq() {
      return new ToKeyedSequence(this, true);
    },
    toMap: function toMap() {
      return Map2(this.toKeyedSeq());
    },
    toObject,
    toOrderedMap: function toOrderedMap() {
      return OrderedMap(this.toKeyedSeq());
    },
    toOrderedSet: function toOrderedSet() {
      return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
    },
    toSet: function toSet() {
      return Set(isKeyed(this) ? this.valueSeq() : this);
    },
    toSetSeq: function toSetSeq() {
      return new ToSetSequence(this);
    },
    toSeq: function toSeq() {
      return isIndexed(this) ? this.toIndexedSeq() : isKeyed(this) ? this.toKeyedSeq() : this.toSetSeq();
    },
    toStack: function toStack() {
      return Stack(isKeyed(this) ? this.valueSeq() : this);
    },
    toList: function toList() {
      return List(isKeyed(this) ? this.valueSeq() : this);
    },
    // ### Common JavaScript methods and properties
    toString: function toString3() {
      return "[Collection]";
    },
    __toString: function __toString(head, tail) {
      if (this.size === 0) {
        return head + tail;
      }
      return head + " " + this.toSeq().map(this.__toStringMapper).join(", ") + " " + tail;
    },
    // ### ES6 Collection methods (ES6 Array and Map)
    concat: function concat() {
      var values2 = [], len = arguments.length;
      while (len--) values2[len] = arguments[len];
      return reify(this, concatFactory(this, values2));
    },
    includes: function includes(searchValue) {
      return this.some(function(value) {
        return is(value, searchValue);
      });
    },
    entries: function entries() {
      return this.__iterator(ITERATE_ENTRIES);
    },
    every: function every(predicate, context) {
      assertNotInfinite(this.size);
      var returnValue = true;
      this.__iterate(function(v, k, c) {
        if (!predicate.call(context, v, k, c)) {
          returnValue = false;
          return false;
        }
      });
      return returnValue;
    },
    filter: function filter(predicate, context) {
      return reify(this, filterFactory(this, predicate, context, true));
    },
    partition: function partition(predicate, context) {
      return partitionFactory(this, predicate, context);
    },
    find: function find(predicate, context, notSetValue) {
      var entry = this.findEntry(predicate, context);
      return entry ? entry[1] : notSetValue;
    },
    forEach: function forEach2(sideEffect, context) {
      assertNotInfinite(this.size);
      return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
    },
    join: function join(separator) {
      assertNotInfinite(this.size);
      separator = separator !== void 0 ? "" + separator : ",";
      var joined = "";
      var isFirst = true;
      this.__iterate(function(v) {
        isFirst ? isFirst = false : joined += separator;
        joined += v !== null && v !== void 0 ? v.toString() : "";
      });
      return joined;
    },
    keys: function keys() {
      return this.__iterator(ITERATE_KEYS);
    },
    map: function map(mapper, context) {
      return reify(this, mapFactory(this, mapper, context));
    },
    reduce: function reduce$1(reducer, initialReduction, context) {
      return reduce(
        this,
        reducer,
        initialReduction,
        context,
        arguments.length < 2,
        false
      );
    },
    reduceRight: function reduceRight(reducer, initialReduction, context) {
      return reduce(
        this,
        reducer,
        initialReduction,
        context,
        arguments.length < 2,
        true
      );
    },
    reverse: function reverse() {
      return reify(this, reverseFactory(this, true));
    },
    slice: function slice(begin, end) {
      return reify(this, sliceFactory(this, begin, end, true));
    },
    some: function some(predicate, context) {
      assertNotInfinite(this.size);
      var returnValue = false;
      this.__iterate(function(v, k, c) {
        if (predicate.call(context, v, k, c)) {
          returnValue = true;
          return false;
        }
      });
      return returnValue;
    },
    sort: function sort(comparator) {
      return reify(this, sortFactory(this, comparator));
    },
    values: function values() {
      return this.__iterator(ITERATE_VALUES);
    },
    // ### More sequential methods
    butLast: function butLast() {
      return this.slice(0, -1);
    },
    isEmpty: function isEmpty() {
      return this.size !== void 0 ? this.size === 0 : !this.some(function() {
        return true;
      });
    },
    count: function count(predicate, context) {
      return ensureSize(
        predicate ? this.toSeq().filter(predicate, context) : this
      );
    },
    countBy: function countBy(grouper, context) {
      return countByFactory(this, grouper, context);
    },
    equals: function equals(other) {
      return deepEqual(this, other);
    },
    entrySeq: function entrySeq() {
      var collection = this;
      if (collection._cache) {
        return new ArraySeq(collection._cache);
      }
      var entriesSequence = collection.toSeq().map(entryMapper).toIndexedSeq();
      entriesSequence.fromEntrySeq = function() {
        return collection.toSeq();
      };
      return entriesSequence;
    },
    filterNot: function filterNot(predicate, context) {
      return this.filter(not(predicate), context);
    },
    findEntry: function findEntry(predicate, context, notSetValue) {
      var found = notSetValue;
      this.__iterate(function(v, k, c) {
        if (predicate.call(context, v, k, c)) {
          found = [k, v];
          return false;
        }
      });
      return found;
    },
    findKey: function findKey(predicate, context) {
      var entry = this.findEntry(predicate, context);
      return entry && entry[0];
    },
    findLast: function findLast(predicate, context, notSetValue) {
      return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
    },
    findLastEntry: function findLastEntry(predicate, context, notSetValue) {
      return this.toKeyedSeq().reverse().findEntry(predicate, context, notSetValue);
    },
    findLastKey: function findLastKey(predicate, context) {
      return this.toKeyedSeq().reverse().findKey(predicate, context);
    },
    first: function first(notSetValue) {
      return this.find(returnTrue, null, notSetValue);
    },
    flatMap: function flatMap(mapper, context) {
      return reify(this, flatMapFactory(this, mapper, context));
    },
    flatten: function flatten(depth) {
      return reify(this, flattenFactory(this, depth, true));
    },
    fromEntrySeq: function fromEntrySeq() {
      return new FromEntriesSequence(this);
    },
    get: function get7(searchKey, notSetValue) {
      return this.find(function(_, key) {
        return is(key, searchKey);
      }, void 0, notSetValue);
    },
    getIn,
    groupBy: function groupBy(grouper, context) {
      return groupByFactory(this, grouper, context);
    },
    has: function has2(searchKey) {
      return this.get(searchKey, NOT_SET) !== NOT_SET;
    },
    hasIn,
    isSubset: function isSubset(iter) {
      iter = typeof iter.includes === "function" ? iter : Collection(iter);
      return this.every(function(value) {
        return iter.includes(value);
      });
    },
    isSuperset: function isSuperset(iter) {
      iter = typeof iter.isSubset === "function" ? iter : Collection(iter);
      return iter.isSubset(this);
    },
    keyOf: function keyOf(searchValue) {
      return this.findKey(function(value) {
        return is(value, searchValue);
      });
    },
    keySeq: function keySeq() {
      return this.toSeq().map(keyMapper).toIndexedSeq();
    },
    last: function last(notSetValue) {
      return this.toSeq().reverse().first(notSetValue);
    },
    lastKeyOf: function lastKeyOf(searchValue) {
      return this.toKeyedSeq().reverse().keyOf(searchValue);
    },
    max: function max(comparator) {
      return maxFactory(this, comparator);
    },
    maxBy: function maxBy(mapper, comparator) {
      return maxFactory(this, comparator, mapper);
    },
    min: function min(comparator) {
      return maxFactory(
        this,
        comparator ? neg(comparator) : defaultNegComparator
      );
    },
    minBy: function minBy(mapper, comparator) {
      return maxFactory(
        this,
        comparator ? neg(comparator) : defaultNegComparator,
        mapper
      );
    },
    rest: function rest() {
      return this.slice(1);
    },
    skip: function skip(amount) {
      return amount === 0 ? this : this.slice(Math.max(0, amount));
    },
    skipLast: function skipLast(amount) {
      return amount === 0 ? this : this.slice(0, -Math.max(0, amount));
    },
    skipWhile: function skipWhile(predicate, context) {
      return reify(this, skipWhileFactory(this, predicate, context, true));
    },
    skipUntil: function skipUntil(predicate, context) {
      return this.skipWhile(not(predicate), context);
    },
    sortBy: function sortBy(mapper, comparator) {
      return reify(this, sortFactory(this, comparator, mapper));
    },
    take: function take(amount) {
      return this.slice(0, Math.max(0, amount));
    },
    takeLast: function takeLast(amount) {
      return this.slice(-Math.max(0, amount));
    },
    takeWhile: function takeWhile(predicate, context) {
      return reify(this, takeWhileFactory(this, predicate, context));
    },
    takeUntil: function takeUntil(predicate, context) {
      return this.takeWhile(not(predicate), context);
    },
    update: function update7(fn) {
      return fn(this);
    },
    valueSeq: function valueSeq() {
      return this.toIndexedSeq();
    },
    // ### Hashable Object
    hashCode: function hashCode() {
      return this.__hash || (this.__hash = hashCollection(this));
    }
    // ### Internal
    // abstract __iterate(fn, reverse)
    // abstract __iterator(type, reverse)
  });
  var CollectionPrototype = Collection.prototype;
  CollectionPrototype[IS_COLLECTION_SYMBOL] = true;
  CollectionPrototype[ITERATOR_SYMBOL] = CollectionPrototype.values;
  CollectionPrototype.toJSON = CollectionPrototype.toArray;
  CollectionPrototype.__toStringMapper = quoteString;
  CollectionPrototype.inspect = CollectionPrototype.toSource = function() {
    return this.toString();
  };
  CollectionPrototype.chain = CollectionPrototype.flatMap;
  CollectionPrototype.contains = CollectionPrototype.includes;
  mixin(KeyedCollection, {
    // ### More sequential methods
    flip: function flip() {
      return reify(this, flipFactory(this));
    },
    mapEntries: function mapEntries(mapper, context) {
      var this$1$1 = this;
      var iterations = 0;
      return reify(
        this,
        this.toSeq().map(function(v, k) {
          return mapper.call(context, [k, v], iterations++, this$1$1);
        }).fromEntrySeq()
      );
    },
    mapKeys: function mapKeys(mapper, context) {
      var this$1$1 = this;
      return reify(
        this,
        this.toSeq().flip().map(function(k, v) {
          return mapper.call(context, k, v, this$1$1);
        }).flip()
      );
    }
  });
  var KeyedCollectionPrototype = KeyedCollection.prototype;
  KeyedCollectionPrototype[IS_KEYED_SYMBOL] = true;
  KeyedCollectionPrototype[ITERATOR_SYMBOL] = CollectionPrototype.entries;
  KeyedCollectionPrototype.toJSON = toObject;
  KeyedCollectionPrototype.__toStringMapper = function(v, k) {
    return quoteString(k) + ": " + quoteString(v);
  };
  mixin(IndexedCollection, {
    // ### Conversion to other types
    toKeyedSeq: function toKeyedSeq2() {
      return new ToKeyedSequence(this, false);
    },
    // ### ES6 Collection methods (ES6 Array and Map)
    filter: function filter2(predicate, context) {
      return reify(this, filterFactory(this, predicate, context, false));
    },
    findIndex: function findIndex(predicate, context) {
      var entry = this.findEntry(predicate, context);
      return entry ? entry[0] : -1;
    },
    indexOf: function indexOf2(searchValue) {
      var key = this.keyOf(searchValue);
      return key === void 0 ? -1 : key;
    },
    lastIndexOf: function lastIndexOf(searchValue) {
      var key = this.lastKeyOf(searchValue);
      return key === void 0 ? -1 : key;
    },
    reverse: function reverse2() {
      return reify(this, reverseFactory(this, false));
    },
    slice: function slice2(begin, end) {
      return reify(this, sliceFactory(this, begin, end, false));
    },
    splice: function splice(index, removeNum) {
      var numArgs = arguments.length;
      removeNum = Math.max(removeNum || 0, 0);
      if (numArgs === 0 || numArgs === 2 && !removeNum) {
        return this;
      }
      index = resolveBegin(index, index < 0 ? this.count() : this.size);
      var spliced = this.slice(0, index);
      return reify(
        this,
        numArgs === 1 ? spliced : spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum))
      );
    },
    // ### More collection methods
    findLastIndex: function findLastIndex(predicate, context) {
      var entry = this.findLastEntry(predicate, context);
      return entry ? entry[0] : -1;
    },
    first: function first2(notSetValue) {
      return this.get(0, notSetValue);
    },
    flatten: function flatten2(depth) {
      return reify(this, flattenFactory(this, depth, false));
    },
    get: function get8(index, notSetValue) {
      index = wrapIndex(this, index);
      return index < 0 || this.size === Infinity || this.size !== void 0 && index > this.size ? notSetValue : this.find(function(_, key) {
        return key === index;
      }, void 0, notSetValue);
    },
    has: function has3(index) {
      index = wrapIndex(this, index);
      return index >= 0 && (this.size !== void 0 ? this.size === Infinity || index < this.size : this.find(function(_, key) {
        return key === index;
      }, void 0, NOT_SET) !== NOT_SET);
    },
    interpose: function interpose(separator) {
      return reify(this, interposeFactory(this, separator));
    },
    interleave: function interleave() {
      var collections = [this].concat(arrCopy(arguments));
      var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, collections);
      var interleaved = zipped.flatten(true);
      if (zipped.size) {
        interleaved.size = zipped.size * collections.length;
      }
      return reify(this, interleaved);
    },
    keySeq: function keySeq2() {
      return Range(0, this.size);
    },
    last: function last2(notSetValue) {
      return this.get(-1, notSetValue);
    },
    skipWhile: function skipWhile2(predicate, context) {
      return reify(this, skipWhileFactory(this, predicate, context, false));
    },
    zip: function zip() {
      var collections = [this].concat(arrCopy(arguments));
      return reify(this, zipWithFactory(this, defaultZipper, collections));
    },
    zipAll: function zipAll() {
      var collections = [this].concat(arrCopy(arguments));
      return reify(this, zipWithFactory(this, defaultZipper, collections, true));
    },
    zipWith: function zipWith(zipper) {
      var collections = arrCopy(arguments);
      collections[0] = this;
      return reify(this, zipWithFactory(this, zipper, collections));
    }
  });
  var IndexedCollectionPrototype = IndexedCollection.prototype;
  IndexedCollectionPrototype[IS_INDEXED_SYMBOL] = true;
  IndexedCollectionPrototype[IS_ORDERED_SYMBOL] = true;
  mixin(SetCollection, {
    // ### ES6 Collection methods (ES6 Array and Map)
    get: function get9(value, notSetValue) {
      return this.has(value) ? value : notSetValue;
    },
    includes: function includes2(value) {
      return this.has(value);
    },
    // ### More sequential methods
    keySeq: function keySeq3() {
      return this.valueSeq();
    }
  });
  var SetCollectionPrototype = SetCollection.prototype;
  SetCollectionPrototype.has = CollectionPrototype.includes;
  SetCollectionPrototype.contains = SetCollectionPrototype.includes;
  SetCollectionPrototype.keys = SetCollectionPrototype.values;
  mixin(KeyedSeq, KeyedCollectionPrototype);
  mixin(IndexedSeq, IndexedCollectionPrototype);
  mixin(SetSeq, SetCollectionPrototype);
  function defaultZipper() {
    return arrCopy(arguments);
  }
  function isOrderedSet(maybeOrderedSet) {
    return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
  }
  var OrderedSet = /* @__PURE__ */ (function(Set2) {
    function OrderedSet2(value) {
      return value === void 0 || value === null ? emptyOrderedSet() : isOrderedSet(value) ? value : emptyOrderedSet().withMutations(function(set3) {
        var iter = SetCollection(value);
        assertNotInfinite(iter.size);
        iter.forEach(function(v) {
          return set3.add(v);
        });
      });
    }
    if (Set2) OrderedSet2.__proto__ = Set2;
    OrderedSet2.prototype = Object.create(Set2 && Set2.prototype);
    OrderedSet2.prototype.constructor = OrderedSet2;
    OrderedSet2.of = function of() {
      return this(arguments);
    };
    OrderedSet2.fromKeys = function fromKeys(value) {
      return this(KeyedCollection(value).keySeq());
    };
    OrderedSet2.prototype.toString = function toString5() {
      return this.__toString("OrderedSet {", "}");
    };
    return OrderedSet2;
  })(Set);
  OrderedSet.isOrderedSet = isOrderedSet;
  var OrderedSetPrototype = OrderedSet.prototype;
  OrderedSetPrototype[IS_ORDERED_SYMBOL] = true;
  OrderedSetPrototype.zip = IndexedCollectionPrototype.zip;
  OrderedSetPrototype.zipWith = IndexedCollectionPrototype.zipWith;
  OrderedSetPrototype.zipAll = IndexedCollectionPrototype.zipAll;
  OrderedSetPrototype.__empty = emptyOrderedSet;
  OrderedSetPrototype.__make = makeOrderedSet;
  function makeOrderedSet(map2, ownerID) {
    var set3 = Object.create(OrderedSetPrototype);
    set3.size = map2 ? map2.size : 0;
    set3._map = map2;
    set3.__ownerID = ownerID;
    return set3;
  }
  var EMPTY_ORDERED_SET;
  function emptyOrderedSet() {
    return EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()));
  }
  function throwOnInvalidDefaultValues(defaultValues) {
    if (isRecord(defaultValues)) {
      throw new Error(
        "Can not call `Record` with an immutable Record as default values. Use a plain javascript object instead."
      );
    }
    if (isImmutable(defaultValues)) {
      throw new Error(
        "Can not call `Record` with an immutable Collection as default values. Use a plain javascript object instead."
      );
    }
    if (defaultValues === null || typeof defaultValues !== "object") {
      throw new Error(
        "Can not call `Record` with a non-object as default values. Use a plain javascript object instead."
      );
    }
  }
  var Record = function Record2(defaultValues, name) {
    var hasInitialized;
    throwOnInvalidDefaultValues(defaultValues);
    var RecordType = function Record3(values2) {
      var this$1$1 = this;
      if (values2 instanceof RecordType) {
        return values2;
      }
      if (!(this instanceof RecordType)) {
        return new RecordType(values2);
      }
      if (!hasInitialized) {
        hasInitialized = true;
        var keys2 = Object.keys(defaultValues);
        var indices = RecordTypePrototype._indices = {};
        RecordTypePrototype._name = name;
        RecordTypePrototype._keys = keys2;
        RecordTypePrototype._defaultValues = defaultValues;
        for (var i = 0; i < keys2.length; i++) {
          var propName = keys2[i];
          indices[propName] = i;
          if (RecordTypePrototype[propName]) {
            typeof console === "object" && console.warn && console.warn(
              "Cannot define " + recordName(this) + ' with property "' + propName + '" since that property name is part of the Record API.'
            );
          } else {
            setProp(RecordTypePrototype, propName);
          }
        }
      }
      this.__ownerID = void 0;
      this._values = List().withMutations(function(l) {
        l.setSize(this$1$1._keys.length);
        KeyedCollection(values2).forEach(function(v, k) {
          l.set(this$1$1._indices[k], v === this$1$1._defaultValues[k] ? void 0 : v);
        });
      });
      return this;
    };
    var RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
    RecordTypePrototype.constructor = RecordType;
    if (name) {
      RecordType.displayName = name;
    }
    return RecordType;
  };
  Record.prototype.toString = function toString4() {
    var str = recordName(this) + " { ";
    var keys2 = this._keys;
    var k;
    for (var i = 0, l = keys2.length; i !== l; i++) {
      k = keys2[i];
      str += (i ? ", " : "") + k + ": " + quoteString(this.get(k));
    }
    return str + " }";
  };
  Record.prototype.equals = function equals2(other) {
    return this === other || isRecord(other) && recordSeq(this).equals(recordSeq(other));
  };
  Record.prototype.hashCode = function hashCode2() {
    return recordSeq(this).hashCode();
  };
  Record.prototype.has = function has4(k) {
    return this._indices.hasOwnProperty(k);
  };
  Record.prototype.get = function get10(k, notSetValue) {
    if (!this.has(k)) {
      return notSetValue;
    }
    var index = this._indices[k];
    var value = this._values.get(index);
    return value === void 0 ? this._defaultValues[k] : value;
  };
  Record.prototype.set = function set2(k, v) {
    if (this.has(k)) {
      var newValues = this._values.set(
        this._indices[k],
        v === this._defaultValues[k] ? void 0 : v
      );
      if (newValues !== this._values && !this.__ownerID) {
        return makeRecord(this, newValues);
      }
    }
    return this;
  };
  Record.prototype.remove = function remove2(k) {
    return this.set(k);
  };
  Record.prototype.clear = function clear() {
    var newValues = this._values.clear().setSize(this._keys.length);
    return this.__ownerID ? this : makeRecord(this, newValues);
  };
  Record.prototype.wasAltered = function wasAltered2() {
    return this._values.wasAltered();
  };
  Record.prototype.toSeq = function toSeq2() {
    return recordSeq(this);
  };
  Record.prototype.toJS = function toJS$12() {
    return toJS(this);
  };
  Record.prototype.entries = function entries2() {
    return this.__iterator(ITERATE_ENTRIES);
  };
  Record.prototype.__iterator = function __iterator(type, reverse3) {
    return recordSeq(this).__iterator(type, reverse3);
  };
  Record.prototype.__iterate = function __iterate(fn, reverse3) {
    return recordSeq(this).__iterate(fn, reverse3);
  };
  Record.prototype.__ensureOwner = function __ensureOwner(ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }
    var newValues = this._values.__ensureOwner(ownerID);
    if (!ownerID) {
      this.__ownerID = ownerID;
      this._values = newValues;
      return this;
    }
    return makeRecord(this, newValues, ownerID);
  };
  Record.isRecord = isRecord;
  Record.getDescriptiveName = recordName;
  var RecordPrototype = Record.prototype;
  RecordPrototype[IS_RECORD_SYMBOL] = true;
  RecordPrototype[DELETE] = RecordPrototype.remove;
  RecordPrototype.deleteIn = RecordPrototype.removeIn = deleteIn;
  RecordPrototype.getIn = getIn;
  RecordPrototype.hasIn = CollectionPrototype.hasIn;
  RecordPrototype.merge = merge$1;
  RecordPrototype.mergeWith = mergeWith$1;
  RecordPrototype.mergeIn = mergeIn;
  RecordPrototype.mergeDeep = mergeDeep;
  RecordPrototype.mergeDeepWith = mergeDeepWith;
  RecordPrototype.mergeDeepIn = mergeDeepIn;
  RecordPrototype.setIn = setIn;
  RecordPrototype.update = update;
  RecordPrototype.updateIn = updateIn$1;
  RecordPrototype.withMutations = withMutations;
  RecordPrototype.asMutable = asMutable;
  RecordPrototype.asImmutable = asImmutable;
  RecordPrototype[ITERATOR_SYMBOL] = RecordPrototype.entries;
  RecordPrototype.toJSON = RecordPrototype.toObject = CollectionPrototype.toObject;
  RecordPrototype.inspect = RecordPrototype.toSource = function() {
    return this.toString();
  };
  function makeRecord(likeRecord, values2, ownerID) {
    var record = Object.create(Object.getPrototypeOf(likeRecord));
    record._values = values2;
    record.__ownerID = ownerID;
    return record;
  }
  function recordName(record) {
    return record.constructor.displayName || record.constructor.name || "Record";
  }
  function recordSeq(record) {
    return keyedSeqFromValue(record._keys.map(function(k) {
      return [k, record.get(k)];
    }));
  }
  function setProp(prototype, name) {
    try {
      Object.defineProperty(prototype, name, {
        get: function() {
          return this.get(name);
        },
        set: function(value) {
          invariant(this.__ownerID, "Cannot set on an immutable record.");
          this.set(name, value);
        }
      });
    } catch (error2) {
    }
  }

  // bot-app/src/external/bot-skeleton/utils/observer.js
  var Observer = class {
    constructor() {
      this.eam = new Map2();
    }
    register(event, _action, once, unregisterIfError, unregisterAllBefore) {
      if (unregisterAllBefore) {
        this.unregisterAll(event);
      }
      const apiError = (error2) => {
        if (error2.type === unregisterIfError.type) {
          this.unregister("api.error", apiError);
          unregisterIfError.unregister.forEach((unreg) => {
            if (unreg instanceof Array) {
              this.unregister(...unreg);
            } else {
              this.unregisterAll(unreg);
            }
          });
        }
      };
      if (unregisterIfError) {
        this.register("api.error", apiError);
      }
      const action = (...args) => {
        if (once) {
          this.unregister(event, _action);
        }
        if (unregisterIfError) {
          this.unregister("api.error", apiError);
        }
        _action(...args);
      };
      const actionList = this.eam.get(event);
      this.eam = actionList ? this.eam.set(event, actionList.push({ action, searchBy: _action })) : this.eam.set(event, new List().push({ action, searchBy: _action }));
    }
    unregister(event, f) {
      this.eam = this.eam.set(
        event,
        this.eam.get(event).filter((r) => r.searchBy !== f)
      );
    }
    isRegistered(event) {
      return this.eam.has(event);
    }
    unregisterAll(event) {
      this.eam = this.eam.delete(event);
    }
    emit(event, data) {
      if (this.eam.has(event)) {
        this.eam.get(event).forEach((action) => action.action(data));
      }
    }
    setState(state = {}) {
      this.state = { ...this.state, ...state };
    }
    getState(key) {
      return this.state?.[key];
    }
  };
  var observer = new Observer();

  // bot-app/src/external/bot-skeleton/utils/error.js
  var createError = (name, message) => {
    const e = new Error(message);
    e.name = name;
    e.code = name;
    return e;
  };

  // bot-shims/api-base-bridge.js
  var ApiBaseBridge = class {
    constructor() {
      this.api = null;
      this.token = "";
      this.account_info = {};
      this.pip_sizes = {};
      this.is_running = false;
      this.subscriptions = [];
    }
    setAdapter(adapter) {
      this.adapter = adapter;
      this.api = adapter.api;
      this.token = adapter.token || "";
      this.account_info = adapter.account_info || {};
    }
    createNewInstance() {
    }
    toggleRunButton() {
    }
    pushSubscription(sub) {
      this.subscriptions.push(sub);
    }
  };
  var api_base = new ApiBaseBridge();

  // bot-shims/shared.js
  var findValueByKeyRecursively = () => void 0;
  var formatTime = (t) => {
    if (!t) return "0s";
    const s = Math.floor(Number(t));
    if (s < 60) return s + "s";
    return Math.floor(s / 60) + "m " + s % 60 + "s";
  };
  var getRoundedNumber = (n, d) => {
    const f = Math.pow(10, d || 2);
    return Math.round(Number(n) * f) / f;
  };
  var isEmptyObject = (o) => !o || typeof o !== "object" || !Object.keys(o).length;
  var isMultiplierContract = (ct) => /MULT/i.test(ct);
  var getFormattedText = (s) => String(s);
  var sequence = (arr) => arr.reduce((p, fn) => p.then(fn), Promise.resolve());

  // bot-shims/translations.js
  var localize = (s) => typeof s === "string" ? s : "";

  // bot-app/src/external/bot-skeleton/constants/config.ts
  var CRYPTO_CURRENCIES = ["BTC", "ETH", "LTC", "BCH", "UST"];
  var config = () => ({
    lists: {
      PAYOUTTYPE: [
        // [localize('Payout'), 'payout'],
        [localize("Stake"), "stake"]
      ],
      CRYPTO_CURRENCIES,
      DETAILS: [
        [localize("deal reference id"), "1"],
        [localize("purchase price"), "2"],
        [localize("payout"), "3"],
        [localize("profit"), "4"],
        [localize("contract type"), "5"],
        [localize("entry spot time"), "6"],
        [localize("entry spot price"), "7"],
        [localize("exit spot time"), "8"],
        [localize("exit spot price"), "9"],
        [localize("barrier"), "10"],
        [localize("result"), "11"]
      ],
      CHECK_RESULT: [
        [localize("Win"), "win"],
        [localize("Loss"), "loss"]
      ],
      CHECK_DIRECTION: [
        [localize("Rise"), "rise"],
        [localize("Fall"), "fall"],
        [localize("No Change"), ""]
      ],
      BALANCE_TYPE: [
        [localize("string"), "STR"],
        [localize("number"), "NUM"]
      ],
      NOTIFICATION_TYPE: [
        [localize("green"), "success"],
        [localize("blue"), "info"],
        [localize("yellow"), "warn"],
        [localize("red"), "error"]
      ],
      NOTIFICATION_SOUND: [
        [localize("Silent"), "silent"],
        [localize("Announcement"), "announcement"],
        [localize("Earned money"), "earned-money"],
        [localize("Job done"), "job-done"],
        [localize("Error"), "error"],
        [localize("Severe error"), "severe-error"]
      ],
      CURRENCY: ["USD", "EUR", "GBP", "AUD", ...CRYPTO_CURRENCIES]
    },
    opposites: {
      ACCUMULATOR: [
        {
          ACCU: "Buy"
        }
      ],
      MULTIPLIER: [
        {
          MULTUP: "Up"
        },
        {
          MULTDOWN: "Down"
        }
      ],
      CALLPUT: [
        {
          CALL: "Rise"
        },
        {
          PUT: "Fall"
        }
      ],
      CALLPUTEQUAL: [
        {
          CALLE: "Rise Equals"
        },
        {
          PUTE: "Fall Equals"
        }
      ],
      HIGHERLOWER: [
        {
          CALL: "Higher"
        },
        {
          PUT: "Lower"
        }
      ],
      TOUCHNOTOUCH: [
        {
          ONETOUCH: "Touch"
        },
        {
          NOTOUCH: "No Touch"
        }
      ],
      ENDSINOUT: [
        {
          EXPIRYRANGE: "Ends Between"
        },
        {
          EXPIRYMISS: "Ends Outside"
        }
      ],
      STAYSINOUT: [
        {
          RANGE: "Stays Between"
        },
        {
          UPORDOWN: "Goes Outside"
        }
      ],
      ASIANS: [
        {
          ASIANU: "Asian Up"
        },
        {
          ASIAND: "Asian Down"
        }
      ],
      MATCHESDIFFERS: [
        {
          DIGITMATCH: "Matches"
        },
        {
          DIGITDIFF: "Differs"
        }
      ],
      EVENODD: [
        {
          DIGITEVEN: "Even"
        },
        {
          DIGITODD: "Odd"
        }
      ],
      OVERUNDER: [
        {
          DIGITOVER: "Over"
        },
        {
          DIGITUNDER: "Under"
        }
      ],
      HIGHLOWTICKS: [
        {
          TICKHIGH: "High Tick"
        },
        {
          TICKLOW: "Low Tick"
        }
      ],
      RESET: [
        {
          RESETCALL: "Reset Call"
        },
        {
          RESETPUT: "Reset Put"
        }
      ],
      RUNS: [
        {
          RUNHIGH: "Only Ups"
        },
        {
          RUNLOW: "Only Downs"
        }
      ],
      CALLPUTSPREAD: [
        {
          CALLSPREAD: "Call Spread"
        },
        {
          PUTSPREAD: "Put Spread"
        }
      ]
    },
    BARRIER_TYPES: [
      ["Offset +", "+"],
      ["Offset -", "-"]
    ],
    ohlcFields: [
      ["Open", "open"],
      ["High", "high"],
      ["Low", "low"],
      ["Close", "close"],
      ["Open Time", "epoch"]
    ],
    candleIntervals: [
      [localize("Default"), "default"],
      [localize("1 minute"), "60"],
      [localize("2 minutes"), "120"],
      [localize("3 minutes"), "180"],
      [localize("5 minutes"), "300"],
      [localize("10 minutes"), "600"],
      [localize("15 minutes"), "900"],
      [localize("30 minutes"), "1800"],
      [localize("1 hour"), "3600"],
      [localize("2 hours"), "7200"],
      [localize("4 hours"), "14400"],
      [localize("8 hours"), "28800"],
      [localize("1 day"), "86400"]
    ],
    mainBlocks: ["trade_definition", "before_purchase", "during_purchase", "after_purchase"],
    mandatoryMainBlocks: ["trade_definition", "purchase", "before_purchase"],
    procedureDefinitionBlocks: ["procedures_defnoreturn", "procedures_defreturn"],
    single_instance_blocks: ["trade_definition", "before_purchase", "during_purchase", "after_purchase"],
    TRADE_TYPE_TO_CONTRACT_CATEGORY_MAPPING: {
      callput: ["callput", "higherlower"],
      asian: ["asians"],
      digits: ["matchesdiffers", "evenodd", "overunder"]
    },
    TRADE_TYPE_CATEGORIES: {
      multiplier: ["multiplier"],
      callput: ["callput", "callputequal", "higherlower"],
      touchnotouch: ["touchnotouch"],
      inout: ["endsinout", "staysinout"],
      asian: ["asians"],
      digits: ["matchesdiffers", "evenodd", "overunder"],
      reset: ["reset"],
      callputspread: ["callputspread"],
      highlowticks: ["highlowticks"],
      runs: ["runs"],
      accumulator: ["accumulator"]
    },
    TRADE_TYPE_CATEGORY_NAMES: {
      callput: "Up/Down",
      touchnotouch: "Touch/No Touch",
      inout: "In/Out",
      asian: "Asians",
      digits: "Digits",
      reset: "Reset Call/Reset Put",
      callputspread: "Call Spread/Put Spread",
      highlowticks: "High/Low Ticks",
      runs: "Only Ups/Only Downs",
      multiplier: "Multipliers",
      accumulator: "Accumulators"
    },
    BARRIER_CATEGORIES: {
      euro_atm: ["callput", "callputequal"],
      euro_non_atm: ["endsinout", "higherlower", "callputspread"],
      american: ["staysinout", "touchnotouch", "highlowticks", "runs", "multiplier"],
      non_financial: ["digits", "overunder", "evenodd", "matchesdiffers"],
      asian: ["asians"],
      reset: ["reset"],
      lookback: ["lookback"],
      accumulator: ["accumulator"]
    },
    DEFAULT_DURATION_DROPDOWN_OPTIONS: [
      [localize("Ticks"), "t"],
      [localize("Seconds"), "s"],
      [localize("Minutes"), "m"],
      [localize("Hours"), "h"],
      [localize("Days"), "d"]
    ],
    BARRIER_LABELS: [localize("High barrier"), localize("Low barrier")],
    ABSOLUTE_BARRIER_DROPDOWN_OPTION: [[localize("Absolute"), "absolute"]],
    NOT_AVAILABLE_DROPDOWN_OPTIONS: [[localize("Not available"), "na"]],
    NOT_AVAILABLE_DURATIONS: [{ display: localize("Not available"), unit: "na", min: 0 }],
    BARRIER_TRADE_TYPES: ["higherlower", "touchnotouch", "endsinout", "staysinout", "callputspread"],
    PREDICTION_TRADE_TYPES: ["matchesdiffers", "overunder", "highlowticks"],
    DIGIT_CATEGORIES: ["digits", "highlowticks"],
    INDEPEDENT_BLOCKS: ["block_holder", "tick_analysis", "loader", "procedures_defreturn", "procedures_defnoreturn"],
    bbResult: [
      [localize("upper"), "1"],
      [localize("middle"), "0"],
      [localize("lower"), "2"]
    ],
    macdFields: [
      [localize("Histogram"), "0"],
      [localize("MACD"), "1"],
      [localize("Signal"), "2"]
    ],
    GOOGLE_DRIVE: {
      // Full drive access required to allow users to load existing strategy files
      // that may not have been created by this application. The previous scope
      // 'drive.file' only allowed access to files created by the app, which
      // prevented users from loading their existing XML strategy files.
      // This broader scope enables users to access and load any XML files
      // from their Google Drive for importing strategies.
      SCOPE: "https://www.googleapis.com/auth/drive",
      DISCOVERY_DOCS: "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"
    },
    workspaces: {
      flyoutWorkspacesStartScale: 0.7,
      mainWorkspaceStartScale: 0.9,
      previewWorkspaceStartScale: 0.6,
      indentWorkspace: { x: 0, y: 60 }
    },
    strategies: {
      martingale: {
        index: 0,
        label: "Martingale",
        description: localize(
          "The Martingale Strategy is a classic trading technique that has been used for more than a hundred years, popularised by the French mathematician Paul Pierre Levy in the 18th century."
        )
      },
      dalembert: {
        index: 1,
        label: "D'Alembert",
        description: localize(
          "The concept of the D\u2019Alembert Strategy is said to be similar to the Martingale Strategy where you will increase your contract size after a loss. With the D\u2019Alembert Strategy, you will also decrease your contract size after a successful trade."
        )
      },
      oscars_grind: {
        index: 2,
        label: "Oscar's Grind",
        description: localize(
          "The Oscar's Grind Strategy is a low-risk positive progression strategy that first appeared in 1965. By using this strategy, the size of your contract will increase after successful trades, but remains unchanged after unsuccessful trades."
        )
      }
    },
    default_file_name: localize("Untitled Bot"),
    DISABLED_SYMBOLS: ["frxGBPNOK", "frxUSDNOK", "frxUSDNEK", "frxUSDSEK"],
    DISABLED_SUBMARKETS: ["energy"],
    QUICK_STRATEGY: {
      DISABLED: {
        SYMBOLS: ["1HZ150V", "1HZ250V"],
        SUBMARKETS: ["crash_index", "non_stable_coin", "step_index"],
        BARRIER_TRADE_TYPES: [
          "higherlower",
          "touchnotouch",
          "endsinout",
          "staysinout",
          "callputspread",
          "accumulator"
        ],
        PREDICTION_TRADE_TYPES: ["highlowticks"]
      },
      DEFAULT: {
        symbol: "1HZ100V",
        tradetype: "callput",
        durationtype: "t",
        size: 1,
        unit: 1,
        prediction: 0
      }
    }
  });

  // bot-app/src/external/bot-skeleton/constants/messages.ts
  var unrecoverable_errors = [
    "InsufficientBalance",
    "CustomLimitsReached",
    "OfferingsValidationError",
    "InvalidCurrency",
    "ContractBuyValidationError",
    "NotDefaultCurrency",
    "PleaseAuthenticate",
    "FinancialAssessmentRequired",
    "PositiveIntegerExpected",
    "OptionError",
    "IncorrectPayoutDecimals",
    "IncorrectStakeDecimals",
    "NoMFProfessionalClient",
    "AuthorizationRequired",
    "InvalidToken",
    "DailyLossLimitExceeded",
    "InputValidationFailed",
    "ClientUnwelcome",
    "PriceMoved"
  ];

  // bot-app/src/external/bot-skeleton/constants/save-type.ts
  var save_types = Object.freeze({
    UNSAVED: "unsaved",
    LOCAL: "local",
    GOOGLE_DRIVE: "google drive"
  });

  // bot-app/src/external/bot-skeleton/services/tradeEngine/utils/broadcast.js
  var contract = (c) => observer.emit("bot.contract", c);
  var contractStatus = (c) => observer.emit("contract.status", c);
  var info = (i) => observer.emit("bot.info", i);
  var notify = (className, message) => observer.emit("ui.log.notify", { className, message, sound: config().lists.NOTIFICATION_SOUND[0][1] });
  var log = (log_type, extra) => observer.emit("ui.log.success", { log_type, extra });
  var error = (message) => observer.emit("ui.log.error", message);

  // bot-app/src/external/bot-skeleton/services/tradeEngine/utils/helpers.js
  var tradeOptionToProposal = (trade_option, purchase_reference2) => trade_option.contractTypes.map((type) => {
    const proposal = {
      amount: trade_option.amount,
      basis: trade_option.basis,
      contract_type: type,
      currency: trade_option.currency,
      duration: trade_option.duration,
      duration_unit: trade_option.duration_unit,
      multiplier: trade_option.multiplier,
      passthrough: {
        contract_type: type,
        purchase_reference: purchase_reference2
      },
      proposal: 1,
      underlying_symbol: trade_option.symbol
    };
    if (trade_option.prediction !== void 0) {
      proposal.selected_tick = trade_option.prediction;
    }
    if (!["TICKLOW", "TICKHIGH"].includes(type) && trade_option.prediction !== void 0) {
      proposal.barrier = trade_option.prediction;
    } else if (trade_option.barrierOffset !== void 0) {
      proposal.barrier = trade_option.barrierOffset;
    }
    if (trade_option.secondBarrierOffset !== void 0) {
      proposal.barrier2 = trade_option.secondBarrierOffset;
    }
    if (["MULTUP", "MULTDOWN"].includes(type)) {
      proposal.duration = void 0;
      proposal.duration_unit = void 0;
    }
    if (!isEmptyObject(trade_option.limit_order)) {
      proposal.limit_order = trade_option.limit_order;
    }
    return proposal;
  });
  var tradeOptionToBuy = (contract_type, trade_option) => {
    const buy = {
      buy: "1",
      price: trade_option.amount,
      parameters: {
        amount: trade_option.amount,
        basis: trade_option.basis,
        contract_type,
        currency: trade_option.currency,
        duration: trade_option.duration,
        duration_unit: trade_option.duration_unit,
        multiplier: trade_option.multiplier,
        underlying_symbol: trade_option.symbol
      }
    };
    if (trade_option.prediction !== void 0) {
      buy.parameters.selected_tick = trade_option.prediction;
    }
    if (!["TICKLOW", "TICKHIGH"].includes(contract_type) && trade_option.prediction !== void 0) {
      buy.parameters.barrier = trade_option.prediction;
    } else if (trade_option.barrierOffset !== void 0) {
      buy.parameters.barrier = trade_option.barrierOffset;
    }
    if (trade_option.secondBarrierOffset !== void 0) {
      buy.parameters.barrier2 = trade_option.secondBarrierOffset;
    }
    if (!isEmptyObject(trade_option.app_markup_percentage)) {
      buy.parameters.app_markup_percentage = trade_option.app_markup_percentage;
    }
    if (!isEmptyObject(trade_option.barrier_range)) {
      buy.parameters.barrier_range = trade_option.barrier_range;
    }
    if (!isEmptyObject(trade_option.date_expiry)) {
      buy.parameters.date_expiry = trade_option.date_expiry;
    }
    if (!isEmptyObject(trade_option.date_start)) {
      buy.parameters.date_start = trade_option.date_start;
    }
    if (!isEmptyObject(trade_option.product_type)) {
      buy.parameters.product_type = trade_option.product_type;
    }
    if (!isEmptyObject(trade_option.trading_period_start)) {
      buy.parameters.trading_period_start = trade_option.trading_period_start;
    }
    if (!isEmptyObject(trade_option.limit_order)) {
      buy.parameters.limit_order = trade_option.limit_order;
    }
    if (["MULTUP", "MULTDOWN"].includes(contract_type)) {
      buy.parameters.duration = void 0;
      buy.parameters.duration_unit = void 0;
      buy.parameters.multiplier = trade_option.multiplier;
    }
    if (["ACCU"].includes(contract_type)) {
      buy.parameters.duration = void 0;
      buy.parameters.duration_unit = void 0;
      buy.parameters.growth_rate = trade_option.growth_rate;
    }
    return buy;
  };
  var getDirection = (ticks) => {
    const { length } = ticks;
    const [tickOld, tickNew] = ticks.slice(-2);
    let direction = "";
    if (length >= 2) {
      direction = tickOld.quote < tickNew.quote ? "rise" : direction;
      direction = tickOld.quote > tickNew.quote ? "fall" : direction;
    }
    return direction;
  };
  var getLastDigit = (tick) => {
    let number_string = tick;
    if (typeof number_string === "number") {
      number_string = String(number_string);
    }
    return Number(number_string[number_string.length - 1]);
  };
  var getBackoffDelayInMs = (error_obj, delay_index) => {
    const base_delay = 2.5;
    const max_delay = 15;
    const next_delay_in_seconds = Math.min(base_delay * delay_index, max_delay);
    const { error: error2 = {}, msg_type = "", echo_req = {} } = error_obj;
    const { code = "", message = "" } = error2;
    let message_to_print = "";
    const trade_type_block = Blockly.derivWorkspace.getAllBlocks(true).find((block) => block.type === "trade_definition_tradetype");
    const selected_trade_type = trade_type_block?.getFieldValue("TRADETYPECAT_LIST") || "";
    const { TRADE_TYPE_CATEGORY_NAMES } = config();
    if (code) {
      const error_details = {
        message_type: error2.msg_type,
        delay: next_delay_in_seconds,
        request: echo_req?.req_id,
        message: message || localize("The market is closed"),
        trade_type: TRADE_TYPE_CATEGORY_NAMES?.[selected_trade_type] ?? ""
      };
      switch (code) {
        case "RateLimit":
          message_to_print = getLocalizedErrorMessage("RateLimit", error_details);
          break;
        case "DisconnectError":
          message_to_print = getLocalizedErrorMessage("DisconnectError", error_details);
          break;
        case "MarketIsClosed":
          message_to_print = getLocalizedErrorMessage("MarketIsClosed", error_details);
          break;
        default:
          message_to_print = getLocalizedErrorMessage("RequestFailed", {
            message_type: msg_type || localize("unknown"),
            delay: next_delay_in_seconds
          });
          break;
      }
    } else {
      message_to_print = getLocalizedErrorMessage("RequestFailed", {
        message_type: msg_type || localize("unknown"),
        delay: next_delay_in_seconds
      });
    }
    error(message_to_print);
    return next_delay_in_seconds * 1e3;
  };
  var updateErrorMessage = (error2) => {
    if (error2.error?.code === "InputValidationFailed") {
      if (error2.error.details?.duration) {
        error2.error.message = getLocalizedErrorMessage("DurationValidationFailed");
      }
      if (error2.error.details?.amount) {
        error2.error.message = getLocalizedErrorMessage("AmountValidationFailed");
      }
    }
  };
  var shouldThrowError = (error2, errors_to_ignore = []) => {
    if (!error2.error) {
      return false;
    }
    const default_errors_to_ignore = [
      "CallError",
      "WrongResponse",
      "GetProposalFailure",
      "RateLimit",
      "DisconnectError",
      "MarketIsClosed"
    ];
    updateErrorMessage(error2);
    const is_ignorable_error = errors_to_ignore.concat(default_errors_to_ignore).includes(error2?.error?.code ?? error2?.name);
    return !is_ignorable_error;
  };
  var recoverFromError = (promiseFn, recoverFn, errors_to_ignore, delay_index, api_base2) => {
    return new Promise((resolve, reject) => {
      const promise = promiseFn();
      if (promise) {
        promise.then(resolve).catch((error2) => {
          if (shouldThrowError(error2, errors_to_ignore) || api_base2 && !api_base2.is_running) {
            if (error2?.error?.code === "OpenPositionLimitExceeded") {
              setTimeout(() => {
                observer.emit("bot.stop_button_click");
              }, 500);
            }
            reject(error2);
            return;
          }
          recoverFn(
            error2?.error?.code ?? error2?.name,
            () => new Promise((recoverResolve) => {
              const getGlobalTimeouts = () => observer.getState("global_timeouts") ?? [];
              const timeout = setTimeout(
                () => {
                  const global_timeouts2 = getGlobalTimeouts();
                  delete global_timeouts2[timeout];
                  observer.setState(global_timeouts2);
                  recoverResolve();
                },
                getBackoffDelayInMs(error2, delay_index)
              );
              const global_timeouts = getGlobalTimeouts();
              const cancellable_timeouts = ["buy"];
              const msg_type = findValueByKeyRecursively(error2, "msg_type");
              global_timeouts[timeout] = {
                is_cancellable: cancellable_timeouts.includes(msg_type),
                msg_type
              };
              observer.setState({ global_timeouts });
            })
          );
        });
      } else {
        resolve();
      }
    });
  };
  var doUntilDone = (promiseFn, errors_to_ignore, api_base2) => {
    let delay_index = 1;
    return new Promise((resolve, reject) => {
      const recoverFn = (error_code, makeDelay) => {
        delay_index++;
        makeDelay().then(repeatFn);
      };
      const repeatFn = () => {
        recoverFromError(promiseFn, recoverFn, errors_to_ignore, delay_index, api_base2).then(resolve).catch(reject);
      };
      repeatFn();
    });
  };
  var createDetails = (contract2) => {
    const { sell_price: sellPrice, buy_price: buyPrice, currency } = contract2;
    const profit = getRoundedNumber(sellPrice - buyPrice, currency);
    const result = profit < 0 ? "loss" : "win";
    return [
      contract2.transaction_ids.buy,
      +contract2.buy_price,
      +contract2.sell_price,
      profit,
      contract2.contract_type,
      formatTime(parseInt(`${contract2.entry_tick_time}000`), "HH:mm:ss"),
      +contract2.entry_tick,
      formatTime(parseInt(`${contract2.exit_tick_time}000`), "HH:mm:ss"),
      +contract2.exit_tick,
      +(contract2.barrier ? contract2.barrier : 0),
      result
    ];
  };
  var getUUID = () => `${(/* @__PURE__ */ new Date()).getTime() * Math.random()}`;
  var hasBlockOfType = (targetType, workspace) => {
    const allBlocks = workspace.getAllBlocks();
    return allBlocks.some((block) => block.type === targetType && !!block.parentBlock_);
  };
  var checkBlocksForProposalRequest = () => {
    const workspace = window.Blockly.derivWorkspace;
    const has_payout_block = hasBlockOfType("payout", workspace);
    return {
      has_payout_block,
      is_basis_payout: false
    };
  };
  var socket_state = {
    [WebSocket.CONNECTING]: "Connecting",
    [WebSocket.OPEN]: "Connected",
    [WebSocket.CLOSING]: "Closing",
    [WebSocket.CLOSED]: "Closed"
  };

  // bot-app/src/external/bot-skeleton/services/tradeEngine/utils/sanitize.js
  var isPositiveNumber = (num) => Number.isFinite(num) && num > 0;
  var isPositiveInteger = (num) => isPositiveNumber(num) && Number.isInteger(num);
  var expectPositiveInteger = (num, msg) => {
    if (!isPositiveInteger(num)) {
      throw createError("PositiveIntegerExpected", msg);
    }
    return num;
  };
  var expectOptions = (options) => {
    const { symbol, contractTypes } = options;
    if (!symbol) {
      throw createError("OptionError", localize("Underlying market is not selected"));
    }
    if (!contractTypes[0]) {
      throw createError("OptionError", localize("Contract type is not selected"));
    }
  };
  var expectInitArg = (args) => {
    const [token, options] = args;
    if (!token) {
      throw createError("LoginError", localize("Please login"));
    }
    expectOptions(options);
    return args;
  };
  var isCandle = (candle) => candle instanceof Object && ["open", "high", "low", "close"].every((key) => isPositiveNumber(candle[key])) && isPositiveInteger(candle.epoch);
  var expectCandle = (candle) => {
    if (!isCandle(candle)) {
      throw createError("CandleExpected", localize("Given candle is not valid"));
    }
    return candle;
  };
  var expectCandles = (candles) => {
    if (!(candles instanceof Array) || !candles.every((c) => isCandle(c))) {
      throw createError("CandleListExpected", localize("Given candle list is not valid"));
    }
    return candles;
  };

  // bot-app/src/external/bot-skeleton/services/tradeEngine/trade/state/constants.js
  var BEFORE_PURCHASE = "BEFORE_PURCHASE";
  var DURING_PURCHASE = "DURING_PURCHASE";
  var PROPOSALS_READY = "PROPOSALS_READY";
  var CLEAR_PROPOSALS = "CLEAR_PROPOSALS";
  var PURCHASE_SUCCESSFUL = "PURCHASE_SUCCESSFUL";
  var OPEN_CONTRACT = "OPEN_CONTRACT";
  var SELL = "SELL";
  var START = "START";
  var STOP = "STOP";
  var NEW_TICK = "NEW_TICK";

  // bot-app/src/external/bot-skeleton/services/tradeEngine/trade/state/actions/index.js
  var dispatchIfScopeIs = ({ dispatch, getState, data, scope }) => {
    const { scope: currentScope } = getState();
    if (currentScope === scope) {
      dispatch(data);
    }
  };
  var start = () => (dispatch, getState) => dispatchIfScopeIs({ dispatch, getState, data: { type: START }, scope: STOP });
  var proposalsReady = () => ({ type: PROPOSALS_READY });
  var clearProposals = () => ({ type: CLEAR_PROPOSALS });
  var dispatchIfScopeIsBeforePurchase = (args) => dispatchIfScopeIs({ ...args, scope: BEFORE_PURCHASE });
  var dispatchIfBeforePurchaseReady = (args) => {
    const { getState } = args;
    const { proposalsReady: beforePurchaseReady } = getState();
    if (beforePurchaseReady) {
      dispatchIfScopeIsBeforePurchase(args);
    }
    dispatchIfScopeIs({ ...args, scope: BEFORE_PURCHASE });
  };
  var purchaseSuccessful = () => (dispatch, getState) => dispatchIfBeforePurchaseReady({ dispatch, getState, data: { type: PURCHASE_SUCCESSFUL } });
  var openContractReceived = () => (dispatch, getState) => {
    const { scope: currentScope } = getState();
    if (currentScope === DURING_PURCHASE) {
      dispatch({ type: OPEN_CONTRACT });
    }
    dispatchIfBeforePurchaseReady({ dispatch, getState, data: { type: OPEN_CONTRACT } });
  };
  var sell = () => (dispatch, getState) => dispatchIfScopeIs({ dispatch, getState, data: { type: SELL }, scope: DURING_PURCHASE });

  // bot-app/src/external/bot-skeleton/services/tradeEngine/trade/state/reducers/index.js
  var initialState = {
    scope: STOP,
    proposalsReady: false
  };
  var signal = (state = initialState, action) => {
    switch (action.type) {
      case START:
        return {
          scope: BEFORE_PURCHASE,
          proposalsReady: state.proposalsReady
        };
      case PROPOSALS_READY:
        return {
          ...state,
          proposalsReady: true
        };
      case CLEAR_PROPOSALS:
        return {
          ...state,
          proposalsReady: false
        };
      case PURCHASE_SUCCESSFUL:
        return {
          scope: DURING_PURCHASE,
          openContract: false,
          proposalsReady: state.proposalsReady
        };
      case OPEN_CONTRACT:
        return {
          scope: DURING_PURCHASE,
          openContract: true,
          proposalsReady: state.proposalsReady
        };
      case SELL:
        return {
          scope: STOP,
          proposalsReady: state.proposalsReady
        };
      case NEW_TICK:
        return {
          ...state,
          newTick: action.payload
        };
      default:
        return state;
    }
  };
  var reducers_default = signal;

  // bot-shims/dbot-store-shim.js
  var DBotStore = class {
    static setInstance(store) {
      return store;
    }
    static get instance() {
      return this.singleton;
    }
    constructor() {
    }
  };
  __publicField(DBotStore, "singleton", null);

  // bot-app/src/external/bot-skeleton/services/tradeEngine/trade/Balance.js
  var balance_string = "";
  var Balance_default = (Engine) => class Balance extends Engine {
    observeBalance() {
      if (!api_base.api) return;
      const subscription = api_base.api.onMessage().subscribe(({ data }) => {
        if (data?.msg_type === "balance" && data?.balance) {
          const {
            balance: { balance: b, currency }
          } = data;
          balance_string = getFormattedText(b, currency);
          if (this.accountInfo) info({ accountID: this.accountInfo.loginid, balance: balance_string });
        }
      });
      api_base.pushSubscription(subscription);
    }
    // eslint-disable-next-line class-methods-use-this
    getBalance(type) {
      const { client } = DBotStore.instance;
      const balance = client && client.balance || 0;
      balance_string = getFormattedText(balance, client.currency, false);
      return type === "STR" ? balance_string : balance;
    }
  };

  // bot-app/src/external/bot-skeleton/services/tradeEngine/trade/OpenContract.js
  var OpenContract_default = (Engine) => class OpenContract extends Engine {
    observeOpenContract() {
      if (!api_base.api) return;
      const subscription = api_base.api.onMessage().subscribe(({ data }) => {
        if (data.msg_type === "proposal_open_contract") {
          const contract2 = data.proposal_open_contract;
          if (!contract2 || !this.expectedContractId(contract2?.contract_id)) {
            return;
          }
          this.setContractFlags(contract2);
          this.data.contract = contract2;
          contract({ accountID: api_base.account_info.loginid, ...contract2 });
          if (this.isSold) {
            this.contractId = "";
            clearTimeout(this.transaction_recovery_timeout);
            this.updateTotals(contract2);
            contractStatus({
              id: "contract.sold",
              data: contract2.transaction_ids.sell,
              contract: contract2
            });
            if (this.afterPromise) {
              this.afterPromise();
            }
            this.store.dispatch(sell());
          } else {
            this.store.dispatch(openContractReceived());
          }
        }
      });
      api_base.pushSubscription(subscription);
    }
    waitForAfter() {
      return new Promise((resolve) => {
        this.afterPromise = resolve;
      });
    }
    setContractFlags(contract2) {
      const { is_expired, is_valid_to_sell, is_sold, entry_tick } = contract2;
      this.isSold = Boolean(is_sold);
      this.isSellAvailable = !this.isSold && Boolean(is_valid_to_sell);
      this.isExpired = Boolean(is_expired);
      this.hasEntryTick = Boolean(entry_tick);
    }
    expectedContractId(contractId) {
      return this.contractId && contractId === this.contractId;
    }
    getSellPrice() {
      const { bid_price: bidPrice, buy_price: buyPrice, currency } = this.data.contract;
      return getRoundedNumber(Number(bidPrice) - Number(buyPrice), currency);
    }
  };

  // bot-app/src/external/bot-skeleton/services/tradeEngine/trade/Proposal.js
  var Proposal_default = (Engine) => class Proposal extends Engine {
    makeProposals(trade_option) {
      if (!this.isNewTradeOption(trade_option)) {
        return;
      }
      this.regeneratePurchaseReference();
      this.trade_option = trade_option;
      this.proposal_templates = tradeOptionToProposal(trade_option, this.getPurchaseReference());
      this.renewProposalsOnPurchase();
    }
    selectProposal(contract_type) {
      const { proposals } = this.data;
      if (proposals.length === 0) {
        throw Error(getLocalizedErrorMessage("ProposalsNotReady"));
      }
      const to_buy = proposals.find((proposal) => {
        if (proposal.contract_type === contract_type && proposal.purchase_reference === this.getPurchaseReference()) {
          if (proposal.error) {
            throw proposal.error;
          }
          return proposal;
        }
        return false;
      });
      if (!to_buy) {
        throw new Error(getLocalizedErrorMessage("SelectedProposalNotExist"));
      }
      return {
        id: to_buy.id,
        askPrice: to_buy.ask_price
      };
    }
    renewProposalsOnPurchase() {
      this.data.proposals = [];
      this.store.dispatch(clearProposals());
      this.requestProposals();
    }
    requestProposals() {
      let has_informed_error = false;
      Promise.all(
        this.proposal_templates.map((proposal) => {
          doUntilDone(() => api_base.api.send(proposal)).catch((error2) => {
            if (error2?.error?.code === "ContractBuyValidationError") {
              const localizedError = new Error(getLocalizedErrorMessage(error2.error.code, error2.error));
              localizedError.code = error2.error.code;
              localizedError.details = error2.error.details;
              localizedError.message_to_client = error2.error.message_to_client;
              this.data.proposals.push({
                ...error2.error.echo_req,
                ...error2.echo_req.passthrough,
                error: localizedError
              });
              return null;
            }
            if (!has_informed_error) {
              has_informed_error = true;
              const localizedErrorMessage = error2.error.code ? getLocalizedErrorMessage(error2.error.code, error2.error) : error2.error.message || getLocalizedErrorMessage("GeneralError");
              const localizedError = {
                ...error2.error,
                message: localizedErrorMessage
              };
              this.$scope.observer.emit("Error", localizedError);
            }
            return null;
          });
        })
      );
    }
    observeProposals() {
      if (!api_base.api) return;
      const subscription = api_base.api.onMessage().subscribe((response) => {
        if (response.data.msg_type === "proposal") {
          const { passthrough, proposal, error: error2 } = response.data;
          if (error2) {
            const localizedError = new Error(getLocalizedErrorMessage(error2.code, error2));
            localizedError.code = error2.code;
            localizedError.details = error2.details;
            localizedError.message_to_client = error2.message_to_client;
            this.data.proposals.push({
              ...passthrough,
              error: localizedError
            });
            return;
          }
          if (proposal && this.data.proposals.findIndex((p) => p.id === proposal.id) === -1) {
            this.data.proposals.push({ ...proposal, ...passthrough });
            this.checkProposalReady();
          }
        }
      });
      api_base.pushSubscription(subscription);
    }
    checkProposalReady() {
      const { proposals } = this.data;
      if (proposals.length > 0 && this.proposal_templates) {
        const has_equal_proposals = this.proposal_templates.every((template) => {
          return proposals.findIndex((proposal) => {
            return proposal.purchase_reference === template.passthrough.purchase_reference && proposal.contract_type === template.contract_type;
          }) !== -1;
        });
        if (has_equal_proposals) {
          this.startPromise.then(() => this.store.dispatch(proposalsReady()));
        }
      }
    }
    isNewTradeOption(trade_option) {
      if (!this.trade_option) {
        this.trade_option = trade_option;
        return true;
      }
      return [
        "amount",
        "barrierOffset",
        "basis",
        "duration",
        "duration_unit",
        "prediction",
        "secondBarrierOffset",
        "underlying_symbol"
      ].some((value) => this.trade_option[value] !== trade_option[value]);
    }
  };

  // bot-app/src/external/bot-skeleton/services/tradeEngine/trade/Purchase.js
  var delayIndex = 0;
  var purchase_reference;
  var Purchase_default = (Engine) => class Purchase extends Engine {
    constructor() {
      super(...arguments);
      __publicField(this, "getPurchaseReference", () => purchase_reference);
      __publicField(this, "regeneratePurchaseReference", () => {
        purchase_reference = getUUID();
      });
    }
    purchase(contract_type) {
      if (this.store.getState().scope !== BEFORE_PURCHASE) {
        return Promise.resolve();
      }
      const onSuccess = (response) => {
        const { buy } = response;
        contractStatus({
          id: "contract.purchase_received",
          data: buy.transaction_id,
          buy
        });
        this.contractId = buy.contract_id;
        this.store.dispatch(purchaseSuccessful());
        if (this.is_proposal_subscription_required) {
          this.renewProposalsOnPurchase();
        }
        delayIndex = 0;
        log("purchase" /* PURCHASE */, { transaction_id: buy.transaction_id });
        info({
          accountID: this.accountInfo.loginid,
          totalRuns: this.updateAndReturnTotalRuns(),
          transaction_ids: { buy: buy.transaction_id },
          contract_type,
          buy_price: buy.buy_price
        });
      };
      if (this.is_proposal_subscription_required) {
        const { id, askPrice } = this.selectProposal(contract_type);
        const action2 = () => api_base.api.send({ buy: id, price: askPrice });
        this.isSold = false;
        contractStatus({
          id: "contract.purchase_sent",
          data: askPrice
        });
        if (!this.options.timeMachineEnabled) {
          return doUntilDone(action2).then(onSuccess);
        }
        return recoverFromError(
          action2,
          (errorCode, makeDelay) => {
            if (errorCode !== "DisconnectError") {
              this.renewProposalsOnPurchase();
            } else {
              this.clearProposals();
            }
            const unsubscribe = this.store.subscribe(() => {
              const { scope, proposalsReady: proposalsReady2 } = this.store.getState();
              if (scope === BEFORE_PURCHASE && proposalsReady2) {
                makeDelay().then(() => this.observer.emit("REVERT", "before"));
                unsubscribe();
              }
            });
          },
          ["PriceMoved", "InvalidContractProposal"],
          delayIndex++
        ).then(onSuccess);
      }
      const trade_option = tradeOptionToBuy(contract_type, this.tradeOptions);
      const action = () => api_base.api.send(trade_option);
      this.isSold = false;
      contractStatus({
        id: "contract.purchase_sent",
        data: this.tradeOptions.amount
      });
      if (!this.options.timeMachineEnabled) {
        return doUntilDone(action).then(onSuccess);
      }
      return recoverFromError(
        action,
        (errorCode, makeDelay) => {
          if (errorCode === "DisconnectError") {
            this.clearProposals();
          }
          const unsubscribe = this.store.subscribe(() => {
            const { scope } = this.store.getState();
            if (scope === BEFORE_PURCHASE) {
              makeDelay().then(() => this.observer.emit("REVERT", "before"));
              unsubscribe();
            }
          });
        },
        ["PriceMoved", "InvalidContractProposal"],
        delayIndex++
      ).then(onSuccess);
    }
  };

  // bot-app/src/external/bot-skeleton/services/tradeEngine/trade/Sell.js
  var Sell_default = (Engine) => class Sell extends Engine {
    isSellAtMarketAvailable() {
      return this.contractId && !this.isSold && this.isSellAvailable && !this.isExpired;
    }
    sellAtMarket() {
      observer.emit("bot.sell");
      if (this.store.getState().scope !== DURING_PURCHASE) {
        return Promise.resolve();
      }
      if (!this.isSellAtMarketAvailable()) {
        log("not_offered" /* NOT_OFFERED */);
        return Promise.resolve();
      }
      let delay_index = 1;
      return new Promise((resolve) => {
        const onContractSold = (sell_response) => {
          delay_index = 1;
          if (sell_response) {
            const { sold_for } = sell_response.sell;
            log("sell" /* SELL */, { sold_for });
          }
          contractStatus("purchase.sold");
          this.waitForAfter();
          resolve();
        };
        const contract_id = this.contractId;
        const sellContractAndGetContractInfo = () => {
          return doUntilDone(() => api_base.api.send({ sell: contract_id, price: 0 })).then((sell_response) => {
            doUntilDone(() => api_base.api.send({ proposal_open_contract: 1, contract_id })).then(
              () => sell_response
            );
          }).catch((e) => {
            const error2 = e.error;
            if (error2.code === "InvalidOfferings") {
              return Promise.resolve();
            }
            const sell_error = {
              name: error2.code,
              message: getLocalizedErrorMessage(error2.code, error2.details),
              msg_type: e.msg_type,
              error: { ...error2.error }
            };
            if (error2.code === "RateLimit") {
              return Promise.reject(sell_error);
            }
            return doUntilDone(
              () => api_base.api.send({
                proposal_open_contract: 1,
                contract_id
              })
            ).then((proposal_open_contract_response) => {
              const { proposal_open_contract } = proposal_open_contract_response;
              if (!proposal_open_contract.is_sold) {
                return Promise.reject(sell_error);
              }
              return Promise.resolve({
                sell: {
                  sold_for: proposal_open_contract.sell_price
                }
              });
            });
          });
        };
        const errors_to_ignore = ["NoOpenPosition", "InvalidSellContractProposal", "UnrecognisedRequest"];
        if (!this.options.timeMachineEnabled) {
          return doUntilDone(sellContractAndGetContractInfo, errors_to_ignore).then((sell_response) => onContractSold(sell_response)).catch((error2) => error2);
        }
        const recoverFn = (error_code, makeDelay) => {
          return makeDelay().then(() => this.observer.emit("REVERT", "during"));
        };
        return recoverFromError(
          sellContractAndGetContractInfo,
          recoverFn,
          errors_to_ignore,
          delay_index++
        ).then((sell_response) => onContractSold(sell_response));
      });
    }
  };

  // bot-app/src/external/bot-skeleton/services/tradeEngine/trade/Ticks.js
  var import_lodash = __toESM(require_lodash());

  // bot-app/src/external/bot-skeleton/utils/binary-utils.ts
  var getLast = (arr) => arr && (arr.length === 0 ? void 0 : arr[arr.length - 1]);

  // bot-app/src/external/bot-skeleton/services/tradeEngine/trade/Ticks.js
  var tickListenerKey;
  var Ticks_default = (Engine) => class Ticks extends Engine {
    async watchTicks(symbol) {
      if (symbol && this.symbol !== symbol) {
        this.symbol = symbol;
        const { ticksService } = this.$scope;
        await ticksService.stopMonitor({
          symbol,
          key: tickListenerKey
        });
        const callback = (ticks) => {
          if (this.is_proposal_subscription_required) {
            this.checkProposalReady();
          }
          const lastTick = ticks.slice(-1)[0];
          const { epoch } = lastTick;
          this.store.dispatch({ type: NEW_TICK, payload: epoch });
        };
        const key = await ticksService.monitor({ symbol, callback });
        tickListenerKey = key;
      }
    }
    checkTicksPromiseExists() {
      return this.$scope.ticksService.ticks_history_promise;
    }
    getTicks(toString5 = false) {
      return new Promise((resolve) => {
        this.$scope.ticksService.request({ symbol: this.symbol }).then((ticks) => {
          const ticks_list = ticks.map((tick) => {
            if (toString5) {
              return tick.quote.toFixed(this.getPipSize());
            }
            return tick.quote;
          });
          resolve(ticks_list);
        });
      });
    }
    getLastTick(raw, toString5 = false) {
      return new Promise(
        (resolve, reject) => this.$scope.ticksService.request({ symbol: this.symbol }).then((ticks) => {
          try {
            let last_tick = raw ? getLast(ticks) : getLast(ticks).quote;
            if (!raw && toString5) {
              last_tick = last_tick.toFixed(this.getPipSize());
            }
            resolve(last_tick);
          } catch (error2) {
            reject(error2);
          }
        }).catch((e) => {
          if (e.code === "MarketIsClosed") {
            const localizedError = {
              ...e,
              message: getLocalizedErrorMessage(e.code, e.details)
            };
            observer.emit("Error", localizedError);
            resolve(e.code);
          }
        })
      );
    }
    getLastDigit() {
      return new Promise((resolve) => this.getLastTick(false, true).then((tick) => resolve(getLastDigit(tick))));
    }
    getLastDigitList() {
      return new Promise((resolve) => this.getTicks().then((ticks) => resolve(this.getLastDigitsFromList(ticks))));
    }
    getLastDigitsFromList(ticks) {
      const digits = ticks.map((tick) => {
        return getLastDigit(tick.toFixed(this.getPipSize()));
      });
      return digits;
    }
    checkDirection(dir) {
      return new Promise(
        (resolve) => this.$scope.ticksService.request({ symbol: this.symbol }).then((ticks) => resolve(getDirection(ticks) === dir))
      );
    }
    getOhlc(args) {
      const { granularity = this.options.candleInterval || 60, field } = args || {};
      return new Promise(
        (resolve) => this.$scope.ticksService.request({ symbol: this.symbol, granularity }).then((ohlc) => resolve(field ? ohlc.map((o) => o[field]) : ohlc))
      );
    }
    getOhlcFromEnd(args) {
      const { index: i = 1 } = args || {};
      const index = expectPositiveInteger(Number(i), localize("Index must be a positive integer"));
      return new Promise((resolve) => this.getOhlc(args).then((ohlc) => resolve(ohlc.slice(-index)[0])));
    }
    getPipSize() {
      return this.$scope.ticksService.pipSizes[this.symbol];
    }
    async requestAccumulatorStats() {
      const subscription_id = this.subscription_id_for_accumulators;
      const is_proposal_requested = this.is_proposal_requested_for_accumulators;
      const proposal_request = {
        ...window.Blockly.accumulators_request,
        amount: this?.tradeOptions?.amount,
        basis: this?.tradeOptions?.basis,
        contract_type: "ACCU",
        currency: this?.tradeOptions?.currency,
        growth_rate: this?.tradeOptions?.growth_rate,
        proposal: 1,
        subscribe: 1,
        underlying_symbol: this?.tradeOptions?.symbol
      };
      if (!subscription_id && !is_proposal_requested) {
        this.is_proposal_requested_for_accumulators = true;
        if (proposal_request) {
          await api_base?.api?.send(proposal_request);
        }
      }
    }
    async handleOnMessageForAccumulators() {
      let ticks_stayed_in_list = [];
      return new Promise((resolve) => {
        const subscription = api_base.api.onMessage().subscribe(({ data }) => {
          if (data.msg_type === "proposal") {
            try {
              this.subscription_id_for_accumulators = data.subscription.id;
              const stat_list = (data.proposal.contract_details.ticks_stayed_in || []).flat().reverse();
              ticks_stayed_in_list = [...stat_list, ...ticks_stayed_in_list];
              if (ticks_stayed_in_list.length > 0) resolve(ticks_stayed_in_list);
            } catch (error2) {
              observer.emit("Unexpected message type or no proposal found:", error2);
            }
          }
        });
        api_base.pushSubscription(subscription);
      });
    }
    async fetchStatsForAccumulators() {
      try {
        const debouncedAccumulatorsRequest = (0, import_lodash.default)(() => this.requestAccumulatorStats(), 300);
        debouncedAccumulatorsRequest();
        const ticks_stayed_in_list = await this.handleOnMessageForAccumulators();
        return ticks_stayed_in_list;
      } catch (error2) {
        observer.emit("Error in subscription promise:", error2);
        throw error2;
      } finally {
        await api_base?.api?.send({ forget_all: "proposal" });
        this.is_proposal_requested_for_accumulators = false;
        this.subscription_id_for_accumulators = null;
      }
    }
    async getCurrentStat() {
      try {
        const ticks_stayed_in = await this.fetchStatsForAccumulators();
        return ticks_stayed_in?.[0];
      } catch (error2) {
        observer.emit("Error fetching current stat:", error2);
      }
    }
    async getStatList() {
      try {
        const ticks_stayed_in = await this.fetchStatsForAccumulators();
        return ticks_stayed_in?.slice(0, 100);
      } catch (error2) {
        observer.emit("Error fetching current stat:", error2);
      }
    }
    async getDelayTickValue(tick_value) {
      return new Promise((resolve, reject) => {
        try {
          const ticks = [];
          const symbol = this.symbol;
          const resolveAndExit = () => {
            this.$scope.ticksService.stopMonitor({
              symbol,
              key: ""
            });
            resolve(ticks);
            ticks.length = 0;
          };
          const watchTicks = (tick_list) => {
            ticks.push(tick_list);
            const current_tick = ticks.length;
            if (current_tick === tick_value) {
              resolveAndExit();
            }
          };
          const delayExecution = (tick_list) => watchTicks(tick_list);
          if (Number(tick_value) <= 0) resolveAndExit();
          this.$scope.ticksService.monitor({ symbol, callback: delayExecution });
        } catch (error2) {
          reject(new Error(`Failed to start tick monitoring: ${error2.message}`));
        }
      });
    }
  };

  // bot-app/src/external/bot-skeleton/services/tradeEngine/trade/Total.js
  var skeleton = {
    totalProfit: 0,
    totalWins: 0,
    totalLosses: 0,
    totalStake: 0,
    totalPayout: 0,
    totalRuns: 0
  };
  var globalStat = {};
  var Total_default = (Engine) => class Total extends Engine {
    constructor() {
      super();
      this.sessionRuns = 0;
      this.sessionProfit = 0;
      observer.register("statistics.clear", this.clearStatistics.bind(this));
    }
    clearStatistics() {
      this.sessionRuns = 0;
      this.sessionProfit = 0;
      if (!this.accountInfo) return;
      const { loginid: accountID } = this.accountInfo;
      globalStat[accountID] = { ...skeleton };
    }
    updateTotals(contract2) {
      const { sell_price: sellPrice, buy_price: buyPrice, currency } = contract2;
      const profit = getRoundedNumber(Number(sellPrice) - Number(buyPrice), currency);
      const win = profit > 0;
      const accountStat = this.getAccountStat();
      accountStat.totalWins += win ? 1 : 0;
      accountStat.totalLosses += !win ? 1 : 0;
      this.sessionProfit = getRoundedNumber(Number(this.sessionProfit) + Number(profit), currency);
      accountStat.totalProfit = getRoundedNumber(Number(accountStat.totalProfit) + Number(profit), currency);
      accountStat.totalStake = getRoundedNumber(Number(accountStat.totalStake) + Number(buyPrice), currency);
      accountStat.totalPayout = getRoundedNumber(Number(accountStat.totalPayout) + Number(sellPrice), currency);
      info({
        profit,
        contract: contract2,
        accountID: this.accountInfo.loginid,
        totalProfit: accountStat.totalProfit,
        totalWins: accountStat.totalWins,
        totalLosses: accountStat.totalLosses,
        totalStake: accountStat.totalStake,
        totalPayout: accountStat.totalPayout
      });
      log(win ? "profit" /* PROFIT */ : "lost" /* LOST */, { currency, profit });
    }
    updateAndReturnTotalRuns() {
      this.sessionRuns++;
      const accountStat = this.getAccountStat();
      return ++accountStat.totalRuns;
    }
    /* eslint-disable class-methods-use-this */
    getTotalRuns() {
      const accountStat = this.getAccountStat();
      return accountStat.totalRuns;
    }
    getTotalProfit(toString5, currency) {
      const accountStat = this.getAccountStat();
      return toString5 && accountStat.totalProfit !== 0 ? getRoundedNumber(+accountStat.totalProfit, currency) : +accountStat.totalProfit;
    }
    /* eslint-enable */
    checkLimits(tradeOption) {
      if (!tradeOption.limitations) {
        return;
      }
      const {
        limitations: { maxLoss, maxTrades }
      } = tradeOption;
      if (maxLoss && maxTrades) {
        if (this.sessionRuns >= maxTrades) {
          throw createError("CustomLimitsReached", getLocalizedErrorMessage("MaxTradesReached"));
        }
        if (this.sessionProfit <= -maxLoss) {
          throw createError("CustomLimitsReached", getLocalizedErrorMessage("MaxLossReached"));
        }
      }
    }
    /* eslint-disable class-methods-use-this */
    validateTradeOptions(tradeOptions) {
      const take_profit = tradeOptions.take_profit;
      const stop_loss = tradeOptions.stop_loss;
      if (take_profit) {
        tradeOptions.limit_order.take_profit = take_profit;
      }
      if (stop_loss) {
        tradeOptions.limit_order.stop_loss = stop_loss;
      }
      return tradeOptions;
    }
    getAccountStat() {
      const { loginid: accountID } = this.accountInfo;
      if (!(accountID in globalStat)) {
        globalStat[accountID] = { ...skeleton };
      }
      return globalStat[accountID];
    }
  };

  // bot-app/src/external/bot-skeleton/services/tradeEngine/trade/index.js
  var watchBefore = (store) => watchScope({
    store,
    stopScope: DURING_PURCHASE,
    passScope: BEFORE_PURCHASE,
    passFlag: "proposalsReady"
  });
  var watchDuring = (store) => watchScope({
    store,
    stopScope: STOP,
    passScope: DURING_PURCHASE,
    passFlag: "openContract"
  });
  var prevTick;
  var watchScope = ({ store, stopScope, passScope, passFlag }) => {
    if (store.getState().scope === stopScope) {
      return Promise.resolve(false);
    }
    return new Promise((resolve) => {
      const unsubscribe = store.subscribe(() => {
        const newState = store.getState();
        if (newState.newTick === prevTick) return;
        prevTick = newState.newTick;
        if (newState.scope === passScope && newState[passFlag]) {
          unsubscribe();
          resolve(true);
        }
        if (newState.scope === stopScope) {
          unsubscribe();
          resolve(false);
        }
      });
    });
  };
  var TradeEngine = class extends Balance_default(Purchase_default(Sell_default(OpenContract_default(Proposal_default(Ticks_default(Total_default(class {
  }))))))) {
    constructor($scope) {
      super();
      this.observer = $scope.observer;
      this.$scope = $scope;
      this.observe();
      this.data = {
        contract: {},
        proposals: []
      };
      this.subscription_id_for_accumulators = null;
      this.is_proposal_requested_for_accumulators = false;
      this.store = createStore(reducers_default, applyMiddleware(thunk));
    }
    init(...args) {
      const [token, options] = expectInitArg(args);
      const { symbol } = options;
      this.initArgs = args;
      this.options = options;
      this.startPromise = this.loginAndGetBalance(token);
      if (!this.checkTicksPromiseExists()) this.watchTicks(symbol);
    }
    start(tradeOptions) {
      if (!this.options) {
        throw createError("NotInitialized", getLocalizedErrorMessage("NotInitialized"));
      }
      observer.emit("bot.running");
      const validated_trade_options = this.validateTradeOptions(tradeOptions);
      this.tradeOptions = { ...validated_trade_options, symbol: this.options.symbol };
      this.store.dispatch(start());
      this.checkLimits(validated_trade_options);
      this.makeDirectPurchaseDecision();
    }
    loginAndGetBalance(token) {
      if (this.token === token) {
        return Promise.resolve();
      }
      this.accountInfo = api_base.account_info;
      this.token = api_base.token;
      return new Promise((resolve) => {
        const subscription = api_base.api.onMessage().subscribe(({ data }) => {
          if (data.msg_type === "transaction" && data.transaction.action === "sell") {
            this.transaction_recovery_timeout = setTimeout(() => {
              const { contract: contract2 } = this.data;
              const is_same_contract = contract2.contract_id === data.transaction.contract_id;
              const is_open_contract = contract2.status === "open";
              if (is_same_contract && is_open_contract) {
                doUntilDone(() => {
                  api_base.api.send({ proposal_open_contract: 1, contract_id: contract2.contract_id });
                }, ["PriceMoved"]);
              }
            }, 1500);
          }
          resolve();
        });
        api_base.pushSubscription(subscription);
      });
    }
    observe() {
      this.observeOpenContract();
      this.observeBalance();
      this.observeProposals();
    }
    watch(watchName) {
      if (watchName === "before") {
        return watchBefore(this.store);
      }
      return watchDuring(this.store);
    }
    makeDirectPurchaseDecision() {
      const { has_payout_block, is_basis_payout } = checkBlocksForProposalRequest();
      this.is_proposal_subscription_required = has_payout_block || is_basis_payout;
      if (this.is_proposal_subscription_required) {
        this.makeProposals({ ...this.options, ...this.tradeOptions });
        this.checkProposalReady();
      } else {
        this.store.dispatch(proposalsReady());
      }
    }
  };

  // bot-app/src/external/bot-skeleton/services/tradeEngine/Interface/BotInterface.js
  var getBotInterface = (tradeEngine) => {
    const getDetail = (i) => createDetails(tradeEngine.data.contract)[i];
    return {
      init: (...args) => tradeEngine.init(...args),
      start: (...args) => tradeEngine.start(...args),
      stop: (...args) => tradeEngine.stop(...args),
      purchase: (contract_type) => tradeEngine.purchase(contract_type),
      getAskPrice: (contract_type) => Number(getProposal(contract_type, tradeEngine).ask_price),
      getPayout: (contract_type) => Number(getProposal(contract_type, tradeEngine).payout),
      getPurchaseReference: () => tradeEngine.getPurchaseReference(),
      isSellAvailable: () => tradeEngine.isSellAtMarketAvailable(),
      sellAtMarket: () => tradeEngine.sellAtMarket(),
      getSellPrice: () => getSellPrice(tradeEngine),
      isResult: (result) => getDetail(10) === result,
      isTradeAgain: (result) => observer.emit("bot.trade_again", result),
      readDetails: (i) => getDetail(i - 1)
    };
  };
  var getProposal = (contract_type, tradeEngine) => {
    return tradeEngine.data.proposals.find(
      (proposal) => proposal.contract_type === contract_type && proposal.purchase_reference === tradeEngine.getPurchaseReference()
    );
  };
  var getSellPrice = (tradeEngine) => {
    return tradeEngine.getSellPrice();
  };
  var BotInterface_default = getBotInterface;

  // bot-app/src/external/bot-skeleton/services/tradeEngine/Interface/TicksInterface.js
  var getTicksInterface = (tradeEngine) => {
    return {
      getDelayTickValue: (...args) => tradeEngine.getDelayTickValue(...args),
      getCurrentStat: (...args) => tradeEngine.getCurrentStat(...args),
      getStatList: (...args) => tradeEngine.getStatList(...args),
      getLastTick: (...args) => tradeEngine.getLastTick(...args),
      getLastDigit: (...args) => tradeEngine.getLastDigit(...args),
      getTicks: (...args) => tradeEngine.getTicks(...args),
      checkDirection: (...args) => tradeEngine.checkDirection(...args),
      getOhlcFromEnd: (...args) => tradeEngine.getOhlcFromEnd(...args),
      getOhlc: (...args) => tradeEngine.getOhlc(...args),
      getLastDigitList: (...args) => tradeEngine.getLastDigitList(...args)
    };
  };
  var TicksInterface_default = getTicksInterface;

  // bot-app/src/external/bot-skeleton/services/tradeEngine/Interface/CandleInterface.js
  var getCandleInterface = () => {
    return {
      isCandleBlack: (candle) => expectCandle(candle) && candle.close < candle.open,
      candleValues: (ohlc, field) => expectCandles(ohlc).map((o) => o[field]),
      candleField: (candle, field) => expectCandle(candle)[field]
    };
  };
  var CandleInterface_default = getCandleInterface;

  // bot-app/src/external/indicators/utils/math.js
  var takeField = (arr, field) => arr.map((x) => field ? x[field] : x);
  var takeLast2 = (arr, n, field) => takeField(arr.slice(n > arr.length ? 0 : arr.length - n, arr.length), field);
  var sum = (data) => data.reduce((acc, x) => acc + x, 0);
  var mean = (data) => data.reduce((a, b) => a + b, 0) / data.length;
  var stddev = (data) => {
    const data_mean = mean(data);
    const sq_diff = data.map((n) => (n - data_mean) ** 2);
    const avg_sq_diff = mean(sq_diff);
    return Math.sqrt(avg_sq_diff);
  };

  // bot-app/src/external/indicators/indicators/simple-moving-average.js
  var simpleMovingAverage = (data, config2) => {
    const { periods, field } = config2;
    if (data.length < periods) {
      throw new Error("Periods longer than data length");
    }
    const vals = takeLast2(data, periods, field);
    return sum(vals) / periods;
  };
  var simpleMovingAverageArray = (data, config2) => {
    const { periods, pipSize = 2 } = config2;
    return sequence(data.length - periods + 1).map(
      (x, i) => +simpleMovingAverage(data.slice(i, i + periods), config2).toFixed(pipSize)
    );
  };

  // bot-app/src/external/indicators/indicators/bollinger-bands.js
  var bollingerBands = (data, config2) => {
    const { periods = 20, field, stdDevUp = 2, stdDevDown = 2, pipSize = 2 } = config2;
    const vals = takeLast2(data, periods, field);
    const middle = simpleMovingAverage(vals, { periods });
    const std_dev = stddev(vals);
    const upper = middle + std_dev * stdDevUp;
    const lower = middle - std_dev * stdDevDown;
    return [+middle.toFixed(pipSize), +upper.toFixed(pipSize), +lower.toFixed(pipSize)];
  };
  var bollingerBandsArray = (data, config2) => {
    const { periods } = config2;
    return sequence(data.length - periods + 1).map((x, i) => bollingerBands(data.slice(i, i + periods), config2));
  };

  // bot-app/src/external/indicators/indicators/exponential-moving-average.js
  var exponentialMovingAverage = (data, config2, init_val) => {
    const { periods, field, pipSize = 2 } = config2;
    const weighting_multiplier = 2 / (periods + 1);
    const vals = takeField(data, field);
    if (init_val) {
      return (vals[0] - init_val) * weighting_multiplier + init_val;
    }
    if (data.length < periods) {
      throw new Error("Periods longer than data length");
    }
    const mean_val = mean(takeField(data.slice(0, periods), field));
    return +vals.slice(periods).reduce((prev, e) => (e - prev) * weighting_multiplier + prev, mean_val).toFixed(pipSize);
  };
  var exponentialMovingAverageArray = (data, config2) => {
    const { periods } = config2;
    let init_val = exponentialMovingAverage(data.slice(0, periods), config2);
    return data.slice(periods - 1).map((x, i) => !i ? init_val : init_val = exponentialMovingAverage([x], config2, init_val));
  };

  // bot-app/src/external/indicators/indicators/macd.js
  var paddingLeft = (data, length) => {
    const arr = [];
    arr.length = length - data.length;
    arr.fill(0);
    return [...arr, ...data];
  };
  var macdArray = (data, config2) => {
    const { field, fastEmaPeriod = 12, slowEmaPeriod = 26, signalEmaPeriod = 9, pipSize = 2 } = config2;
    const vals = takeField(data, field);
    const length = vals.length;
    const fast_ema_array = paddingLeft(
      exponentialMovingAverageArray(
        vals,
        { periods: fastEmaPeriod, pipSize: 20, field }
        // -------------------------- ^ set pipSize to 20 to prevent rounding
      ),
      length
    );
    const slow_ema_array = paddingLeft(
      exponentialMovingAverageArray(vals, { periods: slowEmaPeriod, pipSize: 20, field }),
      length
    );
    const macd_calc_array = paddingLeft(
      slow_ema_array.map((x, i) => +(fast_ema_array[i] - x).toFixed(pipSize)),
      length
    );
    const signal_ema_array = paddingLeft(
      exponentialMovingAverageArray(macd_calc_array.slice(slowEmaPeriod - 1), {
        periods: signalEmaPeriod,
        pipSize: 20,
        field
      }),
      length
    );
    return macd_calc_array.map((x, i) => [+(x - signal_ema_array[i]).toFixed(pipSize), x, +signal_ema_array[i].toFixed(pipSize)]).slice(slowEmaPeriod + signalEmaPeriod - 2);
  };

  // bot-app/src/external/indicators/indicators/relative-strength-index.js
  var calcGain = (q1, q2) => q2 > q1 ? q2 - q1 : 0;
  var calcLoss = (q1, q2) => q2 < q1 ? q1 - q2 : 0;
  var calcFirstAvgDiff = (vals, comp, periods) => {
    let prev;
    return vals.reduce((r, q, i) => {
      if (i === 1) {
        prev = r;
      }
      const diff = comp(prev, q);
      prev = q;
      return diff + (i === 1 ? 0 : r);
    }) / periods;
  };
  var calcSecondAvgDiff = (vals, comp, periods, init_avg) => {
    let prev;
    if (vals.length === 1) {
      return init_avg;
    }
    return vals.reduce((r, q, i) => {
      if (i === 1) {
        prev = r;
      }
      const diff = comp(prev, q);
      prev = q;
      const prev_avg = i === 1 ? init_avg : r;
      return (prev_avg * (periods - 1) + diff) / periods;
    });
  };
  var relativeStrengthIndex = (data, config2, memoized_diff) => {
    const { periods, field } = config2;
    if (data.length < periods) {
      throw new Error("Periods longer than data length");
    }
    if (data.length === periods) {
      return 0;
    }
    const vals = takeField(data.slice(0, periods + 1), field);
    let rest_seq, init_avg_gain, init_avg_loss;
    if (memoized_diff && "gain" in memoized_diff) {
      rest_seq = takeField(data.slice(-2), field);
      init_avg_gain = memoized_diff.gain;
      init_avg_loss = memoized_diff.loss;
    } else {
      rest_seq = takeField(data.slice(periods, data.length), field);
      init_avg_gain = calcFirstAvgDiff(vals, calcGain, periods);
      init_avg_loss = calcFirstAvgDiff(vals, calcLoss, periods);
    }
    const avg_gain = calcSecondAvgDiff(rest_seq, calcGain, periods, init_avg_gain);
    const avg_loss = calcSecondAvgDiff(rest_seq, calcLoss, periods, init_avg_loss);
    if (memoized_diff) {
      memoized_diff.gain = avg_gain;
      memoized_diff.loss = avg_loss;
    }
    if (avg_gain === 0) {
      return 0;
    } else if (avg_loss === 0) {
      return 100;
    }
    const RS = avg_gain / avg_loss;
    return 100 - 100 / (1 + RS);
  };
  var relativeStrengthIndexArray = (data, config2) => {
    const { periods, pipSize = 2 } = config2;
    const memoized_diff = {};
    return sequence(data.length - periods).map(
      (x, i) => +relativeStrengthIndex(data.slice(0, i + periods + 1), config2, memoized_diff).toFixed(pipSize)
    );
  };

  // bot-app/src/external/bot-skeleton/services/tradeEngine/Interface/IndicatorsInterface.js
  var decorate = (f, input, tradeEngine, config2, ...args) => {
    const pipSize = tradeEngine.getPipSize();
    return f(input, { pipSize, ...config2 }, ...args);
  };
  var getIndicatorsInterface = (tradeEngine) => {
    return {
      sma: (input, periods) => decorate(simpleMovingAverage, input, tradeEngine, { periods }),
      smaa: (input, periods) => decorate(simpleMovingAverageArray, input, tradeEngine, { periods }),
      ema: (input, periods) => decorate(exponentialMovingAverage, input, tradeEngine, { periods }),
      emaa: (input, periods) => decorate(exponentialMovingAverageArray, input, tradeEngine, { periods }),
      rsi: (input, periods) => decorate(relativeStrengthIndex, input, tradeEngine, { periods }),
      rsia: (input, periods) => decorate(relativeStrengthIndexArray, input, tradeEngine, { periods }),
      bb: (input, config2, field) => decorate(bollingerBands, input, tradeEngine, config2)[field],
      bba: (input, config2, field) => decorate(bollingerBandsArray, input, tradeEngine, config2).map((r) => r[field]),
      macda: (input, config2, field) => decorate(macdArray, input, tradeEngine, config2).map((r) => r[field])
    };
  };
  var IndicatorsInterface_default = getIndicatorsInterface;

  // bot-app/src/external/bot-skeleton/services/tradeEngine/Interface/MiscInterface.js
  var getMiscInterface = (tradeEngine) => {
    return {
      notify: (args) => observer.emit("ui.log.notify", args),
      console: ({ type, message }) => console[type](message),
      // eslint-disable-line no-console
      notifyTelegram: (access_token, chat_id, text) => {
        const url = `https://api.telegram.org/bot${access_token}/sendMessage`;
        const onError = () => notify("warn", localize("The Telegram notification could not be sent"));
        fetch(url, {
          method: "POST",
          mode: "cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id, text })
        }).then((response) => {
          if (!response.ok) {
            onError();
          }
        }).catch(onError);
      },
      getTotalRuns: () => tradeEngine.getTotalRuns(),
      getBalance: (type) => tradeEngine.getBalance(type),
      getTotalProfit: (toString5) => tradeEngine.getTotalProfit(toString5, tradeEngine.tradeOptions.currency)
    };
  };
  var MiscInterface_default = getMiscInterface;

  // bot-app/src/external/bot-skeleton/services/tradeEngine/Interface/ToolsInterface.js
  var getToolsInterface = (tradeEngine) => {
    return {
      dateTimeStringToTimestamp: (datetime_string) => {
        const invalid_msg = localize("Invalid date/time: {{ datetime_string }}", { datetime_string });
        if (typeof datetime_string !== "string") {
          return invalid_msg;
        }
        const date_time = datetime_string.replace(/[^0-9.:-\s]/g, "").replace(/\s+/g, " ").trim().split(" ");
        const d = /^[12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
        const t = /^(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])(:([0-5][0-9])?)?$/;
        let validated_datetime;
        if (date_time.length >= 2) {
          validated_datetime = d.test(date_time[0]) && t.test(date_time[1]) ? `${date_time[0]}T${date_time[1]}` : null;
        } else if (date_time.length === 1) {
          validated_datetime = d.test(date_time[0]) ? date_time[0] : null;
        } else {
          validated_datetime = null;
        }
        if (validated_datetime) {
          const date_obj = new Date(validated_datetime);
          if (date_obj instanceof Date && !isNaN(date_obj)) {
            return date_obj.getTime() / 1e3;
          }
        }
        return invalid_msg;
      },
      getTime: () => parseInt((/* @__PURE__ */ new Date()).getTime() / 1e3),
      ...CandleInterface_default(),
      ...MiscInterface_default(tradeEngine),
      ...IndicatorsInterface_default(tradeEngine),
      // Highlight the block that is being executed
      highlightBlock: (block_id) => {
        const block = window.Blockly.derivWorkspace.getBlockById(block_id);
        window.Blockly.BlockSvg.prototype.highlightExecutedBlock = function() {
          const highlight_block_class = "block--execution-highlighted";
          if (!window.Blockly.utils.dom.hasClass(this.svgGroup_, highlight_block_class)) {
            window.Blockly.utils.dom.addClass(this.svgGroup_, highlight_block_class);
            setTimeout(() => {
              if (this.svgGroup_) {
                window.Blockly.utils.dom.removeClass(this.svgGroup_, highlight_block_class);
              }
            }, 1505);
          }
        };
        if (block) {
          block.highlightExecutedBlock(block);
        }
      }
    };
  };
  var ToolsInterface_default = getToolsInterface;

  // bot-app/src/external/bot-skeleton/services/tradeEngine/Interface/index.js
  var sleep = (observer2, arg = 1) => {
    return new Promise(
      (r) => (
        // eslint-disable-next-line no-promise-executor-return
        setTimeout(() => {
          r();
          setTimeout(() => observer2.emit("CONTINUE"), 0);
        }, arg * 1e3)
      ),
      () => {
      }
    );
  };
  var Interface = ($scope) => {
    const tradeEngine = new TradeEngine($scope);
    const { observer: observer2 } = $scope;
    const getInterface = () => {
      return {
        ...BotInterface_default(tradeEngine),
        ...ToolsInterface_default(tradeEngine),
        getTicksInterface: TicksInterface_default(tradeEngine),
        watch: (...args) => tradeEngine.watch(...args),
        sleep: (...args) => sleep(observer2, ...args),
        alert: (...args) => alert(...args),
        // eslint-disable-line no-alert
        prompt: (...args) => prompt(...args),
        // eslint-disable-line no-alert
        console: {
          log(...args) {
            console.log((/* @__PURE__ */ new Date()).toLocaleTimeString(), ...args);
          }
        }
      };
    };
    return { tradeEngine, observer: observer2, getInterface };
  };
  var Interface_default = Interface;

  // bot-shims/clone.js
  function cloneThorough(obj) {
    if (obj === null || typeof obj !== "object") return obj;
    if (Array.isArray(obj)) return obj.map(cloneThorough);
    const copy = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        copy[key] = cloneThorough(obj[key]);
      }
    }
    return copy;
  }

  // bot-app/src/external/bot-skeleton/services/tradeEngine/utils/interpreter.js
  var import_js_interpreter = __toESM(require_js_interpreter());

  // bot-shims/ticks-service-shim.js
  var TicksService = class {
    constructor() {
      this.ticks = /* @__PURE__ */ new Map();
      this.candles = /* @__PURE__ */ new Map();
      this.tickListeners = /* @__PURE__ */ new Map();
      this.ohlcListeners = /* @__PURE__ */ new Map();
      this.subscriptions = /* @__PURE__ */ new Map();
      this.ticks_history_promise = null;
    }
    requestPipSizes() {
      return Promise.resolve(this.pip_sizes || {});
    }
    async request(options) {
      return [];
    }
    monitor(options) {
      return Promise.resolve("monitor_key");
    }
    async stopMonitor(options) {
    }
    observe() {
    }
    forget() {
      return Promise.resolve();
    }
    forgetCandleSubscription() {
      return Promise.resolve();
    }
    unsubscribeFromTicksService() {
      return Promise.resolve();
    }
  };

  // bot-app/src/external/bot-skeleton/services/tradeEngine/utils/cliTools.js
  var createScope = () => {
    const observer2 = new Observer();
    const ticksService = new TicksService();
    const stopped = false;
    return { observer: observer2, ticksService, stopped };
  };

  // bot-app/src/external/bot-skeleton/services/tradeEngine/utils/interpreter.js
  import_js_interpreter.default.prototype.takeStateSnapshot = function() {
    const newStateStack = cloneThorough(this.stateStack, void 0, void 0, void 0, true);
    return newStateStack;
  };
  import_js_interpreter.default.prototype.restoreStateSnapshot = function(snapshot) {
    this.stateStack = cloneThorough(snapshot, void 0, void 0, void 0, true);
    this.global = this.stateStack[0].scope.object || this.stateStack[0].scope;
    this.initFunc_(this, this.global);
  };
  var botInitialized = (bot) => bot && bot.tradeEngine.options;
  var botStarted = (bot) => botInitialized(bot) && bot.tradeEngine.tradeOptions;
  var shouldRestartOnError = (bot, errorName = "") => !unrecoverable_errors.includes(errorName) && botInitialized(bot) && bot.tradeEngine.options.shouldRestartOnError;
  var shouldStopOnError = (bot, errorName = "") => {
    const stopErrors = ["SellNotAvailableCustom", "ContractCreationFailure", "InvalidtoBuy"];
    if (stopErrors.includes(errorName) && botInitialized(bot)) {
      return true;
    }
    return false;
  };
  var timeMachineEnabled = (bot) => botInitialized(bot) && bot.tradeEngine.options.timeMachineEnabled;
  var Interpreter = () => {
    let $scope = createScope();
    let bot = Interface_default($scope);
    let interpreter = {};
    let onFinish;
    $scope.observer.register(
      "REVERT",
      (watchName) => revert(watchName === "before" ? $scope.beforeState : $scope.duringState)
    );
    function init() {
      $scope = createScope();
      bot = Interface_default($scope);
      interpreter = {};
      onFinish = () => {
      };
    }
    function revert(state) {
      interpreter.restoreStateSnapshot(state);
      interpreter.paused_ = false;
      loop();
    }
    function loop() {
      if ($scope.stopped || !interpreter.run()) {
        onFinish(interpreter.pseudoToNative(interpreter.value));
      }
    }
    function createAsync(js_interpreter, func) {
      const asyncFunc = (...args) => {
        const callback = args.pop();
        const reversed_args = args.slice().reverse();
        const first_defined_arg_idx = reversed_args.findIndex((arg) => arg !== void 0);
        const function_args = first_defined_arg_idx < 0 ? [] : reversed_args.slice(first_defined_arg_idx).reverse();
        func(...function_args.map((arg) => js_interpreter.pseudoToNative(arg))).then((rv) => {
          callback(js_interpreter.nativeToPseudo(rv));
          loop();
        }).catch((e) => {
          $scope.observer.emit("Error", e.error || e);
        });
      };
      const MAX_ACCEPTABLE_FUNC_ARGS = 100;
      Object.defineProperty(asyncFunc, "length", { value: MAX_ACCEPTABLE_FUNC_ARGS + 1 });
      return js_interpreter.createAsyncFunction(asyncFunc);
    }
    function initFunc(js_interpreter, scope) {
      const bot_interface = bot.getInterface();
      const { getTicksInterface: getTicksInterface2, alert: alert2, prompt: prompt2, sleep: sleep2, console: custom_console } = bot_interface;
      const ticks_interface = getTicksInterface2;
      js_interpreter.setProperty(scope, "console", js_interpreter.nativeToPseudo(custom_console));
      js_interpreter.setProperty(scope, "alert", js_interpreter.nativeToPseudo(alert2));
      js_interpreter.setProperty(scope, "prompt", js_interpreter.nativeToPseudo(prompt2));
      js_interpreter.setProperty(
        scope,
        "getPurchaseReference",
        js_interpreter.nativeToPseudo(bot_interface.getPurchaseReference)
      );
      const pseudo_bot_interface = js_interpreter.nativeToPseudo(bot_interface);
      Object.entries(ticks_interface).forEach(
        ([name, f]) => js_interpreter.setProperty(pseudo_bot_interface, name, createAsync(js_interpreter, f))
      );
      js_interpreter.setProperty(
        pseudo_bot_interface,
        "start",
        js_interpreter.nativeToPseudo((...args) => {
          const { start: start2 } = bot_interface;
          if (shouldRestartOnError(bot)) {
            $scope.startState = js_interpreter.takeStateSnapshot();
          }
          start2(...args);
        })
      );
      js_interpreter.setProperty(
        pseudo_bot_interface,
        "purchase",
        createAsync(js_interpreter, bot_interface.purchase)
      );
      js_interpreter.setProperty(
        pseudo_bot_interface,
        "sellAtMarket",
        createAsync(js_interpreter, bot_interface.sellAtMarket)
      );
      js_interpreter.setProperty(scope, "Bot", pseudo_bot_interface);
      js_interpreter.setProperty(
        scope,
        "watch",
        createAsync(js_interpreter, (watchName) => {
          const { watch } = bot.getInterface();
          if (timeMachineEnabled(bot)) {
            const snapshot = interpreter.takeStateSnapshot();
            if (watchName === "before") {
              $scope.beforeState = snapshot;
            } else {
              $scope.duringState = snapshot;
            }
          }
          return watch(watchName);
        })
      );
      js_interpreter.setProperty(scope, "sleep", createAsync(js_interpreter, sleep2));
    }
    async function stop() {
      return new Promise((resolve, reject) => {
        try {
          const global_timeouts = observer.getState("global_timeouts") ?? [];
          const is_timeouts_cancellable = Object.keys(global_timeouts).every(
            (timeout) => global_timeouts[timeout].is_cancellable
          );
          if (!bot.tradeEngine.contractId && is_timeouts_cancellable) {
            api_base.is_stopping = true;
            global_timeouts.forEach((timeout) => clearTimeout(global_timeouts[timeout]));
            terminateSession().then(() => {
              api_base.is_stopping = false;
              resolve();
            });
          } else if (bot.tradeEngine.isSold === false && !$scope.is_error_triggered && isMultiplierContract(bot?.tradeEngine?.data?.contract?.contract_type ?? "")) {
            observer.register("contract.status", async (contractStatus2) => {
              if (contractStatus2.id === "contract.sold") {
                terminateSession().then(() => resolve());
              }
            });
          } else {
            api_base.is_stopping = true;
            terminateSession().then(() => {
              api_base.is_stopping = false;
              resolve();
            });
          }
        } catch (e) {
          reject(e);
        }
      });
    }
    async function terminateSession() {
      return new Promise((resolve, reject) => {
        try {
          $scope.stopped = true;
          $scope.is_error_triggered = false;
          observer.emit("bot.stop");
          const { ticksService } = $scope;
          api_base.clearSubscriptions();
          ticksService.unsubscribeFromTicksService().then(() => {
            resolve();
          });
        } catch (error2) {
          reject(error2);
        }
      });
    }
    async function unsubscribeFromTicksService() {
      const { ticksService } = $scope;
      return new Promise((resolve, reject) => {
        try {
          ticksService.unsubscribeFromTicksService().then(() => {
            resolve();
          });
        } catch (e) {
          reject(e);
        }
      });
    }
    function run(code) {
      return new Promise((resolve, reject) => {
        const onError = (e) => {
          if ($scope.stopped) {
            return;
          }
          if (e.code === "InvalidToken") {
            observer.emit("client.invalid_token");
            return;
          }
          if (shouldStopOnError(bot, e?.code)) {
            observer.emit("ui.log.error", e.message);
            observer.emit("bot.click_stop");
            return;
          }
          $scope.is_error_triggered = true;
          if (!shouldRestartOnError(bot, e.code) || !botStarted(bot)) {
            reject(e);
            return;
          }
          observer.emit("Error", e);
          const { initArgs, tradeOptions } = bot.tradeEngine;
          terminateSession();
          init();
          $scope.observer.register("Error", onError);
          bot.tradeEngine.init(...initArgs);
          bot.tradeEngine.start(tradeOptions);
          const canRestoreState = $scope.startState && interpreter?.restoreStateSnapshot instanceof Function;
          if (canRestoreState) {
            revert($scope.startState);
          }
        };
        $scope.observer.register("Error", onError);
        interpreter = new import_js_interpreter.default(code, initFunc);
        onFinish = resolve;
        loop();
      });
    }
    return { stop, run, terminateSession, bot, unsubscribeFromTicksService };
  };
  var interpreter_default = Interpreter;
  return __toCommonJS(bundle_entry_exports);
})();
/*! Bundled license information:

@deriv/js-interpreter/lib/js-interpreter.js:
  (**
   * @license
   * Copyright 2013 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)
  (*!*******************************!*\
    !*** ./src/js-interpreter.js ***!
    \*******************************)

immutable/dist/immutable.es.js:
  (**
   * @license
   * MIT License
   * 
   * Copyright (c) 2014-present, Lee Byron and other contributors.
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   * 
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *)
*/
