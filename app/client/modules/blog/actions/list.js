export function getList( paging ) {
  return dispatch => {
    fetch('http://eyasweb.com/wp-json/posts?filter[posts_per_page]=100')
    .then(res => {
      return res.json();
    })
    .then( json => {
      dispatch({
        type: 'FETCHLIST',
        data: json
      });
    });
  };
}

export function fetchList( id, oldData ) {
  return dispatch => {
    fetch('http://eyasweb.com/wp-json/posts?filter[posts_per_page]=100')
      .then(res => {
        return res.json();
      })
      .then( json => {
        localStorage.setItem('post-list', JSON.stringify(json));
        !oldData && dispatch({
        type: 'FETCHLIST',
        data: json
        });
      });
  };
}

export function getList( id ) {
  return dispatch => {
    const postData = JSON.parse(localStorage.getItem('post-list'));
    if (postData) {
      dispatch({
        type: 'FETCHLIST',
        data: postData
      });
    }
    fetchList(id, postData)(dispatch);
  };
}
