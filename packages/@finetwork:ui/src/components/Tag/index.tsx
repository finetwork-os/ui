import * as React from 'react'
import { RenderEnhancer } from '@finetwork:ui/src/utils'
import { TagProps } from './types'
import { StyledTag, StyledParagraph6 } from './styled'

export const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  (
    {
      kind,
      textSize,
      background,
      borderRadius = '5px',
      width,
      height,
      endEnhancer,
      startEnhancer,
      textColor,
      children,
      type,
      onClick,
      bold = false,
      ...props
    },
    ref
  ) => {
    const [customStyle, setCustomStyle] = React.useState({
      tag: {},
      text: {},
    })
    React.useEffect(() => {
      let css = {
        tag: {},
        text: {},
      }
      if (background) {
        css = {
          ...css,
          tag: {
            ...css.tag,
            background: `${background} !important`,
          },
        }
      }
      if (borderRadius) {
        css = {
          ...css,
          tag: {
            ...css.tag,
            borderRadius: `${borderRadius} !important`,
          },
        }
      }
      if (width) {
        css = {
          ...css,
          tag: {
            ...css.tag,
            width: `${width} !important`,
          },
        }
      }
      if (height) {
        css = {
          ...css,
          tag: {
            ...css.tag,
            height: `${height} !important`,
          },
        }
      }
      if (onClick) {
        css = {
          ...css,
          tag: {
            ...css.tag,
            '&:hover': {
              cursor: 'pointer',
            },
          },
        }
      }
      if (textSize) {
        css = {
          ...css,
          text: {
            ...css.text,
            fontSize: `${textSize} !important`,
          },
        }
      }
      if (textColor) {
        css = {
          ...css,
          text: {
            ...css.text,
            color: `${textColor} !important`,
          },
        }
      }
      setCustomStyle(css)
    }, [background, borderRadius, width, height, onClick, textSize, textColor])

    return (
      <StyledTag
        onClick={onClick}
        kind={kind}
        type={type}
        css={customStyle.tag}
        {...props}
      >
        {startEnhancer && <RenderEnhancer Enhancer={startEnhancer} />}
        <StyledParagraph6
          type={type}
          kind={kind}
          bold={bold}
          css={customStyle.text}
        >
          {children}
        </StyledParagraph6>
        {endEnhancer && <RenderEnhancer Enhancer={endEnhancer} />}
      </StyledTag>
    )
  }
)
