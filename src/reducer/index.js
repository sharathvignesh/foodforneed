import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {name} from './reducer';

const reducer = combineReducers({
  name,
  routing: routerReducer
});

export default reducer;
