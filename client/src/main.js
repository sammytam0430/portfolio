import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';

// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';

createApp(App)
  .use(router)
  // .use(BootstrapVue)
  // .use(BootstrapVueIcons)
  .mount('#app');
