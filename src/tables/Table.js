import React from 'react'
import PropTypes from 'prop-types'
import { TableBase } from './TableBase'
import { Row } from './Row'

export const Table = ({ children, ...rest }) => {
  return (
    <TableBase {...rest}>
      <Row>{children}</Row>
    </TableBase>
  )
}
Table.defaultProps = {
  children: () => {}
}
Table.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}
