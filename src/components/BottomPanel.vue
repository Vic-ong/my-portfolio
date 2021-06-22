<template>
  <div class="h-14 flex justify-around items-center px-5 border-t border-gray">
    <router-link
      v-for="item in items"
      :key="item.routeName"
      :to="{ name: item.routeName }"
      class="text-dark"
    >
      {{ item.name }}
    </router-link>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'BottomPanel',
    setup() {
      const items = [
        {
          name: 'Projects',
          routeName: 'projects',
        },
        {
          name: 'About',
          routeName: 'about',
        },
      ];

      return {
        items,
      };
    },
  });
</script>
