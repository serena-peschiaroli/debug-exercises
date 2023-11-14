/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    let message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
    console.log(message);
}
checkAge();

/* la funzione controlla la const myAge e a seconda del suo valore ( < 18 oppure > 18) riporta due messaggi diversi. Errore: mettere let invece di const per message, manca un return oppure un console.log*/



// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.length} colori!`);
}
printColorsNumber();

/*  la funzione legge quanti elementi ci solo all'interno di colors. errore di sintassi, è .length i/o .lenght */


// ESERCIZIO 3
function addNumbers() {
    const userNumber = parseInt(prompt('Inserisci un numero'));
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();

/* questa funzione prende un numero inserito dall'utente e vi aggiunge 12, riportando poi il risultato finale. Errore: il prompt dell'user è equiparato ad una stringa, quindi se inserisco "1" + 12 il risultato sarà 112. mettendo parseInt(prompt), lo userNumber verrà letto come numero*/


// ESERCIZIO 4
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    if (addresses.includes(userEmail)) {
        grantAccess = true;
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();

/* La funzione prende da input l'indirizzo e-mail dell'utente; se l'indirizzo è incluso all'interno dell'array adddresses, l'accesso viene consentito. Errore: i valori boolean true - false sono tra virgolette e quindi letti come una stringa da javascript. è necessario togliere gli apici dalle righe 58  & 64*/

// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];

        if (userEmail.length > 5) {

            if (email === userEmail) {
                grantAccess = true;

            }

        }
    }

    if (grantAccess) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
    
    
}
checkAccessImproved();

/* come la precedente, la funzione prende in input un indirizzo e-mail inserito dall'utente e controlla se l'indirizzo è presente nell'array addresses, iterando ogni elemento e controllando: se l'email dell'utente ha una length pmaggiore di 5, se l'email combaci con un elemento dell'array. Se entrambe le condizioni sono valide, grantAccess = true, esce dal loop.
Errori: 1# true o false inizializzati come stringa i/o valori booleani; if (grantAccess) era inserito all'interno del loop; la chiamata alla funzione era all'interno della funzione stessa; mancava l'ultima `}` a chiusura della funzione  */

