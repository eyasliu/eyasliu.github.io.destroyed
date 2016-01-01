import {Constant} from 'react-constant';
const constant = Constant('admin');

const initState = {
  itemdata: {}
};

export default function edit(state = initState, action) {
  switch (action.type) {
  case constant.of('GETPOST'):
    return {
      ...state,
      itemdata: action.data
    };
  case constant.of('CREATE'):
    if(action.data){
      return {
        ...state,
        itemdata: action.data
      };
    }else{
      return {
        ...state,
        itemdata: {}
      };
    }
    
  default :
    return state;
  }
}