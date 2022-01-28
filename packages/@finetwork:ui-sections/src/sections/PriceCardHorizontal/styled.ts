import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CheckIcon,
  H3,
  H4,
  Paragraph4,
  Paragraph5,
  Paragraph6,
  Tag,
} from '@finetwork/ui'

import { styled } from '../../stitches.config'

export const PriceContainer = styled('div', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&::before': {
    content: '',
    position: 'absolute',
    backgroundColor: '$secondary',
    width: 3,
    height: '5rem',
    left: '-1rem',
    top: '-1rem',
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
})

export const TagText = styled(Paragraph4, {
  color: 'inherit',
  textAlign: 'inherit',
})

export const StyledCard = styled(Card, {
  position: 'relative',
  display: 'grid',
  alignItems: 'center',
  gridTemplateColumns: '1fr auto',
  cursor: 'pointer',
})

export const StyledCardHeader = styled('div', {
  display: 'flex',
})

export const StyledCardBody = styled(CardBody, {
  display: 'flex',
  flexDirection: 'column',
})

export const StyledCardFooter = styled(CardFooter, {
  display: 'flex',
  alignItems: 'center',
  height: '100%',
})

export const Title = styled(H4, {
  textAlign: 'center',
})

export const PriceDescription = styled('div', {
  display: 'grid',
  gap: '.1rem',
  marginLeft: '.5rem',
})

export const Price = styled(H3, {})

export const ContainerBullets = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
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
