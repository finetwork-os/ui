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
import { ChevronDownIcon, EyeOpenIcon } from '../icons'

export const MainContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  margin: '1rem',
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
    cursor: 'pointer',
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
  height: 'auto',
  minHeight: '3em',
  padding: '0 15px',
  background: '#fff',
  justifyContent: 'space-between',
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
  transition: 'transform 0.3s linear',
  variants: {
    isOpen: {
      true: {
        transform: 'rotate(-180deg)',
      },
    },
  },
})

export const Content = styled('div', {
  zIndex: 999999,
  position: 'absolute',
  transition:
    'opacity 267ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 178ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  padding: '5px',
  width: 'inherit',
  marginTop: '3px',
  background: '#fff',
  boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
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
  padding: '0 7px',
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
        '&:hover': {
          color: '$primary',
        },
      },
      secondary: {
        '&:hover': {
          color: '$secondary',
        },
        '&:after': {
          boxShadow: 'inset 14px 14px $colors$secondary !important',
        },
      },
      tertiary: {
        '&:hover': {
          color: '$tertiary',
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

export const SearchIcon = styled(EyeOpenIcon, {
  top: '50%',
  left: '15px',
  color: '#999',
  fontSize: '20px',
  pointerEvents: 'none',
  transform: 'translateY(-50%)',
  position: 'absolute',
})

export const SearchInput = styled('input', {
  height: '50px',
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
    color: '$primary',
  },
  variants: {
    chosen: {
      true: {
        color: '$primary',
        background: '$secondary100',
      },
    },
  },
})
