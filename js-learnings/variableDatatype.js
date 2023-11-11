const userId = 12344321;
var userName = "Faisal";
let userEmail = "faisal@google.com";
let userState;

/**
 * Prefer not to use var keyword because of block scope and functional scope
 */
console.table([userId, userName, userEmail, userState]);

console.log(`Type of undefined  - ${typeof undefined}`);
console.log(`Types of Null - ${typeof null}`);
