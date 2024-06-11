const form = document.querySelector("form");
const inputImg = document.getElementById("event-img");
const inputName = document.getElementById("event-name");
const inputDate = document.getElementById("event-date");
const cardRow = document.getElementById("card-row");

let events = [];

class AgendaEvent {
  constructor(img, name, date) {
    this.eventImg = img;
    this.eventName = name;
    this.eventDate = date;
  }
}

const removeCol = event => {
  console.log("CLICKED", event.currentTarget, event.target);
  const col = event.currentTarget;

  const existingAppointments = JSON.parse(localStorage.getItem("events-memory"));

  const h5 = col.querySelector("h5");
  const eventNameOfClickedCard = h5.innerText;

  const indexFound = existingAppointments.findIndex(app => app.eventName === eventNameOfClickedCard);

  if (indexFound !== -1) {
    existingAppointments.splice(indexFound, 1);

    if (existingAppointments.length === 0) {
      localStorage.removeItem("events-memory");
      generateAlert();
    } else {
      localStorage.setItem("events-memory", JSON.stringify(existingAppointments));
    }
  }

  col.remove();
};

const generateAlert = () => {
  const container = document.querySelector(".container");

  const alert = document.createElement("div");
  alert.classList.add("alert", "alert-info");
  alert.innerText = "Nessun elemento in memoria, creane uno tu, grazie :)";

  container.appendChild(alert);
};

const generateCard = obj => {
  const col = document.createElement("div");
  col.classList.add("col");

  col.onclick = removeCol;

  col.innerHTML = `
      <div class="card">
          <img src=${obj.eventImg} class="card-img-top" alt="...">
          <div class="card-body">
              <h5 class="card-title">${obj.eventName}</h5>
              <p class="card-text">${obj.eventDate}</p>
          </div>
      </div>`;

  cardRow.appendChild(col);
};

form.onsubmit = event => {
  event.preventDefault();

  const alert = document.querySelector(".alert");
  if (alert) {
    alert.remove();
  }

  const appointment = new AgendaEvent(inputImg.value, inputName.value, inputDate.value);

  events.push(appointment);

  localStorage.setItem("events-memory", JSON.stringify(events));

  generateCard(appointment);
  console.log(events);
};

// al caricamento della pagina andiamo a controllare se abiamo appuntamenti in memoria da ricostituire nella pagina
window.addEventListener("DOMContentLoaded", () => {
  const appointmentsFromStorage = localStorage.getItem("events-memory");
  if (appointmentsFromStorage) {
    // se ho trovato degli appuntamenti saremo qui dentro
    // e allora possiamo riconvertirli in array
    const appointmentsAsArray = JSON.parse(appointmentsFromStorage);
    events = appointmentsAsArray;

    //qui stiamo rigenerando le card a partire dai dati precedentemente salvati nello storage
    events.forEach(appointment => generateCard(appointment));
  } else {
    generateAlert();
  }
});
