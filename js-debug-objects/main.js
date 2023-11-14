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


// ESERCIZIO 1 (suggerimento: ci sono 6 errori)
const cars = [
    {
        manufacturer: 'Ford',
        model: 'Fiesta',
        type: 'diesel'
    },
    {
        manufacturer: 'Audi',
        model: 'A1',
        type: 'benzina'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Golf',
        type: 'Benzina'
    },
    {
        manufacturer: 'Fiat',
        model: 'Panda',
        type: 'metano'
    },
    {
        manufacturer: 'Fiat',
        model: 'Multipla',
        type: 'GPL'
    },
    {
        manufacturer: 'Tesla',
        model: 'Model 3',
        type: 'elettrico'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Polo',
        type: 'benzina'
    },
    {
        manufacturer: 'Ford',
        model: 'Kuga',
        type: 'Diesel'
    },
    {
        manufacturer: 'Seat',
        model: 'Ibiza',
        type: 'metano'
    },
    {
        manufacturer: 'Audi',
        model: 'R8',
        type: 'Benzina'
    },
];

const gasolineCars = cars.filter( (auto) => auto.type.toLowerCase() === 'benzina');

const dieselCars = cars.filter((auto) => auto.type.toLowerCase() === 'diesel');

const otherCars = cars.filter((auto) => auto.type.toLowerCase() !== 'benzina' && auto.type !== 'diesel');

console.log('Auto a benzina');
console.log('*******************************');
console.log(gasolineCars);

console.log('Auto a diesel');
console.log('*******************************');
console.log(dieselCars);

console.log('Tutte le altre auto');
console.log(otherCars);


/* La funzione filtra l'array originario di oggetti 'cars', creando diversi array vuoti in base al valore della proprietà 'type', che può essere 'benzina', 'diesel' o altri tipi.

Errori: 
1. riga 60, manca una virgola ;
2. nella dichiarazione di gasolineCars errore di sintassi, l'arrow function scritta come un operatore >= ;
3. nella dichiarazione di dieselCars sintassi errata, scritta come un'arrow function che non ritorna nessun valore. filter si aspetta un valore booleano di ritorno;
4. nella dichiarazione di otherCards, auto.type !== 'benzina' || auto.type !== 'diesel'; è una condizione sbagliata perché esclude sia benzina che diesel. Dovrebbe essere && invece di ||; 
5. c'è una { extra all'inizio dell'arrow function nella dichiarazione di otherCars: ci dovrebbe essere del codice all'interno che ritorna un valore.
6. Nella dichiarazione dell'array, alcuni type sono scritti con lettera lowercase oppure uppercase; i type che iniziano con uppercase ("Benzina") non vengono presi nella condizione. corretto con auto.type.toLowerCase();
*/