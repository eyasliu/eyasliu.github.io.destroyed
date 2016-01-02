import request from 'superagent';
import {Constant} from 'react-constant';
const constant = Constant('admin');

export function fetchList() {
  return dispatch => {
    request(config.server + '/post/list')
      .end((err, res) => {
        dispatch({
          type: constant.GETLIST,
          data: res.body
        });
      });
  };
}