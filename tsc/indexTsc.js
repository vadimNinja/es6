"use strict";
var User = /** @class */ (function () {
    function User(name, job) {
        this.name = name;
        this.job = job;
        this.isTeacher = true;
        this.age = 30;
    }
    User.prototype.getAge = function () {
        return this.age;
    };
    return User;
}());
var user = new User('WFM', 'Frontend');
var user2 = new User('WFM');
console.log(user);
console.log(user2);
