<template>
  <div class="container-fluid">
    <div class="row quarter-row row-4">
      <div class="m-auto">
        <a href="https://github.com/" target="_blank">
          <fa :icon="github" style="font-size:24px"/>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { faGithub } from '@fortawesome/fontawesome-free-brands'

export default {
  name: 'Footer',
  computed: {
    github () {
      return faGithub
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
