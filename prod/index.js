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
//retorna esse codigo de erro
generateError('the application crashed', 500);
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
