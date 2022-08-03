<template>
  <section class="relative aspect-[1512/872] mb-6">
    <AtomsImage
      class="md:absolute"
      alt="Tim Benniks in Amsterdam 2019"
      :width="1512"
      :height="872"
      public-id="Presskit/FDLC2019_462.jpg"
      :widths="[375, 440, 769, 1100, 1340, 1512, 2000, 3000]"
      loading="eager"
    />

    <a
      class="absolute top-4 md:top-8 left-4 md:left-10"
      href="https://timbenniks.dev"
      >timbenniks.dev</a
    >
    <AtomsTitle
      class="absolute bottom-7 md:bottom-14 left-4 md:left-10 text-3xl md:text-8xl font-bold uppercase leading-none md:leading-[5rem]"
      :lines="['Tim Benniks', 'Presskit']"
      as="h1"
    />
  </section>
</template>
