// 全局工具
window.util = require('utils/utily');
window._ = require('lodash');
window.Loding = require('common/components/loading/index');
window.fetch = window.fetch || require('imports?this=>global!exports?global.fetch!whatwg-fetch');