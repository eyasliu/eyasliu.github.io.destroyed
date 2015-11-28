import AppRouter from './router';

// 全局工具
window.util = require('utils/utily');
window._ = require('lodash');
window.Loding = require('common/components/loading/index');

ReactDOM.render(AppRouter, document.getElementById('eyas'));
