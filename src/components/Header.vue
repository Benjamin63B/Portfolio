<template>
  <nav class="navbar navbar-expand-lg" style="background-color: #12b6f3 !important">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img src="../assets/logo.png" alt="Logo" />
      </router-link>
      <button @click="toggleMenu" class="navbar-toggler" type="button" aria-expanded="false">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" :class="{ show: isMenuOpen }" id="navbarID">
        <div class="navbar-nav align-left-on-mobile">
          <router-link class="nav-link" to="/about" @click="closeMenu"
            >👤 Qui je suis ?</router-link
          >
          <router-link class="nav-link" to="/projet" @click="closeMenu">📙 Projets</router-link>
          <router-link class="nav-link" to="/contact" @click="closeMenu">✉️ Contact</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    }
  }
}
</script>
