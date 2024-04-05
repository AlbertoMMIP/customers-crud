import React from 'react';
// import PropTypes from 'prop-types';
import AppFrame from '../../components/AppFrame';
import { connect } from 'react-redux';
import CustomerEdit from '../../components/CustomerEdit';
import { withRouter } from '../../utils/router.js';
import { createCustomer } from '../../actions/createCustomer.js';
import { SubmissionError } from 'redux-form';

const NewCustomerContainer = props => { 
  const handleSubmit = values => {
    console.log('Creating . .. ', JSON.stringify(values));
    return props.createCustomer(values).then(r => {
      if (r.payload && r.payload.error) {
        throw new SubmissionError(r.payload);
      }
    });
  }

  const handleOnBack = () => {
    console.log('handleOnBack', props)
    const { history } = props;
    history(-1);
  }

  const renderBody = () => {
    return <CustomerEdit onSubmit={handleSubmit} onSubmitSuccess={handleOnBack} onBack={handleOnBack} />
  };

  return (
    <AppFrame header={`Creacion de un nuevo cliente`}
      body={renderBody()} >
    </AppFrame>
  )
}

NewCustomerContainer.propTypes = {}

const mapStateToProps = (state, props) => ({});

export default withRouter(connect(mapStateToProps, { createCustomer })(NewCustomerContainer));
