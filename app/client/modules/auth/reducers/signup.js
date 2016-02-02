import {Constant} from 'react-constant';
const constant = Constant('auth');

const initState = {
  message: {
    type: 'none',
    text: ''
  }
};

export default function signup(state = initState, action) {
  switch (action.type) {
    case constant.of('SignupSuccess'):
      return {
        message: {
          type: 'success',
          text: action.data
        }
      };
    case constant.of('Error'):
      return {
        message: {
          type: 'danger',
          text: action.data
        }
      };
    default:
      return state;
  }
}