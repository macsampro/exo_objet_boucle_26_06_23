

// -----------------------------------------------------------------------------------------------------------------------------------------
// Un objet est une collection de propriétés, et une propriété est une association entre un nom (ou une clé) et une valeur. Une valeur de propriété peut être une fonction, dans ce cas la propriété est connue sous le nom de méthode.

// Voici un exemple simple d'un objet :

let voiture = {
    marque: 'Toyota',
    modele: 'Corolla',
    annee: 2020,
    couleur: 'bleu',
    demarrer: function() {
        console.log('La voiture démarre...');
    }
};

// Dans cet exemple, voiture est un objet qui a quatre propriétés (marque, modele, annee, couleur) et une méthode (demarrer).

// Nous pouvons accéder aux propriétés de l'objet de deux façons :

// Notation par points : voiture.marque
// Notation par crochets : voiture['marque']
// La méthode peut être appelée comme ceci : voiture.demarrer()
// -----------------------------------------------------------------------------------------------------------------------------------------

// Essayez de créer un objet personne qui a des propriétés comme nom, age et une méthode sePresenter qui imprime une courte présentation de la personne.

let personne = {
    nom: "Samir",
    age: 38,
    sePresenter: function () {
        let presentation = `Bonjour, je m'appelle ${this.nom} et je suis sympa`;
        if (this.profession) {
            presentation += ` et je suis ${this.profession}`;
        } 
        console.log(presentation); 
    }
}

personne.sePresenter();

// Modifier un objet:
personne.nom = "Alex";
personne.sePresenter();

// Ajouter des propriétés à un objet:
personne.profession = "développeur web";
personne.sePresenter();

//----------------------------------------------------------------------------------------------------------------------------------------------
