import * as React from 'react'
import { DOMEvent } from '../Select/types'
import {
  ButtonChildren,
  CloseButton,
  CloseButtonIcon,
  Overlay,
  StyledDialog,
} from './styled'
import { DialogProps } from './types'

export const Dialog = React.forwardRef<HTMLDivElement, DialogProps>(
  (
    {
      children,
      id,
      overlay = true,
      width = 'auto',
      disabledScroll = true,
      borderRadius,
      fullSize,
      closeButton = true,
      closeButtonSize = '15px',
      content,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false)

    const dialogRef = React.useRef<HTMLDivElement>(null)
    const buttonRef = React.useRef<HTMLButtonElement>(null)

    const [customStyle, setCustomStyle] = React.useState({
      dialog: {},
      closeButton: {},
    })

    React.useEffect(() => {
      let css = {
        dialog: {},
        closeButton: {},
      }
      if (borderRadius) {
        css = {
          ...css,
          dialog: {
            borderRadius: borderRadius,
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

      setCustomStyle(css)
    }, [])

    React.useEffect(() => {
      if (isOpen) {
        document.addEventListener('click', handleOutsideClick, true)
        document.addEventListener('keydown', handleKeyPress, true)
      } else {
        document.removeEventListener('click', handleOutsideClick, true)
        document.removeEventListener('keydown', handleKeyPress, true)
      }
      if (disabledScroll) {
        document.documentElement.style.overflow = isOpen ? 'hidden' : 'auto'
      } else {
        document.documentElement.style.overflow = 'unset'
      }
    }, [isOpen])

    function handleOutsideClick(e: DOMEvent<HTMLInputElement>) {
      if (!dialogRef.current?.contains(e.target)) {
        return setIsOpen(false)
      }
    }
    function handleKeyPress(e) {
      if (e.code === 'Escape') {
        buttonRef.current.blur()
        return setIsOpen(false)
      }
    }

    return (
      <>
        <Overlay open={overlay ? isOpen : false} />
        <ButtonChildren onClick={() => setIsOpen(true)}>
          {children}
        </ButtonChildren>
        <StyledDialog
          css={customStyle.dialog}
          ref={dialogRef}
          id={id}
          open={isOpen}
          fullSize={width === 'full'}
        >
          {closeButton && (
            <CloseButton
              css={customStyle.closeButton}
              onClick={() => setIsOpen(false)}
            >
              <CloseButtonIcon />
            </CloseButton>
          )}
          {content}
        </StyledDialog>
      </>
    )
  }
)
