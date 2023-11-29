import Cookie from "js.cookie";

// Agrega métodos:
// * dismiss (void) - esconde controller.element con d-none y guarda en cookie el dismiss
// * wasDismissed (boolean)
// Options:
// * id (string) - id para guardar en cookie
// * expiration (int) - días para expirar cookie
// * hideFunction (function) - función para esconder controller.element
export const Dismissable = (controller, options = {}) => {

  const defaultHideFunction = (element) => {
    element.classList.add("d-none")
  }

  let defaultOptions = {
    id: controller.identifier,
    expiration: 7,
    hideFunction: defaultHideFunction
  }
  const dismissableOptions = Object.assign({}, defaultOptions, options)


  // hides element with d-none
  // stores in cookie that user dismissed controller
  const dismiss = () => {
    dismissableOptions.hideFunction(controller.element)
    Cookie.set(`dismissed-${dismissableOptions.id}`, "yes", { expires: dismissableOptions.expiration })
  }

  const wasDismissed = () => {
    return Cookie.get(`dismissed-${dismissableOptions.id}`) === "yes"
  }

  Object.assign(controller, { dismiss, wasDismissed, dismissableOptions })
}
