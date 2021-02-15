import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useDebounce } from '../components/Debounce'
import { InputBase } from './InputBase'
import { Label } from '../labels/Label'
import cn from './Input.module.scss'

export const InputPDF = ({
  placeholder,
  value,
  debounce,
  text_align,
  type,
  name,
  label,
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
  const style = {
    fontWeight: 400,
    fontSize: 11,
    lineHeight: '11px',
    margin: 0,
    padding: '2px 5px 1px 5px'
  }
  return (
    <div className={cn.inputForm}>
      <Label label={label} style={style} />
      <InputBase {...rest} label={false} height={16} margin={0} transparent>
        <Base
          {...props}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          name={name}
          text_align={text_align}
        />
      </InputBase>
    </div>
  )
}
InputPDF.defaultProps = {
  value: undefined,
  placeholder: '',
  text_align: 'left',
  type: 'text',
  name: '',
  label: null,
  debounce: null,
  onChange: () => {}
}
InputPDF.propTypes = {
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
  text_align: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func
}
