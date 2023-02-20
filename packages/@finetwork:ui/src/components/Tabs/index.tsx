import * as React from 'react'
import { RenderEnhancer } from '@finetwork:ui/src/utils'
import {
  TabsContentProps,
  TabsListProps,
  TabsProps,
  TabsTriggerProps,
} from './types'
import {
  Line,
  StyledButtonTrigger,
  StyledParagraph,
  StyledTabs,
  StyledTabsContent,
  StyledTabsList,
  StyledTabsTrigger,
} from './styled'

//const [selectedValue, setSelectedValue] = React.useState<string>('')

export const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
  (
    {
      ariaLabel,
      width,
      type,
      height,
      direction = 'horizontal',
      selectedValue,
      setSelectedValue,
      children,
      ...props
    },
    ref
  ) => {
    const [customStyle, setCustomStyle] = React.useState({
      divList: {},
    })
    React.useEffect(() => {
      let css = {
        divList: {},
      }
      if (width) {
        css = {
          ...css,
          divList: {
            ...css.divList,
            width: `${width} !important`,
          },
        }
      }
      if (height) {
        css = {
          ...css,
          divList: {
            ...css.divList,
            height: `${height} !important`,
          },
        }
      }
      setCustomStyle(css)
    }, [width, height])

    return (
      <StyledTabsList
        aria-label={ariaLabel}
        direction={direction}
        css={customStyle.divList}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return null
          return React.cloneElement(child, {
            ...child.props,
            selectedValue,
            setSelectedValue,
            type,
          })
        })}
      </StyledTabsList>
    )
  }
)

export const TabsTrigger = React.forwardRef<HTMLDivElement, TabsTriggerProps>(
  (
    {
      textSize,
      value,
      width,
      height,
      type,
      endEnhancer,
      startEnhancer,
      textColor,
      disabled,
      children,
      selectedValue,
      setSelectedValue,
      bold = false,
      ...props
    },
    ref
  ) => {
    const [customStyle, setCustomStyle] = React.useState({
      divTrigger: {},
      textTrigger: {},
    })
    React.useEffect(() => {
      let css = {
        divTrigger: {},
        textTrigger: {},
      }
      if (width) {
        css = {
          ...css,
          divTrigger: {
            ...css.divTrigger,
            width: `${width} !important`,
          },
        }
      }
      if (height) {
        css = {
          ...css,
          divTrigger: {
            ...css.divTrigger,
            height: `${height} !important`,
          },
        }
      }
      if (textSize) {
        css = {
          ...css,
          textTrigger: {
            ...css.textTrigger,
            fontSize: `${textSize} !important`,
          },
        }
      }
      if (textColor) {
        css = {
          ...css,
          textTrigger: {
            ...css.textTrigger,
            color: `${textColor} !important`,
          },
        }
      }
      setCustomStyle(css)
    }, [width, height, textSize, textColor])

    return (
      <StyledTabsTrigger css={customStyle.divTrigger} {...props}>
        <StyledButtonTrigger
          type={type}
          onClick={() => value !== selectedValue && setSelectedValue(value)}
        >
          {startEnhancer && <RenderEnhancer Enhancer={startEnhancer} />}
          <StyledParagraph
            type={selectedValue === value ? type : 'withoutSelected'}
            bold={bold}
            css={customStyle.textTrigger}
          >
            {children}
          </StyledParagraph>
          {endEnhancer && <RenderEnhancer Enhancer={endEnhancer} />}
        </StyledButtonTrigger>
        <Line type={type} isSelected={selectedValue === value} />
      </StyledTabsTrigger>
    )
  }
)

export const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  ({ width, height, children, value, selectedValue, ...props }, ref) => {
    const [customStyle, setCustomStyle] = React.useState({
      divContent: {},
    })
    React.useEffect(() => {
      let css = {
        divContent: {},
      }
      if (width) {
        css = {
          ...css,
          divContent: {
            ...css.divContent,
            width: `${width} !important`,
          },
        }
      }
      if (height) {
        css = {
          ...css,
          divContent: {
            ...css.divContent,
            height: `${height} !important`,
          },
        }
      }
      setCustomStyle(css)
    }, [width, height])

    return (
      <StyledTabsContent
        isShow={value === selectedValue}
        css={customStyle.divContent}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return null
          return React.cloneElement(child, {
            ...child.props,
          })
        })}
      </StyledTabsContent>
    )
  }
)

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      background,
      defaultValue,
      borderRadius = '5px',
      width,
      height,
      children,
      type = 'standard',
      ...props
    },
    ref
  ) => {
    const [customStyle, setCustomStyle] = React.useState({
      tab: {},
    })
    React.useEffect(() => {
      let css = {
        tab: {},
      }
      if (background) {
        css = {
          ...css,
          tab: {
            ...css.tab,
            background: `${background} !important`,
          },
        }
      }
      if (borderRadius) {
        css = {
          ...css,
          tab: {
            ...css.tab,
            borderRadius: `${borderRadius} !important`,
          },
        }
      }
      if (width) {
        css = {
          ...css,
          tab: {
            ...css.tab,
            width: `${width} !important`,
          },
        }
      }
      if (height) {
        css = {
          ...css,
          tab: {
            ...css.tab,
            height: `${height} !important`,
          },
        }
      }
      setCustomStyle(css)
    }, [background, borderRadius, width, height])

    const [selectedValue, setSelectedValue] = React.useState(defaultValue)

    return (
      <StyledTabs /*kind={kind} type={type}*/ css={customStyle.tab} {...props}>
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return null
          return React.cloneElement(child, {
            ...child.props,
            selectedValue,
            setSelectedValue,
            type,
          })
        })}
      </StyledTabs>
    )
  }
)
