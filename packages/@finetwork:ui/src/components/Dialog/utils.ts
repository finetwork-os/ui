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

type handleDialogProps = {
  dialogElement: HTMLElement
  overlayElement: HTMLElement
  isOpen: boolean
  hasBottomSheet: boolean
  hasOverlay: boolean
  width: string
}

type elementsDisplayTypes = {
  elements: HTMLElement[]
  displayValue: 'block' | 'none'
}

type elementAnimationTypes = {
  element: HTMLElement
  animationName: {
    (): string
    name: string
  }
  animationConfig: string
}

function setElementsDisplay({ elements, displayValue }: elementsDisplayTypes) {
  elements.forEach((element) => {
    element.style.display = displayValue
  })
}

function setElementAnimation({
  element,
  animationName,
  animationConfig,
}: elementAnimationTypes) {
  element.style.animation = `${animationName} ${animationConfig}`
}

export const handleDialogAnimation = ({
  dialogElement,
  overlayElement,
  isOpen,
  hasBottomSheet,
  hasOverlay,
  width,
}: handleDialogProps) => {
  const displayValue = isOpen ? 'block' : 'none'
  const elements = [dialogElement, overlayElement]

  dialogElement.addEventListener('animationend', () => {
    setElementsDisplay({ elements, displayValue })
  })

  if (isOpen) setElementsDisplay({ elements, displayValue })

  if (!hasBottomSheet && width !== 'full') {
    setElementAnimation({
      element: dialogElement,
      animationName: isOpen ? dialogAnimationOpen : dialogAnimationClose,
      animationConfig: 'linear 0.25s forwards',
    })
  }

  if (hasBottomSheet) {
    setElementAnimation({
      element: dialogElement,
      animationName: isOpen
        ? animationSelectMobile
        : animationCloseSelectMobile,
      animationConfig: 'linear 0.25s forwards',
    })
  }

  if (width === 'full') {
    setElementAnimation({
      element: dialogElement,
      animationName: isOpen
        ? fullDialogAnimationOpen
        : fullDialogAnimationClose,
      animationConfig: '0.3s ease forwards',
    })
  }

  if (hasOverlay) {
    setElementAnimation({
      element: overlayElement,
      animationName: isOpen ? fadeInBackground : fadeOutBackground,
      animationConfig: '0.3s forwards',
    })
  }
}
