import { fadeIn, fadeOut } from './../../animations'
import { styled } from '../../stitches.config'
import { Paragraph4, Paragraph6 } from '../Typography'

export const StyledTabs = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
})

export const StyledTabsList = styled('div', {
  display: 'flex',
  justifyContent: 'space-around',
  padding: '1rem',
  variants: {
    direction: {
      horizontal: {
        flexDirection: 'row',
      },
      vertical: {
        flexDirection: 'column',
      },
    },
  },
})

export const StyledTabsTrigger = styled('div', {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '0.5rem',
  width: '100%',
  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0ms',
})

export const StyledButtonTrigger = styled('button', {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  padding: '0.5rem',
  variants: {
    type: {
      standard: {
        '&:hover': {
          cursor: 'pointer',
          '& p': {
            color: 'rgb(95, 10, 255)',
          },
        },
      },
      success: {
        '&:hover': {
          cursor: 'pointer',
          '& p': {
            color: 'rgb(0, 109, 57)',
          },
        },
      },
      warning: {
        '&:hover': {
          cursor: 'pointer',
          '& p': {
            color: '#D0C100',
          },
        },
      },
      error: {
        '&:hover': {
          cursor: 'pointer',
          '& p': {
            color: '$error',
          },
        },
      },
      disabled: {
        '&:hover': {
          cursor: 'pointer',
          '& p': {
            color: '#8E8E8E',
          },
        },
      },
    },
  },
})

export const Line = styled('div', {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  bottom: 0,
  transition: 'left 0.5s ease-in-out',
  height: '3px',
  backgroundColor: '$secondary',
  width: '80%',
  pointerEvents: 'none',
  // transform: 'translateX(-60px)',
  variants: {
    isSelected: {
      false: {
        display: 'none',
      },
    },
    type: {
      standard: {
        backgroundColor: 'rgb(95, 10, 255) !important',
      },
      success: {
        backgroundColor: 'rgb(0, 109, 57) !important',
      },
      warning: {
        backgroundColor: '#D0C100 !important',
      },
      error: {
        backgroundColor: '$error !important',
      },
      disabled: {
        backgroundColor: '#8E8E8E !important',
      },
    },
  },
})

export const StyledTabsContent = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  variants: {
    isShow: {
      true: {
        display: 'flex',
        animation: `${fadeIn} 0.5s ease-in-out`,
      },
      false: {
        display: 'none',
        animation: `${fadeOut} 0.5s ease-in-out`,
      },
    },
  },
})

export const StyledParagraph = styled(Paragraph4, {
  variants: {
    bold: {
      true: {
        fontWeight: 'bold !important',
      },
    },
    type: {
      withoutSelected: {
        color: 'black',
      },
      standard: {
        color: 'rgb(95, 10, 255)',
      },
      success: {
        color: 'rgb(0, 109, 57)',
      },
      warning: {
        color: '#D0C100',
      },
      error: {
        color: '$error',
      },
      disabled: {
        color: '#8E8E8E',
      },
    },
  },
})
