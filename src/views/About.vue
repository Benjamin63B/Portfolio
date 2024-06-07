<script setup>
import Header from '@/components/Header.vue'
import TextChange from '@/components/TextChange.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <Header />
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
        Âgé de 29 ans, passionné d'informatique et de développement web. J'ai acquis mes compétences
        de manière autodidacte et je suis prêt à relever de nouveaux défis dans le domaine du
        développement ! <br />
        J'habite à <span class="name-animated-1">Clermont-Ferrand</span><br />
        Je suis passionné par le monde de la
        <span class="name-animated-1">cigarette Électronique</span><br />
        J'ai oublié mon pseudo : <span class="name-animated-2">CookyyFR</span>
      </p>
    </div>
  </div>
  <Footer />
</template>

<style>
@import url('@/assets/main.css');
</style>
