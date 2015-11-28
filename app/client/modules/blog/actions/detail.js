export function getPost( id ) {
  return dispatch => {
    fetch('http://eyasweb.com/wp-json/posts/' + id)
    .then(res => {
      return res.json();
    })
    .then( json => {
      dispatch({
        type: 'FETCHPOST',
        data: json
      });
    });
  };
}