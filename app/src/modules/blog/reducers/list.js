const initState = {
  data: []
};

export default function list(state = initState, action) {
  switch (action.type) {
  case 'FETCHLIST':
    return {
      ...state,
      data: action.data
    };
  default:
    return state;
  }
}