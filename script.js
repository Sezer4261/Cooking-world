// rezepte daten
const rezepte = [
  {
    name: "Spaghetti Carbonara",
    personen: 2,
    zutaten: [
      { name: "Spaghetti", menge: 100, einheit: "g" },
      { name: "Ei", menge: 1, einheit: "x" },
      { name: "Speck", menge: 50, einheit: "g" },
      { name: "Parmesan", menge: 30, einheit: "g" }
    ]
  },
  {
    name: "wok",
    personen: 2,
    zutaten: [
      { name: "Sojasoße", menge: 2, einheit: "EL" },
      { name: "Hähnchenbrustfilet", menge: 250, einheit: "ml" },
      { name: "Paprikaschoten", menge: 2, einheit: "x" },
      { name: "Frühlingszwiebeln", menge: 2, einheit: "x" },
      { name: "Gemüsebrühe", menge: 50, einheit: "ml" },
      { name: "Speisestärke", menge: 1, einheit: "TL" }
    ]
  },
    {
    name: "Salat",
    personen: 2,
    zutaten: [
      { name: "Eisberg", menge: 1, einheit: "x" },
      { name: "Zwiebel", menge: 1, einheit: "x" },
      { name: "Tomaten", menge: 2, einheit: "x" },
      { name: "Öl", menge: 1, einheit: "EL" }
    ]
  },
];

// dom elemente
const rezeptSelect = document.getElementById("rezeptAuswahl");
const personenInput = document.getElementById("personenInput");
const zutatenListe = document.getElementById("zutatenListe");

// Funktion um rezept anzuzeigen
function zeigeRezept(index) {
  const rezept = rezepte[index];
  const personen = parseInt(personenInput.value);
  zutatenListe.innerHTML = "";

  rezept.zutaten.forEach(zutat => {
    const berechnet = ((zutat.menge * personen) / rezept.personen).toFixed(1);
    const li = document.createElement("li");
    li.textContent = `${berechnet}${zutat.einheit} ${zutat.name}`;
    zutatenListe.appendChild(li);
  });
}

// Eventlistener
rezeptSelect.addEventListener("change", () => zeigeRezept(rezeptSelect.value));
personenInput.addEventListener("input", () => zeigeRezept(rezeptSelect.value));

zeigeRezept(0);

// Burger-Menü JS
const burgerBtn = document.getElementById('burgerBtn');
const navUl = document.querySelector('nav ul');

burgerBtn.addEventListener('click', () => {
  const isVisible = navUl.style.display === 'flex';
  navUl.style.display = isVisible ? 'none' : 'flex';
});

// Kontaktformular
const kontaktForm = document.getElementById("kontaktForm");

if (kontaktForm) {
  kontaktForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const nachrichtInput = document.getElementById("nachricht");
    const fehlerText = document.getElementById("fehlerText");

    let fehler = "";

    // Reset Style
    [nameInput, emailInput, nachrichtInput].forEach(input => {
      input.classList.remove("input-fehler");
    });

    if (nameInput.value.trim() === "") {
      fehler = "Bitte Name ausfüllen.";
      nameInput.classList.add("input-fehler");
    } else if (emailInput.value.trim() === "") {
      fehler = "Bitte E-Mail ausfüllen.";
      emailInput.classList.add("input-fehler");
    } else if (nachrichtInput.value.trim() === "") {
      fehler = "Bitte Nachricht ausfüllen.";
      nachrichtInput.classList.add("input-fehler");
    }

    if (fehler !== "") {
      fehlerText.textContent = fehler;
    } else {
      fehlerText.textContent = "";
      alert("Nachricht wurde gesendet!");
      kontaktForm.reset();
    }
  });
}
