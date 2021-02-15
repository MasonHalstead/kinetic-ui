import React from 'react'
import CountUp from 'react-countup'
import PropTypes from 'prop-types'
import { useTheme } from '../theme/ThemeProvider'
import cn from './Progress.module.scss'

export const Progress = ({ current, end, theme }) => {
  const prev = (current / end) * 100
  const progress_theme = useTheme('progress', theme)
  return (
    <div
      className={cn.progress}
      style={{ background: progress_theme.background_progress }}
    >
      <CountUp start={0} end={prev} duration={3} suffix='%'>
        {({ countUpRef }) => (
          <div
            className={cn.bar}
            style={{
              width: `${prev}%`,
              background: progress_theme.background_progress_bar
            }}
          >
            <span
              className={cn.percent}
              ref={countUpRef}
              style={{
                display: prev === 0 ? 'none' : 'block',
                color: progress_theme.background_progress_bar
              }}
            />
          </div>
        )}
      </CountUp>
    </div>
  )
}

Progress.defaultProps = {
  current: 0,
  end: 1,
  theme: {}
}

Progress.propTypes = {
  current: PropTypes.number,
  end: PropTypes.number,
  theme: PropTypes.object
}
