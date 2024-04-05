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
        header='Inicio'
        body={
          <div>
            <img src="https://media.istockphoto.com/id/1371547852/es/foto/hola-y-bienvenida-caja-de-luz-blanca-escrita-sentada-sobre-fondo-azul.jpg?s=612x612&w=0&k=20&c=1H91gRYVx9ZZzxHmX6099zVmVe711w6VyoB6cqEmjeM=" alt="home" />
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
