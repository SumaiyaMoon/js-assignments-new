//CHAPTER 21-25

// //1
// var inputFirstName= prompt("Enter First Name");
// var inputLastName= prompt("Enter Last Name");
// var fullName= inputFirstName+" "+inputLastName;
// alert ("Hello"+" "+fullName)

// //2
// var favModel= prompt("Which Mobile you like the most?");
// var lengthfavModel= favModel.length;
// alert("My favourite phone is:" + " " + favModel + "\n" + "Length: "+ " "+ lengthfavModel);

// //3
// var country= "Pakistan";
// var indexOfcountry= country.indexOf("n");
// alert (indexOfcountry);

// //4
// var greeting= "Hello World";
// var lastIndexOfgreeting= greeting.lastIndexOf("l");
// alert (lastIndexOfgreeting);

// //5
// var word = "Pakistani";
// var result = word.charAt(3);
// document.write("The character at 3rd index is: " + result);

// //6
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName + " " + lastName;
// alert("Hello " + fullName + "! Welcome to our website.");

// //7
// var word = "Hyderabad";
// var replacedWord = word.replace("Hyder", "Islam");
// alert ("City: " + word + "\n" + "After Replacement: " + replacedWord);

// //8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replacedMessage = message.replace(/and/g, "&");
// alert ("Original Message: " + message + "\n" + "Replaced Message: " + replacedMessage);

// //9
// var stringNumber = "472";
// var number = parseInt(stringNumber);
// document.write("String: " + stringNumber + "<br>");
// document.write("Type: " + typeof stringNumber + "<br>");
// document.write("Number: " + number + "<br>");
// document.write("Type: " + typeof number);

// //10
// var userInput = prompt("Enter a string:");
// var capitalizedString = userInput.toUpperCase();
// alert("Capitalized String: " + capitalizedString);

// //11
// var userInput = prompt("Enter a string:");
// var words = userInput.split(" ");

// var titleCasedWords = words.map(
//     function(word) {
//     var firstLetter = word.charAt(0).toUpperCase();
//     var restOfWord = word.slice(1).toLowerCase();
//    return firstLetter + restOfWord;
//   }
//   );

// var titleCasedString = titleCasedWords.join(" ");
// alert("Title Cased String: " + titleCasedString);

// //12
// var num = 35.36;
// var numString = num.toString();
// var newString = numString.replace(".", "");

// document.write("Number: " + num + "<br>");
// document.write("Result: " + newString);

// //13
// var username = prompt("Enter your username:");

// if (username.indexOf("@") === -1 
// && username.indexOf(".") === -1
//  && username.indexOf(",") === -1
//   && username.indexOf("!") === -1) {
//   alert("Welcome, " + username + "!");}

//   else{
//   alert("Please enter a valid username that does not contain '@', '.', ',', or '!'");
// };

// //14
// var items = ["cake", "apple pie", "pie", "cookie", "chips", "patties"];
// var userInput = prompt("What item are you looking for?");
// userInput = userInput.toLowerCase();
// var isFound = false;

// for (var i = 0; i < items.length; i++) {
//   var currentItem = items[i].toLowerCase();

//   if (currentItem === userInput) {
//     isFound = true;
//     break;
//   }
// }

// if (isFound) {
//   alert(userInput + " is available at index " + i + " in our bakery.");
// } else {
//   alert("We are sorry. " + userInput + " is not available in our bakery.");
// }

// //15
// var password = prompt("Enter password:");
// var firstChar = password.charAt(0);

// if (password.length < 6) {
//   alert("Password must be at least 6 characters long.");
// }

// else if (!isNaN(firstChar)) {
//   alert("Password cannot start with a number.");
// }

// else if (!/^[a-zA-Z0-9]+$/.test(password)) {
//   alert("Password can only contain alphabets and numbers.");
// }

// else {
//   alert("Password is valid.");
// }

// //16
// var university = "University of Karachi";
// var arr = university.split("");
// for (var i = 0; i < arr.length; i++) {
//   document.write(arr[i] + "<br>");
// }

// //17
// var userInput = prompt("Enter a string:");
// var lastChar = userInput.charAt(userInput.length - 1);
// alert("Last character: " + lastChar);

// //18
// var str = "The quick brown fox jumps over the lazy dog";
// var str= str.toLocaleLowerCase();
// var count = (str.split("the").length - 1);
// document.write("The word 'the' occurs " + count + " times in the string.");
