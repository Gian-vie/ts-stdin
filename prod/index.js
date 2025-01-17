"use strict";
// tipos de dados
/*
any
unknown
tuple
never
enum
*/
// any remove a tipagem do typescript
//arrays
let values = [10, 20, 30, 40];
// tuple limita os valores em uma array
let items = ["apple", 3, true];
//enum 
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
// function, se não tiver um return o tipo vai ser "void"
// unknown como o any, n tem tipo definido, porém pode ser validado depois
let itemImput;
let itemName;
//nenhum vai dar erro
itemImput = 20;
itemImput = "apple";
// pode ser validado
if (itemImput === "string") {
    itemName = itemImput;
}
//melhor para imputs q vc n sabe oq vai ser
//NEVER retorna nada
function generateError(message, code) {
    throw { message: message, errorCode: code };
    //por mais q apresente como void, é um never, ja q no console.log não tem retorno algum
}
const user1 = {
    firstname: "gian",
    age: 19
};
//UNION type
//pode armazenar mais de um tipo
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
//LITERAL type
// define um valor em especifico
//unindo ao union, pode selecionar valores q serão aceitos
let productPrice;
let productName;
productPrice = 10;
const e1 = {
    firstname: "gian",
    age: 18,
    id: 777,
    role: "Admin"
};
///////////////////////////////////////////////////////////
//EXERCISES
// Day 3 - Exercise 1
let pi = 3.14159;
let tau = pi * 2;
console.log(`${tau} is ${pi} times two.`);
// Day 3 - Exercise 2
let pie;
pie = "blueberry";
// console.log(`i like ${pie}`)
// Day 3 - Exercise 3
let isDouglas = true;
// console.log(`${isDouglas ? 'Oh, Hi Douglas' : 'Who are you?'}`)
// Day 3 - Exercise 4
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
console.log(members);
