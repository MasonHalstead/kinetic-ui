import React, { useState, useEffect, Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '../theme/ThemeProvider'
import classNames from 'classnames'
import { TabElement } from './elements'
import cn from './Tabs.module.scss'

export const Tabs = ({ tabs, default_tab, theme, children }) => {
  const [tab, setTab] = useState(0)
  useEffect(() => {
    setTab(default_tab)
  }, [])
  const tabs_theme = useTheme('tabs', theme)
  return (
    <div className={cn.tabs}>
      <TabElement className={cn.header} theme={tabs_theme}>
        {tabs.map((t, i) => {
          return (
            <p
              className={classNames({ [cn.active]: tab === i })}
              key={t.uuid}
              onClick={() => setTab(i)}
              style={{
                color: tabs_theme.font_tab_color,
                borderBottomColor: tab === i && tabs_theme.font_tab_color
              }}
            >
              {t.name}
            </p>
          )
        })}
      </TabElement>
      <div className={cn.content}>
        {Children.map(children, (child, i) => {
          if (tab === i) {
            return cloneElement(child, { setTab })
          }
          return null
        })}
      </div>
    </div>
  )
}

Tabs.defaultProps = {
  default_tab: 0,
  prepend_label: null,
  append_label: null,
  checked: false,
  theme: {},
  width: '100%',
  margin: '0px',
  onClick: () => {}
}
Tabs.propTypes = {
  variant: PropTypes.string,
  prepend_label: PropTypes.string,
  append_label: PropTypes.string,
  width: PropTypes.string,
  margin: PropTypes.string
}
