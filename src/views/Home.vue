<template>
    <div>
        <div class="body clearfix">
            <!-- 导航开始 -->
            <top-nav></top-nav>
            <!-- 导航结束 -->

            <!-- 轮播图开始 -->
            <div class="loop">
                <el-container>
                    <table-change :loopleftlist = "loopleftlist" :loopleft = "loopleft" :bgc ="'rgba(105,101,101,.6)'" :color="'#ffffff'" :border="'rgba(0,0,0.6)'"></table-change>
                    <el-main>
                        <div class="swiper-container topSwiper">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <img src="../assets/images/loop1.jpg" alt="">
                                </div>
                                <div class="swiper-slide">
                                    <img src="../assets/images/loop2.webp" alt="">
                                </div>
                                <div class="swiper-slide">
                                    <img src="../assets/images/loop3.webp" alt="">
                                </div>
                                <div class="swiper-slide">
                                    <img src="../assets/images/loop4.webp" alt="">
                                </div>
                                <div class="swiper-slide">
                                    <img src="../assets/images/loop5.webp" alt="">
                                </div>
                            </div>
                            <!-- Add Arrows -->
                            <div class="swiper-button-next topSwipeButtonNext"></div>
                            <div class="swiper-button-prev topSwipeButtonPrev" ></div>
                            <!-- Add Pagination -->
                            <div class="swiper-pagination topSwiperPagination"></div>
                        </div>
                    </el-main>
                </el-container>
            </div>
            <!-- 轮播图结束 -->

            <!-- 米家专属开始 -->
            <div class="body-pic-box">
                <ul class="body-pic-ul">
                    <li class="first">
                        <div class="scale-box">
                            <img src="../assets/images/miaosha.png" alt="">
                            <p>小米秒杀</p>
                        </div>
                        <div class="scale-box">
                            <img src="../assets/images/qiye.png" alt="">
                            <p>企业团购</p>
                        </div>
                        <div class="scale-box">
                            <img src="../assets/images/fm.png" alt="">
                            <p>F码通道</p>
                        </div>
                        <div class="scale-box">
                            <img src="../assets/images/fen.png" alt="">
                            <p>米粉卡</p>
                        </div>
                        <div class="scale-box">
                            <img src="../assets/images/huan.png" alt="">
                            <p>以旧换新</p>
                        </div>
                        <div class="scale-box">
                            <img src="../assets/images/chong.png" alt="">
                            <p>话费充值</p>
                        </div>
                    </li>
                    <li class="pic-box" @click="$router.push('/details')">
                        <img src="../assets/images/bodylist1.jpg" alt="">
                    </li>
                    <li class="pic-box" @click="$router.push('/details')">
                        <img src="../assets/images/bodylist2.jpg" alt="">
                    </li>
                    <li class="pic-box" @click="$router.push('/details')">
                        <img src="../assets/images/bodylist3.jpg" alt="">
                    </li>
                </ul>
            </div>
            <!-- 米家专属结束 -->

            <!-- 闪购开始 -->
            <div class="flash-fpurchase-box">
                <div class="flash-box">
                    <h2>小米闪购</h2>
                    <div class="flash-btn">
                        <div class="mySwiperButtonNext" @click="prev">
                            <i class="el-icon-arrow-right"></i>
                        </div>
                        <div class="mySwiperButtonPrev" @click="next">
                            <i class="el-icon-arrow-left"></i>
                        </div>
                    </div>
                    <div class="flash-fpurchase">
                        <div class="flash-fpurchase-left">
                            <p class="title">14:00场</p>
                            <img src="../assets/images/shandian.png" alt="">
                            <p class="end-time">距离结束还有</p>
                            <div class="flash-time">
                                <span class="time-number">00</span>
                                <span class="time-point">:</span>
                                <span class="time-number">00</span>
                                <span class="time-point">:</span>
                                <span class="time-number">00</span>
                            </div>
                        </div>

                        <!-- 右侧轮播图开始 -->
                        <div class="flash-fpurchase-right">
                            <div class="swiper-container myContainer">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide" v-for="(item,index) in navpiclist" :key="index" @click="$router.push('/details')">
                                        <img :src="item.img" alt="">
                                        <p class="swiper-title">{{item.title}}</p>
                                        <p class="swiper-desc">{{item.desc}}</p>
                                        <p class="swiper-price">
                                            <span class="swiper-price-new">{{item.price}}元</span>
                                            <span class="swiper-price-old">39.9元</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 右侧轮播图结束 -->
                    </div>
                    <div class="img-box">
                        <img src="../assets/images/ad1.webp" alt="">
                    </div>
                    <h2>手机
                        <span class="span fr">
                            查看全部
                            <i class="el-icon-arrow-right"></i>
                        </span>
                    </h2>
                    <div class="photo-box clearfix">
                        <div class="pic-left fl">
                            <el-card shadow="hover" :body-style="{padding:'0px',backgroundColor:'#F5F5F5',border:'0'}">
                                <img src="../assets/images/xm1.webp" alt="">
                            </el-card>
                        </div>
                        <div class="photo-box-right fr">
                            <ul class="box-right">
                                <li v-for="num in 8" :key="num" @click="$router.push('/details')">
                                    <el-card shadow="hover" :body-style="{padding:'20px 0px',border:'0'}"  >
                                        <img :src="require('../assets/images/' + (num + 1) + '.webp')" alt="" class="img">
                                        <p class="xm-name">小米10青春版5G</p>
                                        <p class="xm-desc">50倍潜望式变焦/轻薄5G手机</p>
                                        <p class="xm-price">2099元起</p>
                                    </el-card>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="img-box">
                        <img src="../assets/images/ad2.webp" alt="">
                    </div>
                    <div class="box">
                        <h2>家电
                            <p class="appliances fr">
                                <span class="active" @mouseenter="selectShow(0,$event,'list1Id')">热门</span>
                                <span @mouseenter="selectShow(1,$event,'list1Id')">电视影音</span>
                            </p>
                        </h2>
                        <list-component :list="list1" :selectId="list1Id"></list-component>
                    </div>

                    <div class="img-box">
                        <img src="../assets/images/ad3.webp" alt="">
                    </div>
                    <div class="box">
                        <h2>智能
                            <p class="appliances fr">
                                <span class="active" @mouseenter="selectShow(0,$event,'list2Id')">热门</span>
                                <span @mouseenter="selectShow(1,$event,'list2Id')">安防</span>
                                <span @mouseenter="selectShow(2,$event,'list2Id')">出行</span>
                            </p>
                        </h2>
                        <list-component :list="list2" :selectId="list2Id"></list-component>
                    </div>

                    <div class="img-box">
                        <img src="../assets/images/ad4.webp" alt="">
                    </div>
                    <div class="box">
                        <h2>搭配
                            <p class="appliances fr">
                                <span class="active" @mouseenter="selectShow(0,$event,'list3Id')">热门</span>
                                <span @mouseenter="selectShow(1,$event,'list3Id')">耳机音箱</span>
                            </p>
                        </h2>
                        <list-component :list="list3" :selectId="list3Id"></list-component>
                    </div>

                    <div class="img-box">
                        <img src="../assets/images/ad4.webp" alt="">
                    </div>
                    <div class="box">
                        <h2>配件
                            <p class="appliances fr">
                                <span class="active" @mouseenter="selectShow(0,$event,'list4Id')">热门</span>
                                <span @mouseenter="selectShow(1,$event,'list4Id')">保护套</span>
                                <span @mouseenter="selectShow(1,$event,'list4Id')">充电器</span>
                            </p>
                        </h2>
                        <list-component :list="list4" :selectId="list4Id"></list-component>
                    </div>

                    <div class="img-box">
                        <img src="../assets/images/ad5.webp" alt="">
                    </div>
                    <div class="box">
                        <h2>出行
                            <p class="appliances fr">
                                <span class="active" @mouseenter="selectShow(0,$event,'list5Id')">热门</span>
                                <span @mouseenter="selectShow(1,$event,'list5Id')">耳机音箱</span>
                            </p>
                        </h2>
                        <list-component :list="list1" :selectId="list5Id"></list-component>
                    </div>

                    <div class="img-box">
                        <img src="../assets/images/ad4.webp" alt="">
                    </div>
                    <div class="box">
                        <h2>视频
                            <span class="span fr">查看全部
                                <i class="el-icon-arrow-right"></i>
                            </span>
                        </h2>
                        <div class="vido-box">
                            <ul class="flex-box">
                                <li v-for="item in 4" :key="item">
                                    <el-card :body-style="{padding:'0px'}">
                                        <img src="../assets/images/ship1.webp" alt="" class="image">
                                        <div style="padding:30px">
                                            <div class="icon-box">
                                                <i class="el-icon-caret-right"></i>
                                            </div>
                                            <span>小米10青春版发布会</span>
                                        </div>
                                    </el-card>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 闪购结束 -->
        </div>
    </div>
</template>

<script>
    import looplist from "../assets/js/data"
    import topNav from "../components/public/topNav"
    import tableChange from "../components/public/tableChange"
    import Swiper from "swiper"
    import listComponent from "../components/public/list"
    export default {
        data(){
            return{
                scroll:'',
                Swiper1:"",
                showLoopList:false,
                loopleftlist:looplist,
                loopleft:["手机电话卡","电视盒子","笔记本显示器平板","家电插线板","出行穿戴","智能路由器","电源配件","健康儿童","耳机音箱","生活箱包"],
                navpiclist:[
                    {
                        img:require("../assets/images/nav1.jpg"),
                        title:'MIJOY 抽纸青春版 24包/箱 ',
                        desc :"精选原生竹浆，健康环保",
                        price:'27.9',
                    },
                    {
                        img:require("../assets/images/nav2.jpg"),
                        title:'MIJOY 抽纸青春版 24包/箱 ',
                        desc :"精选原生竹浆，健康环保",
                        price:'27.9'
                    },
                    {
                        img:require("../assets/images/nav3.jpg"),
                        title:'MIJOY 抽纸青春版 24包/箱 ',
                        desc :"精选原生竹浆，健康环保",
                        price:'27.9'
                    },
                    {
                        img:require("../assets/images/nav4.jpg"),
                        title:'MIJOY 抽纸青春版 24包/箱 ',
                        desc :"精选原生竹浆，健康环保",
                        price:'27.9'
                    },
                    {
                        img:require("../assets/images/nav5.webp"),
                        title:'MIJOY 抽纸青春版 24包/箱 ',
                        desc :"精选原生竹浆，健康环保",
                        price:'27.9'
                    },
                    {
                        img:require("../assets/images/nav6.png"),
                        title:'MIJOY 抽纸青春版 24包/箱 ',
                        desc :"精选原生竹浆，健康环保",
                        price:'27.9'
                    },
                    {
                        img:require("../assets/images/nav7.jpg"),
                        title:'MIJOY 抽纸青春版 24包/箱 ',
                        desc :"精选原生竹浆，健康环保",
                        price:'27.9'
                    },
                    {
                        img:require("../assets/images/nav8.jpg"),
                        title:'MIJOY 抽纸青春版 24包/箱 ',
                        desc :"精选原生竹浆，健康环保",
                        price:'27.9'
                    }
                ],
                list1Id:0,
                list2Id:0,
                list3Id:0,
                list4Id:0,
                list5Id:0,
                list1:{
                    left:[
                        require("../assets/images/conpent_left1.webp"),
                        require("../assets/images/conpent_left2.webp")
                    ],
                    right:[
                        [
                            {
                                img:require("../assets/images/component_right1.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_21.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_22.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_23.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_24.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_25.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_26.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            }
                        ],
                        [
                            {
                                img:require("../assets/images/list_31.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_32.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_33.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_34.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_35.png"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_36.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/nav10.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            }
                        ]
                    ],
                    endObj: {
                        img:require("../assets/images/component_right8.webp"),
                        title:'Redmi红米',
                        desc :"70英寸震撼巨屏，4K画质，细腻如真",
                        newPrice:'2999',
                        oldPrice:'3799'
                    }
                },
                 list2:{
                    left:[
                        require("../assets/images/leftlist3.webp"),
                        require("../assets/images/leftlist4.webp")
                    ],
                     right:[
                        [
                            {
                                img:require("../assets/images/list_41.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_33.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_42.png"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_51.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_61.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_63.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_65.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            }
                        ],
                        [
                            {
                                img:require("../assets/images/list_62.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_55.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/listend82.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_66.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_56.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/nav11.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_64.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            }
                        ],
                        [
                            {
                                img:require("../assets/images/detail.jpeg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/nav12.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/nav5.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/nav9.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_26.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_13.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_14.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            }
                        ]
                    ],
                    endObj: {
                            img:require("../assets/images/listend82.jpg"),
                            title:'9号平衡车',
                            desc :"70英寸震撼巨屏，4K画质，细腻如真",
                            newPrice:'2999',
                            oldPrice:'3799'
                        }
                },
                list3:{
                    left:[
                        require("../assets/images/list_left_1.webp"),
                        require("../assets/images/list_left_2.webp")
                    ],
                    right:[
                        [
                            {
                                img:require("../assets/images/list_41.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_42.png"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_43.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_44.png"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_45.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_46.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_51.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            }
                        ],
                        [
                            {
                                img:require("../assets/images/list_52.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_53.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_54.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_55.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_56.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_61.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_63.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            }
                        ]
                    ],
                    endObj: {
                            img:require("../assets/images/component_right8.webp"),
                            title:'Redmi红米',
                            desc :"70英寸震撼巨屏，4K画质，细腻如真",
                            newPrice:'2999',
                            oldPrice:'3799'
                        }
                },
                list4:{
                    left:[
                        require("../assets/images/leftlist3.webp"),
                        require("../assets/images/leftlist4.webp")
                    ],
                     right:[
                        [
                            {
                                img:require("../assets/images/list_41.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_33.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_42.png"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_51.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_61.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_63.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_65.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            }
                        ],
                        [
                            {
                                img:require("../assets/images/list_62.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_55.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/listend82.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_66.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_56.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/nav11.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_64.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            }
                        ],
                        [
                            {
                                img:require("../assets/images/details.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/nav12.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/nav5.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/nav9.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_26.jpg"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_13.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            },
                            {
                                img:require("../assets/images/list_14.webp"),
                                title:'Redmi红米电视70英寸 ',
                                desc :"70英寸震撼巨屏，4K画质，细腻如真",
                                newPrice:'2999',
                                oldPrice:'3799'
                            }
                        ]
                    ],
                    endObj: {
                            img:require("../assets/images/listend82.jpg"),
                            title:'9号平衡车',
                            desc :"70英寸震撼巨屏，4K画质，细腻如真",
                            newPrice:'2999',
                            oldPrice:'3799'
                        }
                },
            }
        },
        methods:{
            next(){
                this.Swiper.slidePrev();
            },
            prev(){
                this.Swiper.slideNext();
            },
            selectShow(index,event,option){
                if(event.target.getAttribute("class") == "active"){
                    return
                }
                this[option] = index
                event.target.parentElement.getElementsByClassName("active")[0].classList.remove("active")
                event.target.classList.add("active")
            },
            handleScroll(){
                this.scroll = parseInt(document.documentElement.scrollTop || document.body.scrollTop)
                if(this.scroll > 800){
                    this.$store.state.isShowTop = true
                }else{
                    this.$store.state.isShowTop = false
                }
            }
        },
        components:{
            topNav,
            tableChange,
            listComponent
        },
        created(){
            this.$store.state.showAside = true
            this.$store.state.showTop = true
            this.$store.state.footer = true
        },
        mounted(){
            this.$nextTick(() => {
                this.Swiper1 = new Swiper(".topSwiper",{
                    spaceBetween:30,
                    autoplay:true,
                    effect:'fade',
                    pagination:{
                        el:".topSwiperPagination",
                        clickable:true
                    },
                    navigation:{
                        nextEl:'.swiper-button-next',
                        prevEl:'.swiper-button-prev'
                    }
                });
                this.Swiper = new Swiper(".myContainer",{
                    slidesPerView:4,
                    spaceBetween:10,
                    autoplay:true
                });
            })
            window.addEventListener('scroll',this.handleScroll)
        },
        beforeDestroy(){
            window.removeEventListener("scroll",this.handleScroll)
        }
    }
</script>

<style lang="scss" scoped>
.body{
    width: 100%;
    background-color: #fff;
    .loop{
        position: relative;
        width: 1226px;
        padding-top: 20px;
        margin: 0px auto;
        .el-main{
            padding: 0;
        }
        .swiper-slide{
            img{
                width: 1226px;
            }
        }
        .swiper-button-next{
            color: #b0b0b0;
        }
        .swiper-button-prev{
            left: 270px;
            z-index: 10;
            color: #b0b0b0;
        }
        .swiper-pagination{
            text-align: right;
            margin-right: 20px;
        }
    }
}
.body-pic-box{
    width: 1226px;
    margin: 10px auto;
    .body-pic-ul{
        display: flex;
        justify-content: space-between;
        .first{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            width: 260px;
            height: 170px;
            background-color: #5f5750;
            &>div{
                width: 70px;
                height: 82px;
                text-align: center;
                color: #b0b0b0;
                box-sizing: border-box;
                border-right: 1px solid #665e57;
                border-bottom: 1px solid #665e57;
                img{
                    margin-top: 20px;
                    width: 24px;
                }
                p{
                    font-size: 14px;
                }
            }
            div:nth-child(3){
                border-right: 0px;
            }
            div:nth-child(4){
                border-bottom: 0px;
            }
            div:nth-child(5){
                border-bottom: 0px;
            }
            div:nth-child(6){
                border-right: 0px;
                border-bottom: 0px;
            }
        }
        .pic-box{
            width: 316px;
            img{
                width: 316px;
            }
        }
    }
}
.flash-fpurchase-box{
    width: 100%;
    margin-top: 15px;
    background-color: #F5F5F5;
    margin-bottom: 20px;
    .flash-box{
        width: 1226px;
        margin: 0px auto;
        position: relative;
    }
    h2{
        width: 1226px;
        font-size: 18px;
        padding-top: 20px;
        padding-bottom: 20px;
    }
    .appliances{
        font-size: 16px;
        font-weight: normal;
        span{
            margin-left: 10px;
            color: #333;
            border-bottom: 2px solid transparent;
            text-align: center;
            cursor: pointer;
            &.active{
                color: #FF6700;
                border-bottom: 2px solid #FF6700;
            }
        }
    }
    .span{
        font-size: 14px;
        color: #333;
        cursor: pointer;
        &:hover{
            color:#FF6700;
            i{
                color: #FF6700;
            }
        }
        i{
            font-size: 25px;
            vertical-align: middle;
            color: #B0B0B0;
            margin-left: 5px;
        }
    }
    .flash-btn{
        text-align: center;
        line-height: 30px;
        &>div:hover{
            i{
                color: #E53935;
            }
        }
        i{
            font-size: 20px;
            color: #9A9A9A;
            font-weight: 700;
        }
        .mySwiperButtonNext{
            position: absolute;
            top: 20px;
            right: 0px;
            width: 30px;
            height: 30px;
            border: 1px solid #cccccc;
        }
        .mySwiperButtonPrev{
            position: absolute;
            top: 20px;
            right: 30px;
            width: 30px;
            height: 30px;
            border: 1px solid #cccccc;
        }
    }
    .img-box{
        width: 1226px;
        margin: 20px auto;
        img{
            width: 100%;
        }
    }
}
.flash-fpurchase{
    display: flex;
    width: 1226px;
    margin: 0px auto;
    justify-content: space-between;
    .flash-fpurchase-left{
        width: 230px;
        height: 330px;
        background-color: #F1EDED;
        border-top: 1px solid #E53935;
        text-align: center;
        .title{
            color: #E53935;
            font-size: 18px;
            padding-top: 60px;
            padding-bottom: 35px;
        }
        .end-time{
            margin: 20px 0px;
            font-size: 16px;
            color: #6F6D6D;
        }
        .flash-time{
            span{
                display: inline-block;
                font-size: 20px;
                color: #6F6D6D;
            }
            .time-number{
                width: 40px;
                height: 40px;
                line-height: 40px;
                color: #f0f0f0;
                text-align: center;
                background-color: #6F6D6D;
            }
        }
    }
    .flash-fpurchase-right{
        width: 980px;
        height: 330px;
        position: relative;
        .swiper-slide{
            height: 330px;
            background-color: #fff;
            .swiper-title{
                font-size: 14px;
                color: #333;
            }
            .swiper-desc{
                font-size: 12px;
                color: #b8b8b8;
                margin-bottom: 20px;
            }
            .swiper-price-new{
                color: #FF6700;
                font-size: 14px;
            }
            .swiper-price-old{
                color: #b8b8b8;
                text-decoration: line-through;
                font-size: 14px;
                margin-left: 5px;
            }
        }
        .swiper-slide:nth-child(5n),
        .swiper-slide:nth-child(1){
            border-top: 1px solid #00C0A5;
        }
        .swiper-slide:nth-child(6n),
        .swiper-slide:nth-child(2){
            border-top: 1px solid #FFAC13;
        }
        .swiper-slide:nth-child(7),
        .swiper-slide:nth-child(3n){
            border-top: 1px solid #83C44E;
        }
        .swiper-slide:nth-child(4n){
            border-top: 1px solid #2196F3;
        }
        text-align: center;
        img{
            width: 100%;
        }
    }
}
.photo-box{
    .pic-left{
        img{
            width: 230px;
            height: 614px;
            vertical-align: bottom;
        }
    }
    .photo-box-right{
        width: 992px;
        .box-right{
            display: flex;
            flex-wrap: wrap;
            height: 614px;
            li{
                width: 234px;
                margin-bottom: 14px;
                margin-left: 14px;
                text-align: center;
                box-sizing: border-box;
                .el-card{
                    width: 234px;
                    height: 300.5px;
                    border: 0;
                }
                .img{
                    width: 160px;
                    height: 160px;
                    vertical-align: bottom;
                }
                .xm-name{
                    margin-top: 10px;
                    font-size: 14px;
                    color: #333;
                    margin-bottom: 2px;
                }
                .xm-desc{
                    font-size: 12px;
                    color: #b0b0b0;
                    height: 18px;
                    margin-top: 10px;
                }
                .xm-price{
                    margin-top: 15px;
                    color: #ff6700;
                }
            }
        }
    }
}
.vido-box{
    .flex-box{
        display: flex;
        justify-content: space-between;
        text-align: center;
        li{
            width: 296px;
            height: 285px;
            position: relative;
            img{
                width: 100%;
            }
            .icon-box{
                position: absolute;
                top: 130px;
                left: 20px;
                width: 30px;
                border-radius: 15px;
                border: 2px solid #f0f0f0;
                .el-icon-caret-right{
                    color: #fff;
                    font-size: 18px;
                }
            }
            .icon-box:hover{
                background-color: #FF6700;
                border: 2px solid #FF6700;
            }
        }
    }
    .image{
        width: 100%;
        display: block;
    }
}
</style>