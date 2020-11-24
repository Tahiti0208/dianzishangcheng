<template>
    <div>
        <div class="component">
            <div class="component-left">
                <div class="component-left-img-box" v-for="(item,index) in list.left" :key="index">
                    <img :src="item" alt="">
                </div>
            </div>
            <div class="component-right">
                <ul class="component-right-flex-box">
                    <li v-for="(item,index) in list.right[selectId]" :key="index" @click="$router.push('/details')">
                        <el-card shadow="hover" :body-style="{padding:'0px'}">
                            <div class="imgBox">
                                <img class="img" :src="item.img" alt="">
                            </div>
                            <p class="title">{{item.title}}</p>
                            <p class="decs">{{item.decs}}</p>
                            <p class="price">
                                <span class="new-price">{{item.newPrice}}元</span>
                                <span class="old-price">{{item.oldPrice}}元</span>
                            </p>
                        </el-card>
                    </li>
                    <li class="list-8">
                        <el-card shadow="hover" :body-style="{padding:'30px 0px 0px 0px',marginBottom:'20px'}" @click="$router.push('/details')">
                            <div class="right-title-box fl">
                                <p class="title">{{list.endObj.title}}</p>
                                <p class="price">
                                    <span class="new-price">{{list.endObj.newPrice}}元</span>
                                </p>
                            </div>
                            <div class="right-pic-box fl">
                                <img :src="list.endObj.img" alt="">
                            </div>
                        </el-card>
                        <el-card shadow="hover" :body-style="{padding:'40px 0px 0px 0px'}">
                            <div class="right-title-box fl">
                                <p class="title title-end">浏览更多</p>
                                <p class="desc">热门</p>
                            </div>
                            <div class="right-pic-box fl">
                                <div class="cicle"><i class="el-icon-right"></i></div>
                            </div>
                        </el-card>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:["list","selectId"],
        methods:{
            selectShow(index,event,option){
                if(event.target.getAttribute("class") == "active"){
                    return
                }
                this[option] = index
                event.target.parentElement.getElementsByClassName("active")[0].classList.remove("active")
                event.target.classList.add("active")
            }
        }
    }
</script>

<style lang="scss" scoped>
.component{
    width: 1226px;
    margin: 0px auto;
    display: flex;
    .component-left{
        width: 234px;
        margin-right: 20px;
        .component-left-img-box{
            width: 234px;
            height: 300px;
            &:nth-child(1){
                margin-bottom: 20px;
            }
            img{
                width: 234px;
            }
        }
    }
    .component-right{
        width: 972px;
        .component-right-flex-box{
            display: flex;
            flex-wrap: wrap;
            align-content: space-between;
            width: 100%;
            height: 620px;
            justify-content: space-between;
            li{
                width: 234px;
                height: 300px;
                text-align: center;
                .el-card{
                    height: 300px;
                    .imgBox{
                        height: 180px;
                        line-height: 286px;
                        img{
                            width: 180px;
                        }
                    }
                    .title{
                        color: #333333;
                        margin-bottom: 5px;
                        font-size: 14px;
                    }
                    .decs{
                        font-size: 12px;
                        color: #5F5750;
                        margin-bottom: 15px;
                    }
                    .price{
                        font-size: 14px;
                        .new-price{
                            color: #FF6700;
                            margin-right: 5px;
                        }
                        .old-price{
                            color: #b0b0b0;
                            text-decoration: line-through;
                        }
                    }
                }
            }
            .list-8{
                height: 302px;
                .el-card{
                    height: 140px;
                    &:nth-child(1){
                        margin-bottom: 18px;
                    }
                    .right-pic-box{
                        width: 80px;
                        img{
                            width: 80px;
                        }
                        .cicle{
                            width: 40px;
                            height: 40px;
                            line-height: 40px;
                            border-radius: 50%;
                            text-align: center;
                            border: 3px solid #FF6700;
                            font-size: 35px;
                            color: #FF6700;
                        }
                    }
                    .right-title-box{
                        width: 120px;
                        padding: 10px 20px;
                        box-sizing: border-box;
                        .title-end{
                            font-size: 18px;
                        }
                        .desc{
                            font-size: 12px;
                            text-align: left;
                            margin-left: 25px;
                        }
                    }
                }
            }
        }
    }
}
</style>