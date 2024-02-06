<template>
  <main>
    <div id="app" class="container-fluid shadow-sm position-relative mb-5">
      <div class="row mb-5 header g-0 justify-content-between">
        <div class="col-1" v-if="$route.name !== 'index'">
          <NuxtLink class="text-decoration-none" tag="div" :to="'/'">
            <span class="supportFont link large" v-html="'<'"></span>
          </NuxtLink>
        </div>
        <!-- Bio for larger screens -->
        <template v-else>
          <div class="d-none d-md-block col">
            <Bio />
          </div>

          <div class="col-auto col-md-0"></div>
        </template>

        <div class="col-auto g-0 user-select-none">
          <Name />
        </div>

        <!-- Bio for smaller screens -->
        <div class="ms-auto col-10 d-md-none text-end mt-2">
          <Bio />
        </div>
      </div>

      <Gallery v-if="$route.name === 'index'" />
      <NuxtPage />

      <div class="pb-1 mt-5">
        <Footer />
      </div>
    </div>
  </main>
  <div
    class="position-absolute"
    style="left: calc(50vw - 25px)"
    v-if="$route.name !== 'index'"
  >
    <NuxtLink class="text-decoration-none" tag="div" :to="'/'">
      <span class="supportFont link large" v-html="'<'"></span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
//
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
  font-size: 1.4rem;
}

hr {
  margin: 2rem 0;
  max-width: 500px;
}

//rename this
.link {
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

  @media (min-width: 768px) {
    font-size: 8rem !important;
  }
}

.container-fluid {
  padding: 0 !important;
}

.bold {
  font-weight: 700;
}

.grey {
  color: #495057;
}
</style>
