import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import workplaceAccountReducer from './reducers/workplaceAccountReducer';
import managerReducer from './reducers/managerReducer';
import marketReducer from './reducers/marketReducer';

const rootReducer = combineReducers({
    workplaceAccounts: workplaceAccountReducer,
    managers: managerReducer,
    markets: marketReducer
  });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render((
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>),
    document.getElementById('root')
);
registerServiceWorker();
