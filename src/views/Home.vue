<template>
<div>
	<div class="container">
	<div class="row">
		<div class="col-8">
			<div class="nav gutter">
				<div class="nav-bar">
						<ul class="nav-list ">
							<li class="nav-item"><router-link to="/home/recommoned">推荐</router-link></li>
							<li class="nav-item"><router-link to="/home/follow">关注</router-link></li>
							<li class="nav-item"><router-link to="/home/hot">热榜</router-link></li>
						</ul>				
				</div>
			</div>
			<router-view />
		</div>
		<div class="col-4">
			<div class="white" style="background-color: white; width: 90%; margin: auto; height: 160px;margin-bottom: 10px;"></div>
			<div class="white" style="background-color: white; width: 90%; margin: auto; height: 160px;margin-bottom: 10px;"></div>
			<div class="white" style="background-color: white; width: 90%; margin: auto; height: 160px;margin-bottom: 10px;"></div>
			<div class="white" style="background-color: white; width: 90%; margin: auto; height: 160px;margin-bottom: 10px;"></div>
		</div>
	</div>
	</div>
</div>
</template>

<script>
</script>
<style lang="scss" scoped>
	.router-link-active{
		border-bottom: 2px solid blue;	
		color: black;
	}
	.gutter{
		position: relative;
		margin-bottom: 2px;
	}
	.row{
		width: 95%;
		margin: auto;
	}
	.nav-bar{
		width: 100%;
	}
	.nav-list{
		width: 100%;
	}
</style>
