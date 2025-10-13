/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function intials(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i][0]);
    }
    return newArray;
}

const initials = (array)  => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i][0]);
    }
    return newArray;
}

// Invoca la funzione qui e stampa il risultato in console

const arrayVowels = intials(names);
console.log(arrayVowels);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]