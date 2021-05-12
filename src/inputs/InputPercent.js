import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDebounce } from '../components/Debounce'
import { InputBase } from './InputBase'
import NumberFormat from 'react-number-format'
import cn from './Input.module.scss'

export const InputPercent = ({
  placeholder,
  value,
  default_value,
  auto_focus,
  name,
  debounce,
  thousand_separator,
  decimal_scale,
  suffix,
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
        float_value: (target.floatValue || 0) / 100,
        formatted_value: target.formattedValue,
        value: target.value
      })
      return
    }
    rest.onChange({
      float_value: (target.floatValue || 0) / 100,
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
    <InputBase {...rest} auto_focus={auto_focus}>
      <Base
        {...props}
        onChange={onChange}
        auto_focus={auto_focus}
        placeholder={placeholder}
        name={name}
        controlled={controlled}
        text_align={text_align}
        thousand_separator={thousand_separator}
        decimal_scale={decimal_scale}
        suffix={suffix}
      />
    </InputBase>
  )
}
InputPercent.defaultProps = {
  value: undefined,
  default_value: undefined,
  debounce: null,
  auto_focus: false,
  name: '',
  label: null,
  placeholder: '',
  text_align: 'right',
  thousand_separator: true,
  decimal_scale: 0,
  suffix: '%',
  controlled: true,
  onChange: () => {}
}
InputPercent.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  controlled: PropTypes.bool,
  auto_focus: PropTypes.bool,
  default_value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  text_align: PropTypes.string,
  thousand_separator: PropTypes.bool,
  decimal_scale: PropTypes.number,
  suffix: PropTypes.string,
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
    auto_focus,
    placeholder,
    text_align,
    default_value,
    value,
    controlled,
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
      autoFocus={auto_focus}
      suffix={suffix}
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
  name: '',
  auto_focus: false,
  controlled: true,
  placeholder: '',
  text_align: 'right',
  disabled: null,
  thousand_separator: true,
  decimal_scale: 0,
  suffix: '%',
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
  onKeyDown: () => {}
}
Base.propTypes = {
  default_value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  auto_focus: PropTypes.bool,
  controlled: PropTypes.bool,
  text_align: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  thousand_separator: PropTypes.bool,
  decimal_scale: PropTypes.number,
  suffix: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func
}
