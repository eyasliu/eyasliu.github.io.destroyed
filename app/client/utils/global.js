import {combineReducers, bindActionCreators, compose} from 'redux';
import {connect} from 'react-redux';
import request from './request';
import {PropTypes, Component} from 'react';
import _ from 'lodash';
import formToObj from 'form-to-obj';
import Constant from 'react-constant';

// 全局工具
window.util = require('utils/utily');
window.Loding = require('cc/loading/index');
window.fetch = window.fetch || require('imports?this=>global!exports?global.fetch!whatwg-fetch');
window.combineReducers = combineReducers;
window.bindActionCreators = bindActionCreators;
window.compose = compose;
window.connect = connect;
window.request = request;
window.PropTypes = PropTypes;
window.Component = Component;
window._ = _;
window.formToObj = formToObj;
window.Constant = Constant;

