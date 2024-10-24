//Conditionals 
/*
if(condition){
    action to be carried out
}
*/

/*
let occupation = 'software developer';
// simple if statement
if(occupation === 'software developer'){
    alert(occupation)
}

//if...else statement
if(occupation === 'software developer'){
    alert(occupation)
}else{
    alert('You\'re not a software developer');
}

//if..else if statement
if(occupation=== "software developer"){
    alert(occupation)
}else if(occupation === 'teacher'){
    alert(occupation)
}else{
    alert('Tell me your occupation')
}

let acctBalance;
if(acctBalance <= 10){
    alert("You're broke! Get a job")
}else if(acctBalance > 10 && acctBalance <=50){
    alert('You\'re struggling. Do more jobs')
}else if(acctBalance > 50 && acctBalance <= 100){
    alert('You\'re making money')
}else{
    alert('Tell me which business you do?')
}

//Tip calculator
let price = 65;
let tip;
if(price < 50){
   alert( tip = 0.5 * price);
}else if(price >= 50 && price <= 150){
    alert(tip = 0.2 * price);
}else{
    alert(tip = 0.1 * price);
}
*/

//Functions in JS
let tip;

function tipCalculator(price) {
    let tip;
    if(price < 50){
        alert( tip = 0.5 * price);
     }else if(price >= 50 && price <= 150){
         alert(tip = 0.2 * price);
     }else{
         alert(tip = 0.1 * price);
     }
}
// tipCalculator(80)
// tipCalculator(120)
// tipCalculator(620)

function product(num1, num2){
    return num1 * num2
}

//switch statement
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

let age;

switch(age){
    case 18:
        console.log('Eligible to vote')
        break;
    case 16:
        console.log('Keep growing!!')
        break;
    default:
        console.log('Are you an Asiwaju?')
        break;
}

function averageOfNums(num1, num2, num3){
    let sum = num1 + num2 + num3;
    let average = sum / 3;
    return average
}

console.log(averageOfNums(34, 23, 76));

function averageOfNums2(arr){
    let sum = 0;
    arr.map(num => sum += num)
    let average = sum/arr.length;
    console.log(average)
}
averageOfNums2([34, 23, 76, 84, 23, 67, 90, 671])