import React, { useState, useEffect } from 'react'
import CountUp from 'react-countup'
import PropTypes from 'prop-types'
import { useTheme } from '../theme/ThemeProvider'
import cn from './Progress.module.scss'

export const Progress = ({ current, end, duration, theme }) => {
  const [last, setLast] = useState(0)
  const [start, setStart] = useState(0)
  const [finish, setFinish] = useState(0)
  useEffect(() => {
    if (current !== last) {
      setStart((last / end) * 100)
      setFinish((current / end) * 100)
      setLast(current)
    }
  }, [current])

  const progress_theme = useTheme('progress', theme)
  return (
    <div
      className={cn.progress}
      style={{ background: progress_theme.background_progress }}
    >
      <CountUp
        start={start}
        end={finish}
        duration={(duration || 0) / 1000}
        suffix='%'
      >
        {({ countUpRef }) => (
          <div
            className={cn.bar}
            style={{
              width: `${finish}%`,
              background: progress_theme.background_progress_bar
            }}
          >
            <span
              className={cn.percent}
              ref={countUpRef}
              style={{
                display: finish <= 0 ? 'none' : 'block',
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
  duration: 3000,
  theme: {}
}

Progress.propTypes = {
  current: PropTypes.number,
  end: PropTypes.number,
  duration: PropTypes.number,
  theme: PropTypes.object
}
