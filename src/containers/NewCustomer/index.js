import React from 'react';
// import PropTypes from 'prop-types';
import AppFrame from '../../components/AppFrame';
import { connect } from 'react-redux';
import CustomerEdit from '../../components/CustomerEdit';
import { withRouter } from '../../utils/router.js';

const NewCustomerContainer = props => { 
  const handleSubmit = values => {
    console.log('Creating . .. ', JSON.stringify(values));
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

export default withRouter(connect(mapStateToProps, {})(NewCustomerContainer));
