// singleton
// object.create()

// object literals

const mysym = Symbol("key1")

const JsUser = {
    name: "ankit",
    "full Name": "Ankit Shaw",
    [mysym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "gankit832@gmail.com",
    isLoggedIn: false,
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full Name"]);
console.log(JsUser[mysym]);

JsUser.email= "Ankit@gmail.com"
// Object.freeze(JsUser); //changes cant't be done
JsUser.email= "Ankit@yahoo.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());