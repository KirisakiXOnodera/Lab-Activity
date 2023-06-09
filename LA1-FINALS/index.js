/* VARIABLE DECLARATION */

let number1 = 11;
let number2 = 22;
let total = number1 + number2;

console.log(total);
console.log(number2 - number1);
console.log(total * number1);
console.log(total / number2);
console.log(total % number2);
console.log(number1**2);
console.log();

let fname = "Juan";
let lname = "Dela Cruz";
let result = fname.concat(" ", lname)

console.log(fname + " " + lname);
console.log(result);
console.log();

let x = true;
let y = false;

console.log((number1 > number2) == x)
console.log(y == x)
console.log(number1 <= number2)
console.log(number1 != number2)
console.log((number2 > number1) && (number1 < number2));
console.log();

/* CONDITIONAL STATEMENTS */

// if statement
    let amount = 2500;

    if(amount == 2500){
        console.log("amount is equal to 2500")
    }

    // if...else statement
    if(amount < 2500){
        console.log("you need more money")
        }
    else{
        console.log("amount is sufficient")
        }

    // if...else if statement
    if(amount > 0 && amount <= 1000){
        console.log("amount not sufficient")
    }
    else if(amount > 1000 && amount < 2500){
        console.log("increase amount a bit more")
    }
    else if(amount >= 2500){
        console.log("amount is OK")
    }
    console.log();

    /* ITERATIVE STATEMENTS */

    // for statement
    for(let i = 1; i <= 10; i++){
        console.log("10 * " + i + " = " + i*10)
    }
    console.log();

    // do...while statement
    let num = 43980;
    let count = 0;

    do{
        num = num/10;
        count++;
    } while(num > 1);

    console.log("the number of digit is " + count)
    console.log();

    // while statement
    let val = 98472;
    while(val >= 10){
        val = val/10;
    }

    console.log("the first digit is " + Math.trunc(val))