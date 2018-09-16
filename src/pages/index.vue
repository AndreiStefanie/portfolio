<template>
  <!-- <div class="container-fluid">
    <section class="row full-row pb-4 pb-md-0 colors-1" id="welcome">
      <div class="col-12 m-auto pt-2 pt-md-0 pb-2 pb-md-0">
        <h1 class="text-center">Hi</h1>
      </div>
      <div class="mx-auto col-12 col-sm-10 col-lg-8 col-xl-6">
        <b-card text-variant="dark">
          <b-media>
            <div slot="aside" class="d-none d-md-block">
            </div>
            <b-img rounded="circle" class="d-block d-md-none" block center src="/me.jpg" thumbnail/>
            <h5 class="mt-0 ">Welcome to my portfolio!</h5>
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
            <b-media>
              <fa :icon="quote" style="font-size:40px" slot="aside"/>
              <h5 class="mt-0">Favorite quote</h5>
              <p class="mb-0">
                <i>Good people learn from their mistakes, but the great ones learn also from the mistakes of others</i>
              </p>
              <small>Get started by checking out my <nuxt-link to="#" class="link-text"><s>Blog</s></nuxt-link> (upcomming)</small>
            </b-media>
          </b-media>
        </b-card>
      </div>
      <div class="below text-center">
        <div class="below-indicator d-none">
          <transition name="rotate-out">
            <a v-if="!isBelow" href="#" v-scroll-to="'#below'" class="below-indicator">
              <fa :icon="below" style="font-size:40px"/>
            </a>
          </transition>
          <transition name="rotate-out">
            <a v-if="isBelow" href="#" v-scroll-to="'#welcome'" class="below-indicator">
              <fa :icon="up" style="font-size:40px"/>
            </a>
          </transition>
        </div>
      </div>
    </section>
    <section class="row half-row pt-4 pt-md-0 pb-4 pb-md-0" id="below">
      <div class="m-auto col-12 col-sm-8 col-lg-6 text-center">
        <b-card>
          <p>While I grew up, the scroll wheel of 3 different <a href="https://www.vocabulary.com/dictionary/mouse" target="_blank">mouses</a> broke, so I tend to avoid using it.</p>
          <p>I agree that, in general, vertical space and scrolling is good and user friendly (especially on mobile devices), but for those people who have a broken scroll wheel, I decided to limit the vertical space of my portfolio.</p>
        </b-card>
      </div>
    </section>
  </div> -->
  <div id="bg-img">
    <main id="home">
      <h1 class="lg-heading">
        Andrei
        <span class="text-secondary">Ștefănie</span>
      </h1>
      <h2 class="sm-heading">
        Optimist, Tech Enthusiast, Engineer
      </h2>
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

export default {
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
