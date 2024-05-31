<template>
  <div class="animated-header">
    <p v-if="showAbout" class="animated-text">
      Développeur Web
      <span :class="{ 'changing-text': true, 'slide-up': textAbout }">{{ currentText }}</span>
    </p>
    <p v-if="showPresentation" class="animated-text">
      <span :class="{ 'changing-text': true, 'slide-up': textPresentation }">{{
        currentTextSecond
      }}</span>
    </p>
    <p v-if="showContact" class="animated-text">
      <span :class="{ 'changing-text': true, 'slide-up': textContact }">{{
        currentTextContact
      }}</span>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentText: 'Back-End / Front-End',
      texts: ['Back-End / Front-End.', 'au Centre Européen de France.'],
      textIndex: 0,
      textAbout: false,
      currentTextSecond: 'Bienvenue sur mon portfolio',
      textsSecond: ['Bienvenue sur mon portfolio.', 'Explorons ensemble les projets.'],
      textIndexSecond: 0,
      textPresentation: false,
      currentTextContact: '',
      textsContact: ['Vous pouvez me joindre ici', 'Page créer avec emailjs'],
      textIndexContact: 0,
      textContact: false,
      showAbout: false,
      showPresentation: false,
      showContact: false,
      intervalAbout: null,
      intervalPresentation: null,
      intervalContact: null,
      rotationDelay: 5000, // Délai avant changement de texte
      animationDuration: 500 // Durée de l'animation
    }
  },
  watch: {
    $route(to) {
      this.updateVisibility(to)
    }
  },
  mounted() {
    this.updateVisibility(this.$route)
  },
  methods: {
    updateVisibility(route) {
      this.showAbout = route.name === 'home'
      this.showPresentation = route.name === 'About'
      this.showContact = route.name === 'Contact'

      if (this.showAbout && !this.intervalAbout) {
        this.startTextRotation()
      } else if (!this.showAbout && this.intervalAbout) {
        clearInterval(this.intervalAbout)
        this.intervalAbout = null
      }

      if (this.showPresentation && !this.intervalPresentation) {
        this.startTextRotationSecond()
      } else if (!this.showPresentation && this.intervalPresentation) {
        clearInterval(this.intervalPresentation)
        this.intervalPresentation = null
      }

      if (this.showContact && !this.intervalContact) {
        this.startTextRotationContact()
      } else if (!this.showContact && this.intervalContact) {
        clearInterval(this.intervalContact)
        this.intervalContact = null
      }
    },
    startTextRotation() {
      this.intervalAbout = setInterval(() => {
        this.textAbout = true
        setTimeout(() => {
          this.textIndex = (this.textIndex + 1) % this.texts.length
          this.currentText = this.texts[this.textIndex]
          setTimeout(() => {
            this.textAbout = false
          }, this.animationDuration)
        }, this.animationDuration)
      }, this.rotationDelay)
    },
    startTextRotationSecond() {
      this.intervalPresentation = setInterval(() => {
        this.textPresentation = true
        setTimeout(() => {
          this.textIndexSecond = (this.textIndexSecond + 1) % this.textsSecond.length
          this.currentTextSecond = this.textsSecond[this.textIndexSecond]
          setTimeout(() => {
            this.textPresentation = false
          }, this.animationDuration)
        }, this.animationDuration)
      }, this.rotationDelay)
    },
    startTextRotationContact() {
      this.intervalContact = setInterval(() => {
        this.textContact = true
        setTimeout(() => {
          this.textIndexContact = (this.textIndexContact + 1) % this.textsContact.length
          this.currentTextContact = this.textsContact[this.textIndexContact]
          setTimeout(() => {
            this.textContact = false
          }, this.animationDuration)
        }, this.animationDuration)
      }, this.rotationDelay)
    }
  },
  beforeUnmount() {
    clearInterval(this.intervalAbout)
    clearInterval(this.intervalPresentation)
    clearInterval(this.intervalContact)
  }
}
</script>

<style scoped>
@import url('@/assets/main.css');
</style>
