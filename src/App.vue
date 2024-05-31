<script setup>
import { ref, onMounted } from 'vue'
import Loading from '@/components/Loading.vue'

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 1500)
})
</script>

<template>
  <div id="app">
    <Loading v-if="isLoading" />
    <router-view v-else />
  </div>
</template>

<style scoped></style>
