const constant = Constant('blog');

export function fetchPost( id, oldData ) {
  return dispatch => {
    request
    .get(config.server + '/post/' + id)
    .end( (err, res) => {
      localStorage.setItem('post-' + id, JSON.stringify(res.body));
      !oldData && dispatch({
        type: constant.GETPOST,
        data: res.body
      });
    });
  };
}

export function getPost( id ) {
  return dispatch => {
    let postData = JSON.parse(localStorage.getItem('post-' + id));
    const postList = JSON.parse(localStorage.getItem('post-list'));

    if (!postData) {
      postData = _.find(postList, item => item.ID === parseInt(id));
    }

    if (postData) {
      dispatch({
        type: constant.GETPOST,
        data: postData
      });
    }

    fetchPost(id, postData)(dispatch);
  };
}

export function toDetail(id) {
  return dispatch => {
    dispatch({
      type: constant.LINKTODETAIL,
      id: id
    });
  };
}
