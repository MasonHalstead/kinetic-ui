import React, { useState, Children, cloneElement, useEffect } from 'react'
import PropTypes from 'prop-types'
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
  auto_focus,
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
  onKeyDown,
  open,
  children,
  theme,
  ...rest
}) => {
  const [focus, setFocus] = useState(false)

  useEffect(() => {
    if (auto_focus) {
      setFocus(true)
    }
  }, [])
  const onFocus = (e, override) => {
    // special case that abuses the right icon
    // built in for the dropdown remove functionality
    if (override && error_level === 99) {
      e.stopPropagation()
      e.preventDefault()
      rest.onRemove()
      return
    }

    if (inputRef && inputRef.current) {
      inputRef.current.focus()
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
            onKeyDown,
            input_control: !!inputRef,
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
            {show_tooltip && (
              <Tooltip
                tooltip={error_message}
                theme={inputs}
                caret='right'
                width='max-content'
                position={{ right: 34 }}
              />
            )}
          </div>
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
  auto_focus: false,
  error_level: null,
  error_message: null,
  disabled: false,
  transparent: false,
  inputRef: null,
  open: false,
  theme: {},
  children: () => {},
  onKeyDown: () => {},
  onFocus: () => {},
  onRemove: () => {},
  onBlur: () => {}
}
InputBase.propTypes = {
  left_icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  right_icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  label: PropTypes.string,
  auto_focus: PropTypes.bool,
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  background: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.number,
  disabled: PropTypes.bool,
  error_level: PropTypes.number,
  error_message: PropTypes.string,
  transparent: PropTypes.bool,
  theme: PropTypes.object,
  placeholder: PropTypes.string,
  inputRef: PropTypes.any,
  open: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  onRemove: PropTypes.func,
  onBlur: PropTypes.func,
  children: PropTypes.any
}
