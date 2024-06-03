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
    <p v-if="showProjet" class="animated-text">
      <span :class="{ 'changing-text': true, 'slide-up': textProjet }">{{
        currentTextProjet
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
      currentTextContact: 'Vous pouvez me joindre ici',
      textsContact: ['Vous pouvez me joindre ici', 'Page créée avec emailjs'],
      textIndexContact: 0,
      textContact: false,
      currentTextProjet: 'Retrouvez mes projets',
      textsProjet: ['Retrouvez mes projets', 'Projet CEF & Perso'],
      textIndexProjet: 0,
      textProjet: false,
      showAbout: false,
      showPresentation: false,
      showContact: false,
      showProjet: false,
      intervalAbout: null,
      intervalPresentation: null,
      intervalContact: null,
      intervalProjet: null,
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
      this.showProjet = route.name === 'Projet'

      if (this.showAbout && !this.intervalAbout) {
        this.startTextRotation('About')
      } else if (!this.showAbout && this.intervalAbout) {
        clearInterval(this.intervalAbout)
        this.intervalAbout = null
      }

      if (this.showPresentation && !this.intervalPresentation) {
        this.startTextRotation('Presentation')
      } else if (!this.showPresentation && this.intervalPresentation) {
        clearInterval(this.intervalPresentation)
        this.intervalPresentation = null
      }

      if (this.showContact && !this.intervalContact) {
        this.startTextRotation('Contact')
      } else if (!this.showContact && this.intervalContact) {
        clearInterval(this.intervalContact)
        this.intervalContact = null
      }

      if (this.showProjet && !this.intervalProjet) {
        this.startTextRotation('Projet')
      } else if (!this.showProjet && this.intervalProjet) {
        clearInterval(this.intervalProjet)
        this.intervalProjet = null
      }
    },
    startTextRotation(type) {
      const intervalMap = {
        About: 'intervalAbout',
        Presentation: 'intervalPresentation',
        Contact: 'intervalContact',
        Projet: 'intervalProjet'
      }

      const textKeyMap = {
        About: 'textAbout',
        Presentation: 'textPresentation',
        Contact: 'textContact',
        Projet: 'textProjet'
      }

      const textIndexMap = {
        About: 'textIndex',
        Presentation: 'textIndexSecond',
        Contact: 'textIndexContact',
        Projet: 'textIndexProjet'
      }

      const currentTextMap = {
        About: 'currentText',
        Presentation: 'currentTextSecond',
        Contact: 'currentTextContact',
        Projet: 'currentTextProjet'
      }

      const textsMap = {
        About: this.texts,
        Presentation: this.textsSecond,
        Contact: this.textsContact,
        Projet: this.textsProjet
      }

      this[intervalMap[type]] = setInterval(() => {
        this[textKeyMap[type]] = true
        setTimeout(() => {
          this[textIndexMap[type]] = (this[textIndexMap[type]] + 1) % textsMap[type].length
          this[currentTextMap[type]] = textsMap[type][this[textIndexMap[type]]]
          setTimeout(() => {
            this[textKeyMap[type]] = false
          }, this.animationDuration)
        }, this.animationDuration)
      }, this.rotationDelay)
    }
  },
  beforeUnmount() {
    clearInterval(this.intervalAbout)
    clearInterval(this.intervalPresentation)
    clearInterval(this.intervalContact)
    clearInterval(this.intervalProjet)
  }
}
</script>

<style scoped>
@import url('@/assets/main.css');
</style>
