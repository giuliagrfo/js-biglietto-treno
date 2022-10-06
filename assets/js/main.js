/* Il programma dovrà chiedere all'utente:

-il numero di chilometri che vuole percorrere
-l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
-il prezzo del biglietto è definito in base ai km (0.21 € al km)
-va applicato uno sconto del 20% per i minorenni
-va applicato uno sconto del 40% per gli over 65.

*/

// Chiedere numero di chilometri che vuole percorrere
const kilometres = prompt('Quanti chilometri vuoi percorrere?');

// Chiedere l'età del passeggero
const userAge = prompt('Quanti anni hai?');

// Calcolare il prezzo totale del viaggio
const priceOfKilometer = 0.21;

const ticketPrice = kilometres * 0.21;

document.getElementById('price').innerHTML = `From Padova to Venice the price is: ${ticketPrice} $`;

// Applicare uno sconto del 20% per i minorenni
const percentageUnder18= 20;

const discountValue18 = (ticketPrice / 100) * percentageUnder18; 

const finalPrice18 = ticketPrice - discountValue18;


// Applicare uno sconto del 40% per gli over 65
const percentageOver65= 40;

const discountValue65 = (ticketPrice / 100) * percentageOver65; 

const finalPrice65 = ticketPrice - discountValue65;

if (userAge < 18) {
    document.getElementById('price').innerHTML = `From Padova to Venice the price is: ${finalPrice18} $`;
} else if (userAge > 65) {
    document.getElementById('price').innerHTML = `From Padova to Venice the price is: ${finalPrice65} $`;
}



