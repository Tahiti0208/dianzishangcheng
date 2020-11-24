<template>
	<div id="app">
		<!-- 头部导航栏开始 -->
		<header class="header" v-show="$store.state.showTop">
			<div class="contain clearfix">
				<ul class="left fl">
					<li>小米商城</li>
					<li>MIUI</li>
					<li>loT</li>
					<li>云服务</li>
					<li>金融</li>
					<li>有品</li>
					<li>小爱开放平台</li>
					<li>企业团购</li>
					<li>资质证照</li>
					<li>协议规则</li>
					<li>下载app
						<div class="img-box">
							<img src="./assets/images/erweima.png" alt="">
						</div>
					</li>
					<li>Select Location</li>
				</ul>
				<ul class="right fr">
					<li v-if="!($store.state.username)">
						<span @click="$router.push('/login')">登录</span> | <span @click="$router.push('/register')">注册</span>
					</li>
					<li v-else>{{$store.state.username}}
						<el-dropdown @command="handleCommand">
							<span class="el-dropdown-link">
								<i class="el-icon-arrow-down el-icon--right"></i>
							</span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item command="my">个人中心</el-dropdown-item>
								<el-dropdown-item command="order">评价晒单</el-dropdown-item>
								<el-dropdown-item command="like">我的喜欢</el-dropdown-item>
								<!-- <el-dropdown-item command="login">退出登录</el-dropdown-item> -->
							</el-dropdown-menu>
							<el-divider direction="vertical"></el-divider>
						</el-dropdown>
					</li>
					<li>消息通知</li>
					<li class="cart-box">
						<div class="cart" @click="$router.push('/cart')">购物车（{{$store.state.cart.cartList.length}}）</div>
						<div class="box" v-show="!($store.state.cart.cartList.length)">
							<p class="text" >购物车还没有商品赶紧选购</p>
						</div>
					</li>
				</ul>
			</div>
		</header>
		<!-- 头部导航栏结束 -->

		<!-- 侧栏开始 -->
		<aside class="aside" v-show="$store.state.showAside">
			<ul>
				<li>
					<img src="./assets/images/phone.png" alt="">
					<img src="./assets/images/phone01.png" alt="">
					<p>手机App</p>
					<div class="aside-box">
						<img src="./assets/images/erweima.png" alt="">
						<p class="text">扫码领取新人百元礼包</p>
					</div>
				</li>
				<li @click="$router.push('/my/myMsg')">
					<img src="./assets/images/my.png" alt="">
					<img src="./assets/images/my01.png" alt="">
					<p>个人中心</p>	
				</li>
				<li @click="$router.push('/my/order/all')">
					<img src="./assets/images/aftersale.png" alt="">
					<img src="./assets/images/aftersale01.png" alt="">
					<p>售后服务</p>
				</li>
				<li @click="$router.push('/my/myMsg')">
					<img src="./assets/images/server.png" alt="">
					<img src="./assets/images/server01.png" alt="">
					<p>人工客服</p>
				</li>
				<li @click="$router.push('/cart')">
					<img src="./assets/images/cart.png" alt="">
					<img src="./assets/images/cart01.png" alt="">
					<p>购物车</p>
				</li>
				<li class="back-top" @click="backTop" v-show="$store.state.isShowTop">
					<img src="./assets/images/totop.png" alt="">
					<img src="./assets/images/totop01.png" alt="">
					<p>回顶部</p>
				</li>
			</ul>
			
		</aside>
		<!-- 侧栏结束 -->

		<router-view></router-view>

		<!-- 底部开始 -->
		<footer class="footer" v-show="$store.state.footer">
			<div class="footer-box">
				<ul class="flex-footer-box">
					<li>
						<i class="iconfont icon-tool"></i>
						售后服务
					</li>
					<li>
						<i class="iconfont icon-sevenday"></i>
						7天无理由
					</li>
					<li>
						<i class="iconfont icon-tian"></i>
						15天免费退款
					</li>
					<li>
						<i class="iconfont icon-liwu"></i>
						满99元包邮
					</li>
					<li>
						<i class="iconfont icon-dingweiweizhizuobiaoditux"></i>
						520余家售后网络
					</li>
				</ul>
				<div class="friend-flex-box">
					<ul class="left-box">
						<li>
							<ul>
								<li>帮助中心</li>
								<li>账户管理</li>
								<li>购物指南</li>
								<li>订单操作</li>
							</ul>
						</li>
						<li>
							<ul>
								<li>服务支持</li>
								<li>售后政策</li>
								<li>自助服务</li>
								<li>相关下载</li>
							</ul>
						</li>
						<li>
							<ul>
								<li>线下门店</li>
								<li>小米之家</li>
								<li>服务网点</li>
								<li>授权体验店</li>
							</ul>
						</li>
						<li>
							<ul>
								<li>关于小米</li>
								<li>了解小米</li>
								<li>加入小米</li>
								<li>投资者关系</li>
								<li>企业社会责任</li>
								<li>廉洁举报</li>
							</ul>
						</li>
						<li>
                            <ul>
                               <li>关注我们</li>
                               <li>新浪微博</li>
                               <li>言方微信</li>
                               <li>联系我们</li>
                               <li>公益基金会</li>
                            </ul>
                        </li>
						<li>
                            <ul>
                               <li>特色服务</li>
                               <li>F码通道</li>
                               <li>礼物码</li>
                               <li>防伪查询</li>
                            </ul>
                        </li>
					</ul>
					<div class="right-box">
						<p class="photo-title">400-100-5678</p>
						<p class="desc-time">8:00-18:00（仅收市话费）</p>
						<div class="right-msg-box">
                            <i class="el-icon-s-comment"></i>
                            人工客服
                        </div>
                        <p class="right-box-bottom">
                            关注小米
                            <i class="iconfont icon-weibo"></i>
                            <i class="iconfont icon-weixin"></i>
                        </p>
					</div>
				</div>
				<div class="footer-bottom-box">
					<p>
						<span class="text">小米商城</span>
						<span class="text-dec">|</span>
						<span class="text">MIUl</span>
						<span class="text-dec">|</span>
						<span class="text">米家</span>
						<span class="text-dec">|</span>
						<span class="text">米聊</span>
						<span class="text-dec">|</span>
						<span class="text">多看</span>
						<span class="text-dec">|</span>
						<span class="text">游戏</span>
						<span class="text-dec">|</span>
						<span class="text">政企服务</span>
						<span class="text-dec">|</span>
						<span class="text">小米天猫店</span>
						<span class="text-dec">|</span>
						<span class="text">小米集团隐私政策</span>
						<span class="text-dec">|</span>
						<span class="text">小米公司儿童信息保护规则</span>
						<span class="text-dec">|</span>
						<span class="text">小米商城隐私政策</span>
						<span class="text-dec">|</span>
						<span class="text">小米商城用户协议</span>
						<span class="text-dec">|</span>
						<span class="text">问题反馈</span>
						<span class="text-dec">|</span>
						<span class="text">Select Location</span>
					</p>
					<p class="bottom-describ">
						<span>©mi.com </span> 京ICP证110507号 <span>京ICP备10046444号</span> <span>京公网安备11010802020134号</span> <span>京网文[2020]0276-042号</span>
						<br> <span>（京）网械平台备字（2018）第00005号</span> <span>互联网药品信息服务资格证（京）-非经营性-2014-0090 </span> <span>营业执照</span>  <span>医疗器械质量公告</span>
						<br> <span>增值电信业务许可证</span> 网络食品经营备案（京）【2018】WLSPJYBAHF-12 <span>食品经营许可证</span>
						<br> 违法和不良信息举报电话：185-0130-1238 <span>知识产权侵权投诉</span> 本网站所列数据，除特殊说明，所有数据均出自我司实验室测试
					</p>
					<div class="bottom-pic-box">
						<img src="./assets/images/truste.png" alt="">
						<img src="./assets/images/v-logo-2.png" alt="">
						<img src="./assets/images/v-logo-1.png" alt="">
						<img src="./assets/images/v-logo-3.png" alt="">
					</div>
				</div>
			</div>
		</footer>
		<!-- 底部结束 -->
	</div>
</template>

<script>
	export default {
		methods:{
			handleCommand(command){
				if(command == 'my'){
					this.$router.push('/my/myMsg')
				}else if(command == 'order'){
					this.$router.push('/my/order/end')
				}else if(command == 'like'){
					this.$router.push('/my/like')
				}else{
					this.$router.state.username = ""
				}
			},
			// 返回顶部
			backTop(){
				var timer = setInterval(() => {
					let osTop = document.documentElement.scrollTop || document.body.scrollTop;
					let ispeed = Math.floor(-osTop / 5);
					document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
					if(osTop === 0){
						clearInterval(timer);
					}
				}, 30);
			}
		}
	}
</script>

<style lang="scss">
body{
	background-color: #F5F5F5;
}

// 顶部导航栏样式
.header{
	width: 100%;
	color: #b0b0b0;
	font-size: 12px;
	background-color: #333333;
	.contain{
		width: 1226px;
		margin: 0px auto;
		padding: 15px 0px;
		li{
			margin: 0px 8px;
			display: inline-block;
			cursor: pointer;
			position: relative;
			.img-box{
				position: absolute;
				visibility: hidden;
				top: 30px;
				padding: 10px;
				left: -20px;
				background-color: #ffffff;
				&::before{
					content: "";
					position: absolute;
					top: -16px;
					left: 40px;
					display: block;
					width: 0px;
					height: 0px;
					border-top: 8px solid transparent;
					border-left: 8px solid transparent;
					border-right: 8px solid transparent;
					border-bottom: 8px solid #ffffff;
				}
				img{
					width: 80px;
				}
			}
			.box{
				visibility: hidden;
				position: absolute;
				width: 200px;
				height: 80px;
				left: -100px;
				top: 19px;
				background-color: #ffffff;
				z-index: 999;
				border: 1px solid #f0f0f0;
				.text{
					text-align: center;
					line-height: 80px;
					font-size: 12px;
					color: #b0b0b0;
				}
			}
			.cart{
				position: absolute;
				top: -26px;
				width: 100px;
				height: 45px;
				text-align: center;
				line-height: 40px;
				color: #dddddd;
				background-color: rgba(255,255,255,.3);
			}
			&:hover{
				img-box{
					visibility: visible;
				}
			}
		}
		.cart-box{
			width: 100px;
		}
		li:hover{
			color: #ffffff;
			.box{
				visibility: visible;
			}
			.cart{
				color: #FF6700;
			}
		}
	}
}

// 侧栏样式
.aside{
	position: fixed;
	right: 0;
	bottom: 70px;
	z-index: 998;
	text-align: center;
	ul{
		border-top: 1px solid #f5f5f5;
		border-left: 1px solid #f5f5f5;
		li{
			text-align: center;
			font-size: 14px;
			color: #757575;
			border: 1px solid #f5f5f5;
			margin-top: -1px;
			background-color: #ffffff;
			width: 82px;
			height: 90px;
			.aside-box{
				position: absolute;
				visibility: hidden;
				top: 0;
				right: 100px;
				padding: 10px;
				background-color: #ffffff;
				z-index: 99;
				.text{
					padding: 5px 10px;
					color: #999999;
				}
				&::after{
					content: "";
					display: block;
					position: absolute;
					top: 40px;
					left: 120px;
					width: 0px;
					height: 0px;
					border-left: 10px solid #ffffff;
					border-top: 10px solid transparent;
					border-right: 10px solid transparent;
					border-bottom: 10px solid transparent;
				}
				img{
					width: 100px;
					height: auto;
					transform: scale(1);
				}
			}
			img{
				display: inline-block;
				vertical-align: bottom;
				width: 30px;
				height: 30px;
				margin: 0 auto 8px;
				padding-top: 18px;
			}
			img:nth-child(2){
				display: none;
			}
			&:hover{
				img:nth-child(2){
					display: inline-block;
				}
				p{
					color: #FF6700;
				}
				img:nth-child(1){
					display: none;
				}
				.aside-box{
					visibility: visible;
					img{
						display: block;
					}
				}
			}
		}
		li:last-child{
			margin-top: 14px;
		}
	}
}

// 底部样式
.footer{
	width: 100%;
	padding-bottom: 20px;
	background-color: #fff;
	.footer-box{
		width: 1226px;
		margin: 0 auto;
	}
	.flex-footer-box{
		display: flex;
		padding: 20px 0px;
		border-bottom: 1px solid #cccccc;
		font-size: 14px;
		li{
			text-align: center;
			border-right: 1px solid #f0f0f0;
			width: 20%;
			&:hover{
				color: #FF6700;
				cursor: pointer;
			}
			.iconfont{
				font-size: 20px;
			}
		}
	}
	.friend-flex-box{
		padding-top: 20px;
		display: flex;
	}
	.left-box{
		display: flex;
		width: 976px;
		li{
			flex: 1;
			ul{
				font-size: 12px;
				li{
					margin-bottom: 10px;
					cursor: pointer;
				}
				li:hover{
					color: #FF6700;
				}
				li:nth-child(1){
					margin-bottom: 20px;
					font-size: 14px;
				}
			}
		}
	}
	.right-box{
		border-left: 1px solid #cccccc;
		text-align: center;
		width: 250px;
		height: 112px;
		.photo-title{
			color: #FF6700;
			font-size: 16px;
		}
		.desc-time{
			font-size: 12px;
			color: #616161;
			margin: 10px 0px;
		}
		.right-msg-box{
			width: 120px;
			height: 30px;
			line-height: 30px;
			font-size: 12px;
			color: #FF6700;
			border: 1px solid #FF6700;
			margin: 0 auto;
			i{
				font-size: 16px;
			}
			&:hover{
				background-color: #FF6700;
				color: #ffffff;
				i{
					color: #ffffff;
				}
			}
		}
		.right-box-bottom{
			margin-top: 10px;
			font-size: 12px;
			&:hover{
				color: #FF6700;
			}
			i{
				margin-left: 10px;
			}
		}
	}
	.footer-bottom-box{
		span{
			cursor: pointer;
			margin-right: 7px;
			font-size: 14px;
			color: #757575;
			&:nth-last-child(1){
				margin-right: 0px;
			}
		}
		.text:hover{
			color: #FF6700;
		}
		.bottom-describ{
			margin-top: 15px;
			font-size: 14px;
			color: #333333;
			span{
				color: #757575;
				cursor: pointer;
				&:hover{
					color: #FF6700;
				}
			}
		}
		.bottom-pic-box{
			margin-top: 10px;
			img{
				width: autp;
				height: 28px;
				margin-right: 20px;
			}
			img:nth-child(1){
				height: 57px;
			}
		}
	}
}
</style>