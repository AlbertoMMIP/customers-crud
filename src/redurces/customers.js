import { handleActions } from 'redux-actions';
import { FETCH_CUSTOMERS, CREATE_CUSTOMER, UPDATE_CUSTOMER, DELETE_CUSTOMER } from '../constants';

export const customers = handleActions({
  [FETCH_CUSTOMERS]: (state, action) => [ ...action.payload.customers ],
  [CREATE_CUSTOMER]: (state, action) => [ ...state, ...action.payload ],
  [UPDATE_CUSTOMER]: (state, action) => {
    const customer = action.payload;
    const { dni } = customer;
    const customers = state;

    const newCustomers = customers.reduce((acc, cust) => {
      if (customer.dni === dni) {
        //return [...acc, customer]  This is correct but my api is a mock
        return [...acc, cust]
      } else {
        return [...acc, cust]
      }
    }, []);

    return newCustomers;
  },
  [DELETE_CUSTOMER]: (state, action) => {
    const customer = action.payload;
    const { dni } = customer;
    const customers = state;

    const newCustomers = customers.reduce((acc, cust) => {
      if (customer.dni === dni) {
        return [...acc]
      } else {
        return [...acc, cust]
      }
    }, []);

    return newCustomers;
  }
}, [] );
