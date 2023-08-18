import { ref as d, openBlock as t, createElementBlock as l, toDisplayString as _, createElementVNode as c, Fragment as u, renderList as s } from "vue";
const p = (n, r) => {
  const o = n.__vccOpts || n;
  for (const [e, a] of r)
    o[e] = a;
  return o;
}, b = {
  __name: "HelloWorld",
  setup(n) {
    const r = d(0), o = () => {
      r.value++;
    };
    return (e, a) => (t(), l("button", {
      type: "button",
      onClick: o
    }, "count is " + _(r.value), 1));
  }
}, i = /* @__PURE__ */ p(b, [["__scopeId", "data-v-4a27bb39"]]), m = {
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
  setup(n) {
    return (r, o) => (t(), l("table", null, [
      c("thead", null, [
        (t(!0), l(u, null, s(n.fields, (e) => (t(), l("th", {
          key: e.label
        }, _(e.label), 1))), 128))
      ]),
      c("tbody", null, [
        (t(!0), l(u, null, s(n.fields, (e) => (t(), l(u, {
          key: e.label
        }, [
          (t(!0), l(u, null, s(n.rows, (a) => (t(), l("tr", {
            key: a.name
          }, [
            c("td", null, _(a[e.value]), 1)
          ]))), 128))
        ], 64))), 128))
      ])
    ]));
  }
};
export {
  i as HelloWorld,
  m as UiTable
};
