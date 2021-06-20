<template>
  <div class="flex justify-center">
    <div
      class="border border-gray-darken rounded-md"
      style="width: 40rem"
    >
      <div class="border-b border-gray-darken px-5 py-1 rounded-t-md text-sm">
        <slot name="title" />
      </div>
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    props: {
      items: {
        type: Array,
        default: () => [],
      },
    },
  });
</script>
