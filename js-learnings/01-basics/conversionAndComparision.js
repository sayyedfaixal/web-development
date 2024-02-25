// 1 - Investigating conversition with Number
let score = "33";
let scoreInNumber = Number(score);

let scoreInNull = null;
let nullScoreInNumber = Number(scoreInNull);

let scoreInNumberAndString = "33abc";
let scoreInNumberAndStringNumber = Number(scoreInNumberAndString);

let scoreInUndefined = undefined;
let scoreInUndefinedNumber = Number(scoreInUndefined);

console.table([score, , scoreInNull, scoreInNumberAndString, scoreInUndefined]);

console.table([
  scoreInNumber,
  nullScoreInNumber,
  scoreInNumberAndStringNumber,
  scoreInUndefinedNumber,
]);
// ---------------------------------------------------

console.log(1 + "2");
console.log(1 + 1 + "3");
console.log("1" + 2);
console.log(1 + "2" + 3);

console.log("" >= "");
console.table([
  `undefined > undefined : ${undefined > undefined}`,
  `undefined == undefined : ${undefined == undefined}`,
  `undefined >= undefined : ${undefined >= undefined}`,
  `undefined >= null : ${undefined >= undefined}`,
  `undefined >= 1 : ${undefined >= null}`,
  `undefined >= "" : ${undefined >= ""}`,
  `undefined >= "abc" : ${undefined >= "abc"}`,

  `null == null : ${null == null}`,
  `null >= null : ${null >= null}`,
  `null > null : ${null > null}`,
  `null >= undefined : ${null >= undefined}`,
  `null >= 1 : ${null >= 1}`,
  `null >= "" : ${null >= ""}`,
  `null >= "abc" : ${null >= "abc"}`,

  `"" >= "" : ${"" >= ""}`,
  ` "" >= undefined : ${"" >= undefined}`,
  ` "" >= 1 : ${"" >= 1}`,
  ` >= "abc" : ${"" >= "abc"}`,
]);

console.log([
  `true : ${true}`,
  `+true : ${+true}`,
  `false: ${false}`,
  `+false: ${+false}`,
]);
