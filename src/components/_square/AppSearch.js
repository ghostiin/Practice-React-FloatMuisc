import React from 'react';
import {connect } from 'react-redux';

import {AlbumModal} from '../_partial/Modal';
import {Album} from '../_partial/Album';

class AppSearch extends React.Component {
    state= {
        selected: undefined
    }
    SelectClick =(e)=>{
        //console.log(e);
        const album=e;
        //console.log('album is',album)
        this.setState(()=>({
            selected: album
        }))
    }
    CloseModal = ()=>{
        this.setState(()=>({
            selected: undefined
        }))
    }
    render(){
        //console.log(this.props.list.data[0]);
        return (<div className="AppSearch">
            {
                !this.props.list.data
                ? 
                <p>no result</p>
                :
                this.props.list.data.map((e,idx)=>{
                    return (
                        <div className="AppSearch__item">
                        <Album  
                        key={idx} 
                        album={e} 
                        click={this.SelectClick}
                        />
                        </div>
                        )
                })
            }
            {this.state.selected&&<AlbumModal 
                selected={this.state.selected}
                close={this.CloseModal}
                add2list={this.add2list}
            />}
        </div>)
    }
}

const mapStateToProps = (state) =>{
    return {
        list: state.searchlist
    };
};

export default connect(mapStateToProps)(AppSearch);