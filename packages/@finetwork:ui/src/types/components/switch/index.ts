import type * as Polymorphic from '@radix-ui/react-polymorphic'

import { ComponentProps, FC } from 'react'

import { CSS } from '@stitches/react/types/css-util'
import { Root } from '@radix-ui/react-switch'
import { StyledSwitch } from '../../../styled-components/switch'

type SwitchVariants = ComponentProps<typeof StyledSwitch>
export type SwitchComponent = FC<ComponentProps<typeof Root> & SwitchVariants>
