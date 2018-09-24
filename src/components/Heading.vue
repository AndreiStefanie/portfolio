<template>
  <div>
    <h1 class="lg-heading">
      {{ h1 }}
      <span class="text-secondary">
        {{ h1E }}
      </span>
    </h1>
    <h2 class="sm-heading">
      {{ h2 }}
    </h2>
  </div>
</template>

<script>
export default {
  name: 'Heading',
  props: {
    h1: String,
    h1E: String,
    h2: String
  }
}
</script>
