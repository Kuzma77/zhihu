<template>
	<div>
		<div class="nav gutter">
			<div class="nav-bar">
					<ul class="nav-list flex-left">
						<img src="../assets/image/logo.png" alt="" style="width: 96px; height: 48px; margin-bottom: 20px;">
						<li class="nav-item "><router-link to="/home" style="color: rgb(133,144,186);">首页</router-link></li>
						<li class="nav-item"><router-link to="/explore" style="color: rgb(133,144,186);">发现</router-link></li>
						<li class="nav-item"><router-link to="/question/waiting" style="color: rgb(133,144,186);">等你来答</router-link></li>
						<li class="nav-item">
							<div class="serach  flex flex-around">
								<div class="search-t">
									<input type="text">
								</div>
								<div class="search-b">
									<input type="button" value="提问">
								</div>
							</div>
						</li>
						
						<li class="nav-item abs-center-right"><router-link to="/login">登录</router-link></li>
					</ul>				
			</div>
		</div>
		<router-view />
	</div>
</template>

<script>
export default{
	name:'nav',
	data(){
		return {};
	},
	created() {}
};
</script>

<style lang="scss" scoped>
	.router-link-active{
		border-bottom: 2px solid rgb(0,132,255);	
		font-size: 700;
	}
	.gutter{
		position: relative;
		margin-bottom: 5px;
	}
	.nav-bar{
		
	}
	.search-t {
	   input{
		  position: relative;
		  display: flex;
		  -webkit-box-align: center;
		  align-items: center;
		  height: 34px;
		  padding: 4px 10px;
		  font-size: 14px;
		  border: 1px solid #ebebeb;
		  border-radius: 3px;
		  box-sizing: border-box;
		  width: 326px;
		  transition: width .2s ease,background .3s ease;
		  background: #f6f6f6;
	   }
	}
	.search-b {
		input{
			font-size: 18px;
			text-align: center;
			border: 1px solid;
			border-radius: 3px;
			border-color: #0084ff;
			transition: opacity .3s ease,transform .3s ease,-webkit-transform .3s ease;
			height: 34px;
			width: 60px;
			margin-left: 20px;
			color: #fff;
			background-color: #0084ff;
		}
	}
</style>
