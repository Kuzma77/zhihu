<template>
	<div>
		<div class="banner">
			<img src="" alt="">
			<h3>最新专题</h3>
		</div>
		<div class="container">
			<div class="row" v-for="(item,index) in specials" :key="index">
				<div class="col-4"><img :src="item.banner" alt=""></div>
				<div class="col-8">
					<h3>{{item.title}}</h3>
					<p class="meta">{{item.updated}}更新,{{item.viewCount}}次浏览</p>
					<p class="introduction">{{item.introduction}}</p>
					<span v-for="(section,index) in item.sections" :key="index" class="section">
						{{section.sectionTitle}}
					</span>
				</div>
			</div>
			<div>
				<router-link to="/special/all" class="btn"><button>查看所有</button></router-link>
			</div>
			
		</div>
	</div>
</template>

<script>
export default{
	name:'special',
	data(){
		return{
			specials:[]
		};
	},
	created() {
		this.axios.get('http://localhost:8080/api/special').then(res =>{
			console.log(res);
			this.specials = res.data.data;
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
		border: 1px solid #d6d6d6;
		box-shadow: 2px 5px spx #ddd;
		padding-left: 10%;
		display: flex;
		align-items: center;
		img{
			height: 60%;
		}
	}
	.container{
		.row{
			display: flex;
			margin-bottom: 10px;
			border: 1px solid #d6d6d6;
			border-radius: 4px;
			height: 180px;
			padding: 14px;
			box-shadow: 0 1px 3px 0 rgba(26,26,26,0.1);
			.col-4{
				flex: 0 0 33%;
				height: 100%;
				img{
					width: 100%;
					height: 100%;
					border-radius: 10px;
				}
			}
			.col-8{
				flex: 0 0 66%;
				height: 100%;
				img{
					width: 100%;
					height: 100%;
					border-radius: 10px;
				}
			}
		}
	}
</style>
