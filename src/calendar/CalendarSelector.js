import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import chunk from 'lodash/chunk'
import range from 'lodash/range'
import { v4 as uuidv4 } from 'uuid'
import { DayElement, SelectorElement, SelectElement } from './elements'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment'
import cn from './Calendar.module.scss'

const dateBreakdown = (moment) => ({
  year: moment.year() || null,
  month: moment.month() || null,
  day: moment.date() || null
})

export const CalendarSelector = ({
  months,
  primary,
  secondary,
  preset_index,
  min_date,
  max_date,
  select_date_moment,
  start_date_moment,
  finish_date_moment,
  calendar_range,
  calendar_days,
  weekdays,
  locked,
  setLocked,
  ...rest
}) => {
  const [days, setDays] = useState([])
  const [calendar_moment, setCalendar] = useState(moment())

  const selected = dateBreakdown(select_date_moment)
  const start = dateBreakdown(start_date_moment)
  const finish = dateBreakdown(finish_date_moment)
  const min = dateBreakdown(moment(min_date))
  const max = dateBreakdown(moment(max_date))
  const current = dateBreakdown(moment())

  useEffect(() => {
    setDays(transformDays(calendar_moment))
  }, [
    select_date_moment,
    start_date_moment,
    finish_date_moment,
    calendar_moment
  ])

  useEffect(() => {
    if (!locked && !calendar_range) {
      setCalendar(select_date_moment)
    }
    if (!locked && calendar_range) {
      setCalendar(finish_date_moment)
    }
  }, [preset_index])

  const selectedRange = (day, month, year) => {
    const start_date = `${start.year}-${start.month + 1}-${start.day}`
    const finish_date = `${finish.year}-${finish.month + 1}-${finish.day}`
    const current_date = `${year}-${month + 1}-${day}`

    const is_after = moment(current_date).isSameOrAfter(start_date)
    const is_before = moment(finish_date).isSameOrAfter(current_date)

    if (is_after && is_before) {
      return true
    }
    return false
  }
  const disabledDate = (min, max, day, month, year) => {
    const minimum = `${min.year}-${min.month + 1}-${min.day}`
    const current = `${year}-${month + 1}-${day}`
    const maximum = `${max.year}-${max.month + 1}-${max.day}`

    const is_after = min_date ? moment(minimum).isSameOrAfter(current) : false
    const is_before = max_date ? moment(current).isSameOrAfter(maximum) : false

    return is_after || is_before
  }
  const selectedDay = (date, day, month, year) => {
    const day_check = date.day === day
    const month_check = date.month === month
    const year_check = date.year === year

    return day_check && month_check && year_check
  }

  const transformDays = (calendar) => {
    const d1 = calendar.clone().subtract(1, 'month').endOf('month').date()
    const d2 = calendar.clone().date(1).day()
    const d3 = calendar.clone().endOf('month').date()

    const prev_month_date = calendar.clone().subtract(1, 'month')
    const current_month_date = calendar.clone()
    const next_month_date = calendar.clone().add(1, 'month')

    const prev_month = prev_month_date.month()
    const prev_month_year = prev_month_date.year()

    const current_month = current_month_date.month()
    const current_month_year = current_month_date.year()

    const next_month = next_month_date.month()
    const next_month_year = next_month_date.year()

    const d1_range = range(d1 - d2 + 1, d1 + 1).map((day) => ({
      day,
      month: prev_month,
      year: prev_month_year,
      selected_range: selectedRange(day, prev_month, prev_month_year),
      selected_start: selectedDay(start, day, prev_month, prev_month_year),
      selected_day: selectedDay(selected, day, prev_month, prev_month_year),
      selected_finish: selectedDay(finish, day, prev_month, prev_month_year),
      current_day: selectedDay(current, day, prev_month, prev_month_year),
      disabled: disabledDate(min, max, day, prev_month, prev_month_year),
      prev_month: true,
      current_month: false,
      next_month: false,
      uuid: uuidv4()
    }))
    const d2_range = range(1, d3 + 1).map((day) => ({
      day,
      month: current_month,
      year: current_month_year,
      selected_range: selectedRange(day, current_month, current_month_year),
      selected_start: selectedDay(
        start,
        day,
        current_month,
        current_month_year
      ),
      selected_day: selectedDay(
        selected,
        day,
        current_month,
        current_month_year
      ),
      selected_finish: selectedDay(
        finish,
        day,
        current_month,
        current_month_year
      ),
      current_day: selectedDay(current, day, current_month, current_month_year),
      disabled: disabledDate(min, max, day, current_month, current_month_year),
      prev_month: false,
      current_month: true,
      next_month: false,
      uuid: uuidv4()
    }))

    const d3_range = range(1, calendar_days - d3 - d2 + 1).map((day) => ({
      day,
      month: next_month,
      year: next_month_year,
      selected_range: selectedRange(day, next_month, next_month_year),
      selected_start: selectedDay(start, day, next_month, next_month_year),
      selected_day: selectedDay(selected, day, next_month, next_month_year),
      selected_finish: selectedDay(finish, day, next_month, next_month_year),
      current_day: selectedDay(current, day, next_month, next_month_year),
      disabled: disabledDate(min, max, day, next_month, next_month_year),
      prev_month: false,
      current_month: false,
      next_month: true,
      uuid: uuidv4()
    }))
    return [...d1_range, ...d2_range, ...d3_range]
  }

  const selectRangeStart = (year, month, day) => {
    if (locked) {
      return setLocked(false)
    }
    const new_date = `${month + 1}/${day}/${year}`
    rest.setStartDate(moment(new_date))
    rest.setFinishDate(moment(new_date))
    return setLocked(true)
  }

  const selectRangeDay = (d) => {
    const { year, month, day, disabled } = d
    if (!locked || !calendar_days || disabled) {
      return
    }
    const finish = dateBreakdown(finish_date_moment)
    const finish_date = `${finish.year}-${finish.month + 1}-${finish.day}`
    const current_date = `${year}-${month + 1}-${day}`

    if (finish_date === current_date) {
      return
    }

    const start = dateBreakdown(start_date_moment)
    const start_date = `${start.year}-${start.month + 1}-${start.day}`
    const is_after = moment(current_date).isSameOrAfter(start_date)

    if (is_after) {
      const new_date = `${month + 1}/${day}/${year}`
      setDays(transformDays(calendar_moment))
      rest.setFinishDate(moment(new_date))
    }
  }

  const prevMonth = () => {
    setCalendar(calendar_moment.clone().subtract(1, 'month'))
  }

  const prevYear = () => {
    setCalendar(calendar_moment.clone().subtract(1, 'year'))
  }

  const nextMonth = () => {
    setCalendar(calendar_moment.clone().add(1, 'month'))
  }

  const nextYear = () => {
    setCalendar(calendar_moment.clone().add(1, 'year'))
  }

  const selectDate = (d) => {
    const { year, month, day, disabled } = d
    if (disabled) {
      return
    }
    if (calendar_range) {
      return selectRangeStart(year, month, day)
    }

    const new_date = `${month + 1}/${day}/${year}`
    rest.selectDate(moment(new_date))
  }

  const calendar_month = calendar_moment.month()
  const calendar_year = calendar_moment.year()

  return (
    <div className={cn.calendar}>
      <SelectorElement className={cn.selector} secondary={secondary}>
        <SelectElement
          className={cn.select}
          primary={primary}
          onClick={prevYear}
        >
          <FontAwesomeIcon icon={['fas', 'angle-double-left']} />
        </SelectElement>
        <SelectElement
          className={cn.select}
          primary={primary}
          onClick={prevMonth}
        >
          <FontAwesomeIcon icon={['fas', 'angle-left']} />
        </SelectElement>
        <div className={cn.display}>
          <p>
            {months[calendar_month]} {calendar_year}
          </p>
        </div>
        <SelectElement
          className={cn.select}
          primary={primary}
          onClick={nextMonth}
        >
          <FontAwesomeIcon icon={['fas', 'angle-right']} />
        </SelectElement>
        <SelectElement
          className={cn.select}
          primary={primary}
          onClick={nextYear}
        >
          <FontAwesomeIcon icon={['fas', 'angle-double-right']} />
        </SelectElement>
      </SelectorElement>
      <div className={cn.weekdays}>
        {weekdays.map((day) => (
          <p key={day}>{day}</p>
        ))}
      </div>
      <div>
        {chunk(days, 7).map((row, week) => (
          <div className={cn.weekdays} key={week}>
            {row.map((d) => (
              <DayElement
                key={d.uuid}
                className={cn.day}
                primary={primary}
                secondary={secondary}
                selected_range={d.selected_range}
                selected_start={d.selected_start}
                selected_day={d.selected_day}
                selected_finish={d.selected_finish}
                current_day={d.current_day}
                prev_month={d.prev_month}
                current_month={d.current_month}
                next_month={d.next_month}
                calendar_range={calendar_range}
                disabled={d.disabled}
                onMouseOver={() => selectRangeDay(d)}
                onClick={() => selectDate(d)}
              >
                {d.day}
              </DayElement>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

CalendarSelector.defaultProps = {
  primary: null,
  secondary: null,
  preset_index: -1,
  min_date: null,
  max_date: null,
  select_date_moment: moment(),
  start_date_moment: moment(),
  finish_date_moment: moment(),
  calendar_range: false,
  calendar_days: 42,
  locked: false,
  setLocked: () => {},
  weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
}
CalendarSelector.propTypes = {
  primary: PropTypes.string,
  secondary: PropTypes.string,
  locked: PropTypes.bool,
  setLocked: PropTypes.func,
  preset_index: PropTypes.number,
  min_date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  max_date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  calendar_days: PropTypes.oneOf([42, 49, 56]),
  select_date_moment: PropTypes.object,
  start_date_moment: PropTypes.object,
  finish_date_moment: PropTypes.object,
  calendar_range: PropTypes.bool,
  weekdays: PropTypes.array,
  months: PropTypes.array
}
