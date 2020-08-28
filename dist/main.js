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

/***/ "./src/blast.js":
/*!**********************!*\
  !*** ./src/blast.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Blast {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.blast = new Image();\n    this.blast.onload = () => {\n      this.drawBlast();\n    }\n    this.blast.src = './dist/assets/images/blast/blast.png';\n  }\n\n  chargeBlast() {\n\n  };\n\n  drawBlast() {\n    this.ctx.drawImage(this.blast,\n      //source position\n      0,0,67,67,\n      //destination position\n      473, 140, 67, 67\n      )\n  };\n\n  launchEnergyBlast() {\n\n  };\n\n  \n  updateEnergyBlast() {\n    \n  };\n  \n  //animate/traversal\n  \n  \n  //blast settings\n  \n  energyBlastPower() {\n\n  };\n  \n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blast);\n\n//# sourceURL=webpack:///./src/blast.js?");

/***/ }),

/***/ "./src/elf.js":
/*!********************!*\
  !*** ./src/elf.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ \"./src/settings.js\");\n\n\nconst ELF_WIDTH = 300;//80\nconst ELF_HEIGHT = 200;//110\nconst ELF_POS_X = 425;//425;\nconst ELF_POS_Y = 125;//125; \nclass Elf {\n  constructor(ctx){\n    this.ctx = ctx;\n    this.elf =  new Image();\n    this.elf.onload = () => { this.drawElfFrame() };\n    this.elf.src = \"./dist/assets/images/elf/elf_03_idle.png\";\n    this.animate();\n  }\n\n  drawElfFrame(frameIdx) {\n    this.ctx.drawImage(this.elf,\n    //source position\n    frameIdx, 0, this.elf.width/6, this.elf.height,\n    //destination position\n    ELF_POS_X, ELF_POS_Y, ELF_WIDTH, ELF_HEIGHT);\n  } \n\n  animate() {\n    this.ctx.clearRect(0,0,_settings__WEBPACK_IMPORTED_MODULE_0__[\"GAME_WIDTH\"],_settings__WEBPACK_IMPORTED_MODULE_0__[\"GAME_HEIGHT\"]);\n    // let currentFrameIdx = 0;\n    // let frameCycle = [0, 2000, 4000, 6000, 8000, 10000, 12000];\n    this.drawElfFrame(frameCycle[currentFrameIdx]);\n    // currentFrameIdx++;\n    // if(currentFrameIdx >= frameCycle.length) { \n    //   currentFrameIdx = 0;\n    // }\n  }\n  \n  //this won't work its basically the same thing\n  step() {\n    let currentFrameIdx = 0;\n    let frameCycle = [0, 2000, 4000, 6000, 8000, 10000, 12000];\n    currentFrameIdx++;\n    if(currentFrameIdx >= frameCycle.length) {\n      currentFrameIdx = 0;\n    }\n    frameStep = frameCycle[currentFrameIdx];\n    return frameStep;\n  }\n  \n\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Elf);\n\n//# sourceURL=webpack:///./src/elf.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ \"./src/settings.js\");\n/* harmony import */ var _elf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elf */ \"./src/elf.js\");\n/* harmony import */ var _blast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blast */ \"./src/blast.js\");\n/* harmony import */ var _trolls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trolls */ \"./src/trolls.js\");\n\n\n\n\n\nclass Game {\n  constructor(ctx) {\n    this.ctx = ctx;\n    // this.blast = new Blast(ctx);\n    this.elf = new _elf__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx);\n    this.troll = new _trolls__WEBPACK_IMPORTED_MODULE_3__[\"default\"](ctx);\n    this.monolith = new Image();\n    this.monolith.onload = () => { this.drawMonolith() };\n    this.monolith.src = './dist/assets/images/monolith/monolith.png';\n    this.startGame();\n  };\n  \n  drawMonolith(){\n    this.ctx.drawImage(this.monolith, _settings__WEBPACK_IMPORTED_MODULE_0__[\"MON_POS_X\"], _settings__WEBPACK_IMPORTED_MODULE_0__[\"MON_POS_Y\"], _settings__WEBPACK_IMPORTED_MODULE_0__[\"MON_WIDTH\"], _settings__WEBPACK_IMPORTED_MODULE_0__[\"MON_HEIGHT\"]);\n  }\n\n  \n  startGame() {\n    this.running = true;\n    this.animate();\n  };\n\n\n  animate() {\n    this.elf.animate();\n    // this.troll.animate();\n    this.drawMonolith();\n    window.requestAnimationFrame(this.animate.bind(this));\n  };\n\n\n  addTrolls() {\n\n  }\n\n  processEnergyBlast() {\n\n  }\n  \n  createEnergyBlast() {\n\n  }\n\n  chargeEnergyBlast() {\n\n  }\n\n  \n  checkEnergyBlastCollision() {\n    \n  }\n  \n  checkElfCollision() {\n    \n  }\n\n  stopChargingEnergyBlast() {\n\n  }\n\n  setupGameControls() {\n\n  }\n\n  toggleSound() {\n\n  }\n\n  toggleDifficulty() {\n\n  }\n\n  setDifficulty() {\n    //set troll realease interval\n    //set troll health\n    //set troll speed\n    //set energy blast power\n  }\n\n  updateScore() {\n\n  }\n\n  updateNumKills() {\n\n  }\n\n\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings */ \"./src/settings.js\");\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", ()  => {\n  const canvas = document.getElementById(\"monolithcanvas\");\n  canvas.width = _settings__WEBPACK_IMPORTED_MODULE_1__[\"GAME_WIDTH\"];\n  canvas.height = _settings__WEBPACK_IMPORTED_MODULE_1__[\"GAME_HEIGHT\"];\n  const ctx = canvas.getContext(\"2d\");\n  const game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/settings.js":
/*!*************************!*\
  !*** ./src/settings.js ***!
  \*************************/
/*! exports provided: GAME_WIDTH, GAME_HEIGHT, gameControls, MON_POS_X, MON_POS_Y, MON_WIDTH, MON_HEIGHT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GAME_WIDTH\", function() { return GAME_WIDTH; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GAME_HEIGHT\", function() { return GAME_HEIGHT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gameControls\", function() { return gameControls; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MON_POS_X\", function() { return MON_POS_X; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MON_POS_Y\", function() { return MON_POS_Y; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MON_WIDTH\", function() { return MON_WIDTH; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MON_HEIGHT\", function() { return MON_HEIGHT; });\n//blast settings\n\n\n//elf settings\n\n// export const ELF_WIDTH = 230;//80\n// export const ELF_HEIGHT = 230;//110\n// export const ELF_POS_X = 425;\n// export const ELF_POS_Y = 125; \n\n//game settings\n\nconst GAME_WIDTH = 1000;\nconst GAME_HEIGHT = 600;\n\nconst gameControls = () => {\n  document.addEventListener('keydown', (event) => {\n    switch(event.keyCode) {\n      case 37:\n        break;\n      case 38:\n        break;\n      case 39:\n        break;\n      case 40:\n        break;\n      default:\n        break;\n    }\n  })\n\n}\n\n\n\n//monolith settings\n\nconst MON_POS_X = 380;\nconst MON_POS_Y = 190;\nconst MON_WIDTH = 200;\nconst MON_HEIGHT = 350;\n\n\n//# sourceURL=webpack:///./src/settings.js?");

/***/ }),

/***/ "./src/trolls.js":
/*!***********************!*\
  !*** ./src/trolls.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ \"./src/settings.js\");\n\n\nconst TROLL_WIDTH = 230;\nconst TROLL_HEIGHT = 200;\n\nclass Troll {\n  constructor(ctx) {\n    this.ctx = ctx;\n    this.troll = new Image();\n    this.troll.onload = () => {\n      this.drawTrollFrame();\n    }\n    this.troll.src = \"./dis/assets/images/trolls/troll_01_jump.png\";\n  }\n\n  //this could be a problem because in the game file you are calling\n  //animate over and over so each time you are defining these variables\n  //so your frame is always going to be on the first frame of the \n  //sprite sheet\n\n  animate() {\n    this.ctx.clearRect(0,0,_settings__WEBPACK_IMPORTED_MODULE_0__[\"GAME_WIDTH\"],_settings__WEBPACK_IMPORTED_MODULE_0__[\"GAME_HEIGHT\"]);\n    let currentFrameIdx = 0;\n    let frameCycle = [0, 1600, 3200, 4800, 6400, 8000, 9600];\n    this.drawTrollFrame(frameCycle[currentFrameIdx]);\n    currentFrameIdx++;\n    if(currentFrameIdx >= frameCycle.length) {\n      currentFrameIdx = 0;\n    }\n  }\n\n  //sheetW = 9600;\n  //sheetH = 1000;\n  //each frame is 1600 * 1000\n\n  drawTrollFrame(frameIdx) {\n    console.log(\"inside draw troll\");\n    const frameW = this.troll.width / 6;\n    const frameH = this.troll.height;\n    \n    this.ctx.drawImage(this.troll,\n      //source position\n      frameIdx, 0, frameW, frameH,\n      //destination position\n      0, 100, TROLL_WIDTH, TROLL_HEIGHT);\n  }\n\n    //second troll image\n    // this.game.ctx.drawImage(this.troll,\n    //   //source position\n    //   frameW, 0, this.troll.width / 6, this.troll.height,\n    //   //destination position\n    //   50, 320, TROLL_WIDTH, TROLL_HEIGHT\n    // )\n    \n    // //third troll\n    // this.game.ctx.drawImage(this.troll,\n    //   //source position\n    //   frameW * 2, 0, this.troll.width / 6, this.troll.height,\n    //   //destination position\n    //   100, 320, TROLL_WIDTH, TROLL_HEIGHT\n    // )\n\n    // //fourth troll\n    // this.game.ctx.drawImage(this.troll,\n    //   //source position\n    //   frameW * 3, 0, this.troll.width / 6, this.troll.height,\n    //   //destination position\n    //   150, 320, TROLL_WIDTH, TROLL_HEIGHT\n    // )\n\n    // //fifth troll\n    // this.game.ctx.drawImage(this.troll,\n    //   //source position\n    //   frameW * 4, 0, this.troll.width / 6, this.troll.height,\n    //   //destination position\n    //   200, 320, TROLL_WIDTH, TROLL_HEIGHT\n    // )\n\n    // //sixth troll\n    // this.game.ctx.drawImage(this.troll,\n    //   //source position\n    //   frameW * 5, 0, this.troll.width / 6, this.troll.height,\n    //   //destination position\n    //   250, 320, TROLL_WIDTH, TROLL_HEIGHT\n    // )\n\n\n  checkElfCollision() {\n\n  }\n\n  checkEnergyBlastCollision() {\n\n  }\n\n  \n  processDamage() {\n    \n  }\n\n  //troll settings\n  \n  trollHealth() {\n\n  }\n\n  trollSpeed() {\n\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Troll);\n\n//# sourceURL=webpack:///./src/trolls.js?");

/***/ })

/******/ });