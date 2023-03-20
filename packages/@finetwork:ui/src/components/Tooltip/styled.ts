import {
  slideDownAndFade,
  slideLeftAndFade,
  slideRightAndFade,
  slideUpAndFade,
} from '../../animations'
import { styled } from '../../stitches.config'

// export const StyledContent: StyledComponent<typeof Content> = styled(Content, {
//   borderRadius: 4,
//   padding: '10px 15px',
//   fontSize: 15,
//   lineHeight: 1,
//   backgroundColor: 'white',
//   color: '#000',
//   boxShadow:
//     'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
//   '@media (prefers-reduced-motion: no-preference)': {
//     animationDuration: '400ms',
//     animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
//     willChange: 'transform, opacity',
//     '&[data-state="delayed-open"]': {
//       '&[data-side="top"]': { animationName: slideDownAndFade },
//       '&[data-side="right"]': { animationName: slideLeftAndFade },
//       '&[data-side="bottom"]': { animationName: slideUpAndFade },
//       '&[data-side="left"]': { animationName: slideRightAndFade },
//     },
//   },
// })
export const Container = styled('div', {
  cursor: 'default',
})

export const StyledTooltip = styled('div', {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  //inset: '20px auto auto 0px',
  margin: '0 auto',
  padding: '0.5rem',
  transition: 'all 0.5s ease-in-out',
  overflowWrap: 'break-word',
  width: 'fit-content',
  // transition:
  //   'backgroundColor 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, boxShadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, borderColor 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  variants: {
    position: {
      top: {
        // top: '10%',
        // left: '50%',
        // inset: '30px auto auto auto',
        top: '40px',
        left: 0,
        right: 0,
        textAlign: 'center',
      },
      right: {
        top: '50%',
        left: '61.5%',
      },
      bottom: {
        top: '90%',
        left: '50%',
      },
      left: {
        top: '50%',
        left: '38.5%',
      },
    },
    kind: {
      primary: {
        color: '$primary !important',
        background: '$primary100 !important',
      },
      secondary: {
        color: '$secondary !important',
        background: '$secondary100 !important',
      },
      tertiary: {
        color: '$tertiary !important',
        background: '$tertiary100 !important',
      },
    },
    type: {
      standard: {
        background: 'rgb(244, 238, 255)',
        color: 'rgb(95, 10, 255)',
      },
      success: {
        background: 'rgb(218, 252, 236)',
        color: 'rgb(0, 109, 57)',
      },
      warning: {
        background: '#F7F4CD',
        color: '#D0C100',
      },
      error: {
        background: '#F7CDCD',
        color: '$error',
      },
      disabled: {
        background: '#E9E9E9',
        color: '#8E8E8E',
      },
    },
  },
})
