// Opgave 1 What to wear
// Create a function (that you have to name) that has temperature as parameter.
// Based on the temperature it should return a string with what the user should wear.
// You decide what the user should wear based on the temperature.
function whatShouldIWear(temperature){
    // List med det tøjet i garderoben
    let whatClothesShouldIWear
    if (temperature >= 21) {
        whatClothesShouldIWear = `If the temperature is ${temperature}. Then you should wear a T-Shirt & shorts`
    } else if (temperature < 21 && temperature >= 11) {
        whatClothesShouldIWear = `If the temperature is ${temperature}. Then you should wear a hoodie & pants`
    } else if (temperature < 11) {
        whatClothesShouldIWear = `If the temperature is ${temperature}. Then you should wear a jacket & a pair of warm pants`
    }
    return whatClothesShouldIWear
}
// Eksempler på brug af funktionen.
const clothesToWear2 = whatShouldIWear(22);
console.log(clothesToWear2);

const clothesToWear = whatShouldIWear(18);
console.log(clothesToWear);

const clothesToWear3 = whatShouldIWear(10);
console.log(clothesToWear3);

// Opgave 2 - Part 1
// Write a function that simulates a dice roll.
// You call the function with the number of times you would like to roll the dice.
// Every time the dice hits a 6 log out You just hit 6!

// Part 2
// If the user hits 6 in every roll the log out Jackpot 🎉

function diceRoll(amountOfRolls) {
    // Create the for loop, so it loops the amount of times specified
    for(let i = 0; i < amountOfRolls; i++) {
        // Create the random roll
        let randomDiceRoll = Math.floor(Math.random() * 6 )+ 1;

        if (randomDiceRoll === 6 ) {
            console.log("You just hit 6!")
        }
    }

}
// Eksempler med brug af funktionen
diceRoll(10)



