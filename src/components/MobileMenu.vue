<template>
  <div class="h-14 px-5 flex justify-around items-center bg-light border-t border-gray">
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
import { useRouter } from 'vue-router';
import { useBreakpoints } from '@/composables/breakpoints';

export default defineComponent({
  name: 'SidePanel',
  setup() {
    const router = useRouter();
    const breakpoints = useBreakpoints();

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
      breakpoints,
      items,
      router,
    };
  },
});
</script>
