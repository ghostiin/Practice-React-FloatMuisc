import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppIndex } from '../components/AppIndex';
import { AppList } from '../components/_square/AppList';
import { AppWeek } from '../components/_square/AppWeek';
import { AppSearch } from '../components/_square/AppSearch';
import { NotFound } from '../components/NotFound';
import { Header } from '../components/_partial/Header';

const AppRouter = () => (
	<Router>
		<div>
			<Header />
			<Switch>
				<Route path="/" component={AppList} exact={true} />
				<Route path="/week" component={AppWeek} />
				<Route path="/list" component={AppList} />
				<Route path="/search" component={AppSearch} />
				<Route component={NotFound} />
			</Switch>
		</div>
	</Router>
);

export default AppRouter;
