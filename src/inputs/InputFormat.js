import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDebounce } from '../components/Debounce'
import { InputBase } from './InputBase'
import NumberFormat from 'react-number-format'
import cn from './Input.module.scss'

export const InputFormat = ({
  placeholder,
  value,
  default_value,
  controlled,
  name,
  debounce,
  thousand_separator,
  decimal_separator,
  decimal_scale,
  fixed_decimal_scale,
  allow_negative,
  allow_empty_formatting,
  allow_leading_zeros,
  prefix,
  suffix,
  is_numeric_string,
  format,
  mask,
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
        thousand_separator={thousand_separator}
        decimal_scale={decimal_scale}
        suffix={suffix}
        decimal_separator={decimal_separator}
        fixed_decimal_scale={fixed_decimal_scale}
        allow_negative={allow_negative}
        allow_empty_formatting={allow_empty_formatting}
        allow_leading_zeros={allow_leading_zeros}
        prefix={prefix}
        is_numeric_string={is_numeric_string}
        format={format}
        mask={mask}
      />
    </InputBase>
  )
}
InputFormat.defaultProps = {
  value: undefined,
  default_value: undefined,
  debounce: null,
  name: '',
  label: null,
  placeholder: '',
  text_align: 'right',
  thousand_separator: true,
  decimal_scale: null,
  suffix: '',
  controlled: true,
  decimal_separator: '.',
  fixed_decimal_scale: false,
  allow_negative: true,
  allow_empty_formatting: false,
  allow_leading_zeros: false,
  prefix: null,
  is_numeric_string: false,
  format: null,
  mask: '',
  onChange: () => {}
}
InputFormat.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  controlled: PropTypes.bool,
  default_value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  text_align: PropTypes.string,
  thousand_separator: PropTypes.bool,
  decimal_scale: PropTypes.number,
  suffix: PropTypes.string,
  decimal_separator: PropTypes.string,
  fixed_decimal_scale: PropTypes.bool,
  allow_negative: PropTypes.bool,
  allow_empty_formatting: PropTypes.bool,
  allow_leading_zeros: PropTypes.bool,
  prefix: PropTypes.string,
  is_numeric_string: PropTypes.bool,
  format: PropTypes.string,
  mask: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  debounce: PropTypes.number,
  onChange: PropTypes.func
}

const Base = React.memo(
  ({
    thousand_separator,
    decimal_scale,
    suffix,
    controlled,
    placeholder,
    text_align,
    default_value,
    decimal_separator,
    fixed_decimal_scale,
    allow_negative,
    allow_empty_formatting,
    allow_leading_zeros,
    prefix,
    is_numeric_string,
    format,
    mask,
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
      thousandSeparator={thousand_separator}
      decimalScale={decimal_scale}
      suffix={suffix}
      placeholder={placeholder}
      defaultValue={default_value}
      decimal_separator={decimal_separator}
      fixed_decimal_scale={fixed_decimal_scale}
      allow_negative={allow_negative}
      allow_empty_formatting={allow_empty_formatting}
      allow_leading_zeros={allow_leading_zeros}
      prefix={prefix}
      is_numeric_string={is_numeric_string}
      format={format}
      mask={mask}
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
  name: '',
  placeholder: '',
  text_align: 'right',
  disabled: null,
  thousand_separator: true,
  decimal_scale: null,
  controlled: true,
  suffix: '',
  decimal_separator: '.',
  fixed_decimal_scale: false,
  allow_negative: true,
  allow_empty_formatting: false,
  allow_leading_zeros: false,
  prefix: null,
  is_numeric_string: false,
  format: null,
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
  text_align: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  controlled: PropTypes.bool,
  thousand_separator: PropTypes.bool,
  decimal_scale: PropTypes.number,
  decimal_separator: PropTypes.string,
  fixed_decimal_scale: PropTypes.bool,
  allow_negative: PropTypes.bool,
  allow_empty_formatting: PropTypes.bool,
  allow_leading_zeros: PropTypes.bool,
  prefix: PropTypes.string,
  is_numeric_string: PropTypes.bool,
  format: PropTypes.string,
  mask: PropTypes.string,
  suffix: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func
}
