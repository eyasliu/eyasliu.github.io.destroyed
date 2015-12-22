import {compose, combineReducers} from 'redux';
import globals from './globals';
import blog from 'blog/reducers';
import admin from 'admin/reducers';


const reducers = combineReducers({
  globals,
  blog,
  admin
});

export default reducers;