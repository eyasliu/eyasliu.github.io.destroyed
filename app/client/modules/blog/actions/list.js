const constant = Constant('blog');

export function fetchList( id, oldData ) {
  return dispatch => {
    request
    .get(config.server + '/post/list')
    .end( (err, res) => {
      localStorage.setItem('post-list', JSON.stringify(res.body));
      !oldData && dispatch({
        type: constant.FETCHLIST,
        data: res.body
      });
    });
  };
}

export function getList( id ) {
  return dispatch => {
    const postData = JSON.parse(localStorage.getItem('post-list'));
    if (postData) {
      dispatch({
        type: constant.FETCHLIST,
        data: postData
      });
    }
    fetchList(id, postData)(dispatch);
  };
}
