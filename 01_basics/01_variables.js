const accountId = 144553;
let accountEmail = "aaa@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;

// accountId = 2;  not allowed

accountEmail="bb@gmail.com";
accountPassword="212121";
accountCity="Kolkata";

console.log(accountId);

/*
    prefer not to use var
    because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);