<script setup>
const { data: longBio } = await useAsyncData("long-bio", () => {
  return queryContent("/long-bio").findOne();
});

const { data: shortBio } = await useAsyncData("short-bio", () => {
  return queryContent("/short-bio").findOne();
});
</script>

<template>
  <div class="max-w-[1440px] mx-auto px-8 md:p-0">
    <section class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-40">
      <article v-if="longBio">
        <ContentRenderer :value="longBio" />
      </article>
      <article v-if="shortBio">
        <ContentRenderer :value="shortBio" />
      </article>
    </section>
  </div>

  <AtomsImage
    alt="Tim Benniks on stage in 2020"
    :width="1280"
    :height="492"
    public-id="Presskit/IMG_3565.jpg"
    :widths="[375, 440, 769, 1100, 1280]"
    loading="lazy"
  />
</template>
