import {compose, combineReducers} from 'redux';
import list from './list';
import detail from './detail';


const reducers = combineReducers({
  list,
  detail
});

export default reducers;