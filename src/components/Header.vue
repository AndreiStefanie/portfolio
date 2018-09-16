<template>
  <header>
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
          @click.native="hideMenu">
          {{ p.name }}
        </nuxt-link>
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
