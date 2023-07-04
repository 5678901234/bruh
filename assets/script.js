// let h1 = document.createElement('h1')
// let welcomediv= document.querySelector('#welcomediv')
// let content= 'Hello, world!'


// welcomediv.appendChild(h1)
// h1.append(content)


// document.title= "See Finish"

// alert('Hey guys!');

// Variables in Javascript

// Varibles are placeholders, they are containers that hold values 

// let and const are scope based

// Comma is used to seperate values while the semi colon is used to seperate statements, this is used to end statements(semi-colon) 

// Assignment
// List all the reserved words in Javascript
// {
// var names
// names=  "Uchenna Anya"
// }

// it's adviced to use constants when creeating arrays, constants or when you are sure a varialble wouldn't change for any reason
 
// Types of Data type
// String data type: This is basically anything in between a quote, it's a string data type, it is a literal in value.
// Number data type: decimal, fraction, intergers, whole numbers, all these are number data Types
// Boolean data type: It's value is just a true or false. 0 for false and 1 for true
// Undefined data type: When you create a variable and the variable does'nt have a value, It becomes undefined.
// Null data type
// Object data type: your arrays and object listers.
// Symbol data type: These are special kind of data types. You may rarely use them.


// Syntax are set of rules that must be followed while programming in any programming language

// Hoisting is the Proccess where a variable is initialized and used before then creating it

// innerhtml, innertext and texcontent are the three ways you can change the value of an HTML Element 

// How to create an Object

// let obj= {}
// typeof obj
// ''

// let target= document.querySelector("#target")

// {
//     var names
//     names=  "Uchenna Anya"
//     }
// const age= 40
// var address= 'Eneka' 
// const contact= "09039522028"

// // alert(" My names are " + names + " I am years " + age + " old and I stay at " + address + " My phone number is " + contact)
// // console.log(" My names are " + names + " I am years " + age + " old and I stay at " + address + " My phone number is " + contact)
// document.write(" My names are " + names + " I am years " + age + " old and I stay at " + address + " My phone number is " + contact)
// // target.innerHTML= " My names are " + names + " I am years " + age + " old and I stay at " + address + " My phone number is " + contact
// target.textContent= " My names are " + names + 
// " I am years " 
// + age + " old and I stay at "
//  + address + " My phone number is " + contact

//  Javascript Operators

// Arithmetic Operators
// Assignment Operators
// Comparison Operators
// String Operators
// Logical Operators
// Bitwise Operators
// Ternary Operators
// Type operators: this is used to check the datatype of any variable

// let myValue = document.querySelector('#myValue')
// let btnGet = document.querySelector('#btnGet')

// btnGet.addEventListener('click',(e) => {
// if(myValue.value== '')
// {
//     alert("Please enter a value to get result")
// }
// else{
//     e.preventDefault()
//     alert(myValue.value)
// }
// })

// let myValue = document.querySelector('#myValue')
// let btnGet = document.querySelector('#btnGet')

// btnGet.addEventListener('click',(e) => {
// if(myValue.value.trim()== '')
// {
//     alert("Please enter a value to get result")
// }
// else{
//     e.preventDefault()
//     target.textContent= myValue.value
// }
// })

// If you use confirm in an alert method it gives you the ability to click on okay and cancel

// A Function is a block of codes that performs a task, 

// let obj = {
// name: 'Anya',
// age: 40, 
// state: 'Ebonyi',

// bio(){
//     return this.name + this.age + this.state
// }

// }

// let clickvalue = document.querySelector('#informat')
// let target= document.querySelector("#main-header")
// informat.textContent= target.value
// clickvalue.addEventListener('click')
// {
//     e.preventDefault()
//     target.textContent= clickvalue.value
// }

// CONDITIONAL OPERATORS
// || is used to say or in conditional statement
// && is used to say and in conditional statement 

// Type conversion 
// In Javascript, this is called type casting.

// target.innerHTML = Number(num1.value) + Number(num2.value)
// target.innerHTML = parseFloat(num1.value) + parseFloat(num2.value)
// target.innerHTML = parseInt(num1.value) + parseInt(num2.value)


// Write a javascript program to calculate the area of a circle given the radius 
// Write a program to calculate the price of a good, when the discount of 5% is given
// Write a program to calculate simple interest when the principle, rate and time is given
// Calculate the area of a triangle when the base and the height is given.


// let age = document.querySelector('#age')
// let name = document.querySelector('#name')
// let btnVote= document.querySelector('#btnVote')

// btnVote.addEventListener('click', ()=> {
//     if(age.value <= 18 || age.value > 100){

//         alert(`Please ${name.value} you cannot vote now`)
//     } 
//     else{
// alert(`${name.value} please vote`)
//     }
// })

//Question 1

// var radius = prompt("Enter radius of the circle: ");
//   if (radius <= 0) {
// console.log("Radius must be a positive number.");
//   }
//   else{
//   var area = 3.142 * Math.pow(radius, 2);
//  console.log("The area of the circle with radius", radius, "is", area);
// }

// QUESTION 2
// var originalprice = prompt("Enter the Original price: ");
// var discountpercentage = prompt("Enter the Discount Percentage: ");

//   if (originalprice <= 0 || discountpercentage < 0 || discountpercentage > 100) {
//     console.log("Invalid input. Please provide valid values.");
//   }


// else{  
// var discountamount = (discountpercentage / 100) * originalprice;
// var discountedprice = originalprice - discountamount;
// console.log("The price after a ", discountpercentage, "% discount is ", discountedprice);
// }

// QUESTION 3

// var principal = prompt("Enter Principal: ");
// var rate = prompt("Enter Rate: ");
// var time = prompt("Enter Time: ");
//   if (principal <= 0 || rate <= 0 || time <= 0) {
//     console.log("Invalid input. Please provide valid values.");
//   }
// else{
// var interest = (principal * rate * time) / 100;
// console.log("The simple interest is", interest);
// }

// QUESTION 4

// var base = prompt("Enter Base: ");
// var height = prompt("Enter Height: ");
//   if (base <= 0 || height <= 0) {
//     console.log("Invalid input. Please provide valid values.");
//   }
// else{
// var area = (base * height) / 2;
// console.log("The area of the triangle is: ", area);
// }
