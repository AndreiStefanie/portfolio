<template>
  <div id="default">
    <navbar class="header"/>
    <div class="content">
      <nuxt/>
    </div>
    <footer-bar class="footer"/>
  </div>
</template>

<script>
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export default {
  components: {
    navbar: Header,
    footerBar: Footer
  }
};
</script>

<style lang="scss" scoped>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

#default {
  min-height: 100vh;
  height: 1px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.header, .footer {
  flex: none;
}

.header {
  box-shadow: 2px 0 10px 3px rgba(0,0,0,0.3);
}

.footer {
  box-shadow: -2px 0 10px 3px rgba(0,0,0,0.3);
  padding: 1rem 0;
}

.content {
  flex: 1 1 auto;
  z-index: 0;
}

/* width */
::-webkit-scrollbar {
    width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #555;
}
</style>
