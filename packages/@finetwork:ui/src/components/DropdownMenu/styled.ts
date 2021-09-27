import {
  Arrow,
  CheckboxItem,
  Content,
  Item,
  ItemIndicator,
  Label,
  RadioItem,
  Separator,
  TriggerItem,
} from '@radix-ui/react-dropdown-menu'
import {
  slideDownAndFade,
  slideLeftAndFade,
  slideRightAndFade,
  slideUpAndFade,
} from '../../animations'

import { mauve } from '@radix-ui/colors'
import { styled } from '../../stitches.config'

export const StyledContent = styled(Content, {
  minWidth: 220,
  backgroundColor: 'white',
  borderRadius: 6,
  padding: 5,
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
})

export const itemStyles = {
  all: 'unset',
  fontSize: 13,
  lineHeight: 1,
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 25,
  padding: '0 5px',
  position: 'relative',
  paddingLeft: 25,
  userSelect: 'none',
  color: mauve.mauve12,
  '&[data-disabled]': {
    color: mauve.mauve8,
    pointerEvents: 'none',
  },
  '&:focus': {
    color: mauve.mauve2,
  },
  variants: {
    kind: {
      primary: {
        '&:focus': {
          backgroundColor: '$primary700',
        },
      },
      secondary: {
        '&:focus': {
          backgroundColor: '$secondary700',
        },
      },
      tertiary: {
        '&:focus': {
          backgroundColor: '$tertiary700',
        },
      },
    },
  },
  defaultVariants: {
    kind: 'primary',
  },
}

export const StyledItem = styled(Item, { ...itemStyles })
export const StyledCheckboxItem = styled(CheckboxItem, { ...itemStyles })
export const StyledRadioItem = styled(RadioItem, { ...itemStyles })
export const StyledTriggerItem = styled(TriggerItem)

export const StyledLabel = styled(Label, {
  paddingLeft: 25,
  fontSize: 12,
  lineHeight: '25px',
  color: mauve.mauve11,
})

export const StyledSeparator = styled(Separator, {
  height: 1,
  margin: 5,
  variants: {
    kind: {
      primary: {
        backgroundColor: '$primary300',
      },
      secondary: {
        backgroundColor: '$secondary300',
      },
      tertiary: {
        backgroundColor: '$tertiary300',
      },
    },
  },
  defaultVariants: {
    kind: 'primary',
  },
})

export const StyledItemIndicator = styled(ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
})
export const StyledArrow = styled(Arrow, {
  fill: 'white',
})
