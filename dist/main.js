/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/elf.js":
/*!********************!*\
  !*** ./src/elf.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ \"./src/settings.js\");\n\n\nclass Elf {\n  constructor(game){\n    this.width = _settings__WEBPACK_IMPORTED_MODULE_0__[\"ELF_WIDTH\"];\n    this.height = _settings__WEBPACK_IMPORTED_MODULE_0__[\"ELF_HEIGHT\"];\n    this.game = game;\n    this.game.ctx = game.ctx;\n    this.elf = new Image();\n    this.elf.onload = () => {\n      this.drawElf();\n    }\n    this.elf.src = './dist/assets/images/elf/elf_03_idle.png';\n  }\n\n  drawElf() {\n    // const sheetWidth = 20000;\n    // const sheetHeight = 1050;\n    // const srcX;\n    // const srcY;\n    // const imgBufferLeft = 730;\n    // const imgBufferTop = 225;\n    // const imgBufferBottom = 225;\n    // const imgBufferBetween = 1550;\n    // const singleImgWidth = 450;\n    // const singleImgHeight = 600;\n    // const frameCount = 10;\n    // const width = sheetWidth / frameCount;\n  \n    this.game.ctx.drawImage(this.elf,\n      //source position\n      730, 225, 450, 635,\n      //destination position\n      _settings__WEBPACK_IMPORTED_MODULE_0__[\"ELF_POS_X\"], _settings__WEBPACK_IMPORTED_MODULE_0__[\"ELF_POS_Y\"], _settings__WEBPACK_IMPORTED_MODULE_0__[\"ELF_WIDTH\"], _settings__WEBPACK_IMPORTED_MODULE_0__[\"ELF_HEIGHT\"]);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Elf);\n\n//# sourceURL=webpack:///./src/elf.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _elf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elf */ \"./src/elf.js\");\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings */ \"./src/settings.js\");\n\n\nclass Game {\n  constructor(canvas, ctx){\n    this.canvas = canvas;\n    this.ctx = ctx;\n    this.elf = new _elf__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this);\n    this.monolith = new Image();\n    this.monolith.onload = () => {\n      this.drawMonolith();\n    }\n    this.monolith.src = './dist/assets/images/monolith/monolith.png';\n    this.draw();\n  };\n  \n  drawMonolith() {\n    this.ctx.drawImage(this.monolith, _settings__WEBPACK_IMPORTED_MODULE_1__[\"MON_POS_X\"], _settings__WEBPACK_IMPORTED_MODULE_1__[\"MON_POS_Y\"], _settings__WEBPACK_IMPORTED_MODULE_1__[\"MON_WIDTH\"], _settings__WEBPACK_IMPORTED_MODULE_1__[\"MON_HEIGHT\"]);\n  };\n\n  // draw everything on canvas\n  draw() {\n    this.elf.drawElf();\n  }\n  \n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings */ \"./src/settings.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", ()  => {\n  const canvas = document.getElementById(\"monolithcanvas\");\n  canvas.width = _settings__WEBPACK_IMPORTED_MODULE_1__[\"GAME_WIDTH\"];\n  canvas.height = _settings__WEBPACK_IMPORTED_MODULE_1__[\"GAME_HEIGHT\"];\n  const ctx = canvas.getContext(\"2d\");\n  const game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, ctx);\n  //const gameLoop = new GameLoop(game, canvas);\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/settings.js":
/*!*************************!*\
  !*** ./src/settings.js ***!
  \*************************/
/*! exports provided: ELF_WIDTH, ELF_HEIGHT, ELF_POS_X, ELF_POS_Y, GAME_WIDTH, GAME_HEIGHT, gameControls, MON_POS_X, MON_POS_Y, MON_WIDTH, MON_HEIGHT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ELF_WIDTH\", function() { return ELF_WIDTH; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ELF_HEIGHT\", function() { return ELF_HEIGHT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ELF_POS_X\", function() { return ELF_POS_X; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ELF_POS_Y\", function() { return ELF_POS_Y; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GAME_WIDTH\", function() { return GAME_WIDTH; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GAME_HEIGHT\", function() { return GAME_HEIGHT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gameControls\", function() { return gameControls; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MON_POS_X\", function() { return MON_POS_X; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MON_POS_Y\", function() { return MON_POS_Y; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MON_WIDTH\", function() { return MON_WIDTH; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MON_HEIGHT\", function() { return MON_HEIGHT; });\n//blast settings\n\n\n//elf settings\n\nconst ELF_WIDTH = 80;\nconst ELF_HEIGHT = 110;\nconst ELF_POS_X = 425;\nconst ELF_POS_Y = 125; \n\n//game settings\n\nconst GAME_WIDTH = 1000;\nconst GAME_HEIGHT = 600;\nconst gameControls = () => {\n\n}\n\n//monolith settings\n\nconst MON_POS_X = 380;\nconst MON_POS_Y = 190;\nconst MON_WIDTH = 200;\nconst MON_HEIGHT = 350;\n\n//troll settings\n\n\n\n//# sourceURL=webpack:///./src/settings.js?");

/***/ })

/******/ });