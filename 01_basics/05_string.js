const name = "Ankit"
const repoCount = 50;

console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('AnkitShaw')

console.log(gameName.charAt(4));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString =gameName.slice(-8,4);
console.log(anotherString);

const newStringOne = "   Ankit   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Ankit.com/Ankit%20Shaw"
console.log(url.replace("%20","-"))