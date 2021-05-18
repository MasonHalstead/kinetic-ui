import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '../theme/ThemeProvider'
import { DropdownBase } from './DropdownBase'
import { Input } from '../inputs/Input'
import { SelectCalendar } from '../selects/SelectCalendar'
import { presets } from '../calendar/constants'
import moment from 'moment'
import { mergeInputFormats, mergeOutputFormat } from '../calendar/utils'

export const DropdownCalendar = ({
  left_icon,
  right_icon,
  label,
  margin,
  background,
  width,
  disabled,
  placeholder,
  calendar_time,
  time_format,
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
  const [inputs, setInputs] = useState(valid_formats)
  const [output, setOutput] = useState(output_format)
  const [value, setValue] = useState('')

  useEffect(() => {
    const selected_value = calendarValue({
      selected_date,
      start_date,
      finish_date
    })
    if (selected_value !== value) {
      setValue(selected_value)
    }
  }, [selected_date, start_date, finish_date, inputs, output])

  useEffect(() => {
    const inputs_merged = mergeInputFormats({
      calendar_time,
      time_format,
      valid_formats
    })
    const output_merged = mergeOutputFormat({
      calendar_time,
      time_format,
      output_format
    })
    setInputs(inputs_merged)
    setOutput(output_merged)
  }, [calendar_time, time_format, valid_formats])

  const onChange = (input) => {
    const selected_valid = moment(input, inputs, true).isValid()
    setValue(input)

    if (calendar_time && selected_valid) {
      const date = moment(input).format(output)

      // accounts for edge cases where isValid returns false positive
      if (date === 'Invalid date') {
        return
      }

      onSelectProps({
        selected_date: date,
        start_date: null,
        finish_date: null
      })
    }
  }

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

  const calendarValue = (calendar) => {
    const { selected_date, start_date, finish_date } = calendar
    const selected_valid = moment(selected_date, inputs, true).isValid()
    const start_valid = moment(start_date, inputs, true).isValid()
    const finish_valid = moment(finish_date, inputs, true).isValid()

    let value = ''

    if (!calendar_range && selected_valid) {
      return moment(selected_date).format(output)
    }

    if (calendar_range && start_valid) {
      value = moment(start_date).format(output)
    }

    if (calendar_range && finish_valid) {
      value += `- ${moment(finish_date).format(output)}`
    }

    return value
  }

  const dropdowns = useTheme('dropdowns', theme)
  const select_position = position === 'left'

  return (
    <DropdownBase
      margin={margin}
      width={width}
      value={value}
      onSelect={onSelect}
      nullable={nullable}
      input_control={calendar_time}
      multi_select={calendar_range || calendar_time}
    >
      <Input
        left_icon={left_icon}
        right_icon={right_icon}
        background={background}
        value={value}
        onChange={onChange}
        label={label}
        theme={dropdowns}
        transparent={transparent}
        disabled={disabled}
        input_control={calendar_time}
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
        calendar_time={calendar_time}
        calendar_presets={calendar_presets}
        calendar_range={calendar_range}
        selected_date={selected_date}
        start_date={start_date}
        finish_date={finish_date}
        min_date={min_date}
        max_date={max_date}
        time_format={time_format}
        preset_dates={preset_dates}
        valid_formats={valid_formats}
        output_format={output_format}
        left={select_position ? 0 : null}
        right={!select_position ? 0 : null}
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
  calendar_time: false,
  calendar_presets: false,
  calendar_range: false,
  selected_date: null,
  start_date: null,
  finish_date: null,
  min_date: null,
  max_date: null,
  preset_dates: presets,
  nullable: false,
  time_format: 'hh:mm A',
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
  calendar_time: PropTypes.bool,
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
  time_format: PropTypes.string,
  placeholder: PropTypes.string,
  text_align: PropTypes.oneOf(['left', 'center', 'right']),
  onSelect: PropTypes.func
}
