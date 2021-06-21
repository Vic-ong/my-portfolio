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
          Lyght
          <b>
            connects retail buyers with solar energy producers to participate in tangible environmental projects
          </b>
          whilst enjoying recurring income at competitive rates and with full transparency. The objective is to create an
          <a
            href="https://hbr.org/2019/01/calculating-the-value-of-impact-investing"
            target="_blank"
          >
            impact investing
          </a>
          platform to help accelerate the growth in the renewable energy sector.
        </div>

        <div class="ml-5">
          <div class="flex">
            🚀
            <a
              :href="project.data.link"
              target="_blank"
              class="ml-2"
            >
              Live Demo
            </a>
          </div>
        </div>

        <div class="text-sm italic">
          Note: Since the code is confidential, product demo is provided instead (see below).
        </div>
      </TextBody>
    </div>

    <div>
      <TextHeading>
        Background
      </TextHeading>
      <TextBody>
        <div>
          I am the lead engineer for this 8-month long project under
          <a
            href="https://www.lyght.com.tw/"
            target="_blank"
          >
            Lyght Co., Taiwan.
          </a>
          I led the software development efforts from architecture design to code implementations in a cross-disciplinary team of 4:
        </div>

        <div>
          <TextList>
            Darren Chua: Business strategies and partnerships
          </TextList>
          <TextList>
            Jestyn Khoo: Legal compliance and partnerships
          </TextList>
          <TextList>
            Harry Kuo: Branding, UI and UX design
          </TextList>
        </div>
      </TextBody>
    </div>

    <div>
      <TextHeading>
        Features
      </TextHeading>
      <TextBody>
        <div>
          This project is composed of 3 components: an investment platform, an administration panel and backend services.
        </div>

        <div class="flex justify-center">
          <img
            :src="architectureImg"
            class="h-80"
          >
        </div>

        <div>
          <div class="heading-3">
            Investment platform (web app)
          </div>
          <TextList>
            User registration and onboarding
          </TextList>
          <TextList>
            Project and product listing
          </TextList>
          <TextList>
            Checkout and manage order
          </TextList>
        </div>

        <div>
          <div class="heading-3">
            Administration panel (web app)
          </div>
          <TextList>
            User management
          </TextList>
          <TextList>
            Project management
          </TextList>
          <TextList>
            Fund management
          </TextList>
        </div>

        <div>
          <div class="heading-3">
            Backend services (API service)
          </div>
          <TextList>
            Authentication
          </TextList>
          <TextList>
            Email service
          </TextList>
          <TextList>
            Order creation and validation
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
          Frontend: Vue, Vuetify
        </div>
        <div>
          Backend: Google Functions, NodeJS
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
        <div class="flex flex-col items-center space-y-4">
          <img
            :src="projectPageImg"
            class="rounded-md shadow-md"
            style="height: 25rem"
          >
        </div>
        <div class="heading-3">
          Firebase and Google Cloud Platform
        </div>
        <div>
          Having gathered information about the vision, business model and assumptions, I realized I will have to do rapid prototyping and account for tweaks in business model. I chose to use the
          <a
            href="https://firebase.google.com/"
            target="_blank"
          >
            Firebase cloud infrastructure
          </a>
          because it offers a reasonable pricing structure, a flexible NoSQL database and great rapid prototyping tools.
        </div>

        <div class="heading-3">
          Consistent tests and deployments
        </div>
        <div>
          Given the nature of rapid prototyping, I’m very likely to push updates and releases frequently so adding continuous integration and continuous deployment (CI/CD) pipelines to the project would be useful. The code below describes a
          <a
            href="https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/"
            target="_blank"
          >
            Gitlab CI/CD pipeline
          </a>
          I created for the project. Everytime I push commits to the remote repository, the pipeline will trigger a test, build and deploy protocols to the designated environments.
        </div>
        <div>
          <CodeContainer>
            <template #title>
              .gitlab-ci.yml
            </template>
            <CodeBlock>
              {{ cicdSnippet }}
            </CodeBlock>
          </CodeContainer>
        </div>

        <div class="heading-3">
          User onboarding & participation experience
        </div>
        <div>
          Impact investing is not yet a widely adopted model in Taiwan so it is critical to smoothly direct new users in discovering the platform. New users can sign up or log in via Google followed by a simple phone verification process. I used
          <a
            href="https://material.io/design/introduction"
            target="_blank"
          >
            Material Design
          </a>
          to create the UI components and
          <a
            href="https://www.chartjs.org/"
            target="_blank"
          >
            Chart.js
          </a>
          to create the charts for data visualizations. The code below creates the onboarding UI components shown in the first product demo (the dependencies are extracted from the snippets and should be treated as pseudo code).
        </div>

        <div>
          <CodeContainer>
            <template #title>
              <div class="flex space-x-4 overflow-scroll hide-scrollbar">
                <div
                  v-for="item in onboardingSnippets"
                  :key="item.name"
                  :class="item.name === onboardingSnippetSelection ? '' : 'text-gray-darken cursor-pointer'"
                  @click="selectOnboardingSnippet(item.name)"
                >
                  {{ item.name }}
                </div>
              </div>
            </template>
            <CodeBlock>
              {{ getSnippet(onboardingSnippetSelection, onboardingSnippets) }}
            </CodeBlock>
          </CodeContainer>
        </div>
        <div class="flex justify-center">
          <iframe
            src="https://www.youtube-nocookie.com/embed/aOzl2taj9DQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            style="height: 25rem; width: 40rem"
            allowfullscreen
          />
        </div>
        <div class="flex justify-center">
          <iframe
            src="https://www.youtube-nocookie.com/embed/gr_ThxtayHU?start=5"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            style="height: 25rem; width: 40rem"
            allowfullscreen
          />
        </div>
        <div class="flex justify-center">
          <img
            :src="orderImg"
            class="rounded-md shadow-md"
            style="height: 22rem"
          >
        </div>

        <div class="heading-3">
          Fund operations & disbursement
        </div>
        <div>
          After the users have invested in a project, they will begin earning a recurring income secured through Lyght’s trust and escrow structure with a partnering bank. On the administration panel, I created a fund management system to support fund administrators managing the fund payment and disbursement processes.
        </div>
        <div class="flex justify-center">
          <img
            :src="fundDisbursementImg"
            class="h-80"
          >
        </div>
        <div class="flex justify-center">
          <iframe
            src="https://www.youtube-nocookie.com/embed/iuY74_5-R4g?start=5"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            style="height: 25rem; width: 40rem"
            allowfullscreen
          />
        </div>
      </TextBody>
    </div>
  </ProjectViewContainer>
</template>

<script lang="ts">
  import { defineComponent, ref, computed } from 'vue';
  import { useStore } from '@/composables/store';
  import { Snippet } from '@/data/snippets/types';
  import {
    cicdSnippet,
    onboardingViewSnippet,
    emailVerificationSnippet,
    generalInfoSnippet,
    mobileVerificationSnippet,
    uploadPhotoSnippet,
  } from '@/data/snippets/lyght';
  import ProjectViewContainer from '@/components/ProjectViewContainer.vue';
  import TextList from '@/components/TextList.vue';
  import CodeContainer from '@/components/CodeContainer.vue';

  export default defineComponent({
    name: 'ProjectLyght',
    components: {
      ProjectViewContainer,
      TextList,
      CodeContainer,
    },
    setup() {
      const onboardingSnippetSelection = ref('OnboardingView.vue');
      const { project, getProject } = useStore();

      getProject('lyght');

      const loading = computed(() => project.loading);
      const error = computed(() => project.error);

      const titleImg = 'https://firebasestorage.googleapis.com/v0/b/my-portfolio-45469.appspot.com/o/public%2Flyght%2Ftitle.png?alt=media&token=62fb3d52-4578-4510-bedc-1919e77ca2c7';
      const architectureImg = 'https://firebasestorage.googleapis.com/v0/b/my-portfolio-45469.appspot.com/o/public%2Flyght%2Farchitecture.png?alt=media&token=79d5a9f5-b28c-4ddd-ae43-633ed0a6bfb6';
      const fundDisbursementImg = 'https://firebasestorage.googleapis.com/v0/b/my-portfolio-45469.appspot.com/o/public%2Flyght%2Ffund-disbursement.png?alt=media&token=dbdd098f-ba92-496d-8667-d8ef0606670a';
      const projectPageImg = 'https://firebasestorage.googleapis.com/v0/b/my-portfolio-45469.appspot.com/o/public%2Flyght%2Fproject.jpg?alt=media&token=46591c80-c14b-44dd-bb5c-a62887323e66';
      const orderImg = 'https://firebasestorage.googleapis.com/v0/b/my-portfolio-45469.appspot.com/o/public%2Flyght%2Forder.jpg?alt=media&token=44f981e4-0c08-4831-8bee-5f97ccd78ecd';

      const onboardingSnippets: Snippet[] = [
        {
          name: 'OnboardingView.vue',
          snippet: onboardingViewSnippet,
        },
        {
          name: 'EmailVerification.vue',
          snippet: emailVerificationSnippet,
        },
        {
          name: 'GeneralInfo.vue',
          snippet: generalInfoSnippet,
        },
        {
          name: 'MobileVerification.vue',
          snippet: mobileVerificationSnippet,
        },
        {
          name: 'UploadPhoto.vue',
          snippet: uploadPhotoSnippet,
        },
      ];

      const selectOnboardingSnippet = (key: string) => {
        onboardingSnippetSelection.value = key;
      };

      const getSnippet = (key: string, list: Snippet[]) => {
        const obj = list.find((x) => x.name === key);
        return obj ? obj.snippet : '';
      };

      return {
        loading,
        error,
        project,
        onboardingSnippetSelection,
        selectOnboardingSnippet,
        getSnippet,
        fundDisbursementImg,
        titleImg,
        architectureImg,
        projectPageImg,
        orderImg,
        cicdSnippet,
        onboardingSnippets,
      };
    },
  });
</script>
