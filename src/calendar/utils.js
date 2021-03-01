import moment from 'moment'

export const getDays = (days = 0, date = new Date()) =>
  moment(date).add(days, 'days').format('M-D-YYYY')

export const getStartOfWeek = (week = 0, date = new Date()) =>
  moment(date).add(week, 'week').startOf('week').format('M-D-YYYY')

export const getDayOfWeek = (week = 0, days = 0, date = new Date()) =>
  moment(date)
    .add(week, 'week')
    .startOf('week')
    .add(days, 'days')
    .format('M-D-YYYY')

export const getEndOfWeek = (week = 0, date = new Date()) =>
  moment(date).add(week, 'week').endOf('week').format('M-D-YYYY')

export const getStartOfMonth = (month = 0, date = new Date()) =>
  moment(date).add(month, 'month').startOf('month').format('M-D-YYYY')

export const getEndOfMonth = (month = 0, date = new Date()) =>
  moment(date).add(month, 'month').endOf('month').format('M-D-YYYY')

export const getStartOfQuarter = (quarter = 0, date = new Date()) =>
  moment(date).add(quarter, 'quarter').startOf('quarter').format('M-D-YYYY')

export const getEndOfQuarter = (quarter = 0, date = new Date()) => {
  moment(date).add(quarter, 'month').endOf('quarter').format('M-D-YYYY')
}

export const getStartOfYear = (year = 0, date = new Date()) =>
  moment(date).add(year, 'year').startOf('year').format('M-D-YYYY')

export const getEndOfYear = (year = 0, date = new Date()) => {
  moment(date).add(year, 'year').endOf('year').format('M-D-YYYY')
}
