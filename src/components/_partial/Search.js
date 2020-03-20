import React from 'react';
import { connect } from 'react-redux';
import { search } from '../../actions/search';
import { withRouter } from 'react-router';
import {faGhost} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Searcher extends React.Component {
    state = {
        query: ''
    };
    onChangeInput=(e)=>{
        const query=e.target.value;
        this.setState(()=>({query}));
        //console.log(this.state.query);
    };
    onSubmit = async (e)=>{
        e.preventDefault();
        this.props.history.push('/search');
        await this.props.search(this.state.query);
        //console.log('no delay',this.props.list.data);
        this.setState({query:''});

    }
   render(){
       return (
        <div className='Search'>
            <form onSubmit={this.onSubmit}>
                <input 
                type="text" 
                placeholder="search album only..."
                value= {this.state.query}
                onChange={this.onChangeInput}
                />
                <FontAwesomeIcon
                    icon={faGhost}
                >
                </FontAwesomeIcon>
            </form>
        </div>
       );
   }
};

const mapStateToProps = (state) =>{
    return {
        list: state.searchlist
    };
};

const mapDispatchToProps = {
    search
  }

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Searcher));