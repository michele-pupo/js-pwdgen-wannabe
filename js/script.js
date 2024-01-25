// chiediamo il nome con un prompt
let firstname = prompt("Qual è il tuo nome?");

document.getElementById("first-name").innerHTML = firstname;

// chiediamo il cognome con un prompt
let secondname = prompt("Qual è il tuo cognome?");

document.getElementById("second-name").innerHTML = secondname;

// chiediamo il colore preferito con un prompt
let color = prompt("Qual è il tuo colore preferito?");

document.getElementById("color-favorite").innerHTML = color;

// numero fisso
const number = "23";

// generiamo la password con una somma
document.getElementById("password").innerHTML = `${firstname}${secondname}${color}${number}`;