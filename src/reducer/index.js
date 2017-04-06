import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {open, foodtype, fetchedObj} from './reducer';

const reducer = combineReducers({
  open,
  foodtype,
  fetchedObj,
  routing: routerReducer
});

export default reducer;
