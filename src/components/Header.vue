<template>
  <header>
    <div class="signature" v-if="$route.path!=='/'">
      <nuxt-link to="/">Andrei
        <span class="text-secondary">Ștefănie</span>
      </nuxt-link>
    </div>
    <div :class="[ 'menu-btn', { 'close': showMenu } ]" @click="toggleMenu">
      <div class="btn-line"></div>
      <div class="btn-line"></div>
      <div class="btn-line"></div>
    </div>

    <nav :class="[ 'menu', { 'show': showMenu } ]">
      <div :class="[ 'menu-branding', { 'show': showMenu } ]">
        <div class="portrait"></div>
      </div>
      <ul :class="[ 'menu-nav', { 'show': showMenu } ]">
        <nuxt-link
          v-for="p in pages"
          :key="p.name"
          :to="p.link"
          tag="a"
          :class="[ 'nav-item', { 'current': p.link===$route.path }, 'nav-link', { 'show': showMenu } ]"
          @click.native="hideMenu"
        >{{ p.name }}</nuxt-link>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      showMenu: false,
      pages: [
        {
          name: 'Home',
          link: '/'
        },
        {
          name: 'About Me',
          link: '/about'
        },
        {
          name: 'My Work',
          link: '/projects'
        },
        {
          name: 'Current Interests',
          link: '/currently'
        }
      ]
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
    hideMenu() {
      this.showMenu = false
    }
  }
}
</script>

<style lang="scss" scoped>
.signature {
  position: absolute;
  z-index: 3;
  left: 2rem;
  top: 2rem;
  font: italic 1.1rem serif;
}
</style>
