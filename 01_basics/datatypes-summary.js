// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
console.log(id);
console.log(anotherId);

// Reference (Non primitive)

// Arrays, Objects, Functions

const heroes = ["Shaktiman", "nagraj", "doga"];

let myObj = {
    name: "Ankit",
    age: 22,
}

const myFunction = function () {
    console.log("Hello World");
}

//----------------------Memory--------------------------------

// Stack(Primitive), Heap(Non-Primitive)

//stack
let myYoutubename = "CodeWithHarry"

let anothername = myYoutubename;
anothername = "coding Ninja"

console.log(myYoutubename);
console.log(anothername);


//heap  --> reference
let userOne = {
    email: "aa@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email="gankit@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);