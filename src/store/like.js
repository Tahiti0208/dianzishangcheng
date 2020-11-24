export default{
    namespaced: true,
    state:{
        likeList:[]
    },
    mutations:{
        add(state,obj){
            state.likeList.unshift(obj)
        },
        edit(state,obj){
            const index = state.likeList.findIndex(item=>item.id == obj.id)
            Object.assign(state.likeList[index],obj)
        },
        del(state,index){
            state.likeList.splice(index,1)
        }
    },
    actions: {
    },
    modules: {
    }
}