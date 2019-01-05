<template>
  <main id="work">
    <h1 class="lg-heading">
      My
      <span class="text-secondary">Work</span>
    </h1>
    <h2 class="sm-heading">
      Here are a few of the most notable projects I worked on.
      Some of them are from <a href="https://www.msg-systems.ro/" class="msg" target="_blank">msg</a>,
      the company I work for, some others are from university,
      and others from my free time.
    </h2>
    <div class="flex-container flex-wrap">
      <Card
        v-for="p in projects"
        :key="p.title"
        class="flex-item project-bg mb-2"
        :style="!!p.image ? { backgroundImage: `url(/img/${p.image})` } : ''"
        :title="p.name"
        :content="p.description"
        :website="p.website"
        :source="p.source"
        :tags="p.tags"/>
    </div>
  </main>
</template>

<script>
import Card from '~/components/Card'
import projects from '~/assets/js/projects'

export default {
  name: 'ProjectPage',
  scrollToTop: true,
  components: {
    Card
  },
  data() {
    return {
      projects
    }
  },
  scrollToTop: true
}
</script>

<style lang="scss" scoped>
.msg {
  color: #841439;
}

.project-bg {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  z-index: -2;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: rgba(#555, 0.8);
  }
}
</style>
