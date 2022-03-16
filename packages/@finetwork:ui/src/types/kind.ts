export enum KIND {
  default = 'default',
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
}

export type KINDS = keyof typeof KIND
