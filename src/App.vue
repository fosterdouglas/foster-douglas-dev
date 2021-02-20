<template>
  <div id="app">
    <b-container fluid>
      <b-row class="mb-3" no-gutters>
        <b-col class="pt-3 text-center">
          <div class="highlightFont large mb-4 mb-md-2">Foster Douglas</div>
          <!-- <span
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
          > -->
        </b-col>
      </b-row>

      <GroupTitle :title="'games'" />

      <b-row class="px-4 mb-5" no-gutters>
        <ProjectCard
          :img="'project-dgd.png'"
          :name="'1000 Daily Game Designs'"
          :link="'https://dailygamedesigns.com/'"
          :description="
            '34 consecutive months of personal daily game design thoughts and postings. Active between 2015 and 2017.'
          "
        />
        <ProjectCard
          :img="'project-satellite.png'"
          :name="'satellite in f# minor'"
          :link="'https://globalgamejam.org/2021/games/satellite-1'"
          :description="
            'Explore a quiet galaxy in search of lost fragments from long-past humanity. Made for Global Game Jam 2021.'
          "
        />
        <ProjectCard
          :img="'project-placeholder.png'"
          :name="'Everyday Lemonade Games'"
          :link="'https://twitter.com/Everyday_Lemons'"
          :description="
            'Some people making some refreshingly tangy games for Playdate someday. Currently dabbling in game jams.'
          "
        />
        <ProjectCard
          :img="'project-fuzz.png'"
          :name="'Fuzz'"
          :link="'https://everydaylemonade.itch.io/fuzz'"
          :description="
            'Adventure into the life of a tiny Fuzz. First game project, from early 2014. Pointlessly remade in 2020.'
          "
        />
      </b-row>

      <GroupTitle :title="'design'" />

      <b-row class="px-4 mb-5" no-gutters>
        <ProjectCard
          :img="'project-placeholder.png'"
          :name="'Sandcastle Co'"
          :link="'http://sandcastle.co'"
          :description="
            'Freelance design, founded in 2015. Focuses on web and community services.'
          "
        />
      </b-row>

      <GroupTitle :title="'coffee'" />

      <b-row class="px-4 mb-5" no-gutters>
        <ProjectCard
          :img="'project-placeholder.png'"
          :name="'Cura Coffeehouse'"
          :link="'https://www.instagram.com/curacoffeehouse/'"
          :description="
            'Designed and built as the first specialty coffee house in Green Bay, Wisconsin. Operated from 2017 to 2020.'
          "
        />
      </b-row>
    </b-container>
    <!-- <div class="position-absolute text-center w-100 grey" style="bottom: 30px">
      Under construction! - Feb 19th 2021
    </div> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ProjectCard from "./components/ProjectCard.vue";
import GroupTitle from "./components/GroupTitle.vue";

@Component({
  components: {
    ProjectCard,
    GroupTitle
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import url("https://use.typekit.net/hey1ekp.css");
body {
  max-width: 1200px;
  margin: 0 auto !important;
  float: none !important;
  background-color: #f9f9f9 !important;
}

#app {
  font-family: "bitter", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.highlightFont {
  font-family: "rig-solid-bold-halftone", sans-serif;
  font-weight: 700;
  font-style: normal;
}

.supportFont {
  font-family: "rig-solid-bold-reverse", sans-serif;
  font-weight: 700;
  font-style: normal;
  //color: #ff4e86;
}

.large {
  font-size: 4rem !important;
  line-height: 0.9;
  vertical-align: super;

  @media (min-width: 768px) {
    font-size: 6rem !important;
    vertical-align: unset;
  }
}

.max {
  font-size: 6rem !important;
  line-height: 0;
  //vertical-align: sub;

  @media (min-width: 768px) {
    font-size: 8rem !important;
  }
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
