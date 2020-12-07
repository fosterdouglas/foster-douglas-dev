<template>
  <div id="app">
    <GameCard />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import GameCard from "./components/GameCard.vue";

@Component({
  components: {
    GameCard
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

//BOOTSTRAP OVERRIDES
.container-fluid {
  padding: 0 !important;
}
</style>
