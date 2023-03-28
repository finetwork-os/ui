import * as React from 'react'
import { DOMEvent } from '../Select/types'
import {
  CloseButton,
  CloseButtonIcon,
  Overlay,
  StyledDialog,
  StyledDialogTrigger,
} from './styled'
import { DialogProps, DialogTriggerProps } from './types'

export const DialogTrigger = React.forwardRef<
  HTMLButtonElement,
  DialogTriggerProps
>(({ children, id, setIsOpen, ...props }, ref) => {
  return (
    <StyledDialogTrigger id={id} onClick={() => setIsOpen(true)} {...props}>
      {children}
    </StyledDialogTrigger>
  )
})

export const Dialog = React.forwardRef<HTMLDivElement, DialogProps>(
  (
    {
      children,
      id,
      overlay = true,
      width = 'auto',
      disabledScroll = true,
      borderRadius,
      closeButton = true,
      closeButtonSize = '15px',
      isOpen,
      setIsOpen,
      ...props
    },
    ref
  ) => {
    const dialogRef = React.useRef<HTMLDivElement>(null)

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
        setIsOpen(false)
      }
    }

    return (
      <>
        <Overlay open={overlay ? isOpen : false} />
        <StyledDialog
          css={customStyle.dialog}
          ref={dialogRef}
          id={id}
          open={isOpen}
          fullSize={width === 'full'}
          {...props}
        >
          {closeButton && (
            <CloseButton
              css={customStyle.closeButton}
              onClick={() => setIsOpen(false)}
            >
              <CloseButtonIcon />
            </CloseButton>
          )}
          {children}
        </StyledDialog>
      </>
    )
  }
)
