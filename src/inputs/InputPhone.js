import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDebounce } from '../components/Debounce'
import { InputBase } from './InputBase'
import NumberFormat from 'react-number-format'
import cn from './Input.module.scss'

export const InputPhone = ({
  placeholder,
  value,
  default_value,
  name,
  debounce,
  format,
  mask,
  controlled,
  text_align,
  ...rest
}) => {
  const [debounce_value, setValue] = useState({
    float_value: null,
    formatted_value: null,
    value: null
  })
  const onChange = (target) => {
    if (debounce) {
      setValue({
        float_value: target.floatValue,
        formatted_value: target.formattedValue,
        value: target.value
      })
      return
    }
    rest.onChange({
      float_value: target.floatValue,
      formatted_value: target.formattedValue,
      value: target.value
    })
  }

  useEffect(() => {
    if (debounce) {
      setValue({
        float_value: null,
        formatted_value: null,
        value: default_value
      })
    }
  }, [default_value])

  useDebounce(
    () => rest.onChange(debounce_value),
    default_value,
    debounce_value.value,
    debounce,
    [debounce_value]
  )

  const props = {
    value: debounce_value.formatted_value
  }

  if (!controlled) {
    props.value = undefined
    props.default_value = default_value
  }
  if (controlled) {
    props.value = value
    props.default_value = undefined
  }

  return (
    <InputBase {...rest}>
      <Base
        {...props}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        controlled={controlled}
        text_align={text_align}
        format={format}
        mask={mask}
      />
    </InputBase>
  )
}
InputPhone.defaultProps = {
  value: undefined,
  default_value: undefined,
  debounce: null,
  name: '',
  label: null,
  placeholder: '',
  text_align: 'right',
  format: '(###) ###-####',
  mask: '',
  controlled: true,
  onChange: () => {}
}
InputPhone.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  default_value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  text_align: PropTypes.string,
  format: PropTypes.string,
  mask: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  debounce: PropTypes.number,
  controlled: PropTypes.bool,
  onChange: PropTypes.func
}

const Base = React.memo(
  ({
    format,
    mask,
    placeholder,
    text_align,
    default_value,
    controlled,
    value,
    name,
    onChange,
    onBlur,
    onFocus,
    onKeyDown,
    disabled
  }) => (
    <NumberFormat
      className={cn.base}
      format={format}
      mask={mask}
      placeholder={placeholder}
      defaultValue={default_value}
      value={value}
      name={name}
      onValueChange={(input) => {
        if (controlled && input.value === value) {
          return
        }
        onChange(input)
      }}
      onBlur={onBlur}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      disabled={disabled}
      style={{ textAlign: text_align }}
    />
  ),
  (prev, next) => {
    if (prev.controlled && prev.value !== next.value) {
      return false
    }
    return true
  }
)
Base.defaultProps = {
  default_value: undefined,
  value: undefined,
  controlled: true,
  name: '',
  placeholder: '',
  text_align: 'right',
  disabled: null,
  format: '(###) ###-####',
  mask: '',
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
  onKeyDown: () => {}
}
Base.propTypes = {
  default_value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  controlled: PropTypes.bool,
  text_align: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  format: PropTypes.string,
  mask: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func
}
