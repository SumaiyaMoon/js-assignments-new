//CHAPTER 31-34
// //1
// var now = new Date();
// document.write("Current date and time: " + now);

// //2
// var monthNames = ["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];

// var currentDate = new Date();
// var currentMonth = currentDate.getMonth();

// alert("The current month is " + monthNames[currentMonth]);

// //3
// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// var today = new Date().getDay();

// var dayName = days[today];

// alert(dayName);

// // 4
// var today = new Date();
// var day = today.getDay();

// if (day === 0 || day === 6) {
//   alert("It's Fun day");
// }


// //5
// var today = new Date();
// var date = today.getDate();

// if (date < 16) {
//   console.log("First fifteen days of the month");
// } else {
//   console.log("Last days of the month");
// }

// //6
// var now = new Date();
// var minutesSinceEpoch = (now.getTime() - now.getTimezoneOffset() * 60 * 1000) / (60 * 1000);

// console.log("Minutes since midnight, Jan. 1, 1970: " + minutesSinceEpoch);


// //7
// var now = new Date();
// var hour = now.getHours();

// if (hour < 12) {
//   alert("It's AM");
// } else {
//   alert("It's PM");
// }


// //8
// var laterDate = new Date(2020, 11, 31);
// alert(laterDate);

// //9
// var startRamadan = new Date(2015, 5, 18); // Month is zero-indexed, so 5 represents June
// var today = new Date();
// var daysPast = Math.floor((today - startRamadan) / (1000 * 60 * 60 * 24));

// alert("The number of days past since the start of Ramadan 2015 is: " + daysPast);


// //10
// var referenceDate = new Date(0); // January 1, 1970
// var beginningOf2015 = new Date(2015, 0, 1); // January 1, 2015
// var secondsElapsed = (beginningOf2015 - referenceDate) / 1000;

// document.write("Seconds elapsed between the reference date and the beginning of 2015: " + secondsElapsed);

// //11
// var currentDate = new Date();
// var currentDateHrs = currentDate.getHours();
// var date = new Date();
// date.setHours(date.getHours() - 1);
// console.log("Current Date: "+currentDate +"\n"+"1 hr ago it was "+ date );


// //12
// var date = new Date(); 
// date.setFullYear(date.getFullYear() - 100); 

// alert("100 years back it was: " + date); 

// //13
// var age = prompt("How many old are/will be you in this year?"); 
// var currentYear = new Date().getFullYear(); 

// var birthYear = currentYear - age; 
// document.write("Your age is: " + age + "<br/>");
// document.write("Your birth year is: " + birthYear);












////////////////////////////////(marked)///////////////////////////////


// //14 (Copied from "internet" review left)

// var customerName = prompt("Enter your name:");
// var currentMonth = new Date().toLocaleString('default', { month: 'long' });
// var units = prompt("Enter number of units:");
// var chargesPerUnit = prompt("Enter charges per unit:");
// var netAmountPayable = units * chargesPerUnit;
// var latePaymentSurcharge = 350;
// var grossAmountPayable = netAmountPayable + latePaymentSurcharge;

// document.write("<h1>K-Electric Bill</h1>");
// document.write("<p>Customer Name: " + customerName + "</p>");
// document.write("<p>Month: " + currentMonth + "</p>");
// document.write("<p>Number of Units: " + units + "</p>");
// document.write("<p>Charges per Unit: " + chargesPerUnit + "</p>");
// document.write("<p>Net Amount Payable (within Due Date): " + netAmountPayable.toFixed(2) + "</p>");
// document.write("<p>Late Payment Surcharge: " + latePaymentSurcharge.toFixed(2) + "</p>");
// document.write("<p>Gross Amount Payable (after Due Date): " + grossAmountPayable.toFixed(2) + "</p>");




//////////////////////////////(marked)//////////////////////////////////////










