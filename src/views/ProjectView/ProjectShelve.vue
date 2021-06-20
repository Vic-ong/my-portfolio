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
              class="h-16 rounded-md"
            >
          </a>
        </div>
        <div>
          ℹ️ This is an on-going project
        </div>
        <div>
          A simple web application that
          <b>
            helps users organize their subscriptions and keeps track of their monthly expenses sourced from subscriptions.
          </b>
          Users can log in through Google and create their subscription shelf.
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
        <div class="underline">
          Progress
        </div>
        <div class="ml-5">
          <div>
            ✅ Authentication
          </div>
          <div>
            ✅ List, add, delete subscriptions
          </div>
          <div>
            🟨 Add more selections + custom subscriptions
          </div>
          <div>
            🟨 Interact with Google calendar to create reminders
          </div>
          <div>
            🟨 Cancel subscriptions
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
          There have been an
          <a
            href="https://www.forbes.com/sites/forbestechcouncil/2021/03/08/why-2021-will-be-the-year-of-consumption-based-services/?sh=6d0ef9f03610"
            target="_blank"
          >
            increasing number of businesses offering subscription-based pricing
          </a>
          because it has proved to be more lucrative than the traditional pay-as-you-go pricing model, and it is incredibly frustrating for consumers. I, myself, have 7 subscriptions to keep tabs on. Most of the time, I don’t think about it and continue on with my life while getting charged silently. As a consumer, I would like to be aware of the expenses I’m currently bearing to avoid overspending. So, I decided to create a simple subscription management tool that’ll raise my attention to my monthly subscription-based expenses, and hopefully it would help others too.
        </div>
      </TextBody>
    </div>

    <div>
      <TextHeading>
        Features
      </TextHeading>
      <TextBody>
        <div>
          Since I just wanted a simple and straight-forward tool, I plan to start off with just basic and necessary features.
        </div>
        <div>
          <TextList>
            Login with Google
          </TextList>
          <TextList>
            List of subscriptions
          </TextList>
          <TextList>
            Track a new subscription
          </TextList>
          <TextList>
            Delete a subscription
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
          Vite, Vue, Typescript, Tailwind CSS, Firebase Authentication
        </div>
      </TextBody>
    </div>

    <div>
      <TextHeading>
        Details
      </TextHeading>
      <TextBody>
        <div class="underline">
          Authentication
        </div>
        <div>
          For the sake of simplicity, I went with Firebase Authentication because it is easy to set up and allows me to quickly move forward to develop the actual tool. I chose the Google authentication plugin so that I skip the registration page and login form.
        </div>
        <CodeContainer>
          <template #title>
            firebase.ts
          </template>
          <CodeBlock>
            {{ firebaseAuthSnippet }}
          </CodeBlock>
        </CodeContainer>

        <div class="underline">
          Focusing the pain points
        </div>
        <div>
          The total expenses should be the most crucial information and the first information the user should see when entering. The overall UI should also be simple and clean-looking to minimize distractions.
        </div>
        <div class="flex justify-center">
          <img
            :src="shelfImg"
            class="h-96 shadow-md"
          >
        </div>
      </TextBody>
    </div>
  </ProjectViewContainer>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue';
  import { useStore } from '@/composables/store';
  import { firebaseAuthSnippet } from '@/data/snippets/shelve';
  import ProjectViewContainer from '@/components/ProjectViewContainer.vue';
  import titleImg from '@/assets/projects/shelve/title.jpg';
  import shelfImg from '@/assets/projects/shelve/shelf.jpg';

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
        firebaseAuthSnippet,
        titleImg,
        shelfImg,
      };
    },
  });
</script>
