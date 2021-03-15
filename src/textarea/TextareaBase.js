import React, { useState, Children, cloneElement, Fragment } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Label } from '../labels/Label'
import { useTheme } from '../theme/ThemeProvider'
import { Tooltip } from '../tooltips/Tooltip'
import { Wrapper, Textarea } from './elements'
import cn from './Textarea.module.scss'

export const TextareaBase = ({
  label,
  margin,
  background,
  width,
  min_height,
  theme,
  disabled,
  error_level,
  error_message,
  transparent,
  children
}) => {
  const [focus, setFocus] = useState(false)
  const onFocus = () => {
    setFocus(true)
  }
  const onBlur = () => {
    setFocus(false)
  }
  const setErrorColor = () => {
    switch (error_level) {
      case 1:
        return '#5cb85c'
      case 2:
        return '#f0ad4e'
      case 3:
        return '#d9534f'
      default:
        return '#5cb85c'
    }
  }
  const setError = () => {
    switch (error_level) {
      case 1:
        return 'check-circle'
      case 2:
        return 'exclamation-triangle'
      case 3:
        return 'exclamation-circle'
      default:
        return 'check-circle'
    }
  }
  const inputs = useTheme('inputs', theme)
  return (
    <Wrapper
      className={cn.wrapper}
      color={inputs.font_input_placeholder}
      style={{
        margin,
        background,
        width,
        fontFamily: inputs.font_input_family,
        textTransform: inputs.font_input_transform,
        fontWeight: inputs.font_input_weight,
        fontSize: inputs.font_input_size,
        color: inputs.font_input_color
      }}
    >
      <div className={cn.custom}>
        {label && !transparent && (
          <Fragment>
            <Label label={label} theme={inputs} />
            {error_level && (
              <div className={cn.icon} style={{ color: setErrorColor() }}>
                <FontAwesomeIcon icon={setError()} />
              </div>
            )}
            {error_level && error_level !== 1 && (
              <Tooltip
                tooltip={error_message}
                caret='right'
                theme={inputs}
                position={{ right: 28 }}
              />
            )}
          </Fragment>
        )}
      </div>
      <Textarea
        className={cn.textarea}
        theme={inputs}
        transparent={transparent}
        focus={focus}
        disabled={disabled}
        style={{ minHeight: min_height }}
      >
        {Children.map(children, (child) =>
          cloneElement(child, { onFocus, onBlur, disabled, min_height })
        )}
      </Textarea>
    </Wrapper>
  )
}
TextareaBase.defaultProps = {
  label: null,
  margin: 0,
  background: null,
  width: '100%',
  min_height: 30,
  theme: {},
  error_level: null,
  error_message: 'Required Field',
  disabled: false,
  transparent: false,
  children: () => {}
}
TextareaBase.propTypes = {
  label: PropTypes.string,
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  background: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  min_height: PropTypes.number,
  disabled: PropTypes.bool,
  error_level: PropTypes.number,
  error_message: PropTypes.string,
  transparent: PropTypes.bool,
  theme: PropTypes.object,
  children: PropTypes.any
}
