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

const ticketPrice = kilometres * 0.21 ;

document.getElementById('price').innerHTML = `From Padova to Venice the price is: ${ticketPrice} $` ;