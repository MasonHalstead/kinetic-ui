import React from 'react'
import PropTypes from 'prop-types'
import { Input } from './Input'
import { Label } from '../labels/Label'
import cn from './Input.module.scss'

export const InputPDF = ({ label, ...rest }) => {
  const theme = {
    font_label_weight: 400,
    font_label_size: '11px',
    font_label_transform: 'uppercase',
    ...rest.theme
  }
  return (
    <div className={cn.inputForm}>
      <div className={cn.inputLabel}>
        <Label label={label} theme={theme} />
      </div>
      <Input {...rest} height={17} margin={0} transparent />
    </div>
  )
}
InputPDF.defaultProps = {
  label: 'Default',
  theme: {}
}
InputPDF.propTypes = {
  label: PropTypes.string,
  theme: PropTypes.object
}
