

function sayMyName(){
    console.log('A');
    console.log('N');
    console.log('K');
    console.log('I');
    console.log('T');
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    return number1 + number2
}

const result = addTwoNumbers(3,5);
// console.log("result", result);

function loginUserMessage(username){
    if(username==undefined)
    {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}

loginUserMessage()
console.log(loginUserMessage("Ankit"))