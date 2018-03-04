<template>
  <div class="home">
    <app-article></app-article>
    <page-fenye></page-fenye>
  </div>
</template>

<script>
import Page from './Page'
import Article from './Article'
export default {
  name: 'Home',
  components: {
    "page-fenye": Page,
    "app-article": Article
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
