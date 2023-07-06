/*Tp2
 * Auteur: Jorge Eliecer Olivera Valle
 * Matricule : 20118***
 * Date: 06-11-2022
 *
 *
 *Fichier contenant les fonctions impliquées dans l'affichage des cartes
 * de chacun des films
 */

let listeAAfficher = [];

//Afficher les 15 films les plus récents
function afficherNouveaute(liste) {
  listeAAfficher = [];
  idx = 0;
  for (let i = 0; i < 15; i++) {
    listeAAfficher[idx] = liste[i];
    idx++;
  }
  apply_pagination();
}

//Afficher tous les films les plus récents
function afficherComplete(liste) {
  listeAAfficher = [];
  idx = 0;
  for (let i = 0; i < liste.length; i++) {
    listeAAfficher[idx] = liste[i];
    idx++;
  }
  apply_pagination();
}

//Créer le groupe contenant les cartes de tous les films affichés
function createCardGroup(listeF) {
  let cardGroup = document.getElementById("card-group");
  let strFilms = "";

  for (film of listeF) {
    strFilms += creerCarte(film);
  }
  cardGroup.innerHTML = strFilms;
}

//Créer la card de chacun des films à afficher
function creerCarte(film) {
  let nbCaracteres = 150;
  return `
  <div class="row">
    <div class='cont'>
                    <p class="card-id">${film.id}</p>
                    <a href='https://www.youtube.com/results?search_query=${
                      film.title
                    } trailer ${film.year}' target='_blank'>
                        <img class="image p-2" src=${film.posterUrl}  alt=${
    film.title
  } >
                    </a>
              
                    <div class='card-body'>                     
                          <h5 class='card-title d-inline'>${film.title}</h5>
                          <p class='text-muted'>${film.year} | ${
    film.runtime
  } mins | ${splitWords(film.genres)}</p>
                       
                        <p class='card-text'>${splitWords(
                          film.actors.split(",")
                        )}</p>
                        <p class='card-text'>${resumeFilm(
                          film.plot,
                          nbCaracteres
                        )}</p>
                        
                    </div>
                    <div class='card-foot boutonCard'>
                        <a id="aleft" href='#' class='btn btn-primary ' data-bs-toggle="modal" data-bs-target="#modal" onclick="getCarteSelectionnee(this, 'M')">
                          <i class='bi bi-pencil-square' style="font-size:24px;"></i>
                        </a>
                        <a id="aright" class='btn btn-primary' data-bs-toggle="modal" data-bs-target="#modal" onclick="getCarteSelectionnee(this, 'S')">
                          <i class='bi bi-x-square' style="font-size:24px;"></i>
                        </a>
                    </div>
                </div></div>
            `;
}

//Permet de réduire la taille du résumé et d'ajouter les "..." au besoin
function resumeFilm(texte, nbCaracteres) {
  let resume = "";
  resume += texte.substring(0, nbCaracteres);
  if (texte.length > nbCaracteres) resume += "...";
  return resume;
}

//Permet d'afficher les genres du film dans la carte
function splitWords(tabGenres) {
  let listeGenres = "";
  listeGenres += tabGenres[0];
  if (tabGenres.length > 1) {
    for (let i = 1; i < film.genres.length; i++)
      listeGenres += ", " + tabGenres[i];
  }
  return listeGenres;
}
