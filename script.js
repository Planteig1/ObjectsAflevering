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
    let jackpotTrueOrFalse = true
    // Create the for loop, so it loops the amount of times specified
    for(let i = 0; i < amountOfRolls; i++) {
        // Create the random roll
        let randomDiceRoll = Math.floor(Math.random() * 6 )+ 1;
        // Check if the dice landed on 6
        if (randomDiceRoll === 6 ) {
            console.log("You just hit 6!")
        } else  {
            jackpotTrueOrFalse = false
        }
    }
    if(jackpotTrueOrFalse) {
        console.log("Jackpot 🎉")
    }
}
// Examples of function
diceRoll(3)

// Opgave 3

//A sentiment analyzer is some functionality that figures out how positive/negative a sentence is.
// Fx the sentence "I am mega super awesome happy" Should have a high score The sentence
// "I hate doing boring stuff" should have a low score.
// Create a function that takes a string as a parameter.
// Calling the function will return an object with score, positiveWords and negativeWords.
// You decide how the score should be implemented and what words are negative and positive.
// Here is an example of using the function:

function getSentimentScore(sentence) {
    // What words is positive and negative
    const listOfPositiveWords = ["happy","great","awesome","super","fantastic","love"];
    const listOfNegativeWords = ["sad","awful","unhappy","hate","annoying","bad"];
    // Make the return object
    const resultOfAnalysis = {
        score: 0,
        positiveWords: [],
        negativeWords: []
    }

    //Make the input to lowercase (caseInsensitive) and split each word
    const inputSentence = sentence.toLowerCase().split(" ");
    // Check to see if the sentence includes pos or neg words and calculate score
    for (let word of inputSentence) {
        if (listOfPositiveWords.includes(word)) {
            resultOfAnalysis.score += 1;
            resultOfAnalysis.positiveWords.push(word);
        } else if (listOfNegativeWords.includes(word)) {
            resultOfAnalysis.score -= 1;
            resultOfAnalysis.negativeWords.push(word);
        }
    }
    return resultOfAnalysis
}

// Examples of function
const sentimentScoreObjectTest1 = getSentimentScore('I am mega super awesome happy');
const sentimentScoreObjectTest2 = getSentimentScore('I Am SaD and vEry UNHaPPY');

console.log(sentimentScoreObjectTest1);
console.log(sentimentScoreObjectTest2);

