const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["./CikkBHJe.js", "./DlAUqK2U.js", "./eegS00Nj.js", "./PmCtNV9j.js", "./C5rrWGVN.js", "./BrKijO9F.js", "./DCq7B85m.js", "./BKiLo3vG.js", "./KUo10E8W.js", "./SpecialImage.BqO3DtzY.css", "./Media.BYLiXILd.css", "./DdINplLZ.js", "./CNOh7Uc9.js", "./DbXiTmOW.js", "./B1rKZ2bT.js", "./BlTv-wRR.js", "./HzSxZUuU.js", "./serializers.Dyep4QO5.css", "./PageWrapper.8aKd7iOg.css", "./CR0RBksQ.js", "./carousel.Biyf2KP6.css", "./BegM3CFY.js", "./Accordion.MJGTxjpk.css", "./Bm9YOhbA.js", "./C-3k_uH6.js", "./D0umOX2w.js", "./Ci9JOfGO.js", "./Card.CLZnHlvp.css", "./Oz96PXud.js", "./DrDHP7fy.js", "./DPb9Asf-.js", "./PageSection.D4WiQZT9.css", "./CvCMSblG.js", "./index.DXOVi5RT.css", "./DdBf6raR.js", "./nKw-4uvu.js", "./ijCMTZqP.js", "./contact.kw74ryP8.css", "./CvQjEz_V.js", "./_handle_.VrQAQKJW.css", "./DfHI1kKm.js", "./CcZybsNs.js", "./erd-paris.GIg-37II.css", "./CwKAg9-l.js", "./erd-seoul.BmlxV9PT.css", "./CYM67Lk1.js", "./CNkdV2my.js", "./B_LaAWBr.js", "./B6mODPgv.js", "./CloseButton.Cw78qo67.css", "./index.Cwnp7agS.css", "./EO3Mr-E1.js", "./_handle_.DSCLKMJR.css", "./C_nQwz3_.js", "./_handle_.DiTid3Ef.css", "./CdjznwS2.js", "./CNNrqY82.js", "./Grid.CyrBgAId.css", "./_term_.Cpjke1aw.css", "./DopoCrHr.js", "./NTgl4yEg.js", "./BrskilMe.js", "./login.D55Wb5Hj.css", "./BU8Ok2h3.js", "./_handle_.PqyrXltJ.css", "./Rf3Hp45L.js", "./index.s2Kf9gbM.css", "./Dm-7s_y1.js", "./cIysFArK.js", "./Group.d5uZvE3-.css", "./CN23l_nt.js", "./Lightbox.lovHKly7.css", "./account.Bof6N0Bl.css", "./Ctx2EKHC.js", "./CvMP9Ied.js", "./BreadCrumbs.BWFNFma2.css", "./CIQZrPB2.js", "./_handle_.6_1yw3kZ.css", "./YpPlOu9X.js", "./activate.CI6A4W6b.css", "./Cflp0U9x.js", "./register.BYIg3Mzk.css", "./Bh54IJM0.js", "./anti-public-library.DzrJIA6Q.css", "./Cq8myGfg.js", "./_handle_.BCvE_HY4.css", "./D-cqbnyr.js", "./reset-password.ZqfyF1aI.css", "./DTcZhUel.js", "./forgot-password.C_qjG5Nf.css", "./BPHIHxwJ.js", "./default.CAtgcsJq.css", "./e75IGLvM.js", "./error-404.DL_4WIao.css", "./C207MzMo.js", "./error-500.I1Dtv2V5.css"]))) => i.map(i => d[i]);
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) n(o);
    new MutationObserver(o => {
        for (const i of o)
            if (i.type === "childList")
                for (const s of i.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && n(s)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function r(o) {
        const i = {};
        return o.integrity && (i.integrity = o.integrity), o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
    }

    function n(o) {
        if (o.ep) return;
        o.ep = !0;
        const i = r(o);
        fetch(o.href, i)
    }
})();

function fa(e) {
    const t = Object.create(null);
    for (const r of e.split(",")) t[r] = 1;
    return r => r in t
}
const be = {},
    Dr = [],
    Ot = () => {},
    ku = () => !1,
    Mn = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
    qo = e => e.startsWith("onUpdate:"),
    qe = Object.assign,
    da = (e, t) => {
        const r = e.indexOf(t);
        r > -1 && e.splice(r, 1)
    },
    ah = Object.prototype.hasOwnProperty,
    me = (e, t) => ah.call(e, t),
    oe = Array.isArray,
    jr = e => Yr(e) === "[object Map]",
    Uo = e => Yr(e) === "[object Set]",
    qa = e => Yr(e) === "[object Date]",
    ch = e => Yr(e) === "[object RegExp]",
    se = e => typeof e == "function",
    Se = e => typeof e == "string",
    dt = e => typeof e == "symbol",
    he = e => e !== null && typeof e == "object",
    ha = e => (he(e) || se(e)) && se(e.then) && se(e.catch),
    Iu = Object.prototype.toString,
    Yr = e => Iu.call(e),
    lh = e => Yr(e).slice(8, -1),
    Mu = e => Yr(e) === "[object Object]",
    Fo = e => Se(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
    gr = fa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
    $o = e => {
        const t = Object.create(null);
        return (r => t[r] || (t[r] = e(r)))
    },
    uh = /-\w/g,
    rt = $o(e => e.replace(uh, t => t.slice(1).toUpperCase())),
    fh = /\B([A-Z])/g,
    Cr = $o(e => e.replace(fh, "-$1").toLowerCase()),
    Vo = $o(e => e.charAt(0).toUpperCase() + e.slice(1)),
    ui = $o(e => e ? `on${Vo(e)}` : ""),
    At = (e, t) => !Object.is(e, t),
    Hr = (e, ...t) => {
        for (let r = 0; r < e.length; r++) e[r](...t)
    },
    Lu = (e, t, r, n = !1) => {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !1,
            writable: n,
            value: r
        })
    },
    Wo = e => {
        const t = parseFloat(e);
        return isNaN(t) ? e : t
    },
    Nu = e => {
        const t = Se(e) ? Number(e) : NaN;
        return isNaN(t) ? e : t
    };
let Ua;
const zo = () => Ua || (Ua = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});

function Er(e) {
    if (oe(e)) {
        const t = {};
        for (let r = 0; r < e.length; r++) {
            const n = e[r],
                o = Se(n) ? mh(n) : Er(n);
            if (o)
                for (const i in o) t[i] = o[i]
        }
        return t
    } else if (Se(e) || he(e)) return e
}
const dh = /;(?![^(]*\))/g,
    hh = /:([^]+)/,
    ph = /\/\*[^]*?\*\//g;

function mh(e) {
    const t = {};
    return e.replace(ph, "").split(dh).forEach(r => {
        if (r) {
            const n = r.split(hh);
            n.length > 1 && (t[n[0].trim()] = n[1].trim())
        }
    }), t
}

function lt(e) {
    let t = "";
    if (Se(e)) t = e;
    else if (oe(e))
        for (let r = 0; r < e.length; r++) {
            const n = lt(e[r]);
            n && (t += n + " ")
        } else if (he(e))
            for (const r in e) e[r] && (t += r + " ");
    return t.trim()
}

function gh(e) {
    if (!e) return null;
    let {
        class: t,
        style: r
    } = e;
    return t && !Se(t) && (e.class = lt(t)), r && (e.style = Er(r)), e
}
const vh = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
    yh = fa(vh);

function Du(e) {
    return !!e || e === ""
}

function bh(e, t) {
    if (e.length !== t.length) return !1;
    let r = !0;
    for (let n = 0; r && n < e.length; n++) r = Ln(e[n], t[n]);
    return r
}

function Ln(e, t) {
    if (e === t) return !0;
    let r = qa(e),
        n = qa(t);
    if (r || n) return r && n ? e.getTime() === t.getTime() : !1;
    if (r = dt(e), n = dt(t), r || n) return e === t;
    if (r = oe(e), n = oe(t), r || n) return r && n ? bh(e, t) : !1;
    if (r = he(e), n = he(t), r || n) {
        if (!r || !n) return !1;
        const o = Object.keys(e).length,
            i = Object.keys(t).length;
        if (o !== i) return !1;
        for (const s in e) {
            const a = e.hasOwnProperty(s),
                c = t.hasOwnProperty(s);
            if (a && !c || !a && c || !Ln(e[s], t[s])) return !1
        }
    }
    return String(e) === String(t)
}

function _h(e, t) {
    return e.findIndex(r => Ln(r, t))
}
const ju = e => !!(e && e.__v_isRef === !0),
    wh = e => Se(e) ? e : e == null ? "" : oe(e) || he(e) && (e.toString === Iu || !se(e.toString)) ? ju(e) ? wh(e.value) : JSON.stringify(e, Hu, 2) : String(e),
    Hu = (e, t) => ju(t) ? Hu(e, t.value) : jr(t) ? {
        [`Map(${t.size})`]: [...t.entries()].reduce((r, [n, o], i) => (r[fi(n, i) + " =>"] = o, r), {})
    } : Uo(t) ? {
        [`Set(${t.size})`]: [...t.values()].map(r => fi(r))
    } : dt(t) ? fi(t) : he(t) && !oe(t) && !Mu(t) ? String(t) : t,
    fi = (e, t = "") => {
        var r;
        return dt(e) ? `Symbol(${(r=e.description)!=null?r:t})` : e
    };
let He;
class Bu {
    constructor(t = !1) {
        this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && He && (He.active ? (this.parent = He, this.index = (He.scopes || (He.scopes = [])).push(this) - 1) : (this._active = !1, this._warnOnRun = !1))
    }
    get active() {
        return this._active
    }
    pause() {
        if (this._active) {
            this._isPaused = !0;
            let t, r;
            if (this.scopes)
                for (t = 0, r = this.scopes.length; t < r; t++) this.scopes[t].pause();
            for (t = 0, r = this.effects.length; t < r; t++) this.effects[t].pause()
        }
    }
    resume() {
        if (this._active && this._isPaused) {
            this._isPaused = !1;
            let t, r;
            if (this.scopes)
                for (t = 0, r = this.scopes.length; t < r; t++) this.scopes[t].resume();
            for (t = 0, r = this.effects.length; t < r; t++) this.effects[t].resume()
        }
    }
    run(t) {
        if (this._active) {
            const r = He;
            try {
                return He = this, t()
            } finally {
                He = r
            }
        }
    }
    on() {
        ++this._on === 1 && (this.prevScope = He, He = this)
    }
    off() {
        if (this._on > 0 && --this._on === 0) {
            if (He === this) He = this.prevScope;
            else {
                let t = He;
                for (; t;) {
                    if (t.prevScope === this) {
                        t.prevScope = this.prevScope;
                        break
                    }
                    t = t.prevScope
                }
            }
            this.prevScope = void 0
        }
    }
    stop(t) {
        if (this._active) {
            this._active = !1;
            let r, n;
            for (r = 0, n = this.effects.length; r < n; r++) this.effects[r].stop();
            for (this.effects.length = 0, r = 0, n = this.cleanups.length; r < n; r++) this.cleanups[r]();
            if (this.cleanups.length = 0, this.scopes) {
                for (r = 0, n = this.scopes.length; r < n; r++) this.scopes[r].stop(!0);
                this.scopes.length = 0
            }
            if (!this.detached && this.parent && !t) {
                const o = this.parent.scopes.pop();
                o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index)
            }
            this.parent = void 0
        }
    }
}

function Eh(e) {
    return new Bu(e)
}

function qu() {
    return He
}

function $0(e, t = !1) {
    He && He.cleanups.push(e)
}
let Ee;
const di = new WeakSet;
class Uu {
    constructor(t) {
        this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, He && (He.active ? He.effects.push(this) : this.flags &= -2)
    }
    pause() {
        this.flags |= 64
    }
    resume() {
        this.flags & 64 && (this.flags &= -65, di.has(this) && (di.delete(this), this.trigger()))
    }
    notify() {
        this.flags & 2 && !(this.flags & 32) || this.flags & 8 || $u(this)
    }
    run() {
        if (!(this.flags & 1)) return this.fn();
        this.flags |= 2, Fa(this), Vu(this);
        const t = Ee,
            r = _t;
        Ee = this, _t = !0;
        try {
            return this.fn()
        } finally {
            Wu(this), Ee = t, _t = r, this.flags &= -3
        }
    }
    stop() {
        if (this.flags & 1) {
            for (let t = this.deps; t; t = t.nextDep) ga(t);
            this.deps = this.depsTail = void 0, Fa(this), this.onStop && this.onStop(), this.flags &= -2
        }
    }
    trigger() {
        this.flags & 64 ? di.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
    }
    runIfDirty() {
        Ts(this) && this.run()
    }
    get dirty() {
        return Ts(this)
    }
}
let Fu = 0,
    gn, vn;

function $u(e, t = !1) {
    if (e.flags |= 8, t) {
        e.next = vn, vn = e;
        return
    }
    e.next = gn, gn = e
}

function pa() {
    Fu++
}

function ma() {
    if (--Fu > 0) return;
    if (vn) {
        let t = vn;
        for (vn = void 0; t;) {
            const r = t.next;
            t.next = void 0, t.flags &= -9, t = r
        }
    }
    let e;
    for (; gn;) {
        let t = gn;
        for (gn = void 0; t;) {
            const r = t.next;
            if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
                t.trigger()
            } catch (n) {
                e || (e = n)
            }
            t = r
        }
    }
    if (e) throw e
}

function Vu(e) {
    for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t
}

function Wu(e) {
    let t, r = e.depsTail,
        n = r;
    for (; n;) {
        const o = n.prevDep;
        n.version === -1 ? (n === r && (r = o), ga(n), Sh(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = o
    }
    e.deps = t, e.depsTail = r
}

function Ts(e) {
    for (let t = e.deps; t; t = t.nextDep)
        if (t.dep.version !== t.version || t.dep.computed && (zu(t.dep.computed) || t.dep.version !== t.version)) return !0;
    return !!e._dirty
}

function zu(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Rn) || (e.globalVersion = Rn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ts(e)))) return;
    e.flags |= 2;
    const t = e.dep,
        r = Ee,
        n = _t;
    Ee = e, _t = !0;
    try {
        Vu(e);
        const o = e.fn(e._value);
        (t.version === 0 || At(o, e._value)) && (e.flags |= 128, e._value = o, t.version++)
    } catch (o) {
        throw t.version++, o
    } finally {
        Ee = r, _t = n, Wu(e), e.flags &= -3
    }
}

function ga(e, t = !1) {
    const {
        dep: r,
        prevSub: n,
        nextSub: o
    } = e;
    if (n && (n.nextSub = o, e.prevSub = void 0), o && (o.prevSub = n, e.nextSub = void 0), r.subs === e && (r.subs = n, !n && r.computed)) {
        r.computed.flags &= -5;
        for (let i = r.computed.deps; i; i = i.nextDep) ga(i, !0)
    }!t && !--r.sc && r.map && r.map.delete(r.key)
}

function Sh(e) {
    const {
        prevDep: t,
        nextDep: r
    } = e;
    t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0)
}
let _t = !0;
const Gu = [];

function xt() {
    Gu.push(_t), _t = !1
}

function kt() {
    const e = Gu.pop();
    _t = e === void 0 ? !0 : e
}

function Fa(e) {
    const {
        cleanup: t
    } = e;
    if (e.cleanup = void 0, t) {
        const r = Ee;
        Ee = void 0;
        try {
            t()
        } finally {
            Ee = r
        }
    }
}
let Rn = 0;
class Rh {
    constructor(t, r) {
        this.sub = t, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0
    }
}
class Go {
    constructor(t) {
        this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0
    }
    track(t) {
        if (!Ee || !_t || Ee === this.computed) return;
        let r = this.activeLink;
        if (r === void 0 || r.sub !== Ee) r = this.activeLink = new Rh(Ee, this), Ee.deps ? (r.prevDep = Ee.depsTail, Ee.depsTail.nextDep = r, Ee.depsTail = r) : Ee.deps = Ee.depsTail = r, Ku(r);
        else if (r.version === -1 && (r.version = this.version, r.nextDep)) {
            const n = r.nextDep;
            n.prevDep = r.prevDep, r.prevDep && (r.prevDep.nextDep = n), r.prevDep = Ee.depsTail, r.nextDep = void 0, Ee.depsTail.nextDep = r, Ee.depsTail = r, Ee.deps === r && (Ee.deps = n)
        }
        return r
    }
    trigger(t) {
        this.version++, Rn++, this.notify(t)
    }
    notify(t) {
        pa();
        try {
            for (let r = this.subs; r; r = r.prevSub) r.sub.notify() && r.sub.dep.notify()
        } finally {
            ma()
        }
    }
}

function Ku(e) {
    if (e.dep.sc++, e.sub.flags & 4) {
        const t = e.dep.computed;
        if (t && !e.dep.subs) {
            t.flags |= 20;
            for (let n = t.deps; n; n = n.nextDep) Ku(n)
        }
        const r = e.dep.subs;
        r !== e && (e.prevSub = r, r && (r.nextSub = e)), e.dep.subs = e
    }
}
const go = new WeakMap,
    vr = Symbol(""),
    As = Symbol(""),
    Cn = Symbol("");

function Xe(e, t, r) {
    if (_t && Ee) {
        let n = go.get(e);
        n || go.set(e, n = new Map);
        let o = n.get(r);
        o || (n.set(r, o = new Go), o.map = n, o.key = r), o.track()
    }
}

function Ut(e, t, r, n, o, i) {
    const s = go.get(e);
    if (!s) {
        Rn++;
        return
    }
    const a = c => {
        c && c.trigger()
    };
    if (pa(), t === "clear") s.forEach(a);
    else {
        const c = oe(e),
            u = c && Fo(r);
        if (c && r === "length") {
            const l = Number(n);
            s.forEach((f, d) => {
                (d === "length" || d === Cn || !dt(d) && d >= l) && a(f)
            })
        } else switch ((r !== void 0 || s.has(void 0)) && a(s.get(r)), u && a(s.get(Cn)), t) {
            case "add":
                c ? u && a(s.get("length")) : (a(s.get(vr)), jr(e) && a(s.get(As)));
                break;
            case "delete":
                c || (a(s.get(vr)), jr(e) && a(s.get(As)));
                break;
            case "set":
                jr(e) && a(s.get(vr));
                break
        }
    }
    ma()
}

function Ch(e, t) {
    const r = go.get(e);
    return r && r.get(t)
}

function xr(e) {
    const t = de(e);
    return t === e ? t : (Xe(t, "iterate", Cn), ft(e) ? t : t.map(wt))
}

function Ko(e) {
    return Xe(e = de(e), "iterate", Cn), e
}

function Tt(e, t) {
    return It(e) ? Vr(tr(e) ? wt(t) : t) : wt(t)
}
const Th = {
    __proto__: null,
    [Symbol.iterator]() {
        return hi(this, Symbol.iterator, e => Tt(this, e))
    },
    concat(...e) {
        return xr(this).concat(...e.map(t => oe(t) ? xr(t) : t))
    },
    entries() {
        return hi(this, "entries", e => (e[1] = Tt(this, e[1]), e))
    },
    every(e, t) {
        return Dt(this, "every", e, t, void 0, arguments)
    },
    filter(e, t) {
        return Dt(this, "filter", e, t, r => r.map(n => Tt(this, n)), arguments)
    },
    find(e, t) {
        return Dt(this, "find", e, t, r => Tt(this, r), arguments)
    },
    findIndex(e, t) {
        return Dt(this, "findIndex", e, t, void 0, arguments)
    },
    findLast(e, t) {
        return Dt(this, "findLast", e, t, r => Tt(this, r), arguments)
    },
    findLastIndex(e, t) {
        return Dt(this, "findLastIndex", e, t, void 0, arguments)
    },
    forEach(e, t) {
        return Dt(this, "forEach", e, t, void 0, arguments)
    },
    includes(...e) {
        return pi(this, "includes", e)
    },
    indexOf(...e) {
        return pi(this, "indexOf", e)
    },
    join(e) {
        return xr(this).join(e)
    },
    lastIndexOf(...e) {
        return pi(this, "lastIndexOf", e)
    },
    map(e, t) {
        return Dt(this, "map", e, t, void 0, arguments)
    },
    pop() {
        return nn(this, "pop")
    },
    push(...e) {
        return nn(this, "push", e)
    },
    reduce(e, ...t) {
        return $a(this, "reduce", e, t)
    },
    reduceRight(e, ...t) {
        return $a(this, "reduceRight", e, t)
    },
    shift() {
        return nn(this, "shift")
    },
    some(e, t) {
        return Dt(this, "some", e, t, void 0, arguments)
    },
    splice(...e) {
        return nn(this, "splice", e)
    },
    toReversed() {
        return xr(this).toReversed()
    },
    toSorted(e) {
        return xr(this).toSorted(e)
    },
    toSpliced(...e) {
        return xr(this).toSpliced(...e)
    },
    unshift(...e) {
        return nn(this, "unshift", e)
    },
    values() {
        return hi(this, "values", e => Tt(this, e))
    }
};

function hi(e, t, r) {
    const n = Ko(e),
        o = n[t]();
    return n !== e && !ft(e) && (o._next = o.next, o.next = () => {
        const i = o._next();
        return i.done || (i.value = r(i.value)), i
    }), o
}
const Ah = Array.prototype;

function Dt(e, t, r, n, o, i) {
    const s = Ko(e),
        a = s !== e && !ft(e),
        c = s[t];
    if (c !== Ah[t]) {
        const f = c.apply(e, i);
        return a ? wt(f) : f
    }
    let u = r;
    s !== e && (a ? u = function(f, d) {
        return r.call(this, Tt(e, f), d, e)
    } : r.length > 2 && (u = function(f, d) {
        return r.call(this, f, d, e)
    }));
    const l = c.call(s, u, n);
    return a && o ? o(l) : l
}

function $a(e, t, r, n) {
    const o = Ko(e),
        i = o !== e && !ft(e);
    let s = r,
        a = !1;
    o !== e && (i ? (a = n.length === 0, s = function(u, l, f) {
        return a && (a = !1, u = Tt(e, u)), r.call(this, u, Tt(e, l), f, e)
    }) : r.length > 3 && (s = function(u, l, f) {
        return r.call(this, u, l, f, e)
    }));
    const c = o[t](s, ...n);
    return a ? Tt(e, c) : c
}

function pi(e, t, r) {
    const n = de(e);
    Xe(n, "iterate", Cn);
    const o = n[t](...r);
    return (o === -1 || o === !1) && Xo(r[0]) ? (r[0] = de(r[0]), n[t](...r)) : o
}

function nn(e, t, r = []) {
    xt(), pa();
    const n = de(e)[t].apply(e, r);
    return ma(), kt(), n
}
const Oh = fa("__proto__,__v_isRef,__isVue"),
    Xu = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(dt));

function Ph(e) {
    dt(e) || (e = String(e));
    const t = de(this);
    return Xe(t, "has", e), t.hasOwnProperty(e)
}
class Yu {
    constructor(t = !1, r = !1) {
        this._isReadonly = t, this._isShallow = r
    }
    get(t, r, n) {
        if (r === "__v_skip") return t.__v_skip;
        const o = this._isReadonly,
            i = this._isShallow;
        if (r === "__v_isReactive") return !o;
        if (r === "__v_isReadonly") return o;
        if (r === "__v_isShallow") return i;
        if (r === "__v_raw") return n === (o ? i ? Bh : ef : i ? Zu : Qu).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
        const s = oe(t);
        if (!o) {
            let c;
            if (s && (c = Th[r])) return c;
            if (r === "hasOwnProperty") return Ph
        }
        const a = Reflect.get(t, r, Me(t) ? t : n);
        if ((dt(r) ? Xu.has(r) : Oh(r)) || (o || Xe(t, "get", r), i)) return a;
        if (Me(a)) {
            const c = s && Fo(r) ? a : a.value;
            return o && he(c) ? Ps(c) : c
        }
        return he(a) ? o ? Ps(a) : Kt(a) : a
    }
}
class Ju extends Yu {
    constructor(t = !1) {
        super(!1, t)
    }
    set(t, r, n, o) {
        let i = t[r];
        const s = oe(t) && Fo(r);
        if (!this._isShallow) {
            const u = It(i);
            if (!ft(n) && !It(n) && (i = de(i), n = de(n)), !s && Me(i) && !Me(n)) return u || (i.value = n), !0
        }
        const a = s ? Number(r) < t.length : me(t, r),
            c = Reflect.set(t, r, n, Me(t) ? t : o);
        return t === de(o) && c && (a ? At(n, i) && Ut(t, "set", r, n) : Ut(t, "add", r, n)), c
    }
    deleteProperty(t, r) {
        const n = me(t, r);
        t[r];
        const o = Reflect.deleteProperty(t, r);
        return o && n && Ut(t, "delete", r, void 0), o
    }
    has(t, r) {
        const n = Reflect.has(t, r);
        return (!dt(r) || !Xu.has(r)) && Xe(t, "has", r), n
    }
    ownKeys(t) {
        return Xe(t, "iterate", oe(t) ? "length" : vr), Reflect.ownKeys(t)
    }
}
class xh extends Yu {
    constructor(t = !1) {
        super(!0, t)
    }
    set(t, r) {
        return !0
    }
    deleteProperty(t, r) {
        return !0
    }
}
const kh = new Ju,
    Ih = new xh,
    Mh = new Ju(!0);
const Os = e => e,
    Bn = e => Reflect.getPrototypeOf(e);

function Lh(e, t, r) {
    return function(...n) {
        const o = this.__v_raw,
            i = de(o),
            s = jr(i),
            a = e === "entries" || e === Symbol.iterator && s,
            c = e === "keys" && s,
            u = o[e](...n),
            l = r ? Os : t ? Vr : wt;
        return !t && Xe(i, "iterate", c ? As : vr), qe(Object.create(u), {
            next() {
                const {
                    value: f,
                    done: d
                } = u.next();
                return d ? {
                    value: f,
                    done: d
                } : {
                    value: a ? [l(f[0]), l(f[1])] : l(f),
                    done: d
                }
            }
        })
    }
}

function qn(e) {
    return function(...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}

function Nh(e, t) {
    const r = {
        get(o) {
            const i = this.__v_raw,
                s = de(i),
                a = de(o);
            e || (At(o, a) && Xe(s, "get", o), Xe(s, "get", a));
            const {
                has: c
            } = Bn(s), u = t ? Os : e ? Vr : wt;
            if (c.call(s, o)) return u(i.get(o));
            if (c.call(s, a)) return u(i.get(a));
            i !== s && i.get(o)
        },
        get size() {
            const o = this.__v_raw;
            return !e && Xe(de(o), "iterate", vr), o.size
        },
        has(o) {
            const i = this.__v_raw,
                s = de(i),
                a = de(o);
            return e || (At(o, a) && Xe(s, "has", o), Xe(s, "has", a)), o === a ? i.has(o) : i.has(o) || i.has(a)
        },
        forEach(o, i) {
            const s = this,
                a = s.__v_raw,
                c = de(a),
                u = t ? Os : e ? Vr : wt;
            return !e && Xe(c, "iterate", vr), a.forEach((l, f) => o.call(i, u(l), u(f), s))
        }
    };
    return qe(r, e ? {
        add: qn("add"),
        set: qn("set"),
        delete: qn("delete"),
        clear: qn("clear")
    } : {
        add(o) {
            const i = de(this),
                s = Bn(i),
                a = de(o),
                c = !t && !ft(o) && !It(o) ? a : o;
            return s.has.call(i, c) || At(o, c) && s.has.call(i, o) || At(a, c) && s.has.call(i, a) || (i.add(c), Ut(i, "add", c, c)), this
        },
        set(o, i) {
            !t && !ft(i) && !It(i) && (i = de(i));
            const s = de(this),
                {
                    has: a,
                    get: c
                } = Bn(s);
            let u = a.call(s, o);
            u || (o = de(o), u = a.call(s, o));
            const l = c.call(s, o);
            return s.set(o, i), u ? At(i, l) && Ut(s, "set", o, i) : Ut(s, "add", o, i), this
        },
        delete(o) {
            const i = de(this),
                {
                    has: s,
                    get: a
                } = Bn(i);
            let c = s.call(i, o);
            c || (o = de(o), c = s.call(i, o)), a && a.call(i, o);
            const u = i.delete(o);
            return c && Ut(i, "delete", o, void 0), u
        },
        clear() {
            const o = de(this),
                i = o.size !== 0,
                s = o.clear();
            return i && Ut(o, "clear", void 0, void 0), s
        }
    }), ["keys", "values", "entries", Symbol.iterator].forEach(o => {
        r[o] = Lh(o, e, t)
    }), r
}

function va(e, t) {
    const r = Nh(e, t);
    return (n, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? n : Reflect.get(me(r, o) && o in n ? r : n, o, i)
}
const Dh = {
        get: va(!1, !1)
    },
    jh = {
        get: va(!1, !0)
    },
    Hh = {
        get: va(!0, !1)
    };
const Qu = new WeakMap,
    Zu = new WeakMap,
    ef = new WeakMap,
    Bh = new WeakMap;

function qh(e) {
    switch (e) {
        case "Object":
        case "Array":
            return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2;
        default:
            return 0
    }
}

function Kt(e) {
    return It(e) ? e : ya(e, !1, kh, Dh, Qu)
}

function Vt(e) {
    return ya(e, !1, Mh, jh, Zu)
}

function Ps(e) {
    return ya(e, !0, Ih, Hh, ef)
}

function ya(e, t, r, n, o) {
    if (!he(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
    const i = o.get(e);
    if (i) return i;
    const s = qh(lh(e));
    if (s === 0) return e;
    const a = new Proxy(e, s === 2 ? n : r);
    return o.set(e, a), a
}

function tr(e) {
    return It(e) ? tr(e.__v_raw) : !!(e && e.__v_isReactive)
}

function It(e) {
    return !!(e && e.__v_isReadonly)
}

function ft(e) {
    return !!(e && e.__v_isShallow)
}

function Xo(e) {
    return e ? !!e.__v_raw : !1
}

function de(e) {
    const t = e && e.__v_raw;
    return t ? de(t) : e
}

function Uh(e) {
    return !me(e, "__v_skip") && Object.isExtensible(e) && Lu(e, "__v_skip", !0), e
}
const wt = e => he(e) ? Kt(e) : e,
    Vr = e => he(e) ? Ps(e) : e;

function Me(e) {
    return e ? e.__v_isRef === !0 : !1
}

function Ce(e) {
    return tf(e, !1)
}

function Wr(e) {
    return tf(e, !0)
}

function tf(e, t) {
    return Me(e) ? e : new Fh(e, t)
}
class Fh {
    constructor(t, r) {
        this.dep = new Go, this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? t : de(t), this._value = r ? t : wt(t), this.__v_isShallow = r
    }
    get value() {
        return this.dep.track(), this._value
    }
    set value(t) {
        const r = this._rawValue,
            n = this.__v_isShallow || ft(t) || It(t);
        t = n ? t : de(t), At(t, r) && (this._rawValue = t, this._value = n ? t : wt(t), this.dep.trigger())
    }
}

function ge(e) {
    return Me(e) ? e.value : e
}

function $h(e) {
    return se(e) ? e() : ge(e)
}
const Vh = {
    get: (e, t, r) => t === "__v_raw" ? e : ge(Reflect.get(e, t, r)),
    set: (e, t, r, n) => {
        const o = e[t];
        return Me(o) && !Me(r) ? (o.value = r, !0) : Reflect.set(e, t, r, n)
    }
};

function rf(e) {
    return tr(e) ? e : new Proxy(e, Vh)
}
class Wh {
    constructor(t) {
        this.__v_isRef = !0, this._value = void 0;
        const r = this.dep = new Go,
            {
                get: n,
                set: o
            } = t(r.track.bind(r), r.trigger.bind(r));
        this._get = n, this._set = o
    }
    get value() {
        return this._value = this._get()
    }
    set value(t) {
        this._set(t)
    }
}

function V0(e) {
    return new Wh(e)
}

function W0(e) {
    const t = oe(e) ? new Array(e.length) : {};
    for (const r in e) t[r] = nf(e, r);
    return t
}
class zh {
    constructor(t, r, n) {
        this._object = t, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = dt(r) ? r : String(r), this._raw = de(t);
        let o = !0,
            i = t;
        if (!oe(t) || dt(this._key) || !Fo(this._key))
            do o = !Xo(i) || ft(i); while (o && (i = i.__v_raw));
        this._shallow = o
    }
    get value() {
        let t = this._object[this._key];
        return this._shallow && (t = ge(t)), this._value = t === void 0 ? this._defaultValue : t
    }
    set value(t) {
        if (this._shallow && Me(this._raw[this._key])) {
            const r = this._object[this._key];
            if (Me(r)) {
                r.value = t;
                return
            }
        }
        this._object[this._key] = t
    }
    get dep() {
        return Ch(this._raw, this._key)
    }
}
class Gh {
    constructor(t) {
        this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0
    }
    get value() {
        return this._value = this._getter()
    }
}

function Kh(e, t, r) {
    return Me(e) ? e : se(e) ? new Gh(e) : he(e) && arguments.length > 1 ? nf(e, t, r) : Ce(e)
}

function nf(e, t, r) {
    return new zh(e, t, r)
}
class Xh {
    constructor(t, r, n) {
        this.fn = t, this.setter = r, this._value = void 0, this.dep = new Go(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Rn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = n
    }
    notify() {
        if (this.flags |= 16, !(this.flags & 8) && Ee !== this) return $u(this, !0), !0
    }
    get value() {
        const t = this.dep.track();
        return zu(this), t && (t.version = this.dep.version), this._value
    }
    set value(t) {
        this.setter && this.setter(t)
    }
}

function Yh(e, t, r = !1) {
    let n, o;
    return se(e) ? n = e : (n = e.get, o = e.set), new Xh(n, o, r)
}
const Un = {},
    vo = new WeakMap;
let dr;

function Jh(e, t = !1, r = dr) {
    if (r) {
        let n = vo.get(r);
        n || vo.set(r, n = []), n.push(e)
    }
}

function Qh(e, t, r = be) {
    const {
        immediate: n,
        deep: o,
        once: i,
        scheduler: s,
        augmentJob: a,
        call: c
    } = r, u = g => o ? g : ft(g) || o === !1 || o === 0 ? Ft(g, 1) : Ft(g);
    let l, f, d, p, m = !1,
        b = !1;
    if (Me(e) ? (f = () => e.value, m = ft(e)) : tr(e) ? (f = () => u(e), m = !0) : oe(e) ? (b = !0, m = e.some(g => tr(g) || ft(g)), f = () => e.map(g => {
            if (Me(g)) return g.value;
            if (tr(g)) return u(g);
            if (se(g)) return c ? c(g, 2) : g()
        })) : se(e) ? t ? f = c ? () => c(e, 2) : e : f = () => {
            if (d) {
                xt();
                try {
                    d()
                } finally {
                    kt()
                }
            }
            const g = dr;
            dr = l;
            try {
                return c ? c(e, 3, [p]) : e(p)
            } finally {
                dr = g
            }
        } : f = Ot, t && o) {
        const g = f,
            y = o === !0 ? 1 / 0 : o;
        f = () => Ft(g(), y)
    }
    const P = qu(),
        w = () => {
            l.stop(), P && P.active && da(P.effects, l)
        };
    if (i && t) {
        const g = t;
        t = (...y) => {
            const x = g(...y);
            return w(), x
        }
    }
    let v = b ? new Array(e.length).fill(Un) : Un;
    const h = g => {
        if (!(!(l.flags & 1) || !l.dirty && !g))
            if (t) {
                const y = l.run();
                if (g || o || m || (b ? y.some((x, T) => At(x, v[T])) : At(y, v))) {
                    d && d();
                    const x = dr;
                    dr = l;
                    try {
                        const T = [y, v === Un ? void 0 : b && v[0] === Un ? [] : v, p];
                        v = y, c ? c(t, 3, T) : t(...T)
                    } finally {
                        dr = x
                    }
                }
            } else l.run()
    };
    return a && a(h), l = new Uu(f), l.scheduler = s ? () => s(h, !1) : h, p = g => Jh(g, !1, l), d = l.onStop = () => {
        const g = vo.get(l);
        if (g) {
            if (c) c(g, 4);
            else
                for (const y of g) y();
            vo.delete(l)
        }
    }, t ? n ? h(!0) : v = l.run() : s ? s(h.bind(null, !0), !0) : l.run(), w.pause = l.pause.bind(l), w.resume = l.resume.bind(l), w.stop = w, w
}

function Ft(e, t = 1 / 0, r) {
    if (t <= 0 || !he(e) || e.__v_skip || (r = r || new Map, (r.get(e) || 0) >= t)) return e;
    if (r.set(e, t), t--, Me(e)) Ft(e.value, t, r);
    else if (oe(e))
        for (let n = 0; n < e.length; n++) Ft(e[n], t, r);
    else if (Uo(e) || jr(e)) e.forEach(n => {
        Ft(n, t, r)
    });
    else if (Mu(e)) {
        for (const n in e) Ft(e[n], t, r);
        for (const n of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, n) && Ft(e[n], t, r)
    }
    return e
}

function Nn(e, t, r, n) {
    try {
        return n ? e(...n) : e()
    } catch (o) {
        Jr(o, t, r)
    }
}

function yt(e, t, r, n) {
    if (se(e)) {
        const o = Nn(e, t, r, n);
        return o && ha(o) && o.catch(i => {
            Jr(i, t, r)
        }), o
    }
    if (oe(e)) {
        const o = [];
        for (let i = 0; i < e.length; i++) o.push(yt(e[i], t, r, n));
        return o
    }
}

function Jr(e, t, r, n = !0) {
    const o = t ? t.vnode : null,
        {
            errorHandler: i,
            throwUnhandledErrorInProduction: s
        } = t && t.appContext.config || be;
    if (t) {
        let a = t.parent;
        const c = t.proxy,
            u = `https://vuejs.org/error-reference/#runtime-${r}`;
        for (; a;) {
            const l = a.ec;
            if (l) {
                for (let f = 0; f < l.length; f++)
                    if (l[f](e, c, u) === !1) return
            }
            a = a.parent
        }
        if (i) {
            xt(), Nn(i, null, 10, [e, c, u]), kt();
            return
        }
    }
    Zh(e, r, o, n, s)
}

function Zh(e, t, r, n = !0, o = !1) {
    if (o) throw e;
    console.error(e)
}
const et = [];
let Rt = -1;
const Br = [];
let Qt = null,
    Mr = 0;
const of = Promise.resolve();
let yo = null;

function Qr(e) {
    const t = yo || of;
    return e ? t.then(this ? e.bind(this) : e) : t
}

function ep(e) {
    let t = Rt + 1,
        r = et.length;
    for (; t < r;) {
        const n = t + r >>> 1,
            o = et[n],
            i = Tn(o);
        i < e || i === e && o.flags & 2 ? t = n + 1 : r = n
    }
    return t
}

function ba(e) {
    if (!(e.flags & 1)) {
        const t = Tn(e),
            r = et[et.length - 1];
        !r || !(e.flags & 2) && t >= Tn(r) ? et.push(e) : et.splice(ep(t), 0, e), e.flags |= 1, sf()
    }
}

function sf() {
    yo || (yo = of.then(af))
}

function xs(e) {
    oe(e) ? Br.push(...e) : Qt && e.id === -1 ? Qt.splice(Mr + 1, 0, e) : e.flags & 1 || (Br.push(e), e.flags |= 1), sf()
}

function Va(e, t, r = Rt + 1) {
    for (; r < et.length; r++) {
        const n = et[r];
        if (n && n.flags & 2) {
            if (e && n.id !== e.uid) continue;
            et.splice(r, 1), r--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2)
        }
    }
}

function bo(e) {
    if (Br.length) {
        const t = [...new Set(Br)].sort((r, n) => Tn(r) - Tn(n));
        if (Br.length = 0, Qt) {
            Qt.push(...t);
            return
        }
        for (Qt = t, Mr = 0; Mr < Qt.length; Mr++) {
            const r = Qt[Mr];
            r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2
        }
        Qt = null, Mr = 0
    }
}
const Tn = e => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;

function af(e) {
    try {
        for (Rt = 0; Rt < et.length; Rt++) {
            const t = et[Rt];
            t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Nn(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2))
        }
    } finally {
        for (; Rt < et.length; Rt++) {
            const t = et[Rt];
            t && (t.flags &= -2)
        }
        Rt = -1, et.length = 0, bo(), yo = null, (et.length || Br.length) && af()
    }
}
let Ge = null,
    cf = null;

function _o(e) {
    const t = Ge;
    return Ge = e, cf = e && e.type.__scopeId || null, t
}

function wo(e, t = Ge, r) {
    if (!t || e._n) return e;
    const n = (...o) => {
        n._d && Ao(-1);
        const i = _o(t);
        let s;
        try {
            s = e(...o)
        } finally {
            _o(i), n._d && Ao(1)
        }
        return s
    };
    return n._n = !0, n._c = !0, n._d = !0, n
}

function tp(e, t) {
    if (Ge === null) return e;
    const r = oi(Ge),
        n = e.dirs || (e.dirs = []);
    for (let o = 0; o < t.length; o++) {
        let [i, s, a, c = be] = t[o];
        i && (se(i) && (i = {
            mounted: i,
            updated: i
        }), i.deep && Ft(s), n.push({
            dir: i,
            instance: r,
            value: s,
            oldValue: void 0,
            arg: a,
            modifiers: c
        }))
    }
    return e
}

function Ct(e, t, r, n) {
    const o = e.dirs,
        i = t && t.dirs;
    for (let s = 0; s < o.length; s++) {
        const a = o[s];
        i && (a.oldValue = i[s].value);
        let c = a.dir[n];
        c && (xt(), yt(c, r, 8, [e.el, a, e, t]), kt())
    }
}

function yr(e, t) {
    if (ze) {
        let r = ze.provides;
        const n = ze.parent && ze.parent.provides;
        n === r && (r = ze.provides = Object.create(n)), r[e] = t
    }
}

function Ke(e, t, r = !1) {
    const n = Gt();
    if (n || br) {
        let o = br ? br._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
        if (o && e in o) return o[e];
        if (arguments.length > 1) return r && se(t) ? t.call(n && n.proxy) : t
    }
}

function Yo() {
    return !!(Gt() || br)
}
const rp = Symbol.for("v-scx"),
    np = () => Ke(rp);

function lf(e, t) {
    return _a(e, null, t)
}

function rr(e, t, r) {
    return _a(e, t, r)
}

function _a(e, t, r = be) {
    const {
        immediate: n,
        deep: o,
        flush: i,
        once: s
    } = r, a = qe({}, r), c = t && n || !t && i !== "post";
    let u;
    if (Rr) {
        if (i === "sync") {
            const p = np();
            u = p.__watcherHandles || (p.__watcherHandles = [])
        } else if (!c) {
            const p = () => {};
            return p.stop = Ot, p.resume = Ot, p.pause = Ot, p
        }
    }
    const l = ze;
    a.call = (p, m, b) => yt(p, l, m, b);
    let f = !1;
    i === "post" ? a.scheduler = p => {
        Be(p, l && l.suspense)
    } : i !== "sync" && (f = !0, a.scheduler = (p, m) => {
        m ? p() : ba(p)
    }), a.augmentJob = p => {
        t && (p.flags |= 4), f && (p.flags |= 2, l && (p.id = l.uid, p.i = l))
    };
    const d = Qh(e, t, a);
    return Rr && (u ? u.push(d) : c && d()), d
}

function op(e, t, r) {
    const n = this.proxy,
        o = Se(e) ? e.includes(".") ? uf(n, e) : () => n[e] : e.bind(n, n);
    let i;
    se(t) ? i = t : (i = t.handler, r = t);
    const s = en(this),
        a = _a(o, i.bind(n), r);
    return s(), a
}

function uf(e, t) {
    const r = t.split(".");
    return () => {
        let n = e;
        for (let o = 0; o < r.length && n; o++) n = n[r[o]];
        return n
    }
}
const ip = Symbol("_vte"),
    ff = e => e.__isTeleport,
    vt = Symbol("_leaveCb"),
    on = Symbol("_enterCb");

function sp() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return ei(() => {
        e.isMounted = !0
    }), Zr(() => {
        e.isUnmounting = !0
    }), e
}
const pt = [Function, Array],
    df = {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        onBeforeEnter: pt,
        onEnter: pt,
        onAfterEnter: pt,
        onEnterCancelled: pt,
        onBeforeLeave: pt,
        onLeave: pt,
        onAfterLeave: pt,
        onLeaveCancelled: pt,
        onBeforeAppear: pt,
        onAppear: pt,
        onAfterAppear: pt,
        onAppearCancelled: pt
    },
    hf = e => {
        const t = e.subTree;
        return t.component ? hf(t.component) : t
    },
    ap = {
        name: "BaseTransition",
        props: df,
        setup(e, {
            slots: t
        }) {
            const r = Gt(),
                n = sp();
            return () => {
                const o = t.default && gf(t.default(), !0),
                    i = o && o.length ? pf(o) : r.subTree ? ct() : void 0;
                if (!i) return;
                const s = de(e),
                    {
                        mode: a
                    } = s;
                if (n.isLeaving) return mi(i);
                const c = Wa(i);
                if (!c) return mi(i);
                let u = ks(c, s, n, r, f => u = f);
                c.type !== Ie && zr(c, u);
                let l = r.subTree && Wa(r.subTree);
                if (l && l.type !== Ie && !bt(l, c) && hf(r).type !== Ie) {
                    let f = ks(l, s, n, r);
                    if (zr(l, f), a === "out-in" && c.type !== Ie) return n.isLeaving = !0, f.afterLeave = () => {
                        n.isLeaving = !1, r.job.flags & 8 || r.update(), delete f.afterLeave, l = void 0
                    }, mi(i);
                    a === "in-out" && c.type !== Ie ? f.delayLeave = (d, p, m) => {
                        const b = mf(n, l);
                        b[String(l.key)] = l, d[vt] = () => {
                            p(), d[vt] = void 0, delete u.delayedLeave, l = void 0
                        }, u.delayedLeave = () => {
                            m(), delete u.delayedLeave, l = void 0
                        }
                    } : l = void 0
                } else l && (l = void 0);
                return i
            }
        }
    };

function pf(e) {
    let t = e[0];
    if (e.length > 1) {
        for (const r of e)
            if (r.type !== Ie) {
                t = r;
                break
            }
    }
    return t
}
const cp = ap;

function mf(e, t) {
    const {
        leavingVNodes: r
    } = e;
    let n = r.get(t.type);
    return n || (n = Object.create(null), r.set(t.type, n)), n
}

function ks(e, t, r, n, o) {
    const {
        appear: i,
        mode: s,
        persisted: a = !1,
        onBeforeEnter: c,
        onEnter: u,
        onAfterEnter: l,
        onEnterCancelled: f,
        onBeforeLeave: d,
        onLeave: p,
        onAfterLeave: m,
        onLeaveCancelled: b,
        onBeforeAppear: P,
        onAppear: w,
        onAfterAppear: v,
        onAppearCancelled: h
    } = t, g = String(e.key), y = mf(r, e), x = (O, j) => {
        O && yt(O, n, 9, j)
    }, T = (O, j) => {
        const F = j[1];
        x(O, j), oe(O) ? O.every(S => S.length <= 1) && F() : O.length <= 1 && F()
    }, L = {
        mode: s,
        persisted: a,
        beforeEnter(O) {
            let j = c;
            if (!r.isMounted)
                if (i) j = P || c;
                else return;
            O[vt] && O[vt](!0);
            const F = y[g];
            F && bt(e, F) && F.el[vt] && F.el[vt](), x(j, [O])
        },
        enter(O) {
            if (y[g] === e) return;
            let j = u,
                F = l,
                S = f;
            if (!r.isMounted)
                if (i) j = w || u, F = v || l, S = h || f;
                else return;
            let E = !1;
            O[on] = I => {
                E || (E = !0, I ? x(S, [O]) : x(F, [O]), L.delayedLeave && L.delayedLeave(), O[on] = void 0)
            };
            const M = O[on].bind(null, !1);
            j ? T(j, [O, M]) : M()
        },
        leave(O, j) {
            const F = String(e.key);
            if (O[on] && O[on](!0), r.isUnmounting) return j();
            x(d, [O]);
            let S = !1;
            O[vt] = M => {
                S || (S = !0, j(), M ? x(b, [O]) : x(m, [O]), O[vt] = void 0, y[F] === e && delete y[F])
            };
            const E = O[vt].bind(null, !1);
            y[F] = e, p ? T(p, [O, E]) : E()
        },
        clone(O) {
            const j = ks(O, t, r, n, o);
            return o && o(j), j
        }
    };
    return L
}

function mi(e) {
    if (Dn(e)) return e = zt(e), e.children = null, e
}

function Wa(e) {
    if (!Dn(e)) return ff(e.type) && e.children ? pf(e.children) : e;
    if (e.component) return e.component.subTree;
    const {
        shapeFlag: t,
        children: r
    } = e;
    if (r) {
        if (t & 16) return r[0];
        if (t & 32 && se(r.default)) return r.default()
    }
}

function zr(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t, zr(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}

function gf(e, t = !1, r) {
    let n = [],
        o = 0;
    for (let i = 0; i < e.length; i++) {
        let s = e[i];
        const a = r == null ? s.key : String(r) + String(s.key != null ? s.key : i);
        s.type === ke ? (s.patchFlag & 128 && o++, n = n.concat(gf(s.children, t, a))) : (t || s.type !== Ie) && n.push(a != null ? zt(s, {
            key: a
        }) : s)
    }
    if (o > 1)
        for (let i = 0; i < n.length; i++) n[i].patchFlag = -2;
    return n
}

function Tr(e, t) {
    return se(e) ? qe({
        name: e.name
    }, t, {
        setup: e
    }) : e
}

function wa(e) {
    e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0]
}

function za(e, t) {
    let r;
    return !!((r = Object.getOwnPropertyDescriptor(e, t)) && !r.configurable)
}
const Eo = new WeakMap;

function qr(e, t, r, n, o = !1) {
    if (oe(e)) {
        e.forEach((b, P) => qr(b, t && (oe(t) ? t[P] : t), r, n, o));
        return
    }
    if (Wt(n) && !o) {
        n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && qr(e, t, r, n.component.subTree);
        return
    }
    const i = n.shapeFlag & 4 ? oi(n.component) : n.el,
        s = o ? null : i,
        {
            i: a,
            r: c
        } = e,
        u = t && t.r,
        l = a.refs === be ? a.refs = {} : a.refs,
        f = a.setupState,
        d = de(f),
        p = f === be ? ku : b => za(l, b) ? !1 : me(d, b),
        m = (b, P) => !(P && za(l, P));
    if (u != null && u !== c) {
        if (Ga(t), Se(u)) l[u] = null, p(u) && (f[u] = null);
        else if (Me(u)) {
            const b = t;
            m(u, b.k) && (u.value = null), b.k && (l[b.k] = null)
        }
    }
    if (se(c)) {
        xt();
        try {
            Nn(c, a, 12, [s, l])
        } finally {
            kt()
        }
    } else {
        const b = Se(c),
            P = Me(c);
        if (b || P) {
            const w = () => {
                if (e.f) {
                    const v = b ? p(c) ? f[c] : l[c] : m() || !e.k ? c.value : l[e.k];
                    if (o) oe(v) && da(v, i);
                    else if (oe(v)) v.includes(i) || v.push(i);
                    else if (b) l[c] = [i], p(c) && (f[c] = l[c]);
                    else {
                        const h = [i];
                        m(c, e.k) && (c.value = h), e.k && (l[e.k] = h)
                    }
                } else b ? (l[c] = s, p(c) && (f[c] = s)) : P && (m(c, e.k) && (c.value = s), e.k && (l[e.k] = s))
            };
            if (s) {
                const v = () => {
                    w(), Eo.delete(e)
                };
                v.id = -1, Eo.set(e, v), Be(v, r)
            } else Ga(e), w()
        }
    }
}

function Ga(e) {
    const t = Eo.get(e);
    t && (t.flags |= 8, Eo.delete(e))
}
let Ka = !1;
const kr = () => {
        Ka || (console.error("Hydration completed but contains mismatches."), Ka = !0)
    },
    lp = e => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject",
    up = e => e.namespaceURI.includes("MathML"),
    Fn = e => {
        if (e.nodeType === 1) {
            if (lp(e)) return "svg";
            if (up(e)) return "mathml"
        }
    },
    Nr = e => e.nodeType === 8;

function fp(e) {
    const {
        mt: t,
        p: r,
        o: {
            patchProp: n,
            createText: o,
            nextSibling: i,
            parentNode: s,
            remove: a,
            insert: c,
            createComment: u
        }
    } = e, l = (h, g) => {
        if (!g.hasChildNodes()) {
            r(null, h, g), bo(), g._vnode = h;
            return
        }
        f(g.firstChild, h, null, null, null), bo(), g._vnode = h
    }, f = (h, g, y, x, T, L = !1) => {
        L = L || !!g.dynamicChildren;
        const O = Nr(h) && h.data === "[",
            j = () => b(h, g, y, x, T, O),
            {
                type: F,
                ref: S,
                shapeFlag: E,
                patchFlag: M
            } = g;
        let I = h.nodeType;
        g.el = h, M === -2 && (L = !1, g.dynamicChildren = null);
        let W = null;
        switch (F) {
            case _r:
                I !== 3 ? g.children === "" ? (c(g.el = o(""), s(h), h), W = h) : W = j() : (h.data !== g.children && (kr(), h.data = g.children), W = i(h));
                break;
            case Ie:
                v(h) ? (W = i(h), w(g.el = h.content.firstChild, h, y)) : I !== 8 || O ? W = j() : W = i(h);
                break;
            case bn:
                if (O && (h = i(h), I = h.nodeType), I === 1 || I === 3) {
                    W = h;
                    const $ = !g.children.length;
                    for (let z = 0; z < g.staticCount; z++) $ && (g.children += W.nodeType === 1 ? W.outerHTML : W.data), z === g.staticCount - 1 && (g.anchor = W), W = i(W);
                    return O ? i(W) : W
                } else j();
                break;
            case ke:
                O ? W = m(h, g, y, x, T, L) : W = j();
                break;
            default:
                if (E & 1)(I !== 1 || g.type.toLowerCase() !== h.tagName.toLowerCase()) && !v(h) ? W = j() : W = d(h, g, y, x, T, L);
                else if (E & 6) {
                    g.slotScopeIds = T;
                    const $ = s(h);
                    if (O ? W = P(h) : Nr(h) && h.data === "teleport start" ? W = P(h, h.data, "teleport end") : W = i(h), t(g, $, null, y, x, Fn($), L), Wt(g) && !g.type.__asyncResolved) {
                        let z;
                        O ? (z = Ae(ke), z.anchor = W ? W.previousSibling : $.lastChild) : z = h.nodeType === 3 ? Gf("") : Ae("div"), z.el = h, g.component.subTree = z
                    }
                } else E & 64 ? I !== 8 ? W = j() : W = g.type.hydrate(h, g, y, x, T, L, e, p) : E & 128 && (W = g.type.hydrate(h, g, y, x, Fn(s(h)), T, L, e, f))
        }
        return S != null && qr(S, null, x, g), W
    }, d = (h, g, y, x, T, L) => {
        L = L || !!g.dynamicChildren;
        const {
            type: O,
            dynamicProps: j,
            props: F,
            patchFlag: S,
            shapeFlag: E,
            dirs: M,
            transition: I
        } = g, W = O === "input" || O === "option", $ = !!j;
        if (W || $ || S !== -1) {
            M && Ct(g, null, y, "created");
            let z = !1;
            if (v(h)) {
                z = Df(null, I) && y && y.vnode.props && y.vnode.props.appear;
                const te = h.content.firstChild;
                if (z) {
                    const ne = te.getAttribute("class");
                    ne && (te.$cls = ne), I.beforeEnter(te)
                }
                w(te, h, y), g.el = h = te
            }
            if (E & 16 && !(F && (F.innerHTML || F.textContent))) {
                let te = p(h.firstChild, g, h, y, x, T, L);
                for (te && !uo(h, 1) && kr(); te;) {
                    const ne = te;
                    te = te.nextSibling, a(ne)
                }
            } else if (E & 8) {
                let te = g.children;
                te[0] === `
` && (h.tagName === "PRE" || h.tagName === "TEXTAREA") && (te = te.slice(1));
                const {
                    textContent: ne
                } = h;
                ne !== te && ne !== te.replace(/\r\n|\r/g, `
`) && (uo(h, 0) || kr(), h.textContent = g.children)
            }
            if (F) {
                if (W || $ || !L || S & 48) {
                    const te = h.tagName.includes("-");
                    for (const ne in F)(W && (ne.endsWith("value") || ne === "indeterminate") || Mn(ne) && !gr(ne) || ne[0] === "." || te && !gr(ne) || j && j.includes(ne)) && n(h, ne, null, F[ne], void 0, y)
                } else if (F.onClick) n(h, "onClick", null, F.onClick, void 0, y);
                else if (S & 4 && tr(F.style))
                    for (const te in F.style) F.style[te]
            }
            let Z;
            (Z = F && F.onVnodeBeforeMount) && ot(Z, y, g), M && Ct(g, null, y, "beforeMount"), ((Z = F && F.onVnodeMounted) || M || z) && Ff(() => {
                Z && ot(Z, y, g), z && I.enter(h), M && Ct(g, null, y, "mounted")
            }, x)
        }
        return h.nextSibling
    }, p = (h, g, y, x, T, L, O) => {
        O = O || !!g.dynamicChildren;
        const j = g.children,
            F = j.length;
        let S = !1;
        for (let E = 0; E < F; E++) {
            const M = O ? j[E] : j[E] = ut(j[E]),
                I = M.type === _r;
            h ? (I && !O && E + 1 < F && ut(j[E + 1]).type === _r && (c(o(h.data.slice(M.children.length)), y, i(h)), h.data = M.children), h = f(h, M, x, T, L, O)) : I && !M.children ? c(M.el = o(""), y) : (S || (S = !0, uo(y, 1) || kr()), r(null, M, y, null, x, T, Fn(y), L))
        }
        return h
    }, m = (h, g, y, x, T, L) => {
        const {
            slotScopeIds: O
        } = g;
        O && (T = T ? T.concat(O) : O);
        const j = s(h),
            F = p(i(h), g, j, y, x, T, L);
        return F && Nr(F) && F.data === "]" ? i(g.anchor = F) : (kr(), c(g.anchor = u("]"), j, F), F)
    }, b = (h, g, y, x, T, L) => {
        if (hp(h, g) || kr(), g.el = null, L) {
            const F = P(h);
            for (;;) {
                const S = i(h);
                if (S && S !== F) a(S);
                else break
            }
        }
        const O = i(h),
            j = s(h);
        return a(h), r(null, g, j, O, y, x, Fn(j), T), y && (y.vnode.el = g.el, ni(y, g.el)), O
    }, P = (h, g = "[", y = "]") => {
        let x = 0;
        for (; h;)
            if (h = i(h), h && Nr(h) && (h.data === g && x++, h.data === y)) {
                if (x === 0) return i(h);
                x--
            } return h
    }, w = (h, g, y) => {
        const x = g.parentNode;
        x && x.replaceChild(h, g);
        let T = y;
        for (; T;) T.vnode.el === g && (T.vnode.el = T.subTree.el = h), T = T.parent
    }, v = h => h.nodeType === 1 && h.tagName === "TEMPLATE";
    return [l, f]
}
const So = "data-allow-mismatch",
    dp = {
        0: "text",
        1: "children",
        2: "class",
        3: "style",
        4: "attribute"
    };

function uo(e, t) {
    if (t === 0 || t === 1)
        for (; e && !e.hasAttribute(So);) e = e.parentElement;
    return Ea(e && e.getAttribute(So), t)
}

function Ea(e, t) {
    if (e == null) return !1;
    if (e === "") return !0;
    {
        const r = e.split(",");
        return t === 0 && r.includes("children") ? !0 : r.includes(dp[t])
    }
}

function hp(e, t) {
    return uo(e.parentElement, 1) || pp(e) || mp(t)
}

function pp(e) {
    return e.nodeType === 1 && Ea(e.getAttribute(So), 1)
}

function mp({
    props: e
}) {
    const t = e && e[So];
    return typeof t == "string" && Ea(t, 1)
}
zo().requestIdleCallback;
zo().cancelIdleCallback;

function gp(e, t) {
    if (Nr(e) && e.data === "[") {
        let r = 1,
            n = e.nextSibling;
        for (; n;) {
            if (n.nodeType === 1) {
                if (t(n) === !1) break
            } else if (Nr(n))
                if (n.data === "]") {
                    if (--r === 0) break
                } else n.data === "[" && r++;
            n = n.nextSibling
        }
    } else t(e)
}
const Wt = e => !!e.type.__asyncLoader;

function Is(e) {
    se(e) && (e = {
        loader: e
    });
    const {
        loader: t,
        loadingComponent: r,
        errorComponent: n,
        delay: o = 200,
        hydrate: i,
        timeout: s,
        suspensible: a = !0,
        onError: c
    } = e;
    let u = null,
        l, f = 0;
    const d = () => (f++, u = null, p()),
        p = () => {
            let m;
            return u || (m = u = t().catch(b => {
                if (b = b instanceof Error ? b : new Error(String(b)), c) return new Promise((P, w) => {
                    c(b, () => P(d()), () => w(b), f + 1)
                });
                throw b
            }).then(b => m !== u && u ? u : (b && (b.__esModule || b[Symbol.toStringTag] === "Module") && (b = b.default), l = b, b)))
        };
    return Tr({
        name: "AsyncComponentWrapper",
        __asyncLoader: p,
        __asyncHydrate(m, b, P) {
            let w = !1;
            (b.bu || (b.bu = [])).push(() => w = !0);
            const v = () => {
                    w || P()
                },
                h = i ? () => {
                    const g = i(v, y => gp(m, y));
                    g && (b.bum || (b.bum = [])).push(g)
                } : v;
            l ? h() : p().then(() => !b.isUnmounted && h())
        },
        get __asyncResolved() {
            return l
        },
        setup() {
            const m = ze;
            if (wa(m), l) return () => $n(l, m);
            const b = y => {
                u = null, Jr(y, m, 13, !n)
            };
            if (a && m.suspense || Rr) return p().then(y => () => $n(y, m)).catch(y => (b(y), () => n ? Ae(n, {
                error: y
            }) : null));
            const P = Ce(!1),
                w = Ce(),
                v = Ce(!!o);
            let h, g;
            return ti(() => {
                h != null && clearTimeout(h), g != null && clearTimeout(g)
            }), o && (g = setTimeout(() => {
                m.isUnmounted || (v.value = !1)
            }, o)), s != null && (h = setTimeout(() => {
                if (!m.isUnmounted && !P.value && !w.value) {
                    const y = new Error(`Async component timed out after ${s}ms.`);
                    b(y), w.value = y
                }
            }, s)), p().then(() => {
                m.isUnmounted || (P.value = !0, m.parent && Dn(m.parent.vnode) && m.parent.update())
            }).catch(y => {
                if (m.isUnmounted) {
                    u = null;
                    return
                }
                b(y), w.value = y
            }), () => {
                if (P.value && l) return $n(l, m);
                if (w.value && n) return Ae(n, {
                    error: w.value
                });
                if (r && !v.value) return $n(r, m)
            }
        }
    })
}

function $n(e, t) {
    const {
        ref: r,
        props: n,
        children: o,
        ce: i
    } = t.vnode, s = Ae(e, n, o);
    return s.ref = r, s.ce = i, delete t.vnode.ce, s
}
const Dn = e => e.type.__isKeepAlive,
    vp = {
        name: "KeepAlive",
        __isKeepAlive: !0,
        props: {
            include: [String, RegExp, Array],
            exclude: [String, RegExp, Array],
            max: [String, Number]
        },
        setup(e, {
            slots: t
        }) {
            const r = Gt(),
                n = r.ctx;
            if (!n.renderer) return () => {
                const v = t.default && t.default();
                return v && v.length === 1 ? v[0] : v
            };
            const o = new Map,
                i = new Set;
            let s = null;
            const a = r.suspense,
                {
                    renderer: {
                        p: c,
                        m: u,
                        um: l,
                        o: {
                            createElement: f
                        }
                    }
                } = n,
                d = f("div");
            n.activate = (v, h, g, y, x) => {
                const T = v.component;
                u(v, h, g, 0, a), c(T.vnode, v, h, g, T, a, y, v.slotScopeIds, x), Be(() => {
                    T.isDeactivated = !1, T.a && Hr(T.a);
                    const L = v.props && v.props.onVnodeMounted;
                    L && ot(L, T.parent, v)
                }, a)
            }, n.deactivate = v => {
                const h = v.component;
                Co(h.m), Co(h.a), u(v, d, null, 1, a), Be(() => {
                    h.da && Hr(h.da);
                    const g = v.props && v.props.onVnodeUnmounted;
                    g && ot(g, h.parent, v), h.isDeactivated = !0
                }, a)
            };

            function p(v) {
                gi(v), l(v, r, a, !0)
            }

            function m(v) {
                o.forEach((h, g) => {
                    const y = qs(Wt(h) ? h.type.__asyncResolved || {} : h.type);
                    y && !v(y) && b(g)
                })
            }

            function b(v) {
                const h = o.get(v);
                h && (!s || !bt(h, s)) ? p(h) : s && gi(s), o.delete(v), i.delete(v)
            }
            rr(() => [e.include, e.exclude], ([v, h]) => {
                v && m(g => dn(v, g)), h && m(g => !dn(h, g))
            }, {
                flush: "post",
                deep: !0
            });
            let P = null;
            const w = () => {
                P != null && (To(r.subTree.type) ? Be(() => {
                    o.set(P, Vn(r.subTree))
                }, r.subTree.suspense) : o.set(P, Vn(r.subTree)))
            };
            return ei(w), yf(w), Zr(() => {
                o.forEach(v => {
                    const {
                        subTree: h,
                        suspense: g
                    } = r, y = Vn(h);
                    if (v.type === y.type && v.key === y.key) {
                        gi(y);
                        const x = y.component.da;
                        x && Be(x, g);
                        return
                    }
                    p(v)
                })
            }), () => {
                if (P = null, !t.default) return s = null;
                const v = t.default(),
                    h = v[0];
                if (v.length > 1) return s = null, v;
                if (!Sr(h) || !(h.shapeFlag & 4) && !(h.shapeFlag & 128)) return s = null, h;
                let g = Vn(h);
                if (g.type === Ie) return s = null, g;
                const y = g.type,
                    x = qs(Wt(g) ? g.type.__asyncResolved || {} : y),
                    {
                        include: T,
                        exclude: L,
                        max: O
                    } = e;
                if (T && (!x || !dn(T, x)) || L && x && dn(L, x)) return g.shapeFlag &= -257, s = g, h;
                const j = g.key == null ? y : g.key,
                    F = o.get(j);
                return g.el && (g = zt(g), h.shapeFlag & 128 && (h.ssContent = g)), P = j, F ? (g.el = F.el, g.component = F.component, g.transition && zr(g, g.transition), g.shapeFlag |= 512, i.delete(j), i.add(j)) : (i.add(j), O && i.size > parseInt(O, 10) && b(i.values().next().value)), g.shapeFlag |= 256, s = g, To(h.type) ? h : g
            }
        }
    },
    yp = vp;

function dn(e, t) {
    return oe(e) ? e.some(r => dn(r, t)) : Se(e) ? e.split(",").includes(t) : ch(e) ? (e.lastIndex = 0, e.test(t)) : !1
}

function Jo(e, t) {
    vf(e, "a", t)
}

function Qo(e, t) {
    vf(e, "da", t)
}

function vf(e, t, r = ze) {
    const n = e.__wdc || (e.__wdc = () => {
        let o = r;
        for (; o;) {
            if (o.isDeactivated) return;
            o = o.parent
        }
        return e()
    });
    if (Zo(t, n, r), r) {
        let o = r.parent;
        for (; o && o.parent;) Dn(o.parent.vnode) && bp(n, t, r, o), o = o.parent
    }
}

function bp(e, t, r, n) {
    const o = Zo(t, e, n, !0);
    ti(() => {
        da(n[t], o)
    }, r)
}

function gi(e) {
    e.shapeFlag &= -257, e.shapeFlag &= -513
}

function Vn(e) {
    return e.shapeFlag & 128 ? e.ssContent : e
}

function Zo(e, t, r = ze, n = !1) {
    if (r) {
        const o = r[e] || (r[e] = []),
            i = t.__weh || (t.__weh = (...s) => {
                xt();
                const a = en(r),
                    c = yt(t, r, e, s);
                return a(), kt(), c
            });
        return n ? o.unshift(i) : o.push(i), i
    }
}
const Xt = e => (t, r = ze) => {
        (!Rr || e === "sp") && Zo(e, (...n) => t(...n), r)
    },
    _p = Xt("bm"),
    ei = Xt("m"),
    wp = Xt("bu"),
    yf = Xt("u"),
    Zr = Xt("bum"),
    ti = Xt("um"),
    Ep = Xt("sp"),
    Sp = Xt("rtg"),
    Rp = Xt("rtc");

function bf(e, t = ze) {
    Zo("ec", e, t)
}
const Sa = "components",
    Cp = "directives";

function z0(e, t) {
    return Ra(Sa, e, !0, t) || e
}
const _f = Symbol.for("v-ndc");

function Tp(e) {
    return Se(e) ? Ra(Sa, e, !1) || e : e || _f
}

function Ap(e) {
    return Ra(Cp, e)
}

function Ra(e, t, r = !0, n = !1) {
    const o = Ge || ze;
    if (o) {
        const i = o.type;
        if (e === Sa) {
            const a = qs(i, !1);
            if (a && (a === t || a === rt(t) || a === Vo(rt(t)))) return i
        }
        const s = Xa(o[e] || i[e], t) || Xa(o.appContext[e], t);
        return !s && n ? i : s
    }
}

function Xa(e, t) {
    return e && (e[t] || e[rt(t)] || e[Vo(rt(t))])
}

function Ms(e, t, r, n) {
    let o;
    const i = r,
        s = oe(e);
    if (s || Se(e)) {
        const a = s && tr(e);
        let c = !1,
            u = !1;
        a && (c = !ft(e), u = It(e), e = Ko(e)), o = new Array(e.length);
        for (let l = 0, f = e.length; l < f; l++) o[l] = t(c ? u ? Vr(wt(e[l])) : wt(e[l]) : e[l], l, void 0, i)
    } else if (typeof e == "number") {
        o = new Array(e);
        for (let a = 0; a < e; a++) o[a] = t(a + 1, a, void 0, i)
    } else if (he(e))
        if (e[Symbol.iterator]) o = Array.from(e, (a, c) => t(a, c, void 0, i));
        else {
            const a = Object.keys(e);
            o = new Array(a.length);
            for (let c = 0, u = a.length; c < u; c++) {
                const l = a[c];
                o[c] = t(e[l], l, c, i)
            }
        }
    else o = [];
    return o
}

function fo(e, t, r = {}, n, o) {
    if (Ge.ce || Ge.parent && Wt(Ge.parent) && Ge.parent.ce) {
        const u = Object.keys(r).length > 0;
        return le(), $t(ke, null, [Ae("slot", r, n)], u ? -2 : 64)
    }
    let i = e[t];
    i && i._c && (i._d = !1), le();
    const s = i && wf(i(r)),
        a = r.key || s && s.key,
        c = $t(ke, {
            key: (a && !dt(a) ? a : `_${t}`) + (!s && n ? "_fb" : "")
        }, s || [], s && e._ === 1 ? 64 : -2);
    return !o && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), i && i._c && (i._d = !0), c
}

function wf(e) {
    return e.some(t => Sr(t) ? !(t.type === Ie || t.type === ke && !wf(t.children)) : !0) ? e : null
}
const Ls = e => e ? Xf(e) ? oi(e) : Ls(e.parent) : null,
    yn = qe(Object.create(null), {
        $: e => e,
        $el: e => e.vnode.el,
        $data: e => e.data,
        $props: e => e.props,
        $attrs: e => e.attrs,
        $slots: e => e.slots,
        $refs: e => e.refs,
        $parent: e => Ls(e.parent),
        $root: e => Ls(e.root),
        $host: e => e.ce,
        $emit: e => e.emit,
        $options: e => Sf(e),
        $forceUpdate: e => e.f || (e.f = () => {
            ba(e.update)
        }),
        $nextTick: e => e.n || (e.n = Qr.bind(e.proxy)),
        $watch: e => op.bind(e)
    }),
    vi = (e, t) => e !== be && !e.__isScriptSetup && me(e, t),
    Op = {
        get({
            _: e
        }, t) {
            if (t === "__v_skip") return !0;
            const {
                ctx: r,
                setupState: n,
                data: o,
                props: i,
                accessCache: s,
                type: a,
                appContext: c
            } = e;
            if (t[0] !== "$") {
                const d = s[t];
                if (d !== void 0) switch (d) {
                    case 1:
                        return n[t];
                    case 2:
                        return o[t];
                    case 4:
                        return r[t];
                    case 3:
                        return i[t]
                } else {
                    if (vi(n, t)) return s[t] = 1, n[t];
                    if (o !== be && me(o, t)) return s[t] = 2, o[t];
                    if (me(i, t)) return s[t] = 3, i[t];
                    if (r !== be && me(r, t)) return s[t] = 4, r[t];
                    Ns && (s[t] = 0)
                }
            }
            const u = yn[t];
            let l, f;
            if (u) return t === "$attrs" && Xe(e.attrs, "get", ""), u(e);
            if ((l = a.__cssModules) && (l = l[t])) return l;
            if (r !== be && me(r, t)) return s[t] = 4, r[t];
            if (f = c.config.globalProperties, me(f, t)) return f[t]
        },
        set({
            _: e
        }, t, r) {
            const {
                data: n,
                setupState: o,
                ctx: i
            } = e;
            return vi(o, t) ? (o[t] = r, !0) : n !== be && me(n, t) ? (n[t] = r, !0) : me(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = r, !0)
        },
        has({
            _: {
                data: e,
                setupState: t,
                accessCache: r,
                ctx: n,
                appContext: o,
                props: i,
                type: s
            }
        }, a) {
            let c;
            return !!(r[a] || e !== be && a[0] !== "$" && me(e, a) || vi(t, a) || me(i, a) || me(n, a) || me(yn, a) || me(o.config.globalProperties, a) || (c = s.__cssModules) && c[a])
        },
        defineProperty(e, t, r) {
            return r.get != null ? e._.accessCache[t] = 0 : me(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r)
        }
    };

function Ya(e) {
    return oe(e) ? e.reduce((t, r) => (t[r] = null, t), {}) : e
}

function G0(e) {
    const t = Gt(),
        r = Rr;
    let n = e();
    On(), r && Fr(!1);
    const o = () => {
            en(t), r && Fr(!0)
        },
        i = () => {
            Gt() !== t && t.scope.off(), On(), r && Fr(!1)
        };
    return ha(n) && (n = n.catch(s => {
        throw o(), Promise.resolve().then(() => Promise.resolve().then(i)), s
    })), [n, () => {
        o(), Promise.resolve().then(i)
    }]
}
let Ns = !0;

function Pp(e) {
    const t = Sf(e),
        r = e.proxy,
        n = e.ctx;
    Ns = !1, t.beforeCreate && Ja(t.beforeCreate, e, "bc");
    const {
        data: o,
        computed: i,
        methods: s,
        watch: a,
        provide: c,
        inject: u,
        created: l,
        beforeMount: f,
        mounted: d,
        beforeUpdate: p,
        updated: m,
        activated: b,
        deactivated: P,
        beforeDestroy: w,
        beforeUnmount: v,
        destroyed: h,
        unmounted: g,
        render: y,
        renderTracked: x,
        renderTriggered: T,
        errorCaptured: L,
        serverPrefetch: O,
        expose: j,
        inheritAttrs: F,
        components: S,
        directives: E,
        filters: M
    } = t;
    if (u && xp(u, n, null), s)
        for (const $ in s) {
            const z = s[$];
            se(z) && (n[$] = z.bind(r))
        }
    if (o) {
        const $ = o.call(r, r);
        he($) && (e.data = Kt($))
    }
    if (Ns = !0, i)
        for (const $ in i) {
            const z = i[$],
                Z = se(z) ? z.bind(r, r) : se(z.get) ? z.get.bind(r, r) : Ot,
                te = !se(z) && se(z.set) ? z.set.bind(r) : Ot,
                ne = tt({
                    get: Z,
                    set: te
                });
            Object.defineProperty(n, $, {
                enumerable: !0,
                configurable: !0,
                get: () => ne.value,
                set: ae => ne.value = ae
            })
        }
    if (a)
        for (const $ in a) Ef(a[$], n, r, $);
    if (c) {
        const $ = se(c) ? c.call(r) : c;
        Reflect.ownKeys($).forEach(z => {
            yr(z, $[z])
        })
    }
    l && Ja(l, e, "c");

    function W($, z) {
        oe(z) ? z.forEach(Z => $(Z.bind(r))) : z && $(z.bind(r))
    }
    if (W(_p, f), W(ei, d), W(wp, p), W(yf, m), W(Jo, b), W(Qo, P), W(bf, L), W(Rp, x), W(Sp, T), W(Zr, v), W(ti, g), W(Ep, O), oe(j))
        if (j.length) {
            const $ = e.exposed || (e.exposed = {});
            j.forEach(z => {
                Object.defineProperty($, z, {
                    get: () => r[z],
                    set: Z => r[z] = Z,
                    enumerable: !0
                })
            })
        } else e.exposed || (e.exposed = {});
    y && e.render === Ot && (e.render = y), F != null && (e.inheritAttrs = F), S && (e.components = S), E && (e.directives = E), O && wa(e)
}

function xp(e, t, r = Ot) {
    oe(e) && (e = Ds(e));
    for (const n in e) {
        const o = e[n];
        let i;
        he(o) ? "default" in o ? i = Ke(o.from || n, o.default, !0) : i = Ke(o.from || n) : i = Ke(o), Me(i) ? Object.defineProperty(t, n, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: s => i.value = s
        }) : t[n] = i
    }
}

function Ja(e, t, r) {
    yt(oe(e) ? e.map(n => n.bind(t.proxy)) : e.bind(t.proxy), t, r)
}

function Ef(e, t, r, n) {
    let o = n.includes(".") ? uf(r, n) : () => r[n];
    if (Se(e)) {
        const i = t[e];
        se(i) && rr(o, i)
    } else if (se(e)) rr(o, e.bind(r));
    else if (he(e))
        if (oe(e)) e.forEach(i => Ef(i, t, r, n));
        else {
            const i = se(e.handler) ? e.handler.bind(r) : t[e.handler];
            se(i) && rr(o, i, e)
        }
}

function Sf(e) {
    const t = e.type,
        {
            mixins: r,
            extends: n
        } = t,
        {
            mixins: o,
            optionsCache: i,
            config: {
                optionMergeStrategies: s
            }
        } = e.appContext,
        a = i.get(t);
    let c;
    return a ? c = a : !o.length && !r && !n ? c = t : (c = {}, o.length && o.forEach(u => Ro(c, u, s, !0)), Ro(c, t, s)), he(t) && i.set(t, c), c
}

function Ro(e, t, r, n = !1) {
    const {
        mixins: o,
        extends: i
    } = t;
    i && Ro(e, i, r, !0), o && o.forEach(s => Ro(e, s, r, !0));
    for (const s in t)
        if (!(n && s === "expose")) {
            const a = kp[s] || r && r[s];
            e[s] = a ? a(e[s], t[s]) : t[s]
        } return e
}
const kp = {
    data: Qa,
    props: Za,
    emits: Za,
    methods: hn,
    computed: hn,
    beforeCreate: Qe,
    created: Qe,
    beforeMount: Qe,
    mounted: Qe,
    beforeUpdate: Qe,
    updated: Qe,
    beforeDestroy: Qe,
    beforeUnmount: Qe,
    destroyed: Qe,
    unmounted: Qe,
    activated: Qe,
    deactivated: Qe,
    errorCaptured: Qe,
    serverPrefetch: Qe,
    components: hn,
    directives: hn,
    watch: Mp,
    provide: Qa,
    inject: Ip
};

function Qa(e, t) {
    return t ? e ? function() {
        return qe(se(e) ? e.call(this, this) : e, se(t) ? t.call(this, this) : t)
    } : t : e
}

function Ip(e, t) {
    return hn(Ds(e), Ds(t))
}

function Ds(e) {
    if (oe(e)) {
        const t = {};
        for (let r = 0; r < e.length; r++) t[e[r]] = e[r];
        return t
    }
    return e
}

function Qe(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}

function hn(e, t) {
    return e ? qe(Object.create(null), e, t) : t
}

function Za(e, t) {
    return e ? oe(e) && oe(t) ? [...new Set([...e, ...t])] : qe(Object.create(null), Ya(e), Ya(t ?? {})) : t
}

function Mp(e, t) {
    if (!e) return t;
    if (!t) return e;
    const r = qe(Object.create(null), e);
    for (const n in t) r[n] = Qe(e[n], t[n]);
    return r
}

function Rf() {
    return {
        app: null,
        config: {
            isNativeTag: ku,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let Lp = 0;

function Np(e, t) {
    return function(n, o = null) {
        se(n) || (n = qe({}, n)), o != null && !he(o) && (o = null);
        const i = Rf(),
            s = new WeakSet,
            a = [];
        let c = !1;
        const u = i.app = {
            _uid: Lp++,
            _component: n,
            _props: o,
            _container: null,
            _context: i,
            _instance: null,
            version: pm,
            get config() {
                return i.config
            },
            set config(l) {},
            use(l, ...f) {
                return s.has(l) || (l && se(l.install) ? (s.add(l), l.install(u, ...f)) : se(l) && (s.add(l), l(u, ...f))), u
            },
            mixin(l) {
                return i.mixins.includes(l) || i.mixins.push(l), u
            },
            component(l, f) {
                return f ? (i.components[l] = f, u) : i.components[l]
            },
            directive(l, f) {
                return f ? (i.directives[l] = f, u) : i.directives[l]
            },
            mount(l, f, d) {
                if (!c) {
                    const p = u._ceVNode || Ae(n, o);
                    return p.appContext = i, d === !0 ? d = "svg" : d === !1 && (d = void 0), f && t ? t(p, l) : e(p, l, d), c = !0, u._container = l, l.__vue_app__ = u, oi(p.component)
                }
            },
            onUnmount(l) {
                a.push(l)
            },
            unmount() {
                c && (yt(a, u._instance, 16), e(null, u._container), delete u._container.__vue_app__)
            },
            provide(l, f) {
                return i.provides[l] = f, u
            },
            runWithContext(l) {
                const f = br;
                br = u;
                try {
                    return l()
                } finally {
                    br = f
                }
            }
        };
        return u
    }
}
let br = null;
const Dp = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${rt(t)}Modifiers`] || e[`${Cr(t)}Modifiers`];

function jp(e, t, ...r) {
    if (e.isUnmounted) return;
    const n = e.vnode.props || be;
    let o = r;
    const i = t.startsWith("update:"),
        s = i && Dp(n, t.slice(7));
    s && (s.trim && (o = r.map(l => Se(l) ? l.trim() : l)), s.number && (o = r.map(Wo)));
    let a, c = n[a = ui(t)] || n[a = ui(rt(t))];
    !c && i && (c = n[a = ui(Cr(t))]), c && yt(c, e, 6, o);
    const u = n[a + "Once"];
    if (u) {
        if (!e.emitted) e.emitted = {};
        else if (e.emitted[a]) return;
        e.emitted[a] = !0, yt(u, e, 6, o)
    }
}
const Hp = new WeakMap;

function Cf(e, t, r = !1) {
    const n = r ? Hp : t.emitsCache,
        o = n.get(e);
    if (o !== void 0) return o;
    const i = e.emits;
    let s = {},
        a = !1;
    if (!se(e)) {
        const c = u => {
            const l = Cf(u, t, !0);
            l && (a = !0, qe(s, l))
        };
        !r && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c)
    }
    return !i && !a ? (he(e) && n.set(e, null), null) : (oe(i) ? i.forEach(c => s[c] = null) : qe(s, i), he(e) && n.set(e, s), s)
}

function ri(e, t) {
    return !e || !Mn(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), me(e, t[0].toLowerCase() + t.slice(1)) || me(e, Cr(t)) || me(e, t))
}

function yi(e) {
    const {
        type: t,
        vnode: r,
        proxy: n,
        withProxy: o,
        propsOptions: [i],
        slots: s,
        attrs: a,
        emit: c,
        render: u,
        renderCache: l,
        props: f,
        data: d,
        setupState: p,
        ctx: m,
        inheritAttrs: b
    } = e, P = _o(e);
    let w, v;
    try {
        if (r.shapeFlag & 4) {
            const g = o || n,
                y = g;
            w = ut(u.call(y, g, l, f, p, d, m)), v = a
        } else {
            const g = t;
            w = ut(g.length > 1 ? g(f, {
                attrs: a,
                slots: s,
                emit: c
            }) : g(f, null)), v = t.props ? a : qp(a)
        }
    } catch (g) {
        _n.length = 0, Jr(g, e, 1), w = Ae(Ie)
    }
    let h = w;
    if (v && b !== !1) {
        const g = Object.keys(v),
            {
                shapeFlag: y
            } = h;
        g.length && y & 7 && (i && g.some(qo) && (v = Up(v, i)), h = zt(h, v, !1, !0))
    }
    return r.dirs && (h = zt(h, null, !1, !0), h.dirs = h.dirs ? h.dirs.concat(r.dirs) : r.dirs), r.transition && zr(h, r.transition), w = h, _o(P), w
}

function Bp(e, t = !0) {
    let r;
    for (let n = 0; n < e.length; n++) {
        const o = e[n];
        if (Sr(o)) {
            if (o.type !== Ie || o.children === "v-if") {
                if (r) return;
                r = o
            }
        } else return
    }
    return r
}
const qp = e => {
        let t;
        for (const r in e)(r === "class" || r === "style" || Mn(r)) && ((t || (t = {}))[r] = e[r]);
        return t
    },
    Up = (e, t) => {
        const r = {};
        for (const n in e)(!qo(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
        return r
    };

function Fp(e, t, r) {
    const {
        props: n,
        children: o,
        component: i
    } = e, {
        props: s,
        children: a,
        patchFlag: c
    } = t, u = i.emitsOptions;
    if (t.dirs || t.transition) return !0;
    if (r && c >= 0) {
        if (c & 1024) return !0;
        if (c & 16) return n ? ec(n, s, u) : !!s;
        if (c & 8) {
            const l = t.dynamicProps;
            for (let f = 0; f < l.length; f++) {
                const d = l[f];
                if (Tf(s, n, d) && !ri(u, d)) return !0
            }
        }
    } else return (o || a) && (!a || !a.$stable) ? !0 : n === s ? !1 : n ? s ? ec(n, s, u) : !0 : !!s;
    return !1
}

function ec(e, t, r) {
    const n = Object.keys(t);
    if (n.length !== Object.keys(e).length) return !0;
    for (let o = 0; o < n.length; o++) {
        const i = n[o];
        if (Tf(t, e, i) && !ri(r, i)) return !0
    }
    return !1
}

function Tf(e, t, r) {
    const n = e[r],
        o = t[r];
    return r === "style" && he(n) && he(o) ? !Ln(n, o) : n !== o
}

function ni({
    vnode: e,
    parent: t,
    suspense: r
}, n) {
    for (; t;) {
        const o = t.subTree;
        if (o.suspense && o.suspense.activeBranch === e && (o.suspense.vnode.el = o.el = n, e = o), o === e)(e = t.vnode).el = n, t = t.parent;
        else break
    }
    r && r.activeBranch === e && (r.vnode.el = n)
}
const Af = {},
    Of = () => Object.create(Af),
    Pf = e => Object.getPrototypeOf(e) === Af;

function $p(e, t, r, n = !1) {
    const o = {},
        i = Of();
    e.propsDefaults = Object.create(null), xf(e, t, o, i);
    for (const s in e.propsOptions[0]) s in o || (o[s] = void 0);
    r ? e.props = n ? o : Vt(o) : e.type.props ? e.props = o : e.props = i, e.attrs = i
}

function Vp(e, t, r, n) {
    const {
        props: o,
        attrs: i,
        vnode: {
            patchFlag: s
        }
    } = e, a = de(o), [c] = e.propsOptions;
    let u = !1;
    if ((n || s > 0) && !(s & 16)) {
        if (s & 8) {
            const l = e.vnode.dynamicProps;
            for (let f = 0; f < l.length; f++) {
                let d = l[f];
                if (ri(e.emitsOptions, d)) continue;
                const p = t[d];
                if (c)
                    if (me(i, d)) p !== i[d] && (i[d] = p, u = !0);
                    else {
                        const m = rt(d);
                        o[m] = js(c, a, m, p, e, !1)
                    }
                else p !== i[d] && (i[d] = p, u = !0)
            }
        }
    } else {
        xf(e, t, o, i) && (u = !0);
        let l;
        for (const f in a)(!t || !me(t, f) && ((l = Cr(f)) === f || !me(t, l))) && (c ? r && (r[f] !== void 0 || r[l] !== void 0) && (o[f] = js(c, a, f, void 0, e, !0)) : delete o[f]);
        if (i !== a)
            for (const f in i)(!t || !me(t, f)) && (delete i[f], u = !0)
    }
    u && Ut(e.attrs, "set", "")
}

function xf(e, t, r, n) {
    const [o, i] = e.propsOptions;
    let s = !1,
        a;
    if (t)
        for (let c in t) {
            if (gr(c)) continue;
            const u = t[c];
            let l;
            o && me(o, l = rt(c)) ? !i || !i.includes(l) ? r[l] = u : (a || (a = {}))[l] = u : ri(e.emitsOptions, c) || (!(c in n) || u !== n[c]) && (n[c] = u, s = !0)
        }
    if (i) {
        const c = de(r),
            u = a || be;
        for (let l = 0; l < i.length; l++) {
            const f = i[l];
            r[f] = js(o, c, f, u[f], e, !me(u, f))
        }
    }
    return s
}

function js(e, t, r, n, o, i) {
    const s = e[r];
    if (s != null) {
        const a = me(s, "default");
        if (a && n === void 0) {
            const c = s.default;
            if (s.type !== Function && !s.skipFactory && se(c)) {
                const {
                    propsDefaults: u
                } = o;
                if (r in u) n = u[r];
                else {
                    const l = en(o);
                    n = u[r] = c.call(null, t), l()
                }
            } else n = c;
            o.ce && o.ce._setProp(r, n)
        }
        s[0] && (i && !a ? n = !1 : s[1] && (n === "" || n === Cr(r)) && (n = !0))
    }
    return n
}
const Wp = new WeakMap;

function kf(e, t, r = !1) {
    const n = r ? Wp : t.propsCache,
        o = n.get(e);
    if (o) return o;
    const i = e.props,
        s = {},
        a = [];
    let c = !1;
    if (!se(e)) {
        const l = f => {
            c = !0;
            const [d, p] = kf(f, t, !0);
            qe(s, d), p && a.push(...p)
        };
        !r && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l)
    }
    if (!i && !c) return he(e) && n.set(e, Dr), Dr;
    if (oe(i))
        for (let l = 0; l < i.length; l++) {
            const f = rt(i[l]);
            tc(f) && (s[f] = be)
        } else if (i)
            for (const l in i) {
                const f = rt(l);
                if (tc(f)) {
                    const d = i[l],
                        p = s[f] = oe(d) || se(d) ? {
                            type: d
                        } : qe({}, d),
                        m = p.type;
                    let b = !1,
                        P = !0;
                    if (oe(m))
                        for (let w = 0; w < m.length; ++w) {
                            const v = m[w],
                                h = se(v) && v.name;
                            if (h === "Boolean") {
                                b = !0;
                                break
                            } else h === "String" && (P = !1)
                        } else b = se(m) && m.name === "Boolean";
                    p[0] = b, p[1] = P, (b || me(p, "default")) && a.push(f)
                }
            }
    const u = [s, a];
    return he(e) && n.set(e, u), u
}

function tc(e) {
    return e[0] !== "$" && !gr(e)
}
const Ca = e => e === "_" || e === "_ctx" || e === "$stable",
    Ta = e => oe(e) ? e.map(ut) : [ut(e)],
    zp = (e, t, r) => {
        if (t._n) return t;
        const n = wo((...o) => Ta(t(...o)), r);
        return n._c = !1, n
    },
    If = (e, t, r) => {
        const n = e._ctx;
        for (const o in e) {
            if (Ca(o)) continue;
            const i = e[o];
            if (se(i)) t[o] = zp(o, i, n);
            else if (i != null) {
                const s = Ta(i);
                t[o] = () => s
            }
        }
    },
    Mf = (e, t) => {
        const r = Ta(t);
        e.slots.default = () => r
    },
    Lf = (e, t, r) => {
        for (const n in t)(r || !Ca(n)) && (e[n] = t[n])
    },
    Gp = (e, t, r) => {
        const n = e.slots = Of();
        if (e.vnode.shapeFlag & 32) {
            const o = t._;
            o ? (Lf(n, t, r), r && Lu(n, "_", o, !0)) : If(t, n)
        } else t && Mf(e, t)
    },
    Kp = (e, t, r) => {
        const {
            vnode: n,
            slots: o
        } = e;
        let i = !0,
            s = be;
        if (n.shapeFlag & 32) {
            const a = t._;
            a ? r && a === 1 ? i = !1 : Lf(o, t, r) : (i = !t.$stable, If(t, o)), s = t
        } else t && (Mf(e, t), s = {
            default: 1
        });
        if (i)
            for (const a in o) !Ca(a) && s[a] == null && delete o[a]
    },
    Be = Ff;

function Xp(e) {
    return Nf(e)
}

function Yp(e) {
    return Nf(e, fp)
}

function Nf(e, t) {
    const r = zo();
    r.__VUE__ = !0;
    const {
        insert: n,
        remove: o,
        patchProp: i,
        createElement: s,
        createText: a,
        createComment: c,
        setText: u,
        setElementText: l,
        parentNode: f,
        nextSibling: d,
        setScopeId: p = Ot,
        insertStaticContent: m
    } = e, b = (_, R, N, C = null, A = null, k = null, D = void 0, U = null, B = !!R.dynamicChildren) => {
        if (_ === R) return;
        _ && !bt(_, R) && (C = q(_), ae(_, A, k, !0), _ = null), R.patchFlag === -2 && (B = !1, R.dynamicChildren = null);
        const {
            type: H,
            ref: Y,
            shapeFlag: V
        } = R;
        switch (H) {
            case _r:
                P(_, R, N, C);
                break;
            case Ie:
                w(_, R, N, C);
                break;
            case bn:
                _ == null && v(R, N, C, D);
                break;
            case ke:
                S(_, R, N, C, A, k, D, U, B);
                break;
            default:
                V & 1 ? y(_, R, N, C, A, k, D, U, B) : V & 6 ? E(_, R, N, C, A, k, D, U, B) : (V & 64 || V & 128) && H.process(_, R, N, C, A, k, D, U, B, ee)
        }
        Y != null && A ? qr(Y, _ && _.ref, k, R || _, !R) : Y == null && _ && _.ref != null && qr(_.ref, null, k, _, !0)
    }, P = (_, R, N, C) => {
        if (_ == null) n(R.el = a(R.children), N, C);
        else {
            const A = R.el = _.el;
            R.children !== _.children && u(A, R.children)
        }
    }, w = (_, R, N, C) => {
        _ == null ? n(R.el = c(R.children || ""), N, C) : R.el = _.el
    }, v = (_, R, N, C) => {
        [_.el, _.anchor] = m(_.children, R, N, C, _.el, _.anchor)
    }, h = ({
        el: _,
        anchor: R
    }, N, C) => {
        let A;
        for (; _ && _ !== R;) A = d(_), n(_, N, C), _ = A;
        n(R, N, C)
    }, g = ({
        el: _,
        anchor: R
    }) => {
        let N;
        for (; _ && _ !== R;) N = d(_), o(_), _ = N;
        o(R)
    }, y = (_, R, N, C, A, k, D, U, B) => {
        if (R.type === "svg" ? D = "svg" : R.type === "math" && (D = "mathml"), _ == null) x(R, N, C, A, k, D, U, B);
        else {
            const H = _.el && _.el._isVueCE ? _.el : null;
            try {
                H && H._beginPatch(), O(_, R, A, k, D, U, B)
            } finally {
                H && H._endPatch()
            }
        }
    }, x = (_, R, N, C, A, k, D, U) => {
        let B, H;
        const {
            props: Y,
            shapeFlag: V,
            transition: G,
            dirs: Q
        } = _;
        if (B = _.el = s(_.type, k, Y && Y.is, Y), V & 8 ? l(B, _.children) : V & 16 && L(_.children, B, null, C, A, bi(_, k), D, U), Q && Ct(_, null, C, "created"), T(B, _, _.scopeId, D, C), Y) {
            for (const ie in Y) ie !== "value" && !gr(ie) && i(B, ie, null, Y[ie], k, C);
            "value" in Y && i(B, "value", null, Y.value, k), (H = Y.onVnodeBeforeMount) && ot(H, C, _)
        }
        Q && Ct(_, null, C, "beforeMount");
        const X = Df(A, G);
        X && G.beforeEnter(B), n(B, R, N), ((H = Y && Y.onVnodeMounted) || X || Q) && Be(() => {
            H && ot(H, C, _), X && G.enter(B), Q && Ct(_, null, C, "mounted")
        }, A)
    }, T = (_, R, N, C, A) => {
        if (N && p(_, N), C)
            for (let k = 0; k < C.length; k++) p(_, C[k]);
        if (A) {
            let k = A.subTree;
            if (R === k || To(k.type) && (k.ssContent === R || k.ssFallback === R)) {
                const D = A.vnode;
                T(_, D, D.scopeId, D.slotScopeIds, A.parent)
            }
        }
    }, L = (_, R, N, C, A, k, D, U, B = 0) => {
        for (let H = B; H < _.length; H++) {
            const Y = _[H] = U ? qt(_[H]) : ut(_[H]);
            b(null, Y, R, N, C, A, k, D, U)
        }
    }, O = (_, R, N, C, A, k, D) => {
        const U = R.el = _.el;
        let {
            patchFlag: B,
            dynamicChildren: H,
            dirs: Y
        } = R;
        B |= _.patchFlag & 16;
        const V = _.props || be,
            G = R.props || be;
        let Q;
        if (N && ir(N, !1), (Q = G.onVnodeBeforeUpdate) && ot(Q, N, R, _), Y && Ct(R, _, N, "beforeUpdate"), N && ir(N, !0), H && (!_.dynamicChildren || _.dynamicChildren.length !== H.length) && (B = 0, D = !1, H = null), (V.innerHTML && G.innerHTML == null || V.textContent && G.textContent == null) && l(U, ""), H ? j(_.dynamicChildren, H, U, N, C, bi(R, A), k) : D || z(_, R, U, null, N, C, bi(R, A), k, !1), B > 0) {
            if (B & 16) F(U, V, G, N, A);
            else if (B & 2 && V.class !== G.class && i(U, "class", null, G.class, A), B & 4 && i(U, "style", V.style, G.style, A), B & 8) {
                const X = R.dynamicProps;
                for (let ie = 0; ie < X.length; ie++) {
                    const ce = X[ie],
                        _e = V[ce],
                        ue = G[ce];
                    (ue !== _e || ce === "value") && i(U, ce, _e, ue, A, N)
                }
            }
            B & 1 && _.children !== R.children && l(U, R.children)
        } else !D && H == null && F(U, V, G, N, A);
        ((Q = G.onVnodeUpdated) || Y) && Be(() => {
            Q && ot(Q, N, R, _), Y && Ct(R, _, N, "updated")
        }, C)
    }, j = (_, R, N, C, A, k, D) => {
        for (let U = 0; U < R.length; U++) {
            const B = _[U],
                H = R[U],
                Y = B.el && (B.type === ke || !bt(B, H) || B.shapeFlag & 198) ? f(B.el) : N;
            b(B, H, Y, null, C, A, k, D, !0)
        }
    }, F = (_, R, N, C, A) => {
        if (R !== N) {
            if (R !== be)
                for (const k in R) !gr(k) && !(k in N) && i(_, k, R[k], null, A, C);
            for (const k in N) {
                if (gr(k)) continue;
                const D = N[k],
                    U = R[k];
                D !== U && k !== "value" && i(_, k, U, D, A, C)
            }
            "value" in N && i(_, "value", R.value, N.value, A)
        }
    }, S = (_, R, N, C, A, k, D, U, B) => {
        const H = R.el = _ ? _.el : a(""),
            Y = R.anchor = _ ? _.anchor : a("");
        let {
            patchFlag: V,
            dynamicChildren: G,
            slotScopeIds: Q
        } = R;
        Q && (U = U ? U.concat(Q) : Q), _ == null ? (n(H, N, C), n(Y, N, C), L(R.children || [], N, Y, A, k, D, U, B)) : V > 0 && V & 64 && G && _.dynamicChildren && _.dynamicChildren.length === G.length ? (j(_.dynamicChildren, G, N, A, k, D, U), (R.key != null || A && R === A.subTree) && jf(_, R, !0)) : z(_, R, N, Y, A, k, D, U, B)
    }, E = (_, R, N, C, A, k, D, U, B) => {
        R.slotScopeIds = U, _ == null ? R.shapeFlag & 512 ? A.ctx.activate(R, N, C, D, B) : M(R, N, C, A, k, D, B) : I(_, R, B)
    }, M = (_, R, N, C, A, k, D) => {
        const U = _.component = cm(_, C, A);
        if (Dn(_) && (U.ctx.renderer = ee), lm(U, !1, D), U.asyncDep) {
            if (A && A.registerDep(U, W, D), !_.el) {
                const B = U.subTree = Ae(Ie);
                w(null, B, R, N), _.placeholder = B.el
            }
        } else W(U, _, R, N, A, k, D)
    }, I = (_, R, N) => {
        const C = R.component = _.component;
        if (Fp(_, R, N))
            if (C.asyncDep && !C.asyncResolved) {
                $(C, R, N);
                return
            } else C.next = R, C.update();
        else R.el = _.el, C.vnode = R
    }, W = (_, R, N, C, A, k, D) => {
        const U = () => {
            if (_.isMounted) {
                let {
                    next: V,
                    bu: G,
                    u: Q,
                    parent: X,
                    vnode: ie
                } = _;
                {
                    const Re = Hf(_);
                    if (Re) {
                        V && (V.el = ie.el, $(_, V, D)), Re.asyncDep.then(() => {
                            Be(() => {
                                _.isUnmounted || H()
                            }, A)
                        });
                        return
                    }
                }
                let ce = V,
                    _e;
                ir(_, !1), V ? (V.el = ie.el, $(_, V, D)) : V = ie, G && Hr(G), (_e = V.props && V.props.onVnodeBeforeUpdate) && ot(_e, X, V, ie), ir(_, !0);
                const ue = yi(_),
                    ye = _.subTree;
                _.subTree = ue, b(ye, ue, f(ye.el), q(ye), _, A, k), V.el = ue.el, ce === null && ni(_, ue.el), Q && Be(Q, A), (_e = V.props && V.props.onVnodeUpdated) && Be(() => ot(_e, X, V, ie), A)
            } else {
                let V;
                const {
                    el: G,
                    props: Q
                } = R, {
                    bm: X,
                    m: ie,
                    parent: ce,
                    root: _e,
                    type: ue
                } = _, ye = Wt(R);
                if (ir(_, !1), X && Hr(X), !ye && (V = Q && Q.onVnodeBeforeMount) && ot(V, ce, R), ir(_, !0), G && fe) {
                    const Re = () => {
                        _.subTree = yi(_), fe(G, _.subTree, _, A, null)
                    };
                    ye && ue.__asyncHydrate ? ue.__asyncHydrate(G, _, Re) : Re()
                } else {
                    _e.ce && _e.ce._hasShadowRoot() && _e.ce._injectChildStyle(ue, _.parent ? _.parent.type : void 0);
                    const Re = _.subTree = yi(_);
                    b(null, Re, N, C, _, A, k), R.el = Re.el
                }
                if (ie && Be(ie, A), !ye && (V = Q && Q.onVnodeMounted)) {
                    const Re = R;
                    Be(() => ot(V, ce, Re), A)
                }(R.shapeFlag & 256 || ce && Wt(ce.vnode) && ce.vnode.shapeFlag & 256) && _.a && Be(_.a, A), _.isMounted = !0, R = N = C = null
            }
        };
        _.scope.on();
        const B = _.effect = new Uu(U);
        _.scope.off();
        const H = _.update = B.run.bind(B),
            Y = _.job = B.runIfDirty.bind(B);
        Y.i = _, Y.id = _.uid, B.scheduler = () => ba(Y), ir(_, !0), H()
    }, $ = (_, R, N) => {
        R.component = _;
        const C = _.vnode.props;
        _.vnode = R, _.next = null, Vp(_, R.props, C, N), Kp(_, R.children, N), xt(), Va(_), kt()
    }, z = (_, R, N, C, A, k, D, U, B = !1) => {
        const H = _ && _.children,
            Y = _ ? _.shapeFlag : 0,
            V = R.children,
            {
                patchFlag: G,
                shapeFlag: Q
            } = R;
        if (G > 0) {
            if (G & 128) {
                te(H, V, N, C, A, k, D, U, B);
                return
            } else if (G & 256) {
                Z(H, V, N, C, A, k, D, U, B);
                return
            }
        }
        Q & 8 ? (Y & 16 && Te(H, A, k), V !== H && l(N, V)) : Y & 16 ? Q & 16 ? te(H, V, N, C, A, k, D, U, B) : Te(H, A, k, !0) : (Y & 8 && l(N, ""), Q & 16 && L(V, N, C, A, k, D, U, B))
    }, Z = (_, R, N, C, A, k, D, U, B) => {
        _ = _ || Dr, R = R || Dr;
        const H = _.length,
            Y = R.length,
            V = Math.min(H, Y);
        let G;
        for (G = 0; G < V; G++) {
            const Q = R[G] = B ? qt(R[G]) : ut(R[G]);
            b(_[G], Q, N, null, A, k, D, U, B)
        }
        H > Y ? Te(_, A, k, !0, !1, V) : L(R, N, C, A, k, D, U, B, V)
    }, te = (_, R, N, C, A, k, D, U, B) => {
        let H = 0;
        const Y = R.length;
        let V = _.length - 1,
            G = Y - 1;
        for (; H <= V && H <= G;) {
            const Q = _[H],
                X = R[H] = B ? qt(R[H]) : ut(R[H]);
            if (bt(Q, X)) b(Q, X, N, null, A, k, D, U, B);
            else break;
            H++
        }
        for (; H <= V && H <= G;) {
            const Q = _[V],
                X = R[G] = B ? qt(R[G]) : ut(R[G]);
            if (bt(Q, X)) b(Q, X, N, null, A, k, D, U, B);
            else break;
            V--, G--
        }
        if (H > V) {
            if (H <= G) {
                const Q = G + 1,
                    X = Q < Y ? R[Q].el : C;
                for (; H <= G;) b(null, R[H] = B ? qt(R[H]) : ut(R[H]), N, X, A, k, D, U, B), H++
            }
        } else if (H > G)
            for (; H <= V;) ae(_[H], A, k, !0), H++;
        else {
            const Q = H,
                X = H,
                ie = new Map;
            for (H = X; H <= G; H++) {
                const Pe = R[H] = B ? qt(R[H]) : ut(R[H]);
                Pe.key != null && ie.set(Pe.key, H)
            }
            let ce, _e = 0;
            const ue = G - X + 1;
            let ye = !1,
                Re = 0;
            const ht = new Array(ue);
            for (H = 0; H < ue; H++) ht[H] = 0;
            for (H = Q; H <= V; H++) {
                const Pe = _[H];
                if (_e >= ue) {
                    ae(Pe, A, k, !0);
                    continue
                }
                let Ye;
                if (Pe.key != null) Ye = ie.get(Pe.key);
                else
                    for (ce = X; ce <= G; ce++)
                        if (ht[ce - X] === 0 && bt(Pe, R[ce])) {
                            Ye = ce;
                            break
                        } Ye === void 0 ? ae(Pe, A, k, !0) : (ht[Ye - X] = H + 1, Ye >= Re ? Re = Ye : ye = !0, b(Pe, R[Ye], N, null, A, k, D, U, B), _e++)
            }
            const nr = ye ? Jp(ht) : Dr;
            for (ce = nr.length - 1, H = ue - 1; H >= 0; H--) {
                const Pe = X + H,
                    Ye = R[Pe],
                    Ue = R[Pe + 1],
                    Or = Pe + 1 < Y ? Ue.el || Bf(Ue) : C;
                ht[H] === 0 ? b(null, Ye, N, Or, A, k, D, U, B) : ye && (ce < 0 || H !== nr[ce] ? ne(Ye, N, Or, 2) : ce--)
            }
        }
    }, ne = (_, R, N, C, A = null) => {
        const {
            el: k,
            type: D,
            transition: U,
            children: B,
            shapeFlag: H
        } = _;
        if (H & 6) {
            ne(_.component.subTree, R, N, C);
            return
        }
        if (H & 128) {
            _.suspense.move(R, N, C);
            return
        }
        if (H & 64) {
            D.move(_, R, N, ee);
            return
        }
        if (D === ke) {
            n(k, R, N);
            for (let V = 0; V < B.length; V++) ne(B[V], R, N, C);
            n(_.anchor, R, N);
            return
        }
        if (D === bn) {
            h(_, R, N);
            return
        }
        if (C !== 2 && H & 1 && U)
            if (C === 0) U.persisted && !k[vt] ? n(k, R, N) : (U.beforeEnter(k), n(k, R, N), Be(() => U.enter(k), A));
            else {
                const {
                    leave: V,
                    delayLeave: G,
                    afterLeave: Q
                } = U, X = () => {
                    _.ctx.isUnmounted ? o(k) : n(k, R, N)
                }, ie = () => {
                    const ce = k._isLeaving || !!k[vt];
                    k._isLeaving && k[vt](!0), U.persisted && !ce ? X() : V(k, () => {
                        X(), Q && Q()
                    })
                };
                G ? G(k, X, ie) : ie()
            }
        else n(k, R, N)
    }, ae = (_, R, N, C = !1, A = !1) => {
        const {
            type: k,
            props: D,
            ref: U,
            children: B,
            dynamicChildren: H,
            shapeFlag: Y,
            patchFlag: V,
            dirs: G,
            cacheIndex: Q,
            memo: X
        } = _;
        if (V === -2 && (A = !1), U != null && (xt(), qr(U, null, N, _, !0), kt()), Q != null && (R.renderCache[Q] = void 0), Y & 256) {
            R.ctx.deactivate(_);
            return
        }
        const ie = Y & 1 && G,
            ce = !Wt(_);
        let _e;
        if (ce && (_e = D && D.onVnodeBeforeUnmount) && ot(_e, R, _), Y & 6) Oe(_.component, N, C);
        else {
            if (Y & 128) {
                _.suspense.unmount(N, C);
                return
            }
            ie && Ct(_, null, R, "beforeUnmount"), Y & 64 ? _.type.remove(_, R, N, ee, C) : H && !H.hasOnce && (k !== ke || V > 0 && V & 64) ? Te(H, R, N, !1, !0) : (k === ke && V & 384 || !A && Y & 16) && Te(B, R, N), C && Le(_)
        }
        const ue = X != null && Q == null;
        (ce && (_e = D && D.onVnodeUnmounted) || ie || ue) && Be(() => {
            _e && ot(_e, R, _), ie && Ct(_, null, R, "unmounted"), ue && (_.el = null)
        }, N)
    }, Le = _ => {
        const {
            type: R,
            el: N,
            anchor: C,
            transition: A
        } = _;
        if (R === ke) {
            Ne(N, C);
            return
        }
        if (R === bn) {
            g(_);
            return
        }
        const k = () => {
            o(N), A && !A.persisted && A.afterLeave && A.afterLeave()
        };
        if (_.shapeFlag & 1 && A && !A.persisted) {
            const {
                leave: D,
                delayLeave: U
            } = A, B = () => D(N, k);
            U ? U(_.el, k, B) : B()
        } else k()
    }, Ne = (_, R) => {
        let N;
        for (; _ !== R;) N = d(_), o(_), _ = N;
        o(R)
    }, Oe = (_, R, N) => {
        const {
            bum: C,
            scope: A,
            job: k,
            subTree: D,
            um: U,
            m: B,
            a: H
        } = _;
        Co(B), Co(H), C && Hr(C), A.stop(), k && (k.flags |= 8, ae(D, _, R, N)), U && Be(U, R), Be(() => {
            _.isUnmounted = !0
        }, R)
    }, Te = (_, R, N, C = !1, A = !1, k = 0) => {
        for (let D = k; D < _.length; D++) ae(_[D], R, N, C, A)
    }, q = _ => {
        if (_.shapeFlag & 6) return q(_.component.subTree);
        if (_.shapeFlag & 128) return _.suspense.next();
        const R = d(_.anchor || _.el),
            N = R && R[ip];
        return N ? d(N) : R
    };
    let J = !1;
    const K = (_, R, N) => {
            let C;
            _ == null ? R._vnode && (ae(R._vnode, null, null, !0), C = R._vnode.component) : b(R._vnode || null, _, R, null, null, null, N), R._vnode = _, J || (J = !0, Va(C), bo(), J = !1)
        },
        ee = {
            p: b,
            um: ae,
            m: ne,
            r: Le,
            mt: M,
            mc: L,
            pc: z,
            pbc: j,
            n: q,
            o: e
        };
    let re, fe;
    return t && ([re, fe] = t(ee)), {
        render: K,
        hydrate: re,
        createApp: Np(K, re)
    }
}

function bi({
    type: e,
    props: t
}, r) {
    return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r
}

function ir({
    effect: e,
    job: t
}, r) {
    r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5)
}

function Df(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}

function jf(e, t, r = !1) {
    const n = e.children,
        o = t.children;
    if (oe(n) && oe(o))
        for (let i = 0; i < n.length; i++) {
            const s = n[i];
            let a = o[i];
            a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = o[i] = qt(o[i]), a.el = s.el), !r && a.patchFlag !== -2 && jf(s, a)), a.type === _r && (a.patchFlag === -1 && (a = o[i] = qt(a)), a.el = s.el), a.type === Ie && !a.el && (a.el = s.el)
        }
}

function Jp(e) {
    const t = e.slice(),
        r = [0];
    let n, o, i, s, a;
    const c = e.length;
    for (n = 0; n < c; n++) {
        const u = e[n];
        if (u !== 0) {
            if (o = r[r.length - 1], e[o] < u) {
                t[n] = o, r.push(n);
                continue
            }
            for (i = 0, s = r.length - 1; i < s;) a = i + s >> 1, e[r[a]] < u ? i = a + 1 : s = a;
            u < e[r[i]] && (i > 0 && (t[n] = r[i - 1]), r[i] = n)
        }
    }
    for (i = r.length, s = r[i - 1]; i-- > 0;) r[i] = s, s = t[s];
    return r
}

function Hf(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : Hf(t)
}

function Co(e) {
    if (e)
        for (let t = 0; t < e.length; t++) e[t].flags |= 8
}

function Bf(e) {
    if (e.placeholder) return e.placeholder;
    const t = e.component;
    return t ? Bf(t.subTree) : null
}
const To = e => e.__isSuspense;
let Hs = 0;
const Qp = {
        name: "Suspense",
        __isSuspense: !0,
        process(e, t, r, n, o, i, s, a, c, u) {
            if (e == null) Zp(t, r, n, o, i, s, a, c, u);
            else {
                if (i && i.deps > 0 && !e.suspense.isInFallback) {
                    t.suspense = e.suspense, t.suspense.vnode = t, t.el = e.el;
                    return
                }
                em(e, t, r, n, o, s, a, c, u)
            }
        },
        hydrate: tm,
        normalize: rm
    },
    qf = Qp;

function An(e, t) {
    const r = e.props && e.props[t];
    se(r) && r()
}

function Zp(e, t, r, n, o, i, s, a, c) {
    const {
        p: u,
        o: {
            createElement: l
        }
    } = c, f = l("div"), d = e.suspense = Uf(e, o, n, t, f, r, i, s, a, c);
    u(null, d.pendingBranch = e.ssContent, f, null, n, d, i, s), d.deps > 0 ? (An(e, "onPending"), An(e, "onFallback"), u(null, e.ssFallback, t, r, n, null, i, s), Ur(d, e.ssFallback)) : d.resolve(!1, !0)
}

function em(e, t, r, n, o, i, s, a, {
    p: c,
    um: u,
    o: {
        createElement: l
    }
}) {
    const f = t.suspense = e.suspense;
    f.vnode = t, t.el = e.el;
    const d = t.ssContent,
        p = t.ssFallback,
        {
            activeBranch: m,
            pendingBranch: b,
            isInFallback: P,
            isHydrating: w
        } = f;
    if (b) f.pendingBranch = d, bt(b, d) ? (c(b, d, f.hiddenContainer, null, o, f, i, s, a), f.deps <= 0 ? f.resolve() : P && (w || (c(m, p, r, n, o, null, i, s, a), Ur(f, p)))) : (f.pendingId = Hs++, w ? (f.isHydrating = !1, f.activeBranch = b) : u(b, o, f), f.deps = 0, f.effects.length = 0, f.hiddenContainer = l("div"), P ? (c(null, d, f.hiddenContainer, null, o, f, i, s, a), f.deps <= 0 ? f.resolve() : (c(m, p, r, n, o, null, i, s, a), Ur(f, p))) : m && bt(m, d) ? (c(m, d, r, n, o, f, i, s, a), f.resolve(!0)) : (c(null, d, f.hiddenContainer, null, o, f, i, s, a), f.deps <= 0 && f.resolve()));
    else if (m && bt(m, d)) c(m, d, r, n, o, f, i, s, a), Ur(f, d);
    else if (An(t, "onPending"), f.pendingBranch = d, d.shapeFlag & 512 ? f.pendingId = d.component.suspenseId : f.pendingId = Hs++, c(null, d, f.hiddenContainer, null, o, f, i, s, a), f.deps <= 0) f.resolve();
    else {
        const {
            timeout: v,
            pendingId: h
        } = f;
        v > 0 ? setTimeout(() => {
            f.pendingId === h && f.fallback(p)
        }, v) : v === 0 && f.fallback(p)
    }
}

function Uf(e, t, r, n, o, i, s, a, c, u, l = !1) {
    const {
        p: f,
        m: d,
        um: p,
        n: m,
        o: {
            parentNode: b,
            remove: P
        }
    } = u;
    let w;
    const v = nm(e);
    v && t && t.pendingBranch && (w = t.pendingId, t.deps++);
    const h = e.props ? Nu(e.props.timeout) : void 0,
        g = i,
        y = {
            vnode: e,
            parent: t,
            parentComponent: r,
            namespace: s,
            container: n,
            hiddenContainer: o,
            deps: 0,
            pendingId: Hs++,
            timeout: typeof h == "number" ? h : -1,
            activeBranch: null,
            isFallbackMountPending: !1,
            pendingBranch: null,
            isInFallback: !l,
            isHydrating: l,
            isUnmounted: !1,
            effects: [],
            resolve(x = !1, T = !1) {
                const {
                    vnode: L,
                    activeBranch: O,
                    pendingBranch: j,
                    pendingId: F,
                    effects: S,
                    parentComponent: E,
                    container: M,
                    isInFallback: I
                } = y;
                let W = !1;
                if (y.isHydrating) y.isHydrating = !1;
                else if (!x) {
                    W = O && j.transition && j.transition.mode === "out-in";
                    let Z = !1;
                    W && (O.transition.afterLeave = () => {
                        F === y.pendingId && (d(j, M, i === g && !Z ? m(O) : i, 0), xs(S), I && L.ssFallback && (L.ssFallback.el = null))
                    }), O && !y.isFallbackMountPending && (b(O.el) === M && (i = m(O), Z = !0), p(O, E, y, !0), !W && I && L.ssFallback && Be(() => L.ssFallback.el = null, y)), W || d(j, M, i, 0)
                }
                y.isFallbackMountPending = !1, Ur(y, j), y.pendingBranch = null, y.isInFallback = !1;
                let $ = y.parent,
                    z = !1;
                for (; $;) {
                    if ($.pendingBranch) {
                        $.effects.push(...S), z = !0;
                        break
                    }
                    $ = $.parent
                }!z && !W && xs(S), y.effects = [], v && t && t.pendingBranch && w === t.pendingId && (t.deps--, t.deps === 0 && !T && t.resolve()), An(L, "onResolve")
            },
            fallback(x) {
                if (!y.pendingBranch) return;
                const {
                    vnode: T,
                    activeBranch: L,
                    parentComponent: O,
                    container: j,
                    namespace: F
                } = y;
                An(T, "onFallback");
                const S = m(L),
                    E = () => {
                        y.isFallbackMountPending = !1, y.isInFallback && (f(null, x, j, S, O, null, F, a, c), Ur(y, x))
                    },
                    M = x.transition && x.transition.mode === "out-in";
                M && (y.isFallbackMountPending = !0, L.transition.afterLeave = E), y.isInFallback = !0, p(L, O, null, !0), M || E()
            },
            move(x, T, L) {
                y.activeBranch && d(y.activeBranch, x, T, L), y.container = x
            },
            next() {
                return y.activeBranch && m(y.activeBranch)
            },
            registerDep(x, T, L) {
                const O = !!y.pendingBranch;
                O && y.deps++;
                const j = x.vnode.el;
                x.asyncDep.catch(F => {
                    Jr(F, x, 0)
                }).then(F => {
                    if (x.isUnmounted || y.isUnmounted || y.pendingId !== x.suspenseId) return;
                    On(), x.asyncResolved = !0;
                    const {
                        vnode: S
                    } = x;
                    Bs(x, F), j && (S.el = j);
                    const E = !j && x.subTree.el;
                    T(x, S, b(j || x.subTree.el), j ? null : m(x.subTree), y, s, L), E && (S.placeholder = null, P(E)), ni(x, S.el), O && --y.deps === 0 && y.resolve()
                })
            },
            unmount(x, T) {
                y.isUnmounted = !0, y.activeBranch && p(y.activeBranch, r, x, T), y.pendingBranch && p(y.pendingBranch, r, x, T)
            }
        };
    return y
}

function tm(e, t, r, n, o, i, s, a, c) {
    const u = t.suspense = Uf(t, n, r, e.parentNode, document.createElement("div"), null, o, i, s, a, !0),
        l = c(e, u.pendingBranch = t.ssContent, r, u, i, s);
    return u.deps === 0 && u.resolve(!1, !0), l
}

function rm(e) {
    const {
        shapeFlag: t,
        children: r
    } = e, n = t & 32;
    e.ssContent = rc(n ? r.default : r), e.ssFallback = n ? rc(r.fallback) : Ae(Ie)
}

function rc(e) {
    let t;
    if (se(e)) {
        const r = Gr && e._c;
        r && (e._d = !1, le()), e = e(), r && (e._d = !0, t = it, $f())
    }
    return oe(e) && (e = Bp(e)), e = ut(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter(r => r !== e)), e
}

function Ff(e, t) {
    t && t.pendingBranch ? oe(e) ? t.effects.push(...e) : t.effects.push(e) : xs(e)
}

function Ur(e, t) {
    e.activeBranch = t;
    const {
        vnode: r,
        parentComponent: n
    } = e;
    let o = t.el;
    for (; !o && t.component;) t = t.component.subTree, o = t.el;
    r.el = o, n && n.subTree === r && (n.vnode.el = o, ni(n, o))
}

function nm(e) {
    const t = e.props && e.props.suspensible;
    return t != null && t !== !1
}
const ke = Symbol.for("v-fgt"),
    _r = Symbol.for("v-txt"),
    Ie = Symbol.for("v-cmt"),
    bn = Symbol.for("v-stc"),
    _n = [];
let it = null;

function le(e = !1) {
    _n.push(it = e ? null : [])
}

function $f() {
    _n.pop(), it = _n[_n.length - 1] || null
}
let Gr = 1;

function Ao(e, t = !1) {
    Gr += e, e < 0 && it && t && (it.hasOnce = !0)
}

function Vf(e) {
    return e.dynamicChildren = Gr > 0 ? it || Dr : null, $f(), Gr > 0 && it && it.push(e), e
}

function ve(e, t, r, n, o, i) {
    return Vf(Pt(e, t, r, n, o, i, !0))
}

function $t(e, t, r, n, o) {
    return Vf(Ae(e, t, r, n, o, !0))
}

function Sr(e) {
    return e ? e.__v_isVNode === !0 : !1
}

function bt(e, t) {
    return e.type === t.type && e.key === t.key
}
const Wf = ({
        key: e
    }) => e ?? null,
    ho = ({
        ref: e,
        ref_key: t,
        ref_for: r
    }) => (typeof e == "number" && (e = "" + e), e != null ? Se(e) || Me(e) || se(e) ? {
        i: Ge,
        r: e,
        k: t,
        f: !!r
    } : e : null);

function Pt(e, t = null, r = null, n = 0, o = null, i = e === ke ? 0 : 1, s = !1, a = !1) {
    const c = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && Wf(t),
        ref: t && ho(t),
        scopeId: cf,
        slotScopeIds: null,
        children: r,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetStart: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: i,
        patchFlag: n,
        dynamicProps: o,
        dynamicChildren: null,
        appContext: null,
        ctx: Ge
    };
    return a ? (Oo(c, r), i & 128 && e.normalize(c)) : r && (c.shapeFlag |= Se(r) ? 8 : 16), Gr > 0 && !s && it && (c.patchFlag > 0 || i & 6) && c.patchFlag !== 32 && it.push(c), c
}
const Ae = om;

function om(e, t = null, r = null, n = 0, o = null, i = !1) {
    if ((!e || e === _f) && (e = Ie), Sr(e)) {
        const a = zt(e, t, !0);
        return r && Oo(a, r), Gr > 0 && !i && it && (a.shapeFlag & 6 ? it[it.indexOf(e)] = a : it.push(a)), a.patchFlag = -2, a
    }
    if (hm(e) && (e = e.__vccOpts), t) {
        t = zf(t);
        let {
            class: a,
            style: c
        } = t;
        a && !Se(a) && (t.class = lt(a)), he(c) && (Xo(c) && !oe(c) && (c = qe({}, c)), t.style = Er(c))
    }
    const s = Se(e) ? 1 : To(e) ? 128 : ff(e) ? 64 : he(e) ? 4 : se(e) ? 2 : 0;
    return Pt(e, t, r, n, o, s, i, !0)
}

function zf(e) {
    return e ? Xo(e) || Pf(e) ? qe({}, e) : e : null
}

function zt(e, t, r = !1, n = !1) {
    const {
        props: o,
        ref: i,
        patchFlag: s,
        children: a,
        transition: c
    } = e, u = t ? Kf(o || {}, t) : o, l = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: u,
        key: u && Wf(u),
        ref: t && t.ref ? r && i ? oe(i) ? i.concat(ho(t)) : [i, ho(t)] : ho(t) : i,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: a,
        target: e.target,
        targetStart: e.targetStart,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== ke ? s === -1 ? 16 : s | 16 : s,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: c,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && zt(e.ssContent),
        ssFallback: e.ssFallback && zt(e.ssFallback),
        placeholder: e.placeholder,
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    };
    return c && n && zr(l, c.clone(l)), l
}

function Gf(e = " ", t = 0) {
    return Ae(_r, null, e, t)
}

function im(e, t) {
    const r = Ae(bn, null, e);
    return r.staticCount = t, r
}

function ct(e = "", t = !1) {
    return t ? (le(), $t(Ie, null, e)) : Ae(Ie, null, e)
}

function ut(e) {
    return e == null || typeof e == "boolean" ? Ae(Ie) : oe(e) ? Ae(ke, null, e.slice()) : Sr(e) ? qt(e) : Ae(_r, null, String(e))
}

function qt(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : zt(e)
}

function Oo(e, t) {
    let r = 0;
    const {
        shapeFlag: n
    } = e;
    if (t == null) t = null;
    else if (oe(t)) r = 16;
    else if (typeof t == "object")
        if (n & 65) {
            const o = t.default;
            o && (o._c && (o._d = !1), Oo(e, o()), o._c && (o._d = !0));
            return
        } else {
            r = 32;
            const o = t._;
            !o && !Pf(t) ? t._ctx = Ge : o === 3 && Ge && (Ge.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
        }
    else if (se(t)) {
        if (n & 65) {
            Oo(e, {
                default: t
            });
            return
        }
        t = {
            default: t,
            _ctx: Ge
        }, r = 32
    } else t = String(t), n & 64 ? (r = 16, t = [Gf(t)]) : r = 8;
    e.children = t, e.shapeFlag |= r
}

function Kf(...e) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
        const n = e[r];
        for (const o in n)
            if (o === "class") t.class !== n.class && (t.class = lt([t.class, n.class]));
            else if (o === "style") t.style = Er([t.style, n.style]);
        else if (Mn(o)) {
            const i = t[o],
                s = n[o];
            s && i !== s && !(oe(i) && i.includes(s)) ? t[o] = i ? [].concat(i, s) : s : s == null && i == null && !qo(o) && (t[o] = s)
        } else o !== "" && (t[o] = n[o])
    }
    return t
}

function ot(e, t, r, n = null) {
    yt(e, t, 7, [r, n])
}
const sm = Rf();
let am = 0;

function cm(e, t, r) {
    const n = e.type,
        o = (t ? t.appContext : e.appContext) || sm,
        i = {
            uid: am++,
            vnode: e,
            type: n,
            parent: t,
            appContext: o,
            root: null,
            next: null,
            subTree: null,
            effect: null,
            update: null,
            job: null,
            scope: new Bu(!0),
            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: t ? t.provides : Object.create(o.provides),
            ids: t ? t.ids : ["", 0, 0],
            accessCache: null,
            renderCache: [],
            components: null,
            directives: null,
            propsOptions: kf(n, o),
            emitsOptions: Cf(n, o),
            emit: null,
            emitted: null,
            propsDefaults: be,
            inheritAttrs: n.inheritAttrs,
            ctx: be,
            data: be,
            props: be,
            attrs: be,
            slots: be,
            refs: be,
            setupState: be,
            setupContext: null,
            suspense: r,
            suspenseId: r ? r.pendingId : 0,
            asyncDep: null,
            asyncResolved: !1,
            isMounted: !1,
            isUnmounted: !1,
            isDeactivated: !1,
            bc: null,
            c: null,
            bm: null,
            m: null,
            bu: null,
            u: null,
            um: null,
            bum: null,
            da: null,
            a: null,
            rtg: null,
            rtc: null,
            ec: null,
            sp: null
        };
    return i.ctx = {
        _: i
    }, i.root = t ? t.root : i, i.emit = jp.bind(null, i), e.ce && e.ce(i), i
}
let ze = null;
const Gt = () => ze || Ge;
let Po, Fr;
{
    const e = zo(),
        t = (r, n) => {
            let o;
            return (o = e[r]) || (o = e[r] = []), o.push(n), i => {
                o.length > 1 ? o.forEach(s => s(i)) : o[0](i)
            }
        };
    Po = t("__VUE_INSTANCE_SETTERS__", r => ze = r), Fr = t("__VUE_SSR_SETTERS__", r => Rr = r)
}
const en = e => {
        const t = ze;
        return Po(e), e.scope.on(), () => {
            e.scope.off(), Po(t)
        }
    },
    On = () => {
        ze && ze.scope.off(), Po(null)
    };

function Xf(e) {
    return e.vnode.shapeFlag & 4
}
let Rr = !1;

function lm(e, t = !1, r = !1) {
    t && Fr(t);
    const {
        props: n,
        children: o
    } = e.vnode, i = Xf(e);
    $p(e, n, i, t), Gp(e, o, r || t);
    const s = i ? um(e, t) : void 0;
    return t && Fr(!1), s
}

function um(e, t) {
    const r = e.type;
    e.accessCache = Object.create(null), e.proxy = new Proxy(e.ctx, Op);
    const {
        setup: n
    } = r;
    if (n) {
        xt();
        const o = e.setupContext = n.length > 1 ? dm(e) : null,
            i = en(e),
            s = Nn(n, e, 0, [e.props, o]),
            a = ha(s);
        if (kt(), i(), (a || e.sp) && !Wt(e) && wa(e), a) {
            if (s.then(On, On), t) return s.then(c => {
                Bs(e, c)
            }).catch(c => {
                Jr(c, e, 0)
            });
            e.asyncDep = s
        } else Bs(e, s)
    } else Yf(e)
}

function Bs(e, t, r) {
    se(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : he(t) && (e.setupState = rf(t)), Yf(e)
}

function Yf(e, t, r) {
    const n = e.type;
    e.render || (e.render = n.render || Ot);
    {
        const o = en(e);
        xt();
        try {
            Pp(e)
        } finally {
            kt(), o()
        }
    }
}
const fm = {
    get(e, t) {
        return Xe(e, "get", ""), e[t]
    }
};

function dm(e) {
    const t = r => {
        e.exposed = r || {}
    };
    return {
        attrs: new Proxy(e.attrs, fm),
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}

function oi(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(rf(Uh(e.exposed)), {
        get(t, r) {
            if (r in t) return t[r];
            if (r in yn) return yn[r](e)
        },
        has(t, r) {
            return r in t || r in yn
        }
    })) : e.proxy
}

function qs(e, t = !0) {
    return se(e) ? e.displayName || e.name : e.name || t && e.__name
}

function hm(e) {
    return se(e) && "__vccOpts" in e
}
const tt = (e, t) => Yh(e, t, Rr);

function Mt(e, t, r) {
    try {
        Ao(-1);
        const n = arguments.length;
        return n === 2 ? he(t) && !oe(t) ? Sr(t) ? Ae(e, null, [t]) : Ae(e, t) : Ae(e, null, t) : (n > 3 ? r = Array.prototype.slice.call(arguments, 2) : n === 3 && Sr(r) && (r = [r]), Ae(e, t, r))
    } finally {
        Ao(1)
    }
}
const pm = "3.5.39";
let Us;
const nc = typeof window < "u" && window.trustedTypes;
if (nc) try {
    Us = nc.createPolicy("vue", {
        createHTML: e => e
    })
} catch {}
const Jf = Us ? e => Us.createHTML(e) : e => e,
    mm = "http://www.w3.org/2000/svg",
    gm = "http://www.w3.org/1998/Math/MathML",
    Bt = typeof document < "u" ? document : null,
    oc = Bt && Bt.createElement("template"),
    vm = {
        insert: (e, t, r) => {
            t.insertBefore(e, r || null)
        },
        remove: e => {
            const t = e.parentNode;
            t && t.removeChild(e)
        },
        createElement: (e, t, r, n) => {
            const o = t === "svg" ? Bt.createElementNS(mm, e) : t === "mathml" ? Bt.createElementNS(gm, e) : r ? Bt.createElement(e, {
                is: r
            }) : Bt.createElement(e);
            return e === "select" && n && n.multiple != null && o.setAttribute("multiple", n.multiple), o
        },
        createText: e => Bt.createTextNode(e),
        createComment: e => Bt.createComment(e),
        setText: (e, t) => {
            e.nodeValue = t
        },
        setElementText: (e, t) => {
            e.textContent = t
        },
        parentNode: e => e.parentNode,
        nextSibling: e => e.nextSibling,
        querySelector: e => Bt.querySelector(e),
        setScopeId(e, t) {
            e.setAttribute(t, "")
        },
        insertStaticContent(e, t, r, n, o, i) {
            const s = r ? r.previousSibling : t.lastChild;
            if (o && (o === i || o.nextSibling))
                for (; t.insertBefore(o.cloneNode(!0), r), !(o === i || !(o = o.nextSibling)););
            else {
                oc.innerHTML = Jf(n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e);
                const a = oc.content;
                if (n === "svg" || n === "mathml") {
                    const c = a.firstChild;
                    for (; c.firstChild;) a.appendChild(c.firstChild);
                    a.removeChild(c)
                }
                t.insertBefore(a, r)
            }
            return [s ? s.nextSibling : t.firstChild, r ? r.previousSibling : t.lastChild]
        }
    },
    Yt = "transition",
    sn = "animation",
    Pn = Symbol("_vtc"),
    Qf = {
        name: String,
        type: String,
        css: {
            type: Boolean,
            default: !0
        },
        duration: [String, Number, Object],
        enterFromClass: String,
        enterActiveClass: String,
        enterToClass: String,
        appearFromClass: String,
        appearActiveClass: String,
        appearToClass: String,
        leaveFromClass: String,
        leaveActiveClass: String,
        leaveToClass: String
    },
    ym = qe({}, df, Qf),
    bm = e => (e.displayName = "Transition", e.props = ym, e),
    Fs = bm((e, {
        slots: t
    }) => Mt(cp, _m(e), t)),
    sr = (e, t = []) => {
        oe(e) ? e.forEach(r => r(...t)) : e && e(...t)
    },
    ic = e => e ? oe(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;

function _m(e) {
    const t = {};
    for (const S in e) S in Qf || (t[S] = e[S]);
    if (e.css === !1) return t;
    const {
        name: r = "v",
        type: n,
        duration: o,
        enterFromClass: i = `${r}-enter-from`,
        enterActiveClass: s = `${r}-enter-active`,
        enterToClass: a = `${r}-enter-to`,
        appearFromClass: c = i,
        appearActiveClass: u = s,
        appearToClass: l = a,
        leaveFromClass: f = `${r}-leave-from`,
        leaveActiveClass: d = `${r}-leave-active`,
        leaveToClass: p = `${r}-leave-to`
    } = e, m = wm(o), b = m && m[0], P = m && m[1], {
        onBeforeEnter: w,
        onEnter: v,
        onEnterCancelled: h,
        onLeave: g,
        onLeaveCancelled: y,
        onBeforeAppear: x = w,
        onAppear: T = v,
        onAppearCancelled: L = h
    } = t, O = (S, E, M, I) => {
        S._enterCancelled = I, ar(S, E ? l : a), ar(S, E ? u : s), M && M()
    }, j = (S, E) => {
        S._isLeaving = !1, ar(S, f), ar(S, p), ar(S, d), E && E()
    }, F = S => (E, M) => {
        const I = S ? T : v,
            W = () => O(E, S, M);
        sr(I, [E, W]), sc(() => {
            ar(E, S ? c : i), jt(E, S ? l : a), ic(I) || ac(E, n, b, W)
        })
    };
    return qe(t, {
        onBeforeEnter(S) {
            sr(w, [S]), jt(S, i), jt(S, s)
        },
        onBeforeAppear(S) {
            sr(x, [S]), jt(S, c), jt(S, u)
        },
        onEnter: F(!1),
        onAppear: F(!0),
        onLeave(S, E) {
            S._isLeaving = !0;
            const M = () => j(S, E);
            jt(S, f), S._enterCancelled ? (jt(S, d), uc(S)) : (uc(S), jt(S, d)), sc(() => {
                S._isLeaving && (ar(S, f), jt(S, p), ic(g) || ac(S, n, P, M))
            }), sr(g, [S, M])
        },
        onEnterCancelled(S) {
            O(S, !1, void 0, !0), sr(h, [S])
        },
        onAppearCancelled(S) {
            O(S, !0, void 0, !0), sr(L, [S])
        },
        onLeaveCancelled(S) {
            j(S), sr(y, [S])
        }
    })
}

function wm(e) {
    if (e == null) return null;
    if (he(e)) return [_i(e.enter), _i(e.leave)];
    {
        const t = _i(e);
        return [t, t]
    }
}

function _i(e) {
    return Nu(e)
}

function jt(e, t) {
    t.split(/\s+/).forEach(r => r && e.classList.add(r)), (e[Pn] || (e[Pn] = new Set)).add(t)
}

function ar(e, t) {
    t.split(/\s+/).forEach(n => n && e.classList.remove(n));
    const r = e[Pn];
    r && (r.delete(t), r.size || (e[Pn] = void 0))
}

function sc(e) {
    requestAnimationFrame(() => {
        requestAnimationFrame(e)
    })
}
let Em = 0;

function ac(e, t, r, n) {
    const o = e._endId = ++Em,
        i = () => {
            o === e._endId && n()
        };
    if (r != null) return setTimeout(i, r);
    const {
        type: s,
        timeout: a,
        propCount: c
    } = Sm(e, t);
    if (!s) return n();
    const u = s + "end";
    let l = 0;
    const f = () => {
            e.removeEventListener(u, d), i()
        },
        d = p => {
            p.target === e && ++l >= c && f()
        };
    setTimeout(() => {
        l < c && f()
    }, a + 1), e.addEventListener(u, d)
}

function Sm(e, t) {
    const r = window.getComputedStyle(e),
        n = m => (r[m] || "").split(", "),
        o = n(`${Yt}Delay`),
        i = n(`${Yt}Duration`),
        s = cc(o, i),
        a = n(`${sn}Delay`),
        c = n(`${sn}Duration`),
        u = cc(a, c);
    let l = null,
        f = 0,
        d = 0;
    t === Yt ? s > 0 && (l = Yt, f = s, d = i.length) : t === sn ? u > 0 && (l = sn, f = u, d = c.length) : (f = Math.max(s, u), l = f > 0 ? s > u ? Yt : sn : null, d = l ? l === Yt ? i.length : c.length : 0);
    const p = l === Yt && /\b(?:transform|all)(?:,|$)/.test(n(`${Yt}Property`).toString());
    return {
        type: l,
        timeout: f,
        propCount: d,
        hasTransform: p
    }
}

function cc(e, t) {
    for (; e.length < t.length;) e = e.concat(e);
    return Math.max(...t.map((r, n) => lc(r) + lc(e[n])))
}

function lc(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3
}

function uc(e) {
    return (e ? e.ownerDocument : document).body.offsetHeight
}

function Rm(e, t, r) {
    const n = e[Pn];
    n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t
}
const xo = Symbol("_vod"),
    Zf = Symbol("_vsh"),
    Cm = {
        name: "show",
        beforeMount(e, {
            value: t
        }, {
            transition: r
        }) {
            e[xo] = e.style.display === "none" ? "" : e.style.display, r && t ? r.beforeEnter(e) : an(e, t)
        },
        mounted(e, {
            value: t
        }, {
            transition: r
        }) {
            r && t && r.enter(e)
        },
        updated(e, {
            value: t,
            oldValue: r
        }, {
            transition: n
        }) {
            !t != !r && (n ? t ? (n.beforeEnter(e), an(e, !0), n.enter(e)) : n.leave(e, () => {
                an(e, !1)
            }) : an(e, t))
        },
        beforeUnmount(e, {
            value: t
        }) {
            an(e, t)
        }
    };

function an(e, t) {
    e.style.display = t ? e[xo] : "none", e[Zf] = !t
}
const Tm = Symbol(""),
    Am = /(?:^|;)\s*display\s*:/;

function Om(e, t, r) {
    const n = e.style,
        o = Se(r);
    let i = !1;
    if (r && !o) {
        if (t)
            if (Se(t))
                for (const s of t.split(";")) {
                    const a = s.slice(0, s.indexOf(":")).trim();
                    r[a] == null && pn(n, a, "")
                } else
                    for (const s in t) r[s] == null && pn(n, s, "");
        for (const s in r) {
            s === "display" && (i = !0);
            const a = r[s];
            a != null ? xm(e, s, !Se(t) && t ? t[s] : void 0, a) || pn(n, s, a) : pn(n, s, "")
        }
    } else if (o) {
        if (t !== r) {
            const s = n[Tm];
            s && (r += ";" + s), n.cssText = r, i = Am.test(r)
        }
    } else t && e.removeAttribute("style");
    xo in e && (e[xo] = i ? n.display : "", e[Zf] && (n.display = "none"))
}
const fc = /\s*!important$/;

function pn(e, t, r) {
    if (oe(r)) r.forEach(n => pn(e, t, n));
    else if (r == null && (r = ""), t.startsWith("--")) e.setProperty(t, r);
    else {
        const n = Pm(e, t);
        fc.test(r) ? e.setProperty(Cr(n), r.replace(fc, ""), "important") : e[n] = r
    }
}
const dc = ["Webkit", "Moz", "ms"],
    wi = {};

function Pm(e, t) {
    const r = wi[t];
    if (r) return r;
    let n = rt(t);
    if (n !== "filter" && n in e) return wi[t] = n;
    n = Vo(n);
    for (let o = 0; o < dc.length; o++) {
        const i = dc[o] + n;
        if (i in e) return wi[t] = i
    }
    return t
}

function xm(e, t, r, n) {
    return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Se(n) && r === n
}
const hc = "http://www.w3.org/1999/xlink";

function pc(e, t, r, n, o, i = yh(t)) {
    n && t.startsWith("xlink:") ? r == null ? e.removeAttributeNS(hc, t.slice(6, t.length)) : e.setAttributeNS(hc, t, r) : r == null || i && !Du(r) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : dt(r) ? String(r) : r)
}

function mc(e, t, r, n, o) {
    if (t === "innerHTML" || t === "textContent") {
        r != null && (e[t] = t === "innerHTML" ? Jf(r) : r);
        return
    }
    const i = e.tagName;
    if (t === "value" && i !== "PROGRESS" && !i.includes("-")) {
        const a = i === "OPTION" ? e.getAttribute("value") || "" : e.value,
            c = r == null ? e.type === "checkbox" ? "on" : "" : String(r);
        (a !== c || !("_value" in e)) && (e.value = c), r == null && e.removeAttribute(t), e._value = r;
        return
    }
    let s = !1;
    if (r === "" || r == null) {
        const a = typeof e[t];
        a === "boolean" ? r = Du(r) : r == null && a === "string" ? (r = "", s = !0) : a === "number" && (r = 0, s = !0)
    }
    try {
        e[t] = r
    } catch {}
    s && e.removeAttribute(o || t)
}

function pr(e, t, r, n) {
    e.addEventListener(t, r, n)
}

function km(e, t, r, n) {
    e.removeEventListener(t, r, n)
}
const gc = Symbol("_vei");

function Im(e, t, r, n, o = null) {
    const i = e[gc] || (e[gc] = {}),
        s = i[t];
    if (n && s) s.value = n;
    else {
        const [a, c] = Nm(t);
        if (n) {
            const u = i[t] = Hm(n, o);
            pr(e, a, u, c)
        } else s && (km(e, a, s, c), i[t] = void 0)
    }
}
const Mm = /(Once|Passive|Capture)$/,
    Lm = /^on:?(?:Once|Passive|Capture)$/;

function Nm(e) {
    let t, r;
    for (;
        (r = e.match(Mm)) && !Lm.test(e);) t || (t = {}), e = e.slice(0, e.length - r[1].length), t[r[1].toLowerCase()] = !0;
    return [e[2] === ":" ? e.slice(3) : Cr(e.slice(2)), t]
}
let Ei = 0;
const Dm = Promise.resolve(),
    jm = () => Ei || (Dm.then(() => Ei = 0), Ei = Date.now());

function Hm(e, t) {
    const r = n => {
        if (!n._vts) n._vts = Date.now();
        else if (n._vts <= r.attached) return;
        const o = r.value;
        if (oe(o)) {
            const i = n.stopImmediatePropagation;
            n.stopImmediatePropagation = () => {
                i.call(n), n._stopped = !0
            };
            const s = o.slice(),
                a = [n];
            for (let c = 0; c < s.length && !n._stopped; c++) {
                const u = s[c];
                u && yt(u, t, 5, a)
            }
        } else yt(o, t, 5, [n])
    };
    return r.value = e, r.attached = jm(), r
}
const vc = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123,
    Bm = (e, t, r, n, o, i) => {
        const s = o === "svg";
        t === "class" ? Rm(e, n, s) : t === "style" ? Om(e, r, n) : Mn(t) ? qo(t) || Im(e, t, r, n, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : qm(e, t, n, s)) ? (mc(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && pc(e, t, n, s, i, t !== "value")) : e._isVueCE && (Um(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !Se(n))) ? mc(e, rt(t), n, i, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), pc(e, t, n, s))
    };

function qm(e, t, r, n) {
    if (n) return !!(t === "innerHTML" || t === "textContent" || t in e && vc(t) && se(r));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
    if (t === "width" || t === "height") {
        const o = e.tagName;
        if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE") return !1
    }
    return vc(t) && Se(r) ? !1 : t in e
}

function Um(e, t) {
    const r = e._def.props;
    if (!r) return !1;
    const n = rt(t);
    return Array.isArray(r) ? r.some(o => rt(o) === n) : Object.keys(r).some(o => rt(o) === n)
}
const ko = e => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return oe(t) ? r => Hr(t, r) : t
};

function Fm(e) {
    e.target.composing = !0
}

function yc(e) {
    const t = e.target;
    t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")))
}
const $r = Symbol("_assign");

function bc(e, t, r) {
    return t && (e = e.trim()), r && (e = Wo(e)), e
}
const K0 = {
        created(e, {
            modifiers: {
                lazy: t,
                trim: r,
                number: n
            }
        }, o) {
            e[$r] = ko(o);
            const i = n || o.props && o.props.type === "number";
            pr(e, t ? "change" : "input", s => {
                s.target.composing || e[$r](bc(e.value, r, i))
            }), (r || i) && pr(e, "change", () => {
                e.value = bc(e.value, r, i)
            }), t || (pr(e, "compositionstart", Fm), pr(e, "compositionend", yc), pr(e, "change", yc))
        },
        mounted(e, {
            value: t
        }) {
            e.value = t ?? ""
        },
        beforeUpdate(e, {
            value: t,
            oldValue: r,
            modifiers: {
                lazy: n,
                trim: o,
                number: i
            }
        }, s) {
            if (e[$r] = ko(s), e.composing) return;
            const a = (i || e.type === "number") && !/^0\d/.test(e.value) ? Wo(e.value) : e.value,
                c = t ?? "";
            if (a === c) return;
            const u = e.getRootNode();
            (u instanceof Document || u instanceof ShadowRoot) && u.activeElement === e && e.type !== "range" && (n && t === r || o && e.value.trim() === c) || (e.value = c)
        }
    },
    X0 = {
        deep: !0,
        created(e, {
            value: t,
            modifiers: {
                number: r
            }
        }, n) {
            const o = Uo(t);
            pr(e, "change", () => {
                const i = Array.prototype.filter.call(e.options, s => s.selected).map(s => r ? Wo(Io(s)) : Io(s));
                e[$r](e.multiple ? o ? new Set(i) : i : i[0]), e._assigning = !0, Qr(() => {
                    e._assigning = !1
                })
            }), e[$r] = ko(n)
        },
        mounted(e, {
            value: t
        }) {
            _c(e, t)
        },
        beforeUpdate(e, t, r) {
            e[$r] = ko(r)
        },
        updated(e, {
            value: t
        }) {
            e._assigning || _c(e, t)
        }
    };

function _c(e, t) {
    const r = e.multiple,
        n = oe(t);
    if (!(r && !n && !Uo(t))) {
        for (let o = 0, i = e.options.length; o < i; o++) {
            const s = e.options[o],
                a = Io(s);
            if (r)
                if (n) {
                    const c = typeof a;
                    c === "string" || c === "number" ? s.selected = t.some(u => String(u) === String(a)) : s.selected = _h(t, a) > -1
                } else s.selected = t.has(a);
            else if (Ln(Io(s), t)) {
                e.selectedIndex !== o && (e.selectedIndex = o);
                return
            }
        }!r && e.selectedIndex !== -1 && (e.selectedIndex = -1)
    }
}

function Io(e) {
    return "_value" in e ? e._value : e.value
}
const $m = ["ctrl", "shift", "alt", "meta"],
    Vm = {
        stop: e => e.stopPropagation(),
        prevent: e => e.preventDefault(),
        self: e => e.target !== e.currentTarget,
        ctrl: e => !e.ctrlKey,
        shift: e => !e.shiftKey,
        alt: e => !e.altKey,
        meta: e => !e.metaKey,
        left: e => "button" in e && e.button !== 0,
        middle: e => "button" in e && e.button !== 1,
        right: e => "button" in e && e.button !== 2,
        exact: (e, t) => $m.some(r => e[`${r}Key`] && !t.includes(r))
    },
    Wm = (e, t) => {
        if (!e) return e;
        const r = e._withMods || (e._withMods = {}),
            n = t.join(".");
        return r[n] || (r[n] = ((o, ...i) => {
            for (let s = 0; s < t.length; s++) {
                const a = Vm[t[s]];
                if (a && a(o, t)) return
            }
            return e(o, ...i)
        }))
    },
    ed = qe({
        patchProp: Bm
    }, vm);
let wn, wc = !1;

function zm() {
    return wn || (wn = Xp(ed))
}

function Gm() {
    return wn = wc ? wn : Yp(ed), wc = !0, wn
}
const Km = ((...e) => {
        const t = zm().createApp(...e),
            {
                mount: r
            } = t;
        return t.mount = n => {
            const o = rd(n);
            if (!o) return;
            const i = t._component;
            !se(i) && !i.render && !i.template && (i.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
            const s = r(o, !1, td(o));
            return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), s
        }, t
    }),
    Xm = ((...e) => {
        const t = Gm().createApp(...e),
            {
                mount: r
            } = t;
        return t.mount = n => {
            const o = rd(n);
            if (o) return r(o, !0, td(o))
        }, t
    });

function td(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml"
}

function rd(e) {
    return Se(e) ? document.querySelector(e) : e
}
const Ym = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
    Jm = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
    Qm = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;

function Zm(e, t) {
    if (e === "__proto__" || e === "constructor" && t && typeof t == "object" && "prototype" in t) {
        eg(e);
        return
    }
    return t
}

function eg(e) {
    console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)
}

function Mo(e, t = {}) {
    if (typeof e != "string") return e;
    if (e[0] === '"' && e[e.length - 1] === '"' && e.indexOf("\\") === -1) return e.slice(1, -1);
    const r = e.trim();
    if (r.length <= 9) switch (r.toLowerCase()) {
        case "true":
            return !0;
        case "false":
            return !1;
        case "undefined":
            return;
        case "null":
            return null;
        case "nan":
            return Number.NaN;
        case "infinity":
            return Number.POSITIVE_INFINITY;
        case "-infinity":
            return Number.NEGATIVE_INFINITY
    }
    if (!Qm.test(e)) {
        if (t.strict) throw new SyntaxError("[destr] Invalid JSON");
        return e
    }
    try {
        if (Ym.test(e) || Jm.test(e)) {
            if (t.strict) throw new Error("[destr] Possible prototype pollution");
            return JSON.parse(e, Zm)
        }
        return JSON.parse(e)
    } catch (n) {
        if (t.strict) throw n;
        return e
    }
}
const nd = /#/g,
    od = /&/g,
    tg = /\//g,
    rg = /=/g,
    ng = /\?/g,
    ii = /\+/g,
    og = /%5e/gi,
    ig = /%60/gi,
    sg = /%7c/gi,
    ag = /%20/gi,
    cg = /%2f/gi,
    lg = /%252f/gi;

function id(e) {
    return encodeURI("" + e).replace(sg, "|")
}

function $s(e) {
    return id(typeof e == "string" ? e : JSON.stringify(e)).replace(ii, "%2B").replace(ag, "+").replace(nd, "%23").replace(od, "%26").replace(ig, "`").replace(og, "^").replace(tg, "%2F")
}

function Si(e) {
    return $s(e).replace(rg, "%3D")
}

function ug(e) {
    return id(e).replace(nd, "%23").replace(ng, "%3F").replace(lg, "%2F").replace(od, "%26").replace(ii, "%2B")
}

function xn(e = "") {
    try {
        return decodeURIComponent("" + e)
    } catch {
        return "" + e
    }
}

function fg(e) {
    return xn(e.replace(cg, "%252F"))
}

function dg(e) {
    return xn(e.replace(ii, " "))
}

function hg(e) {
    return xn(e.replace(ii, " "))
}

function sd(e = "") {
    const t = Object.create(null);
    e[0] === "?" && (e = e.slice(1));
    for (const r of e.split("&")) {
        const n = r.match(/([^=]+)=?(.*)/) || [];
        if (n.length < 2) continue;
        const o = dg(n[1]);
        if (o === "__proto__" || o === "constructor") continue;
        const i = hg(n[2] || "");
        t[o] === void 0 ? t[o] = i : Array.isArray(t[o]) ? t[o].push(i) : t[o] = [t[o], i]
    }
    return t
}

function pg(e, t) {
    return (typeof t == "number" || typeof t == "boolean") && (t = String(t)), t ? Array.isArray(t) ? t.map(r => `${Si(e)}=${$s(r)}`).join("&") : `${Si(e)}=${$s(t)}` : Si(e)
}

function mg(e) {
    return Object.keys(e).filter(t => e[t] !== void 0).map(t => pg(t, e[t])).filter(Boolean).join("&")
}
const gg = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/,
    vg = /^[\s\w\0+.-]{2,}:([/\\]{2})?/,
    yg = /^([/\\]\s*){2,}[^/\\]/,
    bg = /^[\s\0]*(blob|data|javascript|vbscript):$/i,
    _g = /\/$|\/\?|\/#/,
    wg = /^\.?\//;

function tn(e, t = {}) {
    return typeof t == "boolean" && (t = {
        acceptRelative: t
    }), t.strict ? gg.test(e) : vg.test(e) || (t.acceptRelative ? yg.test(e) : !1)
}

function Vs(e) {
    return !!e && bg.test(e)
}

function Ws(e = "", t) {
    return t ? _g.test(e) : e.endsWith("/")
}

function Lo(e = "", t) {
    if (!t) return (Ws(e) ? e.slice(0, -1) : e) || "/";
    if (!Ws(e, !0)) return e || "/";
    let r = e,
        n = "";
    const o = e.indexOf("#");
    o !== -1 && (r = e.slice(0, o), n = e.slice(o));
    const [i, ...s] = r.split("?");
    return ((i.endsWith("/") ? i.slice(0, -1) : i) || "/") + (s.length > 0 ? `?${s.join("?")}` : "") + n
}

function Eg(e = "", t) {
    if (!t) return e.endsWith("/") ? e : e + "/";
    if (Ws(e, !0)) return e || "/";
    let r = e,
        n = "";
    const o = e.indexOf("#");
    if (o !== -1 && (r = e.slice(0, o), n = e.slice(o), !r)) return n;
    const [i, ...s] = r.split("?");
    return i + "/" + (s.length > 0 ? `?${s.join("?")}` : "") + n
}

function Sg(e, t) {
    if (cd(t) || tn(e)) return e;
    const r = Lo(t);
    if (e.startsWith(r)) {
        const n = e[r.length];
        if (!n || n === "/" || n === "?") return e
    }
    return ld(r, e)
}

function Ec(e, t) {
    if (cd(t)) return e;
    const r = Lo(t);
    if (!e.startsWith(r)) return e;
    const n = e[r.length];
    return n && n !== "/" && n !== "?" ? e : "/" + e.slice(r.length).replace(/^\/+/, "")
}

function ad(e, t) {
    const r = Aa(e),
        n = {
            ...sd(r.search),
            ...t
        };
    return r.search = mg(n), Cg(r)
}

function cd(e) {
    return !e || e === "/"
}

function Rg(e) {
    return e && e !== "/"
}

function ld(e, ...t) {
    let r = e || "";
    for (const n of t.filter(o => Rg(o)))
        if (r) {
            const o = n.replace(wg, "");
            r = Eg(r) + o
        } else r = n;
    return r
}

function ud(...e) {
    const t = /\/(?!\/)/,
        r = e.filter(Boolean),
        n = [];
    let o = 0;
    for (const s of r)
        if (!(!s || s === "/")) {
            for (const [a, c] of s.split(t).entries())
                if (!(!c || c === ".")) {
                    if (c === "..") {
                        if (n.length === 1 && tn(n[0])) continue;
                        n.pop(), o--;
                        continue
                    }
                    if (a === 1 && n[n.length - 1]?.endsWith(":/")) {
                        n[n.length - 1] += "/" + c;
                        continue
                    }
                    n.push(c), o++
                }
        } let i = n.join("/");
    return o >= 0 ? r[0]?.startsWith("/") && !i.startsWith("/") ? i = "/" + i : r[0]?.startsWith("./") && !i.startsWith("./") && (i = "./" + i) : i = "../".repeat(-1 * o) + i, r[r.length - 1]?.endsWith("/") && !i.endsWith("/") && (i += "/"), i
}

function fd(e, t) {
    return xn(Lo(e)) === xn(Lo(t))
}
const dd = Symbol.for("ufo:protocolRelative");

function Aa(e = "", t) {
    const r = e.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
    if (r) {
        const [, f, d = ""] = r;
        return {
            protocol: f.toLowerCase(),
            pathname: d,
            href: f + d,
            auth: "",
            host: "",
            search: "",
            hash: ""
        }
    }
    if (!tn(e, {
            acceptRelative: !0
        })) return Sc(e);
    const [, n = "", o, i = ""] = e.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
    let [, s = "", a = ""] = i.match(/([^#/?]*)(.*)?/) || [];
    n === "file:" && (a = a.replace(/\/(?=[A-Za-z]:)/, ""));
    const {
        pathname: c,
        search: u,
        hash: l
    } = Sc(a);
    return {
        protocol: n.toLowerCase(),
        auth: o ? o.slice(0, Math.max(0, o.length - 1)) : "",
        host: s,
        pathname: c,
        search: u,
        hash: l,
        [dd]: !n
    }
}

function Sc(e = "") {
    const [t = "", r = "", n = ""] = (e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
    return {
        pathname: t,
        search: r,
        hash: n
    }
}

function Cg(e) {
    const t = e.pathname || "",
        r = e.search ? (e.search.startsWith("?") ? "" : "?") + e.search : "",
        n = e.hash || "",
        o = e.auth ? e.auth + "@" : "",
        i = e.host || "";
    return (e.protocol || e[dd] ? (e.protocol || "") + "//" : "") + o + i + t + r + n
}
class Tg extends Error {
    constructor(t, r) {
        super(t, r), this.name = "FetchError", r?.cause && !this.cause && (this.cause = r.cause)
    }
}

function Ag(e) {
    const t = e.error?.message || e.error?.toString() || "",
        r = e.request?.method || e.options?.method || "GET",
        n = e.request?.url || String(e.request) || "/",
        o = `[${r}] ${JSON.stringify(n)}`,
        i = e.response ? `${e.response.status} ${e.response.statusText}` : "<no response>",
        s = `${o}: ${i}${t?` ${t}`:""}`,
        a = new Tg(s, e.error ? {
            cause: e.error
        } : void 0);
    for (const c of ["request", "options", "response"]) Object.defineProperty(a, c, {
        get() {
            return e[c]
        }
    });
    for (const [c, u] of [
            ["data", "_data"],
            ["status", "status"],
            ["statusCode", "status"],
            ["statusText", "statusText"],
            ["statusMessage", "statusText"]
        ]) Object.defineProperty(a, c, {
        get() {
            return e.response && e.response[u]
        }
    });
    return a
}
const Og = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));

function Rc(e = "GET") {
    return Og.has(e.toUpperCase())
}

function Pg(e) {
    if (e === void 0) return !1;
    const t = typeof e;
    return t === "string" || t === "number" || t === "boolean" || t === null ? !0 : t !== "object" ? !1 : Array.isArray(e) ? !0 : e.buffer || e instanceof FormData || e instanceof URLSearchParams ? !1 : e.constructor && e.constructor.name === "Object" || typeof e.toJSON == "function"
}
const xg = new Set(["image/svg", "application/xml", "application/xhtml", "application/html"]),
    kg = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;

function Ig(e = "") {
    if (!e) return "json";
    const t = e.split(";").shift() || "";
    return kg.test(t) ? "json" : t === "text/event-stream" ? "stream" : xg.has(t) || t.startsWith("text/") ? "text" : "blob"
}

function Mg(e, t, r, n) {
    const o = Lg(t?.headers ?? e?.headers, r?.headers, n);
    let i;
    return (r?.query || r?.params || t?.params || t?.query) && (i = {
        ...r?.params,
        ...r?.query,
        ...t?.params,
        ...t?.query
    }), {
        ...r,
        ...t,
        query: i,
        params: i,
        headers: o
    }
}

function Lg(e, t, r) {
    if (!t) return new r(e);
    const n = new r(t);
    if (e)
        for (const [o, i] of Symbol.iterator in e || Array.isArray(e) ? e : new r(e)) n.set(o, i);
    return n
}
async function Wn(e, t) {
    if (t)
        if (Array.isArray(t))
            for (const r of t) await r(e);
        else await t(e)
}
const Ng = new Set([408, 409, 425, 429, 500, 502, 503, 504]),
    Dg = new Set([101, 204, 205, 304]);

function hd(e = {}) {
    const {
        fetch: t = globalThis.fetch,
        Headers: r = globalThis.Headers,
        AbortController: n = globalThis.AbortController
    } = e;
    async function o(a) {
        const c = a.error && a.error.name === "AbortError" && !a.options.timeout || !1;
        if (a.options.retry !== !1 && !c) {
            let l;
            typeof a.options.retry == "number" ? l = a.options.retry : l = Rc(a.options.method) ? 0 : 1;
            const f = a.response && a.response.status || 500;
            if (l > 0 && (Array.isArray(a.options.retryStatusCodes) ? a.options.retryStatusCodes.includes(f) : Ng.has(f))) {
                const d = typeof a.options.retryDelay == "function" ? a.options.retryDelay(a) : a.options.retryDelay || 0;
                return d > 0 && await new Promise(p => setTimeout(p, d)), i(a.request, {
                    ...a.options,
                    retry: l - 1
                })
            }
        }
        const u = Ag(a);
        throw Error.captureStackTrace && Error.captureStackTrace(u, i), u
    }
    const i = async function(c, u = {}) {
        const l = {
            request: c,
            options: Mg(c, u, e.defaults, r),
            response: void 0,
            error: void 0
        };
        if (l.options.method && (l.options.method = l.options.method.toUpperCase()), l.options.onRequest && (await Wn(l, l.options.onRequest), l.options.headers instanceof r || (l.options.headers = new r(l.options.headers || {}))), typeof l.request == "string" && (l.options.baseURL && (l.request = Sg(l.request, l.options.baseURL)), l.options.query && (l.request = ad(l.request, l.options.query), delete l.options.query), "query" in l.options && delete l.options.query, "params" in l.options && delete l.options.params), l.options.body && Rc(l.options.method))
            if (Pg(l.options.body)) {
                const p = l.options.headers.get("content-type");
                typeof l.options.body != "string" && (l.options.body = p === "application/x-www-form-urlencoded" ? new URLSearchParams(l.options.body).toString() : JSON.stringify(l.options.body)), p || l.options.headers.set("content-type", "application/json"), l.options.headers.has("accept") || l.options.headers.set("accept", "application/json")
            } else("pipeTo" in l.options.body && typeof l.options.body.pipeTo == "function" || typeof l.options.body.pipe == "function") && ("duplex" in l.options || (l.options.duplex = "half"));
        let f;
        if (!l.options.signal && l.options.timeout) {
            const p = new n;
            f = setTimeout(() => {
                const m = new Error("[TimeoutError]: The operation was aborted due to timeout");
                m.name = "TimeoutError", m.code = 23, p.abort(m)
            }, l.options.timeout), l.options.signal = p.signal
        }
        try {
            l.response = await t(l.request, l.options)
        } catch (p) {
            return l.error = p, l.options.onRequestError && await Wn(l, l.options.onRequestError), await o(l)
        } finally {
            f && clearTimeout(f)
        }
        if ((l.response.body || l.response._bodyInit) && !Dg.has(l.response.status) && l.options.method !== "HEAD") {
            const p = (l.options.parseResponse ? "json" : l.options.responseType) || Ig(l.response.headers.get("content-type") || "");
            switch (p) {
                case "json": {
                    const m = await l.response.text(),
                        b = l.options.parseResponse || Mo;
                    l.response._data = b(m);
                    break
                }
                case "stream": {
                    l.response._data = l.response.body || l.response._bodyInit;
                    break
                }
                default:
                    l.response._data = await l.response[p]()
            }
        }
        return l.options.onResponse && await Wn(l, l.options.onResponse), !l.options.ignoreResponseError && l.response.status >= 400 && l.response.status < 600 ? (l.options.onResponseError && await Wn(l, l.options.onResponseError), await o(l)) : l.response
    }, s = async function(c, u) {
        return (await i(c, u))._data
    };
    return s.raw = i, s.native = (...a) => t(...a), s.create = (a = {}, c = {}) => hd({
        ...e,
        ...c,
        defaults: {
            ...e.defaults,
            ...c.defaults,
            ...a
        }
    }), s
}
const No = (function() {
        if (typeof globalThis < "u") return globalThis;
        if (typeof self < "u") return self;
        if (typeof window < "u") return window;
        if (typeof global < "u") return global;
        throw new Error("unable to locate global object")
    })(),
    jg = No.fetch ? (...e) => No.fetch(...e) : () => Promise.reject(new Error("[ofetch] global.fetch is not supported!")),
    Hg = No.Headers,
    Bg = No.AbortController,
    qg = hd({
        fetch: jg,
        Headers: Hg,
        AbortController: Bg
    }),
    Ug = qg,
    Fg = () => window?.__NUXT__?.config || {},
    Oa = () => Fg().app,
    $g = () => Oa().baseURL,
    Vg = () => Oa().buildAssetsDir,
    Pa = (...e) => ud(pd(), Vg(), ...e),
    pd = (...e) => {
        const t = Oa(),
            r = t.cdnURL || t.baseURL;
        return e.length ? ud(r, ...e) : r
    };
globalThis.__buildAssetsURL = Pa, globalThis.__publicAssetsURL = pd;
globalThis.$fetch || (globalThis.$fetch = Ug.create({
    baseURL: $g()
}));
"global" in globalThis || (globalThis.global = globalThis);

function zs(e, t = {}, r) {
    for (const n in e) {
        const o = e[n],
            i = r ? `${r}:${n}` : n;
        typeof o == "object" && o !== null ? zs(o, t, i) : typeof o == "function" && (t[i] = o)
    }
    return t
}
const Wg = {
        run: e => e()
    },
    zg = () => Wg,
    md = typeof console.createTask < "u" ? console.createTask : zg;

function Gg(e, t) {
    const r = t.shift(),
        n = md(r);
    return e.reduce((o, i) => o.then(() => n.run(() => i(...t))), Promise.resolve())
}

function Kg(e, t) {
    const r = t.shift(),
        n = md(r);
    return Promise.all(e.map(o => n.run(() => o(...t))))
}

function Ri(e, t) {
    for (const r of [...e]) r(t)
}
let Xg = class {
    constructor() {
        this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this)
    }
    hook(t, r, n = {}) {
        if (!t || typeof r != "function") return () => {};
        const o = t;
        let i;
        for (; this._deprecatedHooks[t];) i = this._deprecatedHooks[t], t = i.to;
        if (i && !n.allowDeprecated) {
            let s = i.message;
            s || (s = `${o} hook has been deprecated` + (i.to ? `, please use ${i.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = new Set), this._deprecatedMessages.has(s) || (console.warn(s), this._deprecatedMessages.add(s))
        }
        if (!r.name) try {
            Object.defineProperty(r, "name", {
                get: () => "_" + t.replace(/\W+/g, "_") + "_hook_cb",
                configurable: !0
            })
        } catch {}
        return this._hooks[t] = this._hooks[t] || [], this._hooks[t].push(r), () => {
            r && (this.removeHook(t, r), r = void 0)
        }
    }
    hookOnce(t, r) {
        let n, o = (...i) => (typeof n == "function" && n(), n = void 0, o = void 0, r(...i));
        return n = this.hook(t, o), n
    }
    removeHook(t, r) {
        if (this._hooks[t]) {
            const n = this._hooks[t].indexOf(r);
            n !== -1 && this._hooks[t].splice(n, 1), this._hooks[t].length === 0 && delete this._hooks[t]
        }
    }
    deprecateHook(t, r) {
        this._deprecatedHooks[t] = typeof r == "string" ? {
            to: r
        } : r;
        const n = this._hooks[t] || [];
        delete this._hooks[t];
        for (const o of n) this.hook(t, o)
    }
    deprecateHooks(t) {
        Object.assign(this._deprecatedHooks, t);
        for (const r in t) this.deprecateHook(r, t[r])
    }
    addHooks(t) {
        const r = zs(t),
            n = Object.keys(r).map(o => this.hook(o, r[o]));
        return () => {
            for (const o of n.splice(0, n.length)) o()
        }
    }
    removeHooks(t) {
        const r = zs(t);
        for (const n in r) this.removeHook(n, r[n])
    }
    removeAllHooks() {
        for (const t in this._hooks) delete this._hooks[t]
    }
    callHook(t, ...r) {
        return r.unshift(t), this.callHookWith(Gg, t, ...r)
    }
    callHookParallel(t, ...r) {
        return r.unshift(t), this.callHookWith(Kg, t, ...r)
    }
    callHookWith(t, r, ...n) {
        const o = this._before || this._after ? {
            name: r,
            args: n,
            context: {}
        } : void 0;
        this._before && Ri(this._before, o);
        const i = t(r in this._hooks ? [...this._hooks[r]] : [], n);
        return i instanceof Promise ? i.finally(() => {
            this._after && o && Ri(this._after, o)
        }) : (this._after && o && Ri(this._after, o), i)
    }
    beforeEach(t) {
        return this._before = this._before || [], this._before.push(t), () => {
            if (this._before !== void 0) {
                const r = this._before.indexOf(t);
                r !== -1 && this._before.splice(r, 1)
            }
        }
    }
    afterEach(t) {
        return this._after = this._after || [], this._after.push(t), () => {
            if (this._after !== void 0) {
                const r = this._after.indexOf(t);
                r !== -1 && this._after.splice(r, 1)
            }
        }
    }
};

function Yg() {
    return new Xg
}

function Jg(e = {}) {
    let t, r = !1;
    const n = s => {
        if (t && t !== s) throw new Error("Context conflict")
    };
    let o;
    if (e.asyncContext) {
        const s = e.AsyncLocalStorage || globalThis.AsyncLocalStorage;
        s ? o = new s : console.warn("[unctx] `AsyncLocalStorage` is not provided.")
    }
    const i = () => {
        if (o) {
            const s = o.getStore();
            if (s !== void 0) return s
        }
        return t
    };
    return {
        use: () => {
            const s = i();
            if (s === void 0) throw new Error("Context is not available");
            return s
        },
        tryUse: () => i(),
        set: (s, a) => {
            a || n(s), t = s, r = !0
        },
        unset: () => {
            t = void 0, r = !1
        },
        call: (s, a) => {
            n(s), t = s;
            try {
                return o ? o.run(s, a) : a()
            } finally {
                r || (t = void 0)
            }
        },
        async callAsync(s, a) {
            t = s;
            const c = () => {
                    t = s
                },
                u = () => t === s ? c : void 0;
            Gs.add(u);
            try {
                const l = o ? o.run(s, a) : a();
                return r || (t = void 0), await l
            } finally {
                Gs.delete(u)
            }
        }
    }
}

function Qg(e = {}) {
    const t = {};
    return {
        get(r, n = {}) {
            return t[r] || (t[r] = Jg({
                ...e,
                ...n
            })), t[r]
        }
    }
}
const Do = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof global < "u" ? global : typeof window < "u" ? window : {},
    Cc = "__unctx__",
    Zg = Do[Cc] || (Do[Cc] = Qg()),
    ev = (e, t = {}) => Zg.get(e, t),
    Tc = "__unctx_async_handlers__",
    Gs = Do[Tc] || (Do[Tc] = new Set);

function En(e) {
    const t = [];
    for (const o of Gs) {
        const i = o();
        i && t.push(i)
    }
    const r = () => {
        for (const o of t) o()
    };
    let n = e();
    return n && typeof n == "object" && "catch" in n && (n = n.catch(o => {
        throw r(), o
    })), [n, r]
}
const Ac = !1,
    J0 = !1,
    Q0 = !1,
    Z0 = {
        componentName: "NuxtLink",
        prefetch: !0,
        prefetchOn: {
            visibility: !0
        }
    },
    eE = {
        value: null,
        errorValue: null,
        deep: !0
    },
    tv = null,
    rv = "#__nuxt",
    gd = "nuxt-app",
    Oc = 36e5,
    nv = "vite:preloadError";

function vd(e = gd) {
    return ev(e, {
        asyncContext: !1
    })
}
const ov = "__nuxt_plugin";

function iv(e) {
    let t = 0;
    const r = {
        _id: e.id || gd || "nuxt-app",
        _scope: Eh(),
        provide: void 0,
        globalName: "nuxt",
        versions: {
            get nuxt() {
                return "3.21.8"
            },
            get vue() {
                return r.vueApp.version
            }
        },
        payload: Vt({
            ...e.ssrContext?.payload || {},
            data: Vt({}),
            state: Kt({}),
            once: new Set,
            _errors: Vt({})
        }),
        static: {
            data: {}
        },
        runWithContext(o) {
            return r._scope.active && !qu() ? r._scope.run(() => Pc(r, o)) : Pc(r, o)
        },
        isHydrating: !0,
        deferHydration() {
            if (!r.isHydrating) return () => {};
            t++;
            let o = !1;
            return () => {
                if (!o && (o = !0, t--, t === 0)) return r.isHydrating = !1, r.callHook("app:suspense:resolve")
            }
        },
        _asyncDataPromises: {},
        _asyncData: Vt({}),
        _payloadRevivers: {},
        ...e
    };
    {
        const o = window.__NUXT__;
        if (o)
            for (const i in o) switch (i) {
                case "data":
                case "state":
                case "_errors":
                    Object.assign(r.payload[i], o[i]);
                    break;
                default:
                    r.payload[i] = o[i]
            }
    }
    r.hooks = Yg(), r.hook = r.hooks.hook, r.callHook = r.hooks.callHook, r.provide = (o, i) => {
        const s = "$" + o;
        zn(r, s, i), zn(r.vueApp.config.globalProperties, s, i)
    }, zn(r.vueApp, "$nuxt", r), zn(r.vueApp.config.globalProperties, "$nuxt", r);
    {
        window.addEventListener(nv, i => {
            r.callHook("app:chunkError", {
                error: i.payload
            }), i.payload?.message?.includes("Unable to preload CSS") && i.preventDefault()
        }), window.useNuxtApp ||= $e;
        const o = r.hook("app:error", (...i) => {
            console.error("[nuxt] error caught during app initialization", ...i)
        });
        r.hook("app:mounted", o)
    }
    const n = r.payload.config;
    return r.provide("config", n), r
}

function sv(e, t) {
    t.hooks && e.hooks.addHooks(t.hooks)
}
async function av(e, t) {
    if (typeof t == "function") {
        const {
            provide: r
        } = await e.runWithContext(() => t(e)) || {};
        if (r && typeof r == "object")
            for (const n in r) e.provide(n, r[n])
    }
}
async function cv(e, t) {
    const r = new Set,
        n = [],
        o = [];
    let i, s = 0;
    async function a(c) {
        const u = c.dependsOn?.filter(l => t.some(f => f._name === l) && !r.has(l)) ?? [];
        if (u.length > 0) n.push([new Set(u), c]);
        else {
            const l = av(e, c).then(async () => {
                c._name && (r.add(c._name), await Promise.all(n.map(async ([f, d]) => {
                    f.has(c._name) && (f.delete(c._name), f.size === 0 && (s++, await a(d)))
                })))
            }).catch(f => {
                if (!c.parallel && !e.payload.error) throw f;
                i ||= f
            });
            c.parallel ? o.push(l) : await l
        }
    }
    for (const c of t) sv(e, c);
    for (const c of t) await a(c);
    if (await Promise.all(o), s)
        for (let c = 0; c < s; c++) await Promise.all(o);
    if (i) throw e.payload.error || i
}

function nt(e) {
    if (typeof e == "function") return e;
    const t = e._name || e.name;
    return delete e.name, Object.assign(e.setup || (() => {}), e, {
        [ov]: !0,
        _name: t
    })
}

function Pc(e, t, r) {
    const n = () => t();
    return vd(e._id).set(e), e.vueApp.runWithContext(n)
}

function yd(e) {
    let t;
    return Yo() && (t = Gt()?.appContext.app.$nuxt), t ||= vd(e).tryUse(), t || null
}

function $e(e) {
    const t = yd(e);
    if (!t) throw new Error("[nuxt] instance unavailable");
    return t
}

function jn(e) {
    return $e().$config
}

function zn(e, t, r) {
    Object.defineProperty(e, t, {
        get: () => r
    })
}

function Ci(e) {
    if (e === null || typeof e != "object") return !1;
    const t = Object.getPrototypeOf(e);
    return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0
}

function Ks(e, t, r = ".", n) {
    if (!Ci(t)) return Ks(e, {}, r, n);
    const o = {
        ...t
    };
    for (const i of Object.keys(e)) {
        if (i === "__proto__" || i === "constructor") continue;
        const s = e[i];
        s != null && (n && n(o, i, s, r) || (Array.isArray(s) && Array.isArray(o[i]) ? o[i] = [...s, ...o[i]] : Ci(s) && Ci(o[i]) ? o[i] = Ks(s, o[i], (r ? `${r}.` : "") + i.toString(), n) : o[i] = s))
    }
    return o
}

function lv(e) {
    return (...t) => t.reduce((r, n) => Ks(r, n, "", e), {})
}
const jo = lv();

function uv(e, t) {
    try {
        return t in e
    } catch {
        return !1
    }
}
class xc extends Error {
    static __h3_error__ = !0;
    statusCode = 500;
    fatal = !1;
    unhandled = !1;
    statusMessage;
    data;
    cause;
    constructor(t, r = {}) {
        super(t, r), r.cause && !this.cause && (this.cause = r.cause)
    }
    toJSON() {
        const t = {
            message: this.message,
            statusCode: Xs(this.statusCode, 500)
        };
        return this.statusMessage && (t.statusMessage = bd(this.statusMessage)), this.data !== void 0 && (t.data = this.data), t
    }
}

function fv(e) {
    if (typeof e == "string") return new xc(e);
    if (dv(e)) return e;
    const t = new xc(e.message ?? e.statusMessage ?? "", {
        cause: e.cause || e
    });
    if (uv(e, "stack")) try {
        Object.defineProperty(t, "stack", {
            get() {
                return e.stack
            }
        })
    } catch {
        try {
            t.stack = e.stack
        } catch {}
    }
    if (e.data && (t.data = e.data), e.statusCode ? t.statusCode = Xs(e.statusCode, t.statusCode) : e.status && (t.statusCode = Xs(e.status, t.statusCode)), e.statusMessage ? t.statusMessage = e.statusMessage : e.statusText && (t.statusMessage = e.statusText), t.statusMessage) {
        const r = t.statusMessage;
        bd(t.statusMessage) !== r && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")
    }
    return e.fatal !== void 0 && (t.fatal = e.fatal), e.unhandled !== void 0 && (t.unhandled = e.unhandled), t
}

function dv(e) {
    return e?.constructor?.__h3_error__ === !0
}
const hv = /[^\u0009\u0020-\u007E]/g;

function bd(e = "") {
    return e.replace(hv, "")
}

function Xs(e, t = 200) {
    return !e || (typeof e == "string" && (e = Number.parseInt(e, 10)), e < 100 || e > 999) ? t : e
}
const pv = Symbol("layout-meta"),
    kn = Symbol("route");
import.meta.url.replace(/\/app\/.*$/, "/");
const Et = () => $e()?.$router,
    xa = () => Yo() ? Ke(kn, $e()._route) : $e()._route;
const mv = () => {
        try {
            if ($e()._processingMiddleware) return !0
        } catch {
            return !1
        }
        return !1
    },
    tE = (e, t) => {
        e ||= "/";
        const r = typeof e == "string" ? e : "path" in e ? gv(e) : Et().resolve(e).href;
        if (t?.open) {
            const {
                protocol: u
            } = new URL(r, window.location.href);
            if (u && Vs(u)) throw new Error(`Cannot navigate to a URL with '${u}' protocol.`);
            const {
                target: l = "_blank",
                windowFeatures: f = {}
            } = t.open, d = [];
            for (const [p, m] of Object.entries(f)) m !== void 0 && d.push(`${p.toLowerCase()}=${m}`);
            return open(r, l, d.join(", ")), Promise.resolve()
        }
        const n = tn(r, {
                acceptRelative: !0
            }),
            o = t?.external || n;
        if (o) {
            if (!t?.external) throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
            const {
                protocol: u
            } = new URL(r, window.location.href);
            if (u && Vs(u)) throw new Error(`Cannot navigate to a URL with '${u}' protocol.`)
        }
        const i = mv();
        if (!o && i) {
            if (t?.replace) {
                if (typeof e == "string") {
                    const {
                        pathname: u,
                        search: l,
                        hash: f
                    } = Aa(e);
                    return {
                        path: u,
                        ...l && {
                            query: sd(l)
                        },
                        ...f && {
                            hash: f
                        },
                        replace: !0
                    }
                }
                return {
                    ...e,
                    replace: !0
                }
            }
            return e
        }
        const s = Et(),
            a = $e();
        if (o) return a._scope.stop(), t?.replace ? location.replace(r) : location.href = r, i ? a.isHydrating ? new Promise(() => {}) : !1 : Promise.resolve();
        const c = typeof e == "string" ? vv(e) : e;
        return t?.replace ? s.replace(c) : s.push(c)
    };

function gv(e) {
    return ad(e.path || "", e.query || {}) + (e.hash || "")
}

function vv(e) {
    const t = Aa(e);
    return ug(fg(t.pathname)) + t.search + t.hash
}
const _d = "__nuxt_error",
    si = () => Kh($e().payload, "error"),
    hr = e => {
        const t = wr(e);
        try {
            const r = si();
            $e().hooks.callHook("app:error", t), r.value ||= t
        } catch {
            throw t
        }
        return t
    },
    yv = async (e = {}) => {
        const t = $e(),
            r = si();
        t.callHook("app:error:cleared", e), e.redirect && await Et().replace(e.redirect), r.value = tv
    }, wd = e => !!e && typeof e == "object" && _d in e, wr = e => {
        typeof e != "string" && e.statusText && (e.message ??= e.statusText);
        const t = fv(e);
        return Object.defineProperty(t, _d, {
            value: !0,
            configurable: !1,
            writable: !1
        }), Object.defineProperty(t, "status", {
            get: () => t.statusCode,
            configurable: !0
        }), Object.defineProperty(t, "statusText", {
            get: () => t.statusMessage,
            configurable: !0
        }), t
    }, bv = -1, _v = -2, wv = -3, Ev = -4, Sv = -5, Rv = -6, Cv = -7, Ed = 2 ** 32 - 1, Ys = Ed - 1;

function Tv(e) {
    return !(!Number.isInteger(e) || e < 0 || e > Ys)
}

function Av(e) {
    return !(!Number.isInteger(e) || e < 0 || e > Ed)
}

function Ov(e) {
    return Uint8Array.fromBase64(e).buffer
}

function Pv(e) {
    return Uint8Array.from(Buffer.from(e, "base64")).buffer
}

function xv(e) {
    const t = atob(e),
        r = t.length,
        n = new Uint8Array(r);
    for (let o = 0; o < r; o++) n[o] = t.charCodeAt(o);
    return n.buffer
}
const kv = typeof Uint8Array.fromBase64 == "function",
    Iv = typeof process == "object" && process.versions?.node !== void 0,
    Mv = kv ? Ov : Iv ? Pv : xv;

function Lv(e, t) {
    return Nv(JSON.parse(e), t)
}

function Nv(e, t) {
    if (typeof e == "number") return i(e, !0);
    if (!Array.isArray(e) || e.length === 0) throw new Error("Invalid input");
    const r = e,
        n = Array(r.length);
    let o = null;

    function i(s, a = !1) {
        if (s === bv) return;
        if (s === wv) return NaN;
        if (s === Ev) return 1 / 0;
        if (s === Sv) return -1 / 0;
        if (s === Rv) return -0;
        if (a || typeof s != "number") throw new Error("Invalid input");
        if (s in n) return n[s];
        const c = r[s];
        if (!c || typeof c != "object") n[s] = c;
        else if (Array.isArray(c))
            if (typeof c[0] == "string") {
                const u = c[0],
                    l = t && Object.hasOwn(t, u) ? t[u] : void 0;
                if (l) {
                    let f = c[1];
                    if (typeof f != "number" && (f = r.push(c[1]) - 1), o ??= new Set, o.has(f)) throw new Error("Invalid circular reference");
                    return o.add(f), n[s] = l(i(f)), o.delete(f), n[s]
                }
                switch (u) {
                    case "Date":
                        n[s] = new Date(c[1]);
                        break;
                    case "Set":
                        const f = new Set;
                        n[s] = f;
                        for (let m = 1; m < c.length; m += 1) f.add(i(c[m]));
                        break;
                    case "Map":
                        const d = new Map;
                        n[s] = d;
                        for (let m = 1; m < c.length; m += 2) d.set(i(c[m]), i(c[m + 1]));
                        break;
                    case "RegExp":
                        n[s] = new RegExp(c[1], c[2]);
                        break;
                    case "Object": {
                        const m = c[1];
                        if (typeof r[m] == "object" && r[m][0] !== "BigInt") throw new Error("Invalid input");
                        n[s] = Object(i(m));
                        break
                    }
                    case "BigInt":
                        n[s] = BigInt(c[1]);
                        break;
                    case "null":
                        const p = Object.create(null);
                        n[s] = p;
                        for (let m = 1; m < c.length; m += 2) {
                            if (c[m] === "__proto__") throw new Error("Cannot parse an object with a `__proto__` property");
                            p[c[m]] = i(c[m + 1])
                        }
                        break;
                    case "Int8Array":
                    case "Uint8Array":
                    case "Uint8ClampedArray":
                    case "Int16Array":
                    case "Uint16Array":
                    case "Float16Array":
                    case "Int32Array":
                    case "Uint32Array":
                    case "Float32Array":
                    case "Float64Array":
                    case "BigInt64Array":
                    case "BigUint64Array":
                    case "DataView": {
                        if (r[c[1]][0] !== "ArrayBuffer") throw new Error("Invalid data");
                        const m = globalThis[u],
                            b = i(c[1]);
                        n[s] = c[2] !== void 0 ? new m(b, c[2], c[3]) : new m(b);
                        break
                    }
                    case "ArrayBuffer": {
                        const m = c[1];
                        if (typeof m != "string") throw new Error("Invalid ArrayBuffer encoding");
                        const b = Mv(m);
                        n[s] = b;
                        break
                    }
                    case "Temporal.Duration":
                    case "Temporal.Instant":
                    case "Temporal.PlainDate":
                    case "Temporal.PlainTime":
                    case "Temporal.PlainDateTime":
                    case "Temporal.PlainMonthDay":
                    case "Temporal.PlainYearMonth":
                    case "Temporal.ZonedDateTime": {
                        const m = u.slice(9);
                        n[s] = Temporal[m].from(c[1]);
                        break
                    }
                    case "URL": {
                        const m = new URL(c[1]);
                        n[s] = m;
                        break
                    }
                    case "URLSearchParams": {
                        const m = new URLSearchParams(c[1]);
                        n[s] = m;
                        break
                    }
                    default:
                        throw new Error(`Unknown type ${u}`)
                }
            } else if (c[0] === Cv) {
            const u = c[1];
            if (!Av(u)) throw new Error("Invalid input");
            const l = [];
            n[s] = l, l[Ys] = void 0, delete l[Ys];
            for (let f = 2; f < c.length; f += 2) {
                const d = c[f];
                if (!Tv(d) || d >= u) throw new Error("Invalid input");
                l[d] = i(c[f + 1])
            }
            l.length = u
        } else {
            const u = new Array(c.length);
            n[s] = u;
            for (let l = 0; l < c.length; l += 1) {
                const f = c[l];
                f !== _v && (u[l] = i(f))
            }
        } else {
            const u = {};
            n[s] = u;
            for (const l of Object.keys(c)) {
                if (l === "__proto__") throw new Error("Cannot parse an object with a `__proto__` property");
                const f = c[l];
                u[l] = i(f)
            }
        }
        return n[s]
    }
    return i(0)
}
const Dv = new Set(["link", "style", "script", "noscript"]),
    jv = new Set(["title", "titleTemplate", "script", "style", "noscript"]),
    Js = new Set(["base", "meta", "link", "style", "script", "noscript"]),
    Hv = new Set(["title", "base", "htmlAttrs", "bodyAttrs", "meta", "link", "style", "script", "noscript"]),
    Bv = new Set(["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"]),
    qv = new Set(["key", "tagPosition", "tagPriority", "tagDuplicateStrategy", "innerHTML", "textContent", "processTemplateParams"]),
    Uv = new Set(["templateParams", "htmlAttrs", "bodyAttrs"]),
    Fv = new Set(["theme-color", "google-site-verification", "og", "article", "book", "profile", "twitter", "author"]);

function Qs(e, t = {}, r) {
    for (const n in e) {
        const o = e[n],
            i = r ? `${r}:${n}` : n;
        typeof o == "object" && o !== null ? Qs(o, t, i) : typeof o == "function" && (t[i] = o)
    }
    return t
}
const Sd = (() => {
    if (console.createTask) return console.createTask;
    const e = {
        run: t => t()
    };
    return () => e
})();

function Rd(e, t, r, n) {
    for (let o = r; o < e.length; o += 1) try {
        const i = n ? n.run(() => e[o](...t)) : e[o](...t);
        if (i && typeof i.then == "function") return Promise.resolve(i).then(() => Rd(e, t, o + 1, n))
    } catch (i) {
        return Promise.reject(i)
    }
}

function $v(e, t, r) {
    if (e.length > 0) return Rd(e, t, 0, Sd(r))
}

function Vv(e, t, r) {
    if (e.length > 0) {
        const n = Sd(r);
        return Promise.all(e.map(o => n.run(() => o(...t))))
    }
}

function Ti(e, t) {
    for (const r of [...e]) r(t)
}
var Wv = class {
    _hooks;
    _before;
    _after;
    _deprecatedHooks;
    _deprecatedMessages;
    constructor() {
        this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this)
    }
    hook(e, t, r = {}) {
        if (!e || typeof t != "function") return () => {};
        const n = e;
        let o;
        for (; this._deprecatedHooks[e];) o = this._deprecatedHooks[e], e = o.to;
        if (o && !r.allowDeprecated) {
            let i = o.message;
            i || (i = `${n} hook has been deprecated` + (o.to ? `, please use ${o.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = new Set), this._deprecatedMessages.has(i) || (console.warn(i), this._deprecatedMessages.add(i))
        }
        if (!t.name) try {
            Object.defineProperty(t, "name", {
                get: () => "_" + e.replace(/\W+/g, "_") + "_hook_cb",
                configurable: !0
            })
        } catch {}
        return this._hooks[e] = this._hooks[e] || [], this._hooks[e].push(t), () => {
            t && (this.removeHook(e, t), t = void 0)
        }
    }
    hookOnce(e, t) {
        let r, n = (...o) => (typeof r == "function" && r(), r = void 0, n = void 0, t(...o));
        return r = this.hook(e, n), r
    }
    removeHook(e, t) {
        const r = this._hooks[e];
        if (r) {
            const n = r.indexOf(t);
            n !== -1 && r.splice(n, 1), r.length === 0 && (this._hooks[e] = void 0)
        }
    }
    clearHook(e) {
        this._hooks[e] = void 0
    }
    deprecateHook(e, t) {
        this._deprecatedHooks[e] = typeof t == "string" ? {
            to: t
        } : t;
        const r = this._hooks[e] || [];
        this._hooks[e] = void 0;
        for (const n of r) this.hook(e, n)
    }
    deprecateHooks(e) {
        for (const t in e) this.deprecateHook(t, e[t])
    }
    addHooks(e) {
        const t = Qs(e),
            r = Object.keys(t).map(n => this.hook(n, t[n]));
        return () => {
            for (const n of r) n();
            r.length = 0
        }
    }
    removeHooks(e) {
        const t = Qs(e);
        for (const r in t) this.removeHook(r, t[r])
    }
    removeAllHooks() {
        this._hooks = {}
    }
    callHook(e, ...t) {
        return this.callHookWith($v, e, t)
    }
    callHookParallel(e, ...t) {
        return this.callHookWith(Vv, e, t)
    }
    callHookWith(e, t, r) {
        const n = this._before || this._after ? {
            name: t,
            args: r,
            context: {}
        } : void 0;
        this._before && Ti(this._before, n);
        const o = e(this._hooks[t] ? [...this._hooks[t]] : [], r, t);
        return o instanceof Promise ? o.finally(() => {
            this._after && n && Ti(this._after, n)
        }) : (this._after && n && Ti(this._after, n), o)
    }
    beforeEach(e) {
        return this._before = this._before || [], this._before.push(e), () => {
            if (this._before !== void 0) {
                const t = this._before.indexOf(e);
                t !== -1 && this._before.splice(t, 1)
            }
        }
    }
    afterEach(e) {
        return this._after = this._after || [], this._after.push(e), () => {
            if (this._after !== void 0) {
                const t = this._after.indexOf(e);
                t !== -1 && this._after.splice(t, 1)
            }
        }
    }
};

function zv() {
    return new Wv
}
const Gv = ["name", "property", "http-equiv"],
    Kv = new Set(["viewport", "description", "keywords", "robots"]);

function Cd(e) {
    const t = e.split(":");
    return t.length ? Fv.has(t[1]) : !1
}

function Zs(e) {
    const {
        props: t,
        tag: r
    } = e;
    if (Bv.has(r)) return r;
    if (r === "link" && t.rel === "canonical") return "canonical";
    if (r === "link" && t.rel === "alternate") {
        if (t.hreflang) return `alternate:${t.hreflang}`;
        if (t.type) return `alternate:${t.type}:${t.href||""}`
    }
    if (t.charset) return "charset";
    if (e.tag === "meta") {
        for (const n of Gv)
            if (t[n] !== void 0) {
                const o = t[n],
                    i = o && typeof o == "string" && o.includes(":"),
                    s = o && Kv.has(o),
                    c = !(i || s) && e.key ? `:key:${e.key}` : "";
                return `${r}:${o}${c}`
            }
    }
    if (e.key) return `${r}:key:${e.key}`;
    if (t.id) return `${r}:id:${t.id}`;
    if (r === "link" && t.rel === "alternate") return `alternate:${t.href||""}`;
    if (jv.has(r)) {
        const n = e.textContent || e.innerHTML;
        if (n) return `${r}:content:${n}`
    }
}

function Td(e) {
    const t = e._h || e._d;
    if (t) return t;
    const r = e.textContent || e.innerHTML;
    return r || `${e.tag}:${Object.entries(e.props).map(([n,o])=>`${n}:${String(o)}`).join(",")}`
}

function Ho(e, t, r) {
    typeof e === "function" && (!r || r !== "titleTemplate" && !(r[0] === "o" && r[1] === "n")) && (e = e());
    const o = t ? t(r, e) : e;
    if (Array.isArray(o)) return o.map(i => Ho(i, t));
    if (o?.constructor === Object) {
        const i = {};
        for (const s of Object.keys(o)) i[s] = Ho(o[s], t, s);
        return i
    }
    return o
}

function Xv(e, t) {
    const r = e === "style" ? new Map : new Set;

    function n(o) {
        if (o == null || o === void 0) return;
        const i = String(o).trim();
        if (i)
            if (e === "style") {
                const [s, ...a] = i.split(":").map(c => c ? c.trim() : "");
                s && a.length && r.set(s, a.join(":"))
            } else i.split(" ").filter(Boolean).forEach(s => r.add(s))
    }
    return typeof t == "string" ? e === "style" ? t.split(";").forEach(n) : n(t) : Array.isArray(t) ? t.forEach(o => n(o)) : t && typeof t == "object" && Object.entries(t).forEach(([o, i]) => {
        i && i !== "false" && (e === "style" ? r.set(String(o).trim(), String(i)) : n(o))
    }), r
}

function Ad(e, t) {
    if (e.props = e.props || {}, !t) return e;
    if (e.tag === "templateParams") return e.props = t, e;
    const r = Js.has(e.tag) || e.tag === "htmlAttrs" || e.tag === "bodyAttrs";
    return Object.entries(t).forEach(([n, o]) => {
        if (n === "__proto__" || n === "constructor" || n === "prototype") return;
        if (o === null) {
            e.props[n] = null;
            return
        }
        if (n === "class" || n === "style") {
            e.props[n] = Xv(n, o);
            return
        }
        if (qv.has(n)) {
            if ((n === "textContent" || n === "innerHTML") && typeof o == "object") {
                let u = t.type;
                if (t.type || (u = "application/json"), !u?.endsWith("json") && u !== "speculationrules") return;
                t.type = u, e.props.type = u, e[n] = JSON.stringify(o)
            } else e[n] = o;
            return
        }
        const i = n.startsWith("data-"),
            s = r && !i ? n.toLowerCase() : n,
            a = String(o),
            c = e.tag === "meta" && s === "content";
        a === "true" || a === "" ? e.props[s] = i || c ? a : !0 : !o && i && a === "false" ? e.props[s] = "false" : o !== void 0 && (e.props[s] = o)
    }), e
}

function Yv(e, t) {
    const r = typeof t == "object" && typeof t != "function" ? t : {
            [e === "script" || e === "noscript" || e === "style" ? "innerHTML" : "textContent"]: t
        },
        n = Ad({
            tag: e,
            props: {}
        }, r);
    return n.key && Dv.has(n.tag) && (n.props["data-hid"] = n._h = n.key), n.tag === "script" && typeof n.innerHTML == "object" && (n.innerHTML = JSON.stringify(n.innerHTML), n.props.type = n.props.type || "application/json"), Array.isArray(n.props.content) ? n.props.content.map(o => ({
        ...n,
        props: {
            ...n.props,
            content: o
        }
    })) : n
}

function Jv(e, t) {
    if (!e) return [];
    typeof e == "function" && (e = e());
    const r = (o, i) => {
        for (let s = 0; s < t.length; s++) i = t[s](o, i);
        return i
    };
    e = r(void 0, e);
    const n = [];
    return e = Ho(e, r), Object.entries(e || {}).forEach(([o, i]) => {
        if (i !== void 0)
            for (const s of Array.isArray(i) ? i : [i]) n.push(Yv(o, s))
    }), n.flat()
}
const ea = (e, t) => e._w === t._w ? e._p - t._p : e._w - t._w,
    kc = {
        base: -10,
        title: 10
    },
    Qv = {
        critical: -8,
        high: -1,
        low: 2
    },
    Ic = {
        meta: {
            "content-security-policy": -30,
            charset: -20,
            viewport: -15
        },
        link: {
            preconnect: 20,
            stylesheet: 60,
            preload: 70,
            modulepreload: 70,
            prefetch: 90,
            "dns-prefetch": 90,
            prerender: 90
        },
        script: {
            async: 30,
            defer: 80,
            sync: 50
        },
        style: {
            imported: 40,
            sync: 60
        }
    },
    Zv = /@import/,
    cn = e => e === "" || e === !0;

function ey(e, t) {
    if (typeof t.tagPriority == "number") return t.tagPriority;
    let r = 100;
    const n = Qv[t.tagPriority] || 0,
        o = e.resolvedOptions.disableCapoSorting ? {
            link: {},
            script: {},
            style: {}
        } : Ic;
    if (t.tag in kc) r = kc[t.tag];
    else if (t.tag === "meta") {
        const i = t.props["http-equiv"] === "content-security-policy" ? "content-security-policy" : t.props.charset ? "charset" : t.props.name === "viewport" ? "viewport" : null;
        i && (r = Ic.meta[i])
    } else if (t.tag === "link" && t.props.rel) r = o.link[t.props.rel];
    else if (t.tag === "script") {
        const i = String(t.props.type);
        cn(t.props.async) ? r = o.script.async : t.props.src && !cn(t.props.defer) && !cn(t.props.async) && i !== "module" && !i.endsWith("json") || t.innerHTML && !i.endsWith("json") ? r = o.script.sync : (cn(t.props.defer) && t.props.src && !cn(t.props.async) || i === "module") && (r = o.script.defer)
    } else t.tag === "style" && (r = t.innerHTML && Zv.test(t.innerHTML) ? o.style.imported : o.style.sync);
    return (r || 100) + n
}

function Mc(e, t) {
    const r = typeof t == "function" ? t(e) : t,
        n = r.key || String(e.plugins.size + 1);
    e.plugins.get(n) || (e.plugins.set(n, r), e.hooks.addHooks(r.hooks || {}))
}

function ty(e = {}) {
    const t = zv();
    t.addHooks(e.hooks || {});
    const r = !e.document,
        n = new Map,
        o = new Map,
        i = new Set,
        s = {
            _entryCount: 1,
            plugins: o,
            dirty: !1,
            resolvedOptions: e,
            hooks: t,
            ssr: r,
            entries: n,
            headEntries() {
                return [...n.values()]
            },
            use: a => Mc(s, a),
            push(a, c) {
                const u = {
                    ...c || {}
                };
                delete u.head;
                const l = u._index ?? s._entryCount++,
                    f = {
                        _i: l,
                        input: a,
                        options: u
                    },
                    d = {
                        _poll(p = !1) {
                            s.dirty = !0, !p && i.add(l), t.callHook("entries:updated", s)
                        },
                        dispose() {
                            n.delete(l) && s.invalidate()
                        },
                        patch(p) {
                            (!u.mode || u.mode === "server" && r || u.mode === "client" && !r) && (f.input = p, n.set(l, f), d._poll())
                        }
                    };
                return d.patch(a), d
            },
            async resolveTags() {
                const a = {
                    tagMap: new Map,
                    tags: [],
                    entries: [...s.entries.values()]
                };
                for (await t.callHook("entries:resolve", a); i.size;) {
                    const d = i.values().next().value;
                    i.delete(d);
                    const p = n.get(d);
                    if (p) {
                        const m = {
                            tags: Jv(p.input, e.propResolvers || []).map(b => Object.assign(b, p.options)),
                            entry: p
                        };
                        await t.callHook("entries:normalize", m), p._tags = m.tags.map((b, P) => (b._w = ey(s, b), b._p = (p._i << 10) + P, b._d = Zs(b), b._d || (b._h = Td(b)), b))
                    }
                }
                let c = !1;
                a.entries.flatMap(d => (d._tags || []).map(p => ({
                    ...p,
                    props: {
                        ...p.props
                    }
                }))).sort(ea).reduce((d, p) => {
                    const m = p._d || p._h;
                    if (!d.has(m)) return d.set(m, p);
                    const b = d.get(m);
                    if ((p?.tagDuplicateStrategy || (Uv.has(p.tag) ? "merge" : null) || (p.key && p.key === b.key ? "merge" : null)) === "merge") {
                        const w = {
                            ...b.props
                        };
                        Object.entries(p.props).forEach(([v, h]) => w[v] = v === "style" ? new Map([...b.props.style || new Map, ...h]) : v === "class" ? new Set([...b.props.class || new Set, ...h]) : h), d.set(m, {
                            ...p,
                            props: w
                        })
                    } else p._p >> 10 === b._p >> 10 && p.tag === "meta" && Cd(m) ? (d.set(m, Object.assign([...Array.isArray(b) ? b : [b], p], p)), c = !0) : (p._w === b._w ? p._p > b._p : p?._w < b?._w) && d.set(m, p);
                    return d
                }, a.tagMap);
                const u = a.tagMap.get("title"),
                    l = a.tagMap.get("titleTemplate");
                if (s._title = u?.textContent, l) {
                    const d = l?.textContent;
                    if (s._titleTemplate = d, d) {
                        let p = typeof d == "function" ? d(u?.textContent) : d;
                        typeof p == "string" && !s.plugins.has("template-params") && (p = p.replace("%s", u?.textContent || "")), u ? p === null ? a.tagMap.delete("title") : a.tagMap.set("title", {
                            ...u,
                            textContent: p
                        }) : (l.tag = "title", l.textContent = p)
                    }
                }
                a.tags = Array.from(a.tagMap.values()), c && (a.tags = a.tags.flat().sort(ea)), await t.callHook("tags:beforeResolve", a), await t.callHook("tags:resolve", a), await t.callHook("tags:afterResolve", a);
                const f = [];
                for (const d of a.tags) {
                    const {
                        innerHTML: p,
                        tag: m,
                        props: b
                    } = d;
                    if (Hv.has(m) && !(Object.keys(b).length === 0 && !d.innerHTML && !d.textContent) && !(m === "meta" && !b.content && !b["http-equiv"] && !b.charset)) {
                        if (m === "script" && p) {
                            if (String(b.type).endsWith("json")) {
                                const P = typeof p == "string" ? p : JSON.stringify(p);
                                d.innerHTML = P.replace(/</g, "\\u003C")
                            } else typeof p == "string" && (d.innerHTML = p.replace(new RegExp(`</${m}`, "g"), `<\\/${m}`));
                            d._d = Zs(d)
                        }
                        f.push(d)
                    }
                }
                return f
            },
            invalidate() {
                for (const a of n.values()) i.add(a._i);
                s.dirty = !0, t.callHook("entries:updated", s)
            }
        };
    return (e?.plugins || []).forEach(a => Mc(s, a)), s.hooks.callHook("init", s), e.init?.forEach(a => a && s.push(a)), s
}
const Ai = "%separator";

function ry(e, t, r = !1) {
    let n;
    if (t === "s" || t === "pageTitle") n = e.pageTitle;
    else if (t.includes(".")) {
        const o = t.indexOf(".");
        n = e[t.substring(0, o)]?.[t.substring(o + 1)]
    } else n = e[t];
    if (n !== void 0) return r ? (n || "").replace(/\\/g, "\\\\").replace(/</g, "\\u003C").replace(/"/g, '\\"') : n || ""
}

function Gn(e, t, r, n = !1) {
    if (typeof e != "string" || !e.includes("%")) return e;
    let o = e;
    try {
        o = decodeURI(e)
    } catch {}
    const i = o.match(/%\w+(?:\.\w+)?/g);
    if (!i) return e;
    const s = e.includes(Ai);
    return e = e.replace(/%\w+(?:\.\w+)?/g, a => {
        if (a === Ai || !i.includes(a)) return a;
        const c = ry(t, a.slice(1), n);
        return c !== void 0 ? c : a
    }).trim(), s && (e = e.split(Ai).map(a => a.trim()).filter(a => a !== "").join(r ? ` ${r} ` : " ")), e
}
const Lc = e => e.includes(":key") ? e : e.split(":").join(":key:"),
    ny = {
        key: "aliasSorting",
        hooks: {
            "tags:resolve": e => {
                let t = !1;
                for (const r of e.tags) {
                    const n = r.tagPriority;
                    if (!n) continue;
                    const o = String(n);
                    if (o.startsWith("before:")) {
                        const i = Lc(o.slice(7)),
                            s = e.tagMap.get(i);
                        s && (typeof s.tagPriority == "number" && (r.tagPriority = s.tagPriority), r._p = s._p - 1, t = !0)
                    } else if (o.startsWith("after:")) {
                        const i = Lc(o.slice(6)),
                            s = e.tagMap.get(i);
                        s && (typeof s.tagPriority == "number" && (r.tagPriority = s.tagPriority), r._p = s._p + 1, t = !0)
                    }
                }
                t && (e.tags = e.tags.sort(ea))
            }
        }
    },
    oy = {
        key: "deprecations",
        hooks: {
            "entries:normalize": ({
                tags: e
            }) => {
                for (const t of e) t.props.children && (t.innerHTML = t.props.children, delete t.props.children), t.props.hid && (t.key = t.props.hid, delete t.props.hid), t.props.vmid && (t.key = t.props.vmid, delete t.props.vmid), t.props.body && (t.tagPosition = "bodyClose", delete t.props.body)
            }
        }
    };
async function ta(e) {
    if (typeof e === "function") return e;
    if (e instanceof Promise) return await e;
    if (Array.isArray(e)) return await Promise.all(e.map(r => ta(r)));
    if (e?.constructor === Object) {
        const r = {};
        for (const n of Object.keys(e)) r[n] = await ta(e[n]);
        return r
    }
    return e
}
const iy = {
        key: "promises",
        hooks: {
            "entries:resolve": async e => {
                const t = [];
                for (const r in e.entries) e.entries[r]._promisesProcessed || t.push(ta(e.entries[r].input).then(n => {
                    e.entries[r].input = n, e.entries[r]._promisesProcessed = !0
                }));
                await Promise.all(t)
            }
        }
    },
    sy = {
        meta: "content",
        link: "href",
        htmlAttrs: "lang"
    },
    ay = ["innerHTML", "textContent"],
    cy = e => ({
        key: "template-params",
        hooks: {
            "entries:normalize": t => {
                const r = t.tags.filter(n => n.tag === "templateParams" && n.mode === "server")?.[0]?.props || {};
                Object.keys(r).length && (e._ssrPayload = {
                    templateParams: {
                        ...e._ssrPayload?.templateParams || {},
                        ...r
                    }
                })
            },
            "tags:resolve": ({
                tagMap: t,
                tags: r
            }) => {
                const n = t.get("templateParams")?.props || {},
                    o = n.separator || "|";
                delete n.separator, n.pageTitle = Gn(n.pageTitle || e._title || "", n, o);
                for (const i of r) {
                    if (i.processTemplateParams === !1) continue;
                    const s = sy[i.tag];
                    if (s && typeof i.props[s] == "string") i.props[s] = Gn(i.props[s], n, o);
                    else if (i.processTemplateParams || i.tag === "titleTemplate" || i.tag === "title")
                        for (const a of ay) typeof i[a] == "string" && (i[a] = Gn(i[a], n, o, i.tag === "script" && i.props.type.endsWith("json")))
                }
                e._templateParams = n, e._separator = o
            },
            "tags:afterResolve": ({
                tagMap: t
            }) => {
                const r = t.get("title");
                r?.textContent && r.processTemplateParams !== !1 && (r.textContent = Gn(r.textContent, e._templateParams, e._separator))
            }
        }
    }),
    ly = (e, t) => Me(t) ? $h(t) : t,
    ka = "usehead";

function uy(e) {
    return {
        install(r) {
            r.config.globalProperties.$unhead = e, r.config.globalProperties.$head = e, r.provide(ka, e)
        }
    }.install
}

function fy() {
    if (Yo()) {
        const e = Ke(ka);
        if (e) return e
    }
    throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.")
}

function dy(e, t = {}) {
    const r = t.head || fy();
    return r.ssr ? r.push(e || {}, t) : hy(r, e, t)
}

function hy(e, t, r = {}) {
    const n = Ce(!1);
    let o;
    return lf(() => {
        const s = n.value ? {} : Ho(t, ly);
        o ? o.patch(s) : o = e.push(s, r)
    }), Gt() && (Zr(() => {
        o.dispose()
    }), Qo(() => {
        n.value = !0
    }), Jo(() => {
        n.value = !1
    })), o
}

function py(e) {
    const t = e || yd();
    return t?.ssrContext?.head || t?.runWithContext(() => {
        if (Yo()) return Ke(ka)
    })
}

function my(e, t = {}) {
    const r = py(t.nuxt);
    if (r) return dy(e, {
        head: r,
        ...t
    })
}
const gy = (e, t) => [],
    Od = e => jo({}, ...gy("", typeof e == "string" ? e.toLowerCase() : e).map(t => t.data).reverse()),
    vy = Od;
let po;

function yy() {
    let e;
    return e = $fetch(Pa(`builds/meta/${jn().app.buildId}.json`), {
        responseType: "json"
    }).then(t => {
        if (!t || typeof t != "object" || !Array.isArray(t.prerendered)) throw new Error("[nuxt] Received malformed app manifest. Ensure that `builds/meta/*.json` is served as JSON by your hosting/proxy and not rewritten to an HTML fallback.");
        return t
    }), po = e, e.catch(t => {
        po === e && (po = void 0), console.error("[nuxt] Error fetching app manifest.", t)
    }), e
}

function Pd() {
    return po || yy()
}

function xd(e) {
    const t = typeof e == "string" ? e : e.path;
    try {
        return vy(t.toLowerCase())
    } catch (r) {
        return console.error("[nuxt] Error matching route rules.", r), {}
    }
}
async function Nc(e, t = {}) {
    return null
}
async function by(e) {
    return null
}
let cr = null;
async function _y() {
    if (cr) return cr;
    const e = document.getElementById("__NUXT_DATA__");
    if (!e) return {};
    const t = await wy(e.textContent || ""),
        r = e.dataset.src ? await by(e.dataset.src) : void 0;
    return cr = {
        ...t,
        ...r,
        ...window.__NUXT__
    }, cr.config?.public && (cr.config.public = Kt(cr.config.public)), cr
}
async function wy(e) {
    return await Lv(e, $e()._payloadRevivers)
}

function Ey(e, t) {
    $e()._payloadRevivers[e] = t
}
const Sy = [
        ["NuxtError", e => wr(e)],
        ["EmptyShallowRef", e => Wr(e === "_" ? void 0 : e === "0n" ? BigInt(0) : Mo(e))],
        ["EmptyRef", e => Ce(e === "_" ? void 0 : e === "0n" ? BigInt(0) : Mo(e))],
        ["ShallowRef", e => Wr(e)],
        ["ShallowReactive", e => Vt(e)],
        ["Ref", e => Ce(e)],
        ["Reactive", e => Kt(e)]
    ],
    Ry = nt({
        name: "nuxt:revive-payload:client",
        order: -30,
        async setup(e) {
            let t, r;
            for (const [n, o] of Sy) Ey(n, o);
            Object.assign(e.payload, ([t, r] = En(() => e.runWithContext(_y)), t = await t, r(), t)), window.__NUXT__ = e.payload
        }
    });
async function Ia(e, t = {}) {
    const r = t.document || e.resolvedOptions.document;
    if (!r || !e.dirty) return;
    const n = {
        shouldRender: !0,
        tags: []
    };
    if (await e.hooks.callHook("dom:beforeRender", n), !!n.shouldRender) return e._domUpdatePromise || (e._domUpdatePromise = new Promise(async o => {
        const i = new Map,
            s = new Promise(p => {
                e.resolveTags().then(m => {
                    p(m.map(b => {
                        const P = i.get(b._d) || 0,
                            w = {
                                tag: b,
                                id: (P ? `${b._d}:${P}` : b._d) || b._h,
                                shouldRender: !0
                            };
                        return b._d && Cd(b._d) && i.set(b._d, P + 1), w
                    }))
                })
            });
        let a = e._dom;
        if (!a) {
            a = {
                title: r.title,
                elMap: new Map().set("htmlAttrs", r.documentElement).set("bodyAttrs", r.body)
            };
            for (const p of ["body", "head"]) {
                const m = r[p]?.children;
                for (const b of m) {
                    const P = b.tagName.toLowerCase();
                    if (!Js.has(P)) continue;
                    const w = Ad({
                        tag: P,
                        props: {}
                    }, {
                        innerHTML: b.innerHTML,
                        ...b.getAttributeNames().reduce((v, h) => (v[h] = b.getAttribute(h), v), {}) || {}
                    });
                    if (w.key = b.getAttribute("data-hid") || void 0, w._d = Zs(w) || Td(w), a.elMap.has(w._d)) {
                        let v = 1,
                            h = w._d;
                        for (; a.elMap.has(h);) h = `${w._d}:${v++}`;
                        a.elMap.set(h, b)
                    } else a.elMap.set(w._d, b)
                }
            }
        }
        a.pendingSideEffects = {
            ...a.sideEffects
        }, a.sideEffects = {};

        function c(p, m, b) {
            const P = `${p}:${m}`;
            a.sideEffects[P] = b, delete a.pendingSideEffects[P]
        }

        function u({
            id: p,
            $el: m,
            tag: b
        }) {
            const P = b.tag.endsWith("Attrs");
            a.elMap.set(p, m), P || (b.textContent && b.textContent !== m.textContent && (m.textContent = b.textContent), b.innerHTML && b.innerHTML !== m.innerHTML && (m.innerHTML = b.innerHTML), c(p, "el", () => {
                m?.remove(), a.elMap.delete(p)
            }));
            for (const w in b.props) {
                if (!Object.prototype.hasOwnProperty.call(b.props, w)) continue;
                const v = b.props[w];
                if (w.startsWith("on") && typeof v == "function") {
                    const g = m?.dataset;
                    if (g && g[`${w}fired`]) {
                        const y = w.slice(0, -5);
                        v.call(m, new Event(y.substring(2)))
                    }
                    m.getAttribute(`data-${w}`) !== "" && ((b.tag === "bodyAttrs" ? r.defaultView : m).addEventListener(w.substring(2), v.bind(m)), m.setAttribute(`data-${w}`, ""));
                    continue
                }
                const h = `attr:${w}`;
                if (w === "class") {
                    if (!v) continue;
                    for (const g of v) P && c(p, `${h}:${g}`, () => m.classList.remove(g)), !m.classList.contains(g) && m.classList.add(g)
                } else if (w === "style") {
                    if (!v) continue;
                    for (const [g, y] of v) c(p, `${h}:${g}`, () => {
                        m.style.removeProperty(g)
                    }), m.style.setProperty(g, y)
                } else v !== !1 && v !== null && (m.getAttribute(w) !== v && m.setAttribute(w, v === !0 ? "" : String(v)), P && c(p, h, () => m.removeAttribute(w)))
            }
        }
        const l = [],
            f = {
                bodyClose: void 0,
                bodyOpen: void 0,
                head: void 0
            },
            d = await s;
        for (const p of d) {
            const {
                tag: m,
                shouldRender: b,
                id: P
            } = p;
            if (b) {
                if (m.tag === "title") {
                    r.title = m.textContent, c("title", "", () => r.title = a.title);
                    continue
                }
                p.$el = p.$el || a.elMap.get(P), p.$el ? u(p) : Js.has(m.tag) && l.push(p)
            }
        }
        for (const p of l) {
            const m = p.tag.tagPosition || "head";
            p.$el = r.createElement(p.tag.tag), u(p), f[m] = f[m] || r.createDocumentFragment(), f[m].appendChild(p.$el)
        }
        for (const p of d) await e.hooks.callHook("dom:renderTag", p, r, c);
        f.head && r.head.appendChild(f.head), f.bodyOpen && r.body.insertBefore(f.bodyOpen, r.body.firstChild), f.bodyClose && r.body.appendChild(f.bodyClose);
        for (const p in a.pendingSideEffects) a.pendingSideEffects[p]();
        e._dom = a, await e.hooks.callHook("dom:rendered", {
            renders: d
        }), o()
    }).finally(() => {
        e._domUpdatePromise = void 0, e.dirty = !1
    })), e._domUpdatePromise
}

function Cy(e = {}) {
    const t = e.domOptions?.render || Ia;
    e.document = e.document || (typeof window < "u" ? document : void 0);
    const r = e.document?.head.querySelector('script[id="unhead:payload"]')?.innerHTML || !1;
    return ty({
        ...e,
        plugins: [...e.plugins || [], {
            key: "client",
            hooks: {
                "entries:updated": t
            }
        }],
        init: [r ? JSON.parse(r) : !1, ...e.init || []]
    })
}

function Ty(e, t) {
    let r = 0;
    return () => {
        const n = ++r;
        t(() => {
            r === n && e()
        })
    }
}

function Ay(e = {}) {
    const t = Cy({
        domOptions: {
            render: Ty(() => Ia(t), r => setTimeout(r, 0))
        },
        ...e
    });
    return t.install = uy(t), t
}
const Oy = {
        disableDefaults: !0,
        disableCapoSorting: !1,
        plugins: [oy, iy, cy, ny]
    },
    Py = nt({
        name: "nuxt:head",
        enforce: "pre",
        setup(e) {
            const t = Ay(Oy);
            e.vueApp.use(t);
            {
                let r = !0;
                const n = async () => {
                    r = !1, await Ia(t)
                };
                t.hooks.hook("dom:beforeRender", i => {
                    i.shouldRender = !r
                }), e.hooks.hook("page:start", () => {
                    r = !0
                }), e.hooks.hook("page:finish", () => {
                    e.isHydrating || n()
                }), e.hooks.hook("app:error", n), e.hooks.hook("app:suspense:resolve", n);
                const o = t.push.bind(t);
                t.push = ((i, s) => {
                    const a = o(i, s),
                        c = a.dispose.bind(a);
                    return a.dispose = () => {
                        const u = e["~transitionPromise"];
                        u ? u.then(c) : c()
                    }, a
                })
            }
        }
    });
const Lr = typeof document < "u";

function kd(e) {
    return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e
}

function xy(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && kd(e.default)
}
const pe = Object.assign;

function Oi(e, t) {
    const r = {};
    for (const n in t) {
        const o = t[n];
        r[n] = St(o) ? o.map(e) : e(o)
    }
    return r
}
const Sn = () => {},
    St = Array.isArray;

function Dc(e, t) {
    const r = {};
    for (const n in e) r[n] = n in t ? t[n] : e[n];
    return r
}
const Id = /#/g,
    ky = /&/g,
    Iy = /\//g,
    My = /=/g,
    Ly = /\?/g,
    Md = /\+/g,
    Ny = /%5B/g,
    Dy = /%5D/g,
    Ld = /%5E/g,
    jy = /%60/g,
    Nd = /%7B/g,
    Hy = /%7C/g,
    Dd = /%7D/g,
    By = /%20/g;

function Ma(e) {
    return e == null ? "" : encodeURI("" + e).replace(Hy, "|").replace(Ny, "[").replace(Dy, "]")
}

function qy(e) {
    return Ma(e).replace(Nd, "{").replace(Dd, "}").replace(Ld, "^")
}

function ra(e) {
    return Ma(e).replace(Md, "%2B").replace(By, "+").replace(Id, "%23").replace(ky, "%26").replace(jy, "`").replace(Nd, "{").replace(Dd, "}").replace(Ld, "^")
}

function Uy(e) {
    return ra(e).replace(My, "%3D")
}

function Fy(e) {
    return Ma(e).replace(Id, "%23").replace(Ly, "%3F")
}

function $y(e) {
    return Fy(e).replace(Iy, "%2F")
}

function In(e) {
    if (e == null) return null;
    try {
        return decodeURIComponent("" + e)
    } catch {}
    return "" + e
}
const Vy = /\/$/,
    Wy = e => e.replace(Vy, "");

function Pi(e, t, r = "/") {
    let n, o = {},
        i = "",
        s = "";
    const a = t.indexOf("#");
    let c = t.indexOf("?");
    return c = a >= 0 && c > a ? -1 : c, c >= 0 && (n = t.slice(0, c), i = t.slice(c, a > 0 ? a : t.length), o = e(i.slice(1))), a >= 0 && (n = n || t.slice(0, a), s = t.slice(a, t.length)), n = Xy(n ?? t, r), {
        fullPath: n + i + s,
        path: n,
        query: o,
        hash: In(s)
    }
}

function zy(e, t) {
    const r = t.query ? e(t.query) : "";
    return t.path + (r && "?") + r + (t.hash || "")
}

function jc(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}

function Gy(e, t, r) {
    const n = t.matched.length - 1,
        o = r.matched.length - 1;
    return n > -1 && n === o && Kr(t.matched[n], r.matched[o]) && jd(t.params, r.params) && e(t.query) === e(r.query) && t.hash === r.hash
}

function Kr(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}

function jd(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length) return !1;
    for (var r in e)
        if (!Ky(e[r], t[r])) return !1;
    return !0
}

function Ky(e, t) {
    return St(e) ? Hc(e, t) : St(t) ? Hc(t, e) : e?.valueOf() === t?.valueOf()
}

function Hc(e, t) {
    return St(t) ? e.length === t.length && e.every((r, n) => r === t[n]) : e.length === 1 && e[0] === t
}

function Xy(e, t) {
    if (e.startsWith("/")) return e;
    if (!e) return t;
    const r = t.split("/"),
        n = e.split("/"),
        o = n[n.length - 1];
    (o === ".." || o === ".") && n.push("");
    let i = r.length - 1,
        s, a;
    for (s = 0; s < n.length; s++)
        if (a = n[s], a !== ".")
            if (a === "..") i > 1 && i--;
            else break;
    return r.slice(0, i).join("/") + "/" + n.slice(s).join("/")
}
const gt = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
};
let na = (function(e) {
        return e.pop = "pop", e.push = "push", e
    })({}),
    xi = (function(e) {
        return e.back = "back", e.forward = "forward", e.unknown = "", e
    })({});

function Yy(e) {
    if (!e)
        if (Lr) {
            const t = document.querySelector("base");
            e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "")
        } else e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Wy(e)
}
const Jy = /^[^#]+#/;

function Qy(e, t) {
    return e.replace(Jy, "#") + t
}

function Zy(e, t) {
    const r = document.documentElement.getBoundingClientRect(),
        n = e.getBoundingClientRect();
    return {
        behavior: t.behavior,
        left: n.left - r.left - (t.left || 0),
        top: n.top - r.top - (t.top || 0)
    }
}
const ai = () => ({
    left: window.scrollX,
    top: window.scrollY
});

function eb(e) {
    let t;
    if ("el" in e) {
        const r = e.el,
            n = typeof r == "string" && r.startsWith("#"),
            o = typeof r == "string" ? n ? document.getElementById(r.slice(1)) : document.querySelector(r) : r;
        if (!o) return;
        t = Zy(o, e)
    } else t = e;
    "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY)
}

function Bc(e, t) {
    return (history.state ? history.state.position - t : -1) + e
}
const oa = new Map;

function tb(e, t) {
    oa.set(e, t)
}

function rb(e) {
    const t = oa.get(e);
    return oa.delete(e), t
}

function nb(e) {
    return typeof e == "string" || e && typeof e == "object"
}

function Hd(e) {
    return typeof e == "string" || typeof e == "symbol"
}
let xe = (function(e) {
    return e[e.MATCHER_NOT_FOUND = 1] = "MATCHER_NOT_FOUND", e[e.NAVIGATION_GUARD_REDIRECT = 2] = "NAVIGATION_GUARD_REDIRECT", e[e.NAVIGATION_ABORTED = 4] = "NAVIGATION_ABORTED", e[e.NAVIGATION_CANCELLED = 8] = "NAVIGATION_CANCELLED", e[e.NAVIGATION_DUPLICATED = 16] = "NAVIGATION_DUPLICATED", e
})({});
const Bd = Symbol("");
xe.MATCHER_NOT_FOUND + "", xe.NAVIGATION_GUARD_REDIRECT + "", xe.NAVIGATION_ABORTED + "", xe.NAVIGATION_CANCELLED + "", xe.NAVIGATION_DUPLICATED + "";

function Xr(e, t) {
    return pe(new Error, {
        type: e,
        [Bd]: !0
    }, t)
}

function Ht(e, t) {
    return e instanceof Error && Bd in e && (t == null || !!(e.type & t))
}
const ob = ["params", "query", "hash"];

function ib(e) {
    if (typeof e == "string") return e;
    if (e.path != null) return e.path;
    const t = {};
    for (const r of ob) r in e && (t[r] = e[r]);
    return JSON.stringify(t, null, 2)
}

function sb(e) {
    const t = {};
    if (e === "" || e === "?") return t;
    const r = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let n = 0; n < r.length; ++n) {
        const o = r[n].replace(Md, " "),
            i = o.indexOf("="),
            s = In(i < 0 ? o : o.slice(0, i)),
            a = i < 0 ? null : In(o.slice(i + 1));
        if (s in t) {
            let c = t[s];
            St(c) || (c = t[s] = [c]), c.push(a)
        } else t[s] = a
    }
    return t
}

function qc(e) {
    let t = "";
    for (let r in e) {
        const n = e[r];
        if (r = Uy(r), n == null) {
            n !== void 0 && (t += (t.length ? "&" : "") + r);
            continue
        }(St(n) ? n.map(o => o && ra(o)) : [n && ra(n)]).forEach(o => {
            o !== void 0 && (t += (t.length ? "&" : "") + r, o != null && (t += "=" + o))
        })
    }
    return t
}

function ab(e) {
    const t = {};
    for (const r in e) {
        const n = e[r];
        n !== void 0 && (t[r] = St(n) ? n.map(o => o == null ? null : "" + o) : n == null ? n : "" + n)
    }
    return t
}
const qd = Symbol(""),
    Uc = Symbol(""),
    La = Symbol(""),
    Na = Symbol(""),
    ia = Symbol("");

function ln() {
    let e = [];

    function t(n) {
        return e.push(n), () => {
            const o = e.indexOf(n);
            o > -1 && e.splice(o, 1)
        }
    }

    function r() {
        e = []
    }
    return {
        add: t,
        list: () => e.slice(),
        reset: r
    }
}

function cb(e, t, r) {
    const n = () => {
        e[t].delete(r)
    };
    ti(n), Qo(n), Jo(() => {
        e[t].add(r)
    }), e[t].add(r)
}

function rE(e) {
    const t = Ke(qd, {}).value;
    t && cb(t, "leaveGuards", e)
}

function Zt(e, t, r, n, o, i = s => s()) {
    const s = n && (n.enterCallbacks[o] = n.enterCallbacks[o] || []);
    return () => new Promise((a, c) => {
        const u = d => {
                d === !1 ? c(Xr(xe.NAVIGATION_ABORTED, {
                    from: r,
                    to: t
                })) : d instanceof Error ? c(d) : nb(d) ? c(Xr(xe.NAVIGATION_GUARD_REDIRECT, {
                    from: t,
                    to: d
                })) : (s && n.enterCallbacks[o] === s && typeof d == "function" && s.push(d), a())
            },
            l = i(() => e.call(n && n.instances[o], t, r, u));
        let f = Promise.resolve(l);
        e.length < 3 && (f = f.then(u)), f.catch(d => c(d))
    })
}

function ki(e, t, r, n, o = i => i()) {
    const i = [];
    for (const s of e)
        for (const a in s.components) {
            let c = s.components[a];
            if (!(t !== "beforeRouteEnter" && !s.instances[a]))
                if (kd(c)) {
                    const u = (c.__vccOpts || c)[t];
                    u && i.push(Zt(u, r, n, s, a, o))
                } else {
                    let u = c();
                    i.push(() => u.then(l => {
                        if (!l) throw new Error(`Couldn't resolve component "${a}" at "${s.path}"`);
                        const f = xy(l) ? l.default : l;
                        s.mods[a] = l, s.components[a] = f;
                        const d = (f.__vccOpts || f)[t];
                        return d && Zt(d, r, n, s, a, o)()
                    }))
                }
        }
    return i
}

function lb(e, t) {
    const r = [],
        n = [],
        o = [],
        i = Math.max(t.matched.length, e.matched.length);
    for (let s = 0; s < i; s++) {
        const a = t.matched[s];
        a && (e.matched.find(u => Kr(u, a)) ? n.push(a) : r.push(a));
        const c = e.matched[s];
        c && (t.matched.find(u => Kr(u, c)) || o.push(c))
    }
    return [r, n, o]
}
let ub = () => location.protocol + "//" + location.host;

function Ud(e, t) {
    const {
        pathname: r,
        search: n,
        hash: o
    } = t, i = e.indexOf("#");
    if (i > -1) {
        let s = o.includes(e.slice(i)) ? e.slice(i).length : 1,
            a = o.slice(s);
        return a[0] !== "/" && (a = "/" + a), jc(a, "")
    }
    return jc(r, e) + n + o
}

function fb(e, t, r, n) {
    let o = [],
        i = [],
        s = null;
    const a = ({
        state: d
    }) => {
        const p = Ud(e, location),
            m = r.value,
            b = t.value;
        let P = 0;
        if (d) {
            if (r.value = p, t.value = d, s && s === m) {
                s = null;
                return
            }
            P = b ? d.position - b.position : 0
        } else n(p);
        o.forEach(w => {
            w(r.value, m, {
                delta: P,
                type: na.pop,
                direction: P ? P > 0 ? xi.forward : xi.back : xi.unknown
            })
        })
    };

    function c() {
        s = r.value
    }

    function u(d) {
        o.push(d);
        const p = () => {
            const m = o.indexOf(d);
            m > -1 && o.splice(m, 1)
        };
        return i.push(p), p
    }

    function l() {
        if (document.visibilityState === "hidden") {
            const {
                history: d
            } = window;
            if (!d.state) return;
            d.replaceState(pe({}, d.state, {
                scroll: ai()
            }), "")
        }
    }

    function f() {
        for (const d of i) d();
        i = [], window.removeEventListener("popstate", a), window.removeEventListener("pagehide", l), document.removeEventListener("visibilitychange", l)
    }
    return window.addEventListener("popstate", a), window.addEventListener("pagehide", l), document.addEventListener("visibilitychange", l), {
        pauseListeners: c,
        listen: u,
        destroy: f
    }
}

function Fc(e, t, r, n = !1, o = !1) {
    return {
        back: e,
        current: t,
        forward: r,
        replaced: n,
        position: window.history.length,
        scroll: o ? ai() : null
    }
}

function db(e) {
    const {
        history: t,
        location: r
    } = window, n = {
        value: Ud(e, r)
    }, o = {
        value: t.state
    };
    o.value || i(n.value, {
        back: null,
        current: n.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
    }, !0);

    function i(c, u, l) {
        const f = e.indexOf("#"),
            d = f > -1 ? (r.host && document.querySelector("base") ? e : e.slice(f)) + c : ub() + e + c;
        try {
            t[l ? "replaceState" : "pushState"](u, "", d), o.value = u
        } catch (p) {
            console.error(p), r[l ? "replace" : "assign"](d)
        }
    }

    function s(c, u) {
        i(c, pe({}, t.state, Fc(o.value.back, c, o.value.forward, !0), u, {
            position: o.value.position
        }), !0), n.value = c
    }

    function a(c, u) {
        const l = pe({}, o.value, t.state, {
            forward: c,
            scroll: ai()
        });
        i(l.current, l, !0), i(c, pe({}, Fc(n.value, c, null), {
            position: l.position + 1
        }, u), !1), n.value = c
    }
    return {
        location: n,
        state: o,
        push: a,
        replace: s
    }
}

function hb(e) {
    e = Yy(e);
    const t = db(e),
        r = fb(e, t.state, t.location, t.replace);

    function n(i, s = !0) {
        s || r.pauseListeners(), history.go(i)
    }
    const o = pe({
        location: "",
        base: e,
        go: n,
        createHref: Qy.bind(null, e)
    }, t, r);
    return Object.defineProperty(o, "location", {
        enumerable: !0,
        get: () => t.location.value
    }), Object.defineProperty(o, "state", {
        enumerable: !0,
        get: () => t.state.value
    }), o
}
let mr = (function(e) {
    return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.Group = 2] = "Group", e
})({});
var je = (function(e) {
    return e[e.Static = 0] = "Static", e[e.Param = 1] = "Param", e[e.ParamRegExp = 2] = "ParamRegExp", e[e.ParamRegExpEnd = 3] = "ParamRegExpEnd", e[e.EscapeNext = 4] = "EscapeNext", e
})(je || {});
const pb = {
        type: mr.Static,
        value: ""
    },
    mb = /[a-zA-Z0-9_]/;

function gb(e) {
    if (!e) return [
        []
    ];
    if (e === "/") return [
        [pb]
    ];
    if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);

    function t(p) {
        throw new Error(`ERR (${r})/"${u}": ${p}`)
    }
    let r = je.Static,
        n = r;
    const o = [];
    let i;

    function s() {
        i && o.push(i), i = []
    }
    let a = 0,
        c, u = "",
        l = "";

    function f() {
        u && (r === je.Static ? i.push({
            type: mr.Static,
            value: u
        }) : r === je.Param || r === je.ParamRegExp || r === je.ParamRegExpEnd ? (i.length > 1 && (c === "*" || c === "+") && t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`), i.push({
            type: mr.Param,
            value: u,
            regexp: l,
            repeatable: c === "*" || c === "+",
            optional: c === "*" || c === "?"
        })) : t("Invalid state to consume buffer"), u = "")
    }

    function d() {
        u += c
    }
    for (; a < e.length;) {
        if (c = e[a++], c === "\\" && r !== je.ParamRegExp) {
            n = r, r = je.EscapeNext;
            continue
        }
        switch (r) {
            case je.Static:
                c === "/" ? (u && f(), s()) : c === ":" ? (f(), r = je.Param) : d();
                break;
            case je.EscapeNext:
                d(), r = n;
                break;
            case je.Param:
                c === "(" ? r = je.ParamRegExp : mb.test(c) ? d() : (f(), r = je.Static, c !== "*" && c !== "?" && c !== "+" && a--);
                break;
            case je.ParamRegExp:
                c === ")" ? l[l.length - 1] == "\\" ? l = l.slice(0, -1) + c : r = je.ParamRegExpEnd : l += c;
                break;
            case je.ParamRegExpEnd:
                f(), r = je.Static, c !== "*" && c !== "?" && c !== "+" && a--, l = "";
                break;
            default:
                t("Unknown state");
                break
        }
    }
    return r === je.ParamRegExp && t(`Unfinished custom RegExp for param "${u}"`), f(), s(), o
}
const $c = "[^/]+?",
    vb = {
        sensitive: !1,
        strict: !1,
        start: !0,
        end: !0
    };
var Ze = (function(e) {
    return e[e._multiplier = 10] = "_multiplier", e[e.Root = 90] = "Root", e[e.Segment = 40] = "Segment", e[e.SubSegment = 30] = "SubSegment", e[e.Static = 40] = "Static", e[e.Dynamic = 20] = "Dynamic", e[e.BonusCustomRegExp = 10] = "BonusCustomRegExp", e[e.BonusWildcard = -50] = "BonusWildcard", e[e.BonusRepeatable = -20] = "BonusRepeatable", e[e.BonusOptional = -8] = "BonusOptional", e[e.BonusStrict = .7000000000000001] = "BonusStrict", e[e.BonusCaseSensitive = .25] = "BonusCaseSensitive", e
})(Ze || {});
const yb = /[.+*?^${}()[\]/\\]/g;

function bb(e, t) {
    const r = pe({}, vb, t),
        n = [];
    let o = r.start ? "^" : "";
    const i = [];
    for (const u of e) {
        const l = u.length ? [] : [Ze.Root];
        r.strict && !u.length && (o += "/");
        for (let f = 0; f < u.length; f++) {
            const d = u[f];
            let p = Ze.Segment + (r.sensitive ? Ze.BonusCaseSensitive : 0);
            if (d.type === mr.Static) f || (o += "/"), o += d.value.replace(yb, "\\$&"), p += Ze.Static;
            else if (d.type === mr.Param) {
                const {
                    value: m,
                    repeatable: b,
                    optional: P,
                    regexp: w
                } = d;
                i.push({
                    name: m,
                    repeatable: b,
                    optional: P
                });
                const v = w || $c;
                if (v !== $c) {
                    p += Ze.BonusCustomRegExp;
                    try {
                        `${v}`
                    } catch (g) {
                        throw new Error(`Invalid custom RegExp for param "${m}" (${v}): ` + g.message)
                    }
                }
                let h = b ? `((?:${v})(?:/(?:${v}))*)` : `(${v})`;
                f || (h = P && u.length < 2 ? `(?:/${h})` : "/" + h), P && (h += "?"), o += h, p += Ze.Dynamic, P && (p += Ze.BonusOptional), b && (p += Ze.BonusRepeatable), v === ".*" && (p += Ze.BonusWildcard)
            }
            l.push(p)
        }
        n.push(l)
    }
    if (r.strict && r.end) {
        const u = n.length - 1;
        n[u][n[u].length - 1] += Ze.BonusStrict
    }
    r.strict || (o += "/?"), r.end ? o += "$" : r.strict && !o.endsWith("/") && (o += "(?:/|$)");
    const s = new RegExp(o, r.sensitive ? "" : "i");

    function a(u) {
        const l = u.match(s),
            f = {};
        if (!l) return null;
        for (let d = 1; d < l.length; d++) {
            const p = l[d] || "",
                m = i[d - 1];
            f[m.name] = p && m.repeatable ? p.split("/") : p
        }
        return f
    }

    function c(u) {
        let l = "",
            f = !1;
        for (const d of e) {
            (!f || !l.endsWith("/")) && (l += "/"), f = !1;
            for (const p of d)
                if (p.type === mr.Static) l += p.value;
                else if (p.type === mr.Param) {
                const {
                    value: m,
                    repeatable: b,
                    optional: P
                } = p, w = m in u ? u[m] : "";
                if (St(w) && !b) throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
                const v = St(w) ? w.join("/") : w;
                if (!v)
                    if (P) d.length < 2 && (l.endsWith("/") ? l = l.slice(0, -1) : f = !0);
                    else throw new Error(`Missing required param "${m}"`);
                l += v
            }
        }
        return l || "/"
    }
    return {
        re: s,
        score: n,
        keys: i,
        parse: a,
        stringify: c
    }
}

function _b(e, t) {
    let r = 0;
    for (; r < e.length && r < t.length;) {
        const n = t[r] - e[r];
        if (n) return n;
        r++
    }
    return e.length < t.length ? e.length === 1 && e[0] === Ze.Static + Ze.Segment ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === Ze.Static + Ze.Segment ? 1 : -1 : 0
}

function Fd(e, t) {
    let r = 0;
    const n = e.score,
        o = t.score;
    for (; r < n.length && r < o.length;) {
        const i = _b(n[r], o[r]);
        if (i) return i;
        r++
    }
    if (Math.abs(o.length - n.length) === 1) {
        if (Vc(n)) return 1;
        if (Vc(o)) return -1
    }
    return o.length - n.length
}

function Vc(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0
}
const wb = {
    strict: !1,
    end: !0,
    sensitive: !1
};

function Eb(e, t, r) {
    const n = bb(gb(e.path), r),
        o = pe(n, {
            record: e,
            parent: t,
            children: [],
            alias: []
        });
    return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o
}

function Sb(e, t) {
    const r = [],
        n = new Map;
    t = Dc(wb, t);

    function o(f) {
        return n.get(f)
    }

    function i(f, d, p) {
        const m = !p,
            b = zc(f);
        b.aliasOf = p && p.record;
        const P = Dc(t, f),
            w = [b];
        if ("alias" in f) {
            const g = typeof f.alias == "string" ? [f.alias] : f.alias;
            for (const y of g) w.push(zc(pe({}, b, {
                components: p ? p.record.components : b.components,
                path: y,
                aliasOf: p ? p.record : b
            })))
        }
        let v, h;
        for (const g of w) {
            const {
                path: y
            } = g;
            if (d && y[0] !== "/") {
                const x = d.record.path,
                    T = x[x.length - 1] === "/" ? "" : "/";
                g.path = d.record.path + (y && T + y)
            }
            if (v = Eb(g, d, P), p ? p.alias.push(v) : (h = h || v, h !== v && h.alias.push(v), m && f.name && !Gc(v) && s(f.name)), $d(v) && c(v), b.children) {
                const x = b.children;
                for (let T = 0; T < x.length; T++) i(x[T], v, p && p.children[T])
            }
            p = p || v
        }
        return h ? () => {
            s(h)
        } : Sn
    }

    function s(f) {
        if (Hd(f)) {
            const d = n.get(f);
            d && (n.delete(f), r.splice(r.indexOf(d), 1), d.children.forEach(s), d.alias.forEach(s))
        } else {
            const d = r.indexOf(f);
            d > -1 && (r.splice(d, 1), f.record.name && n.delete(f.record.name), f.children.forEach(s), f.alias.forEach(s))
        }
    }

    function a() {
        return r
    }

    function c(f) {
        const d = Tb(f, r);
        r.splice(d, 0, f), f.record.name && !Gc(f) && n.set(f.record.name, f)
    }

    function u(f, d) {
        let p, m = {},
            b, P;
        if ("name" in f && f.name) {
            if (p = n.get(f.name), !p) throw Xr(xe.MATCHER_NOT_FOUND, {
                location: f
            });
            P = p.record.name, m = pe(Wc(d.params, p.keys.filter(h => !h.optional).concat(p.parent ? p.parent.keys.filter(h => h.optional) : []).map(h => h.name)), f.params && Wc(f.params, p.keys.map(h => h.name))), b = p.stringify(m)
        } else if (f.path != null) b = f.path, p = r.find(h => h.re.test(b)), p && (m = p.parse(b), P = p.record.name);
        else {
            if (p = d.name ? n.get(d.name) : r.find(h => h.re.test(d.path)), !p) throw Xr(xe.MATCHER_NOT_FOUND, {
                location: f,
                currentLocation: d
            });
            P = p.record.name, m = pe({}, d.params, f.params), b = p.stringify(m)
        }
        const w = [];
        let v = p;
        for (; v;) w.unshift(v.record), v = v.parent;
        return {
            name: P,
            path: b,
            params: m,
            matched: w,
            meta: Cb(w)
        }
    }
    e.forEach(f => i(f));

    function l() {
        r.length = 0, n.clear()
    }
    return {
        addRoute: i,
        resolve: u,
        removeRoute: s,
        clearRoutes: l,
        getRoutes: a,
        getRecordMatcher: o
    }
}

function Wc(e, t) {
    const r = {};
    for (const n of t) n in e && (r[n] = e[n]);
    return r
}

function zc(e) {
    const t = {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: e.aliasOf,
        beforeEnter: e.beforeEnter,
        props: Rb(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set,
        updateGuards: new Set,
        enterCallbacks: {},
        components: "components" in e ? e.components || null : e.component && {
            default: e.component
        }
    };
    return Object.defineProperty(t, "mods", {
        value: {}
    }), t
}

function Rb(e) {
    const t = {},
        r = e.props || !1;
    if ("component" in e) t.default = r;
    else
        for (const n in e.components) t[n] = typeof r == "object" ? r[n] : r;
    return t
}

function Gc(e) {
    for (; e;) {
        if (e.record.aliasOf) return !0;
        e = e.parent
    }
    return !1
}

function Cb(e) {
    return e.reduce((t, r) => pe(t, r.meta), {})
}

function Tb(e, t) {
    let r = 0,
        n = t.length;
    for (; r !== n;) {
        const i = r + n >> 1;
        Fd(e, t[i]) < 0 ? n = i : r = i + 1
    }
    const o = Ab(e);
    return o && (n = t.lastIndexOf(o, n - 1)), n
}

function Ab(e) {
    let t = e;
    for (; t = t.parent;)
        if ($d(t) && Fd(e, t) === 0) return t
}

function $d({
    record: e
}) {
    return !!(e.name || e.components && Object.keys(e.components).length || e.redirect)
}

function Kc(e) {
    const t = Ke(La),
        r = Ke(Na),
        n = tt(() => {
            const c = ge(e.to);
            return t.resolve(c)
        }),
        o = tt(() => {
            const {
                matched: c
            } = n.value, {
                length: u
            } = c, l = c[u - 1], f = r.matched;
            if (!l || !f.length) return -1;
            const d = f.findIndex(Kr.bind(null, l));
            if (d > -1) return d;
            const p = Xc(c[u - 2]);
            return u > 1 && Xc(l) === p && f[f.length - 1].path !== p ? f.findIndex(Kr.bind(null, c[u - 2])) : d
        }),
        i = tt(() => o.value > -1 && Ib(r.params, n.value.params)),
        s = tt(() => o.value > -1 && o.value === r.matched.length - 1 && jd(r.params, n.value.params));

    function a(c = {}) {
        if (kb(c)) {
            const u = t[ge(e.replace) ? "replace" : "push"](ge(e.to)).catch(Sn);
            return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => u), u
        }
        return Promise.resolve()
    }
    return {
        route: n,
        href: tt(() => n.value.href),
        isActive: i,
        isExactActive: s,
        navigate: a
    }
}

function Ob(e) {
    return e.length === 1 ? e[0] : e
}
const Pb = Tr({
        name: "RouterLink",
        compatConfig: {
            MODE: 3
        },
        props: {
            to: {
                type: [String, Object],
                required: !0
            },
            replace: Boolean,
            activeClass: String,
            exactActiveClass: String,
            custom: Boolean,
            ariaCurrentValue: {
                type: String,
                default: "page"
            },
            viewTransition: Boolean
        },
        useLink: Kc,
        setup(e, {
            slots: t
        }) {
            const r = Kt(Kc(e)),
                {
                    options: n
                } = Ke(La),
                o = tt(() => ({
                    [Yc(e.activeClass, n.linkActiveClass, "router-link-active")]: r.isActive,
                    [Yc(e.exactActiveClass, n.linkExactActiveClass, "router-link-exact-active")]: r.isExactActive
                }));
            return () => {
                const i = t.default && Ob(t.default(r));
                return e.custom ? i : Mt("a", {
                    "aria-current": r.isExactActive ? e.ariaCurrentValue : null,
                    href: r.href,
                    onClick: r.navigate,
                    class: o.value
                }, i)
            }
        }
    }),
    xb = Pb;

function kb(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(t)) return
        }
        return e.preventDefault && e.preventDefault(), !0
    }
}

function Ib(e, t) {
    for (const r in t) {
        const n = t[r],
            o = e[r];
        if (typeof n == "string") {
            if (n !== o) return !1
        } else if (!St(o) || o.length !== n.length || n.some((i, s) => i.valueOf() !== o[s].valueOf())) return !1
    }
    return !0
}

function Xc(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const Yc = (e, t, r) => e ?? t ?? r,
    Mb = Tr({
        name: "RouterView",
        inheritAttrs: !1,
        props: {
            name: {
                type: String,
                default: "default"
            },
            route: Object
        },
        compatConfig: {
            MODE: 3
        },
        setup(e, {
            attrs: t,
            slots: r
        }) {
            const n = Ke(ia),
                o = tt(() => e.route || n.value),
                i = Ke(Uc, 0),
                s = tt(() => {
                    let u = ge(i);
                    const {
                        matched: l
                    } = o.value;
                    let f;
                    for (;
                        (f = l[u]) && !f.components;) u++;
                    return u
                }),
                a = tt(() => o.value.matched[s.value]);
            yr(Uc, tt(() => s.value + 1)), yr(qd, a), yr(ia, o);
            const c = Ce();
            return rr(() => [c.value, a.value, e.name], ([u, l, f], [d, p, m]) => {
                l && (l.instances[f] = u, p && p !== l && u && u === d && (l.leaveGuards.size || (l.leaveGuards = p.leaveGuards), l.updateGuards.size || (l.updateGuards = p.updateGuards))), u && l && (!p || !Kr(l, p) || !d) && (l.enterCallbacks[f] || []).forEach(b => b(u))
            }, {
                flush: "post"
            }), () => {
                const u = o.value,
                    l = e.name,
                    f = a.value,
                    d = f && f.components[l];
                if (!d) return Jc(r.default, {
                    Component: d,
                    route: u
                });
                const p = f.props[l],
                    m = p ? p === !0 ? u.params : typeof p == "function" ? p(u) : p : null,
                    P = Mt(d, pe({}, m, t, {
                        onVnodeUnmounted: w => {
                            w.component.isUnmounted && (f.instances[l] = null)
                        },
                        ref: c
                    }));
                return Jc(r.default, {
                    Component: P,
                    route: u
                }) || P
            }
        }
    });

function Jc(e, t) {
    if (!e) return null;
    const r = e(t);
    return r.length === 1 ? r[0] : r
}
const Lb = Mb;

function Nb(e) {
    const t = Sb(e.routes, e),
        r = e.parseQuery || sb,
        n = e.stringifyQuery || qc,
        o = e.history,
        i = ln(),
        s = ln(),
        a = ln(),
        c = Wr(gt);
    let u = gt;
    Lr && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const l = Oi.bind(null, q => "" + q),
        f = Oi.bind(null, $y),
        d = Oi.bind(null, In);

    function p(q, J) {
        let K, ee;
        return Hd(q) ? (K = t.getRecordMatcher(q), ee = J) : ee = q, t.addRoute(ee, K)
    }

    function m(q) {
        const J = t.getRecordMatcher(q);
        J && t.removeRoute(J)
    }

    function b() {
        return t.getRoutes().map(q => q.record)
    }

    function P(q) {
        return !!t.getRecordMatcher(q)
    }

    function w(q, J) {
        if (J = pe({}, J || c.value), typeof q == "string") {
            const R = Pi(r, q, J.path),
                N = t.resolve({
                    path: R.path
                }, J),
                C = o.createHref(R.fullPath);
            return pe(R, N, {
                params: d(N.params),
                hash: In(R.hash),
                redirectedFrom: void 0,
                href: C
            })
        }
        let K;
        if (q.path != null) K = pe({}, q, {
            path: Pi(r, q.path, J.path).path
        });
        else {
            const R = pe({}, q.params);
            for (const N in R) R[N] == null && delete R[N];
            K = pe({}, q, {
                params: f(R)
            }), J.params = f(J.params)
        }
        const ee = t.resolve(K, J),
            re = q.hash || "";
        ee.params = l(d(ee.params));
        const fe = zy(n, pe({}, q, {
                hash: qy(re),
                path: ee.path
            })),
            _ = o.createHref(fe);
        return pe({
            fullPath: fe,
            hash: re,
            query: n === qc ? ab(q.query) : q.query || {}
        }, ee, {
            redirectedFrom: void 0,
            href: _
        })
    }

    function v(q) {
        return typeof q == "string" ? Pi(r, q, c.value.path) : pe({}, q)
    }

    function h(q, J) {
        if (u !== q) return Xr(xe.NAVIGATION_CANCELLED, {
            from: J,
            to: q
        })
    }

    function g(q) {
        return T(q)
    }

    function y(q) {
        return g(pe(v(q), {
            replace: !0
        }))
    }

    function x(q, J) {
        const K = q.matched[q.matched.length - 1];
        if (K && K.redirect) {
            const {
                redirect: ee
            } = K;
            let re = typeof ee == "function" ? ee(q, J) : ee;
            return typeof re == "string" && (re = re.includes("?") || re.includes("#") ? re = v(re) : {
                path: re
            }, re.params = {}), pe({
                query: q.query,
                hash: q.hash,
                params: re.path != null ? {} : q.params
            }, re)
        }
    }

    function T(q, J) {
        const K = u = w(q),
            ee = c.value,
            re = q.state,
            fe = q.force,
            _ = q.replace === !0,
            R = x(K, ee);
        if (R) return T(pe(v(R), {
            state: typeof R == "object" ? pe({}, re, R.state) : re,
            force: fe,
            replace: _
        }), J || K);
        const N = K;
        N.redirectedFrom = J;
        let C;
        return !fe && Gy(n, ee, K) && (C = Xr(xe.NAVIGATION_DUPLICATED, {
            to: N,
            from: ee
        }), ne(ee, ee, !0, !1)), (C ? Promise.resolve(C) : j(N, ee)).catch(A => Ht(A) ? Ht(A, xe.NAVIGATION_GUARD_REDIRECT) ? A : te(A) : z(A, N, ee)).then(A => {
            if (A) {
                if (Ht(A, xe.NAVIGATION_GUARD_REDIRECT)) return T(pe({
                    replace: _
                }, v(A.to), {
                    state: typeof A.to == "object" ? pe({}, re, A.to.state) : re,
                    force: fe
                }), J || N)
            } else A = S(N, ee, !0, _, re);
            return F(N, ee, A), A
        })
    }

    function L(q, J) {
        const K = h(q, J);
        return K ? Promise.reject(K) : Promise.resolve()
    }

    function O(q) {
        const J = Ne.values().next().value;
        return J && typeof J.runWithContext == "function" ? J.runWithContext(q) : q()
    }

    function j(q, J) {
        let K;
        const [ee, re, fe] = lb(q, J);
        K = ki(ee.reverse(), "beforeRouteLeave", q, J);
        for (const R of ee) R.leaveGuards.forEach(N => {
            K.push(Zt(N, q, J))
        });
        const _ = L.bind(null, q, J);
        return K.push(_), Te(K).then(() => {
            K = [];
            for (const R of i.list()) K.push(Zt(R, q, J));
            return K.push(_), Te(K)
        }).then(() => {
            K = ki(re, "beforeRouteUpdate", q, J);
            for (const R of re) R.updateGuards.forEach(N => {
                K.push(Zt(N, q, J))
            });
            return K.push(_), Te(K)
        }).then(() => {
            K = [];
            for (const R of fe)
                if (R.beforeEnter)
                    if (St(R.beforeEnter))
                        for (const N of R.beforeEnter) K.push(Zt(N, q, J));
                    else K.push(Zt(R.beforeEnter, q, J));
            return K.push(_), Te(K)
        }).then(() => (q.matched.forEach(R => R.enterCallbacks = {}), K = ki(fe, "beforeRouteEnter", q, J, O), K.push(_), Te(K))).then(() => {
            K = [];
            for (const R of s.list()) K.push(Zt(R, q, J));
            return K.push(_), Te(K)
        }).catch(R => Ht(R, xe.NAVIGATION_CANCELLED) ? R : Promise.reject(R))
    }

    function F(q, J, K) {
        a.list().forEach(ee => O(() => ee(q, J, K)))
    }

    function S(q, J, K, ee, re) {
        const fe = h(q, J);
        if (fe) return fe;
        const _ = J === gt,
            R = Lr ? history.state : {};
        K && (ee || _ ? o.replace(q.fullPath, pe({
            scroll: _ && R && R.scroll
        }, re)) : o.push(q.fullPath, re)), c.value = q, ne(q, J, K, _), te()
    }
    let E;

    function M() {
        E || (E = o.listen((q, J, K) => {
            if (!Oe.listening) return;
            const ee = w(q),
                re = x(ee, Oe.currentRoute.value);
            if (re) {
                T(pe(re, {
                    replace: !0,
                    force: !0
                }), ee).catch(Sn);
                return
            }
            u = ee;
            const fe = c.value;
            Lr && tb(Bc(fe.fullPath, K.delta), ai()), j(ee, fe).catch(_ => Ht(_, xe.NAVIGATION_ABORTED | xe.NAVIGATION_CANCELLED) ? _ : Ht(_, xe.NAVIGATION_GUARD_REDIRECT) ? (T(pe(v(_.to), {
                force: !0
            }), ee).then(R => {
                Ht(R, xe.NAVIGATION_ABORTED | xe.NAVIGATION_DUPLICATED) && !K.delta && K.type === na.pop && o.go(-1, !1)
            }).catch(Sn), Promise.reject()) : (K.delta && o.go(-K.delta, !1), z(_, ee, fe))).then(_ => {
                _ = _ || S(ee, fe, !1), _ && (K.delta && !Ht(_, xe.NAVIGATION_CANCELLED) ? o.go(-K.delta, !1) : K.type === na.pop && Ht(_, xe.NAVIGATION_ABORTED | xe.NAVIGATION_DUPLICATED) && o.go(-1, !1)), F(ee, fe, _)
            }).catch(Sn)
        }))
    }
    let I = ln(),
        W = ln(),
        $;

    function z(q, J, K) {
        te(q);
        const ee = W.list();
        return ee.length ? ee.forEach(re => re(q, J, K)) : console.error(q), Promise.reject(q)
    }

    function Z() {
        return $ && c.value !== gt ? Promise.resolve() : new Promise((q, J) => {
            I.add([q, J])
        })
    }

    function te(q) {
        return $ || ($ = !q, M(), I.list().forEach(([J, K]) => q ? K(q) : J()), I.reset()), q
    }

    function ne(q, J, K, ee) {
        const {
            scrollBehavior: re
        } = e;
        if (!Lr || !re) return Promise.resolve();
        const fe = !K && rb(Bc(q.fullPath, 0)) || (ee || !K) && history.state && history.state.scroll || null;
        return Qr().then(() => re(q, J, fe)).then(_ => _ && eb(_)).catch(_ => z(_, q, J))
    }
    const ae = q => o.go(q);
    let Le;
    const Ne = new Set,
        Oe = {
            currentRoute: c,
            listening: !0,
            addRoute: p,
            removeRoute: m,
            clearRoutes: t.clearRoutes,
            hasRoute: P,
            getRoutes: b,
            resolve: w,
            options: e,
            push: g,
            replace: y,
            go: ae,
            back: () => ae(-1),
            forward: () => ae(1),
            beforeEach: i.add,
            beforeResolve: s.add,
            afterEach: a.add,
            onError: W.add,
            isReady: Z,
            install(q) {
                q.component("RouterLink", xb), q.component("RouterView", Lb), q.config.globalProperties.$router = Oe, Object.defineProperty(q.config.globalProperties, "$route", {
                    enumerable: !0,
                    get: () => ge(c)
                }), Lr && !Le && c.value === gt && (Le = !0, g(o.location).catch(ee => {}));
                const J = {};
                for (const ee in gt) Object.defineProperty(J, ee, {
                    get: () => c.value[ee],
                    enumerable: !0
                });
                q.provide(La, Oe), q.provide(Na, Vt(J)), q.provide(ia, c);
                const K = q.unmount;
                Ne.add(q), q.unmount = function() {
                    Ne.delete(q), Ne.size < 1 && (u = gt, E && E(), E = null, c.value = gt, Le = !1, $ = !1), K()
                }
            }
        };

    function Te(q) {
        return q.reduce((J, K) => J.then(() => O(K)), Promise.resolve())
    }
    return Oe
}

function Vd(e) {
    return Ke(Na)
}
const Db = /(:\w+)\([^)]+\)/g,
    jb = /(:\w+)[?+*]/g,
    Hb = /:\w+/g,
    Bb = (e, t) => t.path.replace(Db, "$1").replace(jb, "$1").replace(Hb, r => e.params[r.slice(1)]?.toString() || ""),
    nE = (e, t) => {
        const r = e.route.matched.find(o => o.components?.default === e.Component.type),
            n = t ?? r?.meta.key ?? (r && Bb(e.route, r));
        return typeof n == "function" ? n(e.route) : n
    },
    oE = (e, t) => ({
        default: () => e ? Mt(yp, e === !0 ? {} : e, t) : t
    });

function Wd(e) {
    return Array.isArray(e) ? e : [e]
}
const qb = "modulepreload",
    Ub = function(e, t) {
        return new URL(e, t).href
    },
    Qc = {},
    we = function(t, r, n) {
        let o = Promise.resolve();
        if (r && r.length > 0) {
            let u = function(l) {
                return Promise.all(l.map(f => Promise.resolve(f).then(d => ({
                    status: "fulfilled",
                    value: d
                }), d => ({
                    status: "rejected",
                    reason: d
                }))))
            };
            const s = document.getElementsByTagName("link"),
                a = document.querySelector("meta[property=csp-nonce]"),
                c = a?.nonce || a?.getAttribute("nonce");
            o = u(r.map(l => {
                if (l = Ub(l, n), l in Qc) return;
                Qc[l] = !0;
                const f = l.endsWith(".css"),
                    d = f ? '[rel="stylesheet"]' : "";
                if (n)
                    for (let m = s.length - 1; m >= 0; m--) {
                        const b = s[m];
                        if (b.href === l && (!f || b.rel === "stylesheet")) return
                    } else if (document.querySelector(`link[href="${l}"]${d}`)) return;
                const p = document.createElement("link");
                if (p.rel = f ? "stylesheet" : qb, f || (p.as = "script"), p.crossOrigin = "", p.href = l, c && p.setAttribute("nonce", c), document.head.appendChild(p), f) return new Promise((m, b) => {
                    p.addEventListener("load", m), p.addEventListener("error", () => b(new Error(`Unable to preload CSS for ${l}`)))
                })
            }))
        }

        function i(s) {
            const a = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (a.payload = s, window.dispatchEvent(a), !a.defaultPrevented) throw s
        }
        return o.then(s => {
            for (const a of s || []) a.status === "rejected" && i(a.reason);
            return t().catch(i)
        })
    },
    Fb = {
        pageTransition: {
            name: "rotate",
            mode: "out-in"
        }
    },
    Ii = [{
        name: "404",
        path: "/404",
        component: () => we(() => import("./CikkBHJe.js"), __vite__mapDeps([0, 1]), import.meta.url)
    }, {
        name: "index",
        path: "/",
        component: () => we(() => import("./eegS00Nj.js"), __vite__mapDeps([2, 3, 4, 5, 6, 1, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]), import.meta.url)
    }, {
        name: "contact",
        path: "/contact",
        component: () => we(() => import("./DdBf6raR.js"), __vite__mapDeps([34, 3, 4, 35, 36, 1, 37]), import.meta.url)
    }, {
        name: "handle",
        path: "/:handle()",
        component: () => we(() => import("./CvQjEz_V.js"), __vite__mapDeps([38, 3, 4, 5, 6, 1, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 39]), import.meta.url)
    }, {
        name: "erd-paris",
        path: "/erd-paris",
        component: () => we(() => import("./DfHI1kKm.js"), __vite__mapDeps([40, 3, 4, 13, 14, 15, 8, 16, 7, 1, 9, 41, 19, 20, 42]), import.meta.url)
    }, {
        name: "erd-seoul",
        path: "/erd-seoul",
        component: () => we(() => import("./CwKAg9-l.js"), __vite__mapDeps([43, 3, 4, 13, 14, 15, 8, 16, 7, 1, 9, 41, 19, 20, 44]), import.meta.url)
    }, {
        name: "stockists",
        path: "/stockists",
        component: () => we(() => import("./CYM67Lk1.js"), __vite__mapDeps([45, 3, 4, 13, 14, 15, 8, 16]), import.meta.url)
    }, {
        name: "blog",
        path: "/blog",
        component: () => we(() => import("./CNkdV2my.js"), __vite__mapDeps([46, 11, 6, 1, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 32]), import.meta.url)
    }, {
        name: "archive",
        path: "/archive",
        component: () => we(() => import("./B_LaAWBr.js"), __vite__mapDeps([47, 3, 4, 7, 8, 1, 9, 48, 49, 15, 16, 50]), import.meta.url)
    }, {
        name: "blog-handle",
        path: "/blog/:handle()",
        component: () => we(() => import("./EO3Mr-E1.js"), __vite__mapDeps([51, 11, 6, 1, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 5, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 52]), import.meta.url)
    }, {
        name: "info-handle",
        path: "/info/:handle()",
        component: () => we(() => import("./C_nQwz3_.js"), __vite__mapDeps([53, 3, 4, 12, 13, 14, 15, 8, 16, 1, 17, 32, 54]), import.meta.url)
    }, {
        name: "search-term",
        path: "/search/:term()",
        component: () => we(() => import("./CdjznwS2.js"), __vite__mapDeps([55, 56, 23, 1, 7, 8, 9, 24, 25, 26, 16, 15, 14, 27, 57, 29, 58]), import.meta.url)
    }, {
        name: "customers-login",
        path: "/customers/login",
        component: () => we(() => import("./DopoCrHr.js"), __vite__mapDeps([59, 14, 35, 36, 26, 16, 60, 61, 1, 62]), import.meta.url)
    }, {
        name: "archive-handle",
        path: "/archive/:handle()",
        meta: Fb || {},
        component: () => we(() => import("./BU8Ok2h3.js"), __vite__mapDeps([63, 6, 1, 7, 8, 9, 10, 14, 64]), import.meta.url)
    }, {
        name: "collections",
        path: "/collections",
        component: () => we(() => import("./Rf3Hp45L.js"), __vite__mapDeps([65, 3, 4, 11, 6, 1, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 66]), import.meta.url)
    }, {
        name: "customers-account",
        path: "/customers/account",
        component: () => we(() => import("./Dm-7s_y1.js"), __vite__mapDeps([67, 35, 68, 1, 69, 36, 26, 16, 60, 61, 24, 7, 8, 9, 28, 70, 48, 49, 71, 15, 72]), import.meta.url)
    }, {
        name: "products-handle",
        path: "/products/:handle()",
        component: () => we(() => import("./Ctx2EKHC.js"), __vite__mapDeps([73, 74, 4, 14, 1, 75, 21, 22, 26, 16, 8, 7, 9, 15, 19, 20, 35, 24, 76, 61, 60, 23, 25, 27, 29, 30, 48, 49, 70, 71, 77]), import.meta.url)
    }, {
        name: "customers-activate",
        path: "/customers/activate",
        component: () => we(() => import("./YpPlOu9X.js"), __vite__mapDeps([78, 36, 14, 25, 26, 16, 1, 79]), import.meta.url)
    }, {
        name: "customers-register",
        path: "/customers/register",
        component: () => we(() => import("./Cflp0U9x.js"), __vite__mapDeps([80, 35, 68, 1, 69, 14, 36, 26, 16, 60, 61, 81]), import.meta.url)
    }, {
        name: "anti-public-library",
        path: "/anti-public-library",
        component: () => we(() => import("./Bh54IJM0.js"), __vite__mapDeps([82, 3, 4, 13, 14, 15, 8, 16, 7, 1, 9, 41, 19, 20, 83]), import.meta.url)
    }, {
        name: "collections-handle",
        path: "/collections/:handle()",
        component: () => we(() => import("./Cq8myGfg.js"), __vite__mapDeps([84, 74, 4, 14, 1, 75, 56, 23, 7, 8, 9, 24, 25, 26, 16, 15, 27, 57, 48, 49, 30, 85]), import.meta.url)
    }, {
        name: "customers-reset-password",
        path: "/customers/reset-password",
        component: () => we(() => import("./D-cqbnyr.js"), __vite__mapDeps([86, 14, 35, 36, 26, 16, 60, 61, 1, 87]), import.meta.url)
    }, {
        name: "customers-forgot-password",
        path: "/customers/forgot-password",
        component: () => we(() => import("./DTcZhUel.js"), __vite__mapDeps([88, 35, 14, 36, 61, 26, 16, 1, 89]), import.meta.url)
    }],
    $b = (e, t) => ({
        default: () => e ? Mt(Fs, e === !0 ? {} : e, t) : t.default?.()
    }),
    Vb = /(:\w+)\([^)]+\)/g,
    Wb = /(:\w+)[?+*]/g,
    zb = /:\w+/g;

function Zc(e) {
    const t = e?.meta.key ?? e.path.replace(Vb, "$1").replace(Wb, "$1").replace(zb, r => e.params[r.slice(1)]?.toString() || "");
    return typeof t == "function" ? t(e) : t
}

function Gb(e, t) {
    return e === t || t === gt ? !1 : Zc(e) !== Zc(t) ? !0 : !e.matched.every((n, o) => n.components && n.components.default === t.matched[o]?.components?.default)
}

function Kb(e, t = !1) {
    if (e) {
        if (e.nodeName === "#comment" && e.nodeValue === "[") return zd(e, [], t);
        if (t) {
            const r = e.cloneNode(!0);
            return r.querySelectorAll("[data-island-slot]").forEach(n => {
                n.innerHTML = ""
            }), [r.outerHTML]
        }
        return [e.outerHTML]
    }
}

function zd(e, t = [], r = !1) {
    if (e && e.nodeName) {
        if (Yb(e)) return t;
        if (!Xb(e)) {
            const n = e.cloneNode(!0);
            r && n.querySelectorAll?.("[data-island-slot]").forEach(o => {
                o.innerHTML = ""
            }), t.push(n.outerHTML)
        }
        zd(e.nextSibling, t, r)
    }
    return t
}

function iE(e, t) {
    const r = e ? Kb(e) : [t];
    return r ? im(r.join(""), r.length) : Mt("div")
}

function Xb(e) {
    return e.nodeName === "#comment" && e.nodeValue === "["
}

function Yb(e) {
    return e.nodeName === "#comment" && e.nodeValue === "]"
}

function el(e) {
    return Array.isArray(e) ? e : [e]
}

function Jb(e) {
    const t = [];
    for (const r of e) r && t.push({
        ...r,
        onAfterLeave: r.onAfterLeave ? el(r.onAfterLeave) : void 0,
        onBeforeLeave: r.onBeforeLeave ? el(r.onBeforeLeave) : void 0
    });
    return jo(...t)
}
const Qb = {
    scrollBehavior(e, t, r) {
        const n = $e(),
            o = Et().options?.scrollBehaviorType ?? "auto";
        return e.path.replace(/\/$/, "") === t.path.replace(/\/$/, "") ? t.hash && !e.hash ? {
            left: 0,
            top: 0
        } : e.hash ? {
            el: e.hash,
            top: Gd(e.hash),
            behavior: o
        } : !1 : (typeof e.meta.scrollToTop == "function" ? e.meta.scrollToTop(e, t) : e.meta.scrollToTop) === !1 ? !1 : t === gt ? tl(e, t, r, o) : new Promise(s => {
            const a = () => {
                requestAnimationFrame(() => s(tl(e, t, r, o)))
            };
            n.hooks.hookOnce("page:loading:end", () => {
                const c = n["~transitionPromise"];
                c ? c.then(a) : a()
            })
        })
    }
};

function Gd(e) {
    try {
        const t = document.querySelector(e);
        if (t) return (Number.parseFloat(getComputedStyle(t).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0)
    } catch {}
    return 0
}

function tl(e, t, r, n) {
    return r || (e.hash ? {
        el: e.hash,
        top: Gd(e.hash),
        behavior: Gb(e, t) ? n : "instant"
    } : {
        left: 0,
        top: 0
    })
}
const Zb = {
        hashMode: !1,
        scrollBehaviorType: "auto"
    },
    Jt = {
        ...Zb,
        ...Qb
    },
    e_ = async (e, t) => {
        let r, n;
        if (!e.meta?.validate) return;
        const o = ([r, n] = En(() => Promise.resolve(e.meta.validate(e))), r = await r, n(), r);
        if (o === !0) return;
        const i = wr({
            fatal: !0,
            status: o && (o.status || o.statusCode) || 404,
            statusText: o && (o.statusText || o.statusMessage) || `Page Not Found: ${e.fullPath}`,
            data: {
                path: e.fullPath
            }
        });
        return typeof window < "u" && window.history.pushState({}, "", t.fullPath), i
    }, t_ = e => {
        const t = xd({
            path: e.path
        });
        if (t.redirect) {
            const r = t.redirect.includes("#") ? t.redirect : t.redirect + e.hash;
            return tn(r, {
                acceptRelative: !0
            }) ? (window.location.href = r, !1) : r
        }
    }, r_ = [e_, t_], sa = {};

function n_(e, t, r) {
    const {
        pathname: n,
        search: o,
        hash: i
    } = t, s = e.indexOf("#");
    if (s > -1) {
        const u = i.includes(e.slice(s)) ? e.slice(s).length : 1;
        let l = i.slice(u);
        return l[0] !== "/" && (l = "/" + l), Ec(l, "")
    }
    const a = Ec(n, e),
        c = !r || fd(a, r) ? a : r;
    return c + (c.includes("?") ? "" : o) + i
}
const o_ = nt({
        name: "nuxt:router",
        enforce: "pre",
        async setup(e) {
            let t, r, n = jn().app.baseURL;
            const o = Jt.history?.(n) ?? hb(n),
                i = Jt.routes ? ([t, r] = En(() => Jt.routes(Ii)), t = await t, r(), t ?? Ii) : Ii;
            let s;
            const a = Nb({
                ...Jt,
                scrollBehavior: (w, v, h) => {
                    if (v === gt) {
                        s = h;
                        return
                    }
                    if (Jt.scrollBehavior) {
                        if (a.options.scrollBehavior = Jt.scrollBehavior, "scrollRestoration" in window.history) {
                            const g = a.beforeEach(() => {
                                g(), window.history.scrollRestoration = "manual"
                            })
                        }
                        return Jt.scrollBehavior(w, gt, s || h)
                    }
                },
                history: o,
                routes: i
            });
            "scrollRestoration" in window.history && (window.history.scrollRestoration = "auto"), e.vueApp.use(a);
            const c = Wr(a.currentRoute.value);
            a.afterEach((w, v) => {
                c.value = v
            }), Object.defineProperty(e.vueApp.config.globalProperties, "previousRoute", {
                get: () => c.value
            });
            const u = n_(n, window.location, e.payload.path),
                l = Wr(a.currentRoute.value),
                f = () => {
                    l.value = a.currentRoute.value
                };
            a.afterEach((w, v) => {
                const h = w.matched.at(-1)?.components?.default,
                    g = v.matched.at(-1)?.components?.default;
                if (h === g) {
                    f();
                    return
                }
                w.matched.length < v.matched.length && w.matched.every((y, x) => y.components?.default === v.matched[x]?.components?.default) && f()
            });
            const d = {
                sync: f
            };
            for (const w in l.value) Object.defineProperty(d, w, {
                get: () => l.value[w],
                enumerable: !0
            });
            e._route = Vt(d), e._middleware ||= {
                global: [],
                named: {}
            };
            const p = si();
            a.afterEach(async (w, v, h) => {
                delete e._processingMiddleware, !e.isHydrating && p.value && await e.runWithContext(yv), h && await e.callHook("page:loading:end")
            });
            try {
                [t, r] = En(() => a.isReady()), await t, r()
            } catch (w) {
                [t, r] = En(() => e.runWithContext(() => hr(w))), await t, r()
            }
            const m = u !== a.currentRoute.value.fullPath ? a.resolve(u) : a.currentRoute.value,
                b = e.isHydrating && e.payload.prerenderedAt && e.payload.path && u !== e.payload.path && fd(a.currentRoute.value.path, e.payload.path);
            f();
            const P = e.payload.state._layout;
            return a.beforeEach(async (w, v) => {
                await e.callHook("page:loading:start"), w.meta = Kt(w.meta), e.isHydrating && P && !It(w.meta.layout) && (w.meta.layout = P), e._processingMiddleware = !0;
                {
                    const h = new Set([...r_, ...e._middleware.global]);
                    for (const y of w.matched) {
                        const x = y.meta.middleware;
                        if (x)
                            for (const T of Wd(x)) h.add(T)
                    }
                    const g = xd({
                        path: w.path
                    });
                    if (g.appMiddleware)
                        for (const y in g.appMiddleware) g.appMiddleware[y] ? h.add(y) : h.delete(y);
                    for (const y of h) {
                        const x = typeof y == "string" ? e._middleware.named[y] || await sa[y]?.().then(T => T.default || T) : y;
                        if (!x) throw new Error(`Unknown route middleware: '${y}'.`);
                        try {
                            const T = await e.runWithContext(() => x(w, v));
                            if (!e.payload.serverRendered && e.isHydrating && (T === !1 || T instanceof Error)) {
                                const L = T || wr({
                                    status: 404,
                                    statusText: `Page Not Found: ${u}`
                                });
                                return await e.runWithContext(() => hr(L)), !1
                            }
                            if (T === !0) continue;
                            if (T === !1) return T;
                            if (T) return wd(T) && T.fatal && await e.runWithContext(() => hr(T)), T
                        } catch (T) {
                            const L = wr(T);
                            return L.fatal && await e.runWithContext(() => hr(L)), L
                        }
                    }
                }
            }), a.onError(async () => {
                delete e._processingMiddleware, await e.callHook("page:loading:end")
            }), a.afterEach(w => {
                if (w.matched.length === 0 && !p.value) return e.runWithContext(() => hr(wr({
                    status: 404,
                    fatal: !1,
                    statusText: `Page not found: ${w.fullPath}`,
                    data: {
                        path: w.fullPath
                    }
                })))
            }), e.hooks.hookOnce("app:created", async () => {
                try {
                    if ("name" in m && (m.name = void 0), b) {
                        const w = a.resolve(e.payload.path);
                        "name" in w && (w.name = void 0), await a.replace({
                            ...w,
                            force: !0
                        }), e.hooks.hookOnce("app:suspense:resolve", async () => {
                            await a.replace({
                                ...m,
                                force: !0
                            })
                        })
                    } else await a.replace({
                        ...m,
                        force: !0
                    });
                    a.options.scrollBehavior = Jt.scrollBehavior
                } catch (w) {
                    await e.runWithContext(() => hr(w))
                }
            }), {
                provide: {
                    router: a
                }
            }
        }
    }),
    rl = globalThis.requestIdleCallback || (e => {
        const t = Date.now(),
            r = {
                didTimeout: !1,
                timeRemaining: () => Math.max(0, 50 - (Date.now() - t))
            };
        return setTimeout(() => {
            e(r)
        }, 1)
    }),
    sE = globalThis.cancelIdleCallback || (e => {
        clearTimeout(e)
    }),
    Da = e => {
        const t = $e();
        t.isHydrating ? t.hooks.hookOnce("app:suspense:resolve", () => {
            rl(() => e())
        }) : rl(() => e())
    },
    i_ = nt({
        name: "nuxt:payload",
        setup(e) {
            const t = new Set;
            Et().beforeResolve(async (r, n) => {
                if (r.path === n.path) return;
                const o = await Nc(r.path);
                if (o) {
                    for (const i of t) delete e.static.data[i];
                    for (const i in o.data) i in e.static.data || t.add(i), e.static.data[i] = o.data[i]
                }
            }), Da(() => {
                e.hooks.hook("link:prefetch", async r => {
                    const {
                        hostname: n
                    } = new URL(r, window.location.href);
                    n === window.location.hostname && await Nc().catch(() => {
                        console.warn("[nuxt] Error preloading payload for", r)
                    })
                }), navigator.connection?.effectiveType !== "slow-2g" && setTimeout(Pd, 1e3)
            })
        }
    }),
    s_ = nt(() => {
        const e = Et();
        Da(() => {
            e.beforeResolve(async () => {
                await new Promise(t => {
                    setTimeout(t, 100), requestAnimationFrame(() => {
                        setTimeout(t, 0)
                    })
                })
            })
        })
    }),
    a_ = nt(e => {
        let t;
        async function r() {
            let n;
            try {
                n = await Pd()
            } catch (o) {
                const i = o;
                if (!("status" in i && (i.status === 404 || i.status === 403))) throw i
            }
            t && clearTimeout(t), t = setTimeout(r, Oc);
            try {
                const o = await $fetch(Pa("builds/latest.json") + `?${Date.now()}`);
                o.id !== n?.id && (e.hooks.callHook("app:manifest:update", o), t && clearTimeout(t))
            } catch {}
        }
        Da(() => {
            t = setTimeout(r, Oc)
        })
    });

function c_(e = {}) {
    const t = e.path || window.location.pathname,
        r = new URL(t, window.location.href);
    if (r.host !== window.location.host) throw new Error(`Cannot navigate to a URL with a different host: '${t}'.`);
    if (r.protocol && Vs(r.protocol)) throw new Error(`Cannot navigate to a URL with '${r.protocol}' protocol.`);
    let n = {};
    try {
        n = Mo(sessionStorage.getItem("nuxt:reload") || "{}")
    } catch {}
    if (e.force || n?.path !== t || n?.expires < Date.now()) {
        try {
            sessionStorage.setItem("nuxt:reload", JSON.stringify({
                path: t,
                expires: Date.now() + (e.ttl ?? 1e4)
            }))
        } catch {}
        if (e.persistState) try {
            sessionStorage.setItem("nuxt:reload:state", JSON.stringify({
                state: $e().payload.state
            }))
        } catch {}
        window.location.pathname !== t ? window.location.href = t : window.location.reload()
    }
}
const l_ = nt({
        name: "nuxt:chunk-reload",
        setup(e) {
            const t = Et(),
                r = jn(),
                n = new Set;
            t.beforeEach(() => {
                n.clear()
            }), e.hook("app:chunkError", ({
                error: i
            }) => {
                n.add(i)
            });

            function o(i) {
                const s = ld(r.app.baseURL, i.fullPath);
                c_({
                    path: s,
                    persistState: !0
                })
            }
            e.hook("app:manifest:update", () => {
                t.beforeResolve(o)
            }), t.onError((i, s) => {
                n.has(i) && o(s)
            })
        }
    }),
    u_ = nt({
        name: "nuxt:global-components"
    }),
    er = {
        default: Is(() => we(() => import("./BPHIHxwJ.js"), __vite__mapDeps([90, 35, 36, 1, 3, 4, 13, 14, 15, 8, 16, 48, 49, 26, 60, 61, 76, 25, 7, 9, 24, 21, 22, 91]), import.meta.url).then(e => e.default || e))
    };

function f_(e) {
    if (e?.__asyncLoader && !e.__asyncResolved) return e.__asyncLoader()
}
async function d_(e, t = Et()) {
    const {
        path: r,
        matched: n
    } = t.resolve(e);
    if (!n.length || (t._routePreloaded ||= new Set, t._routePreloaded.has(r))) return;
    const o = t._preloadPromises ||= [];
    if (o.length > 4) return Promise.all(o).then(() => d_(e, t));
    t._routePreloaded.add(r);
    for (const i of n) {
        const s = i.components?.default;
        if (typeof s != "function") continue;
        const a = Promise.resolve(s()).catch(() => {}).finally(() => o.splice(o.indexOf(a), 1));
        o.push(a)
    }
    await Promise.all(o)
}
const h_ = nt({
    name: "nuxt:prefetch",
    setup(e) {
        const t = Et();
        e.hooks.hook("app:mounted", () => {
            t.beforeEach(async r => {
                const n = r?.meta?.layout;
                n && typeof er[n] == "function" && await er[n]()
            })
        }), e.hooks.hook("link:prefetch", r => {
            if (tn(r)) return;
            const n = t.resolve(r);
            if (!n) return;
            const o = n.meta.layout;
            let i = Wd(n.meta.middleware);
            i = i.filter(s => typeof s == "string");
            for (const s of i) typeof sa[s] == "function" && sa[s]();
            typeof o == "string" && o in er && f_(er[o])
        })
    }
});
var p_;

function m_() {
    return p_
}

function g_(e) {
    return typeof e == "function" ? e() : ge(e)
}

function aa(e) {
    if (e instanceof Promise || e instanceof Date || e instanceof RegExp) return e;
    const t = g_(e);
    if (!e || !t) return t;
    if (Array.isArray(t)) return t.map(r => aa(r));
    if (typeof t == "object") {
        const r = {};
        for (const n in t)
            if (Object.prototype.hasOwnProperty.call(t, n)) {
                if (n === "titleTemplate" || n[0] === "o" && n[1] === "n") {
                    r[n] = ge(t[n]);
                    continue
                }
                r[n] = aa(t[n])
            } return r
    }
    return t
}
var v_ = "usehead",
    nl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
    ol = "__unhead_injection_handler__";

function y_() {
    return ol in nl ? nl[ol]() : Ke(v_) || m_()
}

function b_(e, t = {}) {
    const r = t.head || y_();
    if (r) return r.ssr ? r.push(e, t) : __(r, e, t)
}

function __(e, t, r = {}) {
    const n = Ce(!1),
        o = Ce({});
    lf(() => {
        o.value = n.value ? {} : aa(t)
    });
    const i = e.push(o.value, r);
    return rr(o, a => {
        i.patch(a)
    }), Gt() && (Zr(() => {
        i.dispose()
    }), Qo(() => {
        n.value = !0
    }), Jo(() => {
        n.value = !1
    })), i
}
var w_ = {
        install(e) {
            e.mixin({
                created() {
                    if (typeof this.$options?.jsonld != "function") return;
                    const t = tt(() => this.$options.jsonld.call(this));
                    b_(() => ({
                        script: [{
                            type: "application/ld+json",
                            innerHTML: t.value ? JSON.stringify(t.value, null, "") : void 0
                        }]
                    }))
                }
            })
        }
    },
    E_ = nt(e => {
        e.vueApp.use(w_)
    });
const S_ = new RegExp(/Googlebot\/|Googlebot-Mobile|Googlebot-Image|Googlebot-News|Googlebot-Video|AdsBot-Google([^-]|$)|AdsBot-Google-Mobile|Feedfetcher-Google|Mediapartners-Google|Mediapartners \(Googlebot\)|APIs-Google|Google-InspectionTool|Storebot-Google|GoogleOther|bingbot|Slurp|[wW]get|LinkedInBot|Python-urllib|python-requests|aiohttp|httpx|libwww-perl|httpunit|Nutch|Go-http-client|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|BIGLOTRON|Teoma|convera|seekbot|Gigabot|Gigablast|exabot|ia_archiver|GingerCrawler|webmon |HTTrack|grub\.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|findlink|msrbot|panscient|yacybot|AISearchBot|ips-agent|tagoobot|MJ12bot|woriobot|yanga|buzzbot|mlbot|yandex\.com\/bots|purebot|Linguee Bot|CyberPatrol|voilabot|Baiduspider|citeseerxbot|spbot|twengabot|postrank|Turnitin|scribdbot|page2rss|sitebot|linkdex|Adidxbot|ezooms|dotbot|Mail\.RU_Bot|discobot|heritrix|findthatfile|europarchive\.org|NerdByNature\.Bot|(sistrix|SISTRIX) [cC]rawler|Ahrefs(Bot|SiteAudit)|fuelbot|CrunchBot|IndeedBot|mappydata|woobot|ZoominfoBot|PrivacyAwareBot|Multiviewbot|SWIMGBot|Grobbot|eright|Apercite|semanticbot|Aboundex|domaincrawler|wbsearchbot|summify|CCBot|edisterbot|SeznamBot|ec2linkfinder|gslfbot|aiHitBot|intelium_bot|facebookexternalhit|Yeti|RetrevoPageAnalyzer|lb-spider|Sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net\.com\.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|it2media-domain-crawler|ip-web-crawler\.com|siteexplorer\.info|elisabot|proximic|changedetection|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|CC Metadata Scaper|g00g1e\.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Twitterbot|cXensebot|smtbot|bnf\.fr_bot|A6-Indexer|ADmantX|Facebot|OrangeBot\/|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive\.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|S[eE][mM]rushBot|yoozBot|lipperhey|Y!J|Domain Re-Animator Bot|AddThis|Screaming Frog SEO Spider|MetaURI|Scrapy|Livelap[bB]ot|OpenHoseBot|CapsuleChecker|collection@infegy\.com|IstellaBot|DeuSu\/|betaBot|Cliqzbot\/|MojeekBot\/|netEstate NE Crawler|SafeSearch microdata crawler|Gluten Free Crawler\/|Sonic|Sysomos|Trove|deadlinkchecker|Slack-ImgProxy|Embedly|RankActiveLinkBot|iskanie|SafeDNSBot|SkypeUriPreview|Veoozbot|Slackbot|redditbot|datagnionbot|Google-Adwords-Instant|adbeat_bot|WhatsApp|contxbot|pinterest\.com\/bot|electricmonk|GarlikCrawler|BingPreview\/|vebidoobot|FemtosearchBot|Yahoo Link Preview|MetaJobBot|DomainStatsBot|mindUpBot|Daum\/|Jugendschutzprogramm-Crawler|Xenu Link Sleuth|Pcore-HTTP|moatbot|KosmioBot|[pP]ingdom|AppInsights|PhantomJS|Gowikibot|PiplBot|Discordbot|TelegramBot|Jetslide|newsharecounts|James BOT|Bark[rR]owler|TinEye|SocialRankIOBot|trendictionbot|Ocarinabot|epicbot|Primalbot|DuckDuckGo-Favicons-Bot|GnowitNewsbot|Leikibot|LinkArchiver|YaK\/|PaperLiBot|Digg Deeper|dcrawl|Snacktory|AndersPinkBot|Fyrebot|EveryoneSocialBot|Mediatoolkitbot|Luminator-robots|ExtLinksBot|SurveyBot|NING\/|okhttp|Nuzzel|omgili|PocketParser|YisouSpider|um-LN|ToutiaoSpider|MuckRack|Jamie's Spider|AHC\/|NetcraftSurveyAgent|Laserlikebot|^Apache-HttpClient|AppEngine-Google|Jetty|Upflow|Thinklab|Traackr\.com|Twurly|Mastodon|http_get|DnyzBot|botify|007ac9 Crawler|BehloolBot|BrandVerity|check_http|BDCbot|ZumBot|EZID|ICC-Crawler|ArchiveBot|^LCC |filterdb\.iss\.net\/crawler|BLP_bbot|BomboraBot|Buck\/|Companybook-Crawler|Genieo|magpie-crawler|MeltwaterNews|Moreover|newspaper\/|ScoutJet|(^| )sentry\/|StorygizeBot|UptimeRobot|OutclicksBot|seoscanners|Hatena|Google Web Preview|MauiBot|AlphaBot|SBL-BOT|IAS crawler|adscanner|Netvibes|acapbot|Baidu-YunGuanCe|bitlybot|blogmuraBot|Bot\.AraTurka\.com|bot-pge\.chlooe\.com|BoxcarBot|BTWebClient|ContextAd Bot|Digincore bot|Disqus|Feedly|Fetch\/|Fever|Flamingo_SearchEngine|FlipboardProxy|g2reader-bot|G2 Web Services|imrbot|K7MLWCBot|Kemvibot|Landau-Media-Spider|linkapediabot|vkShare|Siteimprove\.com|BLEXBot\/|DareBoost|ZuperlistBot\/|Miniflux\/|Feedspot|Diffbot\/|SEOkicks|tracemyfile|Nimbostratus-Bot|zgrab|PR-CY\.RU|AdsTxtCrawler|Datafeedwatch|Zabbix|TangibleeBot|google-xrawler|axios|Amazon CloudFront|Pulsepoint|CloudFlare-AlwaysOnline|Google-Structured-Data-Testing-Tool|WordupInfoSearch|WebDataStats|HttpUrlConnection|ZoomBot|VelenPublicWebCrawler|MoodleBot|jpg-newsbot|outbrain|W3C_Validator|Validator\.nu|W3C-checklink|W3C-mobileOK|W3C_I18n-Checker|FeedValidator|W3C_CSS_Validator|W3C_Unicorn|Google-PhysicalWeb|Blackboard|ICBot\/|BazQux|Twingly|Rivva|Experibot|awesomecrawler|Dataprovider\.com|GroupHigh\/|theoldreader\.com|AnyEvent|Uptimebot\.org|Nmap Scripting Engine|2ip\.ru|Clickagy|Caliperbot|MBCrawler|online-webceo-bot|B2B Bot|AddSearchBot|Google Favicon|HubSpot|Chrome-Lighthouse|HeadlessChrome|CheckMarkNetwork\/|www\.uptime\.com|Streamline3Bot\/|serpstatbot\/|MixnodeCache\/|^curl|SimpleScraper|RSSingBot|Jooblebot|fedoraplanet|Friendica|NextCloud|Tiny Tiny RSS|RegionStuttgartBot|Bytespider|Datanyze|Google-Site-Verification|TrendsmapResolver|tweetedtimes|NTENTbot|Gwene|SimplePie|SearchAtlas|Superfeedr|feedbot|UT-Dorkbot|Amazonbot|SerendeputyBot|Eyeotabot|officestorebot|Neticle Crawler|SurdotlyBot|LinkisBot|AwarioSmartBot|AwarioRssBot|RyteBot|FreeWebMonitoring SiteChecker|AspiegelBot|NAVER Blog Rssbot|zenback bot|SentiBot|Domains Project\/|Pandalytics|VKRobot|bidswitchbot|tigerbot|NIXStatsbot|Atom Feed Robot|[Cc]urebot|PagePeeker\/|Vigil\/|rssbot\/|startmebot\/|JobboerseBot|seewithkids|NINJA bot|Cutbot|BublupBot|BrandONbot|RidderBot|Taboolabot|Dubbotbot|FindITAnswersbot|infoobot|Refindbot|BlogTraffic\/\d\.\d+ Feed-Fetcher|SeobilityBot|Cincraw|Dragonbot|VoluumDSP-content-bot|FreshRSS|BitBot|^PHP-Curl-Class|Google-Certificates-Bridge|centurybot|Viber|e\.ventures Investment Crawler|evc-batch|PetalBot|virustotal|(^| )PTST\/|minicrawler|Cookiebot|trovitBot|seostar\.co|IonCrawl|Uptime-Kuma|Seekport|FreshpingBot|Feedbin|CriteoBot|Snap URL Preview Service|Better Uptime Bot|RuxitSynthetic|Google-Read-Aloud|Valve\/Steam|OdklBot\/|GPTBot|ChatGPT-User|YandexRenderResourcesBot\/|LightspeedSystemsCrawler|ev-crawler\/|BitSightBot\/|woorankreview\/|Google-Safety|AwarioBot|DataForSeoBot|Linespider|WellKnownBot|A Patent Crawler|StractBot|search\.marginalia\.nu|YouBot|Nicecrawler|Neevabot|BrightEdge Crawler|SiteCheckerBotCrawler|TombaPublicWebCrawler|CrawlyProjectCrawler|KomodiaBot|KStandBot|CISPA Webcrawler|MTRobot|hyscore\.io|AlexandriaOrgBot|2ip bot|Yellowbrandprotectionbot|SEOlizer|vuhuvBot|INETDEX-BOT|Synapse|t3versionsBot|deepnoc|Cocolyzebot|hypestat|ReverseEngineeringBot|sempi\.tech|Iframely|MetaInspector|node-fetch|lkxscan|python-opengraph|OpenGraphCheck|developers\.google\.com\/\+\/web\/snippet|SenutoBot|MaCoCu|NewsBlur|inoreader|NetSystemsResearch|PageThing|WordPress\/|PhxBot|ImagesiftBot|Expanse|InternetMeasurement|^BW\/|GeedoBot|Audisto Crawler|PerplexityBot\/|[cC]laude[bB]ot|Monsidobot|GroupMeBot|Vercelbot|vercel-screenshot/),
    R_ = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|FBAN|FBAV|fennec|hiptop|iemobile|ip(hone|od)|Instagram|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
    C_ = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
    T_ = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|FBAN|FBAV|fennec|hiptop|iemobile|ip(hone|od)|Instagram|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
    A_ = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;

function O_(e) {
    return R_.test(e) || C_.test(e.slice(0, 4))
}

function P_(e) {
    return T_.test(e) || A_.test(e.slice(0, 4))
}

function x_(e) {
    return /iPad|iPhone|iPod/.test(e)
}

function k_(e) {
    return /android/i.test(e)
}

function I_(e) {
    return /Windows/.test(e)
}

function M_(e) {
    return /Mac OS X/.test(e)
}
const L_ = [{
    name: "Samsung",
    regex: /SamsungBrowser/i
}, {
    name: "Edge",
    regex: /edg(?:[ea]|ios)?\//i
}, {
    name: "Firefox",
    regex: /firefox|iceweasel|fxios/i
}, {
    name: "Chrome",
    regex: /chrome|crios|crmo/i
}, {
    name: "Safari",
    regex: /safari|applewebkit/i
}];

function N_(e) {
    for (const t of L_)
        if (t.regex.test(e)) return t.name;
    return ""
}

function il(e, t = {}) {
    let r = !1,
        n = !1,
        o = !1,
        i = !1;
    if (e === "Amazon CloudFront") t["cloudfront-is-mobile-viewer"] === "true" && (r = !0, n = !0), t["cloudfront-is-tablet-viewer"] === "true" && (r = !1, n = !0), t["cloudfront-is-desktop-viewer"] === "true" && (r = !1, n = !1), t["cloudfront-is-ios-viewer"] === "true" && (o = !0), t["cloudfront-is-android-viewer"] === "true" && (i = !0);
    else if (t && t["cf-device-type"]) switch (t["cf-device-type"]) {
        case "mobile":
            r = !0, n = !0;
            break;
        case "tablet":
            r = !1, n = !0;
            break;
        case "desktop":
            r = !1, n = !1;
            break
    } else r = O_(e), n = P_(e), o = x_(e), i = k_(e);
    const s = I_(e),
        a = M_(e),
        c = N_(e),
        u = c === "Safari",
        l = c === "Firefox",
        f = c === "Edge",
        d = c === "Chrome",
        p = c === "Samsung",
        m = S_.test(e);
    return {
        userAgent: e,
        isMobile: r,
        isMobileOrTablet: n,
        isTablet: !r && n,
        isDesktop: !n,
        isIos: o,
        isAndroid: i,
        isWindows: s,
        isMacOS: a,
        isApple: a || o,
        isDesktopOrTablet: !r,
        isSafari: u,
        isFirefox: l,
        isEdge: f,
        isChrome: d,
        isSamsung: p,
        isCrawler: m
    }
}
const D_ = nt(() => {
    const e = jn(),
        t = e.public.device.defaultUserAgent;
    let r;
    {
        const n = navigator.userAgent || t;
        r = Kt(il(n)), e.public.device.refreshOnResize && window.addEventListener("resize", () => {
            setTimeout(() => {
                const o = il(navigator.userAgent || n);
                Object.entries(o).forEach(([i, s]) => {
                    r[i] = s
                })
            }, 50)
        })
    }
    return {
        provide: {
            device: r
        }
    }
});
var Bo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function Kd(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var mo = {
        exports: {}
    },
    j_ = mo.exports,
    sl;

function H_() {
    return sl || (sl = 1, (function(e, t) {
        (function(r, n) {
            e.exports = n()
        })(j_, (function() {
            function r(S, E) {
                (E == null || E > S.length) && (E = S.length);
                for (var M = 0, I = Array(E); M < E; M++) I[M] = S[M];
                return I
            }

            function n(S, E) {
                var M = typeof Symbol < "u" && S[Symbol.iterator] || S["@@iterator"];
                if (M) return (M = M.call(S)).next.bind(M);
                if (Array.isArray(S) || (M = i(S)) || E) {
                    M && (S = M);
                    var I = 0;
                    return function() {
                        return I >= S.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: S[I++]
                        }
                    }
                }
                throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
            }

            function o() {
                return o = Object.assign ? Object.assign.bind() : function(S) {
                    for (var E = 1; E < arguments.length; E++) {
                        var M = arguments[E];
                        for (var I in M)({}).hasOwnProperty.call(M, I) && (S[I] = M[I])
                    }
                    return S
                }, o.apply(null, arguments)
            }

            function i(S, E) {
                if (S) {
                    if (typeof S == "string") return r(S, E);
                    var M = {}.toString.call(S).slice(8, -1);
                    return M === "Object" && S.constructor && (M = S.constructor.name), M === "Map" || M === "Set" ? Array.from(S) : M === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(M) ? r(S, E) : void 0
                }
            }
            var s = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";

            function a(S) {
                var E = S.split("-"),
                    M = E[1],
                    I = E[2],
                    W = E[3];
                if (!M || !I || !W) throw new Error("Malformed asset _ref '" + S + `'. Expected an id like "` + s + '".');
                var $ = I.split("x"),
                    z = $[0],
                    Z = $[1],
                    te = +z,
                    ne = +Z,
                    ae = isFinite(te) && isFinite(ne);
                if (!ae) throw new Error("Malformed asset _ref '" + S + `'. Expected an id like "` + s + '".');
                return {
                    id: M,
                    width: te,
                    height: ne,
                    format: W
                }
            }
            var c = function(E) {
                    var M = E;
                    return M ? typeof M._ref == "string" : !1
                },
                u = function(E) {
                    var M = E;
                    return M ? typeof M._id == "string" : !1
                },
                l = function(E) {
                    var M = E;
                    return M && M.asset ? typeof M.asset.url == "string" : !1
                },
                f = function(E) {
                    if (typeof E == "object" && E !== null) {
                        var M = E;
                        return M._upload && (!M.asset || !M.asset._ref)
                    }
                    return !1
                };

            function d(S) {
                if (!S) return null;
                var E;
                if (typeof S == "string" && p(S)) E = {
                    asset: {
                        _ref: m(S)
                    }
                };
                else if (typeof S == "string") E = {
                    asset: {
                        _ref: S
                    }
                };
                else if (c(S)) E = {
                    asset: S
                };
                else if (u(S)) E = {
                    asset: {
                        _ref: S._id || ""
                    }
                };
                else if (l(S)) E = {
                    asset: {
                        _ref: m(S.asset.url)
                    }
                };
                else if (typeof S.asset == "object") E = o({}, S);
                else return null;
                var M = S;
                return M.crop && (E.crop = M.crop), M.hotspot && (E.hotspot = M.hotspot), b(E)
            }

            function p(S) {
                return /^https?:\/\//.test("" + S)
            }

            function m(S) {
                var E = S.split("/").slice(-1);
                return ("image-" + E[0]).replace(/\.([a-z]+)$/, "-$1")
            }

            function b(S) {
                if (S.crop && S.hotspot) return S;
                var E = o({}, S);
                return E.crop || (E.crop = {
                    left: 0,
                    top: 0,
                    bottom: 0,
                    right: 0
                }), E.hotspot || (E.hotspot = {
                    x: .5,
                    y: .5,
                    height: 1,
                    width: 1
                }), E
            }
            var P = [
                ["width", "w"],
                ["height", "h"],
                ["format", "fm"],
                ["download", "dl"],
                ["blur", "blur"],
                ["sharpen", "sharp"],
                ["invert", "invert"],
                ["orientation", "or"],
                ["minHeight", "min-h"],
                ["maxHeight", "max-h"],
                ["minWidth", "min-w"],
                ["maxWidth", "max-w"],
                ["quality", "q"],
                ["fit", "fit"],
                ["crop", "crop"],
                ["saturation", "sat"],
                ["auto", "auto"],
                ["dpr", "dpr"],
                ["pad", "pad"],
                ["frame", "frame"]
            ];

            function w(S) {
                var E = o({}, S || {}),
                    M = E.source;
                delete E.source;
                var I = d(M);
                if (!I) {
                    if (M && f(M)) return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8HwQACfsD/QNViZkAAAAASUVORK5CYII=";
                    throw new Error("Unable to resolve image URL from source (" + JSON.stringify(M) + ")")
                }
                var W = I.asset._ref || I.asset._id || "",
                    $ = a(W),
                    z = Math.round(I.crop.left * $.width),
                    Z = Math.round(I.crop.top * $.height),
                    te = {
                        left: z,
                        top: Z,
                        width: Math.round($.width - I.crop.right * $.width - z),
                        height: Math.round($.height - I.crop.bottom * $.height - Z)
                    },
                    ne = I.hotspot.height * $.height / 2,
                    ae = I.hotspot.width * $.width / 2,
                    Le = I.hotspot.x * $.width,
                    Ne = I.hotspot.y * $.height,
                    Oe = {
                        left: Le - ae,
                        top: Ne - ne,
                        right: Le + ae,
                        bottom: Ne + ne
                    };
                return E.rect || E.focalPoint || E.ignoreImageParams || E.crop || (E = o({}, E, h({
                    crop: te,
                    hotspot: Oe
                }, E))), v(o({}, E, {
                    asset: $
                }))
            }

            function v(S) {
                var E = (S.baseUrl || "https://cdn.sanity.io").replace(/\/+$/, ""),
                    M = S.vanityName ? "/" + S.vanityName : "",
                    I = S.asset.id + "-" + S.asset.width + "x" + S.asset.height + "." + S.asset.format + M,
                    W = E + "/images/" + S.projectId + "/" + S.dataset + "/" + I,
                    $ = [];
                if (S.rect) {
                    var z = S.rect,
                        Z = z.left,
                        te = z.top,
                        ne = z.width,
                        ae = z.height,
                        Le = Z !== 0 || te !== 0 || ae !== S.asset.height || ne !== S.asset.width;
                    Le && $.push("rect=" + Z + "," + te + "," + ne + "," + ae)
                }
                S.bg && $.push("bg=" + S.bg), S.focalPoint && ($.push("fp-x=" + S.focalPoint.x), $.push("fp-y=" + S.focalPoint.y));
                var Ne = [S.flipHorizontal && "h", S.flipVertical && "v"].filter(Boolean).join("");
                return Ne && $.push("flip=" + Ne), P.forEach(function(Oe) {
                    var Te = Oe[0],
                        q = Oe[1];
                    typeof S[Te] < "u" ? $.push(q + "=" + encodeURIComponent(S[Te])) : typeof S[q] < "u" && $.push(q + "=" + encodeURIComponent(S[q]))
                }), $.length === 0 ? W : W + "?" + $.join("&")
            }

            function h(S, E) {
                var M, I = E.width,
                    W = E.height;
                if (!(I && W)) return {
                    width: I,
                    height: W,
                    rect: S.crop
                };
                var $ = S.crop,
                    z = S.hotspot,
                    Z = I / W,
                    te = $.width / $.height;
                if (te > Z) {
                    var ne = Math.round($.height),
                        ae = Math.round(ne * Z),
                        Le = Math.max(0, Math.round($.top)),
                        Ne = Math.round((z.right - z.left) / 2 + z.left),
                        Oe = Math.max(0, Math.round(Ne - ae / 2));
                    Oe < $.left ? Oe = $.left : Oe + ae > $.left + $.width && (Oe = $.left + $.width - ae), M = {
                        left: Oe,
                        top: Le,
                        width: ae,
                        height: ne
                    }
                } else {
                    var Te = $.width,
                        q = Math.round(Te / Z),
                        J = Math.max(0, Math.round($.left)),
                        K = Math.round((z.bottom - z.top) / 2 + z.top),
                        ee = Math.max(0, Math.round(K - q / 2));
                    ee < $.top ? ee = $.top : ee + q > $.top + $.height && (ee = $.top + $.height - q), M = {
                        left: J,
                        top: ee,
                        width: Te,
                        height: q
                    }
                }
                return {
                    width: I,
                    height: W,
                    rect: M
                }
            }
            var g = ["clip", "crop", "fill", "fillmax", "max", "scale", "min"],
                y = ["top", "bottom", "left", "right", "center", "focalpoint", "entropy"],
                x = ["format"];

            function T(S) {
                return S && "config" in S ? typeof S.config == "function" : !1
            }

            function L(S) {
                return S && "clientConfig" in S ? typeof S.clientConfig == "object" : !1
            }

            function O(S) {
                for (var E = P, M = n(E), I; !(I = M()).done;) {
                    var W = I.value,
                        $ = W[0],
                        z = W[1];
                    if (S === $ || S === z) return $
                }
                return S
            }

            function j(S) {
                if (T(S)) {
                    var E = S.config(),
                        M = E.apiHost,
                        I = E.projectId,
                        W = E.dataset,
                        $ = M || "https://api.sanity.io";
                    return new F(null, {
                        baseUrl: $.replace(/^https:\/\/api\./, "https://cdn."),
                        projectId: I,
                        dataset: W
                    })
                }
                if (L(S)) {
                    var z = S.clientConfig,
                        Z = z.apiHost,
                        te = z.projectId,
                        ne = z.dataset,
                        ae = Z || "https://api.sanity.io";
                    return new F(null, {
                        baseUrl: ae.replace(/^https:\/\/api\./, "https://cdn."),
                        projectId: te,
                        dataset: ne
                    })
                }
                return new F(null, S || {})
            }
            var F = (function() {
                function S(M, I) {
                    this.options = void 0, this.options = M ? o({}, M.options || {}, I || {}) : o({}, I || {})
                }
                var E = S.prototype;
                return E.withOptions = function(I) {
                    var W = I.baseUrl || this.options.baseUrl,
                        $ = {
                            baseUrl: W
                        };
                    for (var z in I)
                        if (I.hasOwnProperty(z)) {
                            var Z = O(z);
                            $[Z] = I[z]
                        } return new S(this, o({
                        baseUrl: W
                    }, $))
                }, E.image = function(I) {
                    return this.withOptions({
                        source: I
                    })
                }, E.dataset = function(I) {
                    return this.withOptions({
                        dataset: I
                    })
                }, E.projectId = function(I) {
                    return this.withOptions({
                        projectId: I
                    })
                }, E.bg = function(I) {
                    return this.withOptions({
                        bg: I
                    })
                }, E.dpr = function(I) {
                    return this.withOptions(I && I !== 1 ? {
                        dpr: I
                    } : {})
                }, E.width = function(I) {
                    return this.withOptions({
                        width: I
                    })
                }, E.height = function(I) {
                    return this.withOptions({
                        height: I
                    })
                }, E.focalPoint = function(I, W) {
                    return this.withOptions({
                        focalPoint: {
                            x: I,
                            y: W
                        }
                    })
                }, E.maxWidth = function(I) {
                    return this.withOptions({
                        maxWidth: I
                    })
                }, E.minWidth = function(I) {
                    return this.withOptions({
                        minWidth: I
                    })
                }, E.maxHeight = function(I) {
                    return this.withOptions({
                        maxHeight: I
                    })
                }, E.minHeight = function(I) {
                    return this.withOptions({
                        minHeight: I
                    })
                }, E.size = function(I, W) {
                    return this.withOptions({
                        width: I,
                        height: W
                    })
                }, E.blur = function(I) {
                    return this.withOptions({
                        blur: I
                    })
                }, E.sharpen = function(I) {
                    return this.withOptions({
                        sharpen: I
                    })
                }, E.rect = function(I, W, $, z) {
                    return this.withOptions({
                        rect: {
                            left: I,
                            top: W,
                            width: $,
                            height: z
                        }
                    })
                }, E.format = function(I) {
                    return this.withOptions({
                        format: I
                    })
                }, E.invert = function(I) {
                    return this.withOptions({
                        invert: I
                    })
                }, E.orientation = function(I) {
                    return this.withOptions({
                        orientation: I
                    })
                }, E.quality = function(I) {
                    return this.withOptions({
                        quality: I
                    })
                }, E.forceDownload = function(I) {
                    return this.withOptions({
                        download: I
                    })
                }, E.flipHorizontal = function() {
                    return this.withOptions({
                        flipHorizontal: !0
                    })
                }, E.flipVertical = function() {
                    return this.withOptions({
                        flipVertical: !0
                    })
                }, E.ignoreImageParams = function() {
                    return this.withOptions({
                        ignoreImageParams: !0
                    })
                }, E.fit = function(I) {
                    if (g.indexOf(I) === -1) throw new Error('Invalid fit mode "' + I + '"');
                    return this.withOptions({
                        fit: I
                    })
                }, E.crop = function(I) {
                    if (y.indexOf(I) === -1) throw new Error('Invalid crop mode "' + I + '"');
                    return this.withOptions({
                        crop: I
                    })
                }, E.saturation = function(I) {
                    return this.withOptions({
                        saturation: I
                    })
                }, E.auto = function(I) {
                    if (x.indexOf(I) === -1) throw new Error('Invalid auto mode "' + I + '"');
                    return this.withOptions({
                        auto: I
                    })
                }, E.pad = function(I) {
                    return this.withOptions({
                        pad: I
                    })
                }, E.vanityName = function(I) {
                    return this.withOptions({
                        vanityName: I
                    })
                }, E.frame = function(I) {
                    if (I !== 1) throw new Error('Invalid frame value "' + I + '"');
                    return this.withOptions({
                        frame: I
                    })
                }, E.url = function() {
                    return w(this.options)
                }, E.toString = function() {
                    return this.url()
                }, S
            })();
            return j
        }))
    })(mo)), mo.exports
}
var B_ = H_();
const q_ = Kd(B_);
var Mi, al;

function Ve() {
    if (al) return Mi;
    al = 1;
    var e = Object.getOwnPropertySymbols,
        t = Object.prototype.hasOwnProperty,
        r = Object.prototype.propertyIsEnumerable;

    function n(i) {
        if (i == null) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(i)
    }

    function o() {
        try {
            if (!Object.assign) return !1;
            var i = new String("abc");
            if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5") return !1;
            for (var s = {}, a = 0; a < 10; a++) s["_" + String.fromCharCode(a)] = a;
            var c = Object.getOwnPropertyNames(s).map(function(l) {
                return s[l]
            });
            if (c.join("") !== "0123456789") return !1;
            var u = {};
            return "abcdefghijklmnopqrst".split("").forEach(function(l) {
                u[l] = l
            }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst"
        } catch {
            return !1
        }
    }
    return Mi = o() ? Object.assign : function(i, s) {
        for (var a, c = n(i), u, l = 1; l < arguments.length; l++) {
            a = Object(arguments[l]);
            for (var f in a) t.call(a, f) && (c[f] = a[f]);
            if (e) {
                u = e(a);
                for (var d = 0; d < u.length; d++) r.call(a, u[d]) && (c[u[d]] = a[u[d]])
            }
        }
        return c
    }, Mi
}
var Kn = {},
    Xn = {},
    lr = {},
    Yn = {},
    cl;

function Xd() {
    if (cl) return Yn;
    cl = 1, Object.defineProperty(Yn, "__esModule", {
        value: !0
    });

    function e(t) {
        return typeof t == "function"
    }
    return Yn.isFunction = e, Yn
}
var Jn = {},
    Qn = {},
    ll;

function ja() {
    if (ll) return Qn;
    ll = 1, Object.defineProperty(Qn, "__esModule", {
        value: !0
    });
    var e = !1;
    return Qn.config = {
        Promise: void 0,
        set useDeprecatedSynchronousErrorHandling(t) {
            if (t) {
                var r = new Error;
                console.warn(`DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at:
` + r.stack)
            } else e && console.log("RxJS: Back to a better error behavior. Thank you. <3");
            e = t
        },
        get useDeprecatedSynchronousErrorHandling() {
            return e
        }
    }, Qn
}
var Zn = {},
    ul;

function Yd() {
    if (ul) return Zn;
    ul = 1, Object.defineProperty(Zn, "__esModule", {
        value: !0
    });

    function e(t) {
        setTimeout(function() {
            throw t
        }, 0)
    }
    return Zn.hostReportError = e, Zn
}
var fl;

function Jd() {
    if (fl) return Jn;
    fl = 1, Object.defineProperty(Jn, "__esModule", {
        value: !0
    });
    var e = ja(),
        t = Yd();
    return Jn.empty = {
        closed: !0,
        next: function(r) {},
        error: function(r) {
            if (e.config.useDeprecatedSynchronousErrorHandling) throw r;
            t.hostReportError(r)
        },
        complete: function() {}
    }, Jn
}
var eo = {},
    to = {},
    dl;

function U_() {
    return dl || (dl = 1, Object.defineProperty(to, "__esModule", {
        value: !0
    }), to.isArray = (function() {
        return Array.isArray || (function(e) {
            return e && typeof e.length == "number"
        })
    })()), to
}
var ro = {},
    hl;

function F_() {
    if (hl) return ro;
    hl = 1, Object.defineProperty(ro, "__esModule", {
        value: !0
    });

    function e(t) {
        return t !== null && typeof t == "object"
    }
    return ro.isObject = e, ro
}
var no = {},
    pl;

function $_() {
    if (pl) return no;
    pl = 1, Object.defineProperty(no, "__esModule", {
        value: !0
    });
    var e = (function() {
        function t(r) {
            return Error.call(this), this.message = r ? r.length + ` errors occurred during unsubscription:
` + r.map(function(n, o) {
                return o + 1 + ") " + n.toString()
            }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = r, this
        }
        return t.prototype = Object.create(Error.prototype), t
    })();
    return no.UnsubscriptionError = e, no
}
var ml;

function V_() {
    if (ml) return eo;
    ml = 1, Object.defineProperty(eo, "__esModule", {
        value: !0
    });
    var e = U_(),
        t = F_(),
        r = Xd(),
        n = $_(),
        o = (function() {
            function s(a) {
                this.closed = !1, this._parentOrParents = null, this._subscriptions = null, a && (this._ctorUnsubscribe = !0, this._unsubscribe = a)
            }
            return s.prototype.unsubscribe = function() {
                var a;
                if (!this.closed) {
                    var c = this,
                        u = c._parentOrParents,
                        l = c._ctorUnsubscribe,
                        f = c._unsubscribe,
                        d = c._subscriptions;
                    if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, u instanceof s) u.remove(this);
                    else if (u !== null)
                        for (var p = 0; p < u.length; ++p) {
                            var m = u[p];
                            m.remove(this)
                        }
                    if (r.isFunction(f)) {
                        l && (this._unsubscribe = void 0);
                        try {
                            f.call(this)
                        } catch (w) {
                            a = w instanceof n.UnsubscriptionError ? i(w.errors) : [w]
                        }
                    }
                    if (e.isArray(d))
                        for (var p = -1, b = d.length; ++p < b;) {
                            var P = d[p];
                            if (t.isObject(P)) try {
                                P.unsubscribe()
                            } catch (v) {
                                a = a || [], v instanceof n.UnsubscriptionError ? a = a.concat(i(v.errors)) : a.push(v)
                            }
                        }
                    if (a) throw new n.UnsubscriptionError(a)
                }
            }, s.prototype.add = function(a) {
                var c = a;
                if (!a) return s.EMPTY;
                switch (typeof a) {
                    case "function":
                        c = new s(a);
                    case "object":
                        if (c === this || c.closed || typeof c.unsubscribe != "function") return c;
                        if (this.closed) return c.unsubscribe(), c;
                        if (!(c instanceof s)) {
                            var u = c;
                            c = new s, c._subscriptions = [u]
                        }
                        break;
                    default:
                        throw new Error("unrecognized teardown " + a + " added to Subscription.")
                }
                var l = c._parentOrParents;
                if (l === null) c._parentOrParents = this;
                else if (l instanceof s) {
                    if (l === this) return c;
                    c._parentOrParents = [l, this]
                } else if (l.indexOf(this) === -1) l.push(this);
                else return c;
                var f = this._subscriptions;
                return f === null ? this._subscriptions = [c] : f.push(c), c
            }, s.prototype.remove = function(a) {
                var c = this._subscriptions;
                if (c) {
                    var u = c.indexOf(a);
                    u !== -1 && c.splice(u, 1)
                }
            }, s.EMPTY = (function(a) {
                return a.closed = !0, a
            })(new s), s
        })();
    eo.Subscription = o;

    function i(s) {
        return s.reduce(function(a, c) {
            return a.concat(c instanceof n.UnsubscriptionError ? c.errors : c)
        }, [])
    }
    return eo
}
var Li = {},
    gl;

function Qd() {
    return gl || (gl = 1, (function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.rxSubscriber = (function() {
            return typeof Symbol == "function" ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random()
        })(), e.$$rxSubscriber = e.rxSubscriber
    })(Li)), Li
}
var vl;

function ci() {
    if (vl) return lr;
    vl = 1;
    var e = lr && lr.__extends || (function() {
        var u = function(l, f) {
            return u = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(d, p) {
                d.__proto__ = p
            } || function(d, p) {
                for (var m in p) p.hasOwnProperty(m) && (d[m] = p[m])
            }, u(l, f)
        };
        return function(l, f) {
            u(l, f);

            function d() {
                this.constructor = l
            }
            l.prototype = f === null ? Object.create(f) : (d.prototype = f.prototype, new d)
        }
    })();
    Object.defineProperty(lr, "__esModule", {
        value: !0
    });
    var t = Xd(),
        r = Jd(),
        n = V_(),
        o = Qd(),
        i = ja(),
        s = Yd(),
        a = (function(u) {
            e(l, u);

            function l(f, d, p) {
                var m = u.call(this) || this;
                switch (m.syncErrorValue = null, m.syncErrorThrown = !1, m.syncErrorThrowable = !1, m.isStopped = !1, arguments.length) {
                    case 0:
                        m.destination = r.empty;
                        break;
                    case 1:
                        if (!f) {
                            m.destination = r.empty;
                            break
                        }
                        if (typeof f == "object") {
                            f instanceof l ? (m.syncErrorThrowable = f.syncErrorThrowable, m.destination = f, f.add(m)) : (m.syncErrorThrowable = !0, m.destination = new c(m, f));
                            break
                        }
                    default:
                        m.syncErrorThrowable = !0, m.destination = new c(m, f, d, p);
                        break
                }
                return m
            }
            return l.prototype[o.rxSubscriber] = function() {
                return this
            }, l.create = function(f, d, p) {
                var m = new l(f, d, p);
                return m.syncErrorThrowable = !1, m
            }, l.prototype.next = function(f) {
                this.isStopped || this._next(f)
            }, l.prototype.error = function(f) {
                this.isStopped || (this.isStopped = !0, this._error(f))
            }, l.prototype.complete = function() {
                this.isStopped || (this.isStopped = !0, this._complete())
            }, l.prototype.unsubscribe = function() {
                this.closed || (this.isStopped = !0, u.prototype.unsubscribe.call(this))
            }, l.prototype._next = function(f) {
                this.destination.next(f)
            }, l.prototype._error = function(f) {
                this.destination.error(f), this.unsubscribe()
            }, l.prototype._complete = function() {
                this.destination.complete(), this.unsubscribe()
            }, l.prototype._unsubscribeAndRecycle = function() {
                var f = this._parentOrParents;
                return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = f, this
            }, l
        })(n.Subscription);
    lr.Subscriber = a;
    var c = (function(u) {
        e(l, u);

        function l(f, d, p, m) {
            var b = u.call(this) || this;
            b._parentSubscriber = f;
            var P, w = b;
            return t.isFunction(d) ? P = d : d && (P = d.next, p = d.error, m = d.complete, d !== r.empty && (w = Object.create(d), t.isFunction(w.unsubscribe) && b.add(w.unsubscribe.bind(w)), w.unsubscribe = b.unsubscribe.bind(b))), b._context = w, b._next = P, b._error = p, b._complete = m, b
        }
        return l.prototype.next = function(f) {
            if (!this.isStopped && this._next) {
                var d = this._parentSubscriber;
                !i.config.useDeprecatedSynchronousErrorHandling || !d.syncErrorThrowable ? this.__tryOrUnsub(this._next, f) : this.__tryOrSetError(d, this._next, f) && this.unsubscribe()
            }
        }, l.prototype.error = function(f) {
            if (!this.isStopped) {
                var d = this._parentSubscriber,
                    p = i.config.useDeprecatedSynchronousErrorHandling;
                if (this._error) !p || !d.syncErrorThrowable ? (this.__tryOrUnsub(this._error, f), this.unsubscribe()) : (this.__tryOrSetError(d, this._error, f), this.unsubscribe());
                else if (d.syncErrorThrowable) p ? (d.syncErrorValue = f, d.syncErrorThrown = !0) : s.hostReportError(f), this.unsubscribe();
                else {
                    if (this.unsubscribe(), p) throw f;
                    s.hostReportError(f)
                }
            }
        }, l.prototype.complete = function() {
            var f = this;
            if (!this.isStopped) {
                var d = this._parentSubscriber;
                if (this._complete) {
                    var p = function() {
                        return f._complete.call(f._context)
                    };
                    !i.config.useDeprecatedSynchronousErrorHandling || !d.syncErrorThrowable ? (this.__tryOrUnsub(p), this.unsubscribe()) : (this.__tryOrSetError(d, p), this.unsubscribe())
                } else this.unsubscribe()
            }
        }, l.prototype.__tryOrUnsub = function(f, d) {
            try {
                f.call(this._context, d)
            } catch (p) {
                if (this.unsubscribe(), i.config.useDeprecatedSynchronousErrorHandling) throw p;
                s.hostReportError(p)
            }
        }, l.prototype.__tryOrSetError = function(f, d, p) {
            if (!i.config.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
            try {
                d.call(this._context, p)
            } catch (m) {
                return i.config.useDeprecatedSynchronousErrorHandling ? (f.syncErrorValue = m, f.syncErrorThrown = !0, !0) : (s.hostReportError(m), !0)
            }
            return !1
        }, l.prototype._unsubscribe = function() {
            var f = this._parentSubscriber;
            this._context = null, this._parentSubscriber = null, f.unsubscribe()
        }, l
    })(a);
    return lr.SafeSubscriber = c, lr
}
var yl;

function W_() {
    if (yl) return Xn;
    yl = 1, Object.defineProperty(Xn, "__esModule", {
        value: !0
    });
    var e = ci();

    function t(r) {
        for (; r;) {
            var n = r,
                o = n.closed,
                i = n.destination,
                s = n.isStopped;
            if (o || s) return !1;
            i && i instanceof e.Subscriber ? r = i : r = null
        }
        return !0
    }
    return Xn.canReportError = t, Xn
}
var oo = {},
    bl;

function z_() {
    if (bl) return oo;
    bl = 1, Object.defineProperty(oo, "__esModule", {
        value: !0
    });
    var e = ci(),
        t = Qd(),
        r = Jd();

    function n(o, i, s) {
        if (o) {
            if (o instanceof e.Subscriber) return o;
            if (o[t.rxSubscriber]) return o[t.rxSubscriber]()
        }
        return !o && !i && !s ? new e.Subscriber(r.empty) : new e.Subscriber(o, i, s)
    }
    return oo.toSubscriber = n, oo
}
var io = {},
    _l;

function G_() {
    return _l || (_l = 1, Object.defineProperty(io, "__esModule", {
        value: !0
    }), io.observable = (function() {
        return typeof Symbol == "function" && Symbol.observable || "@@observable"
    })()), io
}
var un = {},
    so = {},
    wl;

function K_() {
    if (wl) return so;
    wl = 1, Object.defineProperty(so, "__esModule", {
        value: !0
    });

    function e(t) {
        return t
    }
    return so.identity = e, so
}
var El;

function X_() {
    if (El) return un;
    El = 1, Object.defineProperty(un, "__esModule", {
        value: !0
    });
    var e = K_();

    function t() {
        for (var n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o];
        return r(n)
    }
    un.pipe = t;

    function r(n) {
        return n.length === 0 ? e.identity : n.length === 1 ? n[0] : function(i) {
            return n.reduce(function(s, a) {
                return a(s)
            }, i)
        }
    }
    return un.pipeFromArray = r, un
}
var Sl;

function Y_() {
    if (Sl) return Kn;
    Sl = 1, Object.defineProperty(Kn, "__esModule", {
        value: !0
    });
    var e = W_(),
        t = z_(),
        r = G_(),
        n = X_(),
        o = ja(),
        i = (function() {
            function a(c) {
                this._isScalar = !1, c && (this._subscribe = c)
            }
            return a.prototype.lift = function(c) {
                var u = new a;
                return u.source = this, u.operator = c, u
            }, a.prototype.subscribe = function(c, u, l) {
                var f = this.operator,
                    d = t.toSubscriber(c, u, l);
                if (f ? d.add(f.call(d, this.source)) : d.add(this.source || o.config.useDeprecatedSynchronousErrorHandling && !d.syncErrorThrowable ? this._subscribe(d) : this._trySubscribe(d)), o.config.useDeprecatedSynchronousErrorHandling && d.syncErrorThrowable && (d.syncErrorThrowable = !1, d.syncErrorThrown)) throw d.syncErrorValue;
                return d
            }, a.prototype._trySubscribe = function(c) {
                try {
                    return this._subscribe(c)
                } catch (u) {
                    o.config.useDeprecatedSynchronousErrorHandling && (c.syncErrorThrown = !0, c.syncErrorValue = u), e.canReportError(c) ? c.error(u) : console.warn(u)
                }
            }, a.prototype.forEach = function(c, u) {
                var l = this;
                return u = s(u), new u(function(f, d) {
                    var p;
                    p = l.subscribe(function(m) {
                        try {
                            c(m)
                        } catch (b) {
                            d(b), p && p.unsubscribe()
                        }
                    }, d, f)
                })
            }, a.prototype._subscribe = function(c) {
                var u = this.source;
                return u && u.subscribe(c)
            }, a.prototype[r.observable] = function() {
                return this
            }, a.prototype.pipe = function() {
                for (var c = [], u = 0; u < arguments.length; u++) c[u] = arguments[u];
                return c.length === 0 ? this : n.pipeFromArray(c)(this)
            }, a.prototype.toPromise = function(c) {
                var u = this;
                return c = s(c), new c(function(l, f) {
                    var d;
                    u.subscribe(function(p) {
                        return d = p
                    }, function(p) {
                        return f(p)
                    }, function() {
                        return l(d)
                    })
                })
            }, a.create = function(c) {
                return new a(c)
            }, a
        })();
    Kn.Observable = i;

    function s(a) {
        if (a || (a = o.config.Promise || Promise), !a) throw new Error("no Promise impl found");
        return a
    }
    return Kn
}
var Ir = {},
    Rl;

function J_() {
    if (Rl) return Ir;
    Rl = 1;
    var e = Ir && Ir.__extends || (function() {
        var i = function(s, a) {
            return i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(c, u) {
                c.__proto__ = u
            } || function(c, u) {
                for (var l in u) u.hasOwnProperty(l) && (c[l] = u[l])
            }, i(s, a)
        };
        return function(s, a) {
            i(s, a);

            function c() {
                this.constructor = s
            }
            s.prototype = a === null ? Object.create(a) : (c.prototype = a.prototype, new c)
        }
    })();
    Object.defineProperty(Ir, "__esModule", {
        value: !0
    });
    var t = ci();

    function r(i, s) {
        return function(c) {
            return c.lift(new n(i, s))
        }
    }
    Ir.filter = r;
    var n = (function() {
            function i(s, a) {
                this.predicate = s, this.thisArg = a
            }
            return i.prototype.call = function(s, a) {
                return a.subscribe(new o(s, this.predicate, this.thisArg))
            }, i
        })(),
        o = (function(i) {
            e(s, i);

            function s(a, c, u) {
                var l = i.call(this, a) || this;
                return l.predicate = c, l.thisArg = u, l.count = 0, l
            }
            return s.prototype._next = function(a) {
                var c;
                try {
                    c = this.predicate.call(this.thisArg, a, this.count++)
                } catch (u) {
                    this.destination.error(u);
                    return
                }
                c && this.destination.next(a)
            }, s
        })(t.Subscriber);
    return Ir
}
var ur = {},
    Cl;

function Q_() {
    if (Cl) return ur;
    Cl = 1;
    var e = ur && ur.__extends || (function() {
        var i = function(s, a) {
            return i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(c, u) {
                c.__proto__ = u
            } || function(c, u) {
                for (var l in u) u.hasOwnProperty(l) && (c[l] = u[l])
            }, i(s, a)
        };
        return function(s, a) {
            i(s, a);

            function c() {
                this.constructor = s
            }
            s.prototype = a === null ? Object.create(a) : (c.prototype = a.prototype, new c)
        }
    })();
    Object.defineProperty(ur, "__esModule", {
        value: !0
    });
    var t = ci();

    function r(i, s) {
        return function(c) {
            if (typeof i != "function") throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
            return c.lift(new n(i, s))
        }
    }
    ur.map = r;
    var n = (function() {
        function i(s, a) {
            this.project = s, this.thisArg = a
        }
        return i.prototype.call = function(s, a) {
            return a.subscribe(new o(s, this.project, this.thisArg))
        }, i
    })();
    ur.MapOperator = n;
    var o = (function(i) {
        e(s, i);

        function s(a, c, u) {
            var l = i.call(this, a) || this;
            return l.project = c, l.count = 0, l.thisArg = u || l, l
        }
        return s.prototype._next = function(a) {
            var c;
            try {
                c = this.project.call(this.thisArg, a, this.count++)
            } catch (u) {
                this.destination.error(u);
                return
            }
            this.destination.next(c)
        }, s
    })(t.Subscriber);
    return ur
}
var Ni, Tl;

function Hn() {
    if (Tl) return Ni;
    Tl = 1;
    var e = Y_(),
        t = e.Observable,
        r = J_(),
        n = r.filter,
        o = Q_(),
        i = o.map;
    return Ni = {
        Observable: t,
        filter: n,
        map: i
    }, Ni
}
var Di, Al;

function Zd() {
    return Al || (Al = 1, Di = function(t) {
        if (typeof t == "string" || Array.isArray(t)) return {
            id: t
        };
        if (t && t.query) return "params" in t ? {
            query: t.query,
            params: t.params
        } : {
            query: t.query
        };
        var r = ["* Document ID (<docId>)", "* Array of document IDs", "* Object containing `query`"].join(`
`);
        throw new Error(`Unknown selection - must be one of:

`.concat(r))
    }), Di
}
var ji = {},
    Ol;

function Ar() {
    return Ol || (Ol = 1, (function(e) {
        function t(o) {
            "@babel/helpers - typeof";
            return t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i) {
                return typeof i
            } : function(i) {
                return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i
            }, t(o)
        }
        var r = ["image", "file"],
            n = ["before", "after", "replace"];
        e.dataset = function(o) {
            if (!/^(~[a-z0-9]{1}[-\w]{0,63}|[a-z0-9]{1}[-\w]{0,63})$/.test(o)) throw new Error("Datasets can only contain lowercase characters, numbers, underscores and dashes, and start with tilde, and be maximum 64 characters")
        }, e.projectId = function(o) {
            if (!/^[-a-z0-9]+$/i.test(o)) throw new Error("`projectId` can only contain only a-z, 0-9 and dashes")
        }, e.validateAssetType = function(o) {
            if (r.indexOf(o) === -1) throw new Error("Invalid asset type: ".concat(o, ". Must be one of ").concat(r.join(", ")))
        }, e.validateObject = function(o, i) {
            if (i === null || t(i) !== "object" || Array.isArray(i)) throw new Error("".concat(o, "() takes an object of properties"))
        }, e.requireDocumentId = function(o, i) {
            if (!i._id) throw new Error("".concat(o, '() requires that the document contains an ID ("_id" property)'));
            e.validateDocumentId(o, i._id)
        }, e.validateDocumentId = function(o, i) {
            if (typeof i != "string" || !/^[a-z0-9_.-]+$/i.test(i)) throw new Error("".concat(o, '(): "').concat(i, '" is not a valid document ID'))
        }, e.validateInsert = function(o, i, s) {
            var a = "insert(at, selector, items)";
            if (n.indexOf(o) === -1) {
                var c = n.map(function(u) {
                    return '"'.concat(u, '"')
                }).join(", ");
                throw new Error("".concat(a, ' takes an "at"-argument which is one of: ').concat(c))
            }
            if (typeof i != "string") throw new Error("".concat(a, ' takes a "selector"-argument which must be a string'));
            if (!Array.isArray(s)) throw new Error("".concat(a, ' takes an "items"-argument which must be an array'))
        }, e.hasDataset = function(o) {
            if (!o.dataset) throw new Error("`dataset` must be provided to perform queries");
            return o.dataset || ""
        }, e.requestTag = function(o) {
            if (typeof o != "string" || !/^[a-z0-9._-]{1,75}$/i.test(o)) throw new Error("Tag can only contain alphanumeric characters, underscores, dashes and dots, and be between one and 75 characters long.");
            return o
        }
    })(ji)), ji
}
var Hi, Pl;

function Ha() {
    if (Pl) return Hi;
    Pl = 1;

    function e(a, c, u) {
        return c in a ? Object.defineProperty(a, c, {
            value: u,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : a[c] = u, a
    }
    var t = Ve(),
        r = Zd(),
        n = Ar(),
        o = n.validateObject,
        i = n.validateInsert;

    function s(a) {
        var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
        this.selection = a, this.operations = t({}, c), this.client = u
    }
    return t(s.prototype, {
        clone: function() {
            return new s(this.selection, t({}, this.operations), this.client)
        },
        set: function(c) {
            return this._assign("set", c)
        },
        diffMatchPatch: function(c) {
            return o("diffMatchPatch", c), this._assign("diffMatchPatch", c)
        },
        unset: function(c) {
            if (!Array.isArray(c)) throw new Error("unset(attrs) takes an array of attributes to unset, non-array given");
            return this.operations = t({}, this.operations, {
                unset: c
            }), this
        },
        setIfMissing: function(c) {
            return this._assign("setIfMissing", c)
        },
        replace: function(c) {
            return o("replace", c), this._set("set", {
                $: c
            })
        },
        inc: function(c) {
            return this._assign("inc", c)
        },
        dec: function(c) {
            return this._assign("dec", c)
        },
        insert: function(c, u, l) {
            var f;
            return i(c, u, l), this._assign("insert", (f = {}, e(f, c, u), e(f, "items", l), f))
        },
        append: function(c, u) {
            return this.insert("after", "".concat(c, "[-1]"), u)
        },
        prepend: function(c, u) {
            return this.insert("before", "".concat(c, "[0]"), u)
        },
        splice: function(c, u, l, f) {
            var d = typeof l > "u" || l === -1,
                p = u < 0 ? u - 1 : u,
                m = d ? -1 : Math.max(0, u + l),
                b = p < 0 && m >= 0 ? "" : m,
                P = "".concat(c, "[").concat(p, ":").concat(b, "]");
            return this.insert("replace", P, f || [])
        },
        ifRevisionId: function(c) {
            return this.operations.ifRevisionID = c, this
        },
        serialize: function() {
            return t(r(this.selection), this.operations)
        },
        toJSON: function() {
            return this.serialize()
        },
        commit: function() {
            var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            if (!this.client) throw new Error("No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method");
            var u = typeof this.selection == "string",
                l = t({
                    returnFirst: u,
                    returnDocuments: !0
                }, c);
            return this.client.mutate({
                patch: this.serialize()
            }, l)
        },
        reset: function() {
            return this.operations = {}, this
        },
        _set: function(c, u) {
            return this._assign(c, u, !1)
        },
        _assign: function(c, u) {
            var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
            return o(c, u), this.operations = t({}, this.operations, e({}, c, t({}, l && this.operations[c] || {}, u))), this
        }
    }), Hi = s, Hi
}
var Bi, xl;

function eh() {
    if (xl) return Bi;
    xl = 1;

    function e(s, a, c) {
        return a in s ? Object.defineProperty(s, a, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : s[a] = c, s
    }
    var t = Ve(),
        r = Ar(),
        n = Ha(),
        o = {
            returnDocuments: !1
        };

    function i() {
        var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
            a = arguments.length > 1 ? arguments[1] : void 0,
            c = arguments.length > 2 ? arguments[2] : void 0;
        this.trxId = c, this.operations = s, this.client = a
    }
    return t(i.prototype, {
        clone: function() {
            return new i(this.operations.slice(0), this.client, this.trxId)
        },
        create: function(a) {
            return r.validateObject("create", a), this._add({
                create: a
            })
        },
        createIfNotExists: function(a) {
            var c = "createIfNotExists";
            return r.validateObject(c, a), r.requireDocumentId(c, a), this._add(e({}, c, a))
        },
        createOrReplace: function(a) {
            var c = "createOrReplace";
            return r.validateObject(c, a), r.requireDocumentId(c, a), this._add(e({}, c, a))
        },
        delete: function(a) {
            return r.validateDocumentId("delete", a), this._add({
                delete: {
                    id: a
                }
            })
        },
        patch: function(a, c) {
            var u = typeof c == "function",
                l = a instanceof n;
            if (l) return this._add({
                patch: a.serialize()
            });
            if (u) {
                var f = c(new n(a, {}, this.client));
                if (!(f instanceof n)) throw new Error("function passed to `patch()` must return the patch");
                return this._add({
                    patch: f.serialize()
                })
            }
            return this._add({
                patch: t({
                    id: a
                }, c)
            })
        },
        transactionId: function(a) {
            return a ? (this.trxId = a, this) : this.trxId
        },
        serialize: function() {
            return this.operations.slice()
        },
        toJSON: function() {
            return this.serialize()
        },
        commit: function(a) {
            if (!this.client) throw new Error("No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method");
            return this.client.mutate(this.serialize(), t({
                transactionId: this.trxId
            }, o, a || {}))
        },
        reset: function() {
            return this.operations = [], this
        },
        _add: function(a) {
            return this.operations.push(a), this
        }
    }), Bi = i, Bi
}
var qi, kl;

function th() {
    if (kl) return qi;
    kl = 1;
    var e = ["tag"];

    function t(o, i) {
        if (o == null) return {};
        var s = r(o, i),
            a, c;
        if (Object.getOwnPropertySymbols) {
            var u = Object.getOwnPropertySymbols(o);
            for (c = 0; c < u.length; c++) a = u[c], !(i.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(o, a) && (s[a] = o[a])
        }
        return s
    }

    function r(o, i) {
        if (o == null) return {};
        var s = {},
            a = Object.keys(o),
            c, u;
        for (u = 0; u < a.length; u++) c = a[u], !(i.indexOf(c) >= 0) && (s[c] = o[c]);
        return s
    }
    var n = encodeURIComponent;
    return qi = function(o) {
        var i = o.query,
            s = o.params,
            a = s === void 0 ? {} : s,
            c = o.options,
            u = c === void 0 ? {} : c,
            l = u.tag,
            f = t(u, e),
            d = "query=".concat(n(i)),
            p = l ? "?tag=".concat(n(l), "&").concat(d) : "?".concat(d),
            m = Object.keys(a).reduce(function(b, P) {
                return "".concat(b, "&").concat(n("$".concat(P)), "=").concat(n(JSON.stringify(a[P])))
            }, p);
        return Object.keys(f).reduce(function(b, P) {
            return u[P] ? "".concat(b, "&").concat(n(P), "=").concat(n(u[P])) : b
        }, m)
    }, qi
}
var mn = {
    exports: {}
};
var Z_ = mn.exports,
    Il;

function ew() {
    return Il || (Il = 1, (function(e, t) {
        (function(r) {
            var n = r.setTimeout,
                o = r.clearTimeout,
                i = r.XMLHttpRequest,
                s = r.XDomainRequest,
                a = r.ActiveXObject,
                c = r.EventSource,
                u = r.document,
                l = r.Promise,
                f = r.fetch,
                d = r.Response,
                p = r.TextDecoder,
                m = r.TextEncoder,
                b = r.AbortController;
            if (typeof window < "u" && typeof u < "u" && !("readyState" in u) && u.body == null && (u.readyState = "loading", window.addEventListener("load", function(C) {
                    u.readyState = "complete"
                }, !1)), i == null && a != null && (i = function() {
                    return new a("Microsoft.XMLHTTP")
                }), Object.create == null && (Object.create = function(C) {
                    function A() {}
                    return A.prototype = C, new A
                }), Date.now || (Date.now = function() {
                    return new Date().getTime()
                }), b == null) {
                var P = f;
                f = function(C, A) {
                    var k = A.signal;
                    return P(C, {
                        headers: A.headers,
                        credentials: A.credentials,
                        cache: A.cache
                    }).then(function(D) {
                        var U = D.body.getReader();
                        return k._reader = U, k._aborted && k._reader.cancel(), {
                            status: D.status,
                            statusText: D.statusText,
                            headers: D.headers,
                            body: {
                                getReader: function() {
                                    return U
                                }
                            }
                        }
                    })
                }, b = function() {
                    this.signal = {
                        _reader: null,
                        _aborted: !1
                    }, this.abort = function() {
                        this.signal._reader != null && this.signal._reader.cancel(), this.signal._aborted = !0
                    }
                }
            }

            function w() {
                this.bitsNeeded = 0, this.codePoint = 0
            }
            w.prototype.decode = function(C) {
                function A(G, Q, X) {
                    if (X === 1) return G >= 128 >> Q && G << Q <= 2047;
                    if (X === 2) return G >= 2048 >> Q && G << Q <= 55295 || G >= 57344 >> Q && G << Q <= 65535;
                    if (X === 3) return G >= 65536 >> Q && G << Q <= 1114111;
                    throw new Error
                }

                function k(G, Q) {
                    if (G === 6) return Q >> 6 > 15 ? 3 : Q > 31 ? 2 : 1;
                    if (G === 12) return Q > 15 ? 3 : 2;
                    if (G === 18) return 3;
                    throw new Error
                }
                for (var D = 65533, U = "", B = this.bitsNeeded, H = this.codePoint, Y = 0; Y < C.length; Y += 1) {
                    var V = C[Y];
                    B !== 0 && (V < 128 || V > 191 || !A(H << 6 | V & 63, B - 6, k(B, H))) && (B = 0, H = D, U += String.fromCharCode(H)), B === 0 ? (V >= 0 && V <= 127 ? (B = 0, H = V) : V >= 192 && V <= 223 ? (B = 6, H = V & 31) : V >= 224 && V <= 239 ? (B = 12, H = V & 15) : V >= 240 && V <= 247 ? (B = 18, H = V & 7) : (B = 0, H = D), B !== 0 && !A(H, B, k(B, H)) && (B = 0, H = D)) : (B -= 6, H = H << 6 | V & 63), B === 0 && (H <= 65535 ? U += String.fromCharCode(H) : (U += String.fromCharCode(55296 + (H - 65535 - 1 >> 10)), U += String.fromCharCode(56320 + (H - 65535 - 1 & 1023))))
                }
                return this.bitsNeeded = B, this.codePoint = H, U
            };
            var v = function() {
                try {
                    return new p().decode(new m().encode("test"), {
                        stream: !0
                    }) === "test"
                } catch (C) {
                    console.debug("TextDecoder does not support streaming option. Using polyfill instead: " + C)
                }
                return !1
            };
            (p == null || m == null || !v()) && (p = w);
            var h = function() {};

            function g(C) {
                this.withCredentials = !1, this.readyState = 0, this.status = 0, this.statusText = "", this.responseText = "", this.onprogress = h, this.onload = h, this.onerror = h, this.onreadystatechange = h, this._contentType = "", this._xhr = C, this._sendTimeout = 0, this._abort = h
            }
            g.prototype.open = function(C, A) {
                this._abort(!0);
                var k = this,
                    D = this._xhr,
                    U = 1,
                    B = 0;
                this._abort = function(X) {
                    k._sendTimeout !== 0 && (o(k._sendTimeout), k._sendTimeout = 0), (U === 1 || U === 2 || U === 3) && (U = 4, D.onload = h, D.onerror = h, D.onabort = h, D.onprogress = h, D.onreadystatechange = h, D.abort(), B !== 0 && (o(B), B = 0), X || (k.readyState = 4, k.onabort(null), k.onreadystatechange())), U = 0
                };
                var H = function() {
                        if (U === 1) {
                            var X = 0,
                                ie = "",
                                ce = void 0;
                            if ("contentType" in D) X = 200, ie = "OK", ce = D.contentType;
                            else try {
                                X = D.status, ie = D.statusText, ce = D.getResponseHeader("Content-Type")
                            } catch {
                                X = 0, ie = "", ce = void 0
                            }
                            X !== 0 && (U = 2, k.readyState = 2, k.status = X, k.statusText = ie, k._contentType = ce, k.onreadystatechange())
                        }
                    },
                    Y = function() {
                        if (H(), U === 2 || U === 3) {
                            U = 3;
                            var X = "";
                            try {
                                X = D.responseText
                            } catch {}
                            k.readyState = 3, k.responseText = X, k.onprogress()
                        }
                    },
                    V = function(X, ie) {
                        if ((ie == null || ie.preventDefault == null) && (ie = {
                                preventDefault: h
                            }), Y(), U === 1 || U === 2 || U === 3) {
                            if (U = 4, B !== 0 && (o(B), B = 0), k.readyState = 4, X === "load") k.onload(ie);
                            else if (X === "error") k.onerror(ie);
                            else if (X === "abort") k.onabort(ie);
                            else throw new TypeError;
                            k.onreadystatechange()
                        }
                    },
                    G = function(X) {
                        D != null && (D.readyState === 4 ? (!("onload" in D) || !("onerror" in D) || !("onabort" in D)) && V(D.responseText === "" ? "error" : "load", X) : D.readyState === 3 ? "onprogress" in D || Y() : D.readyState === 2 && H())
                    },
                    Q = function() {
                        B = n(function() {
                            Q()
                        }, 500), D.readyState === 3 && Y()
                    };
                "onload" in D && (D.onload = function(X) {
                    V("load", X)
                }), "onerror" in D && (D.onerror = function(X) {
                    V("error", X)
                }), "onabort" in D && (D.onabort = function(X) {
                    V("abort", X)
                }), "onprogress" in D && (D.onprogress = Y), "onreadystatechange" in D && (D.onreadystatechange = function(X) {
                    G(X)
                }), ("contentType" in D || !("ontimeout" in i.prototype)) && (A += (A.indexOf("?") === -1 ? "?" : "&") + "padding=true"), D.open(C, A, !0), "readyState" in D && (B = n(function() {
                    Q()
                }, 0))
            }, g.prototype.abort = function() {
                this._abort(!1)
            }, g.prototype.getResponseHeader = function(C) {
                return this._contentType
            }, g.prototype.setRequestHeader = function(C, A) {
                var k = this._xhr;
                "setRequestHeader" in k && k.setRequestHeader(C, A)
            }, g.prototype.getAllResponseHeaders = function() {
                return this._xhr.getAllResponseHeaders != null && this._xhr.getAllResponseHeaders() || ""
            }, g.prototype.send = function() {
                if ((!("ontimeout" in i.prototype) || !("sendAsBinary" in i.prototype) && !("mozAnon" in i.prototype)) && u != null && u.readyState != null && u.readyState !== "complete") {
                    var C = this;
                    C._sendTimeout = n(function() {
                        C._sendTimeout = 0, C.send()
                    }, 4);
                    return
                }
                var A = this._xhr;
                "withCredentials" in A && (A.withCredentials = this.withCredentials);
                try {
                    A.send(void 0)
                } catch (k) {
                    throw k
                }
            };

            function y(C) {
                return C.replace(/[A-Z]/g, function(A) {
                    return String.fromCharCode(A.charCodeAt(0) + 32)
                })
            }

            function x(C) {
                for (var A = Object.create(null), k = C.split(`\r
`), D = 0; D < k.length; D += 1) {
                    var U = k[D],
                        B = U.split(": "),
                        H = B.shift(),
                        Y = B.join(": ");
                    A[y(H)] = Y
                }
                this._map = A
            }
            x.prototype.get = function(C) {
                return this._map[y(C)]
            }, i != null && i.HEADERS_RECEIVED == null && (i.HEADERS_RECEIVED = 2);

            function T() {}
            T.prototype.open = function(C, A, k, D, U, B, H) {
                C.open("GET", U);
                var Y = 0;
                C.onprogress = function() {
                    var G = C.responseText,
                        Q = G.slice(Y);
                    Y += Q.length, k(Q)
                }, C.onerror = function(G) {
                    G.preventDefault(), D(new Error("NetworkError"))
                }, C.onload = function() {
                    D(null)
                }, C.onabort = function() {
                    D(null)
                }, C.onreadystatechange = function() {
                    if (C.readyState === i.HEADERS_RECEIVED) {
                        var G = C.status,
                            Q = C.statusText,
                            X = C.getResponseHeader("Content-Type"),
                            ie = C.getAllResponseHeaders();
                        A(G, Q, X, new x(ie))
                    }
                }, C.withCredentials = B;
                for (var V in H) Object.prototype.hasOwnProperty.call(H, V) && C.setRequestHeader(V, H[V]);
                return C.send(), C
            };

            function L(C) {
                this._headers = C
            }
            L.prototype.get = function(C) {
                return this._headers.get(C)
            };

            function O() {}
            O.prototype.open = function(C, A, k, D, U, B, H) {
                var Y = null,
                    V = new b,
                    G = V.signal,
                    Q = new p;
                return f(U, {
                    headers: H,
                    credentials: B ? "include" : "same-origin",
                    signal: G,
                    cache: "no-store"
                }).then(function(X) {
                    return Y = X.body.getReader(), A(X.status, X.statusText, X.headers.get("Content-Type"), new L(X.headers)), new l(function(ie, ce) {
                        var _e = function() {
                            Y.read().then(function(ue) {
                                if (ue.done) ie(void 0);
                                else {
                                    var ye = Q.decode(ue.value, {
                                        stream: !0
                                    });
                                    k(ye), _e()
                                }
                            }).catch(function(ue) {
                                ce(ue)
                            })
                        };
                        _e()
                    })
                }).catch(function(X) {
                    if (X.name !== "AbortError") return X
                }).then(function(X) {
                    D(X)
                }), {
                    abort: function() {
                        Y?.cancel(), V.abort()
                    }
                }
            };

            function j() {
                this._listeners = Object.create(null)
            }

            function F(C) {
                n(function() {
                    throw C
                }, 0)
            }
            j.prototype.dispatchEvent = function(C) {
                C.target = this;
                var A = this._listeners[C.type];
                if (A != null)
                    for (var k = A.length, D = 0; D < k; D += 1) {
                        var U = A[D];
                        try {
                            typeof U.handleEvent == "function" ? U.handleEvent(C) : U.call(this, C)
                        } catch (B) {
                            F(B)
                        }
                    }
            }, j.prototype.addEventListener = function(C, A) {
                C = String(C);
                var k = this._listeners,
                    D = k[C];
                D == null && (D = [], k[C] = D);
                for (var U = !1, B = 0; B < D.length; B += 1) D[B] === A && (U = !0);
                U || D.push(A)
            }, j.prototype.removeEventListener = function(C, A) {
                C = String(C);
                var k = this._listeners,
                    D = k[C];
                if (D != null) {
                    for (var U = [], B = 0; B < D.length; B += 1) D[B] !== A && U.push(D[B]);
                    U.length === 0 ? delete k[C] : k[C] = U
                }
            };

            function S(C) {
                this.type = C, this.target = void 0
            }

            function E(C, A) {
                S.call(this, C), this.data = A.data, this.lastEventId = A.lastEventId
            }
            E.prototype = Object.create(S.prototype);

            function M(C, A) {
                S.call(this, C), this.status = A.status, this.statusText = A.statusText, this.headers = A.headers
            }
            M.prototype = Object.create(S.prototype);

            function I(C, A) {
                S.call(this, C), this.error = A.error
            }
            I.prototype = Object.create(S.prototype);
            var W = -1,
                $ = 0,
                z = 1,
                Z = 2,
                te = -1,
                ne = 0,
                ae = 1,
                Le = 2,
                Ne = 3,
                Oe = /^text\/event\-stream(;.*)?$/i,
                Te = 1e3,
                q = 18e6,
                J = function(C, A) {
                    var k = C == null ? A : parseInt(C, 10);
                    return k !== k && (k = A), K(k)
                },
                K = function(C) {
                    return Math.min(Math.max(C, Te), q)
                },
                ee = function(C, A, k) {
                    try {
                        typeof A == "function" && A.call(C, k)
                    } catch (D) {
                        F(D)
                    }
                };

            function re(C, A) {
                j.call(this), A = A || {}, this.onopen = void 0, this.onmessage = void 0, this.onerror = void 0, this.url = void 0, this.readyState = void 0, this.withCredentials = void 0, this.headers = void 0, this._close = void 0, R(this, C, A)
            }

            function fe() {
                return i != null && "withCredentials" in i.prototype || s == null ? new i : new s
            }
            var _ = f != null && d != null && "body" in d.prototype;

            function R(C, A, k) {
                A = String(A);
                var D = !!k.withCredentials,
                    U = k.lastEventIdQueryParameterName || "lastEventId",
                    B = K(1e3),
                    H = J(k.heartbeatTimeout, 45e3),
                    Y = "",
                    V = B,
                    G = !1,
                    Q = 0,
                    X = k.headers || {},
                    ie = k.Transport,
                    ce = _ && ie == null ? void 0 : new g(ie != null ? new ie : fe()),
                    _e = ie != null && typeof ie != "string" ? new ie : ce == null ? new O : new T,
                    ue = void 0,
                    ye = 0,
                    Re = W,
                    ht = "",
                    nr = "",
                    Pe = "",
                    Ye = "",
                    Ue = ne,
                    Or = 0,
                    or = 0,
                    ih = function(Fe, De, st, at) {
                        if (Re === $)
                            if (Fe === 200 && st != null && Oe.test(st)) {
                                Re = z, G = Date.now(), V = B, C.readyState = z;
                                var Je = new M("open", {
                                    status: Fe,
                                    statusText: De,
                                    headers: at
                                });
                                C.dispatchEvent(Je), ee(C, C.onopen, Je)
                            } else {
                                var We = "";
                                Fe !== 200 ? (De && (De = De.replace(/\s+/g, " ")), We = "EventSource's response has a status " + Fe + " " + De + " that is not 200. Aborting the connection.") : We = "EventSource's response has a Content-Type specifying an unsupported type: " + (st == null ? "-" : st.replace(/\s+/g, " ")) + ". Aborting the connection.", li();
                                var Je = new M("error", {
                                    status: Fe,
                                    statusText: De,
                                    headers: at
                                });
                                C.dispatchEvent(Je), ee(C, C.onerror, Je), console.error(We)
                            }
                    },
                    sh = function(Fe) {
                        if (Re === z) {
                            for (var De = -1, st = 0; st < Fe.length; st += 1) {
                                var at = Fe.charCodeAt(st);
                                (at === 10 || at === 13) && (De = st)
                            }
                            var Je = (De !== -1 ? Ye : "") + Fe.slice(0, De + 1);
                            Ye = (De === -1 ? Ye : "") + Fe.slice(De + 1), Fe !== "" && (G = Date.now(), Q += Fe.length);
                            for (var We = 0; We < Je.length; We += 1) {
                                var at = Je.charCodeAt(We);
                                if (Ue === te && at === 10) Ue = ne;
                                else if (Ue === te && (Ue = ne), at === 13 || at === 10) {
                                    if (Ue !== ne) {
                                        Ue === ae && (or = We + 1);
                                        var Lt = Je.slice(Or, or - 1),
                                            Nt = Je.slice(or + (or < We && Je.charCodeAt(or) === 32 ? 1 : 0), We);
                                        Lt === "data" ? (ht += `
`, ht += Nt) : Lt === "id" ? nr = Nt : Lt === "event" ? Pe = Nt : Lt === "retry" ? (B = J(Nt, B), V = B) : Lt === "heartbeatTimeout" && (H = J(Nt, H), ye !== 0 && (o(ye), ye = n(function() {
                                            rn()
                                        }, H)))
                                    }
                                    if (Ue === ne) {
                                        if (ht !== "") {
                                            Y = nr, Pe === "" && (Pe = "message");
                                            var Pr = new E(Pe, {
                                                data: ht.slice(1),
                                                lastEventId: nr
                                            });
                                            if (C.dispatchEvent(Pr), Pe === "open" ? ee(C, C.onopen, Pr) : Pe === "message" ? ee(C, C.onmessage, Pr) : Pe === "error" && ee(C, C.onerror, Pr), Re === Z) return
                                        }
                                        ht = "", Pe = ""
                                    }
                                    Ue = at === 13 ? te : ne
                                } else Ue === ne && (Or = We, Ue = ae), Ue === ae ? at === 58 && (or = We + 1, Ue = Le) : Ue === Le && (Ue = Ne)
                            }
                        }
                    },
                    Ba = function(Fe) {
                        if (Re === z || Re === $) {
                            Re = W, ye !== 0 && (o(ye), ye = 0), ye = n(function() {
                                rn()
                            }, V), V = K(Math.min(B * 16, V * 2)), C.readyState = $;
                            var De = new I("error", {
                                error: Fe
                            });
                            C.dispatchEvent(De), ee(C, C.onerror, De), Fe != null && console.error(Fe)
                        }
                    },
                    li = function() {
                        Re = Z, ue != null && (ue.abort(), ue = void 0), ye !== 0 && (o(ye), ye = 0), C.readyState = Z
                    },
                    rn = function() {
                        if (ye = 0, Re !== W) {
                            if (!G && ue != null) Ba(new Error("No activity within " + H + " milliseconds. " + (Re === $ ? "No response received." : Q + " chars received.") + " Reconnecting.")), ue != null && (ue.abort(), ue = void 0);
                            else {
                                var Fe = Math.max((G || Date.now()) + H - Date.now(), 1);
                                G = !1, ye = n(function() {
                                    rn()
                                }, Fe)
                            }
                            return
                        }
                        G = !1, Q = 0, ye = n(function() {
                            rn()
                        }, H), Re = $, ht = "", Pe = "", nr = Y, Ye = "", Or = 0, or = 0, Ue = ne;
                        var De = A;
                        if (A.slice(0, 5) !== "data:" && A.slice(0, 5) !== "blob:" && Y !== "") {
                            var st = A.indexOf("?");
                            De = st === -1 ? A : A.slice(0, st + 1) + A.slice(st + 1).replace(/(?:^|&)([^=&]*)(?:=[^&]*)?/g, function(Nt, Pr) {
                                return Pr === U ? "" : Nt
                            }), De += (A.indexOf("?") === -1 ? "?" : "&") + U + "=" + encodeURIComponent(Y)
                        }
                        var at = C.withCredentials,
                            Je = {};
                        Je.Accept = "text/event-stream";
                        var We = C.headers;
                        if (We != null)
                            for (var Lt in We) Object.prototype.hasOwnProperty.call(We, Lt) && (Je[Lt] = We[Lt]);
                        try {
                            ue = _e.open(ce, ih, sh, Ba, De, at, Je)
                        } catch (Nt) {
                            throw li(), Nt
                        }
                    };
                C.url = A, C.readyState = $, C.withCredentials = D, C.headers = X, C._close = li, rn()
            }
            re.prototype = Object.create(j.prototype), re.prototype.CONNECTING = $, re.prototype.OPEN = z, re.prototype.CLOSED = Z, re.prototype.close = function() {
                this._close()
            }, re.CONNECTING = $, re.OPEN = z, re.CLOSED = Z, re.prototype.withCredentials = void 0;
            var N = c;
            i != null && (c == null || !("withCredentials" in c.prototype)) && (N = re), (function(C) {
                {
                    var A = C(t);
                    A !== void 0 && (e.exports = A)
                }
            })(function(C) {
                C.EventSourcePolyfill = re, C.NativeEventSource = c, C.EventSource = N
            })
        })(typeof globalThis > "u" ? typeof window < "u" ? window : typeof self < "u" ? self : Z_ : globalThis)
    })(mn, mn.exports)), mn.exports
}
var Ui, Ml;

function tw() {
    return Ml || (Ml = 1, Ui = ew().EventSourcePolyfill), Ui
}
var Fi, Ll;

function rw() {
    return Ll || (Ll = 1, Fi = function(e, t) {
        return t.reduce(function(r, n) {
            return typeof e[n] > "u" || (r[n] = e[n]), r
        }, {})
    }), Fi
}
var $i, Nl;

function nw() {
    return Nl || (Nl = 1, $i = function(e, t) {
        return Object.keys(t).concat(Object.keys(e)).reduce(function(r, n) {
            return r[n] = typeof e[n] > "u" ? t[n] : e[n], r
        }, {})
    }), $i
}
var Vi, Dl;

function ow() {
    if (Dl) return Vi;
    Dl = 1;

    function e(w, v) {
        var h = Object.keys(w);
        if (Object.getOwnPropertySymbols) {
            var g = Object.getOwnPropertySymbols(w);
            v && (g = g.filter(function(y) {
                return Object.getOwnPropertyDescriptor(w, y).enumerable
            })), h.push.apply(h, g)
        }
        return h
    }

    function t(w) {
        for (var v = 1; v < arguments.length; v++) {
            var h = arguments[v] != null ? arguments[v] : {};
            v % 2 ? e(Object(h), !0).forEach(function(g) {
                r(w, g, h[g])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(w, Object.getOwnPropertyDescriptors(h)) : e(Object(h)).forEach(function(g) {
                Object.defineProperty(w, g, Object.getOwnPropertyDescriptor(h, g))
            })
        }
        return w
    }

    function r(w, v, h) {
        return v in w ? Object.defineProperty(w, v, {
            value: h,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : w[v] = h, w
    }
    var n = Ve(),
        o = Hn(),
        i = o.Observable,
        s = tw(),
        a = rw(),
        c = nw(),
        u = th(),
        l = 14800,
        f = s,
        d = ["includePreviousRevision", "includeResult", "visibility", "effectFormat", "tag"],
        p = {
            includeResult: !0
        };
    Vi = function(v, h) {
        var g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            y = this.clientConfig,
            x = y.url,
            T = y.token,
            L = y.withCredentials,
            O = y.requestTagPrefix,
            j = g.tag && O ? [O, g.tag].join(".") : g.tag,
            F = t(t({}, c(g, p)), {}, {
                tag: j
            }),
            S = a(F, d),
            E = u({
                query: v,
                params: h,
                options: S,
                tag: j
            }),
            M = "".concat(x).concat(this.getDataUrl("listen", E));
        if (M.length > l) return new i(function(z) {
            return z.error(new Error("Query too large for listener"))
        });
        var I = F.events ? F.events : ["mutation"],
            W = I.indexOf("reconnect") !== -1,
            $ = {};
        return (T || L) && ($.withCredentials = !0), T && ($.headers = {
            Authorization: "Bearer ".concat(T)
        }), new i(function(z) {
            var Z = J(),
                te, ne = !1;

            function ae() {
                ne || (q(), !ne && Z.readyState === f.CLOSED && (Te(), clearTimeout(te), te = setTimeout(K, 100)))
            }

            function Le(re) {
                z.error(b(re))
            }

            function Ne(re) {
                var fe = m(re);
                return fe instanceof Error ? z.error(fe) : z.next(fe)
            }

            function Oe(re) {
                ne = !0, Te(), z.complete()
            }

            function Te() {
                Z.removeEventListener("error", ae, !1), Z.removeEventListener("channelError", Le, !1), Z.removeEventListener("disconnect", Oe, !1), I.forEach(function(re) {
                    return Z.removeEventListener(re, Ne, !1)
                }), Z.close()
            }

            function q() {
                W && z.next({
                    type: "reconnect"
                })
            }

            function J() {
                var re = new f(M, $);
                return re.addEventListener("error", ae, !1), re.addEventListener("channelError", Le, !1), re.addEventListener("disconnect", Oe, !1), I.forEach(function(fe) {
                    return re.addEventListener(fe, Ne, !1)
                }), re
            }

            function K() {
                Z = J()
            }

            function ee() {
                ne = !0, Te()
            }
            return ee
        })
    };

    function m(w) {
        try {
            var v = w.data && JSON.parse(w.data) || {};
            return n({
                type: w.type
            }, v)
        } catch (h) {
            return h
        }
    }

    function b(w) {
        if (w instanceof Error) return w;
        var v = m(w);
        return v instanceof Error ? v : new Error(P(v))
    }

    function P(w) {
        return w.error ? w.error.description ? w.error.description : typeof w.error == "string" ? w.error : JSON.stringify(w.error, null, 2) : w.message || "Unknown listener error"
    }
    return Vi
}
var Wi, jl;

function iw() {
    if (jl) return Wi;
    jl = 1;

    function e(v, h, g) {
        return h in v ? Object.defineProperty(v, h, {
            value: g,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : v[h] = g, v
    }
    var t = Ve(),
        r = Hn(),
        n = r.map,
        o = r.filter,
        i = Ar(),
        s = Zd(),
        a = th(),
        c = eh(),
        u = Ha(),
        l = ow(),
        f = function(h, g) {
            var y = typeof h > "u" ? g : h;
            return h === !1 ? void 0 : y
        },
        d = function() {
            var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            return {
                dryRun: h.dryRun,
                returnIds: !0,
                returnDocuments: f(h.returnDocuments, !0),
                visibility: h.visibility || "sync",
                autoGenerateArrayKeys: h.autoGenerateArrayKeys,
                skipCrossDatasetReferenceValidation: h.skipCrossDatasetReferenceValidation
            }
        },
        p = function(h) {
            return h.type === "response"
        },
        m = function(h) {
            return h.body
        },
        b = function(h, g) {
            return h.reduce(function(y, x) {
                return y[g(x)] = x, y
            }, Object.create(null))
        },
        P = function(h) {
            return h.toPromise()
        },
        w = 11264;
    return Wi = {
        listen: l,
        getDataUrl: function(h, g) {
            var y = this.clientConfig,
                x = i.hasDataset(y),
                T = "/".concat(h, "/").concat(x),
                L = g ? "".concat(T, "/").concat(g) : T;
            return "/data".concat(L).replace(/\/($|\?)/, "$1")
        },
        fetch: function(h, g) {
            var y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
                x = y.filterResponse === !1 ? function(L) {
                    return L
                } : function(L) {
                    return L.result
                },
                T = this._dataRequest("query", {
                    query: h,
                    params: g
                }, y).pipe(n(x));
            return this.isPromiseAPI() ? P(T) : T
        },
        getDocument: function(h) {
            var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                y = {
                    uri: this.getDataUrl("doc", h),
                    json: !0,
                    tag: g.tag
                },
                x = this._requestObservable(y).pipe(o(p), n(function(T) {
                    return T.body.documents && T.body.documents[0]
                }));
            return this.isPromiseAPI() ? P(x) : x
        },
        getDocuments: function(h) {
            var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                y = {
                    uri: this.getDataUrl("doc", h.join(",")),
                    json: !0,
                    tag: g.tag
                },
                x = this._requestObservable(y).pipe(o(p), n(function(T) {
                    var L = b(T.body.documents || [], function(O) {
                        return O._id
                    });
                    return h.map(function(O) {
                        return L[O] || null
                    })
                }));
            return this.isPromiseAPI() ? P(x) : x
        },
        create: function(h, g) {
            return this._create(h, "create", g)
        },
        createIfNotExists: function(h, g) {
            return i.requireDocumentId("createIfNotExists", h), this._create(h, "createIfNotExists", g)
        },
        createOrReplace: function(h, g) {
            return i.requireDocumentId("createOrReplace", h), this._create(h, "createOrReplace", g)
        },
        patch: function(h, g) {
            return new u(h, g, this)
        },
        delete: function(h, g) {
            return this.dataRequest("mutate", {
                mutations: [{
                    delete: s(h)
                }]
            }, g)
        },
        mutate: function(h, g) {
            var y = h instanceof u || h instanceof c ? h.serialize() : h,
                x = Array.isArray(y) ? y : [y],
                T = g && g.transactionId;
            return this.dataRequest("mutate", {
                mutations: x,
                transactionId: T
            }, g)
        },
        transaction: function(h) {
            return new c(h, this)
        },
        dataRequest: function(h, g) {
            var y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
                x = this._dataRequest(h, g, y);
            return this.isPromiseAPI() ? P(x) : x
        },
        _dataRequest: function(h, g) {
            var y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
                x = h === "mutate",
                T = h === "query",
                L = !x && a(g),
                O = !x && L.length < w,
                j = O ? L : "",
                F = y.returnFirst,
                S = y.timeout,
                E = y.token,
                M = y.tag,
                I = y.headers,
                W = this.getDataUrl(h, j),
                $ = {
                    method: O ? "GET" : "POST",
                    uri: W,
                    json: !0,
                    body: O ? void 0 : g,
                    query: x && d(y),
                    timeout: S,
                    headers: I,
                    token: E,
                    tag: M,
                    canUseCdn: T
                };
            return this._requestObservable($).pipe(o(p), n(m), n(function(z) {
                if (!x) return z;
                var Z = z.results || [];
                if (y.returnDocuments) return F ? Z[0] && Z[0].document : Z.map(function(ae) {
                    return ae.document
                });
                var te = F ? "documentId" : "documentIds",
                    ne = F ? Z[0] && Z[0].id : Z.map(function(ae) {
                        return ae.id
                    });
                return e({
                    transactionId: z.transactionId,
                    results: Z
                }, te, ne)
            }))
        },
        _create: function(h, g) {
            var y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
                x = e({}, g, h),
                T = t({
                    returnFirst: !0,
                    returnDocuments: !0
                }, y);
            return this.dataRequest("mutate", {
                mutations: [x]
            }, T)
        }
    }, Wi
}
var zi, Hl;

function sw() {
    if (Hl) return zi;
    Hl = 1;
    var e = Ve(),
        t = Ar();

    function r(n) {
        this.request = n.request.bind(n)
    }
    return e(r.prototype, {
        create: function(o, i) {
            return this._modify("PUT", o, i)
        },
        edit: function(o, i) {
            return this._modify("PATCH", o, i)
        },
        delete: function(o) {
            return this._modify("DELETE", o)
        },
        list: function() {
            return this.request({
                uri: "/datasets"
            })
        },
        _modify: function(o, i, s) {
            return t.dataset(i), this.request({
                method: o,
                uri: "/datasets/".concat(i),
                body: s
            })
        }
    }), zi = r, zi
}
var Gi, Bl;

function aw() {
    if (Bl) return Gi;
    Bl = 1;
    var e = Ve();

    function t(r) {
        this.client = r
    }
    return e(t.prototype, {
        list: function() {
            return this.client.request({
                uri: "/projects"
            })
        },
        getById: function(n) {
            return this.client.request({
                uri: "/projects/".concat(n)
            })
        }
    }), Gi = t, Gi
}
var Ki, ql;

function cw() {
    return ql || (ql = 1, Ki = function(e) {
        var t = [];
        for (var r in e) e.hasOwnProperty(r) && t.push("".concat(encodeURIComponent(r), "=").concat(encodeURIComponent(e[r])));
        return t.length > 0 ? "?".concat(t.join("&")) : ""
    }), Ki
}
var Xi, Ul;

function lw() {
    if (Ul) return Xi;
    Ul = 1;

    function e(m, b) {
        return i(m) || o(m, b) || r(m, b) || t()
    }

    function t() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }

    function r(m, b) {
        if (m) {
            if (typeof m == "string") return n(m, b);
            var P = Object.prototype.toString.call(m).slice(8, -1);
            if (P === "Object" && m.constructor && (P = m.constructor.name), P === "Map" || P === "Set") return Array.from(m);
            if (P === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(P)) return n(m, b)
        }
    }

    function n(m, b) {
        (b == null || b > m.length) && (b = m.length);
        for (var P = 0, w = new Array(b); P < b; P++) w[P] = m[P];
        return w
    }

    function o(m, b) {
        var P = m == null ? null : typeof Symbol < "u" && m[Symbol.iterator] || m["@@iterator"];
        if (P != null) {
            var w = [],
                v = !0,
                h = !1,
                g, y;
            try {
                for (P = P.call(m); !(v = (g = P.next()).done) && (w.push(g.value), !(b && w.length === b)); v = !0);
            } catch (x) {
                h = !0, y = x
            } finally {
                try {
                    !v && P.return != null && P.return()
                } finally {
                    if (h) throw y
                }
            }
            return w
        }
    }

    function i(m) {
        if (Array.isArray(m)) return m
    }
    var s = Ve(),
        a = Hn(),
        c = a.map,
        u = a.filter,
        l = cw(),
        f = Ar();

    function d(m) {
        this.client = m
    }

    function p(m, b) {
        return typeof window > "u" || !(b instanceof window.File) ? m : s({
            filename: m.preserveFilename === !1 ? void 0 : b.name,
            contentType: b.type
        }, m)
    }
    return s(d.prototype, {
        upload: function(b, P) {
            var w = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            f.validateAssetType(b);
            var v = w.extract || void 0;
            v && !v.length && (v = ["none"]);
            var h = f.hasDataset(this.client.clientConfig),
                g = b === "image" ? "images" : "files",
                y = p(w, P),
                x = y.tag,
                T = y.label,
                L = y.title,
                O = y.description,
                j = y.creditLine,
                F = y.filename,
                S = y.source,
                E = {
                    label: T,
                    title: L,
                    description: O,
                    filename: F,
                    meta: v,
                    creditLine: j
                };
            S && (E.sourceId = S.id, E.sourceName = S.name, E.sourceUrl = S.url);
            var M = this.client._requestObservable({
                tag: x,
                method: "POST",
                timeout: y.timeout || 0,
                uri: "/assets/".concat(g, "/").concat(h),
                headers: y.contentType ? {
                    "Content-Type": y.contentType
                } : {},
                query: E,
                body: P
            });
            return this.client.isPromiseAPI() ? M.pipe(u(function(I) {
                return I.type === "response"
            }), c(function(I) {
                return I.body.document
            })).toPromise() : M
        },
        delete: function(b, P) {
            console.warn("client.assets.delete() is deprecated, please use client.delete(<document-id>)");
            var w = P || "";
            return /^(image|file)-/.test(w) ? b._id && (w = b._id) : w = "".concat(b, "-").concat(w), f.hasDataset(this.client.clientConfig), this.client.delete(w)
        },
        getImageUrl: function(b, P) {
            var w = b._ref || b;
            if (typeof w != "string") throw new Error("getImageUrl() needs either an object with a _ref, or a string with an asset document ID");
            if (!/^image-[A-Za-z0-9_]+-\d+x\d+-[a-z]{1,5}$/.test(w)) throw new Error('Unsupported asset ID "'.concat(w, '". URL generation only works for auto-generated IDs.'));
            var v = w.split("-"),
                h = e(v, 4),
                g = h[1],
                y = h[2],
                x = h[3];
            f.hasDataset(this.client.clientConfig);
            var T = this.client.clientConfig,
                L = T.projectId,
                O = T.dataset,
                j = P ? l(P) : "";
            return "https://cdn.sanity.io/images/".concat(L, "/").concat(O, "/").concat(g, "-").concat(y, ".").concat(x).concat(j)
        }
    }), Xi = d, Xi
}
var Yi, Fl;

function uw() {
    if (Fl) return Yi;
    Fl = 1;
    var e = Ve();

    function t(r) {
        this.client = r
    }
    return e(t.prototype, {
        getById: function(n) {
            return this.client.request({
                uri: "/users/".concat(n)
            })
        }
    }), Yi = t, Yi
}
var Ji, $l;

function fw() {
    if ($l) return Ji;
    $l = 1;
    var e = Ve();

    function t(r) {
        this.client = r
    }
    return e(t.prototype, {
        getLoginProviders: function() {
            return this.client.request({
                uri: "/auth/providers"
            })
        },
        logout: function() {
            return this.client.request({
                uri: "/auth/logout",
                method: "POST"
            })
        }
    }), Ji = t, Ji
}
var Qi, Vl;

function dw() {
    return Vl || (Vl = 1, Qi = function() {
        var t = [];
        return {
            subscribe: r,
            publish: n
        };

        function r(o) {
            return t.push(o),
                function() {
                    var s = t.indexOf(o);
                    s > -1 && t.splice(s, 1)
                }
        }

        function n() {
            for (var o = 0; o < t.length; o++) t[o].apply(null, arguments)
        }
    }), Qi
}
var Zi, Wl;

function hw() {
    return Wl || (Wl = 1, Zi = function(e) {
        var t = function(n, o) {
            for (var i = n === "onError", s = o, a = arguments.length, c = new Array(a > 2 ? a - 2 : 0), u = 2; u < a; u++) c[u - 2] = arguments[u];
            for (var l = 0; l < e[n].length; l++) {
                var f = e[n][l];
                if (s = f.apply(void 0, [s].concat(c)), i && !s) break
            }
            return s
        };
        return t
    }), Zi
}
var es, zl;

function pw() {
    return zl || (zl = 1, es = function(t, r) {
        if (r = r.split(":")[0], t = +t, !t) return !1;
        switch (r) {
            case "http":
            case "ws":
                return t !== 80;
            case "https":
            case "wss":
                return t !== 443;
            case "ftp":
                return t !== 21;
            case "gopher":
                return t !== 70;
            case "file":
                return !1
        }
        return t !== 0
    }), es
}
var ao = {},
    Gl;

function mw() {
    if (Gl) return ao;
    Gl = 1;
    var e = Object.prototype.hasOwnProperty,
        t;

    function r(s) {
        try {
            return decodeURIComponent(s.replace(/\+/g, " "))
        } catch {
            return null
        }
    }

    function n(s) {
        try {
            return encodeURIComponent(s)
        } catch {
            return null
        }
    }

    function o(s) {
        for (var a = /([^=?#&]+)=?([^&]*)/g, c = {}, u; u = a.exec(s);) {
            var l = r(u[1]),
                f = r(u[2]);
            l === null || f === null || l in c || (c[l] = f)
        }
        return c
    }

    function i(s, a) {
        a = a || "";
        var c = [],
            u, l;
        typeof a != "string" && (a = "?");
        for (l in s)
            if (e.call(s, l)) {
                if (u = s[l], !u && (u === null || u === t || isNaN(u)) && (u = ""), l = n(l), u = n(u), l === null || u === null) continue;
                c.push(l + "=" + u)
            } return c.length ? a + c.join("&") : ""
    }
    return ao.stringify = i, ao.parse = o, ao
}
var ts, Kl;

function gw() {
    if (Kl) return ts;
    Kl = 1;
    var e = pw(),
        t = mw(),
        r = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,
        n = /[\n\r\t]/g,
        o = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
        i = /:\d+$/,
        s = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
        a = /^[a-zA-Z]:/;

    function c(v) {
        return (v || "").toString().replace(r, "")
    }
    var u = [
            ["#", "hash"],
            ["?", "query"],
            function(h, g) {
                return d(g.protocol) ? h.replace(/\\/g, "/") : h
            },
            ["/", "pathname"],
            ["@", "auth", 1],
            [NaN, "host", void 0, 1, 1],
            [/:(\d*)$/, "port", void 0, 1],
            [NaN, "hostname", void 0, 1, 1]
        ],
        l = {
            hash: 1,
            query: 1
        };

    function f(v) {
        var h;
        typeof window < "u" ? h = window : typeof Bo < "u" ? h = Bo : typeof self < "u" ? h = self : h = {};
        var g = h.location || {};
        v = v || g;
        var y = {},
            x = typeof v,
            T;
        if (v.protocol === "blob:") y = new b(unescape(v.pathname), {});
        else if (x === "string") {
            y = new b(v, {});
            for (T in l) delete y[T]
        } else if (x === "object") {
            for (T in v) T in l || (y[T] = v[T]);
            y.slashes === void 0 && (y.slashes = o.test(v.href))
        }
        return y
    }

    function d(v) {
        return v === "file:" || v === "ftp:" || v === "http:" || v === "https:" || v === "ws:" || v === "wss:"
    }

    function p(v, h) {
        v = c(v), v = v.replace(n, ""), h = h || {};
        var g = s.exec(v),
            y = g[1] ? g[1].toLowerCase() : "",
            x = !!g[2],
            T = !!g[3],
            L = 0,
            O;
        return x ? T ? (O = g[2] + g[3] + g[4], L = g[2].length + g[3].length) : (O = g[2] + g[4], L = g[2].length) : T ? (O = g[3] + g[4], L = g[3].length) : O = g[4], y === "file:" ? L >= 2 && (O = O.slice(2)) : d(y) ? O = g[4] : y ? x && (O = O.slice(2)) : L >= 2 && d(h.protocol) && (O = g[4]), {
            protocol: y,
            slashes: x || d(y),
            slashesCount: L,
            rest: O
        }
    }

    function m(v, h) {
        if (v === "") return h;
        for (var g = (h || "/").split("/").slice(0, -1).concat(v.split("/")), y = g.length, x = g[y - 1], T = !1, L = 0; y--;) g[y] === "." ? g.splice(y, 1) : g[y] === ".." ? (g.splice(y, 1), L++) : L && (y === 0 && (T = !0), g.splice(y, 1), L--);
        return T && g.unshift(""), (x === "." || x === "..") && g.push(""), g.join("/")
    }

    function b(v, h, g) {
        if (v = c(v), v = v.replace(n, ""), !(this instanceof b)) return new b(v, h, g);
        var y, x, T, L, O, j, F = u.slice(),
            S = typeof h,
            E = this,
            M = 0;
        for (S !== "object" && S !== "string" && (g = h, h = null), g && typeof g != "function" && (g = t.parse), h = f(h), x = p(v || "", h), y = !x.protocol && !x.slashes, E.slashes = x.slashes || y && h.slashes, E.protocol = x.protocol || h.protocol || "", v = x.rest, (x.protocol === "file:" && (x.slashesCount !== 2 || a.test(v)) || !x.slashes && (x.protocol || x.slashesCount < 2 || !d(E.protocol))) && (F[3] = [/(.*)/, "pathname"]); M < F.length; M++) {
            if (L = F[M], typeof L == "function") {
                v = L(v, E);
                continue
            }
            T = L[0], j = L[1], T !== T ? E[j] = v : typeof T == "string" ? (O = T === "@" ? v.lastIndexOf(T) : v.indexOf(T), ~O && (typeof L[2] == "number" ? (E[j] = v.slice(0, O), v = v.slice(O + L[2])) : (E[j] = v.slice(O), v = v.slice(0, O)))) : (O = T.exec(v)) && (E[j] = O[1], v = v.slice(0, O.index)), E[j] = E[j] || y && L[3] && h[j] || "", L[4] && (E[j] = E[j].toLowerCase())
        }
        g && (E.query = g(E.query)), y && h.slashes && E.pathname.charAt(0) !== "/" && (E.pathname !== "" || h.pathname !== "") && (E.pathname = m(E.pathname, h.pathname)), E.pathname.charAt(0) !== "/" && d(E.protocol) && (E.pathname = "/" + E.pathname), e(E.port, E.protocol) || (E.host = E.hostname, E.port = ""), E.username = E.password = "", E.auth && (O = E.auth.indexOf(":"), ~O ? (E.username = E.auth.slice(0, O), E.username = encodeURIComponent(decodeURIComponent(E.username)), E.password = E.auth.slice(O + 1), E.password = encodeURIComponent(decodeURIComponent(E.password))) : E.username = encodeURIComponent(decodeURIComponent(E.auth)), E.auth = E.password ? E.username + ":" + E.password : E.username), E.origin = E.protocol !== "file:" && d(E.protocol) && E.host ? E.protocol + "//" + E.host : "null", E.href = E.toString()
    }

    function P(v, h, g) {
        var y = this;
        switch (v) {
            case "query":
                typeof h == "string" && h.length && (h = (g || t.parse)(h)), y[v] = h;
                break;
            case "port":
                y[v] = h, e(h, y.protocol) ? h && (y.host = y.hostname + ":" + h) : (y.host = y.hostname, y[v] = "");
                break;
            case "hostname":
                y[v] = h, y.port && (h += ":" + y.port), y.host = h;
                break;
            case "host":
                y[v] = h, i.test(h) ? (h = h.split(":"), y.port = h.pop(), y.hostname = h.join(":")) : (y.hostname = h, y.port = "");
                break;
            case "protocol":
                y.protocol = h.toLowerCase(), y.slashes = !g;
                break;
            case "pathname":
            case "hash":
                if (h) {
                    var x = v === "pathname" ? "/" : "#";
                    y[v] = h.charAt(0) !== x ? x + h : h
                } else y[v] = h;
                break;
            case "username":
            case "password":
                y[v] = encodeURIComponent(h);
                break;
            case "auth":
                var T = h.indexOf(":");
                ~T ? (y.username = h.slice(0, T), y.username = encodeURIComponent(decodeURIComponent(y.username)), y.password = h.slice(T + 1), y.password = encodeURIComponent(decodeURIComponent(y.password))) : y.username = encodeURIComponent(decodeURIComponent(h))
        }
        for (var L = 0; L < u.length; L++) {
            var O = u[L];
            O[4] && (y[O[1]] = y[O[1]].toLowerCase())
        }
        return y.auth = y.password ? y.username + ":" + y.password : y.username, y.origin = y.protocol !== "file:" && d(y.protocol) && y.host ? y.protocol + "//" + y.host : "null", y.href = y.toString(), y
    }

    function w(v) {
        (!v || typeof v != "function") && (v = t.stringify);
        var h, g = this,
            y = g.host,
            x = g.protocol;
        x && x.charAt(x.length - 1) !== ":" && (x += ":");
        var T = x + (g.protocol && g.slashes || d(g.protocol) ? "//" : "");
        return g.username ? (T += g.username, g.password && (T += ":" + g.password), T += "@") : g.password ? (T += ":" + g.password, T += "@") : g.protocol !== "file:" && d(g.protocol) && !y && g.pathname !== "/" && (T += "@"), (y[y.length - 1] === ":" || i.test(g.hostname) && !g.port) && (y += ":"), T += y + g.pathname, h = typeof g.query == "object" ? v(g.query) : g.query, h && (T += h.charAt(0) !== "?" ? "?" + h : h), g.hash && (T += g.hash), T
    }
    return b.prototype = {
        set: P,
        toString: w
    }, b.extractProtocol = p, b.location = f, b.trimLeft = c, b.qs = t, ts = b, ts
}
var rs, Xl;

function vw() {
    if (Xl) return rs;
    Xl = 1;
    var e = Ve(),
        t = gw(),
        r = typeof navigator > "u" ? !1 : navigator.product === "ReactNative",
        n = Object.prototype.hasOwnProperty,
        o = {
            timeout: r ? 6e4 : 12e4
        };
    rs = function(c) {
        var u = typeof c == "string" ? e({
                url: c
            }, o) : e({}, o, c),
            l = t(u.url, {}, !0);
        return u.timeout = s(u.timeout), u.query && (l.query = e({}, l.query, a(u.query))), u.method = u.body && !u.method ? "POST" : (u.method || "GET").toUpperCase(), u.url = l.toString(i), u
    };

    function i(c) {
        var u = [];
        for (var l in c) n.call(c, l) && f(l, c[l]);
        return u.length ? u.join("&") : "";

        function f(d, p) {
            Array.isArray(p) ? p.forEach(function(m) {
                return f(d, m)
            }) : u.push([d, p].map(encodeURIComponent).join("="))
        }
    }

    function s(c) {
        if (c === !1 || c === 0) return !1;
        if (c.connect || c.socket) return c;
        var u = Number(c);
        return isNaN(u) ? s(o.timeout) : {
            connect: u,
            socket: u
        }
    }

    function a(c) {
        var u = {};
        for (var l in c) c[l] !== void 0 && (u[l] = c[l]);
        return u
    }
    return rs
}
var ns, Yl;

function yw() {
    if (Yl) return ns;
    Yl = 1;
    var e = /^https?:\/\//i;
    return ns = function(t) {
        if (!e.test(t.url)) throw new Error('"'.concat(t.url, '" is not a valid URL'))
    }, ns
}
var os, Jl;

function bw() {
    if (Jl) return os;
    Jl = 1;
    var e = /^(?:(?:(?:([^:\/#\?]+:)?(?:(?:\/\/)((?:((?:[^:@\/#\?]+)(?:\:(?:[^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((?:\/?(?:[^\/\?#]+\/+)*)(?:[^\?#]*)))?(\?[^#]+)?)(#.*)?/;
    return os = {
        regex: e,
        parse: function(t) {
            var r = e.exec(t);
            return r ? {
                protocol: (r[1] || "").toLowerCase() || void 0,
                hostname: (r[5] || "").toLowerCase() || void 0,
                port: r[6] || void 0
            } : {}
        }
    }, os
}
var is, Ql;

function _w() {
    if (Ql) return is;
    Ql = 1;
    var e = bw();
    return is = function(t, r, n) {
        if (t === r) return !0;
        var o = e.parse(t, !1, !0),
            i = e.parse(r, !1, !0),
            s = o.port | 0 || (o.protocol === "https" ? 443 : 80),
            a = i.port | 0 || (i.protocol === "https" ? 443 : 80),
            c = {
                proto: o.protocol === i.protocol,
                hostname: o.hostname === i.hostname,
                port: s === a
            };
        return c.proto && c.hostname && (c.port || n)
    }, is
}
var ss, Zl;

function ww() {
    if (Zl) return ss;
    Zl = 1;
    var e = function(r) {
            return r.replace(/^\s+|\s+$/g, "")
        },
        t = function(r) {
            return Object.prototype.toString.call(r) === "[object Array]"
        };
    return ss = function(r) {
        if (!r) return {};
        for (var n = Object.create(null), o = e(r).split(`
`), i = 0; i < o.length; i++) {
            var s = o[i],
                a = s.indexOf(":"),
                c = e(s.slice(0, a)).toLowerCase(),
                u = e(s.slice(a + 1));
            typeof n[c] > "u" ? n[c] = u : t(n[c]) ? n[c].push(u) : n[c] = [n[c], u]
        }
        return n
    }, ss
}
var as, eu;

function Ew() {
    if (eu) return as;
    eu = 1;

    function e() {
        this.readyState = 0
    }
    return e.prototype.open = function(t, r) {
        this._method = t, this._url = r, this._resHeaders = "", this.readyState = 1, this.onreadystatechange()
    }, e.prototype.abort = function() {
        this._controller && this._controller.abort()
    }, e.prototype.getAllResponseHeaders = function() {
        return this._resHeaders
    }, e.prototype.setRequestHeader = function(t, r) {
        this._headers = this._headers || {}, this._headers[t] = r
    }, e.prototype.send = function(t) {
        var r = this,
            n = this._controller = typeof AbortController == "function" && new AbortController,
            o = this.responseType !== "arraybuffer",
            i = {
                method: this._method,
                headers: this._headers,
                signal: n && n.signal,
                body: t
            };
        typeof window < "u" && (i.credentials = this.withCredentials ? "include" : "omit"), fetch(this._url, i).then(function(s) {
            return s.headers.forEach(function(a, c) {
                r._resHeaders += "".concat(c, ": ").concat(a, `\r
`)
            }), r.status = s.status, r.statusText = s.statusText, r.readyState = 3, o ? s.text() : s.arrayBuffer()
        }).then(function(s) {
            o ? r.responseText = s : r.response = s, r.readyState = 4, r.onreadystatechange()
        }).catch(function(s) {
            if (s.name === "AbortError") {
                r.onabort();
                return
            }
            r.onerror(s)
        })
    }, as = e, as
}
var cs, tu;

function Sw() {
    if (tu) return cs;
    tu = 1;
    var e = _w(),
        t = ww(),
        r = Ew(),
        n = function() {},
        o = typeof window > "u" ? void 0 : window,
        i = o ? "xhr" : "fetch",
        s = typeof XMLHttpRequest == "function" ? XMLHttpRequest : n,
        a = "withCredentials" in new s,
        c = typeof XDomainRequest > "u" ? void 0 : XDomainRequest,
        u = a ? s : c;
    return o || (s = r, u = r), cs = function(l, f) {
        var d = l.options,
            p = l.applyMiddleware("finalizeOptions", d),
            m = {},
            b = o && o.location && !e(o.location.href, p.url),
            P = l.applyMiddleware("interceptRequest", void 0, {
                adapter: i,
                context: l
            });
        if (P) {
            var w = setTimeout(f, 0, null, P),
                v = function() {
                    return clearTimeout(w)
                };
            return {
                abort: v
            }
        }
        var h = b ? new u : new s,
            g = o && o.XDomainRequest && h instanceof o.XDomainRequest,
            y = p.headers,
            x = p.timeout,
            T = !1,
            L = !1,
            O = !1;
        h.onerror = W, h.ontimeout = W, h.onabort = function() {
            I(!0), T = !0
        }, h.onprogress = function() {};
        var j = g ? "onload" : "onreadystatechange";
        if (h[j] = function() {
                M(), !(T || h.readyState !== 4 && !g) && h.status !== 0 && z()
            }, h.open(p.method, p.url, !0), h.withCredentials = !!p.withCredentials, y && h.setRequestHeader)
            for (var F in y) y.hasOwnProperty(F) && h.setRequestHeader(F, y[F]);
        else if (y && g) throw new Error("Headers cannot be set on an XDomainRequest object");
        return p.rawBody && (h.responseType = "arraybuffer"), l.applyMiddleware("onRequest", {
            options: p,
            adapter: i,
            request: h,
            context: l
        }), h.send(p.body || null), x && (m.connect = setTimeout(function() {
            return E("ETIMEDOUT")
        }, x.connect)), {
            abort: S
        };

        function S() {
            T = !0, h && h.abort()
        }

        function E(Z) {
            O = !0, h.abort();
            var te = new Error(Z === "ESOCKETTIMEDOUT" ? "Socket timed out on request to ".concat(p.url) : "Connection timed out on request to ".concat(p.url));
            te.code = Z, l.channels.error.publish(te)
        }

        function M() {
            x && (I(), m.socket = setTimeout(function() {
                return E("ESOCKETTIMEDOUT")
            }, x.socket))
        }

        function I(Z) {
            (Z || T || h.readyState >= 2 && m.connect) && clearTimeout(m.connect), m.socket && clearTimeout(m.socket)
        }

        function W(Z) {
            if (!L) {
                I(!0), L = !0, h = null;
                var te = Z || new Error("Network error while attempting to reach ".concat(p.url));
                te.isNetworkError = !0, te.request = p, f(te)
            }
        }

        function $() {
            var Z = h.status,
                te = h.statusText;
            if (g && Z === void 0) Z = 200;
            else {
                if (Z > 12e3 && Z < 12156) return W();
                Z = h.status === 1223 ? 204 : h.status, te = h.status === 1223 ? "No Content" : te
            }
            return {
                body: h.response || h.responseText,
                url: p.url,
                method: p.method,
                headers: g ? {} : t(h.getAllResponseHeaders()),
                statusCode: Z,
                statusMessage: te
            }
        }

        function z() {
            if (!(T || L || O)) {
                if (h.status === 0) {
                    W(new Error("Unknown XHR error"));
                    return
                }
                I(), L = !0, f(null, $())
            }
        }
    }, cs
}
var ls, ru;

function Rw() {
    return ru || (ru = 1, ls = Sw()), ls
}
var us, nu;

function Cw() {
    if (nu) return us;
    nu = 1;
    var e = dw(),
        t = hw(),
        r = vw(),
        n = yw(),
        o = Rw(),
        i = ["request", "response", "progress", "error", "abort"],
        s = ["processOptions", "validateOptions", "interceptRequest", "finalizeOptions", "onRequest", "onResponse", "onError", "onReturn", "onHeaders"];
    return us = function a() {
        var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
            u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : o,
            l = [],
            f = s.reduce(function(p, m) {
                return p[m] = p[m] || [], p
            }, {
                processOptions: [r],
                validateOptions: [n]
            });

        function d(p) {
            var m = i.reduce(function(x, T) {
                    return x[T] = e(), x
                }, {}),
                b = t(f),
                P = b("processOptions", p);
            b("validateOptions", P);
            var w = {
                    options: P,
                    channels: m,
                    applyMiddleware: b
                },
                v = null,
                h = m.request.subscribe(function(x) {
                    v = u(x, function(T, L) {
                        return y(T, L, x)
                    })
                });
            m.abort.subscribe(function() {
                h(), v && v.abort()
            });
            var g = b("onReturn", m, w);
            return g === m && m.request.publish(w), g;

            function y(x, T, L) {
                var O = x,
                    j = T;
                if (!O) try {
                    j = b("onResponse", T, L)
                } catch (F) {
                    j = null, O = F
                }
                O = O && b("onError", O, L), O ? m.error.publish(O) : j && m.response.publish(j)
            }
        }
        return d.use = function(m) {
            if (!m) throw new Error("Tried to add middleware that resolved to falsey value");
            if (typeof m == "function") throw new Error("Tried to add middleware that was a function. It probably expects you to pass options to it.");
            if (m.onReturn && f.onReturn.length > 0) throw new Error("Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event");
            return s.forEach(function(b) {
                m[b] && f[b].push(m[b])
            }), l.push(m), d
        }, d.clone = function() {
            return a(l)
        }, c.forEach(d.use), d
    }, us
}
var fs, ou;

function Tw() {
    return ou || (ou = 1, fs = Cw()), fs
}
var fr = {
        exports: {}
    },
    iu;

function Aw() {
    return iu || (iu = 1, typeof globalThis < "u" ? fr.exports = globalThis : typeof window < "u" ? fr.exports = window : typeof Bo < "u" ? fr.exports = Bo : typeof self < "u" ? fr.exports = self : fr.exports = {}), fr.exports
}
var ds, su;

function Ow() {
    if (su) return ds;
    su = 1;
    var e = Aw(),
        t = Ve();
    return ds = function() {
        var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            n = r.implementation || e.Observable;
        if (!n) throw new Error("`Observable` is not available in global scope, and no implementation was passed");
        return {
            onReturn: function(i, s) {
                return new n(function(a) {
                    return i.error.subscribe(function(c) {
                            return a.error(c)
                        }), i.progress.subscribe(function(c) {
                            return a.next(t({
                                type: "progress"
                            }, c))
                        }), i.response.subscribe(function(c) {
                            a.next(t({
                                type: "response"
                            }, c)), a.complete()
                        }), i.request.publish(s),
                        function() {
                            return i.abort.publish()
                        }
                })
            }
        }
    }, ds
}
var hs, au;

function Pw() {
    return au || (au = 1, hs = function(t) {
        return t != null && typeof t == "object" && Array.isArray(t) === !1
    }), hs
}
var ps, cu;

function xw() {
    if (cu) return ps;
    cu = 1;
    var e = Pw();

    function t(r) {
        return e(r) === !0 && Object.prototype.toString.call(r) === "[object Object]"
    }
    return ps = function(n) {
        var o, i;
        return !(t(n) === !1 || (o = n.constructor, typeof o != "function") || (i = o.prototype, t(i) === !1) || i.hasOwnProperty("isPrototypeOf") === !1)
    }, ps
}
var ms, lu;

function kw() {
    if (lu) return ms;
    lu = 1;

    function e(i) {
        "@babel/helpers - typeof";
        return e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(s) {
            return typeof s
        } : function(s) {
            return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s
        }, e(i)
    }
    var t = Ve(),
        r = xw(),
        n = ["boolean", "string", "number"],
        o = function(s) {
            return !!s.constructor && typeof s.constructor.isBuffer == "function" && s.constructor.isBuffer(s)
        };
    return ms = function() {
        return {
            processOptions: function(s) {
                var a = s.body;
                if (!a) return s;
                var c = typeof a.pipe == "function",
                    u = !c && !o(a) && (n.indexOf(e(a)) !== -1 || Array.isArray(a) || r(a));
                return u ? t({}, s, {
                    body: JSON.stringify(s.body),
                    headers: t({}, s.headers, {
                        "Content-Type": "application/json"
                    })
                }) : s
            }
        }
    }, ms
}
var gs, uu;

function Iw() {
    if (uu) return gs;
    uu = 1;
    var e = Ve();
    gs = function(r) {
        return {
            onResponse: function(o) {
                var i = o.headers["content-type"] || "",
                    s = r && r.force || i.indexOf("application/json") !== -1;
                return !o.body || !i || !s ? o : e({}, o, {
                    body: t(o.body)
                })
            },
            processOptions: function(o) {
                return e({}, o, {
                    headers: e({
                        Accept: "application/json"
                    }, o.headers)
                })
            }
        }
    };

    function t(r) {
        try {
            return JSON.parse(r)
        } catch (n) {
            throw n.message = "Failed to parsed response body as JSON: ".concat(n.message), n
        }
    }
    return gs
}
var vs, fu;

function Mw() {
    return fu || (fu = 1, vs = function() {
        return {
            onRequest: function(t) {
                if (t.adapter !== "xhr") return;
                var r = t.request,
                    n = t.context;
                "upload" in r && "onprogress" in r.upload && (r.upload.onprogress = o("upload")), "onprogress" in r && (r.onprogress = o("download"));

                function o(i) {
                    return function(s) {
                        var a = s.lengthComputable ? s.loaded / s.total * 100 : -1;
                        n.channels.progress.publish({
                            stage: i,
                            percent: a,
                            total: s.total,
                            loaded: s.loaded,
                            lengthComputable: s.lengthComputable
                        })
                    }
                }
            }
        }
    }), vs
}
var ys, du;

function Lw() {
    return du || (du = 1, ys = Mw()), ys
}
var co = {},
    lo = {
        exports: {}
    },
    hu;

function Nw() {
    return hu || (hu = 1, (function(e, t) {
        var r = typeof Reflect < "u" ? Reflect.construct : void 0,
            n = Object.defineProperty,
            o = Error.captureStackTrace;
        o === void 0 && (o = function(u) {
            var l = new Error;
            n(u, "stack", {
                configurable: !0,
                get: function() {
                    var d = l.stack;
                    return n(this, "stack", {
                        configurable: !0,
                        value: d,
                        writable: !0
                    }), d
                },
                set: function(d) {
                    n(u, "stack", {
                        configurable: !0,
                        value: d,
                        writable: !0
                    })
                }
            })
        });

        function i(c) {
            c !== void 0 && n(this, "message", {
                configurable: !0,
                value: c,
                writable: !0
            });
            var u = this.constructor.name;
            u !== void 0 && u !== this.name && n(this, "name", {
                configurable: !0,
                value: u,
                writable: !0
            }), o(this, this.constructor)
        }
        i.prototype = Object.create(Error.prototype, {
            constructor: {
                configurable: !0,
                value: i,
                writable: !0
            }
        });
        var s = (function() {
            function c(l, f) {
                return n(l, "name", {
                    configurable: !0,
                    value: f
                })
            }
            try {
                var u = function() {};
                if (c(u, "foo"), u.name === "foo") return c
            } catch {}
        })();

        function a(c, u) {
            if (u == null || u === Error) u = i;
            else if (typeof u != "function") throw new TypeError("super_ should be a function");
            var l;
            if (typeof c == "string") l = c, c = r !== void 0 ? function() {
                return r(u, arguments, this.constructor)
            } : function() {
                u.apply(this, arguments)
            }, s !== void 0 && (s(c, l), l = void 0);
            else if (typeof c != "function") throw new TypeError("constructor should be either a string or a function");
            c.super_ = c.super = u;
            var f = {
                constructor: {
                    configurable: !0,
                    value: c,
                    writable: !0
                }
            };
            return l !== void 0 && (f.name = {
                configurable: !0,
                value: l,
                writable: !0
            }), c.prototype = Object.create(u.prototype, f), c
        }
        t = e.exports = a, t.BaseError = i
    })(lo, lo.exports)), lo.exports
}
var pu;

function Dw() {
    if (pu) return co;
    pu = 1;
    var e = Nw(),
        t = Ve();

    function r(a) {
        var c = o(a);
        r.super.call(this, c.message), t(this, c)
    }

    function n(a) {
        var c = o(a);
        n.super.call(this, c.message), t(this, c)
    }

    function o(a) {
        var c = a.body,
            u = {
                response: a,
                statusCode: a.statusCode,
                responseBody: s(c, a)
            };
        return c.error && c.message ? (u.message = "".concat(c.error, " - ").concat(c.message), u) : c.error && c.error.description ? (u.message = c.error.description, u.details = c.error, u) : (u.message = c.error || c.message || i(a), u)
    }

    function i(a) {
        var c = a.statusMessage ? " ".concat(a.statusMessage) : "";
        return "".concat(a.method, "-request to ").concat(a.url, " resulted in HTTP ").concat(a.statusCode).concat(c)
    }

    function s(a, c) {
        var u = (c.headers["content-type"] || "").toLowerCase(),
            l = u.indexOf("application/json") !== -1;
        return l ? JSON.stringify(a, null, 2) : a
    }
    return e(r), e(n), co.ClientError = r, co.ServerError = n, co
}
var bs, mu;

function jw() {
    return mu || (mu = 1, bs = []), bs
}
var _s, gu;

function Hw() {
    if (gu) return _s;
    gu = 1;
    var e = Tw(),
        t = Ve(),
        r = Ow(),
        n = kw(),
        o = Iw(),
        i = Lw(),
        s = Hn(),
        a = s.Observable,
        c = Dw(),
        u = c.ClientError,
        l = c.ServerError,
        f = {
            onResponse: function(v) {
                if (v.statusCode >= 500) throw new l(v);
                if (v.statusCode >= 400) throw new u(v);
                return v
            }
        },
        d = {
            onResponse: function(v) {
                var h = v.headers["x-sanity-warning"],
                    g = Array.isArray(h) ? h : [h];
                return g.filter(Boolean).forEach(function(y) {
                    return console.warn(y)
                }), v
            }
        },
        p = jw(),
        m = p.concat([d, n(), o(), i(), f, r({
            implementation: a
        })]),
        b = e(m);

    function P(w) {
        var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : b;
        return v(t({
            maxRedirects: 0
        }, w))
    }
    return P.defaultRequester = b, P.ClientError = u, P.ServerError = l, _s = P, _s
}
var ws, vu;

function Bw() {
    if (vu) return ws;
    vu = 1;
    var e = Ve(),
        t = "X-Sanity-Project-ID";
    return ws = function(r) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            o = {},
            i = n.token || r.token;
        i && (o.Authorization = "Bearer ".concat(i)), !n.useGlobalApi && !r.useProjectHostname && r.projectId && (o[t] = r.projectId);
        var s = !!(typeof n.withCredentials > "u" ? r.token || r.withCredentials : n.withCredentials),
            a = typeof n.timeout > "u" ? r.timeout : n.timeout;
        return e({}, n, {
            headers: e({}, o, n.headers || {}),
            timeout: typeof a > "u" ? 300 * 1e3 : a,
            proxy: n.proxy || r.proxy,
            json: !0,
            withCredentials: s
        })
    }, ws
}
var Es = {},
    Ss, yu;

function rh() {
    if (yu) return Ss;
    yu = 1;
    var e = "https://docs.sanity.io/help/";
    return Ss = function(r) {
        return e + r
    }, Ss
}
var fn = {},
    Rs, bu;

function qw() {
    return bu || (bu = 1, Rs = function(e) {
        var t = !1,
            r;
        return function() {
            return t || (r = e.apply(void 0, arguments), t = !0), r
        }
    }), Rs
}
var _u;

function Uw() {
    if (_u) return fn;
    _u = 1;
    var e = rh(),
        t = qw(),
        r = function(o) {
            return t(function() {
                for (var i, s = arguments.length, a = new Array(s), c = 0; c < s; c++) a[c] = arguments[c];
                return (i = console).warn.apply(i, [o.join(" ")].concat(a))
            })
        };
    return fn.printCdnWarning = r(["You are not using the Sanity CDN. That means your data is always fresh, but the CDN is faster and", "cheaper. Think about it! For more info, see ".concat(e("js-client-cdn-configuration"), "."), "To hide this warning, please set the `useCdn` option to either `true` or `false` when creating", "the client."]), fn.printBrowserTokenWarning = r(["You have configured Sanity client to use a token in the browser. This may cause unintentional security issues.", "See ".concat(e("js-client-browser-token"), " for more information and how to hide this warning.")]), fn.printNoApiVersionSpecifiedWarning = r(["Using the Sanity client without specifying an API version is deprecated.", "See ".concat(e("js-client-api-version"))]), fn
}
var wu;

function Fw() {
    return wu || (wu = 1, (function(e) {
        var t = Ve(),
            r = rh(),
            n = Ar(),
            o = Uw(),
            i = "apicdn.sanity.io",
            s = {
                apiHost: "https://api.sanity.io",
                apiVersion: "1",
                useProjectHostname: !0,
                isPromiseAPI: !0
            },
            a = ["localhost", "127.0.0.1", "0.0.0.0"],
            c = function(l) {
                return a.indexOf(l) !== -1
            };
        e.defaultConfig = s, e.initConfig = function(u, l) {
            var f = t({}, l, u);
            f.apiVersion || o.printNoApiVersionSpecifiedWarning();
            var d = t({}, s, f),
                p = d.useProjectHostname;
            if (typeof Promise > "u") {
                var m = r("js-client-promise-polyfill");
                throw new Error("No native Promise-implementation found, polyfill needed - see ".concat(m))
            }
            if (p && !d.projectId) throw new Error("Configuration must contain `projectId`");
            var b = typeof window < "u" && window.location && window.location.hostname,
                P = b && c(window.location.hostname);
            b && P && d.token && d.ignoreBrowserTokenWarning !== !0 ? o.printBrowserTokenWarning() : typeof d.useCdn > "u" && o.printCdnWarning(), p && n.projectId(d.projectId), d.dataset && n.dataset(d.dataset), "requestTagPrefix" in d && (d.requestTagPrefix = d.requestTagPrefix ? n.requestTag(d.requestTagPrefix).replace(/\.+$/, "") : void 0), d.apiVersion = "".concat(d.apiVersion).replace(/^v/, ""), d.isDefaultApi = d.apiHost === s.apiHost, d.useCdn = !!d.useCdn && !d.withCredentials, e.validateApiVersion(d.apiVersion);
            var w = d.apiHost.split("://", 2),
                v = w[0],
                h = w[1],
                g = d.isDefaultApi ? i : h;
            return d.useProjectHostname ? (d.url = "".concat(v, "://").concat(d.projectId, ".").concat(h, "/v").concat(d.apiVersion), d.cdnUrl = "".concat(v, "://").concat(d.projectId, ".").concat(g, "/v").concat(d.apiVersion)) : (d.url = "".concat(d.apiHost, "/v").concat(d.apiVersion), d.cdnUrl = d.url), d
        }, e.validateApiVersion = function(l) {
            if (!(l === "1" || l === "X")) {
                var f = new Date(l),
                    d = /^\d{4}-\d{2}-\d{2}$/.test(l) && f instanceof Date && f.getTime() > 0;
                if (!d) throw new Error("Invalid API version string, expected `1` or date in format `YYYY-MM-DD`")
            }
        }
    })(Es)), Es
}
var Cs, Eu;

function $w() {
    if (Eu) return Cs;
    Eu = 1;

    function e(L, O) {
        var j = Object.keys(L);
        if (Object.getOwnPropertySymbols) {
            var F = Object.getOwnPropertySymbols(L);
            O && (F = F.filter(function(S) {
                return Object.getOwnPropertyDescriptor(L, S).enumerable
            })), j.push.apply(j, F)
        }
        return j
    }

    function t(L) {
        for (var O = 1; O < arguments.length; O++) {
            var j = arguments[O] != null ? arguments[O] : {};
            O % 2 ? e(Object(j), !0).forEach(function(F) {
                r(L, F, j[F])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(L, Object.getOwnPropertyDescriptors(j)) : e(Object(j)).forEach(function(F) {
                Object.defineProperty(L, F, Object.getOwnPropertyDescriptor(j, F))
            })
        }
        return L
    }

    function r(L, O, j) {
        return O in L ? Object.defineProperty(L, O, {
            value: j,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : L[O] = j, L
    }
    var n = Ve(),
        o = Hn(),
        i = o.Observable,
        s = o.map,
        a = o.filter,
        c = Ha(),
        u = eh(),
        l = iw(),
        f = sw(),
        d = aw(),
        p = lw(),
        m = uw(),
        b = fw(),
        P = Hw(),
        w = Bw(),
        v = Fw(),
        h = v.defaultConfig,
        g = v.initConfig,
        y = Ar(),
        x = function(O) {
            return O.toPromise()
        };

    function T() {
        var L = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : h;
        if (!(this instanceof T)) return new T(L);
        if (this.config(L), this.assets = new p(this), this.datasets = new f(this), this.projects = new d(this), this.users = new m(this), this.auth = new b(this), this.clientConfig.isPromiseAPI) {
            var O = n({}, this.clientConfig, {
                isPromiseAPI: !1
            });
            this.observable = new T(O)
        }
    }
    return n(T.prototype, l), n(T.prototype, {
        clone: function() {
            return new T(this.config())
        },
        config: function(O) {
            if (typeof O > "u") return n({}, this.clientConfig);
            if (this.clientConfig && this.clientConfig.allowReconfigure === !1) throw new Error("Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client");
            if (this.observable) {
                var j = n({}, O, {
                    isPromiseAPI: !1
                });
                this.observable.config(j)
            }
            return this.clientConfig = g(O, this.clientConfig || {}), this
        },
        withConfig: function(O) {
            return new T(t(t({}, this.config()), O))
        },
        getUrl: function(O) {
            var j = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
                F = j ? this.clientConfig.cdnUrl : this.clientConfig.url;
            return "".concat(F, "/").concat(O.replace(/^\//, ""))
        },
        isPromiseAPI: function() {
            return this.clientConfig.isPromiseAPI
        },
        _requestObservable: function(O) {
            var j = this,
                F = O.url || O.uri,
                S = typeof O.canUseCdn > "u" ? ["GET", "HEAD"].indexOf(O.method || "GET") >= 0 && F.indexOf("/data/") === 0 : O.canUseCdn,
                E = this.clientConfig.useCdn && S,
                M = O.tag && this.clientConfig.requestTagPrefix ? [this.clientConfig.requestTagPrefix, O.tag].join(".") : O.tag || this.clientConfig.requestTagPrefix;
            M && (O.query = t({
                tag: y.requestTag(M)
            }, O.query));
            var I = w(this.clientConfig, n({}, O, {
                url: this.getUrl(F, E)
            }));
            return new i(function(W) {
                return P(I, j.clientConfig.requester).subscribe(W)
            })
        },
        request: function(O) {
            var j = this._requestObservable(O).pipe(a(function(F) {
                return F.type === "response"
            }), s(function(F) {
                return F.body
            }));
            return this.isPromiseAPI() ? x(j) : j
        }
    }), T.Patch = c, T.Transaction = u, T.ClientError = P.ClientError, T.ServerError = P.ServerError, T.requester = P.defaultRequester, Cs = T, Cs
}
var Vw = $w();
const Su = Kd(Vw),
    Ru = e => {
        const t = {
            ...e
        };
        let r = Su(t);
        return {
            client: r,
            config: t,
            fetch: (...n) => r.fetch(...n),
            setToken(n) {
                t.token = n, r = Su(t)
            }
        }
    },
    Ww = (e = "default") => {
        const t = $e();
        if (t._sanity?.[e]) return t._sanity[e];
        t._sanity = t._sanity || {};
        const r = jn(),
            {
                additionalClients: n = {},
                ...o
            } = jo(r.sanity, r.public.sanity);
        return !o.disableSmartCdn && t.$preview && (o.useCdn = !1), e === "default" ? (t._sanity.default = Ru(o), t._sanity.default) : (t._sanity[e] = Ru(jo(n[e], o)), t._sanity[e])
    },
    zw = nt(() => {
        const e = Ww(),
            t = q_(e.config);

        function r(n) {
            return t.image(n)
        }
        return {
            provide: {
                urlFor: r
            }
        }
    }),
    mt = {
        addEventListeners(e, t, r) {
            for (let n = 0, o = t.length; n < o; n++) e.addEventListener(t[n], r, {
                passive: !1
            })
        },
        removeEventListeners(e, t, r) {
            for (let n = 0, o = t.length; n < o; n++) e.removeEventListener(t[n], r, {
                passive: !1
            })
        },
        emitEvent: function(e, t, r) {
            if (e.componentInstance) e.componentInstance.$emit(t, r);
            else {
                let n = new window.CustomEvent(t, {
                    detail: r
                });
                e.el.dispatchEvent(n)
            }
        }
    },
    ca = ["mousedown", "touchstart"],
    la = ["mousemove", "touchmove"],
    ua = ["mouseup", "touchend"],
    Cu = function(e, t, r) {
        let n = e,
            o = !0,
            i = window;
        typeof t.value == "boolean" ? o = t.value : typeof t.value == "object" ? (typeof t.value.target == "string" ? (n = e.querySelector(t.value.target), n || console.error("There is no element with the current target value.")) : typeof t.value.target < "u" && console.error(`The parameter "target" should be either 'undefined' or 'string'.`), typeof t.value.container == "string" ? (i = document.querySelector(t.value.container), i || console.error("There is no element with the current container value.")) : typeof t.value.container < "u" && console.error(`The parameter "container" should be be either 'undefined' or 'string'.`), typeof t.value.active == "boolean" ? o = t.value.active : typeof t.value.active < "u" && console.error(`The parameter "active" value should be either 'undefined', 'true' or 'false'.`)) : typeof t.value < "u" && console.error("The passed value should be either 'undefined', 'true' or 'false' or 'object'.");
        const s = function(c, u) {
                i === window ? window.scrollBy(c, u) : (i.scrollLeft += c, i.scrollTop += u)
            },
            a = function() {
                let c, u, l, f = !1;
                n.md = function(d) {
                    const p = d instanceof window.MouseEvent,
                        m = p ? d.pageX : d.touches[0].pageX,
                        b = p ? d.pageY : d.touches[0].pageY,
                        P = document.elementFromPoint(m - window.pageXOffset, b - window.pageYOffset),
                        w = t.arg === "nochilddrag",
                        v = t.modifiers.noleft,
                        h = t.modifiers.noright,
                        g = t.modifiers.nomiddle,
                        y = t.modifiers.noback,
                        x = t.modifiers.noforward,
                        T = t.arg === "firstchilddrag",
                        L = P === n,
                        O = P === n.firstChild,
                        j = w ? typeof P?.dataset.dragscroll < "u" : typeof P?.dataset.noDragscroll > "u";
                    if (!(!L && (!j || T && !O)) && !(d.button === 0 && v)) {
                        if (d.button === 1 && g || d.button === 2 && h || d.button === 3 && y || d.button === 4 && x) return;
                        l = 1, c = p ? d.clientX : d.touches[0].clientX, u = p ? d.clientY : d.touches[0].clientY
                    }
                }, n.mu = function(d) {
                    l = 0, f && mt.emitEvent(r, "dragscrollend"), f = !1
                }, n.mm = function(d) {
                    const p = d instanceof window.MouseEvent;
                    let m, b;
                    if (l) {
                        d.preventDefault(), f || mt.emitEvent(r, "dragscrollstart"), f = !0;
                        const P = n.scrollLeft + n.clientWidth >= n.scrollWidth || n.scrollLeft === 0,
                            w = n.scrollTop + n.clientHeight >= n.scrollHeight || n.scrollTop === 0;
                        m = -c + (c = p ? d.clientX : d.touches[0].clientX), b = -u + (u = p ? d.clientY : d.touches[0].clientY), t.modifiers.pass ? (n.scrollLeft -= t.modifiers.y ? -0 : m, n.scrollTop -= t.modifiers.x ? -0 : b, n === document.body && (n.scrollLeft -= t.modifiers.y ? -0 : m, n.scrollTop -= t.modifiers.x ? -0 : b), (P || t.modifiers.y) && s(-m, 0), (w || t.modifiers.x) && s(0, -b)) : (t.modifiers.x && (b = -0), t.modifiers.y && (m = -0), n.scrollLeft -= m, n.scrollTop -= b, n === document.body && (n.scrollLeft -= m, n.scrollTop -= b)), mt.emitEvent(r, "dragscrollmove", {
                            deltaX: -m,
                            deltaY: -b
                        })
                    }
                }, mt.addEventListeners(n, ca, n.md), mt.addEventListeners(window, ua, n.mu), mt.addEventListeners(window, la, n.mm)
            };
        o ? document.readyState === "complete" ? a() : window.addEventListener("load", a) : (mt.removeEventListeners(n, ca, n.md), mt.removeEventListeners(window, ua, n.mu), mt.removeEventListeners(window, la, n.mm))
    },
    Gw = e => {
        const t = e;
        mt.removeEventListeners(t, ca, t.md), mt.removeEventListeners(window, ua, t.mu), mt.removeEventListeners(window, la, t.mm)
    },
    nh = {
        mounted: (e, t, r) => Cu(e, t, r),
        updated: (e, t, r) => {
            JSON.stringify(t.value) !== JSON.stringify(t.oldValue) && Cu(e, t, r)
        },
        unmounted: e => Gw(e)
    },
    Kw = {
        install(e) {
            e.directive("dragscroll", nh)
        }
    };
typeof window < "u" && window.Vue && (window.VueDragscroll = nh);
const Xw = nt(e => {
    e.vueApp.use(Kw)
});
var Yw = Object.defineProperty,
    Tu = Object.getOwnPropertySymbols,
    Jw = Object.prototype.hasOwnProperty,
    Qw = Object.prototype.propertyIsEnumerable,
    Au = (e, t, r) => t in e ? Yw(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[t] = r,
    Ou = (e, t) => {
        for (var r in t || (t = {})) Jw.call(t, r) && Au(e, r, t[r]);
        if (Tu)
            for (var r of Tu(t)) Qw.call(t, r) && Au(e, r, t[r]);
        return e
    },
    Zw = (e, t) => {
        const r = e.__vccOpts || e;
        for (const [n, o] of t) r[n] = o;
        return r
    };
const e0 = Tr({
        props: {
            vertical: {
                type: Boolean,
                default: !1
            },
            direction: {
                type: String,
                default: "normal"
            },
            duration: {
                type: Number,
                default: 20
            },
            delay: {
                type: Number,
                default: 0
            },
            loop: {
                type: Number,
                default: 0
            },
            clone: {
                type: Boolean,
                default: !1
            },
            gradient: {
                type: Boolean,
                default: !1
            },
            gradientColor: {
                type: Array,
                default: [255, 255, 255]
            },
            gradientWidth: {
                type: String
            },
            gradientLength: {
                type: String
            },
            pauseOnHover: {
                type: Boolean,
                default: !1
            },
            pauseOnClick: {
                type: Boolean,
                default: !1
            }
        },
        emits: ["onComplete", "onLoopComplete", "onPause", "onResume"],
        setup(e, {
            emit: t
        }) {
            const r = Ce(0),
                n = Ce("100%"),
                o = Ce("100%"),
                i = Ce(0),
                s = Ce(!1),
                a = Ce(0),
                c = Ce(0),
                u = Ce(0),
                l = Ce(0),
                f = Ce(0),
                d = Ce(null),
                p = Ce("200px"),
                m = Ce(!1),
                b = Ce(null),
                P = Ce(null),
                w = async () => {
                    await v(), i.value++
                }, v = async () => {
                    e.vertical && (s.value = !0), setInterval(() => {
                        if (n.value = "0%", o.value = "0%", b.value !== null && P.value !== null)
                            if (b.value && P.value)
                                if (e.vertical && "clientHeight" in b.value && "clientHeight" in P.value) {
                                    l.value = b.value.clientHeight, u.value = P.value.clientHeight;
                                    const j = Math.ceil(u.value / l.value);
                                    return r.value = isFinite(j) ? j : 0, s.value = !1, r.value
                                } else if (!e.vertical && "clientWidth" in b.value && "clientWidth" in P.value) {
                            c.value = b.value.clientWidth, a.value = P.value.clientWidth;
                            const j = Math.ceil(a.value / c.value);
                            return r.value = isFinite(j) ? j : 0, r.value
                        } else return n.value = "100%", o.value = "100%", 0;
                        else return n.value = "100%", o.value = "100%", 0;
                        else return n.value = "100%", o.value = "100%", 0
                    }, 100)
                };
            rr(c, async () => {
                e.clone && w()
            }), rr(a, async () => {
                e.clone && w()
            });
            const h = () => {
                    e.pauseOnHover && t("onPause")
                },
                g = () => {
                    e.pauseOnHover && t("onResume")
                },
                y = () => {
                    e.pauseOnClick && t("onPause")
                },
                x = () => {
                    e.pauseOnClick && t("onResume")
                },
                T = tt(() => {
                    const j = {
                            "--duration": `${e.duration}s`,
                            "--delay": `${e.delay}s`,
                            "--direction": `${e.direction}`,
                            "--pauseOnHover": `${e.pauseOnHover?"paused":"running"}`,
                            "--pauseOnClick": `${e.pauseOnClick?"paused":"running"}`,
                            "--pauseAnimation": `${s.value?"paused":"running"}`,
                            "--loops": `${e.loop===0?"infinite":e.loop}`,
                            "--gradient-color": `rgba(${e.gradientColor[0]}, ${e.gradientColor[1]}, ${e.gradientColor[2]}, 1), rgba(${e.gradientColor[0]}, ${e.gradientColor[1]}, ${e.gradientColor[2]}, 0)`,
                            "--gradient-length": `${p.value}`,
                            "--min-width": `${n.value}`,
                            "--min-height": `${o.value}`
                        },
                        F = {
                            "--orientation": "scrollX",
                            orientation: "horizontal"
                        };
                    return e.vertical && (F["--orientation"] = "scrollY"), Ou(Ou({}, j), F)
                }),
                L = tt(() => !!e.gradient),
                O = async () => {
                    e.vertical ? (o.value = "100%", n.value = "auto") : (o.value = "auto", n.value = "100%"), e.gradient && (e.gradientWidth ? (console.warn("The `gradientWidth` prop has been deprecated and will be removed in a future release. Please use `gradientLength` instead."), p.value = e.gradientWidth) : e.gradientLength && (p.value = e.gradientLength)), e.clone && (await v(), w()), m.value = !0
                };
            return ei(async () => {
                O(), d.value = setInterval(() => {
                    f.value++, e.loop !== 0 && f.value === e.loop && (t("onComplete"), clearInterval(d.value)), t("onLoopComplete")
                }, e.duration * 1e3)
            }), Zr(() => {
                clearInterval(d.value)
            }), {
                ready: m,
                contentWidth: c,
                containerWidth: a,
                contentHeight: l,
                containerHeight: u,
                loopCounter: f,
                loopInterval: d,
                minWidth: n,
                minHeight: o,
                marqueeContent: b,
                marqueeOverlayContainer: P,
                componentKey: i,
                showGradient: L,
                cloneAmount: r,
                ForcesUpdate: w,
                checkForClone: v,
                setupMarquee: O,
                getCurrentStyle: T,
                hoverStarted: h,
                hoverEnded: g,
                mouseDown: y,
                mouseUp: x
            }
        }
    }),
    t0 = {
        class: "transparent-overlay",
        ref: "marqueeOverlayContainer",
        "aria-hidden": !0
    },
    r0 = {
        class: "marquee",
        ref: "marqueeContent"
    },
    n0 = {
        class: "marquee",
        "aria-hidden": !0
    };

function o0(e, t, r, n, o, i) {
    return e.ready ? (le(), ve("div", {
        class: lt(["vue3-marquee", {
            vertical: e.vertical,
            horizontal: !e.vertical
        }]),
        style: Er(e.getCurrentStyle),
        key: e.componentKey,
        onMouseenter: t[0] || (t[0] = (...s) => e.hoverStarted && e.hoverStarted(...s)),
        onMouseleave: t[1] || (t[1] = (...s) => e.hoverEnded && e.hoverEnded(...s)),
        onMousedown: t[2] || (t[2] = (...s) => e.mouseDown && e.mouseDown(...s)),
        onMouseup: t[3] || (t[3] = (...s) => e.mouseUp && e.mouseUp(...s))
    }, [Pt("div", t0, null, 512), e.showGradient ? (le(), ve("div", {
        key: 0,
        "aria-hidden": !0,
        class: lt(["overlay", {
            vertical: e.vertical,
            horizontal: !e.vertical
        }])
    }, null, 2)) : ct("", !0), Pt("div", r0, [fo(e.$slots, "default")], 512), Pt("div", n0, [fo(e.$slots, "default")]), (le(!0), ve(ke, null, Ms(e.cloneAmount, s => (le(), ve("div", {
        "aria-hidden": !0,
        class: "marquee cloned",
        key: s
    }, [fo(e.$slots, "default")]))), 128))], 38)) : ct("", !0)
}
var i0 = Zw(e0, [
    ["render", o0]
]);

function s0(e, t) {
    const r = Object.assign({}, {
        name: "Vue3Marquee"
    }, t);
    e.component(`${r.name}`, i0)
}
const a0 = {
        version: "3.2.1",
        install: s0
    },
    c0 = nt(e => {
        e.vueApp.use(a0)
    });
var l0 = (e, t) => {
    const r = e.__vccOpts || e;
    for (const [n, o] of t) r[n] = o;
    return r
};
const u0 = {
        name: "VueImageZoomer",
        emits: ["onZoom", "offZoom", "regularLoaded", "zoomLoaded", "zoomLoading"],
        directives: {
            clickOutside: {
                mounted(e, t) {
                    e.clickOutsideEvent = function(r) {
                        e == r.target || e.contains(r.target) || t.value(r, e)
                    }, document.body.addEventListener("click", e.clickOutsideEvent)
                },
                unmounted(e) {
                    document.body.removeEventListener("click", e.clickOutsideEvent)
                }
            }
        },
        data() {
            return {
                touch: !1,
                zoomed: !1,
                x: 0,
                y: 0,
                touchPosition: 0,
                origX: 0,
                origY: 0,
                offsetLeft: 0,
                offsetTop: 0,
                zoomWidth: 0,
                zoomHeight: 0,
                options: {
                    zoomAmount: 0,
                    zoom: !1,
                    zoomWebp: !1
                },
                loaded: !1,
                loading: !1,
                webp_supported: !1,
                cx: 0,
                cy: 0,
                showSlot: !0
            }
        },
        props: {
            regular: String,
            regularWebp: String,
            zoom: String,
            zoomWebp: String,
            imgClass: {
                type: String,
                default: ""
            },
            alt: String,
            zoomAmount: {
                type: Number,
                default: 0
            },
            clickZoom: Boolean,
            hoverMessage: {
                type: String,
                default: '<span class="vh--icon">&#9906;</span> Hover to zoom'
            },
            touchMessage: {
                type: String,
                default: '<span class="vh--icon">&#9906;</span> Tap to zoom'
            },
            clickMessage: {
                type: String,
                default: '<span class="vh--icon">&#9906;</span> Click to zoom'
            },
            closePos: {
                type: String,
                default: "top-left"
            },
            messagePos: {
                type: String,
                default: "bottom"
            },
            showMessage: {
                type: Boolean,
                default: !0
            },
            showMessageTouch: {
                type: Boolean,
                default: !0
            },
            tapToClose: Boolean,
            breakpoints: Array,
            touchZoomPos: {
                type: Array,
                default () {
                    return [.5, .5]
                }
            },
            imgWidth: Number,
            imgHeight: Number,
            lazyload: Boolean,
            rightClick: {
                type: Boolean,
                default: !0
            }
        },
        watch: {
            propChanges() {
                this.get_options()
            }
        },
        computed: {
            propChanges() {
                return `${this.breakpoints}|${this.regular}|${this.regularWebp}|${this.zoom}|${this.zoomAmount}|${this.zoomWebp}|${this.lazyload}`
            }
        },
        mounted() {
            this.check_webp_feature("lossy", (e, t) => {
                t && (this.webp_supported = !0)
            }), this.get_options(), ("ontouchstart" in window || navigator.msMaxTouchPoints) && (this.touch = !0), this.touchLogic()
        },
        created() {
            window.addEventListener("resize", this.debounce(() => {
                this.resize()
            }, 500))
        },
        unmounted() {
            window.removeEventListener("resize", this.resize())
        },
        methods: {
            async touchLogic() {
                await Qr();
                let e, t, r = !1;
                this.$refs["vue-hover-zs"].addEventListener("touchstart", n => {
                    if (this.zoomed) {
                        n.cancelable && n.preventDefault();
                        let o = n.changedTouches[0];
                        e = o.pageX - this.cx, t = o.pageY - this.cy
                    }
                }), this.$refs["vue-hover-zs"].addEventListener("touchmove", n => {
                    if (this.zoomed) {
                        let o = n.changedTouches[0];
                        this.x = o.pageX - e, this.y = o.pageY - t, o.pageX - e <= this.origX - this.zoomWidth && (this.x = this.origX - this.zoomWidth), o.pageX - e >= 0 && (this.x = -1), o.pageY - t <= this.origY - this.options.zoomAmount * this.origY && (this.y = this.origY - this.options.zoomAmount * this.origY), o.pageY - t >= 0 && (this.y = -1), this.touchPosition = "translate3d(" + this.x + "px," + this.y + "px,0)", r = !0
                    }
                }), this.$refs["vue-hover-zs"].addEventListener("touchend", n => {
                    if (this.zoomed) {
                        let o = n.changedTouches[0];
                        this.cx = o.pageX - e, this.cy = o.pageY - t, !r && this.tapToClose && (this.zoomed = !1, this.$emit("offZoom")), r = !1
                    }
                })
            },
            debounce(e, t) {
                let r;
                return (...n) => {
                    const o = this;
                    clearTimeout(r), r = setTimeout(() => e.apply(o, n), t)
                }
            },
            get_options() {
                this.options.zoomAmount = this.zoomAmount, this.options.zoom = this.zoom, this.options.zoomWebp = this.zoomWebp, this.zoom || (this.options.zoom = this.regular, this.options.zoomAmount = 2), !this.zoomWebp && this.regularWebp && (this.options.zoomWebp = this.regularWebp, this.options.zoomAmount = 2), this.resize()
            },
            resize() {
                this.zoomed = !1, this.loaded = !1
            },
            check_webp_feature(e, t) {
                let r = {
                        lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"
                    },
                    n = new Image;
                n.onload = () => {
                    let o = n.width > 0 && n.height > 0;
                    t(e, o)
                }, n.onerror = () => {
                    t(e, !1)
                }, n.src = "data:image/webp;base64," + r[e]
            },
            loadImage(e, t) {
                const r = new Image;
                r.onload = t, r.src = e
            },
            loadZoom() {
                this.offset(), this.options.zoomAmount != 0 && (this.zoomWidth = this.origX * this.options.zoomAmount, this.zoomHeight = this.origY * this.options.zoomAmount, this.touch && this.mobilePos()), this.loaded ? (this.zoomed = !0, this.options.zoomAmount == 0 && (this.options.zoomAmount = this.zoomWidth / this.origX)) : this.zoomLoad()
            },
            zoomLoad() {
                (!this.clickZoom || this.touch) && (this.loading = !0, this.$emit("zoomLoading"));
                let e = this.options.zoom;
                this.breakpoints && this.breakpoints.forEach(t => {
                    window.innerWidth >= t.width && (t.zoom ? e = t.zoom : e = t.regular)
                }), this.webp_supported && this.options.zoomWebp && (e = this.options.zoomWebp, this.breakpoints && this.breakpoints.forEach(t => {
                    window.innerWidth >= t.width && (t.zoomWebp ? e = t.zoomWebp : e = t.regularWebp)
                })), this.loadImage(e, t => {
                    this.options.zoomAmount == 0 && (this.zoomWidth = t.target.width, this.zoomHeight = t.target.height, this.options.zoomAmount = t.target.width / this.origX), this.loaded = !0, this.loading = !1, this.$emit("zoomLoaded"), (!this.clickZoom || this.touch) && (this.zoomed = !0, this.mobilePos())
                })
            },
            isZoom(e, t) {
                (t == "hover" && !this.clickZoom && !this.touch || t == "click" && (this.clickZoom || this.touch) || typeof e == "object") && (this.zoomed = !1, e == !0 ? (this.loadZoom(), this.$emit("onZoom")) : this.$emit("offZoom"))
            },
            mobilePos() {
                let e = (this.zoomWidth - this.origX) * this.touchZoomPos[0],
                    t = (this.zoomHeight - this.origY) * this.touchZoomPos[1];
                (this.touchZoomPos[0] > 1 || this.touchZoomPos[0] < 0 || this.touchZoomPos[1] > 1 || this.touchZoomPos[1] < 0) && (e = 0, t = 0), this.cx = -e, this.cy = -t, this.x = -e, this.y = -t, this.touchPosition = "translate3d(-" + e + "px,-" + t + "px,0)"
            },
            offset() {
                this.origX = parseFloat(this.$refs["vue-hover-zs"].offsetWidth), this.origY = parseFloat(this.$refs["vue-hover-zs"].offsetHeight)
            },
            mousePos(e) {
                this.offsetLeft = window.pageXOffset + this.$refs["vue-hover-zs"].getBoundingClientRect().left, this.offsetTop = window.pageYOffset + this.$refs["vue-hover-zs"].getBoundingClientRect().top, !this.touch && !this.loading && (this.loaded ? (this.x = (e.pageX - this.offsetLeft) * (this.options.zoomAmount - 1), this.y = (e.pageY - this.offsetTop) * (this.options.zoomAmount - 1)) : (this.offset(), this.zoomLoad()))
            }
        }
    },
    f0 = {
        class: "vh--outer vh--rel"
    },
    d0 = ["srcset", "media"],
    h0 = ["srcset", "media"],
    p0 = ["srcset"],
    m0 = ["loading", "src", "alt", "width", "height"],
    g0 = {
        key: 0
    },
    v0 = ["srcset", "media"],
    y0 = ["srcset", "media"],
    b0 = ["srcset", "media"],
    _0 = ["srcset", "media"],
    w0 = ["src"],
    E0 = ["src"],
    S0 = ["src"],
    R0 = ["innerHTML"],
    C0 = ["innerHTML"],
    T0 = ["innerHTML"],
    A0 = {
        key: 1,
        class: "vh--loading-o vh--abs vh--flex vh--jc vh--ai"
    },
    O0 = Pt("div", {
        class: "vh--loading",
        innerHTML: "◠"
    }, null, -1),
    P0 = [O0];

function x0(e, t, r, n, o, i) {
    const s = Ap("click-outside");
    return le(), ve(ke, null, [o.showSlot && !r.lazyload ? fo(e.$slots, "default", {
        key: 0
    }) : ct("", !0), tp((le(), ve("div", f0, [Pt("div", {
        class: lt(["vh--holder vh--rel vh--flex vh--jc", {
            "vh--no-click": !r.rightClick
        }]),
        onMouseenter: t[1] || (t[1] = a => i.isZoom(!0, "hover")),
        onMouseleave: t[2] || (t[2] = a => i.isZoom(!1, "hover")),
        onMousemove: t[3] || (t[3] = (...a) => i.mousePos && i.mousePos(...a)),
        ref: "vue-hover-zs",
        onClick: t[4] || (t[4] = a => i.isZoom(!o.zoomed, "click"))
    }, [Pt("picture", {
        class: lt({
            "vh--none": o.zoomed
        })
    }, [(le(!0), ve(ke, null, Ms(r.breakpoints, a => (le(), ve(ke, {
        key: a.width
    }, [a.regularWebp ? (le(), ve("source", {
        key: 0,
        srcset: a.regularWebp,
        type: "image/webp",
        media: "(min-width:" + a.width + "px)"
    }, null, 8, d0)) : ct("", !0), a.regular ? (le(), ve("source", {
        key: 1,
        srcset: a.regular,
        media: "(min-width:" + a.width + "px)"
    }, null, 8, h0)) : ct("", !0)], 64))), 128)), r.regularWebp ? (le(), ve("source", {
        key: 0,
        srcset: r.regularWebp,
        type: "image/webp"
    }, null, 8, p0)) : ct("", !0), Pt("img", {
        loading: r.lazyload ? "lazy" : "eager",
        src: r.regular,
        class: lt(r.imgClass),
        alt: r.alt,
        onLoad: t[0] || (t[0] = a => (e.$emit("regularLoaded"), o.showSlot = !1)),
        width: r.imgWidth,
        height: r.imgHeight
    }, null, 42, m0)], 2), o.zoomed ? (le(), ve("picture", g0, [(le(!0), ve(ke, null, Ms(r.breakpoints, a => (le(), ve(ke, {
        key: a.width
    }, [a.zoomWebp ? (le(), ve("source", {
        key: 0,
        srcset: a.zoomWebp,
        type: "image/webp",
        media: "(min-width:" + a.width + "px)"
    }, null, 8, v0)) : a.regularWebp ? (le(), ve("source", {
        key: 1,
        srcset: a.regularWebp,
        type: "image/webp",
        media: "(min-width:" + a.width + "px)"
    }, null, 8, y0)) : ct("", !0), a.zoom ? (le(), ve("source", {
        key: 2,
        srcset: a.zoom,
        media: "(min-width:" + a.width + "px)"
    }, null, 8, b0)) : a.regular ? (le(), ve("source", {
        key: 3,
        srcset: a.regular,
        media: "(min-width:" + a.width + "px)"
    }, null, 8, _0)) : ct("", !0)], 64))), 128)), o.options.zoomWebp ? (le(), ve("source", {
        key: 0,
        src: o.options.zoomWebp,
        type: "image/webp"
    }, null, 8, w0)) : ct("", !0), o.touch ? (le(), ve("img", {
        key: 2,
        src: o.options.zoom,
        class: "vh--image vh--abs",
        style: Er("width:" + o.zoomWidth + "px;transform:" + o.touchPosition)
    }, null, 12, S0)) : (le(), ve("img", {
        key: 1,
        src: o.options.zoom,
        class: "vh--image vh--abs",
        style: Er({
            width: o.zoomWidth + "px",
            transform: "translate(-" + o.x + "px,-" + o.y + "px)"
        })
    }, null, 12, E0))])) : ct("", !0), Ae(Fs, {
        name: "VueHoverfade"
    }, {
        default: wo(() => [!o.zoomed && !o.loading && !r.clickZoom && !o.touch && r.showMessage ? (le(), ve("div", {
            key: 0,
            class: lt(["vh--message vh--abs vh--flex vh--jc vh--ai", "vh--message-" + r.messagePos]),
            innerHTML: r.hoverMessage
        }, null, 10, R0)) : !o.zoomed && !o.loading && !o.touch && r.showMessage ? (le(), ve("div", {
            key: 1,
            class: lt(["vh--message vh--abs vh--flex vh--jc vh--ai", "vh--message-" + r.messagePos]),
            innerHTML: r.clickMessage
        }, null, 10, C0)) : !o.zoomed && !o.loading && o.touch && r.showMessageTouch ? (le(), ve("div", {
            key: 2,
            class: lt(["vh--message vh--abs vh--flex vh--jc vh--ai", "vh--message-" + r.messagePos]),
            innerHTML: r.touchMessage
        }, null, 10, T0)) : ct("", !0)]),
        _: 1
    })], 34), Ae(Fs, {
        name: "VueHoverfade"
    }, {
        default: wo(() => [o.touch && o.zoomed && o.loaded && !r.tapToClose ? (le(), ve("div", {
            key: 0,
            class: lt(["vh--close vh--abs vh--flex vh--jc vh--ai", "vh--" + r.closePos]),
            onClick: t[5] || (t[5] = Wm(a => (o.zoomed = !1, e.$emit("offZoom")), ["stop"])),
            innerHTML: "×"
        }, null, 2)) : o.loading ? (le(), ve("div", A0, P0)) : ct("", !0)]),
        _: 1
    })])), [
        [s, i.isZoom],
        [Cm, !o.showSlot || r.lazyload]
    ])], 64)
}
var k0 = l0(u0, [
        ["render", x0]
    ]),
    I0 = {
        install: (e, t) => {
            e.component("VueImageZoomer", k0)
        }
    };
const M0 = nt(e => {
        e.vueApp.component("VueImageZoomer", I0)
    }),
    L0 = [Ry, Py, o_, i_, s_, a_, l_, u_, h_, E_, D_, zw, Xw, c0, M0],
    oh = Od,
    N0 = Tr({
        name: "LayoutLoader",
        inheritAttrs: !1,
        props: {
            name: String,
            layoutProps: Object
        },
        setup(e, t) {
            return () => Mt(er[e.name], e.layoutProps, t.slots)
        }
    }),
    D0 = {
        name: {
            type: [String, Boolean, Object],
            default: null
        },
        fallback: {
            type: [String, Object],
            default: null
        }
    },
    j0 = Tr({
        name: "NuxtLayout",
        inheritAttrs: !1,
        props: D0,
        setup(e, t) {
            const r = $e(),
                n = Ke(kn),
                i = !n || n === xa() ? Vd() : n,
                s = tt(() => {
                    let l = ge(e.name) ?? i?.meta.layout ?? oh(i?.path).appLayout ?? "default";
                    return l && !(l in er) && e.fallback && (l = ge(e.fallback)), l
                }),
                a = Wr();
            t.expose({
                layoutRef: a
            });
            const c = r.deferHydration();
            if (r.isHydrating) {
                const l = r.hooks.hookOnce("app:error", c),
                    f = Et().beforeEach(() => {
                        l(), f()
                    })
            }
            let u;
            return () => {
                const f = !!s.value && s.value in er && !!(i?.meta.layoutTransition ?? Ac),
                    d = f && Jb([i?.meta.layoutTransition, Ac, {
                        onBeforeLeave() {
                            r["~transitionPromise"] = new Promise(m => {
                                r["~transitionFinish"] = m
                            })
                        },
                        onAfterLeave() {
                            r["~transitionFinish"]?.(), delete r["~transitionFinish"], delete r["~transitionPromise"]
                        }
                    }]),
                    p = u;
                return u = s.value, $b(d, {
                    default: () => Mt(qf, {
                        suspensible: !0,
                        onResolve: async () => {
                            await Qr(c)
                        }
                    }, {
                        default: () => Mt(H0, {
                            layoutProps: Kf(t.attrs, i.meta.layoutProps ?? {}, {
                                ref: a
                            }),
                            key: s.value || void 0,
                            name: s.value,
                            shouldProvide: !e.name,
                            isRenderingNewLayout: m => m !== p && m === s.value,
                            hasTransition: f
                        }, t.slots)
                    })
                }).default()
            }
        }
    }),
    H0 = Tr({
        name: "NuxtLayoutProvider",
        inheritAttrs: !1,
        props: {
            name: {
                type: [String, Boolean]
            },
            layoutProps: {
                type: Object
            },
            hasTransition: {
                type: Boolean
            },
            shouldProvide: {
                type: Boolean
            },
            isRenderingNewLayout: {
                type: Function,
                required: !0
            }
        },
        setup(e, t) {
            const r = e.name;
            e.shouldProvide && yr(pv, {
                isCurrent: i => r === !1 || r === (i.meta.layout ?? oh(i.path).appLayout ?? "default")
            });
            const n = Ke(kn);
            if (n && n === xa()) {
                const i = Vd(),
                    s = {};
                for (const a in i) {
                    const c = a;
                    Object.defineProperty(s, c, {
                        enumerable: !0,
                        get: () => e.isRenderingNewLayout(e.name) ? i[c] : n[c]
                    })
                }
                yr(kn, Vt(s))
            }
            return () => !r || typeof r == "string" && !(r in er) ? t.slots.default?.() : Mt(N0, {
                key: r,
                layoutProps: e.layoutProps,
                name: r
            }, t.slots)
        }
    }),
    B0 = {
        class: "entire-site"
    },
    q0 = {
        __name: "app",
        setup(e) {
            return my({
                htmlAttrs: {
                    lang: "en"
                }
            }), (t, r) => {
                const n = j0;
                return le(), ve("div", B0, [Pt("div", null, [Ae(n)])])
            }
        }
    },
    U0 = {
        __name: "nuxt-error-page",
        props: {
            error: Object
        },
        setup(e) {
            const r = e.error,
                n = Number(r.statusCode || 500),
                o = n === 404,
                i = r.statusMessage ?? (o ? "Page Not Found" : "Internal Server Error"),
                s = r.message || r.toString(),
                a = void 0,
                l = o ? Is(() => we(() => import("./e75IGLvM.js"), __vite__mapDeps([92, 14, 1, 93]), import.meta.url)) : Is(() => we(() => import("./C207MzMo.js"), __vite__mapDeps([94, 1, 95]), import.meta.url));
            return (f, d) => (le(), $t(ge(l), gh(zf({
                status: ge(n),
                statusText: ge(i),
                statusCode: ge(n),
                statusMessage: ge(i),
                description: ge(s),
                stack: ge(a)
            })), null, 16))
        }
    },
    F0 = {
        key: 0
    },
    Pu = {
        __name: "nuxt-root",
        setup(e) {
            const t = () => null,
                r = $e(),
                n = r.deferHydration();
            if (r.isHydrating) {
                const l = r.hooks.hookOnce("app:error", n),
                    f = Et().beforeEach(() => {
                        l(), f()
                    })
            }
            const o = !1;
            yr(kn, xa()), r.hooks.callHookWith(l => l.map(f => f()), "vue:setup", []);
            const i = si(),
                s = !1,
                a = /bot\b|chrome-lighthouse|facebookexternalhit|google\b/i;

            function c(l, f, d) {
                const p = r.vueApp.config.errorHandler;
                if (p && !p.__nuxt_default) try {
                    p(l, f, d)
                } catch (m) {
                    console.error("[nuxt] Error in `app.config.errorHandler`", m)
                }
            }
            bf((l, f, d) => {
                if (r.hooks.callHook("vue:error", l, f, d).catch(p => console.error("[nuxt] Error in `vue:error` hook", p)), a.test(navigator.userAgent)) return r.hooks.callHook("app:error", l), console.error(`[nuxt] Not rendering error page for bot with user agent \`${navigator.userAgent}\`:`, l), !1;
                if (wd(l) && (l.fatal || l.unhandled)) return r.runWithContext(() => hr(l)), c(l, f, d), !1
            });
            const u = !1;
            return (l, f) => (le(), $t(qf, {
                onResolve: ge(n)
            }, {
                default: wo(() => [ge(s) ? (le(), ve("div", F0)) : ge(i) ? (le(), $t(ge(U0), {
                    key: 1,
                    error: ge(i)
                }, null, 8, ["error"])) : ge(u) ? (le(), $t(ge(t), {
                    key: 2,
                    context: ge(u)
                }, null, 8, ["context"])) : ge(o) ? (le(), $t(Tp(ge(o)), {
                    key: 3
                })) : (le(), $t(ge(q0), {
                    key: 4
                }))]),
                _: 1
            }, 8, ["onResolve"]))
        }
    };
let xu;
{
    let e;
    xu = async function() {
        if (e) return e;
        const n = !!(window.__NUXT__?.serverRendered ?? document.getElementById("__NUXT_DATA__")?.dataset.ssr === "true") ? Xm(Pu) : Km(Pu),
            o = iv({
                vueApp: n
            });
        async function i(s) {
            await o.callHook("app:error", s), o.payload.error ||= wr(s)
        }
        i.__nuxt_default = !0, n.config.errorHandler = i, o.hook("app:suspense:resolve", () => {
            n.config.errorHandler === i && (n.config.errorHandler = void 0)
        });
        try {
            await cv(o, L0)
        } catch (s) {
            i(s)
        }
        try {
            await o.hooks.callHook("app:created", n), await o.hooks.callHook("app:beforeMount", n), n.mount(rv), await o.hooks.callHook("app:mounted", n), await Qr()
        } catch (s) {
            i(s)
        }
        return n
    }, e = xu().catch(t => {
        throw console.error("Error while mounting app:", t), t
    })
}
export {
    kn as $, rr as A, Ap as B, Er as C, W0 as D, Zr as E, ke as F, tE as G, gh as H, zf as I, fo as J, Tr as K, jo as L, Mt as M, im as N, $e as O, k0 as P, ti as Q, X0 as R, Kt as S, zt as T, Ke as U, i0 as V, yr as W, rE as X, Bo as Y, Fs as Z, Vt as _, Pt as a, pv as a0, nE as a1, J0 as a2, Jb as a3, Q0 as a4, $b as a5, oE as a6, qf as a7, Lb as a8, lf as a9, vv as aA, Z0 as aB, Vs as aC, Eg as aD, Lo as aE, Qo as aa, Jo as ab, Gt as ac, iE as ad, Wr as ae, ha as af, eE as ag, $0 as ah, qu as ai, wr as aj, Kh as ak, $h as al, _p as am, xs as an, Mo as ao, V0 as ap, jn as aq, Da as ar, rl as as, sE as at, z0 as au, sd as av, gv as aw, d_ as ax, tn as ay, ld as az, Ae as b, ve as c, Gf as d, Ww as e, G0 as f, ge as g, $t as h, ct as i, Wm as j, tp as k, Me as l, Kf as m, lt as n, le as o, Ce as p, tt as q, Ms as r, xa as s, wh as t, my as u, K0 as v, wo as w, ei as x, Qr as y, Et as z
};
