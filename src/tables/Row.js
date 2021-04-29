import React, { Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import { CellWrapper } from './Cell'
import { RowElement } from './elements'
import cn from './Table.module.scss'

export const Row = ({
  headers,
  header,
  row,
  theme,
  row_index,
  settings,
  children
}) => {
  const {
    rows_striped,
    row_height,
    rows_fill,
    rows_flex,
    rows_sticky,
    row_highlight
  } = settings
  const { sticky_row, sticky_index } = row
  return (
    <RowElement
      className={cn.row}
      theme={theme}
      striped={rows_striped && (row_index + 2) % 2}
      sticky={rows_sticky && sticky_row}
      fill={rows_fill || undefined}
      highlight={row_highlight}
      style={{
        height: rows_flex ? 'max-content' : row_height,
        bottom: sticky_row ? sticky_index * row_height + sticky_index : null
      }}
    >
      {Children.map(children, (child, i) => {
        return (
          <CellWrapper header={headers[i]} settings={settings} theme={theme}>
            {cloneElement(child, {
              row,
              header,
              row_index,
              settings
            })}
          </CellWrapper>
        )
      })}
    </RowElement>
  )
}

Row.defaultProps = {
  headers: [],
  header: {},
  row: {},
  theme: {},
  settings: {},
  row_index: -1,
  children: () => {}
}

Row.propTypes = {
  headers: PropTypes.array,
  header: PropTypes.object,
  row: PropTypes.object,
  theme: PropTypes.object,
  row_index: PropTypes.number,
  settings: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}
