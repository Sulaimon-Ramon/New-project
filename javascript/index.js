
// Variables

let name = "Ramon";
console.log(name);

let surname = "Gonzalez";
console.log(surname);

// Concatenation

console.log("My full name is " + name + " " + surname);

let age = 18;
console.log(age);



// Operators

const price1 = 5;
const price2 = 100;
console.log(price1 + price2);
console.log(price1 * price2);
console.log(price2 / price1);


// loop

let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

// Case changing

let text = "i am a software engineer";
console.log(text.toUpperCase());

// length of a text

let text1 = "Ramon is a good boy";
console.log(text1.length)

// Character At

let text2 = "I am a Liverpool fan";
console.log(text2.charAt(7));


// ifelse statement


let votersAge = 18;
let haveVotersCard = false;

if (votersAge <= 10) {
    console.log("You are too young to vote");
} else if (votersAge >= 18 || haveVotersCard) {
    console.log("You are eligible to vote");
} else {
    console.log("You are not eligible to vote");
}


var age1 = 23;

if (age1 < 10) {
    console.log("You are a child");
} else if (age1 >= 10 && age1 <= 18) {
    console.log("You are a teenager");
} else {
    console.log("You are an adult");
}


var myChoice = "Rice";
var available = "Beans";

if (myChoice == available) {
    console.log("Buy it");
} else {
    console.log("Do not buy it");
}



var grade = 80;

if (grade <= 30 && grade <= 35) {
    console.log("You passed with an F");
} else if (grade > 35 && grade <= 40) {
    console.log("You passed with an E");
} else if (grade > 40 && grade <= 55) {
    console.log("You passed with an D");
} else if (grade > 55 && grade <= 70) {
    console.log("You passed with an C");
} else if (grade > 70 && grade <= 79) {
    console.log("You passed with an B");
} else {
    console.log("You passed with an A");
}



var studentAge = 16;
paidTuition = true;
have5Credits = true;
passedJAMB = true;

if (studentAge >= 16 && paidTuition && have5Credits && passedJAMB) {
    console.log("You are admitted");
} else {
    console.log("Sorry you are not admitted");
}



validPassport = true;
visa = true;
flightBooking = false;
hotelReservation = false;

if (((validPassport) || (visa)) && ((flightBooking) || (hotelReservation))) {
    console.log("You can travel");
} else {
    console.log("You cannot travel");
}


// Ternary operator

var votingAge = 10;
votingAge >= 18 ? console.log("you are eligible to vote") : console.log("You are not eligible to vote");


// Even and Odd checker

let num = 19;

if (num % 2 == 0) {
    console.log("The Number is an Even number");
} else {
    console.log("The Number is an Odd number")
}



// Switch statement

let day = 8;

switch (day) {

    case 1:
    console.log("Sunday");
    break;

    case 2:
    console.log("Monday");
    break;

    case 3:
    console.log("Tuesday");
    break;

    case 4:
    console.log("wednesday");
    break;

    case 5:
    console.log("Thurssday");
    break;

    case 6:
    console.log("Friday");
    break;

    case 7:
    console.log("Saturday");
    break;
}



let score =  56;
let grade1;

switch (true) {
   case score >= 90:
   grade1 = "A";
   break;

   case score >= 70:
   grade1 = "B";
   break;

   case score >= 60:
   grade1 = "c";
   break;

   case score >= 50:
   grade1 = "D";
   break;

   case score >= 40:
   grade1 = "E";
   break;

   case score >= 30:
   grade1 = "F";
   break;
}

console.log("Your grade is " + grade1);



// Arrays

var fruits = ["Mango", "Banana", "Peach", "Pear", "Cashew", "Orange", "PineApple"];

console.log(fruits);
console.log(fruits[2]);


















