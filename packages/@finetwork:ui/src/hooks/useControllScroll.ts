const KEYS = { 37: 1, 38: 1, 39: 1, 40: 1 }

export const useControllScroll = () => {
  function preventDefault(e) {
    e.preventDefault()
    e.stopPropagation()
  }

  function preventScroll(e) {
    e.stopPropagation()
  }

  function preventDefaultForScrollKeys(e) {
    if (KEYS[e.keyCode]) {
      preventDefault(e)
      return false
    }
  }

  var supportsPassive = false
  try {
    window.addEventListener(
      'test',
      null,
      Object.defineProperty({}, 'passive', {
        get: function () {
          supportsPassive = true
        },
      })
    )
  } catch (e) {}

  let wheelOpt = supportsPassive ? { passive: false } : false
  // var wheelEvent =
  //   'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel'

  const disableScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    const scrollLeft = window.scrollX || document.documentElement.scrollLeft
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop)
    }
    window.addEventListener('wheel', preventDefault, wheelOpt)
    window.addEventListener('touchmove', preventDefault, wheelOpt)
    window.addEventListener('keydown', preventDefaultForScrollKeys, false)
  }
  const allowScroll = () => {
    window.onscroll = function () {}
    window.removeEventListener('wheel', preventDefault, false)
    window.removeEventListener('touchmove', preventDefault, false)
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false)
  }
  const allowScrollInSpecificComponent = (
    ref: React.MutableRefObject<HTMLDivElement>
  ) => {
    if (ref?.current.clientHeight < ref?.current.scrollHeight) {
      ref?.current?.addEventListener('wheel', preventScroll, {
        passive: false,
      })
      ref?.current?.addEventListener('touchmove', preventScroll, {
        passive: false,
      })
      ref?.current?.addEventListener(
        'keydown',
        preventDefaultForScrollKeys,
        false
      )
    }
  }

  return {
    disableScroll,
    allowScroll,
    allowScrollInSpecificComponent,
  }
}
