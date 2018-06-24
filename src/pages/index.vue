<template>
  <div class="container-fluid">
    <div class="row full-row colors-1 position-relative">
      <div class="col-12 m-auto">
        <h1 class="text-center">Hi</h1>
      </div>
      <div class="below text-center">
        <div class="below-indicator">
          <a href="#projects" class="below-indicator">
            <fa :icon="below" style="font-size:40px"/>
          </a>
        </div>
      </div>
    </div>
    <div class="row full-row" id="projects">
      <div class="m-auto h-100">
        <div class="text-center row-heading">
          <router-link to="/projects">
            <a class="row-text">Projects</a>
          </router-link>
        </div>
        <div class="projects-demo m-2 p-0">
          <b-carousel
            controls
            indicators
            :interval="4000"
          >
            <b-carousel-slide
              v-for="p in projects" :key="p.name"
              :caption="p.name"
            >
              <img slot="img" class="d-block w-100 img-fluid" :src="p.image">
            </b-carousel-slide>
          </b-carousel>
        </div>
      </div>
    </div>
    <div class="row full-row colors-5" id="me">
      <div class="m-auto">
        <h2 class="text-center">
          <router-link to="/about">
            <a>About Me</a>
          </router-link>
        </h2>
        <about/>
      </div>
    </div>
  </div>
</template>

<script>
import Projects from '~/components/Projects'
import About from '~/components/About'
import projects from '~/assets/js/projects'
import { faArrowAltCircleDown } from '@fortawesome/fontawesome-free-regular'

export default {
  components: {
    Projects,
    About
  },
  data () {
    return {}
  },
  computed: {
    projects () {
      return projects.slice(0, 5)
    },
    below () {
      return faArrowAltCircleDown
    }
  }
}
</script>

<style lang="scss" scoped>
.projects-demo {
  height: 85%;
  color: #333333;
  text-shadow: 1px 1px 2px #333;
}

.below {
  color: whitesmoke;
  position: absolute;
  top: 88%;
  left: 0;
  width: 100%;
}

.below-indicator {
  display: inline-block;
  color: whitesmoke !important;
}

.below-indicator:hover {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
  transition-duration: 100ms;
  color: #ead637 !important;
  cursor: pointer;
  height: 100%;
}
</style>
