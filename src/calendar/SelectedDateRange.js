import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { RangeElement } from './elements'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cn from './Calendar.module.scss'

export const SelectedDateRange = ({
  secondary,
  start_date_moment,
  finish_date_moment
}) => {
  // date breakdown
  const start_date = moment(start_date_moment).format('l')
  const finish_date = moment(finish_date_moment).format('l')

  return (
    <RangeElement className={cn.range} secondary={secondary}>
      <p>{start_date}</p>
      <FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} />
      <p>{finish_date}</p>
    </RangeElement>
  )
}

SelectedDateRange.defaultProps = {
  secondary: '',
  start_date_moment: moment(),
  finish_date_moment: moment()
}
SelectedDateRange.propTypes = {
  secondary: PropTypes.string,
  start_date_moment: PropTypes.object,
  finish_date_moment: PropTypes.object
}
