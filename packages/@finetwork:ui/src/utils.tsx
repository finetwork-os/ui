import * as React from 'react'

import { darken, lighten } from 'polished'

import { Colors } from './components/Theme/types'
import { isValidElementType } from 'react-is'

export const RenderEnhancer: React.FC<{ Enhancer: any }> = ({ Enhancer }) => {
  if (typeof Enhancer === 'string') {
    return Enhancer
  }
  if (isValidElementType(Enhancer)) {
    const RenderEnhancer = Enhancer as any
    return <RenderEnhancer />
  }
  return Enhancer
}

export const deepMerge = (target: any, source: any) => {
  for (const key of Object.keys(source)) {
    if (source[key] instanceof Object) {
      Object.assign(source[key], deepMerge(target[key], source[key]))
    }
  }

  Object.assign(target || {}, source)
  return target
}

export const recalculateColors = (colors: Colors): Colors => {
  const primary100 = colors.primary100 || lighten(0.5, colors.primary || '')
  const primary200 = colors.primary200 || lighten(0.4, colors.primary || '')
  const primary300 = colors.primary300 || lighten(0.3, colors.primary || '')
  const primary400 = colors.primary400 || lighten(0.2, colors.primary || '')
  const primary500 = colors.primary
  const primary600 = colors.primary600 || darken(0.2, colors.primary || '')
  const primary700 = colors.primary700 || darken(0.3, colors.primary || '')
  const primary800 = colors.primary800 || darken(0.4, colors.primary || '')
  const primary900 = colors.primary900 || darken(0.5, colors.primary || '')
  const secondary100 =
    colors.secondary100 || lighten(0.5, colors.secondary || '')
  const secondary200 =
    colors.secondary200 || lighten(0.4, colors.secondary || '')
  const secondary300 =
    colors.secondary300 || lighten(0.3, colors.secondary || '')
  const secondary400 =
    colors.secondary400 || lighten(0.2, colors.secondary || '')
  const secondary500 = colors.secondary
  const secondary600 =
    colors.secondary600 || darken(0.2, colors.secondary || '')
  const secondary700 =
    colors.secondary700 || darken(0.3, colors.secondary || '')
  const secondary800 =
    colors.secondary800 || darken(0.4, colors.secondary || '')
  const secondary900 =
    colors.secondary900 || darken(0.5, colors.secondary || '')
  const tertiary100 = colors.tertiary100 || lighten(0.5, colors.tertiary || '')
  const tertiary200 = colors.tertiary200 || lighten(0.4, colors.tertiary || '')
  const tertiary300 = colors.tertiary300 || lighten(0.3, colors.tertiary || '')
  const tertiary400 = colors.tertiary400 || lighten(0.2, colors.tertiary || '')
  const tertiary500 = colors.tertiary
  const tertiary600 = colors.tertiary600 || darken(0.2, colors.tertiary || '')
  const tertiary700 = colors.tertiary700 || darken(0.3, colors.tertiary || '')
  const tertiary800 = colors.tertiary800 || darken(0.4, colors.tertiary || '')
  const tertiary900 = colors.tertiary900 || darken(0.5, colors.tertiary || '')
  const linkText100 = colors.linkText100 || lighten(0.5, colors.linkText || '')
  const linkText200 = colors.linkText200 || lighten(0.4, colors.linkText || '')
  const linkText300 = colors.linkText300 || lighten(0.3, colors.linkText || '')
  const linkText400 = colors.linkText400 || lighten(0.2, colors.linkText || '')
  const linkText500 = colors.linkText
  const linkText600 = colors.linkText600 || darken(0.2, colors.linkText || '')
  const linkText700 = colors.linkText700 || darken(0.3, colors.linkText || '')
  const linkText800 = colors.linkText800 || darken(0.4, colors.linkText || '')
  const linkText900 = colors.linkText900 || darken(0.5, colors.linkText || '')
  return {
    ...colors,
    primary100,
    primary200,
    primary300,
    primary400,
    primary500,
    primary600,
    primary700,
    primary800,
    primary900,
    secondary100,
    secondary200,
    secondary300,
    secondary400,
    secondary500,
    secondary600,
    secondary700,
    secondary800,
    secondary900,
    tertiary100,
    tertiary200,
    tertiary300,
    tertiary400,
    tertiary500,
    tertiary600,
    tertiary700,
    tertiary800,
    tertiary900,
    linkText100,
    linkText200,
    linkText300,
    linkText400,
    linkText500,
    linkText600,
    linkText700,
    linkText800,
    linkText900,
  }
}

export const getCoords = (elem: Element | HTMLElement) => {
  const box = elem.getBoundingClientRect()
  const body = document.body
  const docEl = document.documentElement
  const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop
  const scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft
  const clientTop = docEl.clientTop || body.clientTop || 0
  const clientLeft = docEl.clientLeft || body.clientLeft || 0
  const top = box.top + scrollTop - clientTop
  const bottom = box.bottom + scrollTop - clientTop
  const left = box.left + scrollLeft - clientLeft
  const right = box.right + scrollLeft - clientLeft
  const width = box.width

  return {
    top: Math.round(top),
    bottom: Math.round(bottom),
    left: Math.round(left),
    right: Math.round(right),
    width: Math.round(width),
  }
}
