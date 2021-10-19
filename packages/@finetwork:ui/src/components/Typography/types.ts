import { ComponentProps, FC } from 'react'
import { FONTS, KINDS, SIZES } from '../../types'

import { StyledH1 } from './styled'

export enum HIGHLIGHT_ALIGN {
  bottom = 'bottom',
  top = 'top',
}
export enum ALIGN {
  right = 'right',
  center = 'center',
  left = 'left',
}
export type HIGHLIGHT_ALIGNS = keyof typeof HIGHLIGHT_ALIGN
export type ALIGNS = keyof typeof ALIGN

type TypographyProps = ComponentProps<typeof StyledH1> & {
  kind?: KINDS
  isHighLight?: boolean
  highLightSize?: SIZES
  highLightAlign?: HIGHLIGHT_ALIGNS
  align?: ALIGNS
  highLightKind?: KINDS
  font?: FONTS
}
export type TypographyComponent = FC<
  TypographyProps & {
    Component: any
    isHighLight?: boolean
  }
>
export type TypographyImplementationComponent = FC<TypographyProps>
