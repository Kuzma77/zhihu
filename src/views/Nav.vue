<template>
	<div>
		<div class="nav gutter">
			<div class="nav-bar">
					<ul class="nav-list flex-left">
						<img src="../assets/image/logo.png" alt="" style="width: 96px; height: 48px; margin-bottom: 20px;">
						<li class="nav-item "><router-link to="/home" style="color: rgb(133,144,186);">首页</router-link></li>
						<li class="nav-item"><router-link to="/explore" style="color: rgb(133,144,186);">发现</router-link></li>
						<li class="nav-item"><router-link to="/question/waiting" style="color: rgb(133,144,186);">等你来答</router-link></li>
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
		margin-bottom: 10px;
	}

	
</style>
