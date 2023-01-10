export enum SIZE {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export const mediaQuery = {
  mobile: 360,
  tablet: 480,
  tabletXl: 768,
  desktop: 1024,
  desktopXl: 1280,
  desktop2Xl: 1600,
}

export type SIZES = keyof typeof SIZE

export enum DIALOG_SIZE {
  default = 'default',
  auto = 'auto',
  full = 'full',
}

export type DIALOG_SIZES = keyof typeof DIALOG_SIZE
