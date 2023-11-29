export const VariousHelpers = (controller, options = {}) => {

  const capitalize = (string) => {
    return string[0].toUpperCase() + string.slice(1);
  }

  const isTouchEnabled = () => {
    return ( 'ontouchstart' in window ) || ( navigator.maxTouchPoints > 0 ) || ( navigator.msMaxTouchPoints > 0 );
  }

  // agrego los métodos al controller
  // también agrego las opctiones para que sean accesibles en los métodos
  Object.assign(controller, {
    capitalize,
    isTouchEnabled
  })
}
