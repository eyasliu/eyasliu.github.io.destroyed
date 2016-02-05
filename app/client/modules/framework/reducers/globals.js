const constant = Constant('framework');

const initState = {
  info: {},
  navbar: []
};

export default function globals(state = initState, action) {
  switch (action.type) {
    case constant.of('FEACTGLOBALS'):
      return {
        ...state,
        ...action.data
      };
    default:
      return state;
  }
}