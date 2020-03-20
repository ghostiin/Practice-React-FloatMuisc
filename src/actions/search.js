import {searchAlbum,albumDetail} from '../common/api';

//action
const initResList= (data)=>{
    // console.log({
    //     type: "SEARCH",
    //     payload: data
    //     });
    return {
    type: "SEARCH",
    payload: data
    }
}

//action creator 
//where call apis

export const search =(query)=>async (dispatch) =>{
    
    const res= await searchAlbum(query);
    const data= Array.from(res.data.result.albums);
    data.forEach(async(e)=>{
        //console.log(e.id);
        const detail= await albumDetail(e.id);//more detail 包括 description都在这里
        //console.log(detail.data.songs); //songs arr
        e.songlist=detail.data.songs
    });
    dispatch(initResList(data));    
}
