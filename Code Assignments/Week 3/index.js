// Challenge: 
// 1. Create three variables - bar, cafe, restaurant - and set their values to a bar, a cafe and a restaurant in your city
// 2. Create an object - favouritePlaces - and populate it with your variables from task 1
// 3. If you're not already using the object property shorthand, refactor your code to do so
// 4. Create a method on the object - greeting() -  that logs out a message to the console
// 5. Invoke the greeting() method and also log out your favourite restaurant to the console


let bar = "Bart's";
let cafe = "Lunar Bloom";
let restaurant = "Angry Chikz";

const favouritePlaces = {
    bar,
    cafe, 
    restaurant,
    greeting() { console.log('Hello World'); }
};

console.log(favouritePlaces["restaurant"]);
favouritePlaces.greeting();


favouritePlaces["greeting"]();

// long hand attempt. This was actually my second attempt. I thought this was shorthand, but it turns out that creating the variables first and then adding those variables to the object is the shorthand method. 

// const favouritePlaces = {
//     bar : "Bart's",
//     cafe : "Lunar Bloom",
//     restaurant : "Angry Chikz",
//     const greeting = function () {
//         {console.log('Hello World')}
//     }
// };


