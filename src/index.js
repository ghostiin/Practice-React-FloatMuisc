import 'normalize.css';
import './styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configStore from './store/configStore';
import { Provider } from 'react-redux';
// import AppRouter from './routers/AppRouter';

const appRoot=document.getElementById('app');
// ReactDOM.render(<AppRouter/>,appRoot);


const store=configStore();
// import {search} from './actions/search';
// store.dispatch(search('Jolin'));

// setTimeout(()=>{
//     console.log(store.getState())
// },3000);



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,appRoot);

