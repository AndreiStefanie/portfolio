<template>
  <div class="container pt-4 pb-4">
    <div class="row">
      <h2 class="m-1">Projects</h2>
      <h4 class="m-1">
        Here are a few of the most notable projects I worked on.
        Some of them are from <a href="https://www.msg-systems.ro/" class="msg" target="_blank">msg</a>,
        the company I work for, some others are from university,
        and others from my free time.
      </h4>
      <projects/>
    </div>
  </div>
</template>

<script>
import Projects from '~/components/Projects'

export default {
  name: 'ProjectPage',
  components: {
    Projects
  }
}
</script>

<style lang="scss" scoped>
.msg {
  color: #841439;
}
</style>
