<template>
  <div>
    <div class="buttons-container">
      <router-link to="about" class="info-button">👤 Qui je suis ?</router-link>
      <router-link to="projet" class="info-button">📙 Mes projets</router-link>
      <router-link to="contact" class="info-button">✉️ Me contacter</router-link>
    </div>
    <div class="skills-container">
      <div class="skills">
        <h2 class="skill">💪 Mes compétences</h2>
        <div v-for="skill in skills" :key="skill.name" class="skill">
          <div class="skill-name">{{ skill.name }}</div>
          <div class="progress">
            <div
              class="progress-bar"
              :style="{
                backgroundColor: skill.color,
                width: isLoaded ? skill.percentage + '%' : '0%'
              }"
            >
              <span class="progress-percentage">{{ skill.percentage }}%</span>
            </div>
          </div>
        </div>
      </div>
      <div class="profile-picture-container">
        <img
          class="profile-picture"
          src="@/assets/profil.jpg"
          alt="Photo de profil"
          @mouseover="flipImage(true)"
          @mouseleave="flipImage(false)"
        />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        { name: 'HTML', percentage: 81, color: '#0056b3' },
        { name: 'CSS', percentage: 72, color: '#007bff' },
        { name: 'JavaScript', percentage: 63, color: '#3399ff' },
        { name: 'Vue.js', percentage: 52, color: '#66b2ff' }
      ],
      isLoaded: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.isLoaded = true
    }, 500)
  },
  methods: {
    flipImage(flip) {
      const img = this.$refs.profilePicture
      if (flip) {
        img.style.transform = 'rotateY(180deg)'
      } else {
        img.style.transform = 'rotateY(0deg)'
      }
    }
  }
}
</script>

<style scoped>
@import url('../assets/main.css');
</style>
