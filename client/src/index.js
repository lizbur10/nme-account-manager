import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import WorkplaceAccount from './components/WorkplaceAccount/fullInfo';

ReactDOM.render((
    <Router>
        <React.Fragment>
            <Route path="/" component={App} />
            <Route exact path="/workplace_accounts/:id" component={WorkplaceAccount} />
        </React.Fragment>
    </Router>),
    document.getElementById('root')
);
registerServiceWorker();
