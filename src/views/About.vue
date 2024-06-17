<script setup>
import TextChange from '@/components/TextChange.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="about">
    <div class="about-container">
      <h1 class="animated-text"><span class="name-animated">Benjamin BESANTE</span></h1>
      <TextChange />
      <div class="profile-picture-container">
        <img
          class="profile-picture profile-logo"
          src="../assets/profil.jpg"
          alt="Photo de profil"
        />
      </div>
      <p class="bio">
        Âgé de 29 ans, j'ai toujours été passionné d'informatique et de développement web. J'ai
        acquis mes compétences de manière autodidacte et suis prêt à relever de nouveaux défis<br />
        J'habite à <span class="name-animated-1">Clermont-Ferrand</span><br />
        Je suis passionné par le monde de la
        <span class="name-animated-1">cigarette Électronique</span><br />
        J'ai oublié mon pseudo : <span class="name-animated-2">CookyyFR</span>
      </p>
    </div>
    <br />
  </div>
  <Footer />
</template>

<style>
@import url('@/assets/main.css');
</style>
