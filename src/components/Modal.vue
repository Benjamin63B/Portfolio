<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="modal fade" id="cv" tabindex="-1" aria-labelledby="cv" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="cvlabel">📄 CV</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <img src="@/assets/profil.jpg" alt="Logo CV" class="cv" /><br />
          <img src="@/assets/github.png" alt="GitHub" class="github" /><a
            href="https://github.com/Benjamin63B/Mon_CV"
            >Lien repository</a
          ><br />
          <small>Dernière mise à jour: <time datetime="2023-11-14">14 Novembre 2023</time></small>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="cahier" tabindex="-1" aria-labelledby="cahier" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="cahierlabel">📖 Cahier des charges</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <img src="../assets/La socketterie.png" alt="Logo La Sockettterie" class="cahier" /><br />
          <p>Le cahier des charges à était fait sur Word.</p>
          <a
            href="../assets/projets/Cahier des charges - Benjamin BESANTE.doc"
            download="Cahier des charges - Benjamin BESANTE.doc"
            >📥 Télécharger le fichier </a
          ><br />
          <small>Dernière mise à jour: <time datetime="2023-12-04">04 Décembre 2023</time></small>
        </div>
      </div>
    </div>
  </div>

  <div
    class="modal fade"
    id="ecommentaire"
    tabindex="-1"
    aria-labelledby="ecommentaire"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="ecommentairelabel">💬 Espace Commentaire</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <img src="../assets/espace_commentaire.png" alt="Logo CV" class="espace_c" /><br />
          <img src="../assets/github.png" alt="GitHub" class="github" /><a
            href="https://github.com/Benjamin63B/Commentaire"
            >Lien repository</a
          ><br />
          <small>Dernière mise à jour: <time datetime="2024-03-28">03 Mars 2024</time></small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // Définissez vos données ici si nécessaire
  data() {
    return {
      showModalCV: false,
      showModalCahier: false,
      showModalEspaceCommentaire: false
    }
  },
  methods: {
    // Méthode pour ouvrir le modal CV
    openModalCV() {
      this.showModalCV = true
    },
    // Méthode pour fermer le modal CV
    closeModalCV() {
      this.showModalCV = false
    },
    // Méthode pour ouvrir le modal Cahier des charges
    openModalCahier() {
      this.showModalCahier = true
    },
    // Méthode pour fermer le modal Cahier des charges
    closeModalCahier() {
      this.showModalCahier = false
    },
    // Méthode pour ouvrir le modal Espace Commentaire
    openModalEspaceCommentaire() {
      this.showModalEspaceCommentaire = true
    },
    // Méthode pour fermer le modal Espace Commentaire
    closeModalEspaceCommentaire() {
      this.showModalEspaceCommentaire = false
    }
  }
}
</script>

<style scoped>
@import url('../assets/main.css');
</style>
