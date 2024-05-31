<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <footer>
    <p>Benjamin BESANTE &copy; - {{ currentYear }}</p>
    <a href="https://github.com/Benjamin63B/">
      <img src="../assets/github.png" alt="Logo Github"
    /></a>
    <a href="https://github.com/Benjamin63B/">
      <img src="../assets/linkedin.png" alt="Logo Github"
    /></a>
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
