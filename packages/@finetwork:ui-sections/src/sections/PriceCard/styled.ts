import {
  Button,
  Card,
  CardBody,
  CardFooter,
  H2,
  H4,
  Paragraph4,
  Paragraph5,
  Paragraph6,
  Tag,
} from '@finetwork/ui'

import { CheckIcon } from '@radix-ui/react-icons'
import { styled } from '../../stitches.config'

export const PriceContainer = styled('div', {
  position: 'relative',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  gridAutoFlow: 'column',
  marginBottom: '3rem',
  '&::before': {
    content: '',
    position: 'absolute',
    backgroundColor: '$secondary',
    height: 3,
    left: 0,
    margin: 'auto',
    right: 0,
    bottom: '-1.5rem',
    width: '5rem',
  },
  '@tablet': {
    display: 'none',
  },
  '@desktop-xl': {
    display: 'flex',
  },
  variants: {
    kind: {
      primary: {
        '&::before': {
          backgroundColor: '$primary',
        },
      },
      secondary: {
        '&::before': {
          backgroundColor: '$secondary',
        },
      },
      tertiary: {
        '&::before': {
          backgroundColor: '$tertiary',
        },
      },
    },
  },
  defaultVariants: {
    kind: 'primary',
  },
})

export const StyledTag = styled(Tag, {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  textAlign: 'center',
  '@tablet': {
    width: 'auto',
  },
  '@desktop': {
    width: '100%',
  },
})

export const TagText = styled(Paragraph4, {
  color: 'inherit',
  textAlign: 'inherit',
})

export const StyledCard = styled(Card, {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '@tablet': {
    display: 'grid',
    gridAutoFlow: 'column',
    alignItems: 'flex-end',
  },
  '@desktop-xl': {
    display: 'flex',
    justifyContent: 'start',
  },
  variants: {
    hoverAnimationPriceCard: {
      true: {
        '@desktop-xl': {
          '&:hover': {
            '[data-fi="button"]': {
              backgroundColor: '#fff',
              color: '#000',
              borderColor: '#fff',
            },
            '[data-fi="typography-highlight"]': {
              backgroundColor: '#fff',
            },
            '& h2, h4, p, a, svg': {
              color: '#fff',
            },
            [`${PriceContainer.toString()}::before`]: {
              background: '#fff',
            },
          },
        },
      },
    },
  },
  defaultVariants: {
    hoverAnimationPriceCard: false,
  },
})

const headerStyles = {
  paddingRight: '2rem',
  paddingLeft: '2rem',
  paddingBottom: '1rem',
  justifyContent: 'center',
}

export const StyledCardHeader = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  ...headerStyles,
  '@tablet': {
    justifyContent: 'start',
    margin: 0,
    paddingRight: 0,
    paddingLeft: 0,
  },
  '@desktop-xl': {
    ...headerStyles,
  },
  variants: {
    hasTag: {
      true: {
        marginTop: '2rem',
      },
      false: {
        marginTop: '1rem',
      },
    },
  },
})

export const StyledCardBody = styled(CardBody, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const StyledCardFooter = styled(CardFooter, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const Title = styled(H4, {
  textAlign: 'center',
  '@tablet': {
    textAlign: 'initial',
  },
  '@desktop-xl': {
    textAlign: 'center',
  },
})

export const PriceDescription = styled('div', {
  display: 'grid',
  gap: '.1rem',
  marginLeft: '.5rem',
})

export const Price = styled(H2, {
  fontSize: 75,
})

export const PriceTabletContainer = styled(PriceContainer, {
  display: 'none',
  marginBottom: '1rem',
  '@tablet': {
    display: 'flex',
    '&::before': {
      display: 'none',
    },
  },
  '@desktop-xl': {
    display: 'none',
  },
})

export const Description = styled(Paragraph5, {
  textAlign: 'center !important',
  '@tablet': {
    textAlign: 'initial !important',
  },
  '@desktop-xl': {
    textAlign: 'center !important',
  },
})

export const ContainerBullets = styled('ul', {
  marginTop: '1.5rem',
  display: 'flex',
  flexDirection: 'column',
  '@tablet': {
    width: '100%',
  },
  '@desktop-xl': {
    width: 'auto',
  },
})
export const Bullet = styled('li', {
  listStyle: 'none',
  display: 'flex',
  alignItems: 'center',
  '&:not(:first-child)': {
    marginTop: '.5rem',
  },
})
export const BulletText = styled(Paragraph6, {
  marginLeft: '.5rem',
})
export const BulletIcon = styled('span', {})
export const StyledCheckIcon = styled(CheckIcon, {
  variants: {
    kind: {
      primary: {
        color: '$primary',
      },
      secondary: {
        color: '$secondary',
      },
      tertiary: {
        color: '$tertiary',
      },
    },
  },
  defaultVariants: {
    kind: 'primary',
  },
})
export const StyledButton = styled(Button, {
  marginBottom: '1rem',
})
