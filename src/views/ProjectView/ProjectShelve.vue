<template>
  <ProjectViewContainer
    :loading="loading"
    :error="error"
    :title="project.data.name"
  >
    <div class="flex justify-center">
      <img
        :src="project.data.img"
        class="h-56 w-56"
      >
    </div>

    <div>
      <TextHeading>
        Overview
      </TextHeading>
      <TextBody>
        <div class="flex">
          <a
            :href="project.data.link"
            target="_blank"
          >
            <img
              :src="titleImg"
              class="h-20 rounded-md"
            >
          </a>
        </div>
        <div>
          A web app that
          <b>
            calculates your virtual character's compatibility with the others and recommends the top 3 team pairings
          </b>
          so that your probability of completing a p
        </div>

        <div class="ml-5">
          <div class="flex">
            🚀
            <a
              :href="project.data.link"
              target="_blank"
              class="ml-2"
            >
              Live demo
            </a>
          </div>
          <div class="flex">
            📦
            <a
              :href="project.data.source"
              target="_blank"
              class="ml-2"
            >
              Source code
            </a>
          </div>
        </div>
      </TextBody>
    </div>

    <div>
      <TextHeading>
        Background
      </TextHeading>
      <TextBody>
        <div>
          Similarity analysiesesenting data in a vector of measurable features.
        </div>
      </TextBody>
    </div>

    <div>
      <TextHeading>
        Features
      </TextHeading>
      <TextBody>
        <div>
          I’d like to cr recommendations.
        </div>
        <div>
          <TextList>
            Character creation system where users can personalized their character's skill set and skill levels
          </TextList>
          <TextList>
            Compatibility score calculations using the proposed algorithms
          </TextList>
        </div>
      </TextBody>
    </div>

    <div>
      <TextHeading>
        Stack
      </TextHeading>
      <TextBody>
        <div>
          Vite, Vue, Typescript, Tailwind CSS
        </div>
      </TextBody>
    </div>

    <div>
      <TextHeading>
        Details
      </TextHeading>
      <TextBody>
        <div>
          There are 3 objectives that thefew assumptions for each mission.
        </div>
      </TextBody>
    </div>
  </ProjectViewContainer>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue';
  import { useStore } from '@/composables/store';
  import ProjectViewContainer from '@/components/ProjectViewContainer.vue';
  import titleImg from '@/assets/projects/paul-the-octopus/title.jpg';

  export default defineComponent({
    name: 'ProjectShelve',
    components: {
      ProjectViewContainer,
    },
    setup() {
      const { project, getProject } = useStore();

      getProject('shelve-my-subs');

      const loading = computed(() => project.loading);
      const error = computed(() => project.error);

      return {
        loading,
        error,
        project,
        titleImg,
      };
    },
  });
</script>
