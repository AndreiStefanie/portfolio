<template>
  <main>
    <Heading
      h1="Current"
      h1E="Interests"
      h2="Some of the domains, projects, and activities that I currently focus on"
    />
    <interests-container :interests="mostRecent" class="mb-4 mt-2"/>
  </main>
</template>

<script>
import interests from '~/assets/js/interests'
import InterestsContainer from '~/components/InterestsContainer'
import Heading from '~/components/Heading'

const threshold = 4

export default {
  name: 'Interests',
  components: {
    InterestsContainer,
    Heading
  },
  data() {
    return {
      interests: interests,
      showOlder: false
    }
  },
  computed: {
    mostRecent() {
      const recentInterests = [...this.interests].sort(
        (i1, i2) => new Date(i2.date) - new Date(i1.date)
      )
      return recentInterests.slice(0, threshold)
    },
    old() {
      return this.interests.slice(threshold)
    }
  },
  scrollToTop: true
}
</script>
