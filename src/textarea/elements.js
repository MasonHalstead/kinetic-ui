import styled from '@emotion/styled'

export const Wrapper = styled.div(({ color }) => ({
  '& textarea::placeholder': { color: `${color}!important` }
}))

export const Textarea = styled.div(
  ({ focus, disabled, background, transparent, theme }) => {
    if (transparent) {
      return {
        color: theme.font_input_color,
        border: 'none',
        background: disabled ? theme.background_input_disabled : 'transparent',
        borderRadius: '0px'
      }
    }
    if (disabled) {
      return {
        color: theme.font_input_color,
        border: theme.border_input_disabled,
        background: theme.background_input_disabled
      }
    }
    if (focus) {
      return {
        background: background || theme.background_input,
        color: theme.font_input_focus,
        border: theme.border_input_focus,
        '& textarea': {
          color: theme.font_input_color
        }
      }
    }
    return {
      color: theme.font_input_color,
      background: background || theme.background_input,
      border: theme.border_input,
      '&:hover': {
        color: theme.font_input_hover
      },
      '& textarea': {
        color: theme.font_input_color
      }
    }
  }
)
