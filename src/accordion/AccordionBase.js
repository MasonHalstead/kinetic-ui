import React, {
  useState,
  useEffect,
  cloneElement,
  Children,
  useRef
} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import { AccordionElement, Accordion, ContentElement } from './elements'
import cn from './Accordion.module.scss'

export const AccordionBase = ({
  title,
  theme,
  transition,
  expanded,
  expanded_icon,
  expand_icon,
  children
}) => {
  const [expand, setExpand] = useState(false)
  const [direction, setDirection] = useState(false)
  const [content, setContent] = useState(false)
  const [height, setHeight] = useState(0)
  const contentRef = useRef()

  useEffect(() => {
    // initial expand & content show
    if (expanded) {
      setTimeout(() => setExpand(true), transition)
      setContent(true)
      setDirection(true)
    } else {
      setExpand(false)
      setContent(false)
      setDirection(false)
    }
  }, [])

  useEffect(() => {
    if (content) {
      // measure height on content trigger
      setContentHeight()
    }
  }, [content])

  useEffect(() => {
    // height change needs to continue the measure of content
    // checks content is true because height: 0 will trigger
    if (content && expand) {
      setContentHeight()
    }
  }, [height])

  const setAccordion = async () => {
    if (!expand) {
      // opens content and fires content useEffect
      setTimeout(() => setExpand(true), transition)
      setContent(true)
      setDirection(true)
    } else {
      // closes everything and hides content after transition is done
      setExpand(false)
      setDirection(false)
      setTimeout(() => setContent(false), transition)
      setHeight(0)
    }
  }
  const setContentHeight = () => {
    const { current } = contentRef
    // sets the initial height which fires the height useEffect
    if (current) {
      setHeight(current.scrollHeight)
    }
    // measure the current height and ref height
    // make sure the accordion opens all the way
    if (current && current.scrollHeight !== height) {
      setHeight(current.scrollHeight)
    }
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
        expand={expand}
        ref={contentRef}
        style={{ maxHeight: height }}
      >
        {content && Children.map(children, (child) => cloneElement(child, {}))}
      </ContentElement>
    </AccordionElement>
  )
}
AccordionBase.defaultProps = {
  title: '',
  theme: {},
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
  expanded: PropTypes.bool,
  transition: PropTypes.number,
  theme: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}
