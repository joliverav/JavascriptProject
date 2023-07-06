/*Tp2
 * Auteur: Jorge Eliecer Olivera Valle
 * Matricule : 20118***
 * Date: 06-11-2022
 *
 *Fichier contenant les fonctions impliquées dans la manipulation
 *des données de la listeFilm
 */

let idFilmTraite;
let posFilmTraite;

//Ajouter un film à partir des informations fournies dans le formulaire
function ajouterFilm(event) {
  event.preventDefault();
  let title = document.getElementById("title").value;
  let year = document.getElementById("year").value;
  let runtime = document.getElementById("runtime").value;

  let genres = [];
  let idx = 0;
  let genre1 = document.getElementById("genre1").value;
  genres[idx++] = genre1;
  let genre2 = document.getElementById("genre2").value;
  if (genre2.length > 0) {
    genres[idx++] = genre2;
  }
  let genre3 = document.getElementById("genre3").value;
  if (genre3.length > 0) genres[idx++] = genre3;

  let director = document.getElementById("director").value;
  let actors = document.getElementById("actors").value;
  let plot = document.getElementById("plot").value;
  let posterUrl = document.getElementById("posterUrl").value;

  let unFilm = {
    id: nbFilms,
    title: title,
    year: year,
    runtime: runtime,
    genres: genres,
    director: director,
    actors: actors,
    plot: plot,
    posterUrl: posterUrl,
  };
  listeFilms[nbFilms++] = unFilm;
  document.getElementById("formAjouter").reset();
  $("#modal").modal("hide");
  afficherNouveaute(listeFilms);
}

//Modifier un film à partir des informations fournies dans le formulaire
function modifierFilm(event) {
  event.preventDefault();
  let title = document.getElementById("title").value;
  let year = document.getElementById("year").value;
  let runtime = document.getElementById("runtime").value;

  let genres = [];
  let idx = 0;
  let genre1 = document.getElementById("genre1").value;
  genres[idx++] = genre1;
  let genre2 = document.getElementById("genre2").value;
  if (genre2.length > 0) {
    genres[idx++] = genre2;
  }
  let genre3 = document.getElementById("genre3").value;
  if (genre3.length > 0) genres[idx++] = genre3;

  let director = document.getElementById("director").value;
  let actors = document.getElementById("actors").value;
  let plot = document.getElementById("plot").value;
  let posterUrl = document.getElementById("posterUrl").value;

  let unFilm = {
    id: idFilmTraite,
    title: title,
    year: year,
    runtime: runtime,
    genres: genres,
    director: director,
    actors: actors,
    plot: plot,
    posterUrl: posterUrl,
  };
  listeFilms[posFilmTraite] = unFilm;
  $("#modal").modal("hide");
  afficherNouveaute(listeFilms);
}

//Supprimer un film à partir des informations fournies dans le formulaire
function supprimerFilm(event) {
  event.preventDefault();
  listeFilms.splice(posFilmTraite, 1);
  nbFilms--;
  $("#modal").modal("hide");
  afficherNouveaute(listeFilms);
}

function getCarteSelectionnee(element, action) {
  let divCard = element.parentNode.parentNode;
  idFilmTraite = divCard.getElementsByTagName("p")[0].innerHTML;

  for (let i = 0; i < nbFilms; i++) {
    if (listeFilms[i].id == idFilmTraite) {
      posFilmTraite = i;
    }
  }
  if (action == "M") {
    remplirModal(listeFilms[posFilmTraite], "M");
  }
  if (action == "S") {
    remplirModal(listeFilms[posFilmTraite], "S");
  }
}
