// Section C - Coding Questions

// 1. Declare a variable using let and assign your name to it.
let myName = "Ohaeri Ekene Janua-Ceali";
console.log(myName);

// 2. Write JavaScript code to add two numbers and log the result.
let a = 10;
let b = 20;
let sum = a + b;
console.log("The sum of the two numbers is", sum);

// 3. Create an object called student with properties: name, age, and department.
let student = {
    name: "Ohaeri Ekene Janua-Ceali",
    age: 25,
    department: "Computer Science"
};
console.log(student);

// 4. Write a JavaScript function called greet() that prints "Hello World".
function greet() {
    console.log("Hello World");
} greet();

// 5. Write a program that checks if a number is even or odd.
let number = 53;
if (number % 2 === 0) {
    console.log(number, "is an even number");
} else {
    console.log(number, "is an odd number")
};

// 6. Create an array of 5 colors and print the first color.
let colors = ["white", "black", "Red", "Yellow", "Pink"];
console.log("The first color is", colors[0]);

// 7. Write a function that returns the square of a number passed into it.
function square(num) {
    return num * num;
};
console.log("The square of the number is", square(45));

// 8. Write a small code snippet that converts a string to a number:

let value = "42";
let convertedString = Number(value);
console.log("The converted string is", convertedString);