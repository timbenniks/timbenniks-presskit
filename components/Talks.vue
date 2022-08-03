<script setup>
const { data } = await useFetch(
  "https://timbenniks-compositions.vercel.app/api/talks"
);
</script>
<template>
  <div class="max-w-[1440px] mx-auto px-8 md:p-0 my-8">
    <AtomsTitle
      class="text-3xl md:text-5xl font-bold uppercase leading-none mb-8"
      :lines="['Talks']"
      as="h3"
    />

    <section v-if="data" class="grid grid-cols-1 md:grid-cols-3 gap-12">
      <Talk v-for="talk in data.items" :talk="talk" :key="talk.slug" />
    </section>
  </div>
</template>
