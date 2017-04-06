import {OPEN_VALUE, STORE_FOOD_TYPE, STORE_FETCHED_DETAILS, UPDATE_VIEW} from '../actions/actions';


export function open(state = false, action) {
  switch(action.type) {
    case OPEN_VALUE:
      return action.open;
    default:
      return state;
  }
}


export function foodtype(state = [], action) {
  switch(action.type) {
    case STORE_FOOD_TYPE:
      let newType = [action.foodtype]
      return state.concat(newType);
    default:
      return state;
  }
}
export function fetchedObj(state = {}, action) {
  switch(action.type) {
    case STORE_FETCHED_DETAILS:
      return action.json;
    case UPDATE_VIEW:
      let newJson = [action.json]
      return state.concat(newJson);
    default:
      return state;
  }
}
