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
import {
  dialogAnimationClose,
  dialogAnimationOpen,
  fadeInBackground,
  fadeOutBackground,
} from '@finetwork:ui/src/animations'

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
    const overlayRef = React.useRef<HTMLDivElement>(null)

    const [customStyle, setCustomStyle] = React.useState({
      dialog: {},
      closeButton: {},
    })
    React.useEffect(() => {
      console.log(overlay)
      if (isOpen === true) {
        const dialogElement = dialogRef.current
        const overlayElement = overlayRef.current
        dialogElement.style.display = 'flex'
        overlayElement.style.display = 'block'
        dialogElement.style.animation = `${dialogAnimationOpen} 0.4s cubic-bezier(0.69,-0.37,0.24,1.48) forwards`
        if (overlay === true) {
          overlayElement.style.animation = `${fadeInBackground} 0.4s forwards`
        }
      }
      if (isOpen === false) {
        const dialogElement = dialogRef.current
        const overlayElement = overlayRef.current
        dialogElement.style.animation = `${dialogAnimationClose} 0.4s cubic-bezier(0.69,-0.37,0.24,1.48) forwards`
        if (overlay) {
          overlayElement.style.animation = `${fadeOutBackground} 0.4s forwards`
        }
        setTimeout(() => {
          dialogElement.style.display = 'none'
          overlayElement.style.display = 'none'
        }, 400)
      }
    }, [isOpen])

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

      document.body.style.cssText = isOpen
        ? `
          position: fixed;
          inline-size: 100%;
          overflow-y: scroll;
        `
        : ''

      return () => {
        document.removeEventListener('click', handleOutsideClick, true)
        document.removeEventListener('keydown', handleKeyPress, true)
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
        <Overlay ref={overlayRef} />
        <StyledDialog
          css={customStyle.dialog}
          ref={dialogRef}
          id={id}
          //open={isOpen}
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
