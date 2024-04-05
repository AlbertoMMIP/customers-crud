import { apiDelete } from "../api";
import { urlCustomers } from "../api/urls";
import { DELETE_CUSTOMER } from "../constants";
import { createAction } from 'redux-actions';

export const deleteCustomer = createAction(DELETE_CUSTOMER, id => apiDelete(urlCustomers, id)() );
