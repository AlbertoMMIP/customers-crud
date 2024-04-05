import React from 'react'
import PropTypes from 'prop-types'
import AppHeader from '../AppHedear'

const AppFrame = ({ header, body, footer }) => {
  return (
    <div>
      <div className='app-frame'>
        <AppHeader title={header}></AppHeader>
        <div className=''>
          {body}
        </div>
      </div>
    </div>
  )
}

AppFrame.propTypes = {
  header: PropTypes.string.isRequired,
  body: PropTypes.element.isRequired,
}

export default AppFrame;
