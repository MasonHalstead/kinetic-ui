import React, {
  useState,
  useEffect,
  cloneElement,
  Children,
  useRef
} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import { Accordion } from './elements'
import cn from './Accordion.module.scss'

export const AccordionBase = ({
  title,
  theme,
  expanded,
  expanded_icon,
  expand_icon,
  children
}) => {
  const [expand, setExpand] = useState(false)
  const [height, setHeight] = useState(0)
  const contentRef = useRef()

  useEffect(() => {
    const { current } = contentRef
    setExpand(expanded)
    if (current && expanded) {
      setHeight(current.scrollHeight)
    } else {
      setHeight(0)
    }
  }, [])
  const setAccordion = () => {
    if (expand) {
      setExpand(false)
      setHeight(0)
    } else {
      setExpand(true)
      setHeight(contentRef.current.scrollHeight)
    }
  }
  return (
    <div
      className={cn.accordion}
      style={{ background: theme.background_accordion }}
    >
      <Accordion className={cn.summary} onClick={setAccordion} theme={theme}>
        <p>{title}</p>
        {expand && <FontAwesomeIcon icon={expanded_icon} />}
        {!expand && <FontAwesomeIcon icon={expand_icon} />}
      </Accordion>
      <div
        className={cn.content}
        ref={contentRef}
        style={{ maxHeight: height }}
      >
        {Children.map(children, (child) => cloneElement(child, {}))}
      </div>
    </div>
  )
}
AccordionBase.defaultProps = {
  title: '',
  theme: {},
  expanded: false,
  expanded_icon: ['fas', 'chevron-down'],
  expand_icon: ['fas', 'chevron-right'],
  children: () => {}
}
AccordionBase.propTypes = {
  expanded_icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  expand_icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  title: PropTypes.string,
  expanded: PropTypes.bool,
  theme: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}
