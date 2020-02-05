<template>
	<div>
		<div v-for="(item, index) in recommenedList" :key="index" class="card-recommend flex">
			<div class="c-recomment-head">
				<h3 v-if="item.target.question == null">{{ item.target.title }}</h3>
				<h3 v-else class="m-2">{{ item.target.question.title }}</h3>
			</div>
			<div class="c-recomment-body">
				<div v-if="!flags[index]">
									<div class="row" v-if="item.target.thumbnail">
										<div class="col-4"><img :src="item.target.thumbnail"/></div>
										<div class="col-8 flex">
											<p class="ellipsis-4">{{ item.target.author.name }}:{{ item.target.excerpt }}</p>
											<span class="read-more" @click="change(index)">
												<span class="deep-blue">阅读全文</span>
												<svg class="deep-blue-icon" viewBox="0 0 24 24" width="24" height="24">
													<path
														d="M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z"
														fill-rule="evenodd"
													></path>
												</svg>
											</span>
										</div>
									</div>
								 	<div class="flex" v-else>
											<p class="ellipsis">{{ item.target.author.name }}:{{ item.target.excerpt }}</p>
											<span class="read-more" @click="change(index)">
												<span class="deep-blue">阅读全文</span>
												<svg class="deep-blue-icon" viewBox="0 0 24 24" width="24" height="24">
													<path
														d="M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z"
														fill-rule="evenodd"
													></path>
												</svg>
											</span> 
									</div> 
								</div>
				<!-- 点击“阅读全文”显示 -->
								<div v-if="flags[index]" style="padding: 10px;">
									<div style="display: inline-flex;">
										<img :src="item.target.author.avatar_url" class="avatar" />
										<h4>{{ item.target.author.name }}</h4>
										<span>{{ item.target.author.headline }}</span>
									</div>
									<p class="light-grey">{{ item.target.voteup_count }}人赞同了该回答</p>
									<div v-html="item.target.content" class="content"></div>
								</div>
			</div>
			<div class="c-recommend-foot sticky-bar">
				<ul class="flex" :class="{ active: flags[index] }">
								<button class="blue-txt-btn">
									<svg class="blue-icon" viewBox="0 0 24 24" width="10" height="10">
										<path
											d="M2 18.242c0-.326.088-.532.237-.896l7.98-13.203C10.572 3.57 11.086 3 12 3c.915 0 1.429.571 1.784 1.143l7.98 13.203c.15.364.236.57.236.896 0 1.386-.875 1.9-1.955 1.9H3.955c-1.08 0-1.955-.517-1.955-1.9z"
											fill-rule="evenodd"
										></path>
									</svg>
									赞同{{ item.target.voteup_count }}
								</button>
								<button class="blue-txt-btn">
									<svg class="blue-icon" viewBox="0 0 24 24" width="10" height="10">
										<path
											d="M20.044 3H3.956C2.876 3 2 3.517 2 4.9c0 .326.087.533.236.896L10.216 19c.355.571.87 1.143 1.784 1.143s1.429-.572 1.784-1.143l7.98-13.204c.149-.363.236-.57.236-.896 0-1.386-.876-1.9-1.956-1.9z"
											fill-rule="evenodd"
										></path>
									</svg>
								</button>
				
								<li class="light-grey">
									<svg class="grey-icon" viewBox="0 0 24 24" width="1.2em" height="1.2em">
										<path
											d="M10.241 19.313a.97.97 0 0 0-.77.2 7.908 7.908 0 0 1-3.772 1.482.409.409 0 0 1-.38-.637 5.825 5.825 0 0 0 1.11-2.237.605.605 0 0 0-.227-.59A7.935 7.935 0 0 1 3 11.25C3 6.7 7.03 3 12 3s9 3.7 9 8.25-4.373 9.108-10.759 8.063z"
											fill-rule="evenodd"
										></path>
									</svg>
									{{ item.target.comment_count }}条评论
								</li>
								<li class="light-grey">
									<svg class="grey-icon " viewBox="0 0 24 24" width="1.2em" height="1.2em">
										<path
											d="M2.931 7.89c-1.067.24-1.275 1.669-.318 2.207l5.277 2.908 8.168-4.776c.25-.127.477.198.273.39L9.05 14.66l.927 5.953c.18 1.084 1.593 1.376 2.182.456l9.644-15.242c.584-.892-.212-2.029-1.234-1.796L2.93 7.89z"
											fill-rule="evenodd"
										></path>
									</svg>
									分享
								</li>
								<li class=" light-grey">
									<svg class="grey-icon " viewBox="0 0 24 24" width="1.2em" height="1.2em">
										<path
											d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z"
											fill-rule="evenodd"
										></path>
									</svg>
									收藏
								</li>
								<li class=" light-grey">
									<svg class="grey-icon " viewBox="0 0 24 24" width="1.2em" height="1.2em">
										<path
											d="M2 8.437C2 5.505 4.294 3.094 7.207 3 9.243 3 11.092 4.19 12 6c.823-1.758 2.649-3 4.651-3C19.545 3 22 5.507 22 8.432 22 16.24 13.842 21 12 21 10.158 21 2 16.24 2 8.437z"
											fill-rule="evenodd"
										></path>
									</svg>
									喜欢
								</li>
								<li class="light-grey">
									<svg class="grey-icon" viewBox="0 0 24 24" width="1.2em" height="1.2em">
										<path d="M5 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill-rule="evenodd"></path>
									</svg>
								</li>
								<li class="light-grey" @click="change(index)" v-if="flags[index]">
									<svg class="grey-icon up" viewBox="0 0 24 24" width="24" height="24">
										<path
											d="M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z"
											fill-rule="evenodd"
										></path>
									</svg>
									收起
								</li>
							</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'recommoned',
	data() {
		return {
			recommenedList: [],
			flags: []
		};
	},
	mounted() {
		window.addEventListener('scroll', this.scrollToTop);
	},
	created() {
		this.axios.get('/api/recommend').then(res => {
			this.recommenedList = res.data.data.data;
			//定义一个正则规则，用来处理富文本中的图片
			const regex = new RegExp('<img', 'gi');
			for (var i = 0; i < this.recommenedList.length; i++) {
				//给每篇文章添加一个标记，默认为false，表示未展开全文
				this.flags.splice(i, 0, false);
				//将富文本中的图片处理大小
				this.recommenedList[i].target.content = this.recommenedList[i].target.content.replace(regex, `<img style="max-width: 100%; height: auto"`);
			}
		});
	},
	methods: {
		//展开、收起的切换
		change(index) {
			//将flag数组索引为index的项置反，注意splice用法，不要直接给数组元素赋值（无法监听flag变化）
			this.flags.splice(index, 1, !this.flags[index]);
		}
	}
};
</script>
<style lang="scss" scoped>
.card-recommend{
	     background: #fff;
		box-shadow: 0 2upx 4upx rgba(0, 0, 0, .3);
		padding: 20px;
		height: 100%;
		border-bottom: 1px solid #f0f2f7;
}
.c-recomment-head{
	cursor: pointer;
}
.c-recomment-body{
	img{
		width: 100%;
		height: 100%;
	}
	.col-8{
		padding-left: 20px;
	}
	margin-top: 20px;
	line-height: 25px;
	cursor: pointer;
}
.c-recommend-foot{
	font-size: 15px;
	line-height: 1.67;
	cursor: pointer;
	align-items: center;
	padding: 10px 20px;
	margin: 0 -20px -10px;
	color: #646464;
	background: #fff;
	clear: both;
}
.blue-txt-btn{
	margin-right: 4px;
	font-size: 14px;
	text-align: center;
	border: 1px solid;
	border-radius: 3px;
	color: #0084ff;
	background: rgba(0,132,255,.1);
	border-color: transparent;
	line-height: 30px;
	padding: 0 12px;
	fill: #0084FF;
}
.light-grey{
	margin: 0;
	color: #8590a6;
	text-align: center;
	background-color: transparent;
	margin-left: 24px;
	font-size: 14px;
	padding: 0;
	.grey-icon{
		fill: #8590a6;
	}
}
/* 两行省略号 */
.ellipsis {
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden;
}
/* 四行省略号 */
.ellipsis-4 {
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 4;
	overflow: hidden;
}
.read-more {
	position: relative;
	cursor: pointer;
	.deep-blue-icon {
		position: absolute;
		bottom: -2px;
		fill: #0084FF;
	}
	.deep-blue{
		color: #0084FF;
	}
}
.avatar {
	width: 12px;
	height: 12px;
	border-radius: 50%;
	background-color: #fff;
}
.sticky-bar {
	position: sticky;
	bottom: 0;
	background-color: #fff;
}
.active {
	width: 100%;
	height: 50px;
	border: 1px solid #ddd;
	border-radius: 3px;
}
.up {
	transform: rotate(180deg);
}
</style>