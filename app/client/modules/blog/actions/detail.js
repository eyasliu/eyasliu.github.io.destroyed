export function fetchPost( id, oldData ) {
  return dispatch => {
    fetch('http://eyasweb.com/wp-json/posts/' + id)
      .then(res => {
        return res.json();
      })
      .then( json => {
        localStorage.setItem('post-' + id, JSON.stringify(json));
        !oldData && dispatch({
          type: 'GETPOST',
          data: json
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
        type: 'GETPOST',
        data: postData
      });
    }

    fetchPost(id, postData)(dispatch);
  };
}

export function toDetail(id) {
  return dispatch => {
    dispatch({
      type: 'LINKTODETAIL',
      id: id
    });
  };
}
