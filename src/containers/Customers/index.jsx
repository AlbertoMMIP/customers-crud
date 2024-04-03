import React, { useEffect } from 'react';
import PropTypes from 'prop-types'
import { withRouter } from '../../utils/router';
import { connect } from 'react-redux';
import AppFrame from '../../components/AppFrame';
import CustomerList from '../../components/CustomerList';
import CustomerActions from '../../components/CustomerActions';
import { fetchCustomers } from '../../actions/fetchCustomers';
import { getCustomers } from '../../selectors/customers';

const handleAddNew = (props) => {
  console.log('Add new customer');
  props.history('/customers/new')
}

const renderBody = (customers, props) => (
  <div>
    <CustomerList
      customers={customers}
      urlPath={'/customers/'}>
    </CustomerList>
    <CustomerActions>
      <button onClick={() => handleAddNew(props)}>Nuevo Cliente</button>
    </CustomerActions>
  </div>
);

const CustomersContainer = props => {

  useEffect(() => {
    console.log('CustomersContainer render');
    const loadCustomers = () => {
      props.fetchCustomers();
    }
    if (!props.customers.length) {
      loadCustomers();
    }
  })

  return (
    <AppFrame header={'Listado de clientes'}
      body={renderBody(props.customers, props)} >
    </AppFrame>
  )
}

CustomersContainer.propTypes = {
  fetchCustomers: PropTypes.func.isRequired,
  customers: PropTypes.array.isRequired
}

CustomersContainer.defaultProps = {
  customers: []
}

const mapStateToProps = state => ({
  customers: getCustomers(state)
});

export default withRouter(connect(mapStateToProps, { fetchCustomers })(CustomersContainer));
