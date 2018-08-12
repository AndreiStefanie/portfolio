<template>
  <div class="container-fluid">
    <div class="row full-row colors-1 position-relative" id="welcome">
      <div class="col-12 m-auto">
        <h1 class="text-center">Hi</h1>
      </div>
      <div class="mx-auto col-12 col-sm-10 col-lg-8 col-xl-6">
        <b-card text-variant="dark" >
          <b-media>
            <div slot="aside" class="d-none d-md-block">
              <b-img rounded="circle" block center src="/me.jpg" thumbnail/>
            </div>
            <h5 class="mt-0 ">Welcome to my portfolio!</h5>
            <p>
              My name is Andrei Petru Ștefănie. I am an enthusiastic and positive person working in the tech industry.
              <br>
              If you want to read more about me, check out the <b-link to="about" class="link-text">About Me</b-link> page.
            </p>
            <p>
              I guess you are here to see the stuff I built or contributed to. For this, check out my <b-link to="projects" class="link-text">Projects</b-link>.
            </p>
            <p>
              Also, if you are looking to get started with something, but don't know what yet, check out my <b-link to="currently" class="link-text">Current Interests</b-link>.
            </p>
            <b-media>
              <fa :icon="quote" style="font-size:40px" slot="aside"/>
              <h5 class="mt-0">Favorite quote</h5>
              <p class="mb-0">
                <i>Good people learn from their mistakes, but the great ones learn also from the mistakes of others</i>
              </p>
              <small>Get started by checking out my <b-link to="#" class="link-text"><s>Blog</s></b-link> (upcomming)</small>
            </b-media>
          </b-media>
        </b-card>
      </div>
      <div class="below text-center">
        <div class="below-indicator">
          <transition name="rotate-out">
            <a v-if="!isBelow" href="#" v-scroll-to="'#below'" class="below-indicator">
              <fa :icon="below" style="font-size:40px"/>
            </a>
          </transition>
          <transition name="rotate-out">
            <a v-if="isBelow" href="#" v-scroll-to="'#welcome'" class="below-indicator">
              <fa :icon="up" style="font-size:40px"/>
            </a>
          </transition>
        </div>
      </div>
    </div>
    <div class="row half-row" id="below">
      <div class="m-auto col-12 col-sm-8 col-lg-6 text-center">
        <b-card>
          <p>While I grew up, the scroll wheel of 3 different <a href="https://www.vocabulary.com/dictionary/mouse" target="_blank">mouses</a> broke, so I tend to avoid using it.</p>
          <p>I agree that, in general, vertical space and scrolling is good and user friendly (especially on mobile devices), but for those people who have a broken scroll wheel, I decided to limit the vertical space of my portfolio.</p>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import Projects from "~/components/Projects";
import About from "~/components/About";
import projects from "~/assets/js/projects";
import { faArrowAltCircleDown, faArrowAltCircleUp } from "@fortawesome/fontawesome-free-regular";
import { faQuoteLeft } from "@fortawesome/fontawesome-free-solid";

export default {
  components: {
    Projects,
    About
  },
  created () {
    if(process.browser) {
      document.getElementById('default').addEventListener('scroll', this.handleScroll);
    }
  },
  destroyed () {
    if(process.browser) {
      document.getElementById('default').removeEventListener('scroll', this.handleScroll);
    }
  },
  data() {
    return {
      position: 0,
      isBelow: false
    };
  },
  methods: {
    handleScroll() {
      if(process.browser) {
        this.position = document.getElementById('default').scrollTop;
      }
    }
  },
  computed: {
    projects() {
      return projects.slice(0, 5);
    },
    below() {
      return faArrowAltCircleDown;
    },
    up() {
      return faArrowAltCircleUp;
    },
    quote() {
      return faQuoteLeft;
    }
  },
  watch: {
    position: function(newPosition) {
      this.isBelow = document.getElementById('welcome').scrollHeight / 2 <= newPosition;
    }
  }
};
</script>

<style lang="scss" scoped>
.projects-demo {
  height: 85%;
  color: #333333;
  text-shadow: 1px 1px 2px #333;
}

.below {
  color: whitesmoke;
  position: absolute;
  top: 88%;
  left: 0;
  width: 100%;
}

.below-indicator {
  position: absolute;
  display: inline-block;
  color: whitesmoke !important;
}

.below-indicator:hover {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
  transition-duration: 100ms;
  color: #ead637 !important;
  cursor: pointer;
  height: 100%;
}

.link-text {
  color: #643173;
  font-weight: 600;
}

.rotate-out-leave-active {
  -webkit-transition: all .8s ease-in-out;
  -ms-transition: all .8s ease-in-out;
  transition: all .8s ease-in-out;
}

.rotate-out-enter-active {
  -webkit-transition: all .8s steps(1, end);
  -ms-transition: all .8s steps(1, end);
  transition: all .8s steps(1, end);
}

.rotate-out-leave-to {
  transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
}

.rotate-out-enter {
  opacity: 0;
}
</style>
