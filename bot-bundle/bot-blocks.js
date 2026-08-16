var BotBlocks = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e) {
      throw err = [e], e;
    }
  };
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

  // bot-shims/translations.js
  var localize;
  var init_translations = __esm({
    "bot-shims/translations.js"() {
      localize = (s) => typeof s === "string" ? s : "";
    }
  });

  // bot-shims/bot-notification.js
  var init_bot_notification = __esm({
    "bot-shims/bot-notification.js"() {
    }
  });

  // bot-shims/shared.js
  var getCurrencyDisplayCode, getDecimalPlaces;
  var init_shared = __esm({
    "bot-shims/shared.js"() {
      getCurrencyDisplayCode = (c) => c || "USD";
      getDecimalPlaces = () => 2;
    }
  });

  // bot-app/src/external/bot-skeleton/constants/config.ts
  var CRYPTO_CURRENCIES, config;
  var init_config = __esm({
    "bot-app/src/external/bot-skeleton/constants/config.ts"() {
      init_translations();
      CRYPTO_CURRENCIES = ["BTC", "ETH", "LTC", "BCH", "UST"];
      config = () => ({
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
    }
  });

  // bot-app/src/external/bot-skeleton/constants/messages.ts
  var init_messages = __esm({
    "bot-app/src/external/bot-skeleton/constants/messages.ts"() {
    }
  });

  // bot-app/src/external/bot-skeleton/utils/error-config.js
  var generateErrorMessage, error_message_map;
  var init_error_config = __esm({
    "bot-app/src/external/bot-skeleton/utils/error-config.js"() {
      init_translations();
      generateErrorMessage = (block_type, missing_space = "workspace") => {
        return {
          missing: localize("The {{block_type}} block is mandatory and cannot be deleted/disabled.", {
            block_type
          }),
          misplaced: localize("The {{block_type}} block is misplaced from {{missing_space}}.", {
            block_type,
            missing_space
          }),
          disabled: localize("The {{block_type}} block is mandatory and cannot be deleted/disabled.", {
            block_type
          }),
          default: localize("The {{block_type}} block is mandatory and cannot be deleted/disabled.", {
            block_type
          })
        };
      };
      error_message_map = () => ({
        trade_definition: generateErrorMessage("Trade parameters"),
        trade_parameters: generateErrorMessage("Trade parameters"),
        before_purchase: generateErrorMessage("Purchase conditions"),
        purchase_conditions: generateErrorMessage("Purchase conditions"),
        purchase: generateErrorMessage("Purchase", "purchase conditions"),
        trade_definition_tradeoptions: generateErrorMessage("Trade options", "trade parameters"),
        trade_definition_multiplier: generateErrorMessage("Trade options multipliers", "trade parameters"),
        trade_definition_accumulator: generateErrorMessage("Trade options accumulators", "trade parameters")
      });
    }
  });

  // bot-shims/localforage.js
  var init_localforage = __esm({
    "bot-shims/localforage.js"() {
    }
  });

  // bot-shims/lz-string.js
  var init_lz_string = __esm({
    "bot-shims/lz-string.js"() {
    }
  });

  // bot-app/src/external/bot-skeleton/constants/save-type.ts
  var save_types;
  var init_save_type = __esm({
    "bot-app/src/external/bot-skeleton/constants/save-type.ts"() {
      save_types = Object.freeze({
        UNSAVED: "unsaved",
        LOCAL: "local",
        GOOGLE_DRIVE: "google drive"
      });
    }
  });

  // bot-app/src/external/bot-skeleton/constants/index.ts
  var init_constants = __esm({
    "bot-app/src/external/bot-skeleton/constants/index.ts"() {
      init_config();
      init_messages();
      init_save_type();
    }
  });

  // bot-shims/dbot-store-shim.js
  var DBotStore;
  var init_dbot_store_shim = __esm({
    "bot-shims/dbot-store-shim.js"() {
      DBotStore = class {
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
    }
  });

  // bot-app/src/external/bot-skeleton/utils/local-storage.js
  var init_local_storage = __esm({
    "bot-app/src/external/bot-skeleton/utils/local-storage.js"() {
      init_localforage();
      init_lz_string();
      init_constants();
      init_save_type();
      init_dbot_store_shim();
    }
  });

  // node_modules/immutable/dist/immutable.es.js
  function isIndexed(maybeIndexed) {
    return Boolean(maybeIndexed && // @ts-expect-error: maybeIndexed is typed as `{}`, need to change in 6.0 to `maybeIndexed && typeof maybeIndexed === 'object' && IS_INDEXED_SYMBOL in maybeIndexed`
    maybeIndexed[IS_INDEXED_SYMBOL]);
  }
  function isKeyed(maybeKeyed) {
    return Boolean(maybeKeyed && // @ts-expect-error: maybeKeyed is typed as `{}`, need to change in 6.0 to `maybeKeyed && typeof maybeKeyed === 'object' && IS_KEYED_SYMBOL in maybeKeyed`
    maybeKeyed[IS_KEYED_SYMBOL]);
  }
  function isAssociative(maybeAssociative) {
    return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
  }
  function isCollection(maybeCollection) {
    return Boolean(maybeCollection && // @ts-expect-error: maybeCollection is typed as `{}`, need to change in 6.0 to `maybeCollection && typeof maybeCollection === 'object' && IS_COLLECTION_SYMBOL in maybeCollection`
    maybeCollection[IS_COLLECTION_SYMBOL]);
  }
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
  function isRecord(maybeRecord) {
    return Boolean(maybeRecord && // @ts-expect-error: maybeRecord is typed as `{}`, need to change in 6.0 to `maybeRecord && typeof maybeRecord === 'object' && IS_RECORD_SYMBOL in maybeRecord`
    maybeRecord[IS_RECORD_SYMBOL]);
  }
  function isImmutable(maybeImmutable) {
    return isCollection(maybeImmutable) || isRecord(maybeImmutable);
  }
  function isOrdered(maybeOrdered) {
    return Boolean(maybeOrdered && // @ts-expect-error: maybeOrdered is typed as `{}`, need to change in 6.0 to `maybeOrdered && typeof maybeOrdered === 'object' && IS_ORDERED_SYMBOL in maybeOrdered`
    maybeOrdered[IS_ORDERED_SYMBOL]);
  }
  function isSeq(maybeSeq) {
    return Boolean(maybeSeq && // @ts-expect-error: maybeSeq is typed as `{}`, need to change in 6.0 to `maybeSeq && typeof maybeSeq === 'object' && MAYBE_SEQ_SYMBOL in maybeSeq`
    maybeSeq[IS_SEQ_SYMBOL]);
  }
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
  function smi(i32) {
    return i32 >>> 1 & 1073741824 | i32 & 3221225471;
  }
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
    var groups = Map().asMutable();
    collection.__iterate(function(v, k) {
      groups.update(grouper.call(context, v, k, collection), 0, function(a) {
        return a + 1;
      });
    });
    return groups.asImmutable();
  }
  function groupByFactory(collection, grouper, context) {
    var isKeyedIter = isKeyed(collection);
    var groups = (isOrdered(collection) ? OrderedMap() : Map()).asMutable();
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
  function isPlainObject(value) {
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
    return typeof value === "object" && (isImmutable(value) || Array.isArray(value) || isPlainObject(value));
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
  function isMap(maybeMap) {
    return Boolean(maybeMap && // @ts-expect-error: maybeMap is typed as `{}`, need to change in 6.0 to `maybeMap && typeof maybeMap === 'object' && IS_MAP_SYMBOL in maybeMap`
    maybeMap[IS_MAP_SYMBOL]);
  }
  function invariant(condition, error) {
    if (!condition) {
      throw new Error(error);
    }
  }
  function assertNotInfinite(size) {
    invariant(size !== Infinity, "Cannot perform this action with an infinite size.");
  }
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
  function isList(maybeList) {
    return Boolean(maybeList && // @ts-expect-error: maybeList is typed as `{}`, need to change in 6.0 to `maybeList && typeof maybeList === 'object' && IS_LIST_SYMBOL in maybeList`
    maybeList[IS_LIST_SYMBOL]);
  }
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
  function levelCapacity(exp) {
    return exp < 31 ? 1 << exp : Math.pow(2, exp);
  }
  function isOrderedMap(maybeOrderedMap) {
    return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
  }
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
  function isStack(maybeStack) {
    return Boolean(maybeStack && // @ts-expect-error: maybeStack is typed as `{}`, need to change in 6.0 to `maybeStack && typeof maybeStack === 'object' && MAYBE_STACK_SYMBOL in maybeStack`
    maybeStack[IS_STACK_SYMBOL]);
  }
  function makeStack(size, head, ownerID, hash2) {
    var map2 = Object.create(StackPrototype);
    map2.size = size;
    map2._head = head;
    map2.__ownerID = ownerID;
    map2.__hash = hash2;
    map2.__altered = false;
    return map2;
  }
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
  function isSet(maybeSet) {
    return Boolean(maybeSet && // @ts-expect-error: maybeSet is typed as `{}`,  need to change in 6.0 to `maybeSeq && typeof maybeSet === 'object' && MAYBE_SET_SYMBOL in maybeSet`
    maybeSet[IS_SET_SYMBOL]);
  }
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
  function defaultZipper() {
    return arrCopy(arguments);
  }
  function isOrderedSet(maybeOrderedSet) {
    return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
  }
  function makeOrderedSet(map2, ownerID) {
    var set3 = Object.create(OrderedSetPrototype);
    set3.size = map2 ? map2.size : 0;
    set3._map = map2;
    set3.__ownerID = ownerID;
    return set3;
  }
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
    } catch (error) {
    }
  }
  var IS_INDEXED_SYMBOL, IS_KEYED_SYMBOL, IS_COLLECTION_SYMBOL, Collection, KeyedCollection, IndexedCollection, SetCollection, ITERATE_KEYS, ITERATE_VALUES, ITERATE_ENTRIES, REAL_ITERATOR_SYMBOL, FAUX_ITERATOR_SYMBOL, ITERATOR_SYMBOL, Iterator, DELETE, SHIFT, SIZE, MASK, NOT_SET, IS_RECORD_SYMBOL, IS_ORDERED_SYMBOL, IS_SEQ_SYMBOL, hasOwnProperty, Seq, KeyedSeq, IndexedSeq, SetSeq, ArraySeq, ObjectSeq, CollectionSeq, EMPTY_SEQ, imul, defaultValueOf, COLLISION_HASH_BASE, isExtensible, canDefineProperty, usingWeakMap, weakMap, symbolMap, _objHashUID, UID_HASH_KEY, STRING_HASH_CACHE_MIN_STRLEN, STRING_HASH_CACHE_MAX_SIZE, STRING_HASH_CACHE_SIZE, stringHashCache, ToKeyedSequence, ToIndexedSequence, ToSetSequence, FromEntriesSequence, ConcatSeq, toString2, IS_MAP_SYMBOL, Map, MapPrototype, ArrayMapNode, BitmapIndexedNode, HashArrayMapNode, HashCollisionNode, ValueNode, MapIterator, EMPTY_MAP, MAX_ARRAY_MAP_SIZE, MAX_BITMAP_INDEXED_SIZE, MIN_HASH_ARRAY_MAP_SIZE, MIN_HASH_COLLISION_INDEX_SIZE, IS_LIST_SYMBOL, List, ListPrototype, VNode, DONE, MAX_LIST_SIZE, OrderedMap, EMPTY_ORDERED_MAP, IS_STACK_SYMBOL, Stack, StackPrototype, EMPTY_STACK, Range, EMPTY_RANGE, IS_SET_SYMBOL, Set2, SetPrototype, EMPTY_SET, CollectionPrototype, KeyedCollectionPrototype, IndexedCollectionPrototype, SetCollectionPrototype, OrderedSet, OrderedSetPrototype, EMPTY_ORDERED_SET, Record, RecordPrototype;
  var init_immutable_es = __esm({
    "node_modules/immutable/dist/immutable.es.js"() {
      IS_INDEXED_SYMBOL = "@@__IMMUTABLE_INDEXED__@@";
      IS_KEYED_SYMBOL = "@@__IMMUTABLE_KEYED__@@";
      IS_COLLECTION_SYMBOL = "@@__IMMUTABLE_ITERABLE__@@";
      Collection = function Collection2(value) {
        return isCollection(value) ? value : Seq(value);
      };
      KeyedCollection = /* @__PURE__ */ (function(Collection3) {
        function KeyedCollection2(value) {
          return isKeyed(value) ? value : KeyedSeq(value);
        }
        if (Collection3) KeyedCollection2.__proto__ = Collection3;
        KeyedCollection2.prototype = Object.create(Collection3 && Collection3.prototype);
        KeyedCollection2.prototype.constructor = KeyedCollection2;
        return KeyedCollection2;
      })(Collection);
      IndexedCollection = /* @__PURE__ */ (function(Collection3) {
        function IndexedCollection2(value) {
          return isIndexed(value) ? value : IndexedSeq(value);
        }
        if (Collection3) IndexedCollection2.__proto__ = Collection3;
        IndexedCollection2.prototype = Object.create(Collection3 && Collection3.prototype);
        IndexedCollection2.prototype.constructor = IndexedCollection2;
        return IndexedCollection2;
      })(Collection);
      SetCollection = /* @__PURE__ */ (function(Collection3) {
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
      ITERATE_KEYS = 0;
      ITERATE_VALUES = 1;
      ITERATE_ENTRIES = 2;
      REAL_ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      FAUX_ITERATOR_SYMBOL = "@@iterator";
      ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;
      Iterator = function Iterator2(next) {
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
      DELETE = "delete";
      SHIFT = 5;
      SIZE = 1 << SHIFT;
      MASK = SIZE - 1;
      NOT_SET = {};
      IS_RECORD_SYMBOL = "@@__IMMUTABLE_RECORD__@@";
      IS_ORDERED_SYMBOL = "@@__IMMUTABLE_ORDERED__@@";
      IS_SEQ_SYMBOL = "@@__IMMUTABLE_SEQ__@@";
      hasOwnProperty = Object.prototype.hasOwnProperty;
      Seq = /* @__PURE__ */ (function(Collection3) {
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
      KeyedSeq = /* @__PURE__ */ (function(Seq2) {
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
      IndexedSeq = /* @__PURE__ */ (function(Seq2) {
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
      SetSeq = /* @__PURE__ */ (function(Seq2) {
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
      ArraySeq = /* @__PURE__ */ (function(IndexedSeq2) {
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
      ObjectSeq = /* @__PURE__ */ (function(KeyedSeq2) {
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
      CollectionSeq = /* @__PURE__ */ (function(IndexedSeq2) {
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
      imul = typeof Math.imul === "function" && Math.imul(4294967295, 2) === -2 ? Math.imul : function imul2(a, b) {
        a |= 0;
        b |= 0;
        var c = a & 65535;
        var d = b & 65535;
        return c * d + ((a >>> 16) * d + c * (b >>> 16) << 16 >>> 0) | 0;
      };
      defaultValueOf = Object.prototype.valueOf;
      COLLISION_HASH_BASE = (Math.random() * 1048576 | 1) % 1048576 || 40503;
      isExtensible = Object.isExtensible;
      canDefineProperty = (function() {
        try {
          Object.defineProperty({}, "@", {});
          return true;
        } catch (e) {
          return false;
        }
      })();
      usingWeakMap = typeof WeakMap === "function";
      if (usingWeakMap) {
        weakMap = /* @__PURE__ */ new WeakMap();
      }
      symbolMap = /* @__PURE__ */ Object.create(null);
      _objHashUID = 0;
      UID_HASH_KEY = "__immutablehash__";
      if (typeof Symbol === "function") {
        UID_HASH_KEY = Symbol(UID_HASH_KEY);
      }
      STRING_HASH_CACHE_MIN_STRLEN = 16;
      STRING_HASH_CACHE_MAX_SIZE = 255;
      STRING_HASH_CACHE_SIZE = 0;
      stringHashCache = {};
      ToKeyedSequence = /* @__PURE__ */ (function(KeyedSeq2) {
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
      ToIndexedSequence = /* @__PURE__ */ (function(IndexedSeq2) {
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
      ToSetSequence = /* @__PURE__ */ (function(SetSeq2) {
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
      FromEntriesSequence = /* @__PURE__ */ (function(KeyedSeq2) {
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
      ConcatSeq = /* @__PURE__ */ (function(Seq2) {
        function ConcatSeq2(iterables) {
          this._wrappedIterables = iterables.flatMap(function(iterable) {
            if (iterable._wrappedIterables) {
              return iterable._wrappedIterables;
            }
            return [iterable];
          });
          this.size = this._wrappedIterables.reduce(function(sum, iterable) {
            if (sum !== void 0) {
              var size = iterable.size;
              if (size !== void 0) {
                return sum + size;
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
      toString2 = Object.prototype.toString;
      IS_MAP_SYMBOL = "@@__IMMUTABLE_MAP__@@";
      Map = /* @__PURE__ */ (function(KeyedCollection2) {
        function Map2(value) {
          return value === void 0 || value === null ? emptyMap() : isMap(value) && !isOrdered(value) ? value : emptyMap().withMutations(function(map2) {
            var iter = KeyedCollection2(value);
            assertNotInfinite(iter.size);
            iter.forEach(function(v, k) {
              return map2.set(k, v);
            });
          });
        }
        if (KeyedCollection2) Map2.__proto__ = KeyedCollection2;
        Map2.prototype = Object.create(KeyedCollection2 && KeyedCollection2.prototype);
        Map2.prototype.constructor = Map2;
        Map2.prototype.toString = function toString5() {
          return this.__toString("Map {", "}");
        };
        Map2.prototype.get = function get11(k, notSetValue) {
          return this._root ? this._root.get(0, void 0, k, notSetValue) : notSetValue;
        };
        Map2.prototype.set = function set3(k, v) {
          return updateMap(this, k, v);
        };
        Map2.prototype.remove = function remove3(k) {
          return updateMap(this, k, NOT_SET);
        };
        Map2.prototype.deleteAll = function deleteAll(keys2) {
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
        Map2.prototype.clear = function clear2() {
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
        Map2.prototype.sort = function sort2(comparator) {
          return OrderedMap(sortFactory(this, comparator));
        };
        Map2.prototype.sortBy = function sortBy2(mapper, comparator) {
          return OrderedMap(sortFactory(this, comparator, mapper));
        };
        Map2.prototype.map = function map2(mapper, context) {
          var this$1$1 = this;
          return this.withMutations(function(map3) {
            map3.forEach(function(value, key) {
              map3.set(key, mapper.call(context, value, key, this$1$1));
            });
          });
        };
        Map2.prototype.__iterator = function __iterator2(type, reverse3) {
          return new MapIterator(this, type, reverse3);
        };
        Map2.prototype.__iterate = function __iterate2(fn, reverse3) {
          var this$1$1 = this;
          var iterations = 0;
          this._root && this._root.iterate(function(entry) {
            iterations++;
            return fn(entry[1], entry[0], this$1$1);
          }, reverse3);
          return iterations;
        };
        Map2.prototype.__ensureOwner = function __ensureOwner2(ownerID) {
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
        return Map2;
      })(KeyedCollection);
      Map.isMap = isMap;
      MapPrototype = Map.prototype;
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
      ArrayMapNode = function ArrayMapNode2(ownerID, entries3) {
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
      BitmapIndexedNode = function BitmapIndexedNode2(ownerID, bitmap, nodes) {
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
      HashArrayMapNode = function HashArrayMapNode2(ownerID, count2, nodes) {
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
      HashCollisionNode = function HashCollisionNode2(ownerID, keyHash, entries3) {
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
      ValueNode = function ValueNode2(ownerID, keyHash, entry) {
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
      MapIterator = /* @__PURE__ */ (function(Iterator3) {
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
      MAX_ARRAY_MAP_SIZE = SIZE / 4;
      MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
      MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;
      MIN_HASH_COLLISION_INDEX_SIZE = 16;
      IS_LIST_SYMBOL = "@@__IMMUTABLE_LIST__@@";
      List = /* @__PURE__ */ (function(IndexedCollection2) {
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
      ListPrototype = List.prototype;
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
      VNode = function VNode2(array, ownerID) {
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
      DONE = {};
      MAX_LIST_SIZE = Math.pow(2, 30);
      OrderedMap = /* @__PURE__ */ (function(Map2) {
        function OrderedMap2(value) {
          return value === void 0 || value === null ? emptyOrderedMap() : isOrderedMap(value) ? value : emptyOrderedMap().withMutations(function(map2) {
            var iter = KeyedCollection(value);
            assertNotInfinite(iter.size);
            iter.forEach(function(v, k) {
              return map2.set(k, v);
            });
          });
        }
        if (Map2) OrderedMap2.__proto__ = Map2;
        OrderedMap2.prototype = Object.create(Map2 && Map2.prototype);
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
      })(Map);
      OrderedMap.isOrderedMap = isOrderedMap;
      OrderedMap.prototype[IS_ORDERED_SYMBOL] = true;
      OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;
      IS_STACK_SYMBOL = "@@__IMMUTABLE_STACK__@@";
      Stack = /* @__PURE__ */ (function(IndexedCollection2) {
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
      StackPrototype = Stack.prototype;
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
      Range = /* @__PURE__ */ (function(IndexedSeq2) {
        function Range2(start, end, step) {
          if (step === void 0) step = 1;
          if (!(this instanceof Range2)) {
            return new Range2(start, end, step);
          }
          invariant(step !== 0, "Cannot step a Range by 0");
          invariant(
            start !== void 0,
            "You must define a start value when using Range"
          );
          invariant(
            end !== void 0,
            "You must define an end value when using Range"
          );
          step = Math.abs(step);
          if (end < start) {
            step = -step;
          }
          this._start = start;
          this._end = end;
          this._step = step;
          this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
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
        Range2.prototype.indexOf = function indexOf2(searchValue) {
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
      IS_SET_SYMBOL = "@@__IMMUTABLE_SET__@@";
      Set2 = /* @__PURE__ */ (function(SetCollection2) {
        function Set3(value) {
          return value === void 0 || value === null ? emptySet() : isSet(value) && !isOrdered(value) ? value : emptySet().withMutations(function(set3) {
            var iter = SetCollection2(value);
            assertNotInfinite(iter.size);
            iter.forEach(function(v) {
              return set3.add(v);
            });
          });
        }
        if (SetCollection2) Set3.__proto__ = SetCollection2;
        Set3.prototype = Object.create(SetCollection2 && SetCollection2.prototype);
        Set3.prototype.constructor = Set3;
        Set3.of = function of() {
          return this(arguments);
        };
        Set3.fromKeys = function fromKeys(value) {
          return this(KeyedCollection(value).keySeq());
        };
        Set3.intersect = function intersect(sets) {
          sets = Collection(sets).toArray();
          return sets.length ? SetPrototype.intersect.apply(Set3(sets.pop()), sets) : emptySet();
        };
        Set3.union = function union(sets) {
          sets = Collection(sets).toArray();
          return sets.length ? SetPrototype.union.apply(Set3(sets.pop()), sets) : emptySet();
        };
        Set3.prototype.toString = function toString5() {
          return this.__toString("Set {", "}");
        };
        Set3.prototype.has = function has5(value) {
          return this._map.has(value);
        };
        Set3.prototype.add = function add(value) {
          return updateSet(this, this._map.set(value, value));
        };
        Set3.prototype.remove = function remove3(value) {
          return updateSet(this, this._map.remove(value));
        };
        Set3.prototype.clear = function clear2() {
          return updateSet(this, this._map.clear());
        };
        Set3.prototype.map = function map2(mapper, context) {
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
        Set3.prototype.union = function union() {
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
        Set3.prototype.intersect = function intersect() {
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
        Set3.prototype.subtract = function subtract() {
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
        Set3.prototype.sort = function sort2(comparator) {
          return OrderedSet(sortFactory(this, comparator));
        };
        Set3.prototype.sortBy = function sortBy2(mapper, comparator) {
          return OrderedSet(sortFactory(this, comparator, mapper));
        };
        Set3.prototype.wasAltered = function wasAltered3() {
          return this._map.wasAltered();
        };
        Set3.prototype.__iterate = function __iterate2(fn, reverse3) {
          var this$1$1 = this;
          return this._map.__iterate(function(k) {
            return fn(k, k, this$1$1);
          }, reverse3);
        };
        Set3.prototype.__iterator = function __iterator2(type, reverse3) {
          return this._map.__iterator(type, reverse3);
        };
        Set3.prototype.__ensureOwner = function __ensureOwner2(ownerID) {
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
        return Set3;
      })(SetCollection);
      Set2.isSet = isSet;
      SetPrototype = Set2.prototype;
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
          return Map(this.toKeyedSeq());
        },
        toObject,
        toOrderedMap: function toOrderedMap() {
          return OrderedMap(this.toKeyedSeq());
        },
        toOrderedSet: function toOrderedSet() {
          return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
        },
        toSet: function toSet() {
          return Set2(isKeyed(this) ? this.valueSeq() : this);
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
        forEach: function forEach(sideEffect, context) {
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
      CollectionPrototype = Collection.prototype;
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
      KeyedCollectionPrototype = KeyedCollection.prototype;
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
        indexOf: function indexOf(searchValue) {
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
      IndexedCollectionPrototype = IndexedCollection.prototype;
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
      SetCollectionPrototype = SetCollection.prototype;
      SetCollectionPrototype.has = CollectionPrototype.includes;
      SetCollectionPrototype.contains = SetCollectionPrototype.includes;
      SetCollectionPrototype.keys = SetCollectionPrototype.values;
      mixin(KeyedSeq, KeyedCollectionPrototype);
      mixin(IndexedSeq, IndexedCollectionPrototype);
      mixin(SetSeq, SetCollectionPrototype);
      OrderedSet = /* @__PURE__ */ (function(Set3) {
        function OrderedSet2(value) {
          return value === void 0 || value === null ? emptyOrderedSet() : isOrderedSet(value) ? value : emptyOrderedSet().withMutations(function(set3) {
            var iter = SetCollection(value);
            assertNotInfinite(iter.size);
            iter.forEach(function(v) {
              return set3.add(v);
            });
          });
        }
        if (Set3) OrderedSet2.__proto__ = Set3;
        OrderedSet2.prototype = Object.create(Set3 && Set3.prototype);
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
      })(Set2);
      OrderedSet.isOrderedSet = isOrderedSet;
      OrderedSetPrototype = OrderedSet.prototype;
      OrderedSetPrototype[IS_ORDERED_SYMBOL] = true;
      OrderedSetPrototype.zip = IndexedCollectionPrototype.zip;
      OrderedSetPrototype.zipWith = IndexedCollectionPrototype.zipWith;
      OrderedSetPrototype.zipAll = IndexedCollectionPrototype.zipAll;
      OrderedSetPrototype.__empty = emptyOrderedSet;
      OrderedSetPrototype.__make = makeOrderedSet;
      Record = function Record2(defaultValues, name) {
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
      RecordPrototype = Record.prototype;
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
    }
  });

  // bot-app/src/external/bot-skeleton/utils/observer.js
  var Observer, observer;
  var init_observer = __esm({
    "bot-app/src/external/bot-skeleton/utils/observer.js"() {
      init_immutable_es();
      Observer = class {
        constructor() {
          this.eam = new Map();
        }
        register(event, _action, once, unregisterIfError, unregisterAllBefore) {
          if (unregisterAllBefore) {
            this.unregisterAll(event);
          }
          const apiError = (error) => {
            if (error.type === unregisterIfError.type) {
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
      observer = new Observer();
    }
  });

  // bot-app/src/external/bot-skeleton/utils/workspace.js
  var removeLimitedBlocks;
  var init_workspace = __esm({
    "bot-app/src/external/bot-skeleton/utils/workspace.js"() {
      init_config();
      removeLimitedBlocks = (workspace, block_types) => {
        const types = Array.isArray(block_types) ? block_types : [block_types];
        types.forEach((block_type) => {
          if (config().single_instance_blocks.includes(block_type)) {
            workspace.getAllBlocks().forEach((ws_block) => {
              if (ws_block.type === block_type) {
                ws_block.dispose();
              }
            });
          }
        });
      };
    }
  });

  // bot-shims/empty.js
  var handleProposalRequestForAccumulators, empty_default;
  var init_empty = __esm({
    "bot-shims/empty.js"() {
      handleProposalRequestForAccumulators = () => {
      };
      empty_default = {};
    }
  });

  // bot-shims/file-saver.js
  var file_saver_default;
  var init_file_saver = __esm({
    "bot-shims/file-saver.js"() {
      file_saver_default = {};
    }
  });

  // bot-shims/scratch-shared-shim.js
  var saveAs, getContractTypeOptions;
  var init_scratch_shared_shim = __esm({
    "bot-shims/scratch-shared-shim.js"() {
      init_file_saver();
      saveAs = ({ data, filename, type }) => {
        const blob = new Blob([data], { type });
        file_saver_default.saveAs(blob, filename);
      };
      getContractTypeOptions = (contract_type, trade_type) => {
        if (trade_type && trade_type !== "na" && trade_type !== "") {
          const trade_types = {
            CALL: [["Rise", "CALL"]],
            PUT: [["Fall", "PUT"]],
            BOTH: [["Rise", "CALL"], ["Fall", "PUT"]],
            DIGIT: [["Matches", "DIGITMATCH"], ["Differs", "DIGITDIFF"], ["Even", "DIGITEVEN"], ["Odd", "DIGITODD"], ["Over", "DIGITOVER"], ["Under", "DIGITUNDER"]],
            TICK: [["Matches", "DIGITMATCH"], ["Differs", "DIGITDIFF"]],
            ASIAN: [["Asian Up", "ASIANU"], ["Asian Down", "ASIAND"]],
            RANGE: [["Stays Between", "RANGEBETWEEN"], ["Goes Outside", "RANGEOUTSIDE"]],
            UPDOWN: [["Goes Up", "UPDOWNU"], ["Goes Down", "UPDOWN"]]
          };
          const contract_options = (trade_types[trade_type] || []).map((o) => [...o].reverse());
          if (contract_type && contract_type !== "both") {
            return contract_options.filter((o) => o[1] === contract_type);
          }
          return contract_options;
        }
        return [];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/utils/index.js
  var inject_workspace_options, loadBlocksFromHeader, loadBlocksFromRemote, addLoaderBlocksFirst, addDomAsBlock, runGroupedEvents, runIrreversibleEvents, emptyTextValidator, downloadBlock, download_option, excludeOptionFromContextMenu, all_context_menu_options, deleteBlocksLocaleText, deleteAllBlocksLocaleText, modifyContextMenu, evaluateExpression, appendCollapsedMainBlocksFields, appendCollapsedProcedureBlocksFields, setCurrency;
  var init_utils = __esm({
    "bot-app/src/external/bot-skeleton/scratch/utils/index.js"() {
      init_bot_notification();
      init_bot_notification();
      init_shared();
      init_translations();
      init_config();
      init_messages();
      init_error_config();
      init_local_storage();
      init_observer();
      init_workspace();
      init_empty();
      init_dbot_store_shim();
      init_scratch_shared_shim();
      inject_workspace_options = {
        // Getter (not a literal) so the public-path prefix is read when the options are spread
        // into Blockly.inject at runtime — after public-path.ts has set window.__webpack_public_path__
        // ('/bot/preview/' in the preview build) — rather than at module-load time when it may be unset.
        get media() {
          return `${""}assets/images/`;
        },
        zoom: {
          wheel: true,
          startScale: config().workspaces.previewWorkspaceStartScale
        },
        readOnly: true,
        scrollbars: true,
        renderer: "zelos"
      };
      loadBlocksFromHeader = (xml_string, block) => {
        return new Promise((resolve, reject) => {
          let xml;
          try {
            xml = window.Blockly.utils.xml.textToDom(xml_string);
          } catch (error) {
            return reject(localize("Unrecognized file format"));
          }
          try {
            const is_collection = xml.hasAttribute("collection") && xml.getAttribute("collection") === "true";
            if (!is_collection) {
              reject(localize("Remote blocks to load must be a collection."));
            }
            addLoaderBlocksFirst(xml).then(() => {
              Array.from(xml.children).forEach((el_block) => addDomAsBlock(el_block, block));
              resolve();
            }).catch(() => {
              reject();
            });
          } catch (e) {
            reject(localize("Unable to load the block file."));
          }
        });
      };
      loadBlocksFromRemote = (block) => {
        return new Promise((resolve, reject) => {
          let url = block.getFieldValue("URL");
          if (url.indexOf("http") === -1) {
            url = `http://${url}`;
          }
          const url_pattern = /[^/]*\.[a-zA-Z]{3}$/;
          const has_possible_missing_index_xml = url.slice(-1)[0] === "/";
          if (!url.match(url_pattern) && !has_possible_missing_index_xml) {
            return reject(localize("Target must be an XML file"));
          }
          if (has_possible_missing_index_xml) {
            url += "index.xml";
          }
          if (block.isKnownUrl(url)) {
            block.setDisabled(true);
            return reject(localize("This URL is already loaded"));
          }
          const onFetchError = () => reject(localize("An error occured while trying to load the URL"));
          fetch(url).then((response) => {
            if (response.ok) {
              response.text().then((xml_string) => {
                loadBlocksFromHeader(xml_string, block).then(() => resolve(block)).catch(onFetchError);
              });
            } else {
              onFetchError();
            }
          }).catch(onFetchError);
        });
      };
      addLoaderBlocksFirst = (xml) => {
        return new Promise((resolve, reject) => {
          const promises = [];
          Array.from(xml.children).forEach((el_block) => {
            const block_type = el_block.getAttribute("type");
            if (block_type === "loader") {
              el_block.remove();
              const loader = window.Blockly.Xml.domToBlock(el_block, window.Blockly.derivWorkspace);
              promises.push(loadBlocksFromRemote(loader));
            }
          });
          if (promises.length) {
            Promise.all(promises).then(resolve, reject);
          } else {
            resolve([]);
          }
        });
      };
      addDomAsBlock = (el_block, parent_block = null) => {
        if (el_block.tagName.toLowerCase() === "variables") {
          return window.Blockly.Xml.domToVariables(el_block, window.Blockly.derivWorkspace);
        }
        const block_type = el_block.getAttribute("type");
        const block_conversion = new empty_default();
        const block_xml = window.Blockly.Xml.blockToDom(block_conversion.convertBlockNode(el_block));
        Array.from(block_xml.getElementsByTagName("arg")).forEach((el) => {
          if (el.hasAttribute("varid")) {
            el.setAttribute("varId", el.getAttribute("varid"));
          }
        });
        removeLimitedBlocks(window.Blockly.derivWorkspace, block_type);
        const block = window.Blockly.Xml.domToBlock(block_xml, window.Blockly.derivWorkspace);
        if (parent_block) {
          parent_block.blocks_added_by_me.push(block);
        }
        return block;
      };
      runGroupedEvents = (use_existing_group, callbackFn, opt_group_name) => {
        const group = use_existing_group && window.Blockly.Events.getGroup() || opt_group_name || true;
        window.Blockly.Events.setGroup(group);
        callbackFn();
        if (!use_existing_group) {
          window.Blockly.Events.setGroup(false);
        }
      };
      runIrreversibleEvents = (callbackFn) => {
        const { recordUndo } = window.Blockly.Events;
        window.Blockly.Events.setRecordUndo(false);
        callbackFn();
        window.Blockly.Events.setRecordUndo(recordUndo ?? true);
      };
      emptyTextValidator = (input) => {
        return !input || input === "''";
      };
      downloadBlock = () => {
        const xml_block = window.Blockly?.getSelected()?.svgGroup_;
        const xml_text = window.Blockly.Xml.domToPrettyText(xml_block);
        saveAs({ data: xml_text, type: "text/xml;charset=utf-8", filename: "block.xml" });
      };
      download_option = () => ({
        text: localize("Download Block"),
        enabled: true,
        callback: downloadBlock
      });
      excludeOptionFromContextMenu = (menu, exclude_items) => {
        for (let i = 0; i <= menu.length - 1; i++) {
          const menu_text = localize(menu[i].text);
          if (exclude_items.includes(menu_text)) {
            menu.splice(i, 1);
          } else {
            menu[i].text = menu_text;
          }
        }
      };
      all_context_menu_options = () => [
        localize("Duplicate"),
        localize("Add Comment"),
        localize("Remove Comment"),
        localize("Collapse Block"),
        localize("Expand Block"),
        localize("Disable Block"),
        localize("Enable Block"),
        localize("Download Block")
      ];
      deleteBlocksLocaleText = () => localize("Delete Block");
      deleteAllBlocksLocaleText = () => localize("Delete All Blocks");
      modifyContextMenu = (menu, add_new_items = []) => {
        const common_included_items = [download_option()];
        const include_items = [...common_included_items, ...add_new_items];
        include_items.forEach((item) => {
          menu.push({
            text: item.text,
            enabled: item.enabled,
            callback: item.callback
          });
        });
        for (let i = 0; i < menu.length; i++) {
          const menu_text = menu[i]?.text?.toLowerCase();
          if (menu_text?.includes("delete")) {
            if (menu_text.includes("block") && !menu_text.includes("blocks")) {
              menu[i].text = deleteBlocksLocaleText();
            } else {
              menu[i].text = deleteAllBlocksLocaleText();
            }
          } else {
            const localized_text = localize(menu[i].text);
            if (all_context_menu_options().includes(localized_text)) {
              menu[i].text = localized_text;
            }
          }
        }
      };
      evaluateExpression = (value) => {
        if (!value) return "invalid_input";
        try {
          const result = new Function(`return ${value.trim()}`)();
          return isNaN(result) ? "invalid_input" : result;
        } catch (e) {
          return "invalid_input";
        }
      };
      appendCollapsedMainBlocksFields = (block_instance) => {
        try {
          if (!block_instance?.collapsed_) return;
          const type_of_block = block_instance?.getField(block_instance.type);
          if (type_of_block) return;
          const [block_image, block_name] = block_instance?.inputList?.[0]?.fieldRow.map((field) => field.value_) || [];
          const collapsed_field = block_instance?.getField(Blockly.constants.COLLAPSED_FIELD_NAME);
          const collapsed_input = block_instance?.getInput(Blockly.constants.COLLAPSED_INPUT_NAME);
          if (collapsed_input && collapsed_field) {
            collapsed_input.appendField(new Blockly.FieldImage(block_image, 25, 25, "", ""));
            collapsed_input.appendField(new Blockly.FieldLabel(block_name, "blocklyTextRootBlockHeaderCollapsed"));
            const dropdown_path = `${block_instance?.workspace.options.pathToMedia}dropdown-arrow.svg`;
            const field_expand_icon = new Blockly.FieldImage(
              dropdown_path,
              16,
              16,
              localize("Collapsed"),
              () => block_instance?.setCollapsed(false)
            );
            collapsed_input.appendField(field_expand_icon, block_instance.type);
            collapsed_input.sourceBlock.width = 300;
            collapsed_field.setVisible(false);
          }
        } catch (e) {
          observer.emit("ui.log.error", e);
        }
      };
      appendCollapsedProcedureBlocksFields = (instance) => {
        const collapsed_input = instance.getInput("_TEMP_COLLAPSED_INPUT");
        if (collapsed_input && instance.collapsed_ && !collapsed_input.icon_added) {
          collapsed_input.icon_added = true;
          const dropdown_path = `${instance.workspace.options.pathToMedia}dropdown-arrow.svg`;
          const field_expand_icon = new Blockly.FieldImage(
            dropdown_path,
            16,
            16,
            localize("Collapsed"),
            () => instance.setCollapsed(false)
          );
          const function_name = instance.getFieldValue("NAME");
          const args = ` (${instance?.arguments?.join(", ")})`;
          collapsed_input.appendField(new Blockly.FieldLabel(localize("function"), "")).appendField(new Blockly.FieldLabel(function_name + args, "header__title")).appendField(field_expand_icon);
          const remove_last_input = (dummy_input) => {
            const tmp_array = dummy_input.fieldRow;
            tmp_array[0]?.setVisible(false);
            tmp_array[0]?.forceRerender();
          };
          remove_last_input(collapsed_input);
        }
      };
      setCurrency = (block_instance) => {
        const currency_field = block_instance.getField("CURRENCY_LIST");
        const { currency } = DBotStore.instance.client;
        currency_field?.setValue(getCurrencyDisplayCode(currency));
      };
    }
  });

  // bot-shims/block-images.js
  var defineContract, purchase, sellContract, finishSign, plusIconDark, minusIconDark, plusIconLight;
  var init_block_images = __esm({
    "bot-shims/block-images.js"() {
      defineContract = { src: "", width: 24, height: 24, alt: "Define Contract" };
      purchase = { src: "", width: 24, height: 24, alt: "Purchase" };
      sellContract = { src: "", width: 24, height: 24, alt: "Sell" };
      finishSign = { src: "", width: 24, height: 24, alt: "Finish" };
      plusIconDark = { src: "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="#3D7BFF"/><path d="M8 4v8M4 8h8" stroke="#fff" stroke-width="1.5"/></svg>'), width: 16, height: 16, alt: "+" };
      minusIconDark = { src: "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="#3D7BFF"/><path d="M4 8h8" stroke="#fff" stroke-width="1.5"/></svg>'), width: 16, height: 16, alt: "-" };
      plusIconLight = plusIconDark;
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/Functions/procedures_defnoreturn.js
  var init_procedures_defnoreturn = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/Functions/procedures_defnoreturn.js"() {
      init_translations();
      init_utils();
      init_block_images();
      window.Blockly.Blocks.procedures_defnoreturn = {
        init() {
          this.arguments = [];
          this.argument_var_models = [];
          this.is_adding = false;
          this.timeout_id;
          this.jsonInit(this.definition());
          if (window.Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT) {
            this.setCommentText(window.Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT);
          }
          const nameField = this.getField("NAME");
          nameField.setValidator(window.Blockly.Procedures.rename);
          const fieldImage = new window.Blockly.FieldImage(plusIconLight, 24, 24, "+", () => this.onAddClick());
          const dropdown_path = `${this.workspace.options.pathToMedia}dropdown-arrow.svg`;
          const fieldImageCollapse = new window.Blockly.FieldImage(
            dropdown_path,
            16,
            16,
            "v",
            () => this.toggleCollapseWithDelay(true),
            false,
            true
          );
          this.appendDummyInput("ADD_ICON").appendField(fieldImage);
          this.appendDummyInput("COLLAPSED_INPUT").appendField(fieldImageCollapse);
          this.setStatements(true);
        },
        definition() {
          return {
            message0: localize("function {{ function_name }} {{ function_params }}", {
              function_name: "%1",
              function_params: "%2"
            }),
            args0: [
              {
                type: "field_input",
                name: "NAME",
                text: ""
              },
              {
                type: "field_label",
                name: "PARAMS",
                text: ""
              }
            ],
            inputsInline: true,
            colour: window.Blockly.Colours.Special2.colour,
            colourSecondary: window.Blockly.Colours.Special2.colourSecondary,
            colourTertiary: window.Blockly.Colours.Special2.colourTertiary,
            tooltip: localize("Function with no return value"),
            category: window.Blockly.Categories.Functions
          };
        },
        meta() {
          return {
            display_name: localize("Function"),
            description: localize(
              "This block creates a function, which is a group of instructions that can be executed at any time. Place other blocks in here to perform any kind of action that you need in your strategy. When all the instructions in a function have been carried out, your bot will continue with the remaining blocks in your strategy. Click the \u201Cdo something\u201D field to give it a name of your choice. Click the plus icon to send a value (as a named variable) to your function."
            )
          };
        },
        /**
         * Sets the block colour and updates this procedure's caller blocks
         * to reflect the same name on a change.
         * @param {!window.Blockly.Events.Abstract} event Change event.
         * @this window.Blockly.Block
         */
        onchange(event) {
          const allowedEvents = [
            window.Blockly.Events.BLOCK_DELETE,
            window.Blockly.Events.BLOCK_CREATE,
            window.Blockly.Events.BLOCK_CHANGE
          ];
          if (!this.workspace || window.Blockly.derivWorkspace.isFlyoutVisible || !allowedEvents.includes(event.type)) {
            return;
          }
          if (event.type === window.Blockly.Events.BLOCK_CREATE || window.Blockly.Events.BLOCK_CHANGE) {
            if (event.blockId === this.id && event.name === "NAME") {
              this.getProcedureCallers().forEach((block) => {
                block.setFieldValue(event.newValue, "NAME");
              });
            }
            appendCollapsedProcedureBlocksFields(this);
          }
        },
        /**
         * Prompt the user for parameter name
         * @this window.Blockly.Block
         */
        onAddClick() {
          if (this.is_adding || this.workspace.options.readOnly || window.Blockly.derivWorkspace.isFlyoutVisible) {
            return;
          }
          this.is_adding = true;
          clearTimeout(this.timeout_id);
          this.timeout_id = setTimeout(() => {
            const promptMessage = localize("Specify a parameter name:");
            window.Blockly.dialog.prompt(promptMessage, "", (paramName) => {
              if (paramName) {
                const variable = window.Blockly.Variables.getOrCreateVariablePackage(
                  this.workspace,
                  null,
                  paramName,
                  ""
                );
                if (variable) {
                  this.arguments.push(paramName);
                  this.argument_var_models.push(variable);
                  const paramField = this.getField("PARAMS");
                  paramField.setText(`${localize("with: ")} ${this.arguments.join(", ")}`);
                  this.getProcedureCallers().forEach((block) => {
                    block.setProcedureParameters(this.arguments);
                    block.initSvg();
                    block.renderEfficiently();
                  });
                }
              }
              this.is_adding = false;
            });
          }, 0);
        },
        /**
         * Add or remove the statement block from this function definition.
         * @param {boolean} hasStatements True if a statement block is needed.
         * @this window.Blockly.Block
         */
        setStatements(hasStatements) {
          if (this.hasStatements === hasStatements) {
            return;
          }
          if (hasStatements) {
            this.appendStatementInput("STACK").appendField("");
            if (this.getInput("RETURN")) {
              this.moveInputBefore("STACK", "RETURN");
            }
          } else {
            this.removeInput("STACK", true);
          }
          this.hasStatements = hasStatements;
        },
        /**
         * Update the display of parameters for this procedure definition block.
         * @private
         * @this window.Blockly.Block
         */
        updateParams() {
          let paramString = "";
          if (this.arguments.length) {
            paramString = `${localize("with:")} ${this.arguments.join(", ")}`;
          }
          window.Blockly.Events.disable();
          try {
            this.setFieldValue(paramString, "PARAMS");
          } finally {
            window.Blockly.Events.enable();
          }
        },
        /**
         * Create XML to represent the argument inputs.
         * @param {boolean=} optParamIds If true include the IDs of the parameter
         *     quarks.  Used by window.Blockly.Procedures.mutateCallers for reconnection.
         * @return {!Element} XML storage element.
         * @this window.Blockly.Block
         */
        mutationToDom(optParamIds) {
          const container = document.createElement("mutation");
          if (optParamIds) {
            container.setAttribute("name", this.getFieldValue("NAME"));
          }
          this.argument_var_models.forEach((arg, i) => {
            const parameter = document.createElement("arg");
            parameter.setAttribute("name", arg.name);
            parameter.setAttribute("varid", arg.getId());
            if (optParamIds && this.paramIds) {
              parameter.setAttribute("paramId", this.paramIds[i]);
            }
            container.appendChild(parameter);
          });
          if (!this.hasStatements) {
            container.setAttribute("statements", "false");
          }
          return container;
        },
        /**
         * Parse XML to restore the argument inputs.
         * @param {!Element} xmlElement XML storage element.
         * @this window.Blockly.Block
         */
        domToMutation(xmlElement) {
          this.arguments = [];
          this.argument_var_models = [];
          xmlElement.childNodes.forEach((childNode) => {
            if (childNode.nodeName.toLowerCase() === "arg") {
              const var_name = childNode.getAttribute("name");
              const var_id = childNode.getAttribute("varid") || childNode.getAttribute("varId");
              const variable = window.Blockly.Variables.getOrCreateVariablePackage(
                this.workspace,
                var_id,
                var_name,
                ""
              );
              this.arguments.push(var_name);
              if (variable !== null) {
                this.argument_var_models.push(variable);
              } else {
                console.log(`Failed to create a variable with name ${var_name}, ignoring.`);
              }
            }
          });
          this.updateParams();
          this.setStatements(xmlElement.getAttribute("statements") !== "false");
        },
        /**
         * Return the signature of this procedure definition.
         * @return {!Array} Tuple containing three elements:
         *     - the name of the defined procedure,
         *     - a list of all its arguments,
         *     - that it DOES NOT have a return value.
         * @this window.Blockly.Block
         */
        getProcedureDef() {
          return [this.getFieldValue("NAME"), this.arguments, false];
        },
        /**
         * Return all procedure callers related to this block.
         * @return {!Array.<window.Blockly.Block>} List of procedure caller blocks
         * @this window.Blockly.Block
         */
        getProcedureCallers() {
          return this.workspace.getAllBlocks(false).filter((block) => block.type === this.callType && block.data === this.id);
        },
        /**
         * Return all variables referenced by this block.
         * @return {!Array.<string>} List of variable names.
         * @this window.Blockly.Block
         */
        getVars() {
          return this.arguments;
        },
        /**
         * Return all variables referenced by this block.
         * @return {!Array.<!window.Blockly.VariableModel>} List of variable models.
         * @this window.Blockly.Block
         */
        getVarModels() {
          return this.argument_var_models;
        },
        /**
         * Add custom menu options to this block's context menu.
         * @param {!Array} options List of menu options to add to.
         * @this window.Blockly.Block
         */
        customContextMenu(options) {
          modifyContextMenu(options);
          if (window.Blockly.derivWorkspace.isFlyoutVisible) {
            return;
          }
          const option = { enabled: true };
          const name = this.getFieldValue("NAME");
          option.text = localize('Create "%1"').replace("%1", name);
          const xmlMutation = document.createElement("mutation");
          xmlMutation.setAttribute("name", name);
          this.arguments.forEach((argumentName) => {
            const xmlArg = document.createElement("arg");
            xmlArg.setAttribute("name", argumentName);
            xmlMutation.appendChild(xmlArg);
          });
          const xmlBlock = document.createElement("block");
          xmlBlock.setAttribute("type", this.callType);
          xmlBlock.appendChild(xmlMutation);
          option.callback = window.Blockly.ContextMenu.callbackFactory(this, xmlBlock);
          options.push(option);
          if (!this.isCollapsed()) {
            this.argument_var_models.forEach((argumentVarModel) => {
              const getOption = { enabled: true };
              getOption.text = localize('Create "get %1"').replace("%1", argumentVarModel.name);
              const xmlField = window.Blockly.Variables.generateVariableFieldDom(argumentVarModel);
              const xmlOptionBlock = document.createElement("block");
              xmlOptionBlock.setAttribute("type", "variables_get");
              xmlOptionBlock.appendChild(xmlField);
              getOption.callback = window.Blockly.ContextMenu.callbackFactory(this, xmlOptionBlock);
              options.push(getOption);
            });
          }
        },
        callType: "procedures_callnoreturn"
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.procedures_defnoreturn = (block) => {
        const functionName = window.Blockly.JavaScript.variableDB_.getName(
          block.getFieldValue("NAME"),
          window.Blockly.Procedures.CATEGORY_NAME
        );
        let branch = window.Blockly.JavaScript.javascriptGenerator.statementToCode(block, "STACK");
        if (window.Blockly.JavaScript.STATEMENT_PREFIX) {
          const id = block.id.replace(/\$/g, "$$$$");
          branch = window.Blockly.JavaScript.prefixLines(
            window.Blockly.JavaScript.STATEMENT_PREFIX.replace(/%1/g, `'${id}'`),
            window.Blockly.JavaScript.INDENT
          ) + branch;
        }
        if (window.Blockly.JavaScript.INFINITE_LOOP_TRAP) {
          branch = window.Blockly.JavaScript.INFINITE_LOOP_TRAP.replace(/%1/g, `'${block.id}'`) + branch;
        }
        let returnValue = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "RETURN",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_NONE
        ) || "";
        if (returnValue) {
          returnValue = `${window.Blockly.JavaScript.INDENT}return ${returnValue};
`;
        }
        const args = block.arguments.map(
          (argumentName) => window.Blockly.JavaScript.variableDB_.getName(argumentName, window.Blockly.Variables.CATEGORY_NAME)
          // eslint-disable-line no-underscore-dangle
        );
        const code = window.Blockly.JavaScript.javascriptGenerator.scrub_(
          block,
          `
    function ${functionName}(${args.join(", ")}) {
        ${branch}
        ${returnValue}
    }
`
        );
        window.Blockly.JavaScript.javascriptGenerator.definitions_[`%${functionName}`] = code;
        return null;
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/Functions/procedures_defreturn.js
  var init_procedures_defreturn = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/Functions/procedures_defreturn.js"() {
      init_translations();
      init_block_images();
      window.Blockly.Blocks.procedures_defreturn = {
        init() {
          this.arguments = [];
          this.argument_var_models = [];
          this.jsonInit(this.definition());
          if (window.Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT) {
            this.setCommentText(window.Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT);
          }
          const nameField = this.getField("NAME");
          nameField.setValidator(window.Blockly.Procedures.rename);
          const fieldImage = new window.Blockly.FieldImage(plusIconDark, 24, 24, "+", () => this.onAddClick());
          const dropdown_path = `${this.workspace.options.pathToMedia}dropdown-arrow.svg`;
          const fieldImageCollapse = new window.Blockly.FieldImage(
            dropdown_path,
            16,
            16,
            "v",
            () => this.toggleCollapseWithDelay(true),
            false,
            true
          );
          this.appendDummyInput("ADD_ICON").appendField(fieldImage);
          this.moveInputBefore("ADD_ICON", "RETURN");
          this.appendDummyInput("COLLAPSED_INPUT").appendField(fieldImageCollapse);
          this.moveInputBefore("COLLAPSED_INPUT", "RETURN");
          this.setStatements(true);
        },
        definition() {
          return {
            message0: localize("function {{ function_name }} {{ function_params }} {{ dummy }}", {
              function_name: "%1",
              function_params: "%2",
              dummy: "%3"
            }),
            message1: "return %1",
            args0: [
              {
                type: "field_input",
                name: "NAME",
                text: ""
              },
              {
                type: "field_label",
                name: "PARAMS",
                text: ""
              },
              {
                type: "input_dummy"
              }
            ],
            args1: [
              {
                type: "input_value",
                name: "RETURN",
                check: null
              }
            ],
            inputsInline: true,
            colour: window.Blockly.Colours.Special2.colour,
            colourSecondary: window.Blockly.Colours.Special2.colourSecondary,
            colourTertiary: window.Blockly.Colours.Special2.colourTertiary,
            tooltip: localize("Function that returns a value"),
            category: window.Blockly.Categories.Functions
          };
        },
        meta() {
          return {
            display_name: localize("Function that returns a value"),
            description: localize(
              "This block is similar to the one above, except that this returns a value. The returned value can be assigned to a variable of your choice."
            )
          };
        },
        onAddClick: window.Blockly.Blocks.procedures_defnoreturn.onAddClick,
        onchange: window.Blockly.Blocks.procedures_defnoreturn.onchange,
        setStatements: window.Blockly.Blocks.procedures_defnoreturn.setStatements,
        updateParams: window.Blockly.Blocks.procedures_defnoreturn.updateParams,
        mutationToDom: window.Blockly.Blocks.procedures_defnoreturn.mutationToDom,
        domToMutation: window.Blockly.Blocks.procedures_defnoreturn.domToMutation,
        /**
         * Return the signature of this procedure definition.
         * @return {!Array} Tuple containing three elements:
         *     - the name of the defined procedure,
         *     - a list of all its arguments,
         *     - that it DOES have a return value.
         * @this window.Blockly.Block
         */
        getProcedureDef() {
          return [this.getFieldValue("NAME"), this.arguments, true];
        },
        getProcedureCallers: window.Blockly.Blocks.procedures_defnoreturn.getProcedureCallers,
        getVars: window.Blockly.Blocks.procedures_defnoreturn.getVars,
        getVarModels: window.Blockly.Blocks.procedures_defnoreturn.getVarModels,
        renameVarById: window.Blockly.Blocks.procedures_defnoreturn.renameVarById,
        displayRenamedVar: window.Blockly.Blocks.procedures_defnoreturn.displayRenamedVar,
        customContextMenu: window.Blockly.Blocks.procedures_defnoreturn.customContextMenu,
        registerWorkspaceListener: window.Blockly.Blocks.procedures_defnoreturn.registerWorkspaceListener,
        callType: "procedures_callreturn"
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.procedures_defreturn = window.Blockly.JavaScript.javascriptGenerator.forBlock.procedures_defnoreturn;
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/Functions/procedures_callnoreturn.js
  var init_procedures_callnoreturn = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/Functions/procedures_callnoreturn.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.procedures_callnoreturn = {
        init() {
          this.arguments = [];
          this.argument_var_models = [];
          this.previousDisabledState = false;
          this.jsonInit(this.definition());
        },
        /**
         * Block definitions describe how a block looks and behaves, including the text,
         * the colour, the shape, and what other blocks it can connect to. We've separated
         * the block definition from the init function so we can search through it.
         * https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks
         */
        definition() {
          return {
            message0: "%1 %2",
            args0: [
              {
                type: "field_label",
                name: "NAME",
                text: this.id
              },
              {
                type: "input_dummy",
                name: "TOPROW"
              }
            ],
            inputsInline: true,
            colour: window.Blockly.Colours.Special2.colour,
            colourSecondary: window.Blockly.Colours.Special2.colourSecondary,
            colourTertiary: window.Blockly.Colours.Special2.colourTertiary,
            previousStatement: null,
            nextStatement: null,
            tooltip: localize("Custom function"),
            category: window.Blockly.Categories.Functions
          };
        },
        /**
         * Meta returns an object with with properties that contain human readable strings,
         * these strings are used in the flyout help content, as well as used for searching
         * for specific blocks.
         */
        meta() {
          return {
            display_name: localize("Custom function"),
            description: ""
          };
        },
        /**
         * Procedure calls cannot exist without the corresponding procedure
         * definition.  Enforce this link whenever an event is fired.
         * @param {!window.Blockly.Events.Abstract} event Change event.
         * @this window.Blockly.Block
         */
        onchange(event) {
          if (!this.workspace || window.Blockly.derivWorkspace.isFlyoutVisible) {
            return;
          }
          if (!event.recordUndo) {
            return;
          }
          if (event.type === window.Blockly.Events.BLOCK_CREATE && event.ids.indexOf(this.id) !== -1) {
            const name = this.getProcedureCall();
            let def = window.Blockly.Procedures.getDefinition(name, this.workspace);
            if (def && (def.type !== this.defType || JSON.stringify(def.arguments) !== JSON.stringify(this.arguments))) {
              def = null;
            }
            if (def) {
              this.data = def.id;
              return;
            }
            window.Blockly.Events.setGroup(event.group);
            const xml = document.createElement("xml");
            const block = document.createElement("block");
            block.setAttribute("type", this.defType);
            const xy = this.getRelativeToSurfaceXY();
            const x = xy.x + window.Blockly.SNAP_RADIUS * (this.RTL ? -1 : 1);
            const y = xy.y + window.Blockly.SNAP_RADIUS * 2;
            block.setAttribute("x", x);
            block.setAttribute("y", y);
            const mutation = this.mutationToDom();
            block.appendChild(mutation);
            const field = document.createElement("field");
            field.setAttribute("name", "NAME");
            field.appendChild(document.createTextNode(this.getProcedureCall()));
            block.appendChild(field);
            xml.appendChild(block);
            window.Blockly.Xml.domToWorkspace(xml, this.workspace);
            window.Blockly.Events.setGroup(false);
            const procedure_definition = window.Blockly.Procedures.getDefinition(name, this.workspace);
            this.data = procedure_definition.id;
          } else if (event.type === window.Blockly.Events.BLOCK_DELETE) {
            const name = this.getProcedureCall();
            const def = window.Blockly.Procedures.getDefinition(name, this.workspace);
            if (!def) {
              window.Blockly.Events.setGroup(event.group);
              this.dispose(true, false);
              window.Blockly.Events.setGroup(false);
            }
          } else if (event.type === window.Blockly.Events.BLOCK_CHANGE && event.element === "disabled") {
            const name = this.getProcedureCall();
            const def = window.Blockly.Procedures.getDefinition(name, this.workspace);
            if (def && def.id === event.blockId) {
              const oldGroup = window.Blockly.Events.getGroup();
              if (oldGroup) {
                console.log("Saw an existing group while responding to a definition change");
              }
              window.Blockly.Events.setGroup(event.group);
              if (event.newValue) {
                this.previousDisabledState = this.disabled;
                this.setDisabled(true);
              } else {
                this.setDisabled(this.previousDisabledState);
              }
              window.Blockly.Events.setGroup(oldGroup);
            }
          }
        },
        /**
         * Returns the related procedure definition block.
         * @return {window.Blockly.Block} Procedure definition block.
         * @this window.Blockly.Block
         */
        getProcedureDefinition(name) {
          return this.workspace.getTopBlocks(false).find((block) => {
            if (block.getProcedureDef) {
              const tuple = block.getProcedureDef();
              return tuple && window.Blockly.Names.equals(tuple[0], name);
            }
            return false;
          });
        },
        /**
         * Returns the name of the procedure this block calls.
         * @return {string} Procedure name.
         * @this window.Blockly.Block
         */
        getProcedureCall() {
          return (
            /** @type {string} */
            this.getFieldValue("NAME")
          );
        },
        /**
         * Notification that a procedure is renaming.
         * If the name matches this block's procedure, rename it.
         * @param {string} oldName Previous name of procedure.
         * @param {string} newName Renamed procedure.
         * @this window.Blockly.Block
         */
        renameProcedure(oldName, newName) {
          if (window.Blockly.Names.equals(oldName, this.getProcedureCall())) {
            this.setFieldValue(newName, "NAME");
          }
        },
        /**
         * Notification that the procedure's parameters have changed.
         * @param {!Array.<string>} paramNames New param names, e.g. ['x', 'y', 'z'].
         * @private
         * @this window.Blockly.Block
         */
        setProcedureParameters(paramNames) {
          this.arguments = [].concat(paramNames);
          this.argument_var_models = this.arguments.map(
            (argumentName) => window.Blockly.Variables.getOrCreateVariablePackage(this.workspace, null, argumentName, "")
          );
          this.updateShape();
        },
        /**
         * Modify this block to have the correct number of arguments.
         * @private
         * @this window.Blockly.Block
         */
        updateShape() {
          this.arguments.forEach((argumentName, i2) => {
            let field = this.getField(`ARGNAME${i2}`);
            if (field) {
              window.Blockly.Events.disable();
              try {
                field.setValue(argumentName);
              } finally {
                window.Blockly.Events.enable();
              }
            } else {
              field = new window.Blockly.FieldLabel(argumentName);
              const input = this.appendValueInput(`ARG${i2}`).appendField(field, `ARGNAME${i2}`);
              input.init();
            }
          });
          let i = this.arguments.length;
          while (this.getInput(`ARG${i}`)) {
            this.removeInput(`ARG${i}`);
            i++;
          }
          const topRow = this.getInput("TOPROW");
          if (topRow) {
            if (this.arguments.length) {
              if (!this.getField("WITH")) {
                topRow.appendField(localize("with:"), "WITH");
                topRow.init();
              }
            } else if (this.getField("WITH")) {
              topRow.removeField("WITH");
            }
          }
        },
        /**
         * Create XML to represent the (non-editable) name and arguments.
         * @return {!Element} XML storage element.
         * @this window.Blockly.Block
         */
        mutationToDom() {
          const container = document.createElement("mutation");
          container.setAttribute("name", this.getProcedureCall());
          this.arguments.forEach((argumentName) => {
            const parameter = document.createElement("arg");
            parameter.setAttribute("name", argumentName);
            container.appendChild(parameter);
          });
          return container;
        },
        /**
         * Parse XML to restore the (non-editable) name and parameters.
         * @param {!Element} xmlElement XML storage element.
         * @this window.Blockly.Block
         */
        domToMutation(xmlElement) {
          const name = xmlElement.getAttribute("name");
          this.renameProcedure(this.getProcedureCall(), name);
          const args = [];
          const paramIds = [];
          xmlElement.childNodes.forEach((childNode) => {
            if (childNode.nodeName.toLowerCase() === "arg") {
              args.push(childNode.getAttribute("name"));
              paramIds.push(childNode.getAttribute("paramId"));
            }
          });
          this.setProcedureParameters(args, paramIds);
        },
        /**
         * Return all variables referenced by this block.
         * @return {!Array.<!window.Blockly.VariableModel>} List of variable models.
         * @this window.Blockly.Block
         */
        getVarModels() {
          return this.argument_var_models;
        },
        /**
         * Add menu option to find the definition block for this call.
         * @param {!Array} options List of menu options to add to.
         * @this window.Blockly.Block
         */
        customContextMenu(options) {
          modifyContextMenu(options);
          const name = this.getProcedureCall();
          const { workspace } = this;
          const option = { enabled: true };
          option.text = localize("Highlight function definition");
          option.callback = () => {
            const def = this.getProcedureDefinition(name);
            if (def) {
              workspace.centerOnBlock(def.id);
              def.select();
            }
          };
          options.push(option);
        },
        defType: "procedures_defnoreturn"
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.procedures_callnoreturn = (block) => {
        const functionName = window.Blockly.JavaScript.variableDB_.getName(
          block.getFieldValue("NAME"),
          window.Blockly.Procedures.CATEGORY_NAME
        );
        const args = block.arguments.map(
          (arg, i) => window.Blockly.JavaScript.javascriptGenerator.valueToCode(
            block,
            `ARG${i}`,
            window.Blockly.JavaScript.javascriptGenerator.ORDER_COMMA
          ) || "null"
        );
        const code = `${functionName}(${args.join(", ")});
`;
        return code;
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/Functions/procedures_callreturn.js
  var init_procedures_callreturn = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/Functions/procedures_callreturn.js"() {
      init_translations();
      window.Blockly.Blocks.procedures_callreturn = {
        init() {
          this.arguments = [];
          this.previousDisabledState = false;
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: "%1 %2",
            args0: [
              {
                type: "field_label",
                name: "NAME",
                text: this.id
              },
              {
                type: "input_dummy",
                name: "TOPROW"
              }
            ],
            output: null,
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Special2.colour,
            colourSecondary: window.Blockly.Colours.Special2.colourSecondary,
            colourTertiary: window.Blockly.Colours.Special2.colourTertiary,
            tooltip: localize("Custom function"),
            category: window.Blockly.Categories.Functions,
            inputsInline: true
          };
        },
        meta() {
          return {
            display_name: localize("Custom function"),
            description: ""
          };
        },
        onchange: window.Blockly.Blocks.procedures_callnoreturn.onchange,
        getProcedureDefinition: window.Blockly.Blocks.procedures_callnoreturn.getProcedureDefinition,
        getProcedureCall: window.Blockly.Blocks.procedures_callnoreturn.getProcedureCall,
        renameProcedure: window.Blockly.Blocks.procedures_callnoreturn.renameProcedure,
        setProcedureParameters: window.Blockly.Blocks.procedures_callnoreturn.setProcedureParameters,
        updateShape: window.Blockly.Blocks.procedures_callnoreturn.updateShape,
        mutationToDom: window.Blockly.Blocks.procedures_callnoreturn.mutationToDom,
        domToMutation: window.Blockly.Blocks.procedures_callnoreturn.domToMutation,
        getVarModels: window.Blockly.Blocks.procedures_callnoreturn.getVarModels,
        customContextMenu: window.Blockly.Blocks.procedures_callnoreturn.customContextMenu,
        defType: "procedures_defreturn"
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.procedures_callreturn = (block) => {
        const functionName = window.Blockly.JavaScript.variableDB_.getName(
          block.getFieldValue("NAME"),
          window.Blockly.Procedures.CATEGORY_NAME
        );
        const args = block.arguments.map(
          (arg, i) => window.Blockly.JavaScript.javascriptGenerator.valueToCode(
            block,
            `ARG${i}`,
            window.Blockly.JavaScript.javascriptGenerator.ORDER_COMMA
          ) || "null"
        );
        const code = `${functionName}(${args.join(", ")})`;
        return [code, window.Blockly.JavaScript.javascriptGenerator.ORDER_FUNCTION_CALL];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/Functions/procedures_ifreturn.js
  var init_procedures_ifreturn = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/Functions/procedures_ifreturn.js"() {
      init_translations();
      window.Blockly.Blocks.procedures_ifreturn = {
        init() {
          this.hasReturnValue = true;
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("if {{ condition }} return {{ value }}", { condition: "%1", value: "%2" }),
            args0: [
              {
                type: "input_value",
                name: "CONDITION"
              },
              {
                type: "input_value",
                name: "VALUE"
              }
            ],
            inputsInline: true,
            colour: window.Blockly.Colours.Special2.colour,
            colourSecondary: window.Blockly.Colours.Special2.colourSecondary,
            colourTertiary: window.Blockly.Colours.Special2.colourTertiary,
            previousStatement: null,
            nextStatement: null,
            tooltip: localize("Prematurely returns a value within a function"),
            category: window.Blockly.Categories.Functions
          };
        },
        meta() {
          return {
            display_name: localize("Conditional return"),
            description: localize(
              "This block returns a value when a condition is true. Use this block within either of the function blocks above."
            )
          };
        },
        /**
         * Create XML to represent whether this block has a return value.
         * @return {!Element} XML storage element.
         * @this window.Blockly.Block
         */
        mutationToDom() {
          const container = document.createElement("mutation");
          container.setAttribute("value", Number(this.hasReturnValue));
          return container;
        },
        /**
         * Parse XML to restore whether this block has a return value.
         * @param {!Element} xmlElement XML storage element.
         * @this window.Blockly.Block
         */
        domToMutation(xmlElement) {
          const value = xmlElement.getAttribute("value");
          this.hasReturnValue = value === "1";
          if (!this.hasReturnValue) {
            this.removeInput("VALUE");
            this.appendDummyInput("VALUE").appendField(localize("return"));
            this.initSvg();
            this.renderEfficiently();
          }
        },
        /**
         * Called whenever anything on the workspace changes.
         * Add warning if this flow block is not nested inside a loop.
         * @param {!window.Blockly.Events.Abstract} e Change event.
         * @this window.Blockly.Block
         */
        onchange() {
          if (!this.workspace.isDragging || this.workspace.isDragging()) {
            return;
          }
          let legal = false;
          let block = this;
          do {
            if (this.FUNCTION_TYPES.indexOf(block.type) !== -1) {
              legal = true;
              break;
            }
            block = block.getSurroundParent();
          } while (block);
          if (legal) {
            const rerender = () => {
              this.initSvg();
              this.renderEfficiently();
            };
            if (block.type === "procedures_defnoreturn" && this.hasReturnValue) {
              this.removeInput("VALUE");
              this.appendDummyInput("VALUE").appendField(localize("return"));
              rerender();
              this.hasReturnValue = false;
            } else if (block.type === "procedures_defreturn" && !this.hasReturnValue) {
              this.removeInput("VALUE");
              this.appendValueInput("VALUE").appendField(localize("return"));
              rerender();
              this.hasReturnValue = true;
            }
            if (!window.Blockly.derivWorkspace.isFlyoutVisible) {
              this.setDisabled(false);
            }
          } else if (!window.Blockly.derivWorkspace.isFlyoutVisible && !this.getInheritedDisabled()) {
            this.setDisabled(true);
          }
        },
        /**
         * List of block types that are functions and thus do not need warnings.
         * To add a new function type add this to your code:
         * window.Blockly.Blocks['procedures_ifreturn'].FUNCTION_TYPES.push('custom_func');
         */
        FUNCTION_TYPES: ["procedures_defnoreturn", "procedures_defreturn"]
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.procedures_ifreturn = (block) => {
        const condition = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "CONDITION",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_NONE
        ) || "false";
        let branch;
        if (block.hasReturnValue) {
          const value = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
            block,
            "VALUE",
            window.Blockly.JavaScript.javascriptGenerator.ORDER_NONE
          ) || "null";
          branch = `return ${value};
`;
        } else {
          branch = "return;\n";
        }
        const code = `
    if (${condition}) {
        ${branch}
    }
`;
        return code;
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/Functions/index.js
  var init_Functions = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/Functions/index.js"() {
      init_procedures_defnoreturn();
      init_procedures_defreturn();
      init_procedures_callnoreturn();
      init_procedures_callreturn();
      init_procedures_ifreturn();
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/List/lists_create_with.js
  var init_lists_create_with = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/List/lists_create_with.js"() {
      init_translations();
      init_utils();
      init_block_images();
      window.Blockly.Blocks.lists_create_with = {
        protected_statements: ["STACK"],
        allowed_children: ["lists_statement"],
        init() {
          const field_image = new window.Blockly.FieldImage(plusIconDark, 25, 25, "", this.onIconClick.bind(this));
          this.jsonInit(this.definition());
          this.appendDummyInput("ADD_ICON").appendField(field_image);
          this.moveInputBefore("ADD_ICON", "STACK");
        },
        definition() {
          return {
            message0: localize("set {{ variable }} to create list with", { variable: "%1" }),
            message1: "%1",
            args0: [
              {
                type: "field_variable",
                name: "VARIABLE",
                variable: localize("list")
              }
            ],
            args1: [
              {
                type: "input_statement",
                name: "STACK"
              }
            ],
            inputsInline: true,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            previousStatement: null,
            nextStatement: null,
            tooltip: localize("This block creates a list with strings and numbers."),
            category: window.Blockly.Categories.List
          };
        },
        meta() {
          return {
            display_name: localize("Create list"),
            description: localize("This block creates a list with strings and numbers.")
          };
        },
        onIconClick() {
          if (this.workspace.options.readOnly || window.Blockly.derivWorkspace.isFlyoutVisible) {
            return;
          }
          runGroupedEvents(false, () => {
            const statement_block = this.workspace.newBlock("lists_statement");
            statement_block.required_parent_id = this.id;
            statement_block.setMovable(false);
            statement_block.initSvg();
            statement_block.renderEfficiently();
            const connection = this.getLastConnectionInStatement("STACK");
            connection.connect(statement_block.previousConnection);
          });
        },
        onchange(event) {
          if (!this.workspace || window.Blockly.derivWorkspace.isFlyoutVisible || this.workspace.isDragging()) {
            return;
          }
          if (event.type === window.Blockly.Events.BLOCK_DRAG && !event.isStart) {
            const blocks_in_stack = this.getBlocksInStatement("STACK");
            blocks_in_stack.forEach((block) => {
              if (!this.allowed_children.includes(block.type)) {
                runIrreversibleEvents(() => {
                  block.unplug(
                    /* healStack */
                    false
                  );
                });
              }
            });
          }
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.lists_create_with = (block) => {
        const var_name = window.Blockly.JavaScript.variableDB_.getName(
          block.getFieldValue("VARIABLE"),
          window.Blockly.Variables.CATEGORY_NAME
        );
        const blocks_in_stack = block.getBlocksInStatement("STACK");
        const elements = blocks_in_stack.map((b) => {
          const value = window.Blockly.JavaScript.javascriptGenerator.forBlock[b.type](b);
          return Array.isArray(value) ? value[0] : value;
        });
        const code = `${var_name} = [${elements.join(", ")}];
`;
        return code;
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/List/lists_repeat.js
  var init_lists_repeat = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/List/lists_repeat.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.lists_repeat = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("create list with item {{ input_item }} repeated {{ number }} times", {
              input_item: "%1",
              number: "%2"
            }),
            args0: [
              {
                type: "input_value",
                name: "ITEM"
              },
              {
                type: "input_value",
                name: "NUM"
              }
            ],
            inputsInline: true,
            output: null,
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("Creates a list by repeating a given item"),
            category: window.Blockly.Categories.List
          };
        },
        meta() {
          return {
            display_name: localize("Repeat an item"),
            description: localize("Creates a list with a given item repeated for a specific number of times.")
          };
        },
        getRequiredValueInputs() {
          return {
            ITEM: emptyTextValidator,
            NUM: emptyTextValidator
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.lists_repeat = (block) => {
        const function_name = window.Blockly.JavaScript.javascriptGenerator.provideFunction_("listsRepeat", [
          // eslint-disable-next-line no-underscore-dangle
          `function ${window.Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(value, n) {
            var array = [];
            for (var i = 0; i < n; i++) {
                array[i] = value;
            }
            return array;
        }`
        ]);
        const element = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "ITEM",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_COMMA
        ) || "null";
        const repeat_count = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "NUM",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_COMMA
        ) || "0";
        const code = `${function_name}(${element}, ${repeat_count})`;
        return [code, window.Blockly.JavaScript.javascriptGenerator.ORDER_FUNCTION_CALL];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/List/lists_length.js
  var init_lists_length = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/List/lists_length.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.lists_length = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("length of {{ input_list }}", { input_list: "%1" }),
            args0: [
              {
                type: "input_value",
                name: "VALUE"
              }
            ],
            inputsInline: true,
            output: "Number",
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("This block gives you the total number of items in a given list."),
            category: window.Blockly.Categories.List
          };
        },
        meta() {
          return {
            display_name: localize("List Length"),
            description: localize("This block gives you the total number of items in a given list.")
          };
        },
        getRequiredValueInputs() {
          return {
            VALUE: null
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.lists_length = (block) => {
        const list = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "VALUE",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_MEMBER
        ) || "[]";
        const code = `${list}.length`;
        return [code, window.Blockly.JavaScript.javascriptGenerator.ORDER_MEMBER];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/List/lists_isEmpty.js
  var init_lists_isEmpty = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/List/lists_isEmpty.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.lists_isEmpty = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("list {{ input_list }} is empty", { input_list: "%1" }),
            args0: [
              {
                type: "input_value",
                name: "VALUE",
                check: ["Array"]
              }
            ],
            inputsInline: true,
            output: "Boolean",
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("Checks if a given list is empty"),
            category: window.Blockly.Categories.List
          };
        },
        meta() {
          return {
            display_name: localize("Is list empty?"),
            description: localize(
              "This block checks if a given list is empty. It returns \u201CTrue\u201D if the list is empty, \u201CFalse\u201D if otherwise."
            )
          };
        },
        getRequiredValueInputs() {
          return {
            VALUE: null
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.lists_isEmpty = (block) => {
        const list = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "VALUE",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_MEMBER
        ) || "[]";
        const isVariable = block.workspace.getAllVariables().findIndex((variable) => variable.name === list) !== -1;
        const code = isVariable ? `!${list} || !${list}.length` : `!${list}.length`;
        return [code, window.Blockly.JavaScript.javascriptGenerator.ORDER_LOGICAL_NOT];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/List/lists_indexOf.js
  var init_lists_indexOf = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/List/lists_indexOf.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.lists_indexOf = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize(
              "in list {{ input_list }} find {{ first_or_last }} occurence of item {{ input_value }}",
              {
                input_list: "%1",
                first_or_last: "%2",
                input_value: "%3"
              }
            ),
            args0: [
              {
                type: "input_value",
                name: "VALUE"
              },
              {
                type: "field_dropdown",
                name: "END",
                options: [
                  ["first", "FIRST"],
                  ["last", "LAST"]
                ]
              },
              {
                type: "input_value",
                name: "FIND"
              }
            ],
            output: "Number",
            inputsInline: true,
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("This block gives you the position of an item in a given list."),
            category: window.Blockly.Categories.List
          };
        },
        meta() {
          return {
            display_name: localize("List item position"),
            description: localize("This block gives you the position of an item in a given list.")
          };
        },
        getRequiredValueInputs() {
          return {
            VALUE: null,
            FIND: null
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.lists_indexOf = (block) => {
        const operator = block.getFieldValue("END") === "FIRST" ? "indexOf" : "lastIndexOf";
        const item = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "FIND",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_NONE
        ) || "''";
        const list = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "VALUE",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_MEMBER
        ) || "''";
        const code = `${list}.${operator}(${item})`;
        if (block.workspace.options.oneBasedIndex) {
          return [`${code} + 1`, window.Blockly.JavaScript.javascriptGenerator.ORDER_ADDITION];
        }
        return [code, window.Blockly.JavaScript.javascriptGenerator.ORDER_FUNCTION_CALL];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/List/lists_getIndex.js
  var init_lists_getIndex = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/List/lists_getIndex.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.lists_getIndex = {
        init() {
          this.MODE_OPTIONS = [
            ["get", "GET"],
            ["get and remove", "GET_REMOVE"],
            ["remove", "REMOVE"]
          ];
          this.WHERE_OPTIONS = [
            ["#", "FROM_START"],
            ["# from end", "FROM_END"],
            ["first", "FIRST"],
            ["last", "LAST"],
            ["random", "RANDOM"]
          ];
          const modeMenu = new window.Blockly.FieldDropdown(this.MODE_OPTIONS, (value) => {
            const isStatement = value === "REMOVE";
            this.updateStatement(isStatement);
          });
          this.appendValueInput("VALUE").setCheck("Array").appendField(localize("in list"));
          this.appendDummyInput().appendField(modeMenu, "MODE");
          this.appendDummyInput("AT");
          const block_color = window.Blockly.Colours.Base.colour || window.Blockly.Colours.Base.colourSecondary || window.Blockly.Colours.Base.colourTertiary;
          this.setColour(block_color);
          this.setTooltip(
            "This block gives you the value of a specific item in a list, given the position of the item. It can also remove the item from the list."
          );
          this.setInputsInline(true);
          this.setOutput(true, null);
          this.setOutputShape(window.Blockly.OUTPUT_SHAPE_ROUND);
          this.updateAt(true);
        },
        meta() {
          return {
            display_name: localize("Get list item"),
            description: localize(
              "This block gives you the value of a specific item in a list, given the position of the item. It can also remove the item from the list."
            ),
            category: window.Blockly.Categories.List
          };
        },
        mutationToDom() {
          const container = document.createElement("mutation");
          const isStatement = !this.outputConnection;
          const isAt = this.getInput("AT").type === window.Blockly.INPUT_VALUE;
          container.setAttribute("statement", isStatement);
          container.setAttribute("at", isAt);
          return container;
        },
        domToMutation(xmlElement) {
          const isStatement = xmlElement.getAttribute("statement") === "true";
          this.updateStatement(isStatement);
          const isAt = xmlElement.getAttribute("at") !== "false";
          this.updateAt(isAt);
        },
        updateStatement(newStatement) {
          const oldStatement = !this.outputConnection;
          if (newStatement !== oldStatement) {
            this.unplug(true, true);
            this.setOutput(!newStatement);
            this.setPreviousStatement(newStatement);
            this.setNextStatement(newStatement);
            this.initSvg();
          }
        },
        updateAt(isAt) {
          this.removeInput("AT", true);
          if (isAt) {
            this.appendValueInput("AT").setCheck("Number");
          } else {
            this.appendDummyInput("AT");
          }
          const menu = new window.Blockly.FieldDropdown(this.WHERE_OPTIONS, (value) => {
            const newAt = ["FROM_START", "FROM_END"].includes(value);
            if (newAt !== isAt) {
              this.updateAt(newAt);
              this.setFieldValue(value, "WHERE");
              return null;
            }
            return void 0;
          });
          this.getInput("AT").appendField(menu, "WHERE");
          this.initSvg();
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.lists_getIndex = (block) => {
        const mode = block.getFieldValue("MODE") || "GET";
        const where = block.getFieldValue("WHERE") || "FIRST";
        const listOrder = where === "RANDOM" ? window.Blockly.JavaScript.javascriptGenerator.ORDER_COMMA : window.Blockly.JavaScript.javascriptGenerator.ORDER_MEMBER;
        const list = window.Blockly.JavaScript.javascriptGenerator.valueToCode(block, "VALUE", listOrder) || "[]";
        let code, order;
        if (where === "FIRST") {
          if (mode === "GET") {
            code = `${list}[0]`;
            order = window.Blockly.JavaScript.javascriptGenerator.ORDER_MEMBER;
          } else if (mode === "GET_REMOVE") {
            code = `${list}.shift()`;
            order = window.Blockly.JavaScript.javascriptGenerator.ORDER_MEMBER;
          } else if (mode === "REMOVE") {
            return `${list}.shift();
`;
          }
        } else if (where === "LAST") {
          if (mode === "GET") {
            code = `${list}.slice(-1)[0]`;
            order = window.Blockly.JavaScript.javascriptGenerator.ORDER_MEMBER;
          } else if (mode === "GET_REMOVE") {
            code = `${list}.pop()`;
            order = window.Blockly.JavaScript.javascriptGenerator.ORDER_MEMBER;
          } else if (mode === "REMOVE") {
            return `${list}.pop();
`;
          }
        } else if (where === "FROM_START") {
          const at = window.Blockly.JavaScript.javascriptGenerator.getAdjusted(block, "AT");
          if (mode === "GET") {
            code = `${list}[${at}]`;
            order = window.Blockly.JavaScript.javascriptGenerator.ORDER_MEMBER;
          } else if (mode === "GET_REMOVE") {
            code = `${list}.splice(${at}, 1)[0]`;
            order = window.Blockly.JavaScript.javascriptGenerator.ORDER_FUNCTION_CALL;
          } else if (mode === "REMOVE") {
            return `${list}.splice(${at}, 1);
`;
          }
        } else if (where === "FROM_END") {
          const at = window.Blockly.JavaScript.javascriptGenerator.getAdjusted(block, "AT", 1, true);
          if (mode === "GET") {
            code = `${list}.slice(${at})[0]`;
            order = window.Blockly.JavaScript.javascriptGenerator.ORDER_FUNCTION_CALL;
          } else if (mode === "GET_REMOVE") {
            code = `${list}.splice(${at}, 1)[0]`;
            order = window.Blockly.JavaScript.javascriptGenerator.ORDER_FUNCTION_CALL;
          } else if (mode === "REMOVE") {
            return `${list}.splice(${at}, 1);
`;
          }
        } else if (where === "RANDOM") {
          const functionName = window.Blockly.JavaScript.javascriptGenerator.provideFunction_("listsGetRandomItem", [
            // eslint-disable-next-line no-underscore-dangle
            `function ${window.Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(list, remove) {
                var x = Math.floor(Math.random() * list.length);
                if (remove) {
                    return list.splice(x, 1)[0];
                } else {
                    return list[x];
                }
            }`
          ]);
          code = `${functionName}(${list}, ${mode !== "GET"})`;
          if (mode === "GET" || mode === "GET_REMOVE") {
            order = window.Blockly.JavaScript.javascriptGenerator.ORDER_FUNCTION_CALL;
          } else if (mode === "REMOVE") {
            return `${code};
`;
          }
        }
        return [code, order];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/List/lists_setIndex.js
  var init_lists_setIndex = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/List/lists_setIndex.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.lists_setIndex = {
        init() {
          this.MODE_OPTIONS = [
            ["set", "SET"],
            ["insert at", "INSERT"]
          ];
          this.WHERE_OPTIONS = [
            ["#", "FROM_START"],
            ["# from end", "FROM_END"],
            ["first", "FIRST"],
            ["last", "LAST"],
            ["random", "RANDOM"]
          ];
          this.appendValueInput("LIST").setCheck("Array").appendField(localize("in list"));
          this.appendDummyInput().appendField(new window.Blockly.FieldDropdown(this.MODE_OPTIONS), "MODE");
          this.appendDummyInput("AT");
          this.appendValueInput("TO").appendField(localize("as"));
          const block_color = window.Blockly.Colours.Base.colour || window.Blockly.Colours.Base.colourSecondary || window.Blockly.Colours.Base.colourTertiary;
          this.setColour(block_color);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setTooltip(
            localize(
              "This block replaces a specific item in a list with another given item. It can also insert the new item in the list at a specific position."
            )
          );
          this.updateAt(true);
        },
        meta() {
          return {
            display_name: localize("Set list item"),
            description: localize(
              "This block replaces a specific item in a list with another given item. It can also insert the new item in the list at a specific position."
            ),
            category: window.Blockly.Categories.List
          };
        },
        mutationToDom() {
          const container = document.createElement("mutation");
          const isAt = this.getInput("AT").type === window.Blockly.INPUT_VALUE;
          container.setAttribute("at", isAt);
          return container;
        },
        domToMutation(xmlElement) {
          const isAt = xmlElement.getAttribute("at") !== "false";
          this.updateAt(isAt);
        },
        updateAt(isAt) {
          this.removeInput("AT", true);
          if (isAt) {
            this.appendValueInput("AT").setCheck("Number");
          } else {
            this.appendDummyInput("AT");
          }
          const menu = new window.Blockly.FieldDropdown(this.WHERE_OPTIONS, (value) => {
            const newAt = ["FROM_START", "FROM_END"].includes(value);
            if (newAt !== isAt) {
              this.updateAt(newAt);
              this.setFieldValue(value, "WHERE");
              return null;
            }
            return void 0;
          });
          this.moveInputBefore("AT", "TO");
          this.getInput("AT").appendField(menu, "WHERE");
          this.initSvg();
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.lists_setIndex = (block) => {
        const mode = block.getFieldValue("MODE") || "SET";
        const where = block.getFieldValue("WHERE") || "FIRST";
        const value = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "TO",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_ASSIGNMENT
        ) || "null";
        let list = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "LIST",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_MEMBER
        ) || "[]";
        const cacheList = () => {
          if (list.match(/^\w+$/)) {
            return "";
          }
          const listVar = window.Blockly.JavaScript.variableDB_.getDistinctName(
            "tmpList",
            window.Blockly.Variables.CATEGORY_NAME
          );
          const code2 = `var ${listVar} = ${list};
`;
          list = listVar;
          return code2;
        };
        let code;
        if (where === "FIRST") {
          if (mode === "SET") {
            code = `${list}[0] = ${value};
`;
          } else if (mode === "INSERT") {
            code = `${list}.unshift(${value});
`;
          }
        } else if (where === "LAST") {
          if (mode === "SET") {
            code = cacheList();
            code += `${list}[${list}.length - 1] = ${value};
`;
          } else if (mode === "INSERT") {
            code = `${list}.push(${value});
`;
          }
        } else if (where === "FROM_START") {
          const at = window.Blockly.JavaScript.javascriptGenerator.getAdjusted(block, "AT");
          if (mode === "SET") {
            code = `${list}[${at}] = ${value};
`;
          } else if (mode === "INSERT") {
            code = `${list}.splice(${at}, 0, ${value});
`;
          }
        } else if (where === "FROM_END") {
          const at = window.Blockly.JavaScript.javascriptGenerator.getAdjusted(
            block,
            "AT",
            1,
            false,
            window.Blockly.JavaScript.javascriptGenerator.ORDER_SUBTRACTION
          );
          code = cacheList();
          if (mode === "SET") {
            code = `${list}[${list}.length - ${at}] = ${value};
`;
          } else if (mode === "INSERT") {
            code = `${list}.splice(${list}.length - ${at}, 0, ${value});
`;
          }
        } else if (where === "RANDOM") {
          code = cacheList();
          const xVar = window.Blockly.JavaScript.variableDB_.getDistinctName(
            "tmpX",
            window.Blockly.Variables.CATEGORY_NAME
          );
          code += `var ${xVar} = Math.floor(Math.random() * ${list}.length);
`;
          if (mode === "SET") {
            code += `${list}[${xVar}] = ${value};
`;
          } else if (mode === "INSERT") {
            code += `${list}.splice(${xVar}, 0, ${value});
`;
          }
        }
        return code;
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/List/lists_getSublist.js
  var init_lists_getSublist = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/List/lists_getSublist.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.lists_getSublist = {
        init() {
          this.WHERE_OPTIONS_1 = [
            ["get sub-list from #", "FROM_START"],
            ["get sub-list from # from end", "FROM_END"],
            ["get sub-list from first", "FIRST"]
          ];
          this.WHERE_OPTIONS_2 = [
            ["#", "FROM_START"],
            ["# from end", "FROM_END"],
            ["last", "LAST"]
          ];
          this.appendValueInput("LIST").appendField(localize("in list"));
          this.appendDummyInput("AT1");
          this.appendDummyInput("AT2");
          const block_color = window.Blockly.Colours.Base.colour || window.Blockly.Colours.Base.colourSecondary || window.Blockly.Colours.Base.colourTertiary;
          this.setColour(block_color);
          this.setOutput(true, null);
          this.setOutputShape(window.Blockly.OUTPUT_SHAPE_ROUND);
          this.setInputsInline(true);
          this.setTooltip(
            localize("This block creates a list of items from an existing list, using specific item positions.")
          );
          this.updateAt(1, true);
          this.updateAt(2, true);
        },
        meta() {
          return {
            display_name: localize("Get sub-list"),
            description: localize(
              "This block creates a list of items from an existing list, using specific item positions."
            ),
            category: window.Blockly.Categories.List
          };
        },
        mutationToDom() {
          const container = document.createElement("mutation");
          const isAt1 = this.getInput("AT1").type === window.Blockly.INPUT_VALUE;
          const isAt2 = this.getInput("AT2").type === window.Blockly.INPUT_VALUE;
          container.setAttribute("at1", isAt1);
          container.setAttribute("at2", isAt2);
          return container;
        },
        domToMutation(xmlElement) {
          const isAt1 = xmlElement.getAttribute("at1") === "true";
          const isAt2 = xmlElement.getAttribute("at2") === "true";
          this.updateAt(1, isAt1);
          this.updateAt(2, isAt2);
        },
        updateAt(n, isAt) {
          this.removeInput(`AT${n}`);
          if (isAt) {
            this.appendValueInput(`AT${n}`).setCheck("Number");
          } else {
            this.appendDummyInput(`AT${n}`);
          }
          const menu = new window.Blockly.FieldDropdown(this[`WHERE_OPTIONS_${n}`], (value) => {
            const newAt = ["FROM_START", "FROM_END"].includes(value);
            if (newAt !== isAt) {
              this.updateAt(n, newAt);
              this.setFieldValue(value, `WHERE${n}`);
              return null;
            }
            return void 0;
          });
          this.getInput(`AT${n}`).appendField(menu, `WHERE${n}`);
          if (n === 1) {
            this.moveInputBefore("AT1", "AT2");
          }
          this.initSvg();
          this.renderEfficiently();
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.lists_getSublist = (block) => {
        const list = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "LIST",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_MEMBER
        ) || "[]";
        const where1 = block.getFieldValue("WHERE1");
        const where2 = block.getFieldValue("WHERE2");
        let at1, at2, code;
        if (where1 === "FIRST" && where2 === "LAST") {
          code = `${list}.slice(0)`;
        } else if (list.match(/^\w+$/) || where1 !== "FROM_END" && where2 === "FROM_START") {
          if (where1 === "FROM_START") {
            at1 = window.Blockly.JavaScript.javascriptGenerator.getAdjusted(block, "AT1");
          } else if (where1 === "FROM_END") {
            at1 = window.Blockly.JavaScript.javascriptGenerator.getAdjusted(
              block,
              "AT1",
              1,
              false,
              window.Blockly.JavaScript.javascriptGenerator.ORDER_SUBTRACTION
            );
            at1 = `${list}.length - ${at1}`;
          } else if (where1 === "FIRST") {
            at1 = "0";
          }
          if (where2 === "FROM_START") {
            at2 = window.Blockly.JavaScript.javascriptGenerator.getAdjusted(block, "AT2", 1);
          } else if (where2 === "FROM_END") {
            at2 = window.Blockly.JavaScript.javascriptGenerator.getAdjusted(
              block,
              "AT2",
              0,
              false,
              window.Blockly.JavaScript.javascriptGenerator.ORDER_SUBTRACTION
            );
            at2 = `${list}.length - ${at2}`;
          } else if (where2 === "LAST") {
            at2 = `${list}.length`;
          }
          code = `${list}.slice(${at1}, ${at2})`;
        } else {
          at1 = window.Blockly.JavaScript.javascriptGenerator.getAdjusted(block, "AT1");
          at2 = window.Blockly.JavaScript.javascriptGenerator.getAdjusted(block, "AT2");
          const where_pascal_case = {
            FROM_START: "FromStart",
            FROM_END: "FromEnd",
            FIRST: "First",
            LAST: "Last"
          };
          const getIndex = (list_name, where, opt_at) => {
            if (where === "FIRST") {
              return "0";
            } else if (where === "FROM_END") {
              return `${list_name}.length - 1 - ${opt_at}`;
            } else if (where === "LAST") {
              return `${list_name}.length - 1`;
            }
            return `${opt_at}`;
          };
          const has_at1 = where1 === "FROM_END" || where1 === "FROM_START";
          const has_at2 = where2 === "FROM_END" || where2 === "FROM_START";
          const function_name = window.Blockly.JavaScript.javascriptGenerator.provideFunction_(
            `subsequence${where_pascal_case[where1]}${where_pascal_case[where2]}`,
            [
              // eslint-disable-next-line no-underscore-dangle
              `function ${window.Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(
                    sequence${has_at1 ? ", at1" : ""}${has_at2 ? ", at2" : ""}
                ) {
                    var start = ${getIndex("sequence", where1, "at1")};
                    var end = ${getIndex("sequence", where2, "at2")} + 1;

                    return sequence.slice(start, end);
                }`
            ]
          );
          code = `${function_name}(${list}${has_at1 ? `, ${at1}` : ""}${has_at2 ? `, ${at2}` : ""})`;
        }
        return [code, window.Blockly.JavaScript.javascriptGenerator.ORDER_FUNCTION_CALL];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/List/lists_split.js
  var init_lists_split = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/List/lists_split.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.lists_split = {
        init() {
          const dropdown = new window.Blockly.FieldDropdown(
            [
              ["make list from text", "SPLIT"],
              ["make text from list", "JOIN"]
            ],
            (newMode) => this.updateType(newMode)
          );
          this.appendValueInput("INPUT").setCheck("String").appendField(dropdown, "MODE");
          this.appendValueInput("DELIM").setCheck("String").appendField("", "SPACE1").appendField(localize("with delimiter"), "DELIM_LABEL");
          this.appendDummyInput().appendField("", "SPACE2");
          this.setOutput(true, "Array");
          this.setOutputShape(window.Blockly.OUTPUT_SHAPE_ROUND);
          this.setColour(window.Blockly.Colours.Base.colour);
          this.setTooltip(
            localize(
              "This block creates a list from a given string of text, splitting it with the given delimiter. It can also join items in a list into a string of text."
            )
          );
        },
        meta() {
          return {
            display_name: localize("Create list from text"),
            description: localize(
              "This block creates a list from a given string of text, splitting it with the given delimiter. It can also join items in a list into a string of text."
            ),
            category: window.Blockly.Categories.List
          };
        },
        mutationToDom() {
          const container = document.createElement("mutation");
          container.setAttribute("mode", this.getFieldValue("MODE"));
          return container;
        },
        domToMutation(xmlElement) {
          this.updateType(xmlElement.getAttribute("mode"));
        },
        updateType(newMode) {
          const delimInput = this.getInput("DELIM");
          const spaceField = this.getField("SPACE1");
          if (newMode === "SPLIT") {
            this.outputConnection.setCheck("Array");
            this.getInput("INPUT").setCheck("String");
            if (!spaceField) {
              delimInput.insertFieldAt(0, "", "SPACE1");
            }
          } else {
            this.outputConnection.setCheck("String");
            this.getInput("INPUT").setCheck(null);
            if (spaceField) {
              delimInput.removeField("SPACE1");
            }
          }
          this.initSvg();
          this.renderEfficiently();
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.lists_split = (block) => {
        const input = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "INPUT",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_MEMBER
        );
        const delimiter = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "DELIM",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_NONE
        ) || "''";
        const mode = block.getFieldValue("MODE");
        let code;
        if (mode === "SPLIT") {
          code = `${input || "''"}.split(${delimiter})`;
        } else if (mode === "JOIN") {
          code = `${input || "[]"}.join(${delimiter})`;
        }
        return [code, window.Blockly.JavaScript.javascriptGenerator.ORDER_FUNCTION_CALL];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/List/lists_sort.js
  var init_lists_sort = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/List/lists_sort.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.lists_sort = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("sort {{ sort_type }} {{ sort_direction }} {{ input_list }}", {
              sort_type: "%1",
              sort_direction: "%2",
              input_list: "%3"
            }),
            args0: [
              {
                type: "field_dropdown",
                name: "TYPE",
                options: [
                  ["numeric", "NUMERIC"],
                  ["alphabetic", "TEXT"]
                ]
              },
              {
                type: "field_dropdown",
                name: "DIRECTION",
                options: [
                  ["ascending", "1"],
                  ["descending", "-1"]
                ]
              },
              {
                type: "input_value",
                name: "LIST"
              }
            ],
            inputsInline: true,
            output: "Array",
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("Sorts the items in a given list"),
            category: window.Blockly.Categories.List
          };
        },
        meta() {
          return {
            display_name: localize("Sort list"),
            description: localize(
              "Sorts the items in a given list, by their numeric or alphabetical value, in either ascending or descending order."
            )
          };
        },
        getRequiredValueInputs() {
          return {
            LIST: null
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.lists_sort = (block) => {
        const list = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "LIST",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_FUNCTION_CALL
        ) || "[]";
        const direction = block.getFieldValue("DIRECTION") === "1" ? 1 : -1;
        const type = block.getFieldValue("TYPE");
        const getCompareFunctionName = window.Blockly.JavaScript.javascriptGenerator.provideFunction_(
          "listsGetSortCompare",
          [
            // eslint-disable-next-line no-underscore-dangle
            `function ${window.Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(type, direction) {
            var compareFuncs = {
                NUMERIC: function(a, b) {
                    return parseFloat(a) - parseFloat(b);
                },
                TEXT: function(a, b) {
                    return a.toString() > b.toString() ? 1 : -1;
                }
            };

            return function(a, b) {
                return compareFuncs[type](a, b) * direction; 
            }
        }`
          ]
        );
        const code = `${list}.sort().slice(0).sort(${getCompareFunctionName}("${type}", ${direction}))`;
        return [code, window.Blockly.JavaScript.javascriptGenerator.ORDER_FUNCTION_CALL];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/List/lists_statement.js
  var init_lists_statement = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/List/lists_statement.js"() {
      init_translations();
      init_utils();
      init_block_images();
      window.Blockly.Blocks.lists_statement = {
        required_parent_type: "lists_create_with",
        init() {
          this.required_parent_id = "";
          const field_image = new window.Blockly.FieldImage(minusIconDark, 25, 25, "", () => this.onIconClick());
          this.jsonInit(this.definition());
          this.appendDummyInput("REMOVE_ICON").appendField(field_image);
        },
        definition() {
          return {
            message0: "%1",
            args0: [
              {
                type: "input_value",
                name: "VALUE"
              }
            ],
            inputsInline: true,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            previousStatement: null,
            nextStatement: null,
            category: window.Blockly.Categories.List
          };
        },
        meta() {
          return {
            display_name: localize("List Statement"),
            description: ""
          };
        },
        onIconClick() {
          if (this.workspace.options.readOnly || window.Blockly.derivWorkspace.isFlyoutVisible) {
            return;
          }
          runGroupedEvents(false, () => {
            this.unplug(true);
            this.dispose();
          });
        },
        onchange(event) {
          if (!this.workspace || window.Blockly.derivWorkspace.isFlyoutVisible || this.workspace.isDragging()) {
            return;
          }
          if (event.type === window.Blockly.Events.BLOCK_DRAG && !event.isStart) {
            const surround_parent = this.getSurroundParent();
            if (!surround_parent) {
              runIrreversibleEvents(() => {
                this.dispose();
              });
            } else if (!this.required_parent_id && surround_parent.type === this.required_parent_type) {
              this.required_parent_id = surround_parent.id;
            } else if (surround_parent.id !== this.required_parent_id) {
              const all_blocks = this.workspace.getAllBlocks();
              const original_parent = all_blocks.find((block) => block.id === this.required_parent_id);
              if (original_parent) {
                const last_connection = original_parent.getLastConnectionInStatement("STACK");
                runIrreversibleEvents(() => {
                  last_connection.connect(this.previousConnection);
                });
              } else {
                runIrreversibleEvents(() => {
                  this.dispose(
                    /* healStack */
                    true
                  );
                });
              }
            }
          }
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.lists_statement = (block) => {
        const code = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "VALUE",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC
        ) || "null";
        return [code, window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/List/index.js
  var init_List = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/List/index.js"() {
      init_lists_create_with();
      init_lists_repeat();
      init_lists_length();
      init_lists_isEmpty();
      init_lists_indexOf();
      init_lists_getIndex();
      init_lists_setIndex();
      init_lists_getSublist();
      init_lists_split();
      init_lists_sort();
      init_lists_statement();
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/Loops/controls_repeat_ext.js
  var init_controls_repeat_ext = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/Loops/controls_repeat_ext.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.controls_repeat_ext = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("repeat {{ number }} times", { number: "%1" }),
            args0: [
              {
                type: "input_value",
                name: "TIMES",
                check: "Number"
              }
            ],
            message1: localize("do %1"),
            args1: [
              {
                type: "input_statement",
                name: "DO"
              }
            ],
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            inputsInline: true,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            previousStatement: null,
            nextStatement: null,
            tooltip: localize("Repeats inside instructions specified number of times"),
            category: window.Blockly.Categories.Loop
          };
        },
        meta() {
          return {
            display_name: localize("Repeat (2)"),
            description: localize(
              "This block is similar to the block above, except that the number of times it repeats is determined by a given variable."
            )
          };
        },
        getRequiredValueInputs() {
          return {
            TIMES: null
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.controls_repeat_ext = (block) => {
        let repeats;
        if (block.getField("TIMES")) {
          repeats = String(Number(block.getFieldValue("TIMES")));
        } else {
          repeats = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
            block,
            "TIMES",
            window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC
          ) || "0";
        }
        const branch = window.Blockly.JavaScript.javascriptGenerator.statementToCode(block, "DO");
        let code = "";
        const loopVar = window.Blockly.JavaScript.variableDB_.getDistinctName(
          "count",
          window.Blockly.Variables.CATEGORY_NAME
        );
        let endVar = repeats;
        if (!repeats.match(/^\w+$/) && !window.Blockly.isNumber(repeats)) {
          endVar = window.Blockly.JavaScript.variableDB_.getDistinctName(
            "repeat_end",
            window.Blockly.Variables.CATEGORY_NAME
          );
          code += `var ${endVar} = ${repeats};
`;
        }
        code += `
    for (var ${loopVar} = 0; ${loopVar} < ${endVar}; ${loopVar}++) {
        ${branch}
    }
`;
        return code;
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/Loops/controls_repeat.js
  var init_controls_repeat = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/Loops/controls_repeat.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.controls_repeat = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            type: "controls_repeat",
            message0: localize("repeat {{ number }} times", { number: "%1" }),
            args0: [
              {
                type: "field_number",
                name: "TIMES",
                value: 10,
                min: 0,
                precision: 1
              }
            ],
            message1: localize("do %1"),
            args1: [
              {
                type: "input_statement",
                name: "DO"
              }
            ],
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            inputsInline: true,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            previousStatement: null,
            nextStatement: null,
            tooltip: localize("Repeats inside instructions specified number of times"),
            category: window.Blockly.Categories.Loop
          };
        },
        meta() {
          return {
            display_name: localize("Repeat (1)"),
            description: localize(
              "This block repeats the instructions contained within for a specific number of times."
            )
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.controls_repeat = window.Blockly.JavaScript.javascriptGenerator.forBlock.controls_repeat_ext;
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/Loops/controls_whileUntil.js
  var init_controls_whileUntil = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/Loops/controls_whileUntil.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.controls_whileUntil = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("repeat {{ while_or_until }} {{ boolean }}", { while_or_until: "%1", boolean: "%2" }),
            args0: [
              {
                type: "field_dropdown",
                name: "MODE",
                options: [
                  ["while", "WHILE"],
                  ["until", "UNTIL"]
                ]
              },
              {
                type: "input_value",
                name: "BOOL",
                check: "Boolean"
              }
            ],
            message1: localize("do %1"),
            args1: [
              {
                type: "input_statement",
                name: "DO"
              }
            ],
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            previousStatement: null,
            nextStatement: null,
            tooltip: localize("This block repeats instructions as long as a given condition is true"),
            category: window.Blockly.Categories.Loop
          };
        },
        meta() {
          return {
            display_name: localize("Repeat While/Until"),
            description: localize("This block repeats instructions as long as a given condition is true.")
          };
        },
        getRequiredValueInputs() {
          return {
            BOOL: null
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.controls_whileUntil = (block) => {
        const branch = window.Blockly.JavaScript.javascriptGenerator.statementToCode(block, "DO");
        const until = block.getFieldValue("MODE") === "UNTIL";
        const order = until ? window.Blockly.JavaScript.javascriptGenerator.ORDER_LOGICAL_NOT : window.Blockly.JavaScript.javascriptGenerator.ORDER_NONE;
        let argument0 = window.Blockly.JavaScript.javascriptGenerator.valueToCode(block, "BOOL", order) || "false";
        if (until) {
          argument0 = `!${argument0}`;
        }
        const maxLoopVar = window.Blockly.JavaScript.variableDB_.getDistinctName(
          "maxLoops",
          window.Blockly.Variables.CATEGORY_NAME
        );
        const currentLoopVar = window.Blockly.JavaScript.variableDB_.getDistinctName(
          "currentLoop",
          window.Blockly.Variables.CATEGORY_NAME
        );
        return `
        var ${maxLoopVar} = 10000;
        var ${currentLoopVar} = 0;

        while (${argument0}) {
            if (${currentLoopVar} > ${maxLoopVar}) {
                throw new Error("${localize("Infinite loop detected")}");
            } else {
                ${currentLoopVar}++;
            }
            
            ${branch}
        }
`;
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/Loops/controls_for.js
  var init_controls_for = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/Loops/controls_for.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.controls_for = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize(
              "count with {{ variable }} from {{ start_number }} to {{ end_number }} by {{ step_size }}",
              {
                variable: "%1",
                start_number: "%2",
                end_number: "%3",
                step_size: "%4"
              }
            ),
            args0: [
              {
                type: "field_variable",
                name: "VAR",
                variable: null
              },
              {
                type: "input_value",
                name: "FROM",
                check: "Number"
              },
              {
                type: "input_value",
                name: "TO",
                check: "Number"
              },
              {
                type: "input_value",
                name: "BY",
                check: "Number"
              }
            ],
            message1: localize("do %1"),
            args1: [
              {
                type: "input_statement",
                name: "DO"
              }
            ],
            inputsInline: true,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            previousStatement: null,
            nextStatement: null,
            tooltip: localize(
              "This block uses the variable \u201Ci\u201D to control the iterations. With each iteration, the value of \u201Ci\u201D is determined by the items in a given list."
            ),
            category: window.Blockly.Categories.Loop
          };
        },
        meta() {
          return {
            display_name: localize("Iterate (1)"),
            description: localize(
              "This block uses the variable \u201Ci\u201D to control the iterations. With each iteration, the value of \u201Ci\u201D is determined by the items in a given list."
            )
          };
        },
        getRequiredValueInputs() {
          return {
            FROM: null,
            TO: null,
            BY: null
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.controls_for = (block) => {
        const variable0 = window.Blockly.JavaScript.variableDB_.getName(
          block.getFieldValue("VAR"),
          window.Blockly.Variables.CATEGORY_NAME
        );
        const argument0 = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "FROM",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_ASSIGNMENT
        ) || "0";
        const argument1 = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "TO",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_ASSIGNMENT
        ) || "0";
        const increment = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "BY",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_ASSIGNMENT
        ) || "1";
        let branch = window.Blockly.JavaScript.javascriptGenerator.statementToCode(block, "DO");
        branch = window.Blockly.JavaScript.javascriptGenerator.addLoopTrap(branch, block.id);
        let code = "";
        if (window.Blockly.isNumber(argument0) && window.Blockly.isNumber(argument1) && window.Blockly.isNumber(increment)) {
          const up = parseFloat(argument0) <= parseFloat(argument1);
          const operator = up ? "<=" : ">=";
          const step = Math.abs(parseFloat(increment));
          const assignment = `${variable0} = ${argument0}`;
          const condition = `${variable0} ${operator} ${argument1}`;
          const statement = `${variable0} ${up ? "+=" : "-="} ${step}`;
          code = `
        for (${assignment}; ${condition}; ${statement}) {
            ${branch}
        }
`;
        } else {
          let startVar = argument0;
          if (!argument0.match(/^\w+$/) && !window.Blockly.isNumber(argument0)) {
            startVar = window.Blockly.JavaScript.variableDB_.getDistinctName(
              `${variable0}_start`,
              window.Blockly.Variables.CATEGORY_NAME
            );
            code = `var ${startVar} = ${argument0};
`;
          }
          let endVar = argument1;
          if (!argument1.match(/^\w+$/) && !window.Blockly.isNumber(argument1)) {
            endVar = window.Blockly.JavaScript.variableDB_.getDistinctName(
              `${variable0}_end`,
              window.Blockly.Variables.CATEGORY_NAME
            );
            code += `var ${endVar} = ${argument1};
`;
          }
          const incVar = window.Blockly.JavaScript.variableDB_.getDistinctName(
            `${variable0}_inc`,
            window.Blockly.Variables.CATEGORY_NAME
          );
          const incVal = window.Blockly.isNumber(increment) ? Math.abs(increment) : `Math.abs(${increment})`;
          code += `
        var ${incVar} = ${incVal};
        if (${startVar} > ${endVar}) {
            ${incVar} = -${incVar};
        }
        for (
           ${variable0} = ${startVar}; 
           ${incVar} >= 0 ? ${variable0} <= ${endVar} : ${variable0} >= ${endVar};
           ${variable0} += ${incVar}
        ) {
            ${branch};
        }
`;
        }
        return code;
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/Loops/controls_forEach.js
  var init_controls_forEach = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/Loops/controls_forEach.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.controls_forEach = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("for each item {{ variable }} in list {{ input_list }}", {
              variable: "%1",
              input_list: "%2"
            }),
            args0: [
              {
                type: "field_variable",
                name: "VAR",
                variable: null
              },
              {
                type: "input_value",
                name: "LIST",
                check: "Array"
              }
            ],
            message1: localize("do %1"),
            args1: [
              {
                type: "input_statement",
                name: "DO"
              }
            ],
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            previousStatement: null,
            nextStatement: null,
            tooltip: localize("Iterates through a given list"),
            category: window.Blockly.Categories.Loop
          };
        },
        meta() {
          return {
            display_name: localize("Iterate (2)"),
            description: localize(
              'This block uses the variable "i" to control the iterations. With each iteration, the value of "i" is determined by the items in a given list.'
            )
          };
        },
        getRequiredValueInputs() {
          return {
            LIST: null
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.controls_forEach = (block) => {
        const variable0 = window.Blockly.JavaScript.variableDB_.getName(
          block.getFieldValue("VAR"),
          window.Blockly.Variables.CATEGORY_NAME
        );
        const argument0 = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "LIST",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_ASSIGNMENT
        ) || "[]";
        let branch = window.Blockly.JavaScript.javascriptGenerator.statementToCode(block, "DO");
        branch = window.Blockly.JavaScript.javascriptGenerator.addLoopTrap(branch, block.id);
        let code = "";
        let listVar = argument0;
        if (!argument0.match(/^\w+$/)) {
          listVar = window.Blockly.JavaScript.variableDB_.getDistinctName(
            `${variable0}_list`,
            window.Blockly.Variables.CATEGORY_NAME
          );
          code = `var ${listVar} = ${argument0};
`;
        }
        const indexVar = window.Blockly.JavaScript.variableDB_.getDistinctName(
          `${variable0}_list`,
          window.Blockly.Variables.CATEGORY_NAME
        );
        code += `
    for (var ${indexVar} in ${listVar}) {
        ${variable0} = ${listVar}[${indexVar}];
        ${branch}
    }
`;
        return code;
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/Loops/controls_flow_statements.js
  var init_controls_flow_statements = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/Loops/controls_flow_statements.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.controls_flow_statements = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("{{ break_or_continue }} of loop", { break_or_continue: "%1" }),
            args0: [
              {
                type: "field_dropdown",
                name: "FLOW",
                options: [
                  ["break out", "BREAK"],
                  ["continue with next iteration", "CONTINUE"]
                ]
              }
            ],
            inputsInline: true,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            previousStatement: null,
            nextStatement: null,
            tooltip: localize(
              "This block is used to either terminate or continue a loop, and can be placed anywhere within a loop block."
            ),
            category: window.Blockly.Categories.Loop
          };
        },
        meta() {
          return {
            display_name: localize("Break out/continue"),
            description: localize(
              "This block is used to either terminate or continue a loop, and can be placed anywhere within a loop block."
            )
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.controls_flow_statements = (block) => {
        const keyword = block.getFieldValue("FLOW") === "BREAK" ? "break" : "continue";
        return `${keyword};
`;
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/Loops/index.js
  var init_Loops = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/Loops/index.js"() {
      init_controls_repeat_ext();
      init_controls_repeat();
      init_controls_whileUntil();
      init_controls_for();
      init_controls_forEach();
      init_controls_flow_statements();
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/Variable/variables_get.js
  var init_variables_get = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/Variable/variables_get.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.variables_get = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            type: "variables_get",
            message0: "%1",
            args0: [
              {
                type: "field_variable",
                name: "VAR",
                variable: localize("item")
              }
            ],
            output: null,
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Special4.colour,
            colourSecondary: window.Blockly.Colours.Special4.colourSecondary,
            colourTertiary: window.Blockly.Colours.Special4.colourTertiary,
            tooltip: localize("Gets variable value"),
            category: window.Blockly.Categories.Variables
          };
        },
        meta() {
          return {
            display_name: localize("User-defined variable"),
            description: ""
          };
        },
        onchange(event) {
          if (event.type === window.Blockly.Events.VAR_RENAME) {
            const all_blocks = this.workspace.getAllBlocks();
            const function_blocks = all_blocks.filter((block) => block.category_ === "custom_functions");
            const old_param = event.oldName;
            const new_param = event.newName;
            function_blocks.forEach((block) => {
              if (block.arguments?.length) {
                const param_index = block.arguments.findIndex((item) => item === old_param);
                if (param_index !== -1) {
                  block.arguments[param_index] = new_param;
                  const param_field = block.getField("PARAMS");
                  if (param_field) {
                    block.setFieldValue(`${localize("with: ")} ${block.arguments.join(", ")}`, "PARAMS");
                  }
                  const with_field = block.getField("WITH");
                  if (with_field) {
                    block.updateShape();
                  }
                }
              }
            });
          }
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.variables_get = (block) => {
        const code = window.Blockly.JavaScript.variableDB_.getName(
          block.getFieldValue("VAR"),
          window.Blockly.Variables.CATEGORY_NAME
        );
        return [code, window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/Variable/variables_set.js
  var init_variables_set = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/Variable/variables_set.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.variables_set = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            type: "field_variable",
            message0: localize("set {{ variable }} to {{ value }}", {
              variable: "%1",
              value: "%2"
            }),
            args0: [
              {
                type: "field_variable",
                name: "VAR",
                variable: localize("item")
              },
              {
                type: "input_value",
                name: "VALUE"
              }
            ],
            colour: window.Blockly.Colours.Special2.colour,
            colourSecondary: window.Blockly.Colours.Special2.colourSecondary,
            colourTertiary: window.Blockly.Colours.Special2.colourTertiary,
            previousStatement: null,
            nextStatement: null,
            tooltip: localize("Sets variable value"),
            category: window.Blockly.Categories.Variables
          };
        },
        meta() {
          return {
            display_name: localize("Set variable"),
            description: localize("Assigns a given value to a variable")
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.variables_set = (block) => {
        const argument0 = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "VALUE",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_ASSIGNMENT
        ) || "0";
        const varName = window.Blockly.JavaScript.variableDB_.getName(
          block.getFieldValue("VAR"),
          window.Blockly.Variables.CATEGORY_NAME
        );
        const code = `${varName} = ${argument0};
`;
        return code;
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/Variable/index.js
  var init_Variable = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Advanced/Variable/index.js"() {
      init_variables_get();
      init_variables_set();
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/After Purchase/after_purchase.js
  var init_after_purchase = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/After Purchase/after_purchase.js"() {
      init_translations();
      init_utils();
      init_block_images();
      window.Blockly.Blocks.after_purchase = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: "%1 %2 %3",
            message1: "%1",
            message2: "%1",
            args0: [
              {
                type: "field_image",
                src: finishSign,
                width: 25,
                height: 25,
                alt: "F"
              },
              {
                type: "field_label",
                text: localize("4. Restart trading conditions"),
                class: "blocklyTextRootBlockHeader"
              },
              {
                type: "input_dummy"
              }
            ],
            args1: [
              {
                type: "input_statement",
                name: "AFTERPURCHASE_STACK",
                check: "TradeAgain"
              }
            ],
            args2: [
              {
                type: "field_image",
                src: " ",
                // this is here to add extra padding
                width: 380,
                height: 10
              }
            ],
            colour: window.Blockly.Colours.RootBlock.colour,
            colourSecondary: window.Blockly.Colours.RootBlock.colourSecondary,
            colourTertiary: window.Blockly.Colours.RootBlock.colourTertiary,
            tooltip: localize("Get the last trade information and result, then trade again."),
            category: window.Blockly.Categories.After_Purchase
          };
        },
        meta() {
          return {
            display_name: localize("Restart trading conditions"),
            description: localize("Here is where you can decide if your bot should continue trading.")
          };
        },
        onchange(event) {
          if (event.type === window.Blockly.Events.BLOCK_CHANGE || event.type === window.Blockly.Events.BLOCK_DRAG && !event.isStart) {
            if (this.isCollapsed()) {
              appendCollapsedMainBlocksFields(this);
            }
          }
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.after_purchase = (block) => {
        const stack = window.Blockly.JavaScript.javascriptGenerator.statementToCode(block, "AFTERPURCHASE_STACK");
        const code = `
    BinaryBotPrivateAfterPurchase = function BinaryBotPrivateAfterPurchase() {
        Bot.highlightBlock('${block.id}');
        ${stack}
        Bot.isTradeAgain(false);
        return false;
    };`;
        return code;
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/After Purchase/check_result.js
  var init_check_result = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/After Purchase/check_result.js"() {
      init_translations();
      init_config();
      init_utils();
      window.Blockly.Blocks.contract_check_result = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("Result is {{ win_or_loss }}", { win_or_loss: "%1" }),
            args0: [
              {
                type: "field_dropdown",
                name: "CHECK_RESULT",
                options: config().lists.CHECK_RESULT
              }
            ],
            output: "Boolean",
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("True if the result of the last trade matches the selection"),
            category: window.Blockly.Categories.After_Purchase
          };
        },
        meta() {
          return {
            display_name: localize("Last trade result"),
            description: localize("You can check the result of the last trade with this block.")
          };
        },
        onchange(event) {
          if (!this.workspace || window.Blockly.derivWorkspace.isFlyoutVisible || this.workspace.isDragging()) {
            return;
          }
          if (event.type === window.Blockly.Events.BLOCK_CREATE || event.type === window.Blockly.Events.BLOCK_DRAG && !event.isStart) {
            const top_parent = this.getTopParent();
            if (top_parent) {
              const is_illegal_root_block = top_parent.isMainBlock() && top_parent.type !== "after_purchase";
              if (is_illegal_root_block) {
                this.setDisabled(true);
              }
            }
          }
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.contract_check_result = (block) => {
        const checkWith = block.getFieldValue("CHECK_RESULT");
        const code = `Bot.isResult('${checkWith}')`;
        return [code, window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/After Purchase/read_details.js
  var init_read_details = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/After Purchase/read_details.js"() {
      init_translations();
      init_config();
      init_utils();
      window.Blockly.Blocks.read_details = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("Contract Details: {{ contract_detail }}", { contract_detail: "%1" }),
            args0: [
              {
                type: "field_dropdown",
                name: "DETAIL_INDEX",
                options: config().lists.DETAILS
              }
            ],
            output: null,
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            // TODO: Investigate why block glitches in square shape.
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("Reads a selected property from contract details list"),
            category: window.Blockly.Categories.After_Purchase
          };
        },
        meta() {
          return {
            display_name: localize("Contract details"),
            description: localize("This block gives you information about your last contract.")
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        restricted_parents: ["after_purchase"]
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.read_details = (block) => {
        const detailIndex = block.getFieldValue("DETAIL_INDEX");
        const code = `Bot.readDetails(${detailIndex})`;
        return [code, window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/After Purchase/trade_again.js
  var init_trade_again = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/After Purchase/trade_again.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.trade_again = {
        init() {
          this.jsonInit(this.definition());
          this.setNextStatement(false);
        },
        definition() {
          return {
            message0: localize("Trade again"),
            colour: window.Blockly.Colours.Special1.colour,
            colourSecondary: window.Blockly.Colours.Special1.colourSecondary,
            colourTertiary: window.Blockly.Colours.Special1.colourTertiary,
            previousStatement: null,
            tooltip: localize("These blocks transfer control to the Purchase conditions block."),
            category: window.Blockly.Categories.After_Purchase
          };
        },
        meta() {
          return {
            display_name: localize("Trade again"),
            description: localize(
              "This block will transfer the control back to the Purchase conditions block, enabling you to purchase another contract."
            ),
            key_words: localize("restart")
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        restricted_parents: ["after_purchase"]
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.trade_again = () => {
        const code = `
        Bot.isTradeAgain(true);

        return true;

    `;
        return code;
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/After Purchase/index.js
  var init_After_Purchase = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/After Purchase/index.js"() {
      init_after_purchase();
      init_check_result();
      init_read_details();
      init_trade_again();
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Before Purchase/before_purchase.js
  var init_before_purchase = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Before Purchase/before_purchase.js"() {
      init_translations();
      init_utils();
      init_block_images();
      window.Blockly.Blocks.before_purchase = {
        init() {
          this.jsonInit(this.definition());
          this.setDeletable(false);
        },
        definition() {
          return {
            message0: "%1 %2 %3",
            message1: "%1",
            message2: "%1",
            args0: [
              {
                type: "field_image",
                src: purchase,
                width: 25,
                height: 25,
                alt: "P"
              },
              {
                type: "field_label",
                text: localize("2. Purchase conditions"),
                class: "blocklyTextRootBlockHeader"
              },
              {
                type: "input_dummy"
              }
            ],
            args1: [
              {
                type: "input_statement",
                name: "BEFOREPURCHASE_STACK",
                check: "Purchase"
              }
            ],
            args2: [
              {
                type: "field_image",
                src: " ",
                // this is here to add extra padding
                width: 380,
                height: 10
              }
            ],
            colour: window.Blockly.Colours.RootBlock.colour,
            colourSecondary: window.Blockly.Colours.RootBlock.colourSecondary,
            colourTertiary: window.Blockly.Colours.RootBlock.colourTertiary,
            tooltip: localize("Specify contract type and purchase conditions."),
            category: window.Blockly.Categories.Before_Purchase
          };
        },
        onchange(event) {
          if (event.type === window.Blockly.Events.BLOCK_CHANGE || event.type === window.Blockly.Events.BLOCK_DRAG && !event.isStart) {
            if (this.isCollapsed()) {
              appendCollapsedMainBlocksFields(this);
            }
          }
        },
        customContextMenu(menu) {
          const menu_items = [localize("Enable Block"), localize("Disable Block")];
          excludeOptionFromContextMenu(menu, menu_items);
          modifyContextMenu(menu);
        },
        meta() {
          return {
            display_name: localize("Purchase conditions"),
            description: localize(
              "This block is mandatory. Only one copy of this block is allowed. You can place the Purchase block (see below) here as well as conditional blocks to define your purchase conditions."
            )
          };
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.before_purchase = (block) => {
        const stack = window.Blockly.JavaScript.javascriptGenerator.statementToCode(block, "BEFOREPURCHASE_STACK");
        const code = `BinaryBotPrivateBeforePurchase = function BinaryBotPrivateBeforePurchase() {
        Bot.highlightBlock('${block.id}');
        ${stack}
    };
`;
        return code;
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Before Purchase/purchase.js
  var init_purchase = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Before Purchase/purchase.js"() {
      init_translations();
      init_scratch_shared_shim();
      init_utils();
      window.Blockly.Blocks.purchase = {
        init() {
          this.jsonInit(this.definition());
          this.setNextStatement(false);
        },
        definition() {
          return {
            message0: localize("Purchase {{ contract_type }}", { contract_type: "%1" }),
            args0: [
              {
                type: "field_dropdown",
                name: "PURCHASE_LIST",
                options: [["", ""]]
              }
            ],
            previousStatement: null,
            colour: window.Blockly.Colours.Special1.colour,
            colourSecondary: window.Blockly.Colours.Special1.colourSecondary,
            colourTertiary: window.Blockly.Colours.Special1.colourTertiary,
            tooltip: localize("This block purchases contract of a specified type."),
            category: window.Blockly.Categories.Before_Purchase
          };
        },
        meta() {
          return {
            display_name: localize("Purchase"),
            description: localize(
              "Use this block to purchase the specific contract you want. You may add multiple Purchase blocks together with conditional blocks to define your purchase conditions. This block can only be used within the Purchase conditions block."
            ),
            key_words: localize("buy")
          };
        },
        onchange(event) {
          if (!this.workspace || window.Blockly.derivWorkspace.isFlyoutVisible || this.workspace.isDragging()) {
            return;
          }
          if (event.type === window.Blockly.Events.BLOCK_CREATE && event.ids.includes(this.id)) {
            this.populatePurchaseList(event);
          } else if (event.type === window.Blockly.Events.BLOCK_CHANGE) {
            if (event.name === "TYPE_LIST" || event.name === "TRADETYPE_LIST") {
              this.populatePurchaseList(event);
            }
          } else if (event.type === window.Blockly.Events.BLOCK_DRAG && !event.isStart && event.blockId === this.id) {
            const purchase_type_list = this.getField("PURCHASE_LIST");
            const purchase_options = purchase_type_list.menuGenerator_;
            if (purchase_options[0][0] === "") {
              this.populatePurchaseList(event);
            }
          }
        },
        populatePurchaseList(event) {
          const trade_definition_block = this.workspace.getTradeDefinitionBlock();
          if (trade_definition_block) {
            const trade_type_block = trade_definition_block.getChildByType("trade_definition_tradetype");
            const trade_type = trade_type_block.getFieldValue("TRADETYPE_LIST");
            const contract_type_block = trade_definition_block.getChildByType("trade_definition_contracttype");
            const contract_type = contract_type_block.getFieldValue("TYPE_LIST");
            const purchase_type_list = this.getField("PURCHASE_LIST");
            const purchase_type = purchase_type_list.getValue();
            const contract_type_options = getContractTypeOptions(contract_type, trade_type);
            purchase_type_list.updateOptions(contract_type_options, {
              default_value: purchase_type,
              event_group: event.group,
              should_pretend_empty: true
            });
          }
        },
        customContextMenu(menu) {
          const menu_items = [localize("Enable Block"), localize("Disable Block")];
          excludeOptionFromContextMenu(menu, menu_items);
          modifyContextMenu(menu);
        },
        restricted_parents: ["before_purchase"]
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.purchase = (block) => {
        const purchaseList = block.getFieldValue("PURCHASE_LIST");
        const code = `Bot.purchase('${purchaseList}');
`;
        return code;
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Before Purchase/ask_price.js
  var init_ask_price = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Before Purchase/ask_price.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.ask_price = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("Ask Price {{ contract_type }}", { contract_type: "%1" }),
            args0: [
              {
                type: "field_dropdown",
                name: "PURCHASE_LIST",
                options: [["", ""]]
              }
            ],
            output: "Number",
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("This block returns the purchase price for the selected trade type."),
            category: window.Blockly.Categories.Before_Purchase
          };
        },
        meta() {
          return {
            display_name: localize("Purchase price"),
            description: localize(
              'This block returns the purchase price for the selected trade type. This block can be used only in the "Purchase conditions" root block.'
            )
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        onchange: window.Blockly.Blocks.purchase.onchange,
        populatePurchaseList: window.Blockly.Blocks.purchase.populatePurchaseList,
        enforceLimitations: window.Blockly.Blocks.purchase.enforceLimitations
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.ask_price = (block) => {
        const purchaseList = block.getFieldValue("PURCHASE_LIST");
        const code = `Bot.getAskPrice('${purchaseList}')`;
        return [code, window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Before Purchase/payout.js
  var init_payout = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Before Purchase/payout.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.payout = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("Payout {{ contract_type }}", { contract_type: "%1" }),
            args0: [
              {
                type: "field_dropdown",
                name: "PURCHASE_LIST",
                options: [["", ""]]
              }
            ],
            output: "Number",
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("This block returns the potential payout for the selected trade type"),
            category: window.Blockly.Categories.Before_Purchase
          };
        },
        meta() {
          return {
            display_name: localize("Potential payout"),
            description: localize(
              'This block returns the potential payout for the selected trade type. This block can be used only in the "Purchase conditions" root block.'
            )
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        onchange: window.Blockly.Blocks.purchase.onchange,
        populatePurchaseList: window.Blockly.Blocks.purchase.populatePurchaseList,
        enforceLimitations: window.Blockly.Blocks.purchase.enforceLimitations
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.payout = (block) => {
        const purchaseList = block.getFieldValue("PURCHASE_LIST");
        const code = `Bot.getPayout('${purchaseList}')`;
        return [code, window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Before Purchase/index.js
  var init_Before_Purchase = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Before Purchase/index.js"() {
      init_before_purchase();
      init_purchase();
      init_ask_price();
      init_payout();
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/During Purchase/during_purchase.js
  var init_during_purchase = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/During Purchase/during_purchase.js"() {
      init_translations();
      init_utils();
      init_block_images();
      window.Blockly.Blocks.during_purchase = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: "%1 %2 %3",
            message1: "%1",
            message2: "%1",
            args0: [
              {
                type: "field_image",
                src: sellContract,
                width: 25,
                height: 25,
                alt: "S"
              },
              {
                type: "field_label",
                text: localize("3. Sell conditions"),
                class: "blocklyTextRootBlockHeader"
              },
              {
                type: "input_dummy"
              }
            ],
            args1: [
              {
                type: "input_statement",
                name: "DURING_PURCHASE_STACK",
                check: "SellAtMarket"
              }
            ],
            args2: [
              {
                type: "field_image",
                src: " ",
                // this is here to add extra padding
                width: 380,
                height: 10
              }
            ],
            colour: window.Blockly.Colours.RootBlock.colour,
            colourSecondary: window.Blockly.Colours.RootBlock.colourSecondary,
            colourTertiary: window.Blockly.Colours.RootBlock.colourTertiary,
            tooltip: localize("Sell your active contract if needed (optional)"),
            category: window.Blockly.Categories.During_Purchase
          };
        },
        meta() {
          return {
            display_name: localize("Sell conditions"),
            description: localize(
              "Here is where you can decide to sell your contract before it expires. Only one copy of this block is allowed."
            )
          };
        },
        onchange(event) {
          if (event.type === window.Blockly.Events.BLOCK_CHANGE || event.type === window.Blockly.Events.BLOCK_DRAG && !event.isStart) {
            if (this.isCollapsed()) {
              appendCollapsedMainBlocksFields(this);
            }
          }
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.during_purchase = (block) => {
        const stack = window.Blockly.JavaScript.javascriptGenerator.statementToCode(block, "DURING_PURCHASE_STACK");
        const code = `BinaryBotPrivateDuringPurchase = function BinaryBotPrivateDuringPurchase() {
        Bot.highlightBlock('${block.id}');
        ${stack}
    };
`;
        return code;
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/During Purchase/sell_at_market.js
  var init_sell_at_market = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/During Purchase/sell_at_market.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.sell_at_market = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("Sell at market price"),
            colour: window.Blockly.Colours.Special1.colour,
            colourSecondary: window.Blockly.Colours.Special1.colourSecondary,
            colourTertiary: window.Blockly.Colours.Special1.colourTertiary,
            previousStatement: null,
            nextStatement: null,
            tooltip: localize("Use this block to sell your contract at the market price."),
            category: window.Blockly.Categories.During_Purchase
          };
        },
        meta() {
          return {
            display_name: localize("Sell at market price"),
            description: localize("Use this block to sell your contract at the market price.")
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        restricted_parents: ["during_purchase"]
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.sell_at_market = () => "Bot.sellAtMarket();\n";
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/During Purchase/check_sell.js
  var init_check_sell = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/During Purchase/check_sell.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.check_sell = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("Sell is available"),
            output: "Boolean",
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("True if active contract can be sold before expiration at current market price"),
            category: window.Blockly.Categories.During_Purchase
          };
        },
        meta() {
          return {
            display_name: localize("Can contract be sold?"),
            description: localize(
              "This block helps you check if your contract can be sold. If your contract can be sold, it returns \u201CTrue\u201D. Otherwise, it returns an empty string."
            )
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        restricted_parents: ["during_purchase"]
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.check_sell = () => {
        const code = "Bot.isSellAvailable()";
        return [code, window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/During Purchase/sell_price.js
  var init_sell_price = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/During Purchase/sell_price.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.sell_price = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("Sell profit/loss"),
            output: "Number",
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("Returns the profit/loss from selling at market price"),
            category: window.Blockly.Categories.During_Purchase
          };
        },
        meta() {
          return {
            display_name: localize("Profit/loss from selling"),
            description: localize(
              "This block gives you the potential profit or loss if you decide to sell your contract."
            )
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        restricted_parents: ["during_purchase"]
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.sell_price = () => {
        const code = "Bot.getSellPrice()";
        return [code, window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/During Purchase/index.js
  var init_During_Purchase = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/During Purchase/index.js"() {
      init_during_purchase();
      init_sell_at_market();
      init_check_sell();
      init_sell_price();
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Indicators/bb_statement.js
  var init_bb_statement = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Indicators/bb_statement.js"() {
      init_translations();
      init_config();
      init_utils();
      window.Blockly.Blocks.bb_statement = {
        protected_statements: ["STATEMENT"],
        required_child_blocks: ["input_list", "period", "std_dev_multiplier_up", "std_dev_multiplier_down"],
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("set {{ variable }} to Bollinger Bands {{ band_type }} {{ dummy }}", {
              variable: "%1",
              band_type: "%2",
              dummy: "%3"
            }),
            message1: "%1",
            args0: [
              {
                type: "field_variable",
                name: "VARIABLE",
                variable: "bb"
              },
              {
                type: "field_dropdown",
                name: "BBRESULT_LIST",
                options: config().bbResult
              },
              {
                type: "input_dummy"
              }
            ],
            args1: [
              {
                type: "input_statement",
                name: "STATEMENT",
                check: null
              }
            ],
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("Calculates Bollinger Bands (BB) from a list with a period"),
            previousStatement: null,
            nextStatement: null,
            category: window.Blockly.Categories.Indicators
          };
        },
        meta() {
          return {
            display_name: localize("Bollinger Bands (BB)"),
            description: localize(
              "BB is a technical analysis indicator that\u2019s commonly used by traders. The idea behind BB is that the market price stays within the upper and lower bands for 95% of the time. The bands are the standard deviations of the market price, while the line in the middle is a simple moving average line. If the price reaches either the upper or lower band, there\u2019s a possibility of a trend reversal."
            )
          };
        },
        onchange(event) {
          if (!this.workspace || window.Blockly.derivWorkspace.isFlyoutVisible || this.workspace.isDragging()) {
            return;
          }
          if (event.type === window.Blockly.Events.BLOCK_DRAG && !event.isStart) {
            const blocksInStatement = this.getBlocksInStatement("STATEMENT");
            blocksInStatement.forEach((block) => {
              if (!this.required_child_blocks.includes(block.type)) {
                window.Blockly.Events.disable();
                block.unplug(false);
                window.Blockly.Events.enable();
              }
            });
          }
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.bb_statement = (block) => {
        const var_name = window.Blockly.JavaScript.variableDB_.getName(
          block.getFieldValue("VARIABLE"),
          window.Blockly.Variables.CATEGORY_NAME
        );
        const bb_result = block.getFieldValue("BBRESULT_LIST");
        const input = block.childValueToCode("input_list", "INPUT_LIST");
        const period = block.childValueToCode("period", "PERIOD");
        const std_dev_up = block.childValueToCode("std_dev_multiplier_up", "UPMULTIPLIER");
        const std_dev_down = block.childValueToCode("std_dev_multiplier_down", "DOWNMULTIPLIER");
        const code = `${var_name} = Bot.bb(${input}, { 
        periods: ${period}, 
        stdDevUp: ${std_dev_up}, 
        stdDevDown: ${std_dev_down} 
    }, ${bb_result});
`;
        return code;
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Indicators/bba_statement.js
  var init_bba_statement = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Indicators/bba_statement.js"() {
      init_translations();
      init_config();
      init_utils();
      window.Blockly.Blocks.bba_statement = {
        protected_statements: ["STATEMENT"],
        required_child_blocks: ["input_list", "period", "std_dev_multiplier_up", "std_dev_multiplier_down"],
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("set {{ variable }} to Bollinger Bands Array {{ band_type }} {{ dummy }}", {
              variable: "%1",
              band_type: "%2",
              dummy: "%3"
            }),
            message1: "%1",
            args0: [
              {
                type: "field_variable",
                name: "VARIABLE",
                variable: "bba"
              },
              {
                type: "field_dropdown",
                name: "BBRESULT_LIST",
                options: config().bbResult
              },
              {
                type: "input_dummy"
              }
            ],
            args1: [
              {
                type: "input_statement",
                name: "STATEMENT",
                check: null
              }
            ],
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("Calculates Bollinger Bands (BB) list from a list with a period"),
            previousStatement: null,
            nextStatement: null,
            category: window.Blockly.Categories.Indicators
          };
        },
        meta() {
          return {
            display_name: localize("Bollinger Bands Array (BBA)"),
            description: localize(
              "Similar to BB. This block gives you a choice of returning the values of either the lower band, higher band, or the SMA line in the middle."
            )
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        onchange: window.Blockly.Blocks.bb_statement.onchange
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.bba_statement = (block) => {
        const var_name = window.Blockly.JavaScript.variableDB_.getName(
          block.getFieldValue("VARIABLE"),
          window.Blockly.Variables.CATEGORY_NAME
        );
        const bb_result = block.getFieldValue("BBRESULT_LIST");
        const input = block.childValueToCode("input_list", "INPUT_LIST");
        const period = block.childValueToCode("period", "PERIOD");
        const std_dev_up = block.childValueToCode("std_dev_multiplier_up", "UPMULTIPLIER");
        const std_dev_down = block.childValueToCode("std_dev_multiplier_down", "DOWNMULTIPLIER");
        const code = `${var_name} = Bot.bba(${input}, { 
        periods: ${period}, 
        stdDevUp: ${std_dev_up}, 
        stdDevDown: ${std_dev_down} 
    }, ${bb_result});
`;
        return code;
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Indicators/ema_statement.js
  var init_ema_statement = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Indicators/ema_statement.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.ema_statement = {
        protected_statements: ["STATEMENT"],
        required_child_blocks: ["input_list", "period"],
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("set {{ variable }} to Exponential Moving Average {{ dummy }}", {
              variable: "%1",
              dummy: "%2"
            }),
            message1: "%1",
            args0: [
              {
                type: "field_variable",
                name: "VARIABLE",
                variable: "ema"
              },
              {
                type: "input_dummy"
              }
            ],
            args1: [
              {
                type: "input_statement",
                name: "STATEMENT",
                check: null
              }
            ],
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("Calculates Exponential Moving Average (EMA) from a list with a period"),
            previousStatement: null,
            nextStatement: null,
            category: window.Blockly.Categories.Indicators
          };
        },
        meta() {
          return {
            display_name: localize("Exponential Moving Average (EMA)"),
            description: localize(
              "EMA is a type of moving average that places more significance on the most recent data points. It\u2019s also known as the exponentially weighted moving average. EMA is different from SMA in that it reacts more significantly to recent price changes."
            )
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        onchange: window.Blockly.Blocks.bb_statement.onchange
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.ema_statement = (block) => {
        const var_name = window.Blockly.JavaScript.variableDB_.getName(
          block.getFieldValue("VARIABLE"),
          window.Blockly.Variables.CATEGORY_NAME
        );
        const input = block.childValueToCode("input_list", "INPUT_LIST");
        const period = block.childValueToCode("period", "PERIOD");
        const code = `${var_name} = Bot.ema(${input}, ${period});
`;
        return code;
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Indicators/emaa_statement.js
  var init_emaa_statement = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Indicators/emaa_statement.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.emaa_statement = {
        protected_statements: ["STATEMENT"],
        required_child_blocks: ["input_list", "period"],
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("set {{ variable }} to Exponential Moving Average Array {{ dummy }}", {
              variable: "%1",
              dummy: "%2"
            }),
            message1: "%1",
            args0: [
              {
                type: "field_variable",
                name: "VARIABLE",
                variable: "emaa"
              },
              {
                type: "input_dummy"
              }
            ],
            args1: [
              {
                type: "input_statement",
                name: "STATEMENT",
                check: null
              }
            ],
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("Calculates Exponential Moving Average (EMA) list from a list of values with a period"),
            previousStatement: null,
            nextStatement: null,
            category: window.Blockly.Categories.Indicators
          };
        },
        meta() {
          return {
            display_name: localize("Exponential Moving Average Array (EMAA)"),
            description: localize(
              "This block is similar to EMA, except that it gives you the entire EMA line based on the input list and the given period."
            )
          };
        },
        onchange: window.Blockly.Blocks.bb_statement.onchange,
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.emaa_statement = (block) => {
        const var_name = window.Blockly.JavaScript.variableDB_.getName(
          block.getFieldValue("VARIABLE"),
          window.Blockly.Variables.CATEGORY_NAME
        );
        const input = block.childValueToCode("input_list", "INPUT_LIST");
        const period = block.childValueToCode("period", "PERIOD");
        const code = `${var_name} = Bot.emaa(${input}, ${period});
`;
        return code;
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Indicators/rsi_statement.js
  var init_rsi_statement = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Indicators/rsi_statement.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.rsi_statement = {
        protected_statements: ["STATEMENT"],
        required_child_blocks: ["input_list", "period"],
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("set {{ variable }} to Relative Strength Index {{ dummy }}", {
              variable: "%1",
              dummy: "%2"
            }),
            message1: "%1",
            args0: [
              {
                type: "field_variable",
                name: "VARIABLE",
                variable: "rsi"
              },
              {
                type: "input_dummy"
              }
            ],
            args1: [
              {
                type: "input_statement",
                name: "STATEMENT",
                check: null
              }
            ],
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("Relative Strength Index (RSI) from a list with a period"),
            previousStatement: null,
            nextStatement: null,
            category: window.Blockly.Categories.Indicators
          };
        },
        meta() {
          return {
            display_name: localize("Relative Strength Index (RSI)"),
            description: localize(
              "RSI is a technical analysis tool that helps you identify the market trend. It will give you a value from 0 to 100. An RSI value of 70 and above means that the asset is overbought and the current trend may reverse, while a value of 30 and below means that the asset is oversold."
            )
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        onchange: window.Blockly.Blocks.bb_statement.onchange
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.rsi_statement = (block) => {
        const var_name = window.Blockly.JavaScript.variableDB_.getName(
          block.getFieldValue("VARIABLE"),
          window.Blockly.Variables.CATEGORY_NAME
        );
        const input = block.childValueToCode("input_list", "INPUT_LIST");
        const period = block.childValueToCode("period", "PERIOD");
        const code = `${var_name} = Bot.rsi(${input}, ${period});
`;
        return code;
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Indicators/rsia_statement.js
  var init_rsia_statement = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Indicators/rsia_statement.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.rsia_statement = {
        protected_statements: ["STATEMENT"],
        required_child_blocks: ["input_list", "period"],
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("set {{ variable }} to Relative Strength Index Array {{ dummy }}", {
              variable: "%1",
              dummy: "%2"
            }),
            message1: "%1",
            args0: [
              {
                type: "field_variable",
                name: "VARIABLE",
                variable: "rsia"
              },
              {
                type: "input_dummy"
              }
            ],
            args1: [
              {
                type: "input_statement",
                name: "STATEMENT",
                check: null
              }
            ],
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("Calculates Relative Strength Index (RSI) list from a list of values with a period"),
            previousStatement: null,
            nextStatement: null,
            category: window.Blockly.Categories.Indicators
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        meta() {
          return {
            display_name: localize("Relative Strength Index Array (RSIA)"),
            description: localize(
              "Similar to RSI, this block gives you a list of values for each entry in the input list."
            )
          };
        },
        onchange: window.Blockly.Blocks.bb_statement.onchange
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.rsia_statement = (block) => {
        const var_name = window.Blockly.JavaScript.variableDB_.getName(
          block.getFieldValue("VARIABLE"),
          window.Blockly.Variables.CATEGORY_NAME
        );
        const input = block.childValueToCode("input_list", "INPUT_LIST");
        const period = block.childValueToCode("period", "PERIOD");
        const code = `${var_name} = Bot.rsia(${input}, ${period});
`;
        return code;
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Indicators/sma_statement.js
  var init_sma_statement = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Indicators/sma_statement.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.sma_statement = {
        protected_statements: ["STATEMENT"],
        required_child_blocks: ["input_list", "period"],
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("set {{ variable }} to Simple Moving Average {{ dummy }}", {
              variable: "%1",
              dummy: "%2"
            }),
            message1: "%1",
            args0: [
              {
                type: "field_variable",
                name: "VARIABLE",
                variable: "sma"
              },
              {
                type: "input_dummy"
              }
            ],
            args1: [
              {
                type: "input_statement",
                name: "STATEMENT",
                check: null
              }
            ],
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("Calculates Simple Moving Average (SMA) from a list with a period"),
            previousStatement: null,
            nextStatement: null,
            category: window.Blockly.Categories.Indicators
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        meta() {
          return {
            display_name: localize("Simple Moving Average (SMA)"),
            description: localize(
              "SMA is a frequently used indicator in technical analysis. It calculates the average market price over a specified period, and is usually used to identify market trend direction: up or down. For example, if the SMA is moving upwards, it means the market trend is up. "
            )
          };
        },
        onchange: window.Blockly.Blocks.bb_statement.onchange
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.sma_statement = (block) => {
        const var_name = window.Blockly.JavaScript.variableDB_.getName(
          block.getFieldValue("VARIABLE"),
          window.Blockly.Variables.CATEGORY_NAME
        );
        const input = block.childValueToCode("input_list", "INPUT_LIST");
        const period = block.childValueToCode("period", "PERIOD");
        const code = `${var_name} = Bot.sma(${input}, ${period});
`;
        return code;
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Indicators/smaa_statement.js
  var init_smaa_statement = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Indicators/smaa_statement.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.smaa_statement = {
        protected_statements: ["STATEMENT"],
        required_child_blocks: ["input_list", "period"],
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("set {{ variable }} to Simple Moving Average Array {{ dummy }}", {
              variable: "%1",
              dummy: "%2"
            }),
            message1: "%1",
            args0: [
              {
                type: "field_variable",
                name: "VARIABLE",
                variable: "smaa"
              },
              {
                type: "input_dummy"
              }
            ],
            args1: [
              {
                type: "input_statement",
                name: "STATEMENT",
                check: null
              }
            ],
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("Calculates Simple Moving Average line from a list with a period"),
            previousStatement: null,
            nextStatement: null,
            category: window.Blockly.Categories.Indicators
          };
        },
        meta() {
          return {
            display_name: localize("Simple Moving Average Array (SMAA)"),
            description: localize(
              "Similar to SMA, this block gives you the entire SMA line containing a list of all values for a given period."
            )
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        onchange: window.Blockly.Blocks.bb_statement.onchange
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.smaa_statement = (block) => {
        const var_name = window.Blockly.JavaScript.variableDB_.getName(
          block.getFieldValue("VARIABLE"),
          window.Blockly.Variables.CATEGORY_NAME
        );
        const input = block.childValueToCode("input_list", "INPUT_LIST");
        const period = block.childValueToCode("period", "PERIOD");
        const code = `${var_name} = Bot.smaa(${input}, ${period});
`;
        return code;
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Indicators/macda_statement.js
  var init_macda_statement = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Indicators/macda_statement.js"() {
      init_translations();
      init_config();
      init_utils();
      window.Blockly.Blocks.macda_statement = {
        protected_statements: ["STATEMENT"],
        required_child_blocks: ["input_list", "fast_ema_period", "slow_ema_period", "signal_ema_period"],
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("set {{ variable }} to MACD Array {{ dropdown }} {{ dummy }}", {
              variable: "%1",
              dropdown: "%2",
              dummy: "%3"
            }),
            message1: "%1",
            args0: [
              {
                type: "field_variable",
                name: "VARIABLE",
                variable: "macda"
              },
              {
                type: "field_dropdown",
                name: "MACDFIELDS_LIST",
                options: config().macdFields
              },
              {
                type: "input_dummy"
              }
            ],
            args1: [
              {
                type: "input_statement",
                name: "STATEMENT",
                check: null
              }
            ],
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("Calculates Moving Average Convergence Divergence (MACD) from a list"),
            previousStatement: null,
            nextStatement: null,
            category: window.Blockly.Categories.Indicators
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        meta() {
          return {
            display_name: localize("Moving Average Convergence Divergence"),
            description: localize(
              "MACD is calculated by subtracting the long-term EMA (26 periods) from the short-term EMA (12 periods). If the short-term EMA is greater or lower than the long-term EMA than there\u2019s a possibility of a trend reversal."
            )
          };
        },
        onchange: window.Blockly.Blocks.bb_statement.onchange
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.macda_statement = (block) => {
        const var_name = window.Blockly.JavaScript.variableDB_.getName(
          block.getFieldValue("VARIABLE"),
          window.Blockly.Variables.CATEGORY_NAME
        );
        const macd_field = block.getFieldValue("MACDFIELDS_LIST");
        const input = block.childValueToCode("input_list", "INPUT_LIST");
        const fast_ema_period = block.childValueToCode("fast_ema_period", "FAST_EMA_PERIOD");
        const slow_ema_period = block.childValueToCode("slow_ema_period", "SLOW_EMA_PERIOD");
        const signal_ema_period = block.childValueToCode("signal_ema_period", "SIGNAL_EMA_PERIOD");
        const code = `${var_name} = Bot.macda(${input}, { 
        fastEmaPeriod: ${fast_ema_period},
        slowEmaPeriod: ${slow_ema_period},
        signalEmaPeriod: ${signal_ema_period},
    }, ${macd_field});
`;
        return code;
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Indicators/Parts/input_list.js
  var init_input_list = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Indicators/Parts/input_list.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.input_list = {
        init() {
          this.jsonInit({
            message0: localize("Input List {{ input_list }}", { input_list: "%1" }),
            args0: [
              {
                type: "input_value",
                name: "INPUT_LIST",
                check: "Array"
              }
            ],
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            previousStatement: null,
            nextStatement: null
          });
          this.setMovable(false);
          this.setDeletable(false);
        },
        onchange(event) {
          if (!this.workspace || window.Blockly.derivWorkspace.isFlyoutVisible || this.workspace.isDragging()) {
            return;
          }
          const setParentId = () => {
            const surround_parent = this.getSurroundParent();
            if (surround_parent && !this.required_parent_id && this.allowed_parents.includes(surround_parent.type)) {
              this.required_parent_id = surround_parent.id;
            }
          };
          if (event.type === window.Blockly.Events.BLOCK_CREATE && event.ids.includes(this.id)) {
            setParentId();
          } else if (event.type === window.Blockly.Events.BLOCK_DRAG && !event.isStart) {
            setParentId();
            const surround_parent = this.getSurroundParent();
            const has_parent = !!surround_parent;
            const is_illegal_parent = !has_parent || surround_parent.id !== this.required_parent_id;
            if (!has_parent || is_illegal_parent) {
              runIrreversibleEvents(() => {
                this.unplug(true);
                const all_blocks = this.workspace.getAllBlocks();
                const parent_block = all_blocks.find((block) => block.id === this.required_parent_id);
                if (parent_block) {
                  const parent_connection = parent_block.getLastConnectionInStatement("STATEMENT");
                  parent_connection.connect(this.previousConnection);
                } else {
                  this.dispose();
                }
              });
            }
          }
        },
        allowed_parents: [
          "bb_statement",
          "bba_statement",
          "ema_statement",
          "emaa_statement",
          "macda_statement",
          "rsi_statement",
          "rsia_statement",
          "sma_statement",
          "smaa_statement"
        ],
        getRequiredValueInputs() {
          return {
            INPUT_LIST: null
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.input_list = () => {
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Indicators/Parts/period.js
  var init_period = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Indicators/Parts/period.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.period = {
        init() {
          this.jsonInit({
            message0: localize("Period {{ input_period }}", { input_period: "%1" }),
            args0: [
              {
                type: "input_value",
                name: "PERIOD",
                check: null
              }
            ],
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            previousStatement: null,
            nextStatement: null
          });
          this.setMovable(false);
          this.setDeletable(false);
        },
        onchange: window.Blockly.Blocks.input_list.onchange,
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        allowed_parents: [
          "bb_statement",
          "bba_statement",
          "ema_statement",
          "emaa_statement",
          "macda_statement",
          "rsi_statement",
          "rsia_statement",
          "sma_statement",
          "smaa_statement"
        ],
        getRequiredValueInputs() {
          return {
            PERIOD: null
          };
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.period = () => {
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Indicators/Parts/std_dev_multiplier_up.js
  var init_std_dev_multiplier_up = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Indicators/Parts/std_dev_multiplier_up.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.std_dev_multiplier_up = {
        init() {
          this.jsonInit({
            message0: localize("Standard Deviation Up Multiplier {{ input_number }}", { input_number: "%1" }),
            args0: [
              {
                type: "input_value",
                name: "UPMULTIPLIER",
                check: null
              }
            ],
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            previousStatement: null,
            nextStatement: null
          });
          this.setMovable(false);
          this.setDeletable(false);
        },
        onchange: window.Blockly.Blocks.input_list.onchange,
        allowed_parents: ["bb_statement", "bba_statement"],
        getRequiredValueInputs() {
          return {
            UPMULTIPLIER: null
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.std_dev_multiplier_up = () => {
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Indicators/Parts/std_dev_multiplier_down.js
  var init_std_dev_multiplier_down = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Indicators/Parts/std_dev_multiplier_down.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.std_dev_multiplier_down = {
        init() {
          this.jsonInit({
            message0: localize("Standard Deviation Down Multiplier {{ input_number }}", { input_number: "%1" }),
            args0: [
              {
                type: "input_value",
                name: "DOWNMULTIPLIER",
                check: null
              }
            ],
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            previousStatement: null,
            nextStatement: null
          });
          this.setMovable(false);
          this.setDeletable(false);
        },
        onchange: window.Blockly.Blocks.input_list.onchange,
        allowed_parents: ["bb_statement", "bba_statement"],
        getRequiredValueInputs() {
          return {
            DOWNMULTIPLIER: null
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.std_dev_multiplier_down = () => {
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Indicators/Parts/fast_ema_period.js
  var init_fast_ema_period = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Indicators/Parts/fast_ema_period.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.fast_ema_period = {
        init() {
          this.jsonInit({
            message0: localize("Fast EMA Period {{ input_number }}", { input_number: "%1" }),
            args0: [
              {
                type: "input_value",
                name: "FAST_EMA_PERIOD",
                check: null
              }
            ],
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            previousStatement: null,
            nextStatement: null
          });
          this.setMovable(false);
          this.setDeletable(false);
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        onchange: window.Blockly.Blocks.input_list.onchange,
        allowed_parents: ["macda_statement"],
        getRequiredValueInputs() {
          return {
            FAST_EMA_PERIOD: null
          };
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.fast_ema_period = () => {
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Indicators/Parts/slow_ema_period.js
  var init_slow_ema_period = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Indicators/Parts/slow_ema_period.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.slow_ema_period = {
        init() {
          this.jsonInit({
            message0: localize("Slow EMA Period {{ input_number }}", { input_number: "%1" }),
            args0: [
              {
                type: "input_value",
                name: "SLOW_EMA_PERIOD",
                check: null
              }
            ],
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            previousStatement: null,
            nextStatement: null
          });
          this.setMovable(false);
          this.setDeletable(false);
        },
        onchange: window.Blockly.Blocks.input_list.onchange,
        allowed_parents: ["macda_statement"],
        getRequiredValueInputs() {
          return {
            SLOW_EMA_PERIOD: null
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.slow_ema_period = () => {
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Indicators/Parts/signal_ema_period.js
  var init_signal_ema_period = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Indicators/Parts/signal_ema_period.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.signal_ema_period = {
        init() {
          this.jsonInit({
            message0: localize("Signal EMA Period {{ input_number }}", { input_number: "%1" }),
            args0: [
              {
                type: "input_value",
                name: "SIGNAL_EMA_PERIOD",
                check: null
              }
            ],
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            previousStatement: null,
            nextStatement: null
          });
          this.setMovable(false);
          this.setDeletable(false);
        },
        onchange: window.Blockly.Blocks.input_list.onchange,
        allowed_parents: ["macda_statement"],
        getRequiredValueInputs() {
          return {
            SIGNAL_EMA_PERIOD: null
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.signal_ema_period = () => {
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Indicators/Parts/index.js
  var init_Parts = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Indicators/Parts/index.js"() {
      init_input_list();
      init_period();
      init_std_dev_multiplier_up();
      init_std_dev_multiplier_down();
      init_fast_ema_period();
      init_slow_ema_period();
      init_signal_ema_period();
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Indicators/index.js
  var init_Indicators = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Indicators/index.js"() {
      init_bb_statement();
      init_bba_statement();
      init_ema_statement();
      init_emaa_statement();
      init_rsi_statement();
      init_rsia_statement();
      init_sma_statement();
      init_smaa_statement();
      init_macda_statement();
      init_Parts();
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tick Analysis/tick.js
  var init_tick = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tick Analysis/tick.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.tick = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("Last Tick"),
            output: "Number",
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("Returns the value of the last tick"),
            category: window.Blockly.Categories.Tick_Analysis
          };
        },
        meta() {
          return {
            display_name: localize("Last tick"),
            description: localize("This block gives you the value of the last tick.")
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.Blocks.tick_string = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("Last Tick String"),
            output: "String",
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("Returns the value of the latest tick in string format"),
            category: window.Blockly.Categories.Tick_Analysis
          };
        },
        meta() {
          return {
            display_name: localize("Tick value"),
            description: localize("Tick value Description")
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        onchange: window.Blockly.Blocks.tick.onchange
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.tick = (block) => {
        const parent = block.getParent();
        const type_list = ["notify", "text_print"];
        return [
          `Bot.getLastTick(false, ${type_list.includes(parent?.type)})`,
          window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC
        ];
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.tick_string = () => [
        "Bot.getLastTick(false, true)",
        window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC
      ];
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tick Analysis/ticks.js
  var init_ticks = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tick Analysis/ticks.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.ticks = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("Ticks list"),
            output: "Array",
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("This block gives you a list of the last 1000 tick values."),
            category: window.Blockly.Categories.Tick_Analysis
          };
        },
        meta() {
          return {
            display_name: localize("Tick list"),
            description: localize("This block gives you a list of the last 1000 tick values.")
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.Blocks.ticks_string = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("Ticks String List"),
            output: "Array",
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("Returns the list of tick values in string format"),
            category: window.Blockly.Categories.Tick_Analysis
          };
        },
        meta() {
          return {
            display_name: localize("Tick List String"),
            description: localize("Tick List String Description")
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        onchange: window.Blockly.Blocks.ticks.onchange
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.ticks = (block) => {
        const parent = block.getParent();
        const type_list = ["notify", "text_print"];
        return [
          `Bot.getTicks(${type_list.includes(parent?.type)})`,
          window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC
        ];
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.ticks_string = () => [
        "Bot.getTicks(true)",
        window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC
      ];
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tick Analysis/ohlc.js
  var init_ohlc = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tick Analysis/ohlc.js"() {
      init_translations();
      init_config();
      init_utils();
      window.Blockly.Blocks.ohlc = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("Candles List with interval here 2: {{ candle_interval_type }}", {
              candle_interval_type: "%1"
            }),
            args0: [
              {
                type: "field_dropdown",
                name: "CANDLEINTERVAL_LIST",
                options: config().candleIntervals
              }
            ],
            output: "Array",
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("This block gives you a list of candles within a selected time interval."),
            category: window.Blockly.Categories.Tick_Analysis
          };
        },
        meta() {
          return {
            display_name: localize("Get candle list"),
            description: localize("This block gives you a list of candles within a selected time interval.")
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.ohlc = (block) => {
        const selectedGranularity = block.getFieldValue("CANDLEINTERVAL_LIST");
        const granularity = selectedGranularity === "default" ? "undefined" : selectedGranularity;
        const code = `Bot.getOhlc({ granularity: ${granularity} })`;
        return [code, window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tick Analysis/ohlc_values.js
  var init_ohlc_values = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tick Analysis/ohlc_values.js"() {
      init_translations();
      init_config();
      init_utils();
      window.Blockly.Blocks.ohlc_values = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize(
              "Make a List of {{ candle_property }} values in candles list with interval: {{ candle_interval_type }}",
              {
                candle_property: "%1",
                candle_interval_type: "%2"
              }
            ),
            args0: [
              {
                type: "field_dropdown",
                name: "OHLCFIELD_LIST",
                options: config().ohlcFields
              },
              {
                type: "field_dropdown",
                name: "CANDLEINTERVAL_LIST",
                options: config().candleIntervals
              }
            ],
            output: "Array",
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize(
              "Returns a list of specific values from a candle list according to selected time interval"
            ),
            category: window.Blockly.Categories.Tick_Analysis
          };
        },
        meta() {
          return {
            display_name: localize("Create a list of candle values (1)"),
            description: localize(
              "This block gives you the selected candle value from a list of candles within the selected time interval."
            )
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.ohlc_values = (block) => {
        const selectedGranularity = block.getFieldValue("CANDLEINTERVAL_LIST");
        const granularity = selectedGranularity === "default" ? "undefined" : selectedGranularity;
        const ohlcField = block.getFieldValue("OHLCFIELD_LIST");
        const code = `Bot.getOhlc({ field: '${ohlcField}', granularity: ${granularity} })`;
        return [code, window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tick Analysis/readOhlc.js
  var init_readOhlc = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tick Analysis/readOhlc.js"() {
      init_translations();
      init_config();
      init_utils();
      window.Blockly.Blocks.read_ohlc = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("In candles list read {{ candle_property }} # from end {{ input_number }}", {
              candle_property: "%1",
              input_number: "%2"
            }),
            message1: localize("with interval: %1"),
            args0: [
              {
                type: "field_dropdown",
                name: "OHLCFIELD_LIST",
                options: config().ohlcFields
              },
              {
                type: "input_value",
                name: "CANDLEINDEX",
                check: "Number"
              }
            ],
            args1: [
              {
                type: "field_dropdown",
                name: "CANDLEINTERVAL_LIST",
                options: config().candleIntervals
              }
            ],
            output: "Number",
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("Read the selected candle value"),
            category: window.Blockly.Categories.Tick_Analysis
          };
        },
        meta() {
          return {
            display_name: localize("Read candle value (1)"),
            description: localize("This block gives you the specified candle value for a selected time interval.")
          };
        },
        getRequiredValueInputs() {
          return {
            CANDLEINDEX: null
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.read_ohlc = (block) => {
        const selectedGranularity = block.getFieldValue("CANDLEINTERVAL_LIST");
        const granularity = selectedGranularity === "default" ? "undefined" : selectedGranularity;
        const ohlcField = block.getFieldValue("OHLCFIELD_LIST");
        const index = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "CANDLEINDEX",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC
        ) || "1";
        const code = `Bot.getOhlcFromEnd({ field: '${ohlcField}', index: ${index}, granularity: ${granularity} })`;
        return [code, window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tick Analysis/get_ohlc.js
  var init_get_ohlc = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tick Analysis/get_ohlc.js"() {
      init_translations();
      init_config();
      init_utils();
      window.Blockly.Blocks.get_ohlc = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("in candle list get # from end {{ input_number }}", { input_number: "%1" }),
            message1: localize("with interval: {{ candle_interval_type }}", { candle_interval_type: "%1" }),
            args0: [
              {
                type: "input_value",
                name: "CANDLEINDEX",
                check: "Number"
              }
            ],
            args1: [
              {
                type: "field_dropdown",
                name: "CANDLEINTERVAL_LIST",
                options: config().candleIntervals
              }
            ],
            output: "Candle",
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("This block gives you a specific candle from within the selected time interval."),
            category: window.Blockly.Categories.Tick_Analysis
          };
        },
        meta() {
          return {
            display_name: localize("Get candle"),
            description: localize("This block gives you a specific candle from within the selected time interval.")
          };
        },
        getRequiredValueInputs() {
          return {
            CANDLEINDEX: null
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.get_ohlc = (block) => {
        const selectedGranularity = block.getFieldValue("CANDLEINTERVAL_LIST");
        const granularity = selectedGranularity === "default" ? "undefined" : selectedGranularity;
        const index = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "CANDLEINDEX",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC
        ) || "1";
        const code = `Bot.getOhlcFromEnd({ index: ${index}, granularity: ${granularity} })`;
        return [code, window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tick Analysis/check_direction.js
  var init_check_direction = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tick Analysis/check_direction.js"() {
      init_translations();
      init_config();
      init_utils();
      window.Blockly.Blocks.check_direction = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("Direction is {{ direction_type }}", { direction_type: "%1" }),
            args0: [
              {
                type: "field_dropdown",
                name: "CHECK_DIRECTION",
                options: config().lists.CHECK_DIRECTION
              }
            ],
            output: "Boolean",
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("True if the market direction matches the selection"),
            category: window.Blockly.Categories.Tick_Analysis
          };
        },
        meta() {
          return {
            display_name: localize("Market direction"),
            description: localize(
              "This block is used to determine if the market price moves in the selected direction or not. It gives you a value of \u201CTrue\u201D or \u201CFalse\u201D."
            )
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.check_direction = (block) => {
        const checkWith = block.getFieldValue("CHECK_DIRECTION");
        const code = `Bot.checkDirection('${checkWith}')`;
        return [code, window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tick Analysis/tick_analysis.js
  var init_tick_analysis = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tick Analysis/tick_analysis.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.tick_analysis = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: "%1 %2 %3",
            args0: [
              {
                type: "field_label",
                text: localize("The content of this block is called on every tick"),
                class: "blocklyTextTickAnalysis"
              },
              {
                type: "input_dummy"
              },
              {
                type: "input_statement",
                name: "TICKANALYSIS_STACK",
                check: null
              }
            ],
            colour: window.Blockly.Colours.RootBlock.colour,
            colourSecondary: window.Blockly.Colours.RootBlock.colourSecondary,
            colourTertiary: window.Blockly.Colours.RootBlock.colourTertiary,
            tooltip: localize("You can use this block to analyze the ticks, regardless of your trades"),
            category: window.Blockly.Categories.Tick_Analysis
          };
        },
        meta() {
          return {
            display_name: localize("Run on every tick"),
            description: localize(
              "The content of this block is called on every tick. Place this block outside of any root block."
            )
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.tick_analysis = (block) => {
        const stack = window.Blockly.JavaScript.javascriptGenerator.statementToCode(block, "TICKANALYSIS_STACK") || "";
        const code = `
    BinaryBotPrivateTickAnalysisList.push(function BinaryBotPrivateTickAnalysis() {
        ${stack}
    });
`;
        return code;
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tick Analysis/last_digit.js
  var init_last_digit = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tick Analysis/last_digit.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.last_digit = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("Last Digit"),
            output: "Number",
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("Returns the last digit of the latest tick"),
            category: window.Blockly.Categories.Tick_Analysis
          };
        },
        meta() {
          return {
            display_name: localize("Last Digit"),
            description: localize("This block gives you the last digit of the latest tick value.")
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.last_digit = () => [
        "Bot.getLastDigit()",
        window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC
      ];
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tick Analysis/lastDigitList.js
  var init_lastDigitList = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tick Analysis/lastDigitList.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.lastDigitList = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("Last digits list"),
            output: "Array",
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("Returns the list of last digits of 1000 recent tick values"),
            category: window.Blockly.Categories.Tick_Analysis
          };
        },
        meta() {
          return {
            display_name: localize("Last Digits List"),
            description: localize("This block gives you a list of the last digits of the last 1000 tick values.")
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.lastDigitList = () => [
        "Bot.getLastDigitList()",
        window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC
      ];
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tick Analysis/stat.js
  var init_stat = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tick Analysis/stat.js"() {
      init_translations();
      init_utils();
      Blockly.Blocks.stat = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("Current Stat"),
            output: "Number",
            outputShape: Blockly.OUTPUT_SHAPE_ROUND,
            colour: Blockly.Colours.Base.colour,
            colourSecondary: Blockly.Colours.Base.colourSecondary,
            colourTertiary: Blockly.Colours.Base.colourTertiary,
            tooltip: localize("Returns the Current Stat"),
            category: Blockly.Categories.Tick_Analysis
          };
        },
        meta() {
          return {
            display_name: localize("Current Stat"),
            description: localize("This block gives you the Current Stat value.")
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      Blockly.JavaScript.javascriptGenerator.forBlock.stat = () => [
        "Bot.getCurrentStat()",
        Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC
      ];
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tick Analysis/stat_list.js
  var init_stat_list = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tick Analysis/stat_list.js"() {
      init_translations();
      init_utils();
      Blockly.Blocks.stat_list = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("Current stat list"),
            output: "Array",
            outputShape: Blockly.OUTPUT_SHAPE_ROUND,
            colour: Blockly.Colours.Base.colour,
            colourSecondary: Blockly.Colours.Base.colourSecondary,
            colourTertiary: Blockly.Colours.Base.colourTertiary,
            tooltip: localize("Returns the list of last digits of 1000 recent tick values"),
            category: Blockly.Categories.Tick_Analysis
          };
        },
        meta() {
          return {
            display_name: localize("Current stat list"),
            description: localize("This block gives you a list of the cuurent stats of the last 1000 tick values.")
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      Blockly.JavaScript.javascriptGenerator.forBlock.stat_list = () => [
        "Bot.getStatList()",
        Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC
      ];
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tick Analysis/index.js
  var init_Tick_Analysis = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tick Analysis/index.js"() {
      init_tick();
      init_ticks();
      init_ohlc();
      init_ohlc_values();
      init_readOhlc();
      init_get_ohlc();
      init_check_direction();
      init_tick_analysis();
      init_last_digit();
      init_lastDigitList();
      init_stat();
      init_stat_list();
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tools/Candle/is_candle_black.js
  var init_is_candle_black = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tools/Candle/is_candle_black.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.is_candle_black = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("Is candle {{ input_candle }} black?", { input_candle: "%1" }),
            args0: [
              {
                type: "input_value",
                name: "OHLCOBJ",
                check: "Candle"
              }
            ],
            output: "Boolean",
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize('Returns "True" if the given candle is black'),
            category: window.Blockly.Categories.Candle
          };
        },
        meta() {
          return {
            display_name: localize("Is candle black?"),
            description: localize(
              "This block returns \u201CTrue\u201D if the last candle is black. It can be placed anywhere on the canvas except within the Trade parameters root block."
            )
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        getRequiredValueInputs() {
          return {
            OHLCOBJ: null
          };
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.is_candle_black = (block) => {
        const ohlcObj = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "OHLCOBJ",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC
        ) || "{}";
        const code = `Bot.isCandleBlack(${ohlcObj})`;
        return [code, window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tools/Candle/ohlc_values_in_list.js
  var init_ohlc_values_in_list = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tools/Candle/ohlc_values_in_list.js"() {
      init_translations();
      init_config();
      init_utils();
      window.Blockly.Blocks.ohlc_values_in_list = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("Make a list of {{ candle_property }} values from candles list {{ candle_list }}", {
              candle_property: "%1",
              candle_list: "%2"
            }),
            args0: [
              {
                type: "field_dropdown",
                name: "OHLCFIELD_LIST",
                options: config().ohlcFields
              },
              {
                type: "input_value",
                name: "OHLCLIST"
              }
            ],
            output: "Array",
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("Returns a list of specific values from a given candle list"),
            category: window.Blockly.Categories.Candle
          };
        },
        meta() {
          return {
            display_name: localize("Create a list of candle values (2)"),
            description: localize("This block gives you the selected candle value from a list of candles.")
          };
        },
        getRequiredValueInputs() {
          return {
            OHLCLIST: null
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.ohlc_values_in_list = (block) => {
        const ohlcField = block.getFieldValue("OHLCFIELD_LIST") || "open";
        const ohlcList = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "OHLCLIST",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC
        ) || "[]";
        const code = `Bot.candleValues(${ohlcList}, '${ohlcField}')`;
        return [code, window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tools/Candle/read_ohlc_obj.js
  var init_read_ohlc_obj = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tools/Candle/read_ohlc_obj.js"() {
      init_translations();
      init_config();
      init_utils();
      window.Blockly.Blocks.read_ohlc_obj = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("Read {{ candle_property }} value in candle {{ input_candle }}", {
              candle_property: "%1",
              input_candle: "%2"
            }),
            args0: [
              {
                type: "field_dropdown",
                name: "OHLCFIELD_LIST",
                options: config().ohlcFields
              },
              {
                type: "input_value",
                name: "OHLCOBJ"
              }
            ],
            output: "Number",
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("This block gives you the selected candle value."),
            category: window.Blockly.Categories.Candle
          };
        },
        meta() {
          return {
            display_name: localize("Read candle value (2)"),
            description: localize("This block gives you the selected candle value.")
          };
        },
        getRequiredValueInputs() {
          return {
            OHLCOBJ: null
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.read_ohlc_obj = (block) => {
        const ohlcField = block.getFieldValue("OHLCFIELD_LIST");
        const ohlcObj = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "OHLCOBJ",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC
        ) || "{}";
        const code = `Bot.candleField(${ohlcObj}, '${ohlcField}')`;
        return [code, window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tools/Candle/index.js
  var init_Candle = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tools/Candle/index.js"() {
      init_is_candle_black();
      init_ohlc_values_in_list();
      init_read_ohlc_obj();
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tools/Misc/balance.js
  var init_balance = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tools/Misc/balance.js"() {
      init_translations();
      init_config();
      init_utils();
      window.Blockly.Blocks.balance = {
        init() {
          this.jsonInit(this.definition());
          const balanceTypeField = this.getField("BALANCE_TYPE");
          balanceTypeField.setValidator((value) => {
            if (value === "STR") {
              this.setOutput(true, "String");
            } else if (value === "NUM") {
              this.setOutput(true, "Number");
            }
            this.initSvg();
            return void 0;
          });
        },
        definition() {
          return {
            message0: localize("Balance: %1"),
            args0: [
              {
                type: "field_dropdown",
                name: "BALANCE_TYPE",
                options: config().lists.BALANCE_TYPE
              }
            ],
            output: null,
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("This block returns account balance"),
            category: window.Blockly.Categories.Miscellaneous
          };
        },
        meta() {
          return {
            display_name: localize("Account balance"),
            description: localize(
              "This block gives you the balance of your account either as a number or a string of text."
            )
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.balance = (block) => {
        const balanceType = block.getFieldValue("BALANCE_TYPE");
        const code = `Bot.getBalance('${balanceType}')`;
        return [code, window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tools/Misc/barrier_offset.js
  var init_barrier_offset = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tools/Misc/barrier_offset.js"() {
      init_translations();
      init_config();
      init_utils();
      window.Blockly.Blocks.barrier_offset = {
        init() {
          this.jsonInit({
            message0: "%1",
            args0: [
              {
                type: "field_dropdown",
                name: "BARRIEROFFSET_IN",
                options: config().BARRIER_TYPES
              }
            ],
            output: null,
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("Adds a sign to a number to create a barrier offset. (deprecated)"),
            category: window.Blockly.Categories.Miscellaneous
          });
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.barrier_offset = () => {
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tools/Misc/block_holder.js
  var init_block_holder = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tools/Misc/block_holder.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.block_holder = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: "%1 %2 %3",
            args0: [
              {
                type: "field_label",
                text: "Ignore",
                class: "blocklyTextRootBlockHeader"
              },
              {
                type: "input_dummy"
              },
              {
                type: "input_statement",
                name: "USELESS_STACK",
                check: null
              }
            ],
            colour: window.Blockly.Colours.RootBlock.colour,
            colourSecondary: window.Blockly.Colours.RootBlock.colourSecondary,
            colourTertiary: window.Blockly.Colours.RootBlock.colourTertiary,
            tooltip: localize("Put your blocks in here to prevent them from being removed"),
            category: window.Blockly.Categories.Miscellaneous
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        meta() {
          return {
            display_name: localize("Ignore"),
            description: localize(
              "Use this block if you want some instructions to be ignored when your bot runs. Instructions within this block won\u2019t be executed."
            )
          };
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.block_holder = () => "";
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tools/Misc/loader.js
  var init_loader = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tools/Misc/loader.js"() {
      init_translations();
      init_messages();
      init_observer();
      init_utils();
      window.Blockly.Blocks.loader = {
        init() {
          this.blocks_added_by_me = [];
          this.current_url = "";
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("Load block from URL: {{ input_url }}", { input_url: "%1" }),
            args0: [
              {
                type: "field_input",
                name: "URL",
                text: "http://www.example.com/block.xml"
              }
            ],
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("Loads blocks from URL"),
            category: window.Blockly.Categories.Miscellaneous
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        meta() {
          return {
            display_name: localize("Loads from URL"),
            description: localize(
              "This block allows you to load blocks from a URL if you have them stored on a remote server, and they will be loaded only when your bot runs."
            )
          };
        },
        onchange(event) {
          if (!this.workspace || window.Blockly.derivWorkspace.isFlyoutVisible) {
            return;
          }
          if (event.type === window.Blockly.Events.BLOCK_CREATE && event.ids.includes(this.id)) {
            this.current_url = this.getFieldValue("URL");
            const loader_blocks = this.workspace.getAllBlocks().filter((block) => block.type === "loader");
            loader_blocks.forEach((loader_block) => {
              if (loader_block.id !== this.id && loader_block.current_url === this.current_url) {
                this.setDisabled(true);
              }
            });
            if (!this.disabled) {
              this.loadBlocksFromCurrentUrl();
            }
          } else if (event.type === window.Blockly.Events.BLOCK_CHANGE && event.blockId === this.id) {
            if (event.newValue && event.oldValue !== event.newValue) {
              if (event.newValue === this.current_url) {
                this.setDisabled(false);
              } else if (this.isValidUrl(event.newValue) && !this.isKnownUrl(event.newValue)) {
                this.setDisabled(false);
                this.loadBlocksFromCurrentUrl();
              } else {
                this.setDisabled(true);
              }
            }
          }
        },
        loadBlocksFromCurrentUrl() {
          this.current_url = this.getFieldValue("URL");
          runIrreversibleEvents(() => {
            this.blocks_added_by_me.forEach((block) => block.dispose());
          });
          loadBlocksFromRemote(this).then(() => {
            observer.emit("ui.log.success", { log_type: "load_block" /* LOAD_BLOCK */ });
          }).catch((error_msg) => {
            observer.emit("ui.log.error", error_msg);
            this.setDisabled(true);
          });
        },
        isKnownUrl(url) {
          const loader_blocks = this.workspace.getAllBlocks().filter((block) => block.type === "loader");
          return loader_blocks.some((block) => block.id !== this.id && block.current_url === url);
        },
        isValidUrl(url) {
          const url_pattern = /[^/]*\.[a-zA-Z]{3}$/;
          return String(url).match(url_pattern);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.loader = () => {
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tools/Misc/notify.js
  var init_notify = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tools/Misc/notify.js"() {
      init_translations();
      init_config();
      init_utils();
      window.Blockly.Blocks.notify = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize(
              "Notify {{ notification_type }} with sound: {{ notification_sound }} {{ input_message }}",
              {
                notification_type: "%1",
                notification_sound: "%2",
                input_message: "%3"
              }
            ),
            args0: [
              {
                type: "field_dropdown",
                name: "NOTIFICATION_TYPE",
                options: config().lists.NOTIFICATION_TYPE
              },
              {
                type: "field_dropdown",
                name: "NOTIFICATION_SOUND",
                options: config().lists.NOTIFICATION_SOUND
              },
              {
                type: "input_value",
                name: "MESSAGE",
                check: null
              }
            ],
            colour: window.Blockly.Colours.Special3.colour,
            colourSecondary: window.Blockly.Colours.Special3.colourSecondary,
            colourTertiary: window.Blockly.Colours.Special3.colourTertiary,
            previousStatement: null,
            nextStatement: null,
            tooltip: localize("Displays a notification and optionally play selected sound"),
            category: window.Blockly.Categories.Miscellaneous
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        meta() {
          return {
            display_name: localize("Notify"),
            description: localize(
              "This block displays a message. You can specify the color of the message and choose from 6 different sound options."
            )
          };
        },
        getRequiredValueInputs() {
          return {
            MESSAGE: emptyTextValidator
          };
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.notify = (block) => {
        const notificationType = block.getFieldValue("NOTIFICATION_TYPE");
        const sound = block.getFieldValue("NOTIFICATION_SOUND");
        const message_block = block.getInputTargetBlock("MESSAGE");
        let variable_name = null;
        if (message_block.type === "variables_get") {
          const variable_id = message_block.getFieldValue("VAR");
          variable_name = window.Blockly.derivWorkspace.getVariableById(variable_id).name;
        }
        const message = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "MESSAGE",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC
        ) || `"${localize("<empty message>")}"`;
        const code = `Bot.notify({ className: 'journal__text--${notificationType}', message: ${message}, sound: '${sound}', block_id: '${block.id}', variable_name: '${variable_name}' });
`;
        return code;
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tools/Misc/notify_telegram.js
  var init_notify_telegram = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tools/Misc/notify_telegram.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.notify_telegram = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("Notify Telegram %1 Access Token: %2 Chat ID: %3 Message: %4"),
            args0: [
              {
                type: "input_dummy"
              },
              {
                type: "input_value",
                name: "TELEGRAM_ACCESS_TOKEN"
              },
              {
                type: "input_value",
                name: "TELEGRAM_CHAT_ID"
              },
              {
                type: "input_value",
                name: "TELEGRAM_MESSAGE"
              }
            ],
            inputsInline: true,
            colour: window.Blockly.Colours.Special3.colour,
            colourSecondary: window.Blockly.Colours.Special3.colourSecondary,
            colourTertiary: window.Blockly.Colours.Special3.colourTertiary,
            previousStatement: null,
            nextStatement: null,
            tooltip: localize("Sends a message to Telegram"),
            category: window.Blockly.Categories.Miscellaneous
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        meta() {
          return {
            display_name: localize("Notify Telegram"),
            description: localize("This block sends a message to a Telegram channel.")
          };
        },
        getRequiredValueInputs() {
          return {
            TELEGRAM_ACCESS_TOKEN: emptyTextValidator,
            TELEGRAM_CHAT_ID: emptyTextValidator,
            TELEGRAM_MESSAGE: emptyTextValidator
          };
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.notify_telegram = (block) => {
        const access_token = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "TELEGRAM_ACCESS_TOKEN",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC
        ) || "";
        const chat_id = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "TELEGRAM_CHAT_ID",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC
        ) || "";
        const message = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "TELEGRAM_MESSAGE",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC
        ) || "";
        if (!access_token || !chat_id || !message) {
          return "";
        }
        const code = `Bot.notifyTelegram(${access_token}, ${chat_id}, ${message});
`;
        return code;
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tools/Misc/total_profit.js
  var init_total_profit = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tools/Misc/total_profit.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.total_profit = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("Total profit/loss"),
            output: "Number",
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("Returns the total profit/loss"),
            category: window.Blockly.Categories.Miscellaneous
          };
        },
        meta() {
          return {
            display_name: localize("Total profit/loss"),
            description: localize(
              "This block gives you the total profit/loss of your trading strategy since your bot started running. You can reset this by clicking \u201CClear stats\u201D on the Transaction Stats window, or by refreshing this page in your browser."
            )
          };
        },
        onchange(event) {
          if (!this.workspace || window.Blockly.derivWorkspace.isFlyoutVisible || this.workspace.isDragging()) {
            return;
          }
          if (event.type === window.Blockly.Events.BLOCK_DRAG && !event.isStart || event.type === window.Blockly.Events.BLOCK_CREATE && event.ids.includes(this.id)) {
            const input_statement = this.getRootInputTargetBlock();
            if (input_statement === "INITIALIZATION") {
              this.unplug(true);
            }
          }
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.Blocks.total_profit_string = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("Total Profit String"),
            output: "String",
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("Returns the total profit in string format"),
            category: window.Blockly.Categories.Miscellaneous
          };
        },
        meta() {
          return {
            display_name: localize("Total Profit String"),
            description: localize("Total Profit String Description")
          };
        },
        onchange: window.Blockly.Blocks.total_profit.onchange
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.total_profit = () => [
        "Bot.getTotalProfit(false)",
        window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC
      ];
      window.Blockly.JavaScript.javascriptGenerator.forBlock.total_profit_string = () => [
        "Bot.getTotalProfit(true)",
        window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC
      ];
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tools/Misc/total_runs.js
  var init_total_runs = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tools/Misc/total_runs.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.total_runs = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("Number of runs"),
            output: "Number",
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("Returns the number of runs"),
            category: window.Blockly.Categories.Miscellaneous
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        meta() {
          return {
            display_name: localize("Number of runs"),
            description: localize(
              "This block gives you the total number of times your bot has run. You can reset this by clicking \u201CClear stats\u201D on the Transaction Stats window, or by refreshing this page in your browser."
            )
          };
        },
        onchange: window.Blockly.Blocks.total_profit.onchange
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.total_runs = () => [
        "Bot.getTotalRuns()",
        window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC
      ];
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tools/Misc/useless_block.js
  var init_useless_block = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tools/Misc/useless_block.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.useless_block = {
        init() {
          this.jsonInit({
            message0: "%1",
            args0: [
              {
                type: "field_label",
                text: localize("Conversion Helper Block"),
                class: "blocklyTextRootBlockHeader"
              }
            ],
            colour: window.Blockly.Colours.RootBlock.colour,
            colourSecondary: window.Blockly.Colours.RootBlock.colourSecondary,
            colourTertiary: window.Blockly.Colours.RootBlock.colourTertiary,
            tooltip: localize("This block was required to correctly convert your old strategy."),
            category: window.Blockly.Categories.Miscellaneous,
            nextStatement: null,
            previousStatement: null
          });
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.useless_block = () => {
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tools/Misc/console.js
  var init_console = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tools/Misc/console.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.console = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("Console {{ message_type }} value: {{ input_message }}", {
              message_type: "%1",
              input_message: "%2"
            }),
            args0: [
              {
                type: "field_dropdown",
                name: "CONSOLE_TYPE",
                options: [
                  ["Log", "log"],
                  ["Warn", "warn"],
                  ["Error", "error"],
                  ["Table", "table"]
                ]
              },
              {
                type: "input_value",
                name: "MESSAGE",
                check: null
              }
            ],
            colour: window.Blockly.Colours.Special3.colour,
            colourSecondary: window.Blockly.Colours.Special3.colourSecondary,
            colourTertiary: window.Blockly.Colours.Special3.colourTertiary,
            previousStatement: null,
            nextStatement: null,
            tooltip: localize("Display messages in the developer\u2019s console."),
            category: window.Blockly.Categories.Miscellaneous
          };
        },
        meta() {
          return {
            display_name: localize("Console"),
            description: localize(
              "This block displays messages in the developer's console with an input that can be either a string of text, a number, boolean, or an array of data."
            )
          };
        },
        getRequiredValueInputs() {
          return {
            MESSAGE: emptyTextValidator
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.console = (block) => {
        const console_type = block.getFieldValue("CONSOLE_TYPE") || "log";
        const message = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "MESSAGE",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC
        ) || `"${localize("<empty message>")}"`;
        const code = `Bot.console({ type: '${console_type}', message: ${message}});
`;
        return code;
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tools/Misc/index.js
  var init_Misc = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tools/Misc/index.js"() {
      init_balance();
      init_barrier_offset();
      init_block_holder();
      init_loader();
      init_notify();
      init_notify_telegram();
      init_total_profit();
      init_total_runs();
      init_useless_block();
      init_console();
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tools/Time/epoch.js
  var init_epoch = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tools/Time/epoch.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.epoch = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("Seconds Since Epoch"),
            output: "Number",
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("Returns the number of seconds since January 1st, 1970"),
            category: window.Blockly.Categories.Time
          };
        },
        meta() {
          return {
            display_name: localize("Second Since Epoch"),
            description: localize("This block returns the number of seconds since January 1st, 1970.")
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.epoch = () => [
        "Bot.getTime()",
        window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC
      ];
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tools/Time/timeout.js
  var init_timeout = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tools/Time/timeout.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.timeout = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("{{ dummy }} {{ stack_input }} Run after {{ number }} second(s)", {
              dummy: "%1",
              stack_input: "%2",
              number: "%3"
            }),
            args0: [
              {
                type: "input_dummy"
              },
              {
                type: "input_statement",
                name: "TIMEOUTSTACK"
              },
              {
                type: "input_value",
                name: "SECONDS"
              }
            ],
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            previousStatement: null,
            nextStatement: null,
            tooltip: localize("Run the blocks inside after a given number of seconds"),
            category: window.Blockly.Categories.Time
          };
        },
        meta() {
          return {
            display_name: localize("Delayed run"),
            description: localize(
              "This block delays execution for a given number of seconds. You can place any blocks within this block. The execution of other blocks in your strategy will be paused until the instructions in this block are carried out."
            )
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        getRequiredValueInputs() {
          return {
            SECONDS: null
          };
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.timeout = (block) => {
        const stack = window.Blockly.JavaScript.javascriptGenerator.statementToCode(block, "TIMEOUTSTACK");
        const seconds = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "SECONDS",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC
        ) || "1";
        const code = `sleep(${seconds});
${stack}
`;
        return code;
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tools/Time/todatetime.js
  var init_todatetime = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tools/Time/todatetime.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.todatetime = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("To date/time {{ input_timestamp }} {{ dummy }}", {
              input_timestamp: "%1",
              dummy: "%2"
            }),
            args0: [
              {
                type: "input_value",
                name: "TIMESTAMP",
                check: "Number"
              },
              {
                // Extra dummy for spacing.
                type: "input_dummy"
              }
            ],
            output: "String",
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize(
              "This block converts the number of seconds since the Unix Epoch (1 January 1970) into a string of text representing the date and time."
            ),
            category: window.Blockly.Categories.Time
          };
        },
        meta() {
          return {
            display_name: localize("Convert to date/time"),
            description: localize(
              "This block converts the number of seconds since the Unix Epoch (1 January 1970) into a string of text representing the date and time."
            )
          };
        },
        getRequiredValueInputs() {
          return {
            TIMESTAMP: null
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.todatetime = (block) => {
        const timestamp = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "TIMESTAMP",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC
        );
        const invalid_timestamp = `${localize("Invalid timestamp")}:`;
        const function_name = window.Blockly.JavaScript.javascriptGenerator.provideFunction_("timestampToDateString", [
          // eslint-disable-next-line no-underscore-dangle
          `function ${window.Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(timestamp) {
            var datetime = new Date(timestamp * 1000);

            if (!datetime.getTime()) {
                return "${invalid_timestamp} " + timestamp;
            }

            var getTwoDigitValue = function(input) {
                return input < 10 ? '0' + input : input;
            }

            var year    = datetime.getFullYear();
            var month   = getTwoDigitValue(datetime.getMonth() + 1);
            var day     = getTwoDigitValue(datetime.getDate());
            var hours   = getTwoDigitValue(datetime.getHours());
            var minutes = getTwoDigitValue(datetime.getMinutes());
            var seconds = getTwoDigitValue(datetime.getSeconds());

            var formatGmtOffset = function() {
                var gmt_offset_raw = datetime.getTimezoneOffset();
                var sign           = gmt_offset_raw > 0 ? '-' : '+';
                var gmt_offset     = Math.abs(gmt_offset_raw);
                var hour           = Math.floor(gmt_offset / 60);
                var minute         = gmt_offset - hour * 60;

                return 'GMT' + sign + getTwoDigitValue(hour) + getTwoDigitValue(minute);
            }

            var date_string = year + '-' + month + '-' + day;
            var time_string = hours + ':' + minutes + ':' + seconds;

            return date_string + ' ' + time_string + ' ' + formatGmtOffset();
        }`
        ]);
        const code = `${function_name}(${timestamp})`;
        return [code, window.Blockly.JavaScript.javascriptGenerator.ORDER_FUNCTION_CALL];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tools/Time/totimestamp.js
  var init_totimestamp = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tools/Time/totimestamp.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.totimestamp = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("To timestamp {{ input_datetime }} {{ dummy }}", { input_datetime: "%1", dummy: "%2" }),
            args0: [
              {
                type: "input_value",
                name: "DATETIME"
              },
              {
                // Extra dummy for spacing.
                type: "input_dummy"
              }
            ],
            output: "Number",
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize(
              "Converts a string representing a date/time string into seconds since Epoch. Example: 2019-01-01 21:03:45 GMT+0800 will be converted to 1546347825. Time and time zone offset are optional."
            ),
            category: window.Blockly.Categories.Time
          };
        },
        meta() {
          return {
            display_name: localize("Convert to timestamp"),
            description: localize(
              "This block converts a string of text that represents the date and time into seconds since the Unix Epoch (1 January 1970). The time and time zone offset are optional. Example: 2019-01-01 21:03:45 GMT+0800 will be converted to 1546347825."
            )
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        getRequiredValueInputs() {
          return {
            DATETIME: emptyTextValidator
          };
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.totimestamp = (block) => {
        const datetime_string = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "DATETIME",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC
        );
        const code = `Bot.dateTimeStringToTimestamp(${datetime_string})`;
        return [code, window.Blockly.JavaScript.javascriptGenerator.ORDER_FUNCTION_CALL];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tools/Time/tickdelay.js
  var init_tickdelay = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tools/Time/tickdelay.js"() {
      init_translations();
      init_dbot_store_shim();
      init_utils();
      Blockly.Blocks.tick_delay = {
        init() {
          this.jsonInit(this.definition());
          const { client } = DBotStore.instance;
          if (client && client.is_logged_in) {
            this.workspace_to_code = Blockly.JavaScript.javascriptGenerator.workspaceToCode(Blockly.derivWorkspace);
          }
        },
        definition() {
          return {
            message0: localize("{{ stack_input }} Run after {{ number }} tick(s)", {
              stack_input: "%1",
              number: "%2"
            }),
            args0: [
              {
                type: "input_statement",
                name: "TICKDELAYSTACK"
              },
              {
                type: "input_value",
                name: "TICKDELAYVALUE"
              }
            ],
            colour: Blockly.Colours.Base.colour,
            colourSecondary: Blockly.Colours.Base.colourSecondary,
            colourTertiary: Blockly.Colours.Base.colourTertiary,
            previousStatement: null,
            nextStatement: null,
            tooltip: localize("Run the blocks inside after a given number of ticks"),
            category: Blockly.Categories.Time
          };
        },
        meta() {
          return {
            display_name: localize("Tick Delayed run"),
            description: localize(
              "This block delays execution for a given number of ticks. You can place any blocks within this block. The execution of other blocks in your strategy will be paused until the instructions in this block are carried out."
            )
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        getRequiredValueInputs() {
          return {
            TICKDELAYVALUE: (input_value) => {
              const evaluated_result = evaluateExpression(input_value);
              if (evaluated_result === "invalid_input") {
                if (this.workspace_to_code && this.workspace_to_code.includes(input_value)) {
                  return false;
                }
                this.error_message = localize("Invalid Input {{ input_value }}.", { input_value });
                return true;
              }
              if (evaluated_result < 0) {
                this.error_message = localize("Values cannot be negative. Provided value: {{ input_value }}.", {
                  input_value
                });
                return true;
              }
            }
          };
        }
      };
      Blockly.JavaScript.javascriptGenerator.forBlock.tick_delay = (block) => {
        const stack = Blockly.JavaScript.javascriptGenerator.statementToCode(block, "TICKDELAYSTACK");
        const ticks_value = Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "TICKDELAYVALUE",
          Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC
        ) || "1";
        const code = `Bot.getDelayTickValue(${ticks_value})
${stack}
`;
        return code;
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tools/Time/index.js
  var init_Time = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Tools/Time/index.js"() {
      init_epoch();
      init_timeout();
      init_todatetime();
      init_totimestamp();
      init_tickdelay();
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/hooks/colours.js
  var init_colours = __esm({
    "bot-app/src/external/bot-skeleton/scratch/hooks/colours.js"() {
    }
  });

  // bot-app/src/external/bot-skeleton/utils/contract.js
  var init_contract = __esm({
    "bot-app/src/external/bot-skeleton/utils/contract.js"() {
      init_translations();
      init_config();
    }
  });

  // bot-app/src/external/bot-skeleton/utils/date-time-helper.js
  var init_date_time_helper = __esm({
    "bot-app/src/external/bot-skeleton/utils/date-time-helper.js"() {
      init_translations();
    }
  });

  // bot-app/src/external/bot-skeleton/utils/error.js
  var init_error = __esm({
    "bot-app/src/external/bot-skeleton/utils/error.js"() {
      init_observer();
    }
  });

  // bot-app/src/external/bot-skeleton/utils/error-handling.js
  var onKeyDownHandleError, removeErrorHandlingEventListener, initErrorHandlingListener, handleError;
  var init_error_handling = __esm({
    "bot-app/src/external/bot-skeleton/utils/error-handling.js"() {
      init_error_config();
      init_observer();
      onKeyDownHandleError = (event) => {
        if (window.Blockly.getSelected() !== null && window.Blockly.getSelected().parentBlock_ === null) {
          if (event.key === "Delete" || event.key === "Backspace") {
            handleError("BLOCK_DELETION", observer);
          }
        }
      };
      removeErrorHandlingEventListener = (type = "keydown") => {
        window.removeEventListener(type, onKeyDownHandleError);
      };
      initErrorHandlingListener = (type = "keydown") => {
        window.addEventListener(type, onKeyDownHandleError);
      };
      handleError = (errorCode, observer2) => {
        switch (errorCode) {
          case "BLOCK_DELETION":
            if (error_message_map?.()?.[window.Blockly.getSelected().type]) {
              observer2.emit("ui.log.error", error_message_map?.()?.[window.Blockly.getSelected().type]?.default);
            }
            break;
          default:
            break;
        }
      };
    }
  });

  // bot-app/src/external/bot-skeleton/utils/html-helper.js
  var init_html_helper = __esm({
    "bot-app/src/external/bot-skeleton/utils/html-helper.js"() {
    }
  });

  // bot-app/src/external/bot-skeleton/utils/strategy-helper.js
  var init_strategy_helper = __esm({
    "bot-app/src/external/bot-skeleton/utils/strategy-helper.js"() {
    }
  });

  // bot-app/src/external/bot-skeleton/utils/index.js
  var init_utils2 = __esm({
    "bot-app/src/external/bot-skeleton/utils/index.js"() {
      init_colours();
      init_contract();
      init_date_time_helper();
      init_error();
      init_error_handling();
      init_html_helper();
      init_local_storage();
      init_observer();
      init_strategy_helper();
      init_workspace();
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Trade Definition/trade_definition.js
  var init_trade_definition = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Trade Definition/trade_definition.js"() {
      init_translations();
      init_config();
      init_utils2();
      init_dbot_store_shim();
      init_utils();
      init_block_images();
      window.Blockly.Blocks.trade_definition = {
        init() {
          this.jsonInit(this.definition());
          this.setDeletable(false);
          this.isInit = false;
        },
        definition() {
          return {
            message0: "%1 %2 %3",
            message1: "%1",
            message2: "%1 %2 %3",
            message3: "%1",
            message4: "%1 %2 %3",
            message5: "%1",
            message6: "%1",
            args0: [
              {
                type: "field_image",
                src: defineContract,
                width: 25,
                height: 25,
                alt: "T"
              },
              {
                type: "field_label",
                text: localize("1. Trade parameters"),
                class: "blocklyTextRootBlockHeader"
              },
              {
                type: "input_dummy"
              }
            ],
            args1: [
              {
                type: "input_statement",
                name: "TRADE_OPTIONS"
              }
            ],
            args2: [
              {
                type: "field_image",
                src: " ",
                // this is here to add extra padding
                width: 4,
                height: 25
              },
              {
                type: "field_label",
                text: localize("Run once at start:"),
                class: "blocklyTextRootBlockHeader"
              },
              {
                type: "input_dummy"
              }
            ],
            args3: [
              {
                type: "input_statement",
                name: "INITIALIZATION",
                check: null
              }
            ],
            args4: [
              {
                type: "field_image",
                src: " ",
                // this is here to add extra padding
                width: 4,
                height: 25
              },
              {
                type: "field_label",
                text: localize("Trade options:"),
                class: "blocklyTextRootBlockHeader"
              },
              {
                type: "input_dummy"
              }
            ],
            args5: [
              {
                type: "input_statement",
                name: "SUBMARKET"
              }
            ],
            args6: [
              {
                type: "field_image",
                src: " ",
                // this is here to add extra padding
                width: 380,
                height: 10
              }
            ],
            colour: window.Blockly.Colours.RootBlock.colour,
            colourSecondary: window.Blockly.Colours.RootBlock.colourSecondary,
            colourTertiary: window.Blockly.Colours.RootBlock.colourTertiary,
            tooltip: localize("Here is where you define the parameters of your contract."),
            category: window.Blockly.Categories.Trade_Definition
          };
        },
        meta() {
          return {
            display_name: localize("Trade parameters"),
            description: localize("Here is where you define the parameters of your contract."),
            key_words: localize("market, trade type, contract type")
          };
        },
        customContextMenu(menu) {
          const menu_items = [localize("Enable Block"), localize("Disable Block")];
          excludeOptionFromContextMenu(menu, menu_items);
          modifyContextMenu(menu);
        },
        onchange(event) {
          if (event.type === window.Blockly.Events.SELECTED && !this.isInit) {
            this.isInit = true;
            initErrorHandlingListener("keydown");
          } else if (window.Blockly.getSelected() === null && this.isInit) {
            this.isInit = false;
            removeErrorHandlingEventListener("keydown");
          }
          if (!this.workspace || this.workspace.isDragging() || window.Blockly.derivWorkspace.isFlyoutVisible) {
            return;
          }
          if (event.type === window.Blockly.Events.BLOCK_CHANGE || event.type === window.Blockly.Events.BLOCK_DRAG && !event.isStart) {
            const blocks_in_trade_options = this.getBlocksInStatement("TRADE_OPTIONS");
            if (blocks_in_trade_options.length > 0) {
              blocks_in_trade_options.forEach((block) => {
                if (!/^trade_definition_.+$/.test(block.type)) {
                  runIrreversibleEvents(() => {
                    block.unplug(true);
                  });
                }
              });
            } else {
              runIrreversibleEvents(() => {
                this.dispose();
              });
            }
          }
          if (this.isCollapsed()) {
            appendCollapsedMainBlocksFields(this);
          }
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.trade_definition = (block) => {
        const { client } = DBotStore.instance;
        if (!client || !client.is_logged_in) {
          throw new Error("Please login");
        }
        const { loginid } = client;
        const account = loginid;
        const market_block = block.getChildByType("trade_definition_market");
        const trade_type_block = block.getChildByType("trade_definition_tradetype");
        const contract_type_block = block.getChildByType("trade_definition_contracttype");
        const candle_interval_block = block.getChildByType("trade_definition_candleinterval");
        const restart_on_error_block = block.getChildByType("trade_definition_restartonerror");
        const restart_on_buy_sell_block = block.getChildByType("trade_definition_restartbuysell");
        const symbol = market_block.getFieldValue("SYMBOL_LIST");
        const trade_type = trade_type_block.getFieldValue("TRADETYPE_LIST");
        const contract_type = contract_type_block.getFieldValue("TYPE_LIST");
        const candle_interval = candle_interval_block.getFieldValue("CANDLEINTERVAL_LIST");
        const should_restart_on_error = restart_on_error_block.getFieldValue("RESTARTONERROR") !== "FALSE";
        const should_restart_on_buy_sell = restart_on_buy_sell_block.getFieldValue("TIME_MACHINE_ENABLED") !== "FALSE";
        const { opposites } = config();
        const contract_type_list = contract_type === "both" ? opposites[trade_type.toUpperCase()].map((opposite) => Object.keys(opposite)[0]) : [contract_type];
        const initialization = window.Blockly.JavaScript.javascriptGenerator.statementToCode(block, "INITIALIZATION");
        const trade_options_statement = window.Blockly.JavaScript.javascriptGenerator.statementToCode(block, "SUBMARKET");
        const code = `  
    BinaryBotPrivateInit = function BinaryBotPrivateInit() {
        Bot.init('${account}', {
          symbol              : '${symbol}',
          contractTypes       : ${JSON.stringify(contract_type_list)},
          candleInterval      : '${candle_interval || "FALSE"}',
          shouldRestartOnError: ${should_restart_on_error},
          timeMachineEnabled  : ${should_restart_on_buy_sell},
        });
        ${initialization.trim()}
    };
      BinaryBotPrivateStart = function BinaryBotPrivateStart() {
        BinaryBotPrivateHasCalledTradeOptions = false;
        Bot.highlightBlock('${block.id}');
        ${trade_options_statement.trim()}
      };
`;
        return code;
      };
    }
  });

  // bot-shims/common-data.js
  var MARKET_OPTIONS, SUBMARKET_OPTIONS, SYMBOL_OPTIONS, TRADE_TYPES, TRADE_TYPE_CATEGORIES, DURATIONS, TRADING_TIMES, getTradingTimes, getAccountLimits;
  var init_common_data = __esm({
    "bot-shims/common-data.js"() {
      MARKET_OPTIONS = [];
      SUBMARKET_OPTIONS = [];
      SYMBOL_OPTIONS = [];
      TRADE_TYPES = ["CALL", "PUT", "DIGIT", "TICK", "ASIAN", "RANGE", "UPDOWN", "MULTUP", "MULTDOWN"];
      TRADE_TYPE_CATEGORIES = { callput: ["CALL", "PUT"], digits: ["DIGIT"], asians: ["ASIAN"] };
      DURATIONS = [
        { unit: "t", min: 1, max: 10 },
        { unit: "m", min: 1, max: 525600 },
        { unit: "h", min: 1, max: 8760 },
        { unit: "d", min: 1, max: 365 }
      ];
      TRADING_TIMES = {};
      getTradingTimes = (date, market) => Promise.resolve({});
      getAccountLimits = () => Promise.resolve({ max_stake: 1e4, max_payout: 1e5 });
    }
  });

  // bot-app/src/external/bot-skeleton/services/api/account-limits.js
  var AccountLimits;
  var init_account_limits = __esm({
    "bot-app/src/external/bot-skeleton/services/api/account-limits.js"() {
      init_common_data();
      AccountLimits = class {
        constructor(store) {
          this.ws = store.ws;
        }
        // eslint-disable-next-line default-param-last
        getStakePayoutLimits(currency = "USD", selected_market) {
          return getAccountLimits(currency, selected_market);
        }
      };
    }
  });

  // bot-shims/active-symbol-categorization.js
  var activeSymbolCategorizationService;
  var init_active_symbol_categorization = __esm({
    "bot-shims/active-symbol-categorization.js"() {
      activeSymbolCategorizationService = {
        categorize: () => Promise.resolve([]),
        getCategories: () => []
      };
    }
  });

  // bot-app/src/external/bot-skeleton/utils/pending-promise.js
  function PendingPromise() {
    let resolve, reject;
    const promise = new Promise((_resolve, _reject) => {
      resolve = _resolve;
      reject = _reject;
    });
    promise.isPending = true;
    promise.resolve = (res) => {
      promise.isPending = false;
      resolve(res);
    };
    promise.reject = (error) => {
      promise.isPending = false;
      reject(error);
    };
    return promise;
  }
  var init_pending_promise = __esm({
    "bot-app/src/external/bot-skeleton/utils/pending-promise.js"() {
    }
  });

  // bot-shims/api-base-bridge.js
  var ApiBaseBridge, api_base;
  var init_api_base_bridge = __esm({
    "bot-shims/api-base-bridge.js"() {
      ApiBaseBridge = class {
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
      api_base = new ApiBaseBridge();
    }
  });

  // bot-app/src/external/bot-skeleton/services/api/active-symbols.js
  var ActiveSymbols;
  var init_active_symbols = __esm({
    "bot-app/src/external/bot-skeleton/services/api/active-symbols.js"() {
      init_common_data();
      init_active_symbol_categorization();
      init_config();
      init_pending_promise();
      init_api_base_bridge();
      ActiveSymbols = class {
        constructor(trading_times) {
          this.active_symbols = [];
          this.disabled_symbols = config().DISABLED_SYMBOLS;
          this.disabled_submarkets = config().DISABLED_SUBMARKETS;
          this.init_promise = new PendingPromise();
          this.is_initialised = false;
          this.has_initialization_error = false;
          this.processed_symbols = {};
          this.trading_times = trading_times;
        }
        clearCache() {
          this.active_symbols = [];
          this.processed_symbols = {};
          this.is_initialised = false;
          this.has_initialization_error = false;
          this.init_promise = new PendingPromise();
        }
        /**
         * Retrieves active symbols from the API with retry logic.
         *
         * @param {boolean} is_forced_update - Force refresh even if already initialized
         * @returns {Promise<Array>} Array of active symbol objects
         *
         * @important Callers MUST check `this.has_initialization_error` after calling this method.
         * If true, the returned array may be empty due to API failure, and UI should display
         * an appropriate error message to the user instead of showing empty dropdowns.
         *
         * @example
         * await activeSymbols.retrieveActiveSymbols();
         * if (activeSymbols.has_initialization_error) {
         *   // Show error message to user
         *   showError('Unable to load trading symbols. Please try again.');
         * }
         */
        async retrieveActiveSymbols(is_forced_update = false) {
          await this.trading_times.initialise();
          if (!is_forced_update && this.is_initialised) {
            await this.init_promise;
            return this.active_symbols;
          }
          if (api_base.has_active_symbols) {
            this.active_symbols = api_base?.active_symbols ?? [];
          } else {
            if (!api_base.active_symbols_promise) {
              api_base.active_symbols_promise = api_base.getActiveSymbols();
            }
            const symbols = await api_base.active_symbols_promise;
            this.active_symbols = symbols ?? api_base?.active_symbols ?? [];
          }
          if (!this.active_symbols || this.active_symbols.length === 0) {
            console.warn("No symbols found, attempting fresh fetch...");
            try {
              const symbols = await api_base.getActiveSymbols();
              this.active_symbols = symbols ?? [];
              if (!this.active_symbols || this.active_symbols.length === 0) {
                this.has_initialization_error = true;
                console.error("Failed to fetch active symbols: No symbols returned after retry");
              }
            } catch (error) {
              console.error("Failed to fetch active symbols:", error);
              this.active_symbols = [];
              this.has_initialization_error = true;
            }
          }
          this.is_initialised = true;
          this.processed_symbols = this.processActiveSymbols();
          this.trading_times.onMarketOpenCloseChanged = (changes) => {
            Object.keys(changes).forEach((symbol_name) => {
              const symbol_obj = this.active_symbols[symbol_name];
              if (symbol_obj) {
                symbol_obj.exchange_is_open = changes[symbol_name];
              }
            });
            this.changes = changes;
            this.processActiveSymbols();
          };
          this.init_promise.resolve();
          return this.active_symbols;
        }
        processActiveSymbols() {
          if (this.active_symbols.length === 0) {
            return {};
          }
          return activeSymbolCategorizationService.processActiveSymbols(
            this.active_symbols,
            config().DISABLED_SYMBOLS,
            config().DISABLED_SUBMARKETS
          );
        }
        /**
         * Retrieves all symbols and returns an array of symbol objects consisting of symbol and their linked market + submarket.
         * @returns {Array} Symbols and their submarkets + markets.
         */
        getAllSymbols(should_be_open = false) {
          const all_symbols = [];
          Object.keys(this.processed_symbols).forEach((market_name) => {
            if (should_be_open && this.isMarketClosed(market_name)) {
              return;
            }
            const market = this.processed_symbols[market_name];
            const { submarkets } = market;
            Object.keys(submarkets).forEach((submarket_name) => {
              const submarket = submarkets[submarket_name];
              const { symbols } = submarket;
              Object.keys(symbols).forEach((symbol_name) => {
                const symbol = symbols[symbol_name];
                all_symbols.push({
                  market: market_name,
                  market_display: market.display_name,
                  submarket: submarket_name,
                  submarket_display: submarket.display_name,
                  symbol: symbol_name,
                  symbol_display: symbol.display_name
                });
              });
            });
          });
          this.getSymbolsForBot();
          return all_symbols;
        }
        /**
         *
         * @returns {Array} Symbols and their submarkets + markets for deriv-bot
         */
        getSymbolsForBot() {
          const { DISABLED } = config().QUICK_STRATEGY;
          return activeSymbolCategorizationService.getSymbolsForBot(
            this.processed_symbols,
            DISABLED.SYMBOLS,
            DISABLED.SUBMARKETS,
            this.isMarketClosed.bind(this)
          );
        }
        getMarketDropdownOptions() {
          const market_options = activeSymbolCategorizationService.getMarketDropdownOptions(
            this.processed_symbols,
            this.isMarketClosed.bind(this)
          );
          if (market_options.length === 0) {
            return MARKET_OPTIONS;
          }
          const has_closed_markets = market_options.some((market_option) => this.isMarketClosed(market_option[1]));
          if (has_closed_markets) {
            const sorted_options = activeSymbolCategorizationService.sortDropdownOptions(
              market_options,
              this.isMarketClosed.bind(this)
            );
            if (this.isMarketClosed("forex")) {
              return sorted_options.sort((a) => a[1] === "synthetic_index" ? -1 : 1);
            }
            return sorted_options;
          }
          return market_options;
        }
        getSubmarketDropdownOptions(market) {
          const submarket_options = activeSymbolCategorizationService.getSubmarketDropdownOptions(
            this.processed_symbols,
            market,
            this.isSubmarketClosed.bind(this)
          );
          if (submarket_options.length === 0) {
            return SUBMARKET_OPTIONS[market] || [["Default", "default"]];
          }
          return activeSymbolCategorizationService.sortDropdownOptions(
            submarket_options,
            this.isSubmarketClosed.bind(this)
          );
        }
        getSymbolDropdownOptions(submarket) {
          const symbol_options = activeSymbolCategorizationService.getSymbolDropdownOptions(
            this.processed_symbols,
            submarket,
            this.isSymbolClosed.bind(this)
          );
          if (symbol_options.length === 0) {
            return SYMBOL_OPTIONS[submarket] || [];
          }
          return activeSymbolCategorizationService.sortDropdownOptions(symbol_options, this.isSymbolClosed.bind(this));
        }
        isMarketClosed(market_name) {
          const market = this.processed_symbols[market_name];
          if (!market) {
            return true;
          }
          return Object.keys(market.submarkets).every((submarket_name) => this.isSubmarketClosed(submarket_name));
        }
        isSubmarketClosed(submarket_name) {
          const market_name = Object.keys(this.processed_symbols).find((name) => {
            const market2 = this.processed_symbols[name];
            return Object.keys(market2.submarkets).includes(submarket_name);
          });
          if (!market_name) {
            return true;
          }
          const market = this.processed_symbols[market_name];
          const submarket = market.submarkets[submarket_name];
          if (!submarket) {
            return true;
          }
          const { symbols } = submarket;
          return Object.keys(symbols).every((symbol_name) => this.isSymbolClosed(symbol_name));
        }
        isSymbolClosed(symbol_name) {
          return this.active_symbols.some((active_symbol) => {
            const symbol_code = active_symbol.underlying_symbol || active_symbol.symbol;
            return symbol_code === symbol_name && (!active_symbol.exchange_is_open || active_symbol.is_trading_suspended);
          });
        }
        // Removed sortDropdownOptions - now using centralized service
      };
    }
  });

  // bot-app/src/external/bot-skeleton/services/api/contracts-for.js
  var ContractsFor;
  var init_contracts_for = __esm({
    "bot-app/src/external/bot-skeleton/services/api/contracts-for.js"() {
      init_common_data();
      init_config();
      init_pending_promise();
      init_api_base_bridge();
      ContractsFor = class {
        constructor({ ws, server_time }) {
          __publicField(this, "getAccumulationRange", async () => {
            return [0.01, 0.02, 0.03, 0.04, 0.05];
          });
          __publicField(this, "getHiddenCategories", (trade_types) => {
            let hidden_categories = 0;
            for (let j = 0; j < trade_types.length; j++) {
              const trade_type = trade_types[j];
              const has_barrier = config().QUICK_STRATEGY.DISABLED.BARRIER_TRADE_TYPES.includes(trade_type.value);
              const has_prediction = config().QUICK_STRATEGY.DISABLED.PREDICTION_TRADE_TYPES.includes(trade_type.value);
              if (has_barrier || has_prediction) {
                hidden_categories++;
              }
            }
            return hidden_categories;
          });
          __publicField(this, "getTradeTypeOptions", (trade_types, trade_type_category) => {
            const trade_type_options = [];
            trade_types.forEach((trade_type) => {
              const has_barrier = config().QUICK_STRATEGY.DISABLED.BARRIER_TRADE_TYPES.includes(trade_type.value);
              const has_prediction = config().QUICK_STRATEGY.DISABLED.PREDICTION_TRADE_TYPES.includes(trade_type.value);
              const is_muliplier = ["multiplier"].includes(trade_type.value);
              if (!has_barrier && !has_prediction && !is_muliplier) {
                trade_type_options.push({
                  text: trade_type.name,
                  value: trade_type.value,
                  group: trade_type_category[0],
                  icon: trade_type.icon
                });
              }
            });
            return trade_type_options;
          });
          __publicField(this, "getContractTypes", (trade_type) => {
            const { opposites } = config();
            let trade_type_value = trade_type;
            if (trade_type_value === "ACCU") {
              trade_type_value = "accumulator";
            }
            const categories = opposites[trade_type_value.toUpperCase()].map((opposite) => ({
              value: Object.keys(opposite)[0],
              text: Object.values(opposite)[0]
            }));
            return categories;
          });
          this.cache_age_in_min = 10;
          this.contracts_for = {};
          this.ws = ws;
          this.server_time = server_time;
          this.disabled_options = [
            {
              submarket: "forex_basket",
              trade_type: "higherlower"
            },
            {
              submarket: "minor_pairs",
              trade_type: "higherlower"
            },
            {
              submarket: "metals",
              trade_type: "callputequal"
            },
            {
              market: "indices",
              trade_type: "callputequal"
            },
            {
              symbol: "OTC_AS51",
              trade_type_category: "inout"
            },
            { trade_type_category: "lookback" },
            { trade_type_category: "callputspread" }
          ];
          this.retrieving_contracts_for = {};
        }
        async getBarriers(symbol, trade_type, duration, barrier_types) {
          const barriers = { values: [] };
          if (!config().BARRIER_TRADE_TYPES.includes(trade_type)) {
            return barriers;
          }
          const barrier_props = ["high_barrier", "low_barrier"];
          const contracts_for_category = await this.getContractsByTradeType(symbol, trade_type);
          const durations = await this.getDurations(symbol, trade_type, false);
          const offset_regexp = /^[-|+]([0-9]+.[0-9]+)$/;
          const isOffset = (input) => input && offset_regexp.test(input.toString());
          let has_absolute_default_value = true;
          if (contracts_for_category.length > 0) {
            barrier_types.forEach((barrier_type, index) => {
              const has_selected_offset_type = ["+", "-"].includes(barrier_type);
              const real_trade_type = this.getContractCategoryByTradeType(trade_type);
              let contract = contracts_for_category.find((c) => {
                const { BARRIER_CATEGORIES } = config();
                const barrier_category = Object.keys(BARRIER_CATEGORIES).find(
                  (b) => BARRIER_CATEGORIES[b].includes(trade_type)
                );
                const has_matching_category = c.contract_category === real_trade_type;
                const has_matching_duration = durations.findIndex((d) => d.unit === duration) !== -1;
                const has_matching_barrier_category = !c.barrier_category || c.barrier_category === barrier_category;
                const has_matching_barrier_type = (
                  // Match offset type barriers.
                  has_selected_offset_type && isOffset(c.barrier || c[barrier_props[index]]) || // Match absolute type barriers.
                  !has_selected_offset_type && !isOffset(c.barrier || c[barrier_props[index]])
                );
                return has_matching_category && has_matching_duration && has_matching_barrier_category && has_matching_barrier_type;
              });
              if (!contract) {
                contract = contracts_for_category.filter((c) => c.barrier || c.high_barrier).sort((a, b) => {
                  const c = a.barrier || a.high_barrier;
                  const d = b.barrier || b.high_barrier;
                  return parseFloat(c) - parseFloat(d);
                }).shift();
                if (contract && !has_selected_offset_type) {
                  has_absolute_default_value = false;
                }
              }
              if (contract) {
                const barrier_prop_name = contract.barriers === 1 ? "barrier" : barrier_props[index];
                if (contract[barrier_prop_name]) {
                  const barrier_match = `${contract[barrier_prop_name]}`.match(offset_regexp);
                  barriers.values[index] = barrier_match ? barrier_match[1] : contract[barrier_prop_name];
                }
                Object.assign(barriers, {
                  allow_both_types: ["intraday", "tick"].includes(contract.expiry_type) && isOffset(contract[barrier_prop_name]),
                  allow_absolute_type: barrier_type === "absolute" && !isOffset(contract[barrier_prop_name])
                });
                if (contract.barriers === 1) {
                  barrier_types.splice(index + 1, 1);
                }
              }
            });
            if (!has_absolute_default_value) {
              barriers.values = barriers.values.map(() => false);
            } else if (barriers.values.length === 2 && barrier_types.every((barrier_type) => barrier_type === barrier_types[0]) && barriers.values.every((barrier) => barrier === barriers.values[0])) {
              barriers.values[1] = (barriers.values[0] * 0.95).toFixed(1);
            }
          }
          return barriers;
        }
        // eslint-disable-next-line class-methods-use-this
        getContractCategoryByTradeType(trade_type) {
          const { TRADE_TYPE_TO_CONTRACT_CATEGORY_MAPPING } = config();
          return Object.keys(TRADE_TYPE_TO_CONTRACT_CATEGORY_MAPPING).find(
            (category) => TRADE_TYPE_TO_CONTRACT_CATEGORY_MAPPING[category].includes(trade_type)
          ) || trade_type;
        }
        // eslint-disable-next-line class-methods-use-this
        getTradeTypeCategoryByTradeType(trade_type) {
          const { TRADE_TYPE_CATEGORIES: TRADE_TYPE_CATEGORIES2 } = config();
          const trade_type_category = Object.keys(TRADE_TYPE_CATEGORIES2).find(
            (t) => TRADE_TYPE_CATEGORIES2[t].includes(trade_type)
          );
          return trade_type_category || trade_type;
        }
        getTradeTypeCategoryNameByTradeType(trade_type) {
          const { TRADE_TYPE_CATEGORY_NAMES } = config();
          const trade_type_category = this.getTradeTypeCategoryByTradeType(trade_type);
          return TRADE_TYPE_CATEGORY_NAMES[trade_type_category];
        }
        // eslint-disable-next-line class-methods-use-this
        getBarrierCategoryByTradeType(trade_type) {
          const { BARRIER_CATEGORIES } = config();
          return Object.keys(BARRIER_CATEGORIES).find(
            (barrier_category) => BARRIER_CATEGORIES[barrier_category].includes(trade_type)
          );
        }
        async getContractsByTradeType(symbol, trade_type) {
          const contracts = await this.getContractsFor(symbol);
          const contract_category = this.getContractCategoryByTradeType(trade_type);
          return contracts.filter((contract) => {
            const has_matching_category = contract.contract_category === contract_category;
            return has_matching_category;
          });
        }
        async getContractsFor(symbol) {
          if (!symbol || symbol === "na" || symbol === "DEFAULT") {
            console.warn("Invalid symbol provided to getContractsFor:", symbol);
            return [];
          }
          if (!api_base.api) {
            return [];
          }
          const getContractsForFromApi = async () => {
            if (this.retrieving_contracts_for[symbol]) {
              await this.retrieving_contracts_for[symbol];
              return this.contracts_for[symbol]?.contracts || [];
            }
            this.retrieving_contracts_for[symbol] = new PendingPromise();
            try {
              const response = await api_base.api.send({ contracts_for: symbol });
              if (!response || response.error) {
                console.warn("contracts_for API error for symbol:", symbol, response?.error);
                if (this.retrieving_contracts_for[symbol]) {
                  this.retrieving_contracts_for[symbol].resolve();
                  delete this.retrieving_contracts_for[symbol];
                }
                return [];
              }
              if (!response.contracts_for || !response.contracts_for.available || !Array.isArray(response.contracts_for.available)) {
                console.warn("No contracts_for data available for symbol:", symbol);
                if (this.retrieving_contracts_for[symbol]) {
                  this.retrieving_contracts_for[symbol].resolve();
                  delete this.retrieving_contracts_for[symbol];
                }
                return [];
              }
              const {
                contracts_for: { available: contracts }
              } = response;
              const filtered_contracts = contracts.filter((c) => !c.start_type || c.start_type !== "forward");
              this.contracts_for[symbol] = {
                contracts: filtered_contracts,
                timestamp: this.server_time.unix()
              };
              if (this.retrieving_contracts_for[symbol]) {
                this.retrieving_contracts_for[symbol].resolve();
                delete this.retrieving_contracts_for[symbol];
              }
              return filtered_contracts;
            } catch (error) {
              console.error("Error in contracts_for API call:", error);
              if (this.retrieving_contracts_for[symbol]) {
                this.retrieving_contracts_for[symbol].resolve();
                delete this.retrieving_contracts_for[symbol];
              }
              return [];
            }
          };
          if (this.contracts_for[symbol]) {
            const { contracts, timestamp } = this.contracts_for[symbol];
            const is_expired = this.server_time.unix() - timestamp > this.cache_age_in_min * 60;
            if (is_expired) {
              return getContractsForFromApi();
            }
            return contracts;
          }
          return getContractsForFromApi();
        }
        async getDurations(symbol, trade_type, convert_day_to_hours = true) {
          if (trade_type === "multiplier" || trade_type === "accumulator") {
            return [];
          }
          const contracts = await this.getContractsFor(symbol);
          const { DEFAULT_DURATION_DROPDOWN_OPTIONS } = config();
          if (contracts.length === 0) {
            return DURATIONS;
          }
          const contracts_for_category = await this.getContractsByTradeType(symbol, trade_type);
          const durations = [];
          const getDurationIndex = (input) => DEFAULT_DURATION_DROPDOWN_OPTIONS.findIndex((d) => d[1] === input.replace(/\d+/g, ""));
          const convertDuration = (duration, unit_to_convert) => {
            const duration_value = duration.replace(/\D/g, "");
            const duration_index = getDurationIndex(duration);
            const target_index = DEFAULT_DURATION_DROPDOWN_OPTIONS.findIndex(
              (default_duration) => default_duration[1] === unit_to_convert
            );
            let converted_duration = parseInt(duration_value);
            DEFAULT_DURATION_DROPDOWN_OPTIONS.slice(target_index + 1, duration_index + 1).reverse().forEach((default_duration) => {
              switch (default_duration[1]) {
                case "m":
                case "h":
                  converted_duration *= 60;
                  break;
                case "d":
                  converted_duration *= 24;
                  break;
                default:
                  break;
              }
            });
            return converted_duration;
          };
          contracts_for_category.forEach((contract) => {
            if (!contract.min_contract_duration || !contract.max_contract_duration) {
              return;
            }
            const start_index = getDurationIndex(contract.min_contract_duration);
            const end_index = getDurationIndex(
              contract.max_contract_duration === "1d" && convert_day_to_hours ? "24h" : contract.max_contract_duration
            );
            DEFAULT_DURATION_DROPDOWN_OPTIONS.slice(start_index, end_index + 1).forEach((default_duration, index) => {
              const is_existing_duration = durations.findIndex((d) => d.unit === default_duration[1]) !== -1;
              if (!is_existing_duration) {
                durations.push({
                  display: default_duration[0],
                  unit: default_duration[1],
                  min: index === 0 ? parseInt(contract.min_contract_duration.replace(/\D/g, "")) : 1,
                  max: convertDuration(contract.max_contract_duration, default_duration[1])
                });
              }
            });
          });
          if (contracts_for_category.every((contract) => contract.expiry_type === "intraday")) {
            const day_duration_index = durations.findIndex((d) => d[1] === "d");
            if (day_duration_index !== -1) {
              durations.splice(day_duration_index, 1);
            }
          }
          if (durations.length === 0) {
            return DURATIONS;
          }
          return durations.sort((a, b) => getDurationIndex(a.unit) - getDurationIndex(b.unit));
        }
        async getPredictionRange(symbol, trade_type) {
          const contracts = await this.getContractsByTradeType(symbol, trade_type);
          const contract_category = this.getContractCategoryByTradeType(trade_type);
          const prediction_range = [];
          const { DIGIT_CATEGORIES, opposites } = config();
          if (DIGIT_CATEGORIES.includes(contract_category) && trade_type !== "evenodd") {
            const contract = contracts.find((c) => {
              const categories = Object.keys(opposites);
              return categories.some(
                (category) => opposites[category].map((subcategory) => Object.keys(subcategory)[0]).includes(c.contract_type)
              );
            });
            if (contract && contract.last_digit_range) {
              prediction_range.push(...contract.last_digit_range);
            } else {
              prediction_range.push(1, 2, 3, 4, 5, 6, 7, 8);
            }
          }
          return prediction_range;
        }
        async getMultiplierRange(symbol, trade_type) {
          try {
            const contracts = await this.getContractsByTradeType(symbol, trade_type);
            const multiplier_range = [];
            const { opposites } = config();
            const multiplier_contract_types = ["MULTUP", "MULTDOWN"];
            const contract = contracts.find((c) => {
              if (multiplier_contract_types.includes(c.contract_type)) {
                return true;
              }
              const multiplier_opposites = opposites["MULTIPLIER"] || [];
              return multiplier_opposites.some((opposite) => Object.keys(opposite).includes(c.contract_type));
            });
            if (contract?.multiplier_range) {
              multiplier_range.push(...contract.multiplier_range);
            }
            if (multiplier_range.length === 0) {
              const any_contract_with_multipliers = contracts.find(
                (c) => c.multiplier_range && c.multiplier_range.length > 0
              );
              if (any_contract_with_multipliers?.multiplier_range) {
                multiplier_range.push(...any_contract_with_multipliers.multiplier_range);
              }
            }
            if (multiplier_range.length === 0) {
              console.warn(
                "No multiplier range found for symbol:",
                symbol,
                "Available contracts:",
                contracts.map((c) => ({ contract_type: c.contract_type, has_multiplier_range: !!c.multiplier_range }))
              );
            }
            return multiplier_range;
          } catch (error) {
            console.error("Error in getMultiplierRange:", error);
            return [];
          }
        }
        async getMarketBySymbol(symbol) {
          const contracts = await this.getContractsFor(symbol);
          if (!contracts.length) {
            return "na";
          }
          return contracts[0].market;
        }
        async getSubmarketBySymbol(symbol) {
          const contracts = await this.getContractsFor(symbol);
          if (!contracts.length) {
            return "na";
          }
          return contracts[0].submarket;
        }
        async getGroupedTradeTypes(symbol) {
          const contracts = await this.getContractsFor(symbol);
          const trade_type_options = {};
          for (let i = 0; i < contracts.length; i++) {
            const market = contracts[i].market;
            const submarket = contracts[i].submarket;
            const trade_type_category = this.getTradeTypeCategoryByTradeType(contracts[i].contract_category);
            const trade_type_category_name = this.getTradeTypeCategoryNameByTradeType(contracts[i].contract_category);
            const trade_types = await this.getTradeTypeByTradeCategory(market, submarket, symbol, trade_type_category);
            if (trade_type_category_name) {
              const is_disabled = this.isDisabledOption({
                market,
                submarket,
                symbol,
                trade_type_category
              });
              if (!is_disabled) {
                trade_type_options[trade_type_category_name] = trade_types;
              }
            }
          }
          return trade_type_options;
        }
        async getTradeTypeByTradeCategory(market, submarket, symbol, trade_type_category) {
          const { NOT_AVAILABLE_DURATIONS, TRADE_TYPE_CATEGORIES: TRADE_TYPE_CATEGORIES2, opposites } = config();
          const subcategories = TRADE_TYPE_CATEGORIES2[trade_type_category];
          const dropdown_options = [];
          if (subcategories && subcategories.length) {
            for (let i = 0; i < subcategories.length; i++) {
              const trade_type = subcategories[i];
              const durations = await this.getDurations(symbol, trade_type);
              const has_durations = JSON.stringify(durations) !== JSON.stringify(NOT_AVAILABLE_DURATIONS);
              const is_disabled = this.isDisabledOption({
                market,
                submarket,
                symbol,
                trade_type_category,
                trade_type
              });
              if (!is_disabled && has_durations) {
                const types = opposites[trade_type.toUpperCase()];
                const icons = [];
                const names = [];
                types.forEach((type) => {
                  icons.push(Object.keys(type)[0]);
                  names.push(Object.values(type)[0]);
                });
                dropdown_options.push({
                  name: names.join("/"),
                  value: trade_type,
                  icon: icons
                });
              }
            }
          }
          return dropdown_options;
        }
        async getTradeTypesForQuickStrategy(symbol, trade_type = "") {
          const trade_type_options = [];
          const filtered_trade_type_categories = [];
          if (trade_type === "ACCU") {
            trade_type_options.push({
              text: "Buy",
              value: "ACCU"
            });
            return trade_type_options;
          }
          const market = await this.getMarketBySymbol(symbol);
          const submarket = await this.getSubmarketBySymbol(symbol);
          const trade_type_categories = await this.getTradeTypeCategories(market, submarket, symbol);
          for (let i = 0; i < trade_type_categories.length; i++) {
            const trade_type_category = trade_type_categories[i];
            const trade_types = await this.getTradeTypeByTradeCategory(
              market,
              submarket,
              symbol,
              trade_type_category[1]
            );
            const hidden_categories = this.getHiddenCategories(trade_types);
            if (hidden_categories < trade_types.length) {
              filtered_trade_type_categories.push(trade_type_category);
            }
          }
          for (let i = 0; i < filtered_trade_type_categories.length; i++) {
            const trade_type_category = filtered_trade_type_categories[i];
            const trade_types = await this.getTradeTypeByTradeCategory(
              market,
              submarket,
              symbol,
              trade_type_category[1]
            );
            trade_type_options.push(...this.getTradeTypeOptions(trade_types, trade_type_category));
          }
          return trade_type_options;
        }
        async getTradeTypeCategories(market, submarket, symbol) {
          const { TRADE_TYPE_CATEGORY_NAMES } = config();
          const contracts = await this.getContractsFor(symbol);
          const trade_type_categories = [];
          contracts.forEach((contract) => {
            const trade_type_category = this.getTradeTypeCategoryByTradeType(contract.contract_category);
            const trade_type_category_name = this.getTradeTypeCategoryNameByTradeType(contract.contract_category);
            if (trade_type_category_name) {
              const is_disabled = this.isDisabledOption({
                market,
                submarket,
                symbol,
                trade_type_category
              });
              if (!is_disabled) {
                const is_existing_category = trade_type_categories.findIndex((c) => c[1] === trade_type_category) !== -1;
                if (!is_existing_category) {
                  trade_type_categories.push([trade_type_category_name, trade_type_category]);
                }
              }
            }
          });
          if (trade_type_categories.length > 0) {
            const category_names = Object.keys(TRADE_TYPE_CATEGORY_NAMES);
            return trade_type_categories.sort((a, b) => {
              const index_a = category_names.findIndex((c) => c === a[1]);
              const index_b = category_names.findIndex((c) => c === b[1]);
              return index_a - index_b;
            });
          }
          return TRADE_TYPE_CATEGORIES;
        }
        async getTradeTypes(market, submarket, symbol, trade_type_category) {
          const { NOT_AVAILABLE_DURATIONS, TRADE_TYPE_CATEGORIES: TRADE_TYPE_CATEGORIES2, opposites } = config();
          const trade_types = [];
          const subcategories = TRADE_TYPE_CATEGORIES2[trade_type_category];
          if (subcategories) {
            for (let i = 0; i < subcategories.length; i++) {
              const trade_type = subcategories[i];
              const durations = await this.getDurations(symbol, trade_type);
              const has_durations = JSON.stringify(durations) !== JSON.stringify(NOT_AVAILABLE_DURATIONS);
              const is_disabled = this.isDisabledOption({
                market,
                submarket,
                symbol,
                trade_type_category,
                trade_type
              });
              if (!is_disabled && has_durations) {
                const types = opposites[trade_type.toUpperCase()];
                trade_types.push([types.map((type) => type[Object.keys(type)[0]]).join("/"), trade_type]);
              }
            }
          }
          if (trade_types.length === 0) {
            return TRADE_TYPES[trade_type_category] || [["Default", "callput"]];
          }
          return trade_types;
        }
        isDisabledOption(compare_obj) {
          return this.disabled_options.some(
            (disabled_obj) => Object.keys(disabled_obj).every((prop) => compare_obj[prop] === disabled_obj[prop])
          );
        }
        disposeCache() {
          this.contracts_for = {};
        }
      };
    }
  });

  // bot-app/src/external/bot-skeleton/services/api/trading-times.js
  var TradingTimes;
  var init_trading_times = __esm({
    "bot-app/src/external/bot-skeleton/services/api/trading-times.js"() {
      init_common_data();
      init_pending_promise();
      init_api_base_bridge();
      TradingTimes = class {
        constructor({ ws, server_time }) {
          this.init_promise = new PendingPromise();
          this.is_initialised = false;
          this.trading_times = {};
          this.ws = ws;
          this.server_time = server_time.clone();
        }
        async initialise() {
          if (this.is_initialised) {
            return this.init_promise;
          }
          this.is_initialised = true;
          this.last_update_moment = this.server_time.local();
          if (!Object.keys(this.trading_times).length) {
            await this.updateTradingTimes();
            this.init_promise.resolve();
            const periodicUpdate = async () => {
              const changes = this.updateMarketOpenClosed();
              if (Object.keys(changes).length > 0 && this.onMarketOpenCloseChanged) {
                this.onMarketOpenCloseChanged(changes);
              }
              let next_update_date = this.nextUpdateDate();
              if (!next_update_date) {
                const now_moment = this.server_time.local();
                const next_update_moment = this.last_update_moment.clone().add(1, "days");
                if (now_moment.isAfter(next_update_moment)) {
                  this.last_update_moment = now_moment.clone();
                } else {
                  this.last_update_moment = next_update_moment.clone();
                }
                const is_open_map = {};
                Object.keys(this.trading_times).forEach((symbol_name) => {
                  is_open_map[symbol_name] = this.trading_times[symbol_name].is_opened;
                });
                await this.updateTradingTimes();
                Object.keys(this.trading_times).forEach((symbol_name) => {
                  this.trading_times[symbol_name].is_opened = is_open_map[symbol_name];
                });
                next_update_moment.set({ hour: 0, minute: 0, second: 0 });
                next_update_date = next_update_moment.toDate();
              }
              const wait_period = next_update_date - this.server_time.local().toDate();
              this.update_timer = setTimeout(periodicUpdate, wait_period);
            };
            await periodicUpdate();
          }
          return this.init_promise;
        }
        async updateTradingTimes() {
          const last_update_date = this.last_update_moment.format("YYYY-MM-DD");
          try {
            if (!api_base.api && !this.ws) {
              this.setTradingTimes();
              return;
            }
            const response = await (api_base.api?.send({ trading_times: last_update_date }) || this.ws?.send({ trading_times: last_update_date }));
            if (response?.error) {
              this.setTradingTimes();
              return;
            }
            this.trading_times = {};
            const now = this.server_time.local().toDate();
            const date_str = now.toISOString().substring(0, 11);
            const getUTCDate = (hour) => /* @__PURE__ */ new Date(`${date_str}${hour}Z`);
            if (!response?.trading_times?.markets) {
              this.setTradingTimes();
              return;
            }
            const {
              trading_times: { markets }
            } = response;
            markets?.forEach((market) => {
              const { submarkets } = market;
              submarkets?.forEach((submarket) => {
                const { symbols } = submarket;
                symbols?.forEach((symbol_obj) => {
                  const { times, underlying_symbol } = symbol_obj;
                  if (!underlying_symbol || typeof underlying_symbol !== "string" || underlying_symbol.trim() === "") {
                    console.warn(`[TradingTimes] Invalid symbol in API response:`, symbol_obj);
                    return;
                  }
                  if (!times || !times.open || !times.close) {
                    console.warn(`[TradingTimes] Invalid times data for symbol ${underlying_symbol}:`, times);
                    return;
                  }
                  const { open, close } = times;
                  const is_open_all_day = open.length === 1 && open[0] === "00:00:00" && close[0] === "23:59:59";
                  const is_closed_all_day = open.length === 1 && open[0] === "--" && close[0] === "--";
                  let processed_times;
                  if (!is_open_all_day && !is_closed_all_day) {
                    processed_times = open.map((open_time, index) => ({
                      open: getUTCDate(open_time),
                      close: getUTCDate(close[index])
                    }));
                  }
                  this.trading_times[underlying_symbol] = {
                    is_open_all_day,
                    is_closed_all_day,
                    times: processed_times
                  };
                });
              });
            });
            this.injectAdditionalTradingTimes();
            if (Object.keys(this.trading_times).length === 0) {
              this.setTradingTimes();
            }
          } catch (error) {
            this.setTradingTimes();
            return;
          }
        }
        injectAdditionalTradingTimes() {
          const additionalSymbols = ["1HZ15V", "1HZ30V", "1HZ90V"];
          additionalSymbols.forEach((symbol) => {
            if (!this.trading_times[symbol]) {
              this.trading_times[symbol] = {
                is_open_all_day: true,
                is_closed_all_day: false,
                times: void 0,
                is_opened: true
                // Always open for volatility indices
              };
            }
          });
        }
        setTradingTimes() {
          this.trading_times = {};
          TRADING_TIMES.SYMBOLS.forEach((symbol) => {
            if (symbol && typeof symbol === "string" && symbol.trim() !== "") {
              try {
                const tradingTimeData = getTradingTimes(symbol);
                if (tradingTimeData && typeof tradingTimeData === "object") {
                  this.trading_times[symbol] = tradingTimeData;
                }
              } catch (error) {
                console.warn(`[TradingTimes] Failed to get trading times for symbol: ${symbol}`, error);
              }
            } else {
              console.warn(`[TradingTimes] Invalid symbol encountered: ${symbol}`);
            }
          });
        }
        updateMarketOpenClosed() {
          const changes = {};
          Object.keys(this.trading_times).forEach((symbol_name) => {
            const is_opened = this.calcIsMarketOpened(symbol_name);
            const symbol_obj = this.trading_times[symbol_name];
            if (symbol_obj.is_opened !== is_opened) {
              symbol_obj.is_opened = is_opened;
              changes[symbol_name] = is_opened;
            }
          });
          return changes;
        }
        calcIsMarketOpened(symbol_name) {
          const now = this.server_time.local().unix();
          const { times, is_open_all_day, is_closed_all_day } = this.trading_times[symbol_name];
          if (is_closed_all_day) {
            return false;
          }
          if (is_open_all_day) {
            return true;
          }
          return times.some((session) => {
            const { open, close } = session;
            return now >= open && now < close;
          });
        }
        nextUpdateDate() {
          const now = this.server_time.local().toDate();
          let nextDate;
          Object.keys(this.trading_times).forEach((symbol_name) => {
            const { times, is_open_all_day, is_closed_all_day } = this.trading_times[symbol_name];
            if (is_open_all_day || is_closed_all_day) {
              return;
            }
            times.forEach((session) => {
              const { open, close } = session;
              if (open > now && (!nextDate || open < nextDate)) {
                nextDate = open;
              }
              if (close > now && (!nextDate || close < nextDate)) {
                nextDate = close;
              }
            });
          });
          return nextDate;
        }
        isMarketOpened(symbol_name) {
          const symbol_names = Object.keys(this.trading_times);
          if (!symbol_names.length || !symbol_names.includes(symbol_name)) {
            return false;
          }
          const isOpened = this.trading_times[symbol_name].is_opened;
          return isOpened;
        }
        // Method to get display name for symbols (used by active symbols)
        getSymbolDisplayName(symbol) {
          return TRADING_TIMES.SYMBOL_DISPLAY_NAMES[symbol] || symbol;
        }
      };
    }
  });

  // bot-app/src/external/bot-skeleton/services/api/api-helpers.js
  var _ApiHelpers, ApiHelpers, api_helpers_default;
  var init_api_helpers = __esm({
    "bot-app/src/external/bot-skeleton/services/api/api-helpers.js"() {
      init_account_limits();
      init_active_symbols();
      init_contracts_for();
      init_trading_times();
      _ApiHelpers = class _ApiHelpers {
        constructor(api_helpers_store) {
          this.trading_times = new TradingTimes(api_helpers_store);
          this.contracts_for = new ContractsFor(api_helpers_store);
          this.active_symbols = new ActiveSymbols(this.trading_times);
          this.account_limits = new AccountLimits(api_helpers_store);
        }
        static disposeInstance() {
          this.singleton = null;
        }
        static setInstance(api_helpers_store) {
          if (!this.singleton) {
            this.singleton = new _ApiHelpers(api_helpers_store);
          }
          return this.instance;
        }
        static get instance() {
          return this.singleton;
        }
      };
      __publicField(_ApiHelpers, "singleton", null);
      ApiHelpers = _ApiHelpers;
      api_helpers_default = ApiHelpers;
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Trade Definition/trade_definition_market.js
  var init_trade_definition_market = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Trade Definition/trade_definition_market.js"() {
      init_translations();
      init_api_helpers();
      init_dbot_store_shim();
      init_utils();
      window.Blockly.Blocks.trade_definition_market = {
        init() {
          this.jsonInit({
            message0: localize("Market: {{ input_market }} > {{ input_submarket }} > {{ input_symbol }}", {
              input_market: "%1",
              input_submarket: "%2",
              input_symbol: "%3"
            }),
            args0: [
              {
                type: "field_dropdown",
                name: "MARKET_LIST",
                options: [["", ""]]
              },
              {
                type: "field_dropdown",
                name: "SUBMARKET_LIST",
                options: [["", ""]]
              },
              {
                type: "field_dropdown",
                name: "SYMBOL_LIST",
                options: [["", ""]]
              }
            ],
            colour: window.Blockly.Colours.Special1.colour,
            colourSecondary: window.Blockly.Colours.Special1.colourSecondary,
            colourTertiary: window.Blockly.Colours.Special1.colourTertiary,
            previousStatement: null,
            nextStatement: null
          });
          this.setMovable(false);
          this.setDeletable(false);
        },
        customContextMenu(menu) {
          const menu_items = [localize("Enable Block"), localize("Disable Block")];
          excludeOptionFromContextMenu(menu, menu_items);
          modifyContextMenu(menu);
        },
        onchange(event) {
          const allowed_events = ["BLOCK_CREATE", "BLOCK_CHANGE", "BLOCK_DRAG"];
          const is_allowed_event = allowed_events.findIndex((event_name) => event.type === window.Blockly.Events[event_name]) !== -1;
          if (!this.workspace || window.Blockly.derivWorkspace.isFlyoutVisible || this.workspace.isDragging() || !is_allowed_event) {
            return;
          }
          this.enforceLimitations();
          const { active_symbols } = api_helpers_default?.instance ?? {};
          if (!active_symbols) return;
          const market_dropdown = this.getField("MARKET_LIST");
          const submarket_dropdown = this.getField("SUBMARKET_LIST");
          const symbol_dropdown = this.getField("SYMBOL_LIST");
          const market = market_dropdown.getValue();
          const submarket = submarket_dropdown.getValue();
          const symbol = symbol_dropdown.getValue();
          const market_options = active_symbols.getMarketDropdownOptions();
          const populateMarketDropdown = () => {
            market_dropdown?.updateOptions(market_options, {
              default_value: market,
              should_pretend_empty: true,
              event_group: event.group
            });
          };
          if (event.type === window.Blockly.Events.BLOCK_CREATE && event.ids.includes(this.id)) {
            populateMarketDropdown();
          } else if (event.type === window.Blockly.Events.BLOCK_CHANGE && event.blockId === this.id) {
            if (event.name === "MARKET_LIST") {
              submarket_dropdown.updateOptions(active_symbols.getSubmarketDropdownOptions(market), {
                default_value: submarket,
                should_pretend_empty: true,
                event_group: event.group
              });
            } else if (event.name === "SUBMARKET_LIST") {
              symbol_dropdown.updateOptions(active_symbols.getSymbolDropdownOptions(submarket), {
                default_value: symbol,
                should_pretend_empty: true,
                event_group: event.group
              });
            } else if (event.name === "SYMBOL_LIST") {
              const new_symbol = symbol_dropdown.getValue();
              DBotStore.instance.dashboard.setBotBuilderSymbol(new_symbol);
            }
          } else if (event.type === window.Blockly.Events.BLOCK_DRAG && !event.isStart && event.blockId === this.getRootBlock().id) {
            if (market_dropdown.isEmpty() || submarket_dropdown.isEmpty() || symbol_dropdown.isEmpty()) {
              populateMarketDropdown();
            }
          }
        },
        enforceLimitations() {
          runIrreversibleEvents(() => {
            if (!this.isDescendantOf("trade_definition")) {
              this.unplug(false);
              const top_blocks = this.workspace.getTopBlocks();
              const trade_definition_block = top_blocks.find((block) => block.type === "trade_definition");
              if (trade_definition_block) {
                const connection = trade_definition_block.getLastConnectionInStatement("TRADE_OPTIONS");
                if (connection) {
                  connection.connect(this.previousConnection);
                }
              } else {
                this.dispose();
              }
            } else if (this.disabled) {
              this.setDisabled(false);
            }
          });
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.trade_definition_market = () => {
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Trade Definition/trade_definition_tradetype.js
  var init_trade_definition_tradetype = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Trade Definition/trade_definition_tradetype.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.trade_definition_tradetype = {
        init() {
          this.jsonInit({
            message0: localize("Trade Type: {{ trade_type_category }} > {{ trade_type }}", {
              trade_type_category: "%1",
              trade_type: "%2"
            }),
            args0: [
              {
                type: "field_dropdown",
                name: "TRADETYPECAT_LIST",
                options: [["", ""]]
              },
              {
                type: "field_dropdown",
                name: "TRADETYPE_LIST",
                options: [["", ""]]
              }
            ],
            colour: window.Blockly.Colours.Special1.colour,
            colourSecondary: window.Blockly.Colours.Special1.colourSecondary,
            colourTertiary: window.Blockly.Colours.Special1.colourTertiary,
            previousStatement: null,
            nextStatement: null
          });
          this.setMovable(false);
          this.setDeletable(false);
        },
        customContextMenu(menu) {
          const menu_items = [localize("Enable Block"), localize("Disable Block")];
          excludeOptionFromContextMenu(menu, menu_items);
          modifyContextMenu(menu);
        },
        enforceLimitations: window.Blockly.Blocks.trade_definition_market.enforceLimitations
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.trade_definition_tradetype = () => {
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Trade Definition/trade_definition_contracttype.js
  var init_trade_definition_contracttype = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Trade Definition/trade_definition_contracttype.js"() {
      init_translations();
      init_config();
      init_scratch_shared_shim();
      init_utils();
      window.Blockly.Blocks.trade_definition_contracttype = {
        init() {
          this.jsonInit({
            message0: localize("Contract Type: {{ contract_type }}", { contract_type: "%1" }),
            args0: [
              {
                type: "field_dropdown",
                name: "TYPE_LIST",
                options: [["", ""]]
              }
            ],
            colour: window.Blockly.Colours.Special1.colour,
            colourSecondary: window.Blockly.Colours.Special1.colourSecondary,
            colourTertiary: window.Blockly.Colours.Special1.colourTertiary,
            tooltip: localize(
              'If the contract type is \u201CBoth\u201D, then the Purchase Conditions should include both Rise and Fall using the \u201CConditional Block"'
            ),
            previousStatement: null,
            nextStatement: null
          });
          this.setMovable(false);
          this.setDeletable(false);
        },
        onchange(event) {
          if (!this.workspace || window.Blockly.derivWorkspace.isFlyoutVisible || this.workspace.isDragging()) {
            return;
          }
          this.enforceLimitations();
          const is_load_event = /^dbot-load/.test(event.group);
          if (event.type === window.Blockly.Events.BLOCK_CHANGE) {
            if (event.name === "TRADETYPE_LIST") {
              const trade_type = event.newValue;
              const contract_type_list = this.getField("TYPE_LIST");
              const contract_type_options = [];
              const trade_types = getContractTypeOptions("both", trade_type);
              if (trade_types.length > 1) {
                contract_type_options.push(["Both", "both"]);
              }
              contract_type_options.push(...trade_types);
              if (contract_type_options.length === 0) {
                contract_type_options.push(...config().NOT_AVAILABLE_DROPDOWN_OPTIONS);
              }
              contract_type_list.updateOptions(contract_type_options, {
                event_group: event.group,
                default_value: is_load_event ? contract_type_list.getValue() : void 0
              });
            }
          }
        },
        customContextMenu(menu) {
          const menu_items = [localize("Enable Block"), localize("Disable Block")];
          excludeOptionFromContextMenu(menu, menu_items);
          modifyContextMenu(menu);
        },
        enforceLimitations: window.Blockly.Blocks.trade_definition_market.enforceLimitations
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.trade_definition_contracttype = () => "";
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Trade Definition/trade_definition_candleinterval.js
  var init_trade_definition_candleinterval = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Trade Definition/trade_definition_candleinterval.js"() {
      init_translations();
      init_config();
      init_utils();
      window.Blockly.Blocks.trade_definition_candleinterval = {
        init() {
          this.jsonInit({
            message0: localize("Default Candle Interval: {{ candle_interval_type }}", { candle_interval_type: "%1" }),
            args0: [
              {
                type: "field_dropdown",
                name: "CANDLEINTERVAL_LIST",
                options: config().candleIntervals.slice(1)
              }
            ],
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            previousStatement: null,
            nextStatement: null
          });
          this.setMovable(false);
          this.setDeletable(false);
        },
        onchange() {
          if (!this.workspace || window.Blockly.derivWorkspace.isFlyoutVisible || this.workspace.isDragging()) {
            return;
          }
          this.enforceLimitations();
        },
        customContextMenu(menu) {
          const menu_items = [localize("Enable Block"), localize("Disable Block")];
          excludeOptionFromContextMenu(menu, menu_items);
          modifyContextMenu(menu);
        },
        enforceLimitations: window.Blockly.Blocks.trade_definition_market.enforceLimitations
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.trade_definition_candleinterval = () => {
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Trade Definition/trade_definition_restartbuysell.js
  var init_trade_definition_restartbuysell = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Trade Definition/trade_definition_restartbuysell.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.trade_definition_restartbuysell = {
        init() {
          this.jsonInit({
            message0: localize("Restart buy/sell on error (disable for better performance): {{ checkbox }}", {
              checkbox: "%1"
            }),
            args0: [
              {
                type: "field_checkbox",
                name: "TIME_MACHINE_ENABLED",
                checked: false,
                class: "blocklyCheckbox"
              }
            ],
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            previousStatement: null,
            nextStatement: null
          });
          this.setMovable(false);
          this.setDeletable(false);
          this.setOnChange(() => {
            const next_block = this?.getNextBlock();
            if (next_block?.type !== "trade_definition_restartonerror") {
              next_block?.unplug(true);
            }
          });
        },
        onchange() {
          if (!this.workspace || window.Blockly.derivWorkspace.isFlyoutVisible || this.workspace.isDragging()) {
            return;
          }
          this.enforceLimitations();
        },
        customContextMenu(menu) {
          const menu_items = [localize("Enable Block"), localize("Disable Block")];
          excludeOptionFromContextMenu(menu, menu_items);
          modifyContextMenu(menu);
        },
        enforceLimitations: window.Blockly.Blocks.trade_definition_market.enforceLimitations,
        required_inputs: ["TIME_MACHINE_ENABLED"]
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.trade_definition_restartbuysell = () => {
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Trade Definition/trade_definition_restartonerror.js
  var init_trade_definition_restartonerror = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Trade Definition/trade_definition_restartonerror.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.trade_definition_restartonerror = {
        init() {
          this.jsonInit({
            message0: localize("Restart last trade on error (bot ignores the unsuccessful trade): {{ checkbox }}", {
              checkbox: "%1"
            }),
            args0: [
              {
                type: "field_checkbox",
                name: "RESTARTONERROR",
                checked: true,
                class: "blocklyCheckbox"
              }
            ],
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            previousStatement: null,
            nextStatement: null
          });
          this.setNextStatement(false);
          this.setMovable(false);
          this.setDeletable(false);
        },
        onchange() {
          if (!this.workspace || window.Blockly.derivWorkspace.isFlyoutVisible || this.workspace.isDragging()) {
            return;
          }
          this.enforceLimitations();
        },
        customContextMenu(menu) {
          const menu_items = [localize("Enable Block"), localize("Disable Block")];
          excludeOptionFromContextMenu(menu, menu_items);
          modifyContextMenu(menu);
        },
        enforceLimitations: window.Blockly.Blocks.trade_definition_market.enforceLimitations,
        required_inputs: ["RESTARTONERROR"]
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.trade_definition_restartonerror = () => {
      };
    }
  });

  // bot-shims/backend-errors.js
  var error_map, getLocalizedErrorMessage;
  var init_backend_errors = __esm({
    "bot-shims/backend-errors.js"() {
      error_map = {
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
      getLocalizedErrorMessage = (error, details) => {
        if (typeof error === "string") return error_map[error] || error;
        if (error && error.code) return error_map[error.code] || error.code;
        return "Unknown error";
      };
    }
  });

  // bot-shims/rxjs.js
  var BehaviorSubject, isAuthorizing$;
  var init_rxjs = __esm({
    "bot-shims/rxjs.js"() {
      BehaviorSubject = class {
        constructor(v) {
          this._value = v;
        }
        get value() {
          return this._value;
        }
        next(v) {
          this._value = v;
        }
        subscribe(fn) {
          if (fn) fn(this._value);
          return { unsubscribe: () => {
          } };
        }
        pipe(...fns) {
          return fns.reduce((v, fn) => fn(v), this);
        }
      };
      isAuthorizing$ = new BehaviorSubject(true);
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Trade Definition/trade_definition_tradeoptions.js
  var init_trade_definition_tradeoptions = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Trade Definition/trade_definition_tradeoptions.js"() {
      init_shared();
      init_backend_errors();
      init_rxjs();
      init_translations();
      init_common_data();
      init_config();
      init_api_helpers();
      init_dbot_store_shim();
      init_utils();
      window.Blockly.Blocks.trade_definition_tradeoptions = {
        durations: [],
        init() {
          this.jsonInit(this.definition());
          this.setInputsInline(true);
          this.setNextStatement(false);
        },
        definition() {
          const is_stake = this.type === "trade_definition_tradeoptions";
          return {
            message0: localize("Duration: {{ duration_unit }} {{ duration_value }}", {
              duration_unit: "%1",
              duration_value: "%2"
            }),
            message1: `${is_stake ? localize("Stake") : localize("Payout")}: %1 %2 %3`,
            args0: [
              {
                type: "field_dropdown",
                name: "DURATIONTYPE_LIST",
                options: [["", ""]]
              },
              {
                type: "input_value",
                name: "DURATION",
                check: "Number"
              }
            ],
            args1: [
              {
                type: "field_label",
                name: "CURRENCY_LIST",
                text: getCurrencyDisplayCode(config().lists.CURRENCY[0])
              },
              {
                type: "input_value",
                name: "AMOUNT",
                check: "Number"
              },
              {
                type: "field_label",
                name: "AMOUNT_LIMITS",
                text: ""
              }
            ],
            colour: window.Blockly.Colours.Special1.colour,
            colourSecondary: window.Blockly.Colours.Special1.colourSecondary,
            colourTertiary: window.Blockly.Colours.Special1.colourTertiary,
            previousStatement: null,
            nextStatement: null,
            tooltip: localize("Define your trade options such as duration and stake."),
            category: window.Blockly.Categories.Trade_Definition
          };
        },
        meta() {
          return {
            display_name: localize("Trade options"),
            description: localize(
              "Define your trade options such as duration and stake. Some options are only applicable for certain trade types."
            )
          };
        },
        customContextMenu(menu) {
          const menu_items = [localize("Enable Block"), localize("Disable Block")];
          excludeOptionFromContextMenu(menu, menu_items);
          modifyContextMenu(menu);
        },
        onchange(event) {
          if (event.type === "change") {
            const selected_block = this.workspace.getBlockById(event.blockId);
            selected_block?.parentBlock_?.inputList.filter((item) => ["DURATION", "AMOUNT"].includes(item.name)).forEach((input) => {
              const input_target = input.connection.targetBlock();
              const value = input_target?.getFieldValue("NUM")?.toString();
              if (value?.startsWith("0")) {
                const new_value = value.includes(".") ? parseFloat(`${value}`) : parseInt(`${value}`);
                input_target.setFieldValue(new_value.toString(), "NUM");
              }
            });
          }
          if (!this.workspace || this.workspace.isDragging() || window.Blockly.derivWorkspace.isFlyoutVisible) {
            return;
          }
          const trade_definition_block = this.workspace.getAllBlocks(true).find((block) => block.type === "trade_definition");
          if (!trade_definition_block) {
            return;
          }
          const market_block = trade_definition_block.getChildByType("trade_definition_market");
          const trade_type_block = trade_definition_block.getChildByType("trade_definition_tradetype");
          if (!market_block || !trade_type_block) {
            return;
          }
          this.selected_symbol = market_block.getFieldValue("SYMBOL_LIST");
          this.selected_market = market_block.getFieldValue("MARKET_LIST");
          this.selected_trade_type_category = trade_type_block.getFieldValue("TRADETYPECAT_LIST");
          this.selected_trade_type = trade_type_block.getFieldValue("TRADETYPE_LIST");
          this.selected_duration = this.getFieldValue("DURATIONTYPE_LIST");
          this.selected_barrier_types = [
            this.getFieldValue("BARRIEROFFSETTYPE_LIST") || config().BARRIER_TYPES[0][1],
            this.getFieldValue("SECONDBARRIEROFFSETTYPE_LIST") || config().BARRIER_TYPES[1][1]
          ];
          if (event.type === window.Blockly.Events.BLOCK_CREATE && event.ids.includes(this.id) || event.type === window.Blockly.Events.BLOCK_DRAG && !event.isStart) {
            setCurrency(this);
            this.updateAmountLimits();
          }
          const is_load_event = /^dbot-load/.test(event.group);
          if (event.type === window.Blockly.Events.BLOCK_CREATE && event.ids.includes(this.id)) {
            if (is_load_event) {
              this.updateBarrierInputs(false, false);
              this.updateDurationInput(false, false);
              this.updatePredictionInput(false);
              this.updateAmountLimits();
            } else {
              this.updateBarrierInputs(true, true);
              this.enforceSingleBarrierType("BARRIEROFFSETTYPE_LIST", true);
              this.updateDurationInput(true, true);
              this.updatePredictionInput(true);
            }
          } else if (event.type === window.Blockly.Events.BLOCK_CHANGE) {
            if (is_load_event) {
              if (event.name === "TRADETYPE_LIST") {
                this.updateBarrierInputs(false, false);
                this.enforceSingleBarrierType(event.name, true);
                this.updateDurationInput(false, false);
                this.updatePredictionInput(false);
              }
            } else if (event.blockId === this.id) {
              switch (event.name) {
                case "DURATIONTYPE_LIST": {
                  this.updateBarrierInputs(true, true);
                  this.enforceSingleBarrierType("BARRIEROFFSETTYPE_LIST", true);
                  this.updateDurationInput(false, true);
                  break;
                }
                case "BARRIEROFFSETTYPE_LIST":
                case "SECONDBARRIEROFFSETTYPE_LIST": {
                  this.updateBarrierInputs(false, true);
                  this.enforceSingleBarrierType(event.name, false);
                  break;
                }
                default:
                  break;
              }
            } else if (event.name === "SYMBOL_LIST" || event.name === "TRADETYPE_LIST") {
              this.updateBarrierInputs(true, true);
              this.enforceSingleBarrierType(event.name, true);
              this.updateDurationInput(true, true);
              this.updatePredictionInput(true);
              this.updateAmountLimits();
            }
          } else if (event.type === window.Blockly.Events.BLOCK_DRAG && !event.isStart && event.blockId === this.id) {
            if (!this.selected_duration) {
              const fake_creation_event = new window.Blockly.Events.BlockCreate(this);
              fake_creation_event.recordUndo = false;
              window.Blockly.Events.fire(fake_creation_event);
            } else if (this.selected_trade_type === "multiplier") {
              this.updateDurationInput(false, false);
            }
          }
        },
        createPredictionInput(prediction_range) {
          runIrreversibleEvents(() => {
            if (prediction_range.length === 0) {
              this.removeInput("PREDICTION_LABEL", true);
              this.removeInput("PREDICTION", true);
            } else if (!this.getInput("PREDICTION")) {
              this.appendDummyInput("PREDICTION_LABEL").appendField(localize("Prediction:"));
              const prediction_input = this.appendValueInput("PREDICTION");
              const shadow_block = this.workspace.newBlock("math_number_positive");
              shadow_block.setInputsInline(true);
              shadow_block.setShadow(true);
              shadow_block.setFieldValue(prediction_range[0], "NUM");
              shadow_block.outputConnection.connect(prediction_input.connection);
              shadow_block.initSvg();
              shadow_block.renderEfficiently();
            }
          });
        },
        createBarrierInputs(barriers) {
          runIrreversibleEvents(() => {
            const input_names = ["BARRIEROFFSET", "SECONDBARRIEROFFSET"];
            for (let i = 0; i < barriers.values.length; i++) {
              const label = barriers.values.length === 1 ? localize("Barrier") : config().BARRIER_LABELS[i];
              let input = this.getInput(input_names[i]);
              if (input) {
                input.fieldRow[0].setText(label);
              } else {
                input = this.appendValueInput(input_names[i]).appendField(label, `${input_names[i]}_LABEL`).appendField(
                  new window.Blockly.FieldDropdown(config().BARRIER_TYPES),
                  `${input_names[i]}TYPE_LIST`
                );
                const shadow_block = this.workspace.newBlock("math_number_positive");
                shadow_block.setInputsInline(true);
                shadow_block.setShadow(true);
                shadow_block.setFieldValue(barriers.values[i], "NUM");
                shadow_block.outputConnection.connect(input.connection);
                shadow_block.initSvg();
                shadow_block.renderEfficiently();
              }
            }
            for (let i = input_names.length; i > barriers.values.length; i--) {
              this.removeInput(input_names[i - 1], true);
            }
          });
        },
        updateAmountLimits() {
          const { account_limits } = api_helpers_default?.instance ?? {};
          if (!account_limits) return;
          const { currency } = DBotStore.instance.client;
          if (isAuthorizing$.getValue()) return;
          account_limits.getStakePayoutLimits(currency, void 0, this.selected_market).then((limits) => {
            const unsupported_trade_types = ["multiplier", "accumulator"];
            if (unsupported_trade_types.includes(this.selected_trade_type)) return;
            const currency_block = this.getField("CURRENCY_LIST")?.getSourceBlock();
            const currency_child_block = currency_block?.getChildren()?.[1]?.getField("NUM");
            if (!this.getField("AMOUNT_LIMITS") && !currency_block && !currency_child_block) return;
            this.amount_limits = limits;
            const { max_payout, min_stake } = limits;
            if (max_payout && min_stake) {
              runIrreversibleEvents(() => {
                this.setFieldValue(
                  localize("(min: {{min_stake}} - max: {{max_payout}})", {
                    min_stake,
                    max_payout
                  }),
                  "AMOUNT_LIMITS"
                );
              });
              if (currency_block && currency_child_block) {
                currency_child_block.setValue(this.amount_limits?.min_stake);
              }
            }
          });
        },
        updateDurationInput(should_use_default_unit, should_update_value) {
          const { contracts_for } = api_helpers_default?.instance ?? {};
          if (!contracts_for) return;
          if (this.selected_trade_type === "accumulator" && this.isDescendantOf("trade_definition")) {
            runIrreversibleEvents(() => {
              runGroupedEvents(false, () => {
                const accumulator_block = this.workspace.newBlock("trade_definition_accumulator");
                accumulator_block.initSvg();
                accumulator_block.render();
                const trade_definition_block = this.workspace.getTradeDefinitionBlock();
                const parent_connection = trade_definition_block.getInput("SUBMARKET").connection;
                const child_connection = accumulator_block.previousConnection;
                parent_connection.connect(child_connection);
                const stake_input = accumulator_block.getInput("AMOUNT");
                const stake_shadow_block = this.workspace.newBlock("math_number_positive");
                stake_shadow_block.setShadow(true);
                stake_shadow_block.setFieldValue(1, "NUM");
                stake_shadow_block.outputConnection.connect(stake_input.connection);
                stake_shadow_block.initSvg();
                stake_shadow_block.renderEfficiently();
                const take_profit_block = this.workspace.newBlock("accumulator_take_profit");
                const take_profit_input = take_profit_block.getInput("AMOUNT");
                const take_profit_shadow_block = this.workspace.newBlock("math_number_positive");
                take_profit_shadow_block.setShadow(true);
                take_profit_shadow_block.setFieldValue(0, "NUM");
                take_profit_block.setDisabled(true);
                take_profit_shadow_block.outputConnection.connect(take_profit_input.connection);
                take_profit_shadow_block.initSvg();
                take_profit_shadow_block.renderEfficiently();
                accumulator_block.getLastConnectionInStatement("ACCUMULATOR_PARAMS").connect(take_profit_block.previousConnection);
                take_profit_block.initSvg();
                take_profit_block.renderEfficiently();
                this.dispose();
              });
            });
          } else if (this.selected_trade_type === "multiplier" && this.isDescendantOf("trade_definition")) {
            runIrreversibleEvents(() => {
              runGroupedEvents(false, () => {
                const multiplier_block = this.workspace.newBlock("trade_definition_multiplier");
                multiplier_block.initSvg();
                multiplier_block.renderEfficiently();
                const trade_definition_block = this.workspace.getTradeDefinitionBlock();
                const parent_connection = trade_definition_block.getInput("SUBMARKET").connection;
                const child_connection = multiplier_block.previousConnection;
                parent_connection.connect(child_connection);
                const stake_input = multiplier_block.getInput("AMOUNT");
                const stake_shadow_block = this.workspace.newBlock("math_number_positive");
                stake_shadow_block.setInputsInline(true);
                stake_shadow_block.setShadow(true);
                stake_shadow_block.setFieldValue(1, "NUM");
                stake_shadow_block.outputConnection.connect(stake_input.connection);
                stake_shadow_block.initSvg();
                stake_shadow_block.renderEfficiently();
                const take_profit_block = this.workspace.newBlock("multiplier_take_profit");
                const take_profit_input = take_profit_block.getInput("AMOUNT");
                const take_profit_shadow_block = this.workspace.newBlock("math_number_positive");
                take_profit_shadow_block.setInputsInline(true);
                take_profit_shadow_block.setShadow(true);
                take_profit_shadow_block.setFieldValue(0, "NUM");
                take_profit_shadow_block.outputConnection.connect(take_profit_input.connection);
                take_profit_shadow_block.initSvg();
                take_profit_shadow_block.renderEfficiently();
                take_profit_block.initSvg();
                take_profit_block.renderEfficiently();
                multiplier_block.getLastConnectionInStatement("MULTIPLIER_PARAMS").connect(take_profit_block.previousConnection);
                const stop_loss_block = this.workspace.newBlock("multiplier_stop_loss");
                const stop_loss_input = stop_loss_block.getInput("AMOUNT");
                const stop_loss_shadow_block = this.workspace.newBlock("math_number_positive");
                stop_loss_shadow_block.setInputsInline(true);
                stop_loss_shadow_block.setShadow(true);
                stop_loss_shadow_block.setFieldValue(0, "NUM");
                stop_loss_shadow_block.outputConnection.connect(stop_loss_input.connection);
                stop_loss_shadow_block.initSvg();
                stop_loss_shadow_block.renderEfficiently();
                stop_loss_block.initSvg();
                stop_loss_block.renderEfficiently();
                multiplier_block.getLastConnectionInStatement("MULTIPLIER_PARAMS").connect(stop_loss_block.previousConnection);
                this.dispose();
              });
            });
          } else {
            contracts_for.getDurations(this.selected_symbol, this.selected_trade_type).then((durations) => {
              if (!durations || durations.length === 0) {
                durations = DURATIONS;
              }
              this.durations = durations;
              const duration_field_dropdown = this.getField("DURATIONTYPE_LIST");
              const duration_input = this.getInput("DURATION");
              const duration_options = durations.map((duration) => [duration.display, duration.unit]);
              duration_field_dropdown?.updateOptions(duration_options, {
                default_value: should_use_default_unit ? void 0 : duration_field_dropdown.getValue()
              });
              if (should_update_value && duration_input && duration_input.connection) {
                const target_block = duration_input.connection.targetBlock();
                if (target_block && target_block.isShadow()) {
                  const min_duration = durations.find((duration) => duration.unit === this.selected_duration);
                  if (min_duration) {
                    runIrreversibleEvents(() => {
                      target_block.setFieldValue(min_duration.min, "NUM");
                    });
                  }
                }
              }
            }).catch((error) => {
              this.durations = DURATIONS;
              const duration_field_dropdown = this.getField("DURATIONTYPE_LIST");
              const duration_options = DURATIONS.map((duration) => [duration.display, duration.unit]);
              duration_field_dropdown?.updateOptions(duration_options, {
                default_value: should_use_default_unit ? void 0 : duration_field_dropdown.getValue()
              });
              console.error("Error fetching durations:", error);
            });
          }
          const {
            workspaces: {
              indentWorkspace: { x, y }
            }
          } = config();
          setTimeout(() => {
            window.Blockly.getMainWorkspace().cleanUp(x, y);
          }, 10);
        },
        updateBarrierInputs(should_use_default_type, should_use_default_values) {
          const { contracts_for } = api_helpers_default?.instance ?? {};
          if (!contracts_for) return;
          const { BARRIER_TYPES } = config();
          contracts_for.getBarriers(
            this.selected_symbol,
            this.selected_trade_type,
            this.selected_duration,
            this.selected_barrier_types
          ).then((barriers) => {
            this.createBarrierInputs(barriers);
            const input_names = ["BARRIEROFFSET", "SECONDBARRIEROFFSET"];
            for (let i = 0; i < barriers.values.length; i++) {
              const barrier_field_dropdown = this.getField(`${input_names[i]}TYPE_LIST`);
              const { ABSOLUTE_BARRIER_DROPDOWN_OPTION } = config();
              const barrier_field_value = should_use_default_type ? BARRIER_TYPES[i][1] : barrier_field_dropdown.getValue();
              if (this.selected_duration === "d") {
                barrier_field_dropdown.updateOptions(ABSOLUTE_BARRIER_DROPDOWN_OPTION, {
                  default_value: "absolute"
                });
              } else if (barriers.allow_both_types || barriers.allow_absolute_type) {
                const options = [].concat(BARRIER_TYPES, ABSOLUTE_BARRIER_DROPDOWN_OPTION);
                barrier_field_dropdown.updateOptions(options, {
                  default_value: barrier_field_value
                });
              } else {
                barrier_field_dropdown.updateOptions(BARRIER_TYPES, {
                  default_value: barrier_field_value
                });
              }
              const { connection } = this.getInput(input_names[i]);
              if (should_use_default_values && connection) {
                const target_block = connection.targetBlock();
                if (target_block && target_block.isShadow()) {
                  const barrier_value = barriers.values[i] !== false ? barriers.values[i] : "";
                  runIrreversibleEvents(() => {
                    target_block.setFieldValue(barrier_value, "NUM");
                  });
                }
              }
            }
          });
        },
        updatePredictionInput(should_use_default_value) {
          const { contracts_for } = api_helpers_default?.instance ?? {};
          if (!contracts_for) return;
          contracts_for.getPredictionRange(this.selected_symbol, this.selected_trade_type).then((prediction_range) => {
            this.createPredictionInput(prediction_range);
            if (prediction_range.length > 0) {
              const prediction_input = this.getInput("PREDICTION");
              const { connection } = prediction_input;
              if (should_use_default_value && connection) {
                const target_block = connection.targetBlock();
                if (target_block && target_block.isShadow()) {
                  const initial_prediction = Math.max(1, prediction_range[0]);
                  runIrreversibleEvents(() => {
                    target_block.setFieldValue(initial_prediction, "NUM");
                  });
                }
              }
            }
          });
        },
        enforceSingleBarrierType(barrier_input_name, should_force_distinct) {
          const new_value = this.getFieldValue(barrier_input_name || "");
          const other_barrier_input_name = barrier_input_name === "BARRIEROFFSETTYPE_LIST" ? "SECONDBARRIEROFFSETTYPE_LIST" : "BARRIEROFFSETTYPE_LIST";
          const other_barrier_field = this.getField(other_barrier_input_name);
          const { BARRIER_TYPES } = config();
          if (other_barrier_field) {
            const has_other_barrier = BARRIER_TYPES.findIndex((type) => type[1] === new_value) !== -1;
            const other_barrier_type = other_barrier_field.getValue();
            runIrreversibleEvents(() => {
              if (has_other_barrier && (other_barrier_type === "absolute" || should_force_distinct)) {
                const other_barrier_value = BARRIER_TYPES.find((type) => type[1] !== new_value);
                other_barrier_field.setValue(other_barrier_value[1]);
              } else if (new_value === "absolute" && other_barrier_type !== "absolute") {
                other_barrier_field.setValue("absolute");
              }
            });
          }
        },
        domToMutation(xmlElement) {
          const has_first_barrier = xmlElement.getAttribute("has_first_barrier") === "true";
          const has_second_barrier = xmlElement.getAttribute("has_second_barrier") === "true";
          const has_prediction = xmlElement.getAttribute("has_prediction") === "true";
          if (has_first_barrier && has_second_barrier) {
            this.createBarrierInputs({ values: [1, -1] });
          } else if (has_first_barrier) {
            this.createBarrierInputs({ values: [1] });
          } else if (has_prediction) {
            this.createPredictionInput([1]);
          }
        },
        mutationToDom() {
          const container = document.createElement("mutation");
          container.setAttribute("has_first_barrier", !!this.getInput("BARRIEROFFSET"));
          container.setAttribute("has_second_barrier", !!this.getInput("SECONDBARRIEROFFSET"));
          container.setAttribute("has_prediction", !!this.getInput("PREDICTION"));
          return container;
        },
        restricted_parents: ["trade_definition"],
        getRequiredValueInputs() {
          return {
            AMOUNT: (input) => {
              const input_number = Number(input);
              const max_payout = this.amount_limits?.max_payout;
              const min_stake = this.amount_limits?.min_stake;
              if (min_stake && input_number < min_stake) {
                this.error_message = getLocalizedErrorMessage("InvalidMinStake", {
                  param1: min_stake
                });
                return input_number < min_stake;
              }
              if (max_payout && input_number > max_payout) {
                this.error_message = getLocalizedErrorMessage("PayoutLimitExceeded", {
                  param1: max_payout
                });
                return input_number > max_payout;
              }
              this.error_message = getLocalizedErrorMessage("AmountValidationFailed");
              return !isNaN(input_number) && input_number <= 0;
            },
            DURATION: (input) => {
              const input_number = Number(input);
              if (isNaN(input_number) || !this.durations.length) {
                return false;
              }
              const duration = this.durations.find((d) => d.unit === this.selected_duration);
              if (duration) {
                const { min: min2, max: max2 } = duration;
                const is_valid_duration = input_number >= min2 && input_number <= max2;
                if (min2 === max2) {
                  this.error_message = localize(
                    "Duration value is not allowed. To run the bot, please enter {{min}}.",
                    { min: min2 }
                  );
                } else {
                  this.error_message = localize(
                    "Duration value is not allowed. To run the bot, please enter a value between {{min}} to {{max}}.",
                    { min: min2, max: max2 }
                  );
                }
                return !is_valid_duration;
              }
              return false;
            }
          };
        }
      };
      window.Blockly.Blocks.trade_definition_tradeoptions_payout = window.Blockly.Blocks.trade_definition_tradeoptions;
      window.Blockly.JavaScript.javascriptGenerator.forBlock.trade_definition_tradeoptions = (block) => {
        const amount = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "AMOUNT",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC
        ) || "0";
        const { currency } = DBotStore.instance.client;
        const duration_type = block.getFieldValue("DURATIONTYPE_LIST") || "0";
        const duration_value = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "DURATION",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC
        ) || "0";
        const decimal_places = getDecimalPlaces(currency);
        const stake_amount = `+(Number(${amount}).toFixed(${decimal_places}))`;
        const getBarrierValue = (barrier_offset_type, value) => {
          if (/^(\d+(\.\d+)?)$/.test(value)) {
            return barrier_offset_type === "absolute" ? `'${value}'` : `'${barrier_offset_type}${value}'`;
          }
          return barrier_offset_type === "absolute" ? value : `'${barrier_offset_type}' + ${value}`;
        };
        let prediction_value, barrier_offset_value, second_barrier_offset_value;
        if (block.getInput("PREDICTION")) {
          prediction_value = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
            block,
            "PREDICTION",
            window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC
          ) || "-1";
        }
        if (block.getInput("BARRIEROFFSET")) {
          const barrier_offset_type = block.getFieldValue("BARRIEROFFSETTYPE_LIST");
          const value = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
            block,
            "BARRIEROFFSET",
            window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC
          ) || "0";
          barrier_offset_value = getBarrierValue(barrier_offset_type, value);
        }
        if (block.getInput("SECONDBARRIEROFFSET")) {
          const barrier_offset_type = block.getFieldValue("SECONDBARRIEROFFSETTYPE_LIST");
          const value = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
            block,
            "SECONDBARRIEROFFSET",
            window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC
          ) || "0";
          second_barrier_offset_value = getBarrierValue(barrier_offset_type, value);
        }
        const code = `
        Bot.start({
            limitations        : BinaryBotPrivateLimitations,
            duration           : ${duration_value},
            duration_unit      : '${duration_type}',
            currency           : '${currency}',
            amount             : ${stake_amount},
            prediction         : ${prediction_value || "undefined"},
            barrierOffset      : ${barrier_offset_value || "undefined"},
            secondBarrierOffset: ${second_barrier_offset_value || "undefined"},
            basis              : '${block.type === "trade_definition_tradeoptions" ? "stake" : "payout"}',
        });
        BinaryBotPrivateHasCalledTradeOptions = true;
    `;
        return code;
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.trade_definition_tradeoptions_payout = window.Blockly.JavaScript.javascriptGenerator.forBlock.trade_definition_tradeoptions;
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Trade Definition/trade_definition_multiplier.js
  var init_trade_definition_multiplier = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Trade Definition/trade_definition_multiplier.js"() {
      init_shared();
      init_backend_errors();
      init_translations();
      init_config();
      init_api_helpers();
      init_dbot_store_shim();
      init_utils();
      window.Blockly.Blocks.trade_definition_multiplier = {
        init() {
          this.jsonInit(this.definition());
          this.setNextStatement(false);
        },
        definition() {
          return {
            message0: localize("Multiplier: {{ multiplier }}", {
              multiplier: "%1"
            }),
            message1: `${localize("Stake")}: %1 %2 %3`,
            message2: "%1",
            message3: "%1",
            args0: [
              {
                type: "field_dropdown",
                name: "MULTIPLIERTYPE_LIST",
                options: [["", ""]]
              }
            ],
            args1: [
              {
                type: "field_label",
                name: "CURRENCY_LIST",
                text: getCurrencyDisplayCode(config().lists.CURRENCY[0])
              },
              {
                type: "input_value",
                name: "AMOUNT",
                check: "Number"
              },
              {
                type: "field_label",
                name: "AMOUNT_LIMITS",
                text: ""
              }
            ],
            args2: [
              {
                type: "input_dummy"
              }
            ],
            args3: [
              {
                type: "input_statement",
                name: "MULTIPLIER_PARAMS"
              }
            ],
            inputsInline: true,
            colour: window.Blockly.Colours.Special1.colour,
            colourSecondary: window.Blockly.Colours.Special1.colourSecondary,
            colourTertiary: window.Blockly.Colours.Special1.colourTertiary,
            previousStatement: null,
            nextStatement: null,
            tooltip: localize("Define your trade options such as multiplier and stake."),
            category: window.Blockly.Categories.Trade_Definition
          };
        },
        meta() {
          return {
            display_name: localize("Multiplier trade options"),
            description: localize(
              "Define your trade options such as multiplier and stake. This block can only be used with the multipliers trade type. If you select another trade type, this block will be replaced with the Trade options block."
            )
          };
        },
        validateBlocksInStatement() {
          const blocks_in_multiplier = this.getBlocksInStatement("MULTIPLIER_PARAMS");
          if (blocks_in_multiplier.length > 0) {
            const block_types_in_multiplier = [];
            blocks_in_multiplier.forEach((block) => {
              block_types_in_multiplier.push(block.type);
              const block_multiplier_take_profit = block.childValueToCode("multiplier_take_profit", "AMOUNT");
              const block_multiplier_stop_loss = block.childValueToCode("multiplier_stop_loss", "AMOUNT");
              if (block_multiplier_take_profit <= 0 || block_multiplier_stop_loss <= 0) {
                block.setDisabled(true);
              }
              if (block.type === "multiplier_stop_loss" && block_multiplier_stop_loss > 0) {
                block.setDisabled(false);
              }
              if (block.type === "multiplier_take_profit" && block_multiplier_take_profit > 0) {
                block.setDisabled(false);
              }
              if (!/^multiplier_.+$/.test(block.type) || new Set(block_types_in_multiplier).size !== block_types_in_multiplier.length) {
                runIrreversibleEvents(() => {
                  block.unplug(true);
                });
              }
            });
          }
        },
        onchange(event) {
          if (!this.workspace || window.Blockly.derivWorkspace.isFlyoutVisible || this.workspace.isDragging()) {
            return;
          }
          const trade_definition_block = this.workspace.getAllBlocks(true).find((block) => block.type === "trade_definition");
          if (!trade_definition_block) {
            return;
          }
          const market_block = trade_definition_block.getChildByType("trade_definition_market");
          const trade_type_block = trade_definition_block.getChildByType("trade_definition_tradetype");
          if (!market_block || !trade_type_block) {
            return;
          }
          this.selected_symbol = market_block.getFieldValue("SYMBOL_LIST");
          this.selected_market = market_block.getFieldValue("MARKET_LIST");
          this.selected_trade_type_category = trade_type_block.getFieldValue("TRADETYPECAT_LIST");
          this.selected_trade_type = trade_type_block.getFieldValue("TRADETYPE_LIST");
          this.selected_multiplier = this.getFieldValue("MULTIPLIERTYPE_LIST");
          const is_load_event = /^dbot-load/.test(event.group);
          if (event.type === window.Blockly.Events.BLOCK_CREATE && event.ids.includes(this.id)) {
            setCurrency(this);
            if (is_load_event) {
              this.updateMultiplierInput(false);
            } else {
              this.updateMultiplierInput(true);
            }
            return;
          }
          if (event.type === window.Blockly.Events.BLOCK_CHANGE) {
            setCurrency(this);
            this.validateBlocksInStatement();
            if (is_load_event) {
              if (event.name === "TRADETYPE_LIST") {
                this.updateMultiplierInput(false);
              }
            } else if (event.blockId === this.id) {
              switch (event.name) {
                case "MULTIPLIERTYPE_LIST": {
                  this.updateMultiplierInput(false);
                  break;
                }
                default:
                  break;
              }
            } else if (event.name === "SYMBOL_LIST" || event.name === "TRADETYPE_LIST") {
              this.updateMultiplierInput(true);
            }
            return;
          }
          if (event.type === window.Blockly.Events.BLOCK_DRAG && !event.isStart) {
            this.validateBlocksInStatement();
            if (event.blockId === this.id) {
              if (!this.selected_multiplier) {
                const fake_creation_event = new window.Blockly.Events.BlockCreate(this);
                fake_creation_event.recordUndo = false;
                window.Blockly.Events.fire(fake_creation_event);
              } else if (this.selected_trade_type !== "multiplier") {
                this.updateMultiplierInput(true);
              }
            }
          }
        },
        updateMultiplierInput(should_use_default_value) {
          const { contracts_for } = api_helpers_default?.instance ?? {};
          if (this.selected_trade_type === "multiplier") {
            contracts_for?.getMultiplierRange?.(this.selected_symbol, this.selected_trade_type)?.then((multiplier_range) => {
              if (multiplier_range && multiplier_range.length > 0) {
                const multiplier_list_dropdown = this.getField("MULTIPLIERTYPE_LIST");
                const multiplier_options = multiplier_range.map((value) => {
                  const option = value.toString();
                  return [option, option];
                });
                multiplier_list_dropdown?.updateOptions(multiplier_options, {
                  default_value: should_use_default_value ? void 0 : multiplier_list_dropdown.getValue()
                });
              } else {
                console.warn("DEBUG: No multiplier range available, using fallback options");
                const multiplier_list_dropdown = this.getField("MULTIPLIERTYPE_LIST");
                const fallback_options = [
                  ["100", "100"],
                  ["200", "200"],
                  ["300", "300"],
                  ["500", "500"],
                  ["1000", "1000"]
                ];
                multiplier_list_dropdown?.updateOptions(fallback_options, {
                  default_value: should_use_default_value ? void 0 : multiplier_list_dropdown.getValue()
                });
              }
            })?.catch((error) => {
              console.error("DEBUG: Error getting multiplier range:", error);
              const multiplier_list_dropdown = this.getField("MULTIPLIERTYPE_LIST");
              const fallback_options = [
                ["100", "100"],
                ["200", "200"],
                ["300", "300"],
                ["500", "500"],
                ["1000", "1000"]
              ];
              multiplier_list_dropdown?.updateOptions(fallback_options, {
                default_value: should_use_default_value ? void 0 : multiplier_list_dropdown.getValue()
              });
            });
            return;
          }
          if (this.isDescendantOf("trade_definition")) {
            runIrreversibleEvents(() => {
              runGroupedEvents(false, () => {
                const {
                  workspaces: {
                    indentWorkspace: { x, y }
                  }
                } = config();
                const duration_block = this.workspace.newBlock("trade_definition_tradeoptions");
                duration_block.initSvg();
                duration_block.renderEfficiently();
                const trade_definition_block = this.workspace.getTradeDefinitionBlock();
                const parent_connection = trade_definition_block.getInput("SUBMARKET").connection;
                const child_connection = duration_block.previousConnection;
                parent_connection.connect(child_connection);
                const duration_input = duration_block.getInput("DURATION");
                const duration_shadow_block = this.workspace.newBlock("math_number_positive");
                duration_shadow_block.setShadow(true);
                duration_shadow_block.outputConnection.connect(duration_input.connection);
                duration_shadow_block.initSvg();
                duration_shadow_block.renderEfficiently();
                const stake_input = duration_block.getInput("AMOUNT");
                const stake_shadow_block = this.workspace.newBlock("math_number_positive");
                stake_shadow_block.setShadow(true);
                stake_shadow_block.setFieldValue(1, "NUM");
                stake_shadow_block.outputConnection.connect(stake_input.connection);
                stake_shadow_block.initSvg();
                stake_shadow_block.renderEfficiently();
                this.dispose();
                window.Blockly.getMainWorkspace().cleanUp(x, y);
              });
            });
          }
        },
        customContextMenu(menu) {
          const menu_items = [localize("Enable Block"), localize("Disable Block")];
          excludeOptionFromContextMenu(menu, menu_items);
          modifyContextMenu(menu);
        },
        restricted_parents: ["trade_definition"],
        getRequiredValueInputs() {
          return {
            AMOUNT: (input) => {
              const input_number = Number(input);
              const max_payout = this.amount_limits?.max_payout;
              const min_stake = this.amount_limits?.min_stake;
              if (min_stake && input_number < min_stake) {
                this.error_message = getLocalizedErrorMessage("InvalidMinStake", {
                  param1: min_stake
                });
                return input_number < min_stake;
              }
              if (max_payout && input_number > max_payout) {
                this.error_message = getLocalizedErrorMessage("PayoutLimitExceeded", {
                  param1: max_payout
                });
                return input_number > max_payout;
              }
              this.error_message = getLocalizedErrorMessage("AmountValidationFailed");
              return !isNaN(input_number) && input_number <= 0;
            }
          };
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.trade_definition_multiplier = (block) => {
        const amount = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "AMOUNT",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC
        ) || "0";
        const { currency } = DBotStore.instance.client;
        const { setContractUpdateConfig } = DBotStore.instance;
        const multiplier_value = block.getFieldValue("MULTIPLIERTYPE_LIST") || "1";
        const stop_loss = !block.getChildByType("multiplier_stop_loss")?.disabled && block.childValueToCode("multiplier_stop_loss", "AMOUNT");
        const take_profit = !block.getChildByType("multiplier_take_profit")?.disabled && block.childValueToCode("multiplier_take_profit", "AMOUNT");
        const limit_order = {
          stop_loss: stop_loss ? `+(Number(${stop_loss}).toFixed(2))` : void 0,
          take_profit: take_profit ? `+(Number(${take_profit}).toFixed(2))` : void 0
        };
        setContractUpdateConfig(take_profit, stop_loss);
        const decimal_places = getDecimalPlaces(currency);
        const stake_amount = `+(Number(${amount}).toFixed(${decimal_places}))`;
        const code = `
        Bot.start({
            limitations        : BinaryBotPrivateLimitations,
            multiplier         : ${multiplier_value},
            currency           : '${currency}',
            amount             : ${stake_amount},
            limit_order        : ${JSON.stringify(limit_order)},
            basis              : 'stake',
            stop_loss          : ${limit_order.stop_loss},
            take_profit        : ${limit_order.take_profit},
        });
        BinaryBotPrivateHasCalledTradeOptions = true;
    `;
        return code;
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Trade Definition/multiplier_stop_loss.js
  var description;
  var init_multiplier_stop_loss = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Trade Definition/multiplier_stop_loss.js"() {
      init_shared();
      init_translations();
      init_config();
      init_utils();
      description = localize(
        "Your contract is closed automatically when your loss is more than or equals to this amount. This block can only be used with the multipliers trade type."
      );
      window.Blockly.Blocks.multiplier_stop_loss = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("Stop Loss: {{ currency }} {{ stop_loss }}", {
              currency: "%1",
              stop_loss: "%2"
            }),
            args0: [
              {
                type: "field_label",
                name: "CURRENCY_LIST",
                text: getCurrencyDisplayCode(config().lists.CURRENCY[0])
              },
              {
                type: "input_value",
                name: "AMOUNT",
                check: "Number"
              }
            ],
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            previousStatement: null,
            nextStatement: null,
            tooltip: description,
            category: window.Blockly.Categories.Trade_Definition
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        meta() {
          return {
            display_name: localize("Stop loss (Multiplier)"),
            description
          };
        },
        onchange(event) {
          if (!this.workspace || window.Blockly.derivWorkspace.isFlyoutVisible || this.workspace.isDragging()) {
            return;
          }
          if (event.type === window.Blockly.Events.BLOCK_CREATE && event.ids.includes(this.id) || event.type === window.Blockly.Events.BLOCK_DRAG && !event.isStart || event.type === window.Blockly.Events.BLOCK_CHANGE && !event.isStart) {
            setCurrency(this);
          }
        },
        restricted_parents: ["trade_definition_multiplier"],
        getRequiredValueInputs() {
          const field_input = this.getInput("AMOUNT");
          if (field_input.connection.targetBlock()) {
            return {
              AMOUNT: (input) => {
                const input_number = Number(input);
                this.error_message = localize("Stop loss must be a positive number.");
                return !isNaN(input_number) && input_number <= 0;
              }
            };
          }
          return {};
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.multiplier_stop_loss = () => {
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Trade Definition/accumulator_take_profit.js
  var description2;
  var init_accumulator_take_profit = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Trade Definition/accumulator_take_profit.js"() {
      init_shared();
      init_translations();
      init_config();
      init_utils();
      description2 = localize(
        "Your contract is closed automatically when your profit is more than or equals to this amount. This block can only be used with the accumulator trade type."
      );
      window.Blockly.Blocks.accumulator_take_profit = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("Take Profit: {{ currency }} {{ take_profit }}", {
              currency: "%1",
              take_profit: "%2"
            }),
            args0: [
              {
                type: "field_label",
                name: "CURRENCY_LIST",
                text: getCurrencyDisplayCode(config().lists.CURRENCY[0])
              },
              {
                type: "input_value",
                name: "AMOUNT",
                check: "Number"
              }
            ],
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            previousStatement: null,
            nextStatement: null,
            tooltip: description2,
            category: window.Blockly.Categories.Trade_Definition
          };
        },
        meta() {
          return {
            display_name: localize("Take Profit (Accumulator)"),
            description: description2
          };
        },
        onchange(event) {
          if (!this.workspace || window.Blockly.derivWorkspace.isFlyoutVisible || this.workspace.isDragging()) {
            return;
          }
          if (event.type === window.Blockly.Events.BLOCK_CREATE && event.ids.includes(this.id) || event.type === window.Blockly.Events.BLOCK_DRAG && !event.isStart || event.type === window.Blockly.Events.BLOCK_CHANGE && !event.isStart) {
            setCurrency(this);
          }
        },
        customContextMenu(menu) {
          const menu_items = [localize("Enable Block"), localize("Disable Block")];
          excludeOptionFromContextMenu(menu, menu_items);
          modifyContextMenu(menu);
        },
        restricted_parents: ["trade_definition_accumulator"],
        getRequiredValueInputs() {
          const field_input = this.getInput("AMOUNT");
          if (field_input.connection.targetBlock()) {
            return {
              AMOUNT: (input) => {
                const input_number = Number(input);
                this.error_message = localize("Take profit must be a positive number.");
                return !isNaN(input_number) && input_number <= 0;
              }
            };
          }
          return {};
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.accumulator_take_profit = () => {
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Trade Definition/multiplier_take_profit.js
  var description3;
  var init_multiplier_take_profit = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Trade Definition/multiplier_take_profit.js"() {
      init_shared();
      init_translations();
      init_config();
      init_utils();
      description3 = localize(
        "Your contract is closed automatically when your profit is more than or equals to this amount. This block can only be used with the multipliers trade type."
      );
      window.Blockly.Blocks.multiplier_take_profit = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("Take Profit: {{ currency }} {{ take_profit }}", {
              currency: "%1",
              take_profit: "%2"
            }),
            args0: [
              {
                type: "field_label",
                name: "CURRENCY_LIST",
                text: getCurrencyDisplayCode(config().lists.CURRENCY[0])
              },
              {
                type: "input_value",
                name: "AMOUNT",
                check: "Number"
              }
            ],
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            previousStatement: null,
            nextStatement: null,
            tooltip: description3,
            category: window.Blockly.Categories.Trade_Definition
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        meta() {
          return {
            display_name: localize("Take Profit (Multiplier)"),
            description: description3
          };
        },
        onchange(event) {
          if (!this.workspace || window.Blockly.derivWorkspace.isFlyoutVisible || this.workspace.isDragging()) {
            return;
          }
          if (event.type === window.Blockly.Events.BLOCK_CREATE && event.ids.includes(this.id) || event.type === window.Blockly.Events.BLOCK_DRAG && !event.isStart || event.type === window.Blockly.Events.BLOCK_CHANGE && !event.isStart) {
            setCurrency(this);
          }
        },
        restricted_parents: ["trade_definition_multiplier"],
        getRequiredValueInputs() {
          const field_input = this.getInput("AMOUNT");
          if (field_input.connection.targetBlock()) {
            return {
              AMOUNT: (input) => {
                const input_number = Number(input);
                this.error_message = localize("Take profit must be a positive number.");
                return !isNaN(input_number) && input_number <= 0;
              }
            };
          }
          return {};
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.multiplier_take_profit = () => {
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Trade Definition/trade_definition_accumulator.js
  var init_trade_definition_accumulator = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Trade Definition/trade_definition_accumulator.js"() {
      init_shared();
      init_backend_errors();
      init_translations();
      init_config();
      init_api_helpers();
      init_empty();
      init_dbot_store_shim();
      init_utils();
      window.Blockly.Blocks.trade_definition_accumulator = {
        init() {
          this.jsonInit(this.definition());
          this.setNextStatement(false);
        },
        definition() {
          return {
            message0: localize("Growth Rate: {{ accumulator }}", {
              accumulator: "%1"
            }),
            message1: `${localize("Stake")}: %1 %2`,
            message2: "%1",
            message3: "%1",
            args0: [
              {
                type: "field_dropdown",
                name: "GROWTHRATE_LIST",
                options: [["", ""]]
              }
            ],
            args1: [
              {
                type: "field_label",
                name: "CURRENCY_LIST",
                text: getCurrencyDisplayCode(config().lists.CURRENCY[0])
              },
              {
                type: "input_value",
                name: "AMOUNT",
                check: "Number"
              }
            ],
            args2: [
              {
                type: "input_dummy"
              }
            ],
            args3: [
              {
                type: "input_statement",
                name: "ACCUMULATOR_PARAMS"
              }
            ],
            colour: window.Blockly.Colours.Special1.colour,
            colourSecondary: window.Blockly.Colours.Special1.colourSecondary,
            colourTertiary: window.Blockly.Colours.Special1.colourTertiary,
            previousStatement: null,
            nextStatement: null,
            tooltip: localize("Define your trade options, such as accumulator and stake."),
            category: window.Blockly.Categories.Trade_Definition
          };
        },
        meta() {
          return {
            display_name: localize("Accumulator trade options"),
            description: localize(
              "Define your trade options such as accumulator and stake. This block can only be used with the accumulator trade type. If you select another trade type, this block will be replaced with the Trade options block."
            )
          };
        },
        validateBlocksInStatement() {
          const blocks_in_accumulator = this.getBlocksInStatement("ACCUMULATOR_PARAMS");
          if (blocks_in_accumulator.length > 0) {
            const block_types_in_accumulator = [];
            blocks_in_accumulator.forEach((block) => {
              block_types_in_accumulator.push(block.type);
              const block_accumulator_take_profit = block.childValueToCode("accumulator_take_profit", "AMOUNT");
              if (block_accumulator_take_profit <= 0) {
                block.setDisabled(true);
              }
              if (block.type === "accumulator_take_profit" && block_accumulator_take_profit > 0) {
                block.setDisabled(false);
              }
              if (!/^accumulator_.+$/.test(block.type) || new Set(block_types_in_accumulator).size !== block_types_in_accumulator.length) {
                runIrreversibleEvents(() => {
                  block.unplug(true);
                });
              }
            });
          }
        },
        onchange(event) {
          if (!this.workspace || window.Blockly.derivWorkspace.isFlyoutVisible || this.workspace.isDragging()) {
            return;
          }
          handleProposalRequestForAccumulators(this);
          const trade_definition_block = this.workspace.getAllBlocks(true).find((block) => block.type === "trade_definition");
          if (!trade_definition_block) {
            return;
          }
          const market_block = trade_definition_block.getChildByType("trade_definition_market");
          const trade_type_block = trade_definition_block.getChildByType("trade_definition_tradetype");
          if (!market_block || !trade_type_block) {
            return;
          }
          this.selected_symbol = market_block.getFieldValue("SYMBOL_LIST");
          this.selected_market = market_block.getFieldValue("MARKET_LIST");
          this.selected_trade_type_category = trade_type_block.getFieldValue("TRADETYPECAT_LIST");
          this.selected_trade_type = trade_type_block.getFieldValue("TRADETYPE_LIST");
          this.selected_growth_rate = this.getFieldValue("GROWTHRATE_LIST");
          const is_load_event = /^dbot-load/.test(event.group);
          if (event.type === window.Blockly.Events.BLOCK_CREATE && event.ids.includes(this.id)) {
            setCurrency(this);
            if (is_load_event) {
              this.updateAccumulatorInput(false);
            } else {
              this.updateAccumulatorInput(true);
            }
            return;
          }
          if (event.type === window.Blockly.Events.BLOCK_CHANGE) {
            setCurrency(this);
            this.validateBlocksInStatement();
            if (is_load_event) {
              if (event.name === "TRADETYPE_LIST") {
                this.updateAccumulatorInput(false);
              }
            } else if (event.blockId === this.id) {
              switch (event.name) {
                case "GROWTHRATE_LIST": {
                  this.updateAccumulatorInput(false);
                  break;
                }
                default:
                  break;
              }
            } else if (event.name === "SYMBOL_LIST" || event.name === "TRADETYPE_LIST") {
              this.updateAccumulatorInput(true);
            }
            return;
          }
          if (event.type === window.Blockly.Events.BLOCK_DRAG && !event.isStart) {
            this.validateBlocksInStatement();
            if (event.blockId === this.id) {
              if (!this.selected_growth_rate) {
                const fake_creation_event = new window.Blockly.Events.Create(this);
                fake_creation_event.recordUndo = false;
                window.Blockly.Events.fire(fake_creation_event);
              } else if (this.selected_trade_type !== "accumulator") {
                this.updateAccumulatorInput(true);
              }
            }
          }
        },
        updateAmountLimits: window.Blockly.Blocks.trade_definition_tradeoptions.updateAmountLimits,
        updateAccumulatorInput(should_use_default_value) {
          const { contracts_for } = api_helpers_default?.instance ?? {};
          if (this.selected_trade_type === "accumulator") {
            contracts_for?.getAccumulationRange?.()?.then((accumulator_range) => {
              if (accumulator_range.length > 0) {
                const accumulator_list_dropdown = this.getField("GROWTHRATE_LIST");
                const accumulator_options = accumulator_range.map((value) => {
                  const option = value.toString();
                  return [`${option * 100}%`, option];
                });
                accumulator_list_dropdown?.updateOptions(accumulator_options, {
                  default_value: should_use_default_value ? void 0 : accumulator_list_dropdown.getValue()
                });
              }
            });
            return;
          }
          if (this.isDescendantOf("trade_definition")) {
            runIrreversibleEvents(() => {
              runGroupedEvents(false, () => {
                const {
                  workspaces: {
                    indentWorkspace: { x, y }
                  }
                } = config();
                const duration_block = this.workspace.newBlock("trade_definition_tradeoptions");
                duration_block.initSvg();
                duration_block.render();
                const trade_definition_block = this.workspace.getTradeDefinitionBlock();
                const parent_connection = trade_definition_block.getInput("SUBMARKET").connection;
                const child_connection = duration_block.previousConnection;
                parent_connection.connect(child_connection);
                const duration_input = duration_block.getInput("DURATION");
                const duration_shadow_block = this.workspace.newBlock("math_number_positive");
                duration_shadow_block.setShadow(true);
                duration_shadow_block.outputConnection.connect(duration_input.connection);
                duration_shadow_block.initSvg();
                duration_shadow_block.render(true);
                const stake_input = duration_block.getInput("AMOUNT");
                const stake_shadow_block = this.workspace.newBlock("math_number_positive");
                stake_shadow_block.setShadow(true);
                stake_shadow_block.setFieldValue(1, "NUM");
                stake_shadow_block.outputConnection.connect(stake_input.connection);
                stake_shadow_block.initSvg();
                stake_shadow_block.render(true);
                this.dispose();
                window.Blockly.derivWorkspace.cleanUp(x, y);
              });
            });
          }
        },
        customContextMenu(menu) {
          const menu_items = [localize("Enable Block"), localize("Disable Block")];
          excludeOptionFromContextMenu(menu, menu_items);
          modifyContextMenu(menu);
        },
        restricted_parents: ["trade_definition"],
        getRequiredValueInputs() {
          return {
            AMOUNT: (input) => {
              const input_number = Number(input);
              const max_payout = this.amount_limits?.max_payout;
              const min_stake = this.amount_limits?.min_stake;
              if (min_stake && input_number < min_stake) {
                this.error_message = getLocalizedErrorMessage("InvalidMinStake", {
                  param1: min_stake
                });
                return input_number < min_stake;
              }
              if (max_payout && input_number > max_payout) {
                this.error_message = getLocalizedErrorMessage("PayoutLimitExceeded", {
                  param1: max_payout
                });
                return input_number > max_payout;
              }
              this.error_message = getLocalizedErrorMessage("AmountValidationFailed");
              return !isNaN(input_number) && input_number <= 0;
            }
          };
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.trade_definition_accumulator = (block) => {
        const amount = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "AMOUNT",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC
        ) || "0";
        const { currency } = DBotStore.instance.client;
        const { setContractUpdateConfig } = DBotStore.instance;
        const growth_rate = block.getFieldValue("GROWTHRATE_LIST") || "1";
        const take_profit = !block.getChildByType("accumulator_take_profit")?.disabled && block.childValueToCode("accumulator_take_profit", "AMOUNT");
        const limit_order = {
          take_profit: take_profit ? `+(Number(${take_profit}).toFixed(2))` : void 0
        };
        setContractUpdateConfig(void 0, take_profit);
        const decimal_places = getDecimalPlaces(currency);
        const stake_amount = `+(Number(${amount}).toFixed(${decimal_places}))`;
        const code = `
        Bot.start({
            limitations        : BinaryBotPrivateLimitations,
            growth_rate        : ${growth_rate},
            currency           : '${currency}',
            amount             : ${stake_amount},
            limit_order        : ${JSON.stringify(limit_order)},
            basis              : 'stake',
            take_profit          : ${limit_order.take_profit},
        });
        BinaryBotPrivateHasCalledTradeOptions = true;
    `;
        return code;
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Trade Definition/index.js
  var init_Trade_Definition = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Binary/Trade Definition/index.js"() {
      init_trade_definition();
      init_trade_definition_market();
      init_trade_definition_tradetype();
      init_trade_definition_contracttype();
      init_trade_definition_candleinterval();
      init_trade_definition_restartbuysell();
      init_trade_definition_restartonerror();
      init_trade_definition_tradeoptions();
      init_trade_definition_multiplier();
      init_multiplier_stop_loss();
      init_accumulator_take_profit();
      init_multiplier_take_profit();
      init_trade_definition_accumulator();
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Logic/logic_compare.js
  var init_logic_compare = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Logic/logic_compare.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.logic_compare = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: "%1 %2 %3",
            args0: [
              {
                type: "input_value",
                name: "A"
              },
              {
                type: "field_dropdown",
                name: "OP",
                options: [
                  ["=", "EQ"],
                  ["\u2260", "NEQ"],
                  ["\u200F<", "LT"],
                  ["\u200F\u2264", "LTE"],
                  ["\u200F>", "GT"],
                  ["\u200F\u2265", "GTE"]
                ]
              },
              {
                type: "input_value",
                name: "B"
              }
            ],
            inputsInline: true,
            output: "Boolean",
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("Compares two values"),
            category: window.Blockly.Categories.Logic
          };
        },
        meta() {
          return {
            display_name: localize("Compare"),
            description: localize("This block compares two values and is used to build a conditional structure.")
          };
        },
        getRequiredValueInputs() {
          return {
            A: null,
            B: null
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.logic_compare = (block) => {
        const operatorMapping = {
          EQ: "==",
          NEQ: "!=",
          LT: "<",
          LTE: "<=",
          GT: ">",
          GTE: ">="
        };
        const operator = operatorMapping[block.getFieldValue("OP") || "EQ"];
        const order = ["==", "!="].includes(operator) ? window.Blockly.JavaScript.javascriptGenerator.ORDER_EQUALITY : window.Blockly.JavaScript.javascriptGenerator.ORDER_RELATIONAL;
        const argument0 = window.Blockly.JavaScript.javascriptGenerator.valueToCode(block, "A", order) || "false";
        const argument1 = window.Blockly.JavaScript.javascriptGenerator.valueToCode(block, "B", order) || "false";
        const code = `${argument0} ${operator} ${argument1}`;
        return [code, order];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Logic/controls_if.js
  var init_controls_if = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Logic/controls_if.js"() {
      init_translations();
      init_utils();
      init_block_images();
      window.Blockly.Blocks.controls_if = {
        init() {
          this.value_connections = [null];
          this.statement_connections = [null];
          this.else_statement_connection = null;
          this.else_if_count = 0;
          this.else_count = 0;
          this.jsonInit(this.definition());
          this.updateShape();
        },
        definition() {
          return {
            message0: localize("if {{ condition }} then", { condition: "%1" }),
            message1: "%1",
            message2: "%1",
            args0: [
              {
                type: "input_value",
                name: "IF0",
                check: "Boolean"
              }
            ],
            args1: [
              {
                type: "field_image",
                src: " ",
                // this is here to add extra padding
                width: 150,
                height: 1
              }
            ],
            args2: [
              {
                type: "input_statement",
                name: "DO0"
              }
            ],
            inputsInline: true,
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            previousStatement: null,
            nextStatement: null,
            tooltip: localize("Conditional block"),
            category: window.Blockly.Categories.Logic
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        meta() {
          return {
            display_name: localize("Conditional block"),
            description: localize(
              "This block evaluates a statement and will perform an action only when the statement is true."
            )
          };
        },
        /**
         * Create XML to represent the number of else-if and else inputs.
         * @return {Element} XML storage element.
         * @this window.Blockly.Block
         */
        mutationToDom() {
          const container = document.createElement("mutation");
          if (this.else_if_count) {
            container.setAttribute("elseif", this.else_if_count);
          }
          if (this.else_count) {
            container.setAttribute("else", 1);
          }
          return container;
        },
        /**
         * Parse XML to restore the else-if and else inputs.
         * @param {!Element} xmlElement XML storage element.
         * @this window.Blockly.Block
         */
        domToMutation(xmlElement) {
          this.else_if_count = parseInt(xmlElement.getAttribute("elseif")) || 0;
          this.else_count = parseInt(xmlElement.getAttribute("else")) || 0;
          this.rebuildShape();
        },
        rebuildShape() {
          const value_connections = [null];
          const statement_connections = [null];
          const else_statement_connection = this.getInput("ELSE")?.connection?.targetConnection || null;
          let i = 1;
          while (true) {
            const input_names = this.getIfInputNames(i);
            const if_input = this.getInput(input_names.IF);
            if (!if_input) {
              break;
            }
            const do_input = this.getInput(input_names.DO);
            value_connections.push(if_input.connection.targetConnection);
            statement_connections.push(do_input.connection.targetConnection);
            i++;
          }
          this.updateShape();
          this.reconnectChildBlocks(value_connections, statement_connections, else_statement_connection);
        },
        update(updateFn) {
          window.Blockly.Events.setGroup(true);
          const old_mutation_dom = this.mutationToDom();
          const old_mutation = old_mutation_dom && window.Blockly.Xml.domToText(old_mutation_dom);
          const is_rendered = this.rendered;
          this.rendered = false;
          if (updateFn) {
            updateFn.call(this);
          }
          this.updateShape();
          this.rendered = is_rendered;
          this.initSvg();
          const group = window.Blockly.Events.getGroup();
          const new_mutation_dom = this.mutationToDom();
          const new_mutation = new_mutation_dom && window.Blockly.Xml.domToText(new_mutation_dom);
          if (old_mutation !== new_mutation) {
            const change_event = new window.Blockly.Events.BlockChange(
              this,
              "mutation",
              null,
              old_mutation,
              new_mutation
            );
            window.Blockly.Events.fire(change_event);
            setTimeout(() => {
              window.Blockly.Events.setGroup(group);
              this.bumpNeighbours();
              window.Blockly.Events.setGroup(false);
            }, window.Blockly.BUMP_DELAY);
          }
          if (this.rendered) {
            this.renderEfficiently();
          }
          window.Blockly.Events.setGroup(false);
        },
        updateShape() {
          if (this.getInput("ELSE")) {
            this.removeInput("ELSE");
            this.removeInput("ELSE_LABEL");
            this.removeInput("DELETE_ELSE");
          }
          let i = 1;
          while (true) {
            const input_names = this.getIfInputNames(i);
            if (!this.getInput(input_names.IF)) {
              break;
            }
            this.removeInput(input_names.IF_LABEL);
            this.removeInput(input_names.IF);
            this.removeInput(input_names.THEN_LABEL);
            this.removeInput(input_names.DELETE_ICON);
            this.removeInput(input_names.DO);
            i++;
          }
          if (this.getInput("MUTATOR")) {
            this.removeInput("MUTATOR");
          }
          for (let j = 1; j <= this.else_if_count; j++) {
            const input_names = this.getIfInputNames(j);
            const removeElseIf = () => this.modifyElseIf(false, j);
            this.appendDummyInput(input_names.IF_LABEL).appendField(localize("else if"));
            this.appendValueInput(input_names.IF).setCheck("Boolean");
            this.appendDummyInput(input_names.THEN_LABEL).appendField(localize("then"));
            this.appendDummyInput(input_names.DELETE_ICON).appendField(
              new window.Blockly.FieldImage(minusIconDark, 24, 24, "-", removeElseIf)
            );
            this.appendStatementInput(input_names.DO);
          }
          if (this.else_count > 0) {
            const removeElse = () => this.modifyElse(false);
            this.appendDummyInput("ELSE_LABEL").appendField(localize("else"));
            this.appendDummyInput("DELETE_ELSE").appendField(
              new window.Blockly.FieldImage(minusIconDark, 24, 24, "-", removeElse, false)
            );
            this.appendStatementInput("ELSE");
          }
          const addElseIf = () => {
            if (this.else_count === 0) {
              this.modifyElse(true);
            } else {
              if (!this.else_if_count) {
                this.else_if_count = 0;
              }
              this.modifyElseIf(true);
            }
          };
          this.appendDummyInput("MUTATOR").appendField(
            new window.Blockly.FieldImage(plusIconDark, 24, 24, "+", addElseIf, false)
          );
          this.initSvg();
          this.queueRender();
        },
        storeConnections(arg = 0) {
          this.value_connections = [null];
          this.statement_connections = [null];
          this.else_statement_connection = null;
          for (let i = 1; i <= this.else_if_count; i++) {
            if (arg !== i) {
              const input_names = this.getIfInputNames(i);
              this.value_connections.push(this.getInput(input_names.IF).connection.targetConnection);
              this.statement_connections.push(this.getInput(input_names.DO).connection.targetConnection);
            }
          }
          const else_input = this.getInput("ELSE");
          if (else_input) {
            this.else_statement_connection = else_input.connection.targetConnection;
          }
        },
        reconnectChildBlocks(opt_value_conns, opt_statement_conns, opt_else_statement_conns) {
          const value_connections = opt_value_conns ?? this.value_connections;
          const statement_connections = opt_statement_conns ?? this.statement_connections;
          const else_statement_connection = opt_else_statement_conns ?? this.else_statement_connection;
          for (let i = 1; i <= this.else_if_count; i++) {
            const input_names = this.getIfInputNames(i);
            const value_connection = value_connections[i];
            const statement_connection = statement_connections[i];
            const if_input = this.getInput(input_names.IF);
            if (value_connection && if_input) {
              if_input.connection.disconnect();
              if_input.connection.connect(value_connection);
            }
            const do_input = this.getInput(input_names.DO);
            if (statement_connection && do_input) {
              do_input.connection.disconnect();
              do_input.connection.connect(statement_connection);
            }
          }
          const else_input = this.getInput("ELSE");
          if (else_statement_connection && else_input) {
            else_input.connection.disconnect();
            else_input.connection.connect(else_statement_connection);
          }
        },
        modifyElse(is_add) {
          const update8 = () => {
            this.else_count += is_add ? 1 : -1;
          };
          this.storeConnections();
          this.update(update8);
          this.reconnectChildBlocks();
        },
        modifyElseIf(is_add, opt_idx) {
          this.storeConnections(opt_idx);
          const update8 = () => {
            this.else_if_count += is_add ? 1 : -1;
          };
          this.update(update8);
          this.reconnectChildBlocks();
        },
        getRequiredValueInputs() {
          const required_inputs = {};
          this.inputList.filter((input) => /^IF[0-9]*?$/.test(input.name)).forEach((input) => required_inputs[input.name] = null);
          return required_inputs;
        },
        getIfInputNames: (idx) => {
          return {
            IF_LABEL: `IF_LABEL${idx}`,
            IF: `IF${idx}`,
            THEN_LABEL: `THEN_LABEL${idx}`,
            DELETE_ICON: `DELETE_ICON${idx}`,
            DO: `DO${idx}`
          };
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.controls_if = (block) => {
        let n = 0;
        let code = "";
        do {
          const condition = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
            block,
            `IF${n}`,
            window.Blockly.JavaScript.javascriptGenerator.ORDER_NONE
          ) || "false";
          const keyword = n > 0 ? "else if" : "if";
          code += `
        ${keyword} (${condition}) {
            ${window.Blockly.JavaScript.javascriptGenerator.statementToCode(block, `DO${n}`)}
        }`;
          n++;
        } while (block.getInput(`IF${n}`));
        if (block.getInput("ELSE")) {
          code += `
        else {
            ${window.Blockly.JavaScript.javascriptGenerator.statementToCode(block, "ELSE")}
        }`;
        }
        return `${code}
`;
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Logic/logic_boolean.js
  var init_logic_boolean = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Logic/logic_boolean.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.logic_boolean = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: "%1",
            args0: [
              {
                type: "field_dropdown",
                name: "BOOL",
                options: [
                  ["true", "TRUE"],
                  ["false", "FALSE"]
                ]
              }
            ],
            inputsInline: true,
            output: "Boolean",
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("Returns either True or False"),
            category: window.Blockly.Categories.Logic
          };
        },
        meta() {
          return {
            display_name: localize("True-False"),
            description: localize("This is a single block that returns a boolean value, either true or false.")
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.logic_boolean = (block) => {
        const code = block.getFieldValue("BOOL") === "TRUE" ? "true" : "false";
        return [code, window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Logic/logic_operation.js
  var init_logic_operation = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Logic/logic_operation.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.logic_operation = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: "%1 %2 %3",
            args0: [
              {
                type: "input_value",
                name: "A"
              },
              {
                type: "field_dropdown",
                name: "OP",
                options: [
                  ["and", "AND"],
                  ["or", "OR"]
                ]
              },
              {
                type: "input_value",
                name: "B"
              }
            ],
            inputsInline: true,
            output: "Boolean",
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("Performs selected logic operation"),
            category: window.Blockly.Categories.Logic
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        meta() {
          return {
            display_name: localize("Logic operation"),
            description: localize('This block performs the "AND" or the "OR" logic operation.')
          };
        },
        getRequiredValueInputs() {
          return {
            A: null,
            B: null
          };
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.logic_operation = (block) => {
        const selectedOperator = block.getFieldValue("OP");
        let operator, order;
        if (selectedOperator === "AND") {
          operator = "&&";
          order = window.Blockly.JavaScript.javascriptGenerator.ORDER_LOGICAL_AND;
        } else if (selectedOperator === "OR") {
          operator = "||";
          order = window.Blockly.JavaScript.javascriptGenerator.ORDER_LOGICAL_OR;
        }
        const argument0 = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "A",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC
        ) || "false";
        const argument1 = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "B",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC
        ) || "false";
        const code = `${argument0} ${operator} ${argument1}`;
        return [code, order];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Logic/logic_null.js
  var init_logic_null = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Logic/logic_null.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.logic_null = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            inputsInline: true,
            message0: "null",
            output: null,
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("This block assigns a null value to an item or statement."),
            category: window.Blockly.Categories.Logic
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        meta() {
          return {
            display_name: localize("Null"),
            description: localize("This block assigns a null value to an item or statement.")
          };
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.logic_null = () => [
        "null",
        window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC
      ];
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Logic/logic_ternary.js
  var init_logic_ternary = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Logic/logic_ternary.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.logic_ternary = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("test {{ condition }}", { condition: "%1" }),
            message1: localize("if true {{ return_value }}", { return_value: "%1" }),
            message2: localize("if false {{ return_value }}", { return_value: "%1" }),
            args0: [
              {
                type: "input_value",
                name: "IF",
                check: "Boolean"
              }
            ],
            args1: [
              {
                type: "input_value",
                name: "THEN"
              }
            ],
            args2: [
              {
                type: "input_value",
                name: "ELSE"
              }
            ],
            inputsInline: true,
            output: null,
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize(
              "This block tests if a given value is true or false and returns \u201CTrue\u201D or \u201CFalse\u201D accordingly."
            ),
            category: window.Blockly.Categories.Logic
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        meta() {
          return {
            display_name: localize("Test value"),
            description: localize(
              "This block tests if a given value is true or false and returns \u201CTrue\u201D or \u201CFalse\u201D accordingly."
            )
          };
        },
        getRequiredValueInputs() {
          return {
            IF: null,
            THEN: null,
            ELSE: null
          };
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.logic_ternary = (block) => {
        const valueIf = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "IF",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_CONDITIONAL
        ) || "false";
        const valueThen = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "THEN",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_CONDITIONAL
        ) || "null";
        const valueElse = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "ELSE",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_CONDITIONAL
        ) || "null";
        const code = `(${valueIf} ? ${valueThen} : ${valueElse})`;
        return [code, window.Blockly.JavaScript.javascriptGenerator.ORDER_CONDITIONAL];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Logic/logic_negate.js
  var init_logic_negate = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Logic/logic_negate.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.logic_negate = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("not {{ boolean }}", { boolean: "%1" }),
            args0: [
              {
                type: "input_value",
                name: "BOOL"
              }
            ],
            inputsInline: true,
            output: "Boolean",
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("Converts a given True or False to the opposite value"),
            category: window.Blockly.Categories.Logic
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        meta() {
          return {
            display_name: localize("Logic negation"),
            description: localize("This block converts the boolean value (true or false) to its opposite.")
          };
        },
        getRequiredValueInputs() {
          return {
            BOOL: null
          };
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.logic_negate = (block) => {
        const order = window.Blockly.JavaScript.javascriptGenerator.ORDER_LOGICAL_NOT;
        const argument0 = window.Blockly.JavaScript.javascriptGenerator.valueToCode(block, "BOOL", order) || "true";
        const code = `!${argument0}`;
        return [code, order];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Logic/index.js
  var init_Logic = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Logic/index.js"() {
      init_logic_compare();
      init_controls_if();
      init_logic_boolean();
      init_logic_operation();
      init_logic_null();
      init_logic_ternary();
      init_logic_negate();
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Math/math_change.js
  var init_math_change = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Math/math_change.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.math_change = {
        /**
         * Initializes the block, in most cases this calls the jsonInit function, in some
         * cases it may add extra properties to the block object.
         * https://developers.google.com/blockly/reference/js/window.Blockly.Block#jsonInit
         */
        init() {
          this.jsonInit(this.definition());
        },
        /**
         * Block definitions describe how a block looks and behaves, including the text,
         * the colour, the shape, and what other blocks it can connect to. We've separated
         * the block definition from the init function so we can search through it.
         * https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks
         */
        definition() {
          return {
            message0: localize("change {{ variable }} by {{ number }}", {
              variable: "%1",
              number: "%2"
            }),
            args0: [
              {
                type: "field_variable",
                name: "VAR",
                variable: localize("item")
              },
              {
                type: "input_value",
                name: "DELTA",
                check: "Number"
              }
            ],
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            previousStatement: null,
            nextStatement: null,
            tooltip: localize("This block adds the given number to the selected variable"),
            category: window.Blockly.Categories.Mathematical
          };
        },
        /**
         * Meta returns an object with with properties that contain human readable strings,
         * these strings are used in the flyout help content, as well as used for searching
         * for specific blocks.
         */
        meta() {
          return {
            display_name: localize("Change variable"),
            description: localize("This block adds the given number to the selected variable.")
          };
        },
        getRequiredValueInputs() {
          return {
            DELTA: null
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.math_change = (block) => {
        const variable = block.getFieldValue("VAR");
        const argument0 = window.Blockly.JavaScript.variableDB_.getName(variable, window.Blockly.Variables.CATEGORY_NAME);
        const argument1 = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "DELTA",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_ADDITION
        ) || "0";
        const code = `${argument0} = (typeof ${argument0} === 'number' ? ${argument0} : 0) + ${argument1};`;
        return code;
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Math/math_constant.js
  var init_math_constant = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Math/math_constant.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.math_constant = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: "%1",
            args0: [
              {
                type: "field_dropdown",
                name: "CONSTANT",
                options: [
                  ["\u03C0", "PI"],
                  ["\u2107", "E"],
                  ["\u03D5", "GOLDEN_RATIO"],
                  ["sqrt(2)", "SQRT2"],
                  ["sqrt(\xBD)", "SQRT1_2"],
                  ["\u221E", "INFINITY"]
                ]
              }
            ],
            output: "Number",
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("This block gives you the selected constant values."),
            category: window.Blockly.Categories.Mathematical
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        meta() {
          return {
            display_name: localize("Mathematical constants"),
            description: localize("This block gives you the selected constant values.")
          };
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.math_constant = (block) => {
        const constant = block.getFieldValue("CONSTANT");
        let code, order;
        if (constant === "PI") {
          code = "Math.PI";
          order = window.Blockly.JavaScript.javascriptGenerator.ORDER_MEMBER;
        } else if (constant === "E") {
          code = "Math.E";
          order = window.Blockly.JavaScript.javascriptGenerator.ORDER_MEMBER;
        } else if (constant === "GOLDEN_RATIO") {
          code = "(1 + Math.sqrt(5)) / 2";
          order = window.Blockly.JavaScript.javascriptGenerator.ORDER_DIVISION;
        } else if (constant === "SQRT2") {
          code = "Math.SQRT2";
          order = window.Blockly.JavaScript.javascriptGenerator.ORDER_MEMBER;
        } else if (constant === "SQRT1_2") {
          code = "Math.SQRT1_2";
          order = window.Blockly.JavaScript.javascriptGenerator.ORDER_MEMBER;
        } else if (constant === "INFINITY") {
          code = "Infinity";
          order = window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC;
        }
        return [code, order];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Math/math_constrain.js
  var init_math_constrain = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Math/math_constrain.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.math_constrain = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("constrain {{ number }} low {{ low_number }} high {{ high_number }}", {
              number: "%1",
              low_number: "%2",
              high_number: "%3"
            }),
            args0: [
              {
                type: "input_value",
                name: "VALUE",
                check: "Number"
              },
              {
                type: "input_value",
                name: "LOW",
                check: "Number"
              },
              {
                type: "input_value",
                name: "HIGH",
                check: "Number"
              }
            ],
            inputsInline: true,
            output: "Number",
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("This block constrains a given number so that it is within a set range."),
            category: window.Blockly.Categories.Mathematical
          };
        },
        meta() {
          return {
            display_name: localize("Constrain within a range"),
            description: localize("This block constrains a given number so that it is within a set range.")
          };
        },
        getRequiredValueInputs() {
          return {
            VALUE: null,
            LOW: null,
            HIGH: null
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.math_constrain = (block) => {
        const argument0 = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "VALUE",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_COMMA
        ) || "0";
        const argument1 = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "LOW",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_COMMA
        ) || "0";
        const argument2 = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "HIGH",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_COMMA
        ) || "0";
        const code = `Math.min(Math.max(${argument0}, ${argument1}), ${argument2})`;
        return [code, window.Blockly.JavaScript.javascriptGenerator.ORDER_FUNCTION_CALL];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Math/math_modulo.js
  var init_math_modulo = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Math/math_modulo.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.math_modulo = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("remainder of {{ number1 }} \xF7 {{ number2 }}", {
              number1: "%1",
              number2: "%2"
            }),
            args0: [
              {
                type: "input_value",
                name: "DIVIDEND",
                check: "Number"
              },
              {
                type: "input_value",
                name: "DIVISOR",
                check: "Number"
              }
            ],
            inputsInline: true,
            output: "Number",
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("Returns the remainder after a division"),
            category: window.Blockly.Categories.Mathematical
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        meta() {
          return {
            display_name: localize("Remainder after division"),
            description: localize("Returns the remainder after the division of the given numbers.")
          };
        },
        getRequiredValueInputs() {
          return {
            DIVIDEND: null,
            DIVISOR: null
          };
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.math_modulo = (block) => {
        const argument0 = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "DIVIDEND",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_MODULUS
        ) || "0";
        const argument1 = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "DIVISOR",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_MODULUS
        ) || "0";
        const code = `${argument0} % ${argument1}`;
        return [code, window.Blockly.JavaScript.javascriptGenerator.ORDER_MODULUS];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Math/math_number.js
  var init_math_number = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Math/math_number.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.math_number = {
        init() {
          this.jsonInit(this.definition());
          const fieldInput = this.getField("NUM");
          fieldInput.setValidator((input) => this.numberValidator(input));
        },
        definition() {
          return {
            message0: "%1",
            args0: [
              {
                type: "field_number",
                name: "NUM",
                value: 0
              }
            ],
            output: "Number",
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("Please use `.` as a decimal separator for fractional numbers."),
            category: window.Blockly.Categories.Mathematical
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        meta() {
          return {
            display_name: localize("Number"),
            description: localize(
              "Enter an integer or fractional number into this block. Please use `.` as a decimal separator for fractional numbers."
            )
          };
        },
        numberValidator(input) {
          if (/^-?([0][.]|[0-9]+[.])?([0]|[1-9]){1,}$/.test(input) && input < Number.MAX_SAFE_INTEGER) {
            return void 0;
          }
          return null;
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.math_number = (block) => {
        const code = block?.getFieldValue("NUM");
        return [code, window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Math/math_number_positive.js
  var init_math_number_positive = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Math/math_number_positive.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.math_number_positive = {
        init: window.Blockly.Blocks.math_number.init,
        definition: window.Blockly.Blocks.math_number.definition,
        meta() {
          return {
            display_name: localize("Math Number Positive"),
            description: localize("Math Number Description")
          };
        },
        numberValidator(input) {
          if (/^([0][.]|[0-9]+[.])?([0]|[1-9]){1,}$/.test(input) && input < Number.MAX_SAFE_INTEGER) {
            return void 0;
          }
          return null;
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.math_number_positive = (block) => {
        return window.Blockly.JavaScript.javascriptGenerator.forBlock.math_number(block);
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Math/math_number_property.js
  var init_math_number_property = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Math/math_number_property.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.math_number_property = {
        init() {
          this.jsonInit(this.definition());
          this.setOnChange((event) => {
            if (event.name === "PROPERTY") {
              const hasDivisorInput = this.getFieldValue("PROPERTY") === "DIVISIBLE_BY";
              this.updateShape(hasDivisorInput);
            }
          });
        },
        definition() {
          return {
            message0: localize("{{ number }} is {{ type }}", {
              number: "%1",
              type: "%2"
            }),
            args0: [
              {
                type: "input_value",
                name: "NUMBER_TO_CHECK"
              },
              {
                type: "field_dropdown",
                name: "PROPERTY",
                options: [
                  ["even", "EVEN"],
                  ["odd", "ODD"],
                  ["prime", "PRIME"],
                  ["whole", "WHOLE"],
                  ["positive", "POSITIVE"],
                  ["negative", "NEGATIVE"],
                  ["divisible by", "DIVISIBLE_BY"]
                ]
              }
            ],
            output: "Boolean",
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            toolip: localize("This block tests a given number according to the selection"),
            category: window.Blockly.Categories.Mathematical
          };
        },
        meta() {
          return {
            display_name: localize("Test a number"),
            description: localize(
              "This block tests a given number according to the selection and it returns a value of \u201CTrue\u201D or \u201CFalse\u201D. Available options: Even, Odd, Prime, Whole, Positive, Negative, Divisible"
            )
          };
        },
        domToMutation(xmlElement) {
          const hasDivisorInput = xmlElement.getAttribute("divisor_input") === "true";
          this.updateShape(hasDivisorInput);
        },
        mutationToDom() {
          const container = document.createElement("mutation");
          const divisorInput = this.getFieldValue("PROPERTY") === "DIVISIBLE_BY";
          container.setAttribute("divisor_input", divisorInput);
          return container;
        },
        updateShape(hasDivisorInput) {
          if (hasDivisorInput) {
            const inputExists = this.getInput("DIVISOR");
            if (inputExists) {
              this.removeInput("DIVISOR");
            } else {
              this.appendValueInput("DIVISOR").setCheck("Number");
              this.initSvg();
              this.renderEfficiently();
            }
          }
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        getRequiredValueInputs() {
          return {
            NUMBER_TO_CHECK: null
          };
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.math_number_property = (block) => {
        const argument0 = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "NUMBER_TO_CHECK",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_MODULUS
        ) || "0";
        const property = block.getFieldValue("PROPERTY");
        let code;
        if (property === "PRIME") {
          const functionName = window.Blockly.JavaScript.javascriptGenerator.provideFunction_("mathIsPrime", [
            // eslint-disable-next-line no-underscore-dangle
            `function ${window.Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(n) {
                // https://en.wikipedia.org/wiki/Primality_test#Naive_methods
                if (n == 2 || n == 3) {
                    return true;
                }

                // False if n is NaN, negative, is 1, or not whole.
                // And false if n is divisible by 2 or 3.
                if (isNaN(n) || n <= 1 || n % 1 != 0 || n % 2 == 0 || n % 3 == 0) {
                    return false;
                }

                // Check all the numbers of form 6k +/- 1, up to sqrt(n).
                for (var x  = 6; x <= Math.sqrt(n) + 1; x += 6) {
                    if (n % (x - 1) == 0 || n % (x + 1) == 0) {
                        return false;
                    }
                }
                return true;
            }`
          ]);
          code = `${functionName}(${argument0})`;
          return [code, window.Blockly.JavaScript.javascriptGenerator.ORDER_FUNCTION_CALL];
        } else if (property === "EVEN") {
          code = `${argument0} % 2 === 0`;
        } else if (property === "ODD") {
          code = `${argument0} % 2 === 1`;
        } else if (property === "WHOLE") {
          code = `${argument0} % 1 === 0`;
        } else if (property === "POSITIVE") {
          code = `${argument0} > 0`;
        } else if (property === "NEGATIVE") {
          code = `${argument0} < 0`;
        } else if (property === "DIVISIBLE_BY") {
          const divisor = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
            block,
            "DIVISOR",
            window.Blockly.JavaScript.javascriptGenerator.ORDER_MODULUS
          ) || "0";
          code = `${argument0} % ${divisor} == 0`;
        }
        return [code, window.Blockly.JavaScript.javascriptGenerator.ORDER_EQUALITY];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Math/math_on_list.js
  var init_math_on_list = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Math/math_on_list.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.math_on_list = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("{{ calculation }} of list {{ input_list }}", {
              calculation: "%1",
              input_list: "%2"
            }),
            args0: [
              {
                type: "field_dropdown",
                name: "OP",
                options: [
                  ["sum", "SUM"],
                  ["min", "MIN"],
                  ["max", "MAX"],
                  ["average", "AVERAGE"],
                  ["median", "MEDIAN"],
                  ["mode", "MODE"],
                  ["antimode", "ANTIMODE"],
                  ["standard deviation", "STD_DEV"],
                  ["random item", "RANDOM"]
                ]
              },
              {
                type: "input_value",
                name: "LIST"
              }
            ],
            output: "Number",
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("Aggregate operations"),
            category: window.Blockly.Categories.Mathematical
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        meta() {
          return {
            display_name: localize("Aggregate operations"),
            description: localize(
              "This block performs the following operations on a given list: sum, minimum, maximum, average, median, mode, antimode, standard deviation, random item."
            )
          };
        },
        getRequiredValueInputs() {
          const type_list = [
            "variables_get",
            "lists_getSublist",
            "ohlc_values",
            "lists_split",
            "ohlc",
            "ticks",
            "lists_repeat",
            "lastDigitList",
            "ohlc_values_in_list",
            "procedures_callreturn"
          ];
          return {
            LIST: () => {
              return !type_list.includes(this.childBlocks_[0]?.type);
            }
          };
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.math_on_list = (block) => {
        const operation = block.getFieldValue("OP");
        let code, list;
        if (operation === "SUM") {
          const functionName = window.Blockly.JavaScript.javascriptGenerator.provideFunction_("mathMean", [
            `function ${window.Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(myList) {
                var final_list = [];
                return recursiveList(myList, final_list).reduce(function(x, y) {
                    return x + y;
                },0);
            }`
          ]);
          list = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
            block,
            "LIST",
            window.Blockly.JavaScript.javascriptGenerator.ORDER_NONE
          ) || "[]";
          code = `${functionName}((${list} || [0]))`;
        } else if (operation === "MIN") {
          const functionName = window.Blockly.JavaScript.javascriptGenerator.provideFunction_("mathMean", [
            `function ${window.Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(myList) {
                var final_list = [];
                return Math.min.apply(null, (recursiveList(myList, final_list) || [0]));
            }`
          ]);
          list = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
            block,
            "LIST",
            window.Blockly.JavaScript.javascriptGenerator.ORDER_COMMA
          ) || "[]";
          code = `${functionName}((${list} || [0]))`;
        } else if (operation === "MAX") {
          const functionName = window.Blockly.JavaScript.javascriptGenerator.provideFunction_("mathMean", [
            `function ${window.Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(myList) {
                var final_list = [];
                return Math.max.apply(null, (recursiveList(myList, final_list) || [0]));
            }`
          ]);
          list = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
            block,
            "LIST",
            window.Blockly.JavaScript.javascriptGenerator.ORDER_COMMA
          ) || "[]";
          code = `${functionName}((${list} || [0]))`;
        } else if (operation === "AVERAGE") {
          const functionName = window.Blockly.JavaScript.javascriptGenerator.provideFunction_("mathMean", [
            `function ${window.Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(myList) {
                var final_list = [];
                return recursiveList(myList, final_list).reduce(function(x, y) {
                    return x + y;
                }, 0) / myList.length;
            }`
          ]);
          list = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
            block,
            "LIST",
            window.Blockly.JavaScript.javascriptGenerator.ORDER_NONE
          ) || "[]";
          code = `${functionName}((${list} || [0]))`;
        } else if (operation === "MEDIAN") {
          const functionName = window.Blockly.JavaScript.javascriptGenerator.provideFunction_("mathMedian", [
            `
            Array.prototype.swap = function (x,y) {
                var b = this[x];
                this[x] = this[y];
                this[y] = b;
                return this;
            }

            function partition(arr, start, end){
                var pivotValue = arr[end];
                var pivotIndex = start;
                for (var i = start; i < end; i++) {
                    if (arr[i] < pivotValue) {
                    arr.swap(pivotIndex, i);
                    pivotIndex++;
                    }
                }
                arr.swap(end, pivotIndex);
                return pivotIndex;
            };

            function quickSort(arr) {
                var stack = [];
                stack.push(0);
                stack.push(arr.length - 1);

                while(stack[stack.length - 1] >= 0){
                    end = stack.pop();
                    start = stack.pop();
                    pivotIndex = partition(arr, start, end);
                    if (pivotIndex - 1 > start){
                        stack.push(start);
                        stack.push(pivotIndex - 1);
                    }
                    if (pivotIndex + 1 < end){
                        stack.push(pivotIndex + 1);
                        stack.push(end);
                    }
                }

            }

            function calculateMedian(final_list){
                quickSort(final_list);

                if (final_list.length % 2 == 0) {
                    return (final_list[final_list.length / 2 - 1] + final_list[final_list.length / 2]) / 2;
                }
                return final_list[(final_list.length - 1) / 2];
            }

            function ${window.Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(myList) {
                var final_list = [];
                return calculateMedian(recursiveList(myList, final_list));
            }`
          ]);
          list = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
            block,
            "LIST",
            window.Blockly.JavaScript.javascriptGenerator.ORDER_NONE
          ) || "[]";
          code = `${functionName}((${list} || [0]))`;
        } else if (operation === "MODE") {
          const functionName = window.Blockly.JavaScript.javascriptGenerator.provideFunction_("mathModes", [
            `
            function calculateMathMode(values){
                var modes = [];
                var counts = [];
                var maxCount = 0;

                for (var i = 0; i < values.length; i++) {
                    var value = values[i];
                    var found = false;
                    var thisCount;

                    for (var j = 0; j < counts.length; j++) {
                        if (counts[j][0] === value) {
                            thisCount = ++counts[j][1];
                            found = true;
                            break;
                        }
                    }

                    if (!found) {
                        counts.push([value, 1]);
                        thisCount = 1;
                    }
                    maxCount = Math.max(thisCount, maxCount);
                }

                for (var j = 0; j < counts.length; j++) {
                    if (counts[j][1] == maxCount) {
                        modes.push(counts[j][0]);
                    }
                }

                return modes;
            }

            function ${window.Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(list) {
                var final_list = [];
                return calculateMathMode(recursiveList(list, final_list));
            }`
          ]);
          list = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
            block,
            "LIST",
            window.Blockly.JavaScript.javascriptGenerator.ORDER_NONE
          ) || "[]";
          code = `${functionName}((${list} || [0]))`;
        } else if (operation === "ANTIMODE") {
          const functionName = window.Blockly.JavaScript.javascriptGenerator.provideFunction_("mathAntiMode", [
            `
            function calculateMathAntiMode(values){
                var antiMode = [];
                var counts = [];
                var minCount = 1;
                var countArray = [];

                for (var i = 0; i < values.length; i++) {
                    var value = values[i];
                    var found = false;
                    var thisCount;

                    for (var j = 0; j < counts.length; j++) {
                        if (counts[j][0] === value) {
                            thisCount = ++counts[j][1];
                            found = true;
                            break;
                        }
                    }

                    if (!found) {
                        counts.push([value, 1]);
                        thisCount = 1;
                    }
                }

                 minCount = Math.min.apply(null, counts.map(function(element) {
                     return element[1];
                 }));

                 for (var j = 0; j < counts.length; j++) {
                    if (counts[j][1] == minCount) {
                        antiMode.push(counts[j][0]);
                    }
                }

                return antiMode;
            }

            function ${window.Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(list) {
                var final_list = [];
                return calculateMathAntiMode(recursiveList(list, final_list));
            }`
          ]);
          list = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
            block,
            "LIST",
            window.Blockly.JavaScript.javascriptGenerator.ORDER_NONE
          ) || "[]";
          code = `${functionName}((${list} || [0]))`;
        } else if (operation === "STD_DEV") {
          const functionName = window.Blockly.JavaScript.javascriptGenerator.provideFunction_("mathStandardDeviation", [
            `
            function calculateMathStandardDeviation(numbers){
                var n = numbers.length;
                if (!n) {
                    return null;
                }

                var mean = numbers.reduce(function(x, y) {
                    return x + y;
                }, 0) / n;

                var variance = 0;
                for (var j = 0; j < n; j++) {
                    variance += Math.pow(numbers[j] - mean, 2);
                }
                variance = variance / n;
                return Math.sqrt(variance);
            }

            function ${window.Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(list) {
                var final_list = [];
                return calculateMathStandardDeviation(recursiveList(list, final_list));
            }`
          ]);
          list = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
            block,
            "LIST",
            window.Blockly.JavaScript.javascriptGenerator.ORDER_NONE
          ) || "[]";
          code = `${functionName}((${list} || [0]))`;
        } else if (operation === "RANDOM") {
          const functionName = window.Blockly.JavaScript.javascriptGenerator.provideFunction_("mathRandomList", [
            `function ${window.Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(list) {
                var final_list = [];
                var final_list = recursiveList(list, final_list);
                var x = Math.floor(Math.random() * final_list.length);
                return final_list[x];
            }`
          ]);
          list = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
            block,
            "LIST",
            window.Blockly.JavaScript.javascriptGenerator.ORDER_NONE
          ) || "[]";
          code = `${functionName}((${list} || [0]))`;
        }
        return [code, window.Blockly.JavaScript.javascriptGenerator.ORDER_FUNCTION_CALL];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Math/math_random_float.js
  var init_math_random_float = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Math/math_random_float.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.math_random_float = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("random fraction"),
            output: "Number",
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("This block gives you a random fraction between 0.0 to 1.0"),
            category: window.Blockly.Categories.Mathematical
          };
        },
        meta() {
          return {
            display_name: localize("Random fraction number"),
            description: localize("This block gives you a random fraction between 0.0 to 1.0.")
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.math_random_float = () => [
        "Math.random()",
        window.Blockly.JavaScript.javascriptGenerator.ORDER_FUNCTION_CALL
      ];
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Math/math_random_int.js
  var init_math_random_int = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Math/math_random_int.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.math_random_int = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("random integer from {{ start_number }} to {{ end_number }}", {
              start_number: "%1",
              end_number: "%2"
            }),
            args0: [
              {
                type: "input_value",
                name: "FROM",
                check: "Number"
              },
              {
                type: "input_value",
                name: "TO",
                check: "Number"
              }
            ],
            inputsInline: true,
            output: "Number",
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("This block gives you a random number from within a set range"),
            category: window.Blockly.Categories.Mathematical
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        meta() {
          return {
            display_name: localize("Random integer"),
            description: localize("This block gives you a random number from within a set range.")
          };
        },
        getRequiredValueInputs() {
          return {
            FROM: null,
            TO: null
          };
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.math_random_int = (block) => {
        const argument0 = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "FROM",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_COMMA
        ) || "0";
        const argument1 = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "TO",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_COMMA
        ) || "0";
        const functionName = window.Blockly.JavaScript.javascriptGenerator.provideFunction_("mathRandomInt", [
          // eslint-disable-next-line no-underscore-dangle
          `function ${window.Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(a, b) {
            if (a > b) {
                // Swap a and b to ensure a is smaller.
                var c = a;
                a = b;
                b = c;
            }
            return Math.floor(Math.random() * (b - a + 1) + a);
        }`
        ]);
        const code = `${functionName}(${argument0}, ${argument1})`;
        return [code, window.Blockly.JavaScript.javascriptGenerator.ORDER_FUNCTION_CALL];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Math/math_round.js
  var init_math_round = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Math/math_round.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.math_round = {
        /**
         * Check if a number is even, odd, prime, whole, positive, or negative
         * or if it is divisible by certain number. Returns true or false.
         * @this window.Blockly.Block
         */
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: "%1 %2",
            args0: [
              {
                type: "field_dropdown",
                name: "OP",
                options: [
                  ["round", "ROUND"],
                  ["round up", "ROUNDUP"],
                  ["round down", "ROUNDDOWN"]
                ]
              },
              {
                type: "input_value",
                name: "NUM"
              }
            ],
            output: "Number",
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("Rounds a given number to an integer"),
            category: window.Blockly.Categories.Mathematical
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        meta() {
          return {
            display_name: localize("Rounding operation"),
            description: localize(
              "This block rounds a given number according to the selection: round, round up, round down."
            )
          };
        },
        getRequiredValueInputs() {
          return {
            NUM: null
          };
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.math_round = (block) => {
        const operation = block.getFieldValue("OP");
        const argument0 = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "NUM",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC
        ) || "0";
        let code;
        if (operation === "ROUND") {
          code = `Math.round(${argument0})`;
        } else if (operation === "ROUNDUP") {
          code = `Math.ceil(${argument0})`;
        } else if (operation === "ROUNDDOWN") {
          code = `Math.floor(${argument0})`;
        }
        return [code, window.Blockly.JavaScript.javascriptGenerator.ORDER_FUNCTION_CALL];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Math/math_arithmetic.js
  var init_math_arithmetic = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Math/math_arithmetic.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.math_arithmetic = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: "%1 %2 %3",
            args0: [
              {
                type: "input_value",
                name: "A",
                check: "Number"
              },
              {
                type: "field_dropdown",
                name: "OP",
                options: [
                  ["+", "ADD"],
                  ["-", "MINUS"],
                  ["*", "MULTIPLY"],
                  ["/", "DIVIDE"],
                  ["^", "POWER"]
                ]
              },
              {
                type: "input_value",
                name: "B",
                check: "Number"
              }
            ],
            output: "Number",
            inputsInline: true,
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("This block performs arithmetic operations between two numbers."),
            category: window.Blockly.Categories.Mathematical
          };
        },
        meta() {
          return {
            display_name: localize("Arithmetical operations"),
            description: localize("This block performs arithmetic operations between two numbers.")
          };
        },
        getRequiredValueInputs() {
          return {
            A: null,
            B: null
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.math_arithmetic = (block) => {
        const operators = {
          ADD: ["+", window.Blockly.JavaScript.javascriptGenerator.ORDER_ADDITION],
          MINUS: ["-", window.Blockly.JavaScript.javascriptGenerator.ORDER_SUBTRACTION],
          MULTIPLY: ["*", window.Blockly.JavaScript.javascriptGenerator.ORDER_MULTIPLICATION],
          DIVIDE: ["/", window.Blockly.JavaScript.javascriptGenerator.ORDER_DIVISION],
          POWER: [null, window.Blockly.JavaScript.javascriptGenerator.ORDER_COMMA]
          // Handle power separately.
        };
        const tuple = operators[block.getFieldValue("OP")];
        const operator = tuple[0];
        const order = tuple[1];
        const argument0 = window.Blockly.JavaScript.javascriptGenerator.valueToCode(block, "A", order) || "0";
        const argument1 = window.Blockly.JavaScript.javascriptGenerator.valueToCode(block, "B", order) || "0";
        let code;
        if (!operator) {
          code = `Math.pow(${argument0}, ${argument1})`;
          return [code, window.Blockly.JavaScript.javascriptGenerator.ORDER_FUNCTION_CALL];
        }
        code = `${argument0} ${operator} ${argument1}`;
        return [code, order];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Math/math_single.js
  var init_math_single = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Math/math_single.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.math_single = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: "%1 %2",
            args0: [
              {
                type: "field_dropdown",
                name: "OP",
                options: [
                  ["square root", "ROOT"],
                  ["absolute", "ABS"],
                  ["-", "NEG"],
                  ["ln", "LN"],
                  ["log10", "LOG10"],
                  ["e^", "EXP"],
                  ["10^", "POW10"]
                ]
              },
              {
                type: "input_value",
                name: "NUM"
              }
            ],
            output: "Number",
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("Operations on a given number"),
            category: window.Blockly.Categories.Mathematical
          };
        },
        meta() {
          return {
            display_name: localize("Operations on a given number"),
            description: localize("This block performs the selected operations to a given number.")
          };
        },
        getRequiredValueInputs() {
          return {
            NUM: null
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.math_single = (block) => {
        const operator = block.getFieldValue("OP");
        let code, arg;
        if (operator === "NEG") {
          arg = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
            block,
            "NUM",
            window.Blockly.JavaScript.javascriptGenerator.ORDER_UNARY_NEGATION
          ) || "0";
          if (arg[0] === "-") {
            arg = ` ${arg}`;
          }
          code = `-${arg}`;
          return [code, window.Blockly.JavaScript.javascriptGenerator.ORDER_UNARY_NEGATION];
        }
        if (["SIN", "COS", "TAN"].includes(operator)) {
          arg = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
            block,
            "NUM",
            window.Blockly.JavaScript.javascriptGenerator.ORDER_DIVISION
          ) || "0";
        } else {
          arg = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
            block,
            "NUM",
            window.Blockly.JavaScript.javascriptGenerator.ORDER_NONE
          ) || "0";
        }
        if (operator === "ABS") {
          code = `Math.abs(${arg})`;
        } else if (operator === "ROOT") {
          code = `Math.sqrt(${arg})`;
        } else if (operator === "LN") {
          code = `Math.log(${arg})`;
        } else if (operator === "EXP") {
          code = `Math.pow(Math.E, ${arg})`;
        } else if (operator === "POW10") {
          code = `Math.pow(10, ${arg})`;
        } else if (operator === "ROUND") {
          code = `Math.round(${arg})`;
        } else if (operator === "ROUNDUP") {
          code = `Math.ceil(${arg})`;
        } else if (operator === "ROUNDDOWN") {
          code = `Math.floor(${arg})`;
        } else if (operator === "SIN") {
          code = `Math.sin(${arg} / 180 * Math.PI)`;
        } else if (operator === "COS") {
          code = `Math.cos(${arg} / 180 * Math.PI)`;
        } else if (operator === "TAN") {
          code = `Math.tan(${arg} / 180 * Math.PI)`;
        }
        if (code) {
          return [code, window.Blockly.JavaScript.javascriptGenerator.ORDER_FUNCTION_CALL];
        }
        if (operator === "LOG10") {
          code = `Math.log(${arg}) / Math.log(10)`;
        } else if (operator === "ASIN") {
          code = `Math.asin(${arg}) / Math.PI * 180`;
        } else if (operator === "ACOS") {
          code = `Math.acos(${arg}) / Math.PI * 180`;
        } else if (operator === "ATAN") {
          code = `Math.atan(${arg}) / Math.PI * 180`;
        }
        return [code, window.Blockly.JavaScript.javascriptGenerator.ORDER_DIVISION];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Math/math_trig.js
  var init_math_trig = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Math/math_trig.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.math_trig = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: "%1 %2",
            args0: [
              {
                type: "field_dropdown",
                name: "OP",
                options: [
                  ["sin", "SIN"],
                  ["cos", "COS"],
                  ["tan", "TAN"],
                  ["asin", "ASIN"],
                  ["acos", "ACOS"],
                  ["atan", "ATAN"]
                ]
              },
              {
                type: "input_value",
                name: "NUM",
                check: "Number"
              }
            ],
            output: "Number",
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("Trigonometric functions"),
            category: window.Blockly.Categories.Mathematical
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        meta() {
          return {
            display_name: localize("Trigonometric functions"),
            description: localize("This block performs trigonometric functions.")
          };
        },
        getRequiredValueInputs() {
          return {
            NUM: null
          };
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.math_trig = window.Blockly.JavaScript.javascriptGenerator.forBlock.math_single;
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Math/index.js
  var init_Math = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Math/index.js"() {
      init_math_change();
      init_math_constant();
      init_math_constrain();
      init_math_modulo();
      init_math_number();
      init_math_number_positive();
      init_math_number_property();
      init_math_on_list();
      init_math_random_float();
      init_math_random_int();
      init_math_round();
      init_math_arithmetic();
      init_math_single();
      init_math_trig();
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Text/text.js
  var init_text = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Text/text.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.text = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: "%1",
            args0: [
              {
                type: "field_input",
                name: "TEXT"
              }
            ],
            inputsInline: true,
            output: "String",
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("Enter some text here"),
            category: window.Blockly.Categories.Text
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        meta() {
          return {
            display_name: localize("Text"),
            description: localize("A  block that can contain text.")
          };
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.text = (block) => {
        const code = window.Blockly.JavaScript.javascriptGenerator.quote_(block.getFieldValue("TEXT"));
        return [code, window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Text/text_join.js
  var init_text_join = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Text/text_join.js"() {
      init_translations();
      init_utils();
      init_block_images();
      window.Blockly.Blocks.text_join = {
        protected_statements: ["STACK"],
        allowed_children: ["text_statement"],
        init() {
          const field_image = new window.Blockly.FieldImage(plusIconDark, 25, 25, "", this.onIconClick.bind(this));
          this.jsonInit(this.definition());
          this.appendDummyInput("ADD_ICON").appendField(field_image);
          this.moveInputBefore("ADD_ICON", "STACK");
        },
        definition() {
          return {
            message0: localize("set {{ variable }} to create text with", { variable: "%1" }),
            message1: "%1",
            args0: [
              {
                type: "field_variable",
                name: "VARIABLE",
                variable: localize("text")
              }
            ],
            args1: [
              {
                type: "input_statement",
                name: "STACK"
              }
            ],
            inputsInline: true,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            previousStatement: null,
            nextStatement: null,
            tooltip: localize("Text join"),
            category: window.Blockly.Categories.Text
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        meta() {
          return {
            display_name: localize("Text join"),
            description: localize(
              "Creates a single text string from combining the text value of each attached item, without spaces in between. The number of items can be added accordingly."
            )
          };
        },
        onIconClick() {
          if (this.workspace.options.readOnly || window.Blockly.derivWorkspace.isFlyoutVisible) {
            return;
          }
          runGroupedEvents(false, () => {
            const text_block = this.workspace.newBlock("text_statement");
            text_block.required_parent_id = this.id;
            text_block.setMovable(true);
            text_block.initSvg();
            text_block?.renderEfficiently();
            const shadow_block = this.workspace.newBlock("text");
            shadow_block.setShadow(true);
            shadow_block.setFieldValue("", "TEXT");
            shadow_block.initSvg();
            shadow_block?.renderEfficiently();
            const text_input = text_block.getInput("TEXT");
            text_input.connection.connect(shadow_block.outputConnection);
            const connection = this.getLastConnectionInStatement("STACK");
            connection.connect(text_block.previousConnection);
          });
        },
        onchange: window.Blockly.Blocks.lists_create_with.onchange
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.text_join = (block) => {
        const var_name = window.Blockly.JavaScript.variableDB_.getName(
          block.getFieldValue("VARIABLE"),
          window.Blockly.Variables.CATEGORY_NAME
        );
        const blocks_in_stack = block.getBlocksInStatement("STACK");
        const elements = blocks_in_stack.map((b) => {
          const value = window.Blockly.JavaScript.javascriptGenerator.forBlock[b.type](b);
          return Array.isArray(value) ? value[0] : value;
        });
        const code = `${var_name} = [${elements}].join(" ");
`;
        return code;
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Text/text_statement.js
  var init_text_statement = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Text/text_statement.js"() {
      init_translations();
      init_utils();
      init_block_images();
      window.Blockly.Blocks.text_statement = {
        required_parent_type: "text_join",
        init() {
          this.required_parent_id = "";
          const field_image = new window.Blockly.FieldImage(minusIconDark, 25, 25, "", this.onIconClick.bind(this));
          this.jsonInit(this.definition());
          this.appendDummyInput("REMOVE_ICON").appendField(field_image);
        },
        definition() {
          return {
            message0: "%1",
            args0: [
              {
                type: "input_value",
                name: "TEXT"
              }
            ],
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            previousStatement: null,
            nextStatement: null,
            category: window.Blockly.Categories.Text
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        meta() {
          return {
            display_name: localize("Text Statement"),
            description: ""
          };
        },
        onchange(event) {
          if (!this.workspace || window.Blockly.derivWorkspace.isFlyoutVisible || this.workspace.isDragging()) {
            return;
          }
          const surround_parent = this.getSurroundParent();
          if (event.type === window.Blockly.Events.BLOCK_CREATE) {
            this.setMovable(true);
            if (!this.required_parent_id && surround_parent?.type === this.required_parent_type) {
              this.required_parent_id = surround_parent.id;
            }
          }
          if (event.type === window.Blockly.Events.BLOCK_DRAG && !event.isStart) {
            const stack_blocks = window.Blockly.getMainWorkspace().getBlockById(event.blockId);
            if (this.required_parent_id && (!surround_parent || surround_parent.id !== this.required_parent_id)) {
              const original_parent = window.Blockly.getMainWorkspace().getBlockById(this.required_parent_id);
              if (original_parent) {
                const first_block_in_stack = original_parent.getInputTargetBlock("STACK");
                if (first_block_in_stack) {
                  const last_connection = original_parent.getLastConnectionInStatement("STACK");
                  runIrreversibleEvents(() => {
                    last_connection.connect(this.previousConnection);
                  });
                } else {
                  runIrreversibleEvents(() => {
                    original_parent.getInput("STACK").connection.connect(stack_blocks.previousConnection);
                  });
                }
              }
            }
          }
        },
        onIconClick: window.Blockly.Blocks.lists_statement.onIconClick
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.text_statement = (block) => {
        const code = `String(${window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "TEXT",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC
        )})`;
        return [code, window.Blockly.JavaScript.javascriptGenerator.ORDER_ATOMIC];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Text/text_append.js
  var init_text_append = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Text/text_append.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.text_append = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("to {{ variable }} append text {{ input_text }}", {
              variable: "%1",
              input_text: "%2"
            }),
            args0: [
              {
                type: "field_variable",
                name: "VAR",
                variable: localize("text")
              },
              {
                type: "input_value",
                name: "TEXT"
              }
            ],
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            previousStatement: null,
            nextStatement: null,
            tooltip: localize("Appends a given text to a variable"),
            category: window.Blockly.Categories.Text
          };
        },
        meta() {
          return {
            display_name: localize("Text Append"),
            description: localize("Appends a given text to a variable.")
          };
        },
        getRequiredValueInputs() {
          return {
            TEXT: emptyTextValidator
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.text_append = (block) => {
        const forceString = (value2) => {
          const strRegExp = /^\s*'([^']|\\')*'\s*$/;
          if (strRegExp.test(value2)) {
            return value2;
          }
          return `String(${value2})`;
        };
        const varName = window.Blockly.JavaScript.variableDB_.getName(
          block.getFieldValue("VAR"),
          window.Blockly.Variables.CATEGORY_NAME
        );
        const value = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "TEXT",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_NONE
        ) || "''";
        const code = `${varName} += ${forceString(value)};
`;
        return code;
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Text/text_length.js
  var init_text_length = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Text/text_length.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.text_length = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("length of {{ input_text }}", { input_text: "%1" }),
            args0: [
              {
                type: "input_value",
                name: "VALUE"
              }
            ],
            output: "Number",
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("Text String Length"),
            category: window.Blockly.Categories.Text
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        meta() {
          return {
            display_name: localize("Text String Length"),
            description: localize(
              "Returns the number of characters of a given string of text, including numbers, spaces, punctuation marks, and symbols."
            )
          };
        },
        getRequiredValueInputs() {
          return {
            VALUE: emptyTextValidator
          };
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.text_length = (block) => {
        const text = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "VALUE",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_FUNCTION_CALL
        ) || "''";
        const code = `${text}.length`;
        return [code, window.Blockly.JavaScript.javascriptGenerator.ORDER_MEMBER];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Text/text_isEmpty.js
  var init_text_isEmpty = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Text/text_isEmpty.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.text_isEmpty = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("text {{ input_text }} is empty", { input_text: "%1" }),
            args0: [
              {
                type: "input_value",
                name: "VALUE",
                check: ["String"]
              }
            ],
            output: "Boolean",
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("Tests if a given text string is empty"),
            category: window.Blockly.Categories.Text
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        meta() {
          return {
            display_name: localize("Text Is empty"),
            description: localize("Tests whether a string of text is empty. Returns a boolean value (true or false).")
          };
        },
        getRequiredValueInputs() {
          return {
            VALUE: emptyTextValidator
          };
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.text_isEmpty = (block) => {
        const text = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "VALUE",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_MEMBER
        ) || "''";
        const isVariable = block.workspace.getAllVariables().findIndex((variable) => variable.name === text) !== -1;
        const code = isVariable ? `!${text} || !${text}.length` : `!${text}.length`;
        return [code, window.Blockly.JavaScript.javascriptGenerator.ORDER_LOGICAL_NOT];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Text/text_indexOf.js
  var init_text_indexOf = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Text/text_indexOf.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.text_indexOf = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize(
              "in text {{ input_text1 }} find {{ first_or_last }} occurence of text {{ input_text2 }}",
              {
                input_text1: "%1",
                first_or_last: "%2",
                input_text2: "%3"
              }
            ),
            args0: [
              {
                type: "input_value",
                name: "VALUE"
              },
              {
                type: "field_dropdown",
                name: "END",
                options: [
                  ["first", "FIRST"],
                  ["last", "LAST"]
                ]
              },
              {
                type: "input_value",
                name: "FIND"
              }
            ],
            inputsInline: true,
            output: "String",
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("Search for a given string"),
            cateogry: window.Blockly.Categories.Text
          };
        },
        meta() {
          return {
            display_name: localize("Search for string"),
            description: localize(
              "Searches through a string of text for a specific occurrence of a given character or word, and returns the position."
            )
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        getRequiredValueInputs() {
          return {
            VALUE: emptyTextValidator,
            FIND: emptyTextValidator
          };
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.text_indexOf = (block) => {
        const functionName = block.getFieldValue("END") === "FIRST" ? "indexOf" : "lastIndexOf";
        const substring = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "FIND",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_NONE
        ) || "''";
        const text = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "VALUE",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_MEMBER
        ) || "''";
        const code = `${text}.${functionName}(${substring})`;
        if (block.workspace.options.oneBasedIndex) {
          return [`${code} + 1`, window.Blockly.JavaScript.javascriptGenerator.ORDER_ADDITION];
        }
        return [code, window.Blockly.JavaScript.javascriptGenerator.ORDER_FUNCTION_CALL];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Text/text_charAt.js
  var init_text_charAt = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Text/text_charAt.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.text_charAt = {
        init() {
          this.jsonInit(this.definition());
          const dropdown = this.getField("WHERE");
          dropdown.setValidator((value) => {
            const newAt = ["FROM_START", "FROM_END"].includes(value);
            if (newAt !== this.isAt) {
              this.updateAt(newAt);
              this.setFieldValue(value, "WHERE");
              return null;
            }
            return void 0;
          });
          this.updateAt(true);
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        definition() {
          return {
            message0: localize("in text %1 get %2"),
            args0: [
              {
                type: "input_value",
                name: "VALUE"
              },
              {
                type: "field_dropdown",
                name: "WHERE",
                options: [
                  ["letter #", "FROM_START"],
                  ["letter # from end", "FROM_END"],
                  ["first letter", "FIRST"],
                  ["last letter", "LAST"],
                  ["random letter", "RANDOM"]
                ]
              }
            ],
            inputsInline: true,
            output: "String",
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("Returns a specific character from a given string"),
            category: window.Blockly.Categories.Text
          };
        },
        meta() {
          return {
            display_name: localize("Get character"),
            description: localize(
              "Returns the specific character from a given string of text according to the selected option. "
            )
          };
        },
        mutationToDom() {
          const container = document.createElement("mutation");
          container.setAttribute("at", !!this.isAt);
          return container;
        },
        domToMutation(xmlElement) {
          const isAt = xmlElement.getAttribute("at") !== "false";
          this.updateAt(isAt);
        },
        updateAt(isAt) {
          this.removeInput("AT", true);
          if (isAt) {
            this.appendValueInput("AT").setCheck("Number");
          }
          this.isAt = isAt;
          this.initSvg();
          this.renderEfficiently();
        },
        getRequiredValueInputs() {
          return {
            VALUE: emptyTextValidator,
            AT: emptyTextValidator
          };
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.text_charAt = (block) => {
        const where = block.getFieldValue("WHERE") || "FROM_START";
        const textOrder = where === "RANDOM" ? window.Blockly.JavaScript.javascriptGenerator.ORDER_NONE : window.Blockly.JavaScript.javascriptGenerator.ORDER_MEMBER;
        const text = window.Blockly.JavaScript.javascriptGenerator.valueToCode(block, "VALUE", textOrder) || "''";
        let code;
        if (where === "FROM_START") {
          const at = window.Blockly.JavaScript.javascriptGenerator.getAdjusted(block, "AT");
          code = `${text}.charAt(${at})`;
        } else if (where === "FROM_END") {
          const at = window.Blockly.JavaScript.javascriptGenerator.getAdjusted(block, "AT", 1, true);
          code = `${text}.slice(${at}).charAt(0)`;
        } else if (where === "FIRST") {
          code = `${text}.charAt(0)`;
        } else if (where === "LAST") {
          code = `${text}.slice(-1)`;
        } else if (where === "RANDOM") {
          const functionName = window.Blockly.JavaScript.javascriptGenerator.provideFunction_("textRandomLetter", [
            // eslint-disable-next-line no-underscore-dangle
            `function ${window.Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(text) {
                var x = Math.floor(Math.random() * text.length);
                return text[x];
            }`
          ]);
          code = `${functionName}(${text})`;
        }
        return [code, window.Blockly.JavaScript.javascriptGenerator.ORDER_FUNCTION_CALL];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Text/text_getSubstring.js
  var init_text_getSubstring = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Text/text_getSubstring.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.text_getSubstring = {
        init() {
          this.WHERE_OPTIONS_1 = [
            ["letter #", "FROM_START"],
            ["letter # from end", "FROM_END"],
            ["first", "FIRST"]
          ];
          this.WHERE_OPTIONS_2 = [
            ["letter #", "FROM_START"],
            ["letter # from end", "FROM_END"],
            ["last", "LAST"]
          ];
          this.jsonInit(this.definition());
          this.updateAt(1, true);
          this.updateAt(2, true);
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        definition() {
          return {
            message0: "in text %1 " + localize("get substring from {{ position1 }} {{ index1 }} to {{ position2 }} {{ index2 }}", {
              position1: "%2",
              index1: "%3",
              position2: "%4",
              index2: "%5"
            }),
            args0: [
              {
                type: "input_value",
                name: "STRING"
              },
              {
                type: "field_dropdown",
                name: "WHERE1",
                options: this.WHERE_OPTIONS_1
              },
              {
                type: "input_dummy",
                name: "AT1"
              },
              {
                type: "field_dropdown",
                name: "WHERE2",
                options: this.WHERE_OPTIONS_2
              },
              {
                type: "input_dummy",
                name: "AT2"
              }
            ],
            inputsInline: true,
            output: "String",
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("Returns a specific portion of a given string of text."),
            category: window.Blockly.Categories.Text
          };
        },
        meta() {
          return {
            display_name: localize("Get substring"),
            description: localize("Returns a specific portion of a given string of text.")
          };
        },
        mutationToDom() {
          const container = document.createElement("mutation");
          const isAt1 = this.getInput("AT1").type === window.Blockly.INPUT_VALUE;
          const isAt2 = this.getInput("AT2").type === window.Blockly.INPUT_VALUE;
          container.setAttribute("at1", isAt1);
          container.setAttribute("at2", isAt2);
          return container;
        },
        domToMutation(xmlElement) {
          const isAt1 = xmlElement.getAttribute("at1") === "true";
          const isAt2 = xmlElement.getAttribute("at2") === "true";
          this.updateAt(1, isAt1);
          this.updateAt(2, isAt2);
        },
        updateAt(n, is_at) {
          const input = this.getInput(`AT${n}`);
          let old_label_text;
          if (input) {
            input.fieldRow.some((field) => {
              if (field instanceof window.Blockly.FieldLabel) {
                old_label_text = field.text_;
              }
            });
            this.removeInput(`AT${n}`);
          }
          const new_input = is_at ? this.appendValueInput(`AT${n}`).setCheck("Number") : this.appendDummyInput(`AT${n}`);
          if (old_label_text) {
            new_input.insertFieldAt(0, new window.Blockly.FieldLabel(old_label_text));
          }
          const menu = new window.Blockly.FieldDropdown(this[`WHERE_OPTIONS_${n}`], (value) => {
            const new_at = ["FROM_START", "FROM_END"].includes(value);
            if (new_at !== is_at) {
              this.updateAt(n, new_at);
              this.setFieldValue(value, `WHERE${n}`);
              return null;
            }
            return void 0;
          });
          this.getInput(`AT${n}`).appendField(menu, `WHERE${n}`);
          if (n === 1) {
            this.moveInputBefore("AT1", "AT2");
          }
          this.initSvg();
          this.renderEfficiently();
        },
        getRequiredValueInputs() {
          const hasInput = (input_name) => this.getInput(input_name)?.type === window.Blockly.INPUT_VALUE;
          return {
            STRING: emptyTextValidator,
            ...hasInput("AT1") ? { AT1: emptyTextValidator } : {},
            ...hasInput("AT2") ? { AT2: emptyTextValidator } : {}
          };
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.text_getSubstring = (block) => {
        const text = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "STRING",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_FUNCTION_CALL
        ) || "''";
        const where1 = block.getFieldValue("WHERE1");
        const where2 = block.getFieldValue("WHERE2");
        let at1, at2, code;
        if (where1 === "FIRST" && where2 === "LAST") {
          code = text;
        } else if (text.match(/^'?\w+'?$/) || where1 !== "FROM_END" && where1 !== "LAST" && where2 !== "FROM_END" && where2 !== "LAST") {
          switch (where1) {
            case "FROM_START": {
              at1 = window.Blockly.JavaScript.javascriptGenerator.getAdjusted(block, "AT1");
              break;
            }
            case "FROM_END": {
              at1 = window.Blockly.JavaScript.javascriptGenerator.getAdjusted(
                block,
                "AT1",
                1,
                false,
                window.Blockly.JavaScript.javascriptGenerator.ORDER_SUBTRACTION
              );
              at1 = `${text}.length - ${at1}`;
              break;
            }
            case "FIRST": {
              at1 = "0";
              break;
            }
            default:
              break;
          }
          switch (where2) {
            case "FROM_START": {
              at2 = window.Blockly.JavaScript.javascriptGenerator.getAdjusted(block, "AT2", 1);
              break;
            }
            case "FROM_END": {
              at2 = window.Blockly.JavaScript.javascriptGenerator.getAdjusted(
                block,
                "AT2",
                0,
                false,
                window.Blockly.JavaScript.javascriptGenerator.ORDER_SUBTRACTION
              );
              at2 = `${text}.length - ${at2}`;
              break;
            }
            case "LAST": {
              at2 = `${text}.length`;
              break;
            }
            default:
              break;
          }
          code = `${text}.slice(${at1}, ${at2})`;
        } else {
          at1 = window.Blockly.JavaScript.javascriptGenerator.getAdjusted(block, "AT1");
          at2 = window.Blockly.JavaScript.javascriptGenerator.getAdjusted(block, "AT2");
          const getIndex = (string_name, where, opt_at) => {
            if (where === "FIRST") {
              return "0";
            } else if (where === "FROM_END") {
              return `${string_name}.length - 1 - ${opt_at}`;
            } else if (where === "LAST") {
              return `${string_name}.length - 1`;
            }
            return opt_at;
          };
          const where_pascal_case = {
            FIRST: "First",
            LAST: "Last",
            FROM_START: "FromStart",
            FROM_END: "FromEnd"
          };
          const functionName = window.Blockly.JavaScript.javascriptGenerator.provideFunction_(
            `subsequence${where_pascal_case[where1]}${where_pascal_case[where2]}`,
            [
              // eslint-disable-next-line no-underscore-dangle
              `function ${window.Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(
                    sequence
                    ${where1 === "FROM_END" || where1 === "FROM_START" ? ", at1" : ""}
                    ${where2 === "FROM_END" || where2 === "FROM_START" ? ", at2" : ""}
                ) {
                    var start = ${getIndex("sequence", where1, "at1")};
                    var end   = ${getIndex("sequence", where2, "at2")} + 1;
                    
                    return sequence.slice(start, end);
                }`
            ]
          );
          code = `${functionName}(
            ${text}
            ${where1 === "FROM_END" || where1 === "FROM_START" ? `, ${at1}` : ""}
            ${where2 === "FROM_END" || where2 === "FROM_START" ? `, ${at2}` : ""}
        )`;
        }
        return [code, window.Blockly.JavaScript.javascriptGenerator.ORDER_FUNCTION_CALL];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Text/text_changeCase.js
  var init_text_changeCase = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Text/text_changeCase.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.text_changeCase = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("Transform {{ input_text }} to {{ transform_type }}", {
              input_text: "%1",
              transform_type: "%2"
            }),
            args0: [
              {
                type: "input_value",
                name: "TEXT"
              },
              {
                type: "field_dropdown",
                name: "CASE",
                options: [
                  ["UPPER CASE", "UPPERCASE"],
                  ["lower case", "LOWERCASE"],
                  ["Title Case", "TITLECASE"]
                ]
              }
            ],
            output: "String",
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("Changes text case accordingly"),
            category: window.Blockly.Categories.Text
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        meta() {
          return {
            display_name: localize("Change text case"),
            description: localize(
              "Changes the capitalisation of a string of text to Upper case, Lower case, Title case."
            )
          };
        },
        getRequiredValueInputs() {
          return {
            TEXT: emptyTextValidator
          };
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.text_changeCase = (block) => {
        const operators = {
          UPPERCASE: ".toUpperCase()",
          LOWERCASE: ".toLowerCase()",
          TITLECASE: null
        };
        const operator = operators[block.getFieldValue("CASE")];
        const textOrder = operator ? window.Blockly.JavaScript.javascriptGenerator.ORDER_MEMBER : window.Blockly.JavaScript.javascriptGenerator.ORDER_NONE;
        const text = window.Blockly.JavaScript.javascriptGenerator.valueToCode(block, "TEXT", textOrder) || "''";
        let code;
        if (operator) {
          code = `${text}${operator}`;
        } else {
          const functionName = window.Blockly.JavaScript.javascriptGenerator.provideFunction_("textToTitleCase", [
            // eslint-disable-next-line no-underscore-dangle
            `function ${window.Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_}(str) {
                return str.toLowerCase().split(' ').map(function(word) {
                    return word.replace(word[0], word[0].toUpperCase());
                }).join(' ');
            }`
          ]);
          code = `${functionName}(${text})`;
        }
        return [code, window.Blockly.JavaScript.javascriptGenerator.ORDER_FUNCTION_CALL];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Text/text_trim.js
  var init_text_trim = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Text/text_trim.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.text_trim = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("trim spaces from {{ side }} of {{ input_text }}", { side: "%1", input_text: "%2" }),
            args0: [
              {
                type: "field_dropdown",
                name: "MODE",
                options: [
                  ["both sides", "BOTH"],
                  ["left side", "LEFT"],
                  ["right side", "RIGHT"]
                ]
              },
              {
                type: "input_value",
                name: "TEXT"
              }
            ],
            output: "String",
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Base.colour,
            colourSecondary: window.Blockly.Colours.Base.colourSecondary,
            colourTertiary: window.Blockly.Colours.Base.colourTertiary,
            tooltip: localize("Trims spaces"),
            category: window.Blockly.Categories.Text
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        meta() {
          return {
            display_name: localize("Trim spaces"),
            description: localize("Trims the spaces within a given string or text.")
          };
        },
        getRequiredValueInputs() {
          return {
            TEXT: emptyTextValidator
          };
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.text_trim = (block) => {
        const operators = {
          LEFT: ".replace(/^[\\s\\xa0]+/, '')",
          RIGHT: ".replace(/[\\s\\xa0]+$/, '')",
          BOTH: ".trim()"
        };
        const operator = operators[block.getFieldValue("MODE")];
        const text = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "TEXT",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_MEMBER
        ) || "''";
        const code = `${text}${operator}`;
        return [code, window.Blockly.JavaScript.javascriptGenerator.ORDER_FUNCTION_CALL];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Text/text_print.js
  var init_text_print = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Text/text_print.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.text_print = {
        init() {
          this.jsonInit(this.definition());
        },
        definition() {
          return {
            message0: localize("print {{ input_text }}", { input_text: "%1" }),
            args0: [
              {
                type: "input_value",
                name: "TEXT"
              }
            ],
            colour: window.Blockly.Colours.Special3.colour,
            colourSecondary: window.Blockly.Colours.Special3.colourSecondary,
            colourTertiary: window.Blockly.Colours.Special3.colourTertiary,
            previousStatement: null,
            nextStatement: null,
            tooltip: localize("Displays a dialog window with a message"),
            category: window.Blockly.Categories.Text
          };
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        meta() {
          return {
            display_name: localize("Print"),
            description: localize(
              'This block displays a dialog box with a customised message. When the dialog box is displayed, your strategy is paused and will only resume after you click "OK".'
            )
          };
        },
        getRequiredValueInputs() {
          return {
            TEXT: emptyTextValidator
          };
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.text_print = (block) => {
        const msg = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
          block,
          "TEXT",
          window.Blockly.JavaScript.javascriptGenerator.ORDER_NONE
        ) || "''";
        const code = `window.alert(${msg});
`;
        return code;
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Text/text_prompt_ext.js
  var init_text_prompt_ext = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Text/text_prompt_ext.js"() {
      init_translations();
      init_utils();
      window.Blockly.Blocks.text_prompt_ext = {
        init() {
          this.jsonInit(this.definition());
          const typeField = this.getField("TYPE");
          typeField.setValidator((value) => {
            if (value === "TEXT") {
              this.setOutput(true, "String");
            } else if (value === "NUMBER") {
              this.setOutput(true, "Number");
            }
            this.initSvg();
            this.renderEfficiently();
            return void 0;
          });
        },
        customContextMenu(menu) {
          modifyContextMenu(menu);
        },
        definition() {
          return {
            message0: localize("prompt for {{ string_or_number }} with message {{ input_text }}", {
              string_or_number: "%1",
              input_text: "%2"
            }),
            args0: [
              {
                type: "field_dropdown",
                name: "TYPE",
                options: [
                  ["string", "TEXT"],
                  ["number", "NUMBER"]
                ]
              },
              {
                type: "input_value",
                name: "TEXT"
              }
            ],
            output: typeof this.getFieldValue === "function" && this.getFieldValue("TYPE") === "TEXT" ? "String" : "Number",
            outputShape: window.Blockly.OUTPUT_SHAPE_ROUND,
            colour: window.Blockly.Colours.Special3.colour,
            colourSecondary: window.Blockly.Colours.Special3.colourSecondary,
            colourTertiary: window.Blockly.Colours.Special3.colourTertiary,
            tooltip: localize("Request an input"),
            category: window.Blockly.Categories.Text
          };
        },
        meta() {
          return {
            display_name: localize("Request an input"),
            description: localize(
              'This block displays a dialog box that uses a customised message to prompt for an input. The input can be either a string of text or a number and can be assigned to a variable. When the dialog box is displayed, your strategy is paused and will only resume after you enter a response and click "OK".'
            )
          };
        },
        getRequiredValueInputs() {
          return {
            TEXT: emptyTextValidator
          };
        }
      };
      window.Blockly.JavaScript.javascriptGenerator.forBlock.text_prompt_ext = (block) => {
        let msg, code;
        if (block.getField("TEXT")) {
          msg = window.Blockly.JavaScript.javascriptGenerator.quote_(block.getFieldValue("TEXT"));
        } else {
          msg = window.Blockly.JavaScript.javascriptGenerator.valueToCode(
            block,
            "TEXT",
            window.Blockly.JavaScript.javascriptGenerator.ORDER_NONE
          ) || "''";
        }
        if (block.getFieldValue("TYPE") === "NUMBER") {
          code = `parseFloat(window.prompt(${msg}))`;
        } else {
          code = `window.prompt(${msg})`;
        }
        return [code, window.Blockly.JavaScript.javascriptGenerator.ORDER_FUNCTION_CALL];
      };
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/Text/index.js
  var init_Text = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/Text/index.js"() {
      init_text();
      init_text_join();
      init_text_statement();
      init_text_append();
      init_text_length();
      init_text_isEmpty();
      init_text_indexOf();
      init_text_charAt();
      init_text_getSubstring();
      init_text_changeCase();
      init_text_trim();
      init_text_print();
      init_text_prompt_ext();
    }
  });

  // bot-app/src/external/bot-skeleton/scratch/blocks/index.js
  var init_blocks = __esm({
    "bot-app/src/external/bot-skeleton/scratch/blocks/index.js"() {
      init_Functions();
      init_List();
      init_Loops();
      init_Variable();
      init_After_Purchase();
      init_Before_Purchase();
      init_During_Purchase();
      init_Indicators();
      init_Tick_Analysis();
      init_Candle();
      init_Misc();
      init_Time();
      init_Trade_Definition();
      init_Logic();
      init_Math();
      init_Text();
    }
  });

  // bot-shims/blocks-entry.js
  var require_blocks_entry = __commonJS({
    "bot-shims/blocks-entry.js"() {
      init_blocks();
    }
  });
  return require_blocks_entry();
})();
/*! Bundled license information:

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
