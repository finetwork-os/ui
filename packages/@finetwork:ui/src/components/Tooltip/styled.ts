import { fadeIn, scaleUpAnimation } from '../../animations'
import { styled } from '../../stitches.config'

export const Container = styled('div', {
  cursor: 'default',
  position: 'relative',
  display: 'inline-block',
})

export const StyledTooltip = styled('div', {
  margin: '0 auto',
  padding: '0.5rem',
  transition: 'all 0.5s ease-in-out',
  overflowWrap: 'break-word',
  width: 'max-content',
  zIndex: 9,
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
        background: 'rgb(244, 238, 255)',
        color: 'rgb(95, 10, 255)',
      },
      success: {
        background: 'rgb(218, 252, 236)',
        color: 'rgb(0, 109, 57)',
      },
      warning: {
        background: '#F7F4CD',
        color: '#D0C100',
      },
      error: {
        background: '#F7CDCD',
        color: '$error',
      },
      disabled: {
        background: '#E9E9E9',
        color: '#8E8E8E',
      },
    },
  },
})

export const TooltipContainer = styled('div', {
  position: 'absolute',
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
