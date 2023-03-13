import { StyledComponent } from '@stitches/react/types/styled-component'
import { styled } from '../../stitches.config'

const sharedStyles = {
  paddingTop: '1rem',
  paddingBottom: '1rem',
  paddingRight: '1rem',
  paddingLeft: '1rem',
  width: '100%',
  variants: {
    font: {
      primary: {
        fontFamily: '$primary',
      },
      secondary: {
        fontFamily: '$secondary',
      },
    },
  },
  defaultVariants: {
    font: 'primary',
  },
}

export const StyledCardHeader = styled('div', {
  ...sharedStyles,
})

export const StyledCardBody = styled('div', {
  ...sharedStyles,
})

export const StyledCardFooter = styled('div', {
  ...sharedStyles,
})

export const StyledHeader: StyledComponent<typeof StyledCardHeader> = styled(
  StyledCardHeader,
  {
    paddingTop: '2rem',
    paddingRight: '2rem',
    paddingLeft: '2rem',
    paddingBottom: '1rem',
  }
)

export const StyledBody: StyledComponent<typeof StyledCardBody> = styled(
  StyledCardBody,
  {
    paddingTop: '1rem',
    paddingBottom: '2rem',
    paddingRight: '2rem',
    paddingLeft: '2rem',
  }
)

export const StyledFooter: StyledComponent<typeof StyledCardFooter> = styled(
  StyledCardFooter,
  {
    paddingTop: '1.5rem',
    paddingBottom: '1.5rem',
    paddingRight: '2rem',
    paddingLeft: '2rem',
    textAlign: 'right',
  }
)

export const StyledCard = styled('article', {
  backgroundColor: '#fff',
  color: '#000',
  transition: 'all .3s ease',
  borderRadius: '5px',
  variants: {
    kind: {
      primary: {},
      secondary: {},
      tertiary: {},
    },
    hoverAnimation: {
      true: {
        '&:hover': {
          transform: 'scale(1.05)',
        },
      },
    },
  },
  compoundVariants: [
    {
      kind: 'primary',
      hoverAnimation: true,
      css: {
        '&:hover': {
          backgroundColor: '$primary',
          color: '#fff',
        },
      },
    },
    {
      kind: 'secondary',
      hoverAnimation: true,
      css: {
        '&:hover': {
          backgroundColor: '$secondary',
          color: '#fff',
        },
      },
    },
    {
      kind: 'tertiary',
      hoverAnimation: true,
      css: {
        '&:hover': {
          backgroundColor: '$tertiary',
          color: '#fff',
        },
      },
    },
  ],
})
