import React from 'react'
import PropTypes from 'prop-types'
import { SelectTimeBarElement } from './elements'
import moment from 'moment'
import cn from './Calendar.module.scss'

export const SelectTimeBar = ({
  selectDate,
  select_date_moment,
  primary,
  secondary
}) => {
  const selectToday = () => {
    const today = moment()
    selectDate(today)
  }
  return (
    <SelectTimeBarElement className={cn.bar} secondary={secondary}>
      <div className={cn.now} style={{ color: primary }} onClick={selectToday}>
        <p>Now</p>
      </div>
      <p style={{ color: '#fff' }}>
        {moment(select_date_moment).format('MMMM D, YYYY hh:mm A')}
      </p>
    </SelectTimeBarElement>
  )
}

SelectTimeBar.defaultProps = {
  select_date_moment: null,
  primary: '',
  secondary: '',
  selectDate: () => {}
}
SelectTimeBar.propTypes = {
  select_date_moment: PropTypes.any,
  primary: PropTypes.string,
  secondary: PropTypes.string,
  selectDate: PropTypes.func
}
