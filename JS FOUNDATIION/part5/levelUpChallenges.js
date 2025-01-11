// 1.

/*

let arr = ["green tea", "black tea", "chai", "oolong tea"];

let tea = [];

for (i = 0; i < arr.length; i++) {
  if (arr[i] == "chai") {
    break;
  } else {
    tea.push(arr[i]);
  }
}

console.log(tea);

*/

//------------------------------------------------------------------------------------

// 2.

/*

let arr = ["London", "New York", "Paris", "Berlin"];

let cities = [];

for (i = 0; i < arr.length; i++) {
  if (arr[i] == "paris" || arr[i] == "Paris") {
    continue;
  } else {
    cities.push(arr[i]);
  }
}

console.log(cities);

*/

//------------------------------------------------------------------------------------

// 3.

/*

let arr = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const num of arr) {
  if (num == 4){
    break;
  } else{
    smallNumbers.push(num);
  }
}

console.log(smallNumbers);

*/

//------------------------------------------------------------------------------------

// 4.

/*

let arr = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];

for (const tea of arr) {
  if (tea == "herbal tea") {
    continue;
  } else {
    preferredTeas.push(tea);
  }
}

console.log(preferredTeas);

*/

//------------------------------------------------------------------------------------

// 5.

/*

let citiesPopulation = {
  London: 8900000,
  "New York": 8400000,
  Berlin: 3500000,
  Paris: 2200000,
};

let cityPopulations = {};

for(const city in citiesPopulation){

    // key = value
    if(city == "Berlin"){
        break;
    } else{
        cityPopulations[city] = citiesPopulation[city];
    }
}

console.log(cityPopulations);

*/

//------------------------------------------------------------------------------------

// 6.

/*

let citiesPopulation = {
  Sydney: 5000000,
  Tokyo: 9000000,
  Berlin: 3500000,
  Paris: 2200000,
};

let largeCities = []

for(const city in citiesPopulation){
    if(citiesPopulation[city] < 3000000){
        continue;
    } else{
        largeCities[city] = citiesPopulation[city]
    }
}

console.log(largeCities);

*/

//------------------------------------------------------------------------------------

// 7.

/*

let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];

teaCollection.forEach(function (tea) {
  if (tea == "chai") {
    return;
  } else {
    availableTeas.push(tea);
  }
});

console.log(availableTeas);

*/

//------------------------------------------------------------------------------------

// 8.

/*

let cities = ["Berlin", "Tokyo", "Sydney", "Paris"];

let traveledCities = [];

// cities.forEach(function (city) {
//   if (city == "Sydney") {
//     return;
//   } else {
//     traveledCities.push(city);
//   }
// });


cities.forEach((city) => {
  if (city == "Sydney") {
    return;
  } else {
    traveledCities.push(city);
  }
});

console.log(traveledCities);

*/

//------------------------------------------------------------------------------------

// 9.

/*

let arr = [2, 5, 7, 9];
let doubledNumbers = [];

for (i = 0; i < arr.length; i++) {
  if (arr[i] == 7) {
    continue;
  } else {
    doubledNumbers.push(arr[i] * 2);
  }
}

console.log(doubledNumbers);

*/

//------------------------------------------------------------------------------------

// 10.

/*

let teaCollection = [
  "chai",
  "green tea",
  "black tea",
  "jasmine tea",
  "herbal tea",
];

let shortTeas = [];

for (const tea of teaCollection) {
  if (tea.length > 10) {
    break;
  } else {
    shortTeas.push(tea);
  }
}

console.log(shortTeas);

*/
