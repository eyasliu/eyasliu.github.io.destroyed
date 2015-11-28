const initState = {
  data: {}
};

export default function post(state = initState, action) {
  switch (action.type) {
  case 'FETCHPOST':
    return {
      ...state,
      data: action.data
    };
  default:
    return state;
  }
}