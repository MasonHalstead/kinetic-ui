import React from 'react'
import PropTypes from 'prop-types'
import { TableBase } from './TableBase'
import { RowAccordion } from './RowAccordion'

export const TableAccordion = ({
  accordion,
  children,
  headers,
  settings,
  transition,
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
      <RowAccordion accordion={accordion} transition={transition}>
        {children}
      </RowAccordion>
    </TableBase>
  )
}
TableAccordion.defaultProps = {
  headers: [],
  settings: {},
  transition: 600,
  accordion: () => {},
  children: () => {}
}
TableAccordion.propTypes = {
  headers: PropTypes.array,
  settings: PropTypes.object,
  transition: PropTypes.number,
  accordion: PropTypes.any,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}
