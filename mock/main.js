import Server from 'ohana';
import Mock from 'mockjs';
import requireAll from 'require-all';
global.Mock = Mock;
global.server = new Server({
  parser: Mock.mock
})

// 这里如果用 import 语法会报错
// require('./globals');
// require('./posts');

// 启动模拟数据服务

module.exports = () => {
    requireAll({
      dirname     :  __dirname + '/api',
      filter      :  /(.)\.js$/,
      excludeDirs :  /^\.(git)$/,
      recursive   : true
    });
    server.start(3001, '0.0.0.0')
}
