export const FETCH = 'FETCH';

export function fetchGlobals() {
  return dispatch => {
    fetch(config.server + '/globals/info')
      .then(res => {
        console.log(res);
        dispatch({
          type: 'FEACTSUCCESS',
          data: res
        });
      });
  };
}