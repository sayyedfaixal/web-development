let myArr = [10, 12, 4343, 123, 15, 3123, 123];

console.log(" --------- Slice  vs Splice --------- ");

console.log("My Arr before Slice - ", myArr);
let mySliceArr = myArr.slice(0, 4);
console.log("My slice Arr - ", mySliceArr);
console.log("My Arr after Slice - ", myArr);

console.log("My Arr before Splice - ", myArr);
let mySpliceArr = myArr.splice(0, 4);
console.log("My Splice Arr - ", mySpliceArr);
console.log("My Arr after Splice - ", myArr);
