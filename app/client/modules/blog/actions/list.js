export function getList( paging ) {
  return dispatch => {
    fetch('http://eyasweb.com/wp-json/posts')
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