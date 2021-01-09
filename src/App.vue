<template>
  <div id="app">
    <b-container fluid>
      <b-row no-gutters>
        <b-col class="pt-3 text-center">
          <h4 class="bold grey">Foster Douglas</h4>
        </b-col>
      </b-row>
      <b-row no-gutters>
        <ProjectCard v-for="project in 6" :key="project" />
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ProjectCard from "./components/ProjectCard.vue";

@Component({
  components: {
    ProjectCard
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import url("https://use.typekit.net/hey1ekp.css");

#app {
  font-family: "bitter", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

//BOOTSTRAP OVERRIDES
$white: #fff !default;
$gray-100: #f8f9fa !default;
$gray-200: #e9ecef !default;
$gray-300: #dee2e6 !default;
$gray-400: #ced4da !default;
$gray-500: #adb5bd !default;
$gray-600: #6c757d !default;
$gray-700: #495057 !default;
$gray-800: #343a40 !default;
$gray-900: #212529 !default;
$black: #000 !default;

.container-fluid {
  padding: 0 !important;
}

//STYLES
.bold {
  font-weight: 700;
}

.grey {
  color: $gray-700;
}
</style>
