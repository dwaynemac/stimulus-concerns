// Agrega métodos:
// * show
// * hide
// * showAll
// * hideAll
// Options:
// * hiddenClassName: d-none
// Usage example:
// import { ShowHide } from "./concerns/showHide"
// ... in stimulus controller:
//  connect() {
//    ShowHide(this, { hiddenClassName: "d-none" })
//    this.hide(this.buttonTarget)
export const ShowHide = (controller, options = {}) => {
  let defaultOptions = {hiddenClassName: "d-none"}
  const showHideOptions = Object.assign({}, defaultOptions, options)

  const show = (element) => {
    element.classList.remove(showHideOptions.hiddenClassName)
  }

  const showAll = (elements) => {
    elements.forEach(element => {show(element)})
  }

  const hide = (element) => {
    element.classList.add(showHideOptions.hiddenClassName)
  }

  const hideAll = (elements) => {
    elements.forEach(element => {hide(element)})
  }

  // agrego los métodos al controller
  // también agrego las opctiones para que sean accesibles en los métodos
  Object.assign(controller, { show, hide, showAll, hideAll, showHideOptions })
}
