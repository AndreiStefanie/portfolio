<template>
  <div class="job card">
    <h3 class="card-title">{{ title }}</h3>
    <h5 class="card-title">{{ subtitle }}</h5>
    <p class="card-content" v-html="content"></p>
    <div class="tags-container card-tags">
      <span v-for="t in tags" :key="t" class="tag">{{ t }}</span>
    </div>
    <div class="card-links">
      <a
        v-if="website"
        class="website card-link"
        :href="website"
        target="_blank"
        rel="noopener"
      >
        <i class="fas fa-external-link-square-alt"></i>
      </a>
      <a
        v-if="source"
        class="source card-link"
        :href="source"
        target="_blank"
        rel="noopener"
      >
        <i class="fab fa-github"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: String,
    subtitle: String,
    content: String,
    website: String,
    source: String,
    tags: Array
  }
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  position: relative;
  z-index: 2;
  flex-direction: column;
  align-content: center;
}

.card-title {
  flex: 0 1 1fr;
  order: 1;
}

.card-content {
  flex: 1 0 2fr;
  order: 2;
}

.card-tags {
  flex: 0 1 1fr;
  order: 3;
  justify-self: flex-end;
}

.tags-container {
  position: relative;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: flex-end;
  text-align: center;
}

.tag {
  background-color: #eece1a;
  color: black;
  padding: 0.2rem 0.3rem;
  margin: 0.7rem 0.3rem;
  white-space: nowrap;
  font: italic 0.8rem serif;
}

.card-links {
  position: absolute;
  top: 10px;
  right: 10px;
}

.card-link {
  cursor: pointer;
  margin: 0.4rem;
  position: relative;
  z-index: 4;
}

.website {
  position: relative;
}
</style>
