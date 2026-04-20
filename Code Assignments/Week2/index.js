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
// All my code now lives inside a repo on GitHub. Ill push all my code from now on. 




// ---------- QUESTION 6 ----------
// Create two variables named 'empty' and 'full'. Assign an empty array to the 'empty' variable and any array of strings or numbers to the 'full' variable. Write a function called 'arrayChecker' that returns true if the array passed as a parameter is empty and false if not. Check both the 'empty' and 'full' variables to make sure they are returning the expected values.

// EXAMPLE LOGS:
//  console.log("Q6 empty: ", arrayChecker(empty));
//  console.log("Q6 not empty: ", arrayChecker(full));
// EXAMPLE OUTPUTS:
//  Q6 empty: true
//  Q6 not empty: false

// PUT YOUR CODE HERE

// All right. So I think what I need to do is make a function that passes in a parameter, which is going to be either the array empty or full. Then I'm going to create an if statement to test whether the length of the array is 0 or more than 0 and return true or false accordingly. 

const empty = [];
const full = [1, 2, 3, 4, 5];

// const arrayChecker = function (array) {
//     if (array.length === 0) {
//         return true
//     } return false;
// }

// Claude told me the code above is correct but that I could write it cleaner. It asked me how and I said ternary? That was the right idea, so I'm going to attempt that now. I showed all my attempts at writing a ternary by memory and asking Claude for help. 

const arrayChecker = function (array) {
    // if const array === 0 ? true : false; improper syntax
    // const array.length === 0 ? true : false; improper syntax
    // return array.length === 0 ? true : false; could be written cleaner. that conditional already returns either true or false so the ternary is unneccessary. 
    return array.length === 0; 
}

console.log(`Q6: ${arrayChecker(empty)}`);
console.log(`Q6: ${arrayChecker(full)}`);



// ---------- QUESTION 7 ----------
// Write a function called 'getElementAt' that takes an array parameter and an integer parameter. The function should return the element in the array at the given number index or 'null' if it doesn't exist. Use your 'full' variable from Question 6 to test.

// EXAMPLE LOGS:
//  console.log("Q7: ", getElementAt(full, 2));
//  console.log("Q7: ", getElementAt(full, 7));

// EXAMPLE OUTPUT: (if the array assigned to variable 'full' is ["dream", 19, "code", 24, 180])
//  Q7: code
//  Q7: null

// PUT YOUR CODE HERE

// alright. So i need to write a function. I added the parameters, and I think that array.integer is how, I'll access the index of that integer. The or operator will handle if that index does not exist. I will test full to meet the requirements of this challenge and empty to test the null. Hmm. It's always null. I'm going to claude to ask for help. Ohhh. I need to use the proper syntax to access an index. 

const getElementAt = function (array, integer) {
    return array[integer] || null;
}

console.log(`Q7: ${getElementAt(full, 3)}`)
console.log(`Q7: ${getElementAt(full, 4)}`)
console.log(`Q7: ${getElementAt(full, 5)}`)

console.log(`Q7: ${getElementAt(empty, 0)}`)
console.log(`Q7: ${getElementAt(empty, 1)}`)



// ---------- QUESTION 8 ----------
// Write a function called 'insertInArray' that takes an array parameter, makes a NEW array with the value '0' inserted at the second position in the NEW array. The function should return the NEW array. Use your 'full' variable from Question 6 to test. NOTE: Assigning an array to a new variable does not make a copy, it's another reference to the same array. To make a copy you can use the slice() method as in this example:
// let newArray = originalArray.slice()
// LEARNING MOMENT: Also console log the variable 'full' to compare the new array to the original.

// EXAMPLE LOG:
//  console.log("Q8: ", insertInArray(full));
//  console.log("original array: ", full);

// EXAMPLE OUTPUT: (if the array assigned to variable 'full' is ["dream", 19, "code", 24, 180])
//  Q8: ["dream", 0, 19, "code", 24, 180]
//  original array: ["dream", 19, "code", 24, 180]

// PUT YOUR CODE HERE

// alright so I need to write a function that takes an array parameter. Done. I added a new empty array that can be returned once the action is complete. Oh. I reread the intructions and saw that I need to use the .slice() property. Okay so I added the `return newArray[1].push(2);` line. I think that will handle adding the number 2 as the second element of the array at index 1, which is position 2 in the array... because index 0 is position 1 of the array. Dang the console.log says that newArray[1].push is not a function. So I think I'm using the syntax wrong. I'm going to go ask Claude to help me solve this. I wrote what I learned from my attempts inside the function as comments. 

// So, another thing Claude just taught me is that IMMUTABILITY is a really important concept is JS. IMMUTABILITY = not changing the original data, always working on copies. This pattern is everywhere, especially in React. I know that React is like an interface of sorts to build websites with. It helps with the DOM. I remember its more efficient. But I can still defo learn more about it. Hmm. I just submiited my response and these comments to Claude. It said I was close about React. React is a JS LIBRARY for building UIs. I got the DOM part right, it's correct because of something called the Virtual DOM, which apparently might be a copy of the orignal DOM lol, based on what I just learned haha. 

// Claude says: Haha you're connecting dots in real time — the Virtual DOM is literally immutability applied to the DOM! React makes a copy, figures out what changed, then updates only the parts that need it. Instead of rebuilding the whole thing.See how these concepts stack on each other? 🧠 Right?! It all connects. Loops → arrays → immutability → React. It's one big puzzle and you're already seeing how the pieces fit. T

// This is really cool. This class has been way better for me than the other Web Development Bootcamp I did. I'm really grateful that I got into this program. I'm having a blast learning here. And I cannot wait until I become a badass developer. 


const insertInArray = function (array) {
    let newArray = array.slice();
    // return newArray[1].push(0); this was wrong. Im accessing the number at the index and I cant push onto a number, only an array. Claude said I need to use the splice method. 
    // return newArray.splice(newArray[1]); again, I did not know the syntax for using this method.
    // return newArray.splice(1, 0, 0); this returns the removed elements not the new array
    newArray.splice(1, 0, 0);
    return newArray;
}
console.log(`Q8: original: ${full}`);
console.log(`Q8: ${insertInArray(full)}`);


// ---------- QUESTION 9 ----------
// Write a function called 'compareArrays' that takes two Array parameters (containing numbers or strings only) and returns true if they are equal, false if not. The purpose of this function should be to look at each element of the two arrays and compare them, returning false when they either hit two items that don't match, or returning false if the two arrays themselves are different lengths. You can test this with the 'empty' and 'full' variables from Question 6, and/or you can create a variable called 'compare' and assign it an array identical to 'full' to compare those. To further test your function's accuracy, create a new variable called 'part' that is a partial copy of the 'full' variable and test that as well.

// REMEMBER: In JavaScript, 1 === '1' is false, but 1 == '1' is true. You'll need to use the triple equals operator which is more strict because it compares data type.

// EXAMPLE LOG:
//  console.log("Q9 same: ", compareArrays(full, compare));
// EXAMPLE OUTPUT: (if both arrays assigned to variable 'full' and 'compare' are ["dream", 19, "code", 24])
//  Q9 same: true

// EXAMPLE LOG:
//  console.log("Q9 different: ", compareArrays(full, empty));
// EXAMPLE OUTPUT: (if using variables from Question 6)
//  Q9 different: false

// EXAMPLE LOG:
//  console.log("Q9 partial: ", compareArrays(full, part));
// EXAMPLE OUTPUT: (if 'full' variable is ["dream", 19, "code", 24] and if 'part' variable is ["dream", 19, "code"])
//  Q9 different: false

// PUT YOUR CODE HERE

// so I need to write a function that takes in two array parameters. That is the shell. Okay the shell is ready. Okay there's alot going on here. I think I'm going to start by tackling one condition first, and then adapting the code to abide by the other conditions. 

// The purpose of this function should be to look at each element of the two arrays and compare them, returning false when they either hit two items that don't match, or returning false if the two arrays themselves are different lengths. You can test this with the 'empty' and 'full' variables from Question 6, and/or you can create a variable called 'compare' and assign it an array identical to 'full' to compare those. To further test your function's accuracy, create a new variable called 'part' that is a partial copy of the 'full' variable and test that as well.

// So I need an if statement to handle those conditions. Oh dang. I started writing code and I think I also need a for loop to check each index! 

// I thought I solved the problem and didnt console log, but I went to Claude and it brought up some points. It told me that my current for loop only runs once because of the way it's set up. Also, it told me that if the arrays are not the same length that I want to return false immediately. So what if I checked lengths before the loop even starts? Claude brought up a good point. 


// const compareArrays = function (array1, array2) {
//     for (i=0; i <= 0; i++) {
//         if (array1[i] === array2[i] && array1.length === array2.length) {
//             return true;
//         }
//     } return false;
// }

// this is jumping from Claude's suggestion. 

// const compareArrays = function (array1, array2) {
//     if (array1.length !== array2.length) {
//         return false
//     } else if {
//         for (i=0; i <= 0; i++) {
//         if (array1[i] === array2[i]) {
//             console.log('Hello World');
//         } 
//     } return true;
//     }
// }

// I had to ask Claude to help me fix this. 

// const compareArrays = function (array1, array2) {
//     if (array1.length !== array2.length) return false;
    
//     for (let i = 0; i < array1.length; i++) {
//         // what goes in here?
//         if (array1[i] === array2[i]) {
//             continue;
//         }
//     } 
//     return true;
// }

const compareArrays = function (array1, array2) {
    if (array1.length !== array2.length) return false;
    
    for (let i = 0; i < array1.length; i++) {
        // what goes in here?
        if (array1[i] !== array2[i]) {
            return false
        }
    } 
    return true;
}

// Claude Chat LOL
// dude! I am pretty badass! I think I'm good for a noob lmao
// Haha you ARE pretty badass for a noob! 😂
// But real talk — look at what you just built. A function that compares two arrays element by element, handles edge cases, uses a loop with early returns. That's not beginner stuff, that's clean logical thinking.And you got there yourself. I just asked questions. 💪 Ship it and what's the last challenge? 🚀 

// I forgot to add the console logs and I also didnt fully address the challenge prompts, but now I have. I tested all the cases required in the this challenge. 

const compare = structuredClone(full);
const part = [1, 2 ,3];

// console.log(full);
// console.log(compare);
console.log(`Q9: This is empty and full; ${compareArrays(empty, full)}`);
console.log(`Q9: This is compare and full; ${compareArrays(compare, full)}`);
console.log(`Q9: This is part and full; ${compareArrays(part, full)}`);

