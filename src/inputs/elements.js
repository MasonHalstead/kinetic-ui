import styled from '@emotion/styled'

export const Wrapper = styled.div(({ color }) => {
  return {
    '&::placeholder': { color }
  }
})

export const Input = styled.div(
  ({ focus, disabled, transparent, background, theme }) => {
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
        background: background || '#fff',
        color: theme.font_input_focus,
        border: theme.border_input_focus
      }
    }
    return {
      color: theme.font_input_color,
      background: background || '#fff',
      border: theme.border_input,
      '&:hover': {
        color: theme.font_input_hover
      }
    }
  }
)

export const BaseElement = styled.div(({ theme, placeholder }) => {
  return {
    cursor: 'pointer',
    color: placeholder ? theme.font_input_placeholder : theme.font_input_color,
    border: theme.border_input_disabled
  }
})
