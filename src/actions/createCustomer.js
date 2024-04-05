import { apiPost } from "../api";
import { urlCustomers } from "../api/urls";
import { CREATE_CUSTOMER } from "../constants";
import { createAction } from 'redux-actions';

export const createCustomer = createAction(CREATE_CUSTOMER, customer => apiPost(urlCustomers, customer)() );
