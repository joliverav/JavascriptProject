/*Tp2
 * Auteur: Jorge Eliecer Olivera Valle
 * Matricule : 20118***
 * Date: 06-11-2022
 *
 *Fichier contenant les fonctions impliquées dans les tris
 */

let ordreCroissant = false;

//Tri pour ordre croissant ou décroissant
function ordreTri(O) {
  if (O == "C") {
    ordreCroissant = true;
  } else {
    ordreCroissant = false;
  }
  critere = document.getElementById("selTri").value;
  trier(critere);
}

// Tri en fonction du critère sélectionné
function trier(critere) {
  if (critere == "annee") {
    trierAnnee();
  } else if (critere == "duree") {
    trierDuree();
  } else {
    trierTitre();
  }
}

//Liste de films pour une catégorie en particulier
function trierCategorie(categorie) {
  listeAAfficher = [];
  let idx = 0;
  for (let unFilm of listeFilms) {
    for (genre of unFilm.genres)
      if (genre == categorie) listeAAfficher[idx++] = unFilm;
  }
  apply_pagination();
}

//Liste de films par année
function trierAnnee() {
  listeAAfficher = listeFilms;
  if (ordreCroissant) {
    listeAAfficher.sort(function (a, b) {
      return parseInt(a.year) - parseInt(b.year);
    });
  } else {
    listeAAfficher.sort(function (a, b) {
      return parseInt(b.year) - parseInt(a.year);
    });
  }
  apply_pagination();
}

//Liste de films par durée
function trierDuree() {
  listeAAfficher = listeFilms;
  if (ordreCroissant) {
    listeAAfficher.sort(function (a, b) {
      return parseInt(a.runtime) - parseInt(b.runtime);
    });
  } else {
    listeAAfficher.sort(function (a, b) {
      return parseInt(b.runtime) - parseInt(a.runtime);
    });
  }
  apply_pagination();
}

//Liste de films par titre
function trierTitre() {
  listeAAfficher = listeFilms;
  if (ordreCroissant) {
    listeAAfficher.sort(function (a, b) {
      if (a.title < b.title) {
        return -1;
      } else {
        return 1;
      }
    });
    apply_pagination();
  } else {
    listeAAfficher.sort(function (a, b) {
      if (a.title < b.title) {
        return 1;
      } else {
        return -1;
      }
    });
    apply_pagination();
  }
}

function afficherAcceuil() {
  liste = listeFilms;
  afficherNouveaute(liste);
}

function afficherTout() {
  liste = listeFilms;
  afficherComplete(liste);
}

//Liste de catégories
function trierCateg() {
  listeCategories.sort();
}
