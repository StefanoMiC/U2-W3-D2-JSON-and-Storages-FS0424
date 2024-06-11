// Funzioni: sono blocchi di codice riutilizzabili che ci permettono di non ripeterci seguendo il principio del DRY - Don't Repeat Yourself!
// possono servire -anche- a RITARDARE l'esecuzione di un blocco di codice.
// possono servire per dinamicizzare quel blocco di codice attraverso i PARAMETRI

// una funzione può essere fruttifera (FRUITFUL) o VOID (quando non ha un valore di ritorno)

// esempio di funzione FRUTTIFERA

// 1) DEFINIZIONE DI FUNZIONE
function sumTwoAndThree() {
  // l'ambito della funzione funge anche da schermo per le variabili, questa variabile sum NON E' visibile all'esterno!
  const sum = 2 + 3;

  return sum;
}

// console.log(sum) // undefined

// l'ambito della funzione viene eseguito SOLO SE la funzione verrà invocata
// 2) ESECUZIONE o INVOCAZIONE DELLA FUNZIONE
console.log(sumTwoAndThree());

// FUNZIONE PARAMETRICA
function sumWithParams(n1, n2) {
  const sum = parseInt(n1) + parseInt(n2);
  return sum;
}

console.log(sumWithParams(5, 2));
console.log(sumWithParams(52, 6));
console.log(sumWithParams("1", "4"));

// nel caso di una funzione fruttifera possiamo trattare l'invocazione della funzione come se fosse già il valore di ritorno
const result = sumWithParams(10, 2) + 10;
console.log(result);

// esempio di funzione VOID (non fruttifera)
// la funzione void ci serve quando vogliamo avere un effetto da qualche parte nel nostro codice, ma poi la funzione non avrà nessun altro scopo

let counter = 0;

function increment() {
  // il contenuto di questa funzione produce un SIDE EFFECT, un effetto collaterale in un ambito esterno ad essa
  counter++;
}

increment();
console.log(counter);
increment();
console.log(counter);
increment();
console.log(counter);
increment();
console.log(counter);

// questo console.log ci produce undefined perché la funzione increment non è fruttifera e di conseguenza non ha un valore di ritorno
console.log(increment());
// idem tentare di salvarla in una variabile produce undefined per lo stesso motivo!
const incrementResult = increment();
console.log(incrementResult);
console.log(counter);

const incrementAndLog = () => {
  // siccome increment non produce un valore, la usiamo per incrementare
  increment();
  // ma poi usiamo un altro console log che ci mostri il valore di counter aggiornato
  console.log(counter);
};

setInterval(incrementAndLog, 1000);

{
  function greet(name, symbol) {
    return "Ciao sono " + name + symbol;
  }
}
console.log(greet("stefano", "!"));

// let e const sono block-scoped (hanno un ambito di blocco)
{
  // come evitare l'hoisting
  const greet2 = function (name, symbol) {
    return "Ciao sono " + name + symbol;
  };
  // qui dentro greet2 è visibile e utilizzabile
  console.log(greet2("antonio", "!"));
}
// la variabile greet2 segue questo principio e non sarà visibile al di fuori del blocco
// console.log(greet2("antonio", "!")); // greet2 is not defined

// in alternativa alle function expressions abbiamo le arrow functions
{
  //   const greet3 = (name, symbol) => {
  //     return "Ciao sono " + name + symbol;
  //   };

  // nel caso di ASSENZA di graffe e di return il return può considerarsi IMPLICITO (c'è ma non si vede)
  const greet3 = (name, symbol) => "Ciao sono " + name + symbol;

  console.log(greet3("cristiano", "!"));
}

// document.body.onclick = incrementAndLog // non usiamo mai le tonde quando intendiamo passare il riferimento alla definizione di una funzione
// altrimenti il codice si avvierà troppo presto e si lascerà dietro di sé undefined in quanto funzione void, non fruttifera.
// document.body.onclick = incrementAndLog() // fare questo produce...
// document.body.onclick = undefined // incrementAndLog() se chiamata si lascia dietro undefined
