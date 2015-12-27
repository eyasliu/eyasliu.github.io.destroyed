import request from 'superagent';
import {Constant} from 'react-constant';
const constant = Constant('admin');

export function fetchList() {
  return dispatch => {
    request('http://eyasweb.com/wp-json/posts?filter[posts_per_page]=20')
      .end((err, res) => {
        dispatch({
          type: constant.GETLIST,
          data: res.body
        });
      });
  };
}