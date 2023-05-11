<template>
  <div class="col-12 col-sm-6 col-xl-4 my-3 p-2 user-select-none">
    <a :href="link" :target="target" class="text-decoration-none projectAnchor">
      <img
        v-if="img"
        :src="`./images/` + img"
        class="p-3 text-center mx-auto projectCard"
        style="display: grid; height: 10rem; width: 10rem"
      />

      <h4 class="text-center mt-3 bold">{{ name }}</h4>
      <div class="mx-auto text-center" style="max-width: 29ch">
        {{ description }}

        <slot name="visual" />
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
// PROPS //
const props = defineProps<{
  img: string;
  name: string;
  link?: string;
  description?: string;
  target?: string;
  override?: boolean;
}>();
</script>

<style scoped lang="scss">
.projectAnchor {
  color: #111;

  &:hover {
    .projectCard {
      // border: 0.5px solid #555;
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
  // border: 0.5px solid #ddd;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  background: white;
}
</style>
