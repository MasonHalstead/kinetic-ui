import React, { useState, useEffect, Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '../theme/ThemeProvider'
import classNames from 'classnames'
import { TabElement } from './elements'
import cn from './Tabs.module.scss'

export const Tabs = ({
  tabs,
  default_tab,
  theme,
  width,
  margin,
  onSelect,
  children
}) => {
  const [tab, setTab] = useState(0)
  useEffect(() => {
    setTab(default_tab)
  }, [])
  const selectTab = (t) => {
    setTab(t.index)
    onSelect(t)
  }
  const tabs_theme = useTheme('tabs', theme)
  return (
    <div className={cn.tabs} style={{ width, margin }}>
      <TabElement className={cn.tab} theme={tabs_theme}>
        {tabs.map((t, i) => (
          <p
            className={classNames({ [cn.active]: tab === i })}
            key={t.uuid}
            onClick={() => selectTab({ ...t, index: i })}
            style={{
              color: tabs_theme.font_tab_color,
              textTransform: tabs_theme.font_tab_transform,
              fontFamily: tabs_theme.font_tab_family,
              fontSize: tabs_theme.font_tab_size,
              borderBottomColor: tab === i && tabs_theme.font_tab_color
            }}
          >
            {t.name}
          </p>
        ))}
      </TabElement>
      <div className={cn.content}>
        {Children.map(children, (child, i) => {
          if (tab === i) {
            return cloneElement(child, { selectTab, theme })
          }
          return null
        })}
      </div>
    </div>
  )
}
Tabs.defaultProps = {
  default_tab: 0,
  tabs: [],
  theme: {},
  onSelect: () => {},
  children: () => {},
  width: '100%',
  margin: '0px'
}
Tabs.propTypes = {
  default_tab: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  tabs: PropTypes.array,
  theme: PropTypes.object,
  children: PropTypes.any,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onSelect: PropTypes.func
}
