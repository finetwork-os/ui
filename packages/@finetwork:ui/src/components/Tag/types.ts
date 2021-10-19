import { ComponentProps, FC } from 'react'

import { KINDS } from '../../types'
import { Property } from '@stitches/react/types/css'
import { StyledTag } from './styled'

export type TagProps = ComponentProps<typeof StyledTag> & {
  kind?: KINDS
  textTransform?: Property.TextTransform
}
export type TagComponent = FC<TagProps>
