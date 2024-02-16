import React from 'react';
// import PropTypes from 'prop-types';
import AppFrame from '../../components/AppFrame';
import { useParams, useMatch } from 'react-router-dom';
import { connect } from 'react-redux';
import CustomerEdit from '../../components/CustomerEdit';
import CustomerData from '../../components/CustomerData';

const CustomerContainer = props => {
  const params = useParams();
  const match = useMatch('/customers/:dni/edit');
  const { dni } = params;
  const customer = props.customers.find(c => c.dni === dni)

  const renderBody = () => {
    const CustomerControl = match ? CustomerEdit : CustomerData;
    return <CustomerControl {...customer} />
  };

  return (
    <AppFrame header={`Cliente ${customer.dni}`}
      body={renderBody()} >
    </AppFrame>
  )
}

CustomerContainer.propTypes = {}

const mapStateToProps = (state, props) => ({
  customers: state.customers
})

export default connect(mapStateToProps, null)(CustomerContainer);