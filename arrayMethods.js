// array of object
const products =[
    {name:"phone", brand: "lenovo",price:400,color:"black"},
    {name:"laptop", brand: "mac",price:4890,color:"wite"},
    {name:"pc", brand: "techno",price:756,color:"yellow"},
    {name:"bluetooth", brand: "m40",price:4900,color:"red"},
    {name:"phone", brand: "lenovo",price:400,color:"black"}
]

//1. map
const prices = products.map (product => product.price)
// console.log(prices)
const colors = products.map (x=> x.color)
// console.log(colors)


//2. forEach
// products.forEach(y => console.log(y))
// products.forEach(y => console.log(y.brand))

//3. filter

const filtering = products.filter(p => p.price<3000)
// console.log(filtering)
const specificWord = products.filter(Name => Name.name.includes("n"))
// console.log(specificWord)


// find
const finding = products.find(x=>x.price<500);
console.log(finding)