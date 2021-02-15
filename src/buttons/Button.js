import React from 'react'
import PropTypes from 'prop-types'
import { ButtonBase } from './ButtonBase'

export const Button = ({ children, ...rest }) => {
  return (
    <ButtonBase {...rest}>
      <span>{children}</span>
    </ButtonBase>
  )
}
Button.defaultProps = {
  children: ''
}
Button.propTypes = {
  children: PropTypes.string
}
