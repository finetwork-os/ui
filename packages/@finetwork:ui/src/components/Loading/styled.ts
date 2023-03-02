import { spin } from '../../animations'
import { styled } from '../../stitches.config'

export const getComputedStyles = ({
  size,
  kind = 'primary',
  disabled,
}: {
  size: number
  kind: string
  disabled: boolean
}) => {
  return {
    width: size,
    height: size,
    // borderColor: disabled ? '#eee' : `$${kind}200`,
    // borderTopColor: disabled ? '#aaa' : `$${kind}400`,
    // borderStyle: 'solid',
  }
}

export const StyledLoading = styled('div', {
  borderRadius: '50%',
  display: 'inline-block',
  borderTop: '3px solid #FFF',
  borderRight: '3px solid transparent',
  boxSizing: 'border-box',
  animation: `${spin} 1s linear infinite`,
})
