import {
  animationSelect,
  animationSelectMobile,
  fadeInBackground,
} from '@finetwork:ui/src/animations'
import { styled } from '../../stitches.config'
import { ChevronDownIcon, Loupe } from '../icons'
import { Paragraph5 } from '../Typography'

export const MainContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  variants: {
    isDisabled: {
      true: {
        color: '$disabled',
      },
    },
  },
})

export const StyledLabel = styled('label', {
  display: 'flex',
  fontSize: '16px',
  marginBottom: '0.5rem',
  variants: {
    isDisabled: {
      true: {
        color: '$disabled',
      },
    },
    size: {
      small: {
        fontSize: '13px',
      },
      medium: {
        fontSize: '16px',
      },
      large: {
        fontSize: '30px',
      },
    },
  },
})

export const SelectContainer = styled('div', {
  outline: '1px solid black !important',
  width: '150px',
  maring: '85px auto 0',
  fontSize: '1rem',
  '&:focus': {
    outline: '2px solid $primary',
  },
  '&:hover': {
    outline: '2px solid $primary !important',
  },
  variants: {
    isDisabled: {
      true: {
        outline: '1px solid $disabled !important',
        color: '$disabled',
        '&:hover': {
          outline: '1px solid $disabled !important',
          cursor: 'not-allowed',
        },
      },
    },
    kind: {
      primary: {
        '&:hover': {
          outline: '2px solid $primary !important',
        },
      },
      secondary: {
        '&:hover': {
          outline: '2px solid $secondary !important',
        },
      },
      tertiary: {
        '&:hover': {
          outline: '2px solid $tertiary !important',
        },
      },
    },
    search: {
      true: {
        minWidth: '200px !important',
        width: '200px !important',
      },
    },
  },
})

export const StyledSelect = styled('div', {
  display: 'flex',
  alignItems: 'center',
  height: '40px',
  minHeight: '3em',
  padding: '0 15px',
  background: '#fff',
  justifyContent: 'space-between',
  '&:hover': {
    cursor: 'pointer',
  },
  variants: {
    isDisabled: {
      true: {
        outline: '1px solid $disabled !important',
        color: '$disabled',
        '&:hover': {
          outline: '1px solid $disabled !important',
          cursor: 'not-allowed',
        },
      },
    },
  },
})

export const Arrow = styled(ChevronDownIcon, {
  fontSize: '31px',
  marginLeft: '10px',
  transition: 'transform 0.25s linear',
  variants: {
    isOpen: {
      true: {
        transform: 'rotate(-180deg)',
      },
    },
  },
})

export const Overlay = styled('div', {
  display: 'none',
  height: '100%',
  zIndex: 9999,
  position: 'fixed',
  left: 0,
  right: 0,
  bottom: 0,
  margin: '0 auto',
  animation: `${fadeInBackground} .7s forwards`,
  variants: {
    isMobile: {
      true: {
        display: 'block',
      },
    },
  },
})

export const Content = styled('div', {
  zIndex: 999999,
  position: 'fixed',
  left: 0,
  right: 0,
  bottom: 0,
  margin: '0 auto',
  transition:
    'opacity 267ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 178ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  padding: '5px',
  marginTop: '3px',
  background: '#fff',
  boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
  borderRadius: '10px 10px 0px 0px',
  animation: `${animationSelectMobile} cubic-bezier(0.72,-0.67,0.49,0.01) 0.25s forwards`,
  '@tablet': {
    left: 'unset',
    right: 'unset',
    bottom: 'unset',
    width: 'inherit',
    position: 'absolute',
    borderRadius: 'unset',
    animation: `${animationSelect} cubic-bezier(0.44,0.15,0.43,1.5) 0.3s forwards`,
  },
  variants: {
    isOpen: {
      true: {
        display: 'block',
      },
      false: {
        display: 'none',
      },
    },
  },
})

export const StyledOptionsGroup = styled('ul', {
  maxHeight: '200px',
  overflowY: 'auto',
  padding: '0 7px',
  scrollbarColor: '$secondary',
  '&:hover': {
    scrollbarColor: '$primary',
  },
  '&::-webkit-scrollbar': {
    width: '7px',
  },
  '&::-webkit-scrollbar-track': {
    background: '#f1f1f1',
    borderRadius: '25px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '$secondary',
    borderRadius: '25px',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: '$primary',
  },
  variants: {
    kind: {
      primary: {
        '&::-webkit-scrollbar-thumb': {
          background: '$secondary',
        },
        '&::-webkit-scrollbar-thumb:hover': {
          background: '$primary',
        },
        scrollbarColor: '$primary',
      },
      secondary: {
        '&::-webkit-scrollbar-thumb': {
          background: '$secondary400',
        },
        '&::-webkit-scrollbar-thumb:hover': {
          background: '$secondary',
        },
        scrollbarColor: '$secondary',
      },
      tertiary: {
        '&::-webkit-scrollbar-thumb': {
          background: '$tertiary400',
        },
        '&::-webkit-scrollbar-thumb:hover': {
          background: '$tertiary',
        },
        scrollbarColor: '$tertiary',
      },
    },
  },
})

export const StyledOptionItem = styled('li', {
  display: 'flex',
  height: '40px',
  padding: '0 13px',
  marginTop: '10px',
  marginBottom: '10px',
  listStyle: 'none',
  alignItems: 'center',
  '&:focus': {
    outline: '1px solid $primary',
    background: '$secondary100',
  },
  '&:after': {
    transformOrigin: 'bottom left',
    clipPath: 'polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%)',
    content: '',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    boxShadow: 'inset 14px 14px $colors$primary',
    marginLeft: '10px',
    transition: '115ms transform ease-in-out',
    transform: 'scale(0)',
  },
  '&:hover': {
    background: '$secondary100',
    color: '$primary',
    cursor: 'pointer',
  },
  variants: {
    chosen: {
      true: {
        color: '$primary',
        background: '$secondary100',

        '&:after': {
          transform: 'scale(1)',
        },
      },
    },
    withoutCheck: {
      true: {
        '&:after': {
          transform: 'scale(0) !important',
        },
      },
    },
    multiple: {
      true: {
        '&:after': {
          transform: 'scale(0) !important',
        },
      },
    },
    kind: {
      primary: {
        scrollbarColor: '$primary',
        '&:hover': {
          color: '$primary',
          background: '$primary100 !important',
        },
      },
      secondary: {
        scrollbarColor: '$secondary',
        '&:hover': {
          color: '$secondary',
          background: '$secondary100 !important',
        },
        '&:after': {
          boxShadow: 'inset 14px 14px $colors$secondary !important',
        },
      },
      tertiary: {
        '&:hover': {
          color: '$tertiary',
          background: '$tertiary100 !important',
        },
        '&:after': {
          boxShadow: 'inset 14px 14px $colors$tertiary !important',
        },
      },
    },
  },
})

export const SearchContainer = styled('div', {
  position: 'relative',
  marginBottom: '10px',
})

export const SearchIcon = styled(Loupe, {
  top: '50%',
  left: '15px',
  color: '#999',
  fontSize: '20px',
  pointerEvents: 'none',
  transform: 'translateY(-50%)',
  position: 'absolute',
})

export const SearchInput = styled('input', {
  height: '36px',
  width: '100%',
  outline: 'none',
  fontSize: '17px',
  borderRadius: '5px',
  padding: '0 20px 0 43px',
  border: '1px solid #B3B3B3',
  '&:focus': {
    paddingLeft: '42px',
    border: '1px solid $secondary',
  },
  '&::placeholder': {
    color: '#bfbfbf',
  },
})

export const MultipleContainer = styled('div', {
  display: 'flex',
  '&:hover': {
    background: '$secondary100',
    cursor: 'pointer',
    '& div label li': {
      color: '$primary',
    },
  },
  variants: {
    chosen: {
      true: {
        '& div label li': {
          color: '$primary',
        },
        background: '$secondary100',
      },
    },
    kind: {
      primary: {
        '&:hover': {
          '& div label li': {
            color: '$primary',
          },
        },
      },
      secondary: {
        '&:hover': {
          '& div label li': {
            color: '$secondary',
          },
        },
      },
      tertiary: {
        '&:hover': {
          '& div label li': {
            color: '$tertiary',
          },
        },
      },
    },
  },
})

export const StyledTitle = styled('span', {
  display: 'flex',
  height: '40px',
  marginRight: '1rem',
  alignItems: 'center',
  fontWeight: 'bold',
})

export const StyledOptionMultiple = styled('li', {
  display: 'flex',
  marginTop: '10px',
  marginBottom: '10px',
  listStyle: 'none',
  alignItems: 'center',
})

export const ErrorMessage = styled(Paragraph5, {
  color: '$error !important',
  marginTop: '0.7rem',
})

export const NotFoundMessage = styled('p', {
  height: '40px',
  padding: '0 13px',
  marginTop: '10px',
})

export const ShowChosenOptions = styled('span', {
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis !important',
  width: '100%',
})

export const MainTitle = styled('span', {
  fontWeight: 'bold',
  display: 'flex',
  justifyContent: 'center',
})
