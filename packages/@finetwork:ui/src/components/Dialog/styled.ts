import { styled } from '../../stitches.config'
import { Cross1Icon } from '../icons'

export const StyledDialogTrigger = styled('button', {
  padding: '3px',
  transition: 'all .5s ease-in-out',
  borderRadius: '5px',
  '&:focus-visible': {
    outline: 'none',
    boxShadow: '0 0 0 2px #fff, 0 0 0 4px rgb(95, 10, 255)',
  },
})

export const StyledDialog = styled('div', {
  display: 'none',
  zIndex: '9999',
  position: 'fixed',
  top: '50%',
  left: '50%',
  background: '#FFF',
  borderRadius: '5px',
  boxShadow: '0px 10px 20px 7px rgba(0,0,0,0.1)',
  '-webkit-font-smoothing': 'antialiased',
  variants: {
    bottomSheet: {
      true: {
        position: 'fixed',
        top: 'unset',
        left: 0,
        right: 0,
        bottom: 0,
        margin: '0 auto',
        transition:
          'opacity 267ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 178ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
      },
    },
    fullSize: {
      true: {
        transform: 'unset',
        bottom: '0',
        left: '0',
        right: '0',
        borderRadius: 0,
      },
    },
  },
})

export const CloseButton = styled('button', {
  all: 'unset',
  zIndex: 10,
  marginBottom: '1rem',
  fontFamily: 'inherit',
  borderRadius: '100%',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: 15,
  right: 15,
  padding: '0.5rem',
  cursor: 'pointer',
  transition: 'background-color 0.3s linear',
  '&:hover': {
    borderRadius: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
})

export const CloseButtonIcon = styled(Cross1Icon, {
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 'inherit',
  width: 'inherit',
  position: 'relative',
  color: 'black',
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
})
