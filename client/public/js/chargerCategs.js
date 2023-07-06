/*Tp2
 * Auteur: Jorge Eliecer Olivera Valle
 * Matricule : 20118***
 * Date: 06-11-2022
 *
 *Fichier contenant les fonctions impliquées dans la manipulation des options
 * des selects liés aux catégories
 */

//Remplir le select avec les catégories de film
function categsMenus() {
  trierCateg();
  let selCategs = document.getElementById("selCategs");

  for (let uneCateg of listeCategories) {
    selCategs.options[selCategs.options.length] = new Option(uneCateg);
  }
}

//Remplir le select avec les catégories
function categsForm() {
  let selCategs1 = document.getElementById("genre1");
  let selCategs2 = document.getElementById("genre2");
  let selCategs3 = document.getElementById("genre3");

  selCategs1.options[selCategs1.options.length] = new Option("");
  selCategs2.options[selCategs2.options.length] = new Option("");
  selCategs3.options[selCategs3.options.length] = new Option("");

  selCategs1.options[0].disabled = true;

  for (let uneCateg of listeCategories) {
    selCategs1.options[selCategs1.options.length] = new Option(uneCateg);
    selCategs2.options[selCategs2.options.length] = new Option(uneCateg);
    selCategs3.options[selCategs3.options.length] = new Option(uneCateg);
  }
}

//Sélectionne les options associées aux genres
function selectionCategs(genres) {
  let selCategs1 = document.getElementById("genre1");
  let selCategs2 = document.getElementById("genre2");
  let selCategs3 = document.getElementById("genre3");

  let posOption1 = 0;
  let posOption2 = 0;
  let posOption3 = 0;

  for (let i = 0; i < selCategs1.options.length; i++) {
    if (listeCategories[i] == genres[0]) posOption1 = i + 1;
    if (listeCategories[i] == genres[1]) posOption2 = i + 1;
    if (listeCategories[i] == genres[2]) posOption3 = i + 1;
  }

  if (posOption1 > 0) selCategs1.options[posOption1].selected = true;
  if (posOption2 > 0) selCategs2.options[posOption2].selected = true;
  if (posOption3 > 0) selCategs3.options[posOption3].selected = true;
}
