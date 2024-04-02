import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from '../../helpers/setPropsAsInitial.js';
import CustomerActions from '../CustomerActions';

const validate  = values => {
    const error = {};
    if (!values.name) {
      error.name = "Name field is required"
    }
    return error;
  }

const CustomerEdit = ({ name, dni, age, handleSubmit, submitting, onBack }) => {

  //const isRequired = value => (!value && 'This field is required');

  //const validate  = values => {
    //const error = {};
    //if (!values.name) {
      //error.name = "Name field is required"
    //}
    //return error;
  //}
  const isNumber = value => (isNaN(Number(value)) && 'This field must be a number');

  const MyField = ({input, meta, type, id, label, name}) => (
    <div>
      <label htmlFor={name}>{label}</label>
      <input id={id} {...input} type={!type ? "text" : type}/>
      {
        meta.touched && meta.error && <span>{meta.error}</span>
      }
    </div>  
  );

  return (
    <div>
      <h2>Edición del cliente</h2>
      <form onSubmit={handleSubmit}>
        <Field id="name" name="name" component={MyField} label="Nombre"></Field>
        <Field id="dni" name="dni" component={MyField} validate={isNumber} label="DNI"></Field>
        <Field id="age" name="age" component={MyField} type="number" validate={isNumber} label="Age"></Field>
        <CustomerActions>
          <button type="submit" disabled={submitting}>Aceptar</button>
          <button onClick={onBack}>Cancelar</button>
        </CustomerActions>
      </form>
    </div>
  )
}

CustomerEdit.propTypes = {
  name: PropTypes.string,
  dni: PropTypes.string,
  age: PropTypes.number
}

const CustomerEditForm = reduxForm({ form: 'CustomerEdit', validate, enableReinitialize: true, destroyOnUnmount: false })(CustomerEdit);

export default setPropsAsInitial(CustomerEditForm);
