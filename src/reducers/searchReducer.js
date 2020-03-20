export default (state={},action) =>{
    switch(action.type){
        case 'SEARCH':
            return {
                data: action.payload //每一次搜索得到的都是新的结果，不需要保留上一次
            }
        default:
            return state;
    }
}