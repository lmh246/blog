<template>
    <div>
        <div v-for = "item in article">
            <article class="container">
                <h1>{{item.title}}</h1>
                <div class="articleInfo">
                    <Row :gutter="16">
                        <Col span="6">
                            <div>发表于: {{item.created_at}}</div>
                        </Col>
                        <Col span="6">
                            <div>分类于: 暂补</div>
                        </Col>
                        <Col span="6">
                            <div>阅读次数: {{item.pv}} 次</div>
                        </Col>
                        <Col span="6">
                            <div>留言: 暂补 条</div>
                        </Col>
                    </Row>
                </div>
                <div class="articleContent">
                    <p>{{item.content}}</p>
                </div>
                <router-link to="/ArticleOne"><Button class="readMore" :articleId='item._id' @click="getData($event)">阅读全文《</Button></router-link>
            </article>
        </div>
    </div>
</template>

<script>
export default {
  name: 'app-article',
  data () {
    return {
        article: [],
        articleId: ''
    }
  },
  mounted: function() {
      var self = this;
      self.axios.get("http://localhost:3000/admin/posts")
      .then(function(response) {
           self.article = response.data;
           console.log(response.data) 
      })
  },
  methods: {
    getData:function (e) {
             this.articleId = e.target.getAttribute('articleId');
             console.log(this.articleId)
         }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*文章信息*/
.container {
    width: 800px;
    margin: 0 auto;
    border-bottom: 2px dashed black;
    padding-bottom: 50px;
}
.container a {
    text-decoration-line: none;
}
.container a h1 {
    position: relative;
    text-align: center;
    font-size: 22px;
    font-family: 'Lato', "PingFang SC", "Microsoft YaHei";
    color: black;
    padding: 50px 0 20px 0;
}

/*给标题添加动画效果*/
.container a h1:hover::before, #container a h1:hover::after {
    position: absolute;
}
.container a h1:hover::before {
    content: "《";
    margin-left: -30px;
}
.container a h1:hover::after {
    content: "》";
    margin-left: 10px;
}
/*文章信息*/
.articleInfo {
    margin: 0 auto;
    width: 550px;
    font-size: 12px;
    color: #999;
    text-align: center;
}

/*文章内容*/

.articleContent {
    font-size: 15px;
    color: #555;
    padding: 20px 5px 20px 5px;
    text-align:justify;/*设置文本两端对齐*/
    line-height: 25px;
}

/*更多信息*/
.readMore {
    width: 115px;
    height: 30px;
    text-align: center;
    color: white;
    background: black;
    border: 1px solid black;
    display: block;
    margin: 0 auto;
}

.readMore:hover{
    color: black;
    background: white;
    transition: 500ms all;
}

</style>
