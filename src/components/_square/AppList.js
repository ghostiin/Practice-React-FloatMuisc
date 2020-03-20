import React from 'react';
import {connect } from 'react-redux';
import {remove2list as removefromlist,add2list as addtolist} from '../../actions/list';
import {initplayer} from '../../actions/player';
import { Album } from '../_partial/Album';
import {PlayModal} from '../_partial/Modal';
//import {faWindowClose} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWindowClose,faPlayCircle} from '@fortawesome/free-regular-svg-icons';

class AppList extends React.Component {
    state= {
        selected: undefined
    }
    componentDidMount(){
        try {
            //console.log('fired');
            const json = localStorage.getItem('list');
            const list=JSON.parse(json);
            if(list) {
                list.map((e,idx)=>{
                    //console.log(this.props.list.length);
                    // if(this.props.list&&this.props.list[idx].id!==e.id){
                    //     console.log('e',e);
                    //     console.log(idx,'-',this.props.list[idx])
                    //     this.props.addtolist(e);
                    // }
                    // else{
                    //     console.log('same');
                    // }
                    if(this.props.list && !this.props.list.length){
                        this.props.addtolist(e);
                    }
                })
            }
        }catch (e){
            //if json data is illegel then do nothing
        }    
    }
    componentDidUpdate(prevProps){
        if(prevProps.list.length!== this.props.list.length){
            const json= JSON.stringify(this.props.list);
            localStorage.setItem('list',json);
            //console.log(localStorage.getItem('list'));
            console.log('saved');
        }
    }
    selectClick = (e)=>{
        const album=e;
        this.setState(()=>({
            selected: album
        }));
    }
    CloseModal = ()=>{
        this.setState(()=>({
            selected: undefined
        }));
    }
    remove2list=(e)=>{
        console.log('remove!');
        this.props.removefromlist(e.id);
        
    }
    send2player=(e)=>{
        //console.log('iniplayer');
        this.props.initplayer(e);
        // setTimeout(()=>{
        //     console.log('player',this.props.player);
        // },3000);
    }
    render(){
        return (
            <div className="AppList">
                {
                    this.props.list.map((e,idx)=>{
                        return (
                            <div key={idx} className="AppList__item">
                            <div className="close" >
                                <FontAwesomeIcon icon={faWindowClose} onClick={()=>this.remove2list(e)}></FontAwesomeIcon>
                            </div>
                            <div className="play">
                            <FontAwesomeIcon  icon={faPlayCircle} onClick={()=>{this.send2player(e)}}>Play</FontAwesomeIcon>
                            </div>
                            

                                <Album  album={e} click={this.selectClick} />
                            </div>
                        );
                    })
                }
                {this.state.selected&&
                    <PlayModal 
                    selected={this.state.selected}
                    close={this.CloseModal}
                    />
                }
            </div>
            
        );
    }
}

const mapStateToProps =(state)=>{
    return {
        list: state.inboxlist,
        player: state.player
    }
};

const mapDispatchToProps ={
    removefromlist,
    initplayer,
    addtolist
};

export default connect(mapStateToProps,mapDispatchToProps)(AppList)