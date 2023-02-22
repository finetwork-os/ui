import * as React from 'react'
import { RenderEnhancer } from '@finetwork:ui/src/utils'
import {
  TabsContentProps,
  TabsListProps,
  TabsProps,
  TabsTriggerProps,
} from './types'
import {
  StyledButtonTrigger,
  StyledParagraph,
  StyledTabs,
  StyledTabsContent,
  StyledTabsList,
  StyledTabsTrigger,
} from './styled'

export const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
  (
    { type, direction, selectedValue, setSelectedValue, children, ...props },
    ref
  ) => {
    return (
      <StyledTabsList direction={direction} {...props}>
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
    }, [textSize, textColor])

    return (
      <StyledTabsTrigger css={customStyle.divTrigger} {...props}>
        <StyledButtonTrigger
          type={disabled ? 'disabled' : type}
          onClick={() =>
            value !== selectedValue && !disabled && setSelectedValue(value)
          }
          isSelected={selectedValue === value}
        >
          {startEnhancer && <RenderEnhancer Enhancer={startEnhancer} />}
          <StyledParagraph
            type={disabled ? 'disabled' : type}
            bold={bold}
            css={customStyle.textTrigger}
          >
            {children}
          </StyledParagraph>
          {endEnhancer && <RenderEnhancer Enhancer={endEnhancer} />}
        </StyledButtonTrigger>
      </StyledTabsTrigger>
    )
  }
)

export const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  ({ children, value, selectedValue, ...props }, ref) => {
    return (
      <StyledTabsContent isShow={value === selectedValue} {...props}>
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
      defaultValue,
      borderRadius = '5px',
      width,
      height,
      children,
      direction = 'vertical',
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
    }, [borderRadius, width, height])

    const [selectedValue, setSelectedValue] = React.useState(defaultValue)

    return (
      <StyledTabs direction={direction} css={customStyle.tab} {...props}>
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return null
          return React.cloneElement(child, {
            ...child.props,
            selectedValue,
            setSelectedValue,
            type,
            direction,
          })
        })}
      </StyledTabs>
    )
  }
)
