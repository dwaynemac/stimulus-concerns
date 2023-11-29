// agrega el método <tt>safeSetTimeout</tt> que es equivalente a <tt>setTimeout</tt> pero se cancela cuando se hace un <tt>turbo:before-cache</tt>
export const SafeTimeoutable = (controller) => {

  const safeSetTimeout = (handler,time) => {
    var id = setTimeout(handler, time)
    document.addEventListener("turbo:before-cache", () => {
      clearTimeout(id)
    })
  }

  Object.assign(controller, { safeSetTimeout })
}
