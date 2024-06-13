<!-- App.vue -->
<script setup>
import { ref, onMounted } from 'vue'
import Loading from '@/components/Loading.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 1500)
})
</script>

<template>
  <Loading v-if="isLoading" />
  <div v-else>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<style scoped></style>
