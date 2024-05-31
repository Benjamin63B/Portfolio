<template>
  <nav class="navbar navbar-expand-lg" style="background-color: #12b6f3 !important">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img src="../assets/logo.png" alt="Logo" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarID"
        aria-controls="navbarID"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarID">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/about">👤 Qui je suis ?</router-link>
          <router-link class="nav-link" to="/projet">📙 Projets</router-link>
          <router-link class="nav-link" to="/contact">✉️ Contact</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
