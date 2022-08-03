<template>
  <section class="bg-grey py-8">
    <div class="max-w-[1440px] mx-auto px-8 md:p-0">
      <AtomsTitle
        class="text-3xl md:text-5xl font-bold uppercase leading-none mb-8"
        :lines="['Details']"
        as="h3"
      />
      <ul class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <li>
          <dl>
            <dt
              class="bg-black text-2xl font-bold text-white inline-block py-1 px-2 mb-2"
            >
              Name
            </dt>
            <dd class="text-xl">Tim Benniks</dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt
              class="bg-black text-2xl font-bold text-white inline-block py-1 px-2 mb-2"
            >
              Company
            </dt>
            <dd class="text-xl">
              <a href="https://uniform.dev" target="_blank" rel="noopener"
                >Uniform</a
              >
            </dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt
              class="bg-black text-2xl font-bold text-white inline-block py-1 px-2 mb-2"
            >
              Title
            </dt>
            <dd class="text-xl">Principal Developer Advocate</dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt
              class="bg-black text-2xl font-bold text-white inline-block py-1 px-2 mb-2"
            >
              Location
            </dt>
            <dd class="text-xl">Greater Toulouse Metropolitan Area, France</dd>
          </dl>
        </li>

        <li>
          <dl>
            <dt
              class="bg-black text-2xl font-bold text-white inline-block py-1 px-2 mb-2"
            >
              E-mail
            </dt>
            <dd class="text-xl">timb@uniform.dev</dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt
              class="bg-black text-2xl font-bold text-white inline-block py-1 px-2 mb-2"
            >
              Website
            </dt>
            <dd class="text-xl">
              <a href="https://timbenniks.dev" target="_blank" rel="noopener"
                >https://timbenniks.dev</a
              >
            </dd>
          </dl>
        </li>
      </ul>
    </div>
  </section>
</template>
