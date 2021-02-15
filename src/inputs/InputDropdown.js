import React from 'react'
import PropTypes from 'prop-types'
import { InputBase } from './InputBase'
import { BaseElement } from './elements'
import cn from './Input.module.scss'

export const InputDropdown = ({
  placeholder,
  value,
  text_align,
  theme,
  ...rest
}) => {
  return (
    <InputBase theme={theme} {...rest}>
      <Base
        theme={theme}
        value={value}
        placeholder={placeholder}
        text_align={text_align}
      />
    </InputBase>
  )
}
InputDropdown.defaultProps = {
  theme: {},
  value: undefined,
  placeholder: undefined,
  text_align: 'left'
}
InputDropdown.propTypes = {
  theme: PropTypes.object,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  text_align: PropTypes.oneOf(['left', 'center', 'right'])
}

const Base = ({ placeholder, height, value, text_align, theme, disabled }) => (
  <BaseElement
    className={cn.base}
    theme={theme}
    placeholder={value}
    disabled={disabled}
    style={{ textAlign: text_align, lineHeight: `${height - 2}px` }}
  >
    {value || placeholder}
  </BaseElement>
)
Base.defaultProps = {
  value: undefined,
  placeholder: undefined,
  text_align: 'left',
  disabled: null
}
Base.propTypes = {
  value: PropTypes.string,
  text_align: PropTypes.oneOf(['left', 'center', 'right']),
  placeholder: PropTypes.string,
  disabled: PropTypes.bool
}
