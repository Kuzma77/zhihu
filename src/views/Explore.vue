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
							<p class="introduction">{{item.introduction}}</p>
						</div>
						<div class="card-buttom">
						<span v-for="(section,index) in item.sections" :key="index" class="section flex">
							{{section.sectionTitle}}
						</span>
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
			roundTables:[],
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
		height: 400px;
		margin-bottom: 30px;
		img{
			border-radius: 5px;
		}
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
			height: 200px;
			padding: 5px;
		}
	}
	
</style>
