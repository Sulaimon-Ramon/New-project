//------------------------------Learning Javascript--------------------------------//


// Variables

let name = "Ramon";
console.log(name);

let surname = "Sulaimon";
console.log(surname);

let age = 18;
console.log(age);


const fullName = "Vanessa";
let fullName1 = "Jennifer";

// Concatenation

console.log("My full name is " + surname + " " + name);

console.log(fullName + " " + fullName1);



// Operators

const price1 = 5;
const price2 = 100;
console.log(price1 + price2);
console.log(price1 * price2);
console.log(price2 / price1);


let length = 5;
let breath = 10;
const area = length * breath;

console.log(area);


// Case changing

let text = "i am a software engineer";
console.log(text.toUpperCase());

// length of a text

let text1 = "Ramon is a good boy";
console.log(text1.length)

// Character At

let text2 = "I am a Liverpool fan";
console.log(text2.charAt(7));

// Slice

var text3 = "Apple, Banana, Mango, Cashew";
var part = text3.slice(7);
console.log(part);

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


let studentName = "John Doe"
let scores = [60, 80, 90]

let totalScore = 0;

scores.forEach((score) => {
    totalScore += score;
});
console.log(totalScore);

let average = totalScore / scores.length;
console.log("Average is : ", average);

let studentGrade;

if (average >= 85) {
    studentGrade = "A";
} else if (average >= 75) {
    studentGrade = "B";
} else if (average >= 65) {
    studentGrade = "C";
} else if (average >= 55) {
    studentGrade = "D";
} else if (average >= 45) {
    studentGrade = "E";
} else {
    studentGrade = "F";
}

let student = {
    name: studentName,
    scores: scores[1],
    average: average,
    grade: studentGrade,
};
console.log(student);




var studentAge = 16;
paidTuition = true;
have5Credits = true;
passedJAMB = true;

if (studentAge >= 16 && paidTuition && have5Credits && passedJAMB) {
    console.log("You are admitted");
} else {
    console.log("Sorry you are not admitted");
}


var requiredCandidateAge = 18;
var candidateAge = 18;

if (requiredCandidateAge == candidateAge) {
    console.log("You are qualified to join the Army");
} else {
    console.log("You are not qualified to join the Army")
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



let occupation1 = "lawyer";

if (occupation1 == "lawyer") {
    console.log("works in a court");
} else if (occupation1 == "doctor") {
    console.log("works in a hospital");
} else if (occupation1 == "engineer") {
    console.log("works in a factory");
} else if (occupation1 == "teacher") {
    console.log("works in a school");
} else if (occupation1 == "farmer") {
    console.log("works in a farm");
} else {
    console.log("unknown occupation");
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



let score = 56;
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


let occupation = "farmer";

switch (occupation) {
    case "doctor":
        console.log("works in a hospital");
        break;
    case "teacher":
        console.log("works in a school");
        break;
    case "engineer":
        console.log("works in a factory");
        break;
    case "farmer":
        console.log("works in a farm");
        break;
    default:
        console.log("unknown occupation");
}



// Loops

// For Loop

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

for (number = 2; number <= 30; number += 2) {
    console.log(number);
}

// While Loop

var r = 0;
while (r < 10) {
    console.log(r);
    r++;
}

var countdown = 20;

while (countdown >= 0) {
    console.log(countdown);
    countdown--;
}


// Array

var fruits = ["Mango", "Banana", "Peach", "Pear", "Cashew", "Orange", "PineApple"];

console.log(fruits);
console.log(fruits[2]);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}



const cars = ["Toyota", "Mercedes", "Ferrari", "Porsche", "Lamboghini"];

console.log(cars);
console.log(cars[2]);

let sizeofCars = cars.length;

console.log(sizeofCars);

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}



let i = 0;
while (i < cars.length) {
    console.log(cars[i]);
    i++;
}


const house = ["mansion", "bungalow", "duplex", "flats"]

var j = 0;

while (j < house.length) {
    console.log(house[j]);
    j++;
}

const person = {
    name: "Haryindey",
    greet() {
        console.log("Good Morning", this.name)
    }
}

person.greet();


// Array of Objects

const car = {
    model: "BMW",
    year: "2025",
    color: "Red",
    drive() {
        console.log("The car is moving");
    }
}
car.drive();

console.log(car);


const books = [];

books[0] = "Things fall apart"
books[1] = "Titanic"
books[2] = "Fifty shades of grey"
books[3] = "Twillight"
books[4] = "Lekki headmaster"
books[5] = "Sweet sixteen"


// Returns the lenght of an array

console.log(books.length);

console.log(books.sort());


// Reverse the elements in an array

console.log(books.reverse());


// Pop() method. remove from the end of an array 

books.pop();
books.pop();
console.log(books);

// shift() method. remove from the beginning of an array

books.shift();
console.log(books);



const newBooks = ["Things fall apart", "Titanic", "Fifty shades of grey", "Twillight", "Lekki headmaster", "Sweet sixteen"]
for (i = 0; i < newBooks.length; i++) {
    console.log(newBooks[i]);
};

//  Push() method.   Add to the end an array 

newBooks.push("Van helsing");
console.log(newBooks);

// Get the index position of an element in an array

console.log(newBooks.indexOf("Titanic"));

// To check if an element is in an array

console.log(newBooks.includes("Titanic"));


// unshift() method. add an element to the beginning of an array

newBooks.unshift("Think big");
console.log(newBooks);


// Converts all elements in an array to string

myArray = newBooks.toString();
console.log(myArray);


const firstNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
console.log(firstNum);


const numsReversed = firstNum.toReversed();
console.log(numsReversed);

const numSort = firstNum.toSorted();
console.log(numSort);

firstNum.forEach((num) => {
    console.log(num * 2);
});

const students = {
    Name: "Richard",
    Sex: "Male",
    Age: "16",
    phoneNumber: "08064324942",
    Name1: "Joy",
    Sex1: "Female",
    Age1: "18",
    phoneNumber1: "08062344249",
}

console.log(students);


// Sets

const mySet = new Set();
mySet.add("bro");
mySet.add("sis");
mySet.add("mom");
mySet.add("dad");
mySet.add("cousin");
mySet.add("nephew");

console.log(mySet.size);
console.log(typeof mySet);
console.log(mySet.has("boys"));

console.log("mySet instanceof Array " + (mySet instanceof Array));

mySet.delete("bro");
console.log(mySet);


const setArray = [...mySet];
 
console.log(typeof setArray);
console.log(setArray);


for( let i = 0; i < mySet.size; i++){
    console.log(i);
}

for (let x of mySet){
    console.log(x);
}


// Math-method

// Generate a random number
console.log(Math.random());

// pi = 3.14
console.log(Math.PI);

// Round off a number
console.log(Math.round(4.5));

// returns the integer
console.log(Math.floor(4.9));

console.log(Math.ceil(5.2));

// Generates random numbers less than 10

myNumber = Math.random() * 10;
console.log("myNumber = " + myNumber);

// Generates random numbers less than 10 and rounds it off

myNumber = Math.random() * 10;
console.log("myNumber = " + Math.round(myNumber));


// DICE-GAME

let Number = Math.floor * 1;

console.log(Math.random(Number));

let playerRoll = Math.floor(Math.random() * 6) + 1;
let computerRoll = Math.floor(Math.random()) + 1;

console.log(playerRoll);
console.log(computerRoll);

if (computerRoll > playerRoll) {
    console.log("Computer wins");    
}
else if(playerRoll > computerRoll){
    console.log("Player wins");
}
else{
    console.log("It's a draw");
}



console.log("Min value : " + Math.min(0, -20, 5, 7, 200, 9, 5));
console.log("Min value : " + Math.max(0, -20, 5, 7, 200, 9, 5));

const Newscores = [40, 80, 70];
console.log(Math.min(...Newscores));
console.log(...Newscores);
console.log(Newscores);


// MATH-Constants

console.log("Math.PI : " + Math.PI);
console.log("Math.E : " + Math.E);

console.log(Math.pow(5, 2));

r = 5;

Area = Math.PI * Math.pow(r, 2);
console.log("Area = " + Area);


// SQUARE ROOT!!!

myNumber = Math.sqrt(25);

console.log(myNumber);


// Functions

// Date

const firstDate = new Date();
let time = firstDate.getHours() + ":" + firstDate.getMinutes() + ":" + firstDate.getSeconds();
console.log(time);
console.log(firstDate);


date = new Date();
console.log(date);

let myDate = new Date();
const month = myDate.toLocaleString('default', { month: 'long' });
console.log(month);
console.log("my Date:" + myDate);
console.log(myDate.getDate());
console.log(myDate.getMonth() + 1);


function add2Numbers(a, b) {
    c = a + b;
    console.log(c);
    return c;
}

d = add2Numbers('boy', 50);
console.log(typeof d);



function multiply(x, y) {

    z = x * y;
    console.log(z);
    return z;
}

e = multiply(3, 20);
console.log(typeof e);


const stateCapital = new Map([
    ["Anambra", "Awka"],
    ["Oyo", "Ibadan"],
    ["Enugu", "Enugu"]
])

console.log(stateCapital);
console.log([...stateCapital][0]);
state = [...stateCapital][0]
city = state.toString()
console.log(city);


function area1(length1, breadth1) {
    return length1 * breadth1;
}

console.log(area1(5, 10));


function isSame(str1, str2) {
    return str1 === str2;
}

console.log(isSame("Ramon", "Sulaimon"));


const checkedGuest = new Set();

function checkIn(guestname) {
    if (checkedGuest.has(guestname)) {
        console.log(guestname + " Already checked in");
    } else {
        checkedGuest.add(guestname);
        console.log(guestname + " Added Successfully");
    };
};

checkIn("Ramon");
checkIn("Haryindey");
checkIn("Ramon");


const searchName = "Olajide";
if (checkedGuest.has(searchName)) {
    console.log(searchName + " is present");
} else {
    console.log(searchName + " is absent");
}

console.log(checkedGuest);
checkedGuest.clear();
console.log(checkedGuest);


function newPerson(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
Dad = new newPerson("John", "Doe", 50, "blue");
Mum = new newPerson("Jane", "Doe", 48, "green");
Child = new newPerson("Junior", "Doe", 30, "white");

console.log(Dad);
console.log(Mum)
console.log(Child);


mySchool = {
    name: "Greenwood High",
    location: "Los Angeles",
    established: 2005,

    branch: {
        name: "Greenwood west",
        location: "Los Angeles",
        established: 1996,
    }
};
console.log(mySchool);
console.log(mySchool.branch);


let child = {
    fullName: "Sulaimon Ramon",
    school: "Aptech",
    yearofBirth: 2006,
    calculateAge: function () {
        return 2026 - this.yearofBirth;
    },
};
console.log(child.fullName + " is studying at " + child.school + " and is " + child.calculateAge() + " years old.");


var firstName = "John";
var lastName = "Doe";

function myFullname(firstName, lastName) {
    return firstName + " " + lastName;
}

console.log(myFullname("John", "Doe"));


function greet(name) {
    console.log("Good morning" + " " + name)
}
greet("Olarewaju");

function getHighest(x, y, z) {
    if (x > y && x > y) {
        console.log("x is the highest :" + x);
    } else if (y > x && y > z) {
        console.log("y is the highest :" + y);
    } else {
        console.log("z is the highest :" + z);
    }

}

getHighest(10, 60, 30);


// Arrow Function

let myFunction = (b, c) => b * c
console.log(myFunction(5, 3));


var myName = (x, y) => x + " " + y;
console.log(myName("Sulaimon", "Ramon"));


var greetings = (c, d) => c + " " + d;
console.log(greetings("Good Morning", "Olajide"));













