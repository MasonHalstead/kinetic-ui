import React, { useState, useEffect, cloneElement, Children } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import { AccordionElement, Accordion, ContentElement } from './elements'
import Measure from 'react-measure'
import cn from './Accordion.module.scss'

export const AccordionBase = ({
  title,
  theme,
  show,
  overflow,
  transition,
  expanded,
  expanded_icon,
  expand_icon,
  children
}) => {
  const [expand, setExpand] = useState(false)
  const [direction, setDirection] = useState(false)
  const [height, setHeight] = useState(0)
  const [content_height, setContentHeight] = useState(0)

  useEffect(() => {
    // initial expand & content show
    if (expanded) {
      setExpand(true)
      setDirection(true)
      setHeight(content_height)
    } else {
      setExpand(false)
      setDirection(false)
    }
  }, [expanded])

  useEffect(() => {
    if (expanded) {
      setHeight(content_height)
    }
  }, [content_height])

  const setAccordion = async () => {
    if (!expand) {
      // opens content and fires content useEffect
      setExpand(true)
      setDirection(true)
      setHeight(content_height)
    } else {
      // closes everything and hides content after transition is done
      setExpand(false)
      setDirection(false)
      setHeight(0)
    }
  }
  const onResize = (ref) => {
    setContentHeight(ref.scroll.height)
  }
  if (!show) {
    return null
  }
  return (
    <AccordionElement
      className={cn.accordion}
      theme={theme}
      style={{ background: theme.background_accordion }}
    >
      <Accordion className={cn.summary} onClick={setAccordion} theme={theme}>
        <p>{title}</p>
        {direction && <FontAwesomeIcon icon={expanded_icon} />}
        {!direction && <FontAwesomeIcon icon={expand_icon} />}
      </Accordion>
      <ContentElement
        transition={transition}
        expand={overflow && expand}
        style={{ maxHeight: height }}
      >
        <Measure scroll onResize={onResize}>
          {({ measureRef }) => (
            <div ref={measureRef}>
              {Children.map(children, (child) => cloneElement(child, {}))}
            </div>
          )}
        </Measure>
      </ContentElement>
    </AccordionElement>
  )
}
AccordionBase.defaultProps = {
  title: '',
  theme: {},
  show: true,
  overflow: false,
  expanded: false,
  transition: 600,
  expanded_icon: ['fas', 'chevron-down'],
  expand_icon: ['fas', 'chevron-right'],
  children: () => {}
}
AccordionBase.propTypes = {
  expanded_icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  expand_icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  title: PropTypes.string,
  show: PropTypes.bool,
  overflow: PropTypes.bool,
  expanded: PropTypes.bool,
  transition: PropTypes.number,
  theme: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}
