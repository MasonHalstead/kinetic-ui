import styled from '@emotion/styled'
import { darken } from 'polished'

export const variant = (color, disabled, outline) => {
  const dark = darken(0.05, color)
  const darker = darken(0.1, color)

  if (disabled) {
    return {
      opacity: 0.8,
      background: `linear-gradient(90deg, ${color} 1%, ${color} 100%)`
    }
  }
  if (outline) {
    return {
      background: 'transparent',
      border: `1px solid ${color}`,
      '&:hover': {
        opacity: 0.8
      },
      '&:focus': {
        opacity: 0.8
      },
      '&:active': {
        opacity: 1
      }
    }
  }
  return {
    background: `linear-gradient(90deg, ${color} 1%, ${color} 100%)`,
    border: `1px solid ${color}`,
    '&:hover': {
      background: `linear-gradient(90deg, ${dark} 1%, ${dark} 100%)`
    },
    '&:focus': {
      background: `linear-gradient(90deg, ${darker} 1%, ${darker} 100%)`
    },
    '&:active': {
      background: `linear-gradient(90deg, ${darker} 1%, ${darker} 100%)`
    }
  }
}

export const Button = styled.button(({ color, disabled, outline }) => {
  const style = variant(color, disabled, outline)
  return style
})
