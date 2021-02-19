import styled from '@emotion/styled'

export const AccordionElement = styled.div(({ theme }) => {
  return {
    '&:last-child': {
      borderBottom: theme.border_accordion
    }
  }
})

export const Accordion = styled.div(({ theme }) => {
  return {
    fontFamily: theme.font_accordion_family,
    color: theme.font_accordion_color,
    fontSize: theme.font_accordion_size,
    fontTransform: theme.font_accordion_transform,
    fontWeight: theme.font_accordion_weight,
    borderTop: theme.border_accordion,
    borderBottom: theme.border_accordion,
    '&:hover': {
      color: theme.font_accordion_hover
    }
  }
})
export const ContentElement = styled.div(({ theme, transition, expand }) => ({
  overflow: !expand ? 'auto' : 'visible',
  transition: `max-height ${transition}ms ease`,
  borderLeft: theme.border_accordion,
  borderRight: theme.border_accordion
}))
