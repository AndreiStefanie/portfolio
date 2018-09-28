<template>
  <main>
    <Heading
      h1="Current"
      h1E="Interests"
      h2="Some of the domains, projects, and activities that I currently focus on"
    />
    <interests-container :interests="mostRecent" class="mb-4 mt-2"/>
    <!-- <b-btn v-if="old.length > 0" v-b-toggle.collapseI :variant="showOlder ? 'primary' : 'outline-primary'">
      Show older interests
    </b-btn>
    <b-collapse id="collapseI" class="mt-2" v-model="showOlder">
      <interests-container :interests="old"/>
    </b-collapse> -->
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
      interests: interests.sort((i1, i2) => i1.date > i2.date),
      showOlder: false
    }
  },
  computed: {
    mostRecent() {
      return this.interests.slice(0, threshold)
    },
    old() {
      return this.interests.slice(threshold)
    }
  },
  scrollToTop: true
}
</script>

<style>
</style>
