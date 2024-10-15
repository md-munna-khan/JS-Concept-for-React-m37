// 1.ljson stringify, parse
const students = {
    name : "munna",
    roll : 5,
    age: 23
}
const studentsJson = JSON.stringify(students)

console.log(students)
console.log(studentsJson)

const studentsParse = JSON.parse(studentsJson)
console.log(studentsParse)

//2 key and values in object
const keys = Object.keys(students)
const values = Object.values(students)
console.log(values)
console.log(keys)
//3 fetch
// fetch("url")
// .then =(res =>res.json())
// .then(data=>console.log(data))


// array loop we are use forEach
const numbers=[45,4567,7,4,232]
numbers.forEach(num=>console.log(num)) // jodi loop calai kono return pabo na
numbers.map(x => x*2)
// for of array like object
// loop on an object using for in

// array of object
const products =[
    {name:"phone", brand: "lenovo",price:400,color:"black"},
    {name:"laptop", brand: "mac",price:4890,color:"wite"},
    {name:"pc", brand: "techno",price:756,color:"yellow"},
    {name:"bluetooth", brand: "m40",price:4900,color:"red"},
    {name:"phone", brand: "lenovo",price:400,color:"black"}
]

// copy products and add new products
const newProducts = [...products, {name:"mouse",brand :"a4tech",price:455}]
// console.log(newProducts)

// remove products
const remaining = products.filter(product =>product.name !=="laptop");
console.log(remaining)