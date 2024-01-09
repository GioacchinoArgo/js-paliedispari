console.log ('JS OK')

// ----- Primo Esercizio -----

// - 1
let userWord = prompt("Inserisci una parola:");

// - 2
const result = isPalindrome(userWord);

console.log(result);

// - 3
function isPalindrome(text) {

    // -4
    text = text.toLowerCase();

    console.log(text)

    // - 5
    if (text === text.split('').reverse().join('')) {
        return "La parola è palindroma!";
    } else {
        return "La parola non è palindroma.";
    }
}


// ----- Secondo Esercizio -----


// - 1
const guess = prompt("Scegli se pari o dispari:");
const userNumber = parseInt(prompt("Scegli un numero da 1 a 5:"));

console.log(`Hai scelto: ${userNumber}`)
console.log(`Hai scelto: ${guess}`)

// - 2
const cpuNumber = randomNumber()

function randomNumber () {
    return Math.floor(Math.random() * 5) + 1;
}

console.log(`il computer ha fatto: ${cpuNumber}`)

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