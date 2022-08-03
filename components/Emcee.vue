<template>
  <div class="max-w-[1440px] mx-auto px-8 md:p-0 my-8">
    <section class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-40">
      <article>
        <AtomsTitle
          class="text-3xl md:text-5xl font-bold uppercase leading-none mb-8"
          :lines="['Emcee']"
          as="h3"
        />
        <p class="text-xl mb-8 leading-relaxed">
          As Master of Ceremonies I tend to go in depth with the introduction
          and Q&A sessions of speakers. An emcee should really add value to a
          conference. Over the years I have done mainly virtual emcee gigs but
          in 2022 I have also done them at in-person conferences such as Vue.js
          Amsterdam.
        </p>

        <p class="text-xl mb-8 leading-relaxed">
          Next to emcee work I also do speakers interviews, which you can find
          <a
            href="https://timbenniks.dev/tags/Interview"
            target="_blank"
            rel="noopener"
            >here</a
          >, and I'm part of
          <a
            href="https://middleware.productions/"
            target="_blank"
            rel="noopener"
            >Middleware⚡️Productions</a
          >
          where we shoot vlogs that capture the vibe of tech events.
        </p>

        <AtomsTitle
          class="text-3xl md:text-5xl font-bold uppercase leading-none mb-4"
          :lines="['Links']"
          as="h3"
        />

        <ul class="inline-flex space-x-2">
          <li>
            <AtomsIcon icon="timbenniks" url="https://timbenniks.dev" />
          </li>
          <li>
            <AtomsIcon icon="twitter" url="https://twitter.com/timbenniks" />
          </li>
          <li>
            <AtomsIcon
              icon="linkedin"
              url="https://linkedin.com/in/timbenniks"
            />
          </li>
          <li>
            <AtomsIcon icon="youtube" url="https://youtube.com/timbenniks" />
          </li>
          <li>
            <AtomsIcon icon="github" url="https://github.com/timbenniks" />
          </li>
        </ul>
      </article>
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
