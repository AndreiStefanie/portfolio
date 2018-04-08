<template>
  <div class="container-fluid">
    <div class="row full-row row-1">
      <h1 class="m-auto">Hi</h1>
    </div>
    <div class="row full-row row-3">
      <projects class="m-auto"/>
    </div>
    <div class="row full-row row-5">
      <about class="m-auto"/>
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
