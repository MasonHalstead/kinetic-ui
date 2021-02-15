import React, { useState, Children, cloneElement } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Wrapper, Input } from './elements'
import { Label } from '../labels/Label'
import { Tooltip } from '../tooltips/Tooltip'
import { useTheme } from '../theme/ThemeProvider'
import classNames from 'classnames'
import cn from './Input.module.scss'

export const InputBase = ({
  left_icon,
  right_icon,
  label,
  margin,
  background,
  width,
  height,
  disabled,
  error_level,
  error_message,
  transparent,
  inputRef,
  open,
  children,
  theme,
  ...rest
}) => {
  const [focus, setFocus] = useState(false)
  const onFocus = (e, override) => {
    // special case that abuses the right icon
    // built in for the dropdown remove functionality
    if (override && error_level === 99) {
      e.stopPropagation()
      e.preventDefault()
      rest.onRemove()
      return
    }

    setFocus(true)
    rest.onFocus()
  }
  const onBlur = (override) => {
    setFocus(false)
    rest.onBlur(override)
  }

  const setErrorColor = () => {
    if (!error_level) {
      return null
    }
    switch (error_level) {
      case 1:
        return '#5cb85c'
      case 2:
        return '#f0ad4e'
      case 3:
        return '#d9534f'
      case 99: // special dropdown remove case
        return '#d9534f'
      default:
        return null
    }
  }
  const setError = () => {
    if (!error_level) {
      return right_icon
    }
    switch (error_level) {
      case 1:
        return 'check-circle'
      case 2:
        return 'exclamation-triangle'
      case 3:
        return 'exclamation-circle'
      case 99: // special dropdown remove case
        return 'times'
      default:
        return right_icon
    }
  }
  const inputs = useTheme('inputs', theme)
  const show_label = label && !transparent
  const tab_index = inputRef ? 0 : -1
  const check_focus = inputRef ? open : focus
  const show_icon = right_icon || error_level
  const error_index = error_level === 99 ? -1 : undefined
  const show_tooltip = error_level && error_message

  return (
    <Wrapper
      className={cn.wrapper}
      color={inputs.font_input_placeholder}
      style={{
        margin,
        width,
        fontFamily: inputs.font_input_family,
        textTransform: inputs.font_input_transform,
        fontWeight: inputs.font_input_weight,
        fontSize: inputs.font_input_size,
        color: inputs.font_input_color
      }}
    >
      {show_label && (
        <div className={cn.custom}>
          <Label label={label} theme={inputs} onClick={() => onBlur(true)} />
        </div>
      )}
      <Input
        tabIndex={tab_index}
        ref={inputRef}
        className={classNames(cn.input, { [cn.open]: open })}
        theme={inputs}
        transparent={transparent}
        background={background}
        focus={check_focus}
        disabled={disabled}
        onBlur={onBlur}
        onFocus={onFocus}
        style={{ height }}
      >
        {left_icon && (
          <div className={cn.icon}>
            <FontAwesomeIcon icon={left_icon} />
          </div>
        )}
        {Children.map(children, (child) =>
          cloneElement(child, {
            onFocus,
            onBlur,
            height,
            disabled,
            theme: inputs
          })
        )}
        {show_icon && (
          <div
            tabIndex={error_index}
            onFocus={(e) => onFocus(e, true)}
            className={cn.icon}
            style={{ color: setErrorColor() }}
          >
            <FontAwesomeIcon icon={setError()} />
          </div>
        )}
        {show_tooltip && (
          <Tooltip
            tooltip={error_message}
            theme={inputs}
            caret='right'
            position={{ right: 34 }}
          />
        )}
      </Input>
    </Wrapper>
  )
}
InputBase.defaultProps = {
  left_icon: null,
  right_icon: null,
  label: null,
  margin: 0,
  background: null,
  width: '100%',
  height: 30,
  error_level: null,
  error_message: null,
  disabled: false,
  transparent: false,
  inputRef: null,
  open: false,
  theme: {},
  children: () => {},
  onFocus: () => {},
  onRemove: () => {},
  onBlur: () => {}
}
