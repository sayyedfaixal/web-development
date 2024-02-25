const mySymbol = Symbol("key1");
const jsUser = {
  name: "Faisal",
  [mySymbol]: "faisalSymbol",
  age: 18,
  email: "faisal@google.com",
  isLoggedIn: false,
  lastLoggedInDays: ["Monday", "Thursday"],
  "unique key": "You can't print this without using []",
};

console.log(jsUser);
jsUser.greetUser = function () {
  console.log("Hello jsUser");
};
jsUser.greetWithName = function () {
  console.log(`Hello, ${this.name}`);
};
console.log(jsUser.greetUser());
console.log(jsUser.greetWithName());

console.log(jsUser["unique key"]);
