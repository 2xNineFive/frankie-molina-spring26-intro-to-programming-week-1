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

// 
// 
// 

// ---------- QUESTION 2 ----------
// Write a function called 'pyramidCounting' that takes 1 integer parameter and returns the sum of all of the numbers between 0 and the parameter.

// EXAMPLE LOG:
//  console.log("Q2: ", pyramidCounting(4));
// EXAMPLE OUTPUT:
//  Q2: 10
// The mathematical explanation of this is 0+1+2+3+4 = 10.

//PUT YOUR CODE HERE




const pyramidCounting = function (integer) {
    let total = 0;
    for (let i = 0; i <= integer; i++) {
        total = i + total;
    } return total;
}
console.log(`Q2: ${pyramidCounting(5)}`);


// ---------- QUESTION 3 ----------
// Write a function called 'noVowels' that take a string parameter and removes vowels from that string using a loop.

// EXAMPLE LOG:
//  console.log("Q3: ", noVowels(adventurous));
// EXAMPLE OUTPUT:
//  Q3: dvntrs

// PUT YOUR CODE HERE
const noVowels = function (string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let result =''
    for (const letter of string) {
        if (!vowels.includes(letter)) {
            result += letter;
        }
    } return result;
}
console.log(`Q3: ${noVowels('Code')}`);




// ---------- QUESTION 4 ----------
// Write a function called 'vowelCount' that takes 1 string 
// parameter and returns the number of vowels in that string.

// EXAMPLE LOG:
//  console.log("Q4: ", vowelCount('I love to code.'));
// EXAMPLE OUTPUT:
//  Q4: 6

// PUT YOUR CODE HERE
// const vowelCount = function (string) {
//      const vowels = ['a', 'e', 'i', 'o', 'u'];
//     let result = '';
//     for (const letter of string) {
//         if (vowels.includes(letter.toLowerCase())) {
//             result += letter;
//             console.log(result)
//         }
        
//     } return result.length;
// }
// console.log(`Q4: ${vowelCount('I love learning to code.')}`);


// My function is not case sensitive, so I'm going to fix that. 

// I fixed the case sensitivity issue with .toLowerCase 
// in the if loop statement. I feel smurt. 

// When I asked Claude why the letters were being added uppercase to result,
// if they were being checked lowercase in the loop, I learned that toLowerCase
// temporarily stores the string lowercased and then adds back the original. 
// So that was cool. 


// Claude also recommended that I change my code up a bit to better adhere to the challenge.
// Since I am looking for a number, I should just create a variable with a numerical value 
// to store my result rather than a string. So here is that version. 

const vowelCount = function (string) {
     const vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = 0;
    for (const letter of string) {
        if (vowels.includes(letter.toLowerCase())) {
            result += 1
            console.log(result)
        }
        
    } return result;
}
console.log(`Q4: ${vowelCount('I love learning to code.')}`);




// ---------- QUESTION 5 ----------
// Write a function called 'numOfOdds' that takes 1 integer parameter and 
// returns the number of odd numbers between 0 and that number, 
// including the number if it's odd. (Hint: Use the modulo operator)

// EXAMPLE LOG:
//  console.log("Q5: ", numOfOdds(15));
// EXAMPLE OUTPUT:
//  Q5: 8

// PUT YOUR CODE HERE

// So what I need to do is create a function. Inside that function I need to create a
// let variable that stores my numerical result so I can return it later. I also need
// to be able to take an integer parameter from the function and scan all the numbers
// between 0 and the integer to verify if it's odd. If it is, I need to add it to result. 
// The paramater integer is included in the result. 

// Wait actually. I think I need to create an array with each of those numbers in it first
// so I can iterate through the array and check if it's odd and it to result if that's true. 

// I talked to Claude and it mentioned another idea. 


const numOfOdds = function (integer) {
    let result = 0 ;
    for (let i = 0; i <= integer; i++) {
        if (i % 2) {
            result++
        }
    } return result;
}

console.log(`Q5: ${numOfOdds(15)}`)
// console.log(numOfOdds(15));
// console.log(numOfOdds(3));

// original broken code I had to fix. 
// const numOfOdds = function (integer) {
//     let result = 0 ;
//     for (let i = integer; i >= integer; i++) {
//         if (integer % 2) {
//             result++
//         }
//     } return result;
// }

// console.log(numOfOdds(4));
// I asked claude to guide me through why it wasn't working. The mistake I made is
// that integer wasn't the correct input to use in the for loop for the let statement. 
// In this case, the loop needed to start at 0. I also had to change the condition to
// i <= integer. This way i can start at 0 and go up to integer. Also, in my if statement 
// integer never actually changes so it will only increase result if the integer is odd. 
// And if the loop was correct it still wouldnt work because I would be increasing result if
// i was odd, it would be true every time if integer was odd, and it would also break if integer
// was even.

// So that's what I learned from this challenge. 
// Claude corrected me. 
// "If I checked integer % 2 instead of i % 2, the result would always be the same 
// — either counting every number if integer was odd, or counting nothing
// if integer was even."


// I created a global alias to git add and git commit and git push all in one command. 