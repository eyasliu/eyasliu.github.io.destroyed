import request from 'superagent';
import history from 'history';

export function login( formdata ) {
  return dispatch => {
    request
    .post(config.server + '/auth/login')
    .end((err, res) => {
      if(res.status == 200) {
        console.log(history);
        history.go('/admin');
      }else{
        console.log('登录错误');
      }
      console.log(err, res);
    })
  };
}
