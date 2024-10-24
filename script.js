// Variables In JS
// Variable declaration
let firstName;
var age;


//Assigning varaible
firstName = 'Prosper';
age = 12;

//declaration and assigning a variable at once
const pi = 3.14;
let $lastName = 'Ikechukwu';
var _gender = 'male'
 
//Data Types in JS
let isMarried = false;
let isShort = true;

let justinHeight = undefined;
let tpainBrain = null;

let tayoDetails = ['Omotayo', 'Alogba', 'male', false, 40, ['Blessing', 'Taiwo', 'Kehinde']];

let justinDetails = {
    firstName: 'Justin',
    lastName: 'Ike',
    age: 14,
    gender: 'male',
    siblings: ['Alvin', 'Tyla', 'Jhus']
};

console.log(tayoDetails[0]);
console.log(tayoDetails[4]);
console.log(tayoDetails[5][0]);

//access data in an object
console.log(justinDetails.firstName);
console.log(justinDetails.gender);
console.log(justinDetails.age);
console.log(justinDetails.siblings[1])

//Arithmetic operators
let num1 = 5;
let num2 = 10;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 / num2);
console.log(num1 * num2);
console.log(num1 % num2);
console.log(num1 ** num2);
console.log(num1++);
console.log(num2);
console.log(++num2);



let score = 0;
score += 5;

let personAge = 18;
let nationality = 'Nigerian';

// nationality = 'Mexican'

// if(personAge >= 18 || nationality === 'Nigerian') alert('You can vote in the next election');
let academicQualification;
let acctBalance = null;

console.log(typeof nationality)
console.log(typeof academicQualification)
console.log(typeof acctBalance)

if(personAge >= 18 || nationality === 'Nigerian') alert(`You are ${nationality}`);