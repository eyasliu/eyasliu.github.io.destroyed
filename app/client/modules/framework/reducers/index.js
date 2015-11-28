import {compose, combineReducers} from 'redux';
import globals from './globals';
import blog from 'blog/reducers';


const reducers = combineReducers({
  globals,
  blog
});

export default reducers;