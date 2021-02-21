import React from 'react'
import PropTypes from 'prop-types'
import { CellElement } from './elements'
import classNames from 'classnames'
import cn from './Table.module.scss'

export const CellWrapper = ({ header, settings, theme, children }) => {
  const { row_borders, row_height, rows_flex } = settings
  return (
    <CellElement
      className={classNames(cn.wrapper, { [cn.rowsFlex]: rows_flex })}
      borders={row_borders}
      theme={theme}
      style={{
        minWidth: header.width || 10,
        width: header.width || 10,
        flexGrow: header.flex_grow,
        minHeight: rows_flex && row_height,
        lineHeight: rows_flex ? '1.5' : `${row_height}px`
      }}
    >
      {children}
    </CellElement>
  )
}

CellWrapper.defaultProps = {
  header: {},
  settings: {},
  theme: {},
  children: () => {}
}

CellWrapper.propTypes = {
  header: PropTypes.object,
  settings: PropTypes.object,
  theme: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

export const Cell = ({ children, align, background, onClick }) => {
  return (
    <div
      className={classNames(cn.cell)}
      onClick={onClick}
      style={{ textAlign: align, background: background }}
    >
      {children}
    </div>
  )
}
Cell.defaultProps = {
  align: 'left',
  background: null,
  onClick: () => {},
  children: () => {}
}

Cell.propTypes = {
  align: PropTypes.string,
  background: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}
