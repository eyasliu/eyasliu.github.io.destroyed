import {compose, combineReducers} from 'redux';
import list from './list';
import edit from './edit';


const reducers = combineReducers({
  list,
  edit
});

export default reducers;