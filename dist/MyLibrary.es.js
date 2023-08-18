import { ref as g, openBlock as p, createElementBlock as f, toDisplayString as x, getCurrentScope as C, onScopeDispose as L, unref as T, watch as M, computed as E, createElementVNode as h, Fragment as w, renderList as k, createCommentVNode as W, useSlots as N, normalizeStyle as I, renderSlot as D } from "vue";
const A = (t, l) => {
  const o = t.__vccOpts || t;
  for (const [n, u] of l)
    o[n] = u;
  return o;
}, F = {
  __name: "HelloWorld",
  setup(t) {
    const l = g(0), o = () => {
      l.value++;
    };
    return (n, u) => (p(), f("button", {
      type: "button",
      onClick: o
    }, "count is " + x(l.value), 1));
  }
}, te = /* @__PURE__ */ A(F, [["__scopeId", "data-v-91fce50c"]]);
function H(t) {
  return C() ? (L(t), !0) : !1;
}
function O(t) {
  return typeof t == "function" ? t() : T(t);
}
const P = typeof window < "u", S = () => {
}, j = /* @__PURE__ */ B();
function B() {
  var t;
  return P && ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.userAgent) && /* @__PURE__ */ /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
function v(t) {
  var l;
  const o = O(t);
  return (l = o == null ? void 0 : o.$el) != null ? l : o;
}
const $ = P ? window : void 0;
function b(...t) {
  let l, o, n, u;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([o, n, u] = t, l = $) : [l, o, n, u] = t, !l)
    return S;
  Array.isArray(o) || (o = [o]), Array.isArray(n) || (n = [n]);
  const _ = [], a = () => {
    _.forEach((s) => s()), _.length = 0;
  }, c = (s, d, e, r) => (s.addEventListener(d, e, r), () => s.removeEventListener(d, e, r)), i = M(
    () => [v(l), O(u)],
    ([s, d]) => {
      a(), s && _.push(
        ...o.flatMap((e) => n.map((r) => c(s, e, r, d)))
      );
    },
    { immediate: !0, flush: "post" }
  ), m = () => {
    i(), a();
  };
  return H(m), m;
}
let V = !1;
function R(t, l, o = {}) {
  const { window: n = $, ignore: u = [], capture: _ = !0, detectIframe: a = !1 } = o;
  if (!n)
    return;
  j && !V && (V = !0, Array.from(n.document.body.children).forEach((e) => e.addEventListener("click", S)), n.document.documentElement.addEventListener("click", S));
  let c = !0;
  const i = (e) => u.some((r) => {
    if (typeof r == "string")
      return Array.from(n.document.querySelectorAll(r)).some((y) => y === e.target || e.composedPath().includes(y));
    {
      const y = v(r);
      return y && (e.target === y || e.composedPath().includes(y));
    }
  }), s = [
    b(n, "click", (e) => {
      const r = v(t);
      if (!(!r || r === e.target || e.composedPath().includes(r))) {
        if (e.detail === 0 && (c = !i(e)), !c) {
          c = !0;
          return;
        }
        l(e);
      }
    }, { passive: !0, capture: _ }),
    b(n, "pointerdown", (e) => {
      const r = v(t);
      r && (c = !e.composedPath().includes(r) && !i(e));
    }, { passive: !0 }),
    a && b(n, "blur", (e) => {
      setTimeout(() => {
        var r;
        const y = v(t);
        ((r = n.document.activeElement) == null ? void 0 : r.tagName) === "IFRAME" && !(y != null && y.contains(n.document.activeElement)) && l(e);
      }, 0);
    })
  ].filter(Boolean);
  return () => s.forEach((e) => e());
}
const q = {
  relative: "",
  "w-full": "",
  "h-30px": ""
}, z = ["value"], G = {
  key: 0,
  absolute: "",
  "top-30px": "",
  "left-0": "",
  "bg-white": "",
  "w-full": "",
  "h-auto": "",
  border: "0px x-1px gray-4 solid"
}, J = ["onClick"], K = {
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
  setup(t, { emit: l }) {
    const o = t, n = g(null), u = g(!1), _ = g(!1);
    R(n, (s) => {
      u.value = !1;
    });
    const a = E(() => o.options.suffix ? o.options.suffix.map((s) => o.modelValue.split("@")[0] + s) : []), c = (s) => {
      l("update:modelValue", s);
    }, i = () => {
      u.value = o.modelValue.length !== 0;
    }, m = (s) => {
      _.value = !0, u.value = !1, c(s), setTimeout(() => {
        _.value = !1;
      }, 300);
    };
    return M(
      () => o.modelValue,
      () => {
        _.value || (u.value = o.modelValue.length !== 0);
      }
    ), (s, d) => (p(), f("div", q, [
      h("input", {
        ref_key: "inputRef",
        ref: n,
        "w-full": "",
        "h-full": "",
        "pl-10px": "",
        value: t.modelValue,
        border: "1px gray-4 solid",
        onInput: d[0] || (d[0] = (e) => c(e.target.value)),
        onFocus: i
      }, null, 40, z),
      u.value ? (p(), f("ul", G, [
        (p(!0), f(w, null, k(a.value, (e) => (p(), f("li", {
          key: e,
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
            onClick: (r) => m(e)
          }, x(e), 9, J)
        ]))), 128))
      ])) : W("", !0)
    ]));
  }
}, oe = /* @__PURE__ */ A(K, [["__scopeId", "data-v-5d750eee"]]);
const Q = { class: "vue-pure-table" }, U = { id: "columns" }, X = {
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
  setup(t) {
    const l = t, o = N(), n = E(() => l.columns.map((a) => a.field)), u = E(() => l.rows.map((a) => {
      const c = [];
      return Object.keys(a).forEach((i, m) => {
        n.value[m] && c.push(a[n.value[m]]);
      }), c;
    })), _ = (a) => Object.keys(o).includes(a);
    return (a, c) => (p(), f("div", Q, [
      h("ul", U, [
        (p(!0), f(w, null, k(l.columns, (i) => (p(), f("li", {
          key: i.label,
          class: "table_columns",
          style: I(i.style)
        }, x(i.label), 5))), 128))
      ]),
      h("ul", X, [
        (p(!0), f(w, null, k(u.value, (i, m) => (p(), f("li", { key: m }, [
          h("ul", null, [
            (p(!0), f(w, null, k(i, (s, d) => (p(), f("li", {
              key: s.id,
              style: I(l.columns[d].style)
            }, [
              _(l.columns[d].field) ? D(a.$slots, l.columns[d].field, {
                key: 1,
                data: { rowData: s, rowTarget: u.value[m] }
              }, void 0, !0) : (p(), f("p", Y, x(s), 1))
            ], 4))), 128))
          ])
        ]))), 128))
      ])
    ]));
  }
}, ne = /* @__PURE__ */ A(Z, [["__scopeId", "data-v-38a75e1e"]]);
export {
  te as HelloWord,
  oe as MEmailInput,
  ne as MPureTable
};
