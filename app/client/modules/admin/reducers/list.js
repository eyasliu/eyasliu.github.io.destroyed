const constant = Constant('admin');
const initState = {
  listdata: []
};

export default function list(state = initState, action) {
  switch (action.type) {
    case constant.of('GETLIST'):
      return {
        ...state,
        listdata: action.data
      };
    case constant.of('Destroy'):
      _.remove(state.listdata, item => {
        return item.id == action.data.id;
      });
      return {
        ...state,
        listdata: [
          ...state.listdata
        ]
      };
    default :
      return state;
  }
}