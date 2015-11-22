export const FETCH = 'FETCH';

export function fetchGlobals() {
  return dispatch => {
    fetch(config.server + '/globals/info')
      .then( res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then( json => {
        dispatch({
          type: 'FEACTGLOBALS',
          data: json.data
        });
      });
  };
}