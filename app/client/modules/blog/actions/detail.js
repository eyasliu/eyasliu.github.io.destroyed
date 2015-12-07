export function getPost( id ) {
  return dispatch => {
    let postData = JSON.parse(localStorage.getItem('post-' + id));

    if(postData){
      dispatch({
        type: 'GETPOST',
        data: postData
      });
    }else{
      fetchPost( id )(dispatch);
    }
  };
}

export function fetchPost( id ) {
  return dispatch => {
    fetch('http://eyasweb.com/wp-json/posts/' + id)
      .then(res => {
        return res.json();
      })
      .then( json => {
        localStorage.setItem('post-' + id, JSON.stringify(json));
        dispatch({
          type: 'GETPOST',
          data: json
        });
      });
  };
}