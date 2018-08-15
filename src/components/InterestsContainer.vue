<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-6 col-lg-4 col-xl-4 mt-3 mb-3"
        v-for="i in interests" :key="i.name">
        <b-card
          class="hoverable h-100">
          <h3 class="card-title">{{ i.name }}</h3>
          <p class="card-text" v-html="i.description"/>
          <template slot="footer">
            <div class="text-center text-muted">
              {{ i.category }}
            </div>
          </template>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InterestsContainer',
  props: {
    interests: Array
  }
}
</script>
