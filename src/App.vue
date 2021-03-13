<template>
  <div id="app">
    <b-container fluid>
      <b-row class="mb-5 mt-3" no-gutters>
        <b-col cols="1" class="pl-4" v-if="$route.name !== 'gallery'">
          <router-link tag="div" :to="{ name: 'gallery' }"
            ><span class="supportFont back large" v-html="'<'"></span>
          </router-link>
        </b-col>

        <b-col class="text-center">
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
        <b-col cols="1" v-if="$route.name !== 'gallery'"></b-col>
      </b-row>

      <router-view></router-view>
    </b-container>
    <div class=" text-center w-100 grey mb-3 small mt-5" style="bottom: 50px">
      Made with love (and
      <a
        class="footer text-decoration-none"
        href="https://vuejs.org/"
        target="_blank"
        >vue.js</a
      >) by me! ©2021
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ProjectCard from "./components/ProjectCard.vue";
import GroupTitle from "./components/GroupTitle.vue";
import Gallery from "./components/Gallery.vue";

@Component({
  components: {
    ProjectCard,
    GroupTitle,
    Gallery
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
  font-family: "serenity", Helvetica, Arial, sans-serif;
  font-size: 1.3rem;
  line-height: 1.4;
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

.back {
  color: cadetblue;

  &:hover {
    cursor: pointer;
    color: #212529;
  }
}

.footer {
  color: cadetblue;
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
