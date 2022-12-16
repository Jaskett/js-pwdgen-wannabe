var name = prompt("Qual'è il tuo nome?");

var lastName = prompt("Qual'è il tuo cognome?");

var color = prompt("Qual'è il tuo colore preferito?");

var password = name + lastName + color + 21;
console.log(password);

document.getElementById('your_password').innerHTML = password;