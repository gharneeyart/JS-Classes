console.log("Hello Wealth")

// Variables
// Variables are names used to store data in js
// variable declarators var, let, const
// creating variables
// declarator + varName = value_of__var
var day = "Monday";
console.log(day)
const age = 20;
console.log(age)
// var name must not start with number and any other character except $ and _ , always start with small case followed by uppercase(camel casing-myAge)
const isMarried = false;
const _date = "29/01/2024";
let $atmPin = 2342;
console.log($atmPin, _date, isMarried);

// Difference between var, let and const
// var can re-declared and reassigned
// re-declaring
var bmi = 23.8;
console.log(bmi);
var bmi = 22.5;
console.log(bmi);
// re-assigning
    bmi = 21.7;
    console.log(bmi);

//let can not be re-declared but can be reasigned
// is used or Good for updating values
// doesn't allow sharing of variable name
let middleName = "kehinde";
console.log(middleName);

// reassigning
middleName = "ganiyat"
console.log(middleName);

// const does not allow for redeclaration or reassigning


//Data types in JS
// - String
// - Number
// - booleans
// - null/undefined
// - Arrays
// - Objects
// - BigInt
// - Symbol

// use "typeof" to check for data type

// STRINGS
// String are text/data stored in either single or double quotes.

const singleString = 'boy'
console.log(singleString);
const doubleString = "girl"
console.log(doubleString);
console.log(doubleString, "==>", typeof doubleString);

// Numbers
const gravity = 9.8
const x = "55"
console.log(gravity, typeof gravity);

console.log(bmi + gravity)
console.log(gravity + x); //+ is used for concatenating 
console.log(x/gravity); //js is converting x to number instead of string
console.log(singleString/gravity);// NaN- not a number

// Boolean true/false
console.log(isMarried);
const isLoggedIn = true;

if (isLoggedIn){
    console.log("Welcome to my world"); 
}

// NULL/undefined
let food 
console.log(food);
    food = null;
console.log(food);

// Array is a collection of items enclosed in a square bracket.
const arr = ["keyboard", 10, false, null, [1, 3, 4]];
console.log(arr);
const fruit = ["mango", "orange", "watermelon", "pineapple", "pawpaw"];
console.log(fruit);

// Objects 
// Object is a data structure that stores data in key-value pairs. e.g. key1-value1
const myObj = {
    carbohydrate: "Garri",
    protein: "Beef",
    fatAndOil: "Butter",
    vitamin: "Orange",
    water: "watermelon",
    minerals: "Sea food",
}
console.log(myObj);
// Task
const Wealth = {
    firstName: "Ganiyat",
    lastName: "Shuaib",
    age: 20,
    gender: "Female",
    isMarried: false,
    skills:[ "Javascript", "Art making", "Html", "CSS", "Bootstrap"],
    occupation: "software developer",
    address: {
        city: "Mushin",
        state: "Lagos",
    } 
}
console.log(Wealth);

const fullName = (Wealth.firstName + " " + Wealth.lastName)
console.log("Full Name:", fullName);

const topSkill = Wealth.skills[0]
console.log("My Top Skill is", topSkill);

const cityOfResidence = Wealth.address.city;
console.log("City of Residence:", cityOfResidence);

// const fullName = (firstName + " " + lastName);
// console.log(firstName + lastName);

// getFullName = function() {
    //         console.log(firstAndLast)
    //         return firstAndLast;
    // }   
//Assignment
//from the object above, print to the console the following:
// fullName = "Ganiyat Shuaib"
// topSkill = "Javascript"
// cityOfResidence = "Mushin"

// String properties and methods
// properties - length, index
// String methods - toUpperCase, toLowerCase, concat, split, slice, trim, replace, subString. etc

const sch = "Techstudio Academy"
const str1 = "My name is"
const fullStatement = ""

//length
console.log(sch.length);
//or
const strLen = sch.length
console.log(strLen);

// index
//it picks the first occurence of a substring
console.log(sch.indexOf("d"));
console.log("Character at index 7 is", sch[7]);

//toUpperCase/toLowerCase
console.log(sch.toUpperCase());
console.log(sch.toLowerCase());

// concatenation of strings
// concat
const concatString = str1.concat(fullName)
console.log(concatString);
const concatStrings = str1 +" "+ fullName
console.log(concatStrings);
// Template literals
const tem = `Hi there!, ${str1} ${fullName}, I am ${Wealth.age} years old`
console.log(tem);

// split
console.log(sch.split(""));
console.log(sch.split(" "));
console.log(sch.split("s"));
console.log(tem.split(","));

// slice(start, end) 0, 1, 2, etc
console.log(tem.slice(0, 30),"...");
const slicedword = `${tem.slice(0, 30)}...read more`
console.log(slicedword);

// substring(start, end)
console.log(tem.substring(0, 35),"...");
const slicedwords = `${tem.substring(0, 30)}...read more`

//OPERATORS
// - Arithmetic operator
// - Assignment operator
// - Comparison operator
// - Logical operator

// Arithmetic Operators +, -, *, **, /, %, ++, --
let y = 20;
let z = -10
console.log(x, typeof x);
let agg = Number(x) + y - z
console.log(agg);
// modulus %
// it is used to write some logic
// dividing by 2. even no gives 0. odd no gives 1
// 20 % 3 == 6r2  the remainder is the modulus
console.log(10 % 6);
console.log(25 % 4);
console.log(40 % 2);
console.log(5 % 2);

//Assignment operator =, +=, -=, /=
// They are used to assign values to variables.
// sigle = is used to assign a value
const mySiblings = [ "Adedeji", "Ibrahim", "Rasheed", "Ganiyu"]
console.log(mySiblings);
const mySibling = {
    firstChild: "Adedeji",
    secondChild: "Ibrahim",
    thirdChild: "Rasheed",
    fourthChild: "Ganiyu"
}
console.log(mySibling);
// += add, -= subtract, modify an existing variable
let n = 8
console.log(n);//8
    //n = n + 10
    n += 10
console.log(n);//18
    //n = n -20
    n -= 20
    console.log(n);//-2
    n /= 2
console.log(n);//-1


// Logical operators &&, ||, !
const T = true
const F = false
const isAdult = true


console.log(age >= 18);//true
//&& - the 2 condition must be true before the code can run
// Logical "and"
console.log(T && T);//true
console.log(T && F);//false
console.log(F || T);//false
console.log(F && F);//false

if (age >= 18 && isAdult && isMarried) {
    console.log("You can take alcohol"); 
}

// || Logical "or"
console.log(T || T);//true
console.log(T || F);//true
console.log(F || T);//true
console.log(F || F);//false

if (age >= 18 && isAdult || isMarried) {
    console.log("You can take alcohol"); 
}

// Logical "not" or negate
if (age >= 21 || isAdult && !isMarried) {
    console.log("You can take alcohol"); 
}

let pwd = "mypassword123#";
if (pwd.length > 11 && pwd.includes("#")) {
    console.log("strong password");
} else {
    console.log("Your password is not strong enough!");
}
let pw = "mypassword123";
if (pw.length > 11 && pw.includes("#")) {
    console.log("strong password");
} else {
    console.log("Your password is not strong enough!");
}

// Comparison operator ==, ===, !=, !==
// basically used to compare values
// == loose comparison: compares the values of the variables and not data types. it ignores the data type
console.log(x);//"55"
let newNum = 55
console.log(x == newNum);//true

//== strict comparison: compares the values of the variables and their data types.
console.log(x === newNum);//false
console.log(x != newNum);//false
console.log(x !== newNum);//false

// Math methods: floor, ceil, random, min, max
// Math.floor() returns only the whole number part of a decimal (Not rounding up/dowm)
let num1 = 9.64577
console.log(Math.floor(num1));

// Math.ceil() this round up to the nearest whole number regardless of the decimal parts.
console.log(Math.ceil(num1));

// Math.random () is used to generate random numbers between 0 and 9
console.log(Math.random() * 1000000);
const ranNum = Math.random() * 1000000
const OTP = Math.floor(ranNum)
console.log(`Enter your secret code ${OTP} to continue`);

const dieRan = (Math.random() *6)
console.log(dieRan);
const die = Math.ceil(dieRan)
console.log(`${die}`);

// Conditionals if, if-else, else-if-else, switch, ternary operator

// if
// if (boolean condition) {
//     run this codes
// }
if (isMarried) {
    console.log("Hello Mrs");
}
if (!isMarried) {
    console.log("Hello Mrs");//not
}

// if-else
if (isMarried) {
    console.log("Hello Mrs");
} else {
    console.log("Hello Miss");
}

// else-if-else
// let pass = "sampleABC123#"
// if (isLoggedIn && pass.length < 8) {
//     console.log("Weak password");
// }else if(isLoggedIn && pass.length > 8 && pass.includes("A")){
//     console.log("Moderately Strong Password");
// }else if(isLoggedIn && pass.length > 10 && pass.includes("#") || pass.includes("@")){
//     console.log("Very Strong Password");
// }

let pass = "sample12323A"
if(isLoggedIn && pass.length < 8 && !pass.includes(2)){
    console.log("Weak password");
}else if(isLoggedIn && pass.length > 8 && pass.length <= 12  && pass.includes("A") && !pass.includes("#")){
    console.log("Moderately Strong password");
}else if(isLoggedIn && pass.length > 10 && pass.includes("#") || pass.includes("@")){
    console.log("Very Strong password");
}else{
    console.log("No Match");
}

// const acctBal = 3000
// let atmPin = 1234
// const isAuthenticated = false;
// if (isAuthenticated && atmPin == 1234) {
//     console.log("Transaction successful! Your account balance is ----");
// }else console.log("Transaction declined");

const username = "user"
const acctBal = "1000";
const atmPin = "123#"
if (username === "user"  && atmPin === "1234") {
    console.log(`Transaction successfully! Account:${acctBal}`);
} else {
    console.log("Transaction failed!");
}

// Switch statement
const days = Math.random() * 7;
const myDay = Math.floor(days)
switch (myDay) {
    case 0:
        console.log("Today is Sunday");
        break;
        
    case 1:
        console.log("Today is Monday");
        break; 
    case 2:
        console.log("Today is Tuesday");
        break; 
    case 3:
        console.log("Today is Wednesday");
        break; 
    case 4:
        console.log("Today is Thursday");
        break; 
    case 5:
        console.log("Today is Friday");
        break; 
    case 6:
        console.log("Today is Saturday");
        break; 
    default:
        console.log("Invalid Entry");
}

//Using switch statement create a banking system that authenticate user, deposits, withdraws and checkbalance.

// let myInput = prompt("Enter Username or PIN");
// console.log(myInput);
// let loginPin = myInput.toLowerCase()
// console.log(myInput, loginPin);

// let accName = "Ganiyat";
// let atmPIN = "1234";
// let deposit = "deposit";
// let withdraw = "withdraw";
// let checkbalance = "balance";
// let myAccBal = 3000;

// const isAuth = loginPin === accName.toLowerCase() || loginPin === atmPIN;
// console.log(isAuth);

// if (isAuth) {
//     console.log("Welcome to JSF bank");
//     let trans = prompt("What would you like to do today?").toLowerCase()
//     // console.log(trans);

//     switch (trans) {
//         case deposit:
//             console.log("Deposit");
//             let depAmt = Number(prompt("Enter amount to deposit"))
//             myAccBal += depAmt;
//             console.log(`Your new account balance is $${myAccBal}`);
//             break;
//         case withdraw:
//             console.log("Withdraw");
//             let witAmt = Number(prompt("Enter amount to withdraw"));
        
//             if (witAmt >= myAccBal) {
//                 console.log(`Insufficient fund`);
//             } else {
//                 myAccBal -= witAmt;
//                 console.log(`Your new account balance is $${myAccBal}`);
//             }
//             break;
//         case checkbalance:
//             console.log(`Your account balance is $${myAccBal}`);
//             break;
    
//         default:
//             console.log("Invalid Transaction");
//             break;
//     }

// } else {
//     console.log("Wrong PIN or username");
// }

// Ternary operators
// syntax:
// booleanCondition ? expression1 : expression2

const isAdmin = true;
isAdmin ? console.log("Logged in Successfully") :console.log("Unauthorized user");


// Arrays
// Array properties and methods
// length, index, shift, unshift, pop, push, splice, join, sort, reverse

const cars = ["bmw", "volvo", "mercedes", "toyota", "tesla", "lambo", "porche", "dodge"]
// Length
console.log(cars.length);
// Index
const bm = cars[0]
console.log(bm.toUpperCase());
const tes = cars[4]
console.log(tes.toUpperCase());
//last index = cars.length - 1
const lCar = cars.length - 1;
console.log(cars[lCar]);

const cart = [
    {
        sardin: 12,
        egg: 5,
    }
]
let sard = cart[0].sardin
    console.log(sard);
    sard -= 4
    console.log(sard);

//modifying Array
console.log(cars[1]);
cars[1] = "lexus"
console.log(cars[1]);
console.log(cars);

// unshift() or push() for adding one item at beginning and at end respectively
// unshift()
cars.unshift("ford");
console.log(cars);
// push()
cars.push("ferrari")
console.log(cars);

// shift() or pop() to remove one item from the beginning and at the end respectively
cars.shift()
console.log(cars);
cars.pop()
console.log(cars);

// Splice
// Syntax: splice(start, numDelItems, addItems)
// Using splice to delete items
const del3Cars = cars.splice( 2, 3)
console.log(del3Cars);
console.log(cars);
// Using splice to add items
const add3Cars = cars.splice(2, 0, "mazda", "kia", "honda")
console.log(cars);

// Slice
const top3Cars = cars.slice(0, 3);
console.log(top3Cars);
const mid3Cars = cars.slice(3, 6);
console.log(mid3Cars);
const las3Cars = cars.slice(6, 8)
console.log(las3Cars);

let mNum = [20, 40, 5, 100, 30, 15, 10, 70, 2]
//sort
const ascNum = mNum.sort((a, b) => a - b)
console.log(ascNum);
const desNum = mNum.sort((a, b) => b - a)
console.log(desNum);
// mNum.sort(function(a,b) {
//     return a - b;
// })

// Looping/iteration
// looping is use when you want to carry out a repititivebtask or process.
console.log( "=====Loop=====");
// console.log("I am a Fullstack Developer 1");
// console.log("I am a Fullstack Developer 2");
// console.log("I am a Fullstack Developer 3");
// console.log("I am a Fullstack Developer 4");
// console.log("I am a Fullstack Developer 5");
// console.log("I am a Fullstack Developer 6");
// console.log("I am a Fullstack Developer 7");
// console.log("I am a Fullstack Developer 8");
// console.log("I am a Fullstack Developer 9");
// console.log("I am a Fullstack Developer 10");

// for loop (for, for-of, for-in)
// while loop
// do-while

//for
// for(initial, range/condition/boolean, increment/decrement){
//     run this code
// }
for(let i= 1; i <= 10; i++){
    console.log(`I am a Fullstack Developer ${i}`);
}
for(let i= 1; i <= 12; i++){
    console.log(`${i} x 12 =  ${12*i}`);
}
for(let i= 1; i <= 12; i++){
    if(i % 2 !==0){
        continue
    }
    console.log(`${i} x 12 =  ${12*i}`);
}
// While loop
let m = 5
while (m <= 5) {
    console.log(`This is while loop ${m}`);
    m++;
}
m = 12
while (m >= 1) {
    console.log(`${m} x 12 = ${12*m}`);
    m--;
}

// for-of
// for(const car of cars){
//     console.log(`The car brand is ${car.toUpperCase()}`);
// }
for(const car of cars){
    if (!car.endsWith("a")) {
        continue;//means skip or 
    }
    console.log(`The car brand is ${car.toUpperCase()}`);
}
// Task
let marks = [1, 5, 3, 2, 7, 4, 6, 8, 10, 9]
// loop through the marks array and output the following
// "Your score is 5 you passed" (for mark > 5)
// "Your score is 3 you failed" (for mark < 5)
// const asceNum = marks.sort((a, b) => a - b)
// console.log(asceNum);
// for(const mark of marks){
//     if (mark < 5) {
//         console.log(`Your score is ${mark}, you failed`); 
//     }else if (mark >= 5){
//         console.log(`Your score is ${mark}, you passed`);
//     }
//     continue;
// } my solution
let mark
for(mark of marks){
    mark < 5 ? console.log(`Your score is ${mark}, you failed`) : console.log(`Your score is ${mark}, you passed`);;
}

const errCode = ['E', '@', '-', 'l', '@', 'e', 'a', '@', 'r', 'n', '@', 'i', '@', 'n', 'g']
// This is a corrupted word, clean it up to get the correct word "E-learning"
let word = [];
let bug = "@"
for(let w of errCode){
    if(w !== "@"){
        word.push(w)
    }
}
console.log(word);
const cleanedCode = word.join("")
console.log(cleanedCode);

function name(params) {
    
}
// let myArr =[1, 2, 3, 2, 4, 3, 2]

// function cleanUpArray(myArr) {
//     let repeatedEntries = {};
//     let cleanedArray = [];
  
//     myArr.forEach((item) => {
//       if (repeatedEntries[item]) {
//         repeatedEntries[item]++;
        
//       } else {
//         repeatedEntries[item] = 1;
//         cleanedArray.push(item);
//       }
//     });
  
//     console.log("Original array:");
//     console.log(myArr);
  
//     console.log("Repeated entries:");
//     for (const key in repeatedEntries) {
//       console.log(`"${key}" appeared ${repeatedEntries[key]} times`);
//     }
  
//     console.log("Cleaned array:");
//     console.log(cleanedArray);
//   }
//     cleanUpArray(myArr);

//   const arrNum = [1, 2, 3, 4, 5]
  // check if there are at least three numbers in the array and returns an appropriate message if not.
//   function maxPrOf3(arrNum) {
//     if (arrNum.length < 3) {
//         return "Array must contain at least three numbers.";
//     }
    //  Validate that all elements in the array are numbers
    // for (const num of arrNum) {
    //     if (typeof num !== "number") {
    //         return "Array must only contain numbers.";
    //     }
    // }
    // Sort the array in ascending order
    // arrNum.sort((a, b) => a - b);

    // Two potential triplets are considered: the product of the two smallest and the largest, and the product of the three largest
    // Calculate products of potential triplets
    // const pr1 = arrNum[0] * arrNum[1] * arrNum[arrNum.length -1]
    // const pr2 = arrNum[arrNum.length - 3] * arrNum[arrNum.length - 2] * arrNum[arrNum.length -1]

    // The max product of these two possibilities is returned
    // Return maximum product
//     return Math.min(pr1, pr2)
//   }
  // This function ensures that the array is appropriately checked and processed to find the max product of the three numbers
//   console.log(arrNum);
//   const result = maxPrOf3(arrNum);
//   console.log(result);//60
  

//   function cleanUpArray(arr) {
//     let uniqueSet = new Set(arr);  // Set automatically keeps only unique values
//     let itemCount = {};            // This will store the count of each item
  
//     arr.forEach((item) => {
//       itemCount[item] = (itemCount[item] || 0) + 1;  // Increment count or set to 1 if not present
//     });
  
//     let uniqueList = Array.from(uniqueSet);
  
//     console.log("Original array:");
//     console.log(arr);
  
//     console.log("\nCount of each item:");
//     for (const key in itemCount) {
//       console.log(`"${key}" appeared ${itemCount[key]} times`);
//     }
  
//     console.log("\nNew array with only unique items:");
//     console.log(uniqueList);
//   }
//   cleanUpArray(myArr);
  

// Week 5
// Functions are block of code that performs a specific task
// is used to carry out a particular task
// Naming of functions - make it explanatory
//Example: getName, fetchProducts, updatePost, handleSubmit, login, register, createUser

// Creating Functions - 3
// function declaration method 
// function nameOfFunction(){
//     run this code
// }
// Hoisting of function - calling of function before declaration. NB- only works with functon declaration method
sayMyName();
  function sayMyName(){
    console.log("Your name is Ganiyat");
  }
  // Calling of functions/invoking functions
 

// Function Expression - It stores everything in a variable
// const nameOfFunction = function(){
//     run this code
// }

const showMsg = function(){
    console.log("This is a function expression");
}
showMsg();
showMsg();

// Arrow function
const login = () => {
if (!isLoggedIn) {
    console.log("Login Successful!");
}
else {
    console.log("Access denied!");
}
}
login();
login();
login();

// Function parameters and arguments
// use a default value to avoid undefined.. to avoid code breaking
function greetMe(fname, lname) {
    console.log(`Hello ${fname} ${lname}`);
}
greetMe("Ganiyat", "Shuaib")
greetMe("Kehinde")

// Create a function addNum, which accepts two number arguments and sums them
function addNum(first, second){
    console.log(`Sum of number is ${first + second}`);
}
addNum(2, 3)
const adNum = (a,b) => console.log(a+b);
adNum(5,4)
adNum(10, 13)

// Create a function that takes array as an argument, sort the array items and change them to uppercase 
const countries = ["Zimbabwe", "Togo", "Ghana", "Sudan", "Uk", "Spain"]
const fruits = ["mango", "orange", "watermelon", "pineapple", "pawpaw"];
const sortArr = (arr) => {
    let newCon = [];
    for (const elem of arr){
        newCon.push(elem.toUpperCase())
    }
    console.log(newCon);
    newCon.sort()
    console.log(newCon);
}
sortArr(countries)
sortArr(fruits)

const carss = ["bmw", "volvo", "mercedes", "toyota", "tesla", "lambo", "porche", "dodge"]
const sortArray = (arr) => {
    let newArr = []
    for (const item of arr){
        if(item.endsWith("a")){
            newArr.push(item.toUpperCase())
        }
    }
    console.log(newArr);
}
sortArray(carss)

// Javascript Challenge 1
// -Create a function ‘maxProductOfThree’
// -The function takes in array of numbers as arguments, i.e arrNum
// -It selects 3 numbers from the array that will give the maximum result when multiplied. i.e from arrNum, it’ll pick a, b, c and return their product axbxc, if that’s the three numbers from ‘arrNum’  that will give the higest results.
// -Example of using the function:
// maxProductOfThree(arrNum)    
// 12345 (maximum product)
// NB
// -Check for the number of items in the array, which must not be less than three numbers.
// -Check if items in the array is not a number. You can only use a number for the computation.

// Solution

function maxProductOfThree(arrNum){
    // Check if there are at least three items in the array
    if(arrNum.length < 3){
        return console.log("Array should have at least 3 items");
    }
    // Check for non-numeric items in the array
    const numericItem = arrNum.filter((n)=> typeof n === "number")
    console.log(numericItem);
    // Check if there are at least three numbers in the array
    if(numericItem.length < 3){
        return console.log("Array should have at least 3 numbers");
    }
    // sort the array in ascending order
    numericItem.sort((a, b) => a-b);
    console.log(numericItem);

    // To calc max
    const n = numericItem.length
    const maxProduct1 = numericItem[n-1] * numericItem[n-2] * numericItem[n-3]

    const maxProduct2 = numericItem[0] * numericItem[1] * numericItem[n-1]

    // Compare the two products and return the maximum
    const result = Math.max(maxProduct1, maxProduct2);

    console.log(`The maximum product is ${result}`);

}
const arrNum = [8, 7, true, -9, "fdgdg", -6, 0, false, 2]
maxProductOfThree(arrNum)

// modules import/export
import {outSide,extFunction} from "./help.js";
console.log(outSide);
console.log(extFunction(2,5));

import toDoList from "./data.js";
import {sthelse} from "./data.js";
console.log(sthelse);
console.log(toDoList);

// Object properties/methods
const bio = {
    studentId: 2024,
    firstName: "Ganiyat",
    lastName: "Shuaib",
    academy: "TSA",
    cohort: "TSA/DEC2023",
    course: "JSF",
    tutor: "Blard",
    isCompleted: false,
    read: function(){
        return `Hi, my name is ${this.firstName} ${this.lastName}, I'm a student of ${this.academy} studying ${this.course}. My tutor name is ${this.tutor}`
    }
} 
console.log(bio);
// Accessing object
console.log(bio.cohort);
console.log(bio.read());

// Creating new property
bio.education = ["bsc","gfr"]

// Destructuring object - picking out elements from object
const { firstName, lastName, academy } = bio;
console.log(firstName, lastName, academy);

// Spread operator - copy or combine
console.log(myObj);
const spreadData = {...myObj, ...bio}
console.log(spreadData);

// Callback functions
// Higher order array functions




//Blard video
// You can write javascript inline
// different types of console
// console.log()
// console.error() - to throw error message
// console.warn() - 
// console.info
// console.log("hi, there");
// console.error("Error msg!");
// console.warn("Error msg!");
// console.info("Error msg!");






