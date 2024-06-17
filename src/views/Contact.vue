<template>
  <div>
    <div class="contact-form">
      <h1 class="contact">✉️ Contact</h1>
      <TextChange /><br />
      <form @submit.prevent="sendEmail">
        <div class="form-group">
          <label for="name">Prénom :</label>
          <input
            type="text"
            id="name"
            placeholder="Entrez un prénom"
            v-model="formData.name"
            required
          />
        </div>
        <div class="form-group">
          <label for="email">Email :</label>
          <input
            type="email"
            id="email"
            placeholder="Entrez un e-mail valide"
            v-model="formData.email"
            required
          />
        </div>
        <div class="form-group">
          <label for="subject">Objet :</label>
          <input
            type="text"
            id="subject"
            placeholder="Entrez un objet"
            v-model="formData.subject"
            required
          />
        </div>
        <div class="form-group">
          <label for="message">Message :</label>
          <textarea
            id="message"
            rows="4"
            placeholder="Entrez un message..."
            v-model="formData.message"
            required
          ></textarea>
        </div>
        <button type="submit" :disabled="isSending">
          <span v-if="isSending" class="loader"></span>
          <span v-else>📨 Envoyer</span>
        </button>
        <div v-if="emailSent" class="alert">✅ Email envoyé avec succès !</div>
      </form>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import TextChange from '@/components/TextChange.vue'
import emailjs from 'emailjs-com'

export default {
  components: {
    TextChange,
    Footer
  },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      emailSent: false, // Initialisation de la propriété emailSent à false
      isSending: false // Initialisation de la propriété isSending à false
    }
  },
  methods: {
    sendEmail() {
      // Remplacez les valeurs suivantes par les identifiants de votre compte EmailJS
      this.isSending = true // Définir isSending à true pour afficher le loader
      const serviceID = 'service_qm0qyol'
      const templateID = 'template_n2zcdhe'
      const userID = 'OJDvwtiKZ11BaX9JE'

      const templateParams = {
        to_name: 'Destinataire',
        from_name: 'PortFolio', // Utiliser "PortFolio" comme nom principal
        user_name: this.formData.name, // Utiliser le nom de l'utilisateur pour l'inclure dans le message
        from_email: this.formData.email,
        objet: this.formData.subject,
        message: this.formData.message
      }

      emailjs
        .send(serviceID, templateID, templateParams, userID)
        .then((response) => {
          console.log('Email envoyé avec succès !', response)
          this.resetForm()
          this.emailSent = true // Définit emailSent à true après l'envoi réussi
        })
        .catch((error) => {
          console.error("Erreur lors de l'envoi de l'email :", error)
        })
        .finally(() => {
          this.isSending = false // Réinitialiser isSending à false après l'envoi
        })
    },
    resetForm() {
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  }
}
</script>

<style scoped>
@import url('@/assets/main.css');
</style>
