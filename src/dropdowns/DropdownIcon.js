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
  position,
  height,
  disabled,
  theme,
  transparent,
  options,
  option_key,
  scroll_height,
  nullable,
  onChange,
  onSelect
}) => {
  const dropdowns = useTheme('dropdowns', theme)
  const select_position = position === 'left' ? 0 : null
  return (
    <DropdownBase
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
      />
      <Select
        theme={dropdowns}
        options={options}
        disabled={disabled}
        width='max-content'
        scroll_height={scroll_height}
        left={select_position}
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
  height: 30,
  disabled: false,
  options: [],
  option_key: 'name',
  transparent: false,
  position: 'right',
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
  position: PropTypes.string,
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
