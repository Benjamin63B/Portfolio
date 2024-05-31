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
        développement !
      </p>
    </div>
  </div>
  <Footer />
</template>

<style>
@import url('@/assets/main.css');
</style>
