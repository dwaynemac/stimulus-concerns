// Agrega métodos:
// * log
// * error
// Options:
// * debug: true/false, si es false los .log no se impriminen. Default: false
// Usage example:
// import { Loggable } from "./concerns/loggable"
// ... in stimulus controller:
//  connect() {
//    Loggable(this, { debug: false })
//    this.log("connected")
export const Loggable = (controller, options = {}) => {
  let defaultOptions = {debug: false}
  const loggableOptions = Object.assign({}, defaultOptions, options)

  if (loggableOptions.debug) {
    var log = console.log.bind(window.console, controller.identifier)
    var error = console.error.bind(window.console, controller.identifier)
  } else {
    var log = (...args) => {}
    var error = (...args) => {}
  }

  // agrego los métodos al controller
  // también agrego las opctiones para que sean accesibles en los métodos
  Object.assign(controller, { log, error, loggableOptions })
}
