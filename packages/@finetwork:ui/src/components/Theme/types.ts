export type Colors = {
  primary?: string
  primaryText?: string
  primaryButtonText?: string
  primary100?: string
  primary200?: string
  primary300?: string
  primary400?: string
  primary500?: string
  primary600?: string
  primary700?: string
  primary800?: string
  primary900?: string
  secondary?: string
  secondaryText?: string
  secondaryButtonText?: string
  secondary100?: string
  secondary200?: string
  secondary300?: string
  secondary400?: string
  secondary500?: string
  secondary600?: string
  secondary700?: string
  secondary800?: string
  secondary900?: string
  tertiary?: string
  tertiaryText?: string
  tertiaryButtonText?: string
  tertiary100?: string
  tertiary200?: string
  tertiary300?: string
  tertiary400?: string
  tertiary500?: string
  tertiary600?: string
  tertiary700?: string
  tertiary800?: string
  tertiary900?: string
  linkText?: string
  linkText100?: string
  linkText200?: string
  linkText300?: string
  linkText400?: string
  linkText500?: string
  linkText600?: string
  linkText700?: string
  linkText800?: string
  linkText900?: string
  disabled?: string
  error?: string
  success?: string
  info?: string
  warning?: string,
  default?: string,
}

export type Fonts = {
  primary?: string
  secondary?: string
}

export type FiTheme = {
  colors?: Colors
  space?: any
  fonts?: Fonts
  radii?: any
  className?: string
  selector?: string
  toString?: () => string
}
