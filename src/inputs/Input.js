import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDebounce } from '../components/Debounce'
import { InputBase } from './InputBase'
import cn from './Input.module.scss'

export const Input = ({
  placeholder,
  debounce,
  text_align,
  type,
  name,
  value,
  default_value,
  ...rest
}) => {
  const [debounce_value, setValue] = useState('')
  const onChange = (e) => {
    e.preventDefault()

    if (debounce) {
      setValue(e.target.value)
      return
    }
    rest.onChange(e.target.value)
  }

  useEffect(() => {
    if (debounce) {
      setValue(default_value)
    }
  }, [default_value])

  useDebounce(
    () => rest.onChange(debounce_value),
    default_value,
    debounce_value,
    debounce,
    [debounce_value]
  )

  const props = { value, default_value }

  if (default_value) {
    props.value = undefined
    props.default_value = default_value
  }
  if (value) {
    props.value = value
    props.default_value = undefined
  }
  return (
    <InputBase {...rest}>
      <Base
        {...props}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        name={name}
        text_align={text_align}
      />
    </InputBase>
  )
}
Input.defaultProps = {
  value: undefined,
  default_value: undefined,
  placeholder: '',
  text_align: 'left',
  type: 'text',
  name: '',
  label: null,
  debounce: null,
  onChange: () => {}
}
Input.propTypes = {
  value: PropTypes.string,
  default_value: PropTypes.string,
  placeholder: PropTypes.string,
  text_align: PropTypes.oneOf(['left', 'center', 'right']),
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  debounce: PropTypes.number,
  onChange: PropTypes.func
}

const Base = ({
  placeholder,
  default_value,
  value,
  text_align,
  type,
  name,
  onChange,
  onBlur,
  onFocus,
  onKeyDown,
  disabled
}) => (
  <input
    className={cn.base}
    placeholder={placeholder}
    defaultValue={default_value}
    value={value}
    type={type}
    name={name}
    onChange={onChange}
    onBlur={onBlur}
    onFocus={onFocus}
    onKeyDown={onKeyDown}
    disabled={disabled}
    style={{ textAlign: text_align }}
  />
)
Base.defaultProps = {
  default_value: undefined,
  value: undefined,
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
  default_value: PropTypes.string,
  value: PropTypes.string,
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
