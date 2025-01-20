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

let values: number[] = [10, 20, 30, 40]


// tuple limita os valores em uma array

let items: [string, number, boolean] = ["apple", 3, true]


//enum 

enum Role { admin = 1, read = 2, backup = 3 }

const user = {
    firstName: "Gian",
    age: 21,
    role: Role.admin
}

// function, se não tiver um return o tipo vai ser "void"

// unknown como o any, n tem tipo definido, porém pode ser validado depois

let itemImput: unknown
let itemName: string

//nenhum vai dar erro
itemImput = 20
itemImput = "apple"

// pode ser validado
if (itemImput === "string") {
    itemName = itemImput
}
//melhor para imputs q vc n sabe oq vai ser

//NEVER retorna nada

function generateError(message: string, code: number) {
    throw { message: message, errorCode: code }
    //por mais q apresente como void, é um never, ja q no console.log não tem retorno algum
}

//retorna esse codigo de erro
// generateError('the application crashed', 500)



//ALIAS type

type Users = {
    firstname: string,
    age: number
}

const user1: Users = {
    firstname: "gian",
    age: 19
}

//UNION type
//pode armazenar mais de um tipo
function userInput(input1: number | string, input2: number | string) {
    let result
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2
    } else {
        result = input1.toString() + input2.toString()
    }
    return result
}


//LITERAL type
// define um valor em especifico
//unindo ao union, pode selecionar valores q serão aceitos
let productPrice: 10 | 20 | 30
let productName: "s" | "m" | "l"

productPrice = 10


// intersection

type Users1 = {
    firstname: string
    age: number
}

type JobRole = {
    id: number
    role: string
}

type employee = Users1 & JobRole

const e1: employee = {
    firstname: "gian",
    age: 18,
    id: 777,
    role: "Admin"
}

///////////////////////////////////////////////////////////
//EXERCISES

// Day 3 - Exercise 1

let pi = 3.14159;
let tau = pi * 2;

console.log(`${tau} is ${pi} times two.`);

// Day 3 - Exercise 2

let pie: string
pie = "blueberry"

// console.log(`i like ${pie}`)

// Day 3 - Exercise 3

let isDouglas: boolean = true

// console.log(`${isDouglas ? 'Oh, Hi Douglas' : 'Who are you?'}`)


// Day 3 - Exercise 4

const integer: number = 6;
const float: number = 6.66;
const hex: number = 0xf00d;
const binary: number = 0b1010011010;
const octal: number = 0o744;
const negZero: number = -0;
const actuallyNumber: number = NaN;
const largestNumber: number = Number.MAX_VALUE;
const mostBiglyNumber: number = Infinity;

const members: number[] = [
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

// console.log(members);

// Day 3 - Exercise 5

const sequence: number[] = Array.from(Array(10).keys());
const animals: string[] = ['pangolin', 'aardvark', 'echidna', 'binturong'];
const stringsAndNumbers: (number | string)[] = [1, 'one', 2, 'two', 3, 'three'];
const allMyArrays: (number | string)[][] = [sequence, animals, stringsAndNumbers];

console.log(allMyArrays);

//OOPs


//class
class UsersBank {
    name: string
    private balance: number = 0 // não poderá ser alterado fora da classe

    constructor(n: string, b: number) {
        this.name = n
        this.balance = b
    }

    addMoney(amount: number) {
        this.balance += amount
    }

}

//interface
interface Item {
    name: string
    price: number

    itemPurchased(message: string): void

}

let product1: Item

product1 = {
    name: "apple",
    price: 2,
    itemPurchased(message: string) {
        console.log(message + " " + this.name)
    }
}

product1.itemPurchased("you just bought a")

// exercises

// Day 5 - Exercise 1


interface cart {
    id: number,
    title: string,
    variantId?: number //a "?" antes dos ":" torna o item opcional
}


function addToCart(item: cart) {
    console.log(`Adding "${item.title}" to cart.`);
}

addToCart({ id: 1, title: 'shoes' });


// Day 5 - Exercise 2
// atribuindo interface a classe
interface NameAge {
    name: string
    age: number
}

class Person implements NameAge {// usa o IMPLEMENT
    constructor(public name: string, public age: number) { }
}

const jane = new Person('Jane', 31);

console.log(`${jane.name} is ${jane.age} years old.`);


// Day 5 - Exercise 3

class MC {
    greet(event: string = 'party'): string {
        return `Welcome to the ${event}`;
    }
}

const mc = new MC();
console.log(mc.greet('show'));


// Day 5 - Exercise 4
// redução de codigo
class Employee {
    constructor(public title: string, public salary: number) { }
    // title: string;
    // salary: number;
    // constructor(title: string, salary: number) {
    //   this.title = title;
    //   this.salary = salary;
    // }
}

const employee = new Employee('Engineer', 100000);

console.log(`The new employee's title is ${employee.title} and they earn $ ${employee.salary}.`);



// Day 5 - Exercise 5

interface UserSchema {
    id: number
    name: string
}

class UserEXE implements UserSchema {
    constructor(public name: string, readonly id: number) { }
}

const userEXE = new UserEXE('Dog', 1)

console.log(userEXE.id)

userEXE.name = 'Harold' // pode mudar
// userEXE.id = 5 // nao pode mudar

console.log(`User:`, user)

/*
quando usar readonly e o Private
o private n permite qualquer acesso ou alterar fora da classe
o readonly permite apenas acessar as não alterar ele
*/


// index signatures 

class HotelRoom {
    [roomNumber: string]: string

}

let room = new HotelRoom()

room.A201 = "Andre"
room.B403 = "pedro"


// Overrride

class Person1 {
    constructor(public firstName: string, public lastName: string, public age: number) { }

    get greet() {
        return this.firstName + " " + this.lastName
    }
}


class Client extends Person1 {
    override get greet() {
        return "Dear " + super.greet
    }
}

class Staff extends Person1 {
    override get greet() {
        return "Hi " + super.greet
    }
}