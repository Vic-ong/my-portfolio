<template>
  <div class="flex">
    <SidePanel />
    <div class="h-screen flex-1 overflow-y-scroll py-10 px-14">
      <router-view v-slot="{ Component, route }">
        <transition
          name="bounce"
          mode="out-in"
        >
          <component
            :is="Component"
            :key="route.path"
          />
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

<style>
  /* Fade transition */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .3s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  /* Bounce transition */
  .bounce-enter-active {
    animation: bounce-in .35s;
  }
  .bounce-leave-active {
    animation: bounce-in .2s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
