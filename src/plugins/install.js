import * as plugins from '../plugins'
import { api, http, consts } from '../util'
function on (type, fn) {
  const el = this.$el
  if (el.attachEvent) {
    el.attacheEvent('on' + type, fn)
  } else {
    el.addEventListener(type, fn, false)
  }
}
export default {
  install (Vue, options) {
    Vue.prototype.v_on = on
    Vue.prototype.$rulemodal = plugins.ruleModal
    Vue.prototype.$plugin = plugins
    Vue.prototype.$http = http
    Vue.prototype.$api = api
    Vue.prototype.$const = consts
  }
}
