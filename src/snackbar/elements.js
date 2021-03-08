import styled from '@emotion/styled'
import { lighten } from 'polished'

export const SnackbarElement = styled.div(({ theme, background }) => ({
  background,
  borderColor: lighten(0.1, background),
  fontFamily: theme.font_snackbar_family,
  fontSize: theme.font_snackbar_size
}))
export const ActionElement = styled.div(({ theme }) => ({
  color: theme.font_snackbar_color,
  '&:hover': {
    color: theme.snackbar_action_color
  }
}))
