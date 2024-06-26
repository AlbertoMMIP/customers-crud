import { combineReducers } from 'redux';
import { customers } from './customers';
import { reducer as reduxForm } from 'redux-form';
import { CUSTOMER_LIST } from '../constants/permissions.js';
import { CUSTOMER_VIEW } from '../constants/permissions.js';

// Simulate user logged in sistem
const user = (state, action) => (
  {
    permissions: [CUSTOMER_LIST, CUSTOMER_VIEW]
  }
);

export default combineReducers({
  user,
  customers,
  form: reduxForm
});
