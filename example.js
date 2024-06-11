const person = {
  name: "Stefano",
  surname: "Miceli",
  teaching: true,
  webcam: true,
  numOfStudents: 30,
  location: {
    state: "Italy",
    region: "FVG",
    latitude: 45.8982,
    longitude: 23.2922
  },
  courseUnits: ["JS III", "BW II", "React", "React Adv"],
  lectureFinished: null
};

const objToString = person.toString();
console.log(objToString); // [object Object]

// metodo per convertire correttamente un oggetto in stringa, senza usare il metodo default .toString() che produrrebbe un valore inutile: [object Object]
const objToJsonString = JSON.stringify(person);
console.log(objToJsonString);

// dopo la conversione del dato in JSON a oggetto nativo JS possiamo di nuovo utilizzare la dot notation o la square brackets notation per accedere ai dati di nuovo
const jsonToObj = JSON.parse(objToJsonString);
console.log(jsonToObj.location.latitude);

// 1-liner per clonazione di oggetto (oggi esiste structuredClone, meglio usare quello!)
const clonedPerson = JSON.parse(JSON.stringify(person));
clonedPerson.name = "Alberto";
console.log(person.name);
console.log(clonedPerson.name);

clonedPerson.location.region = "Lazio";
console.log(clonedPerson.location);
console.log(person.location);
console.log(clonedPerson);
