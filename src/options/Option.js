import React from 'react'
import PropTypes from 'prop-types'
import { OptionElement } from './elements'
import cn from './Option.module.scss'

export const Option = ({
  option_key,
  index,
  active,
  selected,
  option,
  theme,
  onSelect
}) => {
  const select = selected === index
  return (
    <OptionElement
      className={cn.option}
      role='option'
      aria-checked={select}
      aria-selected={select}
      active={active === index}
      selected={select}
      theme={theme}
      onMouseDown={() => onSelect(option, index)}
    >
      {option[option_key] || option.uuid}
    </OptionElement>
  )
}
Option.defaultProps = {
  option_key: 'name',
  theme: {},
  active: -1,
  selected: -1,
  onSelect: () => {}
}
Option.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func
}
