<template>
  <div class="flex-container flex-wrap">
    <Card
      v-for="i in interests"
      :key="i.title"
      class="flex-item mb-2"
      :title="i.name"
      :subtitle="i.category"
      :content="i.description"
      :links="i.links"/>
  </div>
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'InterestsContainer',
  props: {
    interests: Array
  },
  components: {
    Card
  }
}
</script>
