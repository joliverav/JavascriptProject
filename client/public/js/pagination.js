/*Tp2
 * Auteur: Jorge Eliecer Olivera Valle
 * Matricule : 20118***
 * Date: 06-11-2022
 *
 *Fichier contenant les fonctions impliquées dans la pagination
 */

let $pagination = $("#pagination");
let totalRecords = 0;
let records = [];
let displayRecords = [];
let recPerPage = 3;
let page = 1;
let totalPages = 0;

//Afficher l'outil de pagination
function apply_pagination() {
  records = listeAAfficher;
  totalRecords = records.length;
  page = 1;
  totalPages = Math.ceil(totalRecords / recPerPage);

  $pagination.twbsPagination("destroy");
  $pagination.twbsPagination({
    totalPages: totalPages,
    visiblePages: 10,
    onPageClick: function (event, page) {
      displayRecordsIndex = Math.max(page - 1, 0) * recPerPage;
      endRec = displayRecordsIndex + recPerPage;
      displayRecords = records.slice(displayRecordsIndex, endRec);
      createCardGroup(displayRecords);
    },
  });
}
