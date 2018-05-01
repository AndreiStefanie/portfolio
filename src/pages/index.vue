<template>
  <div class="container-fluid">
    <div class="row full-row colors-1">
      <h1 class="m-auto">Hi</h1>
    </div>
    <div class="row full-row colors-3">
      <div class="m-auto">
        <h2 class="text-center">Projects</h2>
        <projects :limit="3" class="text-primary"/>
      </div>
    </div>
    <div class="row full-row colors-5">
      <div class="m-auto">
        <h2>About Me</h2>
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
