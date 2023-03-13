import { keyframes, styled } from '../../stitches.config'

export const getAnimationColor = (
  kind: 'primary' | 'secondary',
  background: string,
  animation: string
) => {
  if (kind === 'secondary') {
    background = '$secondary300'
    animation = '$secondary200'
  }

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

export const StyledGroup = styled('div', {
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  variants: {
    direction: {
      vertical: {
        flexDirection: 'column',
      },
      horizontal: {
        flexDirection: 'row',
      },
    },
  },
})

export const StyledRoot = styled('div', {
  display: 'flex',
  width: '100%',
  variants: {
    align: {
      start: {
        justifyContent: 'start',
      },
      center: {
        justifyContent: 'center',
      },
      end: {
        justifyContent: 'end',
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

export const StyledElement = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  ...animationStyle,
  variants: {
    align: {
      start: {
        justifyContent: 'start',
      },
      center: {
        justifyContent: 'center',
      },
      end: {
        justifyContent: 'end',
      },
    },
    isChildren: {
      true: {
        ...animationStyle,
        '-webkit-text-fill-color': 'transparent',
        '-webkit-background-clip': 'text',
      },
    },
  },
})

export const StyledOuterCircle = styled('div', {
  borderRadius: '50%',
  ...animationStyle,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  variants: {
    size: {
      small: {
        width: '120px',
        height: '120px',
      },
      medium: {
        width: '140px',
        height: '140px',
      },
      large: {
        width: '153px',
        height: '153px',
      },
    },
  },
  defaultVariants: {
    size: 'medium',
  },
})

export const StyledInnerCircle = styled('div', {
  borderRadius: '50%',
  background: '#fff',
  display: 'flex',
  variants: {
    size: {
      small: {
        width: '102px',
        height: '102px',
      },
      medium: {
        width: '122px',
        height: '122px',
      },
      large: {
        width: '135px',
        height: '135px',
      },
    },
  },
})

export const StyledChildrenContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  ...animationStyle,
  '-webkit-text-fill-color': 'transparent',
  '-webkit-background-clip': 'text',
})
