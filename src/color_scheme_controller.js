import { Controller } from "https://ga.jspm.io/npm:@hotwired/stimulus@3.2.1/dist/stimulus.js"

// This controller is used to set the color scheme of the page
export default class extends Controller {
  connect() {
    this.registerListenEvent()
    this.setTheme()
  }

  setTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // dark mode
      this.element.dataset.bsTheme = "dark"
    } else {
      this.element.dataset.bsTheme = "light"
    }
  }

  registerListenEvent(){
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => e.matches && this.setTheme())
    window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", e => e.matches && this.setTheme())
    window.matchMedia("(prefers-color-scheme: dark)").addListener(e => e.matches && this.setTheme())
    window.matchMedia("(prefers-color-scheme: light)").addListener(e => e.matches && this.setTheme())
  }
}
