<template>
  <div id="app">
    <b-container fluid>
      <b-row class="mb-3" no-gutters>
        <b-col class="pt-3 text-center">
          <h4 class="bold grey">Foster Douglas</h4>
          <span
            ><a
              style="color: #333 !important;"
              href="mailto:foster@sandcastle.co"
              >Contact</a
            ></span
          >
          &nbsp; /
          <span
            ><a
              href="https://twitter.com/_fosterdouglas"
              target="_blank"
              style="color: #333 !important;"
              >Twitter</a
            ></span
          >
        </b-col>
      </b-row>

      <h4 class="px-5 mb-3 py-2 bold grey bg-light">Games</h4>
      <b-row class="px-4" no-gutters>
        <ProjectCard
          :name="'1000 Daily Game Designs'"
          :link="'https://dailygamedesigns.com/'"
          :description="
            '3 years straight of personal daily game design thoughts and posts.'
          "
        />
        <ProjectCard
          :name="'satellite in f# minor'"
          :link="'https://globalgamejam.org/2021/games/satellite-1'"
          :description="
            'Explore a quiet galaxy in search of lost fragments from long-past humanity. Made for Global Game Jam 2021.'
          "
        />
      </b-row>
    </b-container>
    <div class="position-absolute text-center w-100 grey" style="bottom: 30px">
      Under construction! - Feb 19th 2021
    </div>
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
