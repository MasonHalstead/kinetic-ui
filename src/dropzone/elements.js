import styled from '@emotion/styled'

export const DropzoneElement = styled.div(
  ({ focus, disabled, transparent, background, theme }) => {
    if (transparent) {
      return {
        color: theme.font_dropzone_color,
        border: 'none',
        background: disabled
          ? theme.background_dropzone_disabled
          : 'transparent',
        borderRadius: '0px'
      }
    }
    if (disabled) {
      return {
        color: theme.font_dropzone_color,
        border: theme.border_dropzone_disabled,
        background: theme.background_dropzone_disabled
      }
    }
    return {
      color: theme.font_dropzone_color,
      background: background || theme.background_dropzone,
      border: theme.border_dropzone,
      '&:hover': {
        color: theme.font_dropzone_hover,
        border: theme.border_dropzone_hover
      }
    }
  }
)
