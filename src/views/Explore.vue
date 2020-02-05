<template>
	<div>
		<div class="container">
			<div class="row">
				<div class="banner">
					<svg class="Zi Zi--LabelSpecial" fill="currentColor" viewBox="0 0 24 24" width="36" height="36" style="fill: #0084FF;margin-right: 10px;">
					<path d="M7.667 3.667h11.466a1.2 1.2 0 0 1 1.2 1.2v13.066a2.4 2.4 0 0 1-2.4 2.4H6.467V4.867a1.2 1.2 0 0 1 1.2-1.2zM4.2 9.619h1.689v10.714H5.4a2.4 2.4 0 0 1-2.4-2.4V10.82a1.2 1.2 0 0 1 1.2-1.2zm5.178-2.38a.6.6 0 0 0-.6.6v.585a.6.6 0 0 0 .6.6h8.044a.6.6 0 0 0 .6-.6v-.586a.6.6 0 0 0-.6-.6H9.378zm0 3.57a.6.6 0 0 0-.6.6v.586a.6.6 0 0 0 .6.6h8.044a.6.6 0 0 0 .6-.6v-.585a.6.6 0 0 0-.6-.6H9.378zm0 3.572a.6.6 0 0 0-.6.6v.586a.6.6 0 0 0 .6.6h4.578a.6.6 0 0 0 .6-.6v-.586a.6.6 0 0 0-.6-.6H9.378z" fill-rule="evenodd">
					</path>
					</svg>
					<h3>最新专题</h3>
				</div>
				<div class="col-6 " v-for="(item,index) in specials" :key="index">
					<div class="card">
						<div class="card-head"><img :src="item.banner" alt=""></div>
						<div class="card-body flex">
							<div class="left">
							<h3>{{item.title}}</h3>
							<p class="meta">{{item.updated}}更新,{{item.viewCount}}次浏览</p>
							</div>
							<div class="right">
								<button class="btn_gz">关注专题</button>
							</div>
						</div>
						<div class="card-buttom">
						<div class="con">
							<div v-for="(section,index) in sections" :key="index" class="con-body">
								<span class="con-name">{{section.name}}</span>
								<span class="con-des">{{section.description}}</span>
							</div>
						</div>
						</div>
						</div>
					</div> 
					<div class="center"><router-link to="/special/all" class="l">查看更多专题 ></router-link></div>
			</div>
			<div class="row">
				<div class="banner">
					<svg class="Zi Zi--LabelRoundtable" fill="currentColor" viewBox="0 0 24 24" width="36" height="36" style="fill: #0084FF;margin-right: 20px;">
						<path d="M12 21.333a9.333 9.333 0 1 1 0-18.666 9.333 9.333 0 0 1 0 18.666zm-.66-11.287c.332.385.609.77.775 1.21.055-.054.665-.99.72-1.706.055-.385.126-1.616-.443-2.367-.443-.496-1.219-.77-1.884-.55a1.788 1.788 0 0 0-1.33 2.036c.887.276 1.607.771 2.161 1.377zm-1.33 1.541c.443-.055.941-.11 1.44 0 0-.055-.484-.936-1.108-1.486-.665-.496-1.33-.973-2.216-.771-.72.11-1.723.77-1.55 2.092.11.606.553 1.101 1.162 1.321.61-.605 1.44-1.046 2.272-1.156zm2.714.165c.056 0 1.164.055 1.828-.165.72-.275 1.412-.68 1.773-1.541.11-.276.23-1.248-.443-1.872-.72-.716-1.717-.716-2.438-.165.222.825.063 1.966-.11 2.532-.103.348-.333.88-.61 1.211zm-1.44.55c-.056 0-1.33.056-1.828.221-.72.275-1.447.668-1.773 1.541-.11.276-.21 1.26.443 1.872.665.661 1.718.661 2.438.11-.295-.811-.166-1.761.055-2.477.166-.495.388-.936.665-1.266zm5.041-.99c-.665.605-1.44.99-2.327 1.211-.443.055-.941.11-1.44 0 0 .055.554.991 1.108 1.431.665.496 1.385.771 2.216.771.72-.11 1.678-.692 1.551-2.092-.055-.605-.554-1.101-1.108-1.321zm-3.656 2.642a3.475 3.475 0 0 1-.776-1.156c-.055.055-.665.991-.72 1.707-.055.385-.101 1.506.499 2.312.443.496 1.218.77 1.883.55.887-.275 1.496-1.1 1.33-2.036a5.38 5.38 0 0 1-2.216-1.377z" fill-rule="evenodd">
					</path></svg>
					<h3>圆桌讨论</h3>
				</div>
				<div class="col-6" v-for="(item,index) in roundTables" :key="index">
					<div class="card">
						<div class="cards-head" ref="box">
							<div class="card-background">
								<img :src="item.banner" alt="" ref="img">
							</div>
							<div class="card-main">
								<p class="c-name">{{item.name}}</p>
								<p class="c-des">进入21世纪以后，随着科学技术特别是计算机技术、数字化与图像识别技术、人工神经网络技术和机电一体化技术的大发展，无损检测技术获得了快</p>
							</div>
							<div class="card-btn">
								<button class="btn_gz">关注圆桌</button>
							</div>
							</div>
						<div class="card-body flex">
							<div v-for="(round,index) in rounds" :key="index" class="con-body">
								<div class="c-body">
									<span class="c-t">{{round.t1}}</span>
									<span class="c-answer">2个回答</span>
								</div>
								<div class="c-body">
									<span class="c-t">{{round.t2}}</span>
									<span class="c-answer">1个回答</span>
								</div>
								<div class="c-body">
									<span class="c-t">{{round.t3}}</span>
									<span class="c-answer">8个回答</span>
								</div>
							</div>
						</div>
					</div>
					 </div>
					<div class="center"><router-link to="/roundTable/all" class="l">查看更多圆桌></router-link></div>
			</div>
			<div class="row">
				<div class="banner">
					<svg class="Zi Zi--Star" fill="currentColor" viewBox="0 0 24 24" width="36" height="36" style="fill: #0084FF; margin-right: 20px;">
						<path d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z" fill-rule="evenodd"></path>
					</svg>
					<h3>热门收藏夹</h3>
				</div>
				<div class="col-6" v-for="(item,index) in favorites" :key="index">
					<div class="colltion">
						<div class="colltion-head flex" style="border-bottom: 1px solid #ebebeb;">
							<div class="c-left" style="width: 75%;">
								<p style="font-size: 20px; line-height: 28px; height: 28px; font-weight: 600;margin-bottom: 10px; ">{{item.title}}</p>
								<div style="display: flex; align-items: center; margin-bottom: 10px;">
									<img :src="item.creatorAvatar" alt="" style="width: 40px;height: 40px; margin: 5px;">
									<p>{{item.creatorName}}</p>
									<p style="font-size: 14px; color: #999999;margin-left: 4px; font-weight: 400;">创建</p>
									<p style="margin-left: 12px;padding-left: 12px;height: 19px;line-height: 19px;font-size: 14px;color: #999;border-left: 2px solid #ebebeb;">{{item.followers}}人关注</p>
								</div>
							</div>
							<div class="c-right" style="width: 25%;">
								<button class="btn_gz" style="margin-bottom: 45px;">关注收藏夹</button>
							</div>
							</div>
						<div class="colltion-body flex" style="padding-top: 20px;">
							<div>
								<p style="line-height: 21px; font-weight: 600;">{{item.questionTitle}}</p>
								<p style="margin-top: 4px;height: 21px;line-height: 21px;color: #444;white-space: nowrap;">{{item.answerAuthorName}}: {{item.answerContent.slice(0,22) }}...</p>
							</div>
							<div class="flex" style="margin-top: 10px; margin-bottom: 10px; width: 100%;">
								<span style="height: 20px;line-height: 20px;padding: 0 4px;background-color: #f6f6f6;color: #999;font-size: 12px;margin-right: 8px;">文章</span>
								<p style="height: 17px; font-size: 12px; color: #999999;margin-right: 5px;">{{item.voteUpCount}}赞同</p>
								<p style="height: 17px; font-size: 12px; color: #999999;">{{item.commentCount}}评论</p>
							</div>
							<div>
								<p style="line-height: 21px; font-weight: 600;">{{item.questionTitle}}</p>
								<p style="margin-top: 4px;height: 21px;line-height: 21px;color: #444;white-space: nowrap;">{{item.answerAuthorName}}: {{item.answerContent.slice(0,22) }}...</p>
							</div>
							<div class="flex" style="margin-top: 10px; margin-bottom: 10px; width: 100%;">
								<span style="height: 20px;line-height: 20px;padding: 0 4px;background-color: #f6f6f6;color: #999;font-size: 12px;margin-right: 8px;">文章</span>
								<p style="height: 17px; font-size: 12px; color: #999999;margin-right: 5px;">{{item.voteUpCount}}赞同</p>
								<p style="height: 17px; font-size: 12px; color: #999999;">{{item.commentCount}}评论</p>
							</div>
							<div>
								<p style="align-items: center;margin-top: 20px;height: 24px;font-size: 14px;color: #8590a6;font-weight: 600;">已收藏{{item.totalCount}}条内容  ></p>
							 </div>
						</div>
					</div>
					 </div>
					<div class="center"><router-link to="/favorite/all" class="l">查看更多收藏夹></router-link></div>
			</div>
		    <div class="row">
		    	<div class="banner">
		    		<svg class="Zi Zi--EditCircle" fill="currentColor" viewBox="0 0 24 24" width="36" height="36" style="fill: #0084FF;"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm4.043-15.524a.745.745 0 0 0-1.053.017l-6.857 7.071 2.237 2.17 6.857-7.071a.743.743 0 0 0-.016-1.052l-1.168-1.135zm-9.028 9.476l-.348 1.381 1.37-.39 1.274-.36-1.973-1.916-.323 1.285z" fill-rule="evenodd"></path></svg>
		    		<h3>专栏</h3>
		    	</div>
		    	<div class="col-3" v-for="(item,index) in columns" :key="index">
		    		<div class="page">
						<img :src="item.imageUrl" alt="">
						<p class="p-name">{{item.title}}</p>
						<p class="meta">{{item.followers}}关注 {{item.articlesCount}}文章</p>
						<p class="p-des">{{item.description.slice(0,25) }}</p>
						<a :href="item.url">
						<button class="btn_gz">进入专栏</button></a>
					</div>
		    		</div> 
		    		<div class="center"><router-link to="/column/all" class="l">查看更多专栏 ></router-link></div>
		    </div>
		</div>
	</div>
</template>

<script>
export default{
	name:'special',
	data(){
		return{
			specials:[],
			roundTables:[],
			favorites:[],
			sections:[{
				"name":'路上不再烦',
				"description":'过去五年，你的春运之路发生了哪些变化？'
			},
			{
				"name":'回家不再难',
				"description":'春运如何更好地调配资源，减轻高峰压力？'
			},
			{
				"name":'另一种回家',
				"description":'老人到子女工作城市过年的「反向春运」方式，会，'
			},
			],
			rounds:[{
				"t1":'什么是无损检测？',
				"t2":'无损检测技术都能应用于哪些行业？',
				"t3":'新型无损检测技术有哪些？其各自的现状及发展又是怎样的？'
			}],
			columns:[],
			dominant:'',
			secondary:'',
		};
	},
	created() {
		this.axios.get('http://localhost:8080/api/special').then(res =>{
			console.log(res);
			this.specials = res.data.data;
		});
		this.axios.get('http://localhost:8080/api/roundTable').then(res =>{
			console.log(res);
			this.roundTables = res.data.data;
			// this.$nextTick(() => {
			// 	let box = this.$refs.box;
			// 	let img = this.$refs.img;
			// 	RGBaster.colors(img,{
			// 		success: function(payload){
			// 			console.log('主色：'+payload.dominant+',次色'+payload.secondary);
			// 			this.dominant = payload.dominant;
			// 			this.secondary = payload.secondary;
			// 			box.style.background = this.dominant;
			// 		}
			// 	})
			// })
		});
		this.axios.get('http://localhost:8080/api/favorite').then(res =>{
			console.log(res);
			this.favorites = res.data.data;
		});
		this.axios.get('http://localhost:8080/api/column').then(res =>{
			console.log(res);
			this.columns = res.data.data;
		});
	}
};
</script>

<style  lang="scss" scoped>
	.row{
		width: 95%;
		margin: auto;
	}
	.banner{
		width: 100%;
		margin-bottom: 10px;
		margin-top: 10px;
		height: 60px;
		display: flex;
		align-items: center;
		font-size: 20px;
	}
	.left{
		width: 60%;
	}
	.right{
		width: 30%;
		margin-left: 44px;
		margin-bottom: 30px;
	}
	.card{
		background-color: white;
		margin-right: 20px;
		height: 450px;
		margin-bottom: 30px;
		img{
			border-radius: 5px;
		}
	}	
	.cards-head{
		position: relative;
		height: 220px;
		background-image: linear-gradient(to right, rgb(0, 0, 255) 0%, rgba(0, 0, 255, 0) 100%);
	}
	.card-background{
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		width: 240px;
	}
	.card-main{
		position: relative;
		width: 320px;
		padding: 68px 24px 24px;
	}
	.card-btn{
		position: absolute;
		right: 24px;
		bottom: 24px;
		background-color: white;
		border-radius: 5px;
	}
	.card-body{
		margin: 20px;
		padding-bottom: 10px;
		border-bottom: 1px solid #ebebeb;
	}
	.card-buttom{
		font-size: 15px;
		margin: 20px 24px;
	}
	.con{
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		height: 24px;
	}
	.con-body{
		margin-bottom: 10px;
	}
	.con-name{
		padding: 0 8px;
		height: 24px;
		line-height: 24px;
		font-size: 12px;
		color: #8590a6;
		background-color: #f6f6f6;
		border-radius: 5px;
	}
	.con-des{
		flex: 1 1;
		margin-left: 12px;
		white-space: nowrap;
	}
	.c-name{
	    height: 28px;
	    line-height: 28px;
	    color: #fff;
	    font-size: 20px;
	    white-space: nowrap;
	    font-weight: 600;
	}
	.c-des{
		margin-top: 12px;
		height: 60px;
		line-height: 20px;
		font-size: 14px;
		color: #fff;
	}
	.c-body{
		margin-bottom: 10px;
	}
	.c-t{
		font-size: 15px;
		height: 21px;
		line-height: 21px;
	}
	.c-answer{
		display: flex;
		align-items: center;
		margin-top: 4px;
		height: 17px;
		line-height: 17px;
		font-size: 12px;
		color: #999;
	}
	.btn_gz{
		-webkit-tap-highli0ht-color: rgba(26,26,26,0);
		font: inherit;
		cursor: pointer;
		background: none;
		border: none;
		outline: none;
		-webkit-appearance: none;
		height: 34px;
		border-radius: 3px;
		font-size: 14px;
		font-weight: 600;
		width: 102px;
		color: #0084ff;
		background-color: rgba(0,132,255,.08);
	}
	.name{
		font-size: 28px;
		font-weight: 660;
		color: white;
		margin-bottom: 30px;
	}
	.col-6{
		flex: 0 0 50%;
		img{
			width: 100%;
			height: 200px;
			padding: 5px;
		}
	}
	.colltion{
		padding: 20px;
		background-color: white;
		margin-right: 20px;
		margin-bottom: 20px;
	}
	.colltion-head{
		width: 30;
	}
	.colltion-body{
		width: 70%;
	}
	.page{
		background-color: white;
		margin-right: 10px;
		margin-bottom: 20px;
		padding: 28px 24px;
		display: flex;
		flex-direction: column;
		justify-items: center;
		align-items: center;
		height: 313px;
		border-radius: 4px;
	    box-shadow: 0 1px 3px 0 rgba(26,26,26,.1);
	}
	.col-3{
		img{
			width: 80px;
			height: 80px;
			border-radius: 50%;
		}
	}
	.p-name{
		margin-top: 20px;
		height: 22px;
		line-height: 22px;
		font-size: 16px;
		max-width: 187px;
		white-space: nowrap;
		font-weight: 600;
	}
	.p-des{
		font-size: 14px;
		color: #444;
		text-align: center;
		margin-bottom: 20px;
	}
</style>
