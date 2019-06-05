// const createPerson = (name, surname, fieldName, fieldPostFix) => {
//     const fullname = name + ' ' + surname
//     return {
//         fullname,
//         name,
//         surname,
//         getJob() {
//             return 'Front End 1'
//         },
//         [fieldName + fieldPostFix]: 100
//     }
//
// }
//
// const person = createPerson('WFM', 'WFM2', 'car', '-name')
// console.log(person)

// let obj = {
//     name: 'WFM2',
//     age: 25
// }
//
// let {name: n, age: a} = obj
//
// console.log(n, a)

// let array = ['WFM', 30]
// // let name = array[0]
// // let age = array[1]
// // let color = array[2]
//
// let [name, , color='blue'] = array
//
// console.log(name, color)

// function logStrings(num, ...args) {
//     console.log(num, args)
// }
//
// let spreadArray = ['WFM1', 'WFM2', 'WFM3']
// logStrings(20, ...spreadArray)

// function Car(name) {
//     this.name = name;
// }
//
// Car.prototype.logName = function () {
//     console.log(this.name)
// }
//
// let car = new Car('Audi');
// car.logName();


// class Car {
//     constructor(name) {
//         this.name = name;
//     }
//
//     logName() {
//         console.log(this.name)
//     }
//
//     static staticFun() {
//         console.log('static')
//     }
// }
//
// let car = new Car('BMW');
// console.log(car.logName() === Car.prototype.logName());
// Car.staticFun();


// (function(p1, p2) {
//     console.log(p1)
// }(20, 23));


// let set = new WeakSet();
//
// let key = {};
//
// set.add(key);
// console.log(set.size);
// key = null;
// console.log(set.size);


// let map = new Map();
//
// map.set('name', 'WFM');
// map.set('age', 20);
//
// let obj1 = {};
// let obj2 = {};
//
// map.set(obj1, 10);
// map.set(obj2, 50);
//
// console.log(map.size);
// console.log(map.has(obj2));


// import {name, age} from "./extra";
//
// console.log(age, name);


// for (var i = 0; i < 5; i++) {
//
//     (function(num) {
//         setTimeout(function() {
//             console.log(num);
//         }, 2000);
//     })(i);
//
// }


// var outerValue = 'text1';
// var later;
//
//
// function foo() {
//     var innerValue = 'text2';
//
//     function inn(param) {
//         console.log(innerValue);
//         console.log(outerValue);
//         console.log(param);
//         console.log(tooLate);
//     }
//
//     later = inn;
// }
//
// console.log('tooLate: ', tooLate);
//
// var tooLate = 'text4';
//
// foo();
// later('text3');


// let mas = [1, 2, 3, 4].find(x => x > 2);
// console.log(mas);

// let str = 'hello';
//
// // console.log(str.repeat(3))
// // console.log(str.startsWith('hel'))
// console.log(str.includes('Hel'))


// function oldDelay(ms, fun) {
//     setTimeout(function () {
//         fun();
//     }, ms)
// }
//
// oldDelay(2000, function () {
//     console.log('old')
// });

function delay(ms = 1000) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject();
        }, ms)
    })
}

delay(4000)
    .then(() => console.log('new'))
    .catch(() => {
        console.info('error')
    })






