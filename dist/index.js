"use strict";
let values = [10, 20, 30, 40];
let items = ["apple", 3, true];
var Role;
(function (Role) {
    Role[Role["admin"] = 1] = "admin";
    Role[Role["read"] = 2] = "read";
    Role[Role["backup"] = 3] = "backup";
})(Role || (Role = {}));
const user = {
    firstName: "Gian",
    age: 21,
    role: Role.admin
};
let itemImput;
let itemName;
itemImput = 20;
itemImput = "apple";
if (itemImput === "string") {
    itemName = itemImput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
const user1 = {
    firstname: "gian",
    age: 19
};
function userInput(input1, input2) {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
let productPrice;
let productName;
productPrice = 10;
const e1 = {
    firstname: "gian",
    age: 18,
    id: 777,
    role: "Admin"
};
let pi = 3.14159;
let tau = pi * 2;
console.log(`${tau} is ${pi} times two.`);
let pie;
pie = "blueberry";
let isDouglas = true;
const integer = 6;
const float = 6.66;
const hex = 0xf00d;
const binary = 0b1010011010;
const octal = 0o744;
const negZero = -0;
const actuallyNumber = NaN;
const largestNumber = Number.MAX_VALUE;
const mostBiglyNumber = Infinity;
const members = [
    integer,
    float,
    hex,
    binary,
    octal,
    negZero,
    actuallyNumber,
    largestNumber,
    mostBiglyNumber
];
members[0] = 12345;
const sequence = Array.from(Array(10).keys());
const animals = ['pangolin', 'aardvark', 'echidna', 'binturong'];
const stringsAndNumbers = [1, 'one', 2, 'two', 3, 'three'];
const allMyArrays = [sequence, animals, stringsAndNumbers];
console.log(allMyArrays);
class UsersBank {
    constructor(n, b) {
        this.balance = 0;
        this.name = n;
        this.balance = b;
    }
    addMoney(amount) {
        this.balance += amount;
    }
}
let product1;
product1 = {
    name: "apple",
    price: 2,
    itemPurchased(message) {
        console.log(message + " " + this.name);
    }
};
product1.itemPurchased("you just bought a");
function addToCart(item) {
    console.log(`Adding "${item.title}" to cart.`);
}
addToCart({ id: 1, title: 'shoes' });
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const jane = new Person('Jane', 31);
console.log(`${jane.name} is ${jane.age} years old.`);
class MC {
    greet(event = 'party') {
        return `Welcome to the ${event}`;
    }
}
const mc = new MC();
console.log(mc.greet('show'));
class Employee {
    constructor(title, salary) {
        this.title = title;
        this.salary = salary;
    }
}
const employee = new Employee('Engineer', 100000);
console.log(`The new employee's title is ${employee.title} and they earn $ ${employee.salary}.`);
class UserEXE {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const userEXE = new UserEXE('Dog', 1);
console.log(userEXE.id);
userEXE.name = 'Harold';
console.log(`User:`, user);
class HotelRoom {
}
let room = new HotelRoom();
room.A201 = "Andre";
room.B403 = "pedro";
