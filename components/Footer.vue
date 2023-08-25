<template>
  <div class="writingFont text-center">
    Made with love (and Nuxt3) by me! ©2023
    <br />
    <a class="link" href="https://twitter.com/_fosterdouglas" target="_blank"
      >twitter</a
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
    <span v-else>foster@sandcastle.co</span>
    /
    <a class="link" target="_blank" href="./files/foster-douglas-resume.pdf"
      >cv</a
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
