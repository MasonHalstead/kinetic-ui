import React, { Fragment, cloneElement } from 'react'
import PropTypes from 'prop-types'
import { Row } from './Row'
import { Cell } from './Cell'
import { v4 as uuidv4 } from 'uuid'

export const Rows = ({
  headers,
  rows,
  theme,
  sorting,
  height,
  settings,
  children
}) => {
  const rowsFill = (row, i = 0) => {
    const { rows_sticky_fill, rows_sticky } = settings
    const { sticky_fill_asc, sticky_fill_desc } = sorting
    const new_rows = calculateFillRows()
    if (!row) {
      return new_rows.map((r, index) =>
        cloneElement(children, {
          key: r.uuid,
          row: r,
          theme,
          row_index: index + i + 1,
          settings,
          headers
        })
      )
    }
    const { sticky_row_asc, sticky_row_desc } = row

    switch (true) {
      case rows_sticky_fill:
        if (sticky_fill_asc && sticky_row_asc === rows_sticky) {
          return new_rows.map((r, index) =>
            cloneElement(children, {
              key: r.uuid,
              row: r,
              theme,
              row_index: index + 1,
              settings,
              headers
            })
          )
        }
        if (sticky_fill_desc && sticky_row_desc === rows_sticky) {
          return new_rows.map((r, index) =>
            cloneElement(children, {
              key: r.uuid,
              row: r,
              theme,
              row_index: index + 1,
              settings,
              headers
            })
          )
        }
        return []
      default:
        return []
    }
  }

  const calculateFillRows = () => {
    const { row_height } = settings

    // calculating missing height
    const missing_height = height - rows.length * row_height
    if (Math.sign(missing_height) === 1) {
      // calculating rows to fill
      const rows_added = Math.ceil(missing_height / row_height)
      return [...Array(rows_added).keys()].map(() => ({
        empty: true,
        uuid: uuidv4()
      }))
    }

    return []
  }

  if (!rows || rows.length === 0) {
    return (
      <Row theme={theme} headers={headers} settings={settings}>
        {headers.map((h) => (
          <Cell key={h.uuid} />
        ))}
      </Row>
    )
  }

  const { rows_fill, rows_sticky_fill } = settings
  return (
    <Fragment>
      {rows.map((r, index) =>
        cloneElement(children, {
          key: r.uuid,
          row: r,
          theme,
          row_index: index,
          settings,
          headers
        })
      )}
      {rows_fill && !rows_sticky_fill && rowsFill()}
    </Fragment>
  )
}

Rows.defaultProps = {
  headers: [],
  rows: [],
  sorting: {},
  theme: {},
  height: 0,
  settings: {},
  children: () => {}
}
Rows.propTypes = {
  headers: PropTypes.array,
  rows: PropTypes.array,
  theme: PropTypes.object,
  sorting: PropTypes.object,
  settings: PropTypes.object,
  height: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}
