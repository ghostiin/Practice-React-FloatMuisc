const AddToList = (data)=>{
    return {
        type:"ADD_LIST",
        payload: data
    }
}

const RemoveToList = (id)=>{
    return {
        type:"REMOVE_LIST",
        payload: id
    }
}

export const add2list = (data)=> (dispatch) =>{
    //可以在这里做更多数据的过滤处理

    dispatch(AddToList(data));
}

export const remove2list =(id) =>(dispatch) =>{
    dispatch(RemoveToList(id));
}