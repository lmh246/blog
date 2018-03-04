<template>
  <div class="app-header">
    <nav id="naver">
    <ul>
      <router-link to="/Home"><li><Icon type="ios-home" size=20></Icon><br>首页</li></router-link>
      <router-link to="/About"><li><Icon type="stats-bars" size=20></Icon><br>关于</li></router-link>
      <router-link to="/Classify"><li><Icon type="podium" size=20></Icon><br>分类</li></router-link>
      <router-link to="/Tags"><li><Icon type="pricetags" size=20></Icon><br>归档</li></router-link>
      <router-link to="/Search"><li><Icon type="search" size=20></Icon><br>搜索</li></router-link>
    </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'app-header'
}
</script>


<style scoped>
/*定义一个渐变动画*/
@keyframes colorChange {
  from {background: black;}
  to {background: #00a79d;}
}
#naver {
  margin-top: 20px;
}
#naver ul {
  font-size: 13px;
  margin: 0px 150px 0px 150px;
  height: 180px;
  text-align: center;
}
#naver ul li {
  position: relative;
  text-decoration: none;
  display: inline-block;
  padding: 10px 30px 10px 30px;
  background-color: black;
  cursor: pointer;
}
#naver ul li:hover {
  animation : colorChange 0.5s;
  animation-fill-mode: forwards;
}
#naver ul li a {
  color: white;
  text-decoration-line: none;
}
/*底边动画效果*/
#naver ul li::before, #naver ul li::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  height: 5px;
  width: 0;
}
#naver ul li::after {
  right: inherit;
  top: inherit;
  left: 0;
  bottom: 0;
}
#naver ul li:hover::before, #naver ul li:hover::after {
  width: 86px;
  transition: 800ms ease all;
  background: #3c763d;
}
</style>
