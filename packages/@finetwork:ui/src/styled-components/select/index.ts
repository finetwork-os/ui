import { Menu, MenuItem } from 'reakit/Menu'

import { ChevronDownIcon } from '@radix-ui/react-icons'
import { StyledComponent } from '@stitches/react/types/styled-component'
import { styled } from '../../stitches.config'

export const StyledChevron = styled(ChevronDownIcon, {
  transition: 'all .3s ease',
  variants: {
    rotate: {
      open: {
        transform: 'rotateX(180deg) scale(1.1)',
      },
      close: {
        transform: 'rotateX(0deg) scale(1.1)',
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
export const StyledMenuContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderWidth: '1px',
  borderColor: '#000',
  borderStyle: 'solid',
  borderTopColor: 'transparent',
  backgroundColor: '#fff',
  paddingTop: '.5rem',
  paddingBottom: '.5rem',
})
export const StyledMenuButton = styled('div', {
  width: '100%',
})
export const StyledSelectContainer = styled('div', {
  width: '100%',
  position: 'relative',
  zIndex: 1,
  variants: {
    searchable: {
      false: {
        cursor: 'pointer',
      },
    },
  },
})
export const StyledMenu: StyledComponent<typeof Menu> = styled(Menu, {
  width: '100%',
  position: 'absolute !important' as any,
  left: '0 !important',
  variants: {
    font: {
      primary: {
        fontFamily: '$primary',
      },
      secondary: {
        fontFamily: '$secondary',
      },
    },
  },
  defaultVariants: {
    font: 'primary',
  },
})
export const StyledMenuItem = styled(MenuItem, {
  textAlign: 'initial',
  transition: 'all .2s ease',
  paddingTop: '.5rem',
  paddingBottom: '.5rem',
  paddingRight: '1rem',
  paddingLeft: '1rem',
  variants: {
    font: {
      primary: {
        fontFamily: '$primary',
      },
      secondary: {
        fontFamily: '$secondary',
      },
    },
    kind: {
      primary: {
        '&:hover': {
          color: '$primary',
        },
        '&:focus-within': {
          color: '$primary',
        },
      },
      secondary: {
        '&:hover': {
          color: '$secondary',
          backgroundColor: '$secondary100',
        },
        '&:focus-within': {
          color: '$secondary',
          backgroundColor: '$secondary100',
        },
      },
      tertiary: {
        '&:hover': {
          color: '$tertiary',
        },
        '&:focus-within': {
          color: '$tertiary',
        },
      },
    },
  },
  defaultVariants: {
    font: 'primary',
    kind: 'primary',
  },
})
export const StyledInputMenuContainer = styled('div', {
  display: 'flex',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '#000',
  width: '100%',
  pointerEvents: 'none',
  transition: 'all .3s ease',
  '&::placeholder': {
    color: '#A7A7A7',
  },
  variants: {
    size: {
      small: {
        fontSize: '12px',
        lineHeight: '18px',
      },
      medium: {
        fontSize: '14px',
        lineHeight: '20px',
      },
      large: {
        fontSize: '16px',
        lineHeight: '22px',
      },
    },
    kind: {
      primary: {},
      secondary: {},
      tertiary: {},
    },
    open: {
      true: {},
    },
    disabled: {
      true: {
        borderColor: '$disabled',
        color: '$disabled',
        cursor: 'not-allowed',
      },
    },
  },
  compoundVariants: [
    {
      kind: 'primary',
      open: true,
      css: {
        borderColor: '$primary',
      },
    },
    {
      kind: 'secondary',
      open: true,
      css: {
        borderColor: '$secondary',
      },
    },
    {
      kind: 'tertiary',
      open: true,
      css: {
        borderColor: '$tertiary',
      },
    },
    {
      disabled: true,
      kind: 'primary' || 'secondary' || 'tertiary',
      css: {
        borderColor: '$disabled',
        color: '$disabled',
        cursor: 'not-allowed',
      },
    },
  ],
  defaultVariants: {
    size: 'medium',
    kind: 'primary',
  },
})
export const StyledInputMenu = styled('input', {
  width: '100%',
  cursor: 'pointer',
  border: 0,
  backgroundColor: 'transparent',
  fontWeight: 600,
  height: '100%',
  paddingRight: '14px',
  paddingLeft: '14px',
  color: '$primaryText',
  variants: {
    font: {
      primary: {
        fontFamily: '$primary',
      },
      secondary: {
        fontFamily: '$secondary',
      },
    },
    size: {
      small: {
        paddingTop: '10px',
        paddingBottom: '10px',
      },
      medium: {
        paddingTop: '12px',
        paddingBottom: '12px',
      },
      large: {
        paddingTop: '14px',
        paddingBottom: '14px',
      },
    },
  },
  defaultVariants: {
    font: 'primary',
    size: 'medium',
  },
})
