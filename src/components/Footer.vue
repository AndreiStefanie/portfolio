<template>
  <div class="footer">
    <div class="left">&copy; Andrei Ștefănie</div>
    <div class="center">
      <a href="https://github.com/" target="_blank">
        <i class="fab fa-github fa-2x"></i>
      </a>
    </div>
    <div class="right text-muted">
      <nuxt-link to="this">About this</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.footer {
  text-align: center;
  display: flex;
  flex-flow: row nowrap;
  align-content: center;
  align-items: center;
  justify-content: space-evenly;

  .left {
    justify-self: flex-start;
    flex: 0 1 auto;
  }

  .center {
    justify-self: center;
    flex: 1 1 auto;
  }

  .right {
    justify-self: flex-end;
    flex: 0 1 auto;
  }
}
</style>
