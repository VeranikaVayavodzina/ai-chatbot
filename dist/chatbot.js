if (typeof Vu > "u")
  var Vu = { env: { NODE_ENV: "production" } };
function W1(M) {
  return M && M.__esModule && Object.prototype.hasOwnProperty.call(M, "default") ? M.default : M;
}
var ci = { exports: {} }, B = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hv;
function $1() {
  if (hv) return B;
  hv = 1;
  var M = Symbol.for("react.transitional.element"), Sl = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), fl = Symbol.for("react.profiler"), bl = Symbol.for("react.consumer"), dl = Symbol.for("react.context"), pl = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), E = Symbol.for("react.memo"), V = Symbol.for("react.lazy"), H = Symbol.for("react.activity"), sl = Symbol.iterator;
  function ql(y) {
    return y === null || typeof y != "object" ? null : (y = sl && y[sl] || y["@@iterator"], typeof y == "function" ? y : null);
  }
  var ol = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Hl = Object.assign, Et = {};
  function tl(y, T, r) {
    this.props = y, this.context = T, this.refs = Et, this.updater = r || ol;
  }
  tl.prototype.isReactComponent = {}, tl.prototype.setState = function(y, T) {
    if (typeof y != "object" && typeof y != "function" && y != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, y, T, "setState");
  }, tl.prototype.forceUpdate = function(y) {
    this.updater.enqueueForceUpdate(this, y, "forceUpdate");
  };
  function At() {
  }
  At.prototype = tl.prototype;
  function Rl(y, T, r) {
    this.props = y, this.context = T, this.refs = Et, this.updater = r || ol;
  }
  var Ll = Rl.prototype = new At();
  Ll.constructor = Rl, Hl(Ll, tl.prototype), Ll.isPureReactComponent = !0;
  var yt = Array.isArray;
  function jl() {
  }
  var X = { H: null, A: null, T: null, S: null }, q = Object.prototype.hasOwnProperty;
  function gl(y, T, r) {
    var D = r.ref;
    return {
      $$typeof: M,
      type: y,
      key: T,
      ref: D !== void 0 ? D : null,
      props: r
    };
  }
  function zl(y, T) {
    return gl(y.type, T, y.props);
  }
  function vt(y) {
    return typeof y == "object" && y !== null && y.$$typeof === M;
  }
  function xl(y) {
    var T = { "=": "=0", ":": "=2" };
    return "$" + y.replace(/[=:]/g, function(r) {
      return T[r];
    });
  }
  var Au = /\/+/g;
  function Ct(y, T) {
    return typeof y == "object" && y !== null && y.key != null ? xl("" + y.key) : T.toString(36);
  }
  function rt(y) {
    switch (y.status) {
      case "fulfilled":
        return y.value;
      case "rejected":
        throw y.reason;
      default:
        switch (typeof y.status == "string" ? y.then(jl, jl) : (y.status = "pending", y.then(
          function(T) {
            y.status === "pending" && (y.status = "fulfilled", y.value = T);
          },
          function(T) {
            y.status === "pending" && (y.status = "rejected", y.reason = T);
          }
        )), y.status) {
          case "fulfilled":
            return y.value;
          case "rejected":
            throw y.reason;
        }
    }
    throw y;
  }
  function b(y, T, r, D, j) {
    var Q = typeof y;
    (Q === "undefined" || Q === "boolean") && (y = null);
    var I = !1;
    if (y === null) I = !0;
    else
      switch (Q) {
        case "bigint":
        case "string":
        case "number":
          I = !0;
          break;
        case "object":
          switch (y.$$typeof) {
            case M:
            case Sl:
              I = !0;
              break;
            case V:
              return I = y._init, b(
                I(y._payload),
                T,
                r,
                D,
                j
              );
          }
      }
    if (I)
      return j = j(y), I = D === "" ? "." + Ct(y, 0) : D, yt(j) ? (r = "", I != null && (r = I.replace(Au, "$&/") + "/"), b(j, T, r, "", function(Ua) {
        return Ua;
      })) : j != null && (vt(j) && (j = zl(
        j,
        r + (j.key == null || y && y.key === j.key ? "" : ("" + j.key).replace(
          Au,
          "$&/"
        ) + "/") + I
      )), T.push(j)), 1;
    I = 0;
    var Kl = D === "" ? "." : D + ":";
    if (yt(y))
      for (var El = 0; El < y.length; El++)
        D = y[El], Q = Kl + Ct(D, El), I += b(
          D,
          T,
          r,
          Q,
          j
        );
    else if (El = ql(y), typeof El == "function")
      for (y = El.call(y), El = 0; !(D = y.next()).done; )
        D = D.value, Q = Kl + Ct(D, El++), I += b(
          D,
          T,
          r,
          Q,
          j
        );
    else if (Q === "object") {
      if (typeof y.then == "function")
        return b(
          rt(y),
          T,
          r,
          D,
          j
        );
      throw T = String(y), Error(
        "Objects are not valid as a React child (found: " + (T === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : T) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return I;
  }
  function A(y, T, r) {
    if (y == null) return y;
    var D = [], j = 0;
    return b(y, D, "", "", function(Q) {
      return T.call(r, Q, j++);
    }), D;
  }
  function C(y) {
    if (y._status === -1) {
      var T = y._result;
      T = T(), T.then(
        function(r) {
          (y._status === 0 || y._status === -1) && (y._status = 1, y._result = r);
        },
        function(r) {
          (y._status === 0 || y._status === -1) && (y._status = 2, y._result = r);
        }
      ), y._status === -1 && (y._status = 0, y._result = T);
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var ul = typeof reportError == "function" ? reportError : function(y) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var T = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y),
        error: y
      });
      if (!window.dispatchEvent(T)) return;
    } else if (typeof Vu == "object" && typeof Vu.emit == "function") {
      Vu.emit("uncaughtException", y);
      return;
    }
    console.error(y);
  }, cl = {
    map: A,
    forEach: function(y, T, r) {
      A(
        y,
        function() {
          T.apply(this, arguments);
        },
        r
      );
    },
    count: function(y) {
      var T = 0;
      return A(y, function() {
        T++;
      }), T;
    },
    toArray: function(y) {
      return A(y, function(T) {
        return T;
      }) || [];
    },
    only: function(y) {
      if (!vt(y))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return y;
    }
  };
  return B.Activity = H, B.Children = cl, B.Component = tl, B.Fragment = k, B.Profiler = fl, B.PureComponent = Rl, B.StrictMode = h, B.Suspense = p, B.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = X, B.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(y) {
      return X.H.useMemoCache(y);
    }
  }, B.cache = function(y) {
    return function() {
      return y.apply(null, arguments);
    };
  }, B.cacheSignal = function() {
    return null;
  }, B.cloneElement = function(y, T, r) {
    if (y == null)
      throw Error(
        "The argument must be a React element, but you passed " + y + "."
      );
    var D = Hl({}, y.props), j = y.key;
    if (T != null)
      for (Q in T.key !== void 0 && (j = "" + T.key), T)
        !q.call(T, Q) || Q === "key" || Q === "__self" || Q === "__source" || Q === "ref" && T.ref === void 0 || (D[Q] = T[Q]);
    var Q = arguments.length - 2;
    if (Q === 1) D.children = r;
    else if (1 < Q) {
      for (var I = Array(Q), Kl = 0; Kl < Q; Kl++)
        I[Kl] = arguments[Kl + 2];
      D.children = I;
    }
    return gl(y.type, j, D);
  }, B.createContext = function(y) {
    return y = {
      $$typeof: dl,
      _currentValue: y,
      _currentValue2: y,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, y.Provider = y, y.Consumer = {
      $$typeof: bl,
      _context: y
    }, y;
  }, B.createElement = function(y, T, r) {
    var D, j = {}, Q = null;
    if (T != null)
      for (D in T.key !== void 0 && (Q = "" + T.key), T)
        q.call(T, D) && D !== "key" && D !== "__self" && D !== "__source" && (j[D] = T[D]);
    var I = arguments.length - 2;
    if (I === 1) j.children = r;
    else if (1 < I) {
      for (var Kl = Array(I), El = 0; El < I; El++)
        Kl[El] = arguments[El + 2];
      j.children = Kl;
    }
    if (y && y.defaultProps)
      for (D in I = y.defaultProps, I)
        j[D] === void 0 && (j[D] = I[D]);
    return gl(y, Q, j);
  }, B.createRef = function() {
    return { current: null };
  }, B.forwardRef = function(y) {
    return { $$typeof: pl, render: y };
  }, B.isValidElement = vt, B.lazy = function(y) {
    return {
      $$typeof: V,
      _payload: { _status: -1, _result: y },
      _init: C
    };
  }, B.memo = function(y, T) {
    return {
      $$typeof: E,
      type: y,
      compare: T === void 0 ? null : T
    };
  }, B.startTransition = function(y) {
    var T = X.T, r = {};
    X.T = r;
    try {
      var D = y(), j = X.S;
      j !== null && j(r, D), typeof D == "object" && D !== null && typeof D.then == "function" && D.then(jl, ul);
    } catch (Q) {
      ul(Q);
    } finally {
      T !== null && r.types !== null && (T.types = r.types), X.T = T;
    }
  }, B.unstable_useCacheRefresh = function() {
    return X.H.useCacheRefresh();
  }, B.use = function(y) {
    return X.H.use(y);
  }, B.useActionState = function(y, T, r) {
    return X.H.useActionState(y, T, r);
  }, B.useCallback = function(y, T) {
    return X.H.useCallback(y, T);
  }, B.useContext = function(y) {
    return X.H.useContext(y);
  }, B.useDebugValue = function() {
  }, B.useDeferredValue = function(y, T) {
    return X.H.useDeferredValue(y, T);
  }, B.useEffect = function(y, T) {
    return X.H.useEffect(y, T);
  }, B.useEffectEvent = function(y) {
    return X.H.useEffectEvent(y);
  }, B.useId = function() {
    return X.H.useId();
  }, B.useImperativeHandle = function(y, T, r) {
    return X.H.useImperativeHandle(y, T, r);
  }, B.useInsertionEffect = function(y, T) {
    return X.H.useInsertionEffect(y, T);
  }, B.useLayoutEffect = function(y, T) {
    return X.H.useLayoutEffect(y, T);
  }, B.useMemo = function(y, T) {
    return X.H.useMemo(y, T);
  }, B.useOptimistic = function(y, T) {
    return X.H.useOptimistic(y, T);
  }, B.useReducer = function(y, T, r) {
    return X.H.useReducer(y, T, r);
  }, B.useRef = function(y) {
    return X.H.useRef(y);
  }, B.useState = function(y) {
    return X.H.useState(y);
  }, B.useSyncExternalStore = function(y, T, r) {
    return X.H.useSyncExternalStore(
      y,
      T,
      r
    );
  }, B.useTransition = function() {
    return X.H.useTransition();
  }, B.version = "19.2.0", B;
}
var gv;
function di() {
  return gv || (gv = 1, ci.exports = $1()), ci.exports;
}
var Ut = di();
const F1 = /* @__PURE__ */ W1(Ut);
var ii = { exports: {} }, Te = {}, si = { exports: {} }, yi = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sv;
function k1() {
  return Sv || (Sv = 1, (function(M) {
    function Sl(b, A) {
      var C = b.length;
      b.push(A);
      l: for (; 0 < C; ) {
        var ul = C - 1 >>> 1, cl = b[ul];
        if (0 < fl(cl, A))
          b[ul] = A, b[C] = cl, C = ul;
        else break l;
      }
    }
    function k(b) {
      return b.length === 0 ? null : b[0];
    }
    function h(b) {
      if (b.length === 0) return null;
      var A = b[0], C = b.pop();
      if (C !== A) {
        b[0] = C;
        l: for (var ul = 0, cl = b.length, y = cl >>> 1; ul < y; ) {
          var T = 2 * (ul + 1) - 1, r = b[T], D = T + 1, j = b[D];
          if (0 > fl(r, C))
            D < cl && 0 > fl(j, r) ? (b[ul] = j, b[D] = C, ul = D) : (b[ul] = r, b[T] = C, ul = T);
          else if (D < cl && 0 > fl(j, C))
            b[ul] = j, b[D] = C, ul = D;
          else break l;
        }
      }
      return A;
    }
    function fl(b, A) {
      var C = b.sortIndex - A.sortIndex;
      return C !== 0 ? C : b.id - A.id;
    }
    if (M.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var bl = performance;
      M.unstable_now = function() {
        return bl.now();
      };
    } else {
      var dl = Date, pl = dl.now();
      M.unstable_now = function() {
        return dl.now() - pl;
      };
    }
    var p = [], E = [], V = 1, H = null, sl = 3, ql = !1, ol = !1, Hl = !1, Et = !1, tl = typeof setTimeout == "function" ? setTimeout : null, At = typeof clearTimeout == "function" ? clearTimeout : null, Rl = typeof setImmediate < "u" ? setImmediate : null;
    function Ll(b) {
      for (var A = k(E); A !== null; ) {
        if (A.callback === null) h(E);
        else if (A.startTime <= b)
          h(E), A.sortIndex = A.expirationTime, Sl(p, A);
        else break;
        A = k(E);
      }
    }
    function yt(b) {
      if (Hl = !1, Ll(b), !ol)
        if (k(p) !== null)
          ol = !0, jl || (jl = !0, xl());
        else {
          var A = k(E);
          A !== null && rt(yt, A.startTime - b);
        }
    }
    var jl = !1, X = -1, q = 5, gl = -1;
    function zl() {
      return Et ? !0 : !(M.unstable_now() - gl < q);
    }
    function vt() {
      if (Et = !1, jl) {
        var b = M.unstable_now();
        gl = b;
        var A = !0;
        try {
          l: {
            ol = !1, Hl && (Hl = !1, At(X), X = -1), ql = !0;
            var C = sl;
            try {
              t: {
                for (Ll(b), H = k(p); H !== null && !(H.expirationTime > b && zl()); ) {
                  var ul = H.callback;
                  if (typeof ul == "function") {
                    H.callback = null, sl = H.priorityLevel;
                    var cl = ul(
                      H.expirationTime <= b
                    );
                    if (b = M.unstable_now(), typeof cl == "function") {
                      H.callback = cl, Ll(b), A = !0;
                      break t;
                    }
                    H === k(p) && h(p), Ll(b);
                  } else h(p);
                  H = k(p);
                }
                if (H !== null) A = !0;
                else {
                  var y = k(E);
                  y !== null && rt(
                    yt,
                    y.startTime - b
                  ), A = !1;
                }
              }
              break l;
            } finally {
              H = null, sl = C, ql = !1;
            }
            A = void 0;
          }
        } finally {
          A ? xl() : jl = !1;
        }
      }
    }
    var xl;
    if (typeof Rl == "function")
      xl = function() {
        Rl(vt);
      };
    else if (typeof MessageChannel < "u") {
      var Au = new MessageChannel(), Ct = Au.port2;
      Au.port1.onmessage = vt, xl = function() {
        Ct.postMessage(null);
      };
    } else
      xl = function() {
        tl(vt, 0);
      };
    function rt(b, A) {
      X = tl(function() {
        b(M.unstable_now());
      }, A);
    }
    M.unstable_IdlePriority = 5, M.unstable_ImmediatePriority = 1, M.unstable_LowPriority = 4, M.unstable_NormalPriority = 3, M.unstable_Profiling = null, M.unstable_UserBlockingPriority = 2, M.unstable_cancelCallback = function(b) {
      b.callback = null;
    }, M.unstable_forceFrameRate = function(b) {
      0 > b || 125 < b ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : q = 0 < b ? Math.floor(1e3 / b) : 5;
    }, M.unstable_getCurrentPriorityLevel = function() {
      return sl;
    }, M.unstable_next = function(b) {
      switch (sl) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = sl;
      }
      var C = sl;
      sl = A;
      try {
        return b();
      } finally {
        sl = C;
      }
    }, M.unstable_requestPaint = function() {
      Et = !0;
    }, M.unstable_runWithPriority = function(b, A) {
      switch (b) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          b = 3;
      }
      var C = sl;
      sl = b;
      try {
        return A();
      } finally {
        sl = C;
      }
    }, M.unstable_scheduleCallback = function(b, A, C) {
      var ul = M.unstable_now();
      switch (typeof C == "object" && C !== null ? (C = C.delay, C = typeof C == "number" && 0 < C ? ul + C : ul) : C = ul, b) {
        case 1:
          var cl = -1;
          break;
        case 2:
          cl = 250;
          break;
        case 5:
          cl = 1073741823;
          break;
        case 4:
          cl = 1e4;
          break;
        default:
          cl = 5e3;
      }
      return cl = C + cl, b = {
        id: V++,
        callback: A,
        priorityLevel: b,
        startTime: C,
        expirationTime: cl,
        sortIndex: -1
      }, C > ul ? (b.sortIndex = C, Sl(E, b), k(p) === null && b === k(E) && (Hl ? (At(X), X = -1) : Hl = !0, rt(yt, C - ul))) : (b.sortIndex = cl, Sl(p, b), ol || ql || (ol = !0, jl || (jl = !0, xl()))), b;
    }, M.unstable_shouldYield = zl, M.unstable_wrapCallback = function(b) {
      var A = sl;
      return function() {
        var C = sl;
        sl = A;
        try {
          return b.apply(this, arguments);
        } finally {
          sl = C;
        }
      };
    };
  })(yi)), yi;
}
var bv;
function I1() {
  return bv || (bv = 1, si.exports = k1()), si.exports;
}
var vi = { exports: {} }, Vl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zv;
function P1() {
  if (zv) return Vl;
  zv = 1;
  var M = di();
  function Sl(p) {
    var E = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      E += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var V = 2; V < arguments.length; V++)
        E += "&args[]=" + encodeURIComponent(arguments[V]);
    }
    return "Minified React error #" + p + "; visit " + E + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function k() {
  }
  var h = {
    d: {
      f: k,
      r: function() {
        throw Error(Sl(522));
      },
      D: k,
      C: k,
      L: k,
      m: k,
      X: k,
      S: k,
      M: k
    },
    p: 0,
    findDOMNode: null
  }, fl = Symbol.for("react.portal");
  function bl(p, E, V) {
    var H = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: fl,
      key: H == null ? null : "" + H,
      children: p,
      containerInfo: E,
      implementation: V
    };
  }
  var dl = M.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function pl(p, E) {
    if (p === "font") return "";
    if (typeof E == "string")
      return E === "use-credentials" ? E : "";
  }
  return Vl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = h, Vl.createPortal = function(p, E) {
    var V = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!E || E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11)
      throw Error(Sl(299));
    return bl(p, E, null, V);
  }, Vl.flushSync = function(p) {
    var E = dl.T, V = h.p;
    try {
      if (dl.T = null, h.p = 2, p) return p();
    } finally {
      dl.T = E, h.p = V, h.d.f();
    }
  }, Vl.preconnect = function(p, E) {
    typeof p == "string" && (E ? (E = E.crossOrigin, E = typeof E == "string" ? E === "use-credentials" ? E : "" : void 0) : E = null, h.d.C(p, E));
  }, Vl.prefetchDNS = function(p) {
    typeof p == "string" && h.d.D(p);
  }, Vl.preinit = function(p, E) {
    if (typeof p == "string" && E && typeof E.as == "string") {
      var V = E.as, H = pl(V, E.crossOrigin), sl = typeof E.integrity == "string" ? E.integrity : void 0, ql = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
      V === "style" ? h.d.S(
        p,
        typeof E.precedence == "string" ? E.precedence : void 0,
        {
          crossOrigin: H,
          integrity: sl,
          fetchPriority: ql
        }
      ) : V === "script" && h.d.X(p, {
        crossOrigin: H,
        integrity: sl,
        fetchPriority: ql,
        nonce: typeof E.nonce == "string" ? E.nonce : void 0
      });
    }
  }, Vl.preinitModule = function(p, E) {
    if (typeof p == "string")
      if (typeof E == "object" && E !== null) {
        if (E.as == null || E.as === "script") {
          var V = pl(
            E.as,
            E.crossOrigin
          );
          h.d.M(p, {
            crossOrigin: V,
            integrity: typeof E.integrity == "string" ? E.integrity : void 0,
            nonce: typeof E.nonce == "string" ? E.nonce : void 0
          });
        }
      } else E == null && h.d.M(p);
  }, Vl.preload = function(p, E) {
    if (typeof p == "string" && typeof E == "object" && E !== null && typeof E.as == "string") {
      var V = E.as, H = pl(V, E.crossOrigin);
      h.d.L(p, V, {
        crossOrigin: H,
        integrity: typeof E.integrity == "string" ? E.integrity : void 0,
        nonce: typeof E.nonce == "string" ? E.nonce : void 0,
        type: typeof E.type == "string" ? E.type : void 0,
        fetchPriority: typeof E.fetchPriority == "string" ? E.fetchPriority : void 0,
        referrerPolicy: typeof E.referrerPolicy == "string" ? E.referrerPolicy : void 0,
        imageSrcSet: typeof E.imageSrcSet == "string" ? E.imageSrcSet : void 0,
        imageSizes: typeof E.imageSizes == "string" ? E.imageSizes : void 0,
        media: typeof E.media == "string" ? E.media : void 0
      });
    }
  }, Vl.preloadModule = function(p, E) {
    if (typeof p == "string")
      if (E) {
        var V = pl(E.as, E.crossOrigin);
        h.d.m(p, {
          as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0,
          crossOrigin: V,
          integrity: typeof E.integrity == "string" ? E.integrity : void 0
        });
      } else h.d.m(p);
  }, Vl.requestFormReset = function(p) {
    h.d.r(p);
  }, Vl.unstable_batchedUpdates = function(p, E) {
    return p(E);
  }, Vl.useFormState = function(p, E, V) {
    return dl.H.useFormState(p, E, V);
  }, Vl.useFormStatus = function() {
    return dl.H.useHostTransitionStatus();
  }, Vl.version = "19.2.0", Vl;
}
var _v;
function ld() {
  if (_v) return vi.exports;
  _v = 1;
  function M() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M);
      } catch (Sl) {
        console.error(Sl);
      }
  }
  return M(), vi.exports = P1(), vi.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tv;
function td() {
  if (Tv) return Te;
  Tv = 1;
  var M = I1(), Sl = di(), k = ld();
  function h(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        t += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function fl(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function bl(l) {
    var t = l, u = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do
        t = l, (t.flags & 4098) !== 0 && (u = t.return), l = t.return;
      while (l);
    }
    return t.tag === 3 ? u : null;
  }
  function dl(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function pl(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function p(l) {
    if (bl(l) !== l)
      throw Error(h(188));
  }
  function E(l) {
    var t = l.alternate;
    if (!t) {
      if (t = bl(l), t === null) throw Error(h(188));
      return t !== l ? null : l;
    }
    for (var u = l, a = t; ; ) {
      var e = u.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (a = e.return, a !== null) {
          u = a;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === u) return p(e), l;
          if (n === a) return p(e), t;
          n = n.sibling;
        }
        throw Error(h(188));
      }
      if (u.return !== a.return) u = e, a = n;
      else {
        for (var f = !1, c = e.child; c; ) {
          if (c === u) {
            f = !0, u = e, a = n;
            break;
          }
          if (c === a) {
            f = !0, a = e, u = n;
            break;
          }
          c = c.sibling;
        }
        if (!f) {
          for (c = n.child; c; ) {
            if (c === u) {
              f = !0, u = n, a = e;
              break;
            }
            if (c === a) {
              f = !0, a = n, u = e;
              break;
            }
            c = c.sibling;
          }
          if (!f) throw Error(h(189));
        }
      }
      if (u.alternate !== a) throw Error(h(190));
    }
    if (u.tag !== 3) throw Error(h(188));
    return u.stateNode.current === u ? l : t;
  }
  function V(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = V(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  var H = Object.assign, sl = Symbol.for("react.element"), ql = Symbol.for("react.transitional.element"), ol = Symbol.for("react.portal"), Hl = Symbol.for("react.fragment"), Et = Symbol.for("react.strict_mode"), tl = Symbol.for("react.profiler"), At = Symbol.for("react.consumer"), Rl = Symbol.for("react.context"), Ll = Symbol.for("react.forward_ref"), yt = Symbol.for("react.suspense"), jl = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), gl = Symbol.for("react.activity"), zl = Symbol.for("react.memo_cache_sentinel"), vt = Symbol.iterator;
  function xl(l) {
    return l === null || typeof l != "object" ? null : (l = vt && l[vt] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Au = Symbol.for("react.client.reference");
  function Ct(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Au ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Hl:
        return "Fragment";
      case tl:
        return "Profiler";
      case Et:
        return "StrictMode";
      case yt:
        return "Suspense";
      case jl:
        return "SuspenseList";
      case gl:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case ol:
          return "Portal";
        case Rl:
          return l.displayName || "Context";
        case At:
          return (l._context.displayName || "Context") + ".Consumer";
        case Ll:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case X:
          return t = l.displayName || null, t !== null ? t : Ct(l.type) || "Memo";
        case q:
          t = l._payload, l = l._init;
          try {
            return Ct(l(t));
          } catch {
          }
      }
    return null;
  }
  var rt = Array.isArray, b = Sl.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, A = k.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, C = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ul = [], cl = -1;
  function y(l) {
    return { current: l };
  }
  function T(l) {
    0 > cl || (l.current = ul[cl], ul[cl] = null, cl--);
  }
  function r(l, t) {
    cl++, ul[cl] = l.current, l.current = t;
  }
  var D = y(null), j = y(null), Q = y(null), I = y(null);
  function Kl(l, t) {
    switch (r(Q, t), r(j, l), r(D, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Gy(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = Gy(t), l = Xy(t, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    T(D), r(D, l);
  }
  function El() {
    T(D), T(j), T(Q);
  }
  function Ua(l) {
    l.memoizedState !== null && r(I, l);
    var t = D.current, u = Xy(t, l.type);
    t !== u && (r(j, l), r(D, u));
  }
  function Ae(l) {
    j.current === l && (T(D), T(j)), I.current === l && (T(I), Se._currentValue = C);
  }
  var xn, oi;
  function ru(l) {
    if (xn === void 0)
      try {
        throw Error();
      } catch (u) {
        var t = u.stack.trim().match(/\n( *(at )?)/);
        xn = t && t[1] || "", oi = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + xn + l + oi;
  }
  var Vn = !1;
  function Ln(l, t) {
    if (!l || Vn) return "";
    Vn = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var _ = function() {
                throw Error();
              };
              if (Object.defineProperty(_.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(_, []);
                } catch (g) {
                  var o = g;
                }
                Reflect.construct(l, [], _);
              } else {
                try {
                  _.call();
                } catch (g) {
                  o = g;
                }
                l.call(_.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (g) {
                o = g;
              }
              (_ = l()) && typeof _.catch == "function" && _.catch(function() {
              });
            }
          } catch (g) {
            if (g && o && typeof g.stack == "string")
              return [g.stack, o.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      e && e.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var n = a.DetermineComponentFrameRoot(), f = n[0], c = n[1];
      if (f && c) {
        var i = f.split(`
`), d = c.split(`
`);
        for (e = a = 0; a < i.length && !i[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; e < d.length && !d[e].includes(
          "DetermineComponentFrameRoot"
        ); )
          e++;
        if (a === i.length || e === d.length)
          for (a = i.length - 1, e = d.length - 1; 1 <= a && 0 <= e && i[a] !== d[e]; )
            e--;
        for (; 1 <= a && 0 <= e; a--, e--)
          if (i[a] !== d[e]) {
            if (a !== 1 || e !== 1)
              do
                if (a--, e--, 0 > e || i[a] !== d[e]) {
                  var S = `
` + i[a].replace(" at new ", " at ");
                  return l.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", l.displayName)), S;
                }
              while (1 <= a && 0 <= e);
            break;
          }
      }
    } finally {
      Vn = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? ru(u) : "";
  }
  function Mv(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return ru(l.type);
      case 16:
        return ru("Lazy");
      case 13:
        return l.child !== t && t !== null ? ru("Suspense Fallback") : ru("Suspense");
      case 19:
        return ru("SuspenseList");
      case 0:
      case 15:
        return Ln(l.type, !1);
      case 11:
        return Ln(l.type.render, !1);
      case 1:
        return Ln(l.type, !0);
      case 31:
        return ru("Activity");
      default:
        return "";
    }
  }
  function hi(l) {
    try {
      var t = "", u = null;
      do
        t += Mv(l, u), u = l, l = l.return;
      while (l);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var Kn = Object.prototype.hasOwnProperty, Jn = M.unstable_scheduleCallback, wn = M.unstable_cancelCallback, Ov = M.unstable_shouldYield, Dv = M.unstable_requestPaint, lt = M.unstable_now, Uv = M.unstable_getCurrentPriorityLevel, gi = M.unstable_ImmediatePriority, Si = M.unstable_UserBlockingPriority, re = M.unstable_NormalPriority, pv = M.unstable_LowPriority, bi = M.unstable_IdlePriority, Nv = M.log, Hv = M.unstable_setDisableYieldValue, pa = null, tt = null;
  function It(l) {
    if (typeof Nv == "function" && Hv(l), tt && typeof tt.setStrictMode == "function")
      try {
        tt.setStrictMode(pa, l);
      } catch {
      }
  }
  var ut = Math.clz32 ? Math.clz32 : Bv, Rv = Math.log, Cv = Math.LN2;
  function Bv(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Rv(l) / Cv | 0) | 0;
  }
  var Me = 256, Oe = 262144, De = 4194304;
  function Mu(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Ue(l, t, u) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var e = 0, n = l.suspendedLanes, f = l.pingedLanes;
    l = l.warmLanes;
    var c = a & 134217727;
    return c !== 0 ? (a = c & ~n, a !== 0 ? e = Mu(a) : (f &= c, f !== 0 ? e = Mu(f) : u || (u = c & ~l, u !== 0 && (e = Mu(u))))) : (c = a & ~n, c !== 0 ? e = Mu(c) : f !== 0 ? e = Mu(f) : u || (u = a & ~l, u !== 0 && (e = Mu(u)))), e === 0 ? 0 : t !== 0 && t !== e && (t & n) === 0 && (n = e & -e, u = t & -t, n >= u || n === 32 && (u & 4194048) !== 0) ? t : e;
  }
  function Na(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function qv(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function zi() {
    var l = De;
    return De <<= 1, (De & 62914560) === 0 && (De = 4194304), l;
  }
  function Wn(l) {
    for (var t = [], u = 0; 31 > u; u++) t.push(l);
    return t;
  }
  function Ha(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function jv(l, t, u, a, e, n) {
    var f = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var c = l.entanglements, i = l.expirationTimes, d = l.hiddenUpdates;
    for (u = f & ~u; 0 < u; ) {
      var S = 31 - ut(u), _ = 1 << S;
      c[S] = 0, i[S] = -1;
      var o = d[S];
      if (o !== null)
        for (d[S] = null, S = 0; S < o.length; S++) {
          var g = o[S];
          g !== null && (g.lane &= -536870913);
        }
      u &= ~_;
    }
    a !== 0 && _i(l, a, 0), n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(f & ~t));
  }
  function _i(l, t, u) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var a = 31 - ut(t);
    l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | u & 261930;
  }
  function Ti(l, t) {
    var u = l.entangledLanes |= t;
    for (l = l.entanglements; u; ) {
      var a = 31 - ut(u), e = 1 << a;
      e & t | l[a] & t && (l[a] |= t), u &= ~e;
    }
  }
  function Ei(l, t) {
    var u = t & -t;
    return u = (u & 42) !== 0 ? 1 : $n(u), (u & (l.suspendedLanes | t)) !== 0 ? 0 : u;
  }
  function $n(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Fn(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Ai() {
    var l = A.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : iv(l.type));
  }
  function ri(l, t) {
    var u = A.p;
    try {
      return A.p = l, t();
    } finally {
      A.p = u;
    }
  }
  var Pt = Math.random().toString(36).slice(2), Yl = "__reactFiber$" + Pt, wl = "__reactProps$" + Pt, Lu = "__reactContainer$" + Pt, kn = "__reactEvents$" + Pt, Yv = "__reactListeners$" + Pt, Gv = "__reactHandles$" + Pt, Mi = "__reactResources$" + Pt, Ra = "__reactMarker$" + Pt;
  function In(l) {
    delete l[Yl], delete l[wl], delete l[kn], delete l[Yv], delete l[Gv];
  }
  function Ku(l) {
    var t = l[Yl];
    if (t) return t;
    for (var u = l.parentNode; u; ) {
      if (t = u[Lu] || u[Yl]) {
        if (u = t.alternate, t.child !== null || u !== null && u.child !== null)
          for (l = Jy(l); l !== null; ) {
            if (u = l[Yl]) return u;
            l = Jy(l);
          }
        return t;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function Ju(l) {
    if (l = l[Yl] || l[Lu]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function Ca(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(h(33));
  }
  function wu(l) {
    var t = l[Mi];
    return t || (t = l[Mi] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Cl(l) {
    l[Ra] = !0;
  }
  var Oi = /* @__PURE__ */ new Set(), Di = {};
  function Ou(l, t) {
    Wu(l, t), Wu(l + "Capture", t);
  }
  function Wu(l, t) {
    for (Di[l] = t, l = 0; l < t.length; l++)
      Oi.add(t[l]);
  }
  var Xv = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Ui = {}, pi = {};
  function Qv(l) {
    return Kn.call(pi, l) ? !0 : Kn.call(Ui, l) ? !1 : Xv.test(l) ? pi[l] = !0 : (Ui[l] = !0, !1);
  }
  function pe(l, t, u) {
    if (Qv(t))
      if (u === null) l.removeAttribute(t);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + u);
      }
  }
  function Ne(l, t, u) {
    if (u === null) l.removeAttribute(t);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + u);
    }
  }
  function Bt(l, t, u, a) {
    if (a === null) l.removeAttribute(u);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(t, u, "" + a);
    }
  }
  function mt(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Ni(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Zv(l, t, u) {
    var a = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      t
    );
    if (!l.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var e = a.get, n = a.set;
      return Object.defineProperty(l, t, {
        configurable: !0,
        get: function() {
          return e.call(this);
        },
        set: function(f) {
          u = "" + f, n.call(this, f);
        }
      }), Object.defineProperty(l, t, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return u;
        },
        setValue: function(f) {
          u = "" + f;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[t];
        }
      };
    }
  }
  function Pn(l) {
    if (!l._valueTracker) {
      var t = Ni(l) ? "checked" : "value";
      l._valueTracker = Zv(
        l,
        t,
        "" + l[t]
      );
    }
  }
  function Hi(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var u = t.getValue(), a = "";
    return l && (a = Ni(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== u ? (t.setValue(l), !0) : !1;
  }
  function He(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var xv = /[\n"\\]/g;
  function dt(l) {
    return l.replace(
      xv,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function lf(l, t, u, a, e, n, f, c) {
    l.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.type = f : l.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + mt(t)) : l.value !== "" + mt(t) && (l.value = "" + mt(t)) : f !== "submit" && f !== "reset" || l.removeAttribute("value"), t != null ? tf(l, f, mt(t)) : u != null ? tf(l, f, mt(u)) : a != null && l.removeAttribute("value"), e == null && n != null && (l.defaultChecked = !!n), e != null && (l.checked = e && typeof e != "function" && typeof e != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + mt(c) : l.removeAttribute("name");
  }
  function Ri(l, t, u, a, e, n, f, c) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || u != null) {
      if (!(n !== "submit" && n !== "reset" || t != null)) {
        Pn(l);
        return;
      }
      u = u != null ? "" + mt(u) : "", t = t != null ? "" + mt(t) : u, c || t === l.value || (l.value = t), l.defaultValue = t;
    }
    a = a ?? e, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = c ? l.checked : !!a, l.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (l.name = f), Pn(l);
  }
  function tf(l, t, u) {
    t === "number" && He(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function $u(l, t, u, a) {
    if (l = l.options, t) {
      t = {};
      for (var e = 0; e < u.length; e++)
        t["$" + u[e]] = !0;
      for (u = 0; u < l.length; u++)
        e = t.hasOwnProperty("$" + l[u].value), l[u].selected !== e && (l[u].selected = e), e && a && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + mt(u), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === u) {
          l[e].selected = !0, a && (l[e].defaultSelected = !0);
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ci(l, t, u) {
    if (t != null && (t = "" + mt(t), t !== l.value && (l.value = t), u == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = u != null ? "" + mt(u) : "";
  }
  function Bi(l, t, u, a) {
    if (t == null) {
      if (a != null) {
        if (u != null) throw Error(h(92));
        if (rt(a)) {
          if (1 < a.length) throw Error(h(93));
          a = a[0];
        }
        u = a;
      }
      u == null && (u = ""), t = u;
    }
    u = mt(t), l.defaultValue = u, a = l.textContent, a === u && a !== "" && a !== null && (l.value = a), Pn(l);
  }
  function Fu(l, t) {
    if (t) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var Vv = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function qi(l, t, u) {
    var a = t.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, u) : typeof u != "number" || u === 0 || Vv.has(t) ? t === "float" ? l.cssFloat = u : l[t] = ("" + u).trim() : l[t] = u + "px";
  }
  function ji(l, t, u) {
    if (t != null && typeof t != "object")
      throw Error(h(62));
    if (l = l.style, u != null) {
      for (var a in u)
        !u.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "");
      for (var e in t)
        a = t[e], t.hasOwnProperty(e) && u[e] !== a && qi(l, e, a);
    } else
      for (var n in t)
        t.hasOwnProperty(n) && qi(l, n, t[n]);
  }
  function uf(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Lv = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Kv = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Re(l) {
    return Kv.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function qt() {
  }
  var af = null;
  function ef(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var ku = null, Iu = null;
  function Yi(l) {
    var t = Ju(l);
    if (t && (l = t.stateNode)) {
      var u = l[wl] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (lf(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), t = u.name, u.type === "radio" && t != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + dt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < u.length; t++) {
              var a = u[t];
              if (a !== l && a.form === l.form) {
                var e = a[wl] || null;
                if (!e) throw Error(h(90));
                lf(
                  a,
                  e.value,
                  e.defaultValue,
                  e.defaultValue,
                  e.checked,
                  e.defaultChecked,
                  e.type,
                  e.name
                );
              }
            }
            for (t = 0; t < u.length; t++)
              a = u[t], a.form === l.form && Hi(a);
          }
          break l;
        case "textarea":
          Ci(l, u.value, u.defaultValue);
          break l;
        case "select":
          t = u.value, t != null && $u(l, !!u.multiple, t, !1);
      }
    }
  }
  var nf = !1;
  function Gi(l, t, u) {
    if (nf) return l(t, u);
    nf = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if (nf = !1, (ku !== null || Iu !== null) && (_n(), ku && (t = ku, l = Iu, Iu = ku = null, Yi(t), l)))
        for (t = 0; t < l.length; t++) Yi(l[t]);
    }
  }
  function Ba(l, t) {
    var u = l.stateNode;
    if (u === null) return null;
    var a = u[wl] || null;
    if (a === null) return null;
    u = a[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (l = l.type, a = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !a;
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        h(231, t, typeof u)
      );
    return u;
  }
  var jt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ff = !1;
  if (jt)
    try {
      var qa = {};
      Object.defineProperty(qa, "passive", {
        get: function() {
          ff = !0;
        }
      }), window.addEventListener("test", qa, qa), window.removeEventListener("test", qa, qa);
    } catch {
      ff = !1;
    }
  var lu = null, cf = null, Ce = null;
  function Xi() {
    if (Ce) return Ce;
    var l, t = cf, u = t.length, a, e = "value" in lu ? lu.value : lu.textContent, n = e.length;
    for (l = 0; l < u && t[l] === e[l]; l++) ;
    var f = u - l;
    for (a = 1; a <= f && t[u - a] === e[n - a]; a++) ;
    return Ce = e.slice(l, 1 < a ? 1 - a : void 0);
  }
  function Be(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function qe() {
    return !0;
  }
  function Qi() {
    return !1;
  }
  function Wl(l) {
    function t(u, a, e, n, f) {
      this._reactName = u, this._targetInst = e, this.type = a, this.nativeEvent = n, this.target = f, this.currentTarget = null;
      for (var c in l)
        l.hasOwnProperty(c) && (u = l[c], this[c] = u ? u(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? qe : Qi, this.isPropagationStopped = Qi, this;
    }
    return H(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = qe);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = qe);
      },
      persist: function() {
      },
      isPersistent: qe
    }), t;
  }
  var Du = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, je = Wl(Du), ja = H({}, Du, { view: 0, detail: 0 }), Jv = Wl(ja), sf, yf, Ya, Ye = H({}, ja, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: mf,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Ya && (Ya && l.type === "mousemove" ? (sf = l.screenX - Ya.screenX, yf = l.screenY - Ya.screenY) : yf = sf = 0, Ya = l), sf);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : yf;
    }
  }), Zi = Wl(Ye), wv = H({}, Ye, { dataTransfer: 0 }), Wv = Wl(wv), $v = H({}, ja, { relatedTarget: 0 }), vf = Wl($v), Fv = H({}, Du, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), kv = Wl(Fv), Iv = H({}, Du, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Pv = Wl(Iv), lm = H({}, Du, { data: 0 }), xi = Wl(lm), tm = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, um = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, am = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function em(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = am[l]) ? !!t[l] : !1;
  }
  function mf() {
    return em;
  }
  var nm = H({}, ja, {
    key: function(l) {
      if (l.key) {
        var t = tm[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = Be(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? um[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: mf,
    charCode: function(l) {
      return l.type === "keypress" ? Be(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Be(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), fm = Wl(nm), cm = H({}, Ye, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Vi = Wl(cm), im = H({}, ja, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: mf
  }), sm = Wl(im), ym = H({}, Du, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), vm = Wl(ym), mm = H({}, Ye, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), dm = Wl(mm), om = H({}, Du, {
    newState: 0,
    oldState: 0
  }), hm = Wl(om), gm = [9, 13, 27, 32], df = jt && "CompositionEvent" in window, Ga = null;
  jt && "documentMode" in document && (Ga = document.documentMode);
  var Sm = jt && "TextEvent" in window && !Ga, Li = jt && (!df || Ga && 8 < Ga && 11 >= Ga), Ki = " ", Ji = !1;
  function wi(l, t) {
    switch (l) {
      case "keyup":
        return gm.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Wi(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Pu = !1;
  function bm(l, t) {
    switch (l) {
      case "compositionend":
        return Wi(t);
      case "keypress":
        return t.which !== 32 ? null : (Ji = !0, Ki);
      case "textInput":
        return l = t.data, l === Ki && Ji ? null : l;
      default:
        return null;
    }
  }
  function zm(l, t) {
    if (Pu)
      return l === "compositionend" || !df && wi(l, t) ? (l = Xi(), Ce = cf = lu = null, Pu = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Li && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var _m = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function $i(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!_m[l.type] : t === "textarea";
  }
  function Fi(l, t, u, a) {
    ku ? Iu ? Iu.push(a) : Iu = [a] : ku = a, t = Dn(t, "onChange"), 0 < t.length && (u = new je(
      "onChange",
      "change",
      null,
      u,
      a
    ), l.push({ event: u, listeners: t }));
  }
  var Xa = null, Qa = null;
  function Tm(l) {
    Ry(l, 0);
  }
  function Ge(l) {
    var t = Ca(l);
    if (Hi(t)) return l;
  }
  function ki(l, t) {
    if (l === "change") return t;
  }
  var Ii = !1;
  if (jt) {
    var of;
    if (jt) {
      var hf = "oninput" in document;
      if (!hf) {
        var Pi = document.createElement("div");
        Pi.setAttribute("oninput", "return;"), hf = typeof Pi.oninput == "function";
      }
      of = hf;
    } else of = !1;
    Ii = of && (!document.documentMode || 9 < document.documentMode);
  }
  function ls() {
    Xa && (Xa.detachEvent("onpropertychange", ts), Qa = Xa = null);
  }
  function ts(l) {
    if (l.propertyName === "value" && Ge(Qa)) {
      var t = [];
      Fi(
        t,
        Qa,
        l,
        ef(l)
      ), Gi(Tm, t);
    }
  }
  function Em(l, t, u) {
    l === "focusin" ? (ls(), Xa = t, Qa = u, Xa.attachEvent("onpropertychange", ts)) : l === "focusout" && ls();
  }
  function Am(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Ge(Qa);
  }
  function rm(l, t) {
    if (l === "click") return Ge(t);
  }
  function Mm(l, t) {
    if (l === "input" || l === "change")
      return Ge(t);
  }
  function Om(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var at = typeof Object.is == "function" ? Object.is : Om;
  function Za(l, t) {
    if (at(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var u = Object.keys(l), a = Object.keys(t);
    if (u.length !== a.length) return !1;
    for (a = 0; a < u.length; a++) {
      var e = u[a];
      if (!Kn.call(t, e) || !at(l[e], t[e]))
        return !1;
    }
    return !0;
  }
  function us(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function as(l, t) {
    var u = us(l);
    l = 0;
    for (var a; u; ) {
      if (u.nodeType === 3) {
        if (a = l + u.textContent.length, l <= t && a >= t)
          return { node: u, offset: t - l };
        l = a;
      }
      l: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break l;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = us(u);
    }
  }
  function es(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? es(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function ns(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = He(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof t.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = t.contentWindow;
      else break;
      t = He(l.document);
    }
    return t;
  }
  function gf(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var Dm = jt && "documentMode" in document && 11 >= document.documentMode, la = null, Sf = null, xa = null, bf = !1;
  function fs(l, t, u) {
    var a = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    bf || la == null || la !== He(a) || (a = la, "selectionStart" in a && gf(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), xa && Za(xa, a) || (xa = a, a = Dn(Sf, "onSelect"), 0 < a.length && (t = new je(
      "onSelect",
      "select",
      null,
      t,
      u
    ), l.push({ event: t, listeners: a }), t.target = la)));
  }
  function Uu(l, t) {
    var u = {};
    return u[l.toLowerCase()] = t.toLowerCase(), u["Webkit" + l] = "webkit" + t, u["Moz" + l] = "moz" + t, u;
  }
  var ta = {
    animationend: Uu("Animation", "AnimationEnd"),
    animationiteration: Uu("Animation", "AnimationIteration"),
    animationstart: Uu("Animation", "AnimationStart"),
    transitionrun: Uu("Transition", "TransitionRun"),
    transitionstart: Uu("Transition", "TransitionStart"),
    transitioncancel: Uu("Transition", "TransitionCancel"),
    transitionend: Uu("Transition", "TransitionEnd")
  }, zf = {}, cs = {};
  jt && (cs = document.createElement("div").style, "AnimationEvent" in window || (delete ta.animationend.animation, delete ta.animationiteration.animation, delete ta.animationstart.animation), "TransitionEvent" in window || delete ta.transitionend.transition);
  function pu(l) {
    if (zf[l]) return zf[l];
    if (!ta[l]) return l;
    var t = ta[l], u;
    for (u in t)
      if (t.hasOwnProperty(u) && u in cs)
        return zf[l] = t[u];
    return l;
  }
  var is = pu("animationend"), ss = pu("animationiteration"), ys = pu("animationstart"), Um = pu("transitionrun"), pm = pu("transitionstart"), Nm = pu("transitioncancel"), vs = pu("transitionend"), ms = /* @__PURE__ */ new Map(), _f = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  _f.push("scrollEnd");
  function Mt(l, t) {
    ms.set(l, t), Ou(t, [l]);
  }
  var Xe = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof Vu == "object" && typeof Vu.emit == "function") {
      Vu.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, ot = [], ua = 0, Tf = 0;
  function Qe() {
    for (var l = ua, t = Tf = ua = 0; t < l; ) {
      var u = ot[t];
      ot[t++] = null;
      var a = ot[t];
      ot[t++] = null;
      var e = ot[t];
      ot[t++] = null;
      var n = ot[t];
      if (ot[t++] = null, a !== null && e !== null) {
        var f = a.pending;
        f === null ? e.next = e : (e.next = f.next, f.next = e), a.pending = e;
      }
      n !== 0 && ds(u, e, n);
    }
  }
  function Ze(l, t, u, a) {
    ot[ua++] = l, ot[ua++] = t, ot[ua++] = u, ot[ua++] = a, Tf |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a);
  }
  function Ef(l, t, u, a) {
    return Ze(l, t, u, a), xe(l);
  }
  function Nu(l, t) {
    return Ze(l, null, null, t), xe(l);
  }
  function ds(l, t, u) {
    l.lanes |= u;
    var a = l.alternate;
    a !== null && (a.lanes |= u);
    for (var e = !1, n = l.return; n !== null; )
      n.childLanes |= u, a = n.alternate, a !== null && (a.childLanes |= u), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (e = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, e && t !== null && (e = 31 - ut(u), l = n.hiddenUpdates, a = l[e], a === null ? l[e] = [t] : a.push(t), t.lane = u | 536870912), n) : null;
  }
  function xe(l) {
    if (50 < ye)
      throw ye = 0, Hc = null, Error(h(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var aa = {};
  function Hm(l, t, u, a) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function et(l, t, u, a) {
    return new Hm(l, t, u, a);
  }
  function Af(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Yt(l, t) {
    var u = l.alternate;
    return u === null ? (u = et(
      l.tag,
      t,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = t, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, t = l.dependencies, u.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function os(l, t) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, t = u.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function Ve(l, t, u, a, e, n) {
    var f = 0;
    if (a = l, typeof l == "function") Af(l) && (f = 1);
    else if (typeof l == "string")
      f = j1(
        l,
        u,
        D.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case gl:
          return l = et(31, u, t, e), l.elementType = gl, l.lanes = n, l;
        case Hl:
          return Hu(u.children, e, n, t);
        case Et:
          f = 8, e |= 24;
          break;
        case tl:
          return l = et(12, u, t, e | 2), l.elementType = tl, l.lanes = n, l;
        case yt:
          return l = et(13, u, t, e), l.elementType = yt, l.lanes = n, l;
        case jl:
          return l = et(19, u, t, e), l.elementType = jl, l.lanes = n, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Rl:
                f = 10;
                break l;
              case At:
                f = 9;
                break l;
              case Ll:
                f = 11;
                break l;
              case X:
                f = 14;
                break l;
              case q:
                f = 16, a = null;
                break l;
            }
          f = 29, u = Error(
            h(130, l === null ? "null" : typeof l, "")
          ), a = null;
      }
    return t = et(f, u, t, e), t.elementType = l, t.type = a, t.lanes = n, t;
  }
  function Hu(l, t, u, a) {
    return l = et(7, l, a, t), l.lanes = u, l;
  }
  function rf(l, t, u) {
    return l = et(6, l, null, t), l.lanes = u, l;
  }
  function hs(l) {
    var t = et(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function Mf(l, t, u) {
    return t = et(
      4,
      l.children !== null ? l.children : [],
      l.key,
      t
    ), t.lanes = u, t.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, t;
  }
  var gs = /* @__PURE__ */ new WeakMap();
  function ht(l, t) {
    if (typeof l == "object" && l !== null) {
      var u = gs.get(l);
      return u !== void 0 ? u : (t = {
        value: l,
        source: t,
        stack: hi(t)
      }, gs.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: hi(t)
    };
  }
  var ea = [], na = 0, Le = null, Va = 0, gt = [], St = 0, tu = null, pt = 1, Nt = "";
  function Gt(l, t) {
    ea[na++] = Va, ea[na++] = Le, Le = l, Va = t;
  }
  function Ss(l, t, u) {
    gt[St++] = pt, gt[St++] = Nt, gt[St++] = tu, tu = l;
    var a = pt;
    l = Nt;
    var e = 32 - ut(a) - 1;
    a &= ~(1 << e), u += 1;
    var n = 32 - ut(t) + e;
    if (30 < n) {
      var f = e - e % 5;
      n = (a & (1 << f) - 1).toString(32), a >>= f, e -= f, pt = 1 << 32 - ut(t) + e | u << e | a, Nt = n + l;
    } else
      pt = 1 << n | u << e | a, Nt = l;
  }
  function Of(l) {
    l.return !== null && (Gt(l, 1), Ss(l, 1, 0));
  }
  function Df(l) {
    for (; l === Le; )
      Le = ea[--na], ea[na] = null, Va = ea[--na], ea[na] = null;
    for (; l === tu; )
      tu = gt[--St], gt[St] = null, Nt = gt[--St], gt[St] = null, pt = gt[--St], gt[St] = null;
  }
  function bs(l, t) {
    gt[St++] = pt, gt[St++] = Nt, gt[St++] = tu, pt = t.id, Nt = t.overflow, tu = l;
  }
  var Gl = null, yl = null, J = !1, uu = null, bt = !1, Uf = Error(h(519));
  function au(l) {
    var t = Error(
      h(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw La(ht(t, l)), Uf;
  }
  function zs(l) {
    var t = l.stateNode, u = l.type, a = l.memoizedProps;
    switch (t[Yl] = l, t[wl] = a, u) {
      case "dialog":
        x("cancel", t), x("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        x("load", t);
        break;
      case "video":
      case "audio":
        for (u = 0; u < me.length; u++)
          x(me[u], t);
        break;
      case "source":
        x("error", t);
        break;
      case "img":
      case "image":
      case "link":
        x("error", t), x("load", t);
        break;
      case "details":
        x("toggle", t);
        break;
      case "input":
        x("invalid", t), Ri(
          t,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        );
        break;
      case "select":
        x("invalid", t);
        break;
      case "textarea":
        x("invalid", t), Bi(t, a.value, a.defaultValue, a.children);
    }
    u = a.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || t.textContent === "" + u || a.suppressHydrationWarning === !0 || jy(t.textContent, u) ? (a.popover != null && (x("beforetoggle", t), x("toggle", t)), a.onScroll != null && x("scroll", t), a.onScrollEnd != null && x("scrollend", t), a.onClick != null && (t.onclick = qt), t = !0) : t = !1, t || au(l, !0);
  }
  function _s(l) {
    for (Gl = l.return; Gl; )
      switch (Gl.tag) {
        case 5:
        case 31:
        case 13:
          bt = !1;
          return;
        case 27:
        case 3:
          bt = !0;
          return;
        default:
          Gl = Gl.return;
      }
  }
  function fa(l) {
    if (l !== Gl) return !1;
    if (!J) return _s(l), J = !0, !1;
    var t = l.tag, u;
    if ((u = t !== 3 && t !== 27) && ((u = t === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || Jc(l.type, l.memoizedProps)), u = !u), u && yl && au(l), _s(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(h(317));
      yl = Ky(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(h(317));
      yl = Ky(l);
    } else
      t === 27 ? (t = yl, Su(l.type) ? (l = kc, kc = null, yl = l) : yl = t) : yl = Gl ? _t(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Ru() {
    yl = Gl = null, J = !1;
  }
  function pf() {
    var l = uu;
    return l !== null && (Il === null ? Il = l : Il.push.apply(
      Il,
      l
    ), uu = null), l;
  }
  function La(l) {
    uu === null ? uu = [l] : uu.push(l);
  }
  var Nf = y(null), Cu = null, Xt = null;
  function eu(l, t, u) {
    r(Nf, t._currentValue), t._currentValue = u;
  }
  function Qt(l) {
    l._currentValue = Nf.current, T(Nf);
  }
  function Hf(l, t, u) {
    for (; l !== null; ) {
      var a = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), l === u) break;
      l = l.return;
    }
  }
  function Rf(l, t, u, a) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null; ) {
      var n = e.dependencies;
      if (n !== null) {
        var f = e.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var c = n;
          n = e;
          for (var i = 0; i < t.length; i++)
            if (c.context === t[i]) {
              n.lanes |= u, c = n.alternate, c !== null && (c.lanes |= u), Hf(
                n.return,
                u,
                l
              ), a || (f = null);
              break l;
            }
          n = c.next;
        }
      } else if (e.tag === 18) {
        if (f = e.return, f === null) throw Error(h(341));
        f.lanes |= u, n = f.alternate, n !== null && (n.lanes |= u), Hf(f, u, l), f = null;
      } else f = e.child;
      if (f !== null) f.return = e;
      else
        for (f = e; f !== null; ) {
          if (f === l) {
            f = null;
            break;
          }
          if (e = f.sibling, e !== null) {
            e.return = f.return, f = e;
            break;
          }
          f = f.return;
        }
      e = f;
    }
  }
  function ca(l, t, u, a) {
    l = null;
    for (var e = t, n = !1; e !== null; ) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = !0;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var f = e.alternate;
        if (f === null) throw Error(h(387));
        if (f = f.memoizedProps, f !== null) {
          var c = e.type;
          at(e.pendingProps.value, f.value) || (l !== null ? l.push(c) : l = [c]);
        }
      } else if (e === I.current) {
        if (f = e.alternate, f === null) throw Error(h(387));
        f.memoizedState.memoizedState !== e.memoizedState.memoizedState && (l !== null ? l.push(Se) : l = [Se]);
      }
      e = e.return;
    }
    l !== null && Rf(
      t,
      l,
      u,
      a
    ), t.flags |= 262144;
  }
  function Ke(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!at(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function Bu(l) {
    Cu = l, Xt = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Xl(l) {
    return Ts(Cu, l);
  }
  function Je(l, t) {
    return Cu === null && Bu(l), Ts(l, t);
  }
  function Ts(l, t) {
    var u = t._currentValue;
    if (t = { context: t, memoizedValue: u, next: null }, Xt === null) {
      if (l === null) throw Error(h(308));
      Xt = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else Xt = Xt.next = t;
    return u;
  }
  var Rm = typeof AbortController < "u" ? AbortController : function() {
    var l = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(u, a) {
        l.push(a);
      }
    };
    this.abort = function() {
      t.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, Cm = M.unstable_scheduleCallback, Bm = M.unstable_NormalPriority, Ml = {
    $$typeof: Rl,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Cf() {
    return {
      controller: new Rm(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ka(l) {
    l.refCount--, l.refCount === 0 && Cm(Bm, function() {
      l.controller.abort();
    });
  }
  var Ja = null, Bf = 0, ia = 0, sa = null;
  function qm(l, t) {
    if (Ja === null) {
      var u = Ja = [];
      Bf = 0, ia = Yc(), sa = {
        status: "pending",
        value: void 0,
        then: function(a) {
          u.push(a);
        }
      };
    }
    return Bf++, t.then(Es, Es), t;
  }
  function Es() {
    if (--Bf === 0 && Ja !== null) {
      sa !== null && (sa.status = "fulfilled");
      var l = Ja;
      Ja = null, ia = 0, sa = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function jm(l, t) {
    var u = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(e) {
        u.push(e);
      }
    };
    return l.then(
      function() {
        a.status = "fulfilled", a.value = t;
        for (var e = 0; e < u.length; e++) (0, u[e])(t);
      },
      function(e) {
        for (a.status = "rejected", a.reason = e, e = 0; e < u.length; e++)
          (0, u[e])(void 0);
      }
    ), a;
  }
  var As = b.S;
  b.S = function(l, t) {
    fy = lt(), typeof t == "object" && t !== null && typeof t.then == "function" && qm(l, t), As !== null && As(l, t);
  };
  var qu = y(null);
  function qf() {
    var l = qu.current;
    return l !== null ? l : il.pooledCache;
  }
  function we(l, t) {
    t === null ? r(qu, qu.current) : r(qu, t.pool);
  }
  function rs() {
    var l = qf();
    return l === null ? null : { parent: Ml._currentValue, pool: l };
  }
  var ya = Error(h(460)), jf = Error(h(474)), We = Error(h(542)), $e = { then: function() {
  } };
  function Ms(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Os(l, t, u) {
    switch (u = l[u], u === void 0 ? l.push(t) : u !== t && (t.then(qt, qt), t = u), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, Us(l), l;
      default:
        if (typeof t.status == "string") t.then(qt, qt);
        else {
          if (l = il, l !== null && 100 < l.shellSuspendCounter)
            throw Error(h(482));
          l = t, l.status = "pending", l.then(
            function(a) {
              if (t.status === "pending") {
                var e = t;
                e.status = "fulfilled", e.value = a;
              }
            },
            function(a) {
              if (t.status === "pending") {
                var e = t;
                e.status = "rejected", e.reason = a;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, Us(l), l;
        }
        throw Yu = t, ya;
    }
  }
  function ju(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (u) {
      throw u !== null && typeof u == "object" && typeof u.then == "function" ? (Yu = u, ya) : u;
    }
  }
  var Yu = null;
  function Ds() {
    if (Yu === null) throw Error(h(459));
    var l = Yu;
    return Yu = null, l;
  }
  function Us(l) {
    if (l === ya || l === We)
      throw Error(h(483));
  }
  var va = null, wa = 0;
  function Fe(l) {
    var t = wa;
    return wa += 1, va === null && (va = []), Os(va, l, t);
  }
  function Wa(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function ke(l, t) {
    throw t.$$typeof === sl ? Error(h(525)) : (l = Object.prototype.toString.call(t), Error(
      h(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function ps(l) {
    function t(v, s) {
      if (l) {
        var m = v.deletions;
        m === null ? (v.deletions = [s], v.flags |= 16) : m.push(s);
      }
    }
    function u(v, s) {
      if (!l) return null;
      for (; s !== null; )
        t(v, s), s = s.sibling;
      return null;
    }
    function a(v) {
      for (var s = /* @__PURE__ */ new Map(); v !== null; )
        v.key !== null ? s.set(v.key, v) : s.set(v.index, v), v = v.sibling;
      return s;
    }
    function e(v, s) {
      return v = Yt(v, s), v.index = 0, v.sibling = null, v;
    }
    function n(v, s, m) {
      return v.index = m, l ? (m = v.alternate, m !== null ? (m = m.index, m < s ? (v.flags |= 67108866, s) : m) : (v.flags |= 67108866, s)) : (v.flags |= 1048576, s);
    }
    function f(v) {
      return l && v.alternate === null && (v.flags |= 67108866), v;
    }
    function c(v, s, m, z) {
      return s === null || s.tag !== 6 ? (s = rf(m, v.mode, z), s.return = v, s) : (s = e(s, m), s.return = v, s);
    }
    function i(v, s, m, z) {
      var N = m.type;
      return N === Hl ? S(
        v,
        s,
        m.props.children,
        z,
        m.key
      ) : s !== null && (s.elementType === N || typeof N == "object" && N !== null && N.$$typeof === q && ju(N) === s.type) ? (s = e(s, m.props), Wa(s, m), s.return = v, s) : (s = Ve(
        m.type,
        m.key,
        m.props,
        null,
        v.mode,
        z
      ), Wa(s, m), s.return = v, s);
    }
    function d(v, s, m, z) {
      return s === null || s.tag !== 4 || s.stateNode.containerInfo !== m.containerInfo || s.stateNode.implementation !== m.implementation ? (s = Mf(m, v.mode, z), s.return = v, s) : (s = e(s, m.children || []), s.return = v, s);
    }
    function S(v, s, m, z, N) {
      return s === null || s.tag !== 7 ? (s = Hu(
        m,
        v.mode,
        z,
        N
      ), s.return = v, s) : (s = e(s, m), s.return = v, s);
    }
    function _(v, s, m) {
      if (typeof s == "string" && s !== "" || typeof s == "number" || typeof s == "bigint")
        return s = rf(
          "" + s,
          v.mode,
          m
        ), s.return = v, s;
      if (typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case ql:
            return m = Ve(
              s.type,
              s.key,
              s.props,
              null,
              v.mode,
              m
            ), Wa(m, s), m.return = v, m;
          case ol:
            return s = Mf(
              s,
              v.mode,
              m
            ), s.return = v, s;
          case q:
            return s = ju(s), _(v, s, m);
        }
        if (rt(s) || xl(s))
          return s = Hu(
            s,
            v.mode,
            m,
            null
          ), s.return = v, s;
        if (typeof s.then == "function")
          return _(v, Fe(s), m);
        if (s.$$typeof === Rl)
          return _(
            v,
            Je(v, s),
            m
          );
        ke(v, s);
      }
      return null;
    }
    function o(v, s, m, z) {
      var N = s !== null ? s.key : null;
      if (typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint")
        return N !== null ? null : c(v, s, "" + m, z);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case ql:
            return m.key === N ? i(v, s, m, z) : null;
          case ol:
            return m.key === N ? d(v, s, m, z) : null;
          case q:
            return m = ju(m), o(v, s, m, z);
        }
        if (rt(m) || xl(m))
          return N !== null ? null : S(v, s, m, z, null);
        if (typeof m.then == "function")
          return o(
            v,
            s,
            Fe(m),
            z
          );
        if (m.$$typeof === Rl)
          return o(
            v,
            s,
            Je(v, m),
            z
          );
        ke(v, m);
      }
      return null;
    }
    function g(v, s, m, z, N) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return v = v.get(m) || null, c(s, v, "" + z, N);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case ql:
            return v = v.get(
              z.key === null ? m : z.key
            ) || null, i(s, v, z, N);
          case ol:
            return v = v.get(
              z.key === null ? m : z.key
            ) || null, d(s, v, z, N);
          case q:
            return z = ju(z), g(
              v,
              s,
              m,
              z,
              N
            );
        }
        if (rt(z) || xl(z))
          return v = v.get(m) || null, S(s, v, z, N, null);
        if (typeof z.then == "function")
          return g(
            v,
            s,
            m,
            Fe(z),
            N
          );
        if (z.$$typeof === Rl)
          return g(
            v,
            s,
            m,
            Je(s, z),
            N
          );
        ke(s, z);
      }
      return null;
    }
    function O(v, s, m, z) {
      for (var N = null, W = null, U = s, G = s = 0, K = null; U !== null && G < m.length; G++) {
        U.index > G ? (K = U, U = null) : K = U.sibling;
        var $ = o(
          v,
          U,
          m[G],
          z
        );
        if ($ === null) {
          U === null && (U = K);
          break;
        }
        l && U && $.alternate === null && t(v, U), s = n($, s, G), W === null ? N = $ : W.sibling = $, W = $, U = K;
      }
      if (G === m.length)
        return u(v, U), J && Gt(v, G), N;
      if (U === null) {
        for (; G < m.length; G++)
          U = _(v, m[G], z), U !== null && (s = n(
            U,
            s,
            G
          ), W === null ? N = U : W.sibling = U, W = U);
        return J && Gt(v, G), N;
      }
      for (U = a(U); G < m.length; G++)
        K = g(
          U,
          v,
          G,
          m[G],
          z
        ), K !== null && (l && K.alternate !== null && U.delete(
          K.key === null ? G : K.key
        ), s = n(
          K,
          s,
          G
        ), W === null ? N = K : W.sibling = K, W = K);
      return l && U.forEach(function(Eu) {
        return t(v, Eu);
      }), J && Gt(v, G), N;
    }
    function R(v, s, m, z) {
      if (m == null) throw Error(h(151));
      for (var N = null, W = null, U = s, G = s = 0, K = null, $ = m.next(); U !== null && !$.done; G++, $ = m.next()) {
        U.index > G ? (K = U, U = null) : K = U.sibling;
        var Eu = o(v, U, $.value, z);
        if (Eu === null) {
          U === null && (U = K);
          break;
        }
        l && U && Eu.alternate === null && t(v, U), s = n(Eu, s, G), W === null ? N = Eu : W.sibling = Eu, W = Eu, U = K;
      }
      if ($.done)
        return u(v, U), J && Gt(v, G), N;
      if (U === null) {
        for (; !$.done; G++, $ = m.next())
          $ = _(v, $.value, z), $ !== null && (s = n($, s, G), W === null ? N = $ : W.sibling = $, W = $);
        return J && Gt(v, G), N;
      }
      for (U = a(U); !$.done; G++, $ = m.next())
        $ = g(U, v, G, $.value, z), $ !== null && (l && $.alternate !== null && U.delete($.key === null ? G : $.key), s = n($, s, G), W === null ? N = $ : W.sibling = $, W = $);
      return l && U.forEach(function(w1) {
        return t(v, w1);
      }), J && Gt(v, G), N;
    }
    function nl(v, s, m, z) {
      if (typeof m == "object" && m !== null && m.type === Hl && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case ql:
            l: {
              for (var N = m.key; s !== null; ) {
                if (s.key === N) {
                  if (N = m.type, N === Hl) {
                    if (s.tag === 7) {
                      u(
                        v,
                        s.sibling
                      ), z = e(
                        s,
                        m.props.children
                      ), z.return = v, v = z;
                      break l;
                    }
                  } else if (s.elementType === N || typeof N == "object" && N !== null && N.$$typeof === q && ju(N) === s.type) {
                    u(
                      v,
                      s.sibling
                    ), z = e(s, m.props), Wa(z, m), z.return = v, v = z;
                    break l;
                  }
                  u(v, s);
                  break;
                } else t(v, s);
                s = s.sibling;
              }
              m.type === Hl ? (z = Hu(
                m.props.children,
                v.mode,
                z,
                m.key
              ), z.return = v, v = z) : (z = Ve(
                m.type,
                m.key,
                m.props,
                null,
                v.mode,
                z
              ), Wa(z, m), z.return = v, v = z);
            }
            return f(v);
          case ol:
            l: {
              for (N = m.key; s !== null; ) {
                if (s.key === N)
                  if (s.tag === 4 && s.stateNode.containerInfo === m.containerInfo && s.stateNode.implementation === m.implementation) {
                    u(
                      v,
                      s.sibling
                    ), z = e(s, m.children || []), z.return = v, v = z;
                    break l;
                  } else {
                    u(v, s);
                    break;
                  }
                else t(v, s);
                s = s.sibling;
              }
              z = Mf(m, v.mode, z), z.return = v, v = z;
            }
            return f(v);
          case q:
            return m = ju(m), nl(
              v,
              s,
              m,
              z
            );
        }
        if (rt(m))
          return O(
            v,
            s,
            m,
            z
          );
        if (xl(m)) {
          if (N = xl(m), typeof N != "function") throw Error(h(150));
          return m = N.call(m), R(
            v,
            s,
            m,
            z
          );
        }
        if (typeof m.then == "function")
          return nl(
            v,
            s,
            Fe(m),
            z
          );
        if (m.$$typeof === Rl)
          return nl(
            v,
            s,
            Je(v, m),
            z
          );
        ke(v, m);
      }
      return typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint" ? (m = "" + m, s !== null && s.tag === 6 ? (u(v, s.sibling), z = e(s, m), z.return = v, v = z) : (u(v, s), z = rf(m, v.mode, z), z.return = v, v = z), f(v)) : u(v, s);
    }
    return function(v, s, m, z) {
      try {
        wa = 0;
        var N = nl(
          v,
          s,
          m,
          z
        );
        return va = null, N;
      } catch (U) {
        if (U === ya || U === We) throw U;
        var W = et(29, U, null, v.mode);
        return W.lanes = z, W.return = v, W;
      } finally {
      }
    };
  }
  var Gu = ps(!0), Ns = ps(!1), nu = !1;
  function Yf(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Gf(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function fu(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function cu(l, t, u) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (F & 2) !== 0) {
      var e = a.pending;
      return e === null ? t.next = t : (t.next = e.next, e.next = t), a.pending = t, t = xe(l), ds(l, null, u), t;
    }
    return Ze(l, a, t, u), xe(l);
  }
  function $a(l, t, u) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (u & 4194048) !== 0)) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, Ti(l, u);
    }
  }
  function Xf(l, t) {
    var u = l.updateQueue, a = l.alternate;
    if (a !== null && (a = a.updateQueue, u === a)) {
      var e = null, n = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var f = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          n === null ? e = n = f : n = n.next = f, u = u.next;
        } while (u !== null);
        n === null ? e = n = t : n = n.next = t;
      } else e = n = t;
      u = {
        baseState: a.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: n,
        shared: a.shared,
        callbacks: a.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = t : l.next = t, u.lastBaseUpdate = t;
  }
  var Qf = !1;
  function Fa() {
    if (Qf) {
      var l = sa;
      if (l !== null) throw l;
    }
  }
  function ka(l, t, u, a) {
    Qf = !1;
    var e = l.updateQueue;
    nu = !1;
    var n = e.firstBaseUpdate, f = e.lastBaseUpdate, c = e.shared.pending;
    if (c !== null) {
      e.shared.pending = null;
      var i = c, d = i.next;
      i.next = null, f === null ? n = d : f.next = d, f = i;
      var S = l.alternate;
      S !== null && (S = S.updateQueue, c = S.lastBaseUpdate, c !== f && (c === null ? S.firstBaseUpdate = d : c.next = d, S.lastBaseUpdate = i));
    }
    if (n !== null) {
      var _ = e.baseState;
      f = 0, S = d = i = null, c = n;
      do {
        var o = c.lane & -536870913, g = o !== c.lane;
        if (g ? (L & o) === o : (a & o) === o) {
          o !== 0 && o === ia && (Qf = !0), S !== null && (S = S.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          l: {
            var O = l, R = c;
            o = t;
            var nl = u;
            switch (R.tag) {
              case 1:
                if (O = R.payload, typeof O == "function") {
                  _ = O.call(nl, _, o);
                  break l;
                }
                _ = O;
                break l;
              case 3:
                O.flags = O.flags & -65537 | 128;
              case 0:
                if (O = R.payload, o = typeof O == "function" ? O.call(nl, _, o) : O, o == null) break l;
                _ = H({}, _, o);
                break l;
              case 2:
                nu = !0;
            }
          }
          o = c.callback, o !== null && (l.flags |= 64, g && (l.flags |= 8192), g = e.callbacks, g === null ? e.callbacks = [o] : g.push(o));
        } else
          g = {
            lane: o,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, S === null ? (d = S = g, i = _) : S = S.next = g, f |= o;
        if (c = c.next, c === null) {
          if (c = e.shared.pending, c === null)
            break;
          g = c, c = g.next, g.next = null, e.lastBaseUpdate = g, e.shared.pending = null;
        }
      } while (!0);
      S === null && (i = _), e.baseState = i, e.firstBaseUpdate = d, e.lastBaseUpdate = S, n === null && (e.shared.lanes = 0), mu |= f, l.lanes = f, l.memoizedState = _;
    }
  }
  function Hs(l, t) {
    if (typeof l != "function")
      throw Error(h(191, l));
    l.call(t);
  }
  function Rs(l, t) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        Hs(u[l], t);
  }
  var ma = y(null), Ie = y(0);
  function Cs(l, t) {
    l = $t, r(Ie, l), r(ma, t), $t = l | t.baseLanes;
  }
  function Zf() {
    r(Ie, $t), r(ma, ma.current);
  }
  function xf() {
    $t = Ie.current, T(ma), T(Ie);
  }
  var nt = y(null), zt = null;
  function iu(l) {
    var t = l.alternate;
    r(Al, Al.current & 1), r(nt, l), zt === null && (t === null || ma.current !== null || t.memoizedState !== null) && (zt = l);
  }
  function Vf(l) {
    r(Al, Al.current), r(nt, l), zt === null && (zt = l);
  }
  function Bs(l) {
    l.tag === 22 ? (r(Al, Al.current), r(nt, l), zt === null && (zt = l)) : su();
  }
  function su() {
    r(Al, Al.current), r(nt, nt.current);
  }
  function ft(l) {
    T(nt), zt === l && (zt = null), T(Al);
  }
  var Al = y(0);
  function Pe(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var u = t.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || $c(u) || Fc(u)))
          return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Zt = 0, Y = null, al = null, Ol = null, ln = !1, da = !1, Xu = !1, tn = 0, Ia = 0, oa = null, Ym = 0;
  function _l() {
    throw Error(h(321));
  }
  function Lf(l, t) {
    if (t === null) return !1;
    for (var u = 0; u < t.length && u < l.length; u++)
      if (!at(l[u], t[u])) return !1;
    return !0;
  }
  function Kf(l, t, u, a, e, n) {
    return Zt = n, Y = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, b.H = l === null || l.memoizedState === null ? S0 : fc, Xu = !1, n = u(a, e), Xu = !1, da && (n = js(
      t,
      u,
      a,
      e
    )), qs(l), n;
  }
  function qs(l) {
    b.H = te;
    var t = al !== null && al.next !== null;
    if (Zt = 0, Ol = al = Y = null, ln = !1, Ia = 0, oa = null, t) throw Error(h(300));
    l === null || Dl || (l = l.dependencies, l !== null && Ke(l) && (Dl = !0));
  }
  function js(l, t, u, a) {
    Y = l;
    var e = 0;
    do {
      if (da && (oa = null), Ia = 0, da = !1, 25 <= e) throw Error(h(301));
      if (e += 1, Ol = al = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      b.H = b0, n = t(u, a);
    } while (da);
    return n;
  }
  function Gm() {
    var l = b.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? Pa(t) : t, l = l.useState()[0], (al !== null ? al.memoizedState : null) !== l && (Y.flags |= 1024), t;
  }
  function Jf() {
    var l = tn !== 0;
    return tn = 0, l;
  }
  function wf(l, t, u) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~u;
  }
  function Wf(l) {
    if (ln) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      ln = !1;
    }
    Zt = 0, Ol = al = Y = null, da = !1, Ia = tn = 0, oa = null;
  }
  function Jl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ol === null ? Y.memoizedState = Ol = l : Ol = Ol.next = l, Ol;
  }
  function rl() {
    if (al === null) {
      var l = Y.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = al.next;
    var t = Ol === null ? Y.memoizedState : Ol.next;
    if (t !== null)
      Ol = t, al = l;
    else {
      if (l === null)
        throw Y.alternate === null ? Error(h(467)) : Error(h(310));
      al = l, l = {
        memoizedState: al.memoizedState,
        baseState: al.baseState,
        baseQueue: al.baseQueue,
        queue: al.queue,
        next: null
      }, Ol === null ? Y.memoizedState = Ol = l : Ol = Ol.next = l;
    }
    return Ol;
  }
  function un() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Pa(l) {
    var t = Ia;
    return Ia += 1, oa === null && (oa = []), l = Os(oa, l, t), t = Y, (Ol === null ? t.memoizedState : Ol.next) === null && (t = t.alternate, b.H = t === null || t.memoizedState === null ? S0 : fc), l;
  }
  function an(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Pa(l);
      if (l.$$typeof === Rl) return Xl(l);
    }
    throw Error(h(438, String(l)));
  }
  function $f(l) {
    var t = null, u = Y.updateQueue;
    if (u !== null && (t = u.memoCache), t == null) {
      var a = Y.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(e) {
          return e.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), u === null && (u = un(), Y.updateQueue = u), u.memoCache = t, u = t.data[t.index], u === void 0)
      for (u = t.data[t.index] = Array(l), a = 0; a < l; a++)
        u[a] = zl;
    return t.index++, u;
  }
  function xt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function en(l) {
    var t = rl();
    return Ff(t, al, l);
  }
  function Ff(l, t, u) {
    var a = l.queue;
    if (a === null) throw Error(h(311));
    a.lastRenderedReducer = u;
    var e = l.baseQueue, n = a.pending;
    if (n !== null) {
      if (e !== null) {
        var f = e.next;
        e.next = n.next, n.next = f;
      }
      t.baseQueue = e = n, a.pending = null;
    }
    if (n = l.baseState, e === null) l.memoizedState = n;
    else {
      t = e.next;
      var c = f = null, i = null, d = t, S = !1;
      do {
        var _ = d.lane & -536870913;
        if (_ !== d.lane ? (L & _) === _ : (Zt & _) === _) {
          var o = d.revertLane;
          if (o === 0)
            i !== null && (i = i.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null
            }), _ === ia && (S = !0);
          else if ((Zt & o) === o) {
            d = d.next, o === ia && (S = !0);
            continue;
          } else
            _ = {
              lane: 0,
              revertLane: d.revertLane,
              gesture: null,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null
            }, i === null ? (c = i = _, f = n) : i = i.next = _, Y.lanes |= o, mu |= o;
          _ = d.action, Xu && u(n, _), n = d.hasEagerState ? d.eagerState : u(n, _);
        } else
          o = {
            lane: _,
            revertLane: d.revertLane,
            gesture: d.gesture,
            action: d.action,
            hasEagerState: d.hasEagerState,
            eagerState: d.eagerState,
            next: null
          }, i === null ? (c = i = o, f = n) : i = i.next = o, Y.lanes |= _, mu |= _;
        d = d.next;
      } while (d !== null && d !== t);
      if (i === null ? f = n : i.next = c, !at(n, l.memoizedState) && (Dl = !0, S && (u = sa, u !== null)))
        throw u;
      l.memoizedState = n, l.baseState = f, l.baseQueue = i, a.lastRenderedState = n;
    }
    return e === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function kf(l) {
    var t = rl(), u = t.queue;
    if (u === null) throw Error(h(311));
    u.lastRenderedReducer = l;
    var a = u.dispatch, e = u.pending, n = t.memoizedState;
    if (e !== null) {
      u.pending = null;
      var f = e = e.next;
      do
        n = l(n, f.action), f = f.next;
      while (f !== e);
      at(n, t.memoizedState) || (Dl = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), u.lastRenderedState = n;
    }
    return [n, a];
  }
  function Ys(l, t, u) {
    var a = Y, e = rl(), n = J;
    if (n) {
      if (u === void 0) throw Error(h(407));
      u = u();
    } else u = t();
    var f = !at(
      (al || e).memoizedState,
      u
    );
    if (f && (e.memoizedState = u, Dl = !0), e = e.queue, lc(Qs.bind(null, a, e, l), [
      l
    ]), e.getSnapshot !== t || f || Ol !== null && Ol.memoizedState.tag & 1) {
      if (a.flags |= 2048, ha(
        9,
        { destroy: void 0 },
        Xs.bind(
          null,
          a,
          e,
          u,
          t
        ),
        null
      ), il === null) throw Error(h(349));
      n || (Zt & 127) !== 0 || Gs(a, t, u);
    }
    return u;
  }
  function Gs(l, t, u) {
    l.flags |= 16384, l = { getSnapshot: t, value: u }, t = Y.updateQueue, t === null ? (t = un(), Y.updateQueue = t, t.stores = [l]) : (u = t.stores, u === null ? t.stores = [l] : u.push(l));
  }
  function Xs(l, t, u, a) {
    t.value = u, t.getSnapshot = a, Zs(t) && xs(l);
  }
  function Qs(l, t, u) {
    return u(function() {
      Zs(t) && xs(l);
    });
  }
  function Zs(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var u = t();
      return !at(l, u);
    } catch {
      return !0;
    }
  }
  function xs(l) {
    var t = Nu(l, 2);
    t !== null && Pl(t, l, 2);
  }
  function If(l) {
    var t = Jl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), Xu) {
        It(!0);
        try {
          u();
        } finally {
          It(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: xt,
      lastRenderedState: l
    }, t;
  }
  function Vs(l, t, u, a) {
    return l.baseState = u, Ff(
      l,
      al,
      typeof a == "function" ? a : xt
    );
  }
  function Xm(l, t, u, a, e) {
    if (cn(l)) throw Error(h(485));
    if (l = t.action, l !== null) {
      var n = {
        payload: e,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(f) {
          n.listeners.push(f);
        }
      };
      b.T !== null ? u(!0) : n.isTransition = !1, a(n), u = t.pending, u === null ? (n.next = t.pending = n, Ls(t, n)) : (n.next = u.next, t.pending = u.next = n);
    }
  }
  function Ls(l, t) {
    var u = t.action, a = t.payload, e = l.state;
    if (t.isTransition) {
      var n = b.T, f = {};
      b.T = f;
      try {
        var c = u(e, a), i = b.S;
        i !== null && i(f, c), Ks(l, t, c);
      } catch (d) {
        Pf(l, t, d);
      } finally {
        n !== null && f.types !== null && (n.types = f.types), b.T = n;
      }
    } else
      try {
        n = u(e, a), Ks(l, t, n);
      } catch (d) {
        Pf(l, t, d);
      }
  }
  function Ks(l, t, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(a) {
        Js(l, t, a);
      },
      function(a) {
        return Pf(l, t, a);
      }
    ) : Js(l, t, u);
  }
  function Js(l, t, u) {
    t.status = "fulfilled", t.value = u, ws(t), l.state = u, t = l.pending, t !== null && (u = t.next, u === t ? l.pending = null : (u = u.next, t.next = u, Ls(l, u)));
  }
  function Pf(l, t, u) {
    var a = l.pending;
    if (l.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = u, ws(t), t = t.next;
      while (t !== a);
    }
    l.action = null;
  }
  function ws(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function Ws(l, t) {
    return t;
  }
  function $s(l, t) {
    if (J) {
      var u = il.formState;
      if (u !== null) {
        l: {
          var a = Y;
          if (J) {
            if (yl) {
              t: {
                for (var e = yl, n = bt; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (e = _t(
                    e.nextSibling
                  ), e === null) {
                    e = null;
                    break t;
                  }
                }
                n = e.data, e = n === "F!" || n === "F" ? e : null;
              }
              if (e) {
                yl = _t(
                  e.nextSibling
                ), a = e.data === "F!";
                break l;
              }
            }
            au(a);
          }
          a = !1;
        }
        a && (t = u[0]);
      }
    }
    return u = Jl(), u.memoizedState = u.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ws,
      lastRenderedState: t
    }, u.queue = a, u = o0.bind(
      null,
      Y,
      a
    ), a.dispatch = u, a = If(!1), n = nc.bind(
      null,
      Y,
      !1,
      a.queue
    ), a = Jl(), e = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, a.queue = e, u = Xm.bind(
      null,
      Y,
      e,
      n,
      u
    ), e.dispatch = u, a.memoizedState = l, [t, u, !1];
  }
  function Fs(l) {
    var t = rl();
    return ks(t, al, l);
  }
  function ks(l, t, u) {
    if (t = Ff(
      l,
      t,
      Ws
    )[0], l = en(xt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = Pa(t);
      } catch (f) {
        throw f === ya ? We : f;
      }
    else a = t;
    t = rl();
    var e = t.queue, n = e.dispatch;
    return u !== t.memoizedState && (Y.flags |= 2048, ha(
      9,
      { destroy: void 0 },
      Qm.bind(null, e, u),
      null
    )), [a, n, l];
  }
  function Qm(l, t) {
    l.action = t;
  }
  function Is(l) {
    var t = rl(), u = al;
    if (u !== null)
      return ks(t, u, l);
    rl(), t = t.memoizedState, u = rl();
    var a = u.queue.dispatch;
    return u.memoizedState = l, [t, a, !1];
  }
  function ha(l, t, u, a) {
    return l = { tag: l, create: u, deps: a, inst: t, next: null }, t = Y.updateQueue, t === null && (t = un(), Y.updateQueue = t), u = t.lastEffect, u === null ? t.lastEffect = l.next = l : (a = u.next, u.next = l, l.next = a, t.lastEffect = l), l;
  }
  function Ps() {
    return rl().memoizedState;
  }
  function nn(l, t, u, a) {
    var e = Jl();
    Y.flags |= l, e.memoizedState = ha(
      1 | t,
      { destroy: void 0 },
      u,
      a === void 0 ? null : a
    );
  }
  function fn(l, t, u, a) {
    var e = rl();
    a = a === void 0 ? null : a;
    var n = e.memoizedState.inst;
    al !== null && a !== null && Lf(a, al.memoizedState.deps) ? e.memoizedState = ha(t, n, u, a) : (Y.flags |= l, e.memoizedState = ha(
      1 | t,
      n,
      u,
      a
    ));
  }
  function l0(l, t) {
    nn(8390656, 8, l, t);
  }
  function lc(l, t) {
    fn(2048, 8, l, t);
  }
  function Zm(l) {
    Y.flags |= 4;
    var t = Y.updateQueue;
    if (t === null)
      t = un(), Y.updateQueue = t, t.events = [l];
    else {
      var u = t.events;
      u === null ? t.events = [l] : u.push(l);
    }
  }
  function t0(l) {
    var t = rl().memoizedState;
    return Zm({ ref: t, nextImpl: l }), function() {
      if ((F & 2) !== 0) throw Error(h(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function u0(l, t) {
    return fn(4, 2, l, t);
  }
  function a0(l, t) {
    return fn(4, 4, l, t);
  }
  function e0(l, t) {
    if (typeof t == "function") {
      l = l();
      var u = t(l);
      return function() {
        typeof u == "function" ? u() : t(null);
      };
    }
    if (t != null)
      return l = l(), t.current = l, function() {
        t.current = null;
      };
  }
  function n0(l, t, u) {
    u = u != null ? u.concat([l]) : null, fn(4, 4, e0.bind(null, t, l), u);
  }
  function tc() {
  }
  function f0(l, t) {
    var u = rl();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    return t !== null && Lf(t, a[1]) ? a[0] : (u.memoizedState = [l, t], l);
  }
  function c0(l, t) {
    var u = rl();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    if (t !== null && Lf(t, a[1]))
      return a[0];
    if (a = l(), Xu) {
      It(!0);
      try {
        l();
      } finally {
        It(!1);
      }
    }
    return u.memoizedState = [a, t], a;
  }
  function uc(l, t, u) {
    return u === void 0 || (Zt & 1073741824) !== 0 && (L & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = u, l = iy(), Y.lanes |= l, mu |= l, u);
  }
  function i0(l, t, u, a) {
    return at(u, t) ? u : ma.current !== null ? (l = uc(l, u, a), at(l, t) || (Dl = !0), l) : (Zt & 42) === 0 || (Zt & 1073741824) !== 0 && (L & 261930) === 0 ? (Dl = !0, l.memoizedState = u) : (l = iy(), Y.lanes |= l, mu |= l, t);
  }
  function s0(l, t, u, a, e) {
    var n = A.p;
    A.p = n !== 0 && 8 > n ? n : 8;
    var f = b.T, c = {};
    b.T = c, nc(l, !1, t, u);
    try {
      var i = e(), d = b.S;
      if (d !== null && d(c, i), i !== null && typeof i == "object" && typeof i.then == "function") {
        var S = jm(
          i,
          a
        );
        le(
          l,
          t,
          S,
          st(l)
        );
      } else
        le(
          l,
          t,
          a,
          st(l)
        );
    } catch (_) {
      le(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: _ },
        st()
      );
    } finally {
      A.p = n, f !== null && c.types !== null && (f.types = c.types), b.T = f;
    }
  }
  function xm() {
  }
  function ac(l, t, u, a) {
    if (l.tag !== 5) throw Error(h(476));
    var e = y0(l).queue;
    s0(
      l,
      e,
      t,
      C,
      u === null ? xm : function() {
        return v0(l), u(a);
      }
    );
  }
  function y0(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: C,
      baseState: C,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: xt,
        lastRenderedState: C
      },
      next: null
    };
    var u = {};
    return t.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: xt,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function v0(l) {
    var t = y0(l);
    t.next === null && (t = l.alternate.memoizedState), le(
      l,
      t.next.queue,
      {},
      st()
    );
  }
  function ec() {
    return Xl(Se);
  }
  function m0() {
    return rl().memoizedState;
  }
  function d0() {
    return rl().memoizedState;
  }
  function Vm(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var u = st();
          l = fu(u);
          var a = cu(t, l, u);
          a !== null && (Pl(a, t, u), $a(a, t, u)), t = { cache: Cf() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Lm(l, t, u) {
    var a = st();
    u = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, cn(l) ? h0(t, u) : (u = Ef(l, t, u, a), u !== null && (Pl(u, l, a), g0(u, t, a)));
  }
  function o0(l, t, u) {
    var a = st();
    le(l, t, u, a);
  }
  function le(l, t, u, a) {
    var e = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (cn(l)) h0(t, e);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null))
        try {
          var f = t.lastRenderedState, c = n(f, u);
          if (e.hasEagerState = !0, e.eagerState = c, at(c, f))
            return Ze(l, t, e, 0), il === null && Qe(), !1;
        } catch {
        } finally {
        }
      if (u = Ef(l, t, e, a), u !== null)
        return Pl(u, l, a), g0(u, t, a), !0;
    }
    return !1;
  }
  function nc(l, t, u, a) {
    if (a = {
      lane: 2,
      revertLane: Yc(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, cn(l)) {
      if (t) throw Error(h(479));
    } else
      t = Ef(
        l,
        u,
        a,
        2
      ), t !== null && Pl(t, l, 2);
  }
  function cn(l) {
    var t = l.alternate;
    return l === Y || t !== null && t === Y;
  }
  function h0(l, t) {
    da = ln = !0;
    var u = l.pending;
    u === null ? t.next = t : (t.next = u.next, u.next = t), l.pending = t;
  }
  function g0(l, t, u) {
    if ((u & 4194048) !== 0) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, Ti(l, u);
    }
  }
  var te = {
    readContext: Xl,
    use: an,
    useCallback: _l,
    useContext: _l,
    useEffect: _l,
    useImperativeHandle: _l,
    useLayoutEffect: _l,
    useInsertionEffect: _l,
    useMemo: _l,
    useReducer: _l,
    useRef: _l,
    useState: _l,
    useDebugValue: _l,
    useDeferredValue: _l,
    useTransition: _l,
    useSyncExternalStore: _l,
    useId: _l,
    useHostTransitionStatus: _l,
    useFormState: _l,
    useActionState: _l,
    useOptimistic: _l,
    useMemoCache: _l,
    useCacheRefresh: _l
  };
  te.useEffectEvent = _l;
  var S0 = {
    readContext: Xl,
    use: an,
    useCallback: function(l, t) {
      return Jl().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: Xl,
    useEffect: l0,
    useImperativeHandle: function(l, t, u) {
      u = u != null ? u.concat([l]) : null, nn(
        4194308,
        4,
        e0.bind(null, t, l),
        u
      );
    },
    useLayoutEffect: function(l, t) {
      return nn(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      nn(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var u = Jl();
      t = t === void 0 ? null : t;
      var a = l();
      if (Xu) {
        It(!0);
        try {
          l();
        } finally {
          It(!1);
        }
      }
      return u.memoizedState = [a, t], a;
    },
    useReducer: function(l, t, u) {
      var a = Jl();
      if (u !== void 0) {
        var e = u(t);
        if (Xu) {
          It(!0);
          try {
            u(t);
          } finally {
            It(!1);
          }
        }
      } else e = t;
      return a.memoizedState = a.baseState = e, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: e
      }, a.queue = l, l = l.dispatch = Lm.bind(
        null,
        Y,
        l
      ), [a.memoizedState, l];
    },
    useRef: function(l) {
      var t = Jl();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = If(l);
      var t = l.queue, u = o0.bind(null, Y, t);
      return t.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: tc,
    useDeferredValue: function(l, t) {
      var u = Jl();
      return uc(u, l, t);
    },
    useTransition: function() {
      var l = If(!1);
      return l = s0.bind(
        null,
        Y,
        l.queue,
        !0,
        !1
      ), Jl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, u) {
      var a = Y, e = Jl();
      if (J) {
        if (u === void 0)
          throw Error(h(407));
        u = u();
      } else {
        if (u = t(), il === null)
          throw Error(h(349));
        (L & 127) !== 0 || Gs(a, t, u);
      }
      e.memoizedState = u;
      var n = { value: u, getSnapshot: t };
      return e.queue = n, l0(Qs.bind(null, a, n, l), [
        l
      ]), a.flags |= 2048, ha(
        9,
        { destroy: void 0 },
        Xs.bind(
          null,
          a,
          n,
          u,
          t
        ),
        null
      ), u;
    },
    useId: function() {
      var l = Jl(), t = il.identifierPrefix;
      if (J) {
        var u = Nt, a = pt;
        u = (a & ~(1 << 32 - ut(a) - 1)).toString(32) + u, t = "_" + t + "R_" + u, u = tn++, 0 < u && (t += "H" + u.toString(32)), t += "_";
      } else
        u = Ym++, t = "_" + t + "r_" + u.toString(32) + "_";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: ec,
    useFormState: $s,
    useActionState: $s,
    useOptimistic: function(l) {
      var t = Jl();
      t.memoizedState = t.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = u, t = nc.bind(
        null,
        Y,
        !0,
        u
      ), u.dispatch = t, [l, t];
    },
    useMemoCache: $f,
    useCacheRefresh: function() {
      return Jl().memoizedState = Vm.bind(
        null,
        Y
      );
    },
    useEffectEvent: function(l) {
      var t = Jl(), u = { impl: l };
      return t.memoizedState = u, function() {
        if ((F & 2) !== 0)
          throw Error(h(440));
        return u.impl.apply(void 0, arguments);
      };
    }
  }, fc = {
    readContext: Xl,
    use: an,
    useCallback: f0,
    useContext: Xl,
    useEffect: lc,
    useImperativeHandle: n0,
    useInsertionEffect: u0,
    useLayoutEffect: a0,
    useMemo: c0,
    useReducer: en,
    useRef: Ps,
    useState: function() {
      return en(xt);
    },
    useDebugValue: tc,
    useDeferredValue: function(l, t) {
      var u = rl();
      return i0(
        u,
        al.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = en(xt)[0], t = rl().memoizedState;
      return [
        typeof l == "boolean" ? l : Pa(l),
        t
      ];
    },
    useSyncExternalStore: Ys,
    useId: m0,
    useHostTransitionStatus: ec,
    useFormState: Fs,
    useActionState: Fs,
    useOptimistic: function(l, t) {
      var u = rl();
      return Vs(u, al, l, t);
    },
    useMemoCache: $f,
    useCacheRefresh: d0
  };
  fc.useEffectEvent = t0;
  var b0 = {
    readContext: Xl,
    use: an,
    useCallback: f0,
    useContext: Xl,
    useEffect: lc,
    useImperativeHandle: n0,
    useInsertionEffect: u0,
    useLayoutEffect: a0,
    useMemo: c0,
    useReducer: kf,
    useRef: Ps,
    useState: function() {
      return kf(xt);
    },
    useDebugValue: tc,
    useDeferredValue: function(l, t) {
      var u = rl();
      return al === null ? uc(u, l, t) : i0(
        u,
        al.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = kf(xt)[0], t = rl().memoizedState;
      return [
        typeof l == "boolean" ? l : Pa(l),
        t
      ];
    },
    useSyncExternalStore: Ys,
    useId: m0,
    useHostTransitionStatus: ec,
    useFormState: Is,
    useActionState: Is,
    useOptimistic: function(l, t) {
      var u = rl();
      return al !== null ? Vs(u, al, l, t) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: $f,
    useCacheRefresh: d0
  };
  b0.useEffectEvent = t0;
  function cc(l, t, u, a) {
    t = l.memoizedState, u = u(a, t), u = u == null ? t : H({}, t, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var ic = {
    enqueueSetState: function(l, t, u) {
      l = l._reactInternals;
      var a = st(), e = fu(a);
      e.payload = t, u != null && (e.callback = u), t = cu(l, e, a), t !== null && (Pl(t, l, a), $a(t, l, a));
    },
    enqueueReplaceState: function(l, t, u) {
      l = l._reactInternals;
      var a = st(), e = fu(a);
      e.tag = 1, e.payload = t, u != null && (e.callback = u), t = cu(l, e, a), t !== null && (Pl(t, l, a), $a(t, l, a));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var u = st(), a = fu(u);
      a.tag = 2, t != null && (a.callback = t), t = cu(l, a, u), t !== null && (Pl(t, l, u), $a(t, l, u));
    }
  };
  function z0(l, t, u, a, e, n, f) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, n, f) : t.prototype && t.prototype.isPureReactComponent ? !Za(u, a) || !Za(e, n) : !0;
  }
  function _0(l, t, u, a) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(u, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(u, a), t.state !== l && ic.enqueueReplaceState(t, t.state, null);
  }
  function Qu(l, t) {
    var u = t;
    if ("ref" in t) {
      u = {};
      for (var a in t)
        a !== "ref" && (u[a] = t[a]);
    }
    if (l = l.defaultProps) {
      u === t && (u = H({}, u));
      for (var e in l)
        u[e] === void 0 && (u[e] = l[e]);
    }
    return u;
  }
  function T0(l) {
    Xe(l);
  }
  function E0(l) {
    console.error(l);
  }
  function A0(l) {
    Xe(l);
  }
  function sn(l, t) {
    try {
      var u = l.onUncaughtError;
      u(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function r0(l, t, u) {
    try {
      var a = l.onCaughtError;
      a(u.value, {
        componentStack: u.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  function sc(l, t, u) {
    return u = fu(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      sn(l, t);
    }, u;
  }
  function M0(l) {
    return l = fu(l), l.tag = 3, l;
  }
  function O0(l, t, u, a) {
    var e = u.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = a.value;
      l.payload = function() {
        return e(n);
      }, l.callback = function() {
        r0(t, u, a);
      };
    }
    var f = u.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (l.callback = function() {
      r0(t, u, a), typeof e != "function" && (du === null ? du = /* @__PURE__ */ new Set([this]) : du.add(this));
      var c = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function Km(l, t, u, a, e) {
    if (u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = u.alternate, t !== null && ca(
        t,
        u,
        e,
        !0
      ), u = nt.current, u !== null) {
        switch (u.tag) {
          case 31:
          case 13:
            return zt === null ? Tn() : u.alternate === null && Tl === 0 && (Tl = 3), u.flags &= -257, u.flags |= 65536, u.lanes = e, a === $e ? u.flags |= 16384 : (t = u.updateQueue, t === null ? u.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Bc(l, a, e)), !1;
          case 22:
            return u.flags |= 65536, a === $e ? u.flags |= 16384 : (t = u.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, u.updateQueue = t) : (u = t.retryQueue, u === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : u.add(a)), Bc(l, a, e)), !1;
        }
        throw Error(h(435, u.tag));
      }
      return Bc(l, a, e), Tn(), !1;
    }
    if (J)
      return t = nt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = e, a !== Uf && (l = Error(h(422), { cause: a }), La(ht(l, u)))) : (a !== Uf && (t = Error(h(423), {
        cause: a
      }), La(
        ht(t, u)
      )), l = l.current.alternate, l.flags |= 65536, e &= -e, l.lanes |= e, a = ht(a, u), e = sc(
        l.stateNode,
        a,
        e
      ), Xf(l, e), Tl !== 4 && (Tl = 2)), !1;
    var n = Error(h(520), { cause: a });
    if (n = ht(n, u), se === null ? se = [n] : se.push(n), Tl !== 4 && (Tl = 2), t === null) return !0;
    a = ht(a, u), u = t;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = e & -e, u.lanes |= l, l = sc(u.stateNode, a, l), Xf(u, l), !1;
        case 1:
          if (t = u.type, n = u.stateNode, (u.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (du === null || !du.has(n))))
            return u.flags |= 65536, e &= -e, u.lanes |= e, e = M0(e), O0(
              e,
              l,
              u,
              a
            ), Xf(u, e), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var yc = Error(h(461)), Dl = !1;
  function Ql(l, t, u, a) {
    t.child = l === null ? Ns(t, null, u, a) : Gu(
      t,
      l.child,
      u,
      a
    );
  }
  function D0(l, t, u, a, e) {
    u = u.render;
    var n = t.ref;
    if ("ref" in a) {
      var f = {};
      for (var c in a)
        c !== "ref" && (f[c] = a[c]);
    } else f = a;
    return Bu(t), a = Kf(
      l,
      t,
      u,
      f,
      n,
      e
    ), c = Jf(), l !== null && !Dl ? (wf(l, t, e), Vt(l, t, e)) : (J && c && Of(t), t.flags |= 1, Ql(l, t, a, e), t.child);
  }
  function U0(l, t, u, a, e) {
    if (l === null) {
      var n = u.type;
      return typeof n == "function" && !Af(n) && n.defaultProps === void 0 && u.compare === null ? (t.tag = 15, t.type = n, p0(
        l,
        t,
        n,
        a,
        e
      )) : (l = Ve(
        u.type,
        null,
        a,
        t,
        t.mode,
        e
      ), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !bc(l, e)) {
      var f = n.memoizedProps;
      if (u = u.compare, u = u !== null ? u : Za, u(f, a) && l.ref === t.ref)
        return Vt(l, t, e);
    }
    return t.flags |= 1, l = Yt(n, a), l.ref = t.ref, l.return = t, t.child = l;
  }
  function p0(l, t, u, a, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Za(n, a) && l.ref === t.ref)
        if (Dl = !1, t.pendingProps = a = n, bc(l, e))
          (l.flags & 131072) !== 0 && (Dl = !0);
        else
          return t.lanes = l.lanes, Vt(l, t, e);
    }
    return vc(
      l,
      t,
      u,
      a,
      e
    );
  }
  function N0(l, t, u, a) {
    var e = a.children, n = l !== null ? l.memoizedState : null;
    if (l === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (n = n !== null ? n.baseLanes | u : u, l !== null) {
          for (a = t.child = l.child, e = 0; a !== null; )
            e = e | a.lanes | a.childLanes, a = a.sibling;
          a = e & ~n;
        } else a = 0, t.child = null;
        return H0(
          l,
          t,
          n,
          u,
          a
        );
      }
      if ((u & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && we(
          t,
          n !== null ? n.cachePool : null
        ), n !== null ? Cs(t, n) : Zf(), Bs(t);
      else
        return a = t.lanes = 536870912, H0(
          l,
          t,
          n !== null ? n.baseLanes | u : u,
          u,
          a
        );
    } else
      n !== null ? (we(t, n.cachePool), Cs(t, n), su(), t.memoizedState = null) : (l !== null && we(t, null), Zf(), su());
    return Ql(l, t, e, u), t.child;
  }
  function ue(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function H0(l, t, u, a, e) {
    var n = qf();
    return n = n === null ? null : { parent: Ml._currentValue, pool: n }, t.memoizedState = {
      baseLanes: u,
      cachePool: n
    }, l !== null && we(t, null), Zf(), Bs(t), l !== null && ca(l, t, a, !0), t.childLanes = e, null;
  }
  function yn(l, t) {
    return t = mn(
      { mode: t.mode, children: t.children },
      l.mode
    ), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function R0(l, t, u) {
    return Gu(t, l.child, null, u), l = yn(t, t.pendingProps), l.flags |= 2, ft(t), t.memoizedState = null, l;
  }
  function Jm(l, t, u) {
    var a = t.pendingProps, e = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (J) {
        if (a.mode === "hidden")
          return l = yn(t, a), t.lanes = 536870912, ue(null, l);
        if (Vf(t), (l = yl) ? (l = Ly(
          l,
          bt
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: tu !== null ? { id: pt, overflow: Nt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = hs(l), u.return = t, t.child = u, Gl = t, yl = null)) : l = null, l === null) throw au(t);
        return t.lanes = 536870912, null;
      }
      return yn(t, a);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var f = n.dehydrated;
      if (Vf(t), e)
        if (t.flags & 256)
          t.flags &= -257, t = R0(
            l,
            t,
            u
          );
        else if (t.memoizedState !== null)
          t.child = l.child, t.flags |= 128, t = null;
        else throw Error(h(558));
      else if (Dl || ca(l, t, u, !1), e = (u & l.childLanes) !== 0, Dl || e) {
        if (a = il, a !== null && (f = Ei(a, u), f !== 0 && f !== n.retryLane))
          throw n.retryLane = f, Nu(l, f), Pl(a, l, f), yc;
        Tn(), t = R0(
          l,
          t,
          u
        );
      } else
        l = n.treeContext, yl = _t(f.nextSibling), Gl = t, J = !0, uu = null, bt = !1, l !== null && bs(t, l), t = yn(t, a), t.flags |= 4096;
      return t;
    }
    return l = Yt(l.child, {
      mode: a.mode,
      children: a.children
    }), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function vn(l, t) {
    var u = t.ref;
    if (u === null)
      l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(h(284));
      (l === null || l.ref !== u) && (t.flags |= 4194816);
    }
  }
  function vc(l, t, u, a, e) {
    return Bu(t), u = Kf(
      l,
      t,
      u,
      a,
      void 0,
      e
    ), a = Jf(), l !== null && !Dl ? (wf(l, t, e), Vt(l, t, e)) : (J && a && Of(t), t.flags |= 1, Ql(l, t, u, e), t.child);
  }
  function C0(l, t, u, a, e, n) {
    return Bu(t), t.updateQueue = null, u = js(
      t,
      a,
      u,
      e
    ), qs(l), a = Jf(), l !== null && !Dl ? (wf(l, t, n), Vt(l, t, n)) : (J && a && Of(t), t.flags |= 1, Ql(l, t, u, n), t.child);
  }
  function B0(l, t, u, a, e) {
    if (Bu(t), t.stateNode === null) {
      var n = aa, f = u.contextType;
      typeof f == "object" && f !== null && (n = Xl(f)), n = new u(a, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = ic, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = a, n.state = t.memoizedState, n.refs = {}, Yf(t), f = u.contextType, n.context = typeof f == "object" && f !== null ? Xl(f) : aa, n.state = t.memoizedState, f = u.getDerivedStateFromProps, typeof f == "function" && (cc(
        t,
        u,
        f,
        a
      ), n.state = t.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (f = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), f !== n.state && ic.enqueueReplaceState(n, n.state, null), ka(t, a, n, e), Fa(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps, i = Qu(u, c);
      n.props = i;
      var d = n.context, S = u.contextType;
      f = aa, typeof S == "object" && S !== null && (f = Xl(S));
      var _ = u.getDerivedStateFromProps;
      S = typeof _ == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, S || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || d !== f) && _0(
        t,
        n,
        a,
        f
      ), nu = !1;
      var o = t.memoizedState;
      n.state = o, ka(t, a, n, e), Fa(), d = t.memoizedState, c || o !== d || nu ? (typeof _ == "function" && (cc(
        t,
        u,
        _,
        a
      ), d = t.memoizedState), (i = nu || z0(
        t,
        u,
        i,
        a,
        o,
        d,
        f
      )) ? (S || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = d), n.props = a, n.state = d, n.context = f, a = i) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      n = t.stateNode, Gf(l, t), f = t.memoizedProps, S = Qu(u, f), n.props = S, _ = t.pendingProps, o = n.context, d = u.contextType, i = aa, typeof d == "object" && d !== null && (i = Xl(d)), c = u.getDerivedStateFromProps, (d = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f !== _ || o !== i) && _0(
        t,
        n,
        a,
        i
      ), nu = !1, o = t.memoizedState, n.state = o, ka(t, a, n, e), Fa();
      var g = t.memoizedState;
      f !== _ || o !== g || nu || l !== null && l.dependencies !== null && Ke(l.dependencies) ? (typeof c == "function" && (cc(
        t,
        u,
        c,
        a
      ), g = t.memoizedState), (S = nu || z0(
        t,
        u,
        S,
        a,
        o,
        g,
        i
      ) || l !== null && l.dependencies !== null && Ke(l.dependencies)) ? (d || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, g, i), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        a,
        g,
        i
      )), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && o === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && o === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = g), n.props = a, n.state = g, n.context = i, a = S) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && o === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && o === l.memoizedState || (t.flags |= 1024), a = !1);
    }
    return n = a, vn(l, t), a = (t.flags & 128) !== 0, n || a ? (n = t.stateNode, u = a && typeof u.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && a ? (t.child = Gu(
      t,
      l.child,
      null,
      e
    ), t.child = Gu(
      t,
      null,
      u,
      e
    )) : Ql(l, t, u, e), t.memoizedState = n.state, l = t.child) : l = Vt(
      l,
      t,
      e
    ), l;
  }
  function q0(l, t, u, a) {
    return Ru(), t.flags |= 256, Ql(l, t, u, a), t.child;
  }
  var mc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function dc(l) {
    return { baseLanes: l, cachePool: rs() };
  }
  function oc(l, t, u) {
    return l = l !== null ? l.childLanes & ~u : 0, t && (l |= it), l;
  }
  function j0(l, t, u) {
    var a = t.pendingProps, e = !1, n = (t.flags & 128) !== 0, f;
    if ((f = n) || (f = l !== null && l.memoizedState === null ? !1 : (Al.current & 2) !== 0), f && (e = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (J) {
        if (e ? iu(t) : su(), (l = yl) ? (l = Ly(
          l,
          bt
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: tu !== null ? { id: pt, overflow: Nt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = hs(l), u.return = t, t.child = u, Gl = t, yl = null)) : l = null, l === null) throw au(t);
        return Fc(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var c = a.children;
      return a = a.fallback, e ? (su(), e = t.mode, c = mn(
        { mode: "hidden", children: c },
        e
      ), a = Hu(
        a,
        e,
        u,
        null
      ), c.return = t, a.return = t, c.sibling = a, t.child = c, a = t.child, a.memoizedState = dc(u), a.childLanes = oc(
        l,
        f,
        u
      ), t.memoizedState = mc, ue(null, a)) : (iu(t), hc(t, c));
    }
    var i = l.memoizedState;
    if (i !== null && (c = i.dehydrated, c !== null)) {
      if (n)
        t.flags & 256 ? (iu(t), t.flags &= -257, t = gc(
          l,
          t,
          u
        )) : t.memoizedState !== null ? (su(), t.child = l.child, t.flags |= 128, t = null) : (su(), c = a.fallback, e = t.mode, a = mn(
          { mode: "visible", children: a.children },
          e
        ), c = Hu(
          c,
          e,
          u,
          null
        ), c.flags |= 2, a.return = t, c.return = t, a.sibling = c, t.child = a, Gu(
          t,
          l.child,
          null,
          u
        ), a = t.child, a.memoizedState = dc(u), a.childLanes = oc(
          l,
          f,
          u
        ), t.memoizedState = mc, t = ue(null, a));
      else if (iu(t), Fc(c)) {
        if (f = c.nextSibling && c.nextSibling.dataset, f) var d = f.dgst;
        f = d, a = Error(h(419)), a.stack = "", a.digest = f, La({ value: a, source: null, stack: null }), t = gc(
          l,
          t,
          u
        );
      } else if (Dl || ca(l, t, u, !1), f = (u & l.childLanes) !== 0, Dl || f) {
        if (f = il, f !== null && (a = Ei(f, u), a !== 0 && a !== i.retryLane))
          throw i.retryLane = a, Nu(l, a), Pl(f, l, a), yc;
        $c(c) || Tn(), t = gc(
          l,
          t,
          u
        );
      } else
        $c(c) ? (t.flags |= 192, t.child = l.child, t = null) : (l = i.treeContext, yl = _t(
          c.nextSibling
        ), Gl = t, J = !0, uu = null, bt = !1, l !== null && bs(t, l), t = hc(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return e ? (su(), c = a.fallback, e = t.mode, i = l.child, d = i.sibling, a = Yt(i, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = i.subtreeFlags & 65011712, d !== null ? c = Yt(
      d,
      c
    ) : (c = Hu(
      c,
      e,
      u,
      null
    ), c.flags |= 2), c.return = t, a.return = t, a.sibling = c, t.child = a, ue(null, a), a = t.child, c = l.child.memoizedState, c === null ? c = dc(u) : (e = c.cachePool, e !== null ? (i = Ml._currentValue, e = e.parent !== i ? { parent: i, pool: i } : e) : e = rs(), c = {
      baseLanes: c.baseLanes | u,
      cachePool: e
    }), a.memoizedState = c, a.childLanes = oc(
      l,
      f,
      u
    ), t.memoizedState = mc, ue(l.child, a)) : (iu(t), u = l.child, l = u.sibling, u = Yt(u, {
      mode: "visible",
      children: a.children
    }), u.return = t, u.sibling = null, l !== null && (f = t.deletions, f === null ? (t.deletions = [l], t.flags |= 16) : f.push(l)), t.child = u, t.memoizedState = null, u);
  }
  function hc(l, t) {
    return t = mn(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function mn(l, t) {
    return l = et(22, l, null, t), l.lanes = 0, l;
  }
  function gc(l, t, u) {
    return Gu(t, l.child, null, u), l = hc(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function Y0(l, t, u) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), Hf(l.return, t, u);
  }
  function Sc(l, t, u, a, e, n) {
    var f = l.memoizedState;
    f === null ? l.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: u,
      tailMode: e,
      treeForkCount: n
    } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = a, f.tail = u, f.tailMode = e, f.treeForkCount = n);
  }
  function G0(l, t, u) {
    var a = t.pendingProps, e = a.revealOrder, n = a.tail;
    a = a.children;
    var f = Al.current, c = (f & 2) !== 0;
    if (c ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, r(Al, f), Ql(l, t, a, u), a = J ? Va : 0, !c && l !== null && (l.flags & 128) !== 0)
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && Y0(l, u, t);
        else if (l.tag === 19)
          Y0(l, u, t);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            break l;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    switch (e) {
      case "forwards":
        for (u = t.child, e = null; u !== null; )
          l = u.alternate, l !== null && Pe(l) === null && (e = u), u = u.sibling;
        u = e, u === null ? (e = t.child, t.child = null) : (e = u.sibling, u.sibling = null), Sc(
          t,
          !1,
          e,
          u,
          n,
          a
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (u = null, e = t.child, t.child = null; e !== null; ) {
          if (l = e.alternate, l !== null && Pe(l) === null) {
            t.child = e;
            break;
          }
          l = e.sibling, e.sibling = u, u = e, e = l;
        }
        Sc(
          t,
          !0,
          u,
          null,
          n,
          a
        );
        break;
      case "together":
        Sc(
          t,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Vt(l, t, u) {
    if (l !== null && (t.dependencies = l.dependencies), mu |= t.lanes, (u & t.childLanes) === 0)
      if (l !== null) {
        if (ca(
          l,
          t,
          u,
          !1
        ), (u & t.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && t.child !== l.child)
      throw Error(h(153));
    if (t.child !== null) {
      for (l = t.child, u = Yt(l, l.pendingProps), t.child = u, u.return = t; l.sibling !== null; )
        l = l.sibling, u = u.sibling = Yt(l, l.pendingProps), u.return = t;
      u.sibling = null;
    }
    return t.child;
  }
  function bc(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Ke(l)));
  }
  function wm(l, t, u) {
    switch (t.tag) {
      case 3:
        Kl(t, t.stateNode.containerInfo), eu(t, Ml, l.memoizedState.cache), Ru();
        break;
      case 27:
      case 5:
        Ua(t);
        break;
      case 4:
        Kl(t, t.stateNode.containerInfo);
        break;
      case 10:
        eu(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Vf(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (iu(t), t.flags |= 128, null) : (u & t.child.childLanes) !== 0 ? j0(l, t, u) : (iu(t), l = Vt(
            l,
            t,
            u
          ), l !== null ? l.sibling : null);
        iu(t);
        break;
      case 19:
        var e = (l.flags & 128) !== 0;
        if (a = (u & t.childLanes) !== 0, a || (ca(
          l,
          t,
          u,
          !1
        ), a = (u & t.childLanes) !== 0), e) {
          if (a)
            return G0(
              l,
              t,
              u
            );
          t.flags |= 128;
        }
        if (e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), r(Al, Al.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, N0(
          l,
          t,
          u,
          t.pendingProps
        );
      case 24:
        eu(t, Ml, l.memoizedState.cache);
    }
    return Vt(l, t, u);
  }
  function X0(l, t, u) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        Dl = !0;
      else {
        if (!bc(l, u) && (t.flags & 128) === 0)
          return Dl = !1, wm(
            l,
            t,
            u
          );
        Dl = (l.flags & 131072) !== 0;
      }
    else
      Dl = !1, J && (t.flags & 1048576) !== 0 && Ss(t, Va, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var a = t.pendingProps;
          if (l = ju(t.elementType), t.type = l, typeof l == "function")
            Af(l) ? (a = Qu(l, a), t.tag = 1, t = B0(
              null,
              t,
              l,
              a,
              u
            )) : (t.tag = 0, t = vc(
              null,
              t,
              l,
              a,
              u
            ));
          else {
            if (l != null) {
              var e = l.$$typeof;
              if (e === Ll) {
                t.tag = 11, t = D0(
                  null,
                  t,
                  l,
                  a,
                  u
                );
                break l;
              } else if (e === X) {
                t.tag = 14, t = U0(
                  null,
                  t,
                  l,
                  a,
                  u
                );
                break l;
              }
            }
            throw t = Ct(l) || l, Error(h(306, t, ""));
          }
        }
        return t;
      case 0:
        return vc(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 1:
        return a = t.type, e = Qu(
          a,
          t.pendingProps
        ), B0(
          l,
          t,
          a,
          e,
          u
        );
      case 3:
        l: {
          if (Kl(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(h(387));
          a = t.pendingProps;
          var n = t.memoizedState;
          e = n.element, Gf(l, t), ka(t, a, null, u);
          var f = t.memoizedState;
          if (a = f.cache, eu(t, Ml, a), a !== n.cache && Rf(
            t,
            [Ml],
            u,
            !0
          ), Fa(), a = f.element, n.isDehydrated)
            if (n = {
              element: a,
              isDehydrated: !1,
              cache: f.cache
            }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
              t = q0(
                l,
                t,
                a,
                u
              );
              break l;
            } else if (a !== e) {
              e = ht(
                Error(h(424)),
                t
              ), La(e), t = q0(
                l,
                t,
                a,
                u
              );
              break l;
            } else {
              switch (l = t.stateNode.containerInfo, l.nodeType) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (yl = _t(l.firstChild), Gl = t, J = !0, uu = null, bt = !0, u = Ns(
                t,
                null,
                a,
                u
              ), t.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
            }
          else {
            if (Ru(), a === e) {
              t = Vt(
                l,
                t,
                u
              );
              break l;
            }
            Ql(l, t, a, u);
          }
          t = t.child;
        }
        return t;
      case 26:
        return vn(l, t), l === null ? (u = Fy(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = u : J || (u = t.type, l = t.pendingProps, a = Un(
          Q.current
        ).createElement(u), a[Yl] = t, a[wl] = l, Zl(a, u, l), Cl(a), t.stateNode = a) : t.memoizedState = Fy(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Ua(t), l === null && J && (a = t.stateNode = wy(
          t.type,
          t.pendingProps,
          Q.current
        ), Gl = t, bt = !0, e = yl, Su(t.type) ? (kc = e, yl = _t(a.firstChild)) : yl = e), Ql(
          l,
          t,
          t.pendingProps.children,
          u
        ), vn(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && J && ((e = a = yl) && (a = A1(
          a,
          t.type,
          t.pendingProps,
          bt
        ), a !== null ? (t.stateNode = a, Gl = t, yl = _t(a.firstChild), bt = !1, e = !0) : e = !1), e || au(t)), Ua(t), e = t.type, n = t.pendingProps, f = l !== null ? l.memoizedProps : null, a = n.children, Jc(e, n) ? a = null : f !== null && Jc(e, f) && (t.flags |= 32), t.memoizedState !== null && (e = Kf(
          l,
          t,
          Gm,
          null,
          null,
          u
        ), Se._currentValue = e), vn(l, t), Ql(l, t, a, u), t.child;
      case 6:
        return l === null && J && ((l = u = yl) && (u = r1(
          u,
          t.pendingProps,
          bt
        ), u !== null ? (t.stateNode = u, Gl = t, yl = null, l = !0) : l = !1), l || au(t)), null;
      case 13:
        return j0(l, t, u);
      case 4:
        return Kl(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, l === null ? t.child = Gu(
          t,
          null,
          a,
          u
        ) : Ql(l, t, a, u), t.child;
      case 11:
        return D0(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 7:
        return Ql(
          l,
          t,
          t.pendingProps,
          u
        ), t.child;
      case 8:
        return Ql(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 12:
        return Ql(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 10:
        return a = t.pendingProps, eu(t, t.type, a.value), Ql(l, t, a.children, u), t.child;
      case 9:
        return e = t.type._context, a = t.pendingProps.children, Bu(t), e = Xl(e), a = a(e), t.flags |= 1, Ql(l, t, a, u), t.child;
      case 14:
        return U0(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 15:
        return p0(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 19:
        return G0(l, t, u);
      case 31:
        return Jm(l, t, u);
      case 22:
        return N0(
          l,
          t,
          u,
          t.pendingProps
        );
      case 24:
        return Bu(t), a = Xl(Ml), l === null ? (e = qf(), e === null && (e = il, n = Cf(), e.pooledCache = n, n.refCount++, n !== null && (e.pooledCacheLanes |= u), e = n), t.memoizedState = { parent: a, cache: e }, Yf(t), eu(t, Ml, e)) : ((l.lanes & u) !== 0 && (Gf(l, t), ka(t, null, null, u), Fa()), e = l.memoizedState, n = t.memoizedState, e.parent !== a ? (e = { parent: a, cache: a }, t.memoizedState = e, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = e), eu(t, Ml, a)) : (a = n.cache, eu(t, Ml, a), a !== e.cache && Rf(
          t,
          [Ml],
          u,
          !0
        ))), Ql(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(h(156, t.tag));
  }
  function Lt(l) {
    l.flags |= 4;
  }
  function zc(l, t, u, a, e) {
    if ((t = (l.mode & 32) !== 0) && (t = !1), t) {
      if (l.flags |= 16777216, (e & 335544128) === e)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (my()) l.flags |= 8192;
        else
          throw Yu = $e, jf;
    } else l.flags &= -16777217;
  }
  function Q0(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !tv(t))
      if (my()) l.flags |= 8192;
      else
        throw Yu = $e, jf;
  }
  function dn(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? zi() : 536870912, l.lanes |= t, za |= t);
  }
  function ae(l, t) {
    if (!J)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var u = null; t !== null; )
            t.alternate !== null && (u = t), t = t.sibling;
          u === null ? l.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = l.tail;
          for (var a = null; u !== null; )
            u.alternate !== null && (a = u), u = u.sibling;
          a === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : a.sibling = null;
      }
  }
  function vl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, u = 0, a = 0;
    if (t)
      for (var e = l.child; e !== null; )
        u |= e.lanes | e.childLanes, a |= e.subtreeFlags & 65011712, a |= e.flags & 65011712, e.return = l, e = e.sibling;
    else
      for (e = l.child; e !== null; )
        u |= e.lanes | e.childLanes, a |= e.subtreeFlags, a |= e.flags, e.return = l, e = e.sibling;
    return l.subtreeFlags |= a, l.childLanes = u, t;
  }
  function Wm(l, t, u) {
    var a = t.pendingProps;
    switch (Df(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return vl(t), null;
      case 1:
        return vl(t), null;
      case 3:
        return u = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Qt(Ml), El(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (fa(t) ? Lt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, pf())), vl(t), null;
      case 26:
        var e = t.type, n = t.memoizedState;
        return l === null ? (Lt(t), n !== null ? (vl(t), Q0(t, n)) : (vl(t), zc(
          t,
          e,
          null,
          a,
          u
        ))) : n ? n !== l.memoizedState ? (Lt(t), vl(t), Q0(t, n)) : (vl(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== a && Lt(t), vl(t), zc(
          t,
          e,
          l,
          a,
          u
        )), null;
      case 27:
        if (Ae(t), u = Q.current, e = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && Lt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(h(166));
            return vl(t), null;
          }
          l = D.current, fa(t) ? zs(t) : (l = wy(e, a, u), t.stateNode = l, Lt(t));
        }
        return vl(t), null;
      case 5:
        if (Ae(t), e = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && Lt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(h(166));
            return vl(t), null;
          }
          if (n = D.current, fa(t))
            zs(t);
          else {
            var f = Un(
              Q.current
            );
            switch (n) {
              case 1:
                n = f.createElementNS(
                  "http://www.w3.org/2000/svg",
                  e
                );
                break;
              case 2:
                n = f.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  e
                );
                break;
              default:
                switch (e) {
                  case "svg":
                    n = f.createElementNS(
                      "http://www.w3.org/2000/svg",
                      e
                    );
                    break;
                  case "math":
                    n = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      e
                    );
                    break;
                  case "script":
                    n = f.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(
                      n.firstChild
                    );
                    break;
                  case "select":
                    n = typeof a.is == "string" ? f.createElement("select", {
                      is: a.is
                    }) : f.createElement("select"), a.multiple ? n.multiple = !0 : a.size && (n.size = a.size);
                    break;
                  default:
                    n = typeof a.is == "string" ? f.createElement(e, { is: a.is }) : f.createElement(e);
                }
            }
            n[Yl] = t, n[wl] = a;
            l: for (f = t.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6)
                n.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                f.child.return = f, f = f.child;
                continue;
              }
              if (f === t) break l;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === t)
                  break l;
                f = f.return;
              }
              f.sibling.return = f.return, f = f.sibling;
            }
            t.stateNode = n;
            l: switch (Zl(n, e, a), e) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break l;
              case "img":
                a = !0;
                break l;
              default:
                a = !1;
            }
            a && Lt(t);
          }
        }
        return vl(t), zc(
          t,
          t.type,
          l === null ? null : l.memoizedProps,
          t.pendingProps,
          u
        ), null;
      case 6:
        if (l && t.stateNode != null)
          l.memoizedProps !== a && Lt(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(h(166));
          if (l = Q.current, fa(t)) {
            if (l = t.stateNode, u = t.memoizedProps, a = null, e = Gl, e !== null)
              switch (e.tag) {
                case 27:
                case 5:
                  a = e.memoizedProps;
              }
            l[Yl] = t, l = !!(l.nodeValue === u || a !== null && a.suppressHydrationWarning === !0 || jy(l.nodeValue, u)), l || au(t, !0);
          } else
            l = Un(l).createTextNode(
              a
            ), l[Yl] = t, t.stateNode = l;
        }
        return vl(t), null;
      case 31:
        if (u = t.memoizedState, l === null || l.memoizedState !== null) {
          if (a = fa(t), u !== null) {
            if (l === null) {
              if (!a) throw Error(h(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(h(557));
              l[Yl] = t;
            } else
              Ru(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            vl(t), l = !1;
          } else
            u = pf(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), l = !0;
          if (!l)
            return t.flags & 256 ? (ft(t), t) : (ft(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(h(558));
        }
        return vl(t), null;
      case 13:
        if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (e = fa(t), a !== null && a.dehydrated !== null) {
            if (l === null) {
              if (!e) throw Error(h(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(h(317));
              e[Yl] = t;
            } else
              Ru(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            vl(t), e = !1;
          } else
            e = pf(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), e = !0;
          if (!e)
            return t.flags & 256 ? (ft(t), t) : (ft(t), null);
        }
        return ft(t), (t.flags & 128) !== 0 ? (t.lanes = u, t) : (u = a !== null, l = l !== null && l.memoizedState !== null, u && (a = t.child, e = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (e = a.alternate.memoizedState.cachePool.pool), n = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== e && (a.flags |= 2048)), u !== l && u && (t.child.flags |= 8192), dn(t, t.updateQueue), vl(t), null);
      case 4:
        return El(), l === null && Zc(t.stateNode.containerInfo), vl(t), null;
      case 10:
        return Qt(t.type), vl(t), null;
      case 19:
        if (T(Al), a = t.memoizedState, a === null) return vl(t), null;
        if (e = (t.flags & 128) !== 0, n = a.rendering, n === null)
          if (e) ae(a, !1);
          else {
            if (Tl !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (n = Pe(l), n !== null) {
                  for (t.flags |= 128, ae(a, !1), l = n.updateQueue, t.updateQueue = l, dn(t, l), t.subtreeFlags = 0, l = u, u = t.child; u !== null; )
                    os(u, l), u = u.sibling;
                  return r(
                    Al,
                    Al.current & 1 | 2
                  ), J && Gt(t, a.treeForkCount), t.child;
                }
                l = l.sibling;
              }
            a.tail !== null && lt() > bn && (t.flags |= 128, e = !0, ae(a, !1), t.lanes = 4194304);
          }
        else {
          if (!e)
            if (l = Pe(n), l !== null) {
              if (t.flags |= 128, e = !0, l = l.updateQueue, t.updateQueue = l, dn(t, l), ae(a, !0), a.tail === null && a.tailMode === "hidden" && !n.alternate && !J)
                return vl(t), null;
            } else
              2 * lt() - a.renderingStartTime > bn && u !== 536870912 && (t.flags |= 128, e = !0, ae(a, !1), t.lanes = 4194304);
          a.isBackwards ? (n.sibling = t.child, t.child = n) : (l = a.last, l !== null ? l.sibling = n : t.child = n, a.last = n);
        }
        return a.tail !== null ? (l = a.tail, a.rendering = l, a.tail = l.sibling, a.renderingStartTime = lt(), l.sibling = null, u = Al.current, r(
          Al,
          e ? u & 1 | 2 : u & 1
        ), J && Gt(t, a.treeForkCount), l) : (vl(t), null);
      case 22:
      case 23:
        return ft(t), xf(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (u & 536870912) !== 0 && (t.flags & 128) === 0 && (vl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : vl(t), u = t.updateQueue, u !== null && dn(t, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== u && (t.flags |= 2048), l !== null && T(qu), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), Qt(Ml), vl(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(h(156, t.tag));
  }
  function $m(l, t) {
    switch (Df(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return Qt(Ml), El(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Ae(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (ft(t), t.alternate === null)
            throw Error(h(340));
          Ru();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (ft(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(h(340));
          Ru();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return T(Al), null;
      case 4:
        return El(), null;
      case 10:
        return Qt(t.type), null;
      case 22:
      case 23:
        return ft(t), xf(), l !== null && T(qu), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return Qt(Ml), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Z0(l, t) {
    switch (Df(t), t.tag) {
      case 3:
        Qt(Ml), El();
        break;
      case 26:
      case 27:
      case 5:
        Ae(t);
        break;
      case 4:
        El();
        break;
      case 31:
        t.memoizedState !== null && ft(t);
        break;
      case 13:
        ft(t);
        break;
      case 19:
        T(Al);
        break;
      case 10:
        Qt(t.type);
        break;
      case 22:
      case 23:
        ft(t), xf(), l !== null && T(qu);
        break;
      case 24:
        Qt(Ml);
    }
  }
  function ee(l, t) {
    try {
      var u = t.updateQueue, a = u !== null ? u.lastEffect : null;
      if (a !== null) {
        var e = a.next;
        u = e;
        do {
          if ((u.tag & l) === l) {
            a = void 0;
            var n = u.create, f = u.inst;
            a = n(), f.destroy = a;
          }
          u = u.next;
        } while (u !== e);
      }
    } catch (c) {
      ll(t, t.return, c);
    }
  }
  function yu(l, t, u) {
    try {
      var a = t.updateQueue, e = a !== null ? a.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        a = n;
        do {
          if ((a.tag & l) === l) {
            var f = a.inst, c = f.destroy;
            if (c !== void 0) {
              f.destroy = void 0, e = t;
              var i = u, d = c;
              try {
                d();
              } catch (S) {
                ll(
                  e,
                  i,
                  S
                );
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (S) {
      ll(t, t.return, S);
    }
  }
  function x0(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var u = l.stateNode;
      try {
        Rs(t, u);
      } catch (a) {
        ll(l, l.return, a);
      }
    }
  }
  function V0(l, t, u) {
    u.props = Qu(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (a) {
      ll(l, t, a);
    }
  }
  function ne(l, t) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var a = l.stateNode;
            break;
          case 30:
            a = l.stateNode;
            break;
          default:
            a = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(a) : u.current = a;
      }
    } catch (e) {
      ll(l, t, e);
    }
  }
  function Ht(l, t) {
    var u = l.ref, a = l.refCleanup;
    if (u !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (e) {
          ll(l, t, e);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (e) {
          ll(l, t, e);
        }
      else u.current = null;
  }
  function L0(l) {
    var t = l.type, u = l.memoizedProps, a = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && a.focus();
          break l;
        case "img":
          u.src ? a.src = u.src : u.srcSet && (a.srcset = u.srcSet);
      }
    } catch (e) {
      ll(l, l.return, e);
    }
  }
  function _c(l, t, u) {
    try {
      var a = l.stateNode;
      S1(a, l.type, u, t), a[wl] = t;
    } catch (e) {
      ll(l, l.return, e);
    }
  }
  function K0(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && Su(l.type) || l.tag === 4;
  }
  function Tc(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || K0(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && Su(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Ec(l, t, u) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, t) : (t = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, t.appendChild(l), u = u._reactRootContainer, u != null || t.onclick !== null || (t.onclick = qt));
    else if (a !== 4 && (a === 27 && Su(l.type) && (u = l.stateNode, t = null), l = l.child, l !== null))
      for (Ec(l, t, u), l = l.sibling; l !== null; )
        Ec(l, t, u), l = l.sibling;
  }
  function on(l, t, u) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? u.insertBefore(l, t) : u.appendChild(l);
    else if (a !== 4 && (a === 27 && Su(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (on(l, t, u), l = l.sibling; l !== null; )
        on(l, t, u), l = l.sibling;
  }
  function J0(l) {
    var t = l.stateNode, u = l.memoizedProps;
    try {
      for (var a = l.type, e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      Zl(t, a, u), t[Yl] = l, t[wl] = u;
    } catch (n) {
      ll(l, l.return, n);
    }
  }
  var Kt = !1, Ul = !1, Ac = !1, w0 = typeof WeakSet == "function" ? WeakSet : Set, Bl = null;
  function Fm(l, t) {
    if (l = l.containerInfo, Lc = qn, l = ns(l), gf(l)) {
      if ("selectionStart" in l)
        var u = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        l: {
          u = (u = l.ownerDocument) && u.defaultView || window;
          var a = u.getSelection && u.getSelection();
          if (a && a.rangeCount !== 0) {
            u = a.anchorNode;
            var e = a.anchorOffset, n = a.focusNode;
            a = a.focusOffset;
            try {
              u.nodeType, n.nodeType;
            } catch {
              u = null;
              break l;
            }
            var f = 0, c = -1, i = -1, d = 0, S = 0, _ = l, o = null;
            t: for (; ; ) {
              for (var g; _ !== u || e !== 0 && _.nodeType !== 3 || (c = f + e), _ !== n || a !== 0 && _.nodeType !== 3 || (i = f + a), _.nodeType === 3 && (f += _.nodeValue.length), (g = _.firstChild) !== null; )
                o = _, _ = g;
              for (; ; ) {
                if (_ === l) break t;
                if (o === u && ++d === e && (c = f), o === n && ++S === a && (i = f), (g = _.nextSibling) !== null) break;
                _ = o, o = _.parentNode;
              }
              _ = g;
            }
            u = c === -1 || i === -1 ? null : { start: c, end: i };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (Kc = { focusedElem: l, selectionRange: u }, qn = !1, Bl = t; Bl !== null; )
      if (t = Bl, l = t.child, (t.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = t, Bl = l;
      else
        for (; Bl !== null; ) {
          switch (t = Bl, n = t.alternate, l = t.flags, t.tag) {
            case 0:
              if ((l & 4) !== 0 && (l = t.updateQueue, l = l !== null ? l.events : null, l !== null))
                for (u = 0; u < l.length; u++)
                  e = l[u], e.ref.impl = e.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                l = void 0, u = t, e = n.memoizedProps, n = n.memoizedState, a = u.stateNode;
                try {
                  var O = Qu(
                    u.type,
                    e
                  );
                  l = a.getSnapshotBeforeUpdate(
                    O,
                    n
                  ), a.__reactInternalSnapshotBeforeUpdate = l;
                } catch (R) {
                  ll(
                    u,
                    u.return,
                    R
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = t.stateNode.containerInfo, u = l.nodeType, u === 9)
                  Wc(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Wc(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(h(163));
          }
          if (l = t.sibling, l !== null) {
            l.return = t.return, Bl = l;
            break;
          }
          Bl = t.return;
        }
  }
  function W0(l, t, u) {
    var a = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        wt(l, u), a & 4 && ee(5, u);
        break;
      case 1:
        if (wt(l, u), a & 4)
          if (l = u.stateNode, t === null)
            try {
              l.componentDidMount();
            } catch (f) {
              ll(u, u.return, f);
            }
          else {
            var e = Qu(
              u.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              l.componentDidUpdate(
                e,
                t,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (f) {
              ll(
                u,
                u.return,
                f
              );
            }
          }
        a & 64 && x0(u), a & 512 && ne(u, u.return);
        break;
      case 3:
        if (wt(l, u), a & 64 && (l = u.updateQueue, l !== null)) {
          if (t = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                t = u.child.stateNode;
                break;
              case 1:
                t = u.child.stateNode;
            }
          try {
            Rs(l, t);
          } catch (f) {
            ll(u, u.return, f);
          }
        }
        break;
      case 27:
        t === null && a & 4 && J0(u);
      case 26:
      case 5:
        wt(l, u), t === null && a & 4 && L0(u), a & 512 && ne(u, u.return);
        break;
      case 12:
        wt(l, u);
        break;
      case 31:
        wt(l, u), a & 4 && k0(l, u);
        break;
      case 13:
        wt(l, u), a & 4 && I0(l, u), a & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = n1.bind(
          null,
          u
        ), M1(l, u))));
        break;
      case 22:
        if (a = u.memoizedState !== null || Kt, !a) {
          t = t !== null && t.memoizedState !== null || Ul, e = Kt;
          var n = Ul;
          Kt = a, (Ul = t) && !n ? Wt(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : wt(l, u), Kt = e, Ul = n;
        }
        break;
      case 30:
        break;
      default:
        wt(l, u);
    }
  }
  function $0(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, $0(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && In(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var hl = null, $l = !1;
  function Jt(l, t, u) {
    for (u = u.child; u !== null; )
      F0(l, t, u), u = u.sibling;
  }
  function F0(l, t, u) {
    if (tt && typeof tt.onCommitFiberUnmount == "function")
      try {
        tt.onCommitFiberUnmount(pa, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        Ul || Ht(u, t), Jt(
          l,
          t,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        Ul || Ht(u, t);
        var a = hl, e = $l;
        Su(u.type) && (hl = u.stateNode, $l = !1), Jt(
          l,
          t,
          u
        ), oe(u.stateNode), hl = a, $l = e;
        break;
      case 5:
        Ul || Ht(u, t);
      case 6:
        if (a = hl, e = $l, hl = null, Jt(
          l,
          t,
          u
        ), hl = a, $l = e, hl !== null)
          if ($l)
            try {
              (hl.nodeType === 9 ? hl.body : hl.nodeName === "HTML" ? hl.ownerDocument.body : hl).removeChild(u.stateNode);
            } catch (n) {
              ll(
                u,
                t,
                n
              );
            }
          else
            try {
              hl.removeChild(u.stateNode);
            } catch (n) {
              ll(
                u,
                t,
                n
              );
            }
        break;
      case 18:
        hl !== null && ($l ? (l = hl, xy(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), Da(l)) : xy(hl, u.stateNode));
        break;
      case 4:
        a = hl, e = $l, hl = u.stateNode.containerInfo, $l = !0, Jt(
          l,
          t,
          u
        ), hl = a, $l = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        yu(2, u, t), Ul || yu(4, u, t), Jt(
          l,
          t,
          u
        );
        break;
      case 1:
        Ul || (Ht(u, t), a = u.stateNode, typeof a.componentWillUnmount == "function" && V0(
          u,
          t,
          a
        )), Jt(
          l,
          t,
          u
        );
        break;
      case 21:
        Jt(
          l,
          t,
          u
        );
        break;
      case 22:
        Ul = (a = Ul) || u.memoizedState !== null, Jt(
          l,
          t,
          u
        ), Ul = a;
        break;
      default:
        Jt(
          l,
          t,
          u
        );
    }
  }
  function k0(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Da(l);
      } catch (u) {
        ll(t, t.return, u);
      }
    }
  }
  function I0(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Da(l);
      } catch (u) {
        ll(t, t.return, u);
      }
  }
  function km(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new w0()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new w0()), t;
      default:
        throw Error(h(435, l.tag));
    }
  }
  function hn(l, t) {
    var u = km(l);
    t.forEach(function(a) {
      if (!u.has(a)) {
        u.add(a);
        var e = f1.bind(null, l, a);
        a.then(e, e);
      }
    });
  }
  function Fl(l, t) {
    var u = t.deletions;
    if (u !== null)
      for (var a = 0; a < u.length; a++) {
        var e = u[a], n = l, f = t, c = f;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (Su(c.type)) {
                hl = c.stateNode, $l = !1;
                break l;
              }
              break;
            case 5:
              hl = c.stateNode, $l = !1;
              break l;
            case 3:
            case 4:
              hl = c.stateNode.containerInfo, $l = !0;
              break l;
          }
          c = c.return;
        }
        if (hl === null) throw Error(h(160));
        F0(n, f, e), hl = null, $l = !1, n = e.alternate, n !== null && (n.return = null), e.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        P0(t, l), t = t.sibling;
  }
  var Ot = null;
  function P0(l, t) {
    var u = l.alternate, a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Fl(t, l), kl(l), a & 4 && (yu(3, l, l.return), ee(3, l), yu(5, l, l.return));
        break;
      case 1:
        Fl(t, l), kl(l), a & 512 && (Ul || u === null || Ht(u, u.return)), a & 64 && Kt && (l = l.updateQueue, l !== null && (a = l.callbacks, a !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? a : u.concat(a))));
        break;
      case 26:
        var e = Ot;
        if (Fl(t, l), kl(l), a & 512 && (Ul || u === null || Ht(u, u.return)), a & 4) {
          var n = u !== null ? u.memoizedState : null;
          if (a = l.memoizedState, u === null)
            if (a === null)
              if (l.stateNode === null) {
                l: {
                  a = l.type, u = l.memoizedProps, e = e.ownerDocument || e;
                  t: switch (a) {
                    case "title":
                      n = e.getElementsByTagName("title")[0], (!n || n[Ra] || n[Yl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = e.createElement(a), e.head.insertBefore(
                        n,
                        e.querySelector("head > title")
                      )), Zl(n, a, u), n[Yl] = l, Cl(n), a = n;
                      break l;
                    case "link":
                      var f = Py(
                        "link",
                        "href",
                        e
                      ).get(a + (u.href || ""));
                      if (f) {
                        for (var c = 0; c < f.length; c++)
                          if (n = f[c], n.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && n.getAttribute("rel") === (u.rel == null ? null : u.rel) && n.getAttribute("title") === (u.title == null ? null : u.title) && n.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            f.splice(c, 1);
                            break t;
                          }
                      }
                      n = e.createElement(a), Zl(n, a, u), e.head.appendChild(n);
                      break;
                    case "meta":
                      if (f = Py(
                        "meta",
                        "content",
                        e
                      ).get(a + (u.content || ""))) {
                        for (c = 0; c < f.length; c++)
                          if (n = f[c], n.getAttribute("content") === (u.content == null ? null : "" + u.content) && n.getAttribute("name") === (u.name == null ? null : u.name) && n.getAttribute("property") === (u.property == null ? null : u.property) && n.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && n.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            f.splice(c, 1);
                            break t;
                          }
                      }
                      n = e.createElement(a), Zl(n, a, u), e.head.appendChild(n);
                      break;
                    default:
                      throw Error(h(468, a));
                  }
                  n[Yl] = l, Cl(n), a = n;
                }
                l.stateNode = a;
              } else
                lv(
                  e,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = Iy(
                e,
                a,
                l.memoizedProps
              );
          else
            n !== a ? (n === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : n.count--, a === null ? lv(
              e,
              l.type,
              l.stateNode
            ) : Iy(
              e,
              a,
              l.memoizedProps
            )) : a === null && l.stateNode !== null && _c(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        Fl(t, l), kl(l), a & 512 && (Ul || u === null || Ht(u, u.return)), u !== null && a & 4 && _c(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (Fl(t, l), kl(l), a & 512 && (Ul || u === null || Ht(u, u.return)), l.flags & 32) {
          e = l.stateNode;
          try {
            Fu(e, "");
          } catch (O) {
            ll(l, l.return, O);
          }
        }
        a & 4 && l.stateNode != null && (e = l.memoizedProps, _c(
          l,
          e,
          u !== null ? u.memoizedProps : e
        )), a & 1024 && (Ac = !0);
        break;
      case 6:
        if (Fl(t, l), kl(l), a & 4) {
          if (l.stateNode === null)
            throw Error(h(162));
          a = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = a;
          } catch (O) {
            ll(l, l.return, O);
          }
        }
        break;
      case 3:
        if (Hn = null, e = Ot, Ot = pn(t.containerInfo), Fl(t, l), Ot = e, kl(l), a & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            Da(t.containerInfo);
          } catch (O) {
            ll(l, l.return, O);
          }
        Ac && (Ac = !1, ly(l));
        break;
      case 4:
        a = Ot, Ot = pn(
          l.stateNode.containerInfo
        ), Fl(t, l), kl(l), Ot = a;
        break;
      case 12:
        Fl(t, l), kl(l);
        break;
      case 31:
        Fl(t, l), kl(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, hn(l, a)));
        break;
      case 13:
        Fl(t, l), kl(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (Sn = lt()), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, hn(l, a)));
        break;
      case 22:
        e = l.memoizedState !== null;
        var i = u !== null && u.memoizedState !== null, d = Kt, S = Ul;
        if (Kt = d || e, Ul = S || i, Fl(t, l), Ul = S, Kt = d, kl(l), a & 8192)
          l: for (t = l.stateNode, t._visibility = e ? t._visibility & -2 : t._visibility | 1, e && (u === null || i || Kt || Ul || Zu(l)), u = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (u === null) {
                i = u = t;
                try {
                  if (n = i.stateNode, e)
                    f = n.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    c = i.stateNode;
                    var _ = i.memoizedProps.style, o = _ != null && _.hasOwnProperty("display") ? _.display : null;
                    c.style.display = o == null || typeof o == "boolean" ? "" : ("" + o).trim();
                  }
                } catch (O) {
                  ll(i, i.return, O);
                }
              }
            } else if (t.tag === 6) {
              if (u === null) {
                i = t;
                try {
                  i.stateNode.nodeValue = e ? "" : i.memoizedProps;
                } catch (O) {
                  ll(i, i.return, O);
                }
              }
            } else if (t.tag === 18) {
              if (u === null) {
                i = t;
                try {
                  var g = i.stateNode;
                  e ? Vy(g, !0) : Vy(i.stateNode, !1);
                } catch (O) {
                  ll(i, i.return, O);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              u === t && (u = null), t = t.return;
            }
            u === t && (u = null), t.sibling.return = t.return, t = t.sibling;
          }
        a & 4 && (a = l.updateQueue, a !== null && (u = a.retryQueue, u !== null && (a.retryQueue = null, hn(l, u))));
        break;
      case 19:
        Fl(t, l), kl(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, hn(l, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Fl(t, l), kl(l);
    }
  }
  function kl(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var u, a = l.return; a !== null; ) {
          if (K0(a)) {
            u = a;
            break;
          }
          a = a.return;
        }
        if (u == null) throw Error(h(160));
        switch (u.tag) {
          case 27:
            var e = u.stateNode, n = Tc(l);
            on(l, n, e);
            break;
          case 5:
            var f = u.stateNode;
            u.flags & 32 && (Fu(f, ""), u.flags &= -33);
            var c = Tc(l);
            on(l, c, f);
            break;
          case 3:
          case 4:
            var i = u.stateNode.containerInfo, d = Tc(l);
            Ec(
              l,
              d,
              i
            );
            break;
          default:
            throw Error(h(161));
        }
      } catch (S) {
        ll(l, l.return, S);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function ly(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        ly(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
      }
  }
  function wt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        W0(l, t.alternate, t), t = t.sibling;
  }
  function Zu(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          yu(4, t, t.return), Zu(t);
          break;
        case 1:
          Ht(t, t.return);
          var u = t.stateNode;
          typeof u.componentWillUnmount == "function" && V0(
            t,
            t.return,
            u
          ), Zu(t);
          break;
        case 27:
          oe(t.stateNode);
        case 26:
        case 5:
          Ht(t, t.return), Zu(t);
          break;
        case 22:
          t.memoizedState === null && Zu(t);
          break;
        case 30:
          Zu(t);
          break;
        default:
          Zu(t);
      }
      l = l.sibling;
    }
  }
  function Wt(l, t, u) {
    for (u = u && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, e = l, n = t, f = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Wt(
            e,
            n,
            u
          ), ee(4, n);
          break;
        case 1:
          if (Wt(
            e,
            n,
            u
          ), a = n, e = a.stateNode, typeof e.componentDidMount == "function")
            try {
              e.componentDidMount();
            } catch (d) {
              ll(a, a.return, d);
            }
          if (a = n, e = a.updateQueue, e !== null) {
            var c = a.stateNode;
            try {
              var i = e.shared.hiddenCallbacks;
              if (i !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < i.length; e++)
                  Hs(i[e], c);
            } catch (d) {
              ll(a, a.return, d);
            }
          }
          u && f & 64 && x0(n), ne(n, n.return);
          break;
        case 27:
          J0(n);
        case 26:
        case 5:
          Wt(
            e,
            n,
            u
          ), u && a === null && f & 4 && L0(n), ne(n, n.return);
          break;
        case 12:
          Wt(
            e,
            n,
            u
          );
          break;
        case 31:
          Wt(
            e,
            n,
            u
          ), u && f & 4 && k0(e, n);
          break;
        case 13:
          Wt(
            e,
            n,
            u
          ), u && f & 4 && I0(e, n);
          break;
        case 22:
          n.memoizedState === null && Wt(
            e,
            n,
            u
          ), ne(n, n.return);
          break;
        case 30:
          break;
        default:
          Wt(
            e,
            n,
            u
          );
      }
      t = t.sibling;
    }
  }
  function rc(l, t) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && Ka(u));
  }
  function Mc(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Ka(l));
  }
  function Dt(l, t, u, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        ty(
          l,
          t,
          u,
          a
        ), t = t.sibling;
  }
  function ty(l, t, u, a) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Dt(
          l,
          t,
          u,
          a
        ), e & 2048 && ee(9, t);
        break;
      case 1:
        Dt(
          l,
          t,
          u,
          a
        );
        break;
      case 3:
        Dt(
          l,
          t,
          u,
          a
        ), e & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Ka(l)));
        break;
      case 12:
        if (e & 2048) {
          Dt(
            l,
            t,
            u,
            a
          ), l = t.stateNode;
          try {
            var n = t.memoizedProps, f = n.id, c = n.onPostCommit;
            typeof c == "function" && c(
              f,
              t.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (i) {
            ll(t, t.return, i);
          }
        } else
          Dt(
            l,
            t,
            u,
            a
          );
        break;
      case 31:
        Dt(
          l,
          t,
          u,
          a
        );
        break;
      case 13:
        Dt(
          l,
          t,
          u,
          a
        );
        break;
      case 23:
        break;
      case 22:
        n = t.stateNode, f = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? Dt(
          l,
          t,
          u,
          a
        ) : fe(l, t) : n._visibility & 2 ? Dt(
          l,
          t,
          u,
          a
        ) : (n._visibility |= 2, ga(
          l,
          t,
          u,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), e & 2048 && rc(f, t);
        break;
      case 24:
        Dt(
          l,
          t,
          u,
          a
        ), e & 2048 && Mc(t.alternate, t);
        break;
      default:
        Dt(
          l,
          t,
          u,
          a
        );
    }
  }
  function ga(l, t, u, a, e) {
    for (e = e && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var n = l, f = t, c = u, i = a, d = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          ga(
            n,
            f,
            c,
            i,
            e
          ), ee(8, f);
          break;
        case 23:
          break;
        case 22:
          var S = f.stateNode;
          f.memoizedState !== null ? S._visibility & 2 ? ga(
            n,
            f,
            c,
            i,
            e
          ) : fe(
            n,
            f
          ) : (S._visibility |= 2, ga(
            n,
            f,
            c,
            i,
            e
          )), e && d & 2048 && rc(
            f.alternate,
            f
          );
          break;
        case 24:
          ga(
            n,
            f,
            c,
            i,
            e
          ), e && d & 2048 && Mc(f.alternate, f);
          break;
        default:
          ga(
            n,
            f,
            c,
            i,
            e
          );
      }
      t = t.sibling;
    }
  }
  function fe(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var u = l, a = t, e = a.flags;
        switch (a.tag) {
          case 22:
            fe(u, a), e & 2048 && rc(
              a.alternate,
              a
            );
            break;
          case 24:
            fe(u, a), e & 2048 && Mc(a.alternate, a);
            break;
          default:
            fe(u, a);
        }
        t = t.sibling;
      }
  }
  var ce = 8192;
  function Sa(l, t, u) {
    if (l.subtreeFlags & ce)
      for (l = l.child; l !== null; )
        uy(
          l,
          t,
          u
        ), l = l.sibling;
  }
  function uy(l, t, u) {
    switch (l.tag) {
      case 26:
        Sa(
          l,
          t,
          u
        ), l.flags & ce && l.memoizedState !== null && Y1(
          u,
          Ot,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        Sa(
          l,
          t,
          u
        );
        break;
      case 3:
      case 4:
        var a = Ot;
        Ot = pn(l.stateNode.containerInfo), Sa(
          l,
          t,
          u
        ), Ot = a;
        break;
      case 22:
        l.memoizedState === null && (a = l.alternate, a !== null && a.memoizedState !== null ? (a = ce, ce = 16777216, Sa(
          l,
          t,
          u
        ), ce = a) : Sa(
          l,
          t,
          u
        ));
        break;
      default:
        Sa(
          l,
          t,
          u
        );
    }
  }
  function ay(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function ie(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var a = t[u];
          Bl = a, ny(
            a,
            l
          );
        }
      ay(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        ey(l), l = l.sibling;
  }
  function ey(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        ie(l), l.flags & 2048 && yu(9, l, l.return);
        break;
      case 3:
        ie(l);
        break;
      case 12:
        ie(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, gn(l)) : ie(l);
        break;
      default:
        ie(l);
    }
  }
  function gn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var a = t[u];
          Bl = a, ny(
            a,
            l
          );
        }
      ay(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          yu(8, t, t.return), gn(t);
          break;
        case 22:
          u = t.stateNode, u._visibility & 2 && (u._visibility &= -3, gn(t));
          break;
        default:
          gn(t);
      }
      l = l.sibling;
    }
  }
  function ny(l, t) {
    for (; Bl !== null; ) {
      var u = Bl;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          yu(8, u, t);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var a = u.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Ka(u.memoizedState.cache);
      }
      if (a = u.child, a !== null) a.return = u, Bl = a;
      else
        l: for (u = l; Bl !== null; ) {
          a = Bl;
          var e = a.sibling, n = a.return;
          if ($0(a), a === u) {
            Bl = null;
            break l;
          }
          if (e !== null) {
            e.return = n, Bl = e;
            break l;
          }
          Bl = n;
        }
    }
  }
  var Im = {
    getCacheForType: function(l) {
      var t = Xl(Ml), u = t.data.get(l);
      return u === void 0 && (u = l(), t.data.set(l, u)), u;
    },
    cacheSignal: function() {
      return Xl(Ml).controller.signal;
    }
  }, Pm = typeof WeakMap == "function" ? WeakMap : Map, F = 0, il = null, Z = null, L = 0, P = 0, ct = null, vu = !1, ba = !1, Oc = !1, $t = 0, Tl = 0, mu = 0, xu = 0, Dc = 0, it = 0, za = 0, se = null, Il = null, Uc = !1, Sn = 0, fy = 0, bn = 1 / 0, zn = null, du = null, Nl = 0, ou = null, _a = null, Ft = 0, pc = 0, Nc = null, cy = null, ye = 0, Hc = null;
  function st() {
    return (F & 2) !== 0 && L !== 0 ? L & -L : b.T !== null ? Yc() : Ai();
  }
  function iy() {
    if (it === 0)
      if ((L & 536870912) === 0 || J) {
        var l = Oe;
        Oe <<= 1, (Oe & 3932160) === 0 && (Oe = 262144), it = l;
      } else it = 536870912;
    return l = nt.current, l !== null && (l.flags |= 32), it;
  }
  function Pl(l, t, u) {
    (l === il && (P === 2 || P === 9) || l.cancelPendingCommit !== null) && (Ta(l, 0), hu(
      l,
      L,
      it,
      !1
    )), Ha(l, u), ((F & 2) === 0 || l !== il) && (l === il && ((F & 2) === 0 && (xu |= u), Tl === 4 && hu(
      l,
      L,
      it,
      !1
    )), Rt(l));
  }
  function sy(l, t, u) {
    if ((F & 6) !== 0) throw Error(h(327));
    var a = !u && (t & 127) === 0 && (t & l.expiredLanes) === 0 || Na(l, t), e = a ? u1(l, t) : Cc(l, t, !0), n = a;
    do {
      if (e === 0) {
        ba && !a && hu(l, t, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, n && !l1(u)) {
          e = Cc(l, t, !1), n = !1;
          continue;
        }
        if (e === 2) {
          if (n = t, l.errorRecoveryDisabledLanes & n)
            var f = 0;
          else
            f = l.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            t = f;
            l: {
              var c = l;
              e = se;
              var i = c.current.memoizedState.isDehydrated;
              if (i && (Ta(c, f).flags |= 256), f = Cc(
                c,
                f,
                !1
              ), f !== 2) {
                if (Oc && !i) {
                  c.errorRecoveryDisabledLanes |= n, xu |= n, e = 4;
                  break l;
                }
                n = Il, Il = e, n !== null && (Il === null ? Il = n : Il.push.apply(
                  Il,
                  n
                ));
              }
              e = f;
            }
            if (n = !1, e !== 2) continue;
          }
        }
        if (e === 1) {
          Ta(l, 0), hu(l, t, 0, !0);
          break;
        }
        l: {
          switch (a = l, n = e, n) {
            case 0:
            case 1:
              throw Error(h(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              hu(
                a,
                t,
                it,
                !vu
              );
              break l;
            case 2:
              Il = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(h(329));
          }
          if ((t & 62914560) === t && (e = Sn + 300 - lt(), 10 < e)) {
            if (hu(
              a,
              t,
              it,
              !vu
            ), Ue(a, 0, !0) !== 0) break l;
            Ft = t, a.timeoutHandle = Qy(
              yy.bind(
                null,
                a,
                u,
                Il,
                zn,
                Uc,
                t,
                it,
                xu,
                za,
                vu,
                n,
                "Throttled",
                -0,
                0
              ),
              e
            );
            break l;
          }
          yy(
            a,
            u,
            Il,
            zn,
            Uc,
            t,
            it,
            xu,
            za,
            vu,
            n,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Rt(l);
  }
  function yy(l, t, u, a, e, n, f, c, i, d, S, _, o, g) {
    if (l.timeoutHandle = -1, _ = t.subtreeFlags, _ & 8192 || (_ & 16785408) === 16785408) {
      _ = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: qt
      }, uy(
        t,
        n,
        _
      );
      var O = (n & 62914560) === n ? Sn - lt() : (n & 4194048) === n ? fy - lt() : 0;
      if (O = G1(
        _,
        O
      ), O !== null) {
        Ft = n, l.cancelPendingCommit = O(
          by.bind(
            null,
            l,
            t,
            n,
            u,
            a,
            e,
            f,
            c,
            i,
            S,
            _,
            null,
            o,
            g
          )
        ), hu(l, n, f, !d);
        return;
      }
    }
    by(
      l,
      t,
      n,
      u,
      a,
      e,
      f,
      c,
      i
    );
  }
  function l1(l) {
    for (var t = l; ; ) {
      var u = t.tag;
      if ((u === 0 || u === 11 || u === 15) && t.flags & 16384 && (u = t.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var a = 0; a < u.length; a++) {
          var e = u[a], n = e.getSnapshot;
          e = e.value;
          try {
            if (!at(n(), e)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = t.child, t.subtreeFlags & 16384 && u !== null)
        u.return = t, t = u;
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function hu(l, t, u, a) {
    t &= ~Dc, t &= ~xu, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
    for (var e = t; 0 < e; ) {
      var n = 31 - ut(e), f = 1 << n;
      a[n] = -1, e &= ~f;
    }
    u !== 0 && _i(l, u, t);
  }
  function _n() {
    return (F & 6) === 0 ? (ve(0), !1) : !0;
  }
  function Rc() {
    if (Z !== null) {
      if (P === 0)
        var l = Z.return;
      else
        l = Z, Xt = Cu = null, Wf(l), va = null, wa = 0, l = Z;
      for (; l !== null; )
        Z0(l.alternate, l), l = l.return;
      Z = null;
    }
  }
  function Ta(l, t) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, _1(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), Ft = 0, Rc(), il = l, Z = u = Yt(l.current, null), L = t, P = 0, ct = null, vu = !1, ba = Na(l, t), Oc = !1, za = it = Dc = xu = mu = Tl = 0, Il = se = null, Uc = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = l.entangledLanes;
    if (a !== 0)
      for (l = l.entanglements, a &= t; 0 < a; ) {
        var e = 31 - ut(a), n = 1 << e;
        t |= l[e], a &= ~n;
      }
    return $t = t, Qe(), u;
  }
  function vy(l, t) {
    Y = null, b.H = te, t === ya || t === We ? (t = Ds(), P = 3) : t === jf ? (t = Ds(), P = 4) : P = t === yc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, ct = t, Z === null && (Tl = 1, sn(
      l,
      ht(t, l.current)
    ));
  }
  function my() {
    var l = nt.current;
    return l === null ? !0 : (L & 4194048) === L ? zt === null : (L & 62914560) === L || (L & 536870912) !== 0 ? l === zt : !1;
  }
  function dy() {
    var l = b.H;
    return b.H = te, l === null ? te : l;
  }
  function oy() {
    var l = b.A;
    return b.A = Im, l;
  }
  function Tn() {
    Tl = 4, vu || (L & 4194048) !== L && nt.current !== null || (ba = !0), (mu & 134217727) === 0 && (xu & 134217727) === 0 || il === null || hu(
      il,
      L,
      it,
      !1
    );
  }
  function Cc(l, t, u) {
    var a = F;
    F |= 2;
    var e = dy(), n = oy();
    (il !== l || L !== t) && (zn = null, Ta(l, t)), t = !1;
    var f = Tl;
    l: do
      try {
        if (P !== 0 && Z !== null) {
          var c = Z, i = ct;
          switch (P) {
            case 8:
              Rc(), f = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              nt.current === null && (t = !0);
              var d = P;
              if (P = 0, ct = null, Ea(l, c, i, d), u && ba) {
                f = 0;
                break l;
              }
              break;
            default:
              d = P, P = 0, ct = null, Ea(l, c, i, d);
          }
        }
        t1(), f = Tl;
        break;
      } catch (S) {
        vy(l, S);
      }
    while (!0);
    return t && l.shellSuspendCounter++, Xt = Cu = null, F = a, b.H = e, b.A = n, Z === null && (il = null, L = 0, Qe()), f;
  }
  function t1() {
    for (; Z !== null; ) hy(Z);
  }
  function u1(l, t) {
    var u = F;
    F |= 2;
    var a = dy(), e = oy();
    il !== l || L !== t ? (zn = null, bn = lt() + 500, Ta(l, t)) : ba = Na(
      l,
      t
    );
    l: do
      try {
        if (P !== 0 && Z !== null) {
          t = Z;
          var n = ct;
          t: switch (P) {
            case 1:
              P = 0, ct = null, Ea(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (Ms(n)) {
                P = 0, ct = null, gy(t);
                break;
              }
              t = function() {
                P !== 2 && P !== 9 || il !== l || (P = 7), Rt(l);
              }, n.then(t, t);
              break l;
            case 3:
              P = 7;
              break l;
            case 4:
              P = 5;
              break l;
            case 7:
              Ms(n) ? (P = 0, ct = null, gy(t)) : (P = 0, ct = null, Ea(l, t, n, 7));
              break;
            case 5:
              var f = null;
              switch (Z.tag) {
                case 26:
                  f = Z.memoizedState;
                case 5:
                case 27:
                  var c = Z;
                  if (f ? tv(f) : c.stateNode.complete) {
                    P = 0, ct = null;
                    var i = c.sibling;
                    if (i !== null) Z = i;
                    else {
                      var d = c.return;
                      d !== null ? (Z = d, En(d)) : Z = null;
                    }
                    break t;
                  }
              }
              P = 0, ct = null, Ea(l, t, n, 5);
              break;
            case 6:
              P = 0, ct = null, Ea(l, t, n, 6);
              break;
            case 8:
              Rc(), Tl = 6;
              break l;
            default:
              throw Error(h(462));
          }
        }
        a1();
        break;
      } catch (S) {
        vy(l, S);
      }
    while (!0);
    return Xt = Cu = null, b.H = a, b.A = e, F = u, Z !== null ? 0 : (il = null, L = 0, Qe(), Tl);
  }
  function a1() {
    for (; Z !== null && !Ov(); )
      hy(Z);
  }
  function hy(l) {
    var t = X0(l.alternate, l, $t);
    l.memoizedProps = l.pendingProps, t === null ? En(l) : Z = t;
  }
  function gy(l) {
    var t = l, u = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = C0(
          u,
          t,
          t.pendingProps,
          t.type,
          void 0,
          L
        );
        break;
      case 11:
        t = C0(
          u,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          L
        );
        break;
      case 5:
        Wf(t);
      default:
        Z0(u, t), t = Z = os(t, $t), t = X0(u, t, $t);
    }
    l.memoizedProps = l.pendingProps, t === null ? En(l) : Z = t;
  }
  function Ea(l, t, u, a) {
    Xt = Cu = null, Wf(t), va = null, wa = 0;
    var e = t.return;
    try {
      if (Km(
        l,
        e,
        t,
        u,
        L
      )) {
        Tl = 1, sn(
          l,
          ht(u, l.current)
        ), Z = null;
        return;
      }
    } catch (n) {
      if (e !== null) throw Z = e, n;
      Tl = 1, sn(
        l,
        ht(u, l.current)
      ), Z = null;
      return;
    }
    t.flags & 32768 ? (J || a === 1 ? l = !0 : ba || (L & 536870912) !== 0 ? l = !1 : (vu = l = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = nt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Sy(t, l)) : En(t);
  }
  function En(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        Sy(
          t,
          vu
        );
        return;
      }
      l = t.return;
      var u = Wm(
        t.alternate,
        t,
        $t
      );
      if (u !== null) {
        Z = u;
        return;
      }
      if (t = t.sibling, t !== null) {
        Z = t;
        return;
      }
      Z = t = l;
    } while (t !== null);
    Tl === 0 && (Tl = 5);
  }
  function Sy(l, t) {
    do {
      var u = $m(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, Z = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !t && (l = l.sibling, l !== null)) {
        Z = l;
        return;
      }
      Z = l = u;
    } while (l !== null);
    Tl = 6, Z = null;
  }
  function by(l, t, u, a, e, n, f, c, i) {
    l.cancelPendingCommit = null;
    do
      An();
    while (Nl !== 0);
    if ((F & 6) !== 0) throw Error(h(327));
    if (t !== null) {
      if (t === l.current) throw Error(h(177));
      if (n = t.lanes | t.childLanes, n |= Tf, jv(
        l,
        u,
        n,
        f,
        c,
        i
      ), l === il && (Z = il = null, L = 0), _a = t, ou = l, Ft = u, pc = n, Nc = e, cy = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, c1(re, function() {
        return Ay(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = b.T, b.T = null, e = A.p, A.p = 2, f = F, F |= 4;
        try {
          Fm(l, t, u);
        } finally {
          F = f, A.p = e, b.T = a;
        }
      }
      Nl = 1, zy(), _y(), Ty();
    }
  }
  function zy() {
    if (Nl === 1) {
      Nl = 0;
      var l = ou, t = _a, u = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || u) {
        u = b.T, b.T = null;
        var a = A.p;
        A.p = 2;
        var e = F;
        F |= 4;
        try {
          P0(t, l);
          var n = Kc, f = ns(l.containerInfo), c = n.focusedElem, i = n.selectionRange;
          if (f !== c && c && c.ownerDocument && es(
            c.ownerDocument.documentElement,
            c
          )) {
            if (i !== null && gf(c)) {
              var d = i.start, S = i.end;
              if (S === void 0 && (S = d), "selectionStart" in c)
                c.selectionStart = d, c.selectionEnd = Math.min(
                  S,
                  c.value.length
                );
              else {
                var _ = c.ownerDocument || document, o = _ && _.defaultView || window;
                if (o.getSelection) {
                  var g = o.getSelection(), O = c.textContent.length, R = Math.min(i.start, O), nl = i.end === void 0 ? R : Math.min(i.end, O);
                  !g.extend && R > nl && (f = nl, nl = R, R = f);
                  var v = as(
                    c,
                    R
                  ), s = as(
                    c,
                    nl
                  );
                  if (v && s && (g.rangeCount !== 1 || g.anchorNode !== v.node || g.anchorOffset !== v.offset || g.focusNode !== s.node || g.focusOffset !== s.offset)) {
                    var m = _.createRange();
                    m.setStart(v.node, v.offset), g.removeAllRanges(), R > nl ? (g.addRange(m), g.extend(s.node, s.offset)) : (m.setEnd(s.node, s.offset), g.addRange(m));
                  }
                }
              }
            }
            for (_ = [], g = c; g = g.parentNode; )
              g.nodeType === 1 && _.push({
                element: g,
                left: g.scrollLeft,
                top: g.scrollTop
              });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < _.length; c++) {
              var z = _[c];
              z.element.scrollLeft = z.left, z.element.scrollTop = z.top;
            }
          }
          qn = !!Lc, Kc = Lc = null;
        } finally {
          F = e, A.p = a, b.T = u;
        }
      }
      l.current = t, Nl = 2;
    }
  }
  function _y() {
    if (Nl === 2) {
      Nl = 0;
      var l = ou, t = _a, u = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || u) {
        u = b.T, b.T = null;
        var a = A.p;
        A.p = 2;
        var e = F;
        F |= 4;
        try {
          W0(l, t.alternate, t);
        } finally {
          F = e, A.p = a, b.T = u;
        }
      }
      Nl = 3;
    }
  }
  function Ty() {
    if (Nl === 4 || Nl === 3) {
      Nl = 0, Dv();
      var l = ou, t = _a, u = Ft, a = cy;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Nl = 5 : (Nl = 0, _a = ou = null, Ey(l, l.pendingLanes));
      var e = l.pendingLanes;
      if (e === 0 && (du = null), Fn(u), t = t.stateNode, tt && typeof tt.onCommitFiberRoot == "function")
        try {
          tt.onCommitFiberRoot(
            pa,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        t = b.T, e = A.p, A.p = 2, b.T = null;
        try {
          for (var n = l.onRecoverableError, f = 0; f < a.length; f++) {
            var c = a[f];
            n(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          b.T = t, A.p = e;
        }
      }
      (Ft & 3) !== 0 && An(), Rt(l), e = l.pendingLanes, (u & 261930) !== 0 && (e & 42) !== 0 ? l === Hc ? ye++ : (ye = 0, Hc = l) : ye = 0, ve(0);
    }
  }
  function Ey(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Ka(t)));
  }
  function An() {
    return zy(), _y(), Ty(), Ay();
  }
  function Ay() {
    if (Nl !== 5) return !1;
    var l = ou, t = pc;
    pc = 0;
    var u = Fn(Ft), a = b.T, e = A.p;
    try {
      A.p = 32 > u ? 32 : u, b.T = null, u = Nc, Nc = null;
      var n = ou, f = Ft;
      if (Nl = 0, _a = ou = null, Ft = 0, (F & 6) !== 0) throw Error(h(331));
      var c = F;
      if (F |= 4, ey(n.current), ty(
        n,
        n.current,
        f,
        u
      ), F = c, ve(0, !1), tt && typeof tt.onPostCommitFiberRoot == "function")
        try {
          tt.onPostCommitFiberRoot(pa, n);
        } catch {
        }
      return !0;
    } finally {
      A.p = e, b.T = a, Ey(l, t);
    }
  }
  function ry(l, t, u) {
    t = ht(u, t), t = sc(l.stateNode, t, 2), l = cu(l, t, 2), l !== null && (Ha(l, 2), Rt(l));
  }
  function ll(l, t, u) {
    if (l.tag === 3)
      ry(l, l, u);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          ry(
            t,
            l,
            u
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (du === null || !du.has(a))) {
            l = ht(u, l), u = M0(2), a = cu(t, u, 2), a !== null && (O0(
              u,
              a,
              t,
              l
            ), Ha(a, 2), Rt(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Bc(l, t, u) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new Pm();
      var e = /* @__PURE__ */ new Set();
      a.set(t, e);
    } else
      e = a.get(t), e === void 0 && (e = /* @__PURE__ */ new Set(), a.set(t, e));
    e.has(u) || (Oc = !0, e.add(u), l = e1.bind(null, l, t, u), t.then(l, l));
  }
  function e1(l, t, u) {
    var a = l.pingCache;
    a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, il === l && (L & u) === u && (Tl === 4 || Tl === 3 && (L & 62914560) === L && 300 > lt() - Sn ? (F & 2) === 0 && Ta(l, 0) : Dc |= u, za === L && (za = 0)), Rt(l);
  }
  function My(l, t) {
    t === 0 && (t = zi()), l = Nu(l, t), l !== null && (Ha(l, t), Rt(l));
  }
  function n1(l) {
    var t = l.memoizedState, u = 0;
    t !== null && (u = t.retryLane), My(l, u);
  }
  function f1(l, t) {
    var u = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var a = l.stateNode, e = l.memoizedState;
        e !== null && (u = e.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(h(314));
    }
    a !== null && a.delete(t), My(l, u);
  }
  function c1(l, t) {
    return Jn(l, t);
  }
  var rn = null, Aa = null, qc = !1, Mn = !1, jc = !1, gu = 0;
  function Rt(l) {
    l !== Aa && l.next === null && (Aa === null ? rn = Aa = l : Aa = Aa.next = l), Mn = !0, qc || (qc = !0, s1());
  }
  function ve(l, t) {
    if (!jc && Mn) {
      jc = !0;
      do
        for (var u = !1, a = rn; a !== null; ) {
          if (l !== 0) {
            var e = a.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var f = a.suspendedLanes, c = a.pingedLanes;
              n = (1 << 31 - ut(42 | l) + 1) - 1, n &= e & ~(f & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (u = !0, py(a, n));
          } else
            n = L, n = Ue(
              a,
              a === il ? n : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (n & 3) === 0 || Na(a, n) || (u = !0, py(a, n));
          a = a.next;
        }
      while (u);
      jc = !1;
    }
  }
  function i1() {
    Oy();
  }
  function Oy() {
    Mn = qc = !1;
    var l = 0;
    gu !== 0 && z1() && (l = gu);
    for (var t = lt(), u = null, a = rn; a !== null; ) {
      var e = a.next, n = Dy(a, t);
      n === 0 ? (a.next = null, u === null ? rn = e : u.next = e, e === null && (Aa = u)) : (u = a, (l !== 0 || (n & 3) !== 0) && (Mn = !0)), a = e;
    }
    Nl !== 0 && Nl !== 5 || ve(l), gu !== 0 && (gu = 0);
  }
  function Dy(l, t) {
    for (var u = l.suspendedLanes, a = l.pingedLanes, e = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var f = 31 - ut(n), c = 1 << f, i = e[f];
      i === -1 ? ((c & u) === 0 || (c & a) !== 0) && (e[f] = qv(c, t)) : i <= t && (l.expiredLanes |= c), n &= ~c;
    }
    if (t = il, u = L, u = Ue(
      l,
      l === t ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a = l.callbackNode, u === 0 || l === t && (P === 2 || P === 9) || l.cancelPendingCommit !== null)
      return a !== null && a !== null && wn(a), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || Na(l, u)) {
      if (t = u & -u, t === l.callbackPriority) return t;
      switch (a !== null && wn(a), Fn(u)) {
        case 2:
        case 8:
          u = Si;
          break;
        case 32:
          u = re;
          break;
        case 268435456:
          u = bi;
          break;
        default:
          u = re;
      }
      return a = Uy.bind(null, l), u = Jn(u, a), l.callbackPriority = t, l.callbackNode = u, t;
    }
    return a !== null && a !== null && wn(a), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function Uy(l, t) {
    if (Nl !== 0 && Nl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (An() && l.callbackNode !== u)
      return null;
    var a = L;
    return a = Ue(
      l,
      l === il ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a === 0 ? null : (sy(l, a, t), Dy(l, lt()), l.callbackNode != null && l.callbackNode === u ? Uy.bind(null, l) : null);
  }
  function py(l, t) {
    if (An()) return null;
    sy(l, t, !0);
  }
  function s1() {
    T1(function() {
      (F & 6) !== 0 ? Jn(
        gi,
        i1
      ) : Oy();
    });
  }
  function Yc() {
    if (gu === 0) {
      var l = ia;
      l === 0 && (l = Me, Me <<= 1, (Me & 261888) === 0 && (Me = 256)), gu = l;
    }
    return gu;
  }
  function Ny(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Re("" + l);
  }
  function Hy(l, t) {
    var u = t.ownerDocument.createElement("input");
    return u.name = t.name, u.value = t.value, l.id && u.setAttribute("form", l.id), t.parentNode.insertBefore(u, t), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function y1(l, t, u, a, e) {
    if (t === "submit" && u && u.stateNode === e) {
      var n = Ny(
        (e[wl] || null).action
      ), f = a.submitter;
      f && (t = (t = f[wl] || null) ? Ny(t.formAction) : f.getAttribute("formAction"), t !== null && (n = t, f = null));
      var c = new je(
        "action",
        "action",
        null,
        a,
        e
      );
      l.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (gu !== 0) {
                  var i = f ? Hy(e, f) : new FormData(e);
                  ac(
                    u,
                    {
                      pending: !0,
                      data: i,
                      method: e.method,
                      action: n
                    },
                    null,
                    i
                  );
                }
              } else
                typeof n == "function" && (c.preventDefault(), i = f ? Hy(e, f) : new FormData(e), ac(
                  u,
                  {
                    pending: !0,
                    data: i,
                    method: e.method,
                    action: n
                  },
                  n,
                  i
                ));
            },
            currentTarget: e
          }
        ]
      });
    }
  }
  for (var Gc = 0; Gc < _f.length; Gc++) {
    var Xc = _f[Gc], v1 = Xc.toLowerCase(), m1 = Xc[0].toUpperCase() + Xc.slice(1);
    Mt(
      v1,
      "on" + m1
    );
  }
  Mt(is, "onAnimationEnd"), Mt(ss, "onAnimationIteration"), Mt(ys, "onAnimationStart"), Mt("dblclick", "onDoubleClick"), Mt("focusin", "onFocus"), Mt("focusout", "onBlur"), Mt(Um, "onTransitionRun"), Mt(pm, "onTransitionStart"), Mt(Nm, "onTransitionCancel"), Mt(vs, "onTransitionEnd"), Wu("onMouseEnter", ["mouseout", "mouseover"]), Wu("onMouseLeave", ["mouseout", "mouseover"]), Wu("onPointerEnter", ["pointerout", "pointerover"]), Wu("onPointerLeave", ["pointerout", "pointerover"]), Ou(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Ou(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Ou("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Ou(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Ou(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Ou(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var me = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), d1 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(me)
  );
  function Ry(l, t) {
    t = (t & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var a = l[u], e = a.event;
      a = a.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var f = a.length - 1; 0 <= f; f--) {
            var c = a[f], i = c.instance, d = c.currentTarget;
            if (c = c.listener, i !== n && e.isPropagationStopped())
              break l;
            n = c, e.currentTarget = d;
            try {
              n(e);
            } catch (S) {
              Xe(S);
            }
            e.currentTarget = null, n = i;
          }
        else
          for (f = 0; f < a.length; f++) {
            if (c = a[f], i = c.instance, d = c.currentTarget, c = c.listener, i !== n && e.isPropagationStopped())
              break l;
            n = c, e.currentTarget = d;
            try {
              n(e);
            } catch (S) {
              Xe(S);
            }
            e.currentTarget = null, n = i;
          }
      }
    }
  }
  function x(l, t) {
    var u = t[kn];
    u === void 0 && (u = t[kn] = /* @__PURE__ */ new Set());
    var a = l + "__bubble";
    u.has(a) || (Cy(t, l, 2, !1), u.add(a));
  }
  function Qc(l, t, u) {
    var a = 0;
    t && (a |= 4), Cy(
      u,
      l,
      a,
      t
    );
  }
  var On = "_reactListening" + Math.random().toString(36).slice(2);
  function Zc(l) {
    if (!l[On]) {
      l[On] = !0, Oi.forEach(function(u) {
        u !== "selectionchange" && (d1.has(u) || Qc(u, !1, l), Qc(u, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[On] || (t[On] = !0, Qc("selectionchange", !1, t));
    }
  }
  function Cy(l, t, u, a) {
    switch (iv(t)) {
      case 2:
        var e = Z1;
        break;
      case 8:
        e = x1;
        break;
      default:
        e = ui;
    }
    u = e.bind(
      null,
      t,
      u,
      l
    ), e = void 0, !ff || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (e = !0), a ? e !== void 0 ? l.addEventListener(t, u, {
      capture: !0,
      passive: e
    }) : l.addEventListener(t, u, !0) : e !== void 0 ? l.addEventListener(t, u, {
      passive: e
    }) : l.addEventListener(t, u, !1);
  }
  function xc(l, t, u, a, e) {
    var n = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      l: for (; ; ) {
        if (a === null) return;
        var f = a.tag;
        if (f === 3 || f === 4) {
          var c = a.stateNode.containerInfo;
          if (c === e) break;
          if (f === 4)
            for (f = a.return; f !== null; ) {
              var i = f.tag;
              if ((i === 3 || i === 4) && f.stateNode.containerInfo === e)
                return;
              f = f.return;
            }
          for (; c !== null; ) {
            if (f = Ku(c), f === null) return;
            if (i = f.tag, i === 5 || i === 6 || i === 26 || i === 27) {
              a = n = f;
              continue l;
            }
            c = c.parentNode;
          }
        }
        a = a.return;
      }
    Gi(function() {
      var d = n, S = ef(u), _ = [];
      l: {
        var o = ms.get(l);
        if (o !== void 0) {
          var g = je, O = l;
          switch (l) {
            case "keypress":
              if (Be(u) === 0) break l;
            case "keydown":
            case "keyup":
              g = fm;
              break;
            case "focusin":
              O = "focus", g = vf;
              break;
            case "focusout":
              O = "blur", g = vf;
              break;
            case "beforeblur":
            case "afterblur":
              g = vf;
              break;
            case "click":
              if (u.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              g = Zi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              g = Wv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              g = sm;
              break;
            case is:
            case ss:
            case ys:
              g = kv;
              break;
            case vs:
              g = vm;
              break;
            case "scroll":
            case "scrollend":
              g = Jv;
              break;
            case "wheel":
              g = dm;
              break;
            case "copy":
            case "cut":
            case "paste":
              g = Pv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              g = Vi;
              break;
            case "toggle":
            case "beforetoggle":
              g = hm;
          }
          var R = (t & 4) !== 0, nl = !R && (l === "scroll" || l === "scrollend"), v = R ? o !== null ? o + "Capture" : null : o;
          R = [];
          for (var s = d, m; s !== null; ) {
            var z = s;
            if (m = z.stateNode, z = z.tag, z !== 5 && z !== 26 && z !== 27 || m === null || v === null || (z = Ba(s, v), z != null && R.push(
              de(s, z, m)
            )), nl) break;
            s = s.return;
          }
          0 < R.length && (o = new g(
            o,
            O,
            null,
            u,
            S
          ), _.push({ event: o, listeners: R }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (o = l === "mouseover" || l === "pointerover", g = l === "mouseout" || l === "pointerout", o && u !== af && (O = u.relatedTarget || u.fromElement) && (Ku(O) || O[Lu]))
            break l;
          if ((g || o) && (o = S.window === S ? S : (o = S.ownerDocument) ? o.defaultView || o.parentWindow : window, g ? (O = u.relatedTarget || u.toElement, g = d, O = O ? Ku(O) : null, O !== null && (nl = bl(O), R = O.tag, O !== nl || R !== 5 && R !== 27 && R !== 6) && (O = null)) : (g = null, O = d), g !== O)) {
            if (R = Zi, z = "onMouseLeave", v = "onMouseEnter", s = "mouse", (l === "pointerout" || l === "pointerover") && (R = Vi, z = "onPointerLeave", v = "onPointerEnter", s = "pointer"), nl = g == null ? o : Ca(g), m = O == null ? o : Ca(O), o = new R(
              z,
              s + "leave",
              g,
              u,
              S
            ), o.target = nl, o.relatedTarget = m, z = null, Ku(S) === d && (R = new R(
              v,
              s + "enter",
              O,
              u,
              S
            ), R.target = m, R.relatedTarget = nl, z = R), nl = z, g && O)
              t: {
                for (R = o1, v = g, s = O, m = 0, z = v; z; z = R(z))
                  m++;
                z = 0;
                for (var N = s; N; N = R(N))
                  z++;
                for (; 0 < m - z; )
                  v = R(v), m--;
                for (; 0 < z - m; )
                  s = R(s), z--;
                for (; m--; ) {
                  if (v === s || s !== null && v === s.alternate) {
                    R = v;
                    break t;
                  }
                  v = R(v), s = R(s);
                }
                R = null;
              }
            else R = null;
            g !== null && By(
              _,
              o,
              g,
              R,
              !1
            ), O !== null && nl !== null && By(
              _,
              nl,
              O,
              R,
              !0
            );
          }
        }
        l: {
          if (o = d ? Ca(d) : window, g = o.nodeName && o.nodeName.toLowerCase(), g === "select" || g === "input" && o.type === "file")
            var W = ki;
          else if ($i(o))
            if (Ii)
              W = Mm;
            else {
              W = Am;
              var U = Em;
            }
          else
            g = o.nodeName, !g || g.toLowerCase() !== "input" || o.type !== "checkbox" && o.type !== "radio" ? d && uf(d.elementType) && (W = ki) : W = rm;
          if (W && (W = W(l, d))) {
            Fi(
              _,
              W,
              u,
              S
            );
            break l;
          }
          U && U(l, o, d), l === "focusout" && d && o.type === "number" && d.memoizedProps.value != null && tf(o, "number", o.value);
        }
        switch (U = d ? Ca(d) : window, l) {
          case "focusin":
            ($i(U) || U.contentEditable === "true") && (la = U, Sf = d, xa = null);
            break;
          case "focusout":
            xa = Sf = la = null;
            break;
          case "mousedown":
            bf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            bf = !1, fs(_, u, S);
            break;
          case "selectionchange":
            if (Dm) break;
          case "keydown":
          case "keyup":
            fs(_, u, S);
        }
        var G;
        if (df)
          l: {
            switch (l) {
              case "compositionstart":
                var K = "onCompositionStart";
                break l;
              case "compositionend":
                K = "onCompositionEnd";
                break l;
              case "compositionupdate":
                K = "onCompositionUpdate";
                break l;
            }
            K = void 0;
          }
        else
          Pu ? wi(l, u) && (K = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (K = "onCompositionStart");
        K && (Li && u.locale !== "ko" && (Pu || K !== "onCompositionStart" ? K === "onCompositionEnd" && Pu && (G = Xi()) : (lu = S, cf = "value" in lu ? lu.value : lu.textContent, Pu = !0)), U = Dn(d, K), 0 < U.length && (K = new xi(
          K,
          l,
          null,
          u,
          S
        ), _.push({ event: K, listeners: U }), G ? K.data = G : (G = Wi(u), G !== null && (K.data = G)))), (G = Sm ? bm(l, u) : zm(l, u)) && (K = Dn(d, "onBeforeInput"), 0 < K.length && (U = new xi(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          S
        ), _.push({
          event: U,
          listeners: K
        }), U.data = G)), y1(
          _,
          l,
          d,
          u,
          S
        );
      }
      Ry(_, t);
    });
  }
  function de(l, t, u) {
    return {
      instance: l,
      listener: t,
      currentTarget: u
    };
  }
  function Dn(l, t) {
    for (var u = t + "Capture", a = []; l !== null; ) {
      var e = l, n = e.stateNode;
      if (e = e.tag, e !== 5 && e !== 26 && e !== 27 || n === null || (e = Ba(l, u), e != null && a.unshift(
        de(l, e, n)
      ), e = Ba(l, t), e != null && a.push(
        de(l, e, n)
      )), l.tag === 3) return a;
      l = l.return;
    }
    return [];
  }
  function o1(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function By(l, t, u, a, e) {
    for (var n = t._reactName, f = []; u !== null && u !== a; ) {
      var c = u, i = c.alternate, d = c.stateNode;
      if (c = c.tag, i !== null && i === a) break;
      c !== 5 && c !== 26 && c !== 27 || d === null || (i = d, e ? (d = Ba(u, n), d != null && f.unshift(
        de(u, d, i)
      )) : e || (d = Ba(u, n), d != null && f.push(
        de(u, d, i)
      ))), u = u.return;
    }
    f.length !== 0 && l.push({ event: t, listeners: f });
  }
  var h1 = /\r\n?/g, g1 = /\u0000|\uFFFD/g;
  function qy(l) {
    return (typeof l == "string" ? l : "" + l).replace(h1, `
`).replace(g1, "");
  }
  function jy(l, t) {
    return t = qy(t), qy(l) === t;
  }
  function el(l, t, u, a, e, n) {
    switch (u) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Fu(l, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Fu(l, "" + a);
        break;
      case "className":
        Ne(l, "class", a);
        break;
      case "tabIndex":
        Ne(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ne(l, u, a);
        break;
      case "style":
        ji(l, a, n);
        break;
      case "data":
        if (t !== "object") {
          Ne(l, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(u);
          break;
        }
        a = Re("" + a), l.setAttribute(u, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" && (u === "formAction" ? (t !== "input" && el(l, t, "name", e.name, e, null), el(
            l,
            t,
            "formEncType",
            e.formEncType,
            e,
            null
          ), el(
            l,
            t,
            "formMethod",
            e.formMethod,
            e,
            null
          ), el(
            l,
            t,
            "formTarget",
            e.formTarget,
            e,
            null
          )) : (el(l, t, "encType", e.encType, e, null), el(l, t, "method", e.method, e, null), el(l, t, "target", e.target, e, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(u);
          break;
        }
        a = Re("" + a), l.setAttribute(u, a);
        break;
      case "onClick":
        a != null && (l.onclick = qt);
        break;
      case "onScroll":
        a != null && x("scroll", l);
        break;
      case "onScrollEnd":
        a != null && x("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(h(61));
          if (u = a.__html, u != null) {
            if (e.children != null) throw Error(h(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        l.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = Re("" + a), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, "" + a) : l.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        a === !0 ? l.setAttribute(u, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, a) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? l.setAttribute(u, a) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? l.removeAttribute(u) : l.setAttribute(u, a);
        break;
      case "popover":
        x("beforetoggle", l), x("toggle", l), pe(l, "popover", a);
        break;
      case "xlinkActuate":
        Bt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Bt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Bt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Bt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Bt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Bt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Bt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Bt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Bt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        pe(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = Lv.get(u) || u, pe(l, u, a));
    }
  }
  function Vc(l, t, u, a, e, n) {
    switch (u) {
      case "style":
        ji(l, a, n);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(h(61));
          if (u = a.__html, u != null) {
            if (e.children != null) throw Error(h(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof a == "string" ? Fu(l, a) : (typeof a == "number" || typeof a == "bigint") && Fu(l, "" + a);
        break;
      case "onScroll":
        a != null && x("scroll", l);
        break;
      case "onScrollEnd":
        a != null && x("scrollend", l);
        break;
      case "onClick":
        a != null && (l.onclick = qt);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Di.hasOwnProperty(u))
          l: {
            if (u[0] === "o" && u[1] === "n" && (e = u.endsWith("Capture"), t = u.slice(2, e ? u.length - 7 : void 0), n = l[wl] || null, n = n != null ? n[u] : null, typeof n == "function" && l.removeEventListener(t, n, e), typeof a == "function")) {
              typeof n != "function" && n !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(t, a, e);
              break l;
            }
            u in l ? l[u] = a : a === !0 ? l.setAttribute(u, "") : pe(l, u, a);
          }
    }
  }
  function Zl(l, t, u) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        x("error", l), x("load", l);
        var a = !1, e = !1, n;
        for (n in u)
          if (u.hasOwnProperty(n)) {
            var f = u[n];
            if (f != null)
              switch (n) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  e = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(h(137, t));
                default:
                  el(l, t, n, f, u, null);
              }
          }
        e && el(l, t, "srcSet", u.srcSet, u, null), a && el(l, t, "src", u.src, u, null);
        return;
      case "input":
        x("invalid", l);
        var c = n = f = e = null, i = null, d = null;
        for (a in u)
          if (u.hasOwnProperty(a)) {
            var S = u[a];
            if (S != null)
              switch (a) {
                case "name":
                  e = S;
                  break;
                case "type":
                  f = S;
                  break;
                case "checked":
                  i = S;
                  break;
                case "defaultChecked":
                  d = S;
                  break;
                case "value":
                  n = S;
                  break;
                case "defaultValue":
                  c = S;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (S != null)
                    throw Error(h(137, t));
                  break;
                default:
                  el(l, t, a, S, u, null);
              }
          }
        Ri(
          l,
          n,
          c,
          i,
          d,
          f,
          e,
          !1
        );
        return;
      case "select":
        x("invalid", l), a = f = n = null;
        for (e in u)
          if (u.hasOwnProperty(e) && (c = u[e], c != null))
            switch (e) {
              case "value":
                n = c;
                break;
              case "defaultValue":
                f = c;
                break;
              case "multiple":
                a = c;
              default:
                el(l, t, e, c, u, null);
            }
        t = n, u = f, l.multiple = !!a, t != null ? $u(l, !!a, t, !1) : u != null && $u(l, !!a, u, !0);
        return;
      case "textarea":
        x("invalid", l), n = e = a = null;
        for (f in u)
          if (u.hasOwnProperty(f) && (c = u[f], c != null))
            switch (f) {
              case "value":
                a = c;
                break;
              case "defaultValue":
                e = c;
                break;
              case "children":
                n = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(h(91));
                break;
              default:
                el(l, t, f, c, u, null);
            }
        Bi(l, a, e, n);
        return;
      case "option":
        for (i in u)
          if (u.hasOwnProperty(i) && (a = u[i], a != null))
            switch (i) {
              case "selected":
                l.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                el(l, t, i, a, u, null);
            }
        return;
      case "dialog":
        x("beforetoggle", l), x("toggle", l), x("cancel", l), x("close", l);
        break;
      case "iframe":
      case "object":
        x("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < me.length; a++)
          x(me[a], l);
        break;
      case "image":
        x("error", l), x("load", l);
        break;
      case "details":
        x("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        x("error", l), x("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (d in u)
          if (u.hasOwnProperty(d) && (a = u[d], a != null))
            switch (d) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(h(137, t));
              default:
                el(l, t, d, a, u, null);
            }
        return;
      default:
        if (uf(t)) {
          for (S in u)
            u.hasOwnProperty(S) && (a = u[S], a !== void 0 && Vc(
              l,
              t,
              S,
              a,
              u,
              void 0
            ));
          return;
        }
    }
    for (c in u)
      u.hasOwnProperty(c) && (a = u[c], a != null && el(l, t, c, a, u, null));
  }
  function S1(l, t, u, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var e = null, n = null, f = null, c = null, i = null, d = null, S = null;
        for (g in u) {
          var _ = u[g];
          if (u.hasOwnProperty(g) && _ != null)
            switch (g) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                i = _;
              default:
                a.hasOwnProperty(g) || el(l, t, g, null, a, _);
            }
        }
        for (var o in a) {
          var g = a[o];
          if (_ = u[o], a.hasOwnProperty(o) && (g != null || _ != null))
            switch (o) {
              case "type":
                n = g;
                break;
              case "name":
                e = g;
                break;
              case "checked":
                d = g;
                break;
              case "defaultChecked":
                S = g;
                break;
              case "value":
                f = g;
                break;
              case "defaultValue":
                c = g;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null)
                  throw Error(h(137, t));
                break;
              default:
                g !== _ && el(
                  l,
                  t,
                  o,
                  g,
                  a,
                  _
                );
            }
        }
        lf(
          l,
          f,
          c,
          i,
          d,
          S,
          n,
          e
        );
        return;
      case "select":
        g = f = c = o = null;
        for (n in u)
          if (i = u[n], u.hasOwnProperty(n) && i != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                g = i;
              default:
                a.hasOwnProperty(n) || el(
                  l,
                  t,
                  n,
                  null,
                  a,
                  i
                );
            }
        for (e in a)
          if (n = a[e], i = u[e], a.hasOwnProperty(e) && (n != null || i != null))
            switch (e) {
              case "value":
                o = n;
                break;
              case "defaultValue":
                c = n;
                break;
              case "multiple":
                f = n;
              default:
                n !== i && el(
                  l,
                  t,
                  e,
                  n,
                  a,
                  i
                );
            }
        t = c, u = f, a = g, o != null ? $u(l, !!u, o, !1) : !!a != !!u && (t != null ? $u(l, !!u, t, !0) : $u(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        g = o = null;
        for (c in u)
          if (e = u[c], u.hasOwnProperty(c) && e != null && !a.hasOwnProperty(c))
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                el(l, t, c, null, a, e);
            }
        for (f in a)
          if (e = a[f], n = u[f], a.hasOwnProperty(f) && (e != null || n != null))
            switch (f) {
              case "value":
                o = e;
                break;
              case "defaultValue":
                g = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(h(91));
                break;
              default:
                e !== n && el(l, t, f, e, a, n);
            }
        Ci(l, o, g);
        return;
      case "option":
        for (var O in u)
          if (o = u[O], u.hasOwnProperty(O) && o != null && !a.hasOwnProperty(O))
            switch (O) {
              case "selected":
                l.selected = !1;
                break;
              default:
                el(
                  l,
                  t,
                  O,
                  null,
                  a,
                  o
                );
            }
        for (i in a)
          if (o = a[i], g = u[i], a.hasOwnProperty(i) && o !== g && (o != null || g != null))
            switch (i) {
              case "selected":
                l.selected = o && typeof o != "function" && typeof o != "symbol";
                break;
              default:
                el(
                  l,
                  t,
                  i,
                  o,
                  a,
                  g
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var R in u)
          o = u[R], u.hasOwnProperty(R) && o != null && !a.hasOwnProperty(R) && el(l, t, R, null, a, o);
        for (d in a)
          if (o = a[d], g = u[d], a.hasOwnProperty(d) && o !== g && (o != null || g != null))
            switch (d) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (o != null)
                  throw Error(h(137, t));
                break;
              default:
                el(
                  l,
                  t,
                  d,
                  o,
                  a,
                  g
                );
            }
        return;
      default:
        if (uf(t)) {
          for (var nl in u)
            o = u[nl], u.hasOwnProperty(nl) && o !== void 0 && !a.hasOwnProperty(nl) && Vc(
              l,
              t,
              nl,
              void 0,
              a,
              o
            );
          for (S in a)
            o = a[S], g = u[S], !a.hasOwnProperty(S) || o === g || o === void 0 && g === void 0 || Vc(
              l,
              t,
              S,
              o,
              a,
              g
            );
          return;
        }
    }
    for (var v in u)
      o = u[v], u.hasOwnProperty(v) && o != null && !a.hasOwnProperty(v) && el(l, t, v, null, a, o);
    for (_ in a)
      o = a[_], g = u[_], !a.hasOwnProperty(_) || o === g || o == null && g == null || el(l, t, _, o, a, g);
  }
  function Yy(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function b1() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, u = performance.getEntriesByType("resource"), a = 0; a < u.length; a++) {
        var e = u[a], n = e.transferSize, f = e.initiatorType, c = e.duration;
        if (n && c && Yy(f)) {
          for (f = 0, c = e.responseEnd, a += 1; a < u.length; a++) {
            var i = u[a], d = i.startTime;
            if (d > c) break;
            var S = i.transferSize, _ = i.initiatorType;
            S && Yy(_) && (i = i.responseEnd, f += S * (i < c ? 1 : (c - d) / (i - d)));
          }
          if (--a, t += 8 * (n + f) / (e.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var Lc = null, Kc = null;
  function Un(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Gy(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Xy(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Jc(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var wc = null;
  function z1() {
    var l = window.event;
    return l && l.type === "popstate" ? l === wc ? !1 : (wc = l, !0) : (wc = null, !1);
  }
  var Qy = typeof setTimeout == "function" ? setTimeout : void 0, _1 = typeof clearTimeout == "function" ? clearTimeout : void 0, Zy = typeof Promise == "function" ? Promise : void 0, T1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Zy < "u" ? function(l) {
    return Zy.resolve(null).then(l).catch(E1);
  } : Qy;
  function E1(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function Su(l) {
    return l === "head";
  }
  function xy(l, t) {
    var u = t, a = 0;
    do {
      var e = u.nextSibling;
      if (l.removeChild(u), e && e.nodeType === 8)
        if (u = e.data, u === "/$" || u === "/&") {
          if (a === 0) {
            l.removeChild(e), Da(t);
            return;
          }
          a--;
        } else if (u === "$" || u === "$?" || u === "$~" || u === "$!" || u === "&")
          a++;
        else if (u === "html")
          oe(l.ownerDocument.documentElement);
        else if (u === "head") {
          u = l.ownerDocument.head, oe(u);
          for (var n = u.firstChild; n; ) {
            var f = n.nextSibling, c = n.nodeName;
            n[Ra] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && n.rel.toLowerCase() === "stylesheet" || u.removeChild(n), n = f;
          }
        } else
          u === "body" && oe(l.ownerDocument.body);
      u = e;
    } while (u);
    Da(t);
  }
  function Vy(l, t) {
    var u = l;
    l = 0;
    do {
      var a = u.nextSibling;
      if (u.nodeType === 1 ? t ? (u._stashedDisplay = u.style.display, u.style.display = "none") : (u.style.display = u._stashedDisplay || "", u.getAttribute("style") === "" && u.removeAttribute("style")) : u.nodeType === 3 && (t ? (u._stashedText = u.nodeValue, u.nodeValue = "") : u.nodeValue = u._stashedText || ""), a && a.nodeType === 8)
        if (u = a.data, u === "/$") {
          if (l === 0) break;
          l--;
        } else
          u !== "$" && u !== "$?" && u !== "$~" && u !== "$!" || l++;
      u = a;
    } while (u);
  }
  function Wc(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var u = t;
      switch (t = t.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Wc(u), In(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function A1(l, t, u, a) {
    for (; l.nodeType === 1; ) {
      var e = u;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (a) {
        if (!l[Ra])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (n !== e.rel || l.getAttribute("href") !== (e.href == null || e.href === "" ? null : e.href) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin) || l.getAttribute("title") !== (e.title == null ? null : e.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (n = l.getAttribute("src"), (n !== (e.src == null ? null : e.src) || l.getAttribute("type") !== (e.type == null ? null : e.type) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = e.name == null ? null : "" + e.name;
        if (e.type === "hidden" && l.getAttribute("name") === n)
          return l;
      } else return l;
      if (l = _t(l.nextSibling), l === null) break;
    }
    return null;
  }
  function r1(l, t, u) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = _t(l.nextSibling), l === null)) return null;
    return l;
  }
  function Ly(l, t) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = _t(l.nextSibling), l === null)) return null;
    return l;
  }
  function $c(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function Fc(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function M1(l, t) {
    var u = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || u.readyState !== "loading")
      t();
    else {
      var a = function() {
        t(), u.removeEventListener("DOMContentLoaded", a);
      };
      u.addEventListener("DOMContentLoaded", a), l._reactRetry = a;
    }
  }
  function _t(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var kc = null;
  function Ky(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "/$" || u === "/&") {
          if (t === 0)
            return _t(l.nextSibling);
          t--;
        } else
          u !== "$" && u !== "$!" && u !== "$?" && u !== "$~" && u !== "&" || t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function Jy(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?" || u === "$~" || u === "&") {
          if (t === 0) return l;
          t--;
        } else u !== "/$" && u !== "/&" || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function wy(l, t, u) {
    switch (t = Un(u), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(h(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(h(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(h(454));
        return l;
      default:
        throw Error(h(451));
    }
  }
  function oe(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    In(l);
  }
  var Tt = /* @__PURE__ */ new Map(), Wy = /* @__PURE__ */ new Set();
  function pn(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var kt = A.d;
  A.d = {
    f: O1,
    r: D1,
    D: U1,
    C: p1,
    L: N1,
    m: H1,
    X: C1,
    S: R1,
    M: B1
  };
  function O1() {
    var l = kt.f(), t = _n();
    return l || t;
  }
  function D1(l) {
    var t = Ju(l);
    t !== null && t.tag === 5 && t.type === "form" ? v0(t) : kt.r(l);
  }
  var ra = typeof document > "u" ? null : document;
  function $y(l, t, u) {
    var a = ra;
    if (a && typeof t == "string" && t) {
      var e = dt(t);
      e = 'link[rel="' + l + '"][href="' + e + '"]', typeof u == "string" && (e += '[crossorigin="' + u + '"]'), Wy.has(e) || (Wy.add(e), l = { rel: l, crossOrigin: u, href: t }, a.querySelector(e) === null && (t = a.createElement("link"), Zl(t, "link", l), Cl(t), a.head.appendChild(t)));
    }
  }
  function U1(l) {
    kt.D(l), $y("dns-prefetch", l, null);
  }
  function p1(l, t) {
    kt.C(l, t), $y("preconnect", l, t);
  }
  function N1(l, t, u) {
    kt.L(l, t, u);
    var a = ra;
    if (a && l && t) {
      var e = 'link[rel="preload"][as="' + dt(t) + '"]';
      t === "image" && u && u.imageSrcSet ? (e += '[imagesrcset="' + dt(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (e += '[imagesizes="' + dt(
        u.imageSizes
      ) + '"]')) : e += '[href="' + dt(l) + '"]';
      var n = e;
      switch (t) {
        case "style":
          n = Ma(l);
          break;
        case "script":
          n = Oa(l);
      }
      Tt.has(n) || (l = H(
        {
          rel: "preload",
          href: t === "image" && u && u.imageSrcSet ? void 0 : l,
          as: t
        },
        u
      ), Tt.set(n, l), a.querySelector(e) !== null || t === "style" && a.querySelector(he(n)) || t === "script" && a.querySelector(ge(n)) || (t = a.createElement("link"), Zl(t, "link", l), Cl(t), a.head.appendChild(t)));
    }
  }
  function H1(l, t) {
    kt.m(l, t);
    var u = ra;
    if (u && l) {
      var a = t && typeof t.as == "string" ? t.as : "script", e = 'link[rel="modulepreload"][as="' + dt(a) + '"][href="' + dt(l) + '"]', n = e;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Oa(l);
      }
      if (!Tt.has(n) && (l = H({ rel: "modulepreload", href: l }, t), Tt.set(n, l), u.querySelector(e) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(ge(n)))
              return;
        }
        a = u.createElement("link"), Zl(a, "link", l), Cl(a), u.head.appendChild(a);
      }
    }
  }
  function R1(l, t, u) {
    kt.S(l, t, u);
    var a = ra;
    if (a && l) {
      var e = wu(a).hoistableStyles, n = Ma(l);
      t = t || "default";
      var f = e.get(n);
      if (!f) {
        var c = { loading: 0, preload: null };
        if (f = a.querySelector(
          he(n)
        ))
          c.loading = 5;
        else {
          l = H(
            { rel: "stylesheet", href: l, "data-precedence": t },
            u
          ), (u = Tt.get(n)) && Ic(l, u);
          var i = f = a.createElement("link");
          Cl(i), Zl(i, "link", l), i._p = new Promise(function(d, S) {
            i.onload = d, i.onerror = S;
          }), i.addEventListener("load", function() {
            c.loading |= 1;
          }), i.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, Nn(f, t, a);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: c
        }, e.set(n, f);
      }
    }
  }
  function C1(l, t) {
    kt.X(l, t);
    var u = ra;
    if (u && l) {
      var a = wu(u).hoistableScripts, e = Oa(l), n = a.get(e);
      n || (n = u.querySelector(ge(e)), n || (l = H({ src: l, async: !0 }, t), (t = Tt.get(e)) && Pc(l, t), n = u.createElement("script"), Cl(n), Zl(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(e, n));
    }
  }
  function B1(l, t) {
    kt.M(l, t);
    var u = ra;
    if (u && l) {
      var a = wu(u).hoistableScripts, e = Oa(l), n = a.get(e);
      n || (n = u.querySelector(ge(e)), n || (l = H({ src: l, async: !0, type: "module" }, t), (t = Tt.get(e)) && Pc(l, t), n = u.createElement("script"), Cl(n), Zl(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(e, n));
    }
  }
  function Fy(l, t, u, a) {
    var e = (e = Q.current) ? pn(e) : null;
    if (!e) throw Error(h(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (t = Ma(u.href), u = wu(
          e
        ).hoistableStyles, a = u.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = Ma(u.href);
          var n = wu(
            e
          ).hoistableStyles, f = n.get(l);
          if (f || (e = e.ownerDocument || e, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(l, f), (n = e.querySelector(
            he(l)
          )) && !n._p && (f.instance = n, f.state.loading = 5), Tt.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, Tt.set(l, u), n || q1(
            e,
            l,
            u,
            f.state
          ))), t && a === null)
            throw Error(h(528, ""));
          return f;
        }
        if (t && a !== null)
          throw Error(h(529, ""));
        return null;
      case "script":
        return t = u.async, u = u.src, typeof u == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Oa(u), u = wu(
          e
        ).hoistableScripts, a = u.get(t), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(h(444, l));
    }
  }
  function Ma(l) {
    return 'href="' + dt(l) + '"';
  }
  function he(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function ky(l) {
    return H({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function q1(l, t, u, a) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = l.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), Zl(t, "link", u), Cl(t), l.head.appendChild(t));
  }
  function Oa(l) {
    return '[src="' + dt(l) + '"]';
  }
  function ge(l) {
    return "script[async]" + l;
  }
  function Iy(l, t, u) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = l.querySelector(
            'style[data-href~="' + dt(u.href) + '"]'
          );
          if (a)
            return t.instance = a, Cl(a), a;
          var e = H({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return a = (l.ownerDocument || l).createElement(
            "style"
          ), Cl(a), Zl(a, "style", e), Nn(a, u.precedence, l), t.instance = a;
        case "stylesheet":
          e = Ma(u.href);
          var n = l.querySelector(
            he(e)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, Cl(n), n;
          a = ky(u), (e = Tt.get(e)) && Ic(a, e), n = (l.ownerDocument || l).createElement("link"), Cl(n);
          var f = n;
          return f._p = new Promise(function(c, i) {
            f.onload = c, f.onerror = i;
          }), Zl(n, "link", a), t.state.loading |= 4, Nn(n, u.precedence, l), t.instance = n;
        case "script":
          return n = Oa(u.src), (e = l.querySelector(
            ge(n)
          )) ? (t.instance = e, Cl(e), e) : (a = u, (e = Tt.get(n)) && (a = H({}, u), Pc(a, e)), l = l.ownerDocument || l, e = l.createElement("script"), Cl(e), Zl(e, "link", a), l.head.appendChild(e), t.instance = e);
        case "void":
          return null;
        default:
          throw Error(h(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Nn(a, u.precedence, l));
    return t.instance;
  }
  function Nn(l, t, u) {
    for (var a = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), e = a.length ? a[a.length - 1] : null, n = e, f = 0; f < a.length; f++) {
      var c = a[f];
      if (c.dataset.precedence === t) n = c;
      else if (n !== e) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = u.nodeType === 9 ? u.head : u, t.insertBefore(l, t.firstChild));
  }
  function Ic(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function Pc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var Hn = null;
  function Py(l, t, u) {
    if (Hn === null) {
      var a = /* @__PURE__ */ new Map(), e = Hn = /* @__PURE__ */ new Map();
      e.set(u, a);
    } else
      e = Hn, a = e.get(u), a || (a = /* @__PURE__ */ new Map(), e.set(u, a));
    if (a.has(l)) return a;
    for (a.set(l, null), u = u.getElementsByTagName(l), e = 0; e < u.length; e++) {
      var n = u[e];
      if (!(n[Ra] || n[Yl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = n.getAttribute(t) || "";
        f = l + f;
        var c = a.get(f);
        c ? c.push(n) : a.set(f, [n]);
      }
    }
    return a;
  }
  function lv(l, t, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      t === "title" ? l.querySelector("head > title") : null
    );
  }
  function j1(l, t, u) {
    if (u === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        switch (t.rel) {
          case "stylesheet":
            return l = t.disabled, typeof t.precedence == "string" && l == null;
          default:
            return !0;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function tv(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Y1(l, t, u, a) {
    if (u.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (u.state.loading & 4) === 0) {
      if (u.instance === null) {
        var e = Ma(a.href), n = t.querySelector(
          he(e)
        );
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Rn.bind(l), t.then(l, l)), u.state.loading |= 4, u.instance = n, Cl(n);
          return;
        }
        n = t.ownerDocument || t, a = ky(a), (e = Tt.get(e)) && Ic(a, e), n = n.createElement("link"), Cl(n);
        var f = n;
        f._p = new Promise(function(c, i) {
          f.onload = c, f.onerror = i;
        }), Zl(n, "link", a), u.instance = n;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(u, t), (t = u.state.preload) && (u.state.loading & 3) === 0 && (l.count++, u = Rn.bind(l), t.addEventListener("load", u), t.addEventListener("error", u));
    }
  }
  var li = 0;
  function G1(l, t) {
    return l.stylesheets && l.count === 0 && Bn(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(u) {
      var a = setTimeout(function() {
        if (l.stylesheets && Bn(l, l.stylesheets), l.unsuspend) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, 6e4 + t);
      0 < l.imgBytes && li === 0 && (li = 62500 * b1());
      var e = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Bn(l, l.stylesheets), l.unsuspend)) {
            var n = l.unsuspend;
            l.unsuspend = null, n();
          }
        },
        (l.imgBytes > li ? 50 : 800) + t
      );
      return l.unsuspend = u, function() {
        l.unsuspend = null, clearTimeout(a), clearTimeout(e);
      };
    } : null;
  }
  function Rn() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Bn(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Cn = null;
  function Bn(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Cn = /* @__PURE__ */ new Map(), t.forEach(X1, l), Cn = null, Rn.call(l));
  }
  function X1(l, t) {
    if (!(t.state.loading & 4)) {
      var u = Cn.get(l);
      if (u) var a = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Cn.set(l, u);
        for (var e = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < e.length; n++) {
          var f = e[n];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (u.set(f.dataset.precedence, f), a = f);
        }
        a && u.set(null, a);
      }
      e = t.instance, f = e.getAttribute("data-precedence"), n = u.get(f) || a, n === a && u.set(null, e), u.set(f, e), this.count++, a = Rn.bind(this), e.addEventListener("load", a), e.addEventListener("error", a), n ? n.parentNode.insertBefore(e, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(e, l.firstChild)), t.state.loading |= 4;
    }
  }
  var Se = {
    $$typeof: Rl,
    Provider: null,
    Consumer: null,
    _currentValue: C,
    _currentValue2: C,
    _threadCount: 0
  };
  function Q1(l, t, u, a, e, n, f, c, i) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Wn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Wn(0), this.hiddenUpdates = Wn(null), this.identifierPrefix = a, this.onUncaughtError = e, this.onCaughtError = n, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = i, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function uv(l, t, u, a, e, n, f, c, i, d, S, _) {
    return l = new Q1(
      l,
      t,
      u,
      f,
      i,
      d,
      S,
      _,
      c
    ), t = 1, n === !0 && (t |= 24), n = et(3, null, null, t), l.current = n, n.stateNode = l, t = Cf(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: a,
      isDehydrated: u,
      cache: t
    }, Yf(n), l;
  }
  function av(l) {
    return l ? (l = aa, l) : aa;
  }
  function ev(l, t, u, a, e, n) {
    e = av(e), a.context === null ? a.context = e : a.pendingContext = e, a = fu(t), a.payload = { element: u }, n = n === void 0 ? null : n, n !== null && (a.callback = n), u = cu(l, a, t), u !== null && (Pl(u, l, t), $a(u, l, t));
  }
  function nv(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < t ? u : t;
    }
  }
  function ti(l, t) {
    nv(l, t), (l = l.alternate) && nv(l, t);
  }
  function fv(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Nu(l, 67108864);
      t !== null && Pl(t, l, 67108864), ti(l, 67108864);
    }
  }
  function cv(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = st();
      t = $n(t);
      var u = Nu(l, t);
      u !== null && Pl(u, l, t), ti(l, t);
    }
  }
  var qn = !0;
  function Z1(l, t, u, a) {
    var e = b.T;
    b.T = null;
    var n = A.p;
    try {
      A.p = 2, ui(l, t, u, a);
    } finally {
      A.p = n, b.T = e;
    }
  }
  function x1(l, t, u, a) {
    var e = b.T;
    b.T = null;
    var n = A.p;
    try {
      A.p = 8, ui(l, t, u, a);
    } finally {
      A.p = n, b.T = e;
    }
  }
  function ui(l, t, u, a) {
    if (qn) {
      var e = ai(a);
      if (e === null)
        xc(
          l,
          t,
          a,
          jn,
          u
        ), sv(l, a);
      else if (L1(
        e,
        l,
        t,
        u,
        a
      ))
        a.stopPropagation();
      else if (sv(l, a), t & 4 && -1 < V1.indexOf(l)) {
        for (; e !== null; ) {
          var n = Ju(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var f = Mu(n.pendingLanes);
                  if (f !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; f; ) {
                      var i = 1 << 31 - ut(f);
                      c.entanglements[1] |= i, f &= ~i;
                    }
                    Rt(n), (F & 6) === 0 && (bn = lt() + 500, ve(0));
                  }
                }
                break;
              case 31:
              case 13:
                c = Nu(n, 2), c !== null && Pl(c, n, 2), _n(), ti(n, 2);
            }
          if (n = ai(a), n === null && xc(
            l,
            t,
            a,
            jn,
            u
          ), n === e) break;
          e = n;
        }
        e !== null && a.stopPropagation();
      } else
        xc(
          l,
          t,
          a,
          null,
          u
        );
    }
  }
  function ai(l) {
    return l = ef(l), ei(l);
  }
  var jn = null;
  function ei(l) {
    if (jn = null, l = Ku(l), l !== null) {
      var t = bl(l);
      if (t === null) l = null;
      else {
        var u = t.tag;
        if (u === 13) {
          if (l = dl(t), l !== null) return l;
          l = null;
        } else if (u === 31) {
          if (l = pl(t), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return jn = l, null;
  }
  function iv(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Uv()) {
          case gi:
            return 2;
          case Si:
            return 8;
          case re:
          case pv:
            return 32;
          case bi:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ni = !1, bu = null, zu = null, _u = null, be = /* @__PURE__ */ new Map(), ze = /* @__PURE__ */ new Map(), Tu = [], V1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function sv(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        bu = null;
        break;
      case "dragenter":
      case "dragleave":
        zu = null;
        break;
      case "mouseover":
      case "mouseout":
        _u = null;
        break;
      case "pointerover":
      case "pointerout":
        be.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ze.delete(t.pointerId);
    }
  }
  function _e(l, t, u, a, e, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: t,
      domEventName: u,
      eventSystemFlags: a,
      nativeEvent: n,
      targetContainers: [e]
    }, t !== null && (t = Ju(t), t !== null && fv(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, e !== null && t.indexOf(e) === -1 && t.push(e), l);
  }
  function L1(l, t, u, a, e) {
    switch (t) {
      case "focusin":
        return bu = _e(
          bu,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "dragenter":
        return zu = _e(
          zu,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "mouseover":
        return _u = _e(
          _u,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "pointerover":
        var n = e.pointerId;
        return be.set(
          n,
          _e(
            be.get(n) || null,
            l,
            t,
            u,
            a,
            e
          )
        ), !0;
      case "gotpointercapture":
        return n = e.pointerId, ze.set(
          n,
          _e(
            ze.get(n) || null,
            l,
            t,
            u,
            a,
            e
          )
        ), !0;
    }
    return !1;
  }
  function yv(l) {
    var t = Ku(l.target);
    if (t !== null) {
      var u = bl(t);
      if (u !== null) {
        if (t = u.tag, t === 13) {
          if (t = dl(u), t !== null) {
            l.blockedOn = t, ri(l.priority, function() {
              cv(u);
            });
            return;
          }
        } else if (t === 31) {
          if (t = pl(u), t !== null) {
            l.blockedOn = t, ri(l.priority, function() {
              cv(u);
            });
            return;
          }
        } else if (t === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Yn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var u = ai(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var a = new u.constructor(
          u.type,
          u
        );
        af = a, u.target.dispatchEvent(a), af = null;
      } else
        return t = Ju(u), t !== null && fv(t), l.blockedOn = u, !1;
      t.shift();
    }
    return !0;
  }
  function vv(l, t, u) {
    Yn(l) && u.delete(t);
  }
  function K1() {
    ni = !1, bu !== null && Yn(bu) && (bu = null), zu !== null && Yn(zu) && (zu = null), _u !== null && Yn(_u) && (_u = null), be.forEach(vv), ze.forEach(vv);
  }
  function Gn(l, t) {
    l.blockedOn === t && (l.blockedOn = null, ni || (ni = !0, M.unstable_scheduleCallback(
      M.unstable_NormalPriority,
      K1
    )));
  }
  var Xn = null;
  function mv(l) {
    Xn !== l && (Xn = l, M.unstable_scheduleCallback(
      M.unstable_NormalPriority,
      function() {
        Xn === l && (Xn = null);
        for (var t = 0; t < l.length; t += 3) {
          var u = l[t], a = l[t + 1], e = l[t + 2];
          if (typeof a != "function") {
            if (ei(a || u) === null)
              continue;
            break;
          }
          var n = Ju(u);
          n !== null && (l.splice(t, 3), t -= 3, ac(
            n,
            {
              pending: !0,
              data: e,
              method: u.method,
              action: a
            },
            a,
            e
          ));
        }
      }
    ));
  }
  function Da(l) {
    function t(i) {
      return Gn(i, l);
    }
    bu !== null && Gn(bu, l), zu !== null && Gn(zu, l), _u !== null && Gn(_u, l), be.forEach(t), ze.forEach(t);
    for (var u = 0; u < Tu.length; u++) {
      var a = Tu[u];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < Tu.length && (u = Tu[0], u.blockedOn === null); )
      yv(u), u.blockedOn === null && Tu.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (a = 0; a < u.length; a += 3) {
        var e = u[a], n = u[a + 1], f = e[wl] || null;
        if (typeof n == "function")
          f || mv(u);
        else if (f) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (e = n, f = n[wl] || null)
              c = f.formAction;
            else if (ei(e) !== null) continue;
          } else c = f.action;
          typeof c == "function" ? u[a + 1] = c : (u.splice(a, 3), a -= 3), mv(u);
        }
      }
  }
  function dv() {
    function l(n) {
      n.canIntercept && n.info === "react-transition" && n.intercept({
        handler: function() {
          return new Promise(function(f) {
            return e = f;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      e !== null && (e(), e = null), a || setTimeout(u, 20);
    }
    function u() {
      if (!a && !navigation.transition) {
        var n = navigation.currentEntry;
        n && n.url != null && navigation.navigate(n.url, {
          state: n.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, e = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(u, 100), function() {
        a = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), e !== null && (e(), e = null);
      };
    }
  }
  function fi(l) {
    this._internalRoot = l;
  }
  Qn.prototype.render = fi.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(h(409));
    var u = t.current, a = st();
    ev(u, a, l, t, null, null);
  }, Qn.prototype.unmount = fi.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      ev(l.current, 2, null, l, null, null), _n(), t[Lu] = null;
    }
  };
  function Qn(l) {
    this._internalRoot = l;
  }
  Qn.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = Ai();
      l = { blockedOn: null, target: l, priority: t };
      for (var u = 0; u < Tu.length && t !== 0 && t < Tu[u].priority; u++) ;
      Tu.splice(u, 0, l), u === 0 && yv(l);
    }
  };
  var ov = Sl.version;
  if (ov !== "19.2.0")
    throw Error(
      h(
        527,
        ov,
        "19.2.0"
      )
    );
  A.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(h(188)) : (l = Object.keys(l).join(","), Error(h(268, l)));
    return l = E(t), l = l !== null ? V(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var J1 = {
    bundleType: 0,
    version: "19.2.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: b,
    reconcilerVersion: "19.2.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Zn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Zn.isDisabled && Zn.supportsFiber)
      try {
        pa = Zn.inject(
          J1
        ), tt = Zn;
      } catch {
      }
  }
  return Te.createRoot = function(l, t) {
    if (!fl(l)) throw Error(h(299));
    var u = !1, a = "", e = T0, n = E0, f = A0;
    return t != null && (t.unstable_strictMode === !0 && (u = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (e = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = uv(
      l,
      1,
      !1,
      null,
      null,
      u,
      a,
      null,
      e,
      n,
      f,
      dv
    ), l[Lu] = t.current, Zc(l), new fi(t);
  }, Te.hydrateRoot = function(l, t, u) {
    if (!fl(l)) throw Error(h(299));
    var a = !1, e = "", n = T0, f = E0, c = A0, i = null;
    return u != null && (u.unstable_strictMode === !0 && (a = !0), u.identifierPrefix !== void 0 && (e = u.identifierPrefix), u.onUncaughtError !== void 0 && (n = u.onUncaughtError), u.onCaughtError !== void 0 && (f = u.onCaughtError), u.onRecoverableError !== void 0 && (c = u.onRecoverableError), u.formState !== void 0 && (i = u.formState)), t = uv(
      l,
      1,
      !0,
      t,
      u ?? null,
      a,
      e,
      i,
      n,
      f,
      c,
      dv
    ), t.context = av(null), u = t.current, a = st(), a = $n(a), e = fu(a), e.callback = null, cu(u, e, a), u = a, t.current.lanes = u, Ha(t, u), Rt(t), l[Lu] = t.current, Zc(l), new Qn(t);
  }, Te.version = "19.2.0", Te;
}
var Ev;
function ud() {
  if (Ev) return ii.exports;
  Ev = 1;
  function M() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M);
      } catch (Sl) {
        console.error(Sl);
      }
  }
  return M(), ii.exports = td(), ii.exports;
}
var ad = ud(), mi = { exports: {} }, Ee = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Av;
function ed() {
  if (Av) return Ee;
  Av = 1;
  var M = Symbol.for("react.transitional.element"), Sl = Symbol.for("react.fragment");
  function k(h, fl, bl) {
    var dl = null;
    if (bl !== void 0 && (dl = "" + bl), fl.key !== void 0 && (dl = "" + fl.key), "key" in fl) {
      bl = {};
      for (var pl in fl)
        pl !== "key" && (bl[pl] = fl[pl]);
    } else bl = fl;
    return fl = bl.ref, {
      $$typeof: M,
      type: h,
      key: dl,
      ref: fl !== void 0 ? fl : null,
      props: bl
    };
  }
  return Ee.Fragment = Sl, Ee.jsx = k, Ee.jsxs = k, Ee;
}
var rv;
function nd() {
  return rv || (rv = 1, mi.exports = ed()), mi.exports;
}
var w = nd();
const fd = "_chatContainer_1g2jm_1", cd = "_chatHeader_1g2jm_13", id = "_connectionStatus_1g2jm_29", sd = "_connected_1g2jm_35", yd = "_disconnected_1g2jm_40", vd = "_connecting_1g2jm_45", md = "_messagesContainer_1g2jm_56", dd = "_emptyState_1g2jm_65", od = "_message_1g2jm_56", hd = "_userMessage_1g2jm_85", gd = "_botMessage_1g2jm_89", Sd = "_messageContent_1g2jm_93", bd = "_timestamp_1g2jm_117", zd = "_inputContainer_1g2jm_123", _d = "_messageInput_1g2jm_132", Td = "_sendButton_1g2jm_147", Ed = "_connectButton_1g2jm_147", Ad = "_policyDialog_1g2jm_176", rd = "_policyContent_1g2jm_189", Md = "_policyButtons_1g2jm_209", Od = "_acceptButton_1g2jm_214", Dd = "_declineButton_1g2jm_214", Ud = "_messageType_1g2jm_244", pd = "_statusInfo_1g2jm_251", ml = {
  chatContainer: fd,
  chatHeader: cd,
  connectionStatus: id,
  connected: sd,
  disconnected: yd,
  connecting: vd,
  messagesContainer: md,
  emptyState: dd,
  message: od,
  userMessage: hd,
  botMessage: gd,
  messageContent: Sd,
  timestamp: bd,
  inputContainer: zd,
  messageInput: _d,
  sendButton: Td,
  connectButton: Ed,
  policyDialog: Ad,
  policyContent: rd,
  policyButtons: Md,
  acceptButton: Od,
  declineButton: Dd,
  messageType: Ud,
  statusInfo: pd
};
function Nd({
  websocketUrl: M = "ws://localhost:7999/ws",
  userData: Sl = {
    email: "user@example.com",
    role: "ARM",
    position: "developer",
    department: "Python",
    uuid: "123e4567-e89b-12d3-a456-426614174000"
  }
}) {
  const [k, h] = Ut.useState([]), [fl, bl] = Ut.useState(""), [dl, pl] = Ut.useState(!1), [p, E] = Ut.useState(!1), [V, H] = Ut.useState(!1), [sl, ql] = Ut.useState(!1), ol = Ut.useRef(null), Hl = Ut.useRef(null), Et = () => {
    Hl.current?.scrollIntoView({ behavior: "smooth" });
  };
  Ut.useEffect(() => {
    Et();
  }, [k]);
  const tl = (q, gl, zl) => {
    const vt = {
      id: Date.now().toString(),
      text: q,
      sender: gl,
      timestamp: /* @__PURE__ */ new Date(),
      type: zl
    };
    h((xl) => [...xl, vt]);
  }, At = (q) => {
    ol.current?.readyState === WebSocket.OPEN && (ol.current.send(JSON.stringify(q)), console.log("📤 Отправлено:", q));
  }, Rl = () => {
    At({
      type: "policy",
      payload: { accepted: !0 }
    }), ql(!1), tl("Политика конфиденциальности принята", "user", "policy");
  }, Ll = () => {
    if (ol.current?.readyState !== WebSocket.OPEN) {
      E(!0);
      try {
        const q = new WebSocket(M);
        q.onopen = (gl) => {
          console.log("✅ WebSocket подключен"), pl(!0), E(!1), tl("Подключение установлено", "bot"), setTimeout(() => {
            const zl = {
              type: "initial",
              payload: Sl
            };
            console.log("📤 Отправлена инициализация:", zl), q.send(JSON.stringify(zl)), tl("Инициализация пользователя...", "user", "initial"), H(!0);
          }, 1e3);
        }, q.onmessage = (gl) => {
          console.log("📥 Получено:", gl.data);
          try {
            const zl = JSON.parse(gl.data);
            zl === "success" ? tl("✅ Успешная инициализация! Сервер готов к работе.", "bot") : zl.type === "policy_required" ? (ql(!0), tl("Необходимо принять политику конфиденциальности", "bot")) : zl.message || zl.text ? tl(zl.message || zl.text, "bot") : tl(typeof zl == "string" ? zl : JSON.stringify(zl), "bot");
          } catch {
            tl(gl.data, "bot");
          }
        }, q.onclose = (gl) => {
          console.log("❌ WebSocket отключен", gl), pl(!1), E(!1), H(!1), tl("🔌 Соединение закрыто сервером (демо режим)", "bot");
        }, q.onerror = (gl) => {
          console.error("❌ Ошибка WebSocket:", gl), console.error("URL:", M), pl(!1), E(!1), tl(`Ошибка подключения к ${M}`, "bot");
        }, ol.current = q;
      } catch (q) {
        console.error("❌ Ошибка подключения:", q), E(!1), tl("Не удалось подключиться", "bot");
      }
    }
  }, yt = () => {
    ol.current && (ol.current.close(), ol.current = null);
  }, jl = () => {
    if (!fl.trim() || !ol.current || ol.current.readyState !== WebSocket.OPEN)
      return;
    if (!V) {
      tl("Сначала необходимо инициализировать пользователя", "bot");
      return;
    }
    tl(fl, "user"), At({
      type: "request",
      payload: { text: fl }
    }), bl("");
  }, X = (q) => {
    q.key === "Enter" && !q.shiftKey && (q.preventDefault(), jl());
  };
  return Ut.useEffect(() => (Ll(), () => {
    yt();
  }), []), /* @__PURE__ */ w.jsxs("div", { className: ml.chatContainer, children: [
    /* @__PURE__ */ w.jsxs("div", { className: ml.chatHeader, children: [
      /* @__PURE__ */ w.jsx("h3", { children: "HR Bot Assistant" }),
      /* @__PURE__ */ w.jsxs("div", { className: ml.connectionStatus, children: [
        p && /* @__PURE__ */ w.jsx("span", { className: ml.connecting, children: "Подключение..." }),
        dl && /* @__PURE__ */ w.jsx("span", { className: ml.connected, children: "●" }),
        !dl && !p && /* @__PURE__ */ w.jsx("span", { className: ml.disconnected, children: "●" })
      ] })
    ] }),
    /* @__PURE__ */ w.jsxs("div", { className: ml.messagesContainer, children: [
      k.length === 0 && /* @__PURE__ */ w.jsxs("div", { className: ml.emptyState, children: [
        /* @__PURE__ */ w.jsx("p", { children: "HR Bot готов к общению" }),
        !dl && /* @__PURE__ */ w.jsx("button", { className: ml.connectButton, children: "Подключиться к боту" })
      ] }),
      k.map((q, gl) => /* @__PURE__ */ w.jsx(
        "div",
        {
          className: `${ml.message} ${q.sender === "user" ? ml.userMessage : ml.botMessage}`,
          children: /* @__PURE__ */ w.jsxs("div", { className: ml.messageContent, children: [
            /* @__PURE__ */ w.jsx("p", { children: q.text }),
            /* @__PURE__ */ w.jsxs("span", { className: ml.timestamp, children: [
              q.timestamp.toLocaleTimeString(),
              q.type && /* @__PURE__ */ w.jsxs("span", { className: ml.messageType, children: [
                " (",
                q.type,
                ")"
              ] })
            ] })
          ] })
        },
        q.id + gl
      )),
      /* @__PURE__ */ w.jsx("div", { ref: Hl })
    ] }),
    sl && /* @__PURE__ */ w.jsx("div", { className: ml.policyDialog, children: /* @__PURE__ */ w.jsxs("div", { className: ml.policyContent, children: [
      /* @__PURE__ */ w.jsx("h4", { children: "Политика конфиденциальности" }),
      /* @__PURE__ */ w.jsx("p", { children: "Для продолжения работы необходимо принять политику обработки персональных данных." }),
      /* @__PURE__ */ w.jsxs("div", { className: ml.policyButtons, children: [
        /* @__PURE__ */ w.jsx("button", { onClick: Rl, className: ml.acceptButton, children: "Принять" }),
        /* @__PURE__ */ w.jsx(
          "button",
          {
            onClick: () => ql(!1),
            className: ml.declineButton,
            children: "Отклонить"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ w.jsxs("div", { className: ml.inputContainer, children: [
      !dl && /* @__PURE__ */ w.jsx(
        "button",
        {
          onClick: Ll,
          disabled: p,
          className: ml.connectButton,
          children: p ? "Подключение..." : "Подключиться"
        }
      ),
      dl && /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
        /* @__PURE__ */ w.jsx(
          "input",
          {
            type: "text",
            value: fl,
            onChange: (q) => bl(q.target.value),
            onKeyPress: X,
            placeholder: V ? "Введите ваш вопрос..." : "Инициализация...",
            disabled: !V,
            className: ml.messageInput
          }
        ),
        /* @__PURE__ */ w.jsx(
          "button",
          {
            onClick: jl,
            disabled: !fl.trim() || !V,
            className: ml.sendButton,
            children: "Отправить"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ w.jsx("div", { className: ml.statusInfo, children: /* @__PURE__ */ w.jsx("small", { children: dl && /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
      "Инициализация: ",
      V ? "✅" : "⏳"
    ] }) }) })
  ] });
}
function Hd() {
  return /* @__PURE__ */ w.jsx(
    Nd,
    {
      websocketUrl: "ws://localhost:7999/ws",
      userData: {
        email: "test@example.com",
        role: "ARM",
        position: "developer",
        department: "Python",
        uuid: "123e4567-e89b-12d3-a456-426614174000"
      }
    }
  );
}
function Rd(M) {
  const Sl = ad.createRoot(M);
  return Sl.render(F1.createElement(Hd)), Sl;
}
export {
  Hd as default,
  Rd as renderChatBot
};
