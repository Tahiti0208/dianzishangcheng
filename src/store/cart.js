export default{
    namespaced: true,
    state: {
        cartList:[]
    },
    mutations: {
        add(state,obj){
            let index = state.cartList.findIndex(_=>_.id == obj.id)
            if(index !== -1){
                state.cartList[index].num += 1
                return
            }
            state.cartList.push(obj)
        },
        del(state,index) {
            state.cartList.splice(index,1)
        },
        removeOrder(state){
            let temp = 0
            state.cartList.forEach(item => {
                if(item.isSelect){
                    temp += 1
                }
            })
            state.cartList.sort(function(item1,item2){
                if(item1.isSelect && !item2.isSelect){
                    return 1;
                }else{
                    return 0;
                }
            })
            state.cartList.splice(-temp)
        }
    },
    actions: {
    },
    modules: {
    }
}