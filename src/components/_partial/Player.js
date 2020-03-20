import React from 'react';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlay,faPause,faForward,faBackward} from '@fortawesome/free-solid-svg-icons';
import { getDuration } from '../../common/utils';


class Player extends React.Component {
    constructor(props) {
        super(props);
        this.audio = React.createRef();
      }
    state = {
       index: this.props.player.index,
       playState: true,
       curTimeBar: 0
    }
    componentWillReceiveProps(nextProps) {
        this.setState({index: nextProps.player.index});
        this.setState({curTimeBar: 0});
    }

    componentDidUpdate(prevState){
        if(this.state.index!==prevState.index){
            this.changesongCallback();
        }
        
        
    }
    changesongCallback = ()=>{
        if(!this.state.playState){
            this.pause();
        }
    }

    updateBar = ()=>{
        const progress= this.audio.currentTime/ this.audio.duration;
        if(!isNaN(progress)){
            this.setState({curTimeBar: `${progress*100}%`});
            //console.log('change',this.state.curTimeBar);
        }
        
    }

    play=()=>{
        //console.log('src play',this.audio.src);
        this.audio.play();
        
    }

    pause=()=>{
        //console.log('src',this.audio.src);
        console.log(this.audio.currentTime);
        this.audio.pause(); 
    }

    togglePlay=()=>{
        if(this.audio.paused||this.audio.ended){
            this.play();
            
            this.setState({playState: true});
        
        }else {
            this.pause();
            this.setState({playState: false})
        }

    }

    switchSong=(index)=>{

        this.setState({index: index});
    }

    playPrev=()=>{
        const index= (this.state.index+this.props.player.length-1)%this.props.player.length;
        this.setState({index: index});
        if(!this.state.playState){
            this.pause();
        }

    }

    playNext=()=>{
        const index= (this.state.index+this.props.player.length+1)%this.props.player.length;
        this.setState({index: index});
        if(!this.state.playState){
            this.pause();
        }
    }

    
    createSongUrl =()=>{
        const songid=this.props.player.playlist[this.state.index].id;
        const songUrl=`https://music.163.com/song/media/outer/url?id=${songid}.mp3`;
        console.log('song',songUrl);
        return songUrl;
    }

    ended =()=>{
        console.log('next',this.state.index+1)
        //this.playNext()
        if(this.state.index+1===this.props.player.length){
            console.log('finish');
        }else {
            this.playNext();
        }

    }


    render(){
        const songurl=this.createSongUrl();
        const {playlist} = this.props.player;
        const {playState,curTimeBar} = this.state;
    
        
        
        return (
                    <div key={this.props.player.album.id}>
                    
                    <h1> </h1>
                    <img className="appplayer__cover" src={this.props.player.album.img} />
                    <div className="navigation">
                    <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>

                    <label htmlFor="navi-toggle" className="navigation__button">
                    <span className="navigation__button--main">{this.props.player.album.name}</span>
                    <span className="navigation__button--sub">{this.props.player.album.artist}</span>
                    
                    </label>

                    <div className="navigation__bg">&nbsp;</div>

                    <nav className="navigation__nav">
                        <ul className="navigation__list">
                        {
                            this.props.player.playlist.map((e,idx)=>{
                                return (
                                    <li key={idx} onClick={()=>this.switchSong(idx)} className="navigation__item">{e.name}</li>
                                )
                            })
                        }
                        </ul>
                    </nav>
                </div>
                <audio
                key="audio" 
                src={songurl}
                autoPlay
                ref={(audio)=>this.audio=audio}
                onEnded={this.ended}
                onTimeUpdate={this.updateBar}
                >
                </audio>
                
                    <h3>{playlist[this.state.index].name}</h3>
                    <div className="appplayer__controls">
                    <div className="appplayer__subbg" onClick={this.playPrev}>
                        <FontAwesomeIcon 
                        icon={faBackward}
                        ></FontAwesomeIcon>
                    </div>
                    <div className="appplayer__playbg" onClick={this.togglePlay}>
                        { playState ? 
                            <FontAwesomeIcon 
                            icon={faPause}
                            >
                            </FontAwesomeIcon>
                            :
                            <FontAwesomeIcon 
                            icon={faPlay} 
                            >
                            </FontAwesomeIcon>
                        
                        }
                    </div>
                    <div className="appplayer__subbg"  onClick={this.playNext}>
                        <FontAwesomeIcon 
                        icon={faForward}
                        ></FontAwesomeIcon>
                    </div>
                    
                    </div>
                    
                    <div className="appplayer__progressbar" >
                        &nbsp;
                        <div className="appplayer__progressbar--cur" style={{ width: `${curTimeBar}` }}>
                            &nbsp;
                        </div>
                        <div className="appplayer__timetag--cur">
                            {getDuration(this.audio.currentTime)}
                        </div>
                        <div className="appplayer__timetag--dur">
                            {getDuration(this.audio.duration)}
                        </div>
                    </div>
            </div>
        );
    }
}


const mapStateToProps = (state) =>{
    return {
        player: state.player
    };
}

export default connect(mapStateToProps)(Player);