//CHAPTER 35-38

//1
// function displayDateTime() {
//     var currentDate = new Date();
//     var dateTimeString = "Current Date and Time: " + currentDate.toLocaleString();
//     document.write(dateTimeString);
//   }
//   displayDateTime();

//   //2
//   function greetUser(firstName, lastName) {
//     var firstName= prompt("Enter your firstName");
//     var lastName= prompt("Enter your lastName");
//     var fullName = firstName + " " + lastName;
//     var greeting = "Hello, " + fullName + "! Nice to meet you.";
//     document.write(greeting);
// }
//   greetUser() ;

// //3
// function addNumbers() {
//     var num1 = +prompt("Enter the first number:");
//     var num2 = +prompt("Enter the second number:");
//     var sum = num1 + num2;
//     return sum;
//   }
  
//   var result = addNumbers();
//   console.log("The sum of the two numbers is: " + result);
  

// //4
// var num1 = parseInt(prompt("Enter the first number:"));
// var num2 = parseInt(prompt("Enter the second number:"));
// var operator = prompt("Enter the operator (+, -, *, /, %):");

// function calculator(num1, num2, operator) {
//     var result;
  
//     if (operator === "+") {
//       result = num1 + num2;
//     } else if (operator === "-") {
//       result = num1 - num2;
//     } else if (operator === "*") {
//       result = num1 * num2;
//     } else if (operator === "/") {
//       result = num1 / num2;
//     } else if (operator === "%") {
//       result = num1 % num2;
//     } else {
//       return "Invalid operator";
//     }
  
//     return result;
//   }
  

  
//   var result = calculator(num1, num2, operator);
  
//   console.log("The result is: " + result);
  
// //5
// function square(num) {

//     var result = num * num;
//     return result;
//   }
//   var num = +prompt("Enter a number:");

//   var squared = square(num);
  
//   console.log("The square of " + num + " is " + squared + ".");
  
// //6 (copied from "internet")(marked)
// ////////////////////////////////////////////////
// function factorial(number) {
//     var result = 1;
  
//     for (var i = number; i >= 1; i--) {
//       result = result * i;
//     }
  
//     return result;
//   }
  
//   var num = parseInt(prompt("Enter a number:"));
//   var factorialResult = factorial(num);
  
//   console.log("The factorial of " + num + " is " + factorialResult + ".");
//   ////////////////////////////////////////////////////////////////////


//   //7 (copied from "internet")(marked)
//     ////////////////////////////////////////////////////////////////////

//   function count(startNum, endNum) {
//     var countArr = [];
  
//     for (var i = startNum; i <= endNum; i++) {
//       countArr.push(i);
//     }
  
//     return countArr;
//   }
  
//   var start = parseInt(prompt("Enter the starting number:"));
//   var end = parseInt(prompt("Enter the ending number:"));
  
//   var countArr = count(start, end);
  
//   document.write("<p>The counting from " + start + " to " + end + ":</p>");
  
//   document.write("<ul>");
  
//   for (var i = 0; i < countArr.length; i++) {
//     document.write("<li>" + countArr[i] + "</li>");
//   }
  
//   document.write("</ul>");
//     ////////////////////////////////////////////////////////////////////


//     //8
// function calculateHypotenuse(base, perpendicular) {
//   function calculateSquare(number) {
//     return number * number;
//   }

//   var baseSquared = calculateSquare(base);
//   var perpendicularSquared = calculateSquare(perpendicular);
//   var hypotenuseSquared = baseSquared + perpendicularSquared;
//   var hypotenuse = Math.sqrt(hypotenuseSquared);

//   return hypotenuse;
// }

// var base = parseFloat(prompt("Enter the base of the triangle:"));
// var perpendicular = parseFloat(prompt("Enter the perpendicular of the triangle:"));

// var hypotenuseResult = calculateHypotenuse(base, perpendicular);

// console.log("The hypotenuse of the triangle with base " + base + " and perpendicular " + perpendicular + " is " + hypotenuseResult + ".");


// //9(need explaination)(marked)
// ///////////////////////////////////////////////////////
// function calculateRectangleArea(width, height) {
//     var area = width * height;
//     return area;
//   }
  
//   var width = parseFloat(prompt("Enter the width of the rectangle:"));
//   var height = parseFloat(prompt("Enter the height of the rectangle:"));
  
//   var area = calculateRectangleArea(width, height);
  
//   console.log("The area of the rectangle with width " + width + " and height " + height + " is " + area + ".");
  
//   var rectangleWidth = 10;
//   var rectangleHeight = 20;
  
//   function calculateRectangleAreaUsingVariables() {
//     var area = rectangleWidth * rectangleHeight;
//     return area;
//   }
  
//   var areaUsingVariables = calculateRectangleAreaUsingVariables();
  
//   console.log("The area of the rectangle with width " + rectangleWidth + " and height " + rectangleHeight + " is " + areaUsingVariables + ".");
//   /////////////////////////////////////////////////////////////////

//   //10(book...unknown....need explanation)(marked)
//     /////////////////////////////////////////////////////////////////

//   function capitalizeWords(str) {
//     // Split the string into an array of words
//     var words = str.split(' ');
    
//     // Loop through each word in the array and capitalize the first letter
//     for (var i = 0; i < words.length; i++) {
//       words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }
    
//     // Join the capitalized words back into a single string
//     var capitalizedStr = words.join(' ');
//     return capitalizedStr;
//   }
  
//   var inputString = prompt("Enter a string to capitalize the first letter of each word:");
//   var outputString = capitalizeWords(inputString);
  
//   console.log("Original string: " + inputString);
//   console.log("Capitalized string: " + outputString);
//     /////////////////////////////////////////////////////////////////

    // //12
    // var inputString = prompt("Enter a string to find the longest word:");
    // function findLongestWord(string) {
    //     var words = string.split(' ');
    //     var longestWord = '';
        
    //     for (var i = 0; i < words.length; i++) {
    //       if (words[i].length > longestWord.length) {
    //         longestWord = words[i];
    //       }
    //     }
        
    //     return longestWord;
    //   }
      
    //   var longestWord = findLongestWord(inputString);

    //   alert("Original string: " + inputString);
    //  alert("Longest word: " + longestWord);
      
    // //13
    // function countLetterOccurrences(str, letter) {
    //     var count = 0;
        
    //     for (var i = 0; i < str.length; i++) {
    //       if (str[i] === letter) {
    //         count++;
    //       }
    //     }
        
    //     return count;
    //   }
      
    //   var inputString = prompt("Enter a string:");
    //   var letterToCount = prompt("Enter a letter to count:");
    //   var letterCount = countLetterOccurrences(inputString, letterToCount);
      
    //   console.log("String: " + inputString);
    //   console.log("Letter to count: " + letterToCount);
    //   console.log("Occurrences: " + letterCount);      

//     //14
//     function calcCircumference(radius) {
//         var circumference = 2 * Math.PI * radius;
//         console.log("The circumference is " + circumference);
//       }
      
//       function calcArea(radius) {
//         var area = Math.PI * Math.pow(radius, 2);
//         console.log("The area is " + area);
//       }

// calcCircumference(5); 
// calcArea(5); 
// //marked done
// // var radius is passing data into the function from parameter & argument 
// //calling values can be of your own choice
// // Math.PI = pie value (3.142)
