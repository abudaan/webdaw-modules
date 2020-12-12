/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./basic2/index.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./basic2/index.scss ***!
  \********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#controls {\n  width: 400px;\n  display: flex;\n  flex-direction: row; }\n  #controls button {\n    width: 100px; }\n", "",{"version":3,"sources":["webpack://./basic2/index.scss"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB,EAAA;EAHrB;IAMI,YAAY,EAAA","sourcesContent":["#controls {\n  width: 400px;\n  display: flex;\n  flex-direction: row;\n\n  button {\n    width: 100px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/***/ ((module) => {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./basic2/index.scss":
/*!***************************!*\
  !*** ./basic2/index.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./basic2/index.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./basic2/index.ts":
/*!*************************!*\
  !*** ./basic2/index.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./index.scss */ "./basic2/index.scss");
const scheduler_1 = __webpack_require__(/*! ../../src/scheduler */ "../src/scheduler.ts");
const getCurrentEventIndex_1 = __webpack_require__(/*! ../../src/getCurrentEventIndex */ "../src/getCurrentEventIndex.ts");
const getMIDIAccess_1 = __webpack_require__(/*! ../../src/getMIDIAccess */ "../src/getMIDIAccess.ts");
const getMIDIPorts_1 = __webpack_require__(/*! ../../src/getMIDIPorts */ "../src/getMIDIPorts.ts");
const createSongFromMIDIFile_1 = __webpack_require__(/*! ../../src/createSongFromMIDIFile */ "../src/createSongFromMIDIFile.ts");
const resetMIDIOutputs_1 = __webpack_require__(/*! ../../src/resetMIDIOutputs */ "../src/resetMIDIOutputs.ts");
const url = "../assets/minute_waltz.mid";
// const url = '/assets/mozk545a.mid';
// const url = '/assets/mozk545a_musescore.mid';
const init = () => __awaiter(void 0, void 0, void 0, function* () {
    const ma = yield getMIDIAccess_1.getMIDIAccess();
    const song = yield createSongFromMIDIFile_1.createSongFromMIDIFile(url);
    const { inputs, outputs } = getMIDIPorts_1.getMIDIPorts(ma);
    song.tracks.forEach((track) => {
        track.outputs.push(...outputs.map((o) => o.id));
    });
    console.log(song);
    let millis = 3000;
    song.positionMillis = millis;
    let index = getCurrentEventIndex_1.getCurrentEventIndex(song, millis);
    // console.log("START INDEX", index);
    let start = performance.now();
    const play = (a) => {
        const ts = performance.now();
        // console.log(ts, ts - start, a, a - start);
        // const progress = ts - a;
        const progress = ts - start;
        start = ts;
        // const progress = a - start;
        // start = a;
        if (millis < 10000) {
            ({ index, millis } = scheduler_1.schedule({
                song,
                millis,
                index,
                outputs: ma === null || ma === void 0 ? void 0 : ma.outputs,
            }));
            millis += progress;
            // console.log(index, millis);
            requestAnimationFrame((a) => {
                play(a);
            });
        }
        else {
            resetMIDIOutputs_1.resetMIDIOutputs(ma);
        }
    };
    // play(start);
});
init();


/***/ }),

/***/ "../src/bufferreader.ts":
/*!******************************!*\
  !*** ../src/bufferreader.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// from: https://github.com/pravdomil/jasmid.ts
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BufferReader = void 0;
class BufferReader {
    constructor(buffer) {
        this.position = 0;
        this.data = new DataView(buffer);
    }
    read(length) {
        const value = this.data.buffer.slice(this.position, this.position + length);
        this.position += length;
        return value;
    }
    int8() {
        const value = this.data.getInt8(this.position);
        this.position += 1;
        return value;
    }
    uint8() {
        const value = this.data.getUint8(this.position);
        this.position += 1;
        return value;
    }
    uint16() {
        const value = this.data.getUint16(this.position);
        this.position += 2;
        return value;
    }
    uint32() {
        const value = this.data.getUint32(this.position);
        this.position += 4;
        return value;
    }
    string(length) {
        return new TextDecoder("ascii").decode(this.read(length));
    }
    eof() {
        return this.position >= this.data.byteLength;
    }
    /**
     * Read a MIDI-style variable-length integer.
     * (big-endian value in groups of 7 bits, with top bit set to signify that another byte follows)
     */
    midiInt() {
        let result = 0;
        while (true) {
            const value = this.uint8();
            if (value & 0b10000000) {
                result += value & 0b1111111;
                result <<= 7;
            }
            else {
                return result + value;
            }
        }
    }
    midiChunk() {
        const id = this.string(4);
        const length = this.uint32();
        const data = this.read(length);
        return { id, length, data };
    }
}
exports.BufferReader = BufferReader;


/***/ }),

/***/ "../src/calculateMillis.ts":
/*!*********************************!*\
  !*** ../src/calculateMillis.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.calculateMillis = void 0;
const calculateMillis = (events, data) => {
    let { ppq, bpm = -1, playbackSpeed = 1 } = data;
    let millisPerTick = bpm === -1 ? 0 : (((1 / playbackSpeed) * 60) / bpm / ppq) * 1000;
    let ticks = 0;
    let millis = 0;
    // console.log("bpm", bpm, millis);
    return events.map(event => {
        if (event.bpm) {
            ({ bpm } = event);
            // console.log("bpm", bpm, millis);
            millisPerTick = (((1 / playbackSpeed) * 60) / bpm / ppq) * 1000;
        }
        const diffTicks = event.ticks - ticks;
        millis += diffTicks * millisPerTick;
        event.millis = millis;
        ticks = event.ticks;
        return event;
    });
};
exports.calculateMillis = calculateMillis;


/***/ }),

/***/ "../src/createNotes.ts":
/*!*****************************!*\
  !*** ../src/createNotes.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createNotes = void 0;
let index = 0;
const createNotes = (events) => {
    let filtered = events.reduce((acc, val) => {
        // console.log(val.type);
        if (val.type === 0x80 || val.type === 0x90) {
            acc.push(val);
        }
        return acc;
    }, []);
    // filtered = sortMIDIEvents(filtered);
    const notes = [];
    const tmp = {};
    filtered.forEach(e => {
        const id = `${e.trackId}-${e.noteNumber}`;
        // console.log(e.ticks, e.type, id);
        if (e.type === 0x90) {
            if (tmp[id]) {
                // console.warn(`note existed already! ${id}`);
            }
            else {
                tmp[id] = e;
            }
        }
        else if (e.type === 0x80) {
            if (!tmp[id]) {
                // console.warn(`note doesn't exist! ${id}`);
            }
            else {
                const noteOn = tmp[id];
                const note = {
                    id: `note-${new Date().getTime()}-${index++}`,
                    noteOn: noteOn,
                    noteOff: e,
                };
                notes.push(note);
                delete tmp[id];
            }
        }
    });
    // console.log(notes);
    return notes;
};
exports.createNotes = createNotes;


/***/ }),

/***/ "../src/createSongFromMIDIFile.ts":
/*!****************************************!*\
  !*** ../src/createSongFromMIDIFile.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createSongFromMIDIFile = void 0;
const fetch_1 = __webpack_require__(/*! ./util/fetch */ "../src/util/fetch.ts");
const parseMIDIFile_1 = __webpack_require__(/*! ./parseMIDIFile */ "../src/parseMIDIFile.ts");
const createSongFromMIDIFile = (arg) => __awaiter(void 0, void 0, void 0, function* () {
    let ab;
    if (typeof arg === "string") {
        ab = yield fetch_1.fetchArraybuffer(arg);
    }
    else {
        ab = arg;
    }
    // const { header, timeTrack, tracks } = parseMidiFile(ab);
    return parseMIDIFile_1.parseMIDIFile(ab);
});
exports.createSongFromMIDIFile = createSongFromMIDIFile;


/***/ }),

/***/ "../src/createTrack.ts":
/*!*****************************!*\
  !*** ../src/createTrack.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/// <reference types="webmidi" />
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createTrack = void 0;
const createTrack = (id) => {
    return {
        id,
        latency: 0,
        inputs: [],
        outputs: [],
    };
};
exports.createTrack = createTrack;


/***/ }),

/***/ "../src/getCurrentEventIndex.ts":
/*!**************************************!*\
  !*** ../src/getCurrentEventIndex.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getCurrentEventIndex = void 0;
const getCurrentEventIndex = (song, millis, startIndex = 0) => {
    const { events } = song;
    let i = startIndex;
    for (; i < events.length; i++) {
        const event = events[i];
        // console.log(event.millis, millis);
        if (typeof event.millis === "undefined" || event.millis >= millis) {
            break;
        }
    }
    return i;
};
exports.getCurrentEventIndex = getCurrentEventIndex;


/***/ }),

/***/ "../src/getMIDIAccess.ts":
/*!*******************************!*\
  !*** ../src/getMIDIAccess.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getMIDIAccess = void 0;
let midiAccess;
const getMIDIAccess = () => __awaiter(void 0, void 0, void 0, function* () {
    if (midiAccess !== null && typeof midiAccess !== "undefined") {
        return Promise.resolve(midiAccess);
    }
    if (!navigator.requestMIDIAccess) {
        midiAccess = null;
        console.log("WebMIDI not supported");
        return Promise.resolve(null);
    }
    try {
        const ma = yield navigator.requestMIDIAccess();
        // midiAccess.onstatechange = (e: WebMidi.MIDIConnectionEvent) => {
        // };
        if (!ma.inputs || !ma.outputs) {
            console.log("Firefox WebMIDI API support is still in progress");
            return null;
        }
        midiAccess = ma;
        return ma;
    }
    catch (e) {
        console.log("MIDI could not be initialized:", e);
        return null;
    }
});
exports.getMIDIAccess = getMIDIAccess;


/***/ }),

/***/ "../src/getMIDIPorts.ts":
/*!******************************!*\
  !*** ../src/getMIDIPorts.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getMIDIPorts = void 0;
const getMIDIPorts = (midiAccess) => {
    // export const getMIDIDevices = (): { inputs: WebMidi.MIDIInput[], outputs: WebMidi.MIDIOutput[] } => {
    const inputs = [];
    const outputs = [];
    if (midiAccess) {
        midiAccess.inputs.forEach(i => {
            inputs.push(i);
        });
        midiAccess.outputs.forEach(o => {
            outputs.push(o);
        });
    }
    // console.log(inputs, outputs);
    return { inputs, outputs };
};
exports.getMIDIPorts = getMIDIPorts;


/***/ }),

/***/ "../src/parseMIDIFile.ts":
/*!*******************************!*\
  !*** ../src/parseMIDIFile.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

// based on: https://github.com/pravdomil/jasmid.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseMIDIFile = void 0;
// import { BufferReader } from 'jasmid.ts';
const uniqid_1 = __importDefault(__webpack_require__(/*! uniqid */ "../node_modules/uniqid/index.js"));
const bufferreader_1 = __webpack_require__(/*! ./bufferreader */ "../src/bufferreader.ts");
const midi_1 = __webpack_require__(/*! ./util/midi */ "../src/util/midi.ts");
const calculateMillis_1 = __webpack_require__(/*! ./calculateMillis */ "../src/calculateMillis.ts");
const createTrack_1 = __webpack_require__(/*! ./createTrack */ "../src/createTrack.ts");
const createNotes_1 = __webpack_require__(/*! ./createNotes */ "../src/createNotes.ts");
function parseMIDIFile(buffer) {
    const reader = new bufferreader_1.BufferReader(buffer);
    const header = parseHeader(reader);
    // const { timeTrack, tracks } = parseTracks(reader, header.ticksPerBeat)
    const { tracks, events, initialTempo, initialNumerator, initialDenominator } = parseTracks(reader, header.ticksPerBeat);
    return {
        ppq: header.ticksPerBeat,
        latency: 17,
        bufferTime: 100,
        tracks,
        tracksById: tracks.reduce((acc, value) => {
            acc[value.id] = value;
            return acc;
        }, {}),
        events: calculateMillis_1.calculateMillis(events, {
            ppq: header.ticksPerBeat,
            bpm: initialTempo,
        }),
        notes: createNotes_1.createNotes(events),
        initialTempo,
        initialNumerator,
        initialDenominator,
    };
}
exports.parseMIDIFile = parseMIDIFile;
function parseHeader(reader) {
    const headerChunk = reader.midiChunk();
    if (headerChunk.id !== "MThd" || headerChunk.length !== 6) {
        throw new Error("Bad .mid file, header not found");
    }
    const headerReader = new bufferreader_1.BufferReader(headerChunk.data);
    const formatType = headerReader.uint16();
    const trackCount = headerReader.uint16();
    const timeDivision = headerReader.uint16();
    if (timeDivision & 0x8000) {
        throw new Error("Expressing time division in SMTPE frames is not supported yet");
    }
    const ticksPerBeat = timeDivision;
    return { formatType, trackCount, ticksPerBeat };
}
function parseTracks(reader, ppq) {
    let initialTempo = -1;
    let initialNumerator = -1;
    let initialDenominator = -1;
    const tracks = [];
    const events = [];
    while (!reader.eof()) {
        const trackChunk = reader.midiChunk();
        if (trackChunk.id !== "MTrk") {
            throw new Error(`Unexpected chunk, expected MTrk, got ${trackChunk.id}`);
        }
        const trackId = `T-${uniqid_1.default()}`;
        const track = createTrack_1.createTrack(trackId);
        const trackTrack = new bufferreader_1.BufferReader(trackChunk.data);
        let ticks = 0;
        let lastTypeByte = null;
        while (!trackTrack.eof()) {
            let data = parseEvent(trackTrack, lastTypeByte);
            // console.log(data);
            const { event, deltaTime, bpm, numerator, denominator, trackName } = data;
            if (bpm && initialTempo === -1) {
                initialTempo = bpm;
            }
            if (numerator && initialNumerator === -1) {
                initialNumerator = numerator;
            }
            if (denominator && initialDenominator === -1) {
                initialDenominator = denominator;
            }
            if (trackName) {
                track.name = trackName;
            }
            ticks += deltaTime;
            // console.log('TICKS', ticks, bpm, numerator);
            lastTypeByte = event.type;
            events.push(Object.assign(Object.assign({}, event), { trackId,
                ticks }));
        }
        tracks.push(track);
    }
    return {
        events: midi_1.sortMIDIEvents(events),
        tracks,
        initialTempo,
        initialNumerator,
        initialDenominator,
    };
}
function parseEvent(reader, lastTypeByte) {
    const deltaTime = reader.midiInt();
    let typeByte = reader.uint8();
    // meta events: 0xff
    // system events: 0xf0, 0xf7
    // midi events: all other bytes
    if (typeByte === 0xff) {
        const subTypeByte = reader.uint8();
        const length = reader.midiInt();
        switch (subTypeByte) {
            // sequence number
            case 0x00:
                if (length !== 2) {
                    throw new Error(`Expected length for sequenceNumber event is 2, got ${length}`);
                }
                return {
                    event: {
                        type: typeByte,
                        subType: subTypeByte,
                        descr: midi_1.SEQUENCE_NUMBER,
                        number: reader.uint16(),
                    },
                    deltaTime,
                };
            // text
            case 0x01:
                return {
                    event: {
                        type: typeByte,
                        subType: subTypeByte,
                        descr: midi_1.TEXT,
                        text: reader.string(length),
                    },
                    deltaTime,
                };
            // copyright
            case 0x02:
                return {
                    event: {
                        type: typeByte,
                        subType: subTypeByte,
                        descr: midi_1.COPYRIGHT_NOTICE,
                        text: reader.string(length),
                    },
                    deltaTime,
                };
            // track name
            case 0x03:
                const trackName = reader.string(length);
                return {
                    event: {
                        type: typeByte,
                        subType: subTypeByte,
                        descr: midi_1.TRACK_NAME,
                        text: trackName,
                    },
                    deltaTime,
                    trackName,
                };
            // instrument name
            case 0x04:
                return {
                    event: {
                        type: typeByte,
                        subType: subTypeByte,
                        descr: midi_1.INSTRUMENT_NAME,
                        text: reader.string(length),
                    },
                    deltaTime,
                };
            // lyrics
            case 0x05:
                return {
                    event: {
                        type: typeByte,
                        subType: subTypeByte,
                        descr: midi_1.LYRICS,
                        text: reader.string(length),
                    },
                    deltaTime,
                };
            // marker
            case 0x06:
                return {
                    event: {
                        type: typeByte,
                        subType: subTypeByte,
                        descr: midi_1.MARKER,
                        text: reader.string(length),
                    },
                    deltaTime,
                };
            // cue point
            case 0x07:
                return {
                    event: {
                        type: typeByte,
                        subType: subTypeByte,
                        descr: midi_1.CUE_POINT,
                        text: reader.string(length),
                    },
                    deltaTime,
                };
            // channel prefix
            case 0x20:
                if (length !== 1) {
                    throw new Error(`Expected length for midiChannelPrefix event is 1, got ${length}`);
                }
                return {
                    event: {
                        type: typeByte,
                        subType: subTypeByte,
                        descr: midi_1.CHANNEL_PREFIX,
                        channel: reader.uint8(),
                    },
                    deltaTime,
                };
            // end of track
            case 0x2f:
                if (length !== 0) {
                    throw new Error(`Expected length for endOfTrack event is 0, got ${length}`);
                }
                return {
                    event: {
                        descr: midi_1.END_OF_TRACK,
                        type: typeByte,
                        subType: subTypeByte,
                    },
                    deltaTime,
                };
            // tempo
            case 0x51:
                if (length !== 3) {
                    throw new Error(`Expected length for setTempo event is 3, got ${length}`);
                }
                const microsecondsPerBeat = (reader.uint8() << 16) + (reader.uint8() << 8) + reader.uint8();
                const bpm = 60000000 / microsecondsPerBeat;
                return {
                    event: {
                        type: typeByte,
                        subType: subTypeByte,
                        descr: midi_1.TEMPO,
                        bpm,
                    },
                    bpm,
                    deltaTime,
                };
            // smpte offset
            case 0x54:
                if (length != 5) {
                    throw new Error(`Expected length for smpteOffset event is 5, got ${length}`);
                }
                const hourByte = reader.uint8();
                return {
                    event: {
                        type: typeByte,
                        subType: subTypeByte,
                        descr: midi_1.SMPTE_OFFSET,
                        frameRate: getFrameRate(hourByte),
                        hour: hourByte & 0x1f,
                        min: reader.uint8(),
                        sec: reader.uint8(),
                        frame: reader.uint8(),
                        subFrame: reader.uint8(),
                    },
                    deltaTime,
                };
            // time signature
            case 0x58:
                if (length != 4) {
                    throw new Error(`Expected length for timeSignature event is 4, got ${length}`);
                }
                const numerator = reader.uint8();
                const denominator = Math.pow(2, reader.uint8());
                return {
                    event: {
                        type: typeByte,
                        subType: subTypeByte,
                        descr: midi_1.TIME_SIGNATURE,
                        numerator,
                        denominator,
                        metronome: reader.uint8(),
                        thirtySeconds: reader.uint8(),
                    },
                    numerator,
                    denominator,
                    deltaTime,
                };
            // key signature
            case 0x59:
                if (length != 2) {
                    throw new Error(`Expected length for keySignature event is 2, got ${length}`);
                }
                return {
                    event: {
                        type: typeByte,
                        subType: subTypeByte,
                        descr: midi_1.KEY_SIGNATURE,
                        key: reader.int8(),
                        scale: reader.uint8(),
                    },
                    deltaTime,
                };
            // sequencer specific
            case 0x7f:
                return {
                    event: {
                        type: typeByte,
                        subType: subTypeByte,
                        descr: midi_1.SEQUENCER_SPECIFIC,
                        data: reader.read(length),
                    },
                    deltaTime,
                };
            // undefined
            default:
                return {
                    event: {
                        type: typeByte,
                        subType: subTypeByte,
                        descr: "undefined",
                        data: reader.read(length),
                    },
                    deltaTime,
                };
        }
    }
    else if (typeByte === 0xf0) {
        // system exclusive
        const length = reader.midiInt();
        return {
            event: {
                type: 0xf0,
                descr: midi_1.SYSTEM_EXCLUSIVE,
                data: reader.read(length),
            },
            deltaTime,
        };
    }
    else if (typeByte === 0xf7) {
        // divided system exclusive
        const length = reader.midiInt();
        return {
            event: {
                type: 0xf0,
                descr: midi_1.DIVIDED_SYSTEM_EXCLUSIVE,
                data: reader.read(length),
            },
            deltaTime,
        };
    }
    else {
        /**
         * running status - reuse lastEventTypeByte as the event type
         * typeByte is actually the first parameter
         */
        const isRunningStatus = (typeByte & 0b10000000) === 0;
        const value = isRunningStatus ? typeByte : reader.uint8();
        typeByte = isRunningStatus ? (lastTypeByte === null ? 0 : lastTypeByte) : typeByte;
        // console.log(isRunningStatus, typeByte, value);
        const channel = typeByte & 0x0f;
        // channels[channel] = true;
        switch (typeByte >> 4) {
            // note off
            case 0x08:
                return {
                    event: {
                        type: 0x80,
                        descr: midi_1.NOTE_OFF,
                        channel,
                        noteNumber: value,
                        velocity: reader.uint8(),
                    },
                    deltaTime,
                };
            // note on
            case 0x09:
                const velocity = reader.uint8();
                return {
                    event: {
                        type: velocity === 0 ? 0x80 : 0x90,
                        descr: velocity === 0 ? midi_1.NOTE_OFF : midi_1.NOTE_ON,
                        channel,
                        noteNumber: value,
                        velocity,
                    },
                    deltaTime,
                };
            // note aftertouch
            case 0x0a:
                return {
                    event: {
                        type: 0xa0,
                        descr: midi_1.NOTE_AFTERTOUCH,
                        channel,
                        noteNumber: value,
                        amount: reader.uint8(),
                    },
                    deltaTime,
                };
            // controller
            case 0x0b:
                return {
                    event: {
                        type: 0xb0,
                        descr: midi_1.CONTROLLER,
                        channel,
                        controllerNumber: value,
                        value: reader.uint8(),
                    },
                    deltaTime,
                };
            // program change
            case 0x0c:
                return {
                    event: {
                        type: 0xc0,
                        descr: midi_1.PROGRAM_CHANGE,
                        channel,
                        program: value,
                    },
                    deltaTime,
                };
            // channel aftertouch
            case 0x0d:
                return {
                    event: {
                        type: 0xd0,
                        descr: midi_1.CHANNEL_AFTERTOUCH,
                        channel,
                        amount: value,
                    },
                    deltaTime,
                };
            // pitch bend
            case 0x0e:
                return {
                    event: {
                        type: 0xe0,
                        descr: midi_1.PITCH_BEND,
                        channel,
                        value: value + (reader.uint8() << 7),
                    },
                    deltaTime,
                };
            // default:
            //   return {
            //     event: {
            //       type: typeByte >> 4,
            //       descr: "unrecognized",
            //       channel,
            //     },
            //     deltaTime,
            //   };
        }
    }
    console.log(`Unrecognized MIDI event type byte: ${typeByte} (fix this)`);
    return {
        event: {
            type: typeByte === 255 ? 0 : typeByte,
        },
        deltaTime,
    };
    throw new Error(`Unrecognized MIDI event type byte: ${typeByte}`);
}
function getFrameRate(hourByte) {
    switch (hourByte & 0b1100000) {
        case 0x00:
            return 24;
        case 0x20:
            return 25;
        case 0x40:
            return 29;
        case 0x60:
            return 30;
        default:
            return 0;
    }
}


/***/ }),

/***/ "../src/resetMIDIOutputs.ts":
/*!**********************************!*\
  !*** ../src/resetMIDIOutputs.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resetMIDIOutputs = void 0;
// import { midiAccess } from "./initAudioAndMIDI";
const getMIDIPorts_1 = __webpack_require__(/*! ./getMIDIPorts */ "../src/getMIDIPorts.ts");
// you can use this for a panic button that is common in DAWs
const resetMIDIOutputs = (midiAccess, offset = 100) => {
    if (midiAccess) {
        const { outputs } = getMIDIPorts_1.getMIDIPorts(midiAccess);
        const time = performance.now() + offset;
        outputs.forEach(output => {
            for (let channel = 0; channel < 16; channel++) {
                output.send([0xb0 + channel, 0x7b, 0x00], time); // stop all notes
                output.send([0xb0 + channel, 0x79, 0x00], time); // reset all controllers
            }
        });
    }
};
exports.resetMIDIOutputs = resetMIDIOutputs;


/***/ }),

/***/ "../src/scheduler.ts":
/*!***************************!*\
  !*** ../src/scheduler.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.schedule = void 0;
const midi_1 = __webpack_require__(/*! ./util/midi */ "../src/util/midi.ts");
const schedule = ({ song, index, millis, outputs, }) => {
    const ts = performance.now();
    const { events } = song;
    const scheduled = [];
    // let lastNoteNumber: number = -1;
    // let lastNoteType: number = -1;
    while (index < events.length) {
        const event = events[index];
        if (!event.millis || !event.trackId) {
            // break;
            index++;
        }
        else if (event.millis < millis + song.bufferTime) {
            scheduled.push(event);
            // console.log(event.ticks, event.descr, (event as NoteOnEvent).noteNumber);
            const track = song.tracksById[event.trackId];
            track.outputs.forEach(id => {
                var _a;
                if (event.descr === midi_1.NOTE_ON || event.descr === midi_1.NOTE_OFF) {
                    const e = event;
                    if (event.millis) {
                        // console.log(event.type, event.channel, event.noteNumber);
                        let time = ts + song.latency + track.latency + (event.millis - millis);
                        // console.log(event["noteNumber"], event.descr, event.millis, millis, time, ts, time - ts);
                        // console.log(e.noteNumber, lastNoteNumber, lastNoteType);
                        // if (e.noteNumber === lastNoteNumber && lastNoteType === 0x90) {
                        //   if (e.descr === NOTE_ON) {
                        //     console.log("repeating notes");
                        //     time += 1;
                        //   }
                        // }
                        // lastNoteNumber = e.noteNumber;
                        // lastNoteType = e.type;
                        // console.log(event.type + event.channel, event.noteNumber, event.velocity);
                        // quick fix for repeating notes
                        if (e.descr === midi_1.NOTE_ON) {
                            time += 1;
                        }
                        (_a = outputs === null || outputs === void 0 ? void 0 : outputs.get(id)) === null || _a === void 0 ? void 0 : _a.send([event.type + event.channel, event.noteNumber, event.velocity], time);
                    }
                }
            });
            index++;
        }
        else {
            break;
        }
    }
    // console.log('[SCHEDULED]', scheduled.map(e => [e.ticks, e.millis]));
    return { millis, index, scheduled };
};
exports.schedule = schedule;


/***/ }),

/***/ "../src/util/fetch.ts":
/*!****************************!*\
  !*** ../src/util/fetch.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fetchArraybuffer = exports.fetchXML = exports.fetchJSON = void 0;
const status = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
    }
    return Promise.reject(new Error(response.statusText));
};
const fetchJSON = (url) => 
// fetch(url, {
//   mode: 'no-cors'
// })
fetch(url)
    .then(status)
    .then(response => response.json());
exports.fetchJSON = fetchJSON;
const fetchXML = (url) => fetch(url)
    .then(status)
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"));
exports.fetchXML = fetchXML;
const fetchArraybuffer = (url) => fetch(url)
    .then(status)
    .then(response => response.arrayBuffer());
exports.fetchArraybuffer = fetchArraybuffer;


/***/ }),

/***/ "../src/util/midi.ts":
/*!***************************!*\
  !*** ../src/util/midi.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.removeDoubleEvents = exports.sortMIDIEvents = exports.getNoteNumber = exports.getMidiMessageEvent = exports.getMidiEventDescription = exports.noteNames = exports.PITCH_BEND = exports.CHANNEL_AFTERTOUCH = exports.PROGRAM_CHANGE = exports.CONTROLLER = exports.NOTE_AFTERTOUCH = exports.NOTE_OFF = exports.NOTE_ON = exports.DIVIDED_SYSTEM_EXCLUSIVE = exports.SYSTEM_EXCLUSIVE = exports.SEQUENCER_SPECIFIC = exports.KEY_SIGNATURE = exports.TIME_SIGNATURE = exports.SMPTE_OFFSET = exports.TEMPO = exports.END_OF_TRACK = exports.CHANNEL_PREFIX = exports.CUE_POINT = exports.MARKER = exports.LYRICS = exports.INSTRUMENT_NAME = exports.TRACK_NAME = exports.COPYRIGHT_NOTICE = exports.TEXT = exports.SEQUENCE_NUMBER = void 0;
exports.SEQUENCE_NUMBER = "sequence number";
exports.TEXT = "text";
exports.COPYRIGHT_NOTICE = "copyright notice";
exports.TRACK_NAME = "track name";
exports.INSTRUMENT_NAME = "instrument name";
exports.LYRICS = "lyrics";
exports.MARKER = "marker";
exports.CUE_POINT = "cue point";
exports.CHANNEL_PREFIX = "channel prefix";
exports.END_OF_TRACK = "end of track";
exports.TEMPO = "tempo";
exports.SMPTE_OFFSET = "smpte offset";
exports.TIME_SIGNATURE = "time signature";
exports.KEY_SIGNATURE = "key signature";
exports.SEQUENCER_SPECIFIC = "sequencer specific";
exports.SYSTEM_EXCLUSIVE = "system exclusive";
exports.DIVIDED_SYSTEM_EXCLUSIVE = "divided system exclusive";
exports.NOTE_ON = "note on";
exports.NOTE_OFF = "note off";
exports.NOTE_AFTERTOUCH = "note aftertouch";
exports.CONTROLLER = "controller";
exports.PROGRAM_CHANGE = "program change";
exports.CHANNEL_AFTERTOUCH = "channel aftertouch";
exports.PITCH_BEND = "pitch bend";
const descriptions = {
    0xff: {
        0x00: "sequence number",
        0x01: "text",
        0x02: "copyright notice",
        0x03: "track name",
        0x04: "instrument name",
        0x05: "lyrics",
        0x06: "marker",
        0x07: "cue point",
        0x20: "channel prefix",
        0x2f: "end of track",
        0x51: "tempo",
        0x54: "smpte offset",
        0x58: "time signature",
        0x59: "key signature",
        0x7f: "sequencer specific",
    },
    0xf0: "system exclusive",
    0xf7: "divided sysex",
    0x80: "note on",
    0x90: "note off",
    0xa0: "note aftertouch",
    0xb0: "controller",
    0xc0: "program change",
    0xd0: "channel aftertouch",
    0xe0: "pitch bend",
};
exports.noteNames = {
    sharp: ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"],
    flat: ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"],
    "enharmonic-sharp": ["B#", "C#", "C##", "D#", "D##", "E#", "F#", "F##", "G#", "G##", "A#", "A##"],
    "enharmonic-flat": ["Dbb", "Db", "Ebb", "Eb", "Fb", "Gbb", "Gb", "Abb", "Ab", "Bbb", "Bb", "Cb"],
};
const getMidiEventDescription = (type, subType) => {
    if (typeof subType === "undefined") {
        return descriptions[type];
    }
    return descriptions[type][subType] || "undefined";
};
exports.getMidiEventDescription = getMidiEventDescription;
const getMidiMessageEvent = (event) => {
    switch (event.descr) {
        case exports.NOTE_ON:
            return [0x90 + event.channel, event.noteNumber, event.velocity];
        case exports.NOTE_OFF:
            return [0x80 + event.channel, event.noteNumber, event.velocity];
    }
    return [0];
};
exports.getMidiMessageEvent = getMidiMessageEvent;
const getNoteNumber = (name, octave, mode = "sharp") => {
    // let index = -1;
    // const modes = Object.getOwnPropertyNames(noteNames);
    // for (let i = 0, maxi = modes.length; i < maxi; i++) {
    //   const names = modes[i];
    //   for (let j = 0, maxj = names.length; j < maxj; j++) {
    //     if (mode[j] === name) {
    //       index = i;
    //       break;
    //     }
    //   }
    // }
    let index = -1;
    const modes = Object.values(exports.noteNames);
    for (let i = 0; i < modes.length; i++) {
        const names = modes[i];
        for (let j = 0; j < names.length; j++) {
            // console.log(names[j], name);
            if (names[j] === name) {
                index = j;
                break;
            }
        }
    }
    // console.log(name, octave, index);
    if (index === -1) {
        return -1;
    }
    //number = (index + 12) + (octave * 12) + 12; // → in Cubase central C = C3 instead of C4
    return index + 12 + octave * 12; // → midi standard + scientific naming, see: http://en.wikipedia.org/wiki/Middle_C and http://en.wikipedia.org/wiki/Scientific_pitch_notation
};
exports.getNoteNumber = getNoteNumber;
const sortMIDIEvents = (events) => events.sort((a, b) => {
    if (a.ticks < b.ticks) {
        return -1;
    }
    else if (a.ticks > b.ticks) {
        return 1;
        // } else if (a.type === 0x80 && b.type === 0x90) {
        //   // note off before note on
        //   return -1;
        // } else if (a.type === 0x51 || a.type === 0x58) {
        //   // tempo and time signature events first
        //   return -1;
    }
    return 0;
});
exports.sortMIDIEvents = sortMIDIEvents;
const removeDoubleEvents = (events) => {
    // var i, maxi = events.length,
    //   event, eventId, lastId,
    //   result = [];
    // events.sort(function (a, b) {
    //   return a.eventNumber - b.eventNumber;
    // });
    // for (i = 0; i < maxi; i++) {
    //   event = events[i];
    //   eventId = event.id;
    //   if (eventId !== lastId) {
    //     result.push(event);
    //   }
    //   lastId = eventId;
    // }
    // return result;
    return [];
};
exports.removeDoubleEvents = removeDoubleEvents;


/***/ }),

/***/ "../node_modules/uniqid/index.js":
/*!***************************************!*\
  !*** ../node_modules/uniqid/index.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");
/* 
(The MIT License)
Copyright (c) 2014-2019 Halász Ádám <mail@adamhalasz.com>
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

//  Unique Hexatridecimal ID Generator
// ================================================

//  Dependencies
// ================================================
var pid = process && process.pid ? process.pid.toString(36) : '' ;
var address = '';
if(false){ var i, mac, networkInterfaces; } 

//  Exports
// ================================================
module.exports = module.exports.default = function(prefix, suffix){ return (prefix ? prefix : '') + address + pid + now().toString(36) + (suffix ? suffix : ''); }
module.exports.process = function(prefix, suffix){ return (prefix ? prefix : '') + pid + now().toString(36) + (suffix ? suffix : ''); }
module.exports.time    = function(prefix, suffix){ return (prefix ? prefix : '') + now().toString(36) + (suffix ? suffix : ''); }

//  Helpers
// ================================================
function now(){
    var time = Date.now();
    var last = now.last || time;
    return now.last = time > last ? time : last + 1;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./basic2/index.ts");
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJkYXctZXhhbXBsZXMvLi9iYXNpYzIvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly93ZWJkYXctZXhhbXBsZXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYmRhdy1leGFtcGxlcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3dlYmRhdy1leGFtcGxlcy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vd2ViZGF3LWV4YW1wbGVzLy4vYmFzaWMyL2luZGV4LnNjc3M/YmViOCIsIndlYnBhY2s6Ly93ZWJkYXctZXhhbXBsZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2ViZGF3LWV4YW1wbGVzLy4vYmFzaWMyL2luZGV4LnRzIiwid2VicGFjazovL3dlYmRhdy1leGFtcGxlcy8uLi9zcmMvYnVmZmVycmVhZGVyLnRzIiwid2VicGFjazovL3dlYmRhdy1leGFtcGxlcy8uLi9zcmMvY2FsY3VsYXRlTWlsbGlzLnRzIiwid2VicGFjazovL3dlYmRhdy1leGFtcGxlcy8uLi9zcmMvY3JlYXRlTm90ZXMudHMiLCJ3ZWJwYWNrOi8vd2ViZGF3LWV4YW1wbGVzLy4uL3NyYy9jcmVhdGVTb25nRnJvbU1JRElGaWxlLnRzIiwid2VicGFjazovL3dlYmRhdy1leGFtcGxlcy8uLi9zcmMvY3JlYXRlVHJhY2sudHMiLCJ3ZWJwYWNrOi8vd2ViZGF3LWV4YW1wbGVzLy4uL3NyYy9nZXRDdXJyZW50RXZlbnRJbmRleC50cyIsIndlYnBhY2s6Ly93ZWJkYXctZXhhbXBsZXMvLi4vc3JjL2dldE1JRElBY2Nlc3MudHMiLCJ3ZWJwYWNrOi8vd2ViZGF3LWV4YW1wbGVzLy4uL3NyYy9nZXRNSURJUG9ydHMudHMiLCJ3ZWJwYWNrOi8vd2ViZGF3LWV4YW1wbGVzLy4uL3NyYy9wYXJzZU1JRElGaWxlLnRzIiwid2VicGFjazovL3dlYmRhdy1leGFtcGxlcy8uLi9zcmMvcmVzZXRNSURJT3V0cHV0cy50cyIsIndlYnBhY2s6Ly93ZWJkYXctZXhhbXBsZXMvLi4vc3JjL3NjaGVkdWxlci50cyIsIndlYnBhY2s6Ly93ZWJkYXctZXhhbXBsZXMvLi4vc3JjL3V0aWwvZmV0Y2gudHMiLCJ3ZWJwYWNrOi8vd2ViZGF3LWV4YW1wbGVzLy4uL3NyYy91dGlsL21pZGkudHMiLCJ3ZWJwYWNrOi8vd2ViZGF3LWV4YW1wbGVzLy4uL25vZGVfbW9kdWxlcy91bmlxaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2ViZGF3LWV4YW1wbGVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYmRhdy1leGFtcGxlcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJkYXctZXhhbXBsZXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYmRhdy1leGFtcGxlcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYmRhdy1leGFtcGxlcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYmRhdy1leGFtcGxlcy93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDc0g7QUFDN0I7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLHFEQUFxRCxpQkFBaUIsa0JBQWtCLHdCQUF3QixFQUFFLHNCQUFzQixtQkFBbUIsRUFBRSxTQUFTLG9GQUFvRixVQUFVLFVBQVUsaUJBQWlCLE1BQU0sOENBQThDLGlCQUFpQixrQkFBa0Isd0JBQXdCLGNBQWMsbUJBQW1CLEtBQUssR0FBRyxxQkFBcUI7QUFDNWM7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMscUJBQXFCO0FBQ2pFOztBQUVBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixxQkFBcUI7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7OztBQ2pFYTs7QUFFYixpQ0FBaUMsMkhBQTJIOztBQUU1Siw2QkFBNkIsa0tBQWtLOztBQUUvTCxpREFBaUQsZ0JBQWdCLGdFQUFnRSx3REFBd0QsNkRBQTZELHNEQUFzRCxrSEFBa0g7O0FBRTlaLHNDQUFzQyx1REFBdUQsdUNBQXVDLFNBQVMsT0FBTyxrQkFBa0IsRUFBRSxhQUFhOztBQUVyTCx3Q0FBd0MsZ0ZBQWdGLGVBQWUsZUFBZSxnQkFBZ0Isb0JBQW9CLE1BQU0sMENBQTBDLCtCQUErQixhQUFhLHFCQUFxQixtQ0FBbUMsRUFBRSxFQUFFLGNBQWMsV0FBVyxVQUFVLEVBQUUsVUFBVSxNQUFNLGlEQUFpRCxFQUFFLFVBQVUsa0JBQWtCLEVBQUUsRUFBRSxhQUFhOztBQUV2ZSwrQkFBK0Isb0NBQW9DOztBQUVuRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLEU7Ozs7Ozs7Ozs7QUMvQkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztB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QztBQUNaLENBQUMsQ0FBQztBQW5CVywwQkFBa0Isc0JBbUI3Qjs7Ozs7Ozs7Ozs7O0FDcEpGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsT0FBTyxJQUFJLE9BQU8sT0FBTyxPQUFPO0FBQzFDO0FBQ0EsR0FBRyxLQUF5QyxDQUFDLGtDOztBQWM3QztBQUNBO0FBQ0EsaUJBQWlCLHNCQUFzQiw0QkFBNEIsNkZBQTZGO0FBQ2hLLHNCQUFzQiw0QkFBNEIsbUZBQW1GO0FBQ3JJLG1CQUFtQiwrQkFBK0IsNkVBQTZFOztBQUUvSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3pDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJiYXNpYzIvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNjb250cm9scyB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdzsgfVxcbiAgI2NvbnRyb2xzIGJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMDBweDsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2Jhc2ljMi9pbmRleC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUIsRUFBQTtFQUhyQjtJQU1JLFlBQVksRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjY29udHJvbHMge1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFxuICBidXR0b24ge1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn07IiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCBcIi4vaW5kZXguc2Nzc1wiO1xuaW1wb3J0IHsgc2NoZWR1bGUgfSBmcm9tIFwiLi4vLi4vc3JjL3NjaGVkdWxlclwiO1xuaW1wb3J0IHsgZ2V0Q3VycmVudEV2ZW50SW5kZXggfSBmcm9tIFwiLi4vLi4vc3JjL2dldEN1cnJlbnRFdmVudEluZGV4XCI7XG5pbXBvcnQgeyBnZXRNSURJQWNjZXNzIH0gZnJvbSBcIi4uLy4uL3NyYy9nZXRNSURJQWNjZXNzXCI7XG5pbXBvcnQgeyBnZXRNSURJUG9ydHMgfSBmcm9tIFwiLi4vLi4vc3JjL2dldE1JRElQb3J0c1wiO1xuaW1wb3J0IHsgY3JlYXRlU29uZ0Zyb21NSURJRmlsZSB9IGZyb20gXCIuLi8uLi9zcmMvY3JlYXRlU29uZ0Zyb21NSURJRmlsZVwiO1xuaW1wb3J0IHsgcmVzZXRNSURJT3V0cHV0cyB9IGZyb20gXCIuLi8uLi9zcmMvcmVzZXRNSURJT3V0cHV0c1wiO1xuXG5jb25zdCB1cmwgPSBcIi4uL2Fzc2V0cy9taW51dGVfd2FsdHoubWlkXCI7XG4vLyBjb25zdCB1cmwgPSAnL2Fzc2V0cy9tb3prNTQ1YS5taWQnO1xuLy8gY29uc3QgdXJsID0gJy9hc3NldHMvbW96azU0NWFfbXVzZXNjb3JlLm1pZCc7XG5cbmNvbnN0IGluaXQgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IG1hID0gYXdhaXQgZ2V0TUlESUFjY2VzcygpO1xuICBjb25zdCBzb25nID0gYXdhaXQgY3JlYXRlU29uZ0Zyb21NSURJRmlsZSh1cmwpO1xuICBjb25zdCB7IGlucHV0cywgb3V0cHV0cyB9ID0gZ2V0TUlESVBvcnRzKG1hKTtcbiAgc29uZy50cmFja3MuZm9yRWFjaCgodHJhY2spID0+IHtcbiAgICB0cmFjay5vdXRwdXRzLnB1c2goLi4ub3V0cHV0cy5tYXAoKG8pID0+IG8uaWQpKTtcbiAgfSk7XG4gIGNvbnNvbGUubG9nKHNvbmcpO1xuXG4gIGxldCBtaWxsaXMgPSAzMDAwO1xuICBzb25nLnBvc2l0aW9uTWlsbGlzID0gbWlsbGlzO1xuICBsZXQgaW5kZXggPSBnZXRDdXJyZW50RXZlbnRJbmRleChzb25nLCBtaWxsaXMpO1xuICAvLyBjb25zb2xlLmxvZyhcIlNUQVJUIElOREVYXCIsIGluZGV4KTtcbiAgbGV0IHN0YXJ0OiBudW1iZXIgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgY29uc3QgcGxheSA9IChhOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCB0cyA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRzLCB0cyAtIHN0YXJ0LCBhLCBhIC0gc3RhcnQpO1xuICAgIC8vIGNvbnN0IHByb2dyZXNzID0gdHMgLSBhO1xuICAgIGNvbnN0IHByb2dyZXNzID0gdHMgLSBzdGFydDtcbiAgICBzdGFydCA9IHRzO1xuICAgIC8vIGNvbnN0IHByb2dyZXNzID0gYSAtIHN0YXJ0O1xuICAgIC8vIHN0YXJ0ID0gYTtcbiAgICBpZiAobWlsbGlzIDwgMTAwMDApIHtcbiAgICAgICh7IGluZGV4LCBtaWxsaXMgfSA9IHNjaGVkdWxlKHtcbiAgICAgICAgc29uZyxcbiAgICAgICAgbWlsbGlzLFxuICAgICAgICBpbmRleCxcbiAgICAgICAgb3V0cHV0czogbWE/Lm91dHB1dHMsXG4gICAgICB9KSk7XG4gICAgICBtaWxsaXMgKz0gcHJvZ3Jlc3M7XG4gICAgICAvLyBjb25zb2xlLmxvZyhpbmRleCwgbWlsbGlzKTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoYSkgPT4ge1xuICAgICAgICBwbGF5KGEpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc2V0TUlESU91dHB1dHMobWEpO1xuICAgIH1cbiAgfTtcbiAgLy8gcGxheShzdGFydCk7XG59O1xuXG5pbml0KCk7XG4iLCIvLyBmcm9tOiBodHRwczovL2dpdGh1Yi5jb20vcHJhdmRvbWlsL2phc21pZC50c1xuXG5leHBvcnQgY2xhc3MgQnVmZmVyUmVhZGVyIHtcbiAgcHJpdmF0ZSBwb3NpdGlvbjogbnVtYmVyO1xuICBwcml2YXRlIGRhdGE6IERhdGFWaWV3O1xuXG4gIGNvbnN0cnVjdG9yKGJ1ZmZlcjogQXJyYXlCdWZmZXJMaWtlKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IDA7XG4gICAgdGhpcy5kYXRhID0gbmV3IERhdGFWaWV3KGJ1ZmZlcik7XG4gIH1cblxuICByZWFkKGxlbmd0aDogbnVtYmVyKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmRhdGEuYnVmZmVyLnNsaWNlKHRoaXMucG9zaXRpb24sIHRoaXMucG9zaXRpb24gKyBsZW5ndGgpO1xuICAgIHRoaXMucG9zaXRpb24gKz0gbGVuZ3RoO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGludDgoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmRhdGEuZ2V0SW50OCh0aGlzLnBvc2l0aW9uKTtcbiAgICB0aGlzLnBvc2l0aW9uICs9IDE7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgdWludDgoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmRhdGEuZ2V0VWludDgodGhpcy5wb3NpdGlvbik7XG4gICAgdGhpcy5wb3NpdGlvbiArPSAxO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHVpbnQxNigpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0YS5nZXRVaW50MTYodGhpcy5wb3NpdGlvbik7XG4gICAgdGhpcy5wb3NpdGlvbiArPSAyO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHVpbnQzMigpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0YS5nZXRVaW50MzIodGhpcy5wb3NpdGlvbik7XG4gICAgdGhpcy5wb3NpdGlvbiArPSA0O1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0cmluZyhsZW5ndGg6IG51bWJlcikge1xuICAgIHJldHVybiBuZXcgVGV4dERlY29kZXIoXCJhc2NpaVwiKS5kZWNvZGUodGhpcy5yZWFkKGxlbmd0aCkpO1xuICB9XG5cbiAgZW9mKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uID49IHRoaXMuZGF0YS5ieXRlTGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlYWQgYSBNSURJLXN0eWxlIHZhcmlhYmxlLWxlbmd0aCBpbnRlZ2VyLlxuICAgKiAoYmlnLWVuZGlhbiB2YWx1ZSBpbiBncm91cHMgb2YgNyBiaXRzLCB3aXRoIHRvcCBiaXQgc2V0IHRvIHNpZ25pZnkgdGhhdCBhbm90aGVyIGJ5dGUgZm9sbG93cylcbiAgICovXG4gIG1pZGlJbnQoKSB7XG4gICAgbGV0IHJlc3VsdCA9IDA7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy51aW50OCgpO1xuICAgICAgaWYgKHZhbHVlICYgMGIxMDAwMDAwMCkge1xuICAgICAgICByZXN1bHQgKz0gdmFsdWUgJiAwYjExMTExMTE7XG4gICAgICAgIHJlc3VsdCA8PD0gNztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXN1bHQgKyB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtaWRpQ2h1bmsoKSB7XG4gICAgY29uc3QgaWQgPSB0aGlzLnN0cmluZyg0KTtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLnVpbnQzMigpO1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnJlYWQobGVuZ3RoKTtcbiAgICByZXR1cm4geyBpZCwgbGVuZ3RoLCBkYXRhIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IE1JRElFdmVudCwgVGVtcG9FdmVudCB9IGZyb20gXCIuL01JRElFdmVudFwiO1xuXG5leHBvcnQgY29uc3QgY2FsY3VsYXRlTWlsbGlzID0gKFxuICBldmVudHM6IE1JRElFdmVudFtdLFxuICBkYXRhOiB7XG4gICAgcHBxOiBudW1iZXI7XG4gICAgYnBtPzogbnVtYmVyO1xuICAgIHBsYXliYWNrU3BlZWQ/OiBudW1iZXI7XG4gIH1cbik6IE1JRElFdmVudFtdID0+IHtcbiAgbGV0IHsgcHBxLCBicG0gPSAtMSwgcGxheWJhY2tTcGVlZCA9IDEgfSA9IGRhdGE7XG4gIGxldCBtaWxsaXNQZXJUaWNrID0gYnBtID09PSAtMSA/IDAgOiAoKCgxIC8gcGxheWJhY2tTcGVlZCkgKiA2MCkgLyBicG0gLyBwcHEpICogMTAwMDtcbiAgbGV0IHRpY2tzID0gMDtcbiAgbGV0IG1pbGxpcyA9IDA7XG4gIC8vIGNvbnNvbGUubG9nKFwiYnBtXCIsIGJwbSwgbWlsbGlzKTtcbiAgcmV0dXJuIGV2ZW50cy5tYXAoZXZlbnQgPT4ge1xuICAgIGlmICgoZXZlbnQgYXMgVGVtcG9FdmVudCkuYnBtKSB7XG4gICAgICAoeyBicG0gfSA9IGV2ZW50IGFzIFRlbXBvRXZlbnQpO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJicG1cIiwgYnBtLCBtaWxsaXMpO1xuICAgICAgbWlsbGlzUGVyVGljayA9ICgoKDEgLyBwbGF5YmFja1NwZWVkKSAqIDYwKSAvIGJwbSAvIHBwcSkgKiAxMDAwO1xuICAgIH1cbiAgICBjb25zdCBkaWZmVGlja3MgPSBldmVudC50aWNrcyAtIHRpY2tzO1xuICAgIG1pbGxpcyArPSBkaWZmVGlja3MgKiBtaWxsaXNQZXJUaWNrO1xuICAgIGV2ZW50Lm1pbGxpcyA9IG1pbGxpcztcbiAgICB0aWNrcyA9IGV2ZW50LnRpY2tzO1xuICAgIHJldHVybiBldmVudDtcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHsgTUlESUV2ZW50LCBOb3RlRXZlbnQsIE5vdGVPbkV2ZW50LCBOb3RlT2ZmRXZlbnQgfSBmcm9tIFwiLi9NSURJRXZlbnRcIjtcblxuLy8gTUlESUV2ZW50R2VuZXJpYyBhbmQgTUlESU5vdGVHZW5lcmljIGFyZSBkZWNsYXJlZCB0byBzdXBwb3J0IG90aGVyIE1JREkgcGxheWJhY2sgbGlicmFyaWVzIHN1Y2ggYXMgaGVhcnRiZWF0XG5leHBvcnQgaW50ZXJmYWNlIE1JRElFdmVudEdlbmVyaWMge1xuICBpZD86IHN0cmluZztcbiAgYmFyPzogbnVtYmVyO1xuICB0aWNrczogbnVtYmVyO1xuICBub3RlTnVtYmVyOiBudW1iZXI7XG4gIHRyYWNrSWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTUlESU5vdGVHZW5lcmljIHtcbiAgaWQ6IHN0cmluZztcbiAgbm90ZU9uOiBNSURJRXZlbnRHZW5lcmljO1xuICBub3RlT2ZmOiBNSURJRXZlbnRHZW5lcmljO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1JRElOb3RlIGV4dGVuZHMgTUlESU5vdGVHZW5lcmljIHtcbiAgbm90ZU9uOiBOb3RlT25FdmVudDtcbiAgbm90ZU9mZjogTm90ZU9mZkV2ZW50O1xuICBkdXJhdGlvblRpY2tzPzogbnVtYmVyO1xuICBkdXJhdGlvbk1pbGxpcz86IG51bWJlcjtcbiAgc3RhcnRUaWNrcz86IG51bWJlcjtcbiAgZW5kVGlja3M/OiBudW1iZXI7XG4gIHN0YXJ0TWlsbGlzPzogbnVtYmVyO1xuICBlbmRNaWxsaXM/OiBudW1iZXI7XG59XG5cbmxldCBpbmRleCA9IDA7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVOb3RlcyA9IChldmVudHM6IE1JRElFdmVudFtdKTogTUlESU5vdGVbXSA9PiB7XG4gIGxldCBmaWx0ZXJlZDogTm90ZUV2ZW50W10gPSBldmVudHMucmVkdWNlKChhY2MsIHZhbCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKHZhbC50eXBlKTtcbiAgICBpZiAodmFsLnR5cGUgPT09IDB4ODAgfHwgdmFsLnR5cGUgPT09IDB4OTApIHtcbiAgICAgIGFjYy5wdXNoKHZhbCBhcyBOb3RlRXZlbnQpO1xuICAgIH1cbiAgICByZXR1cm4gYWNjO1xuICB9LCBbXSBhcyBOb3RlRXZlbnRbXSk7XG4gIC8vIGZpbHRlcmVkID0gc29ydE1JRElFdmVudHMoZmlsdGVyZWQpO1xuICBjb25zdCBub3RlczogTUlESU5vdGVbXSA9IFtdO1xuICBjb25zdCB0bXA6IHsgW2lkOiBzdHJpbmddOiBOb3RlRXZlbnQgfSA9IHt9O1xuICBmaWx0ZXJlZC5mb3JFYWNoKGUgPT4ge1xuICAgIGNvbnN0IGlkID0gYCR7ZS50cmFja0lkfS0ke2Uubm90ZU51bWJlcn1gO1xuICAgIC8vIGNvbnNvbGUubG9nKGUudGlja3MsIGUudHlwZSwgaWQpO1xuICAgIGlmIChlLnR5cGUgPT09IDB4OTApIHtcbiAgICAgIGlmICh0bXBbaWRdKSB7XG4gICAgICAgIC8vIGNvbnNvbGUud2Fybihgbm90ZSBleGlzdGVkIGFscmVhZHkhICR7aWR9YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0bXBbaWRdID0gZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGUudHlwZSA9PT0gMHg4MCkge1xuICAgICAgaWYgKCF0bXBbaWRdKSB7XG4gICAgICAgIC8vIGNvbnNvbGUud2Fybihgbm90ZSBkb2Vzbid0IGV4aXN0ISAke2lkfWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgbm90ZU9uID0gdG1wW2lkXTtcbiAgICAgICAgY29uc3Qgbm90ZTogTUlESU5vdGUgPSB7XG4gICAgICAgICAgaWQ6IGBub3RlLSR7bmV3IERhdGUoKS5nZXRUaW1lKCl9LSR7aW5kZXgrK31gLFxuICAgICAgICAgIG5vdGVPbjogbm90ZU9uIGFzIE5vdGVPbkV2ZW50LFxuICAgICAgICAgIG5vdGVPZmY6IGUsXG4gICAgICAgICAgLy8gZHVyYXRpb25UaWNrczogZS50aWNrcyAtIG5vdGVPbi50aWNrcyxcbiAgICAgICAgICAvLyBkdXJhdGlvbk1pbGxpczogZS5taWxsaXMgLSBub3RlT24ubWlsbGlzLFxuICAgICAgICAgIC8vIHN0YXJ0VGlja3M6IG5vdGVPbi50aWNrcyxcbiAgICAgICAgICAvLyBzdGFydE1pbGxpczogbm90ZU9uLm1pbGxpcyxcbiAgICAgICAgICAvLyBlbmRUaWNrczogZS50aWNrcyxcbiAgICAgICAgICAvLyBlbmRNaWxsaXM6IGUubWlsbGlzLFxuICAgICAgICB9O1xuICAgICAgICBub3Rlcy5wdXNoKG5vdGUpO1xuICAgICAgICBkZWxldGUgdG1wW2lkXTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICAvLyBjb25zb2xlLmxvZyhub3Rlcyk7XG4gIHJldHVybiBub3Rlcztcbn07XG4iLCJpbXBvcnQgeyBmZXRjaEFycmF5YnVmZmVyIH0gZnJvbSBcIi4vdXRpbC9mZXRjaFwiO1xuaW1wb3J0IHsgcGFyc2VNSURJRmlsZSB9IGZyb20gXCIuL3BhcnNlTUlESUZpbGVcIjtcbmltcG9ydCB7IFNvbmcgfSBmcm9tIFwiLi9jcmVhdGVTb25nXCI7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVTb25nRnJvbU1JRElGaWxlID0gYXN5bmMgKGFyZzogc3RyaW5nIHwgQXJyYXlCdWZmZXIpOiBQcm9taXNlPFNvbmc+ID0+IHtcbiAgbGV0IGFiOiBBcnJheUJ1ZmZlcjtcbiAgaWYgKHR5cGVvZiBhcmcgPT09IFwic3RyaW5nXCIpIHtcbiAgICBhYiA9IGF3YWl0IGZldGNoQXJyYXlidWZmZXIoYXJnKTtcbiAgfSBlbHNlIHtcbiAgICBhYiA9IGFyZztcbiAgfVxuICAvLyBjb25zdCB7IGhlYWRlciwgdGltZVRyYWNrLCB0cmFja3MgfSA9IHBhcnNlTWlkaUZpbGUoYWIpO1xuICByZXR1cm4gcGFyc2VNSURJRmlsZShhYik7XG59O1xuIiwiLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ3ZWJtaWRpXCIgLz5cblxuaW1wb3J0IHsgTUlESUV2ZW50IH0gZnJvbSBcIi4vTUlESUV2ZW50XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2sge1xuICBpZDogc3RyaW5nO1xuICBsYXRlbmN5OiBudW1iZXI7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHZvbHVtZT86IG51bWJlcjtcbiAgaW5wdXRzOiBzdHJpbmdbXTsgLy8gaWRzIG9mIE1JREkgaW5wdXRzXG4gIG91dHB1dHM6IHN0cmluZ1tdOyAvLyBpZHMgb2YgTUlESSBvdXRwdXRzXG4gIGluc3RydW1lbnQ/OiBzdHJpbmc7XG4gIHByb2Nlc3Nvcj86IChldmVudDogTUlESUV2ZW50IHwgV2ViTWlkaS5NSURJTWVzc2FnZUV2ZW50KSA9PiB2b2lkOyAvLyBhIGZ1bmN0aW9uIHRoYXQgcHJvY2Vzc2VzIGFuIGV2ZW50IGludG8gc291bmQgb3Igc29tZXRoaW5nIGVsc2Vcbn1cbmV4cG9ydCBjb25zdCBjcmVhdGVUcmFjayA9IChpZDogc3RyaW5nKTogVHJhY2sgPT4ge1xuICByZXR1cm4ge1xuICAgIGlkLFxuICAgIGxhdGVuY3k6IDAsXG4gICAgaW5wdXRzOiBbXSxcbiAgICBvdXRwdXRzOiBbXSxcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBTb25nIH0gZnJvbSBcIi4vY3JlYXRlU29uZ1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudEV2ZW50SW5kZXggPSAoXG4gIHNvbmc6IFNvbmcsXG4gIG1pbGxpczogbnVtYmVyLFxuICBzdGFydEluZGV4OiBudW1iZXIgPSAwXG4pOiBudW1iZXIgPT4ge1xuICBjb25zdCB7IGV2ZW50cyB9ID0gc29uZztcbiAgbGV0IGkgPSBzdGFydEluZGV4O1xuICBmb3IgKDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGV2ZW50ID0gZXZlbnRzW2ldO1xuICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50Lm1pbGxpcywgbWlsbGlzKTtcbiAgICBpZiAodHlwZW9mIGV2ZW50Lm1pbGxpcyA9PT0gXCJ1bmRlZmluZWRcIiB8fCBldmVudC5taWxsaXMgPj0gbWlsbGlzKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGk7XG59O1xuIiwibGV0IG1pZGlBY2Nlc3M6IFdlYk1pZGkuTUlESUFjY2VzcyB8IG51bGw7XG5cbmV4cG9ydCBjb25zdCBnZXRNSURJQWNjZXNzID0gYXN5bmMgKCk6IFByb21pc2U8V2ViTWlkaS5NSURJQWNjZXNzIHwgbnVsbD4gPT4ge1xuICBpZiAobWlkaUFjY2VzcyAhPT0gbnVsbCAmJiB0eXBlb2YgbWlkaUFjY2VzcyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobWlkaUFjY2Vzcyk7XG4gIH1cblxuICBpZiAoIW5hdmlnYXRvci5yZXF1ZXN0TUlESUFjY2Vzcykge1xuICAgIG1pZGlBY2Nlc3MgPSBudWxsO1xuICAgIGNvbnNvbGUubG9nKFwiV2ViTUlESSBub3Qgc3VwcG9ydGVkXCIpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCk7XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IG1hID0gYXdhaXQgbmF2aWdhdG9yLnJlcXVlc3RNSURJQWNjZXNzKCk7XG4gICAgLy8gbWlkaUFjY2Vzcy5vbnN0YXRlY2hhbmdlID0gKGU6IFdlYk1pZGkuTUlESUNvbm5lY3Rpb25FdmVudCkgPT4ge1xuICAgIC8vIH07XG4gICAgaWYgKCFtYS5pbnB1dHMgfHwgIW1hLm91dHB1dHMpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRmlyZWZveCBXZWJNSURJIEFQSSBzdXBwb3J0IGlzIHN0aWxsIGluIHByb2dyZXNzXCIpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIG1pZGlBY2Nlc3MgPSBtYTtcbiAgICByZXR1cm4gbWE7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhcIk1JREkgY291bGQgbm90IGJlIGluaXRpYWxpemVkOlwiLCBlKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcbiIsImV4cG9ydCBjb25zdCBnZXRNSURJUG9ydHMgPSAoXG4gIG1pZGlBY2Nlc3M6IFdlYk1pZGkuTUlESUFjY2VzcyB8IG51bGxcbik6IHtcbiAgaW5wdXRzOiBXZWJNaWRpLk1JRElJbnB1dFtdO1xuICBvdXRwdXRzOiBXZWJNaWRpLk1JRElPdXRwdXRbXTtcbn0gPT4ge1xuICAvLyBleHBvcnQgY29uc3QgZ2V0TUlESURldmljZXMgPSAoKTogeyBpbnB1dHM6IFdlYk1pZGkuTUlESUlucHV0W10sIG91dHB1dHM6IFdlYk1pZGkuTUlESU91dHB1dFtdIH0gPT4ge1xuICBjb25zdCBpbnB1dHM6IFdlYk1pZGkuTUlESUlucHV0W10gPSBbXTtcbiAgY29uc3Qgb3V0cHV0czogV2ViTWlkaS5NSURJT3V0cHV0W10gPSBbXTtcbiAgaWYgKG1pZGlBY2Nlc3MpIHtcbiAgICBtaWRpQWNjZXNzLmlucHV0cy5mb3JFYWNoKGkgPT4ge1xuICAgICAgaW5wdXRzLnB1c2goaSk7XG4gICAgfSk7XG4gICAgbWlkaUFjY2Vzcy5vdXRwdXRzLmZvckVhY2gobyA9PiB7XG4gICAgICBvdXRwdXRzLnB1c2gobyk7XG4gICAgfSk7XG4gIH1cbiAgLy8gY29uc29sZS5sb2coaW5wdXRzLCBvdXRwdXRzKTtcbiAgcmV0dXJuIHsgaW5wdXRzLCBvdXRwdXRzIH07XG59O1xuIiwiLy8gYmFzZWQgb246IGh0dHBzOi8vZ2l0aHViLmNvbS9wcmF2ZG9taWwvamFzbWlkLnRzXG5cbi8vIGltcG9ydCB7IEJ1ZmZlclJlYWRlciB9IGZyb20gJ2phc21pZC50cyc7XG5pbXBvcnQgdW5pcXVpZCBmcm9tIFwidW5pcWlkXCI7XG5pbXBvcnQgeyBCdWZmZXJSZWFkZXIgfSBmcm9tIFwiLi9idWZmZXJyZWFkZXJcIjtcbmltcG9ydCB7IE1JRElFdmVudCB9IGZyb20gXCIuL01JRElFdmVudFwiO1xuaW1wb3J0IHtcbiAgU0VRVUVOQ0VfTlVNQkVSLFxuICBURVhULFxuICBDT1BZUklHSFRfTk9USUNFLFxuICBUUkFDS19OQU1FLFxuICBJTlNUUlVNRU5UX05BTUUsXG4gIExZUklDUyxcbiAgTUFSS0VSLFxuICBDVUVfUE9JTlQsXG4gIENIQU5ORUxfUFJFRklYLFxuICBFTkRfT0ZfVFJBQ0ssXG4gIFRFTVBPLFxuICBTTVBURV9PRkZTRVQsXG4gIFRJTUVfU0lHTkFUVVJFLFxuICBLRVlfU0lHTkFUVVJFLFxuICBTRVFVRU5DRVJfU1BFQ0lGSUMsXG4gIFNZU1RFTV9FWENMVVNJVkUsXG4gIERJVklERURfU1lTVEVNX0VYQ0xVU0lWRSxcbiAgTk9URV9PTixcbiAgTk9URV9PRkYsXG4gIE5PVEVfQUZURVJUT1VDSCxcbiAgQ09OVFJPTExFUixcbiAgUFJPR1JBTV9DSEFOR0UsXG4gIENIQU5ORUxfQUZURVJUT1VDSCxcbiAgUElUQ0hfQkVORCxcbiAgc29ydE1JRElFdmVudHMsXG59IGZyb20gXCIuL3V0aWwvbWlkaVwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlTWlsbGlzIH0gZnJvbSBcIi4vY2FsY3VsYXRlTWlsbGlzXCI7XG5pbXBvcnQgeyBUcmFjayB9IGZyb20gXCIuL2NyZWF0ZVRyYWNrXCI7XG5pbXBvcnQgeyBTb25nIH0gZnJvbSBcIi4vY3JlYXRlU29uZ1wiO1xuaW1wb3J0IHsgY3JlYXRlVHJhY2sgfSBmcm9tIFwiLi9jcmVhdGVUcmFja1wiO1xuaW1wb3J0IHsgY3JlYXRlTm90ZXMgfSBmcm9tIFwiLi9jcmVhdGVOb3Rlc1wiO1xuXG50eXBlIFBhcnNlZERhdGEgPSB7XG4gIGV2ZW50OiBhbnk7XG4gIGRlbHRhVGltZTogbnVtYmVyO1xuICBicG0/OiBudW1iZXI7XG4gIG51bWVyYXRvcj86IG51bWJlcjtcbiAgZGVub21pbmF0b3I/OiBudW1iZXI7XG4gIHRyYWNrTmFtZT86IHN0cmluZztcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU1JRElGaWxlKGJ1ZmZlcjogQXJyYXlCdWZmZXJMaWtlKTogU29uZyB7XG4gIGNvbnN0IHJlYWRlciA9IG5ldyBCdWZmZXJSZWFkZXIoYnVmZmVyKTtcblxuICBjb25zdCBoZWFkZXIgPSBwYXJzZUhlYWRlcihyZWFkZXIpO1xuICAvLyBjb25zdCB7IHRpbWVUcmFjaywgdHJhY2tzIH0gPSBwYXJzZVRyYWNrcyhyZWFkZXIsIGhlYWRlci50aWNrc1BlckJlYXQpXG4gIGNvbnN0IHsgdHJhY2tzLCBldmVudHMsIGluaXRpYWxUZW1wbywgaW5pdGlhbE51bWVyYXRvciwgaW5pdGlhbERlbm9taW5hdG9yIH0gPSBwYXJzZVRyYWNrcyhcbiAgICByZWFkZXIsXG4gICAgaGVhZGVyLnRpY2tzUGVyQmVhdFxuICApO1xuXG4gIHJldHVybiB7XG4gICAgcHBxOiBoZWFkZXIudGlja3NQZXJCZWF0LFxuICAgIGxhdGVuY3k6IDE3LCAvLyB2YWx1ZSBpbiBtaWxsaXNlY29uZHMgLT4gdGhlIGxlbmd0aCBvZiBhIHNpbmdsZSBmcmFtZSBAIDYwSHogcmVmcmVzaCByYXRlXG4gICAgYnVmZmVyVGltZTogMTAwLCAvLyB2YWx1ZSBpbiBtaWxsaXNlY29uZHNcbiAgICB0cmFja3MsXG4gICAgdHJhY2tzQnlJZDogdHJhY2tzLnJlZHVjZSgoYWNjOiB7IFtpZDogc3RyaW5nXTogVHJhY2sgfSwgdmFsdWUpID0+IHtcbiAgICAgIGFjY1t2YWx1ZS5pZF0gPSB2YWx1ZTtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pLFxuICAgIGV2ZW50czogY2FsY3VsYXRlTWlsbGlzKGV2ZW50cywge1xuICAgICAgcHBxOiBoZWFkZXIudGlja3NQZXJCZWF0LFxuICAgICAgYnBtOiBpbml0aWFsVGVtcG8sXG4gICAgfSksXG4gICAgbm90ZXM6IGNyZWF0ZU5vdGVzKGV2ZW50cyksXG4gICAgaW5pdGlhbFRlbXBvLFxuICAgIGluaXRpYWxOdW1lcmF0b3IsXG4gICAgaW5pdGlhbERlbm9taW5hdG9yLFxuICB9IGFzIFNvbmc7XG59XG5cbmZ1bmN0aW9uIHBhcnNlSGVhZGVyKHJlYWRlcjogQnVmZmVyUmVhZGVyKSB7XG4gIGNvbnN0IGhlYWRlckNodW5rID0gcmVhZGVyLm1pZGlDaHVuaygpO1xuICBpZiAoaGVhZGVyQ2h1bmsuaWQgIT09IFwiTVRoZFwiIHx8IGhlYWRlckNodW5rLmxlbmd0aCAhPT0gNikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkJhZCAubWlkIGZpbGUsIGhlYWRlciBub3QgZm91bmRcIik7XG4gIH1cblxuICBjb25zdCBoZWFkZXJSZWFkZXIgPSBuZXcgQnVmZmVyUmVhZGVyKGhlYWRlckNodW5rLmRhdGEpO1xuICBjb25zdCBmb3JtYXRUeXBlID0gaGVhZGVyUmVhZGVyLnVpbnQxNigpO1xuICBjb25zdCB0cmFja0NvdW50ID0gaGVhZGVyUmVhZGVyLnVpbnQxNigpO1xuICBjb25zdCB0aW1lRGl2aXNpb24gPSBoZWFkZXJSZWFkZXIudWludDE2KCk7XG4gIGlmICh0aW1lRGl2aXNpb24gJiAweDgwMDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJFeHByZXNzaW5nIHRpbWUgZGl2aXNpb24gaW4gU01UUEUgZnJhbWVzIGlzIG5vdCBzdXBwb3J0ZWQgeWV0XCIpO1xuICB9XG4gIGNvbnN0IHRpY2tzUGVyQmVhdCA9IHRpbWVEaXZpc2lvbjtcblxuICByZXR1cm4geyBmb3JtYXRUeXBlLCB0cmFja0NvdW50LCB0aWNrc1BlckJlYXQgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUcmFja3MoXG4gIHJlYWRlcjogQnVmZmVyUmVhZGVyLFxuICBwcHE6IG51bWJlclxuKToge1xuICB0cmFja3M6IFRyYWNrW107XG4gIGV2ZW50czogTUlESUV2ZW50W107XG4gIGluaXRpYWxUZW1wbzogbnVtYmVyO1xuICBpbml0aWFsTnVtZXJhdG9yOiBudW1iZXI7XG4gIGluaXRpYWxEZW5vbWluYXRvcjogbnVtYmVyO1xufSB7XG4gIGxldCBpbml0aWFsVGVtcG8gPSAtMTtcbiAgbGV0IGluaXRpYWxOdW1lcmF0b3IgPSAtMTtcbiAgbGV0IGluaXRpYWxEZW5vbWluYXRvciA9IC0xO1xuICBjb25zdCB0cmFja3M6IFRyYWNrW10gPSBbXTtcbiAgY29uc3QgZXZlbnRzOiBNSURJRXZlbnRbXSA9IFtdO1xuICB3aGlsZSAoIXJlYWRlci5lb2YoKSkge1xuICAgIGNvbnN0IHRyYWNrQ2h1bmsgPSByZWFkZXIubWlkaUNodW5rKCk7XG5cbiAgICBpZiAodHJhY2tDaHVuay5pZCAhPT0gXCJNVHJrXCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBjaHVuaywgZXhwZWN0ZWQgTVRyaywgZ290ICR7dHJhY2tDaHVuay5pZH1gKTtcbiAgICB9XG4gICAgY29uc3QgdHJhY2tJZCA9IGBULSR7dW5pcXVpZCgpfWA7XG4gICAgY29uc3QgdHJhY2sgPSBjcmVhdGVUcmFjayh0cmFja0lkKTtcbiAgICBjb25zdCB0cmFja1RyYWNrID0gbmV3IEJ1ZmZlclJlYWRlcih0cmFja0NodW5rLmRhdGEpO1xuICAgIGxldCB0aWNrcyA9IDA7XG4gICAgbGV0IGxhc3RUeXBlQnl0ZSA9IG51bGw7XG4gICAgd2hpbGUgKCF0cmFja1RyYWNrLmVvZigpKSB7XG4gICAgICBsZXQgZGF0YSA9IHBhcnNlRXZlbnQodHJhY2tUcmFjaywgbGFzdFR5cGVCeXRlKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgY29uc3QgeyBldmVudCwgZGVsdGFUaW1lLCBicG0sIG51bWVyYXRvciwgZGVub21pbmF0b3IsIHRyYWNrTmFtZSB9ID0gZGF0YTtcbiAgICAgIGlmIChicG0gJiYgaW5pdGlhbFRlbXBvID09PSAtMSkge1xuICAgICAgICBpbml0aWFsVGVtcG8gPSBicG07XG4gICAgICB9XG4gICAgICBpZiAobnVtZXJhdG9yICYmIGluaXRpYWxOdW1lcmF0b3IgPT09IC0xKSB7XG4gICAgICAgIGluaXRpYWxOdW1lcmF0b3IgPSBudW1lcmF0b3I7XG4gICAgICB9XG4gICAgICBpZiAoZGVub21pbmF0b3IgJiYgaW5pdGlhbERlbm9taW5hdG9yID09PSAtMSkge1xuICAgICAgICBpbml0aWFsRGVub21pbmF0b3IgPSBkZW5vbWluYXRvcjtcbiAgICAgIH1cbiAgICAgIGlmICh0cmFja05hbWUpIHtcbiAgICAgICAgdHJhY2submFtZSA9IHRyYWNrTmFtZTtcbiAgICAgIH1cbiAgICAgIHRpY2tzICs9IGRlbHRhVGltZTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdUSUNLUycsIHRpY2tzLCBicG0sIG51bWVyYXRvcik7XG4gICAgICBsYXN0VHlwZUJ5dGUgPSBldmVudC50eXBlO1xuICAgICAgZXZlbnRzLnB1c2goe1xuICAgICAgICAuLi5ldmVudCxcbiAgICAgICAgdHJhY2tJZCxcbiAgICAgICAgdGlja3MsXG4gICAgICB9KTtcbiAgICB9XG4gICAgdHJhY2tzLnB1c2godHJhY2spO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBldmVudHM6IHNvcnRNSURJRXZlbnRzKGV2ZW50cyksXG4gICAgdHJhY2tzLFxuICAgIGluaXRpYWxUZW1wbyxcbiAgICBpbml0aWFsTnVtZXJhdG9yLFxuICAgIGluaXRpYWxEZW5vbWluYXRvcixcbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VFdmVudChyZWFkZXI6IEJ1ZmZlclJlYWRlciwgbGFzdFR5cGVCeXRlOiBudW1iZXIgfCBudWxsKTogUGFyc2VkRGF0YSB7XG4gIGNvbnN0IGRlbHRhVGltZSA9IHJlYWRlci5taWRpSW50KCk7XG4gIGxldCB0eXBlQnl0ZSA9IHJlYWRlci51aW50OCgpO1xuXG4gIC8vIG1ldGEgZXZlbnRzOiAweGZmXG4gIC8vIHN5c3RlbSBldmVudHM6IDB4ZjAsIDB4ZjdcbiAgLy8gbWlkaSBldmVudHM6IGFsbCBvdGhlciBieXRlc1xuXG4gIGlmICh0eXBlQnl0ZSA9PT0gMHhmZikge1xuICAgIGNvbnN0IHN1YlR5cGVCeXRlID0gcmVhZGVyLnVpbnQ4KCk7XG4gICAgY29uc3QgbGVuZ3RoID0gcmVhZGVyLm1pZGlJbnQoKTtcblxuICAgIHN3aXRjaCAoc3ViVHlwZUJ5dGUpIHtcbiAgICAgIC8vIHNlcXVlbmNlIG51bWJlclxuICAgICAgY2FzZSAweDAwOlxuICAgICAgICBpZiAobGVuZ3RoICE9PSAyKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBsZW5ndGggZm9yIHNlcXVlbmNlTnVtYmVyIGV2ZW50IGlzIDIsIGdvdCAke2xlbmd0aH1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IFNFUVVFTkNFX05VTUJFUixcbiAgICAgICAgICAgIG51bWJlcjogcmVhZGVyLnVpbnQxNigpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gdGV4dFxuICAgICAgY2FzZSAweDAxOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IFRFWFQsXG4gICAgICAgICAgICB0ZXh0OiByZWFkZXIuc3RyaW5nKGxlbmd0aCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBjb3B5cmlnaHRcbiAgICAgIGNhc2UgMHgwMjpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBDT1BZUklHSFRfTk9USUNFLFxuICAgICAgICAgICAgdGV4dDogcmVhZGVyLnN0cmluZyhsZW5ndGgpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gdHJhY2sgbmFtZVxuICAgICAgY2FzZSAweDAzOlxuICAgICAgICBjb25zdCB0cmFja05hbWUgPSByZWFkZXIuc3RyaW5nKGxlbmd0aCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IHR5cGVCeXRlLFxuICAgICAgICAgICAgc3ViVHlwZTogc3ViVHlwZUJ5dGUsXG4gICAgICAgICAgICBkZXNjcjogVFJBQ0tfTkFNRSxcbiAgICAgICAgICAgIHRleHQ6IHRyYWNrTmFtZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgICB0cmFja05hbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBpbnN0cnVtZW50IG5hbWVcbiAgICAgIGNhc2UgMHgwNDpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBJTlNUUlVNRU5UX05BTUUsXG4gICAgICAgICAgICB0ZXh0OiByZWFkZXIuc3RyaW5nKGxlbmd0aCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBseXJpY3NcbiAgICAgIGNhc2UgMHgwNTpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBMWVJJQ1MsXG4gICAgICAgICAgICB0ZXh0OiByZWFkZXIuc3RyaW5nKGxlbmd0aCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBtYXJrZXJcbiAgICAgIGNhc2UgMHgwNjpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBNQVJLRVIsXG4gICAgICAgICAgICB0ZXh0OiByZWFkZXIuc3RyaW5nKGxlbmd0aCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBjdWUgcG9pbnRcbiAgICAgIGNhc2UgMHgwNzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBDVUVfUE9JTlQsXG4gICAgICAgICAgICB0ZXh0OiByZWFkZXIuc3RyaW5nKGxlbmd0aCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBjaGFubmVsIHByZWZpeFxuICAgICAgY2FzZSAweDIwOlxuICAgICAgICBpZiAobGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBsZW5ndGggZm9yIG1pZGlDaGFubmVsUHJlZml4IGV2ZW50IGlzIDEsIGdvdCAke2xlbmd0aH1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IENIQU5ORUxfUFJFRklYLFxuICAgICAgICAgICAgY2hhbm5lbDogcmVhZGVyLnVpbnQ4KCksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBlbmQgb2YgdHJhY2tcbiAgICAgIGNhc2UgMHgyZjpcbiAgICAgICAgaWYgKGxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgbGVuZ3RoIGZvciBlbmRPZlRyYWNrIGV2ZW50IGlzIDAsIGdvdCAke2xlbmd0aH1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICBkZXNjcjogRU5EX09GX1RSQUNLLFxuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIHRlbXBvXG4gICAgICBjYXNlIDB4NTE6XG4gICAgICAgIGlmIChsZW5ndGggIT09IDMpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGxlbmd0aCBmb3Igc2V0VGVtcG8gZXZlbnQgaXMgMywgZ290ICR7bGVuZ3RofWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1pY3Jvc2Vjb25kc1BlckJlYXQgPSAocmVhZGVyLnVpbnQ4KCkgPDwgMTYpICsgKHJlYWRlci51aW50OCgpIDw8IDgpICsgcmVhZGVyLnVpbnQ4KCk7XG4gICAgICAgIGNvbnN0IGJwbSA9IDYwMDAwMDAwIC8gbWljcm9zZWNvbmRzUGVyQmVhdDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBURU1QTyxcbiAgICAgICAgICAgIGJwbSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJwbSxcbiAgICAgICAgICBkZWx0YVRpbWUsXG4gICAgICAgIH07XG4gICAgICAvLyBzbXB0ZSBvZmZzZXRcbiAgICAgIGNhc2UgMHg1NDpcbiAgICAgICAgaWYgKGxlbmd0aCAhPSA1KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBsZW5ndGggZm9yIHNtcHRlT2Zmc2V0IGV2ZW50IGlzIDUsIGdvdCAke2xlbmd0aH1gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBob3VyQnl0ZSA9IHJlYWRlci51aW50OCgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlQnl0ZSxcbiAgICAgICAgICAgIHN1YlR5cGU6IHN1YlR5cGVCeXRlLFxuICAgICAgICAgICAgZGVzY3I6IFNNUFRFX09GRlNFVCxcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogZ2V0RnJhbWVSYXRlKGhvdXJCeXRlKSxcbiAgICAgICAgICAgIGhvdXI6IGhvdXJCeXRlICYgMHgxZixcbiAgICAgICAgICAgIG1pbjogcmVhZGVyLnVpbnQ4KCksXG4gICAgICAgICAgICBzZWM6IHJlYWRlci51aW50OCgpLFxuICAgICAgICAgICAgZnJhbWU6IHJlYWRlci51aW50OCgpLFxuICAgICAgICAgICAgc3ViRnJhbWU6IHJlYWRlci51aW50OCgpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gdGltZSBzaWduYXR1cmVcbiAgICAgIGNhc2UgMHg1ODpcbiAgICAgICAgaWYgKGxlbmd0aCAhPSA0KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBsZW5ndGggZm9yIHRpbWVTaWduYXR1cmUgZXZlbnQgaXMgNCwgZ290ICR7bGVuZ3RofWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG51bWVyYXRvciA9IHJlYWRlci51aW50OCgpO1xuICAgICAgICBjb25zdCBkZW5vbWluYXRvciA9IE1hdGgucG93KDIsIHJlYWRlci51aW50OCgpKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBUSU1FX1NJR05BVFVSRSxcbiAgICAgICAgICAgIG51bWVyYXRvcixcbiAgICAgICAgICAgIGRlbm9taW5hdG9yLFxuICAgICAgICAgICAgbWV0cm9ub21lOiByZWFkZXIudWludDgoKSxcbiAgICAgICAgICAgIHRoaXJ0eVNlY29uZHM6IHJlYWRlci51aW50OCgpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgbnVtZXJhdG9yLFxuICAgICAgICAgIGRlbm9taW5hdG9yLFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIGtleSBzaWduYXR1cmVcbiAgICAgIGNhc2UgMHg1OTpcbiAgICAgICAgaWYgKGxlbmd0aCAhPSAyKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBsZW5ndGggZm9yIGtleVNpZ25hdHVyZSBldmVudCBpcyAyLCBnb3QgJHtsZW5ndGh9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBLRVlfU0lHTkFUVVJFLFxuICAgICAgICAgICAga2V5OiByZWFkZXIuaW50OCgpLFxuICAgICAgICAgICAgc2NhbGU6IHJlYWRlci51aW50OCgpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gc2VxdWVuY2VyIHNwZWNpZmljXG4gICAgICBjYXNlIDB4N2Y6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IHR5cGVCeXRlLFxuICAgICAgICAgICAgc3ViVHlwZTogc3ViVHlwZUJ5dGUsXG4gICAgICAgICAgICBkZXNjcjogU0VRVUVOQ0VSX1NQRUNJRklDLFxuICAgICAgICAgICAgZGF0YTogcmVhZGVyLnJlYWQobGVuZ3RoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIHVuZGVmaW5lZFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdHlwZUJ5dGUsXG4gICAgICAgICAgICBzdWJUeXBlOiBzdWJUeXBlQnl0ZSxcbiAgICAgICAgICAgIGRlc2NyOiBcInVuZGVmaW5lZFwiLFxuICAgICAgICAgICAgZGF0YTogcmVhZGVyLnJlYWQobGVuZ3RoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZUJ5dGUgPT09IDB4ZjApIHtcbiAgICAvLyBzeXN0ZW0gZXhjbHVzaXZlXG4gICAgY29uc3QgbGVuZ3RoID0gcmVhZGVyLm1pZGlJbnQoKTtcbiAgICByZXR1cm4ge1xuICAgICAgZXZlbnQ6IHtcbiAgICAgICAgdHlwZTogMHhmMCxcbiAgICAgICAgZGVzY3I6IFNZU1RFTV9FWENMVVNJVkUsXG4gICAgICAgIGRhdGE6IHJlYWRlci5yZWFkKGxlbmd0aCksXG4gICAgICB9LFxuICAgICAgZGVsdGFUaW1lLFxuICAgIH07XG4gIH0gZWxzZSBpZiAodHlwZUJ5dGUgPT09IDB4ZjcpIHtcbiAgICAvLyBkaXZpZGVkIHN5c3RlbSBleGNsdXNpdmVcbiAgICBjb25zdCBsZW5ndGggPSByZWFkZXIubWlkaUludCgpO1xuICAgIHJldHVybiB7XG4gICAgICBldmVudDoge1xuICAgICAgICB0eXBlOiAweGYwLFxuICAgICAgICBkZXNjcjogRElWSURFRF9TWVNURU1fRVhDTFVTSVZFLFxuICAgICAgICBkYXRhOiByZWFkZXIucmVhZChsZW5ndGgpLFxuICAgICAgfSxcbiAgICAgIGRlbHRhVGltZSxcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIC8qKlxuICAgICAqIHJ1bm5pbmcgc3RhdHVzIC0gcmV1c2UgbGFzdEV2ZW50VHlwZUJ5dGUgYXMgdGhlIGV2ZW50IHR5cGVcbiAgICAgKiB0eXBlQnl0ZSBpcyBhY3R1YWxseSB0aGUgZmlyc3QgcGFyYW1ldGVyXG4gICAgICovXG4gICAgY29uc3QgaXNSdW5uaW5nU3RhdHVzID0gKHR5cGVCeXRlICYgMGIxMDAwMDAwMCkgPT09IDA7XG4gICAgY29uc3QgdmFsdWUgPSBpc1J1bm5pbmdTdGF0dXMgPyB0eXBlQnl0ZSA6IHJlYWRlci51aW50OCgpO1xuICAgIHR5cGVCeXRlID0gaXNSdW5uaW5nU3RhdHVzID8gKGxhc3RUeXBlQnl0ZSA9PT0gbnVsbCA/IDAgOiBsYXN0VHlwZUJ5dGUpIDogdHlwZUJ5dGU7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhpc1J1bm5pbmdTdGF0dXMsIHR5cGVCeXRlLCB2YWx1ZSk7XG5cbiAgICBjb25zdCBjaGFubmVsID0gdHlwZUJ5dGUgJiAweDBmO1xuICAgIC8vIGNoYW5uZWxzW2NoYW5uZWxdID0gdHJ1ZTtcblxuICAgIHN3aXRjaCAodHlwZUJ5dGUgPj4gNCkge1xuICAgICAgLy8gbm90ZSBvZmZcbiAgICAgIGNhc2UgMHgwODpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogMHg4MCxcbiAgICAgICAgICAgIGRlc2NyOiBOT1RFX09GRixcbiAgICAgICAgICAgIGNoYW5uZWwsXG4gICAgICAgICAgICBub3RlTnVtYmVyOiB2YWx1ZSxcbiAgICAgICAgICAgIHZlbG9jaXR5OiByZWFkZXIudWludDgoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIG5vdGUgb25cbiAgICAgIGNhc2UgMHgwOTpcbiAgICAgICAgY29uc3QgdmVsb2NpdHkgPSByZWFkZXIudWludDgoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogdmVsb2NpdHkgPT09IDAgPyAweDgwIDogMHg5MCxcbiAgICAgICAgICAgIGRlc2NyOiB2ZWxvY2l0eSA9PT0gMCA/IE5PVEVfT0ZGIDogTk9URV9PTixcbiAgICAgICAgICAgIGNoYW5uZWwsXG4gICAgICAgICAgICBub3RlTnVtYmVyOiB2YWx1ZSxcbiAgICAgICAgICAgIHZlbG9jaXR5LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gbm90ZSBhZnRlcnRvdWNoXG4gICAgICBjYXNlIDB4MGE6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZXZlbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IDB4YTAsXG4gICAgICAgICAgICBkZXNjcjogTk9URV9BRlRFUlRPVUNILFxuICAgICAgICAgICAgY2hhbm5lbCxcbiAgICAgICAgICAgIG5vdGVOdW1iZXI6IHZhbHVlLFxuICAgICAgICAgICAgYW1vdW50OiByZWFkZXIudWludDgoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIGNvbnRyb2xsZXJcbiAgICAgIGNhc2UgMHgwYjpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogMHhiMCxcbiAgICAgICAgICAgIGRlc2NyOiBDT05UUk9MTEVSLFxuICAgICAgICAgICAgY2hhbm5lbCxcbiAgICAgICAgICAgIGNvbnRyb2xsZXJOdW1iZXI6IHZhbHVlLFxuICAgICAgICAgICAgdmFsdWU6IHJlYWRlci51aW50OCgpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gcHJvZ3JhbSBjaGFuZ2VcbiAgICAgIGNhc2UgMHgwYzpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBldmVudDoge1xuICAgICAgICAgICAgdHlwZTogMHhjMCxcbiAgICAgICAgICAgIGRlc2NyOiBQUk9HUkFNX0NIQU5HRSxcbiAgICAgICAgICAgIGNoYW5uZWwsXG4gICAgICAgICAgICBwcm9ncmFtOiB2YWx1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlbHRhVGltZSxcbiAgICAgICAgfTtcbiAgICAgIC8vIGNoYW5uZWwgYWZ0ZXJ0b3VjaFxuICAgICAgY2FzZSAweDBkOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiAweGQwLFxuICAgICAgICAgICAgZGVzY3I6IENIQU5ORUxfQUZURVJUT1VDSCxcbiAgICAgICAgICAgIGNoYW5uZWwsXG4gICAgICAgICAgICBhbW91bnQ6IHZhbHVlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuICAgICAgLy8gcGl0Y2ggYmVuZFxuICAgICAgY2FzZSAweDBlOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICB0eXBlOiAweGUwLFxuICAgICAgICAgICAgZGVzY3I6IFBJVENIX0JFTkQsXG4gICAgICAgICAgICBjaGFubmVsLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlICsgKHJlYWRlci51aW50OCgpIDw8IDcpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsdGFUaW1lLFxuICAgICAgICB9O1xuXG4gICAgICAvLyBkZWZhdWx0OlxuICAgICAgLy8gICByZXR1cm4ge1xuICAgICAgLy8gICAgIGV2ZW50OiB7XG4gICAgICAvLyAgICAgICB0eXBlOiB0eXBlQnl0ZSA+PiA0LFxuICAgICAgLy8gICAgICAgZGVzY3I6IFwidW5yZWNvZ25pemVkXCIsXG4gICAgICAvLyAgICAgICBjaGFubmVsLFxuICAgICAgLy8gICAgIH0sXG4gICAgICAvLyAgICAgZGVsdGFUaW1lLFxuICAgICAgLy8gICB9O1xuICAgIH1cbiAgfVxuICBjb25zb2xlLmxvZyhgVW5yZWNvZ25pemVkIE1JREkgZXZlbnQgdHlwZSBieXRlOiAke3R5cGVCeXRlfSAoZml4IHRoaXMpYCk7XG4gIHJldHVybiB7XG4gICAgZXZlbnQ6IHtcbiAgICAgIHR5cGU6IHR5cGVCeXRlID09PSAyNTUgPyAwIDogdHlwZUJ5dGUsXG4gICAgfSxcbiAgICBkZWx0YVRpbWUsXG4gIH07XG4gIHRocm93IG5ldyBFcnJvcihgVW5yZWNvZ25pemVkIE1JREkgZXZlbnQgdHlwZSBieXRlOiAke3R5cGVCeXRlfWApO1xufVxuXG5mdW5jdGlvbiBnZXRGcmFtZVJhdGUoaG91ckJ5dGU6IG51bWJlcikge1xuICBzd2l0Y2ggKGhvdXJCeXRlICYgMGIxMTAwMDAwKSB7XG4gICAgY2FzZSAweDAwOlxuICAgICAgcmV0dXJuIDI0O1xuICAgIGNhc2UgMHgyMDpcbiAgICAgIHJldHVybiAyNTtcbiAgICBjYXNlIDB4NDA6XG4gICAgICByZXR1cm4gMjk7XG4gICAgY2FzZSAweDYwOlxuICAgICAgcmV0dXJuIDMwO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gMDtcbiAgfVxufVxuIiwiLy8gaW1wb3J0IHsgbWlkaUFjY2VzcyB9IGZyb20gXCIuL2luaXRBdWRpb0FuZE1JRElcIjtcbmltcG9ydCB7IGdldE1JRElQb3J0cyB9IGZyb20gXCIuL2dldE1JRElQb3J0c1wiO1xuXG4vLyB5b3UgY2FuIHVzZSB0aGlzIGZvciBhIHBhbmljIGJ1dHRvbiB0aGF0IGlzIGNvbW1vbiBpbiBEQVdzXG5leHBvcnQgY29uc3QgcmVzZXRNSURJT3V0cHV0cyA9IChtaWRpQWNjZXNzOiBXZWJNaWRpLk1JRElBY2Nlc3MgfCBudWxsLCBvZmZzZXQ6IG51bWJlciA9IDEwMCkgPT4ge1xuICBpZiAobWlkaUFjY2Vzcykge1xuICAgIGNvbnN0IHsgb3V0cHV0cyB9ID0gZ2V0TUlESVBvcnRzKG1pZGlBY2Nlc3MpO1xuICAgIGNvbnN0IHRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSArIG9mZnNldDtcbiAgICBvdXRwdXRzLmZvckVhY2gob3V0cHV0ID0+IHtcbiAgICAgIGZvciAobGV0IGNoYW5uZWwgPSAwOyBjaGFubmVsIDwgMTY7IGNoYW5uZWwrKykge1xuICAgICAgICBvdXRwdXQuc2VuZChbMHhiMCArIGNoYW5uZWwsIDB4N2IsIDB4MDBdLCB0aW1lKTsgLy8gc3RvcCBhbGwgbm90ZXNcbiAgICAgICAgb3V0cHV0LnNlbmQoWzB4YjAgKyBjaGFubmVsLCAweDc5LCAweDAwXSwgdGltZSk7IC8vIHJlc2V0IGFsbCBjb250cm9sbGVyc1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgU29uZyB9IGZyb20gXCIuL2NyZWF0ZVNvbmdcIjtcbmltcG9ydCB7IE1JRElFdmVudCwgTm90ZU9uRXZlbnQgfSBmcm9tIFwiLi9NSURJRXZlbnRcIjtcbmltcG9ydCB7IE5PVEVfT04sIE5PVEVfT0ZGIH0gZnJvbSBcIi4vdXRpbC9taWRpXCI7XG5cbnR5cGUgQXJncyA9IHtcbiAgc29uZzogU29uZztcbiAgbWlsbGlzOiBudW1iZXI7XG4gIGluZGV4OiBudW1iZXI7XG4gIG91dHB1dHM/OiBXZWJNaWRpLk1JRElPdXRwdXRNYXA7XG59O1xuZXhwb3J0IGNvbnN0IHNjaGVkdWxlID0gKHtcbiAgc29uZyxcbiAgaW5kZXgsXG4gIG1pbGxpcyxcbiAgb3V0cHV0cyxcbn06IEFyZ3MpOiB7IG1pbGxpczogbnVtYmVyOyBpbmRleDogbnVtYmVyOyBzY2hlZHVsZWQ6IE1JRElFdmVudFtdIH0gPT4ge1xuICBjb25zdCB0cyA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICBjb25zdCB7IGV2ZW50cyB9ID0gc29uZztcbiAgY29uc3Qgc2NoZWR1bGVkID0gW107XG4gIC8vIGxldCBsYXN0Tm90ZU51bWJlcjogbnVtYmVyID0gLTE7XG4gIC8vIGxldCBsYXN0Tm90ZVR5cGU6IG51bWJlciA9IC0xO1xuICB3aGlsZSAoaW5kZXggPCBldmVudHMubGVuZ3RoKSB7XG4gICAgY29uc3QgZXZlbnQgPSBldmVudHNbaW5kZXhdO1xuICAgIGlmICghZXZlbnQubWlsbGlzIHx8ICFldmVudC50cmFja0lkKSB7XG4gICAgICAvLyBicmVhaztcbiAgICAgIGluZGV4Kys7XG4gICAgfSBlbHNlIGlmIChldmVudC5taWxsaXMgPCBtaWxsaXMgKyBzb25nLmJ1ZmZlclRpbWUpIHtcbiAgICAgIHNjaGVkdWxlZC5wdXNoKGV2ZW50KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LnRpY2tzLCBldmVudC5kZXNjciwgKGV2ZW50IGFzIE5vdGVPbkV2ZW50KS5ub3RlTnVtYmVyKTtcbiAgICAgIGNvbnN0IHRyYWNrID0gc29uZy50cmFja3NCeUlkW2V2ZW50LnRyYWNrSWRdO1xuICAgICAgdHJhY2sub3V0cHV0cy5mb3JFYWNoKGlkID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmRlc2NyID09PSBOT1RFX09OIHx8IGV2ZW50LmRlc2NyID09PSBOT1RFX09GRikge1xuICAgICAgICAgIGNvbnN0IGUgPSBldmVudCBhcyBOb3RlT25FdmVudDtcbiAgICAgICAgICBpZiAoZXZlbnQubWlsbGlzKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudC50eXBlLCBldmVudC5jaGFubmVsLCBldmVudC5ub3RlTnVtYmVyKTtcbiAgICAgICAgICAgIGxldCB0aW1lID0gdHMgKyBzb25nLmxhdGVuY3kgKyB0cmFjay5sYXRlbmN5ICsgKGV2ZW50Lm1pbGxpcyAtIG1pbGxpcyk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudFtcIm5vdGVOdW1iZXJcIl0sIGV2ZW50LmRlc2NyLCBldmVudC5taWxsaXMsIG1pbGxpcywgdGltZSwgdHMsIHRpbWUgLSB0cyk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlLm5vdGVOdW1iZXIsIGxhc3ROb3RlTnVtYmVyLCBsYXN0Tm90ZVR5cGUpO1xuICAgICAgICAgICAgLy8gaWYgKGUubm90ZU51bWJlciA9PT0gbGFzdE5vdGVOdW1iZXIgJiYgbGFzdE5vdGVUeXBlID09PSAweDkwKSB7XG4gICAgICAgICAgICAvLyAgIGlmIChlLmRlc2NyID09PSBOT1RFX09OKSB7XG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJyZXBlYXRpbmcgbm90ZXNcIik7XG4gICAgICAgICAgICAvLyAgICAgdGltZSArPSAxO1xuICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyBsYXN0Tm90ZU51bWJlciA9IGUubm90ZU51bWJlcjtcbiAgICAgICAgICAgIC8vIGxhc3ROb3RlVHlwZSA9IGUudHlwZTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LnR5cGUgKyBldmVudC5jaGFubmVsLCBldmVudC5ub3RlTnVtYmVyLCBldmVudC52ZWxvY2l0eSk7XG4gICAgICAgICAgICAvLyBxdWljayBmaXggZm9yIHJlcGVhdGluZyBub3Rlc1xuICAgICAgICAgICAgaWYgKGUuZGVzY3IgPT09IE5PVEVfT04pIHtcbiAgICAgICAgICAgICAgdGltZSArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3V0cHV0c1xuICAgICAgICAgICAgICA/LmdldChpZClcbiAgICAgICAgICAgICAgPy5zZW5kKFtldmVudC50eXBlICsgZXZlbnQuY2hhbm5lbCwgZXZlbnQubm90ZU51bWJlciwgZXZlbnQudmVsb2NpdHldLCB0aW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaW5kZXgrKztcbiAgICB9IGVsc2Uge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIC8vIGNvbnNvbGUubG9nKCdbU0NIRURVTEVEXScsIHNjaGVkdWxlZC5tYXAoZSA9PiBbZS50aWNrcywgZS5taWxsaXNdKSk7XG4gIHJldHVybiB7IG1pbGxpcywgaW5kZXgsIHNjaGVkdWxlZCB9O1xufTtcbiIsImNvbnN0IHN0YXR1cyA9IChyZXNwb25zZTogUmVzcG9uc2UpOiBQcm9taXNlPFJlc3BvbnNlPiA9PiB7XG4gIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gMjAwICYmIHJlc3BvbnNlLnN0YXR1cyA8IDMwMCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzcG9uc2UpO1xuICB9XG4gIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoSlNPTiA9ICh1cmw6IHN0cmluZyk6IFByb21pc2U8SlNPTj4gPT5cbiAgLy8gZmV0Y2godXJsLCB7XG4gIC8vICAgbW9kZTogJ25vLWNvcnMnXG4gIC8vIH0pXG4gIGZldGNoKHVybClcbiAgICAudGhlbihzdGF0dXMpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcblxuZXhwb3J0IGNvbnN0IGZldGNoWE1MID0gKHVybDogc3RyaW5nKTogUHJvbWlzZTxYTUxEb2N1bWVudD4gPT5cbiAgZmV0Y2godXJsKVxuICAgIC50aGVuKHN0YXR1cylcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXG4gICAgLnRoZW4oc3RyID0+IG5ldyB3aW5kb3cuRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKHN0ciwgXCJ0ZXh0L3htbFwiKSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEFycmF5YnVmZmVyID0gKHVybDogc3RyaW5nKTogUHJvbWlzZTxBcnJheUJ1ZmZlcj4gPT5cbiAgZmV0Y2godXJsKVxuICAgIC50aGVuKHN0YXR1cylcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5hcnJheUJ1ZmZlcigpKTtcbiIsImltcG9ydCB7IE1JRElFdmVudCB9IGZyb20gXCIuLi9NSURJRXZlbnRcIjtcblxuZXhwb3J0IGNvbnN0IFNFUVVFTkNFX05VTUJFUiA9IFwic2VxdWVuY2UgbnVtYmVyXCI7XG5leHBvcnQgY29uc3QgVEVYVCA9IFwidGV4dFwiO1xuZXhwb3J0IGNvbnN0IENPUFlSSUdIVF9OT1RJQ0UgPSBcImNvcHlyaWdodCBub3RpY2VcIjtcbmV4cG9ydCBjb25zdCBUUkFDS19OQU1FID0gXCJ0cmFjayBuYW1lXCI7XG5leHBvcnQgY29uc3QgSU5TVFJVTUVOVF9OQU1FID0gXCJpbnN0cnVtZW50IG5hbWVcIjtcbmV4cG9ydCBjb25zdCBMWVJJQ1MgPSBcImx5cmljc1wiO1xuZXhwb3J0IGNvbnN0IE1BUktFUiA9IFwibWFya2VyXCI7XG5leHBvcnQgY29uc3QgQ1VFX1BPSU5UID0gXCJjdWUgcG9pbnRcIjtcbmV4cG9ydCBjb25zdCBDSEFOTkVMX1BSRUZJWCA9IFwiY2hhbm5lbCBwcmVmaXhcIjtcbmV4cG9ydCBjb25zdCBFTkRfT0ZfVFJBQ0sgPSBcImVuZCBvZiB0cmFja1wiO1xuZXhwb3J0IGNvbnN0IFRFTVBPID0gXCJ0ZW1wb1wiO1xuZXhwb3J0IGNvbnN0IFNNUFRFX09GRlNFVCA9IFwic21wdGUgb2Zmc2V0XCI7XG5leHBvcnQgY29uc3QgVElNRV9TSUdOQVRVUkUgPSBcInRpbWUgc2lnbmF0dXJlXCI7XG5leHBvcnQgY29uc3QgS0VZX1NJR05BVFVSRSA9IFwia2V5IHNpZ25hdHVyZVwiO1xuZXhwb3J0IGNvbnN0IFNFUVVFTkNFUl9TUEVDSUZJQyA9IFwic2VxdWVuY2VyIHNwZWNpZmljXCI7XG5leHBvcnQgY29uc3QgU1lTVEVNX0VYQ0xVU0lWRSA9IFwic3lzdGVtIGV4Y2x1c2l2ZVwiO1xuZXhwb3J0IGNvbnN0IERJVklERURfU1lTVEVNX0VYQ0xVU0lWRSA9IFwiZGl2aWRlZCBzeXN0ZW0gZXhjbHVzaXZlXCI7XG5leHBvcnQgY29uc3QgTk9URV9PTiA9IFwibm90ZSBvblwiO1xuZXhwb3J0IGNvbnN0IE5PVEVfT0ZGID0gXCJub3RlIG9mZlwiO1xuZXhwb3J0IGNvbnN0IE5PVEVfQUZURVJUT1VDSCA9IFwibm90ZSBhZnRlcnRvdWNoXCI7XG5leHBvcnQgY29uc3QgQ09OVFJPTExFUiA9IFwiY29udHJvbGxlclwiO1xuZXhwb3J0IGNvbnN0IFBST0dSQU1fQ0hBTkdFID0gXCJwcm9ncmFtIGNoYW5nZVwiO1xuZXhwb3J0IGNvbnN0IENIQU5ORUxfQUZURVJUT1VDSCA9IFwiY2hhbm5lbCBhZnRlcnRvdWNoXCI7XG5leHBvcnQgY29uc3QgUElUQ0hfQkVORCA9IFwicGl0Y2ggYmVuZFwiO1xuXG5jb25zdCBkZXNjcmlwdGlvbnM6IHsgW2luZGV4OiBudW1iZXJdOiB7IFtpbmRleDogbnVtYmVyXTogc3RyaW5nIH0gfCBzdHJpbmcgfSA9IHtcbiAgMHhmZjoge1xuICAgIDB4MDA6IFwic2VxdWVuY2UgbnVtYmVyXCIsXG4gICAgMHgwMTogXCJ0ZXh0XCIsXG4gICAgMHgwMjogXCJjb3B5cmlnaHQgbm90aWNlXCIsXG4gICAgMHgwMzogXCJ0cmFjayBuYW1lXCIsXG4gICAgMHgwNDogXCJpbnN0cnVtZW50IG5hbWVcIixcbiAgICAweDA1OiBcImx5cmljc1wiLFxuICAgIDB4MDY6IFwibWFya2VyXCIsXG4gICAgMHgwNzogXCJjdWUgcG9pbnRcIixcbiAgICAweDIwOiBcImNoYW5uZWwgcHJlZml4XCIsXG4gICAgMHgyZjogXCJlbmQgb2YgdHJhY2tcIixcbiAgICAweDUxOiBcInRlbXBvXCIsXG4gICAgMHg1NDogXCJzbXB0ZSBvZmZzZXRcIixcbiAgICAweDU4OiBcInRpbWUgc2lnbmF0dXJlXCIsXG4gICAgMHg1OTogXCJrZXkgc2lnbmF0dXJlXCIsXG4gICAgMHg3ZjogXCJzZXF1ZW5jZXIgc3BlY2lmaWNcIixcbiAgfSxcbiAgMHhmMDogXCJzeXN0ZW0gZXhjbHVzaXZlXCIsXG4gIDB4Zjc6IFwiZGl2aWRlZCBzeXNleFwiLFxuICAweDgwOiBcIm5vdGUgb25cIixcbiAgMHg5MDogXCJub3RlIG9mZlwiLFxuICAweGEwOiBcIm5vdGUgYWZ0ZXJ0b3VjaFwiLFxuICAweGIwOiBcImNvbnRyb2xsZXJcIixcbiAgMHhjMDogXCJwcm9ncmFtIGNoYW5nZVwiLFxuICAweGQwOiBcImNoYW5uZWwgYWZ0ZXJ0b3VjaFwiLFxuICAweGUwOiBcInBpdGNoIGJlbmRcIixcbn07XG5cbmV4cG9ydCBjb25zdCBub3RlTmFtZXMgPSB7XG4gIHNoYXJwOiBbXCJDXCIsIFwiQyNcIiwgXCJEXCIsIFwiRCNcIiwgXCJFXCIsIFwiRlwiLCBcIkYjXCIsIFwiR1wiLCBcIkcjXCIsIFwiQVwiLCBcIkEjXCIsIFwiQlwiXSxcbiAgZmxhdDogW1wiQ1wiLCBcIkRiXCIsIFwiRFwiLCBcIkViXCIsIFwiRVwiLCBcIkZcIiwgXCJHYlwiLCBcIkdcIiwgXCJBYlwiLCBcIkFcIiwgXCJCYlwiLCBcIkJcIl0sXG4gIFwiZW5oYXJtb25pYy1zaGFycFwiOiBbXCJCI1wiLCBcIkMjXCIsIFwiQyMjXCIsIFwiRCNcIiwgXCJEIyNcIiwgXCJFI1wiLCBcIkYjXCIsIFwiRiMjXCIsIFwiRyNcIiwgXCJHIyNcIiwgXCJBI1wiLCBcIkEjI1wiXSxcbiAgXCJlbmhhcm1vbmljLWZsYXRcIjogW1wiRGJiXCIsIFwiRGJcIiwgXCJFYmJcIiwgXCJFYlwiLCBcIkZiXCIsIFwiR2JiXCIsIFwiR2JcIiwgXCJBYmJcIiwgXCJBYlwiLCBcIkJiYlwiLCBcIkJiXCIsIFwiQ2JcIl0sXG59O1xuXG5leHBvcnQgY29uc3QgZ2V0TWlkaUV2ZW50RGVzY3JpcHRpb24gPSAodHlwZTogbnVtYmVyLCBzdWJUeXBlPzogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgaWYgKHR5cGVvZiBzdWJUeXBlID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uc1t0eXBlXSBhcyBzdHJpbmc7XG4gIH1cbiAgcmV0dXJuIGRlc2NyaXB0aW9uc1t0eXBlXVtzdWJUeXBlXSB8fCBcInVuZGVmaW5lZFwiO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldE1pZGlNZXNzYWdlRXZlbnQgPSAoZXZlbnQ6IE1JRElFdmVudCk6IG51bWJlcltdID0+IHtcbiAgc3dpdGNoIChldmVudC5kZXNjcikge1xuICAgIGNhc2UgTk9URV9PTjpcbiAgICAgIHJldHVybiBbMHg5MCArIGV2ZW50LmNoYW5uZWwsIGV2ZW50Lm5vdGVOdW1iZXIsIGV2ZW50LnZlbG9jaXR5XTtcbiAgICBjYXNlIE5PVEVfT0ZGOlxuICAgICAgcmV0dXJuIFsweDgwICsgZXZlbnQuY2hhbm5lbCwgZXZlbnQubm90ZU51bWJlciwgZXZlbnQudmVsb2NpdHldO1xuICB9XG4gIHJldHVybiBbMF07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Tm90ZU51bWJlciA9IChuYW1lOiBzdHJpbmcsIG9jdGF2ZTogbnVtYmVyLCBtb2RlOiBzdHJpbmcgPSBcInNoYXJwXCIpOiBudW1iZXIgPT4ge1xuICAvLyBsZXQgaW5kZXggPSAtMTtcbiAgLy8gY29uc3QgbW9kZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhub3RlTmFtZXMpO1xuICAvLyBmb3IgKGxldCBpID0gMCwgbWF4aSA9IG1vZGVzLmxlbmd0aDsgaSA8IG1heGk7IGkrKykge1xuICAvLyAgIGNvbnN0IG5hbWVzID0gbW9kZXNbaV07XG4gIC8vICAgZm9yIChsZXQgaiA9IDAsIG1heGogPSBuYW1lcy5sZW5ndGg7IGogPCBtYXhqOyBqKyspIHtcbiAgLy8gICAgIGlmIChtb2RlW2pdID09PSBuYW1lKSB7XG4gIC8vICAgICAgIGluZGV4ID0gaTtcbiAgLy8gICAgICAgYnJlYWs7XG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyB9XG4gIGxldCBpbmRleCA9IC0xO1xuICBjb25zdCBtb2RlcyA9IE9iamVjdC52YWx1ZXMobm90ZU5hbWVzKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG5hbWVzID0gbW9kZXNbaV07XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBuYW1lcy5sZW5ndGg7IGorKykge1xuICAgICAgLy8gY29uc29sZS5sb2cobmFtZXNbal0sIG5hbWUpO1xuICAgICAgaWYgKG5hbWVzW2pdID09PSBuYW1lKSB7XG4gICAgICAgIGluZGV4ID0gajtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIGNvbnNvbGUubG9nKG5hbWUsIG9jdGF2ZSwgaW5kZXgpO1xuICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgLy9udW1iZXIgPSAoaW5kZXggKyAxMikgKyAob2N0YXZlICogMTIpICsgMTI7IC8vIOKGkiBpbiBDdWJhc2UgY2VudHJhbCBDID0gQzMgaW5zdGVhZCBvZiBDNFxuICByZXR1cm4gaW5kZXggKyAxMiArIG9jdGF2ZSAqIDEyOyAvLyDihpIgbWlkaSBzdGFuZGFyZCArIHNjaWVudGlmaWMgbmFtaW5nLCBzZWU6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTWlkZGxlX0MgYW5kIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvU2NpZW50aWZpY19waXRjaF9ub3RhdGlvblxufTtcblxuZXhwb3J0IGNvbnN0IHNvcnRNSURJRXZlbnRzID0gKGV2ZW50czogTUlESUV2ZW50W10pOiBNSURJRXZlbnRbXSA9PlxuICBldmVudHMuc29ydCgoYTogTUlESUV2ZW50LCBiOiBNSURJRXZlbnQpID0+IHtcbiAgICBpZiAoYS50aWNrcyA8IGIudGlja3MpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9IGVsc2UgaWYgKGEudGlja3MgPiBiLnRpY2tzKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICAgIC8vIH0gZWxzZSBpZiAoYS50eXBlID09PSAweDgwICYmIGIudHlwZSA9PT0gMHg5MCkge1xuICAgICAgLy8gICAvLyBub3RlIG9mZiBiZWZvcmUgbm90ZSBvblxuICAgICAgLy8gICByZXR1cm4gLTE7XG4gICAgICAvLyB9IGVsc2UgaWYgKGEudHlwZSA9PT0gMHg1MSB8fCBhLnR5cGUgPT09IDB4NTgpIHtcbiAgICAgIC8vICAgLy8gdGVtcG8gYW5kIHRpbWUgc2lnbmF0dXJlIGV2ZW50cyBmaXJzdFxuICAgICAgLy8gICByZXR1cm4gLTE7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9KTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZURvdWJsZUV2ZW50cyA9IChldmVudHM6IE1JRElFdmVudFtdKTogTUlESUV2ZW50W10gPT4ge1xuICAvLyB2YXIgaSwgbWF4aSA9IGV2ZW50cy5sZW5ndGgsXG4gIC8vICAgZXZlbnQsIGV2ZW50SWQsIGxhc3RJZCxcbiAgLy8gICByZXN1bHQgPSBbXTtcblxuICAvLyBldmVudHMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAvLyAgIHJldHVybiBhLmV2ZW50TnVtYmVyIC0gYi5ldmVudE51bWJlcjtcbiAgLy8gfSk7XG5cbiAgLy8gZm9yIChpID0gMDsgaSA8IG1heGk7IGkrKykge1xuICAvLyAgIGV2ZW50ID0gZXZlbnRzW2ldO1xuICAvLyAgIGV2ZW50SWQgPSBldmVudC5pZDtcbiAgLy8gICBpZiAoZXZlbnRJZCAhPT0gbGFzdElkKSB7XG4gIC8vICAgICByZXN1bHQucHVzaChldmVudCk7XG4gIC8vICAgfVxuICAvLyAgIGxhc3RJZCA9IGV2ZW50SWQ7XG4gIC8vIH1cbiAgLy8gcmV0dXJuIHJlc3VsdDtcbiAgcmV0dXJuIFtdO1xufTtcbiIsIi8qIFxuKFRoZSBNSVQgTGljZW5zZSlcbkNvcHlyaWdodCAoYykgMjAxNC0yMDE5IEhhbMOhc3ogw4Fkw6FtIDxtYWlsQGFkYW1oYWxhc3ouY29tPlxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyAgVW5pcXVlIEhleGF0cmlkZWNpbWFsIElEIEdlbmVyYXRvclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vICBEZXBlbmRlbmNpZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxudmFyIHBpZCA9IHByb2Nlc3MgJiYgcHJvY2Vzcy5waWQgPyBwcm9jZXNzLnBpZC50b1N0cmluZygzNikgOiAnJyA7XG52YXIgYWRkcmVzcyA9ICcnO1xuaWYodHlwZW9mIF9fd2VicGFja19yZXF1aXJlX18gIT09ICdmdW5jdGlvbicpe1xuICAgIHZhciBtYWMgPSAnJywgbmV0d29ya0ludGVyZmFjZXMgPSByZXF1aXJlKCdvcycpLm5ldHdvcmtJbnRlcmZhY2VzKCk7XG4gICAgZm9yKGxldCBpbnRlcmZhY2Vfa2V5IGluIG5ldHdvcmtJbnRlcmZhY2VzKXtcbiAgICAgICAgY29uc3QgbmV0d29ya0ludGVyZmFjZSA9IG5ldHdvcmtJbnRlcmZhY2VzW2ludGVyZmFjZV9rZXldO1xuICAgICAgICBjb25zdCBsZW5ndGggPSBuZXR3b3JrSW50ZXJmYWNlLmxlbmd0aDtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmKG5ldHdvcmtJbnRlcmZhY2VbaV0ubWFjICYmIG5ldHdvcmtJbnRlcmZhY2VbaV0ubWFjICE9ICcwMDowMDowMDowMDowMDowMCcpe1xuICAgICAgICAgICAgICAgIG1hYyA9IG5ldHdvcmtJbnRlcmZhY2VbaV0ubWFjOyBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGRyZXNzID0gbWFjID8gcGFyc2VJbnQobWFjLnJlcGxhY2UoL1xcOnxcXEQrL2dpLCAnJykpLnRvU3RyaW5nKDM2KSA6ICcnIDtcbn0gXG5cbi8vICBFeHBvcnRzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbm1vZHVsZS5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uKHByZWZpeCwgc3VmZml4KXsgcmV0dXJuIChwcmVmaXggPyBwcmVmaXggOiAnJykgKyBhZGRyZXNzICsgcGlkICsgbm93KCkudG9TdHJpbmcoMzYpICsgKHN1ZmZpeCA/IHN1ZmZpeCA6ICcnKTsgfVxubW9kdWxlLmV4cG9ydHMucHJvY2VzcyA9IGZ1bmN0aW9uKHByZWZpeCwgc3VmZml4KXsgcmV0dXJuIChwcmVmaXggPyBwcmVmaXggOiAnJykgKyBwaWQgKyBub3coKS50b1N0cmluZygzNikgKyAoc3VmZml4ID8gc3VmZml4IDogJycpOyB9XG5tb2R1bGUuZXhwb3J0cy50aW1lICAgID0gZnVuY3Rpb24ocHJlZml4LCBzdWZmaXgpeyByZXR1cm4gKHByZWZpeCA/IHByZWZpeCA6ICcnKSArIG5vdygpLnRvU3RyaW5nKDM2KSArIChzdWZmaXggPyBzdWZmaXggOiAnJyk7IH1cblxuLy8gIEhlbHBlcnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZnVuY3Rpb24gbm93KCl7XG4gICAgdmFyIHRpbWUgPSBEYXRlLm5vdygpO1xuICAgIHZhciBsYXN0ID0gbm93Lmxhc3QgfHwgdGltZTtcbiAgICByZXR1cm4gbm93Lmxhc3QgPSB0aW1lID4gbGFzdCA/IHRpbWUgOiBsYXN0ICsgMTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9iYXNpYzIvaW5kZXgudHNcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9