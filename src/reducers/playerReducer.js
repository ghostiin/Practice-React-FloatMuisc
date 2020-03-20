//reducer.js
export default (state={},action)=>{
    switch(action.type){
        case 'INIT_PLAYER':
            //console.log(action.payload);
            // return {
            //     ...state,
            //     index: action.payload.index,
            //     length: action.playload.length,
            //     isPlaying: action.payload.isPlaying,
            //     album: action.payload.album,
            //     playlist: action.payload.playlist,
                
            // }
            return action.payload;
        default:
            return state;
    }
}
