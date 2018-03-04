<template>
  <div class="box" ref="box">
    <a class="tag" ref="tag">测试({{counts}})</a>
    <a class="tag" ref="tag">案例({{counts}})</a>
    <a class="tag" ref="tag">测试({{counts}})</a>
    <a class="tag" ref="tag">案例({{counts}})</a>
    <a class="tag" ref="tag">测试({{counts}})</a>
    <a class="tag" ref="tag">案例({{counts}})</a>
    <a class="tag" ref="tag">测试({{counts}})</a>
    <a class="tag" ref="tag">案例({{counts}})</a>
    <a class="tag" ref="tag">测试({{counts}})</a>
    <a class="tag" ref="tag">案例({{counts}})</a>
  </div>
</template>

<script>
export default {
  name: 'RotateTag',
  data () {
    return {
        counts:12
    }
  },
  methods: {
    start: function() {
        this.$nextTick(function() {
            var tagBox = document.getElementsByClassName("box")[0];
            var tagEle = document.getElementsByClassName("tag");
            var Radius = 100;
            var fallLength = 300;
            var tags = [];
            var angleX = Math.PI/300;
            var angleY = Math.PI/300;;
            var cx = tagBox.offsetWidth/2;
            var cy = tagBox.offsetHeight/2;
            var ex = tagBox.offsetLeft+document.body.scrollLeft+document.documentElement.scrollLeft;
            var ey = tagBox.offsetTop+document.body.scrollTop+document.documentElement.scrollTop;
            function init() {
                for(let i = 0; i < tagEle.length; i++) {
                    let k = (2*(i+1)-1)/tagEle.length - 1;
                    let a = Math.acos(k);
                    let b = a*Math.sqrt(tagEle.length*Math.PI);
                    let x = Radius*Math.sin(a)*Math.cos(b);
                    let y = Radius*Math.sin(a)*Math.sin(b);
                    let z = Radius*Math.cos(a);
                    let t = new tag(tagEle[i],x,y,z);
                    tags.push(t);
                    t.move();
                }
            }
                function animate() {
                    setInterval(function() {
                        rotateX();
                        rotateY();
                        for(var item in tags) {
                            tags[item].move();
                        }
                    }, 17)
                }
                function rotateX() {
                    let cos = Math.cos(angleX);
                    let sin = Math.sin(angleX);
                    for(var item in tags) {
                        let y1 = tags[item].y*cos-tags[item].z*sin;
                        let z1 = tags[item].z*cos+tags[item].y*sin;
                        tags[item].y = y1;
                        tags[item].z = z1;
                    }
                }
                function rotateY() {
                    let cos = Math.cos(angleY);
                    let sin = Math.sin(angleY);
                    for(var item in tags) {
                        let x1 = tags[item].x*cos-tags[item].z*sin;
                        let z1 = tags[item].z*cos+tags[item].x*sin;
                        tags[item].x = x1;
                        tags[item].z = z1;
                    }
                }
                var tag = function(ele, x, y, z) {
                    this.ele = ele;
                    this.x= x;
                    this.y= y;
                    this.z= z;
                }
                tag.prototype.move = function() {
                    let scale = fallLength/(fallLength-this.z);
                    let alpha = (this.z+Radius)/(2*Radius);
                    this.ele.style.fontSize = 14*scale + 'px';
                    this.ele.style.opacity = alpha+0.5;
                    this.ele.style.zIndex = parseInt(scale*100);
                    this.ele.style.filter = "alpha(opacity = "+(alpha+0.5)*100+")";
                    this.ele.style.left = this.x + cx - this.ele.offsetWidth/2 +"px";
                    this.ele.style.top = this.y+cy-this.ele.offsetHeight/2+"px";
                }
                tagBox.onmousemove = function(event) {
                    let x = event.clientX - ex - cx;
                    let y = event.clientY - ey - cy;
                    angleY = x*0.0001;
                    angleX = y*0.0001;
 		        }

                init();
                animate();
        });
    }
  },
  mounted: function() {
      this.start();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
    width: 300px;
    height: 300px;
    margin: 0 auto;
    position: relative;
}
.tag {
    display: block;
    position: absolute;
    left: 0px;
    top: 0px;
    color: #000;
    text-decoration: none;
    font-size: 15px;
    font-family: "微软雅黑";
    font-weight: bold;
}
.tag:hover {
    border: 1px solid rgb(177, 226, 177);
}
</style>
