import styled from '@emotion/styled'
import { lighten } from 'polished'

export const SnackbarElement = styled.div(({ background }) => ({
  background,
  borderColor: lighten(0.1, background)
}))
export const ActionElement = styled.div(({ theme }) => ({
  color: theme.font_snackbar_color,
  '&:hover': {
    color: theme.snackbar_action_color
  }
}))
