<template>
  <div class="home">
    <LandingPage />
  </div>
</template>

<script>
// @ is an alias to /src
import LandingPage from '@/components/LandingPage.vue'



export default {
  name: 'home',
  components: {
    LandingPage
  }
}
</script>

<style>
body {
background-color: #B5FFE9
}
</style>
