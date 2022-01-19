import * as DialogPrimitive from '@radix-ui/react-dialog'

import { blackA, mauve } from '@radix-ui/colors'
import { fadeIn, moveModal } from '../../animations'

import { DIALOG_SIZES } from '../../types'
import { StyledComponent } from '@stitches/react/types/styled-component'
import { styled } from '../../stitches.config'

export const CloseButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: 10,
  right: 10,
  cursor: 'pointer',
  color: mauve.mauve11,
})

export const StyledTitle = styled(DialogPrimitive.Title, {
  margin: 0,
  fontWeight: 500,
  fontSize: 17,
  color: '#000',
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

export const StyledDescription = styled(DialogPrimitive.Description, {
  margin: '.5rem 0 1.3rem',
  color: mauve.mauve11,
  fontSize: 15,
  lineHeight: 1.5,
})

export const StyledContent: StyledComponent<
  typeof DialogPrimitive.Content,
  { size?: DIALOG_SIZES }
> = styled(DialogPrimitive.Content, {
  backgroundColor: 'white',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '1.5rem',
  zIndex: 9999,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${fadeIn} 300ms cubic-bezier(0.16, 1, 0.3, 1), ${moveModal} 300ms cubic-bezier(0.16, 1, 0.3, 1)`,
    willChange: 'transform',
  },
  '&:focus': { outline: 'none' },
  variants: {
    size: {
      auto: {
        width: 'auto',
      },
      default: {
        width: '1000px',
        maxWidth: '100%',
      },
      full: {
        margin: 0,
        width: '100%',
        height: '100%',
      },
    },
  },
  defaultVariants: {
    size: 'auto',
  },
})

export const StyledOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: blackA.blackA9,
  position: 'fixed',
  inset: 0,
  zIndex: 999,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${fadeIn} 300ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
})
