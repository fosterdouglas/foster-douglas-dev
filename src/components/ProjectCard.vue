<template>
  <b-col cols="12" md="6" xl="4" class="my-3 projectContainer p-3">
    <a :href="link" :target="target" class="text-decoration-none projectAnchor">
      <img
        v-if="img"
        :src="require(`@/assets/images/` + img)"
        class="p-3 text-center mx-auto projectCard"
        style="display: grid; height: 10rem;"
      />

      <slot v-if="override" name="visual"></slot>

      <h4 class="text-center mt-3 bold">{{ name }}</h4>
      <div class="mx-auto text-center" style="max-width: 29ch;">
        {{ description }}
      </div>
    </a>
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
  @Prop() private target!: string;
  @Prop() private override!: boolean;
}
</script>

<style scoped lang="scss">
.projectContainer {
}

.projectAnchor {
  color: #111;

  &:hover {
    .projectCard {
      border: 0.5px solid #555;
      border-radius: 2rem;
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
      transition: border-color 0.6s, box-shadow 0.2s, border-radius 0.4s;
      //transition-timing-function: ease-in;
    }
  }
}

.projectCard {
  transition: border-color 2s, box-shadow 2s, border-radius 3s;
  transition-timing-function: ease-out;
  border-radius: 6rem;
  border: 0.5px solid #ddd;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  background: white;
}
</style>
