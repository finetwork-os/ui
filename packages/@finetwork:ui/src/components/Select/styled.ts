import { ChevronDownIcon, Cross1Icon } from '@radix-ui/react-icons'

import { KIND } from '../../types'
import { styled } from '../../stitches.config'

const isActiveStyles = (kind) => {
  return {
    borderTopColor: `$${kind}300`,
    borderBottomColor: `$${kind}300`,
  }
}

export const StyledChevron = styled(ChevronDownIcon, {
  transition: 'all .3s ease',
  variants: {
    rotate: {
      open: {
        transform: 'rotate(180deg) scale(1.1)',
      },
      close: {
        transform: 'rotate(0deg) scale(1.1)',
      },
    },
    kind: {
      primary: {
        color: '$primary',
      },
      secondary: {
        color: '$secondary',
      },
      tertiary: {
        color: '$tertiary',
      },
    },
  },
  defaultVariants: {
    kind: 'primary',
  },
})
export const StyledCrossIcon = styled(Cross1Icon, {
  variants: {
    kind: {
      primary: {
        color: '$primary',
      },
      secondary: {
        color: '$secondary',
      },
      tertiary: {
        color: '$tertiary',
      },
    },
  },
  defaultVariants: {
    kind: 'primary',
  },
})
export const StyledSelectContainer = styled('div', {
  position: 'relative',
})
export const BaseMenu = styled('ul', {
  padding: 0,
  marginTop: 0,
  position: 'absolute',
  backgroundColor: 'white',
  zIndex: 1,
  width: '100%',
  maxHeight: '20rem',
  overflowY: 'auto',
  overflowX: 'hidden',
  outline: '0',
  transition: 'opacity .1s ease',
  borderColor: '#000',
  borderStyle: 'solid',
  borderTopWidth: 0,
  borderRightWidth: 1,
  borderBottomWidth: 1,
  borderLeftWidth: 1,
  variants: {
    open: {
      true: {},
      false: {
        border: 0,
      },
    },
  },
  defaultVariants: {
    open: false,
  },
})

export const Item = styled('li', {
  position: 'relative',
  cursor: 'pointer',
  display: 'block',
  border: 'none',
  height: 'auto',
  textAlign: 'left',
  borderTop: 'none',
  lineHeight: '1em',
  color: 'rgba(0,0,0,.87)',
  fontSize: '1rem',
  textTransform: 'none',
  fontWeight: '400',
  boxShadow: 'none',
  padding: '.8rem 1.1rem',
  whiteSpace: 'normal',
  wordWrap: 'normal',
  listStyle: 'none',
  transition: 'all .3s ease',
  borderBottomWidth: 1,
  borderTopWidth: 1,
  borderStyle: 'solid',
  borderColor: 'transparent',
  variants: {
    kind: {
      [KIND.primary]: {},
      [KIND.secondary]: {},
      [KIND.tertiary]: {},
    },
    isActive: {
      true: {},
      false: {},
    },
    isSelected: {
      false: {},
      true: {
        fontWeight: '700',
      },
    },
  },
  defaultVariants: {
    kind: 'primary',
    isActive: false,
    isSelected: false,
  },
  compoundVariants: [
    {
      kind: 'primary',
      isActive: true,
      css: {
        color: '$primary',
        '&:not(:last-child)': {
          ...isActiveStyles(KIND.primary),
        },
        '&:not(:first-child)': {
          ...isActiveStyles(KIND.primary),
        },
      },
    },
    {
      kind: 'secondary',
      isActive: true,
      css: {
        color: '$secondary',
        '&:not(:last-child)': {
          ...isActiveStyles(KIND.secondary),
        },
        '&:not(:first-child)': {
          ...isActiveStyles(KIND.secondary),
        },
      },
    },
    {
      kind: 'tertiary',
      isActive: true,
      css: {
        color: '$tertiary',
        '&:not(:last-child)': {
          ...isActiveStyles(KIND.tertiary),
        },
        '&:not(:first-child)': {
          ...isActiveStyles(KIND.tertiary),
        },
      },
    },
  ],
})
