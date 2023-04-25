import { fadeIn, scaleUpAnimation } from '../../animations'
import { styled } from '../../stitches.config'

export const Content = styled('div', {
  cursor: 'default',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const StyledTooltip = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0.5rem',
  transition: 'all 0.5s ease-in-out',
  overflowWrap: 'break-word',
  width: 'max-content',
  zIndex: 10,
  background: '#6f6f6f',
  color: '#FFF',
  variants: {
    show: {
      true: {
        animation: `${fadeIn} 0.25s ease-in-out forwards, ${scaleUpAnimation} 0.25s ease-in-out forwards`,
      },
      false: {
        display: 'none',
      },
    },
    type: {
      standard: {
        background: 'rgb(244, 238, 255) !important',
        color: 'rgb(95, 10, 255) !important',
      },
      success: {
        background: 'rgb(218, 252, 236) !important',
        color: 'rgb(0, 109, 57) !important',
      },
      warning: {
        background: '#F7F4CD !important',
        color: '#D0C100 !important',
      },
      error: {
        background: '#F7CDCD !important',
        color: '$error !important',
      },
      disabled: {
        background: '#E9E9E9 !important',
        color: '#8E8E8E !important',
      },
    },
  },
})

export const TooltipContainer = styled('div', {
  position: 'absolute',
  zIndex: '99999',
  display: 'flex',
  variants: {
    position: {
      top: {
        marginBottom: '0.5rem',
        inset: 'auto auto 100% auto',
      },
      right: {
        marginLeft: '0.8rem',
        inset: 'auto auto auto 100%',
      },
      bottom: {
        marginTop: '0.5rem',
        inset: '100% auto auto auto',
      },
      left: {
        marginRight: '0.8rem',
        inset: 'auto 100% auto auto',
      },
    },
  },
})

export const Container = styled('div', {
  position: 'relative',
  display: 'flex',
  textAlign: 'center',
  variants: {
    align: {
      start: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      },
      center: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      end: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
      },
    },
  },
})
