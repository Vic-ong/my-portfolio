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
          Kingpin.gg is an
          <b>
            esports betting web app for users bet on personalized
            <a
              href="https://www.callofduty.com/warzone"
              target="_blank"
            >
              Call of Duty
            </a>
            game challenges
          </b>
          by leveraging the
          <a
            href="https://documenter.getpostman.com/view/5519582/SzzgAefq#8a24430f-f7d7-489e-b325-cb6bfad60b63"
            target="_blank"
          >
            Call of Duty API.
          </a>
          Users could also team up with other players, either using Kingpin or on their own. Based on the user’s historical performance, the app will provide 3-5 challenges that would be on par to or a little beyond their level of expertise for the user to choose from.
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
          This is a side project that a friend and I worked on, in our free time, for about a year. The idea stems from our childhood memories where oftentimes when we play a mission-based game, we would jokingly (sometimes seriously) declare monetary bets with our siblings or friends claiming that we can defeat [insert a name of a final boss]. So, we figured why can’t we still do it today? And as any engineer would say, I bet I could build a system that does that so, lo and behold, we initiated this project. 😅
        </div>
        <div>
          We picked Call Of Duty because they have an API we can work with and it is a game we’re familiar with. My role in this project is to create the architecture design and develop the applications whereas my friend creates the operational flow and develops the business logic.
        </div>
      </TextBody>
    </div>

    <div>
      <TextHeading>
        Features
      </TextHeading>
      <TextBody>
        <div>
          This project is composed of 2 components: a betting platform and the backend services.
        </div>
        <div class="underline">
          Betting platform
        </div>
        <div>
          <TextList>
            User authentication
          </TextList>
          <TextList>
            Select a challenge and place a bet amount
          </TextList>
          <TextList>
            Frequently asked questions
          </TextList>
        </div>
        <div class="underline">
          Backend services
        </div>
        <div>
          <TextList>
            Determine the probability of winning
          </TextList>
          <TextList>
            Personalized challenge options
          </TextList>
          <TextList>
            Resolve bet outcomes
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
          Frontend: Webpack, Vue, Vuetify
        </div>
        <div>
          Backend: Google Functions, Python, NodeJS, Koa
        </div>
        <div>
          Infrastructure: Firebase, Google Cloud Platform
        </div>
      </TextBody>
    </div>

    <div>
      <TextHeading>
        Details
      </TextHeading>
      <TextBody>
        <div class="underline">
          Creating personalized challenges
        </div>
        <div>
          For a challenge to be personalized, I would have to determine users’ skill level based on their past matches. I can request for
          <a
            href="https://documenter.getpostman.com/view/5519582/SzzgAefq#8a24430f-f7d7-489e-b325-cb6bfad60b63"
            target="_blank"
          >
            warzone match data
          </a>
          from the Call Of Duty API given the users’ Activision ID. Additionally, I can filter the request within a range of start and end time.
        </div>
        <CodeContainer>
          <template #title>
            <div class="flex space-x-4 overflow-scroll hide-scrollbar">
              <div
                v-for="item in snippets"
                :key="item.name"
                :class="item.name === snippetSelection ? '' : 'text-gray-darken cursor-pointer'"
                @click="selectSnippet(item.name)"
              >
                {{ item.name }}
              </div>
            </div>
          </template>
          <CodeBlock>
            {{ getSnippet(snippetSelection, snippets) }}
          </CodeBlock>
        </CodeContainer>

        <div>
          Now that I have a set of historical match data of a user, I can start profiling the data. One of the easiest ways to
          <b>
            get an estimation of the user’s skill set is to look at the kill count
          </b>
          in recent matches. Given each match usually lasts around 30 minutes and assuming that a user plays 5 games on average per day, I sampled 60 records of an anonymous user’s most recent matches which roughly equates to 2 weeks worth of his/her gaming data.
        </div>
        <CodeContainer>
          <template #title>
            sample_matches_data_kill_count.json
          </template>
          <CodeBlock>
            {{ sampleMatches }}
          </CodeBlock>
        </CodeContainer>

        <div>
          Based on the sampling, we can observe that this user’s most frequent kill count ranges from 6 to 12 with a mean of 11 and a median of 10. Given that we want to provide personalized bets that are challenging enough for the user, a 15 kill count could be a good benchmark!
        </div>
        <div class="flex justify-center">
          <img
            :src="histogramImg"
            class="h-80"
          >
        </div>

        <div>
          Other factors that I account for when computing the personalization (see source code):
        </div>
        <div>
          <TextList>
            Win rate
          </TextList>
          <TextList>
            Kill-to-death ratio
          </TextList>
          <TextList>
            Match ranking
          </TextList>
          <TextList>
            Game mode
          </TextList>
        </div>

        <div class="underline">
          Betting on challenges
        </div>
        <div>
          I created a simple 3-step process for users to select their challenges.
        </div>
        <div>
          <TextList>
            Step 1: Select the game mode
          </TextList>
          <TextList>
            Step 2: Select your teammates. This is skipped if the user plays solo
          </TextList>
          <TextList>
            Step 3: Select a challenge and the amount to bet on
          </TextList>
        </div>
        <div>
          After selecting the challenge, the user will have 5 minutes to start their game on Call of Duty. The process is as described in the video below.
        </div>

        <div class="flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/epI2pqy1bXk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            style="height: 25rem; width: 40rem"
            allowfullscreen
          />
        </div>

        <div class="underline">
          Resolving bet outcomes
        </div>
        <div>
          I created an outcome resolver service that runs every 15 minutes. In each run, it will find the unresolved outcomes and request for the corresponding match data from Call Of Duty.
        </div>
      </TextBody>
    </div>
  </ProjectViewContainer>
</template>

<script lang="ts">
  import { defineComponent, ref, computed } from 'vue';
  import { useStore } from '@/composables/store';
  import { Snippet } from '@/data/snippets/types';
  import { codMatchSnippet, matchDataSample, sampleMatches } from '@/data/snippets/kingpin';
  import ProjectViewContainer from '@/components/ProjectViewContainer.vue';
  import CodeContainer from '@/components/CodeContainer.vue';

  export default defineComponent({
    name: 'ProjectKingpin',
    components: {
      ProjectViewContainer,
      CodeContainer,
    },
    setup() {
      const { project, getProject } = useStore();
      const snippetSelection = ref('CodMatch.js');

      getProject('kingpin');

      const loading = computed(() => project.loading);
      const error = computed(() => project.error);

      const snippets: Snippet[] = [
        {
          name: 'CodMatch.js',
          snippet: codMatchSnippet,
        },
        {
          name: 'sample_match_data.json',
          snippet: matchDataSample,
        },
      ];

      const selectSnippet = (key: string) => {
        snippetSelection.value = key;
      };

      const getSnippet = (key: string, list: Snippet[]) => {
        const obj = list.find((x) => x.name === key);
        return obj ? obj.snippet : '';
      };
      
      const histogramImg = 'https://firebasestorage.googleapis.com/v0/b/my-portfolio-45469.appspot.com/o/public%2Fkingpin%2Fhistogram.png?alt=media&token=8f622def-4c33-4819-b623-aab3b3e4d134';
      const titleImg = 'https://firebasestorage.googleapis.com/v0/b/my-portfolio-45469.appspot.com/o/public%2Fkingpin%2Ftitle.png?alt=media&token=dddc0f79-b4ce-47a9-a979-34e4db8a9761';

      return {
        loading,
        error,
        project,
        snippetSelection,
        snippets,
        selectSnippet,
        getSnippet,
        sampleMatches,
        titleImg,
        histogramImg,
      };
    },
  });
</script>
