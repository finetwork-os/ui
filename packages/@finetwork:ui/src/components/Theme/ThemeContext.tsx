import * as React from 'react'

import { initialTheme } from './initial-theme'

export const ThemeContext = React.createContext({ theme: initialTheme })
