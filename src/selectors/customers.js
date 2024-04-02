export const getCustomers = state => state.customers;
export const getCustomerByDni = (state, props) => {
  console.log('selector getCustomerByDni state', state);
  console.log('selector getCustomerByDni props',props); 
  return state.customers.find(customer => customer.dni === props.dni);
}
