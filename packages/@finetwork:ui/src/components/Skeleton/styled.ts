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
        margin: '2rem',
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
        background: 'transparent !important',
        '&:before': {
          content: '',
          position: 'absolute',
          zIndex: '-2 ',
          left: '-38%',
          top: '-44%',
          width: '180%',
          height: '180%',
          borderRadius: '100%',
          backgroundColor: '#D5CCFA',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%, 50% 50%',
          backgroundposition: '0 0, 100% 0, 100% 100%, 0 100%',
          backgroundImage:
            'linear-gradient(135deg, #D5CCFA, #D5CCFA, #D5CCFA, #D5CCFA, #D5CCFA, #D5CCFA, #E6E1FA, #D5CCFA, #D5CCFA, #D5CCFA, #D5CCFA, #D5CCFA, #D5CCFA)',
          ...animationStyle,
        },
        '&:after': {
          content: '',
          position: 'absolute',
          zIndex: '-1',
          left: '-23px',
          top: '-29px',
          width: '151%',
          height: '151%',
          background: 'white',
          borderRadius: '100%',
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
