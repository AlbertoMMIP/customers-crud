import React from 'react'
import { withRouter } from '../../utils/router'
import AppFrame from './../../components/AppFrame'
import CustomerActions from './../../components/CustomerActions'

const HomeContainer = props => {

  const handleOnClick = (props) => {
    console.log('click');
    props.history('/customers');
  }
  return (
    <div>
      <AppFrame
        header='Home'
        body={
          <div>
            Este es la pantalla inicial
            <CustomerActions>
              <button onClick={() => handleOnClick(props)} >Listado de clientes</button>
            </CustomerActions>
          </div>
        }
        ></AppFrame>
    </div>
  )
}

export default withRouter(HomeContainer);