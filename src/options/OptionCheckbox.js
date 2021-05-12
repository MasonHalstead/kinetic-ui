import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from '../checkbox/Checkbox'
import { OptionElement } from './elements'
import cn from './Option.module.scss'

export const OptionCheckbox = ({
  option_key,
  checked_key,
  index,
  option,
  highlight,
  native,
  theme,
  onSelect
}) => {
  return (
    <OptionElement
      className={cn.checkbox}
      role='option'
      theme={theme}
      aria-checked={option[checked_key]}
      onClick={() =>
        onSelect({ ...option, [checked_key]: !option[checked_key] }, index)
      }
    >
      <Checkbox
        checked={option[checked_key]}
        disabled={option.disabled}
        highlight={highlight}
        native={native}
      >
        {option[option_key]}
      </Checkbox>
    </OptionElement>
  )
}
OptionCheckbox.defaultProps = {
  option: {},
  option_key: 'name',
  checked_key: 'checked',
  highlight: true,
  native: true,
  theme: {},
  index: -1,
  onSelect: () => {}
}
OptionCheckbox.propTypes = {
  option: PropTypes.object,
  theme: PropTypes.object,
  highlight: PropTypes.bool,
  native: PropTypes.bool,
  index: PropTypes.number,
  option_key: PropTypes.string,
  checked_key: PropTypes.string,
  onSelect: PropTypes.func
}
