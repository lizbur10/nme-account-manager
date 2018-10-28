import { combineReducers } from 'redux';
import workplaceAccountReducer from './workplaceAccountReducer';
import managerReducer from './managerReducer';

const rootReducer = combineReducers({
    workplaceAccounts: workplaceAccountReducer,
    managers: managerReducer
  });

  export default rootReducer;