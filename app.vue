<template>
  <Head>
    <Link rel="stylesheet" herf="https://use.typekit.net/cde1iuc.css"></Link>
    <Title>Foster Douglas !</Title>
    <Body>
      <NuxtPage />
    </Body>
  </Head>
</template>

<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: "bodyClasses",
  },
  htmlAttrs: {
    class: "htmlClasses",
  },
});
</script>

<style lang="scss">
@import url("https://use.typekit.net/kbf8rqj.css");

.htmlClasses {
  background: #ebebeb;
}

.bodyClasses {
  max-width: 1100px;
  margin: 0 auto !important;
  float: none !important;
  background-color: #f9f9f9 !important;
  border-radius: 1rem;
}
</style>
