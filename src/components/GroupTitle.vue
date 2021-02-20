<template>
  <div class="ml-3">
    <span class="max highlightFont">/</span>
    <span class="supportFont large">{{ title }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class GroupTitle extends Vue {
  @Prop() private title!: string;
}
</script>

<style scoped lang="scss"></style>
