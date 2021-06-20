import { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import About from '@/views/About.vue';
import Projects from '@/views/Projects.vue';
import Attributions from '@/views/Attributions.vue';
import ProjectLyght from '@/views/ProjectView/ProjectLyght.vue';
import ProjectPaul from '@/views/ProjectView/ProjectPaul.vue';
import ProjectSpotify from '@/views/ProjectView/ProjectSpotify.vue';
import ProjectShelve from '@/views/ProjectView/ProjectShelve.vue';

const routes = [
  {
    name: 'about',
    path: '/',
    component: About,
  },
  {
    name: 'projects',
    path: '/projects',
    component: Projects,
  },
  {
    name: 'attributions',
    path: '/attributions',
    component: Attributions,
  },
  // project views
  {
    name: 'project/lyght',
    path: '/projects/lyght',
    component: ProjectLyght,
  },
  {
    name: 'project/my-spotify-features',
    path: '/projects/my-spotify-features',
    component: ProjectSpotify,
  },
  {
    name: 'project/paul-the-octopus',
    path: '/projects/paul-the-octopus',
    component: ProjectPaul,
  },
  {
    name: 'project/shelve-my-subs',
    path: '/projects/shelve-my-subs',
    component: ProjectShelve,
  },
  {
    name: 'project/kingpin',
    path: '/projects/kingpin',
    component: ProjectLyght,
  },
  // 404 redirect
  {
    name: 'unkown-route',
    path: '/:pathMatch(.*)*',
    redirect: {
      name: 'about',
    },
  },
];

export const registerRouter = (app: App): void => {
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  app.use(router);
};
