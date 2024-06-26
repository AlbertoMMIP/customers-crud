import React from 'react'
import PropTypes from 'prop-types'
import CustomerListItem from '../CustomerListItem'
import { accessControl } from '../../helpers/accessControl.js';
import { CUSTOMER_LIST } from '../../constants/permissions.js';

const CustomerList = ({ customers, urlPath }) => {
  return (
      <div className="customers-list">
        {
          customers.map(customer => 
            <CustomerListItem
              key={customer.dni}
              name={customer.name}
              editAction={'Editar'}
              deleteAction={'Eliminar'}
              urlPath={urlPath}
              dni={customer.dni}>
            </CustomerListItem>)
        }
      </div>
  )
}

CustomerList.propTypes = {
  customers: PropTypes.array.isRequired,
  urlPath: PropTypes.string.isRequired,
}

export default accessControl([CUSTOMER_LIST])(CustomerList);
