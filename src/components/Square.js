import React from 'react';
import { BrowserRouter as Router, Route,Switch,Redirect,NavLink } from "react-router-dom";
import {AppList} from './_square/AppList';
import {AppWeek} from './_square/AppWeek';
import ConnectAppSearch from './_square/AppSearch';
import ConnectAppList from './_square/AppList';
import {Header} from './_partial/Header';
import ConnectSearcher from './_partial/Search';

//主页默认显示本周推荐
const Square = ()=>(
<div className='square'>
    <Router>
    <div className="square__title">
        FLOAT
    </div>
    <ConnectSearcher />
    <Header />
        <Switch>
            <Route path="/" component={AppWeek} exact={true}/>
            <Route path="/list" component={ConnectAppList} />
            <Route path="/search" component={ConnectAppSearch} />
            <Redirect to="/" />
        </Switch>
    </Router>
</div>
);

export default Square;