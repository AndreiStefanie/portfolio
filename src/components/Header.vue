<template>
  <b-navbar toggleable="md" type="dark" variant="primary" sticky>
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand to="/" class="text-warning">
      <b>Work in progress</b>
    </b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item
          class="ml-4"
          v-for="p in pages"
          :key="p.name"
          :to="p.link"
        >
          {{ p.name }}
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      pages: [
        {
          name: 'Projects',
          link: '/projects'
        },
        {
          name: 'About Me',
          link: '/about'
        },
        {
          name: 'Current Interests',
          link: '/currently'
        }
      ]
    }
  }
}
</script>
