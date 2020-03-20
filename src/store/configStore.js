import {createStore,combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import searchReducer from '../reducers/searchReducer';
import listReducer from '../reducers/listReducer';
import playerReducer from '../reducers/playerReducer';

// const demoState = {
//     searchlist: [
//         // index ->
//         //singer: artist->name
//         //coverimg : blurPicUrl/picUrl
//         //album id: id
//         //songlist [arr-> name,song id]
//     ]
// }



export default ()=>{
    const store= createStore(
        combineReducers({
            searchlist: searchReducer,
            inboxlist: listReducer,
            player: playerReducer
        }),
        applyMiddleware(thunk)
    );
    return store;
}
