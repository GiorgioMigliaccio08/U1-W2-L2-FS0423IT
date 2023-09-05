/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let num1 = 30;
let num2 = 20;

if (num1 > num2) {
  console.log("Il primo numero inserito è il piu grande ovvero:", num1);
} else {
  console.log("Il secondo numero inserito è il piu grande ovvero:", num2);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let num = 10;
if (num != 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let numero = 10;
if (numero % 5 === 0) {
  console.log("divisibile per 5");
} else {
  console.log(" non divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let num3 = 6;
let num4 = 2;

if (num3 === 8 || num4 === 8) {
  console.log("Il valore di uno dei due numeri inseriti è :8");
} else if (
  num3 - num4 === 8 ||
  num4 - num3 === 8 ||
  num3 + num4 === 8 ||
  num4 + num3 === 8
) {
  console.log("La somma/differenza dei due numeri inseriti è :8");
} else {
  console.log(
    "I due numeri inseriti non sono 8 e nemmeno la loro somma/diffrenza fà 8 "
  );
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
let totalShoppingCart = 20;

if (totalShoppingCart > 50) {
  console.log("Hai diritto alla spedizone gratuita");
} else if (totalShoppingCart < 50) {
  console.log("La tua spedizone ha un costo di:", totalShoppingCart + 10);
} else {
  console.log(
    "Questo è il totale compreso di spedizione : ",
    totalShoppingCart
  );
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let blackFriday = totalShoppingCart * 0.2;
console.log(
  "Oggi è il Black Friday ed il tuo prezzo su ogniprodotto diventa:",
  blackFriday
);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let val1 = 8;
let val2 = 7;
let val3 = 5;

if (val1 >= val2 && val1 >= val3) {
  if (val2 > val3) {
    console.log(val1, val2, val3);
  } else {
    console.log(val1, val3, val2);
  }
} else if (val2 >= val1 && val2 >= val3) {
  if (val1 > val3) {
    console.log(val2, val1, val3);
  }
} else {
  console.log(val3, val2, val1);
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let numeroFornito = 56;
if (typeof numeroFornito === "number") {
  console.log("Hai scritto un numero!");
} else {
  console.log("Non hai scritto un numero!");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
let valore = 56;
if (valore % 2 === 0) {
  console.log("Il numero inserito è pari!");
} else {
  console.log("Il numero inserito è dispari!");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7;
if (val < 5) {
  console.log("Il valore inserito è minore 5");
} else if (val <= 5 < 10) {
  console.log("Il valore inserito un numero compreso tra 5 e 10");
} else {
  console.log("Il valore inserito è  maggiore di 10");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.push = "City: Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
delete me.lastName;
console.log(me);
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
let number = [];
console.log(number);
number.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(number);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

number.splice(9, 1);
console.log(number);
number.push("100");
console.log(number);
