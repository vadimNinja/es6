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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// const createPerson = (name, surname, fieldName, fieldPostFix) => {\n//     const fullname = name + ' ' + surname\n//     return {\n//         fullname,\n//         name,\n//         surname,\n//         getJob() {\n//             return 'Front End 1'\n//         },\n//         [fieldName + fieldPostFix]: 100\n//     }\n//\n// }\n//\n// const person = createPerson('WFM', 'WFM2', 'car', '-name')\n// console.log(person)\n// let obj = {\n//     name: 'WFM2',\n//     age: 25\n// }\n//\n// let {name: n, age: a} = obj\n//\n// console.log(n, a)\n// let array = ['WFM', 30]\n// // let name = array[0]\n// // let age = array[1]\n// // let color = array[2]\n//\n// let [name, , color='blue'] = array\n//\n// console.log(name, color)\n// function logStrings(num, ...args) {\n//     console.log(num, args)\n// }\n//\n// let spreadArray = ['WFM1', 'WFM2', 'WFM3']\n// logStrings(20, ...spreadArray)\n// function Car(name) {\n//     this.name = name;\n// }\n//\n// Car.prototype.logName = function () {\n//     console.log(this.name)\n// }\n//\n// let car = new Car('Audi');\n// car.logName();\n// class Car {\n//     constructor(name) {\n//         this.name = name;\n//     }\n//\n//     logName() {\n//         console.log(this.name)\n//     }\n//\n//     static staticFun() {\n//         console.log('static')\n//     }\n// }\n//\n// let car = new Car('BMW');\n// console.log(car.logName() === Car.prototype.logName());\n// Car.staticFun();\n// (function(p1, p2) {\n//     console.log(p1)\n// }(20, 23));\n// let set = new WeakSet();\n//\n// let key = {};\n//\n// set.add(key);\n// console.log(set.size);\n// key = null;\n// console.log(set.size);\n// let map = new Map();\n//\n// map.set('name', 'WFM');\n// map.set('age', 20);\n//\n// let obj1 = {};\n// let obj2 = {};\n//\n// map.set(obj1, 10);\n// map.set(obj2, 50);\n//\n// console.log(map.size);\n// console.log(map.has(obj2));\n// import {name, age} from \"./extra\";\n//\n// console.log(age, name);\n// for (var i = 0; i < 5; i++) {\n//\n//     (function(num) {\n//         setTimeout(function() {\n//             console.log(num);\n//         }, 2000);\n//     })(i);\n//\n// }\n// var outerValue = 'text1';\n// var later;\n//\n//\n// function foo() {\n//     var innerValue = 'text2';\n//\n//     function inn(param) {\n//         console.log(innerValue);\n//         console.log(outerValue);\n//         console.log(param);\n//         console.log(tooLate);\n//     }\n//\n//     later = inn;\n// }\n//\n// console.log('tooLate: ', tooLate);\n//\n// var tooLate = 'text4';\n//\n// foo();\n// later('text3');\n// let mas = [1, 2, 3, 4].find(x => x > 2);\n// console.log(mas);\n// let str = 'hello';\n//\n// // console.log(str.repeat(3))\n// // console.log(str.startsWith('hel'))\n// console.log(str.includes('Hel'))\n// function oldDelay(ms, fun) {\n//     setTimeout(function () {\n//         fun();\n//     }, ms)\n// }\n//\n// oldDelay(2000, function () {\n//     console.log('old')\n// });\nfunction delay() {\n  var ms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;\n  return new Promise(function (resolve, reject) {\n    setTimeout(function () {\n      reject();\n    }, ms);\n  });\n}\n\ndelay(4000).then(function () {\n  return console.log('new');\n}).catch(function () {\n  console.info('error');\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });