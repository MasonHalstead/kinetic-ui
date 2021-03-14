import styled from '@emotion/styled'
import { darken, lighten } from 'polished'

export const variant = (color, disabled, outline) => {
  const light = lighten(0.75, '#273546')
  const lighter = lighten(0.8, '#273546')
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
      background: '#fff',
      border: `1px solid ${color}`,
      '&:hover': {
        background: `linear-gradient(90deg, ${light} 1%, ${light} 100%)`
      },
      '&:focus': {
        background: `linear-gradient(90deg, ${lighter} 1%, ${lighter} 100%)`
      },
      '&:active': {
        background: `linear-gradient(90deg, ${lighter} 1%, ${lighter} 100%)`
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
