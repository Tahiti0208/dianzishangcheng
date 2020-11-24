<template>
    <div>
        <div class="nav-box">
            <div class="top-nav clearfix">
                <div class="box1 fl clearfix">
                    <!-- logo开始 -->
                    <router-link to="/">
                        <div class="logo-box fl">
                            <i class="el-icon-grape"></i>
                        </div>
                    </router-link>
                    <!-- logo结束 -->

                    <!-- <div class="category-list-box" v-show="category" @mouseenter="showcategory" @mouseleave="hidecategory">
                        <table-change :loopleftlist = "loopleftlist" :loopleft = "loopleft" :bgc ="'#ffffff'" :color="'#FF6700'" :border="'#FF6700'" :addColor="true"></table-change>
                    </div> -->
                </div>

                <!-- 导航分类开始 -->
                <div class="box2 fl clearfix">
                    <span v-for="(item,index) in navList" :key="index" @mouseenter="enter(index)" @mouseleave="leave">{{item}}</span>
                    <span>服务</span>
                    <span>社区</span>
                </div>
                <!-- 导航分类结束 -->

                <!-- 搜索框开始 -->
                <div class="box3 fr">
                    <div class="server-box fl">
                        <input type="text" @blur="cacelFunc" @focus="changeFunc($event)" v-model="searchQuery" />
                    </div>
                    <div class="bottom-box">
                        <i class="el-icon-search" ></i>
                    </div>
                    <ul class="searchbox" v-show="showSearch">
                        <li v-for="(item,index) in searchQueryList" :key="index">{{item}}</li>
                    </ul>
                </div>
                <!-- 搜索框开始 -->
            </div>
            
            <!-- 导航分类内容开始 -->
            <div class="nav-list" v-show="flag" @mouseenter="onlist" @mouseleave="outlist">
                <div class="list-box">
                    <div class="list-box-content" v-for="(item,index) in topList[topId]" :key="index" @click="$router.push({path:'/details',query:{id:item.id}})">
                        <div class="img-box">
                            <img :src="item.img" alt="">
                        </div>
                        <div class="foot">
                            <p>{{item.name}}</p>
                            <p class="price">{{item.price}}元起</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 导航分类内容结束 -->
        </div>
    </div>
</template>

<script>
    import looplist from "../../assets/js/data"
    // import tableChange from "../../components/public/tableChange.vue"
    export default {
        data(){
            return{
                loopleft:["手机电话卡","电视盒子","笔记本显示器平板","家电插线板","出行穿戴","智能路由器","电源配件","健康儿童","耳机音箱","生活箱包"],
                loopleftlist:looplist,
                category:false,
                flag:false,
                time:null,
                showSearch:false,
                searchQuery: "家电",
                navList:[
                    "小米手机",
                    "Redmi红米",
                    "电视笔记本",
                    "家电",
                    "路由器",
                    "智能硬件"
                ],
                searchQueryList: [
                    "小米手环5",
                    "Redmi K30 Pro",
                    "小米手机",
                    "小米10",
                    "净水器",
                    "全部商品",
                    "米家插线板快充版27W",
                    "Redmi手环",
                    "小米10Pro"
                ],
                topId:0,
                topList: [
                    [
                        {
                            id:'topnav1',
                            img: require("../../assets/images/list_01.webp"),
                            name: "小米青春版5G",
                            price: 999
                        },
                        {
                            id:'topnav2',
                            img: require("../../assets/images/list_02.webp"),
                            name: "小米青春版5G",
                            price: 999
                        },
                        {
                            id:'topnav3',
                            img: require("../../assets/images/list_03.webp"),
                            name: "小米青春版5G",
                            price: 999
                        },
                        {
                            id:'topnav4',
                            img: require("../../assets/images/list_04.png"),
                            name: "小米青春版5G",
                            price: 999
                        },
                        {
                            id:'topnav5',
                            img: require("../../assets/images/list_05.png"),
                            name: "小米青春版5G",
                            price: 999
                        },
                        {
                            id:'topnav6',
                            img: require("../../assets/images/list_06.png"),
                            name: "小米青春版5G",
                            price: 999
                        }
                    ],
                    [
                        {
                            id:'topnav11',
                            img: require("../../assets/images/list_11.webp"),
                            name: "小米青春版5G",
                            price: 999
                        },
                        {
                            id:'topnav12',
                            img: require("../../assets/images/list_12.webp"),
                            name: "小米青春版5G",
                            price: 999
                        },
                        {
                            id:'topnav13',
                            img: require("../../assets/images/list_13.webp"),
                            name: "小米青春版5G",
                            price: 999
                        },
                        {
                            id:'topnav14',
                            img: require("../../assets/images/list_14.webp"),
                            name: "小米青春版5G",
                            price: 999
                        },
                        {
                            id:'topnav15',
                            img: require("../../assets/images/list_15.webp"),
                            name: "小米青春版5G",
                            price: 999
                        },
                        {
                            id:'topnav16',
                            img: require("../../assets/images/list_16.webp"),
                            name: "小米青春版5G",
                            price: 999
                        }
                    ],
                    [
                        {
                            id:'topnav21',
                            img: require("../../assets/images/list_21.webp"),
                            name: "小米青春版5G",
                            price: 999
                        },
                        {
                            id:'topnav22',
                            img: require("../../assets/images/list_22.webp"),
                            name: "小米青春版5G",
                            price: 999
                        },
                        {
                            id:'topnav23',
                            img: require("../../assets/images/list_23.webp"),
                            name: "小米青春版5G",
                            price: 999
                        },
                        {
                            id:'topnav24',
                            img: require("../../assets/images/list_24.webp"),
                            name: "小米青春版5G",
                            price: 999
                        },
                        {
                            id:'topnav25',
                            img: require("../../assets/images/list_25.jpg"),
                            name: "小米青春版5G",
                            price: 999
                        },
                        {
                            id:'topnav26',
                            img: require("../../assets/images/list_26.jpg"),
                            name: "小米青春版5G",
                            price: 999
                        }
                    ],
                    [
                        {
                            id:'topnav31',
                            img: require("../../assets/images/list_31.webp"),
                            name: "小米青春版5G",
                            price: 999
                        },
                        {
                            id:'topnav32',
                            img: require("../../assets/images/list_32.webp"),
                            name: "小米青春版5G",
                            price: 999
                        },
                        {
                            id:'topnav33',
                            img: require("../../assets/images/list_33.webp"),
                            name: "小米青春版5G",
                            price: 999
                        },
                        {
                            id:'topnav34',
                            img: require("../../assets/images/list_34.webp"),
                            name: "小米青春版5G",
                            price: 999
                        },
                        {
                            id:'topnav35',
                            img: require("../../assets/images/list_35.png"),
                            name: "小米青春版5G",
                            price: 999
                        },
                        {
                            id:'topnav36',
                            img: require("../../assets/images/list_36.webp"),
                            name: "小米青春版5G",
                            price: 999
                        }
                    ],
                    [
                        {
                            id:'topnav41',
                            img: require("../../assets/images/list_41.webp"),
                            name: "小米青春版5G",
                            price: 999
                        },
                        {
                            id:'topnav42',
                            img: require("../../assets/images/list_42.png"),
                            name: "小米青春版5G",
                            price: 999
                        },
                        {
                            id:'topnav43',
                            img: require("../../assets/images/list_43.jpg"),
                            name: "小米青春版5G",
                            price: 999
                        },
                        {
                            id:'topnav44',
                            img: require("../../assets/images/list_44.png"),
                            name: "小米青春版5G",
                            price: 999
                        },
                        {
                            id:'topnav45',
                            img: require("../../assets/images/list_45.webp"),
                            name: "小米青春版5G",
                            price: 999
                        },
                        {
                            id:'topnav46',
                            img: require("../../assets/images/list_46.webp"),
                            name: "小米青春版5G",
                            price: 999
                        }
                    ],
                    [
                        {
                            id:'topnav51',
                            img: require("../../assets/images/list_51.webp"),
                            name: "小米青春版5G",
                            price: 999
                        },
                        {
                            id:'topnav52',
                            img: require("../../assets/images/list_52.webp"),
                            name: "小米青春版5G",
                            price: 999
                        },
                        {
                            id:'topnav53',
                            img: require("../../assets/images/list_53.webp"),
                            name: "小米青春版5G",
                            price: 999
                        },
                        {
                            id:'topnav54',
                            img: require("../../assets/images/list_54.webp"),
                            name: "小米青春版5G",
                            price: 999
                        },
                        {
                            id:'topnav55',
                            img: require("../../assets/images/list_55.webp"),
                            name: "小米青春版5G",
                            price: 999
                        },
                        {
                            id:'topnav56',
                            img: require("../../assets/images/list_56.jpg"),
                            name: "小米青春版5G",
                            price: 999
                        }
                    ],
                    [
                        {
                            id:'topnav61',
                            img: require("../../assets/images/list_61.jpg"),
                            name: "小米青春版5G",
                            price: 999
                        },
                        {
                            id:'topnav62',
                            img: require("../../assets/images/list_62.jpg"),
                            name: "小米青春版5G",
                            price: 999
                        },
                        {
                            id:'topnav63',
                            img: require("../../assets/images/list_63.jpg"),
                            name: "小米青春版5G",
                            price: 999
                        },
                        {
                            id:'topnav64',
                            img: require("../../assets/images/list_64.webp"),
                            name: "小米青春版5G",
                            price: 999
                        },
                        {
                            id:'topnav65',
                            img: require("../../assets/images/list_65.jpg"),
                            name: "小米青春版5G",
                            price: 999
                        },
                        {
                            id:'topna66',
                            img: require("../../assets/images/list_66.webp"),
                            name: "小米青春版5G",
                            price: 999
                        }
                    ],
                ]
            }
        },
        methods:{
            enter(index){
                this.topListId = index;
                this.flag = true;
                this.topId = index;
            },
            leave(){
                this.flag = false;
            },
            onlist(){
                this.flag = true;
            },
            outlist(){
                this.flag = false;
            },
            changeFunc(e){
                e.target.classList.add("fouc");
                this.showSearch = true;
                e.target.parentElement.parentElement.classList.add("fouc")
            },
            cacelFunc(e){
                e.target.classList.remove("fouc");
                this.showSearch = false;
                e.target.parentElement.parentElement.classList.remove("fouc")
            },
            showcategory(){
                this.category = true;
            },
            hidecategory(){
                this.category = false;
            }
        },
        components:{
            // tableChange
        }
    }
</script>

<style lang="scss" scoped>
.nav-box{
    width: 100%;
    background-color: #ffffff;
    .nav-list{
        position: absolute;
        width: 100%;
        border-top: 1px solid #dddddd;
        background-color: #ffffff;
        box-shadow: 0px 0px 1px 1px #f0f0f0, 0px 0px 0px 0px #f0f0f0, 0px -1px 1px 1px #f0f0f0, 0px 0px 0px 0px #f0f0f0;
        z-index: 10000;
        .list-box{
            width: 1226px;
            margin: 0px auto;
            padding: 15px 0px;
            display: flex;
            .list-box-content{
                text-align: center;
                font-size: 12px;
                color: #333333;
                .img-box{
                    height: 120px;
                    border-right: 1px solid #d0d0d0;
                }
                .price{
                    color: #FF6700;
                }
                .foot{
                    padding-top: 30px;
                }
            }
            list-box-content:nth-last-child(1){
                .img-box{
                    border-right: 0;
                }
            }
        }
    }
}
.top-nav{
    width: 1226px;
    margin: 0 auto;
    padding: 20px 0px 0px 0px;
    .box1{
        height: 70px;
        position: relative;
        .logo-box{
            width: 55px;
            height: 55px;
            line-height: 65px;
            margin-right: 200px;
            background-color: #FF6700;
            text-align: center;
            color: #ffffff;
            i{
                font-size: 30px;
                font-weight: 700;
            }
        }
    }
}
.category-list-box{
    width: 100px;
    text-align: center;
    line-height: 50px;
    height: 80px;
    color: #999999;
    .list-flex-box{
        display: flex;
    }
    .left-box{
        width: 300px;
        border: 1px solid #FF6700;
    }
    .right-box{
        display: flex;
        flex-direction: column;
    }
}
.box2{
    margin: 0px 20px;
    height: 70px;
    line-height: 55px;
    span{
        display: block;
        float: left;
        height: 100%;
        padding: 0px 12px;
        font-size: 14px;
        color: #333333;
        cursor: pointer;
        &:hover{
            color: #FF6700;
        }
    }
}
.box3{
    width: 300px;
    border: 1px solid #b0b0b0;
    height: 50px;
    position: relative;
    &.fouc{
        border: 1px solid #FF6700;
    }
    .searchbox{
        position: absolute;
        top: 51px;
        width: 251px;
        left: -1px;
        box-sizing: border-box;
        background-color: #ffffff;
        border-bottom: 1px solid #FF6700;
        border-left: 1px solid #FF6700;
        border-right: 1px solid #FF6700;
        padding-top: 10px;
        z-index: 99;
        li{
            color: #424242;
            margin-bottom: 10px;
            padding-left: 20px;
            font-size: 12px;
            height: 20px;
            line-height: 20px;
        }
    }
    .server-box{
        width: 250px;
        height: 50px;
        input{
            border: 0px;
            outline: none;
            width: 100%;
            height: 100%;
            padding-left: 10px;
            box-sizing: border-box;
            font-size: 16px;
            color: #b0b0b0;
            outline: none;
            border-right: 1px solid #b0b0b0;
            &.fouc{
                border-right: 1px solid #FF6700;
            }
        }
    }
    .bottom-box{
        text-align: center;
        line-height: 50px;
        font-size: 20px;
        font-weight: 700;
        color: #424242;
        &:hover{
            background-color: #FF6700;
            color: #ffffff;
        }
    }
}
</style>