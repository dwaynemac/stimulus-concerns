export const CsrfTokenable = (controller, options = {}) => {

  const getCsrfToken = () => {
    let token = document.querySelector('meta[name="csrf-token"]').attributes.content.value
    console.log("token:", token)
    return token
  }

  Object.assign(controller, { getCsrfToken })
}
