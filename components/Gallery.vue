<template>
  <div class="container-fluid">
    <GroupTitle :title="'design'" />

    <div class="row px-4 py-4 mb-5">
      <Project
        :img="'project-surgeroi.png'"
        :name="'SurgeROI'"
        :link="'https://surgeroi.site'"
        :target="'_blank'"
        :description="'Co-founder, design director—UX, product design, dev, and branding.'"
      />
      <Project
        :img="'project-sandcastle.jpg'"
        :name="'Sandcastle Creative'"
        :link="'http://sandcastle.co'"
        :target="'_blank'"
        :description="'Founder, creative–graphic design, web, and community services since 2015.'"
      />
      <Project
        :img="'project-ebd.png'"
        :name="'E-By Design'"
        :link="'https://e-bydesign.ca'"
        :target="'_blank'"
        :description="'Designer—UI, UX research, product design, and software development.'"
      />
    </div>

    <GroupTitle :title="'produce'" />
    <div class="row px-4 py-4 mb-5">
      <Project
        :img="'project-sex-camp-rock-n-roll.png'"
        :link="'https://www.instagram.com/beltingdowntheoctave/'"
        :name="'Sex, Camp, Rock \'N Roll'"
        :target="'_blank'"
        :description="'Producer, designer, tech director–a fabulous international cabaret fantasy.'"
      />

      <Project
        :img="'project-svs.png'"
        :name="'SV Shakespeare'"
        :link="'https://www.svshakespeare.org/2024'"
        :target="'_blank'"
        :description="'Sound designer, score composer, stage manager, tech, and production.'"
      />

      <Project
        :img="'project-death-becomes-us.png'"
        :link="'https://www.hannahwhittingham.com/death-becomes-us'"
        :name="'Death Becomes Us'"
        :description="'Production support, tech support.'"
      />

      <Project
        :img="'project-tales-of-ancient-vietnam.png'"
        :name="'Tales of Ancient Vietnam'"
        :description="'Production, script editor, design–world premiere children\'s play.'"
      />

      <Project
        :img="'project-last-west.png'"
        :link="'https://www.tess-taylor.com/last-west'"
        :name="'Last West'"
        :target="'_blank'"
        :description="'Producer–narrative exibit at Sonoma Valley Museum of Art, Fall 2025.'"
      />
    </div>

    <GroupTitle :title="'write'" />
    <div class="row px-4 py-4 mb-5">
      <Project
        :img="'project-dispatches.png'"
        :name="'Dispatches'"
        :description="'Writer and contributor for content in 2025; web designer and developer.'"
        :link="'https://dispatchesmag.com/'"
        :target="'_blank'"
      />

      <Project
        :img="'project-house-in-the-trees.png'"
        :name="'House in the Trees'"
        :description="'Writer–children\'s novel on love, forgiveness, and letting go. 2024.'"
        :link="'http://house-in-the-trees.com'"
        :target="'_blank'"
      />

      <Project
        :img="'project-delusional.png'"
        :link="'./files/delusional-draft03.pdf'"
        :target="'_blank'"
        :name="'Delusional'"
        :description="'Playwright–fantastical play on twins, burdens of family, & delusions of love.'"
      />
    </div>

    <GroupTitle :title="'sip'" />
    <div class="row px-4 py-4 mb-5">
      <Project
        :img="'project-cura.png'"
        :name="'Cura Coffeehouse'"
        :link="'https://www.instagram.com/curacoffeehouse/'"
        :target="'_blank'"
        :description="'Designer, builder, GM—first specialty coffee shop in Green Bay, WI.'"
      />

      <Project
        :img="'project-cafen.png'"
        :name="'cafēn.'"
        :link="'https://www.instagram.com/cafenspecialitycoffee/'"
        :target="'_blank'"
        :description="'Lead designer for brand, packaging, logo, colour, and print materials.'"
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
        :img="'project-quarterclock.png'"
        :name="'Quarter Clock'"
        :link="'https://github.com/fosterdouglas/quarter-clock'"
        :target="'_blank'"
        :description="'Custom redesign concept for a simple digital clock using Raspberry Pi Pico.'"
      />

      <Project
        :img="'project-two-people-talking.png'"
        :name="'Two People Talking'"
        :description="'Brief written explorations of... two people talking. Publishing in 2025.'"
        :link="'https://two-people-talking.ghost.io'"
        :target="'_blank'"
      />
    </div>

    <GroupTitle
      :title="'...ETC'"
      :color="archiveShowing ? 'dark' : 'secondary'"
      type="button"
      @click="archiveShowing = !archiveShowing"
    />

    <div v-if="archiveShowing" class="row px-4 py-4 mb-5">
      <Project
        :img="'project-fuzz.png'"
        :name="'Fuzz'"
        :link="'https://everydaylemonade.itch.io/fuzz'"
        :target="'_blank'"
        :description="'Adventure into the life of a tiny Fuzz—Flash game, remade for iOS in 2020.'"
      />

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
