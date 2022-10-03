import React from 'react'
import PropTypes from 'prop-types'

export default function Header({ text, bgColor, color}) {
  const headerStyles = 
  {
    backgroundColor: bgColor,
    color: color
  }
  
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  )
}

// default props
Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0,0,0,0.4)',
  color: '#ff6a95'
}

// checking. But there is Type script!
Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string
}