import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { SelectDateTimeElement, GradientElement } from './elements'
import { SelectTime } from './SelectTime'
import cn from './Calendar.module.scss'

export const SelectDateTime = ({
  primary,
  secondary,
  hours,
  minutes,
  periods,
  selectDate,
  select_date_moment
}) => {
  const [parts, setParts] = useState({
    start_date: null,
    hour: null,
    minute: null,
    period: null
  })
  useEffect(() => {
    const start_date = select_date_moment.format('YYYY-MM-DD')
    const hour = select_date_moment.format('hh')
    const minute = select_date_moment.format('mm')
    const period = select_date_moment.format('A')

    setParts({
      start_date,
      hour,
      minute,
      period
    })
  }, [select_date_moment])

  const setHours = (hour) => {
    const { start_date, minute, period } = parts
    selectDate(`${start_date} ${hour}:${minute} ${period}`)
  }

  const setMinutes = (minute) => {
    const { start_date, hour, period } = parts
    selectDate(`${start_date} ${hour}:${minute} ${period}`)
  }

  const setPeriod = (period) => {
    const { start_date, hour, minute } = parts
    selectDate(`${start_date} ${hour}:${minute} ${period}`)
  }

  const { hour, minute, period } = parts

  return (
    <SelectDateTimeElement className={cn.time} secondary={secondary}>
      <GradientElement className={cn.gradient} secondary={secondary} top />
      <GradientElement className={cn.gradient} secondary={secondary} />
      <SelectTime
        primary={primary}
        date={select_date_moment}
        intervals={hours}
        active={hour === '00' ? '12' : hour}
        onClick={setHours}
        left
      />
      <SelectTime
        primary={primary}
        date={select_date_moment}
        intervals={minutes}
        active={minute}
        onClick={setMinutes}
      />
      <SelectTime
        primary={primary}
        date={select_date_moment}
        intervals={periods}
        active={period}
        onClick={setPeriod}
        right
      />
    </SelectDateTimeElement>
  )
}

SelectDateTime.defaultProps = {
  primary: '',
  secondary: '',
  select_date_moment: moment(),
  hours: [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12'
  ],
  minutes: [
    '00',
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31',
    '32',
    '33',
    '34',
    '35',
    '36',
    '37',
    '38',
    '39',
    '40',
    '41',
    '42',
    '43',
    '44',
    '45',
    '46',
    '47',
    '48',
    '49',
    '50',
    '51',
    '52',
    '53',
    '54',
    '55',
    '56',
    '57',
    '58',
    '59'
  ],
  periods: ['AM', 'PM']
}
SelectDateTime.propTypes = {
  primary: PropTypes.string,
  secondary: PropTypes.string,
  select_date_moment: PropTypes.any,
  hours: PropTypes.array,
  minutes: PropTypes.array,
  periods: PropTypes.array,
  selectDate: PropTypes.func
}
