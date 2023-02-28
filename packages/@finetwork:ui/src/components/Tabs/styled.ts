import { fadeIn, fadeOut } from './../../animations'
import { styled } from '../../stitches.config'
import { Paragraph4 } from '../Typography'

export const StyledTabs = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  variants: {
    direction: {
      horizontal: {
        flexDirection: 'column',
      },
      vertical: {
        flexDirection: 'row',
      },
    },
  },
})

export const StyledTabsList = styled('div', {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  variants: {
    direction: {
      horizontal: {
        marginBottom: '1rem',
        flexDirection: 'row',
      },
      vertical: {
        marginRight: '1rem',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '1rem',
      },
    },
  },
})

export const StyledTabsTrigger = styled('div', {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0ms',
})

export const StyledButtonTrigger = styled('button', {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.3rem',
  width: '100%',
  padding: '0.5rem',
  '&::before': {
    content: '',
    position: 'absolute',
    width: '100%',
    height: '3px',
    bottom: 0,
    left: 0,
    visibility: 'hidden',
    borderRadius: '5px',
    transform: 'scaleX(0)',
    transition: '.1s ease-in-out',
  },
  variants: {
    isSelected: {
      true: {
        '&::before': {
          visibility: 'visible',
          transform: 'scaleX(1)',
        },
      },
    },
    type: {
      standard: {
        '&::before': {
          backgroundColor: '$secondary',
        },
        '&:hover': {
          cursor: 'pointer',
          '& p': {
            color: 'rgb(95, 10, 255) !important',
          },
        },
      },
      success: {
        '&::before': {
          backgroundColor: 'rgb(0, 109, 57)',
        },
        '&:hover': {
          cursor: 'pointer',
          '& p': {
            color: 'rgb(0, 109, 57) !important',
          },
        },
      },
      warning: {
        '&::before': {
          backgroundColor: '#D0C100',
        },
        '&:hover': {
          cursor: 'pointer',
          '& p': {
            color: '#D0C100 !important',
          },
        },
      },
      error: {
        '&::before': {
          backgroundColor: '$error',
        },
        '&:hover': {
          cursor: 'pointer',
          '& p': {
            color: '$error !important',
          },
        },
      },
      disabled: {
        '&::before': {
          backgroundColor: '#8E8E8E',
        },
        '&:hover': {
          cursor: 'not-allowed',
          '& p': {
            color: '#8E8E8E !important',
          },
        },
      },
    },
  },
})

export const StyledTabsContent = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  variants: {
    isShow: {
      true: {
        display: 'flex',
        animation: `${fadeIn} 0.3s ease-in-out`,
      },
      false: {
        display: 'none',
        animation: `${fadeOut} 0.3s ease-in-out`,
      },
    },
  },
})

export const StyledParagraph = styled(Paragraph4, {
  textAlign: 'center !important',
  variants: {
    bold: {
      true: {
        fontWeight: 'bold !important',
      },
    },
    type: {
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
