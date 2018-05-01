<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-6 col-lg-4 col-xl-4 mt-3 mb-3"
        v-for="p in projects" :key="p.name">
        <b-card
          class="hoverable h-100"
          header-class="card-header p-0">
          <template slot="header">
            <img class="card-img-top main-img card-img-fluid" :src="p.image">
          </template>
          <h3 class="card-title">{{ p.name }}</h3>
          <p class="card-text">
            {{ p.description }}
          </p>
          <template slot="footer">
            <h5 class="text-light">
              <b-badge v-for="(t, index) in p.tags" :key="index" class="m-1" variant="info">
                {{ t }}
              </b-badge>
            </h5>
          </template>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import projects from '~/assets/js/projects'

export default {
  name: 'Projects',
  props: {
    limit: {
      type: Number,
      default: null
    }
  },
  computed: {
    projects () {
      return this.limit ? projects.slice(0, this.limit) : projects
    }
  }
}
</script>

<style lang="scss" scoped>
.main-img {
  max-height: 250px;
  max-width: 100%;
  position: relative;
  background-size: auto;
  background-repeat: no-repeat;
  background-position: center center;
}
</style>
