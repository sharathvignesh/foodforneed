import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {open, name, phonenumber, location, dishname, description} from './reducer';

const reducer = combineReducers({
  open,
  name,
  phonenumber,
  location,
  dishname,
  description,
  routing: routerReducer
});

export default reducer;
