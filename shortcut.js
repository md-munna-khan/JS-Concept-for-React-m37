// truthy value = "name",{},[],4
// falsy value = '',0,null, undefined


// check truthy value
let balance = 40
if(balance){
    balance = balance+10;
}else{
    balance = 0
}
// console.log(balance)
// check falsy value
let tk = '';
if(!tk){
    tk = tk + 40
} else{
    tk - 10
}
// console.log(tk)

const myBalance = 100
let food;
if(myBalance>100){
   food = "biryani khabo"
} else{
    food = "vat khabo"
}
// console.log(food)

// ternary
let food1 = myBalance>100? "fish khabo" : "vorta khabo";
// console.log(food1)

// number to string conversion
const num1 = 300;
const numstr = num1 + '';
// console.log(num1)
// console.log(numstr)

// string to number conversion
const str= "878";
const converter = +str;
// console.log(converter)


// and , or use
let isRider = true;
const showUser = ()=>console.log("display user")
const hideUser = ()=>console.log("hide user")
// isRider? showUser() : hideUser();
// isRider && showUser()

isRider || showUser()
// toggle boolean
isRider = !isRider