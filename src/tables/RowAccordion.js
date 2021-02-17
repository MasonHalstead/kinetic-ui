import React, {
  useState,
  useEffect,
  cloneElement,
  Children,
  useRef
} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import { RowElement, AccordionElement } from './elements'
import { CellWrapper, Cell } from './Cell'
import cn from './Table.module.scss'

export const RowAccordion = ({
  theme,
  accordion,
  expanded,
  expanded_icon,
  expand_icon,
  children,
  transition,
  settings,
  row_index,
  row,
  headers
}) => {
  const [expand, setExpand] = useState(false)
  const [content, setContent] = useState(false)
  const [height, setHeight] = useState(0)
  const contentRef = useRef()

  useEffect(() => {
    // initial expand & content show
    setExpand(expanded)
    setContent(expanded)
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
      setExpand(true)
      setContent(true)
    } else {
      // closes everything and hides content after transition is done
      setExpand(false)
      setHeight(0)
      setTimeout(() => setContent(false), transition)
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

  const { rows_striped, row_height, row_highlight } = settings
  return (
    <RowElement
      className={cn.accordion}
      theme={theme}
      striped={rows_striped && (row_index + 2) % 2}
      highlight={row_highlight}
    >
      <div
        className={cn.cells}
        style={{ minHeight: row_height, lineHeight: `${row_height}px` }}
      >
        {Children.map(children, (child, i) => (
          <CellWrapper header={headers[i]} settings={settings} theme={theme}>
            {cloneElement(child, {
              row,
              header: headers[i],
              transition,
              row_index,
              expanded: expand,
              settings
            })}
          </CellWrapper>
        ))}
        <CellWrapper
          header={headers[headers.length - 1]}
          settings={settings}
          theme={theme}
        >
          <Cell onClick={setAccordion} align='center'>
            {expand && <FontAwesomeIcon icon={expanded_icon} />}
            {!expand && <FontAwesomeIcon icon={expand_icon} />}
          </Cell>
        </CellWrapper>
      </div>
      <AccordionElement
        className={cn.contentWrapper}
        transition={transition}
        ref={contentRef}
        theme={theme}
        expand={expand}
        style={{ maxHeight: height }}
      >
        <div
          className={cn.content}
          style={{ borderTop: `1px solid ${theme.border_table_color}` }}
        >
          {content &&
            accordion({
              row,
              settings,
              theme,
              transition,
              row_index,
              headers,
              expanded: expand
            })}
        </div>
      </AccordionElement>
    </RowElement>
  )
}
RowAccordion.defaultProps = {
  theme: {},
  transition: 600,
  settings: {},
  row_index: -1,
  row: {},
  headers: [],
  expanded: false,
  accordion: () => {},
  expanded_icon: ['fas', 'chevron-down'],
  expand_icon: ['fas', 'chevron-right'],
  children: () => {}
}
RowAccordion.propTypes = {
  expanded_icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  expand_icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  expanded: PropTypes.bool,
  theme: PropTypes.object,
  transition: PropTypes.number,
  settings: PropTypes.object,
  row_index: PropTypes.number,
  row: PropTypes.object,
  headers: PropTypes.array,
  header: PropTypes.object,
  accordion: PropTypes.any,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}
