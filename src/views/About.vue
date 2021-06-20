<template>
  <PageContainer>
    <PageTitle>
      About
    </PageTitle>
    <PageContent>
      <div class="w-3/4 grid grid-cols-3 gap-10">
        <div class="col-span-2">
          <div class="space-y-5">
            <div>
              Hello there, I'm Vic 👋🏻
            </div>
            <div>
              A software engineer with {{ yearsOfExperience }} years of work experience.
            </div>
            <div>
              I spend most of my time either building stuff, exploring UI and UX designs,
              obsessing over film color schemes or winding down with photography outings.
            </div>
            <div>
              B.E. mechanical engineering & product design minor on paper 🎓 but transitioned
              to computer science upon graduation.
            </div>
            <div>
              Currently, I'm developing a solar energy investment platform that allows everyone
              to contribute towards creating a greener future while getting monetary returns.
            </div>
          </div>

          <Divider />

          <div class="flex justify-center space-x-8">
            <a
              v-for="(social, index) in socials"
              :key="index"
              :href="social.link"
              target="_blank"
              class="flex flex-col justify-center items-center w-6 h-6 rounded-full transition duration-500 ease-in-out transform hover:scale-125"
            >
              <component :is="social.component" />
            </a>
          </div>
        </div>

        <div class="col-span-1">
          <img
            :src="profilePhoto"
            class=""
          >
        </div>
      </div>
    </PageContent>
  </PageContainer>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import dayjs from 'dayjs';
  import profilePhoto from '@/assets/profile_photo.jpg';
  import IconGithub from '@/components/Icons/IconGithub.vue';
  import IconInstagram from '@/components/Icons/IconInstagram.vue';
  import IconLinkedIn from '@/components/Icons/IconLinkedIn.vue';

  export default defineComponent({
    name: 'About',
    setup() {
      const yearsOfExperience = dayjs().diff(dayjs('01-01-2017'), 'year', true).toFixed(1);

      const socials = [
      {
          component: IconGithub,
          link: 'https://github.com/Vic-ong/',
        },
        {
          component: IconLinkedIn,
          link: 'https://www.linkedin.com/in/vickong/',
        },
        {
          component: IconInstagram,
          link: 'https://www.instagram.com/vic_ong/',
        },
      ];

      return {
        profilePhoto,
        yearsOfExperience,
        socials,
      };
    },
  });
</script>
