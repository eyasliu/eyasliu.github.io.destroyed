import {Constant} from 'react-constant';

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
  case constant.of('destroy'):
    _.remove(state.listdata, item => {
      return item.id == action.data.id
    })
    return {
      ...state
    }
  default :
    return state;
  }
}