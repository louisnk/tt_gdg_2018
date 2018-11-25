import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import app from './reducers/app';
import properties from './reducers/properties';
import search from './reducers/search';

export default combineReducers({
  app,
  form: formReducer,
  properties,
  search,
  routing,
});
