import React from 'react'
import PropTypes from 'prop-types'
import ReactSwitch from 'react-switch'
import { useTheme } from '../theme/ThemeProvider'
import { Label } from '../labels/Label'
import cn from './Switch.module.scss'

export const Switch = ({
  prepend_label,
  append_label,
  checked,
  width,
  margin,
  theme,
  variant,
  onClick
}) => {
  const handleClick = () => onClick(!checked)
  const style = {
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'stretch',
    margin: '0px 10px'
  }
  const switches = useTheme('switches', theme)
  const font_color =
    variant === 'dark' ? switches.font_dark_color : switches.font_light_color
  return (
    <div className={cn.switch} style={{ width, margin }}>
      {prepend_label && (
        <Label
          label={prepend_label}
          style={{ ...style, marginLeft: 0 }}
          theme={{
            ...switches,
            font_label_color: font_color
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
        boxShadow='0 2px 4px 0 rgba(0, 0, 0, 0.12)'
      />
      {append_label && (
        <Label
          label={append_label}
          onClick={handleClick}
          theme={{
            ...switches,
            font_label_color: font_color
          }}
          style={{ ...style, marginRight: 0 }}
        />
      )}
    </div>
  )
}

Switch.defaultProps = {
  variant: 'dark',
  prepend_label: null,
  append_label: null,
  checked: false,
  theme: {},
  width: '100%',
  margin: '0px',
  onClick: () => {}
}
Switch.propTypes = {
  variant: PropTypes.string,
  prepend_label: PropTypes.string,
  append_label: PropTypes.string,
  width: PropTypes.string,
  margin: PropTypes.string
}
