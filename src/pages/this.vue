<template>
  <main>
    <Heading
      h1="About"
      h1E="This"
      h2="How I built this website"
    />
    <p>
      This site is built upon the excellent tutorial provided by <Link href="https://www.traversymedia.com/" text="Brad Traversy"/> in the following <Link href="https://www.youtube.com/watch?v=gYzHS-n2gqU" text="series"/>.
    </p>
    <p>
      After cloning the repo, I ported it to <Link href="https://nuxtjs.org/" text="Nuxt"/>.<br/>
      This served both as a challenge and an improvement (code duplication was the main issue I wanted to tackle - which is normal when not using any framework or templating engine).<br/>
      Also, this aligned nicely with the release of Nuxt <Link href="https://github.com/nuxt/nuxt.js/releases/tag/v2.0.0" text="v2.0.0"/>.
    </p>
    <p>
      The source code can be found <Link href="https://github.com/AndreiStefanie/portfolio/tree/modern" text="here"/>. Notice it is on the 'modern' branch - the master branch still has the previous version (based on bootstrap).
    </p>
  </main>
</template>

<script>
import Heading from '~/components/Heading'
import Link from '~/components/Link'

export default {
  name: 'this',
  components: {
    Heading,
    Link
  }
}
</script>
