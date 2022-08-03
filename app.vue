<script lang="ts" setup>
useSchemaOrg([
  defineWebSite({
    name: "Tim Benniks Presskit",
  }),
  definePerson({
    name: "Tim Benniks",
    image: "/icon.png",
    sameAs: ["https://timbenniks.dev/"],
  }),
  defineWebPagePartial(),
]);
useHead({
  viewport: "width=device-width, initial-scale=1",
  charset: "utf-8",
  htmlAttrs: {
    lang: "en",
  },
  link: [
    { rel: "icon", href: "/icon.png" },
    { rel: "apple-touch-icon", href: "/icon.png" },
    { rel: "manifest", href: "/manifest.json" },
  ],
  meta: [
    {
      name: "theme-color",
      content: "#14356b",
    },
    {
      name: "description",
      content: "Presskit page for Tim Benniks",
    },
    {
      name: "og:description",
      content: "Presskit page for Tim Benniks",
    },
    {
      name: "twitter:description",
      content: "Presskit page for Tim Benniks",
    },
    {
      property: "og:site_name",
      content: "Tim Benniks Presskit",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://presskit.timbenniks.dev",
    },
    {
      property: "og:title",
      content: "Tim Benniks Presskit",
    },
    {
      property: "og:image",
      content:
        "https://res.cloudinary.com/dwfcofnrd/image/fetch/q_auto,f_auto/https://images.prismic.io/timbenniks/375f865f-188c-4f83-9462-c8600aff4061_favicon.png",
    },
    {
      property: "twitter:image",
      content:
        "https://res.cloudinary.com/dwfcofnrd/image/fetch/q_auto,f_auto/https://images.prismic.io/timbenniks/375f865f-188c-4f83-9462-c8600aff4061_favicon.png",
    },
    {
      property: "twitter:title",
      content: "Tim Benniks Presskit",
    },
    {
      property: "twitter:card",
      content: "summary_large_image",
    },
    {
      property: "twitter:url",
      content: "https://presskit.timbenniks.dev/",
    },
    {
      property: "twitter:domain",
      content: "presskit.timbenniks.dev",
    },
    {
      property: "twitter:site",
      content: "@timbenniks",
    },
  ],
});
</script>
<template>
  <Head>
    <Link rel="preconnect" href="https://res.cloudinary.com"></Link>
    <Link rel="preconnect" href="https://fonts.googleapis.com"></Link>
    <Link rel="canonical" href="https://presskit.timbenniks.dev"></Link>
    <Meta name="viewport" content="width=device-width, initial-scale=1"></Meta>
    <Style
      href="https://fonts.googleapis.com/css2?family=Lato:wght@400;900&display=swap"
    ></Style>
    <Title>Tim Benniks Presskit</Title>
  </Head>
  <main class="max-w-[1512px] mx-auto">
    <hero />
    <intro />
    <bios />
    <my-details />
    <emcee />
    <media />
    <talks />
  </main>
</template>
