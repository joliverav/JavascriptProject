/*Tp2
 * Auteur: Jorge Eliecer Olivera Valle
 * Matricule : 20118***
 * Date: 06-11-2022
 *
 *Fichier contenant les fonctions impliquées dans les modals et les formulaire
 */

//Déterminer le contenu à introduire dans le modal
function remplirModal(film, option) {
  let contenu = document.getElementById("modal-content");
  if (film == null) {
    contenu.innerHTML = modalAjouter();
    categsForm();
  } else {
    if (option == "M") {
      contenu.innerHTML = modalModifier(film);
      categsForm();
      selectionCategs(film.genres);
    } else {
      contenu.innerHTML = modalSupprimer(film);
    }
  }
}

//Contenu à afficher dans le modal pour ajouter un film
function modalAjouter() {
  return `
                <div class="modal-header">
                <h5 class="modal-title" id="modalLabel">Ajouter un film</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fermer"></button>
            </div>
            <div class="modal-body">
                <!-- Le formulaire-->
                <!--Début formulaire-->
                <form class="row g-3 " methode="post" action="" onsubmit="ajouterFilm(event);" id="formAjouter">
                <div class="col-md-12">
                    <label for="title" class="form-label">Titre</label>
                    <input type="text" class="form-control" id="title" value="" required>
                </div>
                <div class="col-md-6">
                    <label for="year" class="form-label">Année de sortie</label>
                    <input type="text" class="form-control" id="year" value="" required>
                </div>
                <div class="col-md-6">
                    <label for="runtime" class="form-label">Durée</label>
                    <div class="input-group">
                        <input type="text" class="form-control" id="runtime" aria-describedby="inputGroupPrepend" required>
                        <span class="input-group-text">min</span>
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="genre1" class="form-label">Genre(s)</label>
                    <select class="form-select" id="genre1" required></select>
                </div>
                <div class="col-md-4">
                    <label for="genre2" class="form-label"><br></label>
                    <select class="form-select" id="genre2"></select>
                </div>
                <div class="col-md-4">
                    <label for="genre3" class="form-label"><br></label>
                    <select class="form-select" id="genre3"></select>
                </div>
                <div class="col-md-6">
                    <label for="director" class="form-label">Réalisateur</label>
                    <input type="text" class="form-control" id="director" value="" required>
                </div>
                <div class="col-md-12">
                    <label for="actors" class="form-label">Acteurs principaux</label>
                    <input type="text" class="form-control" id="actors" value="" required>
                </div>
                <div class="col-md-12">
                    <label for="plot" class="form-label">Résumé</label>
                    <textarea class="form-control" id="plot" value="" required></textarea>
                </div>
                <div class="col-md-12">
                    <label for="posterURL" class="form-label">URL de l'image</label>
                    <input type="text" class="form-control" id="posterUrl" value="" required>
                </div>
                <div class="modal-footer ">
                    <button type="button" class="btn btn-primary btn-form" data-bs-dismiss="modal" >Annuler</button>
                    <button type="submit" class="btn btn-primary btn-form">Ajouter</button>
                </div>
                </form>
                <!--Fin formulaire-->
            `;
}

//Contenu à afficher dans le modal pour modifier un film
function modalModifier(film) {
  return `
                    <div class="modal-header">
                    <h5 class="modal-title" id="modalLabel">Modifier un film</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fermer"></button>
                </div>
                <div class="modal-body">
                    <!-- Le formulaire-->
                    <!--Début formulaire-->
                    <form class="row g-3 " onsubmit="modifierFilm(event);" id="formModifier">
                    <div class="col-md-12">
                        <label for="title" class="form-label">Titre</label>
                        <input type="text" class="form-control" id="title" value=${film.title} required>
                    </div>
                    <div class="col-md-6">
                        <label for="year" class="form-label">Année de sortie</label>
                        <input type="text" class="form-control" id="year" value=${film.year} required>
                    </div>
                    <div class="col-md-6">
                        <label for="runtime" class="form-label">Durée</label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="runtime" aria-describedby="inputGroupPrepend" value=${film.runtime} required>
                            <span class="input-group-text">min</span>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <label for="genre1" class="form-label">Genre(s)</label>
                        <select class="form-select" id="genre1" required></select>
                    </div>
                    <div class="col-md-4">
                        <label for="genre2" class="form-label"><br></label>
                        <select class="form-select" id="genre2"></select>
                    </div>
                    <div class="col-md-4">
                        <label for="genre3" class="form-label"><br></label>
                        <select class="form-select" id="genre3"></select>
                    </div>
                    <div class="col-md-6">
                        <label for="director" class="form-label">Réalisateur</label>
                        <input type="text" class="form-control" id="director" value="${film.director}" required>
                    </div>
                    <div class="col-md-12">
                        <label for="actors" class="form-label">Acteurs principaux</label>
                        <input type="text" class="form-control" id="actors" value="${film.actors}" required>
                    </div>
                    <div class="col-md-12">
                        <label for="plot" class="form-label">Résumé</label>
                        <textarea class="form-control" id="plot" required>${film.plot}"</textarea>
                    </div>
                    <div class="col-md-12">
                        <label for="posterURL" class="form-label">URL de l'image</label>
                        <input type="text" class="form-control" id="posterUrl" value="${film.posterUrl}" required>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary btn-form" data-bs-dismiss="modal" style="margin-right:140px">Annuler</button>
                        <button type="submit" class="btn btn-primary btn-form">Modifier</button>
                    </div>
                </form>
                <!--Fin formulaire-->
            `;
}

//Contenu à afficher dans le modal pour supprimer un film
function modalSupprimer(film) {
  return `
                    <div class="modal-header">
                    <h5 class="modal-title" id="modalLabel">Supprimer un film</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fermer"></button>
                </div>
                <div class="modal-body">
                    <!-- Le formulaire-->
                    <!--Début formulaire-->
                    <form class="row g-3 " onsubmit="supprimerFilm(event);">
                    <label> Êtes-vous certain.e.s de vouloir supprimer le film ${film.title} ? </label>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary btn-form" data-bs-dismiss="modal" style="margin-right:124px">Annuler</button>
                        <button type="submit" class="btn btn-primary btn-form">Supprimer</button>
                    </div>
                </form>
                <!--Fin formulaire-->
            `;
}
