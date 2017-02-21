import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {open} from './reducer';

const reducer = combineReducers({
  open,
  routing: routerReducer
});

export default reducer;
