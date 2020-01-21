<template>
	<div>
			<div class="heads">
					<svg class="Zi Zi--Star" fill="currentColor" viewBox="0 0 24 24" width="36" height="36" style="fill: #0084FF; margin-right: 20px;">
						<path d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z" fill-rule="evenodd"></path>
					</svg>
					<h3>热门收藏夹</h3>
			</div>
			<div class="container" style="width: 67;">
				<div class="row">
					<div class="col-12 " v-for="(item,index)  in favorites"  :key="index">
							<div class="fav flex">
								<div class="a-left">
									<p style="height: 24px; font-size: 16px; font-weight: 600;">我的收藏</p>
									<div class="flex" style="margin-top: 10px;padding-top: 5px;">
										<img :src="item.creatorAvatar" alt="" style="width: 30px;height: 30px; margin: 5px;">
										<p>{{item.creatorName}}</p>
										<p style="height: 21px; font-size: 14px;color: #999999;margin-left: 5px;">创建</p>
									</div>
									<div class="flex" style="margin-top: 10px;">
										<button class="btn_gz">关注收藏夹</button>
										<p style="margin-left: 16px;font-size: 14px;color: #999999;">{{item.followers}}人关注</p>
									</div>		
								</div>
								<div class="a-right flex">
									<div>
										<p style="line-height: 21px; font-weight: 600;">{{item.questionTitle}}</p>
										<p style="margin-top: 4px;height: 21px;line-height: 21px;color: #444;display: flex;">{{item.answerAuthorName}}: {{item.answerContent.slice(0,75) }}...</p>
									</div>
									<div class="flex" style="margin-top: 30px; margin-bottom: 10px; width: 100%;">
										<span style="height: 20px;line-height: 20px;padding: 0 4px;background-color: #f6f6f6;color: #999;font-size: 12px;margin-right: 8px;">回答</span>
										<p style="height: 17px; font-size: 12px; color: #999999;margin-right: 5px;">{{item.voteUpCount}}赞同</p>
										<p style="height: 17px; font-size: 12px; color: #999999;">{{item.commentCount}}评论</p>
									</div>
									<div>
										<p style="align-items: center;margin-top: 10px;height: 24px;font-size: 14px;color: #8590a6;font-weight: 600;">已收藏{{item.totalCount}}条内容  ></p>
									 </div>
								</div>
							</div>
						</div>
						
				</div>
				<div><a href="#top" style="position: fixed; bottom: 5%; right: 5%;"><i class="iconfont">&#xe633;</i></a></div>
			</div>
	</div>
</template>

<script>
	export default{
		name:'favorite',
		data(){
			return{
				favorites:[],
			};
		},
		created() {
			this.axios.get('http://localhost:8080/api/favorite/all').then(res =>{
				console.log(res);
				this.favorites = res.data.data;
			});
		},
		methods: {
		},					
	};
</script>

<style>
	.heads{
		background-color: white;
		height: 100px;
		font-size: 25px;
		font-weight: 600;
		display: flex;
		align-items: center;
		padding-left: 250px;
	}
	.container{
		margin-top: 8px;
	}
	.fav{
		padding: 24px;
		width: 1000px;
		height: 179px;
		background-color: #fff;
		-webkit-box-shadow: 0 1px 3px 0 rgba(26,26,26,.1);
		box-shadow: 0 1px 3px 0 rgba(26,26,26,.1);
		margin-bottom: 10px;
	}
	.a-left{
		width: 30%;
	}
	.a-right{
		width: 70%;
	}
</style>
