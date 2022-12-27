// import { mauve } from '@radix-ui/colors'
// import * as SelectPrimitive from '@radix-ui/react-select'
// import { keyframes, styled } from '../../stitches.config'
// import { fadeIn } from '../../animations'

// const animationContent = keyframes({
//   '0%': {
//     bottom: '-1rem',
//   },
//   '100%': {
//     bottom: 0,
//   },
// })

// export const StyledTrigger = styled(SelectPrimitive.SelectTrigger, {
//   all: 'unset',
//   display: 'inline-flex',
//   alignItems: 'center',
//   justifyContent: 'space-between',
//   gap: 10,
//   transition: 'all .3s ease',
//   cursor: 'pointer',
//   border: '1px solid black',
//   variants: {
//     kind: {
//       primary: {
//         '&:hover': { backgroundColor: '$primary100' },
//         '&:focus': {
//           boxShadow: `0 0 0 1px $colors$primary300`,
//           borderColor: '$primary300',
//           color: '$primary',
//         },
//       },
//       secondary: {
//         '&:hover': { backgroundColor: '$secondary100' },
//         '&:focus': {
//           boxShadow: `0 0 0 2px $colors$secondary300`,
//           borderColor: '$secondary300',
//           color: '$secondary',
//         },
//       },
//       tertiary: {
//         '&:hover': { backgroundColor: '$tertiary100' },
//         '&:focus': {
//           boxShadow: `0 0 0 2px $colors$tertiary300`,
//           borderColor: '$tertiary300',
//           color: '$tertiary',
//         },
//       },
//     },
//     size: {
//       small: {
//         fontSize: 15,
//         padding: '5px 10px',
//       },
//       medium: {
//         fontSize: 18,
//         padding: '8px 13px',
//       },
//       large: {
//         fontSize: 25,
//         padding: '11px 16px',
//       },
//     },
//   },
//   defaultVariants: {
//     kind: 'primary',
//     size: 'medium',
//   },
// })

// export const StyledContent = styled(SelectPrimitive.Content, {
//   overflow: 'hidden',
//   backgroundColor: 'white',
//   borderWidth: '1px',
//   borderStyle: 'solid',
//   position: 'relative',
//   animation: `${fadeIn} .3s ease, ${animationContent} .3s ease`,
//   variants: {
//     kind: {
//       primary: {
//         borderColor: '$primary',
//         boxShadow:
//           '0 0 5px $colors$primary100, 0 0 10px $colors$primary100, 0 0 15px $colors$primary100',
//       },
//       secondary: {
//         borderColor: '$secondary',
//         boxShadow:
//           '0 0 5px $colors$secondary100, 0 0 10px $colors$secondary100, 0 0 15px $colors$secondary100',
//       },
//       tertiary: {
//         borderColor: '$tertiary',
//         boxShadow:
//           '0 0 5px $colors$tertiary100, 0 0 10px $colors$tertiary100, 0 0 15px $colors$tertiary100',
//       },
//     },
//   },
//   defaultVariants: {
//     kind: 'primary',
//   },
// })

// export const StyledViewport = styled(SelectPrimitive.Viewport, {
//   padding: 5,
// })

// export const StyledItem = styled(SelectPrimitive.Item, {
//   all: 'unset',
//   lineHeight: 1,
//   display: 'flex',
//   alignItems: 'center',
//   position: 'relative',
//   userSelect: 'none',
//   cursor: 'pointer',
//   '&[data-disabled]': {
//     color: mauve.mauve8,
//     pointerEvents: 'none',
//   },
//   variants: {
//     kind: {
//       primary: {
//         color: '$primary',
//         '&:focus': {
//           backgroundColor: '$primary400',
//           color: '$primary100',
//         },
//       },
//       secondary: {
//         color: '$secondary',
//         '&:focus': {
//           backgroundColor: '$secondary400',
//           color: '$secondary100',
//         },
//       },
//       tertiary: {
//         color: '$tertiary',
//         '&:focus': {
//           backgroundColor: '$tertiary400',
//           color: '$tertiary100',
//         },
//       },
//     },
//     size: {
//       small: {
//         fontSize: 15,
//         padding: '5px 20px 5px 25px',
//       },
//       medium: {
//         fontSize: 18,
//         padding: '7px 25px 7px 25px',
//       },
//       large: {
//         fontSize: 25,
//         padding: '9px 30px 9px 30px',
//       },
//     },
//   },
//   defaultVariants: {
//     kind: 'primary',
//     size: 'medium',
//   },
// })

// export const StyledLabel = styled(SelectPrimitive.Label, {
//   fontSize: 12,
//   lineHeight: '25px',
//   variants: {
//     size: {
//       small: {
//         fontSize: 13,
//         padding: '3px 25px',
//       },
//       medium: {
//         fontSize: 16,
//         padding: '5px 25px',
//       },
//       large: {
//         fontSize: 23,
//         padding: '7px 30px',
//       },
//     },
//   },
//   defaultVariants: {
//     size: 'medium',
//   },
// })

// export const StyledSeparator = styled(SelectPrimitive.Separator, {
//   height: 1,
//   variants: {
//     kind: {
//       primary: {
//         backgroundColor: '$primary100',
//       },
//       secondary: {
//         backgroundColor: '$secondary100',
//       },
//       tertiary: {
//         backgroundColor: '$tertiary100',
//       },
//     },
//     size: {
//       small: {
//         margin: 5,
//       },
//       medium: {
//         margin: 7,
//       },
//       large: {
//         margin: 9,
//       },
//     },
//   },
//   defaultVariants: {
//     kind: 'primary',
//     size: 'medium',
//   },
// })

// export const StyledItemIndicator = styled(SelectPrimitive.ItemIndicator, {
//   position: 'absolute',
//   left: 0,
//   width: 25,
//   display: 'inline-flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// })

// const scrollButtonStyles = {
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   height: 25,
//   backgroundColor: 'white',
//   variants: {
//     kind: {
//       primary: {
//         color: '$primary600',
//       },
//       secondary: {
//         color: '$secondary600',
//       },
//       tertiary: {
//         color: '$tertiary600',
//       },
//     },
//     size: {
//       small: {},
//       medium: {},
//       large: {},
//     },
//   },
//   defaultVariants: {
//     kind: 'primary',
//     size: 'medium',
//   },
// }

// export const StyledScrollUpButton = styled(
//   SelectPrimitive.ScrollUpButton,
//   scrollButtonStyles
// )

// export const StyledScrollDownButton = styled(
//   SelectPrimitive.ScrollDownButton,
//   scrollButtonStyles
// )
import { styled } from '../../stitches.config'
import { ChevronDownIcon } from '../icons'

export const MainContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  margin: '1rem',
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
  width: 'auto',
  maring: '85px auto 0',
  '&:hover': {
    outline: '1px solid $primary',
  },
  // '& input:focus': {
  //   outline: '2px solid $primary',
  // },
  variants: {
    isDisabled: {
      true: {},
    },
  },
})

export const StyledInputHidden = styled('input', {
  opacity: 0,
  width: 'inherit',
})

export const StyledSelect = styled('div', {
  zIndex: 999999,
  display: 'flex',
  alignItems: 'center',
  height: '65px',
  padding: '0 20px',
  fontSize: '22px',
  background: '#fff',
  borderRadius: '7px',
  justifyContent: 'space-between',
  cursor: 'pointer',
  '&:hover': {
    cursor: 'pointer',
  },
  variants: {
    isDisabled: {
      true: {
        color: '$disabled',
        '&:hover': {
          cursor: 'not-allowed',
        },
      },
    },
  },
})

export const Arrow = styled(ChevronDownIcon, {
  fontSize: '31px',
  transition: 'transform 0.3s linear',
  variants: {
    isOpen: {
      true: {
        // animation: `${rotateAnimation} 300ms forwards`,
        transform: 'rotate(-180deg)',
      },
    },
  },
})

export const Content = styled('div', {
  position: 'absolute',
  transition:
    'opacity 267ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 178ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  padding: '20px',
  width: 'inherit',
  marginTop: '3px',
  background: '#fff',
  boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
  borderRadius: '7px',
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
  maxHeight: '150px',
  overflowY: 'auto',
  paddingRight: '7px',
  paddingLeft: '7px',
  '&::-webkit-scrollbar': {
    width: '7px',
  },
  '&::-webkit-scrollbar-track': {
    background: '#f1f1f1',
    borderRadius: '25px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#ccc',
    borderRadius: '25px',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: '#b3b3b3',
  },
})

export const StyledOptionItem = styled('li', {
  display: 'flex',
  height: '50px',
  padding: '0 13px',
  marginTop: '10px',
  marginBottom: '10px',
  fontSize: '21px',
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
        '&:after': {
          transform: 'scale(1)',
        },
      },
    },
  },
})
