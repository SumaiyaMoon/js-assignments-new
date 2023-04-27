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
    
//4
