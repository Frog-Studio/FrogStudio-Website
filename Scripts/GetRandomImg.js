/* ---BROKEN ---

// Fonction pour obtenir un nombre aléatoire entre min et max
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Fonction pour afficher une image aléatoire
function afficherImageAleatoire() {
  // Créer une requête XHR
  const xhr = new XMLHttpRequest();

  // Ouvrir la requête en GET
  xhr.open("GET", "../Assets/Photos/");

  // Définir le type de réponse attendu
  xhr.responseType = "text";

  // Fonction à exécuter lorsque la requête est terminée
  xhr.onload = function() {
    if (xhr.status === 200) {
      // Transformer le texte en tableau de noms de fichiers
      const nomsFichiers = xhr.responseText.split("\n");

      // Obtenir un nombre aléatoire entre 0 et la longueur du tableau - 1
      const indiceAleatoire = getRandomInt(0, nomsFichiers.length - 1);

      // Obtenir le nom du fichier aléatoire
      const nomFichierAleatoire = nomsFichiers[indiceAleatoire];

      // Vérifier si le fichier est une image
      if (nomFichierAleatoire.endsWith(".jpg") || nomFichierAleatoire.endsWith(".png") || nomFichierAleatoire.endsWith(".gif")) {
        // Remplacer l'image par l'image aléatoire
        document.getElementById("image-aleatoire").innerHTML = `<img src="images/${nomFichierAleatoire}" alt="Image aléatoire">`;
      }
    } else {
      console.error("Erreur lors de la lecture du dossier:", xhr.statusText);
    }
  };

  // Envoyer la requête
  xhr.send();
}

// Afficher l'image aléatoire au chargement de la page
afficherImageAleatoire();