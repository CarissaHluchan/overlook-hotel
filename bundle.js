/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),
/* 4 */
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_root_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_search_room_form_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_booking_card_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_login_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_user_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20);
// Imports










var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_root_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_search_room_form_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_5__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_booking_card_css__WEBPACK_IMPORTED_MODULE_7__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_login_css__WEBPACK_IMPORTED_MODULE_8__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_user_css__WEBPACK_IMPORTED_MODULE_9__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_user_css__WEBPACK_IMPORTED_MODULE_9__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".hidden {\n    display: none !important;\n}", "",{"version":3,"sources":["webpack://./src/css/styles.css"],"names":[],"mappings":"AAUA;IACI,wBAAwB;AAC5B","sourcesContent":["@import 'root';\n@import 'header';\n@import 'search-room-form';\n@import 'main';\n@import 'footer';\n@import 'booking-card';\n@import 'login';\n@import 'user';\n@import 'user';\n\n.hidden {\n    display: none !important;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),
/* 10 */
/***/ ((module) => {



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
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
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
/* 11 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --text-white: #FFFFFF;\n    --text-black: #000000;\n    --primary-color: #324031;\n    --secondary-color: #504F59;\n    --tertiary-color: #E4E9F2;\n    --accent-color: #86D0F2;\n    --second-acc-color: #8C7C2A;\n    --font-family: \"Cinzel Decorative\", serif;\n    --box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.272);\n    --box-shadow-dark: 5px 5px 5px black;\n    --text-shadow: 1px 1px 2px white, 0 0 25px white, 0 0 10px white;\n  }\n  \n  body {\n    font-family: \"Montserrat\", sans-serif;\n    font-optical-sizing: auto;\n    font-weight: 500;\n    font-style: normal;\n    margin: 0;\n  }\n  \n  button {\n    font-family: \"Montserrat\", sans-serif;\n    font-optical-sizing: auto;\n    font-size: clamp(10px, 1vw, 16px);\n    font-weight: 600;\n    font-style: normal;\n    padding: 0.5vw;\n    border-radius: 5px;\n    border-style: solid;\n    color: var(--white);\n    background-color: var(--accent-color);\n    border-color: var(--black);\n\n    &:hover {\n      cursor: pointer;\n    }\n  }", "",{"version":3,"sources":["webpack://./src/css/root.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,qBAAqB;IACrB,wBAAwB;IACxB,0BAA0B;IAC1B,yBAAyB;IACzB,uBAAuB;IACvB,2BAA2B;IAC3B,yCAAyC;IACzC,8CAA8C;IAC9C,oCAAoC;IACpC,gEAAgE;EAClE;;EAEA;IACE,qCAAqC;IACrC,yBAAyB;IACzB,gBAAgB;IAChB,kBAAkB;IAClB,SAAS;EACX;;EAEA;IACE,qCAAqC;IACrC,yBAAyB;IACzB,iCAAiC;IACjC,gBAAgB;IAChB,kBAAkB;IAClB,cAAc;IACd,kBAAkB;IAClB,mBAAmB;IACnB,mBAAmB;IACnB,qCAAqC;IACrC,0BAA0B;;IAE1B;MACE,eAAe;IACjB;EACF","sourcesContent":[":root {\n    --text-white: #FFFFFF;\n    --text-black: #000000;\n    --primary-color: #324031;\n    --secondary-color: #504F59;\n    --tertiary-color: #E4E9F2;\n    --accent-color: #86D0F2;\n    --second-acc-color: #8C7C2A;\n    --font-family: \"Cinzel Decorative\", serif;\n    --box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.272);\n    --box-shadow-dark: 5px 5px 5px black;\n    --text-shadow: 1px 1px 2px white, 0 0 25px white, 0 0 10px white;\n  }\n  \n  body {\n    font-family: \"Montserrat\", sans-serif;\n    font-optical-sizing: auto;\n    font-weight: 500;\n    font-style: normal;\n    margin: 0;\n  }\n  \n  button {\n    font-family: \"Montserrat\", sans-serif;\n    font-optical-sizing: auto;\n    font-size: clamp(10px, 1vw, 16px);\n    font-weight: 600;\n    font-style: normal;\n    padding: 0.5vw;\n    border-radius: 5px;\n    border-style: solid;\n    color: var(--white);\n    background-color: var(--accent-color);\n    border-color: var(--black);\n\n    &:hover {\n      cursor: pointer;\n    }\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 12 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_overlook_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_overlook_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "nav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: clamp(65px, 5vh, 150px);\n  width: clamp(394px, 100%, 100%);\n  border-bottom: 1px solid var(--secondary-color);\n}\n\n.go-to-landing-page-button,\n.go-to-user-dashboard-button {\n  height: 3vh;\n  width: clamp(250px, 40vw, 600px);\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin-left: 2vw;\n\n  img {\n    width: clamp(35px, 3vw, 80px);\n    height: auto;\n    border-radius: 2px;\n    ;\n  }\n\n  &:hover {\n    cursor: pointer;\n  }\n}\n\n.overlookHotelLogoTitle {\n  font-family: var(--font-family);\n  font-size: clamp(10px, 3vw, 35px);\n  margin-left: 10px;\n  font-weight: 700;\n}\n\n.login,\n.sign-out {\n  margin-right: 2vw;\n}\n\n.overlook-picture {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  height: clamp(300px, 40vh, 1000px);\n  width: clamp(394px, 100%, 100%);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.title-message {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nh1 {\n  bottom: auto;\n  font-family: var(--font-family);\n  font-size: clamp(24px, 4vw, 77px);\n  margin: 1vh;\n  text-shadow: var(--text-shadow);\n}\n\n.welcome-to {\n  font-size: clamp(16px, 2vw, 40px);\n  margin: 0;\n  text-shadow: var(--text-shadow);\n  font-weight: 700;\n}", "",{"version":3,"sources":["webpack://./src/css/header.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,+BAA+B;EAC/B,+BAA+B;EAC/B,+CAA+C;AACjD;;AAEA;;EAEE,WAAW;EACX,gCAAgC;EAChC,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;EACnB,gBAAgB;;EAEhB;IACE,6BAA6B;IAC7B,YAAY;IACZ,kBAAkB;;EAEpB;;EAEA;IACE,eAAe;EACjB;AACF;;AAEA;EACE,+BAA+B;EAC/B,iCAAiC;EACjC,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;;EAEE,iBAAiB;AACnB;;AAEA;EACE,yDAA+C;EAC/C,4BAA4B;EAC5B,sBAAsB;EACtB,2BAA2B;EAC3B,kCAAkC;EAClC,+BAA+B;EAC/B,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,+BAA+B;EAC/B,iCAAiC;EACjC,WAAW;EACX,+BAA+B;AACjC;;AAEA;EACE,iCAAiC;EACjC,SAAS;EACT,+BAA+B;EAC/B,gBAAgB;AAClB","sourcesContent":["nav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: clamp(65px, 5vh, 150px);\n  width: clamp(394px, 100%, 100%);\n  border-bottom: 1px solid var(--secondary-color);\n}\n\n.go-to-landing-page-button,\n.go-to-user-dashboard-button {\n  height: 3vh;\n  width: clamp(250px, 40vw, 600px);\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin-left: 2vw;\n\n  img {\n    width: clamp(35px, 3vw, 80px);\n    height: auto;\n    border-radius: 2px;\n    ;\n  }\n\n  &:hover {\n    cursor: pointer;\n  }\n}\n\n.overlookHotelLogoTitle {\n  font-family: var(--font-family);\n  font-size: clamp(10px, 3vw, 35px);\n  margin-left: 10px;\n  font-weight: 700;\n}\n\n.login,\n.sign-out {\n  margin-right: 2vw;\n}\n\n.overlook-picture {\n  background-image: url('../images/overlook.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  height: clamp(300px, 40vh, 1000px);\n  width: clamp(394px, 100%, 100%);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.title-message {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nh1 {\n  bottom: auto;\n  font-family: var(--font-family);\n  font-size: clamp(24px, 4vw, 77px);\n  margin: 1vh;\n  text-shadow: var(--text-shadow);\n}\n\n.welcome-to {\n  font-size: clamp(16px, 2vw, 40px);\n  margin: 0;\n  text-shadow: var(--text-shadow);\n  font-weight: 700;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 13 */
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/overlook.png");

/***/ }),
/* 15 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".search-room-form {\n    color: var(--white);\n    background-color: var(--tertiary-color);\n    box-shadow: var(--box-shadow-dark);\n    border-radius: 5px;\n    height: clamp(50px, 5vh, 70px);\n    width: clamp(382px, 60vw, 1300px);\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n  }\n  \n  search {\n    display: flex;\n    flex-wrap: wrap;\n    align-content: center;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n  }\n  \n  .search-book-your-stay {\n    margin-left: 1vw;\n    margin-top: 0;\n    margin-right: 0;\n    margin-bottom: 0;\n    font-size: clamp(13px, 1vw, 25px);\n    font-weight: 600;\n    flex: 0 2 18%;\n  }\n  \n  .filter-label,\n  #filterByRoomType {\n    font-size: clamp(10px, 1vw, 20px);\n    flex: 0 2 23%;\n  }\n  \n  .landing-page-search-button,\n  .user-room-search-button {\n    margin-right: 1vw;\n  }", "",{"version":3,"sources":["webpack://./src/css/search-room-form.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,uCAAuC;IACvC,kCAAkC;IAClC,kBAAkB;IAClB,8BAA8B;IAC9B,iCAAiC;IACjC,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,mBAAmB;EACrB;;EAEA;IACE,aAAa;IACb,eAAe;IACf,qBAAqB;IACrB,sBAAsB;IACtB,uBAAuB;IACvB,uBAAuB;EACzB;;EAEA;IACE,gBAAgB;IAChB,aAAa;IACb,eAAe;IACf,gBAAgB;IAChB,iCAAiC;IACjC,gBAAgB;IAChB,aAAa;EACf;;EAEA;;IAEE,iCAAiC;IACjC,aAAa;EACf;;EAEA;;IAEE,iBAAiB;EACnB","sourcesContent":[".search-room-form {\n    color: var(--white);\n    background-color: var(--tertiary-color);\n    box-shadow: var(--box-shadow-dark);\n    border-radius: 5px;\n    height: clamp(50px, 5vh, 70px);\n    width: clamp(382px, 60vw, 1300px);\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n  }\n  \n  search {\n    display: flex;\n    flex-wrap: wrap;\n    align-content: center;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n  }\n  \n  .search-book-your-stay {\n    margin-left: 1vw;\n    margin-top: 0;\n    margin-right: 0;\n    margin-bottom: 0;\n    font-size: clamp(13px, 1vw, 25px);\n    font-weight: 600;\n    flex: 0 2 18%;\n  }\n  \n  .filter-label,\n  #filterByRoomType {\n    font-size: clamp(10px, 1vw, 20px);\n    flex: 0 2 23%;\n  }\n  \n  .landing-page-search-button,\n  .user-room-search-button {\n    margin-right: 1vw;\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 16 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".main-search-results {\n    height: 65vh;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    background-color: var(--tertiary-color);\n    display: flex;\n    flex-wrap: wrap;\n    align-content: flex-start;\n    justify-content: center;\n    align-items: flex-start;\n    overflow-y: scroll;\n  }\n  \n  .section-header {\n    background-color: var(--primary-color);\n    color: var(--text-white);\n    height: clamp(65px, 5vh, 150px);\n    width: clamp(394px, 100%, 100%);\n    display: flex;\n    flex-direction: row;\n    align-content: center;\n    justify-content: space-between;\n    align-items: center;\n  }\n  \n  h2 {\n    margin-left: 2vw;\n    font-size: clamp(14px, 2vw, 28px);\n  }\n\n  .sign-in-to-book-message {\n    margin-right: 1vw;\n    font-size: clamp(16px, 1vw, 28px);\n  }", "",{"version":3,"sources":["webpack://./src/css/main.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,WAAW;IACX,SAAS;IACT,UAAU;IACV,uCAAuC;IACvC,aAAa;IACb,eAAe;IACf,yBAAyB;IACzB,uBAAuB;IACvB,uBAAuB;IACvB,kBAAkB;EACpB;;EAEA;IACE,sCAAsC;IACtC,wBAAwB;IACxB,+BAA+B;IAC/B,+BAA+B;IAC/B,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,8BAA8B;IAC9B,mBAAmB;EACrB;;EAEA;IACE,gBAAgB;IAChB,iCAAiC;EACnC;;EAEA;IACE,iBAAiB;IACjB,iCAAiC;EACnC","sourcesContent":[".main-search-results {\n    height: 65vh;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    background-color: var(--tertiary-color);\n    display: flex;\n    flex-wrap: wrap;\n    align-content: flex-start;\n    justify-content: center;\n    align-items: flex-start;\n    overflow-y: scroll;\n  }\n  \n  .section-header {\n    background-color: var(--primary-color);\n    color: var(--text-white);\n    height: clamp(65px, 5vh, 150px);\n    width: clamp(394px, 100%, 100%);\n    display: flex;\n    flex-direction: row;\n    align-content: center;\n    justify-content: space-between;\n    align-items: center;\n  }\n  \n  h2 {\n    margin-left: 2vw;\n    font-size: clamp(14px, 2vw, 28px);\n  }\n\n  .sign-in-to-book-message {\n    margin-right: 1vw;\n    font-size: clamp(16px, 1vw, 28px);\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 17 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "footer {\n    background-color: var(--primary-color);\n    color: var(--text-white);\n    height: clamp(84px, 5vh, 150px);\n    width: clamp(394px, 100%, 100%);\n    display: flex;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    align-items: center;\n  }\n  \n  footer p,\n  footer a {\n    font-size: clamp(10px, 1vw, 16px);\n  }\n  \n  footer a {\n    color: var(--text-white)\n  }", "",{"version":3,"sources":["webpack://./src/css/footer.css"],"names":[],"mappings":"AAAA;IACI,sCAAsC;IACtC,wBAAwB;IACxB,+BAA+B;IAC/B,+BAA+B;IAC/B,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,mBAAmB;EACrB;;EAEA;;IAEE,iCAAiC;EACnC;;EAEA;IACE;EACF","sourcesContent":["footer {\n    background-color: var(--primary-color);\n    color: var(--text-white);\n    height: clamp(84px, 5vh, 150px);\n    width: clamp(394px, 100%, 100%);\n    display: flex;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    align-items: center;\n  }\n  \n  footer p,\n  footer a {\n    font-size: clamp(10px, 1vw, 16px);\n  }\n  \n  footer a {\n    color: var(--text-white)\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 18 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".booking-card {\n  font-size: clamp(13px, 1vw, 16px);\n  margin: 1vh;\n  background-color: var(--text-white);\n  width: clamp(300px, 86vw, 400px);\n  display: flex;\n  justify-content: space-around;\n  align-content: flex-start;\n  align-items: flex-start;\n  border: 1px solid #808080;\n  border-radius: 8px;\n  box-shadow: var(--box-shadow);\n  padding: 16px;\n\n  img {\n    width: 30px;\n  }\n}\n\n.room-details {\n  width: clamp(150px, 43vw, 336px);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.room-response {\n  width: clamp(164px, 33vw, 334px);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.room-info,\n.room-cost {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  align-content: flex-start;\n}\n\n.response {\n  font-weight: 600;\n}\n\n.booking-options {\n  width: clamp(108px, 120w, 170px);\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: space-between;\n}\n\n.delete-room-booking {\n  margin: 1px;\n}\n\n.booking-card p {\n  margin: 1px;\n}\n\n.book-room-button {\n  width: clamp(42px, 5vw, 60px);\n  font-size: clamp(10px, 1vw, 13px);\n}", "",{"version":3,"sources":["webpack://./src/css/booking-card.css"],"names":[],"mappings":"AAAA;EACE,iCAAiC;EACjC,WAAW;EACX,mCAAmC;EACnC,gCAAgC;EAChC,aAAa;EACb,6BAA6B;EAC7B,yBAAyB;EACzB,uBAAuB;EACvB,yBAAyB;EACzB,kBAAkB;EAClB,6BAA6B;EAC7B,aAAa;;EAEb;IACE,WAAW;EACb;AACF;;AAEA;EACE,gCAAgC;EAChC,aAAa;EACb,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;EACE,gCAAgC;EAChC,aAAa;EACb,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gCAAgC;EAChC,aAAa;EACb,sBAAsB;EACtB,qBAAqB;EACrB,8BAA8B;AAChC;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,6BAA6B;EAC7B,iCAAiC;AACnC","sourcesContent":[".booking-card {\n  font-size: clamp(13px, 1vw, 16px);\n  margin: 1vh;\n  background-color: var(--text-white);\n  width: clamp(300px, 86vw, 400px);\n  display: flex;\n  justify-content: space-around;\n  align-content: flex-start;\n  align-items: flex-start;\n  border: 1px solid #808080;\n  border-radius: 8px;\n  box-shadow: var(--box-shadow);\n  padding: 16px;\n\n  img {\n    width: 30px;\n  }\n}\n\n.room-details {\n  width: clamp(150px, 43vw, 336px);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.room-response {\n  width: clamp(164px, 33vw, 334px);\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.room-info,\n.room-cost {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  align-content: flex-start;\n}\n\n.response {\n  font-weight: 600;\n}\n\n.booking-options {\n  width: clamp(108px, 120w, 170px);\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: space-between;\n}\n\n.delete-room-booking {\n  margin: 1px;\n}\n\n.booking-card p {\n  margin: 1px;\n}\n\n.book-room-button {\n  width: clamp(42px, 5vw, 60px);\n  font-size: clamp(10px, 1vw, 13px);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 19 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* ---------------------------------------Login-Form------------------------------------- */\n.login-form {\n    height: clamp(200px, 15vh, 235px);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    font-size: clamp(16px, 1vw, 28px);\n    Margin-top: 17vh;\n  }\n  \n  .login-form input {\n    font-size: clamp(16px, 1vw, 28px);\n  }\n  ", "",{"version":3,"sources":["webpack://./src/css/login.css"],"names":[],"mappings":"AAAA,2FAA2F;AAC3F;IACI,iCAAiC;IACjC,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,iCAAiC;IACjC,gBAAgB;EAClB;;EAEA;IACE,iCAAiC;EACnC","sourcesContent":["/* ---------------------------------------Login-Form------------------------------------- */\n.login-form {\n    height: clamp(200px, 15vh, 235px);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    font-size: clamp(16px, 1vw, 28px);\n    Margin-top: 17vh;\n  }\n  \n  .login-form input {\n    font-size: clamp(16px, 1vw, 28px);\n  }\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 20 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* ---------------------------------------User-section------------------------------------- */\n.user-rooms {\n  background-color: var(--secondary-color);\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-items: flex-start;\n  overflow-y: scroll;\n}\n\n.user-rooms-search,\n.user-rooms-past,\n.user-upcoming-bookings {\n  height: max(63vh);\n  width: clamp(450px, 48vw, 1000px);\n  overflow-y: scroll;\n}\n\n.user-section-header {\n  color: var(--text-white);\n  height: 4vh;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n\nh3,\nh4 {\n  font-size: clamp(12px, 1.5vw, 28px);\n  margin: 0;\n}\n\n.user-bookings-section,\n.future-bookings-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0;\n  padding: 0;\n}\n\n.user-bookings-section {\n  background-color: var(--tertiary-color);\n}\n\n.future-bookings-section {\n  background-color: var(--second-acc-color);\n}\n\n.delete-room-booking {\n  &:hover {\n    cursor: pointer;\n  }\n}\n\n/* ---------------------------------------User-Search-section------------------------------------- */\n\n.user-rooms-search h4 {\n  width: clamp(405px, 43vw, 680px);\n}\n\n.user-rooms-search .booking-options {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.show-past-bookings-button {\n  color: var(--text-black);\n  border-color: var(--text-black);\n  margin-left: 1vw;\n}", "",{"version":3,"sources":["webpack://./src/css/user.css"],"names":[],"mappings":"AAAA,6FAA6F;AAC7F;EACE,wCAAwC;EACxC,YAAY;EACZ,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,6BAA6B;EAC7B,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;;;EAGE,iBAAiB;EACjB,iCAAiC;EACjC,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;EACxB,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;;EAEE,mCAAmC;EACnC,SAAS;AACX;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE;IACE,eAAe;EACjB;AACF;;AAEA,oGAAoG;;AAEpG;EACE,gCAAgC;AAClC;;AAEA;EACE,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,wBAAwB;EACxB,+BAA+B;EAC/B,gBAAgB;AAClB","sourcesContent":["/* ---------------------------------------User-section------------------------------------- */\n.user-rooms {\n  background-color: var(--secondary-color);\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-items: flex-start;\n  overflow-y: scroll;\n}\n\n.user-rooms-search,\n.user-rooms-past,\n.user-upcoming-bookings {\n  height: max(63vh);\n  width: clamp(450px, 48vw, 1000px);\n  overflow-y: scroll;\n}\n\n.user-section-header {\n  color: var(--text-white);\n  height: 4vh;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n\nh3,\nh4 {\n  font-size: clamp(12px, 1.5vw, 28px);\n  margin: 0;\n}\n\n.user-bookings-section,\n.future-bookings-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0;\n  padding: 0;\n}\n\n.user-bookings-section {\n  background-color: var(--tertiary-color);\n}\n\n.future-bookings-section {\n  background-color: var(--second-acc-color);\n}\n\n.delete-room-booking {\n  &:hover {\n    cursor: pointer;\n  }\n}\n\n/* ---------------------------------------User-Search-section------------------------------------- */\n\n.user-rooms-search h4 {\n  width: clamp(405px, 43vw, 680px);\n}\n\n.user-rooms-search .booking-options {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.show-past-bookings-button {\n  color: var(--text-black);\n  border-color: var(--text-black);\n  margin-left: 1vw;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/overlooklogo.png");

/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/delete.png");

/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createLandingPageRoomCard: () => (/* binding */ createLandingPageRoomCard),
/* harmony export */   createLoggedInUsersBookingCard: () => (/* binding */ createLoggedInUsersBookingCard),
/* harmony export */   createUserSearchRoomCard: () => (/* binding */ createUserSearchRoomCard),
/* harmony export */   displayUsersPastAndFutureBookings: () => (/* binding */ displayUsersPastAndFutureBookings),
/* harmony export */   hideElement: () => (/* binding */ hideElement),
/* harmony export */   noSearchRusultsMessage: () => (/* binding */ noSearchRusultsMessage),
/* harmony export */   removeBookingCard: () => (/* binding */ removeBookingCard),
/* harmony export */   setRoomsAvailabeOnDateHeader: () => (/* binding */ setRoomsAvailabeOnDateHeader),
/* harmony export */   setRoomsAvailabeOnDateUserSearchHeader: () => (/* binding */ setRoomsAvailabeOnDateUserSearchHeader),
/* harmony export */   showLandingPage: () => (/* binding */ showLandingPage),
/* harmony export */   showLandingPageRoomCards: () => (/* binding */ showLandingPageRoomCards),
/* harmony export */   showLoggedInUsersFutureBookings: () => (/* binding */ showLoggedInUsersFutureBookings),
/* harmony export */   showLoggedInUsersPastBooking: () => (/* binding */ showLoggedInUsersPastBooking),
/* harmony export */   showLoginPage: () => (/* binding */ showLoginPage),
/* harmony export */   showUserDashboard: () => (/* binding */ showUserDashboard),
/* harmony export */   showUserSearchResultsPage: () => (/* binding */ showUserSearchResultsPage),
/* harmony export */   showUsersFutureBookingsTotalCost: () => (/* binding */ showUsersFutureBookingsTotalCost),
/* harmony export */   showUsersPastBookingsTotalCost: () => (/* binding */ showUsersPastBookingsTotalCost),
/* harmony export */   showUsersRoomSearchResults: () => (/* binding */ showUsersRoomSearchResults),
/* harmony export */   unhideElement: () => (/* binding */ unhideElement),
/* harmony export */   updateLoggedInUsersNameHeader: () => (/* binding */ updateLoggedInUsersNameHeader)
/* harmony export */ });
/**--------------------// DOM Nodes //----------------------------*/
/*----// Page Views //----*/
const landingPage = document.querySelector('.landing-page');
const loginPage = document.querySelector('.login-page');
const userDashboard = document.querySelector('.user-dashboard');
const usersPastBookingsWithHeader = document.querySelector('.user-rooms-past');
const usersRoomSearchResultsWithHeader = document.querySelector('.user-rooms-search');

/*----// Landing Page //----*/
const roomsAvailabeOnDateHeader = document.getElementById('searchedDate');
const mainSearchResults = document.querySelector('.main-search-results');

/*----// userDashboard Page //----*/
const loggedInUsersNameHeader = document.getElementById('loggedInUsersNameHeader');
const usersPastBookings = document.querySelector('.user-bookings-section');
const usersFutureBookings = document.querySelector('.future-bookings-section');
const usersPastBookingsTotalCost = document.querySelector('.total-cost.past span');
const usersFutureBookingsTotalCost = document.querySelector('.total-cost.upcoming span');
const roomsAvailabeOnDateUserSearchHeader = document.getElementById('userSearchDates');
const usersRoomSearchResults = document.querySelector('.user-rooms-search .user-bookings-section');

/**--------------------// Page Views //----------------------------*/
function showLandingPage() {
  unhideElement(landingPage);
  hideElement(loginPage);
  hideElement(userDashboard);
}

function showLoginPage() {
  hideElement(landingPage);
  unhideElement(loginPage);
  hideElement(userDashboard);
}

function showUserDashboard() {
  hideElement(landingPage);
  hideElement(loginPage);
  unhideElement(userDashboard);
  unhideElement(usersPastBookingsWithHeader);
  hideElement(usersRoomSearchResultsWithHeader);
}

function showUserSearchResultsPage() {
  hideElement(landingPage);
  hideElement(loginPage);
  unhideElement(userDashboard);
  hideElement(usersPastBookingsWithHeader);
  unhideElement(usersRoomSearchResultsWithHeader);
}

/**--------------------// Functions //----------------------------*/
function hideElement(element) {
  element.classList.add('hidden');
  element.ariaHidden = 'true';
  element.disabled = 'true';
}
function unhideElement(element) {
  element.classList.remove('hidden');
  element.ariaHidden = 'false';
  element.removeAttribute('disabled');
}

function showLandingPageRoomCards(rooms) {
  mainSearchResults.innerHTML = '';
  rooms.forEach(room => mainSearchResults.innerHTML += createLandingPageRoomCard(room))
  if (!rooms.length) {
    mainSearchResults.innerHTML = '😢 We are so very sorry!!!😢 There are no rooms available that match your search criteria. Please try again.';
  }
}

function createLandingPageRoomCard(room) {
  return `<li class="booking-card" aria-label="Room ${room.roomType}">
    <div class="room-details" aria-hidden="true">
      <div class="room-info">
        <p>Room type:</p>
        <p>Bed size:</p>
        <p>Number of Beds:</p>
        <p>Bidet:</p>
       <p>Room number:</p>
      </div>
     <div class="room-cost">
        <p>Cost per night:</p>
      </div>
    </div>
    <div class="room-response">
      <div class="room-info response">
        <p aria-label="Room type">${room.roomType}</p>
        <p aria-label="Bed size">${room.bedSize}</p>
        <p aria-label="Number of Beds">${room.numBeds}</p>
        <p aria-label="Has bidet">${room.bidet}</p>
        <p aria-label="Room number">${room.number}</p>
      </div>
      <div class="room-cost response">
        <p aria-label="Cost per night">$${room.costPerNight}</p>
      </div>
    </div>
  </li>`;
}

function setRoomsAvailabeOnDateHeader(dateString) {
  if (dateString === '') {
    roomsAvailabeOnDateHeader.classList.add('hidden');
  } else {
    roomsAvailabeOnDateHeader.innerHTML = `on ${dateString}`;
    roomsAvailabeOnDateHeader.classList.remove('hidden');
  }
}

function updateLoggedInUsersNameHeader(name) {
  loggedInUsersNameHeader.innerHTML = name;
}


function showLoggedInUsersPastBooking(usersBookings, rooms) {
  usersPastBookings.innerHTML = '';
  usersBookings.forEach(booking => {
    const room = rooms.find(room => room.number === booking.roomNumber);
    usersPastBookings.innerHTML += createLoggedInUsersBookingCard(booking, room);
  });
}

function showLoggedInUsersFutureBookings(usersBookings, rooms) {
  usersFutureBookings.innerHTML = '';
  usersBookings.forEach(booking => {
    const room = rooms.find(room => room.number === booking.roomNumber);
    usersFutureBookings.innerHTML += createLoggedInUsersBookingCard(booking, room, true);
  });
}

function createLoggedInUsersBookingCard(userBooking, room, allowDeleteBooking = false) {
  let loggedInUsersBookingCard = 
  `<li class="booking-card" booking-id="${userBooking.id}" aria-label="Booking on ${userBooking.date} Room ${room.number}">
    <div class="room-details" aria-hidden="true">
      <div class="room-info">
        <p>Date:</p>
        <p>Room type:</p>
        <p>Bed size:</p>
        <p>Number of Beds:</p>
        <p>Bidet:</p>
        <p>Room number:</p>
      </div>
      <div class="room-cost">
        <p>Cost per night:</p>
      </div>
    </div>
    <div class="room-response">
      <div class="room-info response">
        <p aria-label="Date of booking">${userBooking.date}</p>
        <p aria-label="Room type">${room.roomType}</p>
        <p aria-label="Bed size">${room.bedSize}</p>
        <p aria-label="Number of Beds">${room.numBeds}</p>
        <p aria-label="Has bidet">${room.bidet}</p>
        <p aria-label="Room number">${room.number}</p>
      </div>
      <div class="room-cost response">
        <p aria-label="Cost per night">$${room.costPerNight}</p>
      </div>
    </div>`;
  if (allowDeleteBooking) {
    loggedInUsersBookingCard += `<div class="booking-options">
            <img aria-label="delete room from bookings" tabindex="0" role="button" type="button" class="delete-room-booking" src="./images/delete.png" alt="delete room from booking" booking-id="${userBooking.id}">
        </div>`;
  }
  
  loggedInUsersBookingCard += '</li>';
  return loggedInUsersBookingCard;
}

function displayUsersPastAndFutureBookings(pastAndFutureBookings, rooms) {
  showLoggedInUsersPastBooking(pastAndFutureBookings.past, rooms);
  showLoggedInUsersFutureBookings(pastAndFutureBookings.upcoming, rooms);
}

function removeBookingCard(bookingId) {
  const bookingCardElement = document.querySelector(`.booking-card[booking-id="${bookingId}"]`);
  bookingCardElement.remove();
}

function showUsersPastBookingsTotalCost(totalCost) {
  usersPastBookingsTotalCost.innerHTML = Number.parseFloat(totalCost).toFixed(2);
}

function showUsersFutureBookingsTotalCost(totalCost) {
  usersFutureBookingsTotalCost.innerHTML = Number.parseFloat(totalCost).toFixed(2);
}

function setRoomsAvailabeOnDateUserSearchHeader(dateString) {
  roomsAvailabeOnDateUserSearchHeader.innerHTML = dateString;
}

function showUsersRoomSearchResults(rooms) {
  usersRoomSearchResults.innerHTML = '';
  rooms.forEach(room => usersRoomSearchResults.innerHTML += createUserSearchRoomCard(room));
  if (!rooms.length) {
    usersRoomSearchResults.innerHTML += noSearchRusultsMessage();
  }
}

function createUserSearchRoomCard(room) {
  return `<li class="booking-card" aria-label="Room ${room.roomType}">
              <div class="room-details" aria-hidden="true">
                <div class="room-info">
                  <p>Room type:</p>
                  <p>Bed size:</p>
                  <p>Number of Beds:</p>
                  <p>Bidet:</p>
                  <p>Room number:</p>
                </div>
                <div class="room-cost">
                  <p>Cost per night:</p>
                </div>
              </div>
              <div class="room-response">
                <div class="room-info response">
                  <p aria-label="Room type">${room.roomType}</p>
                  <p aria-label="Bed size">${room.bedSize}</p>
                  <p aria-label="Number of Beds">${room.numBeds}</p>
                  <p aria-label="Has bidet">${room.bidet}</p>
                  <p aria-label="Room number">${room.number}</p>
                </div>
                <div class="room-cost response">
                  <p aria-label="Cost per night">$${room.costPerNight}</p>
                </div>
              </div>
              <div class="booking-options">
                <button room-number="${room.number}" type="button" class="book-room-button">Book this Room</button>
              </div>
            </li>`;
}

function noSearchRusultsMessage() {
  return `<li roll="listitem" class="booking-card">
          <p>😢 We are so very sorry!!!😢 <br>
          There are no more rooms available that match your search criteria. <br>
          Please adjust your search criteria and try again.</p>
        </li>`;
}

/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterRoomsByDateAndType: () => (/* binding */ filterRoomsByDateAndType),
/* harmony export */   getRoomsByDate: () => (/* binding */ getRoomsByDate),
/* harmony export */   getRoomsByType: () => (/* binding */ getRoomsByType)
/* harmony export */ });
const { bookingsSampleData } = __webpack_require__(25);
const { roomsSampleData } = __webpack_require__(26);

const getRoomsByDate = (date, bookings, rooms) => {
    // date entered will always need to be a string in yyyy/mm/dd form
    if (isNaN(new Date(date))) {
        throw 'Please enter a valid date.';
    }

    const bookingByDate = bookings.filter(booking => new Date(booking.date).getTime() === new Date(date).getTime());
    const bookedRooms = bookingByDate.map(booking => booking.roomNumber);
    const availableRooms = rooms.filter(room => !bookedRooms.includes(room.number));
    return availableRooms;
}

const getRoomsByType = (typeOf, rooms) => {
    const roomTypes = rooms.filter(room => room.roomType === typeOf);
    return roomTypes
}

const filterRoomsByDateAndType = (date, typeOf, rooms, bookings) => {
    if (date === '' && typeOf === '') {
        return rooms;
    }

    if (date === '') {
        return getRoomsByType(typeOf, rooms);
    }

    const roomsFilteredByDate = getRoomsByDate(date, bookings, rooms);

    if (typeOf === '') {
        return roomsFilteredByDate;
    } else {
        return getRoomsByType(typeOf, roomsFilteredByDate);
    }
}

/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bookingsSampleData: () => (/* binding */ bookingsSampleData)
/* harmony export */ });
const bookingsSampleData = [
    {
      "id": "5fwrgu4i7k55hl6sz",
      "userID": 9,
      "date": "2022/04/22",
      "roomNumber": 15,
  
    },
    {
      "id": "5fwrgu4i7k55hl6vu",
      "userID": 9,
      "date": "2022/01/16",
      "roomNumber": 23,
  
    },
    {
      "id": "5fwrgu4i7k55hl6th",
      "userID": 19,
      "date": "2022/02/26",
      "roomNumber": 15,
  
    },
    {
      "id": "5fwrgu4i7k55hl6t5",
      "userID": 43,
      "date": "2022/01/24",
      "roomNumber": 24,
  
    },
    {
      "id": "5fwrgu4i7k55hl6s2",
      "userID": 43,
      "date": "2024/12/24",
      "roomNumber": 24,
  
    },
    {
      "id": "5fwrgu4i7k55hl6t6",
      "userID": 13,
      "date": "2022/01/10",
      "roomNumber": 12,
  
    },
    {
      "id": "5fwrgu4i7k55hl6t7",
      "userID": 20,
      "date": "2022/02/16",
      "roomNumber": 7,
  
    },
    {
      "id": "5fwrgu4i7k55hl6t8",
      "userID": 1,
      "date": "2022/02/05",
      "roomNumber": 12,
  
    },
]

/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   roomsSampleData: () => (/* binding */ roomsSampleData)
/* harmony export */ });
const roomsSampleData  = [
    {
      "number": 1,
      "roomType": "residential suite",
      "bidet": true,
      "bedSize": "queen",
      "numBeds": 1,
      "costPerNight": 358.4
    },
    {
      "number": 7,
      "roomType": "single room",
      "bidet": false,
      "bedSize": "queen",
      "numBeds": 2,
      "costPerNight": 231.46
    },
    {
      "number": 12,
      "roomType": "single room",
      "bidet": false,
      "bedSize": "twin",
      "numBeds": 2,
      "costPerNight": 172.09
    },
    {
      "number": 15,
      "roomType": "residential suite",
      "bidet": false,
      "bedSize": "full",
      "numBeds": 1,
      "costPerNight": 294.56
    },
    {
      "number": 23,
      "roomType": "residential suite",
      "bidet": false,
      "bedSize": "queen",
      "numBeds": 2,
      "costPerNight": 176.36
    },
    {
      "number": 24,
      "roomType": "suite",
      "bidet": false,
      "bedSize": "queen",
      "numBeds": 1,
      "costPerNight": 327.24
    }, 
] 

/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTotalCost: () => (/* binding */ getTotalCost),
/* harmony export */   getUsersBookings: () => (/* binding */ getUsersBookings),
/* harmony export */   getUsersPastAndFutureBookings: () => (/* binding */ getUsersPastAndFutureBookings)
/* harmony export */ });
const { bookingsSampleData } = __webpack_require__(25);
const { roomsSampleData } = __webpack_require__(26);

const nowTime = () => new Date().getTime();
// const nowTime = () => new Date('2022-02-08').getTime();

const getUsersBookings = (userID = [], bookings) => {
    const usersBookings = bookings.filter(booking => booking.userID === userID);
    return usersBookings;
}

const getUsersPastAndFutureBookings = (usersBookings) => {
    const now = nowTime();
    const pastAndFutureBookings = usersBookings.reduce((acc, booking) => {
        const bookingValue = new Date(booking.date).getTime();
        if (bookingValue < now) {
            acc.past.push(booking);
        } else {
            acc.upcoming.push(booking);
        }
        return acc;
    }, { past: [], upcoming: [] });
    return pastAndFutureBookings;
}

const getTotalCost = (usersBookings, rooms) => {
    const usersRooms = usersBookings.map(booking => booking.roomNumber);

    const roomWithThisRoomNumber = rooms.filter(room => {
        if (usersRooms.includes(room.number)) {
            return room;
        }
    });

    const totalCost = roomWithThisRoomNumber.reduce((acc, room) => {
        acc += room.costPerNight;
        return acc;
    }, 0);

    return totalCost;
}

/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateLoginCredentials: () => (/* binding */ validateLoginCredentials)
/* harmony export */ });
// const { usersSampleData } = require('../src/data-sample/users-sample');

const validateLoginCredentials = (username, password) => {
    if (password !== 'overlook2021') {
        return false;
    }

    if (username.substring(0, 8) !== 'customer') {
        return false;
    }
    
    const customerID = Number(username.substring(8));
    if (isNaN(customerID)) {
        return false;
    }

    return customerID;
}

/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addRoomToBookings: () => (/* binding */ addRoomToBookings),
/* harmony export */   deleteRoomFromBookings: () => (/* binding */ deleteRoomFromBookings),
/* harmony export */   fetchBookings: () => (/* binding */ fetchBookings),
/* harmony export */   fetchRooms: () => (/* binding */ fetchRooms),
/* harmony export */   fetchUsers: () => (/* binding */ fetchUsers)
/* harmony export */ });
function fetchRooms() {
    return fetch('https://overlook-api-jmst.vercel.app/api/v1/rooms')
        .then(response => response.json())
        .then(data => data.rooms);
}

function fetchBookings() {
    return fetch('https://overlook-api-jmst.vercel.app/api/v1/bookings')
        .then(response => response.json())
        .then(data => data.bookings);
}

function fetchUsers() {
    return fetch('https://overlook-api-jmst.vercel.app/api/v1/customers')
        .then(response => response.json())
        .then(data => data.customers);
}

function addRoomToBookings(userId, roomNumber, date) {
    return fetch('https://overlook-api-jmst.vercel.app/api/v1/bookings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "userID": userId,
            "date": date,
            "roomNumber": roomNumber 
        }),
    })

        .then(response => response.json());
}

function deleteRoomFromBookings(bookingId) {
    return fetch(`https://overlook-api-jmst.vercel.app/api/v1/bookings/${bookingId}`, {
        method: 'DELETE',
    })
        .then(response => response.json());
}


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _images_overlooklogo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony import */ var _images_overlook_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _images_delete_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);
/* harmony import */ var _domUpdates_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23);
/* harmony import */ var _rooms_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24);
/* harmony import */ var _usersBookings_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27);
/* harmony import */ var _users_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(28);
/* harmony import */ var _fetchAPI_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29);
/**------------------------// Imports //----------------------------*/
/*--// webpack to use a CSS (SCSS) file //--*/


// An example of how you tell webpack to use an image (also need to link to it in the index.html)
/*---// Images //---*/




/*---// domUpdates //---*/


/*---// CORE Functions //---*/






/*---// fetchAPI //---*/


/**-----------------// Global Varibles //--------------------------*/
var loggedInUser = null;
var allBookings = [];
var allRooms = [];

/**--------------------// DOM Nodes //----------------------------*/
/*----// Buttons //----*/
/** Name and Logo */
const goToLandingPageButtons = document.querySelectorAll('.go-to-landing-page-button');
const goToUsersDashboardButtons = document.querySelectorAll('.go-to-user-dashboard-button');
/* Login */
const loginButton = document.querySelector('.login');
const signOutButton = document.querySelector('.sign-out');
const signInButton = document.getElementById('signInButton');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
/* Search */
const landingPageSearchButton = document.querySelector('.landing-page-search-button');
const userRoomSearchButton = document.querySelector('.user-room-search-button');
const showPastBookingsButton = document.querySelector('.show-past-bookings-button')

/*----// Filters //----*/
const landingPageFilterByDate = document.querySelector('.landing-page .filter-by-date');
const landingPageFilterByRoomType = document.querySelector('.landing-page .filter-by-room-type');

const userSearchFilterByDate = document.querySelector('.user-dashboard .filter-by-date');
const userSearchFilterByRoomType = document.querySelector('.user-dashboard .filter-by-room-type');

/**-------------------// Event Listeners //---------------------------*/
window.addEventListener('load', start);

goToLandingPageButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        start();
    });
});

goToUsersDashboardButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        setupUserDashboard();
    });
});

loginButton.addEventListener('click', _domUpdates_js__WEBPACK_IMPORTED_MODULE_4__.showLoginPage);
signOutButton.addEventListener('click', _domUpdates_js__WEBPACK_IMPORTED_MODULE_4__.showLandingPage);

showPastBookingsButton.addEventListener('click', (event) => {
    (0,_domUpdates_js__WEBPACK_IMPORTED_MODULE_4__.showUserDashboard)();
});

userRoomSearchButton.addEventListener('click', (event) => {
    updateUserRoomSearchResults();
});

landingPageSearchButton.addEventListener('click', (event) => {
    const landingPageFilterByDateValue = landingPageFilterByDate.value.replaceAll('-', '/').trim();
    const landingPageFilterByRoomTypeValue = landingPageFilterByRoomType.value.replaceAll('-', ' ').toLowerCase().trim();
    const roomsFilteredByDateAndType =
        (0,_rooms_js__WEBPACK_IMPORTED_MODULE_5__.filterRoomsByDateAndType)(landingPageFilterByDateValue, landingPageFilterByRoomTypeValue, allRooms, allBookings);

    (0,_domUpdates_js__WEBPACK_IMPORTED_MODULE_4__.setRoomsAvailabeOnDateHeader)(landingPageFilterByDate.value);
    (0,_domUpdates_js__WEBPACK_IMPORTED_MODULE_4__.showLandingPageRoomCards)(roomsFilteredByDateAndType);
});

signInButton.addEventListener('click', (event) => {
    const username = usernameInput.value;
    const password = passwordInput.value;
    const userID = (0,_users_js__WEBPACK_IMPORTED_MODULE_7__.validateLoginCredentials)(username, password);
    if (!userID) {
        alert('Please enter a vaild username and password.');
    }
    (0,_fetchAPI_js__WEBPACK_IMPORTED_MODULE_8__.fetchUsers)()
        .then(customers => {
            loggedInUser = customers.find(user => userID === user.id);
            if (!loggedInUser) {
                alert('Please enter a vaild username and password.');
            } else {
                setupUserDashboard();
            }
        })

        .catch(err => {
            alert('There was a error, please try again later.');
        });
});

function addEventListenersToDeleteButtons() {
    const deleteButtons = document.querySelectorAll('.delete-room-booking');
    deleteButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const bookingId = event.target.getAttribute('booking-id');
            (0,_fetchAPI_js__WEBPACK_IMPORTED_MODULE_8__.deleteRoomFromBookings)(bookingId)
                .then(json => {
                    console.log(json.message);
                })

                .then(() => (0,_fetchAPI_js__WEBPACK_IMPORTED_MODULE_8__.fetchBookings)())
                .then(bookings => {
                    allBookings === bookings;
                })

                .then(() => {
                    allBookings = allBookings.filter(booking => booking.id !== bookingId);
                    (0,_domUpdates_js__WEBPACK_IMPORTED_MODULE_4__.removeBookingCard)(bookingId);
                    setupUserDashboard();
                })

                .catch(err => {
                    alert('There was an error removing your booking, please try again Later.');
                });
        });
    });
}

function addEventListenersToBookThisRoomButton() {
    const bookThisRoomButton = document.querySelectorAll('.book-room-button');
    bookThisRoomButton.forEach(button => {
        button.addEventListener('click', (event) => {
            const roomNumber = Number(event.target.getAttribute('room-number'));
            const date = userSearchFilterByDate.value.replaceAll('-', '/').trim();
            const userId = loggedInUser.id;

            (0,_fetchAPI_js__WEBPACK_IMPORTED_MODULE_8__.addRoomToBookings)(userId, roomNumber, date)
                .then(json => {
                    allBookings.push(json.newBooking);
                    updateUsersFutureBookings();
                    updateUserRoomSearchResults();
                    console.log(json.message);
                })

                .catch(err => {
                    alert('There was an error adding your booking, please try again Later.');
                });
        });
    });
}

/**------------------------// Functions //------------------------------*/

function start() {
    Promise.all([
        (0,_fetchAPI_js__WEBPACK_IMPORTED_MODULE_8__.fetchRooms)(),
        (0,_fetchAPI_js__WEBPACK_IMPORTED_MODULE_8__.fetchBookings)()]
    )
        .then(data => updateGlobalVariables(...data))
        .catch(err => { alert('There was an error loading this website, please try again later.') })

    ;(0,_domUpdates_js__WEBPACK_IMPORTED_MODULE_4__.showLandingPage)();
}

function updateGlobalVariables(rooms, bookings) {
    allRooms = rooms
    allBookings = bookings
    ;(0,_domUpdates_js__WEBPACK_IMPORTED_MODULE_4__.showLandingPageRoomCards)(allRooms);
}

function setupUserDashboard() {
    (0,_domUpdates_js__WEBPACK_IMPORTED_MODULE_4__.updateLoggedInUsersNameHeader)(loggedInUser.name);
    const pastAndFutureBookings = (0,_usersBookings_js__WEBPACK_IMPORTED_MODULE_6__.getUsersPastAndFutureBookings)((0,_usersBookings_js__WEBPACK_IMPORTED_MODULE_6__.getUsersBookings)(loggedInUser.id, allBookings));
    (0,_domUpdates_js__WEBPACK_IMPORTED_MODULE_4__.displayUsersPastAndFutureBookings)(pastAndFutureBookings, allRooms);
    (0,_domUpdates_js__WEBPACK_IMPORTED_MODULE_4__.showUsersPastBookingsTotalCost)((0,_usersBookings_js__WEBPACK_IMPORTED_MODULE_6__.getTotalCost)(pastAndFutureBookings.past, allRooms));
    (0,_domUpdates_js__WEBPACK_IMPORTED_MODULE_4__.showUsersFutureBookingsTotalCost)((0,_usersBookings_js__WEBPACK_IMPORTED_MODULE_6__.getTotalCost)(pastAndFutureBookings.upcoming, allRooms));
    addEventListenersToDeleteButtons();
    (0,_domUpdates_js__WEBPACK_IMPORTED_MODULE_4__.showUserDashboard)();
}

function updateUsersFutureBookings() {
    const pastAndFutureBookings = (0,_usersBookings_js__WEBPACK_IMPORTED_MODULE_6__.getUsersPastAndFutureBookings)((0,_usersBookings_js__WEBPACK_IMPORTED_MODULE_6__.getUsersBookings)(loggedInUser.id, allBookings));
    (0,_domUpdates_js__WEBPACK_IMPORTED_MODULE_4__.displayUsersPastAndFutureBookings)(pastAndFutureBookings, allRooms);
    (0,_domUpdates_js__WEBPACK_IMPORTED_MODULE_4__.showUsersFutureBookingsTotalCost)((0,_usersBookings_js__WEBPACK_IMPORTED_MODULE_6__.getTotalCost)(pastAndFutureBookings.upcoming, allRooms));
    addEventListenersToDeleteButtons();
    (0,_domUpdates_js__WEBPACK_IMPORTED_MODULE_4__.showUserSearchResultsPage)();
}

function updateUserRoomSearchResults() {
    const userSearchFilterByDateValue = userSearchFilterByDate.value.replaceAll('-', '/').trim();
    const userSearchFilterByRoomTypeValue = userSearchFilterByRoomType.value.replaceAll('-', ' ').toLowerCase().trim();
    const roomsFilteredByDateAndType =
        (0,_rooms_js__WEBPACK_IMPORTED_MODULE_5__.filterRoomsByDateAndType)(userSearchFilterByDateValue, userSearchFilterByRoomTypeValue, allRooms, allBookings);

    (0,_domUpdates_js__WEBPACK_IMPORTED_MODULE_4__.setRoomsAvailabeOnDateUserSearchHeader)(userSearchFilterByDate.value);
    (0,_domUpdates_js__WEBPACK_IMPORTED_MODULE_4__.showUsersRoomSearchResults)(roomsFilteredByDateAndType);
    addEventListenersToBookThisRoomButton();
    (0,_domUpdates_js__WEBPACK_IMPORTED_MODULE_4__.showUserSearchResultsPage)();
}
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map