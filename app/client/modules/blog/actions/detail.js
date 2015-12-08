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
    const postData = JSON.parse(localStorage.getItem('post-' + id));
    if (postData) {
      dispatch({
        type: 'GETPOST',
        data: postData
      });
    }
    fetchPost(id, postData)(dispatch);
  };
}
