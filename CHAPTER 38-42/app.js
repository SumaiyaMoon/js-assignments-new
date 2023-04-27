//CHAPTER 38-42
// //1
// function power(a, b) {
//     var result = 1;
//     for (var i = 1; i <= b; i++) {
//       result *= a;
//     }
//     document.write(a + " raised to the power of " + b + " is " + result);
//   }
// var powerFunction=power("a","b");  


// //2
// function isLeapYear(year) {
//     switch (true) {
//       case year % 400 === 0:
//         return year + ' is a leap year';
//       case year % 100 === 0:
//         return year + ' is not a leap year';
//       case year % 4 === 0:
//         return year + ' is a leap year';
//       default:
//         return year + ' is not a leap year';
//     }
//   }
  
//   console.log(isLeapYear(2023));
//   console.log(isLeapYear(2021)); 
  



// ////////////////(same sccenario with different method from net)(need explanation)(marked)
// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//       return year + " is a leap year";
//     } else {
//       return year + " is not a leap year";
//     }
//   }
// ////////////////  (query: how to display in browser??)


// //3
// //direct method///////
// function calculateTriangleArea(a, b, c) {
//     const s = (a + b + c) / 2;
//     const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//     return area;
//   }

//   /////////Using Heron's Formula////
//   function calculateTriangleAreaHeron(a, b, c) {
//     const p = (a + b + c) / 2;
//     const area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
//     return area;
//   }
    
// //4
// function calculateAverage(mark1, mark2, mark3) {
//     return (mark1 + mark2 + mark3) / 3;
//   }
  
//   function calculatePercentage(avg) {
//     return (avg / 300) * 100;
//   }
// function mainFunction(mark1, mark2, mark3) {
//     var avg = calculateAverage(mark1, mark2, mark3);
//     var perc = calculatePercentage(avg);
//     console.log("Average: " + avg + "  Percentage: " + perc + "%");
//   }
  
 
//   var mark1sub= +prompt("Enter marks of subj1");
//   var mark2sub= +prompt("Enter marks of subj2");
//   var mark3sub= +prompt("Enter marks of subj3");
//   mainFunction(mark1sub,mark2sub,mark3sub); 

//   //5
//   ///using while-loop bcz iteration is not confirmed due to prompt 
//   function customIndexOf(str, char) {
//     let i = 0;
//     while (i < str.length) {
//       if (str[i] === char) {
//         return i;
//       }
//       i++;
//     }
//     return -1;
//   }
//   const myString = prompt("Enter String");
//   const myChar = prompt("Enter Character");
//   const index = customIndexOf(myString, myChar);
//   console.log(myString);
//   console.log(myChar);
//   console.log(index); 


// //6
// ///using for-loop bcz iteration is confirmed in question ..deleting vowels in sentence with less than 25 char
// function deleteVowels() {
//     var sentence = prompt("Enter a sentence (not more than 25 characters):");
//     var newSentence = "";
//     for (var i = 0; i < sentence.length; i++) {
//       if ("aeiouAEIOU".indexOf(sentence[i]) === -1) {
//         newSentence += sentence[i];
//       }
//     }
//     return newSentence;
//   }
//   var withoutVowels = deleteVowels();
//   alert("sentence with vowels not present:"+"\n"+withoutVowels);
  

    
//   //7
//   function countTwoVowels(text) {
//     var count = 0;
//     var vowels = ['a', 'e', 'i', 'o', 'u'];
    
//     for (var i = 0; i < text.length - 1; i++) {
//       var currChar = text[i];
//       var nextChar = text[i + 1];
      
//       if (vowels.indexOf(currChar.toLowerCase()) !== -1 && vowels.indexOf(nextChar.toLowerCase()) !== -1) {
// switch (currChar.toLowerCase()) {

//           case 'a':
//             if (nextChar.toLowerCase() === 'e') {
//               count++;
//             }
//             break;

//     case 'e':
//             if (nextChar.toLowerCase() === 'a' || nextChar.toLowerCase() === 'i') {
//               count++;
//             }
//             break;

//           case 'i':
//             if (nextChar.toLowerCase() === 'u' || nextChar.toLowerCase() === 'e') {
//               count++;
//             }
//             break;

//           case 'o':
//             if (nextChar.toLowerCase() === 'i') {
//               count++;
//             }
//             break;

//           case 'u':
//             if (nextChar.toLowerCase() === 'i' || nextChar.toLowerCase() === 'e') {
//               count++;
//             }
//             break;

//           default:

//             break;

//         }
//       }
//     }
    
//     return count;
//   }




//   var sentence = "Pleases read this application and give me gratuity";
//   var count = countTwoVowels(sentence); 
//   console.log(count); 
    





//   //8
//   // Convert distance in km to meters
// function kmToMeters(distance) {
//     return distance * 1000;
//   }
  
//   // Convert distance in km to feet
//   function kmToFeet(distance) {
//     return distance * 3280.84;
//   }
  
//   // Convert distance in km to inches
//   function kmToInches(distance) {
//     return distance * 39370.1;
//   }
  
//   // Convert distance in km to centimeters
//   function kmToCentimeters(distance) {
//     return distance * 100000;
//   }
  
//   //console the converted distance values
//   function distance(distance) {
//     console.log(distance + " km = " + kmToMeters(distance) + " meters");
//     console.log(distance + " km = " + kmToFeet(distance) + " feet");
//     console.log(distance + " km = " + kmToInches(distance) + " inches");
//     console.log(distance + " km = " + kmToCentimeters(distance) + " centimeters");
//   }
//   distance(100); //distance b/w 2 cities ///////////





//   //9
//   function calculateOvertimePay(hoursWorked) {
//     var regularPay = 40 * 12; 
//     var overtimePay = 0;
  
//     if (hoursWorked > 40) {
//       overtimePay = (hoursWorked - 40) * 12;
//     }
  
//     var totalPay = regularPay + overtimePay;
//     return totalPay;
//   }
  
//   var hoursWorked = 50;
//   var totalPay = calculateOvertimePay(hoursWorked);
//   console.log("Total pay: Rs. " + totalPay.toFixed(2));
  

//10 (question out of mind!)(copied from "internet")(marked)
///////////////////////////////////////////////////
function calculateCurrencyNotes(amount) {
    var num100 = Math.floor(amount / 100); // number of 100 rupee notes
    var num50 = Math.floor((amount % 100) / 50); // number of 50 rupee notes
    var num10 = Math.floor(((amount % 100) % 50) / 10); // number of 10 rupee notes
    
    console.log("Number of 100 rupee notes: " + num100);
    console.log("Number of 50 rupee notes: " + num50);
    console.log("Number of 10 rupee notes: " + num10);
  }
  
  // Example usage:
  var amount = 350; // amount in hundreds
  calculateCurrencyNotes(amount);
///////////////////////////////////////////////////
  
  