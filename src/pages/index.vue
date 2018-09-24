<template>
  <div id="bg-img">
    <main id="home">
      <Heading
        h1="Andrei"
        h1E="Ștefănie"
        h2="Optimist, Tech Enthusiast, Engineer"
      />
      <div class="sm-heading">
        <h3><strong>Welcome to my portfolio!</strong></h3>
        <p>
          My name is Andrei Petru Ștefănie. I am an enthusiastic and positive person working in the tech industry.
          <br>
          If you want to read more about me, check out the <nuxt-link to="about" class="link-text">About Me</nuxt-link> page.
        </p>
        <p>
          I guess you are here to see the stuff I built or contributed to. For this, check out my <nuxt-link to="projects" class="link-text">Projects</nuxt-link>.
        </p>
        <p>
          Also, if you are looking to get started with something, but don't know what yet, check out my <nuxt-link to="currently" class="link-text">Current Interests</nuxt-link>.
        </p>
      </div>
      <div class="icons">
        <a v-for="l in links" :key="l.url"
          :href="l.url" target="_blank" rel="noopener">
          <i :class="[ 'fab', `fa-${l.icon}`, 'fa-2x' ]"></i>
        </a>
      </div>
    </main>
  </div>
</template>

<script>
import projects from '~/assets/js/projects'
import Heading from '~/components/Heading'

export default {
  components: {
    Heading
  },
  data() {
    return {
      links: [
        {
          url: 'https://github.com/AndreiStefanie',
          icon: 'github'
        },
        {
          url: 'https://twitter.com/AndreiStefanie',
          icon: 'twitter'
        },
        {
          url: 'https://ro.linkedin.com/in/andrei-petru-stefanie-222378105/en',
          icon: 'linkedin'
        },
        {
          url: 'https://www.instagram.com/andrei.stefanie/?hl=en',
          icon: 'instagram'
        }
      ]
    }
  },
  scrollToTop: true
}
</script>
