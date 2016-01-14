const initState = {
  data: {}
};

export default function signin(state = initState, action) {
  switch (action.type) {
  case 'FETCHPOST':
  case 'GETPOST':
    return {
      ...state,
      data: action.data
    };
  default:
    return state;
  }
}