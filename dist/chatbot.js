var ve = { exports: {} }, fe = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ye;
function Qe() {
  if (Ye) return fe;
  Ye = 1;
  var O = Symbol.for("react.transitional.element"), c = Symbol.for("react.fragment");
  function j(U, k, w) {
    var Y = null;
    if (w !== void 0 && (Y = "" + w), k.key !== void 0 && (Y = "" + k.key), "key" in k) {
      w = {};
      for (var P in k)
        P !== "key" && (w[P] = k[P]);
    } else w = k;
    return k = w.ref, {
      $$typeof: O,
      type: U,
      key: Y,
      ref: k !== void 0 ? k : null,
      props: w
    };
  }
  return fe.Fragment = c, fe.jsx = j, fe.jsxs = j, fe;
}
var le = {}, Ee = { exports: {} }, l = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function Xe() {
  if (xe) return l;
  xe = 1;
  var O = Symbol.for("react.transitional.element"), c = Symbol.for("react.portal"), j = Symbol.for("react.fragment"), U = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), w = Symbol.for("react.consumer"), Y = Symbol.for("react.context"), P = Symbol.for("react.forward_ref"), ee = Symbol.for("react.suspense"), se = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), H = Symbol.for("react.activity"), B = Symbol.iterator;
  function W(t) {
    return t === null || typeof t != "object" ? null : (t = B && t[B] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var F = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, te = Object.assign, G = {};
  function L(t, n, s) {
    this.props = t, this.context = n, this.refs = G, this.updater = s || F;
  }
  L.prototype.isReactComponent = {}, L.prototype.setState = function(t, n) {
    if (typeof t != "object" && typeof t != "function" && t != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, t, n, "setState");
  }, L.prototype.forceUpdate = function(t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate");
  };
  function Q() {
  }
  Q.prototype = L.prototype;
  function re(t, n, s) {
    this.props = t, this.context = n, this.refs = G, this.updater = s || F;
  }
  var X = re.prototype = new Q();
  X.constructor = re, te(X, L.prototype), X.isPureReactComponent = !0;
  var N = Array.isArray;
  function ne() {
  }
  var E = { H: null, A: null, T: null, S: null }, ae = Object.prototype.hasOwnProperty;
  function A(t, n, s) {
    var a = s.ref;
    return {
      $$typeof: O,
      type: t,
      key: n,
      ref: a !== void 0 ? a : null,
      props: s
    };
  }
  function V(t, n) {
    return A(t.type, n, t.props);
  }
  function oe(t) {
    return typeof t == "object" && t !== null && t.$$typeof === O;
  }
  function y(t) {
    var n = { "=": "=0", ":": "=2" };
    return "$" + t.replace(/[=:]/g, function(s) {
      return n[s];
    });
  }
  var K = /\/+/g;
  function I(t, n) {
    return typeof t == "object" && t !== null && t.key != null ? y("" + t.key) : n.toString(36);
  }
  function M(t) {
    switch (t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw t.reason;
      default:
        switch (typeof t.status == "string" ? t.then(ne, ne) : (t.status = "pending", t.then(
          function(n) {
            t.status === "pending" && (t.status = "fulfilled", t.value = n);
          },
          function(n) {
            t.status === "pending" && (t.status = "rejected", t.reason = n);
          }
        )), t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw t.reason;
        }
    }
    throw t;
  }
  function C(t, n, s, a, d) {
    var v = typeof t;
    (v === "undefined" || v === "boolean") && (t = null);
    var f = !1;
    if (t === null) f = !0;
    else
      switch (v) {
        case "bigint":
        case "string":
        case "number":
          f = !0;
          break;
        case "object":
          switch (t.$$typeof) {
            case O:
            case c:
              f = !0;
              break;
            case x:
              return f = t._init, C(
                f(t._payload),
                n,
                s,
                a,
                d
              );
          }
      }
    if (f)
      return d = d(t), f = a === "" ? "." + I(t, 0) : a, N(d) ? (s = "", f != null && (s = f.replace(K, "$&/") + "/"), C(d, n, s, "", function(z) {
        return z;
      })) : d != null && (oe(d) && (d = V(
        d,
        s + (d.key == null || t && t.key === d.key ? "" : ("" + d.key).replace(
          K,
          "$&/"
        ) + "/") + f
      )), n.push(d)), 1;
    f = 0;
    var b = a === "" ? "." : a + ":";
    if (N(t))
      for (var T = 0; T < t.length; T++)
        a = t[T], v = b + I(a, T), f += C(
          a,
          n,
          s,
          v,
          d
        );
    else if (T = W(t), typeof T == "function")
      for (t = T.call(t), T = 0; !(a = t.next()).done; )
        a = a.value, v = b + I(a, T++), f += C(
          a,
          n,
          s,
          v,
          d
        );
    else if (v === "object") {
      if (typeof t.then == "function")
        return C(
          M(t),
          n,
          s,
          a,
          d
        );
      throw n = String(t), Error(
        "Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return f;
  }
  function $(t, n, s) {
    if (t == null) return t;
    var a = [], d = 0;
    return C(t, a, "", "", function(v) {
      return n.call(s, v, d++);
    }), a;
  }
  function Z(t) {
    if (t._status === -1) {
      var n = t._result;
      n = n(), n.then(
        function(s) {
          (t._status === 0 || t._status === -1) && (t._status = 1, t._result = s);
        },
        function(s) {
          (t._status === 0 || t._status === -1) && (t._status = 2, t._result = s);
        }
      ), t._status === -1 && (t._status = 0, t._result = n);
    }
    if (t._status === 1) return t._result.default;
    throw t._result;
  }
  var q = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, ue = {
    map: $,
    forEach: function(t, n, s) {
      $(
        t,
        function() {
          n.apply(this, arguments);
        },
        s
      );
    },
    count: function(t) {
      var n = 0;
      return $(t, function() {
        n++;
      }), n;
    },
    toArray: function(t) {
      return $(t, function(n) {
        return n;
      }) || [];
    },
    only: function(t) {
      if (!oe(t))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return t;
    }
  };
  return l.Activity = H, l.Children = ue, l.Component = L, l.Fragment = j, l.Profiler = k, l.PureComponent = re, l.StrictMode = U, l.Suspense = ee, l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = E, l.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(t) {
      return E.H.useMemoCache(t);
    }
  }, l.cache = function(t) {
    return function() {
      return t.apply(null, arguments);
    };
  }, l.cacheSignal = function() {
    return null;
  }, l.cloneElement = function(t, n, s) {
    if (t == null)
      throw Error(
        "The argument must be a React element, but you passed " + t + "."
      );
    var a = te({}, t.props), d = t.key;
    if (n != null)
      for (v in n.key !== void 0 && (d = "" + n.key), n)
        !ae.call(n, v) || v === "key" || v === "__self" || v === "__source" || v === "ref" && n.ref === void 0 || (a[v] = n[v]);
    var v = arguments.length - 2;
    if (v === 1) a.children = s;
    else if (1 < v) {
      for (var f = Array(v), b = 0; b < v; b++)
        f[b] = arguments[b + 2];
      a.children = f;
    }
    return A(t.type, d, a);
  }, l.createContext = function(t) {
    return t = {
      $$typeof: Y,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, t.Provider = t, t.Consumer = {
      $$typeof: w,
      _context: t
    }, t;
  }, l.createElement = function(t, n, s) {
    var a, d = {}, v = null;
    if (n != null)
      for (a in n.key !== void 0 && (v = "" + n.key), n)
        ae.call(n, a) && a !== "key" && a !== "__self" && a !== "__source" && (d[a] = n[a]);
    var f = arguments.length - 2;
    if (f === 1) d.children = s;
    else if (1 < f) {
      for (var b = Array(f), T = 0; T < f; T++)
        b[T] = arguments[T + 2];
      d.children = b;
    }
    if (t && t.defaultProps)
      for (a in f = t.defaultProps, f)
        d[a] === void 0 && (d[a] = f[a]);
    return A(t, v, d);
  }, l.createRef = function() {
    return { current: null };
  }, l.forwardRef = function(t) {
    return { $$typeof: P, render: t };
  }, l.isValidElement = oe, l.lazy = function(t) {
    return {
      $$typeof: x,
      _payload: { _status: -1, _result: t },
      _init: Z
    };
  }, l.memo = function(t, n) {
    return {
      $$typeof: se,
      type: t,
      compare: n === void 0 ? null : n
    };
  }, l.startTransition = function(t) {
    var n = E.T, s = {};
    E.T = s;
    try {
      var a = t(), d = E.S;
      d !== null && d(s, a), typeof a == "object" && a !== null && typeof a.then == "function" && a.then(ne, q);
    } catch (v) {
      q(v);
    } finally {
      n !== null && s.types !== null && (n.types = s.types), E.T = n;
    }
  }, l.unstable_useCacheRefresh = function() {
    return E.H.useCacheRefresh();
  }, l.use = function(t) {
    return E.H.use(t);
  }, l.useActionState = function(t, n, s) {
    return E.H.useActionState(t, n, s);
  }, l.useCallback = function(t, n) {
    return E.H.useCallback(t, n);
  }, l.useContext = function(t) {
    return E.H.useContext(t);
  }, l.useDebugValue = function() {
  }, l.useDeferredValue = function(t, n) {
    return E.H.useDeferredValue(t, n);
  }, l.useEffect = function(t, n) {
    return E.H.useEffect(t, n);
  }, l.useEffectEvent = function(t) {
    return E.H.useEffectEvent(t);
  }, l.useId = function() {
    return E.H.useId();
  }, l.useImperativeHandle = function(t, n, s) {
    return E.H.useImperativeHandle(t, n, s);
  }, l.useInsertionEffect = function(t, n) {
    return E.H.useInsertionEffect(t, n);
  }, l.useLayoutEffect = function(t, n) {
    return E.H.useLayoutEffect(t, n);
  }, l.useMemo = function(t, n) {
    return E.H.useMemo(t, n);
  }, l.useOptimistic = function(t, n) {
    return E.H.useOptimistic(t, n);
  }, l.useReducer = function(t, n, s) {
    return E.H.useReducer(t, n, s);
  }, l.useRef = function(t) {
    return E.H.useRef(t);
  }, l.useState = function(t) {
    return E.H.useState(t);
  }, l.useSyncExternalStore = function(t, n, s) {
    return E.H.useSyncExternalStore(
      t,
      n,
      s
    );
  }, l.useTransition = function() {
    return E.H.useTransition();
  }, l.version = "19.2.0", l;
}
var pe = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
pe.exports;
var Le;
function Ve() {
  return Le || (Le = 1, (function(O, c) {
    process.env.NODE_ENV !== "production" && (function() {
      function j(e, r) {
        Object.defineProperty(w.prototype, e, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              r[0],
              r[1]
            );
          }
        });
      }
      function U(e) {
        return e === null || typeof e != "object" ? null : (e = Te && e[Te] || e["@@iterator"], typeof e == "function" ? e : null);
      }
      function k(e, r) {
        e = (e = e.constructor) && (e.displayName || e.name) || "ReactClass";
        var o = e + "." + r;
        we[o] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          r,
          e
        ), we[o] = !0);
      }
      function w(e, r, o) {
        this.props = e, this.context = r, this.refs = ye, this.updater = o || be;
      }
      function Y() {
      }
      function P(e, r, o) {
        this.props = e, this.context = r, this.refs = ye, this.updater = o || be;
      }
      function ee() {
      }
      function se(e) {
        return "" + e;
      }
      function x(e) {
        try {
          se(e);
          var r = !1;
        } catch {
          r = !0;
        }
        if (r) {
          r = console;
          var o = r.error, u = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return o.call(
            r,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            u
          ), se(e);
        }
      }
      function H(e) {
        if (e == null) return null;
        if (typeof e == "function")
          return e.$$typeof === qe ? null : e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
          case t:
            return "Fragment";
          case s:
            return "Profiler";
          case n:
            return "StrictMode";
          case f:
            return "Suspense";
          case b:
            return "SuspenseList";
          case Re:
            return "Activity";
        }
        if (typeof e == "object")
          switch (typeof e.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), e.$$typeof) {
            case ue:
              return "Portal";
            case d:
              return e.displayName || "Context";
            case a:
              return (e._context.displayName || "Context") + ".Consumer";
            case v:
              var r = e.render;
              return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case T:
              return r = e.displayName || null, r !== null ? r : H(e.type) || "Memo";
            case z:
              r = e._payload, e = e._init;
              try {
                return H(e(r));
              } catch {
              }
          }
        return null;
      }
      function B(e) {
        if (e === t) return "<>";
        if (typeof e == "object" && e !== null && e.$$typeof === z)
          return "<...>";
        try {
          var r = H(e);
          return r ? "<" + r + ">" : "<...>";
        } catch {
          return "<...>";
        }
      }
      function W() {
        var e = _.A;
        return e === null ? null : e.getOwner();
      }
      function F() {
        return Error("react-stack-top-frame");
      }
      function te(e) {
        if (de.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning) return !1;
        }
        return e.key !== void 0;
      }
      function G(e, r) {
        function o() {
          Ce || (Ce = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            r
          ));
        }
        o.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: o,
          configurable: !0
        });
      }
      function L() {
        var e = H(this.type);
        return je[e] || (je[e] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), e = this.props.ref, e !== void 0 ? e : null;
      }
      function Q(e, r, o, u, i, m) {
        var p = o.ref;
        return e = {
          $$typeof: q,
          type: e,
          key: r,
          props: o,
          _owner: u
        }, (p !== void 0 ? p : null) !== null ? Object.defineProperty(e, "ref", {
          enumerable: !1,
          get: L
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
          value: i
        }), Object.defineProperty(e, "_debugTask", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: m
        }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
      }
      function re(e, r) {
        return r = Q(
          e.type,
          r,
          e.props,
          e._owner,
          e._debugStack,
          e._debugTask
        ), e._store && (r._store.validated = e._store.validated), r;
      }
      function X(e) {
        N(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === z && (e._payload.status === "fulfilled" ? N(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
      }
      function N(e) {
        return typeof e == "object" && e !== null && e.$$typeof === q;
      }
      function ne(e) {
        var r = { "=": "=0", ":": "=2" };
        return "$" + e.replace(/[=:]/g, function(o) {
          return r[o];
        });
      }
      function E(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (x(e.key), ne("" + e.key)) : r.toString(36);
      }
      function ae(e) {
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw e.reason;
          default:
            switch (typeof e.status == "string" ? e.then(ee, ee) : (e.status = "pending", e.then(
              function(r) {
                e.status === "pending" && (e.status = "fulfilled", e.value = r);
              },
              function(r) {
                e.status === "pending" && (e.status = "rejected", e.reason = r);
              }
            )), e.status) {
              case "fulfilled":
                return e.value;
              case "rejected":
                throw e.reason;
            }
        }
        throw e;
      }
      function A(e, r, o, u, i) {
        var m = typeof e;
        (m === "undefined" || m === "boolean") && (e = null);
        var p = !1;
        if (e === null) p = !0;
        else
          switch (m) {
            case "bigint":
            case "string":
            case "number":
              p = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case q:
                case ue:
                  p = !0;
                  break;
                case z:
                  return p = e._init, A(
                    p(e._payload),
                    r,
                    o,
                    u,
                    i
                  );
              }
          }
        if (p) {
          p = e, i = i(p);
          var g = u === "" ? "." + E(p, 0) : u;
          return ke(i) ? (o = "", g != null && (o = g.replace(Ne, "$&/") + "/"), A(i, r, o, "", function(J) {
            return J;
          })) : i != null && (N(i) && (i.key != null && (p && p.key === i.key || x(i.key)), o = re(
            i,
            o + (i.key == null || p && p.key === i.key ? "" : ("" + i.key).replace(
              Ne,
              "$&/"
            ) + "/") + g
          ), u !== "" && p != null && N(p) && p.key == null && p._store && !p._store.validated && (o._store.validated = 2), i = o), r.push(i)), 1;
        }
        if (p = 0, g = u === "" ? "." : u + ":", ke(e))
          for (var h = 0; h < e.length; h++)
            u = e[h], m = g + E(u, h), p += A(
              u,
              r,
              o,
              m,
              i
            );
        else if (h = U(e), typeof h == "function")
          for (h === e.entries && (Pe || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), Pe = !0), e = h.call(e), h = 0; !(u = e.next()).done; )
            u = u.value, m = g + E(u, h++), p += A(
              u,
              r,
              o,
              m,
              i
            );
        else if (m === "object") {
          if (typeof e.then == "function")
            return A(
              ae(e),
              r,
              o,
              u,
              i
            );
          throw r = String(e), Error(
            "Objects are not valid as a React child (found: " + (r === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return p;
      }
      function V(e, r, o) {
        if (e == null) return e;
        var u = [], i = 0;
        return A(e, u, "", "", function(m) {
          return r.call(o, m, i++);
        }), u;
      }
      function oe(e) {
        if (e._status === -1) {
          var r = e._ioInfo;
          r != null && (r.start = r.end = performance.now()), r = e._result;
          var o = r();
          if (o.then(
            function(i) {
              if (e._status === 0 || e._status === -1) {
                e._status = 1, e._result = i;
                var m = e._ioInfo;
                m != null && (m.end = performance.now()), o.status === void 0 && (o.status = "fulfilled", o.value = i);
              }
            },
            function(i) {
              if (e._status === 0 || e._status === -1) {
                e._status = 2, e._result = i;
                var m = e._ioInfo;
                m != null && (m.end = performance.now()), o.status === void 0 && (o.status = "rejected", o.reason = i);
              }
            }
          ), r = e._ioInfo, r != null) {
            r.value = o;
            var u = o.displayName;
            typeof u == "string" && (r.name = u);
          }
          e._status === -1 && (e._status = 0, e._result = o);
        }
        if (e._status === 1)
          return r = e._result, r === void 0 && console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
            r
          ), "default" in r || console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            r
          ), r.default;
        throw e._result;
      }
      function y() {
        var e = _.H;
        return e === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), e;
      }
      function K() {
        _.asyncTransitions--;
      }
      function I(e) {
        if (_e === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7);
            _e = (O && O[r]).call(
              O,
              "timers"
            ).setImmediate;
          } catch {
            _e = function(u) {
              $e === !1 && ($e = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var i = new MessageChannel();
              i.port1.onmessage = u, i.port2.postMessage(void 0);
            };
          }
        return _e(e);
      }
      function M(e) {
        return 1 < e.length && typeof AggregateError == "function" ? new AggregateError(e) : e[0];
      }
      function C(e, r) {
        r !== me - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), me = r;
      }
      function $(e, r, o) {
        var u = _.actQueue;
        if (u !== null)
          if (u.length !== 0)
            try {
              Z(u), I(function() {
                return $(e, r, o);
              });
              return;
            } catch (i) {
              _.thrownErrors.push(i);
            }
          else _.actQueue = null;
        0 < _.thrownErrors.length ? (u = M(_.thrownErrors), _.thrownErrors.length = 0, o(u)) : r(e);
      }
      function Z(e) {
        if (!ge) {
          ge = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var o = e[r];
              do {
                _.didUsePromise = !1;
                var u = o(!1);
                if (u !== null) {
                  if (_.didUsePromise) {
                    e[r] = o, e.splice(0, r);
                    return;
                  }
                  o = u;
                } else break;
              } while (!0);
            }
            e.length = 0;
          } catch (i) {
            e.splice(0, r + 1), _.thrownErrors.push(i);
          } finally {
            ge = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var q = Symbol.for("react.transitional.element"), ue = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), d = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), z = Symbol.for("react.lazy"), Re = Symbol.for("react.activity"), Te = Symbol.iterator, we = {}, be = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(e) {
          k(e, "forceUpdate");
        },
        enqueueReplaceState: function(e) {
          k(e, "replaceState");
        },
        enqueueSetState: function(e) {
          k(e, "setState");
        }
      }, Oe = Object.assign, ye = {};
      Object.freeze(ye), w.prototype.isReactComponent = {}, w.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, e, r, "setState");
      }, w.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      var S = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      };
      for (ce in S)
        S.hasOwnProperty(ce) && j(ce, S[ce]);
      Y.prototype = w.prototype, S = P.prototype = new Y(), S.constructor = P, Oe(S, w.prototype), S.isPureReactComponent = !0;
      var ke = Array.isArray, qe = Symbol.for("react.client.reference"), _ = {
        H: null,
        A: null,
        T: null,
        S: null,
        actQueue: null,
        asyncTransitions: 0,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, de = Object.prototype.hasOwnProperty, Ae = console.createTask ? console.createTask : function() {
        return null;
      };
      S = {
        react_stack_bottom_frame: function(e) {
          return e();
        }
      };
      var Ce, Se, je = {}, ze = S.react_stack_bottom_frame.bind(
        S,
        F
      )(), Be = Ae(B(F)), Pe = !1, Ne = /\/+/g, Me = typeof reportError == "function" ? reportError : function(e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var r = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
            error: e
          });
          if (!window.dispatchEvent(r)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", e);
          return;
        }
        console.error(e);
      }, $e = !1, _e = null, me = 0, he = !1, ge = !1, De = typeof queueMicrotask == "function" ? function(e) {
        queueMicrotask(function() {
          return queueMicrotask(e);
        });
      } : I;
      S = Object.freeze({
        __proto__: null,
        c: function(e) {
          return y().useMemoCache(e);
        }
      });
      var ce = {
        map: V,
        forEach: function(e, r, o) {
          V(
            e,
            function() {
              r.apply(this, arguments);
            },
            o
          );
        },
        count: function(e) {
          var r = 0;
          return V(e, function() {
            r++;
          }), r;
        },
        toArray: function(e) {
          return V(e, function(r) {
            return r;
          }) || [];
        },
        only: function(e) {
          if (!N(e))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return e;
        }
      };
      c.Activity = Re, c.Children = ce, c.Component = w, c.Fragment = t, c.Profiler = s, c.PureComponent = P, c.StrictMode = n, c.Suspense = f, c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = _, c.__COMPILER_RUNTIME = S, c.act = function(e) {
        var r = _.actQueue, o = me;
        me++;
        var u = _.actQueue = r !== null ? r : [], i = !1;
        try {
          var m = e();
        } catch (h) {
          _.thrownErrors.push(h);
        }
        if (0 < _.thrownErrors.length)
          throw C(r, o), e = M(_.thrownErrors), _.thrownErrors.length = 0, e;
        if (m !== null && typeof m == "object" && typeof m.then == "function") {
          var p = m;
          return De(function() {
            i || he || (he = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(h, J) {
              i = !0, p.then(
                function(ie) {
                  if (C(r, o), o === 0) {
                    try {
                      Z(u), I(function() {
                        return $(
                          ie,
                          h,
                          J
                        );
                      });
                    } catch (Ge) {
                      _.thrownErrors.push(Ge);
                    }
                    if (0 < _.thrownErrors.length) {
                      var Fe = M(
                        _.thrownErrors
                      );
                      _.thrownErrors.length = 0, J(Fe);
                    }
                  } else h(ie);
                },
                function(ie) {
                  C(r, o), 0 < _.thrownErrors.length && (ie = M(
                    _.thrownErrors
                  ), _.thrownErrors.length = 0), J(ie);
                }
              );
            }
          };
        }
        var g = m;
        if (C(r, o), o === 0 && (Z(u), u.length !== 0 && De(function() {
          i || he || (he = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), _.actQueue = null), 0 < _.thrownErrors.length)
          throw e = M(_.thrownErrors), _.thrownErrors.length = 0, e;
        return {
          then: function(h, J) {
            i = !0, o === 0 ? (_.actQueue = u, I(function() {
              return $(
                g,
                h,
                J
              );
            })) : h(g);
          }
        };
      }, c.cache = function(e) {
        return function() {
          return e.apply(null, arguments);
        };
      }, c.cacheSignal = function() {
        return null;
      }, c.captureOwnerStack = function() {
        var e = _.getCurrentStack;
        return e === null ? null : e();
      }, c.cloneElement = function(e, r, o) {
        if (e == null)
          throw Error(
            "The argument must be a React element, but you passed " + e + "."
          );
        var u = Oe({}, e.props), i = e.key, m = e._owner;
        if (r != null) {
          var p;
          e: {
            if (de.call(r, "ref") && (p = Object.getOwnPropertyDescriptor(
              r,
              "ref"
            ).get) && p.isReactWarning) {
              p = !1;
              break e;
            }
            p = r.ref !== void 0;
          }
          p && (m = W()), te(r) && (x(r.key), i = "" + r.key);
          for (g in r)
            !de.call(r, g) || g === "key" || g === "__self" || g === "__source" || g === "ref" && r.ref === void 0 || (u[g] = r[g]);
        }
        var g = arguments.length - 2;
        if (g === 1) u.children = o;
        else if (1 < g) {
          p = Array(g);
          for (var h = 0; h < g; h++)
            p[h] = arguments[h + 2];
          u.children = p;
        }
        for (u = Q(
          e.type,
          i,
          u,
          m,
          e._debugStack,
          e._debugTask
        ), i = 2; i < arguments.length; i++)
          X(arguments[i]);
        return u;
      }, c.createContext = function(e) {
        return e = {
          $$typeof: d,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }, e.Provider = e, e.Consumer = {
          $$typeof: a,
          _context: e
        }, e._currentRenderer = null, e._currentRenderer2 = null, e;
      }, c.createElement = function(e, r, o) {
        for (var u = 2; u < arguments.length; u++)
          X(arguments[u]);
        u = {};
        var i = null;
        if (r != null)
          for (h in Se || !("__self" in r) || "key" in r || (Se = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), te(r) && (x(r.key), i = "" + r.key), r)
            de.call(r, h) && h !== "key" && h !== "__self" && h !== "__source" && (u[h] = r[h]);
        var m = arguments.length - 2;
        if (m === 1) u.children = o;
        else if (1 < m) {
          for (var p = Array(m), g = 0; g < m; g++)
            p[g] = arguments[g + 2];
          Object.freeze && Object.freeze(p), u.children = p;
        }
        if (e && e.defaultProps)
          for (h in m = e.defaultProps, m)
            u[h] === void 0 && (u[h] = m[h]);
        i && G(
          u,
          typeof e == "function" ? e.displayName || e.name || "Unknown" : e
        );
        var h = 1e4 > _.recentlyCreatedOwnerStacks++;
        return Q(
          e,
          i,
          u,
          W(),
          h ? Error("react-stack-top-frame") : ze,
          h ? Ae(B(e)) : Be
        );
      }, c.createRef = function() {
        var e = { current: null };
        return Object.seal(e), e;
      }, c.forwardRef = function(e) {
        e != null && e.$$typeof === T ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : typeof e != "function" ? console.error(
          "forwardRef requires a render function but was given %s.",
          e === null ? "null" : typeof e
        ) : e.length !== 0 && e.length !== 2 && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        ), e != null && e.defaultProps != null && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var r = { $$typeof: v, render: e }, o;
        return Object.defineProperty(r, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return o;
          },
          set: function(u) {
            o = u, e.name || e.displayName || (Object.defineProperty(e, "name", { value: u }), e.displayName = u);
          }
        }), r;
      }, c.isValidElement = N, c.lazy = function(e) {
        e = { _status: -1, _result: e };
        var r = {
          $$typeof: z,
          _payload: e,
          _init: oe
        }, o = {
          name: "lazy",
          start: -1,
          end: -1,
          value: null,
          owner: null,
          debugStack: Error("react-stack-top-frame"),
          debugTask: console.createTask ? console.createTask("lazy()") : null
        };
        return e._ioInfo = o, r._debugInfo = [{ awaited: o }], r;
      }, c.memo = function(e, r) {
        e == null && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          e === null ? "null" : typeof e
        ), r = {
          $$typeof: T,
          type: e,
          compare: r === void 0 ? null : r
        };
        var o;
        return Object.defineProperty(r, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return o;
          },
          set: function(u) {
            o = u, e.name || e.displayName || (Object.defineProperty(e, "name", { value: u }), e.displayName = u);
          }
        }), r;
      }, c.startTransition = function(e) {
        var r = _.T, o = {};
        o._updatedFibers = /* @__PURE__ */ new Set(), _.T = o;
        try {
          var u = e(), i = _.S;
          i !== null && i(o, u), typeof u == "object" && u !== null && typeof u.then == "function" && (_.asyncTransitions++, u.then(K, K), u.then(ee, Me));
        } catch (m) {
          Me(m);
        } finally {
          r === null && o._updatedFibers && (e = o._updatedFibers.size, o._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), r !== null && o.types !== null && (r.types !== null && r.types !== o.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), r.types = o.types), _.T = r;
        }
      }, c.unstable_useCacheRefresh = function() {
        return y().useCacheRefresh();
      }, c.use = function(e) {
        return y().use(e);
      }, c.useActionState = function(e, r, o) {
        return y().useActionState(
          e,
          r,
          o
        );
      }, c.useCallback = function(e, r) {
        return y().useCallback(e, r);
      }, c.useContext = function(e) {
        var r = y();
        return e.$$typeof === a && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), r.useContext(e);
      }, c.useDebugValue = function(e, r) {
        return y().useDebugValue(e, r);
      }, c.useDeferredValue = function(e, r) {
        return y().useDeferredValue(e, r);
      }, c.useEffect = function(e, r) {
        return e == null && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), y().useEffect(e, r);
      }, c.useEffectEvent = function(e) {
        return y().useEffectEvent(e);
      }, c.useId = function() {
        return y().useId();
      }, c.useImperativeHandle = function(e, r, o) {
        return y().useImperativeHandle(e, r, o);
      }, c.useInsertionEffect = function(e, r) {
        return e == null && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), y().useInsertionEffect(e, r);
      }, c.useLayoutEffect = function(e, r) {
        return e == null && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), y().useLayoutEffect(e, r);
      }, c.useMemo = function(e, r) {
        return y().useMemo(e, r);
      }, c.useOptimistic = function(e, r) {
        return y().useOptimistic(e, r);
      }, c.useReducer = function(e, r, o) {
        return y().useReducer(e, r, o);
      }, c.useRef = function(e) {
        return y().useRef(e);
      }, c.useState = function(e) {
        return y().useState(e);
      }, c.useSyncExternalStore = function(e, r, o) {
        return y().useSyncExternalStore(
          e,
          r,
          o
        );
      }, c.useTransition = function() {
        return y().useTransition();
      }, c.version = "19.2.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(pe, pe.exports)), pe.exports;
}
var Ie;
function We() {
  return Ie || (Ie = 1, process.env.NODE_ENV === "production" ? Ee.exports = Xe() : Ee.exports = Ve()), Ee.exports;
}
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ue;
function Ke() {
  return Ue || (Ue = 1, process.env.NODE_ENV !== "production" && (function() {
    function O(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === oe ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case G:
          return "Fragment";
        case Q:
          return "Profiler";
        case L:
          return "StrictMode";
        case ne:
          return "Suspense";
        case E:
          return "SuspenseList";
        case V:
          return "Activity";
      }
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case te:
            return "Portal";
          case X:
            return t.displayName || "Context";
          case re:
            return (t._context.displayName || "Context") + ".Consumer";
          case N:
            var n = t.render;
            return t = t.displayName, t || (t = n.displayName || n.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case ae:
            return n = t.displayName || null, n !== null ? n : O(t.type) || "Memo";
          case A:
            n = t._payload, t = t._init;
            try {
              return O(t(n));
            } catch {
            }
        }
      return null;
    }
    function c(t) {
      return "" + t;
    }
    function j(t) {
      try {
        c(t);
        var n = !1;
      } catch {
        n = !0;
      }
      if (n) {
        n = console;
        var s = n.error, a = typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return s.call(
          n,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          a
        ), c(t);
      }
    }
    function U(t) {
      if (t === G) return "<>";
      if (typeof t == "object" && t !== null && t.$$typeof === A)
        return "<...>";
      try {
        var n = O(t);
        return n ? "<" + n + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function k() {
      var t = y.A;
      return t === null ? null : t.getOwner();
    }
    function w() {
      return Error("react-stack-top-frame");
    }
    function Y(t) {
      if (K.call(t, "key")) {
        var n = Object.getOwnPropertyDescriptor(t, "key").get;
        if (n && n.isReactWarning) return !1;
      }
      return t.key !== void 0;
    }
    function P(t, n) {
      function s() {
        C || (C = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          n
        ));
      }
      s.isReactWarning = !0, Object.defineProperty(t, "key", {
        get: s,
        configurable: !0
      });
    }
    function ee() {
      var t = O(this.type);
      return $[t] || ($[t] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), t = this.props.ref, t !== void 0 ? t : null;
    }
    function se(t, n, s, a, d, v) {
      var f = s.ref;
      return t = {
        $$typeof: F,
        type: t,
        key: n,
        props: s,
        _owner: a
      }, (f !== void 0 ? f : null) !== null ? Object.defineProperty(t, "ref", {
        enumerable: !1,
        get: ee
      }) : Object.defineProperty(t, "ref", { enumerable: !1, value: null }), t._store = {}, Object.defineProperty(t._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(t, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(t, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: d
      }), Object.defineProperty(t, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: v
      }), Object.freeze && (Object.freeze(t.props), Object.freeze(t)), t;
    }
    function x(t, n, s, a, d, v) {
      var f = n.children;
      if (f !== void 0)
        if (a)
          if (I(f)) {
            for (a = 0; a < f.length; a++)
              H(f[a]);
            Object.freeze && Object.freeze(f);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else H(f);
      if (K.call(n, "key")) {
        f = O(t);
        var b = Object.keys(n).filter(function(z) {
          return z !== "key";
        });
        a = 0 < b.length ? "{key: someKey, " + b.join(": ..., ") + ": ...}" : "{key: someKey}", ue[f + a] || (b = 0 < b.length ? "{" + b.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          a,
          f,
          b,
          f
        ), ue[f + a] = !0);
      }
      if (f = null, s !== void 0 && (j(s), f = "" + s), Y(n) && (j(n.key), f = "" + n.key), "key" in n) {
        s = {};
        for (var T in n)
          T !== "key" && (s[T] = n[T]);
      } else s = n;
      return f && P(
        s,
        typeof t == "function" ? t.displayName || t.name || "Unknown" : t
      ), se(
        t,
        f,
        s,
        k(),
        d,
        v
      );
    }
    function H(t) {
      B(t) ? t._store && (t._store.validated = 1) : typeof t == "object" && t !== null && t.$$typeof === A && (t._payload.status === "fulfilled" ? B(t._payload.value) && t._payload.value._store && (t._payload.value._store.validated = 1) : t._store && (t._store.validated = 1));
    }
    function B(t) {
      return typeof t == "object" && t !== null && t.$$typeof === F;
    }
    var W = We(), F = Symbol.for("react.transitional.element"), te = Symbol.for("react.portal"), G = Symbol.for("react.fragment"), L = Symbol.for("react.strict_mode"), Q = Symbol.for("react.profiler"), re = Symbol.for("react.consumer"), X = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), ne = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), ae = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), V = Symbol.for("react.activity"), oe = Symbol.for("react.client.reference"), y = W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = Object.prototype.hasOwnProperty, I = Array.isArray, M = console.createTask ? console.createTask : function() {
      return null;
    };
    W = {
      react_stack_bottom_frame: function(t) {
        return t();
      }
    };
    var C, $ = {}, Z = W.react_stack_bottom_frame.bind(
      W,
      w
    )(), q = M(U(w)), ue = {};
    le.Fragment = G, le.jsx = function(t, n, s) {
      var a = 1e4 > y.recentlyCreatedOwnerStacks++;
      return x(
        t,
        n,
        s,
        !1,
        a ? Error("react-stack-top-frame") : Z,
        a ? M(U(t)) : q
      );
    }, le.jsxs = function(t, n, s) {
      var a = 1e4 > y.recentlyCreatedOwnerStacks++;
      return x(
        t,
        n,
        s,
        !0,
        a ? Error("react-stack-top-frame") : Z,
        a ? M(U(t)) : q
      );
    };
  })()), le;
}
var He;
function Ze() {
  return He || (He = 1, process.env.NODE_ENV === "production" ? ve.exports = Qe() : ve.exports = Ke()), ve.exports;
}
var R = Ze(), Je = We();
const et = "_app_18rh1_1", tt = "_logoContainer_18rh1_9", rt = "_logo_18rh1_9", nt = "_logoReact_18rh1_27", ot = "_title_18rh1_31", ut = "_card_18rh1_38", st = "_button_18rh1_46", at = "_count_18rh1_68", it = "_description_18rh1_74", ct = "_readTheDocs_18rh1_79", D = {
  app: et,
  logoContainer: tt,
  logo: rt,
  logoReact: nt,
  title: ot,
  card: ut,
  button: st,
  count: at,
  description: it,
  readTheDocs: ct
}, ft = () => /* @__PURE__ */ R.jsxs(
  "svg",
  {
    width: "31",
    height: "31",
    viewBox: "0 0 31 31",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ R.jsx(
        "path",
        {
          d: "m24.737 20.721-8.56 8.56a2.133 2.133 0 0 1-3.017 0l-8.56-8.56a2.133 2.133 0 0 1 0-3.017l8.56-8.56a2.133 2.133 0 0 1 3.017 0l8.56 8.56a2.133 2.133 0 0 1 0 3.017Z",
          fill: "url(#a)"
        }
      ),
      /* @__PURE__ */ R.jsx("defs", { children: /* @__PURE__ */ R.jsxs(
        "linearGradient",
        {
          id: "a",
          x1: "6",
          y1: "6",
          x2: "26",
          y2: "26",
          gradientUnits: "userSpaceOnUse",
          children: [
            /* @__PURE__ */ R.jsx("stop", { stopColor: "#41D1FF" }),
            /* @__PURE__ */ R.jsx("stop", { offset: "1", stopColor: "#BD34FE" })
          ]
        }
      ) })
    ]
  }
), lt = () => /* @__PURE__ */ R.jsxs(
  "svg",
  {
    width: "31",
    height: "31",
    viewBox: "0 0 31 31",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ R.jsx(
        "path",
        {
          d: "M15.5 18.875a3.375 3.375 0 1 0 0-6.75 3.375 3.375 0 0 0 0 6.75Z",
          fill: "#61DAFB"
        }
      ),
      /* @__PURE__ */ R.jsx(
        "path",
        {
          d: "M15.5 25.625c5.523 0 10-3.02 10-6.75s-4.477-6.75-10-6.75-10 3.02-10 6.75 4.477 6.75 10 6.75Z",
          stroke: "#61DAFB",
          strokeWidth: "1.5"
        }
      ),
      /* @__PURE__ */ R.jsx(
        "path",
        {
          d: "M21.25 22.25c2.761-4.784 2.761-10.716 0-15.5s-7.739-4.784-10.5 0-2.761 10.716 0 15.5 7.739 4.784 10.5 0Z",
          stroke: "#61DAFB",
          strokeWidth: "1.5"
        }
      ),
      /* @__PURE__ */ R.jsx(
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
function pt() {
  const [O, c] = Je.useState(0);
  return /* @__PURE__ */ R.jsxs("div", { className: D.app, children: [
    /* @__PURE__ */ R.jsxs("div", { className: D.logoContainer, children: [
      /* @__PURE__ */ R.jsx("a", { href: "https://vite.dev", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ R.jsx("div", { className: D.logo, children: /* @__PURE__ */ R.jsx(ft, {}) }) }),
      /* @__PURE__ */ R.jsx("a", { href: "https://react.dev", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ R.jsx("div", { className: `${D.logo} ${D.logoReact}`, children: /* @__PURE__ */ R.jsx(lt, {}) }) })
    ] }),
    /* @__PURE__ */ R.jsx("h1", { className: D.title, children: "AI ChatBot Plugin" }),
    /* @__PURE__ */ R.jsxs("div", { className: D.card, children: [
      /* @__PURE__ */ R.jsx(
        "button",
        {
          className: D.button,
          onClick: () => c((j) => j + 1),
          children: /* @__PURE__ */ R.jsxs("span", { className: D.count, children: [
            "count is ",
            O
          ] })
        }
      ),
      /* @__PURE__ */ R.jsx("p", { className: D.description, children: "ИЗМЕНЕН 2.0" })
    ] }),
    /* @__PURE__ */ R.jsx("p", { className: D.readTheDocs, children: "Click on the Vite and React logos to learn more" })
  ] });
}
export {
  pt as default
};
