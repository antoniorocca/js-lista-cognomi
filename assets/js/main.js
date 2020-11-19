var cognomeUser = prompt("Inserisci il tuo cognome");
var cognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
cognomi.push(cognomeUser);
console.log(cognomeUser, cognomi);
cognomi.sort();
console.log(cognomi);
var posCognomeUser = cognomi.indexOf(cognomeUser);
console.log(posCognomeUser);



 

