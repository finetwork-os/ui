import {
  animationCloseSelectMobile,
  animationSelectMobile,
  dialogAnimationClose,
  dialogAnimationOpen,
  fadeInBackground,
  fadeOutBackground,
  fullDialogAnimationClose,
  fullDialogAnimationOpen,
} from '@finetwork:ui/src/animations'
import { useControllScroll } from '@finetwork:ui/src/hooks/useControllScroll'
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
      borderRadius,
      closeButton = true,
      closeButtonSize = '15px',
      bottomSheet = false,
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

    const { disableScroll, allowScroll, allowScrollInSpecificComponent } =
      useControllScroll()

    React.useEffect(() => {
      let css = {
        dialog: {},
        closeButton: {},
      }
      if (borderRadius) {
        css = {
          ...css,
          dialog: {
            ...css.dialog,
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
            ...css.dialog,
            width: width,
          },
        }
      }
      setCustomStyle(css)
    }, [width, closeButtonSize, borderRadius])

    function handleDialogAnimation() {
      const dialogElement = dialogRef.current
      const overlayElement = overlayRef.current

      dialogElement.addEventListener('animationend', () => {
        if (isOpen) {
          overlayElement.style.display = 'block'
          dialogElement.style.display = 'block'
        } else {
          overlayElement.style.display = 'none'
          dialogElement.style.display = 'none'
        }
      })

      if (isOpen) {
        dialogElement.style.display = 'block'
        overlayElement.style.display = 'block'
      }

      if (!bottomSheet && width !== 'full') {
        dialogElement.style.animation = `${
          isOpen ? dialogAnimationOpen : dialogAnimationClose
        } linear 0.20s forwards`
      }

      if (bottomSheet) {
        dialogElement.style.animation = `${
          isOpen
            ? `${animationSelectMobile} linear`
            : `${animationCloseSelectMobile} linear`
        } 0.25s forwards`
      }

      if (width === 'full') {
        dialogElement.style.animation = `${
          isOpen ? fullDialogAnimationOpen : fullDialogAnimationClose
        } 0.4s ease forwards`
      }

      if (overlay) {
        overlayElement.style.animation = `${
          isOpen ? fadeInBackground : fadeOutBackground
        } 0.4s forwards`
      }
    }

    React.useEffect(() => {
      handleDialogAnimation()
    }, [isOpen, width, bottomSheet])

    React.useEffect(() => {
      if (isOpen) {
        dialogRef.current && dialogRef.current.focus()
        disableScroll()
        allowScrollInSpecificComponent(dialogRef)
        document.addEventListener('click', handleOutsideClick, true)
        document.addEventListener('keydown', handleKeyPress, true)
      } else {
        allowScroll()
        document.removeEventListener('click', handleOutsideClick, true)
        document.removeEventListener('keydown', handleKeyPress, true)
      }

      return () => {
        allowScroll()
        document.removeEventListener('click', handleOutsideClick, true)
        document.removeEventListener('keydown', handleKeyPress, true)
      }
    }, [isOpen])

    return (
      <>
        <Overlay ref={overlayRef} />
        <StyledDialog
          tabIndex={0}
          css={customStyle.dialog}
          ref={dialogRef}
          id={id}
          fullSize={width === 'full'}
          bottomSheet={bottomSheet}
          {...props}
        >
          {closeButton && (
            <CloseButton
              css={customStyle.closeButton}
              tabIndex={0}
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
