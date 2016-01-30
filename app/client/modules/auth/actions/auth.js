import request from 'superagent';
import history from 'utils/history';
import {Constant} from 'react-constant';

const constant = Constant('auth');

export function Login( formdata ) {
  return dispatch => {
    request
    .post(config.server + '/auth/login')
    .set('Authorization', sessionStorage.getItem('auth')||'mytest')
    .send(formdata)
    .end((err, res) => {
      if(res.status == 200) {
        // console.log(history);
        // history.pushState({the: 'state'}, '#/admin');
      }else{
        console.log('登录错误');
      }
      console.log(err, res);
    });
  };
}

export function Signup( formdata ) {
  return dispatch => {
    request
    .post(config.server + '/auth/signup')
    .send(formdata)
    .end((err, res) => {
      if(res.status == 200){
        dispatch({
          type: constant.SignupSuccess,
          data: res.body.text
        });
      }else{
        dispatch({
          type: constant.Error,
          data: res.body.text
        });
      }
      // if(res.status == 200) {
      //   // console.log(history);
      //   // history.pushState({the: 'state'}, '#/admin');
      // }else{
      //   console.log('登录错误');
      // }
      // console.log(err, res);
    });
  };
}
