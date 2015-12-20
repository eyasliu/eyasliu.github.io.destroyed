import Server from 'ohana';
import Mock from 'mockjs';
import requireAll from 'require-all';
global.Mock = Mock;
global.server = new Server({
  parser: Mock.mock
})

module.exports = () => {
    requireAll({
      dirname     :  __dirname + '/api',
      filter      :  /(.)\.js$/,
      excludeDirs :  /^\.(git)$/,
      recursive   : true
    });
    server.start(3001, '0.0.0.0')
}
