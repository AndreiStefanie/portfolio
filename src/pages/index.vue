<template>
  <div class="container-fluid">
    <div class="row full-row colors-1">
      <h1 class="m-auto">Hi</h1>
    </div>
    <div class="row full-row">
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
            :interval="4000">
            <b-carousel-slide
              v-for="p in projects" :key="p.name"
              :caption="p.name"
              :text="p.description"
            >
              <img slot="img" width="1400" height="700" :src="p.image">
            </b-carousel-slide>
          </b-carousel>
        </div>
      </div>
    </div>
    <div class="row full-row colors-5">
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
</style>
