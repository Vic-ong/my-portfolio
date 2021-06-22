<template>
  <PageContainer>
    <PageTitle>
      About
    </PageTitle>
    <PageContent>
      <div class="lg-above:w-3/4 grid lg-above:grid-cols-3 gap-10">
        <div class="lg-above:col-span-2">
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
              to computer science after landing my first job!
            </div>
            <div>
              Currently, I'm working on an
              <router-link :to="{ name: 'project/lyght' }">
                impact investing platform
              </router-link>
              and a
              <router-link :to="{ name: 'project/shelve-my-subs' }">
                subscription management tool.
              </router-link>
              In my free time, I take french lessons.
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

        <div class="md-below:flex md-below:justify-center md-below:order-first lg-above:col-span-1">
          <img
            :src="profilePhoto"
            style="max-height: 20rem"
          >
        </div>
      </div>
    </PageContent>
  </PageContainer>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import dayjs from 'dayjs';
  import IconGithub from '@/components/Icons/IconGithub.vue';
  import IconInstagram from '@/components/Icons/IconInstagram.vue';
  import IconLinkedIn from '@/components/Icons/IconLinkedIn.vue';

  export default defineComponent({
    name: 'About',
    setup() {
      const yearsOfExperience = dayjs().diff(dayjs('01-01-2017'), 'year', true).toFixed(1);
      const profilePhoto = 'https://firebasestorage.googleapis.com/v0/b/my-portfolio-45469.appspot.com/o/public%2Fprofile_photo.jpg?alt=media&token=5cfed12c-0fcf-4615-86f2-f1583e013a6c';

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
