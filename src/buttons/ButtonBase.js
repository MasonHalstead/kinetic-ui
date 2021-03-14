import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Tooltip } from '../tooltips/Tooltip'
import { Button } from './elements'
import { useTheme } from '../theme/ThemeProvider'
import classNames from 'classnames'
import cn from './Button.module.scss'

export const ButtonBase = ({
  left_icon,
  right_icon,
  variant,
  button_size,
  type,
  caret,
  theme,
  position,
  tooltip,
  margin,
  width,
  disabled,
  outline,
  children,
  ...rest
}) => {
  const buttons = useTheme('buttons', theme)
  const colors = useTheme('colors')
  const onClick = (e, override) => {
    if (override) {
      e.stopPropagation()
      e.preventDefault()
    }
    rest.onClick(e)
  }
  return (
    <Button
      onClick={onClick}
      className={classNames(cn.button, cn[button_size])}
      type={type}
      color={colors[variant] || 'primary'}
      style={{
        width,
        margin,
        color: outline ? buttons.font_button_color : '#fff',
        fontFamily: buttons.font_button_family,
        textTransform: buttons.font_button_transform,
        fontWeight: buttons.font_button_weight,
        fontSize: buttons.font_button_size
      }}
      outline={outline}
      disabled={disabled}
    >
      {left_icon && (
        <div className={cn.icon}>
          <FontAwesomeIcon icon={left_icon} />
        </div>
      )}
      {children}
      {right_icon && (
        <div
          className={cn.icon}
          tabIndex={-1}
          onClick={(e) => onClick(e, true)}
        >
          <FontAwesomeIcon icon={right_icon} />
        </div>
      )}
      {tooltip && (
        <Tooltip tooltip={tooltip} caret={caret} position={position} />
      )}
    </Button>
  )
}
ButtonBase.defaultProps = {
  left_icon: null,
  right_icon: null,
  tooltip: null,
  type: 'button',
  button_size: 'medium',
  caret: 'right',
  variant: 'primary',
  position: { right: 'calc(100% + 10px)' },
  theme: {},
  margin: 0,
  width: 'max-content',
  disabled: false,
  outline: false,
  onClick: () => {},
  children: ''
}
ButtonBase.propTypes = {
  left_icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  right_icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  tooltip: PropTypes.string,
  type: PropTypes.string,
  button_size: PropTypes.string,
  caret: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  variant: PropTypes.string,
  position: PropTypes.object,
  theme: PropTypes.object,
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  outline: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
}
