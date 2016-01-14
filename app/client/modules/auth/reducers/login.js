const initState = {
  data: []
};

export default function login(state = initState, action) {
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