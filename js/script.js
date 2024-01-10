console.log ('JS OK')

// ----- Primo Esercizio -----

// - 1
let userWord = prompt("Inserisci una parola:");

// - 2
const result = isPalindrome(userWord);

// - 3
function isPalindrome(text) {

    // -4
    text = text.toLowerCase();

    // - 5
    if (text === text.split('').reverse().join('')) {
        return true;
    } else {
        return false;
    }
}

result ? console.log ("La parola è palindroma!") : console.log ("La parola non è palindroma.")

// ----- Secondo Esercizio -----


// - 1
const guess = prompt("Scegli se pari o dispari:");
const userNumber = parseInt(prompt("Scegli un numero da 1 a 5:"));

console.log(`Hai scelto: ${userNumber}`)
console.log(`Hai scelto: ${guess}`)

// - 2
const cpuNumber = randomNumber(1, 5);

function randomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max + 1 - min)) + min;
    console.log(`il computer ha fatto: ${randomNumber}`)
    return randomNumber;
}




// - 3
const sum = sumNumber(userNumber, cpuNumber)

function sumNumber (a, b) {
    return a + b;
}

console.log (`la somma dei numeri è: ${sum}`)

// - 4

const odd = isOdd(sum) 

function isOdd (num) {
    if (num % 2 === 0) {
        return true;

    } else {
        return false;
    }
}

if (odd) {
    console.log(`La somma dei due numeri è: pari`)
} else {
    console.log(`La somma dei due numeri è: dispari`)
}

// - 5

switch (guess) {
    case "pari":
        if (odd) console.log("ha vinto l'utente!")
        else console.log('ha vinto il computer!')
        break;
    case "dispari":
        if (!odd) console.log("ha vinto l'utente!")
        else console.log('ha vinto il computer!')
        break;
}