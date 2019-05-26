import {
  combineReducers
} from 'redux';
import {
  reducer as form
} from 'redux-form';
import productFormReducer from './productFormReducer';
import modalReducer from './modalReducer';
import productReducer from './productReducer';
import snackBarReducer from './snackBarReducer';

const rootReducer = combineReducers({
  modalReducer,
  form,
  productFormReducer,
  productReducer,
  snackBarReducer,
});

export default rootReducer;