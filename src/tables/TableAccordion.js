import React from 'react'
import PropTypes from 'prop-types'
import { TableBase } from './TableBase'
import { RowAccordion } from './RowAccordion'

export const TableAccordion = ({
  accordion,
  accordion_padding,
  expanded_icon,
  expand_icon,
  transition,
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
  accordion_padding: '20px',
  expanded_icon: ['fas', 'chevron-down'],
  expand_icon: ['fas', 'chevron-right'],
  accordion: () => {},
  children: () => {}
}
TableAccordion.propTypes = {
  headers: PropTypes.array,
  settings: PropTypes.object,
  transition: PropTypes.number,
  accordion: PropTypes.any,
  accordion_padding: PropTypes.string,
  expanded_icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  expand_icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}
