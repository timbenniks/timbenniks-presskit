<template>
  <section class="bg-grey py-8">
    <div class="max-w-[1440px] mx-auto px-8 md:p-0">
      <h3 class="text-3xl md:text-5xl font-bold uppercase leading-none mb-8">
        <span class="inline-block bg-black p-2">
          <span class="flowing-title inline">Media</span>
        </span>
        <br />
      </h3>

      <figure class="media-grid">
        <div class="media-1">
          <a
            href="https://res.cloudinary.com/dwfcofnrd/image/upload/Presskit/IMG_0144.jpg"
            target="_blank"
            rel="noopener"
          >
            <AtomsImage
              alt="Tim Benniks Portrait, Berlin 2022"
              :width="4640"
              :height="6960"
              public-id="Presskit/IMG_0144.jpg"
              :widths="[375, 440, 769]"
              loading="lazy"
              class="fancy-image"
            />
          </a>
        </div>
        <div class="media-2">
          <a
            href="https://res.cloudinary.com/dwfcofnrd/image/upload/Presskit/tim_oct_2021.jpg"
            target="_blank"
            rel="noopener"
          >
            <AtomsImage
              alt="Tim Benniks in his farm studio, 2021"
              :width="6016"
              :height="3384"
              public-id="Presskit/tim_oct_2021.jpg"
              :widths="[375, 440, 769]"
              loading="lazy"
              class="fancy-image"
            />
          </a>
        </div>
        <div class="media-3">
          <a
            href="https://res.cloudinary.com/dwfcofnrd/image/upload/Presskit/tim-2020-s.png"
            target="_blank"
            rel="noopener"
          >
            <AtomsImage
              alt="Tim Benniks in Paris 2020"
              :width="1920"
              :height="1080"
              public-id="Presskit/tim-2020-s.png"
              :widths="[375, 440, 769]"
              loading="lazy"
              class="fancy-image"
            />
          </a>
        </div>
      </figure>
    </div>
  </section>

  <AtomsImage
    alt="Tim Benniks on stage in 2020"
    :width="2028"
    :height="914"
    public-id="Presskit/IMG_3501.jpg"
    :widths="[375, 440, 769, 1280, 1440, 1600]"
    loading="lazy"
  />
</template>

<style lang="postcss">
.media-grid {
  @apply grid gap-8 grid-cols-1 md:grid-cols-[0.472fr_0.6fr] md:grid-rows-[1fr_1fr];
}

.media-1 {
  @media (min-width: 768px) {
    grid-area: 1/1/3/2;
  }
}

.media-2 {
  @media (min-width: 768px) {
    grid-area: 1/2/2/3;
  }
}

.media-3 {
  @media (min-width: 768px) {
    grid-area: 2/2/3/3;
  }
}
</style>
