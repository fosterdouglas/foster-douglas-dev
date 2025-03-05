<template>
  <div :id="title" class="container-fluid">
    <div class="groupTitle row text-start g-0" :class="color ? 'hoverColor' : ''">
      <div class="col-auto pt-md-2">
        <span class="max highlightFont slash user-select-none">/ </span>
      </div>
      <div class="col-6 col-lg-auto ">
        <span
          class="supportFont large pe-0 pe-md-5 user-select-none"
          :class="color ? `text-${color}` : ''"
          >{{ title }}</span
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// PROPS //
const props = defineProps<{
  title?: string;
  color?: string;
}>();
</script>

<style scoped lang="scss">
.groupTitle {
  cursor: default;
}

.slash {
  vertical-align: text-bottom;
  color: #999;
  
}
.hoverColor {
  &:hover {
    .supportFont {
      color: var(--bs-dark) !important;
    }
  }
}
</style>
