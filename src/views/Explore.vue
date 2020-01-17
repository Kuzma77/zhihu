<template>
	<div>
		<div class="container">
			<div class="row">
				<div class="banner">
					<i class="iconfont">&#xe670;</i>
					<h3>最新专题</h3>
				</div>
				<div class="col-6 card" v-for="(item,index) in specials" :key="index">
						<div class="card-head"><img :src="item.banner" alt=""></div>
						<div class="card-body flex">
							<div class="left">
							<h3>{{item.title}}</h3>
							<p class="meta">{{item.updated}}更新,{{item.viewCount}}次浏览</p>
							</div>
							<div class="right">
								<button class="btn_gz">关注专题</button>
							</div>
							<p class="introduction">{{item.introduction}}</p>
						</div>
						<div class="card-buttom">
						<span v-for="(section,index) in item.sections" :key="index" class="section flex">
							{{section.sectionTitle}}
						</span>
						</div>
					</div> 
					<div class="center"><router-link to="/special/all" class="l">查看更多专题 ></router-link></div>
			</div>
			<div class="row">
				<div class="banner">
					<i class="iconfont">&#xe639;</i>
					<h3>圆桌讨论</h3>
				</div>
				<div class="col-6 card" v-for="(item,index) in roundTables" :key="index">
						<div class="cards-head">
							<div class="card-background">
								<img :src="item.banner" alt="">
							</div>
							<div class="card-main">
								<p class="name">{{item.name}}</p>
								<p>{{item.visitsCount}}人访问,{{item.includeCount}}人参与</p>
							</div>
							<div class="card-btn">
								<button class="btn_gz">关注圆桌</button>
							</div>
							</div>
						<div class="card-body flex">
							<p class="introduction">{{item.urlToken}}</p>
						</div>
						<div class="card-buttom">
						<span v-for="(section,index) in item.sections" :key="index" class="section flex">
							{{section.sectionTitle}}
						</span>
						</div>
					</div> 
					<div class="center"><router-link to="/roundTable/all" class="l">查看更多圆桌></router-link></div>
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
			roundTables:[]
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
		});
	}
};
</script>

<style  lang="scss" scoped>
	.banner{
		width: 100%;
		margin-bottom: 10px;
		margin-top: -10px;
		height: 60px;
		display: flex;
		align-items: center;
		font-size: 20px;
	}
	.iconfont{
		color: rgb(0,132,255);
		font-size: 32px;
		margin-right:10px;
	}
	.left{
		width: 60%;
	}
	.right{
		width: 30%;
		margin-left: 45px;
		margin-bottom: 30px;
	}
	.card{
		background-color: rgb(255,255,255);
		border: 2px solid #d6d6d6;
		box-shadow: 0 1px 3px 0 rgba(26,26,26,.1);
		border-radius: 5px;
		width: 500px;
		height: 450px;
		margin-bottom: 30px;
	}	
	.cards-head{
		position: relative;
		height: 240px;
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
	.introduction{
		display: flex;
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
			height: 100%;
			padding: 5px;
		}
	}
	
</style>
