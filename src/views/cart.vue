<template>
    <div class="page">
        <div class="hearder">
            <div class="hearder-container clearfix">
                <div class="fl">
                    <router-link to="/">
                        <div class="logo">
                            <i class="el-icon-grape"></i>
                        </div>
                    </router-link>
                    <span class="title">我的购物车</span>
                </div>
                <p class="login-text fr" v-show="!($store.state.username)">
                    <router-link to="/login">登录</router-link>
                    |
                    <router-link to="/login">注册</router-link>
                </p>
                <p class="top-nav fr" v-show="$store.state.username">
                    <el-dropdown  @command="handleCommand">
                        <span class="el-dropdown-link name">
                            {{ $store.state.username }}
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item  command="my" >个人中心</el-dropdown-item>
                            <el-dropdown-item command="order" >评价晒单</el-dropdown-item>
                            <el-dropdown-item command="like" >我的喜欢</el-dropdown-item>
                            <!-- <el-dropdown-item command="login" >退出登录</el-dropdown-item> -->
                        </el-dropdown-menu>
                        
                        <el-divider direction="vertical"></el-divider>
                    </el-dropdown>
                    <span class="my-order">我的订单</span>
                </p>
            </div>
        </div>
        <div class="body">
            <div class="empty-body clearfix" v-show="!(cartList.length)">
                <div class="empty-body-left fl">
                    <img src="../assets/images/cart-empty.png" alt="">
                </div>
                <div class="empty-body-right fl">
                    <h2 class="empry-title">您的购物车还是空的！</h2>
                    <p class="empty-desc" v-show="!($store.state.username)">登录后将显示您之前加入的商品</p>
                    <p>
                        <router-link to="/login" v-show="!($store.state.username)" class="btn login-btn" tag="button" >立即登录</router-link>
                        <router-link to="/home" class="btn shping-btn" tag="button">马上购物</router-link>
                    </p>
                </div>
            </div>
            <div class="cart-list-box" v-show="(cartList.length)">
                <div class="cart-list">
                    <ul >
                        <li class="flex-box title">
                            <div class="select">
                                <div class="inp-box fl">
                                    <span :class="{'active':checkAll}">
                                        <i  class="el-icon-check"></i>
                                    </span>
                                    <input type="checkbox" v-model="checkAll">
                                </div>
                                全选
                            </div>
                            <div class="goods">商品名称</div>
                            <div class="price">单价</div>
                            <div class="num">数量</div>
                            <div class="calc">小计</div>
                            <div class="option">操作</div>
                        </li>
                        <li class="flex-box child" v-for="(item,index) in cartList" :key="index">
                            <div class="select">
                                <div class="inp-box fl">
                                    <span :class="{'active':item.isSelect}">
                                        <i  class="el-icon-check"></i>
                                    </span>
                                    <input type="checkbox" v-model="item.isSelect">
                                </div>
                                
                            </div>
                            <div class="goods">
                                <img class="goods-img" src="../assets/images/list_01.webp" alt="">
                                <span class="cart-title">{{ item.name }} {{ item.containerStyle }} {{item.colorStyle}}</span>
                            </div>
                            <div class="price"><span>{{item.newPrice}}元</span></div>
                            <div class="num">
                               <div class="num-box">
                                    <button  @click="item.num = item.num<=1?1:--item.num"><i  class="el-icon-minus"></i></button>
                                        <input type="button" v-model="item.num">
                                   <button @click="item.num++"><i class="el-icon-plus"></i></button>
                               </div>
                            </div>
                            <div class="calc">
                                <span>{{ item.num * item.newPrice }}元</span>
                            </div>
                            <div class="option" @click="del(index)"><i class="el-icon-close"></i></div>
                            <div class="other-select" v-show="item.isSelect">
                                <div v-show="item.save">
                                    <div class="img-box"><img src="../assets/images/save.png" alt=""></div>
                                    <p class="goods  ">
                                        <span class="other-title">意外保障服务</span> <br>
                                        <span> 手机意外碎屏/进水/碾压等损坏</span>
                                    </p>
                                    <p class="price"><span>349元</span></p>
                                    <p class="num">1</p>
                                    <span class="calc"><span>349元</span></span>
                                    <div class="option" @click="item.save=false"><i class="el-icon-close"></i></div>
                                </div>
                                <div v-show="item.longer">
                                    <div class="img-box"><img src="../assets/images/save.png" alt=""></div>
                                    <p class="goods  ">
                                        <span class="other-title">延长保修服务</span> <br>
                                        <span> 手机意外碎屏/进水/碾压等损坏</span>
                                    </p>
                                    <p class="price"><span>159元</span></p>
                                    <p class="num">1</p>
                                    <span class="calc"><span>159元</span></span>
                                    <div class="option" @click="item.longer=false"><i class="el-icon-close"></i></div>
                                </div>
                                <div v-show="item.cound" >
                                    <div class="img-box"><img src="../assets/images/save.png" alt=""></div>
                                    <p class="goods  ">
                                        <span class="other-title">延长保修服务</span> <br>
                                        <span> 手机意外碎屏/进水/碾压等损坏</span>
                                    </p>
                                    <p class="price"><span>239元</span></p>
                                    <p class="num">1</p>
                                    <span class="calc"><span>239元</span></span>
                                    <div class="option" @click="item.cound=false"><i class="el-icon-close"></i></div>
                                </div>
                            </div>
                            <div class="other-box" v-show="item.isSelect">
                                <div v-show="!item.save"  @click="open(index,0)">
                                    <i class="el-icon-circle-plus"></i>
                                    <span>意外保障服务349元</span>
                                    <span>了解意外保护></span>
                                </div>
                                <div v-show="!item.longer"  @click="open(index,1)">
                                    <i class="el-icon-circle-plus"></i>
                                    <span>延长保修服务 159元</span>
                                    <span>了解延长保护></span>
                                </div>
                                <div v-show="!item.cound"  @click="open(index,2)">
                                    <i class="el-icon-circle-plus"></i>
                                    <span>云空间年卡500G239元</span>
                                    <span>了解云空间服务></span>
                                </div>
                            </div>
                        </li>
                    </ul>
                    
                </div>
                <div class="cart-total clearfix">
                        <span class="continu">继续购物</span>
                        <span class="descript">共 <span> {{ totalGoods }} </span> 件商品，已选择  <span> {{ selectGoods }}</span> 件</span>
                        <div class="fr btn">
                            <span>合计 <span class="result">{{ totalPrice }}</span> 元 </span>
                             <el-button class="fr" @click="requireOrder" >去结算</el-button>
                            
                        </div>
                    </div>
            </div>
            <!-- 提示信息 -->
            <el-dialog
                title="提示"
                :visible.sync="centerDialogVisible2"
                width="30%"
                center>
                <span style="display:block;text-align:center;color:#ff6700;font-size:16px">请选择至少一个商品</span>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="centerDialogVisible2 = false">取 消</el-button>
                    <el-button type="primary" @click="centerDialogVisible2 = false">确 定</el-button>
                </span>
                </el-dialog>

            <div class="recomment-goods">
                <h2 class="recomment-title">为您推荐</h2>
                <ul class="recomment-flex-box">
                    <li v-for="(item,index) in goodslist" :key="index" @click="$router.push('/details')">
                        <div class="pic-box">
                            <img :src="item.img" alt="">
                        </div>
                        <p class="title">{{item.title}}</p>
                        <p class="price">{{item.newPrice}}元</p>
                        <p class="pj">2677人好评</p>
                        <div class="btn-box">加入购物车</div>
                    </li>
                    <el-divider></el-divider>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                centerDialogVisible2:false,
                cartList:[],
                centerDialogVisible:false,
                checked:false,
                num:1,
                check:false,
                goodslist:[
                    {
                        img:require("../assets/images/list_01.webp"),
                        title:'小米手环4 NFC版',
                        newPrice:199,
                        oldPrice:299
                    },
                     {
                        img:require("../assets/images/list_02.webp"),
                        title:'小米手环4 NFC版',
                        newPrice:199,
                        oldPrice:299
                    },
                    {
                        img:require("../assets/images/list_03.webp"),
                        title:'小米手环4 NFC版',
                        newPrice:199,
                        oldPrice:299
                    },
                    {
                        img:require("../assets/images/list_04.png"),
                        title:'小米手环4 NFC版',
                        newPrice:199,
                        oldPrice:299
                    },
                    {
                        img:require("../assets/images/list_05.png"),
                        title:'小米手环4 NFC版',
                        newPrice:199,
                        oldPrice:299
                    },
                    {
                        img:require("../assets/images/list_06.png"),
                        title:'小米手环4 NFC版',
                        newPrice:199,
                        oldPrice:299
                    },
                    {
                        img:require("../assets/images/list_11.webp"),
                        title:'小米手环4 NFC版',
                        newPrice:199,
                        oldPrice:299
                    },
                    {
                        img:require("../assets/images/list_12.webp"),
                        title:'小米手环4 NFC版',
                        newPrice:199,
                        oldPrice:299
                    },
                     {
                        img:require("../assets/images/list_13.webp"),
                        title:'小米手环4 NFC版',
                        newPrice:199,
                        oldPrice:299
                    },
                    {
                        img:require("../assets/images/list_14.webp"),
                        title:'小米手环4 NFC版',
                        newPrice:199,
                        oldPrice:299
                    },
                    {
                        img:require("../assets/images/list_15.webp"),
                        title:'小米手环4 NFC版',
                        newPrice:199,
                        oldPrice:299
                    },
                    {
                        img:require("../assets/images/list_16.webp"),
                        title:'小米手环4 NFC版',
                        newPrice:199,
                        oldPrice:299
                    },
                    {
                        img:require("../assets/images/list_21.webp"),
                        title:'小米手环4 NFC版',
                        newPrice:199,
                        oldPrice:299
                    },
                     {
                        img:require("../assets/images/list_22.webp"),
                        title:'小米手环4 NFC版',
                        newPrice:199,
                        oldPrice:299
                    },
                    {
                        img:require("../assets/images/list_23.webp"),
                        title:'小米手环4 NFC版',
                        newPrice:199,
                        oldPrice:299
                    },
                    {
                        img:require("../assets/images/list_24.webp"),
                        title:'小米手环4 NFC版',
                        newPrice:199,
                        oldPrice:299
                    },
                    {
                        img:require("../assets/images/list_25.jpg"),
                        title:'小米手环4 NFC版',
                        newPrice:199,
                        oldPrice:299
                    },
                    {
                        img:require("../assets/images/list_26.jpg"),
                        title:'小米手环4 NFC版',
                        newPrice:199,
                        oldPrice:299
                    },
                    {
                        img:require("../assets/images/list_31.webp"),
                        title:'小米手环4 NFC版',
                        newPrice:199,
                        oldPrice:299
                    },
                    {
                        img:require("../assets/images/list_32.webp"),
                        title:'小米手环4 NFC版',
                        newPrice:199,
                        oldPrice:299
                    }
                ]
            }
        },
        methods:{
            handleChange(){},
            spliceNum(index){
                let num = this.cartList[index].num
                num = num <= 1 ? 1 : --num
                this.cartList[index].num = num
            },
            handleCommand(command) {
                if(command == 'my') {
                    this.$router.push('/my/myMsg')
                } else if(command == 'order') {
                    this.$router.push('/my/order/end')
                } else if(command == 'like'){
                    this.$rouetr.push('/my/like')
                } else {
                    this.$store.state.username = ""
                }
            },
            open(index,num) {
                const _this = this
                const arr = ["意外保障服务","延长保修服务","云空间年卡500G"]
                const price = [349,159,239]
                const h = this.$createElement;
                this.$msgbox({
                    title: '购买服务',
                    center: true,
                    message: h('p', null, [
                        h('span', null, arr[num]),
                        h('i', { style: 'color: teal' }, price[num] + '元')
                    ]),
                    showCancelButton: false,
                    confirmButtonText: '确定',
                }).then(() => {
                    if(num == 0) {
                        _this.cartList[index].save = true
                    }else if (num == 1) {
                        _this.cartList[index].longer = true
                    }else {
                        _this.cartList[index].cound = true
                    }
                    
                    this.$message({
                        type: 'info',
                        message: '添加' +arr[num] +'成功'
                    });
                }).catch(()=>{
                    
                });
            },
            requireOrder(){
                if(this.$store.state.username == "") {
                    this.$router.push('/login')
                    return ;
                }
                if(this.selectGoods==0 ){
                    this.centerDialogVisible2 = true
                    return ;
                }
                this.$router.push("/requireorder")
            },
            del(index){
                this.cartList.splice(index,1)
                this.$store.commit("cart/del",index)
            }
        },
        computed:{
            checkAll:{
                get(){
                    return this.cartList.every(item=>item.isSelect)
                },
                set(value) {
                    this.cartList.forEach(item=>{
                        item.isSelect = value
                    })
                }
            },
            totalPrice(){
                return this.cartList.reduce((total,item)=>{
                        if(item.isSelect) {
                            if (item.save) {
                                total += 349
                            }
                            if(item.longer) {
                                total += 159
                            }
                            if(item.cound) {
                                total += 239
                            }
                            total += item.num * item.newPrice
                        }
                        return total
                },0)
            },
            totalGoods(){
                return this.cartList.reduce((total,item) => {
                    if(!item.isSelect) {
                        total += item.num
                    } else {
                        if(item.save) {
                            total += 1
                        }
                        if(item.longer) {
                            total += 1
                        }
                        if(item.cound) {
                            total += 1
                        }
                        total += item.num
                    }
                    
                    return total 
                },0)
            },
            selectGoods(){
                return this.cartList.reduce((total,item) => {
                    if(item.isSelect) {
                        if(item.save) {
                            total += 1
                        }
                        if(item.longer) {
                            total += 1
                        }
                        if(item.cound) {
                            total += 1
                        }
                        total += item.num
                    } 
                    return total 
                },0)
            }
        },
        created(){
            this.$store.state.showAside = false
            this.$store.state.showTop = false
            this.$store.state.footer = true 
            Object.assign(this.cartList,this.$store.state.cart.cartList)
            this.cartList = JSON.parse(JSON.stringify(this.cartList))
        },
        beforeDestroy(){
            this.$store.state.cart.cartList = this.cartList
            this.$msgbox = null
        }
    }
</script>

<style lang="scss" scoped>
.hearder{
    width: 100%;
    border-bottom: 2px solid #FF6700;
    .title{
        font-size: 24px;
        color: #333;
        margin-left: 20px;
    }
    .login-text{
        font-size: 12px;
    }
    .top-nav{
        font-size: 12px;
        color: #666;
        cursor: pointer;
        span:hover{
            color: #FF6700;
        }
        .el-dropdown-link{
            font-size: 14px;
        }
    }
}
.hearder-container{
    padding: 20px 0;
    width: 1226px;
    margin: 0 auto;
    line-height: 40px;
    .logo{
        display: inline-block;
        width: 50px;
        height: 50px;
        background-color: #FF6700;
        vertical-align: middle;
        line-height: 60px;
        text-align: center;
        i{
            font-size: 30px;
            color: #fff;
            font-weight: bolder;
        }
    }
    
    
}
.name{
    font-size: 14px;
}
.body{
    background-color: #F7F7F7;
}
.empty-body{
    width: 1226px;
    margin: 0 auto;
    padding: 100px 0;
    text-align: center;
    .empty-body-left{
        width: 50%;
        img{
            width: 280px;
        }
    }
    .empty-body-right{
        height: 50%;
        text-align: left;
        .empry-title{
            padding-top: 50px;
            font-size: 36px;
            font-weight: bold;
            color: #B0B0B0;
        }
        .empty-desc{
            font-size: 18px;
            color: #B0B0B0;
            margin:5px 0  0px 0;
        }
        .btn{
            display: inline-block;
            margin-top: 20px;
            width: 170px;
            height: 48px;
            line-height: 48px;
            border: 1px solid #FF6700;
            font-size: 14px;
            text-align: center;
        }
        .login-btn{
            background-color: #FF6700;
            color: #fff;
           margin-right: 10px;
        }
        .shping-btn{
            color: #FF6700;
            background-color: #fff;
        }
    }

}
.recomment-goods{
    width: 1226px;
    margin: 0 auto;
    .recomment-title{
        text-align: center;
        position: relative;
        color: #B0B0B0;
        padding: 20px;
        &::after,
        &::before{
            display: block;
            content: "";
            width: 300px;
            border-top: 1px solid #ccc;
            position: absolute;
            top: 50%;
        }
        &::before{
            left: 200px;
        }
         &::after{
            right: 200px;
        }
        
    }
    .recomment-flex-box{
        display: flex;
        width: 1226px;
        justify-content: space-between;
        flex-wrap: wrap;
        height: 1360px;
        align-content:space-between;
        padding-bottom:30px ;
        .pic-box{
            height: 140px;
            line-height: 220px;
        }
        li{
            width: 234px;
            position: relative;
            height: 300px;
            background-color: #fff;
            text-align: center;
            padding-top: 20px;
            box-sizing: border-box;
            font-size: 14px;
            overflow: hidden;
            &:hover{
                transition:  all 1s linear 0s;
                .btn-box{
                    animation:totop 1s alternate ;
                    animation-fill-mode:forwards
                }
            }
            img{
                width: 140px;
            }
            .title{
                margin-top: 20px;
                color: #666;
            }
            .price{
                color: #FF6700;
                margin: 10px 0;
            }
            .pj{
                color: #888;
                font-size: 12px;
            }
            .btn-box{
                width: 120px;
                height: 30px;
                line-height: 30px;
                text-align: center;
                transform: translateX(-50%);
                left: 50%;
                border: 1px solid #FF6700;
                position: absolute;
                font-size: 12px;
                color: #FF6700;
                bottom: -60px;
                background-color: #fff;
                cursor: pointer;
                &:hover{
                    background-color: #FF6700;
                    color: #fff;
                }
            }
        }
    }

}
.cart-list-box{
    width: 100%;
    padding: 20px 0;
    box-sizing: border-box;
    background-color: #F7F7F7;
}
.cart-list{
    width: 1226px;
    margin: 0px auto;
    background-color: #fff;
    &>ul{
        width: 100%;
        margin-top: 30px;
        padding: 10px 20px ;
        box-sizing: border-box;
        justify-content: space-between;
        .child{
            padding: 20px 0;
            box-sizing: border-box;
        }
        .title{
            height: 70px;
            line-height: 70px;
            border-bottom: 1px solid #f0f0f0;
            box-sizing: border-box;
        }
    }
    .flex-box{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        color: #333;
        .select{
            width: 110px;
            position: relative;
            padding-left: 35px;
            box-sizing: border-box;
            .inp-box{
                left: 0px;
                input{
                    position: absolute;
                    left: 0;
                    top: 50%;
                    margin-top: -10px;
                    width: 20px;
                    height: 20px;
                    border: 0;
                    opacity: 0;
                }
                span{
                    display: inline-block;
                    position: absolute;
                    left: 0;
                    top: 50%;
                    margin-top: -10px;
                    width: 20px;
                    height: 20px;
                    background-color: #fff;
                    border: 1px solid #f0f0f0;
                    text-align: center;
                    line-height: 20px;
                    .el-icon-check{
                        color: #fff;
                        font-weight: bold;
                        
                    }
                }
                .active{
                    background-color: #ff6700;
                    border-color: #FF6700;
                }
            }
        }
        .goods{
            width: 500px;
            .cart-title{
                color: #333;
                padding-left: 30px;
                font-size: 18px;
            }
                
            .goods-img{
                width: 80px;
                // height: 80px;
                vertical-align: middle;
            }
        }
        .price{
            width: 150px;
             span{
                line-height: 60px;
            }
        }
        .num{
            width:180px ;
            .num-box{
                border: 1px solid #f0f0f0;
                width: 130px;
                margin-top: 10px;
                height: 40px;
                button{
                    border: 0;
                    background-color: #fff;
                    width: 40px;
                    // line-height: 40px;
                    font-size: 16px;
                    color: #999;
                }
                input[type="button"]{

                    border: 0;
                    background-color: #fff;
                    outline: none;
                    width: 50px;
                    height: 38px;
                    box-sizing: border-box;
                    overflow: hidden;
                    font-size: 16px;
                    color: #666;
                }

            }
        }
        .calc{
            width: 150px;
            font-size: 14px;
            span{
                line-height: 60px;
                color: #ff6700;
            }
        }
        .option{
            width: 80px;
             i{
                line-height: 60px;
            }
        }
        .other-box{
            width: 100%;
            padding-left: 110px;
            box-sizing: border-box;
            margin-top: 10px;
            div{
                margin-top: 10px;
                width: 100%;
                height: 50px;
                border: 1px solid #f0f0f0;
                padding-left: 15px;
                line-height: 50px;
                i{
                    color: #ff6700;
                    font-size: 20px;
                    vertical-align: middle;
                }
                span{
                    margin-left: 20px;
                    font-size: 14px;
                    color: #666;
                    &:nth-child(3){
                        color: #ff6700;
                    }
                }

            }
        }
        .other-select{
            padding-left: 120px;
            box-sizing: border-box;
            width: 100%;
            &>div{
                margin-top: 5px;
                width: 100%;
                background-color: #f0f0f0;
                padding: 20px;
                box-sizing: border-box;
                display: flex;
                .img-box{
                    width: 80px;
                    img{
                        width: 60px;
                    }
                }
                .goods{
                    margin-top: 10px;
                    width: 400px;
                    padding-left: 30px;
                    box-sizing: border-box;
                    .other-title{
                        font-size: 16px;
                        color: #666;
                    }
                    span:nth-child(3){
                        font-size: 12px;
                        color: #888;
                    }
                }
                .num{
                    margin-top: 20px;
                    padding-left: 50px;
                    box-sizing: border-box;

                }
            }
        }
    }
}
.cart-total{
    position: sticky;
    bottom: 0;
    margin: 20px auto;
    height: 50px;
    padding-left: 10px;
    line-height: 50px;
   width: 1226px;
   box-sizing: border-box;
   font-size: 14px;
   color: #444;
   background-color: #fff;
   .continu{
       margin-right: 10px;
       cursor: pointer;
       &:hover{
           color: #ff6700;
       }
   }
   .descript{
       span{
           color:#ff6700;
       }
   }
   .btn{
       color: #ff6700;
       .result{
           font-size: 25px;
           display: inline-block;
           line-height: 0px;
           margin-top: 28px;
       }
       .el-button{
           width: 150px;
           height: 50px;
           background-color: #ff6700;
           color: #fff;
            margin-left:30px;
           font-size: 18px;
       }
   }
}

@keyframes totop{
    0%{
        bottom:-40px
    }
    50%{
        bottom: 32px;
    }
    100%{
        bottom: 32px;
    }
}
</style>