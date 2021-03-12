<template>
  <b-container fluid>
    <GroupTitle :title="'games'" />

    <b-row class="px-4 mb-5" no-gutters>
      <ProjectCard
        :active="isActive"
        @click="navigate"
        :link="href"
        :img="'project-gamelife.png'"
        :name="'Game/Life'"
        :description="
          'Recent game design thoughts, gameplay statistics, discussion, and other personal analysis on interactivity.'
        "
      />
      <router-link
        :to="{ name: 'indie-crusade' }"
        v-slot="{ navigate, isActive, href }"
      >
        <ProjectCard
          :active="isActive"
          @click="navigate"
          :link="href"
          :img="'project-placeholder.png'"
          :name="'Indie Crusade'"
          :description="
            'Discourse on indie game design and what I think defines the term &quot;Indie.&quot; Micro reviews under 2 minutes each.'
          "
        />
      </router-link>
      <ProjectCard
        :img="'project-satellite.png'"
        :name="'satellite in f# minor'"
        :link="'https://globalgamejam.org/2021/games/satellite-1'"
        :target="'_blank'"
        :description="
          'Explore a quiet galaxy in search of lost fragments from long-past humanity. Made for Global Game Jam 2021.'
        "
      />
      <ProjectCard
        :img="'project-placeholder.png'"
        :name="'Everyday Lemonade Games'"
        :link="'https://twitter.com/Everyday_Lemons'"
        :target="'_blank'"
        :description="
          'Some people making some refreshingly tangy games for Playdate someday. Currently dabbling in game jams.'
        "
      />
      <ProjectCard
        :img="'project-dgd.png'"
        :name="'1000 Daily Game Designs'"
        :link="'https://dailygamedesigns.com/'"
        :target="'_blank'"
        :description="
          '34 consecutive months of personal daily game design thoughts and postings. Active between 2015 and 2017.'
        "
      />
      <ProjectCard
        :img="'project-fuzz.png'"
        :name="'Fuzz'"
        :link="'https://everydaylemonade.itch.io/fuzz'"
        :target="'_blank'"
        :description="
          'Adventure into the life of a tiny Fuzz ball. First game project, made in early 2014. Pointlessly remade in 2020.'
        "
      />
    </b-row>

    <h1 id="design"></h1>
    <GroupTitle :title="'design'" />

    <b-row class="px-4 mb-5" no-gutters>
      <ProjectCard
        :img="'project-sandcastle.jpg'"
        :name="'Sandcastle Co'"
        :link="'http://sandcastle.co'"
        :target="'_blank'"
        :description="
          'Freelance design, founded in 2015. Focused on branding, web, and community design services.'
        "
      />
      <ProjectCard
        :img="'project-ebd.png'"
        :name="'E-By Design'"
        :link="'https://e-bydesign.ca'"
        :target="'_blank'"
        :description="
          'Long standing freelance client; working in UI design, UX research, product design, and frontend development.'
        "
      />
    </b-row>

    <GroupTitle :title="'coffee'" />

    <b-row class="px-4 mb-5" no-gutters>
      <ProjectCard
        :img="'project-cura.png'"
        :name="'Cura Coffeehouse'"
        :link="'https://www.instagram.com/curacoffeehouse/'"
        :target="'_blank'"
        :description="
          'Designed, built, and managed. The first specialty coffee house in Green Bay, WI. Operated from 2017 to 2020.'
        "
      />
      <ProjectCard
        :img="'project-bacc.png'"
        :name="'Bay Area Coffee Community'"
        :link="'https://www.instagram.com/curacoffeehouse/'"
        :target="'_blank'"
        :description="
          'Board member, monthly event planning, community engagement, and design. Active from 2018 to 2020.'
        "
      />
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ProjectCard from "./ProjectCard.vue";
import GroupTitle from "./GroupTitle.vue";

@Component({
  components: {
    ProjectCard,
    GroupTitle
  }
})
export default class App extends Vue {}
</script>

<style scoped lang="scss">
.container-fluid {
  padding: 0 !important;
}

//STYLES
.bold {
  font-weight: 700;
}

.grey {
  color: #495057;
}
</style>
