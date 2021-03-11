import React from 'react'
import PropTypes from 'prop-types'
import { TableBase } from './TableBase'
import { RowsElement } from './elements'
import { Rows } from './Rows'
import cn from './Table.module.scss'
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
    <TableBase {...rest} headers={[...headers, header]}>
      <TableWrapper
        accordion={accordion}
        accordion_padding={accordion_padding}
        expanded_icon={expanded_icon}
        expand_icon={expand_icon}
        transition={transition}
      >
        {children}
      </TableWrapper>
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

const TableWrapper = ({
  accordion,
  accordion_padding,
  expanded_icon,
  expand_icon,
  transition,
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
        <RowAccordion
          accordion={accordion}
          accordion_padding={accordion_padding}
          expanded_icon={expanded_icon}
          expand_icon={expand_icon}
          transition={transition}
        >
          {children}
        </RowAccordion>
      </Rows>
    </RowsElement>
  )
}

TableWrapper.defaultProps = {
  settings: {},
  headers: [],
  rows: [],
  sorting: {},
  expanded: false,
  accordion: () => {},
  accordion_padding: '20px',
  expanded_icon: ['fas', 'chevron-down'],
  expand_icon: ['fas', 'chevron-right'],
  transition: 600,
  theme: {},
  children: () => {}
}
TableWrapper.propTypes = {
  settings: PropTypes.object,
  headers: PropTypes.array,
  rows: PropTypes.array,
  sorting: PropTypes.object,
  theme: PropTypes.object,
  accordion_padding: PropTypes.string,
  transition: PropTypes.number,
  accordion: PropTypes.any,
  expanded_icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  expand_icon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  expanded: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}
