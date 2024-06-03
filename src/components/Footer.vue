<template>
  <footer>
    <p>Benjamin BESANTE &copy; - {{ currentYear }}</p>
    <a href="https://github.com/Benjamin63B?tab=repositories" target="_blank">
      <img src="../assets/github.png" alt="Logo Github"
    /></a>
    <a href="https://fr.linkedin.com/in/benjamin-besante-4b59bb2a1" target="_blank">
      <img src="../assets/linkedin.png" alt="Logo Github" /></a
    ><br />
    <small>Dernière mise à jour: <time datetime="2024-05-31">31 Mai 2024</time></small>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
@import url('../assets/main.css');
</style>
