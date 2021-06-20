<template>
  <div class="w-52 py-6 px-10 flex flex-col justify-between space-y-4">
    <div class="flex flex-col space-y-4">
      <div class="mb-10 font-bold">
        Vic Ong
      </div>
      <router-link
        v-for="item in items"
        :key="item.routeName"
        :to="{ name: item.routeName }"
        class="text-dark"
      >
        {{ item.name }}
      </router-link>
      <a
        href="https://drive.google.com/file/d/1yK3Q89FeqVIOGO3Qk3he8xQubwKIDoo0/view?usp=sharing"
        target="_blank"
        class="text-dark"
      >
        Résumé
      </a>
    </div>

    <router-link
      :to="{ name: 'attributions' }"
      class="mt-auto text-dark"
    >
      Attributions
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'SidePanel',
  setup() {
    const router = useRouter();

    const items = [
      {
        name: 'Projects',
        routeName: 'projects',
      },
      // {
      //   name: 'Photos',
      //   routeName: 'photos',
      // },
      {
        name: 'About',
        routeName: 'about',
      },
    ];
    
    return {
      items,
      router,
    };
  },
});
</script>
