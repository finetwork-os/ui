import { Arrow, Content } from '@radix-ui/react-tooltip'
import {
  slideDownAndFade,
  slideLeftAndFade,
  slideRightAndFade,
  slideUpAndFade,
} from '../../animations'

import { StyledComponent } from '@stitches/react/types/styled-component'
import { styled } from '../../stitches.config'

export const StyledContent: StyledComponent<typeof Content> = styled(Content, {
  borderRadius: 4,
  padding: '10px 15px',
  fontSize: 15,
  lineHeight: 1,
  backgroundColor: 'white',
  color: '#000',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="delayed-open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
})

export const StyledTooltipArrow: StyledComponent<typeof Arrow> = styled(Arrow, {
  fill: 'white',
})
