<template>
  <div class="container-fluid">
    <GroupTitle :title="'design'" />

    <div class="row px-4 py-4 mb-5">
      <Project
        :img="'project-surgeroi.png'"
        :name="'SurgeROI'"
        :link="'https://surgeroi.io'"
        :target="'_blank'"
        :description="'Founding Partner – product & UX design, software development, graphic design, & branding.'"
      />
      <Project
        :img="'project-sandcastle.jpg'"
        :name="'Sandcastle Creative'"
        :link="'http://sandcastle.co'"
        :target="'_blank'"
        :description="'Founder – freelance design since 2015; focused on branding, creativity, and community design services.'"
      />
      <Project
        :img="'project-ebd.png'"
        :name="'E-By Design'"
        :link="'https://e-bydesign.ca'"
        :target="'_blank'"
        :description="'Freelance collaboration – UI design, UX research, product design, and front end software development.'"
      />
    </div>

    <GroupTitle :title="'write'" />

    <div class="row px-4 py-4 mb-5">
      <Project
        :img="'project-placeholder.png'"
        :name="'The Chameleon & The Rainbow-Shell Turtle'"
        :description="'Children\'s story on the adventures of looking inward, learning to Love, and finding forgiveness – written in 2023.'"
        :link="'http://chameleon-and-turtle.com'"
        :target="'_blank'"
      />
    </div>

    <GroupTitle :title="'play'" />

    <div class="row px-4 py-4 mb-5">
      <!-- <Project
        :img="'project-gamelife.png'"
        :name="'Game/Life'"
        :description="
          'Recent game design thoughts, gameplay statistics, discussion, and other personal analysis on interactivity.'
        "
      />
      <router-link
        :to="{ name: 'indie-crusade' }"
        v-slot="{ navigate, isActive, href }"
        custom
      >
        <Project
          :active="isActive"
          @click.native="navigate"
          :link="href"
          :img="'project-placeholder.png'"
          :name="'Indie Crusade'"
          :description="
            'Discourse on indie game design and what I think defines the term &quot;Indie.&quot; Micro reviews under 2 minutes each.'
          "
        />
      </router-link> -->
      <Project
        :img="'project-biotopico.png'"
        :name="'Bíotopíco'"
        :link="'https://everydaylemonade.itch.io/biotopico'"
        :target="'_blank'"
        :description="'Mindfulness game, breathe & plant real trees – Silver award ($10k) for DeepWell Mental Health competition.'"
      />
      <Project
        :img="'project-everyday.png'"
        :name="'Everyday Lemonade'"
        :link="'https://everydaylemonade.itch.io/'"
        :target="'_blank'"
      >
        <template #visual>
          <span
            >Refreshingly tangy experiences – focused on tiny Playdate games.
            <button
              class="link border-0 bg-transparent p-0"
              target="'_blank'"
              href="https://twitter.com/Everyday_Lemons"
            >
              @Everyday_Lemons
            </button>
          </span>
        </template>
      </Project>
      <Project
        :img="'project-dgd.png'"
        :name="'1000 Game Designs'"
        :link="'https://dailygamedesigns.com/'"
        :target="'_blank'"
        :description="'34 consecutive months of daily game design thoughts and postings, throughout 2015 until 2017.'"
      />
      <Project
        :img="'project-fuzz.png'"
        :name="'Fuzz'"
        :link="'https://everydaylemonade.itch.io/fuzz'"
        :target="'_blank'"
        :description="'Adventure into the life of a tiny Fuzz ball – first game project, made in  2014; remade for iOS in 2020.'"
      />
    </div>

    <GroupTitle :title="'give'" />

    <div class="row px-4 py-4 mb-5">
      <Project
        :img="'project-cura.png'"
        :name="'Cura Coffeehouse'"
        :link="'https://www.instagram.com/curacoffeehouse/'"
        :target="'_blank'"
        :description="'Designed, built, and managed – first specialty coffee house in Green Bay, WI; operated from 2017 to 2020.'"
      />
      <Project
        :img="'project-bacc.png'"
        :name="'Bay Area Coffee'"
        :link="'https://www.instagram.com/hellobacc/'"
        :target="'_blank'"
        :description="'Board member, monthly event planning, community engagement, and design; active from 2018 to 2020.'"
      />
    </div>

    <GroupTitle :title="'make'" />

    <div class="row px-4 py-4 mb-5">
      <Project
        :img="'project-enchantress.png'"
        :name="'Enchantress'"
        :link="'https://vimeo.com/857298204'"
        :target="'_blank'"
        :description="'Music, sound design, & foley – independent animation collaboration finished in August 2023.'"
      />
      <Project
        :img="'project-quarterclock.png'"
        :name="'Quarter Clock'"
        :link="'https://github.com/fosterdouglas/quarter-clock'"
        :target="'_blank'"
        :description="'First Maker project – unique redesign for a simple digital clock using custom Python code & a Raspberry Pi Pico.'"
      />
    </div>

    <GroupTitle
      :title="'...'"
      :color="archiveShowing ? 'dark' : 'secondary'"
      type="button"
      @click="archiveShowing = !archiveShowing"
    />

    <div v-if="archiveShowing" class="row px-4 py-4 mb-5">
      <Project
        :img="'project-gomy2021.png'"
        :name="'GOMY 2021'"
        :description="'Games of my year; blurbs on some 2021 experiences, including notable indies, co-op, and most addicting.'"
        type="button"
        @click="navigateTo('gomy-2021')"
      />
      <Project
        :img="'project-placeholder.png'"
        :name="'Game/Life (WIP)'"
        :description="'Recent game design thoughts, statistics tracking, discussion, and other personal analysis on interactivity.'"
      />
      <Project
        :img="'project-placeholder.png'"
        :name="'Crusade (WIP)'"
        :description="'Video discourse on indie game design discussing the &quot;Indie games&quot; concept; 2 minute micro-reviews.'"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// VARS //
const archiveShowing = ref<boolean>(false);
</script>

<style scoped lang="scss">
//
</style>
