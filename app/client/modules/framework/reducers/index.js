import {compose, combineReducers} from 'redux';
import { routeReducer } from 'redux-simple-router';
import {reducer as formReducer } from 'redux-form';
import globals from './globals';
import blog from 'blog/reducers';
import admin from 'admin/reducers';


const reducers = combineReducers({
  globals,
  blog,
  admin,
  routing: routeReducer,
  form: formReducer
});

export default reducers;