/*Tp2
 * Auteur: Jorge Eliecer Olivera Valle
 * Matricule : 20118***
 * Date: 06-11-2022
 *
 *Fichier contenant les fonctions impliquées dans les requêtes
 */

let listeFilms = [];
let nbFilms = 0;
let listeCategories = [];
let listeFilmsDisponible = false;

//Données contenues dans le fichier JSON
function requetes() {
  fetch("serveur/films.json")
    .then((response) => {
      if (response.ok) {
        response.json().then((reponseJSON) => {
          listeFilms = reponseJSON.movies;
          listeCategories = reponseJSON.genres;
          listeFilmsDisponible = true;
          nbFilms = listeFilms.length;
          categsMenus();
          $pagination = $("#pagination");
          afficherAcceuil();
        });
      } else {
        console.log("Mauvaise réponse du réseau");
      }
    })
    .catch((error) => {
      console.log(
        "Il y a eu un problème avec l'opération fetch: " + error.message
      );
    });
}
