import JkAlert from './packages/alert'
import JkInput from './packages/input'
import JkStaticToFixed from './packages/static-to-fixed/index'

const Components = {
  JkAlert,
  JkInput,
  JkStaticToFixed
}

const install = (Vue, opts = {}) => {
  Object.keys(Components).forEach((name) => {
    Vue.component(name, Components[name])
  })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default { ...Components, install }
