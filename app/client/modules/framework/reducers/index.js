import {compose, combineReducers} from 'redux';
import { routeReducer } from 'redux-simple-router'
import globals from './globals';
import blog from 'blog/reducers';
import admin from 'admin/reducers';


const reducers = combineReducers({
  globals,
  blog,
  admin,
  routing: routeReducer
});

export default reducers;