const numbers = [45,67,44,23,55,5,5,322,324];
const students = {
    name : "munna",
    roll : 5,
    age: 23
}

// 1. template string
const about = ` 
about students ${students.age} name of students ${students.name}
i want 3rd index of number ${numbers[2]}
`
//2. arrow function
const addFifty = () => 55;
const thirty = (x) => x +40;
const hundred = (num1,num2) => num1 + num2;
const doubleLine = (x,y)=>{
    const sum = x+y 
}


// spread operator

const updateNumbers = [...numbers];

updateNumbers.push(56)
updateNumbers.push(56)
updateNumbers.push(56)
const currentNumbers = [...updateNumbers,100]
console.log(numbers)
console.log(updateNumbers)
console.log(currentNumbers)