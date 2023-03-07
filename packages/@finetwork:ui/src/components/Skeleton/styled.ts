import { keyframes, styled } from '../../stitches.config'

export const getAnimationColor = (background: string, animation: string) => {
  return `linear-gradient(135deg,
    ${background},
    ${background},
    ${background},
    ${background},
    ${background},
    ${background},
    ${animation},
    ${background},
    ${background},
    ${background},
    ${background},
    ${background},
    ${background})`
}

const animationStyle = {
  animation: `${keyframes({
    '0%': {
      backgroundPosition: '100% 50%',
    },
    '100%': {
      backgroundPosition: '0% 50%',
    },
  })}`,
  animationTimingFunction: 'linear',
  animationDuration: '1.5s',
  animationIterationCount: 'infinite',
  backgroundSize: '400% 100%',
}

export const StyledRoot = styled('div', {
  variants: {
    chart: {
      true: {
        position: 'relative',
        zIndex: 0,
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        padding: '2rem',
      },
    },
    hasRows: {
      true: {
        display: 'flex',
        flexDirection: 'column',
      },
      false: {
        ...animationStyle,
      },
    },
  },
})

export const StyledRow = styled('div', {
  width: '100%',
  height: '100%',
  ...animationStyle,
  variants: {
    chart: {
      true: {
        '&::before': {
          content: '',
          position: 'absolute',
          zIndex: '-2',
          left: '-50%',
          top: '-50%',
          width: '200%',
          height: '200%',
          borderRadius: '50%',
          backgroundColor: '#D5CCFA',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%, 50% 50%',
          backgroundposition: '0 0, 100% 0, 100% 100%, 0 100%',
          backgroundImage:
            'linear-gradient(135deg, #D5CCFA, #D5CCFA, #D5CCFA, #D5CCFA, #D5CCFA, #D5CCFA, #E6E1FA, #D5CCFA, #D5CCFA, #D5CCFA, #D5CCFA, #D5CCFA, #D5CCFA)',
          ...animationStyle,
        },
        '&::after': {
          content: '',
          position: 'absolute',
          zIndex: '-1',
          left: '-15px',
          top: '-15px',
          width: 'calc(170% - 12px)',
          height: 'calc(170% - 12px)',
          background: 'white',
          borderRadius: '50%',
        },
      },
    },
    isFirstRow: {
      true: {
        marginTop: 0,
      },
      false: {
        marginTop: '10px',
      },
    },
  },
})
