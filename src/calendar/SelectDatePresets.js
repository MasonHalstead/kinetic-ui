import React from 'react'
import PropTypes from 'prop-types'
import { PresetsElement, PresetElement } from './elements'
import cn from './Calendar.module.scss'

export const SelectDatePresets = ({
  calendar_presets,
  primary,
  secondary,
  calendar_range,
  preset_index,
  setPresets
}) => (
  <PresetsElement
    className={cn.presets}
    calendar_range={calendar_range}
    secondary={secondary}
  >
    <div className={cn.default}>
      <p>Presets</p>
    </div>
    <div className={cn.preset} primary={primary} secondary={secondary}>
      {calendar_presets
        .filter((cp) => cp.calendar_range === calendar_range)
        .map((cp, i) => (
          <PresetElement
            key={cp.uuid}
            primary={primary}
            secondary={secondary}
            active={preset_index === i}
            onClick={() => setPresets({ ...cp, preset_index: i })}
          >
            {cp.name}
          </PresetElement>
        ))}
    </div>
  </PresetsElement>
)

SelectDatePresets.defaultProps = {
  setPresets: () => {},
  primary: null,
  secondary: null,
  preset_index: -1,
  calendar_range: false,
  calendar_presets: []
}
SelectDatePresets.propTypes = {
  primary: PropTypes.string,
  secondary: PropTypes.string,
  calendar_range: PropTypes.bool,
  preset_index: PropTypes.number,
  setPresets: PropTypes.func,
  calendar_presets: PropTypes.array
}
