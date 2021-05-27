import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2'
import { AutoSizer } from 'react-virtualized'
import PropTypes from 'prop-types'
import { RowsElement } from './elements'
import { Rows } from './Rows'
import cn from './Table.module.scss'
import { TableBase } from './TableBase'
import { Row } from './Row'

export const TableFlex = ({ children, ...rest }) => (
  <TableBase {...rest}>
    <TableWrapper>{children}</TableWrapper>
  </TableBase>
)
TableFlex.defaultProps = {
  children: () => {}
}
TableFlex.propTypes = {
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
  const { rows_sticky, row_height } = settings
  const min_height = (rows_sticky || 1) * (row_height + 1)
  const max_height = rows.length * (row_height + 1)
  console.log(min_height, max_height)
  return (
    <RowsElement
      className={cn.resizer}
      theme={theme}
      style={{
        borderBottom: `1px solid ${theme.border_table_color}`,
        minHeight: min_height,
        maxHeight: max_height,
        overflow: 'hidden'
      }}
    >
      <AutoSizer>
        {({ height, width }) => (
          <Scrollbars
            className={cn.autosizer}
            autoHeight
            autoHeightMax={height - 1}
            style={{ width: width - 1 }}
          >
            <Rows
              headers={headers}
              sorting={sorting}
              height={height}
              theme={theme}
              rows={rows}
              settings={settings}
            >
              <Row>{children}</Row>
            </Rows>
          </Scrollbars>
        )}
      </AutoSizer>
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
