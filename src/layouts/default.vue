<template>
  <div id="default">
    <navbar class="header"/>
    <nuxt class="content"/>
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
}

.header, .footer {
  flex: none;
}

.content {
  flex: 1 0 auto;
  align-self: center;
}
</style>
