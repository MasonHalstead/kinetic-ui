import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { CurrentElement, WeekdayElement } from './elements'
import cn from './Calendar.module.scss'

export const SelectedDate = ({
  secondary,
  months,
  weekdays,
  select_date_moment
}) => {
  // date breakdown
  const moment_year = select_date_moment.year()
  const moment_month = select_date_moment.month()
  const moment_weekday = select_date_moment.isoWeekday()
  const moment_day = select_date_moment.date()

  return (
    <CurrentElement className={cn.current} secondary={secondary}>
      <WeekdayElement className={cn.weekday} secondary={secondary}>
        <p>{weekdays[moment_weekday - 1]}</p>
      </WeekdayElement>
      <div className={cn.date}>
        <p className={cn.day}>{moment_day}</p>
        <p className={cn.month}>{months[moment_month]}</p>
        <p className={cn.year}>{moment_year}</p>
      </div>
    </CurrentElement>
  )
}

SelectedDate.defaultProps = {
  secondary: '',
  select_date_moment: moment(),
  weekdays: [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ],
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
SelectedDate.propTypes = {
  secondary: PropTypes.string,
  select_date_moment: PropTypes.any,
  weekdays: PropTypes.any,
  months: PropTypes.array
}
