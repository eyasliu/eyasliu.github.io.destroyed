const constant = Constant('admin');

export function fetchList() {
  return dispatch => {
    request(config.server + '/post/list')
      .end((err, res) => {
        dispatch({
          type: constant.GETLIST,
          data: res.body
        });
      }
    );
  };
}

export function destroy(id) {
  return dispatch => {
    request
    .delete(config.server + '/post/' + id)
    .end((err, res) => {
      dispatch({
        type: constant.Destroy,
        data: res.body
      });
    });
  };
}