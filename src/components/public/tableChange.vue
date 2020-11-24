<template>
    <div>
        <!-- 侧边导航栏开始 -->
        <div class="box" @mouseenter="showLoopList = true" @mouseleave = "leave">
            <div class="loop-aside" :style="[{'background':bgc},{'color':color},{'border':'1px solid' + border}]">
                <ul >
                    <li :class="['left-li',{'isadd':addColor,'active':selectId == index}]" v-for="(item,index) in loopleft" :key="index" @mouseenter="enterFunc(index)">
                        {{item}}
                        <i class="el-icon-arrow-right"></i>
                    </li>
                </ul>
            </div>
            <!-- 侧边导航栏结束 -->

            <!-- 侧边导航栏内容开始 -->
            <div class="loop-hover" v-show="showLoopList">
                <ul class="loop-hover-box clearfix">
                    <li class="loop-hover-li" @click="$router.push('/details')" v-for="(rightItem,rightList) in loopleftlist[selectId]" :key="rightList + 99">
                        <div class="loop-hover-img">
                            <img :src="rightItem.img" alt="">
                        </div>
                        <p class="loop-hover-p">{{rightItem.text}}</p>
                    </li>
                </ul>
            </div>
            <!-- 侧边导航栏内容结束 -->
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                selectId:null,
                showLoopList:false
            };
        },
        methods:{
            enterFunc(index){
                this.showLoopList = true
                this.selectId = index
            },
            leave(){
                this.showLoopList = false
                this.selectId = null
            }
        },
        props: ["loopleftlist", "loopleft","bgc",'color','border','addColor']
    }
</script>

<style lang="scss" scoped>
// 导航样式
.loop-aside{
    position: absolute;
    top: 20px;
    left: 0px;
    z-index: 1000;
    width: 260px;
    color: #333;
    box-sizing: border-box;
    padding: 10px 0px;
    .left-li{
        padding: 10px 30px;
        width: 260px;
        box-sizing: border-box;
        font-size: 16px;
        &.active{
            background-color: #FF6700;
            color: #ffffff;
        }
        &.isadd:hover{
            color: #ffffff;
        }
        .el-icon-arrow-right {
            font-size: 20px;
            font-weight: bold;
            float: right;
        }
    }
}
// 侧栏导航隐藏样式
.loop-hover{
    position: absolute;
    top: 20px;
    left: 260px;
    width: 100%;
    height: 488px;
    z-index: 1000;
}
.loop-hover-box{
    display: flex;
    flex-direction: column;
    max-width: 966px;
    height: 460px;
    flex-wrap: wrap;
    border-top: 1px solid #f0f0f0;
    border-bottom: 1px solid #f0f0f0;
    border-right: 1px solid #f0f0f0;
    box-sizing: border-box;
    background-color: #ffffff;
    padding-left: 14px;
    .loop-hover-li{
        display: flex;
        width: 226px;
        height: 75px;
        padding-top: 10px;
        box-sizing: border-box;
        flex-direction: row;
        transform: scale(.8);
        .loop-hover-img{
            flex: 1;
            height: 100%;
        }
        .loop-hover-p{
            height: 100%;
            padding-top: 20px;
            box-sizing: border-box;
            font-size: 16px;
            color: #333333;
            flex: 2;
            margin-left: 10px;
        }
    }
}
</style>