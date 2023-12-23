let score = "33abc";

// After converting 33abc to number its will print NaN and null will be printed as 0

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33"=>33
// "33abc" => NaN
// true=>1; false=>0


let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn);

//----Boolean conversion---
// 1=>true; 0=>false;
//"" =>false
// "hitesh" =>true

let somenumber=33;

let stringnumber=String(somenumber);
console.log(stringnumber);
console.log(typeof (stringnumber));