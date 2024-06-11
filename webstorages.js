// 1) localStorage --> permanenza dei dati finché l'utente non li cancella esplicitamente, tramite svuotamento dei dati di navigazione
// 2) sessionStorage --> permanenza dei dati dopo un refresh ma fino alla chiusura del tab o finestra

// entrambi utilizzano gli stessi metodi:
// .setItem(key, value) --> questo metodo salverà il valore nella chiave corrispondente all'interno dell'area di memoria dedicata a quel dominio
// .getItem(key) --> cercherà un elemento con una particolare chiave già esistente nel local/session storage. se non trova nulla ritorna null

// i valori ritornati dagli storage sono SEMPRE STRINGHE!

const LIVE_LECTURE_KEY = "liveLecture";

// 1. settiamo il valore nello storage
localStorage.setItem(LIVE_LECTURE_KEY, true);
// localStorage.removeItem("liveLecture"); // questo lo rimuoverebbe

// il valore torna indietro come stringa,
// se ci serve in formato booleano dovremmo fare una conversione

const areWeLiveNow = () => {
  const liveLectureFromStorage = localStorage.getItem(LIVE_LECTURE_KEY); // 2. recuperiamo il valore precedentemente salvato dallo storage
  console.log(liveLectureFromStorage); // "true"

  const isLive = Boolean(liveLectureFromStorage); // 3. convertiamo il dato da stringa a booleano
  console.log(isLive);

  if (isLive) {
    console.log("siamo live!");
  } else {
    console.log("lezione finita");
  }
};

areWeLiveNow();

const removeKey = () => {
  localStorage.removeItem("liveLecture");
};

// number
localStorage.setItem("numberItem", 728712);
const numberFromStorage = localStorage.getItem("numberItem");
console.log(parseInt(numberFromStorage));

// arrays
localStorage.setItem("arrayItem", JSON.stringify([78, 72, 91, 100]));
const arrayFromStorage = localStorage.getItem("arrayItem");
const jsonToArr = JSON.parse(arrayFromStorage);
console.log(jsonToArr);
console.log(jsonToArr[0]);

// objects

const myObj = { name: "Stefano", surname: "Miceli" };
localStorage.setItem("objItem", JSON.stringify(myObj));

const objFromStorage = localStorage.getItem("objItem");
const jsonToObj = JSON.parse(objFromStorage);
console.log(jsonToObj.surname);

// dates
localStorage.setItem("dateItem", new Date().toISOString());
const dateFromStorage = localStorage.getItem("dateItem"); // '2024-06-11T09:40:02.543Z'
const convertedStringToDate = new Date(dateFromStorage); // ricreo una vera data a partire dal dato stringa ricevuto dallo storage: new Date('2024-06-11T09:40:02.543Z')

console.log(convertedStringToDate.getDate());
