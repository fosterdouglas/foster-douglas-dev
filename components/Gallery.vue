<template>
  <div class="container-fluid">
    <GroupTitle :title="'write'" />

    <div class="row px-4 py-4 mb-5">
      <Project
        :img="'project-dispatches.png'"
        :name="'Dispatches'"
        :description="'Writer and contributor to the upcoming periodical release.'"
        :link="'https://dispatchesmag.com/'"
        :target="'_blank'"
      />

      <Project
        :img="'project-placeholder.png'"
        :name="'Two People Talking'"
        :description="'Short plays of... two people talking. Published once per week.'"
      />

      <Project
        :img="'project-placeholder.png'"
        :name="'Outskirts of Delusion'"
        :description="'One-act play about delusion and love at a \'cursed\' bus stop—coming soon.'"
      />

      <Project
        :img="'project-placeholder.png'"
        :name="'House in the Trees'"
        :description="'Children\'s novel on Love, forgiveness, and letting go—coming in 2024.'"
        :link="'http://house-in-the-trees.com'"
        :target="'_blank'"
      />
    </div>

    <GroupTitle :title="'design'" />

    <div class="row px-4 py-4 mb-5">
      <Project
        :img="'project-svs.png'"
        :name="'Silicon Valley Shakespeare'"
        :link="'https://www.svshakespeare.org/2024'"
        :target="'_blank'"
        :description="'Creative staff for 2024 summer season—sound design, tech, and production.'"
      />

      <Project
        :img="'project-surgeroi.png'"
        :name="'SurgeROI'"
        :link="'https://surgeroi.io'"
        :target="'_blank'"
        :description="'Co-founder, Design Director—UX, product design, development, & brand.'"
      />
      <Project
        :img="'project-sandcastle.jpg'"
        :name="'Sandcastle Creative'"
        :link="'http://sandcastle.co'"
        :target="'_blank'"
        :description="'Founder, 2015—freelance designs, visual & community services.'"
      />
      <Project
        :img="'project-ebd.png'"
        :name="'E-By Design'"
        :link="'https://e-bydesign.ca'"
        :target="'_blank'"
        :description="'Freelance—UI, UX research, product design, and software development.'"
      />
    </div>

    <GroupTitle :title="'give'" />

    <div class="row px-4 py-4 mb-5">
      <Project
        :img="'project-cura.png'"
        :name="'Cura Coffeehouse'"
        :link="'https://www.instagram.com/curacoffeehouse/'"
        :target="'_blank'"
        :description="'Designed, built & managed—first specialty coffee shop in Green Bay, WI.'"
      />
      <Project
        :img="'project-bacc.png'"
        :name="'Bay Area Coffee'"
        :link="'https://www.instagram.com/hellobacc/'"
        :target="'_blank'"
        :description="'Board member, event coordinator, community engagement & design.'"
      />
    </div>

    <GroupTitle :title="'make'" />

    <div class="row px-4 py-4 mb-5">
      <Project
        :img="'project-biotopico.png'"
        :name="'Bíotopíco'"
        :link="'https://everydaylemonade.itch.io/biotopico'"
        :target="'_blank'"
        :description="'Mindfulness game—Silver award ($10k) for Mental Health competition.'"
      />
      <Project
        :img="'project-everyday.png'"
        :name="'Everyday Lemonade'"
        :link="'https://everydaylemonade.itch.io/'"
        :target="'_blank'"
      >
        <template #visual>
          <span
            >Refreshingly tangy Playdate experiences.
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
        :description="'34 months of daily game design thoughts, throughout 2015 to 2017.'"
      />

      <Project
        :img="'project-enchantress.png'"
        :name="'Enchantress'"
        :link="'https://vimeo.com/857298204'"
        :target="'_blank'"
        :description="'Animation collaboration—music composition, sound design & foley.'"
      />

      <Project
        :img="'project-fuzz.png'"
        :name="'Fuzz'"
        :link="'https://everydaylemonade.itch.io/fuzz'"
        :target="'_blank'"
        :description="'Adventure into the life of a tiny Fuzz—Flash game, remade for iOS in 2020.'"
      />

      <Project
        :img="'project-quarterclock.png'"
        :name="'Quarter Clock'"
        :link="'https://github.com/fosterdouglas/quarter-clock'"
        :target="'_blank'"
        :description="'Custom redesign for a simple digital clock using Raspberry Pi Pico.'"
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
