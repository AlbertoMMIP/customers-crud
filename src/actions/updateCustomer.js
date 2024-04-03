import { apiPut } from "../api";
import { urlCustomers } from "../api/urls";
import { UPDATE_CUSTOMERS } from "../constants";
import { createAction } from 'redux-actions';

export const updateCustomer = createAction(UPDATE_CUSTOMERS, (id, customer) => apiPut(urlCustomers, id, customer)() );
