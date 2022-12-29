import { styled } from '../../stitches.config'

const THUMBSIZE = '16px'

export const RangeContainer = styled('div', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  paddingTop: '1rem',
  paddingBottom: '1rem',
})

export const OriginalInputs = styled('div', {
  width: `calc(100% + ${THUMBSIZE})`,
  margin: `0 calc(${THUMBSIZE} / -2)`,
  position: 'absolute',
  height: THUMBSIZE,
})

export const StyledInput = styled('input', {
  position: 'absolute',
  width: '100%',
  pointerEvents: 'none',
  appearance: 'none',
  height: '100%',
  zIndex: 3,
  padding: 0,
  left: 0,
  paddingBottom: '.2rem',
  '&:focus': {
    '&::-ms-thumb': {
      outline: 'black 1px solid !important',
    },
    '&::-moz-range-thumb': {
      outline: 'black 1px solid !important',
    },
    '&::-webkit-slider-thumb': {
      outline: 'black 1px solid !important',
    },
  },
  '&::-ms-track': {
    appearance: 'none',
    background: 'transparent',
    border: 'transparent',
  },
  '&::-moz-range-track': {
    appearance: 'none',
    background: 'transparent',
    border: 'transparent',
  },
  '&:focus::-webkit-slider-runnable-track': {
    appearance: 'none',
    background: 'transparent',
    border: 'transparent',
  },
  '&::-ms-thumb': {
    appearance: 'none',
    pointerEvents: 'all',
    width: THUMBSIZE,
    height: THUMBSIZE,
    border: '0 none',
    cursor: 'grab',
    backgroundColor: '$primary',
    borderRadius: '50%',

    '&:hover': {
      boxShadow: 'rgba(229, 225, 250, 0.6)  0px 0px 0px 12px',
      transition: 'box-shadow 100ms ease-in',
    },

    '&:active': {
      cursor: 'grabbing',
    },
  },
  '&::-moz-range-thumb': {
    appearance: 'none',
    pointerEvents: 'all',
    width: THUMBSIZE,
    height: THUMBSIZE,
    border: '0 none',
    cursor: 'grab',
    backgroundColor: '$primary',
    borderRadius: '50%',

    '&:hover': {
      boxShadow: 'rgba(229, 225, 250, 0.6)  0px 0px 0px 12px',
      transition: 'box-shadow 100ms ease-in',
    },

    '&:active': {
      cursor: 'grabbing',
    },
  },
  '&::-webkit-slider-thumb': {
    appearance: 'none',
    pointerEvents: 'all',
    width: THUMBSIZE,
    height: THUMBSIZE,
    border: '0 none',
    cursor: 'grab',
    backgroundColor: '$primary',
    borderRadius: '50%',

    '&:hover': {
      boxShadow: 'rgba(229, 225, 250, 0.6)  0px 0px 0px 12px',
      transition: 'box-shadow 100ms ease-in',
    },

    '&:active': {
      cursor: 'grabbing',
    },
  },
})

export const CustomRangeContainer = styled('div', {
  width: '100%',
  position: 'absolute',
  height: THUMBSIZE,
})

export const ThumbValue = styled('span', {
  width: THUMBSIZE,
  height: THUMBSIZE,
  position: 'absolute',
  paddingTop: '1rem',
  top: '50%',
  marginLeft: `calc(${THUMBSIZE} / -2)`,
  transform: 'translate3d(0, -50%, 0)',
  zIndex: 2,
})

export const Rail = styled('div', {
  background: '#D9D9D9',
  position: 'absolute',
  width: '100%',
  top: '50%',
  transform: 'translateY(-50%)',
  height: '5px',
  borderRadius: '3px',
})

export const InnerRail = styled('div', {
  background: '$primary',
  opacity: '0.5',
  height: '100%',
  position: 'absolute',
})
