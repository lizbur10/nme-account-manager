import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import workplaceAccountReducer from './reducers/workplaceAccountReducer';
import managerReducer from './reducers/managerReducer';

const rootReducer = combineReducers({
    workplaceAccounts: workplaceAccountReducer,
    managers: managerReducer
  });

const store = createStore(rootReducer);

ReactDOM.render((
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>),
    document.getElementById('root')
);
registerServiceWorker();
