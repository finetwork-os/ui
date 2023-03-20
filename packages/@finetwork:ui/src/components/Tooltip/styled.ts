import {
  fadeIn,
  fadeOut,
  scaleUpAnimation,
  scaleDownAnimation,
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
  position: 'relative',
  display: 'inline-block',
})

export const StyledTooltip = styled('div', {
  position: 'absolute',
  margin: '0 auto',
  padding: '0.5rem',
  transition: 'all 0.5s ease-in-out',
  overflowWrap: 'break-word',
  width: 'max-content',
  zIndex: 9,
  variants: {
    show: {
      true: {
        animation: `${fadeIn} 0.25s ease-in-out forwards, ${scaleUpAnimation} 0.25s ease-in-out forwards`,
      },
      false: {
        //animation: `${fadeOut} 0.5s ease-in-out forwards, ${scaleDownAnimation} 0.25s ease-in-out forwards`,
        display: 'none',
      },
    },
    position: {
      top: {
        // top: '10%',
        // left: '50%',
        // inset: '30px auto auto auto',
        bottom: '140%',
        margin: '0 auto',
        textAlign: 'center',
      },
      right: {
        // top: '50%',
        // left: '61.5%',
        //top: '40px',
        // left: '200px',
        // right: 0,
        // textAlign: 'center',
        top: '-50%',
        bottom: '-50%',
        margin: 'auto 0',
        left: '130%',
        textAlign: 'center',
      },
      bottom: {
        // top: '90%',
        // left: '50%',
        top: '140%',
        margin: '0 auto',
        textAlign: 'center',
      },
      left: {
        // top: '50%',
        // left: '38.5%',
        top: '-50%',
        bottom: '-50%',
        margin: 'auto 0',
        right: '130%',
        textAlign: 'center',
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
