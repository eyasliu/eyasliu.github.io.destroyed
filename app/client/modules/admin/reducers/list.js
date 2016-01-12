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
  case constant.of('Destroy'):
    _.remove(state.listdata, item => {
      console.log('=====>',item,action)
      return item.id == action.data.id;
    })
    console.log(state)
    return {
      ...state,
      listdata: [
        ...state.listdata
      ]
    }
  default :
    return state;
  }
}