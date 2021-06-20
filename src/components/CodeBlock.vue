<template>
  <div
    class="relative bg-gray p-5 rounded-b-md overflow-scroll"
    style="height: 25rem"
  >
    <pre class="absolute left-5 -top-5 text-xs leading-1">
        <code>
          <slot />
        </code>
    </pre>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    props: {
      title: {
        type: String,
        default: '',
      },
    },
  });
</script>
