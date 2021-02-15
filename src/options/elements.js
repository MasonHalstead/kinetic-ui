import styled from '@emotion/styled'

export const OptionElement = styled.div(({ theme, active, selected }) => {
  if (active) {
    return {
      color: theme.font_option_active,
      fontFamily: theme.font_option_family,
      fontSize: theme.font_option_size,
      background: theme.background_option_active
    }
  }
  if (selected) {
    return {
      color: theme.font_option_color,
      fontFamily: theme.font_option_family,
      fontSize: theme.font_option_size,
      background: theme.background_option_selected
    }
  }
  return {
    color: theme.font_option_color,
    fontFamily: theme.font_option_family,
    fontSize: theme.font_option_size,
    '&:hover': {
      color: theme.font_option_hover,
      background: theme.background_option_hover
    }
  }
})
