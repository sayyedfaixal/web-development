const marvelHeros = ["Ironman", "Thor", "Spiderman"];
const dcHeros = ["Superman", "Batman", "Flash"];

// marvelHeros.push(dcHeros);
// console.log(marvelHeros);

// const allHeros = marvelHeros.concat(dcHeros);
// console.log(allHeros);

console.log(`Using spread operator for concating all the elements `);
const newAllHeros = [...marvelHeros, ...dcHeros];
console.log(newAllHeros);
