// for
for (let index = 0; index <= 10; index++) {
    const element = index;
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and inner loop ${i}`);
        // console.log(i + '*' + j + "=" + i*j);
    }


}

let myarray = ["flash","batman","superman"]
// console.log(myarray.length);
for (let i =0 ; i < myarray.length; i++){
    const element = myarray[i];
    // console.log(element);
   
}

// break and continue

for (let index = 1; index <= 20; index++) {
    if(index==5)
    {
        console.log(`Detected 5`);
        continue;
    }
    console.log(`value of i is ${index}`);
    
}