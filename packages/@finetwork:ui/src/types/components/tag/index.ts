import { ComponentProps, FC } from 'react'

import { KINDS } from '../../kind'
import { Property } from '@stitches/react/types/css'
import { StyledTag } from '../../../styled-components/tag'

export type TagProps = ComponentProps<typeof StyledTag> & {
  kind?: KINDS
  textTransform?: Property.TextTransform
}
export type TagComponent = FC<TagProps>
