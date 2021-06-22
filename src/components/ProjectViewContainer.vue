<template>
  <PageContainer
    :loading="loading"
    :error="error"
  >
    <PageTitle id="page-title">
      <div class="flex justify-between items-center">
        <div v-if="view.mdAndAbove" />
        <div class="sm-below:text-left">
          {{ title }}
        </div>
        <router-link
          :to="{ name: 'projects' }"
          class="flex items-center font-normal text-base text-dark"
        >
          <div class="w-4 h-4 mr-2">
            <IconChevronLeft />
          </div>
          Back
        </router-link>
      </div>
    </PageTitle>
    <PageContent>
      <div class="md-above:max-w-4xl text-left space-y-10">
        <slot />
      </div>
    </PageContent>
    <div class="flex justify-center">
      <div
        class="flex items-center cursor-pointer"
        @click="scrollToTop"
      >
        <IconArrowUp class="h-5 w-5 mr-2" />
        Back to top
      </div>
    </div>
  </PageContainer>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { useBreakpoints } from '@/composables/breakpoints';
  import IconChevronLeft from '@/components/Icons/IconChevronLeft.vue';
  import IconArrowUp from '@/components/Icons/IconArrowUp.vue';

  export default defineComponent({
    name: 'ProjectViewContainer',
    components: {
      IconChevronLeft,
      IconArrowUp,
    },
    props: {
      loading: {
        type: Boolean,
        default: false,
      },
      error: {
        type: Boolean,
        default: false,
      },
      title: {
        type: String,
        required: true,
      },
    },
    setup() {
      const view = useBreakpoints();
      const scrollToTop = () => {
        const el = document.getElementById('page-title');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      };

      return {
        view,
        scrollToTop,
      };
    },
  });
</script>
