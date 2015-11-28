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