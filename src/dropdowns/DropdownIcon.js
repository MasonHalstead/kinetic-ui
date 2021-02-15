import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '../theme/ThemeProvider'
import { DropdownBase } from './DropdownBase'
import { InputBase } from '../inputs/InputBase'
import { Option } from '../options/Option'
import { Select } from '../selects/Select'

export const DropdownIcon = ({
  icon,
  label,
  margin,
  background,
  default_value,
  height,
  disabled,
  placeholder,
  theme,
  text_align,
  transparent,
  options,
  option_key,
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
      width='28px'
      nullable={nullable}
      onChange={onChange}
      onSelect={onSelect}
    >
      <InputBase
        right_icon={icon}
        background={background}
        label={label}
        theme={dropdowns}
        transparent={transparent}
        height={height}
        disabled={disabled}
        text_align={text_align}
        placeholder={placeholder}
        error_message={error_message}
      />
      <Select
        theme={dropdowns}
        options={options}
        disabled={disabled}
        width='max-content'
        scroll_height={scroll_height}
        left={null}
      >
        <Option theme={dropdowns} option_key={option_key} />
      </Select>
    </DropdownBase>
  )
}
DropdownIcon.defaultProps = {
  icon: ['fas', 'chevron-down'],
  label: null,
  margin: 0,
  background: null,
  default_value: null,
  height: 30,
  disabled: false,
  options: [],
  option_key: 'name',
  transparent: false,
  theme: {},
  scroll_height: 200,
  nullable: false,
  onChange: () => {},
  onSelect: () => {}
}
DropdownIcon.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  label: PropTypes.string,
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  background: PropTypes.string,
  height: PropTypes.number,
  disabled: PropTypes.bool,
  options: PropTypes.array,
  option_key: PropTypes.string,
  transparent: PropTypes.bool,
  theme: PropTypes.object,
  scroll_height: PropTypes.number,
  nullable: PropTypes.bool,
  onChange: PropTypes.func,
  onSelect: PropTypes.func
}
