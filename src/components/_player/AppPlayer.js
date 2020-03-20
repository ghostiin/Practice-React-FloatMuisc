import React from 'react';
import Player from '../_partial/Player';
import {connect} from 'react-redux';



class AppPlayer extends React.Component {
    
    render(){
        return (
            <div className="appplayer">
                {
                    !!(this.props.player.playlist)
                    &&
                    (
                        <Player/>
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        player: state.player
    };
};

export default connect(mapStateToProps)(AppPlayer);