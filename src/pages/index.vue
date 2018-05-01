<template>
  <div class="container-fluid">
    <div class="row full-row colors-1">
      <h1 class="m-auto">Hi</h1>
    </div>
    <div class="row full-row colors-3">
      <div class="m-auto">
        <h2 class="text-center">
          <router-link to="/projects" class="text-light">
            <a>Projects</a>
          </router-link>
        </h2>
        <projects v-scroll-reveal :limit="3" class="text-primary d-none d-lg-block"/>
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

export default {
  components: {
    Projects,
    About
  }
}
</script>
