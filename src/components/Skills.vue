<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="skills-container">
    <div class="skills">
      <h2 class="skill-title">Mes compétences</h2>
      <div v-for="skill in skills" :key="skill.name" class="skill">
        <div class="skill-name">{{ skill.name }}</div>
        <div
          class="progress"
          @mouseover="showPercentage(skill.name)"
          @mouseleave="hidePercentage(skill.name)"
        >
          <div
            class="progress-bar"
            :style="{ backgroundColor: skill.color, width: skill.percentage + '%' }"
          ></div>
          <div
            v-if="skill.showPopup"
            class="progress-popup"
            :style="{ right: skill.percentage === 100 ? '0' : '5px' }"
          >
            <span>{{ skill.percentage === 100 ? '100%' : skill.percentage + '%' }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="profile-picture-container">
      <img class="profile-picture" src="../assets/profil.jpg" alt="Photo de profil" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        { name: 'HTML', percentage: 81, color: '#0056b3', showPopup: false },
        { name: 'CSS', percentage: 72, color: '#007bff', showPopup: false },
        { name: 'JavaScript', percentage: 63, color: '#3399ff', showPopup: false },
        { name: 'Vue.js', percentage: 52, color: '#66b2ff', showPopup: false }
      ]
    }
  },
  methods: {
    showPercentage(skillName) {
      const skill = this.skills.find((skill) => skill.name === skillName)
      skill.showPopup = true
    },
    hidePercentage(skillName) {
      const skill = this.skills.find((skill) => skill.name === skillName)
      skill.showPopup = false
    }
  }
}
</script>

<style scoped>
@import url('../assets/main.css');
</style>
