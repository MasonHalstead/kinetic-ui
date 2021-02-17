import React, { useState, useEffect } from 'react'
import { useResizeDetector } from 'react-resize-detector'
import { useTheme } from '../theme/ThemeProvider'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Headers } from './Headers'
import { RowsElement } from './elements'
import { Rows } from './Rows'
import { Footer } from './Footer'
import cn from './Table.module.scss'

const useEffectUpdate = (obj) => {
  return JSON.stringify(obj)
}

const includesString = (a, b) => {
  // undefined or null cannot be interpolated into a string
  const a_value = a || ''
  const b_value = b || ''
  return a_value
    .toString()
    .toLowerCase()
    .includes(b_value.toString().toLowerCase())
}

const checkSort = (a, b, key, direction) => {
  const a_value = (a[key] || '').toString().toLowerCase()
  const b_value = (b[key] || '').toString().toLowerCase()

  if (direction === 'asc') {
    return b_value.localeCompare(a_value, 'en-US', {
      numeric: 'true',
      sensitivity: 'base'
    })
  }
  return a_value.localeCompare(b_value, 'en-US', {
    numeric: 'true',
    sensitivity: 'base'
  })
}

const checkNull = (value, append = '') => {
  if (value === null || value === undefined) {
    return append
  }
  return value
}

export const TableBase = ({
  headers,
  settings,
  theme,
  rows,
  filter,
  keywords,
  footer,
  children
}) => {
  const { height, ref } = useResizeDetector()
  const [headers_controlled, setHeaders] = useState([])
  const [rows_controlled, setRows] = useState([])
  const [footer_controlled, setFooter] = useState({
    submit_text: null,
    submit_disabled: false,
    pagination: null,
    button_variant: 'primary',
    button_size: 'medium',
    onSubmit: () => {}
  })
  const [sorting, setSorting] = useState({
    sort_column_key: null,
    sort_direction: 'desc',
    sticky_fill_asc: false,
    sticky_fill_desc: true
  })
  const [settings_controlled, setSettings] = useState({
    accordion: false,
    headers_show: true,
    header_row_height: 28,
    filter_key: null,
    keyword_key: 'name',
    rows_scroll: false,
    rows_sticky: null,
    rows_fill: false,
    rows_flex: false,
    rows_sticky_fill: false,
    rows_striped: false,
    row_borders: true,
    row_height: 30,
    row_highlight: true
  })
  useEffect(() => {
    const new_settings = {
      ...settings_controlled,
      ...settings,
      rows_sticky_fill: settings.rows_sticky && settings.rows_fill
    }

    setSettings(new_settings)
  }, [filter, rows, keywords, useEffectUpdate(settings)])

  useEffect(() => {
    setHeaders(headers)
  }, [useEffectUpdate(headers)])

  useEffect(() => {
    setFooter((prev) => ({ ...prev, ...footer }))
  }, [useEffectUpdate(footer)])

  useEffect(() => {
    rowFilters(settings_controlled)
  }, [sorting, settings_controlled])

  const onSortHeaders = (header, sort) => {
    const { sort_direction } = sort
    const { rows_sticky_fill } = settings_controlled
    setHeaders(header)
    setSorting({
      ...sort,
      sticky_fill_asc: rows_sticky_fill && sort_direction === 'asc',
      sticky_fill_desc: rows_sticky_fill && sort_direction !== 'asc'
    })
  }

  const rowFilters = (new_settings) => {
    const rows_length = rows.length
    const { rows_sticky, filter_key, keyword_key } = new_settings
    const rows_filtered = rows.reduce((acc, next, i) => {
      // adding sticky keys to row
      next.sticky_index = rows_length - i - 1
      next.sticky_row = rows_length - i <= rows_sticky
      next.sticky_row_desc = rows_length - i - 1
      next.sticky_row_asc = i + rows_sticky
      // running through the first pass for filter
      if (filter && filter_key) {
        if (rows_sticky && i > rows_length - rows_sticky - 1) {
          return [...acc, next]
        } else {
          const filtered = includesString(next[filter_key], filter)
          if (!filtered) {
            return acc
          }
        }
      }

      // running through the first pass for keywords
      if (keywords && keyword_key) {
        if (rows_sticky && i > rows_length - rows_sticky - 1) {
          return [...acc, next]
        } else {
          const filtered = keywords.every((key) => {
            const key_check = checkNull(key)
            const keyword_check = checkNull(next[keyword_key])
            return includesString(keyword_check, key_check)
          })
          if (!filtered) {
            return acc
          }
        }
      }

      return [...acc, next]
    }, [])

    // checking for column sorting
    setRows(onColumnSort(rows_filtered))
  }

  const onColumnSort = (r) => {
    const { sort_column_key, sort_direction } = sorting

    if (!sort_column_key) {
      return r
    }

    const non_sticky_rows = r.filter((row) => !row.sticky_row)
    const sticky_rows = r.filter((row) => row.sticky_row)
    if (sort_direction) {
      return [
        ...non_sticky_rows.sort((a, b) =>
          checkSort(a, b, sort_column_key, sort_direction)
        ),
        ...sticky_rows
      ]
    }
    return r
  }

  const {
    headers_show,
    rows_scroll,
    rows_fill,
    rows_sticky,
    row_height,
    row_borders,
    accordion,
    rows_flex
  } = settings_controlled
  const tables = useTheme('tables', theme)
  const table_flex = rows_fill || rows_flex || rows_scroll

  return (
    <div className={cn.table}>
      <Headers
        theme={tables}
        headers={headers_controlled}
        settings={settings_controlled}
        onSortHeaders={onSortHeaders}
      />
      <div
        className={cn.resizer}
        style={{
          flexGrow: table_flex && 1,
          minHeight: (rows_sticky || 1) * (row_height + 1),
          maxHeight: rows_fill
            ? 'initial'
            : accordion || rows_flex
            ? 'max-content'
            : rows_controlled.length * (row_height + 1)
        }}
      >
        <div
          ref={ref}
          className={classNames({
            [cn.autosizer]: rows_scroll || rows_fill
          })}
          style={{
            borderTop:
              !headers_show && `1px solid ${tables.border_table_color}`,
            borderBottom: `1px solid ${tables.border_table_color}`
          }}
        >
          <RowsElement
            className={classNames(cn.rows, {
              [cn.scroll]: rows_scroll || rows_fill
            })}
            borders={row_borders}
            theme={tables}
          >
            <Rows
              headers={headers_controlled}
              height={height}
              sorting={sorting}
              theme={tables}
              rows={[...rows_controlled]}
              settings={settings_controlled}
            >
              {children}
            </Rows>
          </RowsElement>
        </div>
      </div>
      <Footer footer={footer_controlled} />
    </div>
  )
}
TableBase.defaultProps = {
  headers: [],
  rows: [],
  settings: {},
  theme: {},
  filter: null,
  keywords: null,
  footer: {},
  children: () => {}
}
TableBase.propTypes = {
  headers: PropTypes.array,
  rows: PropTypes.array,
  theme: PropTypes.object,
  settings: PropTypes.object,
  filter: PropTypes.string,
  keywords: PropTypes.string,
  footer: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}
