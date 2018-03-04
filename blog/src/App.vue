<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
    <app-backtop></app-backtop>
  </div>
</template>

<script>
import Header from './components/Header'
import Article from './components/Article'
import Footer from './components/Footer'
import BackTop from './components/BackTop'

export default {
  name: 'App',
  components: {
    "app-header": Header,
    "app-article": Article,
    "app-footer": Footer,
    "app-backtop": BackTop
  }
}
</script>

<style>

</style>
