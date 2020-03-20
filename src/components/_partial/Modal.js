import React from 'react';
import Modal from 'react-modal';
import {connect } from 'react-redux';
import {add2list as addtolist,remove2list as removefromlist} from '../../actions/list';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlusSquare,faMinusSquare} from '@fortawesome/free-solid-svg-icons';

class albumModal extends React.Component {
    // setTimeout(()=>{
    //     console.log('after',props.selected);
    // },2000);
    componentDidUpdate(prevProps){
        if(prevProps.list.length!== this.props.list.length){
            const json= JSON.stringify(this.props.list);
            localStorage.setItem('list',json);
            //console.log(localStorage.getItem('list'));
            console.log('saved');
        }
    }
    state={
        flag: false
    }
    add2list=()=>{
        //console.log('added!');
        this.props.addtolist(this.props.selected);
        this.setState({
            flag: true
        })
        
        //console.log('list is',this.props.list);
    }
    remove2list=()=>{
        console.log('remove!');
        this.props.removefromlist(this.props.selected.id);
        this.setState({
            flag: false
        })

    }
    modal=()=>{
        if(this.state.flag){
            return (
                <div className="modal__title">
                {this.props.selected.name} - {this.props.selected.artist.name }
                <FontAwesomeIcon 
                    onClick={this.remove2list}
                    icon={faMinusSquare}
                    >
                    Remove 2 list
                    </FontAwesomeIcon>
                </div>
                )
        }else {
            return (
            <div>
            {this.props.selected.name} - {this.props.selected.artist.name }
            <FontAwesomeIcon 
                icon={faPlusSquare} 
                onClick={this.add2list}>Add 2 list</FontAwesomeIcon>
            </div>
            )
        }
    };
    render(){
        Modal.setAppElement('body');     //for the warning
        return (
            <Modal className="modal"
                isOpen={!!this.props.selected}
                contentLabel="Album detail"
                onRequestClose={this.props.close}
            >
            {
                this.props.selected
                ?
                this.modal()
                :
                <div>OOPS!</div>
            }

            </Modal>
            )
        }
}

class playModal extends React.Component {
    // setTimeout(()=>{
    //     console.log('after',props.selected);
    // },2000);
    componentDidMount(){
        this.setState({flag: this.props.selected});
    }
    componentDidUpdate(){
        console.log('modal',this.props.list);
        
    }
    modal=()=>(
            <div className="modal__title">
                {this.props.selected.name} - {this.props.selected.artist.name }
            </div>
    );
    render(){
        Modal.setAppElement('body');     //for the warning
        return (
            <Modal className="modal"
                isOpen={!!this.props.selected }
                contentLabel="Album detail"
                onRequestClose={this.props.close}
            >
            {
                this.props.selected
                ?
                this.modal()
                :
                <div>OOPS!</div>
            }

            </Modal>
            )
        }
}


const mapStateToProps = (state) =>{
    return {
        list: state.inboxlist
    };
};

const mapDispatchToProps ={
    addtolist,
    removefromlist
}

export const AlbumModal= connect(mapStateToProps,mapDispatchToProps)(albumModal);

export const PlayModal= connect(mapStateToProps,mapDispatchToProps)(playModal);