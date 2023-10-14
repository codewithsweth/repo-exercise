"use strict";

/* /////////////////////
assignments JS fundamentals 1
///////////////////////
const country = "India";
const continent = "Asia";
let population = 370;

console.log(country, continent, population);

let isIsland = false;
let language;

console.log(
  typeof isIsland,
  typeof population,
  typeof country,
  typeof language
);

language = "Hindi";
// isIsland = true;
console.log(isIsland, language);

console.log(population / 2);
population++;
console.log(population);
console.log(population > 6 ? "Yes" : "No");
console.log(population < 33 ? "Yes" : "No");

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

if (population > 33) {
  console.log(`${country}'s population is ${population - 33} above average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average`
  );
}

console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);

// const numNeighbours  = Number(prompt('How many neighbour countries does your country have?'));
// if(numNeighbours === 1){
//     console.log('Only 1 border')
// } else if( numNeighbours > 1){
//     console.log('More than 1 border')
// } else {
//     console.log('No borders')
// }
isIsland == true;
if (language === "English" && population < 50 && !isIsland) {
  console.log(`you should live in ${country}`);
} else {
  console.log(`${country} do not meet your criteria`);
}

switch (language) {
  case "chinese":
  case "mandarin":
    console.log(`Most number of native speakers!`);
    break;
  case "spanish":
    console.log(`2nd place in the number of native speakers`);
    break;
  case "english":
    console.log(`3rd place`);
    break;
  // try changing the first letter in hindi to capital
  case "hindi":
    console.log(`number 4`);
    break;
  case "arabic":
    console.log(`5th most spoken language`);
    break;
  default:
    console.log(`Great language too :D`);
}

// population > 33 ? `${country}'s population is above average` : `${country}'s population is below average`;

// population > 33 ? 'above' : 'below'
console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average`
);
*/

/* /////////////////////////
challenges JS fundamentals 1
// ////////////////////////////
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;
const BMIMark = markMass / markHeight ** 2;
const BMIJohn = johnMass / johnHeight ** 2;
console.log(BMIMark, BMIJohn);

const markHigherBMI =
  BMIMark > BMIJohn
    ? `Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn}!) `
    : `John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark}!) `;
console.log(markHigherBMI);

const score1 = 96;
const score2 = 108;
const score3 = 89;
const score4 = 88;
const score5 = 91;
const score6 = 110;

const scoreDolphins = (score1 + score2 + score3) / 3;
const scoreKoalas = (score4 + score5 + score6) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
} else if (scoreDolphins < scoreKoalas) {
  console.log("Koalas win the trophy");
} else {
  console.log("Both win the trophy");
}

const bill = 430;
const tip = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
*/

/* ///////////////////
assignment JS fundamentals 2
//////////////////////////
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}
console.log(describeCountry("India", "370", "Delhi"));
console.log(describeCountry("USA", "333", "Washington"));
console.log(describeCountry("china", "1370", "Wohan"));

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
const popIndia = percentageOfWorld1(1441);
const popChina = percentageOfWorld1(370);
const popAverage = percentageOfWorld1(33);
console.log(popIndia, popChina, popAverage);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};
console.log(
  percentageOfWorld2(1441),
  percentageOfWorld2(370),
  percentageOfWorld2(33)
);

const percentageOfWorld3 = (population) => (population / 7900) * 100;
console.log(
  percentageOfWorld3(1441),
  percentageOfWorld3(370),
  percentageOfWorld3(33)
);

const describePopulation = function (country, population) {
  console.log(
    `${country} has ${population} million people, which is about ${percentageOfWorld1(
      population
    )} of the world.`
  );
};
describePopulation("China", 1441);
describePopulation("India", 370);
describePopulation("AVG", 33);

const populations = [1441, 370, 333, 33];
for (let i = 0; i < populations.length; i++) {
  const percentages2 = percentageOfWorld1(populations[i]);
  console.log(percentages2);
}

console.log(populations);
console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1(1441),
  percentageOfWorld2(370),
  percentageOfWorld1(333),
  percentageOfWorld3(33),
];
console.log(percentages);

const neighbours = ["srilanka", "pakistan", "bangladesh", "nepal"];
neighbours.push("china");
neighbours.pop();
console.log(neighbours);
// console.log(
//   !neighbours.includes("germany")
//     ? "Probably not a central European country"
//     : ""
// );

if (!neighbours.includes("germany")) {
  console.log("Probably not a central European country");
}

// faced some difficulty with this
neighbours[neighbours.indexOf("nepal")] = "china";
console.log(neighbours);

const myCountry = {
  country: "India",
  capital: "Delhi",
  language: "Hindi",
  population: 370,
  neighbours: ["nepal", "srilanka", "bangladesh"],
  //   isIsland: true,
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
    );
  },

  checkIsland: function () {
    // the below is partially right
    // return neighbours.length === 0 ? true : false;
    // But they did it in other way
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
};
console.log(myCountry);

// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
// );
myCountry.population += 2;
myCountry["population"] -= 2;

console.log(myCountry);
myCountry.describe();
myCountry.checkIsland();

for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}

// const populations = [1441, 370, 333, 33];
const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]).toFixed(1));
  console.log(`${percentages2[i]}%`);
}

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    // doubt
    console.log(`${listOfNeighbours[i][j]}`);
  }
}

const percentages3 = [];
let count = 0;
while (count < populations.length) {
  const perc = percentageOfWorld1(populations[count]);
  percentages3.push(perc);
  count++;
}
console.log(percentages3);


*/

/* /////////////////////////
challenges JS fundamentals 1
// ////////////////////////////
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

const checkWinner = function (avgDolp, avgKoal) {
  if (avgDolp > 2 * avgKoal) {
    console.log(`Dolphins win (${avgDolp} vs. ${avgKoal})`);
  } else if (avgKoal > 2 * avgDolp) {
    console.log(`Koalas win (${avgKoal} vs. ${avgDolp})`);
  } else {
    console.log("No team wins...");
  }
};
checkWinner(scoreKoalas, scoreDolphins);


const calcTip = function (bills) {
  return bills > 50 && bills < 300 ? bills * 0.15 : bills * 0.2;
};
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [
  bills[0] + calcTip(bills[0]),
  bills[1] + calcTip(bills[1]),
  bills[2] + calcTip(bills[2]),
];
console.log(tips);
console.log(totals);

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    const BMI = (this.mass / this.height ** 2).toFixed(1);
    return BMI;
  },
};
const john = {
  fullName: "John Smith",
  // mass: 103.7,
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    const BMI = (this.mass / this.height ** 2).toFixed(1);
    return BMI;
  },
};
if (john.calcBMI() > mark.calcBMI()) {
  console.log(
    `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${
      mark.fullName
    }'s (${mark.calcBMI()})`
  );
} else if (john.calcBMI() < mark.calcBMI()) {
  console.log(
    `${john.fullName}'s BMI (${john.calcBMI()}) is lower than ${
      mark.fullName
    }'s (${mark.calcBMI()})`
  );
} else {
  console.log(
    `${john.fullName}'s BMI (${john.calcBMI()}) is equal to ${
      mark.fullName
    }'s (${mark.calcBMI()})`
  );
}

const bills = [125, 555, 44];
const tips = [];
const totals = [];
const calcTip = function (bills) {
  return bills > 50 && bills < 300 ? bills * 0.15 : bills * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  const total = bills[i] + tip;
  tips.push(tip);
  totals.push(total);
}
console.log(tips);
console.log(totals);

*/
