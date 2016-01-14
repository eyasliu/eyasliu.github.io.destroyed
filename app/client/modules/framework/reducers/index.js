import {compose, combineReducers} from 'redux';
import { routeReducer } from 'redux-simple-router';
import globals from './globals';
import blog from 'blog/reducers';
import admin from 'admin/reducers';
import auth from 'auth/reducers';


const reducers = combineReducers({
  globals,
  blog,
  admin,
  auth,
  routing: routeReducer,
});

export default reducers;