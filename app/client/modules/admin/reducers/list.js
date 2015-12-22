import {Constant} from 'react-constant';

const constant = Constant('admin');
let initState = {
  listdata: []
}

export default function list(state = initState, action) {
  switch(action.type){
    case constant.of('GETLIST'):
    return {
      ...state,
      listdata: action.data
    }
  default :
    return state;
  }
}