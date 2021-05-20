import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { Scrollbars } from 'react-custom-scrollbars-2'
import { AutoSizer } from 'react-virtualized'
import { SelectTimeElement } from './elements'
import classNames from 'classnames'
import cn from './Calendar.module.scss'

export const SelectTime = ({
  primary,
  onClick,
  active,
  intervals,
  date,
  left,
  right
}) => {
  const scrollRef = useRef()
  const timeRef = useRef()
  const scrollIntoView = () => {
    if (timeRef.current) {
      // magic value is half of padding
      scrollRef.current.scrollTop(timeRef.current.offsetTop - 110)
    }
  }
  useEffect(() => {
    scrollIntoView()
  }, [date, active, timeRef])

  return (
    <div className={cn.selector}>
      <AutoSizer>
        {({ height }) => (
          <Scrollbars
            ref={scrollRef}
            autoHeight
            className={cn.scroll}
            autoHeightMin={height}
            style={{ width: '40px' }}
          >
            <div style={{ padding: '130px 0px' }}>
              {intervals.map((t) => {
                const selected = t === active
                return (
                  <SelectTimeElement
                    key={t}
                    ref={selected ? timeRef : null}
                    primary={primary}
                    active={selected}
                    className={classNames({
                      [cn.left]: left,
                      [cn.right]: right
                    })}
                    onClick={() => onClick(t)}
                  >
                    {t}
                  </SelectTimeElement>
                )
              })}
            </div>
          </Scrollbars>
        )}
      </AutoSizer>
    </div>
  )
}

SelectTime.defaultProps = {
  primary: '',
  date: null,
  active: null,
  left: false,
  right: false,
  intervals: [],
  onClick: () => {}
}
SelectTime.propTypes = {
  primary: PropTypes.string,
  date: PropTypes.any,
  active: PropTypes.string,
  left: PropTypes.bool,
  right: PropTypes.bool,
  intervals: PropTypes.array,
  onClick: PropTypes.func
}
