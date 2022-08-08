<script lang="ts" setup>
import type { ComponentInstance, ComponentParameter } from "@uniformdev/canvas";

// type MyEntry = ComponentParameter<{ id: string }>;

const props = defineProps<{
  component: ComponentInstance;
}>();

const entry = computed(() => props.component.parameters.entry.value?.id);

const { data: richtext } = await useAsyncData(entry.value.toString(), () => {
  return queryContent(`/${entry.value}`).findOne();
});
</script>

<template>
  <ContentRenderer
    v-if="richtext"
    :value="richtext"
    :class="{
      'max-w-[1440px] mx-auto px-8 lg:p-0 mb-12': entry === 'intro',
    }"
  />
</template>
