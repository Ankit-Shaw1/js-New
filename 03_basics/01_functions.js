

function sayMyName() {
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

function addTwoNumbers(number1, number2) {
    return number1 + number2
}

const result = addTwoNumbers(3, 5);
// console.log("result", result);

function loginUserMessage(username) {
    if (username == undefined) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}

// loginUserMessage()
// console.log(loginUserMessage("Ankit"))

function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}

// console.log(calculateCartPrice(200,400,500,1000));

const user = {
    username: "Ankit",
    price: 200,
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user);

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(arr)
{
    return arr[0];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,100,600]));