<script setup>
const limit = ref(10);

const {
  data: talks,
  pending,
  error,
  refresh,
} = await useAsyncData("talks", () =>
  $fetch(
    `https://timbenniks-compositions.vercel.app/api/talks?limit=${limit.value}`
  )
);

function seeAll() {
  limit.value = 200;
  refresh();
}
</script>
<template>
  <div class="max-w-[1440px] mx-auto px-8 md:p-0 my-8">
    <ContentLeTitle
      class="text-3xl md:text-5xl font-bold uppercase leading-none mb-8"
      lines="Talks"
      as="h3"
    />

    <p class="mb-8 text-xl">
      <template v-if="limit === 10">
        Showing the 10 latest talks.
        <button class="cta fancy-image" @click="seeAll">Load all</button>
      </template>
      <template v-if="pending">Loading all talks...</template>
      <template v-if="limit !== 10 && !pending">
        Showing {{ talks.items.length }} talks</template
      >
    </p>

    <section v-if="talks" class="grid grid-cols-1 md:grid-cols-3 gap-12">
      <Talk v-for="talk in talks.items" :talk="talk" :key="talk.slug" />
    </section>
  </div>
</template>
