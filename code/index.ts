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

enum Role {admin = 1, read = 2, backup = 3}

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
if(itemImput === "string"){
    itemName = itemImput
}
//melhor para imputs q vc n sabe oq vai ser

//NEVER retorna nada

function generateError(message: string, code: number){
    throw {message: message, errorCode:code }
    //por mais q apresente como void, é um never, ja q no console.log não tem retorno algum
}

//retorna esse codigo de erro
generateError('the application crashed', 500)



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
function userInput(input1: number | string, input2: number | string){
    let result
    if(typeof input1 === "number" && typeof input2 === "number"){
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
    firstname:"gian",
    age: 18,
    id: 777,
    role: "Admin"
}

