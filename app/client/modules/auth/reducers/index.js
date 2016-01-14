import {compose, combineReducers} from 'redux';
import login from './login';
import signin from './signin';


const reducers = combineReducers({
  login,
  signin
});

export default reducers;