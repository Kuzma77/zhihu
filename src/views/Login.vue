<template>
	<div class="full main-color">
		<div class="login-box">
			<div class="tab">
				<span class="tab-item" :class="{ active: isActive }" @click="changeTab">登 录</span>
				<span class="tab-item" :class="{ active: !isActive }" @click="changeTab">注 册</span>
			</div>

			<div class="tab-box" v-if="show && selected === 0">
				
			</div>

			<div class="tab-box" v-if="show && selected === 1">
				
			</div>		
		</div>
	</div>
</template>
<script>
export default {
	data() {
			return {			
				isActive: true,			
				show: true,
				selected: 0,
			};
		},
		methods:{
			changeTab: function() {
						this.isActive = !this.isActive;
						this.selected = this.selected == 0 ? 1 : 0;
					},
		}
};
</script>
<style scoped>

.full {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	background-image: url(../assets/image/login.png);
	/* 图片全屏 */
	background-size: calc(100%);
}

.login-box {
	background-color: #ffffff;
	width: 400px;
	height: 550px;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	padding: 10px;
	margin-top: 100px;
	margin-left: 200px;
}
/* 顶部div */
.tab {
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	height: 10%;
	background-color: rgb(236, 239, 241);
	border-radius: 10px;
	margin-bottom: 10px;
}
.tab-item {
	cursor: pointer;
	margin-right: 10px;
	flex: 0 0 80px;
	text-align: center;
	line-height: 38px;
}
.active {
	color: #00bbdd;
	font-weight: 600;
	border-bottom: 2px solid #00bbdd;
}
/* 中间div */
.tab-box {
	height: 78%;
	/* background-color: #00897B; */
	color: #eee;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 10px;
}

</style>