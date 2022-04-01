/**
 * Code JavaScript
 */

console.log("bonjour toi !", 42, "Hello");
console.warn("Oula");
console.error("Outch");
console.info("information");

/**
 * VAriables
 * var , let et conset
 */
/*
 *var
 * on utilise le lowerCamelCasz, pas d'accents, de caractres speciaux et 
 * ne commance pas par un chiffre
 * le egal "=" est un operateur d'affectation
*/
var guillaume = "coucou, moi c'est Guillaume";
console.log(guillaume);

/**
 * 
 */
var phrase = "Bonjour";
var prenom = "Guillaume";

var phraseComplete = phrase + " " + prenom;
phraseComplete = phrase + ", comment allez vous " + prenom + " ?"
//Litteraux dess gabarites
// Windows : ATLGR + 7 pour les backtits
phraseComplete = `${phrase}, comment allez vous ${prenom} ?`;
console.log(phraseComplete)

/**
 * Types de variables
 */


var nombre = 36; // type integer /number
var negatif = -120;
var decimal = 12.56; //Type " float"
var texte ="Ceci est une chaine de caractere"; //Type string
var boolean = true; // Type"bool" ou " boolean"
var brouette;
brouette = "jardin";


variable = 12;
var variable;

{
    let variables2 = 34;
console.log(variable, variables2);

}

/**
 * Const
 * une conseante ne peut etre modifiee une fois sa valeur affectee
 */
const mavariable = " Hello"; 
console.log(mavariable);

//mavariable = "Bonjour";
//console.log(mavariable); //Error

/**
 * Operateurs de calcul
 */
let nombre1 = 10;
let nombre2 = 3;

console.log(nombre1 + nombre2);// Addition
console.log(nombre1 - nombre2);// Soustraction
console.log(nombre1 * nombre2);// Multipilication
console.log(nombre1 / nombre2);// division
console.log(nombre1 % nombre2);// Modulo est le reste d'une division

let total = 10;
total += 2;// total = total +2
total -= 2;// total = total -2
total *= 2;// total = total *2
total /= 2;// total = total /2
total %= 2;// total = total %2

/**
 * Incrementation & decrementation
 */

// Incrementation, permet d'ajouter 1 à une variable de type "int"
//total = total +1;
//total +=1;
total++;

//Decrementation, permet de retirer 1 à une variable de type "int"
total--;

/**
 * Operateurs de comparaison
 */
let compare1 = 45;
let compare2 = 12;

//Egalite
// Egale à "==" verifie que les valuers sont bien identiques
console.log(compare1 == compare2);

//Strivtement egal à ... "===" , verifie que les vqleurs et les types 
//sont bien identiques
//"64" === 64 // la condition est fausse
console.log(compare1 === compare2);

//Different de ..., verfie sue les valeurs sont bien differetes
console.log(compare1 != compare2);

//Strictement different de ..
// sont bien differnts
//"64" !== 64 // la condition est vraie
console.log(compare1 !== compare2);


//Strictement superieur à ...
console.log(compare1 > compare2);

//Strictement superieur ou egal a ...
console.log(compare1 >= compare2);

//Strictement inferieur à ...
console.log(compare1 < compare2);

//Strictement inferieur ou egal à ....
console.log(compare1 <= compare2);

/**
 *&& veut dire "et"
 * les deux condition doivent etre Vraies 
 **/ 
//une des 2 conditions etant fausse fait que la totalite des condition 
//est vraies

 console.log(compare1 > compare2 && compare1 === compare2);

 
//une des 2 conditions etant Vraies fait que la totalite des condition 
//est vraies

console.log(compare1 > compare2 && compare2 < compare1);


/**
 *&& veut dire "Ou"
 Sous mac : option + maj + l
 Sous win : Altgr +6
 * les deux condition doivent etre Vraies 
 **/ 

 console.log(compare1 > compare2 || compare1 === compare2);

 /**
  * Les condition
   */ 
  if (compare1 > compare2){
  console.log("C'est exact");
  }

  /*
  * Si condition FAIRE
  *...
  *FINSI
  */ 

  if (compare1 === compare2){
    console.log("C'est exact");
  }
  else {
      console.log("Error");
  }
   
/*
*Sinon SI condition FAIRE 
*SINON
*FINSI
*/


  if (compare1 === compare2){
    console.log("C'est exact");
  }
  else if (compare1 > compare2){
      console.log("C'est exactment");
  }
  else {
      console.log("Error");
  }


  /**
   * intergerir avec l'utilisateur
   */
  // Bouite de dialogue
  //Demende une valeur a l' utilisteur
  //let age = prompt("Donne moi ton age ?");
  //console.log(age);
  //demande une confirmation per deux boutons "annuler" et "ok"

  //let response = confirm("Es-tu sur de ton age?");
  //console.log(response);


  // affiche une alerte

 // alert("Attention ! Vous etes observe !");

 /**
  * Les boucles
  */
 // Boucle while()
 let compteur = 1;
while(compteur < 11){
    console.log(compteur);
    // Se place en dernier
    compteur++; // NE pas Oublier , SINON BOUCLE INFINIE
}

// do ..... while ()
// Effectue au minimum une iteration avant la verifiction
 let counter = 0;
do {
console.log(counter);
counter++; // Ne pas obulier , SINON BOUCLE INFINIE
}
while (counter < 11);

// for()
//for [declaration]; [condition]; [incrementation]
for(let compteur = 1; compteur < 11; compteur++){
console.log(compteur);
}


