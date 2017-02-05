import {STORE_NAME} from '../actions/actions';


export function name(state = '', action) {
  switch(action.type) {
    case STORE_NAME:
      return action.name;
    default:
      return state;
  }
}
