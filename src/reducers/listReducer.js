export default (state=[],action) => {
    switch(action.type){
        case 'ADD_LIST':
            return [
                ...state,
                action.payload
            ]
        case 'REMOVE_LIST':
            return state.filter((e)=>{
                return e.id!==action.payload
            })
        default: 
            return state;
    }
}