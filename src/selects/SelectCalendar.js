import React, { Fragment } from 'react'
import { Calendar } from '../calendar/Calendar'
import PropTypes from 'prop-types'
import cn from './Select.module.scss'

export const SelectCalendar = ({
  open,
  disabled,
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
  transparent,
  onSelect,
  left,
  right
}) => {
  return (
    <Fragment>
      {open && !disabled && (
        <div
          className={cn.calendar}
          style={{
            marginTop: transparent ? 0 : -1,
            left: transparent ? left - 1 : left,
            right: transparent ? right - 1 : right
          }}
        >
          <Calendar
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
            onSelect={onSelect}
          />
        </div>
      )}
    </Fragment>
  )
}

SelectCalendar.defaultProps = {
  options: [],
  theme: {},
  width: null,
  left: 0,
  right: 0,
  transparent: false,
  open: false,
  disabled: false,
  scroll_height: 200,
  height: 30,
  position: 'bottom',
  calendar_panels: 1,
  calendar_days: 42,
  calendar_display: true,
  calendar_presets: false,
  calendar_range: false,
  selected_date: new Date(),
  start_date: new Date(),
  finish_date: new Date(),
  min_date: null,
  max_date: null,
  preset_dates: [],
  valid_formats: ['M/D/YYYY', 'M-D-YYYY'],
  output_format: 'M/D/YYYY',
  onFocus: () => {},
  onBlur: () => {},
  onKeyDown: () => {},
  onSelect: () => {},
  onChange: () => {},
  children: () => {}
}

SelectCalendar.propTypes = {
  options: PropTypes.array,
  theme: PropTypes.object,
  height: PropTypes.number,
  position: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  left: PropTypes.number,
  transparent: PropTypes.bool,
  right: PropTypes.number,
  open: PropTypes.bool,
  disabled: PropTypes.bool,
  scroll_height: PropTypes.number,
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
  preset_dates: PropTypes.array,
  calendar_days: PropTypes.oneOf([42, 49, 56]),
  calendar_display: PropTypes.bool,
  calendar_range: PropTypes.bool,
  calendar_panels: PropTypes.number,
  valid_formats: PropTypes.array,
  output_format: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onKeyDown: PropTypes.func,
  onSelect: PropTypes.func,
  onChange: PropTypes.func,
  children: PropTypes.func
}
