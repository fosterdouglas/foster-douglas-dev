<template>
  <span class="name">
    <div class="col-auto ms-auto">
      <div class="large nameText text-end pe-sm-2 pe-md-0">Foster</div>
    </div>
    <div class="col-auto ms-auto ms-lg-0">
      <div class="large nameText text-end">Douglas</div>
    </div>
  </span>
</template>

<script setup lang="ts">
//
</script>

<style scoped lang="scss">
.name:hover {
  .nameText {
    background-size: 200%;
    background-image: linear-gradient(45deg, cadetblue, #1c97ca);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    cursor: pointer;
    font-family: rig-solid-bold-reverse, sans-serif;
  }
}
</style>
