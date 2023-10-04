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
