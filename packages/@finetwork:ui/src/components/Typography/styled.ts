import { styled } from '../../stitches.config'

const colors = {
  primary: {
    color: '$primaryText',
  },
  secondary: {
    color: '$secondaryText',
  },
  tertiary: {
    color: '$tertiaryText',
  },
}
const fonts = {
  primary: {
    fontFamily: '$primary',
  },
  secondary: {
    fontFamily: '$secondary',
  },
}
const H1Initial = {
  fontSize: '55px',
  lineHeight: '67px',
  fontWeight: 700,
}
const H1AllDevices = {
  fontSize: '110px',
  lineHeight: '120px',
}
const H2Initial = {
  fontSize: '46px',
  lineHeight: '54px',
  fontWeight: 600,
}
const H2AllDevices = {
  fontSize: '58px',
  lineHeight: '66px',
}
const H3Initial = {
  fontSize: '32px',
  lineHeight: '44px',
  fontWeight: 600,
}
const H3AllDevices = {
  fontSize: '40px',
  lineHeight: '50px',
}
const H4Initial = {
  fontSize: '18px',
  lineHeight: '28px',
  fontWeight: 600,
}
const H4AllDevices = {
  fontSize: '22px',
  lineHeight: '34px',
}
const H5Initial = {
  fontSize: '16px',
  lineHeight: '26px',
  fontWeight: 600,
}
const H5AllDevices = {
  fontSize: '18px',
  lineHeight: '26px',
}
const H6Initial = {
  fontSize: '14px',
  lineHeight: '24px',
  fontWeight: 600,
}
const H6AllDevices = {
  fontSize: '16px',
  lineHeight: '24px',
}
const paragraph1Styles = {
  fontSize: '38px',
  lineHeight: '50px',
  fontWeight: 400,
}
const paragraph2Styles = {
  fontSize: '30px',
  lineHeight: '42px',
  fontWeight: 400,
}
const paragraph3Styles = {
  fontSize: '22px',
  lineHeight: '34px',
  fontWeight: 400,
}
const paragraph4Styles = {
  fontSize: '16px',
  lineHeight: '26px',
  fontWeight: 400,
}
const paragraph5Styles = {
  fontSize: '14px',
  lineHeight: '20px',
  fontWeight: 400,
}
const paragraph6Styles = {
  fontSize: '12px',
  lineHeight: '18px',
  fontWeight: 400,
}
const getTypographyStyles = (
  initialSizes: Record<string, string | number> = {},
  allDevicesSizes: Record<string, string | number> = {}
): any => ({
  ...initialSizes,
  color: 'inherit',
  position: 'relative',
  '@tablet': {
    ...allDevicesSizes,
  },
  '@desktop': {
    ...allDevicesSizes,
  },
  '@desktop-xl': {
    ...allDevicesSizes,
  },
  variants: {
    font: {
      ...fonts,
    },
    kind: {
      ...colors,
    },
    align: {
      right: {
        textAlign: 'right',
      },
      left: {
        textAlign: 'left',
      },
      center: {
        textAlign: 'center',
      },
    },
    variant: {
      highLight: {
        paddingTop: '1rem',
        paddingBottom: '1rem',
      },
    },
  },
  defaultVariants: {
    kind: 'primary',
    font: 'primary',
    align: 'left',
  },
})

export const StyledHighLight = styled('span', {
  height: '1px',
  borderRadius: '5px',
  position: 'absolute',
  width: '4rem',
  backgroundColor: '$primary',
  variants: {
    kind: {
      primary: {
        backgroundColor: '$primary',
      },
      secondary: {
        backgroundColor: '$secondary',
      },
      tertiary: {
        backgroundColor: '$tertiary',
      },
    },
    highLightAlign: {
      top: {
        top: 0,
      },
      bottom: {
        bottom: 0,
      },
    },
    align: {
      center: {
        left: '50%',
        transform: 'translate(-50%, 0)',
      },
      left: {
        left: 0,
      },
      right: {
        right: 0,
      },
    },
    highLightSize: {
      small: {
        width: '2rem',
      },
      medium: {
        width: '4rem',
      },
      large: {
        width: '6rem',
      },
    },
  },
  defaultVariants: {
    kind: 'primary',
    align: 'left',
    highLightAlign: 'bottom',
    highLightSize: 'medium',
  },
})

export const StyledH1 = styled(
  'h1',
  getTypographyStyles(H1Initial, H1AllDevices)
)
export const StyledH2 = styled(
  'h2',
  getTypographyStyles(H2Initial, H2AllDevices)
)
export const StyledH3 = styled(
  'h3',
  getTypographyStyles(H3Initial, H3AllDevices)
)
export const StyledH4 = styled(
  'h4',
  getTypographyStyles(H4Initial, H4AllDevices)
)
export const StyledH5 = styled(
  'h5',
  getTypographyStyles(H5Initial, H5AllDevices)
)
export const StyledH6 = styled(
  'h6',
  getTypographyStyles(H6Initial, H6AllDevices)
)
export const StyledParagraph1 = styled(
  'p',
  getTypographyStyles(paragraph1Styles, paragraph1Styles)
)
export const StyledParagraph2 = styled(
  'p',
  getTypographyStyles(paragraph2Styles, paragraph2Styles)
)
export const StyledParagraph3 = styled(
  'p',
  getTypographyStyles(paragraph3Styles, paragraph3Styles)
)
export const StyledParagraph4 = styled(
  'p',
  getTypographyStyles(paragraph4Styles, paragraph4Styles)
)
export const StyledParagraph5 = styled(
  'p',
  getTypographyStyles(paragraph5Styles, paragraph5Styles)
)
export const StyledParagraph6 = styled(
  'p',
  getTypographyStyles(paragraph6Styles, paragraph6Styles)
)
