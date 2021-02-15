import styled from '@emotion/styled'

export const HeadersElement = styled.div(({ theme, borders }) => {
  return {
    borderTop: `1px solid ${theme.border_table_color}`,
    borderBottom: `1px solid ${theme.border_table_color}`,
    borderLeft: `1px solid ${theme.border_table_color}`,
    borderRight: !borders && `1px solid ${theme.border_table_color}`
  }
})
export const HeaderElement = styled.div(({ theme, borders }) => {
  return {
    background: theme.background_header,
    borderRight: borders && `1px solid ${theme.border_table_color}`,
    fontSize: theme.font_table_size,
    textTransform: theme.font_table_transform,
    fontFamily: theme.font_table_family,
    fontWeight: theme.font_table_weight,
    color: theme.font_table_color
  }
})
export const RowsElement = styled.div(({ theme, borders }) => {
  return {
    borderLeft: `1px solid ${theme.border_table_color}`,
    borderRight: !borders && `1px solid ${theme.border_table_color}`
  }
})
export const RowElement = styled.div(
  ({ striped, sticky, fill, highlight, accordion, theme }) => {
    let background = '#fff'

    if (striped) {
      background = theme.background_row_striped
    }
    if (sticky && fill) {
      background = '#fff'
    }

    return {
      borderTop: `1px solid ${theme.border_table_color}`,
      position: sticky ? 'sticky' : undefined,
      '& > div': {
        background
      },
      '&:hover > div': {
        background: highlight ? theme.background_row_hover : undefined
      }
    }
  }
)
export const AccordionElement = styled.div(({ theme }) => {
  return {
    borderRight: `1px solid ${theme.border_table_color}`
  }
})
export const CellElement = styled.div(({ theme, borders }) => {
  return {
    // borderBottom: `1px solid ${theme.border_table_color}`,
    // borderLeft: `1px solid ${theme.border_table_color}`,
    borderRight: borders && `1px solid ${theme.border_table_color}`
  }
})
