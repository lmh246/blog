<template>
    <div class="articleOne">
        <h1>文章标题</h1>
        <p>文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容</p>

        <div class="comment">
            <h3>留言</h3>
            <span class="dash"></span>
            <ul class="comments">
                <li><p>留言1留言1留言1留言1留言1留言1留言1留言1</p><p>2017.1.1</p></li>
                <li><p>留言1留言1留言1留言1留言1留言1留言1留言1</p><p>2017.1.1</p></li>
            </ul>

            <form class="commentSub">
            	<textarea rows="10" cols="40"></textarea>
            	<input type="submit" value="留言">
            </form>
        </div>
    </div>
</template>

<script>
export default {
  name: 'articleOne'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.articleOne {
		width: 800px;
		margin:0 auto;
	}
	.articleOne h1 {
		text-align: center;
	}
	.comment {
		width:800px;
		border: 1px solid black;
	}
	.dash {
		margin-left: 50px;
		display: block;
		width: 700px;
		height: 1px;
		border: 1px dashed black;
	}

	.articleOne h3 {
		margin-left: 50px;
	}

	.comments li {
		list-style: none;
		margin-top: 10px;
		padding: 10px;
	}
	.commentSub {
		margin-left: 50px;
		margin-top: 10px;
		padding-bottom: 20px;
	}
</style>
