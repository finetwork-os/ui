import { Content, Header, Item, Root, Trigger } from '@radix-ui/react-accordion'
import {
  fadeIn,
  fadeOut,
  slideDownAccordion,
  slideUpAccordion,
} from '../animations'

import { ChevronDownIcon } from '@radix-ui/react-icons'
import { StyledComponent } from '@stitches/react/types/styled-component'
import { mauve } from '@radix-ui/colors'
import { styled } from '../../stitches.config'

export const StyledAccordion = styled(Root, {
  variants: {
    kind: {
      primary: {
        svg: {
          color: '$primary',
        },
      },
      secondary: {
        svg: {
          color: '$secondary',
        },
      },
      tertiary: {
        svg: {
          color: '$tertiary',
        },
      },
    },
  },
  defaultVariants: {
    kind: 'primary',
  },
})

export const StyledContentText = styled('div', {
  paddingBottom: '1.5rem',
  paddingRight: '1.2rem',
})

export const StyledContent: StyledComponent<typeof Content> = styled(Content, {
  overflow: 'hidden',
  '&[data-state="open"]': {
    animation: `${slideDownAccordion} 300ms cubic-bezier(0.87, 0, 0.13, 1), ${fadeIn} 300ms ease`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUpAccordion} 300ms cubic-bezier(0.87, 0, 0.13, 1), ${fadeOut} 300ms ease`,
  },
})

export const StyledItem = styled(Item, {
  paddingLeft: '1.2rem',
  paddingRight: '1.2rem',
  borderBottom: '1px solid #EFF2FC',
  '&:focus-within': {
    borderRadius: '5px',
    position: 'relative',
    zIndex: 1,
    boxShadow: `0 0 0 2px currentColor`,
  },
})

export const StyledHeader = styled(Header, {
  all: 'unset',
})

export const StyledTrigger: StyledComponent<typeof Trigger, any, any, any> =
  styled(Trigger, {
    all: 'unset',
    boxSizing: 'border-box',
    userSelect: 'none',
    cursor: 'pointer',
    paddingTop: '1.5rem',
    paddingBottom: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    '&::before': {
      boxSizing: 'border-box',
    },
    '&::after': {
      boxSizing: 'border-box',
    },
    svg: {
      transition: 'transform 175ms cubic-bezier(0.65, 0, 0.35, 1)',
    },
    '&[data-state="open"]': {
      svg: {
        transform: 'rotate(180deg)',
      },
    },
  })
export const StyledChevron = styled(ChevronDownIcon, {
  transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  '[data-state=open] &': { transform: 'rotate(180deg)' },
})
