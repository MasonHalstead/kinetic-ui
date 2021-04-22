import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { useTheme } from '../theme/ThemeProvider'
import { SelectDatePresets } from './SelectDatePresets'
import { CalendarSelector } from './CalendarSelector'
import { SelectedDateRange } from './SelectedDateRange'
import { SelectedDate } from './SelectedDate'
import { CalendarElement } from './elements'
import { presets } from './constants'
import cn from './Calendar.module.scss'

export const Calendar = ({
  selected_date,
  start_date,
  finish_date,
  calendar_days,
  theme,
  min_date,
  max_date,
  calendar_presets,
  preset_dates,
  output_format,
  calendar_display,
  calendar_panels,
  calendar_range,
  valid_formats,
  onSelect
}) => {
  const [select_date_moment, setSelectedDate] = useState(moment())
  const [start_date_moment, setStartDate] = useState(moment())
  const [finish_date_moment, setFinishDate] = useState(moment())
  const [locked, setLocked] = useState(false)
  const [preset_index, setPresetIndex] = useState(-1)

  useEffect(() => {
    const selected_valid = moment(selected_date, valid_formats, true).isValid()
    const start_valid = moment(start_date, valid_formats, true).isValid()
    const finish_valid = moment(finish_date, valid_formats, true).isValid()

    if (selected_valid) {
      setSelectedDate(moment(selected_date))
    }
    if (start_valid) {
      setStartDate(moment(start_date))
    }
    if (finish_valid) {
      setFinishDate(moment(finish_date))
    }
  }, [])

  const setPresets = (preset) => {
    const {
      locked,
      preset_index,
      selected_date,
      start_date,
      finish_date
    } = preset

    if (selected_date) {
      selectDate(selected_date, preset_index)
    }
    if (start_date) {
      selectStartDate(start_date, preset_index)
    }
    if (finish_date) {
      selectFinishDate(finish_date, preset_index)
    }
    setLocked(locked)
  }

  const selectDate = (date, i = -1) => {
    const date_moment = moment(date)
    setSelectedDate(date_moment)
    setPresetIndex(i)
    onSelect({
      selected_date: date_moment.format(output_format),
      start_date: moment(start_date_moment).format(output_format),
      finish_date: moment(finish_date_moment).format(output_format)
    })
  }

  const selectStartDate = (date, i = -1) => {
    const date_moment = moment(date)
    setStartDate(date_moment)
    setPresetIndex(i)
    onSelect({
      selected_date: moment(select_date_moment).format(output_format),
      start_date: date_moment.format(output_format),
      finish_date: moment(finish_date_moment).format(output_format)
    })
  }

  const selectFinishDate = (date, i = -1) => {
    const date_moment = moment(date)
    setFinishDate(date_moment)
    setPresetIndex(i)
    onSelect({
      selected_date: moment(select_date_moment).format(output_format),
      start_date: moment(start_date_moment).format(output_format),
      finish_date: date_moment.format(output_format)
    })
  }

  const calendar = useTheme('calendar', theme)
  const colors = useTheme('colors')
  const primary = calendar.calendar_primary || colors.primary
  const secondary = calendar.calendar_secondary || colors.secondary
  return (
    <CalendarElement
      className={cn.wrapper}
      secondary={secondary}
      theme={calendar}
    >
      {calendar_presets && (
        <SelectDatePresets
          setPresets={setPresets}
          calendar_presets={preset_dates}
          calendar_range={calendar_range}
          preset_index={preset_index}
          primary={primary}
          secondary={secondary}
          theme={calendar}
        />
      )}
      <div className={cn.selection}>
        {calendar_panels === 1 && (
          <CalendarSelector
            theme={calendar}
            calendar_days={calendar_days}
            primary={primary}
            secondary={secondary}
            preset_index={preset_index}
            min_date={min_date}
            max_date={max_date}
            select_date_moment={select_date_moment}
            start_date_moment={start_date_moment}
            finish_date_moment={finish_date_moment}
            selectDate={selectDate}
            setStartDate={selectStartDate}
            setFinishDate={selectFinishDate}
            setLocked={setLocked}
            locked={locked}
            calendar_range={calendar_range}
          />
        )}
        {calendar_display && calendar_range && (
          <SelectedDateRange
            start_date_moment={start_date_moment}
            finish_date_moment={finish_date_moment}
            secondary={secondary}
          />
        )}
      </div>
      {calendar_display && !calendar_range && (
        <SelectedDate
          theme={calendar}
          secondary={secondary}
          select_date_moment={select_date_moment}
          start_date_moment={start_date_moment}
          finish_date_moment={finish_date_moment}
          calendar_range={calendar_range}
        />
      )}
    </CalendarElement>
  )
}

Calendar.defaultProps = {
  theme: {},
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
  preset_dates: presets,
  valid_formats: ['M/D/YYYY', 'M-D-YYYY'],
  output_format: 'M/D/YYYY',
  onSelect: () => {}
}
Calendar.propTypes = {
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
  theme: PropTypes.object,
  valid_formats: PropTypes.array,
  output_format: PropTypes.string,
  onSelect: PropTypes.func
}
