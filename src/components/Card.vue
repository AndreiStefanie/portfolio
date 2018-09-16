<template>
  <div class="job">
    <h3>{{ title }}</h3>
    <h5>{{ subtitle }}</h5>
    <p v-html="content"></p>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: String,
    subtitle: String,
    content: String,
    links: Array
  }
}
</script>
