import { amber, blue, green, red } from '@radix-ui/colors'
import { FiTheme } from './types'

export const initialTheme: FiTheme = {
  colors: {
    linkText: '#5F3DFF',
    primary: 'blue',
    primaryText: '#000',
    primaryButtonText: '#fff',
    secondary: '#5F3DFF',
    secondaryText: '#fff',
    secondaryButtonText: '#fff',
    tertiary: '#FA9A1D',
    tertiaryText: '#000',
    tertiaryButtonText: '#000',
    disabled: '#ddd',
    error: red.red10,
    success: green.green10,
    info: blue.blue10,
    warning: amber.amber10,
    default: 'hsl(206 22% 7% / 35%)',
  },
  space: {},
  fonts: {
    primary: 'apple-system, sans-serif',
  },
  radii: {
    round: '50%',
  },
}
