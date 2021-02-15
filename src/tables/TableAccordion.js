import React from 'react'
import PropTypes from 'prop-types'
import { TableBase } from './TableBase'
import { RowAccordion } from './RowAccordion'

export const TableAccordion = ({
  accordion,
  children,
  headers,
  settings,
  ...rest
}) => {
  const header = {
    name: '',
    width: '40px',
    uuid: -1
  }
  return (
    <TableBase
      {...rest}
      settings={{ ...settings, accordion: true }}
      headers={[...headers, header]}
    >
      <RowAccordion accordion={accordion}>{children}</RowAccordion>
    </TableBase>
  )
}
TableAccordion.defaultProps = {
  accordion: () => {},
  children: () => {}
}
TableAccordion.propTypes = {
  accordion: PropTypes.any,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}
