<template>
  <div id="home" class="grid w-100">
    <div v-for="item of items" :class="[item.name, 'card']" :key="item.name">
      <!-- <img :src="item.img" class="card-img" alt="" /> -->
      <div class="card-img-overlay text-light w-100 px-0 py-2">
        <h5 class="card-title text-center">{{ item.title }}</h5>
        <div class="text-center w-100 position-absolute top-50">
          <p v-if="item.name === 'socials'" class="card-text text-center">
            <a
              v-for="link of item.content"
              :href="link.href"
              target="_blank"
              :class="[link.icon, link.type, ...iconClasses]"
              :key="link.name"
            ></a>
          </p>
          <p v-else class="card-text">
            {{ item.content }}<span class="cursor text-warning">|</span>
          </p>
          <router-link v-if="item.name !== 'socials'" :to="'/' + item.name">
            <button type="button" class="btn btn-outline-light">
              {{ item.name }}
            </button>
          </router-link>
        </div>
        <p
          class="footer card-text text-left w-100 mx-2 position-absolute bottom-0"
        >
          {{ item.footer }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const items = ref([
      {
        name: 'about',
        title: 'About',
        content: 'Hi! My name is sammy.',
        footer: '',
      },
      {
        name: 'projects',
        title: 'Projects',
        content: '',
        footer: '',
      },
      { name: 'blogs', title: 'Blogs', content: '', footer: '' },
      { name: 'plans', title: 'Plans', content: '', footer: '' },
      { name: 'contact', title: 'Contact', content: '', footer: '' },
      {
        name: 'socials',
        title: 'You Can Find Me Here',
        content: [
          {
            name: 'linkdein',
            type: 'fab',
            icon: 'fa-linkedin-in',
            href: 'https://linkedin.com/in/sammytam0430',
          },
          {
            name: 'github',
            type: 'fab',
            icon: 'fa-github',
            href: 'https://github.com/sammytam0430',
          },
          {
            name: 'instagram',
            type: 'fab',
            icon: 'fa-instagram',
            href: 'https://instagram.com/sammyztam',
          },
          {
            name: 'facebook',
            type: 'fab',
            icon: 'fa-facebook',
            href: 'https://facebook.com/sammytam0430',
          },
          {
            name: 'discord',
            type: 'fab',
            icon: 'fa-discord',
            href: 'https://discord.com/users/371879138757312513',
          },
        ],
        footer: '',
      },
    ]);

    const iconClasses = ref(['fa-lg', 'ms-2', 'me-2', 'text-light']);

    return { items, iconClasses };
  },
};
</script>

<style scoped lang="scss">
.card {
  border-radius: 0;
  overflow-y: hidden;
  width: calc(100vw / 3);
  background-size: cover;
  background-position: center;
}

.card-img-overlay {
  position: absolute;
  top: 100%;

  background: rgba(0, 0, 0, 0.6);
  border-radius: 0;
  overflow: hidden;

  transition: top 0.5s;
}

.card:hover .card-img-overlay,
.card:active .card-img-overlay {
  top: 0;
}

.card-text a {
  color: #f8f9fa;
  text-decoration: none;
}

.cursor {
  animation-name: blink;
  animation-iteration-count: infinite;
  animation-timing-function: step-start;
  animation-duration: 1s;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

.grid {
  display: grid;
  height: 93vh;
}

.about {
  grid-row: 1/ 8;
  // grid-column: 1/ 3;
  background-image: url('../assets/about.jpeg');
}

.projects {
  grid-row: 1/ 5;
  // grid-column: 3/ 5;
  background-image: url('../assets/projects.jpg');
}

.plans {
  grid-row: 5/ 10;
  // grid-column: 3/ 5;
  background-image: url('../assets/plans.jpg');
}

.blogs {
  grid-row: 1/ 6;
  // grid-column: 5/ 7;
  background-image: url('../assets/blogs.jpeg');
}

.contact {
  grid-row: 6/ 10;
  // grid-column: 5/ 7;
  background-image: url('../assets/contact.jpeg');
}

.socials {
  grid-row: 8/ 10;
  // grid-column: 1/ 3;
  background-image: url('../assets/socials.jpg');
}

@media only screen and (max-width: 800px) {
  .grid {
    display: block;
  }

  .card {
    width: 100vw;
  }

  .about {
    height: 100vh;
    min-height: 500px;
  }

  .projects,
  .blogs,
  .plans,
  .contact {
    height: 50vh;
    min-height: 250px;
  }

  .socials {
    height: 12vh;
    min-height: 80px;
  }
}
</style>
