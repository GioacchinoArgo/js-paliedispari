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



