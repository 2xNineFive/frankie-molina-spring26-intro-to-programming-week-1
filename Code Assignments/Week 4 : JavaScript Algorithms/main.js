// Practice your pseudo-code thinking! Before coding, try writing out the steps for these everyday tasks:

// Making a cup of coffee
// 1. Pick coffee bean
// 2. Grind coffee bean
// 3. Add filter to coffee maker
// 4. Add ground coffee
// 5. Turn on machine
// 6. Wait for machine to make coffee
// 7. Grab cup and add coffee
// 8. Add sugar, creamer, and other things

// Brushing your teeth
// 1. Grab toothbrush
// 2. Add toothpaste
// 3. Run water over it 
// 4. Turn off water
// 5. Brush teeth for two minutes
// 6. Rinse mouth with water
// 7. Rinse mouth with mouthwash

// Checking if you need an umbrella (hint: check weather!)
// 1. Open weather app on phone
// 2. Check weather for today's date
// 3. If high chance of rain; take unbrella
// 4. If no chance of rain; don't take umbrealla




// AI Learning Prompt: Retrieval Practice
// Open your preferred AI chatbot.
// Explain the concept of an algorithm using an everyday example (like making a sandwich or doing laundry).
// Ask the AI to provide feedback on whether your example accurately represents how a computer follows a set of instructions.

// An algorithm is a sequence of steps that can be used repetiviely by anyone and achieve a specific outcome. An everyday example could be putting on my mexican guaraches. I start by grabbing one and slipping my foot. Then I slip the heelstrap over my heel. I repeat the same steps for my other foot. Then I wiggle both feet to make sure the fit is snug. If necessary, I adjust the tightness of the heelstrap. My guaraches are new, so the leather is still stretching. 

// This is Claude's response: 
// Love the guaraches example — and your definition is solid. Let me give you real feedback on both.

// Your definition ✅
// "A sequence of steps that can be used repetitively by anyone and achieve a specific outcome" — that's actually a really good definition. You hit the two big ideas: repeatable and specific outcome. Nice.

// Your example — mostly great, one thing to sharpen
// You nailed a few key algorithm concepts without probably even realizing it:

// Sequential steps — you do things in order (grab, slip, strap, repeat)
// Repetition/loops — "repeat the same steps for the other foot"
// Conditionals — "if necessary, adjust the tightness" ← that's an if statement in disguise

// The one thing a computer would need that your example is missing is more precision. Computers can't interpret "wiggle both feet to make sure the fit is snug" — that's too vague. A computer needs exact, unambiguous instructions. Like, what does snug mean? How do you measure it?
// That's not a flaw in your thinking — it's actually the whole point of learning pseudocode. You're learning to bridge the gap between how humans think and how computers need instructions written.




// Mindset Questions 
// Please submit the following with your weekly assignment:
// - What’s one thing that you were curious to learn more about recently (this doesn’t need to be coding-related)? How did you learn more about it?
// - What’s one best practice you’ve learned in your first few weeks at CTD that you don’t know “the why” behind? How can you find out “the why”?

// Question 1:
// I suspected corruption regarding a recent data center proposal in my city that the council unanimously approved. I had heard rumors mentioning corruption, so I started digging. I started by looking at the proposal itself and asking Claude to analyze it and share key findings. After that, I searched for the company in the California Secretary of State database and looked at all their land purchases. What struck me was that they had been operating since 2019 and were doing business with companies that are being investigated by the SEC. Claude guided me through the process of finding documents that could prove or deny things rather than just giving me answers. Through this process I learned how to investigate government contracts, how to file CPRA requests, and how to legally interact with my city council.

// Question 2:
// One best practice I've learned at CTD that I didn't know the why behind is camelCase. I understood it was easier to read, but I was curious why spaces weren't an option and how camelCase became the standard when other options exist. I looked into it and learned that camelCase became the norm largely because early programming languages couldn't use spaces in variable names, so developers needed a readable alternative. It spread because influential languages like C and Java adopted it, and the convention was passed down from there. I plan to keep exploring this through YouTube and by asking Claude to point me toward resources on programming history and conventions.



//----------------------------------
// LESSON 4 ALGORITHMS
//----------------------------------

// ---------- QUESTION 1 ----------
// Create a function called 'convertTemp' that takes 1 temperatue parameter in celsius and return the temperature in Fahrenheit. Log both the input and output values

// EXAMPLE LOG:
//  console.log("Q1 convertTemp: ", celsiusTemp, convertTemp(celsiusTemp));
// EXAMPLE OUTPUT:
//  Q1 convertTemp: 0 32

// Call convertTemp with several different celsium temperatures

// PUT YOUR CODE HERE
const celsiusTemp1 = 13;
const celsiusTemp2 = -30;
const celsiusTemp3 = 100;


const convertTemp = function (tempInCelsius) {
    const fahrenheit = ((tempInCelsius * 9/5) + 32);
    return fahrenheit; 
}

console.log("Q1 convertTemp: ", celsiusTemp1, convertTemp(celsiusTemp1));
console.log("Q1 convertTemp: ", celsiusTemp2, convertTemp(celsiusTemp2));
console.log("Q1 convertTemp: ", celsiusTemp3, convertTemp(celsiusTemp3));



// ---------- QUESTION 2 ----------
// Create a function called 'reverseString' that takes 1 string parameter and returns the reverseString. Use a for loop. Log both the input and output values.

// EXAMPLE LOG:
//  console.log("Q2 reverseString: ", inputString, reverseString(inputString));
// EXAMPLE OUTPUT:
//  Q2 reverseString: HelloWorld dlroWolleH

// Call reverseString with several different strings. Make sure it works for an empty string.

// PUT YOUR CODE HERE

const string1 = "Hello World";
const string2 = "AI is really cool";
const string3 = "Coding is really fun because it challenges me"
const string4 = ""

const reverseString = function (inputString) {
    let result = "";
    for (let i = inputString.length - 1; i >= 0; i--) {
        // capture letter and add it to result
        result += inputString[i]
    }
    return result;
}

console.log("Q2 reverseString: ", string1, reverseString(string1));
console.log("Q2 reverseString: ", string2, reverseString(string2));
console.log("Q2 reverseString: ", string3, reverseString(string3));
console.log("Q2 reverseString: ", string4, reverseString(string4));



// Good call on pseudocode first. Here are your three questions:
// Question 1: A for loop has three parts — a starting point, a condition, and an increment. If you were reading a string backwards, where would you start and where would you stop?
// Question 2: How do you access a single character in a string by its position? For example, how would you grab just the "H" out of "Hello"?
// Question 3: You need to build the reversed string one character at a time as the loop runs. What variable would you create to collect those characters, and what would its starting value be?

// You said: 

// Q1: for (let i=0, i < inputString.Q1: for (let i=0, i < inputString.length, i++); I would start at the end and I would stop at the beginning. So instead of the first loop I mentioned, maybe I could do this instead: for (let i=inputString.length, i = 0, i--)

// Q2: i would grab a single character by using inputString[i];

// Q3: I would need to create a variable and set it to an empty string. Let reverseString = "";12:11 AMClaude responded: Really solid thinking across all three.Really solid thinking across all three. Let me give you feedback:

// Q1 ✅ — Right idea, small syntax fixes
// Two things: commas should be semicolons inside a for loop. And your starting point needs to be inputString.length - 1 not inputString.length. That's because string indexes start at 0, so the last character is always at length - 1. Also your condition should be i >= 0 not i = 0 — one equals sign means you're assigning, not comparing.
// So it would look like:
// javascriptfor (let i = inputString.length - 1; i >= 0; i--)

// Q2 ✅ — Perfect.
// inputString[i] is exactly right.

// Q3 ✅ — Right idea, one naming flag
// Just watch out — you named your accumulator variable reverseString but that's already the name of your function. That'll cause a conflict. Pick a different name like reversed or result.

// You've got everything you need now. Try writing the full function in pseudocode first, then translate it to code. Give it a shot!






// ---------- QUESTION 3 ----------
// Let's make a useful math problem - create a tip calculator! Create a function named tipCalculator that takes two parameters - billTotal and tipPercentage.  Return the total bill amount

// EXAMPLE LOG:
//  console.log("Q3 tipCalculator: ", tipCalculator (20, .20));
// EXAMPLE OUTPUT:
//  Q3 tipCalculator: 50 0.2 60

// PUT YOUR CODE HERE

// Don't forget your console.logs!

const billTotal1 = 20;
const tipPercentage1 = .20;

const billTotal2 = 100;
const tipPercentage2 = .25;

const billTotal3 = 100;
const tipPercentage3 = 0;

const tipCalculator = function (billTotal, tipPercentage) {
    const result = (billTotal * tipPercentage) + billTotal;
    return result;
}

console.log("Q3 tipCalculator: ", billTotal1, tipPercentage1, tipCalculator (billTotal1, tipPercentage1));
console.log("Q3 tipCalculator: ", billTotal2, tipPercentage2, tipCalculator (billTotal2, tipPercentage2));
console.log("Q3 tipCalculator: ", billTotal3, tipPercentage3, tipCalculator (billTotal3, tipPercentage3));







// ---------- QUESTION 4 ----------
// Create two variables named 'num1' and 'num2' and assign them integer values. Create a function called 'multiplyThese' that takes 2 parameters and returns the product of the two parameters (as a reminder, a product is the resulting number when two numbers are multiplied together).

// EXAMPLE LOG:
//  console.log("Q4: ", num1, num2, multiplyThese(num1, num2));
// EXAMPLE OUTPUT: 
//  Q4 multiplyThese: 10 10 100

// PUT YOUR CODE HERE
const num1 = 200;
const num2 = 3000;

const multiplyThese = function (num1, num2) {
    return num1 * num2
}

console.log("Q4 multiplyThese: ", num1, num2, multiplyThese(num1, num2));

// ---------- QUESTION 5 ----------
// Create a function called 'getAverage' that takes 2 parameters and returns their average. NOTE: In some programming languages, the types of numbers you use in equations can effect what type of number (integer/floating point) you get as a result. We suggest using 2.0 instead of 2 as you're calculating the average.

// EXAMPLE LOG:
//  console.log("Q5 getAverage: ", 3, 6, getAverage(3.0, 6.0));
// EXAMPLE OUTPUT: 
//  Q5 getAverage: 3 6 4.5

// PUT YOUR CODE HERE

const getAverage = function (num1, num2) {
    // let number1 = Number(num1.toFixed(1)) 
    // let number2 = Number(num2.toFixed(1)) 
    // const result = (number1 + number2) / 2;
    const result = (num1 + num2) / 2;
    // return result;
    return Number(result.toFixed(1));
}

console.log("Q5 getAverage: ", 3, 6, getAverage(3, 6));
console.log("Q5 getAverage: ", 3, 6, getAverage(3.0, 6.0));
console.log("Q5 getAverage: ", 4.23, 6.45, getAverage(4.23, 6.45));
console.log("Q5 getAverage: ", 4.2, 6.4, getAverage(4.2, 6.4));
console.log("Q5 getAverage: ", 200, 300, getAverage(200, 300));

// I went ahead and researched methods to handle what type of number I get as a result. I chose the Number() method because .toFixed returns a string, and Number() converts that string back to a number inside the function getAverage. That way I don't have to remember to type 2.0 instead of 2. 

// Me and Claude went back and forth about our reasoning. My code does change the input a bit by rounding. I agree with that, and Claude suggested I round the output instead. So we agreed on that approach. 

// Round the result not the inputs, so the function stays accurate while still returning a clean decimal. Using toFixed(1) on the inputs before calculating silently corrupts the math. Using it on the result after calculating gives you clean output without affecting accuracy.
// Note the tradeoff too — toFixed(1) always rounds to one decimal place, so if a result naturally has more meaningful decimals (like 5.347), you'd lose that precision. Keep that in mind for future use cases where precision matters more. But I can change the parameter of toFixed to more decimal places if I want to. 

// The instructions say to use 2.0 instead of 2 as a cross-language habit, but in JavaScript they are identical. JS treats all numbers the same way regardless of whether you write a decimal point or not. I guess using the Numbers method was unnecessary in the case of JS but I just wanted to avoid any issues to begin with.





// ---------- QUESTION 6 ----------
// Create a function named 'isPrime' that returns true or false based on whether the number is prime or not.
// Hint: To determine if a number is prime, you can check if it's divisible by any number from 2 up to the square root of the number. 0 and 1 are not prime numbers.
// Make sure you test several prime and non prime numbers along with 0 and 1.

// EXAMPLE LOG:
//  console.log("Q6 isPrime: ", number, isPrime(number));
// EXAMPLE OUTPUT: 
//  Q6 isPrime: 12 false

// PUT YOUR CODE HERE


const isPrime = function (number) {
    if (number <= 0 || number === 1) {
        return false;
    } else if (number === 2) {
        return true;
    } else if (number > 2) {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                 return false;
            }
        } 
    }
    return true;
}

console.log("Q6 isPrime: ", 0, isPrime(0));
console.log("Q6 isPrime: ", 1, isPrime(1));
console.log("Q6 isPrime: ", 2, isPrime(2));
console.log("Q6 isPrime: ", 3, isPrime(3));
console.log("Q6 isPrime: ", 12, isPrime(12));
console.log("Q6 isPrime: ", 29, isPrime(29));
console.log("Q6 isPrime: ", -3, isPrime(-3));

// I was curious why we used the square root. So I chatted with Claude about it. Here's that conversation: 

// why did we use the square root though? Is that a trick so that the for loop doesn't run a huge calculation when the number gets super big?11:26 AMClaude responded: Exactly right — great intuition.Exactly right — great intuition.
// Here's the math behind it. If a number has a divisor larger than its square root, it must also have a corresponding divisor smaller than its square root. They come in pairs.
// For example take 36. Its square root is 6. The factor pairs are:

// 2 × 18
// 3 × 12
// 4 × 9
// 6 × 6

// Notice that one number in every pair is always 6 or below. So if you've checked everything up to 6 and found nothing, there's nothing to find above 6 either.
// So instead of checking every number up to 36, you only check up to 6. Now imagine doing that with a number like 1,000,000 — instead of 999,998 checks you only need 1,000. That's a massive performance win.
// In computer science that's called optimization — making your code faster without changing what it does. You stumbled into a classic one. 🤙


// I think this ties into what we were learning about this week about algorithms. It seems like using this square root approach to finding numbers helps optimize our searching algorithm. This may not seem like a big deal now, but if for some reason I were computing large calculations, it would make sense to find intelligent ways to optimize them. 


// ---------- QUESTION 7 ----------
// Using the 'isPrime' function created in the previous question, create another function named 'getPrimesUpTo' that takes an integer as an input and returns an array of all primes up to and including the input number. 
// Be sure to include several test cases

// EXAMPLE LOG:
//  console.log("Q7 getPrimesUpTo: ", number, isPrime(number));
// EXAMPLE OUTPUT:
//  Q7 getPrimesUpTo: 13 [2,3,5,7,11,13]

// PUT YOUR CODE HERE


const getPrimesUpTo = function (number) {
    const result = [];
    for (let i = 2; i <= number; i++) {
        if (isPrime(i) === true) {
            result.push(i);
        }
    }
    return result;
}


console.log("Q7 getPrimesUpTo: ", 0, getPrimesUpTo(0));
console.log("Q7 getPrimesUpTo: ", 2, getPrimesUpTo(2));
console.log("Q7 getPrimesUpTo: ", 3, getPrimesUpTo(3));
console.log("Q7 getPrimesUpTo: ", 19, getPrimesUpTo(19));
console.log("Q7 getPrimesUpTo: ", -19, getPrimesUpTo(-19));



// A bug was introduced with my original isPrimes function. I thought the loop did not need to start at 2 because that case was being handled in the conditional statements. But it needed to be included so that getPrimesUpTo could function properly. Since it was initially starting at 3, numbers divisble by 2 were not being checked and so they were being passed into the getPrimesUpToArray. 

// I was also bothered by the fact that negative numbers are not truly prime numbers but negative numbers could get passed in and result as true in isPrime. So I updated isPrime to handle negative numbers too. 

// I also noticed the example log comment provided by the school had an error — it showed isPrime(number) instead of getPrimesUpTo(number). I caught this because my output didn't look right, so I traced it back to the log and found the issue. Fixed it on my own.



// ---------- QUESTION 8 ----------
// Now, we're going to write several functions that calculate a student's grade.  
// First, write a function named 'calculateAverage' that takes an input array of scores and calculates a student's average based on those scores.
// Check all of the grades in the array and ignore any values that are not in the range 0 - 100.
// Also, make sure that an empty array or no valid values in the array do not result in an error (hint: make sure you aren't dividing by 0)

// EXAMPLE LOG:
//  console.log("Q8 calculateAverage: ", calculateAverage(scores));
// EXAMPLE OUTPUT:
//  Q8 calculateAverage: 85 // input array let scores = [90, 80, 85];

// PUT YOUR CODE HERE
// const calculateAverage = function (gradesArray) {
//     let result = 0;
//     // I need to create a variable to store my result.

//     // I need a for loop to iterate through each grade in the array and sum up the total. 

//     for (let i = 0; i <= gradesArray.length - 1; i++) {
//         if (i < 0 || i <= 100) {
//             result = result + gradesArray[i] / gradesArray.length;
//         }

//     } 
//     return result;

//     // Then I need to divide the result by gradesArray.length to get the average. 



const calculateAverage = function (gradesArray) {
let result = 0;
let validGrades = [];

    for (let i = 0; i <= gradesArray.length - 1; i++) {
        if (gradesArray[i] >= 0 && gradesArray[i] <= 100) {
            validGrades.push(gradesArray[i]);

            result = result + gradesArray[i];
        }
    } 
    if (validGrades.length === 0) {
        return "No Grades were inputted or no grades were valid."
    } else return result / validGrades.length;
}

console.log("Q8 calculateAverage: ", calculateAverage([1, 2, 3]));
console.log("Q8 calculateAverage: ", calculateAverage([0, 0, 0]));
console.log("Q8 calculateAverage: ", calculateAverage([-2, -2, -2]));
console.log("Q8 calculateAverage: ", calculateAverage([101, 98, 103]));
console.log("Q8 calculateAverage: ", calculateAverage([100, 100, 100]));


// I got stuck several time so I needed to go to Claude and tell him to ask me 3 questions each time I got stuck. I need to remember that I need to use the bracket notation to access the value of i rather than i itself when I am trying to use the contents of the array. That caused issues for me. I was also overcomplicating the problem to handle only number <= 0 and >=100. Claude caught the mistakes I made in that logic, but I didn't. So I need to find a way to think better about conditions. 



// ---------- QUESTION 9 ----------
// Now, create a function - getLetterGrade(average) - that takes a grade average and returns a letter grade based on the following scale. Make sure you test with several averages.
// A: 90–100
// B: 80–89
// C: 70–79
// D: 60–69
// F: below 60

// EXAMPLE LOG:
//  console.log("Q9 getLetterGrade: ", getLetterGrade(95));
// EXAMPLE OUTPUT:
//  Q9 getLetterGrade(95): A

// PUT YOUR CODE HERE

const getLetterGrade = function (average) {
    if (average < 60) {
        return "F";
    } else if (average >= 60 && average <= 69) {
        return "D";
    } else if (average >= 70 && average <= 79) {
        return "C";
    } else if (average >= 80 && average <= 89) {
        return "B";
    } else if (average >= 90 && average <= 100) {
        return "A";
    } else return "Enter a valid grade";
}

console.log("Q9 getLetterGrade: ", getLetterGrade(95));
console.log("Q9 getLetterGrade: ", getLetterGrade(-10));
console.log("Q9 getLetterGrade: ", getLetterGrade(10));
console.log("Q9 getLetterGrade: ", getLetterGrade(67));
console.log("Q9 getLetterGrade: ", getLetterGrade(70));
console.log("Q9 getLetterGrade: ", getLetterGrade(85));
console.log("Q9 getLetterGrade: ", getLetterGrade(101));


// hmmm responses over 100 result in a grade of undefined. I added one more statement that says Enter a valid grade. 


// ---------- QUESTION 10 ----------
// Create a 3rd function named - passed(letterGrade) - that returns true if a student's grade is A, B or C, false otherwise. Make sure you handle a value other than A,B,C,D or F passed in.

// EXAMPLE LOG:
//  console.log("Q10 passed('A'): ", passed('A'));
// EXAMPLE OUTPUT:
//  Q10 passed('A''): true

// PUT YOUR CODE HERE

// const passed = function (letterGrade) {
//     // I still need to handle values other than A,B,C,D or F passed in.
//     if (letterGrade === "A" || letterGrade === "B" || letterGrade === "C" ) {
//         return true; 
//     } else if (letterGrade === "D" || letterGrade === "F") {
//         return false;
//     } else if (letterGrade !== "A" || letterGrade !== "A" || letterGrade !== "A" || letterGrade !== "A" || letterGrade !== "A")  
// }


// I decided to rewrite my code into a switch statement instead for readability.


// const passed = function (letterGrade) {
//     switch (letterGrade) {
//         case "A":
//             return true;
//         case "B":
//             return true;
//         case "C":
//             return true;
//         case "D":
//             return false;
//         case "F":
//             return false;
//         default: 
//             return "Enter a valid grade."
//     }
// }

// Claude said I can stack multiple cases together when they do the same thing to avoid repetition. 


const passed = function (letterGrade) {
    letterGrade = letterGrade.toUpperCase();
    switch (letterGrade) {
        case "A":
        case "B":
        case "C":
            return true;
        case "D":
        case "F":
            return false;
        default: 
            return "Enter a valid grade."
    }
}

console.log("Q10 passed('A'): ", passed('A'));
console.log("Q10 passed('B'): ", passed('B'));
console.log("Q10 passed('C'): ", passed('C'));
console.log("Q10 passed('D'): ", passed('D'));
console.log("Q10 passed('F'): ", passed('F'));
console.log("Q10 passed('G'): ", passed('G'));
console.log("Q10 passed(''): ", passed(''));
console.log("Q10 passed('a'): ", passed('a'));
console.log("Q10 passed('b'): ", passed('b'));


// The function is not lowercase sensitive. If the parameter is entered as a lowercase, enter a valid grade is returned. I need to fix that. I can do that by converting the parameter, which is a letter grade, toUpperCase. I would add that string method before the switch statement to ensure we are comparing apples to apples. 

// Awesome! Everything works as expected now! 





// ---------- QUESTION 11 ----------
// Create a function named printClassResult (className, student, scores) that utilizes all three functions to output information on a student.
// Print yes is they have passed and no if they did not.

// EXAMPLE LOG:
//  console.log("Q11: ", printClassResult ("History 101", "Jane Doe", [60, 70, 85, 87]));  
// EXAMPLE OUTPUT:
//  Q11: History 101 - Student: Jane Doe, Average: 75.5, Grade: C, Passed: yes

// PUT YOUR CODE HERE


// const printClassResult = function (className, student, scores) {
//     const averageScore = calculateAverage(scores);
//     const letterGrade = getLetterGrade(averageScore);
//     const didPass = passed(letterGrade);
//     if (didPass === true) {
//         return "yes";
//     } return "no"

//     return `Student: ${student}, Average: ${averageScore}, Grade: ${letterGrade}, Passed: ${didPass}`

// }


// console.log("Q11: ", printClassResult ("History 101", "Jane Doe", [60, 70, 85, 87]));

// This is where I am at so far. I want to make the output say exactly what expected output is. So I need to find a way to make the pass statement say yes or no. I am trying to wrap my head around it, and I think I got it! 


const printClassResult = function (className, student, scores) {
    const averageScore = calculateAverage(scores);
    const letterGrade = getLetterGrade(averageScore);
    let didPass = passed(letterGrade);



    switch (didPass) {
        case true : 
            didPass =  "yes";
            break;
        case false : 
            didPass = "no"
            break;
    }
    
    return `${className} - Student: ${student}, Average: ${averageScore}, Grade: ${letterGrade}, Passed: ${didPass}`

}


console.log("Q11: ", printClassResult ("History 101", "Jane Doe", [60, 70, 85, 87]));
console.log("Q11: ", printClassResult ("History 101", "Jane Doe", [60, 70, 0, 8]));
console.log("Q11: ", printClassResult ("History 101", "Jane Doe", [600, 700, 0, -20]));
console.log("Q11: ", printClassResult ("History 101", "Jane Doe", [600, 700, 60, -20]));
console.log("Q11: ", printClassResult ("History 101", "Jane Doe", [600, 700, 80, -20]));
console.log("Q11: ", printClassResult ("History 101", "Jane Doe", [600, 700, 98, -20]));
console.log("Q11: ", printClassResult ("History 101", "Jane Doe", [30, 100, 40, 95]));




// ---------- QUESTION 12 ----------
// Now, let's see how to use a callback. First, create a function that simulates pushing a button. Name the function buttonPushed and log the message "The button was pushed!" in the function.

// EXAMPLE CALL: (the log is within the function, so you do not need to log the call)
//  buttonPushed();

// EXAMPLE OUTPUT: (we're using this function in the next question as well)
//  Q12, Q13: The button was pushed!

// PUT YOUR CODE HERE


// ---------- QUESTION 13 ----------
// Now, create a function called simulateButtonPush and pass the function created in question 12 to that function.

// EXAMPLE CALL: (the log is within the function, so you do not need to log the call)
//  simulateButtonPush(buttonPushed);

// EXAMPLE OUTPUT: 
//  The button was pushed!

// PUT YOUR CODE HERE