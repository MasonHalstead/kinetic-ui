import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useDebounce } from '../components/Debounce'
import { TextareaBase } from './TextareaBase'
import cn from './Textarea.module.scss'

export const Textarea = ({
  placeholder,
  value,
  debounce,
  text_align,
  type,
  name,
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

  useDebounce(() => rest.onChange(debounce_value), debounce, [debounce_value])

  const props = {
    value
  }

  if (debounce) {
    props.value = undefined
    props.default_value = value
  }
  return (
    <TextareaBase {...rest}>
      <Base
        {...props}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        name={name}
        text_align={text_align}
      />
    </TextareaBase>
  )
}
Textarea.defaultProps = {
  value: undefined,
  placeholder: '',
  text_align: 'left',
  type: 'text',
  name: '',
  label: null,
  debounce: null,
  onChange: () => {}
}
Textarea.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  text_align: PropTypes.string,
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
  min_height,
  type,
  name,
  onChange,
  onBlur,
  onFocus,
  onKeyDown,
  disabled
}) => (
  <textarea
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
    style={{ textAlign: text_align, minHeight: min_height }}
  />
)
Base.defaultProps = {
  default_value: undefined,
  value: undefined,
  type: '',
  name: '',
  placeholder: '',
  min_height: 30,
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
  min_height: PropTypes.number,
  text_align: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func
}
