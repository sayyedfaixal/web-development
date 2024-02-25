let myDate = new Date();
console.log(`Date in raw format -- ${myDate}`);
console.log(`Date in toString format -- ${myDate.toString()}`);
console.log(
  `Date in toLocaleDateString format -- ${myDate.toLocaleDateString()}`
);
console.log(`Date in toISOString format -- ${myDate.toISOString()}`);
console.log(`Date in toJSON format -- ${myDate.toJSON()}`);
console.log(`Date in toDateString format -- ${myDate.toDateString()}`);
console.log(`Date in toLocaleString format -- ${myDate.toLocaleString()}`);
console.log(
  `Date in toLocaleTimeString format -- ${myDate.toLocaleTimeString()}`
);

console.log("------- Declaring string in our own format -------");
let myDeclareDate = new Date(2024, 2, 16, 9, 10);
console.log(`My Declared Date is - ${myDeclareDate.toLocaleDateString()}`);

console.log("------- More methods on Date -------");

let myNewDate = new Date();
console.log(`myNewDate.getFullYear() = ${myNewDate.getFullYear()}`);
console.log(`myNewDate.getDate() - ${myNewDate.getDate()}`);
console.log(`myNewDate.getDay() - ${myNewDate.getDay()}`);
console.log(`myNewDate.getHours() - ${myNewDate.getHours()}`);
console.log(`myNewDate.getMinutes()- ${myNewDate.getMinutes()}`);
console.log(`myNewDate.getMonth() - ${myNewDate.getMonth()}`);
