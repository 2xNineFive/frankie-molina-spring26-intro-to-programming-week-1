// Challenge: 
// 1. Create an array - favouriteSongs[] -  and add your 3 favourite songs using push()
// 2. Log out the last song in the array, and make it so that your solution will log out the last one regardless of how many items there are in the array
// 3. Invoke the pop method on your created array. What values do you have left in the array? 

const favouriteSongs = [];

favouriteSongs.push('Saber Tooth [Choppaz Flip]', 'Baddadan [Henry Fong Remix]', 'Dont Let Me Down [Synergy Remix]');
console.log(favouriteSongs);
console.log(favouriteSongs[favouriteSongs.length - 1]);

favouriteSongs.pop();
console.log(favouriteSongs);
// I have two values left in the array. Song 1 at Indeces 0, and Song 2 at Indeces 1. 


// 
// 
// 


// Challenge:
// Here's a list of 5 most popular songs on Spotify.
// 1) Check if any song has won a Grammy
// 2) Check if all the songs were streamed for at least 1.5 million times
// Note: the timesStreamed value is already in million

const songs = [
    {song: "Shape of You", timesStreamed: 2.384, wonGrammy: true},
    {song: "One Dance", timesStreamed: 1.791, wonGrammy: false},
    {song: "Rockstar", timesStreamed: 1.781	, wonGrammy: false},
    {song: "Closer", timesStreamed: 1.688, wonGrammy: false},
    {song: "Thinking Out Loud", timesStreamed: 1.461, wonGrammy: true}
];


const hasWonGrammy = function () {
    for (const songData of songs) {
        if(songData.wonGrammy)return true; 
    } 
    return false;
    }
console.log(hasWonGrammy());

const hasOnePoint5MStreams = function () {
    for (const songData of songs) {
        if(songData.timesStreamed <= 1.5)return false; 
    } 
    return true;
    }
console.log(hasOnePoint5MStreams());


// 
// 
// 


// Challenge: 
// Use reduce() to sum the weights of all the cars
// Stretch goal: 
// Use reduce to sum the weights of only the electric cars 

const cars = [
  { name: "Toyota", isElectric: false, weight: 1320 },
  { name: "Ford", isElectric: false, weight: 1400 },
  { name: "Volkswagen", isElectric: false, weight: 1370 },
  { name: "Honda", isElectric: false, weight: 1375 },
  { name: "Tesla", isElectric: true, weight: 1750 },
  { name: "BMW", isElectric: true, weight: 1350 },  
];



const totalWeight = cars.reduce((accumulator, carData) => {
    return accumulator + carData.weight;
}, 0);
console.log(totalWeight);


const totalWeightElectric = cars.reduce((accumulator, carData) => {
    if (carData.isElectric) return accumulator + carData.weight;
    else return accumulator;
}, 0);
console.log(totalWeightElectric);


const totalWeightNotElectric = cars.reduce((accumulator, carData) => {
    if (!carData.isElectric) return accumulator + carData.weight;
    else return accumulator;
}, 0);
console.log(totalWeightNotElectric);




// 
// 
// 



// ---------- QUESTION 1 ----------
// Write a function called 'repeat' that takes 1 integer parameter and, using a for or while loop, prints out the string "Hello World!" to the console the same number of times as the parameter. NOTE: for this question, since your console log should be inside your function, you only need to call/invoke the function after you write it rather than call/invoke it inside of a console.log.

// EXAMPLE "LOG":
//  repeat(3);
// EXAMPLE OUTPUT:
//  Hello World!
//  Hello World!
//  Hello World!

// PUT YOUR CODE HERE

const repeat = function (integer) {
    for (let i = 0; i < integer; i++) console.log('Hello World');
}

repeat(3);
