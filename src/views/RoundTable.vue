<template>
	<div>
		<div class="container">
			<div class="row">
				<div class="col-8">
					<div class="row">
				<div class="col-3 area" v-for="(item,index)  in roundTables" v-if="index>begin&&index<end" :key="index">
				<div class="area-head">
					<img :src="item.banner" alt="">
					<p class="name">{{item.name}}</p>
				</div>
				<div class="area-body">
					<p>{{item.visits_count}}人访问,{{item.include_count}}人参与</p>
				</div>
					</div>
					 </div>
					</div>
					<div class="col-4" style="background-color: white;  height: 700px;"></div>
			</div>
			<button @click="show_all" class="flex center btn_gz">展开全部>>></button>
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
			begin:0,
			end:10,
		};
	},
	created() {
		this.axios.get('http://localhost:8080/api/roundTable/all').then(res =>{
			console.log(res);
			this.roundTables = res.data.data;
		});
	},
	methods: {
	show_all(){
	this.begin=0;
	this.end =this.roundTables.length;
	}						
	},					
};
</script>

<style  lang="scss" scoped>
	.col-8{
		flex: 0 0 83.3%;
		img{
			width: 100%;
			height: 100%;
		}
	}
	.col-4{
		flex: 0 0 16.6%;
	}
	.col-3{
		flex: 0 0 25%;
	}
	.area{
		margin-right: 20px;
		margin-bottom: 20px;
		width: 200px;
		height: 200px;
		box-shadow: 0 1px 3px 0 rgba(26,26,26,.1);
	}
	.area-head{
		height: 80%;
		position: relative;
	}
	.area-body{
		height: 20%;
		background-color: white;
		margin-top: 5px;
		font-size: 14px;
		width: 100%;
		color: #778087;	
	}
	.name{
		position: absolute;
		bottom: 5%;
		left: 5%;
		color: white;
	}
</style>
