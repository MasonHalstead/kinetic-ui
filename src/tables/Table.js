import React from 'react'
import PropTypes from 'prop-types'
import { RowsElement } from './elements'
import { Rows } from './Rows'
import cn from './Table.module.scss'
import { TableBase } from './TableBase'
import { Row } from './Row'

export const Table = ({ children, ...rest }) => {
  return (
    <TableBase {...rest}>
      <TableWrapper>{children}</TableWrapper>
    </TableBase>
  )
}
Table.defaultProps = {
  children: () => {}
}
Table.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

const TableWrapper = ({
  settings,
  headers,
  rows,
  sorting,
  theme,
  children
}) => {
  const { headers_show, row_borders } = settings
  return (
    <RowsElement
      className={cn.rows}
      borders={row_borders}
      theme={theme}
      style={{
        borderTop: !headers_show && `1px solid ${theme.border_table_color}`
      }}
    >
      <Rows
        headers={headers}
        sorting={sorting}
        theme={theme}
        rows={rows}
        settings={settings}
      >
        <Row>{children}</Row>
      </Rows>
    </RowsElement>
  )
}

TableWrapper.defaultProps = {
  settings: {},
  headers: [],
  rows: [],
  sorting: {},
  theme: {},
  children: () => {}
}
TableWrapper.propTypes = {
  settings: PropTypes.object,
  headers: PropTypes.array,
  rows: PropTypes.array,
  sorting: PropTypes.object,
  theme: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}
