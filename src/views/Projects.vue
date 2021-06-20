<template>
  <PageContainer>
    <PageTitle>
      Projects
    </PageTitle>
    <PageContent>
      <div class="grid grid-cols-3 gap-10">
        <div
          v-for="item in items"
          :key="item.id"
        >
          <router-link
            :to="`/projects/${item.id}`"
            class="text-dark"
          >
            <div class="h-56 w-56 bg-gray overflow-hidden">
              <img
                :src="item.img"
                class="h-full w-full duration-300 ease-in-out transform hover:scale-110"
              >
            </div>
            <div class="mt-2 font-bold">
              {{ item.name }}
            </div>
          </router-link>
          <div class="text-sm text-gray-darken">
            <span
              v-for="(tag, index) in item.tags"
              :key="tag"
            >
              {{ tag }}{{ index !== item.tags.length - 1 ? ', ' : '' }}
            </span>
          </div>
        </div>
      </div>
    </PageContent>
  </PageContainer>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { useStore } from '@/composables/store';

  export default defineComponent({
    name: 'Projects',
    setup() {
      const { projects } = useStore();

      return {
        items: projects.data,
      };
    },
  });
</script>
