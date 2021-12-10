var T = Object.defineProperty,
  H = Object.defineProperties
var x = Object.getOwnPropertyDescriptors
var L = Object.getOwnPropertySymbols
var I = Object.prototype.hasOwnProperty,
  K = Object.prototype.propertyIsEnumerable
var P = (e, s, A) =>
    s in e ? T(e, s, { enumerable: !0, configurable: !0, writable: !0, value: A }) : (e[s] = A),
  d = (e, s) => {
    for (var A in s || (s = {})) I.call(s, A) && P(e, A, s[A])
    if (L) for (var A of L(s)) K.call(s, A) && P(e, A, s[A])
    return e
  },
  B = (e, s) => H(e, x(s))
import {
  r as c,
  c as q,
  o as g,
  d as f,
  a as w,
  b as D,
  t as C,
  e as h,
  f as l,
  g as t,
  w as N,
  p as k,
  h as F,
  i as b,
  u as S,
  C as W,
  E as Q,
  j as i,
  k as R,
  l as y,
  m as G,
  n as X,
  q as Z,
  s as Y,
  v as z,
  x as j
} from './vendor.1c1f4b2f.js'
const _ = function () {
  const s = document.createElement('link').relList
  if (s && s.supports && s.supports('modulepreload')) return
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) n(o)
  new MutationObserver((o) => {
    for (const a of o)
      if (a.type === 'childList')
        for (const u of a.addedNodes) u.tagName === 'LINK' && u.rel === 'modulepreload' && n(u)
  }).observe(document, { childList: !0, subtree: !0 })
  function A(o) {
    const a = {}
    return (
      o.integrity && (a.integrity = o.integrity),
      o.referrerpolicy && (a.referrerPolicy = o.referrerpolicy),
      o.crossorigin === 'use-credentials'
        ? (a.credentials = 'include')
        : o.crossorigin === 'anonymous'
        ? (a.credentials = 'omit')
        : (a.credentials = 'same-origin'),
      a
    )
  }
  function n(o) {
    if (o.ep) return
    o.ep = !0
    const a = A(o)
    fetch(o.href, a)
  }
}
_()
var p = (e, s) => {
  for (const [A, n] of s) e[A] = n
  return e
}
const $ = {}
function ee(e, s) {
  const A = c('router-view')
  return g(), q(A)
}
var te = p($, [['render', ee]])
const se = 'modulepreload',
  V = {},
  Ae = './',
  oe = function (s, A) {
    return !A || A.length === 0
      ? s()
      : Promise.all(
          A.map((n) => {
            if (((n = `${Ae}${n}`), n in V)) return
            V[n] = !0
            const o = n.endsWith('.css'),
              a = o ? '[rel="stylesheet"]' : ''
            if (document.querySelector(`link[href="${n}"]${a}`)) return
            const u = document.createElement('link')
            if (
              ((u.rel = o ? 'stylesheet' : se),
              o || ((u.as = 'script'), (u.crossOrigin = '')),
              (u.href = n),
              document.head.appendChild(u),
              o)
            )
              return new Promise((r, v) => {
                u.addEventListener('load', r), u.addEventListener('error', v)
              })
          })
        ).then(() => s())
  }
var ne = './assets/device_main.dd1213a2.png',
  ae =
    'data:image/png;base64,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',
  ue =
    'data:image/png;base64,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',
  re =
    'data:image/png;base64,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',
  ce =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAABwCAYAAADG4PRLAAAAAXNSR0IArs4c6QAADS1JREFUeF7tnQWsLLkRRc+Gs2HaMJOCG0aFmZlpozAnCjNsmJkVZmZUmJmZmZk5Ooknenl/ZtrlthueuqQvfb1x227ftl2uulXej0VmPQL7zbr3S+dZAJz5R7AAuAA48xGYefeXGbgAOPMRmHn3lxm4ADjzEZh595cZuAA4+AgcCjgpcHTglMCJgDOkv/0JOBZwwh29+iPwReAwwB+ArwDfBb4M/AD4cfo3+IvUaHAuM1CQzgGcBjg7cBFg/xoDAHwN+ADwMeBLwAeBv1Squ3k1UwbwcMCVgMsC5wJO1nw0/tuAAL4TeDnw2YHaLG5migCeGLgNcDngVMVv1v/BXwCfBp4PvBT4c/8q69cwJQBdHq8P3DTtb/XftrzGTwEPAd4C/K68mvpPTgHAUwO3A24GHKL+K1at8UPAU9KsrFpxaWVjA3hb4K7A8UpfYKTn3gbcB/jISO3/r9mxADwP8KiknIw9BqXt/wZ4Ulpaf19aSd/nxgDw1sDDgcP37fxEnldjvTPwyTH6MySABwCPA645xos2blNjgR/msxu3s0/1QwF4IPAi4LRDv+DA7T0auOOQbQ4B4CWBFwDHGPLFRmzrWcAdgN8O0YfWAF4mqdxHG+Jlerah+ewnwN8B+9unz28ArjqESa4lgFcAXgJoEpuy/Ap4LvAm4HPJ4qLZ7orAlYHTFXb+7ckUqAG9mbQC8MLAq4CjNOt5nYpfCDwymczW1ahn44bAvYAjFTSp5caPQC9JE2kB4FmA98/gmHCndBbNGVhtsh59XFWi8kzgJtGHcsvXBlCLikvHlLXNvyVj+dNyBymV08x3XeCeBUZ27aj3CLaXVbwmgNb1uuT+yWp8pELXSUea0uZ1JD8QuEWggn8ClwfeGHgmq2hNAO8OPDir1fEKOehPrdS8BomnB/ZGNdxzAt+p1P5/qqkF4EXT0lmzbzXr0rd3Y+A1NSsF3O/1F+ZuGe9KbIJ/1epHDQAPnbzYZ6vVqcr1vBu4PfCZyvWuqvOY8Q7g2Jn13wp4cmbZzmI1ALwL8LDOloYv8DPgEUnTdA9qKedNzt4jZjTy08TrkVjVW/oCqHqtt7oWwaj0hWSYSUryUK5F5VvA+4DPl1ZY8NyNAI8MOaJp8Xo5BbvK9AXwZcDVuhpp9LvUBr3jGgwEzC97bJE7c/WMTrgHXgh4T0bZrUX6AHjW9JWP4ddzdrmXaPqakpwA+Chw3IxOeV6+eEa5ZgCqfXmwHVremxhrg1j7C17u2oAmuhzR5KhmWiylM3Cs2ecZSoLvFJbLbYPucSXH7KYBXY9NsZQCqOf5oOJWyx9U271b+eODPXn6ZA/uMuarHXv8UhEskhIAXd/lfxynqMV+D+kZeE6/KgZ7+olpn+5q8AmA7LwiKQHQfc/9bwyx7dz9ZYz+7WzTABxnVtcs9DzocawoHiMKoBZ5rQ4XHGl05GIePFLbJc0+JlmBtj0rA8Az5PNKGogCqM1P1X0sBrWzbwzNt2RsfUbWuQEyhrZtk1eUnqejAGoQfkbp21R4Tu3Ts1Mru2aFLu5ThSuWx4VtYvyiZGfJwiGJAjim5WX1Yj8EHp/MZPJNfAe9Dd9IAZyhARigsFqzDt1t8lfgEoCG95BEADxCGrSThFoYprAAfjMtVxKUtNRMRS6d6cgV6LBTIALgBYA3z4DrYpyCRmx5OVo5Pp6M3FIpxhB9hp/IaPjViYoY8pxEADT8q5Y3O+N9qhT5R1pW3TNfmYzHXwWkwg8lWq38iLrkC8D5gV92Fdz5ewRA1/E5WEG63l8PgKYuzViC2VrOnBn44srhbDVmP1siAL54jwWmqAwZr2HAzfezRyxeUGevy3mOCLZh3dkSATBHHc5ueEIFVX4M7TZTRQsxgPWhmRVfK7HZM4vHSE16vT2Y7kUpPkh3DIaGDxU/06TkiJzTELMvMgO/DZhBYi+KnvTacYvyQDWlRdKjyDC4ZWSAIwC61Gig3YtiZowaFiaN0p77DKnzYB4VPRimWMmWCIA/GsmFlP0yhQVdWfTflUQRmfZLoHTeqkFKqcilF67rblMAq5FRCwe61WP3A+5fULl8UDVYyUm1jPthtlpkBg4FoAZdD9o5xKCCcf+/R5x1Z0xmuEhd7peP7Tnb1rWnn1WNOFsiAJrVr8/y0NUpzV66i3SCCqBx9WpvZh5UeTI+T9+ZDlL3mqN2VZjxe1hpSIEtaostxBktizxbIgBqIThFds15BTV1mVTOuHLPYZtMXIcEDgtY3ohf4+0FUkKQJj73nhLxa89lF/gBGZLmWa2VmHfGbBfZEgHwez0Gal2H3pqWIaNY+8jxk4nPABv/r/PUPenXgOYpP4p1EbJ+EDpbJWc5s7eJzHOPGmZObCnhFSECoE5HE9L1la+nZUi3T00xyEaGlzPF/8vWNqRLV9MmMUGPXpb77vIYGFrtrHamC66zzqNGazGU+0GRRiIA6mz0ZfuIe5xxhM7mqYjKmTR9l3KXaMFzq3DvdZn2d0H0o2gtV0mhAtntRAB0xoQ0pF29MKRKOvyUREXJDIRjhAesGwdJywbpZEsEQNlgTvEScRmT8zGE+ybSvxtMiGfqPu0H1cyd1Meh637k8julpVOg3ed0trY8HuV+UH7c54uGDURmoKYi98GSfCmmK9Zi8eHctxmwnB/WazMIuK27ZFKk8BElAqBl5YSWZi7SXmgWiynKpZIf7sgjdk4jtrbQkEQAtGK1SMOnSkT1uHQPLWkv+ozcTWdiTph0tO6u8hKZXKEMnQtJFEDTdJQG6P88UfIl70xR9NtpDRojaMf7KlTyND6EJAqgHnltlaVqtxqWjk69+1MSz37aYku3h77vUhwyEAXQjpptSKdlqUiP90iiDdIDsnxNmcljygOAe4/YAfMMSOsISwmAkRDibR0yRNplVXOXkbd6xM0/vVOcGVpJWl66oeKidi0jbAyR6aBDuSijYQmAnpm0i5ozrLbopjHrhDZI1ftVXrOQfTDYKU1mXh8whP9xXdeM8/DejCIpAdCGbDTE3Qj0TurGMXfYHjV1ucG3EmM+JPnKih5a3D5kbhdn2ygF0BvEZDiXKjORgdJ7ofIUihkINCCvRaZ2r2QDgfZ2FjVc3LDxYikF0AaHCjXTG2BbUvtbxQV6fGg5yzcB5Ozrdd9EHwDPlJLaDOFmWQ2A5CM1WN0+tcS91qQ7Q76Hfdeh7ZGqlwbeB0A7of3uGrVGMrMetdWbV1pStetq/fBjHFJkCVwsZXns1W5fALVeGPtWg2CU+yLSJNQYa9xX1BU9q5NXNd8rCFRy1FhVevqKYXqRjL8b2+sLoBXLopJCPpRI5/N2lBpKjRqut4OuEy/vkCW2olOqsHl9kJRCB780zMA0mJ45vb+3t9QAUJaY15YOcRDWHSV5qYRFvXuw7Ld22XWxC1qbthGYvMPXPUy2XFSKvA6bGqkBoHWbC1pFoMRXGBkAY+38WGqIH4I3rMhO2yl+HF7/ui0JnUcOPRdRAI0S9kaXalILQDvkkuPlTy3FgfPQXUM2UUQ066nUbPIMlCo+nmf1uEuQriY1AbRTDq7O0VYiNcMrcfreLu3y6f63TvvUNuu+aNDLOinlBhmx5LJbVWoD6MUfGqRbBoIaGu2hXr9kqSLjR7ZpJnvGlNqgBrpbZE2bnC4qnl8NoqkutQG0g3IqBVGVu6VoynNgoglTPbAbNasiskk8a+4m8qr5es9SVJrSKVsA6AsORU8wkklzlFmackUPh2Fc20SfpRxWmWLG/3mB1abjxrZ6qistuxtrBaDtSGLShtmV6C134DeV82oBrz7IEaOdzBiRszp4/jMFZOn1eWrlapxNU0O3BNABdeP2K2x5LYHOXmdJFyFIx61L5xBGa/dXsyp6DUJTaQ2gnT93ok+cvOGbqDnq4tpEHNYJbZ4bmV+txbsjtNXWNLhv7PMQANq4io3LaUtrjQdrjxi7RWVFk9gQhCWVHCOeBpOhAPSFpGDoyVeJaCXG+qkBe7yQ36nmqMNUp21LMb+ZhoyirLt9OjYkgKt+ml7YL7WFB0MzmBYUAXTZbK1A+U7aZzVuh1Jk9QFt57NjAGj7LqVeotiHnlhrDErr0RFrDm+X55asua39GwtAO+WBWouHh/EpJpHdNnDut16pKjtvVBkTwNWLr2LcjU4di9qXC4KsdP2RGgJKzXi5bWWVmwKAq46axkvnsBSNKcTr7RxASU8yyaMXJ2eB0KfQlABcvYeJFCT7SDfXTDaWuK+ZBvn1ifY+Vsrmye6BXcDIQ9Hdox1SGoMJB1ozx6S3u695ubF0+6mFhO8zZlOcgeuA9cih5uqh3FtjtGkKcJ9YPvcwTV06WPUvCpjmOH2ORdfgdH2RLX6fC4C7312/o6Y5E6pqmFYRUgHy3LdKFSI9XyC8m8i/rZL/aHbTe7H619c53AKX7DrnCmD2C+71gguAM0d4AXABcOYjMPPuLzNwAXDmIzDz7i8zcAFw5iMw8+4vM3ABcOYjMPPuLzNwAXDmIzDz7v8bwrkhj3wAJCEAAAAASUVORK5CYII=',
  ie = './assets/use_car.374ade50.png'
const le = f({
    name: 'home',
    components: {},
    setup() {
      const e = w({ loading: !1 })
      return (
        D(() => {
          console.log('onMounted')
        }),
        d({}, C(e))
      )
    }
  }),
  m = (e) => (k('data-v-6a79b86d'), (e = e()), F(), e),
  de = { class: 'home' },
  ge = { class: 'hader-image hader-hero' },
  pe = { class: 'home-content' },
  me = { class: 'hero-body' },
  ve = m(() =>
    t(
      'div',
      { class: 'hero-title' },
      [
        t('p', null, 'leki\u667A\u80FD\u8F66\u63A7\uFF0C'),
        t('p', null, '\u4E00\u952E\u5F00\u542F\u667A\u80FD\u7528\u8F66\u65F6\u4EE3\u3002')
      ],
      -1
    )
  ),
  Be = m(() =>
    t(
      'div',
      { class: 'hero-detail' },
      '\u6570\u5B57\u94A5\u5319 / \u591A\u91CD\u52A0\u5BC6 / \u8FDC\u7A0B\u5171\u4EAB / \u591A\u6B3E\u8F66\u578B',
      -1
    )
  ),
  fe = b('\u7ACB\u5373\u4E0B\u8F7D'),
  we = m(() =>
    t(
      'section',
      { class: 'device-feature-box' },
      [
        b('\xA0 '),
        t('div', { class: 'home-content' }, [
          t('div', { class: 'device-feature' }, [
            t('div', { class: 'feature-media' }, [
              t('img', { src: ne, alt: '' }),
              t('p', null, 'Leki\u667A\u80FD\u94A5\u5319\u5B9E\u62CD\u56FE')
            ]),
            t('div', { class: 'feature-right' }, [
              t('div', { class: 'feature-content' }, [
                t('p', { class: 'feature-annotation' }, 'THE NEW CHAPTER'),
                t(
                  'p',
                  { class: 'feature-title' },
                  'Leki\uFF0C\u667A\u80FD\u7528\u8F66\u65B0\u7BC7\u7AE0\u3002'
                ),
                t('div', { class: 'divider' })
              ]),
              t('div', { class: 'feture-nav' }, [
                t('div', { class: 'nav-item' }, [
                  t('div', { class: 'item-container' }, [t('img', { src: ae, alt: '' })]),
                  t('span', null, '\u4E00\u952E\u89E3\u9501')
                ]),
                t('div', { class: 'nav-item' }, [
                  t('div', { class: 'item-container' }, [t('img', { src: ue, alt: '' })]),
                  t('span', null, '\u591A\u91CD\u4FDD\u969C')
                ]),
                t('div', { class: 'nav-item' }, [
                  t('div', { class: 'item-container' }, [t('img', { src: re, alt: '' })]),
                  t('span', null, '\u63A5\u8FD1\u611F\u5E94')
                ]),
                t('div', { class: 'nav-item' }, [
                  t('div', { class: 'item-container' }, [t('img', { src: ce, alt: '' })]),
                  t('span', null, '\u8F66\u8F86\u5171\u4EAB')
                ])
              ])
            ])
          ])
        ])
      ],
      -1
    )
  ),
  De = m(() =>
    t(
      'section',
      { class: 'device-introduce-box' },
      [
        t('div', { class: 'home-content' }, [
          t('div', null, [t('img', { src: ie, alt: '' })]),
          t('div')
        ])
      ],
      -1
    )
  )
function Ce(e, s, A, n, o, a) {
  const u = c('Navigation'),
    r = c('el-button')
  return (
    g(),
    h('div', de, [
      l(u),
      t('main', null, [
        t('header', ge, [
          t('div', pe, [
            t('div', me, [
              ve,
              Be,
              l(r, { class: 'hero-btn', type: 'primary' }, { default: N(() => [fe]), _: 1 })
            ])
          ])
        ]),
        we,
        De
      ])
    ])
  )
}
var he = p(le, [
  ['render', Ce],
  ['__scopeId', 'data-v-6a79b86d']
])
const Ne = {},
  ke = () => {
    for (
      var e = navigator.userAgent,
        s = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'],
        A = !0,
        n = 0;
      n < s.length;
      n++
    )
      if (e.indexOf(s[n]) > 0) {
        A = !1
        break
      }
    return A
  },
  Fe = () => {
    navigator.userAgent.toLocaleLowerCase()
    var e = navigator.userAgent,
      s = !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
    return s
  },
  E = () => {
    Fe()
      ? (window.location.href = 'https://itunes.apple.com/cn/app/id1570793242?mt=8')
      : (window.location.href =
          'https://download.bq04.com/apps/60dac7eb0d81cc2e21ab3df0/install?download_token=39b644477d32a9d8de357b761fb3bd16&source=update')
  }
var be =
    'data:image/png;base64,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',
  Ye = './assets/details.3208b192.png'
const Oe = f({
    name: 'details',
    components: {},
    setup() {
      const e = S(),
        s = w({ loading: !1 })
      D(() => {
        console.log('onMounted'), console.log('route', e.query), e.query.model === 'download' && E()
      })
      async function A() {
        const n = new W('.service')
        let o = '\u590D\u5236\u8D26\u53F7\u6210\u529F'
        n.on('success', function (a) {
          a.clearSelection(), (o = '\u590D\u5236\u8D26\u53F7\u6210\u529F')
        }),
          n.on('error', function (a) {
            a.clearSelection(),
              (o =
                '\u590D\u5236\u8D26\u53F7\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u6DFB\u52A0\u5FAE\u4FE1\uFF1AOazon_Leki')
          }),
          ke()
            ? (await Q.confirm(
                'Leki\u5BA2\u670D\u5FAE\u4FE1: Oazon_Leki',
                '\u8054\u7CFB\u5BA2\u670D',
                {
                  confirmButtonText: '\u70B9\u51FB\u590D\u5236',
                  cancelButtonText: '\u53D6\u6D88',
                  type: 'info'
                }
              ),
              i({ type: 'success', message: o }))
            : (i({ type: 'success', message: o }),
              (window.location.href = 'weixin://dl/business/?t=D7J4yx4jZOh'))
      }
      return B(d({}, C(s)), { toWechat: A })
    }
  }),
  J = (e) => (k('data-v-b92f58dc'), (e = e()), F(), e),
  Le = { class: 'details' },
  Pe = J(() => t('img', { src: be, alt: 'service' }, null, -1)),
  Ve = [Pe],
  Ee = J(() => t('img', { src: Ye, alt: 'details' }, null, -1))
function Je(e, s, A, n, o, a) {
  const u = c('Navigation'),
    r = c('el-affix')
  return (
    g(),
    h('div', Le, [
      t('main', null, [
        l(u),
        l(
          r,
          { offset: 550, position: 'top' },
          {
            default: N(() => [
              t(
                'div',
                {
                  class: 'service',
                  onClick: s[0] || (s[0] = (...v) => e.toWechat && e.toWechat(...v)),
                  'data-clipboard-text': 'Oazon_Leki'
                },
                Ve
              )
            ]),
            _: 1
          }
        ),
        Ee
      ])
    ])
  )
}
var Ue = p(Oe, [
  ['render', Je],
  ['__scopeId', 'data-v-b92f58dc']
])
const Me = [
    { path: '/', name: 'Details', component: Ue },
    { path: '/home', name: 'Home', component: he },
    { path: '/vuex', name: 'Vuex', component: Ne },
    {
      path: '/axios',
      name: 'Axios',
      component: () =>
        oe(
          () => import('./axios.5a524506.js'),
          ['assets/axios.5a524506.js', 'assets/vendor.1c1f4b2f.js']
        )
    },
    { path: '/app', name: 'App', redirect: { name: 'Details', query: { model: 'download' } } },
    { path: '/:catchAll(.*)', redirect: '/' }
  ],
  O = R({ history: y(), routes: Me }),
  Te = { count: 0 }
var He = G({
  state() {
    return Te
  },
  mutations: {
    increment(e) {
      e.count++
    }
  },
  actions: {
    increment(e) {
      e.commit('increment')
    }
  },
  getters: {
    double(e) {
      return 2 * e.count
    }
  }
})
const xe = 'lekicar.com',
  U = X.create({ baseURL: xe, timeout: 2e4 })
U.interceptors.request.use(
  (e) => e,
  (e) => Promise.reject(e)
)
U.interceptors.response.use(
  (e) => e,
  (e) => {
    if (e.response && e.response.data) {
      const s = e.response.status,
        A = e.response.data.message
      i.error(`Code: ${s}, Message: ${A}`), console.error('[Axios Error]', e.response)
    } else i.error(`${e}`)
    return Promise.reject(e)
  }
)
const Ie = f({
    name: 'Navigation',
    components: {},
    setup() {
      const e = w({ loading: !1, showMenu: !1 })
      D(() => {
        console.log('onMounted')
      })
      function s() {
        e.showMenu = !e.showMenu
      }
      function A() {
        ;(e.showMenu = !1),
          i({ type: 'info', message: '\u6B64\u529F\u80FD\u6682\u672A\u5F00\u653E' })
      }
      function n(a) {
        if (((e.showMenu = !1), a !== '/')) {
          i({ type: 'info', message: '\u6B64\u529F\u80FD\u6682\u672A\u5F00\u653E' })
          return
        }
        O.push(a)
      }
      function o() {
        ;(e.showMenu = !1), E()
      }
      return B(d({}, C(e)), { switchMenu: s, downloadHelp: A, toLink: n, downloadLink: o })
    }
  }),
  M = (e) => (k('data-v-bc34beda'), (e = e()), F(), e),
  Ke = { class: 'navigation' },
  qe = { class: 'navigation-l-content clear' },
  Se = { class: 'navigation-content clear' },
  We = M(() => t('div', { class: 'navigation-logo' }, [t('a', { href: '/' }, 'Leki')], -1)),
  Qe = { class: 'navigation-download' },
  Re = b('\u4E0B\u8F7D Leki\u8F66\u63A7'),
  ye = { class: 'navigation-menu' },
  Ge = { class: 'menu' },
  Xe = { class: 'menu-category-list' },
  Ze = { class: 'menu-category' },
  ze = { class: 'menu-category' },
  je = M(() => t('span', { class: 'menu-title' }, '\u5E2E\u52A9\u624B\u518C', -1)),
  _e = [je]
function $e(e, s, A, n, o, a) {
  const u = c('el-button')
  return (
    g(),
    h('div', Ke, [
      t('div', qe, [
        t('div', Se, [
          t('button', {
            class: 'navigation-menu-button',
            onClick: s[0] || (s[0] = (...r) => e.switchMenu && e.switchMenu(...r))
          }),
          We,
          t(
            'div',
            { class: Z(['navigation-items clear', { 'items-is-open': e.showMenu }]) },
            [
              t('div', Qe, [
                l(
                  u,
                  { class: 'download-leki', onClick: e.downloadLink },
                  { default: N(() => [Re]), _: 1 },
                  8,
                  ['onClick']
                )
              ]),
              t('div', ye, [
                t('nav', Ge, [
                  t('ul', Xe, [
                    t('li', Ze, [
                      t(
                        'span',
                        {
                          class: 'menu-title',
                          onClick: s[1] || (s[1] = Y((r) => e.toLink('/'), ['stop']))
                        },
                        '\u9996\u9875'
                      )
                    ]),
                    t('li', ze, [
                      t(
                        'span',
                        {
                          class: 'menu-title',
                          onClick: s[2] || (s[2] = Y((r) => e.toLink('/product'), ['stop']))
                        },
                        '\u4EA7\u54C1\u4E2D\u5FC3'
                      )
                    ]),
                    t(
                      'li',
                      {
                        class: 'menu-category',
                        onClick:
                          s[3] ||
                          (s[3] = Y((...r) => e.downloadHelp && e.downloadHelp(...r), ['stop']))
                      },
                      _e
                    )
                  ])
                ])
              ])
            ],
            2
          )
        ])
      ])
    ])
  )
}
var et = p(Ie, [
  ['render', $e],
  ['__scopeId', 'data-v-bc34beda']
])
const tt = [et]
function st(e) {
  tt.forEach((s) => {
    console.log(s.name, s.displayName), e.component(s.name || s.displayName, s)
  })
}
;(async () => {
  const e = z(te)
  st(e), e.use(He), e.use(j), e.use(O), await O.isReady(), e.mount('#app')
})()
export { p as _ }
