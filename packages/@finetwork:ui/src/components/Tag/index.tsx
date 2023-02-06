import * as React from 'react'
import { RenderEnhancer } from '@finetwork:ui/src/utils'
import { TagProps } from './types'
import { StyledTag, StyledParagraph6 } from './styled'

export const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  (
    {
      kind,
      text,
      textSize,
      background,
      borderRadius,
      width,
      height,
      endEnhancer,
      startEnhancer,
      colorText,
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
      if (textSize) {
        css = {
          ...css,
          text: {
            ...css.text,
            fontSize: `${textSize} !important`,
          },
        }
      }
      if (colorText) {
        css = {
          ...css,
          text: {
            ...css.text,
            color: `${colorText} !important`,
          },
        }
      }
      setCustomStyle(css)
    }, [])
    return (
      <StyledTag kind={kind} css={customStyle.tag} {...props}>
        {startEnhancer && <RenderEnhancer Enhancer={startEnhancer} />}
        <StyledParagraph6 kind={kind} bold={bold} css={customStyle.text}>
          {text}
        </StyledParagraph6>
        {endEnhancer && <RenderEnhancer Enhancer={endEnhancer} />}
      </StyledTag>
    )
  }
)
