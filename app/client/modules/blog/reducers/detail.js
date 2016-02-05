const constant = Constant('blog');

const initState = {
  data: {}
};

export default function post(state = initState, action) {
  switch (action.type) {
    case constant.of('FETCHPOST'):
    case constant.of('GETPOST'):
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
}