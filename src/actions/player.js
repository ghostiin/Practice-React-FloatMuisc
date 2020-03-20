const InitPlayer = (data)=>{
    return {
        type: "INIT_PLAYER",
        payload: data
    }
}

export const initplayer=(data)=>(dispatch)=>{
    console.log('data',data);
    const initState= {
        index:0,
        isPlaying: false,
        length: data.songlist.length,
        album: {
            id: data.id,
            name: data.name,
            artist: data.artist.name,
            img: data.picUrl
        },
        playlist: data.songlist
    }
    //console.log('len',initState.length);
    dispatch(InitPlayer(initState));
}