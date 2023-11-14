/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//dovrebbe iterare numeri da 0 a 4, il loop non partirà perchè i > 5, che è falso.

// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}

// questa funzione prende un numero in input e, se il numero è pari, aggiunge 5. se il numero in input è dispari, restituisce il numero originario senza addizioni. Tuttavia, l'uso di = cerca di assegnare il valore 0 a num % 2, quindi è necessario usare l'operatore di uguaglianza ===


// ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}

//come nell'esercizio 1, questa funzione defiinisce un for loop che inizializza i a 0 e continua fintanto che i = 5. console.log logga il valore di I. Mancano le ;. se si volesse raggiungere il numero 5 bisognerebbe mettere i < 6, perchè gli indici iniziano da 0, quindi i = 5 è numero 4 e i =6 num 5




// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    
    }
    return evenNumbers;
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]
console.log(displayEvenNumbers());

/* errore 1: semicolon dopo i++; 
errore 2: numbers.length - 1 non c'azzecca niente;
errore 3: dentro if: numbers % 2 è errato perché è necessario controllare ogni elemento singolo dell'array, numbers prende tutto l'array, quindi numbers[i]%2
errore 4:  dentro if (numbers %2 c'è assegnazione di valore= 0 invece di === 0)
errore 5: semicolon dopo if (numbers % 2 === 0) 
errore 6: return evenNumbers era dentro il loop
errore 7: pushare i di numbers perchè i = indice dell'array, non il valore dell'elemento all'interno dell'array, quindi evenNumbers.push(numbers[i]) */



