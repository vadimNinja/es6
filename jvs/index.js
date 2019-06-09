var car = {
    name: 'Ford',
    year: 2015,
    person: {

    }
};
console.log(car);


// function Car(name, year) {
//     this.name = name;
//     this.year = year
// }
//
// Car.prototype.getAge = function () {
//     return new Date().getFullYear() - this.year
// };
//
// Car.prototype.color = 'black';
//
// var ford = new Car('Ford', 2015);
// var bmw = new Car('BMW', 2017);
//
// ford.color = 'red';
//
// console.log(ford);
// console.log(bmw);


// var ford = Object.create({
//     calculatedDistancePerYear: function () {
//         Object.defineProperty(this, 'distancePerYear', {
//             value: Math.ceil(this.distance / this.age),
//             enumerable: false,
//             writable: false,
//             configurable: false
//         })
//     }
// }, {
//     name: {
//         value: 'Ford',
//         enumerable: true,
//         writable: false,
//         configurable: false
//     },
//     model: {
//         value: 'Focus',
//         enumerable: true,
//         writable: false,
//         configurable: false
//     },
//     year: {
//         value: 2015,
//         enumerable: true,
//         writable: false,
//         configurable: false
//     },
//     distance: {
//         value: 12050,
//         enumerable: true,
//         writable: true,
//         configurable: false
//     },
//     age: {
//         enumerable: true,
//         get: function () {
//             return new Date().getFullYear() - this.year
//         },
//         set: function () {
//
//         }
//     }
// });
//
// ford.calculatedDistancePerYear();
//
// for (var key in ford) {
//     if (ford.hasOwnProperty(key)) {
//         console.log(key, ford[key])
//     }
// }


// var person = {
//     name: 'Max',
//     year: 28,
//     job: 'Frontend'
// };
//
// // for (var key in person) {
// //     if (person.hasOwnProperty(key)) {
// //         console.log(person[key])
// //     }
// // }
//
// Object.keys(person).forEach(function(key) {
//     console.log(person[key]);
// });


// var createCounter = function(counterName) {
//   var counter = 0;
//
//   return {
//       increment: function() {
//           counter++
//       },
//       decrement: function() {
//           counter--
//       },
//       getCounter: function() {
//           return counter
//       }
//   }
// };
//
// var counterA = createCounter('Counter A');
// var counterB = createCounter('Counter B');
//
// counterA.increment();
// counterA.increment();
// counterA.increment();
//
// counterB.decrement();
// counterB.decrement();


// var person = {
//     name: 'Max',
//     age: 28,
//     job: 'Frontend',
//     displayInfo: function(ms) {
//
//         setTimeout(function() {
//             console.log('Name: ', this.name);
//             console.log('Job: ', this.job);
//             console.log('Age: ', this.age);
//         }.bind(this), ms)
//     }
// };
//
// person.displayInfo(2000);


// function printObject(objName) {
//     console.log('Printing object: ', objName);
//     for (var key in this) {
//         if (this.hasOwnProperty(key)) {
//             console.log('[' + key + ']', this[key])
//         }
//     }
// }
//
//
//
// var person = {
//     firstName: 'Max',
//     job: 'Backend',
//     age: 29,
//     freinds: ['Elena', 'Igor']
// };
//
// var car = {
//     name: 'Ford',
//     model: 'Focus',
//     year: 2017
// };
//
// var printPerson = printObject.bind(person);
// printPerson('Person');
//
// printObject.call(car, 'Car');
//
// printObject.apply(person, ['Person']);


// var a = [1, 2, 3];
// var b = [5, 'Hello', 6];
//
// Array.prototype.double = function() {
//     var newArray = this.map(function(item) {
//         if (typeof  item === 'number') {
//             return Math.pow(item, 2)
//         }
//
//         if (typeof  item === 'string') {
//             item += item
//         }
//
//         return item
//     });
//
//     return newArray
// };
//
// var newA = a.double();
// var newB = b.double();
//
// console.log('A', newA);
// console.log('B', newB);


// for (let i = 0; i < 5; i++) {
//     setTimeout(function () {
//         console.log(i)
//     }, 2000)
//
// }


// const calcAge = (year) => {
//     const current = new Date().getFullYear();
//     return current -year
// };

// const getAge = year => {
//     const current = new Date().getFullYear();
//     return current -year
// };

// const getAge = year => new Date().getFullYear() - year;
//
// console.log(getAge(1990));

// const person = {
//     age: 25,
//     name: 'Maxim',
//     logNameWithTimeout() {
//         setTimeout(() => {
//             console.log(this.name)
//         }, 1000)
//     }
// };


// const createPost = (title, text = 'Default text', date = new Date().toLocaleDateString()) => {
//     return {title, text, date}
// };
//
// const post = createPost('Ok');
// console.log(post);


// const createCar = (name, model) => ({name, model});
//
// const ford = createCar('Ford', 'Focus');
//
// console.log(ford);
//
// const yearField = 'year';
// const bmw = {
//     name: 'BMW',
//     ['model']: 'X6 Sport',
//     [yearField]: 2018,
//
//     logFields() {
//         const {name, year, model} = this;
//         console.log(name, year, model)
//     }
// };
//
// console.log(bmw);
// bmw.logFields();
//
// // const year = bmw.year
// const {year} = bmw;
// console.log(year);


// let ford = Object.create({
//     createProperty: function (title, val) {
//         Object.defineProperty(this, title, {
//             value: val,
//             enumerable: true,
//         })
//     }
// }, {
//     name: {
//         value: 'Ford',
//     }
// });
// // console.log(ford);
//
// ford.createProperty('patientId', 17);
// ford.createProperty('halth', 'Бахмут');
//
// console.log('1 ', ford);
//
// delete ford['patientId'];
//
// console.log('2 ', ford);
//
// for (var key in ford) {
//     if (ford.hasOwnProperty(key)) {
//         console.log(key, ford[key])
//         delete ford[key];
//     }
// }
//
// console.log('3 ', ford);

// let appObj = {a: 21, b: 22, c: 23};
//
// console.log(appObj.a);
//
// delete appObj.a;
//
// console.log(appObj);

// const form = document.querySelector('form');
//
// form.addEventListener('submit', event => {
//     event.preventDefault();
//
//     const title = form.title.value;
//     const text = form.text.value;
//     const description = form.description.value;
//
//     saveForm(title, text, description)
// });
//
// // Spread
// // function saveForm(data) {
// //
// //     const formData = {
// //         date: new Date().toLocaleDateString(),
// //         ...data
// //     };
// //
// //     console.log('Form data: ', formData);
// // }
//
// // Rest
// function saveForm(...args) {
//
//     const [title, text, description] = args;
//
//     const formData = {
//         date: new Date().toLocaleDateString(),
//         title, text, description
//     };
//
//     console.log('Form data: ', formData);
// }


// const createLink = ({path, name}) => `<a target="_blank" href="${path}">${name}</a>`;
//
// const ul = document.querySelector('ul');
//
// const google = `<li>${createLink({path: 'https://google.com', name: 'Google'})}</li>`;
//
// ul.insertAdjacentHTML('afterbegin', google);


class RootElement {
    constructor(tagName = 'div') {
        this.$el = document.createElement(tagName);
        this.$el.style.marginBottom = '20px'
    }

    hide() {
        this.$el.style.opacity = '0'
    }

    show() {
        this.$el.style.opacity = '1'
    }

    append() {
        document.querySelector('.wrapper').insertAdjacentElement('beforeend', this.$el);
    }
}

class Box extends RootElement {
    constructor(color, size = 150, tagName) {
        super(tagName);
        this.color = color;
        this.size = size
    }

    create() {
        this.$el.style.background = this.color;
        this.$el.style.width = this.$el.style.height = `${this.size}px`;

        this.append();

        return this
    }
}

class Circle extends RootElement {
    constructor(color) {
        super();
        this.color = color;
    }

    create() {
        this.$el.style.borderRadius = '50%';
        this.$el.style.width = this.$el.style.height = `120px`;
        this.$el.style.background = this.color

        this.append();

        return this
    }
}

const redBox = new Box('red', 100, 'div').create();
const blueBox = new Box('blue').create();

const circle = new Circle('green').create();


circle.$el.addEventListener('mouseenter', () => {
    circle.hide()
});

circle.$el.addEventListener('mouseleave', () => {
    circle.show()
});






