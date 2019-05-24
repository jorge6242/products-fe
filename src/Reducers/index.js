import {
  combineReducers
} from 'redux';
import {
  reducer as form
} from 'redux-form';
import productFormReducer from './productFormReducer';
import modalReducer from './modalReducer';
import productReducer from './productReducer';

const rootReducer = combineReducers({
  modalReducer,
  form,
  productFormReducer,
  productReducer,
});

export default rootReducer;