<template>
  <div class="flex justify-center">
    <div
      class="border border-gray-darken rounded-md"
      :style="containerStyle"
    >
      <div
        class="border-b border-gray-darken px-5 py-1 rounded-t-md text-sm"
        style="max-width: calc(100vw - 2.5rem)"
      >
        <slot name="title" />
      </div>
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue';
  import { useBreakpoints } from '@/composables/breakpoints';

  export default defineComponent({
    props: {
      items: {
        type: Array,
        default: () => [],
      },
    },
    setup() {
      const view = useBreakpoints();

      const containerStyle = computed(() => {
        let width = '100%';
        if (view.value.lgAndAbove) {
          width = '40rem';
        }
        return { width };
      });
      
      return {
        containerStyle,
      };
    },
  });
</script>
