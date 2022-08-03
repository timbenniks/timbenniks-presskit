<script lang="ts" setup>
defineProps<{
  lines: Array<string>;
  as: string;
}>();
</script>

<template>
  <component :is="as">
    <template v-for="line in lines">
      <span class="inline-block bg-black p-2">
        <span class="flowing-title inline">{{ line }}</span>
      </span>
      <br />
    </template>
  </component>
</template>
