export const FETCH = 'FETCH';

export function fetchGlobals() {
  return dispatch => {
    dispatch({
      type: 'FEACTGLOBALS',
      data: {
        info: {
          description: '这只是一个博客',
          footer: 'Power by <a href="http://facebook.github.io/react">React</a>. Built & Design by <a href="http://eyasweb.com">Eyas</a>',
          title: 'Eyas'
        },
        navbar: [
          {
            id: 1,
            name: '首页',
            link: '#/'
          }, {
            id: 2,
            name: 'Git',
            link: 'http://git.oschina.net/yuesong'
          }
        ]
      }
    });
    // fetch(config.server + '/globals/info')
    //   .then( res => {
    //     if (res.ok) {
    //       return res.json();
    //     }
    //   })
    //   .then( json => {
    //      dispatch({});
    //   });
  };
}