import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HeadersElement, HeaderElement, ContentElement } from './elements'
import classNames from 'classnames'
import cn from './Table.module.scss'

export const Headers = ({ headers, theme, settings, onSortHeaders }) => {
  const onSort = (header) => {
    const { sort_direction, sort_key } = header
    if (!sort_direction) {
      return
    }
    const new_headers = manageHeaders(headers, header)
    const sorting = {
      sort_column_key: sort_key,
      sort_direction: setSortKey(sort_direction)
    }
    onSortHeaders(new_headers, sorting)
  }
  const setSortKey = (sort) => {
    switch (sort) {
      case 'default':
        return 'desc'
      case 'asc':
        return 'desc'
      case 'desc':
        return 'asc'
      default:
        return sort
    }
  }
  const manageHeaders = (parent, child) => {
    const { uuid, sort_direction } = child

    return parent.map((p) => {
      if (p.uuid === uuid) {
        p.sort_direction = setSortKey(sort_direction)
      }
      if (p.uuid !== uuid && p.sort_direction) {
        p.sort_direction = 'default'
      }
      if (p.children && p.children.length) {
        return {
          ...p,
          children: manageHeaders(p.children, child)
        }
      }
      return p
    })
  }

  const insertHeaders = (header) => {
    const { sort_direction } = header
    const { header_row_height, row_borders } = settings
    return (
      <HeaderElement
        className={cn.header}
        borders={row_borders}
        theme={theme}
        key={header.uuid}
        style={{
          minWidth: header.width || 10,
          width: header.width || 10,
          flexGrow: header.flex_grow
        }}
      >
        <ContentElement
          theme={theme}
          sort_direction={sort_direction}
          className={classNames(cn.heading, { [cn.action]: sort_direction })}
          onClick={() => onSort(header)}
        >
          <span
            style={{
              height: `${header_row_height}px`,
              lineHeight: `${header_row_height}px`
            }}
          >
            {header.name}
          </span>
          {sort_direction && (
            <span
              className={cn.icon}
              style={{
                height: `${header_row_height}px`,
                lineHeight: `${header_row_height}px`
              }}
            >
              {sort_direction === 'asc' && (
                <FontAwesomeIcon icon={['fas', 'sort-amount-up']} />
              )}
              {sort_direction === 'desc' && (
                <FontAwesomeIcon icon={['fas', 'sort-amount-down']} />
              )}
              {sort_direction === 'default' && (
                <Fragment>
                  <FontAwesomeIcon icon={['fas', 'long-arrow-alt-up']} />
                  <FontAwesomeIcon icon={['fas', 'long-arrow-alt-down']} />
                </Fragment>
              )}
            </span>
          )}
        </ContentElement>
        {header.children && (
          <div className={cn.children}>
            {header.children.map((h) => insertHeaders(h))}
          </div>
        )}
      </HeaderElement>
    )
  }

  const { headers_show } = settings
  if (!headers || !headers_show) {
    return null
  }
  const { row_borders } = settings
  return (
    <HeadersElement
      className={cn.headers}
      borders={row_borders}
      theme={theme}
      style={{ borderColor: theme.border_table_color }}
    >
      {headers.map((h) => insertHeaders(h))}
    </HeadersElement>
  )
}

Headers.defaultProps = {
  headers: [],
  settings: {},
  theme: {},
  onSortHeaders: () => {}
}

Headers.propTypes = {
  headers: PropTypes.array,
  theme: PropTypes.object,
  settings: PropTypes.object,
  onSortHeaders: PropTypes.func
}
