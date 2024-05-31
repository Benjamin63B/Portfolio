<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Header from '@/components/Header.vue';
import Modal from '@/components/Modal.vue';
</script>

<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Header />
<h2 class="projet"><a name="projet"></a>📙 Projets</h2>
    <div class="cadre-row">
      <div
        class="cadre d-flex flex-column justify-content-center align-items-center cadrec"
      >
        <h2>📄 CV</h2>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#cv"
        >
          <i class="fas fa-info-circle"></i> Information
        </button>
        <!-- Intégration du modal -->
        <Modal />
      </div>
      <div
        class="cadre d-flex flex-column justify-content-center align-items-center cadrec"
      >
        <h2>📖 Cahier des charges</h2>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#cahier"
        >
          <i class="fas fa-info-circle"></i> Information
        </button>
      </div>
      <div
        class="cadre d-flex flex-column justify-content-center align-items-center cadrec"
      >
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
    </div>
</template>


