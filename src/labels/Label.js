import React from 'react'
import { useTheme } from '../theme/ThemeProvider'
import PropTypes from 'prop-types'
import cn from './Label.module.scss'

export const Label = ({ label, theme, style, onClick }) => {
  const labels = useTheme('labels', theme)
  return (
    <label
      className={cn.label}
      onClick={onClick}
      style={{
        fontFamily: labels.font_label_family,
        textTransform: labels.font_label_transform,
        fontSize: labels.font_label_size,
        lineHeight: labels.font_label_size,
        fontWeight: labels.font_label_weight,
        color: labels.font_label_color,
        ...style
      }}
    >
      {label}
    </label>
  )
}
Label.defaultProps = {
  label: null,
  theme: {},
  style: {},
  onClick: () => {}
}
Label.propTypes = {
  label: PropTypes.string,
  theme: PropTypes.object,
  style: PropTypes.object,
  onClick: PropTypes.func
}
