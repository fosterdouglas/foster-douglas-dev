<template>
  <b-container fluid>
    <GroupTitle :title="'indie crusade'" />

    <!-- <VueMarkdown>{{ this.source }}</VueMarkdown> -->
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import GroupTitle from "./GroupTitle.vue";

import VueMarkdown from "vue-markdown";
//import text from "raw-loader!../assets/text/test.md";
//import * as Items from "raw-loader!../assets/text/";

@Component({
  components: {
    GroupTitle,
    VueMarkdown
  }
})
export default class App extends Vue {
  //source = Items[0];
  //source = text;
}
</script>

<style scoped lang="scss"></style>
