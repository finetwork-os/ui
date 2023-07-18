export const useControllScroll = () => {
  const keys = { 37: 1, 38: 1, 39: 1, 40: 1 }

  function preventScroll(e) {
    e.preventDefault()
  }

  function preventDefault(e) {
    e.preventDefault()
    e.stopPropagation()
  }

  function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
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

  var wheelOpt = supportsPassive ? { passive: false } : false
  var wheelEvent =
    'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel'

  const disableScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    const scrollLeft = window.scrollX || document.documentElement.scrollLeft
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop)
    }
    window.addEventListener('DOMMouseScroll', preventDefault, false) // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt) // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt) // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false)
  }
  const allowScroll = () => {
    window.onscroll = function () {}
    window.removeEventListener('DOMMouseScroll', preventDefault, false)
    window.removeEventListener(wheelEvent, preventDefault, false)
    window.removeEventListener('touchmove', preventDefault, false)
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false)
  }
  const allowScrollInSpecificComponent = (
    ref: React.MutableRefObject<HTMLDivElement>
  ) => {
    if (ref?.current.clientHeight < ref?.current.scrollHeight) {
      ref?.current?.addEventListener('DOMMouseScroll', preventScroll, false)
      ref?.current?.addEventListener(wheelEvent, preventScroll, {
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
  // const disableScrollInSpecificComponent = (
  //   ref: React.MutableRefObject<HTMLDivElement>
  // ) => {
  //   if (ref?.current.clientHeight < ref?.current.scrollHeight) {
  //     ref?.current?.addEventListener('DOMMouseScroll', preventScroll, false)
  //     ref?.current?.addEventListener(wheelEvent, preventScroll, {
  //       passive: false,
  //     })
  //     ref?.current?.addEventListener('touchmove', preventScroll, {
  //       passive: false,
  //     })
  //     ref?.current?.addEventListener(
  //       'keydown',
  //       preventDefaultForScrollKeys,
  //       false
  //     )
  //   }
  // }
  return {
    disableScroll,
    allowScroll,
    allowScrollInSpecificComponent,
  }
}
