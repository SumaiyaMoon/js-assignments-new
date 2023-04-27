//CHAPTER 26-30
// //1
// var num = prompt("Enter a positive integer:");
// document.write("Number: " + num + "<br>");
// document.write("Round off value: " + Math.round(num) + "<br>");
// document.write("Floor value: " + Math.floor(num) + "<br>");
// document.write("Ceil value: " + Math.ceil(num) + "<br>");

// //2
// var num = prompt("Enter a negative floating point number:");

// document.write("Number: " + num+ "<br>");
// document.write("Round off value: " + Math.round(num)+ "<br>");
// document.write("Floor value: " + Math.floor(num)+ "<br>");
// document.write("Ceil value: " + Math.ceil(num)+ "<br>");

// //3
// var num = parseInt(prompt("Enter a number:"));
// var absoluteValue = Math.abs(num);
// alert(`The absolute value of ${num} is ${absoluteValue}.`);

// //4
// var random= Math.random();
// alert(Math.ceil(random*6));

// // 5
// var randomNum = Math.random();

// var coinValue = (randomNum < 0.5) ? "Heads" : "Tails";

// document.write("The coin landed on: " + coinValue);


// //if else 
// var randomNum = Math.random();

// if (randomNum < 0.5) {
//   var coinValue = "Heads";
// } else {
//   var coinValue = "Tails";
// }
// document.write("The coin landed on: " + coinValue);

// //6
// var randomNumber = Math.floor(Math.random() * 100) ;
// document.write("Random number between 1 and 100: " + randomNumber);

// //7
// var userInput = prompt("Enter your weight:");
// var weightInKgs;

// if(userInput.indexOf("kgs") !== -1 || userInput.indexOf("kilograms") !== -1 ) {
//   weightInKgs = parseFloat(userInput);}
//  else {
//   weightInKgs = parseFloat(userInput) ;
// }

// document.write("Your weight is " + weightInKgs.toFixed(2) + " kilograms.");

// //8
// var secretNumber = Math.floor(Math.random() * 10) + 1;

// var userInput = prompt("Guess the secret number between 1 and 10:");

// var userNumber = Number(userInput);

// if (userNumber === secretNumber) {
//   alert("Congratulations, you guessed the secret number!");
// } else {
//   alert("Sorry, the secret number was " + secretNumber + ". Try again!");
// }





