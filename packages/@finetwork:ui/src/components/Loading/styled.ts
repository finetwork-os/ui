import { spin } from '../../animations'
import { styled } from '../../stitches.config'

export const StyledSpinner = styled('div', {
  // border: '2px solid #fff',
  animation: `${spin} 1s linear infinite`,
  width: '36px',
  height: '36px',
  borderRadius: '50%',
  borderLeftColor: 'transparent',
})
