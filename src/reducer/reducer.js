import {OPEN_VALUE, STORE_NAME, STORE_LOCATION, STORE_PHONE_NUMBER, STORE_DISH_NAME, STORE_DESCRIPTION, STORE_FOOD_TYPE, STORE_FETCHED_DETAILS, UPDATE_VIEW} from '../actions/actions';


export function open(state = false, action) {
  switch(action.type) {
    case OPEN_VALUE:
      return action.open;
    default:
      return state;
  }
}

export function name(state = '', action) {
  switch(action.type) {
    case STORE_NAME:
      return action.name;
    default:
      return state;
  }
}
export function phonenumber(state = '', action) {
  switch(action.type) {
    case STORE_PHONE_NUMBER:
      return action.phonenumber;
    default:
      return state;
  }
}
export function location(state = '', action) {
  switch(action.type) {
    case STORE_LOCATION:
      return action.location;
    default:
      return state;
  }
}
export function dishname(state = '', action) {
  switch(action.type) {
    case STORE_DISH_NAME:
      return action.dishname;
    default:
      return state;
  }
}
export function description(state = '', action) {
  switch(action.type) {
    case STORE_DESCRIPTION:
      return action.description;
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
