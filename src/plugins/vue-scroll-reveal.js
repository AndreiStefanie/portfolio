import Vue from 'vue'
import VueScrollReveal from 'vue-scroll-reveal'

Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal',
  origin: 'right',
  duration: 500,
  scale: 1,
  distance: '20px',
  mobile: false,
  delay: 250
})
