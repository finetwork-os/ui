import { spin } from '../../animations'
import { styled } from '../../stitches.config'

export const getComputedStyles = ({
  size,
  kind,
}: {
  size: number
  kind: string
}) => {
  return {
    width: size,
    height: size,
    borderColor: `$${kind}200`,
    borderTopColor: `$${kind}400`,
    borderStyle: 'solid',
  }
}

export const StyledLoading = styled('div', {
  borderWidth: '2px',
  borderColor: '$primary200',
  borderTopColor: '$primary400',
  borderRadius: '50%',
  animation: `${spin} .8s linear infinite`,
  backgroundColor: 'transparent',
})
