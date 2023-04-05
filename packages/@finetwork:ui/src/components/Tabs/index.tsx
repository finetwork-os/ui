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
import { TabsProvider, TabsContext } from './context'

export const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
  (
    {
      type,
      direction,
      handleChange,
      justifyContent,
      gap,
      width,
      children,
      borderBottomColor,
      ...props
    },
    ref
  ) => {
    const [customStyle, setCustomStyle] = React.useState({
      tabList: {},
    })
    React.useEffect(() => {
      let css = {
        tabList: {},
      }
      if (justifyContent) {
        css = {
          ...css,
          tabList: {
            ...css.tabList,
            justifyContent: `${justifyContent}`,
          },
        }
      }
      if (gap) {
        css = {
          ...css,
          tabList: {
            ...css.tabList,
            gap: `${gap}`,
          },
        }
      }
      if (width) {
        css = {
          ...css,
          tabList: {
            ...css.tabList,
            width: `${width}`,
          },
        }
      }
      if (borderBottomColor) {
        css = {
          ...css,
          tabList: {
            ...css.tabList,
            borderBottom: `1px solid ${borderBottomColor}`,
          },
        }
      }
      setCustomStyle(css)
    }, [justifyContent, gap, width])
    return (
      <StyledTabsList
        direction={direction}
        css={customStyle.tabList}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return null
          return React.cloneElement(child, {
            ...child.props,
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
      width,

      bold = false,
      ...props
    },
    ref
  ) => {
    const { selectedValue, setSelectedValue } = React.useContext(TabsContext)
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
      if (width) {
        css = {
          ...css,
          divTrigger: {
            ...css.divTrigger,
            width: `${width}`,
          },
        }
      }
      setCustomStyle(css)
    }, [textSize, textColor, width])

    return (
      <StyledTabsTrigger css={customStyle.divTrigger} {...props}>
        <StyledButtonTrigger
          css={customStyle.divTrigger}
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
  ({ children, value, ...props }, ref) => {
    const { selectedValue } = React.useContext(TabsContext)
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
      direction = 'horizontal',
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

    return (
      <TabsProvider defaultValue={defaultValue}>
        <StyledTabs direction={direction} css={customStyle.tab} {...props}>
          {React.Children.map(children, (child) => {
            if (!React.isValidElement(child)) return null
            return React.cloneElement(child, {
              ...child.props,
              type,
              direction,
            })
          })}
        </StyledTabs>
      </TabsProvider>
    )
  }
)
