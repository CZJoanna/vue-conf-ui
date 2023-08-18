import { ref as k, openBlock as s, createElementBlock as a, toDisplayString as w, createElementVNode as h, Fragment as v, renderList as b, getCurrentScope as T, onScopeDispose as C, unref as L, watch as $, computed as E, createCommentVNode as W, useSlots as N, normalizeStyle as I, renderSlot as D } from "vue";
const A = (e, o) => {
  const l = e.__vccOpts || e;
  for (const [t, u] of o)
    l[t] = u;
  return l;
}, F = {
  __name: "HelloWorld",
  setup(e) {
    const o = k(0), l = () => {
      o.value++;
    };
    return (t, u) => (s(), a("button", {
      type: "button",
      onClick: l
    }, "count is " + w(o.value), 1));
  }
}, te = /* @__PURE__ */ A(F, [["__scopeId", "data-v-91fce50c"]]), ne = {
  __name: "UiTable",
  props: {
    fields: {
      type: Array,
      default: () => []
    },
    rows: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    return (o, l) => (s(), a("table", null, [
      h("thead", null, [
        (s(!0), a(v, null, b(e.fields, (t) => (s(), a("th", {
          key: t.label
        }, w(t.label), 1))), 128))
      ]),
      h("tbody", null, [
        (s(!0), a(v, null, b(e.fields, (t) => (s(), a(v, {
          key: t.label
        }, [
          (s(!0), a(v, null, b(e.rows, (u) => (s(), a("tr", {
            key: u.name
          }, [
            h("td", null, w(u[t.value]), 1)
          ]))), 128))
        ], 64))), 128))
      ])
    ]));
  }
};
function j(e) {
  return T() ? (C(e), !0) : !1;
}
function M(e) {
  return typeof e == "function" ? e() : L(e);
}
const O = typeof window < "u", S = () => {
}, B = /* @__PURE__ */ H();
function H() {
  var e;
  return O && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && /* @__PURE__ */ /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
function g(e) {
  var o;
  const l = M(e);
  return (o = l == null ? void 0 : l.$el) != null ? o : l;
}
const P = O ? window : void 0;
function x(...e) {
  let o, l, t, u;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([l, t, u] = e, o = P) : [o, l, t, u] = e, !o)
    return S;
  Array.isArray(l) || (l = [l]), Array.isArray(t) || (t = [t]);
  const _ = [], i = () => {
    _.forEach((r) => r()), _.length = 0;
  }, d = (r, f, n, c) => (r.addEventListener(f, n, c), () => r.removeEventListener(f, n, c)), p = $(
    () => [g(o), M(u)],
    ([r, f]) => {
      i(), r && _.push(
        ...l.flatMap((n) => t.map((c) => d(r, n, c, f)))
      );
    },
    { immediate: !0, flush: "post" }
  ), m = () => {
    p(), i();
  };
  return j(m), m;
}
let V = !1;
function R(e, o, l = {}) {
  const { window: t = P, ignore: u = [], capture: _ = !0, detectIframe: i = !1 } = l;
  if (!t)
    return;
  B && !V && (V = !0, Array.from(t.document.body.children).forEach((n) => n.addEventListener("click", S)), t.document.documentElement.addEventListener("click", S));
  let d = !0;
  const p = (n) => u.some((c) => {
    if (typeof c == "string")
      return Array.from(t.document.querySelectorAll(c)).some((y) => y === n.target || n.composedPath().includes(y));
    {
      const y = g(c);
      return y && (n.target === y || n.composedPath().includes(y));
    }
  }), r = [
    x(t, "click", (n) => {
      const c = g(e);
      if (!(!c || c === n.target || n.composedPath().includes(c))) {
        if (n.detail === 0 && (d = !p(n)), !d) {
          d = !0;
          return;
        }
        o(n);
      }
    }, { passive: !0, capture: _ }),
    x(t, "pointerdown", (n) => {
      const c = g(e);
      c && (d = !n.composedPath().includes(c) && !p(n));
    }, { passive: !0 }),
    i && x(t, "blur", (n) => {
      setTimeout(() => {
        var c;
        const y = g(e);
        ((c = t.document.activeElement) == null ? void 0 : c.tagName) === "IFRAME" && !(y != null && y.contains(t.document.activeElement)) && o(n);
      }, 0);
    })
  ].filter(Boolean);
  return () => r.forEach((n) => n());
}
const U = {
  relative: "",
  "w-full": "",
  "h-30px": ""
}, q = ["value"], z = {
  key: 0,
  absolute: "",
  "top-30px": "",
  "left-0": "",
  "bg-white": "",
  "w-full": "",
  "h-auto": "",
  border: "0px x-1px gray-4 solid"
}, G = ["onClick"], J = {
  __name: "MEmailInput",
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    options: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: o }) {
    const l = e, t = k(null), u = k(!1), _ = k(!1);
    R(t, (r) => {
      u.value = !1;
    });
    const i = E(() => l.options.suffix ? l.options.suffix.map((r) => l.modelValue.split("@")[0] + r) : []), d = (r) => {
      o("update:modelValue", r);
    }, p = () => {
      u.value = l.modelValue.length !== 0;
    }, m = (r) => {
      _.value = !0, u.value = !1, d(r), setTimeout(() => {
        _.value = !1;
      }, 300);
    };
    return $(
      () => l.modelValue,
      () => {
        _.value || (u.value = l.modelValue.length !== 0);
      }
    ), (r, f) => (s(), a("div", U, [
      h("input", {
        ref_key: "inputRef",
        ref: t,
        "w-full": "",
        "h-full": "",
        "pl-10px": "",
        value: e.modelValue,
        border: "1px gray-4 solid",
        onInput: f[0] || (f[0] = (n) => d(n.target.value)),
        onFocus: p
      }, null, 40, q),
      u.value ? (s(), a("ul", z, [
        (s(!0), a(v, null, b(i.value, (n) => (s(), a("li", {
          key: n,
          border: "0px b-1px gray-4 solid"
        }, [
          h("a", {
            "cursor-pointer": "",
            "w-full": "",
            block: "",
            "py-5px": "",
            "pl-10px": "",
            "text-14px": "",
            "hover:bg-gray-1": "",
            onClick: (c) => m(n)
          }, w(n), 9, G)
        ]))), 128))
      ])) : W("", !0)
    ]));
  }
}, le = /* @__PURE__ */ A(J, [["__scopeId", "data-v-5d750eee"]]);
const K = { class: "vue-pure-table" }, Q = { id: "columns" }, X = {
  id: "rows",
  class: "flex-col"
}, Y = { key: 0 }, Z = {
  __name: "MPureTable",
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    rows: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    const o = e, l = N(), t = E(() => o.columns.map((i) => i.field)), u = E(() => o.rows.map((i) => {
      const d = [];
      return Object.keys(i).forEach((p, m) => {
        t.value[m] && d.push(i[t.value[m]]);
      }), d;
    })), _ = (i) => Object.keys(l).includes(i);
    return (i, d) => (s(), a("div", K, [
      h("ul", Q, [
        (s(!0), a(v, null, b(o.columns, (p) => (s(), a("li", {
          key: p.label,
          class: "table_columns",
          style: I(p.style)
        }, w(p.label), 5))), 128))
      ]),
      h("ul", X, [
        (s(!0), a(v, null, b(u.value, (p, m) => (s(), a("li", { key: m }, [
          h("ul", null, [
            (s(!0), a(v, null, b(p, (r, f) => (s(), a("li", {
              key: r.id,
              style: I(o.columns[f].style)
            }, [
              _(o.columns[f].field) ? D(i.$slots, o.columns[f].field, {
                key: 1,
                data: { rowData: r, rowTarget: u.value[m] }
              }, void 0, !0) : (s(), a("p", Y, w(r), 1))
            ], 4))), 128))
          ])
        ]))), 128))
      ])
    ]));
  }
}, oe = /* @__PURE__ */ A(Z, [["__scopeId", "data-v-38a75e1e"]]);
export {
  te as HelloWorld,
  le as MEmailInput,
  oe as MPureTable,
  ne as UiTable
};
