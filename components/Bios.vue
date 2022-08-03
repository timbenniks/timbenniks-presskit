<template>
  <div class="max-w-[1440px] mx-auto px-8 md:p-0">
    <section class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-40">
      <article>
        <AtomsTitle
          class="text-3xl md:text-5xl font-bold uppercase leading-none mb-8"
          :lines="['super official', 'third person bio']"
          as="h2"
        />
        <p class="text-xl mb-8 leading-relaxed">
          Tim has worked at different agencies in Amsterdam and Paris over the
          past fifteen years. He has been lucky enough to have had global
          clients like Nike, Heineken, Google, Tommy Hilfiger, EA Games, Chanel,
          Proctor & Gamble, Louis Vuitton and Hermès.
        </p>

        <p class="text-xl mb-8 leading-relaxed">
          Nowadays, Tim is Principal Developer Advocate at Uniform where he
          works on developer relations, community building and content creation.
          Next to working at Uniform, Tim is also active in the developer
          community by speaking at conferences and creating YouTube videos. He
          collaborates with startups like Cloudinary, Prismic, Zeplin, NuxtJS
          and he is a part of the MACH Alliance Tech Council. It's all about
          quality, community and building fancy websites.
        </p>

        <p class="text-xl mb-8 leading-relaxed">
          A demanding job needs balancing. Tim plays guitar and loves family
          time with his wife, cats and a two little corgis called Princess
          Nugget and Scarlet.
        </p>
      </article>
      <article>
        <AtomsTitle
          class="text-3xl md:text-5xl font-bold uppercase leading-none mb-8"
          :lines="['super official', 'third person bio,', 'but shorter']"
          as="h3"
        />

        <p class="text-xl mb-8 leading-relaxed">
          Tim is Principal Developer Advocate at Uniform where he works on
          developer relations, community building and content creation. Next to
          working at Uniform Tim, is also active in the developer community by
          speaking at conferences and creating YouTube videos. He collaborates
          with startups like Cloudinary, Prismic, Zeplin, NuxtJS and he is a
          part of the MACH Alliance Tech Council. It's all about quality,
          community and building fancy websites.
        </p>
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
