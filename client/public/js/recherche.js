/*Tp2
 * Auteur: Jorge Eliecer Olivera Valle
 * Matricule : 20118***
 * Date: 06-11-2022
 *
 *Fichier contenant les fonctions impliquées dans les recherches
 */

let listeResultat = [];
let nbResulats = 0;

//Recherche des mots clés saisis
function rechercher(event) {
  event.preventDefault();
  let recherche = document.getElementById("recherche").value.toUpperCase();
  nbResulats = 0;
  listeAAfficher = [];
  for (let unFilm of listeFilms) {
    //Dans le titre
    if (unFilm.title.toUpperCase().includes(recherche)) {
      apparitionUnique(unFilm);
    }
    //Dans la description
    if (unFilm.plot.toUpperCase().includes(recherche)) {
      apparitionUnique(unFilm);
    }
    //Dans les acteurs
    if (unFilm.actors.toUpperCase().includes(recherche)) {
      apparitionUnique(unFilm);
    }
    //Dans les catégories
    for (genre of unFilm.genres) {
      if (genre == recherche) apparitionUnique(unFilm);
    }
  }
  if (listeAAfficher.length > 0) apply_pagination();
}

function apparitionUnique(leFilm) {
  let absent = true;
  for (let unFilm of listeAAfficher) {
    if (unFilm.id == leFilm.id) absent = false;
  }
  if (absent) listeAAfficher[nbResulats++] = leFilm;
}
