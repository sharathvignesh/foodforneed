import {OPEN_VALUE} from '../actions/actions';


export function open(state = false, action) {
  switch(action.type) {
    case OPEN_VALUE:
      return action.open;
    default:
      return state;
  }
}
