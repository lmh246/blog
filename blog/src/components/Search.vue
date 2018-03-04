<template>
  <div class="Search">
    <div class="search-header">
      <span class="search-icon"><Icon type="search" size="30"></Icon></span>
      <span class="search-text"><input type="text"></span>
      <span class="close-icon"><Icon type="backspace" size="30"></Icon></span>
    </div>
    <div class="search-result">
      <ul>
        <li><a>文章一</a></li>
        <li><a>文章一</a></li>
        <li><a>文章一</a></li>
        <li><a>文章一</a></li>
        <li><a>文章一</a></li>
        <li><a>文章一</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Search {
  background: #333;
  width: 800px;
  height: 600px;
  margin: 0 auto;
  text-align: center;
}
.search-header {
  width: 800px;
  height: 50px;
  background: #262a3073;
  position: relative;
}
.search-icon {
  display: block;
  float: left;
  width: 50px;
  height: 50px;
  padding: 10px 10px;
  text-align: center;
}
.close-icon {
  display: block;
  float: right;
  width: 50px;
  height: 50px;
  padding: 10px 10px;
  text-align: center;
}
.search-text input {
  width: 600px;
  height: 50px;
  border-radius: 42px;
  border: 2px solid #324B4E;
  background: rgb(231, 229, 225);
  outline: none;
  transition: .3s linear;
}
.search-text input:focus {
  width: 700px;
  border: 2px solid rgb(152, 152, 233);
}
.search-result {
  width: 800px;
  background: grey;
}
.search-result ul {
  padding: 15px 50px;
}
.search-result li {
  width: 600px;
  height: 50px;
  padding: 10px 5px;
  font-size: 18px;
  text-align: left;
  border-bottom: 2px dashed black;

}

</style>