import request from 'superagent';
import toMarkdown from 'to-markdown';
import {Constant} from 'react-constant';
const constant = Constant('admin');


export function fetchEditPost(id) {
  return dispatch => {
    request(config.server + '/posts/' + id)
      .end((err, res) => {
        res.body.content = toMarkdown(res.body.content);
        dispatch({
          type: constant.GETPOST,
          data: res.body
        });
      });
  };
}

export function create(data){
  return dispatch => {
    request.post(config.server + '/post/create')
      .send(data)
      .end((err, res) => {
        dispatch({
          type: constant.CREATE,
          data: res.body
        });
      });
  };
}

export function save(data = false) {
  console.log('I will save a extis post', data);
  return {
    type: constant.SAVE,
    data: data
  };
}