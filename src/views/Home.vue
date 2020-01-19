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
			<div class="white">
				<ul class="nav-list">
					<a class="navItem" target="_blank" rel="noopener noreferrer" title="回答">
					<svg class="navIcon" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M9.273 6.13c-1.103 0-1.439.064-1.782.243a1.348 1.348 0 0 0-.576.564c-.183.336-.248.664-.248 1.743v6.64c0 1.079.065 1.407.248 1.743.135.247.323.431.576.564.343.18.68.243 1.782.243h5.454c1.103 0 1.439-.064 1.782-.243.253-.133.44-.317.576-.564.183-.336.248-.664.248-1.743V8.68c0-1.079-.065-1.407-.248-1.743a1.348 1.348 0 0 0-.576-.564c-.343-.18-.68-.243-1.782-.243H9.273zm0-1.63h5.454c1.486 0 2.025.151 2.568.436.543.284.97.7 1.26 1.232.29.532.445 1.059.445 2.512v6.64c0 1.453-.155 1.98-.445 2.512-.29.531-.717.948-1.26 1.232-.543.285-1.082.436-2.568.436H9.273c-1.486 0-2.025-.151-2.568-.436a2.997 2.997 0 0 1-1.26-1.232C5.155 17.3 5 16.773 5 15.32V8.68c0-1.453.155-1.98.445-2.512.29-.531.717-.948 1.26-1.232.543-.285 1.082-.436 2.568-.436zM8.5 8.576v1.467h7V8.576h-7zm0 2.609v1.467h7v-1.467h-7zm0 2.608v1.468h4.667v-1.468H8.5z"></path></svg>
					<div class="navTitle">写回答</div></a>
					<a class="navItem" target="_blank" rel="noopener noreferrer" title="文章">
					<svg class="navIcon" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M15.764 6.779l-3.76 3.765c-.428.43-.555.567-.667.713a1.666 1.666 0 0 0-.208.348c-.076.167-.137.344-.314.926l-.073.243.242-.074c.58-.177.757-.238.925-.314.13-.06.232-.12.347-.209.146-.112.282-.239.712-.668l3.759-3.766-.963-.964zm.963-.965l.963.965.685-.686c.167-.168.227-.263.253-.349a.187.187 0 0 0 0-.12c-.026-.086-.086-.18-.253-.348l-.148-.148c-.167-.167-.262-.228-.348-.254a.187.187 0 0 0-.12 0c-.085.026-.18.087-.347.254l-.685.686zm.87 5.471l1.702-1.705v5.549c0 1.52-.158 2.07-.455 2.626a3.096 3.096 0 0 1-1.287 1.29c-.555.297-1.105.455-2.623.455h-5.57c-1.517 0-2.068-.158-2.622-.455a3.096 3.096 0 0 1-1.287-1.29C5.158 17.2 5 16.65 5 15.13v-5.58c0-1.52.158-2.071.455-2.627a3.096 3.096 0 0 1 1.287-1.289c.554-.297 1.105-.455 2.622-.455h3.497l-1.702 1.705H9.364c-1.126 0-1.47.066-1.82.254-.258.138-.45.33-.588.59-.188.35-.254.694-.254 1.822v5.58c0 1.128.066 1.472.254 1.822.138.259.33.452.588.59.35.188.694.254 1.82.254h5.57c1.127 0 1.47-.066 1.82-.254.258-.138.45-.331.589-.59.187-.35.253-.694.253-1.822v-3.844zm1.593-7.121l.148.147c.33.33.502.616.594.918.09.301.09.61 0 .911-.092.302-.265.587-.594.917l-5.408 5.416c-.486.487-.648.635-.845.786a3.02 3.02 0 0 1-.614.37c-.226.102-.433.176-1.091.376l-.852.26a1.021 1.021 0 0 1-1.275-1.277l.26-.854c.2-.659.273-.866.375-1.092.103-.227.218-.418.369-.616.15-.197.299-.36.785-.846l5.407-5.416c.33-.33.614-.504.915-.595.301-.092.61-.092.91 0 .301.09.586.264.916.595z"></path></svg>
					<div class="navTitle">写文章</div></a>
					<a class="navItem" target="_blank" rel="noopener noreferrer" title="想法">
					<svg class="navIcon" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M17.13 5.52V3.5h1.35v2.02h2.02v1.35h-2.02V8.9h-1.35V6.86H15.1V5.52h2.03zm-.17 4.9h1.7v4.76c0 1.5-.17 2.05-.46 2.6-.3.55-.73.98-1.28 1.27-.54.3-1.1.45-2.6.45h-5.5c-1.5 0-2.05-.16-2.6-.45-.55-.3-.98-.72-1.27-1.27-.3-.55-.45-1.1-.45-2.6v-5.5c0-1.5.16-2.06.45-2.6.3-.55.72-.98 1.27-1.28.55-.3 1.1-.45 2.6-.45h4.78v1.7H8.8c-1.12 0-1.46.05-1.8.24-.26.1-.45.3-.58.55-.2.35-.26.7-.26 1.8v5.5c0 1.13.07 1.47.26 1.8.13.27.32.46.58.6.34.18.68.25 1.8.25h5.5c1.12 0 1.46-.06 1.8-.25.27-.13.46-.32.6-.58.18-.34.24-.68.24-1.8V10.4l.02.02zm-3.86-.22c.7-.16 1.45.06 1.98.6.83.83.83 2.2 0 3.04l-.03.03c-.84.85-2.2.85-3.04 0l-1.92-2a.628.628 0 0 0-.88 0l-.04.04c-.25.28-.25.7 0 .95.15.16.37.22.57.17.4-.1.82.18.9.58.1.4-.16.82-.57.9-.7.17-1.46-.04-1.98-.58-.83-.85-.83-2.2 0-3.06l.03-.02c.86-.85 2.2-.85 3.05 0l1.93 1.95c.24.25.63.25.87 0l.03-.02a.67.67 0 0 0 0-.93.687.687 0 0 0-.58-.17c-.4.1-.8-.16-.9-.57-.1-.4.16-.8.57-.9l.01-.01z"></path></svg>
					<div class="navTitle">写想法</div></a>
				</ul>
				<ul class="nav-list">
					<a class="navItem" target="_blank" rel="noopener noreferrer" title="视频">
					<svg class="navIcon GlobalWrite-navIcon--video" fill="currentColor" viewBox="0 0 24 24" width="20" height="20"><path d="M15.375 14.74V6.75c0-1.036-.84-1.875-1.875-1.875h-9c-1.036 0-1.875.84-1.875 1.875v10.5c0 1.036.84 1.875 1.875 1.875h9c1.036 0 1.875-.84 1.875-1.875v-2.51zm2.25-7.428l1.657-1.435a2.625 2.625 0 0 1 4.343 1.985v8.276a2.625 2.625 0 0 1-4.343 1.985l-1.657-1.435v.562a4.125 4.125 0 0 1-4.125 4.125h-9A4.125 4.125 0 0 1 .375 17.25V6.75A4.125 4.125 0 0 1 4.5 2.625h9a4.125 4.125 0 0 1 4.125 4.125v.562zm0 2.976v3.424l3.13 2.71a.375.375 0 0 0 .62-.284V7.862a.375.375 0 0 0-.62-.284l-3.13 2.71z"></path></svg>
					<div class="navTitle">发视频</div></a>
					<a class="navItem" target="_blank" rel="noopener noreferrer" title="回答">
					<svg class="navIcon" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M12.004 4.15a7.85 7.85 0 1 1-5.772 13.17.85.85 0 0 1 1.25-1.153 6.15 6.15 0 1 0-1.559-5.087l1.208.343a.542.542 0 0 1 .112.996l-2.597 1.42a.542.542 0 0 1-.732-.21l-1.44-2.561a.542.542 0 0 1 .62-.787l1.182.334a7.852 7.852 0 0 1 7.728-6.465zm-.178 3.792c.385 0 .7.31.7.69l-.003 3.495 2.564 1.693c.315.207.425.671.185.977-.24.305-.69.33-.99.126 0 0-2.53-1.663-2.844-1.9-.315-.236-.315-.551-.315-.551l.003-3.84c0-.38.315-.69.7-.69z" fill-rule="evenodd"></path></svg>
					<div class="navTitle">稍后答</div></a>
					<a class="navItem" target="_blank" rel="noopener noreferrer" title="草稿">
					<svg class="navIcon" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M12.917 4a2 2 0 0 1 1.478.652l4.083 4.475A2 2 0 0 1 19 10.475v5.345c0 1.453-.155 1.98-.445 2.512-.29.531-.717.948-1.26 1.232-.543.285-1.082.436-2.568.436H9.273c-1.486 0-2.025-.151-2.568-.436a2.997 2.997 0 0 1-1.26-1.232C5.155 17.8 5 17.273 5 15.82V8.18c0-1.453.155-1.98.445-2.512.29-.531.717-.948 1.26-1.232C7.248 4.15 7.787 4 9.273 4h3.644zM12 5.63H9.273c-1.103 0-1.439.064-1.782.243a1.348 1.348 0 0 0-.576.564c-.183.336-.248.664-.248 1.743v7.64c0 1.079.065 1.407.248 1.743.135.247.323.431.576.564.343.18.68.243 1.782.243h5.454c1.103 0 1.439-.064 1.782-.243.253-.133.44-.317.576-.564.183-.336.248-.664.248-1.743V11.3H14a2 2 0 0 1-2-2V5.63zm1.5.37v2.9a.9.9 0 0 0 .9.9H17L13.5 6z"></path></svg>
					<div class="navTitle">草稿箱</div></a>
				</ul>
			</div>
			<div class="white">
				<div class="Creator"><svg class="Zi--Creator" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M15.075 15.388l-3.024 3.024a4.041 4.041 0 0 0-1.014 1.697l-.26.868C7.844 20.986 4.91 21 2 21c.026-3.325 0-3.304.59-3.956 1.237-1.368 6.251-.68 6.44-2.976.043-.518-.36-1.06-.725-1.69C6.285 8.87 5.512 2 11.5 2c5.988 0 5.15 7.072 3.246 10.378-.357.62-.795 1.217-.724 1.77.073.571.477.958 1.053 1.24zm5.402 1.672c.523.55.523.646.523 3.94a535.11 535.11 0 0 0-4.434-.028l3.911-3.912zm-7.88 2.699c.111-.37.312-.705.584-.978l4.76-4.76a.291.291 0 0 1 .412 0l1.626 1.626a.291.291 0 0 1 0 .411l-4.76 4.76c-.272.273-.608.474-.978.585l-1.96.588a.219.219 0 0 1-.272-.272l.589-1.96zm9.157-6.742a.839.839 0 0 1 0 1.187l-.94.94a.28.28 0 0 1-.395 0l-1.563-1.563a.28.28 0 0 1 0-.395l.94-.94a.839.839 0 0 1 1.187 0l.771.771z" fill-rule="evenodd"></path></svg><div class="CreatorEntrance-text"><div class="CreatorEntrance-indexPageTitle"><div class="css-vurnku">创作者中心<span class="css-605fnf">Lv 1</span></div></div></div><div class="CreatorEntrance-seen"></div><svg class="Zi Zi--ArrowRight CreatorEntrance-arrow CreatorEntrance-arrow--smallIcon" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M9.218 16.78a.737.737 0 0 0 1.052 0l4.512-4.249a.758.758 0 0 0 0-1.063L10.27 7.22a.737.737 0 0 0-1.052 0 .759.759 0 0 0-.001 1.063L13 12l-3.782 3.716a.758.758 0 0 0 0 1.063z" fill-rule="evenodd"></path></svg></div>
				<div class="ProfileSideCreator-analytics">
					<div class="ProfileSideCreator-readCountItem">
						<div class="ProfileSideCreator-readCountTitle">昨日被阅读数</div>
						<div class="ProfileSideCreator-readCountNumber">0</div>
						<div class="css-u2c28s"><div class="css-1086365">较前日</div>
						<div class="css-1gqd0v0">--</div></div></div>
						<div class="ProfileSideCreator-readCountItem">
							<div class="ProfileSideCreator-readCountTitle">昨日获赞同数</div>
							<div class="ProfileSideCreator-readCountNumber">0</div>
							<div class="css-u2c28s"><div class="css-1086365">较前日</div>
							<div class="css-1gqd0v0">--</div></div></div></div>
				<div class="css-19mtex"><a href="/creator/explore/wall-e" target="_blank" class="css-1qzrmsu">瓦力保镖为你的创作提供持续保护<span style="display: inline-flex; align-items: center;">​<svg width="17" height="17" viewBox="0 0 16 16" class="css-14gt3bc" fill="currentColor"><path d="M8 3l.737.339.428.187.377.158.326.127c.15.055.282.1.395.133.55.161 1.297.157 2.237-.014l-.002 3.784c0 3.07-2.52 4.76-4.498 5.286-1.977-.527-4.498-2.216-4.498-5.286L3.5 3.93c.94.17 1.686.175 2.237.014C6.187 3.812 6.941 3.497 8 3zm2.38 3.066L7.599 8.834 6.32 7.566a.4.4 0 0 0-.554.554l1.55 1.55a.5.5 0 0 0 .568 0l3.05-3.05a.4.4 0 0 0-.554-.554z"></path></svg></span></a></div>
			</div>
			<div class="white"></div>
			<div class="white"></div>
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
	.nav {
		top: 50px;
		position: sticky;
	}
	.nav-bar{
		width: 100%;
	}
	.nav-list{
		width: 100%;
	}
	.white{
		background-color: white;
		width: 90%;
		margin: auto; 
		height: 200px;
		margin-bottom: 10px;
	}
	.navItem{
		display: flex;
		-webkit-box-align: center;
		align-items: center;
		flex: 0 0 98px;
		flex-direction: column;
		height: 94px;
		-webkit-box-pack: center;
		justify-content: center;
		position: relative;
	}
	.navIcon{
		width: 24;
		height: 24;
		color: #8590a6;
		margin-bottom: 6px;
	}
	.navTitle{
		color: #444;
		font-size: 16px;
	}
	.Creator{
		align-items: center;
		display: flex;
		box-sizing: border-box;
		height: 52px;
		width: 100%;
		padding: 0;
		margin: 0 16px;
		color: rgb(133, 144, 166);
		font-size: 15px;
	}
    .Zi--Creator{
		width: 18px;
		height: 18px;
		margin-left: 3px;
		color: #8590a6;
		margin-right: 5px;
	}
    .ProfileSideCreator-analytics{
		border-top: 1px solid #f6f6f6;
		display: flex;
		padding: 20px 0;
		width: 100%;
	}
	.ProfileSideCreator-readCountItem{
		align-items: center;
		border-right: 1px solid #ebebeb;
		display: flex;
		flex: 1 0;
		flex-direction: column;
	}
	.ProfileSideCreator-readCountNumber{
		color: #444;
		font-size: 18px;
		line-height: 28px;
		font-weight: 600;
	}
	.ProfileSideCreator-readCountTitle{
		color: #8590a6;
		font-size: 12px;
		line-height: 22px;
	}
	.css-u2c28s{
		display: flex;
		font-size: 12px;
		-webkit-box-align: center;
		align-items: center;
		-webkit-box-pack: justify;
		justify-content: space-between;
		margin: 0px;
	}
	.css-1086365{
        font-size: 12px;
        box-sizing: border-box;
        color: rgb(99, 133, 166);
        margin: 0px;
	}
	.css-1gqd0v0{
		font-size: 12px;
		box-sizing: border-box;
		font-weight: 600;
		margin: 0px 0px 0px 4px;
	}
	.css-19mtex{
		width: 100%;
		padding-left: 8px;
		padding-right: 8px;
		padding-top: 10px;
		padding-bottom: 10px;
		margin: 0px;
		border-top: 1px solid rgb(246, 246, 246);
		border-color: rgb(246, 246, 246);
	}
	.css-1qzrmsu{
		align-items: center;
		font-size: 12px;
		color: rgb(133, 144, 166);
		margin-left: 10px;
	}



</style>
