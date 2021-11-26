import * as React from 'react'

import {
  Bullet,
  BulletIcon,
  BulletText,
  ContainerBullets,
  Price,
  PriceContainer,
  PriceDescription,
  StyledCard,
  StyledCardBody,
  StyledCardFooter,
  StyledCardHeader,
  StyledCheckIcon,
  Title,
} from './styled'

import { KINDS, Paragraph6, KIND, Card, TagProps } from '@finetwork/ui'

type PriceCardProps = Omit<
  React.ComponentProps<typeof Card> & {
    kind?: KINDS
    title: string
    price: string
    priceDescription?: string[]
    bullets?: {
      text: string
      icon?: React.ReactNode
    }[]
  },
  'hoverAnimation'
>

export const PriceCardHorizontal: React.FC<PriceCardProps> = ({
  kind = KIND.primary,
  title,
  price,
  priceDescription,
  bullets,
  ...props
}) => {
  return (
    <StyledCard hoverAnimation={false} kind={kind} {...props}>
      <StyledCardBody>
        <StyledCardHeader>
          <Title>{title}</Title>
        </StyledCardHeader>
        {bullets && (
          <ContainerBullets>
            {bullets.map(({ icon, text }, index) => (
              <Bullet key={index}>
                <BulletIcon>{icon ? icon : <StyledCheckIcon />}</BulletIcon>
                <BulletText>{text}</BulletText>
              </Bullet>
            ))}
          </ContainerBullets>
        )}
      </StyledCardBody>
      <StyledCardFooter>
        <PriceContainer>
          {price && (
            <Price font="secondary" align="center">
              {price}
            </Price>
          )}
          {priceDescription && (
            <PriceDescription>
              <Paragraph6>{priceDescription[0]}</Paragraph6>
              <Paragraph6>{priceDescription[1]}</Paragraph6>
            </PriceDescription>
          )}
        </PriceContainer>
      </StyledCardFooter>
    </StyledCard>
  )
}
