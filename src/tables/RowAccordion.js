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
  settings,
  row_index,
  row,
  headers,
  header
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
        {Children.map(children, (child, i) => {
          return (
            <CellWrapper header={headers[i]} settings={settings} theme={theme}>
              {cloneElement(child, {
                row,
                header,
                settings
              })}
            </CellWrapper>
          )
        })}
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
        ref={contentRef}
        theme={theme}
        expand={expand}
        style={{ maxHeight: height }}
      >
        <div
          className={cn.content}
          style={{ borderTop: `1px solid ${theme.border_table_color}` }}
        >
          {accordion({ row, settings })}
        </div>
      </AccordionElement>
    </RowElement>
  )
}
RowAccordion.defaultProps = {
  theme: {},
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
  accordion: PropTypes.any,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}
