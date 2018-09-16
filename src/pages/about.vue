<template>
  <main>
    <h1 class="lg-heading">
      About
      <span class="text-secondary">Me</span>
    </h1>
    <h2 class="sm-heading">
      A few words about me, my work, and my education
    </h2>
    <div class="about-info">
      <div class="flex-container">
        <div class="w-33 flex-container">
          <img src="img/me.jpg" alt="Andrei Ștefănie" class="bio-image">
        </div>
        <div class="bio flex-item">
          <h3 class="text-secondary">Summary</h3>
          <p>
            First and foremost, I am happy. Why? Because we live in a time with lots of opportunities. For example, someone with little experience in the tech industry has the opportunity to master a new technology or framework, thus giving him an advantage over people with way more experience.
          </p>
          <p>
            Secondly, I will seek and extract value whenever possible. Did we just finish a project? Great! Now let's see what we have learned from it, what parts of it can help us in the future projects, and last but not least, praise everyone who contributed to it. The last part is key as it provides us with the greatest value of them all - motivated and happy people.
          </p>
          <p>
            Regarding my work approach or style, I will show a big interest in whichever project I am involved (being it built with cutting-edge buzzwordy technology or not). Besides the main project(s), I will try to stay up to date on two fronts: the technologies that are close or part of the same industry as my main project(s) and the technologies that show potential.
          </p>
        </div>
      </div>

      <div class="flex-container flex-wrap">
        <Card class="flex-item" v-for="c in cards" :key="c.title"
          :title="c.title"
          :subtitle="c.subtitle"
          :content="c.content"
          :links="c.links"/>
      </div>
    </div>
  </main>
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'AboutPage',
  components: {
    Card
  },
  data() {
    return {
      cards: [
        {
          title: 'msg group',
          subtitle: 'Current work place',
          content: 'This is where I started my career and I am happy I did so. My main focus is on reinsurance software.',
          links: [
            {
              url: '',
              icon: ''
            }
          ]
        },
        {
          title: 'Technical University of Cluj-Napoca',
          subtitle: 'Bachelor\'s Degree',
          content: '',
          links: [
            {
              url: '',
              icon: ''
            }
          ]
        },
        {
          title: 'National College \"Aurel Vlaicu\" Orastie',
          subtitle: 'High school',
          content: '',
          links: [
            {
              url: '',
              icon: ''
            }
          ]
        }
      ]
    }
  },
  scrollToTop: true
}
</script>
