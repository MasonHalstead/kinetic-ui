import React, { Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '../theme/ThemeProvider'
import cn from './Tooltip.module.scss'

export const Tooltip = ({
  tooltip,
  theme,
  position,
  width,
  children,
  caret
}) => {
  const caretPosition = () => {
    switch (caret) {
      case 'top':
        return {
          top: '-5px',
          left: 'calc(50% - 5px)',
          transform: 'rotate(135deg)'
        }
      case 'right':
        return {
          top: '50%',
          right: '-5px',
          transform: 'translateY(-50%) rotate(-135deg)'
        }
      case 'bottom':
        return {
          bottom: '-5px',
          left: 'calc(50% - 5px)',
          transform: 'rotate(-45deg)'
        }
      case 'left':
        return {
          top: '50%',
          left: '-5px',
          transform: 'translateY(-50%) rotate(45deg)'
        }
      default:
        return null
    }
  }
  const tooltips = useTheme('tooltips', theme)
  return (
    <div
      className={cn.tooltip}
      data-role='tooltip'
      style={{
        background: tooltips.background_tooltip,
        color: tooltips.font_tooltip_color,
        fontSize: tooltips.font_tooltip_size,
        fontWeight: tooltips.font_tooltip_weight,
        border: tooltips.border_tooltip,
        maxWidth: width,
        ...position
      }}
    >
      {tooltip && <p>{tooltip}</p>}
      {caret && <span className={cn.caret} style={caretPosition()} />}
      {Children.map(children, (child) => cloneElement(child, { tooltip }))}
    </div>
  )
}
Tooltip.defaultProps = {
  tooltip: null,
  width: 100,
  theme: {},
  position: {},
  caret: 'right',
  children: () => {}
}
Tooltip.propTypes = {
  tooltip: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  theme: PropTypes.object,
  position: PropTypes.object,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.any,
  caret: PropTypes.oneOf(['top', 'right', 'bottom', 'left', false])
}
