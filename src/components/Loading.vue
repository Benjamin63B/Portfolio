<template>
  <div class="loading-spinner">
    <img src="../assets/logo.png" alt="Logo" class="spinner-logo" />
    <p class="loading-text">Chargement en cours...</p>
  </div>
</template>

<script>
export default {
  name: 'LoadingSpinner'
}
</script>

<style scoped>
.loading-spinner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.spinner-logo {
  width: 100px;
  height: 100px;
  animation: spin 2s linear infinite;
}

.loading-text {
  margin-top: 20px;
  font-size: 1.2em;
  color: #3498db;
  text-align: center;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
