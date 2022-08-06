<script setup>
const { data: intro } = await useAsyncData("intro", () => {
  return queryContent("/intro").findOne();
});
</script>

<template>
  <ContentRenderer
    v-if="intro"
    :value="intro"
    class="max-w-[1440px] mx-auto px-8 lg:p-0 mb-12"
  />
</template>
