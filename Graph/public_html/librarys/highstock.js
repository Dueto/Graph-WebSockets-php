/*
 @product.name@ JS v@product.version@ (@product.date@)

 (c) 2009-2014 Torstein Honsi

 License: www.highcharts.com/license
 @product.name@ JS v@product.version@ (@product.date@)
 Plugin for displaying a message when there is no data visible in chart.

 (c) 2010-2014 Highsoft AS
 Author: Oystein Moseng

 License: www.highcharts.com/license
 */
(function() {
    function t(a, b) {
        var c;
        a || (a = {});
        for (c in b) a[c] = b[c];
        return a
    }
    function A() {
        var a, b = arguments, c, d = {}, e = function(a, b) {
            var c, d;
            "object" !== typeof a && (a = {});
            for (d in b) b.hasOwnProperty(d) && ((c = b[d]) && "object" === typeof c && "[object Array]" !== Object.prototype.toString.call(c) && "renderTo" !== d && "number" !== typeof c.nodeType ? a[d] = e(a[d] || {}, c) : a[d] = b[d]);
            return a
        };
        !0 === b[0] && (d = b[1], b = Array.prototype.slice.call(b, 2));
        c = b.length;
        for (a = 0; a < c; a++) d = e(d, b[a]);
        return d
    }
    function D(a, b) {
        return parseInt(a,
                b || 10)
    }
    function $(a) {
        return"string" === typeof a
    }
    function Y(a) {
        return"object" === typeof a
    }
    function oa(a) {
        return"[object Array]" === Object.prototype.toString.call(a)
    }
    function ca(a) {
        return"number" === typeof a
    }
    function wa(a) {
        return M.log(a) / M.LN10
    }
    function T(a) {
        return M.pow(10, a)
    }
    function ka(a, b) {
        for (var c = a.length; c--; ) if (a[c] === b) {
                a.splice(c, 1);
                break
            }
    }
    function v(a) {
        return a !== u && null !== a
    }
    function N(a, b, c) {
        var d, e;
        if ($(b)) v(c) ? a.setAttribute(b, c) : a && a.getAttribute && (e = a.getAttribute(b));
        else if (v(b) && Y(b)) for (d in b) a.setAttribute(d,
                        b[d]);
        return e
    }
    function ga(a) {
        return oa(a) ? a : [a]
    }
    function r() {
        var a = arguments, b, c, d = a.length;
        for (b = 0; b < d; b++) if (c = a[b], "undefined" !== typeof c && null !== c) return c
    }
    function H(a, b) {
        pa && !da && b && b.opacity !== u && (b.filter = "alpha(opacity=" + 100 * b.opacity + ")");
        t(a.style, b)
    }
    function la(a, b, c, d, e) {
        a = z.createElement(a);
        b && t(a, b);
        e && H(a, {padding: 0, border: V, margin: 0});
        c && H(a, c);
        d && d.appendChild(a);
        return a
    }
    function xb(a, b) {
        var c = function() {
        };
        c.prototype = new a;
        t(c.prototype, b);
        return c
    }
    function ua(a, b, c, d) {
        var e =
                G.lang;
        a = +a || 0;
        var f = -1 === b ? (a.toString().split(".")[1] || "").length : isNaN(b = Q(b)) ? 2 : b;
        b = void 0 === c ? e.decimalPoint : c;
        d = void 0 === d ? e.thousandsSep : d;
        e = 0 > a ? "-" : "";
        c = String(D(a = Q(a).toFixed(f)));
        var g = 3 < c.length ? c.length % 3 : 0;
        return e + (g ? c.substr(0, g) + d : "") + c.substr(g).replace(/(\d{3})(?=\d)/g, "$1" + d) + (f ? b + Q(a - c).toFixed(f).slice(2) : "")
    }
    function va(a, b) {
        return Array((b || 2) + 1 - String(a).length).join(0) + a
    }
    function xa(a, b, c) {
        var d = a[b];
        a[b] = function() {
            var a = Array.prototype.slice.call(arguments);
            a.unshift(d);
            return c.apply(this, a)
        }
    }
    function ya(a, b) {
        for (var c = "{", d = !1, e, f, g, h, k, l = []; -1 !== (c = a.indexOf(c)); ) {
            e = a.slice(0, c);
            if (d) {
                f = e.split(":");
                g = f.shift().split(".");
                k = g.length;
                e = b;
                for (h = 0; h < k; h++) e = e[g[h]];
                f.length && (f = f.join(":"), g = /\.([0-9])/, h = G.lang, k = void 0, /f$/.test(f) ? (k = (k = f.match(g)) ? k[1] : -1, null !== e && (e = ua(e, k, h.decimalPoint, -1 < f.indexOf(",") ? h.thousandsSep : ""))) : e = Ra(f, e))
            }
            l.push(e);
            a = a.slice(c + 1);
            c = (d = !d) ? "}" : "{"
        }
        l.push(a);
        return l.join("")
    }
    function yb(a, b, c, d) {
        var e;
        c = r(c, 1);
        e = a / c;
        b || (b = [1,
            2, 2.5, 5, 10], d && !1 === d.allowDecimals && (1 === c ? b = [1, 2, 5, 10] : 0.1 >= c && (b = [1 / c])));
        for (d = 0; d < b.length && !(a = b[d], e <= (b[d] + (b[d + 1] || b[d])) / 2); d++) ;
        return a * c
    }
    function zb() {
        this.symbol = this.color = 0
    }
    function ib(a, b) {
        var c = a.length, d, e;
        for (e = 0; e < c; e++) a[e].ss_i = e;
        a.sort(function(a, c) {
            d = b(a, c);
            return 0 === d ? a.ss_i - c.ss_i : d
        });
        for (e = 0; e < c; e++) delete a[e].ss_i
    }
    function za(a) {
        for (var b = a.length, c = a[0]; b--; ) a[b] < c && (c = a[b]);
        return c
    }
    function qa(a) {
        for (var b = a.length, c = a[0]; b--; ) a[b] > c && (c = a[b]);
        return c
    }
    function Ja(a,
            b) {
        for (var c in a) a[c] && a[c] !== b && a[c].destroy && a[c].destroy(), delete a[c]
    }
    function Sa(a) {
        Ta || (Ta = la(Ua));
        a && Ta.appendChild(a);
        Ta.innerHTML = ""
    }
    function ha(a, b) {
        var c = "Highcharts error #" + a + ": www.highcharts.com/errors/" + a;
        if (b) throw c;
        J.console && console.log(c)
    }
    function ma(a) {
        return parseFloat(a.toPrecision(14))
    }
    function Ab() {
        var a = G.global.useUTC, b = a ? "getUTC" : "get", c = a ? "setUTC" : "set";
        Aa = 6E4 * (a && G.global.timezoneOffset || 0);
        Va = a ? Date.UTC : function(a, b, c, g, h, k) {
            return(new Date(a, b, r(c, 1), r(g, 0), r(h, 0),
                    r(k, 0))).getTime()
        };
        jb = b + "Minutes";
        kb = b + "Hours";
        lb = b + "Day";
        Ka = b + "Date";
        Wa = b + "Month";
        Xa = b + "FullYear";
        Bb = c + "Minutes";
        Cb = c + "Hours";
        mb = c + "Date";
        Db = c + "Month";
        Eb = c + "FullYear"
    }
    function Z() {
    }
    function Ba(a, b, c, d) {
        this.axis = a;
        this.pos = b;
        this.type = c || "";
        this.isNew = !0;
        c || d || this.addLabel()
    }
    function ra() {
        this.init.apply(this, arguments)
    }
    function La() {
        this.init.apply(this, arguments)
    }
    var u, z = document, J = window, M = Math, y = M.round, R = M.floor, Ca = M.ceil, w = M.max, O = M.min, Q = M.abs, Ma = M.cos, Ya = M.sin, Fb = M.PI, Gb = 2 * Fb / 360, sa = navigator.userAgent,
            Hb = J.opera, pa = /msie/i.test(sa) && !Hb, Za = /AppleWebKit/.test(sa), Da = /Firefox/.test(sa), Ib = /(Mobile|Android|Windows Phone)/.test(sa), na = "http://www.w3.org/2000/svg", da = !!z.createElementNS && !!z.createElementNS(na, "svg").createSVGRect, Nb = Da && 4 > parseInt(sa.split("Firefox/")[1], 10), ea = !da && !pa && !!z.createElement("canvas").getContext, $a, Na, Jb = {}, nb = 0, Ta, G, Ra, aa, ob, B, pb = function() {
    }, U = [], Oa = 0, Ua = "div", V = "none", Ob = /^[0-9]+$/, Pb = "stroke-width", Va, Aa, jb, kb, lb, Ka, Wa, Xa, Bb, Cb, mb, Db, Eb, S = {}, W = J.Highcharts = J.Highcharts ?
            ha(16, !0) : {};
    Ra = function(a, b, c) {
        if (!v(b) || isNaN(b)) return"Invalid date";
        a = r(a, "%Y-%m-%d %H:%M:%S");
        var d = new Date(b - Aa), e, f = d[kb](), g = d[lb](), h = d[Ka](), k = d[Wa](), l = d[Xa](), m = G.lang, n = m.weekdays, d = t({a: n[g].substr(0, 3), A: n[g], d: va(h), e: h, b: m.shortMonths[k], B: m.months[k], m: va(k + 1), y: l.toString().substr(2, 2), Y: l, H: va(f), I: va(f % 12 || 12), l: f % 12 || 12, M: va(d[jb]()), p: 12 > f ? "AM" : "PM", P: 12 > f ? "am" : "pm", S: va(d.getSeconds()), L: va(y(b % 1E3), 3)}, W.dateFormats);
        for (e in d) for (; - 1 !== a.indexOf("%" + e); ) a = a.replace("%" +
                        e, "function" === typeof d[e] ? d[e](b) : d[e]);
        return c ? a.substr(0, 1).toUpperCase() + a.substr(1) : a
    };
    zb.prototype = {wrapColor: function(a) {
            this.color >= a && (this.color = 0)
        }, wrapSymbol: function(a) {
            this.symbol >= a && (this.symbol = 0)
        }};
    B = function() {
        for (var a = 0, b = arguments, c = b.length, d = {}; a < c; a++) d[b[a++]] = b[a];
        return d
    }("millisecond", 1, "second", 1E3, "minute", 6E4, "hour", 36E5, "day", 864E5, "week", 6048E5, "month", 26784E5, "year", 31556952E3);
    ob = {init: function(a, b, c) {
            b = b || "";
            var d = a.shift, e = -1 < b.indexOf("C"), f = e ? 7 : 3, g;
            b = b.split(" ");
            c = [].concat(c);
            var h, k, l = function(a) {
                for (g = a.length; g--; ) "M" === a[g] && a.splice(g + 1, 0, a[g + 1], a[g + 2], a[g + 1], a[g + 2])
            };
            e && (l(b), l(c));
            a.isArea && (h = b.splice(b.length - 6, 6), k = c.splice(c.length - 6, 6));
            if (d <= c.length / f && b.length === c.length) for (; d--; ) c = [].concat(c).splice(0, f).concat(c);
            a.shift = 0;
            if (b.length) for (a = c.length; b.length < a; ) d = [].concat(b).splice(b.length - f, f), e && (d[f - 6] = d[f - 2], d[f - 5] = d[f - 1]), b = b.concat(d);
            h && (b = b.concat(h), c = c.concat(k));
            return[b, c]
        }, step: function(a, b, c, d) {
            var e = [], f = a.length;
            if (1 ===
                    c) e = d;
            else if (f === b.length && 1 > c) for (; f--; ) d = parseFloat(a[f]), e[f] = isNaN(d) ? a[f] : c * parseFloat(b[f] - d) + d;
            else e = b;
            return e
        }};
    (function(a) {
        J.HighchartsAdapter = J.HighchartsAdapter || a && {init: function(b) {
                var c = a.fx, d = c.step, e, f = a.Tween, g = f && f.propHooks;
                e = a.cssHooks.opacity;
                a.extend(a.easing, {easeOutQuad: function(a, b, c, d, e) {
                        return-d * (b /= e) * (b - 2) + c
                    }});
                a.each(["cur", "_default", "width", "height", "opacity"], function(a, b) {
                    var e = d, m;
                    "cur" === b ? e = c.prototype : "_default" === b && f && (e = g[b], b = "set");
                    (m = e[b]) && (e[b] = function(c) {
                        var d;
                        c = a ? c : this;
                        if ("align" !== c.prop) return d = c.elem, d.attr ? d.attr(c.prop, "cur" === b ? u : c.now) : m.apply(this, arguments)
                    })
                });
                xa(e, "get", function(a, b, c) {
                    return b.attr ? b.opacity || 0 : a.call(this, b, c)
                });
                e = function(a) {
                    var c = a.elem, d;
                    a.started || (d = b.init(c, c.d, c.toD), a.start = d[0], a.end = d[1], a.started = !0);
                    c.attr("d", b.step(a.start, a.end, a.pos, c.toD))
                };
                f ? g.d = {set: e} : d.d = e;
                this.each = Array.prototype.forEach ? function(a, b) {
                    return Array.prototype.forEach.call(a, b)
                } : function(a, b) {
                    for (var c = 0, d = a.length; c < d; c++) if (!1 === b.call(a[c],
                                a[c], c, a)) return c
                };
                a.fn.highcharts = function() {
                    var a = "Chart", b = arguments, c, d;
                    this[0] && ($(b[0]) && (a = b[0], b = Array.prototype.slice.call(b, 1)), c = b[0], c !== u && (c.chart = c.chart || {}, c.chart.renderTo = this[0], new W[a](c, b[1]), d = this), c === u && (d = U[N(this[0], "data-highcharts-chart")]));
                    return d
                }
            }, getScript: a.getScript, inArray: a.inArray, adapterRun: function(b, c) {
                return a(b)[c]()
            }, grep: a.grep, map: function(a, c) {
                for (var d = [], e = 0, f = a.length; e < f; e++) d[e] = c.call(a[e], a[e], e, a);
                return d
            }, offset: function(b) {
                return a(b).offset()
            },
            addEvent: function(b, c, d) {
                a(b).bind(c, d)
            }, removeEvent: function(b, c, d) {
                var e = z.removeEventListener ? "removeEventListener" : "detachEvent";
                z[e] && b && !b[e] && (b[e] = function() {
                });
                a(b).unbind(c, d)
            }, fireEvent: function(b, c, d, e) {
                var f = a.Event(c), g = "detached" + c, h;
                !pa && d && (delete d.layerX, delete d.layerY, delete d.returnValue);
                t(f, d);
                b[c] && (b[g] = b[c], b[c] = null);
                a.each(["preventDefault", "stopPropagation"], function(a, b) {
                    var c = f[b];
                    f[b] = function() {
                        try {
                            c.call(f)
                        } catch (a) {
                            "preventDefault" === b && (h = !0)
                        }
                    }
                });
                a(b).trigger(f);
                b[g] && (b[c] = b[g], b[g] = null);
                !e || f.isDefaultPrevented() || h || e(f)
            }, washMouseEvent: function(a) {
                var c = a.originalEvent || a;
                c.pageX === u && (c.pageX = a.pageX, c.pageY = a.pageY);
                return c
            }, animate: function(b, c, d) {
                var e = a(b);
                b.style || (b.style = {});
                c.d && (b.toD = c.d, c.d = 1);
                e.stop();
                c.opacity !== u && b.attr && (c.opacity += "px");
                e.animate(c, d)
            }, stop: function(b) {
                a(b).stop()
            }}
    })(J.jQuery);
    var ab = J.HighchartsAdapter, ba = ab || {};
    ab && ab.init.call(ab, ob);
    var bb = ba.adapterRun, Qb = ba.getScript, Ea = ba.inArray, s = ba.each, qb = ba.grep, Rb = ba.offset,
            cb = ba.map, L = ba.addEvent, X = ba.removeEvent, F = ba.fireEvent, Sb = ba.washMouseEvent, db = ba.animate, eb = ba.stop, rb = {enabled: !0, x: 0, y: 15, style: {color: "#606060", cursor: "default", fontSize: "11px"}};
    G = {colors: "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #8085e8 #8d4653 #91e8e1".split(" "), symbols: ["circle", "diamond", "square", "triangle", "triangle-down"], lang: {loading: "Loading...", months: "January February March April May June July August September October November December".split(" "), shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
            weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), decimalPoint: ".", numericSymbols: "kMGTPE".split(""), resetZoom: "Reset zoom", resetZoomTitle: "Reset zoom level 1:1", thousandsSep: ","}, global: {useUTC: !0, canvasToolsURL: "http://code.highcharts.com@product.cdnpath@/@product.version@/modules/canvas-tools.js", VMLRadialGradientURL: "http://code.highcharts.com@product.cdnpath@/@product.version@/gfx/vml-radial-gradient.png"}, chart: {borderColor: "#4572A7", borderRadius: 0, defaultSeriesType: "line",
            ignoreHiddenSeries: !0, spacing: [10, 10, 15, 10], backgroundColor: "#FFFFFF", plotBorderColor: "#C0C0C0", resetZoomButton: {theme: {zIndex: 20}, position: {align: "right", x: -10, y: 10}}}, title: {text: "Chart title", align: "center", margin: 15, style: {color: "#333333", fontSize: "18px"}}, subtitle: {text: "", align: "center", style: {color: "#555555"}}, plotOptions: {line: {allowPointSelect: !1, showCheckbox: !1, animation: {duration: 1E3}, events: {}, lineWidth: 2, marker: {lineWidth: 0, radius: 4, lineColor: "#FFFFFF", states: {hover: {enabled: !0}, select: {fillColor: "#FFFFFF",
                            lineColor: "#000000", lineWidth: 2}}}, point: {events: {}}, dataLabels: A(rb, {align: "center", enabled: !1, formatter: function() {
                        return null === this.y ? "" : ua(this.y, -1)
                    }, verticalAlign: "bottom", y: 0}), cropThreshold: 300, pointRange: 0, states: {hover: {marker: {}, halo: {size: 10, opacity: 0.25}}, select: {marker: {}}}, stickyTracking: !0, turboThreshold: 1E3}}, labels: {style: {position: "absolute", color: "#3E576F"}}, legend: {enabled: !0, align: "center", layout: "horizontal", labelFormatter: function() {
                return this.name
            }, borderColor: "#909090",
            borderRadius: 0, navigation: {activeColor: "#274b6d", inactiveColor: "#CCC"}, shadow: !1, itemStyle: {color: "#333333", fontSize: "12px", fontWeight: "bold"}, itemHoverStyle: {color: "#000"}, itemHiddenStyle: {color: "#CCC"}, itemCheckboxStyle: {position: "absolute", width: "13px", height: "13px"}, symbolPadding: 5, verticalAlign: "bottom", x: 0, y: 0, title: {style: {fontWeight: "bold"}}}, loading: {labelStyle: {fontWeight: "bold", position: "relative", top: "1em"}, style: {position: "absolute", backgroundColor: "white", opacity: 0.5, textAlign: "center"}},
        tooltip: {enabled: !0, animation: da, backgroundColor: "rgba(249, 249, 249, .85)", borderWidth: 1, borderRadius: 3, dateTimeLabelFormats: {millisecond: "%A, %b %e, %H:%M:%S.%L", second: "%A, %b %e, %H:%M:%S", minute: "%A, %b %e, %H:%M", hour: "%A, %b %e, %H:%M", day: "%A, %b %e, %Y", week: "Week from %A, %b %e, %Y", month: "%B %Y", year: "%Y"}, headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>', pointFormat: '<span style="color:{series.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>', shadow: !0, snap: Ib ?
                    25 : 10, style: {color: "#333333", cursor: "default", fontSize: "12px", padding: "8px", whiteSpace: "nowrap"}}, credits: {enabled: !0, text: "Highcharts.com", href: "http://www.highcharts.com", position: {align: "right", x: -10, verticalAlign: "bottom", y: -5}, style: {cursor: "pointer", color: "#909090", fontSize: "9px"}}};
    var fb = G.plotOptions;
    Ab();
    var Tb = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/, Ub = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/, Vb = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
            Fa = function(a) {
                var b = [], c, d;
                (function(a) {
                    a && a.stops ? d = cb(a.stops, function(a) {
                        return Fa(a[1])
                    }) : (c = Tb.exec(a)) ? b = [D(c[1]), D(c[2]), D(c[3]), parseFloat(c[4], 10)] : (c = Ub.exec(a)) ? b = [D(c[1], 16), D(c[2], 16), D(c[3], 16), 1] : (c = Vb.exec(a)) && (b = [D(c[1]), D(c[2]), D(c[3]), 1])
                })(a);
                return{get: function(c) {
                        var f;
                        d ? (f = A(a), f.stops = [].concat(f.stops), s(d, function(a, b) {
                            f.stops[b] = [f.stops[b][0], a.get(c)]
                        })) : f = b && !isNaN(b[0]) ? "rgb" === c ? "rgb(" + b[0] + "," + b[1] + "," + b[2] + ")" : "a" === c ? b[3] : "rgba(" + b.join(",") + ")" : a;
                        return f
                    }, brighten: function(a) {
                        if (d) s(d,
                                    function(b) {
                                        b.brighten(a)
                                    });
                        else if (ca(a) && 0 !== a) {
                            var c;
                            for (c = 0; 3 > c; c++) b[c] += D(255 * a), 0 > b[c] && (b[c] = 0), 255 < b[c] && (b[c] = 255)
                        }
                        return this
                    }, rgba: b, setOpacity: function(a) {
                        b[3] = a;
                        return this
                    }}
            };
    Z.prototype = {init: function(a, b) {
            this.element = "span" === b ? la(b) : z.createElementNS(na, b);
            this.renderer = a
        }, opacity: 1, animate: function(a, b, c) {
            b = r(b, aa, !0);
            eb(this);
            b ? (b = A(b, {}), c && (b.complete = c), db(this, a, b)) : (this.attr(a), c && c())
        }, colorGradient: function(a, b, c) {
            var d = this.renderer, e, f, g, h, k, l, m, n, q, p, x = [];
            a.linearGradient ?
                    f = "linearGradient" : a.radialGradient && (f = "radialGradient");
            if (f) {
                g = a[f];
                h = d.gradients;
                l = a.stops;
                q = c.radialReference;
                oa(g) && (a[f] = g = {x1: g[0], y1: g[1], x2: g[2], y2: g[3], gradientUnits: "userSpaceOnUse"});
                "radialGradient" === f && q && !v(g.gradientUnits) && (g = A(g, {cx: q[0] - q[2] / 2 + g.cx * q[2], cy: q[1] - q[2] / 2 + g.cy * q[2], r: g.r * q[2], gradientUnits: "userSpaceOnUse"}));
                for (p in g) "id" !== p && x.push(p, g[p]);
                for (p in l) x.push(l[p]);
                x = x.join(",");
                h[x] ? a = h[x].attr("id") : (g.id = a = "highcharts-" + nb++, h[x] = k = d.createElement(f).attr(g).add(d.defs),
                        k.stops = [], s(l, function(a) {
                    0 === a[1].indexOf("rgba") ? (e = Fa(a[1]), m = e.get("rgb"), n = e.get("a")) : (m = a[1], n = 1);
                    a = d.createElement("stop").attr({offset: a[0], "stop-color": m, "stop-opacity": n}).add(k);
                    k.stops.push(a)
                }));
                c.setAttribute(b, "url(" + d.url + "#" + a + ")")
            }
        }, attr: function(a, b) {
            var c, d, e = this.element, f, g = this, h;
            "string" === typeof a && b !== u && (c = a, a = {}, a[c] = b);
            if ("string" === typeof a) g = (this[a + "Getter"] || this._defaultGetter).call(this, a, e);
            else {
                for (c in a) d = a[c], h = !1, this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(c) &&
                            (f || (this.symbolAttr(a), f = !0), h = !0), !this.rotation || "x" !== c && "y" !== c || (this.doTransform = !0), h || (this[c + "Setter"] || this._defaultSetter).call(this, d, c, e), this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(c) && this.updateShadows(c, d);
                this.doTransform && (this.updateTransform(), this.doTransform = !1)
            }
            return g
        }, updateShadows: function(a, b) {
            for (var c = this.shadows, d = c.length; d--; ) c[d].setAttribute(a, "height" === a ? w(b - (c[d].cutHeight || 0), 0) : "d" === a ? this.d : b)
        }, addClass: function(a) {
            var b = this.element,
                    c = N(b, "class") || "";
            -1 === c.indexOf(a) && N(b, "class", c + " " + a);
            return this
        }, symbolAttr: function(a) {
            var b = this;
            s("x y r start end width height innerR anchorX anchorY".split(" "), function(c) {
                b[c] = r(a[c], b[c])
            });
            b.attr({d: b.renderer.symbols[b.symbolName](b.x, b.y, b.width, b.height, b)})
        }, clip: function(a) {
            return this.attr("clip-path", a ? "url(" + this.renderer.url + "#" + a.id + ")" : V)
        }, crisp: function(a) {
            var b, c = {}, d, e = a.strokeWidth || this.strokeWidth || this.attr && this.attr("stroke-width") || 0;
            d = y(e) % 2 / 2;
            a.x = R(a.x || this.x ||
                    0) + d;
            a.y = R(a.y || this.y || 0) + d;
            a.width = R((a.width || this.width || 0) - 2 * d);
            a.height = R((a.height || this.height || 0) - 2 * d);
            a.strokeWidth = e;
            for (b in a) this[b] !== a[b] && (this[b] = c[b] = a[b]);
            return c
        }, css: function(a) {
            var b = this.styles, c = {}, d = this.element, e, f, g = "";
            e = !b;
            a && a.color && (a.fill = a.color);
            if (b) for (f in a) a[f] !== b[f] && (c[f] = a[f], e = !0);
            if (e) {
                e = this.textWidth = a && a.width && "text" === d.nodeName.toLowerCase() && D(a.width);
                b && (a = t(b, c));
                this.styles = a;
                e && (ea || !da && this.renderer.forExport) && delete a.width;
                if (pa && !da) H(this.element,
                            a);
                else {
                    b = function(a, b) {
                        return"-" + b.toLowerCase()
                    };
                    for (f in a) g += f.replace(/([A-Z])/g, b) + ":" + a[f] + ";";
                    N(d, "style", g)
                }
                e && this.added && this.renderer.buildText(this)
            }
            return this
        }, on: function(a, b) {
            var c = this, d = c.element;
            Na && "click" === a ? (d.ontouchstart = function(a) {
                c.touchEventFired = Date.now();
                a.preventDefault();
                b.call(d, a)
            }, d.onclick = function(a) {
                (-1 === sa.indexOf("Android") || 1100 < Date.now() - (c.touchEventFired || 0)) && b.call(d, a)
            }) : d["on" + a] = b;
            return this
        }, setRadialReference: function(a) {
            this.element.radialReference =
                    a;
            return this
        }, translate: function(a, b) {
            return this.attr({translateX: a, translateY: b})
        }, invert: function() {
            this.inverted = !0;
            this.updateTransform();
            return this
        }, updateTransform: function() {
            var a = this.translateX || 0, b = this.translateY || 0, c = this.scaleX, d = this.scaleY, e = this.inverted, f = this.rotation, g = this.element;
            e && (a += this.attr("width"), b += this.attr("height"));
            a = ["translate(" + a + "," + b + ")"];
            e ? a.push("rotate(90) scale(-1,1)") : f && a.push("rotate(" + f + " " + (g.getAttribute("x") || 0) + " " + (g.getAttribute("y") || 0) + ")");
            (v(c) || v(d)) && a.push("scale(" + r(c, 1) + " " + r(d, 1) + ")");
            a.length && g.setAttribute("transform", a.join(" "))
        }, toFront: function() {
            var a = this.element;
            a.parentNode.appendChild(a);
            return this
        }, align: function(a, b, c) {
            var d, e, f, g, h = {};
            e = this.renderer;
            f = e.alignedObjects;
            if (a) {
                if (this.alignOptions = a, this.alignByTranslate = b, !c || $(c)) this.alignTo = d = c || "renderer", ka(f, this), f.push(this), c = null
            } else a = this.alignOptions, b = this.alignByTranslate, d = this.alignTo;
            c = r(c, e[d], e);
            d = a.align;
            e = a.verticalAlign;
            f = (c.x || 0) + (a.x ||
                    0);
            g = (c.y || 0) + (a.y || 0);
            if ("right" === d || "center" === d) f += (c.width - (a.width || 0)) / {right: 1, center: 2}[d];
            h[b ? "translateX" : "x"] = y(f);
            if ("bottom" === e || "middle" === e) g += (c.height - (a.height || 0)) / ({bottom: 1, middle: 2}[e] || 1);
            h[b ? "translateY" : "y"] = y(g);
            this[this.placed ? "animate" : "attr"](h);
            this.placed = !0;
            this.alignAttr = h;
            return this
        }, getBBox: function() {
            var a = this.bBox, b = this.renderer, c, d, e = this.rotation;
            c = this.element;
            var f = this.styles, g = e * Gb;
            d = this.textStr;
            var h;
            if ("" === d || Ob.test(d)) h = "num." + d.toString().length +
                        (f ? "|" + f.fontSize + "|" + f.fontFamily : "");
            h && (a = b.cache[h]);
            if (!a) {
                if (c.namespaceURI === na || b.forExport) {
                    try {
                        a = c.getBBox ? t({}, c.getBBox()) : {width: c.offsetWidth, height: c.offsetHeight}
                    } catch (k) {
                    }
                    if (!a || 0 > a.width) a = {width: 0, height: 0}
                } else a = this.htmlGetBBox();
                b.isSVG && (c = a.width, d = a.height, pa && f && "11px" === f.fontSize && "16.9" === d.toPrecision(3) && (a.height = d = 14), e && (a.width = Q(d * Ya(g)) + Q(c * Ma(g)), a.height = Q(d * Ma(g)) + Q(c * Ya(g))));
                this.bBox = a;
                h && (b.cache[h] = a)
            }
            return a
        }, show: function(a) {
            return a && this.element.namespaceURI ===
                    na ? (this.element.removeAttribute("visibility"), this) : this.attr({visibility: a ? "inherit" : "visible"})
        }, hide: function() {
            return this.attr({visibility: "hidden"})
        }, fadeOut: function(a) {
            var b = this;
            b.animate({opacity: 0}, {duration: a || 150, complete: function() {
                    b.hide()
                }})
        }, add: function(a) {
            var b = this.renderer, c = a || b, d = c.element || b.box, e = this.element, f = this.zIndex, g, h;
            a && (this.parentGroup = a);
            this.parentInverted = a && a.inverted;
            void 0 !== this.textStr && b.buildText(this);
            f && (c.handleZ = !0, f = D(f));
            if (c.handleZ) for (a = d.childNodes,
                        g = 0; g < a.length; g++) if (b = a[g], c = N(b, "zIndex"), b !== e && (D(c) > f || !v(f) && v(c))) {
                        d.insertBefore(e, b);
                        h = !0;
                        break
                    }
            h || d.appendChild(e);
            this.added = !0;
            if (this.onAdd) this.onAdd();
            return this
        }, safeRemoveChild: function(a) {
            var b = a.parentNode;
            b && b.removeChild(a)
        }, destroy: function() {
            var a = this, b = a.element || {}, c = a.shadows, d = a.renderer.isSVG && "SPAN" === b.nodeName && a.parentGroup, e, f;
            b.onclick = b.onmouseout = b.onmouseover = b.onmousemove = b.point = null;
            eb(a);
            a.clipPath && (a.clipPath = a.clipPath.destroy());
            if (a.stops) {
                for (f = 0; f <
                        a.stops.length; f++) a.stops[f] = a.stops[f].destroy();
                a.stops = null
            }
            a.safeRemoveChild(b);
            for (c && s(c, function(b) {
                a.safeRemoveChild(b)
            }); d && 0 === d.div.childNodes.length; ) b = d.parentGroup, a.safeRemoveChild(d.div), delete d.div, d = b;
            a.alignTo && ka(a.renderer.alignedObjects, a);
            for (e in a) delete a[e];
            return null
        }, shadow: function(a, b, c) {
            var d = [], e, f, g = this.element, h, k, l, m;
            if (a) {
                k = r(a.width, 3);
                l = (a.opacity || 0.15) / k;
                m = this.parentInverted ? "(-1,-1)" : "(" + r(a.offsetX, 1) + ", " + r(a.offsetY, 1) + ")";
                for (e = 1; e <= k; e++) f = g.cloneNode(0),
                            h = 2 * k + 1 - 2 * e, N(f, {isShadow: "true", stroke: a.color || "black", "stroke-opacity": l * e, "stroke-width": h, transform: "translate" + m, fill: V}), c && (N(f, "height", w(N(f, "height") - h, 0)), f.cutHeight = h), b ? b.element.appendChild(f) : g.parentNode.insertBefore(f, g), d.push(f);
                this.shadows = d
            }
            return this
        }, xGetter: function(a) {
            "circle" === this.element.nodeName && (a = {x: "cx", y: "cy"}[a] || a);
            return this._defaultGetter(a)
        }, _defaultGetter: function(a) {
            a = r(this[a], this.element ? this.element.getAttribute(a) : null, 0);
            /^[0-9\.]+$/.test(a) && (a =
                    parseFloat(a));
            return a
        }, dSetter: function(a, b, c) {
            a && a.join && (a = a.join(" "));
            /(NaN| {2}|^$)/.test(a) && (a = "M 0 0");
            c.setAttribute(b, a);
            this[b] = a
        }, dashstyleSetter: function(a) {
            var b;
            if (a = a && a.toLowerCase()) {
                a = a.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
                for (b = a.length; b--; ) a[b] = D(a[b]) * this.element.getAttribute("stroke-width");
                a = a.join(",");
                this.element.setAttribute("stroke-dasharray", a)
            }
        }, alignSetter: function(a) {
            this.element.setAttribute("text-anchor", {left: "start", center: "middle", right: "end"}[a])
        }, opacitySetter: function(a, b, c) {
            this[b] = a;
            c.setAttribute(b, a)
        }, "stroke-widthSetter": function(a, b, c) {
            0 === a && (a = 1E-5);
            this.strokeWidth = a;
            c.setAttribute(b, a)
        }, titleSetter: function(a) {
            var b = this.element.getElementsByTagName("title")[0];
            b || (b = z.createElementNS(na, "title"), this.element.appendChild(b));
            b.textContent = a
        }, textSetter: function(a) {
            a !==
                    this.textStr && (delete this.bBox, this.textStr = a, this.added && this.renderer.buildText(this))
        }, fillSetter: function(a, b, c) {
            "string" === typeof a ? c.setAttribute(b, a) : a && this.colorGradient(a, b, c)
        }, zIndexSetter: function(a, b, c) {
            c.setAttribute(b, a);
            this[b] = a
        }, _defaultSetter: function(a, b, c) {
            c.setAttribute(b, a)
        }};
    Z.prototype.yGetter = Z.prototype.xGetter;
    Z.prototype.translateXSetter = Z.prototype.translateYSetter = Z.prototype.rotationSetter = Z.prototype.verticalAlignSetter = Z.prototype.scaleXSetter = Z.prototype.scaleYSetter =
            function(a, b) {
                this[b] = a;
                this.doTransform = !0
            };
    Z.prototype.strokeSetter = Z.prototype.fillSetter;
    var Pa = function() {
        this.init.apply(this, arguments)
    };
    Pa.prototype = {Element: Z, init: function(a, b, c, d, e) {
            var f = location, g;
            d = this.createElement("svg").attr({version: "1.1"}).css(this.getStyle(d));
            g = d.element;
            a.appendChild(g);
            -1 === a.innerHTML.indexOf("xmlns") && N(g, "xmlns", na);
            this.isSVG = !0;
            this.box = g;
            this.boxWrapper = d;
            this.alignedObjects = [];
            this.url = (Da || Za) && z.getElementsByTagName("base").length ? f.href.replace(/#.*?$/,
                    "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : "";
            this.createElement("desc").add().element.appendChild(z.createTextNode("Created with @product.name@ @product.version@"));
            this.defs = this.createElement("defs").add();
            this.forExport = e;
            this.gradients = {};
            this.cache = {};
            this.setSize(b, c, !1);
            var h;
            Da && a.getBoundingClientRect && (this.subPixelFix = b = function() {
                H(a, {left: 0, top: 0});
                h = a.getBoundingClientRect();
                H(a, {left: Ca(h.left) - h.left + "px", top: Ca(h.top) - h.top + "px"})
            }, b(), L(J, "resize", b))
        }, getStyle: function(a) {
            return this.style =
                    t({fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif', fontSize: "12px"}, a)
        }, isHidden: function() {
            return!this.boxWrapper.getBBox().width
        }, destroy: function() {
            var a = this.defs;
            this.box = null;
            this.boxWrapper = this.boxWrapper.destroy();
            Ja(this.gradients || {});
            this.gradients = null;
            a && (this.defs = a.destroy());
            this.subPixelFix && X(J, "resize", this.subPixelFix);
            return this.alignedObjects = null
        }, createElement: function(a) {
            var b = new this.Element;
            b.init(this, a);
            return b
        }, draw: function() {
        },
        buildText: function(a) {
            for (var b = a.element, c = this, d = c.forExport, e = r(a.textStr, "").toString(), f = -1 !== e.indexOf("<"), g = b.childNodes, h, k, l = N(b, "x"), m = a.styles, n = a.textWidth, q = m && m.lineHeight, p = g.length, x = function(a) {
                return q ? D(q) : c.fontMetrics(/(px|em)$/.test(a && a.style.fontSize) ? a.style.fontSize : m && m.fontSize || c.style.fontSize || 12).h
            }; p--; ) b.removeChild(g[p]);
            f || -1 !== e.indexOf(" ") ? (h = /<.*style="([^"]+)".*>/, k = /<.*href="(http[^"]+)".*>/, n && !a.added && this.box.appendChild(b), e = f ? e.replace(/<(b|strong)>/g,
                    '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">').replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(/<br.*?>/g) : [e], "" === e[e.length - 1] && e.pop(), s(e, function(e, f) {
                var g, p = 0;
                e = e.replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||");
                g = e.split("|||");
                s(g, function(e) {
                    if ("" !== e || 1 === g.length) {
                        var q = {}, r = z.createElementNS(na, "tspan"), s;
                        h.test(e) && (s = e.match(h)[1].replace(/(;| |^)color([ :])/, "$1fill$2"), N(r, "style", s));
                        k.test(e) && !d &&
                                (N(r, "onclick", 'location.href="' + e.match(k)[1] + '"'), H(r, {cursor: "pointer"}));
                        e = (e.replace(/<(.|\n)*?>/g, "") || " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
                        if (" " !== e && (r.appendChild(z.createTextNode(e)), p ? q.dx = 0 : f && null !== l && (q.x = l), N(r, q), !p && f && (!da && d && H(r, {display: "block"}), N(r, "dy", x(r), Za && r.offsetHeight)), b.appendChild(r), p++, n)) {
                            e = e.replace(/([^\^])-/g, "$1- ").split(" ");
                            for (var q = 1 < e.length && "nowrap" !== m.whiteSpace, sb, t, E = a._clipHeight, v = [], u = x(), w = 1; q && (e.length || v.length); ) delete a.bBox,
                                        sb = a.getBBox(), t = sb.width, !da && c.forExport && (t = c.measureSpanWidth(r.firstChild.data, a.styles)), (sb = t > n) && 1 !== e.length ? (r.removeChild(r.firstChild), v.unshift(e.pop())) : (e = v, v = [], e.length && (w++, E && w * u > E ? (e = ["..."], a.attr("title", a.textStr)) : (r = z.createElementNS(na, "tspan"), N(r, {dy: u, x: l}), s && N(r, "style", s), b.appendChild(r), t > n && (n = t)))), e.length && r.appendChild(z.createTextNode(e.join(" ").replace(/- /g, "-")))
                        }
                    }
                })
            })) : b.appendChild(z.createTextNode(e))
        }, button: function(a, b, c, d, e, f, g, h, k) {
            var l = this.label(a,
                    b, c, k, null, null, null, null, "button"), m = 0, n, q, p, x, r, s;
            a = {x1: 0, y1: 0, x2: 0, y2: 1};
            e = A({"stroke-width": 1, stroke: "#CCCCCC", fill: {linearGradient: a, stops: [[0, "#FEFEFE"], [1, "#F6F6F6"]]}, r: 2, padding: 5, style: {color: "black"}}, e);
            p = e.style;
            delete e.style;
            f = A(e, {stroke: "#68A", fill: {linearGradient: a, stops: [[0, "#FFF"], [1, "#ACF"]]}}, f);
            x = f.style;
            delete f.style;
            g = A(e, {stroke: "#68A", fill: {linearGradient: a, stops: [[0, "#9BD"], [1, "#CDF"]]}}, g);
            r = g.style;
            delete g.style;
            h = A(e, {style: {color: "#CCC"}}, h);
            s = h.style;
            delete h.style;
            L(l.element, pa ? "mouseover" : "mouseenter", function() {
                3 !== m && l.attr(f).css(x)
            });
            L(l.element, pa ? "mouseout" : "mouseleave", function() {
                3 !== m && (n = [e, f, g][m], q = [p, x, r][m], l.attr(n).css(q))
            });
            l.setState = function(a) {
                (l.state = m = a) ? 2 === a ? l.attr(g).css(r) : 3 === a && l.attr(h).css(s) : l.attr(e).css(p)
            };
            return l.on("click", function() {
                3 !== m && d.call(l)
            }).attr(e).css(t({cursor: "default"}, p))
        }, crispLine: function(a, b) {
            a[1] === a[4] && (a[1] = a[4] = y(a[1]) - b % 2 / 2);
            a[2] === a[5] && (a[2] = a[5] = y(a[2]) + b % 2 / 2);
            return a
        }, path: function(a) {
            var b =
                    {fill: V};
            oa(a) ? b.d = a : Y(a) && t(b, a);
            return this.createElement("path").attr(b)
        }, circle: function(a, b, c) {
            a = Y(a) ? a : {x: a, y: b, r: c};
            b = this.createElement("circle");
            b.xSetter = function(a) {
                this.element.setAttribute("cx", a)
            };
            b.ySetter = function(a) {
                this.element.setAttribute("cy", a)
            };
            return b.attr(a)
        }, arc: function(a, b, c, d, e, f) {
            Y(a) && (b = a.y, c = a.r, d = a.innerR, e = a.start, f = a.end, a = a.x);
            a = this.symbol("arc", a || 0, b || 0, c || 0, c || 0, {innerR: d || 0, start: e || 0, end: f || 0});
            a.r = c;
            return a
        }, rect: function(a, b, c, d, e, f) {
            e = Y(a) ? a.r : e;
            var g =
                    this.createElement("rect");
            a = Y(a) ? a : a === u ? {} : {x: a, y: b, width: w(c, 0), height: w(d, 0)};
            f !== u && (a.strokeWidth = f, a = g.crisp(a));
            e && (a.r = e);
            g.rSetter = function(a) {
                N(this.element, {rx: a, ry: a})
            };
            return g.attr(a)
        }, setSize: function(a, b, c) {
            var d = this.alignedObjects, e = d.length;
            this.width = a;
            this.height = b;
            for (this.boxWrapper[r(c, !0)?"animate":"attr"]({width:a, height:b}); e--; ) d[e].align()
        }, g: function(a) {
            var b = this.createElement("g");
            return v(a) ? b.attr({"class": "highcharts-" + a}) : b
        }, image: function(a, b, c, d, e) {
            var f = {preserveAspectRatio: V};
            1 < arguments.length && t(f, {x: b, y: c, width: d, height: e});
            f = this.createElement("image").attr(f);
            f.element.setAttributeNS ? f.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", a) : f.element.setAttribute("hc-svg-href", a);
            return f
        }, symbol: function(a, b, c, d, e, f) {
            var g, h = this.symbols[a], h = h && h(y(b), y(c), d, e, f), k = /^url\((.*?)\)$/, l, m;
            h ? (g = this.path(h), t(g, {symbolName: a, x: b, y: c, width: d, height: e}), f && t(g, f)) : k.test(a) && (m = function(a, b) {
                a.element && (a.attr({width: b[0], height: b[1]}), a.alignByTranslate || a.translate(y((d -
                        b[0]) / 2), y((e - b[1]) / 2)))
            }, l = a.match(k)[1], a = Jb[l], g = this.image(l).attr({x: b, y: c}), g.isImg = !0, a ? m(g, a) : (g.attr({width: 0, height: 0}), la("img", {onload: function() {
                    m(g, Jb[l] = [this.width, this.height])
                }, src: l})));
            return g
        }, symbols: {circle: function(a, b, c, d) {
                var e = 0.166 * c;
                return["M", a + c / 2, b, "C", a + c + e, b, a + c + e, b + d, a + c / 2, b + d, "C", a - e, b + d, a - e, b, a + c / 2, b, "Z"]
            }, square: function(a, b, c, d) {
                return["M", a, b, "L", a + c, b, a + c, b + d, a, b + d, "Z"]
            }, triangle: function(a, b, c, d) {
                return["M", a + c / 2, b, "L", a + c, b + d, a, b + d, "Z"]
            }, "triangle-down": function(a,
                    b, c, d) {
                return["M", a, b, "L", a + c, b, a + c / 2, b + d, "Z"]
            }, diamond: function(a, b, c, d) {
                return["M", a + c / 2, b, "L", a + c, b + d / 2, a + c / 2, b + d, a, b + d / 2, "Z"]
            }, arc: function(a, b, c, d, e) {
                var f = e.start;
                c = e.r || c || d;
                var g = e.end - 0.001;
                d = e.innerR;
                var h = e.open, k = Ma(f), l = Ya(f), m = Ma(g), g = Ya(g);
                e = e.end - f < Fb ? 0 : 1;
                return["M", a + c * k, b + c * l, "A", c, c, 0, e, 1, a + c * m, b + c * g, h ? "M" : "L", a + d * m, b + d * g, "A", d, d, 0, e, 0, a + d * k, b + d * l, h ? "" : "Z"]
            }, callout: function(a, b, c, d, e) {
                var f = O(e && e.r || 0, c, d), g = f + 6, h = e && e.anchorX, k = e && e.anchorY;
                e = y(e.strokeWidth || 0) % 2 / 2;
                a += e;
                b +=
                        e;
                e = ["M", a + f, b, "L", a + c - f, b, "C", a + c, b, a + c, b, a + c, b + f, "L", a + c, b + d - f, "C", a + c, b + d, a + c, b + d, a + c - f, b + d, "L", a + f, b + d, "C", a, b + d, a, b + d, a, b + d - f, "L", a, b + f, "C", a, b, a, b, a + f, b];
                h && h > c && k > b + g && k < b + d - g ? e.splice(13, 3, "L", a + c, k - 6, a + c + 6, k, a + c, k + 6, a + c, b + d - f) : h && 0 > h && k > b + g && k < b + d - g ? e.splice(33, 3, "L", a, k + 6, a - 6, k, a, k - 6, a, b + f) : k && k > d && h > a + g && h < a + c - g ? e.splice(23, 3, "L", h + 6, b + d, h, b + d + 6, h - 6, b + d, a + f, b + d) : k && 0 > k && h > a + g && h < a + c - g && e.splice(3, 3, "L", h - 6, b, h, b - 6, h + 6, b, c - f, b);
                return e
            }}, clipRect: function(a, b, c, d) {
            var e = "highcharts-" + nb++,
                    f = this.createElement("clipPath").attr({id: e}).add(this.defs);
            a = this.rect(a, b, c, d, 0).add(f);
            a.id = e;
            a.clipPath = f;
            return a
        }, text: function(a, b, c, d) {
            var e = ea || !da && this.forExport, f = {};
            if (d && !this.forExport) return this.html(a, b, c);
            f.x = Math.round(b || 0);
            c && (f.y = Math.round(c));
            if (a || 0 === a) f.text = a;
            a = this.createElement("text").attr(f);
            e && a.css({position: "absolute"});
            d || (a.xSetter = function(a, b, c) {
                var d = c.childNodes, e, f;
                for (f = 1; f < d.length; f++) e = d[f], e.getAttribute("x") === c.getAttribute("x") && e.setAttribute("x",
                            a);
                c.setAttribute(b, a)
            });
            return a
        }, fontMetrics: function(a) {
            a = a || this.style.fontSize;
            a = /px/.test(a) ? D(a) : /em/.test(a) ? 12 * parseFloat(a) : 12;
            a = 24 > a ? a + 4 : y(1.2 * a);
            var b = y(0.8 * a);
            return{h: a, b: b}
        }, label: function(a, b, c, d, e, f, g, h, k) {
            function l() {
                var a, b;
                a = x.element.style;
                P = (void 0 === Ga || void 0 === tb || p.styles.textAlign) && x.textStr && x.getBBox();
                p.width = (Ga || P.width || 0) + 2 * C + w;
                p.height = (tb || P.height || 0) + 2 * C;
                Qa = C + q.fontMetrics(a && a.fontSize).b;
                z && (r || (a = y(-ta * C), b = h ? -Qa : 0, p.box = r = d ? q.symbol(d, a, b, p.width, p.height,
                        E) : q.rect(a, b, p.width, p.height, 0, E[Pb]), r.attr("fill", V).add(p)), r.isImg || r.attr(t({width: y(p.width), height: y(p.height)}, E)), E = null)
            }
            function m() {
                var a = p.styles, a = a && a.textAlign, b = w + C * (1 - ta), c;
                c = h ? 0 : Qa;
                v(Ga) && P && ("center" === a || "right" === a) && (b += {center: 0.5, right: 1}[a] * (Ga - P.width));
                if (b !== x.x || c !== x.y) x.attr("x", b), c !== u && x.attr("y", c);
                x.x = b;
                x.y = c
            }
            function n(a, b) {
                r ? r.attr(a, b) : E[a] = b
            }
            var q = this, p = q.g(k), x = q.text("", 0, 0, g).attr({zIndex: 1}), r, P, ta = 0, C = 3, w = 0, Ga, tb, K, I, Kb = 0, E = {}, Qa, z;
            p.onAdd = function() {
                x.add(p);
                p.attr({text: a || "", x: b, y: c});
                r && v(e) && p.attr({anchorX: e, anchorY: f})
            };
            p.widthSetter = function(a) {
                Ga = a
            };
            p.heightSetter = function(a) {
                tb = a
            };
            p.paddingSetter = function(a) {
                v(a) && a !== C && (C = a, m())
            };
            p.paddingLeftSetter = function(a) {
                v(a) && a !== w && (w = a, m())
            };
            p.alignSetter = function(a) {
                ta = {left: 0, center: 0.5, right: 1}[a]
            };
            p.textSetter = function(a) {
                a !== u && x.textSetter(a);
                l();
                m()
            };
            p["stroke-widthSetter"] = function(a, b) {
                a && (z = !0);
                Kb = a % 2 / 2;
                n(b, a)
            };
            p.strokeSetter = p.fillSetter = p.rSetter = function(a, b) {
                "fill" === b && a && (z = !0);
                n(b,
                        a)
            };
            p.anchorXSetter = function(a, b) {
                e = a;
                n(b, a + Kb - K)
            };
            p.anchorYSetter = function(a, b) {
                f = a;
                n(b, a - I)
            };
            p.xSetter = function(a) {
                p.x = a;
                ta && (a -= ta * ((Ga || P.width) + C));
                K = y(a);
                p.attr("translateX", K)
            };
            p.ySetter = function(a) {
                I = p.y = y(a);
                p.attr("translateY", I)
            };
            var B = p.css;
            return t(p, {css: function(a) {
                    if (a) {
                        var b = {};
                        a = A(a);
                        s("fontSize fontWeight fontFamily color lineHeight width textDecoration textShadow".split(" "), function(c) {
                            a[c] !== u && (b[c] = a[c], delete a[c])
                        });
                        x.css(b)
                    }
                    return B.call(p, a)
                }, getBBox: function() {
                    return{width: P.width +
                                2 * C, height: P.height + 2 * C, x: P.x - C, y: P.y - C}
                }, shadow: function(a) {
                    r && r.shadow(a);
                    return p
                }, destroy: function() {
                    X(p.element, "mouseenter");
                    X(p.element, "mouseleave");
                    x && (x = x.destroy());
                    r && (r = r.destroy());
                    Z.prototype.destroy.call(p);
                    p = q = l = m = n = null
                }})
        }};
    $a = Pa;
    t(Z.prototype, {htmlCss: function(a) {
            var b = this.element;
            if (b = a && "SPAN" === b.tagName && a.width) delete a.width, this.textWidth = b, this.updateTransform();
            this.styles = t(this.styles, a);
            H(this.element, a);
            return this
        }, htmlGetBBox: function() {
            var a = this.element, b = this.bBox;
            b || ("text" === a.nodeName && (a.style.position = "absolute"), b = this.bBox = {x: a.offsetLeft, y: a.offsetTop, width: a.offsetWidth, height: a.offsetHeight});
            return b
        }, htmlUpdateTransform: function() {
            if (this.added) {
                var a = this.renderer, b = this.element, c = this.translateX || 0, d = this.translateY || 0, e = this.x || 0, f = this.y || 0, g = this.textAlign || "left", h = {left: 0, center: 0.5, right: 1}[g], k = this.shadows;
                H(b, {marginLeft: c, marginTop: d});
                k && s(k, function(a) {
                    H(a, {marginLeft: c + 1, marginTop: d + 1})
                });
                this.inverted && s(b.childNodes, function(c) {
                    a.invertChild(c,
                            b)
                });
                if ("SPAN" === b.tagName) {
                    var l = this.rotation, m, n = D(this.textWidth), q = [l, g, b.innerHTML, this.textWidth].join();
                    q !== this.cTT && (m = a.fontMetrics(b.style.fontSize).b, v(l) && this.setSpanRotation(l, h, m), k = r(this.elemWidth, b.offsetWidth), k > n && /[ \-]/.test(b.textContent || b.innerText) && (H(b, {width: n + "px", display: "block", whiteSpace: "normal"}), k = n), this.getSpanCorrection(k, m, h, l, g));
                    H(b, {left: e + (this.xCorr || 0) + "px", top: f + (this.yCorr || 0) + "px"});
                    Za && (m = b.offsetHeight);
                    this.cTT = q
                }
            } else this.alignOnAdd = !0
        }, setSpanRotation: function(a,
                b, c) {
            var d = {}, e = pa ? "-ms-transform" : Za ? "-webkit-transform" : Da ? "MozTransform" : Hb ? "-o-transform" : "";
            d[e] = d.transform = "rotate(" + a + "deg)";
            d[e + (Da ? "Origin" : "-origin")] = d.transformOrigin = 100 * b + "% " + c + "px";
            H(this.element, d)
        }, getSpanCorrection: function(a, b, c) {
            this.xCorr = -a * c;
            this.yCorr = -b
        }});
    t(Pa.prototype, {html: function(a, b, c) {
            var d = this.createElement("span"), e = d.element, f = d.renderer;
            d.textSetter = function(a) {
                a !== e.innerHTML && delete this.bBox;
                e.innerHTML = this.textStr = a
            };
            d.xSetter = d.ySetter = d.alignSetter = d.rotationSetter =
                    function(a, b) {
                        "align" === b && (b = "textAlign");
                        d[b] = a;
                        d.htmlUpdateTransform()
                    };
            d.attr({text: a, x: y(b), y: y(c)}).css({position: "absolute", whiteSpace: "nowrap", fontFamily: this.style.fontFamily, fontSize: this.style.fontSize});
            d.css = d.htmlCss;
            f.isSVG && (d.add = function(a) {
                var b, c = f.box.parentNode, l = [];
                if (this.parentGroup = a) {
                    if (b = a.div, !b) {
                        for (; a; ) l.push(a), a = a.parentGroup;
                        s(l.reverse(), function(a) {
                            var d;
                            b = a.div = a.div || la(Ua, {className: N(a.element, "class")}, {position: "absolute", left: (a.translateX || 0) + "px", top: (a.translateY ||
                                        0) + "px"}, b || c);
                            d = b.style;
                            t(a, {translateXSetter: function(b, c) {
                                    d.left = b + "px";
                                    a[c] = b;
                                    a.doTransform = !0
                                }, translateYSetter: function(b, c) {
                                    d.top = b + "px";
                                    a[c] = b;
                                    a.doTransform = !0
                                }, visibilitySetter: function(a, b) {
                                    d[b] = a
                                }})
                        })
                    }
                } else b = c;
                b.appendChild(e);
                d.added = !0;
                d.alignOnAdd && d.htmlUpdateTransform();
                return d
            });
            return d
        }});
    var ub, Lb;
    ea && (W.CanVGRenderer = ub = function() {
        na = "http://www.w3.org/1999/xhtml"
    }, ub.prototype.symbols = {}, Lb = function() {
        function a() {
            var a = b.length, d;
            for (d = 0; d < a; d++) b[d]();
            b = []
        }
        var b = [];
        return{push: function(c,
                    d) {
                0 === b.length && Qb(d, a);
                b.push(c)
            }}
    }(), $a = ub);
    Ba.prototype = {addLabel: function() {
            var a = this.axis, b = a.options, c = a.chart, d = a.horiz, e = a.categories, f = a.names, g = this.pos, h = b.labels, k = a.tickPositions, d = d && e && !h.step && !h.staggerLines && !h.rotation && c.plotWidth / k.length || !d && (c.margin[3] || 0.33 * c.chartWidth), l = g === k[0], m = g === k[k.length - 1], n, f = e ? r(e[g], f[g], g) : g, e = this.label, q = k.info;
            a.isDatetimeAxis && q && (n = b.dateTimeLabelFormats[q.higherRanks[g] || q.unitName]);
            this.isFirst = l;
            this.isLast = m;
            b = a.labelFormatter.call({axis: a,
                chart: c, isFirst: l, isLast: m, dateTimeLabelFormat: n, value: a.isLog ? ma(T(f)) : f});
            g = d && {width: w(1, y(d - 2 * (h.padding || 10))) + "px"};
            g = t(g, h.style);
            v(e) ? e && e.attr({text: b}).css(g) : (n = {align: a.labelAlign}, ca(h.rotation) && (n.rotation = h.rotation), d && h.ellipsis && (n._clipHeight = a.len / k.length), this.label = v(b) && h.enabled ? c.renderer.text(b, 0, 0, h.useHTML).attr(n).css(g).add(a.labelGroup) : null)
        }, getLabelSize: function() {
            var a = this.label, b = this.axis;
            return a ? a.getBBox()[b.horiz ? "height" : "width"] : 0
        }, getLabelSides: function() {
            var a =
                    this.label.getBBox(), b = this.axis, c = b.horiz, d = b.options.labels, a = c ? a.width : a.height, b = c ? d.x - a * {left: 0, center: 0.5, right: 1}[b.labelAlign] : 0;
            return[b, c ? a + b : a]
        }, handleOverflow: function(a, b) {
            var c = !0, d = this.axis, e = this.isFirst, f = this.isLast, g = d.horiz ? b.x : b.y, h = d.reversed, k = d.tickPositions, l = this.getLabelSides(), m = l[0], l = l[1], n, q, p, x = this.label.line || 0;
            n = d.labelEdge;
            q = d.justifyLabels && (e || f);
            n[x] === u || g + m > n[x] ? n[x] = g + l : q || (c = !1);
            if (q) {
                n = (q = d.justifyToPlot) ? d.pos : 0;
                q = q ? n + d.len : d.chart.chartWidth;
                do a += e ?
                            1 : -1, p = d.ticks[k[a]];
                while (k[a] && (!p || p.label.line !== x));
                d = p && p.label.xy && p.label.xy.x + p.getLabelSides()[e ? 0 : 1];
                e && !h || f && h ? g + m < n && (g = n - m, p && g + l > d && (c = !1)) : g + l > q && (g = q - l, p && g + m < d && (c = !1));
                b.x = g
            }
            return c
        }, getPosition: function(a, b, c, d) {
            var e = this.axis, f = e.chart, g = d && f.oldChartHeight || f.chartHeight;
            return{x: a ? e.translate(b + c, null, null, d) + e.transB : e.left + e.offset + (e.opposite ? (d && f.oldChartWidth || f.chartWidth) - e.right - e.left : 0), y: a ? g - e.bottom + e.offset - (e.opposite ? e.height : 0) : g - e.translate(b + c, null, null,
                        d) - e.transB}
        }, getLabelPosition: function(a, b, c, d, e, f, g, h) {
            var k = this.axis, l = k.transA, m = k.reversed, n = k.staggerLines, q = k.chart.renderer.fontMetrics(e.style.fontSize).b, p = e.rotation;
            a = a + e.x - (f && d ? f * l * (m ? -1 : 1) : 0);
            b = b + e.y - (f && !d ? f * l * (m ? 1 : -1) : 0);
            p && 2 === k.side && (b -= q - q * Ma(p * Gb));
            v(e.y) || p || (b += q - c.getBBox().height / 2);
            n && (c.line = g / (h || 1) % n, b += k.labelOffset / n * c.line);
            return{x: a, y: b}
        }, getMarkPath: function(a, b, c, d, e, f) {
            return f.crispLine(["M", a, b, "L", a + (e ? 0 : -c), b + (e ? c : 0)], d)
        }, render: function(a, b, c) {
            var d = this.axis,
                    e = d.options, f = d.chart.renderer, g = d.horiz, h = this.type, k = this.label, l = this.pos, m = e.labels, n = this.gridLine, q = h ? h + "Grid" : "grid", p = h ? h + "Tick" : "tick", x = e[q + "LineWidth"], s = e[q + "LineColor"], P = e[q + "LineDashStyle"], t = e[p + "Length"], q = e[p + "Width"] || 0, C = e[p + "Color"], v = e[p + "Position"], p = this.mark, w = m.step, y = !0, K = d.tickmarkOffset, I = this.getPosition(g, l, K, b), z = I.x, I = I.y, E = g && z === d.pos + d.len || !g && I === d.pos ? -1 : 1;
            this.isActive = !0;
            if (x && (l = d.getPlotLinePath(l + K, x * E, b, !0), n === u && (n = {stroke: s, "stroke-width": x}, P && (n.dashstyle =
                    P), h || (n.zIndex = 1), b && (n.opacity = 0), this.gridLine = n = x ? f.path(l).attr(n).add(d.gridGroup) : null), !b && n && l)) n[this.isNew ? "attr" : "animate"]({d: l, opacity: c});
            q && t && ("inside" === v && (t = -t), d.opposite && (t = -t), h = this.getMarkPath(z, I, t, q * E, g, f), p ? p.animate({d: h, opacity: c}) : this.mark = f.path(h).attr({stroke: C, "stroke-width": q, opacity: c}).add(d.axisGroup));
            k && !isNaN(z) && (k.xy = I = this.getLabelPosition(z, I, k, g, m, K, a, w), this.isFirst && !this.isLast && !r(e.showFirstLabel, 1) || this.isLast && !this.isFirst && !r(e.showLastLabel,
                    1) ? y = !1 : d.isRadial || m.step || m.rotation || b || 0 === c || (y = this.handleOverflow(a, I)), w && a % w && (y = !1), y && !isNaN(I.y) ? (I.opacity = c, k[this.isNew ? "attr" : "animate"](I), this.isNew = !1) : k.attr("y", -9999))
        }, destroy: function() {
            Ja(this, this.axis)
        }};
    W.PlotLineOrBand = function(a, b) {
        this.axis = a;
        b && (this.options = b, this.id = b.id)
    };
    W.PlotLineOrBand.prototype = {render: function() {
            var a = this, b = a.axis, c = b.horiz, d = (b.pointRange || 0) / 2, e = a.options, f = e.label, g = a.label, h = e.width, k = e.to, l = e.from, m = v(l) && v(k), n = e.value, q = e.dashStyle,
                    p = a.svgElem, x = [], s, P = e.color, t = e.zIndex, C = e.events, u = {}, y = b.chart.renderer;
            b.isLog && (l = wa(l), k = wa(k), n = wa(n));
            if (h) x = b.getPlotLinePath(n, h), u = {stroke: P, "stroke-width": h}, q && (u.dashstyle = q);
            else if (m) l = w(l, b.min - d), k = O(k, b.max + d), x = b.getPlotBandPath(l, k, e), P && (u.fill = P), e.borderWidth && (u.stroke = e.borderColor, u["stroke-width"] = e.borderWidth);
            else return;
            v(t) && (u.zIndex = t);
            if (p) x ? p.animate({d: x}, null, p.onGetPath) : (p.hide(), p.onGetPath = function() {
                    p.show()
                }, g && (a.label = g = g.destroy()));
            else if (x && x.length &&
                    (a.svgElem = p = y.path(x).attr(u).add(), C)) for (s in d = function(b) {
                    p.on(b, function(c) {
                        C[b].apply(a, [c])
                    })
                }, C) d(s);
            f && v(f.text) && x && x.length && 0 < b.width && 0 < b.height ? (f = A({align: c && m && "center", x: c ? !m && 4 : 10, verticalAlign: !c && m && "middle", y: c ? m ? 16 : 10 : m ? 6 : -4, rotation: c && !m && 90}, f), g || (u = {align: f.textAlign || f.align, rotation: f.rotation}, v(t) && (u.zIndex = t), a.label = g = y.text(f.text, 0, 0, f.useHTML).attr(u).css(f.style).add()), b = [x[1], x[4], r(x[6], x[1])], x = [x[2], x[5], r(x[7], x[2])], c = za(b), m = za(x), g.align(f, !1, {x: c, y: m,
                width: qa(b) - c, height: qa(x) - m}), g.show()) : g && g.hide();
            return a
        }, destroy: function() {
            ka(this.axis.plotLinesAndBands, this);
            delete this.axis;
            Ja(this)
        }};
    ra.prototype = {defaultOptions: {dateTimeLabelFormats: {millisecond: "%H:%M:%S.%L", second: "%H:%M:%S", minute: "%H:%M", hour: "%H:%M", day: "%e. %b", week: "%e. %b", month: "%b '%y", year: "%Y"}, endOnTick: !1, gridLineColor: "#C0C0C0", labels: rb, lineColor: "#C0D0E0", lineWidth: 1, minPadding: 0.01, maxPadding: 0.01, minorGridLineColor: "#E0E0E0", minorGridLineWidth: 1, minorTickColor: "#A0A0A0",
            minorTickLength: 2, minorTickPosition: "outside", startOfWeek: 1, startOnTick: !1, tickColor: "#C0D0E0", tickLength: 10, tickmarkPlacement: "between", tickPixelInterval: 100, tickPosition: "outside", tickWidth: 1, title: {align: "middle", style: {color: "#707070"}}, type: "linear"}, defaultYAxisOptions: {endOnTick: !0, gridLineWidth: 1, tickPixelInterval: 72, showLastLabel: !0, labels: {x: -8, y: 3}, lineWidth: 0, maxPadding: 0.05, minPadding: 0.05, startOnTick: !0, tickWidth: 0, title: {rotation: 270, text: "Values"}, stackLabels: {enabled: !1, formatter: function() {
                    return ua(this.total,
                            -1)
                }, style: rb.style}}, defaultLeftAxisOptions: {labels: {x: -15, y: null}, title: {rotation: 270}}, defaultRightAxisOptions: {labels: {x: 15, y: null}, title: {rotation: 90}}, defaultBottomAxisOptions: {labels: {x: 0, y: 20}, title: {rotation: 0}}, defaultTopAxisOptions: {labels: {x: 0, y: -15}, title: {rotation: 0}}, init: function(a, b) {
            var c = b.isX;
            this.horiz = a.inverted ? !c : c;
            this.coll = (this.isXAxis = c) ? "xAxis" : "yAxis";
            this.opposite = b.opposite;
            this.side = b.side || (this.horiz ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3);
            this.setOptions(b);
            var d =
                    this.options, e = d.type;
            this.labelFormatter = d.labels.formatter || this.defaultLabelFormatter;
            this.userOptions = b;
            this.minPixelPadding = 0;
            this.chart = a;
            this.reversed = d.reversed;
            this.zoomEnabled = !1 !== d.zoomEnabled;
            this.categories = d.categories || "category" === e;
            this.names = [];
            this.isLog = "logarithmic" === e;
            this.isDatetimeAxis = "datetime" === e;
            this.isLinked = v(d.linkedTo);
            this.tickmarkOffset = this.categories && "between" === d.tickmarkPlacement ? 0.5 : 0;
            this.ticks = {};
            this.labelEdge = [];
            this.minorTicks = {};
            this.plotLinesAndBands =
            [];
            this.alternateBands = {};
            this.len = 0;
            this.minRange = this.userMinRange = d.minRange || d.maxZoom;
            this.range = d.range;
            this.offset = d.offset || 0;
            this.stacks = {};
            this.oldStacks = {};
            this.min = this.max = null;
            this.crosshair = r(d.crosshair, ga(a.options.tooltip.crosshairs)[c ? 0 : 1], !1);
            var f, d = this.options.events;
            -1 === Ea(this, a.axes) && (c && !this.isColorAxis ? a.axes.splice(a.xAxis.length, 0, this) : a.axes.push(this), a[this.coll].push(this));
            this.series = this.series || [];
            a.inverted && c && this.reversed === u && (this.reversed = !0);
            this.removePlotLine =
                    this.removePlotBand = this.removePlotBandOrLine;
            for (f in d) L(this, f, d[f]);
            this.isLog && (this.val2lin = wa, this.lin2val = T)
        }, setOptions: function(a) {
            this.options = A(this.defaultOptions, this.isXAxis ? {} : this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions][this.side], A(G[this.coll], a))
        }, defaultLabelFormatter: function() {
            var a = this.axis, b = this.value, c = a.categories, d = this.dateTimeLabelFormat, e = G.lang.numericSymbols, f = e && e.length,
                    g, h = a.options.labels.format, a = a.isLog ? b : a.tickInterval;
            if (h) g = ya(h, this);
            else if (c) g = b;
            else if (d) g = Ra(d, b);
            else if (f && 1E3 <= a) for (; f-- && g === u; ) c = Math.pow(1E3, f + 1), a >= c && null !== e[f] && (g = ua(b / c, -1) + e[f]);
            g === u && (g = 1E4 <= Q(b) ? ua(b, 0) : ua(b, -1, u, ""));
            return g
        }, getSeriesExtremes: function() {
            var a = this, b = a.chart;
            a.hasVisibleSeries = !1;
            a.dataMin = a.dataMax = null;
            a.buildStacks && a.buildStacks();
            s(a.series, function(c) {
                if (c.visible || !b.options.chart.ignoreHiddenSeries) {
                    var d;
                    d = c.options.threshold;
                    var e;
                    a.hasVisibleSeries =
                            !0;
                    a.isLog && 0 >= d && (d = null);
                    a.isXAxis ? (d = c.xData, d.length && (a.dataMin = O(r(a.dataMin, d[0]), za(d)), a.dataMax = w(r(a.dataMax, d[0]), qa(d)))) : (c.getExtremes(), e = c.dataMax, c = c.dataMin, v(c) && v(e) && (a.dataMin = O(r(a.dataMin, c), c), a.dataMax = w(r(a.dataMax, e), e)), v(d) && (a.dataMin >= d ? (a.dataMin = d, a.ignoreMinPadding = !0) : a.dataMax < d && (a.dataMax = d, a.ignoreMaxPadding = !0)))
                }
            })
        }, translate: function(a, b, c, d, e, f) {
            var g = 1, h = 0, k = d ? this.oldTransA : this.transA;
            d = d ? this.oldMin : this.min;
            var l = this.minPixelPadding;
            e = (this.options.ordinal ||
                    this.isLog && e) && this.lin2val;
            k || (k = this.transA);
            c && (g *= -1, h = this.len);
            this.reversed && (g *= -1, h -= g * (this.sector || this.len));
            b ? (a = a * g + h - l, a = a / k + d, e && (a = this.lin2val(a))) : (e && (a = this.val2lin(a)), "between" === f && (f = 0.5), a = g * (a - d) * k + h + g * l + (ca(f) ? k * f * this.pointRange : 0));
            return a
        }, toPixels: function(a, b) {
            return this.translate(a, !1, !this.horiz, null, !0) + (b ? 0 : this.pos)
        }, toValue: function(a, b) {
            return this.translate(a - (b ? 0 : this.pos), !0, !this.horiz, null, !0)
        }, getPlotLinePath: function(a, b, c, d, e) {
            var f = this.chart, g =
                    this.left, h = this.top, k, l, m = c && f.oldChartHeight || f.chartHeight, n = c && f.oldChartWidth || f.chartWidth, q;
            k = this.transB;
            e = r(e, this.translate(a, null, null, c));
            a = c = y(e + k);
            k = l = y(m - e - k);
            if (isNaN(e)) q = !0;
            else if (this.horiz) {
                if (k = h, l = m - this.bottom, a < g || a > g + this.width) q = !0
            } else if (a = g, c = n - this.right, k < h || k > h + this.height) q = !0;
            return q && !d ? null : f.renderer.crispLine(["M", a, k, "L", c, l], b || 1)
        }, getLinearTickPositions: function(a, b, c) {
            var d, e = ma(R(b / a) * a), f = ma(Ca(c / a) * a), g = [];
            if (b === c && ca(b)) return[b];
            for (b = e; b <= f; ) {
                g.push(b);
                b = ma(b + a);
                if (b === d) break;
                d = b
            }
            return g
        }, getMinorTickPositions: function() {
            var a = this.options, b = this.tickPositions, c = this.minorTickInterval, d = [], e;
            if (this.isLog) for (e = b.length, a = 1; a < e; a++) d = d.concat(this.getLogTickPositions(c, b[a - 1], b[a], !0));
            else if (this.isDatetimeAxis && "auto" === a.minorTickInterval) d = d.concat(this.getTimeTicks(this.normalizeTimeTickInterval(c), this.min, this.max, a.startOfWeek)), d[0] < this.min && d.shift();
            else for (b = this.min + (b[0] - this.min) % c; b <= this.max; b += c) d.push(b);
            return d
        }, adjustForMinRange: function() {
            var a =
                    this.options, b = this.min, c = this.max, d, e = this.dataMax - this.dataMin >= this.minRange, f, g, h, k, l;
            this.isXAxis && this.minRange === u && !this.isLog && (v(a.min) || v(a.max) ? this.minRange = null : (s(this.series, function(a) {
                k = a.xData;
                for (g = l = a.xIncrement?1:k.length - 1; 0 < g; g--) if (h = k[g] - k[g - 1], f === u || h < f) f = h
            }), this.minRange = O(5 * f, this.dataMax - this.dataMin)));
            if (c - b < this.minRange) {
                var m = this.minRange;
                d = (m - c + b) / 2;
                d = [b - d, r(a.min, b - d)];
                e && (d[2] = this.dataMin);
                b = qa(d);
                c = [b + m, r(a.max, b + m)];
                e && (c[2] = this.dataMax);
                c = za(c);
                c - b < m &&
                        (d[0] = c - m, d[1] = r(a.min, c - m), b = qa(d))
            }
            this.min = b;
            this.max = c
        }, setAxisTranslation: function(a) {
            var b = this, c = b.max - b.min, d = b.axisPointRange || 0, e, f = 0, g = 0, h = b.linkedParent, k = !!b.categories, l = b.transA;
            if (b.isXAxis || k || d) h ? (f = h.minPointOffset, g = h.pointRangePadding) : s(b.series, function(a) {
                    var h = k ? 1 : b.isXAxis ? a.pointRange : b.axisPointRange || 0, l = a.options.pointPlacement, p = a.closestPointRange;
                    h > c && (h = 0);
                    d = w(d, h);
                    f = w(f, $(l) ? 0 : h / 2);
                    g = w(g, "on" === l ? 0 : h);
                    !a.noSharedTooltip && v(p) && (e = v(e) ? O(e, p) : p)
                }), h = b.ordinalSlope &&
                        e ? b.ordinalSlope / e : 1, b.minPointOffset = f *= h, b.pointRangePadding = g *= h, b.pointRange = O(d, c), b.closestPointRange = e;
            a && (b.oldTransA = l);
            b.translationSlope = b.transA = l = b.len / (c + g || 1);
            b.transB = b.horiz ? b.left : b.bottom;
            b.minPixelPadding = l * f
        }, setTickPositions: function(a) {
            var b = this, c = b.chart, d = b.options, e = b.isLog, f = b.isDatetimeAxis, g = b.isXAxis, h = b.isLinked, k = b.options.tickPositioner, l = d.maxPadding, m = d.minPadding, n = d.tickInterval, q = d.minTickInterval, p = d.tickPixelInterval, x, t = b.categories;
            h ? (b.linkedParent = c[b.coll][d.linkedTo],
                    c = b.linkedParent.getExtremes(), b.min = r(c.min, c.dataMin), b.max = r(c.max, c.dataMax), d.type !== b.linkedParent.options.type && ha(11, 1)) : (b.min = r(b.userMin, d.min, b.dataMin), b.max = r(b.userMax, d.max, b.dataMax));
            e && (!a && 0 >= O(b.min, r(b.dataMin, b.min)) && ha(10, 1), b.min = ma(wa(b.min)), b.max = ma(wa(b.max)));
            b.range && v(b.max) && (b.userMin = b.min = w(b.min, b.max - b.range), b.userMax = b.max, b.range = null);
            b.beforePadding && b.beforePadding();
            b.adjustForMinRange();
            !(t || b.axisPointRange || b.usePercentage || h) && v(b.min) && v(b.max) &&
                    (c = b.max - b.min) && (v(d.min) || v(b.userMin) || !m || !(0 > b.dataMin) && b.ignoreMinPadding || (b.min -= c * m), v(d.max) || v(b.userMax) || !l || !(0 < b.dataMax) && b.ignoreMaxPadding || (b.max += c * l));
            ca(d.floor) && (b.min = w(b.min, d.floor));
            ca(d.ceiling) && (b.max = O(b.max, d.ceiling));
            b.min === b.max || void 0 === b.min || void 0 === b.max ? b.tickInterval = 1 : h && !n && p === b.linkedParent.options.tickPixelInterval ? b.tickInterval = b.linkedParent.tickInterval : (b.tickInterval = r(n, t ? 1 : (b.max - b.min) * p / w(b.len, p)), !v(n) && b.len < p && !this.isRadial && !this.isLog &&
                    !t && d.startOnTick && d.endOnTick && (x = !0, b.tickInterval /= 4));
            g && !a && s(b.series, function(a) {
                a.processData(b.min !== b.oldMin || b.max !== b.oldMax)
            });
            b.setAxisTranslation(!0);
            b.beforeSetTickPositions && b.beforeSetTickPositions();
            b.postProcessTickInterval && (b.tickInterval = b.postProcessTickInterval(b.tickInterval));
            b.pointRange && (b.tickInterval = w(b.pointRange, b.tickInterval));
            !n && b.tickInterval < q && (b.tickInterval = q);
            f || e || n || (b.tickInterval = yb(b.tickInterval, null, M.pow(10, R(M.log(b.tickInterval) / M.LN10)), d));
            b.minorTickInterval = "auto" === d.minorTickInterval && b.tickInterval ? b.tickInterval / 5 : d.minorTickInterval;
            b.tickPositions = a = d.tickPositions ? [].concat(d.tickPositions) : k && k.apply(b, [b.min, b.max]);
            a || (!b.ordinalPositions && (b.max - b.min) / b.tickInterval > w(2 * b.len, 200) && ha(19, !0), a = f ? b.getTimeTicks(b.normalizeTimeTickInterval(b.tickInterval, d.units), b.min, b.max, d.startOfWeek, b.ordinalPositions, b.closestPointRange, !0) : e ? b.getLogTickPositions(b.tickInterval, b.min, b.max) : b.getLinearTickPositions(b.tickInterval,
                    b.min, b.max), x && a.splice(1, a.length - 2), b.tickPositions = a);
            h || (e = a[0], f = a[a.length - 1], h = b.minPointOffset || 0, d.startOnTick ? b.min = e : b.min - h > e && a.shift(), d.endOnTick ? b.max = f : b.max + h < f && a.pop(), 1 === a.length && (d = 1E13 < Q(b.max) ? 1 : 0.001, b.min -= d, b.max += d))
        }, setMaxTicks: function() {
            var a = this.chart, b = a.maxTicks || {}, c = this.tickPositions, d = this._maxTicksKey = [this.coll, this.pos, this.len].join("-");
            !this.isLinked && !this.isDatetimeAxis && c && c.length > (b[d] || 0) && !1 !== this.options.alignTicks && (b[d] = c.length);
            a.maxTicks =
            b
        }, adjustTickAmount: function() {
            var a = this._maxTicksKey, b = this.tickPositions, c = this.chart.maxTicks;
            if (c && c[a] && !this.isDatetimeAxis && !this.categories && !this.isLinked && !1 !== this.options.alignTicks && this.min !== u) {
                var d = this.tickAmount, e = b.length;
                this.tickAmount = a = c[a];
                if (e < a) {
                    for (; b.length < a; ) b.push(ma(b[b.length - 1] + this.tickInterval));
                    this.transA *= (e - 1) / (a - 1);
                    this.max = b[b.length - 1]
                }
                v(d) && a !== d && (this.isDirty = !0)
            }
        }, setScale: function() {
            var a = this.stacks, b, c, d, e;
            this.oldMin = this.min;
            this.oldMax = this.max;
            this.oldAxisLength = this.len;
            this.setAxisSize();
            e = this.len !== this.oldAxisLength;
            s(this.series, function(a) {
                if (a.isDirtyData || a.isDirty || a.xAxis.isDirty) d = !0
            });
            if (e || d || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax) {
                if (!this.isXAxis) for (b in a) for (c in a[b]) a[b][c].total = null, a[b][c].cum = 0;
                this.forceRedraw = !1;
                this.getSeriesExtremes();
                this.setTickPositions();
                this.oldUserMin = this.userMin;
                this.oldUserMax = this.userMax;
                this.isDirty || (this.isDirty = e || this.min !==
                        this.oldMin || this.max !== this.oldMax)
            } else if (!this.isXAxis) for (b in this.oldStacks && (a = this.stacks = this.oldStacks), a) for (c in a[b]) a[b][c].cum = a[b][c].total;
            this.setMaxTicks()
        }, setExtremes: function(a, b, c, d, e) {
            var f = this, g = f.chart;
            c = r(c, !0);
            e = t(e, {min: a, max: b});
            F(f, "setExtremes", e, function() {
                f.userMin = a;
                f.userMax = b;
                f.eventArgs = e;
                f.isDirtyExtremes = !0;
                c && g.redraw(d)
            })
        }, zoom: function(a, b) {
            var c = this.dataMin, d = this.dataMax, e = this.options;
            this.allowZoomOutside || (v(c) && a <= O(c, r(e.min, c)) && (a = u), v(d) && b >=
                    w(d, r(e.max, d)) && (b = u));
            this.displayBtn = a !== u || b !== u;
            this.setExtremes(a, b, !1, u, {trigger: "zoom"});
            return!0
        }, setAxisSize: function() {
            var a = this.chart, b = this.options, c = b.offsetLeft || 0, d = this.horiz, e = r(b.width, a.plotWidth - c + (b.offsetRight || 0)), f = r(b.height, a.plotHeight), g = r(b.top, a.plotTop), b = r(b.left, a.plotLeft + c), c = /%$/;
            c.test(f) && (f = parseInt(f, 10) / 100 * a.plotHeight);
            c.test(g) && (g = parseInt(g, 10) / 100 * a.plotHeight + a.plotTop);
            this.left = b;
            this.top = g;
            this.width = e;
            this.height = f;
            this.bottom = a.chartHeight - f -
                    g;
            this.right = a.chartWidth - e - b;
            this.len = w(d ? e : f, 0);
            this.pos = d ? b : g
        }, getExtremes: function() {
            var a = this.isLog;
            return{min: a ? ma(T(this.min)) : this.min, max: a ? ma(T(this.max)) : this.max, dataMin: this.dataMin, dataMax: this.dataMax, userMin: this.userMin, userMax: this.userMax}
        }, getThreshold: function(a) {
            var b = this.isLog, c = b ? T(this.min) : this.min, b = b ? T(this.max) : this.max;
            c > a || null === a ? a = c : b < a && (a = b);
            return this.translate(a, 0, 1, 0, 1)
        }, autoLabelAlign: function(a) {
            a = (r(a, 0) - 90 * this.side + 720) % 360;
            return 15 < a && 165 > a ? "right" :
                    195 < a && 345 > a ? "left" : "center"
        }, getOffset: function() {
            var a = this, b = a.chart, c = b.renderer, d = a.options, e = a.tickPositions, f = a.ticks, g = a.horiz, h = a.side, k = b.inverted ? [1, 0, 3, 2][h] : h, l, m = 0, n, q = 0, p = d.title, x = d.labels, t = 0, P = b.axisOffset, ta = b.clipOffset, C = [-1, 1, 1, -1][h], y, z = 1, A = r(x.maxStaggerLines, 5), K, I, B, E, Qa = 2 === h ? c.fontMetrics(x.style.fontSize).b : 0;
            a.hasData = l = a.hasVisibleSeries || v(a.min) && v(a.max) && !!e;
            a.showAxis = b = l || r(d.showEmpty, !0);
            a.staggerLines = a.horiz && x.staggerLines;
            a.axisGroup || (a.gridGroup = c.g("grid").attr({zIndex: d.gridZIndex ||
                1}).add(), a.axisGroup = c.g("axis").attr({zIndex: d.zIndex || 2}).add(), a.labelGroup = c.g("axis-labels").attr({zIndex: x.zIndex || 7}).addClass("highcharts-" + a.coll.toLowerCase() + "-labels").add());
            if (l || a.isLinked) {
                a.labelAlign = r(x.align || a.autoLabelAlign(x.rotation));
                s(e, function(b) {
                    f[b] ? f[b].addLabel() : f[b] = new Ba(a, b)
                });
                if (a.horiz && !a.staggerLines && A && !x.rotation) {
                    for (y = a.reversed ? [].concat(e).reverse() : e; z < A; ) {
                        l = [];
                        K = !1;
                        for (x = 0; x < y.length; x++) I = y[x], B = (B = f[I].label && f[I].label.getBBox()) ? B.width : 0, E = x %
                                    z, B && (I = a.translate(I), l[E] !== u && I < l[E] && (K = !0), l[E] = I + B);
                        if (K) z++;
                        else break
                    }
                    1 < z && (a.staggerLines = z)
                }
                s(e, function(b) {
                    if (0 === h || 2 === h || {1: "left", 3: "right"}[h] === a.labelAlign) t = w(f[b].getLabelSize(), t)
                });
                a.staggerLines && (t *= a.staggerLines, a.labelOffset = t)
            } else for (y in f) f[y].destroy(), delete f[y];
            p && p.text && !1 !== p.enabled && (a.axisTitle || (a.axisTitle = c.text(p.text, 0, 0, p.useHTML).attr({zIndex: 7, rotation: p.rotation || 0, align: p.textAlign || {low: "left", middle: "center", high: "right"}[p.align]}).addClass("highcharts-" +
                    this.coll.toLowerCase() + "-title").css(p.style).add(a.axisGroup), a.axisTitle.isNew = !0), b && (m = a.axisTitle.getBBox()[g ? "height" : "width"], q = r(p.margin, g ? 5 : 10), n = p.offset), a.axisTitle[b ? "show" : "hide"]());
            a.offset = C * r(d.offset, P[h]);
            a.axisTitleMargin = r(n, t + q + (t && C * d.labels[g ? "y" : "x"] - Qa));
            P[h] = w(P[h], a.axisTitleMargin + m + C * a.offset);
            ta[k] = w(ta[k], 2 * R(d.lineWidth / 2))
        }, getLinePath: function(a) {
            var b = this.chart, c = this.opposite, d = this.offset, e = this.horiz, f = this.left + (c ? this.width : 0) + d, d = b.chartHeight - this.bottom -
                    (c ? this.height : 0) + d;
            c && (a *= -1);
            return b.renderer.crispLine(["M", e ? this.left : f, e ? d : this.top, "L", e ? b.chartWidth - this.right : f, e ? d : b.chartHeight - this.bottom], a)
        }, getTitlePosition: function() {
            var a = this.horiz, b = this.left, c = this.top, d = this.len, e = this.options.title, f = a ? b : c, g = this.opposite, h = this.offset, k = D(e.style.fontSize || 12), d = {low: f + (a ? 0 : d), middle: f + d / 2, high: f + (a ? d : 0)}[e.align], b = (a ? c + this.height : b) + (a ? 1 : -1) * (g ? -1 : 1) * this.axisTitleMargin + (2 === this.side ? k : 0);
            return{x: a ? d : b + (g ? this.width : 0) + h + (e.x || 0),
                y: a ? b - (g ? this.height : 0) + h : d + (e.y || 0)}
        }, render: function() {
            var a = this, b = a.horiz, c = a.reversed, d = a.chart, e = d.renderer, f = a.options, g = a.isLog, h = a.isLinked, k = a.tickPositions, l, m = a.axisTitle, n = a.ticks, q = a.minorTicks, p = a.alternateBands, x = f.stackLabels, r = f.alternateGridColor, t = a.tickmarkOffset, w = f.lineWidth, C = d.hasRendered && v(a.oldMin) && !isNaN(a.oldMin), y = a.hasData, z = a.showAxis, B, A = f.labels.overflow, I = a.justifyLabels = b && !1 !== A, D;
            a.labelEdge.length = 0;
            a.justifyToPlot = "justify" === A;
            s([n, q, p], function(a) {
                for (var b in a) a[b].isActive =
                            !1
            });
            if (y || h) a.minorTickInterval && !a.categories && s(a.getMinorTickPositions(), function(b) {
                    q[b] || (q[b] = new Ba(a, b, "minor"));
                    C && q[b].isNew && q[b].render(null, !0);
                    q[b].render(null, !1, 1)
                }), k.length && (l = k.slice(), (b && c || !b && !c) && l.reverse(), I && (l = l.slice(1).concat([l[0]])), s(l, function(b, c) {
                    I && (c = c === l.length - 1 ? 0 : c + 1);
                    if (!h || b >= a.min && b <= a.max) n[b] || (n[b] = new Ba(a, b)), C && n[b].isNew && n[b].render(c, !0, 0.1), n[b].render(c, !1, 1)
                }), t && 0 === a.min && (n[-1] || (n[-1] = new Ba(a, -1, null, !0)), n[-1].render(-1))), r && s(k, function(b,
                        c) {
                    0 === c % 2 && b < a.max && (p[b] || (p[b] = new W.PlotLineOrBand(a)), B = b + t, D = k[c + 1] !== u ? k[c + 1] + t : a.max, p[b].options = {from: g ? T(B) : B, to: g ? T(D) : D, color: r}, p[b].render(), p[b].isActive = !0)
                }), a._addedPlotLB || (s((f.plotLines || []).concat(f.plotBands || []), function(b) {
                    a.addPlotBandOrLine(b)
                }), a._addedPlotLB = !0);
            s([n, q, p], function(a) {
                var b, c, e = [], f = aa ? aa.duration || 500 : 0, g = function() {
                    for (c = e.length; c--; ) a[e[c]] && !a[e[c]].isActive && (a[e[c]].destroy(), delete a[e[c]])
                };
                for (b in a) a[b].isActive || (a[b].render(b, !1, 0), a[b].isActive =
                            !1, e.push(b));
                a !== p && d.hasRendered && f ? f && setTimeout(g, f) : g()
            });
            w && (b = a.getLinePath(w), a.axisLine ? a.axisLine.animate({d: b}) : a.axisLine = e.path(b).attr({stroke: f.lineColor, "stroke-width": w, zIndex: 7}).add(a.axisGroup), a.axisLine[z ? "show" : "hide"]());
            m && z && (m[m.isNew ? "attr" : "animate"](a.getTitlePosition()), m.isNew = !1);
            x && x.enabled && a.renderStackTotals();
            a.isDirty = !1
        }, redraw: function() {
            var a = this.chart.pointer;
            a && a.reset(!0);
            this.render();
            s(this.plotLinesAndBands, function(a) {
                a.render()
            });
            s(this.series, function(a) {
                a.isDirty =
                        !0
            })
        }, destroy: function(a) {
            var b = this, c = b.stacks, d, e = b.plotLinesAndBands;
            a || X(b);
            for (d in c) Ja(c[d]), c[d] = null;
            s([b.ticks, b.minorTicks, b.alternateBands], function(a) {
                Ja(a)
            });
            for (a = e.length; a--; ) e[a].destroy();
            s("stackTotalGroup axisLine axisTitle axisGroup cross gridGroup labelGroup".split(" "), function(a) {
                b[a] && (b[a] = b[a].destroy())
            });
            this.cross && this.cross.destroy()
        }, drawCrosshair: function(a, b) {
            if (this.crosshair) if (!1 === (v(b) || !r(this.crosshair.snap, !0))) this.hideCrosshair();
                else {
                    var c, d = this.crosshair,
                            e = d.animation;
                    r(d.snap, !0) ? v(b) && (c = this.chart.inverted != this.horiz ? b.plotX : this.len - b.plotY) : c = this.horiz ? a.chartX - this.pos : this.len - a.chartY + this.pos;
                    c = this.isRadial ? this.getPlotLinePath(this.isXAxis ? b.x : r(b.stackY, b.y)) : this.getPlotLinePath(null, null, null, null, c);
                    if (null === c) this.hideCrosshair();
                    else if (this.cross) this.cross.attr({visibility: "visible"})[e ? "animate" : "attr"]({d: c}, e);
                    else e = {"stroke-width": d.width || 1, stroke: d.color || "#C0C0C0", zIndex: d.zIndex || 2}, d.dashStyle && (e.dashstyle = d.dashStyle),
                                this.cross = this.chart.renderer.path(c).attr(e).add()
                }
        }, hideCrosshair: function() {
            this.cross && this.cross.hide()
        }};
    t(ra.prototype, {getPlotBandPath: function(a, b) {
            var c = this.getPlotLinePath(b), d = this.getPlotLinePath(a);
            d && c ? d.push(c[4], c[5], c[1], c[2]) : d = null;
            return d
        }, addPlotBand: function(a) {
            this.addPlotBandOrLine(a, "plotBands")
        }, addPlotLine: function(a) {
            this.addPlotBandOrLine(a, "plotLines")
        }, addPlotBandOrLine: function(a, b) {
            var c = (new W.PlotLineOrBand(this, a)).render(), d = this.userOptions;
            c && (b && (d[b] = d[b] ||
            [], d[b].push(a)), this.plotLinesAndBands.push(c));
            return c
        }, removePlotBandOrLine: function(a) {
            for (var b = this.plotLinesAndBands, c = this.options, d = this.userOptions, e = b.length; e--; ) b[e].id === a && b[e].destroy();
            s([c.plotLines || [], d.plotLines || [], c.plotBands || [], d.plotBands || []], function(b) {
                for (e = b.length; e--; ) b[e].id === a && ka(b, b[e])
            })
        }});
    ra.prototype.getTimeTicks = function(a, b, c, d) {
        var e = [], f = {}, g = G.global.useUTC, h, k = new Date(b - Aa), l = a.unitRange, m = a.count;
        if (v(b)) {
            l >= B.second && (k.setMilliseconds(0), k.setSeconds(l >=
                    B.minute ? 0 : m * R(k.getSeconds() / m)));
            if (l >= B.minute) k[Bb](l >= B.hour ? 0 : m * R(k[jb]() / m));
            if (l >= B.hour) k[Cb](l >= B.day ? 0 : m * R(k[kb]() / m));
            if (l >= B.day) k[mb](l >= B.month ? 1 : m * R(k[Ka]() / m));
            l >= B.month && (k[Db](l >= B.year ? 0 : m * R(k[Wa]() / m)), h = k[Xa]());
            if (l >= B.year) k[Eb](h - h % m);
            if (l === B.week) k[mb](k[Ka]() - k[lb]() + r(d, 1));
            b = 1;
            Aa && (k = new Date(k.getTime() + Aa));
            h = k[Xa]();
            d = k.getTime();
            for (var n = k[Wa](), q = k[Ka](), p = g ? Aa : (864E5 + 6E4 * k.getTimezoneOffset()) % 864E5; d < c; ) e.push(d), d = l === B.year ? Va(h + b * m, 0) : l === B.month ? Va(h, n + b *
                        m) : g || l !== B.day && l !== B.week ? d + l * m : Va(h, n, q + b * m * (l === B.day ? 1 : 7)), b++;
            e.push(d);
            s(qb(e, function(a) {
                return l <= B.hour && a % B.day === p
            }), function(a) {
                f[a] = "day"
            })
        }
        e.info = t(a, {higherRanks: f, totalRange: l * m});
        return e
    };
    ra.prototype.normalizeTimeTickInterval = function(a, b) {
        var c = b || [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]], d = c[c.length - 1], e = B[d[0]], f = d[1], g;
        for (g = 0; g < c.length && !(d = c[g], e = B[d[0]], f = d[1], c[g + 1] && a <= (e * f[f.length - 1] + B[c[g + 1][0]]) / 2); g++) ;
        e === B.year && a < 5 * e && (f = [1, 2, 5]);
        c = yb(a / e, f, "year" === d[0] ? w(M.pow(10, R(M.log(a / e) / M.LN10)), 1) : 1);
        return{unitRange: e, count: c, unitName: d[0]}
    };
    var Mb = W.Tooltip = function() {
        this.init.apply(this, arguments)
    };
    Mb.prototype = {init: function(a, b) {
            var c = b.borderWidth, d = b.style, e = D(d.padding);
            this.chart = a;
            this.options = b;
            this.crosshairs = [];
            this.now = {x: 0, y: 0};
            this.isHidden = !0;
            this.label = a.renderer.label("", 0, 0, b.shape || "callout",
                    null, null, b.useHTML, null, "tooltip").attr({padding: e, fill: b.backgroundColor, "stroke-width": c, r: b.borderRadius, zIndex: 8}).css(d).css({padding: 0}).add().attr({y: -9999});
            ea || this.label.shadow(b.shadow);
            this.shared = b.shared
        }, destroy: function() {
            this.label && (this.label = this.label.destroy());
            clearTimeout(this.hideTimer);
            clearTimeout(this.tooltipTimeout)
        }, move: function(a, b, c, d) {
            var e = this, f = e.now, g = !1 !== e.options.animation && !e.isHidden, h = e.followPointer || 1 < e.len;
            t(f, {x: g ? (2 * f.x + a) / 3 : a, y: g ? (f.y + b) / 2 : b, anchorX: h ?
                        u : g ? (2 * f.anchorX + c) / 3 : c, anchorY: h ? u : g ? (f.anchorY + d) / 2 : d});
            e.label.attr(f);
            g && (1 < Q(a - f.x) || 1 < Q(b - f.y)) && (clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function() {
                e && e.move(a, b, c, d)
            }, 32))
        }, hide: function() {
            var a = this, b;
            clearTimeout(this.hideTimer);
            this.isHidden || (b = this.chart.hoverPoints, this.hideTimer = setTimeout(function() {
                a.label.fadeOut();
                a.isHidden = !0
            }, r(this.options.hideDelay, 500)), b && s(b, function(a) {
                a.setState()
            }), this.chart.hoverPoints = null)
        }, getAnchor: function(a, b) {
            var c, d =
                    this.chart, e = d.inverted, f = d.plotTop, g = 0, h = 0, k;
            a = ga(a);
            c = a[0].tooltipPos;
            this.followPointer && b && (b.chartX === u && (b = d.pointer.normalize(b)), c = [b.chartX - d.plotLeft, b.chartY - f]);
            c || (s(a, function(a) {
                k = a.series.yAxis;
                g += a.plotX;
                h += (a.plotLow ? (a.plotLow + a.plotHigh) / 2 : a.plotY) + (!e && k ? k.top - f : 0)
            }), g /= a.length, h /= a.length, c = [e ? d.plotWidth - h : g, this.shared && !e && 1 < a.length && b ? b.chartY - f : e ? d.plotHeight - g : h]);
            return cb(c, y)
        }, getPosition: function(a, b, c) {
            var d = this.chart, e = this.distance, f = {}, g, h = ["y", d.chartHeight,
                b, c.plotY + d.plotTop], k = ["x", d.chartWidth, a, c.plotX + d.plotLeft], l = c.ttBelow || d.inverted && !c.negative || !d.inverted && c.negative, m = function(a, b, c, d) {
                var g = c < d - e;
                b = d + e + c < b;
                c = d - e - c;
                d += e;
                if (l && b) f[a] = d;
                else if (!l && g) f[a] = c;
                else if (g) f[a] = c;
                else if (b) f[a] = d;
                else return!1
            }, n = function(a, b, c, d) {
                if (d < e || d > b - e) return!1;
                f[a] = d < c / 2 ? 1 : d > b - c / 2 ? b - c - 2 : d - c / 2
            }, q = function(a) {
                var b = h;
                h = k;
                k = b;
                g = a
            }, p = function() {
                !1 !== m.apply(0, h) ? !1 !== n.apply(0, k) || g || (q(!0), p()) : g ? f.x = f.y = 0 : (q(!0), p())
            };
            (d.inverted || 1 < this.len) && q();
            p();
            return f
        }, defaultFormatter: function(a) {
            var b = this.points || ga(this), c = b[0].series, d;
            d = [a.tooltipHeaderFormatter(b[0])];
            s(b, function(a) {
                c = a.series;
                d.push(c.tooltipFormatter && c.tooltipFormatter(a) || a.point.tooltipFormatter(c.tooltipOptions.pointFormat))
            });
            d.push(a.options.footerFormat || "");
            return d.join("")
        }, refresh: function(a, b) {
            var c = this.chart, d = this.label, e = this.options, f, g, h = {}, k, l = [];
            k = e.formatter || this.defaultFormatter;
            var h = c.hoverPoints, m, n = this.shared;
            clearTimeout(this.hideTimer);
            this.followPointer =
                    ga(a)[0].series.tooltipOptions.followPointer;
            g = this.getAnchor(a, b);
            f = g[0];
            g = g[1];
            !n || a.series && a.series.noSharedTooltip ? h = a.getLabelConfig() : (c.hoverPoints = a, h && s(h, function(a) {
                a.setState()
            }), s(a, function(a) {
                a.setState("hover");
                l.push(a.getLabelConfig())
            }), h = {x: a[0].category, y: a[0].y}, h.points = l, this.len = l.length, a = a[0]);
            k = k.call(h, this);
            h = a.series;
            this.distance = r(h.tooltipOptions.distance, 16);
            !1 === k ? this.hide() : (this.isHidden && (eb(d), d.attr("opacity", 1).show()), d.attr({text: k}), m = e.borderColor ||
                    a.color || h.color || "#606060", d.attr({stroke: m}), this.updatePosition({plotX: f, plotY: g, negative: a.negative, ttBelow: a.ttBelow}), this.isHidden = !1);
            F(c, "tooltipRefresh", {text: k, x: f + c.plotLeft, y: g + c.plotTop, borderColor: m})
        }, updatePosition: function(a) {
            var b = this.chart, c = this.label, c = (this.options.positioner || this.getPosition).call(this, c.width, c.height, a);
            this.move(y(c.x), y(c.y), a.plotX + b.plotLeft, a.plotY + b.plotTop)
        }, tooltipHeaderFormatter: function(a) {
            var b = a.series, c = b.tooltipOptions, d = c.dateTimeLabelFormats,
                    e = c.xDateFormat, f = b.xAxis, g = f && "datetime" === f.options.type && ca(a.key), c = c.headerFormat, f = f && f.closestPointRange, h;
            if (g && !e) {
                if (f) for (h in B) {
                        if (B[h] >= f || B[h] <= B.day && 0 < a.key % B[h]) {
                            e = d[h];
                            break
                        }
                    }
                else e = d.day;
                e = e || d.year
            }
            g && e && (c = c.replace("{point.key}", "{point.key:" + e + "}"));
            return ya(c, {point: a, series: b})
        }};
    var fa;
    Na = z.documentElement.ontouchstart !== u;
    var Ha = W.Pointer = function(a, b) {
        this.init(a, b)
    };
    Ha.prototype = {init: function(a, b) {
            var c = b.chart, d = c.events, e = ea ? "" : c.zoomType, c = a.inverted, f;
            this.options =
                    b;
            this.chart = a;
            this.zoomX = f = /x/.test(e);
            this.zoomY = e = /y/.test(e);
            this.zoomHor = f && !c || e && c;
            this.zoomVert = e && !c || f && c;
            this.hasZoom = f || e;
            this.runChartClick = d && !!d.click;
            this.pinchDown = [];
            this.lastValidTouch = {};
            W.Tooltip && b.tooltip.enabled && (a.tooltip = new Mb(a, b.tooltip), this.followTouchMove = b.tooltip.followTouchMove);
            this.setDOMEvents()
        }, normalize: function(a, b) {
            var c, d;
            a = a || window.event;
            a = Sb(a);
            a.target || (a.target = a.srcElement);
            d = a.touches ? a.touches.length ? a.touches.item(0) : a.changedTouches[0] : a;
            b ||
                    (this.chartPosition = b = Rb(this.chart.container));
            d.pageX === u ? (c = w(a.x, a.clientX - b.left), d = a.y) : (c = d.pageX - b.left, d = d.pageY - b.top);
            return t(a, {chartX: y(c), chartY: y(d)})
        }, getCoordinates: function(a) {
            var b = {xAxis: [], yAxis: []};
            s(this.chart.axes, function(c) {
                b[c.isXAxis ? "xAxis" : "yAxis"].push({axis: c, value: c.toValue(a[c.horiz ? "chartX" : "chartY"])})
            });
            return b
        }, getIndex: function(a) {
            var b = this.chart;
            return b.inverted ? b.plotHeight + b.plotTop - a.chartY : a.chartX - b.plotLeft
        }, runPointActions: function(a) {
            var b = this.chart,
                    c = b.series, d = b.tooltip, e, f, g = b.hoverPoint, h = b.hoverSeries, k, l, m = b.chartWidth, n = this.getIndex(a);
            if (d && this.options.tooltip.shared && (!h || !h.noSharedTooltip)) {
                f = [];
                k = c.length;
                for (l = 0; l < k; l++) c[l].visible && !1 !== c[l].options.enableMouseTracking && !c[l].noSharedTooltip && !0 !== c[l].singularTooltips && c[l].tooltipPoints.length && (e = c[l].tooltipPoints[n]) && e.series && (e._dist = Q(n - e.clientX), m = O(m, e._dist), f.push(e));
                for (k = f.length; k--; ) f[k]._dist > m && f.splice(k, 1);
                f.length && f[0].clientX !== this.hoverX && (d.refresh(f,
                        a), this.hoverX = f[0].clientX)
            }
            c = h && h.tooltipOptions.followPointer;
            if (h && h.tracker && !c) {
                if ((e = h.tooltipPoints[n]) && e !== g) e.onMouseOver(a)
            } else d && c && !d.isHidden && (h = d.getAnchor([{}], a), d.updatePosition({plotX: h[0], plotY: h[1]}));
            d && !this._onDocumentMouseMove && (this._onDocumentMouseMove = function(a) {
                if (U[fa]) U[fa].pointer.onDocumentMouseMove(a)
            }, L(z, "mousemove", this._onDocumentMouseMove));
            s(b.axes, function(b) {
                b.drawCrosshair(a, r(e, g))
            })
        }, reset: function(a) {
            var b = this.chart, c = b.hoverSeries, d = b.hoverPoint,
                    e = b.tooltip, f = e && e.shared ? b.hoverPoints : d;
            (a = a && e && f) && ga(f)[0].plotX === u && (a = !1);
            if (a) e.refresh(f), d && d.setState(d.state, !0);
            else {
                if (d) d.onMouseOut();
                if (c) c.onMouseOut();
                e && e.hide();
                this._onDocumentMouseMove && (X(z, "mousemove", this._onDocumentMouseMove), this._onDocumentMouseMove = null);
                s(b.axes, function(a) {
                    a.hideCrosshair()
                });
                this.hoverX = null
            }
        }, scaleGroups: function(a, b) {
            var c = this.chart, d;
            s(c.series, function(e) {
                d = a || e.getPlotBox();
                e.xAxis && e.xAxis.zoomEnabled && (e.group.attr(d), e.markerGroup && (e.markerGroup.attr(d),
                        e.markerGroup.clip(b ? c.clipRect : null)), e.dataLabelsGroup && e.dataLabelsGroup.attr(d))
            });
            c.clipRect.attr(b || c.clipBox)
        }, dragStart: function(a) {
            var b = this.chart;
            b.mouseIsDown = a.type;
            b.cancelClick = !1;
            b.mouseDownX = this.mouseDownX = a.chartX;
            b.mouseDownY = this.mouseDownY = a.chartY
        }, drag: function(a) {
            var b = this.chart, c = b.options.chart, d = a.chartX, e = a.chartY, f = this.zoomHor, g = this.zoomVert, h = b.plotLeft, k = b.plotTop, l = b.plotWidth, m = b.plotHeight, n, q = this.mouseDownX, p = this.mouseDownY;
            d < h ? d = h : d > h + l && (d = h + l);
            e < k ? e = k : e >
                    k + m && (e = k + m);
            this.hasDragged = Math.sqrt(Math.pow(q - d, 2) + Math.pow(p - e, 2));
            10 < this.hasDragged && (n = b.isInsidePlot(q - h, p - k), b.hasCartesianSeries && (this.zoomX || this.zoomY) && n && !this.selectionMarker && (this.selectionMarker = b.renderer.rect(h, k, f ? 1 : l, g ? 1 : m, 0).attr({fill: c.selectionMarkerFill || "rgba(69,114,167,0.25)", zIndex: 7}).add()), this.selectionMarker && f && (d -= q, this.selectionMarker.attr({width: Q(d), x: (0 < d ? 0 : d) + q})), this.selectionMarker && g && (d = e - p, this.selectionMarker.attr({height: Q(d), y: (0 < d ? 0 : d) + p})), n &&
                    !this.selectionMarker && c.panning && b.pan(a, c.panning))
        }, drop: function(a) {
            var b = this.chart, c = this.hasPinched;
            if (this.selectionMarker) {
                var d = {xAxis: [], yAxis: [], originalEvent: a.originalEvent || a};
                a = this.selectionMarker;
                var e = a.attr ? a.attr("x") : a.x, f = a.attr ? a.attr("y") : a.y, g = a.attr ? a.attr("width") : a.width, h = a.attr ? a.attr("height") : a.height, k;
                if (this.hasDragged || c) s(b.axes, function(a) {
                        if (a.zoomEnabled) {
                            var b = a.horiz, c = a.toValue(b ? e : f), b = a.toValue(b ? e + g : f + h);
                            isNaN(c) || isNaN(b) || (d[a.coll].push({axis: a, min: O(c,
                                        b), max: w(c, b)}), k = !0)
                        }
                    }), k && F(b, "selection", d, function(a) {
                        b.zoom(t(a, c ? {animation: !1} : null))
                    });
                this.selectionMarker = this.selectionMarker.destroy();
                c && this.scaleGroups()
            }
            b && (H(b.container, {cursor: b._cursor}), b.cancelClick = 10 < this.hasDragged, b.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = [])
        }, onContainerMouseDown: function(a) {
            a = this.normalize(a);
            a.preventDefault && a.preventDefault();
            this.dragStart(a)
        }, onDocumentMouseUp: function(a) {
            U[fa] && U[fa].pointer.drop(a)
        }, onDocumentMouseMove: function(a) {
            var b =
                    this.chart, c = this.chartPosition, d = b.hoverSeries;
            a = this.normalize(a, c);
            c && d && !this.inClass(a.target, "highcharts-tracker") && !b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) && this.reset()
        }, onContainerMouseLeave: function() {
            var a = U[fa];
            a && (a.pointer.reset(), a.pointer.chartPosition = null)
        }, onContainerMouseMove: function(a) {
            var b = this.chart;
            fa = b.index;
            a = this.normalize(a);
            "mousedown" === b.mouseIsDown && this.drag(a);
            !this.inClass(a.target, "highcharts-tracker") && !b.isInsidePlot(a.chartX - b.plotLeft, a.chartY -
                    b.plotTop) || b.openMenu || this.runPointActions(a)
        }, inClass: function(a, b) {
            for (var c; a; ) {
                if (c = N(a, "class")) {
                    if (-1 !== c.indexOf(b)) return!0;
                    if (-1 !== c.indexOf("highcharts-container")) return!1
                }
                a = a.parentNode
            }
        }, onTrackerMouseOut: function(a) {
            var b = this.chart.hoverSeries, c = (a = a.relatedTarget || a.toElement) && a.point && a.point.series;
            if (b && !b.options.stickyTracking && !this.inClass(a, "highcharts-tooltip") && c !== b) b.onMouseOut()
        }, onContainerClick: function(a) {
            var b = this.chart, c = b.hoverPoint, d = b.plotLeft, e = b.plotTop;
            a = this.normalize(a);
            a.cancelBubble = !0;
            b.cancelClick || (c && this.inClass(a.target, "highcharts-tracker") ? (F(c.series, "click", t(a, {point: c})), b.hoverPoint && c.firePointEvent("click", a)) : (t(a, this.getCoordinates(a)), b.isInsidePlot(a.chartX - d, a.chartY - e) && F(b, "click", a)))
        }, setDOMEvents: function() {
            var a = this, b = a.chart.container;
            b.onmousedown = function(b) {
                a.onContainerMouseDown(b)
            };
            b.onmousemove = function(b) {
                a.onContainerMouseMove(b)
            };
            b.onclick = function(b) {
                a.onContainerClick(b)
            };
            L(b, "mouseleave", a.onContainerMouseLeave);
            1 === Oa && L(z, "mouseup", a.onDocumentMouseUp);
            Na && (b.ontouchstart = function(b) {
                a.onContainerTouchStart(b)
            }, b.ontouchmove = function(b) {
                a.onContainerTouchMove(b)
            }, 1 === Oa && L(z, "touchend", a.onDocumentTouchEnd))
        }, destroy: function() {
            var a;
            X(this.chart.container, "mouseleave", this.onContainerMouseLeave);
            Oa || (X(z, "mouseup", this.onDocumentMouseUp), X(z, "touchend", this.onDocumentTouchEnd));
            clearInterval(this.tooltipTimeout);
            for (a in this) this[a] = null
        }};
    t(W.Pointer.prototype, {pinchTranslate: function(a, b, c, d, e, f) {
            (this.zoomHor ||
                    this.pinchHor) && this.pinchTranslateDirection(!0, a, b, c, d, e, f);
            (this.zoomVert || this.pinchVert) && this.pinchTranslateDirection(!1, a, b, c, d, e, f)
        }, pinchTranslateDirection: function(a, b, c, d, e, f, g, h) {
            var k = this.chart, l = a ? "x" : "y", m = a ? "X" : "Y", n = "chart" + m, q = a ? "width" : "height", p = k["plot" + (a ? "Left" : "Top")], r, s, t = h || 1, v = k.inverted, C = k.bounds[a ? "h" : "v"], u = 1 === b.length, w = b[0][n], y = c[0][n], z = !u && b[1][n], B = !u && c[1][n], A;
            c = function() {
                !u && 20 < Q(w - z) && (t = h || Q(y - B) / Q(w - z));
                s = (p - y) / t + w;
                r = k["plot" + (a ? "Width" : "Height")] / t
            };
            c();
            b = s;
            b < C.min ? (b = C.min, A = !0) : b + r > C.max && (b = C.max - r, A = !0);
            A ? (y -= 0.8 * (y - g[l][0]), u || (B -= 0.8 * (B - g[l][1])), c()) : g[l] = [y, B];
            v || (f[l] = s - p, f[q] = r);
            f = v ? 1 / t : t;
            e[q] = r;
            e[l] = b;
            d[v ? a ? "scaleY" : "scaleX" : "scale" + m] = t;
            d["translate" + m] = f * p + (y - f * w)
        }, pinch: function(a) {
            var b = this, c = b.chart, d = b.pinchDown, e = b.followTouchMove, f = a.touches, g = f.length, h = b.lastValidTouch, k = b.hasZoom, l = b.selectionMarker, m = {}, n = 1 === g && (b.inClass(a.target, "highcharts-tracker") && c.runTrackerClick || c.runChartClick), q = {};
            !k && !e || n || a.preventDefault();
            cb(f, function(a) {
                return b.normalize(a)
            });
            "touchstart" === a.type ? (s(f, function(a, b) {
                d[b] = {chartX: a.chartX, chartY: a.chartY}
            }), h.x = [d[0].chartX, d[1] && d[1].chartX], h.y = [d[0].chartY, d[1] && d[1].chartY], s(c.axes, function(a) {
                if (a.zoomEnabled) {
                    var b = c.bounds[a.horiz ? "h" : "v"], d = a.minPixelPadding, e = a.toPixels(a.dataMin), f = a.toPixels(a.dataMax), g = O(e, f), e = w(e, f);
                    b.min = O(a.pos, g - d);
                    b.max = w(a.pos + a.len, e + d)
                }
            })) : d.length && (l || (b.selectionMarker = l = t({destroy: pb}, c.plotBox)), b.pinchTranslate(d, f, m, l, q, h), b.hasPinched =
                    k, b.scaleGroups(m, q), !k && e && 1 === g && this.runPointActions(b.normalize(a)))
        }, onContainerTouchStart: function(a) {
            var b = this.chart;
            fa = b.index;
            1 === a.touches.length ? (a = this.normalize(a), b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) ? (this.runPointActions(a), this.pinch(a)) : this.reset()) : 2 === a.touches.length && this.pinch(a)
        }, onContainerTouchMove: function(a) {
            1 !== a.touches.length && 2 !== a.touches.length || this.pinch(a)
        }, onDocumentTouchEnd: function(a) {
            U[fa] && U[fa].pointer.drop(a)
        }});
    if (J.PointerEvent || J.MSPointerEvent) {
        var ia =
                {}, vb = !!J.PointerEvent, Wb = function() {
            var a, b = [];
            b.item = function(a) {
                return this[a]
            };
            for (a in ia) ia.hasOwnProperty(a) && b.push({pageX: ia[a].pageX, pageY: ia[a].pageY, target: ia[a].target});
            return b
        }, wb = function(a, b, c, d) {
            a = a.originalEvent || a;
            "touch" !== a.pointerType && a.pointerType !== a.MSPOINTER_TYPE_TOUCH || !U[fa] || (d(a), d = U[fa].pointer, d[b]({type: c, target: a.currentTarget, preventDefault: pb, touches: Wb()}))
        };
        t(Ha.prototype, {onContainerPointerDown: function(a) {
                wb(a, "onContainerTouchStart", "touchstart", function(a) {
                    ia[a.pointerId] =
                            {pageX: a.pageX, pageY: a.pageY, target: a.currentTarget}
                })
            }, onContainerPointerMove: function(a) {
                wb(a, "onContainerTouchMove", "touchmove", function(a) {
                    ia[a.pointerId] = {pageX: a.pageX, pageY: a.pageY};
                    ia[a.pointerId].target || (ia[a.pointerId].target = a.currentTarget)
                })
            }, onDocumentPointerUp: function(a) {
                wb(a, "onContainerTouchEnd", "touchend", function(a) {
                    delete ia[a.pointerId]
                })
            }, batchMSEvents: function(a) {
                a(this.chart.container, vb ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown);
                a(this.chart.container, vb ?
                        "pointermove" : "MSPointerMove", this.onContainerPointerMove);
                a(z, vb ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp)
            }});
        xa(Ha.prototype, "init", function(a, b, c) {
            a.call(this, b, c);
            (this.hasZoom || this.followTouchMove) && H(b.container, {"-ms-touch-action": V, "touch-action": V})
        });
        xa(Ha.prototype, "setDOMEvents", function(a) {
            a.apply(this);
            (this.hasZoom || this.followTouchMove) && this.batchMSEvents(L)
        });
        xa(Ha.prototype, "destroy", function(a) {
            this.batchMSEvents(X);
            a.call(this)
        })
    }
    var gb = W.Legend = function(a, b) {
        this.init(a,
                b)
    };
    gb.prototype = {init: function(a, b) {
            var c = this, d = b.itemStyle, e = r(b.padding, 8), f = b.itemMarginTop || 0;
            this.options = b;
            b.enabled && (c.baseline = D(d.fontSize) + 3 + f, c.itemStyle = d, c.itemHiddenStyle = A(d, b.itemHiddenStyle), c.itemMarginTop = f, c.padding = e, c.initialItemX = e, c.initialItemY = e - 5, c.maxItemWidth = 0, c.chart = a, c.itemHeight = 0, c.lastLineHeight = 0, c.symbolWidth = r(b.symbolWidth, 16), c.pages = [], c.render(), L(c.chart, "endResize", function() {
                c.positionCheckboxes()
            }))
        }, colorizeItem: function(a, b) {
            var c = this.options, d =
                    a.legendItem, e = a.legendLine, f = a.legendSymbol, g = this.itemHiddenStyle.color, c = b ? c.itemStyle.color : g, h = b ? a.legendColor || a.color || "#CCC" : g, g = a.options && a.options.marker, k = {fill: h}, l;
            d && d.css({fill: c, color: c});
            e && e.attr({stroke: h});
            if (f) {
                if (g && f.isMarker) for (l in k.stroke = h, g = a.convertAttribs(g), g) d = g[l], d !== u && (k[l] = d);
                f.attr(k)
            }
        }, positionItem: function(a) {
            var b = this.options, c = b.symbolPadding, b = !b.rtl, d = a._legendItemPos, e = d[0], d = d[1], f = a.checkbox;
            a.legendGroup && a.legendGroup.translate(b ? e : this.legendWidth -
                    e - 2 * c - 4, d);
            f && (f.x = e, f.y = d)
        }, destroyItem: function(a) {
            var b = a.checkbox;
            s(["legendItem", "legendLine", "legendSymbol", "legendGroup"], function(b) {
                a[b] && (a[b] = a[b].destroy())
            });
            b && Sa(a.checkbox)
        }, destroy: function() {
            var a = this.group, b = this.box;
            b && (this.box = b.destroy());
            a && (this.group = a.destroy())
        }, positionCheckboxes: function(a) {
            var b = this.group.alignAttr, c, d = this.clipHeight || this.legendHeight;
            b && (c = b.translateY, s(this.allItems, function(e) {
                var f = e.checkbox, g;
                f && (g = c + f.y + (a || 0) + 3, H(f, {left: b.translateX + e.checkboxOffset +
                            f.x - 20 + "px", top: g + "px", display: g > c - 6 && g < c + d - 6 ? "" : V}))
            }))
        }, renderTitle: function() {
            var a = this.padding, b = this.options.title, c = 0;
            b.text && (this.title || (this.title = this.chart.renderer.label(b.text, a - 3, a - 4, null, null, null, null, null, "legend-title").attr({zIndex: 1}).css(b.style).add(this.group)), a = this.title.getBBox(), c = a.height, this.offsetWidth = a.width, this.contentGroup.attr({translateY: c}));
            this.titleHeight = c
        }, renderItem: function(a) {
            var b = this.chart, c = b.renderer, d = this.options, e = "horizontal" === d.layout, f =
                    this.symbolWidth, g = d.symbolPadding, h = this.itemStyle, k = this.itemHiddenStyle, l = this.padding, m = e ? r(d.itemDistance, 20) : 0, n = !d.rtl, q = d.width, p = d.itemMarginBottom || 0, x = this.itemMarginTop, s = this.initialItemX, t = a.legendItem, u = a.series && a.series.drawLegendSymbol ? a.series : a, v = u.options, v = this.createCheckboxForItem && v && v.showCheckbox, z = d.useHTML;
            t || (a.legendGroup = c.g("legend-item").attr({zIndex: 1}).add(this.scrollGroup), u.drawLegendSymbol(this, a), a.legendItem = t = c.text(d.labelFormat ? ya(d.labelFormat, a) : d.labelFormatter.call(a),
                    n ? f + g : -g, this.baseline, z).css(A(a.visible ? h : k)).attr({align: n ? "left" : "right", zIndex: 2}).add(a.legendGroup), this.setItemEvents && this.setItemEvents(a, t, z, h, k), this.colorizeItem(a, a.visible), v && this.createCheckboxForItem(a));
            c = t.getBBox();
            f = a.checkboxOffset = d.itemWidth || a.legendItemWidth || f + g + c.width + m + (v ? 20 : 0);
            this.itemHeight = g = y(a.legendItemHeight || c.height);
            e && this.itemX - s + f > (q || b.chartWidth - 2 * l - s - d.x) && (this.itemX = s, this.itemY += x + this.lastLineHeight + p, this.lastLineHeight = 0);
            this.maxItemWidth = w(this.maxItemWidth,
                    f);
            this.lastItemY = x + this.itemY + p;
            this.lastLineHeight = w(g, this.lastLineHeight);
            a._legendItemPos = [this.itemX, this.itemY];
            e ? this.itemX += f : (this.itemY += x + g + p, this.lastLineHeight = g);
            this.offsetWidth = q || w((e ? this.itemX - s - m : f) + l, this.offsetWidth)
        }, getAllItems: function() {
            var a = [];
            s(this.chart.series, function(b) {
                var c = b.options;
                r(c.showInLegend, v(c.linkedTo) ? !1 : u, !0) && (a = a.concat(b.legendItems || ("point" === c.legendType ? b.data : b)))
            });
            return a
        }, render: function() {
            var a = this, b = a.chart, c = b.renderer, d = a.group, e,
                    f, g, h, k = a.box, l = a.options, m = a.padding, n = l.borderWidth, q = l.backgroundColor;
            a.itemX = a.initialItemX;
            a.itemY = a.initialItemY;
            a.offsetWidth = 0;
            a.lastItemY = 0;
            d || (a.group = d = c.g("legend").attr({zIndex: 7}).add(), a.contentGroup = c.g().attr({zIndex: 1}).add(d), a.scrollGroup = c.g().add(a.contentGroup));
            a.renderTitle();
            e = a.getAllItems();
            ib(e, function(a, b) {
                return(a.options && a.options.legendIndex || 0) - (b.options && b.options.legendIndex || 0)
            });
            l.reversed && e.reverse();
            a.allItems = e;
            a.display = f = !!e.length;
            s(e, function(b) {
                a.renderItem(b)
            });
            g = l.width || a.offsetWidth;
            h = a.lastItemY + a.lastLineHeight + a.titleHeight;
            h = a.handleOverflow(h);
            if (n || q) g += m, h += m, k ? 0 < g && 0 < h && (k[k.isNew ? "attr" : "animate"](k.crisp({width: g, height: h})), k.isNew = !1) : (a.box = k = c.rect(0, 0, g, h, l.borderRadius, n || 0).attr({stroke: l.borderColor, "stroke-width": n || 0, fill: q || V}).add(d).shadow(l.shadow), k.isNew = !0), k[f ? "show" : "hide"]();
            a.legendWidth = g;
            a.legendHeight = h;
            s(e, function(b) {
                a.positionItem(b)
            });
            f && d.align(t({width: g, height: h}, l), !0, "spacingBox");
            b.isResizing || this.positionCheckboxes()
        },
        handleOverflow: function(a) {
            var b = this, c = this.chart, d = c.renderer, e = this.options, f = e.y, f = c.spacingBox.height + ("top" === e.verticalAlign ? -f : f) - this.padding, g = e.maxHeight, h, k = this.clipRect, l = e.navigation, m = r(l.animation, !0), n = l.arrowSize || 12, q = this.nav, p = this.pages, x, t = this.allItems;
            "horizontal" === e.layout && (f /= 2);
            g && (f = O(f, g));
            p.length = 0;
            a > f && !e.useHTML ? (this.clipHeight = h = f - 20 - this.titleHeight - this.padding, this.currentPage = r(this.currentPage, 1), this.fullHeight = a, s(t, function(a, b) {
                var c = a._legendItemPos[1],
                        d = y(a.legendItem.getBBox().height), e = p.length;
                if (!e || c - p[e - 1] > h && (x || c) !== p[e - 1]) p.push(x || c), e++;
                b === t.length - 1 && c + d - p[e - 1] > h && p.push(c);
                c !== x && (x = c)
            }), k || (k = b.clipRect = d.clipRect(0, this.padding, 9999, 0), b.contentGroup.clip(k)), k.attr({height: h}), q || (this.nav = q = d.g().attr({zIndex: 1}).add(this.group), this.up = d.symbol("triangle", 0, 0, n, n).on("click", function() {
                b.scroll(-1, m)
            }).add(q), this.pager = d.text("", 15, 10).css(l.style).add(q), this.down = d.symbol("triangle-down", 0, 0, n, n).on("click", function() {
                b.scroll(1,
                        m)
            }).add(q)), b.scroll(0), a = f) : q && (k.attr({height: c.chartHeight}), q.hide(), this.scrollGroup.attr({translateY: 1}), this.clipHeight = 0);
            return a
        }, scroll: function(a, b) {
            var c = this.pages, d = c.length, e = this.currentPage + a, f = this.clipHeight, g = this.options.navigation, h = g.activeColor, g = g.inactiveColor, k = this.pager, l = this.padding;
            e > d && (e = d);
            0 < e && (b !== u && (aa = r(b, this.chart.animation)), this.nav.attr({translateX: l, translateY: f + this.padding + 7 + this.titleHeight, visibility: "visible"}), this.up.attr({fill: 1 === e ? g : h}).css({cursor: 1 ===
                        e ? "default" : "pointer"}), k.attr({text: e + "/" + d}), this.down.attr({x: 18 + this.pager.getBBox().width, fill: e === d ? g : h}).css({cursor: e === d ? "default" : "pointer"}), c = -c[e - 1] + this.initialItemY, this.scrollGroup.animate({translateY: c}), this.currentPage = e, this.positionCheckboxes(c))
        }};
    var Xb = W.LegendSymbolMixin = {drawRectangle: function(a, b) {
            var c = a.options.symbolHeight || 12;
            b.legendSymbol = this.chart.renderer.rect(0, a.baseline - 5 - c / 2, a.symbolWidth, c, a.options.symbolRadius || 0).attr({zIndex: 3}).add(b.legendGroup)
        }, drawLineMarker: function(a) {
            var b =
                    this.options, c = b.marker, d;
            d = a.symbolWidth;
            var e = this.chart.renderer, f = this.legendGroup;
            a = a.baseline - y(0.3 * e.fontMetrics(a.options.itemStyle.fontSize).b);
            var g;
            b.lineWidth && (g = {"stroke-width": b.lineWidth}, b.dashStyle && (g.dashstyle = b.dashStyle), this.legendLine = e.path(["M", 0, a, "L", d, a]).attr(g).add(f));
            c && !1 !== c.enabled && (b = c.radius, this.legendSymbol = d = e.symbol(this.symbol, d / 2 - b, a - b, 2 * b, 2 * b).add(f), d.isMarker = !0)
        }};
    (/Trident\/7\.0/.test(sa) || Da) && xa(gb.prototype, "positionItem", function(a, b) {
        var c = this,
                d = function() {
                    b._legendItemPos && a.call(c, b)
                };
        d();
        setTimeout(d)
    });
    La.prototype = {init: function(a, b) {
            var c, d = a.series;
            a.series = null;
            c = A(G, a);
            c.series = a.series = d;
            this.userOptions = a;
            d = c.chart;
            this.margin = this.splashArray("margin", d);
            this.spacing = this.splashArray("spacing", d);
            var e = d.events;
            this.bounds = {h: {}, v: {}};
            this.callback = b;
            this.isResizing = 0;
            this.options = c;
            this.axes = [];
            this.series = [];
            this.hasCartesianSeries = d.showAxes;
            var f = this, g;
            f.index = U.length;
            U.push(f);
            Oa++;
            !1 !== d.reflow && L(f, "load", function() {
                f.initReflow()
            });
            if (e) for (g in e) L(f, g, e[g]);
            f.xAxis = [];
            f.yAxis = [];
            f.animation = ea ? !1 : r(d.animation, !0);
            f.pointCount = 0;
            f.counters = new zb;
            f.firstRender()
        }, initSeries: function(a) {
            var b = this.options.chart;
            (b = S[a.type || b.type || b.defaultSeriesType]) || ha(17, !0);
            b = new b;
            b.init(this, a);
            return b
        }, isInsidePlot: function(a, b, c) {
            var d = c ? b : a;
            a = c ? a : b;
            return 0 <= d && d <= this.plotWidth && 0 <= a && a <= this.plotHeight
        }, adjustTickAmounts: function() {
            !1 !== this.options.chart.alignTicks && s(this.axes, function(a) {
                a.adjustTickAmount()
            });
            this.maxTicks =
            null
        }, redraw: function(a) {
            var b = this.axes, c = this.series, d = this.pointer, e = this.legend, f = this.isDirtyLegend, g, h, k = this.isDirtyBox, l = c.length, m = l, n = this.renderer, q = n.isHidden(), p = [];
            aa = r(a, this.animation);
            q && this.cloneRenderTo();
            for (this.layOutTitles(); m--; ) if (a = c[m], a.options.stacking && (g = !0, a.isDirty)) {
                    h = !0;
                    break
                }
            if (h) for (m = l; m--; ) a = c[m], a.options.stacking && (a.isDirty = !0);
            s(c, function(a) {
                a.isDirty && "point" === a.options.legendType && (f = !0)
            });
            f && e.options.enabled && (e.render(), this.isDirtyLegend = !1);
            g &&
                    this.getStacks();
            this.hasCartesianSeries && (this.isResizing || (this.maxTicks = null, s(b, function(a) {
                a.setScale()
            })), this.adjustTickAmounts(), this.getMargins(), s(b, function(a) {
                a.isDirty && (k = !0)
            }), s(b, function(a) {
                a.isDirtyExtremes && (a.isDirtyExtremes = !1, p.push(function() {
                    F(a, "afterSetExtremes", t(a.eventArgs, a.getExtremes()));
                    delete a.eventArgs
                }));
                (k || g) && a.redraw()
            }));
            k && this.drawChartBox();
            s(c, function(a) {
                a.isDirty && a.visible && (!a.isCartesian || a.xAxis) && a.redraw()
            });
            d && d.reset(!0);
            n.draw();
            F(this, "redraw");
            q && this.cloneRenderTo(!0);
            s(p, function(a) {
                a.call()
            })
        }, get: function(a) {
            var b = this.axes, c = this.series, d, e;
            for (d = 0; d < b.length; d++) if (b[d].options.id === a) return b[d];
            for (d = 0; d < c.length; d++) if (c[d].options.id === a) return c[d];
            for (d = 0; d < c.length; d++) for (e = c[d].points || [], b = 0; b < e.length; b++) if (e[b].id === a) return e[b];
            return null
        }, getAxes: function() {
            var a = this, b = this.options, c = b.xAxis = ga(b.xAxis || {}), b = b.yAxis = ga(b.yAxis || {});
            s(c, function(a, b) {
                a.index = b;
                a.isX = !0
            });
            s(b, function(a, b) {
                a.index = b
            });
            c = c.concat(b);
            s(c, function(b) {
                new ra(a, b)
            });
            a.adjustTickAmounts()
        }, getSelectedPoints: function() {
            var a = [];
            s(this.series, function(b) {
                a = a.concat(qb(b.points || [], function(a) {
                    return a.selected
                }))
            });
            return a
        }, getSelectedSeries: function() {
            return qb(this.series, function(a) {
                return a.selected
            })
        }, getStacks: function() {
            var a = this;
            s(a.yAxis, function(a) {
                a.stacks && a.hasVisibleSeries && (a.oldStacks = a.stacks)
            });
            s(a.series, function(b) {
                !b.options.stacking || !0 !== b.visible && !1 !== a.options.chart.ignoreHiddenSeries || (b.stackKey = b.type +
                        r(b.options.stack, ""))
            })
        }, setTitle: function(a, b, c) {
            var d = this, e = d.options, f;
            f = e.title = A(e.title, a);
            e = e.subtitle = A(e.subtitle, b);
            s([["title", a, f], ["subtitle", b, e]], function(a) {
                var b = a[0], c = d[b], e = a[1];
                a = a[2];
                c && e && (d[b] = c = c.destroy());
                a && a.text && !c && (d[b] = d.renderer.text(a.text, 0, 0, a.useHTML).attr({align: a.align, "class": "highcharts-" + b, zIndex: a.zIndex || 4}).css(a.style).add())
            });
            d.layOutTitles(c)
        }, layOutTitles: function(a) {
            var b = 0, c = this.title, d = this.subtitle, e = this.options, f = e.title, e = e.subtitle, g =
                    this.spacingBox.width - 44;
            c && (c.css({width: (f.width || g) + "px"}).align(t({y: 15}, f), !1, "spacingBox"), f.floating || f.verticalAlign || (b = c.getBBox().height));
            d && (d.css({width: (e.width || g) + "px"}).align(t({y: b + f.margin}, e), !1, "spacingBox"), e.floating || e.verticalAlign || (b = Ca(b + d.getBBox().height)));
            c = this.titleOffset !== b;
            this.titleOffset = b;
            !this.isDirtyBox && c && (this.isDirtyBox = c, this.hasRendered && r(a, !0) && this.isDirtyBox && this.redraw())
        }, getChartSize: function() {
            var a = this.options.chart, b = a.width, a = a.height,
                    c = this.renderToClone || this.renderTo;
            v(b) || (this.containerWidth = bb(c, "width"));
            v(a) || (this.containerHeight = bb(c, "height"));
            this.chartWidth = w(0, b || this.containerWidth || 600);
            this.chartHeight = w(0, r(a, 19 < this.containerHeight ? this.containerHeight : 400))
        }, cloneRenderTo: function(a) {
            var b = this.renderToClone, c = this.container;
            a ? b && (this.renderTo.appendChild(c), Sa(b), delete this.renderToClone) : (c && c.parentNode === this.renderTo && this.renderTo.removeChild(c), this.renderToClone = b = this.renderTo.cloneNode(0), H(b, {position: "absolute",
                top: "-9999px", display: "block"}), b.style.setProperty && b.style.setProperty("display", "block", "important"), z.body.appendChild(b), c && b.appendChild(c))
        }, getContainer: function() {
            var a, b = this.options.chart, c, d, e;
            this.renderTo = a = b.renderTo;
            e = "highcharts-" + nb++;
            $(a) && (this.renderTo = a = z.getElementById(a));
            a || ha(13, !0);
            c = D(N(a, "data-highcharts-chart"));
            !isNaN(c) && U[c] && U[c].hasRendered && U[c].destroy();
            N(a, "data-highcharts-chart", this.index);
            a.innerHTML = "";
            b.skipClone || a.offsetWidth || this.cloneRenderTo();
            this.getChartSize();
            c = this.chartWidth;
            d = this.chartHeight;
            this.container = a = la(Ua, {className: "highcharts-container" + (b.className ? " " + b.className : ""), id: e}, t({position: "relative", overflow: "hidden", width: c + "px", height: d + "px", textAlign: "left", lineHeight: "normal", zIndex: 0, "-webkit-tap-highlight-color": "rgba(0,0,0,0)"}, b.style), this.renderToClone || a);
            this._cursor = a.style.cursor;
            this.renderer = b.forExport ? new Pa(a, c, d, b.style, !0) : new $a(a, c, d, b.style);
            ea && this.renderer.create(this, a, c, d)
        }, getMargins: function() {
            var a = this.spacing,
                    b, c = this.legend, d = this.margin, e = this.options.legend, f = r(e.margin, 20), g = e.x, h = e.y, k = e.align, l = e.verticalAlign, m = this.titleOffset;
            this.resetMargins();
            b = this.axisOffset;
            m && !v(d[0]) && (this.plotTop = w(this.plotTop, m + this.options.title.margin + a[0]));
            c.display && !e.floating && ("right" === k ? v(d[1]) || (this.marginRight = w(this.marginRight, c.legendWidth - g + f + a[1])) : "left" === k ? v(d[3]) || (this.plotLeft = w(this.plotLeft, c.legendWidth + g + f + a[3])) : "top" === l ? v(d[0]) || (this.plotTop = w(this.plotTop, c.legendHeight + h + f + a[0])) :
                    "bottom" !== l || v(d[2]) || (this.marginBottom = w(this.marginBottom, c.legendHeight - h + f + a[2])));
            this.extraBottomMargin && (this.marginBottom += this.extraBottomMargin);
            this.extraTopMargin && (this.plotTop += this.extraTopMargin);
            this.hasCartesianSeries && s(this.axes, function(a) {
                a.getOffset()
            });
            v(d[3]) || (this.plotLeft += b[3]);
            v(d[0]) || (this.plotTop += b[0]);
            v(d[2]) || (this.marginBottom += b[2]);
            v(d[1]) || (this.marginRight += b[1]);
            this.setChartSize()
        }, reflow: function(a) {
            var b = this, c = b.options.chart, d = b.renderTo, e = c.width ||
                    bb(d, "width"), f = c.height || bb(d, "height"), c = a ? a.target : J, d = function() {
                b.container && (b.setSize(e, f, !1), b.hasUserSize = null)
            };
            if (!b.hasUserSize && e && f && (c === J || c === z)) {
                if (e !== b.containerWidth || f !== b.containerHeight) clearTimeout(b.reflowTimeout), a ? b.reflowTimeout = setTimeout(d, 100) : d();
                b.containerWidth = e;
                b.containerHeight = f
            }
        }, initReflow: function() {
            var a = this, b = function(b) {
                a.reflow(b)
            };
            L(J, "resize", b);
            L(a, "destroy", function() {
                X(J, "resize", b)
            })
        }, setSize: function(a, b, c) {
            var d = this, e, f, g;
            d.isResizing += 1;
            g = function() {
                d &&
                        F(d, "endResize", null, function() {
                            d.isResizing -= 1
                        })
            };
            aa = r(c, d.animation);
            d.oldChartHeight = d.chartHeight;
            d.oldChartWidth = d.chartWidth;
            v(a) && (d.chartWidth = e = w(0, y(a)), d.hasUserSize = !!e);
            v(b) && (d.chartHeight = f = w(0, y(b)));
            (aa ? db : H)(d.container, {width: e + "px", height: f + "px"}, aa);
            d.setChartSize(!0);
            d.renderer.setSize(e, f, c);
            d.maxTicks = null;
            s(d.axes, function(a) {
                a.isDirty = !0;
                a.setScale()
            });
            s(d.series, function(a) {
                a.isDirty = !0
            });
            d.isDirtyLegend = !0;
            d.isDirtyBox = !0;
            d.layOutTitles();
            d.getMargins();
            d.redraw(c);
            d.oldChartHeight =
                    null;
            F(d, "resize");
            !1 === aa ? g() : setTimeout(g, aa && aa.duration || 500)
        }, setChartSize: function(a) {
            var b = this.inverted, c = this.renderer, d = this.chartWidth, e = this.chartHeight, f = this.options.chart, g = this.spacing, h = this.clipOffset, k, l, m, n;
            this.plotLeft = k = y(this.plotLeft);
            this.plotTop = l = y(this.plotTop);
            this.plotWidth = m = w(0, y(d - k - this.marginRight));
            this.plotHeight = n = w(0, y(e - l - this.marginBottom));
            this.plotSizeX = b ? n : m;
            this.plotSizeY = b ? m : n;
            this.plotBorderWidth = f.plotBorderWidth || 0;
            this.spacingBox = c.spacingBox = {x: g[3],
                y: g[0], width: d - g[3] - g[1], height: e - g[0] - g[2]};
            this.plotBox = c.plotBox = {x: k, y: l, width: m, height: n};
            d = 2 * R(this.plotBorderWidth / 2);
            b = Ca(w(d, h[3]) / 2);
            c = Ca(w(d, h[0]) / 2);
            this.clipBox = {x: b, y: c, width: R(this.plotSizeX - w(d, h[1]) / 2 - b), height: R(this.plotSizeY - w(d, h[2]) / 2 - c)};
            a || s(this.axes, function(a) {
                a.setAxisSize();
                a.setAxisTranslation()
            })
        }, resetMargins: function() {
            var a = this.spacing, b = this.margin;
            this.plotTop = r(b[0], a[0]);
            this.marginRight = r(b[1], a[1]);
            this.marginBottom = r(b[2], a[2]);
            this.plotLeft = r(b[3], a[3]);
            this.axisOffset = [0, 0, 0, 0];
            this.clipOffset = [0, 0, 0, 0]
        }, drawChartBox: function() {
            var a = this.options.chart, b = this.renderer, c = this.chartWidth, d = this.chartHeight, e = this.chartBackground, f = this.plotBackground, g = this.plotBorder, h = this.plotBGImage, k = a.borderWidth || 0, l = a.backgroundColor, m = a.plotBackgroundColor, n = a.plotBackgroundImage, q = a.plotBorderWidth || 0, p, r = this.plotLeft, s = this.plotTop, t = this.plotWidth, v = this.plotHeight, u = this.plotBox, w = this.clipRect, y = this.clipBox;
            p = k + (a.shadow ? 8 : 0);
            if (k || l) e ? e.animate(e.crisp({width: c -
                    p, height: d - p})) : (e = {fill: l || V}, k && (e.stroke = a.borderColor, e["stroke-width"] = k), this.chartBackground = b.rect(p / 2, p / 2, c - p, d - p, a.borderRadius, k).attr(e).addClass("highcharts-background").add().shadow(a.shadow));
            m && (f ? f.animate(u) : this.plotBackground = b.rect(r, s, t, v, 0).attr({fill: m}).add().shadow(a.plotShadow));
            n && (h ? h.animate(u) : this.plotBGImage = b.image(n, r, s, t, v).add());
            w ? w.animate({width: y.width, height: y.height}) : this.clipRect = b.clipRect(y);
            q && (g ? g.animate(g.crisp({x: r, y: s, width: t, height: v})) : this.plotBorder =
                    b.rect(r, s, t, v, 0, -q).attr({stroke: a.plotBorderColor, "stroke-width": q, fill: V, zIndex: 1}).add());
            this.isDirtyBox = !1
        }, propFromSeries: function() {
            var a = this, b = a.options.chart, c, d = a.options.series, e, f;
            s(["inverted", "angular", "polar"], function(g) {
                c = S[b.type || b.defaultSeriesType];
                f = a[g] || b[g] || c && c.prototype[g];
                for (e = d && d.length; !f && e--; ) (c = S[d[e].type]) && c.prototype[g] && (f = !0);
                a[g] = f
            })
        }, linkSeries: function() {
            var a = this, b = a.series;
            s(b, function(a) {
                a.linkedSeries.length = 0
            });
            s(b, function(b) {
                var d = b.options.linkedTo;
                $(d) && (d = ":previous" === d ? a.series[b.index - 1] : a.get(d)) && (d.linkedSeries.push(b), b.linkedParent = d)
            })
        }, renderSeries: function() {
            s(this.series, function(a) {
                a.translate();
                a.setTooltipPoints && a.setTooltipPoints();
                a.render()
            })
        }, render: function() {
            var a = this, b = a.axes, c = a.renderer, d = a.options, e = d.labels, f = d.credits, g;
            a.setTitle();
            a.legend = new gb(a, d.legend);
            a.getStacks();
            s(b, function(a) {
                a.setScale()
            });
            a.getMargins();
            a.maxTicks = null;
            s(b, function(a) {
                a.setTickPositions(!0);
                a.setMaxTicks()
            });
            a.adjustTickAmounts();
            a.getMargins();
            a.drawChartBox();
            a.hasCartesianSeries && s(b, function(a) {
                a.render()
            });
            a.seriesGroup || (a.seriesGroup = c.g("series-group").attr({zIndex: 3}).add());
            a.renderSeries();
            e.items && s(e.items, function(b) {
                var d = t(e.style, b.style), f = D(d.left) + a.plotLeft, g = D(d.top) + a.plotTop + 12;
                delete d.left;
                delete d.top;
                c.text(b.html, f, g).attr({zIndex: 2}).css(d).add()
            });
            f.enabled && !a.credits && (g = f.href, a.credits = c.text(f.text, 0, 0).on("click", function() {
                g && (location.href = g)
            }).attr({align: f.position.align, zIndex: 8}).css(f.style).add().align(f.position));
            a.hasRendered = !0
        }, destroy: function() {
            var a = this, b = a.axes, c = a.series, d = a.container, e, f = d && d.parentNode;
            F(a, "destroy");
            U[a.index] = u;
            Oa--;
            a.renderTo.removeAttribute("data-highcharts-chart");
            X(a);
            for (e = b.length; e--; ) b[e] = b[e].destroy();
            for (e = c.length; e--; ) c[e] = c[e].destroy();
            s("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer scroller rangeSelector legend resetZoomButton tooltip renderer".split(" "), function(b) {
                var c = a[b];
                c && c.destroy && (a[b] = c.destroy())
            });
            d && (d.innerHTML = "", X(d), f && Sa(d));
            for (e in a) delete a[e]
        }, isReadyToRender: function() {
            var a = this;
            return!da && J == J.top && "complete" !== z.readyState || ea && !J.canvg ? (ea ? Lb.push(function() {
                a.firstRender()
            }, a.options.global.canvasToolsURL) : z.attachEvent("onreadystatechange", function() {
                z.detachEvent("onreadystatechange", a.firstRender);
                "complete" === z.readyState && a.firstRender()
            }), !1) : !0
        }, firstRender: function() {
            var a = this, b = a.options, c = a.callback;
            a.isReadyToRender() && (a.getContainer(), F(a, "init"), a.resetMargins(),
                    a.setChartSize(), a.propFromSeries(), a.getAxes(), s(b.series || [], function(b) {
                a.initSeries(b)
            }), a.linkSeries(), F(a, "beforeRender"), W.Pointer && (a.pointer = new Ha(a, b)), a.render(), a.renderer.draw(), c && c.apply(a, [a]), s(a.callbacks, function(b) {
                b.apply(a, [a])
            }), a.cloneRenderTo(!0), F(a, "load"))
        }, splashArray: function(a, b) {
            var c = b[a], c = Y(c) ? c : [c, c, c, c];
            return[r(b[a + "Top"], c[0]), r(b[a + "Right"], c[1]), r(b[a + "Bottom"], c[2]), r(b[a + "Left"], c[3])]
        }};
    La.prototype.callbacks = [];
    var Ia = function() {
    };
    Ia.prototype = {init: function(a,
                b, c) {
            this.series = a;
            this.applyOptions(b, c);
            this.pointAttr = {};
            a.options.colorByPoint && (b = a.options.colors || a.chart.options.colors, this.color = this.color || b[a.colorCounter++], a.colorCounter === b.length && (a.colorCounter = 0));
            a.chart.pointCount++;
            return this
        }, applyOptions: function(a, b) {
            var c = this.series, d = c.pointValKey;
            a = Ia.prototype.optionsToObject.call(this, a);
            t(this, a);
            this.options = this.options ? t(this.options, a) : a;
            d && (this.y = this[d]);
            this.x === u && c && (this.x = b === u ? c.autoIncrement() : b);
            return this
        }, optionsToObject: function(a) {
            var b =
                    {}, c = this.series, d = c.pointArrayMap || ["y"], e = d.length, f = 0, g = 0;
            if ("number" === typeof a || null === a) b[d[0]] = a;
            else if (oa(a)) for (a.length > e && (c = typeof a[0], "string" === c?b.name = a[0]:"number" === c && (b.x = a[0]), f++); g < e; ) b[d[g++]] = a[f++];
            else "object" === typeof a && (b = a, a.dataLabels && (c._hasPointLabels = !0), a.marker && (c._hasPointMarkers = !0));
            return b
        }, destroy: function() {
            var a = this.series.chart, b = a.hoverPoints, c;
            a.pointCount--;
            b && (this.setState(), ka(b, this), b.length || (a.hoverPoints = null));
            if (this === a.hoverPoint) this.onMouseOut();
            if (this.graphic || this.dataLabel) X(this), this.destroyElements();
            this.legendItem && a.legend.destroyItem(this);
            for (c in this) this[c] = null
        }, destroyElements: function() {
            for (var a = "graphic dataLabel dataLabelUpper group connector shadowGroup".split(" "), b, c = 6; c--; ) b = a[c], this[b] && (this[b] = this[b].destroy())
        }, getLabelConfig: function() {
            return{x: this.category, y: this.y, key: this.name || this.category, series: this.series, point: this, percentage: this.percentage, total: this.total || this.stackTotal}
        }, tooltipFormatter: function(a) {
            var b =
                    this.series, c = b.tooltipOptions, d = r(c.valueDecimals, ""), e = c.valuePrefix || "", f = c.valueSuffix || "";
            s(b.pointArrayMap || ["y"], function(b) {
                b = "{point." + b;
                if (e || f) a = a.replace(b + "}", e + b + "}" + f);
                a = a.replace(b + "}", b + ":,." + d + "f}")
            });
            return ya(a, {point: this, series: this.series})
        }, firePointEvent: function(a, b, c) {
            var d = this, e = this.series.options;
            (e.point.events[a] || d.options && d.options.events && d.options.events[a]) && this.importEvents();
            "click" === a && e.allowPointSelect && (c = function(a) {
                d.select(null, a.ctrlKey || a.metaKey ||
                        a.shiftKey)
            });
            F(this, a, b, c)
        }};
    var ja = function() {
    };
    ja.prototype = {isCartesian: !0, type: "line", pointClass: Ia, sorted: !0, requireSorting: !0, pointAttrToOptions: {stroke: "lineColor", "stroke-width": "lineWidth", fill: "fillColor", r: "radius"}, axisTypes: ["xAxis", "yAxis"], colorCounter: 0, parallelArrays: ["x", "y"], init: function(a, b) {
            var c = this, d, e, f = a.series, g = function(a, b) {
                return r(a.options.index, a._i) - r(b.options.index, b._i)
            };
            c.chart = a;
            c.options = b = c.setOptions(b);
            c.linkedSeries = [];
            c.bindAxes();
            t(c, {name: b.name, state: "",
                pointAttr: {}, visible: !1 !== b.visible, selected: !0 === b.selected});
            ea && (b.animation = !1);
            e = b.events;
            for (d in e) L(c, d, e[d]);
            if (e && e.click || b.point && b.point.events && b.point.events.click || b.allowPointSelect) a.runTrackerClick = !0;
            c.getColor();
            c.getSymbol();
            s(c.parallelArrays, function(a) {
                c[a + "Data"] = []
            });
            c.setData(b.data, !1);
            c.isCartesian && (a.hasCartesianSeries = !0);
            f.push(c);
            c._i = f.length - 1;
            ib(f, g);
            this.yAxis && ib(this.yAxis.series, g);
            s(f, function(a, b) {
                a.index = b;
                a.name = a.name || "Series " + (b + 1)
            })
        }, bindAxes: function() {
            var a =
                    this, b = a.options, c = a.chart, d;
            s(a.axisTypes || [], function(e) {
                s(c[e], function(c) {
                    d = c.options;
                    if (b[e] === d.index || b[e] !== u && b[e] === d.id || b[e] === u && 0 === d.index) c.series.push(a), a[e] = c, c.isDirty = !0
                });
                a[e] || a.optionalAxis === e || ha(18, !0)
            })
        }, updateParallelArrays: function(a, b) {
            var c = a.series, d = arguments;
            s(c.parallelArrays, "number" === typeof b ? function(d) {
                var f = "y" === d && c.toYData ? c.toYData(a) : a[d];
                c[d + "Data"][b] = f
            } : function(a) {
                Array.prototype[b].apply(c[a + "Data"], Array.prototype.slice.call(d, 2))
            })
        }, autoIncrement: function() {
            var a =
                    this.options, b = this.xIncrement, b = r(b, a.pointStart, 0);
            this.pointInterval = r(this.pointInterval, a.pointInterval, 1);
            this.xIncrement = b + this.pointInterval;
            return b
        }, getSegments: function() {
            var a = -1, b = [], c, d = this.points, e = d.length;
            if (e) if (this.options.connectNulls) {
                    for (c = e; c--; ) null === d[c].y && d.splice(c, 1);
                    d.length && (b = [d])
                } else s(d, function(c, g) {
                        null === c.y ? (g > a + 1 && b.push(d.slice(a + 1, g)), a = g) : g === e - 1 && b.push(d.slice(a + 1, g + 1))
                    });
            this.segments = b
        }, setOptions: function(a) {
            var b = this.chart, c = b.options.plotOptions,
                    b = b.userOptions || {}, d = b.plotOptions || {}, e = c[this.type];
            this.userOptions = a;
            c = A(e, c.series, a);
            this.tooltipOptions = A(G.tooltip, G.plotOptions[this.type].tooltip, b.tooltip, d.series && d.series.tooltip, d[this.type] && d[this.type].tooltip, a.tooltip);
            null === e.marker && delete c.marker;
            return c
        }, getColor: function() {
            var a = this.options, b = this.userOptions, c = this.chart.options.colors, d = this.chart.counters, e;
            e = a.color || fb[this.type].color;
            e || a.colorByPoint || (v(b._colorIndex) ? a = b._colorIndex : (b._colorIndex = d.color, a =
                    d.color++), e = c[a]);
            this.color = e;
            d.wrapColor(c.length)
        }, getSymbol: function() {
            var a = this.userOptions, b = this.options.marker, c = this.chart, d = c.options.symbols, c = c.counters;
            this.symbol = b.symbol;
            this.symbol || (v(a._symbolIndex) ? a = a._symbolIndex : (a._symbolIndex = c.symbol, a = c.symbol++), this.symbol = d[a]);
            /^url/.test(this.symbol) && (b.radius = 0);
            c.wrapSymbol(d.length)
        }, drawLegendSymbol: Xb.drawLineMarker, setData: function(a, b, c, d) {
            var e = this, f = e.points, g = f && f.length || 0, h, k = e.options, l = e.chart, m = null, n = e.xAxis, q = n &&
                    !!n.categories, p = e.tooltipPoints, t = k.turboThreshold, v = this.xData, w = this.yData, y = (h = e.pointArrayMap) && h.length;
            a = a || [];
            h = a.length;
            b = r(b, !0);
            if (!1 === d || !h || g !== h || e.cropped || e.hasGroupedData) {
                e.xIncrement = null;
                e.pointRange = q ? 1 : k.pointRange;
                e.colorCounter = 0;
                s(this.parallelArrays, function(a) {
                    e[a + "Data"].length = 0
                });
                if (t && h > t) {
                    for (c = 0; null === m && c < h; ) m = a[c], c++;
                    if (ca(m)) {
                        q = r(k.pointStart, 0);
                        k = r(k.pointInterval, 1);
                        for (c = 0; c < h; c++) v[c] = q, w[c] = a[c], q += k;
                        e.xIncrement = q
                    } else if (oa(m)) if (y) for (c = 0; c < h; c++) k = a[c],
                                        v[c] = k[0], w[c] = k.slice(1, y + 1);
                        else for (c = 0; c < h; c++) k = a[c], v[c] = k[0], w[c] = k[1];
                    else ha(12)
                } else for (c = 0; c < h; c++) a[c] !== u && (k = {series: e}, e.pointClass.prototype.applyOptions.apply(k, [a[c]]), e.updateParallelArrays(k, c), q && k.name && (n.names[k.x] = k.name));
                $(w[0]) && ha(14, !0);
                e.data = [];
                e.options.data = a;
                for (c = g; c--; ) f[c] && f[c].destroy && f[c].destroy();
                p && (p.length = 0);
                n && (n.minRange = n.userMinRange);
                e.isDirty = e.isDirtyData = l.isDirtyBox = !0;
                c = !1
            } else s(a, function(a, b) {
                    f[b].update(a, !1)
                });
            b && l.redraw(c)
        }, processData: function(a) {
            var b =
                    this.xData, c = this.yData, d = b.length, e;
            e = 0;
            var f, g, h = this.xAxis, k = this.options, l = k.cropThreshold, m = 0, n = this.isCartesian, q, p;
            if (n && !(this.isDirty || h.isDirty || this.yAxis.isDirty || a)) return!1;
            if (n && this.sorted && (!l || d > l || this.forceCrop)) if (q = h.min, p = h.max, b[d - 1] < q || b[0] > p) b = [], c = [];
                else if (b[0] < q || b[d - 1] > p) e = this.cropData(this.xData, this.yData, q, p), b = e.xData, c = e.yData, e = e.start, f = !0, m = b.length;
            for (d = b.length - 1; 0 <= d; d--) a = b[d] - b[d - 1], !f && b[d] > q && b[d] < p && m++, 0 < a && (g === u || a < g) ? g = a : 0 > a && this.requireSorting &&
                        ha(15);
            this.cropped = f;
            this.cropStart = e;
            this.processedXData = b;
            this.processedYData = c;
            this.activePointCount = m;
            null === k.pointRange && (this.pointRange = g || 1);
            this.closestPointRange = g
        }, cropData: function(a, b, c, d) {
            var e = a.length, f = 0, g = e, h = r(this.cropShoulder, 1), k;
            for (k = 0; k < e; k++) if (a[k] >= c) {
                    f = w(0, k - h);
                    break
                }
            for (; k < e; k++) if (a[k] > d) {
                    g = k + h;
                    break
                }
            return{xData: a.slice(f, g), yData: b.slice(f, g), start: f, end: g}
        }, generatePoints: function() {
            var a = this.options.data, b = this.data, c, d = this.processedXData, e = this.processedYData,
                    f = this.pointClass, g = d.length, h = this.cropStart || 0, k, l = this.hasGroupedData, m, n = [], q;
            b || l || (b = [], b.length = a.length, b = this.data = b);
            for (q = 0; q < g; q++) k = h + q, l ? n[q] = (new f).init(this, [d[q]].concat(ga(e[q]))) : (b[k] ? m = b[k] : a[k] !== u && (b[k] = m = (new f).init(this, a[k], d[q])), n[q] = m);
            if (b && (g !== (c = b.length) || l)) for (q = 0; q < c; q++) q !== h || l || (q += g), b[q] && (b[q].destroyElements(), b[q].plotX = u);
            this.data = b;
            this.points = n
        }, getExtremes: function(a) {
            var b = this.yAxis, c = this.processedXData, d, e = [], f = 0;
            d = this.xAxis.getExtremes();
            var g = d.min, h = d.max, k, l, m, n;
            a = a || this.stackedYData || this.processedYData;
            d = a.length;
            for (n = 0; n < d; n++) if (l = c[n], m = a[n], k = null !== m && m !== u && (!b.isLog || m.length || 0 < m), l = this.getExtremesFromAll || this.cropped || (c[n + 1] || l) >= g && (c[n - 1] || l) <= h, k && l) if (k = m.length) for (; k--; ) null !== m[k] && (e[f++] = m[k]);
                    else e[f++] = m;
            this.dataMin = r(void 0, za(e));
            this.dataMax = r(void 0, qa(e))
        }, translate: function() {
            this.processedXData || this.processData();
            this.generatePoints();
            for (var a = this.options, b = a.stacking, c = this.xAxis, d = c.categories,
                    e = this.yAxis, f = this.points, g = f.length, h = !!this.modifyValue, k = a.pointPlacement, l = "between" === k || ca(k), m = a.threshold, a = 0; a < g; a++) {
                var n = f[a], q = n.x, p = n.y, s = n.low, t = b && e.stacks[(this.negStacks && p < m ? "-" : "") + this.stackKey];
                e.isLog && 0 >= p && (n.y = p = null);
                n.plotX = c.translate(q, 0, 0, 0, 1, k, "flags" === this.type);
                b && this.visible && t && t[q] && (t = t[q], p = t.points[this.index + "," + a], s = p[0], p = p[1], 0 === s && (s = r(m, e.min)), e.isLog && 0 >= s && (s = null), n.total = n.stackTotal = t.total, n.percentage = t.total && n.y / t.total * 100, n.stackY = p, t.setOffset(this.pointXOffset ||
                        0, this.barW || 0));
                n.yBottom = v(s) ? e.translate(s, 0, 1, 0, 1) : null;
                h && (p = this.modifyValue(p, n));
                n.plotY = "number" === typeof p && Infinity !== p ? e.translate(p, 0, 1, 0, 1) : u;
                n.clientX = l ? c.translate(q, 0, 0, 0, 1) : n.plotX;
                n.negative = n.y < (m || 0);
                n.category = d && d[n.x] !== u ? d[n.x] : n.x
            }
            this.getSegments()
        }, animate: function(a) {
            var b = this.chart, c = b.renderer, d;
            d = this.options.animation;
            var e = this.clipBox || b.clipBox, f = b.inverted, g;
            d && !Y(d) && (d = fb[this.type].animation);
            g = ["_sharedClip", d.duration, d.easing, e.height].join();
            a ? (a = b[g],
                    d = b[g + "m"], a || (b[g] = a = c.clipRect(t(e, {width: 0})), b[g + "m"] = d = c.clipRect(-99, f ? -b.plotLeft : -b.plotTop, 99, f ? b.chartWidth : b.chartHeight)), this.group.clip(a), this.markerGroup.clip(d), this.sharedClipKey = g) : ((a = b[g]) && a.animate({width: b.plotSizeX}, d), b[g + "m"] && b[g + "m"].animate({width: b.plotSizeX + 99}, d), this.animate = null)
        }, afterAnimate: function() {
            var a = this.chart, b = this.sharedClipKey, c = this.group, d = this.clipBox;
            c && !1 !== this.options.clip && (b && d || c.clip(d ? a.renderer.clipRect(d) : a.clipRect), this.markerGroup.clip());
            F(this, "afterAnimate");
            setTimeout(function() {
                b && a[b] && (d || (a[b] = a[b].destroy()), a[b + "m"] && (a[b + "m"] = a[b + "m"].destroy()))
            }, 100)
        }, drawPoints: function() {
            var a, b = this.points, c = this.chart, d, e, f, g, h, k, l, m;
            d = this.options.marker;
            var n = this.pointAttr[""], q, p = this.markerGroup, s = r(d.enabled, this.activePointCount < 0.5 * this.xAxis.len / d.radius);
            if (!1 !== d.enabled || this._hasPointMarkers) for (f = b.length; f--; ) g = b[f], d = R(g.plotX), e = g.plotY, m = g.graphic, k = g.marker || {}, a = s && k.enabled === u || k.enabled, q = c.isInsidePlot(y(d),
                            e, c.inverted), a && e !== u && !isNaN(e) && null !== g.y ? (a = g.pointAttr[g.selected ? "select" : ""] || n, h = a.r, k = r(k.symbol, this.symbol), l = 0 === k.indexOf("url"), m ? m[q ? "show" : "hide"](!0).animate(t({x: d - h, y: e - h}, m.symbolName ? {width: 2 * h, height: 2 * h} : {})) : q && (0 < h || l) && (g.graphic = c.renderer.symbol(k, d - h, e - h, 2 * h, 2 * h).attr(a).add(p))) : m && (g.graphic = m.destroy())
        }, convertAttribs: function(a, b, c, d) {
            var e = this.pointAttrToOptions, f, g, h = {};
            a = a || {};
            b = b || {};
            c = c || {};
            d = d || {};
            for (f in e) g = e[f], h[f] = r(a[g], b[f], c[f], d[f]);
            return h
        }, getAttribs: function() {
            var a =
                    this, b = a.options, c = fb[a.type].marker ? b.marker : b, d = c.states, e = d.hover, f, g = a.color;
            f = {stroke: g, fill: g};
            var h = a.points || [], k, l = [], m, n = a.pointAttrToOptions;
            m = a.hasPointSpecificOptions;
            var q = b.negativeColor, p = c.lineColor, r = c.fillColor;
            k = b.turboThreshold;
            var w;
            b.marker ? (e.radius = e.radius || c.radius + 2, e.lineWidth = e.lineWidth || c.lineWidth + 1) : e.color = e.color || Fa(e.color || g).brighten(e.brightness).get();
            l[""] = a.convertAttribs(c, f);
            s(["hover", "select"], function(b) {
                l[b] = a.convertAttribs(d[b], l[""])
            });
            a.pointAttr =
                    l;
            g = h.length;
            if (!k || g < k || m) for (; g--; ) {
                    k = h[g];
                    (c = k.options && k.options.marker || k.options) && !1 === c.enabled && (c.radius = 0);
                    k.negative && q && (k.color = k.fillColor = q);
                    m = b.colorByPoint || k.color;
                    if (k.options) for (w in n) v(c[n[w]]) && (m = !0);
                    m ? (c = c || {}, m = [], d = c.states || {}, f = d.hover = d.hover || {}, b.marker || (f.color = f.color || !k.options.color && e.color || Fa(k.color).brighten(f.brightness || e.brightness).get()), f = {color: k.color}, r || (f.fillColor = k.color), p || (f.lineColor = k.color), m[""] = a.convertAttribs(t(f, c), l[""]), m.hover =
                            a.convertAttribs(d.hover, l.hover, m[""]), m.select = a.convertAttribs(d.select, l.select, m[""])) : m = l;
                    k.pointAttr = m
                }
        }, destroy: function() {
            var a = this, b = a.chart, c = /AppleWebKit\/533/.test(sa), d, e, f = a.data || [], g, h, k;
            F(a, "destroy");
            X(a);
            s(a.axisTypes || [], function(b) {
                if (k = a[b]) ka(k.series, a), k.isDirty = k.forceRedraw = !0
            });
            a.legendItem && a.chart.legend.destroyItem(a);
            for (e = f.length; e--; ) (g = f[e]) && g.destroy && g.destroy();
            a.points = null;
            clearTimeout(a.animationTimeout);
            s("area graph dataLabelsGroup group markerGroup tracker graphNeg areaNeg posClip negClip".split(" "),
                    function(b) {
                        a[b] && (d = c && "group" === b ? "hide" : "destroy", a[b][d]())
                    });
            b.hoverSeries === a && (b.hoverSeries = null);
            ka(b.series, a);
            for (h in a) delete a[h]
        }, getSegmentPath: function(a) {
            var b = this, c = [], d = b.options.step;
            s(a, function(e, f) {
                var g = e.plotX, h = e.plotY, k;
                b.getPointSpline ? c.push.apply(c, b.getPointSpline(a, e, f)) : (c.push(f ? "L" : "M"), d && f && (k = a[f - 1], "right" === d ? c.push(k.plotX, h) : "center" === d ? c.push((k.plotX + g) / 2, k.plotY, (k.plotX + g) / 2, h) : c.push(g, k.plotY)), c.push(e.plotX, e.plotY))
            });
            return c
        }, getGraphPath: function() {
            var a =
                    this, b = [], c, d = [];
            s(a.segments, function(e) {
                c = a.getSegmentPath(e);
                1 < e.length ? b = b.concat(c) : d.push(e[0])
            });
            a.singlePoints = d;
            return a.graphPath = b
        }, drawGraph: function() {
            var a = this, b = this.options, c = [["graph", b.lineColor || this.color]], d = b.lineWidth, e = b.dashStyle, f = "square" !== b.linecap, g = this.getGraphPath(), h = b.negativeColor;
            h && c.push(["graphNeg", h]);
            s(c, function(c, h) {
                var m = c[0], n = a[m];
                n ? (eb(n), n.animate({d: g})) : d && g.length && (n = {stroke: c[1], "stroke-width": d, fill: V, zIndex: 1}, e ? n.dashstyle = e : f && (n["stroke-linecap"] =
                        n["stroke-linejoin"] = "round"), a[m] = a.chart.renderer.path(g).attr(n).add(a.group).shadow(!h && b.shadow))
            })
        }, clipNeg: function() {
            var a = this.options, b = this.chart, c = b.renderer, d = a.negativeColor || a.negativeFillColor, e, f = this.graph, g = this.area, h = this.posClip, k = this.negClip;
            e = b.chartWidth;
            var l = b.chartHeight, m = w(e, l), n = this.yAxis;
            d && (f || g) && (d = y(n.toPixels(a.threshold || 0, !0)), 0 > d && (m -= d), a = {x: 0, y: 0, width: m, height: d}, m = {x: 0, y: d, width: m, height: m}, b.inverted && (a.height = m.y = b.plotWidth - d, c.isVML && (a = {x: b.plotWidth -
                        d - b.plotLeft, y: 0, width: e, height: l}, m = {x: d + b.plotLeft - e, y: 0, width: b.plotLeft + d, height: e})), n.reversed ? (b = m, e = a) : (b = a, e = m), h ? (h.animate(b), k.animate(e)) : (this.posClip = h = c.clipRect(b), this.negClip = k = c.clipRect(e), f && this.graphNeg && (f.clip(h), this.graphNeg.clip(k)), g && (g.clip(h), this.areaNeg.clip(k))))
        }, invertGroups: function() {
            function a() {
                var a = {width: b.yAxis.len, height: b.xAxis.len};
                s(["group", "markerGroup"], function(c) {
                    b[c] && b[c].attr(a).invert()
                })
            }
            var b = this, c = b.chart;
            b.xAxis && (L(c, "resize", a), L(b,
                    "destroy", function() {
                        X(c, "resize", a)
                    }), a(), b.invertGroups = a)
        }, plotGroup: function(a, b, c, d, e) {
            var f = this[a], g = !f;
            g && (this[a] = f = this.chart.renderer.g(b).attr({visibility: c, zIndex: d || 0.1}).add(e));
            f[g ? "attr" : "animate"](this.getPlotBox());
            return f
        }, getPlotBox: function() {
            var a = this.chart, b = this.xAxis, c = this.yAxis;
            a.inverted && (b = c, c = this.xAxis);
            return{translateX: b ? b.left : a.plotLeft, translateY: c ? c.top : a.plotTop, scaleX: 1, scaleY: 1}
        }, render: function() {
            var a = this, b = a.chart, c, d = a.options, e = (c = d.animation) && !!a.animate &&
                    b.renderer.isSVG && r(c.duration, 500) || 0, f = a.visible ? "visible" : "hidden", g = d.zIndex, h = a.hasRendered, k = b.seriesGroup;
            c = a.plotGroup("group", "series", f, g, k);
            a.markerGroup = a.plotGroup("markerGroup", "markers", f, g, k);
            e && a.animate(!0);
            a.getAttribs();
            c.inverted = a.isCartesian ? b.inverted : !1;
            a.drawGraph && (a.drawGraph(), a.clipNeg());
            a.drawDataLabels && a.drawDataLabels();
            a.visible && a.drawPoints();
            a.drawTracker && !1 !== a.options.enableMouseTracking && a.drawTracker();
            b.inverted && a.invertGroups();
            !1 === d.clip || a.sharedClipKey ||
                    h || c.clip(b.clipRect);
            e && a.animate();
            h || (e ? a.animationTimeout = setTimeout(function() {
                a.afterAnimate()
            }, e) : a.afterAnimate());
            a.isDirty = a.isDirtyData = !1;
            a.hasRendered = !0
        }, redraw: function() {
            var a = this.chart, b = this.isDirtyData, c = this.group, d = this.xAxis, e = this.yAxis;
            c && (a.inverted && c.attr({width: a.plotWidth, height: a.plotHeight}), c.animate({translateX: r(d && d.left, a.plotLeft), translateY: r(e && e.top, a.plotTop)}));
            this.translate();
            this.setTooltipPoints && this.setTooltipPoints(!0);
            this.render();
            b && F(this, "updatedData")
        }};
    t(La.prototype, {addSeries: function(a, b, c) {
            var d, e = this;
            a && (b = r(b, !0), F(e, "addSeries", {options: a}, function() {
                d = e.initSeries(a);
                e.isDirtyLegend = !0;
                e.linkSeries();
                b && e.redraw(c)
            }));
            return d
        }, addAxis: function(a, b, c, d) {
            var e = b ? "xAxis" : "yAxis", f = this.options;
            new ra(this, A(a, {index: this[e].length, isX: b}));
            f[e] = ga(f[e] || {});
            f[e].push(a);
            r(c, !0) && this.redraw(d)
        }, showLoading: function(a) {
            var b = this.options, c = this.loadingDiv, d = b.loading;
            c || (this.loadingDiv = c = la(Ua, {className: "highcharts-loading"}, t(d.style, {zIndex: 10,
                display: V}), this.container), this.loadingSpan = la("span", null, d.labelStyle, c));
            this.loadingSpan.innerHTML = a || b.lang.loading;
            this.loadingShown || (H(c, {opacity: 0, display: "", left: this.plotLeft + "px", top: this.plotTop + "px", width: this.plotWidth + "px", height: this.plotHeight + "px"}), db(c, {opacity: d.style.opacity}, {duration: d.showDuration || 0}), this.loadingShown = !0)
        }, hideLoading: function() {
            var a = this.options, b = this.loadingDiv;
            b && db(b, {opacity: 0}, {duration: a.loading.hideDuration || 100, complete: function() {
                    H(b, {display: V})
                }});
            this.loadingShown = !1
        }});
    t(Ia.prototype, {update: function(a, b, c) {
            var d = this, e = d.series, f = d.graphic, g, h = e.data, k = e.chart, l = e.options;
            b = r(b, !0);
            d.firePointEvent("update", {options: a}, function() {
                d.applyOptions(a);
                Y(a) && (e.getAttribs(), f && (a && a.marker && a.marker.symbol ? d.graphic = f.destroy() : f.attr(d.pointAttr[d.state || ""])), a && a.dataLabels && d.dataLabel && (d.dataLabel = d.dataLabel.destroy()));
                g = Ea(d, h);
                e.updateParallelArrays(d, g);
                l.data[g] = d.options;
                e.isDirty = e.isDirtyData = !0;
                !e.fixedBox && e.hasCartesianSeries &&
                        (k.isDirtyBox = !0);
                "point" === l.legendType && k.legend.destroyItem(d);
                b && k.redraw(c)
            })
        }, remove: function(a, b) {
            var c = this, d = c.series, e = d.points, f = d.chart, g, h = d.data;
            aa = r(b, f.animation);
            a = r(a, !0);
            c.firePointEvent("remove", null, function() {
                g = Ea(c, h);
                h.length === e.length && e.splice(g, 1);
                h.splice(g, 1);
                d.options.data.splice(g, 1);
                d.updateParallelArrays(c, "splice", g, 1);
                c.destroy();
                d.isDirty = !0;
                d.isDirtyData = !0;
                a && f.redraw()
            })
        }});
    t(ja.prototype, {addPoint: function(a, b, c, d) {
            var e = this.options, f = this.data, g = this.graph,
                    h = this.area, k = this.chart, l = this.xAxis && this.xAxis.names, m = g && g.shift || 0, n = e.data, q, p = this.xData;
            aa = r(d, k.animation);
            c && s([g, h, this.graphNeg, this.areaNeg], function(a) {
                a && (a.shift = m + 1)
            });
            h && (h.isArea = !0);
            b = r(b, !0);
            d = {series: this};
            this.pointClass.prototype.applyOptions.apply(d, [a]);
            g = d.x;
            h = p.length;
            if (this.requireSorting && g < p[h - 1]) for (q = !0; h && p[h - 1] > g; ) h--;
            this.updateParallelArrays(d, "splice", h, 0, 0);
            this.updateParallelArrays(d, h);
            l && (l[g] = d.name);
            n.splice(h, 0, a);
            q && (this.data.splice(h, 0, null), this.processData());
            "point" === e.legendType && this.generatePoints();
            c && (f[0] && f[0].remove ? f[0].remove(!1) : (f.shift(), this.updateParallelArrays(d, "shift"), n.shift()));
            this.isDirtyData = this.isDirty = !0;
            b && (this.getAttribs(), k.redraw())
        }, remove: function(a, b) {
            var c = this, d = c.chart;
            a = r(a, !0);
            c.isRemoving || (c.isRemoving = !0, F(c, "remove", null, function() {
                c.destroy();
                d.isDirtyLegend = d.isDirtyBox = !0;
                d.linkSeries();
                a && d.redraw(b)
            }));
            c.isRemoving = !1
        }, update: function(a, b) {
            var c = this.chart, d = this.type, e = S[d].prototype, f;
            a = A(this.userOptions,
                    {animation: !1, index: this.index, pointStart: this.xData[0]}, {data: this.options.data}, a);
            this.remove(!1);
            for (f in e) e.hasOwnProperty(f) && (this[f] = u);
            t(this, S[a.type || d].prototype);
            this.init(c, a);
            r(b, !0) && c.redraw(!1)
        }});
    t(ra.prototype, {update: function(a, b) {
            var c = this.chart;
            a = c.options[this.coll][this.options.index] = A(this.userOptions, a);
            this.destroy(!0);
            this._addedPlotLB = u;
            this.init(c, t(a, {events: u}));
            c.isDirtyBox = !0;
            r(b, !0) && c.redraw()
        }, remove: function(a) {
            for (var b = this.chart, c = this.coll, d = this.series,
                    e = d.length; e--; ) d[e] && d[e].remove(!1);
            ka(b.axes, this);
            ka(b[c], this);
            b.options[c].splice(this.options.index, 1);
            s(b[c], function(a, b) {
                a.options.index = b
            });
            this.destroy();
            b.isDirtyBox = !0;
            r(a, !0) && b.redraw()
        }, setTitle: function(a, b) {
            this.update({title: a}, b)
        }, setCategories: function(a, b) {
            this.update({categories: a}, b)
        }});
    var Yb = xb(ja);
    S.line = Yb;
    ja.prototype.drawDataLabels = function() {
        var a = this, b = a.options, c = b.cursor, d = b.dataLabels, e = a.points, f, g, h, k;
        if (d.enabled || a._hasPointLabels) a.dlProcessOptions && a.dlProcessOptions(d),
                    k = a.plotGroup("dataLabelsGroup", "data-labels", "hidden", d.zIndex || 6), !a.hasRendered && r(d.defer, !0) && (k.attr({opacity: 0}), L(a, "afterAnimate", function() {
                a.dataLabelsGroup.show()[b.animation ? "animate" : "attr"]({opacity: 1}, {duration: 200})
            })), g = d, s(e, function(b) {
                var e, n = b.dataLabel, q, p, s = b.connector, w = !0;
                f = b.options && b.options.dataLabels;
                e = r(f && f.enabled, g.enabled);
                if (n && !e) b.dataLabel = n.destroy();
                else if (e) {
                    d = A(g, f);
                    e = d.rotation;
                    q = b.getLabelConfig();
                    h = d.format ? ya(d.format, q) : d.formatter.call(q, d);
                    d.style.color =
                            r(d.color, d.style.color, a.color, "black");
                    if (n) v(h) ? (n.attr({text: h}), w = !1) : (b.dataLabel = n = n.destroy(), s && (b.connector = s.destroy()));
                    else if (v(h)) {
                        n = {fill: d.backgroundColor, stroke: d.borderColor, "stroke-width": d.borderWidth, r: d.borderRadius || 0, rotation: e, padding: d.padding, zIndex: 1};
                        for (p in n) n[p] === u && delete n[p];
                        n = b.dataLabel = a.chart.renderer[e ? "text" : "label"](h, 0, -999, null, null, null, d.useHTML).attr(n).css(t(d.style, c && {cursor: c})).add(k).shadow(d.shadow)
                    }
                    n && a.alignDataLabel(b, n, d, null, w)
                }
            })
    };
    ja.prototype.alignDataLabel =
            function(a, b, c, d, e) {
                var f = this.chart, g = f.inverted, h = r(a.plotX, -999), k = r(a.plotY, -999), l = b.getBBox();
                if (a = this.visible && (a.series.forceDL || f.isInsidePlot(h, y(k), g) || d && f.isInsidePlot(h, g ? d.x + 1 : d.y + d.height - 1, g))) d = t({x: g ? f.plotWidth - k : h, y: y(g ? f.plotHeight - h : k), width: 0, height: 0}, d), t(c, {width: l.width, height: l.height}), c.rotation ? (g = {align: c.align, x: d.x + c.x + d.width / 2, y: d.y + c.y + d.height / 2}, b[e ? "attr" : "animate"](g)) : (b.align(c, null, d), g = b.alignAttr, "justify" === r(c.overflow, "justify") ? this.justifyDataLabel(b,
                            c, g, l, d, e) : r(c.crop, !0) && (a = f.isInsidePlot(g.x, g.y) && f.isInsidePlot(g.x + l.width, g.y + l.height)));
                a || (b.attr({y: -999}), b.placed = !1)
            };
    ja.prototype.justifyDataLabel = function(a, b, c, d, e, f) {
        var g = this.chart, h = b.align, k = b.verticalAlign, l, m;
        l = c.x;
        0 > l && ("right" === h ? b.align = "left" : b.x = -l, m = !0);
        l = c.x + d.width;
        l > g.plotWidth && ("left" === h ? b.align = "right" : b.x = g.plotWidth - l, m = !0);
        l = c.y;
        0 > l && ("bottom" === k ? b.verticalAlign = "top" : b.y = -l, m = !0);
        l = c.y + d.height;
        l > g.plotHeight && ("top" === k ? b.verticalAlign = "bottom" : b.y = g.plotHeight -
                l, m = !0);
        m && (a.placed = !f, a.align(b, null, e))
    };
    S.pie && (S.pie.prototype.drawDataLabels = function() {
        var a = this, b = a.data, c, d = a.chart, e = a.options.dataLabels, f = r(e.connectorPadding, 10), g = r(e.connectorWidth, 1), h = d.plotWidth, d = d.plotHeight, k, l, m = r(e.softConnector, !0), n = e.distance, q = a.center, p = q[2] / 2, t = q[1], v = 0 < n, u, z, C, B, A = [[], []], D, K, I, F, E, H = [0, 0, 0, 0], N = function(a, b) {
            return b.y - a.y
        };
        if (a.visible && (e.enabled || a._hasPointLabels)) {
            ja.prototype.drawDataLabels.apply(a);
            s(b, function(a) {
                a.dataLabel && a.visible && A[a.half].push(a)
            });
            for (F = 0; !B && b[F]; ) B = b[F] && b[F].dataLabel && (b[F].dataLabel.getBBox().height || 21), F++;
            for (F = 2; F--; ) {
                var b = [], L = [], J = A[F], T = J.length, G;
                a.sortByAngle(J, F - 0.5);
                if (0 < n) {
                    for (E = t - p - n; E <= t + p + n; E += B) b.push(E);
                    z = b.length;
                    if (T > z) {
                        c = [].concat(J);
                        c.sort(N);
                        for (E = T; E--; ) c[E].rank = E;
                        for (E = T; E--; ) J[E].rank >= z && J.splice(E, 1);
                        T = J.length
                    }
                    for (E = 0; E < T; E++) {
                        c = J[E];
                        C = c.labelPos;
                        c = 9999;
                        var O, M;
                        for (M = 0; M < z; M++) O = Q(b[M] - C[1]), O < c && (c = O, G = M);
                        if (G < E && null !== b[E]) G = E;
                        else for (z < T - E + G && null !== b[E] && (G = z - T + E); null === b[G]; ) G++;
                        L.push({i: G,
                            y: b[G]});
                        b[G] = null
                    }
                    L.sort(N)
                }
                for (E = 0; E < T; E++) {
                    c = J[E];
                    C = c.labelPos;
                    u = c.dataLabel;
                    I = !1 === c.visible ? "hidden" : "visible";
                    c = C[1];
                    if (0 < n) {
                        if (z = L.pop(), G = z.i, K = z.y, c > K && null !== b[G + 1] || c < K && null !== b[G - 1]) K = c
                    } else K = c;
                    D = e.justify ? q[0] + (F ? -1 : 1) * (p + n) : a.getX(0 === G || G === b.length - 1 ? c : K, F);
                    u._attr = {visibility: I, align: C[6]};
                    u._pos = {x: D + e.x + ({left: f, right: -f}[C[6]] || 0), y: K + e.y - 10};
                    u.connX = D;
                    u.connY = K;
                    null === this.options.size && (z = u.width, D - z < f ? H[3] = w(y(z - D + f), H[3]) : D + z > h - f && (H[1] = w(y(D + z - h + f), H[1])), 0 > K - B / 2 ? H[0] = w(y(-K +
                            B / 2), H[0]) : K + B / 2 > d && (H[2] = w(y(K + B / 2 - d), H[2])))
                }
            }
            if (0 === qa(H) || this.verifyDataLabelOverflow(H)) this.placeDataLabels(), v && g && s(this.points, function(b) {
                    k = b.connector;
                    C = b.labelPos;
                    (u = b.dataLabel) && u._pos ? (I = u._attr.visibility, D = u.connX, K = u.connY, l = m ? ["M", D + ("left" === C[6] ? 5 : -5), K, "C", D, K, 2 * C[2] - C[4], 2 * C[3] - C[5], C[2], C[3], "L", C[4], C[5]] : ["M", D + ("left" === C[6] ? 5 : -5), K, "L", C[2], C[3], "L", C[4], C[5]], k ? (k.animate({d: l}), k.attr("visibility", I)) : b.connector = k = a.chart.renderer.path(l).attr({"stroke-width": g, stroke: e.connectorColor ||
                                b.color || "#606060", visibility: I}).add(a.dataLabelsGroup)) : k && (b.connector = k.destroy())
                })
        }
    }, S.pie.prototype.placeDataLabels = function() {
        s(this.points, function(a) {
            a = a.dataLabel;
            var b;
            a && ((b = a._pos) ? (a.attr(a._attr), a[a.moved ? "animate" : "attr"](b), a.moved = !0) : a && a.attr({y: -999}))
        })
    }, S.pie.prototype.alignDataLabel = pb, S.pie.prototype.verifyDataLabelOverflow = function(a) {
        var b = this.center, c = this.options, d = c.center, e = c = c.minSize || 80, f;
        null !== d[0] ? e = w(b[2] - w(a[1], a[3]), c) : (e = w(b[2] - a[1] - a[3], c), b[0] += (a[3] -
                a[1]) / 2);
        null !== d[1] ? e = w(O(e, b[2] - w(a[0], a[2])), c) : (e = w(O(e, b[2] - a[0] - a[2]), c), b[1] += (a[0] - a[2]) / 2);
        e < b[2] ? (b[2] = e, this.translate(b), s(this.points, function(a) {
            a.dataLabel && (a.dataLabel._pos = null)
        }), this.drawDataLabels && this.drawDataLabels()) : f = !0;
        return f
    });
    S.column && (S.column.prototype.alignDataLabel = function(a, b, c, d, e) {
        var f = this.chart, g = f.inverted, h = a.dlBox || a.shapeArgs, k = a.below || a.plotY > r(this.translatedThreshold, f.plotSizeY), l = r(c.inside, !!this.options.stacking);
        h && (d = A(h), g && (d = {x: f.plotWidth -
                    d.y - d.height, y: f.plotHeight - d.x - d.width, width: d.height, height: d.width}), l || (g ? (d.x += k ? 0 : d.width, d.width = 0) : (d.y += k ? d.height : 0, d.height = 0)));
        c.align = r(c.align, !g || l ? "center" : k ? "right" : "left");
        c.verticalAlign = r(c.verticalAlign, g || l ? "middle" : k ? "top" : "bottom");
        ja.prototype.alignDataLabel.call(this, a, b, c, d, e)
    });
    var hb = W.TrackerMixin = {drawTrackerPoint: function() {
            var a = this, b = a.chart, c = b.pointer, d = a.options.cursor, e = d && {cursor: d}, f = function(c) {
                var d = c.target, e;
                if (b.hoverSeries !== a) a.onMouseOver();
                for (; d &&
                        !e; ) e = d.point, d = d.parentNode;
                if (e !== u && e !== b.hoverPoint) e.onMouseOver(c)
            };
            s(a.points, function(a) {
                a.graphic && (a.graphic.element.point = a);
                a.dataLabel && (a.dataLabel.element.point = a)
            });
            a._hasTracking || (s(a.trackerGroups, function(b) {
                if (a[b] && (a[b].addClass("highcharts-tracker").on("mouseover", f).on("mouseout", function(a) {
                    c.onTrackerMouseOut(a)
                }).css(e), Na)) a[b].on("touchstart", f)
            }), a._hasTracking = !0)
        }, drawTrackerGraph: function() {
            var a = this, b = a.options, c = b.trackByArea, d = [].concat(c ? a.areaPath : a.graphPath),
                    e = d.length, f = a.chart, g = f.pointer, h = f.renderer, k = f.options.tooltip.snap, l = a.tracker, m = b.cursor, n = m && {cursor: m}, m = a.singlePoints, q, p = function() {
                if (f.hoverSeries !== a) a.onMouseOver()
            }, r = "rgba(192,192,192," + (da ? 1E-4 : 0.002) + ")";
            if (e && !c) for (q = e + 1; q--; ) "M" === d[q] && d.splice(q + 1, 0, d[q + 1] - k, d[q + 2], "L"), (q && "M" === d[q] || q === e) && d.splice(q, 0, "L", d[q - 2] + k, d[q - 1]);
            for (q = 0; q < m.length; q++) e = m[q], d.push("M", e.plotX - k, e.plotY, "L", e.plotX + k, e.plotY);
            l ? l.attr({d: d}) : (a.tracker = h.path(d).attr({"stroke-linejoin": "round",
                visibility: a.visible ? "visible" : "hidden", stroke: r, fill: c ? r : V, "stroke-width": b.lineWidth + (c ? 0 : 2 * k), zIndex: 2}).add(a.group), s([a.tracker, a.markerGroup], function(a) {
                a.addClass("highcharts-tracker").on("mouseover", p).on("mouseout", function(a) {
                    g.onTrackerMouseOut(a)
                }).css(n);
                if (Na) a.on("touchstart", p)
            }))
        }};
    S.column && (ColumnSeries.prototype.drawTracker = hb.drawTrackerPoint);
    S.pie && (S.pie.prototype.drawTracker = hb.drawTrackerPoint);
    S.scatter && (ScatterSeries.prototype.drawTracker = hb.drawTrackerPoint);
    t(gb.prototype,
            {setItemEvents: function(a, b, c, d, e) {
                    var f = this;
                    (c ? b : a.legendGroup).on("mouseover", function() {
                        a.setState("hover");
                        b.css(f.options.itemHoverStyle)
                    }).on("mouseout", function() {
                        b.css(a.visible ? d : e);
                        a.setState()
                    }).on("click", function(b) {
                        var c = function() {
                            a.setVisible()
                        };
                        b = {browserEvent: b};
                        a.firePointEvent ? a.firePointEvent("legendItemClick", b, c) : F(a, "legendItemClick", b, c)
                    })
                }, createCheckboxForItem: function(a) {
                    a.checkbox = la("input", {type: "checkbox", checked: a.selected, defaultChecked: a.selected}, this.options.itemCheckboxStyle,
                            this.chart.container);
                    L(a.checkbox, "click", function(b) {
                        F(a, "checkboxClick", {checked: b.target.checked}, function() {
                            a.select()
                        })
                    })
                }});
    G.legend.itemStyle.cursor = "pointer";
    t(La.prototype, {showResetZoom: function() {
            var a = this, b = G.lang, c = a.options.chart.resetZoomButton, d = c.theme, e = d.states, f = "chart" === c.relativeTo ? null : "plotBox";
            this.resetZoomButton = a.renderer.button(b.resetZoom, null, null, function() {
                a.zoomOut()
            }, d, e && e.hover).attr({align: c.position.align, title: b.resetZoomTitle}).add().align(c.position, !1,
                    f)
        }, zoomOut: function() {
            var a = this;
            F(a, "selection", {resetSelection: !0}, function() {
                a.zoom()
            })
        }, zoom: function(a) {
            var b, c = this.pointer, d = !1, e;
            !a || a.resetSelection ? s(this.axes, function(a) {
                b = a.zoom()
            }) : s(a.xAxis.concat(a.yAxis), function(a) {
                var e = a.axis, h = e.isXAxis;
                if (c[h ? "zoomX" : "zoomY"] || c[h ? "pinchX" : "pinchY"]) b = e.zoom(a.min, a.max), e.displayBtn && (d = !0)
            });
            e = this.resetZoomButton;
            d && !e ? this.showResetZoom() : !d && Y(e) && (this.resetZoomButton = e.destroy());
            b && this.redraw(r(this.options.chart.animation, a && a.animation,
                    100 > this.pointCount))
        }, pan: function(a, b) {
            var c = this, d = c.hoverPoints, e;
            d && s(d, function(a) {
                a.setState()
            });
            s("xy" === b ? [1, 0] : [1], function(b) {
                var d = a[b ? "chartX" : "chartY"], h = c[b ? "xAxis" : "yAxis"][0], k = c[b ? "mouseDownX" : "mouseDownY"], l = (h.pointRange || 0) / 2, m = h.getExtremes(), n = h.toValue(k - d, !0) + l, k = h.toValue(k + c[b ? "plotWidth" : "plotHeight"] - d, !0) - l;
                h.series.length && n > O(m.dataMin, m.min) && k < w(m.dataMax, m.max) && (h.setExtremes(n, k, !1, !1, {trigger: "pan"}), e = !0);
                c[b ? "mouseDownX" : "mouseDownY"] = d
            });
            e && c.redraw(!1);
            H(c.container,
                    {cursor: "move"})
        }});
    t(Ia.prototype, {select: function(a, b) {
            var c = this, d = c.series, e = d.chart;
            a = r(a, !c.selected);
            c.firePointEvent(a ? "select" : "unselect", {accumulate: b}, function() {
                c.selected = c.options.selected = a;
                d.options.data[Ea(c, d.data)] = c.options;
                c.setState(a && "select");
                b || s(e.getSelectedPoints(), function(a) {
                    a.selected && a !== c && (a.selected = a.options.selected = !1, d.options.data[Ea(a, d.data)] = a.options, a.setState(""), a.firePointEvent("unselect"))
                })
            })
        }, onMouseOver: function(a) {
            var b = this.series, c = b.chart,
                    d = c.tooltip, e = c.hoverPoint;
            if (e && e !== this) e.onMouseOut();
            this.firePointEvent("mouseOver");
            !d || d.shared && !b.noSharedTooltip || d.refresh(this, a);
            this.setState("hover");
            c.hoverPoint = this
        }, onMouseOut: function() {
            var a = this.series.chart, b = a.hoverPoints;
            b && -1 !== Ea(this, b) || (this.firePointEvent("mouseOut"), this.setState(), a.hoverPoint = null)
        }, importEvents: function() {
            if (!this.hasImportedEvents) {
                var a = A(this.series.options.point, this.options).events, b;
                this.events = a;
                for (b in a) L(this, b, a[b]);
                this.hasImportedEvents =
                        !0
            }
        }, setState: function(a, b) {
            var c = this.plotX, d = this.plotY, e = this.series, f = e.options.states, g = fb[e.type].marker && e.options.marker, h = g && !g.enabled, k = g && g.states[a], l = k && !1 === k.enabled, m = e.stateMarkerGraphic, n = this.marker || {}, q = e.chart, p = e.halo, r;
            a = a || "";
            r = this.pointAttr[a] || e.pointAttr[a];
            if (!(a === this.state && !b || this.selected && "select" !== a || f[a] && !1 === f[a].enabled || a && (l || h && !1 === k.enabled) || a && n.states && n.states[a] && !1 === n.states[a].enabled)) {
                if (this.graphic) g = g && this.graphic.symbolName && r.r, this.graphic.attr(A(r,
                            g ? {x: c - g, y: d - g, width: 2 * g, height: 2 * g} : {})), m && m.hide();
                else {
                    if (a && k) if (g = k.radius, n = n.symbol || e.symbol, m && m.currentSymbol !== n && (m = m.destroy()), m) m[b ? "animate" : "attr"]({x: c - g, y: d - g});
                        else n && (e.stateMarkerGraphic = m = q.renderer.symbol(n, c - g, d - g, 2 * g, 2 * g).attr(r).add(e.markerGroup), m.currentSymbol = n);
                    if (m) m[a && q.isInsidePlot(c, d, q.inverted) ? "show" : "hide"]()
                }
                (c = f[a] && f[a].halo) && c.size ? (p || (e.halo = p = q.renderer.path().add(e.seriesGroup)), p.attr(t({fill: Fa(this.color || e.color).setOpacity(c.opacity).get()},
                c.attributes))[b ? "animate" : "attr"]({d: this.haloPath(c.size)})) : p && p.attr({d: []});
                this.state = a
            }
        }, haloPath: function(a) {
            var b = this.series, c = b.chart, d = b.getPlotBox(), e = c.inverted;
            return c.renderer.symbols.circle(d.translateX + (e ? b.yAxis.len - this.plotY : this.plotX) - a, d.translateY + (e ? b.xAxis.len - this.plotX : this.plotY) - a, 2 * a, 2 * a)
        }});
    t(ja.prototype, {onMouseOver: function() {
            var a = this.chart, b = a.hoverSeries;
            if (b && b !== this) b.onMouseOut();
            this.options.events.mouseOver && F(this, "mouseOver");
            this.setState("hover");
            a.hoverSeries = this
        }, onMouseOut: function() {
            var a = this.options, b = this.chart, c = b.tooltip, d = b.hoverPoint;
            if (d) d.onMouseOut();
            this && a.events.mouseOut && F(this, "mouseOut");
            !c || a.stickyTracking || c.shared && !this.noSharedTooltip || c.hide();
            this.setState();
            b.hoverSeries = null
        }, setState: function(a) {
            var b = this.options, c = this.graph, d = this.graphNeg, e = b.states, b = b.lineWidth;
            a = a || "";
            this.state !== a && (this.state = a, e[a] && !1 === e[a].enabled || (a && (b = e[a].lineWidth || b + 1), c && !c.dashstyle && (a = {"stroke-width": b}, c.attr(a), d &&
                    d.attr(a))))
        }, setVisible: function(a, b) {
            var c = this, d = c.chart, e = c.legendItem, f, g = d.options.chart.ignoreHiddenSeries, h = c.visible;
            f = (c.visible = a = c.userOptions.visible = a === u ? !h : a) ? "show" : "hide";
            s(["group", "dataLabelsGroup", "markerGroup", "tracker"], function(a) {
                if (c[a]) c[a][f]()
            });
            if (d.hoverSeries === c) c.onMouseOut();
            e && d.legend.colorizeItem(c, a);
            c.isDirty = !0;
            c.options.stacking && s(d.series, function(a) {
                a.options.stacking && a.visible && (a.isDirty = !0)
            });
            s(c.linkedSeries, function(b) {
                b.setVisible(a, !1)
            });
            g && (d.isDirtyBox =
                    !0);
            !1 !== b && d.redraw();
            F(c, f)
        }, setTooltipPoints: function(a) {
            var b = [], c, d, e = this.xAxis, f = e && e.getExtremes(), g = e ? e.tooltipLen || e.len : this.chart.plotSizeX, h, k, l = [];
            if (!1 !== this.options.enableMouseTracking && !this.singularTooltips) {
                a && (this.tooltipPoints = null);
                s(this.segments || this.points, function(a) {
                    b = b.concat(a)
                });
                e && e.reversed && (b = b.reverse());
                this.orderTooltipPoints && this.orderTooltipPoints(b);
                a = b.length;
                for (k = 0; k < a; k++) if (e = b[k], c = e.x, c >= f.min && c <= f.max) for (h = b[k + 1], c = d === u?0:d + 1, d = b[k + 1]?O(w(0, R((e.clientX +
                                (h?h.wrappedClientX || h.clientX:g)) / 2)), g):g; 0 <= c && c <= d; ) l[c++] = e;
                this.tooltipPoints = l
            }
        }, show: function() {
            this.setVisible(!0)
        }, hide: function() {
            this.setVisible(!1)
        }, select: function(a) {
            this.selected = a = a === u ? !this.selected : a;
            this.checkbox && (this.checkbox.checked = a);
            F(this, a ? "select" : "unselect")
        }, drawTracker: hb.drawTrackerGraph});
    t(W, {Axis: ra, Chart: La, Color: Fa, Point: Ia, Tick: Ba, Renderer: $a, Series: ja, SVGElement: Z, SVGRenderer: Pa, arrayMin: za, arrayMax: qa, charts: U, dateFormat: Ra, format: ya, pathAnim: ob, getOptions: function() {
            return G
        },
        hasBidiBug: Nb, isTouchDevice: Ib, numberFormat: ua, seriesTypes: S, setOptions: function(a) {
            G = A(!0, G, a);
            Ab();
            return G
        }, addEvent: L, removeEvent: X, createElement: la, discardElement: Sa, css: H, each: s, extend: t, map: cb, merge: A, pick: r, splat: ga, extendClass: xb, pInt: D, wrap: xa, svg: da, canvas: ea, vml: !da && !ea, product: "@product.name@", version: "@product.version@"})
})();
(function(t) {
    function A() {
        return!!this.points.length
    }
    function D() {
        this.hasData() ? this.hideNoData() : this.showNoData()
    }
    var $ = t.seriesTypes, Y = t.Chart.prototype, oa = t.getOptions(), ca = t.extend;
    ca(oa.lang, {noData: "No data to display"});
    oa.noData = {position: {x: 0, y: 0, align: "center", verticalAlign: "middle"}, attr: {}, style: {fontWeight: "bold", fontSize: "12px", color: "#60606a"}};
    $.pie && ($.pie.prototype.hasData = A);
    $.gauge && ($.gauge.prototype.hasData = A);
    $.waterfall && ($.waterfall.prototype.hasData = A);
    t.Series.prototype.hasData =
            function() {
                return void 0 !== this.dataMax && void 0 !== this.dataMin
            };
    Y.showNoData = function(t) {
        var A = this.options;
        t = t || A.lang.noData;
        A = A.noData;
        this.noDataLabel || (this.noDataLabel = this.renderer.label(t, 0, 0, null, null, null, null, null, "no-data").attr(A.attr).css(A.style).add(), this.noDataLabel.align(ca(this.noDataLabel.getBBox(), A.position), !1, "plotBox"))
    };
    Y.hideNoData = function() {
        this.noDataLabel && (this.noDataLabel = this.noDataLabel.destroy())
    };
    Y.hasData = function() {
        for (var t = this.series, A = t.length; A--; ) if (t[A].hasData() &&
                    !t[A].options.isInternal) return!0;
        return!1
    };
    Y.callbacks.push(function(A) {
        t.addEvent(A, "load", D);
        t.addEvent(A, "redraw", D)
    })
})(Highcharts); 