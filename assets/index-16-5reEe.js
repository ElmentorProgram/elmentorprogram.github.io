(function () {
  const o = document.createElement("link").relList;
  if (o && o.supports && o.supports("modulepreload")) return;
  for (const u of document.querySelectorAll('link[rel="modulepreload"]')) d(u);
  new MutationObserver((u) => {
    for (const h of u)
      if (h.type === "childList")
        for (const p of h.addedNodes)
          p.tagName === "LINK" && p.rel === "modulepreload" && d(p);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(u) {
    const h = {};
    return (
      u.integrity && (h.integrity = u.integrity),
      u.referrerPolicy && (h.referrerPolicy = u.referrerPolicy),
      u.crossOrigin === "use-credentials"
        ? (h.credentials = "include")
        : u.crossOrigin === "anonymous"
          ? (h.credentials = "omit")
          : (h.credentials = "same-origin"),
      h
    );
  }
  function d(u) {
    if (u.ep) return;
    u.ep = !0;
    const h = a(u);
    fetch(u.href, h);
  }
})();
function Fd(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default")
    ? l.default
    : l;
}
var ns = { exports: {} },
  bl = {},
  rs = { exports: {} },
  ke = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ed;
function lm() {
  if (ed) return ke;
  ed = 1;
  var l = Symbol.for("react.element"),
    o = Symbol.for("react.portal"),
    a = Symbol.for("react.fragment"),
    d = Symbol.for("react.strict_mode"),
    u = Symbol.for("react.profiler"),
    h = Symbol.for("react.provider"),
    p = Symbol.for("react.context"),
    v = Symbol.for("react.forward_ref"),
    m = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    E = Symbol.for("react.lazy"),
    M = Symbol.iterator;
  function C(k) {
    return k === null || typeof k != "object"
      ? null
      : ((k = (M && k[M]) || k["@@iterator"]),
        typeof k == "function" ? k : null);
  }
  var L = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    T = Object.assign,
    A = {};
  function H(k, I, oe) {
    (this.props = k),
      (this.context = I),
      (this.refs = A),
      (this.updater = oe || L);
  }
  (H.prototype.isReactComponent = {}),
    (H.prototype.setState = function (k, I) {
      if (typeof k != "object" && typeof k != "function" && k != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, k, I, "setState");
    }),
    (H.prototype.forceUpdate = function (k) {
      this.updater.enqueueForceUpdate(this, k, "forceUpdate");
    });
  function O() {}
  O.prototype = H.prototype;
  function le(k, I, oe) {
    (this.props = k),
      (this.context = I),
      (this.refs = A),
      (this.updater = oe || L);
  }
  var K = (le.prototype = new O());
  (K.constructor = le), T(K, H.prototype), (K.isPureReactComponent = !0);
  var ie = Array.isArray,
    de = Object.prototype.hasOwnProperty,
    z = { current: null },
    ve = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Se(k, I, oe) {
    var he,
      Ce = {},
      we = null,
      Ie = null;
    if (I != null)
      for (he in (I.ref !== void 0 && (Ie = I.ref),
      I.key !== void 0 && (we = "" + I.key),
      I))
        de.call(I, he) && !ve.hasOwnProperty(he) && (Ce[he] = I[he]);
    var _e = arguments.length - 2;
    if (_e === 1) Ce.children = oe;
    else if (1 < _e) {
      for (var be = Array(_e), De = 0; De < _e; De++)
        be[De] = arguments[De + 2];
      Ce.children = be;
    }
    if (k && k.defaultProps)
      for (he in ((_e = k.defaultProps), _e))
        Ce[he] === void 0 && (Ce[he] = _e[he]);
    return {
      $$typeof: l,
      type: k,
      key: we,
      ref: Ie,
      props: Ce,
      _owner: z.current,
    };
  }
  function pe(k, I) {
    return {
      $$typeof: l,
      type: k.type,
      key: I,
      ref: k.ref,
      props: k.props,
      _owner: k._owner,
    };
  }
  function Oe(k) {
    return typeof k == "object" && k !== null && k.$$typeof === l;
  }
  function et(k) {
    var I = { "=": "=0", ":": "=2" };
    return (
      "$" +
      k.replace(/[=:]/g, function (oe) {
        return I[oe];
      })
    );
  }
  var lt = /\/+/g;
  function Je(k, I) {
    return typeof k == "object" && k !== null && k.key != null
      ? et("" + k.key)
      : I.toString(36);
  }
  function xe(k, I, oe, he, Ce) {
    var we = typeof k;
    (we === "undefined" || we === "boolean") && (k = null);
    var Ie = !1;
    if (k === null) Ie = !0;
    else
      switch (we) {
        case "string":
        case "number":
          Ie = !0;
          break;
        case "object":
          switch (k.$$typeof) {
            case l:
            case o:
              Ie = !0;
          }
      }
    if (Ie)
      return (
        (Ie = k),
        (Ce = Ce(Ie)),
        (k = he === "" ? "." + Je(Ie, 0) : he),
        ie(Ce)
          ? ((oe = ""),
            k != null && (oe = k.replace(lt, "$&/") + "/"),
            xe(Ce, I, oe, "", function (De) {
              return De;
            }))
          : Ce != null &&
            (Oe(Ce) &&
              (Ce = pe(
                Ce,
                oe +
                  (!Ce.key || (Ie && Ie.key === Ce.key)
                    ? ""
                    : ("" + Ce.key).replace(lt, "$&/") + "/") +
                  k,
              )),
            I.push(Ce)),
        1
      );
    if (((Ie = 0), (he = he === "" ? "." : he + ":"), ie(k)))
      for (var _e = 0; _e < k.length; _e++) {
        we = k[_e];
        var be = he + Je(we, _e);
        Ie += xe(we, I, oe, be, Ce);
      }
    else if (((be = C(k)), typeof be == "function"))
      for (k = be.call(k), _e = 0; !(we = k.next()).done; )
        (we = we.value),
          (be = he + Je(we, _e++)),
          (Ie += xe(we, I, oe, be, Ce));
    else if (we === "object")
      throw (
        ((I = String(k)),
        Error(
          "Objects are not valid as a React child (found: " +
            (I === "[object Object]"
              ? "object with keys {" + Object.keys(k).join(", ") + "}"
              : I) +
            "). If you meant to render a collection of children, use an array instead.",
        ))
      );
    return Ie;
  }
  function ze(k, I, oe) {
    if (k == null) return k;
    var he = [],
      Ce = 0;
    return (
      xe(k, he, "", "", function (we) {
        return I.call(oe, we, Ce++);
      }),
      he
    );
  }
  function ye(k) {
    if (k._status === -1) {
      var I = k._result;
      (I = I()),
        I.then(
          function (oe) {
            (k._status === 0 || k._status === -1) &&
              ((k._status = 1), (k._result = oe));
          },
          function (oe) {
            (k._status === 0 || k._status === -1) &&
              ((k._status = 2), (k._result = oe));
          },
        ),
        k._status === -1 && ((k._status = 0), (k._result = I));
    }
    if (k._status === 1) return k._result.default;
    throw k._result;
  }
  var Ee = { current: null },
    B = { transition: null },
    X = {
      ReactCurrentDispatcher: Ee,
      ReactCurrentBatchConfig: B,
      ReactCurrentOwner: z,
    };
  function W() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (ke.Children = {
      map: ze,
      forEach: function (k, I, oe) {
        ze(
          k,
          function () {
            I.apply(this, arguments);
          },
          oe,
        );
      },
      count: function (k) {
        var I = 0;
        return (
          ze(k, function () {
            I++;
          }),
          I
        );
      },
      toArray: function (k) {
        return (
          ze(k, function (I) {
            return I;
          }) || []
        );
      },
      only: function (k) {
        if (!Oe(k))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return k;
      },
    }),
    (ke.Component = H),
    (ke.Fragment = a),
    (ke.Profiler = u),
    (ke.PureComponent = le),
    (ke.StrictMode = d),
    (ke.Suspense = m),
    (ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X),
    (ke.act = W),
    (ke.cloneElement = function (k, I, oe) {
      if (k == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            k +
            ".",
        );
      var he = T({}, k.props),
        Ce = k.key,
        we = k.ref,
        Ie = k._owner;
      if (I != null) {
        if (
          (I.ref !== void 0 && ((we = I.ref), (Ie = z.current)),
          I.key !== void 0 && (Ce = "" + I.key),
          k.type && k.type.defaultProps)
        )
          var _e = k.type.defaultProps;
        for (be in I)
          de.call(I, be) &&
            !ve.hasOwnProperty(be) &&
            (he[be] = I[be] === void 0 && _e !== void 0 ? _e[be] : I[be]);
      }
      var be = arguments.length - 2;
      if (be === 1) he.children = oe;
      else if (1 < be) {
        _e = Array(be);
        for (var De = 0; De < be; De++) _e[De] = arguments[De + 2];
        he.children = _e;
      }
      return {
        $$typeof: l,
        type: k.type,
        key: Ce,
        ref: we,
        props: he,
        _owner: Ie,
      };
    }),
    (ke.createContext = function (k) {
      return (
        (k = {
          $$typeof: p,
          _currentValue: k,
          _currentValue2: k,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (k.Provider = { $$typeof: h, _context: k }),
        (k.Consumer = k)
      );
    }),
    (ke.createElement = Se),
    (ke.createFactory = function (k) {
      var I = Se.bind(null, k);
      return (I.type = k), I;
    }),
    (ke.createRef = function () {
      return { current: null };
    }),
    (ke.forwardRef = function (k) {
      return { $$typeof: v, render: k };
    }),
    (ke.isValidElement = Oe),
    (ke.lazy = function (k) {
      return { $$typeof: E, _payload: { _status: -1, _result: k }, _init: ye };
    }),
    (ke.memo = function (k, I) {
      return { $$typeof: g, type: k, compare: I === void 0 ? null : I };
    }),
    (ke.startTransition = function (k) {
      var I = B.transition;
      B.transition = {};
      try {
        k();
      } finally {
        B.transition = I;
      }
    }),
    (ke.unstable_act = W),
    (ke.useCallback = function (k, I) {
      return Ee.current.useCallback(k, I);
    }),
    (ke.useContext = function (k) {
      return Ee.current.useContext(k);
    }),
    (ke.useDebugValue = function () {}),
    (ke.useDeferredValue = function (k) {
      return Ee.current.useDeferredValue(k);
    }),
    (ke.useEffect = function (k, I) {
      return Ee.current.useEffect(k, I);
    }),
    (ke.useId = function () {
      return Ee.current.useId();
    }),
    (ke.useImperativeHandle = function (k, I, oe) {
      return Ee.current.useImperativeHandle(k, I, oe);
    }),
    (ke.useInsertionEffect = function (k, I) {
      return Ee.current.useInsertionEffect(k, I);
    }),
    (ke.useLayoutEffect = function (k, I) {
      return Ee.current.useLayoutEffect(k, I);
    }),
    (ke.useMemo = function (k, I) {
      return Ee.current.useMemo(k, I);
    }),
    (ke.useReducer = function (k, I, oe) {
      return Ee.current.useReducer(k, I, oe);
    }),
    (ke.useRef = function (k) {
      return Ee.current.useRef(k);
    }),
    (ke.useState = function (k) {
      return Ee.current.useState(k);
    }),
    (ke.useSyncExternalStore = function (k, I, oe) {
      return Ee.current.useSyncExternalStore(k, I, oe);
    }),
    (ke.useTransition = function () {
      return Ee.current.useTransition();
    }),
    (ke.version = "18.3.1"),
    ke
  );
}
var td;
function xs() {
  return td || ((td = 1), (rs.exports = lm())), rs.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nd;
function im() {
  if (nd) return bl;
  nd = 1;
  var l = xs(),
    o = Symbol.for("react.element"),
    a = Symbol.for("react.fragment"),
    d = Object.prototype.hasOwnProperty,
    u = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(v, m, g) {
    var E,
      M = {},
      C = null,
      L = null;
    g !== void 0 && (C = "" + g),
      m.key !== void 0 && (C = "" + m.key),
      m.ref !== void 0 && (L = m.ref);
    for (E in m) d.call(m, E) && !h.hasOwnProperty(E) && (M[E] = m[E]);
    if (v && v.defaultProps)
      for (E in ((m = v.defaultProps), m)) M[E] === void 0 && (M[E] = m[E]);
    return {
      $$typeof: o,
      type: v,
      key: C,
      ref: L,
      props: M,
      _owner: u.current,
    };
  }
  return (bl.Fragment = a), (bl.jsx = p), (bl.jsxs = p), bl;
}
var rd;
function om() {
  return rd || ((rd = 1), (ns.exports = im())), ns.exports;
}
var c = om(),
  P = xs();
const wn = Fd(P);
var oo = {},
  ls = { exports: {} },
  Pt = {},
  is = { exports: {} },
  os = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ld;
function am() {
  return (
    ld ||
      ((ld = 1),
      (function (l) {
        function o(B, X) {
          var W = B.length;
          B.push(X);
          e: for (; 0 < W; ) {
            var k = (W - 1) >>> 1,
              I = B[k];
            if (0 < u(I, X)) (B[k] = X), (B[W] = I), (W = k);
            else break e;
          }
        }
        function a(B) {
          return B.length === 0 ? null : B[0];
        }
        function d(B) {
          if (B.length === 0) return null;
          var X = B[0],
            W = B.pop();
          if (W !== X) {
            B[0] = W;
            e: for (var k = 0, I = B.length, oe = I >>> 1; k < oe; ) {
              var he = 2 * (k + 1) - 1,
                Ce = B[he],
                we = he + 1,
                Ie = B[we];
              if (0 > u(Ce, W))
                we < I && 0 > u(Ie, Ce)
                  ? ((B[k] = Ie), (B[we] = W), (k = we))
                  : ((B[k] = Ce), (B[he] = W), (k = he));
              else if (we < I && 0 > u(Ie, W))
                (B[k] = Ie), (B[we] = W), (k = we);
              else break e;
            }
          }
          return X;
        }
        function u(B, X) {
          var W = B.sortIndex - X.sortIndex;
          return W !== 0 ? W : B.id - X.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var h = performance;
          l.unstable_now = function () {
            return h.now();
          };
        } else {
          var p = Date,
            v = p.now();
          l.unstable_now = function () {
            return p.now() - v;
          };
        }
        var m = [],
          g = [],
          E = 1,
          M = null,
          C = 3,
          L = !1,
          T = !1,
          A = !1,
          H = typeof setTimeout == "function" ? setTimeout : null,
          O = typeof clearTimeout == "function" ? clearTimeout : null,
          le = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function K(B) {
          for (var X = a(g); X !== null; ) {
            if (X.callback === null) d(g);
            else if (X.startTime <= B)
              d(g), (X.sortIndex = X.expirationTime), o(m, X);
            else break;
            X = a(g);
          }
        }
        function ie(B) {
          if (((A = !1), K(B), !T))
            if (a(m) !== null) (T = !0), ye(de);
            else {
              var X = a(g);
              X !== null && Ee(ie, X.startTime - B);
            }
        }
        function de(B, X) {
          (T = !1), A && ((A = !1), O(Se), (Se = -1)), (L = !0);
          var W = C;
          try {
            for (
              K(X), M = a(m);
              M !== null && (!(M.expirationTime > X) || (B && !et()));

            ) {
              var k = M.callback;
              if (typeof k == "function") {
                (M.callback = null), (C = M.priorityLevel);
                var I = k(M.expirationTime <= X);
                (X = l.unstable_now()),
                  typeof I == "function"
                    ? (M.callback = I)
                    : M === a(m) && d(m),
                  K(X);
              } else d(m);
              M = a(m);
            }
            if (M !== null) var oe = !0;
            else {
              var he = a(g);
              he !== null && Ee(ie, he.startTime - X), (oe = !1);
            }
            return oe;
          } finally {
            (M = null), (C = W), (L = !1);
          }
        }
        var z = !1,
          ve = null,
          Se = -1,
          pe = 5,
          Oe = -1;
        function et() {
          return !(l.unstable_now() - Oe < pe);
        }
        function lt() {
          if (ve !== null) {
            var B = l.unstable_now();
            Oe = B;
            var X = !0;
            try {
              X = ve(!0, B);
            } finally {
              X ? Je() : ((z = !1), (ve = null));
            }
          } else z = !1;
        }
        var Je;
        if (typeof le == "function")
          Je = function () {
            le(lt);
          };
        else if (typeof MessageChannel < "u") {
          var xe = new MessageChannel(),
            ze = xe.port2;
          (xe.port1.onmessage = lt),
            (Je = function () {
              ze.postMessage(null);
            });
        } else
          Je = function () {
            H(lt, 0);
          };
        function ye(B) {
          (ve = B), z || ((z = !0), Je());
        }
        function Ee(B, X) {
          Se = H(function () {
            B(l.unstable_now());
          }, X);
        }
        (l.unstable_IdlePriority = 5),
          (l.unstable_ImmediatePriority = 1),
          (l.unstable_LowPriority = 4),
          (l.unstable_NormalPriority = 3),
          (l.unstable_Profiling = null),
          (l.unstable_UserBlockingPriority = 2),
          (l.unstable_cancelCallback = function (B) {
            B.callback = null;
          }),
          (l.unstable_continueExecution = function () {
            T || L || ((T = !0), ye(de));
          }),
          (l.unstable_forceFrameRate = function (B) {
            0 > B || 125 < B
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (pe = 0 < B ? Math.floor(1e3 / B) : 5);
          }),
          (l.unstable_getCurrentPriorityLevel = function () {
            return C;
          }),
          (l.unstable_getFirstCallbackNode = function () {
            return a(m);
          }),
          (l.unstable_next = function (B) {
            switch (C) {
              case 1:
              case 2:
              case 3:
                var X = 3;
                break;
              default:
                X = C;
            }
            var W = C;
            C = X;
            try {
              return B();
            } finally {
              C = W;
            }
          }),
          (l.unstable_pauseExecution = function () {}),
          (l.unstable_requestPaint = function () {}),
          (l.unstable_runWithPriority = function (B, X) {
            switch (B) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                B = 3;
            }
            var W = C;
            C = B;
            try {
              return X();
            } finally {
              C = W;
            }
          }),
          (l.unstable_scheduleCallback = function (B, X, W) {
            var k = l.unstable_now();
            switch (
              (typeof W == "object" && W !== null
                ? ((W = W.delay),
                  (W = typeof W == "number" && 0 < W ? k + W : k))
                : (W = k),
              B)
            ) {
              case 1:
                var I = -1;
                break;
              case 2:
                I = 250;
                break;
              case 5:
                I = 1073741823;
                break;
              case 4:
                I = 1e4;
                break;
              default:
                I = 5e3;
            }
            return (
              (I = W + I),
              (B = {
                id: E++,
                callback: X,
                priorityLevel: B,
                startTime: W,
                expirationTime: I,
                sortIndex: -1,
              }),
              W > k
                ? ((B.sortIndex = W),
                  o(g, B),
                  a(m) === null &&
                    B === a(g) &&
                    (A ? (O(Se), (Se = -1)) : (A = !0), Ee(ie, W - k)))
                : ((B.sortIndex = I), o(m, B), T || L || ((T = !0), ye(de))),
              B
            );
          }),
          (l.unstable_shouldYield = et),
          (l.unstable_wrapCallback = function (B) {
            var X = C;
            return function () {
              var W = C;
              C = X;
              try {
                return B.apply(this, arguments);
              } finally {
                C = W;
              }
            };
          });
      })(os)),
    os
  );
}
var id;
function sm() {
  return id || ((id = 1), (is.exports = am())), is.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var od;
function um() {
  if (od) return Pt;
  od = 1;
  var l = xs(),
    o = sm();
  function a(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var d = new Set(),
    u = {};
  function h(e, t) {
    p(e, t), p(e + "Capture", t);
  }
  function p(e, t) {
    for (u[e] = t, e = 0; e < t.length; e++) d.add(t[e]);
  }
  var v = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    m = Object.prototype.hasOwnProperty,
    g =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    E = {},
    M = {};
  function C(e) {
    return m.call(M, e)
      ? !0
      : m.call(E, e)
        ? !1
        : g.test(e)
          ? (M[e] = !0)
          : ((E[e] = !0), !1);
  }
  function L(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
            ? !n.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function T(e, t, n, r) {
    if (t === null || typeof t > "u" || L(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function A(e, t, n, r, i, s, f) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = i),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = s),
      (this.removeEmptyString = f);
  }
  var H = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      H[e] = new A(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      H[t] = new A(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        H[e] = new A(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      H[e] = new A(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        H[e] = new A(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      H[e] = new A(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      H[e] = new A(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      H[e] = new A(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      H[e] = new A(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var O = /[\-:]([a-z])/g;
  function le(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(O, le);
      H[t] = new A(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(O, le);
        H[t] = new A(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(O, le);
      H[t] = new A(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      H[e] = new A(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (H.xlinkHref = new A(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      H[e] = new A(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function K(e, t, n, r) {
    var i = H.hasOwnProperty(t) ? H[t] : null;
    (i !== null
      ? i.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (T(t, n, i, r) && (n = null),
      r || i === null
        ? C(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : i.mustUseProperty
          ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
          : ((t = i.attributeName),
            (r = i.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((i = i.type),
                (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var ie = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    de = Symbol.for("react.element"),
    z = Symbol.for("react.portal"),
    ve = Symbol.for("react.fragment"),
    Se = Symbol.for("react.strict_mode"),
    pe = Symbol.for("react.profiler"),
    Oe = Symbol.for("react.provider"),
    et = Symbol.for("react.context"),
    lt = Symbol.for("react.forward_ref"),
    Je = Symbol.for("react.suspense"),
    xe = Symbol.for("react.suspense_list"),
    ze = Symbol.for("react.memo"),
    ye = Symbol.for("react.lazy"),
    Ee = Symbol.for("react.offscreen"),
    B = Symbol.iterator;
  function X(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (B && e[B]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var W = Object.assign,
    k;
  function I(e) {
    if (k === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        k = (t && t[1]) || "";
      }
    return (
      `
` +
      k +
      e
    );
  }
  var oe = !1;
  function he(e, t) {
    if (!e || oe) return "";
    oe = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (_) {
            var r = _;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (_) {
            r = _;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (_) {
          r = _;
        }
        e();
      }
    } catch (_) {
      if (_ && r && typeof _.stack == "string") {
        for (
          var i = _.stack.split(`
`),
            s = r.stack.split(`
`),
            f = i.length - 1,
            y = s.length - 1;
          1 <= f && 0 <= y && i[f] !== s[y];

        )
          y--;
        for (; 1 <= f && 0 <= y; f--, y--)
          if (i[f] !== s[y]) {
            if (f !== 1 || y !== 1)
              do
                if ((f--, y--, 0 > y || i[f] !== s[y])) {
                  var x =
                    `
` + i[f].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      x.includes("<anonymous>") &&
                      (x = x.replace("<anonymous>", e.displayName)),
                    x
                  );
                }
              while (1 <= f && 0 <= y);
            break;
          }
      }
    } finally {
      (oe = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? I(e) : "";
  }
  function Ce(e) {
    switch (e.tag) {
      case 5:
        return I(e.type);
      case 16:
        return I("Lazy");
      case 13:
        return I("Suspense");
      case 19:
        return I("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = he(e.type, !1)), e;
      case 11:
        return (e = he(e.type.render, !1)), e;
      case 1:
        return (e = he(e.type, !0)), e;
      default:
        return "";
    }
  }
  function we(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ve:
        return "Fragment";
      case z:
        return "Portal";
      case pe:
        return "Profiler";
      case Se:
        return "StrictMode";
      case Je:
        return "Suspense";
      case xe:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case et:
          return (e.displayName || "Context") + ".Consumer";
        case Oe:
          return (e._context.displayName || "Context") + ".Provider";
        case lt:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case ze:
          return (
            (t = e.displayName || null), t !== null ? t : we(e.type) || "Memo"
          );
        case ye:
          (t = e._payload), (e = e._init);
          try {
            return we(e(t));
          } catch {}
      }
    return null;
  }
  function Ie(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return we(t);
      case 8:
        return t === Se ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function _e(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function be(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function De(e) {
    var t = be(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var i = n.get,
        s = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return i.call(this);
          },
          set: function (f) {
            (r = "" + f), s.call(this, f);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (f) {
            r = "" + f;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function $t(e) {
    e._valueTracker || (e._valueTracker = De(e));
  }
  function Xr(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = be(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function xr(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Bt(e, t) {
    var n = t.checked;
    return W({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Jl(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = _e(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function Xl(e, t) {
    (t = t.checked), t != null && K(e, "checked", t, !1);
  }
  function Sr(e, t) {
    Xl(e, t);
    var n = _e(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? Zr(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Zr(e, t.type, _e(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function Zl(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n);
  }
  function Zr(e, t, n) {
    (t !== "number" || xr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Jn = Array.isArray;
  function En(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
      for (n = 0; n < e.length; n++)
        (i = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== i && (e[n].selected = i),
          i && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + _e(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          (e[i].selected = !0), r && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Wt(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(a(91));
    return W({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function kn(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(a(92));
        if (Jn(n)) {
          if (1 < n.length) throw Error(a(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: _e(n) };
  }
  function qr(e, t) {
    var n = _e(t.value),
      r = _e(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
  }
  function Er(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function Gt(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Rt(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Gt(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var Xn,
    kr = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, i) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, i);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Xn = Xn || document.createElement("div"),
            Xn.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Xn.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Zn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var yt = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    ql = ["Webkit", "ms", "Moz", "O"];
  Object.keys(yt).forEach(function (e) {
    ql.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (yt[t] = yt[e]);
    });
  });
  function el(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (yt.hasOwnProperty(e) && yt[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function tl(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          i = el(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
      }
  }
  var So = W(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
  );
  function Cr(e, t) {
    if (t) {
      if (So[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(a(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(a(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(a(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(a(62));
    }
  }
  function Cn(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
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
  var Nr = null;
  function qn(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var nl = null,
    un = null,
    Nn = null;
  function rl(e) {
    if ((e = kl(e))) {
      if (typeof nl != "function") throw Error(a(280));
      var t = e.stateNode;
      t && ((t = Si(t)), nl(e.stateNode, e.type, t));
    }
  }
  function er(e) {
    un ? (Nn ? Nn.push(e) : (Nn = [e])) : (un = e);
  }
  function tr() {
    if (un) {
      var e = un,
        t = Nn;
      if (((Nn = un = null), rl(e), t)) for (e = 0; e < t.length; e++) rl(t[e]);
    }
  }
  function ei(e, t) {
    return e(t);
  }
  function ti() {}
  var w = !1;
  function N(e, t, n) {
    if (w) return e(t, n);
    w = !0;
    try {
      return ei(e, t, n);
    } finally {
      (w = !1), (un !== null || Nn !== null) && (ti(), tr());
    }
  }
  function D(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Si(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
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
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(a(231, t, typeof n));
    return n;
  }
  var V = !1;
  if (v)
    try {
      var G = {};
      Object.defineProperty(G, "passive", {
        get: function () {
          V = !0;
        },
      }),
        window.addEventListener("test", G, G),
        window.removeEventListener("test", G, G);
    } catch {
      V = !1;
    }
  function ne(e, t, n, r, i, s, f, y, x) {
    var _ = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, _);
    } catch (b) {
      this.onError(b);
    }
  }
  var se = !1,
    Y = null,
    te = !1,
    re = null,
    me = {
      onError: function (e) {
        (se = !0), (Y = e);
      },
    };
  function ae(e, t, n, r, i, s, f, y, x) {
    (se = !1), (Y = null), ne.apply(me, arguments);
  }
  function ge(e, t, n, r, i, s, f, y, x) {
    if ((ae.apply(this, arguments), se)) {
      if (se) {
        var _ = Y;
        (se = !1), (Y = null);
      } else throw Error(a(198));
      te || ((te = !0), (re = _));
    }
  }
  function Pe(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Ge(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function tt(e) {
    if (Pe(e) !== e) throw Error(a(188));
  }
  function pt(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Pe(e)), t === null)) throw Error(a(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var i = n.return;
      if (i === null) break;
      var s = i.alternate;
      if (s === null) {
        if (((r = i.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (i.child === s.child) {
        for (s = i.child; s; ) {
          if (s === n) return tt(i), e;
          if (s === r) return tt(i), t;
          s = s.sibling;
        }
        throw Error(a(188));
      }
      if (n.return !== r.return) (n = i), (r = s);
      else {
        for (var f = !1, y = i.child; y; ) {
          if (y === n) {
            (f = !0), (n = i), (r = s);
            break;
          }
          if (y === r) {
            (f = !0), (r = i), (n = s);
            break;
          }
          y = y.sibling;
        }
        if (!f) {
          for (y = s.child; y; ) {
            if (y === n) {
              (f = !0), (n = s), (r = i);
              break;
            }
            if (y === r) {
              (f = !0), (r = s), (n = i);
              break;
            }
            y = y.sibling;
          }
          if (!f) throw Error(a(189));
        }
      }
      if (n.alternate !== r) throw Error(a(190));
    }
    if (n.tag !== 3) throw Error(a(188));
    return n.stateNode.current === n ? e : t;
  }
  function je(e) {
    return (e = pt(e)), e !== null ? jn(e) : null;
  }
  function jn(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = jn(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var tn = o.unstable_scheduleCallback,
    Pn = o.unstable_cancelCallback,
    wt = o.unstable_shouldYield,
    nr = o.unstable_requestPaint,
    Fe = o.unstable_now,
    ll = o.unstable_getCurrentPriorityLevel,
    Qt = o.unstable_ImmediatePriority,
    rr = o.unstable_UserBlockingPriority,
    Re = o.unstable_NormalPriority,
    xt = o.unstable_LowPriority,
    Kt = o.unstable_IdlePriority,
    cn = null,
    St = null;
  function Qe(e) {
    if (St && typeof St.onCommitFiberRoot == "function")
      try {
        St.onCommitFiberRoot(cn, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var it = Math.clz32 ? Math.clz32 : Ef,
    ni = Math.log,
    Eo = Math.LN2;
  function Ef(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((ni(e) / Eo) | 0)) | 0;
  }
  var ri = 64,
    li = 4194304;
  function il(e) {
    switch (e & -e) {
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
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function ii(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      i = e.suspendedLanes,
      s = e.pingedLanes,
      f = n & 268435455;
    if (f !== 0) {
      var y = f & ~i;
      y !== 0 ? (r = il(y)) : ((s &= f), s !== 0 && (r = il(s)));
    } else (f = n & ~i), f !== 0 ? (r = il(f)) : s !== 0 && (r = il(s));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      (t & i) === 0 &&
      ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
    )
      return t;
    if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - it(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
    return r;
  }
  function kf(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
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
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Cf(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        i = e.expirationTimes,
        s = e.pendingLanes;
      0 < s;

    ) {
      var f = 31 - it(s),
        y = 1 << f,
        x = i[f];
      x === -1
        ? ((y & n) === 0 || (y & r) !== 0) && (i[f] = kf(y, t))
        : x <= t && (e.expiredLanes |= y),
        (s &= ~y);
    }
  }
  function ko(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function zs() {
    var e = ri;
    return (ri <<= 1), (ri & 4194240) === 0 && (ri = 64), e;
  }
  function Co(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function ol(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - it(t)),
      (e[t] = n);
  }
  function Nf(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var i = 31 - it(n),
        s = 1 << i;
      (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
    }
  }
  function No(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - it(n),
        i = 1 << r;
      (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
    }
  }
  var Te = 0;
  function _s(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var Ds,
    jo,
    Ts,
    Os,
    Is,
    Po = !1,
    oi = [],
    Rn = null,
    Ln = null,
    Mn = null,
    al = new Map(),
    sl = new Map(),
    zn = [],
    jf =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function Fs(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Rn = null;
        break;
      case "dragenter":
      case "dragleave":
        Ln = null;
        break;
      case "mouseover":
      case "mouseout":
        Mn = null;
        break;
      case "pointerover":
      case "pointerout":
        al.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        sl.delete(t.pointerId);
    }
  }
  function ul(e, t, n, r, i, s) {
    return e === null || e.nativeEvent !== s
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: s,
          targetContainers: [i],
        }),
        t !== null && ((t = kl(t)), t !== null && jo(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        i !== null && t.indexOf(i) === -1 && t.push(i),
        e);
  }
  function Pf(e, t, n, r, i) {
    switch (t) {
      case "focusin":
        return (Rn = ul(Rn, e, t, n, r, i)), !0;
      case "dragenter":
        return (Ln = ul(Ln, e, t, n, r, i)), !0;
      case "mouseover":
        return (Mn = ul(Mn, e, t, n, r, i)), !0;
      case "pointerover":
        var s = i.pointerId;
        return al.set(s, ul(al.get(s) || null, e, t, n, r, i)), !0;
      case "gotpointercapture":
        return (
          (s = i.pointerId), sl.set(s, ul(sl.get(s) || null, e, t, n, r, i)), !0
        );
    }
    return !1;
  }
  function bs(e) {
    var t = lr(e.target);
    if (t !== null) {
      var n = Pe(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = Ge(n)), t !== null)) {
            (e.blockedOn = t),
              Is(e.priority, function () {
                Ts(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function ai(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Lo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (Nr = r), n.target.dispatchEvent(r), (Nr = null);
      } else return (t = kl(n)), t !== null && jo(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function As(e, t, n) {
    ai(e) && n.delete(t);
  }
  function Rf() {
    (Po = !1),
      Rn !== null && ai(Rn) && (Rn = null),
      Ln !== null && ai(Ln) && (Ln = null),
      Mn !== null && ai(Mn) && (Mn = null),
      al.forEach(As),
      sl.forEach(As);
  }
  function cl(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Po ||
        ((Po = !0),
        o.unstable_scheduleCallback(o.unstable_NormalPriority, Rf)));
  }
  function dl(e) {
    function t(i) {
      return cl(i, e);
    }
    if (0 < oi.length) {
      cl(oi[0], e);
      for (var n = 1; n < oi.length; n++) {
        var r = oi[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Rn !== null && cl(Rn, e),
        Ln !== null && cl(Ln, e),
        Mn !== null && cl(Mn, e),
        al.forEach(t),
        sl.forEach(t),
        n = 0;
      n < zn.length;
      n++
    )
      (r = zn[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < zn.length && ((n = zn[0]), n.blockedOn === null); )
      bs(n), n.blockedOn === null && zn.shift();
  }
  var jr = ie.ReactCurrentBatchConfig,
    si = !0;
  function Lf(e, t, n, r) {
    var i = Te,
      s = jr.transition;
    jr.transition = null;
    try {
      (Te = 1), Ro(e, t, n, r);
    } finally {
      (Te = i), (jr.transition = s);
    }
  }
  function Mf(e, t, n, r) {
    var i = Te,
      s = jr.transition;
    jr.transition = null;
    try {
      (Te = 4), Ro(e, t, n, r);
    } finally {
      (Te = i), (jr.transition = s);
    }
  }
  function Ro(e, t, n, r) {
    if (si) {
      var i = Lo(e, t, n, r);
      if (i === null) Go(e, t, r, ui, n), Fs(e, r);
      else if (Pf(i, e, t, n, r)) r.stopPropagation();
      else if ((Fs(e, r), t & 4 && -1 < jf.indexOf(e))) {
        for (; i !== null; ) {
          var s = kl(i);
          if (
            (s !== null && Ds(s),
            (s = Lo(e, t, n, r)),
            s === null && Go(e, t, r, ui, n),
            s === i)
          )
            break;
          i = s;
        }
        i !== null && r.stopPropagation();
      } else Go(e, t, r, null, n);
    }
  }
  var ui = null;
  function Lo(e, t, n, r) {
    if (((ui = null), (e = qn(r)), (e = lr(e)), e !== null))
      if (((t = Pe(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = Ge(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (ui = e), null;
  }
  function Vs(e) {
    switch (e) {
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
        return 1;
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
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (ll()) {
          case Qt:
            return 1;
          case rr:
            return 4;
          case Re:
          case xt:
            return 16;
          case Kt:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var _n = null,
    Mo = null,
    ci = null;
  function Us() {
    if (ci) return ci;
    var e,
      t = Mo,
      n = t.length,
      r,
      i = "value" in _n ? _n.value : _n.textContent,
      s = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var f = n - e;
    for (r = 1; r <= f && t[n - r] === i[s - r]; r++);
    return (ci = i.slice(e, 1 < r ? 1 - r : void 0));
  }
  function di(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function fi() {
    return !0;
  }
  function Hs() {
    return !1;
  }
  function Lt(e) {
    function t(n, r, i, s, f) {
      (this._reactName = n),
        (this._targetInst = i),
        (this.type = r),
        (this.nativeEvent = s),
        (this.target = f),
        (this.currentTarget = null);
      for (var y in e)
        e.hasOwnProperty(y) && ((n = e[y]), (this[y] = n ? n(s) : s[y]));
      return (
        (this.isDefaultPrevented = (
          s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
        )
          ? fi
          : Hs),
        (this.isPropagationStopped = Hs),
        this
      );
    }
    return (
      W(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = fi));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = fi));
        },
        persist: function () {},
        isPersistent: fi,
      }),
      t
    );
  }
  var Pr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    zo = Lt(Pr),
    fl = W({}, Pr, { view: 0, detail: 0 }),
    zf = Lt(fl),
    _o,
    Do,
    hl,
    hi = W({}, fl, {
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
      getModifierState: Oo,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== hl &&
              (hl && e.type === "mousemove"
                ? ((_o = e.screenX - hl.screenX), (Do = e.screenY - hl.screenY))
                : (Do = _o = 0),
              (hl = e)),
            _o);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Do;
      },
    }),
    $s = Lt(hi),
    _f = W({}, hi, { dataTransfer: 0 }),
    Df = Lt(_f),
    Tf = W({}, fl, { relatedTarget: 0 }),
    To = Lt(Tf),
    Of = W({}, Pr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    If = Lt(Of),
    Ff = W({}, Pr, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    bf = Lt(Ff),
    Af = W({}, Pr, { data: 0 }),
    Bs = Lt(Af),
    Vf = {
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
      MozPrintableKey: "Unidentified",
    },
    Uf = {
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
      224: "Meta",
    },
    Hf = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function $f(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Hf[e])
        ? !!t[e]
        : !1;
  }
  function Oo() {
    return $f;
  }
  var Bf = W({}, fl, {
      key: function (e) {
        if (e.key) {
          var t = Vf[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = di(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? Uf[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Oo,
      charCode: function (e) {
        return e.type === "keypress" ? di(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? di(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    Wf = Lt(Bf),
    Gf = W({}, hi, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Ws = Lt(Gf),
    Qf = W({}, fl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Oo,
    }),
    Kf = Lt(Qf),
    Yf = W({}, Pr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Jf = Lt(Yf),
    Xf = W({}, hi, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Zf = Lt(Xf),
    qf = [9, 13, 27, 32],
    Io = v && "CompositionEvent" in window,
    ml = null;
  v && "documentMode" in document && (ml = document.documentMode);
  var eh = v && "TextEvent" in window && !ml,
    Gs = v && (!Io || (ml && 8 < ml && 11 >= ml)),
    Qs = " ",
    Ks = !1;
  function Ys(e, t) {
    switch (e) {
      case "keyup":
        return qf.indexOf(t.keyCode) !== -1;
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
  function Js(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Rr = !1;
  function th(e, t) {
    switch (e) {
      case "compositionend":
        return Js(t);
      case "keypress":
        return t.which !== 32 ? null : ((Ks = !0), Qs);
      case "textInput":
        return (e = t.data), e === Qs && Ks ? null : e;
      default:
        return null;
    }
  }
  function nh(e, t) {
    if (Rr)
      return e === "compositionend" || (!Io && Ys(e, t))
        ? ((e = Us()), (ci = Mo = _n = null), (Rr = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Gs && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var rh = {
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
    week: !0,
  };
  function Xs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!rh[e.type] : t === "textarea";
  }
  function Zs(e, t, n, r) {
    er(r),
      (t = yi(t, "onChange")),
      0 < t.length &&
        ((n = new zo("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var pl = null,
    vl = null;
  function lh(e) {
    vu(e, 0);
  }
  function mi(e) {
    var t = Dr(e);
    if (Xr(t)) return e;
  }
  function ih(e, t) {
    if (e === "change") return t;
  }
  var qs = !1;
  if (v) {
    var Fo;
    if (v) {
      var bo = "oninput" in document;
      if (!bo) {
        var eu = document.createElement("div");
        eu.setAttribute("oninput", "return;"),
          (bo = typeof eu.oninput == "function");
      }
      Fo = bo;
    } else Fo = !1;
    qs = Fo && (!document.documentMode || 9 < document.documentMode);
  }
  function tu() {
    pl && (pl.detachEvent("onpropertychange", nu), (vl = pl = null));
  }
  function nu(e) {
    if (e.propertyName === "value" && mi(vl)) {
      var t = [];
      Zs(t, vl, e, qn(e)), N(lh, t);
    }
  }
  function oh(e, t, n) {
    e === "focusin"
      ? (tu(), (pl = t), (vl = n), pl.attachEvent("onpropertychange", nu))
      : e === "focusout" && tu();
  }
  function ah(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return mi(vl);
  }
  function sh(e, t) {
    if (e === "click") return mi(t);
  }
  function uh(e, t) {
    if (e === "input" || e === "change") return mi(t);
  }
  function ch(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Yt = typeof Object.is == "function" ? Object.is : ch;
  function gl(e, t) {
    if (Yt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var i = n[r];
      if (!m.call(t, i) || !Yt(e[i], t[i])) return !1;
    }
    return !0;
  }
  function ru(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function lu(e, t) {
    var n = ru(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = ru(n);
    }
  }
  function iu(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? iu(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function ou() {
    for (var e = window, t = xr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = xr(e.document);
    }
    return t;
  }
  function Ao(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function dh(e) {
    var t = ou(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      iu(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && Ao(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var i = n.textContent.length,
            s = Math.min(r.start, i);
          (r = r.end === void 0 ? s : Math.min(r.end, i)),
            !e.extend && s > r && ((i = r), (r = s), (s = i)),
            (i = lu(n, s));
          var f = lu(n, r);
          i &&
            f &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== i.node ||
              e.anchorOffset !== i.offset ||
              e.focusNode !== f.node ||
              e.focusOffset !== f.offset) &&
            ((t = t.createRange()),
            t.setStart(i.node, i.offset),
            e.removeAllRanges(),
            s > r
              ? (e.addRange(t), e.extend(f.node, f.offset))
              : (t.setEnd(f.node, f.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var fh = v && "documentMode" in document && 11 >= document.documentMode,
    Lr = null,
    Vo = null,
    yl = null,
    Uo = !1;
  function au(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Uo ||
      Lr == null ||
      Lr !== xr(r) ||
      ((r = Lr),
      "selectionStart" in r && Ao(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (yl && gl(yl, r)) ||
        ((yl = r),
        (r = yi(Vo, "onSelect")),
        0 < r.length &&
          ((t = new zo("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = Lr))));
  }
  function pi(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var Mr = {
      animationend: pi("Animation", "AnimationEnd"),
      animationiteration: pi("Animation", "AnimationIteration"),
      animationstart: pi("Animation", "AnimationStart"),
      transitionend: pi("Transition", "TransitionEnd"),
    },
    Ho = {},
    su = {};
  v &&
    ((su = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Mr.animationend.animation,
      delete Mr.animationiteration.animation,
      delete Mr.animationstart.animation),
    "TransitionEvent" in window || delete Mr.transitionend.transition);
  function vi(e) {
    if (Ho[e]) return Ho[e];
    if (!Mr[e]) return e;
    var t = Mr[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in su) return (Ho[e] = t[n]);
    return e;
  }
  var uu = vi("animationend"),
    cu = vi("animationiteration"),
    du = vi("animationstart"),
    fu = vi("transitionend"),
    hu = new Map(),
    mu =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Dn(e, t) {
    hu.set(e, t), h(t, [e]);
  }
  for (var $o = 0; $o < mu.length; $o++) {
    var Bo = mu[$o],
      hh = Bo.toLowerCase(),
      mh = Bo[0].toUpperCase() + Bo.slice(1);
    Dn(hh, "on" + mh);
  }
  Dn(uu, "onAnimationEnd"),
    Dn(cu, "onAnimationIteration"),
    Dn(du, "onAnimationStart"),
    Dn("dblclick", "onDoubleClick"),
    Dn("focusin", "onFocus"),
    Dn("focusout", "onBlur"),
    Dn(fu, "onTransitionEnd"),
    p("onMouseEnter", ["mouseout", "mouseover"]),
    p("onMouseLeave", ["mouseout", "mouseover"]),
    p("onPointerEnter", ["pointerout", "pointerover"]),
    p("onPointerLeave", ["pointerout", "pointerover"]),
    h(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    h(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    h("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    h(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    h(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    h(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
  var wl =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    ph = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(wl),
    );
  function pu(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), ge(r, t, void 0, e), (e.currentTarget = null);
  }
  function vu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        i = r.event;
      r = r.listeners;
      e: {
        var s = void 0;
        if (t)
          for (var f = r.length - 1; 0 <= f; f--) {
            var y = r[f],
              x = y.instance,
              _ = y.currentTarget;
            if (((y = y.listener), x !== s && i.isPropagationStopped()))
              break e;
            pu(i, y, _), (s = x);
          }
        else
          for (f = 0; f < r.length; f++) {
            if (
              ((y = r[f]),
              (x = y.instance),
              (_ = y.currentTarget),
              (y = y.listener),
              x !== s && i.isPropagationStopped())
            )
              break e;
            pu(i, y, _), (s = x);
          }
      }
    }
    if (te) throw ((e = re), (te = !1), (re = null), e);
  }
  function Ue(e, t) {
    var n = t[Zo];
    n === void 0 && (n = t[Zo] = new Set());
    var r = e + "__bubble";
    n.has(r) || (gu(t, e, 2, !1), n.add(r));
  }
  function Wo(e, t, n) {
    var r = 0;
    t && (r |= 4), gu(n, e, r, t);
  }
  var gi = "_reactListening" + Math.random().toString(36).slice(2);
  function xl(e) {
    if (!e[gi]) {
      (e[gi] = !0),
        d.forEach(function (n) {
          n !== "selectionchange" && (ph.has(n) || Wo(n, !1, e), Wo(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[gi] || ((t[gi] = !0), Wo("selectionchange", !1, t));
    }
  }
  function gu(e, t, n, r) {
    switch (Vs(t)) {
      case 1:
        var i = Lf;
        break;
      case 4:
        i = Mf;
        break;
      default:
        i = Ro;
    }
    (n = i.bind(null, t, n, e)),
      (i = void 0),
      !V ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (i = !0),
      r
        ? i !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: i })
          : e.addEventListener(t, n, !0)
        : i !== void 0
          ? e.addEventListener(t, n, { passive: i })
          : e.addEventListener(t, n, !1);
  }
  function Go(e, t, n, r, i) {
    var s = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var f = r.tag;
        if (f === 3 || f === 4) {
          var y = r.stateNode.containerInfo;
          if (y === i || (y.nodeType === 8 && y.parentNode === i)) break;
          if (f === 4)
            for (f = r.return; f !== null; ) {
              var x = f.tag;
              if (
                (x === 3 || x === 4) &&
                ((x = f.stateNode.containerInfo),
                x === i || (x.nodeType === 8 && x.parentNode === i))
              )
                return;
              f = f.return;
            }
          for (; y !== null; ) {
            if (((f = lr(y)), f === null)) return;
            if (((x = f.tag), x === 5 || x === 6)) {
              r = s = f;
              continue e;
            }
            y = y.parentNode;
          }
        }
        r = r.return;
      }
    N(function () {
      var _ = s,
        b = qn(n),
        U = [];
      e: {
        var F = hu.get(e);
        if (F !== void 0) {
          var Q = zo,
            Z = e;
          switch (e) {
            case "keypress":
              if (di(n) === 0) break e;
            case "keydown":
            case "keyup":
              Q = Wf;
              break;
            case "focusin":
              (Z = "focus"), (Q = To);
              break;
            case "focusout":
              (Z = "blur"), (Q = To);
              break;
            case "beforeblur":
            case "afterblur":
              Q = To;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Q = $s;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Q = Df;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Q = Kf;
              break;
            case uu:
            case cu:
            case du:
              Q = If;
              break;
            case fu:
              Q = Jf;
              break;
            case "scroll":
              Q = zf;
              break;
            case "wheel":
              Q = Zf;
              break;
            case "copy":
            case "cut":
            case "paste":
              Q = bf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Q = Ws;
          }
          var q = (t & 4) !== 0,
            Xe = !q && e === "scroll",
            j = q ? (F !== null ? F + "Capture" : null) : F;
          q = [];
          for (var S = _, R; S !== null; ) {
            R = S;
            var $ = R.stateNode;
            if (
              (R.tag === 5 &&
                $ !== null &&
                ((R = $),
                j !== null &&
                  (($ = D(S, j)), $ != null && q.push(Sl(S, $, R)))),
              Xe)
            )
              break;
            S = S.return;
          }
          0 < q.length &&
            ((F = new Q(F, Z, null, n, b)), U.push({ event: F, listeners: q }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((F = e === "mouseover" || e === "pointerover"),
            (Q = e === "mouseout" || e === "pointerout"),
            F &&
              n !== Nr &&
              (Z = n.relatedTarget || n.fromElement) &&
              (lr(Z) || Z[dn]))
          )
            break e;
          if (
            (Q || F) &&
            ((F =
              b.window === b
                ? b
                : (F = b.ownerDocument)
                  ? F.defaultView || F.parentWindow
                  : window),
            Q
              ? ((Z = n.relatedTarget || n.toElement),
                (Q = _),
                (Z = Z ? lr(Z) : null),
                Z !== null &&
                  ((Xe = Pe(Z)), Z !== Xe || (Z.tag !== 5 && Z.tag !== 6)) &&
                  (Z = null))
              : ((Q = null), (Z = _)),
            Q !== Z)
          ) {
            if (
              ((q = $s),
              ($ = "onMouseLeave"),
              (j = "onMouseEnter"),
              (S = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((q = Ws),
                ($ = "onPointerLeave"),
                (j = "onPointerEnter"),
                (S = "pointer")),
              (Xe = Q == null ? F : Dr(Q)),
              (R = Z == null ? F : Dr(Z)),
              (F = new q($, S + "leave", Q, n, b)),
              (F.target = Xe),
              (F.relatedTarget = R),
              ($ = null),
              lr(b) === _ &&
                ((q = new q(j, S + "enter", Z, n, b)),
                (q.target = R),
                (q.relatedTarget = Xe),
                ($ = q)),
              (Xe = $),
              Q && Z)
            )
              t: {
                for (q = Q, j = Z, S = 0, R = q; R; R = zr(R)) S++;
                for (R = 0, $ = j; $; $ = zr($)) R++;
                for (; 0 < S - R; ) (q = zr(q)), S--;
                for (; 0 < R - S; ) (j = zr(j)), R--;
                for (; S--; ) {
                  if (q === j || (j !== null && q === j.alternate)) break t;
                  (q = zr(q)), (j = zr(j));
                }
                q = null;
              }
            else q = null;
            Q !== null && yu(U, F, Q, q, !1),
              Z !== null && Xe !== null && yu(U, Xe, Z, q, !0);
          }
        }
        e: {
          if (
            ((F = _ ? Dr(_) : window),
            (Q = F.nodeName && F.nodeName.toLowerCase()),
            Q === "select" || (Q === "input" && F.type === "file"))
          )
            var ee = ih;
          else if (Xs(F))
            if (qs) ee = uh;
            else {
              ee = ah;
              var ue = oh;
            }
          else
            (Q = F.nodeName) &&
              Q.toLowerCase() === "input" &&
              (F.type === "checkbox" || F.type === "radio") &&
              (ee = sh);
          if (ee && (ee = ee(e, _))) {
            Zs(U, ee, n, b);
            break e;
          }
          ue && ue(e, F, _),
            e === "focusout" &&
              (ue = F._wrapperState) &&
              ue.controlled &&
              F.type === "number" &&
              Zr(F, "number", F.value);
        }
        switch (((ue = _ ? Dr(_) : window), e)) {
          case "focusin":
            (Xs(ue) || ue.contentEditable === "true") &&
              ((Lr = ue), (Vo = _), (yl = null));
            break;
          case "focusout":
            yl = Vo = Lr = null;
            break;
          case "mousedown":
            Uo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Uo = !1), au(U, n, b);
            break;
          case "selectionchange":
            if (fh) break;
          case "keydown":
          case "keyup":
            au(U, n, b);
        }
        var ce;
        if (Io)
          e: {
            switch (e) {
              case "compositionstart":
                var fe = "onCompositionStart";
                break e;
              case "compositionend":
                fe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                fe = "onCompositionUpdate";
                break e;
            }
            fe = void 0;
          }
        else
          Rr
            ? Ys(e, n) && (fe = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (fe = "onCompositionStart");
        fe &&
          (Gs &&
            n.locale !== "ko" &&
            (Rr || fe !== "onCompositionStart"
              ? fe === "onCompositionEnd" && Rr && (ce = Us())
              : ((_n = b),
                (Mo = "value" in _n ? _n.value : _n.textContent),
                (Rr = !0))),
          (ue = yi(_, fe)),
          0 < ue.length &&
            ((fe = new Bs(fe, e, null, n, b)),
            U.push({ event: fe, listeners: ue }),
            ce
              ? (fe.data = ce)
              : ((ce = Js(n)), ce !== null && (fe.data = ce)))),
          (ce = eh ? th(e, n) : nh(e, n)) &&
            ((_ = yi(_, "onBeforeInput")),
            0 < _.length &&
              ((b = new Bs("onBeforeInput", "beforeinput", null, n, b)),
              U.push({ event: b, listeners: _ }),
              (b.data = ce)));
      }
      vu(U, t);
    });
  }
  function Sl(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function yi(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var i = e,
        s = i.stateNode;
      i.tag === 5 &&
        s !== null &&
        ((i = s),
        (s = D(e, n)),
        s != null && r.unshift(Sl(e, s, i)),
        (s = D(e, t)),
        s != null && r.push(Sl(e, s, i))),
        (e = e.return);
    }
    return r;
  }
  function zr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function yu(e, t, n, r, i) {
    for (var s = t._reactName, f = []; n !== null && n !== r; ) {
      var y = n,
        x = y.alternate,
        _ = y.stateNode;
      if (x !== null && x === r) break;
      y.tag === 5 &&
        _ !== null &&
        ((y = _),
        i
          ? ((x = D(n, s)), x != null && f.unshift(Sl(n, x, y)))
          : i || ((x = D(n, s)), x != null && f.push(Sl(n, x, y)))),
        (n = n.return);
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var vh = /\r\n?/g,
    gh = /\u0000|\uFFFD/g;
  function wu(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        vh,
        `
`,
      )
      .replace(gh, "");
  }
  function wi(e, t, n) {
    if (((t = wu(t)), wu(e) !== t && n)) throw Error(a(425));
  }
  function xi() {}
  var Qo = null,
    Ko = null;
  function Yo(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Jo = typeof setTimeout == "function" ? setTimeout : void 0,
    yh = typeof clearTimeout == "function" ? clearTimeout : void 0,
    xu = typeof Promise == "function" ? Promise : void 0,
    wh =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof xu < "u"
          ? function (e) {
              return xu.resolve(null).then(e).catch(xh);
            }
          : Jo;
  function xh(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Xo(e, t) {
    var n = t,
      r = 0;
    do {
      var i = n.nextSibling;
      if ((e.removeChild(n), i && i.nodeType === 8))
        if (((n = i.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(i), dl(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = i;
    } while (n);
    dl(t);
  }
  function Tn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Su(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var _r = Math.random().toString(36).slice(2),
    nn = "__reactFiber$" + _r,
    El = "__reactProps$" + _r,
    dn = "__reactContainer$" + _r,
    Zo = "__reactEvents$" + _r,
    Sh = "__reactListeners$" + _r,
    Eh = "__reactHandles$" + _r;
  function lr(e) {
    var t = e[nn];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[dn] || n[nn])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Su(e); e !== null; ) {
            if ((n = e[nn])) return n;
            e = Su(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function kl(e) {
    return (
      (e = e[nn] || e[dn]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Dr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(a(33));
  }
  function Si(e) {
    return e[El] || null;
  }
  var qo = [],
    Tr = -1;
  function On(e) {
    return { current: e };
  }
  function He(e) {
    0 > Tr || ((e.current = qo[Tr]), (qo[Tr] = null), Tr--);
  }
  function Ae(e, t) {
    Tr++, (qo[Tr] = e.current), (e.current = t);
  }
  var In = {},
    dt = On(In),
    Et = On(!1),
    ir = In;
  function Or(e, t) {
    var n = e.type.contextTypes;
    if (!n) return In;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
      s;
    for (s in n) i[s] = t[s];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      i
    );
  }
  function kt(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Ei() {
    He(Et), He(dt);
  }
  function Eu(e, t, n) {
    if (dt.current !== In) throw Error(a(168));
    Ae(dt, t), Ae(Et, n);
  }
  function ku(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var i in r) if (!(i in t)) throw Error(a(108, Ie(e) || "Unknown", i));
    return W({}, n, r);
  }
  function ki(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        In),
      (ir = dt.current),
      Ae(dt, e),
      Ae(Et, Et.current),
      !0
    );
  }
  function Cu(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(a(169));
    n
      ? ((e = ku(e, t, ir)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        He(Et),
        He(dt),
        Ae(dt, e))
      : He(Et),
      Ae(Et, n);
  }
  var fn = null,
    Ci = !1,
    ea = !1;
  function Nu(e) {
    fn === null ? (fn = [e]) : fn.push(e);
  }
  function kh(e) {
    (Ci = !0), Nu(e);
  }
  function Fn() {
    if (!ea && fn !== null) {
      ea = !0;
      var e = 0,
        t = Te;
      try {
        var n = fn;
        for (Te = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (fn = null), (Ci = !1);
      } catch (i) {
        throw (fn !== null && (fn = fn.slice(e + 1)), tn(Qt, Fn), i);
      } finally {
        (Te = t), (ea = !1);
      }
    }
    return null;
  }
  var Ir = [],
    Fr = 0,
    Ni = null,
    ji = 0,
    Ot = [],
    It = 0,
    or = null,
    hn = 1,
    mn = "";
  function ar(e, t) {
    (Ir[Fr++] = ji), (Ir[Fr++] = Ni), (Ni = e), (ji = t);
  }
  function ju(e, t, n) {
    (Ot[It++] = hn), (Ot[It++] = mn), (Ot[It++] = or), (or = e);
    var r = hn;
    e = mn;
    var i = 32 - it(r) - 1;
    (r &= ~(1 << i)), (n += 1);
    var s = 32 - it(t) + i;
    if (30 < s) {
      var f = i - (i % 5);
      (s = (r & ((1 << f) - 1)).toString(32)),
        (r >>= f),
        (i -= f),
        (hn = (1 << (32 - it(t) + i)) | (n << i) | r),
        (mn = s + e);
    } else (hn = (1 << s) | (n << i) | r), (mn = e);
  }
  function ta(e) {
    e.return !== null && (ar(e, 1), ju(e, 1, 0));
  }
  function na(e) {
    for (; e === Ni; )
      (Ni = Ir[--Fr]), (Ir[Fr] = null), (ji = Ir[--Fr]), (Ir[Fr] = null);
    for (; e === or; )
      (or = Ot[--It]),
        (Ot[It] = null),
        (mn = Ot[--It]),
        (Ot[It] = null),
        (hn = Ot[--It]),
        (Ot[It] = null);
  }
  var Mt = null,
    zt = null,
    $e = !1,
    Jt = null;
  function Pu(e, t) {
    var n = Vt(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function Ru(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (Mt = e), (zt = Tn(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Mt = e), (zt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = or !== null ? { id: hn, overflow: mn } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = Vt(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (Mt = e),
              (zt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function ra(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function la(e) {
    if ($e) {
      var t = zt;
      if (t) {
        var n = t;
        if (!Ru(e, t)) {
          if (ra(e)) throw Error(a(418));
          t = Tn(n.nextSibling);
          var r = Mt;
          t && Ru(e, t)
            ? Pu(r, n)
            : ((e.flags = (e.flags & -4097) | 2), ($e = !1), (Mt = e));
        }
      } else {
        if (ra(e)) throw Error(a(418));
        (e.flags = (e.flags & -4097) | 2), ($e = !1), (Mt = e);
      }
    }
  }
  function Lu(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    Mt = e;
  }
  function Pi(e) {
    if (e !== Mt) return !1;
    if (!$e) return Lu(e), ($e = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Yo(e.type, e.memoizedProps))),
      t && (t = zt))
    ) {
      if (ra(e)) throw (Mu(), Error(a(418)));
      for (; t; ) Pu(e, t), (t = Tn(t.nextSibling));
    }
    if ((Lu(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(a(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                zt = Tn(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        zt = null;
      }
    } else zt = Mt ? Tn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Mu() {
    for (var e = zt; e; ) e = Tn(e.nextSibling);
  }
  function br() {
    (zt = Mt = null), ($e = !1);
  }
  function ia(e) {
    Jt === null ? (Jt = [e]) : Jt.push(e);
  }
  var Ch = ie.ReactCurrentBatchConfig;
  function Cl(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(a(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(a(147, e));
        var i = r,
          s = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === s
          ? t.ref
          : ((t = function (f) {
              var y = i.refs;
              f === null ? delete y[s] : (y[s] = f);
            }),
            (t._stringRef = s),
            t);
      }
      if (typeof e != "string") throw Error(a(284));
      if (!n._owner) throw Error(a(290, e));
    }
    return e;
  }
  function Ri(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        a(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e,
        ),
      ))
    );
  }
  function zu(e) {
    var t = e._init;
    return t(e._payload);
  }
  function _u(e) {
    function t(j, S) {
      if (e) {
        var R = j.deletions;
        R === null ? ((j.deletions = [S]), (j.flags |= 16)) : R.push(S);
      }
    }
    function n(j, S) {
      if (!e) return null;
      for (; S !== null; ) t(j, S), (S = S.sibling);
      return null;
    }
    function r(j, S) {
      for (j = new Map(); S !== null; )
        S.key !== null ? j.set(S.key, S) : j.set(S.index, S), (S = S.sibling);
      return j;
    }
    function i(j, S) {
      return (j = Wn(j, S)), (j.index = 0), (j.sibling = null), j;
    }
    function s(j, S, R) {
      return (
        (j.index = R),
        e
          ? ((R = j.alternate),
            R !== null
              ? ((R = R.index), R < S ? ((j.flags |= 2), S) : R)
              : ((j.flags |= 2), S))
          : ((j.flags |= 1048576), S)
      );
    }
    function f(j) {
      return e && j.alternate === null && (j.flags |= 2), j;
    }
    function y(j, S, R, $) {
      return S === null || S.tag !== 6
        ? ((S = Ja(R, j.mode, $)), (S.return = j), S)
        : ((S = i(S, R)), (S.return = j), S);
    }
    function x(j, S, R, $) {
      var ee = R.type;
      return ee === ve
        ? b(j, S, R.props.children, $, R.key)
        : S !== null &&
            (S.elementType === ee ||
              (typeof ee == "object" &&
                ee !== null &&
                ee.$$typeof === ye &&
                zu(ee) === S.type))
          ? (($ = i(S, R.props)), ($.ref = Cl(j, S, R)), ($.return = j), $)
          : (($ = Zi(R.type, R.key, R.props, null, j.mode, $)),
            ($.ref = Cl(j, S, R)),
            ($.return = j),
            $);
    }
    function _(j, S, R, $) {
      return S === null ||
        S.tag !== 4 ||
        S.stateNode.containerInfo !== R.containerInfo ||
        S.stateNode.implementation !== R.implementation
        ? ((S = Xa(R, j.mode, $)), (S.return = j), S)
        : ((S = i(S, R.children || [])), (S.return = j), S);
    }
    function b(j, S, R, $, ee) {
      return S === null || S.tag !== 7
        ? ((S = pr(R, j.mode, $, ee)), (S.return = j), S)
        : ((S = i(S, R)), (S.return = j), S);
    }
    function U(j, S, R) {
      if ((typeof S == "string" && S !== "") || typeof S == "number")
        return (S = Ja("" + S, j.mode, R)), (S.return = j), S;
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case de:
            return (
              (R = Zi(S.type, S.key, S.props, null, j.mode, R)),
              (R.ref = Cl(j, null, S)),
              (R.return = j),
              R
            );
          case z:
            return (S = Xa(S, j.mode, R)), (S.return = j), S;
          case ye:
            var $ = S._init;
            return U(j, $(S._payload), R);
        }
        if (Jn(S) || X(S))
          return (S = pr(S, j.mode, R, null)), (S.return = j), S;
        Ri(j, S);
      }
      return null;
    }
    function F(j, S, R, $) {
      var ee = S !== null ? S.key : null;
      if ((typeof R == "string" && R !== "") || typeof R == "number")
        return ee !== null ? null : y(j, S, "" + R, $);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case de:
            return R.key === ee ? x(j, S, R, $) : null;
          case z:
            return R.key === ee ? _(j, S, R, $) : null;
          case ye:
            return (ee = R._init), F(j, S, ee(R._payload), $);
        }
        if (Jn(R) || X(R)) return ee !== null ? null : b(j, S, R, $, null);
        Ri(j, R);
      }
      return null;
    }
    function Q(j, S, R, $, ee) {
      if ((typeof $ == "string" && $ !== "") || typeof $ == "number")
        return (j = j.get(R) || null), y(S, j, "" + $, ee);
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case de:
            return (
              (j = j.get($.key === null ? R : $.key) || null), x(S, j, $, ee)
            );
          case z:
            return (
              (j = j.get($.key === null ? R : $.key) || null), _(S, j, $, ee)
            );
          case ye:
            var ue = $._init;
            return Q(j, S, R, ue($._payload), ee);
        }
        if (Jn($) || X($)) return (j = j.get(R) || null), b(S, j, $, ee, null);
        Ri(S, $);
      }
      return null;
    }
    function Z(j, S, R, $) {
      for (
        var ee = null, ue = null, ce = S, fe = (S = 0), st = null;
        ce !== null && fe < R.length;
        fe++
      ) {
        ce.index > fe ? ((st = ce), (ce = null)) : (st = ce.sibling);
        var Me = F(j, ce, R[fe], $);
        if (Me === null) {
          ce === null && (ce = st);
          break;
        }
        e && ce && Me.alternate === null && t(j, ce),
          (S = s(Me, S, fe)),
          ue === null ? (ee = Me) : (ue.sibling = Me),
          (ue = Me),
          (ce = st);
      }
      if (fe === R.length) return n(j, ce), $e && ar(j, fe), ee;
      if (ce === null) {
        for (; fe < R.length; fe++)
          (ce = U(j, R[fe], $)),
            ce !== null &&
              ((S = s(ce, S, fe)),
              ue === null ? (ee = ce) : (ue.sibling = ce),
              (ue = ce));
        return $e && ar(j, fe), ee;
      }
      for (ce = r(j, ce); fe < R.length; fe++)
        (st = Q(ce, j, fe, R[fe], $)),
          st !== null &&
            (e &&
              st.alternate !== null &&
              ce.delete(st.key === null ? fe : st.key),
            (S = s(st, S, fe)),
            ue === null ? (ee = st) : (ue.sibling = st),
            (ue = st));
      return (
        e &&
          ce.forEach(function (Gn) {
            return t(j, Gn);
          }),
        $e && ar(j, fe),
        ee
      );
    }
    function q(j, S, R, $) {
      var ee = X(R);
      if (typeof ee != "function") throw Error(a(150));
      if (((R = ee.call(R)), R == null)) throw Error(a(151));
      for (
        var ue = (ee = null), ce = S, fe = (S = 0), st = null, Me = R.next();
        ce !== null && !Me.done;
        fe++, Me = R.next()
      ) {
        ce.index > fe ? ((st = ce), (ce = null)) : (st = ce.sibling);
        var Gn = F(j, ce, Me.value, $);
        if (Gn === null) {
          ce === null && (ce = st);
          break;
        }
        e && ce && Gn.alternate === null && t(j, ce),
          (S = s(Gn, S, fe)),
          ue === null ? (ee = Gn) : (ue.sibling = Gn),
          (ue = Gn),
          (ce = st);
      }
      if (Me.done) return n(j, ce), $e && ar(j, fe), ee;
      if (ce === null) {
        for (; !Me.done; fe++, Me = R.next())
          (Me = U(j, Me.value, $)),
            Me !== null &&
              ((S = s(Me, S, fe)),
              ue === null ? (ee = Me) : (ue.sibling = Me),
              (ue = Me));
        return $e && ar(j, fe), ee;
      }
      for (ce = r(j, ce); !Me.done; fe++, Me = R.next())
        (Me = Q(ce, j, fe, Me.value, $)),
          Me !== null &&
            (e &&
              Me.alternate !== null &&
              ce.delete(Me.key === null ? fe : Me.key),
            (S = s(Me, S, fe)),
            ue === null ? (ee = Me) : (ue.sibling = Me),
            (ue = Me));
      return (
        e &&
          ce.forEach(function (rm) {
            return t(j, rm);
          }),
        $e && ar(j, fe),
        ee
      );
    }
    function Xe(j, S, R, $) {
      if (
        (typeof R == "object" &&
          R !== null &&
          R.type === ve &&
          R.key === null &&
          (R = R.props.children),
        typeof R == "object" && R !== null)
      ) {
        switch (R.$$typeof) {
          case de:
            e: {
              for (var ee = R.key, ue = S; ue !== null; ) {
                if (ue.key === ee) {
                  if (((ee = R.type), ee === ve)) {
                    if (ue.tag === 7) {
                      n(j, ue.sibling),
                        (S = i(ue, R.props.children)),
                        (S.return = j),
                        (j = S);
                      break e;
                    }
                  } else if (
                    ue.elementType === ee ||
                    (typeof ee == "object" &&
                      ee !== null &&
                      ee.$$typeof === ye &&
                      zu(ee) === ue.type)
                  ) {
                    n(j, ue.sibling),
                      (S = i(ue, R.props)),
                      (S.ref = Cl(j, ue, R)),
                      (S.return = j),
                      (j = S);
                    break e;
                  }
                  n(j, ue);
                  break;
                } else t(j, ue);
                ue = ue.sibling;
              }
              R.type === ve
                ? ((S = pr(R.props.children, j.mode, $, R.key)),
                  (S.return = j),
                  (j = S))
                : (($ = Zi(R.type, R.key, R.props, null, j.mode, $)),
                  ($.ref = Cl(j, S, R)),
                  ($.return = j),
                  (j = $));
            }
            return f(j);
          case z:
            e: {
              for (ue = R.key; S !== null; ) {
                if (S.key === ue)
                  if (
                    S.tag === 4 &&
                    S.stateNode.containerInfo === R.containerInfo &&
                    S.stateNode.implementation === R.implementation
                  ) {
                    n(j, S.sibling),
                      (S = i(S, R.children || [])),
                      (S.return = j),
                      (j = S);
                    break e;
                  } else {
                    n(j, S);
                    break;
                  }
                else t(j, S);
                S = S.sibling;
              }
              (S = Xa(R, j.mode, $)), (S.return = j), (j = S);
            }
            return f(j);
          case ye:
            return (ue = R._init), Xe(j, S, ue(R._payload), $);
        }
        if (Jn(R)) return Z(j, S, R, $);
        if (X(R)) return q(j, S, R, $);
        Ri(j, R);
      }
      return (typeof R == "string" && R !== "") || typeof R == "number"
        ? ((R = "" + R),
          S !== null && S.tag === 6
            ? (n(j, S.sibling), (S = i(S, R)), (S.return = j), (j = S))
            : (n(j, S), (S = Ja(R, j.mode, $)), (S.return = j), (j = S)),
          f(j))
        : n(j, S);
    }
    return Xe;
  }
  var Ar = _u(!0),
    Du = _u(!1),
    Li = On(null),
    Mi = null,
    Vr = null,
    oa = null;
  function aa() {
    oa = Vr = Mi = null;
  }
  function sa(e) {
    var t = Li.current;
    He(Li), (e._currentValue = t);
  }
  function ua(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Ur(e, t) {
    (Mi = e),
      (oa = Vr = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Ct = !0), (e.firstContext = null));
  }
  function Ft(e) {
    var t = e._currentValue;
    if (oa !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Vr === null)) {
        if (Mi === null) throw Error(a(308));
        (Vr = e), (Mi.dependencies = { lanes: 0, firstContext: e });
      } else Vr = Vr.next = e;
    return t;
  }
  var sr = null;
  function ca(e) {
    sr === null ? (sr = [e]) : sr.push(e);
  }
  function Tu(e, t, n, r) {
    var i = t.interleaved;
    return (
      i === null ? ((n.next = n), ca(t)) : ((n.next = i.next), (i.next = n)),
      (t.interleaved = n),
      pn(e, r)
    );
  }
  function pn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var bn = !1;
  function da(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Ou(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function vn(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function An(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (Le & 2) !== 0)) {
      var i = r.pending;
      return (
        i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
        (r.pending = t),
        pn(e, n)
      );
    }
    return (
      (i = r.interleaved),
      i === null ? ((t.next = t), ca(r)) : ((t.next = i.next), (i.next = t)),
      (r.interleaved = t),
      pn(e, n)
    );
  }
  function zi(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), No(e, n);
    }
  }
  function Iu(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var i = null,
        s = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var f = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          s === null ? (i = s = f) : (s = s.next = f), (n = n.next);
        } while (n !== null);
        s === null ? (i = s = t) : (s = s.next = t);
      } else i = s = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: s,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function _i(e, t, n, r) {
    var i = e.updateQueue;
    bn = !1;
    var s = i.firstBaseUpdate,
      f = i.lastBaseUpdate,
      y = i.shared.pending;
    if (y !== null) {
      i.shared.pending = null;
      var x = y,
        _ = x.next;
      (x.next = null), f === null ? (s = _) : (f.next = _), (f = x);
      var b = e.alternate;
      b !== null &&
        ((b = b.updateQueue),
        (y = b.lastBaseUpdate),
        y !== f &&
          (y === null ? (b.firstBaseUpdate = _) : (y.next = _),
          (b.lastBaseUpdate = x)));
    }
    if (s !== null) {
      var U = i.baseState;
      (f = 0), (b = _ = x = null), (y = s);
      do {
        var F = y.lane,
          Q = y.eventTime;
        if ((r & F) === F) {
          b !== null &&
            (b = b.next =
              {
                eventTime: Q,
                lane: 0,
                tag: y.tag,
                payload: y.payload,
                callback: y.callback,
                next: null,
              });
          e: {
            var Z = e,
              q = y;
            switch (((F = t), (Q = n), q.tag)) {
              case 1:
                if (((Z = q.payload), typeof Z == "function")) {
                  U = Z.call(Q, U, F);
                  break e;
                }
                U = Z;
                break e;
              case 3:
                Z.flags = (Z.flags & -65537) | 128;
              case 0:
                if (
                  ((Z = q.payload),
                  (F = typeof Z == "function" ? Z.call(Q, U, F) : Z),
                  F == null)
                )
                  break e;
                U = W({}, U, F);
                break e;
              case 2:
                bn = !0;
            }
          }
          y.callback !== null &&
            y.lane !== 0 &&
            ((e.flags |= 64),
            (F = i.effects),
            F === null ? (i.effects = [y]) : F.push(y));
        } else
          (Q = {
            eventTime: Q,
            lane: F,
            tag: y.tag,
            payload: y.payload,
            callback: y.callback,
            next: null,
          }),
            b === null ? ((_ = b = Q), (x = U)) : (b = b.next = Q),
            (f |= F);
        if (((y = y.next), y === null)) {
          if (((y = i.shared.pending), y === null)) break;
          (F = y),
            (y = F.next),
            (F.next = null),
            (i.lastBaseUpdate = F),
            (i.shared.pending = null);
        }
      } while (!0);
      if (
        (b === null && (x = U),
        (i.baseState = x),
        (i.firstBaseUpdate = _),
        (i.lastBaseUpdate = b),
        (t = i.shared.interleaved),
        t !== null)
      ) {
        i = t;
        do (f |= i.lane), (i = i.next);
        while (i !== t);
      } else s === null && (i.shared.lanes = 0);
      (dr |= f), (e.lanes = f), (e.memoizedState = U);
    }
  }
  function Fu(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          i = r.callback;
        if (i !== null) {
          if (((r.callback = null), (r = n), typeof i != "function"))
            throw Error(a(191, i));
          i.call(r);
        }
      }
  }
  var Nl = {},
    rn = On(Nl),
    jl = On(Nl),
    Pl = On(Nl);
  function ur(e) {
    if (e === Nl) throw Error(a(174));
    return e;
  }
  function fa(e, t) {
    switch ((Ae(Pl, t), Ae(jl, e), Ae(rn, Nl), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Rt(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Rt(t, e));
    }
    He(rn), Ae(rn, t);
  }
  function Hr() {
    He(rn), He(jl), He(Pl);
  }
  function bu(e) {
    ur(Pl.current);
    var t = ur(rn.current),
      n = Rt(t, e.type);
    t !== n && (Ae(jl, e), Ae(rn, n));
  }
  function ha(e) {
    jl.current === e && (He(rn), He(jl));
  }
  var Be = On(0);
  function Di(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var ma = [];
  function pa() {
    for (var e = 0; e < ma.length; e++)
      ma[e]._workInProgressVersionPrimary = null;
    ma.length = 0;
  }
  var Ti = ie.ReactCurrentDispatcher,
    va = ie.ReactCurrentBatchConfig,
    cr = 0,
    We = null,
    nt = null,
    ot = null,
    Oi = !1,
    Rl = !1,
    Ll = 0,
    Nh = 0;
  function ft() {
    throw Error(a(321));
  }
  function ga(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Yt(e[n], t[n])) return !1;
    return !0;
  }
  function ya(e, t, n, r, i, s) {
    if (
      ((cr = s),
      (We = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Ti.current = e === null || e.memoizedState === null ? Lh : Mh),
      (e = n(r, i)),
      Rl)
    ) {
      s = 0;
      do {
        if (((Rl = !1), (Ll = 0), 25 <= s)) throw Error(a(301));
        (s += 1),
          (ot = nt = null),
          (t.updateQueue = null),
          (Ti.current = zh),
          (e = n(r, i));
      } while (Rl);
    }
    if (
      ((Ti.current = bi),
      (t = nt !== null && nt.next !== null),
      (cr = 0),
      (ot = nt = We = null),
      (Oi = !1),
      t)
    )
      throw Error(a(300));
    return e;
  }
  function wa() {
    var e = Ll !== 0;
    return (Ll = 0), e;
  }
  function ln() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return ot === null ? (We.memoizedState = ot = e) : (ot = ot.next = e), ot;
  }
  function bt() {
    if (nt === null) {
      var e = We.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = nt.next;
    var t = ot === null ? We.memoizedState : ot.next;
    if (t !== null) (ot = t), (nt = e);
    else {
      if (e === null) throw Error(a(310));
      (nt = e),
        (e = {
          memoizedState: nt.memoizedState,
          baseState: nt.baseState,
          baseQueue: nt.baseQueue,
          queue: nt.queue,
          next: null,
        }),
        ot === null ? (We.memoizedState = ot = e) : (ot = ot.next = e);
    }
    return ot;
  }
  function Ml(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function xa(e) {
    var t = bt(),
      n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var r = nt,
      i = r.baseQueue,
      s = n.pending;
    if (s !== null) {
      if (i !== null) {
        var f = i.next;
        (i.next = s.next), (s.next = f);
      }
      (r.baseQueue = i = s), (n.pending = null);
    }
    if (i !== null) {
      (s = i.next), (r = r.baseState);
      var y = (f = null),
        x = null,
        _ = s;
      do {
        var b = _.lane;
        if ((cr & b) === b)
          x !== null &&
            (x = x.next =
              {
                lane: 0,
                action: _.action,
                hasEagerState: _.hasEagerState,
                eagerState: _.eagerState,
                next: null,
              }),
            (r = _.hasEagerState ? _.eagerState : e(r, _.action));
        else {
          var U = {
            lane: b,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null,
          };
          x === null ? ((y = x = U), (f = r)) : (x = x.next = U),
            (We.lanes |= b),
            (dr |= b);
        }
        _ = _.next;
      } while (_ !== null && _ !== s);
      x === null ? (f = r) : (x.next = y),
        Yt(r, t.memoizedState) || (Ct = !0),
        (t.memoizedState = r),
        (t.baseState = f),
        (t.baseQueue = x),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      i = e;
      do (s = i.lane), (We.lanes |= s), (dr |= s), (i = i.next);
      while (i !== e);
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Sa(e) {
    var t = bt(),
      n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      i = n.pending,
      s = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var f = (i = i.next);
      do (s = e(s, f.action)), (f = f.next);
      while (f !== i);
      Yt(s, t.memoizedState) || (Ct = !0),
        (t.memoizedState = s),
        t.baseQueue === null && (t.baseState = s),
        (n.lastRenderedState = s);
    }
    return [s, r];
  }
  function Au() {}
  function Vu(e, t) {
    var n = We,
      r = bt(),
      i = t(),
      s = !Yt(r.memoizedState, i);
    if (
      (s && ((r.memoizedState = i), (Ct = !0)),
      (r = r.queue),
      Ea($u.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || s || (ot !== null && ot.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        zl(9, Hu.bind(null, n, r, i, t), void 0, null),
        at === null)
      )
        throw Error(a(349));
      (cr & 30) !== 0 || Uu(n, t, i);
    }
    return i;
  }
  function Uu(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = We.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (We.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function Hu(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), Bu(t) && Wu(e);
  }
  function $u(e, t, n) {
    return n(function () {
      Bu(t) && Wu(e);
    });
  }
  function Bu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Yt(e, n);
    } catch {
      return !0;
    }
  }
  function Wu(e) {
    var t = pn(e, 1);
    t !== null && en(t, e, 1, -1);
  }
  function Gu(e) {
    var t = ln();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ml,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Rh.bind(null, We, e)),
      [t.memoizedState, e]
    );
  }
  function zl(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = We.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (We.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function Qu() {
    return bt().memoizedState;
  }
  function Ii(e, t, n, r) {
    var i = ln();
    (We.flags |= e),
      (i.memoizedState = zl(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function Fi(e, t, n, r) {
    var i = bt();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (nt !== null) {
      var f = nt.memoizedState;
      if (((s = f.destroy), r !== null && ga(r, f.deps))) {
        i.memoizedState = zl(t, n, s, r);
        return;
      }
    }
    (We.flags |= e), (i.memoizedState = zl(1 | t, n, s, r));
  }
  function Ku(e, t) {
    return Ii(8390656, 8, e, t);
  }
  function Ea(e, t) {
    return Fi(2048, 8, e, t);
  }
  function Yu(e, t) {
    return Fi(4, 2, e, t);
  }
  function Ju(e, t) {
    return Fi(4, 4, e, t);
  }
  function Xu(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Zu(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), Fi(4, 4, Xu.bind(null, t, e), n)
    );
  }
  function ka() {}
  function qu(e, t) {
    var n = bt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ga(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function ec(e, t) {
    var n = bt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ga(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function tc(e, t, n) {
    return (cr & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Ct = !0)), (e.memoizedState = n))
      : (Yt(n, t) ||
          ((n = zs()), (We.lanes |= n), (dr |= n), (e.baseState = !0)),
        t);
  }
  function jh(e, t) {
    var n = Te;
    (Te = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = va.transition;
    va.transition = {};
    try {
      e(!1), t();
    } finally {
      (Te = n), (va.transition = r);
    }
  }
  function nc() {
    return bt().memoizedState;
  }
  function Ph(e, t, n) {
    var r = $n(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      rc(e))
    )
      lc(t, n);
    else if (((n = Tu(e, t, n, r)), n !== null)) {
      var i = gt();
      en(n, e, r, i), ic(n, t, r);
    }
  }
  function Rh(e, t, n) {
    var r = $n(e),
      i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (rc(e)) lc(t, i);
    else {
      var s = e.alternate;
      if (
        e.lanes === 0 &&
        (s === null || s.lanes === 0) &&
        ((s = t.lastRenderedReducer), s !== null)
      )
        try {
          var f = t.lastRenderedState,
            y = s(f, n);
          if (((i.hasEagerState = !0), (i.eagerState = y), Yt(y, f))) {
            var x = t.interleaved;
            x === null
              ? ((i.next = i), ca(t))
              : ((i.next = x.next), (x.next = i)),
              (t.interleaved = i);
            return;
          }
        } catch {
        } finally {
        }
      (n = Tu(e, t, i, r)),
        n !== null && ((i = gt()), en(n, e, r, i), ic(n, t, r));
    }
  }
  function rc(e) {
    var t = e.alternate;
    return e === We || (t !== null && t === We);
  }
  function lc(e, t) {
    Rl = Oi = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function ic(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), No(e, n);
    }
  }
  var bi = {
      readContext: Ft,
      useCallback: ft,
      useContext: ft,
      useEffect: ft,
      useImperativeHandle: ft,
      useInsertionEffect: ft,
      useLayoutEffect: ft,
      useMemo: ft,
      useReducer: ft,
      useRef: ft,
      useState: ft,
      useDebugValue: ft,
      useDeferredValue: ft,
      useTransition: ft,
      useMutableSource: ft,
      useSyncExternalStore: ft,
      useId: ft,
      unstable_isNewReconciler: !1,
    },
    Lh = {
      readContext: Ft,
      useCallback: function (e, t) {
        return (ln().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: Ft,
      useEffect: Ku,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          Ii(4194308, 4, Xu.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return Ii(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Ii(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = ln();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = ln();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = Ph.bind(null, We, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = ln();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Gu,
      useDebugValue: ka,
      useDeferredValue: function (e) {
        return (ln().memoizedState = e);
      },
      useTransition: function () {
        var e = Gu(!1),
          t = e[0];
        return (e = jh.bind(null, e[1])), (ln().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = We,
          i = ln();
        if ($e) {
          if (n === void 0) throw Error(a(407));
          n = n();
        } else {
          if (((n = t()), at === null)) throw Error(a(349));
          (cr & 30) !== 0 || Uu(r, t, n);
        }
        i.memoizedState = n;
        var s = { value: n, getSnapshot: t };
        return (
          (i.queue = s),
          Ku($u.bind(null, r, s, e), [e]),
          (r.flags |= 2048),
          zl(9, Hu.bind(null, r, s, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = ln(),
          t = at.identifierPrefix;
        if ($e) {
          var n = mn,
            r = hn;
          (n = (r & ~(1 << (32 - it(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = Ll++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = Nh++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Mh = {
      readContext: Ft,
      useCallback: qu,
      useContext: Ft,
      useEffect: Ea,
      useImperativeHandle: Zu,
      useInsertionEffect: Yu,
      useLayoutEffect: Ju,
      useMemo: ec,
      useReducer: xa,
      useRef: Qu,
      useState: function () {
        return xa(Ml);
      },
      useDebugValue: ka,
      useDeferredValue: function (e) {
        var t = bt();
        return tc(t, nt.memoizedState, e);
      },
      useTransition: function () {
        var e = xa(Ml)[0],
          t = bt().memoizedState;
        return [e, t];
      },
      useMutableSource: Au,
      useSyncExternalStore: Vu,
      useId: nc,
      unstable_isNewReconciler: !1,
    },
    zh = {
      readContext: Ft,
      useCallback: qu,
      useContext: Ft,
      useEffect: Ea,
      useImperativeHandle: Zu,
      useInsertionEffect: Yu,
      useLayoutEffect: Ju,
      useMemo: ec,
      useReducer: Sa,
      useRef: Qu,
      useState: function () {
        return Sa(Ml);
      },
      useDebugValue: ka,
      useDeferredValue: function (e) {
        var t = bt();
        return nt === null ? (t.memoizedState = e) : tc(t, nt.memoizedState, e);
      },
      useTransition: function () {
        var e = Sa(Ml)[0],
          t = bt().memoizedState;
        return [e, t];
      },
      useMutableSource: Au,
      useSyncExternalStore: Vu,
      useId: nc,
      unstable_isNewReconciler: !1,
    };
  function Xt(e, t) {
    if (e && e.defaultProps) {
      (t = W({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Ca(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : W({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Ai = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Pe(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = gt(),
        i = $n(e),
        s = vn(r, i);
      (s.payload = t),
        n != null && (s.callback = n),
        (t = An(e, s, i)),
        t !== null && (en(t, e, i, r), zi(t, e, i));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = gt(),
        i = $n(e),
        s = vn(r, i);
      (s.tag = 1),
        (s.payload = t),
        n != null && (s.callback = n),
        (t = An(e, s, i)),
        t !== null && (en(t, e, i, r), zi(t, e, i));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = gt(),
        r = $n(e),
        i = vn(n, r);
      (i.tag = 2),
        t != null && (i.callback = t),
        (t = An(e, i, r)),
        t !== null && (en(t, e, r, n), zi(t, e, r));
    },
  };
  function oc(e, t, n, r, i, s, f) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, s, f)
        : t.prototype && t.prototype.isPureReactComponent
          ? !gl(n, r) || !gl(i, s)
          : !0
    );
  }
  function ac(e, t, n) {
    var r = !1,
      i = In,
      s = t.contextType;
    return (
      typeof s == "object" && s !== null
        ? (s = Ft(s))
        : ((i = kt(t) ? ir : dt.current),
          (r = t.contextTypes),
          (s = (r = r != null) ? Or(e, i) : In)),
      (t = new t(n, s)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Ai),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = i),
        (e.__reactInternalMemoizedMaskedChildContext = s)),
      t
    );
  }
  function sc(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Ai.enqueueReplaceState(t, t.state, null);
  }
  function Na(e, t, n, r) {
    var i = e.stateNode;
    (i.props = n), (i.state = e.memoizedState), (i.refs = {}), da(e);
    var s = t.contextType;
    typeof s == "object" && s !== null
      ? (i.context = Ft(s))
      : ((s = kt(t) ? ir : dt.current), (i.context = Or(e, s))),
      (i.state = e.memoizedState),
      (s = t.getDerivedStateFromProps),
      typeof s == "function" && (Ca(e, t, s, n), (i.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function" ||
        (typeof i.UNSAFE_componentWillMount != "function" &&
          typeof i.componentWillMount != "function") ||
        ((t = i.state),
        typeof i.componentWillMount == "function" && i.componentWillMount(),
        typeof i.UNSAFE_componentWillMount == "function" &&
          i.UNSAFE_componentWillMount(),
        t !== i.state && Ai.enqueueReplaceState(i, i.state, null),
        _i(e, n, i, r),
        (i.state = e.memoizedState)),
      typeof i.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function $r(e, t) {
    try {
      var n = "",
        r = t;
      do (n += Ce(r)), (r = r.return);
      while (r);
      var i = n;
    } catch (s) {
      i =
        `
Error generating stack: ` +
        s.message +
        `
` +
        s.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
  }
  function ja(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Pa(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var _h = typeof WeakMap == "function" ? WeakMap : Map;
  function uc(e, t, n) {
    (n = vn(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        Gi || ((Gi = !0), (Ha = r)), Pa(e, t);
      }),
      n
    );
  }
  function cc(e, t, n) {
    (n = vn(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var i = t.value;
      (n.payload = function () {
        return r(i);
      }),
        (n.callback = function () {
          Pa(e, t);
        });
    }
    var s = e.stateNode;
    return (
      s !== null &&
        typeof s.componentDidCatch == "function" &&
        (n.callback = function () {
          Pa(e, t),
            typeof r != "function" &&
              (Un === null ? (Un = new Set([this])) : Un.add(this));
          var f = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: f !== null ? f : "",
          });
        }),
      n
    );
  }
  function dc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new _h();
      var i = new Set();
      r.set(t, i);
    } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
    i.has(n) || (i.add(n), (e = Gh.bind(null, e, t, n)), t.then(e, e));
  }
  function fc(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function hc(e, t, n, r, i) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = vn(-1, 1)), (t.tag = 2), An(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = i), e);
  }
  var Dh = ie.ReactCurrentOwner,
    Ct = !1;
  function vt(e, t, n, r) {
    t.child = e === null ? Du(t, null, n, r) : Ar(t, e.child, n, r);
  }
  function mc(e, t, n, r, i) {
    n = n.render;
    var s = t.ref;
    return (
      Ur(t, i),
      (r = ya(e, t, n, r, s, i)),
      (n = wa()),
      e !== null && !Ct
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~i),
          gn(e, t, i))
        : ($e && n && ta(t), (t.flags |= 1), vt(e, t, r, i), t.child)
    );
  }
  function pc(e, t, n, r, i) {
    if (e === null) {
      var s = n.type;
      return typeof s == "function" &&
        !Ya(s) &&
        s.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = s), vc(e, t, s, r, i))
        : ((e = Zi(n.type, null, r, t, t.mode, i)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((s = e.child), (e.lanes & i) === 0)) {
      var f = s.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : gl), n(f, r) && e.ref === t.ref)
      )
        return gn(e, t, i);
    }
    return (
      (t.flags |= 1),
      (e = Wn(s, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function vc(e, t, n, r, i) {
    if (e !== null) {
      var s = e.memoizedProps;
      if (gl(s, r) && e.ref === t.ref)
        if (((Ct = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
          (e.flags & 131072) !== 0 && (Ct = !0);
        else return (t.lanes = e.lanes), gn(e, t, i);
    }
    return Ra(e, t, n, r, i);
  }
  function gc(e, t, n) {
    var r = t.pendingProps,
      i = r.children,
      s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if ((t.mode & 1) === 0)
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Ae(Wr, _t),
          (_t |= n);
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = s !== null ? s.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            Ae(Wr, _t),
            (_t |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = s !== null ? s.baseLanes : n),
          Ae(Wr, _t),
          (_t |= r);
      }
    else
      s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
        Ae(Wr, _t),
        (_t |= r);
    return vt(e, t, i, n), t.child;
  }
  function yc(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Ra(e, t, n, r, i) {
    var s = kt(n) ? ir : dt.current;
    return (
      (s = Or(t, s)),
      Ur(t, i),
      (n = ya(e, t, n, r, s, i)),
      (r = wa()),
      e !== null && !Ct
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~i),
          gn(e, t, i))
        : ($e && r && ta(t), (t.flags |= 1), vt(e, t, n, i), t.child)
    );
  }
  function wc(e, t, n, r, i) {
    if (kt(n)) {
      var s = !0;
      ki(t);
    } else s = !1;
    if ((Ur(t, i), t.stateNode === null))
      Ui(e, t), ac(t, n, r), Na(t, n, r, i), (r = !0);
    else if (e === null) {
      var f = t.stateNode,
        y = t.memoizedProps;
      f.props = y;
      var x = f.context,
        _ = n.contextType;
      typeof _ == "object" && _ !== null
        ? (_ = Ft(_))
        : ((_ = kt(n) ? ir : dt.current), (_ = Or(t, _)));
      var b = n.getDerivedStateFromProps,
        U =
          typeof b == "function" ||
          typeof f.getSnapshotBeforeUpdate == "function";
      U ||
        (typeof f.UNSAFE_componentWillReceiveProps != "function" &&
          typeof f.componentWillReceiveProps != "function") ||
        ((y !== r || x !== _) && sc(t, f, r, _)),
        (bn = !1);
      var F = t.memoizedState;
      (f.state = F),
        _i(t, r, f, i),
        (x = t.memoizedState),
        y !== r || F !== x || Et.current || bn
          ? (typeof b == "function" && (Ca(t, n, b, r), (x = t.memoizedState)),
            (y = bn || oc(t, n, y, r, F, x, _))
              ? (U ||
                  (typeof f.UNSAFE_componentWillMount != "function" &&
                    typeof f.componentWillMount != "function") ||
                  (typeof f.componentWillMount == "function" &&
                    f.componentWillMount(),
                  typeof f.UNSAFE_componentWillMount == "function" &&
                    f.UNSAFE_componentWillMount()),
                typeof f.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof f.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = x)),
            (f.props = r),
            (f.state = x),
            (f.context = _),
            (r = y))
          : (typeof f.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1));
    } else {
      (f = t.stateNode),
        Ou(e, t),
        (y = t.memoizedProps),
        (_ = t.type === t.elementType ? y : Xt(t.type, y)),
        (f.props = _),
        (U = t.pendingProps),
        (F = f.context),
        (x = n.contextType),
        typeof x == "object" && x !== null
          ? (x = Ft(x))
          : ((x = kt(n) ? ir : dt.current), (x = Or(t, x)));
      var Q = n.getDerivedStateFromProps;
      (b =
        typeof Q == "function" ||
        typeof f.getSnapshotBeforeUpdate == "function") ||
        (typeof f.UNSAFE_componentWillReceiveProps != "function" &&
          typeof f.componentWillReceiveProps != "function") ||
        ((y !== U || F !== x) && sc(t, f, r, x)),
        (bn = !1),
        (F = t.memoizedState),
        (f.state = F),
        _i(t, r, f, i);
      var Z = t.memoizedState;
      y !== U || F !== Z || Et.current || bn
        ? (typeof Q == "function" && (Ca(t, n, Q, r), (Z = t.memoizedState)),
          (_ = bn || oc(t, n, _, r, F, Z, x) || !1)
            ? (b ||
                (typeof f.UNSAFE_componentWillUpdate != "function" &&
                  typeof f.componentWillUpdate != "function") ||
                (typeof f.componentWillUpdate == "function" &&
                  f.componentWillUpdate(r, Z, x),
                typeof f.UNSAFE_componentWillUpdate == "function" &&
                  f.UNSAFE_componentWillUpdate(r, Z, x)),
              typeof f.componentDidUpdate == "function" && (t.flags |= 4),
              typeof f.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof f.componentDidUpdate != "function" ||
                (y === e.memoizedProps && F === e.memoizedState) ||
                (t.flags |= 4),
              typeof f.getSnapshotBeforeUpdate != "function" ||
                (y === e.memoizedProps && F === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = Z)),
          (f.props = r),
          (f.state = Z),
          (f.context = x),
          (r = _))
        : (typeof f.componentDidUpdate != "function" ||
            (y === e.memoizedProps && F === e.memoizedState) ||
            (t.flags |= 4),
          typeof f.getSnapshotBeforeUpdate != "function" ||
            (y === e.memoizedProps && F === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return La(e, t, n, r, s, i);
  }
  function La(e, t, n, r, i, s) {
    yc(e, t);
    var f = (t.flags & 128) !== 0;
    if (!r && !f) return i && Cu(t, n, !1), gn(e, t, s);
    (r = t.stateNode), (Dh.current = t);
    var y =
      f && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && f
        ? ((t.child = Ar(t, e.child, null, s)), (t.child = Ar(t, null, y, s)))
        : vt(e, t, y, s),
      (t.memoizedState = r.state),
      i && Cu(t, n, !0),
      t.child
    );
  }
  function xc(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Eu(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Eu(e, t.context, !1),
      fa(e, t.containerInfo);
  }
  function Sc(e, t, n, r, i) {
    return br(), ia(i), (t.flags |= 256), vt(e, t, n, r), t.child;
  }
  var Ma = { dehydrated: null, treeContext: null, retryLane: 0 };
  function za(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Ec(e, t, n) {
    var r = t.pendingProps,
      i = Be.current,
      s = !1,
      f = (t.flags & 128) !== 0,
      y;
    if (
      ((y = f) ||
        (y = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
      y
        ? ((s = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (i |= 1),
      Ae(Be, i & 1),
      e === null)
    )
      return (
        la(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((f = r.children),
            (e = r.fallback),
            s
              ? ((r = t.mode),
                (s = t.child),
                (f = { mode: "hidden", children: f }),
                (r & 1) === 0 && s !== null
                  ? ((s.childLanes = 0), (s.pendingProps = f))
                  : (s = qi(f, r, 0, null)),
                (e = pr(e, r, n, null)),
                (s.return = t),
                (e.return = t),
                (s.sibling = e),
                (t.child = s),
                (t.child.memoizedState = za(n)),
                (t.memoizedState = Ma),
                e)
              : _a(t, f))
      );
    if (((i = e.memoizedState), i !== null && ((y = i.dehydrated), y !== null)))
      return Th(e, t, f, r, y, i, n);
    if (s) {
      (s = r.fallback), (f = t.mode), (i = e.child), (y = i.sibling);
      var x = { mode: "hidden", children: r.children };
      return (
        (f & 1) === 0 && t.child !== i
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = x),
            (t.deletions = null))
          : ((r = Wn(i, x)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
        y !== null ? (s = Wn(y, s)) : ((s = pr(s, f, n, null)), (s.flags |= 2)),
        (s.return = t),
        (r.return = t),
        (r.sibling = s),
        (t.child = r),
        (r = s),
        (s = t.child),
        (f = e.child.memoizedState),
        (f =
          f === null
            ? za(n)
            : {
                baseLanes: f.baseLanes | n,
                cachePool: null,
                transitions: f.transitions,
              }),
        (s.memoizedState = f),
        (s.childLanes = e.childLanes & ~n),
        (t.memoizedState = Ma),
        r
      );
    }
    return (
      (s = e.child),
      (e = s.sibling),
      (r = Wn(s, { mode: "visible", children: r.children })),
      (t.mode & 1) === 0 && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function _a(e, t) {
    return (
      (t = qi({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Vi(e, t, n, r) {
    return (
      r !== null && ia(r),
      Ar(t, e.child, null, n),
      (e = _a(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Th(e, t, n, r, i, s, f) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = ja(Error(a(422)))), Vi(e, t, f, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((s = r.fallback),
            (i = t.mode),
            (r = qi({ mode: "visible", children: r.children }, i, 0, null)),
            (s = pr(s, i, f, null)),
            (s.flags |= 2),
            (r.return = t),
            (s.return = t),
            (r.sibling = s),
            (t.child = r),
            (t.mode & 1) !== 0 && Ar(t, e.child, null, f),
            (t.child.memoizedState = za(f)),
            (t.memoizedState = Ma),
            s);
    if ((t.mode & 1) === 0) return Vi(e, t, f, null);
    if (i.data === "$!") {
      if (((r = i.nextSibling && i.nextSibling.dataset), r)) var y = r.dgst;
      return (
        (r = y), (s = Error(a(419))), (r = ja(s, r, void 0)), Vi(e, t, f, r)
      );
    }
    if (((y = (f & e.childLanes) !== 0), Ct || y)) {
      if (((r = at), r !== null)) {
        switch (f & -f) {
          case 4:
            i = 2;
            break;
          case 16:
            i = 8;
            break;
          case 64:
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
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            i = 32;
            break;
          case 536870912:
            i = 268435456;
            break;
          default:
            i = 0;
        }
        (i = (i & (r.suspendedLanes | f)) !== 0 ? 0 : i),
          i !== 0 &&
            i !== s.retryLane &&
            ((s.retryLane = i), pn(e, i), en(r, e, i, -1));
      }
      return Ka(), (r = ja(Error(a(421)))), Vi(e, t, f, r);
    }
    return i.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = Qh.bind(null, e)),
        (i._reactRetry = t),
        null)
      : ((e = s.treeContext),
        (zt = Tn(i.nextSibling)),
        (Mt = t),
        ($e = !0),
        (Jt = null),
        e !== null &&
          ((Ot[It++] = hn),
          (Ot[It++] = mn),
          (Ot[It++] = or),
          (hn = e.id),
          (mn = e.overflow),
          (or = t)),
        (t = _a(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function kc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), ua(e.return, t, n);
  }
  function Da(e, t, n, r, i) {
    var s = e.memoizedState;
    s === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: i,
        })
      : ((s.isBackwards = t),
        (s.rendering = null),
        (s.renderingStartTime = 0),
        (s.last = r),
        (s.tail = n),
        (s.tailMode = i));
  }
  function Cc(e, t, n) {
    var r = t.pendingProps,
      i = r.revealOrder,
      s = r.tail;
    if ((vt(e, t, r.children, n), (r = Be.current), (r & 2) !== 0))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && kc(e, n, t);
          else if (e.tag === 19) kc(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((Ae(Be, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (i) {
        case "forwards":
          for (n = t.child, i = null; n !== null; )
            (e = n.alternate),
              e !== null && Di(e) === null && (i = n),
              (n = n.sibling);
          (n = i),
            n === null
              ? ((i = t.child), (t.child = null))
              : ((i = n.sibling), (n.sibling = null)),
            Da(t, !1, i, n, s);
          break;
        case "backwards":
          for (n = null, i = t.child, t.child = null; i !== null; ) {
            if (((e = i.alternate), e !== null && Di(e) === null)) {
              t.child = i;
              break;
            }
            (e = i.sibling), (i.sibling = n), (n = i), (i = e);
          }
          Da(t, !0, n, null, s);
          break;
        case "together":
          Da(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Ui(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function gn(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (dr |= t.lanes),
      (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(a(153));
    if (t.child !== null) {
      for (
        e = t.child, n = Wn(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = Wn(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function Oh(e, t, n) {
    switch (t.tag) {
      case 3:
        xc(t), br();
        break;
      case 5:
        bu(t);
        break;
      case 1:
        kt(t.type) && ki(t);
        break;
      case 4:
        fa(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          i = t.memoizedProps.value;
        Ae(Li, r._currentValue), (r._currentValue = i);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (Ae(Be, Be.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Ec(e, t, n)
              : (Ae(Be, Be.current & 1),
                (e = gn(e, t, n)),
                e !== null ? e.sibling : null);
        Ae(Be, Be.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return Cc(e, t, n);
          t.flags |= 128;
        }
        if (
          ((i = t.memoizedState),
          i !== null &&
            ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
          Ae(Be, Be.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), gc(e, t, n);
    }
    return gn(e, t, n);
  }
  var Nc, Ta, jc, Pc;
  (Nc = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }),
    (Ta = function () {}),
    (jc = function (e, t, n, r) {
      var i = e.memoizedProps;
      if (i !== r) {
        (e = t.stateNode), ur(rn.current);
        var s = null;
        switch (n) {
          case "input":
            (i = Bt(e, i)), (r = Bt(e, r)), (s = []);
            break;
          case "select":
            (i = W({}, i, { value: void 0 })),
              (r = W({}, r, { value: void 0 })),
              (s = []);
            break;
          case "textarea":
            (i = Wt(e, i)), (r = Wt(e, r)), (s = []);
            break;
          default:
            typeof i.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = xi);
        }
        Cr(n, r);
        var f;
        n = null;
        for (_ in i)
          if (!r.hasOwnProperty(_) && i.hasOwnProperty(_) && i[_] != null)
            if (_ === "style") {
              var y = i[_];
              for (f in y) y.hasOwnProperty(f) && (n || (n = {}), (n[f] = ""));
            } else
              _ !== "dangerouslySetInnerHTML" &&
                _ !== "children" &&
                _ !== "suppressContentEditableWarning" &&
                _ !== "suppressHydrationWarning" &&
                _ !== "autoFocus" &&
                (u.hasOwnProperty(_)
                  ? s || (s = [])
                  : (s = s || []).push(_, null));
        for (_ in r) {
          var x = r[_];
          if (
            ((y = i != null ? i[_] : void 0),
            r.hasOwnProperty(_) && x !== y && (x != null || y != null))
          )
            if (_ === "style")
              if (y) {
                for (f in y)
                  !y.hasOwnProperty(f) ||
                    (x && x.hasOwnProperty(f)) ||
                    (n || (n = {}), (n[f] = ""));
                for (f in x)
                  x.hasOwnProperty(f) &&
                    y[f] !== x[f] &&
                    (n || (n = {}), (n[f] = x[f]));
              } else n || (s || (s = []), s.push(_, n)), (n = x);
            else
              _ === "dangerouslySetInnerHTML"
                ? ((x = x ? x.__html : void 0),
                  (y = y ? y.__html : void 0),
                  x != null && y !== x && (s = s || []).push(_, x))
                : _ === "children"
                  ? (typeof x != "string" && typeof x != "number") ||
                    (s = s || []).push(_, "" + x)
                  : _ !== "suppressContentEditableWarning" &&
                    _ !== "suppressHydrationWarning" &&
                    (u.hasOwnProperty(_)
                      ? (x != null && _ === "onScroll" && Ue("scroll", e),
                        s || y === x || (s = []))
                      : (s = s || []).push(_, x));
        }
        n && (s = s || []).push("style", n);
        var _ = s;
        (t.updateQueue = _) && (t.flags |= 4);
      }
    }),
    (Pc = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  function _l(e, t) {
    if (!$e)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function ht(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var i = e.child; i !== null; )
        (n |= i.lanes | i.childLanes),
          (r |= i.subtreeFlags & 14680064),
          (r |= i.flags & 14680064),
          (i.return = e),
          (i = i.sibling);
    else
      for (i = e.child; i !== null; )
        (n |= i.lanes | i.childLanes),
          (r |= i.subtreeFlags),
          (r |= i.flags),
          (i.return = e),
          (i = i.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function Ih(e, t, n) {
    var r = t.pendingProps;
    switch ((na(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ht(t), null;
      case 1:
        return kt(t.type) && Ei(), ht(t), null;
      case 3:
        return (
          (r = t.stateNode),
          Hr(),
          He(Et),
          He(dt),
          pa(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Pi(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Jt !== null && (Wa(Jt), (Jt = null)))),
          Ta(e, t),
          ht(t),
          null
        );
      case 5:
        ha(t);
        var i = ur(Pl.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          jc(e, t, n, r, i),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(a(166));
            return ht(t), null;
          }
          if (((e = ur(rn.current)), Pi(t))) {
            (r = t.stateNode), (n = t.type);
            var s = t.memoizedProps;
            switch (((r[nn] = t), (r[El] = s), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                Ue("cancel", r), Ue("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ue("load", r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < wl.length; i++) Ue(wl[i], r);
                break;
              case "source":
                Ue("error", r);
                break;
              case "img":
              case "image":
              case "link":
                Ue("error", r), Ue("load", r);
                break;
              case "details":
                Ue("toggle", r);
                break;
              case "input":
                Jl(r, s), Ue("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!s.multiple }),
                  Ue("invalid", r);
                break;
              case "textarea":
                kn(r, s), Ue("invalid", r);
            }
            Cr(n, s), (i = null);
            for (var f in s)
              if (s.hasOwnProperty(f)) {
                var y = s[f];
                f === "children"
                  ? typeof y == "string"
                    ? r.textContent !== y &&
                      (s.suppressHydrationWarning !== !0 &&
                        wi(r.textContent, y, e),
                      (i = ["children", y]))
                    : typeof y == "number" &&
                      r.textContent !== "" + y &&
                      (s.suppressHydrationWarning !== !0 &&
                        wi(r.textContent, y, e),
                      (i = ["children", "" + y]))
                  : u.hasOwnProperty(f) &&
                    y != null &&
                    f === "onScroll" &&
                    Ue("scroll", r);
              }
            switch (n) {
              case "input":
                $t(r), Zl(r, s, !0);
                break;
              case "textarea":
                $t(r), Er(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof s.onClick == "function" && (r.onclick = xi);
            }
            (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (f = i.nodeType === 9 ? i : i.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Gt(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = f.createElement("div")),
                    (e.innerHTML = "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                    ? (e = f.createElement(n, { is: r.is }))
                    : ((e = f.createElement(n)),
                      n === "select" &&
                        ((f = e),
                        r.multiple
                          ? (f.multiple = !0)
                          : r.size && (f.size = r.size)))
                : (e = f.createElementNS(e, n)),
              (e[nn] = t),
              (e[El] = r),
              Nc(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((f = Cn(n, r)), n)) {
                case "dialog":
                  Ue("cancel", e), Ue("close", e), (i = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Ue("load", e), (i = r);
                  break;
                case "video":
                case "audio":
                  for (i = 0; i < wl.length; i++) Ue(wl[i], e);
                  i = r;
                  break;
                case "source":
                  Ue("error", e), (i = r);
                  break;
                case "img":
                case "image":
                case "link":
                  Ue("error", e), Ue("load", e), (i = r);
                  break;
                case "details":
                  Ue("toggle", e), (i = r);
                  break;
                case "input":
                  Jl(e, r), (i = Bt(e, r)), Ue("invalid", e);
                  break;
                case "option":
                  i = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (i = W({}, r, { value: void 0 })),
                    Ue("invalid", e);
                  break;
                case "textarea":
                  kn(e, r), (i = Wt(e, r)), Ue("invalid", e);
                  break;
                default:
                  i = r;
              }
              Cr(n, i), (y = i);
              for (s in y)
                if (y.hasOwnProperty(s)) {
                  var x = y[s];
                  s === "style"
                    ? tl(e, x)
                    : s === "dangerouslySetInnerHTML"
                      ? ((x = x ? x.__html : void 0), x != null && kr(e, x))
                      : s === "children"
                        ? typeof x == "string"
                          ? (n !== "textarea" || x !== "") && Zn(e, x)
                          : typeof x == "number" && Zn(e, "" + x)
                        : s !== "suppressContentEditableWarning" &&
                          s !== "suppressHydrationWarning" &&
                          s !== "autoFocus" &&
                          (u.hasOwnProperty(s)
                            ? x != null && s === "onScroll" && Ue("scroll", e)
                            : x != null && K(e, s, x, f));
                }
              switch (n) {
                case "input":
                  $t(e), Zl(e, r, !1);
                  break;
                case "textarea":
                  $t(e), Er(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + _e(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (s = r.value),
                    s != null
                      ? En(e, !!r.multiple, s, !1)
                      : r.defaultValue != null &&
                        En(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof i.onClick == "function" && (e.onclick = xi);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return ht(t), null;
      case 6:
        if (e && t.stateNode != null) Pc(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(a(166));
          if (((n = ur(Pl.current)), ur(rn.current), Pi(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[nn] = t),
              (s = r.nodeValue !== n) && ((e = Mt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  wi(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    wi(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            s && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[nn] = t),
              (t.stateNode = r);
        }
        return ht(t), null;
      case 13:
        if (
          (He(Be),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if ($e && zt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            Mu(), br(), (t.flags |= 98560), (s = !1);
          else if (((s = Pi(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!s) throw Error(a(318));
              if (
                ((s = t.memoizedState),
                (s = s !== null ? s.dehydrated : null),
                !s)
              )
                throw Error(a(317));
              s[nn] = t;
            } else
              br(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            ht(t), (s = !1);
          } else Jt !== null && (Wa(Jt), (Jt = null)), (s = !0);
          if (!s) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (Be.current & 1) !== 0
                  ? rt === 0 && (rt = 3)
                  : Ka())),
            t.updateQueue !== null && (t.flags |= 4),
            ht(t),
            null);
      case 4:
        return (
          Hr(),
          Ta(e, t),
          e === null && xl(t.stateNode.containerInfo),
          ht(t),
          null
        );
      case 10:
        return sa(t.type._context), ht(t), null;
      case 17:
        return kt(t.type) && Ei(), ht(t), null;
      case 19:
        if ((He(Be), (s = t.memoizedState), s === null)) return ht(t), null;
        if (((r = (t.flags & 128) !== 0), (f = s.rendering), f === null))
          if (r) _l(s, !1);
          else {
            if (rt !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((f = Di(e)), f !== null)) {
                  for (
                    t.flags |= 128,
                      _l(s, !1),
                      r = f.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (s = n),
                      (e = r),
                      (s.flags &= 14680066),
                      (f = s.alternate),
                      f === null
                        ? ((s.childLanes = 0),
                          (s.lanes = e),
                          (s.child = null),
                          (s.subtreeFlags = 0),
                          (s.memoizedProps = null),
                          (s.memoizedState = null),
                          (s.updateQueue = null),
                          (s.dependencies = null),
                          (s.stateNode = null))
                        : ((s.childLanes = f.childLanes),
                          (s.lanes = f.lanes),
                          (s.child = f.child),
                          (s.subtreeFlags = 0),
                          (s.deletions = null),
                          (s.memoizedProps = f.memoizedProps),
                          (s.memoizedState = f.memoizedState),
                          (s.updateQueue = f.updateQueue),
                          (s.type = f.type),
                          (e = f.dependencies),
                          (s.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return Ae(Be, (Be.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            s.tail !== null &&
              Fe() > Gr &&
              ((t.flags |= 128), (r = !0), _l(s, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = Di(f)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                _l(s, !0),
                s.tail === null &&
                  s.tailMode === "hidden" &&
                  !f.alternate &&
                  !$e)
              )
                return ht(t), null;
            } else
              2 * Fe() - s.renderingStartTime > Gr &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), _l(s, !1), (t.lanes = 4194304));
          s.isBackwards
            ? ((f.sibling = t.child), (t.child = f))
            : ((n = s.last),
              n !== null ? (n.sibling = f) : (t.child = f),
              (s.last = f));
        }
        return s.tail !== null
          ? ((t = s.tail),
            (s.rendering = t),
            (s.tail = t.sibling),
            (s.renderingStartTime = Fe()),
            (t.sibling = null),
            (n = Be.current),
            Ae(Be, r ? (n & 1) | 2 : n & 1),
            t)
          : (ht(t), null);
      case 22:
      case 23:
        return (
          Qa(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (_t & 1073741824) !== 0 &&
              (ht(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : ht(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(a(156, t.tag));
  }
  function Fh(e, t) {
    switch ((na(t), t.tag)) {
      case 1:
        return (
          kt(t.type) && Ei(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Hr(),
          He(Et),
          He(dt),
          pa(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return ha(t), null;
      case 13:
        if (
          (He(Be), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(a(340));
          br();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return He(Be), null;
      case 4:
        return Hr(), null;
      case 10:
        return sa(t.type._context), null;
      case 22:
      case 23:
        return Qa(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Hi = !1,
    mt = !1,
    bh = typeof WeakSet == "function" ? WeakSet : Set,
    J = null;
  function Br(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          Ke(e, t, r);
        }
      else n.current = null;
  }
  function Oa(e, t, n) {
    try {
      n();
    } catch (r) {
      Ke(e, t, r);
    }
  }
  var Rc = !1;
  function Ah(e, t) {
    if (((Qo = si), (e = ou()), Ao(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var i = r.anchorOffset,
              s = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, s.nodeType;
            } catch {
              n = null;
              break e;
            }
            var f = 0,
              y = -1,
              x = -1,
              _ = 0,
              b = 0,
              U = e,
              F = null;
            t: for (;;) {
              for (
                var Q;
                U !== n || (i !== 0 && U.nodeType !== 3) || (y = f + i),
                  U !== s || (r !== 0 && U.nodeType !== 3) || (x = f + r),
                  U.nodeType === 3 && (f += U.nodeValue.length),
                  (Q = U.firstChild) !== null;

              )
                (F = U), (U = Q);
              for (;;) {
                if (U === e) break t;
                if (
                  (F === n && ++_ === i && (y = f),
                  F === s && ++b === r && (x = f),
                  (Q = U.nextSibling) !== null)
                )
                  break;
                (U = F), (F = U.parentNode);
              }
              U = Q;
            }
            n = y === -1 || x === -1 ? null : { start: y, end: x };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Ko = { focusedElem: e, selectionRange: n }, si = !1, J = t;
      J !== null;

    )
      if (((t = J), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (J = e);
      else
        for (; J !== null; ) {
          t = J;
          try {
            var Z = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Z !== null) {
                    var q = Z.memoizedProps,
                      Xe = Z.memoizedState,
                      j = t.stateNode,
                      S = j.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? q : Xt(t.type, q),
                        Xe,
                      );
                    j.__reactInternalSnapshotBeforeUpdate = S;
                  }
                  break;
                case 3:
                  var R = t.stateNode.containerInfo;
                  R.nodeType === 1
                    ? (R.textContent = "")
                    : R.nodeType === 9 &&
                      R.documentElement &&
                      R.removeChild(R.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(a(163));
              }
          } catch ($) {
            Ke(t, t.return, $);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (J = e);
            break;
          }
          J = t.return;
        }
    return (Z = Rc), (Rc = !1), Z;
  }
  function Dl(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var i = (r = r.next);
      do {
        if ((i.tag & e) === e) {
          var s = i.destroy;
          (i.destroy = void 0), s !== void 0 && Oa(t, n, s);
        }
        i = i.next;
      } while (i !== r);
    }
  }
  function $i(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function Ia(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function Lc(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Lc(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[nn],
          delete t[El],
          delete t[Zo],
          delete t[Sh],
          delete t[Eh])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Mc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function zc(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Mc(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Fa(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = xi));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Fa(e, t, n), e = e.sibling; e !== null; )
        Fa(e, t, n), (e = e.sibling);
  }
  function ba(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (ba(e, t, n), e = e.sibling; e !== null; )
        ba(e, t, n), (e = e.sibling);
  }
  var ut = null,
    Zt = !1;
  function Vn(e, t, n) {
    for (n = n.child; n !== null; ) _c(e, t, n), (n = n.sibling);
  }
  function _c(e, t, n) {
    if (St && typeof St.onCommitFiberUnmount == "function")
      try {
        St.onCommitFiberUnmount(cn, n);
      } catch {}
    switch (n.tag) {
      case 5:
        mt || Br(n, t);
      case 6:
        var r = ut,
          i = Zt;
        (ut = null),
          Vn(e, t, n),
          (ut = r),
          (Zt = i),
          ut !== null &&
            (Zt
              ? ((e = ut),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : ut.removeChild(n.stateNode));
        break;
      case 18:
        ut !== null &&
          (Zt
            ? ((e = ut),
              (n = n.stateNode),
              e.nodeType === 8
                ? Xo(e.parentNode, n)
                : e.nodeType === 1 && Xo(e, n),
              dl(e))
            : Xo(ut, n.stateNode));
        break;
      case 4:
        (r = ut),
          (i = Zt),
          (ut = n.stateNode.containerInfo),
          (Zt = !0),
          Vn(e, t, n),
          (ut = r),
          (Zt = i);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !mt &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          i = r = r.next;
          do {
            var s = i,
              f = s.destroy;
            (s = s.tag),
              f !== void 0 && ((s & 2) !== 0 || (s & 4) !== 0) && Oa(n, t, f),
              (i = i.next);
          } while (i !== r);
        }
        Vn(e, t, n);
        break;
      case 1:
        if (
          !mt &&
          (Br(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (y) {
            Ke(n, t, y);
          }
        Vn(e, t, n);
        break;
      case 21:
        Vn(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((mt = (r = mt) || n.memoizedState !== null), Vn(e, t, n), (mt = r))
          : Vn(e, t, n);
        break;
      default:
        Vn(e, t, n);
    }
  }
  function Dc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new bh()),
        t.forEach(function (r) {
          var i = Kh.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(i, i));
        });
    }
  }
  function qt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        try {
          var s = e,
            f = t,
            y = f;
          e: for (; y !== null; ) {
            switch (y.tag) {
              case 5:
                (ut = y.stateNode), (Zt = !1);
                break e;
              case 3:
                (ut = y.stateNode.containerInfo), (Zt = !0);
                break e;
              case 4:
                (ut = y.stateNode.containerInfo), (Zt = !0);
                break e;
            }
            y = y.return;
          }
          if (ut === null) throw Error(a(160));
          _c(s, f, i), (ut = null), (Zt = !1);
          var x = i.alternate;
          x !== null && (x.return = null), (i.return = null);
        } catch (_) {
          Ke(i, t, _);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) Tc(t, e), (t = t.sibling);
  }
  function Tc(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((qt(t, e), on(e), r & 4)) {
          try {
            Dl(3, e, e.return), $i(3, e);
          } catch (q) {
            Ke(e, e.return, q);
          }
          try {
            Dl(5, e, e.return);
          } catch (q) {
            Ke(e, e.return, q);
          }
        }
        break;
      case 1:
        qt(t, e), on(e), r & 512 && n !== null && Br(n, n.return);
        break;
      case 5:
        if (
          (qt(t, e),
          on(e),
          r & 512 && n !== null && Br(n, n.return),
          e.flags & 32)
        ) {
          var i = e.stateNode;
          try {
            Zn(i, "");
          } catch (q) {
            Ke(e, e.return, q);
          }
        }
        if (r & 4 && ((i = e.stateNode), i != null)) {
          var s = e.memoizedProps,
            f = n !== null ? n.memoizedProps : s,
            y = e.type,
            x = e.updateQueue;
          if (((e.updateQueue = null), x !== null))
            try {
              y === "input" && s.type === "radio" && s.name != null && Xl(i, s),
                Cn(y, f);
              var _ = Cn(y, s);
              for (f = 0; f < x.length; f += 2) {
                var b = x[f],
                  U = x[f + 1];
                b === "style"
                  ? tl(i, U)
                  : b === "dangerouslySetInnerHTML"
                    ? kr(i, U)
                    : b === "children"
                      ? Zn(i, U)
                      : K(i, b, U, _);
              }
              switch (y) {
                case "input":
                  Sr(i, s);
                  break;
                case "textarea":
                  qr(i, s);
                  break;
                case "select":
                  var F = i._wrapperState.wasMultiple;
                  i._wrapperState.wasMultiple = !!s.multiple;
                  var Q = s.value;
                  Q != null
                    ? En(i, !!s.multiple, Q, !1)
                    : F !== !!s.multiple &&
                      (s.defaultValue != null
                        ? En(i, !!s.multiple, s.defaultValue, !0)
                        : En(i, !!s.multiple, s.multiple ? [] : "", !1));
              }
              i[El] = s;
            } catch (q) {
              Ke(e, e.return, q);
            }
        }
        break;
      case 6:
        if ((qt(t, e), on(e), r & 4)) {
          if (e.stateNode === null) throw Error(a(162));
          (i = e.stateNode), (s = e.memoizedProps);
          try {
            i.nodeValue = s;
          } catch (q) {
            Ke(e, e.return, q);
          }
        }
        break;
      case 3:
        if (
          (qt(t, e), on(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            dl(t.containerInfo);
          } catch (q) {
            Ke(e, e.return, q);
          }
        break;
      case 4:
        qt(t, e), on(e);
        break;
      case 13:
        qt(t, e),
          on(e),
          (i = e.child),
          i.flags & 8192 &&
            ((s = i.memoizedState !== null),
            (i.stateNode.isHidden = s),
            !s ||
              (i.alternate !== null && i.alternate.memoizedState !== null) ||
              (Ua = Fe())),
          r & 4 && Dc(e);
        break;
      case 22:
        if (
          ((b = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((mt = (_ = mt) || b), qt(t, e), (mt = _)) : qt(t, e),
          on(e),
          r & 8192)
        ) {
          if (
            ((_ = e.memoizedState !== null),
            (e.stateNode.isHidden = _) && !b && (e.mode & 1) !== 0)
          )
            for (J = e, b = e.child; b !== null; ) {
              for (U = J = b; J !== null; ) {
                switch (((F = J), (Q = F.child), F.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Dl(4, F, F.return);
                    break;
                  case 1:
                    Br(F, F.return);
                    var Z = F.stateNode;
                    if (typeof Z.componentWillUnmount == "function") {
                      (r = F), (n = F.return);
                      try {
                        (t = r),
                          (Z.props = t.memoizedProps),
                          (Z.state = t.memoizedState),
                          Z.componentWillUnmount();
                      } catch (q) {
                        Ke(r, n, q);
                      }
                    }
                    break;
                  case 5:
                    Br(F, F.return);
                    break;
                  case 22:
                    if (F.memoizedState !== null) {
                      Fc(U);
                      continue;
                    }
                }
                Q !== null ? ((Q.return = F), (J = Q)) : Fc(U);
              }
              b = b.sibling;
            }
          e: for (b = null, U = e; ; ) {
            if (U.tag === 5) {
              if (b === null) {
                b = U;
                try {
                  (i = U.stateNode),
                    _
                      ? ((s = i.style),
                        typeof s.setProperty == "function"
                          ? s.setProperty("display", "none", "important")
                          : (s.display = "none"))
                      : ((y = U.stateNode),
                        (x = U.memoizedProps.style),
                        (f =
                          x != null && x.hasOwnProperty("display")
                            ? x.display
                            : null),
                        (y.style.display = el("display", f)));
                } catch (q) {
                  Ke(e, e.return, q);
                }
              }
            } else if (U.tag === 6) {
              if (b === null)
                try {
                  U.stateNode.nodeValue = _ ? "" : U.memoizedProps;
                } catch (q) {
                  Ke(e, e.return, q);
                }
            } else if (
              ((U.tag !== 22 && U.tag !== 23) ||
                U.memoizedState === null ||
                U === e) &&
              U.child !== null
            ) {
              (U.child.return = U), (U = U.child);
              continue;
            }
            if (U === e) break e;
            for (; U.sibling === null; ) {
              if (U.return === null || U.return === e) break e;
              b === U && (b = null), (U = U.return);
            }
            b === U && (b = null),
              (U.sibling.return = U.return),
              (U = U.sibling);
          }
        }
        break;
      case 19:
        qt(t, e), on(e), r & 4 && Dc(e);
        break;
      case 21:
        break;
      default:
        qt(t, e), on(e);
    }
  }
  function on(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Mc(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(a(160));
        }
        switch (r.tag) {
          case 5:
            var i = r.stateNode;
            r.flags & 32 && (Zn(i, ""), (r.flags &= -33));
            var s = zc(e);
            ba(e, s, i);
            break;
          case 3:
          case 4:
            var f = r.stateNode.containerInfo,
              y = zc(e);
            Fa(e, y, f);
            break;
          default:
            throw Error(a(161));
        }
      } catch (x) {
        Ke(e, e.return, x);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Vh(e, t, n) {
    (J = e), Oc(e);
  }
  function Oc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; J !== null; ) {
      var i = J,
        s = i.child;
      if (i.tag === 22 && r) {
        var f = i.memoizedState !== null || Hi;
        if (!f) {
          var y = i.alternate,
            x = (y !== null && y.memoizedState !== null) || mt;
          y = Hi;
          var _ = mt;
          if (((Hi = f), (mt = x) && !_))
            for (J = i; J !== null; )
              (f = J),
                (x = f.child),
                f.tag === 22 && f.memoizedState !== null
                  ? bc(i)
                  : x !== null
                    ? ((x.return = f), (J = x))
                    : bc(i);
          for (; s !== null; ) (J = s), Oc(s), (s = s.sibling);
          (J = i), (Hi = y), (mt = _);
        }
        Ic(e);
      } else
        (i.subtreeFlags & 8772) !== 0 && s !== null
          ? ((s.return = i), (J = s))
          : Ic(e);
    }
  }
  function Ic(e) {
    for (; J !== null; ) {
      var t = J;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                mt || $i(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !mt)
                  if (n === null) r.componentDidMount();
                  else {
                    var i =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : Xt(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      i,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var s = t.updateQueue;
                s !== null && Fu(t, s, r);
                break;
              case 3:
                var f = t.updateQueue;
                if (f !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  Fu(t, f, n);
                }
                break;
              case 5:
                var y = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = y;
                  var x = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      x.autoFocus && n.focus();
                      break;
                    case "img":
                      x.src && (n.src = x.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var _ = t.alternate;
                  if (_ !== null) {
                    var b = _.memoizedState;
                    if (b !== null) {
                      var U = b.dehydrated;
                      U !== null && dl(U);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(a(163));
            }
          mt || (t.flags & 512 && Ia(t));
        } catch (F) {
          Ke(t, t.return, F);
        }
      }
      if (t === e) {
        J = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (J = n);
        break;
      }
      J = t.return;
    }
  }
  function Fc(e) {
    for (; J !== null; ) {
      var t = J;
      if (t === e) {
        J = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (J = n);
        break;
      }
      J = t.return;
    }
  }
  function bc(e) {
    for (; J !== null; ) {
      var t = J;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              $i(4, t);
            } catch (x) {
              Ke(t, n, x);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var i = t.return;
              try {
                r.componentDidMount();
              } catch (x) {
                Ke(t, i, x);
              }
            }
            var s = t.return;
            try {
              Ia(t);
            } catch (x) {
              Ke(t, s, x);
            }
            break;
          case 5:
            var f = t.return;
            try {
              Ia(t);
            } catch (x) {
              Ke(t, f, x);
            }
        }
      } catch (x) {
        Ke(t, t.return, x);
      }
      if (t === e) {
        J = null;
        break;
      }
      var y = t.sibling;
      if (y !== null) {
        (y.return = t.return), (J = y);
        break;
      }
      J = t.return;
    }
  }
  var Uh = Math.ceil,
    Bi = ie.ReactCurrentDispatcher,
    Aa = ie.ReactCurrentOwner,
    At = ie.ReactCurrentBatchConfig,
    Le = 0,
    at = null,
    qe = null,
    ct = 0,
    _t = 0,
    Wr = On(0),
    rt = 0,
    Tl = null,
    dr = 0,
    Wi = 0,
    Va = 0,
    Ol = null,
    Nt = null,
    Ua = 0,
    Gr = 1 / 0,
    yn = null,
    Gi = !1,
    Ha = null,
    Un = null,
    Qi = !1,
    Hn = null,
    Ki = 0,
    Il = 0,
    $a = null,
    Yi = -1,
    Ji = 0;
  function gt() {
    return (Le & 6) !== 0 ? Fe() : Yi !== -1 ? Yi : (Yi = Fe());
  }
  function $n(e) {
    return (e.mode & 1) === 0
      ? 1
      : (Le & 2) !== 0 && ct !== 0
        ? ct & -ct
        : Ch.transition !== null
          ? (Ji === 0 && (Ji = zs()), Ji)
          : ((e = Te),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : Vs(e.type))),
            e);
  }
  function en(e, t, n, r) {
    if (50 < Il) throw ((Il = 0), ($a = null), Error(a(185)));
    ol(e, n, r),
      ((Le & 2) === 0 || e !== at) &&
        (e === at && ((Le & 2) === 0 && (Wi |= n), rt === 4 && Bn(e, ct)),
        jt(e, r),
        n === 1 &&
          Le === 0 &&
          (t.mode & 1) === 0 &&
          ((Gr = Fe() + 500), Ci && Fn()));
  }
  function jt(e, t) {
    var n = e.callbackNode;
    Cf(e, t);
    var r = ii(e, e === at ? ct : 0);
    if (r === 0)
      n !== null && Pn(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && Pn(n), t === 1))
        e.tag === 0 ? kh(Vc.bind(null, e)) : Nu(Vc.bind(null, e)),
          wh(function () {
            (Le & 6) === 0 && Fn();
          }),
          (n = null);
      else {
        switch (_s(r)) {
          case 1:
            n = Qt;
            break;
          case 4:
            n = rr;
            break;
          case 16:
            n = Re;
            break;
          case 536870912:
            n = Kt;
            break;
          default:
            n = Re;
        }
        n = Kc(n, Ac.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function Ac(e, t) {
    if (((Yi = -1), (Ji = 0), (Le & 6) !== 0)) throw Error(a(327));
    var n = e.callbackNode;
    if (Qr() && e.callbackNode !== n) return null;
    var r = ii(e, e === at ? ct : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Xi(e, r);
    else {
      t = r;
      var i = Le;
      Le |= 2;
      var s = Hc();
      (at !== e || ct !== t) && ((yn = null), (Gr = Fe() + 500), hr(e, t));
      do
        try {
          Bh();
          break;
        } catch (y) {
          Uc(e, y);
        }
      while (!0);
      aa(),
        (Bi.current = s),
        (Le = i),
        qe !== null ? (t = 0) : ((at = null), (ct = 0), (t = rt));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((i = ko(e)), i !== 0 && ((r = i), (t = Ba(e, i)))),
        t === 1)
      )
        throw ((n = Tl), hr(e, 0), Bn(e, r), jt(e, Fe()), n);
      if (t === 6) Bn(e, r);
      else {
        if (
          ((i = e.current.alternate),
          (r & 30) === 0 &&
            !Hh(i) &&
            ((t = Xi(e, r)),
            t === 2 && ((s = ko(e)), s !== 0 && ((r = s), (t = Ba(e, s)))),
            t === 1))
        )
          throw ((n = Tl), hr(e, 0), Bn(e, r), jt(e, Fe()), n);
        switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(a(345));
          case 2:
            mr(e, Nt, yn);
            break;
          case 3:
            if (
              (Bn(e, r),
              (r & 130023424) === r && ((t = Ua + 500 - Fe()), 10 < t))
            ) {
              if (ii(e, 0) !== 0) break;
              if (((i = e.suspendedLanes), (i & r) !== r)) {
                gt(), (e.pingedLanes |= e.suspendedLanes & i);
                break;
              }
              e.timeoutHandle = Jo(mr.bind(null, e, Nt, yn), t);
              break;
            }
            mr(e, Nt, yn);
            break;
          case 4:
            if ((Bn(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, i = -1; 0 < r; ) {
              var f = 31 - it(r);
              (s = 1 << f), (f = t[f]), f > i && (i = f), (r &= ~s);
            }
            if (
              ((r = i),
              (r = Fe() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                    ? 480
                    : 1080 > r
                      ? 1080
                      : 1920 > r
                        ? 1920
                        : 3e3 > r
                          ? 3e3
                          : 4320 > r
                            ? 4320
                            : 1960 * Uh(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = Jo(mr.bind(null, e, Nt, yn), r);
              break;
            }
            mr(e, Nt, yn);
            break;
          case 5:
            mr(e, Nt, yn);
            break;
          default:
            throw Error(a(329));
        }
      }
    }
    return jt(e, Fe()), e.callbackNode === n ? Ac.bind(null, e) : null;
  }
  function Ba(e, t) {
    var n = Ol;
    return (
      e.current.memoizedState.isDehydrated && (hr(e, t).flags |= 256),
      (e = Xi(e, t)),
      e !== 2 && ((t = Nt), (Nt = n), t !== null && Wa(t)),
      e
    );
  }
  function Wa(e) {
    Nt === null ? (Nt = e) : Nt.push.apply(Nt, e);
  }
  function Hh(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var i = n[r],
              s = i.getSnapshot;
            i = i.value;
            try {
              if (!Yt(s(), i)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function Bn(e, t) {
    for (
      t &= ~Va,
        t &= ~Wi,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - it(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function Vc(e) {
    if ((Le & 6) !== 0) throw Error(a(327));
    Qr();
    var t = ii(e, 0);
    if ((t & 1) === 0) return jt(e, Fe()), null;
    var n = Xi(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = ko(e);
      r !== 0 && ((t = r), (n = Ba(e, r)));
    }
    if (n === 1) throw ((n = Tl), hr(e, 0), Bn(e, t), jt(e, Fe()), n);
    if (n === 6) throw Error(a(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      mr(e, Nt, yn),
      jt(e, Fe()),
      null
    );
  }
  function Ga(e, t) {
    var n = Le;
    Le |= 1;
    try {
      return e(t);
    } finally {
      (Le = n), Le === 0 && ((Gr = Fe() + 500), Ci && Fn());
    }
  }
  function fr(e) {
    Hn !== null && Hn.tag === 0 && (Le & 6) === 0 && Qr();
    var t = Le;
    Le |= 1;
    var n = At.transition,
      r = Te;
    try {
      if (((At.transition = null), (Te = 1), e)) return e();
    } finally {
      (Te = r), (At.transition = n), (Le = t), (Le & 6) === 0 && Fn();
    }
  }
  function Qa() {
    (_t = Wr.current), He(Wr);
  }
  function hr(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), yh(n)), qe !== null))
      for (n = qe.return; n !== null; ) {
        var r = n;
        switch ((na(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && Ei();
            break;
          case 3:
            Hr(), He(Et), He(dt), pa();
            break;
          case 5:
            ha(r);
            break;
          case 4:
            Hr();
            break;
          case 13:
            He(Be);
            break;
          case 19:
            He(Be);
            break;
          case 10:
            sa(r.type._context);
            break;
          case 22:
          case 23:
            Qa();
        }
        n = n.return;
      }
    if (
      ((at = e),
      (qe = e = Wn(e.current, null)),
      (ct = _t = t),
      (rt = 0),
      (Tl = null),
      (Va = Wi = dr = 0),
      (Nt = Ol = null),
      sr !== null)
    ) {
      for (t = 0; t < sr.length; t++)
        if (((n = sr[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var i = r.next,
            s = n.pending;
          if (s !== null) {
            var f = s.next;
            (s.next = i), (r.next = f);
          }
          n.pending = r;
        }
      sr = null;
    }
    return e;
  }
  function Uc(e, t) {
    do {
      var n = qe;
      try {
        if ((aa(), (Ti.current = bi), Oi)) {
          for (var r = We.memoizedState; r !== null; ) {
            var i = r.queue;
            i !== null && (i.pending = null), (r = r.next);
          }
          Oi = !1;
        }
        if (
          ((cr = 0),
          (ot = nt = We = null),
          (Rl = !1),
          (Ll = 0),
          (Aa.current = null),
          n === null || n.return === null)
        ) {
          (rt = 1), (Tl = t), (qe = null);
          break;
        }
        e: {
          var s = e,
            f = n.return,
            y = n,
            x = t;
          if (
            ((t = ct),
            (y.flags |= 32768),
            x !== null && typeof x == "object" && typeof x.then == "function")
          ) {
            var _ = x,
              b = y,
              U = b.tag;
            if ((b.mode & 1) === 0 && (U === 0 || U === 11 || U === 15)) {
              var F = b.alternate;
              F
                ? ((b.updateQueue = F.updateQueue),
                  (b.memoizedState = F.memoizedState),
                  (b.lanes = F.lanes))
                : ((b.updateQueue = null), (b.memoizedState = null));
            }
            var Q = fc(f);
            if (Q !== null) {
              (Q.flags &= -257),
                hc(Q, f, y, s, t),
                Q.mode & 1 && dc(s, _, t),
                (t = Q),
                (x = _);
              var Z = t.updateQueue;
              if (Z === null) {
                var q = new Set();
                q.add(x), (t.updateQueue = q);
              } else Z.add(x);
              break e;
            } else {
              if ((t & 1) === 0) {
                dc(s, _, t), Ka();
                break e;
              }
              x = Error(a(426));
            }
          } else if ($e && y.mode & 1) {
            var Xe = fc(f);
            if (Xe !== null) {
              (Xe.flags & 65536) === 0 && (Xe.flags |= 256),
                hc(Xe, f, y, s, t),
                ia($r(x, y));
              break e;
            }
          }
          (s = x = $r(x, y)),
            rt !== 4 && (rt = 2),
            Ol === null ? (Ol = [s]) : Ol.push(s),
            (s = f);
          do {
            switch (s.tag) {
              case 3:
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var j = uc(s, x, t);
                Iu(s, j);
                break e;
              case 1:
                y = x;
                var S = s.type,
                  R = s.stateNode;
                if (
                  (s.flags & 128) === 0 &&
                  (typeof S.getDerivedStateFromError == "function" ||
                    (R !== null &&
                      typeof R.componentDidCatch == "function" &&
                      (Un === null || !Un.has(R))))
                ) {
                  (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                  var $ = cc(s, y, t);
                  Iu(s, $);
                  break e;
                }
            }
            s = s.return;
          } while (s !== null);
        }
        Bc(n);
      } catch (ee) {
        (t = ee), qe === n && n !== null && (qe = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Hc() {
    var e = Bi.current;
    return (Bi.current = bi), e === null ? bi : e;
  }
  function Ka() {
    (rt === 0 || rt === 3 || rt === 2) && (rt = 4),
      at === null ||
        ((dr & 268435455) === 0 && (Wi & 268435455) === 0) ||
        Bn(at, ct);
  }
  function Xi(e, t) {
    var n = Le;
    Le |= 2;
    var r = Hc();
    (at !== e || ct !== t) && ((yn = null), hr(e, t));
    do
      try {
        $h();
        break;
      } catch (i) {
        Uc(e, i);
      }
    while (!0);
    if ((aa(), (Le = n), (Bi.current = r), qe !== null)) throw Error(a(261));
    return (at = null), (ct = 0), rt;
  }
  function $h() {
    for (; qe !== null; ) $c(qe);
  }
  function Bh() {
    for (; qe !== null && !wt(); ) $c(qe);
  }
  function $c(e) {
    var t = Qc(e.alternate, e, _t);
    (e.memoizedProps = e.pendingProps),
      t === null ? Bc(e) : (qe = t),
      (Aa.current = null);
  }
  function Bc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = Ih(n, t, _t)), n !== null)) {
          qe = n;
          return;
        }
      } else {
        if (((n = Fh(n, t)), n !== null)) {
          (n.flags &= 32767), (qe = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (rt = 6), (qe = null);
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        qe = t;
        return;
      }
      qe = t = e;
    } while (t !== null);
    rt === 0 && (rt = 5);
  }
  function mr(e, t, n) {
    var r = Te,
      i = At.transition;
    try {
      (At.transition = null), (Te = 1), Wh(e, t, n, r);
    } finally {
      (At.transition = i), (Te = r);
    }
    return null;
  }
  function Wh(e, t, n, r) {
    do Qr();
    while (Hn !== null);
    if ((Le & 6) !== 0) throw Error(a(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(a(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var s = n.lanes | n.childLanes;
    if (
      (Nf(e, s),
      e === at && ((qe = at = null), (ct = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        Qi ||
        ((Qi = !0),
        Kc(Re, function () {
          return Qr(), null;
        })),
      (s = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || s)
    ) {
      (s = At.transition), (At.transition = null);
      var f = Te;
      Te = 1;
      var y = Le;
      (Le |= 4),
        (Aa.current = null),
        Ah(e, n),
        Tc(n, e),
        dh(Ko),
        (si = !!Qo),
        (Ko = Qo = null),
        (e.current = n),
        Vh(n),
        nr(),
        (Le = y),
        (Te = f),
        (At.transition = s);
    } else e.current = n;
    if (
      (Qi && ((Qi = !1), (Hn = e), (Ki = i)),
      (s = e.pendingLanes),
      s === 0 && (Un = null),
      Qe(n.stateNode),
      jt(e, Fe()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
    if (Gi) throw ((Gi = !1), (e = Ha), (Ha = null), e);
    return (
      (Ki & 1) !== 0 && e.tag !== 0 && Qr(),
      (s = e.pendingLanes),
      (s & 1) !== 0 ? (e === $a ? Il++ : ((Il = 0), ($a = e))) : (Il = 0),
      Fn(),
      null
    );
  }
  function Qr() {
    if (Hn !== null) {
      var e = _s(Ki),
        t = At.transition,
        n = Te;
      try {
        if (((At.transition = null), (Te = 16 > e ? 16 : e), Hn === null))
          var r = !1;
        else {
          if (((e = Hn), (Hn = null), (Ki = 0), (Le & 6) !== 0))
            throw Error(a(331));
          var i = Le;
          for (Le |= 4, J = e.current; J !== null; ) {
            var s = J,
              f = s.child;
            if ((J.flags & 16) !== 0) {
              var y = s.deletions;
              if (y !== null) {
                for (var x = 0; x < y.length; x++) {
                  var _ = y[x];
                  for (J = _; J !== null; ) {
                    var b = J;
                    switch (b.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Dl(8, b, s);
                    }
                    var U = b.child;
                    if (U !== null) (U.return = b), (J = U);
                    else
                      for (; J !== null; ) {
                        b = J;
                        var F = b.sibling,
                          Q = b.return;
                        if ((Lc(b), b === _)) {
                          J = null;
                          break;
                        }
                        if (F !== null) {
                          (F.return = Q), (J = F);
                          break;
                        }
                        J = Q;
                      }
                  }
                }
                var Z = s.alternate;
                if (Z !== null) {
                  var q = Z.child;
                  if (q !== null) {
                    Z.child = null;
                    do {
                      var Xe = q.sibling;
                      (q.sibling = null), (q = Xe);
                    } while (q !== null);
                  }
                }
                J = s;
              }
            }
            if ((s.subtreeFlags & 2064) !== 0 && f !== null)
              (f.return = s), (J = f);
            else
              e: for (; J !== null; ) {
                if (((s = J), (s.flags & 2048) !== 0))
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Dl(9, s, s.return);
                  }
                var j = s.sibling;
                if (j !== null) {
                  (j.return = s.return), (J = j);
                  break e;
                }
                J = s.return;
              }
          }
          var S = e.current;
          for (J = S; J !== null; ) {
            f = J;
            var R = f.child;
            if ((f.subtreeFlags & 2064) !== 0 && R !== null)
              (R.return = f), (J = R);
            else
              e: for (f = S; J !== null; ) {
                if (((y = J), (y.flags & 2048) !== 0))
                  try {
                    switch (y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        $i(9, y);
                    }
                  } catch (ee) {
                    Ke(y, y.return, ee);
                  }
                if (y === f) {
                  J = null;
                  break e;
                }
                var $ = y.sibling;
                if ($ !== null) {
                  ($.return = y.return), (J = $);
                  break e;
                }
                J = y.return;
              }
          }
          if (
            ((Le = i),
            Fn(),
            St && typeof St.onPostCommitFiberRoot == "function")
          )
            try {
              St.onPostCommitFiberRoot(cn, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (Te = n), (At.transition = t);
      }
    }
    return !1;
  }
  function Wc(e, t, n) {
    (t = $r(n, t)),
      (t = uc(e, t, 1)),
      (e = An(e, t, 1)),
      (t = gt()),
      e !== null && (ol(e, 1, t), jt(e, t));
  }
  function Ke(e, t, n) {
    if (e.tag === 3) Wc(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Wc(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (Un === null || !Un.has(r)))
          ) {
            (e = $r(n, e)),
              (e = cc(t, e, 1)),
              (t = An(t, e, 1)),
              (e = gt()),
              t !== null && (ol(t, 1, e), jt(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Gh(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = gt()),
      (e.pingedLanes |= e.suspendedLanes & n),
      at === e &&
        (ct & n) === n &&
        (rt === 4 || (rt === 3 && (ct & 130023424) === ct && 500 > Fe() - Ua)
          ? hr(e, 0)
          : (Va |= n)),
      jt(e, t);
  }
  function Gc(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = li), (li <<= 1), (li & 130023424) === 0 && (li = 4194304)));
    var n = gt();
    (e = pn(e, t)), e !== null && (ol(e, t, n), jt(e, n));
  }
  function Qh(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), Gc(e, n);
  }
  function Kh(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(a(314));
    }
    r !== null && r.delete(t), Gc(e, n);
  }
  var Qc;
  Qc = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Et.current) Ct = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
          return (Ct = !1), Oh(e, t, n);
        Ct = (e.flags & 131072) !== 0;
      }
    else (Ct = !1), $e && (t.flags & 1048576) !== 0 && ju(t, ji, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        Ui(e, t), (e = t.pendingProps);
        var i = Or(t, dt.current);
        Ur(t, n), (i = ya(null, t, r, e, i, n));
        var s = wa();
        return (
          (t.flags |= 1),
          typeof i == "object" &&
          i !== null &&
          typeof i.render == "function" &&
          i.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              kt(r) ? ((s = !0), ki(t)) : (s = !1),
              (t.memoizedState =
                i.state !== null && i.state !== void 0 ? i.state : null),
              da(t),
              (i.updater = Ai),
              (t.stateNode = i),
              (i._reactInternals = t),
              Na(t, r, e, n),
              (t = La(null, t, r, !0, s, n)))
            : ((t.tag = 0), $e && s && ta(t), vt(null, t, i, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Ui(e, t),
            (e = t.pendingProps),
            (i = r._init),
            (r = i(r._payload)),
            (t.type = r),
            (i = t.tag = Jh(r)),
            (e = Xt(r, e)),
            i)
          ) {
            case 0:
              t = Ra(null, t, r, e, n);
              break e;
            case 1:
              t = wc(null, t, r, e, n);
              break e;
            case 11:
              t = mc(null, t, r, e, n);
              break e;
            case 14:
              t = pc(null, t, r, Xt(r.type, e), n);
              break e;
          }
          throw Error(a(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : Xt(r, i)),
          Ra(e, t, r, i, n)
        );
      case 1:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : Xt(r, i)),
          wc(e, t, r, i, n)
        );
      case 3:
        e: {
          if ((xc(t), e === null)) throw Error(a(387));
          (r = t.pendingProps),
            (s = t.memoizedState),
            (i = s.element),
            Ou(e, t),
            _i(t, r, null, n);
          var f = t.memoizedState;
          if (((r = f.element), s.isDehydrated))
            if (
              ((s = {
                element: r,
                isDehydrated: !1,
                cache: f.cache,
                pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
                transitions: f.transitions,
              }),
              (t.updateQueue.baseState = s),
              (t.memoizedState = s),
              t.flags & 256)
            ) {
              (i = $r(Error(a(423)), t)), (t = Sc(e, t, r, n, i));
              break e;
            } else if (r !== i) {
              (i = $r(Error(a(424)), t)), (t = Sc(e, t, r, n, i));
              break e;
            } else
              for (
                zt = Tn(t.stateNode.containerInfo.firstChild),
                  Mt = t,
                  $e = !0,
                  Jt = null,
                  n = Du(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((br(), r === i)) {
              t = gn(e, t, n);
              break e;
            }
            vt(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          bu(t),
          e === null && la(t),
          (r = t.type),
          (i = t.pendingProps),
          (s = e !== null ? e.memoizedProps : null),
          (f = i.children),
          Yo(r, i) ? (f = null) : s !== null && Yo(r, s) && (t.flags |= 32),
          yc(e, t),
          vt(e, t, f, n),
          t.child
        );
      case 6:
        return e === null && la(t), null;
      case 13:
        return Ec(e, t, n);
      case 4:
        return (
          fa(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Ar(t, null, r, n)) : vt(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : Xt(r, i)),
          mc(e, t, r, i, n)
        );
      case 7:
        return vt(e, t, t.pendingProps, n), t.child;
      case 8:
        return vt(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return vt(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (i = t.pendingProps),
            (s = t.memoizedProps),
            (f = i.value),
            Ae(Li, r._currentValue),
            (r._currentValue = f),
            s !== null)
          )
            if (Yt(s.value, f)) {
              if (s.children === i.children && !Et.current) {
                t = gn(e, t, n);
                break e;
              }
            } else
              for (s = t.child, s !== null && (s.return = t); s !== null; ) {
                var y = s.dependencies;
                if (y !== null) {
                  f = s.child;
                  for (var x = y.firstContext; x !== null; ) {
                    if (x.context === r) {
                      if (s.tag === 1) {
                        (x = vn(-1, n & -n)), (x.tag = 2);
                        var _ = s.updateQueue;
                        if (_ !== null) {
                          _ = _.shared;
                          var b = _.pending;
                          b === null
                            ? (x.next = x)
                            : ((x.next = b.next), (b.next = x)),
                            (_.pending = x);
                        }
                      }
                      (s.lanes |= n),
                        (x = s.alternate),
                        x !== null && (x.lanes |= n),
                        ua(s.return, n, t),
                        (y.lanes |= n);
                      break;
                    }
                    x = x.next;
                  }
                } else if (s.tag === 10) f = s.type === t.type ? null : s.child;
                else if (s.tag === 18) {
                  if (((f = s.return), f === null)) throw Error(a(341));
                  (f.lanes |= n),
                    (y = f.alternate),
                    y !== null && (y.lanes |= n),
                    ua(f, n, t),
                    (f = s.sibling);
                } else f = s.child;
                if (f !== null) f.return = s;
                else
                  for (f = s; f !== null; ) {
                    if (f === t) {
                      f = null;
                      break;
                    }
                    if (((s = f.sibling), s !== null)) {
                      (s.return = f.return), (f = s);
                      break;
                    }
                    f = f.return;
                  }
                s = f;
              }
          vt(e, t, i.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (i = t.type),
          (r = t.pendingProps.children),
          Ur(t, n),
          (i = Ft(i)),
          (r = r(i)),
          (t.flags |= 1),
          vt(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (i = Xt(r, t.pendingProps)),
          (i = Xt(r.type, i)),
          pc(e, t, r, i, n)
        );
      case 15:
        return vc(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : Xt(r, i)),
          Ui(e, t),
          (t.tag = 1),
          kt(r) ? ((e = !0), ki(t)) : (e = !1),
          Ur(t, n),
          ac(t, r, i),
          Na(t, r, i, n),
          La(null, t, r, !0, e, n)
        );
      case 19:
        return Cc(e, t, n);
      case 22:
        return gc(e, t, n);
    }
    throw Error(a(156, t.tag));
  };
  function Kc(e, t) {
    return tn(e, t);
  }
  function Yh(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Vt(e, t, n, r) {
    return new Yh(e, t, n, r);
  }
  function Ya(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Jh(e) {
    if (typeof e == "function") return Ya(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === lt)) return 11;
      if (e === ze) return 14;
    }
    return 2;
  }
  function Wn(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = Vt(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Zi(e, t, n, r, i, s) {
    var f = 2;
    if (((r = e), typeof e == "function")) Ya(e) && (f = 1);
    else if (typeof e == "string") f = 5;
    else
      e: switch (e) {
        case ve:
          return pr(n.children, i, s, t);
        case Se:
          (f = 8), (i |= 8);
          break;
        case pe:
          return (
            (e = Vt(12, n, t, i | 2)), (e.elementType = pe), (e.lanes = s), e
          );
        case Je:
          return (e = Vt(13, n, t, i)), (e.elementType = Je), (e.lanes = s), e;
        case xe:
          return (e = Vt(19, n, t, i)), (e.elementType = xe), (e.lanes = s), e;
        case Ee:
          return qi(n, i, s, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Oe:
                f = 10;
                break e;
              case et:
                f = 9;
                break e;
              case lt:
                f = 11;
                break e;
              case ze:
                f = 14;
                break e;
              case ye:
                (f = 16), (r = null);
                break e;
            }
          throw Error(a(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = Vt(f, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t
    );
  }
  function pr(e, t, n, r) {
    return (e = Vt(7, e, r, t)), (e.lanes = n), e;
  }
  function qi(e, t, n, r) {
    return (
      (e = Vt(22, e, r, t)),
      (e.elementType = Ee),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Ja(e, t, n) {
    return (e = Vt(6, e, null, t)), (e.lanes = n), e;
  }
  function Xa(e, t, n) {
    return (
      (t = Vt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Xh(e, t, n, r, i) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Co(0)),
      (this.expirationTimes = Co(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Co(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = i),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Za(e, t, n, r, i, s, f, y, x) {
    return (
      (e = new Xh(e, t, n, y, x)),
      t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
      (s = Vt(3, null, null, t)),
      (e.current = s),
      (s.stateNode = e),
      (s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      da(s),
      e
    );
  }
  function Zh(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: z,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function Yc(e) {
    if (!e) return In;
    e = e._reactInternals;
    e: {
      if (Pe(e) !== e || e.tag !== 1) throw Error(a(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (kt(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(a(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (kt(n)) return ku(e, n, t);
    }
    return t;
  }
  function Jc(e, t, n, r, i, s, f, y, x) {
    return (
      (e = Za(n, r, !0, e, i, s, f, y, x)),
      (e.context = Yc(null)),
      (n = e.current),
      (r = gt()),
      (i = $n(n)),
      (s = vn(r, i)),
      (s.callback = t ?? null),
      An(n, s, i),
      (e.current.lanes = i),
      ol(e, i, r),
      jt(e, r),
      e
    );
  }
  function eo(e, t, n, r) {
    var i = t.current,
      s = gt(),
      f = $n(i);
    return (
      (n = Yc(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = vn(s, f)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = An(i, t, f)),
      e !== null && (en(e, i, f, s), zi(e, i, f)),
      f
    );
  }
  function to(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Xc(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function qa(e, t) {
    Xc(e, t), (e = e.alternate) && Xc(e, t);
  }
  function qh() {
    return null;
  }
  var Zc =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function es(e) {
    this._internalRoot = e;
  }
  (no.prototype.render = es.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(a(409));
      eo(e, t, null, null);
    }),
    (no.prototype.unmount = es.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          fr(function () {
            eo(null, e, null, null);
          }),
            (t[dn] = null);
        }
      });
  function no(e) {
    this._internalRoot = e;
  }
  no.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Os();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < zn.length && t !== 0 && t < zn[n].priority; n++);
      zn.splice(n, 0, e), n === 0 && bs(e);
    }
  };
  function ts(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function ro(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function qc() {}
  function em(e, t, n, r, i) {
    if (i) {
      if (typeof r == "function") {
        var s = r;
        r = function () {
          var _ = to(f);
          s.call(_);
        };
      }
      var f = Jc(t, r, e, 0, null, !1, !1, "", qc);
      return (
        (e._reactRootContainer = f),
        (e[dn] = f.current),
        xl(e.nodeType === 8 ? e.parentNode : e),
        fr(),
        f
      );
    }
    for (; (i = e.lastChild); ) e.removeChild(i);
    if (typeof r == "function") {
      var y = r;
      r = function () {
        var _ = to(x);
        y.call(_);
      };
    }
    var x = Za(e, 0, !1, null, null, !1, !1, "", qc);
    return (
      (e._reactRootContainer = x),
      (e[dn] = x.current),
      xl(e.nodeType === 8 ? e.parentNode : e),
      fr(function () {
        eo(t, x, n, r);
      }),
      x
    );
  }
  function lo(e, t, n, r, i) {
    var s = n._reactRootContainer;
    if (s) {
      var f = s;
      if (typeof i == "function") {
        var y = i;
        i = function () {
          var x = to(f);
          y.call(x);
        };
      }
      eo(t, f, e, i);
    } else f = em(n, t, e, i, r);
    return to(f);
  }
  (Ds = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = il(t.pendingLanes);
          n !== 0 &&
            (No(t, n | 1),
            jt(t, Fe()),
            (Le & 6) === 0 && ((Gr = Fe() + 500), Fn()));
        }
        break;
      case 13:
        fr(function () {
          var r = pn(e, 1);
          if (r !== null) {
            var i = gt();
            en(r, e, 1, i);
          }
        }),
          qa(e, 1);
    }
  }),
    (jo = function (e) {
      if (e.tag === 13) {
        var t = pn(e, 134217728);
        if (t !== null) {
          var n = gt();
          en(t, e, 134217728, n);
        }
        qa(e, 134217728);
      }
    }),
    (Ts = function (e) {
      if (e.tag === 13) {
        var t = $n(e),
          n = pn(e, t);
        if (n !== null) {
          var r = gt();
          en(n, e, t, r);
        }
        qa(e, t);
      }
    }),
    (Os = function () {
      return Te;
    }),
    (Is = function (e, t) {
      var n = Te;
      try {
        return (Te = e), t();
      } finally {
        Te = n;
      }
    }),
    (nl = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Sr(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var i = Si(r);
                if (!i) throw Error(a(90));
                Xr(r), Sr(r, i);
              }
            }
          }
          break;
        case "textarea":
          qr(e, n);
          break;
        case "select":
          (t = n.value), t != null && En(e, !!n.multiple, t, !1);
      }
    }),
    (ei = Ga),
    (ti = fr);
  var tm = { usingClientEntryPoint: !1, Events: [kl, Dr, Si, er, tr, Ga] },
    Fl = {
      findFiberByHostInstance: lr,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    nm = {
      bundleType: Fl.bundleType,
      version: Fl.version,
      rendererPackageName: Fl.rendererPackageName,
      rendererConfig: Fl.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: ie.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = je(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Fl.findFiberByHostInstance || qh,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var io = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!io.isDisabled && io.supportsFiber)
      try {
        (cn = io.inject(nm)), (St = io);
      } catch {}
  }
  return (
    (Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tm),
    (Pt.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!ts(t)) throw Error(a(200));
      return Zh(e, t, null, n);
    }),
    (Pt.createRoot = function (e, t) {
      if (!ts(e)) throw Error(a(299));
      var n = !1,
        r = "",
        i = Zc;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        (t = Za(e, 1, !1, null, null, n, !1, r, i)),
        (e[dn] = t.current),
        xl(e.nodeType === 8 ? e.parentNode : e),
        new es(t)
      );
    }),
    (Pt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(a(188))
          : ((e = Object.keys(e).join(",")), Error(a(268, e)));
      return (e = je(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (Pt.flushSync = function (e) {
      return fr(e);
    }),
    (Pt.hydrate = function (e, t, n) {
      if (!ro(t)) throw Error(a(200));
      return lo(null, e, t, !0, n);
    }),
    (Pt.hydrateRoot = function (e, t, n) {
      if (!ts(e)) throw Error(a(405));
      var r = (n != null && n.hydratedSources) || null,
        i = !1,
        s = "",
        f = Zc;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (i = !0),
          n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (f = n.onRecoverableError)),
        (t = Jc(t, null, e, 1, n ?? null, i, !1, s, f)),
        (e[dn] = t.current),
        xl(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (n = r[e]),
            (i = n._getVersion),
            (i = i(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, i])
              : t.mutableSourceEagerHydrationData.push(n, i);
      return new no(t);
    }),
    (Pt.render = function (e, t, n) {
      if (!ro(t)) throw Error(a(200));
      return lo(null, e, t, !1, n);
    }),
    (Pt.unmountComponentAtNode = function (e) {
      if (!ro(e)) throw Error(a(40));
      return e._reactRootContainer
        ? (fr(function () {
            lo(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[dn] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Pt.unstable_batchedUpdates = Ga),
    (Pt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!ro(n)) throw Error(a(200));
      if (e == null || e._reactInternals === void 0) throw Error(a(38));
      return lo(e, t, n, !1, r);
    }),
    (Pt.version = "18.3.1-next-f1338f8080-20240426"),
    Pt
  );
}
var ad;
function bd() {
  if (ad) return ls.exports;
  ad = 1;
  function l() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (o) {
        console.error(o);
      }
  }
  return l(), (ls.exports = um()), ls.exports;
}
var sd;
function cm() {
  if (sd) return oo;
  sd = 1;
  var l = bd();
  return (oo.createRoot = l.createRoot), (oo.hydrateRoot = l.hydrateRoot), oo;
}
var dm = cm();
const fm = Fd(dm);
var Al = {},
  ud;
function hm() {
  if (ud) return Al;
  (ud = 1),
    Object.defineProperty(Al, "__esModule", { value: !0 }),
    (Al.parse = p),
    (Al.serialize = g);
  const l = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    o = /^[\u0021-\u003A\u003C-\u007E]*$/,
    a =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    d = /^[\u0020-\u003A\u003D-\u007E]*$/,
    u = Object.prototype.toString,
    h = (() => {
      const C = function () {};
      return (C.prototype = Object.create(null)), C;
    })();
  function p(C, L) {
    const T = new h(),
      A = C.length;
    if (A < 2) return T;
    const H = (L == null ? void 0 : L.decode) || E;
    let O = 0;
    do {
      const le = C.indexOf("=", O);
      if (le === -1) break;
      const K = C.indexOf(";", O),
        ie = K === -1 ? A : K;
      if (le > ie) {
        O = C.lastIndexOf(";", le - 1) + 1;
        continue;
      }
      const de = v(C, O, le),
        z = m(C, le, de),
        ve = C.slice(de, z);
      if (T[ve] === void 0) {
        let Se = v(C, le + 1, ie),
          pe = m(C, ie, Se);
        const Oe = H(C.slice(Se, pe));
        T[ve] = Oe;
      }
      O = ie + 1;
    } while (O < A);
    return T;
  }
  function v(C, L, T) {
    do {
      const A = C.charCodeAt(L);
      if (A !== 32 && A !== 9) return L;
    } while (++L < T);
    return T;
  }
  function m(C, L, T) {
    for (; L > T; ) {
      const A = C.charCodeAt(--L);
      if (A !== 32 && A !== 9) return L + 1;
    }
    return T;
  }
  function g(C, L, T) {
    const A = (T == null ? void 0 : T.encode) || encodeURIComponent;
    if (!l.test(C)) throw new TypeError(`argument name is invalid: ${C}`);
    const H = A(L);
    if (!o.test(H)) throw new TypeError(`argument val is invalid: ${L}`);
    let O = C + "=" + H;
    if (!T) return O;
    if (T.maxAge !== void 0) {
      if (!Number.isInteger(T.maxAge))
        throw new TypeError(`option maxAge is invalid: ${T.maxAge}`);
      O += "; Max-Age=" + T.maxAge;
    }
    if (T.domain) {
      if (!a.test(T.domain))
        throw new TypeError(`option domain is invalid: ${T.domain}`);
      O += "; Domain=" + T.domain;
    }
    if (T.path) {
      if (!d.test(T.path))
        throw new TypeError(`option path is invalid: ${T.path}`);
      O += "; Path=" + T.path;
    }
    if (T.expires) {
      if (!M(T.expires) || !Number.isFinite(T.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${T.expires}`);
      O += "; Expires=" + T.expires.toUTCString();
    }
    if (
      (T.httpOnly && (O += "; HttpOnly"),
      T.secure && (O += "; Secure"),
      T.partitioned && (O += "; Partitioned"),
      T.priority)
    )
      switch (
        typeof T.priority == "string" ? T.priority.toLowerCase() : void 0
      ) {
        case "low":
          O += "; Priority=Low";
          break;
        case "medium":
          O += "; Priority=Medium";
          break;
        case "high":
          O += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${T.priority}`);
      }
    if (T.sameSite)
      switch (
        typeof T.sameSite == "string" ? T.sameSite.toLowerCase() : T.sameSite
      ) {
        case !0:
        case "strict":
          O += "; SameSite=Strict";
          break;
        case "lax":
          O += "; SameSite=Lax";
          break;
        case "none":
          O += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${T.sameSite}`);
      }
    return O;
  }
  function E(C) {
    if (C.indexOf("%") === -1) return C;
    try {
      return decodeURIComponent(C);
    } catch {
      return C;
    }
  }
  function M(C) {
    return u.call(C) === "[object Date]";
  }
  return Al;
}
hm();
/**
 * react-router v7.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Ad = (l) => {
    throw TypeError(l);
  },
  mm = (l, o, a) => o.has(l) || Ad("Cannot " + a),
  as = (l, o, a) => (
    mm(l, o, "read from private field"), a ? a.call(l) : o.get(l)
  ),
  pm = (l, o, a) =>
    o.has(l)
      ? Ad("Cannot add the same private member more than once")
      : o instanceof WeakSet
        ? o.add(l)
        : o.set(l, a),
  cd = "popstate";
function vm(l = {}) {
  function o(u, h) {
    let {
      pathname: p = "/",
      search: v = "",
      hash: m = "",
    } = xn(u.location.hash.substring(1));
    return (
      !p.startsWith("/") && !p.startsWith(".") && (p = "/" + p),
      Wl(
        "",
        { pathname: p, search: v, hash: m },
        (h.state && h.state.usr) || null,
        (h.state && h.state.key) || "default",
      )
    );
  }
  function a(u, h) {
    let p = u.document.querySelector("base"),
      v = "";
    if (p && p.getAttribute("href")) {
      let m = u.location.href,
        g = m.indexOf("#");
      v = g === -1 ? m : m.slice(0, g);
    }
    return v + "#" + (typeof h == "string" ? h : Yn(h));
  }
  function d(u, h) {
    Ze(
      u.pathname.charAt(0) === "/",
      `relative pathnames are not supported in hash history.push(${JSON.stringify(h)})`,
    );
  }
  return ym(o, a, d, l);
}
function Ne(l, o) {
  if (l === !1 || l === null || typeof l > "u") throw new Error(o);
}
function Ze(l, o) {
  if (!l) {
    typeof console < "u" && console.warn(o);
    try {
      throw new Error(o);
    } catch {}
  }
}
function gm() {
  return Math.random().toString(36).substring(2, 10);
}
function dd(l, o) {
  return { usr: l.state, key: l.key, idx: o };
}
function Wl(l, o, a = null, d) {
  return {
    pathname: typeof l == "string" ? l : l.pathname,
    search: "",
    hash: "",
    ...(typeof o == "string" ? xn(o) : o),
    state: a,
    key: (o && o.key) || d || gm(),
  };
}
function Yn({ pathname: l = "/", search: o = "", hash: a = "" }) {
  return (
    o && o !== "?" && (l += o.charAt(0) === "?" ? o : "?" + o),
    a && a !== "#" && (l += a.charAt(0) === "#" ? a : "#" + a),
    l
  );
}
function xn(l) {
  let o = {};
  if (l) {
    let a = l.indexOf("#");
    a >= 0 && ((o.hash = l.substring(a)), (l = l.substring(0, a)));
    let d = l.indexOf("?");
    d >= 0 && ((o.search = l.substring(d)), (l = l.substring(0, d))),
      l && (o.pathname = l);
  }
  return o;
}
function ym(l, o, a, d = {}) {
  let { window: u = document.defaultView, v5Compat: h = !1 } = d,
    p = u.history,
    v = "POP",
    m = null,
    g = E();
  g == null && ((g = 0), p.replaceState({ ...p.state, idx: g }, ""));
  function E() {
    return (p.state || { idx: null }).idx;
  }
  function M() {
    v = "POP";
    let H = E(),
      O = H == null ? null : H - g;
    (g = H), m && m({ action: v, location: A.location, delta: O });
  }
  function C(H, O) {
    v = "PUSH";
    let le = Wl(A.location, H, O);
    a && a(le, H), (g = E() + 1);
    let K = dd(le, g),
      ie = A.createHref(le);
    try {
      p.pushState(K, "", ie);
    } catch (de) {
      if (de instanceof DOMException && de.name === "DataCloneError") throw de;
      u.location.assign(ie);
    }
    h && m && m({ action: v, location: A.location, delta: 1 });
  }
  function L(H, O) {
    v = "REPLACE";
    let le = Wl(A.location, H, O);
    a && a(le, H), (g = E());
    let K = dd(le, g),
      ie = A.createHref(le);
    p.replaceState(K, "", ie),
      h && m && m({ action: v, location: A.location, delta: 0 });
  }
  function T(H) {
    return Vd(H);
  }
  let A = {
    get action() {
      return v;
    },
    get location() {
      return l(u, p);
    },
    listen(H) {
      if (m) throw new Error("A history only accepts one active listener");
      return (
        u.addEventListener(cd, M),
        (m = H),
        () => {
          u.removeEventListener(cd, M), (m = null);
        }
      );
    },
    createHref(H) {
      return o(u, H);
    },
    createURL: T,
    encodeLocation(H) {
      let O = T(H);
      return { pathname: O.pathname, search: O.search, hash: O.hash };
    },
    push: C,
    replace: L,
    go(H) {
      return p.go(H);
    },
  };
  return A;
}
function Vd(l, o = !1) {
  let a = "http://localhost";
  typeof window < "u" &&
    (a =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    Ne(a, "No window.location.(origin|href) available to create URL");
  let d = typeof l == "string" ? l : Yn(l);
  return (
    (d = d.replace(/ $/, "%20")),
    !o && d.startsWith("//") && (d = a + d),
    new URL(d, a)
  );
}
var $l,
  fd = class {
    constructor(l) {
      if ((pm(this, $l, new Map()), l)) for (let [o, a] of l) this.set(o, a);
    }
    get(l) {
      if (as(this, $l).has(l)) return as(this, $l).get(l);
      if (l.defaultValue !== void 0) return l.defaultValue;
      throw new Error("No value found for context");
    }
    set(l, o) {
      as(this, $l).set(l, o);
    }
  };
$l = new WeakMap();
var wm = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function xm(l) {
  return wm.has(l);
}
var Sm = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "unstable_middleware",
  "children",
]);
function Em(l) {
  return Sm.has(l);
}
function km(l) {
  return l.index === !0;
}
function ho(l, o, a = [], d = {}) {
  return l.map((u, h) => {
    let p = [...a, String(h)],
      v = typeof u.id == "string" ? u.id : p.join("-");
    if (
      (Ne(
        u.index !== !0 || !u.children,
        "Cannot specify children on an index route",
      ),
      Ne(
        !d[v],
        `Found a route id collision on id "${v}".  Route id's must be globally unique within Data Router usages`,
      ),
      km(u))
    ) {
      let m = { ...u, ...o(u), id: v };
      return (d[v] = m), m;
    } else {
      let m = { ...u, ...o(u), id: v, children: void 0 };
      return (
        (d[v] = m), u.children && (m.children = ho(u.children, o, p, d)), m
      );
    }
  });
}
function Kn(l, o, a = "/") {
  return uo(l, o, a, !1);
}
function uo(l, o, a, d) {
  let u = typeof o == "string" ? xn(o) : o,
    h = Ht(u.pathname || "/", a);
  if (h == null) return null;
  let p = Ud(l);
  Nm(p);
  let v = null;
  for (let m = 0; v == null && m < p.length; ++m) {
    let g = Im(h);
    v = Tm(p[m], g, d);
  }
  return v;
}
function Cm(l, o) {
  let { route: a, pathname: d, params: u } = l;
  return { id: a.id, pathname: d, params: u, data: o[a.id], handle: a.handle };
}
function Ud(l, o = [], a = [], d = "") {
  let u = (h, p, v) => {
    let m = {
      relativePath: v === void 0 ? h.path || "" : v,
      caseSensitive: h.caseSensitive === !0,
      childrenIndex: p,
      route: h,
    };
    m.relativePath.startsWith("/") &&
      (Ne(
        m.relativePath.startsWith(d),
        `Absolute route path "${m.relativePath}" nested under path "${d}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
      (m.relativePath = m.relativePath.slice(d.length)));
    let g = an([d, m.relativePath]),
      E = a.concat(m);
    h.children &&
      h.children.length > 0 &&
      (Ne(
        h.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${g}".`,
      ),
      Ud(h.children, o, E, g)),
      !(h.path == null && !h.index) &&
        o.push({ path: g, score: _m(g, h.index), routesMeta: E });
  };
  return (
    l.forEach((h, p) => {
      var v;
      if (h.path === "" || !((v = h.path) != null && v.includes("?"))) u(h, p);
      else for (let m of Hd(h.path)) u(h, p, m);
    }),
    o
  );
}
function Hd(l) {
  let o = l.split("/");
  if (o.length === 0) return [];
  let [a, ...d] = o,
    u = a.endsWith("?"),
    h = a.replace(/\?$/, "");
  if (d.length === 0) return u ? [h, ""] : [h];
  let p = Hd(d.join("/")),
    v = [];
  return (
    v.push(...p.map((m) => (m === "" ? h : [h, m].join("/")))),
    u && v.push(...p),
    v.map((m) => (l.startsWith("/") && m === "" ? "/" : m))
  );
}
function Nm(l) {
  l.sort((o, a) =>
    o.score !== a.score
      ? a.score - o.score
      : Dm(
          o.routesMeta.map((d) => d.childrenIndex),
          a.routesMeta.map((d) => d.childrenIndex),
        ),
  );
}
var jm = /^:[\w-]+$/,
  Pm = 3,
  Rm = 2,
  Lm = 1,
  Mm = 10,
  zm = -2,
  hd = (l) => l === "*";
function _m(l, o) {
  let a = l.split("/"),
    d = a.length;
  return (
    a.some(hd) && (d += zm),
    o && (d += Rm),
    a
      .filter((u) => !hd(u))
      .reduce((u, h) => u + (jm.test(h) ? Pm : h === "" ? Lm : Mm), d)
  );
}
function Dm(l, o) {
  return l.length === o.length && l.slice(0, -1).every((d, u) => d === o[u])
    ? l[l.length - 1] - o[o.length - 1]
    : 0;
}
function Tm(l, o, a = !1) {
  let { routesMeta: d } = l,
    u = {},
    h = "/",
    p = [];
  for (let v = 0; v < d.length; ++v) {
    let m = d[v],
      g = v === d.length - 1,
      E = h === "/" ? o : o.slice(h.length) || "/",
      M = mo(
        { path: m.relativePath, caseSensitive: m.caseSensitive, end: g },
        E,
      ),
      C = m.route;
    if (
      (!M &&
        g &&
        a &&
        !d[d.length - 1].route.index &&
        (M = mo(
          { path: m.relativePath, caseSensitive: m.caseSensitive, end: !1 },
          E,
        )),
      !M)
    )
      return null;
    Object.assign(u, M.params),
      p.push({
        params: u,
        pathname: an([h, M.pathname]),
        pathnameBase: Am(an([h, M.pathnameBase])),
        route: C,
      }),
      M.pathnameBase !== "/" && (h = an([h, M.pathnameBase]));
  }
  return p;
}
function mo(l, o) {
  typeof l == "string" && (l = { path: l, caseSensitive: !1, end: !0 });
  let [a, d] = Om(l.path, l.caseSensitive, l.end),
    u = o.match(a);
  if (!u) return null;
  let h = u[0],
    p = h.replace(/(.)\/+$/, "$1"),
    v = u.slice(1);
  return {
    params: d.reduce((g, { paramName: E, isOptional: M }, C) => {
      if (E === "*") {
        let T = v[C] || "";
        p = h.slice(0, h.length - T.length).replace(/(.)\/+$/, "$1");
      }
      const L = v[C];
      return (
        M && !L ? (g[E] = void 0) : (g[E] = (L || "").replace(/%2F/g, "/")), g
      );
    }, {}),
    pathname: h,
    pathnameBase: p,
    pattern: l,
  };
}
function Om(l, o = !1, a = !0) {
  Ze(
    l === "*" || !l.endsWith("*") || l.endsWith("/*"),
    `Route path "${l}" will be treated as if it were "${l.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/, "/*")}".`,
  );
  let d = [],
    u =
      "^" +
      l
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (p, v, m) => (
            d.push({ paramName: v, isOptional: m != null }),
            m ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    l.endsWith("*")
      ? (d.push({ paramName: "*" }),
        (u += l === "*" || l === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : a
        ? (u += "\\/*$")
        : l !== "" && l !== "/" && (u += "(?:(?=\\/|$))"),
    [new RegExp(u, o ? void 0 : "i"), d]
  );
}
function Im(l) {
  try {
    return l
      .split("/")
      .map((o) => decodeURIComponent(o).replace(/\//g, "%2F"))
      .join("/");
  } catch (o) {
    return (
      Ze(
        !1,
        `The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`,
      ),
      l
    );
  }
}
function Ht(l, o) {
  if (o === "/") return l;
  if (!l.toLowerCase().startsWith(o.toLowerCase())) return null;
  let a = o.endsWith("/") ? o.length - 1 : o.length,
    d = l.charAt(a);
  return d && d !== "/" ? null : l.slice(a) || "/";
}
function Fm(l, o = "/") {
  let {
    pathname: a,
    search: d = "",
    hash: u = "",
  } = typeof l == "string" ? xn(l) : l;
  return {
    pathname: a ? (a.startsWith("/") ? a : bm(a, o)) : o,
    search: Vm(d),
    hash: Um(u),
  };
}
function bm(l, o) {
  let a = o.replace(/\/+$/, "").split("/");
  return (
    l.split("/").forEach((u) => {
      u === ".." ? a.length > 1 && a.pop() : u !== "." && a.push(u);
    }),
    a.length > 1 ? a.join("/") : "/"
  );
}
function ss(l, o, a, d) {
  return `Cannot include a '${l}' character in a manually specified \`to.${o}\` field [${JSON.stringify(d)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function $d(l) {
  return l.filter(
    (o, a) => a === 0 || (o.route.path && o.route.path.length > 0),
  );
}
function Ss(l) {
  let o = $d(l);
  return o.map((a, d) => (d === o.length - 1 ? a.pathname : a.pathnameBase));
}
function Es(l, o, a, d = !1) {
  let u;
  typeof l == "string"
    ? (u = xn(l))
    : ((u = { ...l }),
      Ne(
        !u.pathname || !u.pathname.includes("?"),
        ss("?", "pathname", "search", u),
      ),
      Ne(
        !u.pathname || !u.pathname.includes("#"),
        ss("#", "pathname", "hash", u),
      ),
      Ne(!u.search || !u.search.includes("#"), ss("#", "search", "hash", u)));
  let h = l === "" || u.pathname === "",
    p = h ? "/" : u.pathname,
    v;
  if (p == null) v = a;
  else {
    let M = o.length - 1;
    if (!d && p.startsWith("..")) {
      let C = p.split("/");
      for (; C[0] === ".."; ) C.shift(), (M -= 1);
      u.pathname = C.join("/");
    }
    v = M >= 0 ? o[M] : "/";
  }
  let m = Fm(u, v),
    g = p && p !== "/" && p.endsWith("/"),
    E = (h || p === ".") && a.endsWith("/");
  return !m.pathname.endsWith("/") && (g || E) && (m.pathname += "/"), m;
}
var an = (l) => l.join("/").replace(/\/\/+/g, "/"),
  Am = (l) => l.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Vm = (l) => (!l || l === "?" ? "" : l.startsWith("?") ? l : "?" + l),
  Um = (l) => (!l || l === "#" ? "" : l.startsWith("#") ? l : "#" + l),
  po = class {
    constructor(l, o, a, d = !1) {
      (this.status = l),
        (this.statusText = o || ""),
        (this.internal = d),
        a instanceof Error
          ? ((this.data = a.toString()), (this.error = a))
          : (this.data = a);
    }
  };
function Gl(l) {
  return (
    l != null &&
    typeof l.status == "number" &&
    typeof l.statusText == "string" &&
    typeof l.internal == "boolean" &&
    "data" in l
  );
}
var Bd = ["POST", "PUT", "PATCH", "DELETE"],
  Hm = new Set(Bd),
  $m = ["GET", ...Bd],
  Bm = new Set($m),
  Wm = new Set([301, 302, 303, 307, 308]),
  Gm = new Set([307, 308]),
  us = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Qm = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Vl = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  ks = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Km = (l) => ({ hasErrorBoundary: !!l.hasErrorBoundary }),
  Wd = "remix-router-transitions",
  Gd = Symbol("ResetLoaderData");
function Ym(l) {
  const o = l.window ? l.window : typeof window < "u" ? window : void 0,
    a =
      typeof o < "u" &&
      typeof o.document < "u" &&
      typeof o.document.createElement < "u";
  Ne(
    l.routes.length > 0,
    "You must provide a non-empty routes array to createRouter",
  );
  let d = l.hydrationRouteProperties || [],
    u = l.mapRouteProperties || Km,
    h = {},
    p = ho(l.routes, u, void 0, h),
    v,
    m = l.basename || "/",
    g = l.dataStrategy || ep,
    E = { unstable_middleware: !1, ...l.future },
    M = null,
    C = new Set(),
    L = null,
    T = null,
    A = null,
    H = l.hydrationData != null,
    O = Kn(p, l.history.location, m),
    le = !1,
    K = null,
    ie;
  if (O == null && !l.patchRoutesOnNavigation) {
    let w = Ut(404, { pathname: l.history.location.pathname }),
      { matches: N, route: D } = Nd(p);
    (ie = !0), (O = N), (K = { [D.id]: w });
  } else if (
    (O &&
      !l.hydrationData &&
      er(O, p, l.history.location.pathname).active &&
      (O = null),
    O)
  )
    if (O.some((w) => w.route.lazy)) ie = !1;
    else if (!O.some((w) => w.route.loader)) ie = !0;
    else {
      let w = l.hydrationData ? l.hydrationData.loaderData : null,
        N = l.hydrationData ? l.hydrationData.errors : null;
      if (N) {
        let D = O.findIndex((V) => N[V.route.id] !== void 0);
        ie = O.slice(0, D + 1).every((V) => !ms(V.route, w, N));
      } else ie = O.every((D) => !ms(D.route, w, N));
    }
  else {
    (ie = !1), (O = []);
    let w = er(null, p, l.history.location.pathname);
    w.active && w.matches && ((le = !0), (O = w.matches));
  }
  let de,
    z = {
      historyAction: l.history.action,
      location: l.history.location,
      matches: O,
      initialized: ie,
      navigation: us,
      restoreScrollPosition: l.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (l.hydrationData && l.hydrationData.loaderData) || {},
      actionData: (l.hydrationData && l.hydrationData.actionData) || null,
      errors: (l.hydrationData && l.hydrationData.errors) || K,
      fetchers: new Map(),
      blockers: new Map(),
    },
    ve = "POP",
    Se = !1,
    pe,
    Oe = !1,
    et = new Map(),
    lt = null,
    Je = !1,
    xe = !1,
    ze = new Set(),
    ye = new Map(),
    Ee = 0,
    B = -1,
    X = new Map(),
    W = new Set(),
    k = new Map(),
    I = new Map(),
    oe = new Set(),
    he = new Map(),
    Ce,
    we = null;
  function Ie() {
    if (
      ((M = l.history.listen(({ action: w, location: N, delta: D }) => {
        if (Ce) {
          Ce(), (Ce = void 0);
          return;
        }
        Ze(
          he.size === 0 || D != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
        );
        let V = Nr({
          currentLocation: z.location,
          nextLocation: N,
          historyAction: w,
        });
        if (V && D != null) {
          let G = new Promise((ne) => {
            Ce = ne;
          });
          l.history.go(D * -1),
            Cn(V, {
              state: "blocked",
              location: N,
              proceed() {
                Cn(V, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: N,
                }),
                  G.then(() => l.history.go(D));
              },
              reset() {
                let ne = new Map(z.blockers);
                ne.set(V, Vl), De({ blockers: ne });
              },
            });
          return;
        }
        return Bt(w, N);
      })),
      a)
    ) {
      dp(o, et);
      let w = () => fp(o, et);
      o.addEventListener("pagehide", w),
        (lt = () => o.removeEventListener("pagehide", w));
    }
    return z.initialized || Bt("POP", z.location, { initialHydration: !0 }), de;
  }
  function _e() {
    M && M(),
      lt && lt(),
      C.clear(),
      pe && pe.abort(),
      z.fetchers.forEach((w, N) => kr(N)),
      z.blockers.forEach((w, N) => Cr(N));
  }
  function be(w) {
    return C.add(w), () => C.delete(w);
  }
  function De(w, N = {}) {
    z = { ...z, ...w };
    let D = [],
      V = [];
    z.fetchers.forEach((G, ne) => {
      G.state === "idle" && (oe.has(ne) ? D.push(ne) : V.push(ne));
    }),
      oe.forEach((G) => {
        !z.fetchers.has(G) && !ye.has(G) && D.push(G);
      }),
      [...C].forEach((G) =>
        G(z, {
          deletedFetchers: D,
          viewTransitionOpts: N.viewTransitionOpts,
          flushSync: N.flushSync === !0,
        }),
      ),
      D.forEach((G) => kr(G)),
      V.forEach((G) => z.fetchers.delete(G));
  }
  function $t(w, N, { flushSync: D } = {}) {
    var re, me;
    let V =
        z.actionData != null &&
        z.navigation.formMethod != null &&
        Tt(z.navigation.formMethod) &&
        z.navigation.state === "loading" &&
        ((re = w.state) == null ? void 0 : re._isRedirect) !== !0,
      G;
    N.actionData
      ? Object.keys(N.actionData).length > 0
        ? (G = N.actionData)
        : (G = null)
      : V
        ? (G = z.actionData)
        : (G = null);
    let ne = N.loaderData
        ? kd(z.loaderData, N.loaderData, N.matches || [], N.errors)
        : z.loaderData,
      se = z.blockers;
    se.size > 0 && ((se = new Map(se)), se.forEach((ae, ge) => se.set(ge, Vl)));
    let Y =
      Se === !0 ||
      (z.navigation.formMethod != null &&
        Tt(z.navigation.formMethod) &&
        ((me = w.state) == null ? void 0 : me._isRedirect) !== !0);
    v && ((p = v), (v = void 0)),
      Je ||
        ve === "POP" ||
        (ve === "PUSH"
          ? l.history.push(w, w.state)
          : ve === "REPLACE" && l.history.replace(w, w.state));
    let te;
    if (ve === "POP") {
      let ae = et.get(z.location.pathname);
      ae && ae.has(w.pathname)
        ? (te = { currentLocation: z.location, nextLocation: w })
        : et.has(w.pathname) &&
          (te = { currentLocation: w, nextLocation: z.location });
    } else if (Oe) {
      let ae = et.get(z.location.pathname);
      ae
        ? ae.add(w.pathname)
        : ((ae = new Set([w.pathname])), et.set(z.location.pathname, ae)),
        (te = { currentLocation: z.location, nextLocation: w });
    }
    De(
      {
        ...N,
        actionData: G,
        loaderData: ne,
        historyAction: ve,
        location: w,
        initialized: !0,
        navigation: us,
        revalidation: "idle",
        restoreScrollPosition: rl(w, N.matches || z.matches),
        preventScrollReset: Y,
        blockers: se,
      },
      { viewTransitionOpts: te, flushSync: D === !0 },
    ),
      (ve = "POP"),
      (Se = !1),
      (Oe = !1),
      (Je = !1),
      (xe = !1),
      we == null || we.resolve(),
      (we = null);
  }
  async function Xr(w, N) {
    if (typeof w == "number") {
      l.history.go(w);
      return;
    }
    let D = hs(
        z.location,
        z.matches,
        m,
        w,
        N == null ? void 0 : N.fromRouteId,
        N == null ? void 0 : N.relative,
      ),
      { path: V, submission: G, error: ne } = md(!1, D, N),
      se = z.location,
      Y = Wl(z.location, V, N && N.state);
    Y = { ...Y, ...l.history.encodeLocation(Y) };
    let te = N && N.replace != null ? N.replace : void 0,
      re = "PUSH";
    te === !0
      ? (re = "REPLACE")
      : te === !1 ||
        (G != null &&
          Tt(G.formMethod) &&
          G.formAction === z.location.pathname + z.location.search &&
          (re = "REPLACE"));
    let me =
        N && "preventScrollReset" in N ? N.preventScrollReset === !0 : void 0,
      ae = (N && N.flushSync) === !0,
      ge = Nr({ currentLocation: se, nextLocation: Y, historyAction: re });
    if (ge) {
      Cn(ge, {
        state: "blocked",
        location: Y,
        proceed() {
          Cn(ge, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: Y,
          }),
            Xr(w, N);
        },
        reset() {
          let Pe = new Map(z.blockers);
          Pe.set(ge, Vl), De({ blockers: Pe });
        },
      });
      return;
    }
    await Bt(re, Y, {
      submission: G,
      pendingError: ne,
      preventScrollReset: me,
      replace: N && N.replace,
      enableViewTransition: N && N.viewTransition,
      flushSync: ae,
    });
  }
  function xr() {
    we || (we = hp()), Er(), De({ revalidation: "loading" });
    let w = we.promise;
    return z.navigation.state === "submitting"
      ? w
      : z.navigation.state === "idle"
        ? (Bt(z.historyAction, z.location, {
            startUninterruptedRevalidation: !0,
          }),
          w)
        : (Bt(ve || z.historyAction, z.navigation.location, {
            overrideNavigation: z.navigation,
            enableViewTransition: Oe === !0,
          }),
          w);
  }
  async function Bt(w, N, D) {
    pe && pe.abort(),
      (pe = null),
      (ve = w),
      (Je = (D && D.startUninterruptedRevalidation) === !0),
      Nn(z.location, z.matches),
      (Se = (D && D.preventScrollReset) === !0),
      (Oe = (D && D.enableViewTransition) === !0);
    let V = v || p,
      G = D && D.overrideNavigation,
      ne =
        D != null &&
        D.initialHydration &&
        z.matches &&
        z.matches.length > 0 &&
        !le
          ? z.matches
          : Kn(V, N, m),
      se = (D && D.flushSync) === !0;
    if (
      ne &&
      z.initialized &&
      !xe &&
      op(z.location, N) &&
      !(D && D.submission && Tt(D.submission.formMethod))
    ) {
      $t(N, { matches: ne }, { flushSync: se });
      return;
    }
    let Y = er(ne, V, N.pathname);
    if ((Y.active && Y.matches && (ne = Y.matches), !ne)) {
      let { error: tt, notFoundMatches: pt, route: je } = qn(N.pathname);
      $t(
        N,
        { matches: pt, loaderData: {}, errors: { [je.id]: tt } },
        { flushSync: se },
      );
      return;
    }
    pe = new AbortController();
    let te = Kr(l.history, N, pe.signal, D && D.submission),
      re = new fd(
        l.unstable_getContext ? await l.unstable_getContext() : void 0,
      ),
      me;
    if (D && D.pendingError)
      me = [vr(ne).route.id, { type: "error", error: D.pendingError }];
    else if (D && D.submission && Tt(D.submission.formMethod)) {
      let tt = await Jl(
        te,
        N,
        D.submission,
        ne,
        re,
        Y.active,
        D && D.initialHydration === !0,
        { replace: D.replace, flushSync: se },
      );
      if (tt.shortCircuited) return;
      if (tt.pendingActionResult) {
        let [pt, je] = tt.pendingActionResult;
        if (Dt(je) && Gl(je.error) && je.error.status === 404) {
          (pe = null),
            $t(N, {
              matches: tt.matches,
              loaderData: {},
              errors: { [pt]: je.error },
            });
          return;
        }
      }
      (ne = tt.matches || ne),
        (me = tt.pendingActionResult),
        (G = cs(N, D.submission)),
        (se = !1),
        (Y.active = !1),
        (te = Kr(l.history, te.url, te.signal));
    }
    let {
      shortCircuited: ae,
      matches: ge,
      loaderData: Pe,
      errors: Ge,
    } = await Xl(
      te,
      N,
      ne,
      re,
      Y.active,
      G,
      D && D.submission,
      D && D.fetcherSubmission,
      D && D.replace,
      D && D.initialHydration === !0,
      se,
      me,
    );
    ae ||
      ((pe = null),
      $t(N, { matches: ge || ne, ...Cd(me), loaderData: Pe, errors: Ge }));
  }
  async function Jl(w, N, D, V, G, ne, se, Y = {}) {
    Er();
    let te = up(N, D);
    if ((De({ navigation: te }, { flushSync: Y.flushSync === !0 }), ne)) {
      let ae = await tr(V, N.pathname, w.signal);
      if (ae.type === "aborted") return { shortCircuited: !0 };
      if (ae.type === "error") {
        let ge = vr(ae.partialMatches).route.id;
        return {
          matches: ae.partialMatches,
          pendingActionResult: [ge, { type: "error", error: ae.error }],
        };
      } else if (ae.matches) V = ae.matches;
      else {
        let { notFoundMatches: ge, error: Pe, route: Ge } = qn(N.pathname);
        return {
          matches: ge,
          pendingActionResult: [Ge.id, { type: "error", error: Pe }],
        };
      }
    }
    let re,
      me = Bl(V, N);
    if (!me.route.action && !me.route.lazy)
      re = {
        type: "error",
        error: Ut(405, {
          method: w.method,
          pathname: N.pathname,
          routeId: me.route.id,
        }),
      };
    else {
      let ae = Yr(u, h, w, V, me, se ? [] : d, G),
        ge = await kn(w, ae, G, null);
      if (((re = ge[me.route.id]), !re)) {
        for (let Pe of V)
          if (ge[Pe.route.id]) {
            re = ge[Pe.route.id];
            break;
          }
      }
      if (w.signal.aborted) return { shortCircuited: !0 };
    }
    if (gr(re)) {
      let ae;
      return (
        Y && Y.replace != null
          ? (ae = Y.replace)
          : (ae =
              xd(re.response.headers.get("Location"), new URL(w.url), m) ===
              z.location.pathname + z.location.search),
        await Wt(w, re, !0, { submission: D, replace: ae }),
        { shortCircuited: !0 }
      );
    }
    if (Dt(re)) {
      let ae = vr(V, me.route.id);
      return (
        (Y && Y.replace) !== !0 && (ve = "PUSH"),
        { matches: V, pendingActionResult: [ae.route.id, re, me.route.id] }
      );
    }
    return { matches: V, pendingActionResult: [me.route.id, re] };
  }
  async function Xl(w, N, D, V, G, ne, se, Y, te, re, me, ae) {
    let ge = ne || cs(N, se),
      Pe = se || Y || Pd(ge),
      Ge = !Je && !re;
    if (G) {
      if (Ge) {
        let xt = Sr(ae);
        De(
          { navigation: ge, ...(xt !== void 0 ? { actionData: xt } : {}) },
          { flushSync: me },
        );
      }
      let Re = await tr(D, N.pathname, w.signal);
      if (Re.type === "aborted") return { shortCircuited: !0 };
      if (Re.type === "error") {
        let xt = vr(Re.partialMatches).route.id;
        return {
          matches: Re.partialMatches,
          loaderData: {},
          errors: { [xt]: Re.error },
        };
      } else if (Re.matches) D = Re.matches;
      else {
        let { error: xt, notFoundMatches: Kt, route: cn } = qn(N.pathname);
        return { matches: Kt, loaderData: {}, errors: { [cn.id]: xt } };
      }
    }
    let tt = v || p,
      { dsMatches: pt, revalidatingFetchers: je } = pd(
        w,
        V,
        u,
        h,
        l.history,
        z,
        D,
        Pe,
        N,
        re ? [] : d,
        re === !0,
        xe,
        ze,
        oe,
        k,
        W,
        tt,
        m,
        l.patchRoutesOnNavigation != null,
        ae,
      );
    if (
      ((B = ++Ee),
      !l.dataStrategy && !pt.some((Re) => Re.shouldLoad) && je.length === 0)
    ) {
      let Re = el();
      return (
        $t(
          N,
          {
            matches: D,
            loaderData: {},
            errors: ae && Dt(ae[1]) ? { [ae[0]]: ae[1].error } : null,
            ...Cd(ae),
            ...(Re ? { fetchers: new Map(z.fetchers) } : {}),
          },
          { flushSync: me },
        ),
        { shortCircuited: !0 }
      );
    }
    if (Ge) {
      let Re = {};
      if (!G) {
        Re.navigation = ge;
        let xt = Sr(ae);
        xt !== void 0 && (Re.actionData = xt);
      }
      je.length > 0 && (Re.fetchers = Zl(je)), De(Re, { flushSync: me });
    }
    je.forEach((Re) => {
      yt(Re.key), Re.controller && ye.set(Re.key, Re.controller);
    });
    let jn = () => je.forEach((Re) => yt(Re.key));
    pe && pe.signal.addEventListener("abort", jn);
    let { loaderResults: tn, fetcherResults: Pn } = await qr(pt, je, w, V);
    if (w.signal.aborted) return { shortCircuited: !0 };
    pe && pe.signal.removeEventListener("abort", jn),
      je.forEach((Re) => ye.delete(Re.key));
    let wt = ao(tn);
    if (wt)
      return (
        await Wt(w, wt.result, !0, { replace: te }), { shortCircuited: !0 }
      );
    if (((wt = ao(Pn)), wt))
      return (
        W.add(wt.key),
        await Wt(w, wt.result, !0, { replace: te }),
        { shortCircuited: !0 }
      );
    let { loaderData: nr, errors: Fe } = Ed(z, D, tn, ae, je, Pn);
    re && z.errors && (Fe = { ...z.errors, ...Fe });
    let ll = el(),
      Qt = tl(B),
      rr = ll || Qt || je.length > 0;
    return {
      matches: D,
      loaderData: nr,
      errors: Fe,
      ...(rr ? { fetchers: new Map(z.fetchers) } : {}),
    };
  }
  function Sr(w) {
    if (w && !Dt(w[1])) return { [w[0]]: w[1].data };
    if (z.actionData)
      return Object.keys(z.actionData).length === 0 ? null : z.actionData;
  }
  function Zl(w) {
    return (
      w.forEach((N) => {
        let D = z.fetchers.get(N.key),
          V = Ul(void 0, D ? D.data : void 0);
        z.fetchers.set(N.key, V);
      }),
      new Map(z.fetchers)
    );
  }
  async function Zr(w, N, D, V) {
    yt(w);
    let G = (V && V.flushSync) === !0,
      ne = v || p,
      se = hs(z.location, z.matches, m, D, N, V == null ? void 0 : V.relative),
      Y = Kn(ne, se, m),
      te = er(Y, ne, se);
    if ((te.active && te.matches && (Y = te.matches), !Y)) {
      Rt(w, N, Ut(404, { pathname: se }), { flushSync: G });
      return;
    }
    let { path: re, submission: me, error: ae } = md(!0, se, V);
    if (ae) {
      Rt(w, N, ae, { flushSync: G });
      return;
    }
    let ge = Bl(Y, re),
      Pe = new fd(
        l.unstable_getContext ? await l.unstable_getContext() : void 0,
      ),
      Ge = (V && V.preventScrollReset) === !0;
    if (me && Tt(me.formMethod)) {
      await Jn(w, N, re, ge, Y, Pe, te.active, G, Ge, me);
      return;
    }
    k.set(w, { routeId: N, path: re }),
      await En(w, N, re, ge, Y, Pe, te.active, G, Ge, me);
  }
  async function Jn(w, N, D, V, G, ne, se, Y, te, re) {
    Er(), k.delete(w);
    function me(Qe) {
      if (!Qe.route.action && !Qe.route.lazy) {
        let it = Ut(405, { method: re.formMethod, pathname: D, routeId: N });
        return Rt(w, N, it, { flushSync: Y }), !0;
      }
      return !1;
    }
    if (!se && me(V)) return;
    let ae = z.fetchers.get(w);
    Gt(w, cp(re, ae), { flushSync: Y });
    let ge = new AbortController(),
      Pe = Kr(l.history, D, ge.signal, re);
    if (se) {
      let Qe = await tr(G, D, Pe.signal, w);
      if (Qe.type === "aborted") return;
      if (Qe.type === "error") {
        Rt(w, N, Qe.error, { flushSync: Y });
        return;
      } else if (Qe.matches) {
        if (((G = Qe.matches), (V = Bl(G, D)), me(V))) return;
      } else {
        Rt(w, N, Ut(404, { pathname: D }), { flushSync: Y });
        return;
      }
    }
    ye.set(w, ge);
    let Ge = Ee,
      tt = Yr(u, h, Pe, G, V, d, ne),
      je = (await kn(Pe, tt, ne, w))[V.route.id];
    if (Pe.signal.aborted) {
      ye.get(w) === ge && ye.delete(w);
      return;
    }
    if (oe.has(w)) {
      if (gr(je) || Dt(je)) {
        Gt(w, Qn(void 0));
        return;
      }
    } else {
      if (gr(je))
        if ((ye.delete(w), B > Ge)) {
          Gt(w, Qn(void 0));
          return;
        } else
          return (
            W.add(w),
            Gt(w, Ul(re)),
            Wt(Pe, je, !1, { fetcherSubmission: re, preventScrollReset: te })
          );
      if (Dt(je)) {
        Rt(w, N, je.error);
        return;
      }
    }
    let jn = z.navigation.location || z.location,
      tn = Kr(l.history, jn, ge.signal),
      Pn = v || p,
      wt =
        z.navigation.state !== "idle"
          ? Kn(Pn, z.navigation.location, m)
          : z.matches;
    Ne(wt, "Didn't find any matches after fetcher action");
    let nr = ++Ee;
    X.set(w, nr);
    let Fe = Ul(re, je.data);
    z.fetchers.set(w, Fe);
    let { dsMatches: ll, revalidatingFetchers: Qt } = pd(
      tn,
      ne,
      u,
      h,
      l.history,
      z,
      wt,
      re,
      jn,
      d,
      !1,
      xe,
      ze,
      oe,
      k,
      W,
      Pn,
      m,
      l.patchRoutesOnNavigation != null,
      [V.route.id, je],
    );
    Qt.filter((Qe) => Qe.key !== w).forEach((Qe) => {
      let it = Qe.key,
        ni = z.fetchers.get(it),
        Eo = Ul(void 0, ni ? ni.data : void 0);
      z.fetchers.set(it, Eo),
        yt(it),
        Qe.controller && ye.set(it, Qe.controller);
    }),
      De({ fetchers: new Map(z.fetchers) });
    let rr = () => Qt.forEach((Qe) => yt(Qe.key));
    ge.signal.addEventListener("abort", rr);
    let { loaderResults: Re, fetcherResults: xt } = await qr(ll, Qt, tn, ne);
    if (ge.signal.aborted) return;
    if (
      (ge.signal.removeEventListener("abort", rr),
      X.delete(w),
      ye.delete(w),
      Qt.forEach((Qe) => ye.delete(Qe.key)),
      z.fetchers.has(w))
    ) {
      let Qe = Qn(je.data);
      z.fetchers.set(w, Qe);
    }
    let Kt = ao(Re);
    if (Kt) return Wt(tn, Kt.result, !1, { preventScrollReset: te });
    if (((Kt = ao(xt)), Kt))
      return W.add(Kt.key), Wt(tn, Kt.result, !1, { preventScrollReset: te });
    let { loaderData: cn, errors: St } = Ed(z, wt, Re, void 0, Qt, xt);
    tl(nr),
      z.navigation.state === "loading" && nr > B
        ? (Ne(ve, "Expected pending action"),
          pe && pe.abort(),
          $t(z.navigation.location, {
            matches: wt,
            loaderData: cn,
            errors: St,
            fetchers: new Map(z.fetchers),
          }))
        : (De({
            errors: St,
            loaderData: kd(z.loaderData, cn, wt, St),
            fetchers: new Map(z.fetchers),
          }),
          (xe = !1));
  }
  async function En(w, N, D, V, G, ne, se, Y, te, re) {
    let me = z.fetchers.get(w);
    Gt(w, Ul(re, me ? me.data : void 0), { flushSync: Y });
    let ae = new AbortController(),
      ge = Kr(l.history, D, ae.signal);
    if (se) {
      let je = await tr(G, D, ge.signal, w);
      if (je.type === "aborted") return;
      if (je.type === "error") {
        Rt(w, N, je.error, { flushSync: Y });
        return;
      } else if (je.matches) (G = je.matches), (V = Bl(G, D));
      else {
        Rt(w, N, Ut(404, { pathname: D }), { flushSync: Y });
        return;
      }
    }
    ye.set(w, ae);
    let Pe = Ee,
      Ge = Yr(u, h, ge, G, V, d, ne),
      pt = (await kn(ge, Ge, ne, w))[V.route.id];
    if ((ye.get(w) === ae && ye.delete(w), !ge.signal.aborted)) {
      if (oe.has(w)) {
        Gt(w, Qn(void 0));
        return;
      }
      if (gr(pt))
        if (B > Pe) {
          Gt(w, Qn(void 0));
          return;
        } else {
          W.add(w), await Wt(ge, pt, !1, { preventScrollReset: te });
          return;
        }
      if (Dt(pt)) {
        Rt(w, N, pt.error);
        return;
      }
      Gt(w, Qn(pt.data));
    }
  }
  async function Wt(
    w,
    N,
    D,
    {
      submission: V,
      fetcherSubmission: G,
      preventScrollReset: ne,
      replace: se,
    } = {},
  ) {
    N.response.headers.has("X-Remix-Revalidate") && (xe = !0);
    let Y = N.response.headers.get("Location");
    Ne(Y, "Expected a Location header on the redirect Response"),
      (Y = xd(Y, new URL(w.url), m));
    let te = Wl(z.location, Y, { _isRedirect: !0 });
    if (a) {
      let Ge = !1;
      if (N.response.headers.has("X-Remix-Reload-Document")) Ge = !0;
      else if (ks.test(Y)) {
        const tt = Vd(Y, !0);
        Ge = tt.origin !== o.location.origin || Ht(tt.pathname, m) == null;
      }
      if (Ge) {
        se ? o.location.replace(Y) : o.location.assign(Y);
        return;
      }
    }
    pe = null;
    let re =
        se === !0 || N.response.headers.has("X-Remix-Replace")
          ? "REPLACE"
          : "PUSH",
      { formMethod: me, formAction: ae, formEncType: ge } = z.navigation;
    !V && !G && me && ae && ge && (V = Pd(z.navigation));
    let Pe = V || G;
    if (Gm.has(N.response.status) && Pe && Tt(Pe.formMethod))
      await Bt(re, te, {
        submission: { ...Pe, formAction: Y },
        preventScrollReset: ne || Se,
        enableViewTransition: D ? Oe : void 0,
      });
    else {
      let Ge = cs(te, V);
      await Bt(re, te, {
        overrideNavigation: Ge,
        fetcherSubmission: G,
        preventScrollReset: ne || Se,
        enableViewTransition: D ? Oe : void 0,
      });
    }
  }
  async function kn(w, N, D, V) {
    let G,
      ne = {};
    try {
      G = await tp(g, w, N, V, D, !1);
    } catch (se) {
      return (
        N.filter((Y) => Y.shouldLoad).forEach((Y) => {
          ne[Y.route.id] = { type: "error", error: se };
        }),
        ne
      );
    }
    if (w.signal.aborted) return ne;
    for (let [se, Y] of Object.entries(G))
      if (ap(Y)) {
        let te = Y.result;
        ne[se] = { type: "redirect", response: lp(te, w, se, N, m) };
      } else ne[se] = await rp(Y);
    return ne;
  }
  async function qr(w, N, D, V) {
    let G = kn(D, w, V, null),
      ne = Promise.all(
        N.map(async (te) => {
          if (te.matches && te.match && te.request && te.controller) {
            let me = (await kn(te.request, te.matches, V, te.key))[
              te.match.route.id
            ];
            return { [te.key]: me };
          } else
            return Promise.resolve({
              [te.key]: {
                type: "error",
                error: Ut(404, { pathname: te.path }),
              },
            });
        }),
      ),
      se = await G,
      Y = (await ne).reduce((te, re) => Object.assign(te, re), {});
    return { loaderResults: se, fetcherResults: Y };
  }
  function Er() {
    (xe = !0),
      k.forEach((w, N) => {
        ye.has(N) && ze.add(N), yt(N);
      });
  }
  function Gt(w, N, D = {}) {
    z.fetchers.set(w, N),
      De(
        { fetchers: new Map(z.fetchers) },
        { flushSync: (D && D.flushSync) === !0 },
      );
  }
  function Rt(w, N, D, V = {}) {
    let G = vr(z.matches, N);
    kr(w),
      De(
        { errors: { [G.route.id]: D }, fetchers: new Map(z.fetchers) },
        { flushSync: (V && V.flushSync) === !0 },
      );
  }
  function Xn(w) {
    return (
      I.set(w, (I.get(w) || 0) + 1),
      oe.has(w) && oe.delete(w),
      z.fetchers.get(w) || Qm
    );
  }
  function kr(w) {
    let N = z.fetchers.get(w);
    ye.has(w) && !(N && N.state === "loading" && X.has(w)) && yt(w),
      k.delete(w),
      X.delete(w),
      W.delete(w),
      oe.delete(w),
      ze.delete(w),
      z.fetchers.delete(w);
  }
  function Zn(w) {
    let N = (I.get(w) || 0) - 1;
    N <= 0 ? (I.delete(w), oe.add(w)) : I.set(w, N),
      De({ fetchers: new Map(z.fetchers) });
  }
  function yt(w) {
    let N = ye.get(w);
    N && (N.abort(), ye.delete(w));
  }
  function ql(w) {
    for (let N of w) {
      let D = Xn(N),
        V = Qn(D.data);
      z.fetchers.set(N, V);
    }
  }
  function el() {
    let w = [],
      N = !1;
    for (let D of W) {
      let V = z.fetchers.get(D);
      Ne(V, `Expected fetcher: ${D}`),
        V.state === "loading" && (W.delete(D), w.push(D), (N = !0));
    }
    return ql(w), N;
  }
  function tl(w) {
    let N = [];
    for (let [D, V] of X)
      if (V < w) {
        let G = z.fetchers.get(D);
        Ne(G, `Expected fetcher: ${D}`),
          G.state === "loading" && (yt(D), X.delete(D), N.push(D));
      }
    return ql(N), N.length > 0;
  }
  function So(w, N) {
    let D = z.blockers.get(w) || Vl;
    return he.get(w) !== N && he.set(w, N), D;
  }
  function Cr(w) {
    z.blockers.delete(w), he.delete(w);
  }
  function Cn(w, N) {
    let D = z.blockers.get(w) || Vl;
    Ne(
      (D.state === "unblocked" && N.state === "blocked") ||
        (D.state === "blocked" && N.state === "blocked") ||
        (D.state === "blocked" && N.state === "proceeding") ||
        (D.state === "blocked" && N.state === "unblocked") ||
        (D.state === "proceeding" && N.state === "unblocked"),
      `Invalid blocker state transition: ${D.state} -> ${N.state}`,
    );
    let V = new Map(z.blockers);
    V.set(w, N), De({ blockers: V });
  }
  function Nr({ currentLocation: w, nextLocation: N, historyAction: D }) {
    if (he.size === 0) return;
    he.size > 1 && Ze(!1, "A router only supports one blocker at a time");
    let V = Array.from(he.entries()),
      [G, ne] = V[V.length - 1],
      se = z.blockers.get(G);
    if (
      !(se && se.state === "proceeding") &&
      ne({ currentLocation: w, nextLocation: N, historyAction: D })
    )
      return G;
  }
  function qn(w) {
    let N = Ut(404, { pathname: w }),
      D = v || p,
      { matches: V, route: G } = Nd(D);
    return { notFoundMatches: V, route: G, error: N };
  }
  function nl(w, N, D) {
    if (((L = w), (A = N), (T = D || null), !H && z.navigation === us)) {
      H = !0;
      let V = rl(z.location, z.matches);
      V != null && De({ restoreScrollPosition: V });
    }
    return () => {
      (L = null), (A = null), (T = null);
    };
  }
  function un(w, N) {
    return (
      (T &&
        T(
          w,
          N.map((V) => Cm(V, z.loaderData)),
        )) ||
      w.key
    );
  }
  function Nn(w, N) {
    if (L && A) {
      let D = un(w, N);
      L[D] = A();
    }
  }
  function rl(w, N) {
    if (L) {
      let D = un(w, N),
        V = L[D];
      if (typeof V == "number") return V;
    }
    return null;
  }
  function er(w, N, D) {
    if (l.patchRoutesOnNavigation)
      if (w) {
        if (Object.keys(w[0].params).length > 0)
          return { active: !0, matches: uo(N, D, m, !0) };
      } else return { active: !0, matches: uo(N, D, m, !0) || [] };
    return { active: !1, matches: null };
  }
  async function tr(w, N, D, V) {
    if (!l.patchRoutesOnNavigation) return { type: "success", matches: w };
    let G = w;
    for (;;) {
      let ne = v == null,
        se = v || p,
        Y = h;
      try {
        await l.patchRoutesOnNavigation({
          signal: D,
          path: N,
          matches: G,
          fetcherKey: V,
          patch: (me, ae) => {
            D.aborted || vd(me, ae, se, Y, u);
          },
        });
      } catch (me) {
        return { type: "error", error: me, partialMatches: G };
      } finally {
        ne && !D.aborted && (p = [...p]);
      }
      if (D.aborted) return { type: "aborted" };
      let te = Kn(se, N, m);
      if (te) return { type: "success", matches: te };
      let re = uo(se, N, m, !0);
      if (
        !re ||
        (G.length === re.length &&
          G.every((me, ae) => me.route.id === re[ae].route.id))
      )
        return { type: "success", matches: null };
      G = re;
    }
  }
  function ei(w) {
    (h = {}), (v = ho(w, u, void 0, h));
  }
  function ti(w, N) {
    let D = v == null;
    vd(w, N, v || p, h, u), D && ((p = [...p]), De({}));
  }
  return (
    (de = {
      get basename() {
        return m;
      },
      get future() {
        return E;
      },
      get state() {
        return z;
      },
      get routes() {
        return p;
      },
      get window() {
        return o;
      },
      initialize: Ie,
      subscribe: be,
      enableScrollRestoration: nl,
      navigate: Xr,
      fetch: Zr,
      revalidate: xr,
      createHref: (w) => l.history.createHref(w),
      encodeLocation: (w) => l.history.encodeLocation(w),
      getFetcher: Xn,
      deleteFetcher: Zn,
      dispose: _e,
      getBlocker: So,
      deleteBlocker: Cr,
      patchRoutes: ti,
      _internalFetchControllers: ye,
      _internalSetRoutes: ei,
    }),
    de
  );
}
function Jm(l) {
  return (
    l != null &&
    (("formData" in l && l.formData != null) ||
      ("body" in l && l.body !== void 0))
  );
}
function hs(l, o, a, d, u, h) {
  let p, v;
  if (u) {
    p = [];
    for (let g of o)
      if ((p.push(g), g.route.id === u)) {
        v = g;
        break;
      }
  } else (p = o), (v = o[o.length - 1]);
  let m = Es(d || ".", Ss(p), Ht(l.pathname, a) || l.pathname, h === "path");
  if (
    (d == null && ((m.search = l.search), (m.hash = l.hash)),
    (d == null || d === "" || d === ".") && v)
  ) {
    let g = Cs(m.search);
    if (v.route.index && !g)
      m.search = m.search ? m.search.replace(/^\?/, "?index&") : "?index";
    else if (!v.route.index && g) {
      let E = new URLSearchParams(m.search),
        M = E.getAll("index");
      E.delete("index"),
        M.filter((L) => L).forEach((L) => E.append("index", L));
      let C = E.toString();
      m.search = C ? `?${C}` : "";
    }
  }
  return (
    a !== "/" && (m.pathname = m.pathname === "/" ? a : an([a, m.pathname])),
    Yn(m)
  );
}
function md(l, o, a) {
  if (!a || !Jm(a)) return { path: o };
  if (a.formMethod && !sp(a.formMethod))
    return { path: o, error: Ut(405, { method: a.formMethod }) };
  let d = () => ({ path: o, error: Ut(400, { type: "invalid-body" }) }),
    h = (a.formMethod || "get").toUpperCase(),
    p = Zd(o);
  if (a.body !== void 0) {
    if (a.formEncType === "text/plain") {
      if (!Tt(h)) return d();
      let M =
        typeof a.body == "string"
          ? a.body
          : a.body instanceof FormData || a.body instanceof URLSearchParams
            ? Array.from(a.body.entries()).reduce(
                (C, [L, T]) => `${C}${L}=${T}
`,
                "",
              )
            : String(a.body);
      return {
        path: o,
        submission: {
          formMethod: h,
          formAction: p,
          formEncType: a.formEncType,
          formData: void 0,
          json: void 0,
          text: M,
        },
      };
    } else if (a.formEncType === "application/json") {
      if (!Tt(h)) return d();
      try {
        let M = typeof a.body == "string" ? JSON.parse(a.body) : a.body;
        return {
          path: o,
          submission: {
            formMethod: h,
            formAction: p,
            formEncType: a.formEncType,
            formData: void 0,
            json: M,
            text: void 0,
          },
        };
      } catch {
        return d();
      }
    }
  }
  Ne(
    typeof FormData == "function",
    "FormData is not available in this environment",
  );
  let v, m;
  if (a.formData) (v = vs(a.formData)), (m = a.formData);
  else if (a.body instanceof FormData) (v = vs(a.body)), (m = a.body);
  else if (a.body instanceof URLSearchParams) (v = a.body), (m = Sd(v));
  else if (a.body == null) (v = new URLSearchParams()), (m = new FormData());
  else
    try {
      (v = new URLSearchParams(a.body)), (m = Sd(v));
    } catch {
      return d();
    }
  let g = {
    formMethod: h,
    formAction: p,
    formEncType: (a && a.formEncType) || "application/x-www-form-urlencoded",
    formData: m,
    json: void 0,
    text: void 0,
  };
  if (Tt(g.formMethod)) return { path: o, submission: g };
  let E = xn(o);
  return (
    l && E.search && Cs(E.search) && v.append("index", ""),
    (E.search = `?${v}`),
    { path: Yn(E), submission: g }
  );
}
function pd(l, o, a, d, u, h, p, v, m, g, E, M, C, L, T, A, H, O, le, K) {
  var Je;
  let ie = K ? (Dt(K[1]) ? K[1].error : K[1].data) : void 0,
    de = u.createURL(h.location),
    z = u.createURL(m),
    ve;
  if (E && h.errors) {
    let xe = Object.keys(h.errors)[0];
    ve = p.findIndex((ze) => ze.route.id === xe);
  } else if (K && Dt(K[1])) {
    let xe = K[0];
    ve = p.findIndex((ze) => ze.route.id === xe) - 1;
  }
  let Se = K ? K[1].statusCode : void 0,
    pe = Se && Se >= 400,
    Oe = {
      currentUrl: de,
      currentParams: ((Je = h.matches[0]) == null ? void 0 : Je.params) || {},
      nextUrl: z,
      nextParams: p[0].params,
      ...v,
      actionResult: ie,
      actionStatus: Se,
    },
    et = p.map((xe, ze) => {
      let { route: ye } = xe,
        Ee = null;
      if (
        (ve != null && ze > ve
          ? (Ee = !1)
          : ye.lazy
            ? (Ee = !0)
            : ye.loader == null
              ? (Ee = !1)
              : E
                ? (Ee = ms(ye, h.loaderData, h.errors))
                : Xm(h.loaderData, h.matches[ze], xe) && (Ee = !0),
        Ee !== null)
      )
        return ps(a, d, l, xe, g, o, Ee);
      let B = pe
          ? !1
          : M ||
            de.pathname + de.search === z.pathname + z.search ||
            de.search !== z.search ||
            Zm(h.matches[ze], xe),
        X = { ...Oe, defaultShouldRevalidate: B },
        W = vo(xe, X);
      return ps(a, d, l, xe, g, o, W, X);
    }),
    lt = [];
  return (
    T.forEach((xe, ze) => {
      if (E || !p.some((oe) => oe.route.id === xe.routeId) || L.has(ze)) return;
      let ye = h.fetchers.get(ze),
        Ee = ye && ye.state !== "idle" && ye.data === void 0,
        B = Kn(H, xe.path, O);
      if (!B) {
        if (le && Ee) return;
        lt.push({
          key: ze,
          routeId: xe.routeId,
          path: xe.path,
          matches: null,
          match: null,
          request: null,
          controller: null,
        });
        return;
      }
      if (A.has(ze)) return;
      let X = Bl(B, xe.path),
        W = new AbortController(),
        k = Kr(u, xe.path, W.signal),
        I = null;
      if (C.has(ze)) C.delete(ze), (I = Yr(a, d, k, B, X, g, o));
      else if (Ee) M && (I = Yr(a, d, k, B, X, g, o));
      else {
        let oe = { ...Oe, defaultShouldRevalidate: pe ? !1 : M };
        vo(X, oe) && (I = Yr(a, d, k, B, X, g, o, oe));
      }
      I &&
        lt.push({
          key: ze,
          routeId: xe.routeId,
          path: xe.path,
          matches: I,
          match: X,
          request: k,
          controller: W,
        });
    }),
    { dsMatches: et, revalidatingFetchers: lt }
  );
}
function ms(l, o, a) {
  if (l.lazy) return !0;
  if (!l.loader) return !1;
  let d = o != null && l.id in o,
    u = a != null && a[l.id] !== void 0;
  return !d && u
    ? !1
    : typeof l.loader == "function" && l.loader.hydrate === !0
      ? !0
      : !d && !u;
}
function Xm(l, o, a) {
  let d = !o || a.route.id !== o.route.id,
    u = !l.hasOwnProperty(a.route.id);
  return d || u;
}
function Zm(l, o) {
  let a = l.route.path;
  return (
    l.pathname !== o.pathname ||
    (a != null && a.endsWith("*") && l.params["*"] !== o.params["*"])
  );
}
function vo(l, o) {
  if (l.route.shouldRevalidate) {
    let a = l.route.shouldRevalidate(o);
    if (typeof a == "boolean") return a;
  }
  return o.defaultShouldRevalidate;
}
function vd(l, o, a, d, u) {
  let h;
  if (l) {
    let m = d[l];
    Ne(m, `No route found to patch children into: routeId = ${l}`),
      m.children || (m.children = []),
      (h = m.children);
  } else h = a;
  let p = o.filter((m) => !h.some((g) => Qd(m, g))),
    v = ho(
      p,
      u,
      [l || "_", "patch", String((h == null ? void 0 : h.length) || "0")],
      d,
    );
  h.push(...v);
}
function Qd(l, o) {
  return "id" in l && "id" in o && l.id === o.id
    ? !0
    : l.index === o.index &&
        l.path === o.path &&
        l.caseSensitive === o.caseSensitive
      ? (!l.children || l.children.length === 0) &&
        (!o.children || o.children.length === 0)
        ? !0
        : l.children.every((a, d) => {
            var u;
            return (u = o.children) == null ? void 0 : u.some((h) => Qd(a, h));
          })
      : !1;
}
var gd = new WeakMap(),
  Kd = ({ key: l, route: o, manifest: a, mapRouteProperties: d }) => {
    let u = a[o.id];
    if (
      (Ne(u, "No route found in manifest"),
      !u.lazy || typeof u.lazy != "object")
    )
      return;
    let h = u.lazy[l];
    if (!h) return;
    let p = gd.get(u);
    p || ((p = {}), gd.set(u, p));
    let v = p[l];
    if (v) return v;
    let m = (async () => {
      let g = xm(l),
        M = u[l] !== void 0 && l !== "hasErrorBoundary";
      if (g)
        Ze(
          !g,
          "Route property " +
            l +
            " is not a supported lazy route property. This property will be ignored.",
        ),
          (p[l] = Promise.resolve());
      else if (M)
        Ze(
          !1,
          `Route "${u.id}" has a static property "${l}" defined. The lazy property will be ignored.`,
        );
      else {
        let C = await h();
        C != null && (Object.assign(u, { [l]: C }), Object.assign(u, d(u)));
      }
      typeof u.lazy == "object" &&
        ((u.lazy[l] = void 0),
        Object.values(u.lazy).every((C) => C === void 0) && (u.lazy = void 0));
    })();
    return (p[l] = m), m;
  },
  yd = new WeakMap();
function qm(l, o, a, d, u) {
  let h = a[l.id];
  if ((Ne(h, "No route found in manifest"), !l.lazy))
    return { lazyRoutePromise: void 0, lazyHandlerPromise: void 0 };
  if (typeof l.lazy == "function") {
    let E = yd.get(h);
    if (E) return { lazyRoutePromise: E, lazyHandlerPromise: E };
    let M = (async () => {
      Ne(typeof l.lazy == "function", "No lazy route function found");
      let C = await l.lazy(),
        L = {};
      for (let T in C) {
        let A = C[T];
        if (A === void 0) continue;
        let H = Em(T),
          le = h[T] !== void 0 && T !== "hasErrorBoundary";
        H
          ? Ze(
              !H,
              "Route property " +
                T +
                " is not a supported property to be returned from a lazy route function. This property will be ignored.",
            )
          : le
            ? Ze(
                !le,
                `Route "${h.id}" has a static property "${T}" defined but its lazy function is also returning a value for this property. The lazy route property "${T}" will be ignored.`,
              )
            : (L[T] = A);
      }
      Object.assign(h, L), Object.assign(h, { ...d(h), lazy: void 0 });
    })();
    return (
      yd.set(h, M),
      M.catch(() => {}),
      { lazyRoutePromise: M, lazyHandlerPromise: M }
    );
  }
  let p = Object.keys(l.lazy),
    v = [],
    m;
  for (let E of p) {
    if (u && u.includes(E)) continue;
    let M = Kd({ key: E, route: l, manifest: a, mapRouteProperties: d });
    M && (v.push(M), E === o && (m = M));
  }
  let g = v.length > 0 ? Promise.all(v).then(() => {}) : void 0;
  return (
    g == null || g.catch(() => {}),
    m == null || m.catch(() => {}),
    { lazyRoutePromise: g, lazyHandlerPromise: m }
  );
}
async function wd(l) {
  let o = l.matches.filter((u) => u.shouldLoad),
    a = {};
  return (
    (await Promise.all(o.map((u) => u.resolve()))).forEach((u, h) => {
      a[o[h].route.id] = u;
    }),
    a
  );
}
async function ep(l) {
  return l.matches.some((o) => o.route.unstable_middleware)
    ? Yd(
        l,
        !1,
        () => wd(l),
        (o, a) => ({ [a]: { type: "error", result: o } }),
      )
    : wd(l);
}
async function Yd(l, o, a, d) {
  let { matches: u, request: h, params: p, context: v } = l,
    m = { handlerResult: void 0 };
  try {
    let g = u.flatMap((M) =>
        M.route.unstable_middleware
          ? M.route.unstable_middleware.map((C) => [M.route.id, C])
          : [],
      ),
      E = await Jd({ request: h, params: p, context: v }, g, o, m, a);
    return o ? E : m.handlerResult;
  } catch (g) {
    if (!m.middlewareError) throw g;
    let E = await d(m.middlewareError.error, m.middlewareError.routeId);
    return m.handlerResult ? Object.assign(m.handlerResult, E) : E;
  }
}
async function Jd(l, o, a, d, u, h = 0) {
  let { request: p } = l;
  if (p.signal.aborted)
    throw p.signal.reason
      ? p.signal.reason
      : new Error(
          `Request aborted without an \`AbortSignal.reason\`: ${p.method} ${p.url}`,
        );
  let v = o[h];
  if (!v) return (d.handlerResult = await u()), d.handlerResult;
  let [m, g] = v,
    E = !1,
    M,
    C = async () => {
      if (E) throw new Error("You may only call `next()` once per middleware");
      (E = !0), await Jd(l, o, a, d, u, h + 1);
    };
  try {
    let L = await g(
      { request: l.request, params: l.params, context: l.context },
      C,
    );
    return E ? (L === void 0 ? M : L) : C();
  } catch (L) {
    throw (
      (d.middlewareError
        ? d.middlewareError.error !== L &&
          (d.middlewareError = { routeId: m, error: L })
        : (d.middlewareError = { routeId: m, error: L }),
      L)
    );
  }
}
function Xd(l, o, a, d, u) {
  let h = Kd({
      key: "unstable_middleware",
      route: d.route,
      manifest: o,
      mapRouteProperties: l,
    }),
    p = qm(d.route, Tt(a.method) ? "action" : "loader", o, l, u);
  return {
    middleware: h,
    route: p.lazyRoutePromise,
    handler: p.lazyHandlerPromise,
  };
}
function ps(l, o, a, d, u, h, p, v = null) {
  let m = !1,
    g = Xd(l, o, a, d, u);
  return {
    ...d,
    _lazyPromises: g,
    shouldLoad: p,
    unstable_shouldRevalidateArgs: v,
    unstable_shouldCallHandler(E) {
      return (
        (m = !0),
        v
          ? typeof E == "boolean"
            ? vo(d, { ...v, defaultShouldRevalidate: E })
            : vo(d, v)
          : p
      );
    },
    resolve(E) {
      return m ||
        p ||
        (E && a.method === "GET" && (d.route.lazy || d.route.loader))
        ? np({
            request: a,
            match: d,
            lazyHandlerPromise: g == null ? void 0 : g.handler,
            lazyRoutePromise: g == null ? void 0 : g.route,
            handlerOverride: E,
            scopedContext: h,
          })
        : Promise.resolve({ type: "data", result: void 0 });
    },
  };
}
function Yr(l, o, a, d, u, h, p, v = null) {
  return d.map((m) =>
    m.route.id !== u.route.id
      ? {
          ...m,
          shouldLoad: !1,
          unstable_shouldRevalidateArgs: v,
          unstable_shouldCallHandler: () => !1,
          _lazyPromises: Xd(l, o, a, m, h),
          resolve: () => Promise.resolve({ type: "data", result: void 0 }),
        }
      : ps(l, o, a, m, h, p, !0, v),
  );
}
async function tp(l, o, a, d, u, h) {
  a.some((g) => {
    var E;
    return (E = g._lazyPromises) == null ? void 0 : E.middleware;
  }) &&
    (await Promise.all(
      a.map((g) => {
        var E;
        return (E = g._lazyPromises) == null ? void 0 : E.middleware;
      }),
    ));
  let p = { request: o, params: a[0].params, context: u, matches: a },
    m = await l({
      ...p,
      fetcherKey: d,
      unstable_runClientMiddleware: (g) => {
        let E = p;
        return Yd(
          E,
          !1,
          () =>
            g({
              ...E,
              fetcherKey: d,
              unstable_runClientMiddleware: () => {
                throw new Error(
                  "Cannot call `unstable_runClientMiddleware()` from within an `unstable_runClientMiddleware` handler",
                );
              },
            }),
          (M, C) => ({ [C]: { type: "error", result: M } }),
        );
      },
    });
  try {
    await Promise.all(
      a.flatMap((g) => {
        var E, M;
        return [
          (E = g._lazyPromises) == null ? void 0 : E.handler,
          (M = g._lazyPromises) == null ? void 0 : M.route,
        ];
      }),
    );
  } catch {}
  return m;
}
async function np({
  request: l,
  match: o,
  lazyHandlerPromise: a,
  lazyRoutePromise: d,
  handlerOverride: u,
  scopedContext: h,
}) {
  let p,
    v,
    m = Tt(l.method),
    g = m ? "action" : "loader",
    E = (M) => {
      let C,
        L = new Promise((H, O) => (C = O));
      (v = () => C()), l.signal.addEventListener("abort", v);
      let T = (H) =>
          typeof M != "function"
            ? Promise.reject(
                new Error(
                  `You cannot call the handler for a route which defines a boolean "${g}" [routeId: ${o.route.id}]`,
                ),
              )
            : M(
                { request: l, params: o.params, context: h },
                ...(H !== void 0 ? [H] : []),
              ),
        A = (async () => {
          try {
            return { type: "data", result: await (u ? u((O) => T(O)) : T()) };
          } catch (H) {
            return { type: "error", result: H };
          }
        })();
      return Promise.race([A, L]);
    };
  try {
    let M = m ? o.route.action : o.route.loader;
    if (a || d)
      if (M) {
        let C,
          [L] = await Promise.all([
            E(M).catch((T) => {
              C = T;
            }),
            a,
            d,
          ]);
        if (C !== void 0) throw C;
        p = L;
      } else {
        await a;
        let C = m ? o.route.action : o.route.loader;
        if (C) [p] = await Promise.all([E(C), d]);
        else if (g === "action") {
          let L = new URL(l.url),
            T = L.pathname + L.search;
          throw Ut(405, { method: l.method, pathname: T, routeId: o.route.id });
        } else return { type: "data", result: void 0 };
      }
    else if (M) p = await E(M);
    else {
      let C = new URL(l.url),
        L = C.pathname + C.search;
      throw Ut(404, { pathname: L });
    }
  } catch (M) {
    return { type: "error", result: M };
  } finally {
    v && l.signal.removeEventListener("abort", v);
  }
  return p;
}
async function rp(l) {
  var d, u, h, p, v, m;
  let { result: o, type: a } = l;
  if (qd(o)) {
    let g;
    try {
      let E = o.headers.get("Content-Type");
      E && /\bapplication\/json\b/.test(E)
        ? o.body == null
          ? (g = null)
          : (g = await o.json())
        : (g = await o.text());
    } catch (E) {
      return { type: "error", error: E };
    }
    return a === "error"
      ? {
          type: "error",
          error: new po(o.status, o.statusText, g),
          statusCode: o.status,
          headers: o.headers,
        }
      : { type: "data", data: g, statusCode: o.status, headers: o.headers };
  }
  return a === "error"
    ? jd(o)
      ? o.data instanceof Error
        ? {
            type: "error",
            error: o.data,
            statusCode: (d = o.init) == null ? void 0 : d.status,
            headers:
              (u = o.init) != null && u.headers
                ? new Headers(o.init.headers)
                : void 0,
          }
        : {
            type: "error",
            error: new po(
              ((h = o.init) == null ? void 0 : h.status) || 500,
              void 0,
              o.data,
            ),
            statusCode: Gl(o) ? o.status : void 0,
            headers:
              (p = o.init) != null && p.headers
                ? new Headers(o.init.headers)
                : void 0,
          }
      : { type: "error", error: o, statusCode: Gl(o) ? o.status : void 0 }
    : jd(o)
      ? {
          type: "data",
          data: o.data,
          statusCode: (v = o.init) == null ? void 0 : v.status,
          headers:
            (m = o.init) != null && m.headers
              ? new Headers(o.init.headers)
              : void 0,
        }
      : { type: "data", data: o };
}
function lp(l, o, a, d, u) {
  let h = l.headers.get("Location");
  if (
    (Ne(
      h,
      "Redirects returned/thrown from loaders/actions must have a Location header",
    ),
    !ks.test(h))
  ) {
    let p = d.slice(0, d.findIndex((v) => v.route.id === a) + 1);
    (h = hs(new URL(o.url), p, u, h)), l.headers.set("Location", h);
  }
  return l;
}
function xd(l, o, a) {
  if (ks.test(l)) {
    let d = l,
      u = d.startsWith("//") ? new URL(o.protocol + d) : new URL(d),
      h = Ht(u.pathname, a) != null;
    if (u.origin === o.origin && h) return u.pathname + u.search + u.hash;
  }
  return l;
}
function Kr(l, o, a, d) {
  let u = l.createURL(Zd(o)).toString(),
    h = { signal: a };
  if (d && Tt(d.formMethod)) {
    let { formMethod: p, formEncType: v } = d;
    (h.method = p.toUpperCase()),
      v === "application/json"
        ? ((h.headers = new Headers({ "Content-Type": v })),
          (h.body = JSON.stringify(d.json)))
        : v === "text/plain"
          ? (h.body = d.text)
          : v === "application/x-www-form-urlencoded" && d.formData
            ? (h.body = vs(d.formData))
            : (h.body = d.formData);
  }
  return new Request(u, h);
}
function vs(l) {
  let o = new URLSearchParams();
  for (let [a, d] of l.entries())
    o.append(a, typeof d == "string" ? d : d.name);
  return o;
}
function Sd(l) {
  let o = new FormData();
  for (let [a, d] of l.entries()) o.append(a, d);
  return o;
}
function ip(l, o, a, d = !1, u = !1) {
  let h = {},
    p = null,
    v,
    m = !1,
    g = {},
    E = a && Dt(a[1]) ? a[1].error : void 0;
  return (
    l.forEach((M) => {
      if (!(M.route.id in o)) return;
      let C = M.route.id,
        L = o[C];
      if (
        (Ne(!gr(L), "Cannot handle redirect results in processLoaderData"),
        Dt(L))
      ) {
        let T = L.error;
        if ((E !== void 0 && ((T = E), (E = void 0)), (p = p || {}), u))
          p[C] = T;
        else {
          let A = vr(l, C);
          p[A.route.id] == null && (p[A.route.id] = T);
        }
        d || (h[C] = Gd),
          m || ((m = !0), (v = Gl(L.error) ? L.error.status : 500)),
          L.headers && (g[C] = L.headers);
      } else
        (h[C] = L.data),
          L.statusCode && L.statusCode !== 200 && !m && (v = L.statusCode),
          L.headers && (g[C] = L.headers);
    }),
    E !== void 0 && a && ((p = { [a[0]]: E }), a[2] && (h[a[2]] = void 0)),
    { loaderData: h, errors: p, statusCode: v || 200, loaderHeaders: g }
  );
}
function Ed(l, o, a, d, u, h) {
  let { loaderData: p, errors: v } = ip(o, a, d);
  return (
    u
      .filter((m) => !m.matches || m.matches.some((g) => g.shouldLoad))
      .forEach((m) => {
        let { key: g, match: E, controller: M } = m,
          C = h[g];
        if (
          (Ne(C, "Did not find corresponding fetcher result"),
          !(M && M.signal.aborted))
        )
          if (Dt(C)) {
            let L = vr(l.matches, E == null ? void 0 : E.route.id);
            (v && v[L.route.id]) || (v = { ...v, [L.route.id]: C.error }),
              l.fetchers.delete(g);
          } else if (gr(C)) Ne(!1, "Unhandled fetcher revalidation redirect");
          else {
            let L = Qn(C.data);
            l.fetchers.set(g, L);
          }
      }),
    { loaderData: p, errors: v }
  );
}
function kd(l, o, a, d) {
  let u = Object.entries(o)
    .filter(([, h]) => h !== Gd)
    .reduce((h, [p, v]) => ((h[p] = v), h), {});
  for (let h of a) {
    let p = h.route.id;
    if (
      (!o.hasOwnProperty(p) &&
        l.hasOwnProperty(p) &&
        h.route.loader &&
        (u[p] = l[p]),
      d && d.hasOwnProperty(p))
    )
      break;
  }
  return u;
}
function Cd(l) {
  return l
    ? Dt(l[1])
      ? { actionData: {} }
      : { actionData: { [l[0]]: l[1].data } }
    : {};
}
function vr(l, o) {
  return (
    (o ? l.slice(0, l.findIndex((d) => d.route.id === o) + 1) : [...l])
      .reverse()
      .find((d) => d.route.hasErrorBoundary === !0) || l[0]
  );
}
function Nd(l) {
  let o =
    l.length === 1
      ? l[0]
      : l.find((a) => a.index || !a.path || a.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: o }],
    route: o,
  };
}
function Ut(
  l,
  { pathname: o, routeId: a, method: d, type: u, message: h } = {},
) {
  let p = "Unknown Server Error",
    v = "Unknown @remix-run/router error";
  return (
    l === 400
      ? ((p = "Bad Request"),
        d && o && a
          ? (v = `You made a ${d} request to "${o}" but did not provide a \`loader\` for route "${a}", so there is no way to handle the request.`)
          : u === "invalid-body" && (v = "Unable to encode submission body"))
      : l === 403
        ? ((p = "Forbidden"), (v = `Route "${a}" does not match URL "${o}"`))
        : l === 404
          ? ((p = "Not Found"), (v = `No route matches URL "${o}"`))
          : l === 405 &&
            ((p = "Method Not Allowed"),
            d && o && a
              ? (v = `You made a ${d.toUpperCase()} request to "${o}" but did not provide an \`action\` for route "${a}", so there is no way to handle the request.`)
              : d && (v = `Invalid request method "${d.toUpperCase()}"`)),
    new po(l || 500, p, new Error(v), !0)
  );
}
function ao(l) {
  let o = Object.entries(l);
  for (let a = o.length - 1; a >= 0; a--) {
    let [d, u] = o[a];
    if (gr(u)) return { key: d, result: u };
  }
}
function Zd(l) {
  let o = typeof l == "string" ? xn(l) : l;
  return Yn({ ...o, hash: "" });
}
function op(l, o) {
  return l.pathname !== o.pathname || l.search !== o.search
    ? !1
    : l.hash === ""
      ? o.hash !== ""
      : l.hash === o.hash
        ? !0
        : o.hash !== "";
}
function ap(l) {
  return qd(l.result) && Wm.has(l.result.status);
}
function Dt(l) {
  return l.type === "error";
}
function gr(l) {
  return (l && l.type) === "redirect";
}
function jd(l) {
  return (
    typeof l == "object" &&
    l != null &&
    "type" in l &&
    "data" in l &&
    "init" in l &&
    l.type === "DataWithResponseInit"
  );
}
function qd(l) {
  return (
    l != null &&
    typeof l.status == "number" &&
    typeof l.statusText == "string" &&
    typeof l.headers == "object" &&
    typeof l.body < "u"
  );
}
function sp(l) {
  return Bm.has(l.toUpperCase());
}
function Tt(l) {
  return Hm.has(l.toUpperCase());
}
function Cs(l) {
  return new URLSearchParams(l).getAll("index").some((o) => o === "");
}
function Bl(l, o) {
  let a = typeof o == "string" ? xn(o).search : o.search;
  if (l[l.length - 1].route.index && Cs(a || "")) return l[l.length - 1];
  let d = $d(l);
  return d[d.length - 1];
}
function Pd(l) {
  let {
    formMethod: o,
    formAction: a,
    formEncType: d,
    text: u,
    formData: h,
    json: p,
  } = l;
  if (!(!o || !a || !d)) {
    if (u != null)
      return {
        formMethod: o,
        formAction: a,
        formEncType: d,
        formData: void 0,
        json: void 0,
        text: u,
      };
    if (h != null)
      return {
        formMethod: o,
        formAction: a,
        formEncType: d,
        formData: h,
        json: void 0,
        text: void 0,
      };
    if (p !== void 0)
      return {
        formMethod: o,
        formAction: a,
        formEncType: d,
        formData: void 0,
        json: p,
        text: void 0,
      };
  }
}
function cs(l, o) {
  return o
    ? {
        state: "loading",
        location: l,
        formMethod: o.formMethod,
        formAction: o.formAction,
        formEncType: o.formEncType,
        formData: o.formData,
        json: o.json,
        text: o.text,
      }
    : {
        state: "loading",
        location: l,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function up(l, o) {
  return {
    state: "submitting",
    location: l,
    formMethod: o.formMethod,
    formAction: o.formAction,
    formEncType: o.formEncType,
    formData: o.formData,
    json: o.json,
    text: o.text,
  };
}
function Ul(l, o) {
  return l
    ? {
        state: "loading",
        formMethod: l.formMethod,
        formAction: l.formAction,
        formEncType: l.formEncType,
        formData: l.formData,
        json: l.json,
        text: l.text,
        data: o,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: o,
      };
}
function cp(l, o) {
  return {
    state: "submitting",
    formMethod: l.formMethod,
    formAction: l.formAction,
    formEncType: l.formEncType,
    formData: l.formData,
    json: l.json,
    text: l.text,
    data: o ? o.data : void 0,
  };
}
function Qn(l) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: l,
  };
}
function dp(l, o) {
  try {
    let a = l.sessionStorage.getItem(Wd);
    if (a) {
      let d = JSON.parse(a);
      for (let [u, h] of Object.entries(d || {}))
        h && Array.isArray(h) && o.set(u, new Set(h || []));
    }
  } catch {}
}
function fp(l, o) {
  if (o.size > 0) {
    let a = {};
    for (let [d, u] of o) a[d] = [...u];
    try {
      l.sessionStorage.setItem(Wd, JSON.stringify(a));
    } catch (d) {
      Ze(
        !1,
        `Failed to save applied view transitions in sessionStorage (${d}).`,
      );
    }
  }
}
function hp() {
  let l,
    o,
    a = new Promise((d, u) => {
      (l = async (h) => {
        d(h);
        try {
          await a;
        } catch {}
      }),
        (o = async (h) => {
          u(h);
          try {
            await a;
          } catch {}
        });
    });
  return { promise: a, resolve: l, reject: o };
}
var yr = P.createContext(null);
yr.displayName = "DataRouter";
var Ql = P.createContext(null);
Ql.displayName = "DataRouterState";
var Ns = P.createContext({ isTransitioning: !1 });
Ns.displayName = "ViewTransition";
var ef = P.createContext(new Map());
ef.displayName = "Fetchers";
var mp = P.createContext(null);
mp.displayName = "Await";
var sn = P.createContext(null);
sn.displayName = "Navigation";
var wo = P.createContext(null);
wo.displayName = "Location";
var Sn = P.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Sn.displayName = "Route";
var js = P.createContext(null);
js.displayName = "RouteError";
function pp(l, { relative: o } = {}) {
  Ne(
    Kl(),
    "useHref() may be used only in the context of a <Router> component.",
  );
  let { basename: a, navigator: d } = P.useContext(sn),
    { hash: u, pathname: h, search: p } = Yl(l, { relative: o }),
    v = h;
  return (
    a !== "/" && (v = h === "/" ? a : an([a, h])),
    d.createHref({ pathname: v, search: p, hash: u })
  );
}
function Kl() {
  return P.useContext(wo) != null;
}
function wr() {
  return (
    Ne(
      Kl(),
      "useLocation() may be used only in the context of a <Router> component.",
    ),
    P.useContext(wo).location
  );
}
var tf =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function nf(l) {
  P.useContext(sn).static || P.useLayoutEffect(l);
}
function vp() {
  let { isDataRoute: l } = P.useContext(Sn);
  return l ? Lp() : gp();
}
function gp() {
  Ne(
    Kl(),
    "useNavigate() may be used only in the context of a <Router> component.",
  );
  let l = P.useContext(yr),
    { basename: o, navigator: a } = P.useContext(sn),
    { matches: d } = P.useContext(Sn),
    { pathname: u } = wr(),
    h = JSON.stringify(Ss(d)),
    p = P.useRef(!1);
  return (
    nf(() => {
      p.current = !0;
    }),
    P.useCallback(
      (m, g = {}) => {
        if ((Ze(p.current, tf), !p.current)) return;
        if (typeof m == "number") {
          a.go(m);
          return;
        }
        let E = Es(m, JSON.parse(h), u, g.relative === "path");
        l == null &&
          o !== "/" &&
          (E.pathname = E.pathname === "/" ? o : an([o, E.pathname])),
          (g.replace ? a.replace : a.push)(E, g.state, g);
      },
      [o, a, h, u, l],
    )
  );
}
P.createContext(null);
function Yl(l, { relative: o } = {}) {
  let { matches: a } = P.useContext(Sn),
    { pathname: d } = wr(),
    u = JSON.stringify(Ss(a));
  return P.useMemo(() => Es(l, JSON.parse(u), d, o === "path"), [l, u, d, o]);
}
function yp(l, o, a, d) {
  Ne(
    Kl(),
    "useRoutes() may be used only in the context of a <Router> component.",
  );
  let { navigator: u } = P.useContext(sn),
    { matches: h } = P.useContext(Sn),
    p = h[h.length - 1],
    v = p ? p.params : {},
    m = p ? p.pathname : "/",
    g = p ? p.pathnameBase : "/",
    E = p && p.route;
  {
    let O = (E && E.path) || "";
    rf(
      m,
      !E || O.endsWith("*") || O.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${O}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${O}"> to <Route path="${O === "/" ? "*" : `${O}/*`}">.`,
    );
  }
  let M = wr(),
    C;
  C = M;
  let L = C.pathname || "/",
    T = L;
  if (g !== "/") {
    let O = g.replace(/^\//, "").split("/");
    T = "/" + L.replace(/^\//, "").split("/").slice(O.length).join("/");
  }
  let A = Kn(l, { pathname: T });
  return (
    Ze(
      E || A != null,
      `No routes matched location "${C.pathname}${C.search}${C.hash}" `,
    ),
    Ze(
      A == null ||
        A[A.length - 1].route.element !== void 0 ||
        A[A.length - 1].route.Component !== void 0 ||
        A[A.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${C.pathname}${C.search}${C.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ),
    kp(
      A &&
        A.map((O) =>
          Object.assign({}, O, {
            params: Object.assign({}, v, O.params),
            pathname: an([
              g,
              u.encodeLocation
                ? u.encodeLocation(O.pathname).pathname
                : O.pathname,
            ]),
            pathnameBase:
              O.pathnameBase === "/"
                ? g
                : an([
                    g,
                    u.encodeLocation
                      ? u.encodeLocation(O.pathnameBase).pathname
                      : O.pathnameBase,
                  ]),
          }),
        ),
      h,
      a,
      d,
    )
  );
}
function wp() {
  let l = Rp(),
    o = Gl(l)
      ? `${l.status} ${l.statusText}`
      : l instanceof Error
        ? l.message
        : JSON.stringify(l),
    a = l instanceof Error ? l.stack : null,
    d = "rgba(200,200,200, 0.5)",
    u = { padding: "0.5rem", backgroundColor: d },
    h = { padding: "2px 4px", backgroundColor: d },
    p = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", l),
    (p = P.createElement(
      P.Fragment,
      null,
      P.createElement("p", null, "💿 Hey developer 👋"),
      P.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        P.createElement("code", { style: h }, "ErrorBoundary"),
        " or",
        " ",
        P.createElement("code", { style: h }, "errorElement"),
        " prop on your route.",
      ),
    )),
    P.createElement(
      P.Fragment,
      null,
      P.createElement("h2", null, "Unexpected Application Error!"),
      P.createElement("h3", { style: { fontStyle: "italic" } }, o),
      a ? P.createElement("pre", { style: u }, a) : null,
      p,
    )
  );
}
var xp = P.createElement(wp, null),
  Sp = class extends P.Component {
    constructor(l) {
      super(l),
        (this.state = {
          location: l.location,
          revalidation: l.revalidation,
          error: l.error,
        });
    }
    static getDerivedStateFromError(l) {
      return { error: l };
    }
    static getDerivedStateFromProps(l, o) {
      return o.location !== l.location ||
        (o.revalidation !== "idle" && l.revalidation === "idle")
        ? { error: l.error, location: l.location, revalidation: l.revalidation }
        : {
            error: l.error !== void 0 ? l.error : o.error,
            location: o.location,
            revalidation: l.revalidation || o.revalidation,
          };
    }
    componentDidCatch(l, o) {
      console.error(
        "React Router caught the following error during render",
        l,
        o,
      );
    }
    render() {
      return this.state.error !== void 0
        ? P.createElement(
            Sn.Provider,
            { value: this.props.routeContext },
            P.createElement(js.Provider, {
              value: this.state.error,
              children: this.props.component,
            }),
          )
        : this.props.children;
    }
  };
function Ep({ routeContext: l, match: o, children: a }) {
  let d = P.useContext(yr);
  return (
    d &&
      d.static &&
      d.staticContext &&
      (o.route.errorElement || o.route.ErrorBoundary) &&
      (d.staticContext._deepestRenderedBoundaryId = o.route.id),
    P.createElement(Sn.Provider, { value: l }, a)
  );
}
function kp(l, o = [], a = null, d = null) {
  if (l == null) {
    if (!a) return null;
    if (a.errors) l = a.matches;
    else if (o.length === 0 && !a.initialized && a.matches.length > 0)
      l = a.matches;
    else return null;
  }
  let u = l,
    h = a == null ? void 0 : a.errors;
  if (h != null) {
    let m = u.findIndex(
      (g) => g.route.id && (h == null ? void 0 : h[g.route.id]) !== void 0,
    );
    Ne(
      m >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`,
    ),
      (u = u.slice(0, Math.min(u.length, m + 1)));
  }
  let p = !1,
    v = -1;
  if (a)
    for (let m = 0; m < u.length; m++) {
      let g = u[m];
      if (
        ((g.route.HydrateFallback || g.route.hydrateFallbackElement) && (v = m),
        g.route.id)
      ) {
        let { loaderData: E, errors: M } = a,
          C =
            g.route.loader &&
            !E.hasOwnProperty(g.route.id) &&
            (!M || M[g.route.id] === void 0);
        if (g.route.lazy || C) {
          (p = !0), v >= 0 ? (u = u.slice(0, v + 1)) : (u = [u[0]]);
          break;
        }
      }
    }
  return u.reduceRight((m, g, E) => {
    let M,
      C = !1,
      L = null,
      T = null;
    a &&
      ((M = h && g.route.id ? h[g.route.id] : void 0),
      (L = g.route.errorElement || xp),
      p &&
        (v < 0 && E === 0
          ? (rf(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration",
            ),
            (C = !0),
            (T = null))
          : v === E &&
            ((C = !0), (T = g.route.hydrateFallbackElement || null))));
    let A = o.concat(u.slice(0, E + 1)),
      H = () => {
        let O;
        return (
          M
            ? (O = L)
            : C
              ? (O = T)
              : g.route.Component
                ? (O = P.createElement(g.route.Component, null))
                : g.route.element
                  ? (O = g.route.element)
                  : (O = m),
          P.createElement(Ep, {
            match: g,
            routeContext: { outlet: m, matches: A, isDataRoute: a != null },
            children: O,
          })
        );
      };
    return a && (g.route.ErrorBoundary || g.route.errorElement || E === 0)
      ? P.createElement(Sp, {
          location: a.location,
          revalidation: a.revalidation,
          component: L,
          error: M,
          children: H(),
          routeContext: { outlet: null, matches: A, isDataRoute: !0 },
        })
      : H();
  }, null);
}
function Ps(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Cp(l) {
  let o = P.useContext(yr);
  return Ne(o, Ps(l)), o;
}
function Np(l) {
  let o = P.useContext(Ql);
  return Ne(o, Ps(l)), o;
}
function jp(l) {
  let o = P.useContext(Sn);
  return Ne(o, Ps(l)), o;
}
function Rs(l) {
  let o = jp(l),
    a = o.matches[o.matches.length - 1];
  return (
    Ne(
      a.route.id,
      `${l} can only be used on routes that contain a unique "id"`,
    ),
    a.route.id
  );
}
function Pp() {
  return Rs("useRouteId");
}
function Rp() {
  var d;
  let l = P.useContext(js),
    o = Np("useRouteError"),
    a = Rs("useRouteError");
  return l !== void 0 ? l : (d = o.errors) == null ? void 0 : d[a];
}
function Lp() {
  let { router: l } = Cp("useNavigate"),
    o = Rs("useNavigate"),
    a = P.useRef(!1);
  return (
    nf(() => {
      a.current = !0;
    }),
    P.useCallback(
      async (u, h = {}) => {
        Ze(a.current, tf),
          a.current &&
            (typeof u == "number"
              ? l.navigate(u)
              : await l.navigate(u, { fromRouteId: o, ...h }));
      },
      [l, o],
    )
  );
}
var Rd = {};
function rf(l, o, a) {
  !o && !Rd[l] && ((Rd[l] = !0), Ze(!1, a));
}
var Ld = {};
function Md(l, o) {
  !l && !Ld[o] && ((Ld[o] = !0), console.warn(o));
}
function Mp(l) {
  let o = {
    hasErrorBoundary:
      l.hasErrorBoundary || l.ErrorBoundary != null || l.errorElement != null,
  };
  return (
    l.Component &&
      (l.element &&
        Ze(
          !1,
          "You should not include both `Component` and `element` on your route - `Component` will be used.",
        ),
      Object.assign(o, {
        element: P.createElement(l.Component),
        Component: void 0,
      })),
    l.HydrateFallback &&
      (l.hydrateFallbackElement &&
        Ze(
          !1,
          "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used.",
        ),
      Object.assign(o, {
        hydrateFallbackElement: P.createElement(l.HydrateFallback),
        HydrateFallback: void 0,
      })),
    l.ErrorBoundary &&
      (l.errorElement &&
        Ze(
          !1,
          "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used.",
        ),
      Object.assign(o, {
        errorElement: P.createElement(l.ErrorBoundary),
        ErrorBoundary: void 0,
      })),
    o
  );
}
var zp = ["HydrateFallback", "hydrateFallbackElement"],
  _p = class {
    constructor() {
      (this.status = "pending"),
        (this.promise = new Promise((l, o) => {
          (this.resolve = (a) => {
            this.status === "pending" && ((this.status = "resolved"), l(a));
          }),
            (this.reject = (a) => {
              this.status === "pending" && ((this.status = "rejected"), o(a));
            });
        }));
    }
  };
function Dp({ router: l, flushSync: o }) {
  let [a, d] = P.useState(l.state),
    [u, h] = P.useState(),
    [p, v] = P.useState({ isTransitioning: !1 }),
    [m, g] = P.useState(),
    [E, M] = P.useState(),
    [C, L] = P.useState(),
    T = P.useRef(new Map()),
    A = P.useCallback(
      (K, { deletedFetchers: ie, flushSync: de, viewTransitionOpts: z }) => {
        K.fetchers.forEach((Se, pe) => {
          Se.data !== void 0 && T.current.set(pe, Se.data);
        }),
          ie.forEach((Se) => T.current.delete(Se)),
          Md(
            de === !1 || o != null,
            'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.',
          );
        let ve =
          l.window != null &&
          l.window.document != null &&
          typeof l.window.document.startViewTransition == "function";
        if (
          (Md(
            z == null || ve,
            "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available.",
          ),
          !z || !ve)
        ) {
          o && de ? o(() => d(K)) : P.startTransition(() => d(K));
          return;
        }
        if (o && de) {
          o(() => {
            E && (m && m.resolve(), E.skipTransition()),
              v({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: z.currentLocation,
                nextLocation: z.nextLocation,
              });
          });
          let Se = l.window.document.startViewTransition(() => {
            o(() => d(K));
          });
          Se.finished.finally(() => {
            o(() => {
              g(void 0), M(void 0), h(void 0), v({ isTransitioning: !1 });
            });
          }),
            o(() => M(Se));
          return;
        }
        E
          ? (m && m.resolve(),
            E.skipTransition(),
            L({
              state: K,
              currentLocation: z.currentLocation,
              nextLocation: z.nextLocation,
            }))
          : (h(K),
            v({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: z.currentLocation,
              nextLocation: z.nextLocation,
            }));
      },
      [l.window, o, E, m],
    );
  P.useLayoutEffect(() => l.subscribe(A), [l, A]),
    P.useEffect(() => {
      p.isTransitioning && !p.flushSync && g(new _p());
    }, [p]),
    P.useEffect(() => {
      if (m && u && l.window) {
        let K = u,
          ie = m.promise,
          de = l.window.document.startViewTransition(async () => {
            P.startTransition(() => d(K)), await ie;
          });
        de.finished.finally(() => {
          g(void 0), M(void 0), h(void 0), v({ isTransitioning: !1 });
        }),
          M(de);
      }
    }, [u, m, l.window]),
    P.useEffect(() => {
      m && u && a.location.key === u.location.key && m.resolve();
    }, [m, E, a.location, u]),
    P.useEffect(() => {
      !p.isTransitioning &&
        C &&
        (h(C.state),
        v({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: C.currentLocation,
          nextLocation: C.nextLocation,
        }),
        L(void 0));
    }, [p.isTransitioning, C]);
  let H = P.useMemo(
      () => ({
        createHref: l.createHref,
        encodeLocation: l.encodeLocation,
        go: (K) => l.navigate(K),
        push: (K, ie, de) =>
          l.navigate(K, {
            state: ie,
            preventScrollReset: de == null ? void 0 : de.preventScrollReset,
          }),
        replace: (K, ie, de) =>
          l.navigate(K, {
            replace: !0,
            state: ie,
            preventScrollReset: de == null ? void 0 : de.preventScrollReset,
          }),
      }),
      [l],
    ),
    O = l.basename || "/",
    le = P.useMemo(
      () => ({ router: l, navigator: H, static: !1, basename: O }),
      [l, H, O],
    );
  return P.createElement(
    P.Fragment,
    null,
    P.createElement(
      yr.Provider,
      { value: le },
      P.createElement(
        Ql.Provider,
        { value: a },
        P.createElement(
          ef.Provider,
          { value: T.current },
          P.createElement(
            Ns.Provider,
            { value: p },
            P.createElement(
              Ip,
              {
                basename: O,
                location: a.location,
                navigationType: a.historyAction,
                navigator: H,
              },
              P.createElement(Tp, {
                routes: l.routes,
                future: l.future,
                state: a,
              }),
            ),
          ),
        ),
      ),
    ),
    null,
  );
}
var Tp = P.memo(Op);
function Op({ routes: l, future: o, state: a }) {
  return yp(l, void 0, a, o);
}
function Ip({
  basename: l = "/",
  children: o = null,
  location: a,
  navigationType: d = "POP",
  navigator: u,
  static: h = !1,
}) {
  Ne(
    !Kl(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
  );
  let p = l.replace(/^\/*/, "/"),
    v = P.useMemo(
      () => ({ basename: p, navigator: u, static: h, future: {} }),
      [p, u, h],
    );
  typeof a == "string" && (a = xn(a));
  let {
      pathname: m = "/",
      search: g = "",
      hash: E = "",
      state: M = null,
      key: C = "default",
    } = a,
    L = P.useMemo(() => {
      let T = Ht(m, p);
      return T == null
        ? null
        : {
            location: { pathname: T, search: g, hash: E, state: M, key: C },
            navigationType: d,
          };
    }, [p, m, g, E, M, C, d]);
  return (
    Ze(
      L != null,
      `<Router basename="${p}"> is not able to match the URL "${m}${g}${E}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    L == null
      ? null
      : P.createElement(
          sn.Provider,
          { value: v },
          P.createElement(wo.Provider, { children: o, value: L }),
        )
  );
}
var co = "get",
  fo = "application/x-www-form-urlencoded";
function xo(l) {
  return l != null && typeof l.tagName == "string";
}
function Fp(l) {
  return xo(l) && l.tagName.toLowerCase() === "button";
}
function bp(l) {
  return xo(l) && l.tagName.toLowerCase() === "form";
}
function Ap(l) {
  return xo(l) && l.tagName.toLowerCase() === "input";
}
function Vp(l) {
  return !!(l.metaKey || l.altKey || l.ctrlKey || l.shiftKey);
}
function Up(l, o) {
  return l.button === 0 && (!o || o === "_self") && !Vp(l);
}
var so = null;
function Hp() {
  if (so === null)
    try {
      new FormData(document.createElement("form"), 0), (so = !1);
    } catch {
      so = !0;
    }
  return so;
}
var $p = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function ds(l) {
  return l != null && !$p.has(l)
    ? (Ze(
        !1,
        `"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${fo}"`,
      ),
      null)
    : l;
}
function Bp(l, o) {
  let a, d, u, h, p;
  if (bp(l)) {
    let v = l.getAttribute("action");
    (d = v ? Ht(v, o) : null),
      (a = l.getAttribute("method") || co),
      (u = ds(l.getAttribute("enctype")) || fo),
      (h = new FormData(l));
  } else if (Fp(l) || (Ap(l) && (l.type === "submit" || l.type === "image"))) {
    let v = l.form;
    if (v == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let m = l.getAttribute("formaction") || v.getAttribute("action");
    if (
      ((d = m ? Ht(m, o) : null),
      (a = l.getAttribute("formmethod") || v.getAttribute("method") || co),
      (u =
        ds(l.getAttribute("formenctype")) ||
        ds(v.getAttribute("enctype")) ||
        fo),
      (h = new FormData(v, l)),
      !Hp())
    ) {
      let { name: g, type: E, value: M } = l;
      if (E === "image") {
        let C = g ? `${g}.` : "";
        h.append(`${C}x`, "0"), h.append(`${C}y`, "0");
      } else g && h.append(g, M);
    }
  } else {
    if (xo(l))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    (a = co), (d = null), (u = fo), (p = l);
  }
  return (
    h && u === "text/plain" && ((p = h), (h = void 0)),
    { action: d, method: a.toLowerCase(), encType: u, formData: h, body: p }
  );
}
function Ls(l, o) {
  if (l === !1 || l === null || typeof l > "u") throw new Error(o);
}
async function Wp(l, o) {
  if (l.id in o) return o[l.id];
  try {
    let a = await import(l.module);
    return (o[l.id] = a), a;
  } catch (a) {
    return (
      console.error(
        `Error loading route module \`${l.module}\`, reloading page...`,
      ),
      console.error(a),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function Gp(l) {
  return l == null
    ? !1
    : l.href == null
      ? l.rel === "preload" &&
        typeof l.imageSrcSet == "string" &&
        typeof l.imageSizes == "string"
      : typeof l.rel == "string" && typeof l.href == "string";
}
async function Qp(l, o, a) {
  let d = await Promise.all(
    l.map(async (u) => {
      let h = o.routes[u.route.id];
      if (h) {
        let p = await Wp(h, a);
        return p.links ? p.links() : [];
      }
      return [];
    }),
  );
  return Xp(
    d
      .flat(1)
      .filter(Gp)
      .filter((u) => u.rel === "stylesheet" || u.rel === "preload")
      .map((u) =>
        u.rel === "stylesheet"
          ? { ...u, rel: "prefetch", as: "style" }
          : { ...u, rel: "prefetch" },
      ),
  );
}
function zd(l, o, a, d, u, h) {
  let p = (m, g) => (a[g] ? m.route.id !== a[g].route.id : !0),
    v = (m, g) => {
      var E;
      return (
        a[g].pathname !== m.pathname ||
        (((E = a[g].route.path) == null ? void 0 : E.endsWith("*")) &&
          a[g].params["*"] !== m.params["*"])
      );
    };
  return h === "assets"
    ? o.filter((m, g) => p(m, g) || v(m, g))
    : h === "data"
      ? o.filter((m, g) => {
          var M;
          let E = d.routes[m.route.id];
          if (!E || !E.hasLoader) return !1;
          if (p(m, g) || v(m, g)) return !0;
          if (m.route.shouldRevalidate) {
            let C = m.route.shouldRevalidate({
              currentUrl: new URL(
                u.pathname + u.search + u.hash,
                window.origin,
              ),
              currentParams: ((M = a[0]) == null ? void 0 : M.params) || {},
              nextUrl: new URL(l, window.origin),
              nextParams: m.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof C == "boolean") return C;
          }
          return !0;
        })
      : [];
}
function Kp(l, o, { includeHydrateFallback: a } = {}) {
  return Yp(
    l
      .map((d) => {
        let u = o.routes[d.route.id];
        if (!u) return [];
        let h = [u.module];
        return (
          u.clientActionModule && (h = h.concat(u.clientActionModule)),
          u.clientLoaderModule && (h = h.concat(u.clientLoaderModule)),
          a &&
            u.hydrateFallbackModule &&
            (h = h.concat(u.hydrateFallbackModule)),
          u.imports && (h = h.concat(u.imports)),
          h
        );
      })
      .flat(1),
  );
}
function Yp(l) {
  return [...new Set(l)];
}
function Jp(l) {
  let o = {},
    a = Object.keys(l).sort();
  for (let d of a) o[d] = l[d];
  return o;
}
function Xp(l, o) {
  let a = new Set();
  return (
    new Set(o),
    l.reduce((d, u) => {
      let h = JSON.stringify(Jp(u));
      return a.has(h) || (a.add(h), d.push({ key: h, link: u })), d;
    }, [])
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var Zp = new Set([100, 101, 204, 205]);
function qp(l, o) {
  let a =
    typeof l == "string"
      ? new URL(
          l,
          typeof window > "u"
            ? "server://singlefetch/"
            : window.location.origin,
        )
      : l;
  return (
    a.pathname === "/"
      ? (a.pathname = "_root.data")
      : o && Ht(a.pathname, o) === "/"
        ? (a.pathname = `${o.replace(/\/$/, "")}/_root.data`)
        : (a.pathname = `${a.pathname.replace(/\/$/, "")}.data`),
    a
  );
}
function lf() {
  let l = P.useContext(yr);
  return (
    Ls(
      l,
      "You must render this element inside a <DataRouterContext.Provider> element",
    ),
    l
  );
}
function e1() {
  let l = P.useContext(Ql);
  return (
    Ls(
      l,
      "You must render this element inside a <DataRouterStateContext.Provider> element",
    ),
    l
  );
}
var Ms = P.createContext(void 0);
Ms.displayName = "FrameworkContext";
function of() {
  let l = P.useContext(Ms);
  return (
    Ls(l, "You must render this element inside a <HydratedRouter> element"), l
  );
}
function t1(l, o) {
  let a = P.useContext(Ms),
    [d, u] = P.useState(!1),
    [h, p] = P.useState(!1),
    {
      onFocus: v,
      onBlur: m,
      onMouseEnter: g,
      onMouseLeave: E,
      onTouchStart: M,
    } = o,
    C = P.useRef(null);
  P.useEffect(() => {
    if ((l === "render" && p(!0), l === "viewport")) {
      let A = (O) => {
          O.forEach((le) => {
            p(le.isIntersecting);
          });
        },
        H = new IntersectionObserver(A, { threshold: 0.5 });
      return (
        C.current && H.observe(C.current),
        () => {
          H.disconnect();
        }
      );
    }
  }, [l]),
    P.useEffect(() => {
      if (d) {
        let A = setTimeout(() => {
          p(!0);
        }, 100);
        return () => {
          clearTimeout(A);
        };
      }
    }, [d]);
  let L = () => {
      u(!0);
    },
    T = () => {
      u(!1), p(!1);
    };
  return a
    ? l !== "intent"
      ? [h, C, {}]
      : [
          h,
          C,
          {
            onFocus: Hl(v, L),
            onBlur: Hl(m, T),
            onMouseEnter: Hl(g, L),
            onMouseLeave: Hl(E, T),
            onTouchStart: Hl(M, L),
          },
        ]
    : [!1, C, {}];
}
function Hl(l, o) {
  return (a) => {
    l && l(a), a.defaultPrevented || o(a);
  };
}
function n1({ page: l, ...o }) {
  let { router: a } = lf(),
    d = P.useMemo(() => Kn(a.routes, l, a.basename), [a.routes, l, a.basename]);
  return d ? P.createElement(l1, { page: l, matches: d, ...o }) : null;
}
function r1(l) {
  let { manifest: o, routeModules: a } = of(),
    [d, u] = P.useState([]);
  return (
    P.useEffect(() => {
      let h = !1;
      return (
        Qp(l, o, a).then((p) => {
          h || u(p);
        }),
        () => {
          h = !0;
        }
      );
    }, [l, o, a]),
    d
  );
}
function l1({ page: l, matches: o, ...a }) {
  let d = wr(),
    { manifest: u, routeModules: h } = of(),
    { basename: p } = lf(),
    { loaderData: v, matches: m } = e1(),
    g = P.useMemo(() => zd(l, o, m, u, d, "data"), [l, o, m, u, d]),
    E = P.useMemo(() => zd(l, o, m, u, d, "assets"), [l, o, m, u, d]),
    M = P.useMemo(() => {
      if (l === d.pathname + d.search + d.hash) return [];
      let T = new Set(),
        A = !1;
      if (
        (o.forEach((O) => {
          var K;
          let le = u.routes[O.route.id];
          !le ||
            !le.hasLoader ||
            ((!g.some((ie) => ie.route.id === O.route.id) &&
              O.route.id in v &&
              (K = h[O.route.id]) != null &&
              K.shouldRevalidate) ||
            le.hasClientLoader
              ? (A = !0)
              : T.add(O.route.id));
        }),
        T.size === 0)
      )
        return [];
      let H = qp(l, p);
      return (
        A &&
          T.size > 0 &&
          H.searchParams.set(
            "_routes",
            o
              .filter((O) => T.has(O.route.id))
              .map((O) => O.route.id)
              .join(","),
          ),
        [H.pathname + H.search]
      );
    }, [p, v, d, u, g, o, l, h]),
    C = P.useMemo(() => Kp(E, u), [E, u]),
    L = r1(E);
  return P.createElement(
    P.Fragment,
    null,
    M.map((T) =>
      P.createElement("link", {
        key: T,
        rel: "prefetch",
        as: "fetch",
        href: T,
        ...a,
      }),
    ),
    C.map((T) =>
      P.createElement("link", { key: T, rel: "modulepreload", href: T, ...a }),
    ),
    L.map(({ key: T, link: A }) => P.createElement("link", { key: T, ...A })),
  );
}
function i1(...l) {
  return (o) => {
    l.forEach((a) => {
      typeof a == "function" ? a(o) : a != null && (a.current = o);
    });
  };
}
var af =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  af && (window.__reactRouterVersion = "7.6.2");
} catch {}
function o1(l, o) {
  return Ym({
    basename: o == null ? void 0 : o.basename,
    unstable_getContext: o == null ? void 0 : o.unstable_getContext,
    future: o == null ? void 0 : o.future,
    history: vm({ window: o == null ? void 0 : o.window }),
    hydrationData: a1(),
    routes: l,
    mapRouteProperties: Mp,
    hydrationRouteProperties: zp,
    dataStrategy: o == null ? void 0 : o.dataStrategy,
    patchRoutesOnNavigation: o == null ? void 0 : o.patchRoutesOnNavigation,
    window: o == null ? void 0 : o.window,
  }).initialize();
}
function a1() {
  let l = window == null ? void 0 : window.__staticRouterHydrationData;
  return l && l.errors && (l = { ...l, errors: s1(l.errors) }), l;
}
function s1(l) {
  if (!l) return null;
  let o = Object.entries(l),
    a = {};
  for (let [d, u] of o)
    if (u && u.__type === "RouteErrorResponse")
      a[d] = new po(u.status, u.statusText, u.data, u.internal === !0);
    else if (u && u.__type === "Error") {
      if (u.__subType) {
        let h = window[u.__subType];
        if (typeof h == "function")
          try {
            let p = new h(u.message);
            (p.stack = ""), (a[d] = p);
          } catch {}
      }
      if (a[d] == null) {
        let h = new Error(u.message);
        (h.stack = ""), (a[d] = h);
      }
    } else a[d] = u;
  return a;
}
var sf = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  uf = P.forwardRef(function (
    {
      onClick: o,
      discover: a = "render",
      prefetch: d = "none",
      relative: u,
      reloadDocument: h,
      replace: p,
      state: v,
      target: m,
      to: g,
      preventScrollReset: E,
      viewTransition: M,
      ...C
    },
    L,
  ) {
    let { basename: T } = P.useContext(sn),
      A = typeof g == "string" && sf.test(g),
      H,
      O = !1;
    if (typeof g == "string" && A && ((H = g), af))
      try {
        let pe = new URL(window.location.href),
          Oe = g.startsWith("//") ? new URL(pe.protocol + g) : new URL(g),
          et = Ht(Oe.pathname, T);
        Oe.origin === pe.origin && et != null
          ? (g = et + Oe.search + Oe.hash)
          : (O = !0);
      } catch {
        Ze(
          !1,
          `<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
        );
      }
    let le = pp(g, { relative: u }),
      [K, ie, de] = t1(d, C),
      z = f1(g, {
        replace: p,
        state: v,
        target: m,
        preventScrollReset: E,
        relative: u,
        viewTransition: M,
      });
    function ve(pe) {
      o && o(pe), pe.defaultPrevented || z(pe);
    }
    let Se = P.createElement("a", {
      ...C,
      ...de,
      href: H || le,
      onClick: O || h ? o : ve,
      ref: i1(L, ie),
      target: m,
      "data-discover": !A && a === "render" ? "true" : void 0,
    });
    return K && !A
      ? P.createElement(P.Fragment, null, Se, P.createElement(n1, { page: le }))
      : Se;
  });
uf.displayName = "Link";
var u1 = P.forwardRef(function (
  {
    "aria-current": o = "page",
    caseSensitive: a = !1,
    className: d = "",
    end: u = !1,
    style: h,
    to: p,
    viewTransition: v,
    children: m,
    ...g
  },
  E,
) {
  let M = Yl(p, { relative: g.relative }),
    C = wr(),
    L = P.useContext(Ql),
    { navigator: T, basename: A } = P.useContext(sn),
    H = L != null && g1(M) && v === !0,
    O = T.encodeLocation ? T.encodeLocation(M).pathname : M.pathname,
    le = C.pathname,
    K =
      L && L.navigation && L.navigation.location
        ? L.navigation.location.pathname
        : null;
  a ||
    ((le = le.toLowerCase()),
    (K = K ? K.toLowerCase() : null),
    (O = O.toLowerCase())),
    K && A && (K = Ht(K, A) || K);
  const ie = O !== "/" && O.endsWith("/") ? O.length - 1 : O.length;
  let de = le === O || (!u && le.startsWith(O) && le.charAt(ie) === "/"),
    z =
      K != null &&
      (K === O || (!u && K.startsWith(O) && K.charAt(O.length) === "/")),
    ve = { isActive: de, isPending: z, isTransitioning: H },
    Se = de ? o : void 0,
    pe;
  typeof d == "function"
    ? (pe = d(ve))
    : (pe = [
        d,
        de ? "active" : null,
        z ? "pending" : null,
        H ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let Oe = typeof h == "function" ? h(ve) : h;
  return P.createElement(
    uf,
    {
      ...g,
      "aria-current": Se,
      className: pe,
      ref: E,
      style: Oe,
      to: p,
      viewTransition: v,
    },
    typeof m == "function" ? m(ve) : m,
  );
});
u1.displayName = "NavLink";
var c1 = P.forwardRef(
  (
    {
      discover: l = "render",
      fetcherKey: o,
      navigate: a,
      reloadDocument: d,
      replace: u,
      state: h,
      method: p = co,
      action: v,
      onSubmit: m,
      relative: g,
      preventScrollReset: E,
      viewTransition: M,
      ...C
    },
    L,
  ) => {
    let T = p1(),
      A = v1(v, { relative: g }),
      H = p.toLowerCase() === "get" ? "get" : "post",
      O = typeof v == "string" && sf.test(v),
      le = (K) => {
        if ((m && m(K), K.defaultPrevented)) return;
        K.preventDefault();
        let ie = K.nativeEvent.submitter,
          de = (ie == null ? void 0 : ie.getAttribute("formmethod")) || p;
        T(ie || K.currentTarget, {
          fetcherKey: o,
          method: de,
          navigate: a,
          replace: u,
          state: h,
          relative: g,
          preventScrollReset: E,
          viewTransition: M,
        });
      };
    return P.createElement("form", {
      ref: L,
      method: H,
      action: A,
      onSubmit: d ? m : le,
      ...C,
      "data-discover": !O && l === "render" ? "true" : void 0,
    });
  },
);
c1.displayName = "Form";
function d1(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function cf(l) {
  let o = P.useContext(yr);
  return Ne(o, d1(l)), o;
}
function f1(
  l,
  {
    target: o,
    replace: a,
    state: d,
    preventScrollReset: u,
    relative: h,
    viewTransition: p,
  } = {},
) {
  let v = vp(),
    m = wr(),
    g = Yl(l, { relative: h });
  return P.useCallback(
    (E) => {
      if (Up(E, o)) {
        E.preventDefault();
        let M = a !== void 0 ? a : Yn(m) === Yn(g);
        v(l, {
          replace: M,
          state: d,
          preventScrollReset: u,
          relative: h,
          viewTransition: p,
        });
      }
    },
    [m, v, g, a, d, o, l, u, h, p],
  );
}
var h1 = 0,
  m1 = () => `__${String(++h1)}__`;
function p1() {
  let { router: l } = cf("useSubmit"),
    { basename: o } = P.useContext(sn),
    a = Pp();
  return P.useCallback(
    async (d, u = {}) => {
      let { action: h, method: p, encType: v, formData: m, body: g } = Bp(d, o);
      if (u.navigate === !1) {
        let E = u.fetcherKey || m1();
        await l.fetch(E, a, u.action || h, {
          preventScrollReset: u.preventScrollReset,
          formData: m,
          body: g,
          formMethod: u.method || p,
          formEncType: u.encType || v,
          flushSync: u.flushSync,
        });
      } else
        await l.navigate(u.action || h, {
          preventScrollReset: u.preventScrollReset,
          formData: m,
          body: g,
          formMethod: u.method || p,
          formEncType: u.encType || v,
          replace: u.replace,
          state: u.state,
          fromRouteId: a,
          flushSync: u.flushSync,
          viewTransition: u.viewTransition,
        });
    },
    [l, o, a],
  );
}
function v1(l, { relative: o } = {}) {
  let { basename: a } = P.useContext(sn),
    d = P.useContext(Sn);
  Ne(d, "useFormAction must be used inside a RouteContext");
  let [u] = d.matches.slice(-1),
    h = { ...Yl(l || ".", { relative: o }) },
    p = wr();
  if (l == null) {
    h.search = p.search;
    let v = new URLSearchParams(h.search),
      m = v.getAll("index");
    if (m.some((E) => E === "")) {
      v.delete("index"),
        m.filter((M) => M).forEach((M) => v.append("index", M));
      let E = v.toString();
      h.search = E ? `?${E}` : "";
    }
  }
  return (
    (!l || l === ".") &&
      u.route.index &&
      (h.search = h.search ? h.search.replace(/^\?/, "?index&") : "?index"),
    a !== "/" && (h.pathname = h.pathname === "/" ? a : an([a, h.pathname])),
    Yn(h)
  );
}
function g1(l, o = {}) {
  let a = P.useContext(Ns);
  Ne(
    a != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: d } = cf("useViewTransitionState"),
    u = Yl(l, { relative: o.relative });
  if (!a.isTransitioning) return !1;
  let h = Ht(a.currentLocation.pathname, d) || a.currentLocation.pathname,
    p = Ht(a.nextLocation.pathname, d) || a.nextLocation.pathname;
  return mo(u.pathname, p) != null || mo(u.pathname, h) != null;
}
[...Zp];
var y1 = bd();
/**
 * react-router v7.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function w1(l) {
  return P.createElement(Dp, { flushSync: y1.flushSync, ...l });
}
const x1 = "/assets/elmentor-logo-BmwUH4zI.png",
  _d = [
    { label: "Home", href: "#hero", id: "hero" },
    { label: "About", href: "#about", id: "about" },
    { label: "Circles", href: "#circles", id: "circles" },
    { label: "Activities", href: "#activities", id: "activities" },
    { label: "Founder", href: "#founder", id: "founder" },
    { label: "Benefits", href: "#benefits", id: "benefits" },
    { label: "News", href: "#news", id: "news" },
    { label: "Contact", href: "#contact", id: "contact" },
  ],
  Dd = 900;
function df() {
  const [l, o] = P.useState(!1),
    [a, d] = P.useState(!1),
    [u, h] = P.useState(window.innerWidth <= Dd);
  P.useEffect(() => {
    o(window.scrollY > 50);
    const g = () => {
        o(window.scrollY > 50);
      },
      E = () => {
        const M = window.innerWidth <= Dd;
        h(M), !M && a && d(!1);
      };
    return (
      window.addEventListener("scroll", g),
      window.addEventListener("resize", E),
      () => {
        window.removeEventListener("scroll", g),
          window.removeEventListener("resize", E);
      }
    );
  }, [a]),
    P.useEffect(() => {
      if (a) {
        document.body.classList.add("mobile-menu-open");
        const g = (E) => {
          E.key === "Escape" && v();
        };
        return (
          document.addEventListener("keydown", g),
          () => {
            document.body.classList.remove("mobile-menu-open"),
              document.removeEventListener("keydown", g);
          }
        );
      } else document.body.classList.remove("mobile-menu-open");
    }, [a]);
  const p = () => d((g) => !g),
    v = () => d(!1),
    m = (g, E) => {
      g.preventDefault(), v();
      const M = document.getElementById(E);
      if (M) {
        M.scrollIntoView({ behavior: "smooth" });
        const C = window.location.pathname + window.location.search + "#" + E;
        window.history.replaceState(null, "", C);
      }
    };
  return c.jsxs("header", {
    className: `elmentor-header${l ? " scrolled" : ""}`,
    children: [
      "      ",
      c.jsxs("nav", {
        className: "elmentor-nav",
        "aria-label": "Main Navigation",
        children: [
          "        ",
          c.jsx("a", {
            href: "#hero",
            className: "elmentor-logo-link",
            tabIndex: 0,
            onClick: (g) => m(g, "hero"),
            children: c.jsx("img", {
              src: x1,
              alt: "Elmentor Program Logo",
              className: "elmentor-logo",
            }),
          }),
          u &&
            c.jsxs("button", {
              className: "elmentor-hamburger",
              "aria-label": "Open navigation menu",
              "aria-expanded": a,
              "aria-controls": "elmentor-mobile-menu",
              onClick: p,
              children: [
                c.jsx("span", { className: "hamburger-bar" }),
                c.jsx("span", { className: "hamburger-bar" }),
                c.jsx("span", { className: "hamburger-bar" }),
              ],
            }),
          !u &&
            c.jsxs(c.Fragment, {
              children: [
                "            ",
                c.jsx("ul", {
                  className: "elmentor-nav-links",
                  children: _d.map((g) =>
                    c.jsx(
                      "li",
                      {
                        children: c.jsx("a", {
                          href: g.href,
                          tabIndex: 0,
                          onClick: (E) => m(E, g.id),
                          children: g.label,
                        }),
                      },
                      g.href,
                    ),
                  ),
                }),
                c.jsxs("div", {
                  className: "elmentor-lang-switcher",
                  role: "group",
                  "aria-label": "Language Switcher",
                  children: [
                    c.jsx("a", {
                      href: "#/",
                      className: "lang-btn active",
                      tabIndex: 0,
                      children: "English",
                    }),
                    c.jsx("span", { className: "lang-divider", children: "|" }),
                    c.jsx("a", {
                      href: "#/arabic",
                      className: "lang-btn",
                      tabIndex: 0,
                      children: "العربية",
                    }),
                  ],
                }),
              ],
            }),
        ],
      }),
      u &&
        c.jsxs("div", {
          id: "elmentor-mobile-menu",
          className: `elmentor-mobile-menu${a ? " open" : ""}`,
          role: "dialog",
          "aria-modal": "true",
          tabIndex: -1,
          children: [
            "          ",
            c.jsx("ul", {
              children: _d.map((g) =>
                c.jsx(
                  "li",
                  {
                    children: c.jsx("a", {
                      href: g.href,
                      tabIndex: 0,
                      onClick: (E) => m(E, g.id),
                      children: g.label,
                    }),
                  },
                  g.href,
                ),
              ),
            }),
            c.jsxs("div", {
              className: "elmentor-lang-switcher-mobile",
              role: "group",
              "aria-label": "Language Switcher",
              children: [
                c.jsx("a", {
                  href: "#/",
                  className: "lang-btn active",
                  tabIndex: 0,
                  children: "EN",
                }),
                c.jsx("span", { className: "lang-divider", children: "|" }),
                c.jsx("a", {
                  href: "#/arabic",
                  className: "lang-btn",
                  tabIndex: 0,
                  children: "ع",
                }),
              ],
            }),
          ],
        }),
      u &&
        a &&
        c.jsx("div", {
          className: "elmentor-menu-backdrop",
          onClick: v,
          tabIndex: -1,
          "aria-hidden": "true",
        }),
    ],
  });
}
const S1 = () => {
    const [l, o] = P.useState(0);
    return (
      P.useEffect(() => {
        const a = () => {
          const d = document.documentElement.scrollTop,
            u =
              document.documentElement.scrollHeight -
              document.documentElement.clientHeight,
            h = (d / u) * 100;
          o(h);
        };
        return (
          window.addEventListener("scroll", a),
          a(),
          () => window.removeEventListener("scroll", a)
        );
      }, []),
      c.jsx("div", {
        className: "scroll-progress-container",
        role: "progressbar",
        "aria-label": `Page scroll progress: ${Math.round(l)}%`,
        "aria-valuenow": Math.round(l),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        children: c.jsx("div", {
          className: "scroll-progress-bar",
          style: { width: `${l}%` },
        }),
      })
    );
  },
  E1 = () => (
    P.useEffect(() => {
      document.title =
        "Elmentor Program - A Private Community for Continuous Learning & Professional Growth";
      const l = document.querySelector('meta[name="description"]');
      if (l)
        l.setAttribute(
          "content",
          "Join Elmentor Program: A private mentorship community operated by DevOps Visions. Connect, collaborate, and elevate your skills with expert guidance and continuous learning opportunities.",
        );
      else {
        const h = document.createElement("meta");
        (h.name = "description"),
          (h.content =
            "Join Elmentor Program: A private mentorship community operated by DevOps Visions. Connect, collaborate, and elevate your skills with expert guidance and continuous learning opportunities."),
          document.head.appendChild(h);
      }
      [
        {
          property: "og:title",
          content:
            "Elmentor Program - Private Community for Professional Growth",
        },
        {
          property: "og:description",
          content:
            "Join Elmentor Program: A private mentorship community operated by DevOps Visions. Connect, collaborate, and elevate your skills.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: window.location.href },
        { property: "og:site_name", content: "Elmentor Program" },
        { property: "og:locale", content: "en_US" },
      ].forEach(({ property: h, content: p }) => {
        let v = document.querySelector(`meta[property="${h}"]`);
        if (v) v.setAttribute("content", p);
        else {
          const m = document.createElement("meta");
          m.setAttribute("property", h),
            m.setAttribute("content", p),
            document.head.appendChild(m);
        }
      }),
        [
          { name: "twitter:card", content: "summary_large_image" },
          {
            name: "twitter:title",
            content:
              "Elmentor Program - Private Community for Professional Growth",
          },
          {
            name: "twitter:description",
            content:
              "Join Elmentor Program: A private mentorship community operated by DevOps Visions.",
          },
        ].forEach(({ name: h, content: p }) => {
          let v = document.querySelector(`meta[name="${h}"]`);
          if (v) v.setAttribute("content", p);
          else {
            const m = document.createElement("meta");
            m.setAttribute("name", h),
              m.setAttribute("content", p),
              document.head.appendChild(m);
          }
        });
      const d = {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "DevOps Visions",
          description:
            "A global mentorship community for tech professionals focusing on DevOps, continuous learning, and professional growth.",
          url: window.location.origin,
          founder: {
            "@type": "Person",
            name: "Mohamed Radwan",
            jobTitle: "Microsoft DevOps MVP",
            sameAs: [
              "https://www.linkedin.com/in/mohamedahmedradwan/",
              "https://github.com/MohamedRadwan-DevOps",
              "https://www.youtube.com/@MRadwanMSF",
            ],
          },
          sameAs: [
            "https://www.linkedin.com/in/mohamedahmedradwan/",
            "https://github.com/MohamedRadwan-DevOps",
          ],
        },
        u = document.querySelector('script[type="application/ld+json"]');
      if (u) u.textContent = JSON.stringify(d);
      else {
        const h = document.createElement("script");
        (h.type = "application/ld+json"),
          (h.textContent = JSON.stringify(d)),
          document.head.appendChild(h);
      }
    }, []),
    null
  ),
  k1 = () => {
    document.addEventListener("click", (l) => {
      const o = l.target;
      if (o.classList.contains("btn") || o.closest(".btn")) {
        const a = o.classList.contains("btn") ? o : o.closest(".btn"),
          d = document.createElement("span");
        d.className = "btn__ripple";
        const u = a.getBoundingClientRect(),
          h = Math.max(u.width, u.height),
          p = l.clientX - u.left - h / 2,
          v = l.clientY - u.top - h / 2;
        (d.style.width = d.style.height = h + "px"),
          (d.style.left = p + "px"),
          (d.style.top = v + "px"),
          a.appendChild(d),
          setTimeout(() => {
            d.remove();
          }, 600);
      }
    });
  },
  C1 = () => {
    if ((k1(), "IntersectionObserver" in window)) {
      const l = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
        o = new IntersectionObserver((a) => {
          a.forEach((d) => {
            d.isIntersecting &&
              (d.target.classList.add("fade-in"), o.unobserve(d.target));
          });
        }, l);
      document.querySelectorAll("section").forEach((a) => {
        o.observe(a);
      });
    }
  },
  N1 = () => {
    if ("PerformanceObserver" in window) {
      try {
        new PerformanceObserver((l) => {
          let o = 0;
          for (const a of l.getEntries()) a.hadRecentInput || (o += a.value);
          console.log("CLS:", o);
        }).observe({ type: "layout-shift", buffered: !0 });
      } catch {
        console.log("CLS tracking not supported");
      }
      try {
        new PerformanceObserver((l) => {
          for (const o of l.getEntries())
            console.log("FID:", o.processingStart - o.startTime);
        }).observe({ type: "first-input", buffered: !0 });
      } catch {
        console.log("FID tracking not supported");
      }
      try {
        new PerformanceObserver((l) => {
          const o = l.getEntries(),
            a = o[o.length - 1];
          console.log("LCP:", a.startTime);
        }).observe({ type: "largest-contentful-paint", buffered: !0 });
      } catch {
        console.log("LCP tracking not supported");
      }
    }
  },
  j1 = () => {
    if ("IntersectionObserver" in window) {
      const l = new IntersectionObserver((o, a) => {
        o.forEach((d) => {
          if (d.isIntersecting) {
            const u = d.target,
              h = u.dataset.src;
            h && ((u.src = h), u.classList.remove("lazy"), a.unobserve(u));
          }
        });
      });
      document.querySelectorAll("img[data-src]").forEach((o) => {
        l.observe(o);
      });
    }
  },
  P1 = () => {
    ["/fonts/inter-var.woff2"].forEach((o) => {
      const a = document.createElement("link");
      (a.rel = "preload"),
        (a.href = o),
        (a.as = "font"),
        (a.type = "font/woff2"),
        (a.crossOrigin = "anonymous"),
        document.head.appendChild(a);
    });
  },
  R1 = () => {
    if ((N1(), j1(), P1(), "connection" in navigator)) {
      const l = navigator.connection;
      l &&
        l.effectiveType === "slow-2g" &&
        document.documentElement.classList.add("slow-connection");
    }
  },
  Ye = ({
    children: l,
    variant: o = "primary",
    size: a = "base",
    disabled: d = !1,
    loading: u = !1,
    onClick: h,
    type: p = "button",
    className: v = "",
    ariaLabel: m,
    icon: g,
    iconPosition: E = "left",
    fullWidth: M = !1,
    ...C
  }) => {
    const L = [
        "btn",
        `btn--${o}`,
        `btn--${a}`,
        M && "btn--full-width",
        u && "btn--loading",
        d && "btn--disabled",
        v,
      ]
        .filter(Boolean)
        .join(" "),
      T = (O) => {
        if (d || u) {
          O.preventDefault();
          return;
        }
        h == null || h(O);
      },
      A = () =>
        g
          ? c.jsx("span", {
              className: `btn__icon btn__icon--${E}`,
              children: g,
            })
          : null,
      H = () =>
        u
          ? c.jsxs(c.Fragment, {
              children: [
                c.jsx("span", {
                  className: "btn__spinner",
                  "aria-hidden": "true",
                }),
                c.jsx("span", { className: "btn__text", children: l }),
              ],
            })
          : c.jsxs(c.Fragment, {
              children: [
                E === "left" && A(),
                c.jsx("span", { className: "btn__text", children: l }),
                E === "right" && A(),
              ],
            });
    return c.jsx("button", {
      type: p,
      className: L,
      onClick: T,
      disabled: d || u,
      "aria-label": m || (typeof l == "string" ? l : void 0),
      "aria-disabled": d || u,
      ...C,
      children: H(),
    });
  };
function L1() {
  const l = P.useRef(null);
  return c.jsxs("section", {
    className: "elmentor-hero",
    id: "hero",
    ref: l,
    children: [
      c.jsx("div", { className: "elmentor-hero-overlay" }),
      c.jsxs("div", {
        className: "elmentor-hero-content",
        children: [
          c.jsxs("h1", {
            className: "elmentor-hero-title",
            children: [
              "Join Elmentor Program: A Private Community for Continuous Learning and Professional Growth.",
              c.jsx("br", {}),
              c.jsx("span", {
                className: "elmentor-hero-slogan",
                children: "Empower through mentorship.",
              }),
            ],
          }),
          c.jsxs("p", {
            className: "elmentor-hero-subhead",
            children: [
              "Connect, collaborate, and elevate your skills with a diverse network of tech enthusiasts and experts.",
              c.jsx("br", {}),
              "As we believe, ",
              c.jsx("span", {
                className: "elmentor-hero-quote",
                children:
                  '"If you want to go fast, go alone. If you want to go far, go together."',
              }),
            ],
          }),
          c.jsxs("div", {
            className: "hero-cta-container",
            children: [
              c.jsx(Ye, {
                variant: "primary",
                size: "lg",
                onClick: () => {
                  var o;
                  return (o = document.getElementById("about")) == null
                    ? void 0
                    : o.scrollIntoView({ behavior: "smooth" });
                },
                ariaLabel: "Explore the Elmentor Program",
                children: "Explore Elmentor Program",
              }),
              c.jsx(Ye, {
                variant: "secondary",
                size: "lg",
                onClick: () => {
                  var o;
                  return (o = document.getElementById("contact")) == null
                    ? void 0
                    : o.scrollIntoView({ behavior: "smooth" });
                },
                ariaLabel: "Get in touch with us",
                children: "Get Started",
              }),
            ],
          }),
        ],
      }),
      c.jsx("div", {
        className: "elmentor-hero-wave-divider",
        children: c.jsx("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 1200 120",
          preserveAspectRatio: "none",
          children: c.jsx("path", {
            d: "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",
            className: "elmentor-hero-wave-shape",
          }),
        }),
      }),
    ],
  });
}
var ff = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Td = wn.createContext && wn.createContext(ff),
  M1 = ["attr", "size", "title"];
function z1(l, o) {
  if (l == null) return {};
  var a = _1(l, o),
    d,
    u;
  if (Object.getOwnPropertySymbols) {
    var h = Object.getOwnPropertySymbols(l);
    for (u = 0; u < h.length; u++)
      (d = h[u]),
        !(o.indexOf(d) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(l, d) &&
          (a[d] = l[d]);
  }
  return a;
}
function _1(l, o) {
  if (l == null) return {};
  var a = {};
  for (var d in l)
    if (Object.prototype.hasOwnProperty.call(l, d)) {
      if (o.indexOf(d) >= 0) continue;
      a[d] = l[d];
    }
  return a;
}
function go() {
  return (
    (go = Object.assign
      ? Object.assign.bind()
      : function (l) {
          for (var o = 1; o < arguments.length; o++) {
            var a = arguments[o];
            for (var d in a)
              Object.prototype.hasOwnProperty.call(a, d) && (l[d] = a[d]);
          }
          return l;
        }),
    go.apply(this, arguments)
  );
}
function Od(l, o) {
  var a = Object.keys(l);
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(l);
    o &&
      (d = d.filter(function (u) {
        return Object.getOwnPropertyDescriptor(l, u).enumerable;
      })),
      a.push.apply(a, d);
  }
  return a;
}
function yo(l) {
  for (var o = 1; o < arguments.length; o++) {
    var a = arguments[o] != null ? arguments[o] : {};
    o % 2
      ? Od(Object(a), !0).forEach(function (d) {
          D1(l, d, a[d]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a))
        : Od(Object(a)).forEach(function (d) {
            Object.defineProperty(l, d, Object.getOwnPropertyDescriptor(a, d));
          });
  }
  return l;
}
function D1(l, o, a) {
  return (
    (o = T1(o)),
    o in l
      ? Object.defineProperty(l, o, {
          value: a,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (l[o] = a),
    l
  );
}
function T1(l) {
  var o = O1(l, "string");
  return typeof o == "symbol" ? o : o + "";
}
function O1(l, o) {
  if (typeof l != "object" || !l) return l;
  var a = l[Symbol.toPrimitive];
  if (a !== void 0) {
    var d = a.call(l, o);
    if (typeof d != "object") return d;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (o === "string" ? String : Number)(l);
}
function hf(l) {
  return (
    l &&
    l.map((o, a) =>
      wn.createElement(o.tag, yo({ key: a }, o.attr), hf(o.child)),
    )
  );
}
function Ve(l) {
  return (o) =>
    wn.createElement(I1, go({ attr: yo({}, l.attr) }, o), hf(l.child));
}
function I1(l) {
  var o = (a) => {
    var { attr: d, size: u, title: h } = l,
      p = z1(l, M1),
      v = u || a.size || "1em",
      m;
    return (
      a.className && (m = a.className),
      l.className && (m = (m ? m + " " : "") + l.className),
      wn.createElement(
        "svg",
        go(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          a.attr,
          d,
          p,
          {
            className: m,
            style: yo(yo({ color: l.color || a.color }, a.style), l.style),
            height: v,
            width: v,
            xmlns: "http://www.w3.org/2000/svg",
          },
        ),
        h && wn.createElement("title", null, h),
        l.children,
      )
    );
  };
  return Td !== void 0
    ? wn.createElement(Td.Consumer, null, (a) => o(a))
    : o(ff);
}
function F1(l) {
  return Ve({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z",
        },
        child: [],
      },
    ],
  })(l);
}
function Jr(l) {
  return Ve({
    attr: { viewBox: "0 0 496 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z",
        },
        child: [],
      },
    ],
  })(l);
}
function b1(l) {
  return Ve({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z",
        },
        child: [],
      },
    ],
  })(l);
}
function mf(l) {
  return Ve({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M0 32h214.6v214.6H0V32zm233.4 0H448v214.6H233.4V32zM0 265.4h214.6V480H0V265.4zm233.4 0H448V480H233.4V265.4z",
        },
        child: [],
      },
    ],
  })(l);
}
function pf(l) {
  return Ve({
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z",
        },
        child: [],
      },
    ],
  })(l);
}
function vf(l) {
  return Ve({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z",
        },
        child: [],
      },
    ],
  })(l);
}
function gf(l) {
  return Ve({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M172.2 226.8c-14.6-2.9-28.2 8.9-28.2 23.8V301c0 10.2 7.1 18.4 16.7 22 18.2 6.8 31.3 24.4 31.3 45 0 26.5-21.5 48-48 48s-48-21.5-48-48V120c0-13.3-10.7-24-24-24H24c-13.3 0-24 10.7-24 24v248c0 89.5 82.1 160.2 175 140.7 54.4-11.4 98.3-55.4 109.7-109.7 17.4-82.9-37-157.2-112.5-172.2zM209 0c-9.2-.5-17 6.8-17 16v31.6c0 8.5 6.6 15.5 15 15.9 129.4 7 233.4 112 240.9 241.5.5 8.4 7.5 15 15.9 15h32.1c9.2 0 16.5-7.8 16-17C503.4 139.8 372.2 8.6 209 0zm.3 96c-9.3-.7-17.3 6.7-17.3 16.1v32.1c0 8.4 6.5 15.3 14.8 15.9 76.8 6.3 138 68.2 144.9 145.2.8 8.3 7.6 14.7 15.9 14.7h32.2c9.3 0 16.8-8 16.1-17.3-8.4-110.1-96.5-198.2-206.6-206.7z",
        },
        child: [],
      },
    ],
  })(l);
}
function A1(l) {
  return Ve({
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z",
        },
        child: [],
      },
    ],
  })(l);
}
function Id(l) {
  return Ve({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z",
        },
        child: [],
      },
    ],
  })(l);
}
function V1(l) {
  return Ve({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z",
        },
        child: [],
      },
    ],
  })(l);
}
function gs(l) {
  return Ve({
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38.33-62.14-49.94-112.62-112-112.62zm-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 96zM592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0z",
        },
        child: [],
      },
    ],
  })(l);
}
function U1(l) {
  return Ve({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z",
        },
        child: [],
      },
    ],
  })(l);
}
function H1(l) {
  return Ve({
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z",
        },
        child: [],
      },
    ],
  })(l);
}
function $1(l) {
  return Ve({
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z",
        },
        child: [],
      },
    ],
  })(l);
}
function B1(l) {
  return Ve({
    attr: { viewBox: "0 0 496 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z",
        },
        child: [],
      },
    ],
  })(l);
}
function yf(l) {
  return Ve({
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M488 192H336v56c0 39.7-32.3 72-72 72s-72-32.3-72-72V126.4l-64.9 39C107.8 176.9 96 197.8 96 220.2v47.3l-80 46.2C.7 322.5-4.6 342.1 4.3 357.4l80 138.6c8.8 15.3 28.4 20.5 43.7 11.7L231.4 448H368c35.3 0 64-28.7 64-64h16c17.7 0 32-14.3 32-32v-64h8c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zm147.7-37.4L555.7 16C546.9.7 527.3-4.5 512 4.3L408.6 64H306.4c-12 0-23.7 3.4-33.9 9.7L239 94.6c-9.4 5.8-15 16.1-15 27.1V248c0 22.1 17.9 40 40 40s40-17.9 40-40v-88h184c30.9 0 56 25.1 56 56v28.5l80-46.2c15.3-8.9 20.5-28.4 11.7-43.7z",
        },
        child: [],
      },
    ],
  })(l);
}
function W1(l) {
  return Ve({
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z",
        },
        child: [],
      },
    ],
  })(l);
}
function G1(l) {
  return Ve({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z",
        },
        child: [],
      },
    ],
  })(l);
}
function ys(l) {
  return Ve({
    attr: { viewBox: "0 0 352 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z",
        },
        child: [],
      },
    ],
  })(l);
}
function Q1(l) {
  return Ve({
    attr: { viewBox: "0 0 384 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z",
        },
        child: [],
      },
    ],
  })(l);
}
function wf(l) {
  return Ve({
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z",
        },
        child: [],
      },
    ],
  })(l);
}
function K1(l) {
  return Ve({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z",
        },
        child: [],
      },
    ],
  })(l);
}
function Y1(l) {
  return Ve({
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z",
        },
        child: [],
      },
    ],
  })(l);
}
function J1(l) {
  return Ve({
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z",
        },
        child: [],
      },
    ],
  })(l);
}
function X1(l) {
  return Ve({
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z",
        },
        child: [],
      },
    ],
  })(l);
}
function ws(l) {
  return Ve({
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z",
        },
        child: [],
      },
    ],
  })(l);
}
const Z1 = () => {
    const l = P.useRef(null),
      o = P.useRef(null),
      a = P.useRef([]),
      d = P.useRef(null);
    return (
      P.useEffect(() => {
        const u = { root: null, rootMargin: "0px", threshold: 0.1 },
          h = (v) => {
            v.forEach((m) => {
              m.isIntersecting && m.target.classList.add("animate-in");
            });
          },
          p = new IntersectionObserver(h, u);
        return (
          o.current && p.observe(o.current),
          d.current && p.observe(d.current),
          a.current.forEach((v) => {
            v && p.observe(v);
          }),
          () => {
            o.current && p.unobserve(o.current),
              d.current && p.unobserve(d.current),
              a.current.forEach((v) => {
                v && p.unobserve(v);
              });
          }
        );
      }, []),
      c.jsx("section", {
        className: "about-section",
        id: "about",
        ref: l,
        children: c.jsxs("div", {
          className: "about-container",
          children: [
            "        ",
            c.jsx("h2", {
              className: "about-title",
              ref: o,
              children: "About the Elmentor Program",
            }),
            c.jsxs("div", {
              className: "about-content",
              children: [
                c.jsx("div", {
                  className: "about-block",
                  ref: (u) => (a.current[0] = u),
                  "data-animation-delay": "0",
                  children: c.jsxs("div", {
                    className: "about-block-inner",
                    children: [
                      "              ",
                      c.jsxs("h3", {
                        className: "about-subtitle",
                        children: [
                          c.jsx(ys, {
                            className: "about-icon pulse-icon",
                            "aria-hidden": "true",
                          }),
                          "Mission & Core Values",
                        ],
                      }),
                      c.jsxs("ul", {
                        className: "about-list",
                        children: [
                          c.jsx("li", {
                            children:
                              "Elmentor Program is a private community operated by DevOps Visions professional services.",
                          }),
                          c.jsx("li", {
                            children:
                              "Empowering tech professionals through dedicated mentorship and collaborative knowledge sharing.",
                          }),
                          c.jsx("li", {
                            children:
                              "Fostering a transparent, inclusive, and supportive community environment.",
                          }),
                          c.jsx("li", {
                            children:
                              "Encouraging continuous learning, professional growth, and the pursuit of excellence.",
                          }),
                          c.jsx("li", {
                            children:
                              "Providing genuine value and unwavering support for every member's journey.",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                c.jsx("div", {
                  className: "about-block",
                  ref: (u) => (a.current[1] = u),
                  "data-animation-delay": "200",
                  children: c.jsxs("div", {
                    className: "about-block-inner",
                    children: [
                      c.jsxs("h3", {
                        className: "about-subtitle",
                        children: [
                          c.jsx(yf, {
                            className: "about-icon pulse-icon",
                            "aria-hidden": "true",
                          }),
                          "What We Offer",
                        ],
                      }),
                      c.jsxs("ul", {
                        className: "about-list",
                        children: [
                          c.jsx("li", {
                            children:
                              "Mentorship from experienced industry leaders and Microsoft MVPs.",
                          }),
                          c.jsx("li", {
                            children:
                              "Access to curated knowledge, learning resources, and exclusive content.",
                          }),
                          c.jsx("li", {
                            children:
                              "Networking opportunities with a diverse global community of tech professionals.",
                          }),
                          c.jsx("li", {
                            children:
                              "Opportunities for hands-on experience through real-world community projects and open-source contributions.",
                          }),
                          c.jsx("li", {
                            children:
                              "Comprehensive career development support (CV reviews, referrals, job offers).",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                c.jsx("div", {
                  className: "about-block",
                  ref: (u) => (a.current[2] = u),
                  "data-animation-delay": "400",
                  children: c.jsxs("div", {
                    className: "about-block-inner",
                    children: [
                      c.jsxs("h3", {
                        className: "about-subtitle",
                        children: [
                          c.jsx(H1, {
                            className: "about-icon pulse-icon",
                            "aria-hidden": "true",
                          }),
                          "How We Work: Our Platforms",
                        ],
                      }),
                      c.jsxs("ul", {
                        className: "about-list",
                        children: [
                          c.jsxs("li", {
                            children: [
                              c.jsxs("span", {
                                className: "about-key",
                                children: [
                                  c.jsx(Jr, {
                                    className: "about-icon",
                                    "aria-hidden": "true",
                                  }),
                                  c.jsx("a", {
                                    href: "https://github.com/DevOpsVisions",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: "GitHub",
                                  }),
                                ],
                              }),
                              ": Our central knowledge base for structured documentation, collaborative project development, and transparent information sharing.",
                            ],
                          }),
                          c.jsxs("li", {
                            children: [
                              c.jsxs("span", {
                                className: "about-key",
                                children: [
                                  c.jsx(mf, {
                                    className: "about-icon",
                                    "aria-hidden": "true",
                                  }),
                                  "Microsoft Teams",
                                ],
                              }),
                              ": Our primary platform for daily communication, real-time discussions, group collaboration, and community announcements.",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            c.jsxs("div", {
              className: "about-cta",
              ref: d,
              children: [
                c.jsx(Ye, {
                  variant: "primary",
                  size: "lg",
                  onClick: () => {
                    var u;
                    return (u = document.getElementById("contact")) == null
                      ? void 0
                      : u.scrollIntoView({ behavior: "smooth" });
                  },
                  ariaLabel: "Join the DevOps Visions community",
                  children: "Join Our Community",
                }),
                "          ",
                c.jsx(Ye, {
                  variant: "ghost",
                  size: "lg",
                  onClick: () =>
                    window.open("https://github.com/ElmentorProgram", "_blank"),
                  ariaLabel: "View our GitHub organization",
                  icon: c.jsx(Jr, {}),
                  children: "View on GitHub",
                }),
              ],
            }),
          ],
        }),
      })
    );
  },
  q1 = [
    {
      name: "Audience",
      description: "External audience who engage with us from the outside",
    },
    {
      name: "Guests",
      description: "Occasional participants with limited access",
    },
    {
      name: "Members",
      description: "Active, permanent participants in the community",
    },
    {
      name: "Group Advisory (GAs)",
      description: "Leaders who support and guide members",
    },
    {
      name: "Lead Group Advisory (LGAs)",
      description: "Guide both the Group Advisory and members",
    },
    {
      name: "Executives",
      description: "Set strategic direction and oversee all layers",
    },
  ],
  ev = () => {
    const [l, o] = P.useState(!1),
      a = P.useRef(null),
      d = P.useRef(null),
      u = P.useRef(null),
      h = P.useRef(null),
      p = P.useRef(null),
      v = P.useRef(null),
      m = P.useRef(null);
    return (
      P.useEffect(() => {
        const g = new IntersectionObserver(
          ([E]) => {
            E.isIntersecting && (o(!0), g.disconnect());
          },
          { threshold: 0.2 },
        );
        return (
          a.current && g.observe(a.current),
          () => {
            g.disconnect();
          }
        );
      }, []),
      c.jsxs("section", {
        id: "circles",
        className: "circles-section",
        "aria-labelledby": "circles-title",
        ref: a,
        children: [
          c.jsxs("div", {
            className: "circles-container",
            children: [
              c.jsx("h2", {
                id: "circles-title",
                className: `circles-section-title ${l ? "animate-fade-in" : ""}`,
                ref: d,
                children:
                  "Understanding Knowledge Access Through Elmentor Circles",
              }),
              c.jsx("div", {
                className: `circles-explanation ${l ? "animate-fade-in animate-delay-200" : ""}`,
                ref: h,
                children: c.jsxs("p", {
                  className: "circles-intro",
                  children: [
                    "To structure access, engagement, and leadership within the community, we use a model called",
                    c.jsx("strong", { children: " Elmentor Circles" }),
                    ". These circles define different levels of participation and responsibility, arranged in clear layers:",
                  ],
                }),
              }),
              c.jsxs("div", {
                className: `circles-diagram ${l ? "animate-scale-in animate-delay-400" : ""}`,
                ref: u,
                children: [
                  "          ",
                  c.jsxs("div", {
                    className: "circles-image-wrapper",
                    children: [
                      c.jsx("img", {
                        src: "./assets/circles/elmentor-circles.png",
                        alt: "Elmentor Circles Diagram showing the layered structure from Audience to Executives",
                        className: "circles-image",
                        loading: "lazy",
                      }),
                      c.jsx("div", { className: "circles-image-overlay" }),
                    ],
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "circles-content",
                children: [
                  c.jsx("div", {
                    className: `circles-list-container ${l ? "animate-fade-in-up animate-delay-600" : ""}`,
                    ref: p,
                    children: c.jsx("ul", {
                      className: "circles-list",
                      children: q1.map((g, E) =>
                        c.jsxs(
                          "li",
                          {
                            className: `circle-item ${l ? `animate-fade-in-left animate-delay-${(E + 3) * 200}` : ""}`,
                            children: [
                              c.jsx("span", {
                                className: "circle-name",
                                children: g.name,
                              }),
                              " – ",
                              g.description,
                            ],
                          },
                          g.name,
                        ),
                      ),
                    }),
                  }),
                  c.jsx("div", {
                    className: `circles-visual-note ${l ? "animate-fade-in animate-delay-1400" : ""}`,
                    ref: v,
                    children: c.jsx("p", {
                      children:
                        "This model helps us structure engagement, learning, and decision-making in a clear and scalable way.",
                    }),
                  }),
                  c.jsxs("div", {
                    className: `circles-cta ${l ? "animate-fade-in-up animate-delay-1600" : ""}`,
                    ref: m,
                    children: [
                      c.jsx(Ye, {
                        variant: "primary",
                        size: "lg",
                        onClick: () => {
                          var g;
                          return (g = document.getElementById("contact")) ==
                            null
                            ? void 0
                            : g.scrollIntoView({ behavior: "smooth" });
                        },
                        ariaLabel: "Join El Mentor community",
                        children: "Join Our Community",
                      }),
                      c.jsx(Ye, {
                        variant: "secondary",
                        size: "lg",
                        onClick: () => {
                          var g;
                          return (g = document.getElementById("activities")) ==
                            null
                            ? void 0
                            : g.scrollIntoView({ behavior: "smooth" });
                        },
                        ariaLabel: "Learn about our activities",
                        children: "Explore Our Activities",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          c.jsxs("div", {
            className: "circles-bg-decoration",
            children: [
              c.jsx("div", { className: "circle-deco circle-deco-1" }),
              c.jsx("div", { className: "circle-deco circle-deco-2" }),
              c.jsx("div", { className: "circle-deco circle-deco-3" }),
            ],
          }),
        ],
      })
    );
  },
  tv = [
    {
      category: "Technical Skills & Projects",
      items: [
        { name: "DevOps Public Sessions", icon: c.jsx(gs, {}) },
        {
          name: "Community Projects (Real-world practice)",
          icon: c.jsx(wf, {}),
        },
      ],
    },
    {
      category: "Soft Skills Development",
      items: [
        { name: "Communication Skills", icon: c.jsx($1, {}) },
        { name: "Negotiation Skills", icon: c.jsx(W1, {}) },
        { name: "Understanding Corporate Dynamics", icon: c.jsx(Id, {}) },
        { name: "Self-Management (Time, Motivation)", icon: c.jsx(ys, {}) },
      ],
    },
    {
      category: "Networking & Resources",
      items: [
        { name: "Professional Networking", icon: c.jsx(ws, {}) },
        { name: "Resource Sharing", icon: c.jsx(A1, {}) },
      ],
    },
    {
      category: "Career Development",
      items: [
        { name: "CV Reviews", icon: c.jsx(Y1, {}) },
        { name: "Job Referrals", icon: c.jsx(Id, {}) },
        { name: "Career Guidance", icon: c.jsx(U1, {}) },
      ],
    },
    {
      category: "Growth & Support",
      items: [
        { name: "Peer Support Groups", icon: c.jsx(J1, {}) },
        { name: "Personal Growth Workshops", icon: c.jsx(ys, {}) },
      ],
    },
    {
      category: "Mentorship Services",
      items: [
        { name: "One-on-One Mentorship", icon: c.jsx(gs, {}) },
        { name: "Mentor-For-All Sessions", icon: c.jsx(ws, {}) },
      ],
    },
  ],
  nv = () => {
    const l = P.useRef(null),
      o = P.useRef(null),
      a = P.useRef([]),
      d = P.useRef(null);
    return (
      P.useEffect(() => {
        const u = new IntersectionObserver(
          (h) => {
            h[0].isIntersecting &&
              (o.current && o.current.classList.add("animate-in"),
              a.current.forEach((p, v) => {
                p &&
                  setTimeout(() => {
                    p.classList.add("animate-in");
                  }, 150 * v);
              }),
              d.current &&
                setTimeout(() => {
                  d.current && d.current.classList.add("animate-in");
                }, a.current.length * 150),
              u.unobserve(l.current));
          },
          { threshold: 0.1 },
        );
        return (
          l.current && u.observe(l.current),
          () => {
            l.current && u.unobserve(l.current);
          }
        );
      }, []),
      c.jsx("section", {
        id: "activities",
        className: "activities-section",
        ref: l,
        children: c.jsxs("div", {
          className: "activities-container",
          children: [
            c.jsxs("div", {
              className: "activities-header",
              ref: o,
              children: [
                c.jsx("h2", {
                  className: "activities-title",
                  children: "Our Activities",
                }),
                c.jsx("p", {
                  className: "activities-subtitle",
                  children:
                    "Engage in a variety of activities designed to enhance your skills, expand your network, and accelerate your career.",
                }),
              ],
            }),
            c.jsx("div", {
              className: "activities-grid",
              children: tv.map((u, h) =>
                c.jsxs(
                  "div",
                  {
                    className: "activity-category-card",
                    ref: (p) => (a.current[h] = p),
                    children: [
                      c.jsx("h3", {
                        className: "activity-category-title",
                        children: u.category,
                      }),
                      c.jsx("ul", {
                        className: "activity-items-list",
                        children: u.items.map((p, v) =>
                          c.jsxs(
                            "li",
                            {
                              className: "activity-item",
                              style: { animationDelay: `${v * 100}ms` },
                              children: [
                                c.jsx("span", {
                                  className: "activity-icon",
                                  "aria-hidden": "true",
                                  children: p.icon,
                                }),
                                c.jsx("span", {
                                  className: "activity-text",
                                  children: p.name,
                                }),
                              ],
                            },
                            p.name,
                          ),
                        ),
                      }),
                    ],
                  },
                  u.category,
                ),
              ),
            }),
            c.jsxs("div", {
              className: "activities-cta",
              ref: d,
              children: [
                c.jsx("p", {
                  className: "activities-cta-text",
                  children:
                    "Ready to join our community and start your professional growth journey?",
                }),
                c.jsxs("div", {
                  className: "activities-cta-buttons",
                  children: [
                    c.jsx(Ye, {
                      variant: "primary",
                      size: "lg",
                      onClick: () => {
                        var u;
                        return (u = document.getElementById("contact")) == null
                          ? void 0
                          : u.scrollIntoView({ behavior: "smooth" });
                      },
                      ariaLabel: "Join DevOps Visions community",
                      icon: c.jsx(vf, {}),
                      iconPosition: "right",
                      children: "Join Now",
                    }),
                    c.jsx(Ye, {
                      variant: "secondary",
                      size: "lg",
                      onClick: () => {
                        var u;
                        return (u = document.getElementById("about")) == null
                          ? void 0
                          : u.scrollIntoView({ behavior: "smooth" });
                      },
                      ariaLabel: "Learn more about our programs",
                      children: "Learn More",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      })
    );
  },
  rv = "/assets/mohamed-radwan-Dt7-SbWM.png",
  lv = () => {
    const l = "Mohamed Radwan",
      o =
        "Microsoft DevOps MVP, Founder of DevOps Visions & Elmentor Program (24+ years experience)",
      a =
        "Mohamed Radwan is a Microsoft MVP with over 24 years of experience in the tech industry. He has worked with more than 60 global enterprise companies, specializing in DevOps, Azure, Agile, and GitHub. Mohamed is passionate about automation, community contributions, and is a frequent speaker at major technology conferences. He founded DevOps Visions, a professional services entity, and the Elmentor Program to empower tech professionals through mentorship, collaborative knowledge sharing, and cutting-edge DevOps practices.",
      d = [
        {
          name: "LinkedIn",
          icon: c.jsx(b1, {}),
          url: "https://www.linkedin.com/in/mohamedahmedradwan/",
          label: "View LinkedIn Profile",
        },
        {
          name: "GitHub",
          icon: c.jsx(Jr, {}),
          url: "https://github.com/MohamedRadwan-DevOps/devops-step-by-step",
          label: "GitHub Portfolio",
        },
        {
          name: "Blog",
          icon: c.jsx(gf, {}),
          url: "https://mohamedradwan-devops.github.io/",
          label: "Personal Blog",
        },
        {
          name: "YouTube",
          icon: c.jsx(pf, {}),
          url: "https://www.youtube.com/@MRadwanMSF",
          label: "Watch Mohamed on YouTube",
        },
      ];
    return c.jsx("section", {
      id: "founder",
      className: "founder-section",
      "aria-labelledby": "founder-title",
      children: c.jsxs("div", {
        className: "founder-container",
        children: [
          c.jsx("h2", {
            id: "founder-title",
            className: "founder-section-title",
            children: "About the Founder",
          }),
          c.jsxs("div", {
            className: "founder-content-wrapper",
            children: [
              "          ",
              c.jsxs("div", {
                className: "founder-image-container",
                children: [
                  "            ",
                  c.jsx("img", {
                    src: rv,
                    alt: `${l}, Microsoft DevOps MVP, Founder of DevOps Visions and Elmentor Program`,
                    className: "founder-image",
                    loading: "lazy",
                    decoding: "async",
                    width: "400",
                    height: "400",
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "founder-details-container",
                children: [
                  c.jsx("h3", { className: "founder-name", children: l }),
                  c.jsx("p", {
                    className: "founder-title",
                    role: "text",
                    children: o,
                  }),
                  c.jsx("p", {
                    className: "founder-bio",
                    role: "text",
                    children: a,
                  }),
                  c.jsx("div", {
                    className: "founder-social-links",
                    role: "list",
                    "aria-label": "Mohamed Radwan's social media profiles",
                    children: d.map((u) =>
                      c.jsxs(
                        "a",
                        {
                          href: u.url,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "founder-social-link",
                          "aria-label": u.label,
                          role: "listitem",
                          children: [
                            c.jsx("span", {
                              className: "social-icon",
                              "aria-hidden": "true",
                              children: u.icon,
                            }),
                            c.jsx("span", {
                              className: "social-label",
                              children: u.label,
                            }),
                          ],
                        },
                        u.name,
                      ),
                    ),
                  }),
                  c.jsxs("div", {
                    className: "founder-cta-section",
                    children: [
                      c.jsx("h4", {
                        className: "founder-cta-title",
                        children: "Ready to Learn from Mohamed?",
                      }),
                      c.jsx("p", {
                        className: "founder-cta-text",
                        children:
                          "Connect with Mohamed and start your journey with personalized mentorship and guidance.",
                      }),
                      c.jsxs("div", {
                        className: "founder-cta-buttons",
                        children: [
                          c.jsx(Ye, {
                            variant: "primary",
                            size: "lg",
                            onClick: () =>
                              window.open(
                                "https://www.linkedin.com/in/mohamedahmedradwan/",
                                "_blank",
                              ),
                            ariaLabel:
                              "Connect with Mohamed Radwan on LinkedIn",
                            children: "Connect on LinkedIn",
                          }),
                          c.jsx(Ye, {
                            variant: "secondary",
                            size: "lg",
                            onClick: () => {
                              var u;
                              return (u = document.getElementById("contact")) ==
                                null
                                ? void 0
                                : u.scrollIntoView({ behavior: "smooth" });
                            },
                            ariaLabel:
                              "Contact Mohamed through the contact form",
                            children: "Get in Touch",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  iv = [
    { text: "Global network access", icon: c.jsx(B1, {}) },
    { text: "Exclusive knowledge sessions", icon: c.jsx(gs, {}) },
    { text: "Mentorship from industry leaders", icon: c.jsx(ws, {}) },
    {
      text: "Project collaboration on real-world scenarios",
      icon: c.jsx(wf, {}),
    },
    { text: "Career acceleration and support", icon: c.jsx(K1, {}) },
    { text: "Supportive community for growth", icon: c.jsx(yf, {}) },
    { text: "Organized knowledge base (GitHub-based)", icon: c.jsx(Jr, {}) },
    {
      text: "Dynamic communication channels (Teams-based)",
      icon: c.jsx(mf, {}),
    },
  ],
  ov = () =>
    c.jsx("section", {
      id: "benefits",
      className: "benefits-section",
      children: c.jsxs("div", {
        className: "benefits-container",
        children: [
          "        ",
          c.jsx("h2", {
            className: "benefits-title",
            children: "Unlock Your Potential with Elmentor Program",
          }),
          c.jsx("p", {
            className: "benefits-subtitle",
            children:
              "Joining Elmentor Program offers a multitude of advantages designed to foster your professional and personal growth in the tech world.",
          }),
          c.jsx("div", {
            className: "benefits-grid",
            children: iv.map((l, o) =>
              c.jsxs(
                "div",
                {
                  className: "benefit-card",
                  children: [
                    c.jsx("div", {
                      className: "benefit-icon-container",
                      children: c.jsx("span", {
                        className: "benefit-icon",
                        "aria-hidden": "true",
                        children: l.icon,
                      }),
                    }),
                    c.jsx("h3", {
                      className: "benefit-text",
                      children: l.text,
                    }),
                  ],
                },
                o,
              ),
            ),
          }),
          c.jsxs("div", {
            className: "benefits-cta",
            children: [
              c.jsx("h3", {
                className: "benefits-cta-title",
                children: "Ready to Experience These Benefits?",
              }),
              "          ",
              c.jsx("p", {
                className: "benefits-cta-text",
                children:
                  "Join thousands of professionals who have accelerated their careers with Elmentor Program.",
              }),
              c.jsxs("div", {
                className: "benefits-cta-buttons",
                children: [
                  c.jsx(Ye, {
                    variant: "primary",
                    size: "lg",
                    onClick: () => {
                      var l;
                      return (l = document.getElementById("contact")) == null
                        ? void 0
                        : l.scrollIntoView({ behavior: "smooth" });
                    },
                    ariaLabel: "Start your journey with Elmentor Program",
                    icon: c.jsx(X1, {}),
                    iconPosition: "right",
                    children: "Start Your Journey",
                  }),
                  c.jsx(Ye, {
                    variant: "ghost",
                    size: "lg",
                    onClick: () => {
                      var l;
                      return (l = document.getElementById("activities")) == null
                        ? void 0
                        : l.scrollIntoView({ behavior: "smooth" });
                    },
                    ariaLabel: "Explore our activities",
                    icon: c.jsx(vf, {}),
                    iconPosition: "right",
                    children: "Explore Activities",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  av = () =>
    c.jsx("section", {
      id: "intro-video",
      className: "intro-video-section",
      "aria-labelledby": "video-title",
      children: c.jsxs("div", {
        className: "intro-video-container",
        children: [
          c.jsx("h2", {
            id: "video-title",
            className: "intro-video-title",
            children: "Discover DevOps Visions: Watch Our Introduction",
          }),
          c.jsx("p", {
            className: "intro-video-subtitle",
            children:
              "Get a quick overview of the DevOps Visions Program and learn how it can help you achieve your career goals.",
          }),
          c.jsx("div", {
            className: "video-responsive-wrapper",
            children: c.jsx("iframe", {
              src: "https://www.youtube.com/embed/hZ2oxrJg2Cc?start=5&autoplay=0&rel=0",
              title:
                "What is the DevOps Visions Program and How Can It Help You?",
              frameBorder: "0",
              allow:
                "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
              allowFullScreen: !0,
              loading: "lazy",
              "aria-describedby": "video-description",
            }),
          }),
          c.jsx("p", {
            id: "video-description",
            className: "video-description",
            children:
              "This introductory video provides an overview of the DevOps Visions Program, explaining how our mentorship approach can accelerate your professional development in the tech industry.",
          }),
          c.jsxs("div", {
            className: "video-cta-section",
            children: [
              c.jsx("h3", {
                className: "video-cta-title",
                children: "Ready to Start Your Journey?",
              }),
              c.jsx("p", {
                className: "video-cta-text",
                children:
                  "After watching our introduction, take the next step and join our community of learners and mentors.",
              }),
              c.jsxs("div", {
                className: "video-cta-buttons",
                children: [
                  c.jsx(Ye, {
                    variant: "primary",
                    size: "lg",
                    onClick: () => {
                      var d;
                      return (d = document.getElementById("contact")) == null
                        ? void 0
                        : d.scrollIntoView({ behavior: "smooth" });
                    },
                    ariaLabel:
                      "Join the DevOps Visions Program - Go to contact form",
                    children: "Join the Program",
                  }),
                  c.jsx(Ye, {
                    variant: "secondary",
                    size: "lg",
                    onClick: () => {
                      var d;
                      return (d = document.getElementById("activities")) == null
                        ? void 0
                        : d.scrollIntoView({ behavior: "smooth" });
                    },
                    ariaLabel: "Learn more about our activities",
                    children: "Explore Activities",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  sv = () => {
    const [l, o] = P.useState([]),
      [a, d] = P.useState(!0),
      [u, h] = P.useState(null),
      [p, v] = P.useState("all"),
      m = [
        {
          id: 1,
          title: "GitHub Copilot Workspace From Idea to Implementation",
          summary:
            "A session demonstrating how to use GitHub Copilot to implement ideas efficiently, with real use cases and practical examples.",
          date: "2025-03-15",
          type: "event",
          source: "Elmentor Program",
          link: "https://youtu.be/qFW-G2KH5Nw?si=UyQqk3FJjlM9wIzO",
          year: "2025",
        },
        {
          id: 2,
          title: "Deploying Q2A & WordPress on Azure VM: Hands-On Session",
          summary:
            "Practical session on deploying Question2Answer and WordPress platforms on Microsoft Azure Virtual Machines.",
          date: "2025-02-20",
          type: "technical",
          source: "DevOps Visions Public Community",
          link: "https://youtu.be/GGy0mtGQapU?si=zQIEn2RXDIi7Sz2j",
          year: "2025",
        },
        {
          id: 3,
          title: "Secret to Success with Sandra Kiel & Waddah Azhary",
          summary:
            "Insights on achieving success in the tech industry from Sandra Kiel and Waddah Azhary, with practical advice and career guidance.",
          date: "2024-11-23",
          type: "career",
          source: "Elmentor Program",
          link: "https://youtu.be/0AZB63DZCcg?si=en-HldnSP5lz03U3",
          year: "2024",
        },
        {
          id: 4,
          title: "A Brief Overview of The Mentor Community 2024",
          summary:
            "Waddah Azhary provides a comprehensive overview of The Elmentor Program's mission, structure, and benefits.",
          date: "2024-05-12",
          type: "community",
          source: "Elmentor Program",
          link: "https://www.youtube.com/watch?v=zGqUFocNzd4",
          year: "2024",
        },
        {
          id: 5,
          title: "Observability & AIOps at Scale with Dynatrace",
          summary:
            "Technical session discussing how to implement observability and AIOps practices at enterprise scale using Dynatrace.",
          date: "2023-09-05",
          type: "technical",
          source: "DevOps Visions Public Community",
          link: "https://www.youtube.com/watch?v=YHSX5_vLR8Q",
          year: "2023",
        },
        {
          id: 6,
          title: "GitHub - DevOps All You Need to Know",
          summary:
            "Comprehensive overview of GitHub's DevOps capabilities and integration points for modern development workflows.",
          date: "2023-05-20",
          type: "event",
          source: "DevOps Visions Public Community",
          link: "https://www.youtube.com/watch?v=nD8t6LVBTdE",
          year: "2023",
        },
      ];
    P.useEffect(() => {
      (() => {
        d(!0),
          setTimeout(() => {
            o(m), d(!1);
          }, 1e3);
      })();
    }, []);
    const g = [...new Set(m.map((L) => L.year))].sort((L, T) =>
        T.localeCompare(L),
      ),
      E = p === "all" ? l : l.filter((L) => L.year === p),
      M = (L) => {
        switch (L) {
          case "announcement":
            return "📢";
          case "project":
            return "🚀";
          case "event":
            return "📅";
          case "community":
            return "👥";
          case "technical":
            return "💻";
          case "career":
            return "📈";
          default:
            return "📰";
        }
      },
      C = (L) =>
        new Date(L).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
    return a
      ? c.jsx("section", {
          id: "news",
          className: "news-section",
          "aria-labelledby": "news-title",
          children: c.jsxs("div", {
            className: "news-container",
            children: [
              c.jsx("h2", {
                id: "news-title",
                className: "news-section-title",
                children: "Latest News & Updates",
              }),
              c.jsxs("div", {
                className: "news-loading",
                children: [
                  c.jsx("div", { className: "loading-spinner" }),
                  c.jsx("p", { children: "Loading latest updates..." }),
                ],
              }),
            ],
          }),
        })
      : u
        ? c.jsx("section", {
            id: "news",
            className: "news-section",
            "aria-labelledby": "news-title",
            children: c.jsxs("div", {
              className: "news-container",
              children: [
                c.jsx("h2", {
                  id: "news-title",
                  className: "news-section-title",
                  children: "Latest News & Updates",
                }),
                c.jsx("div", {
                  className: "news-error",
                  children: c.jsx("p", {
                    children:
                      "Unable to load news updates. Please try again later.",
                  }),
                }),
              ],
            }),
          })
        : c.jsx("section", {
            id: "news",
            className: "news-section",
            "aria-labelledby": "news-title",
            children: c.jsxs("div", {
              className: "news-container",
              children: [
                c.jsx("h2", {
                  id: "news-title",
                  className: "news-section-title",
                  children: "Latest News & Updates",
                }),
                c.jsx("p", {
                  className: "news-subtitle",
                  children:
                    "Stay informed about our latest initiatives, community projects, and upcoming events.",
                }),
                c.jsxs("div", {
                  className: "news-archive-selector",
                  children: [
                    c.jsx("button", {
                      className: `archive-year-btn ${p === "all" ? "active" : ""}`,
                      onClick: () => v("all"),
                      children: "All",
                    }),
                    g.map((L) =>
                      c.jsx(
                        "button",
                        {
                          className: `archive-year-btn ${p === L ? "active" : ""}`,
                          onClick: () => v(L),
                          children: L,
                        },
                        L,
                      ),
                    ),
                  ],
                }),
                c.jsx("div", {
                  className: "news-grid",
                  children: E.map((L) =>
                    c.jsxs(
                      "article",
                      {
                        className: "news-card",
                        children: [
                          c.jsxs("div", {
                            className: "news-header",
                            children: [
                              c.jsx("span", {
                                className: "news-type-icon",
                                "aria-label": `${L.type} news`,
                                children: M(L.type),
                              }),
                              c.jsxs("div", {
                                className: "news-meta",
                                children: [
                                  c.jsx("span", {
                                    className: "news-date",
                                    children: C(L.date),
                                  }),
                                  c.jsx("span", {
                                    className: "news-source",
                                    children: L.source,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          c.jsx("h3", {
                            className: "news-title",
                            children: L.title,
                          }),
                          c.jsx("p", {
                            className: "news-summary",
                            children: L.summary,
                          }),
                          c.jsx("div", {
                            className: "news-footer",
                            children: c.jsx(Ye, {
                              variant: "secondary",
                              size: "sm",
                              onClick: () => {
                                var T;
                                L.link && L.link.startsWith("#")
                                  ? (T = document.querySelector(L.link)) ==
                                      null ||
                                    T.scrollIntoView({ behavior: "smooth" })
                                  : L.link &&
                                    window.open(
                                      L.link,
                                      "_blank",
                                      "noopener,noreferrer",
                                    );
                              },
                              ariaLabel: `Read more about ${L.title}`,
                              children: "Read More",
                            }),
                          }),
                        ],
                      },
                      L.id,
                    ),
                  ),
                }),
                E.length === 0 &&
                  c.jsx("div", {
                    className: "no-news-message",
                    children: c.jsx("p", {
                      children: "No updates available for the selected year.",
                    }),
                  }),
                c.jsxs("div", {
                  className: "news-cta",
                  children: [
                    "          ",
                    c.jsx(Ye, {
                      variant: "primary",
                      size: "lg",
                      onClick: () =>
                        window.open(
                          "https://github.com/ElmentorProgram",
                          "_blank",
                          "noopener,noreferrer",
                        ),
                      ariaLabel: "Follow our GitHub for more updates",
                      children: "Follow on GitHub",
                    }),
                    c.jsx(Ye, {
                      variant: "secondary",
                      size: "lg",
                      onClick: () => {
                        var L;
                        return (L = document.getElementById("contact")) == null
                          ? void 0
                          : L.scrollIntoView({ behavior: "smooth" });
                      },
                      ariaLabel: "Subscribe to newsletter",
                      children: "Subscribe to Updates",
                    }),
                  ],
                }),
              ],
            }),
          });
  },
  uv = () =>
    c.jsx("section", {
      id: "contact",
      className: "contact-section",
      children: c.jsxs("div", {
        className: "contact-container",
        children: [
          c.jsx("h2", {
            className: "contact-section-title",
            children: "Get in Touch",
          }),
          "        ",
          c.jsx("p", {
            className: "contact-section-subtitle",
            children:
              "Ready to connect with the Elmentor Program? We'd love to hear from you!",
          }),
          c.jsxs("div", {
            className: "contact-info-box",
            children: [
              c.jsx("div", {
                className: "contact-info-icon",
                children: c.jsx(G1, {}),
              }),
              c.jsx("h3", {
                className: "contact-info-title",
                children: "Contact Form Coming Soon!",
              }),
              c.jsx("p", {
                className: "contact-info-text",
                children:
                  "We're working on implementing a contact form. For now, the best way to reach us is through Facebook.",
              }),
              c.jsx("a", {
                href: "https://www.facebook.com/mohamedradwan.me",
                className: "messenger-contact-button",
                target: "_blank",
                rel: "noopener noreferrer",
                children: "Message Eng Mohamed Radwan",
              }),
              c.jsx("p", {
                className: "contact-small-text",
                children:
                  "directly for questions, feedback, or to join our community.",
              }),
            ],
          }),
        ],
      }),
    }),
  xf =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2YwZjBmMCIvPgogIDx0ZXh0IHg9IjE1MCIgeT0iMTUwIiBmaWxsPSIjMTIzNDU2IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMzYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPkVsIE1lbnRvciBMb2dvPC90ZXh0Pgo8L3N2Zz4K",
  cv = [
    {
      name: "DevOps Visions Community Blog",
      url: "https://devopsvisions.github.io/",
      icon: c.jsx(gf, {}),
      category: "DevOps Visions Public Community",
    },
    {
      name: "Elmentor Program GitHub Organization",
      url: "https://github.com/ElmentorProgram",
      icon: c.jsx(Jr, {}),
      category: "DevOps Visions Public Community",
    },
    {
      name: "DevOps Visions Community YouTube",
      url: "https://www.youtube.com/@MRadwanArabic",
      icon: c.jsx(pf, {}),
      category: "DevOps Visions Public Community",
    },
    {
      name: "DevOps Visions Facebook Page",
      url: "https://www.facebook.com/DevOpsVisions",
      icon: c.jsx(F1, {}),
      category: "DevOps Visions Public Community",
    },
  ],
  dv = [
    {
      name: "Elmentor Program GitHub",
      url: "https://github.com/ElmentorProgram",
      icon: c.jsx(Jr, {}),
      logo: xf,
      category: "Broader DevOps Visions Ecosystem",
    },
  ],
  fv = () =>
    c.jsx("section", {
      id: "community-presence",
      className: "community-presence-section",
      "aria-labelledby": "community-title",
      children: c.jsxs("div", {
        className: "community-presence-container",
        children: [
          c.jsx("h2", {
            id: "community-title",
            className: "community-presence-title",
            children: "Stay Connected & Engage",
          }),
          c.jsx("p", {
            className: "community-presence-subtitle",
            children:
              "Join our vibrant community across various platforms and be part of the conversation.",
          }),
          "        ",
          c.jsxs("div", {
            className: "channels-category",
            children: [
              c.jsx("h3", {
                className: "category-title",
                children: "DevOps Visions Public Community",
              }),
              c.jsx("div", {
                className: "links-grid",
                role: "list",
                "aria-label":
                  "DevOps Visions Public Community social media channels",
                children: cv.map((l) =>
                  c.jsxs(
                    "a",
                    {
                      href: l.url,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "platform-link-card",
                      role: "listitem",
                      "aria-label": `Visit ${l.name} - opens in new tab`,
                      children: [
                        c.jsx("div", {
                          className: "platform-icon",
                          "aria-hidden": "true",
                          children: l.icon,
                        }),
                        c.jsx("span", {
                          className: "platform-name",
                          children: l.name,
                        }),
                      ],
                    },
                    l.name,
                  ),
                ),
              }),
            ],
          }),
          c.jsxs("div", {
            className: "channels-category",
            children: [
              c.jsx("h3", {
                className: "category-title",
                children: "Broader DevOps Visions Ecosystem",
              }),
              c.jsx("div", {
                className: "links-grid ecosystem-grid",
                role: "list",
                "aria-label": "DevOps Visions ecosystem links",
                children: dv.map((l) =>
                  c.jsxs(
                    "a",
                    {
                      href: l.url,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "platform-link-card ecosystem-card",
                      role: "listitem",
                      "aria-label": `Visit ${l.name} - opens in new tab`,
                      children: [
                        l.logo &&
                          c.jsx("img", {
                            src: l.logo,
                            alt: `${l.name} Logo`,
                            className: "ecosystem-logo",
                          }),
                        c.jsx("div", {
                          className: "platform-icon",
                          "aria-hidden": "true",
                          children: l.icon,
                        }),
                        c.jsx("span", {
                          className: "platform-name",
                          children: l.name,
                        }),
                      ],
                    },
                    l.name,
                  ),
                ),
              }),
            ],
          }),
          c.jsxs("div", {
            className: "community-cta-section",
            children: [
              c.jsx("h3", {
                className: "community-cta-title",
                children: "Ready to Join Our Community?",
              }),
              c.jsx("p", {
                className: "community-cta-text",
                children:
                  "Connect with like-minded professionals, share knowledge, and grow together in our supportive community.",
              }),
              c.jsxs("div", {
                className: "community-cta-buttons",
                children: [
                  "            ",
                  c.jsx(Ye, {
                    variant: "primary",
                    size: "lg",
                    onClick: () =>
                      window.open(
                        "https://github.com/ElmentorProgram",
                        "_blank",
                      ),
                    "aria-label":
                      "Join our GitHub community - opens in new tab",
                    children: "Join GitHub Community",
                  }),
                  c.jsx(Ye, {
                    variant: "secondary",
                    size: "lg",
                    onClick: () => {
                      var l;
                      return (l = document.getElementById("contact")) == null
                        ? void 0
                        : l.scrollIntoView({ behavior: "smooth" });
                    },
                    "aria-label":
                      "Contact us to learn more about the community",
                    children: "Get Started",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  hv = [
    {
      id: "japan2022",
      title: "Japan/Tokyo Nov 2022",
      location: "Tokyo, Japan",
      date: "November 2022",
      image:
        "https://raw.githubusercontent.com/MohamedRadwan-DevOps/devops-step-by-step/main/source/images/mics/jap-nov-23.jpg",
    },
    {
      id: "egypt2023",
      title: "Egypt/Cairo Feb 2023",
      location: "Cairo, Egypt",
      date: "February 2023",
      image:
        "https://raw.githubusercontent.com/MohamedRadwan-DevOps/devops-step-by-step/main/source/images/mics/eg-2-23.jpg",
    },
    {
      id: "usa2023",
      title: "USA/Seattle April 2023",
      location: "Seattle, USA",
      date: "April 2023",
      image:
        "https://raw.githubusercontent.com/MohamedRadwan-DevOps/devops-step-by-step/main/source/images/mics/usa-apr-23.jpg",
    },
  ],
  mv = () =>
    c.jsx("section", {
      className: "community-gathering-section",
      id: "gatherings",
      children: c.jsxs("div", {
        className: "container",
        children: [
          c.jsx("h2", {
            className: "section-title",
            children: "Community Gathering",
          }),
          c.jsx("p", {
            className: "section-description",
            children:
              "Join our global community of DevOps professionals and mentoring enthusiasts. Our gatherings bring together passionate individuals from around the world to share knowledge, network, and grow together.",
          }),
          c.jsx("div", {
            className: "gathering-cards",
            children: hv.map((l) =>
              c.jsxs(
                "div",
                {
                  className: "gathering-card",
                  children: [
                    c.jsx("div", {
                      className: "gathering-image-container",
                      children: c.jsx("img", {
                        src: l.image,
                        alt: `${l.title} community gathering`,
                        className: "gathering-image",
                      }),
                    }),
                    c.jsxs("div", {
                      className: "gathering-content",
                      children: [
                        c.jsx("h3", {
                          className: "gathering-title",
                          children: l.title,
                        }),
                        c.jsxs("div", {
                          className: "gathering-details",
                          children: [
                            c.jsxs("p", {
                              className: "gathering-location",
                              children: [
                                c.jsx(Q1, { className: "gathering-icon" }),
                                c.jsx("span", { children: l.location }),
                              ],
                            }),
                            c.jsxs("p", {
                              className: "gathering-date",
                              children: [
                                c.jsx(V1, { className: "gathering-icon" }),
                                c.jsx("span", { children: l.date }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                l.id,
              ),
            ),
          }),
          c.jsxs("div", {
            className: "gathering-join-cta",
            children: [
              "          ",
              c.jsx("p", {
                children:
                  "Want to join our next gathering or organize one in your city?",
              }),
              c.jsx("a", {
                href: "https://www.facebook.com/mradwandevops",
                className: "messenger-button",
                target: "_blank",
                rel: "noopener noreferrer",
                children: "Message Eng Mohamed Radwan on Facebook",
              }),
            ],
          }),
        ],
      }),
    }),
  Sf = () => {
    const l = new Date().getFullYear();
    return c.jsx("footer", {
      className: "elmentor-footer",
      role: "contentinfo",
      children: c.jsxs("div", {
        className: "footer-container",
        children: [
          c.jsxs("div", {
            className: "footer-content",
            children: [
              "          ",
              c.jsxs("div", {
                className: "footer-logo-attribution",
                children: [
                  "            ",
                  c.jsx("img", {
                    src: xf,
                    alt: "Elmentor Program Logo",
                    className: "footer-devops-logo",
                  }),
                  c.jsx("p", {
                    className: "footer-attribution",
                    children:
                      "Crafted with ❤️ and code by the Elmentor Program, operated by DevOps Visions, supercharged by GitHub Copilot. Empowering growth through mentorship.",
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "footer-navigation",
                children: [
                  c.jsxs("div", {
                    className: "footer-links",
                    children: [
                      c.jsx("h5", {
                        className: "footer-links-title",
                        children: "EXPLORE",
                      }),
                      c.jsxs("nav", {
                        "aria-label": "Footer navigation",
                        children: [
                          c.jsx("a", {
                            href: "#hero",
                            className: "footer-link",
                            children: "Home",
                          }),
                          c.jsx("a", {
                            href: "#about",
                            className: "footer-link",
                            children: "About",
                          }),
                          c.jsx("a", {
                            href: "#activities",
                            className: "footer-link",
                            children: "Activities",
                          }),
                          c.jsx("a", {
                            href: "#benefits",
                            className: "footer-link",
                            children: "Benefits",
                          }),
                          c.jsx("a", {
                            href: "#founder",
                            className: "footer-link",
                            children: "Founder",
                          }),
                          c.jsx("a", {
                            href: "#contact",
                            className: "footer-link",
                            children: "Contact",
                          }),
                        ],
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    className: "footer-legal",
                    children: [
                      c.jsx("h5", {
                        className: "footer-links-title",
                        children: "LEGAL",
                      }),
                      c.jsxs("nav", {
                        "aria-label": "Legal links",
                        children: [
                          c.jsx("a", {
                            href: "#code-of-conduct",
                            className: "footer-link",
                            children: "Code of Conduct",
                          }),
                          c.jsx("a", {
                            href: "#privacy",
                            className: "footer-link",
                            children: "Privacy Policy",
                          }),
                          c.jsx("a", {
                            href: "#terms",
                            className: "footer-link",
                            children: "Terms of Service",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "footer-cta",
                children: [
                  c.jsx("h5", {
                    className: "footer-cta-title",
                    children: "Ready to Get Started?",
                  }),
                  c.jsx("p", {
                    className: "footer-cta-text",
                    children:
                      "Join our community and start your mentorship journey today.",
                  }),
                  "            ",
                  c.jsx(Ye, {
                    variant: "secondary",
                    size: "base",
                    onClick: () => {
                      var o;
                      return (o = document.getElementById("contact")) == null
                        ? void 0
                        : o.scrollIntoView({ behavior: "smooth" });
                    },
                    "aria-label":
                      "Join the El Mentor Program - scroll to contact form",
                    children: "Join Now",
                  }),
                ],
              }),
            ],
          }),
          c.jsxs("div", {
            className: "footer-copyright",
            children: [
              "          ",
              c.jsxs("p", {
                children: ["© ", l, " Elmentor Program. All rights reserved."],
              }),
              c.jsx("p", {
                className: "footer-built-with",
                children:
                  "Built with React, enhanced with GitHub Copilot, and deployed with love.",
              }),
            ],
          }),
        ],
      }),
    });
  };
function pv() {
  return (
    P.useEffect(() => {
      C1(), R1();
    }, []),
    c.jsxs(c.Fragment, {
      children: [
        c.jsx(E1, {}),
        c.jsx("a", {
          href: "#main-content",
          className: "skip-link",
          children: "Skip to main content",
        }),
        c.jsx(S1, {}),
        c.jsx(df, {}),
        c.jsxs("main", {
          id: "main-content",
          className: "main-content",
          children: [
            c.jsx(L1, {}),
            c.jsx(Z1, {}),
            c.jsx(ev, {}),
            c.jsx(nv, {}),
            c.jsx(lv, {}),
            c.jsx(ov, {}),
            "        ",
            c.jsx(av, {}),
            c.jsx(sv, {}),
            c.jsx(mv, {}),
            c.jsx(uv, {}),
            c.jsx(fv, {}),
          ],
        }),
        c.jsx(Sf, {}),
      ],
    })
  );
}
const vv = () =>
    c.jsx("section", {
      id: "arabic-version",
      className: "arabic-version-section",
      "aria-labelledby": "arabic-version-title",
      children: c.jsxs("div", {
        className: "arabic-version-container",
        children: [
          c.jsx("h2", {
            id: "arabic-version-title",
            className: "arabic-version-title",
            children: "مرحبًا بك في برنامج المنتور",
          }),
          c.jsx("p", {
            className: "arabic-version-subtitle",
            dir: "rtl",
            children:
              "النسخة العربية قيد الإنشاء حاليًا، ستنطلق النسخة الكاملة قريباً.",
          }),
          c.jsx("div", {
            className: "arabic-version-coming-soon",
            children: c.jsxs("div", {
              className: "coming-soon-content",
              children: [
                c.jsx("h3", {
                  className: "coming-soon-title",
                  children: "🚀 قريباً",
                }),
                c.jsx("p", {
                  className: "coming-soon-text",
                  dir: "rtl",
                  children:
                    "نحن نعمل على تطوير النسخة العربية الكاملة من موقع برنامج المنتور. سيتم إطلاقها قريبًا بكافة المزايا والمحتوى المتوفر في النسخة الإنجليزية، مع إضافة محتوى مخصص للناطقين بالعربية.",
                }),
                c.jsx("div", {
                  className: "youtube-embed-container",
                  children: c.jsx("iframe", {
                    title: "فيديو تعريفي لبرنامج المنتور",
                    width: "560",
                    height: "315",
                    src: "https://www.youtube.com/embed/hZ2oxrJg2Cc",
                    frameBorder: "0",
                    allow:
                      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                    allowFullScreen: !0,
                    loading: "lazy",
                  }),
                }),
                c.jsxs("div", {
                  className: "arabic-features-preview",
                  children: [
                    c.jsx("h3", {
                      className: "arabic-features-title",
                      children: "ما الذي يمكنك توقعه",
                    }),
                    c.jsxs("ul", {
                      className: "arabic-features-list",
                      children: [
                        c.jsx("li", { children: "مقدمة عن برنامج المنتور" }),
                        c.jsx("li", {
                          children: "معلومات عن الفعاليات والأنشطة",
                        }),
                        c.jsx("li", {
                          children: "نظام الدوائر المعرفية لبرنامج المنتور",
                        }),
                        c.jsx("li", { children: "أخبار البرنامج" }),
                        c.jsx("li", { children: "فرص التواصل والمشاركة" }),
                      ],
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className: "arabic-version-cta",
                  children: [
                    "              ",
                    c.jsx(Ye, {
                      variant: "primary",
                      size: "lg",
                      onClick: () => (window.location.href = "#/"),
                      ariaLabel: "الإنتقال للنسخة الإنجليزية",
                      children: "العودة إلى النسخة الإنجليزية",
                    }),
                    c.jsx(Ye, {
                      variant: "secondary",
                      size: "lg",
                      onClick: () => {
                        var l;
                        return (l = document.getElementById("contact")) == null
                          ? void 0
                          : l.scrollIntoView({ behavior: "smooth" });
                      },
                      ariaLabel: "تواصل معنا لمزيد من المعلومات",
                      children: "تواصل معنا",
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    }),
  gv = () => (
    wn.useEffect(
      () => (
        (document.documentElement.dir = "rtl"),
        (document.documentElement.lang = "ar"),
        () => {
          (document.documentElement.dir = "ltr"),
            (document.documentElement.lang = "en");
        }
      ),
      [],
    ),
    c.jsxs("div", {
      className: "arabic-app",
      children: [
        c.jsx(df, {}),
        c.jsx("main", { className: "main-content", children: c.jsx(vv, {}) }),
        c.jsx(Sf, {}),
      ],
    })
  ),
  fs = () =>
    c.jsxs("div", {
      style: {
        padding: "2rem",
        textAlign: "center",
        fontFamily: "system-ui, sans-serif",
        maxWidth: "800px",
        margin: "0 auto",
      },
      children: [
        c.jsx("h1", {
          style: { color: "#0078d4" },
          children: "Oops! Page Not Found",
        }),
        c.jsx("p", {
          style: { fontSize: "1.2rem", marginBottom: "2rem" },
          children:
            "The page you're looking for doesn't exist or has been moved.",
        }),
        c.jsx("a", {
          href: "#/",
          style: {
            backgroundColor: "#0078d4",
            color: "white",
            padding: "0.75rem 1.5rem",
            borderRadius: "4px",
            textDecoration: "none",
            fontWeight: "bold",
          },
          children: "Return to Home Page",
        }),
      ],
    }),
  yv = o1([
    { path: "/", element: c.jsx(pv, {}), errorElement: c.jsx(fs, {}) },
    { path: "/arabic", element: c.jsx(gv, {}), errorElement: c.jsx(fs, {}) },
    { path: "*", element: c.jsx(fs, {}) },
  ]);
fm.createRoot(document.getElementById("root")).render(
  c.jsx(wn.StrictMode, { children: c.jsx(w1, { router: yv }) }),
);
//# sourceMappingURL=index-16-5reEe.js.map
