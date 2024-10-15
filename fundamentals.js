// 1. how to declare a variable using let and const
const fathersName = "kholil";
let season = "rainy";
season = "winter"
console.log(season)
//2 

// 6 basics condition >,<, ===,!==, <=,>=;
// condition
if(fathersName){
    console.log("you are a good boy")
}else{
    console.log("you are a bad boy")
}

//3 
// multiple condition = && , ||

//4 
// array  declare
//index
//length,push.pop
const numbers = [45,67,44,23,55,5,5,322,324]
numbers[0] = 100;
numbers.length
console.log(numbers.length)
// 5 for loop 
for(let x = 0; x <numbers.length; x++){
    const number = numbers[x]
    console.log(number)
}

// 6 function
function multiply (num1,num2){
    const result = num1 * num2;
    return result
}
const output =multiply(5,50);
console.log(output)

// 7 object
// 3 ways to access property by name
const students = {
    name : "munna",
    roll : 5,
    age: 23
}
const myAge = "age"
console.log(students.age) // direct by property
console.log(students["age"]); // access via property name string
console.log(students[myAge]) // access via property name in variable
