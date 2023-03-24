// Web/Browser storage => localStorage, sessionStorage

// localStorage  =>

// let username = localStorage.getItem("username")
// if(username){
//     console.log("name is :"+ username)
// }else {
//     let firstname = prompt("Enter your first name")
//     localStorage.setItem("username",firstname)
//     console.log(username)
// }

// ----------------------------------------------------------------

// sessionStorage  =>

// let username = sessionStorage.getItem("username")
// if(username){
//     console.log("name is :"+ username)
// }else {
    //     let firstname = prompt("Enter your first name")
    //     localStorage.setItem("username",firstname)
    //     console.log(username)
    // }
    
// ----------------------------------------------------------------

// Exeption/Error Handling (try, catch, finally)

// try{
//     const data = "Test"
//     data = "update"
//     console.log(data)
// }catch(err){
//     console.error(err)
// }finally{
//     console.log("Hello")
// }

// ----------------------------------------------------------------

// Hoisting  =>

// function add(no1,no2) {
//     console.log(no1+no2)
// }
// add(25,55)

// console.log(d)
// var d = 7

// const name = () =>{
//     console.log("Yahoo")
// }
// name()

// ----------------------------------------------------------------

// callback  =>

const add = (num1, num2) => console.log(num1 + num2)
const sub = (num1, num2) => console.log(num1 - num2)
const mult = (num1, num2) => console.log(num1 * num2)
const div = (num1, num2) => console.log(num1 / num2)

function calcu(no1, no2, data) {
    console.log("opening calculater")
    data(no1, no2)
}
calcu(56, 88, add)
calcu(56, 88, sub)
calcu(56, 88, mult)
calcu(56, 88, div)

