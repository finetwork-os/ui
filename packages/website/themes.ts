const sharedStyles = {
  colors: {
    linkText: '#5F3DFF',
    primary: '#9E88FC',
    primary100: '#F7F6F9',
    primary200: '#E6E1FA',
    primary300: '#D5CCFA',
    primary400: '#C3B6FB',
    primary500: '#B2A1FC',
    primary600: '#A18CFC',
    primary700: '#9077FD',
    primary800: '#7E61FE',
    primary900: '#6D4CFE',
    secondary: '#5F3DFF',
    secondary100: '#F4F2FF',
    secondary200: '#CABEFF',
    secondary300: '#AA98FF',
    secondary400: '#7F64FF',
    secondary500: '#5F3DFF',
    secondary600: '#5035DD',
    secondary700: '#412CBA',
    secondary800: '#2C218C',
    secondary900: '#18165E',
    tertiary: '#FA9A1D',
    tertiaryText: '#000',
    tertiaryButtonText: '#000',
    tertiary100: '#FFF8F0',
    tertiary200: '#FEEBD2',
    tertiary300: '#FDD096',
    tertiary400: '#FBB559',
    tertiary500: '#FA9A1D',
    tertiary600: '#D37F17',
    tertiary700: '#AB6412',
    tertiary800: '#8D4F0E',
    tertiary900: '#7A420B',
  },
  space: {},
  fonts: {
    primary: 'Nunito Sans, apple-system, sans-serif',
    secondary: 'Druk, monospace',
  },
}

export const lightTheme = {
  ...sharedStyles,
  colors: {
    ...sharedStyles.colors,
    primaryText: '#000',
    primaryButtonText: '#fff',
    secondaryText: '#fff',
    secondaryButtonText: '#000',
  },
}

export const drukStyles = `
@font-face {
  font-family: 'Druk';
  src: url('/fonts/Druk.eot');
  src: url('/fonts/Druk.eot?#iefix') format('embedded-opentype'),
    url('/fonts/Druk.woff2') format('woff2'), url('/fonts/Druk-Bold.woff') format('woff');
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}`

export const darkTheme = {
  ...sharedStyles,
  colors: {
    ...sharedStyles.colors,
    primary100: 'rgba(92, 55, 255, .2) !important',
    primary200: 'rgba(92, 55, 255, .4) !important',
    primaryText: '#fff !important',
    primaryButtonText: '#000 !important',
    secondaryText: '#000 !important',
    secondaryButtonText: '#fff !important',
  },
}
