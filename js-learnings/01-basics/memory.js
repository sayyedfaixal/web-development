console.log("---------------------------------------------------------------");
console.log("All Primitive Datatypes are stored inside the Stack Memory");
console.log("All Non-Primitive Datatypes are stored inside the Heap Memory");
console.log("---------------------------------------------------------------");

let userOneEmail = "user1@gmail.com";
let userOneName = "User1";

let userTwoEmail = "user2@gmail.com";
let userTwoName = userOneName;

console.log(
  `Details of UserOne --> Name = ${userOneName}, Email = ${userOneEmail} `
);
console.log(
  `Details of UserTwo --> Name = ${userTwoName}, Email = ${userTwoEmail} `
);

let userOneObj = {
  name: "UserOne",
  email: "userone@gmail.com",
};

let userTwoObj = userOneObj;

console.log("Details of UserOne Object before", userOneObj);
console.log("Details of UserTwo Object before", userTwoObj);

console.log("Now changing the details of User two");
userTwoObj.name = "UserTwo";
console.log("Details of UserOne Object before", userOneObj);
console.log("Details of UserTwo Object before", userTwoObj);
