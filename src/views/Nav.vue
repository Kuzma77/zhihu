<template>
	<div>
		<div class="nav gutter">
			<transition name="nav">
			<div class="nav-bar" v-if="fixed">
					<ul class="nav-list flex-left">
						<svg viewBox="0 0 200 91" class="Icon ZhihuLogo ZhihuLogo--blue Icon--logo" width="64" height="30" aria-hidden="true" style="height: 30px; width: 64px; fill: #0084ff; margin-bottom: 20px;"><title></title>
						<g><path d="M53.29 80.035l7.32.002 2.41 8.24 13.128-8.24h15.477v-67.98H53.29v67.978zm7.79-60.598h22.756v53.22h-8.73l-8.718 5.473-1.587-5.46-3.72-.012v-53.22zM46.818 43.162h-16.35c.545-8.467.687-16.12.687-22.955h15.987s.615-7.05-2.68-6.97H16.807c1.09-4.1 2.46-8.332 4.1-12.708 0 0-7.523 0-10.085 6.74-1.06 2.78-4.128 13.48-9.592 24.41 1.84-.2 7.927-.37 11.512-6.94.66-1.84.785-2.08 1.605-4.54h9.02c0 3.28-.374 20.9-.526 22.95H6.51c-3.67 0-4.863 7.38-4.863 7.38H22.14C20.765 66.11 13.385 79.24 0 89.62c6.403 1.828 12.784-.29 15.937-3.094 0 0 7.182-6.53 11.12-21.64L43.92 85.18s2.473-8.402-.388-12.496c-2.37-2.788-8.768-10.33-11.496-13.064l-4.57 3.627c1.363-4.368 2.183-8.61 2.46-12.71H49.19s-.027-7.38-2.372-7.38zm128.752-.502c6.51-8.013 14.054-18.302 14.054-18.302s-5.827-4.625-8.556-1.27c-1.874 2.548-11.51 15.063-11.51 15.063l6.012 4.51zm-46.903-18.462c-2.814-2.577-8.096.667-8.096.667s12.35 17.2 12.85 17.953l6.08-4.29s-8.02-11.752-10.83-14.33zM199.99 46.5c-6.18 0-40.908.292-40.953.292v-31.56c1.503 0 3.882-.124 7.14-.376 12.773-.753 21.914-1.25 27.427-1.504 0 0 3.817-8.496-.185-10.45-.96-.37-7.24 1.43-7.24 1.43s-51.63 5.153-72.61 5.64c.5 2.756 2.38 5.336 4.93 6.11 4.16 1.087 7.09.53 15.36.277 7.76-.5 13.65-.76 17.66-.76v31.19h-41.71s.88 6.97 7.97 7.14h33.73v22.16c0 4.364-3.498 6.87-7.65 6.6-4.4.034-8.15-.36-13.027-.566.623 1.24 1.977 4.496 6.035 6.824 3.087 1.502 5.054 2.053 8.13 2.053 9.237 0 14.27-5.4 14.027-14.16V53.93h38.235c3.026 0 2.72-7.432 2.72-7.432z" fill-rule="evenodd">
						</path></g>
						</svg>
						<li class="nav-item "><router-link to="/home">首页</router-link></li>
						<li class="nav-item"><router-link to="/explore" >发现</router-link></li>
						<li class="nav-item"><router-link to="/question/waiting" >等你来答</router-link></li>
						<li class="nav-item flex-around flex">
							<div class="serach " @click="showseach">
								<div class="SearchBar-toolWrapper">
									<form class="SearchBar-tool">
										<div>
											<div class="Popover">
										<label class="SearchBar-input">
											<input type="text" maxlength="100" autocomplete="off" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-activedescendant="AutoComplete2--1" id="Popover1-toggle" aria-haspopup="true" aria-owns="Popover1-content" class="Input" placeholder="有哪些给女朋友的备注" value="">
											<button aria-label="搜索" type="button" class=" SearchBar-searchButton">
												<span style="display: inline-flex; align-items: center;"></span>
											​<svg class="SearchBar-searchIcon" fill="currentColor" viewBox="0 0 24 24" width="18" height="18"><path d="M17.068 15.58a8.377 8.377 0 0 0 1.774-5.159 8.421 8.421 0 1 0-8.42 8.421 8.38 8.38 0 0 0 5.158-1.774l3.879 3.88c.957.573 2.131-.464 1.488-1.49l-3.879-3.878zm-6.647 1.157a6.323 6.323 0 0 1-6.316-6.316 6.323 6.323 0 0 1 6.316-6.316 6.323 6.323 0 0 1 6.316 6.316 6.323 6.323 0 0 1-6.316 6.316z" fill-rule="evenodd"></path></svg>
								            </button>
								         </label>
								             </div>
								         </div>
								    </form>
								</div>
							</div>
							<transition name="fade" >
														<div class="search-container border" v-if="popUp" >
															<a href="" class="border-bottom block">知乎热搜</a>
															<a href="" class="border-bottom block">全国确诊14411例</a>
															<a href="" class=" border-bottom block">武汉红十字会</a>
															<a href="" class=" border-bottom block">英国正式脱欧</a>
															<a href="" class=" border-bottom block">20020202</a>
															<a href="" class=" border-bottom block">直接捐赠武汉医院</a>
															<a href="" class="border-bottom block">搜索历史</a>
															<a href="" class=" border-bottom block">口罩处理</a>
														</div>
													</transition>
							<button type="button" class="Button SearchBar-askButton Button--primary Button--blue">提问</button>
						</li>
						<li class="bell-comment flex flex-around">
							<div class="bcount">
								​<svg class="Bell" fill="currentColor" viewBox="0 0 24 24" width="22" height="22" style="color: #8590A6;"><path d="M4.523 15.076l.804-6.757a6.753 6.753 0 0 1 4.945-5.7 1.823 1.823 0 0 1 3.623 0 6.753 6.753 0 0 1 4.945 5.7l.804 6.757a2.293 2.293 0 0 0 1.712 2.108 1.093 1.093 0 0 1-.297 2.15H3.108a1.093 1.093 0 0 1-.297-2.15 2.293 2.293 0 0 0 1.712-2.108zM12.083 23a2.758 2.758 0 0 1-2.753-2.509.229.229 0 0 1 .232-.24h5.043a.229.229 0 0 1 .232.24 2.759 2.759 0 0 1-2.753 2.51z">
								 </path></svg>
								<span class="PushNotifications-count">80</span>
							</div>
							<div class="mcount">
								<svg class="Comments" fill="currentColor" viewBox="0 0 24 24" width="22" height="22"><path d="M11 2c5.571 0 9 4.335 9 8 0 6-6.475 9.764-11.481 8.022-.315-.07-.379-.124-.78.078-1.455.54-2.413.921-3.525 1.122-.483.087-.916-.25-.588-.581 0 0 .677-.417.842-1.904.064-.351-.14-.879-.454-1.171A8.833 8.833 0 0 1 2 10c0-3.87 3.394-8 9-8zm10.14 9.628c.758.988.86 2.009.86 3.15 0 1.195-.619 3.11-1.368 3.938-.209.23-.354.467-.308.722.12 1.073.614 1.501.614 1.501.237.239-.188.562-.537.5-.803-.146-1.495-.42-2.546-.811-.29-.146-.336-.106-.563-.057-2.043.711-4.398.475-6.083-.927 5.965-.524 8.727-3.03 9.93-8.016z" fill-rule="evenodd">
								</path></svg>
								</span><span class="Messages-count">4</span>
							</div>
							<div>
								<img :src="user.avatar" width="30" height="30" v-if="token" />
								<span v-else>登录</span>
							</div>
						</li>
						<!-- <li class="nav-item abs-center-right"><router-link to="/login">登录</router-link></li> -->
					</ul>
			</div>
		</transition>
		<transition name="hide-nav">
			<div class="nav-bar hide-nav" v-if="!fixed">
				<ul class="nav-list flex-left">
					<svg viewBox="0 0 200 91" class="Icon ZhihuLogo ZhihuLogo--blue Icon--logo" width="64" height="30" aria-hidden="true" style="height: 30px; width: 64px; fill: #0084ff; margin-bottom: 20px;"><title></title>
					<g><path d="M53.29 80.035l7.32.002 2.41 8.24 13.128-8.24h15.477v-67.98H53.29v67.978zm7.79-60.598h22.756v53.22h-8.73l-8.718 5.473-1.587-5.46-3.72-.012v-53.22zM46.818 43.162h-16.35c.545-8.467.687-16.12.687-22.955h15.987s.615-7.05-2.68-6.97H16.807c1.09-4.1 2.46-8.332 4.1-12.708 0 0-7.523 0-10.085 6.74-1.06 2.78-4.128 13.48-9.592 24.41 1.84-.2 7.927-.37 11.512-6.94.66-1.84.785-2.08 1.605-4.54h9.02c0 3.28-.374 20.9-.526 22.95H6.51c-3.67 0-4.863 7.38-4.863 7.38H22.14C20.765 66.11 13.385 79.24 0 89.62c6.403 1.828 12.784-.29 15.937-3.094 0 0 7.182-6.53 11.12-21.64L43.92 85.18s2.473-8.402-.388-12.496c-2.37-2.788-8.768-10.33-11.496-13.064l-4.57 3.627c1.363-4.368 2.183-8.61 2.46-12.71H49.19s-.027-7.38-2.372-7.38zm128.752-.502c6.51-8.013 14.054-18.302 14.054-18.302s-5.827-4.625-8.556-1.27c-1.874 2.548-11.51 15.063-11.51 15.063l6.012 4.51zm-46.903-18.462c-2.814-2.577-8.096.667-8.096.667s12.35 17.2 12.85 17.953l6.08-4.29s-8.02-11.752-10.83-14.33zM199.99 46.5c-6.18 0-40.908.292-40.953.292v-31.56c1.503 0 3.882-.124 7.14-.376 12.773-.753 21.914-1.25 27.427-1.504 0 0 3.817-8.496-.185-10.45-.96-.37-7.24 1.43-7.24 1.43s-51.63 5.153-72.61 5.64c.5 2.756 2.38 5.336 4.93 6.11 4.16 1.087 7.09.53 15.36.277 7.76-.5 13.65-.76 17.66-.76v31.19h-41.71s.88 6.97 7.97 7.14h33.73v22.16c0 4.364-3.498 6.87-7.65 6.6-4.4.034-8.15-.36-13.027-.566.623 1.24 1.977 4.496 6.035 6.824 3.087 1.502 5.054 2.053 8.13 2.053 9.237 0 14.27-5.4 14.027-14.16V53.93h38.235c3.026 0 2.72-7.432 2.72-7.432z" fill-rule="evenodd">
					</path></g>
					</svg>
					<li class="nav-item"><router-link to="/home/recommoned">推荐</router-link></li>
					<li class="nav-item"><router-link to="/home/follow">关注</router-link></li>
					<li class="nav-item"><router-link to="/home/hot">热榜</router-link></li>
					<li class="nav-item flex-around flex" style="margin-left: 320px;">
						<div class="serach ">
							<div class="SearchBar-toolWrapper">
								<form class="SearchBar-tool">
									<div>
										<div class="Popover">
									<label class="SearchBar-input">
										<input type="text" maxlength="100" autocomplete="off" role="combobox" aria-expanded="false" aria-autocomplete="list" aria-activedescendant="AutoComplete2--1" id="Popover1-toggle" aria-haspopup="true" aria-owns="Popover1-content" class="Input" placeholder="有哪些给女朋友的备注" value="">
										<button aria-label="搜索" type="button" class=" SearchBar-searchButton">
											<span style="display: inline-flex; align-items: center;"></span>
										​<svg class="SearchBar-searchIcon" fill="currentColor" viewBox="0 0 24 24" width="18" height="18"><path d="M17.068 15.58a8.377 8.377 0 0 0 1.774-5.159 8.421 8.421 0 1 0-8.42 8.421 8.38 8.38 0 0 0 5.158-1.774l3.879 3.88c.957.573 2.131-.464 1.488-1.49l-3.879-3.878zm-6.647 1.157a6.323 6.323 0 0 1-6.316-6.316 6.323 6.323 0 0 1 6.316-6.316 6.323 6.323 0 0 1 6.316 6.316 6.323 6.323 0 0 1-6.316 6.316z" fill-rule="evenodd"></path></svg>
							            </button>
							         </label>
							             </div>
							         </div>
							    </form>
							</div>
						</div>
						<button type="button" class="Button SearchBar-askButton Button--primary Button--blue">提问</button>
					</li>
				</ul>
			</div>
		</transition>
		</div>
		<router-view />
	</div>
</template>

<script>
export default{
	name:'nav',
	data(){
		return {
			fixed :false,
			flag :true,
			popUp:false,
			token:this.$store.state.token,
			user:this.$store.state.user
		};
	},
	mounted() {
			// 等到页面产生滚动才执行监听
			this.$nextTick(function() {
				window.addEventListener('scroll', this.onScroll);
			});
		},
	created() {},
		methods: {
			onScroll() {
				//只监听路由是/home/*的滚动，首页的几个子路由页面滚动导航才变化，其他页面导航条不变
				var str = JSON.stringify(this.$route.path);
				if (str.indexOf('/home') == 1) {
					//取得滚动的起点，也就是文档流的顶部
					let scrolled = document.documentElement.scrollTop || document.body.scrollTop;
					let header_height = null;
					//取得顶部nav-bar元素的高度
					if (document.getElementsByClassName('nav')[0]) {
						header_height = document.getElementsByClassName('nav')[0].offsetHeight;
						// console.log('滚动条位置：' + scrolled);
					}
					//如果当前滚动点小于顶部导航高度，fix保持为true，导航不变；如果超出高度，fix变为false，当前导航会被另一个导航替代
					//用scrolled的是否在0-52px范围来决定fixed的真假
					//用fixed的true和false来切换两个导航条的显示
					// this.fixed = scrolled <= header_height;
					this.fixed = scrolled <= 152;
				}
			},
			showseach(){
				this.popUp = !this.popUp;
			}
		}
	};
</script>

<style lang="scss" scoped>
	.router-link-active{
		border-bottom: 2px solid rgb(0,132,255);	
		color: black;
		font-weight: 600;
		padding-bottom: 13px;
	}
	
	.search-container {
		position: absolute;
		top: 48px;
		right: 40%;
		width: 340px;
		line-height: 28px;
		border-radius: 5px;
		padding: 5px 10px 10px 15px;
		z-index: 130;
		background-color: #fff;
	}
	.nav{
		z-index: 100;
	}
	.nav-enter-active,
	.nav-leave-active {
		transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
	}
	.nav-enter,
	.nav-leave-to {
		transform: translateY(-52px);
		opacity: 0;
	}
	.hide-nav-enter-active,
	.hide-nav-leave-active {
		transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
	}
	.hide-nav-enter,
	.hide-nav-leave-to {
		transform: translateY(52px);
		opacity: 0;
	}
	.hide-nav .router-link-active {
		font-weight: 500;
		color: #007aff;
		font-size: 16px;
		border-bottom: none;
	}
	.hide-nav .router-link-active:after {
		opacity: 0;
	}
	.gutter{
		position: relative;
		color: #8590a6;
	}
	.bell-comment{
		margin-bottom: 18px;
		margin-left: 115px;
	}
	.bcount{
		font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;
		font-size: 15px;
		color: #1a1a1a;
		-webkit-tap-highlight-color: rgba(26,26,26,0);
		position: relative;
		display: inline-block;
		margin-right: 40px;
	}
	.mcount{
		font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;
		font-size: 15px;
		color: #1a1a1a;
		-webkit-tap-highlight-color: rgba(26,26,26,0);
		position: relative;
		display: inline-block;
		margin-right: 40px;
	}
	.Bell{
		-webkit-tap-highlight-color: rgba(26,26,26,0);
		font: inherit;
		font-size: 14px;
		color: #8590a6;
		text-align: center;
		cursor: pointer;
		line-height: inherit;
		display: inline-flex;
		align-items: center;
	}
	.PushNotifications-count{
		-webkit-tap-highlight-color: rgba(26,26,26,0);
		font: inherit;
		text-align: center;
		cursor: pointer;
		line-height: inherit;
		position: absolute;
		bottom: 50%;
		left: 50%;
		padding: 0 4px;
		font-size: 11px;
		color: #fff;
		background-color: #f1403c;
		border: 2px solid #fff;
		border-radius: 20px;
	}
	.Comments{
		-webkit-tap-highlight-color: rgba(26,26,26,0);
		font: inherit;
		font-size: 14px;
		color: #8590a6;
		text-align: center;
		line-height: inherit;
		cursor: pointer;
		fill: currentcolor;
		width: 22;
		height: 22;
	}
	.Messages-count{
		-webkit-tap-highlight-color: rgba(26,26,26,0);
		font: inherit;
		text-align: center;
		line-height: inherit;
		cursor: pointer;
		position: absolute;
		bottom: 50%;
		left: 50%;
		padding: 0 4px;
		font-size: 11px;
		color: #fff;
		background-color: #f1403c;
		border: 2px solid #fff;
		border-radius: 20px;
	}
	.nav {
		top: 0px;
		position: sticky;
		margin-bottom: 10px;
	}	
	.serach{
		font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;
		font-size: 15px;
		color: #1a1a1a;
		-webkit-tap-highlight-color: rgba(26,26,26,0);
		position: relative;
		z-index: 104;
		width: 326px;
		margin-bottom: 15px;
	}
	.SearchBar-tool{
		font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;
		font-size: 15px;
		color: #1a1a1a;
		-webkit-tap-highlight-color: rgba(26,26,26,0);
		position: relative;
		float: left;
		overflow: hidden;
	}
	.Popover{
		font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;
		font-size: 15px;
		color: #1a1a1a;
		-webkit-tap-highlight-color: rgba(26,26,26,0);
		position: relative;
		display: block;
	}
	.SearchBar-input{
		font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;
		color: #1a1a1a;
		-webkit-tap-highlight-color: rgba(26,26,26,0);
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
		padding-left: 12px;
		padding-right: 0;
		transition: width .2s ease,background .3s ease;
		background: #f6f6f6;
	}
	.Input{
		-webkit-tap-highlight-color: rgba(26,26,26,0);
		-webkit-box-flex: 1;
		flex: 1 1;
		padding: 0;
		overflow: hidden;
		font-family: inherit;
		font-size: inherit;
		font-weight: inherit;
		background: transparent;
		border: none;
		resize: none;
		color: #1a1a1a;
		height: 24px;
		line-height: 24px;
	}
	.SearchBar-searchIcon{
		-webkit-tap-highlight-color: rgba(26,26,26,0);
		font: inherit;
		font-size: 14px;
		line-height: 32px;
		color: #8590a6;
		text-align: center;
		cursor: pointer;
		fill: currentcolor;
		width: 18;
		height: 18;
		transition: fill .2s ease;
	}
	.SearchBar-searchButton{
		-webkit-tap-highlight-color: rgba(26,26,26,0);
		font: inherit;
		outline: none;
		-webkit-appearance: none;
		margin: 0;
		display: inline-block;
		font-size: 14px;
		line-height: 32px;
		color: #8590a6;
		text-align: center;
		cursor: pointer;
		border: 1px solid;
		border-radius: 3px;
		margin-left: 12px;
		padding: 0 12px;
		background: transparent;
		border-color: transparent;
		border-bottom-left-radius: 0;
		border-top-left-radius: 0;
	}
	.SearchBar-askButton{
		-webkit-tap-highlight-color: rgba(26,26,26,0);
		font: inherit;
		outline: none;
		-webkit-appearance: none;
		margin: 0;
		display: inline-block;
		font-size: 14px;
		font-weight: 450;
		text-align: center;
		cursor: pointer;
		background: none;
		border: 1px solid;
		border-radius: 3px;
		border-color: #0084ff;
		z-index: 103;
		padding: 0 14px;
		margin-left: 16px;
		transition: opacity .3s ease,transform .3s ease,-webkit-transform .3s ease;
		line-height: 30px;
		color: #fff;
		background-color: #0084ff;
		margin-bottom: 15px;
	}
	// .search-t {
	//    input{
	// 	  position: relative;
	// 	  display: flex;
	// 	  -webkit-box-align: center;
	// 	  align-items: center;
	// 	  height: 34px;
	// 	  padding: 4px 10px;
	// 	  font-size: 14px;
	// 	  border: 1px solid #ebebeb;
	// 	  border-radius: 3px;
	// 	  box-sizing: border-box;
	// 	  width: 326px;
	// 	  transition: width .2s ease,background .3s ease;
	// 	  background: #f6f6f6;
	//    }
	// }
	// .search-b {
	// 	input{
	// 		font-size: 18px;
	// 		text-align: center;
	// 		border: 1px solid;
	// 		border-radius: 3px;
	// 		border-color: #0084ff;
	// 		transition: opacity .3s ease,transform .3s ease,-webkit-transform .3s ease;
	// 		height: 34px;
	// 		width: 60px;
	// 		margin-left: 20px;
	// 		color: #fff;
	// 		background-color: #0084ff;
	// 	}
	// }
</style>
