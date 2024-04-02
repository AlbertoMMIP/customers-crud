import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import AppFrame from '../../components/AppFrame';
import { useParams, useMatch } from 'react-router-dom';
import { connect } from 'react-redux';
import CustomerEdit from '../../components/CustomerEdit';
import CustomerData from '../../components/CustomerData';
import { withRouter } from '../../utils/router.js';
import { fetchCustomers } from '../../actions/fetchCustomers.js';

const CustomerContainer = props => {
  const params = useParams();
  const match = useMatch('/customers/:dni/edit');
  const { dni } = params;
  const customer = props.customers.find(c => c.dni === dni);
  
  useEffect(() => {
    if (!props.customers.length > 0) {
      console.log('fetch customerssssssssssss', );
      props.fetchCustomers();
    }
  }, [props])

  const handleSubmit = values => console.log('editing . .. ', JSON.stringify(values));

  const handleOnBack = props => {
    console.log('handleOnBack', props)
    const { history } = props;
    history(-1);
  }

  const renderBody = (props) => {
    console.log('customer filter', customer);
        const CustomerControl = match ? CustomerEdit : CustomerData;
    return <CustomerControl { ...customer } onSubmit={handleSubmit} onBack={() => handleOnBack(props)} />
  };

  if (customer) {
    return (
      <AppFrame header={`Cliente ${customer.dni}`}
        body={renderBody(props)} >
      </AppFrame>
    )
  }
  return null;
}

CustomerContainer.propTypes = {}

const mapStateToProps = (state, props) => ({
  customers: state.customers,
});

export default withRouter(connect(mapStateToProps, { fetchCustomers })(CustomerContainer));
