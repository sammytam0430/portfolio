import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Projects from '../views/Projects.vue';
import Blogs from '../views/Blogs.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  { path: '/blogs', name: 'Blogs', component: Blogs },
  { path: '/projects', name: 'Projects', component: Projects },
  {
    path: '/about',
    name: 'About',
    component: About,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    // import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
