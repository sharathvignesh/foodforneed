import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {open, name, phonenumber, location, dishname, description, foodtype, fetchedObj, imgurl} from './reducer';

const reducer = combineReducers({
  open,
  name,
  phonenumber,
  location,
  dishname,
  description,
  foodtype,
  fetchedObj,
  imgurl,
  routing: routerReducer
});

export default reducer;
