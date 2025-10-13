/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.

function greeting(name) {
    let time = new Date().getHours();
    if (time >= 0 && time < 13) {
        return `buongiorno ${name}`;
    } else if (time >= 13 && time < 17) {
        return `buon pomeriggio ${name}`;
    } else {
        return `buonasera ${name}`;
    }
}

// Invoca la funzione qui e stampa il risultato in console

const greetingUser = greeting(name);
console.log(greetingUser);


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.