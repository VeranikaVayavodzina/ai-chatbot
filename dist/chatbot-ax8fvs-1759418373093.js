import re, { useState as te } from "react";
var b = { exports: {} }, h = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $;
function oe() {
  if ($) return h;
  $ = 1;
  var i = Symbol.for("react.transitional.element"), f = Symbol.for("react.fragment");
  function u(_, s, c) {
    var m = null;
    if (c !== void 0 && (m = "" + c), s.key !== void 0 && (m = "" + s.key), "key" in s) {
      c = {};
      for (var p in s)
        p !== "key" && (c[p] = s[p]);
    } else c = s;
    return s = c.ref, {
      $$typeof: i,
      type: _,
      key: m,
      ref: s !== void 0 ? s : null,
      props: c
    };
  }
  return h.Fragment = f, h.jsx = u, h.jsxs = u, h;
}
var v = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var I;
function ne() {
  return I || (I = 1, process.env.NODE_ENV !== "production" && (function() {
    function i(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Q ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case x:
          return "Fragment";
        case V:
          return "Profiler";
        case B:
          return "StrictMode";
        case G:
          return "Suspense";
        case Z:
          return "SuspenseList";
        case H:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case U:
            return "Portal";
          case J:
            return e.displayName || "Context";
          case q:
            return (e._context.displayName || "Context") + ".Consumer";
          case z:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case X:
            return r = e.displayName || null, r !== null ? r : i(e.type) || "Memo";
          case T:
            r = e._payload, e = e._init;
            try {
              return i(e(r));
            } catch {
            }
        }
      return null;
    }
    function f(e) {
      return "" + e;
    }
    function u(e) {
      try {
        f(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var o = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), f(e);
      }
    }
    function _(e) {
      if (e === x) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === T)
        return "<...>";
      try {
        var r = i(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var e = g.A;
      return e === null ? null : e.getOwner();
    }
    function c() {
      return Error("react-stack-top-frame");
    }
    function m(e) {
      if (N.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function p(e, r) {
      function o() {
        P || (P = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      o.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: o,
        configurable: !0
      });
    }
    function W() {
      var e = i(this.type);
      return C[e] || (C[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function L(e, r, o, n, R, k) {
      var a = o.ref;
      return e = {
        $$typeof: y,
        type: e,
        key: r,
        props: o,
        _owner: n
      }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: W
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: R
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: k
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function A(e, r, o, n, R, k) {
      var a = r.children;
      if (a !== void 0)
        if (n)
          if (K(a)) {
            for (n = 0; n < a.length; n++)
              O(a[n]);
            Object.freeze && Object.freeze(a);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else O(a);
      if (N.call(r, "key")) {
        a = i(e);
        var d = Object.keys(r).filter(function(ee) {
          return ee !== "key";
        });
        n = 0 < d.length ? "{key: someKey, " + d.join(": ..., ") + ": ...}" : "{key: someKey}", Y[a + n] || (d = 0 < d.length ? "{" + d.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          a,
          d,
          a
        ), Y[a + n] = !0);
      }
      if (a = null, o !== void 0 && (u(o), a = "" + o), m(r) && (u(r.key), a = "" + r.key), "key" in r) {
        o = {};
        for (var w in r)
          w !== "key" && (o[w] = r[w]);
      } else o = r;
      return a && p(
        o,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), L(
        e,
        a,
        o,
        s(),
        R,
        k
      );
    }
    function O(e) {
      S(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === T && (e._payload.status === "fulfilled" ? S(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function S(e) {
      return typeof e == "object" && e !== null && e.$$typeof === y;
    }
    var E = re, y = Symbol.for("react.transitional.element"), U = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), B = Symbol.for("react.strict_mode"), V = Symbol.for("react.profiler"), q = Symbol.for("react.consumer"), J = Symbol.for("react.context"), z = Symbol.for("react.forward_ref"), G = Symbol.for("react.suspense"), Z = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), H = Symbol.for("react.activity"), Q = Symbol.for("react.client.reference"), g = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, N = Object.prototype.hasOwnProperty, K = Array.isArray, j = console.createTask ? console.createTask : function() {
      return null;
    };
    E = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var P, C = {}, D = E.react_stack_bottom_frame.bind(
      E,
      c
    )(), F = j(_(c)), Y = {};
    v.Fragment = x, v.jsx = function(e, r, o) {
      var n = 1e4 > g.recentlyCreatedOwnerStacks++;
      return A(
        e,
        r,
        o,
        !1,
        n ? Error("react-stack-top-frame") : D,
        n ? j(_(e)) : F
      );
    }, v.jsxs = function(e, r, o) {
      var n = 1e4 > g.recentlyCreatedOwnerStacks++;
      return A(
        e,
        r,
        o,
        !0,
        n ? Error("react-stack-top-frame") : D,
        n ? j(_(e)) : F
      );
    };
  })()), v;
}
var M;
function ae() {
  return M || (M = 1, process.env.NODE_ENV === "production" ? b.exports = oe() : b.exports = ne()), b.exports;
}
var t = ae();
const se = "_app_18rh1_1", le = "_logoContainer_18rh1_9", ce = "_logo_18rh1_9", ie = "_logoReact_18rh1_27", ue = "_title_18rh1_31", fe = "_card_18rh1_38", de = "_button_18rh1_46", _e = "_count_18rh1_68", me = "_description_18rh1_74", pe = "_readTheDocs_18rh1_79", l = {
  app: se,
  logoContainer: le,
  logo: ce,
  logoReact: ie,
  title: ue,
  card: fe,
  button: de,
  count: _e,
  description: me,
  readTheDocs: pe
}, he = () => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    width: "31",
    height: "31",
    viewBox: "0 0 31 31",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          d: "m24.737 20.721-8.56 8.56a2.133 2.133 0 0 1-3.017 0l-8.56-8.56a2.133 2.133 0 0 1 0-3.017l8.56-8.56a2.133 2.133 0 0 1 3.017 0l8.56 8.56a2.133 2.133 0 0 1 0 3.017Z",
          fill: "url(#a)"
        }
      ),
      /* @__PURE__ */ t.jsx("defs", { children: /* @__PURE__ */ t.jsxs(
        "linearGradient",
        {
          id: "a",
          x1: "6",
          y1: "6",
          x2: "26",
          y2: "26",
          gradientUnits: "userSpaceOnUse",
          children: [
            /* @__PURE__ */ t.jsx("stop", { stopColor: "#41D1FF" }),
            /* @__PURE__ */ t.jsx("stop", { offset: "1", stopColor: "#BD34FE" })
          ]
        }
      ) })
    ]
  }
), ve = () => /* @__PURE__ */ t.jsxs(
  "svg",
  {
    width: "31",
    height: "31",
    viewBox: "0 0 31 31",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ t.jsx(
        "path",
        {
          d: "M15.5 18.875a3.375 3.375 0 1 0 0-6.75 3.375 3.375 0 0 0 0 6.75Z",
          fill: "#61DAFB"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          d: "M15.5 25.625c5.523 0 10-3.02 10-6.75s-4.477-6.75-10-6.75-10 3.02-10 6.75 4.477 6.75 10 6.75Z",
          stroke: "#61DAFB",
          strokeWidth: "1.5"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          d: "M21.25 22.25c2.761-4.784 2.761-10.716 0-15.5s-7.739-4.784-10.5 0-2.761 10.716 0 15.5 7.739 4.784 10.5 0Z",
          stroke: "#61DAFB",
          strokeWidth: "1.5"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "path",
        {
          d: "M9.75 22.25c-2.761-4.784-2.761-10.716 0-15.5s7.739-4.784 10.5 0 2.761 10.716 0 15.5-7.739 4.784-10.5 0Z",
          stroke: "#61DAFB",
          strokeWidth: "1.5"
        }
      )
    ]
  }
);
function Re() {
  const [i, f] = te(0);
  return /* @__PURE__ */ t.jsxs("div", { className: l.app, children: [
    /* @__PURE__ */ t.jsxs("div", { className: l.logoContainer, children: [
      /* @__PURE__ */ t.jsx("a", { href: "https://vite.dev", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ t.jsx("div", { className: l.logo, children: /* @__PURE__ */ t.jsx(he, {}) }) }),
      /* @__PURE__ */ t.jsx("a", { href: "https://react.dev", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ t.jsx("div", { className: `${l.logo} ${l.logoReact}`, children: /* @__PURE__ */ t.jsx(ve, {}) }) })
    ] }),
    /* @__PURE__ */ t.jsx("h1", { className: l.title, children: "AI ChatBot Plugin" }),
    /* @__PURE__ */ t.jsxs("div", { className: l.card, children: [
      /* @__PURE__ */ t.jsx(
        "button",
        {
          className: l.button,
          onClick: () => f((u) => u + 1),
          children: /* @__PURE__ */ t.jsxs("span", { className: l.count, children: [
            "count is ",
            i
          ] })
        }
      ),
      /* @__PURE__ */ t.jsx("p", { className: l.description, children: "ИЗМЕНЕН" })
    ] }),
    /* @__PURE__ */ t.jsx("p", { className: l.readTheDocs, children: "Click on the Vite and React logos to learn more" })
  ] });
}
export {
  Re as App,
  Re as default
};
