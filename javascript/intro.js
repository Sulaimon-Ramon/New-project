

function multiply(x, y) {

    z = x * y;
    console.log(z);
    return z;
}

e = multiply(3, 20);
console.log(typeof e);

(function () {
    const message = "Hello World!";
    console.log(message);
})();

message = "Welcome";
console.log(message);

const person = {
    firstName: "Haryindey",
    lastName: "Olajide",
    dateofBirth: 2006,

    age: function (currentYear) {
        return currentYear - this.dateofBirth;
    }

};

console.log(person);
console.log(person.firstName + " " + person.lastName + " " + "is" + " " + person.age(2026) + " " + "years old.");


const person1 = new Object();
person1.firstName = "Ramon";
person1.lastName = "Haryindey";
person1.dateofBirth = 2000;
console.log(person1.lastName);


const books = [];

books[0] = "Things fall apart"
books[1] = "Titanic"
books[2] = "Fifty shades of grey"
books[3] = "Twillight"
books[4] = "Lekki headmaster"
books[5] = "Sweet sixteen"


console.log(books.length);
console.log(books.sort());
books.pop();
console.log(books);


const newBooks = ["Things fall apart", "Titanic", "Fifty shades of grey", "Twillight", "Lekki headmaster", "Sweet sixteen"]
for (i = 0; i < newBooks.length; i++) {
    console.log(newBooks[i]);
};

newBooks.push("Van helsing");
console.log(newBooks);
console.log(newBooks.reverse());

console.log(newBooks.indexOf("Titanic"));

console.log(newBooks.includes("Titanic"));

newBooks.shift();
console.log(newBooks);

newBooks.unshift("Think big");
console.log(newBooks);


myArray = newBooks.toString();
console.log(myArray);

const firstNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
console.log(firstNum);

firstNum.forEach((num) => {
    console.log(num * 2);
});


const numsReversed = firstNum.toReversed();
console.log(numsReversed);


let studentName = "John Doe"
let score = [60, 80, 90]

let totalScore = 0;

score.forEach((score) => {
    totalScore += score;
});
console.log(totalScore);

let average = totalScore / score.length;
console.log("Average is : ", average);

let grade;

if (average >= 85) {
    grade = "A";
} else if (average >= 75) {
    grade = "B";
} else if (average >= 65) {
    grade = "C";
} else if (average >= 55) {
    grade = "D";
} else if (average >= 45) {
    grade = "E";
} else {
    grade = "F";
}

let student = {
    name: studentName,
    score: score[1],
    average: average,
    grade: grade,
};
console.log(student);


myArray = ["boy", "girl", "mum", "dad",]

console.log(myArray);

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


for (let i = 0; i < mySet.size; i++) {
    console.log(i);
}

for (let x of mySet) {
    console.log(x);
}


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


// map

const userRole = new Map();


userRole.set("Ramon", "Admin");
userRole.set("Haryindey", "Editor");
userRole.set("Olajide", "Guest");

console.log(userRole);
console.log(userRole.get("Ramon"));
console.log(userRole.get("Olajide"));
console.log(userRole.size);
console.log(userRole.keys());
console.log(userRole.values());
userRole.delete("Olajide");
console.log(userRole.keys());


for (let user of userRole) {
    console.log(user);
}

for (let [user, role] of userRole) {
    console.log(user + " is an " + role);
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

const scores = [40, 80, 70];
console.log(Math.min(...scores));
console.log(...scores);
console.log(scores);


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









