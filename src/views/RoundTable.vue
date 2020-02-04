<template>
	<div>
		<div class="container">
			<div class="row">
				<div class="col-12 head flex flex-between">
					<div class="yz">
						<p>圆桌</p>
					</div>
					<div class="jb">
						<p>举办圆桌</p>
					</div>
				</div>
				<div class="col-3" v-for="(item,index)  in roundTables"  :key="index">
				<div class="area">
				<div class="area-head">
					<img :src="item.banner" alt="">
					<p class="name">{{item.name}}</p>
					<div class="zhe"></div>
				</div>
				<div class="area-body">
					<p>{{item.visits_count}}人访问,{{item.include_count}}人参与</p>
				</div>
				</div>
				</div>
			</div>
			
		</div>
		<div><a href="#top" style="position: fixed; bottom: 5%; right: 5%;"><i class="iconfont">&#xe633;</i></a></div>
	</div>
</template>

<script>
export default{
	name:'special',
	data(){
		return{
			roundTables:[],
			currentPage: 1,
			count: 36,
			scroll: ''
		};
	},
	created() {
		// this.axios.get('http://localhost:8080/api/roundTable/all').then(res =>{
		// 	console.log(res);
		// 	this.roundTables = res.data.data;
		// });
		this.axios({
					method: 'post',
					url: 'http://localhost:8080/api/roundTable/page',
					params: {
						count: this.count,
						currentPage: this.currentPage
					}
				}).then(res => {
					console.log(res.data.data);
					this.roundTables = res.data.data;
					console.log(this.roundTables.length);
				});
	},
	methods: {loadMore() {
			this.currentPage = this.currentPage + 1;
			this.axios({
				method: 'post',
				url: 'http://localhost:8080/api/roundTable/page',
				params: {
					count: this.count,
					currentPage: this.currentPage
				}
			}).then(res => {
				console.log(res.data.data);
				let temp = [];
				temp = res.data.data;
				for (var i = 0; i < temp.length; i++) {
					this.roundTables.splice(this.currentPage * this.count, 0, temp[i]);
				}
				console.log(this.roundTables.length);
			});
		},
		scrollDs() {
			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
			var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
			if (scrollTop + windowHeight > scrollHeight - 100) {
				console.log('到了底部');
				this.loadMore();
			}
		}
	},
	mounted() {
		window.addEventListener('scroll', this.scrollDs);
	}				
};
</script>

<style  lang="scss" scoped>
	.head{
		margin-bottom: 20px;	
	}
	.row{
		width: 93%;
		margin: auto;
		margin-top: 10px;
		background-color: white;
		padding: 20px;
	}
	.yz{
		font-weight: 600;
		color: #1A1A1A;
		font-size: 15px;
		line-height: 20px;
	}
	.jb{
		color: #0084FF;
		font-weight: 600;
		font-size: 14px;
		line-height: 20px;
	}
	.col-3{
		flex: 0 0 25%;
		img{
			height: 190px;
			width: 100%;
			border-radius: 6px;
			box-shadow: 2px black;
		}
	}
	.area{
		margin-bottom: 30px;
		border-radius: 5px;
		padding-right: 50px;
		margin-top: 20px;
		height: 240px;
		img{
			border-radius: 5px;
		}
	}
	.area-head{
		height: 80%;
		position: relative;
	}
	.zhe{
		margin: 0;
		min-width: 0;
		border-radius: 6px;
		position: absolute;
		top: 0;
		width: 190px;
		height: 190px;
		left: 0;
		box-shadow: 0 2px 10px 0 rgba(0,0,0,0.1);
		background-image: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,0.5));
		z-index: 999;
	}
	.area-body{
		height: 20%;
		background-color: white;
		padding: 10px;
		font-size: 14px;
		width: 100%;
		color: #778087;	
	}
	.name{
		position: absolute;
		bottom: 5%;
		left: 5%;
		color: white;
		z-index: 1000;
	}
</style>
