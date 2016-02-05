import toMarkdown from 'to-markdown';
const constant = Constant('admin');

export function fetchEditPost(id) {
  return dispatch => {
    request
      .get(config.server + '/post/detail/' + id)
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
    request
    .post(config.server + '/post/create')
    .send(data)
    .end((err, res) => {
      dispatch({
        type: constant.CREATE,
        data: res.body
      });
      window.location.hash = '#/admin';
    });
  };
}

export function save(data = false) {
  return dispatch => {
    request.put(config.server + '/post/update')
    .send(data)
    .end((err, res) => {
      dispatch({
        type: constant.SAVE,
        data: res.body
      });
      window.location.hash = '#/admin';
    });
  };
}
