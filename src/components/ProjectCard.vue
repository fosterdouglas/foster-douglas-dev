<template>
  <b-col cols="12" md="6" xl="4" class="p-3">
    <img class="projectCard" src="../assets/test.jpg" width="100%" />
    <h6 class="text-center mt-1">test</h6>
  </b-col>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ProjectCard extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped lang="scss">
.projectCard {
  border-radius: 20rem;
}
</style>
