const initState = {
  info: {
    title: 'Eyas',
    description: '这只是一个博客，现在这个博客还没完成',
    footer: 'Power by React. Built & Design by Eyas'
  },
  navbar: {
    data: []
  }
};

export default function globals(state = initState, action) {
  switch (action.type) {
  case 'FEACTGLOBALS':
    return {
      ...state,
      navbar: {
        data: action.data
      }
    };
  default:
    return state;
  }
}