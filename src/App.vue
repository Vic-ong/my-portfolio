<template>
  <div :class="breakpoints.smAndBelow ? '' : 'flex'">
    <SidePanel v-if="breakpoints.mdAndAbove" />
    <div
      class="flex-1 overflow-y-scroll py-10 px-10 md-above:px-14"
      :style="breakpoints.smAndBelow ? 'height: calc(100vh - 3.5rem)' : 'height: 100vh'"
    >
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
    <BottomPanel v-if="breakpoints.smAndBelow" />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { initBreakpoints, useBreakpoints } from '@/composables/breakpoints';
  import SidePanel from '@/components/SidePanel.vue';
  import BottomPanel from '@/components/BottomPanel.vue';

  export default defineComponent({
    name: 'App',
    components: {
      SidePanel,
      BottomPanel,
    },
    setup() {
      initBreakpoints();
      const breakpoints = useBreakpoints();

      return {
        breakpoints,
      };
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
