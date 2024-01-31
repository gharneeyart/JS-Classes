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

//Blard video
// You can write javascript inline
// different types of console
// console.log()
// console.error() - to throw error message
// console.warn() - 
// console.info
console.log("hi, there");
console.error("Error msg!");
console.warn("Error msg!");
console.info("Error msg!");






