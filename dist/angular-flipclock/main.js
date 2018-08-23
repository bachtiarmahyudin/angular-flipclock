(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<app-counter></app-counter>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-flipclock';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _counter_counter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./counter/counter.component */ "./src/app/counter/counter.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _counter_counter_component__WEBPACK_IMPORTED_MODULE_3__["CounterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/counter/counter.component.css":
/*!***********************************************!*\
  !*** ./src/app/counter/counter.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Get the bourbon mixin from http://bourbon.io */\r\n/* Reset */\r\n.flip-clock-wrapper * {\r\n  -ms-box-sizing: border-box;\r\n  -o-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n}\r\n.flip-clock-wrapper a {\r\n  cursor: pointer;\r\n  text-decoration: none;\r\n  color: #ccc;\r\n}\r\n.flip-clock-wrapper a:hover {\r\n  color: #fff;\r\n}\r\n.flip-clock-wrapper ul {\r\n  list-style: none;\r\n}\r\n.flip-clock-wrapper.clearfix:before,\r\n.flip-clock-wrapper.clearfix:after {\r\n  content: \" \";\r\n  display: table;\r\n}\r\n.flip-clock-wrapper.clearfix:after {\r\n  clear: both;\r\n}\r\n.flip-clock-wrapper.clearfix {\r\n  *zoom: 1;\r\n}\r\n/* Main */\r\n.flip-clock-wrapper {\r\n  font: normal 11px \"Helvetica Neue\", Helvetica, sans-serif;\r\n  -webkit-user-select: none;\r\n}\r\n.flip-clock-meridium {\r\n  background: none !important;\r\n  box-shadow: 0 0 0 !important;\r\n  font-size: 36px !important;\r\n}\r\n.flip-clock-meridium a {\r\n  color: #313333;\r\n}\r\n.flip-clock-wrapper {\r\n  text-align: center;\r\n  position: relative;\r\n  width: 100%;\r\n  margin: 1em;\r\n}\r\n.flip-clock-wrapper:before,\r\n.flip-clock-wrapper:after {\r\n  content: \" \"; /* 1 */\r\n  display: table; /* 2 */\r\n}\r\n.flip-clock-wrapper:after {\r\n  clear: both;\r\n}\r\n/* Skeleton */\r\n.flip-clock-wrapper ul {\r\n  position: relative;\r\n  float: left;\r\n  margin: 5px;\r\n  width: 60px;\r\n  height: 90px;\r\n  font-size: 80px;\r\n  font-weight: bold;\r\n  line-height: 87px;\r\n  border-radius: 6px;\r\n  background: #000;\r\n}\r\n.flip-clock-wrapper ul li {\r\n  z-index: 1;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  line-height: 87px;\r\n  text-decoration: none !important;\r\n}\r\n.flip-clock-wrapper ul li:first-child {\r\n  z-index: 2;\r\n}\r\n.flip-clock-wrapper ul li a {\r\n  display: block;\r\n  height: 100%;\r\n  -webkit-perspective: 200px;\r\n  perspective: 200px;\r\n  margin: 0 !important;\r\n  overflow: visible !important;\r\n  cursor: default !important;\r\n}\r\n.flip-clock-wrapper ul li a div {\r\n  z-index: 1;\r\n  position: absolute;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 50%;\r\n  font-size: 80px;\r\n  overflow: hidden;\r\n  outline: 1px solid transparent;\r\n}\r\n.flip-clock-wrapper ul li a div .shadow {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 2;\r\n}\r\n.flip-clock-wrapper ul li a div.up {\r\n  -webkit-transform-origin: 50% 100%;\r\n  transform-origin: 50% 100%;\r\n  top: 0;\r\n}\r\n.flip-clock-wrapper ul li a div.up:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 44px;\r\n  left: 0;\r\n  z-index: 5;\r\n  width: 100%;\r\n  height: 3px;\r\n  background-color: #000;\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n}\r\n.flip-clock-wrapper ul li a div.down {\r\n  -webkit-transform-origin: 50% 0;\r\n  transform-origin: 50% 0;\r\n  bottom: 0;\r\n  border-bottom-left-radius: 6px;\r\n  border-bottom-right-radius: 6px;\r\n}\r\n.flip-clock-wrapper ul li a div div.inn {\r\n  position: absolute;\r\n  left: 0;\r\n  z-index: 1;\r\n  width: 100%;\r\n  height: 200%;\r\n  color: #ccc;\r\n  text-shadow: 0 1px 2px #000;\r\n  text-align: center;\r\n  background-color: #333;\r\n  border-radius: 6px;\r\n  font-size: 70px;\r\n}\r\n.flip-clock-wrapper ul li a div.up div.inn {\r\n  top: 0;\r\n}\r\n.flip-clock-wrapper ul li a div.down div.inn {\r\n  bottom: 0;\r\n}\r\n/* PLAY */\r\n.flip-clock-wrapper ul.play li.flip-clock-before {\r\n  z-index: 3;\r\n}\r\n.flip-clock-wrapper .flip {\r\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.7);\r\n}\r\n.flip-clock-wrapper ul.play li.flip-clock-active {\r\n  -webkit-animation: asd 0.5s 0.5s linear both;\r\n  animation: asd 0.5s 0.5s linear both;\r\n  z-index: 5;\r\n}\r\n.flip-clock-divider {\r\n  float: left;\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 20px;\r\n  height: 100px;\r\n}\r\n.flip-clock-divider:first-child {\r\n  width: 0;\r\n}\r\n.flip-clock-dot {\r\n  display: block;\r\n  background: #323434;\r\n  width: 10px;\r\n  height: 10px;\r\n  position: absolute;\r\n  border-radius: 50%;\r\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);\r\n  left: 5px;\r\n}\r\n.flip-clock-divider .flip-clock-label {\r\n  position: absolute;\r\n  top: -1.5em;\r\n  right: -86px;\r\n  color: black;\r\n  text-shadow: none;\r\n}\r\n.flip-clock-divider.minutes .flip-clock-label {\r\n  right: -88px;\r\n}\r\n.flip-clock-divider.seconds .flip-clock-label {\r\n  right: -91px;\r\n}\r\n.flip-clock-dot.top {\r\n  top: 30px;\r\n}\r\n.flip-clock-dot.bottom {\r\n  bottom: 30px;\r\n}\r\n@-webkit-keyframes asd {\r\n  0% {\r\n    z-index: 2;\r\n  }\r\n\r\n  20% {\r\n    z-index: 4;\r\n  }\r\n\r\n  100% {\r\n    z-index: 4;\r\n  }\r\n}\r\n@keyframes asd {\r\n  0% {\r\n    z-index: 2;\r\n  }\r\n\r\n  20% {\r\n    z-index: 4;\r\n  }\r\n\r\n  100% {\r\n    z-index: 4;\r\n  }\r\n}\r\n.flip-clock-wrapper ul.play li.flip-clock-active .down {\r\n  z-index: 2;\r\n  -webkit-animation: turn 0.5s 0.5s linear both;\r\n  animation: turn 0.5s 0.5s linear both;\r\n}\r\n@-webkit-keyframes turn {\r\n  0% {\r\n    -webkit-transform: rotateX(90deg);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: rotateX(0deg);\r\n  }\r\n}\r\n@keyframes turn {\r\n  0% {\r\n    -webkit-transform: rotateX(90deg);\r\n            transform: rotateX(90deg);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: rotateX(0deg);\r\n            transform: rotateX(0deg);\r\n  }\r\n}\r\n.flip-clock-wrapper ul.play li.flip-clock-before .up {\r\n  z-index: 2;\r\n  -webkit-animation: turn2 0.5s linear both;\r\n  animation: turn2 0.5s linear both;\r\n}\r\n@-webkit-keyframes turn2 {\r\n  0% {\r\n    -webkit-transform: rotateX(0deg);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: rotateX(-90deg);\r\n  }\r\n}\r\n@keyframes turn2 {\r\n  0% {\r\n    -webkit-transform: rotateX(0deg);\r\n            transform: rotateX(0deg);\r\n  }\r\n\r\n  100% {\r\n    -webkit-transform: rotateX(-90deg);\r\n            transform: rotateX(-90deg);\r\n  }\r\n}\r\n.flip-clock-wrapper ul li.flip-clock-active {\r\n  z-index: 3;\r\n}\r\n/* SHADOW */\r\n.flip-clock-wrapper ul.play li.flip-clock-before .up .shadow {\r\n  background: -moz-linear-gradient(top, rgba(0, 0, 0, 0.1) 0%, black 100%);\r\n  background: -webkit-gradient(\r\n    linear,\r\n    left top,\r\n    left bottom,\r\n    color-stop(0%, rgba(0, 0, 0, 0.1)),\r\n    color-stop(100%, black)\r\n  );\r\n  background: linear, top, rgba(0, 0, 0, 0.1) 0%, black 100%;\r\n  background: -ms-linear-gradient(top, rgba(0, 0, 0, 0.1) 0%, black 100%);\r\n  background: linear, to bottom, rgba(0, 0, 0, 0.1) 0%, black 100%;\r\n  -webkit-animation: show 0.5s linear both;\r\n  animation: show 0.5s linear both;\r\n}\r\n.flip-clock-wrapper ul.play li.flip-clock-active .up .shadow {\r\n  background: -moz-linear-gradient(top, rgba(0, 0, 0, 0.1) 0%, black 100%);\r\n  background: -webkit-gradient(\r\n    linear,\r\n    left top,\r\n    left bottom,\r\n    color-stop(0%, rgba(0, 0, 0, 0.1)),\r\n    color-stop(100%, black)\r\n  );\r\n  background: linear, top, rgba(0, 0, 0, 0.1) 0%, black 100%;\r\n  background: -ms-linear-gradient(top, rgba(0, 0, 0, 0.1) 0%, black 100%);\r\n  background: linear, to bottom, rgba(0, 0, 0, 0.1) 0%, black 100%;\r\n  -webkit-animation: hide 0.5s 0.3s linear both;\r\n  animation: hide 0.5s 0.3s linear both;\r\n}\r\n/*DOWN*/\r\n.flip-clock-wrapper ul.play li.flip-clock-before .down .shadow {\r\n  background: -moz-linear-gradient(top, black 0%, rgba(0, 0, 0, 0.1) 100%);\r\n  background: -webkit-gradient(\r\n    linear,\r\n    left top,\r\n    left bottom,\r\n    color-stop(0%, black),\r\n    color-stop(100%, rgba(0, 0, 0, 0.1))\r\n  );\r\n  background: linear, top, black 0%, rgba(0, 0, 0, 0.1) 100%;\r\n  background: -ms-linear-gradient(top, black 0%, rgba(0, 0, 0, 0.1) 100%);\r\n  background: linear, to bottom, black 0%, rgba(0, 0, 0, 0.1) 100%;\r\n  -webkit-animation: show 0.5s linear both;\r\n  animation: show 0.5s linear both;\r\n}\r\n.flip-clock-wrapper ul.play li.flip-clock-active .down .shadow {\r\n  background: -moz-linear-gradient(top, black 0%, rgba(0, 0, 0, 0.1) 100%);\r\n  background: -webkit-gradient(\r\n    linear,\r\n    left top,\r\n    left bottom,\r\n    color-stop(0%, black),\r\n    color-stop(100%, rgba(0, 0, 0, 0.1))\r\n  );\r\n  background: linear, top, black 0%, rgba(0, 0, 0, 0.1) 100%;\r\n  background: -ms-linear-gradient(top, black 0%, rgba(0, 0, 0, 0.1) 100%);\r\n  background: linear, to bottom, black 0%, rgba(0, 0, 0, 0.1) 100%;\r\n  -webkit-animation: hide 0.5s 0.3s linear both;\r\n  animation: hide 0.5s 0.2s linear both;\r\n}\r\n@-webkit-keyframes show {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes show {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n@-webkit-keyframes hide {\r\n  0% {\r\n    opacity: 1;\r\n  }\r\n\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}\r\n@keyframes hide {\r\n  0% {\r\n    opacity: 1;\r\n  }\r\n\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/counter/counter.component.html":
/*!************************************************!*\
  !*** ./src/app/counter/counter.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"clock twoDayDigits flip-clock-wrapper\" style=\"margin:2em;\">\n  <span class=\"flip-clock-divider hours\">\n    <span class=\"flip-clock-label\">Hours</span>\n    <span class=\"flip-clock-dot top\"></span>\n    <span class=\"flip-clock-dot bottom\"></span>\n  </span>\n  <ul [ngClass]=\"{'play': hoursPlay1}\" class=\"flip\">\n    <li class=\"flip-clock-before\">\n      <a href=\"#\">\n        <div class=\"up\">\n          <div class=\"shadow\"></div>\n          <div class=\"inn\">{{hourssBefore1}}</div>\n        </div>\n        <div class=\"down\">\n          <div class=\"shadow\"></div>\n          <div class=\"inn\">{{hourssBefore1}}</div>\n        </div>\n      </a>\n    </li>\n    <li class=\"flip-clock-active\">\n      <a href=\"#\">\n        <div class=\"up\">\n          <div class=\"shadow\"></div>\n          <div class=\"inn\">{{hoursActive1}}</div>\n        </div>\n        <div class=\"down\">\n          <div class=\"shadow\"></div>\n          <div class=\"inn\">{{hoursActive1}}</div>\n        </div>\n      </a>\n    </li>\n  </ul>\n  <ul [ngClass]=\"{'play': hoursPlay2}\" class=\"flip\">\n    <li class=\"flip-clock-before\">\n      <a href=\"#\">\n        <div class=\"up\">\n          <div class=\"shadow\"></div>\n          <div class=\"inn\">{{hoursBefore2}}</div>\n        </div>\n        <div class=\"down\">\n          <div class=\"shadow\"></div>\n          <div class=\"inn\">{{hoursBefore2}}</div>\n        </div>\n      </a>\n    </li>\n    <li class=\"flip-clock-active\">\n      <a href=\"#\">\n        <div class=\"up\">\n          <div class=\"shadow\"></div>\n          <div class=\"inn\">{{hoursActive2}}</div>\n        </div>\n        <div class=\"down\">\n          <div class=\"shadow\"></div>\n          <div class=\"inn\">{{hoursActive2}}</div>\n        </div>\n      </a>\n    </li>\n  </ul>\n  <span class=\"flip-clock-divider minutes\">\n    <span class=\"flip-clock-label\">Minutes</span>\n    <span class=\"flip-clock-dot top\"></span>\n    <span class=\"flip-clock-dot bottom\"></span>\n  </span>\n  <ul [ngClass]=\"{'play': minutesPlay1}\" class=\"flip\">\n    <li class=\"flip-clock-before\">\n      <a href=\"#\">\n        <div class=\"up\">\n          <div class=\"shadow\"></div>\n          <div class=\"inn\">{{minutesBefore1}}</div>\n        </div>\n        <div class=\"down\">\n          <div class=\"shadow\"></div>\n          <div class=\"inn\">{{minutesBefore1}}</div>\n        </div>\n      </a>\n    </li>\n    <li class=\"flip-clock-active\">\n      <a href=\"#\">\n        <div class=\"up\">\n          <div class=\"shadow\"></div>\n          <div class=\"inn\">{{minutesActive1}}</div>\n        </div>\n        <div class=\"down\">\n          <div class=\"shadow\"></div>\n          <div class=\"inn\">{{minutesActive1}}</div>\n        </div>\n      </a>\n    </li>\n  </ul>\n  <ul [ngClass]=\"{'play': minutesPlay2}\" class=\"flip\">\n    <li class=\"flip-clock-before\">\n      <a href=\"#\">\n        <div class=\"up\">\n          <div class=\"shadow\"></div>\n          <div class=\"inn\">{{minutesBefore2}}</div>\n        </div>\n        <div class=\"down\">\n          <div class=\"shadow\"></div>\n          <div class=\"inn\">{{minutesBefore2}}</div>\n        </div>\n      </a>\n    </li>\n    <li class=\"flip-clock-active\">\n      <a href=\"#\">\n        <div class=\"up\">\n          <div class=\"shadow\"></div>\n          <div class=\"inn\">{{minutesActive2}}</div>\n        </div>\n        <div class=\"down\">\n          <div class=\"shadow\"></div>\n          <div class=\"inn\">{{minutesActive2}}</div>\n        </div>\n      </a>\n    </li>\n  </ul>\n  <span class=\"flip-clock-divider seconds\">\n    <span class=\"flip-clock-label\">Seconds</span>\n    <span class=\"flip-clock-dot top\"></span>\n    <span class=\"flip-clock-dot bottom\"></span>\n  </span>\n  <ul [ngClass]=\"{'play': secondsPlay1}\" class=\"flip\">\n    <li class=\"flip-clock-before\">\n      <a href=\"#\">\n        <div class=\"up\">\n          <div class=\"shadow\"></div>\n          <div class=\"inn\">{{secondsBefore1}}</div>\n        </div>\n        <div class=\"down\">\n          <div class=\"shadow\"></div>\n          <div class=\"inn\">{{secondsBefore1}}</div>\n        </div></a></li>\n    <li class=\"flip-clock-active\">\n      <a href=\"#\">\n        <div class=\"up\">\n          <div class=\"shadow\"></div>\n          <div class=\"inn\">{{secondsActive1}}</div>\n        </div>\n        <div class=\"down\">\n          <div class=\"shadow\"></div>\n          <div class=\"inn\">{{secondsActive1}}</div>\n        </div>\n      </a>\n    </li>\n  </ul>\n  <ul [ngClass]=\"{'play': secondsPlay2}\" class=\"flip\">\n    <li class=\"flip-clock-before\">\n      <a href=\"#\">\n        <div class=\"up\">\n          <div class=\"shadow\"></div>\n          <div class=\"inn\">{{secondsBefore2}}</div>\n        </div>\n        <div class=\"down\">\n          <div class=\"shadow\"></div>\n          <div class=\"inn\">{{secondsBefore2}}</div>\n        </div>\n      </a>\n    </li>\n    <li class=\"flip-clock-active\">\n      <a href=\"#\">\n        <div class=\"up\">\n          <div class=\"shadow\"></div>\n          <div class=\"inn\">{{secondsActive2}}</div>\n        </div>\n        <div class=\"down\">\n          <div class=\"shadow\"></div>\n          <div class=\"inn\">{{secondsActive2}}</div>\n        </div>\n      </a>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/counter/counter.component.ts":
/*!**********************************************!*\
  !*** ./src/app/counter/counter.component.ts ***!
  \**********************************************/
/*! exports provided: CounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return CounterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CounterComponent = /** @class */ (function () {
    function CounterComponent() {
        var _this = this;
        this.ticks = 0;
        this.hoursPlay1 = false;
        this.hoursPlay2 = false;
        this.minutesPlay1 = false;
        this.minutesPlay2 = false;
        this.secondsPlay1 = false;
        this.secondsPlay2 = false;
        this.hoursBefore1 = 9;
        this.hoursActive1 = 0;
        this.hoursBefore2 = 9;
        this.hoursActive2 = 0;
        this.minutesBefore1 = 9;
        this.minutesActive1 = 0;
        this.minutesBefore2 = 9;
        this.minutesActive2 = 0;
        this.secondsBefore1 = 9;
        this.secondsActive1 = 0;
        this.secondsBefore2 = 9;
        this.secondsActive2 = 0;
        this.sub = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(1, 500).subscribe(function (t) {
            _this.hoursPlay1 = false;
            _this.hoursPlay2 = false;
            _this.minutesPlay1 = false;
            _this.minutesPlay2 = false;
            _this.secondsPlay1 = false;
            _this.secondsPlay2 = !_this.secondsPlay2;
            _this.ticks = t;
            var secondsDisplay = _this.getSeconds(_this.ticks).toString();
            var minutesDisplay = _this.getMinutes(_this.ticks).toString();
            var hoursDisplay = _this.getHours(_this.ticks);
            if (_this.secondsPlay2) {
                console.log(secondsDisplay);
                _this.secondsBefore2 = _this.secondsActive2;
                _this.secondsActive2 = parseInt(secondsDisplay[1]);
                var temp = parseInt(secondsDisplay[0]);
                if (_this.secondsActive1 != temp) {
                    _this.secondsPlay1 = true;
                    _this.secondsBefore1 = _this.secondsActive1;
                    _this.secondsActive1 = temp;
                }
                temp = parseInt(minutesDisplay[1]);
                if (_this.minutesActive2 != temp) {
                    _this.minutesPlay2 = true;
                    _this.minutesBefore2 = _this.minutesActive2;
                    _this.minutesActive2 = temp;
                }
                temp = parseInt(minutesDisplay[0]);
                if (_this.minutesActive1 != temp) {
                    _this.minutesPlay1 = true;
                    _this.minutesBefore1 = _this.minutesActive1;
                    _this.minutesActive1 = temp;
                }
                temp = parseInt(hoursDisplay[1]);
                if (_this.hoursActive2 != temp) {
                    _this.hoursPlay2 = true;
                    _this.hoursBefore2 = _this.hoursActive2;
                    _this.hoursActive2 = temp;
                }
                temp = parseInt(hoursDisplay[0]);
                if (_this.hoursActive1 != temp) {
                    _this.hoursPlay1 = true;
                    _this.hoursBefore1 = _this.hoursActive1;
                    _this.hoursActive1 = temp;
                }
            }
        });
    }
    CounterComponent.prototype.getSeconds = function (ticks) {
        var time = new Date();
        return ("0" + time.getSeconds()).slice(-2);
    };
    CounterComponent.prototype.getMinutes = function (ticks) {
        var time = new Date();
        return ("0" + time.getMinutes()).slice(-2);
    };
    CounterComponent.prototype.getHours = function (ticks) {
        var time = new Date();
        return ("0" + time.getHours()).slice(-2);
    };
    CounterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-counter',
            template: __webpack_require__(/*! ./counter.component.html */ "./src/app/counter/counter.component.html"),
            styles: [__webpack_require__(/*! ./counter.component.css */ "./src/app/counter/counter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CounterComponent);
    return CounterComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\LATIHAN\Angular\angular-flipclock\angular-flipclock\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map