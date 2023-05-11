export function handleDialogCssProps(borderRadius, closeButtonSize, width) {
  let css = {
    dialog: {},
    closeButton: {},
  }
  if (borderRadius) {
    css = {
      ...css,
      dialog: {
        borderRadius,
      },
    }
  }
  if (closeButtonSize) {
    css = {
      ...css,
      closeButton: {
        width: closeButtonSize,
        height: closeButtonSize,
      },
    }
  }
  if (width !== 'full' && width !== 'auto') {
    css = {
      ...css,
      dialog: {
        width: width,
      },
    }
  }

  return css
}
