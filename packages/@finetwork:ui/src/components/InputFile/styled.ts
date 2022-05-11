import { styled } from '../../stitches.config'
import { Button } from '../Button'

export const InputFileContainer = styled('label', {
  padding: '1rem',
  minWidth: '5rem',
  display: 'inline-block',
  outline: 'none',
  zIndex: 99,
  variants: {
    isDragging: {
      true: {
        filter: 'blur(2px)',
      },
    },
    hasFiles: {
      true: {
        cursor: 'default',
      },
      false: {
        cursor: 'pointer',
      },
    },
    kind: {
      primary: {
        backgroundColor: '$primary100',
        '&:focus': {
          boxShadow: '0 0 0 2px $colors$primary400',
        },
      },
      secondary: {
        backgroundColor: '$secondary100',
        '&:focus': {
          boxShadow: '0 0 0 2px $colors$secondary400',
        },
      },
      tertiary: {
        backgroundColor: '$tertiary100',
        '&:focus': {
          boxShadow: '0 0 0 2px $colors$tertiary400',
        },
      },
    },
    size: {
      small: {},
      medium: {},
      large: {},
    },
  },
  defaultVariants: {
    kind: 'primary',
    size: 'medium',
  },
})

export const StyledInputFileContent = styled('div', {
  variants: {
    multipleChildren: {
      true: {
        display: 'grid',
        alignItems: 'center',
        gridAutoFlow: 'column',
        gap: '1rem',
      },
      false: {},
    },
  },
})

export const InputFilePreview = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  '&:not(:first-child)': {
    marginLeft: '1rem',
  },
})

export const InputFileContainerPreview = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '1rem',
  position: 'relative',
})

export const ImagePreview = styled('img', {})
export const StyledInputFileButton = styled(Button, {
  variants: {
    kind: {
      primary: {},
      secondary: {},
      tertiary: {},
    },
    hasFiles: {
      true: {
        position: 'absolute',
        top: '-1rem',
        right: '-1rem',
        zIndex: 999,
      },
      false: {
        pointerEvents: 'none',
      },
    },
  },
  compoundVariants: [
    {
      hasFiles: true,
      kind: 'primary',
      css: {
        boxShadow: '0 0 3px $colors$primary, 0 0 5px $colors$primary',
      },
    },
    {
      hasFiles: true,
      kind: 'secondary',
      css: {
        boxShadow: '0 0 3px $colors$secondary, 0 0 5px $colors$secondary',
      },
    },
    {
      hasFiles: true,
      kind: 'tertiary',
      css: {
        boxShadow: '0 0 3px $colors$tertiary, 0 0 5px $colors$tertiary',
      },
    },
  ],
  defaultVariants: {
    kind: 'primary',
  },
})

export const Container = styled('div', {
  position: 'relative',
  display: 'inline-block',
})

export const DraggableZone = styled('span', {
  position: 'absolute',
  top: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  width: '100%',
  height: '100%',
})

export const InputFileDataContainer = styled('div', {
  display: 'grid',
  gap: '.5rem',
  gridAutoFlow: 'row',
})
