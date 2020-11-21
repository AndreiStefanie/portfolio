<template>
  <main>
    <Heading
      h1="About"
      h1E="Me"
      h2="A few words about me, my work, and my education"
    >
    </Heading>
    <div class="about-info">
      <div class="flex-container">
        <div class="w-33 flex-container">
          <img src="img/me.jpg" alt="Andrei Ștefănie" class="bio-image" />
        </div>
        <div class="bio flex-item">
          <h3 class="text-secondary">Summary</h3>
          <p>
            First and foremost, I am happy. Why? Because we live in a time with
            lots of opportunities. For example, someone with little experience
            in the tech industry has the opportunity to master a new technology
            or framework, thus giving him an advantage over people with way more
            experience.
          </p>
          <p>
            Secondly, I will seek and extract value whenever possible. Did we
            just finish a project? Great! Now let's see what we have learned
            from it, what parts of it can help us in the future projects, and
            last but not least, praise everyone who contributed to it. The last
            part is key as it provides us with the greatest value of them all -
            motivated and happy people.
          </p>
          <p>
            Regarding my work approach or style, I will show a big interest in
            whichever project I am involved (being it built with cutting-edge
            buzzwordy technology or not). Besides the main project(s), I will
            try to stay up to date on two fronts: the technologies that are
            close or part of the same industry as my main project(s) and the
            technologies that show potential.
          </p>
        </div>
      </div>

      <div class="flex-container flex-wrap">
        <Card
          class="flex-item"
          v-for="c in cards"
          :key="c.title"
          :title="c.title"
          :subtitle="c.subtitle"
          :content="c.content"
          :website="c.website"
        />
      </div>
    </div>
  </main>
</template>

<script>
import Card from '~/components/Card'
import Heading from '~/components/Heading'

export default {
  name: 'AboutPage',
  components: {
    Card,
    Heading
  },
  data() {
    return {
      cards: [
        {
          title: 'Babes-Bolyai - Faculty of Mathematics and Computer Science',
          subtitle: 'Guest lecturer and teching assistant',
          content: 'I teach and preach about cloud',
          website: 'https://www.ubbcluj.ro/en/facultati/matematica_informatica',
          image: 'https://www.msg-systems.ro/images/20200219_Logo_msg.svg'
        },
        {
          title: 'Clover Tech Romania',
          subtitle: 'Co-Founder and Architect',
          content:
            'Company started in associtation with 3 great friends as a vehicle for CharityDiscount',
          website: 'https://charitydiscount.ro/',
          image: '/img/clover.png'
        },
        {
          title: 'msg group',
          subtitle: 'Senior IT Consultant',
          content:
            'This is where I started my career and I am happy I did so. My main focus was on reinsurance software and input management. Currently building a marketplace platform.',
          website: 'https://www.msg-systems.ro/',
          image: 'https://www.msg-systems.ro/images/20200219_Logo_msg.svg'
        },
        {
          title: 'Technical University of Cluj-Napoca',
          subtitle: "Bachelor's Degree",
          content: '',
          website: 'https://www.msg-systems.ro/',
          image: 'https://www.msg-systems.ro/images/20200219_Logo_msg.svg'
        },
        {
          title: 'National College "Aurel Vlaicu" Orastie',
          subtitle: 'High school',
          content: '',
          website: 'https://www.msg-systems.ro/',
          image: 'https://www.msg-systems.ro/images/20200219_Logo_msg.svg'
        }
      ]
    }
  },
  scrollToTop: true
}
</script>
