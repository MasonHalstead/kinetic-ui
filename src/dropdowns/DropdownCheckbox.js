import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '../theme/ThemeProvider'
import { DropdownBase } from './DropdownBase'
import { InputDropdown } from '../inputs/InputDropdown'
import { OptionCheckbox } from '../options/OptionCheckbox'
import { Select } from '../selects/Select'

export const DropdownCheckbox = ({
  left_icon,
  right_icon,
  label,
  margin,
  background,
  width,
  height,
  disabled,
  placeholder,
  theme,
  transparent,
  options: optionsProps,
  option_key,
  checked_key,
  highlight,
  native,
  error_level,
  error_message,
  scroll_height,
  nullable,
  controlled,
  position,
  onChange,
  onSelect: onSelectProps
}) => {
  const [options, setOptions] = useState([])

  useEffect(() => {
    setOptions(optionsProps)
  }, [optionsProps])

  const onSelect = (option, index) => {
    const new_options = mergeOptions(options, option, index)
    onSelectProps(new_options)
  }

  const mergeOptions = (prev, option, index) => {
    const new_options = [...prev]
    if (index !== -1) {
      new_options.splice(index, 1, option)
    }
    return new_options
  }

  const dropdowns = useTheme('dropdowns', theme)

  const value = options
    .filter((o) => o[checked_key])
    .map((o) => o[option_key])
    .join(', ')
  return (
    <DropdownBase
      value={value}
      options={options}
      option_key={option_key}
      margin={margin}
      width={width}
      onChange={onChange}
      onSelect={onSelect}
      nullable={nullable}
      controlled={controlled}
      multi_select
    >
      <InputDropdown
        left_icon={left_icon}
        right_icon={right_icon}
        background={background}
        label={label}
        theme={dropdowns}
        transparent={transparent}
        height={height}
        disabled={disabled}
        placeholder={placeholder}
        error_level={error_level}
        error_message={error_message}
      />
      <Select
        theme={dropdowns}
        transparent={transparent}
        options={options}
        height={height}
        position={position}
        disabled={disabled}
        scroll_height={scroll_height}
      >
        <OptionCheckbox
          theme={dropdowns}
          highlight={highlight}
          native={native}
          option_key={option_key}
          checked_key={checked_key}
        />
      </Select>
    </DropdownBase>
  )
}
DropdownCheckbox.defaultProps = {
  left_icon: null,
  right_icon: ['fas', 'chevron-down'],
  label: null,
  margin: 0,
  background: null,
  width: '100%',
  height: 30,
  disabled: false,
  options: [],
  option_key: 'name',
  checked_key: 'checked',
  highlight: true,
  native: true,
  error_message: null,
  error_level: null,
  transparent: false,
  placeholder: '',
  position: 'bottom',
  text_align: 'left',
  theme: {},
  scroll_height: 200,
  nullable: false,
  controlled: true,
  onChange: () => {},
  onSelect: () => {}
}
DropdownCheckbox.propTypes = {
  left_icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  right_icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  label: PropTypes.string,
  highlight: PropTypes.bool,
  native: PropTypes.bool,
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  background: PropTypes.string,
  position: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.number,
  disabled: PropTypes.bool,
  controlled: PropTypes.bool,
  options: PropTypes.array,
  option_key: PropTypes.string,
  checked_key: PropTypes.string,
  error_message: PropTypes.string,
  error_level: PropTypes.number,
  transparent: PropTypes.bool,
  theme: PropTypes.object,
  placeholder: PropTypes.string,
  text_align: PropTypes.oneOf(['left', 'center', 'right']),
  scroll_height: PropTypes.number,
  nullable: PropTypes.bool,
  onChange: PropTypes.func,
  onSelect: PropTypes.func
}
