import moment from 'moment'
import {
  getDays,
  getStartOfWeek,
  getDayOfWeek,
  getEndOfWeek,
  getStartOfMonth,
  getEndOfMonth
} from './utils'

export const presets = [
  {
    locked: false,
    name: 'Today',
    calendar_range: false,
    selected_date: moment().format('M-D-YYYY'),
    start_date: null,
    finish_date: null,
    uuid: 1
  },
  {
    locked: false,
    name: 'Tomorrow',
    calendar_range: false,
    selected_date: getDays(1),
    start_date: null,
    finish_date: null,
    uuid: 2
  },
  {
    locked: false,
    name: 'Next Monday',
    calendar_range: false,
    selected_date: getDayOfWeek(1, 1),
    start_date: null,
    finish_date: null,
    uuid: 3
  },
  {
    locked: false,
    name: 'Next Friday',
    calendar_range: false,
    selected_date: getDayOfWeek(1, 5),
    start_date: null,
    finish_date: null,
    uuid: 4
  },

  {
    locked: false,
    name: 'Following Monday',
    calendar_range: false,
    selected_date: getDayOfWeek(2, 1),
    start_date: null,
    finish_date: null,
    uuid: 5
  },
  {
    locked: false,
    name: 'Following Friday',
    calendar_range: false,
    selected_date: getDayOfWeek(2, 5),
    start_date: null,
    finish_date: null,
    uuid: 6
  },
  {
    locked: false,
    name: 'This Week',
    calendar_range: true,
    selected_date: null,
    start_date: getStartOfWeek(),
    finish_date: getEndOfWeek(),
    uuid: 7
  },
  {
    locked: false,
    name: 'This Month',
    calendar_range: true,
    selected_date: null,
    start_date: getStartOfMonth(),
    finish_date: getEndOfMonth(),
    uuid: 8
  },
  {
    locked: false,
    name: 'Next Week',
    calendar_range: true,
    selected_date: null,
    start_date: getStartOfWeek(1),
    finish_date: getEndOfWeek(1),
    uuid: 9
  },
  {
    locked: false,
    name: 'Next Month',
    calendar_range: true,
    selected_date: null,
    start_date: getStartOfMonth(1),
    finish_date: getEndOfMonth(1),
    uuid: 10
  }
]
