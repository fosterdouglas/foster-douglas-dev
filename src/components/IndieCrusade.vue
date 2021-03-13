<template>
  <b-container fluid>
    <GroupTitle :title="'indie crusade'" />

    <!-- <div v-for="meta in metas()" :key="meta">{{ meta.title }}</div>
    <VueMarkdown v-for="text in texts()" :key="text">
      {{ text.default }}
    </VueMarkdown> -->
    <div class="mt-5">Coming soon!</div>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import GroupTitle from "./GroupTitle.vue";

import VueMarkdown from "vue-markdown";

@Component({
  components: {
    GroupTitle,
    VueMarkdown
  }
})
export default class App extends Vue {
  texts() {
    const texts = require.context(
      "!!raw-loader!../assets/text/",
      false,
      /\.md$/i
    );
    return texts.keys().map(x => texts(x));
  }

  metas() {
    const metas = require.context("../assets/text/", false, /\.json$/i);
    return metas.keys().map(x => metas(x));
  }
}
</script>

<style scoped lang="scss"></style>
