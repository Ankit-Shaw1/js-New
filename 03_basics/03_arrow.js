const user ={
    username:"Ankit",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username="Sam"
// user.welcomeMessage()

// console.log(this); ---->empty object


// function chai(){
//     let username="Hitesh"
//     console.log(this.username);
// }
// chai();

// const chai=()=>{
//     let username="Hitesh"
//     console.log(this.username);
// }
// chai()


// const addTwo=(num1,num2)=>{
//     return num1+num2
// }

// const addTwo=(num1,num2)=> num1+num2

// const addTwo=(num1,num2)=> (num1+num2)

const addTwo=(num1,num2)=> ({username:"Ankit"})


console.log(addTwo(3,4));