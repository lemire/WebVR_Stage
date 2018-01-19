// S'occupe de la lecture du cube sur le lecteur.
AFRAME.registerComponent('lecture-cube', {

  /* On lit l'attribut data-mois du cube et on l'affiche sur le lecteur,
  et on l'affecte à une variable globale */
  update: function () {

    var el = this.el;
    var leMoisChoisi = " ";

    el.addEventListener('drag-drop', function (evt) {

      leMoisChoisi = evt.detail.dropped.getAttribute('data-mois');
      el.setAttribute("data-mois-choisi",leMoisChoisi);

      console.log(el.getAttribute("data-mois-choisi"));
    });

  }

});