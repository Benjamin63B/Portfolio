<script setup lang="ts">
import Footer from '@/components/Footer.vue'
import Modal from '@/components/Modal.vue'
import TextChange from '@/components/TextChange.vue'
</script>

<template>
  <h2 class="projet"><a name="projet"></a>📙 Projets</h2>
  <TextChange /><br />
  <div class="cadre-row">
    <!-- Première ligne de cadres -->
    <div class="cadre d-flex flex-column justify-content-center align-items-center cadrec">
      <h2>📄 CV</h2>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cv">
        <i class="fas fa-info-circle"></i> Information
      </button>
      <!-- Intégration du modal -->
      <Modal />
    </div>
    <div class="cadre d-flex flex-column justify-content-center align-items-center cadrec">
      <h2>📖 Cahier des charges</h2>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cahier">
        <i class="fas fa-info-circle"></i> Information
      </button>
    </div>
    <!-- Deuxième ligne de cadres -->
    <div class="cadre d-flex flex-column justify-content-center align-items-center cadrec">
      <h2>💬 Espace Commentaire</h2>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#ecommentaire"
      >
        <i class="fas fa-info-circle"></i> Information
      </button>
    </div>
    <div class="cadre d-flex flex-column justify-content-center align-items-center cadrec">
      <h2>🕯️ Créas Mêla</h2>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#creasmela"
      >
        <i class="fas fa-info-circle"></i> Information
      </button>
    </div>
  </div>
  <p class="info">
    Retrouvez tout les projet sur mon
    <a href="https://github.com/Benjamin63B?tab=repositories" target="_blank"
      ><img src="../assets/github.png"
    /></a>
  </p>
  <Footer />
</template>
