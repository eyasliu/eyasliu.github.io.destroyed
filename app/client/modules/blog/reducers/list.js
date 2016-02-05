const constant = Constant('blog');

const initState = {
  data: []
};

export default function list(state = initState, action) {
  switch (action.type) {
    case constant.of('FETCHLIST'):
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
}