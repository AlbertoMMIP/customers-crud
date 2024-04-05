import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import AppFrame from '../../components/AppFrame';
import { useParams, useMatch } from 'react-router-dom';
import { connect } from 'react-redux';
import CustomerEdit from '../../components/CustomerEdit';
import CustomerData from '../../components/CustomerData';
import { withRouter } from '../../utils/router.js';
import { fetchCustomers } from '../../actions/fetchCustomers.js';
import { updateCustomer } from '../../actions/updateCustomer.js';
import { deleteCustomer } from '../../actions/deleteCustomer.js';

const CustomerContainer = props => {
  const params = useParams();
  const match = useMatch('/customers/:dni/edit');
  const matchDel = useMatch('/customers/:dni/delete');
  const { dni } = params;
  const customer = props.customers.find(c => c.dni === dni);
  
  useEffect(() => {
    if (!props.customers.length > 0) {
      console.log('fetch customerssssssssssss', );
      props.fetchCustomers();
    }
  }, [props])

  const handleSubmit = values => {
    console.log('editing . .. ', JSON.stringify(values));
    const { dni: id } = values; 
    return props.updateCustomer(id, values);
  }

  const handleOnDelete = id => {
    console.log('Deleteing . .. ', id);
    return props.deleteCustomer(id);
  }

  const handleOnBack = () => {
    console.log('handleOnBack', props)
    const { history } = props;
    history(-1);
  }

  const renderBody = () => {
    console.log('customer filter', customer);
    const CustomerControl = match ? CustomerEdit : CustomerData;
    return <CustomerControl { ...customer } 
              onSubmit={handleSubmit} 
              onSubmitSuccess={handleOnBack} 
              onBack={handleOnBack}
              isDeleteAllow={!!matchDel}
              onDelete={handleOnDelete}
          />
  };

  if (customer) {
    return (
      <AppFrame header={`Cliente ${customer.dni}`}
        body={renderBody()} >
      </AppFrame>
    )
  }
  return null;
}

CustomerContainer.propTypes = {}

const mapStateToProps = (state, props) => ({
  customers: state.customers,
});

export default withRouter(connect(mapStateToProps, { fetchCustomers, updateCustomer, deleteCustomer })(CustomerContainer));
