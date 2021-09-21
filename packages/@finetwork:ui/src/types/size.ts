export enum SIZE {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export type SIZES = keyof typeof SIZE

export enum DIALOG_SIZE {
  default = 'default',
  auto = 'auto',
  full = 'full',
}

export type DIALOG_SIZES = keyof typeof DIALOG_SIZE
