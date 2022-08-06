<script setup>
const { data: emcee } = await useAsyncData("emcee", () => {
  return queryContent("/emcee").findOne();
});
</script>

<template>
  <div class="max-w-[1440px] mx-auto px-8 md:p-0 my-8">
    <section class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-40">
      <ContentRenderer v-if="emcee" :value="emcee" tag="article" />

      <figure>
        <AtomsImage
          alt="Tim Benniks on stage in 2022"
          :width="1119"
          :height="1963"
          public-id="Presskit/IMG_1020_fj7nsa.jpg"
          :widths="[375, 440, 769, 1100, 1280]"
          loading="lazy"
          class="fancy-image"
        />
      </figure>
    </section>
  </div>
</template>
