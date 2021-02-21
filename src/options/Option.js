import React from 'react'
import PropTypes from 'prop-types'
import { OptionElement } from './elements'
import cn from './Option.module.scss'

export const Option = ({
  option_key,
  text_align,
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
      style={{ textAlign: text_align }}
      onMouseDown={() => onSelect(option, index)}
    >
      {option[option_key] || option.uuid}
    </OptionElement>
  )
}
Option.defaultProps = {
  option: {},
  option_key: 'name',
  text_align: 'left',
  theme: {},
  index: -1,
  active: -1,
  selected: -1,
  onSelect: () => {}
}
Option.propTypes = {
  option: PropTypes.object,
  theme: PropTypes.object,
  index: PropTypes.number,
  option_key: PropTypes.string,
  selected: PropTypes.number,
  active: PropTypes.number,
  text_align: PropTypes.string,
  onSelect: PropTypes.func
}
