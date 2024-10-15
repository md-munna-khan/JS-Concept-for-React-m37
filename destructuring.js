// array destructuring

const numbers = [45,89]
// const x = numbers[0]
// const y = numbers[1]

const [n,m] =  numbers
// console.log(n,m)

function returnArray (num1,num2){

    covert = [num1,num2]
    return covert
}

const [one,two] = returnArray(45,89)
// console.log(returnArray(50,100))
// console.log(one,two)

// object destructuring
const {name,id}= {name:"munna",id:45,address:"dhaka"}
console.log(name,id)

const employe ={
    name: "boltu",
    job: "salesman",
    watch:{
        brand:"lenovo",
        buyMarket:{
            area:"dhaka gulshan"
        }
    }
}
const{area} = employe?.watch?.buyMarket
console.log(area)