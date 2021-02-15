import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { css, Global } from '@emotion/react'
import { createTheme as createDefaultTheme } from './default'
import { createTheme as createKineticTheme } from './kinetic'
import { createTheme as createMarketstreamTheme } from './marketstream'

const Context = React.createContext({})

export const ThemeProvider = ({
  theme,
  google_fonts,
  default_theme,
  children
}) => {
  const manageTheme = () => {
    switch (default_theme) {
      case 'marketstream':
        return createMarketstreamTheme(theme)
      case 'kinetic':
        return createKineticTheme(theme)
      default:
        return createDefaultTheme(theme)
    }
  }
  const manageFonts = () => {
    if (!google_fonts) {
      throw Error('Theme Provider is missing the Google Font URL')
    }
    return css`
      @import url('${google_fonts}');
    `
  }
  return (
    <Context.Provider value={manageTheme()}>
      <Global styles={manageFonts()} />
      {children}
    </Context.Provider>
  )
}

export const useTheme = (key, theme = {}) => {
  const context = useContext(Context)
  if (key) {
    return { ...context[key], ...theme }
  }
  return context
}

ThemeProvider.propTypes = {
  theme: PropTypes.object,
  children: PropTypes.any,
  default_theme: PropTypes.string,
  google_fonts: PropTypes.string
}
ThemeProvider.defaultProps = {
  theme: {},
  default_theme: 'default',
  google_fonts:
    'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Roboto+Mono&family=Roboto:wght@400;500&display=swap'
}
