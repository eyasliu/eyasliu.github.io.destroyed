import history from 'utils/history';

const constant = Constant('auth');

export function Login( formdata ) {
  return dispatch => {
    // fetch(config.server + '/auth/login')
    request
    .post(config.server + '/auth/login')
    .set('Authorization', 'JWT ' + (sessionStorage.getItem('auth') || 'none'))
    .send(formdata)
    .end((err, res) => {
      if(res.status == 200) {
        if(res.body.token){
          sessionStorage.setItem('token', res.body.token);
        }
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
