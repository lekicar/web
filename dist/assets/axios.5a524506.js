var c = Object.defineProperty
var t = Object.getOwnPropertySymbols
var r = Object.prototype.hasOwnProperty,
  d = Object.prototype.propertyIsEnumerable
var n = (s, e, o) =>
    e in s ? c(s, e, { enumerable: !0, configurable: !0, writable: !0, value: o }) : (s[e] = o),
  a = (s, e) => {
    for (var o in e || (e = {})) r.call(e, o) && n(s, o, e[o])
    if (t) for (var o of t(e)) d.call(e, o) && n(s, o, e[o])
    return s
  }
import { _ as i } from './index.4e48cebb.js'
import { d as f, a as p, b as _, t as l, e as m, o as u } from './vendor.1c1f4b2f.js'
const x = f({
    name: 'axios',
    components: {},
    setup() {
      const s = p({ loading: !1 })
      return (
        _(() => {
          console.log('onMounted')
        }),
        a({}, l(s))
      )
    }
  }),
  b = { class: '' }
function v(s, e, o, $, g, h) {
  return u(), m('div', b, 'de s')
}
var M = i(x, [['render', v]])
export { M as default }
