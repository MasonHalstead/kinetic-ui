import React from 'react'
import PropTypes from 'prop-types'
import { InputBase } from './InputBase'
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

const Base = ({
  placeholder,
  value,
  text_align,
  type,
  name,
  onChange,
  onKeyDown,
  onBlur,
  onFocus,
  disabled
}) => {
  return (
    <input
      className={cn.base}
      tabIndex='-1' // allows to tab through dropdowns
      placeholder={placeholder}
      value={value || ''} // null wont clear input
      type={type}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      disabled={disabled}
      style={{
        textAlign: text_align,
        cursor: 'pointer',
        caretColor: 'transparent'
      }}
    />
  )
}
Base.defaultProps = {
  value: '',
  type: '',
  name: '',
  placeholder: '',
  text_align: 'left',
  disabled: null,
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
  onKeyDown: () => {}
}
Base.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  type: PropTypes.string,
  text_align: PropTypes.oneOf(['left', 'center', 'right']),
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func
}
