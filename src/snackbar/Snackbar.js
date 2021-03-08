import React, { useEffect } from 'react'
import * as PropTypes from 'prop-types'
import cn from './Snackbar.module.scss'
import { SnackbarElement, ActionElement } from './elements'
import { useTheme } from '../theme/ThemeProvider'

export const Snackbar = ({
  show,
  label,
  action,
  width,
  variant,
  theme,
  position,
  onChange,
  duration
}) => {
  useEffect(() => {
    if (show && duration) {
      setTimeout(() => onChange(!show), duration)
    }
  }, [show])

  if (!show) {
    return null
  }

  const snackbar = useTheme('snackbar', theme)
  const colors = useTheme('colors')
  const background = colors[variant] || snackbar.background_snackbar
  return (
    <SnackbarElement
      className={cn.snackbar}
      width={width}
      background={background}
      style={{
        ...position,
        background,
        color: snackbar.font_snackbar_color,
        maxWidth: width
      }}
    >
      <p>{label}</p>
      {action && (
        <ActionElement
          className={cn.action}
          theme={snackbar}
          onClick={() => onChange(!show)}
        >
          {action}
        </ActionElement>
      )}
    </SnackbarElement>
  )
}

Snackbar.defaultProps = {
  show: false,
  label: null,
  action: null,
  variant: null,
  duration: null,
  width: 250,
  theme: {},
  position: {
    bottom: 0,
    right: 0
  },
  onChange: () => {}
}
Snackbar.propTypes = {
  label: PropTypes.string,
  action: PropTypes.string,
  variant: PropTypes.string,
  show: PropTypes.bool,
  width: PropTypes.any,
  duration: PropTypes.number,
  theme: PropTypes.object,
  position: PropTypes.object,
  onChange: PropTypes.func
}
