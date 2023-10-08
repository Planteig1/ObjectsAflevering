// Opgave 1 What to wear
// Create a function (that you have to name) that has temperature as parameter.
// Based on the temperature it should return a string with what the user should wear.
// You decide what the user should wear based on the temperature.
function whatShouldIWear(temperature){
    // Create the return string
    let whatClothesShouldIWear = "";
    // Check the inputted temperature and give specific instruction based on that
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
    // Make array to store values
    const diceRollValues = [];
    // Make a six counter
    let amountOfSixHit = 0;
    // Create the for loop, so it loops the amount of times specified
    for(let i = 0; i < amountOfRolls; i++) {
        // Create the random roll
        let randomDiceRoll = Math.floor(Math.random() * 6) + 1;
        //Push it into the diceRollArray
        diceRollValues.push(randomDiceRoll);
        //If 6 was hit - add it to the counter.
        if ( randomDiceRoll === 6) {
            amountOfSixHit += 1;
        }
    }

    // If you want to see what you rolled | console.log(diceRollValues);
    // Check to see if all rolls hit 6
    const isAllRollsSix = (currentValue) => currentValue === 6;
    if ( diceRollValues.every(isAllRollsSix)) {
        console.log("Jackpot 🎉");
    } // Log out You just hit 6 if it didn't hit jackpot, but it hit 6 minimum 1 time
    else if ( amountOfSixHit > 0) {
        // Log you just hit 6 the amount of times hit
        for (let i = 0; i < amountOfSixHit; i++) {
            console.log("You just hit 6!")
        }
    }
}
// Examples of function
diceRoll(4)

// Opgave 3

//A sentiment analyzer is some functionality that figures out how positive/negative a sentence is.
// Fx the sentence "I am mega super awesome happy" Should have a high score The sentence
// "I hate doing boring stuff" should have a low score.
// Create a function that takes a string as a parameter.
// Calling the function will return an object with score, positiveWords and negativeWords.
// You decide how the score should be implemented and what words are negative and positive.
// Here is an example of using the function:

function getSentimentScore(sentence) {
    // Make arrays with a list of positive and negative words
    const listOfPositiveWords = ["happy","great","awesome","super","fantastic","love"];
    const listOfNegativeWords = ["sad","awful","unhappy","hate","annoying","bad"];
    // Make the return object
    const resultOfAnalysis = {
        score: 0,
        positiveWords: [],
        negativeWords: []
    }
    //Make the input to lowercase (caseInsensitive) and split each word
    const inputSentence = sentence.toLowerCase();
    // Split Each word
    const inputSentenceFormatted = inputSentence.split(" ");
    // Check to see if the sentence includes pos or neg words and calculate score
    for (let word of inputSentenceFormatted) {
        // Check if the sentence includes positive words
        if (listOfPositiveWords.includes(word)) {
            resultOfAnalysis.score += 1;
            resultOfAnalysis.positiveWords.push(word);
        } // Check if the sentence includes negative words
        else if (listOfNegativeWords.includes(word)) {
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

//Opgave 4 - Optional
//Write a function that counts the frequency of characters in a string:

function getCharacterFrequencies(word) {
    // Make it caseInsensitive
    const wordLowerCase = word.toLowerCase();
    //Create empty return object, with the key: characters
    const resultForCharacterFrequencies = {
        characters: []
    };
    // Create object to keep track of the count of characters
    const countOfCharacters = {};

    // Create a for...of loop, which iterates over each character in the word.
    for (let currentCharacter of wordLowerCase) {
        // Checks to see if it already has the character in the array | If it does, + 1, if not initialize to 1
        countOfCharacters[currentCharacter] = countOfCharacters[currentCharacter] +1 || 1
    }

    // Loop through the countOfCharacters to convert it into the desired format
    for (let currentCharacter in countOfCharacters) {
        resultForCharacterFrequencies.characters.push({
            character: currentCharacter,
            count: countOfCharacters[currentCharacter]
        });
    }
    return resultForCharacterFrequencies
}
// Examples of the function
console.log(getCharacterFrequencies('happy'));
console.log(getCharacterFrequencies('I Am ReAlLy HaPpY'));

// Opgave 5 - Optional
// This is a very real world example of a problem i got at my previous work.
// I was tasked to implement one of the smart credit card input fields, where the credit card numbers are seperated with a space.
// Fx inputting 123456789 would show 1234 5678 9.

// Create a function that takes a number as parameter.
function formatCreditCardNumber(creditCardNumber) {
    // Check to see if the input is number
    const regExNumberTester = /^[0-9]+$/;

    // If the input isnt all numbers then return that it's invalid. Else do the formatting
    if (!regExNumberTester.test(creditCardNumber)) {
        return "Invalid credit card number";
    } else {
        // Make the number a string
        const creditCardNumberAsString = creditCardNumber.toString();
        // Make an array with all the numbers
        const numbersInCreditCard = creditCardNumberAsString.split('');

        // Insert a space every 4 characters
        for (let i = 4; i < numbersInCreditCard.length; i += 5) {
            numbersInCreditCard.splice(i, 0, ' ');
        }
        // Join the array together
        const creditCardNumberFormatted = numbersInCreditCard.join('');

        // Create the return object
        const creditCardNumberFormattedAndOriginal = {
            original: creditCardNumber,
            formatted: creditCardNumberFormatted
        };

        return creditCardNumberFormattedAndOriginal;
    }
}

// Example of the function

const creditCardNumberTest1 = formatCreditCardNumber(123456789);
const creditCardNumberTest2 = formatCreditCardNumber(1010202030304040);
const creditCardNumberTest3 = formatCreditCardNumber("hej1232hej23214d");
console.log(creditCardNumberTest1);
console.log(creditCardNumberTest2);
console.log(creditCardNumberTest3);
