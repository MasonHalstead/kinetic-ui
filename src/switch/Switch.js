import React from 'react'
import PropTypes from 'prop-types'
import ReactSwitch from 'react-switch'
import { useTheme } from '../theme/ThemeProvider'
import { Label } from '../labels/Label'
import cn from './Switch.module.scss'

export const Switch = ({
  prepend_label,
  append_label,
  highlight,
  disabled,
  checked,
  height,
  width,
  margin,
  theme,
  onClick
}) => {
  const handleClick = () => {
    if (!disabled) {
      onClick(!checked)
    }
  }
  const style = {
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'stretch',
    fontWeight: 400,
    margin: '0px 10px'
  }
  const switches = useTheme('switches', theme)
  return (
    <div className={cn.switch} style={{ width, margin, height }}>
      {prepend_label && (
        <Label
          label={prepend_label}
          style={{ ...style, marginLeft: 0 }}
          theme={{
            ...switches,
            font_label_color:
              highlight && !checked
                ? switches.font_label_highlight
                : switches.font_label_color
          }}
          onClick={handleClick}
        />
      )}
      <ReactSwitch
        onChange={handleClick}
        checked={checked}
        onColor={switches.switch_on}
        onHandleColor={switches.on_handle}
        offColor={switches.switch_off}
        offHandleColor={switches.switch_off_handle}
        handleDiameter={16}
        height={18}
        width={32}
        uncheckedIcon={false}
        checkedIcon={false}
        disabled={disabled}
        boxShadow='0 2px 4px 0 rgba(0, 0, 0, 0.12)'
      />
      {append_label && (
        <Label
          label={append_label}
          onClick={handleClick}
          theme={{
            ...switches,
            font_label_color:
              highlight && checked
                ? switches.font_label_highlight
                : switches.font_label_color
          }}
          style={{ ...style, marginRight: 0 }}
        />
      )}
    </div>
  )
}

Switch.defaultProps = {
  highlight: true,
  prepend_label: null,
  append_label: null,
  checked: false,
  disabled: false,
  theme: {},
  width: '100%',
  margin: '0px',
  height: 30,
  onClick: () => {}
}
Switch.propTypes = {
  highlight: PropTypes.bool,
  prepend_label: PropTypes.string,
  append_label: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  theme: PropTypes.object,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.number,
  onClick: PropTypes.func
}
