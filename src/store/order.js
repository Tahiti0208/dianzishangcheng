export default{
    namespaced: true,
    state:{
        orderList:[],
        ordering:{},
        type:["待支付","待收货","已完成"]
    },
    mutations:{
        add(state,obj){
            state.orderList.push(obj)
        },
        changeType(state,id){
            const index = state.orderList.findIndex(item => item.id == id)
            state.orderList[index].orderType += 1
        }
    },
    actions: {
    },
    modules: {
    }
}