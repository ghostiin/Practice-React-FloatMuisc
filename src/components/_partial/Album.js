import React from 'react';
//{props.album.name} - {props.album.artist.name}
export const Album = (props) =>(
    <div className="album" onClick={()=>props.click(props.album)}>
    <img className="album__cover" src={props.album.picUrl}/>
    <div className="album__name">{props.album.name}</div>
    <div className="album__singer">{props.album.artist.name}</div>
    </div>
)