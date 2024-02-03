// Immediately Invoked Function Expression(IIFE)---- function ko turant execute krne ke liye


(function chai(){
    console.log(`DB CONNECTED`);
})();
// semi colon ke bina error dega

((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
})('Ankit')