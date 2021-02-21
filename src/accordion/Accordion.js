import React, { Children, cloneElement } from 'react'
import { AccordionBase } from './AccordionBase'
import { useTheme } from '../theme/ThemeProvider'
import PropTypes from 'prop-types'
import cn from './Accordion.module.scss'

export const Accordion = ({ margin, width, theme, children }) => {
  const accordions = useTheme('accordions', theme)
  return (
    <div
      className={cn.wrapper}
      style={{
        margin,
        maxWidth: width,
        borderLeft: accordions.border_accordion,
        borderRight: accordions.border_accordion
      }}
    >
      {Children.map(children, (child) => (
        <AccordionBase {...child.props} theme={accordions}>
          {cloneElement(child, { theme: accordions })}
        </AccordionBase>
      ))}
    </div>
  )
}
Accordion.defaultProps = {
  margin: 0,
  width: '100%',
  theme: {},
  children: () => {}
}
Accordion.propTypes = {
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.string,
  theme: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}
