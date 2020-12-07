<template>
  <b-container fluid>
    <b-row no-gutters>
      <b-col cols="12" sm="6" md="4" lg="3" v-for="game in 4000" :key="game">
        <img src="../assets/test.jpg" width="100%" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class GameCard extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped lang="scss"></style>
