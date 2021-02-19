<template>
  <b-col cols="12" md="6" xl="4" class="my-3">
    <div
      class="p-3 text-center mx-auto shadow-sm projectCard h-100 "
      style="width:95%; display: grid;"
    >
      <img v-if="img" class="" :src="img" width="100%" />

      <a :href="link" target="_blank">
        <h5 class="mt-1">{{ name }}</h5>
      </a>
      <div class="mx-auto" style="max-width: 30ch;">{{ description }}</div>
    </div>
  </b-col>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ProjectCard extends Vue {
  @Prop() private img!: string;
  @Prop() private name!: string;
  @Prop() private link!: string;
  @Prop() private description!: string;
}
</script>

<style scoped lang="scss">
a {
  color: #dc3545 !important;
}

.projectCard {
  border-radius: 50rem;
  border: 0.5px solid #ddd;
}
</style>
