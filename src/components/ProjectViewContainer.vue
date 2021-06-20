<template>
  <PageContainer
    :loading="loading"
    :error="error"
  >
    <PageTitle>
      <div class="flex justify-between items-center">
        <div />
        <div>
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
      <div class="max-w-4xl text-left space-y-10">
        <slot />
      </div>
    </PageContent>
  </PageContainer>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import IconChevronLeft from '@/components/Icons/IconChevronLeft.vue';

  export default defineComponent({
    name: 'ProjectViewContainer',
    components: {
      IconChevronLeft,
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
  });
</script>
