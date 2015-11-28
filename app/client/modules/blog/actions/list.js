export function getList( paging ) {
  return dispatch => {
    fetch(config.server + '/posts/list')
    .then(res => {
      return res.json();
    })
    .then( json => {
      dispatch({
        type: 'FETCHLIST',
        data: json.data
      });
    });
  };
}