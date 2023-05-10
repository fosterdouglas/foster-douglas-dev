<template>
  <main>
    <div id="app" class="container-fluid shadow-sm position-relative mb-5">
      <div class="row mb-5 header g-0">
        <div class="col-1" v-if="$route.name !== 'index-gallery'">
          <NuxtLink class="text-decoration-none" tag="div" :to="'/'">
            <span class="supportFont back large" v-html="'<'"></span>
          </NuxtLink>
        </div>
        <div v-else class="col-1"></div>

        <div class="col-auto ms-auto g-0">
          <span class="name">
            <div class="col-auto ms-auto">
              <div class="large nameText text-end ps-5 pe-sm-2 pe-md-0">
                Foster
              </div>
            </div>
            <div class="col-auto ms-auto ms-lg-0">
              <div class="large nameText ps-md-4 text-end">Douglas</div>
            </div>
          </span>
        </div>
      </div>

      <NuxtPage />

      <div class="text-center w-100 pb-1 mt-5 writingFont" style="bottom: 50px">
        Made with love (and Nuxt3) by me! ©2023
        <br />
        <a
          class="back"
          href="https://twitter.com/_fosterdouglas"
          target="_blank"
          >twitter
        </a>
        /
        <a class="back" href="https://sandcastle.co" target="_blank"
          >sandcastle.co
        </a>
        /
        <a
          class="back"
          href="https://www.linkedin.com/in/foster-douglas/"
          target="_blank"
          >linkedin
        </a>
      </div>
    </div>
  </main>
  <div
    class="position-absolute"
    style="left: calc(50vw - 25px)"
    v-if="$route.name !== 'index-gallery'"
  >
    <NuxtLink class="text-decoration-none" tag="div" :to="'/'">
      <span class="supportFont back large" v-html="'<'"></span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
// VARS //
const route = useRoute();

// HOOKS //
onMounted(() => {
  if (route.name === "index") {
    navigateTo("/gallery");
  }
});

onUpdated(() => {
  if (route.name === "index") {
    navigateTo("/gallery");
  }
});
</script>

<style lang="scss">
#app {
  font-family: new-kansas, Helvetica, Arial, sans-serif;
  font-weight: 100;
  font-size: 1.1rem;
  line-height: 1.4;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 2rem 3rem !important;
  border-radius: 1rem;

  @media (min-width: 1200px) {
    margin: 2rem 0;
    padding: 3rem 3rem 1rem 3rem !important;
  }
}

.highlightFont {
  font-family: rig-solid-bold-halftone, sans-serif;
  // font-weight: 700;
  font-style: normal;
}

.supportFont {
  font-family: rig-solid-bold-reverse, sans-serif;
  // font-weight: 700;
  font-style: normal;
  color: #212529;
}

.writingFont {
  font-family: serenity, Helvetica, Arial, sans-serif;
  font-weight: 300;
  font-size: 1.05rem;
}

h1 {
  font-weight: 500;
}

h2 {
  font-weight: 300;
  margin-bottom: 1.5rem;

  mark {
    background-color: rgba(95, 158, 160, 0.15);
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
  }
}

h4 {
  margin-top: 2.5rem;
  margin-bottom: 0;
}

hr {
  margin: 2rem 0;
  max-width: 500px;
}

//rename this
.back {
  color: cadetblue;
  font-weight: 500;

  &:hover {
    cursor: pointer;
    color: #1c97ca;
  }
}

.header {
  font-family: rig-solid-bold-halftone, sans-serif;
  font-weight: 100;

  .name:hover {
    .nameText {
      background-size: 200%;
      background-image: linear-gradient(45deg, cadetblue, #1c97ca);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      cursor: pointer;
      font-family: rig-solid-bold-reverse, sans-serif;
      //transition: background-size 0.7s ease-in-out;
    }
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
    font-size: 4.75rem !important;
    vertical-align: unset;
  }
}

.max {
  font-size: 5.5rem !important;
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
