import React, { Children, cloneElement } from 'react'
import { AccordionBase } from './AccordionBase'
import { useTheme } from '../theme/ThemeProvider'
import PropTypes from 'prop-types'
import cn from './Accordion.module.scss'

export const Accordion = ({ margin, borders, width, theme, children }) => {
  const accordions = useTheme('accordions', theme)
  return (
    <div
      className={cn.wrapper}
      style={{
        margin,
        maxWidth: width,
        borderLeft: borders && accordions.border_accordion,
        borderRight: borders && accordions.border_accordion
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
  borders: true,
  theme: {},
  children: () => {}
}
Accordion.propTypes = {
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.string,
  theme: PropTypes.object,
  borders: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}
