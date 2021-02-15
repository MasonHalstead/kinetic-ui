import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '../theme/ThemeProvider'
import { DropdownBase } from './DropdownBase'
import { InputDropdown } from '../inputs/InputDropdown'
import { Option } from '../options/Option'
import { Select } from '../selects/Select'

export const Dropdown = ({
  left_icon,
  right_icon,
  label,
  margin,
  background,
  default_value,
  width,
  height,
  disabled,
  placeholder,
  theme,
  text_align,
  transparent,
  options,
  option_key,
  error_level,
  error_message,
  scroll_height,
  nullable,
  onChange,
  onSelect
}) => {
  const dropdowns = useTheme('dropdowns', theme)
  return (
    <DropdownBase
      default_value={default_value}
      options={options}
      option_key={option_key}
      margin={margin}
      width={width}
      nullable={nullable}
      onChange={onChange}
      onSelect={onSelect}
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
        text_align={text_align}
        placeholder={placeholder}
        error_level={error_level}
        error_message={error_message}
      />
      <Select
        theme={dropdowns}
        options={options}
        disabled={disabled}
        scroll_height={scroll_height}
      >
        <Option theme={dropdowns} option_key={option_key} />
      </Select>
    </DropdownBase>
  )
}
Dropdown.defaultProps = {
  left_icon: null,
  right_icon: ['fas', 'chevron-down'],
  label: null,
  margin: 0,
  background: null,
  default_value: null,
  width: '100%',
  height: 30,
  disabled: false,
  options: [],
  option_key: 'name',
  error_message: null,
  transparent: false,
  placeholder: 'select item...',
  text_align: 'left',
  theme: {},
  scroll_height: 200,
  nullable: false,
  onChange: () => {},
  onSelect: () => {}
}
Dropdown.propTypes = {
  left_icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  right_icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  label: PropTypes.string,
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  background: PropTypes.string,
  default_value: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.number,
  disabled: PropTypes.bool,
  options: PropTypes.array,
  option_key: PropTypes.string,
  error_message: PropTypes.string,
  transparent: PropTypes.bool,
  theme: PropTypes.object,
  placeholder: PropTypes.string,
  text_align: PropTypes.oneOf(['left', 'center', 'right']),
  scroll_height: PropTypes.number,
  nullable: PropTypes.bool,
  onChange: PropTypes.func,
  onSelect: PropTypes.func
}
