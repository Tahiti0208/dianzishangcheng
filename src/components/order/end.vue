<template>
    <div>
        <div class="empty" v-if="!orderList.length">
            <h2>目前没有交易订单</h2>
        </div>
        <div class="mag-box" v-for="(item,index) in orderList" :key="index">
            <div class="pay-header clearfix">
                <p class="pay-title">{{ $store.state.order.type[item.orderType] }}</p>
                <p class="fl">
                    <span>{{ item.time }}</span>
                    <el-divider direction="vertical"></el-divider>
                    <span>{{ item.address.name }}</span>
                    <el-divider direction="vertical"></el-divider>
                    <span>订单号：{{ item.orderId }}</span>
                    <el-divider direction="vertical"></el-divider>
                    <span>在线支付</span>
                </p>
                <p class="fr">
                    <span v-if="item.orderType == 0">应付</span>
                    <span v-else>已付</span>
                    金额:
                    <span>{{item.totalPrice}}</span>
                </p>
            </div>
            <el-row :gutter="20">
                <el-col :span="16">
                    <div class="msg-content" v-for="(goodItem,goodIndex) in item.orderGoods" :key="goodIndex + 100">
                        <img :src="goodItem.img" :class="['img', 'fl',{'other':goodItem.id == null}]" alt />
                        <div class="fl text">
                            <p>{{ goodItem.name }} {{ goodItem.containerStyle }} + {{ goodItem.colorStyle }}</p>
                            <p>
                                {{ goodItem.price }} 元
                                <i class="el-icon-close"></i>
                                {{ goodItem.num }}
                            </p>
                        </div>
                    </div>
                </el-col>
                <el-col :offset="4" :span="4">
                    <!-- <el-button v-if="item.orderType == 0" class="pay" @click="continupay(item.id,item.totalPrice)">立即支付</el-button>
                    <el-button v-if="item.orderType == 1" class="pay" @click="requireOrder(item.id)">确认收货</el-button> -->
                    <el-button class="pay" disabled>已完成</el-button>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                orderList:[]
            };
        },
        created() {
            this.orderList = this.$store.state.order.orderList.filter(item => {
                return item.orderType == 2;
            });
        }
    }
</script>

<style lang="scss" scoped>
.empty{
    h2{
        padding: 40px 0;
        color: #888;
        font-size: 18px;
        text-align: center;
    }
}
.mag-box {
    margin-top: 20px;
    border: 1px solid #ff6700;
}
.pay-header {
    color: #888;
    font-size: 12px;
    background-color: #fffaf7;
    padding: 20px;
    box-sizing: border-box;
    border-bottom: 1px solid #ffe5d4;
    .pay-title {
        color: #ff6700;
        font-size: 16px;
        margin-bottom: 5px;
    }
    .el-col-20 {
        height: 80px;
    }
}
.img {
    width: 80px;
    &.other {
        transform: scale(0.8);
    }
}
.el-col-4 {
    margin-top: 10px;
}
.pay {
    background-color: #ff6700;
    color: #fff;
}
.msg-content {
    padding: 10px 0;
    height: 80px;
    .text {
        padding-top: 6px;
        color: #444;
        p:nth-child(2) {
        font-size: 14px;
        }
        .other-goods {
        padding-top: 10px;
        }
    }
}
</style>