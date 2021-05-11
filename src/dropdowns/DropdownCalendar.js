import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '../theme/ThemeProvider'
import { DropdownBase } from './DropdownBase'
import { InputDropdown } from '../inputs/InputDropdown'
import { SelectCalendar } from '../selects/SelectCalendar'
import { presets } from '../calendar/constants'
import moment from 'moment'

export const DropdownCalendar = ({
  left_icon,
  right_icon,
  label,
  margin,
  background,
  width,
  disabled,
  placeholder,
  theme,
  transparent,
  error_level,
  error_message,
  position,
  calendar_panels,
  calendar_days,
  calendar_display,
  calendar_presets,
  calendar_range,
  selected_date,
  start_date,
  finish_date,
  min_date,
  max_date,
  preset_dates,
  valid_formats,
  output_format,
  nullable,
  onSelect: onSelectProps
}) => {
  const onSelect = (calendar) => {
    if (calendar) {
      onSelectProps(calendar)
    } else {
      onSelectProps({
        selected_date: null,
        start_date: null,
        finish_date: null
      })
    }
  }

  const calendarValue = () => {
    const selected_valid = moment(selected_date, valid_formats, true).isValid()
    const start_valid = moment(start_date, valid_formats, true).isValid()
    const finish_valid = moment(finish_date, valid_formats, true).isValid()

    let value = ''

    if (!calendar_range && selected_valid) {
      return moment(selected_date).format(output_format)
    }

    if (calendar_range && start_valid) {
      value = moment(start_date).format(output_format)
    }

    if (calendar_range && finish_valid) {
      value += `- ${moment(finish_date).format(output_format)}`
    }

    return value
  }

  const dropdowns = useTheme('dropdowns', theme)
  const select_position = position === 'left'

  return (
    <DropdownBase
      value={calendarValue()}
      margin={margin}
      width={width}
      onSelect={onSelect}
      nullable={nullable}
      multi_select={calendar_range}
    >
      <InputDropdown
        left_icon={left_icon}
        right_icon={right_icon}
        background={background}
        label={label}
        theme={dropdowns}
        transparent={transparent}
        disabled={disabled}
        placeholder={placeholder}
        error_level={error_level}
        error_message={error_message}
      />
      <SelectCalendar
        theme={dropdowns}
        transparent={transparent}
        width='max-content'
        position={position}
        disabled={disabled}
        calendar_panels={calendar_panels}
        calendar_days={calendar_days}
        calendar_display={calendar_display}
        calendar_presets={calendar_presets}
        calendar_range={calendar_range}
        selected_date={selected_date}
        start_date={start_date}
        finish_date={finish_date}
        min_date={min_date}
        max_date={max_date}
        preset_dates={preset_dates}
        valid_formats={valid_formats}
        output_format={output_format}
        left={select_position && 0}
        right={!select_position && 0}
      />
    </DropdownBase>
  )
}
DropdownCalendar.defaultProps = {
  left_icon: null,
  right_icon: ['fas', 'chevron-down'],
  label: null,
  margin: 0,
  background: null,
  width: '100%',
  disabled: false,
  error_message: null,
  error_level: null,
  transparent: false,
  placeholder: '',
  position: 'left',
  theme: {},
  calendar_panels: 1,
  calendar_days: 42,
  calendar_display: true,
  calendar_presets: false,
  calendar_range: false,
  selected_date: null,
  start_date: null,
  finish_date: null,
  min_date: null,
  max_date: null,
  preset_dates: presets,
  nullable: false,
  valid_formats: ['M/D/YYYY', 'M-D-YYYY'],
  output_format: 'M/D/YYYY',
  onSelect: () => {}
}
DropdownCalendar.propTypes = {
  left_icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  right_icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  label: PropTypes.string,
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  background: PropTypes.string,
  position: PropTypes.string,
  error_message: PropTypes.string,
  error_level: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  selected_date: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.string
  ]),
  start_date: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.string
  ]),
  finish_date: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.string
  ]),
  min_date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  max_date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  calendar_presets: PropTypes.bool,
  nullable: PropTypes.bool,
  preset_dates: PropTypes.array,
  calendar_days: PropTypes.oneOf([42, 49, 56]),
  calendar_display: PropTypes.bool,
  calendar_range: PropTypes.bool,
  calendar_panels: PropTypes.number,
  theme: PropTypes.object,
  valid_formats: PropTypes.array,
  output_format: PropTypes.string,
  transparent: PropTypes.bool,
  placeholder: PropTypes.string,
  text_align: PropTypes.oneOf(['left', 'center', 'right']),
  onSelect: PropTypes.func
}
