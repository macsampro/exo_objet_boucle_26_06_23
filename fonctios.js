// En JavaScript, une fonction est définie avec le mot-clé function, suivi par le nom de la fonction, une paire de parenthèses qui peut contenir des paramètres, et enfin une paire d'accolades qui contient le corps de la fonction.

// Voici un exemple simple d'une fonction qui ajoute deux nombres :
function ajouter(n1, n2) {
    return n1 + n2;
  }
  console.log(ajouter(3, 4));  // affiche 7

//---------------------------------------------------------------------------------------------------------------------------------------------  
//   Maintenant, essayons un exercice. Écrivez une fonction saluer qui prend un paramètre nom et affiche un message de bienvenue à cette personne. Par exemple, saluer("Samir") devrait afficher "Bonjour Samir !" dans la console.



function saluer(nom) {
    return `Bonjour ${nom}`;
}

console.log(saluer("samir"));

