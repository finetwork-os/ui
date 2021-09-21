import { ComponentProps, FC } from 'react'
import { KINDS, SIZES } from '../../index'

import { StyledH1 } from '../../../styled-components/typography'

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
}
export type TypographyComponent = FC<
  TypographyProps & {
    Component: any
    isHighLight?: boolean
  }
>
export type TypographyImplementationComponent = FC<TypographyProps>
