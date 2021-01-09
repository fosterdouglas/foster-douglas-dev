<template>
  <b-col cols="12" md="6" xl="4" class="p-3">
    <img v-if="img" class="projectCard" :src="img" width="100%" />
    <h6 class="text-center mt-1">{{ description }}</h6>
  </b-col>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ProjectCard extends Vue {
  @Prop() private img!: string;
  @Prop() private description!: string;
}
</script>

<style scoped lang="scss">
.projectCard {
  border-radius: 20rem;
}
</style>
