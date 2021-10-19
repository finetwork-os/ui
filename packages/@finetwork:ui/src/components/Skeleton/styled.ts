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
  animationTimingFunction: 'ease-out',
  animationDuration: '1.5s',
  animationIterationCount: 'infinite',
  backgroundSize: '400% 100%',
}

export const StyledRoot = styled('div', {
  variants: {
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
  height: '15px',
  ...animationStyle,
  variants: {
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
