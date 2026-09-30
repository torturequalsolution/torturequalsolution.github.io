!function() {
  var e, t, n;
  ! function(e) {
    e.JSCondition = "jsCondition", e.JSFunction = "jsFunction", e.JSEvent = "jsEvent", e.Selector = "selector", e.ElementEvent = "elementEvent", e.PageLoad = "pageLoad", e.Timeout = "timeout", e.Inactivity = "inactivity", e.ExitIntent = "exitIntent", e.Conjunction = "conjunction"
  }(e || (e = {})),
  function(e) {
    e[e.PAUSED = 4] = "PAUSED"
  }(t || (t = {})),
  function(e) {
    e[e.LOCAL = 0] = "LOCAL", e[e.STAGE = 1] = "STAGE", e[e.PROD = 2] = "PROD", e[e.TEST = 3] = "TEST"
  }(n || (n = {}));
  const r = "lmi_preview";
  var o;
  ! function(e) {
    e.USE_CASE = "USE_CASE", e.ADD_TO_CART = "ADD_TO_CART"
  }(o || (o = {}));
  const i = function(e) {
      void 0 === e && (e = () => window);
      try {
        return Promise.resolve(v(() => void 0 !== _(() => e().removeEventListener), 100, 100)).then(function() {
          return Promise.resolve()
        })
      } catch (e) {
        return Promise.reject(e)
      }
    },
    s = function(e, t) {
      void 0 === e && (e = () => window), void 0 === t && (t = !1);
      try {
        function n() {
          return Promise.resolve()
        }
        const r = t && a() ? Promise.resolve(v(() => c, 1e3, 10)).then(function() {}) : Promise.resolve(v(() => void 0 !== _(() => e().addEventListener), 10, 1e3)).then(function() {});
        return Promise.resolve(r && r.then ? r.then(n) : n())
      } catch (o) {
        return Promise.reject(o)
      }
    };
  let c = !1;

  function a() {
    return !0 === _(() => window.vslyDeferResources)
  }

  function u(e, t) {
    void 0 === t && (t = 20);
    let n = 0;
    return function() {
      clearTimeout(n), n = setTimeout(() => e(...[].slice.call(arguments)), t)
    }
  }
  window.addEventListener("load", () => {
    setTimeout(() => {
      c = !0
    }, 2e3)
  });
  const l = "vsly-hide-theme-preview",
    d = "vslyCtags",
    m = () => {
      _(() => {
        const e = window.loomi_ctx.ctags || [];
        0 === e.length ? window.loomi_ctx.ctags = JSON.parse(localStorage.getItem(d) || "[]") : localStorage.setItem(d, JSON.stringify(e)), _(() => {
          const e = JSON.parse(localStorage.getItem("vslyCustomCtags") || "[]");
          e && e.length > 0 && (window.loomi_ctx.ctags = [...window.loomi_ctx.ctags || [], ...e])
        })
      })
    },
    f = () => new Date(1e3 * Math.floor(Date.now() / 1e3));

  function h(e, t) {
    void 0 === t && (t = {
      async: !1,
      defer: !1
    });
    const n = _(() => window.visually.flags["bunny-cdn"]),
      r = A();
    return p(`vsly-lib-${e}`, `https://${n?"assets.visually.io":r}/vsly/lib/${e}.js`, t)
  }

  function p(e, t, n) {
    return void 0 === n && (n = {
      async: !1,
      defer: !1
    }), new Promise((r, o) => {
      let i = document.getElementById(e);
      i ? r(document.getElementById(e)) : (i = document.createElement("script"), i.id = e, i.src = t, i.async = n.async || !1, i.defer = n.defer || !1, i.setAttribute("data-em-disable", ""), i.onload = () => r(i), i.onerror = () => o(new Error(`Failed to load ${t}`)), document.head.appendChild(i))
    })
  }

  function v(e, t, n, r) {
    return void 0 === t && (t = 500), void 0 === n && (n = 4), new Promise((o, i) => {
      e() ? o(0) : 0 !== n ? setTimeout(() => {
        r && r() && i(`condition rejected ${_(()=>e.toString())}`), v(e, t, n - 1).then(o).catch(i)
      }, t) : i(`condition rejected ${_(()=>e.toString())}`)
    })
  }

  function w(e, t) {
    void 0 === t && (t = 500);
    const n = _(() => window.visually_io_editor) ? Date.now() + 1e4 : Infinity;

    function r(o) {
      try {
        const i = e();
        i ? o(i) : Date.now() >= n ? o(void 0) : setTimeout(() => r(o), t)
      } catch (e) {
        console.error("vsly-when", e), Date.now() >= n ? o(void 0) : setTimeout(() => r(o), t)
      }
    }
    return new Promise(e => {
      r(e)
    })
  }

  function y(e) {
    return !Array.isArray(e) || 0 === e.length
  }

  function g(e) {
    return btoa(unescape(encodeURIComponent(JSON.stringify(e))))
  }

  function _(e, t) {
    void 0 === t && (t = void 0);
    try {
      return e()
    } catch {
      return t
    }
  }
  const S = e => e && decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;

  function E() {
    const e = window.loomi_ctx?.clientId;
    return e ? (window.localStorage.setItem("vsly__st", String(e)), String(e)) : window.localStorage.getItem("vsly__st")
  }

  function P(e, t, n) {
    void 0 === t && (t = 5), void 0 === n && (n = 500), t >= 0 && !_(e) && setTimeout(() => {
      _(e) || P(e, t - 1)
    }, n)
  }
  const A = function(e) {
    return void 0 === e && (e = window.loomi_ctx.env), e === n.STAGE ? "sdk.loomi-stg.xyz" : "live.visually-io.com"
  };

  function I(e) {
    return e.replace(/[^a-z_A-Z0-9]/gi, "_")
  }
  const b = () => !!_(() => x()()),
    x = () => _(() => window.Shopify.customerPrivacy.analyticsProcessingAllowed) || _(() => window.Shopify.customerPrivacy.userCanBeTracked) || _(() => window.visually.analyticsProcessingAllowed);

  function C() {
    const e = function() {
      try {
        return Promise.resolve(v(() => !!_(() => window.loomi.jitsu), a() ? 1e3 : 500, 120)).then(function() {
          return _(() => window.loomi.jitsu)
        })
      } catch (e) {
        return Promise.reject(e)
      }
    }();
    return {
      register(t, n, r, o) {
        e.then(e => _(() => e.register(t, n, r, o)))
      },
      track: function(t, n, r) {
        return Promise.resolve(e).then(function(e) {
          return Promise.resolve(_(() => e.track(t, n, r))).then(function() {})
        })
      },
      trackExt: function(t, n) {
        return Promise.resolve(e).then(function(e) {
          return Promise.resolve(_(() => e.trackExt(t, n))).then(function() {})
        })
      }
    }
  }
  let k = !1,
    T = !1;

  function N(e, t, n) {
    return {
      id: T ? "lmi-000" : "lmi-" + ++j,
      isApplied: !1,
      kind: e,
      selector: t,
      value: n
    }
  }

  function O(e, t) {
    let n, r = !1;
    return null !== e.previousElementSibling ? n = e.previousElementSibling : (n = e.parentElement, r = !0), n ? (e.outerHTML = t, r ? n.firstElementChild : n.nextElementSibling) : e
  }
  let j = Math.round(1e4 * Math.random()),
    L = [],
    $ = new Map;
  const R = "lmid",
    D = "lmwv";

  function U() {
    return !!_(() => window.vsly_fbs)
  }

  function M() {
    return window.location.search.includes("lmi_debug") || U()
  }

  function q() {
    M() && console.debug("loomi-editor", ...[].slice.call(arguments))
  }

  function F() {
    M() && console.error("loomi-editor", ...[].slice.call(arguments))
  }
  let B = !0,
    J = {};
  class V {
    constructor(e, t) {
      this._value = void 0, this._addedAt = void 0, this._value = e, this._addedAt = t || (new Date).getTime()
    }
    value() {
      return this._value
    }
    addedAt() {
      return this._addedAt
    }
  }
  class H {
    constructor(e, t) {
      this.backend = void 0, this.ttlMillis = void 0, this.backend = e, this.ttlMillis = t
    }
    isValid(e) {
      return !!e && (new Date).getTime() - e.addedAt() <= this.ttlMillis
    }
    get(e) {
      const t = this.backend.get(e),
        n = this.isValid(t);
      if (t && n) return t.value();
      n || this.backend.remove(e)
    }
    set(e, t, n) {
      const r = new V(t, n);
      this.backend.set(e, r)
    }
  }
  class G {
    constructor(e) {
      this.namespace = void 0, this.namespace = `vsly_cache_${e}`, window[this.namespace] = {}
    }
    get(e) {
      return _(() => window[this.namespace][e])
    }
    remove(e) {
      _(() => delete window[this.namespace][e])
    }
    set(e, t) {
      window[this.namespace][e] = t
    }
  }
  class z {
    constructor(e) {
      this.namespace = void 0, this.namespace = `vsly_cache_${e}`
    }
    get(e) {
      return _(() => {
        const t = sessionStorage.getItem(`${this.namespace}_${e}`);
        if (!t) return;
        const n = JSON.parse(t);
        return new V(n._value, n._addedAt)
      })
    }
    remove(e) {
      sessionStorage.removeItem(`${this.namespace}_${e}`)
    }
    set(e, t) {
      sessionStorage.setItem(`${this.namespace}_${e}`, JSON.stringify(t))
    }
  }
  class K extends H {
    constructor(e, t) {
      super(new G(e), t)
    }
  }
  const W = function(e, t) {
      void 0 === t && (t = 8397271938200529);
      let n = 3735928559 ^ t,
        r = 1103547991 ^ t;
      for (let t, o = 0; o < e.length; o++) t = e.charCodeAt(o), n = Math.imul(n ^ t, 2654435761), r = Math.imul(r ^ t, 1597334677);
      return n = Math.imul(n ^ n >>> 16, 2246822507) ^ Math.imul(r ^ r >>> 13, 3266489909), r = Math.imul(r ^ r >>> 16, 2246822507) ^ Math.imul(n ^ n >>> 13, 3266489909), `${4294967296*(2097151&r)+(n>>>0)}`
    },
    Q = "targeting-changed",
    Y = "vslyThemeTest",
    Z = "0891c521a9aa47c6a9fd965198b7ed44",
    X = "_203";

  function ee(e, t, n, r, o) {
    void 0 === n && (n = 10), void 0 === r && (r = !1), void 0 === o && (o = "none");
    const {
      _USE_CASE: i,
      _USE_CASE_VARIANT: s,
      _USE_CASE_AUDIENCES: c,
      _USE_CASE_VERSION: a,
      _USE_CASE_GA_VARIANT: u,
      _USE_CASE_GA: l
    } = e;
    if (U() || ie()) return;
    if (! function(e) {
        try {
          const t = location.pathname,
            n = new URL(e);
          if (location.search.includes("vsly-redirected-from")) return !1;
          if (!0 === _(() => window.visually.flags["sdk-kill-advanced-redirect-checks"])) return !0;
          {
            let e = !1;
            const r = decodeURIComponent(location.search);
            return n.searchParams.forEach((t, n) => {
              const o = decodeURIComponent(`${n}=${t}`);
              r.includes(o) || (e = !0)
            }), !!((_(() => Array.from(n.searchParams.values()).length) || 0) > 0 && e) || t !== n.pathname
          }
        } catch (e) {
          return !1
        }
      }(t)) return;
    if (! function(e, t, n) {
        const r = `vsly-redirect-${W(`${n._USE_CASE}-${n._USE_CASE_VARIANT}-${n._USE_CASE_VERSION}-${e}`)}`;
        return "session" === t ? "true" !== sessionStorage.getItem(r) && (sessionStorage.setItem(r, "true"), !0) : "user" !== t || "true" !== localStorage.getItem(r) && (localStorage.setItem(r, "true"), !0)
      }(t, o, e)) return;
    h();
    const d = `${i}-${s}`,
      m = {
        type: "USE_CASE",
        ts: f().valueOf(),
        payload: {
          sid: _(() => window.loomi_ctx.session.id),
          user: {
            anonymous_id: _(() => window.loomi_ctx.userId)
          },
          use_case: i,
          use_case_variant: s,
          ...a ? {
            version: a
          } : {},
          ...c ? {
            audiences: c
          } : {}
        },
        options: {
          gaName: _(() => I(l)),
          gaVariant: _(() => I(u))
        }
      };

    function h() {
      document.body && (document.body.style.opacity = 0)
    }
    _(() => {
      ce(i) && (m.payload.clickId = "redirect", m.options.isRedirect = !0)
    }), window.vsly_redirecting = !0, setTimeout(function() {
      try {
        h();
        const e = JSON.stringify(m),
          n = g(m),
          o = !d.includes(re);
        let i = t;
        try {
          new URLSearchParams(location.search).forEach((e, t) => {
            (r || oe(t)) && (i = te(i, t, e))
          })
        } catch (t) {
          q("e87", {
            redirectUrl: i,
            key: d,
            event: e,
            ex: t
          })
        }
        return i = te(i, "vsly-redirected-from", d), o && (i = te(i, "vsly-redirected-event", n)), location.replace && location.replace(i), Promise.resolve()
      } catch (e) {
        return Promise.reject(e)
      }
    }, n)
  }

  function te(e, t, n) {
    try {
      const r = new URL(e);
      return r.searchParams.append(t, n), r.href
    } catch (t) {
      return `${e}${e.includes("?")?"&":"?"}key=${n}`
    }
  }

  function ne(e) {
    return {
      _USE_CASE: e.experienceId,
      _USE_CASE_VARIANT: e.variantId,
      _USE_CASE_VERSION: e.version,
      _USE_CASE_AUDIENCES: _(() => window.loomi_ctx.audiences.join("|"), ""),
      _USE_CASE_GA: e.gaExperienceName,
      _USE_CASE_GA_VARIANT: e.gaVariantName
    }
  }
  const re = "theme_test_redirect_back_to_main",
    oe = e => e.toLowerCase().startsWith("utm");

  function ie() {
    return _(() => window.Shopify.designMode, !1)
  }

  function se() {
    return _(() => window.Shopify.country) || _(() => window.visually.country)
  }
  const ce = e => window.loomi.conf.experiments.find(t => t.name === e).isRedirect,
    ae = (e, t) => {
      _(() => !0 === window.visually.flags["sdk-disable-dynamic-height-strategy"], !1) || e && function(e, t, n) {
        let r = e,
          o = 0;
        for (; r.parentElement && o < 10;) n(r.parentElement), r = r.parentElement, o += 1
      }(e, 0, e => {
        const t = e.style.height;
        var n;
        (n = t) && "" !== n && (e.style.removeProperty("height"), e.style.minHeight = t)
      })
    };

  function ue(e, t, n, r) {
    if (!document.body.contains(r)) {
      const r = document.querySelector(n);
      return r ? (t(), e(), {
        element: r,
        isDetached: !0
      }) : {
        isDetached: !1
      }
    }
    return {
      isDetached: !1
    }
  }

  function le(e) {
    if (!_(() => window.visually.flags["visibility-redo"])) return document.querySelector(e);
    const t = document.querySelectorAll(e);
    for (let e = 0; e < t.length; e++) {
      const n = t.item(e);
      if (de(n)) return n
    }
    return _(() => t[0])
  }

  function de(e) {
    try {
      if (!_(() => window.visually.flags["visibility-redo"])) return !0;
      if (!e) return !1;
      const t = e.getBoundingClientRect(),
        n = getComputedStyle(e);
      return !_(() => "none" == n.display || "0" == n.opacity || "hidden" == n.visibility || t.width <= 5 && t.height <= 5 || "none" == e.style.display || "0" == e.style.opacity || "hidden" == e.style.visibility)
    } catch (e) {
      return !0
    }
  }

  function me(e) {
    return _(() => window.visually.flags[e], !1)
  }

  function fe() {
    return _(() => !0 === window.vslyDeferWidgets || me("sdk-defer-widgets"), !1)
  }
  const he = "visually",
    pe = "widgets";
  let ve;

  function we(e, t) {
    const n = e + t,
      r = `vslyw-${n}`;
    if (!document.getElementById(r)) {
      const e = document.createElement("script");
      e.id = r, e.type = "text/javascript";
      const t = _(() => window.visually.flags["bunny-cdn"]),
        o = A();
      e.src = `https://${t?"assets.visually.io":o}/widgets/${n}.js`, document.head.appendChild(e)
    }
  }
  window.IntersectionObserver && (ve = new IntersectionObserver((e, t) => {
    e.forEach(e => {
      if (e.isIntersecting) {
        const n = e.target;
        (function(e) {
          const t = e.getAttribute("lmw"),
            n = e.getAttribute(D);
          if (t && n) {
            const r = t + n;
            return v(() => _(() => !!window[he][pe][r]) && _(() => !!window.preact), 50, 500).then(() => {
              _(() => window[he][pe][r](`#${e.id}`))
            }), !0
          }
          return !1
        })(n) && t.unobserve(n)
      }
    })
  }, {
    root: null,
    rootMargin: window.vslyDeferWidgetsMargin || "100px",
    threshold: .1
  }));
  const ye = "vsly-orig-sel";

  function ge(e, t) {
    try {
      var n = e()
    } catch (e) {
      return t(e)
    }
    return n && n.then ? n.then(void 0, t) : n
  }
  const _e = function(e) {
    try {
      return Promise.resolve(ge(function() {
        return Promise.resolve(v(() => !!_(() => document.querySelector(e)), 250, 100)).then(function() {
          return Promise.resolve(document.querySelector(e))
        })
      }, function(e) {
        return Promise.reject(e)
      }))
    } catch (e) {
      return Promise.reject(e)
    }
  };

  function Se(e, t, n) {
    const r = t.extra;
    return n && n >= 3 ? void 0 !== r && !!_(() => e.childNodes[r]) : !!r && !!_(() => e.childNodes[r])
  }

  function Ee(e, t, n) {
    void 0 === n && (n = 10), me("kill-theme-testing") || Pe(t) || (Ae(e, t), ee(e, Ie(t).href, n, !0, "session"))
  }
  const Pe = e => {
      if (xe()) return !0;
      _(function() {
        try {
          return Promise.resolve(v(() => !!document && !!document.head, 10, 2e3)).then(function() {
            const e = document.head || document.getElementsByTagName("head")[0];
            if (!e.querySelector(`#${l}`)) {
              const t = document.createElement("style");
              t.id = l, t.appendChild(document.createTextNode("#preview-bar-iframe,#PBarNextFrameWrapper,#PBarNextFrame { display: none !important;}")), e.appendChild(t)
            }
          })
        } catch (e) {
          return Promise.reject(e)
        }
      });
      const t = window.loomi_ctx.themeId || _(() => window.Shopify.theme.id),
        n = window.loomi_ctx.role || _(() => window.Shopify.theme.role),
        r = !Ne({
          id: t,
          role: n
        }),
        o = _(() => !window.loomi_ctx.testedThemes.includes(t));
      return !(!r || !o) || Te({
        id: t,
        role: n
      }, e)
    },
    Ae = (e, t) => {
      const n = e._USE_CASE !== re;
      Le(t) && n && [sessionStorage, localStorage].forEach(e => Oe(e))
    },
    Ie = e => {
      let t = Re();
      return _(() => !!window.loomi_api.vslyResolveThemeTestUrl) && (t = _(() => window.loomi_api.vslyResolveThemeTestUrl(t), t)), t.searchParams.append("preview_theme_id", `${e||""}`), t
    },
    be = () => {
      const e = "vsly-tts";
      if ($e(e)) return;
      ke();
      const t = Ie("");
      t.searchParams.append(e, "1"), document.body.style.opacity = 0, location.replace(t.href)
    },
    xe = () => {
      const e = "vsly_disableThemeTest",
        t = $e("disableThemeTest") || !!sessionStorage.getItem(e);
      return t && sessionStorage.setItem(e, "1"), ie() || t
    },
    Ce = () => !me("allow-embed-redirect-tests") || 0 === (window.loomi_ctx.embeddedTests || []).filter(e => e.experiment.isThemeTest).length,
    ke = () => [sessionStorage, localStorage].forEach(e => e.removeItem(Y)),
    Te = (e, t) => e.id === t || Ne(e) && !t,
    Ne = e => "main" === e.role,
    Oe = e => e.setItem(Y, "1"),
    je = e => e.getItem(Y),
    Le = e => !!e,
    $e = e => _(() => Re().searchParams.has(e)),
    Re = () => _(() => new URL(window.location.href)),
    De = "data-rid",
    Ue = "data-alchemy-element-root";
  let Me, qe = 0;

  function Fe(e) {
    return e.hasAttribute(De) || e.hasAttribute(Ue)
  }
  const Be = function(e, t) {
    try {
      return Promise.resolve(v(() => !!document && !!document.body && !!document.querySelector, 50, 200)).then(function() {
        ! function() {
          if ("undefined" == typeof document) return;
          Je || (Je = new MutationObserver(Ve)), Ve();
          const e = "spa" === _(() => window.vslyIntegrationType, "static") ? document : document.body;
          Je.observe(e, {
            childList: !0,
            subtree: !0,
            characterData: !0,
            attributes: !1
          })
        }(), e && (k = e), t && (T = t)
      })
    } catch (e) {
      return Promise.reject(e)
    }
  };
  let Je;

  function Ve() {
    L.filter(e => !e.isApplied).forEach(e => {
      try {
        const t = _(() => document.body.querySelector(e.selector));
        if (!t) return void
        function(e, t, n, r, o) {
          void 0 === r && (r = 100), void 0 === o && (o = 10);
          const i = !!t,
            s = _(() => J[e]) || 0;
          !i && B && s < o && (B = !1, J[e] = (_(() => J[e]) || 0) + 1, setTimeout(() => {
            try {
              n()
            } catch (t) {
              F("failed to run setTimeout on refreshAllElementsSets", e, t)
            }
            B = !0
          }, r + 50 * s))
        }(e.selector, t, Ve, 100, 10);
        if ($.has(e.id)) return;
        if (function(e, t) {
            if (e && (void 0 === Me && (Me = !!document.querySelector(`[${Ue}],[${De}]`)), Me) && function(e) {
                return ["replace", "appendBefore", "appendAfter", "compound", "widget", "moveElem"].includes(e.kind)
              }(t))
              for (let t = e; t; t = t.parentElement)
                if (Fe(t)) return !0;
            return !1
          }(t, e) && ! function() {
            if (U()) return !0;
            const e = window.vslyHydrationSize || 1,
              t = !!window.elementIdToRuntimeInitialized && Object.values(window.elementIdToRuntimeInitialized).length >= e;
            t && 0 === qe && (qe = Date.now());
            const n = Date.now() - qe,
              r = window.vslyHydrationGrace || 500;
            return t && n > r
          }()) return;
        const n = He(e, t);
        n && ($.set(e.id, n), e.isApplied = !0)
      } catch (t) {
        ! function() {
          M() && console.warn("loomi-editor", ...[].slice.call(arguments))
        }("failed to resolve command from mutation request with exception.", t, e)
      }
    }), ze()
  }

  function He(e, t) {
    if ("replace" === e.kind) return function(e, t, n, r, o) {
      let i = o || e,
        s = !1;
      const c = n.outerHTML;
      return {
        id: e,
        isApplied: () => s,
        kind: "replace",
        do: () => {
          s || (k && n.setAttribute(R, i), n.outerHTML !== r && (n = O(n, r), ae(n), k && n.setAttribute(R, i), s = !0))
        },
        undo: () => {
          s && n.outerHTML !== c && (n = O(n, c), s = !1)
        },
        redoIfNeeded: () => !1,
        setDebugId: e => i = e
      }
    }(e.id, 0, t, e.value, e.id);
    if ("appendBefore" === e.kind || "appendAfter" === e.kind) return function(e, t, n, r, o) {
      let i = o || e,
        s = !1,
        c = document.querySelector(t),
        a = document.createElement("div");
      const u = () => {
          s || ("appendBefore" === r && (c = document.querySelector(t), _(() => c.parentNode.insertBefore(a, c)), ae(c), a = O(a, n), k && a.setAttribute(R, i), s = !0), "appendAfter" === r && (s || (c = document.querySelector(t), c.nextSibling ? (_(() => c.parentNode.insertBefore(a, c.nextSibling)), ae(c)) : (_(() => c.parentNode.appendChild(a)), ae(c)), a = O(a, n), k && a.setAttribute(R, i), s = !0)), s = !0)
        },
        l = () => {
          s && (a.remove(), s = !1)
        };
      return {
        id: e,
        isApplied: () => s,
        kind: r,
        do: u,
        undo: l,
        redoIfNeeded: () => {
          const e = ue(u, l, t, c);
          return e.element && (c = e.element), e.isDetached
        },
        setDebugId: e => i = e
      }
    }(e.id, e.selector, e.value, e.kind, e.id);
    if ("appendCss" === e.kind) return function(e, t, n, r) {
      let o = r || e,
        i = !1,
        s = document.querySelector(t);
      const c = document.createElement("style"),
        a = () => {
          i || (c.innerHTML = n, k && c.setAttribute(R, o), document.head.appendChild(c), i = !0)
        },
        u = () => {
          i && (c.remove(), i = !1)
        };
      return {
        id: e,
        kind: "appendCss",
        isApplied: () => i,
        do: a,
        undo: u,
        redoIfNeeded: () => {
          const e = ue(a, u, t, s);
          return e.element && (s = e.element), e.isDetached
        },
        setDebugId: e => o = e
      }
    }(e.id, e.selector, e.value, e.id);
    if ("appendJs" === e.kind) return function(e, t, n, r, o) {
      let i = r || e,
        s = !1,
        c = document.querySelector(t),
        a = null;
      const u = () => {
          s || (a || (a = document.createElement("script")), a.setAttribute("type", "application/javascript"), a.innerHTML = function(e, t) {
            return e && t ? `(async () => {\n    const _USE_CASE = "${t.experienceId}";\n    const _USE_CASE_VARIANT = "${t.variantId}";\n    const _USE_CASE_VERSION = ${_(()=>t.version||0,0)};\n    const _USE_CASE_AUDIENCES = "${_(()=>window.loomi_ctx.audiences.join("|"),"")}";\n    const _USE_CASE_GA = "${_(()=>t.gaExperienceName.replace(/"/g,'\\"'),t.gaExperienceName)}";\n    const _USE_CASE_GA_VARIANT = "${_(()=>t.gaVariantName.replace(/"/g,'\\"'),t.gaVariantName)}";\n    const _USE_CASE_CTX = {_USE_CASE,_USE_CASE_VARIANT,_USE_CASE_VERSION,_USE_CASE_AUDIENCES,_USE_CASE_GA,_USE_CASE_GA_VARIANT};\n    const __currentScriptElement = document.currentScript;\n    ${e}\n    if (typeof vslyCleanup !== 'undefined') {     \n      if (__currentScriptElement) {\n        __currentScriptElement.__vslyCleanup = vslyCleanup;\n      }\n    }\n  })()` : !t && e ? `\n(async () => {\n  const __currentScriptElement = document.currentScript;\n  ${e}\n    if (typeof vslyCleanup !== 'undefined') {     \n      if (__currentScriptElement) {\n        __currentScriptElement.__vslyCleanup = vslyCleanup;\n      }\n    }\n})();\n` : e
          }(n, o), k && (a.id = i), document.body.appendChild(a), s = !0)
        },
        l = () => {
          if (!s) return;
          const e = (() => {
            try {
              const e = a.__vslyCleanup;
              if (e) return e(), !0
            } catch (e) {
              k && console.error("vslyCleanup error:", e)
            }
            return !1
          })();
          a && a.remove(), e && (a = null), s = !1
        };
      return {
        id: e,
        kind: "appendJs",
        isApplied: () => s,
        do: u,
        undo: l,
        redoIfNeeded: () => {
          const e = ue(u, l, t, c);
          return e.element && (c = e.element), e.isDetached
        },
        setDebugId: e => i = e
      }
    }(e.id, e.selector, e.value, e.id, e.options);
    if ("appendFont" === e.kind) {
      const t = JSON.parse(e.value);
      if (t && t.family && t.weights) return function(e, t, n) {
        n = n || e;
        let r = !1;
        const o = document.createElement("link"),
          i = (c = t.weights, (s = t.family).toLowerCase().includes("jetbrains") && (s = "JetBrains Mono"), `https://fonts.googleapis.com/css2?family=${encodeURIComponent(s)}:wght@${_(()=>c.join(";"))}&display=block`);
        var s, c;
        return o.setAttribute("href", i), o.setAttribute("rel", "stylesheet"), {
          id: e,
          isApplied: () => r,
          kind: "appendFont",
          do: () => {
            r || (k && o.setAttribute(R, n), document.head.appendChild(o), r = !0)
          },
          undo: () => {
            r && (o.remove(), r = !1)
          },
          redoIfNeeded: () => !1
        }
      }(e.id, t, e.id)
    } else {
      if ("compound" === e.kind) {
        const n = e.value.map(n => (n.options = e.options, He(n, t))).filter(e => e);
        return function(e, t, n) {
          let r = !1;
          return {
            id: e,
            isApplied: () => r,
            kind: "compound",
            do: () => {
              r || (t.filter(e => !e.isApplied()).forEach(e => {
                e.setDebugId && e.setDebugId(n), e.do()
              }), r = !0)
            },
            undo: () => {
              r && (t.filter(e => e.isApplied()).reverse().forEach(e => e.undo()), r = !1)
            },
            redoIfNeeded: () => t.map(e => e.redoIfNeeded()).filter(e => e).length > 0
          }
        }(e.id, n, e.id)
      }
      if ("widget" === e.kind) {
        const t = _(() => e.block.value),
          n = _(() => t.env.sectionId.substring(1), e.id);
        return function(e, t, n, r, o, i, s) {
          void 0 === s && (s = "");
          const c = i || t;
          let a = !1;
          const u = `vslyp-${t}`;
          let l = null,
            d = null,
            m = [];
          const f = () => {
              a || (we(r, s), "replace" === e ? w() : y(), fe() && ve || h(), a = !0)
            },
            h = () => {
              const e = r + s;
              v(() => _(() => !!window[he][pe][e]) && _(() => !!window.preact), 50, 500).then(() => {
                ae(l), _(() => window[he][pe][e](`#${t}`))
              })
            },
            p = () => {
              if (!a) return;
              d && d.remove();
              const t = document.getElementById(u);
              if (t && t.remove(), "replace" === e && l && l.children && l.children.length > 0) {
                let e = 0;
                for (const t of l.children) t.style.display = m[e], e += 1
              }
              a = !1
            },
            w = () => {
              if (l = le(n), l) {
                if (m = [], l.children && l.children.length > 0)
                  for (const e of l.children) {
                    const t = e;
                    t && !t.getAttribute("preact") && (m.push(t.style.display), t.style.display = "none")
                  }
                g(), l.appendChild(d), fe() && ve && ve.observe(d)
              } else F("vsly", `failed to find element with selector: ${n} when trying to replace with widget`)
            },
            y = () => {
              l = le(n), l ? (g(), l.insertAdjacentElement("appendBefore" === e ? "beforebegin" : "afterend", d), fe() && ve && ve.observe(d)) : F("vsly", `failed to find element with selector: ${n} when trying to append widget`)
            },
            g = () => {
              if (d = document.getElementById(t), !d) {
                d = document.createElement("section"), d.style.all = "unset", d.style.width = "100%", d.setAttribute("preact", "1"), k && d.setAttribute(R, c), d.setAttribute("lmw", r), d.setAttribute(D, s), d.id = t;
                const e = document.createElement("script");
                e.id = u, e.setAttribute("type", "text/props"), e.innerHTML = JSON.stringify(o), _(() => document.body.appendChild(e))
              }
            };
          return {
            id: t,
            isApplied: () => a,
            kind: "widget",
            do: f,
            undo: p,
            redoIfNeeded: () => {
              const e = ue(f, p, n, l);
              return e.element && (l = e.element), e.isDetached
            }
          }
        }(t.htmlKind, n, e.selector, t.widgetId, t.env, n, t.version)
      }
      if ("moveElem" === e.kind) {
        const t = _(() => e.block.value);
        return function(e, t, n, r) {
          let o = !1,
            i = {
              display: ""
            },
            s = null,
            c = null;
          const a = () => {
              o || v(() => (s = document.querySelector(t), c = document.querySelector(n), !!s && !!c), 50, 500).then(() => {
                s = document.querySelector(t), c = document.querySelector(n), u()
              })
            },
            u = () => {
              c && s && (i = {
                display: c.style.display,
                parentNode: s.parentElement,
                nextSib: s.nextElementSibling,
                prevSib: s.previousElementSibling
              }, "appendBefore" === r ? c.insertAdjacentElement("beforebegin", s) : "appendAfter" === r ? c.insertAdjacentElement("afterend", s) : "replace" === r && (c.style.display = "none!important", c.insertAdjacentElement("afterend", s)), s.setAttribute(ye, t), o = !0)
            };
          return {
            id: e,
            isApplied: () => o,
            kind: "moveElem",
            do: a,
            undo: () => {
              o && c && s && (i && i.prevSib ? i.prevSib.insertAdjacentElement("afterend", s) : i && i.nextSib ? i.nextSib.insertAdjacentElement("beforebegin", s) : i && i.parentNode && i.parentNode.appendChild(s), "replace" === r && (c.style.display = i.display), s.removeAttribute(ye), o = !1)
            },
            redoIfNeeded: () => !(_(() => s.hasAttribute(ye)) && document.body.contains(s) || (o = !1, a(), 0))
          }
        }(e.id, e.selector, t.destSelector, _(() => t.htmlKind))
      }
      if ("automation" === e.kind) return function(e) {
        let t = !1;
        return {
          id: `automation-${(new Date).getDate()}`,
          kind: "automation",
          isApplied: () => t,
          do: () => {
            if (!t) {
              t = !0;
              try {
                e.sort((e, t) => e.order - t.order).map(e => {
                  switch (e.kind) {
                    case "click":
                      return () => function(e) {
                        try {
                          return Promise.resolve(ge(function() {
                            return q("fake-click", "about to click on:", e.selector), Promise.resolve(_e(e.selector)).then(function(e) {
                              return e && e.click(), Promise.resolve()
                            })
                          }, function(e) {
                            return Promise.reject(e)
                          }))
                        } catch (e) {
                          return Promise.reject(e)
                        }
                      }(e);
                    case "type":
                      return () => function(e) {
                        try {
                          return Promise.resolve(ge(function() {
                            return q("fake-click", "about to type on:", e.selector, "with text: ", e.data), Promise.resolve(_e(e.selector)).then(function(t) {
                              const n = _(() => Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set);
                              _(() => n.call(t, e.data || ""));
                              const r = new Event("input", {
                                bubbles: !0
                              });
                              return t.dispatchEvent(r), Promise.resolve()
                            })
                          }, function(e) {
                            return Promise.reject(e)
                          }))
                        } catch (e) {
                          return Promise.reject(e)
                        }
                      }(e);
                    case "scroll":
                      return () => function(e) {
                        try {
                          return Promise.resolve(ge(function() {
                            return q("fake-click", "about to scroll to:", e.selector), Promise.resolve(_e(e.selector)).then(function(e) {
                              return e.scrollIntoView(!0), Promise.resolve()
                            })
                          }, function(e) {
                            return Promise.reject(e)
                          }))
                        } catch (e) {
                          return Promise.reject(e)
                        }
                      }(e);
                    case "wait":
                      return () => function(e) {
                        try {
                          try {
                            return q("fake-click", `about to wait for: ${e.data}ms`), Promise.resolve(new Promise(t => {
                              setTimeout(() => t(), _(() => e.data) || 1e3)
                            }))
                          } catch (e) {
                            return Promise.reject(e)
                          }
                        } catch (e) {
                          return Promise.reject(e)
                        }
                      }(e);
                    default:
                      return () => Promise.resolve()
                  }
                }).reduce((e, t) => e.then(e => t()), Promise.resolve()).then()
              } catch (e) {
                F("failed to run automation with exception:", e)
              }
            }
          },
          undo: () => {},
          redoIfNeeded: () => !1
        }
      }(_(() => e.block.value).steps);
      if ("visualEdit" === e.kind) {
        const t = _(() => e.block.value);
        return function(e, t) {
          let n = !1,
            r = {};
          const o = function(e, t, n) {
            void 0 === n && (n = !0);
            const o = t.subChanges.map(n => {
              switch (n.kind) {
                case "text":
                  return ((e, t, n) => {
                    if (!e) return () => {};
                    const r = t.extra;
                    if (Se(e, t, n)) {
                      const n = e.childNodes[r].textContent;
                      return e.childNodes[r].textContent = t.value, () => e.childNodes[r].textContent = n
                    } {
                      const n = e.textContent;
                      return e.textContent = t.value, () => e.textContent = n
                    }
                  })(e, n, t.version);
                case "style":
                  return ((e, t) => {
                    if (!e) return () => {};
                    const n = _(() => e.style[t.key], null);
                    return e.style.setProperty(t.key, t.value, "important"), () => e.style.setProperty(t.key, n)
                  })(e, n);
                case "image":
                  return ((e, t) => {
                    if (!e || !e.removeAttribute || !e.getAttribute) return () => {};
                    const n = e.getAttribute("srcset") || "";
                    e.removeAttribute("srcset");
                    const r = _(() => e.src, void 0);
                    e.src = t.value;
                    const o = e.parentElement,
                      i = o && "PICTURE" === o.nodeName,
                      s = [];
                    return i && o.querySelectorAll("source").forEach(e => {
                      s.push(e.getAttribute("srcset") || ""), e.removeAttribute("srcset")
                    }), () => {
                      e.setAttribute("srcset", n), e.src = r, i && o.querySelectorAll("source").forEach((e, t) => {
                        e.setAttribute("srcset", s[t])
                      })
                    }
                  })(e, n);
                case "video":
                  return ((e, t) => {
                    if (!e || !e.setAttribute) return () => {};
                    const n = e.innerHTML;
                    e.innerHTML = "";
                    const r = e.getAttribute("src") || "";
                    return e.setAttribute("src", t.value), () => {
                      e.innerHTML = n, e.setAttribute("src", r)
                    }
                  })(e, n);
                case "attr":
                  return ((e, t) => {
                    if (!e || !e.setAttribute || !e.getAttribute) return () => {};
                    const n = e.getAttribute(t.key);
                    return e.setAttribute(t.key, t.value), () => n ? e.setAttribute(t.key, n) : e.removeAttribute(t.key)
                  })(e, n)
              }
            });
            n && (r[t.selector] = {
              ve: t,
              elem: e,
              reverts: o
            })
          };
          return {
            id: e,
            kind: "visualEdit",
            isApplied: () => n,
            do: () => {
              n || (n = !0, t.forEach(e => {
                v(() => !!document.querySelector(e.selector), 250, 300).then(() => {
                  const t = document.querySelector(e.selector);
                  o(t, e)
                })
              }))
            },
            undo: () => {
              n && (n = !1, Object.values(r).forEach(e => e.reverts.forEach(e => e())), r = {})
            },
            redoIfNeeded: () => {
              if (!n) return !1;
              let e = !1;
              return Object.values(r).forEach(t => {
                e = document.body.contains(t.elem) ? function(e, t) {
                  return e.ve.subChanges.forEach((n, r) => {
                    n.value !== ((e, t, n) => {
                      switch (t.kind) {
                        case "text":
                          return ((e, t, n) => {
                            const r = t.extra;
                            return Se(e, t, n) ? e.childNodes[r].textContent : e.textContent
                          })(e, t, n);
                        case "attr":
                          return ((e, t) => e.getAttribute(t.key))(e, t);
                        case "style":
                          return ((e, t) => _(() => e.style[t.key], null))(e, t);
                        case "image":
                        case "video":
                          return (e => e.src)(e)
                      }
                    })(e.elem, n, e.ve.version) && (_(() => e.reverts[r]()), o(e.elem, {
                      selector: e.ve.selector,
                      subChanges: [n]
                    }, !1), t = !0)
                  }), t
                }(t, e) : function(e) {
                  e.reverts.forEach(e => e());
                  const t = document.querySelector(e.ve.selector);
                  return t && o(t, e.ve), !0
                }(t)
              }), e
            }
          }
        }(e.id, t.changes)
      }
      if ("pageRedirect" === e.kind) {
        const t = _(() => e.block.value);
        if (t) return n = t, r = e.options, {
          id: e.id,
          kind: "pageRedirect",
          isApplied: () => !1,
          do: () => {
            ee(ne(r), n.destUrl, n.redirectAfter, !0 === n.retainQueryParams, n.stickinessMode)
          },
          undo: () => {},
          redoIfNeeded: () => !1,
          setDebugId: e => ""
        }
      } else if ("themeTest" === e.kind) {
        const t = _(() => e.block.value);
        if (t) return function(e, t, n) {
          const r = () => !1;
          return {
            id: e,
            kind: "themeTest",
            isApplied: r,
            do: () => Ee(ne(n), t.targetThemeId),
            undo: r,
            redoIfNeeded: r,
            setDebugId: r
          }
        }(e.id, t, e.options)
      }
    }
    var n, r
  }
  let Ge = !1;

  function ze() {
    Ge || (Ge = !0, requestAnimationFrame(Ke))
  }

  function Ke() {
    $.forEach(e => {
      try {
        e.isApplied() ? e.redoIfNeeded() : e.do()
      } catch (t) {
        F("failed to apply mutation command with exception:", t, e)
      }
    }), Ge = !1
  }

  function We(e) {
    try {
      const n = $.get(e),
        r = n && n.undo();
      $.delete(e);
      const o = L.findIndex(t => t.id == e);
      return (t = _(() => L[o].selector)) && _(() => J[t]) && delete J[t], L.splice(o, 1), ze(), r
    } catch (e) {
      return
    }
    var t
  }

  function Qe(e) {
    return "div" === e.selector && (e.selector = "body div"), L.push(e), Ve(), {
      revert: () => We(e.id),
      mutationId: e.id
    }
  }

  function Ye() {
    const e = _(() => window.loomi_ctx.cart);
    if (e) return e;
    const t = localStorage.getItem("loomi-cart");
    if (t) try {
      return JSON.parse(t)
    } catch (e) {}
  }
  var Ze;
  ! function(e) {
    e.CART_CHANGE = "CART_CHANGE", e.LOYALTY_CHANGE = "LOYALTY_CHANGE"
  }(Ze || (Ze = {}));
  const Xe = u((e, t) => {
      const n = function(e, t) {
        const n = new Event(Q);
        return n.key = e, n.value = t, n
      }(e, t);
      document.dispatchEvent(n), console.debug("Targeting has changed:", n)
    }, 80),
    et = () => window.loomi_ctx.session.id;

  function tt(e) {
    return _(() => e.items.map(e => _(() => e.selling_plan_allocation.selling_plan.name.toLowerCase())).filter(e => !!e), [])
  }

  function nt() {
    return JSON.parse(localStorage.getItem("loomi-cart-history") || "[]")
  }

  function rt() {
    const e = _(() => window.loomi_ctx.sessionProducts);
    if (e) return e;
    const t = localStorage.getItem("loomi_session_products"),
      n = t ? JSON.parse(t) : [];
    return _(() => n.filter(e => "" != e.handle).reverse().slice(0, 20))
  }

  function ot(e) {
    return JSON.parse(localStorage.getItem(e) || "[]")
  }

  function it(e, t, n, r) {
    e = e || [], t = t || [];
    const o = _(() => t.filter(t => !e.find(n(t)))) || [],
      i = [...e, ...o].slice(0, 25);
    return i.length > 0 && localStorage.setItem(r, JSON.stringify(i)), i
  }

  function st() {
    return JSON.parse(localStorage.getItem("loomi_purchased_products") || "[]")
  }
  const ct = "vsly_params_history",
    at = "vsly_visited_pages",
    ut = function(e) {
      try {
        const t = e.matches ? ft.MOBILE : ft.DESKTOP,
          n = function() {
            if (lt != t) {
              q("device-listener", `device changed to ${t} from ${lt}`), window.loomi_ctx.deviceOverride = t === ft.MOBILE ? "m" : "d", lt = t;
              const e = _(() => window.visually.reload),
                n = function() {
                  if (e) return Promise.resolve(e()).then(function() {});
                  F("device-listener", "can't find reload function")
                }();
              if (n && n.then) return n.then(function() {})
            }
          }();
        return Promise.resolve(n && n.then ? n.then(function() {}) : void 0)
      } catch (e) {
        return Promise.reject(e)
      }
    };
  let lt;

  function dt() {
    a() ? function() {
      try {
        return Promise.resolve(v(() => c, 1e3, 10)).then(function() {
          return mt(), Promise.resolve()
        })
      } catch (e) {
        return Promise.reject(e)
      }
    }().catch(console.error) : mt()
  }

  function mt() {
    let e = _(() => window.vslyDesktopBreakpoint) || 960;
    e <= 0 && (e = 960);
    const t = window.matchMedia(`(max-width: ${e}px)`);
    t.removeEventListener("change", ut), t.addEventListener("change", ut)
  }
  var ft;
  ! function(e) {
    e.MOBILE = "MOBILE", e.DESKTOP = "DESKTOP"
  }(ft || (ft = {}));
  const ht = () => edgetag("getUserId");

  function pt() {
    const e = "vsly_edgetag";
    return P(() => (ht() && localStorage.setItem(e, ht()), !0)), _(ht) || localStorage.getItem(e)
  }
  const vt = "lmi_type",
    wt = "lmi_from",
    yt = "lmi_class",
    gt = "lmi_utm_data",
    _t = {
      utm_source: "source",
      utm_medium: "medium",
      utm_campaign: "campaign",
      utm_term: "term",
      utm_content: "content"
    },
    St = function(e, t) {
      void 0 === t && (t = 3);
      let n = e;
      for (let e = 0; e < t; e++) try {
        const e = decodeURIComponent(n);
        if (e === n) break;
        n = e
      } catch {
        break
      }
      return n
    },
    Et = function(e) {
      void 0 === e && (e = window.location.search);
      const t = {
        utm: {},
        lmi_params: {}
      };
      return _(() => new URLSearchParams(e)).forEach((e, n) => {
        if (e) {
          const r = _t[n],
            o = St(e);
          r ? t.utm[r] = o : function(e) {
            return _(() => [yt, wt, vt].includes(e))
          }(n) && (t.lmi_params[n] = o)
        }
      }), t
    };

  function Pt() {
    const e = function(e) {
      let t = [];
      const n = localStorage.getItem(gt);
      return null != n && (t = [...JSON.parse(n)].slice(0, 20)), e && (e.ts = f(), t = [e, ...t]), t
    }(function(e) {
      if (function(e) {
          return !e || "{}" === JSON.stringify(e)
        }(e)) return null;
      const t = {};
      return e.campaign && (t.campaign = e.campaign), e.medium && (t.medium = e.medium), e.source && (t.source = e.source), e.term && (t.term = e.term), e.content && (t.content = e.content), t
    }(_(() => Et().utm)));
    return localStorage.setItem(gt, JSON.stringify(e)), e
  }

  function At() {
    const e = _(() => Pt(), []);
    if (!Array.isArray(e) || 0 === e.length) return "";
    const t = e.filter(e => e.campaign);
    return 0 === t.length ? "" : _(() => t.reduce((e, t) => t.ts > e.ts ? t : e, t[0]).campaign, "") || ""
  }
  const It = function(e) {
      return Promise.resolve(bt()).then(function(t) {
        return new Promise((n, r) => {
          const o = t.transaction([Ct], "readonly").objectStore(Ct).get(e);
          o.onerror = e => {
            r("IDB e:r" + e.target.error)
          }, o.onsuccess = e => {
            n(e.target.result)
          }
        })
      })
    },
    bt = function() {
      try {
        const e = function() {
          if (!kt) return Promise.resolve(new Promise((e, t) => {
            const n = indexedDB.open(xt, 1);
            n.onerror = e => {
              t("IDB e:o" + e.target.error)
            }, n.onsuccess = t => {
              kt = t.target.result, e(kt)
            }, n.onupgradeneeded = e => {
              e.target.result.createObjectStore(Ct, {
                keyPath: "id"
              }).createIndex("id", "id", {
                unique: !0
              })
            }
          })).then(function() {})
        }();
        return Promise.resolve(e && e.then ? e.then(function() {
          return kt
        }) : kt)
      } catch (e) {
        return Promise.reject(e)
      }
    },
    xt = "VISUALLY_IO",
    Ct = xt;
  let kt = null;

  function Tt() {
    const e = {},
      t = window.loomi_ctx || {};
    t.productId && (e.productId = t.productId);
    const n = _(() => {
      const e = new URL(location.href).searchParams,
        t = "variant";
      return e.has(t) && function(e) {
        const t = Number(e),
          n = isNaN(t) ? Number(`${e}`.replace(/[^\d.]+/g, "")) || void 0 : t;
        if (void 0 !== n && 0 !== n) return `${n}`
      }(e.get(t))
    }) || t.variantId;
    return n && (e.variantId = n), e
  }

  function Nt() {
    return _(() => Ye().items.map(e => ({
      variantId: e.variant_id || 0,
      quantity: e.quantity || 0,
      productId: e.product_id || 0,
      price: e.price || 0
    }))) || []
  }
  const Ot = function(e) {
    return void 0 === e && (e = Ye()), _(() => (("spa" == window.vslyIntegrationType ? _(() => e.attributes.map(e => e.key)) : _(() => Object.keys(e.attributes))) || []).filter(e => !e.startsWith("vsly") && e.length < 20).slice(0, 50)) || []
  };

  function jt() {
    const e = new URL(window.location.href);
    return e.protocol + "//" + e.hostname + e.pathname
  }
  const Lt = function(e, t) {
    try {
      let n;
      const r = this.cart;
      if (!r) return Promise.resolve(0);
      const o = function() {
        try {
          var o = r.currency === e ? (n = 1, r.total_price / 100) : function() {
            if (t) return Promise.resolve(v(() => !!window.loomi_ctx.Currency, 100, 10)).then(function() {
              const t = (window.loomi_ctx.Currency.convert(r.total_price, r.currency, e) || 0) / 100;
              return n = 1, t
            })
          }()
        } catch (e) {
          return
        }
        return o && o.then ? o.then(void 0, function() {}) : o
      }();
      return Promise.resolve(o && o.then ? o.then(function(e) {
        return n ? e : 0
      }) : n ? o : 0)
    } catch (e) {
      return Promise.reject(e)
    }
  };

  function $t() {
    const e = _(() => this.cart.items);
    if (e && e.length > 0) {
      const t = et(),
        n = localStorage.getItem("vsly-last-atc-sid");
      if (!n) return !1;
      if (n !== t) return !0;
      const r = e.map(e => `${e.variant_id}`);
      return !!_(() => nt().find(e => !!e.sid && r.includes(`${e.variant_id}`) && `${e.sid}` != t))
    }
    return !1
  }

  function Rt(e) {
    return Ot(this.cart).includes(e)
  }

  function Dt(e, t) {
    function n(e) {
      return e.toLowerCase()
    }
    const r = {
      "==": t => n(t) == n(e),
      "!=": t => n(t) != n(e),
      contains: t => n(t).includes(n(e)),
      matches: t => new RegExp(e).test(t)
    };
    return !!this.CartSubs().find(e => r[t](e))
  }

  function Ut() {
    return tt(this.cart)
  }

  function Mt(e) {
    const t = this.cart;
    return !!_(() => t.items.find(t => t.handle === e))
  }

  function qt(e) {
    const t = this.cart;
    return !!_(() => t.items.find(t => !!t.tags && t.tags.includes(e)))
  }

  function Ft(e) {
    const t = this.cart;
    if (t.items.length <= 0) return !1;
    const n = _(() => t.items.filter(t => !!t.tags && t.tags.includes(e)));
    return _(() => n.length === t.items.length, !1)
  }

  function Bt(e) {
    const t = this.cart;
    return !!_(() => t.items.find(t => !!t.collections && t.collections.includes(e)))
  }

  function Jt() {
    return !0 === _(() => window.loomi_ctx.loyalty.isMember, !1)
  }

  function Vt() {
    return _(() => window.loomi_ctx.loyalty.pointsBalance, 0)
  }

  function Ht() {
    return _(() => window.loomi_ctx.loyalty.earnedPoints, 0)
  }
  const Gt = "__eventn_id";

  function zt() {
    const {
      id: e,
      firstSeen: t
    } = function(e) {
      const t = function(e) {
          try {
            const t = S(e),
              {
                firstSeen: n,
                id: r
              } = Qt(t);
            if (t) return {
              id: r,
              firstSeen: n || Zt()
            }
          } catch (e) {}
        }(e),
        n = function(e) {
          const t = window.localStorage.getItem(e),
            {
              id: n,
              firstSeen: r
            } = Qt(t);
          if (t) return {
            id: n,
            firstSeen: r || Zt()
          }
        }(e);
      if (!t && !n) {
        const {
          newId: t,
          newEpoch: n
        } = function() {
          const e = Math.random().toString(36).substring(2, 12),
            t = Zt();
          return {
            newId: e,
            newEpoch: t,
            value: Yt(e, t)
          }
        }();
        return Kt(t, n, e), {
          id: t,
          firstSeen: n
        }
      }
      if (!n && t) return Kt(t.id, t.firstSeen, e), t;
      if (!t && n) return Kt(n.id, n.firstSeen, e), n;
      const r = Math.min(t.firstSeen, n.firstSeen);
      let o = t.firstSeen <= n.firstSeen ? t.id : n.id;
      return Wt(t, n) && (o = t.id <= n.id ? t.id : n.id), n.id == t.id && n.firstSeen == t.firstSeen || Kt(o, r, e), {
        id: o,
        firstSeen: r
      }
    }(Gt);
    return {
      id: e,
      firstSession: Xt(t),
      firstSeen: t
    }
  }

  function Kt(e, t, n) {
    void 0 === n && (n = Gt);
    const r = Yt(e, t);
    _(() => localStorage.setItem(n, r)), ((e, t, n, r) => {
      _(() => window.loomi_ctx.cc) && !b() || (document.cookie = encodeURIComponent(e) + "=" + t + "; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT" + (n ? "; domain=" + n : "") + (r ? "; secure" : ""))
    })(n, r, document.location.hostname.replace("www.", "").replace("checkout.", ""), "http:" !== document.location.protocol)
  }
  const Wt = (e, t) => e.firstSeen === t.firstSeen && e.id !== t.id;

  function Qt(e) {
    return {
      firstSeen: _(() => parseInt(e.split(".")[1]), null),
      id: _(() => e.split(".")[0])
    }
  }

  function Yt(e, t) {
    return `${e}.${t}`
  }

  function Zt() {
    return Math.trunc((new Date).getTime() / 1e3)
  }
  const Xt = e => (new Date).getTime() / 1e3 - e <= 7200,
    en = "vsly_vid",
    tn = "lmi_debug";

  function nn(e) {
    return _(() => new URL(window.location.href).searchParams.get(e) || void 0)
  }
  const rn = ["Roboto", "Open Sans", "Fredoka", "Fredoka", "Smooch Sans", "Rubik", "Lato", "Poppins", "Oswald", "League Spartan", "Noto Sans", "Raleway", "Merriweather", "Playfair Display", "Inter", "JetBrains Mono", "Jetbrains Mono"];

  function on(e) {
    try {
      (function(e) {
        const t = e.flatMap(e => _(() => e.code)).filter(e => !!e).filter(e => "widget" === e.kind).map(e => sn(e.value.env)),
          n = new Map;
        return function(e, t) {
            e.forEach(e => {
              ! function(e, t) {
                const n = new Map;
                e.forEach(e => {
                    let [t, r] = e;
                    const o = ".font.";
                    if (t.includes(o)) {
                      const e = t.split(o)[0] + o;
                      n.has(e) || n.set(e, {
                        families: new Set,
                        weights: new Set
                      });
                      const i = n.get(e);
                      if (t.endsWith(".fontFamily")) i.families.add(r);
                      else if (t.endsWith(".fontWeight")) {
                        const e = parseInt(r, 10) || 500;
                        i.weights.add(e)
                      }
                    }
                  }),
                  function(e, t) {
                    e.forEach(e => {
                      if (e.families.size > 0) {
                        const n = e.weights.size > 0 ? e.weights : new Set([500]);
                        e.families.forEach(e => {
                          cn(t, e, n)
                        })
                      }
                    })
                  }(n, t)
              }(Object.entries(e), t),
              function(e, t) {
                const n = function(e) {
                  const t = ".text.isRichText",
                    n = new Set;
                  return e.forEach(e => {
                    let [r, o] = e;
                    if (r.endsWith(t) && !0 === o) {
                      const e = `${r.split(t)[0]}.text.value`;
                      n.add(e)
                    }
                  }), n
                }(e);
                0 !== n.size && e.filter(e => {
                  let [t] = e;
                  return n.has(t)
                }).forEach(e => {
                  let [n, r] = e;
                  return function(e, t) {
                    var n;
                    if (e) try {
                      ! function(e, t) {
                        e.querySelectorAll("[style]").forEach(e => {
                          const n = e.style;
                          if (n.fontFamily) {
                            const e = n.fontFamily,
                              r = parseInt(n.fontWeight, 10) || 500;
                            cn(t, e, new Set([r]))
                          }
                        })
                      }((n = decodeURIComponent(e), (new DOMParser).parseFromString(n, "text/html")), t)
                    } catch (e) {
                      console.error("Failed to parse rich text HTML", e)
                    }
                  }(r, t)
                })
              }(Object.entries(e), t)
            })
          }(t, n),
          function(e) {
            return Array.from(e.entries()).map(e => {
              let [t, n] = e;
              return {
                family: t,
                weights: Array.from(n).sort()
              }
            })
          }(n)
      })(e).forEach(e => {
        let {
          family: t,
          weights: n
        } = e;
        return function(e, t) {
          return Qe(N("appendFont", "div", JSON.stringify({
            family: e,
            weights: t
          })))
        }(t, n)
      })
    } catch (e) {
      F("failed to install custom fonts", e)
    }
  }

  function sn(e) {
    const t = {};
    for (const n in e)
      if ("object" != typeof e[n] || Array.isArray(e[n])) t[n] = e[n];
      else {
        const r = sn(e[n]);
        for (const e in r) t[`${n}.${e}`] = r[e]
      } return t
  }

  function cn(e, t, n) {
    if (!t) return;
    const r = t.replaceAll("'", "").replaceAll('"', "");
    if (! function(e) {
        return rn.includes(e)
      }(r)) return;
    e.has(r) || e.set(r, new Set);
    const o = e.get(r);
    o.add(400), n.forEach(e => {
      o.add(e)
    })
  }
  const an = function(e, t, n, r) {
      void 0 === n && (n = !0), void 0 === r && (r = void 0);
      try {
        const o = _(() => window.loomi_api.addToCart),
          i = function() {
            if (o) return Promise.resolve(window.loomi_api.addToCart(e, t, n, r)).then(function() {})
          }();
        return Promise.resolve(i && i.then ? i.then(function() {}) : void 0)
      } catch (e) {
        return Promise.reject(e)
      }
    },
    un = function(e) {
      try {
        let n;

        function t(t) {
          return n ? t : e.map(e => {
            const t = String(e.id),
              n = dn.get(pn(e.id)) || r[t];
            return n ? {
              ...e,
              variants: Array.isArray(e.variants) ? e.variants.map(e => {
                const t = vn(e, n);
                return t ? {
                  ...e,
                  fixed_price_currency: t.price.currencyCode,
                  price: parseFloat(t.price.amount),
                  compare_at_price: t.compareAtPrice ? parseFloat(t.compareAtPrice.amount) : e.compare_at_price
                } : e
              }) : e.variants
            } : e
          })
        }
        if (!e || 0 === e.length) return Promise.resolve(e);
        let r = {};
        const {
          productIdsToFetch: o
        } = wn(e), i = function() {
          if (o.length > 0) return function(t, n) {
            try {
              var o = Promise.resolve(ln(e)).then(function(e) {
                r = e, Object.entries(r).forEach(e => {
                  let [t, n] = e;
                  return dn.set(pn(t), n)
                })
              })
            } catch (e) {
              return n(e)
            }
            return o && o.then ? o.then(void 0, n) : o
          }(0, function(t) {
            return console.error("vsly", t), n = 1, e
          })
        }();
        return Promise.resolve(i && i.then ? i.then(t) : t(i))
      } catch (s) {
        return Promise.reject(s)
      }
    },
    ln = function(e) {
      try {
        return Promise.resolve(fetch(`https://${fn()}/api/2025-10/graphql.json`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            query: mn(e)
          })
        })).then(function(e) {
          if (!e.ok) throw new Error(`Shopify API error: ${e.status}`);
          return Promise.resolve(e.json()).then(function(e) {
            if (e.errors) throw new Error(`GraphQL errors: ${JSON.stringify(e.errors)}`);
            const t = {};
            for (const n in e.data) {
              const r = e.data[n];
              if (!r) continue;
              const o = hn(r.id);
              t[o] = {
                variants: {}
              }, r.variants.edges.forEach(e => {
                const n = hn(e.node.id);
                t[o].variants[n] = {
                  price: e.node.price,
                  compareAtPrice: e.node.compareAtPrice
                }
              })
            }
            return t
          })
        })
      } catch (e) {
        return Promise.reject(e)
      }
    },
    dn = new class extends H {
      constructor(e, t) {
        super(new z(e), t)
      }
    }("p", 18e5);

  function mn(e) {
    const {
      productIdsToFetch: t,
      maxVariantsPerProduct: n
    } = wn(e), r = se();
    return `\n    query GetProductPrices ${r?`@inContext(country: ${r})`:""} {\n      ${t.map(e=>`\n    product_${e}: product(id: "gid://shopify/Product/${e}") {\n      id\n      variants(first: ${n}) {\n        edges {\n          node {\n            id\n            price {\n              amount\n              currencyCode\n            }\n            compareAtPrice {\n              amount\n              currencyCode\n            }\n          }\n        }\n      }\n    }\n  `).join("\n")}\n    }\n  `
  }
  const fn = () => window.loomi_ctx.storeAlias.toLowerCase().replaceAll("_", "-") + ".myshopify.com";

  function hn(e) {
    const t = e.match(/\/(\d+)$/);
    return t ? t[1] : e
  }
  const pn = e => String(e) + se(),
    vn = (e, t) => {
      let n = String(e.variant_id);
      const r = Object.keys(t.variants);
      return 1 == r.length && (n = r[0]), t.variants[n]
    },
    wn = e => {
      let t = 1,
        n = !0;
      return {
        productIdsToFetch: e.map(e => {
          if (!Array.isArray(e.variants)) return {
            id: String(e.id),
            needsFetch: !1
          };
          const r = new Set(e.variants.map(e => e.price)).size > 1;
          r && (n = !1), e.variants.length > t && (t = e.variants.length);
          const o = ((e, t, n) => {
            if (!e) return !0;
            if (!n) return !1;
            const r = e.variants || {};
            return t.some(e => void 0 === r[e])
          })(dn.get(pn(e.id)), e.variants.map(e => String(e.variant_id)), r);
          return {
            id: String(e.id),
            needsFetch: o
          }
        }).filter(e => e.needsFetch).map(e => e.id),
        maxVariantsPerProduct: n ? 1 : t
      }
    },
    yn = new K("recs_cache", 300001),
    gn = function(e, t) {
      try {
        const n = Promise.resolve([]);
        return Promise.resolve(function(r, o) {
          try {
            var i = function() {
              if (!e) return n;
              let r = _(() => e.recommendationOptions);
              if (!r) return n;
              var o;
              ! function(e) {
                const {
                  productId: t,
                  variantId: n
                } = Tt();
                (t || n) && (e.productId = {
                  productId: t,
                  variantId: n
                })
              }(r), r.cartItems = (o = Nt(), _(() => o.filter(e => !!e.productId).map(e => ({
                productId: `${e.productId}`,
                variantId: `${e.variantId}`,
                quantity: e.quantity || 1
              })))), r.currency = _(() => Ye().currency || "USD", "USD"), r.cart_total = _(() => Ye().total_price, 0), _(() => +Date.now() - window.loomi_ctx.last_vid_atc.ts < 5e3) && (r.last_vid_atc = window.loomi_ctx.last_vid_atc), r.respSize = _(() => window.visually.recsPerVariant[t.variantId]), ["RECENTLY_VIEWED", "VIEWED_WITH_RECENTLY_VIEWED"].find(e => _n(r, e)) && (r.recentlyViewed = rt().filter(e => !!e.productId).map(e => ({
                productId: `${e.productId}`,
                variantId: `${e.variantId||""}`,
                ...e.ts ? {
                  ts: e.ts
                } : {}
              })));
              const i = st();
              return i.length > 0 && (r.pastPurchases = i), (_n(r, "CART_ITEMS") || function(e) {
                return _(() => !!e.layeredRuling.find(e => "latest_added" == e.ruleCond.itemSelection))
              }(r)) && (r.cartHistory = In()), r.userId = _(() => window.loomi_ctx.userId, ""), t && (r.widgetContext = t), _(() => !!window.loomi_ctx.storeAlias) && (r.storeAlias = window.loomi_ctx.storeAlias), r.locale = _(() => window.Shopify.locale) || _(() => window.visually.locale), E() && (r.clientId = E()), r.country = se(), Promise.resolve(function(e, t) {
                const n = _(() => window.loomi_api.updateRecsOpts),
                  r = _(() => n.get(function(e) {
                    return e.widgetId + e.experienceId + e.variantId + e.sectionId
                  }(e))(t), t);
                return _(() => n.get(window.loomi_ctx.storeAlias)(r), r)
              }(t, r)).then(function(e) {
                return r = e, Promise.resolve(An(r))
              })
            }()
          } catch (e) {
            return o(e)
          }
          return i && i.then ? i.then(void 0, o) : i
        }(0, function(e) {
          return F("loomi-widget,recProducts failed:", e), n
        }))
      } catch (e) {
        return Promise.reject(e)
      }
    };

  function _n(e, t) {
    return e.type === t || _(() => e.strategyPerSlot.find(e => e.strategy === t)) || _(() => !!Object.values(e.conditions).find(e => e.qbProps.envKey === t)) || _(() => !!e.layeredRuling.find(e => e.strategy === t || !!_(() => e.strategyPerSlot.slots.find(e => e.strategy === t))))
  }

  function Sn(e) {
    const t = function() {
      const e = window.innerWidth;
      return e <= 360 ? 200 : e <= 480 ? 360 : e <= 640 ? 480 : e <= 768 ? 640 : e <= 960 ? 768 : 1024
    }();
    e.products.forEach(e => {
      const n = new URL(e.image.src);
      n.searchParams.set("width", `${Math.min(t,e.image.width||1280)}`), e.image.src = n.href
    })
  }

  function En() {
    return `https://${A(window.loomi_ctx.env)}/api/recommendations/web/public/v2/recommend`
  }
  const Pn = new Map,
    An = function(e) {
      try {
        function t() {
          return _(() => o.products)
        }
        const n = g(e),
          r = W(n);
        let o = yn.get(r);
        const i = function() {
          if (!o) {
            let e = !0;
            return me("kill-locale-currency") && (e = !1), Promise.resolve(((e, t, n) => {
              if (Pn.has(e)) return Pn.get(e);
              const r = window.vslyNativeFetch || window.fetch,
                o = function() {
                  try {
                    return Promise.resolve(function(e, o) {
                      try {
                        var i = function() {
                          function e() {
                            return Promise.resolve(o.json()).then(function(e) {
                              const t = function() {
                                if (e.fetchPrices && n) return Promise.resolve(un(e.products)).then(function(t) {
                                  e.products = t
                                })
                              }();
                              return t && t.then ? t.then(function() {
                                return e
                              }) : e
                            })
                          }
                          let o;
                          const i = t.length > 1e4 && !me("disable-recs-post") ? Promise.resolve(r(En(), {
                            method: "POST",
                            headers: {
                              "Content-Type": "text/plain"
                            },
                            body: t
                          })).then(function(e) {
                            o = e
                          }) : Promise.resolve(r(`${En()}?q=${t}`)).then(function(e) {
                            o = e
                          });
                          return i && i.then ? i.then(e) : e()
                        }()
                      } catch (e) {
                        return o(!0, e)
                      }
                      return i && i.then ? i.then(o.bind(null, !1), o.bind(null, !0)) : o(!1, i)
                    }(0, function(t, n) {
                      if (Pn.delete(e), t) throw n;
                      return n
                    }))
                  } catch (e) {
                    return Promise.reject(e)
                  }
                }();
              return Pn.set(e, o), o
            })(r, n, e)).then(function(e) {
              o = e, _(() => [Sn, window.loomi_api.onRecsResp].forEach(e => e && e(o))), yn.set(r, o)
            })
          }
        }();
        return Promise.resolve(i && i.then ? i.then(t) : t())
      } catch (s) {
        return Promise.reject(s)
      }
    },
    In = () => nt().map(e => {
      const t = {
        ...e
      };
      return delete t.sid, t
    });

  function bn(e) {
    return `vsly_pi_${e}`
  }

  function xn(e) {
    return `vsly_hbt_${e}`
  }

  function Cn(e) {
    return `vsly_hbc_${e}`
  }

  function kn(e) {
    return Array(e).fill(0).map(() => Math.floor(10 * Math.random())).join("")
  }

  function Tn() {
    try {
      const e = _(() => window.vslyAntiFlickerReveal, void 0);
      e && e()
    } catch (e) {}
  }
  const Nn = function(e, t) {
      try {
        if (y(e) || y(t)) return Promise.resolve({
          products: []
        });
        const n = function(e, t) {
          const n = window.loomi_ctx.storeAlias || "",
            r = new URLSearchParams({
              byHandle: g({
                handles: e
              }),
              al: n,
              slimResp: "1"
            });
          return t && t.length > 0 && r.set("metafields", g({
            fields: t
          })), `${En()}?${r.toString()}`
        }(e, t);
        return Promise.resolve(fetch(n)).then(function(e) {
          if (!e.ok) throw new Error(`vsly 400 ${e.statusText}`);
          return e.json()
        })
      } catch (e) {
        return Promise.reject(e)
      }
    },
    On = function(e) {
      try {
        try {
          const t = g(e),
            n = window.loomi_ctx.storeAlias,
            r = W(`${n}_${t}_${se()}`),
            o = Ln.get(r);
          if (o) return Promise.resolve(o);
          if ($n.has(r)) return Promise.resolve($n.get(r));
          const i = function() {
            try {
              return Promise.resolve(function(e, o) {
                try {
                  var i = function(e, o) {
                    try {
                      var i = function() {
                        const e = new URL(En());
                        e.searchParams.set("al", n), e.searchParams.set("productQuery", t);
                        const o = window.vslyNativeFetch || window.fetch;
                        return Promise.resolve(o(e.toString(), {
                          method: "GET",
                          headers: {
                            Accept: "application/json"
                          }
                        })).then(function(e) {
                          return e.ok ? Promise.resolve(e.json()).then(function(e) {
                            return Promise.resolve(function(e) {
                              try {
                                if (!e || !e.results || "object" != typeof e.results) return Promise.resolve({
                                  results: {}
                                });
                                const t = e.results,
                                  n = function(e) {
                                    return Object.keys(e).map(t => {
                                      const n = e[t];
                                      return n && n.id ? {
                                        key: t,
                                        product: n
                                      } : null
                                    }).filter(e => !!e)
                                  }(t);
                                if (0 === n.length) return Promise.resolve({
                                  ...e,
                                  results: t
                                });
                                let r = n.map(e => e.product);
                                return r = function(e) {
                                  const t = {
                                    products: e
                                  };
                                  return Sn(t), t.products
                                }(r), Promise.resolve(jn(r)).then(function(o) {
                                  return r = o, r = function(e) {
                                      const t = window.loomi_api;
                                      if (!t || !t.onRecsResp) return e;
                                      try {
                                        const n = {
                                          products: e
                                        };
                                        return t.onRecsResp(n), n.products
                                      } catch (t) {
                                        return F("onRecsResp hook failed", t), e
                                      }
                                    }(r),
                                    function(e, t, n) {
                                      t.forEach((t, r) => {
                                        const o = n[r];
                                        o && o.id && (e[t.key] = o)
                                      })
                                    }(t, n, r), {
                                      ...e,
                                      results: t
                                    }
                                })
                              } catch (e) {
                                return Promise.reject(e)
                              }
                            }(e)).then(function(e) {
                              return Ln.set(r, e), e
                            })
                          }) : {
                            results: {}
                          }
                        })
                      }()
                    } catch (e) {
                      return o(e)
                    }
                    return i && i.then ? i.then(void 0, o) : i
                  }(0, function(e) {
                    return F("queryProducts failed:", e), {
                      results: {}
                    }
                  })
                } catch (e) {
                  return o(!0, e)
                }
                return i && i.then ? i.then(o.bind(null, !1), o.bind(null, !0)) : o(!1, i)
              }(0, function(e, t) {
                if ($n.delete(r), e) throw t;
                return t
              }))
            } catch (e) {
              return Promise.reject(e)
            }
          }();
          return $n.set(r, i), Promise.resolve(i)
        } catch (e) {
          return F("queryProducts setup failed:", e), Promise.resolve({
            results: {}
          })
        }
      } catch (e) {
        return Promise.reject(e)
      }
    },
    jn = function(e) {
      try {
        return me("kill-locale-currency") || _(() => !Array.isArray(e[0].variants)) ? Promise.resolve(e) : Promise.resolve(un(e))
      } catch (e) {
        return Promise.reject(e)
      }
    },
    Ln = new K("ai_recs_cache", 300001),
    $n = new Map,
    Rn = function(e, t, n) {
      try {
        const o = zt(),
          i = function(e, t, n) {
            const r = function() {
              const e = Nt(),
                t = {
                  path: window.location.pathname,
                  host: window.location.hostname
                };
              _(() => e.length) > 0 && (t.cartItems = e);
              const n = _(() => Ye().token);
              n && (t.cartToken = n);
              const r = Pt();
              r && (t.trafficSources = r), t.productsSeenInSession = rt(), t.isCustomer = !!E(), t.query = window.location.search || "", t.hash = window.location.hash || "";
              const o = Ot();
              return o && (t.cartAttributes = o), t
            }();
            r.storeAlias = e;
            const o = E();
            o && (r.clientId = o), r.anonymousId = t.id, r.firstSeen = t.firstSeen, r.firstSession = t.firstSession, r.gaId = _(() => document.cookie.split(";").map(e => e.split("=")).find(e => {
              let [t, n] = e;
              return "_ga" == t.trim()
            })[1], "");
            const i = window.loomi_ctx;
            r.customerTags = _(() => i.ctags.slice(0, 20)), r.landingPage = _(() => i.session.landing_page), r.hasSubs = !!_(() => tt(Ye()).length > 0);
            const s = pt();
            s && (r.edgetag = s);
            const c = function() {
                try {
                  const e = _(() => new URL(window.location.href));
                  if (_(() => e.searchParams.get("forceOverride"))) {
                    const t = _(() => e.searchParams.get("targeting"));
                    if (t) return JSON.parse(decodeURIComponent(escape(atob(t))))
                  }
                } catch (e) {
                  F("preview overrides", e)
                }
                return {}
              }(),
              a = ot(ct),
              u = function() {
                const e = ot(at);

                function t(e) {
                  return new Date(e.ts).valueOf()
                }

                function n() {
                  const e = new URL(location.href);
                  return ["vslyvid", "vslywgid", "vslysid", "lmi_preview", "targeting", "vsly_vid"].forEach(t => e.searchParams.delete(t)), e.search || ""
                }
                return It(at).then(r => {
                  const o = {
                      ts: new Date,
                      name: jt(),
                      search: _(n, "")
                    },
                    i = !!o.search,
                    s = (_(() => r.visits) || e || []).filter(e => !i || !(e.name === o.name && !e.search)).filter(e => !(e.name === o.name && (o.search === e.search || i && !e.search))).sort((e, n) => t(n) - t(e)).slice(0, 500);
                  var c;
                  s.unshift(o), (c = {
                    id: at,
                    visits: s
                  }, Promise.resolve(bt()).then(function(e) {
                    return new Promise((t, n) => {
                      const r = e.transaction([Ct], "readwrite").objectStore(Ct).put(c);
                      r.onerror = e => {
                        n("IDB e:w" + e.target.error)
                      }, r.onsuccess = () => {
                        t("")
                      }
                    })
                  })).catch()
                }).catch(), it([{
                  ts: f(),
                  name: jt()
                }], e, e => t => e.name === t.name, at)
              }(),
              l = st(),
              d = {
                deviceKind: _(() => window.loomi_ctx.deviceOverride, void 0),
                ...n || {}
              },
              m = !!_(() => navigator.userAgent.includes("Macintosh") && "ontouchend" in document),
              h = _(() => window.innerWidth, 0),
              p = _(() => window.vslyDesktopBreakpoint) || 960,
              v = _(() => S("cart_currency")) || _(() => Ye().currency) || "",
              w = _(() => i.current_product);
            if (w) {
              r.oos = _(() => w.oos), r.price = _(() => w.price), r.iq = _(() => w.variants.reduce((e, t) => t.iq + e, 0)), r.productId = _(() => {
                const e = Tt().productId;
                return Number.isFinite(Number(e)) ? e.toString() : ""
              }, "");
              const e = 1 * i.variantId;
              Number.isFinite(e) && (r.vid = e)
            }
            const y = _(et);
            "spa" == window.vslyIntegrationType && (r.spa = !0);
            const g = _(() => i.ttl);
            return {
              cartCurrency: v,
              ...r,
              queryHistory: a,
              isIPadPro: m,
              windowInnerWidth: h,
              desktopBreakpoint: p,
              visitedPages: u,
              ttl: Number.isFinite(g) ? g : 0,
              purchasedLineItems: l,
              sid: y,
              ...d || {},
              ...c || {}
            }
          }(e, o, n);
        return Promise.resolve(function(e, t) {
          try {
            const n = g(t),
              o = function(e) {
                const {
                  previewKey: t,
                  debugAllocator: n,
                  previewVariantId: o
                } = function() {
                  [r, en].map(e => {
                    const t = nn(e);
                    t && sessionStorage.setItem(e, t)
                  });
                  const e = sessionStorage.getItem(r),
                    t = sessionStorage.getItem(en);
                  return {
                    previewKey: e,
                    debugAllocator: nn(tn),
                    previewVariantId: t
                  }
                }();
                let i = new URL(e);
                return t && i.searchParams.append(r, t), n && i.searchParams.append(tn, "true"), o && i.searchParams.append(en, o), i
              }(qn(e).cfgUrl);
            o.searchParams.append("q", n);
            const i = W(o.href),
              s = window.vslyNativeFetch || window.fetch,
              c = Un.has(i) ? Un.get(i) : s(o.href, {
                priority: "high"
              }).finally(() => Un.delete(i));
            return Un.set(i, c), Promise.resolve(c).then(function(e) {
              if (e.ok) return Promise.resolve(e.json());
              throw new Error(`failed to load config: ${e.statusText}`)
            })
          } catch (e) {
            return Promise.reject(e)
          }
        }(t, i)).then(function(e) {
          return _(() => {
              window.loomi_ctx.audiences = e.audiences, _(() => e.audiences && localStorage.setItem("vsly_audiences", JSON.stringify(e.audiences))), window.loomi_ctx.testedThemes = e.testedThemes || []
            }),
            function(e) {
              const t = e.currentVariant;
              window.loomi_ctx = {
                ...window.loomi_ctx || {}
              };
              const n = _(() => t.pid);
              n && (window.loomi_ctx.productId = `${n}`);
              const r = _(() => t.vid);
              r && (window.loomi_ctx.variantId = `${r}`);
              const o = _(() => t.price);
              o && (window.loomi_ctx.variantPrice = o);
              const i = _(() => t.meta);
              i && (window.loomi_ctx.productMeta = `${i}`)
            }(e), it(e.queryHistory, i.queryHistory, e => t => t.v === e.v && t.k === e.k, ct),
            function(e) {
              var t;
              (t = e.experiments) && t.findIndex(e => {
                const t = _(() => e.clientTargetingFormula.toString(), "") || "";
                return t.includes("CartItemHasTag") || t.includes("CartItemHasCollection") || t.includes("AllCartItemsHasTag")
              }) > -1 || !0 === _(() => e.flags["sdk-enable-cart-enrichment"], !1) && (e.flags["sdk-enable-cart-enrichment"] = !1)
            }(e), {
              configuration: e,
              tracking: o
            }
        })
      } catch (e) {
        return Promise.reject(e)
      }
    },
    Dn = "vslyb",
    Un = new Map;

  function Mn(e) {
    if ("number" == typeof e.chance && e.chance < 100) {
      const t = {
        experienceId: e.name,
        variantId: e.variant,
        storeAlias: _(() => window.loomi_ctx.storeAlias),
        anonymousId: _(() => window.loomi_ctx.userId)
      };
      e.version && (t.version = e.version);
      const r = g(t),
        o = _(() => window.loomi_ctx.env, n.PROD),
        i = new URL(qn(o).cfgUrl.replace("/allocate", "/match"));
      i.searchParams.append("q", r), fetch(i)
    }
  }

  function qn(e) {
    let t = "/api/allocator/web/public/v2/allocate";
    return Bn(e) && (t = "/allocate"), {
      cfgUrl: `${Fn(e)}${t}`
    }
  }

  function Fn(e) {
    return Bn(e) ? "http://localhost:8080" : `https://${A()}`
  }

  function Bn(e) {
    return [n.TEST, n.LOCAL].includes(e)
  }

  function Jn(e) {
    window.visually = {
      ..._(() => window.visually) || {},
      flags: e
    }, localStorage.setItem("loomi-flags", JSON.stringify(e))
  }

  function Vn(e, t, n) {
    const r = function(r) {
      _(() => !!r.persisted) && (window.loomi_ctx.cart = void 0, n(e, t, 500).catch(e => {
        F("failed reloading sdk", e)
      }))
    };
    _(() => !window.loomi_ctx.pageshow) && (q("pageshow initialized"), s().then(() => {
      window.addEventListener("pageshow", r), window.loomi_ctx.pageshow = !0
    }))
  }

  function Hn(e) {
    return `${e.name}-${e.variant}`
  }

  function Gn(e) {
    return `${e.name}-${e.variant}-${e.version||0}`
  }

  function zn(e) {
    $.forEach(t => {
      e && !e(t) || (t.undo(), t.do())
    })
  }
  const Kn = (e, t) => !!_(() => e.audiences.includes(t)),
    Wn = e => {
      const t = {},
        n = Kn(e, "d"),
        r = Kn(e, "m");
      return n || r ? (_(() => e.experiments.filter(e => !!e.code).forEach(e => e.code.forEach(r => {
        const o = _(() => r.value.env.general.recsCount),
          i = _(() => n ? o.desktop.value : o.value);
        i > (t[e.variant] || 0) && "number" == typeof i && (t[e.variant] = i)
      }))), t) : t
    },
    Qn = function(e) {
      void 0 === e && (e = {});
      try {
        const t = Z + X;
        return we(Z, X), Promise.resolve(v(() => _(() => window.visually.widgets[t]), 100, 50)).then(function() {
          const n = "#vsly-overlay",
            r = "#vslyp-vsly-overlay";
          if (!document.querySelector(r)) {
            const e = document.createElement("div");
            e.id = n.replace("#", ""), e.textContent = ".", e.style.opacity = "0", e.style.display = "none", document.body.appendChild(e);
            const t = document.createElement("script");
            t.id = r.replace("#", ""), t.type = "text/props", t.textContent = "{}", document.body.appendChild(t)
          }
          return window.visually.widgets[t](n), Promise.resolve(v(() => !!window.loomi_api._openProductOverlay, 100, 50)).then(function() {
            window.loomi_api._openProductOverlay((e => {
              const t = _(() => e.widgetContext) || _(() => e.mpCtx) || _(() => e.overlay.mpCtx);
              return t ? {
                ...e,
                overlay: {
                  ...e.overlay || {},
                  mpCtx: t
                }
              } : e
            })(e))
          })
        })
      } catch (e) {
        return Promise.reject(e)
      }
    };

  function Yn(e, t, n, r) {
    const [o, i] = t.split(",");
    return new Promise(t => {
      It(at).then(n => {
        for (const s of function(e, t, n) {
            const r = (new Date).valueOf();
            return (_(() => e.visits, []) || []).filter(e => {
              const o = new Date(e.ts).valueOf(),
                i = 36e5,
                s = parseInt(t);
              switch (n.replaceAll('"', "")) {
                case "hours":
                  return o > r - s * i;
                case "weeks":
                  return o > r - s * i * 24 * 7;
                case "days":
                  return o > r - s * i * 24;
                default:
                  return !1
              }
            })
          }(n, o, i))
          if (r || rr(e)) {
            if (Xn(s, e)) return void t(!0)
          } else if (Zn(s, e)) return void t(!0);
        t(!1)
      })
    })
  }

  function Zn(e, t) {
    return !![er(e), nr(er(e))].find(e => e.includes(t))
  }

  function Xn(e, t) {
    const n = e.search || "",
      r = er(e) + n;
    return !![r, nr(r)].find(e => e.includes(tr(t)))
  }

  function er(e) {
    return tr(function(e) {
      const t = _(() => new URL(e));
      if (!t) return e;
      const n = t.pathname.split("/");
      return /^[a-z]{2}-[a-z]{2}$/.test(n[1]) && (t.pathname = n.slice(2).join("/")), tr(t.href)
    }(e.name))
  }

  function tr(e) {
    const t = _(() => new URL(e));
    return t && t.pathname.endsWith("/") ? "/" === t.pathname ? t.href.slice(0, -1) : (t.pathname = t.pathname.slice(0, -1), t.href) : e
  }

  function nr(e) {
    return e.includes("/products/") && e.includes("/collections/") ? e.replace(/\/collections\/[^/]+/, "") : e
  }

  function rr(e) {
    return _(() => !!new URL(e).search)
  }
  const or = function(e) {
      try {
        return yr(), hr(e.clientTargetingFormula) && (ar[lr(e)] = e), Promise.resolve(wr(e)).then(function(t) {
          return t ? (mr(e), !0) : (q(`exp: ${e.gaName} not run client targeting: ${e.clientTargetingFormula} => false`), !1)
        })
      } catch (e) {
        return Promise.reject(e)
      }
    },
    ir = function(e) {
      try {
        const t = Object.entries(ar).map(t => {
          let [n, r] = t;
          return hr(r.clientTargetingFormula) && (ar[lr(r)] = r), {
            exp: r,
            shouldBeApplied: sr(r.clientTargetingFormula, e, r.name),
            hasBeenApplied: () => !!ur[lr(r)]
          }
        });
        return Promise.resolve(pr(t)).then(function(e) {
          ! function(e) {
            e.filter(e => e.hasBeenApplied() && !e.shouldBeApplied).flatMap(e => {
              const t = _(() => ur[lr(e.exp)]);
              return t && delete ur[lr(e.exp)], t
            }).forEach(e => {
              _(e.revert)
            })
          }(e),
          function(e) {
            e.filter(e => e.shouldBeApplied && !e.hasBeenApplied()).forEach(e => {
              var t, n, r;
              mr(e.exp), t = e.exp, n = fr, void 0 === r && (r = C()), n.has(t.variant) || (Pr(r, t), n.add(t.variant), Mn(t))
            })
          }(e)
        })
      } catch (e) {
        return Promise.reject(e)
      }
    },
    sr = function(e, t, n) {
      void 0 === n && (n = "");
      try {
        if (void 0 === t && (t = dr()), hr(e)) {
          t.Total = Lt, t.CartHasSubs = Dt, t.CartSubs = Ut, t.CartHasItem = Mt, t.CartItemHasTag = qt, t.AllCartItemsHasTag = Ft, t.CartItemHasCollection = Bt, t.IsLoyaltyCustomer = Jt, t.LoyaltyPointsBalance = Vt, t.LoyaltyPointsEarned = Ht, t.PageVisit = Yn, t.CustomerTag = gr, t.IsGuest = _r, t.AbandonedCart = $t, t.CartAttrName = Rt, t.UseCaseId = n;
          const r = () => new Function(`\n        const c = arguments[0];\n        return ${function(e){const t=t=>_(()=>e.includes(t));for(const n of["PageVisit","Total"])t(`c.${n}`)&&!t(`await c.${n}`)&&(e=`( ${e.replaceAll(`c.${n}`,`await c.${n}`)} )`);return!t("(async ()")&&t("await")?`(async () => (${e}))()`:e}(e)}`)(t);
          return Promise.resolve(new Promise(e => e(r())).catch(e => (F("client side formula err", e), !1)))
        }
        return Promise.resolve(!0)
      } catch (e) {
        return Promise.reject(e)
      }
    };
  let cr = !1;
  const ar = {},
    ur = {},
    lr = e => `${e.name}-${e.variant}`;

  function dr() {
    return {
      cart: Ye(),
      Total: Lt,
      CartHasSubs: Dt,
      CartSubs: Ut,
      CartHasItem: Mt,
      CartItemHasTag: qt,
      AllCartItemsHasTag: Ft,
      CartItemHasCollection: Bt,
      IsLoyaltyCustomer: Jt,
      LoyaltyPointsBalance: Vt,
      LoyaltyPointsEarned: Ht,
      PageVisit: Yn,
      CustomerTag: gr,
      IsGuest: _r,
      AbandonedCart: $t,
      CartAttrName: Rt
    }
  }

  function mr(e) {
    const t = {
      experienceId: e.name,
      variantId: e.variant,
      gaExperienceName: e.gaName,
      gaVariantName: e.gaVariant,
      reportGa: e.ga,
      publishedAt: e.publishedAt,
      version: e.version
    };
    var n;
    n = _(() => e.code.map(e => {
        try {
          return function(e, t) {
            if ("compound" === e.kind) {
              const n = e.value,
                r = function(e, t, n, r, o) {
                  const i = [];
                  return n && "" !== n && i.push(N(e, t, n)), r && "" !== r && i.push(N("appendCss", t, r)), o && "" !== o && i.push(N("appendJs", t, o)), i
                }(n.htmlKind, e.selector, n.html, n.css, n.js),
                o = N(e.kind, e.selector, r);
              o.options = t;
              const i = Qe(o);
              return i.htmlId = r[0].id, r[1] && (i.cssId = r[1].id), r[2] && (i.jsId = r[2].id), i
            }
            if ("widget" === e.kind) {
              const n = N(e.kind, e.selector, "");
              n.options = t, n.block = e;
              const r = function(e, t) {
                const n = _(() => e.block.value);
                return {
                  ...t,
                  sectionId: _(() => n.env.sectionId),
                  widgetId: _(() => n.widgetId),
                  widgetVersion: _(() => n.version)
                }
              }(n, t);
              ! function(e, t) {
                const n = _(() => e.block.value.env);
                n && Object.entries(t).forEach(e => {
                  let [t, r] = e;
                  return n[t] = r
                })
              }(n, r);
              const o = Qe(n);
              return o.htmlId = n.id, o
            }
            if (["pageRedirect", "themeTest"].includes(e.kind)) {
              const n = N(e.kind, e.selector, "");
              return n.options = t, n.block = e, Qe(n)
            }
            if (["moveElem", "automation", "visualEdit"].includes(e.kind)) {
              const n = N(e.kind, e.selector, "");
              n.options = t, n.block = e;
              const r = Qe(n);
              return r.htmlId = n.id, r
            }
            const n = N(e.kind, e.selector, e.value);
            return n.options = t, Qe(n)
          }(e, t)
        } catch (e) {}
      }).filter(e => !!e), []), ur[lr(e)] = n,
      function(e) {
        if (!0 !== window.visually?.flags?.["experience-applied-callback"]) return;
        const t = window.vslyOnExperienceApplied;
        if ("function" != typeof t) return;
        const n = {
          experienceId: e.name,
          variantId: e.variant,
          experienceName: e.gaName,
          variantName: e.gaVariant,
          version: e.version ?? 0
        };
        try {
          Promise.resolve(t(n)).catch(e => F("vslyOnExperienceApplied callback failed", e))
        } catch (e) {
          F("vslyOnExperienceApplied callback failed", e)
        }
      }(e)
  }
  const fr = new Set;

  function hr(e) {
    return !!e && "" !== e
  }
  const pr = function(e) {
      try {
        return Promise.resolve(Promise.all(e.map(function(e) {
          try {
            return Promise.resolve(e.shouldBeApplied).then(function(t) {
              return {
                ...e,
                shouldBeApplied: t
              }
            })
          } catch (e) {
            return Promise.reject(e)
          }
        })))
      } catch (e) {
        return Promise.reject(e)
      }
    },
    vr = e => {
      const t = _(() => e.key),
        n = _(() => e.value),
        r = dr();
      t === Ze.CART_CHANGE ? (ir({
        ...r,
        cart: n
      }), _(() => window.loomi_ctx.maintainCartAttributes(n))) : t === Ze.LOYALTY_CHANGE && ir(r)
    };

  function wr(e) {
    return sr(e.clientTargetingFormula, void 0, e.name)
  }

  function yr() {
    cr || s(() => document).then(() => {
      document.addEventListener(Q, vr), cr = !0
    })
  }

  function gr(e, t) {
    void 0 === t && (t = "");
    const n = ["!", "not in"].some(e => t.includes(e)),
      r = _(() => window.loomi_ctx.ctags.includes(e)) || !1;
    return n ? !r : r
  }

  function _r() {
    return Promise.resolve(_(() => !window.loomi_ctx.clientId))
  }

  function Sr(e) {
    const t = lr(e),
      n = ur[t];
    n && (n.forEach(e => _(e.revert)), delete ur[t]), delete ar[t]
  }
  const Er = function(e, t, n) {
    try {
      let r;
      return Promise.resolve(n()).then(function(n) {
        n ? (Pr(t, e), (hr(e.clientTargetingFormula) || function(e) {
          return !!me("trigger-delayed-allocation") && _(() => ["jsFunction", "jsCondition"].includes(e.trigger.type))
        }(e)) && Mn(e)) : r = 1
      })
    } catch (e) {
      return Promise.reject(e)
    }
  };

  function Pr(e, t) {
    return _(() => {
      e.register(t.name, t.variant, t.gaVariant, t.gaName);
      const n = t.ga;
      return e.track(o.USE_CASE, {
        use_case: t.name,
        use_case_variant: t.variant,
        ...t.version ? {
          version: t.version
        } : {}
      }, {
        isAudience: t.isAudience,
        isRedirect: t.isRedirect,
        immediate: t.immediate,
        gaName: t.gaName,
        gaVariant: t.gaVariant,
        ...n ? {
          reportGa: n
        } : {}
      })
    })
  }
  const Ar = new Set,
    Ir = new Set,
    br = new Set,
    xr = new Set;
  let Cr;

  function kr(e) {
    void 0 === Cr && (Cr = new MutationObserver(Tr(e)), Cr.observe(document.body, {
      childList: !0,
      subtree: !0,
      attributes: !1,
      characterData: !1
    }))
  }

  function Tr(e) {
    return () => {
      Nr(Ar, br, (t, n) => {
        Er(n, e, () => (t.add(Or(n.trigger.selector, n)), or(n)))
      }), Nr(Ir, xr, (t, n, r) => {
        const o = n.trigger;
        t.add(Or(o.selector, n)), r.addEventListener(o.name, () => Er(n, e, () => or(n)), {
          once: void 0 !== o.once && o.once
        })
      })
    }
  }

  function Nr(e, t, n) {
    e.forEach(e => {
      _(() => {
        const r = e.trigger.selector;
        document.body.querySelectorAll(r).forEach(o => {
          t.has(Or(r, e)) || n(t, e, o)
        })
      })
    })
  }

  function Or(e, t) {
    return `${e}-${t.name}`
  }

  function jr(e) {
    const t = JSON.stringify({
      ts: (new Date).getTime(),
      ...e
    });
    let n, r, o = 0;
    if (0 === t.length) return o;
    for (n = 0; n < t.length; n++) r = t.charCodeAt(n), o = (o << 5) - o + r, o |= 0;
    return o
  }

  function Lr(e) {
    const t = jr(e);
    return Ur(t), v(() => new Function(e.code)(window), e.timeoutMillis, e.retries, () => void 0 === Mr(t))
  }

  function $r(e) {
    return JSON.parse(localStorage.getItem(e) || "[]")
  }
  let Rr = [];
  const Dr = function(e, t, n) {
      _(() => t.experiments.forEach(t => {
        n && n.matches(t) ? n.onSubscribeCall(t) : Br(t, e)
      }))
    },
    Ur = (e, t) => {
      Rr.push({
        handler: e,
        experienceKey: t
      })
    },
    Mr = e => Rr.find(t => t.handler === e),
    qr = function(e) {
      Rr.filter(t => t.experienceKey === e).forEach(e => {
        try {
          "number" != typeof e.handler && e.handler()
        } catch (e) {}
      }), Rr = Rr.filter(t => t.experienceKey !== e)
    };

  function Fr(e, t) {
    Br(e, t)
  }

  function Br(t, n) {
    switch (_(() => t.trigger.type)) {
      case e.PageLoad:
        ! function(e, t) {
          Er(e, t, () => or(e))
        }(t, n);
        break;
      case e.Timeout:
        ! function(e, t) {
          const n = setTimeout(() => {
            Er(e, t, () => or(e))
          }, e.trigger.timeoutMillis);
          Ur(() => {
            n && clearTimeout(n)
          })
        }(t, n);
        break;
      case e.Inactivity:
        ! function(e, t) {
          const n = e.trigger.timeoutMillis;
          let r;

          function o() {
            clearTimeout(r), r = setTimeout(() => {
              Er(e, t, function() {
                try {
                  return Promise.resolve(wr(e)).then(function(t) {
                    return t && or(e), t
                  })
                } catch (e) {
                  return Promise.reject(e)
                }
              })
            }, n)
          }
          o();
          const c = ["mousemove", "keypress", "scroll", "touchstart", "touchmove"];
          Ur(() => {
            clearTimeout(r), i(() => document).then(() => c.forEach(e => document.removeEventListener(e, o)))
          }), s(() => document, !0).then(() => {
            c.forEach(e => document.addEventListener(e, o, {
              passive: !0
            }))
          })
        }(t, n);
        break;
      case e.Selector:
        ! function(e, t) {
          kr(e), Ar.add(t), Tr(e)()
        }(n, t);
        break;
      case e.ExitIntent:
        ! function(e, t) {
          const n = r => {
            _(() => !r.toElement && !r.relatedTarget) && Er(e, t, () => {
              const t = or(e);
              return i(() => document).then(() => {
                document.removeEventListener("mouseout", n)
              }), t
            })
          };
          s(() => document, !0).then(() => {
            document.addEventListener("mouseout", n, {
              passive: !0
            })
          }), Ur(() => {
            i(() => document).then(() => {
              document.removeEventListener("mouseout", n)
            })
          })
        }(t, n);
        break;
      case e.JSCondition:
        ! function(e, t) {
          Lr(e.trigger).then(() => {
            Er(e, t, () => or(e))
          }).catch(() => {})
        }(t, n);
        break;
      case e.JSFunction:
        ! function(e, t) {
          ! function(n) {
            try {
              const r = new Function(`return async function() { ${n.code} }`)()(),
                o = jr(n);
              Ur(o), r.then(() => void 0 !== Mr(o) && void Er(e, t, () => or(e)))
            } catch (e) {}
          }(e.trigger)
        }(t, n);
        break;
      case e.JSEvent:
        ! function(e, t) {
          const n = e.trigger,
            r = "vsly-js-events";

          function o(n) {
            n && Er(e, t, () => or(e))
          }
          const c = e => {
            let t;
            try {
              t = new Function(n.jsEvent.matchCode)(e), localStorage.setItem(r, JSON.stringify([...$r(r), {
                event: {
                  detail: e.detail
                },
                ts: (new Date).valueOf() / 1e3
              }].splice(0, 25)))
            } catch (e) {
              F("handleJsEvent", e), t = !1
            }
            o(t)
          };
          o(function(e, t) {
            return _(() => !!$r(e).find(e => {
              const n = e.ts;
              return (new Date).valueOf() / 1e3 - n < 2628e3 && new Function(t)(e.event)
            }))
          }(r, n.jsEvent.matchCode)), s(() => window).then(() => {
            window.addEventListener(n.jsEvent.name, c)
          }), Ur(() => {
            i().then(() => {
              window.removeEventListener(n.jsEvent.name, c)
            })
          })
        }(t, n);
        break;
      case e.Conjunction:
        ! function(t, n) {
          if (function(t) {
              return [e.ExitIntent, e.Selector, e.Timeout].includes(t.trigger.condition.type)
            }(t)) {
            const e = t.trigger;
            Lr(e.jsCond).then(() => {
              Br({
                ...t,
                trigger: e.condition
              }, n)
            }).catch(() => {})
          }
        }(t, n);
        break;
      case e.ElementEvent:
        ! function(e, t) {
          kr(t), Ir.add(e), Tr(t)()
        }(t, n)
    }
  }
  const Jr = ["vsly-backdrop-container", "__loomi_crosshair_container"];

  function Vr(e) {
    let t = _(() => e.target),
      n = !1;
    for (; t;) {
      if (Jr.includes(_(() => t.id))) {
        n = !0;
        break
      }
      t = _(() => t.parentElement)
    }
    n && (q("vsly", "about to stop propagation of event", e), _(() => e.stopImmediatePropagation()), _(() => e.stopPropagation()))
  }

  function Hr(e, t) {
    const n = _(() => window.Shopify.currency.active, "USD"),
      r = _(() => window.Shopify.locale, "en-US"),
      o = new Intl.NumberFormat(r, {
        style: "currency",
        currency: n,
        minimumFractionDigits: !0 === _(() => window.visually.flags["op-locale-currency-always-show-decimals"], !1) ? 2 : 0,
        maximumFractionDigits: 2
      });
    if (t) {
      if (Kr()) {
        const t = _(() => window.visually.priceRound) || Math.round;
        return o.format(t(e, n))
      }
      return o.format(e)
    }
    const i = _(() => window.Shopify.currency.rate, "1");
    let s = Number.parseFloat(i);
    s = Number.isNaN(s) ? 1 : s;
    let c = e * s;
    return 1 != s && me("exchange-fee") && (c *= 1.02), c = Gr(s, c, n), o.format(c)
  }
  const Gr = (e, t, n) => 1 !== e && me("exchange-round") || Kr() ? (_(() => window.visually.priceRound) || Math.round)(t, n) : t;

  function zr() {
    const e = _(() => !0 === window.visually.flags["kill-locale-currency"]),
      t = _(() => window.Shopify.currency, {}),
      n = !!_(() => t.active),
      r = _(() => t.rate),
      o = !!r && !Number.isNaN(Number.parseFloat(r));
    return !e && n && o
  }
  const Kr = () => !me("op-locale-currency-no-round");
  let Wr = window.location.href;
  const Qr = () => {
    requestAnimationFrame(() => {
      Wr !== window.location.href && (Wr = window.location.href, window.dispatchEvent(new CustomEvent("vslyUrlChanged", {
        detail: {
          prev: Wr,
          curr: window.location.href
        }
      })))
    })
  };
  var Yr;
  ! function(e) {
    e.NONE = "none", e.YOTPO = "yotpo"
  }(Yr || (Yr = {}));
  const Zr = {
    isMember: !1,
    provider: Yr.NONE
  };

  function Xr(e, t) {
    try {
      var n = e()
    } catch (e) {
      return t(e)
    }
    return n && n.then ? n.then(void 0, t) : n
  }
  const eo = "vsly-loyalty-ctx",
    to = (() => {
      const e = ["swell:customer:updated", "swell:redemption", "swell:initialized", "swell:setup", "vsly:loyalty-changed"];
      let t;
      const n = () => {
          const e = _(() => window.swellConfig.customer);
          return e ? {
            id: e.local_customer_id,
            providerId: e.id,
            email: e.email,
            earnedPoints: e.points_earned,
            isMember: !0 === e.is_member,
            pointsBalance: e.points_balance,
            adjustedPointsBalance: _(() => e.adjusted_points_balance, 0),
            provider: Yr.YOTPO
          } : Zr
        },
        r = e => {
          _(() => "vsly:loyalty-changed" === e.type) && _(() => window.swellAPI.refreshCustomerDetails()), t(n())
        };
      return {
        provide: n,
        onChange: function(n) {
          try {
            t = n;
            const o = Xr(function() {
              return Promise.resolve(v(() => !!window.jQuery, 50, 200)).then(function() {
                e.forEach(e => {
                  window.jQuery(document).on(e, r)
                })
              })
            }, function() {
              e.forEach(e => {
                document.addEventListener(e, r)
              })
            });
            return Promise.resolve(o && o.then ? o.then(function() {}) : void 0)
          } catch (e) {
            return Promise.reject(e)
          }
        },
        connect: () => v(() => !!_(() => window.swellConfig.customer.local_customer_id), 400, 20),
        disconnect: function() {
          try {
            const t = Xr(function() {
              return Promise.resolve(v(() => !!window.jQuery, 50, 200)).then(function() {
                e.forEach(e => {
                  window.jQuery(document).off(e, r)
                })
              })
            }, function() {
              e.forEach(e => {
                document.removeEventListener(e, r)
              })
            });
            return Promise.resolve(t && t.then ? t.then(function() {}) : void 0)
          } catch (e) {
            return Promise.reject(e)
          }
        }
      }
    })();

  function no(e) {
    Xe(Ze.LOYALTY_CHANGE, e), sessionStorage.setItem(eo, JSON.stringify({
      ts: (new Date).getTime(),
      ctx: e
    })), window.loomi_ctx = {
      ...window.loomi_ctx || {},
      loyalty: e
    }
  }
  const ro = "vsly_session";

  function oo(e) {
    return St((e || "").replace("+", " "))
  }

  function io() {
    const e = window.loomi_ctx.storeAlias,
      t = {
        id: W(e + window.loomi_ctx.userId + f() + At() + ao()),
        utm_campaign: At(),
        last_interaction: new Date,
        landing_page: _(() => location.href, ""),
        start_at: new Date
      };
    return so(t), t
  }

  function so(e) {
    const t = JSON.stringify(e);
    localStorage.setItem(ro, t), window.loomi_ctx.session = e
  }

  function co() {
    const e = function() {
      window.loomi_ctx = window.loomi_ctx || {};
      let e = window.loomi_ctx.session || _(() => {
        const e = JSON.parse(localStorage.getItem(ro));
        return e.last_interaction = new Date(e.last_interaction), e.start_at = new Date(e.start_at), e
      }) || io();
      return function(e) {
        const t = new Date,
          n = e.last_interaction;
        return (t.valueOf() - n.valueOf()) / 6e4 > 30 || oo(At()) !== oo(e.utm_campaign) || e.last_interaction.getDate() !== t.getDate()
      }(e) && (e = io()), window.loomi_ctx.session = e, e
    }();
    e.last_interaction = new Date, so(e)
  }
  const ao = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

  function uo(e, t) {
    try {
      var n = e()
    } catch (e) {
      return t(!0, e)
    }
    return n && n.then ? n.then(t.bind(null, !1), t.bind(null, !0)) : t(!1, n)
  }
  const lo = function(e, t, r) {
    void 0 === r && (r = 1e3);
    try {
      return mo ? (console.debug("vsly-sdk", "cannot reload since another reload is in progress"), Promise.resolve()) : (mo = !0, Promise.resolve(uo(function() {
        console.debug("vsly-sdk", "about to reload sdk");
        const o = me("sdk-reconcile") ? Promise.resolve(function(e, t, n) {
          try {
            return Promise.resolve(n(t, e)).then(function(e) {
              let {
                configuration: t
              } = e;
              const n = _(() => window.loomi.conf.experiments) || [],
                r = new Map,
                o = t.experiments || [],
                i = new Map,
                s = new Set(Object.keys(ur)),
                c = C();
              n.forEach(e => r.set(Hn(e), e)), o.forEach(e => i.set(Hn(e), e)), (e => {
                window.loomi = {
                  ..._(() => window.loomi) || {},
                  conf: e
                }, window.visually = {
                  ..._(() => window.visually) || {},
                  flags: e.flags,
                  recsPerVariant: Wn(e)
                }, Jn(e.flags)
              })(t), ((e, t, n) => {
                e.forEach((e, r) => {
                  t.has(r) || (n.has(r) && Sr(e), qr(r))
                })
              })(r, i, s), document.dispatchEvent(Object.assign(new Event("reset-widget"), {
                value: "reload"
              })), document.dispatchEvent(Object.assign(new Event("targeting-changed"), {
                value: "#reload",
                key: "CART_CHANGE"
              })), ((e, t, n, r) => {
                e.forEach((e, o) => {
                  const i = t.get(o);
                  i ? Gn(i) !== Gn(e) && (r.has(o) && Sr(i), qr(o), on([e]), Fr(e, n)) : (on([e]), Fr(e, n))
                })
              })(i, r, c, s)
            })
          } catch (e) {
            return Promise.reject(e)
          }
        }(e, t, fo)).then(function() {}) : Promise.resolve(function() {
          try {
            return cr && i(() => document).then(() => {
              document.removeEventListener(Q, vr), cr = !1
            }), Rr.forEach(e => {
              try {
                "number" != typeof e.handler && e.handler()
              } catch (e) {}
            }), Rr = [], Array.from($.keys()).forEach(e => {
              We(e)
            }), Je && Je.disconnect(), Promise.resolve()
          } catch (e) {
            return Promise.reject(e)
          }
        }()).then(function() {
          return Promise.resolve((o = r, void 0 === o && (o = 40), new Promise(e => setTimeout(e, o)))).then(function() {
            return Promise.resolve(function(e, t) {
              try {
                return void 0 === e && (e = n.PROD), Promise.resolve(uo(function() {
                  return function(r, o) {
                    try {
                      var i = (function() {
                        if (window.vsly_blocked) throw Tn(), new Error(Dn)
                      }(), function(e, t) {
                        window.loomi_ctx = window.loomi_ctx || {}, window.loomi_ctx.env = window.loomi_ctx.env || e, window.loomi_ctx.storeAlias = window.loomi_ctx.storeAlias || t
                      }(e, t), Promise.resolve(function(e, t) {
                        try {
                          return void 0 === e && (e = n.PROD), Promise.resolve(ho(t, e, void 0)).then(function(n) {
                            let {
                              configuration: r,
                              tracking: o
                            } = n;
                            return po(r, t, e, o)
                          })
                        } catch (e) {
                          return Promise.reject(e)
                        }
                      }(e, t)).then(function(n) {
                        let {
                          jitsu: r,
                          configuration: o
                        } = n;
                        if (!_(() => o.flags["kill-switch"])) return Promise.resolve(Be()).then(function() {
                          on(o.experiments), Dr(r, o), Vn(e, t, lo), dt()
                        })
                      }))
                    } catch (e) {
                      return o(e)
                    }
                    return i && i.then ? i.then(void 0, o) : i
                  }(0, function(e) {
                    _(() => e.message) !== Dn && F("failed initialising sdk", e)
                  })
                }, function(e, t) {
                  if (Tn(), e) throw t;
                  return t
                }))
              } catch (e) {
                return Promise.reject(e)
              }
            }(e, t)).then(function() {})
          });
          var o
        });
        if (o && o.then) return o.then(function() {})
      }, function(e, t) {
        if (mo = !1, e) throw t;
        return t
      })))
    } catch (e) {
      return Promise.reject(e)
    }
  };
  let mo = !1;
  const fo = function(e, t, n) {
      try {
        return m(), Promise.resolve(Rn(e, t, n))
      } catch (e) {
        return Promise.reject(e)
      }
    },
    ho = function(e, t, n) {
      try {
        return _(co), m(), Promise.resolve(Rn(e, t, n))
      } catch (e) {
        return Promise.reject(e)
      }
    },
    po = function(e, t, n, r) {
      try {
        return Jn(e.flags),
          function(e, t, n, r, o, i) {
            yr(), window.loomi_ctx = {
              ..._(() => window.loomi_ctx) || {},
              env: t,
              storeAlias: e,
              apply: e => {
                on([e]), or(e)
              },
              shouldApply: sr
            };
            const s = _(() => o.productId),
              c = window.loomi_ctx;
            s && !c.productId && (c.productId = s);
            const a = _(() => o.variantId);
            a && !c.variantId && (c.variantId = a), window.loomi = {
              ..._(() => window.loomi) || {},
              conf: n
            }, window.visually = {
              ..._(() => window.visually) || {},
              flags: n.flags,
              enabledIntegrations: n.integrations,
              recsPerVariant: Wn(n),
              sdk_api: {
                addToCart: an,
                recommendProducts: gn,
                getProductsMetafields: Nn,
                fetchRecs: An
              },
              reAllocate: i,
              rerender: zn,
              reload: function() {
                try {
                  return Promise.resolve(r(t, e, 1e3)).then(function() {})
                } catch (e) {
                  return Promise.reject(e)
                }
              }
            }
          }(t, n, e, lo, Tt(), fo),
          function(e) {
            try {
              if (e.noActiveThemeTests) {
                if (Pe(0)) return;
                be()
              } else(e => !(e.experiments || []).find(e => e.isThemeTest) && _(Ce) && !![localStorage, sessionStorage].find(je))(e) && be()
            } catch (e) {}
          }(e), Promise.resolve(yo()).then(function() {
            var o, c, a, l;
            (function(e, t, n) {
              window.loomi_api || (window.loomi_api = {}), window.loomi_api.when = w, window.loomi_api.awaitCondition = v, window.loomi_api.loadVisuallyLib = h, window.loomi_api.queryProducts = On, window.loomi_api.debounce = u, window.loomi_api.allocatorQuery = e => function(e, t) {
                try {
                  function n() {
                    return Promise.resolve(r)
                  }
                  const r = {
                      results: {}
                    },
                    o = {
                      ...e
                    };
                  o.queries = function(e, t) {
                    return e.queries.filter(e => {
                      const n = _(() => e.oneOf.productInfo);
                      if (n) {
                        const r = bn(n.handle),
                          o = sessionStorage.getItem(r);
                        if (!o) return !0;
                        const i = JSON.parse(o);
                        return !! function(e, t) {
                          return !((!e.includeCollections || t.collections) && (!e.includeTags || t.tags) && (!e.includeSales || t.sales) && (!e.includeVariants || t.variants))
                        }(n, i) || (i.cached = !0, t.results[e.name] = i, !1)
                      }
                      const r = _(() => e.oneOf.handlesByTag);
                      if (r) {
                        const n = xn(r),
                          o = sessionStorage.getItem(n);
                        if (!o) return !0;
                        const i = JSON.parse(o);
                        return i.cached = !0, t.results[e.name] = i, !1
                      }
                      const o = _(() => e.oneOf.handlesByCollection);
                      if (o) {
                        const n = Cn(o),
                          r = sessionStorage.getItem(n);
                        if (!r) return !0;
                        const i = JSON.parse(r);
                        return i.cached = !0, t.results[e.name] = i, !1
                      }
                      return !0
                    })
                  }(e, r);
                  const i = function() {
                    if (o.queries.length > 0) {
                      const {
                        query: e,
                        hashedQuery: n
                      } = function(e, t) {
                        e.timestamp = `${kn(4)}${t}${kn(5)}`, e.alias = window.loomi_ctx.storeAlias || "", e.userId = window.loomi_ctx.userId || "";
                        const n = g(e);
                        return {
                          query: n,
                          hashedQuery: (n + window.loomi_ctx.userId + window.loomi_ctx.storeAlias + t).split("").reduce((e, t) => (e = (e << 5) - e + t.charCodeAt(0)) & e, 0)
                        }
                      }(o, t), i = qn(window.loomi_ctx.env).cfgUrl.replace("/allocate", `/query?q=${e}&h=${n}`);
                      return Promise.resolve(fetch(i)).then(function(e) {
                        const t = function() {
                          if (e.ok) return Promise.resolve(e.json()).then(function(e) {
                            e.results && Object.entries(e.results).forEach(e => {
                              let [t, n] = e;
                              ! function(e, t, n) {
                                if (t)
                                  if ("ProductInfo" === t.kind) {
                                    const r = n.queries.find(t => t.name === e);
                                    r && (_(() => r.oneOf.productInfo.includeTags, !1) && !t.tags && (t.tags = []), _(() => r.oneOf.productInfo.includeCollections, !1) && !t.collections && (t.collections = []), _(() => r.oneOf.productInfo.includeSales, !1) && !t.sales && (t.sales = ""), _(() => r.oneOf.productInfo.includeVariants, !1) && !t.variants && (t.variants = []), sessionStorage.setItem(bn(t.handle), JSON.stringify(t)))
                                  } else if ("HandlesByCollection" === t.kind) {
                                  const r = n.queries.find(t => t.name === e);
                                  if (r) {
                                    const e = _(() => r.oneOf.handlesByCollection, "") || "";
                                    sessionStorage.setItem(Cn(e), JSON.stringify(t))
                                  }
                                } else if ("HandlesByTag" === t.kind) {
                                  const r = n.queries.find(t => t.name === e);
                                  if (r) {
                                    const e = _(() => r.oneOf.handlesByTag, "") || "";
                                    sessionStorage.setItem(xn(e), JSON.stringify(t))
                                  }
                                }
                              }(t, n, o), r.results[t] = n
                            })
                          })
                        }();
                        if (t && t.then) return t.then(function() {})
                      })
                    }
                  }();
                  return Promise.resolve(i && i.then ? i.then(n) : n())
                } catch (s) {
                  return Promise.reject(s)
                }
              }(e, `${(new Date).getTime()+Math.round(1e6*Math.random())}`), window.loomi_api.openProductOverlay = Qn, _(() => e.shopApi.forEach(e => {
                let {
                  js: t,
                  windowKey: n
                } = e;
                try {
                  window.loomi_api[n] = new Function(t)
                } catch (e) {}
              })), window.loomi_api.formatLocaleMoney = function() {
                var e = [].slice.call(arguments);
                return n() ? t(...e) : (_(() => window.loomi_api.formatMoney) || (() => `${_(()=>e[0],"")}`))(...e)
              }, window.loomi_api.redirectTest = ee
            })(e, Hr, zr), a = e.first_seen, (c = e.uid) !== (l = r.id) && c && a > 0 ? (window.loomi_ctx.userId = c, Kt(c, a)) : window.loomi_ctx.userId = l,
              function(e, t) {
                try {
                  return _(() => window.loomi_ctx.cc) && v(b, 1e3, 120).then(() => Kt(e, t || (new Date).getTime() / 1e3)), Promise.resolve()
                } catch (e) {
                  return Promise.reject(e)
                }
              }(window.loomi_ctx.userId, a), (o = e.flags)["sdk-auto-clean"] && !o["sdk-kill-auto-clean"] && h("price_test_cleanup_v2", {
                async: !1,
                defer: !0
              }).then(), _(() => !0 === window.visually.flags["op-focus-trap-removal"]) && s(() => document, !0).then(() => {
                document.addEventListener("focusin", Vr, {
                  capture: !0,
                  passive: !0
                }), document.addEventListener("mousedown", Vr, {
                  capture: !0,
                  passive: !0
                }), document.addEventListener("touchstart", Vr, {
                  capture: !0,
                  passive: !0
                }), document.addEventListener("touchend", Vr, {
                  capture: !0,
                  passive: !0
                })
              }),
              function(e, t) {
                if (me("kill-sdk-reload-url-detection") || !me("sdk-reload") && !["/products/", "/collections/"].find(e => window.location.href.includes(e))) return;
                const n = function() {
                  const r = (() => {
                      requestAnimationFrame(() => {
                        (me("sdk-reload-url-detection-href") ? wo !== window.location.href : new URL(wo).pathname !== new URL(window.location.href).pathname) && (wo = window.location.href, n(), vo(e, t, 10))
                      })
                    }) || Qr,
                    o = ["click", "touchend", "pdpresp"];
                  return s(() => document.body, !0).then(() => {
                    o.forEach(e => document.body.addEventListener(e, r, !0))
                  }), () => {
                    i(() => document.body).then(() => {
                      o.forEach(e => {
                        document.body.removeEventListener(e, r, !0)
                      })
                    })
                  }
                }()
              }(n, t),
              function() {
                try {
                  return Promise.resolve(function(e, t) {
                    try {
                      var n = function() {
                        no(function() {
                          const e = sessionStorage.getItem(eo);
                          if (e) {
                            const t = _(() => JSON.parse(e));
                            if (t && t.ts > (new Date).getTime() - 3e5) return t.ctx
                          }
                        }() || Zr);
                        const e = _(() => !0 === window.visually.flags["loyalty-targeting"]),
                          t = function() {
                            if (e) return Promise.resolve(function(e) {
                              try {
                                return e.onChange(e => {
                                  no(e)
                                }), Promise.resolve(e.connect()).then(function() {
                                  const t = e.provide();
                                  return no(t), {
                                    ctx: t,
                                    disconnect: e.disconnect
                                  }
                                })
                              } catch (e) {
                                return Promise.reject(e)
                              }
                            }(to)).then(function() {
                              const e = document.querySelectorAll('[href*="/account/logout"]');
                              e && Array.from(e).forEach(e => {
                                e.addEventListener("click", () => (sessionStorage.removeItem(eo), !0))
                              })
                            })
                          }();
                        if (t && t.then) return t.then(function() {})
                      }()
                    } catch (e) {
                      return t(e)
                    }
                    return n && n.then ? n.then(void 0, t) : n
                  }(0, function(e) {
                    console.debug("vsly-loyalty", "unable to find loyalty provider", e)
                  }))
                } catch (e) {
                  return Promise.reject(e)
                }
              }();
            const d = C();
            return {
              configuration: e,
              jitsu: d
            }
          })
      } catch (e) {
        return Promise.reject(e)
      }
    },
    vo = u(lo, 10);
  let wo = window.location.href;
  const yo = function() {
    try {
      return Promise.resolve(function() {
        if (me("block-do-not-track")) return Promise.resolve(x()).then(function(e) {
          if (!e) throw new Error(Dn)
        })
      }())
    } catch (e) {
      return Promise.reject(e)
    }
  };

  function go(e) {
    return e.startsWith("https://") ? e.substring(8) : e
  }

  function _o(e) {
    try {
      return decodeURIComponent(e.replace(/\+/g, " "))
    } catch {
      return ""
    }
  }
  var So;
  ! function(e) {
    e.SIGNUP = "SIGNUP", e.ADD_TO_CART = "ADD_TO_CART", e.CHANGE_QTY = "CHANGE_QTY", e.REMOVE_FROM_CART = "REMOVE_FROM_CART", e.PAGE_LOAD = "PAGE_LOAD", e.CLICK = "CLICK", e.LOGIN = "LOGIN", e.LOGOUT = "LOGOUT", e.TIME_SPENT = "TIME_SPENT", e.USE_CASE = "USE_CASE", e.LEAD_SUBMISSION_EMAIL = "LEAD_SUBMISSION_EMAIL", e.LEAD_SUBMISSION_PHONE = "LEAD_SUBMISSION_PHONE"
  }(So || (So = {}));
  let Eo = [];
  const Po = function(e, t) {
    if (void 0 === t && (t = 0), 0 === Eo.length) return;
    const n = Eo;
    Eo = [];
    const r = Io(n),
      o = Ao(n);
    e({
      bulk: o,
      shared: r
    }, !0).catch(() => {
      const r = n.concat(Eo);
      r.length < 100 && (Eo = r, t < 2 && setTimeout(() => Po(e, t + 1), 500 * Math.pow(2, t)))
    })
  };
  u(Po, 100);
  const Ao = e => e.map(e => {
      const t = JSON.parse(JSON.stringify(e));
      return delete t.user, delete t.event_id, delete t.user_agent, delete t.utc_time, delete t.local_tz_offset, delete t.doc_host, delete t.ids_ga, delete t.alias, delete t.userCanBeTracked, delete t.userDataCanBeSold, delete t.edgetag, delete t.api_key, delete t.src, t
    }),
    Io = e => {
      const t = _(() => String(e[0].user.anonymous_id), ""),
        n = _(() => String(e[0].user_agent), ""),
        r = _(() => String(e[0].event_id), ""),
        o = _(() => String(e[0].utc_time), ""),
        i = _(() => Number(e[0].local_tz_offset) || 0),
        s = _(() => String(e[0].doc_host), ""),
        c = _(() => String(e[0].ids_ga), ""),
        a = _(() => String(e[0].alias), ""),
        u = _(() => Boolean(e[0].userCanBeTracked), !0),
        l = _(() => Boolean(e[0].userDataCanBeSold), !0),
        d = _(() => String(e[0].edgetag), ""),
        m = _(() => String(e[0].api_key), ""),
        f = _(() => String(e[0].src), "");
      return Object.entries({
        anonymous_id: t,
        event_id: r,
        user_agent: n,
        utc_time: o,
        local_tz_offset: i,
        doc_host: s,
        ids_ga: c,
        alias: a,
        userCanBeTracked: u,
        userDataCanBeSold: l,
        edgetag: d,
        api_key: m,
        src: f
      }).reduce((e, t) => {
        let [n, r] = t;
        if (r) {
          if ("undefined" === r) return e;
          e[n] = r
        }
        return e
      }, {})
    },
    bo = function(e) {
      try {
        let r;

        function t(e) {
          return r ? e : Promise.resolve(!1)
        }
        const o = function() {
          if (_(() => e.eventPayload.bulk.length > 0, !1)) {
            const t = _(() => JSON.parse(JSON.stringify(e.eventPayload.bulk[0])), void 0);
            if (!t) {
              const e = Promise.resolve(!1);
              return r = 1, e
            }
            const o = _(() => JSON.parse(JSON.stringify(t.ga)), void 0);
            return delete t.ga, Promise.resolve(function(e) {
              try {
                return Promise.resolve(function(t, r) {
                  try {
                    var o = function() {
                      const t = window.loomi_ctx.jitsuKey,
                        r = function(e) {
                          const t = {
                            trackingHost: "https://live.visually-io.com"
                          };
                          return e === n.TEST && (t.trackingHost = "http://localhost:8088"), e === n.STAGE && (t.trackingHost = "https://sdk.loomi-stg.xyz"), t
                        }(window.loomi_ctx.env).trackingHost;
                      return Promise.resolve(fetch(`${r}/api/s?token=${t}&bulk=1`, {
                        headers: {
                          "content-type": "text/plain"
                        },
                        body: JSON.stringify(e.eventPayload),
                        method: "POST",
                        mode: "cors",
                        credentials: "omit",
                        keepalive: !0
                      })).then(function(e) {
                        return e.ok
                      })
                    }()
                  } catch (e) {
                    return r(e)
                  }
                  return o && o.then ? o.then(void 0, r) : o
                }(0, function(e) {
                  return console.error("vsly: Failed to send event", e), !1
                }))
              } catch (e) {
                return Promise.reject(e)
              }
            }(e)).then(function(n) {
              return Promise.resolve(function(e) {
                try {
                  try {
                    const t = e.eventPayload,
                      n = t.bulk[0],
                      r = window.loomi_ctx.env,
                      o = t.shared,
                      i = g({
                        experienceId: n.use_case,
                        variantId: n.use_case_variant,
                        storeAlias: o.alias,
                        anonymousId: o.anonymous_id,
                        version: n.version
                      }),
                      s = new URL(qn(r).cfgUrl.replace("/allocate", "/match"));
                    s.searchParams.append("q", i), fetch(s.toString())
                  } catch (e) {
                    console.error("vsly: Failed to persist allocation", e)
                  }
                  return Promise.resolve()
                } catch (e) {
                  return Promise.reject(e)
                }
              }(e)).then(function() {
                return o && C().trackExt(t, o).then().catch(e => {
                  console.error("vsly: Failed track ext event", e, t, o)
                }), r = 1, n
              })
            })
          }
        }();
        return Promise.resolve(o && o.then ? o.then(t) : t(o))
      } catch (i) {
        return Promise.reject(i)
      }
    },
    xo = "vsly_analytics_queue";

  function Co(e, t, n) {
    void 0 === n && (n = !1);
    try {
      const r = window.loomi_ctx,
        o = r.storeAlias,
        i = r.jitsuKey,
        s = Et(),
        c = {
          id: `${Date.now()}-${Math.random().toString(36).substring(2,9)}`,
          timestamp: Date.now(),
          eventPayload: {
            bulk: [{
              url: location.href,
              doc_path: location.pathname,
              doc_search: location.search,
              sid: r.session.id,
              sid_start: r.session.start_at,
              utm: s.utm,
              lmi_params: s.lmi_params,
              event_type: "USE_CASE",
              use_case: e._USE_CASE,
              use_case_variant: e._USE_CASE_VARIANT,
              version: e._USE_CASE_VERSION || 1,
              ga: {
                isAudience: !1,
                gaName: e._USE_CASE_GA || e._USE_CASE,
                gaVariant: e._USE_CASE_GA_VARIANT || e._USE_CASE_VARIANT,
                reportGa: n
              }
            }],
            shared: {
              anonymous_id: t.id,
              user_agent: navigator.userAgent,
              utc_time: (new Date).toISOString(),
              local_tz_offset: (new Date).getTimezoneOffset(),
              doc_host: location.host,
              alias: o,
              api_key: i
            }
          },
          retries: 0
        },
        a = ko();
      a.push(c), To(a)
    } catch (e) {
      console.error("vsly: Failed to queue analytics event", e)
    }
  }

  function ko() {
    try {
      const e = localStorage.getItem(xo);
      if (!e) return [];
      const t = JSON.parse(e);
      return Array.isArray(t) ? t : []
    } catch (e) {
      return console.error("vsly: Failed to read analytics queue", e), []
    }
  }

  function To(e) {
    try {
      localStorage.setItem(xo, JSON.stringify(e))
    } catch (e) {
      console.error("vsly: Failed to save analytics queue", e)
    }
  }
  const No = (e, t) => {
      try {
        localStorage.setItem(e, JSON.stringify({
          variant: t.experiment.variant,
          version: t.experiment.version || 0
        }))
      } catch (e) {}
    },
    Oo = (e, t) => {
      let n = null;
      try {
        const r = localStorage.getItem(e);
        if (r) {
          let e;
          const o = JSON.parse(r);
          if (o && "object" == typeof o && "variant" in o) {
            e = o;
            const r = t.find(t => t.experiment.variant === e.variant);
            r && (r.experiment.version || 0) === (e.version || 0) && (n = r)
          }
        }
      } catch (e) {}
      return n
    },
    jo = e => `vsly_redirect_test_${e[0].experiment.name}`,
    Lo = (e, t) => {
      if (e) {
        const n = e.experiment;
        t.some(e => {
          const t = e.experiment;
          return t.variant === n.variant && t.version === n.version
        }) || (e = !1)
      }
      if (!e) {
        const n = 100 * Math.random();
        let r = 0;
        for (const o of t)
          if (r += o.targeting.chance, n <= r) {
            e = o;
            break
          }
      }
      return e
    },
    $o = function(e) {
      void 0 === e && (e = !0);
      const t = window.loomi_ctx.consent;
      t.allowed = e, t.fin || (t.fin = Ro())
    },
    Ro = () => (new Date).getTime(),
    Do = () => window.Shopify.customerPrivacy,
    Uo = ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "NO", "IS", "LI"],
    Mo = function(e) {
      void 0 === e && (e = !0);
      const t = window.loomi_ctx.consent;
      t.allowed = e, t.fin || (t.fin = qo())
    },
    qo = () => (new Date).getTime(),
    Fo = () => window.Shopify.customerPrivacy,
    Bo = () => Promise.resolve(),
    Jo = () => (window.loomi_ctx = window.loomi_ctx || {}, window.loomi_ctx.performanceMetrics = window.loomi_ctx.performanceMetrics || {}, window.loomi_ctx.performanceMetrics);

  function Vo() {
    try {
      const e = Jo().as;
      if (void 0 === e) return;
      const t = performance.now();
      Object.assign(Jo(), {
        ae: t,
        ad: t - e
      }), (e => {
        try {
          if ("function" != typeof performance.getEntriesByType) return;
          const t = performance.getEntriesByType("resource").filter(t => t.startTime >= e && (e => {
            try {
              return new URL(e.name).pathname.endsWith("/allocate")
            } catch {
              return !1
            }
          })(t)).pop();
          if (!t) return;
          Object.assign(Jo(), {
            ars: t.startTime,
            afs: t.fetchStart,
            aqs: t.requestStart,
            aps: t.responseStart,
            ape: t.responseEnd,
            ard: t.duration,
            ardl: t.startTime - e,
            aprd: t.requestStart - t.startTime,
            arwd: t.responseStart - t.requestStart,
            ardd: t.responseEnd - t.responseStart
          })
        } catch {}
      })(e)
    } catch (e) {}
  }

  function Ho(e, t) {
    try {
      var n = e()
    } catch (e) {
      return t(e)
    }
    return n && n.then ? n.then(void 0, t) : n
  }

  function Go() {
    return _(co), zt(),
      function(e) {
        void 0 === e && (e = window.loomi_ctx.embeddedTests);
        try {
          if (!e) return;
          if (0 === e.length) return;
          const t = e.filter(e => e.experiment.isThemeTest);
          t.length > 0 && function(e) {
            const t = jo(e);
            let n = Oo(t, e);
            if (n = Lo(n, e), !n) return;
            if (!n.experiment) return;
            No(t, n);
            const r = n.experiment,
              o = _(() => r.code.find(e => "themeTest" === e.kind).value.targetThemeId) || 0,
              i = ne({
                experienceId: r.name,
                variantId: r.variant,
                version: r.version,
                gaExperienceName: r.gaName,
                gaVariantName: r.gaVariant
              });
            Co(i, zt(), _(() => !!r.ga) || !1), Ee(i, o)
          }(t);
          const n = e.filter(e => !e.experiment.isThemeTest);
          n.length > 0 && function(e) {
            const t = e.filter(e => function(e) {
              if (!e) return !0;
              try {
                const t = e.match(/UrlTarget\(([^)]+)\)/);
                if (!t) return !1;
                const n = function(e) {
                  try {
                    const t = e.match(/^"([^"]*)",\s*"([^"]*)",\s*(true|false)$/);
                    return t ? {
                      value: t[1],
                      op: t[2],
                      includeQueryParam: "true" === t[3]
                    } : null
                  } catch {
                    return null
                  }
                }(t[1]);
                return !!n && function(e, t, n) {
                  const r = window.location.search || "",
                    o = window.location.href || "",
                    i = (s = function(e) {
                      const t = e.startsWith("/") ? e : "/" + e,
                        n = t.split("/");
                      if (n.length < 2) return t;
                      const r = n[1];
                      let o = !1;
                      return r.length > 0 && r.length <= 7 && (2 === r.length || r.length > 2 && "-" === r[2]) && (o = !0), o ? "/" + n.slice(2).join("/") : t
                    }(window.location.pathname), ["STORY_IL", "MAYVEN_GLOBAL", "JDSPORT_IL"].includes(window.loomi_ctx.storeAlias) ? s.toLowerCase() : s);
                  var s;
                  const {
                    hostPath: c,
                    rawQuery: a
                  } = function(e) {
                    const t = go(e),
                      n = t.indexOf("?");
                    return -1 !== n ? {
                      hostPath: t.substring(0, n),
                      rawQuery: t.substring(n + 1)
                    } : {
                      hostPath: t,
                      rawQuery: ""
                    }
                  }(e), u = c.toLowerCase();
                  let l = go(o.split("?")[0]).toLowerCase(),
                    d = "",
                    m = u;
                  if (d = (new URL(o).host + i).toLowerCase(), n) {
                    const e = r ? _o(r.substring(1)) : "";
                    if (e && (l += "?" + e, d += "?" + e), a) {
                      const e = _o(a);
                      e && (m += "?" + e)
                    }
                  }
                  return function(e, t, n, r) {
                    switch (r) {
                      case "contains":
                        return e.includes(n) || t.includes(n);
                      case "matches":
                        try {
                          const r = new RegExp(n);
                          return r.test(e) || r.test(t)
                        } catch {
                          return !1
                        }
                      case "==":
                        return e === n || t === n;
                      case "!=":
                        return e === t ? e !== n : t !== n;
                      default:
                        return !1
                    }
                  }(l, d, m, t)
                }(n.value, n.op, n.includeQueryParam)
              } catch (e) {
                return console.error("vsly: Failed to evaluate targeting formula", e), !1
              }
            }(e.targeting.formula));
            if (0 === t.length) return;
            const n = jo(t);
            let r = Oo(n, t);
            if (r = Lo(r, t), !r) return;
            if (!r.experiment) return;
            No(n, r);
            const o = r.experiment,
              i = ne({
                experienceId: o.name,
                variantId: o.variant,
                version: o.version,
                gaExperienceName: o.gaName,
                gaVariantName: o.gaVariant
              });
            Co(i, zt(), _(() => !!o.ga) || !1);
            const s = _(() => o.code.find(e => "pageRedirect" === e.kind).value);
            s && ee(i, s.destUrl, s.redirectAfter || 1, s.retainQueryParams, s.stickinessMode)
          }(n)
        } catch (e) {
          console.error("vsly ETT", e)
        }
      }(), window.vsly_redirecting
  }
  const zo = () => window.loomi_ctx.blockingConcent;
  (function() {
    try {
      let t;

      function e(e) {
        if (t) return e;
        (function() {
          const e = ko();
          e.length > 0 && Promise.allSettled(e.map(bo)).then(t => {
            To(e.filter((e, n) => {
              const r = t[n];
              return ("fulfilled" !== r.status || !r.value) && (e.retries++, (e => !(Date.now() - e.timestamp > 18e5 || e.retries > 3))(e))
            }))
          }).catch(e => {
            console.error("vsly: Failed to process analytics queue", e)
          })
        })(), (() => {
          const e = () => {
            const e = se();
            return !!e && !Uo.includes(e)
          };
          return new Promise((t, n) => {
            const r = window.loomi_ctx.consent ||= {};
            r.init = qo(), (se() ? Bo() : v(se, 50, 200)).then(() => {
              e() && (Mo(), t())
            }), (_(() => Fo().analyticsProcessingAllowed) ? Bo() : v(() => _(() => Fo().analyticsProcessingAllowed), 50, 200)).then(() => {
              const r = Fo().analyticsProcessingAllowed() || e();
              Mo(r), r ? t() : n()
            }), r.ccListener || (document.addEventListener("visitorConsentCollected", r => {
              const o = r.detail.analyticsAllowed || e();
              Mo(o), o ? t() : n()
            }), r.ccListener = !0)
          })
        })().catch(),
          function() {
            try {
              Jo().as = performance.now()
            } catch (e) {}
          }();
        const s = ho(o, i);
        return s.then(Vo), s.then(e => {
          let {
            configuration: t,
            tracking: r
          } = e;
          return (e => {
              p("vsly-a", `${(e=>e==n.STAGE?"https://sdk.loomi-stg.xyz/":"https://assets.visually.io/")(e)}v/visually-a.js?cb=${window.loomi_ctx.sdk_version}`, {
                defer: !0
              }).catch()
            })(i),
            function(e) {
              let {
                configuration: t,
                tracking: n
              } = e;
              try {
                return Promise.resolve(function(e, t) {
                  try {
                    const {
                      storeAlias: n,
                      env: r
                    } = window.loomi_ctx;
                    return Promise.resolve(Ho(function() {
                      return Promise.resolve(po(e, n, r, t)).then(function(e) {
                        let {
                          jitsu: t,
                          configuration: o
                        } = e;
                        if (!_(() => o.flags["kill-switch"])) return Promise.resolve(Be()).then(function() {
                          on(o.experiments), Dr(t, o), Vn(r, n, lo), dt()
                        })
                      })
                    }, function(e) {
                      _(() => e.message) !== Dn && F("fail initialising sdk", e)
                    }))
                  } catch (e) {
                    return Promise.reject(e)
                  }
                }(t, n)).then(function() {
                  window.dispatchEvent(new Event("visually_loaded"))
                })
              } catch (e) {
                return Promise.reject(e)
              }
            }({
              configuration: t,
              tracking: r
            })
        }).catch(r).finally(Tn)
      }
      const r = e => console.error(e);
      if (window.fetch && (window.vslyNativeFetch = window.fetch), window.vsly_init = !0, window.vslyIntegrationType = "static", (() => {
          if (_(() => window.visually_io_editor)) return !0;
          const e = _(() => window.loomi_ctx.ttl);
          return !("number" != typeof e || !Number.isFinite(e) || e <= 0) && e < Math.floor(Date.now() / 1e3)
        })()) return console.log("sdk bloqueado"), Promise.resolve();
      window.loomi_ctx.sdk_version = "0.12.167";
      const {
        storeAlias: o,
        env: i
      } = window.loomi_ctx;
      if (!zo() && Go()) return Promise.resolve();
      const s = function() {
        if (zo()) {
          function e(e) {
            return t ? e : window.loomi_ctx.consent.allowed ? void(Go() && (t = 1)) : (Tn(), void(t = 1))
          }
          const n = Ho(function() {
            return Promise.resolve((console.log("consent api init"), new Promise((e, t) => {
              const n = window.loomi_ctx.consent ||= {};
              n.init = Ro(), (_(() => Do().analyticsProcessingAllowed) ? Promise.resolve() : v(() => _(() => Do().analyticsProcessingAllowed), 50, 200)).then(() => {
                const n = window.Shopify.customerPrivacy.analyticsProcessingAllowed();
                console.log("consent api", n), $o(n), n ? e() : t()
              }), n.ccListener || (document.addEventListener("visitorConsentCollected", () => {
                const n = window.Shopify.customerPrivacy.analyticsProcessingAllowed();
                console.log("visitorConsentCollected", n), $o(n), n ? e() : t()
              }), n.ccListener = !0)
            }))).then(function() {})
          }, function() {
            Tn(), t = 1
          });
          return n && n.then ? n.then(e) : e(n)
        }
      }();
      return Promise.resolve(s && s.then ? s.then(e) : e(s))
    } catch (c) {
      return Promise.reject(c)
    }
  })().then(() => console.log("vsly sdk com inicialização embutida"))
}();
