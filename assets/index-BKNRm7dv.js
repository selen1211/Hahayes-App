function Tg(t, e) {
  for (var n = 0; n < e.length; n++) {
    const r = e[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in t)) {
          const s = Object.getOwnPropertyDescriptor(r, i);
          s &&
            Object.defineProperty(
              t,
              i,
              s.get ? s : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(t, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
function kg(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
var If = { exports: {} },
  ho = {},
  xf = { exports: {} },
  b = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ni = Symbol.for("react.element"),
  Ng = Symbol.for("react.portal"),
  Ag = Symbol.for("react.fragment"),
  Rg = Symbol.for("react.strict_mode"),
  Pg = Symbol.for("react.profiler"),
  Og = Symbol.for("react.provider"),
  Dg = Symbol.for("react.context"),
  Lg = Symbol.for("react.forward_ref"),
  Mg = Symbol.for("react.suspense"),
  Fg = Symbol.for("react.memo"),
  bg = Symbol.for("react.lazy"),
  pc = Symbol.iterator;
function zg(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (pc && t[pc]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var Tf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  kf = Object.assign,
  Nf = {};
function mr(t, e, n) {
  (this.props = t),
    (this.context = e),
    (this.refs = Nf),
    (this.updater = n || Tf);
}
mr.prototype.isReactComponent = {};
mr.prototype.setState = function (t, e) {
  if (typeof t != "object" && typeof t != "function" && t != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, t, e, "setState");
};
mr.prototype.forceUpdate = function (t) {
  this.updater.enqueueForceUpdate(this, t, "forceUpdate");
};
function Af() {}
Af.prototype = mr.prototype;
function ja(t, e, n) {
  (this.props = t),
    (this.context = e),
    (this.refs = Nf),
    (this.updater = n || Tf);
}
var Ba = (ja.prototype = new Af());
Ba.constructor = ja;
kf(Ba, mr.prototype);
Ba.isPureReactComponent = !0;
var mc = Array.isArray,
  Rf = Object.prototype.hasOwnProperty,
  Wa = { current: null },
  Pf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Of(t, e, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (e != null)
    for (r in (e.ref !== void 0 && (o = e.ref),
    e.key !== void 0 && (s = "" + e.key),
    e))
      Rf.call(e, r) && !Pf.hasOwnProperty(r) && (i[r] = e[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (t && t.defaultProps)
    for (r in ((l = t.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: Ni,
    type: t,
    key: s,
    ref: o,
    props: i,
    _owner: Wa.current,
  };
}
function Ug(t, e) {
  return {
    $$typeof: Ni,
    type: t.type,
    key: e,
    ref: t.ref,
    props: t.props,
    _owner: t._owner,
  };
}
function Va(t) {
  return typeof t == "object" && t !== null && t.$$typeof === Ni;
}
function jg(t) {
  var e = { "=": "=0", ":": "=2" };
  return (
    "$" +
    t.replace(/[=:]/g, function (n) {
      return e[n];
    })
  );
}
var gc = /\/+/g;
function Wo(t, e) {
  return typeof t == "object" && t !== null && t.key != null
    ? jg("" + t.key)
    : e.toString(36);
}
function cs(t, e, n, r, i) {
  var s = typeof t;
  (s === "undefined" || s === "boolean") && (t = null);
  var o = !1;
  if (t === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (t.$$typeof) {
          case Ni:
          case Ng:
            o = !0;
        }
    }
  if (o)
    return (
      (o = t),
      (i = i(o)),
      (t = r === "" ? "." + Wo(o, 0) : r),
      mc(i)
        ? ((n = ""),
          t != null && (n = t.replace(gc, "$&/") + "/"),
          cs(i, e, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Va(i) &&
            (i = Ug(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(gc, "$&/") + "/") +
                t
            )),
          e.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), mc(t)))
    for (var l = 0; l < t.length; l++) {
      s = t[l];
      var a = r + Wo(s, l);
      o += cs(s, e, n, a, i);
    }
  else if (((a = zg(t)), typeof a == "function"))
    for (t = a.call(t), l = 0; !(s = t.next()).done; )
      (s = s.value), (a = r + Wo(s, l++)), (o += cs(s, e, n, a, i));
  else if (s === "object")
    throw (
      ((e = String(t)),
      Error(
        "Objects are not valid as a React child (found: " +
          (e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function Gi(t, e, n) {
  if (t == null) return t;
  var r = [],
    i = 0;
  return (
    cs(t, r, "", "", function (s) {
      return e.call(n, s, i++);
    }),
    r
  );
}
function Bg(t) {
  if (t._status === -1) {
    var e = t._result;
    (e = e()),
      e.then(
        function (n) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 1), (t._result = n));
        },
        function (n) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 2), (t._result = n));
        }
      ),
      t._status === -1 && ((t._status = 0), (t._result = e));
  }
  if (t._status === 1) return t._result.default;
  throw t._result;
}
var Ne = { current: null },
  ds = { transition: null },
  Wg = {
    ReactCurrentDispatcher: Ne,
    ReactCurrentBatchConfig: ds,
    ReactCurrentOwner: Wa,
  };
function Df() {
  throw Error("act(...) is not supported in production builds of React.");
}
b.Children = {
  map: Gi,
  forEach: function (t, e, n) {
    Gi(
      t,
      function () {
        e.apply(this, arguments);
      },
      n
    );
  },
  count: function (t) {
    var e = 0;
    return (
      Gi(t, function () {
        e++;
      }),
      e
    );
  },
  toArray: function (t) {
    return (
      Gi(t, function (e) {
        return e;
      }) || []
    );
  },
  only: function (t) {
    if (!Va(t))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return t;
  },
};
b.Component = mr;
b.Fragment = Ag;
b.Profiler = Pg;
b.PureComponent = ja;
b.StrictMode = Rg;
b.Suspense = Mg;
b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wg;
b.act = Df;
b.cloneElement = function (t, e, n) {
  if (t == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        t +
        "."
    );
  var r = kf({}, t.props),
    i = t.key,
    s = t.ref,
    o = t._owner;
  if (e != null) {
    if (
      (e.ref !== void 0 && ((s = e.ref), (o = Wa.current)),
      e.key !== void 0 && (i = "" + e.key),
      t.type && t.type.defaultProps)
    )
      var l = t.type.defaultProps;
    for (a in e)
      Rf.call(e, a) &&
        !Pf.hasOwnProperty(a) &&
        (r[a] = e[a] === void 0 && l !== void 0 ? l[a] : e[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Ni, type: t.type, key: i, ref: s, props: r, _owner: o };
};
b.createContext = function (t) {
  return (
    (t = {
      $$typeof: Dg,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (t.Provider = { $$typeof: Og, _context: t }),
    (t.Consumer = t)
  );
};
b.createElement = Of;
b.createFactory = function (t) {
  var e = Of.bind(null, t);
  return (e.type = t), e;
};
b.createRef = function () {
  return { current: null };
};
b.forwardRef = function (t) {
  return { $$typeof: Lg, render: t };
};
b.isValidElement = Va;
b.lazy = function (t) {
  return { $$typeof: bg, _payload: { _status: -1, _result: t }, _init: Bg };
};
b.memo = function (t, e) {
  return { $$typeof: Fg, type: t, compare: e === void 0 ? null : e };
};
b.startTransition = function (t) {
  var e = ds.transition;
  ds.transition = {};
  try {
    t();
  } finally {
    ds.transition = e;
  }
};
b.unstable_act = Df;
b.useCallback = function (t, e) {
  return Ne.current.useCallback(t, e);
};
b.useContext = function (t) {
  return Ne.current.useContext(t);
};
b.useDebugValue = function () {};
b.useDeferredValue = function (t) {
  return Ne.current.useDeferredValue(t);
};
b.useEffect = function (t, e) {
  return Ne.current.useEffect(t, e);
};
b.useId = function () {
  return Ne.current.useId();
};
b.useImperativeHandle = function (t, e, n) {
  return Ne.current.useImperativeHandle(t, e, n);
};
b.useInsertionEffect = function (t, e) {
  return Ne.current.useInsertionEffect(t, e);
};
b.useLayoutEffect = function (t, e) {
  return Ne.current.useLayoutEffect(t, e);
};
b.useMemo = function (t, e) {
  return Ne.current.useMemo(t, e);
};
b.useReducer = function (t, e, n) {
  return Ne.current.useReducer(t, e, n);
};
b.useRef = function (t) {
  return Ne.current.useRef(t);
};
b.useState = function (t) {
  return Ne.current.useState(t);
};
b.useSyncExternalStore = function (t, e, n) {
  return Ne.current.useSyncExternalStore(t, e, n);
};
b.useTransition = function () {
  return Ne.current.useTransition();
};
b.version = "18.3.1";
xf.exports = b;
var I = xf.exports;
const Ha = kg(I),
  Vg = Tg({ __proto__: null, default: Ha }, [I]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hg = I,
  Gg = Symbol.for("react.element"),
  Kg = Symbol.for("react.fragment"),
  Qg = Object.prototype.hasOwnProperty,
  $g = Hg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Yg = { key: !0, ref: !0, __self: !0, __source: !0 };
function Lf(t, e, n) {
  var r,
    i = {},
    s = null,
    o = null;
  n !== void 0 && (s = "" + n),
    e.key !== void 0 && (s = "" + e.key),
    e.ref !== void 0 && (o = e.ref);
  for (r in e) Qg.call(e, r) && !Yg.hasOwnProperty(r) && (i[r] = e[r]);
  if (t && t.defaultProps)
    for (r in ((e = t.defaultProps), e)) i[r] === void 0 && (i[r] = e[r]);
  return {
    $$typeof: Gg,
    type: t,
    key: s,
    ref: o,
    props: i,
    _owner: $g.current,
  };
}
ho.Fragment = Kg;
ho.jsx = Lf;
ho.jsxs = Lf;
If.exports = ho;
var x = If.exports,
  Tl = {},
  Mf = { exports: {} },
  We = {},
  Ff = { exports: {} },
  bf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (t) {
  function e(N, O) {
    var L = N.length;
    N.push(O);
    e: for (; 0 < L; ) {
      var ne = (L - 1) >>> 1,
        ce = N[ne];
      if (0 < i(ce, O)) (N[ne] = O), (N[L] = ce), (L = ne);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var O = N[0],
      L = N.pop();
    if (L !== O) {
      N[0] = L;
      e: for (var ne = 0, ce = N.length, Vi = ce >>> 1; ne < Vi; ) {
        var an = 2 * (ne + 1) - 1,
          Bo = N[an],
          un = an + 1,
          Hi = N[un];
        if (0 > i(Bo, L))
          un < ce && 0 > i(Hi, Bo)
            ? ((N[ne] = Hi), (N[un] = L), (ne = un))
            : ((N[ne] = Bo), (N[an] = L), (ne = an));
        else if (un < ce && 0 > i(Hi, L)) (N[ne] = Hi), (N[un] = L), (ne = un);
        else break e;
      }
    }
    return O;
  }
  function i(N, O) {
    var L = N.sortIndex - O.sortIndex;
    return L !== 0 ? L : N.id - O.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    t.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      l = o.now();
    t.unstable_now = function () {
      return o.now() - l;
    };
  }
  var a = [],
    u = [],
    d = 1,
    c = null,
    f = 3,
    g = !1,
    _ = !1,
    y = !1,
    C = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(N) {
    for (var O = n(u); O !== null; ) {
      if (O.callback === null) r(u);
      else if (O.startTime <= N)
        r(u), (O.sortIndex = O.expirationTime), e(a, O);
      else break;
      O = n(u);
    }
  }
  function v(N) {
    if (((y = !1), p(N), !_))
      if (n(a) !== null) (_ = !0), Uo(w);
      else {
        var O = n(u);
        O !== null && jo(v, O.startTime - N);
      }
  }
  function w(N, O) {
    (_ = !1), y && ((y = !1), m(R), (R = -1)), (g = !0);
    var L = f;
    try {
      for (
        p(O), c = n(a);
        c !== null && (!(c.expirationTime > O) || (N && !me()));

      ) {
        var ne = c.callback;
        if (typeof ne == "function") {
          (c.callback = null), (f = c.priorityLevel);
          var ce = ne(c.expirationTime <= O);
          (O = t.unstable_now()),
            typeof ce == "function" ? (c.callback = ce) : c === n(a) && r(a),
            p(O);
        } else r(a);
        c = n(a);
      }
      if (c !== null) var Vi = !0;
      else {
        var an = n(u);
        an !== null && jo(v, an.startTime - O), (Vi = !1);
      }
      return Vi;
    } finally {
      (c = null), (f = L), (g = !1);
    }
  }
  var T = !1,
    A = null,
    R = -1,
    K = 5,
    D = -1;
  function me() {
    return !(t.unstable_now() - D < K);
  }
  function ft() {
    if (A !== null) {
      var N = t.unstable_now();
      D = N;
      var O = !0;
      try {
        O = A(!0, N);
      } finally {
        O ? ln() : ((T = !1), (A = null));
      }
    } else T = !1;
  }
  var ln;
  if (typeof h == "function")
    ln = function () {
      h(ft);
    };
  else if (typeof MessageChannel < "u") {
    var ht = new MessageChannel(),
      xg = ht.port2;
    (ht.port1.onmessage = ft),
      (ln = function () {
        xg.postMessage(null);
      });
  } else
    ln = function () {
      C(ft, 0);
    };
  function Uo(N) {
    (A = N), T || ((T = !0), ln());
  }
  function jo(N, O) {
    R = C(function () {
      N(t.unstable_now());
    }, O);
  }
  (t.unstable_IdlePriority = 5),
    (t.unstable_ImmediatePriority = 1),
    (t.unstable_LowPriority = 4),
    (t.unstable_NormalPriority = 3),
    (t.unstable_Profiling = null),
    (t.unstable_UserBlockingPriority = 2),
    (t.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (t.unstable_continueExecution = function () {
      _ || g || ((_ = !0), Uo(w));
    }),
    (t.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (K = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (t.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (t.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (t.unstable_next = function (N) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = f;
      }
      var L = f;
      f = O;
      try {
        return N();
      } finally {
        f = L;
      }
    }),
    (t.unstable_pauseExecution = function () {}),
    (t.unstable_requestPaint = function () {}),
    (t.unstable_runWithPriority = function (N, O) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var L = f;
      f = N;
      try {
        return O();
      } finally {
        f = L;
      }
    }),
    (t.unstable_scheduleCallback = function (N, O, L) {
      var ne = t.unstable_now();
      switch (
        (typeof L == "object" && L !== null
          ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? ne + L : ne))
          : (L = ne),
        N)
      ) {
        case 1:
          var ce = -1;
          break;
        case 2:
          ce = 250;
          break;
        case 5:
          ce = 1073741823;
          break;
        case 4:
          ce = 1e4;
          break;
        default:
          ce = 5e3;
      }
      return (
        (ce = L + ce),
        (N = {
          id: d++,
          callback: O,
          priorityLevel: N,
          startTime: L,
          expirationTime: ce,
          sortIndex: -1,
        }),
        L > ne
          ? ((N.sortIndex = L),
            e(u, N),
            n(a) === null &&
              N === n(u) &&
              (y ? (m(R), (R = -1)) : (y = !0), jo(v, L - ne)))
          : ((N.sortIndex = ce), e(a, N), _ || g || ((_ = !0), Uo(w))),
        N
      );
    }),
    (t.unstable_shouldYield = me),
    (t.unstable_wrapCallback = function (N) {
      var O = f;
      return function () {
        var L = f;
        f = O;
        try {
          return N.apply(this, arguments);
        } finally {
          f = L;
        }
      };
    });
})(bf);
Ff.exports = bf;
var qg = Ff.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xg = I,
  Be = qg;
function E(t) {
  for (
    var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1;
    n < arguments.length;
    n++
  )
    e += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    t +
    "; visit " +
    e +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var zf = new Set(),
  Jr = {};
function Nn(t, e) {
  ir(t, e), ir(t + "Capture", e);
}
function ir(t, e) {
  for (Jr[t] = e, t = 0; t < e.length; t++) zf.add(e[t]);
}
var Et = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  kl = Object.prototype.hasOwnProperty,
  Jg =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  _c = {},
  vc = {};
function Zg(t) {
  return kl.call(vc, t)
    ? !0
    : kl.call(_c, t)
    ? !1
    : Jg.test(t)
    ? (vc[t] = !0)
    : ((_c[t] = !0), !1);
}
function e_(t, e, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof e) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((t = t.toLowerCase().slice(0, 5)), t !== "data-" && t !== "aria-");
    default:
      return !1;
  }
}
function t_(t, e, n, r) {
  if (e === null || typeof e > "u" || e_(t, e, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !e;
      case 4:
        return e === !1;
      case 5:
        return isNaN(e);
      case 6:
        return isNaN(e) || 1 > e;
    }
  return !1;
}
function Ae(t, e, n, r, i, s, o) {
  (this.acceptsBooleans = e === 2 || e === 3 || e === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = t),
    (this.type = e),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var ye = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (t) {
    ye[t] = new Ae(t, 0, !1, t, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (t) {
  var e = t[0];
  ye[e] = new Ae(e, 1, !1, t[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (t) {
  ye[t] = new Ae(t, 2, !1, t.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (t) {
  ye[t] = new Ae(t, 2, !1, t, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (t) {
    ye[t] = new Ae(t, 3, !1, t.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (t) {
  ye[t] = new Ae(t, 3, !0, t, null, !1, !1);
});
["capture", "download"].forEach(function (t) {
  ye[t] = new Ae(t, 4, !1, t, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (t) {
  ye[t] = new Ae(t, 6, !1, t, null, !1, !1);
});
["rowSpan", "start"].forEach(function (t) {
  ye[t] = new Ae(t, 5, !1, t.toLowerCase(), null, !1, !1);
});
var Ga = /[\-:]([a-z])/g;
function Ka(t) {
  return t[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(Ga, Ka);
    ye[e] = new Ae(e, 1, !1, t, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(Ga, Ka);
    ye[e] = new Ae(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (t) {
  var e = t.replace(Ga, Ka);
  ye[e] = new Ae(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (t) {
  ye[t] = new Ae(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
ye.xlinkHref = new Ae(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (t) {
  ye[t] = new Ae(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function Qa(t, e, n, r) {
  var i = ye.hasOwnProperty(e) ? ye[e] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < e.length) ||
      (e[0] !== "o" && e[0] !== "O") ||
      (e[1] !== "n" && e[1] !== "N")) &&
    (t_(e, n, i, r) && (n = null),
    r || i === null
      ? Zg(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n))
      : i.mustUseProperty
      ? (t[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((e = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? t.removeAttribute(e)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))));
}
var kt = Xg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ki = Symbol.for("react.element"),
  Mn = Symbol.for("react.portal"),
  Fn = Symbol.for("react.fragment"),
  $a = Symbol.for("react.strict_mode"),
  Nl = Symbol.for("react.profiler"),
  Uf = Symbol.for("react.provider"),
  jf = Symbol.for("react.context"),
  Ya = Symbol.for("react.forward_ref"),
  Al = Symbol.for("react.suspense"),
  Rl = Symbol.for("react.suspense_list"),
  qa = Symbol.for("react.memo"),
  Pt = Symbol.for("react.lazy"),
  Bf = Symbol.for("react.offscreen"),
  yc = Symbol.iterator;
function Cr(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (yc && t[yc]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var Z = Object.assign,
  Vo;
function Lr(t) {
  if (Vo === void 0)
    try {
      throw Error();
    } catch (n) {
      var e = n.stack.trim().match(/\n( *(at )?)/);
      Vo = (e && e[1]) || "";
    }
  return (
    `
` +
    Vo +
    t
  );
}
var Ho = !1;
function Go(t, e) {
  if (!t || Ho) return "";
  Ho = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (e)
      if (
        ((e = function () {
          throw Error();
        }),
        Object.defineProperty(e.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(e, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(t, [], e);
      } else {
        try {
          e.call();
        } catch (u) {
          r = u;
        }
        t.call(e.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      t();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          l = s.length - 1;
        1 <= o && 0 <= l && i[o] !== s[l];

      )
        l--;
      for (; 1 <= o && 0 <= l; o--, l--)
        if (i[o] !== s[l]) {
          if (o !== 1 || l !== 1)
            do
              if ((o--, l--, 0 > l || i[o] !== s[l])) {
                var a =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  t.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", t.displayName)),
                  a
                );
              }
            while (1 <= o && 0 <= l);
          break;
        }
    }
  } finally {
    (Ho = !1), (Error.prepareStackTrace = n);
  }
  return (t = t ? t.displayName || t.name : "") ? Lr(t) : "";
}
function n_(t) {
  switch (t.tag) {
    case 5:
      return Lr(t.type);
    case 16:
      return Lr("Lazy");
    case 13:
      return Lr("Suspense");
    case 19:
      return Lr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (t = Go(t.type, !1)), t;
    case 11:
      return (t = Go(t.type.render, !1)), t;
    case 1:
      return (t = Go(t.type, !0)), t;
    default:
      return "";
  }
}
function Pl(t) {
  if (t == null) return null;
  if (typeof t == "function") return t.displayName || t.name || null;
  if (typeof t == "string") return t;
  switch (t) {
    case Fn:
      return "Fragment";
    case Mn:
      return "Portal";
    case Nl:
      return "Profiler";
    case $a:
      return "StrictMode";
    case Al:
      return "Suspense";
    case Rl:
      return "SuspenseList";
  }
  if (typeof t == "object")
    switch (t.$$typeof) {
      case jf:
        return (t.displayName || "Context") + ".Consumer";
      case Uf:
        return (t._context.displayName || "Context") + ".Provider";
      case Ya:
        var e = t.render;
        return (
          (t = t.displayName),
          t ||
            ((t = e.displayName || e.name || ""),
            (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
          t
        );
      case qa:
        return (
          (e = t.displayName || null), e !== null ? e : Pl(t.type) || "Memo"
        );
      case Pt:
        (e = t._payload), (t = t._init);
        try {
          return Pl(t(e));
        } catch {}
    }
  return null;
}
function r_(t) {
  var e = t.type;
  switch (t.tag) {
    case 24:
      return "Cache";
    case 9:
      return (e.displayName || "Context") + ".Consumer";
    case 10:
      return (e._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (t = e.render),
        (t = t.displayName || t.name || ""),
        e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return e;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Pl(e);
    case 8:
      return e === $a ? "StrictMode" : "Mode";
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
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
  }
  return null;
}
function Xt(t) {
  switch (typeof t) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return t;
    case "object":
      return t;
    default:
      return "";
  }
}
function Wf(t) {
  var e = t.type;
  return (
    (t = t.nodeName) &&
    t.toLowerCase() === "input" &&
    (e === "checkbox" || e === "radio")
  );
}
function i_(t) {
  var e = Wf(t) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
    r = "" + t[e];
  if (
    !t.hasOwnProperty(e) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(t, e, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), s.call(this, o);
        },
      }),
      Object.defineProperty(t, e, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (t._valueTracker = null), delete t[e];
        },
      }
    );
  }
}
function Qi(t) {
  t._valueTracker || (t._valueTracker = i_(t));
}
function Vf(t) {
  if (!t) return !1;
  var e = t._valueTracker;
  if (!e) return !0;
  var n = e.getValue(),
    r = "";
  return (
    t && (r = Wf(t) ? (t.checked ? "true" : "false") : t.value),
    (t = r),
    t !== n ? (e.setValue(t), !0) : !1
  );
}
function Is(t) {
  if (((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u"))
    return null;
  try {
    return t.activeElement || t.body;
  } catch {
    return t.body;
  }
}
function Ol(t, e) {
  var n = e.checked;
  return Z({}, e, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? t._wrapperState.initialChecked,
  });
}
function wc(t, e) {
  var n = e.defaultValue == null ? "" : e.defaultValue,
    r = e.checked != null ? e.checked : e.defaultChecked;
  (n = Xt(e.value != null ? e.value : n)),
    (t._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        e.type === "checkbox" || e.type === "radio"
          ? e.checked != null
          : e.value != null,
    });
}
function Hf(t, e) {
  (e = e.checked), e != null && Qa(t, "checked", e, !1);
}
function Dl(t, e) {
  Hf(t, e);
  var n = Xt(e.value),
    r = e.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && t.value === "") || t.value != n) && (t.value = "" + n)
      : t.value !== "" + n && (t.value = "" + n);
  else if (r === "submit" || r === "reset") {
    t.removeAttribute("value");
    return;
  }
  e.hasOwnProperty("value")
    ? Ll(t, e.type, n)
    : e.hasOwnProperty("defaultValue") && Ll(t, e.type, Xt(e.defaultValue)),
    e.checked == null &&
      e.defaultChecked != null &&
      (t.defaultChecked = !!e.defaultChecked);
}
function Ec(t, e, n) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var r = e.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (e.value !== void 0 && e.value !== null)
      )
    )
      return;
    (e = "" + t._wrapperState.initialValue),
      n || e === t.value || (t.value = e),
      (t.defaultValue = e);
  }
  (n = t.name),
    n !== "" && (t.name = ""),
    (t.defaultChecked = !!t._wrapperState.initialChecked),
    n !== "" && (t.name = n);
}
function Ll(t, e, n) {
  (e !== "number" || Is(t.ownerDocument) !== t) &&
    (n == null
      ? (t.defaultValue = "" + t._wrapperState.initialValue)
      : t.defaultValue !== "" + n && (t.defaultValue = "" + n));
}
var Mr = Array.isArray;
function Yn(t, e, n, r) {
  if (((t = t.options), e)) {
    e = {};
    for (var i = 0; i < n.length; i++) e["$" + n[i]] = !0;
    for (n = 0; n < t.length; n++)
      (i = e.hasOwnProperty("$" + t[n].value)),
        t[n].selected !== i && (t[n].selected = i),
        i && r && (t[n].defaultSelected = !0);
  } else {
    for (n = "" + Xt(n), e = null, i = 0; i < t.length; i++) {
      if (t[i].value === n) {
        (t[i].selected = !0), r && (t[i].defaultSelected = !0);
        return;
      }
      e !== null || t[i].disabled || (e = t[i]);
    }
    e !== null && (e.selected = !0);
  }
}
function Ml(t, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(E(91));
  return Z({}, e, {
    value: void 0,
    defaultValue: void 0,
    children: "" + t._wrapperState.initialValue,
  });
}
function Cc(t, e) {
  var n = e.value;
  if (n == null) {
    if (((n = e.children), (e = e.defaultValue), n != null)) {
      if (e != null) throw Error(E(92));
      if (Mr(n)) {
        if (1 < n.length) throw Error(E(93));
        n = n[0];
      }
      e = n;
    }
    e == null && (e = ""), (n = e);
  }
  t._wrapperState = { initialValue: Xt(n) };
}
function Gf(t, e) {
  var n = Xt(e.value),
    r = Xt(e.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== t.value && (t.value = n),
    e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
    r != null && (t.defaultValue = "" + r);
}
function Sc(t) {
  var e = t.textContent;
  e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e);
}
function Kf(t) {
  switch (t) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Fl(t, e) {
  return t == null || t === "http://www.w3.org/1999/xhtml"
    ? Kf(e)
    : t === "http://www.w3.org/2000/svg" && e === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : t;
}
var $i,
  Qf = (function (t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (e, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return t(e, n, r, i);
          });
        }
      : t;
  })(function (t, e) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t)
      t.innerHTML = e;
    else {
      for (
        $i = $i || document.createElement("div"),
          $i.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
          e = $i.firstChild;
        t.firstChild;

      )
        t.removeChild(t.firstChild);
      for (; e.firstChild; ) t.appendChild(e.firstChild);
    }
  });
function Zr(t, e) {
  if (e) {
    var n = t.firstChild;
    if (n && n === t.lastChild && n.nodeType === 3) {
      n.nodeValue = e;
      return;
    }
  }
  t.textContent = e;
}
var zr = {
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
  s_ = ["Webkit", "ms", "Moz", "O"];
Object.keys(zr).forEach(function (t) {
  s_.forEach(function (e) {
    (e = e + t.charAt(0).toUpperCase() + t.substring(1)), (zr[e] = zr[t]);
  });
});
function $f(t, e, n) {
  return e == null || typeof e == "boolean" || e === ""
    ? ""
    : n || typeof e != "number" || e === 0 || (zr.hasOwnProperty(t) && zr[t])
    ? ("" + e).trim()
    : e + "px";
}
function Yf(t, e) {
  t = t.style;
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = $f(n, e[n], r);
      n === "float" && (n = "cssFloat"), r ? t.setProperty(n, i) : (t[n] = i);
    }
}
var o_ = Z(
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
  }
);
function bl(t, e) {
  if (e) {
    if (o_[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
      throw Error(E(137, t));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(E(60));
      if (
        typeof e.dangerouslySetInnerHTML != "object" ||
        !("__html" in e.dangerouslySetInnerHTML)
      )
        throw Error(E(61));
    }
    if (e.style != null && typeof e.style != "object") throw Error(E(62));
  }
}
function zl(t, e) {
  if (t.indexOf("-") === -1) return typeof e.is == "string";
  switch (t) {
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
var Ul = null;
function Xa(t) {
  return (
    (t = t.target || t.srcElement || window),
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
  );
}
var jl = null,
  qn = null,
  Xn = null;
function Ic(t) {
  if ((t = Pi(t))) {
    if (typeof jl != "function") throw Error(E(280));
    var e = t.stateNode;
    e && ((e = vo(e)), jl(t.stateNode, t.type, e));
  }
}
function qf(t) {
  qn ? (Xn ? Xn.push(t) : (Xn = [t])) : (qn = t);
}
function Xf() {
  if (qn) {
    var t = qn,
      e = Xn;
    if (((Xn = qn = null), Ic(t), e)) for (t = 0; t < e.length; t++) Ic(e[t]);
  }
}
function Jf(t, e) {
  return t(e);
}
function Zf() {}
var Ko = !1;
function eh(t, e, n) {
  if (Ko) return t(e, n);
  Ko = !0;
  try {
    return Jf(t, e, n);
  } finally {
    (Ko = !1), (qn !== null || Xn !== null) && (Zf(), Xf());
  }
}
function ei(t, e) {
  var n = t.stateNode;
  if (n === null) return null;
  var r = vo(n);
  if (r === null) return null;
  n = r[e];
  e: switch (e) {
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
        ((t = t.type),
        (r = !(
          t === "button" ||
          t === "input" ||
          t === "select" ||
          t === "textarea"
        ))),
        (t = !r);
      break e;
    default:
      t = !1;
  }
  if (t) return null;
  if (n && typeof n != "function") throw Error(E(231, e, typeof n));
  return n;
}
var Bl = !1;
if (Et)
  try {
    var Sr = {};
    Object.defineProperty(Sr, "passive", {
      get: function () {
        Bl = !0;
      },
    }),
      window.addEventListener("test", Sr, Sr),
      window.removeEventListener("test", Sr, Sr);
  } catch {
    Bl = !1;
  }
function l_(t, e, n, r, i, s, o, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var Ur = !1,
  xs = null,
  Ts = !1,
  Wl = null,
  a_ = {
    onError: function (t) {
      (Ur = !0), (xs = t);
    },
  };
function u_(t, e, n, r, i, s, o, l, a) {
  (Ur = !1), (xs = null), l_.apply(a_, arguments);
}
function c_(t, e, n, r, i, s, o, l, a) {
  if ((u_.apply(this, arguments), Ur)) {
    if (Ur) {
      var u = xs;
      (Ur = !1), (xs = null);
    } else throw Error(E(198));
    Ts || ((Ts = !0), (Wl = u));
  }
}
function An(t) {
  var e = t,
    n = t;
  if (t.alternate) for (; e.return; ) e = e.return;
  else {
    t = e;
    do (e = t), e.flags & 4098 && (n = e.return), (t = e.return);
    while (t);
  }
  return e.tag === 3 ? n : null;
}
function th(t) {
  if (t.tag === 13) {
    var e = t.memoizedState;
    if (
      (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
      e !== null)
    )
      return e.dehydrated;
  }
  return null;
}
function xc(t) {
  if (An(t) !== t) throw Error(E(188));
}
function d_(t) {
  var e = t.alternate;
  if (!e) {
    if (((e = An(t)), e === null)) throw Error(E(188));
    return e !== t ? null : t;
  }
  for (var n = t, r = e; ; ) {
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
        if (s === n) return xc(i), t;
        if (s === r) return xc(i), e;
        s = s.sibling;
      }
      throw Error(E(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var o = !1, l = i.child; l; ) {
        if (l === n) {
          (o = !0), (n = i), (r = s);
          break;
        }
        if (l === r) {
          (o = !0), (r = i), (n = s);
          break;
        }
        l = l.sibling;
      }
      if (!o) {
        for (l = s.child; l; ) {
          if (l === n) {
            (o = !0), (n = s), (r = i);
            break;
          }
          if (l === r) {
            (o = !0), (r = s), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!o) throw Error(E(189));
      }
    }
    if (n.alternate !== r) throw Error(E(190));
  }
  if (n.tag !== 3) throw Error(E(188));
  return n.stateNode.current === n ? t : e;
}
function nh(t) {
  return (t = d_(t)), t !== null ? rh(t) : null;
}
function rh(t) {
  if (t.tag === 5 || t.tag === 6) return t;
  for (t = t.child; t !== null; ) {
    var e = rh(t);
    if (e !== null) return e;
    t = t.sibling;
  }
  return null;
}
var ih = Be.unstable_scheduleCallback,
  Tc = Be.unstable_cancelCallback,
  f_ = Be.unstable_shouldYield,
  h_ = Be.unstable_requestPaint,
  re = Be.unstable_now,
  p_ = Be.unstable_getCurrentPriorityLevel,
  Ja = Be.unstable_ImmediatePriority,
  sh = Be.unstable_UserBlockingPriority,
  ks = Be.unstable_NormalPriority,
  m_ = Be.unstable_LowPriority,
  oh = Be.unstable_IdlePriority,
  po = null,
  ct = null;
function g_(t) {
  if (ct && typeof ct.onCommitFiberRoot == "function")
    try {
      ct.onCommitFiberRoot(po, t, void 0, (t.current.flags & 128) === 128);
    } catch {}
}
var rt = Math.clz32 ? Math.clz32 : y_,
  __ = Math.log,
  v_ = Math.LN2;
function y_(t) {
  return (t >>>= 0), t === 0 ? 32 : (31 - ((__(t) / v_) | 0)) | 0;
}
var Yi = 64,
  qi = 4194304;
function Fr(t) {
  switch (t & -t) {
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
      return t & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return t & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return t;
  }
}
function Ns(t, e) {
  var n = t.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = t.suspendedLanes,
    s = t.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var l = o & ~i;
    l !== 0 ? (r = Fr(l)) : ((s &= o), s !== 0 && (r = Fr(s)));
  } else (o = n & ~i), o !== 0 ? (r = Fr(o)) : s !== 0 && (r = Fr(s));
  if (r === 0) return 0;
  if (
    e !== 0 &&
    e !== r &&
    !(e & i) &&
    ((i = r & -r), (s = e & -e), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return e;
  if ((r & 4 && (r |= n & 16), (e = t.entangledLanes), e !== 0))
    for (t = t.entanglements, e &= r; 0 < e; )
      (n = 31 - rt(e)), (i = 1 << n), (r |= t[n]), (e &= ~i);
  return r;
}
function w_(t, e) {
  switch (t) {
    case 1:
    case 2:
    case 4:
      return e + 250;
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
      return e + 5e3;
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
function E_(t, e) {
  for (
    var n = t.suspendedLanes,
      r = t.pingedLanes,
      i = t.expirationTimes,
      s = t.pendingLanes;
    0 < s;

  ) {
    var o = 31 - rt(s),
      l = 1 << o,
      a = i[o];
    a === -1
      ? (!(l & n) || l & r) && (i[o] = w_(l, e))
      : a <= e && (t.expiredLanes |= l),
      (s &= ~l);
  }
}
function Vl(t) {
  return (
    (t = t.pendingLanes & -1073741825),
    t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
  );
}
function lh() {
  var t = Yi;
  return (Yi <<= 1), !(Yi & 4194240) && (Yi = 64), t;
}
function Qo(t) {
  for (var e = [], n = 0; 31 > n; n++) e.push(t);
  return e;
}
function Ai(t, e, n) {
  (t.pendingLanes |= e),
    e !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
    (t = t.eventTimes),
    (e = 31 - rt(e)),
    (t[e] = n);
}
function C_(t, e) {
  var n = t.pendingLanes & ~e;
  (t.pendingLanes = e),
    (t.suspendedLanes = 0),
    (t.pingedLanes = 0),
    (t.expiredLanes &= e),
    (t.mutableReadLanes &= e),
    (t.entangledLanes &= e),
    (e = t.entanglements);
  var r = t.eventTimes;
  for (t = t.expirationTimes; 0 < n; ) {
    var i = 31 - rt(n),
      s = 1 << i;
    (e[i] = 0), (r[i] = -1), (t[i] = -1), (n &= ~s);
  }
}
function Za(t, e) {
  var n = (t.entangledLanes |= e);
  for (t = t.entanglements; n; ) {
    var r = 31 - rt(n),
      i = 1 << r;
    (i & e) | (t[r] & e) && (t[r] |= e), (n &= ~i);
  }
}
var B = 0;
function ah(t) {
  return (t &= -t), 1 < t ? (4 < t ? (t & 268435455 ? 16 : 536870912) : 4) : 1;
}
var uh,
  eu,
  ch,
  dh,
  fh,
  Hl = !1,
  Xi = [],
  zt = null,
  Ut = null,
  jt = null,
  ti = new Map(),
  ni = new Map(),
  Dt = [],
  S_ =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function kc(t, e) {
  switch (t) {
    case "focusin":
    case "focusout":
      zt = null;
      break;
    case "dragenter":
    case "dragleave":
      Ut = null;
      break;
    case "mouseover":
    case "mouseout":
      jt = null;
      break;
    case "pointerover":
    case "pointerout":
      ti.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ni.delete(e.pointerId);
  }
}
function Ir(t, e, n, r, i, s) {
  return t === null || t.nativeEvent !== s
    ? ((t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      e !== null && ((e = Pi(e)), e !== null && eu(e)),
      t)
    : ((t.eventSystemFlags |= r),
      (e = t.targetContainers),
      i !== null && e.indexOf(i) === -1 && e.push(i),
      t);
}
function I_(t, e, n, r, i) {
  switch (e) {
    case "focusin":
      return (zt = Ir(zt, t, e, n, r, i)), !0;
    case "dragenter":
      return (Ut = Ir(Ut, t, e, n, r, i)), !0;
    case "mouseover":
      return (jt = Ir(jt, t, e, n, r, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return ti.set(s, Ir(ti.get(s) || null, t, e, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (s = i.pointerId), ni.set(s, Ir(ni.get(s) || null, t, e, n, r, i)), !0
      );
  }
  return !1;
}
function hh(t) {
  var e = pn(t.target);
  if (e !== null) {
    var n = An(e);
    if (n !== null) {
      if (((e = n.tag), e === 13)) {
        if (((e = th(n)), e !== null)) {
          (t.blockedOn = e),
            fh(t.priority, function () {
              ch(n);
            });
          return;
        }
      } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  t.blockedOn = null;
}
function fs(t) {
  if (t.blockedOn !== null) return !1;
  for (var e = t.targetContainers; 0 < e.length; ) {
    var n = Gl(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
    if (n === null) {
      n = t.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ul = r), n.target.dispatchEvent(r), (Ul = null);
    } else return (e = Pi(n)), e !== null && eu(e), (t.blockedOn = n), !1;
    e.shift();
  }
  return !0;
}
function Nc(t, e, n) {
  fs(t) && n.delete(e);
}
function x_() {
  (Hl = !1),
    zt !== null && fs(zt) && (zt = null),
    Ut !== null && fs(Ut) && (Ut = null),
    jt !== null && fs(jt) && (jt = null),
    ti.forEach(Nc),
    ni.forEach(Nc);
}
function xr(t, e) {
  t.blockedOn === e &&
    ((t.blockedOn = null),
    Hl ||
      ((Hl = !0),
      Be.unstable_scheduleCallback(Be.unstable_NormalPriority, x_)));
}
function ri(t) {
  function e(i) {
    return xr(i, t);
  }
  if (0 < Xi.length) {
    xr(Xi[0], t);
    for (var n = 1; n < Xi.length; n++) {
      var r = Xi[n];
      r.blockedOn === t && (r.blockedOn = null);
    }
  }
  for (
    zt !== null && xr(zt, t),
      Ut !== null && xr(Ut, t),
      jt !== null && xr(jt, t),
      ti.forEach(e),
      ni.forEach(e),
      n = 0;
    n < Dt.length;
    n++
  )
    (r = Dt[n]), r.blockedOn === t && (r.blockedOn = null);
  for (; 0 < Dt.length && ((n = Dt[0]), n.blockedOn === null); )
    hh(n), n.blockedOn === null && Dt.shift();
}
var Jn = kt.ReactCurrentBatchConfig,
  As = !0;
function T_(t, e, n, r) {
  var i = B,
    s = Jn.transition;
  Jn.transition = null;
  try {
    (B = 1), tu(t, e, n, r);
  } finally {
    (B = i), (Jn.transition = s);
  }
}
function k_(t, e, n, r) {
  var i = B,
    s = Jn.transition;
  Jn.transition = null;
  try {
    (B = 4), tu(t, e, n, r);
  } finally {
    (B = i), (Jn.transition = s);
  }
}
function tu(t, e, n, r) {
  if (As) {
    var i = Gl(t, e, n, r);
    if (i === null) rl(t, e, r, Rs, n), kc(t, r);
    else if (I_(i, t, e, n, r)) r.stopPropagation();
    else if ((kc(t, r), e & 4 && -1 < S_.indexOf(t))) {
      for (; i !== null; ) {
        var s = Pi(i);
        if (
          (s !== null && uh(s),
          (s = Gl(t, e, n, r)),
          s === null && rl(t, e, r, Rs, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else rl(t, e, r, null, n);
  }
}
var Rs = null;
function Gl(t, e, n, r) {
  if (((Rs = null), (t = Xa(r)), (t = pn(t)), t !== null))
    if (((e = An(t)), e === null)) t = null;
    else if (((n = e.tag), n === 13)) {
      if (((t = th(e)), t !== null)) return t;
      t = null;
    } else if (n === 3) {
      if (e.stateNode.current.memoizedState.isDehydrated)
        return e.tag === 3 ? e.stateNode.containerInfo : null;
      t = null;
    } else e !== t && (t = null);
  return (Rs = t), null;
}
function ph(t) {
  switch (t) {
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
      switch (p_()) {
        case Ja:
          return 1;
        case sh:
          return 4;
        case ks:
        case m_:
          return 16;
        case oh:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Mt = null,
  nu = null,
  hs = null;
function mh() {
  if (hs) return hs;
  var t,
    e = nu,
    n = e.length,
    r,
    i = "value" in Mt ? Mt.value : Mt.textContent,
    s = i.length;
  for (t = 0; t < n && e[t] === i[t]; t++);
  var o = n - t;
  for (r = 1; r <= o && e[n - r] === i[s - r]; r++);
  return (hs = i.slice(t, 1 < r ? 1 - r : void 0));
}
function ps(t) {
  var e = t.keyCode;
  return (
    "charCode" in t
      ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
      : (t = e),
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
  );
}
function Ji() {
  return !0;
}
function Ac() {
  return !1;
}
function Ve(t) {
  function e(n, r, i, s, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var l in t)
      t.hasOwnProperty(l) && ((n = t[l]), (this[l] = n ? n(s) : s[l]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? Ji
        : Ac),
      (this.isPropagationStopped = Ac),
      this
    );
  }
  return (
    Z(e.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ji));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ji));
      },
      persist: function () {},
      isPersistent: Ji,
    }),
    e
  );
}
var gr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ru = Ve(gr),
  Ri = Z({}, gr, { view: 0, detail: 0 }),
  N_ = Ve(Ri),
  $o,
  Yo,
  Tr,
  mo = Z({}, Ri, {
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
    getModifierState: iu,
    button: 0,
    buttons: 0,
    relatedTarget: function (t) {
      return t.relatedTarget === void 0
        ? t.fromElement === t.srcElement
          ? t.toElement
          : t.fromElement
        : t.relatedTarget;
    },
    movementX: function (t) {
      return "movementX" in t
        ? t.movementX
        : (t !== Tr &&
            (Tr && t.type === "mousemove"
              ? (($o = t.screenX - Tr.screenX), (Yo = t.screenY - Tr.screenY))
              : (Yo = $o = 0),
            (Tr = t)),
          $o);
    },
    movementY: function (t) {
      return "movementY" in t ? t.movementY : Yo;
    },
  }),
  Rc = Ve(mo),
  A_ = Z({}, mo, { dataTransfer: 0 }),
  R_ = Ve(A_),
  P_ = Z({}, Ri, { relatedTarget: 0 }),
  qo = Ve(P_),
  O_ = Z({}, gr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  D_ = Ve(O_),
  L_ = Z({}, gr, {
    clipboardData: function (t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    },
  }),
  M_ = Ve(L_),
  F_ = Z({}, gr, { data: 0 }),
  Pc = Ve(F_),
  b_ = {
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
  z_ = {
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
  U_ = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function j_(t) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(t) : (t = U_[t]) ? !!e[t] : !1;
}
function iu() {
  return j_;
}
var B_ = Z({}, Ri, {
    key: function (t) {
      if (t.key) {
        var e = b_[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress"
        ? ((t = ps(t)), t === 13 ? "Enter" : String.fromCharCode(t))
        : t.type === "keydown" || t.type === "keyup"
        ? z_[t.keyCode] || "Unidentified"
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
    getModifierState: iu,
    charCode: function (t) {
      return t.type === "keypress" ? ps(t) : 0;
    },
    keyCode: function (t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function (t) {
      return t.type === "keypress"
        ? ps(t)
        : t.type === "keydown" || t.type === "keyup"
        ? t.keyCode
        : 0;
    },
  }),
  W_ = Ve(B_),
  V_ = Z({}, mo, {
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
  Oc = Ve(V_),
  H_ = Z({}, Ri, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: iu,
  }),
  G_ = Ve(H_),
  K_ = Z({}, gr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Q_ = Ve(K_),
  $_ = Z({}, mo, {
    deltaX: function (t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function (t) {
      return "deltaY" in t
        ? t.deltaY
        : "wheelDeltaY" in t
        ? -t.wheelDeltaY
        : "wheelDelta" in t
        ? -t.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Y_ = Ve($_),
  q_ = [9, 13, 27, 32],
  su = Et && "CompositionEvent" in window,
  jr = null;
Et && "documentMode" in document && (jr = document.documentMode);
var X_ = Et && "TextEvent" in window && !jr,
  gh = Et && (!su || (jr && 8 < jr && 11 >= jr)),
  Dc = " ",
  Lc = !1;
function _h(t, e) {
  switch (t) {
    case "keyup":
      return q_.indexOf(e.keyCode) !== -1;
    case "keydown":
      return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function vh(t) {
  return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
}
var bn = !1;
function J_(t, e) {
  switch (t) {
    case "compositionend":
      return vh(e);
    case "keypress":
      return e.which !== 32 ? null : ((Lc = !0), Dc);
    case "textInput":
      return (t = e.data), t === Dc && Lc ? null : t;
    default:
      return null;
  }
}
function Z_(t, e) {
  if (bn)
    return t === "compositionend" || (!su && _h(t, e))
      ? ((t = mh()), (hs = nu = Mt = null), (bn = !1), t)
      : null;
  switch (t) {
    case "paste":
      return null;
    case "keypress":
      if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
        if (e.char && 1 < e.char.length) return e.char;
        if (e.which) return String.fromCharCode(e.which);
      }
      return null;
    case "compositionend":
      return gh && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var ev = {
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
function Mc(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e === "input" ? !!ev[t.type] : e === "textarea";
}
function yh(t, e, n, r) {
  qf(r),
    (e = Ps(e, "onChange")),
    0 < e.length &&
      ((n = new ru("onChange", "change", null, n, r)),
      t.push({ event: n, listeners: e }));
}
var Br = null,
  ii = null;
function tv(t) {
  Rh(t, 0);
}
function go(t) {
  var e = jn(t);
  if (Vf(e)) return t;
}
function nv(t, e) {
  if (t === "change") return e;
}
var wh = !1;
if (Et) {
  var Xo;
  if (Et) {
    var Jo = "oninput" in document;
    if (!Jo) {
      var Fc = document.createElement("div");
      Fc.setAttribute("oninput", "return;"),
        (Jo = typeof Fc.oninput == "function");
    }
    Xo = Jo;
  } else Xo = !1;
  wh = Xo && (!document.documentMode || 9 < document.documentMode);
}
function bc() {
  Br && (Br.detachEvent("onpropertychange", Eh), (ii = Br = null));
}
function Eh(t) {
  if (t.propertyName === "value" && go(ii)) {
    var e = [];
    yh(e, ii, t, Xa(t)), eh(tv, e);
  }
}
function rv(t, e, n) {
  t === "focusin"
    ? (bc(), (Br = e), (ii = n), Br.attachEvent("onpropertychange", Eh))
    : t === "focusout" && bc();
}
function iv(t) {
  if (t === "selectionchange" || t === "keyup" || t === "keydown")
    return go(ii);
}
function sv(t, e) {
  if (t === "click") return go(e);
}
function ov(t, e) {
  if (t === "input" || t === "change") return go(e);
}
function lv(t, e) {
  return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var ot = typeof Object.is == "function" ? Object.is : lv;
function si(t, e) {
  if (ot(t, e)) return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null)
    return !1;
  var n = Object.keys(t),
    r = Object.keys(e);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!kl.call(e, i) || !ot(t[i], e[i])) return !1;
  }
  return !0;
}
function zc(t) {
  for (; t && t.firstChild; ) t = t.firstChild;
  return t;
}
function Uc(t, e) {
  var n = zc(t);
  t = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = t + n.textContent.length), t <= e && r >= e))
        return { node: n, offset: e - t };
      t = r;
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
    n = zc(n);
  }
}
function Ch(t, e) {
  return t && e
    ? t === e
      ? !0
      : t && t.nodeType === 3
      ? !1
      : e && e.nodeType === 3
      ? Ch(t, e.parentNode)
      : "contains" in t
      ? t.contains(e)
      : t.compareDocumentPosition
      ? !!(t.compareDocumentPosition(e) & 16)
      : !1
    : !1;
}
function Sh() {
  for (var t = window, e = Is(); e instanceof t.HTMLIFrameElement; ) {
    try {
      var n = typeof e.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) t = e.contentWindow;
    else break;
    e = Is(t.document);
  }
  return e;
}
function ou(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return (
    e &&
    ((e === "input" &&
      (t.type === "text" ||
        t.type === "search" ||
        t.type === "tel" ||
        t.type === "url" ||
        t.type === "password")) ||
      e === "textarea" ||
      t.contentEditable === "true")
  );
}
function av(t) {
  var e = Sh(),
    n = t.focusedElem,
    r = t.selectionRange;
  if (
    e !== n &&
    n &&
    n.ownerDocument &&
    Ch(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ou(n)) {
      if (
        ((e = r.start),
        (t = r.end),
        t === void 0 && (t = e),
        "selectionStart" in n)
      )
        (n.selectionStart = e), (n.selectionEnd = Math.min(t, n.value.length));
      else if (
        ((t = ((e = n.ownerDocument || document) && e.defaultView) || window),
        t.getSelection)
      ) {
        t = t.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !t.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = Uc(n, s));
        var o = Uc(n, r);
        i &&
          o &&
          (t.rangeCount !== 1 ||
            t.anchorNode !== i.node ||
            t.anchorOffset !== i.offset ||
            t.focusNode !== o.node ||
            t.focusOffset !== o.offset) &&
          ((e = e.createRange()),
          e.setStart(i.node, i.offset),
          t.removeAllRanges(),
          s > r
            ? (t.addRange(e), t.extend(o.node, o.offset))
            : (e.setEnd(o.node, o.offset), t.addRange(e)));
      }
    }
    for (e = [], t = n; (t = t.parentNode); )
      t.nodeType === 1 &&
        e.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < e.length; n++)
      (t = e[n]),
        (t.element.scrollLeft = t.left),
        (t.element.scrollTop = t.top);
  }
}
var uv = Et && "documentMode" in document && 11 >= document.documentMode,
  zn = null,
  Kl = null,
  Wr = null,
  Ql = !1;
function jc(t, e, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ql ||
    zn == null ||
    zn !== Is(r) ||
    ((r = zn),
    "selectionStart" in r && ou(r)
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
    (Wr && si(Wr, r)) ||
      ((Wr = r),
      (r = Ps(Kl, "onSelect")),
      0 < r.length &&
        ((e = new ru("onSelect", "select", null, e, n)),
        t.push({ event: e, listeners: r }),
        (e.target = zn))));
}
function Zi(t, e) {
  var n = {};
  return (
    (n[t.toLowerCase()] = e.toLowerCase()),
    (n["Webkit" + t] = "webkit" + e),
    (n["Moz" + t] = "moz" + e),
    n
  );
}
var Un = {
    animationend: Zi("Animation", "AnimationEnd"),
    animationiteration: Zi("Animation", "AnimationIteration"),
    animationstart: Zi("Animation", "AnimationStart"),
    transitionend: Zi("Transition", "TransitionEnd"),
  },
  Zo = {},
  Ih = {};
Et &&
  ((Ih = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Un.animationend.animation,
    delete Un.animationiteration.animation,
    delete Un.animationstart.animation),
  "TransitionEvent" in window || delete Un.transitionend.transition);
function _o(t) {
  if (Zo[t]) return Zo[t];
  if (!Un[t]) return t;
  var e = Un[t],
    n;
  for (n in e) if (e.hasOwnProperty(n) && n in Ih) return (Zo[t] = e[n]);
  return t;
}
var xh = _o("animationend"),
  Th = _o("animationiteration"),
  kh = _o("animationstart"),
  Nh = _o("transitionend"),
  Ah = new Map(),
  Bc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function nn(t, e) {
  Ah.set(t, e), Nn(e, [t]);
}
for (var el = 0; el < Bc.length; el++) {
  var tl = Bc[el],
    cv = tl.toLowerCase(),
    dv = tl[0].toUpperCase() + tl.slice(1);
  nn(cv, "on" + dv);
}
nn(xh, "onAnimationEnd");
nn(Th, "onAnimationIteration");
nn(kh, "onAnimationStart");
nn("dblclick", "onDoubleClick");
nn("focusin", "onFocus");
nn("focusout", "onBlur");
nn(Nh, "onTransitionEnd");
ir("onMouseEnter", ["mouseout", "mouseover"]);
ir("onMouseLeave", ["mouseout", "mouseover"]);
ir("onPointerEnter", ["pointerout", "pointerover"]);
ir("onPointerLeave", ["pointerout", "pointerover"]);
Nn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Nn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Nn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Nn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Nn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Nn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var br =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  fv = new Set("cancel close invalid load scroll toggle".split(" ").concat(br));
function Wc(t, e, n) {
  var r = t.type || "unknown-event";
  (t.currentTarget = n), c_(r, e, void 0, t), (t.currentTarget = null);
}
function Rh(t, e) {
  e = (e & 4) !== 0;
  for (var n = 0; n < t.length; n++) {
    var r = t[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (e)
        for (var o = r.length - 1; 0 <= o; o--) {
          var l = r[o],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== s && i.isPropagationStopped())) break e;
          Wc(i, l, u), (s = a);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((l = r[o]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== s && i.isPropagationStopped())
          )
            break e;
          Wc(i, l, u), (s = a);
        }
    }
  }
  if (Ts) throw ((t = Wl), (Ts = !1), (Wl = null), t);
}
function Q(t, e) {
  var n = e[Jl];
  n === void 0 && (n = e[Jl] = new Set());
  var r = t + "__bubble";
  n.has(r) || (Ph(e, t, 2, !1), n.add(r));
}
function nl(t, e, n) {
  var r = 0;
  e && (r |= 4), Ph(n, t, r, e);
}
var es = "_reactListening" + Math.random().toString(36).slice(2);
function oi(t) {
  if (!t[es]) {
    (t[es] = !0),
      zf.forEach(function (n) {
        n !== "selectionchange" && (fv.has(n) || nl(n, !1, t), nl(n, !0, t));
      });
    var e = t.nodeType === 9 ? t : t.ownerDocument;
    e === null || e[es] || ((e[es] = !0), nl("selectionchange", !1, e));
  }
}
function Ph(t, e, n, r) {
  switch (ph(e)) {
    case 1:
      var i = T_;
      break;
    case 4:
      i = k_;
      break;
    default:
      i = tu;
  }
  (n = i.bind(null, e, n, t)),
    (i = void 0),
    !Bl ||
      (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? t.addEventListener(e, n, { capture: !0, passive: i })
        : t.addEventListener(e, n, !0)
      : i !== void 0
      ? t.addEventListener(e, n, { passive: i })
      : t.addEventListener(e, n, !1);
}
function rl(t, e, n, r, i) {
  var s = r;
  if (!(e & 1) && !(e & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var a = o.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = o.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; l !== null; ) {
          if (((o = pn(l)), o === null)) return;
          if (((a = o.tag), a === 5 || a === 6)) {
            r = s = o;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  eh(function () {
    var u = s,
      d = Xa(n),
      c = [];
    e: {
      var f = Ah.get(t);
      if (f !== void 0) {
        var g = ru,
          _ = t;
        switch (t) {
          case "keypress":
            if (ps(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = W_;
            break;
          case "focusin":
            (_ = "focus"), (g = qo);
            break;
          case "focusout":
            (_ = "blur"), (g = qo);
            break;
          case "beforeblur":
          case "afterblur":
            g = qo;
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
            g = Rc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = R_;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = G_;
            break;
          case xh:
          case Th:
          case kh:
            g = D_;
            break;
          case Nh:
            g = Q_;
            break;
          case "scroll":
            g = N_;
            break;
          case "wheel":
            g = Y_;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = M_;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Oc;
        }
        var y = (e & 4) !== 0,
          C = !y && t === "scroll",
          m = y ? (f !== null ? f + "Capture" : null) : f;
        y = [];
        for (var h = u, p; h !== null; ) {
          p = h;
          var v = p.stateNode;
          if (
            (p.tag === 5 &&
              v !== null &&
              ((p = v),
              m !== null && ((v = ei(h, m)), v != null && y.push(li(h, v, p)))),
            C)
          )
            break;
          h = h.return;
        }
        0 < y.length &&
          ((f = new g(f, _, null, n, d)), c.push({ event: f, listeners: y }));
      }
    }
    if (!(e & 7)) {
      e: {
        if (
          ((f = t === "mouseover" || t === "pointerover"),
          (g = t === "mouseout" || t === "pointerout"),
          f &&
            n !== Ul &&
            (_ = n.relatedTarget || n.fromElement) &&
            (pn(_) || _[Ct]))
        )
          break e;
        if (
          (g || f) &&
          ((f =
            d.window === d
              ? d
              : (f = d.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          g
            ? ((_ = n.relatedTarget || n.toElement),
              (g = u),
              (_ = _ ? pn(_) : null),
              _ !== null &&
                ((C = An(_)), _ !== C || (_.tag !== 5 && _.tag !== 6)) &&
                (_ = null))
            : ((g = null), (_ = u)),
          g !== _)
        ) {
          if (
            ((y = Rc),
            (v = "onMouseLeave"),
            (m = "onMouseEnter"),
            (h = "mouse"),
            (t === "pointerout" || t === "pointerover") &&
              ((y = Oc),
              (v = "onPointerLeave"),
              (m = "onPointerEnter"),
              (h = "pointer")),
            (C = g == null ? f : jn(g)),
            (p = _ == null ? f : jn(_)),
            (f = new y(v, h + "leave", g, n, d)),
            (f.target = C),
            (f.relatedTarget = p),
            (v = null),
            pn(d) === u &&
              ((y = new y(m, h + "enter", _, n, d)),
              (y.target = p),
              (y.relatedTarget = C),
              (v = y)),
            (C = v),
            g && _)
          )
            t: {
              for (y = g, m = _, h = 0, p = y; p; p = Dn(p)) h++;
              for (p = 0, v = m; v; v = Dn(v)) p++;
              for (; 0 < h - p; ) (y = Dn(y)), h--;
              for (; 0 < p - h; ) (m = Dn(m)), p--;
              for (; h--; ) {
                if (y === m || (m !== null && y === m.alternate)) break t;
                (y = Dn(y)), (m = Dn(m));
              }
              y = null;
            }
          else y = null;
          g !== null && Vc(c, f, g, y, !1),
            _ !== null && C !== null && Vc(c, C, _, y, !0);
        }
      }
      e: {
        if (
          ((f = u ? jn(u) : window),
          (g = f.nodeName && f.nodeName.toLowerCase()),
          g === "select" || (g === "input" && f.type === "file"))
        )
          var w = nv;
        else if (Mc(f))
          if (wh) w = ov;
          else {
            w = iv;
            var T = rv;
          }
        else
          (g = f.nodeName) &&
            g.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (w = sv);
        if (w && (w = w(t, u))) {
          yh(c, w, n, d);
          break e;
        }
        T && T(t, f, u),
          t === "focusout" &&
            (T = f._wrapperState) &&
            T.controlled &&
            f.type === "number" &&
            Ll(f, "number", f.value);
      }
      switch (((T = u ? jn(u) : window), t)) {
        case "focusin":
          (Mc(T) || T.contentEditable === "true") &&
            ((zn = T), (Kl = u), (Wr = null));
          break;
        case "focusout":
          Wr = Kl = zn = null;
          break;
        case "mousedown":
          Ql = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ql = !1), jc(c, n, d);
          break;
        case "selectionchange":
          if (uv) break;
        case "keydown":
        case "keyup":
          jc(c, n, d);
      }
      var A;
      if (su)
        e: {
          switch (t) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
      else
        bn
          ? _h(t, n) && (R = "onCompositionEnd")
          : t === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R &&
        (gh &&
          n.locale !== "ko" &&
          (bn || R !== "onCompositionStart"
            ? R === "onCompositionEnd" && bn && (A = mh())
            : ((Mt = d),
              (nu = "value" in Mt ? Mt.value : Mt.textContent),
              (bn = !0))),
        (T = Ps(u, R)),
        0 < T.length &&
          ((R = new Pc(R, t, null, n, d)),
          c.push({ event: R, listeners: T }),
          A ? (R.data = A) : ((A = vh(n)), A !== null && (R.data = A)))),
        (A = X_ ? J_(t, n) : Z_(t, n)) &&
          ((u = Ps(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new Pc("onBeforeInput", "beforeinput", null, n, d)),
            c.push({ event: d, listeners: u }),
            (d.data = A)));
    }
    Rh(c, e);
  });
}
function li(t, e, n) {
  return { instance: t, listener: e, currentTarget: n };
}
function Ps(t, e) {
  for (var n = e + "Capture", r = []; t !== null; ) {
    var i = t,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = ei(t, n)),
      s != null && r.unshift(li(t, s, i)),
      (s = ei(t, e)),
      s != null && r.push(li(t, s, i))),
      (t = t.return);
  }
  return r;
}
function Dn(t) {
  if (t === null) return null;
  do t = t.return;
  while (t && t.tag !== 5);
  return t || null;
}
function Vc(t, e, n, r, i) {
  for (var s = e._reactName, o = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((a = ei(n, s)), a != null && o.unshift(li(n, a, l)))
        : i || ((a = ei(n, s)), a != null && o.push(li(n, a, l)))),
      (n = n.return);
  }
  o.length !== 0 && t.push({ event: e, listeners: o });
}
var hv = /\r\n?/g,
  pv = /\u0000|\uFFFD/g;
function Hc(t) {
  return (typeof t == "string" ? t : "" + t)
    .replace(
      hv,
      `
`
    )
    .replace(pv, "");
}
function ts(t, e, n) {
  if (((e = Hc(e)), Hc(t) !== e && n)) throw Error(E(425));
}
function Os() {}
var $l = null,
  Yl = null;
function ql(t, e) {
  return (
    t === "textarea" ||
    t === "noscript" ||
    typeof e.children == "string" ||
    typeof e.children == "number" ||
    (typeof e.dangerouslySetInnerHTML == "object" &&
      e.dangerouslySetInnerHTML !== null &&
      e.dangerouslySetInnerHTML.__html != null)
  );
}
var Xl = typeof setTimeout == "function" ? setTimeout : void 0,
  mv = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Gc = typeof Promise == "function" ? Promise : void 0,
  gv =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Gc < "u"
      ? function (t) {
          return Gc.resolve(null).then(t).catch(_v);
        }
      : Xl;
function _v(t) {
  setTimeout(function () {
    throw t;
  });
}
function il(t, e) {
  var n = e,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((t.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          t.removeChild(i), ri(e);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  ri(e);
}
function Bt(t) {
  for (; t != null; t = t.nextSibling) {
    var e = t.nodeType;
    if (e === 1 || e === 3) break;
    if (e === 8) {
      if (((e = t.data), e === "$" || e === "$!" || e === "$?")) break;
      if (e === "/$") return null;
    }
  }
  return t;
}
function Kc(t) {
  t = t.previousSibling;
  for (var e = 0; t; ) {
    if (t.nodeType === 8) {
      var n = t.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (e === 0) return t;
        e--;
      } else n === "/$" && e++;
    }
    t = t.previousSibling;
  }
  return null;
}
var _r = Math.random().toString(36).slice(2),
  ut = "__reactFiber$" + _r,
  ai = "__reactProps$" + _r,
  Ct = "__reactContainer$" + _r,
  Jl = "__reactEvents$" + _r,
  vv = "__reactListeners$" + _r,
  yv = "__reactHandles$" + _r;
function pn(t) {
  var e = t[ut];
  if (e) return e;
  for (var n = t.parentNode; n; ) {
    if ((e = n[Ct] || n[ut])) {
      if (
        ((n = e.alternate),
        e.child !== null || (n !== null && n.child !== null))
      )
        for (t = Kc(t); t !== null; ) {
          if ((n = t[ut])) return n;
          t = Kc(t);
        }
      return e;
    }
    (t = n), (n = t.parentNode);
  }
  return null;
}
function Pi(t) {
  return (
    (t = t[ut] || t[Ct]),
    !t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3) ? null : t
  );
}
function jn(t) {
  if (t.tag === 5 || t.tag === 6) return t.stateNode;
  throw Error(E(33));
}
function vo(t) {
  return t[ai] || null;
}
var Zl = [],
  Bn = -1;
function rn(t) {
  return { current: t };
}
function Y(t) {
  0 > Bn || ((t.current = Zl[Bn]), (Zl[Bn] = null), Bn--);
}
function G(t, e) {
  Bn++, (Zl[Bn] = t.current), (t.current = e);
}
var Jt = {},
  Ie = rn(Jt),
  De = rn(!1),
  wn = Jt;
function sr(t, e) {
  var n = t.type.contextTypes;
  if (!n) return Jt;
  var r = t.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = e[s];
  return (
    r &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = e),
      (t.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Le(t) {
  return (t = t.childContextTypes), t != null;
}
function Ds() {
  Y(De), Y(Ie);
}
function Qc(t, e, n) {
  if (Ie.current !== Jt) throw Error(E(168));
  G(Ie, e), G(De, n);
}
function Oh(t, e, n) {
  var r = t.stateNode;
  if (((e = e.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in e)) throw Error(E(108, r_(t) || "Unknown", i));
  return Z({}, n, r);
}
function Ls(t) {
  return (
    (t =
      ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || Jt),
    (wn = Ie.current),
    G(Ie, t),
    G(De, De.current),
    !0
  );
}
function $c(t, e, n) {
  var r = t.stateNode;
  if (!r) throw Error(E(169));
  n
    ? ((t = Oh(t, e, wn)),
      (r.__reactInternalMemoizedMergedChildContext = t),
      Y(De),
      Y(Ie),
      G(Ie, t))
    : Y(De),
    G(De, n);
}
var mt = null,
  yo = !1,
  sl = !1;
function Dh(t) {
  mt === null ? (mt = [t]) : mt.push(t);
}
function wv(t) {
  (yo = !0), Dh(t);
}
function sn() {
  if (!sl && mt !== null) {
    sl = !0;
    var t = 0,
      e = B;
    try {
      var n = mt;
      for (B = 1; t < n.length; t++) {
        var r = n[t];
        do r = r(!0);
        while (r !== null);
      }
      (mt = null), (yo = !1);
    } catch (i) {
      throw (mt !== null && (mt = mt.slice(t + 1)), ih(Ja, sn), i);
    } finally {
      (B = e), (sl = !1);
    }
  }
  return null;
}
var Wn = [],
  Vn = 0,
  Ms = null,
  Fs = 0,
  He = [],
  Ge = 0,
  En = null,
  gt = 1,
  _t = "";
function cn(t, e) {
  (Wn[Vn++] = Fs), (Wn[Vn++] = Ms), (Ms = t), (Fs = e);
}
function Lh(t, e, n) {
  (He[Ge++] = gt), (He[Ge++] = _t), (He[Ge++] = En), (En = t);
  var r = gt;
  t = _t;
  var i = 32 - rt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - rt(e) + i;
  if (30 < s) {
    var o = i - (i % 5);
    (s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (gt = (1 << (32 - rt(e) + i)) | (n << i) | r),
      (_t = s + t);
  } else (gt = (1 << s) | (n << i) | r), (_t = t);
}
function lu(t) {
  t.return !== null && (cn(t, 1), Lh(t, 1, 0));
}
function au(t) {
  for (; t === Ms; )
    (Ms = Wn[--Vn]), (Wn[Vn] = null), (Fs = Wn[--Vn]), (Wn[Vn] = null);
  for (; t === En; )
    (En = He[--Ge]),
      (He[Ge] = null),
      (_t = He[--Ge]),
      (He[Ge] = null),
      (gt = He[--Ge]),
      (He[Ge] = null);
}
var Ue = null,
  ze = null,
  q = !1,
  Ze = null;
function Mh(t, e) {
  var n = Ke(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = e),
    (n.return = t),
    (e = t.deletions),
    e === null ? ((t.deletions = [n]), (t.flags |= 16)) : e.push(n);
}
function Yc(t, e) {
  switch (t.tag) {
    case 5:
      var n = t.type;
      return (
        (e =
          e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase()
            ? null
            : e),
        e !== null
          ? ((t.stateNode = e), (Ue = t), (ze = Bt(e.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (e = t.pendingProps === "" || e.nodeType !== 3 ? null : e),
        e !== null ? ((t.stateNode = e), (Ue = t), (ze = null), !0) : !1
      );
    case 13:
      return (
        (e = e.nodeType !== 8 ? null : e),
        e !== null
          ? ((n = En !== null ? { id: gt, overflow: _t } : null),
            (t.memoizedState = {
              dehydrated: e,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ke(18, null, null, 0)),
            (n.stateNode = e),
            (n.return = t),
            (t.child = n),
            (Ue = t),
            (ze = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ea(t) {
  return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function ta(t) {
  if (q) {
    var e = ze;
    if (e) {
      var n = e;
      if (!Yc(t, e)) {
        if (ea(t)) throw Error(E(418));
        e = Bt(n.nextSibling);
        var r = Ue;
        e && Yc(t, e)
          ? Mh(r, n)
          : ((t.flags = (t.flags & -4097) | 2), (q = !1), (Ue = t));
      }
    } else {
      if (ea(t)) throw Error(E(418));
      (t.flags = (t.flags & -4097) | 2), (q = !1), (Ue = t);
    }
  }
}
function qc(t) {
  for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
    t = t.return;
  Ue = t;
}
function ns(t) {
  if (t !== Ue) return !1;
  if (!q) return qc(t), (q = !0), !1;
  var e;
  if (
    ((e = t.tag !== 3) &&
      !(e = t.tag !== 5) &&
      ((e = t.type),
      (e = e !== "head" && e !== "body" && !ql(t.type, t.memoizedProps))),
    e && (e = ze))
  ) {
    if (ea(t)) throw (Fh(), Error(E(418)));
    for (; e; ) Mh(t, e), (e = Bt(e.nextSibling));
  }
  if ((qc(t), t.tag === 13)) {
    if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
      throw Error(E(317));
    e: {
      for (t = t.nextSibling, e = 0; t; ) {
        if (t.nodeType === 8) {
          var n = t.data;
          if (n === "/$") {
            if (e === 0) {
              ze = Bt(t.nextSibling);
              break e;
            }
            e--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || e++;
        }
        t = t.nextSibling;
      }
      ze = null;
    }
  } else ze = Ue ? Bt(t.stateNode.nextSibling) : null;
  return !0;
}
function Fh() {
  for (var t = ze; t; ) t = Bt(t.nextSibling);
}
function or() {
  (ze = Ue = null), (q = !1);
}
function uu(t) {
  Ze === null ? (Ze = [t]) : Ze.push(t);
}
var Ev = kt.ReactCurrentBatchConfig;
function kr(t, e, n) {
  if (
    ((t = n.ref), t !== null && typeof t != "function" && typeof t != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(E(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(E(147, t));
      var i = r,
        s = "" + t;
      return e !== null &&
        e.ref !== null &&
        typeof e.ref == "function" &&
        e.ref._stringRef === s
        ? e.ref
        : ((e = function (o) {
            var l = i.refs;
            o === null ? delete l[s] : (l[s] = o);
          }),
          (e._stringRef = s),
          e);
    }
    if (typeof t != "string") throw Error(E(284));
    if (!n._owner) throw Error(E(290, t));
  }
  return t;
}
function rs(t, e) {
  throw (
    ((t = Object.prototype.toString.call(e)),
    Error(
      E(
        31,
        t === "[object Object]"
          ? "object with keys {" + Object.keys(e).join(", ") + "}"
          : t
      )
    ))
  );
}
function Xc(t) {
  var e = t._init;
  return e(t._payload);
}
function bh(t) {
  function e(m, h) {
    if (t) {
      var p = m.deletions;
      p === null ? ((m.deletions = [h]), (m.flags |= 16)) : p.push(h);
    }
  }
  function n(m, h) {
    if (!t) return null;
    for (; h !== null; ) e(m, h), (h = h.sibling);
    return null;
  }
  function r(m, h) {
    for (m = new Map(); h !== null; )
      h.key !== null ? m.set(h.key, h) : m.set(h.index, h), (h = h.sibling);
    return m;
  }
  function i(m, h) {
    return (m = Gt(m, h)), (m.index = 0), (m.sibling = null), m;
  }
  function s(m, h, p) {
    return (
      (m.index = p),
      t
        ? ((p = m.alternate),
          p !== null
            ? ((p = p.index), p < h ? ((m.flags |= 2), h) : p)
            : ((m.flags |= 2), h))
        : ((m.flags |= 1048576), h)
    );
  }
  function o(m) {
    return t && m.alternate === null && (m.flags |= 2), m;
  }
  function l(m, h, p, v) {
    return h === null || h.tag !== 6
      ? ((h = fl(p, m.mode, v)), (h.return = m), h)
      : ((h = i(h, p)), (h.return = m), h);
  }
  function a(m, h, p, v) {
    var w = p.type;
    return w === Fn
      ? d(m, h, p.props.children, v, p.key)
      : h !== null &&
        (h.elementType === w ||
          (typeof w == "object" &&
            w !== null &&
            w.$$typeof === Pt &&
            Xc(w) === h.type))
      ? ((v = i(h, p.props)), (v.ref = kr(m, h, p)), (v.return = m), v)
      : ((v = Es(p.type, p.key, p.props, null, m.mode, v)),
        (v.ref = kr(m, h, p)),
        (v.return = m),
        v);
  }
  function u(m, h, p, v) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== p.containerInfo ||
      h.stateNode.implementation !== p.implementation
      ? ((h = hl(p, m.mode, v)), (h.return = m), h)
      : ((h = i(h, p.children || [])), (h.return = m), h);
  }
  function d(m, h, p, v, w) {
    return h === null || h.tag !== 7
      ? ((h = yn(p, m.mode, v, w)), (h.return = m), h)
      : ((h = i(h, p)), (h.return = m), h);
  }
  function c(m, h, p) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = fl("" + h, m.mode, p)), (h.return = m), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Ki:
          return (
            (p = Es(h.type, h.key, h.props, null, m.mode, p)),
            (p.ref = kr(m, null, h)),
            (p.return = m),
            p
          );
        case Mn:
          return (h = hl(h, m.mode, p)), (h.return = m), h;
        case Pt:
          var v = h._init;
          return c(m, v(h._payload), p);
      }
      if (Mr(h) || Cr(h))
        return (h = yn(h, m.mode, p, null)), (h.return = m), h;
      rs(m, h);
    }
    return null;
  }
  function f(m, h, p, v) {
    var w = h !== null ? h.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return w !== null ? null : l(m, h, "" + p, v);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Ki:
          return p.key === w ? a(m, h, p, v) : null;
        case Mn:
          return p.key === w ? u(m, h, p, v) : null;
        case Pt:
          return (w = p._init), f(m, h, w(p._payload), v);
      }
      if (Mr(p) || Cr(p)) return w !== null ? null : d(m, h, p, v, null);
      rs(m, p);
    }
    return null;
  }
  function g(m, h, p, v, w) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (m = m.get(p) || null), l(h, m, "" + v, w);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Ki:
          return (m = m.get(v.key === null ? p : v.key) || null), a(h, m, v, w);
        case Mn:
          return (m = m.get(v.key === null ? p : v.key) || null), u(h, m, v, w);
        case Pt:
          var T = v._init;
          return g(m, h, p, T(v._payload), w);
      }
      if (Mr(v) || Cr(v)) return (m = m.get(p) || null), d(h, m, v, w, null);
      rs(h, v);
    }
    return null;
  }
  function _(m, h, p, v) {
    for (
      var w = null, T = null, A = h, R = (h = 0), K = null;
      A !== null && R < p.length;
      R++
    ) {
      A.index > R ? ((K = A), (A = null)) : (K = A.sibling);
      var D = f(m, A, p[R], v);
      if (D === null) {
        A === null && (A = K);
        break;
      }
      t && A && D.alternate === null && e(m, A),
        (h = s(D, h, R)),
        T === null ? (w = D) : (T.sibling = D),
        (T = D),
        (A = K);
    }
    if (R === p.length) return n(m, A), q && cn(m, R), w;
    if (A === null) {
      for (; R < p.length; R++)
        (A = c(m, p[R], v)),
          A !== null &&
            ((h = s(A, h, R)), T === null ? (w = A) : (T.sibling = A), (T = A));
      return q && cn(m, R), w;
    }
    for (A = r(m, A); R < p.length; R++)
      (K = g(A, m, R, p[R], v)),
        K !== null &&
          (t && K.alternate !== null && A.delete(K.key === null ? R : K.key),
          (h = s(K, h, R)),
          T === null ? (w = K) : (T.sibling = K),
          (T = K));
    return (
      t &&
        A.forEach(function (me) {
          return e(m, me);
        }),
      q && cn(m, R),
      w
    );
  }
  function y(m, h, p, v) {
    var w = Cr(p);
    if (typeof w != "function") throw Error(E(150));
    if (((p = w.call(p)), p == null)) throw Error(E(151));
    for (
      var T = (w = null), A = h, R = (h = 0), K = null, D = p.next();
      A !== null && !D.done;
      R++, D = p.next()
    ) {
      A.index > R ? ((K = A), (A = null)) : (K = A.sibling);
      var me = f(m, A, D.value, v);
      if (me === null) {
        A === null && (A = K);
        break;
      }
      t && A && me.alternate === null && e(m, A),
        (h = s(me, h, R)),
        T === null ? (w = me) : (T.sibling = me),
        (T = me),
        (A = K);
    }
    if (D.done) return n(m, A), q && cn(m, R), w;
    if (A === null) {
      for (; !D.done; R++, D = p.next())
        (D = c(m, D.value, v)),
          D !== null &&
            ((h = s(D, h, R)), T === null ? (w = D) : (T.sibling = D), (T = D));
      return q && cn(m, R), w;
    }
    for (A = r(m, A); !D.done; R++, D = p.next())
      (D = g(A, m, R, D.value, v)),
        D !== null &&
          (t && D.alternate !== null && A.delete(D.key === null ? R : D.key),
          (h = s(D, h, R)),
          T === null ? (w = D) : (T.sibling = D),
          (T = D));
    return (
      t &&
        A.forEach(function (ft) {
          return e(m, ft);
        }),
      q && cn(m, R),
      w
    );
  }
  function C(m, h, p, v) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === Fn &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case Ki:
          e: {
            for (var w = p.key, T = h; T !== null; ) {
              if (T.key === w) {
                if (((w = p.type), w === Fn)) {
                  if (T.tag === 7) {
                    n(m, T.sibling),
                      (h = i(T, p.props.children)),
                      (h.return = m),
                      (m = h);
                    break e;
                  }
                } else if (
                  T.elementType === w ||
                  (typeof w == "object" &&
                    w !== null &&
                    w.$$typeof === Pt &&
                    Xc(w) === T.type)
                ) {
                  n(m, T.sibling),
                    (h = i(T, p.props)),
                    (h.ref = kr(m, T, p)),
                    (h.return = m),
                    (m = h);
                  break e;
                }
                n(m, T);
                break;
              } else e(m, T);
              T = T.sibling;
            }
            p.type === Fn
              ? ((h = yn(p.props.children, m.mode, v, p.key)),
                (h.return = m),
                (m = h))
              : ((v = Es(p.type, p.key, p.props, null, m.mode, v)),
                (v.ref = kr(m, h, p)),
                (v.return = m),
                (m = v));
          }
          return o(m);
        case Mn:
          e: {
            for (T = p.key; h !== null; ) {
              if (h.key === T)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === p.containerInfo &&
                  h.stateNode.implementation === p.implementation
                ) {
                  n(m, h.sibling),
                    (h = i(h, p.children || [])),
                    (h.return = m),
                    (m = h);
                  break e;
                } else {
                  n(m, h);
                  break;
                }
              else e(m, h);
              h = h.sibling;
            }
            (h = hl(p, m.mode, v)), (h.return = m), (m = h);
          }
          return o(m);
        case Pt:
          return (T = p._init), C(m, h, T(p._payload), v);
      }
      if (Mr(p)) return _(m, h, p, v);
      if (Cr(p)) return y(m, h, p, v);
      rs(m, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        h !== null && h.tag === 6
          ? (n(m, h.sibling), (h = i(h, p)), (h.return = m), (m = h))
          : (n(m, h), (h = fl(p, m.mode, v)), (h.return = m), (m = h)),
        o(m))
      : n(m, h);
  }
  return C;
}
var lr = bh(!0),
  zh = bh(!1),
  bs = rn(null),
  zs = null,
  Hn = null,
  cu = null;
function du() {
  cu = Hn = zs = null;
}
function fu(t) {
  var e = bs.current;
  Y(bs), (t._currentValue = e);
}
function na(t, e, n) {
  for (; t !== null; ) {
    var r = t.alternate;
    if (
      ((t.childLanes & e) !== e
        ? ((t.childLanes |= e), r !== null && (r.childLanes |= e))
        : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e),
      t === n)
    )
      break;
    t = t.return;
  }
}
function Zn(t, e) {
  (zs = t),
    (cu = Hn = null),
    (t = t.dependencies),
    t !== null &&
      t.firstContext !== null &&
      (t.lanes & e && (Pe = !0), (t.firstContext = null));
}
function $e(t) {
  var e = t._currentValue;
  if (cu !== t)
    if (((t = { context: t, memoizedValue: e, next: null }), Hn === null)) {
      if (zs === null) throw Error(E(308));
      (Hn = t), (zs.dependencies = { lanes: 0, firstContext: t });
    } else Hn = Hn.next = t;
  return e;
}
var mn = null;
function hu(t) {
  mn === null ? (mn = [t]) : mn.push(t);
}
function Uh(t, e, n, r) {
  var i = e.interleaved;
  return (
    i === null ? ((n.next = n), hu(e)) : ((n.next = i.next), (i.next = n)),
    (e.interleaved = n),
    St(t, r)
  );
}
function St(t, e) {
  t.lanes |= e;
  var n = t.alternate;
  for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null; )
    (t.childLanes |= e),
      (n = t.alternate),
      n !== null && (n.childLanes |= e),
      (n = t),
      (t = t.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Ot = !1;
function pu(t) {
  t.updateQueue = {
    baseState: t.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function jh(t, e) {
  (t = t.updateQueue),
    e.updateQueue === t &&
      (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects,
      });
}
function yt(t, e) {
  return {
    eventTime: t,
    lane: e,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Wt(t, e, n) {
  var r = t.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), U & 2)) {
    var i = r.pending;
    return (
      i === null ? (e.next = e) : ((e.next = i.next), (i.next = e)),
      (r.pending = e),
      St(t, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((e.next = e), hu(r)) : ((e.next = i.next), (i.next = e)),
    (r.interleaved = e),
    St(t, n)
  );
}
function ms(t, e, n) {
  if (
    ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194240) !== 0))
  ) {
    var r = e.lanes;
    (r &= t.pendingLanes), (n |= r), (e.lanes = n), Za(t, n);
  }
}
function Jc(t, e) {
  var n = t.updateQueue,
    r = t.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (i = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = e) : (s = s.next = e);
    } else i = s = e;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (t.updateQueue = n);
    return;
  }
  (t = n.lastBaseUpdate),
    t === null ? (n.firstBaseUpdate = e) : (t.next = e),
    (n.lastBaseUpdate = e);
}
function Us(t, e, n, r) {
  var i = t.updateQueue;
  Ot = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), o === null ? (s = u) : (o.next = u), (o = a);
    var d = t.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (l = d.lastBaseUpdate),
      l !== o &&
        (l === null ? (d.firstBaseUpdate = u) : (l.next = u),
        (d.lastBaseUpdate = a)));
  }
  if (s !== null) {
    var c = i.baseState;
    (o = 0), (d = u = a = null), (l = s);
    do {
      var f = l.lane,
        g = l.eventTime;
      if ((r & f) === f) {
        d !== null &&
          (d = d.next =
            {
              eventTime: g,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var _ = t,
            y = l;
          switch (((f = e), (g = n), y.tag)) {
            case 1:
              if (((_ = y.payload), typeof _ == "function")) {
                c = _.call(g, c, f);
                break e;
              }
              c = _;
              break e;
            case 3:
              _.flags = (_.flags & -65537) | 128;
            case 0:
              if (
                ((_ = y.payload),
                (f = typeof _ == "function" ? _.call(g, c, f) : _),
                f == null)
              )
                break e;
              c = Z({}, c, f);
              break e;
            case 2:
              Ot = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((t.flags |= 64),
          (f = i.effects),
          f === null ? (i.effects = [l]) : f.push(l));
      } else
        (g = {
          eventTime: g,
          lane: f,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          d === null ? ((u = d = g), (a = c)) : (d = d.next = g),
          (o |= f);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (f = l),
          (l = f.next),
          (f.next = null),
          (i.lastBaseUpdate = f),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (a = c),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = d),
      (e = i.shared.interleaved),
      e !== null)
    ) {
      i = e;
      do (o |= i.lane), (i = i.next);
      while (i !== e);
    } else s === null && (i.shared.lanes = 0);
    (Sn |= o), (t.lanes = o), (t.memoizedState = c);
  }
}
function Zc(t, e, n) {
  if (((t = e.effects), (e.effects = null), t !== null))
    for (e = 0; e < t.length; e++) {
      var r = t[e],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(E(191, i));
        i.call(r);
      }
    }
}
var Oi = {},
  dt = rn(Oi),
  ui = rn(Oi),
  ci = rn(Oi);
function gn(t) {
  if (t === Oi) throw Error(E(174));
  return t;
}
function mu(t, e) {
  switch ((G(ci, e), G(ui, t), G(dt, Oi), (t = e.nodeType), t)) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : Fl(null, "");
      break;
    default:
      (t = t === 8 ? e.parentNode : e),
        (e = t.namespaceURI || null),
        (t = t.tagName),
        (e = Fl(e, t));
  }
  Y(dt), G(dt, e);
}
function ar() {
  Y(dt), Y(ui), Y(ci);
}
function Bh(t) {
  gn(ci.current);
  var e = gn(dt.current),
    n = Fl(e, t.type);
  e !== n && (G(ui, t), G(dt, n));
}
function gu(t) {
  ui.current === t && (Y(dt), Y(ui));
}
var X = rn(0);
function js(t) {
  for (var e = t; e !== null; ) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return e;
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128) return e;
    } else if (e.child !== null) {
      (e.child.return = e), (e = e.child);
      continue;
    }
    if (e === t) break;
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === t) return null;
      e = e.return;
    }
    (e.sibling.return = e.return), (e = e.sibling);
  }
  return null;
}
var ol = [];
function _u() {
  for (var t = 0; t < ol.length; t++)
    ol[t]._workInProgressVersionPrimary = null;
  ol.length = 0;
}
var gs = kt.ReactCurrentDispatcher,
  ll = kt.ReactCurrentBatchConfig,
  Cn = 0,
  J = null,
  oe = null,
  fe = null,
  Bs = !1,
  Vr = !1,
  di = 0,
  Cv = 0;
function we() {
  throw Error(E(321));
}
function vu(t, e) {
  if (e === null) return !1;
  for (var n = 0; n < e.length && n < t.length; n++)
    if (!ot(t[n], e[n])) return !1;
  return !0;
}
function yu(t, e, n, r, i, s) {
  if (
    ((Cn = s),
    (J = e),
    (e.memoizedState = null),
    (e.updateQueue = null),
    (e.lanes = 0),
    (gs.current = t === null || t.memoizedState === null ? Tv : kv),
    (t = n(r, i)),
    Vr)
  ) {
    s = 0;
    do {
      if (((Vr = !1), (di = 0), 25 <= s)) throw Error(E(301));
      (s += 1),
        (fe = oe = null),
        (e.updateQueue = null),
        (gs.current = Nv),
        (t = n(r, i));
    } while (Vr);
  }
  if (
    ((gs.current = Ws),
    (e = oe !== null && oe.next !== null),
    (Cn = 0),
    (fe = oe = J = null),
    (Bs = !1),
    e)
  )
    throw Error(E(300));
  return t;
}
function wu() {
  var t = di !== 0;
  return (di = 0), t;
}
function at() {
  var t = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return fe === null ? (J.memoizedState = fe = t) : (fe = fe.next = t), fe;
}
function Ye() {
  if (oe === null) {
    var t = J.alternate;
    t = t !== null ? t.memoizedState : null;
  } else t = oe.next;
  var e = fe === null ? J.memoizedState : fe.next;
  if (e !== null) (fe = e), (oe = t);
  else {
    if (t === null) throw Error(E(310));
    (oe = t),
      (t = {
        memoizedState: oe.memoizedState,
        baseState: oe.baseState,
        baseQueue: oe.baseQueue,
        queue: oe.queue,
        next: null,
      }),
      fe === null ? (J.memoizedState = fe = t) : (fe = fe.next = t);
  }
  return fe;
}
function fi(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function al(t) {
  var e = Ye(),
    n = e.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = t;
  var r = oe,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = s.next), (s.next = o);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var l = (o = null),
      a = null,
      u = s;
    do {
      var d = u.lane;
      if ((Cn & d) === d)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : t(r, u.action));
      else {
        var c = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = c), (o = r)) : (a = a.next = c),
          (J.lanes |= d),
          (Sn |= d);
      }
      u = u.next;
    } while (u !== null && u !== s);
    a === null ? (o = r) : (a.next = l),
      ot(r, e.memoizedState) || (Pe = !0),
      (e.memoizedState = r),
      (e.baseState = o),
      (e.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((t = n.interleaved), t !== null)) {
    i = t;
    do (s = i.lane), (J.lanes |= s), (Sn |= s), (i = i.next);
    while (i !== t);
  } else i === null && (n.lanes = 0);
  return [e.memoizedState, n.dispatch];
}
function ul(t) {
  var e = Ye(),
    n = e.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = t;
  var r = n.dispatch,
    i = n.pending,
    s = e.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (s = t(s, o.action)), (o = o.next);
    while (o !== i);
    ot(s, e.memoizedState) || (Pe = !0),
      (e.memoizedState = s),
      e.baseQueue === null && (e.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function Wh() {}
function Vh(t, e) {
  var n = J,
    r = Ye(),
    i = e(),
    s = !ot(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (Pe = !0)),
    (r = r.queue),
    Eu(Kh.bind(null, n, r, t), [t]),
    r.getSnapshot !== e || s || (fe !== null && fe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      hi(9, Gh.bind(null, n, r, i, e), void 0, null),
      pe === null)
    )
      throw Error(E(349));
    Cn & 30 || Hh(n, e, i);
  }
  return i;
}
function Hh(t, e, n) {
  (t.flags |= 16384),
    (t = { getSnapshot: e, value: n }),
    (e = J.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (J.updateQueue = e),
        (e.stores = [t]))
      : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
}
function Gh(t, e, n, r) {
  (e.value = n), (e.getSnapshot = r), Qh(e) && $h(t);
}
function Kh(t, e, n) {
  return n(function () {
    Qh(e) && $h(t);
  });
}
function Qh(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var n = e();
    return !ot(t, n);
  } catch {
    return !0;
  }
}
function $h(t) {
  var e = St(t, 1);
  e !== null && it(e, t, 1, -1);
}
function ed(t) {
  var e = at();
  return (
    typeof t == "function" && (t = t()),
    (e.memoizedState = e.baseState = t),
    (t = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: fi,
      lastRenderedState: t,
    }),
    (e.queue = t),
    (t = t.dispatch = xv.bind(null, J, t)),
    [e.memoizedState, t]
  );
}
function hi(t, e, n, r) {
  return (
    (t = { tag: t, create: e, destroy: n, deps: r, next: null }),
    (e = J.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (J.updateQueue = e),
        (e.lastEffect = t.next = t))
      : ((n = e.lastEffect),
        n === null
          ? (e.lastEffect = t.next = t)
          : ((r = n.next), (n.next = t), (t.next = r), (e.lastEffect = t))),
    t
  );
}
function Yh() {
  return Ye().memoizedState;
}
function _s(t, e, n, r) {
  var i = at();
  (J.flags |= t),
    (i.memoizedState = hi(1 | e, n, void 0, r === void 0 ? null : r));
}
function wo(t, e, n, r) {
  var i = Ye();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (oe !== null) {
    var o = oe.memoizedState;
    if (((s = o.destroy), r !== null && vu(r, o.deps))) {
      i.memoizedState = hi(e, n, s, r);
      return;
    }
  }
  (J.flags |= t), (i.memoizedState = hi(1 | e, n, s, r));
}
function td(t, e) {
  return _s(8390656, 8, t, e);
}
function Eu(t, e) {
  return wo(2048, 8, t, e);
}
function qh(t, e) {
  return wo(4, 2, t, e);
}
function Xh(t, e) {
  return wo(4, 4, t, e);
}
function Jh(t, e) {
  if (typeof e == "function")
    return (
      (t = t()),
      e(t),
      function () {
        e(null);
      }
    );
  if (e != null)
    return (
      (t = t()),
      (e.current = t),
      function () {
        e.current = null;
      }
    );
}
function Zh(t, e, n) {
  return (
    (n = n != null ? n.concat([t]) : null), wo(4, 4, Jh.bind(null, e, t), n)
  );
}
function Cu() {}
function ep(t, e) {
  var n = Ye();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && vu(e, r[1])
    ? r[0]
    : ((n.memoizedState = [t, e]), t);
}
function tp(t, e) {
  var n = Ye();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && vu(e, r[1])
    ? r[0]
    : ((t = t()), (n.memoizedState = [t, e]), t);
}
function np(t, e, n) {
  return Cn & 21
    ? (ot(n, e) || ((n = lh()), (J.lanes |= n), (Sn |= n), (t.baseState = !0)),
      e)
    : (t.baseState && ((t.baseState = !1), (Pe = !0)), (t.memoizedState = n));
}
function Sv(t, e) {
  var n = B;
  (B = n !== 0 && 4 > n ? n : 4), t(!0);
  var r = ll.transition;
  ll.transition = {};
  try {
    t(!1), e();
  } finally {
    (B = n), (ll.transition = r);
  }
}
function rp() {
  return Ye().memoizedState;
}
function Iv(t, e, n) {
  var r = Ht(t);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ip(t))
  )
    sp(e, n);
  else if (((n = Uh(t, e, n, r)), n !== null)) {
    var i = ke();
    it(n, t, r, i), op(n, e, r);
  }
}
function xv(t, e, n) {
  var r = Ht(t),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ip(t)) sp(e, i);
  else {
    var s = t.alternate;
    if (
      t.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = e.lastRenderedReducer), s !== null)
    )
      try {
        var o = e.lastRenderedState,
          l = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), ot(l, o))) {
          var a = e.interleaved;
          a === null
            ? ((i.next = i), hu(e))
            : ((i.next = a.next), (a.next = i)),
            (e.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Uh(t, e, i, r)),
      n !== null && ((i = ke()), it(n, t, r, i), op(n, e, r));
  }
}
function ip(t) {
  var e = t.alternate;
  return t === J || (e !== null && e === J);
}
function sp(t, e) {
  Vr = Bs = !0;
  var n = t.pending;
  n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
    (t.pending = e);
}
function op(t, e, n) {
  if (n & 4194240) {
    var r = e.lanes;
    (r &= t.pendingLanes), (n |= r), (e.lanes = n), Za(t, n);
  }
}
var Ws = {
    readContext: $e,
    useCallback: we,
    useContext: we,
    useEffect: we,
    useImperativeHandle: we,
    useInsertionEffect: we,
    useLayoutEffect: we,
    useMemo: we,
    useReducer: we,
    useRef: we,
    useState: we,
    useDebugValue: we,
    useDeferredValue: we,
    useTransition: we,
    useMutableSource: we,
    useSyncExternalStore: we,
    useId: we,
    unstable_isNewReconciler: !1,
  },
  Tv = {
    readContext: $e,
    useCallback: function (t, e) {
      return (at().memoizedState = [t, e === void 0 ? null : e]), t;
    },
    useContext: $e,
    useEffect: td,
    useImperativeHandle: function (t, e, n) {
      return (
        (n = n != null ? n.concat([t]) : null),
        _s(4194308, 4, Jh.bind(null, e, t), n)
      );
    },
    useLayoutEffect: function (t, e) {
      return _s(4194308, 4, t, e);
    },
    useInsertionEffect: function (t, e) {
      return _s(4, 2, t, e);
    },
    useMemo: function (t, e) {
      var n = at();
      return (
        (e = e === void 0 ? null : e), (t = t()), (n.memoizedState = [t, e]), t
      );
    },
    useReducer: function (t, e, n) {
      var r = at();
      return (
        (e = n !== void 0 ? n(e) : e),
        (r.memoizedState = r.baseState = e),
        (t = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: e,
        }),
        (r.queue = t),
        (t = t.dispatch = Iv.bind(null, J, t)),
        [r.memoizedState, t]
      );
    },
    useRef: function (t) {
      var e = at();
      return (t = { current: t }), (e.memoizedState = t);
    },
    useState: ed,
    useDebugValue: Cu,
    useDeferredValue: function (t) {
      return (at().memoizedState = t);
    },
    useTransition: function () {
      var t = ed(!1),
        e = t[0];
      return (t = Sv.bind(null, t[1])), (at().memoizedState = t), [e, t];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (t, e, n) {
      var r = J,
        i = at();
      if (q) {
        if (n === void 0) throw Error(E(407));
        n = n();
      } else {
        if (((n = e()), pe === null)) throw Error(E(349));
        Cn & 30 || Hh(r, e, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: e };
      return (
        (i.queue = s),
        td(Kh.bind(null, r, s, t), [t]),
        (r.flags |= 2048),
        hi(9, Gh.bind(null, r, s, n, e), void 0, null),
        n
      );
    },
    useId: function () {
      var t = at(),
        e = pe.identifierPrefix;
      if (q) {
        var n = _t,
          r = gt;
        (n = (r & ~(1 << (32 - rt(r) - 1))).toString(32) + n),
          (e = ":" + e + "R" + n),
          (n = di++),
          0 < n && (e += "H" + n.toString(32)),
          (e += ":");
      } else (n = Cv++), (e = ":" + e + "r" + n.toString(32) + ":");
      return (t.memoizedState = e);
    },
    unstable_isNewReconciler: !1,
  },
  kv = {
    readContext: $e,
    useCallback: ep,
    useContext: $e,
    useEffect: Eu,
    useImperativeHandle: Zh,
    useInsertionEffect: qh,
    useLayoutEffect: Xh,
    useMemo: tp,
    useReducer: al,
    useRef: Yh,
    useState: function () {
      return al(fi);
    },
    useDebugValue: Cu,
    useDeferredValue: function (t) {
      var e = Ye();
      return np(e, oe.memoizedState, t);
    },
    useTransition: function () {
      var t = al(fi)[0],
        e = Ye().memoizedState;
      return [t, e];
    },
    useMutableSource: Wh,
    useSyncExternalStore: Vh,
    useId: rp,
    unstable_isNewReconciler: !1,
  },
  Nv = {
    readContext: $e,
    useCallback: ep,
    useContext: $e,
    useEffect: Eu,
    useImperativeHandle: Zh,
    useInsertionEffect: qh,
    useLayoutEffect: Xh,
    useMemo: tp,
    useReducer: ul,
    useRef: Yh,
    useState: function () {
      return ul(fi);
    },
    useDebugValue: Cu,
    useDeferredValue: function (t) {
      var e = Ye();
      return oe === null ? (e.memoizedState = t) : np(e, oe.memoizedState, t);
    },
    useTransition: function () {
      var t = ul(fi)[0],
        e = Ye().memoizedState;
      return [t, e];
    },
    useMutableSource: Wh,
    useSyncExternalStore: Vh,
    useId: rp,
    unstable_isNewReconciler: !1,
  };
function Xe(t, e) {
  if (t && t.defaultProps) {
    (e = Z({}, e)), (t = t.defaultProps);
    for (var n in t) e[n] === void 0 && (e[n] = t[n]);
    return e;
  }
  return e;
}
function ra(t, e, n, r) {
  (e = t.memoizedState),
    (n = n(r, e)),
    (n = n == null ? e : Z({}, e, n)),
    (t.memoizedState = n),
    t.lanes === 0 && (t.updateQueue.baseState = n);
}
var Eo = {
  isMounted: function (t) {
    return (t = t._reactInternals) ? An(t) === t : !1;
  },
  enqueueSetState: function (t, e, n) {
    t = t._reactInternals;
    var r = ke(),
      i = Ht(t),
      s = yt(r, i);
    (s.payload = e),
      n != null && (s.callback = n),
      (e = Wt(t, s, i)),
      e !== null && (it(e, t, i, r), ms(e, t, i));
  },
  enqueueReplaceState: function (t, e, n) {
    t = t._reactInternals;
    var r = ke(),
      i = Ht(t),
      s = yt(r, i);
    (s.tag = 1),
      (s.payload = e),
      n != null && (s.callback = n),
      (e = Wt(t, s, i)),
      e !== null && (it(e, t, i, r), ms(e, t, i));
  },
  enqueueForceUpdate: function (t, e) {
    t = t._reactInternals;
    var n = ke(),
      r = Ht(t),
      i = yt(n, r);
    (i.tag = 2),
      e != null && (i.callback = e),
      (e = Wt(t, i, r)),
      e !== null && (it(e, t, r, n), ms(e, t, r));
  },
};
function nd(t, e, n, r, i, s, o) {
  return (
    (t = t.stateNode),
    typeof t.shouldComponentUpdate == "function"
      ? t.shouldComponentUpdate(r, s, o)
      : e.prototype && e.prototype.isPureReactComponent
      ? !si(n, r) || !si(i, s)
      : !0
  );
}
function lp(t, e, n) {
  var r = !1,
    i = Jt,
    s = e.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = $e(s))
      : ((i = Le(e) ? wn : Ie.current),
        (r = e.contextTypes),
        (s = (r = r != null) ? sr(t, i) : Jt)),
    (e = new e(n, s)),
    (t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
    (e.updater = Eo),
    (t.stateNode = e),
    (e._reactInternals = t),
    r &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = i),
      (t.__reactInternalMemoizedMaskedChildContext = s)),
    e
  );
}
function rd(t, e, n, r) {
  (t = e.state),
    typeof e.componentWillReceiveProps == "function" &&
      e.componentWillReceiveProps(n, r),
    typeof e.UNSAFE_componentWillReceiveProps == "function" &&
      e.UNSAFE_componentWillReceiveProps(n, r),
    e.state !== t && Eo.enqueueReplaceState(e, e.state, null);
}
function ia(t, e, n, r) {
  var i = t.stateNode;
  (i.props = n), (i.state = t.memoizedState), (i.refs = {}), pu(t);
  var s = e.contextType;
  typeof s == "object" && s !== null
    ? (i.context = $e(s))
    : ((s = Le(e) ? wn : Ie.current), (i.context = sr(t, s))),
    (i.state = t.memoizedState),
    (s = e.getDerivedStateFromProps),
    typeof s == "function" && (ra(t, e, s, n), (i.state = t.memoizedState)),
    typeof e.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((e = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      e !== i.state && Eo.enqueueReplaceState(i, i.state, null),
      Us(t, n, i, r),
      (i.state = t.memoizedState)),
    typeof i.componentDidMount == "function" && (t.flags |= 4194308);
}
function ur(t, e) {
  try {
    var n = "",
      r = e;
    do (n += n_(r)), (r = r.return);
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
  return { value: t, source: e, stack: i, digest: null };
}
function cl(t, e, n) {
  return { value: t, source: null, stack: n ?? null, digest: e ?? null };
}
function sa(t, e) {
  try {
    console.error(e.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Av = typeof WeakMap == "function" ? WeakMap : Map;
function ap(t, e, n) {
  (n = yt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = e.value;
  return (
    (n.callback = function () {
      Hs || ((Hs = !0), (ma = r)), sa(t, e);
    }),
    n
  );
}
function up(t, e, n) {
  (n = yt(-1, n)), (n.tag = 3);
  var r = t.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = e.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        sa(t, e);
      });
  }
  var s = t.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        sa(t, e),
          typeof r != "function" &&
            (Vt === null ? (Vt = new Set([this])) : Vt.add(this));
        var o = e.stack;
        this.componentDidCatch(e.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function id(t, e, n) {
  var r = t.pingCache;
  if (r === null) {
    r = t.pingCache = new Av();
    var i = new Set();
    r.set(e, i);
  } else (i = r.get(e)), i === void 0 && ((i = new Set()), r.set(e, i));
  i.has(n) || (i.add(n), (t = Vv.bind(null, t, e, n)), e.then(t, t));
}
function sd(t) {
  do {
    var e;
    if (
      ((e = t.tag === 13) &&
        ((e = t.memoizedState), (e = e !== null ? e.dehydrated !== null : !0)),
      e)
    )
      return t;
    t = t.return;
  } while (t !== null);
  return null;
}
function od(t, e, n, r, i) {
  return t.mode & 1
    ? ((t.flags |= 65536), (t.lanes = i), t)
    : (t === e
        ? (t.flags |= 65536)
        : ((t.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((e = yt(-1, 1)), (e.tag = 2), Wt(n, e, 1))),
          (n.lanes |= 1)),
      t);
}
var Rv = kt.ReactCurrentOwner,
  Pe = !1;
function xe(t, e, n, r) {
  e.child = t === null ? zh(e, null, n, r) : lr(e, t.child, n, r);
}
function ld(t, e, n, r, i) {
  n = n.render;
  var s = e.ref;
  return (
    Zn(e, i),
    (r = yu(t, e, n, r, s, i)),
    (n = wu()),
    t !== null && !Pe
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~i),
        It(t, e, i))
      : (q && n && lu(e), (e.flags |= 1), xe(t, e, r, i), e.child)
  );
}
function ad(t, e, n, r, i) {
  if (t === null) {
    var s = n.type;
    return typeof s == "function" &&
      !Ru(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((e.tag = 15), (e.type = s), cp(t, e, s, r, i))
      : ((t = Es(n.type, null, r, e, e.mode, i)),
        (t.ref = e.ref),
        (t.return = e),
        (e.child = t));
  }
  if (((s = t.child), !(t.lanes & i))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : si), n(o, r) && t.ref === e.ref)
    )
      return It(t, e, i);
  }
  return (
    (e.flags |= 1),
    (t = Gt(s, r)),
    (t.ref = e.ref),
    (t.return = e),
    (e.child = t)
  );
}
function cp(t, e, n, r, i) {
  if (t !== null) {
    var s = t.memoizedProps;
    if (si(s, r) && t.ref === e.ref)
      if (((Pe = !1), (e.pendingProps = r = s), (t.lanes & i) !== 0))
        t.flags & 131072 && (Pe = !0);
      else return (e.lanes = t.lanes), It(t, e, i);
  }
  return oa(t, e, n, r, i);
}
function dp(t, e, n) {
  var r = e.pendingProps,
    i = r.children,
    s = t !== null ? t.memoizedState : null;
  if (r.mode === "hidden")
    if (!(e.mode & 1))
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        G(Kn, be),
        (be |= n);
    else {
      if (!(n & 1073741824))
        return (
          (t = s !== null ? s.baseLanes | n : n),
          (e.lanes = e.childLanes = 1073741824),
          (e.memoizedState = {
            baseLanes: t,
            cachePool: null,
            transitions: null,
          }),
          (e.updateQueue = null),
          G(Kn, be),
          (be |= t),
          null
        );
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        G(Kn, be),
        (be |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (e.memoizedState = null)) : (r = n),
      G(Kn, be),
      (be |= r);
  return xe(t, e, i, n), e.child;
}
function fp(t, e) {
  var n = e.ref;
  ((t === null && n !== null) || (t !== null && t.ref !== n)) &&
    ((e.flags |= 512), (e.flags |= 2097152));
}
function oa(t, e, n, r, i) {
  var s = Le(n) ? wn : Ie.current;
  return (
    (s = sr(e, s)),
    Zn(e, i),
    (n = yu(t, e, n, r, s, i)),
    (r = wu()),
    t !== null && !Pe
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~i),
        It(t, e, i))
      : (q && r && lu(e), (e.flags |= 1), xe(t, e, n, i), e.child)
  );
}
function ud(t, e, n, r, i) {
  if (Le(n)) {
    var s = !0;
    Ls(e);
  } else s = !1;
  if ((Zn(e, i), e.stateNode === null))
    vs(t, e), lp(e, n, r), ia(e, n, r, i), (r = !0);
  else if (t === null) {
    var o = e.stateNode,
      l = e.memoizedProps;
    o.props = l;
    var a = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = $e(u))
      : ((u = Le(n) ? wn : Ie.current), (u = sr(e, u)));
    var d = n.getDerivedStateFromProps,
      c =
        typeof d == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    c ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && rd(e, o, r, u)),
      (Ot = !1);
    var f = e.memoizedState;
    (o.state = f),
      Us(e, r, o, i),
      (a = e.memoizedState),
      l !== r || f !== a || De.current || Ot
        ? (typeof d == "function" && (ra(e, n, d, r), (a = e.memoizedState)),
          (l = Ot || nd(e, n, l, r, f, a, u))
            ? (c ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (e.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
              (e.memoizedProps = r),
              (e.memoizedState = a)),
          (o.props = r),
          (o.state = a),
          (o.context = u),
          (r = l))
        : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
          (r = !1));
  } else {
    (o = e.stateNode),
      jh(t, e),
      (l = e.memoizedProps),
      (u = e.type === e.elementType ? l : Xe(e.type, l)),
      (o.props = u),
      (c = e.pendingProps),
      (f = o.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = $e(a))
        : ((a = Le(n) ? wn : Ie.current), (a = sr(e, a)));
    var g = n.getDerivedStateFromProps;
    (d =
      typeof g == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== c || f !== a) && rd(e, o, r, a)),
      (Ot = !1),
      (f = e.memoizedState),
      (o.state = f),
      Us(e, r, o, i);
    var _ = e.memoizedState;
    l !== c || f !== _ || De.current || Ot
      ? (typeof g == "function" && (ra(e, n, g, r), (_ = e.memoizedState)),
        (u = Ot || nd(e, n, u, r, f, _, a) || !1)
          ? (d ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, _, a),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, _, a)),
            typeof o.componentDidUpdate == "function" && (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (l === t.memoizedProps && f === t.memoizedState) ||
              (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (l === t.memoizedProps && f === t.memoizedState) ||
              (e.flags |= 1024),
            (e.memoizedProps = r),
            (e.memoizedState = _)),
        (o.props = r),
        (o.state = _),
        (o.context = a),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (l === t.memoizedProps && f === t.memoizedState) ||
          (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (l === t.memoizedProps && f === t.memoizedState) ||
          (e.flags |= 1024),
        (r = !1));
  }
  return la(t, e, n, r, s, i);
}
function la(t, e, n, r, i, s) {
  fp(t, e);
  var o = (e.flags & 128) !== 0;
  if (!r && !o) return i && $c(e, n, !1), It(t, e, s);
  (r = e.stateNode), (Rv.current = e);
  var l =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (e.flags |= 1),
    t !== null && o
      ? ((e.child = lr(e, t.child, null, s)), (e.child = lr(e, null, l, s)))
      : xe(t, e, l, s),
    (e.memoizedState = r.state),
    i && $c(e, n, !0),
    e.child
  );
}
function hp(t) {
  var e = t.stateNode;
  e.pendingContext
    ? Qc(t, e.pendingContext, e.pendingContext !== e.context)
    : e.context && Qc(t, e.context, !1),
    mu(t, e.containerInfo);
}
function cd(t, e, n, r, i) {
  return or(), uu(i), (e.flags |= 256), xe(t, e, n, r), e.child;
}
var aa = { dehydrated: null, treeContext: null, retryLane: 0 };
function ua(t) {
  return { baseLanes: t, cachePool: null, transitions: null };
}
function pp(t, e, n) {
  var r = e.pendingProps,
    i = X.current,
    s = !1,
    o = (e.flags & 128) !== 0,
    l;
  if (
    ((l = o) ||
      (l = t !== null && t.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((s = !0), (e.flags &= -129))
      : (t === null || t.memoizedState !== null) && (i |= 1),
    G(X, i & 1),
    t === null)
  )
    return (
      ta(e),
      (t = e.memoizedState),
      t !== null && ((t = t.dehydrated), t !== null)
        ? (e.mode & 1
            ? t.data === "$!"
              ? (e.lanes = 8)
              : (e.lanes = 1073741824)
            : (e.lanes = 1),
          null)
        : ((o = r.children),
          (t = r.fallback),
          s
            ? ((r = e.mode),
              (s = e.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = Io(o, r, 0, null)),
              (t = yn(t, r, n, null)),
              (s.return = e),
              (t.return = e),
              (s.sibling = t),
              (e.child = s),
              (e.child.memoizedState = ua(n)),
              (e.memoizedState = aa),
              t)
            : Su(e, o))
    );
  if (((i = t.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return Pv(t, e, o, r, l, i, n);
  if (s) {
    (s = r.fallback), (o = e.mode), (i = t.child), (l = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && e.child !== i
        ? ((r = e.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (e.deletions = null))
        : ((r = Gt(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (s = Gt(l, s)) : ((s = yn(s, o, n, null)), (s.flags |= 2)),
      (s.return = e),
      (r.return = e),
      (r.sibling = s),
      (e.child = r),
      (r = s),
      (s = e.child),
      (o = t.child.memoizedState),
      (o =
        o === null
          ? ua(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = t.childLanes & ~n),
      (e.memoizedState = aa),
      r
    );
  }
  return (
    (s = t.child),
    (t = s.sibling),
    (r = Gt(s, { mode: "visible", children: r.children })),
    !(e.mode & 1) && (r.lanes = n),
    (r.return = e),
    (r.sibling = null),
    t !== null &&
      ((n = e.deletions),
      n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t)),
    (e.child = r),
    (e.memoizedState = null),
    r
  );
}
function Su(t, e) {
  return (
    (e = Io({ mode: "visible", children: e }, t.mode, 0, null)),
    (e.return = t),
    (t.child = e)
  );
}
function is(t, e, n, r) {
  return (
    r !== null && uu(r),
    lr(e, t.child, null, n),
    (t = Su(e, e.pendingProps.children)),
    (t.flags |= 2),
    (e.memoizedState = null),
    t
  );
}
function Pv(t, e, n, r, i, s, o) {
  if (n)
    return e.flags & 256
      ? ((e.flags &= -257), (r = cl(Error(E(422)))), is(t, e, o, r))
      : e.memoizedState !== null
      ? ((e.child = t.child), (e.flags |= 128), null)
      : ((s = r.fallback),
        (i = e.mode),
        (r = Io({ mode: "visible", children: r.children }, i, 0, null)),
        (s = yn(s, i, o, null)),
        (s.flags |= 2),
        (r.return = e),
        (s.return = e),
        (r.sibling = s),
        (e.child = r),
        e.mode & 1 && lr(e, t.child, null, o),
        (e.child.memoizedState = ua(o)),
        (e.memoizedState = aa),
        s);
  if (!(e.mode & 1)) return is(t, e, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (s = Error(E(419))), (r = cl(s, r, void 0)), is(t, e, o, r);
  }
  if (((l = (o & t.childLanes) !== 0), Pe || l)) {
    if (((r = pe), r !== null)) {
      switch (o & -o) {
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
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), St(t, i), it(r, t, i, -1));
    }
    return Au(), (r = cl(Error(E(421)))), is(t, e, o, r);
  }
  return i.data === "$?"
    ? ((e.flags |= 128),
      (e.child = t.child),
      (e = Hv.bind(null, t)),
      (i._reactRetry = e),
      null)
    : ((t = s.treeContext),
      (ze = Bt(i.nextSibling)),
      (Ue = e),
      (q = !0),
      (Ze = null),
      t !== null &&
        ((He[Ge++] = gt),
        (He[Ge++] = _t),
        (He[Ge++] = En),
        (gt = t.id),
        (_t = t.overflow),
        (En = e)),
      (e = Su(e, r.children)),
      (e.flags |= 4096),
      e);
}
function dd(t, e, n) {
  t.lanes |= e;
  var r = t.alternate;
  r !== null && (r.lanes |= e), na(t.return, e, n);
}
function dl(t, e, n, r, i) {
  var s = t.memoizedState;
  s === null
    ? (t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = e),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function mp(t, e, n) {
  var r = e.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((xe(t, e, r.children, n), (r = X.current), r & 2))
    (r = (r & 1) | 2), (e.flags |= 128);
  else {
    if (t !== null && t.flags & 128)
      e: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && dd(t, n, e);
        else if (t.tag === 19) dd(t, n, e);
        else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break e;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break e;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    r &= 1;
  }
  if ((G(X, r), !(e.mode & 1))) e.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = e.child, i = null; n !== null; )
          (t = n.alternate),
            t !== null && js(t) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = e.child), (e.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          dl(e, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = e.child, e.child = null; i !== null; ) {
          if (((t = i.alternate), t !== null && js(t) === null)) {
            e.child = i;
            break;
          }
          (t = i.sibling), (i.sibling = n), (n = i), (i = t);
        }
        dl(e, !0, n, null, s);
        break;
      case "together":
        dl(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
  return e.child;
}
function vs(t, e) {
  !(e.mode & 1) &&
    t !== null &&
    ((t.alternate = null), (e.alternate = null), (e.flags |= 2));
}
function It(t, e, n) {
  if (
    (t !== null && (e.dependencies = t.dependencies),
    (Sn |= e.lanes),
    !(n & e.childLanes))
  )
    return null;
  if (t !== null && e.child !== t.child) throw Error(E(153));
  if (e.child !== null) {
    for (
      t = e.child, n = Gt(t, t.pendingProps), e.child = n, n.return = e;
      t.sibling !== null;

    )
      (t = t.sibling), (n = n.sibling = Gt(t, t.pendingProps)), (n.return = e);
    n.sibling = null;
  }
  return e.child;
}
function Ov(t, e, n) {
  switch (e.tag) {
    case 3:
      hp(e), or();
      break;
    case 5:
      Bh(e);
      break;
    case 1:
      Le(e.type) && Ls(e);
      break;
    case 4:
      mu(e, e.stateNode.containerInfo);
      break;
    case 10:
      var r = e.type._context,
        i = e.memoizedProps.value;
      G(bs, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = e.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (G(X, X.current & 1), (e.flags |= 128), null)
          : n & e.child.childLanes
          ? pp(t, e, n)
          : (G(X, X.current & 1),
            (t = It(t, e, n)),
            t !== null ? t.sibling : null);
      G(X, X.current & 1);
      break;
    case 19:
      if (((r = (n & e.childLanes) !== 0), t.flags & 128)) {
        if (r) return mp(t, e, n);
        e.flags |= 128;
      }
      if (
        ((i = e.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        G(X, X.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (e.lanes = 0), dp(t, e, n);
  }
  return It(t, e, n);
}
var gp, ca, _p, vp;
gp = function (t, e) {
  for (var n = e.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ca = function () {};
_p = function (t, e, n, r) {
  var i = t.memoizedProps;
  if (i !== r) {
    (t = e.stateNode), gn(dt.current);
    var s = null;
    switch (n) {
      case "input":
        (i = Ol(t, i)), (r = Ol(t, r)), (s = []);
        break;
      case "select":
        (i = Z({}, i, { value: void 0 })),
          (r = Z({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (i = Ml(t, i)), (r = Ml(t, r)), (s = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (t.onclick = Os);
    }
    bl(n, r);
    var o;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var l = i[u];
          for (o in l) l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Jr.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (o in l)
              !l.hasOwnProperty(o) ||
                (a && a.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in a)
              a.hasOwnProperty(o) &&
                l[o] !== a[o] &&
                (n || (n = {}), (n[o] = a[o]));
          } else n || (s || (s = []), s.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (s = s || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (s = s || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Jr.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && Q("scroll", t),
                  s || l === a || (s = []))
                : (s = s || []).push(u, a));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (e.updateQueue = u) && (e.flags |= 4);
  }
};
vp = function (t, e, n, r) {
  n !== r && (e.flags |= 4);
};
function Nr(t, e) {
  if (!q)
    switch (t.tailMode) {
      case "hidden":
        e = t.tail;
        for (var n = null; e !== null; )
          e.alternate !== null && (n = e), (e = e.sibling);
        n === null ? (t.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = t.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? e || t.tail === null
            ? (t.tail = null)
            : (t.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ee(t) {
  var e = t.alternate !== null && t.alternate.child === t.child,
    n = 0,
    r = 0;
  if (e)
    for (var i = t.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = t),
        (i = i.sibling);
  else
    for (i = t.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = t),
        (i = i.sibling);
  return (t.subtreeFlags |= r), (t.childLanes = n), e;
}
function Dv(t, e, n) {
  var r = e.pendingProps;
  switch ((au(e), e.tag)) {
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
      return Ee(e), null;
    case 1:
      return Le(e.type) && Ds(), Ee(e), null;
    case 3:
      return (
        (r = e.stateNode),
        ar(),
        Y(De),
        Y(Ie),
        _u(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (t === null || t.child === null) &&
          (ns(e)
            ? (e.flags |= 4)
            : t === null ||
              (t.memoizedState.isDehydrated && !(e.flags & 256)) ||
              ((e.flags |= 1024), Ze !== null && (va(Ze), (Ze = null)))),
        ca(t, e),
        Ee(e),
        null
      );
    case 5:
      gu(e);
      var i = gn(ci.current);
      if (((n = e.type), t !== null && e.stateNode != null))
        _p(t, e, n, r, i),
          t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
      else {
        if (!r) {
          if (e.stateNode === null) throw Error(E(166));
          return Ee(e), null;
        }
        if (((t = gn(dt.current)), ns(e))) {
          (r = e.stateNode), (n = e.type);
          var s = e.memoizedProps;
          switch (((r[ut] = e), (r[ai] = s), (t = (e.mode & 1) !== 0), n)) {
            case "dialog":
              Q("cancel", r), Q("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Q("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < br.length; i++) Q(br[i], r);
              break;
            case "source":
              Q("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Q("error", r), Q("load", r);
              break;
            case "details":
              Q("toggle", r);
              break;
            case "input":
              wc(r, s), Q("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                Q("invalid", r);
              break;
            case "textarea":
              Cc(r, s), Q("invalid", r);
          }
          bl(n, s), (i = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var l = s[o];
              o === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (s.suppressHydrationWarning !== !0 &&
                      ts(r.textContent, l, t),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (s.suppressHydrationWarning !== !0 &&
                      ts(r.textContent, l, t),
                    (i = ["children", "" + l]))
                : Jr.hasOwnProperty(o) &&
                  l != null &&
                  o === "onScroll" &&
                  Q("scroll", r);
            }
          switch (n) {
            case "input":
              Qi(r), Ec(r, s, !0);
              break;
            case "textarea":
              Qi(r), Sc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = Os);
          }
          (r = i), (e.updateQueue = r), r !== null && (e.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            t === "http://www.w3.org/1999/xhtml" && (t = Kf(n)),
            t === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((t = o.createElement("div")),
                  (t.innerHTML = "<script></script>"),
                  (t = t.removeChild(t.firstChild)))
                : typeof r.is == "string"
                ? (t = o.createElement(n, { is: r.is }))
                : ((t = o.createElement(n)),
                  n === "select" &&
                    ((o = t),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (t = o.createElementNS(t, n)),
            (t[ut] = e),
            (t[ai] = r),
            gp(t, e, !1, !1),
            (e.stateNode = t);
          e: {
            switch (((o = zl(n, r)), n)) {
              case "dialog":
                Q("cancel", t), Q("close", t), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Q("load", t), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < br.length; i++) Q(br[i], t);
                i = r;
                break;
              case "source":
                Q("error", t), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                Q("error", t), Q("load", t), (i = r);
                break;
              case "details":
                Q("toggle", t), (i = r);
                break;
              case "input":
                wc(t, r), (i = Ol(t, r)), Q("invalid", t);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (t._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Z({}, r, { value: void 0 })),
                  Q("invalid", t);
                break;
              case "textarea":
                Cc(t, r), (i = Ml(t, r)), Q("invalid", t);
                break;
              default:
                i = r;
            }
            bl(n, i), (l = i);
            for (s in l)
              if (l.hasOwnProperty(s)) {
                var a = l[s];
                s === "style"
                  ? Yf(t, a)
                  : s === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Qf(t, a))
                  : s === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Zr(t, a)
                    : typeof a == "number" && Zr(t, "" + a)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (Jr.hasOwnProperty(s)
                      ? a != null && s === "onScroll" && Q("scroll", t)
                      : a != null && Qa(t, s, a, o));
              }
            switch (n) {
              case "input":
                Qi(t), Ec(t, r, !1);
                break;
              case "textarea":
                Qi(t), Sc(t);
                break;
              case "option":
                r.value != null && t.setAttribute("value", "" + Xt(r.value));
                break;
              case "select":
                (t.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? Yn(t, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      Yn(t, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (t.onclick = Os);
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
          r && (e.flags |= 4);
        }
        e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152));
      }
      return Ee(e), null;
    case 6:
      if (t && e.stateNode != null) vp(t, e, t.memoizedProps, r);
      else {
        if (typeof r != "string" && e.stateNode === null) throw Error(E(166));
        if (((n = gn(ci.current)), gn(dt.current), ns(e))) {
          if (
            ((r = e.stateNode),
            (n = e.memoizedProps),
            (r[ut] = e),
            (s = r.nodeValue !== n) && ((t = Ue), t !== null))
          )
            switch (t.tag) {
              case 3:
                ts(r.nodeValue, n, (t.mode & 1) !== 0);
                break;
              case 5:
                t.memoizedProps.suppressHydrationWarning !== !0 &&
                  ts(r.nodeValue, n, (t.mode & 1) !== 0);
            }
          s && (e.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[ut] = e),
            (e.stateNode = r);
      }
      return Ee(e), null;
    case 13:
      if (
        (Y(X),
        (r = e.memoizedState),
        t === null ||
          (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
      ) {
        if (q && ze !== null && e.mode & 1 && !(e.flags & 128))
          Fh(), or(), (e.flags |= 98560), (s = !1);
        else if (((s = ns(e)), r !== null && r.dehydrated !== null)) {
          if (t === null) {
            if (!s) throw Error(E(318));
            if (
              ((s = e.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(E(317));
            s[ut] = e;
          } else
            or(), !(e.flags & 128) && (e.memoizedState = null), (e.flags |= 4);
          Ee(e), (s = !1);
        } else Ze !== null && (va(Ze), (Ze = null)), (s = !0);
        if (!s) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128
        ? ((e.lanes = n), e)
        : ((r = r !== null),
          r !== (t !== null && t.memoizedState !== null) &&
            r &&
            ((e.child.flags |= 8192),
            e.mode & 1 &&
              (t === null || X.current & 1 ? ue === 0 && (ue = 3) : Au())),
          e.updateQueue !== null && (e.flags |= 4),
          Ee(e),
          null);
    case 4:
      return (
        ar(), ca(t, e), t === null && oi(e.stateNode.containerInfo), Ee(e), null
      );
    case 10:
      return fu(e.type._context), Ee(e), null;
    case 17:
      return Le(e.type) && Ds(), Ee(e), null;
    case 19:
      if ((Y(X), (s = e.memoizedState), s === null)) return Ee(e), null;
      if (((r = (e.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) Nr(s, !1);
        else {
          if (ue !== 0 || (t !== null && t.flags & 128))
            for (t = e.child; t !== null; ) {
              if (((o = js(t)), o !== null)) {
                for (
                  e.flags |= 128,
                    Nr(s, !1),
                    r = o.updateQueue,
                    r !== null && ((e.updateQueue = r), (e.flags |= 4)),
                    e.subtreeFlags = 0,
                    r = n,
                    n = e.child;
                  n !== null;

                )
                  (s = n),
                    (t = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = t),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (t = o.dependencies),
                        (s.dependencies =
                          t === null
                            ? null
                            : {
                                lanes: t.lanes,
                                firstContext: t.firstContext,
                              })),
                    (n = n.sibling);
                return G(X, (X.current & 1) | 2), e.child;
              }
              t = t.sibling;
            }
          s.tail !== null &&
            re() > cr &&
            ((e.flags |= 128), (r = !0), Nr(s, !1), (e.lanes = 4194304));
        }
      else {
        if (!r)
          if (((t = js(o)), t !== null)) {
            if (
              ((e.flags |= 128),
              (r = !0),
              (n = t.updateQueue),
              n !== null && ((e.updateQueue = n), (e.flags |= 4)),
              Nr(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !q)
            )
              return Ee(e), null;
          } else
            2 * re() - s.renderingStartTime > cr &&
              n !== 1073741824 &&
              ((e.flags |= 128), (r = !0), Nr(s, !1), (e.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = e.child), (e.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (e.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((e = s.tail),
          (s.rendering = e),
          (s.tail = e.sibling),
          (s.renderingStartTime = re()),
          (e.sibling = null),
          (n = X.current),
          G(X, r ? (n & 1) | 2 : n & 1),
          e)
        : (Ee(e), null);
    case 22:
    case 23:
      return (
        Nu(),
        (r = e.memoizedState !== null),
        t !== null && (t.memoizedState !== null) !== r && (e.flags |= 8192),
        r && e.mode & 1
          ? be & 1073741824 && (Ee(e), e.subtreeFlags & 6 && (e.flags |= 8192))
          : Ee(e),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, e.tag));
}
function Lv(t, e) {
  switch ((au(e), e.tag)) {
    case 1:
      return (
        Le(e.type) && Ds(),
        (t = e.flags),
        t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 3:
      return (
        ar(),
        Y(De),
        Y(Ie),
        _u(),
        (t = e.flags),
        t & 65536 && !(t & 128) ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 5:
      return gu(e), null;
    case 13:
      if ((Y(X), (t = e.memoizedState), t !== null && t.dehydrated !== null)) {
        if (e.alternate === null) throw Error(E(340));
        or();
      }
      return (
        (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 19:
      return Y(X), null;
    case 4:
      return ar(), null;
    case 10:
      return fu(e.type._context), null;
    case 22:
    case 23:
      return Nu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ss = !1,
  Ce = !1,
  Mv = typeof WeakSet == "function" ? WeakSet : Set,
  k = null;
function Gn(t, e) {
  var n = t.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ee(t, e, r);
      }
    else n.current = null;
}
function da(t, e, n) {
  try {
    n();
  } catch (r) {
    ee(t, e, r);
  }
}
var fd = !1;
function Fv(t, e) {
  if ((($l = As), (t = Sh()), ou(t))) {
    if ("selectionStart" in t)
      var n = { start: t.selectionStart, end: t.selectionEnd };
    else
      e: {
        n = ((n = t.ownerDocument) && n.defaultView) || window;
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
          var o = 0,
            l = -1,
            a = -1,
            u = 0,
            d = 0,
            c = t,
            f = null;
          t: for (;;) {
            for (
              var g;
              c !== n || (i !== 0 && c.nodeType !== 3) || (l = o + i),
                c !== s || (r !== 0 && c.nodeType !== 3) || (a = o + r),
                c.nodeType === 3 && (o += c.nodeValue.length),
                (g = c.firstChild) !== null;

            )
              (f = c), (c = g);
            for (;;) {
              if (c === t) break t;
              if (
                (f === n && ++u === i && (l = o),
                f === s && ++d === r && (a = o),
                (g = c.nextSibling) !== null)
              )
                break;
              (c = f), (f = c.parentNode);
            }
            c = g;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Yl = { focusedElem: t, selectionRange: n }, As = !1, k = e; k !== null; )
    if (((e = k), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null))
      (t.return = e), (k = t);
    else
      for (; k !== null; ) {
        e = k;
        try {
          var _ = e.alternate;
          if (e.flags & 1024)
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (_ !== null) {
                  var y = _.memoizedProps,
                    C = _.memoizedState,
                    m = e.stateNode,
                    h = m.getSnapshotBeforeUpdate(
                      e.elementType === e.type ? y : Xe(e.type, y),
                      C
                    );
                  m.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var p = e.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(E(163));
            }
        } catch (v) {
          ee(e, e.return, v);
        }
        if (((t = e.sibling), t !== null)) {
          (t.return = e.return), (k = t);
          break;
        }
        k = e.return;
      }
  return (_ = fd), (fd = !1), _;
}
function Hr(t, e, n) {
  var r = e.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & t) === t) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && da(e, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Co(t, e) {
  if (
    ((e = e.updateQueue), (e = e !== null ? e.lastEffect : null), e !== null)
  ) {
    var n = (e = e.next);
    do {
      if ((n.tag & t) === t) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== e);
  }
}
function fa(t) {
  var e = t.ref;
  if (e !== null) {
    var n = t.stateNode;
    switch (t.tag) {
      case 5:
        t = n;
        break;
      default:
        t = n;
    }
    typeof e == "function" ? e(t) : (e.current = t);
  }
}
function yp(t) {
  var e = t.alternate;
  e !== null && ((t.alternate = null), yp(e)),
    (t.child = null),
    (t.deletions = null),
    (t.sibling = null),
    t.tag === 5 &&
      ((e = t.stateNode),
      e !== null &&
        (delete e[ut], delete e[ai], delete e[Jl], delete e[vv], delete e[yv])),
    (t.stateNode = null),
    (t.return = null),
    (t.dependencies = null),
    (t.memoizedProps = null),
    (t.memoizedState = null),
    (t.pendingProps = null),
    (t.stateNode = null),
    (t.updateQueue = null);
}
function wp(t) {
  return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function hd(t) {
  e: for (;;) {
    for (; t.sibling === null; ) {
      if (t.return === null || wp(t.return)) return null;
      t = t.return;
    }
    for (
      t.sibling.return = t.return, t = t.sibling;
      t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

    ) {
      if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
      (t.child.return = t), (t = t.child);
    }
    if (!(t.flags & 2)) return t.stateNode;
  }
}
function ha(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6)
    (t = t.stateNode),
      e
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(t, e)
          : n.insertBefore(t, e)
        : (n.nodeType === 8
            ? ((e = n.parentNode), e.insertBefore(t, n))
            : ((e = n), e.appendChild(t)),
          (n = n._reactRootContainer),
          n != null || e.onclick !== null || (e.onclick = Os));
  else if (r !== 4 && ((t = t.child), t !== null))
    for (ha(t, e, n), t = t.sibling; t !== null; ) ha(t, e, n), (t = t.sibling);
}
function pa(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6)
    (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
  else if (r !== 4 && ((t = t.child), t !== null))
    for (pa(t, e, n), t = t.sibling; t !== null; ) pa(t, e, n), (t = t.sibling);
}
var ge = null,
  Je = !1;
function Rt(t, e, n) {
  for (n = n.child; n !== null; ) Ep(t, e, n), (n = n.sibling);
}
function Ep(t, e, n) {
  if (ct && typeof ct.onCommitFiberUnmount == "function")
    try {
      ct.onCommitFiberUnmount(po, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ce || Gn(n, e);
    case 6:
      var r = ge,
        i = Je;
      (ge = null),
        Rt(t, e, n),
        (ge = r),
        (Je = i),
        ge !== null &&
          (Je
            ? ((t = ge),
              (n = n.stateNode),
              t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n))
            : ge.removeChild(n.stateNode));
      break;
    case 18:
      ge !== null &&
        (Je
          ? ((t = ge),
            (n = n.stateNode),
            t.nodeType === 8
              ? il(t.parentNode, n)
              : t.nodeType === 1 && il(t, n),
            ri(t))
          : il(ge, n.stateNode));
      break;
    case 4:
      (r = ge),
        (i = Je),
        (ge = n.stateNode.containerInfo),
        (Je = !0),
        Rt(t, e, n),
        (ge = r),
        (Je = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ce &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          (s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && da(n, e, o),
            (i = i.next);
        } while (i !== r);
      }
      Rt(t, e, n);
      break;
    case 1:
      if (
        !Ce &&
        (Gn(n, e),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          ee(n, e, l);
        }
      Rt(t, e, n);
      break;
    case 21:
      Rt(t, e, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ce = (r = Ce) || n.memoizedState !== null), Rt(t, e, n), (Ce = r))
        : Rt(t, e, n);
      break;
    default:
      Rt(t, e, n);
  }
}
function pd(t) {
  var e = t.updateQueue;
  if (e !== null) {
    t.updateQueue = null;
    var n = t.stateNode;
    n === null && (n = t.stateNode = new Mv()),
      e.forEach(function (r) {
        var i = Gv.bind(null, t, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function qe(t, e) {
  var n = e.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = t,
          o = e,
          l = o;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (ge = l.stateNode), (Je = !1);
              break e;
            case 3:
              (ge = l.stateNode.containerInfo), (Je = !0);
              break e;
            case 4:
              (ge = l.stateNode.containerInfo), (Je = !0);
              break e;
          }
          l = l.return;
        }
        if (ge === null) throw Error(E(160));
        Ep(s, o, i), (ge = null), (Je = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (u) {
        ee(i, e, u);
      }
    }
  if (e.subtreeFlags & 12854)
    for (e = e.child; e !== null; ) Cp(e, t), (e = e.sibling);
}
function Cp(t, e) {
  var n = t.alternate,
    r = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((qe(e, t), lt(t), r & 4)) {
        try {
          Hr(3, t, t.return), Co(3, t);
        } catch (y) {
          ee(t, t.return, y);
        }
        try {
          Hr(5, t, t.return);
        } catch (y) {
          ee(t, t.return, y);
        }
      }
      break;
    case 1:
      qe(e, t), lt(t), r & 512 && n !== null && Gn(n, n.return);
      break;
    case 5:
      if (
        (qe(e, t),
        lt(t),
        r & 512 && n !== null && Gn(n, n.return),
        t.flags & 32)
      ) {
        var i = t.stateNode;
        try {
          Zr(i, "");
        } catch (y) {
          ee(t, t.return, y);
        }
      }
      if (r & 4 && ((i = t.stateNode), i != null)) {
        var s = t.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          l = t.type,
          a = t.updateQueue;
        if (((t.updateQueue = null), a !== null))
          try {
            l === "input" && s.type === "radio" && s.name != null && Hf(i, s),
              zl(l, o);
            var u = zl(l, s);
            for (o = 0; o < a.length; o += 2) {
              var d = a[o],
                c = a[o + 1];
              d === "style"
                ? Yf(i, c)
                : d === "dangerouslySetInnerHTML"
                ? Qf(i, c)
                : d === "children"
                ? Zr(i, c)
                : Qa(i, d, c, u);
            }
            switch (l) {
              case "input":
                Dl(i, s);
                break;
              case "textarea":
                Gf(i, s);
                break;
              case "select":
                var f = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var g = s.value;
                g != null
                  ? Yn(i, !!s.multiple, g, !1)
                  : f !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Yn(i, !!s.multiple, s.defaultValue, !0)
                      : Yn(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[ai] = s;
          } catch (y) {
            ee(t, t.return, y);
          }
      }
      break;
    case 6:
      if ((qe(e, t), lt(t), r & 4)) {
        if (t.stateNode === null) throw Error(E(162));
        (i = t.stateNode), (s = t.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (y) {
          ee(t, t.return, y);
        }
      }
      break;
    case 3:
      if (
        (qe(e, t), lt(t), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ri(e.containerInfo);
        } catch (y) {
          ee(t, t.return, y);
        }
      break;
    case 4:
      qe(e, t), lt(t);
      break;
    case 13:
      qe(e, t),
        lt(t),
        (i = t.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Tu = re())),
        r & 4 && pd(t);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        t.mode & 1 ? ((Ce = (u = Ce) || d), qe(e, t), (Ce = u)) : qe(e, t),
        lt(t),
        r & 8192)
      ) {
        if (
          ((u = t.memoizedState !== null),
          (t.stateNode.isHidden = u) && !d && t.mode & 1)
        )
          for (k = t, d = t.child; d !== null; ) {
            for (c = k = d; k !== null; ) {
              switch (((f = k), (g = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Hr(4, f, f.return);
                  break;
                case 1:
                  Gn(f, f.return);
                  var _ = f.stateNode;
                  if (typeof _.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (e = r),
                        (_.props = e.memoizedProps),
                        (_.state = e.memoizedState),
                        _.componentWillUnmount();
                    } catch (y) {
                      ee(r, n, y);
                    }
                  }
                  break;
                case 5:
                  Gn(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    gd(c);
                    continue;
                  }
              }
              g !== null ? ((g.return = f), (k = g)) : gd(c);
            }
            d = d.sibling;
          }
        e: for (d = null, c = t; ; ) {
          if (c.tag === 5) {
            if (d === null) {
              d = c;
              try {
                (i = c.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((l = c.stateNode),
                      (a = c.memoizedProps.style),
                      (o =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = $f("display", o)));
              } catch (y) {
                ee(t, t.return, y);
              }
            }
          } else if (c.tag === 6) {
            if (d === null)
              try {
                c.stateNode.nodeValue = u ? "" : c.memoizedProps;
              } catch (y) {
                ee(t, t.return, y);
              }
          } else if (
            ((c.tag !== 22 && c.tag !== 23) ||
              c.memoizedState === null ||
              c === t) &&
            c.child !== null
          ) {
            (c.child.return = c), (c = c.child);
            continue;
          }
          if (c === t) break e;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === t) break e;
            d === c && (d = null), (c = c.return);
          }
          d === c && (d = null), (c.sibling.return = c.return), (c = c.sibling);
        }
      }
      break;
    case 19:
      qe(e, t), lt(t), r & 4 && pd(t);
      break;
    case 21:
      break;
    default:
      qe(e, t), lt(t);
  }
}
function lt(t) {
  var e = t.flags;
  if (e & 2) {
    try {
      e: {
        for (var n = t.return; n !== null; ) {
          if (wp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(E(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Zr(i, ""), (r.flags &= -33));
          var s = hd(t);
          pa(t, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            l = hd(t);
          ha(t, l, o);
          break;
        default:
          throw Error(E(161));
      }
    } catch (a) {
      ee(t, t.return, a);
    }
    t.flags &= -3;
  }
  e & 4096 && (t.flags &= -4097);
}
function bv(t, e, n) {
  (k = t), Sp(t);
}
function Sp(t, e, n) {
  for (var r = (t.mode & 1) !== 0; k !== null; ) {
    var i = k,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || ss;
      if (!o) {
        var l = i.alternate,
          a = (l !== null && l.memoizedState !== null) || Ce;
        l = ss;
        var u = Ce;
        if (((ss = o), (Ce = a) && !u))
          for (k = i; k !== null; )
            (o = k),
              (a = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? _d(i)
                : a !== null
                ? ((a.return = o), (k = a))
                : _d(i);
        for (; s !== null; ) (k = s), Sp(s), (s = s.sibling);
        (k = i), (ss = l), (Ce = u);
      }
      md(t);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (k = s)) : md(t);
  }
}
function md(t) {
  for (; k !== null; ) {
    var e = k;
    if (e.flags & 8772) {
      var n = e.alternate;
      try {
        if (e.flags & 8772)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              Ce || Co(5, e);
              break;
            case 1:
              var r = e.stateNode;
              if (e.flags & 4 && !Ce)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    e.elementType === e.type
                      ? n.memoizedProps
                      : Xe(e.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = e.updateQueue;
              s !== null && Zc(e, s, r);
              break;
            case 3:
              var o = e.updateQueue;
              if (o !== null) {
                if (((n = null), e.child !== null))
                  switch (e.child.tag) {
                    case 5:
                      n = e.child.stateNode;
                      break;
                    case 1:
                      n = e.child.stateNode;
                  }
                Zc(e, o, n);
              }
              break;
            case 5:
              var l = e.stateNode;
              if (n === null && e.flags & 4) {
                n = l;
                var a = e.memoizedProps;
                switch (e.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
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
              if (e.memoizedState === null) {
                var u = e.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var c = d.dehydrated;
                    c !== null && ri(c);
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
              throw Error(E(163));
          }
        Ce || (e.flags & 512 && fa(e));
      } catch (f) {
        ee(e, e.return, f);
      }
    }
    if (e === t) {
      k = null;
      break;
    }
    if (((n = e.sibling), n !== null)) {
      (n.return = e.return), (k = n);
      break;
    }
    k = e.return;
  }
}
function gd(t) {
  for (; k !== null; ) {
    var e = k;
    if (e === t) {
      k = null;
      break;
    }
    var n = e.sibling;
    if (n !== null) {
      (n.return = e.return), (k = n);
      break;
    }
    k = e.return;
  }
}
function _d(t) {
  for (; k !== null; ) {
    var e = k;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var n = e.return;
          try {
            Co(4, e);
          } catch (a) {
            ee(e, n, a);
          }
          break;
        case 1:
          var r = e.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = e.return;
            try {
              r.componentDidMount();
            } catch (a) {
              ee(e, i, a);
            }
          }
          var s = e.return;
          try {
            fa(e);
          } catch (a) {
            ee(e, s, a);
          }
          break;
        case 5:
          var o = e.return;
          try {
            fa(e);
          } catch (a) {
            ee(e, o, a);
          }
      }
    } catch (a) {
      ee(e, e.return, a);
    }
    if (e === t) {
      k = null;
      break;
    }
    var l = e.sibling;
    if (l !== null) {
      (l.return = e.return), (k = l);
      break;
    }
    k = e.return;
  }
}
var zv = Math.ceil,
  Vs = kt.ReactCurrentDispatcher,
  Iu = kt.ReactCurrentOwner,
  Qe = kt.ReactCurrentBatchConfig,
  U = 0,
  pe = null,
  ie = null,
  ve = 0,
  be = 0,
  Kn = rn(0),
  ue = 0,
  pi = null,
  Sn = 0,
  So = 0,
  xu = 0,
  Gr = null,
  Re = null,
  Tu = 0,
  cr = 1 / 0,
  pt = null,
  Hs = !1,
  ma = null,
  Vt = null,
  os = !1,
  Ft = null,
  Gs = 0,
  Kr = 0,
  ga = null,
  ys = -1,
  ws = 0;
function ke() {
  return U & 6 ? re() : ys !== -1 ? ys : (ys = re());
}
function Ht(t) {
  return t.mode & 1
    ? U & 2 && ve !== 0
      ? ve & -ve
      : Ev.transition !== null
      ? (ws === 0 && (ws = lh()), ws)
      : ((t = B),
        t !== 0 || ((t = window.event), (t = t === void 0 ? 16 : ph(t.type))),
        t)
    : 1;
}
function it(t, e, n, r) {
  if (50 < Kr) throw ((Kr = 0), (ga = null), Error(E(185)));
  Ai(t, n, r),
    (!(U & 2) || t !== pe) &&
      (t === pe && (!(U & 2) && (So |= n), ue === 4 && Lt(t, ve)),
      Me(t, r),
      n === 1 && U === 0 && !(e.mode & 1) && ((cr = re() + 500), yo && sn()));
}
function Me(t, e) {
  var n = t.callbackNode;
  E_(t, e);
  var r = Ns(t, t === pe ? ve : 0);
  if (r === 0)
    n !== null && Tc(n), (t.callbackNode = null), (t.callbackPriority = 0);
  else if (((e = r & -r), t.callbackPriority !== e)) {
    if ((n != null && Tc(n), e === 1))
      t.tag === 0 ? wv(vd.bind(null, t)) : Dh(vd.bind(null, t)),
        gv(function () {
          !(U & 6) && sn();
        }),
        (n = null);
    else {
      switch (ah(r)) {
        case 1:
          n = Ja;
          break;
        case 4:
          n = sh;
          break;
        case 16:
          n = ks;
          break;
        case 536870912:
          n = oh;
          break;
        default:
          n = ks;
      }
      n = Pp(n, Ip.bind(null, t));
    }
    (t.callbackPriority = e), (t.callbackNode = n);
  }
}
function Ip(t, e) {
  if (((ys = -1), (ws = 0), U & 6)) throw Error(E(327));
  var n = t.callbackNode;
  if (er() && t.callbackNode !== n) return null;
  var r = Ns(t, t === pe ? ve : 0);
  if (r === 0) return null;
  if (r & 30 || r & t.expiredLanes || e) e = Ks(t, r);
  else {
    e = r;
    var i = U;
    U |= 2;
    var s = Tp();
    (pe !== t || ve !== e) && ((pt = null), (cr = re() + 500), vn(t, e));
    do
      try {
        Bv();
        break;
      } catch (l) {
        xp(t, l);
      }
    while (!0);
    du(),
      (Vs.current = s),
      (U = i),
      ie !== null ? (e = 0) : ((pe = null), (ve = 0), (e = ue));
  }
  if (e !== 0) {
    if (
      (e === 2 && ((i = Vl(t)), i !== 0 && ((r = i), (e = _a(t, i)))), e === 1)
    )
      throw ((n = pi), vn(t, 0), Lt(t, r), Me(t, re()), n);
    if (e === 6) Lt(t, r);
    else {
      if (
        ((i = t.current.alternate),
        !(r & 30) &&
          !Uv(i) &&
          ((e = Ks(t, r)),
          e === 2 && ((s = Vl(t)), s !== 0 && ((r = s), (e = _a(t, s)))),
          e === 1))
      )
        throw ((n = pi), vn(t, 0), Lt(t, r), Me(t, re()), n);
      switch (((t.finishedWork = i), (t.finishedLanes = r), e)) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          dn(t, Re, pt);
          break;
        case 3:
          if (
            (Lt(t, r), (r & 130023424) === r && ((e = Tu + 500 - re()), 10 < e))
          ) {
            if (Ns(t, 0) !== 0) break;
            if (((i = t.suspendedLanes), (i & r) !== r)) {
              ke(), (t.pingedLanes |= t.suspendedLanes & i);
              break;
            }
            t.timeoutHandle = Xl(dn.bind(null, t, Re, pt), e);
            break;
          }
          dn(t, Re, pt);
          break;
        case 4:
          if ((Lt(t, r), (r & 4194240) === r)) break;
          for (e = t.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - rt(r);
            (s = 1 << o), (o = e[o]), o > i && (i = o), (r &= ~s);
          }
          if (
            ((r = i),
            (r = re() - r),
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
                : 1960 * zv(r / 1960)) - r),
            10 < r)
          ) {
            t.timeoutHandle = Xl(dn.bind(null, t, Re, pt), r);
            break;
          }
          dn(t, Re, pt);
          break;
        case 5:
          dn(t, Re, pt);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return Me(t, re()), t.callbackNode === n ? Ip.bind(null, t) : null;
}
function _a(t, e) {
  var n = Gr;
  return (
    t.current.memoizedState.isDehydrated && (vn(t, e).flags |= 256),
    (t = Ks(t, e)),
    t !== 2 && ((e = Re), (Re = n), e !== null && va(e)),
    t
  );
}
function va(t) {
  Re === null ? (Re = t) : Re.push.apply(Re, t);
}
function Uv(t) {
  for (var e = t; ; ) {
    if (e.flags & 16384) {
      var n = e.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!ot(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
      (n.return = e), (e = n);
    else {
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return !0;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
  }
  return !0;
}
function Lt(t, e) {
  for (
    e &= ~xu,
      e &= ~So,
      t.suspendedLanes |= e,
      t.pingedLanes &= ~e,
      t = t.expirationTimes;
    0 < e;

  ) {
    var n = 31 - rt(e),
      r = 1 << n;
    (t[n] = -1), (e &= ~r);
  }
}
function vd(t) {
  if (U & 6) throw Error(E(327));
  er();
  var e = Ns(t, 0);
  if (!(e & 1)) return Me(t, re()), null;
  var n = Ks(t, e);
  if (t.tag !== 0 && n === 2) {
    var r = Vl(t);
    r !== 0 && ((e = r), (n = _a(t, r)));
  }
  if (n === 1) throw ((n = pi), vn(t, 0), Lt(t, e), Me(t, re()), n);
  if (n === 6) throw Error(E(345));
  return (
    (t.finishedWork = t.current.alternate),
    (t.finishedLanes = e),
    dn(t, Re, pt),
    Me(t, re()),
    null
  );
}
function ku(t, e) {
  var n = U;
  U |= 1;
  try {
    return t(e);
  } finally {
    (U = n), U === 0 && ((cr = re() + 500), yo && sn());
  }
}
function In(t) {
  Ft !== null && Ft.tag === 0 && !(U & 6) && er();
  var e = U;
  U |= 1;
  var n = Qe.transition,
    r = B;
  try {
    if (((Qe.transition = null), (B = 1), t)) return t();
  } finally {
    (B = r), (Qe.transition = n), (U = e), !(U & 6) && sn();
  }
}
function Nu() {
  (be = Kn.current), Y(Kn);
}
function vn(t, e) {
  (t.finishedWork = null), (t.finishedLanes = 0);
  var n = t.timeoutHandle;
  if ((n !== -1 && ((t.timeoutHandle = -1), mv(n)), ie !== null))
    for (n = ie.return; n !== null; ) {
      var r = n;
      switch ((au(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ds();
          break;
        case 3:
          ar(), Y(De), Y(Ie), _u();
          break;
        case 5:
          gu(r);
          break;
        case 4:
          ar();
          break;
        case 13:
          Y(X);
          break;
        case 19:
          Y(X);
          break;
        case 10:
          fu(r.type._context);
          break;
        case 22:
        case 23:
          Nu();
      }
      n = n.return;
    }
  if (
    ((pe = t),
    (ie = t = Gt(t.current, null)),
    (ve = be = e),
    (ue = 0),
    (pi = null),
    (xu = So = Sn = 0),
    (Re = Gr = null),
    mn !== null)
  ) {
    for (e = 0; e < mn.length; e++)
      if (((n = mn[e]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = i), (r.next = o);
        }
        n.pending = r;
      }
    mn = null;
  }
  return t;
}
function xp(t, e) {
  do {
    var n = ie;
    try {
      if ((du(), (gs.current = Ws), Bs)) {
        for (var r = J.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Bs = !1;
      }
      if (
        ((Cn = 0),
        (fe = oe = J = null),
        (Vr = !1),
        (di = 0),
        (Iu.current = null),
        n === null || n.return === null)
      ) {
        (ue = 1), (pi = e), (ie = null);
        break;
      }
      e: {
        var s = t,
          o = n.return,
          l = n,
          a = e;
        if (
          ((e = ve),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            d = l,
            c = d.tag;
          if (!(d.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var f = d.alternate;
            f
              ? ((d.updateQueue = f.updateQueue),
                (d.memoizedState = f.memoizedState),
                (d.lanes = f.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var g = sd(o);
          if (g !== null) {
            (g.flags &= -257),
              od(g, o, l, s, e),
              g.mode & 1 && id(s, u, e),
              (e = g),
              (a = u);
            var _ = e.updateQueue;
            if (_ === null) {
              var y = new Set();
              y.add(a), (e.updateQueue = y);
            } else _.add(a);
            break e;
          } else {
            if (!(e & 1)) {
              id(s, u, e), Au();
              break e;
            }
            a = Error(E(426));
          }
        } else if (q && l.mode & 1) {
          var C = sd(o);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256),
              od(C, o, l, s, e),
              uu(ur(a, l));
            break e;
          }
        }
        (s = a = ur(a, l)),
          ue !== 4 && (ue = 2),
          Gr === null ? (Gr = [s]) : Gr.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (e &= -e), (s.lanes |= e);
              var m = ap(s, a, e);
              Jc(s, m);
              break e;
            case 1:
              l = a;
              var h = s.type,
                p = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (Vt === null || !Vt.has(p))))
              ) {
                (s.flags |= 65536), (e &= -e), (s.lanes |= e);
                var v = up(s, l, e);
                Jc(s, v);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Np(n);
    } catch (w) {
      (e = w), ie === n && n !== null && (ie = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Tp() {
  var t = Vs.current;
  return (Vs.current = Ws), t === null ? Ws : t;
}
function Au() {
  (ue === 0 || ue === 3 || ue === 2) && (ue = 4),
    pe === null || (!(Sn & 268435455) && !(So & 268435455)) || Lt(pe, ve);
}
function Ks(t, e) {
  var n = U;
  U |= 2;
  var r = Tp();
  (pe !== t || ve !== e) && ((pt = null), vn(t, e));
  do
    try {
      jv();
      break;
    } catch (i) {
      xp(t, i);
    }
  while (!0);
  if ((du(), (U = n), (Vs.current = r), ie !== null)) throw Error(E(261));
  return (pe = null), (ve = 0), ue;
}
function jv() {
  for (; ie !== null; ) kp(ie);
}
function Bv() {
  for (; ie !== null && !f_(); ) kp(ie);
}
function kp(t) {
  var e = Rp(t.alternate, t, be);
  (t.memoizedProps = t.pendingProps),
    e === null ? Np(t) : (ie = e),
    (Iu.current = null);
}
function Np(t) {
  var e = t;
  do {
    var n = e.alternate;
    if (((t = e.return), e.flags & 32768)) {
      if (((n = Lv(n, e)), n !== null)) {
        (n.flags &= 32767), (ie = n);
        return;
      }
      if (t !== null)
        (t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null);
      else {
        (ue = 6), (ie = null);
        return;
      }
    } else if (((n = Dv(n, e, be)), n !== null)) {
      ie = n;
      return;
    }
    if (((e = e.sibling), e !== null)) {
      ie = e;
      return;
    }
    ie = e = t;
  } while (e !== null);
  ue === 0 && (ue = 5);
}
function dn(t, e, n) {
  var r = B,
    i = Qe.transition;
  try {
    (Qe.transition = null), (B = 1), Wv(t, e, n, r);
  } finally {
    (Qe.transition = i), (B = r);
  }
  return null;
}
function Wv(t, e, n, r) {
  do er();
  while (Ft !== null);
  if (U & 6) throw Error(E(327));
  n = t.finishedWork;
  var i = t.finishedLanes;
  if (n === null) return null;
  if (((t.finishedWork = null), (t.finishedLanes = 0), n === t.current))
    throw Error(E(177));
  (t.callbackNode = null), (t.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (C_(t, s),
    t === pe && ((ie = pe = null), (ve = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      os ||
      ((os = !0),
      Pp(ks, function () {
        return er(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = Qe.transition), (Qe.transition = null);
    var o = B;
    B = 1;
    var l = U;
    (U |= 4),
      (Iu.current = null),
      Fv(t, n),
      Cp(n, t),
      av(Yl),
      (As = !!$l),
      (Yl = $l = null),
      (t.current = n),
      bv(n),
      h_(),
      (U = l),
      (B = o),
      (Qe.transition = s);
  } else t.current = n;
  if (
    (os && ((os = !1), (Ft = t), (Gs = i)),
    (s = t.pendingLanes),
    s === 0 && (Vt = null),
    g_(n.stateNode),
    Me(t, re()),
    e !== null)
  )
    for (r = t.onRecoverableError, n = 0; n < e.length; n++)
      (i = e[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Hs) throw ((Hs = !1), (t = ma), (ma = null), t);
  return (
    Gs & 1 && t.tag !== 0 && er(),
    (s = t.pendingLanes),
    s & 1 ? (t === ga ? Kr++ : ((Kr = 0), (ga = t))) : (Kr = 0),
    sn(),
    null
  );
}
function er() {
  if (Ft !== null) {
    var t = ah(Gs),
      e = Qe.transition,
      n = B;
    try {
      if (((Qe.transition = null), (B = 16 > t ? 16 : t), Ft === null))
        var r = !1;
      else {
        if (((t = Ft), (Ft = null), (Gs = 0), U & 6)) throw Error(E(331));
        var i = U;
        for (U |= 4, k = t.current; k !== null; ) {
          var s = k,
            o = s.child;
          if (k.flags & 16) {
            var l = s.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (k = u; k !== null; ) {
                  var d = k;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Hr(8, d, s);
                  }
                  var c = d.child;
                  if (c !== null) (c.return = d), (k = c);
                  else
                    for (; k !== null; ) {
                      d = k;
                      var f = d.sibling,
                        g = d.return;
                      if ((yp(d), d === u)) {
                        k = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = g), (k = f);
                        break;
                      }
                      k = g;
                    }
                }
              }
              var _ = s.alternate;
              if (_ !== null) {
                var y = _.child;
                if (y !== null) {
                  _.child = null;
                  do {
                    var C = y.sibling;
                    (y.sibling = null), (y = C);
                  } while (y !== null);
                }
              }
              k = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (k = o);
          else
            e: for (; k !== null; ) {
              if (((s = k), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Hr(9, s, s.return);
                }
              var m = s.sibling;
              if (m !== null) {
                (m.return = s.return), (k = m);
                break e;
              }
              k = s.return;
            }
        }
        var h = t.current;
        for (k = h; k !== null; ) {
          o = k;
          var p = o.child;
          if (o.subtreeFlags & 2064 && p !== null) (p.return = o), (k = p);
          else
            e: for (o = h; k !== null; ) {
              if (((l = k), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Co(9, l);
                  }
                } catch (w) {
                  ee(l, l.return, w);
                }
              if (l === o) {
                k = null;
                break e;
              }
              var v = l.sibling;
              if (v !== null) {
                (v.return = l.return), (k = v);
                break e;
              }
              k = l.return;
            }
        }
        if (
          ((U = i), sn(), ct && typeof ct.onPostCommitFiberRoot == "function")
        )
          try {
            ct.onPostCommitFiberRoot(po, t);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (B = n), (Qe.transition = e);
    }
  }
  return !1;
}
function yd(t, e, n) {
  (e = ur(n, e)),
    (e = ap(t, e, 1)),
    (t = Wt(t, e, 1)),
    (e = ke()),
    t !== null && (Ai(t, 1, e), Me(t, e));
}
function ee(t, e, n) {
  if (t.tag === 3) yd(t, t, n);
  else
    for (; e !== null; ) {
      if (e.tag === 3) {
        yd(e, t, n);
        break;
      } else if (e.tag === 1) {
        var r = e.stateNode;
        if (
          typeof e.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Vt === null || !Vt.has(r)))
        ) {
          (t = ur(n, t)),
            (t = up(e, t, 1)),
            (e = Wt(e, t, 1)),
            (t = ke()),
            e !== null && (Ai(e, 1, t), Me(e, t));
          break;
        }
      }
      e = e.return;
    }
}
function Vv(t, e, n) {
  var r = t.pingCache;
  r !== null && r.delete(e),
    (e = ke()),
    (t.pingedLanes |= t.suspendedLanes & n),
    pe === t &&
      (ve & n) === n &&
      (ue === 4 || (ue === 3 && (ve & 130023424) === ve && 500 > re() - Tu)
        ? vn(t, 0)
        : (xu |= n)),
    Me(t, e);
}
function Ap(t, e) {
  e === 0 &&
    (t.mode & 1
      ? ((e = qi), (qi <<= 1), !(qi & 130023424) && (qi = 4194304))
      : (e = 1));
  var n = ke();
  (t = St(t, e)), t !== null && (Ai(t, e, n), Me(t, n));
}
function Hv(t) {
  var e = t.memoizedState,
    n = 0;
  e !== null && (n = e.retryLane), Ap(t, n);
}
function Gv(t, e) {
  var n = 0;
  switch (t.tag) {
    case 13:
      var r = t.stateNode,
        i = t.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = t.stateNode;
      break;
    default:
      throw Error(E(314));
  }
  r !== null && r.delete(e), Ap(t, n);
}
var Rp;
Rp = function (t, e, n) {
  if (t !== null)
    if (t.memoizedProps !== e.pendingProps || De.current) Pe = !0;
    else {
      if (!(t.lanes & n) && !(e.flags & 128)) return (Pe = !1), Ov(t, e, n);
      Pe = !!(t.flags & 131072);
    }
  else (Pe = !1), q && e.flags & 1048576 && Lh(e, Fs, e.index);
  switch (((e.lanes = 0), e.tag)) {
    case 2:
      var r = e.type;
      vs(t, e), (t = e.pendingProps);
      var i = sr(e, Ie.current);
      Zn(e, n), (i = yu(null, e, r, t, i, n));
      var s = wu();
      return (
        (e.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((e.tag = 1),
            (e.memoizedState = null),
            (e.updateQueue = null),
            Le(r) ? ((s = !0), Ls(e)) : (s = !1),
            (e.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            pu(e),
            (i.updater = Eo),
            (e.stateNode = i),
            (i._reactInternals = e),
            ia(e, r, t, n),
            (e = la(null, e, r, !0, s, n)))
          : ((e.tag = 0), q && s && lu(e), xe(null, e, i, n), (e = e.child)),
        e
      );
    case 16:
      r = e.elementType;
      e: {
        switch (
          (vs(t, e),
          (t = e.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (e.type = r),
          (i = e.tag = Qv(r)),
          (t = Xe(r, t)),
          i)
        ) {
          case 0:
            e = oa(null, e, r, t, n);
            break e;
          case 1:
            e = ud(null, e, r, t, n);
            break e;
          case 11:
            e = ld(null, e, r, t, n);
            break e;
          case 14:
            e = ad(null, e, r, Xe(r.type, t), n);
            break e;
        }
        throw Error(E(306, r, ""));
      }
      return e;
    case 0:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : Xe(r, i)),
        oa(t, e, r, i, n)
      );
    case 1:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : Xe(r, i)),
        ud(t, e, r, i, n)
      );
    case 3:
      e: {
        if ((hp(e), t === null)) throw Error(E(387));
        (r = e.pendingProps),
          (s = e.memoizedState),
          (i = s.element),
          jh(t, e),
          Us(e, r, null, n);
        var o = e.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (e.updateQueue.baseState = s),
            (e.memoizedState = s),
            e.flags & 256)
          ) {
            (i = ur(Error(E(423)), e)), (e = cd(t, e, r, n, i));
            break e;
          } else if (r !== i) {
            (i = ur(Error(E(424)), e)), (e = cd(t, e, r, n, i));
            break e;
          } else
            for (
              ze = Bt(e.stateNode.containerInfo.firstChild),
                Ue = e,
                q = !0,
                Ze = null,
                n = zh(e, null, r, n),
                e.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((or(), r === i)) {
            e = It(t, e, n);
            break e;
          }
          xe(t, e, r, n);
        }
        e = e.child;
      }
      return e;
    case 5:
      return (
        Bh(e),
        t === null && ta(e),
        (r = e.type),
        (i = e.pendingProps),
        (s = t !== null ? t.memoizedProps : null),
        (o = i.children),
        ql(r, i) ? (o = null) : s !== null && ql(r, s) && (e.flags |= 32),
        fp(t, e),
        xe(t, e, o, n),
        e.child
      );
    case 6:
      return t === null && ta(e), null;
    case 13:
      return pp(t, e, n);
    case 4:
      return (
        mu(e, e.stateNode.containerInfo),
        (r = e.pendingProps),
        t === null ? (e.child = lr(e, null, r, n)) : xe(t, e, r, n),
        e.child
      );
    case 11:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : Xe(r, i)),
        ld(t, e, r, i, n)
      );
    case 7:
      return xe(t, e, e.pendingProps, n), e.child;
    case 8:
      return xe(t, e, e.pendingProps.children, n), e.child;
    case 12:
      return xe(t, e, e.pendingProps.children, n), e.child;
    case 10:
      e: {
        if (
          ((r = e.type._context),
          (i = e.pendingProps),
          (s = e.memoizedProps),
          (o = i.value),
          G(bs, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (ot(s.value, o)) {
            if (s.children === i.children && !De.current) {
              e = It(t, e, n);
              break e;
            }
          } else
            for (s = e.child, s !== null && (s.return = e); s !== null; ) {
              var l = s.dependencies;
              if (l !== null) {
                o = s.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (s.tag === 1) {
                      (a = yt(-1, n & -n)), (a.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        d === null
                          ? (a.next = a)
                          : ((a.next = d.next), (d.next = a)),
                          (u.pending = a);
                      }
                    }
                    (s.lanes |= n),
                      (a = s.alternate),
                      a !== null && (a.lanes |= n),
                      na(s.return, n, e),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (s.tag === 10) o = s.type === e.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(E(341));
                (o.lanes |= n),
                  (l = o.alternate),
                  l !== null && (l.lanes |= n),
                  na(o, n, e),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === e) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        xe(t, e, i.children, n), (e = e.child);
      }
      return e;
    case 9:
      return (
        (i = e.type),
        (r = e.pendingProps.children),
        Zn(e, n),
        (i = $e(i)),
        (r = r(i)),
        (e.flags |= 1),
        xe(t, e, r, n),
        e.child
      );
    case 14:
      return (
        (r = e.type),
        (i = Xe(r, e.pendingProps)),
        (i = Xe(r.type, i)),
        ad(t, e, r, i, n)
      );
    case 15:
      return cp(t, e, e.type, e.pendingProps, n);
    case 17:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : Xe(r, i)),
        vs(t, e),
        (e.tag = 1),
        Le(r) ? ((t = !0), Ls(e)) : (t = !1),
        Zn(e, n),
        lp(e, r, i),
        ia(e, r, i, n),
        la(null, e, r, !0, t, n)
      );
    case 19:
      return mp(t, e, n);
    case 22:
      return dp(t, e, n);
  }
  throw Error(E(156, e.tag));
};
function Pp(t, e) {
  return ih(t, e);
}
function Kv(t, e, n, r) {
  (this.tag = t),
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
    (this.pendingProps = e),
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
function Ke(t, e, n, r) {
  return new Kv(t, e, n, r);
}
function Ru(t) {
  return (t = t.prototype), !(!t || !t.isReactComponent);
}
function Qv(t) {
  if (typeof t == "function") return Ru(t) ? 1 : 0;
  if (t != null) {
    if (((t = t.$$typeof), t === Ya)) return 11;
    if (t === qa) return 14;
  }
  return 2;
}
function Gt(t, e) {
  var n = t.alternate;
  return (
    n === null
      ? ((n = Ke(t.tag, e, t.key, t.mode)),
        (n.elementType = t.elementType),
        (n.type = t.type),
        (n.stateNode = t.stateNode),
        (n.alternate = t),
        (t.alternate = n))
      : ((n.pendingProps = e),
        (n.type = t.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = t.flags & 14680064),
    (n.childLanes = t.childLanes),
    (n.lanes = t.lanes),
    (n.child = t.child),
    (n.memoizedProps = t.memoizedProps),
    (n.memoizedState = t.memoizedState),
    (n.updateQueue = t.updateQueue),
    (e = t.dependencies),
    (n.dependencies =
      e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
    (n.sibling = t.sibling),
    (n.index = t.index),
    (n.ref = t.ref),
    n
  );
}
function Es(t, e, n, r, i, s) {
  var o = 2;
  if (((r = t), typeof t == "function")) Ru(t) && (o = 1);
  else if (typeof t == "string") o = 5;
  else
    e: switch (t) {
      case Fn:
        return yn(n.children, i, s, e);
      case $a:
        (o = 8), (i |= 8);
        break;
      case Nl:
        return (
          (t = Ke(12, n, e, i | 2)), (t.elementType = Nl), (t.lanes = s), t
        );
      case Al:
        return (t = Ke(13, n, e, i)), (t.elementType = Al), (t.lanes = s), t;
      case Rl:
        return (t = Ke(19, n, e, i)), (t.elementType = Rl), (t.lanes = s), t;
      case Bf:
        return Io(n, i, s, e);
      default:
        if (typeof t == "object" && t !== null)
          switch (t.$$typeof) {
            case Uf:
              o = 10;
              break e;
            case jf:
              o = 9;
              break e;
            case Ya:
              o = 11;
              break e;
            case qa:
              o = 14;
              break e;
            case Pt:
              (o = 16), (r = null);
              break e;
          }
        throw Error(E(130, t == null ? t : typeof t, ""));
    }
  return (
    (e = Ke(o, n, e, i)), (e.elementType = t), (e.type = r), (e.lanes = s), e
  );
}
function yn(t, e, n, r) {
  return (t = Ke(7, t, r, e)), (t.lanes = n), t;
}
function Io(t, e, n, r) {
  return (
    (t = Ke(22, t, r, e)),
    (t.elementType = Bf),
    (t.lanes = n),
    (t.stateNode = { isHidden: !1 }),
    t
  );
}
function fl(t, e, n) {
  return (t = Ke(6, t, null, e)), (t.lanes = n), t;
}
function hl(t, e, n) {
  return (
    (e = Ke(4, t.children !== null ? t.children : [], t.key, e)),
    (e.lanes = n),
    (e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation,
    }),
    e
  );
}
function $v(t, e, n, r, i) {
  (this.tag = e),
    (this.containerInfo = t),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Qo(0)),
    (this.expirationTimes = Qo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Qo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Pu(t, e, n, r, i, s, o, l, a) {
  return (
    (t = new $v(t, e, n, l, a)),
    e === 1 ? ((e = 1), s === !0 && (e |= 8)) : (e = 0),
    (s = Ke(3, null, null, e)),
    (t.current = s),
    (s.stateNode = t),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    pu(s),
    t
  );
}
function Yv(t, e, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Mn,
    key: r == null ? null : "" + r,
    children: t,
    containerInfo: e,
    implementation: n,
  };
}
function Op(t) {
  if (!t) return Jt;
  t = t._reactInternals;
  e: {
    if (An(t) !== t || t.tag !== 1) throw Error(E(170));
    var e = t;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break e;
        case 1:
          if (Le(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      e = e.return;
    } while (e !== null);
    throw Error(E(171));
  }
  if (t.tag === 1) {
    var n = t.type;
    if (Le(n)) return Oh(t, n, e);
  }
  return e;
}
function Dp(t, e, n, r, i, s, o, l, a) {
  return (
    (t = Pu(n, r, !0, t, i, s, o, l, a)),
    (t.context = Op(null)),
    (n = t.current),
    (r = ke()),
    (i = Ht(n)),
    (s = yt(r, i)),
    (s.callback = e ?? null),
    Wt(n, s, i),
    (t.current.lanes = i),
    Ai(t, i, r),
    Me(t, r),
    t
  );
}
function xo(t, e, n, r) {
  var i = e.current,
    s = ke(),
    o = Ht(i);
  return (
    (n = Op(n)),
    e.context === null ? (e.context = n) : (e.pendingContext = n),
    (e = yt(s, o)),
    (e.payload = { element: t }),
    (r = r === void 0 ? null : r),
    r !== null && (e.callback = r),
    (t = Wt(i, e, o)),
    t !== null && (it(t, i, o, s), ms(t, i, o)),
    o
  );
}
function Qs(t) {
  if (((t = t.current), !t.child)) return null;
  switch (t.child.tag) {
    case 5:
      return t.child.stateNode;
    default:
      return t.child.stateNode;
  }
}
function wd(t, e) {
  if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
    var n = t.retryLane;
    t.retryLane = n !== 0 && n < e ? n : e;
  }
}
function Ou(t, e) {
  wd(t, e), (t = t.alternate) && wd(t, e);
}
function qv() {
  return null;
}
var Lp =
  typeof reportError == "function"
    ? reportError
    : function (t) {
        console.error(t);
      };
function Du(t) {
  this._internalRoot = t;
}
To.prototype.render = Du.prototype.render = function (t) {
  var e = this._internalRoot;
  if (e === null) throw Error(E(409));
  xo(t, e, null, null);
};
To.prototype.unmount = Du.prototype.unmount = function () {
  var t = this._internalRoot;
  if (t !== null) {
    this._internalRoot = null;
    var e = t.containerInfo;
    In(function () {
      xo(null, t, null, null);
    }),
      (e[Ct] = null);
  }
};
function To(t) {
  this._internalRoot = t;
}
To.prototype.unstable_scheduleHydration = function (t) {
  if (t) {
    var e = dh();
    t = { blockedOn: null, target: t, priority: e };
    for (var n = 0; n < Dt.length && e !== 0 && e < Dt[n].priority; n++);
    Dt.splice(n, 0, t), n === 0 && hh(t);
  }
};
function Lu(t) {
  return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
}
function ko(t) {
  return !(
    !t ||
    (t.nodeType !== 1 &&
      t.nodeType !== 9 &&
      t.nodeType !== 11 &&
      (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ed() {}
function Xv(t, e, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = Qs(o);
        s.call(u);
      };
    }
    var o = Dp(e, r, t, 0, null, !1, !1, "", Ed);
    return (
      (t._reactRootContainer = o),
      (t[Ct] = o.current),
      oi(t.nodeType === 8 ? t.parentNode : t),
      In(),
      o
    );
  }
  for (; (i = t.lastChild); ) t.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = Qs(a);
      l.call(u);
    };
  }
  var a = Pu(t, 0, !1, null, null, !1, !1, "", Ed);
  return (
    (t._reactRootContainer = a),
    (t[Ct] = a.current),
    oi(t.nodeType === 8 ? t.parentNode : t),
    In(function () {
      xo(e, a, n, r);
    }),
    a
  );
}
function No(t, e, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var a = Qs(o);
        l.call(a);
      };
    }
    xo(e, o, t, i);
  } else o = Xv(n, e, t, i, r);
  return Qs(o);
}
uh = function (t) {
  switch (t.tag) {
    case 3:
      var e = t.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var n = Fr(e.pendingLanes);
        n !== 0 &&
          (Za(e, n | 1), Me(e, re()), !(U & 6) && ((cr = re() + 500), sn()));
      }
      break;
    case 13:
      In(function () {
        var r = St(t, 1);
        if (r !== null) {
          var i = ke();
          it(r, t, 1, i);
        }
      }),
        Ou(t, 1);
  }
};
eu = function (t) {
  if (t.tag === 13) {
    var e = St(t, 134217728);
    if (e !== null) {
      var n = ke();
      it(e, t, 134217728, n);
    }
    Ou(t, 134217728);
  }
};
ch = function (t) {
  if (t.tag === 13) {
    var e = Ht(t),
      n = St(t, e);
    if (n !== null) {
      var r = ke();
      it(n, t, e, r);
    }
    Ou(t, e);
  }
};
dh = function () {
  return B;
};
fh = function (t, e) {
  var n = B;
  try {
    return (B = t), e();
  } finally {
    B = n;
  }
};
jl = function (t, e, n) {
  switch (e) {
    case "input":
      if ((Dl(t, n), (e = n.name), n.type === "radio" && e != null)) {
        for (n = t; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + e) + '][type="radio"]'
          ),
            e = 0;
          e < n.length;
          e++
        ) {
          var r = n[e];
          if (r !== t && r.form === t.form) {
            var i = vo(r);
            if (!i) throw Error(E(90));
            Vf(r), Dl(r, i);
          }
        }
      }
      break;
    case "textarea":
      Gf(t, n);
      break;
    case "select":
      (e = n.value), e != null && Yn(t, !!n.multiple, e, !1);
  }
};
Jf = ku;
Zf = In;
var Jv = { usingClientEntryPoint: !1, Events: [Pi, jn, vo, qf, Xf, ku] },
  Ar = {
    findFiberByHostInstance: pn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Zv = {
    bundleType: Ar.bundleType,
    version: Ar.version,
    rendererPackageName: Ar.rendererPackageName,
    rendererConfig: Ar.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: kt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (t) {
      return (t = nh(t)), t === null ? null : t.stateNode;
    },
    findFiberByHostInstance: Ar.findFiberByHostInstance || qv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ls = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ls.isDisabled && ls.supportsFiber)
    try {
      (po = ls.inject(Zv)), (ct = ls);
    } catch {}
}
We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jv;
We.createPortal = function (t, e) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Lu(e)) throw Error(E(200));
  return Yv(t, e, null, n);
};
We.createRoot = function (t, e) {
  if (!Lu(t)) throw Error(E(299));
  var n = !1,
    r = "",
    i = Lp;
  return (
    e != null &&
      (e.unstable_strictMode === !0 && (n = !0),
      e.identifierPrefix !== void 0 && (r = e.identifierPrefix),
      e.onRecoverableError !== void 0 && (i = e.onRecoverableError)),
    (e = Pu(t, 1, !1, null, null, n, !1, r, i)),
    (t[Ct] = e.current),
    oi(t.nodeType === 8 ? t.parentNode : t),
    new Du(e)
  );
};
We.findDOMNode = function (t) {
  if (t == null) return null;
  if (t.nodeType === 1) return t;
  var e = t._reactInternals;
  if (e === void 0)
    throw typeof t.render == "function"
      ? Error(E(188))
      : ((t = Object.keys(t).join(",")), Error(E(268, t)));
  return (t = nh(e)), (t = t === null ? null : t.stateNode), t;
};
We.flushSync = function (t) {
  return In(t);
};
We.hydrate = function (t, e, n) {
  if (!ko(e)) throw Error(E(200));
  return No(null, t, e, !0, n);
};
We.hydrateRoot = function (t, e, n) {
  if (!Lu(t)) throw Error(E(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    o = Lp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (e = Dp(e, null, t, 1, n ?? null, i, !1, s, o)),
    (t[Ct] = e.current),
    oi(t),
    r)
  )
    for (t = 0; t < r.length; t++)
      (n = r[t]),
        (i = n._getVersion),
        (i = i(n._source)),
        e.mutableSourceEagerHydrationData == null
          ? (e.mutableSourceEagerHydrationData = [n, i])
          : e.mutableSourceEagerHydrationData.push(n, i);
  return new To(e);
};
We.render = function (t, e, n) {
  if (!ko(e)) throw Error(E(200));
  return No(null, t, e, !1, n);
};
We.unmountComponentAtNode = function (t) {
  if (!ko(t)) throw Error(E(40));
  return t._reactRootContainer
    ? (In(function () {
        No(null, null, t, !1, function () {
          (t._reactRootContainer = null), (t[Ct] = null);
        });
      }),
      !0)
    : !1;
};
We.unstable_batchedUpdates = ku;
We.unstable_renderSubtreeIntoContainer = function (t, e, n, r) {
  if (!ko(n)) throw Error(E(200));
  if (t == null || t._reactInternals === void 0) throw Error(E(38));
  return No(t, e, n, !1, r);
};
We.version = "18.3.1-next-f1338f8080-20240426";
function Mp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mp);
    } catch (t) {
      console.error(t);
    }
}
Mp(), (Mf.exports = We);
var ey = Mf.exports,
  Cd = ey;
(Tl.createRoot = Cd.createRoot), (Tl.hydrateRoot = Cd.hydrateRoot);
/**
 * @remix-run/router v1.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function mi() {
  return (
    (mi = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        }),
    mi.apply(this, arguments)
  );
}
var bt;
(function (t) {
  (t.Pop = "POP"), (t.Push = "PUSH"), (t.Replace = "REPLACE");
})(bt || (bt = {}));
const Sd = "popstate";
function ty(t) {
  t === void 0 && (t = {});
  function e(r, i) {
    let { pathname: s, search: o, hash: l } = r.location;
    return ya(
      "",
      { pathname: s, search: o, hash: l },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : $s(i);
  }
  return ry(e, n, null, t);
}
function se(t, e) {
  if (t === !1 || t === null || typeof t > "u") throw new Error(e);
}
function Fp(t, e) {
  if (!t) {
    typeof console < "u" && console.warn(e);
    try {
      throw new Error(e);
    } catch {}
  }
}
function ny() {
  return Math.random().toString(36).substr(2, 8);
}
function Id(t, e) {
  return { usr: t.state, key: t.key, idx: e };
}
function ya(t, e, n, r) {
  return (
    n === void 0 && (n = null),
    mi(
      { pathname: typeof t == "string" ? t : t.pathname, search: "", hash: "" },
      typeof e == "string" ? vr(e) : e,
      { state: n, key: (e && e.key) || r || ny() }
    )
  );
}
function $s(t) {
  let { pathname: e = "/", search: n = "", hash: r = "" } = t;
  return (
    n && n !== "?" && (e += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (e += r.charAt(0) === "#" ? r : "#" + r),
    e
  );
}
function vr(t) {
  let e = {};
  if (t) {
    let n = t.indexOf("#");
    n >= 0 && ((e.hash = t.substr(n)), (t = t.substr(0, n)));
    let r = t.indexOf("?");
    r >= 0 && ((e.search = t.substr(r)), (t = t.substr(0, r))),
      t && (e.pathname = t);
  }
  return e;
}
function ry(t, e, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: s = !1 } = r,
    o = i.history,
    l = bt.Pop,
    a = null,
    u = d();
  u == null && ((u = 0), o.replaceState(mi({}, o.state, { idx: u }), ""));
  function d() {
    return (o.state || { idx: null }).idx;
  }
  function c() {
    l = bt.Pop;
    let C = d(),
      m = C == null ? null : C - u;
    (u = C), a && a({ action: l, location: y.location, delta: m });
  }
  function f(C, m) {
    l = bt.Push;
    let h = ya(y.location, C, m);
    u = d() + 1;
    let p = Id(h, u),
      v = y.createHref(h);
    try {
      o.pushState(p, "", v);
    } catch (w) {
      if (w instanceof DOMException && w.name === "DataCloneError") throw w;
      i.location.assign(v);
    }
    s && a && a({ action: l, location: y.location, delta: 1 });
  }
  function g(C, m) {
    l = bt.Replace;
    let h = ya(y.location, C, m);
    u = d();
    let p = Id(h, u),
      v = y.createHref(h);
    o.replaceState(p, "", v),
      s && a && a({ action: l, location: y.location, delta: 0 });
  }
  function _(C) {
    let m = i.location.origin !== "null" ? i.location.origin : i.location.href,
      h = typeof C == "string" ? C : $s(C);
    return (
      (h = h.replace(/ $/, "%20")),
      se(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          h
      ),
      new URL(h, m)
    );
  }
  let y = {
    get action() {
      return l;
    },
    get location() {
      return t(i, o);
    },
    listen(C) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Sd, c),
        (a = C),
        () => {
          i.removeEventListener(Sd, c), (a = null);
        }
      );
    },
    createHref(C) {
      return e(i, C);
    },
    createURL: _,
    encodeLocation(C) {
      let m = _(C);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: f,
    replace: g,
    go(C) {
      return o.go(C);
    },
  };
  return y;
}
var xd;
(function (t) {
  (t.data = "data"),
    (t.deferred = "deferred"),
    (t.redirect = "redirect"),
    (t.error = "error");
})(xd || (xd = {}));
function iy(t, e, n) {
  return n === void 0 && (n = "/"), sy(t, e, n, !1);
}
function sy(t, e, n, r) {
  let i = typeof e == "string" ? vr(e) : e,
    s = Mu(i.pathname || "/", n);
  if (s == null) return null;
  let o = bp(t);
  oy(o);
  let l = null;
  for (let a = 0; l == null && a < o.length; ++a) {
    let u = _y(s);
    l = my(o[a], u, r);
  }
  return l;
}
function bp(t, e, n, r) {
  e === void 0 && (e = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (s, o, l) => {
    let a = {
      relativePath: l === void 0 ? s.path || "" : l,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: o,
      route: s,
    };
    a.relativePath.startsWith("/") &&
      (se(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let u = Kt([r, a.relativePath]),
      d = n.concat(a);
    s.children &&
      s.children.length > 0 &&
      (se(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      bp(s.children, e, d, u)),
      !(s.path == null && !s.index) &&
        e.push({ path: u, score: hy(u, s.index), routesMeta: d });
  };
  return (
    t.forEach((s, o) => {
      var l;
      if (s.path === "" || !((l = s.path) != null && l.includes("?"))) i(s, o);
      else for (let a of zp(s.path)) i(s, o, a);
    }),
    e
  );
}
function zp(t) {
  let e = t.split("/");
  if (e.length === 0) return [];
  let [n, ...r] = e,
    i = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [s, ""] : [s];
  let o = zp(r.join("/")),
    l = [];
  return (
    l.push(...o.map((a) => (a === "" ? s : [s, a].join("/")))),
    i && l.push(...o),
    l.map((a) => (t.startsWith("/") && a === "" ? "/" : a))
  );
}
function oy(t) {
  t.sort((e, n) =>
    e.score !== n.score
      ? n.score - e.score
      : py(
          e.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const ly = /^:[\w-]+$/,
  ay = 3,
  uy = 2,
  cy = 1,
  dy = 10,
  fy = -2,
  Td = (t) => t === "*";
function hy(t, e) {
  let n = t.split("/"),
    r = n.length;
  return (
    n.some(Td) && (r += fy),
    e && (r += uy),
    n
      .filter((i) => !Td(i))
      .reduce((i, s) => i + (ly.test(s) ? ay : s === "" ? cy : dy), r)
  );
}
function py(t, e) {
  return t.length === e.length && t.slice(0, -1).every((r, i) => r === e[i])
    ? t[t.length - 1] - e[e.length - 1]
    : 0;
}
function my(t, e, n) {
  let { routesMeta: r } = t,
    i = {},
    s = "/",
    o = [];
  for (let l = 0; l < r.length; ++l) {
    let a = r[l],
      u = l === r.length - 1,
      d = s === "/" ? e : e.slice(s.length) || "/",
      c = kd(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
        d
      ),
      f = a.route;
    if (
      (!c &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (c = kd(
          { path: a.relativePath, caseSensitive: a.caseSensitive, end: !1 },
          d
        )),
      !c)
    )
      return null;
    Object.assign(i, c.params),
      o.push({
        params: i,
        pathname: Kt([s, c.pathname]),
        pathnameBase: Ey(Kt([s, c.pathnameBase])),
        route: f,
      }),
      c.pathnameBase !== "/" && (s = Kt([s, c.pathnameBase]));
  }
  return o;
}
function kd(t, e) {
  typeof t == "string" && (t = { path: t, caseSensitive: !1, end: !0 });
  let [n, r] = gy(t.path, t.caseSensitive, t.end),
    i = e.match(n);
  if (!i) return null;
  let s = i[0],
    o = s.replace(/(.)\/+$/, "$1"),
    l = i.slice(1);
  return {
    params: r.reduce((u, d, c) => {
      let { paramName: f, isOptional: g } = d;
      if (f === "*") {
        let y = l[c] || "";
        o = s.slice(0, s.length - y.length).replace(/(.)\/+$/, "$1");
      }
      const _ = l[c];
      return (
        g && !_ ? (u[f] = void 0) : (u[f] = (_ || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: s,
    pathnameBase: o,
    pattern: t,
  };
}
function gy(t, e, n) {
  e === void 0 && (e = !1),
    n === void 0 && (n = !0),
    Fp(
      t === "*" || !t.endsWith("*") || t.endsWith("/*"),
      'Route path "' +
        t +
        '" will be treated as if it were ' +
        ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + t.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      t
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, l, a) => (
            r.push({ paramName: l, isOptional: a != null }),
            a ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    t.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : t !== "" && t !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, e ? void 0 : "i"), r]
  );
}
function _y(t) {
  try {
    return t
      .split("/")
      .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
      .join("/");
  } catch (e) {
    return (
      Fp(
        !1,
        'The URL path "' +
          t +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + e + ").")
      ),
      t
    );
  }
}
function Mu(t, e) {
  if (e === "/") return t;
  if (!t.toLowerCase().startsWith(e.toLowerCase())) return null;
  let n = e.endsWith("/") ? e.length - 1 : e.length,
    r = t.charAt(n);
  return r && r !== "/" ? null : t.slice(n) || "/";
}
function vy(t, e) {
  e === void 0 && (e = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof t == "string" ? vr(t) : t;
  return {
    pathname: n ? (n.startsWith("/") ? n : yy(n, e)) : e,
    search: Cy(r),
    hash: Sy(i),
  };
}
function yy(t, e) {
  let n = e.replace(/\/+$/, "").split("/");
  return (
    t.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function pl(t, e, n, r) {
  return (
    "Cannot include a '" +
    t +
    "' character in a manually specified " +
    ("`to." +
      e +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function wy(t) {
  return t.filter(
    (e, n) => n === 0 || (e.route.path && e.route.path.length > 0)
  );
}
function Up(t, e) {
  let n = wy(t);
  return e
    ? n.map((r, i) => (i === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function jp(t, e, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof t == "string"
    ? (i = vr(t))
    : ((i = mi({}, t)),
      se(
        !i.pathname || !i.pathname.includes("?"),
        pl("?", "pathname", "search", i)
      ),
      se(
        !i.pathname || !i.pathname.includes("#"),
        pl("#", "pathname", "hash", i)
      ),
      se(!i.search || !i.search.includes("#"), pl("#", "search", "hash", i)));
  let s = t === "" || i.pathname === "",
    o = s ? "/" : i.pathname,
    l;
  if (o == null) l = n;
  else {
    let c = e.length - 1;
    if (!r && o.startsWith("..")) {
      let f = o.split("/");
      for (; f[0] === ".."; ) f.shift(), (c -= 1);
      i.pathname = f.join("/");
    }
    l = c >= 0 ? e[c] : "/";
  }
  let a = vy(i, l),
    u = o && o !== "/" && o.endsWith("/"),
    d = (s || o === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (u || d) && (a.pathname += "/"), a;
}
const Kt = (t) => t.join("/").replace(/\/\/+/g, "/"),
  Ey = (t) => t.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Cy = (t) => (!t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t),
  Sy = (t) => (!t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t);
function Iy(t) {
  return (
    t != null &&
    typeof t.status == "number" &&
    typeof t.statusText == "string" &&
    typeof t.internal == "boolean" &&
    "data" in t
  );
}
const Bp = ["post", "put", "patch", "delete"];
new Set(Bp);
const xy = ["get", ...Bp];
new Set(xy);
/**
 * React Router v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function gi() {
  return (
    (gi = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        }),
    gi.apply(this, arguments)
  );
}
const Fu = I.createContext(null),
  Ty = I.createContext(null),
  Rn = I.createContext(null),
  Ao = I.createContext(null),
  Pn = I.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Wp = I.createContext(null);
function ky(t, e) {
  let { relative: n } = e === void 0 ? {} : e;
  Di() || se(!1);
  let { basename: r, navigator: i } = I.useContext(Rn),
    { hash: s, pathname: o, search: l } = Hp(t, { relative: n }),
    a = o;
  return (
    r !== "/" && (a = o === "/" ? r : Kt([r, o])),
    i.createHref({ pathname: a, search: l, hash: s })
  );
}
function Di() {
  return I.useContext(Ao) != null;
}
function Ro() {
  return Di() || se(!1), I.useContext(Ao).location;
}
function Vp(t) {
  I.useContext(Rn).static || I.useLayoutEffect(t);
}
function Ny() {
  let { isDataRoute: t } = I.useContext(Pn);
  return t ? By() : Ay();
}
function Ay() {
  Di() || se(!1);
  let t = I.useContext(Fu),
    { basename: e, future: n, navigator: r } = I.useContext(Rn),
    { matches: i } = I.useContext(Pn),
    { pathname: s } = Ro(),
    o = JSON.stringify(Up(i, n.v7_relativeSplatPath)),
    l = I.useRef(!1);
  return (
    Vp(() => {
      l.current = !0;
    }),
    I.useCallback(
      function (u, d) {
        if ((d === void 0 && (d = {}), !l.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let c = jp(u, JSON.parse(o), s, d.relative === "path");
        t == null &&
          e !== "/" &&
          (c.pathname = c.pathname === "/" ? e : Kt([e, c.pathname])),
          (d.replace ? r.replace : r.push)(c, d.state, d);
      },
      [e, r, o, s, t]
    )
  );
}
function Hp(t, e) {
  let { relative: n } = e === void 0 ? {} : e,
    { future: r } = I.useContext(Rn),
    { matches: i } = I.useContext(Pn),
    { pathname: s } = Ro(),
    o = JSON.stringify(Up(i, r.v7_relativeSplatPath));
  return I.useMemo(() => jp(t, JSON.parse(o), s, n === "path"), [t, o, s, n]);
}
function Ry(t, e) {
  return Py(t, e);
}
function Py(t, e, n, r) {
  Di() || se(!1);
  let { navigator: i } = I.useContext(Rn),
    { matches: s } = I.useContext(Pn),
    o = s[s.length - 1],
    l = o ? o.params : {};
  o && o.pathname;
  let a = o ? o.pathnameBase : "/";
  o && o.route;
  let u = Ro(),
    d;
  if (e) {
    var c;
    let C = typeof e == "string" ? vr(e) : e;
    a === "/" || ((c = C.pathname) != null && c.startsWith(a)) || se(!1),
      (d = C);
  } else d = u;
  let f = d.pathname || "/",
    g = f;
  if (a !== "/") {
    let C = a.replace(/^\//, "").split("/");
    g = "/" + f.replace(/^\//, "").split("/").slice(C.length).join("/");
  }
  let _ = iy(t, { pathname: g }),
    y = Fy(
      _ &&
        _.map((C) =>
          Object.assign({}, C, {
            params: Object.assign({}, l, C.params),
            pathname: Kt([
              a,
              i.encodeLocation
                ? i.encodeLocation(C.pathname).pathname
                : C.pathname,
            ]),
            pathnameBase:
              C.pathnameBase === "/"
                ? a
                : Kt([
                    a,
                    i.encodeLocation
                      ? i.encodeLocation(C.pathnameBase).pathname
                      : C.pathnameBase,
                  ]),
          })
        ),
      s,
      n,
      r
    );
  return e && y
    ? I.createElement(
        Ao.Provider,
        {
          value: {
            location: gi(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              d
            ),
            navigationType: bt.Pop,
          },
        },
        y
      )
    : y;
}
function Oy() {
  let t = jy(),
    e = Iy(t)
      ? t.status + " " + t.statusText
      : t instanceof Error
      ? t.message
      : JSON.stringify(t),
    n = t instanceof Error ? t.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return I.createElement(
    I.Fragment,
    null,
    I.createElement("h2", null, "Unexpected Application Error!"),
    I.createElement("h3", { style: { fontStyle: "italic" } }, e),
    n ? I.createElement("pre", { style: i }, n) : null,
    null
  );
}
const Dy = I.createElement(Oy, null);
class Ly extends I.Component {
  constructor(e) {
    super(e),
      (this.state = {
        location: e.location,
        revalidation: e.revalidation,
        error: e.error,
      });
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  static getDerivedStateFromProps(e, n) {
    return n.location !== e.location ||
      (n.revalidation !== "idle" && e.revalidation === "idle")
      ? { error: e.error, location: e.location, revalidation: e.revalidation }
      : {
          error: e.error !== void 0 ? e.error : n.error,
          location: n.location,
          revalidation: e.revalidation || n.revalidation,
        };
  }
  componentDidCatch(e, n) {
    console.error(
      "React Router caught the following error during render",
      e,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? I.createElement(
          Pn.Provider,
          { value: this.props.routeContext },
          I.createElement(Wp.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function My(t) {
  let { routeContext: e, match: n, children: r } = t,
    i = I.useContext(Fu);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    I.createElement(Pn.Provider, { value: e }, r)
  );
}
function Fy(t, e, n, r) {
  var i;
  if (
    (e === void 0 && (e = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    t == null)
  ) {
    var s;
    if (!n) return null;
    if (n.errors) t = n.matches;
    else if (
      (s = r) != null &&
      s.v7_partialHydration &&
      e.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      t = n.matches;
    else return null;
  }
  let o = t,
    l = (i = n) == null ? void 0 : i.errors;
  if (l != null) {
    let d = o.findIndex(
      (c) => c.route.id && (l == null ? void 0 : l[c.route.id]) !== void 0
    );
    d >= 0 || se(!1), (o = o.slice(0, Math.min(o.length, d + 1)));
  }
  let a = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let d = 0; d < o.length; d++) {
      let c = o[d];
      if (
        ((c.route.HydrateFallback || c.route.hydrateFallbackElement) && (u = d),
        c.route.id)
      ) {
        let { loaderData: f, errors: g } = n,
          _ =
            c.route.loader &&
            f[c.route.id] === void 0 &&
            (!g || g[c.route.id] === void 0);
        if (c.route.lazy || _) {
          (a = !0), u >= 0 ? (o = o.slice(0, u + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((d, c, f) => {
    let g,
      _ = !1,
      y = null,
      C = null;
    n &&
      ((g = l && c.route.id ? l[c.route.id] : void 0),
      (y = c.route.errorElement || Dy),
      a &&
        (u < 0 && f === 0
          ? ((_ = !0), (C = null))
          : u === f &&
            ((_ = !0), (C = c.route.hydrateFallbackElement || null))));
    let m = e.concat(o.slice(0, f + 1)),
      h = () => {
        let p;
        return (
          g
            ? (p = y)
            : _
            ? (p = C)
            : c.route.Component
            ? (p = I.createElement(c.route.Component, null))
            : c.route.element
            ? (p = c.route.element)
            : (p = d),
          I.createElement(My, {
            match: c,
            routeContext: { outlet: d, matches: m, isDataRoute: n != null },
            children: p,
          })
        );
      };
    return n && (c.route.ErrorBoundary || c.route.errorElement || f === 0)
      ? I.createElement(Ly, {
          location: n.location,
          revalidation: n.revalidation,
          component: y,
          error: g,
          children: h(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : h();
  }, null);
}
var Gp = (function (t) {
    return (
      (t.UseBlocker = "useBlocker"),
      (t.UseRevalidator = "useRevalidator"),
      (t.UseNavigateStable = "useNavigate"),
      t
    );
  })(Gp || {}),
  Ys = (function (t) {
    return (
      (t.UseBlocker = "useBlocker"),
      (t.UseLoaderData = "useLoaderData"),
      (t.UseActionData = "useActionData"),
      (t.UseRouteError = "useRouteError"),
      (t.UseNavigation = "useNavigation"),
      (t.UseRouteLoaderData = "useRouteLoaderData"),
      (t.UseMatches = "useMatches"),
      (t.UseRevalidator = "useRevalidator"),
      (t.UseNavigateStable = "useNavigate"),
      (t.UseRouteId = "useRouteId"),
      t
    );
  })(Ys || {});
function by(t) {
  let e = I.useContext(Fu);
  return e || se(!1), e;
}
function zy(t) {
  let e = I.useContext(Ty);
  return e || se(!1), e;
}
function Uy(t) {
  let e = I.useContext(Pn);
  return e || se(!1), e;
}
function Kp(t) {
  let e = Uy(),
    n = e.matches[e.matches.length - 1];
  return n.route.id || se(!1), n.route.id;
}
function jy() {
  var t;
  let e = I.useContext(Wp),
    n = zy(Ys.UseRouteError),
    r = Kp(Ys.UseRouteError);
  return e !== void 0 ? e : (t = n.errors) == null ? void 0 : t[r];
}
function By() {
  let { router: t } = by(Gp.UseNavigateStable),
    e = Kp(Ys.UseNavigateStable),
    n = I.useRef(!1);
  return (
    Vp(() => {
      n.current = !0;
    }),
    I.useCallback(
      function (i, s) {
        s === void 0 && (s = {}),
          n.current &&
            (typeof i == "number"
              ? t.navigate(i)
              : t.navigate(i, gi({ fromRouteId: e }, s)));
      },
      [t, e]
    )
  );
}
function Cs(t) {
  se(!1);
}
function Wy(t) {
  let {
    basename: e = "/",
    children: n = null,
    location: r,
    navigationType: i = bt.Pop,
    navigator: s,
    static: o = !1,
    future: l,
  } = t;
  Di() && se(!1);
  let a = e.replace(/^\/*/, "/"),
    u = I.useMemo(
      () => ({
        basename: a,
        navigator: s,
        static: o,
        future: gi({ v7_relativeSplatPath: !1 }, l),
      }),
      [a, l, s, o]
    );
  typeof r == "string" && (r = vr(r));
  let {
      pathname: d = "/",
      search: c = "",
      hash: f = "",
      state: g = null,
      key: _ = "default",
    } = r,
    y = I.useMemo(() => {
      let C = Mu(d, a);
      return C == null
        ? null
        : {
            location: { pathname: C, search: c, hash: f, state: g, key: _ },
            navigationType: i,
          };
    }, [a, d, c, f, g, _, i]);
  return y == null
    ? null
    : I.createElement(
        Rn.Provider,
        { value: u },
        I.createElement(Ao.Provider, { children: n, value: y })
      );
}
function Vy(t) {
  let { children: e, location: n } = t;
  return Ry(wa(e), n);
}
new Promise(() => {});
function wa(t, e) {
  e === void 0 && (e = []);
  let n = [];
  return (
    I.Children.forEach(t, (r, i) => {
      if (!I.isValidElement(r)) return;
      let s = [...e, i];
      if (r.type === I.Fragment) {
        n.push.apply(n, wa(r.props.children, s));
        return;
      }
      r.type !== Cs && se(!1), !r.props.index || !r.props.children || se(!1);
      let o = {
        id: r.props.id || s.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (o.children = wa(r.props.children, s)), n.push(o);
    }),
    n
  );
}
/**
 * React Router DOM v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ea() {
  return (
    (Ea = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        }),
    Ea.apply(this, arguments)
  );
}
function Hy(t, e) {
  if (t == null) return {};
  var n = {},
    r = Object.keys(t),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(e.indexOf(i) >= 0) && (n[i] = t[i]);
  return n;
}
function Gy(t) {
  return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
}
function Ky(t, e) {
  return t.button === 0 && (!e || e === "_self") && !Gy(t);
}
const Qy = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  $y = "6";
try {
  window.__reactRouterVersion = $y;
} catch {}
const Yy = "startTransition",
  Nd = Vg[Yy];
function qy(t) {
  let { basename: e, children: n, future: r, window: i } = t,
    s = I.useRef();
  s.current == null && (s.current = ty({ window: i, v5Compat: !0 }));
  let o = s.current,
    [l, a] = I.useState({ action: o.action, location: o.location }),
    { v7_startTransition: u } = r || {},
    d = I.useCallback(
      (c) => {
        u && Nd ? Nd(() => a(c)) : a(c);
      },
      [a, u]
    );
  return (
    I.useLayoutEffect(() => o.listen(d), [o, d]),
    I.createElement(Wy, {
      basename: e,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: o,
      future: r,
    })
  );
}
const Xy =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Jy = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Zy = I.forwardRef(function (e, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: s,
        replace: o,
        state: l,
        target: a,
        to: u,
        preventScrollReset: d,
        unstable_viewTransition: c,
      } = e,
      f = Hy(e, Qy),
      { basename: g } = I.useContext(Rn),
      _,
      y = !1;
    if (typeof u == "string" && Jy.test(u) && ((_ = u), Xy))
      try {
        let p = new URL(window.location.href),
          v = u.startsWith("//") ? new URL(p.protocol + u) : new URL(u),
          w = Mu(v.pathname, g);
        v.origin === p.origin && w != null
          ? (u = w + v.search + v.hash)
          : (y = !0);
      } catch {}
    let C = ky(u, { relative: i }),
      m = e0(u, {
        replace: o,
        state: l,
        target: a,
        preventScrollReset: d,
        relative: i,
        unstable_viewTransition: c,
      });
    function h(p) {
      r && r(p), p.defaultPrevented || m(p);
    }
    return I.createElement(
      "a",
      Ea({}, f, { href: _ || C, onClick: y || s ? r : h, ref: n, target: a })
    );
  });
var Ad;
(function (t) {
  (t.UseScrollRestoration = "useScrollRestoration"),
    (t.UseSubmit = "useSubmit"),
    (t.UseSubmitFetcher = "useSubmitFetcher"),
    (t.UseFetcher = "useFetcher"),
    (t.useViewTransitionState = "useViewTransitionState");
})(Ad || (Ad = {}));
var Rd;
(function (t) {
  (t.UseFetcher = "useFetcher"),
    (t.UseFetchers = "useFetchers"),
    (t.UseScrollRestoration = "useScrollRestoration");
})(Rd || (Rd = {}));
function e0(t, e) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: s,
      relative: o,
      unstable_viewTransition: l,
    } = e === void 0 ? {} : e,
    a = Ny(),
    u = Ro(),
    d = Hp(t, { relative: o });
  return I.useCallback(
    (c) => {
      if (Ky(c, n)) {
        c.preventDefault();
        let f = r !== void 0 ? r : $s(u) === $s(d);
        a(t, {
          replace: f,
          state: i,
          preventScrollReset: s,
          relative: o,
          unstable_viewTransition: l,
        });
      }
    },
    [u, a, d, r, i, n, t, s, o, l]
  );
}
const t0 = "/assets/background-BbOqAAdI.svg",
  n0 =
    "data:image/svg+xml,%3csvg%20version='1.2'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20235%2022'%20width='235'%20height='22'%3e%3ctitle%3eNew%20Project%3c/title%3e%3cdefs%3e%3cimage%20width='235'%20height='22'%20id='img1'%20href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOsAAAAWBAMAAADTKHYhAAAAAXNSR0IB2cksfwAAADBQTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWj8cCwAAABB0Uk5TABI3W4mj/78KBHFIHN4BKE36ulIAAAVXSURBVHicvVVtTFtVGH5vaXtbBm0DG2boTMewbgsq+zHcQLMOEyCISceU748ChSUEk7ohgwFZyXBMoknloyhsXf0AFCXgzIwSkxUzAXFhDTMyWAZMs2U2knXKcBbo9T3n9pYJ6PrL86Oce573vM95P54XBvxZIRERqpBTfpn6txg/TLZGqsmf9/5fWo2W/lmy+uVQLm+1pyY+DGeC9m9mr09fxYPGX17QUaTj2rU+EJeEmXjDM9/jz72hC2p/WJXDZgD2Q5fvQGbd/cRanJHqydcf3QAVLkkr2Yt+NLPNEKarjPBe3P38b9DjglVLVFC78pDhDU/zm8Ac/GEPpuzdyk6/riX7fEjmowk/mJIo4EwYPWOPqEUGgJ1G3MdEA/KH6RbPAnOcj7hkHVo239nviyEdjvFvIF421ot47wfiaYkC2gjSMg7sNqMXZzTaKbvMao/Vz1UBjDroRe5RE6VVHpq30HjzoB3g5/I3OvlXiKLGAaR6WZPikaQXk4DWwfsukcHzmYvGSHhPqBQjZlg+g/ugUcxuj8uLU1pIUJdGa7QqF8nrkA2SUoHQ9u5R896YYqRVJKl4BwALR0NNSOu23azjn9plh4FZxZZWjKyItp5Uv9h/w6BasooMDIepxDtGYPe9LOBMFwbqrIHkvBHzrst4hM+jzpE2ahLKaMkoraQAd40q8q3RIhehTcNP+TsEh1j925PSFhAXUrcWh9uGdeQ65qoCgl0Ds6QMnrfQ2oszCeqB6jizpybC4OnORm1uyAYMn9AulZs9UUYf7YKRK7DF6nlaNEHavnRYCBRbaEqdX42Z8bq4EFuC3C6NVh7CHkXTiv5AM5ycZT4hifPiSHtXCewXs2y+1JYF4SaLg6tW04tAjsFH22W/v8fBd5FA25PD1ddyHVTZ7objJBmYXZ52KjvOjAWocGVJbaJ3IU11ZTBl6/C4F2dKSOkvDWMw4jJip9GikZf2949BaM92+Kltm0VbGi3Q3thkdPdmHtlhYJuxLv06qVOlcjn7pXp6fcGovAtYIsxt4tfYEsr05Z2TRDkJPE5pM7DR02jVSqMrsBLK8AlCy8uY0mL6SpY7x8xCkjeNb8YAu/SjuZNiS0CRpB0LL28wBrRJ9cuhdzLj6WQrU6hpQwDbHFBUeYcM19IYHqe0FZG0K3At9mageGOeJeMC2B9GBFrPaUgLHt0LWVqelh67OwsufWSWtlgclVGo04Eh05KVTp8lK7H4q04N/FSAnvlCLAsW2/kljyPtgT7s8IAi/PxTLrEUcx3DZ+mUIpmuX6FFBYCYythHiy1FWjhB3RhiwExKCiStlDYDo/V8NwF09AD3mjk51RDaGpzt4qo1PI60n76C6rxl4l7Kc+cw3Rnct/uIKG6ZPCIcaCYfLXkYETStu2d65p7ObUOv4ooduZ7TOFBGHcr02+ekeu6bGW/TASgycJjPdNkDrUm0hhnxXhxpL+zHaDVa7HIy44bspPJaIvi6ctUDtHDxg18/55N+chadEmkGxT6OYoyJPwWjlVY1vHkUgjOFTrYLTYF5kjWRwQJx+QKOAqKKT1OhprElw4vr+KCIwOTK2ytJfmAFZ6LTMB0+dM3CcTD42CDcrKO0kgIyHOaqsHvnD2/sm/DhDM5CFLI8l87yEyPnccxevEzy88xzDYKvwJx/0srGpnTojHpetXDakBZVbD9GesPikDWheVSNbhXOBJVef1WL8XjH7bprdbQgu48peso5u9Y0KIsEKSiPTtH1cEZwfHj7v9Mq032OHrpQ/+I0rUCbiP8z1sO9tMyVIPV/+HryfKS/tM7aq+/7XG3ZdW59/G+UwykFtp/KEwAAAABJRU5ErkJggg=='/%3e%3c/defs%3e%3cstyle%3e%3c/style%3e%3cuse%20id='Layer%201'%20href='%23img1'%20x='0'%20y='0'/%3e%3c/svg%3e",
  r0 =
    "data:image/svg+xml,%3csvg%20version='1.2'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20387%2031'%20width='387'%20height='31'%3e%3ctitle%3eNew%20Project%3c/title%3e%3cdefs%3e%3cimage%20width='387'%20height='31'%20id='img1'%20href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYMAAAAfBAMAAAD3mbytAAAAAXNSR0IB2cksfwAAADBQTFRFAAAAAAAADg4OExMTFRUVFBQUFBQUFBQUFBQUGhoaAAAAExMTFBQUFBQUEhISFBQU8u/GDAAAABB0Uk5TAAESN0iJv/9xCgQoW94co8psNmsAAAjsSURBVHiczVh7cBXlFT9fHstNMHEldSopjjc4iC3DELUSiVGTGSmEaYCxiIilvSo0+GiI0ZiBOjRBTSwkNCkgRfq4g28sEJHWZ8a0MkODFhjr0MYOnRSq1g5Tr62tRpN7+zvne+xuqC2k2un5Y+/ec779vvM7711Fp0DjJpaM89VZ9afyzKdP6uSXPvG5J+V38bRPSZdRkobwp827D0b5O9e+2HLJ/BCjorjE3H20/kQpvdN5ffy/02Tr9onDFYlRPCgQ3uyizBfCT+95vBjXzPYBx8m+w92u3BuWZlUtwZNjb6Xs1lEc72jDft5zuH0UjzKEh1/FpboyYFp9YW/QM+dMKKDCm4yspWp/RDp5fs69fKWsttGorim/4gJ98/jAqT8MCIV9Sdw8eyhgWgh3e+ZPXy/NKmXO0NREVEpvddL4evUNn95Ojtx65owz/nXmb+uaOM6nP/S74NWbE3nnJvjnistzV1tRfv/RrhLyfvvmskRohzAXEJ7uBe+rU0kh2FfLOmPyPz7M1x37iS2c9fLuWU+K5SNSym2A8qfdQjQjkhug05fTSh9lzKfY4TD/3PJic/eV6UQ1U5bH6TcGPjsUXk+K0Qyq28xN7Po4rlsf+MW3F0yPcBWHMRBcltKWSPfvhsaNuDlwZEAW7evGn3Vmtw+/O0JK+b9KDnUgjjJriYoavEZhbqnFZUw9DXbm3C6MI+1xiwCYLXlPHcJmY9ZoK4LymiUxLRimR1105N5DRXME/Yz5Ya7iSKBYSULdaXjvbWI7u8TKq+OrxKjoRBEpsRO9jQt9PjP7tSRJ1zjtlve/R7R5AE77bEKvypRbJz0aitjhdkBQ91H+Cz+au2Q5xbpSxA5ldBtSegmrZ6ivt6xSbrJbw1ylDicll8UZQq/vQrQPdUSM1t8dQAhLQbEV9OU9xKnA/iKT3AgrXAc7rX0pvdXopNVID9A2mHx8Q6P4jyQfbphM6h/g5l6XdHFZVhnD7nTVUR+7XRMX3kfrw1zFyclGNR5nnbreu92UGxJ1Fm7XFdNAyAlJQZzK4ied5my+thRjhq6DnTZRiVadrn/bUp437S8JognXoYi8isj7DrM5w6A2OyE9ZXOlS4a2lLaX7KZzJvPcoTBXnb1YF1RYG9z88Vf6VD2zIVASwKf+muPQQchtiECgH77OQO6zEYLS1iTpiCdX+riAsW1jld4CVOvr07OW+doLGgL0YEuyj/p6YTfxu5wvy6fNhppVCPYjv//gcJSrEFWSrNCPFeN46v9pg+StHNRIuR11OjQR3AaClQpJCN54HseRmvIazub0QaG9k5Vp0nmEeNIlgYBPUlV9qdTkgoYArNAaxYEtGYKgEf/kZY6OvzbaXcJcBdg2SlA6VStUffbwbaKrRNUKIHu/WULTbOwFUk2cAzA1vFw9ewVkWi1GdlO8idHQWV8nmz8Qig97niN2v4WAKMw8oJMZMQGlLIQmfrBoKZkcNYUkzFVAz6VMJ5+qKOcyZSKGCdGxsrinWyq8gRCSagIj1kJSWxAOg504CcYCeO9urWHR3qRr/4h57uMcArR0ElkI2BvJzMcxEmSQKGWUleehfFBIwlylg1VD6Lq4SoIZOlkjwMJnzEuSeCqAYKUOArSC1W88D+a7thQnIfChjYmTogW+cwKrAQNMuopj6fyE1GxA4LrIjsbz7KNa304L+d+koRlTknokg1XQREZyFQBL0ecpZ8F23Bx7hHW6a2m85Zn5vFYTaxBAMNIAArSCbtXVB5IwnzYWNs5uZQiTLk1ylUmEILyBtkHpJwbEngwB+SXpLiWAdDLZuMvwHIcuqAvJ5vF19VGuQqIJYNtxfrdTdGJCNLgBlYs3Mt9AMNIIBGz7UkEpV0aBwHatrrQm0OoaCFk97Gz12AA5CLA+hyrnk66spllIoDHtf5EkC2MfUObmeISrONh9sop5NdPdPRdKLrmaYBWTZIE0AoG973APdXBifj7BGoKW7U3YxdYoS17RLIEAs+sJD/+2pNjdtv8bZXmacifn3BvhKhtfBTczgi/OCy2dc4UbXqTkRCFAGoWg2y6SEhk71IEKzGpIM1p6ccqutUPiZ4wdETowOCZCHeRNXBi4Wdq3D1HW23PQHsQUa4lwFf55RfV2kDi+I2WWpnu4hYhl3ziyXkpSme6ZgTQKQaYb3gs2HVqPQeHPP5bgRhQ+H7wTagMGE0pbCn7DzroCNbEXWRXbnHl57MJ57qDAC46rzGzCDo4tSvLIKktrL0zpDTIVGAaQBehmOIjTxklDEKTU8zCxZgyx6XMfXKR7Gp5pXeUMxgfqcfJbheZ/WWV6HTLG27AmXc8mS69TC+My8AlBlCm2bx1wFsVyps2NchWds8iZruKX0mZ5qa78MKzYC/MmHG0gOOlICPmXXlIoNp5VmnnX100Y8fRST7N9l2Gq9b0PyWQicRkZbofZvVXNrNS+7szGi8olHA01heqGHoJGcpWUZBawAaAk32Lp4M4zl9Sz6vK9QkMxEJzUEjBFhiZTBKTQoYj0P3VH+KWwLaWenk3OzmNvHeowAQK9J+tKHQte9/Z1B8rKqHACV+kxDc3grc7h9ry58b/dL7MoF6/nDyKbpanmfc3Hs2hzrImThowThZCH9sCtlyR7+3o3HQ19XSirzKz92c+DaO/Zcb+UEqlx5m0hKBUIkqD0IdjNQWGuEv24RxS+vXgX5XXPIlc1Yl1NKS6MbKsLHoqTaeROavPhBAhUdGX8rrO1+J1WvChs/XvgM1TxLe9WlEsNCVRjgqNlRgsShWn6gy6okJp2wAxxucedeQO5UVgz+TWIR/99ycBfZCE4qYXA3erkP1/AiTDLsQPzQjzMkbR6bg1AjT3e7M28/OOerfWjo42DQJeVu4auSb+ozJldZ8q1JhNIVuqcjRISze9/TzWtU0eyJlzbU5cwm5WsTnzso5uOfT91AlMg5NfEoxBQpSj9wsG8Ou+i0HcJpLOMU0YaCMYer+49eQifNOkPkllX/6Agwn3lsZ4D+K0peCTEheoCwUr/T+gUPgtD9V33/OdV/3P6Jw+9yT0ofj5iAAAAAElFTkSuQmCC'/%3e%3c/defs%3e%3cstyle%3e%3c/style%3e%3cuse%20id='Layer%201'%20href='%23img1'%20x='0'%20y='0'/%3e%3c/svg%3e",
  i0 =
    "data:image/svg+xml,%3csvg%20version='1.2'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2026'%20width='24'%20height='26'%3e%3ctitle%3eNew%20Project%3c/title%3e%3cdefs%3e%3cimage%20width='52'%20height='46'%20id='img1'%20href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAuCAYAAABnNToWAAAAAXNSR0IB2cksfwAAByxJREFUeJzNWm1MW2UUPmPLGEiYklgIGS4sKYTwwyyWLQMCpT8GDEIRcGwLyzYC/oDxYaSOjxZZSDCr0QTT2hG2LtG0NDCnEoRQWUk7VH6QKAT5IUTsmCGQzaqbc8pmPefCLbe3LW1htDzJTdvzftzz3Pc95zzvBQAfMDMzIywrK/t037599/fu3Xv/1KlTusnJyURfxu4ozM7OhtbV1Snx63942flXdXX1BwsLC2HB9NFndHd3X4iNjbWCGyLcKzo6+l5XV1dF8Dz1AovFknbs2LFvgOe4SCT69sSJE5qMjIybERER//Lbjxw5Mm4ymTKD5zkPExMTr5w7d04LPEfT09NNU1NTh7h9R0ZGDu3fv/83fl+6zpw580l/f398gN1fh91uD2tublbs3r37CdexkJCQZ7TtqM/w8LAEt9ZMaWnpF+y40NDQR+B5K67U19e34dzhgeYDg4ODx905hQSfqlSqNzUaTSVrKykp+ZLGDA0NJW5AxnH19fXlBpoP6HS6NwoKCvri4uLmvTl49OhR89WrVy/g0/9obGxMNDc3F5eUlDTJ73fgwIFfioqKDLjCZQEntGvXrseZmZm35XJ5S0VFxcdhYWF/eSOWm5t7i8aOjo6mC4XCH1k71qnHNIdCoZDn5OQMo+1ZwAkhHq0586SyslJ9+fJlWV5e3mfeSPEvHHOrtbVVhoRUNNea/UnA2WDlf8B1LCYm5teLFy9eaWhoUGD6tngjgtvwjkwma6UxBw8e/JnX/mdQCWEicDhz+PDh71paWhrR0ffR0Tk+EYo5asNVuYQ16I47skEndPbs2Wqj0ShMTU01srb8/PybTU1NzefPn1djKl8hG9YrDab6psLCwl62H9alB6j3riUmJv6wYwhlZWWpUXQKyI6x9C5r37NnzwoK0huYho8PDAxknT59+jqOc9St2traD9n52traxLBTCLEXZj0zteHKXOHa29vbm5RK5Vtcm1qtLqK+NTU1cvrs7Ox8HXYaIbpwpV6gdoyrFdZGtaW4uNjA/sZs9ofBYEjAGLsXHh7+O/VHqfT9jiKUnZ39+dLSUjTbjtvtb7YNY+w6xs81WCfElT/Q29tbAs4PJvCE1m7qcAIV9QAZFxcXX5ZKpbe4bXxC7EXqYW2up7y2RwFlsobHXCdSUlK+rqqqek8gECzynHNLCFf4H0wgb2Oi0KLq4BOyB5wNyn0d1wGsK1KyJycnu9Qed4Qoxk6ePKnv6elJjYqKusttE4vFxoATWl5ejsAiOsE6gcLyp+np6VexaKp9IQTOq+BYoYSEhGmbzfbiZnyamZkBrGmAMUoxDlgyAJOUf5Ng/ajnHtoiIyNtvhCiLYc3/AT7P4TVRPGwsbHx0maIzM7OQl1dncf26upqWFhY8H1Cq9X6EgpUDZ/IRoS4F6qJG/Pz8zGbIYNHDYiNjfXaDw+a0NXV5d/k4+Pjr0kkkq/AR0JpaWm3zWZzqp8cGFgsFkAR7GIXiUSAGRcyMjIgIiLCpR31I5hMJv9uptfri+Pj42dZx8vLy/V4PNCzv/GJ3tVqtZs6xE1MTAA+HBc7FmaYmppyso2MjACGg9t5MKlBf3+/7ze22+0hHR0d71ABRqWgxYzWjcXWhkq8ld7b+cVidT5AYUsKxMmOwpfZdoTh4WFma5WWljraQ0M3vhWeopm5A47BwUG3diKoUqlAo9E4bCUlJczn0NCQT3OjeN66g/5Cp9NBQUEB4HnKa188PAKqEObpj42NwdzcHCQlJbn0w1IDuHscKxxQoJoAVPMgl8sB4xHCwry/Sc7NXX15NDo6CkKh0GGnOkVzKBQKyMnJ2TaffQI5gyWCzl2Ql5fn93gag6qGIURzBQ1U+bmIiYkBVCXQ0NDgNn3zQdtQJpMxY/DYsl1u+g4uIW6mQ/kFmDk9OkoxR220KlSDdgy4hLBQg9FohNTU9Zqcn59PJ2VA1cGkcgLVK0r1hYWFjn5Ul0jvJSYG+c9UXEJZWVkO0UmxxALrHCNIKQ0PDAwAHk2cxtXW1jq+owbdfqc3Aj+GCJT1CLQyXLS3t4NSqXSyqdVq5rOmpob57Ozs3A43fYc7QgR2pbhxRbWluLjY8ZuymcFgYGIsPHz1DxsklYIKPqHs7GxYWlpy/KbtxoJijKv3+Om5t7d3m7zcAkhRExYXF0EqlTq18QmxIPWwY5GSkgJVVVUgEAhc2twRohWmBEKJglRH0EFynwuqK4Tk5GSXvu4IUYyh4oeenh6IiopyahOLxc/XWV+wvLzMFFEWJCynp6eZosmHpy3nDgkJCWCz2Z6bn36D6gf30BYZGenSx9OWoxrF9qdE0djYuL3O+gqr1coIVE/wtkKkJubn57fDta1hfHwcJBKJi90TobS0NDCbzYFwbWvQ6/UQH7/+Lw7l5eXM8YAFvRXSarXBcG3zoPcCHR0dTKyQUqCMRsWWlDi9t/OG/wHItXzZLajtLAAAAABJRU5ErkJggg=='/%3e%3c/defs%3e%3cstyle%3e%3c/style%3e%3cuse%20id='Layer%201'%20href='%23img1'%20x='0'%20y='0'/%3e%3c/svg%3e",
  s0 = "/assets/icon-CLILkiJF.svg",
  o0 = "/assets/logo-3R3pc3iJ.png",
  l0 = "/assets/bed-R-gdyKt1.svg",
  a0 = ({ icon: t, text1: e, logo: n }) =>
    x.jsxs("header", {
      className:
        "w-full flex items-center sm:items-start justify-between p-4 z-10",
      children: [
        x.jsxs("div", {
          className: "flex gap-4 cursor-pointer items-center max-h-[40px]",
          onClick: () => {
            window.location.href = "https://www.hahayesoneth.fun";
          },
          children: [
            x.jsx("img", { src: t, alt: "Icon", className: "w-10 h-10" }),
            x.jsx("img", {
              src: e,
              alt: "Text 1",
              className: "hidden sm:flex h-[22px]",
            }),
          ],
        }),
        x.jsx("img", {
          src: n,
          alt: "Logo",
          className: "w-[500px] h-auto mb-4 md:mb-0 hidden lg:block pt-4",
        }),
        x.jsx("button", { className: "w-[320px] h-[60px] " }),
      ],
    });
var Pd = {};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Qp = {
  NODE_CLIENT: !1,
  NODE_ADMIN: !1,
  SDK_VERSION: "${JSCORE_VERSION}",
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const S = function (t, e) {
    if (!t) throw yr(e);
  },
  yr = function (t) {
    return new Error(
      "Firebase Database (" + Qp.SDK_VERSION + ") INTERNAL ASSERT FAILED: " + t
    );
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const $p = function (t) {
    const e = [];
    let n = 0;
    for (let r = 0; r < t.length; r++) {
      let i = t.charCodeAt(r);
      i < 128
        ? (e[n++] = i)
        : i < 2048
        ? ((e[n++] = (i >> 6) | 192), (e[n++] = (i & 63) | 128))
        : (i & 64512) === 55296 &&
          r + 1 < t.length &&
          (t.charCodeAt(r + 1) & 64512) === 56320
        ? ((i = 65536 + ((i & 1023) << 10) + (t.charCodeAt(++r) & 1023)),
          (e[n++] = (i >> 18) | 240),
          (e[n++] = ((i >> 12) & 63) | 128),
          (e[n++] = ((i >> 6) & 63) | 128),
          (e[n++] = (i & 63) | 128))
        : ((e[n++] = (i >> 12) | 224),
          (e[n++] = ((i >> 6) & 63) | 128),
          (e[n++] = (i & 63) | 128));
    }
    return e;
  },
  u0 = function (t) {
    const e = [];
    let n = 0,
      r = 0;
    for (; n < t.length; ) {
      const i = t[n++];
      if (i < 128) e[r++] = String.fromCharCode(i);
      else if (i > 191 && i < 224) {
        const s = t[n++];
        e[r++] = String.fromCharCode(((i & 31) << 6) | (s & 63));
      } else if (i > 239 && i < 365) {
        const s = t[n++],
          o = t[n++],
          l = t[n++],
          a =
            (((i & 7) << 18) | ((s & 63) << 12) | ((o & 63) << 6) | (l & 63)) -
            65536;
        (e[r++] = String.fromCharCode(55296 + (a >> 10))),
          (e[r++] = String.fromCharCode(56320 + (a & 1023)));
      } else {
        const s = t[n++],
          o = t[n++];
        e[r++] = String.fromCharCode(
          ((i & 15) << 12) | ((s & 63) << 6) | (o & 63)
        );
      }
    }
    return e.join("");
  },
  bu = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + "+/=";
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + "-_.";
    },
    HAS_NATIVE_SUPPORT: typeof atob == "function",
    encodeByteArray(t, e) {
      if (!Array.isArray(t))
        throw Error("encodeByteArray takes an array as a parameter");
      this.init_();
      const n = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        r = [];
      for (let i = 0; i < t.length; i += 3) {
        const s = t[i],
          o = i + 1 < t.length,
          l = o ? t[i + 1] : 0,
          a = i + 2 < t.length,
          u = a ? t[i + 2] : 0,
          d = s >> 2,
          c = ((s & 3) << 4) | (l >> 4);
        let f = ((l & 15) << 2) | (u >> 6),
          g = u & 63;
        a || ((g = 64), o || (f = 64)), r.push(n[d], n[c], n[f], n[g]);
      }
      return r.join("");
    },
    encodeString(t, e) {
      return this.HAS_NATIVE_SUPPORT && !e
        ? btoa(t)
        : this.encodeByteArray($p(t), e);
    },
    decodeString(t, e) {
      return this.HAS_NATIVE_SUPPORT && !e
        ? atob(t)
        : u0(this.decodeStringToByteArray(t, e));
    },
    decodeStringToByteArray(t, e) {
      this.init_();
      const n = e ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        r = [];
      for (let i = 0; i < t.length; ) {
        const s = n[t.charAt(i++)],
          l = i < t.length ? n[t.charAt(i)] : 0;
        ++i;
        const u = i < t.length ? n[t.charAt(i)] : 64;
        ++i;
        const c = i < t.length ? n[t.charAt(i)] : 64;
        if ((++i, s == null || l == null || u == null || c == null))
          throw new c0();
        const f = (s << 2) | (l >> 4);
        if ((r.push(f), u !== 64)) {
          const g = ((l << 4) & 240) | (u >> 2);
          if ((r.push(g), c !== 64)) {
            const _ = ((u << 6) & 192) | c;
            r.push(_);
          }
        }
      }
      return r;
    },
    init_() {
      if (!this.byteToCharMap_) {
        (this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {});
        for (let t = 0; t < this.ENCODED_VALS.length; t++)
          (this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t)),
            (this.charToByteMap_[this.byteToCharMap_[t]] = t),
            (this.byteToCharMapWebSafe_[t] =
              this.ENCODED_VALS_WEBSAFE.charAt(t)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]] = t),
            t >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)] = t),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)] = t));
      }
    },
  };
class c0 extends Error {
  constructor() {
    super(...arguments), (this.name = "DecodeBase64StringError");
  }
}
const Yp = function (t) {
    const e = $p(t);
    return bu.encodeByteArray(e, !0);
  },
  qs = function (t) {
    return Yp(t).replace(/\./g, "");
  },
  Ca = function (t) {
    try {
      return bu.decodeString(t, !0);
    } catch (e) {
      console.error("base64Decode failed: ", e);
    }
    return null;
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function d0(t) {
  return qp(void 0, t);
}
function qp(t, e) {
  if (!(e instanceof Object)) return e;
  switch (e.constructor) {
    case Date:
      const n = e;
      return new Date(n.getTime());
    case Object:
      t === void 0 && (t = {});
      break;
    case Array:
      t = [];
      break;
    default:
      return e;
  }
  for (const n in e) !e.hasOwnProperty(n) || !f0(n) || (t[n] = qp(t[n], e[n]));
  return t;
}
function f0(t) {
  return t !== "__proto__";
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function h0() {
  if (typeof self < "u") return self;
  if (typeof window < "u") return window;
  if (typeof global < "u") return global;
  throw new Error("Unable to locate global object.");
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const p0 = () => h0().__FIREBASE_DEFAULTS__,
  m0 = () => {
    if (typeof process > "u" || typeof Pd > "u") return;
    const t = Pd.__FIREBASE_DEFAULTS__;
    if (t) return JSON.parse(t);
  },
  g0 = () => {
    if (typeof document > "u") return;
    let t;
    try {
      t = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch {
      return;
    }
    const e = t && Ca(t[1]);
    return e && JSON.parse(e);
  },
  Xp = () => {
    try {
      return p0() || m0() || g0();
    } catch (t) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);
      return;
    }
  },
  _0 = (t) => {
    var e, n;
    return (n =
      (e = Xp()) === null || e === void 0 ? void 0 : e.emulatorHosts) ===
      null || n === void 0
      ? void 0
      : n[t];
  },
  v0 = (t) => {
    const e = _0(t);
    if (!e) return;
    const n = e.lastIndexOf(":");
    if (n <= 0 || n + 1 === e.length)
      throw new Error(`Invalid host ${e} with no separate hostname and port!`);
    const r = parseInt(e.substring(n + 1), 10);
    return e[0] === "[" ? [e.substring(1, n - 1), r] : [e.substring(0, n), r];
  },
  Jp = () => {
    var t;
    return (t = Xp()) === null || t === void 0 ? void 0 : t.config;
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class zu {
  constructor() {
    (this.reject = () => {}),
      (this.resolve = () => {}),
      (this.promise = new Promise((e, n) => {
        (this.resolve = e), (this.reject = n);
      }));
  }
  wrapCallback(e) {
    return (n, r) => {
      n ? this.reject(n) : this.resolve(r),
        typeof e == "function" &&
          (this.promise.catch(() => {}), e.length === 1 ? e(n) : e(n, r));
    };
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function y0(t, e) {
  if (t.uid)
    throw new Error(
      'The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.'
    );
  const n = { alg: "none", type: "JWT" },
    r = e || "demo-project",
    i = t.iat || 0,
    s = t.sub || t.user_id;
  if (!s)
    throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
  const o = Object.assign(
    {
      iss: `https://securetoken.google.com/${r}`,
      aud: r,
      iat: i,
      exp: i + 3600,
      auth_time: i,
      sub: s,
      user_id: s,
      firebase: { sign_in_provider: "custom", identities: {} },
    },
    t
  );
  return [qs(JSON.stringify(n)), qs(JSON.stringify(o)), ""].join(".");
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function w0() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string"
    ? navigator.userAgent
    : "";
}
function Zp() {
  return (
    typeof window < "u" &&
    !!(window.cordova || window.phonegap || window.PhoneGap) &&
    /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(w0())
  );
}
function E0() {
  return typeof navigator == "object" && navigator.product === "ReactNative";
}
function em() {
  return Qp.NODE_ADMIN === !0;
}
function C0() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function S0() {
  return new Promise((t, e) => {
    try {
      let n = !0;
      const r = "validate-browser-context-for-indexeddb-analytics-module",
        i = self.indexedDB.open(r);
      (i.onsuccess = () => {
        i.result.close(), n || self.indexedDB.deleteDatabase(r), t(!0);
      }),
        (i.onupgradeneeded = () => {
          n = !1;
        }),
        (i.onerror = () => {
          var s;
          e(
            ((s = i.error) === null || s === void 0 ? void 0 : s.message) || ""
          );
        });
    } catch (n) {
      e(n);
    }
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const I0 = "FirebaseError";
class Li extends Error {
  constructor(e, n, r) {
    super(n),
      (this.code = e),
      (this.customData = r),
      (this.name = I0),
      Object.setPrototypeOf(this, Li.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, tm.prototype.create);
  }
}
class tm {
  constructor(e, n, r) {
    (this.service = e), (this.serviceName = n), (this.errors = r);
  }
  create(e, ...n) {
    const r = n[0] || {},
      i = `${this.service}/${e}`,
      s = this.errors[e],
      o = s ? x0(s, r) : "Error",
      l = `${this.serviceName}: ${o} (${i}).`;
    return new Li(i, l, r);
  }
}
function x0(t, e) {
  return t.replace(T0, (n, r) => {
    const i = e[r];
    return i != null ? String(i) : `<${r}?>`;
  });
}
const T0 = /\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function _i(t) {
  return JSON.parse(t);
}
function le(t) {
  return JSON.stringify(t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const nm = function (t) {
    let e = {},
      n = {},
      r = {},
      i = "";
    try {
      const s = t.split(".");
      (e = _i(Ca(s[0]) || "")),
        (n = _i(Ca(s[1]) || "")),
        (i = s[2]),
        (r = n.d || {}),
        delete n.d;
    } catch {}
    return { header: e, claims: n, data: r, signature: i };
  },
  k0 = function (t) {
    const e = nm(t),
      n = e.claims;
    return !!n && typeof n == "object" && n.hasOwnProperty("iat");
  },
  N0 = function (t) {
    const e = nm(t).claims;
    return typeof e == "object" && e.admin === !0;
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Nt(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
function dr(t, e) {
  if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
}
function Od(t) {
  for (const e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
  return !0;
}
function Xs(t, e, n) {
  const r = {};
  for (const i in t)
    Object.prototype.hasOwnProperty.call(t, i) &&
      (r[i] = e.call(n, t[i], i, t));
  return r;
}
function Sa(t, e) {
  if (t === e) return !0;
  const n = Object.keys(t),
    r = Object.keys(e);
  for (const i of n) {
    if (!r.includes(i)) return !1;
    const s = t[i],
      o = e[i];
    if (Dd(s) && Dd(o)) {
      if (!Sa(s, o)) return !1;
    } else if (s !== o) return !1;
  }
  for (const i of r) if (!n.includes(i)) return !1;
  return !0;
}
function Dd(t) {
  return t !== null && typeof t == "object";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function A0(t) {
  const e = [];
  for (const [n, r] of Object.entries(t))
    Array.isArray(r)
      ? r.forEach((i) => {
          e.push(encodeURIComponent(n) + "=" + encodeURIComponent(i));
        })
      : e.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
  return e.length ? "&" + e.join("&") : "";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class R0 {
  constructor() {
    (this.chain_ = []),
      (this.buf_ = []),
      (this.W_ = []),
      (this.pad_ = []),
      (this.inbuf_ = 0),
      (this.total_ = 0),
      (this.blockSize = 512 / 8),
      (this.pad_[0] = 128);
    for (let e = 1; e < this.blockSize; ++e) this.pad_[e] = 0;
    this.reset();
  }
  reset() {
    (this.chain_[0] = 1732584193),
      (this.chain_[1] = 4023233417),
      (this.chain_[2] = 2562383102),
      (this.chain_[3] = 271733878),
      (this.chain_[4] = 3285377520),
      (this.inbuf_ = 0),
      (this.total_ = 0);
  }
  compress_(e, n) {
    n || (n = 0);
    const r = this.W_;
    if (typeof e == "string")
      for (let c = 0; c < 16; c++)
        (r[c] =
          (e.charCodeAt(n) << 24) |
          (e.charCodeAt(n + 1) << 16) |
          (e.charCodeAt(n + 2) << 8) |
          e.charCodeAt(n + 3)),
          (n += 4);
    else
      for (let c = 0; c < 16; c++)
        (r[c] = (e[n] << 24) | (e[n + 1] << 16) | (e[n + 2] << 8) | e[n + 3]),
          (n += 4);
    for (let c = 16; c < 80; c++) {
      const f = r[c - 3] ^ r[c - 8] ^ r[c - 14] ^ r[c - 16];
      r[c] = ((f << 1) | (f >>> 31)) & 4294967295;
    }
    let i = this.chain_[0],
      s = this.chain_[1],
      o = this.chain_[2],
      l = this.chain_[3],
      a = this.chain_[4],
      u,
      d;
    for (let c = 0; c < 80; c++) {
      c < 40
        ? c < 20
          ? ((u = l ^ (s & (o ^ l))), (d = 1518500249))
          : ((u = s ^ o ^ l), (d = 1859775393))
        : c < 60
        ? ((u = (s & o) | (l & (s | o))), (d = 2400959708))
        : ((u = s ^ o ^ l), (d = 3395469782));
      const f = (((i << 5) | (i >>> 27)) + u + a + d + r[c]) & 4294967295;
      (a = l),
        (l = o),
        (o = ((s << 30) | (s >>> 2)) & 4294967295),
        (s = i),
        (i = f);
    }
    (this.chain_[0] = (this.chain_[0] + i) & 4294967295),
      (this.chain_[1] = (this.chain_[1] + s) & 4294967295),
      (this.chain_[2] = (this.chain_[2] + o) & 4294967295),
      (this.chain_[3] = (this.chain_[3] + l) & 4294967295),
      (this.chain_[4] = (this.chain_[4] + a) & 4294967295);
  }
  update(e, n) {
    if (e == null) return;
    n === void 0 && (n = e.length);
    const r = n - this.blockSize;
    let i = 0;
    const s = this.buf_;
    let o = this.inbuf_;
    for (; i < n; ) {
      if (o === 0) for (; i <= r; ) this.compress_(e, i), (i += this.blockSize);
      if (typeof e == "string") {
        for (; i < n; )
          if (((s[o] = e.charCodeAt(i)), ++o, ++i, o === this.blockSize)) {
            this.compress_(s), (o = 0);
            break;
          }
      } else
        for (; i < n; )
          if (((s[o] = e[i]), ++o, ++i, o === this.blockSize)) {
            this.compress_(s), (o = 0);
            break;
          }
    }
    (this.inbuf_ = o), (this.total_ += n);
  }
  digest() {
    const e = [];
    let n = this.total_ * 8;
    this.inbuf_ < 56
      ? this.update(this.pad_, 56 - this.inbuf_)
      : this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
    for (let i = this.blockSize - 1; i >= 56; i--)
      (this.buf_[i] = n & 255), (n /= 256);
    this.compress_(this.buf_);
    let r = 0;
    for (let i = 0; i < 5; i++)
      for (let s = 24; s >= 0; s -= 8)
        (e[r] = (this.chain_[i] >> s) & 255), ++r;
    return e;
  }
}
function rm(t, e) {
  return `${t} failed: ${e} argument `;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const P0 = function (t) {
    const e = [];
    let n = 0;
    for (let r = 0; r < t.length; r++) {
      let i = t.charCodeAt(r);
      if (i >= 55296 && i <= 56319) {
        const s = i - 55296;
        r++, S(r < t.length, "Surrogate pair missing trail surrogate.");
        const o = t.charCodeAt(r) - 56320;
        i = 65536 + (s << 10) + o;
      }
      i < 128
        ? (e[n++] = i)
        : i < 2048
        ? ((e[n++] = (i >> 6) | 192), (e[n++] = (i & 63) | 128))
        : i < 65536
        ? ((e[n++] = (i >> 12) | 224),
          (e[n++] = ((i >> 6) & 63) | 128),
          (e[n++] = (i & 63) | 128))
        : ((e[n++] = (i >> 18) | 240),
          (e[n++] = ((i >> 12) & 63) | 128),
          (e[n++] = ((i >> 6) & 63) | 128),
          (e[n++] = (i & 63) | 128));
    }
    return e;
  },
  Po = function (t) {
    let e = 0;
    for (let n = 0; n < t.length; n++) {
      const r = t.charCodeAt(n);
      r < 128
        ? e++
        : r < 2048
        ? (e += 2)
        : r >= 55296 && r <= 56319
        ? ((e += 4), n++)
        : (e += 3);
    }
    return e;
  };
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Mi(t) {
  return t && t._delegate ? t._delegate : t;
}
class vi {
  constructor(e, n, r) {
    (this.name = e),
      (this.instanceFactory = n),
      (this.type = r),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = "LAZY"),
      (this.onInstanceCreated = null);
  }
  setInstantiationMode(e) {
    return (this.instantiationMode = e), this;
  }
  setMultipleInstances(e) {
    return (this.multipleInstances = e), this;
  }
  setServiceProps(e) {
    return (this.serviceProps = e), this;
  }
  setInstanceCreatedCallback(e) {
    return (this.onInstanceCreated = e), this;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const fn = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class O0 {
  constructor(e, n) {
    (this.name = e),
      (this.container = n),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.instancesOptions = new Map()),
      (this.onInitCallbacks = new Map());
  }
  get(e) {
    const n = this.normalizeInstanceIdentifier(e);
    if (!this.instancesDeferred.has(n)) {
      const r = new zu();
      if (
        (this.instancesDeferred.set(n, r),
        this.isInitialized(n) || this.shouldAutoInitialize())
      )
        try {
          const i = this.getOrInitializeService({ instanceIdentifier: n });
          i && r.resolve(i);
        } catch {}
    }
    return this.instancesDeferred.get(n).promise;
  }
  getImmediate(e) {
    var n;
    const r = this.normalizeInstanceIdentifier(
        e == null ? void 0 : e.identifier
      ),
      i =
        (n = e == null ? void 0 : e.optional) !== null && n !== void 0 ? n : !1;
    if (this.isInitialized(r) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({ instanceIdentifier: r });
      } catch (s) {
        if (i) return null;
        throw s;
      }
    else {
      if (i) return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(e) {
    if (e.name !== this.name)
      throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (((this.component = e), !!this.shouldAutoInitialize())) {
      if (L0(e))
        try {
          this.getOrInitializeService({ instanceIdentifier: fn });
        } catch {}
      for (const [n, r] of this.instancesDeferred.entries()) {
        const i = this.normalizeInstanceIdentifier(n);
        try {
          const s = this.getOrInitializeService({ instanceIdentifier: i });
          r.resolve(s);
        } catch {}
      }
    }
  }
  clearInstance(e = fn) {
    this.instancesDeferred.delete(e),
      this.instancesOptions.delete(e),
      this.instances.delete(e);
  }
  async delete() {
    const e = Array.from(this.instances.values());
    await Promise.all([
      ...e.filter((n) => "INTERNAL" in n).map((n) => n.INTERNAL.delete()),
      ...e.filter((n) => "_delete" in n).map((n) => n._delete()),
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(e = fn) {
    return this.instances.has(e);
  }
  getOptions(e = fn) {
    return this.instancesOptions.get(e) || {};
  }
  initialize(e = {}) {
    const { options: n = {} } = e,
      r = this.normalizeInstanceIdentifier(e.instanceIdentifier);
    if (this.isInitialized(r))
      throw Error(`${this.name}(${r}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const i = this.getOrInitializeService({
      instanceIdentifier: r,
      options: n,
    });
    for (const [s, o] of this.instancesDeferred.entries()) {
      const l = this.normalizeInstanceIdentifier(s);
      r === l && o.resolve(i);
    }
    return i;
  }
  onInit(e, n) {
    var r;
    const i = this.normalizeInstanceIdentifier(n),
      s =
        (r = this.onInitCallbacks.get(i)) !== null && r !== void 0
          ? r
          : new Set();
    s.add(e), this.onInitCallbacks.set(i, s);
    const o = this.instances.get(i);
    return (
      o && e(o, i),
      () => {
        s.delete(e);
      }
    );
  }
  invokeOnInitCallbacks(e, n) {
    const r = this.onInitCallbacks.get(n);
    if (r)
      for (const i of r)
        try {
          i(e, n);
        } catch {}
  }
  getOrInitializeService({ instanceIdentifier: e, options: n = {} }) {
    let r = this.instances.get(e);
    if (
      !r &&
      this.component &&
      ((r = this.component.instanceFactory(this.container, {
        instanceIdentifier: D0(e),
        options: n,
      })),
      this.instances.set(e, r),
      this.instancesOptions.set(e, n),
      this.invokeOnInitCallbacks(r, e),
      this.component.onInstanceCreated)
    )
      try {
        this.component.onInstanceCreated(this.container, e, r);
      } catch {}
    return r || null;
  }
  normalizeInstanceIdentifier(e = fn) {
    return this.component ? (this.component.multipleInstances ? e : fn) : e;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function D0(t) {
  return t === fn ? void 0 : t;
}
function L0(t) {
  return t.instantiationMode === "EAGER";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class M0 {
  constructor(e) {
    (this.name = e), (this.providers = new Map());
  }
  addComponent(e) {
    const n = this.getProvider(e.name);
    if (n.isComponentSet())
      throw new Error(
        `Component ${e.name} has already been registered with ${this.name}`
      );
    n.setComponent(e);
  }
  addOrOverwriteComponent(e) {
    this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name),
      this.addComponent(e);
  }
  getProvider(e) {
    if (this.providers.has(e)) return this.providers.get(e);
    const n = new O0(e, this);
    return this.providers.set(e, n), n;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var V;
(function (t) {
  (t[(t.DEBUG = 0)] = "DEBUG"),
    (t[(t.VERBOSE = 1)] = "VERBOSE"),
    (t[(t.INFO = 2)] = "INFO"),
    (t[(t.WARN = 3)] = "WARN"),
    (t[(t.ERROR = 4)] = "ERROR"),
    (t[(t.SILENT = 5)] = "SILENT");
})(V || (V = {}));
const F0 = {
    debug: V.DEBUG,
    verbose: V.VERBOSE,
    info: V.INFO,
    warn: V.WARN,
    error: V.ERROR,
    silent: V.SILENT,
  },
  b0 = V.INFO,
  z0 = {
    [V.DEBUG]: "log",
    [V.VERBOSE]: "log",
    [V.INFO]: "info",
    [V.WARN]: "warn",
    [V.ERROR]: "error",
  },
  U0 = (t, e, ...n) => {
    if (e < t.logLevel) return;
    const r = new Date().toISOString(),
      i = z0[e];
    if (i) console[i](`[${r}]  ${t.name}:`, ...n);
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${e})`
      );
  };
class im {
  constructor(e) {
    (this.name = e),
      (this._logLevel = b0),
      (this._logHandler = U0),
      (this._userLogHandler = null);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(e) {
    if (!(e in V))
      throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
    this._logLevel = e;
  }
  setLogLevel(e) {
    this._logLevel = typeof e == "string" ? F0[e] : e;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(e) {
    if (typeof e != "function")
      throw new TypeError("Value assigned to `logHandler` must be a function");
    this._logHandler = e;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(e) {
    this._userLogHandler = e;
  }
  debug(...e) {
    this._userLogHandler && this._userLogHandler(this, V.DEBUG, ...e),
      this._logHandler(this, V.DEBUG, ...e);
  }
  log(...e) {
    this._userLogHandler && this._userLogHandler(this, V.VERBOSE, ...e),
      this._logHandler(this, V.VERBOSE, ...e);
  }
  info(...e) {
    this._userLogHandler && this._userLogHandler(this, V.INFO, ...e),
      this._logHandler(this, V.INFO, ...e);
  }
  warn(...e) {
    this._userLogHandler && this._userLogHandler(this, V.WARN, ...e),
      this._logHandler(this, V.WARN, ...e);
  }
  error(...e) {
    this._userLogHandler && this._userLogHandler(this, V.ERROR, ...e),
      this._logHandler(this, V.ERROR, ...e);
  }
}
const j0 = (t, e) => e.some((n) => t instanceof n);
let Ld, Md;
function B0() {
  return (
    Ld ||
    (Ld = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  );
}
function W0() {
  return (
    Md ||
    (Md = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
const sm = new WeakMap(),
  Ia = new WeakMap(),
  om = new WeakMap(),
  ml = new WeakMap(),
  Uu = new WeakMap();
function V0(t) {
  const e = new Promise((n, r) => {
    const i = () => {
        t.removeEventListener("success", s), t.removeEventListener("error", o);
      },
      s = () => {
        n(Qt(t.result)), i();
      },
      o = () => {
        r(t.error), i();
      };
    t.addEventListener("success", s), t.addEventListener("error", o);
  });
  return (
    e
      .then((n) => {
        n instanceof IDBCursor && sm.set(n, t);
      })
      .catch(() => {}),
    Uu.set(e, t),
    e
  );
}
function H0(t) {
  if (Ia.has(t)) return;
  const e = new Promise((n, r) => {
    const i = () => {
        t.removeEventListener("complete", s),
          t.removeEventListener("error", o),
          t.removeEventListener("abort", o);
      },
      s = () => {
        n(), i();
      },
      o = () => {
        r(t.error || new DOMException("AbortError", "AbortError")), i();
      };
    t.addEventListener("complete", s),
      t.addEventListener("error", o),
      t.addEventListener("abort", o);
  });
  Ia.set(t, e);
}
let xa = {
  get(t, e, n) {
    if (t instanceof IDBTransaction) {
      if (e === "done") return Ia.get(t);
      if (e === "objectStoreNames") return t.objectStoreNames || om.get(t);
      if (e === "store")
        return n.objectStoreNames[1]
          ? void 0
          : n.objectStore(n.objectStoreNames[0]);
    }
    return Qt(t[e]);
  },
  set(t, e, n) {
    return (t[e] = n), !0;
  },
  has(t, e) {
    return t instanceof IDBTransaction && (e === "done" || e === "store")
      ? !0
      : e in t;
  },
};
function G0(t) {
  xa = t(xa);
}
function K0(t) {
  return t === IDBDatabase.prototype.transaction &&
    !("objectStoreNames" in IDBTransaction.prototype)
    ? function (e, ...n) {
        const r = t.call(gl(this), e, ...n);
        return om.set(r, e.sort ? e.sort() : [e]), Qt(r);
      }
    : W0().includes(t)
    ? function (...e) {
        return t.apply(gl(this), e), Qt(sm.get(this));
      }
    : function (...e) {
        return Qt(t.apply(gl(this), e));
      };
}
function Q0(t) {
  return typeof t == "function"
    ? K0(t)
    : (t instanceof IDBTransaction && H0(t),
      j0(t, B0()) ? new Proxy(t, xa) : t);
}
function Qt(t) {
  if (t instanceof IDBRequest) return V0(t);
  if (ml.has(t)) return ml.get(t);
  const e = Q0(t);
  return e !== t && (ml.set(t, e), Uu.set(e, t)), e;
}
const gl = (t) => Uu.get(t);
function $0(t, e, { blocked: n, upgrade: r, blocking: i, terminated: s } = {}) {
  const o = indexedDB.open(t, e),
    l = Qt(o);
  return (
    r &&
      o.addEventListener("upgradeneeded", (a) => {
        r(Qt(o.result), a.oldVersion, a.newVersion, Qt(o.transaction), a);
      }),
    n && o.addEventListener("blocked", (a) => n(a.oldVersion, a.newVersion, a)),
    l
      .then((a) => {
        s && a.addEventListener("close", () => s()),
          i &&
            a.addEventListener("versionchange", (u) =>
              i(u.oldVersion, u.newVersion, u)
            );
      })
      .catch(() => {}),
    l
  );
}
const Y0 = ["get", "getKey", "getAll", "getAllKeys", "count"],
  q0 = ["put", "add", "delete", "clear"],
  _l = new Map();
function Fd(t, e) {
  if (!(t instanceof IDBDatabase && !(e in t) && typeof e == "string")) return;
  if (_l.get(e)) return _l.get(e);
  const n = e.replace(/FromIndex$/, ""),
    r = e !== n,
    i = q0.includes(n);
  if (
    !(n in (r ? IDBIndex : IDBObjectStore).prototype) ||
    !(i || Y0.includes(n))
  )
    return;
  const s = async function (o, ...l) {
    const a = this.transaction(o, i ? "readwrite" : "readonly");
    let u = a.store;
    return (
      r && (u = u.index(l.shift())),
      (await Promise.all([u[n](...l), i && a.done]))[0]
    );
  };
  return _l.set(e, s), s;
}
G0((t) => ({
  ...t,
  get: (e, n, r) => Fd(e, n) || t.get(e, n, r),
  has: (e, n) => !!Fd(e, n) || t.has(e, n),
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class X0 {
  constructor(e) {
    this.container = e;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((n) => {
        if (J0(n)) {
          const r = n.getImmediate();
          return `${r.library}/${r.version}`;
        } else return null;
      })
      .filter((n) => n)
      .join(" ");
  }
}
function J0(t) {
  const e = t.getComponent();
  return (e == null ? void 0 : e.type) === "VERSION";
}
const Ta = "@firebase/app",
  bd = "0.10.9";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const xt = new im("@firebase/app"),
  Z0 = "@firebase/app-compat",
  ew = "@firebase/analytics-compat",
  tw = "@firebase/analytics",
  nw = "@firebase/app-check-compat",
  rw = "@firebase/app-check",
  iw = "@firebase/auth",
  sw = "@firebase/auth-compat",
  ow = "@firebase/database",
  lw = "@firebase/database-compat",
  aw = "@firebase/functions",
  uw = "@firebase/functions-compat",
  cw = "@firebase/installations",
  dw = "@firebase/installations-compat",
  fw = "@firebase/messaging",
  hw = "@firebase/messaging-compat",
  pw = "@firebase/performance",
  mw = "@firebase/performance-compat",
  gw = "@firebase/remote-config",
  _w = "@firebase/remote-config-compat",
  vw = "@firebase/storage",
  yw = "@firebase/storage-compat",
  ww = "@firebase/firestore",
  Ew = "@firebase/vertexai-preview",
  Cw = "@firebase/firestore-compat",
  Sw = "firebase",
  Iw = "10.13.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ka = "[DEFAULT]",
  xw = {
    [Ta]: "fire-core",
    [Z0]: "fire-core-compat",
    [tw]: "fire-analytics",
    [ew]: "fire-analytics-compat",
    [rw]: "fire-app-check",
    [nw]: "fire-app-check-compat",
    [iw]: "fire-auth",
    [sw]: "fire-auth-compat",
    [ow]: "fire-rtdb",
    [lw]: "fire-rtdb-compat",
    [aw]: "fire-fn",
    [uw]: "fire-fn-compat",
    [cw]: "fire-iid",
    [dw]: "fire-iid-compat",
    [fw]: "fire-fcm",
    [hw]: "fire-fcm-compat",
    [pw]: "fire-perf",
    [mw]: "fire-perf-compat",
    [gw]: "fire-rc",
    [_w]: "fire-rc-compat",
    [vw]: "fire-gcs",
    [yw]: "fire-gcs-compat",
    [ww]: "fire-fst",
    [Cw]: "fire-fst-compat",
    [Ew]: "fire-vertex",
    "fire-js": "fire-js",
    [Sw]: "fire-js-all",
  };
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Js = new Map(),
  Tw = new Map(),
  Na = new Map();
function zd(t, e) {
  try {
    t.container.addComponent(e);
  } catch (n) {
    xt.debug(
      `Component ${e.name} failed to register with FirebaseApp ${t.name}`,
      n
    );
  }
}
function Zs(t) {
  const e = t.name;
  if (Na.has(e))
    return (
      xt.debug(`There were multiple attempts to register component ${e}.`), !1
    );
  Na.set(e, t);
  for (const n of Js.values()) zd(n, t);
  for (const n of Tw.values()) zd(n, t);
  return !0;
}
function kw(t, e) {
  const n = t.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return n && n.triggerHeartbeat(), t.container.getProvider(e);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Nw = {
    "no-app":
      "No Firebase App '{$appName}' has been created - call initializeApp() first",
    "bad-app-name": "Illegal App name: '{$appName}'",
    "duplicate-app":
      "Firebase App named '{$appName}' already exists with different options or config",
    "app-deleted": "Firebase App named '{$appName}' already deleted",
    "server-app-deleted": "Firebase Server App has been deleted",
    "no-options":
      "Need to provide options, when not being deployed to hosting via source.",
    "invalid-app-argument":
      "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    "invalid-log-argument":
      "First argument to `onLog` must be null or a function.",
    "idb-open":
      "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-get":
      "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-set":
      "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-delete":
      "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
    "finalization-registry-not-supported":
      "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
    "invalid-server-app-environment":
      "FirebaseServerApp is not for use in browser environments.",
  },
  $t = new tm("app", "Firebase", Nw);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Aw {
  constructor(e, n, r) {
    (this._isDeleted = !1),
      (this._options = Object.assign({}, e)),
      (this._config = Object.assign({}, n)),
      (this._name = n.name),
      (this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled),
      (this._container = r),
      this.container.addComponent(new vi("app", () => this, "PUBLIC"));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(e) {
    this.checkDestroyed(), (this._automaticDataCollectionEnabled = e);
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get config() {
    return this.checkDestroyed(), this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(e) {
    this._isDeleted = e;
  }
  checkDestroyed() {
    if (this.isDeleted) throw $t.create("app-deleted", { appName: this._name });
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Rw = Iw;
function lm(t, e = {}) {
  let n = t;
  typeof e != "object" && (e = { name: e });
  const r = Object.assign({ name: ka, automaticDataCollectionEnabled: !1 }, e),
    i = r.name;
  if (typeof i != "string" || !i)
    throw $t.create("bad-app-name", { appName: String(i) });
  if ((n || (n = Jp()), !n)) throw $t.create("no-options");
  const s = Js.get(i);
  if (s) {
    if (Sa(n, s.options) && Sa(r, s.config)) return s;
    throw $t.create("duplicate-app", { appName: i });
  }
  const o = new M0(i);
  for (const a of Na.values()) o.addComponent(a);
  const l = new Aw(n, r, o);
  return Js.set(i, l), l;
}
function Pw(t = ka) {
  const e = Js.get(t);
  if (!e && t === ka && Jp()) return lm();
  if (!e) throw $t.create("no-app", { appName: t });
  return e;
}
function tr(t, e, n) {
  var r;
  let i = (r = xw[t]) !== null && r !== void 0 ? r : t;
  n && (i += `-${n}`);
  const s = i.match(/\s|\//),
    o = e.match(/\s|\//);
  if (s || o) {
    const l = [`Unable to register library "${i}" with version "${e}":`];
    s &&
      l.push(
        `library name "${i}" contains illegal characters (whitespace or "/")`
      ),
      s && o && l.push("and"),
      o &&
        l.push(
          `version name "${e}" contains illegal characters (whitespace or "/")`
        ),
      xt.warn(l.join(" "));
    return;
  }
  Zs(new vi(`${i}-version`, () => ({ library: i, version: e }), "VERSION"));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ow = "firebase-heartbeat-database",
  Dw = 1,
  yi = "firebase-heartbeat-store";
let vl = null;
function am() {
  return (
    vl ||
      (vl = $0(Ow, Dw, {
        upgrade: (t, e) => {
          switch (e) {
            case 0:
              try {
                t.createObjectStore(yi);
              } catch (n) {
                console.warn(n);
              }
          }
        },
      }).catch((t) => {
        throw $t.create("idb-open", { originalErrorMessage: t.message });
      })),
    vl
  );
}
async function Lw(t) {
  try {
    const n = (await am()).transaction(yi),
      r = await n.objectStore(yi).get(um(t));
    return await n.done, r;
  } catch (e) {
    if (e instanceof Li) xt.warn(e.message);
    else {
      const n = $t.create("idb-get", {
        originalErrorMessage: e == null ? void 0 : e.message,
      });
      xt.warn(n.message);
    }
  }
}
async function Ud(t, e) {
  try {
    const r = (await am()).transaction(yi, "readwrite");
    await r.objectStore(yi).put(e, um(t)), await r.done;
  } catch (n) {
    if (n instanceof Li) xt.warn(n.message);
    else {
      const r = $t.create("idb-set", {
        originalErrorMessage: n == null ? void 0 : n.message,
      });
      xt.warn(r.message);
    }
  }
}
function um(t) {
  return `${t.name}!${t.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Mw = 1024,
  Fw = 30 * 24 * 60 * 60 * 1e3;
class bw {
  constructor(e) {
    (this.container = e), (this._heartbeatsCache = null);
    const n = this.container.getProvider("app").getImmediate();
    (this._storage = new Uw(n)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((r) => ((this._heartbeatsCache = r), r)));
  }
  async triggerHeartbeat() {
    var e, n, r;
    try {
      const s = this.container
          .getProvider("platform-logger")
          .getImmediate()
          .getPlatformInfoString(),
        o = jd();
      return (
        console.log(
          "heartbeats",
          (e = this._heartbeatsCache) === null || e === void 0
            ? void 0
            : e.heartbeats
        ),
        (((n = this._heartbeatsCache) === null || n === void 0
          ? void 0
          : n.heartbeats) == null &&
          ((this._heartbeatsCache = await this._heartbeatsCachePromise),
          ((r = this._heartbeatsCache) === null || r === void 0
            ? void 0
            : r.heartbeats) == null)) ||
        this._heartbeatsCache.lastSentHeartbeatDate === o ||
        this._heartbeatsCache.heartbeats.some((l) => l.date === o)
          ? void 0
          : (this._heartbeatsCache.heartbeats.push({ date: o, agent: s }),
            (this._heartbeatsCache.heartbeats =
              this._heartbeatsCache.heartbeats.filter((l) => {
                const a = new Date(l.date).valueOf();
                return Date.now() - a <= Fw;
              })),
            this._storage.overwrite(this._heartbeatsCache))
      );
    } catch (i) {
      xt.warn(i);
    }
  }
  async getHeartbeatsHeader() {
    var e;
    try {
      if (
        (this._heartbeatsCache === null && (await this._heartbeatsCachePromise),
        ((e = this._heartbeatsCache) === null || e === void 0
          ? void 0
          : e.heartbeats) == null ||
          this._heartbeatsCache.heartbeats.length === 0)
      )
        return "";
      const n = jd(),
        { heartbeatsToSend: r, unsentEntries: i } = zw(
          this._heartbeatsCache.heartbeats
        ),
        s = qs(JSON.stringify({ version: 2, heartbeats: r }));
      return (
        (this._heartbeatsCache.lastSentHeartbeatDate = n),
        i.length > 0
          ? ((this._heartbeatsCache.heartbeats = i),
            await this._storage.overwrite(this._heartbeatsCache))
          : ((this._heartbeatsCache.heartbeats = []),
            this._storage.overwrite(this._heartbeatsCache)),
        s
      );
    } catch (n) {
      return xt.warn(n), "";
    }
  }
}
function jd() {
  return new Date().toISOString().substring(0, 10);
}
function zw(t, e = Mw) {
  const n = [];
  let r = t.slice();
  for (const i of t) {
    const s = n.find((o) => o.agent === i.agent);
    if (s) {
      if ((s.dates.push(i.date), Bd(n) > e)) {
        s.dates.pop();
        break;
      }
    } else if ((n.push({ agent: i.agent, dates: [i.date] }), Bd(n) > e)) {
      n.pop();
      break;
    }
    r = r.slice(1);
  }
  return { heartbeatsToSend: n, unsentEntries: r };
}
class Uw {
  constructor(e) {
    (this.app = e),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
  }
  async runIndexedDBEnvironmentCheck() {
    return C0()
      ? S0()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const n = await Lw(this.app);
      return n != null && n.heartbeats ? n : { heartbeats: [] };
    } else return { heartbeats: [] };
  }
  async overwrite(e) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return Ud(this.app, {
        lastSentHeartbeatDate:
          (n = e.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : i.lastSentHeartbeatDate,
        heartbeats: e.heartbeats,
      });
    } else return;
  }
  async add(e) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return Ud(this.app, {
        lastSentHeartbeatDate:
          (n = e.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : i.lastSentHeartbeatDate,
        heartbeats: [...i.heartbeats, ...e.heartbeats],
      });
    } else return;
  }
}
function Bd(t) {
  return qs(JSON.stringify({ version: 2, heartbeats: t })).length;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function jw(t) {
  Zs(new vi("platform-logger", (e) => new X0(e), "PRIVATE")),
    Zs(new vi("heartbeat", (e) => new bw(e), "PRIVATE")),
    tr(Ta, bd, t),
    tr(Ta, bd, "esm2017"),
    tr("fire-js", "");
}
jw("");
var Wd = {};
const Vd = "@firebase/database",
  Hd = "1.0.7";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let cm = "";
function Bw(t) {
  cm = t;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ww {
  constructor(e) {
    (this.domStorage_ = e), (this.prefix_ = "firebase:");
  }
  set(e, n) {
    n == null
      ? this.domStorage_.removeItem(this.prefixedName_(e))
      : this.domStorage_.setItem(this.prefixedName_(e), le(n));
  }
  get(e) {
    const n = this.domStorage_.getItem(this.prefixedName_(e));
    return n == null ? null : _i(n);
  }
  remove(e) {
    this.domStorage_.removeItem(this.prefixedName_(e));
  }
  prefixedName_(e) {
    return this.prefix_ + e;
  }
  toString() {
    return this.domStorage_.toString();
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Vw {
  constructor() {
    (this.cache_ = {}), (this.isInMemoryStorage = !0);
  }
  set(e, n) {
    n == null ? delete this.cache_[e] : (this.cache_[e] = n);
  }
  get(e) {
    return Nt(this.cache_, e) ? this.cache_[e] : null;
  }
  remove(e) {
    delete this.cache_[e];
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const dm = function (t) {
    try {
      if (typeof window < "u" && typeof window[t] < "u") {
        const e = window[t];
        return (
          e.setItem("firebase:sentinel", "cache"),
          e.removeItem("firebase:sentinel"),
          new Ww(e)
        );
      }
    } catch {}
    return new Vw();
  },
  _n = dm("localStorage"),
  Hw = dm("sessionStorage");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const nr = new im("@firebase/database"),
  Gw = (function () {
    let t = 1;
    return function () {
      return t++;
    };
  })(),
  fm = function (t) {
    const e = P0(t),
      n = new R0();
    n.update(e);
    const r = n.digest();
    return bu.encodeByteArray(r);
  },
  Fi = function (...t) {
    let e = "";
    for (let n = 0; n < t.length; n++) {
      const r = t[n];
      Array.isArray(r) ||
      (r && typeof r == "object" && typeof r.length == "number")
        ? (e += Fi.apply(null, r))
        : typeof r == "object"
        ? (e += le(r))
        : (e += r),
        (e += " ");
    }
    return e;
  };
let Qr = null,
  Gd = !0;
const Kw = function (t, e) {
    S(!e, "Can't turn on custom loggers persistently."),
      (nr.logLevel = V.VERBOSE),
      (Qr = nr.log.bind(nr));
  },
  Se = function (...t) {
    if (
      (Gd === !0 &&
        ((Gd = !1), Qr === null && Hw.get("logging_enabled") === !0 && Kw()),
      Qr)
    ) {
      const e = Fi.apply(null, t);
      Qr(e);
    }
  },
  bi = function (t) {
    return function (...e) {
      Se(t, ...e);
    };
  },
  Aa = function (...t) {
    const e = "FIREBASE INTERNAL ERROR: " + Fi(...t);
    nr.error(e);
  },
  Tt = function (...t) {
    const e = `FIREBASE FATAL ERROR: ${Fi(...t)}`;
    throw (nr.error(e), new Error(e));
  },
  je = function (...t) {
    const e = "FIREBASE WARNING: " + Fi(...t);
    nr.warn(e);
  },
  Qw = function () {
    typeof window < "u" &&
      window.location &&
      window.location.protocol &&
      window.location.protocol.indexOf("https:") !== -1 &&
      je(
        "Insecure Firebase access from a secure page. Please use https in calls to new Firebase()."
      );
  },
  hm = function (t) {
    return (
      typeof t == "number" &&
      (t !== t ||
        t === Number.POSITIVE_INFINITY ||
        t === Number.NEGATIVE_INFINITY)
    );
  },
  $w = function (t) {
    if (document.readyState === "complete") t();
    else {
      let e = !1;
      const n = function () {
        if (!document.body) {
          setTimeout(n, Math.floor(10));
          return;
        }
        e || ((e = !0), t());
      };
      document.addEventListener
        ? (document.addEventListener("DOMContentLoaded", n, !1),
          window.addEventListener("load", n, !1))
        : document.attachEvent &&
          (document.attachEvent("onreadystatechange", () => {
            document.readyState === "complete" && n();
          }),
          window.attachEvent("onload", n));
    }
  },
  fr = "[MIN_NAME]",
  xn = "[MAX_NAME]",
  wr = function (t, e) {
    if (t === e) return 0;
    if (t === fr || e === xn) return -1;
    if (e === fr || t === xn) return 1;
    {
      const n = Kd(t),
        r = Kd(e);
      return n !== null
        ? r !== null
          ? n - r === 0
            ? t.length - e.length
            : n - r
          : -1
        : r !== null
        ? 1
        : t < e
        ? -1
        : 1;
    }
  },
  Yw = function (t, e) {
    return t === e ? 0 : t < e ? -1 : 1;
  },
  Rr = function (t, e) {
    if (e && t in e) return e[t];
    throw new Error("Missing required key (" + t + ") in object: " + le(e));
  },
  ju = function (t) {
    if (typeof t != "object" || t === null) return le(t);
    const e = [];
    for (const r in t) e.push(r);
    e.sort();
    let n = "{";
    for (let r = 0; r < e.length; r++)
      r !== 0 && (n += ","), (n += le(e[r])), (n += ":"), (n += ju(t[e[r]]));
    return (n += "}"), n;
  },
  pm = function (t, e) {
    const n = t.length;
    if (n <= e) return [t];
    const r = [];
    for (let i = 0; i < n; i += e)
      i + e > n ? r.push(t.substring(i, n)) : r.push(t.substring(i, i + e));
    return r;
  };
function Fe(t, e) {
  for (const n in t) t.hasOwnProperty(n) && e(n, t[n]);
}
const mm = function (t) {
    S(!hm(t), "Invalid JSON number");
    const e = 11,
      n = 52,
      r = (1 << (e - 1)) - 1;
    let i, s, o, l, a;
    t === 0
      ? ((s = 0), (o = 0), (i = 1 / t === -1 / 0 ? 1 : 0))
      : ((i = t < 0),
        (t = Math.abs(t)),
        t >= Math.pow(2, 1 - r)
          ? ((l = Math.min(Math.floor(Math.log(t) / Math.LN2), r)),
            (s = l + r),
            (o = Math.round(t * Math.pow(2, n - l) - Math.pow(2, n))))
          : ((s = 0), (o = Math.round(t / Math.pow(2, 1 - r - n)))));
    const u = [];
    for (a = n; a; a -= 1) u.push(o % 2 ? 1 : 0), (o = Math.floor(o / 2));
    for (a = e; a; a -= 1) u.push(s % 2 ? 1 : 0), (s = Math.floor(s / 2));
    u.push(i ? 1 : 0), u.reverse();
    const d = u.join("");
    let c = "";
    for (a = 0; a < 64; a += 8) {
      let f = parseInt(d.substr(a, 8), 2).toString(16);
      f.length === 1 && (f = "0" + f), (c = c + f);
    }
    return c.toLowerCase();
  },
  qw = function () {
    return !!(
      typeof window == "object" &&
      window.chrome &&
      window.chrome.extension &&
      !/^chrome/.test(window.location.href)
    );
  },
  Xw = function () {
    return typeof Windows == "object" && typeof Windows.UI == "object";
  };
function Jw(t, e) {
  let n = "Unknown Error";
  t === "too_big"
    ? (n =
        "The data requested exceeds the maximum size that can be accessed with a single request.")
    : t === "permission_denied"
    ? (n = "Client doesn't have permission to access the desired data.")
    : t === "unavailable" && (n = "The service is unavailable");
  const r = new Error(t + " at " + e._path.toString() + ": " + n);
  return (r.code = t.toUpperCase()), r;
}
const Zw = new RegExp("^-?(0*)\\d{1,10}$"),
  eE = -2147483648,
  tE = 2147483647,
  Kd = function (t) {
    if (Zw.test(t)) {
      const e = Number(t);
      if (e >= eE && e <= tE) return e;
    }
    return null;
  },
  zi = function (t) {
    try {
      t();
    } catch (e) {
      setTimeout(() => {
        const n = e.stack || "";
        throw (je("Exception was thrown by user callback.", n), e);
      }, Math.floor(0));
    }
  },
  nE = function () {
    return (
      (
        (typeof window == "object" &&
          window.navigator &&
          window.navigator.userAgent) ||
        ""
      ).search(
        /googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i
      ) >= 0
    );
  },
  $r = function (t, e) {
    const n = setTimeout(t, e);
    return (
      typeof n == "number" && typeof Deno < "u" && Deno.unrefTimer
        ? Deno.unrefTimer(n)
        : typeof n == "object" && n.unref && n.unref(),
      n
    );
  };
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rE {
  constructor(e, n) {
    (this.appName_ = e),
      (this.appCheckProvider = n),
      (this.appCheck = n == null ? void 0 : n.getImmediate({ optional: !0 })),
      this.appCheck || n == null || n.get().then((r) => (this.appCheck = r));
  }
  getToken(e) {
    return this.appCheck
      ? this.appCheck.getToken(e)
      : new Promise((n, r) => {
          setTimeout(() => {
            this.appCheck ? this.getToken(e).then(n, r) : n(null);
          }, 0);
        });
  }
  addTokenChangeListener(e) {
    var n;
    (n = this.appCheckProvider) === null ||
      n === void 0 ||
      n.get().then((r) => r.addTokenListener(e));
  }
  notifyForInvalidToken() {
    je(
      `Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iE {
  constructor(e, n, r) {
    (this.appName_ = e),
      (this.firebaseOptions_ = n),
      (this.authProvider_ = r),
      (this.auth_ = null),
      (this.auth_ = r.getImmediate({ optional: !0 })),
      this.auth_ || r.onInit((i) => (this.auth_ = i));
  }
  getToken(e) {
    return this.auth_
      ? this.auth_
          .getToken(e)
          .catch((n) =>
            n && n.code === "auth/token-not-initialized"
              ? (Se(
                  "Got auth/token-not-initialized error.  Treating as null token."
                ),
                null)
              : Promise.reject(n)
          )
      : new Promise((n, r) => {
          setTimeout(() => {
            this.auth_ ? this.getToken(e).then(n, r) : n(null);
          }, 0);
        });
  }
  addTokenChangeListener(e) {
    this.auth_
      ? this.auth_.addAuthTokenListener(e)
      : this.authProvider_.get().then((n) => n.addAuthTokenListener(e));
  }
  removeTokenChangeListener(e) {
    this.authProvider_.get().then((n) => n.removeAuthTokenListener(e));
  }
  notifyForInvalidToken() {
    let e =
      'Provided authentication credentials for the app named "' +
      this.appName_ +
      '" are invalid. This usually indicates your app was not initialized correctly. ';
    "credential" in this.firebaseOptions_
      ? (e +=
          'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.')
      : "serviceAccount" in this.firebaseOptions_
      ? (e +=
          'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.')
      : (e +=
          'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.'),
      je(e);
  }
}
class Ss {
  constructor(e) {
    this.accessToken = e;
  }
  getToken(e) {
    return Promise.resolve({ accessToken: this.accessToken });
  }
  addTokenChangeListener(e) {
    e(this.accessToken);
  }
  removeTokenChangeListener(e) {}
  notifyForInvalidToken() {}
}
Ss.OWNER = "owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Bu = "5",
  gm = "v",
  _m = "s",
  vm = "r",
  ym = "f",
  wm =
    /(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,
  Em = "ls",
  Cm = "p",
  Ra = "ac",
  Sm = "websocket",
  Im = "long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class xm {
  constructor(e, n, r, i, s = !1, o = "", l = !1, a = !1) {
    (this.secure = n),
      (this.namespace = r),
      (this.webSocketOnly = i),
      (this.nodeAdmin = s),
      (this.persistenceKey = o),
      (this.includeNamespaceInQueryParams = l),
      (this.isUsingEmulator = a),
      (this._host = e.toLowerCase()),
      (this._domain = this._host.substr(this._host.indexOf(".") + 1)),
      (this.internalHost = _n.get("host:" + e) || this._host);
  }
  isCacheableHost() {
    return this.internalHost.substr(0, 2) === "s-";
  }
  isCustomHost() {
    return (
      this._domain !== "firebaseio.com" &&
      this._domain !== "firebaseio-demo.com"
    );
  }
  get host() {
    return this._host;
  }
  set host(e) {
    e !== this.internalHost &&
      ((this.internalHost = e),
      this.isCacheableHost() &&
        _n.set("host:" + this._host, this.internalHost));
  }
  toString() {
    let e = this.toURLString();
    return this.persistenceKey && (e += "<" + this.persistenceKey + ">"), e;
  }
  toURLString() {
    const e = this.secure ? "https://" : "http://",
      n = this.includeNamespaceInQueryParams ? `?ns=${this.namespace}` : "";
    return `${e}${this.host}/${n}`;
  }
}
function sE(t) {
  return (
    t.host !== t.internalHost ||
    t.isCustomHost() ||
    t.includeNamespaceInQueryParams
  );
}
function Tm(t, e, n) {
  S(typeof e == "string", "typeof type must == string"),
    S(typeof n == "object", "typeof params must == object");
  let r;
  if (e === Sm) r = (t.secure ? "wss://" : "ws://") + t.internalHost + "/.ws?";
  else if (e === Im)
    r = (t.secure ? "https://" : "http://") + t.internalHost + "/.lp?";
  else throw new Error("Unknown connection type: " + e);
  sE(t) && (n.ns = t.namespace);
  const i = [];
  return (
    Fe(n, (s, o) => {
      i.push(s + "=" + o);
    }),
    r + i.join("&")
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oE {
  constructor() {
    this.counters_ = {};
  }
  incrementCounter(e, n = 1) {
    Nt(this.counters_, e) || (this.counters_[e] = 0), (this.counters_[e] += n);
  }
  get() {
    return d0(this.counters_);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const yl = {},
  wl = {};
function Wu(t) {
  const e = t.toString();
  return yl[e] || (yl[e] = new oE()), yl[e];
}
function lE(t, e) {
  const n = t.toString();
  return wl[n] || (wl[n] = e()), wl[n];
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class aE {
  constructor(e) {
    (this.onMessage_ = e),
      (this.pendingResponses = []),
      (this.currentResponseNum = 0),
      (this.closeAfterResponse = -1),
      (this.onClose = null);
  }
  closeAfter(e, n) {
    (this.closeAfterResponse = e),
      (this.onClose = n),
      this.closeAfterResponse < this.currentResponseNum &&
        (this.onClose(), (this.onClose = null));
  }
  handleResponse(e, n) {
    for (
      this.pendingResponses[e] = n;
      this.pendingResponses[this.currentResponseNum];

    ) {
      const r = this.pendingResponses[this.currentResponseNum];
      delete this.pendingResponses[this.currentResponseNum];
      for (let i = 0; i < r.length; ++i)
        r[i] &&
          zi(() => {
            this.onMessage_(r[i]);
          });
      if (this.currentResponseNum === this.closeAfterResponse) {
        this.onClose && (this.onClose(), (this.onClose = null));
        break;
      }
      this.currentResponseNum++;
    }
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Qd = "start",
  uE = "close",
  cE = "pLPCommand",
  dE = "pRTLPCB",
  km = "id",
  Nm = "pw",
  Am = "ser",
  fE = "cb",
  hE = "seg",
  pE = "ts",
  mE = "d",
  gE = "dframe",
  Rm = 1870,
  Pm = 30,
  _E = Rm - Pm,
  vE = 25e3,
  yE = 3e4;
class Qn {
  constructor(e, n, r, i, s, o, l) {
    (this.connId = e),
      (this.repoInfo = n),
      (this.applicationId = r),
      (this.appCheckToken = i),
      (this.authToken = s),
      (this.transportSessionId = o),
      (this.lastSessionId = l),
      (this.bytesSent = 0),
      (this.bytesReceived = 0),
      (this.everConnected_ = !1),
      (this.log_ = bi(e)),
      (this.stats_ = Wu(n)),
      (this.urlFn = (a) => (
        this.appCheckToken && (a[Ra] = this.appCheckToken), Tm(n, Im, a)
      ));
  }
  open(e, n) {
    (this.curSegmentNum = 0),
      (this.onDisconnect_ = n),
      (this.myPacketOrderer = new aE(e)),
      (this.isClosed_ = !1),
      (this.connectTimeoutTimer_ = setTimeout(() => {
        this.log_("Timed out trying to connect."),
          this.onClosed_(),
          (this.connectTimeoutTimer_ = null);
      }, Math.floor(yE))),
      $w(() => {
        if (this.isClosed_) return;
        this.scriptTagHolder = new Vu(
          (...s) => {
            const [o, l, a, u, d] = s;
            if ((this.incrementIncomingBytes_(s), !!this.scriptTagHolder))
              if (
                (this.connectTimeoutTimer_ &&
                  (clearTimeout(this.connectTimeoutTimer_),
                  (this.connectTimeoutTimer_ = null)),
                (this.everConnected_ = !0),
                o === Qd)
              )
                (this.id = l), (this.password = a);
              else if (o === uE)
                l
                  ? ((this.scriptTagHolder.sendNewPolls = !1),
                    this.myPacketOrderer.closeAfter(l, () => {
                      this.onClosed_();
                    }))
                  : this.onClosed_();
              else throw new Error("Unrecognized command received: " + o);
          },
          (...s) => {
            const [o, l] = s;
            this.incrementIncomingBytes_(s),
              this.myPacketOrderer.handleResponse(o, l);
          },
          () => {
            this.onClosed_();
          },
          this.urlFn
        );
        const r = {};
        (r[Qd] = "t"),
          (r[Am] = Math.floor(Math.random() * 1e8)),
          this.scriptTagHolder.uniqueCallbackIdentifier &&
            (r[fE] = this.scriptTagHolder.uniqueCallbackIdentifier),
          (r[gm] = Bu),
          this.transportSessionId && (r[_m] = this.transportSessionId),
          this.lastSessionId && (r[Em] = this.lastSessionId),
          this.applicationId && (r[Cm] = this.applicationId),
          this.appCheckToken && (r[Ra] = this.appCheckToken),
          typeof location < "u" &&
            location.hostname &&
            wm.test(location.hostname) &&
            (r[vm] = ym);
        const i = this.urlFn(r);
        this.log_("Connecting via long-poll to " + i),
          this.scriptTagHolder.addTag(i, () => {});
      });
  }
  start() {
    this.scriptTagHolder.startLongPoll(this.id, this.password),
      this.addDisconnectPingFrame(this.id, this.password);
  }
  static forceAllow() {
    Qn.forceAllow_ = !0;
  }
  static forceDisallow() {
    Qn.forceDisallow_ = !0;
  }
  static isAvailable() {
    return Qn.forceAllow_
      ? !0
      : !Qn.forceDisallow_ &&
          typeof document < "u" &&
          document.createElement != null &&
          !qw() &&
          !Xw();
  }
  markConnectionHealthy() {}
  shutdown_() {
    (this.isClosed_ = !0),
      this.scriptTagHolder &&
        (this.scriptTagHolder.close(), (this.scriptTagHolder = null)),
      this.myDisconnFrame &&
        (document.body.removeChild(this.myDisconnFrame),
        (this.myDisconnFrame = null)),
      this.connectTimeoutTimer_ &&
        (clearTimeout(this.connectTimeoutTimer_),
        (this.connectTimeoutTimer_ = null));
  }
  onClosed_() {
    this.isClosed_ ||
      (this.log_("Longpoll is closing itself"),
      this.shutdown_(),
      this.onDisconnect_ &&
        (this.onDisconnect_(this.everConnected_), (this.onDisconnect_ = null)));
  }
  close() {
    this.isClosed_ ||
      (this.log_("Longpoll is being closed."), this.shutdown_());
  }
  send(e) {
    const n = le(e);
    (this.bytesSent += n.length),
      this.stats_.incrementCounter("bytes_sent", n.length);
    const r = Yp(n),
      i = pm(r, _E);
    for (let s = 0; s < i.length; s++)
      this.scriptTagHolder.enqueueSegment(this.curSegmentNum, i.length, i[s]),
        this.curSegmentNum++;
  }
  addDisconnectPingFrame(e, n) {
    this.myDisconnFrame = document.createElement("iframe");
    const r = {};
    (r[gE] = "t"),
      (r[km] = e),
      (r[Nm] = n),
      (this.myDisconnFrame.src = this.urlFn(r)),
      (this.myDisconnFrame.style.display = "none"),
      document.body.appendChild(this.myDisconnFrame);
  }
  incrementIncomingBytes_(e) {
    const n = le(e).length;
    (this.bytesReceived += n),
      this.stats_.incrementCounter("bytes_received", n);
  }
}
class Vu {
  constructor(e, n, r, i) {
    (this.onDisconnect = r),
      (this.urlFn = i),
      (this.outstandingRequests = new Set()),
      (this.pendingSegs = []),
      (this.currentSerial = Math.floor(Math.random() * 1e8)),
      (this.sendNewPolls = !0);
    {
      (this.uniqueCallbackIdentifier = Gw()),
        (window[cE + this.uniqueCallbackIdentifier] = e),
        (window[dE + this.uniqueCallbackIdentifier] = n),
        (this.myIFrame = Vu.createIFrame_());
      let s = "";
      this.myIFrame.src &&
        this.myIFrame.src.substr(0, 11) === "javascript:" &&
        (s = '<script>document.domain="' + document.domain + '";</script>');
      const o = "<html><body>" + s + "</body></html>";
      try {
        this.myIFrame.doc.open(),
          this.myIFrame.doc.write(o),
          this.myIFrame.doc.close();
      } catch (l) {
        Se("frame writing exception"), l.stack && Se(l.stack), Se(l);
      }
    }
  }
  static createIFrame_() {
    const e = document.createElement("iframe");
    if (((e.style.display = "none"), document.body)) {
      document.body.appendChild(e);
      try {
        e.contentWindow.document || Se("No IE domain setting required");
      } catch {
        const r = document.domain;
        e.src =
          "javascript:void((function(){document.open();document.domain='" +
          r +
          "';document.close();})())";
      }
    } else
      throw "Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
    return (
      e.contentDocument
        ? (e.doc = e.contentDocument)
        : e.contentWindow
        ? (e.doc = e.contentWindow.document)
        : e.document && (e.doc = e.document),
      e
    );
  }
  close() {
    (this.alive = !1),
      this.myIFrame &&
        ((this.myIFrame.doc.body.textContent = ""),
        setTimeout(() => {
          this.myIFrame !== null &&
            (document.body.removeChild(this.myIFrame), (this.myIFrame = null));
        }, Math.floor(0)));
    const e = this.onDisconnect;
    e && ((this.onDisconnect = null), e());
  }
  startLongPoll(e, n) {
    for (this.myID = e, this.myPW = n, this.alive = !0; this.newRequest_(); );
  }
  newRequest_() {
    if (
      this.alive &&
      this.sendNewPolls &&
      this.outstandingRequests.size < (this.pendingSegs.length > 0 ? 2 : 1)
    ) {
      this.currentSerial++;
      const e = {};
      (e[km] = this.myID), (e[Nm] = this.myPW), (e[Am] = this.currentSerial);
      let n = this.urlFn(e),
        r = "",
        i = 0;
      for (
        ;
        this.pendingSegs.length > 0 &&
        this.pendingSegs[0].d.length + Pm + r.length <= Rm;

      ) {
        const o = this.pendingSegs.shift();
        (r =
          r +
          "&" +
          hE +
          i +
          "=" +
          o.seg +
          "&" +
          pE +
          i +
          "=" +
          o.ts +
          "&" +
          mE +
          i +
          "=" +
          o.d),
          i++;
      }
      return (n = n + r), this.addLongPollTag_(n, this.currentSerial), !0;
    } else return !1;
  }
  enqueueSegment(e, n, r) {
    this.pendingSegs.push({ seg: e, ts: n, d: r }),
      this.alive && this.newRequest_();
  }
  addLongPollTag_(e, n) {
    this.outstandingRequests.add(n);
    const r = () => {
        this.outstandingRequests.delete(n), this.newRequest_();
      },
      i = setTimeout(r, Math.floor(vE)),
      s = () => {
        clearTimeout(i), r();
      };
    this.addTag(e, s);
  }
  addTag(e, n) {
    setTimeout(() => {
      try {
        if (!this.sendNewPolls) return;
        const r = this.myIFrame.doc.createElement("script");
        (r.type = "text/javascript"),
          (r.async = !0),
          (r.src = e),
          (r.onload = r.onreadystatechange =
            function () {
              const i = r.readyState;
              (!i || i === "loaded" || i === "complete") &&
                ((r.onload = r.onreadystatechange = null),
                r.parentNode && r.parentNode.removeChild(r),
                n());
            }),
          (r.onerror = () => {
            Se("Long-poll script failed to load: " + e),
              (this.sendNewPolls = !1),
              this.close();
          }),
          this.myIFrame.doc.body.appendChild(r);
      } catch {}
    }, Math.floor(1));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const wE = 16384,
  EE = 45e3;
let eo = null;
typeof MozWebSocket < "u"
  ? (eo = MozWebSocket)
  : typeof WebSocket < "u" && (eo = WebSocket);
class et {
  constructor(e, n, r, i, s, o, l) {
    (this.connId = e),
      (this.applicationId = r),
      (this.appCheckToken = i),
      (this.authToken = s),
      (this.keepaliveTimer = null),
      (this.frames = null),
      (this.totalFrames = 0),
      (this.bytesSent = 0),
      (this.bytesReceived = 0),
      (this.log_ = bi(this.connId)),
      (this.stats_ = Wu(n)),
      (this.connURL = et.connectionURL_(n, o, l, i, r)),
      (this.nodeAdmin = n.nodeAdmin);
  }
  static connectionURL_(e, n, r, i, s) {
    const o = {};
    return (
      (o[gm] = Bu),
      typeof location < "u" &&
        location.hostname &&
        wm.test(location.hostname) &&
        (o[vm] = ym),
      n && (o[_m] = n),
      r && (o[Em] = r),
      i && (o[Ra] = i),
      s && (o[Cm] = s),
      Tm(e, Sm, o)
    );
  }
  open(e, n) {
    (this.onDisconnect = n),
      (this.onMessage = e),
      this.log_("Websocket connecting to " + this.connURL),
      (this.everConnected_ = !1),
      _n.set("previous_websocket_failure", !0);
    try {
      let r;
      em(), (this.mySock = new eo(this.connURL, [], r));
    } catch (r) {
      this.log_("Error instantiating WebSocket.");
      const i = r.message || r.data;
      i && this.log_(i), this.onClosed_();
      return;
    }
    (this.mySock.onopen = () => {
      this.log_("Websocket connected."), (this.everConnected_ = !0);
    }),
      (this.mySock.onclose = () => {
        this.log_("Websocket connection was disconnected."),
          (this.mySock = null),
          this.onClosed_();
      }),
      (this.mySock.onmessage = (r) => {
        this.handleIncomingFrame(r);
      }),
      (this.mySock.onerror = (r) => {
        this.log_("WebSocket error.  Closing connection.");
        const i = r.message || r.data;
        i && this.log_(i), this.onClosed_();
      });
  }
  start() {}
  static forceDisallow() {
    et.forceDisallow_ = !0;
  }
  static isAvailable() {
    let e = !1;
    if (typeof navigator < "u" && navigator.userAgent) {
      const n = /Android ([0-9]{0,}\.[0-9]{0,})/,
        r = navigator.userAgent.match(n);
      r && r.length > 1 && parseFloat(r[1]) < 4.4 && (e = !0);
    }
    return !e && eo !== null && !et.forceDisallow_;
  }
  static previouslyFailed() {
    return _n.isInMemoryStorage || _n.get("previous_websocket_failure") === !0;
  }
  markConnectionHealthy() {
    _n.remove("previous_websocket_failure");
  }
  appendFrame_(e) {
    if ((this.frames.push(e), this.frames.length === this.totalFrames)) {
      const n = this.frames.join("");
      this.frames = null;
      const r = _i(n);
      this.onMessage(r);
    }
  }
  handleNewFrameCount_(e) {
    (this.totalFrames = e), (this.frames = []);
  }
  extractFrameCount_(e) {
    if (
      (S(this.frames === null, "We already have a frame buffer"), e.length <= 6)
    ) {
      const n = Number(e);
      if (!isNaN(n)) return this.handleNewFrameCount_(n), null;
    }
    return this.handleNewFrameCount_(1), e;
  }
  handleIncomingFrame(e) {
    if (this.mySock === null) return;
    const n = e.data;
    if (
      ((this.bytesReceived += n.length),
      this.stats_.incrementCounter("bytes_received", n.length),
      this.resetKeepAlive(),
      this.frames !== null)
    )
      this.appendFrame_(n);
    else {
      const r = this.extractFrameCount_(n);
      r !== null && this.appendFrame_(r);
    }
  }
  send(e) {
    this.resetKeepAlive();
    const n = le(e);
    (this.bytesSent += n.length),
      this.stats_.incrementCounter("bytes_sent", n.length);
    const r = pm(n, wE);
    r.length > 1 && this.sendString_(String(r.length));
    for (let i = 0; i < r.length; i++) this.sendString_(r[i]);
  }
  shutdown_() {
    (this.isClosed_ = !0),
      this.keepaliveTimer &&
        (clearInterval(this.keepaliveTimer), (this.keepaliveTimer = null)),
      this.mySock && (this.mySock.close(), (this.mySock = null));
  }
  onClosed_() {
    this.isClosed_ ||
      (this.log_("WebSocket is closing itself"),
      this.shutdown_(),
      this.onDisconnect &&
        (this.onDisconnect(this.everConnected_), (this.onDisconnect = null)));
  }
  close() {
    this.isClosed_ ||
      (this.log_("WebSocket is being closed"), this.shutdown_());
  }
  resetKeepAlive() {
    clearInterval(this.keepaliveTimer),
      (this.keepaliveTimer = setInterval(() => {
        this.mySock && this.sendString_("0"), this.resetKeepAlive();
      }, Math.floor(EE)));
  }
  sendString_(e) {
    try {
      this.mySock.send(e);
    } catch (n) {
      this.log_(
        "Exception thrown from WebSocket.send():",
        n.message || n.data,
        "Closing connection."
      ),
        setTimeout(this.onClosed_.bind(this), 0);
    }
  }
}
et.responsesRequiredToBeHealthy = 2;
et.healthyTimeout = 3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class wi {
  constructor(e) {
    this.initTransports_(e);
  }
  static get ALL_TRANSPORTS() {
    return [Qn, et];
  }
  static get IS_TRANSPORT_INITIALIZED() {
    return this.globalTransportInitialized_;
  }
  initTransports_(e) {
    const n = et && et.isAvailable();
    let r = n && !et.previouslyFailed();
    if (
      (e.webSocketOnly &&
        (n ||
          je(
            "wss:// URL used, but browser isn't known to support websockets.  Trying anyway."
          ),
        (r = !0)),
      r)
    )
      this.transports_ = [et];
    else {
      const i = (this.transports_ = []);
      for (const s of wi.ALL_TRANSPORTS) s && s.isAvailable() && i.push(s);
      wi.globalTransportInitialized_ = !0;
    }
  }
  initialTransport() {
    if (this.transports_.length > 0) return this.transports_[0];
    throw new Error("No transports available");
  }
  upgradeTransport() {
    return this.transports_.length > 1 ? this.transports_[1] : null;
  }
}
wi.globalTransportInitialized_ = !1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const CE = 6e4,
  SE = 5e3,
  IE = 10 * 1024,
  xE = 100 * 1024,
  El = "t",
  $d = "d",
  TE = "s",
  Yd = "r",
  kE = "e",
  qd = "o",
  Xd = "a",
  Jd = "n",
  Zd = "p",
  NE = "h";
class AE {
  constructor(e, n, r, i, s, o, l, a, u, d) {
    (this.id = e),
      (this.repoInfo_ = n),
      (this.applicationId_ = r),
      (this.appCheckToken_ = i),
      (this.authToken_ = s),
      (this.onMessage_ = o),
      (this.onReady_ = l),
      (this.onDisconnect_ = a),
      (this.onKill_ = u),
      (this.lastSessionId = d),
      (this.connectionCount = 0),
      (this.pendingDataMessages = []),
      (this.state_ = 0),
      (this.log_ = bi("c:" + this.id + ":")),
      (this.transportManager_ = new wi(n)),
      this.log_("Connection created"),
      this.start_();
  }
  start_() {
    const e = this.transportManager_.initialTransport();
    (this.conn_ = new e(
      this.nextTransportId_(),
      this.repoInfo_,
      this.applicationId_,
      this.appCheckToken_,
      this.authToken_,
      null,
      this.lastSessionId
    )),
      (this.primaryResponsesRequired_ = e.responsesRequiredToBeHealthy || 0);
    const n = this.connReceiver_(this.conn_),
      r = this.disconnReceiver_(this.conn_);
    (this.tx_ = this.conn_),
      (this.rx_ = this.conn_),
      (this.secondaryConn_ = null),
      (this.isHealthy_ = !1),
      setTimeout(() => {
        this.conn_ && this.conn_.open(n, r);
      }, Math.floor(0));
    const i = e.healthyTimeout || 0;
    i > 0 &&
      (this.healthyTimeout_ = $r(() => {
        (this.healthyTimeout_ = null),
          this.isHealthy_ ||
            (this.conn_ && this.conn_.bytesReceived > xE
              ? (this.log_(
                  "Connection exceeded healthy timeout but has received " +
                    this.conn_.bytesReceived +
                    " bytes.  Marking connection healthy."
                ),
                (this.isHealthy_ = !0),
                this.conn_.markConnectionHealthy())
              : this.conn_ && this.conn_.bytesSent > IE
              ? this.log_(
                  "Connection exceeded healthy timeout but has sent " +
                    this.conn_.bytesSent +
                    " bytes.  Leaving connection alive."
                )
              : (this.log_("Closing unhealthy connection after timeout."),
                this.close()));
      }, Math.floor(i)));
  }
  nextTransportId_() {
    return "c:" + this.id + ":" + this.connectionCount++;
  }
  disconnReceiver_(e) {
    return (n) => {
      e === this.conn_
        ? this.onConnectionLost_(n)
        : e === this.secondaryConn_
        ? (this.log_("Secondary connection lost."),
          this.onSecondaryConnectionLost_())
        : this.log_("closing an old connection");
    };
  }
  connReceiver_(e) {
    return (n) => {
      this.state_ !== 2 &&
        (e === this.rx_
          ? this.onPrimaryMessageReceived_(n)
          : e === this.secondaryConn_
          ? this.onSecondaryMessageReceived_(n)
          : this.log_("message on old connection"));
    };
  }
  sendRequest(e) {
    const n = { t: "d", d: e };
    this.sendData_(n);
  }
  tryCleanupConnection() {
    this.tx_ === this.secondaryConn_ &&
      this.rx_ === this.secondaryConn_ &&
      (this.log_(
        "cleaning up and promoting a connection: " + this.secondaryConn_.connId
      ),
      (this.conn_ = this.secondaryConn_),
      (this.secondaryConn_ = null));
  }
  onSecondaryControl_(e) {
    if (El in e) {
      const n = e[El];
      n === Xd
        ? this.upgradeIfSecondaryHealthy_()
        : n === Yd
        ? (this.log_("Got a reset on secondary, closing it"),
          this.secondaryConn_.close(),
          (this.tx_ === this.secondaryConn_ ||
            this.rx_ === this.secondaryConn_) &&
            this.close())
        : n === qd &&
          (this.log_("got pong on secondary."),
          this.secondaryResponsesRequired_--,
          this.upgradeIfSecondaryHealthy_());
    }
  }
  onSecondaryMessageReceived_(e) {
    const n = Rr("t", e),
      r = Rr("d", e);
    if (n === "c") this.onSecondaryControl_(r);
    else if (n === "d") this.pendingDataMessages.push(r);
    else throw new Error("Unknown protocol layer: " + n);
  }
  upgradeIfSecondaryHealthy_() {
    this.secondaryResponsesRequired_ <= 0
      ? (this.log_("Secondary connection is healthy."),
        (this.isHealthy_ = !0),
        this.secondaryConn_.markConnectionHealthy(),
        this.proceedWithUpgrade_())
      : (this.log_("sending ping on secondary."),
        this.secondaryConn_.send({ t: "c", d: { t: Zd, d: {} } }));
  }
  proceedWithUpgrade_() {
    this.secondaryConn_.start(),
      this.log_("sending client ack on secondary"),
      this.secondaryConn_.send({ t: "c", d: { t: Xd, d: {} } }),
      this.log_("Ending transmission on primary"),
      this.conn_.send({ t: "c", d: { t: Jd, d: {} } }),
      (this.tx_ = this.secondaryConn_),
      this.tryCleanupConnection();
  }
  onPrimaryMessageReceived_(e) {
    const n = Rr("t", e),
      r = Rr("d", e);
    n === "c" ? this.onControl_(r) : n === "d" && this.onDataMessage_(r);
  }
  onDataMessage_(e) {
    this.onPrimaryResponse_(), this.onMessage_(e);
  }
  onPrimaryResponse_() {
    this.isHealthy_ ||
      (this.primaryResponsesRequired_--,
      this.primaryResponsesRequired_ <= 0 &&
        (this.log_("Primary connection is healthy."),
        (this.isHealthy_ = !0),
        this.conn_.markConnectionHealthy()));
  }
  onControl_(e) {
    const n = Rr(El, e);
    if ($d in e) {
      const r = e[$d];
      if (n === NE) {
        const i = Object.assign({}, r);
        this.repoInfo_.isUsingEmulator && (i.h = this.repoInfo_.host),
          this.onHandshake_(i);
      } else if (n === Jd) {
        this.log_("recvd end transmission on primary"),
          (this.rx_ = this.secondaryConn_);
        for (let i = 0; i < this.pendingDataMessages.length; ++i)
          this.onDataMessage_(this.pendingDataMessages[i]);
        (this.pendingDataMessages = []), this.tryCleanupConnection();
      } else
        n === TE
          ? this.onConnectionShutdown_(r)
          : n === Yd
          ? this.onReset_(r)
          : n === kE
          ? Aa("Server Error: " + r)
          : n === qd
          ? (this.log_("got pong on primary."),
            this.onPrimaryResponse_(),
            this.sendPingOnPrimaryIfNecessary_())
          : Aa("Unknown control packet command: " + n);
    }
  }
  onHandshake_(e) {
    const n = e.ts,
      r = e.v,
      i = e.h;
    (this.sessionId = e.s),
      (this.repoInfo_.host = i),
      this.state_ === 0 &&
        (this.conn_.start(),
        this.onConnectionEstablished_(this.conn_, n),
        Bu !== r && je("Protocol version mismatch detected"),
        this.tryStartUpgrade_());
  }
  tryStartUpgrade_() {
    const e = this.transportManager_.upgradeTransport();
    e && this.startUpgrade_(e);
  }
  startUpgrade_(e) {
    (this.secondaryConn_ = new e(
      this.nextTransportId_(),
      this.repoInfo_,
      this.applicationId_,
      this.appCheckToken_,
      this.authToken_,
      this.sessionId
    )),
      (this.secondaryResponsesRequired_ = e.responsesRequiredToBeHealthy || 0);
    const n = this.connReceiver_(this.secondaryConn_),
      r = this.disconnReceiver_(this.secondaryConn_);
    this.secondaryConn_.open(n, r),
      $r(() => {
        this.secondaryConn_ &&
          (this.log_("Timed out trying to upgrade."),
          this.secondaryConn_.close());
      }, Math.floor(CE));
  }
  onReset_(e) {
    this.log_("Reset packet received.  New host: " + e),
      (this.repoInfo_.host = e),
      this.state_ === 1
        ? this.close()
        : (this.closeConnections_(), this.start_());
  }
  onConnectionEstablished_(e, n) {
    this.log_("Realtime connection established."),
      (this.conn_ = e),
      (this.state_ = 1),
      this.onReady_ &&
        (this.onReady_(n, this.sessionId), (this.onReady_ = null)),
      this.primaryResponsesRequired_ === 0
        ? (this.log_("Primary connection is healthy."), (this.isHealthy_ = !0))
        : $r(() => {
            this.sendPingOnPrimaryIfNecessary_();
          }, Math.floor(SE));
  }
  sendPingOnPrimaryIfNecessary_() {
    !this.isHealthy_ &&
      this.state_ === 1 &&
      (this.log_("sending ping on primary."),
      this.sendData_({ t: "c", d: { t: Zd, d: {} } }));
  }
  onSecondaryConnectionLost_() {
    const e = this.secondaryConn_;
    (this.secondaryConn_ = null),
      (this.tx_ === e || this.rx_ === e) && this.close();
  }
  onConnectionLost_(e) {
    (this.conn_ = null),
      !e && this.state_ === 0
        ? (this.log_("Realtime connection failed."),
          this.repoInfo_.isCacheableHost() &&
            (_n.remove("host:" + this.repoInfo_.host),
            (this.repoInfo_.internalHost = this.repoInfo_.host)))
        : this.state_ === 1 && this.log_("Realtime connection lost."),
      this.close();
  }
  onConnectionShutdown_(e) {
    this.log_("Connection shutdown command received. Shutting down..."),
      this.onKill_ && (this.onKill_(e), (this.onKill_ = null)),
      (this.onDisconnect_ = null),
      this.close();
  }
  sendData_(e) {
    if (this.state_ !== 1) throw "Connection is not connected";
    this.tx_.send(e);
  }
  close() {
    this.state_ !== 2 &&
      (this.log_("Closing realtime connection."),
      (this.state_ = 2),
      this.closeConnections_(),
      this.onDisconnect_ &&
        (this.onDisconnect_(), (this.onDisconnect_ = null)));
  }
  closeConnections_() {
    this.log_("Shutting down all connections"),
      this.conn_ && (this.conn_.close(), (this.conn_ = null)),
      this.secondaryConn_ &&
        (this.secondaryConn_.close(), (this.secondaryConn_ = null)),
      this.healthyTimeout_ &&
        (clearTimeout(this.healthyTimeout_), (this.healthyTimeout_ = null));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Om {
  put(e, n, r, i) {}
  merge(e, n, r, i) {}
  refreshAuthToken(e) {}
  refreshAppCheckToken(e) {}
  onDisconnectPut(e, n, r) {}
  onDisconnectMerge(e, n, r) {}
  onDisconnectCancel(e, n) {}
  reportStats(e) {}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Dm {
  constructor(e) {
    (this.allowedEvents_ = e),
      (this.listeners_ = {}),
      S(Array.isArray(e) && e.length > 0, "Requires a non-empty array");
  }
  trigger(e, ...n) {
    if (Array.isArray(this.listeners_[e])) {
      const r = [...this.listeners_[e]];
      for (let i = 0; i < r.length; i++) r[i].callback.apply(r[i].context, n);
    }
  }
  on(e, n, r) {
    this.validateEventType_(e),
      (this.listeners_[e] = this.listeners_[e] || []),
      this.listeners_[e].push({ callback: n, context: r });
    const i = this.getInitialEvent(e);
    i && n.apply(r, i);
  }
  off(e, n, r) {
    this.validateEventType_(e);
    const i = this.listeners_[e] || [];
    for (let s = 0; s < i.length; s++)
      if (i[s].callback === n && (!r || r === i[s].context)) {
        i.splice(s, 1);
        return;
      }
  }
  validateEventType_(e) {
    S(
      this.allowedEvents_.find((n) => n === e),
      "Unknown event: " + e
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class to extends Dm {
  constructor() {
    super(["online"]),
      (this.online_ = !0),
      typeof window < "u" &&
        typeof window.addEventListener < "u" &&
        !Zp() &&
        (window.addEventListener(
          "online",
          () => {
            this.online_ || ((this.online_ = !0), this.trigger("online", !0));
          },
          !1
        ),
        window.addEventListener(
          "offline",
          () => {
            this.online_ && ((this.online_ = !1), this.trigger("online", !1));
          },
          !1
        ));
  }
  static getInstance() {
    return new to();
  }
  getInitialEvent(e) {
    return S(e === "online", "Unknown event type: " + e), [this.online_];
  }
  currentlyOnline() {
    return this.online_;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ef = 32,
  tf = 768;
class W {
  constructor(e, n) {
    if (n === void 0) {
      this.pieces_ = e.split("/");
      let r = 0;
      for (let i = 0; i < this.pieces_.length; i++)
        this.pieces_[i].length > 0 &&
          ((this.pieces_[r] = this.pieces_[i]), r++);
      (this.pieces_.length = r), (this.pieceNum_ = 0);
    } else (this.pieces_ = e), (this.pieceNum_ = n);
  }
  toString() {
    let e = "";
    for (let n = this.pieceNum_; n < this.pieces_.length; n++)
      this.pieces_[n] !== "" && (e += "/" + this.pieces_[n]);
    return e || "/";
  }
}
function j() {
  return new W("");
}
function z(t) {
  return t.pieceNum_ >= t.pieces_.length ? null : t.pieces_[t.pieceNum_];
}
function Zt(t) {
  return t.pieces_.length - t.pieceNum_;
}
function H(t) {
  let e = t.pieceNum_;
  return e < t.pieces_.length && e++, new W(t.pieces_, e);
}
function Lm(t) {
  return t.pieceNum_ < t.pieces_.length
    ? t.pieces_[t.pieces_.length - 1]
    : null;
}
function RE(t) {
  let e = "";
  for (let n = t.pieceNum_; n < t.pieces_.length; n++)
    t.pieces_[n] !== "" &&
      (e += "/" + encodeURIComponent(String(t.pieces_[n])));
  return e || "/";
}
function Mm(t, e = 0) {
  return t.pieces_.slice(t.pieceNum_ + e);
}
function Fm(t) {
  if (t.pieceNum_ >= t.pieces_.length) return null;
  const e = [];
  for (let n = t.pieceNum_; n < t.pieces_.length - 1; n++) e.push(t.pieces_[n]);
  return new W(e, 0);
}
function ae(t, e) {
  const n = [];
  for (let r = t.pieceNum_; r < t.pieces_.length; r++) n.push(t.pieces_[r]);
  if (e instanceof W)
    for (let r = e.pieceNum_; r < e.pieces_.length; r++) n.push(e.pieces_[r]);
  else {
    const r = e.split("/");
    for (let i = 0; i < r.length; i++) r[i].length > 0 && n.push(r[i]);
  }
  return new W(n, 0);
}
function F(t) {
  return t.pieceNum_ >= t.pieces_.length;
}
function Te(t, e) {
  const n = z(t),
    r = z(e);
  if (n === null) return e;
  if (n === r) return Te(H(t), H(e));
  throw new Error(
    "INTERNAL ERROR: innerPath (" + e + ") is not within outerPath (" + t + ")"
  );
}
function bm(t, e) {
  if (Zt(t) !== Zt(e)) return !1;
  for (let n = t.pieceNum_, r = e.pieceNum_; n <= t.pieces_.length; n++, r++)
    if (t.pieces_[n] !== e.pieces_[r]) return !1;
  return !0;
}
function tt(t, e) {
  let n = t.pieceNum_,
    r = e.pieceNum_;
  if (Zt(t) > Zt(e)) return !1;
  for (; n < t.pieces_.length; ) {
    if (t.pieces_[n] !== e.pieces_[r]) return !1;
    ++n, ++r;
  }
  return !0;
}
class PE {
  constructor(e, n) {
    (this.errorPrefix_ = n),
      (this.parts_ = Mm(e, 0)),
      (this.byteLength_ = Math.max(1, this.parts_.length));
    for (let r = 0; r < this.parts_.length; r++)
      this.byteLength_ += Po(this.parts_[r]);
    zm(this);
  }
}
function OE(t, e) {
  t.parts_.length > 0 && (t.byteLength_ += 1),
    t.parts_.push(e),
    (t.byteLength_ += Po(e)),
    zm(t);
}
function DE(t) {
  const e = t.parts_.pop();
  (t.byteLength_ -= Po(e)), t.parts_.length > 0 && (t.byteLength_ -= 1);
}
function zm(t) {
  if (t.byteLength_ > tf)
    throw new Error(
      t.errorPrefix_ +
        "has a key path longer than " +
        tf +
        " bytes (" +
        t.byteLength_ +
        ")."
    );
  if (t.parts_.length > ef)
    throw new Error(
      t.errorPrefix_ +
        "path specified exceeds the maximum depth that can be written (" +
        ef +
        ") or object contains a cycle " +
        hn(t)
    );
}
function hn(t) {
  return t.parts_.length === 0
    ? ""
    : "in property '" + t.parts_.join(".") + "'";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Hu extends Dm {
  constructor() {
    super(["visible"]);
    let e, n;
    typeof document < "u" &&
      typeof document.addEventListener < "u" &&
      (typeof document.hidden < "u"
        ? ((n = "visibilitychange"), (e = "hidden"))
        : typeof document.mozHidden < "u"
        ? ((n = "mozvisibilitychange"), (e = "mozHidden"))
        : typeof document.msHidden < "u"
        ? ((n = "msvisibilitychange"), (e = "msHidden"))
        : typeof document.webkitHidden < "u" &&
          ((n = "webkitvisibilitychange"), (e = "webkitHidden"))),
      (this.visible_ = !0),
      n &&
        document.addEventListener(
          n,
          () => {
            const r = !document[e];
            r !== this.visible_ &&
              ((this.visible_ = r), this.trigger("visible", r));
          },
          !1
        );
  }
  static getInstance() {
    return new Hu();
  }
  getInitialEvent(e) {
    return S(e === "visible", "Unknown event type: " + e), [this.visible_];
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Pr = 1e3,
  LE = 60 * 5 * 1e3,
  nf = 30 * 1e3,
  ME = 1.3,
  FE = 3e4,
  bE = "server_kill",
  rf = 3;
class wt extends Om {
  constructor(e, n, r, i, s, o, l, a) {
    if (
      (super(),
      (this.repoInfo_ = e),
      (this.applicationId_ = n),
      (this.onDataUpdate_ = r),
      (this.onConnectStatus_ = i),
      (this.onServerInfoUpdate_ = s),
      (this.authTokenProvider_ = o),
      (this.appCheckTokenProvider_ = l),
      (this.authOverride_ = a),
      (this.id = wt.nextPersistentConnectionId_++),
      (this.log_ = bi("p:" + this.id + ":")),
      (this.interruptReasons_ = {}),
      (this.listens = new Map()),
      (this.outstandingPuts_ = []),
      (this.outstandingGets_ = []),
      (this.outstandingPutCount_ = 0),
      (this.outstandingGetCount_ = 0),
      (this.onDisconnectRequestQueue_ = []),
      (this.connected_ = !1),
      (this.reconnectDelay_ = Pr),
      (this.maxReconnectDelay_ = LE),
      (this.securityDebugCallback_ = null),
      (this.lastSessionId = null),
      (this.establishConnectionTimer_ = null),
      (this.visible_ = !1),
      (this.requestCBHash_ = {}),
      (this.requestNumber_ = 0),
      (this.realtime_ = null),
      (this.authToken_ = null),
      (this.appCheckToken_ = null),
      (this.forceTokenRefresh_ = !1),
      (this.invalidAuthTokenCount_ = 0),
      (this.invalidAppCheckTokenCount_ = 0),
      (this.firstConnection_ = !0),
      (this.lastConnectionAttemptTime_ = null),
      (this.lastConnectionEstablishedTime_ = null),
      a && !em())
    )
      throw new Error(
        "Auth override specified in options, but not supported on non Node.js platforms"
      );
    Hu.getInstance().on("visible", this.onVisible_, this),
      e.host.indexOf("fblocal") === -1 &&
        to.getInstance().on("online", this.onOnline_, this);
  }
  sendRequest(e, n, r) {
    const i = ++this.requestNumber_,
      s = { r: i, a: e, b: n };
    this.log_(le(s)),
      S(
        this.connected_,
        "sendRequest call when we're not connected not allowed."
      ),
      this.realtime_.sendRequest(s),
      r && (this.requestCBHash_[i] = r);
  }
  get(e) {
    this.initConnection_();
    const n = new zu(),
      i = {
        action: "g",
        request: { p: e._path.toString(), q: e._queryObject },
        onComplete: (o) => {
          const l = o.d;
          o.s === "ok" ? n.resolve(l) : n.reject(l);
        },
      };
    this.outstandingGets_.push(i), this.outstandingGetCount_++;
    const s = this.outstandingGets_.length - 1;
    return this.connected_ && this.sendGet_(s), n.promise;
  }
  listen(e, n, r, i) {
    this.initConnection_();
    const s = e._queryIdentifier,
      o = e._path.toString();
    this.log_("Listen called for " + o + " " + s),
      this.listens.has(o) || this.listens.set(o, new Map()),
      S(
        e._queryParams.isDefault() || !e._queryParams.loadsAllData(),
        "listen() called for non-default but complete query"
      ),
      S(
        !this.listens.get(o).has(s),
        "listen() called twice for same path/queryId."
      );
    const l = { onComplete: i, hashFn: n, query: e, tag: r };
    this.listens.get(o).set(s, l), this.connected_ && this.sendListen_(l);
  }
  sendGet_(e) {
    const n = this.outstandingGets_[e];
    this.sendRequest("g", n.request, (r) => {
      delete this.outstandingGets_[e],
        this.outstandingGetCount_--,
        this.outstandingGetCount_ === 0 && (this.outstandingGets_ = []),
        n.onComplete && n.onComplete(r);
    });
  }
  sendListen_(e) {
    const n = e.query,
      r = n._path.toString(),
      i = n._queryIdentifier;
    this.log_("Listen on " + r + " for " + i);
    const s = { p: r },
      o = "q";
    e.tag && ((s.q = n._queryObject), (s.t = e.tag)),
      (s.h = e.hashFn()),
      this.sendRequest(o, s, (l) => {
        const a = l.d,
          u = l.s;
        wt.warnOnListenWarnings_(a, n),
          (this.listens.get(r) && this.listens.get(r).get(i)) === e &&
            (this.log_("listen response", l),
            u !== "ok" && this.removeListen_(r, i),
            e.onComplete && e.onComplete(u, a));
      });
  }
  static warnOnListenWarnings_(e, n) {
    if (e && typeof e == "object" && Nt(e, "w")) {
      const r = dr(e, "w");
      if (Array.isArray(r) && ~r.indexOf("no_index")) {
        const i = '".indexOn": "' + n._queryParams.getIndex().toString() + '"',
          s = n._path.toString();
        je(
          `Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`
        );
      }
    }
  }
  refreshAuthToken(e) {
    (this.authToken_ = e),
      this.log_("Auth token refreshed"),
      this.authToken_
        ? this.tryAuth()
        : this.connected_ && this.sendRequest("unauth", {}, () => {}),
      this.reduceReconnectDelayIfAdminCredential_(e);
  }
  reduceReconnectDelayIfAdminCredential_(e) {
    ((e && e.length === 40) || N0(e)) &&
      (this.log_(
        "Admin auth credential detected.  Reducing max reconnect time."
      ),
      (this.maxReconnectDelay_ = nf));
  }
  refreshAppCheckToken(e) {
    (this.appCheckToken_ = e),
      this.log_("App check token refreshed"),
      this.appCheckToken_
        ? this.tryAppCheck()
        : this.connected_ && this.sendRequest("unappeck", {}, () => {});
  }
  tryAuth() {
    if (this.connected_ && this.authToken_) {
      const e = this.authToken_,
        n = k0(e) ? "auth" : "gauth",
        r = { cred: e };
      this.authOverride_ === null
        ? (r.noauth = !0)
        : typeof this.authOverride_ == "object" &&
          (r.authvar = this.authOverride_),
        this.sendRequest(n, r, (i) => {
          const s = i.s,
            o = i.d || "error";
          this.authToken_ === e &&
            (s === "ok"
              ? (this.invalidAuthTokenCount_ = 0)
              : this.onAuthRevoked_(s, o));
        });
    }
  }
  tryAppCheck() {
    this.connected_ &&
      this.appCheckToken_ &&
      this.sendRequest("appcheck", { token: this.appCheckToken_ }, (e) => {
        const n = e.s,
          r = e.d || "error";
        n === "ok"
          ? (this.invalidAppCheckTokenCount_ = 0)
          : this.onAppCheckRevoked_(n, r);
      });
  }
  unlisten(e, n) {
    const r = e._path.toString(),
      i = e._queryIdentifier;
    this.log_("Unlisten called for " + r + " " + i),
      S(
        e._queryParams.isDefault() || !e._queryParams.loadsAllData(),
        "unlisten() called for non-default but complete query"
      ),
      this.removeListen_(r, i) &&
        this.connected_ &&
        this.sendUnlisten_(r, i, e._queryObject, n);
  }
  sendUnlisten_(e, n, r, i) {
    this.log_("Unlisten on " + e + " for " + n);
    const s = { p: e },
      o = "n";
    i && ((s.q = r), (s.t = i)), this.sendRequest(o, s);
  }
  onDisconnectPut(e, n, r) {
    this.initConnection_(),
      this.connected_
        ? this.sendOnDisconnect_("o", e, n, r)
        : this.onDisconnectRequestQueue_.push({
            pathString: e,
            action: "o",
            data: n,
            onComplete: r,
          });
  }
  onDisconnectMerge(e, n, r) {
    this.initConnection_(),
      this.connected_
        ? this.sendOnDisconnect_("om", e, n, r)
        : this.onDisconnectRequestQueue_.push({
            pathString: e,
            action: "om",
            data: n,
            onComplete: r,
          });
  }
  onDisconnectCancel(e, n) {
    this.initConnection_(),
      this.connected_
        ? this.sendOnDisconnect_("oc", e, null, n)
        : this.onDisconnectRequestQueue_.push({
            pathString: e,
            action: "oc",
            data: null,
            onComplete: n,
          });
  }
  sendOnDisconnect_(e, n, r, i) {
    const s = { p: n, d: r };
    this.log_("onDisconnect " + e, s),
      this.sendRequest(e, s, (o) => {
        i &&
          setTimeout(() => {
            i(o.s, o.d);
          }, Math.floor(0));
      });
  }
  put(e, n, r, i) {
    this.putInternal("p", e, n, r, i);
  }
  merge(e, n, r, i) {
    this.putInternal("m", e, n, r, i);
  }
  putInternal(e, n, r, i, s) {
    this.initConnection_();
    const o = { p: n, d: r };
    s !== void 0 && (o.h = s),
      this.outstandingPuts_.push({ action: e, request: o, onComplete: i }),
      this.outstandingPutCount_++;
    const l = this.outstandingPuts_.length - 1;
    this.connected_ ? this.sendPut_(l) : this.log_("Buffering put: " + n);
  }
  sendPut_(e) {
    const n = this.outstandingPuts_[e].action,
      r = this.outstandingPuts_[e].request,
      i = this.outstandingPuts_[e].onComplete;
    (this.outstandingPuts_[e].queued = this.connected_),
      this.sendRequest(n, r, (s) => {
        this.log_(n + " response", s),
          delete this.outstandingPuts_[e],
          this.outstandingPutCount_--,
          this.outstandingPutCount_ === 0 && (this.outstandingPuts_ = []),
          i && i(s.s, s.d);
      });
  }
  reportStats(e) {
    if (this.connected_) {
      const n = { c: e };
      this.log_("reportStats", n),
        this.sendRequest("s", n, (r) => {
          if (r.s !== "ok") {
            const s = r.d;
            this.log_("reportStats", "Error sending stats: " + s);
          }
        });
    }
  }
  onDataMessage_(e) {
    if ("r" in e) {
      this.log_("from server: " + le(e));
      const n = e.r,
        r = this.requestCBHash_[n];
      r && (delete this.requestCBHash_[n], r(e.b));
    } else {
      if ("error" in e) throw "A server-side error has occurred: " + e.error;
      "a" in e && this.onDataPush_(e.a, e.b);
    }
  }
  onDataPush_(e, n) {
    this.log_("handleServerMessage", e, n),
      e === "d"
        ? this.onDataUpdate_(n.p, n.d, !1, n.t)
        : e === "m"
        ? this.onDataUpdate_(n.p, n.d, !0, n.t)
        : e === "c"
        ? this.onListenRevoked_(n.p, n.q)
        : e === "ac"
        ? this.onAuthRevoked_(n.s, n.d)
        : e === "apc"
        ? this.onAppCheckRevoked_(n.s, n.d)
        : e === "sd"
        ? this.onSecurityDebugPacket_(n)
        : Aa(
            "Unrecognized action received from server: " +
              le(e) +
              `
Are you using the latest client?`
          );
  }
  onReady_(e, n) {
    this.log_("connection ready"),
      (this.connected_ = !0),
      (this.lastConnectionEstablishedTime_ = new Date().getTime()),
      this.handleTimestamp_(e),
      (this.lastSessionId = n),
      this.firstConnection_ && this.sendConnectStats_(),
      this.restoreState_(),
      (this.firstConnection_ = !1),
      this.onConnectStatus_(!0);
  }
  scheduleConnect_(e) {
    S(
      !this.realtime_,
      "Scheduling a connect when we're already connected/ing?"
    ),
      this.establishConnectionTimer_ &&
        clearTimeout(this.establishConnectionTimer_),
      (this.establishConnectionTimer_ = setTimeout(() => {
        (this.establishConnectionTimer_ = null), this.establishConnection_();
      }, Math.floor(e)));
  }
  initConnection_() {
    !this.realtime_ && this.firstConnection_ && this.scheduleConnect_(0);
  }
  onVisible_(e) {
    e &&
      !this.visible_ &&
      this.reconnectDelay_ === this.maxReconnectDelay_ &&
      (this.log_("Window became visible.  Reducing delay."),
      (this.reconnectDelay_ = Pr),
      this.realtime_ || this.scheduleConnect_(0)),
      (this.visible_ = e);
  }
  onOnline_(e) {
    e
      ? (this.log_("Browser went online."),
        (this.reconnectDelay_ = Pr),
        this.realtime_ || this.scheduleConnect_(0))
      : (this.log_("Browser went offline.  Killing connection."),
        this.realtime_ && this.realtime_.close());
  }
  onRealtimeDisconnect_() {
    if (
      (this.log_("data client disconnected"),
      (this.connected_ = !1),
      (this.realtime_ = null),
      this.cancelSentTransactions_(),
      (this.requestCBHash_ = {}),
      this.shouldReconnect_())
    ) {
      this.visible_
        ? this.lastConnectionEstablishedTime_ &&
          (new Date().getTime() - this.lastConnectionEstablishedTime_ > FE &&
            (this.reconnectDelay_ = Pr),
          (this.lastConnectionEstablishedTime_ = null))
        : (this.log_("Window isn't visible.  Delaying reconnect."),
          (this.reconnectDelay_ = this.maxReconnectDelay_),
          (this.lastConnectionAttemptTime_ = new Date().getTime()));
      const e = new Date().getTime() - this.lastConnectionAttemptTime_;
      let n = Math.max(0, this.reconnectDelay_ - e);
      (n = Math.random() * n),
        this.log_("Trying to reconnect in " + n + "ms"),
        this.scheduleConnect_(n),
        (this.reconnectDelay_ = Math.min(
          this.maxReconnectDelay_,
          this.reconnectDelay_ * ME
        ));
    }
    this.onConnectStatus_(!1);
  }
  async establishConnection_() {
    if (this.shouldReconnect_()) {
      this.log_("Making a connection attempt"),
        (this.lastConnectionAttemptTime_ = new Date().getTime()),
        (this.lastConnectionEstablishedTime_ = null);
      const e = this.onDataMessage_.bind(this),
        n = this.onReady_.bind(this),
        r = this.onRealtimeDisconnect_.bind(this),
        i = this.id + ":" + wt.nextConnectionId_++,
        s = this.lastSessionId;
      let o = !1,
        l = null;
      const a = function () {
          l ? l.close() : ((o = !0), r());
        },
        u = function (c) {
          S(l, "sendRequest call when we're not connected not allowed."),
            l.sendRequest(c);
        };
      this.realtime_ = { close: a, sendRequest: u };
      const d = this.forceTokenRefresh_;
      this.forceTokenRefresh_ = !1;
      try {
        const [c, f] = await Promise.all([
          this.authTokenProvider_.getToken(d),
          this.appCheckTokenProvider_.getToken(d),
        ]);
        o
          ? Se("getToken() completed but was canceled")
          : (Se("getToken() completed. Creating connection."),
            (this.authToken_ = c && c.accessToken),
            (this.appCheckToken_ = f && f.token),
            (l = new AE(
              i,
              this.repoInfo_,
              this.applicationId_,
              this.appCheckToken_,
              this.authToken_,
              e,
              n,
              r,
              (g) => {
                je(g + " (" + this.repoInfo_.toString() + ")"),
                  this.interrupt(bE);
              },
              s
            )));
      } catch (c) {
        this.log_("Failed to get token: " + c),
          o || (this.repoInfo_.nodeAdmin && je(c), a());
      }
    }
  }
  interrupt(e) {
    Se("Interrupting connection for reason: " + e),
      (this.interruptReasons_[e] = !0),
      this.realtime_
        ? this.realtime_.close()
        : (this.establishConnectionTimer_ &&
            (clearTimeout(this.establishConnectionTimer_),
            (this.establishConnectionTimer_ = null)),
          this.connected_ && this.onRealtimeDisconnect_());
  }
  resume(e) {
    Se("Resuming connection for reason: " + e),
      delete this.interruptReasons_[e],
      Od(this.interruptReasons_) &&
        ((this.reconnectDelay_ = Pr),
        this.realtime_ || this.scheduleConnect_(0));
  }
  handleTimestamp_(e) {
    const n = e - new Date().getTime();
    this.onServerInfoUpdate_({ serverTimeOffset: n });
  }
  cancelSentTransactions_() {
    for (let e = 0; e < this.outstandingPuts_.length; e++) {
      const n = this.outstandingPuts_[e];
      n &&
        "h" in n.request &&
        n.queued &&
        (n.onComplete && n.onComplete("disconnect"),
        delete this.outstandingPuts_[e],
        this.outstandingPutCount_--);
    }
    this.outstandingPutCount_ === 0 && (this.outstandingPuts_ = []);
  }
  onListenRevoked_(e, n) {
    let r;
    n ? (r = n.map((s) => ju(s)).join("$")) : (r = "default");
    const i = this.removeListen_(e, r);
    i && i.onComplete && i.onComplete("permission_denied");
  }
  removeListen_(e, n) {
    const r = new W(e).toString();
    let i;
    if (this.listens.has(r)) {
      const s = this.listens.get(r);
      (i = s.get(n)), s.delete(n), s.size === 0 && this.listens.delete(r);
    } else i = void 0;
    return i;
  }
  onAuthRevoked_(e, n) {
    Se("Auth token revoked: " + e + "/" + n),
      (this.authToken_ = null),
      (this.forceTokenRefresh_ = !0),
      this.realtime_.close(),
      (e === "invalid_token" || e === "permission_denied") &&
        (this.invalidAuthTokenCount_++,
        this.invalidAuthTokenCount_ >= rf &&
          ((this.reconnectDelay_ = nf),
          this.authTokenProvider_.notifyForInvalidToken()));
  }
  onAppCheckRevoked_(e, n) {
    Se("App check token revoked: " + e + "/" + n),
      (this.appCheckToken_ = null),
      (this.forceTokenRefresh_ = !0),
      (e === "invalid_token" || e === "permission_denied") &&
        (this.invalidAppCheckTokenCount_++,
        this.invalidAppCheckTokenCount_ >= rf &&
          this.appCheckTokenProvider_.notifyForInvalidToken());
  }
  onSecurityDebugPacket_(e) {
    this.securityDebugCallback_
      ? this.securityDebugCallback_(e)
      : "msg" in e &&
        console.log(
          "FIREBASE: " +
            e.msg.replace(
              `
`,
              `
FIREBASE: `
            )
        );
  }
  restoreState_() {
    this.tryAuth(), this.tryAppCheck();
    for (const e of this.listens.values())
      for (const n of e.values()) this.sendListen_(n);
    for (let e = 0; e < this.outstandingPuts_.length; e++)
      this.outstandingPuts_[e] && this.sendPut_(e);
    for (; this.onDisconnectRequestQueue_.length; ) {
      const e = this.onDisconnectRequestQueue_.shift();
      this.sendOnDisconnect_(e.action, e.pathString, e.data, e.onComplete);
    }
    for (let e = 0; e < this.outstandingGets_.length; e++)
      this.outstandingGets_[e] && this.sendGet_(e);
  }
  sendConnectStats_() {
    const e = {};
    let n = "js";
    (e["sdk." + n + "." + cm.replace(/\./g, "-")] = 1),
      Zp()
        ? (e["framework.cordova"] = 1)
        : E0() && (e["framework.reactnative"] = 1),
      this.reportStats(e);
  }
  shouldReconnect_() {
    const e = to.getInstance().currentlyOnline();
    return Od(this.interruptReasons_) && e;
  }
}
wt.nextPersistentConnectionId_ = 0;
wt.nextConnectionId_ = 0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class M {
  constructor(e, n) {
    (this.name = e), (this.node = n);
  }
  static Wrap(e, n) {
    return new M(e, n);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Oo {
  getCompare() {
    return this.compare.bind(this);
  }
  indexedValueChanged(e, n) {
    const r = new M(fr, e),
      i = new M(fr, n);
    return this.compare(r, i) !== 0;
  }
  minPost() {
    return M.MIN;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let as;
class Um extends Oo {
  static get __EMPTY_NODE() {
    return as;
  }
  static set __EMPTY_NODE(e) {
    as = e;
  }
  compare(e, n) {
    return wr(e.name, n.name);
  }
  isDefinedOn(e) {
    throw yr("KeyIndex.isDefinedOn not expected to be called.");
  }
  indexedValueChanged(e, n) {
    return !1;
  }
  minPost() {
    return M.MIN;
  }
  maxPost() {
    return new M(xn, as);
  }
  makePost(e, n) {
    return (
      S(typeof e == "string", "KeyIndex indexValue must always be a string."),
      new M(e, as)
    );
  }
  toString() {
    return ".key";
  }
}
const rr = new Um();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class us {
  constructor(e, n, r, i, s = null) {
    (this.isReverse_ = i), (this.resultGenerator_ = s), (this.nodeStack_ = []);
    let o = 1;
    for (; !e.isEmpty(); )
      if (((e = e), (o = n ? r(e.key, n) : 1), i && (o *= -1), o < 0))
        this.isReverse_ ? (e = e.left) : (e = e.right);
      else if (o === 0) {
        this.nodeStack_.push(e);
        break;
      } else
        this.nodeStack_.push(e), this.isReverse_ ? (e = e.right) : (e = e.left);
  }
  getNext() {
    if (this.nodeStack_.length === 0) return null;
    let e = this.nodeStack_.pop(),
      n;
    if (
      (this.resultGenerator_
        ? (n = this.resultGenerator_(e.key, e.value))
        : (n = { key: e.key, value: e.value }),
      this.isReverse_)
    )
      for (e = e.left; !e.isEmpty(); ) this.nodeStack_.push(e), (e = e.right);
    else
      for (e = e.right; !e.isEmpty(); ) this.nodeStack_.push(e), (e = e.left);
    return n;
  }
  hasNext() {
    return this.nodeStack_.length > 0;
  }
  peek() {
    if (this.nodeStack_.length === 0) return null;
    const e = this.nodeStack_[this.nodeStack_.length - 1];
    return this.resultGenerator_
      ? this.resultGenerator_(e.key, e.value)
      : { key: e.key, value: e.value };
  }
}
class he {
  constructor(e, n, r, i, s) {
    (this.key = e),
      (this.value = n),
      (this.color = r ?? he.RED),
      (this.left = i ?? Oe.EMPTY_NODE),
      (this.right = s ?? Oe.EMPTY_NODE);
  }
  copy(e, n, r, i, s) {
    return new he(
      e ?? this.key,
      n ?? this.value,
      r ?? this.color,
      i ?? this.left,
      s ?? this.right
    );
  }
  count() {
    return this.left.count() + 1 + this.right.count();
  }
  isEmpty() {
    return !1;
  }
  inorderTraversal(e) {
    return (
      this.left.inorderTraversal(e) ||
      !!e(this.key, this.value) ||
      this.right.inorderTraversal(e)
    );
  }
  reverseTraversal(e) {
    return (
      this.right.reverseTraversal(e) ||
      e(this.key, this.value) ||
      this.left.reverseTraversal(e)
    );
  }
  min_() {
    return this.left.isEmpty() ? this : this.left.min_();
  }
  minKey() {
    return this.min_().key;
  }
  maxKey() {
    return this.right.isEmpty() ? this.key : this.right.maxKey();
  }
  insert(e, n, r) {
    let i = this;
    const s = r(e, i.key);
    return (
      s < 0
        ? (i = i.copy(null, null, null, i.left.insert(e, n, r), null))
        : s === 0
        ? (i = i.copy(null, n, null, null, null))
        : (i = i.copy(null, null, null, null, i.right.insert(e, n, r))),
      i.fixUp_()
    );
  }
  removeMin_() {
    if (this.left.isEmpty()) return Oe.EMPTY_NODE;
    let e = this;
    return (
      !e.left.isRed_() && !e.left.left.isRed_() && (e = e.moveRedLeft_()),
      (e = e.copy(null, null, null, e.left.removeMin_(), null)),
      e.fixUp_()
    );
  }
  remove(e, n) {
    let r, i;
    if (((r = this), n(e, r.key) < 0))
      !r.left.isEmpty() &&
        !r.left.isRed_() &&
        !r.left.left.isRed_() &&
        (r = r.moveRedLeft_()),
        (r = r.copy(null, null, null, r.left.remove(e, n), null));
    else {
      if (
        (r.left.isRed_() && (r = r.rotateRight_()),
        !r.right.isEmpty() &&
          !r.right.isRed_() &&
          !r.right.left.isRed_() &&
          (r = r.moveRedRight_()),
        n(e, r.key) === 0)
      ) {
        if (r.right.isEmpty()) return Oe.EMPTY_NODE;
        (i = r.right.min_()),
          (r = r.copy(i.key, i.value, null, null, r.right.removeMin_()));
      }
      r = r.copy(null, null, null, null, r.right.remove(e, n));
    }
    return r.fixUp_();
  }
  isRed_() {
    return this.color;
  }
  fixUp_() {
    let e = this;
    return (
      e.right.isRed_() && !e.left.isRed_() && (e = e.rotateLeft_()),
      e.left.isRed_() && e.left.left.isRed_() && (e = e.rotateRight_()),
      e.left.isRed_() && e.right.isRed_() && (e = e.colorFlip_()),
      e
    );
  }
  moveRedLeft_() {
    let e = this.colorFlip_();
    return (
      e.right.left.isRed_() &&
        ((e = e.copy(null, null, null, null, e.right.rotateRight_())),
        (e = e.rotateLeft_()),
        (e = e.colorFlip_())),
      e
    );
  }
  moveRedRight_() {
    let e = this.colorFlip_();
    return (
      e.left.left.isRed_() && ((e = e.rotateRight_()), (e = e.colorFlip_())), e
    );
  }
  rotateLeft_() {
    const e = this.copy(null, null, he.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, e, null);
  }
  rotateRight_() {
    const e = this.copy(null, null, he.RED, this.left.right, null);
    return this.left.copy(null, null, this.color, null, e);
  }
  colorFlip_() {
    const e = this.left.copy(null, null, !this.left.color, null, null),
      n = this.right.copy(null, null, !this.right.color, null, null);
    return this.copy(null, null, !this.color, e, n);
  }
  checkMaxDepth_() {
    const e = this.check_();
    return Math.pow(2, e) <= this.count() + 1;
  }
  check_() {
    if (this.isRed_() && this.left.isRed_())
      throw new Error(
        "Red node has red child(" + this.key + "," + this.value + ")"
      );
    if (this.right.isRed_())
      throw new Error(
        "Right child of (" + this.key + "," + this.value + ") is red"
      );
    const e = this.left.check_();
    if (e !== this.right.check_()) throw new Error("Black depths differ");
    return e + (this.isRed_() ? 0 : 1);
  }
}
he.RED = !0;
he.BLACK = !1;
class zE {
  copy(e, n, r, i, s) {
    return this;
  }
  insert(e, n, r) {
    return new he(e, n, null);
  }
  remove(e, n) {
    return this;
  }
  count() {
    return 0;
  }
  isEmpty() {
    return !0;
  }
  inorderTraversal(e) {
    return !1;
  }
  reverseTraversal(e) {
    return !1;
  }
  minKey() {
    return null;
  }
  maxKey() {
    return null;
  }
  check_() {
    return 0;
  }
  isRed_() {
    return !1;
  }
}
class Oe {
  constructor(e, n = Oe.EMPTY_NODE) {
    (this.comparator_ = e), (this.root_ = n);
  }
  insert(e, n) {
    return new Oe(
      this.comparator_,
      this.root_
        .insert(e, n, this.comparator_)
        .copy(null, null, he.BLACK, null, null)
    );
  }
  remove(e) {
    return new Oe(
      this.comparator_,
      this.root_
        .remove(e, this.comparator_)
        .copy(null, null, he.BLACK, null, null)
    );
  }
  get(e) {
    let n,
      r = this.root_;
    for (; !r.isEmpty(); ) {
      if (((n = this.comparator_(e, r.key)), n === 0)) return r.value;
      n < 0 ? (r = r.left) : n > 0 && (r = r.right);
    }
    return null;
  }
  getPredecessorKey(e) {
    let n,
      r = this.root_,
      i = null;
    for (; !r.isEmpty(); )
      if (((n = this.comparator_(e, r.key)), n === 0)) {
        if (r.left.isEmpty()) return i ? i.key : null;
        for (r = r.left; !r.right.isEmpty(); ) r = r.right;
        return r.key;
      } else n < 0 ? (r = r.left) : n > 0 && ((i = r), (r = r.right));
    throw new Error(
      "Attempted to find predecessor key for a nonexistent key.  What gives?"
    );
  }
  isEmpty() {
    return this.root_.isEmpty();
  }
  count() {
    return this.root_.count();
  }
  minKey() {
    return this.root_.minKey();
  }
  maxKey() {
    return this.root_.maxKey();
  }
  inorderTraversal(e) {
    return this.root_.inorderTraversal(e);
  }
  reverseTraversal(e) {
    return this.root_.reverseTraversal(e);
  }
  getIterator(e) {
    return new us(this.root_, null, this.comparator_, !1, e);
  }
  getIteratorFrom(e, n) {
    return new us(this.root_, e, this.comparator_, !1, n);
  }
  getReverseIteratorFrom(e, n) {
    return new us(this.root_, e, this.comparator_, !0, n);
  }
  getReverseIterator(e) {
    return new us(this.root_, null, this.comparator_, !0, e);
  }
}
Oe.EMPTY_NODE = new zE();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function UE(t, e) {
  return wr(t.name, e.name);
}
function Gu(t, e) {
  return wr(t, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Pa;
function jE(t) {
  Pa = t;
}
const jm = function (t) {
    return typeof t == "number" ? "number:" + mm(t) : "string:" + t;
  },
  Bm = function (t) {
    if (t.isLeafNode()) {
      const e = t.val();
      S(
        typeof e == "string" ||
          typeof e == "number" ||
          (typeof e == "object" && Nt(e, ".sv")),
        "Priority must be a string or number."
      );
    } else S(t === Pa || t.isEmpty(), "priority of unexpected type.");
    S(
      t === Pa || t.getPriority().isEmpty(),
      "Priority nodes can't have a priority of their own."
    );
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let sf;
class de {
  constructor(e, n = de.__childrenNodeConstructor.EMPTY_NODE) {
    (this.value_ = e),
      (this.priorityNode_ = n),
      (this.lazyHash_ = null),
      S(
        this.value_ !== void 0 && this.value_ !== null,
        "LeafNode shouldn't be created with null/undefined value."
      ),
      Bm(this.priorityNode_);
  }
  static set __childrenNodeConstructor(e) {
    sf = e;
  }
  static get __childrenNodeConstructor() {
    return sf;
  }
  isLeafNode() {
    return !0;
  }
  getPriority() {
    return this.priorityNode_;
  }
  updatePriority(e) {
    return new de(this.value_, e);
  }
  getImmediateChild(e) {
    return e === ".priority"
      ? this.priorityNode_
      : de.__childrenNodeConstructor.EMPTY_NODE;
  }
  getChild(e) {
    return F(e)
      ? this
      : z(e) === ".priority"
      ? this.priorityNode_
      : de.__childrenNodeConstructor.EMPTY_NODE;
  }
  hasChild() {
    return !1;
  }
  getPredecessorChildName(e, n) {
    return null;
  }
  updateImmediateChild(e, n) {
    return e === ".priority"
      ? this.updatePriority(n)
      : n.isEmpty() && e !== ".priority"
      ? this
      : de.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(
          e,
          n
        ).updatePriority(this.priorityNode_);
  }
  updateChild(e, n) {
    const r = z(e);
    return r === null
      ? n
      : n.isEmpty() && r !== ".priority"
      ? this
      : (S(
          r !== ".priority" || Zt(e) === 1,
          ".priority must be the last token in a path"
        ),
        this.updateImmediateChild(
          r,
          de.__childrenNodeConstructor.EMPTY_NODE.updateChild(H(e), n)
        ));
  }
  isEmpty() {
    return !1;
  }
  numChildren() {
    return 0;
  }
  forEachChild(e, n) {
    return !1;
  }
  val(e) {
    return e && !this.getPriority().isEmpty()
      ? { ".value": this.getValue(), ".priority": this.getPriority().val() }
      : this.getValue();
  }
  hash() {
    if (this.lazyHash_ === null) {
      let e = "";
      this.priorityNode_.isEmpty() ||
        (e += "priority:" + jm(this.priorityNode_.val()) + ":");
      const n = typeof this.value_;
      (e += n + ":"),
        n === "number" ? (e += mm(this.value_)) : (e += this.value_),
        (this.lazyHash_ = fm(e));
    }
    return this.lazyHash_;
  }
  getValue() {
    return this.value_;
  }
  compareTo(e) {
    return e === de.__childrenNodeConstructor.EMPTY_NODE
      ? 1
      : e instanceof de.__childrenNodeConstructor
      ? -1
      : (S(e.isLeafNode(), "Unknown node type"), this.compareToLeafNode_(e));
  }
  compareToLeafNode_(e) {
    const n = typeof e.value_,
      r = typeof this.value_,
      i = de.VALUE_TYPE_ORDER.indexOf(n),
      s = de.VALUE_TYPE_ORDER.indexOf(r);
    return (
      S(i >= 0, "Unknown leaf type: " + n),
      S(s >= 0, "Unknown leaf type: " + r),
      i === s
        ? r === "object"
          ? 0
          : this.value_ < e.value_
          ? -1
          : this.value_ === e.value_
          ? 0
          : 1
        : s - i
    );
  }
  withIndex() {
    return this;
  }
  isIndexed() {
    return !0;
  }
  equals(e) {
    if (e === this) return !0;
    if (e.isLeafNode()) {
      const n = e;
      return (
        this.value_ === n.value_ && this.priorityNode_.equals(n.priorityNode_)
      );
    } else return !1;
  }
}
de.VALUE_TYPE_ORDER = ["object", "boolean", "number", "string"];
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Wm, Vm;
function BE(t) {
  Wm = t;
}
function WE(t) {
  Vm = t;
}
class VE extends Oo {
  compare(e, n) {
    const r = e.node.getPriority(),
      i = n.node.getPriority(),
      s = r.compareTo(i);
    return s === 0 ? wr(e.name, n.name) : s;
  }
  isDefinedOn(e) {
    return !e.getPriority().isEmpty();
  }
  indexedValueChanged(e, n) {
    return !e.getPriority().equals(n.getPriority());
  }
  minPost() {
    return M.MIN;
  }
  maxPost() {
    return new M(xn, new de("[PRIORITY-POST]", Vm));
  }
  makePost(e, n) {
    const r = Wm(e);
    return new M(n, new de("[PRIORITY-POST]", r));
  }
  toString() {
    return ".priority";
  }
}
const te = new VE();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const HE = Math.log(2);
class GE {
  constructor(e) {
    const n = (s) => parseInt(Math.log(s) / HE, 10),
      r = (s) => parseInt(Array(s + 1).join("1"), 2);
    (this.count = n(e + 1)), (this.current_ = this.count - 1);
    const i = r(this.count);
    this.bits_ = (e + 1) & i;
  }
  nextBitIsOne() {
    const e = !(this.bits_ & (1 << this.current_));
    return this.current_--, e;
  }
}
const no = function (t, e, n, r) {
  t.sort(e);
  const i = function (a, u) {
      const d = u - a;
      let c, f;
      if (d === 0) return null;
      if (d === 1)
        return (
          (c = t[a]),
          (f = n ? n(c) : c),
          new he(f, c.node, he.BLACK, null, null)
        );
      {
        const g = parseInt(d / 2, 10) + a,
          _ = i(a, g),
          y = i(g + 1, u);
        return (
          (c = t[g]), (f = n ? n(c) : c), new he(f, c.node, he.BLACK, _, y)
        );
      }
    },
    s = function (a) {
      let u = null,
        d = null,
        c = t.length;
      const f = function (_, y) {
          const C = c - _,
            m = c;
          c -= _;
          const h = i(C + 1, m),
            p = t[C],
            v = n ? n(p) : p;
          g(new he(v, p.node, y, null, h));
        },
        g = function (_) {
          u ? ((u.left = _), (u = _)) : ((d = _), (u = _));
        };
      for (let _ = 0; _ < a.count; ++_) {
        const y = a.nextBitIsOne(),
          C = Math.pow(2, a.count - (_ + 1));
        y ? f(C, he.BLACK) : (f(C, he.BLACK), f(C, he.RED));
      }
      return d;
    },
    o = new GE(t.length),
    l = s(o);
  return new Oe(r || e, l);
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Cl;
const Ln = {};
class vt {
  constructor(e, n) {
    (this.indexes_ = e), (this.indexSet_ = n);
  }
  static get Default() {
    return (
      S(Ln && te, "ChildrenNode.ts has not been loaded"),
      (Cl = Cl || new vt({ ".priority": Ln }, { ".priority": te })),
      Cl
    );
  }
  get(e) {
    const n = dr(this.indexes_, e);
    if (!n) throw new Error("No index defined for " + e);
    return n instanceof Oe ? n : null;
  }
  hasIndex(e) {
    return Nt(this.indexSet_, e.toString());
  }
  addIndex(e, n) {
    S(
      e !== rr,
      "KeyIndex always exists and isn't meant to be added to the IndexMap."
    );
    const r = [];
    let i = !1;
    const s = n.getIterator(M.Wrap);
    let o = s.getNext();
    for (; o; ) (i = i || e.isDefinedOn(o.node)), r.push(o), (o = s.getNext());
    let l;
    i ? (l = no(r, e.getCompare())) : (l = Ln);
    const a = e.toString(),
      u = Object.assign({}, this.indexSet_);
    u[a] = e;
    const d = Object.assign({}, this.indexes_);
    return (d[a] = l), new vt(d, u);
  }
  addToIndexes(e, n) {
    const r = Xs(this.indexes_, (i, s) => {
      const o = dr(this.indexSet_, s);
      if ((S(o, "Missing index implementation for " + s), i === Ln))
        if (o.isDefinedOn(e.node)) {
          const l = [],
            a = n.getIterator(M.Wrap);
          let u = a.getNext();
          for (; u; ) u.name !== e.name && l.push(u), (u = a.getNext());
          return l.push(e), no(l, o.getCompare());
        } else return Ln;
      else {
        const l = n.get(e.name);
        let a = i;
        return l && (a = a.remove(new M(e.name, l))), a.insert(e, e.node);
      }
    });
    return new vt(r, this.indexSet_);
  }
  removeFromIndexes(e, n) {
    const r = Xs(this.indexes_, (i) => {
      if (i === Ln) return i;
      {
        const s = n.get(e.name);
        return s ? i.remove(new M(e.name, s)) : i;
      }
    });
    return new vt(r, this.indexSet_);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Or;
class P {
  constructor(e, n, r) {
    (this.children_ = e),
      (this.priorityNode_ = n),
      (this.indexMap_ = r),
      (this.lazyHash_ = null),
      this.priorityNode_ && Bm(this.priorityNode_),
      this.children_.isEmpty() &&
        S(
          !this.priorityNode_ || this.priorityNode_.isEmpty(),
          "An empty node cannot have a priority"
        );
  }
  static get EMPTY_NODE() {
    return Or || (Or = new P(new Oe(Gu), null, vt.Default));
  }
  isLeafNode() {
    return !1;
  }
  getPriority() {
    return this.priorityNode_ || Or;
  }
  updatePriority(e) {
    return this.children_.isEmpty()
      ? this
      : new P(this.children_, e, this.indexMap_);
  }
  getImmediateChild(e) {
    if (e === ".priority") return this.getPriority();
    {
      const n = this.children_.get(e);
      return n === null ? Or : n;
    }
  }
  getChild(e) {
    const n = z(e);
    return n === null ? this : this.getImmediateChild(n).getChild(H(e));
  }
  hasChild(e) {
    return this.children_.get(e) !== null;
  }
  updateImmediateChild(e, n) {
    if ((S(n, "We should always be passing snapshot nodes"), e === ".priority"))
      return this.updatePriority(n);
    {
      const r = new M(e, n);
      let i, s;
      n.isEmpty()
        ? ((i = this.children_.remove(e)),
          (s = this.indexMap_.removeFromIndexes(r, this.children_)))
        : ((i = this.children_.insert(e, n)),
          (s = this.indexMap_.addToIndexes(r, this.children_)));
      const o = i.isEmpty() ? Or : this.priorityNode_;
      return new P(i, o, s);
    }
  }
  updateChild(e, n) {
    const r = z(e);
    if (r === null) return n;
    {
      S(
        z(e) !== ".priority" || Zt(e) === 1,
        ".priority must be the last token in a path"
      );
      const i = this.getImmediateChild(r).updateChild(H(e), n);
      return this.updateImmediateChild(r, i);
    }
  }
  isEmpty() {
    return this.children_.isEmpty();
  }
  numChildren() {
    return this.children_.count();
  }
  val(e) {
    if (this.isEmpty()) return null;
    const n = {};
    let r = 0,
      i = 0,
      s = !0;
    if (
      (this.forEachChild(te, (o, l) => {
        (n[o] = l.val(e)),
          r++,
          s && P.INTEGER_REGEXP_.test(o)
            ? (i = Math.max(i, Number(o)))
            : (s = !1);
      }),
      !e && s && i < 2 * r)
    ) {
      const o = [];
      for (const l in n) o[l] = n[l];
      return o;
    } else
      return (
        e &&
          !this.getPriority().isEmpty() &&
          (n[".priority"] = this.getPriority().val()),
        n
      );
  }
  hash() {
    if (this.lazyHash_ === null) {
      let e = "";
      this.getPriority().isEmpty() ||
        (e += "priority:" + jm(this.getPriority().val()) + ":"),
        this.forEachChild(te, (n, r) => {
          const i = r.hash();
          i !== "" && (e += ":" + n + ":" + i);
        }),
        (this.lazyHash_ = e === "" ? "" : fm(e));
    }
    return this.lazyHash_;
  }
  getPredecessorChildName(e, n, r) {
    const i = this.resolveIndex_(r);
    if (i) {
      const s = i.getPredecessorKey(new M(e, n));
      return s ? s.name : null;
    } else return this.children_.getPredecessorKey(e);
  }
  getFirstChildName(e) {
    const n = this.resolveIndex_(e);
    if (n) {
      const r = n.minKey();
      return r && r.name;
    } else return this.children_.minKey();
  }
  getFirstChild(e) {
    const n = this.getFirstChildName(e);
    return n ? new M(n, this.children_.get(n)) : null;
  }
  getLastChildName(e) {
    const n = this.resolveIndex_(e);
    if (n) {
      const r = n.maxKey();
      return r && r.name;
    } else return this.children_.maxKey();
  }
  getLastChild(e) {
    const n = this.getLastChildName(e);
    return n ? new M(n, this.children_.get(n)) : null;
  }
  forEachChild(e, n) {
    const r = this.resolveIndex_(e);
    return r
      ? r.inorderTraversal((i) => n(i.name, i.node))
      : this.children_.inorderTraversal(n);
  }
  getIterator(e) {
    return this.getIteratorFrom(e.minPost(), e);
  }
  getIteratorFrom(e, n) {
    const r = this.resolveIndex_(n);
    if (r) return r.getIteratorFrom(e, (i) => i);
    {
      const i = this.children_.getIteratorFrom(e.name, M.Wrap);
      let s = i.peek();
      for (; s != null && n.compare(s, e) < 0; ) i.getNext(), (s = i.peek());
      return i;
    }
  }
  getReverseIterator(e) {
    return this.getReverseIteratorFrom(e.maxPost(), e);
  }
  getReverseIteratorFrom(e, n) {
    const r = this.resolveIndex_(n);
    if (r) return r.getReverseIteratorFrom(e, (i) => i);
    {
      const i = this.children_.getReverseIteratorFrom(e.name, M.Wrap);
      let s = i.peek();
      for (; s != null && n.compare(s, e) > 0; ) i.getNext(), (s = i.peek());
      return i;
    }
  }
  compareTo(e) {
    return this.isEmpty()
      ? e.isEmpty()
        ? 0
        : -1
      : e.isLeafNode() || e.isEmpty()
      ? 1
      : e === Ui
      ? -1
      : 0;
  }
  withIndex(e) {
    if (e === rr || this.indexMap_.hasIndex(e)) return this;
    {
      const n = this.indexMap_.addIndex(e, this.children_);
      return new P(this.children_, this.priorityNode_, n);
    }
  }
  isIndexed(e) {
    return e === rr || this.indexMap_.hasIndex(e);
  }
  equals(e) {
    if (e === this) return !0;
    if (e.isLeafNode()) return !1;
    {
      const n = e;
      if (this.getPriority().equals(n.getPriority()))
        if (this.children_.count() === n.children_.count()) {
          const r = this.getIterator(te),
            i = n.getIterator(te);
          let s = r.getNext(),
            o = i.getNext();
          for (; s && o; ) {
            if (s.name !== o.name || !s.node.equals(o.node)) return !1;
            (s = r.getNext()), (o = i.getNext());
          }
          return s === null && o === null;
        } else return !1;
      else return !1;
    }
  }
  resolveIndex_(e) {
    return e === rr ? null : this.indexMap_.get(e.toString());
  }
}
P.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/;
class KE extends P {
  constructor() {
    super(new Oe(Gu), P.EMPTY_NODE, vt.Default);
  }
  compareTo(e) {
    return e === this ? 0 : 1;
  }
  equals(e) {
    return e === this;
  }
  getPriority() {
    return this;
  }
  getImmediateChild(e) {
    return P.EMPTY_NODE;
  }
  isEmpty() {
    return !1;
  }
}
const Ui = new KE();
Object.defineProperties(M, {
  MIN: { value: new M(fr, P.EMPTY_NODE) },
  MAX: { value: new M(xn, Ui) },
});
Um.__EMPTY_NODE = P.EMPTY_NODE;
de.__childrenNodeConstructor = P;
jE(Ui);
WE(Ui);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const QE = !0;
function _e(t, e = null) {
  if (t === null) return P.EMPTY_NODE;
  if (
    (typeof t == "object" && ".priority" in t && (e = t[".priority"]),
    S(
      e === null ||
        typeof e == "string" ||
        typeof e == "number" ||
        (typeof e == "object" && ".sv" in e),
      "Invalid priority type found: " + typeof e
    ),
    typeof t == "object" &&
      ".value" in t &&
      t[".value"] !== null &&
      (t = t[".value"]),
    typeof t != "object" || ".sv" in t)
  ) {
    const n = t;
    return new de(n, _e(e));
  }
  if (!(t instanceof Array) && QE) {
    const n = [];
    let r = !1;
    if (
      (Fe(t, (o, l) => {
        if (o.substring(0, 1) !== ".") {
          const a = _e(l);
          a.isEmpty() ||
            ((r = r || !a.getPriority().isEmpty()), n.push(new M(o, a)));
        }
      }),
      n.length === 0)
    )
      return P.EMPTY_NODE;
    const s = no(n, UE, (o) => o.name, Gu);
    if (r) {
      const o = no(n, te.getCompare());
      return new P(s, _e(e), new vt({ ".priority": o }, { ".priority": te }));
    } else return new P(s, _e(e), vt.Default);
  } else {
    let n = P.EMPTY_NODE;
    return (
      Fe(t, (r, i) => {
        if (Nt(t, r) && r.substring(0, 1) !== ".") {
          const s = _e(i);
          (s.isLeafNode() || !s.isEmpty()) &&
            (n = n.updateImmediateChild(r, s));
        }
      }),
      n.updatePriority(_e(e))
    );
  }
}
BE(_e);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $E extends Oo {
  constructor(e) {
    super(),
      (this.indexPath_ = e),
      S(
        !F(e) && z(e) !== ".priority",
        "Can't create PathIndex with empty path or .priority key"
      );
  }
  extractChild(e) {
    return e.getChild(this.indexPath_);
  }
  isDefinedOn(e) {
    return !e.getChild(this.indexPath_).isEmpty();
  }
  compare(e, n) {
    const r = this.extractChild(e.node),
      i = this.extractChild(n.node),
      s = r.compareTo(i);
    return s === 0 ? wr(e.name, n.name) : s;
  }
  makePost(e, n) {
    const r = _e(e),
      i = P.EMPTY_NODE.updateChild(this.indexPath_, r);
    return new M(n, i);
  }
  maxPost() {
    const e = P.EMPTY_NODE.updateChild(this.indexPath_, Ui);
    return new M(xn, e);
  }
  toString() {
    return Mm(this.indexPath_, 0).join("/");
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class YE extends Oo {
  compare(e, n) {
    const r = e.node.compareTo(n.node);
    return r === 0 ? wr(e.name, n.name) : r;
  }
  isDefinedOn(e) {
    return !0;
  }
  indexedValueChanged(e, n) {
    return !e.equals(n);
  }
  minPost() {
    return M.MIN;
  }
  maxPost() {
    return M.MAX;
  }
  makePost(e, n) {
    const r = _e(e);
    return new M(n, r);
  }
  toString() {
    return ".value";
  }
}
const qE = new YE();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Hm(t) {
  return { type: "value", snapshotNode: t };
}
function hr(t, e) {
  return { type: "child_added", snapshotNode: e, childName: t };
}
function Ei(t, e) {
  return { type: "child_removed", snapshotNode: e, childName: t };
}
function Ci(t, e, n) {
  return { type: "child_changed", snapshotNode: e, childName: t, oldSnap: n };
}
function XE(t, e) {
  return { type: "child_moved", snapshotNode: e, childName: t };
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ku {
  constructor(e) {
    this.index_ = e;
  }
  updateChild(e, n, r, i, s, o) {
    S(
      e.isIndexed(this.index_),
      "A node must be indexed if only a child is updated"
    );
    const l = e.getImmediateChild(n);
    return (l.getChild(i).equals(r.getChild(i)) &&
      l.isEmpty() === r.isEmpty()) ||
      (o != null &&
        (r.isEmpty()
          ? e.hasChild(n)
            ? o.trackChildChange(Ei(n, l))
            : S(
                e.isLeafNode(),
                "A child remove without an old child only makes sense on a leaf node"
              )
          : l.isEmpty()
          ? o.trackChildChange(hr(n, r))
          : o.trackChildChange(Ci(n, r, l))),
      e.isLeafNode() && r.isEmpty())
      ? e
      : e.updateImmediateChild(n, r).withIndex(this.index_);
  }
  updateFullNode(e, n, r) {
    return (
      r != null &&
        (e.isLeafNode() ||
          e.forEachChild(te, (i, s) => {
            n.hasChild(i) || r.trackChildChange(Ei(i, s));
          }),
        n.isLeafNode() ||
          n.forEachChild(te, (i, s) => {
            if (e.hasChild(i)) {
              const o = e.getImmediateChild(i);
              o.equals(s) || r.trackChildChange(Ci(i, s, o));
            } else r.trackChildChange(hr(i, s));
          })),
      n.withIndex(this.index_)
    );
  }
  updatePriority(e, n) {
    return e.isEmpty() ? P.EMPTY_NODE : e.updatePriority(n);
  }
  filtersNodes() {
    return !1;
  }
  getIndexedFilter() {
    return this;
  }
  getIndex() {
    return this.index_;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Si {
  constructor(e) {
    (this.indexedFilter_ = new Ku(e.getIndex())),
      (this.index_ = e.getIndex()),
      (this.startPost_ = Si.getStartPost_(e)),
      (this.endPost_ = Si.getEndPost_(e)),
      (this.startIsInclusive_ = !e.startAfterSet_),
      (this.endIsInclusive_ = !e.endBeforeSet_);
  }
  getStartPost() {
    return this.startPost_;
  }
  getEndPost() {
    return this.endPost_;
  }
  matches(e) {
    const n = this.startIsInclusive_
        ? this.index_.compare(this.getStartPost(), e) <= 0
        : this.index_.compare(this.getStartPost(), e) < 0,
      r = this.endIsInclusive_
        ? this.index_.compare(e, this.getEndPost()) <= 0
        : this.index_.compare(e, this.getEndPost()) < 0;
    return n && r;
  }
  updateChild(e, n, r, i, s, o) {
    return (
      this.matches(new M(n, r)) || (r = P.EMPTY_NODE),
      this.indexedFilter_.updateChild(e, n, r, i, s, o)
    );
  }
  updateFullNode(e, n, r) {
    n.isLeafNode() && (n = P.EMPTY_NODE);
    let i = n.withIndex(this.index_);
    i = i.updatePriority(P.EMPTY_NODE);
    const s = this;
    return (
      n.forEachChild(te, (o, l) => {
        s.matches(new M(o, l)) || (i = i.updateImmediateChild(o, P.EMPTY_NODE));
      }),
      this.indexedFilter_.updateFullNode(e, i, r)
    );
  }
  updatePriority(e, n) {
    return e;
  }
  filtersNodes() {
    return !0;
  }
  getIndexedFilter() {
    return this.indexedFilter_;
  }
  getIndex() {
    return this.index_;
  }
  static getStartPost_(e) {
    if (e.hasStart()) {
      const n = e.getIndexStartName();
      return e.getIndex().makePost(e.getIndexStartValue(), n);
    } else return e.getIndex().minPost();
  }
  static getEndPost_(e) {
    if (e.hasEnd()) {
      const n = e.getIndexEndName();
      return e.getIndex().makePost(e.getIndexEndValue(), n);
    } else return e.getIndex().maxPost();
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class JE {
  constructor(e) {
    (this.withinDirectionalStart = (n) =>
      this.reverse_ ? this.withinEndPost(n) : this.withinStartPost(n)),
      (this.withinDirectionalEnd = (n) =>
        this.reverse_ ? this.withinStartPost(n) : this.withinEndPost(n)),
      (this.withinStartPost = (n) => {
        const r = this.index_.compare(this.rangedFilter_.getStartPost(), n);
        return this.startIsInclusive_ ? r <= 0 : r < 0;
      }),
      (this.withinEndPost = (n) => {
        const r = this.index_.compare(n, this.rangedFilter_.getEndPost());
        return this.endIsInclusive_ ? r <= 0 : r < 0;
      }),
      (this.rangedFilter_ = new Si(e)),
      (this.index_ = e.getIndex()),
      (this.limit_ = e.getLimit()),
      (this.reverse_ = !e.isViewFromLeft()),
      (this.startIsInclusive_ = !e.startAfterSet_),
      (this.endIsInclusive_ = !e.endBeforeSet_);
  }
  updateChild(e, n, r, i, s, o) {
    return (
      this.rangedFilter_.matches(new M(n, r)) || (r = P.EMPTY_NODE),
      e.getImmediateChild(n).equals(r)
        ? e
        : e.numChildren() < this.limit_
        ? this.rangedFilter_.getIndexedFilter().updateChild(e, n, r, i, s, o)
        : this.fullLimitUpdateChild_(e, n, r, s, o)
    );
  }
  updateFullNode(e, n, r) {
    let i;
    if (n.isLeafNode() || n.isEmpty()) i = P.EMPTY_NODE.withIndex(this.index_);
    else if (this.limit_ * 2 < n.numChildren() && n.isIndexed(this.index_)) {
      i = P.EMPTY_NODE.withIndex(this.index_);
      let s;
      this.reverse_
        ? (s = n.getReverseIteratorFrom(
            this.rangedFilter_.getEndPost(),
            this.index_
          ))
        : (s = n.getIteratorFrom(
            this.rangedFilter_.getStartPost(),
            this.index_
          ));
      let o = 0;
      for (; s.hasNext() && o < this.limit_; ) {
        const l = s.getNext();
        if (this.withinDirectionalStart(l))
          if (this.withinDirectionalEnd(l))
            (i = i.updateImmediateChild(l.name, l.node)), o++;
          else break;
        else continue;
      }
    } else {
      (i = n.withIndex(this.index_)), (i = i.updatePriority(P.EMPTY_NODE));
      let s;
      this.reverse_
        ? (s = i.getReverseIterator(this.index_))
        : (s = i.getIterator(this.index_));
      let o = 0;
      for (; s.hasNext(); ) {
        const l = s.getNext();
        o < this.limit_ &&
        this.withinDirectionalStart(l) &&
        this.withinDirectionalEnd(l)
          ? o++
          : (i = i.updateImmediateChild(l.name, P.EMPTY_NODE));
      }
    }
    return this.rangedFilter_.getIndexedFilter().updateFullNode(e, i, r);
  }
  updatePriority(e, n) {
    return e;
  }
  filtersNodes() {
    return !0;
  }
  getIndexedFilter() {
    return this.rangedFilter_.getIndexedFilter();
  }
  getIndex() {
    return this.index_;
  }
  fullLimitUpdateChild_(e, n, r, i, s) {
    let o;
    if (this.reverse_) {
      const c = this.index_.getCompare();
      o = (f, g) => c(g, f);
    } else o = this.index_.getCompare();
    const l = e;
    S(l.numChildren() === this.limit_, "");
    const a = new M(n, r),
      u = this.reverse_
        ? l.getFirstChild(this.index_)
        : l.getLastChild(this.index_),
      d = this.rangedFilter_.matches(a);
    if (l.hasChild(n)) {
      const c = l.getImmediateChild(n);
      let f = i.getChildAfterChild(this.index_, u, this.reverse_);
      for (; f != null && (f.name === n || l.hasChild(f.name)); )
        f = i.getChildAfterChild(this.index_, f, this.reverse_);
      const g = f == null ? 1 : o(f, a);
      if (d && !r.isEmpty() && g >= 0)
        return (
          s != null && s.trackChildChange(Ci(n, r, c)),
          l.updateImmediateChild(n, r)
        );
      {
        s != null && s.trackChildChange(Ei(n, c));
        const y = l.updateImmediateChild(n, P.EMPTY_NODE);
        return f != null && this.rangedFilter_.matches(f)
          ? (s != null && s.trackChildChange(hr(f.name, f.node)),
            y.updateImmediateChild(f.name, f.node))
          : y;
      }
    } else
      return r.isEmpty()
        ? e
        : d && o(u, a) >= 0
        ? (s != null &&
            (s.trackChildChange(Ei(u.name, u.node)),
            s.trackChildChange(hr(n, r))),
          l
            .updateImmediateChild(n, r)
            .updateImmediateChild(u.name, P.EMPTY_NODE))
        : e;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Qu {
  constructor() {
    (this.limitSet_ = !1),
      (this.startSet_ = !1),
      (this.startNameSet_ = !1),
      (this.startAfterSet_ = !1),
      (this.endSet_ = !1),
      (this.endNameSet_ = !1),
      (this.endBeforeSet_ = !1),
      (this.limit_ = 0),
      (this.viewFrom_ = ""),
      (this.indexStartValue_ = null),
      (this.indexStartName_ = ""),
      (this.indexEndValue_ = null),
      (this.indexEndName_ = ""),
      (this.index_ = te);
  }
  hasStart() {
    return this.startSet_;
  }
  isViewFromLeft() {
    return this.viewFrom_ === "" ? this.startSet_ : this.viewFrom_ === "l";
  }
  getIndexStartValue() {
    return (
      S(this.startSet_, "Only valid if start has been set"),
      this.indexStartValue_
    );
  }
  getIndexStartName() {
    return (
      S(this.startSet_, "Only valid if start has been set"),
      this.startNameSet_ ? this.indexStartName_ : fr
    );
  }
  hasEnd() {
    return this.endSet_;
  }
  getIndexEndValue() {
    return (
      S(this.endSet_, "Only valid if end has been set"), this.indexEndValue_
    );
  }
  getIndexEndName() {
    return (
      S(this.endSet_, "Only valid if end has been set"),
      this.endNameSet_ ? this.indexEndName_ : xn
    );
  }
  hasLimit() {
    return this.limitSet_;
  }
  hasAnchoredLimit() {
    return this.limitSet_ && this.viewFrom_ !== "";
  }
  getLimit() {
    return S(this.limitSet_, "Only valid if limit has been set"), this.limit_;
  }
  getIndex() {
    return this.index_;
  }
  loadsAllData() {
    return !(this.startSet_ || this.endSet_ || this.limitSet_);
  }
  isDefault() {
    return this.loadsAllData() && this.index_ === te;
  }
  copy() {
    const e = new Qu();
    return (
      (e.limitSet_ = this.limitSet_),
      (e.limit_ = this.limit_),
      (e.startSet_ = this.startSet_),
      (e.startAfterSet_ = this.startAfterSet_),
      (e.indexStartValue_ = this.indexStartValue_),
      (e.startNameSet_ = this.startNameSet_),
      (e.indexStartName_ = this.indexStartName_),
      (e.endSet_ = this.endSet_),
      (e.endBeforeSet_ = this.endBeforeSet_),
      (e.indexEndValue_ = this.indexEndValue_),
      (e.endNameSet_ = this.endNameSet_),
      (e.indexEndName_ = this.indexEndName_),
      (e.index_ = this.index_),
      (e.viewFrom_ = this.viewFrom_),
      e
    );
  }
}
function ZE(t) {
  return t.loadsAllData()
    ? new Ku(t.getIndex())
    : t.hasLimit()
    ? new JE(t)
    : new Si(t);
}
function of(t) {
  const e = {};
  if (t.isDefault()) return e;
  let n;
  if (
    (t.index_ === te
      ? (n = "$priority")
      : t.index_ === qE
      ? (n = "$value")
      : t.index_ === rr
      ? (n = "$key")
      : (S(t.index_ instanceof $E, "Unrecognized index type!"),
        (n = t.index_.toString())),
    (e.orderBy = le(n)),
    t.startSet_)
  ) {
    const r = t.startAfterSet_ ? "startAfter" : "startAt";
    (e[r] = le(t.indexStartValue_)),
      t.startNameSet_ && (e[r] += "," + le(t.indexStartName_));
  }
  if (t.endSet_) {
    const r = t.endBeforeSet_ ? "endBefore" : "endAt";
    (e[r] = le(t.indexEndValue_)),
      t.endNameSet_ && (e[r] += "," + le(t.indexEndName_));
  }
  return (
    t.limitSet_ &&
      (t.isViewFromLeft()
        ? (e.limitToFirst = t.limit_)
        : (e.limitToLast = t.limit_)),
    e
  );
}
function lf(t) {
  const e = {};
  if (
    (t.startSet_ &&
      ((e.sp = t.indexStartValue_),
      t.startNameSet_ && (e.sn = t.indexStartName_),
      (e.sin = !t.startAfterSet_)),
    t.endSet_ &&
      ((e.ep = t.indexEndValue_),
      t.endNameSet_ && (e.en = t.indexEndName_),
      (e.ein = !t.endBeforeSet_)),
    t.limitSet_)
  ) {
    e.l = t.limit_;
    let n = t.viewFrom_;
    n === "" && (t.isViewFromLeft() ? (n = "l") : (n = "r")), (e.vf = n);
  }
  return t.index_ !== te && (e.i = t.index_.toString()), e;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ro extends Om {
  constructor(e, n, r, i) {
    super(),
      (this.repoInfo_ = e),
      (this.onDataUpdate_ = n),
      (this.authTokenProvider_ = r),
      (this.appCheckTokenProvider_ = i),
      (this.log_ = bi("p:rest:")),
      (this.listens_ = {});
  }
  reportStats(e) {
    throw new Error("Method not implemented.");
  }
  static getListenId_(e, n) {
    return n !== void 0
      ? "tag$" + n
      : (S(
          e._queryParams.isDefault(),
          "should have a tag if it's not a default query."
        ),
        e._path.toString());
  }
  listen(e, n, r, i) {
    const s = e._path.toString();
    this.log_("Listen called for " + s + " " + e._queryIdentifier);
    const o = ro.getListenId_(e, r),
      l = {};
    this.listens_[o] = l;
    const a = of(e._queryParams);
    this.restRequest_(s + ".json", a, (u, d) => {
      let c = d;
      if (
        (u === 404 && ((c = null), (u = null)),
        u === null && this.onDataUpdate_(s, c, !1, r),
        dr(this.listens_, o) === l)
      ) {
        let f;
        u
          ? u === 401
            ? (f = "permission_denied")
            : (f = "rest_error:" + u)
          : (f = "ok"),
          i(f, null);
      }
    });
  }
  unlisten(e, n) {
    const r = ro.getListenId_(e, n);
    delete this.listens_[r];
  }
  get(e) {
    const n = of(e._queryParams),
      r = e._path.toString(),
      i = new zu();
    return (
      this.restRequest_(r + ".json", n, (s, o) => {
        let l = o;
        s === 404 && ((l = null), (s = null)),
          s === null
            ? (this.onDataUpdate_(r, l, !1, null), i.resolve(l))
            : i.reject(new Error(l));
      }),
      i.promise
    );
  }
  refreshAuthToken(e) {}
  restRequest_(e, n = {}, r) {
    return (
      (n.format = "export"),
      Promise.all([
        this.authTokenProvider_.getToken(!1),
        this.appCheckTokenProvider_.getToken(!1),
      ]).then(([i, s]) => {
        i && i.accessToken && (n.auth = i.accessToken),
          s && s.token && (n.ac = s.token);
        const o =
          (this.repoInfo_.secure ? "https://" : "http://") +
          this.repoInfo_.host +
          e +
          "?ns=" +
          this.repoInfo_.namespace +
          A0(n);
        this.log_("Sending REST request for " + o);
        const l = new XMLHttpRequest();
        (l.onreadystatechange = () => {
          if (r && l.readyState === 4) {
            this.log_(
              "REST Response for " + o + " received. status:",
              l.status,
              "response:",
              l.responseText
            );
            let a = null;
            if (l.status >= 200 && l.status < 300) {
              try {
                a = _i(l.responseText);
              } catch {
                je(
                  "Failed to parse JSON response for " +
                    o +
                    ": " +
                    l.responseText
                );
              }
              r(null, a);
            } else
              l.status !== 401 &&
                l.status !== 404 &&
                je(
                  "Got unsuccessful REST response for " +
                    o +
                    " Status: " +
                    l.status
                ),
                r(l.status);
            r = null;
          }
        }),
          l.open("GET", o, !0),
          l.send();
      })
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eC {
  constructor() {
    this.rootNode_ = P.EMPTY_NODE;
  }
  getNode(e) {
    return this.rootNode_.getChild(e);
  }
  updateSnapshot(e, n) {
    this.rootNode_ = this.rootNode_.updateChild(e, n);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function io() {
  return { value: null, children: new Map() };
}
function Gm(t, e, n) {
  if (F(e)) (t.value = n), t.children.clear();
  else if (t.value !== null) t.value = t.value.updateChild(e, n);
  else {
    const r = z(e);
    t.children.has(r) || t.children.set(r, io());
    const i = t.children.get(r);
    (e = H(e)), Gm(i, e, n);
  }
}
function Oa(t, e, n) {
  t.value !== null
    ? n(e, t.value)
    : tC(t, (r, i) => {
        const s = new W(e.toString() + "/" + r);
        Oa(i, s, n);
      });
}
function tC(t, e) {
  t.children.forEach((n, r) => {
    e(r, n);
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nC {
  constructor(e) {
    (this.collection_ = e), (this.last_ = null);
  }
  get() {
    const e = this.collection_.get(),
      n = Object.assign({}, e);
    return (
      this.last_ &&
        Fe(this.last_, (r, i) => {
          n[r] = n[r] - i;
        }),
      (this.last_ = e),
      n
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const af = 10 * 1e3,
  rC = 30 * 1e3,
  iC = 5 * 60 * 1e3;
class sC {
  constructor(e, n) {
    (this.server_ = n),
      (this.statsToReport_ = {}),
      (this.statsListener_ = new nC(e));
    const r = af + (rC - af) * Math.random();
    $r(this.reportStats_.bind(this), Math.floor(r));
  }
  reportStats_() {
    const e = this.statsListener_.get(),
      n = {};
    let r = !1;
    Fe(e, (i, s) => {
      s > 0 && Nt(this.statsToReport_, i) && ((n[i] = s), (r = !0));
    }),
      r && this.server_.reportStats(n),
      $r(this.reportStats_.bind(this), Math.floor(Math.random() * 2 * iC));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var nt;
(function (t) {
  (t[(t.OVERWRITE = 0)] = "OVERWRITE"),
    (t[(t.MERGE = 1)] = "MERGE"),
    (t[(t.ACK_USER_WRITE = 2)] = "ACK_USER_WRITE"),
    (t[(t.LISTEN_COMPLETE = 3)] = "LISTEN_COMPLETE");
})(nt || (nt = {}));
function Km() {
  return { fromUser: !0, fromServer: !1, queryId: null, tagged: !1 };
}
function $u() {
  return { fromUser: !1, fromServer: !0, queryId: null, tagged: !1 };
}
function Yu(t) {
  return { fromUser: !1, fromServer: !0, queryId: t, tagged: !0 };
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class so {
  constructor(e, n, r) {
    (this.path = e),
      (this.affectedTree = n),
      (this.revert = r),
      (this.type = nt.ACK_USER_WRITE),
      (this.source = Km());
  }
  operationForChild(e) {
    if (F(this.path)) {
      if (this.affectedTree.value != null)
        return (
          S(
            this.affectedTree.children.isEmpty(),
            "affectedTree should not have overlapping affected paths."
          ),
          this
        );
      {
        const n = this.affectedTree.subtree(new W(e));
        return new so(j(), n, this.revert);
      }
    } else
      return (
        S(z(this.path) === e, "operationForChild called for unrelated child."),
        new so(H(this.path), this.affectedTree, this.revert)
      );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ii {
  constructor(e, n) {
    (this.source = e), (this.path = n), (this.type = nt.LISTEN_COMPLETE);
  }
  operationForChild(e) {
    return F(this.path)
      ? new Ii(this.source, j())
      : new Ii(this.source, H(this.path));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Tn {
  constructor(e, n, r) {
    (this.source = e),
      (this.path = n),
      (this.snap = r),
      (this.type = nt.OVERWRITE);
  }
  operationForChild(e) {
    return F(this.path)
      ? new Tn(this.source, j(), this.snap.getImmediateChild(e))
      : new Tn(this.source, H(this.path), this.snap);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class xi {
  constructor(e, n, r) {
    (this.source = e),
      (this.path = n),
      (this.children = r),
      (this.type = nt.MERGE);
  }
  operationForChild(e) {
    if (F(this.path)) {
      const n = this.children.subtree(new W(e));
      return n.isEmpty()
        ? null
        : n.value
        ? new Tn(this.source, j(), n.value)
        : new xi(this.source, j(), n);
    } else
      return (
        S(
          z(this.path) === e,
          "Can't get a merge for a child not on the path of the operation"
        ),
        new xi(this.source, H(this.path), this.children)
      );
  }
  toString() {
    return (
      "Operation(" +
      this.path +
      ": " +
      this.source.toString() +
      " merge: " +
      this.children.toString() +
      ")"
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class en {
  constructor(e, n, r) {
    (this.node_ = e), (this.fullyInitialized_ = n), (this.filtered_ = r);
  }
  isFullyInitialized() {
    return this.fullyInitialized_;
  }
  isFiltered() {
    return this.filtered_;
  }
  isCompleteForPath(e) {
    if (F(e)) return this.isFullyInitialized() && !this.filtered_;
    const n = z(e);
    return this.isCompleteForChild(n);
  }
  isCompleteForChild(e) {
    return (
      (this.isFullyInitialized() && !this.filtered_) || this.node_.hasChild(e)
    );
  }
  getNode() {
    return this.node_;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oC {
  constructor(e) {
    (this.query_ = e), (this.index_ = this.query_._queryParams.getIndex());
  }
}
function lC(t, e, n, r) {
  const i = [],
    s = [];
  return (
    e.forEach((o) => {
      o.type === "child_changed" &&
        t.index_.indexedValueChanged(o.oldSnap, o.snapshotNode) &&
        s.push(XE(o.childName, o.snapshotNode));
    }),
    Dr(t, i, "child_removed", e, r, n),
    Dr(t, i, "child_added", e, r, n),
    Dr(t, i, "child_moved", s, r, n),
    Dr(t, i, "child_changed", e, r, n),
    Dr(t, i, "value", e, r, n),
    i
  );
}
function Dr(t, e, n, r, i, s) {
  const o = r.filter((l) => l.type === n);
  o.sort((l, a) => uC(t, l, a)),
    o.forEach((l) => {
      const a = aC(t, l, s);
      i.forEach((u) => {
        u.respondsTo(l.type) && e.push(u.createEvent(a, t.query_));
      });
    });
}
function aC(t, e, n) {
  return (
    e.type === "value" ||
      e.type === "child_removed" ||
      (e.prevName = n.getPredecessorChildName(
        e.childName,
        e.snapshotNode,
        t.index_
      )),
    e
  );
}
function uC(t, e, n) {
  if (e.childName == null || n.childName == null)
    throw yr("Should only compare child_ events.");
  const r = new M(e.childName, e.snapshotNode),
    i = new M(n.childName, n.snapshotNode);
  return t.index_.compare(r, i);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Do(t, e) {
  return { eventCache: t, serverCache: e };
}
function Yr(t, e, n, r) {
  return Do(new en(e, n, r), t.serverCache);
}
function Qm(t, e, n, r) {
  return Do(t.eventCache, new en(e, n, r));
}
function oo(t) {
  return t.eventCache.isFullyInitialized() ? t.eventCache.getNode() : null;
}
function kn(t) {
  return t.serverCache.isFullyInitialized() ? t.serverCache.getNode() : null;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Sl;
const cC = () => (Sl || (Sl = new Oe(Yw)), Sl);
class $ {
  constructor(e, n = cC()) {
    (this.value = e), (this.children = n);
  }
  static fromObject(e) {
    let n = new $(null);
    return (
      Fe(e, (r, i) => {
        n = n.set(new W(r), i);
      }),
      n
    );
  }
  isEmpty() {
    return this.value === null && this.children.isEmpty();
  }
  findRootMostMatchingPathAndValue(e, n) {
    if (this.value != null && n(this.value))
      return { path: j(), value: this.value };
    if (F(e)) return null;
    {
      const r = z(e),
        i = this.children.get(r);
      if (i !== null) {
        const s = i.findRootMostMatchingPathAndValue(H(e), n);
        return s != null
          ? { path: ae(new W(r), s.path), value: s.value }
          : null;
      } else return null;
    }
  }
  findRootMostValueAndPath(e) {
    return this.findRootMostMatchingPathAndValue(e, () => !0);
  }
  subtree(e) {
    if (F(e)) return this;
    {
      const n = z(e),
        r = this.children.get(n);
      return r !== null ? r.subtree(H(e)) : new $(null);
    }
  }
  set(e, n) {
    if (F(e)) return new $(n, this.children);
    {
      const r = z(e),
        s = (this.children.get(r) || new $(null)).set(H(e), n),
        o = this.children.insert(r, s);
      return new $(this.value, o);
    }
  }
  remove(e) {
    if (F(e))
      return this.children.isEmpty() ? new $(null) : new $(null, this.children);
    {
      const n = z(e),
        r = this.children.get(n);
      if (r) {
        const i = r.remove(H(e));
        let s;
        return (
          i.isEmpty()
            ? (s = this.children.remove(n))
            : (s = this.children.insert(n, i)),
          this.value === null && s.isEmpty()
            ? new $(null)
            : new $(this.value, s)
        );
      } else return this;
    }
  }
  get(e) {
    if (F(e)) return this.value;
    {
      const n = z(e),
        r = this.children.get(n);
      return r ? r.get(H(e)) : null;
    }
  }
  setTree(e, n) {
    if (F(e)) return n;
    {
      const r = z(e),
        s = (this.children.get(r) || new $(null)).setTree(H(e), n);
      let o;
      return (
        s.isEmpty()
          ? (o = this.children.remove(r))
          : (o = this.children.insert(r, s)),
        new $(this.value, o)
      );
    }
  }
  fold(e) {
    return this.fold_(j(), e);
  }
  fold_(e, n) {
    const r = {};
    return (
      this.children.inorderTraversal((i, s) => {
        r[i] = s.fold_(ae(e, i), n);
      }),
      n(e, this.value, r)
    );
  }
  findOnPath(e, n) {
    return this.findOnPath_(e, j(), n);
  }
  findOnPath_(e, n, r) {
    const i = this.value ? r(n, this.value) : !1;
    if (i) return i;
    if (F(e)) return null;
    {
      const s = z(e),
        o = this.children.get(s);
      return o ? o.findOnPath_(H(e), ae(n, s), r) : null;
    }
  }
  foreachOnPath(e, n) {
    return this.foreachOnPath_(e, j(), n);
  }
  foreachOnPath_(e, n, r) {
    if (F(e)) return this;
    {
      this.value && r(n, this.value);
      const i = z(e),
        s = this.children.get(i);
      return s ? s.foreachOnPath_(H(e), ae(n, i), r) : new $(null);
    }
  }
  foreach(e) {
    this.foreach_(j(), e);
  }
  foreach_(e, n) {
    this.children.inorderTraversal((r, i) => {
      i.foreach_(ae(e, r), n);
    }),
      this.value && n(e, this.value);
  }
  foreachChild(e) {
    this.children.inorderTraversal((n, r) => {
      r.value && e(n, r.value);
    });
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class st {
  constructor(e) {
    this.writeTree_ = e;
  }
  static empty() {
    return new st(new $(null));
  }
}
function qr(t, e, n) {
  if (F(e)) return new st(new $(n));
  {
    const r = t.writeTree_.findRootMostValueAndPath(e);
    if (r != null) {
      const i = r.path;
      let s = r.value;
      const o = Te(i, e);
      return (s = s.updateChild(o, n)), new st(t.writeTree_.set(i, s));
    } else {
      const i = new $(n),
        s = t.writeTree_.setTree(e, i);
      return new st(s);
    }
  }
}
function uf(t, e, n) {
  let r = t;
  return (
    Fe(n, (i, s) => {
      r = qr(r, ae(e, i), s);
    }),
    r
  );
}
function cf(t, e) {
  if (F(e)) return st.empty();
  {
    const n = t.writeTree_.setTree(e, new $(null));
    return new st(n);
  }
}
function Da(t, e) {
  return On(t, e) != null;
}
function On(t, e) {
  const n = t.writeTree_.findRootMostValueAndPath(e);
  return n != null ? t.writeTree_.get(n.path).getChild(Te(n.path, e)) : null;
}
function df(t) {
  const e = [],
    n = t.writeTree_.value;
  return (
    n != null
      ? n.isLeafNode() ||
        n.forEachChild(te, (r, i) => {
          e.push(new M(r, i));
        })
      : t.writeTree_.children.inorderTraversal((r, i) => {
          i.value != null && e.push(new M(r, i.value));
        }),
    e
  );
}
function Yt(t, e) {
  if (F(e)) return t;
  {
    const n = On(t, e);
    return n != null ? new st(new $(n)) : new st(t.writeTree_.subtree(e));
  }
}
function La(t) {
  return t.writeTree_.isEmpty();
}
function pr(t, e) {
  return $m(j(), t.writeTree_, e);
}
function $m(t, e, n) {
  if (e.value != null) return n.updateChild(t, e.value);
  {
    let r = null;
    return (
      e.children.inorderTraversal((i, s) => {
        i === ".priority"
          ? (S(s.value !== null, "Priority writes must always be leaf nodes"),
            (r = s.value))
          : (n = $m(ae(t, i), s, n));
      }),
      !n.getChild(t).isEmpty() &&
        r !== null &&
        (n = n.updateChild(ae(t, ".priority"), r)),
      n
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Lo(t, e) {
  return Jm(e, t);
}
function dC(t, e, n, r, i) {
  S(r > t.lastWriteId, "Stacking an older write on top of newer ones"),
    i === void 0 && (i = !0),
    t.allWrites.push({ path: e, snap: n, writeId: r, visible: i }),
    i && (t.visibleWrites = qr(t.visibleWrites, e, n)),
    (t.lastWriteId = r);
}
function fC(t, e) {
  for (let n = 0; n < t.allWrites.length; n++) {
    const r = t.allWrites[n];
    if (r.writeId === e) return r;
  }
  return null;
}
function hC(t, e) {
  const n = t.allWrites.findIndex((l) => l.writeId === e);
  S(n >= 0, "removeWrite called with nonexistent writeId.");
  const r = t.allWrites[n];
  t.allWrites.splice(n, 1);
  let i = r.visible,
    s = !1,
    o = t.allWrites.length - 1;
  for (; i && o >= 0; ) {
    const l = t.allWrites[o];
    l.visible &&
      (o >= n && pC(l, r.path) ? (i = !1) : tt(r.path, l.path) && (s = !0)),
      o--;
  }
  if (i) {
    if (s) return mC(t), !0;
    if (r.snap) t.visibleWrites = cf(t.visibleWrites, r.path);
    else {
      const l = r.children;
      Fe(l, (a) => {
        t.visibleWrites = cf(t.visibleWrites, ae(r.path, a));
      });
    }
    return !0;
  } else return !1;
}
function pC(t, e) {
  if (t.snap) return tt(t.path, e);
  for (const n in t.children)
    if (t.children.hasOwnProperty(n) && tt(ae(t.path, n), e)) return !0;
  return !1;
}
function mC(t) {
  (t.visibleWrites = Ym(t.allWrites, gC, j())),
    t.allWrites.length > 0
      ? (t.lastWriteId = t.allWrites[t.allWrites.length - 1].writeId)
      : (t.lastWriteId = -1);
}
function gC(t) {
  return t.visible;
}
function Ym(t, e, n) {
  let r = st.empty();
  for (let i = 0; i < t.length; ++i) {
    const s = t[i];
    if (e(s)) {
      const o = s.path;
      let l;
      if (s.snap)
        tt(n, o)
          ? ((l = Te(n, o)), (r = qr(r, l, s.snap)))
          : tt(o, n) && ((l = Te(o, n)), (r = qr(r, j(), s.snap.getChild(l))));
      else if (s.children) {
        if (tt(n, o)) (l = Te(n, o)), (r = uf(r, l, s.children));
        else if (tt(o, n))
          if (((l = Te(o, n)), F(l))) r = uf(r, j(), s.children);
          else {
            const a = dr(s.children, z(l));
            if (a) {
              const u = a.getChild(H(l));
              r = qr(r, j(), u);
            }
          }
      } else throw yr("WriteRecord should have .snap or .children");
    }
  }
  return r;
}
function qm(t, e, n, r, i) {
  if (!r && !i) {
    const s = On(t.visibleWrites, e);
    if (s != null) return s;
    {
      const o = Yt(t.visibleWrites, e);
      if (La(o)) return n;
      if (n == null && !Da(o, j())) return null;
      {
        const l = n || P.EMPTY_NODE;
        return pr(o, l);
      }
    }
  } else {
    const s = Yt(t.visibleWrites, e);
    if (!i && La(s)) return n;
    if (!i && n == null && !Da(s, j())) return null;
    {
      const o = function (u) {
          return (
            (u.visible || i) &&
            (!r || !~r.indexOf(u.writeId)) &&
            (tt(u.path, e) || tt(e, u.path))
          );
        },
        l = Ym(t.allWrites, o, e),
        a = n || P.EMPTY_NODE;
      return pr(l, a);
    }
  }
}
function _C(t, e, n) {
  let r = P.EMPTY_NODE;
  const i = On(t.visibleWrites, e);
  if (i)
    return (
      i.isLeafNode() ||
        i.forEachChild(te, (s, o) => {
          r = r.updateImmediateChild(s, o);
        }),
      r
    );
  if (n) {
    const s = Yt(t.visibleWrites, e);
    return (
      n.forEachChild(te, (o, l) => {
        const a = pr(Yt(s, new W(o)), l);
        r = r.updateImmediateChild(o, a);
      }),
      df(s).forEach((o) => {
        r = r.updateImmediateChild(o.name, o.node);
      }),
      r
    );
  } else {
    const s = Yt(t.visibleWrites, e);
    return (
      df(s).forEach((o) => {
        r = r.updateImmediateChild(o.name, o.node);
      }),
      r
    );
  }
}
function vC(t, e, n, r, i) {
  S(r || i, "Either existingEventSnap or existingServerSnap must exist");
  const s = ae(e, n);
  if (Da(t.visibleWrites, s)) return null;
  {
    const o = Yt(t.visibleWrites, s);
    return La(o) ? i.getChild(n) : pr(o, i.getChild(n));
  }
}
function yC(t, e, n, r) {
  const i = ae(e, n),
    s = On(t.visibleWrites, i);
  if (s != null) return s;
  if (r.isCompleteForChild(n)) {
    const o = Yt(t.visibleWrites, i);
    return pr(o, r.getNode().getImmediateChild(n));
  } else return null;
}
function wC(t, e) {
  return On(t.visibleWrites, e);
}
function EC(t, e, n, r, i, s, o) {
  let l;
  const a = Yt(t.visibleWrites, e),
    u = On(a, j());
  if (u != null) l = u;
  else if (n != null) l = pr(a, n);
  else return [];
  if (((l = l.withIndex(o)), !l.isEmpty() && !l.isLeafNode())) {
    const d = [],
      c = o.getCompare(),
      f = s ? l.getReverseIteratorFrom(r, o) : l.getIteratorFrom(r, o);
    let g = f.getNext();
    for (; g && d.length < i; ) c(g, r) !== 0 && d.push(g), (g = f.getNext());
    return d;
  } else return [];
}
function CC() {
  return { visibleWrites: st.empty(), allWrites: [], lastWriteId: -1 };
}
function lo(t, e, n, r) {
  return qm(t.writeTree, t.treePath, e, n, r);
}
function qu(t, e) {
  return _C(t.writeTree, t.treePath, e);
}
function ff(t, e, n, r) {
  return vC(t.writeTree, t.treePath, e, n, r);
}
function ao(t, e) {
  return wC(t.writeTree, ae(t.treePath, e));
}
function SC(t, e, n, r, i, s) {
  return EC(t.writeTree, t.treePath, e, n, r, i, s);
}
function Xu(t, e, n) {
  return yC(t.writeTree, t.treePath, e, n);
}
function Xm(t, e) {
  return Jm(ae(t.treePath, e), t.writeTree);
}
function Jm(t, e) {
  return { treePath: t, writeTree: e };
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class IC {
  constructor() {
    this.changeMap = new Map();
  }
  trackChildChange(e) {
    const n = e.type,
      r = e.childName;
    S(
      n === "child_added" || n === "child_changed" || n === "child_removed",
      "Only child changes supported for tracking"
    ),
      S(r !== ".priority", "Only non-priority child changes can be tracked.");
    const i = this.changeMap.get(r);
    if (i) {
      const s = i.type;
      if (n === "child_added" && s === "child_removed")
        this.changeMap.set(r, Ci(r, e.snapshotNode, i.snapshotNode));
      else if (n === "child_removed" && s === "child_added")
        this.changeMap.delete(r);
      else if (n === "child_removed" && s === "child_changed")
        this.changeMap.set(r, Ei(r, i.oldSnap));
      else if (n === "child_changed" && s === "child_added")
        this.changeMap.set(r, hr(r, e.snapshotNode));
      else if (n === "child_changed" && s === "child_changed")
        this.changeMap.set(r, Ci(r, e.snapshotNode, i.oldSnap));
      else
        throw yr(
          "Illegal combination of changes: " + e + " occurred after " + i
        );
    } else this.changeMap.set(r, e);
  }
  getChanges() {
    return Array.from(this.changeMap.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class xC {
  getCompleteChild(e) {
    return null;
  }
  getChildAfterChild(e, n, r) {
    return null;
  }
}
const Zm = new xC();
class Ju {
  constructor(e, n, r = null) {
    (this.writes_ = e),
      (this.viewCache_ = n),
      (this.optCompleteServerCache_ = r);
  }
  getCompleteChild(e) {
    const n = this.viewCache_.eventCache;
    if (n.isCompleteForChild(e)) return n.getNode().getImmediateChild(e);
    {
      const r =
        this.optCompleteServerCache_ != null
          ? new en(this.optCompleteServerCache_, !0, !1)
          : this.viewCache_.serverCache;
      return Xu(this.writes_, e, r);
    }
  }
  getChildAfterChild(e, n, r) {
    const i =
        this.optCompleteServerCache_ != null
          ? this.optCompleteServerCache_
          : kn(this.viewCache_),
      s = SC(this.writes_, i, n, 1, r, e);
    return s.length === 0 ? null : s[0];
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function TC(t) {
  return { filter: t };
}
function kC(t, e) {
  S(
    e.eventCache.getNode().isIndexed(t.filter.getIndex()),
    "Event snap not indexed"
  ),
    S(
      e.serverCache.getNode().isIndexed(t.filter.getIndex()),
      "Server snap not indexed"
    );
}
function NC(t, e, n, r, i) {
  const s = new IC();
  let o, l;
  if (n.type === nt.OVERWRITE) {
    const u = n;
    u.source.fromUser
      ? (o = Ma(t, e, u.path, u.snap, r, i, s))
      : (S(u.source.fromServer, "Unknown source."),
        (l = u.source.tagged || (e.serverCache.isFiltered() && !F(u.path))),
        (o = uo(t, e, u.path, u.snap, r, i, l, s)));
  } else if (n.type === nt.MERGE) {
    const u = n;
    u.source.fromUser
      ? (o = RC(t, e, u.path, u.children, r, i, s))
      : (S(u.source.fromServer, "Unknown source."),
        (l = u.source.tagged || e.serverCache.isFiltered()),
        (o = Fa(t, e, u.path, u.children, r, i, l, s)));
  } else if (n.type === nt.ACK_USER_WRITE) {
    const u = n;
    u.revert
      ? (o = DC(t, e, u.path, r, i, s))
      : (o = PC(t, e, u.path, u.affectedTree, r, i, s));
  } else if (n.type === nt.LISTEN_COMPLETE) o = OC(t, e, n.path, r, s);
  else throw yr("Unknown operation type: " + n.type);
  const a = s.getChanges();
  return AC(e, o, a), { viewCache: o, changes: a };
}
function AC(t, e, n) {
  const r = e.eventCache;
  if (r.isFullyInitialized()) {
    const i = r.getNode().isLeafNode() || r.getNode().isEmpty(),
      s = oo(t);
    (n.length > 0 ||
      !t.eventCache.isFullyInitialized() ||
      (i && !r.getNode().equals(s)) ||
      !r.getNode().getPriority().equals(s.getPriority())) &&
      n.push(Hm(oo(e)));
  }
}
function eg(t, e, n, r, i, s) {
  const o = e.eventCache;
  if (ao(r, n) != null) return e;
  {
    let l, a;
    if (F(n))
      if (
        (S(
          e.serverCache.isFullyInitialized(),
          "If change path is empty, we must have complete server data"
        ),
        e.serverCache.isFiltered())
      ) {
        const u = kn(e),
          d = u instanceof P ? u : P.EMPTY_NODE,
          c = qu(r, d);
        l = t.filter.updateFullNode(e.eventCache.getNode(), c, s);
      } else {
        const u = lo(r, kn(e));
        l = t.filter.updateFullNode(e.eventCache.getNode(), u, s);
      }
    else {
      const u = z(n);
      if (u === ".priority") {
        S(Zt(n) === 1, "Can't have a priority with additional path components");
        const d = o.getNode();
        a = e.serverCache.getNode();
        const c = ff(r, n, d, a);
        c != null ? (l = t.filter.updatePriority(d, c)) : (l = o.getNode());
      } else {
        const d = H(n);
        let c;
        if (o.isCompleteForChild(u)) {
          a = e.serverCache.getNode();
          const f = ff(r, n, o.getNode(), a);
          f != null
            ? (c = o.getNode().getImmediateChild(u).updateChild(d, f))
            : (c = o.getNode().getImmediateChild(u));
        } else c = Xu(r, u, e.serverCache);
        c != null
          ? (l = t.filter.updateChild(o.getNode(), u, c, d, i, s))
          : (l = o.getNode());
      }
    }
    return Yr(e, l, o.isFullyInitialized() || F(n), t.filter.filtersNodes());
  }
}
function uo(t, e, n, r, i, s, o, l) {
  const a = e.serverCache;
  let u;
  const d = o ? t.filter : t.filter.getIndexedFilter();
  if (F(n)) u = d.updateFullNode(a.getNode(), r, null);
  else if (d.filtersNodes() && !a.isFiltered()) {
    const g = a.getNode().updateChild(n, r);
    u = d.updateFullNode(a.getNode(), g, null);
  } else {
    const g = z(n);
    if (!a.isCompleteForPath(n) && Zt(n) > 1) return e;
    const _ = H(n),
      C = a.getNode().getImmediateChild(g).updateChild(_, r);
    g === ".priority"
      ? (u = d.updatePriority(a.getNode(), C))
      : (u = d.updateChild(a.getNode(), g, C, _, Zm, null));
  }
  const c = Qm(e, u, a.isFullyInitialized() || F(n), d.filtersNodes()),
    f = new Ju(i, c, s);
  return eg(t, c, n, i, f, l);
}
function Ma(t, e, n, r, i, s, o) {
  const l = e.eventCache;
  let a, u;
  const d = new Ju(i, e, s);
  if (F(n))
    (u = t.filter.updateFullNode(e.eventCache.getNode(), r, o)),
      (a = Yr(e, u, !0, t.filter.filtersNodes()));
  else {
    const c = z(n);
    if (c === ".priority")
      (u = t.filter.updatePriority(e.eventCache.getNode(), r)),
        (a = Yr(e, u, l.isFullyInitialized(), l.isFiltered()));
    else {
      const f = H(n),
        g = l.getNode().getImmediateChild(c);
      let _;
      if (F(f)) _ = r;
      else {
        const y = d.getCompleteChild(c);
        y != null
          ? Lm(f) === ".priority" && y.getChild(Fm(f)).isEmpty()
            ? (_ = y)
            : (_ = y.updateChild(f, r))
          : (_ = P.EMPTY_NODE);
      }
      if (g.equals(_)) a = e;
      else {
        const y = t.filter.updateChild(l.getNode(), c, _, f, d, o);
        a = Yr(e, y, l.isFullyInitialized(), t.filter.filtersNodes());
      }
    }
  }
  return a;
}
function hf(t, e) {
  return t.eventCache.isCompleteForChild(e);
}
function RC(t, e, n, r, i, s, o) {
  let l = e;
  return (
    r.foreach((a, u) => {
      const d = ae(n, a);
      hf(e, z(d)) && (l = Ma(t, l, d, u, i, s, o));
    }),
    r.foreach((a, u) => {
      const d = ae(n, a);
      hf(e, z(d)) || (l = Ma(t, l, d, u, i, s, o));
    }),
    l
  );
}
function pf(t, e, n) {
  return (
    n.foreach((r, i) => {
      e = e.updateChild(r, i);
    }),
    e
  );
}
function Fa(t, e, n, r, i, s, o, l) {
  if (e.serverCache.getNode().isEmpty() && !e.serverCache.isFullyInitialized())
    return e;
  let a = e,
    u;
  F(n) ? (u = r) : (u = new $(null).setTree(n, r));
  const d = e.serverCache.getNode();
  return (
    u.children.inorderTraversal((c, f) => {
      if (d.hasChild(c)) {
        const g = e.serverCache.getNode().getImmediateChild(c),
          _ = pf(t, g, f);
        a = uo(t, a, new W(c), _, i, s, o, l);
      }
    }),
    u.children.inorderTraversal((c, f) => {
      const g = !e.serverCache.isCompleteForChild(c) && f.value === null;
      if (!d.hasChild(c) && !g) {
        const _ = e.serverCache.getNode().getImmediateChild(c),
          y = pf(t, _, f);
        a = uo(t, a, new W(c), y, i, s, o, l);
      }
    }),
    a
  );
}
function PC(t, e, n, r, i, s, o) {
  if (ao(i, n) != null) return e;
  const l = e.serverCache.isFiltered(),
    a = e.serverCache;
  if (r.value != null) {
    if ((F(n) && a.isFullyInitialized()) || a.isCompleteForPath(n))
      return uo(t, e, n, a.getNode().getChild(n), i, s, l, o);
    if (F(n)) {
      let u = new $(null);
      return (
        a.getNode().forEachChild(rr, (d, c) => {
          u = u.set(new W(d), c);
        }),
        Fa(t, e, n, u, i, s, l, o)
      );
    } else return e;
  } else {
    let u = new $(null);
    return (
      r.foreach((d, c) => {
        const f = ae(n, d);
        a.isCompleteForPath(f) && (u = u.set(d, a.getNode().getChild(f)));
      }),
      Fa(t, e, n, u, i, s, l, o)
    );
  }
}
function OC(t, e, n, r, i) {
  const s = e.serverCache,
    o = Qm(e, s.getNode(), s.isFullyInitialized() || F(n), s.isFiltered());
  return eg(t, o, n, r, Zm, i);
}
function DC(t, e, n, r, i, s) {
  let o;
  if (ao(r, n) != null) return e;
  {
    const l = new Ju(r, e, i),
      a = e.eventCache.getNode();
    let u;
    if (F(n) || z(n) === ".priority") {
      let d;
      if (e.serverCache.isFullyInitialized()) d = lo(r, kn(e));
      else {
        const c = e.serverCache.getNode();
        S(c instanceof P, "serverChildren would be complete if leaf node"),
          (d = qu(r, c));
      }
      (d = d), (u = t.filter.updateFullNode(a, d, s));
    } else {
      const d = z(n);
      let c = Xu(r, d, e.serverCache);
      c == null &&
        e.serverCache.isCompleteForChild(d) &&
        (c = a.getImmediateChild(d)),
        c != null
          ? (u = t.filter.updateChild(a, d, c, H(n), l, s))
          : e.eventCache.getNode().hasChild(d)
          ? (u = t.filter.updateChild(a, d, P.EMPTY_NODE, H(n), l, s))
          : (u = a),
        u.isEmpty() &&
          e.serverCache.isFullyInitialized() &&
          ((o = lo(r, kn(e))),
          o.isLeafNode() && (u = t.filter.updateFullNode(u, o, s)));
    }
    return (
      (o = e.serverCache.isFullyInitialized() || ao(r, j()) != null),
      Yr(e, u, o, t.filter.filtersNodes())
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class LC {
  constructor(e, n) {
    (this.query_ = e), (this.eventRegistrations_ = []);
    const r = this.query_._queryParams,
      i = new Ku(r.getIndex()),
      s = ZE(r);
    this.processor_ = TC(s);
    const o = n.serverCache,
      l = n.eventCache,
      a = i.updateFullNode(P.EMPTY_NODE, o.getNode(), null),
      u = s.updateFullNode(P.EMPTY_NODE, l.getNode(), null),
      d = new en(a, o.isFullyInitialized(), i.filtersNodes()),
      c = new en(u, l.isFullyInitialized(), s.filtersNodes());
    (this.viewCache_ = Do(c, d)), (this.eventGenerator_ = new oC(this.query_));
  }
  get query() {
    return this.query_;
  }
}
function MC(t) {
  return t.viewCache_.serverCache.getNode();
}
function FC(t) {
  return oo(t.viewCache_);
}
function bC(t, e) {
  const n = kn(t.viewCache_);
  return n &&
    (t.query._queryParams.loadsAllData() ||
      (!F(e) && !n.getImmediateChild(z(e)).isEmpty()))
    ? n.getChild(e)
    : null;
}
function mf(t) {
  return t.eventRegistrations_.length === 0;
}
function zC(t, e) {
  t.eventRegistrations_.push(e);
}
function gf(t, e, n) {
  const r = [];
  if (n) {
    S(e == null, "A cancel should cancel all event registrations.");
    const i = t.query._path;
    t.eventRegistrations_.forEach((s) => {
      const o = s.createCancelEvent(n, i);
      o && r.push(o);
    });
  }
  if (e) {
    let i = [];
    for (let s = 0; s < t.eventRegistrations_.length; ++s) {
      const o = t.eventRegistrations_[s];
      if (!o.matches(e)) i.push(o);
      else if (e.hasAnyCallback()) {
        i = i.concat(t.eventRegistrations_.slice(s + 1));
        break;
      }
    }
    t.eventRegistrations_ = i;
  } else t.eventRegistrations_ = [];
  return r;
}
function _f(t, e, n, r) {
  e.type === nt.MERGE &&
    e.source.queryId !== null &&
    (S(
      kn(t.viewCache_),
      "We should always have a full cache before handling merges"
    ),
    S(
      oo(t.viewCache_),
      "Missing event cache, even though we have a server cache"
    ));
  const i = t.viewCache_,
    s = NC(t.processor_, i, e, n, r);
  return (
    kC(t.processor_, s.viewCache),
    S(
      s.viewCache.serverCache.isFullyInitialized() ||
        !i.serverCache.isFullyInitialized(),
      "Once a server snap is complete, it should never go back"
    ),
    (t.viewCache_ = s.viewCache),
    tg(t, s.changes, s.viewCache.eventCache.getNode(), null)
  );
}
function UC(t, e) {
  const n = t.viewCache_.eventCache,
    r = [];
  return (
    n.getNode().isLeafNode() ||
      n.getNode().forEachChild(te, (s, o) => {
        r.push(hr(s, o));
      }),
    n.isFullyInitialized() && r.push(Hm(n.getNode())),
    tg(t, r, n.getNode(), e)
  );
}
function tg(t, e, n, r) {
  const i = r ? [r] : t.eventRegistrations_;
  return lC(t.eventGenerator_, e, n, i);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let co;
class ng {
  constructor() {
    this.views = new Map();
  }
}
function jC(t) {
  S(!co, "__referenceConstructor has already been defined"), (co = t);
}
function BC() {
  return S(co, "Reference.ts has not been loaded"), co;
}
function WC(t) {
  return t.views.size === 0;
}
function Zu(t, e, n, r) {
  const i = e.source.queryId;
  if (i !== null) {
    const s = t.views.get(i);
    return (
      S(s != null, "SyncTree gave us an op for an invalid query."),
      _f(s, e, n, r)
    );
  } else {
    let s = [];
    for (const o of t.views.values()) s = s.concat(_f(o, e, n, r));
    return s;
  }
}
function rg(t, e, n, r, i) {
  const s = e._queryIdentifier,
    o = t.views.get(s);
  if (!o) {
    let l = lo(n, i ? r : null),
      a = !1;
    l
      ? (a = !0)
      : r instanceof P
      ? ((l = qu(n, r)), (a = !1))
      : ((l = P.EMPTY_NODE), (a = !1));
    const u = Do(new en(l, a, !1), new en(r, i, !1));
    return new LC(e, u);
  }
  return o;
}
function VC(t, e, n, r, i, s) {
  const o = rg(t, e, r, i, s);
  return (
    t.views.has(e._queryIdentifier) || t.views.set(e._queryIdentifier, o),
    zC(o, n),
    UC(o, n)
  );
}
function HC(t, e, n, r) {
  const i = e._queryIdentifier,
    s = [];
  let o = [];
  const l = tn(t);
  if (i === "default")
    for (const [a, u] of t.views.entries())
      (o = o.concat(gf(u, n, r))),
        mf(u) &&
          (t.views.delete(a),
          u.query._queryParams.loadsAllData() || s.push(u.query));
  else {
    const a = t.views.get(i);
    a &&
      ((o = o.concat(gf(a, n, r))),
      mf(a) &&
        (t.views.delete(i),
        a.query._queryParams.loadsAllData() || s.push(a.query)));
  }
  return (
    l && !tn(t) && s.push(new (BC())(e._repo, e._path)),
    { removed: s, events: o }
  );
}
function ig(t) {
  const e = [];
  for (const n of t.views.values())
    n.query._queryParams.loadsAllData() || e.push(n);
  return e;
}
function qt(t, e) {
  let n = null;
  for (const r of t.views.values()) n = n || bC(r, e);
  return n;
}
function sg(t, e) {
  if (e._queryParams.loadsAllData()) return Mo(t);
  {
    const r = e._queryIdentifier;
    return t.views.get(r);
  }
}
function og(t, e) {
  return sg(t, e) != null;
}
function tn(t) {
  return Mo(t) != null;
}
function Mo(t) {
  for (const e of t.views.values())
    if (e.query._queryParams.loadsAllData()) return e;
  return null;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let fo;
function GC(t) {
  S(!fo, "__referenceConstructor has already been defined"), (fo = t);
}
function KC() {
  return S(fo, "Reference.ts has not been loaded"), fo;
}
let QC = 1;
class vf {
  constructor(e) {
    (this.listenProvider_ = e),
      (this.syncPointTree_ = new $(null)),
      (this.pendingWriteTree_ = CC()),
      (this.tagToQueryMap = new Map()),
      (this.queryToTagMap = new Map());
  }
}
function $C(t, e, n, r, i) {
  return (
    dC(t.pendingWriteTree_, e, n, r, i), i ? Bi(t, new Tn(Km(), e, n)) : []
  );
}
function $n(t, e, n = !1) {
  const r = fC(t.pendingWriteTree_, e);
  if (hC(t.pendingWriteTree_, e)) {
    let s = new $(null);
    return (
      r.snap != null
        ? (s = s.set(j(), !0))
        : Fe(r.children, (o) => {
            s = s.set(new W(o), !0);
          }),
      Bi(t, new so(r.path, s, n))
    );
  } else return [];
}
function ji(t, e, n) {
  return Bi(t, new Tn($u(), e, n));
}
function YC(t, e, n) {
  const r = $.fromObject(n);
  return Bi(t, new xi($u(), e, r));
}
function qC(t, e) {
  return Bi(t, new Ii($u(), e));
}
function XC(t, e, n) {
  const r = ec(t, n);
  if (r) {
    const i = tc(r),
      s = i.path,
      o = i.queryId,
      l = Te(s, e),
      a = new Ii(Yu(o), l);
    return nc(t, s, a);
  } else return [];
}
function lg(t, e, n, r, i = !1) {
  const s = e._path,
    o = t.syncPointTree_.get(s);
  let l = [];
  if (o && (e._queryIdentifier === "default" || og(o, e))) {
    const a = HC(o, e, n, r);
    WC(o) && (t.syncPointTree_ = t.syncPointTree_.remove(s));
    const u = a.removed;
    if (((l = a.events), !i)) {
      const d = u.findIndex((f) => f._queryParams.loadsAllData()) !== -1,
        c = t.syncPointTree_.findOnPath(s, (f, g) => tn(g));
      if (d && !c) {
        const f = t.syncPointTree_.subtree(s);
        if (!f.isEmpty()) {
          const g = t1(f);
          for (let _ = 0; _ < g.length; ++_) {
            const y = g[_],
              C = y.query,
              m = fg(t, y);
            t.listenProvider_.startListening(
              Xr(C),
              Ti(t, C),
              m.hashFn,
              m.onComplete
            );
          }
        }
      }
      !c &&
        u.length > 0 &&
        !r &&
        (d
          ? t.listenProvider_.stopListening(Xr(e), null)
          : u.forEach((f) => {
              const g = t.queryToTagMap.get(Fo(f));
              t.listenProvider_.stopListening(Xr(f), g);
            }));
    }
    n1(t, u);
  }
  return l;
}
function ag(t, e, n, r) {
  const i = ec(t, r);
  if (i != null) {
    const s = tc(i),
      o = s.path,
      l = s.queryId,
      a = Te(o, e),
      u = new Tn(Yu(l), a, n);
    return nc(t, o, u);
  } else return [];
}
function JC(t, e, n, r) {
  const i = ec(t, r);
  if (i) {
    const s = tc(i),
      o = s.path,
      l = s.queryId,
      a = Te(o, e),
      u = $.fromObject(n),
      d = new xi(Yu(l), a, u);
    return nc(t, o, d);
  } else return [];
}
function ZC(t, e, n, r = !1) {
  const i = e._path;
  let s = null,
    o = !1;
  t.syncPointTree_.foreachOnPath(i, (f, g) => {
    const _ = Te(f, i);
    (s = s || qt(g, _)), (o = o || tn(g));
  });
  let l = t.syncPointTree_.get(i);
  l
    ? ((o = o || tn(l)), (s = s || qt(l, j())))
    : ((l = new ng()), (t.syncPointTree_ = t.syncPointTree_.set(i, l)));
  let a;
  s != null
    ? (a = !0)
    : ((a = !1),
      (s = P.EMPTY_NODE),
      t.syncPointTree_.subtree(i).foreachChild((g, _) => {
        const y = qt(_, j());
        y && (s = s.updateImmediateChild(g, y));
      }));
  const u = og(l, e);
  if (!u && !e._queryParams.loadsAllData()) {
    const f = Fo(e);
    S(!t.queryToTagMap.has(f), "View does not exist, but we have a tag");
    const g = r1();
    t.queryToTagMap.set(f, g), t.tagToQueryMap.set(g, f);
  }
  const d = Lo(t.pendingWriteTree_, i);
  let c = VC(l, e, n, d, s, a);
  if (!u && !o && !r) {
    const f = sg(l, e);
    c = c.concat(i1(t, e, f));
  }
  return c;
}
function ug(t, e, n) {
  const i = t.pendingWriteTree_,
    s = t.syncPointTree_.findOnPath(e, (o, l) => {
      const a = Te(o, e),
        u = qt(l, a);
      if (u) return u;
    });
  return qm(i, e, s, n, !0);
}
function e1(t, e) {
  const n = e._path;
  let r = null;
  t.syncPointTree_.foreachOnPath(n, (u, d) => {
    const c = Te(u, n);
    r = r || qt(d, c);
  });
  let i = t.syncPointTree_.get(n);
  i
    ? (r = r || qt(i, j()))
    : ((i = new ng()), (t.syncPointTree_ = t.syncPointTree_.set(n, i)));
  const s = r != null,
    o = s ? new en(r, !0, !1) : null,
    l = Lo(t.pendingWriteTree_, e._path),
    a = rg(i, e, l, s ? o.getNode() : P.EMPTY_NODE, s);
  return FC(a);
}
function Bi(t, e) {
  return cg(e, t.syncPointTree_, null, Lo(t.pendingWriteTree_, j()));
}
function cg(t, e, n, r) {
  if (F(t.path)) return dg(t, e, n, r);
  {
    const i = e.get(j());
    n == null && i != null && (n = qt(i, j()));
    let s = [];
    const o = z(t.path),
      l = t.operationForChild(o),
      a = e.children.get(o);
    if (a && l) {
      const u = n ? n.getImmediateChild(o) : null,
        d = Xm(r, o);
      s = s.concat(cg(l, a, u, d));
    }
    return i && (s = s.concat(Zu(i, t, r, n))), s;
  }
}
function dg(t, e, n, r) {
  const i = e.get(j());
  n == null && i != null && (n = qt(i, j()));
  let s = [];
  return (
    e.children.inorderTraversal((o, l) => {
      const a = n ? n.getImmediateChild(o) : null,
        u = Xm(r, o),
        d = t.operationForChild(o);
      d && (s = s.concat(dg(d, l, a, u)));
    }),
    i && (s = s.concat(Zu(i, t, r, n))),
    s
  );
}
function fg(t, e) {
  const n = e.query,
    r = Ti(t, n);
  return {
    hashFn: () => (MC(e) || P.EMPTY_NODE).hash(),
    onComplete: (i) => {
      if (i === "ok") return r ? XC(t, n._path, r) : qC(t, n._path);
      {
        const s = Jw(i, n);
        return lg(t, n, null, s);
      }
    },
  };
}
function Ti(t, e) {
  const n = Fo(e);
  return t.queryToTagMap.get(n);
}
function Fo(t) {
  return t._path.toString() + "$" + t._queryIdentifier;
}
function ec(t, e) {
  return t.tagToQueryMap.get(e);
}
function tc(t) {
  const e = t.indexOf("$");
  return (
    S(e !== -1 && e < t.length - 1, "Bad queryKey."),
    { queryId: t.substr(e + 1), path: new W(t.substr(0, e)) }
  );
}
function nc(t, e, n) {
  const r = t.syncPointTree_.get(e);
  S(r, "Missing sync point for query tag that we're tracking");
  const i = Lo(t.pendingWriteTree_, e);
  return Zu(r, n, i, null);
}
function t1(t) {
  return t.fold((e, n, r) => {
    if (n && tn(n)) return [Mo(n)];
    {
      let i = [];
      return (
        n && (i = ig(n)),
        Fe(r, (s, o) => {
          i = i.concat(o);
        }),
        i
      );
    }
  });
}
function Xr(t) {
  return t._queryParams.loadsAllData() && !t._queryParams.isDefault()
    ? new (KC())(t._repo, t._path)
    : t;
}
function n1(t, e) {
  for (let n = 0; n < e.length; ++n) {
    const r = e[n];
    if (!r._queryParams.loadsAllData()) {
      const i = Fo(r),
        s = t.queryToTagMap.get(i);
      t.queryToTagMap.delete(i), t.tagToQueryMap.delete(s);
    }
  }
}
function r1() {
  return QC++;
}
function i1(t, e, n) {
  const r = e._path,
    i = Ti(t, e),
    s = fg(t, n),
    o = t.listenProvider_.startListening(Xr(e), i, s.hashFn, s.onComplete),
    l = t.syncPointTree_.subtree(r);
  if (i) S(!tn(l.value), "If we're adding a query, it shouldn't be shadowed");
  else {
    const a = l.fold((u, d, c) => {
      if (!F(u) && d && tn(d)) return [Mo(d).query];
      {
        let f = [];
        return (
          d && (f = f.concat(ig(d).map((g) => g.query))),
          Fe(c, (g, _) => {
            f = f.concat(_);
          }),
          f
        );
      }
    });
    for (let u = 0; u < a.length; ++u) {
      const d = a[u];
      t.listenProvider_.stopListening(Xr(d), Ti(t, d));
    }
  }
  return o;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rc {
  constructor(e) {
    this.node_ = e;
  }
  getImmediateChild(e) {
    const n = this.node_.getImmediateChild(e);
    return new rc(n);
  }
  node() {
    return this.node_;
  }
}
class ic {
  constructor(e, n) {
    (this.syncTree_ = e), (this.path_ = n);
  }
  getImmediateChild(e) {
    const n = ae(this.path_, e);
    return new ic(this.syncTree_, n);
  }
  node() {
    return ug(this.syncTree_, this.path_);
  }
}
const s1 = function (t) {
    return (
      (t = t || {}), (t.timestamp = t.timestamp || new Date().getTime()), t
    );
  },
  yf = function (t, e, n) {
    if (!t || typeof t != "object") return t;
    if (
      (S(".sv" in t, "Unexpected leaf node or priority contents"),
      typeof t[".sv"] == "string")
    )
      return o1(t[".sv"], e, n);
    if (typeof t[".sv"] == "object") return l1(t[".sv"], e);
    S(!1, "Unexpected server value: " + JSON.stringify(t, null, 2));
  },
  o1 = function (t, e, n) {
    switch (t) {
      case "timestamp":
        return n.timestamp;
      default:
        S(!1, "Unexpected server value: " + t);
    }
  },
  l1 = function (t, e, n) {
    t.hasOwnProperty("increment") ||
      S(!1, "Unexpected server value: " + JSON.stringify(t, null, 2));
    const r = t.increment;
    typeof r != "number" && S(!1, "Unexpected increment value: " + r);
    const i = e.node();
    if (
      (S(
        i !== null && typeof i < "u",
        "Expected ChildrenNode.EMPTY_NODE for nulls"
      ),
      !i.isLeafNode())
    )
      return r;
    const o = i.getValue();
    return typeof o != "number" ? r : o + r;
  },
  a1 = function (t, e, n, r) {
    return sc(e, new ic(n, t), r);
  },
  u1 = function (t, e, n) {
    return sc(t, new rc(e), n);
  };
function sc(t, e, n) {
  const r = t.getPriority().val(),
    i = yf(r, e.getImmediateChild(".priority"), n);
  let s;
  if (t.isLeafNode()) {
    const o = t,
      l = yf(o.getValue(), e, n);
    return l !== o.getValue() || i !== o.getPriority().val()
      ? new de(l, _e(i))
      : t;
  } else {
    const o = t;
    return (
      (s = o),
      i !== o.getPriority().val() && (s = s.updatePriority(new de(i))),
      o.forEachChild(te, (l, a) => {
        const u = sc(a, e.getImmediateChild(l), n);
        u !== a && (s = s.updateImmediateChild(l, u));
      }),
      s
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oc {
  constructor(e = "", n = null, r = { children: {}, childCount: 0 }) {
    (this.name = e), (this.parent = n), (this.node = r);
  }
}
function lc(t, e) {
  let n = e instanceof W ? e : new W(e),
    r = t,
    i = z(n);
  for (; i !== null; ) {
    const s = dr(r.node.children, i) || { children: {}, childCount: 0 };
    (r = new oc(i, r, s)), (n = H(n)), (i = z(n));
  }
  return r;
}
function Er(t) {
  return t.node.value;
}
function hg(t, e) {
  (t.node.value = e), ba(t);
}
function pg(t) {
  return t.node.childCount > 0;
}
function c1(t) {
  return Er(t) === void 0 && !pg(t);
}
function bo(t, e) {
  Fe(t.node.children, (n, r) => {
    e(new oc(n, t, r));
  });
}
function mg(t, e, n, r) {
  n && !r && e(t),
    bo(t, (i) => {
      mg(i, e, !0, r);
    }),
    n && r && e(t);
}
function d1(t, e, n) {
  let r = t.parent;
  for (; r !== null; ) {
    if (e(r)) return !0;
    r = r.parent;
  }
  return !1;
}
function Wi(t) {
  return new W(t.parent === null ? t.name : Wi(t.parent) + "/" + t.name);
}
function ba(t) {
  t.parent !== null && f1(t.parent, t.name, t);
}
function f1(t, e, n) {
  const r = c1(n),
    i = Nt(t.node.children, e);
  r && i
    ? (delete t.node.children[e], t.node.childCount--, ba(t))
    : !r && !i && ((t.node.children[e] = n.node), t.node.childCount++, ba(t));
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const h1 = /[\[\].#$\/\u0000-\u001F\u007F]/,
  p1 = /[\[\].#$\u0000-\u001F\u007F]/,
  Il = 10 * 1024 * 1024,
  gg = function (t) {
    return typeof t == "string" && t.length !== 0 && !h1.test(t);
  },
  _g = function (t) {
    return typeof t == "string" && t.length !== 0 && !p1.test(t);
  },
  m1 = function (t) {
    return t && (t = t.replace(/^\/*\.info(\/|$)/, "/")), _g(t);
  },
  vg = function (t, e, n) {
    const r = n instanceof W ? new PE(n, t) : n;
    if (e === void 0) throw new Error(t + "contains undefined " + hn(r));
    if (typeof e == "function")
      throw new Error(
        t + "contains a function " + hn(r) + " with contents = " + e.toString()
      );
    if (hm(e)) throw new Error(t + "contains " + e.toString() + " " + hn(r));
    if (typeof e == "string" && e.length > Il / 3 && Po(e) > Il)
      throw new Error(
        t +
          "contains a string greater than " +
          Il +
          " utf8 bytes " +
          hn(r) +
          " ('" +
          e.substring(0, 50) +
          "...')"
      );
    if (e && typeof e == "object") {
      let i = !1,
        s = !1;
      if (
        (Fe(e, (o, l) => {
          if (o === ".value") i = !0;
          else if (o !== ".priority" && o !== ".sv" && ((s = !0), !gg(o)))
            throw new Error(
              t +
                " contains an invalid key (" +
                o +
                ") " +
                hn(r) +
                `.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`
            );
          OE(r, o), vg(t, l, r), DE(r);
        }),
        i && s)
      )
        throw new Error(
          t +
            ' contains ".value" child ' +
            hn(r) +
            " in addition to actual children."
        );
    }
  },
  yg = function (t, e, n, r) {
    if (!_g(n))
      throw new Error(
        rm(t, e) +
          'was an invalid path = "' +
          n +
          `". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`
      );
  },
  g1 = function (t, e, n, r) {
    n && (n = n.replace(/^\/*\.info(\/|$)/, "/")), yg(t, e, n);
  },
  _1 = function (t, e) {
    const n = e.path.toString();
    if (
      typeof e.repoInfo.host != "string" ||
      e.repoInfo.host.length === 0 ||
      (!gg(e.repoInfo.namespace) &&
        e.repoInfo.host.split(":")[0] !== "localhost") ||
      (n.length !== 0 && !m1(n))
    )
      throw new Error(
        rm(t, "url") +
          `must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`
      );
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class v1 {
  constructor() {
    (this.eventLists_ = []), (this.recursionDepth_ = 0);
  }
}
function y1(t, e) {
  let n = null;
  for (let r = 0; r < e.length; r++) {
    const i = e[r],
      s = i.getPath();
    n !== null && !bm(s, n.path) && (t.eventLists_.push(n), (n = null)),
      n === null && (n = { events: [], path: s }),
      n.events.push(i);
  }
  n && t.eventLists_.push(n);
}
function on(t, e, n) {
  y1(t, n), w1(t, (r) => tt(r, e) || tt(e, r));
}
function w1(t, e) {
  t.recursionDepth_++;
  let n = !0;
  for (let r = 0; r < t.eventLists_.length; r++) {
    const i = t.eventLists_[r];
    if (i) {
      const s = i.path;
      e(s) ? (E1(t.eventLists_[r]), (t.eventLists_[r] = null)) : (n = !1);
    }
  }
  n && (t.eventLists_ = []), t.recursionDepth_--;
}
function E1(t) {
  for (let e = 0; e < t.events.length; e++) {
    const n = t.events[e];
    if (n !== null) {
      t.events[e] = null;
      const r = n.getEventRunner();
      Qr && Se("event: " + n.toString()), zi(r);
    }
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const C1 = "repo_interrupt",
  S1 = 25;
class I1 {
  constructor(e, n, r, i) {
    (this.repoInfo_ = e),
      (this.forceRestClient_ = n),
      (this.authTokenProvider_ = r),
      (this.appCheckProvider_ = i),
      (this.dataUpdateCount = 0),
      (this.statsListener_ = null),
      (this.eventQueue_ = new v1()),
      (this.nextWriteId_ = 1),
      (this.interceptServerDataCallback_ = null),
      (this.onDisconnect_ = io()),
      (this.transactionQueueTree_ = new oc()),
      (this.persistentConnection_ = null),
      (this.key = this.repoInfo_.toURLString());
  }
  toString() {
    return (
      (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host
    );
  }
}
function x1(t, e, n) {
  if (((t.stats_ = Wu(t.repoInfo_)), t.forceRestClient_ || nE()))
    (t.server_ = new ro(
      t.repoInfo_,
      (r, i, s, o) => {
        wf(t, r, i, s, o);
      },
      t.authTokenProvider_,
      t.appCheckProvider_
    )),
      setTimeout(() => Ef(t, !0), 0);
  else {
    if (typeof n < "u" && n !== null) {
      if (typeof n != "object")
        throw new Error(
          "Only objects are supported for option databaseAuthVariableOverride"
        );
      try {
        le(n);
      } catch (r) {
        throw new Error("Invalid authOverride provided: " + r);
      }
    }
    (t.persistentConnection_ = new wt(
      t.repoInfo_,
      e,
      (r, i, s, o) => {
        wf(t, r, i, s, o);
      },
      (r) => {
        Ef(t, r);
      },
      (r) => {
        k1(t, r);
      },
      t.authTokenProvider_,
      t.appCheckProvider_,
      n
    )),
      (t.server_ = t.persistentConnection_);
  }
  t.authTokenProvider_.addTokenChangeListener((r) => {
    t.server_.refreshAuthToken(r);
  }),
    t.appCheckProvider_.addTokenChangeListener((r) => {
      t.server_.refreshAppCheckToken(r.token);
    }),
    (t.statsReporter_ = lE(t.repoInfo_, () => new sC(t.stats_, t.server_))),
    (t.infoData_ = new eC()),
    (t.infoSyncTree_ = new vf({
      startListening: (r, i, s, o) => {
        let l = [];
        const a = t.infoData_.getNode(r._path);
        return (
          a.isEmpty() ||
            ((l = ji(t.infoSyncTree_, r._path, a)),
            setTimeout(() => {
              o("ok");
            }, 0)),
          l
        );
      },
      stopListening: () => {},
    })),
    ac(t, "connected", !1),
    (t.serverSyncTree_ = new vf({
      startListening: (r, i, s, o) => (
        t.server_.listen(r, s, i, (l, a) => {
          const u = o(l, a);
          on(t.eventQueue_, r._path, u);
        }),
        []
      ),
      stopListening: (r, i) => {
        t.server_.unlisten(r, i);
      },
    }));
}
function T1(t) {
  const n = t.infoData_.getNode(new W(".info/serverTimeOffset")).val() || 0;
  return new Date().getTime() + n;
}
function wg(t) {
  return s1({ timestamp: T1(t) });
}
function wf(t, e, n, r, i) {
  t.dataUpdateCount++;
  const s = new W(e);
  n = t.interceptServerDataCallback_ ? t.interceptServerDataCallback_(e, n) : n;
  let o = [];
  if (i)
    if (r) {
      const a = Xs(n, (u) => _e(u));
      o = JC(t.serverSyncTree_, s, a, i);
    } else {
      const a = _e(n);
      o = ag(t.serverSyncTree_, s, a, i);
    }
  else if (r) {
    const a = Xs(n, (u) => _e(u));
    o = YC(t.serverSyncTree_, s, a);
  } else {
    const a = _e(n);
    o = ji(t.serverSyncTree_, s, a);
  }
  let l = s;
  o.length > 0 && (l = dc(t, s)), on(t.eventQueue_, l, o);
}
function Ef(t, e) {
  ac(t, "connected", e), e === !1 && R1(t);
}
function k1(t, e) {
  Fe(e, (n, r) => {
    ac(t, n, r);
  });
}
function ac(t, e, n) {
  const r = new W("/.info/" + e),
    i = _e(n);
  t.infoData_.updateSnapshot(r, i);
  const s = ji(t.infoSyncTree_, r, i);
  on(t.eventQueue_, r, s);
}
function N1(t) {
  return t.nextWriteId_++;
}
function A1(t, e, n) {
  const r = e1(t.serverSyncTree_, e);
  return r != null
    ? Promise.resolve(r)
    : t.server_.get(e).then(
        (i) => {
          const s = _e(i).withIndex(e._queryParams.getIndex());
          ZC(t.serverSyncTree_, e, n, !0);
          let o;
          if (e._queryParams.loadsAllData())
            o = ji(t.serverSyncTree_, e._path, s);
          else {
            const l = Ti(t.serverSyncTree_, e);
            o = ag(t.serverSyncTree_, e._path, s, l);
          }
          return (
            on(t.eventQueue_, e._path, o),
            lg(t.serverSyncTree_, e, n, null, !0),
            s
          );
        },
        (i) => (
          uc(t, "get for query " + le(e) + " failed: " + i),
          Promise.reject(new Error(i))
        )
      );
}
function R1(t) {
  uc(t, "onDisconnectEvents");
  const e = wg(t),
    n = io();
  Oa(t.onDisconnect_, j(), (i, s) => {
    const o = a1(i, s, t.serverSyncTree_, e);
    Gm(n, i, o);
  });
  let r = [];
  Oa(n, j(), (i, s) => {
    r = r.concat(ji(t.serverSyncTree_, i, s));
    const o = L1(t, i);
    dc(t, o);
  }),
    (t.onDisconnect_ = io()),
    on(t.eventQueue_, j(), r);
}
function P1(t) {
  t.persistentConnection_ && t.persistentConnection_.interrupt(C1);
}
function uc(t, ...e) {
  let n = "";
  t.persistentConnection_ && (n = t.persistentConnection_.id + ":"),
    Se(n, ...e);
}
function Eg(t, e, n) {
  return ug(t.serverSyncTree_, e, n) || P.EMPTY_NODE;
}
function cc(t, e = t.transactionQueueTree_) {
  if ((e || zo(t, e), Er(e))) {
    const n = Sg(t, e);
    S(n.length > 0, "Sending zero length transaction queue"),
      n.every((i) => i.status === 0) && O1(t, Wi(e), n);
  } else
    pg(e) &&
      bo(e, (n) => {
        cc(t, n);
      });
}
function O1(t, e, n) {
  const r = n.map((u) => u.currentWriteId),
    i = Eg(t, e, r);
  let s = i;
  const o = i.hash();
  for (let u = 0; u < n.length; u++) {
    const d = n[u];
    S(
      d.status === 0,
      "tryToSendTransactionQueue_: items in queue should all be run."
    ),
      (d.status = 1),
      d.retryCount++;
    const c = Te(e, d.path);
    s = s.updateChild(c, d.currentOutputSnapshotRaw);
  }
  const l = s.val(!0),
    a = e;
  t.server_.put(
    a.toString(),
    l,
    (u) => {
      uc(t, "transaction put response", { path: a.toString(), status: u });
      let d = [];
      if (u === "ok") {
        const c = [];
        for (let f = 0; f < n.length; f++)
          (n[f].status = 2),
            (d = d.concat($n(t.serverSyncTree_, n[f].currentWriteId))),
            n[f].onComplete &&
              c.push(() =>
                n[f].onComplete(null, !0, n[f].currentOutputSnapshotResolved)
              ),
            n[f].unwatcher();
        zo(t, lc(t.transactionQueueTree_, e)),
          cc(t, t.transactionQueueTree_),
          on(t.eventQueue_, e, d);
        for (let f = 0; f < c.length; f++) zi(c[f]);
      } else {
        if (u === "datastale")
          for (let c = 0; c < n.length; c++)
            n[c].status === 3 ? (n[c].status = 4) : (n[c].status = 0);
        else {
          je("transaction at " + a.toString() + " failed: " + u);
          for (let c = 0; c < n.length; c++)
            (n[c].status = 4), (n[c].abortReason = u);
        }
        dc(t, e);
      }
    },
    o
  );
}
function dc(t, e) {
  const n = Cg(t, e),
    r = Wi(n),
    i = Sg(t, n);
  return D1(t, i, r), r;
}
function D1(t, e, n) {
  if (e.length === 0) return;
  const r = [];
  let i = [];
  const o = e.filter((l) => l.status === 0).map((l) => l.currentWriteId);
  for (let l = 0; l < e.length; l++) {
    const a = e[l],
      u = Te(n, a.path);
    let d = !1,
      c;
    if (
      (S(
        u !== null,
        "rerunTransactionsUnderNode_: relativePath should not be null."
      ),
      a.status === 4)
    )
      (d = !0),
        (c = a.abortReason),
        (i = i.concat($n(t.serverSyncTree_, a.currentWriteId, !0)));
    else if (a.status === 0)
      if (a.retryCount >= S1)
        (d = !0),
          (c = "maxretry"),
          (i = i.concat($n(t.serverSyncTree_, a.currentWriteId, !0)));
      else {
        const f = Eg(t, a.path, o);
        a.currentInputSnapshot = f;
        const g = e[l].update(f.val());
        if (g !== void 0) {
          vg("transaction failed: Data returned ", g, a.path);
          let _ = _e(g);
          (typeof g == "object" && g != null && Nt(g, ".priority")) ||
            (_ = _.updatePriority(f.getPriority()));
          const C = a.currentWriteId,
            m = wg(t),
            h = u1(_, f, m);
          (a.currentOutputSnapshotRaw = _),
            (a.currentOutputSnapshotResolved = h),
            (a.currentWriteId = N1(t)),
            o.splice(o.indexOf(C), 1),
            (i = i.concat(
              $C(t.serverSyncTree_, a.path, h, a.currentWriteId, a.applyLocally)
            )),
            (i = i.concat($n(t.serverSyncTree_, C, !0)));
        } else
          (d = !0),
            (c = "nodata"),
            (i = i.concat($n(t.serverSyncTree_, a.currentWriteId, !0)));
      }
    on(t.eventQueue_, n, i),
      (i = []),
      d &&
        ((e[l].status = 2),
        (function (f) {
          setTimeout(f, Math.floor(0));
        })(e[l].unwatcher),
        e[l].onComplete &&
          (c === "nodata"
            ? r.push(() => e[l].onComplete(null, !1, e[l].currentInputSnapshot))
            : r.push(() => e[l].onComplete(new Error(c), !1, null))));
  }
  zo(t, t.transactionQueueTree_);
  for (let l = 0; l < r.length; l++) zi(r[l]);
  cc(t, t.transactionQueueTree_);
}
function Cg(t, e) {
  let n,
    r = t.transactionQueueTree_;
  for (n = z(e); n !== null && Er(r) === void 0; )
    (r = lc(r, n)), (e = H(e)), (n = z(e));
  return r;
}
function Sg(t, e) {
  const n = [];
  return Ig(t, e, n), n.sort((r, i) => r.order - i.order), n;
}
function Ig(t, e, n) {
  const r = Er(e);
  if (r) for (let i = 0; i < r.length; i++) n.push(r[i]);
  bo(e, (i) => {
    Ig(t, i, n);
  });
}
function zo(t, e) {
  const n = Er(e);
  if (n) {
    let r = 0;
    for (let i = 0; i < n.length; i++)
      n[i].status !== 2 && ((n[r] = n[i]), r++);
    (n.length = r), hg(e, n.length > 0 ? n : void 0);
  }
  bo(e, (r) => {
    zo(t, r);
  });
}
function L1(t, e) {
  const n = Wi(Cg(t, e)),
    r = lc(t.transactionQueueTree_, e);
  return (
    d1(r, (i) => {
      xl(t, i);
    }),
    xl(t, r),
    mg(r, (i) => {
      xl(t, i);
    }),
    n
  );
}
function xl(t, e) {
  const n = Er(e);
  if (n) {
    const r = [];
    let i = [],
      s = -1;
    for (let o = 0; o < n.length; o++)
      n[o].status === 3 ||
        (n[o].status === 1
          ? (S(s === o - 1, "All SENT items should be at beginning of queue."),
            (s = o),
            (n[o].status = 3),
            (n[o].abortReason = "set"))
          : (S(n[o].status === 0, "Unexpected transaction status in abort"),
            n[o].unwatcher(),
            (i = i.concat($n(t.serverSyncTree_, n[o].currentWriteId, !0))),
            n[o].onComplete &&
              r.push(n[o].onComplete.bind(null, new Error("set"), !1, null))));
    s === -1 ? hg(e, void 0) : (n.length = s + 1), on(t.eventQueue_, Wi(e), i);
    for (let o = 0; o < r.length; o++) zi(r[o]);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function M1(t) {
  let e = "";
  const n = t.split("/");
  for (let r = 0; r < n.length; r++)
    if (n[r].length > 0) {
      let i = n[r];
      try {
        i = decodeURIComponent(i.replace(/\+/g, " "));
      } catch {}
      e += "/" + i;
    }
  return e;
}
function F1(t) {
  const e = {};
  t.charAt(0) === "?" && (t = t.substring(1));
  for (const n of t.split("&")) {
    if (n.length === 0) continue;
    const r = n.split("=");
    r.length === 2
      ? (e[decodeURIComponent(r[0])] = decodeURIComponent(r[1]))
      : je(`Invalid query segment '${n}' in query '${t}'`);
  }
  return e;
}
const Cf = function (t, e) {
    const n = b1(t),
      r = n.namespace;
    n.domain === "firebase.com" &&
      Tt(
        n.host +
          " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"
      ),
      (!r || r === "undefined") &&
        n.domain !== "localhost" &&
        Tt(
          "Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"
        ),
      n.secure || Qw();
    const i = n.scheme === "ws" || n.scheme === "wss";
    return {
      repoInfo: new xm(n.host, n.secure, r, i, e, "", r !== n.subdomain),
      path: new W(n.pathString),
    };
  },
  b1 = function (t) {
    let e = "",
      n = "",
      r = "",
      i = "",
      s = "",
      o = !0,
      l = "https",
      a = 443;
    if (typeof t == "string") {
      let u = t.indexOf("//");
      u >= 0 && ((l = t.substring(0, u - 1)), (t = t.substring(u + 2)));
      let d = t.indexOf("/");
      d === -1 && (d = t.length);
      let c = t.indexOf("?");
      c === -1 && (c = t.length),
        (e = t.substring(0, Math.min(d, c))),
        d < c && (i = M1(t.substring(d, c)));
      const f = F1(t.substring(Math.min(t.length, c)));
      (u = e.indexOf(":")),
        u >= 0
          ? ((o = l === "https" || l === "wss"),
            (a = parseInt(e.substring(u + 1), 10)))
          : (u = e.length);
      const g = e.slice(0, u);
      if (g.toLowerCase() === "localhost") n = "localhost";
      else if (g.split(".").length <= 2) n = g;
      else {
        const _ = e.indexOf(".");
        (r = e.substring(0, _).toLowerCase()),
          (n = e.substring(_ + 1)),
          (s = r);
      }
      "ns" in f && (s = f.ns);
    }
    return {
      host: e,
      port: a,
      domain: n,
      subdomain: r,
      secure: o,
      scheme: l,
      pathString: i,
      namespace: s,
    };
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class z1 {
  constructor(e, n, r, i) {
    (this.eventType = e),
      (this.eventRegistration = n),
      (this.snapshot = r),
      (this.prevName = i);
  }
  getPath() {
    const e = this.snapshot.ref;
    return this.eventType === "value" ? e._path : e.parent._path;
  }
  getEventType() {
    return this.eventType;
  }
  getEventRunner() {
    return this.eventRegistration.getEventRunner(this);
  }
  toString() {
    return (
      this.getPath().toString() +
      ":" +
      this.eventType +
      ":" +
      le(this.snapshot.exportVal())
    );
  }
}
class U1 {
  constructor(e, n, r) {
    (this.eventRegistration = e), (this.error = n), (this.path = r);
  }
  getPath() {
    return this.path;
  }
  getEventType() {
    return "cancel";
  }
  getEventRunner() {
    return this.eventRegistration.getEventRunner(this);
  }
  toString() {
    return this.path.toString() + ":cancel";
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class j1 {
  constructor(e, n) {
    (this.snapshotCallback = e), (this.cancelCallback = n);
  }
  onValue(e, n) {
    this.snapshotCallback.call(null, e, n);
  }
  onCancel(e) {
    return (
      S(
        this.hasCancelCallback,
        "Raising a cancel event on a listener with no cancel callback"
      ),
      this.cancelCallback.call(null, e)
    );
  }
  get hasCancelCallback() {
    return !!this.cancelCallback;
  }
  matches(e) {
    return (
      this.snapshotCallback === e.snapshotCallback ||
      (this.snapshotCallback.userCallback !== void 0 &&
        this.snapshotCallback.userCallback ===
          e.snapshotCallback.userCallback &&
        this.snapshotCallback.context === e.snapshotCallback.context)
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fc {
  constructor(e, n, r, i) {
    (this._repo = e),
      (this._path = n),
      (this._queryParams = r),
      (this._orderByCalled = i);
  }
  get key() {
    return F(this._path) ? null : Lm(this._path);
  }
  get ref() {
    return new At(this._repo, this._path);
  }
  get _queryIdentifier() {
    const e = lf(this._queryParams),
      n = ju(e);
    return n === "{}" ? "default" : n;
  }
  get _queryObject() {
    return lf(this._queryParams);
  }
  isEqual(e) {
    if (((e = Mi(e)), !(e instanceof fc))) return !1;
    const n = this._repo === e._repo,
      r = bm(this._path, e._path),
      i = this._queryIdentifier === e._queryIdentifier;
    return n && r && i;
  }
  toJSON() {
    return this.toString();
  }
  toString() {
    return this._repo.toString() + RE(this._path);
  }
}
class At extends fc {
  constructor(e, n) {
    super(e, n, new Qu(), !1);
  }
  get parent() {
    const e = Fm(this._path);
    return e === null ? null : new At(this._repo, e);
  }
  get root() {
    let e = this;
    for (; e.parent !== null; ) e = e.parent;
    return e;
  }
}
class ki {
  constructor(e, n, r) {
    (this._node = e), (this.ref = n), (this._index = r);
  }
  get priority() {
    return this._node.getPriority().val();
  }
  get key() {
    return this.ref.key;
  }
  get size() {
    return this._node.numChildren();
  }
  child(e) {
    const n = new W(e),
      r = za(this.ref, e);
    return new ki(this._node.getChild(n), r, te);
  }
  exists() {
    return !this._node.isEmpty();
  }
  exportVal() {
    return this._node.val(!0);
  }
  forEach(e) {
    return this._node.isLeafNode()
      ? !1
      : !!this._node.forEachChild(this._index, (r, i) =>
          e(new ki(i, za(this.ref, r), te))
        );
  }
  hasChild(e) {
    const n = new W(e);
    return !this._node.getChild(n).isEmpty();
  }
  hasChildren() {
    return this._node.isLeafNode() ? !1 : !this._node.isEmpty();
  }
  toJSON() {
    return this.exportVal();
  }
  val() {
    return this._node.val();
  }
}
function B1(t, e) {
  return (t = Mi(t)), t._checkNotDeleted("ref"), za(t._root, e);
}
function za(t, e) {
  return (
    (t = Mi(t)),
    z(t._path) === null ? g1("child", "path", e) : yg("child", "path", e),
    new At(t._repo, ae(t._path, e))
  );
}
function W1(t) {
  t = Mi(t);
  const e = new j1(() => {}),
    n = new hc(e);
  return A1(t._repo, t, n).then(
    (r) => new ki(r, new At(t._repo, t._path), t._queryParams.getIndex())
  );
}
class hc {
  constructor(e) {
    this.callbackContext = e;
  }
  respondsTo(e) {
    return e === "value";
  }
  createEvent(e, n) {
    const r = n._queryParams.getIndex();
    return new z1(
      "value",
      this,
      new ki(e.snapshotNode, new At(n._repo, n._path), r)
    );
  }
  getEventRunner(e) {
    return e.getEventType() === "cancel"
      ? () => this.callbackContext.onCancel(e.error)
      : () => this.callbackContext.onValue(e.snapshot, null);
  }
  createCancelEvent(e, n) {
    return this.callbackContext.hasCancelCallback ? new U1(this, e, n) : null;
  }
  matches(e) {
    return e instanceof hc
      ? !e.callbackContext || !this.callbackContext
        ? !0
        : e.callbackContext.matches(this.callbackContext)
      : !1;
  }
  hasAnyCallback() {
    return this.callbackContext !== null;
  }
}
jC(At);
GC(At);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const V1 = "FIREBASE_DATABASE_EMULATOR_HOST",
  Ua = {};
let H1 = !1;
function G1(t, e, n, r) {
  (t.repoInfo_ = new xm(
    `${e}:${n}`,
    !1,
    t.repoInfo_.namespace,
    t.repoInfo_.webSocketOnly,
    t.repoInfo_.nodeAdmin,
    t.repoInfo_.persistenceKey,
    t.repoInfo_.includeNamespaceInQueryParams,
    !0
  )),
    r && (t.authTokenProvider_ = r);
}
function K1(t, e, n, r, i) {
  let s = r || t.options.databaseURL;
  s === void 0 &&
    (t.options.projectId ||
      Tt(
        "Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."
      ),
    Se("Using default host for project ", t.options.projectId),
    (s = `${t.options.projectId}-default-rtdb.firebaseio.com`));
  let o = Cf(s, i),
    l = o.repoInfo,
    a;
  typeof process < "u" && Wd && (a = Wd[V1]),
    a
      ? ((s = `http://${a}?ns=${l.namespace}`),
        (o = Cf(s, i)),
        (l = o.repoInfo))
      : o.repoInfo.secure;
  const u = new iE(t.name, t.options, e);
  _1("Invalid Firebase Database URL", o),
    F(o.path) ||
      Tt(
        "Database URL must point to the root of a Firebase Database (not including a child path)."
      );
  const d = $1(l, t, u, new rE(t.name, n));
  return new Y1(d, t);
}
function Q1(t, e) {
  const n = Ua[e];
  (!n || n[t.key] !== t) &&
    Tt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),
    P1(t),
    delete n[t.key];
}
function $1(t, e, n, r) {
  let i = Ua[e.name];
  i || ((i = {}), (Ua[e.name] = i));
  let s = i[t.toURLString()];
  return (
    s &&
      Tt(
        "Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."
      ),
    (s = new I1(t, H1, n, r)),
    (i[t.toURLString()] = s),
    s
  );
}
class Y1 {
  constructor(e, n) {
    (this._repoInternal = e),
      (this.app = n),
      (this.type = "database"),
      (this._instanceStarted = !1);
  }
  get _repo() {
    return (
      this._instanceStarted ||
        (x1(
          this._repoInternal,
          this.app.options.appId,
          this.app.options.databaseAuthVariableOverride
        ),
        (this._instanceStarted = !0)),
      this._repoInternal
    );
  }
  get _root() {
    return (
      this._rootInternal || (this._rootInternal = new At(this._repo, j())),
      this._rootInternal
    );
  }
  _delete() {
    return (
      this._rootInternal !== null &&
        (Q1(this._repo, this.app.name),
        (this._repoInternal = null),
        (this._rootInternal = null)),
      Promise.resolve()
    );
  }
  _checkNotDeleted(e) {
    this._rootInternal === null &&
      Tt("Cannot call " + e + " on a deleted database.");
  }
}
function q1(t = Pw(), e) {
  const n = kw(t, "database").getImmediate({ identifier: e });
  if (!n._instanceStarted) {
    const r = v0("database");
    r && X1(n, ...r);
  }
  return n;
}
function X1(t, e, n, r = {}) {
  (t = Mi(t)),
    t._checkNotDeleted("useEmulator"),
    t._instanceStarted &&
      Tt(
        "Cannot call useEmulator() after instance has already been initialized."
      );
  const i = t._repoInternal;
  let s;
  if (i.repoInfo_.nodeAdmin)
    r.mockUserToken &&
      Tt(
        'mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'
      ),
      (s = new Ss(Ss.OWNER));
  else if (r.mockUserToken) {
    const o =
      typeof r.mockUserToken == "string"
        ? r.mockUserToken
        : y0(r.mockUserToken, t.app.options.projectId);
    s = new Ss(o);
  }
  G1(i, e, n, s);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function J1(t) {
  Bw(Rw),
    Zs(
      new vi(
        "database",
        (e, { instanceIdentifier: n }) => {
          const r = e.getProvider("app").getImmediate(),
            i = e.getProvider("auth-internal"),
            s = e.getProvider("app-check-internal");
          return K1(r, i, s, n);
        },
        "PUBLIC"
      ).setMultipleInstances(!0)
    ),
    tr(Vd, Hd, t),
    tr(Vd, Hd, "esm2017");
}
wt.prototype.simpleListen = function (t, e) {
  this.sendRequest("q", { p: t }, e);
};
wt.prototype.echo = function (t, e) {
  this.sendRequest("echo", { d: t }, e);
};
J1();
var Z1 = "firebase",
  eS = "10.13.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ tr(Z1, eS, "app");
var tS = {
  BASE_URL: "/",
  DEV: !1,
  MODE: "production",
  PROD: !0,
  SSR: !1,
  VITE_APP_API_URL: "https://pfp-generator-service.onrender.com",
  VITE_APP_API_URL_LOCAL: "http://localhost:5000",
  VITE_APP_PASSWORD: "pfp_generator",
  VITE_DATABASE_URL: "https://pfp-generator-6503c-default-rtdb.firebaseio.com",
  VITE_FIREBASE_API_KEY: "AIzaSyCMlNB1SK_6nMO_wrCHcv_jaBjatRVY9Jg",
  VITE_FIREBASE_APP_ID: "1:216868879002:web:bd3d78688a6b29f78ebd23",
  VITE_FIREBASE_AUTH_DOMAIN: "pfp-generator-6503c.firebaseapp.com",
  VITE_FIREBASE_MESSAGING_SENDER_ID: "216868879002",
  VITE_FIREBASE_PROJECT_ID: "pfp-generator-6503c",
  VITE_FIREBASE_STORAGE_BUCKET: "pfp-generator-6503c.appspot.com",
  VITE_VERCEL_BRANCH_URL:
    "pfp-generator-frontend-git-main-cocos-projects-18e2c285.vercel.app",
  VITE_VERCEL_ENV: "production",
  VITE_VERCEL_GIT_COMMIT_AUTHOR_LOGIN: "CoCo-27",
  VITE_VERCEL_GIT_COMMIT_AUTHOR_NAME: "CoCo.DiamondDev",
  VITE_VERCEL_GIT_COMMIT_MESSAGE: `Merge pull request #3 from CoCo-27/feature/spikes-issue

update logo`,
  VITE_VERCEL_GIT_COMMIT_REF: "main",
  VITE_VERCEL_GIT_COMMIT_SHA: "f1ea5d3f62f1f39c33c875a39caa6d39d3dcaf41",
  VITE_VERCEL_GIT_PREVIOUS_SHA: "",
  VITE_VERCEL_GIT_PROVIDER: "github",
  VITE_VERCEL_GIT_PULL_REQUEST_ID: "",
  VITE_VERCEL_GIT_REPO_ID: "839277206",
  VITE_VERCEL_GIT_REPO_OWNER: "CoCo-27",
  VITE_VERCEL_GIT_REPO_SLUG: "PFP_Generator_Frontend",
  VITE_VERCEL_PROJECT_PRODUCTION_URL: "lab.hahayes.co",
  VITE_VERCEL_URL:
    "pfp-generator-frontend-pa1bc8544-cocos-projects-18e2c285.vercel.app",
};
const nS = "https://pfp-generator-service.onrender.com",
  rS = {
    apiKey: "AIzaSyCMlNB1SK_6nMO_wrCHcv_jaBjatRVY9Jg",
    authDomain: "pfp-generator-6503c.firebaseapp.com",
    databaseURL: "https://pfp-generator-6503c-default-rtdb.firebaseio.com",
    projectId: "pfp-generator-6503c",
    storageBucket: "pfp-generator-6503c.appspot.com",
    messagingSenderId: "216868879002",
    appId: "1:216868879002:web:bd3d78688a6b29f78ebd23",
    measurementId: tS.VITE_FIREBASE_MEASUREMENT_ID,
  },
  iS = lm(rS),
  Sf =
    "data:image/svg+xml,%3csvg%20version='1.2'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2042%2053'%20width='42'%20height='53'%3e%3ctitle%3eNew%20Project%3c/title%3e%3cdefs%3e%3cimage%20width='42'%20height='53'%20id='img1'%20href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAA1CAMAAAAAnYknAAAAAXNSR0IB2cksfwAAARdQTFRFAAAAzufzzej0zOf2zOf1zOf1zOf11dX/y+f1zOf1zej1xuP/zeb1zOf2zOf1yufzzOf1y+j0zOf1qsfXm7vLepmpB091eZWkAJHfA16Pd5SjAKb/A16Qc5CgA1+Rco6eAl+Qboybgqi8TnaLMlNlAJbmAmCQaYeXQ4itAmCRZoSTOX6jAl+RYoGRM3qgAmCSXHuMLnedAmCTWnmJKnOaUnWGJnGYAVuLYICRI3CYAJzwAE54HlJvIW+ZBn/AT3CCHm2YHG2ZGWqVAJzvP3KMAGadAGifAEdtAJPiudXjTXSJL1Vpc5GgWH2RZoKRAIfQWX6SUXCBADxdm7bEDkpsw+DuzOf1zOf1zOb0y+jzzOf2zOf1zOf1+P4TmwAAAF10Uk5TACqO1/j/1gaU/ZgJu72VK/yP+f/////////////////////////////////////////////////////////////////////////////////////////z1JAs2Pr08CIKZwAAAWRJREFUeJzl1l0rBFEYB/Dnv8e0tMzYTe0NKUqUknKhkBulKcnLhXxC5cqN+ARK2RIpbG2Rt1jyvpbJOMPczMxzxrN3yv9iTj39Ok1nzpzngHQQhEzxM57vB4ooC3hG95Mm4EXTrFX/BQZpfq+D7JpAEqk3OHpqSXI+8s8iSdQKlRHSTxSehLQNllDqdf0/1MaDlLYDd1KqgBsp1fZKSknhQkrJwlkK7Qr/L+BVP3OomGlvdJPZKBtp3310mjwOTXTgNvZ2HTgw0MHrGKUi9ng6dBmnVFS7LB0+T1DqRImjI6cJ2Q1sc3S0kpQKWxwdK6fJCB0/TpMROhF+2NoJJyN0MjxkgX1GRugUjr7H/pJipHETJqWJMpKl0zs9UM5mvMxRF1VVWE+UOTqDKiNZOguPkfxBNLfGFP/mSWii4g4zL+9bC/JuuIjlDWGPdcWdu+WxoftAA7cMHcfNYNXolj6AFT1+Ae0uT4LTmo3SAAAAAElFTkSuQmCC'/%3e%3c/defs%3e%3cstyle%3e%3c/style%3e%3cuse%20id='Layer%201'%20href='%23img1'%20x='0'%20y='0'/%3e%3c/svg%3e",
  sS = "/assets/basic-Blxm7HR6.jpeg",
  oS = "/assets/basic_2-AZoENqNP.jpeg",
  lS = "/assets/basic_3-BTILiYOA.jpeg",
  aS = ({ text2: t, dice: e }) => {
    const [n, r] = I.useState([]),
      [i, s] = I.useState(!1),
      [o, l] = I.useState(null),
      [a, u] = I.useState([]);
    I.useEffect(() => {
      (async () => {
        const h = q1(iS),
          p = B1(h, "uploads"),
          v = await W1(p);
        if (v.exists()) {
          const w = v.val();
          r(w), s(!0);
          const T = d.map(
            (A) => Object.entries(w).filter((D) => D[1].fieldname === A.id)[0]
          );
          u(T), g(T);
        } else console.log("No data available");
      })();
    }, []);
    const d = [
        { name: "BACKGROUND", id: "1_bcg" },
        { name: "BODY", id: "2_body" },
        { name: "EYES", id: "3_eyes" },
        { name: "SPIKES", id: "4_spikes" },
        { name: "CLOTHES", id: "5_clothes" },
        { name: "MOUTHS", id: "6_mouths" },
      ],
      c = (m, h) => {
        const p = [...a];
        (p[m] = h), u(p), g(p);
      },
      f = async (m) => {
        const h = d.map((p, v) => {
          {
            const w = Object.entries(n).filter((T) => T[1].fieldname === p.id);
            return w[Math.floor(Math.random() * w.length)];
          }
        });
        u(h), g(h);
      },
      g = async (m) => {
        const h = document.createElement("canvas"),
          p = h.getContext("2d"),
          v = 1500,
          w = 1500;
        (h.width = v), (h.height = w);
        const T = {
            "6_mouths": 6,
            "5_clothes": 5,
            "4_spikes": 4,
            "3_eyes": 3,
            "2_body": 2,
            "1_bcg": 1,
          },
          R = m
            .sort((me, ft) => T[me[1].fieldname] - T[ft[1].fieldname])
            .map(
              (me) =>
                new Promise((ft, ln) => {
                  const ht = new Image();
                  (ht.crossOrigin = "anonymous"),
                    (ht.src = me[1].uploadedUrl),
                    (ht.onload = () => ft(ht)),
                    (ht.onerror = () => ln(`Failed to load image: ${ht.src}`));
                })
            );
        (await Promise.all(R)).forEach((me) => {
          p.drawImage(me, 0, 0, v, w);
        });
        const D = h.toDataURL();
        l(D);
      },
      _ = () => {
        if (o) {
          const m = document.createElement("a");
          (m.href = o),
            (m.download = "avatar.jpeg"),
            document.body.appendChild(m),
            m.click(),
            document.body.removeChild(m);
        }
      },
      y = I.useRef(d.map(() => Ha.createRef())),
      C = (m, h) => {
        const p = y.current[m].current;
        if (p) {
          let v = new DOMMatrix(
              window.getComputedStyle(p).getPropertyValue("transform")
            ),
            w = v.m41;
          const T = p.scrollWidth,
            A = p.parentElement.clientWidth,
            R = T - A;
          if (h > 0) {
            if (Math.abs(w) < R + 56) {
              const K = Math.max(w - 56, -R);
              p.style.transform = `translateX(${K}px)`;
            }
          } else
            Math.abs(w) > 56
              ? (p.style.transform = `translateX(${w + 56}px)`)
              : (p.style.transform = "translateX(0px)");
          (v = new DOMMatrix(
            window.getComputedStyle(p).getPropertyValue("transform")
          )),
            (w = v.m41),
            (document.getElementsByClassName("prev_elem")[m].style.display =
              Math.abs(w) <= 0 ? "none" : "flex"),
            (document.getElementsByClassName("next_elem")[m].style.display =
              Math.abs(w) >= R ? "none" : "flex");
        }
      };
    return x.jsx("div", {
      className: "w-full",
      children: x.jsx("div", {
        className: "m-auto",
        children: x.jsx("div", {
          className: "px-6 lg:px-32 py-6 w-full max-w-6xl",
          children: x.jsxs("main", {
            className: "relative z-50",
            children: [
              x.jsx("img", {
                src: t,
                alt: "Text 2",
                className:
                  "w-fit px-4 md:px-10 py-4 md:py-6 mx-auto md:mx-0 max-w-full",
              }),
              x.jsxs("div", {
                className: "w-full flex flex-col-reverse md:flex-row gap-8",
                children: [
                  x.jsx("div", {
                    className:
                      "sm:max-w-[540px] bg-white w-full h-full flex-1 p-8 rounded-[30px] border-black border-2 border-b-8 shadow-2xl relative",
                    children: d.map((m, h) =>
                      x.jsxs(
                        "div",
                        {
                          className: "w-full flex flex-col gap-2 mb-4",
                          children: [
                            x.jsx("div", {
                              className:
                                "w-full text-start font_chantbold text-3xl z-20",
                              children: m.name,
                            }),
                            x.jsxs("div", {
                              className: "w-full flex justify-between",
                              children: [
                                x.jsxs("div", {
                                  className:
                                    "h-full hidden justify-center items-center w-12 pr-2 prev_elem relative",
                                  children: [
                                    x.jsx("img", {
                                      src: Sf,
                                      alt: "Arrow Button",
                                      className:
                                        "w-full h-14 cursor-pointer  z-50 relative rotate-180",
                                      onClick: () => C(h, -1),
                                    }),
                                    x.jsx("div", {
                                      className:
                                        "absolute p-4 h-full from-white to-transparent from-30% bg-gradient-to-r left-[80%] top-0 pointer-events-none z-10",
                                    }),
                                  ],
                                }),
                                x.jsx("div", {
                                  className: "overflow-x-hidden flex-1",
                                  children: x.jsx("div", {
                                    className:
                                      "flex gap-2 whitespace-nowrap translate-x-0 transition-all ease-linear pr-4",
                                    ref: y.current[h],
                                    children:
                                      n &&
                                      Object.entries(n).map(([p, v], w) => {
                                        if (v.fieldname === m.id) {
                                          const T = a[h] && a[h][0] === p;
                                          return x.jsxs(
                                            "div",
                                            {
                                              className:
                                                "item min-w-14 min-h-14 rounded-xl relative cursor-pointer",
                                              onClick: () => c(h, [p, v]),
                                              children: [
                                                " ",
                                                x.jsx("img", {
                                                  src: v.uploadedUrl,
                                                  alt: `Image ${w}`,
                                                  className: `relative z-20 w-full h-full object-cover rounded-xl ${
                                                    T
                                                      ? "border-[#2596ff] border-[3px]"
                                                      : "border border-solid border-black/30"
                                                  }`,
                                                }),
                                                v.fieldname !== "1_bcg" &&
                                                  x.jsx("img", {
                                                    src: sS,
                                                    alt: "basic",
                                                    className:
                                                      "absolute top-0 left-0 w-full h-full object-cover rounded-xl",
                                                  }),
                                                v.fieldname == "2_body" &&
                                                  x.jsx("img", {
                                                    src: oS,
                                                    alt: "basic_2",
                                                    className:
                                                      "z-30 absolute top-0 left-0 w-full h-full object-cover rounded-xl",
                                                  }),
                                                v.fieldname == "4_spikes" &&
                                                  x.jsx("img", {
                                                    src: lS,
                                                    alt: "basic",
                                                    className:
                                                      "absolute top-0 left-0 w-full h-full object-cover rounded-xl",
                                                  }),
                                              ],
                                            },
                                            w
                                          );
                                        }
                                        return null;
                                      }),
                                  }),
                                }),
                                x.jsxs("div", {
                                  className:
                                    "h-full flex justify-center items-center w-12 pl-2 next_elem relative",
                                  children: [
                                    x.jsx("img", {
                                      src: Sf,
                                      alt: "Arrow Button",
                                      className:
                                        "w-full h-14 cursor-pointer  z-50 relative",
                                      onClick: () => C(h, 1),
                                    }),
                                    x.jsx("div", {
                                      className:
                                        "absolute p-4 h-full from-white to-transparent from-30% bg-gradient-to-l left-[-50%] top-0 pointer-events-none z-10",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        },
                        h
                      )
                    ),
                  }),
                  x.jsxs("div", {
                    className:
                      "w-full max-w-[320px] flex flex-col gap-4 md:self-start self-center",
                    children: [
                      x.jsx("div", {
                        className:
                          "aspect-square bg-[#ffe77a] rounded-[30px] border-8 border-black border-b-[16px] shadow-2xl",
                        children:
                          o &&
                          x.jsx("img", {
                            src: o,
                            alt: "Combined",
                            className:
                              "w-full h-full object-cover rounded-[16px]",
                          }),
                      }),
                      x.jsxs("div", {
                        className: "flex flex-col gap-4 w-full px-4",
                        children: [
                          x.jsxs("button", {
                            className:
                              "w-full bg-white rounded-2xl border-black border-2 border-b-8 flex items-center justify-center gap-4 text-xl font-bold p-3 hover:bg-gray-200",
                            onClick: () => f(),
                            disabled: !i,
                            children: [
                              x.jsx("img", {
                                src: e,
                                alt: "Dice",
                                className: "w-[24px] h-[26px]",
                              }),
                              "Generate Random",
                            ],
                          }),
                          x.jsx("button", {
                            className:
                              "w-full bg-[#ffe77a] rounded-2xl border-black border-2 border-b-8 flex items-center justify-center gap-4 text-xl font-bold p-3 hover:bg-[#ffd700]",
                            onClick: _,
                            children: "Download",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    });
  },
  uS = () =>
    x.jsxs("div", {
      className: "min-h-screen bg-top bg-cover bg-no-repeat flex flex-col",
      children: [
        x.jsx("img", {
          className: "fixed w-full h-screen object-cover",
          src: t0,
        }),
        x.jsx(a0, { icon: s0, text1: n0, logo: o0 }),
        x.jsx(aS, { text2: r0, dice: i0 }),
        x.jsx("img", {
          src: l0,
          alt: "Bed",
          className:
            "fixed bottom-0 right-0 h-[88%] pointer-events-none hidden md:block",
        }),
      ],
    }),
  cS = () => {
    const [t, e] = I.useState(!1),
      [n, r] = I.useState(""),
      [i, s] = I.useState([]),
      [o, l] = I.useState(""),
      [a, u] = I.useState(!1),
      [d, c] = I.useState(null),
      [f, g] = I.useState(!1),
      _ = ["1_bcg", "2_body", "3_eyes", "4_spikes", "5_clothes", "6_mouths"],
      y = (p) => {
        s(Array.from(p.target.files)), c(null), g(!1);
      },
      C = (p) => {
        l(p.target.value), c(null), g(!1);
      },
      m = async () => {
        if (i.length === 0) {
          c("Please select at least one file to upload.");
          return;
        }
        if (!o) {
          c("Please select the type of images you are uploading.");
          return;
        }
        u(!0), c(null), g(!1);
        const p = new FormData();
        i.forEach((v, w) => {
          p.append(`file${w}`, v);
        }),
          p.append("imageType", o);
        try {
          if (
            !(await fetch(`${nS}/api/upload`, { method: "POST", body: p })).ok
          )
            throw new Error("Upload failed");
          g(!0), s([]), l("");
        } catch (v) {
          c("An error occurred while uploading the files. Please try again."),
            console.error("Upload error:", v);
        } finally {
          u(!1);
        }
      },
      h = (p) => {
        p.preventDefault(),
          n === "pfp_generator" ? (e(!0), c(null)) : c("Incorrect password");
      };
    return t
      ? x.jsxs("div", {
          className: "max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-xl",
          children: [
            x.jsx("h2", {
              className: "text-2xl font-bold mb-4",
              children: "Upload Your Images",
            }),
            x.jsxs("select", {
              value: o,
              onChange: C,
              className: "mb-4 p-2 w-full border border-gray-300 rounded",
              children: [
                x.jsx("option", { value: "", children: "Select image type" }),
                _.map((p) => x.jsx("option", { value: p, children: p }, p)),
              ],
            }),
            x.jsx("input", {
              type: "file",
              onChange: y,
              className: "mb-4 p-2 w-full border border-gray-300 rounded",
              accept: "image/*",
              multiple: !0,
            }),
            x.jsx("button", {
              onClick: m,
              disabled: i.length === 0 || !o || a,
              className: `w-full py-2 px-4 rounded ${
                i.length === 0 || !o || a
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`,
              children: a ? "Uploading..." : "Upload",
            }),
            d && x.jsx("p", { className: "mt-4 text-red-500", children: d }),
            f &&
              x.jsx("p", {
                className: "mt-4 text-green-500",
                children: "Files uploaded successfully!",
              }),
          ],
        })
      : x.jsxs("div", {
          className: "max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-xl",
          children: [
            x.jsx("h2", {
              className: "text-2xl font-bold mb-4",
              children: "Enter Password",
            }),
            x.jsxs("form", {
              onSubmit: h,
              children: [
                x.jsx("input", {
                  type: "password",
                  value: n,
                  onChange: (p) => r(p.target.value),
                  className: "mb-4 p-2 w-full border border-gray-300 rounded",
                  placeholder: "Enter password",
                }),
                x.jsx("button", {
                  type: "submit",
                  className:
                    "w-full py-2 px-4 rounded bg-blue-500 hover:bg-blue-600 text-white",
                  children: "Submit",
                }),
              ],
            }),
            d && x.jsx("p", { className: "mt-4 text-red-500", children: d }),
          ],
        });
  },
  dS = () =>
    x.jsxs("div", {
      className:
        "flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 py-8",
      children: [
        x.jsx("h1", {
          className: "text-5xl sm:text-6xl font-bold text-gray-800 mb-4",
          children: "404",
        }),
        x.jsx("p", {
          className: "text-xl sm:text-2xl text-gray-600 mb-6 text-center",
          children: "Oops! Page not found.",
        }),
        x.jsx("p", {
          className: "text-base sm:text-lg text-gray-500 mb-8 text-center",
          children:
            "The page you are looking for might have been removed or is temporarily unavailable.",
        }),
        x.jsx(Zy, {
          to: "/",
          className:
            "px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors",
          children: "Go back to Home",
        }),
      ],
    });
function fS() {
  return x.jsx(qy, {
    children: x.jsxs(Vy, {
      children: [
        x.jsx(Cs, { path: "/", element: x.jsx(uS, {}) }),
        x.jsx(Cs, { path: "/upload", element: x.jsx(cS, {}) }),
        x.jsx(Cs, { path: "*", element: x.jsx(dS, {}) }),
      ],
    }),
  });
}
Tl.createRoot(document.getElementById("root")).render(
  x.jsx(Ha.StrictMode, { children: x.jsx(fS, {}) })
);
