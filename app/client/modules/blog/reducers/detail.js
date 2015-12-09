const initState = {
  data: {}
};

export default function post(state = initState, action) {
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