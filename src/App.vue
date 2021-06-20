<template>
  <div class="flex">
    <SidePanel />
    <div class="h-screen flex-1 overflow-y-scroll py-10 px-14">
      <router-view v-slot="{ Component }">
        <transition
          name="transition-fade"
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import SidePanel from '@/components/SidePanel.vue';

  export default defineComponent({
    name: 'App',
    components: {
      SidePanel,
    },
  });
</script>
