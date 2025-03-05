<template>
  <div class="writingFont text-center">
    Custom site made with love (and Nuxt3) by me! ©2025
    <br />
    <a class="link" href="https://instagram.com/fosterdouglas_" target="_blank"
      >instagram</a
    >
    /
    <a class="link" href="http://sandcastle.co" target="_blank"
      >sandcastle.co</a
    >
    /
    <a
      class="link"
      href="https://www.linkedin.com/in/foster-douglas/"
      target="_blank"
      >linkedin</a
    >
    /
    <a v-if="!emailShowing" class="link" @click="emailShowing = !emailShowing"
      >email</a
    >
    <span v-else
      ><a href="mailto:foster@sandcastle.co">foster@sandcastle.co</a></span
    >
    /
    <a class="link" target="_blank" href="./files/foster-douglas-resume.pdf"
      >resume</a
    >
  </div>
</template>

<script setup lang="ts">
// VARS //
const emailShowing = ref<boolean>(false);
</script>

<style scoped lang="scss">
//
</style>
