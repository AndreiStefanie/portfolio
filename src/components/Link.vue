<template>
  <a :href="href" target="_blank" rel="noopener" class="link-text">{{
    text
  }}</a>
</template>

<script>
export default {
  name: 'Link',
  props: {
    href: String,
    text: String
  }
}
</script>
