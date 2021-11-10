import * as React from 'react'

import {
  Bullet,
  BulletIcon,
  BulletText,
  ContainerBullets,
  Description,
  Price,
  PriceContainer,
  PriceDescription,
  PriceTabletContainer,
  StyledButton,
  StyledCard,
  StyledCardBody,
  StyledCardFooter,
  StyledCardHeader,
  StyledCheckIcon,
  StyledTag,
  TagText,
  Title,
} from '../../styled-components/price-card'

import { KINDS, Paragraph6 } from '@finetwork/ui'
import { TagProps } from '@finetwork/ui/src/components/Tag/types'

type PriceCardProps = {
  tagOptions?: {
    text?: string
    props?: TagProps
  }
  kind?: KINDS
  title: string
  price: string
  priceDescription?: string[]
  description?: string
  bullets?: {
    text: string
    icon?: React.ReactNode
  }[]
  footerLink?: {
    href: string
    label: string
    LinkComponent: React.FC<any>
  }
  actionButton: {
    text: string
    onClick: React.MouseEventHandler<HTMLButtonElement>
  }
}

export const PriceCard: React.FC<PriceCardProps> = ({
  tagOptions,
  kind = 'primary',
  title,
  price,
  priceDescription,
  description,
  bullets,
  footerLink,
  actionButton,
}) => {
  return (
    <StyledCard hoverAnimation kind={kind}>
      {tagOptions && (
        <StyledTag {...tagOptions.props}>
          <TagText css={{ color: 'inherit', textAlign: 'inherit' }}>
            {tagOptions.text}
          </TagText>
        </StyledTag>
      )}
      <StyledCardBody>
        <StyledCardHeader>
          <Title>{title}</Title>
        </StyledCardHeader>
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
        {description && <Description>{description}</Description>}
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
        <PriceTabletContainer>
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
        </PriceTabletContainer>
        <StyledButton kind={kind} onClick={actionButton.onClick}>
          {actionButton.text}
        </StyledButton>
        {footerLink && (
          <footerLink.LinkComponent href={footerLink.href}>
            {footerLink.label}
          </footerLink.LinkComponent>
        )}
      </StyledCardFooter>
    </StyledCard>
  )
}
