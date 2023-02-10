/*! For license information please see main.05dbc1fa.chunk.js.LICENSE.txt */
(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [0],
  {
    40: function (e, t, n) {
      e.exports = n(71);
    },
    71: function (e, t, n) {
      "use strict";
      n.r(t);
      n(41), n(42);
      var r = n(0),
        a = n.n(r),
        o = n(35),
        i = n.n(o),
        s = n(19),
        c = n(36),
        l = n(18),
        u = n(11),
        h = n(13),
        d = n(14),
        f = n(7),
        p = n(17),
        m = n(16),
        v = n(20),
        g = n.n(v),
        y = n(1),
        w = n(39),
        E = n(37),
        k = function (e) {
          return a.a.createElement(
            "div",
            { className: "col s12 m8 offset-m2 l6 offset-l3" },
            a.a.createElement(
              "div",
              { className: "card-panel grey lighten-5 z-depth-1" },
              a.a.createElement(
                "div",
                { className: "row valign-wrapper" },
                "bot" === e.speaks &&
                  a.a.createElement(
                    "div",
                    { className: "col s2" },
                    a.a.createElement(
                      "a",
                      {
                        href: "/",
                        className:
                          "btn-floating btn-large waves-effect waves-light red",
                      },
                      e.speaks
                    )
                  ),
                a.a.createElement(
                  "div",
                  { className: "col s10" },
                  a.a.createElement("span", { className: "black-text" }, e.text)
                ),
                "user" === e.speaks &&
                  a.a.createElement(
                    "div",
                    { className: "col s2" },
                    a.a.createElement(
                      "a",
                      {
                        href: "/",
                        className:
                          "btn-floating btn-large waves-effect waves-light red",
                      },
                      e.speaks
                    )
                  )
              )
            )
          );
        },
        b = function (e) {
          return a.a.createElement(
            "div",
            { style: { height: 270, paddingRight: 30, float: "left" } },
            a.a.createElement(
              "div",
              { className: "card" },
              a.a.createElement(
                "div",
                { className: "card-image", style: { width: 240 } },
                a.a.createElement("img", {
                  alt: e.payload.header,
                  src: e.payload.image,
                }),
                a.a.createElement(
                  "span",
                  { className: "card-title" },
                  e.payload.header
                )
              ),
              a.a.createElement(
                "div",
                { className: "card-content" },
                e.payload.description,
                a.a.createElement(
                  "p",
                  null,
                  " ",
                  a.a.createElement("a", { href: "/" }, e.payload.price)
                )
              ),
              a.a.createElement(
                "div",
                { className: "card-action" },
                a.a.createElement(
                  "a",
                  {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: e.payload.link,
                  },
                  "GET NOW"
                )
              )
            )
          );
        },
        _ = function (e) {
          return e.reply.payload
            ? a.a.createElement(
                "a",
                {
                  style: { margin: 3 },
                  href: "/",
                  className:
                    "btn-floating btn-large waves-effect waves-light red",
                  onClick: function (t) {
                    return e.click(t, e.reply.payload, e.reply.text);
                  },
                },
                e.reply.text
              )
            : a.a.createElement(
                "a",
                {
                  style: { margin: 3 },
                  href: e.reply.link,
                  className:
                    "btn-floating btn-large waves-effect waves-light red",
                },
                e.reply.text
              );
        },
        x = (function (e) {
          Object(p.a)(n, e);
          var t = Object(m.a)(n);
          function n(e) {
            var r;
            return (
              Object(h.a)(this, n),
              ((r = t.call(this, e))._handleClick = r._handleClick.bind(
                Object(f.a)(r)
              )),
              r
            );
          }
          return (
            Object(d.a)(n, [
              {
                key: "_handleClick",
                value: function (e, t, n) {
                  this.props.replyClick(e, t, n);
                },
              },
              {
                key: "renderQuickReply",
                value: function (e, t) {
                  return a.a.createElement(_, {
                    key: t,
                    click: this._handleClick,
                    reply: e,
                  });
                },
              },
              {
                key: "renderQuickReplies",
                value: function (e) {
                  var t = this;
                  return e
                    ? e.map(function (e, n) {
                        return t.renderQuickReply(e, n);
                      })
                    : null;
                },
              },
              {
                key: "render",
                value: function () {
                  return a.a.createElement(
                    "div",
                    { className: "col s12 m8 offset-m2 l6 offset-l3" },
                    a.a.createElement(
                      "div",
                      { className: "card-panel grey lighten-5 z-depth-1" },
                      a.a.createElement(
                        "div",
                        { className: "row valign-wrapper" },
                        a.a.createElement(
                          "div",
                          { className: "col s2" },
                          a.a.createElement(
                            "a",
                            {
                              href: "/",
                              className:
                                "btn-floating btn-large waves-effect waves-light red",
                            },
                            this.props.speaks
                          )
                        ),
                        a.a.createElement(
                          "div",
                          { id: "quick-replies", className: "col s10" },
                          this.props.text &&
                            a.a.createElement("p", null, this.props.text),
                          this.renderQuickReplies(this.props.payload)
                        )
                      )
                    )
                  );
                },
              },
            ]),
            n
          );
        })(r.Component);
      function O() {
        O = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          o = a.iterator || "@@iterator",
          i = a.asyncIterator || "@@asyncIterator",
          s = a.toStringTag || "@@toStringTag";
        function c(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          c({}, "");
        } catch (L) {
          c = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function l(e, t, n, a) {
          var o = t && t.prototype instanceof d ? t : d,
            i = Object.create(o.prototype),
            s = new S(a || []);
          return r(i, "_invoke", { value: k(e, n, s) }), i;
        }
        function u(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (L) {
            return { type: "throw", arg: L };
          }
        }
        e.wrap = l;
        var h = {};
        function d() {}
        function f() {}
        function p() {}
        var m = {};
        c(m, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          g = v && v(v(N([])));
        g && g !== t && n.call(g, o) && (m = g);
        var y = (p.prototype = d.prototype = Object.create(m));
        function w(e) {
          ["next", "throw", "return"].forEach(function (t) {
            c(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function E(e, t) {
          var a;
          r(this, "_invoke", {
            value: function (r, o) {
              function i() {
                return new t(function (a, i) {
                  !(function r(a, o, i, s) {
                    var c = u(e[a], e, o);
                    if ("throw" !== c.type) {
                      var l = c.arg,
                        h = l.value;
                      return h && "object" == typeof h && n.call(h, "__await")
                        ? t.resolve(h.__await).then(
                            function (e) {
                              r("next", e, i, s);
                            },
                            function (e) {
                              r("throw", e, i, s);
                            }
                          )
                        : t.resolve(h).then(
                            function (e) {
                              (l.value = e), i(l);
                            },
                            function (e) {
                              return r("throw", e, i, s);
                            }
                          );
                    }
                    s(c.arg);
                  })(r, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function k(e, t, n) {
          var r = "suspendedStart";
          return function (a, o) {
            if ("executing" === r)
              throw new Error("Generator is already running");
            if ("completed" === r) {
              if ("throw" === a) throw o;
              return j();
            }
            for (n.method = a, n.arg = o; ; ) {
              var i = n.delegate;
              if (i) {
                var s = b(i, n);
                if (s) {
                  if (s === h) continue;
                  return s;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = "executing";
              var c = u(e, t, n);
              if ("normal" === c.type) {
                if (
                  ((r = n.done ? "completed" : "suspendedYield"), c.arg === h)
                )
                  continue;
                return { value: c.arg, done: n.done };
              }
              "throw" === c.type &&
                ((r = "completed"), (n.method = "throw"), (n.arg = c.arg));
            }
          };
        }
        function b(e, t) {
          var n = t.method,
            r = e.iterator[n];
          if (void 0 === r)
            return (
              (t.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                b(e, t),
                "throw" === t.method)) ||
                ("return" !== n &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              h
            );
          var a = u(r, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), h
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                h)
              : o
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              h);
        }
        function _(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function x(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function S(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(_, this),
            this.reset(!0);
        }
        function N(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                a = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: j };
        }
        function j() {
          return { value: void 0, done: !0 };
        }
        return (
          (f.prototype = p),
          r(y, "constructor", { value: p, configurable: !0 }),
          r(p, "constructor", { value: f, configurable: !0 }),
          (f.displayName = c(p, s, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === f || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, p)
                : ((e.__proto__ = p), c(e, s, "GeneratorFunction")),
              (e.prototype = Object.create(y)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          w(E.prototype),
          c(E.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = E),
          (e.async = function (t, n, r, a, o) {
            void 0 === o && (o = Promise);
            var i = new E(l(t, n, r, a), o);
            return e.isGeneratorFunction(n)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          w(y),
          c(y, s, "Generator"),
          c(y, o, function () {
            return this;
          }),
          c(y, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = N),
          (S.prototype = {
            constructor: S,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(x),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function r(n, r) {
                return (
                  (i.type = "throw"),
                  (i.arg = e),
                  (t.next = n),
                  r && ((t.method = "next"), (t.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ("root" === o.tryLoc) return r("end");
                if (o.tryLoc <= this.prev) {
                  var s = n.call(o, "catchLoc"),
                    c = n.call(o, "finallyLoc");
                  if (s && c) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  } else if (s) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  } else {
                    if (!c)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var a = this.tryEntries[r];
                if (
                  a.tryLoc <= this.prev &&
                  n.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), h)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                h
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), x(n), h;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    x(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: N(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                h
              );
            },
          }),
          e
        );
      }
      var S = new w.a(),
        N = (function (e) {
          Object(p.a)(n, e);
          var t = Object(m.a)(n);
          function n(e) {
            var r;
            return (
              Object(h.a)(this, n),
              ((r = t.call(this, e))._handleInputKeyPress =
                r._handleInputKeyPress.bind(Object(f.a)(r))),
              (r._handleQuickReplyPayload = r._handleQuickReplyPayload.bind(
                Object(f.a)(r)
              )),
              (r.hide = r.hide.bind(Object(f.a)(r))),
              (r.show = r.show.bind(Object(f.a)(r))),
              (r.state = {
                messages: [],
                showBot: !0,
                shopWelcomeSent: !1,
                clientToken: !1,
                regenerateToken: 0,
              }),
              void 0 === S.get("userID") &&
                S.set("userID", Object(E.v4)(), { path: "/" }),
              r
            );
          }
          return (
            Object(d.a)(n, [
              {
                key: "df_text_query",
                value: (function () {
                  var e = Object(u.a)(
                    O().mark(function e(t) {
                      var n, r;
                      return O().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n = {
                                    speaks: "user",
                                    msg: { text: { text: t } },
                                  }),
                                  this.setState({
                                    messages: [].concat(
                                      Object(l.a)(this.state.messages),
                                      [n]
                                    ),
                                  }),
                                  (r = {
                                    queryInput: {
                                      text: { text: t, languageCode: "en-US" },
                                    },
                                  }),
                                  (e.next = 5),
                                  this.df_client_call(r)
                                );
                              case 5:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "df_event_query",
                value: (function () {
                  var e = Object(u.a)(
                    O().mark(function e(t) {
                      var n;
                      return O().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n = {
                                    queryInput: {
                                      event: { name: t, languageCode: "en-US" },
                                    },
                                  }),
                                  (e.next = 3),
                                  this.df_client_call(n)
                                );
                              case 3:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "df_client_call",
                value: (function () {
                  var e = Object(u.a)(
                    O().mark(function e(t) {
                      var n, r, a, o, i, s, u, h, d;
                      return O().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((e.prev = 0), !1 !== this.state.clientToken)
                                ) {
                                  e.next = 6;
                                  break;
                                }
                                return (
                                  (e.next = 4), g.a.get("/api/get_client_token")
                                );
                              case 4:
                                (n = e.sent),
                                  this.setState({ clientToken: n.data.token });
                              case 6:
                                return (
                                  (r = {
                                    headers: {
                                      Authorization:
                                        "Bearer " + this.state.clientToken,
                                      "Content-Type":
                                        "application/json; charset=utf-8",
                                    },
                                  }),
                                  (e.next = 9),
                                  g.a.post(
                                    "https://dialogflow.googleapis.com/v2/projects/" +
                                      Object({
                                        NODE_ENV: "production",
                                        PUBLIC_URL: ".",
                                        WDS_SOCKET_HOST: void 0,
                                        WDS_SOCKET_PATH: void 0,
                                        WDS_SOCKET_PORT: void 0,
                                      }).REACT_APP_GOOGLE_PROJECT_ID +
                                      "/agent/sessions/" +
                                      Object({
                                        NODE_ENV: "production",
                                        PUBLIC_URL: ".",
                                        WDS_SOCKET_HOST: void 0,
                                        WDS_SOCKET_PATH: void 0,
                                        WDS_SOCKET_PORT: void 0,
                                      }).REACT_APP_DF_SESSION_ID +
                                      S.get("userID") +
                                      ":detectIntent",
                                    t,
                                    r
                                  )
                                );
                              case 9:
                                if (
                                  ((a = e.sent),
                                  (o = {}),
                                  a.data.queryResult.fulfillmentMessages)
                                ) {
                                  i = Object(c.a)(
                                    a.data.queryResult.fulfillmentMessages
                                  );
                                  try {
                                    for (i.s(); !(s = i.n()).done; )
                                      (u = s.value),
                                        (o = { speaks: "bot", msg: u }),
                                        this.setState({
                                          messages: [].concat(
                                            Object(l.a)(this.state.messages),
                                            [o]
                                          ),
                                        });
                                  } catch (f) {
                                    i.e(f);
                                  } finally {
                                    i.f();
                                  }
                                }
                                e.next = 18;
                                break;
                              case 14:
                                (e.prev = 14),
                                  (e.t0 = e.catch(0)),
                                  console.log(e.t0),
                                  401 === e.t0.response.status &&
                                  this.state.regenerateToken < 1
                                    ? (this.setState({
                                        clientToken: !1,
                                        regenerateToken: 1,
                                      }),
                                      this.df_client_call(t))
                                    : ((h = {
                                        speaks: "bot",
                                        msg: {
                                          text: {
                                            text: "I'm having troubles. I need to terminate. will be back later",
                                          },
                                        },
                                      }),
                                      this.setState({
                                        messages: [].concat(
                                          Object(l.a)(this.state.messages),
                                          [h]
                                        ),
                                      }),
                                      (d = this),
                                      setTimeout(function () {
                                        d.setState({ showBot: !1 });
                                      }, 2e3));
                              case 18:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[0, 14]]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "resolveAfterXSeconds",
                value: function (e) {
                  return new Promise(function (t) {
                    setTimeout(function () {
                      t(e);
                    }, 1e3 * e);
                  });
                },
              },
              {
                key: "componentDidMount",
                value: (function () {
                  var e = Object(u.a)(
                    O().mark(function e() {
                      var t = this;
                      return O().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  (this.df_event_query("Welcome"),
                                  "/shop" !== window.location.pathname ||
                                    this.state.shopWelcomeSent)
                                ) {
                                  e.next = 6;
                                  break;
                                }
                                return (
                                  (e.next = 4), this.resolveAfterXSeconds(1)
                                );
                              case 4:
                                this.df_event_query("WELCOME_SHOP"),
                                  this.setState({
                                    shopWelcomeSent: !0,
                                    showBot: !0,
                                  });
                              case 6:
                                this.props.history.listen(function () {
                                  "/shop" !==
                                    t.props.history.location.pathname ||
                                    t.state.shopWelcomeSent ||
                                    (t.df_event_query("WELCOME_SHOP"),
                                    t.setState({
                                      shopWelcomeSent: !0,
                                      showBot: !0,
                                    }));
                                });
                              case 7:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  this.messagesEnd.scrollIntoView({ behavior: "smooth" }),
                    this.talkInput && this.talkInput.focus();
                },
              },
              {
                key: "show",
                value: function (e) {
                  e.preventDefault(),
                    e.stopPropagation(),
                    this.setState({ showBot: !0 });
                },
              },
              {
                key: "hide",
                value: function (e) {
                  e.preventDefault(),
                    e.stopPropagation(),
                    this.setState({ showBot: !0 });
                },
              },
              {
                key: "_handleQuickReplyPayload",
                value: function (e, t, n) {
                  switch ((e.preventDefault(), e.stopPropagation(), t)) {
                    case "recommended_yes":
                      this.df_event_query("SHOW_RECOMMENDATIONS");
                      break;
                    case "training_masterclass":
                      this.df_event_query("MASTERCLASS");
                      break;
                    default:
                      this.df_text_query(n);
                  }
                },
              },
              {
                key: "renderCards",
                value: function (e) {
                  return e.map(function (e, t) {
                    return a.a.createElement(b, { key: t, payload: e });
                  });
                },
              },
              {
                key: "renderOneMessage",
                value: function (e, t) {
                  return e.msg && e.msg.text && e.msg.text.text
                    ? a.a.createElement(k, {
                        key: t,
                        speaks: e.speaks,
                        text: e.msg.text.text,
                      })
                    : e.msg && e.msg.payload && e.msg.payload.cards
                    ? a.a.createElement(
                        "div",
                        { key: t },
                        a.a.createElement(
                          "div",
                          { className: "card-panel grey lighten-5 z-depth-1" },
                          a.a.createElement(
                            "div",
                            { style: { overflow: "hidden" } },
                            a.a.createElement(
                              "div",
                              { className: "col s2" },
                              a.a.createElement(
                                "a",
                                {
                                  href: "/",
                                  className:
                                    "btn-floating btn-large waves-effect waves-light red",
                                },
                                e.speaks
                              )
                            ),
                            a.a.createElement(
                              "div",
                              {
                                style: {
                                  overflow: "auto",
                                  overflowY: "scroll",
                                },
                              },
                              a.a.createElement(
                                "div",
                                {
                                  style: {
                                    height: 300,
                                    width: 270 * e.msg.payload.cards.length,
                                  },
                                },
                                this.renderCards(e.msg.payload.cards)
                              )
                            )
                          )
                        )
                      )
                    : e.msg && e.msg.payload && e.msg.payload.quick_replies
                    ? a.a.createElement(x, {
                        text: e.msg.payload.text ? e.msg.payload.text : null,
                        key: t,
                        replyClick: this._handleQuickReplyPayload,
                        speaks: e.speaks,
                        payload: e.msg.payload.quick_replies,
                      })
                    : void 0;
                },
              },
              {
                key: "renderMessages",
                value: function (e) {
                  var t = this;
                  return e
                    ? e.map(function (e, n) {
                        return t.renderOneMessage(e, n);
                      })
                    : null;
                },
              },
              {
                key: "_handleInputKeyPress",
                value: function (e) {
                  "Enter" === e.key &&
                    (this.df_text_query(e.target.value), (e.target.value = ""));
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this;
                  return this.state.showBot
                    ? a.a.createElement(
                        "div",
                        {
                          style: {
                            minHeight: 500,
                            maxHeight: 470,
                            width: 400,
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            border: "1px solid lightgray",
                          },
                        },
                        a.a.createElement(
                          "nav",
                          null,
                          a.a.createElement(
                            "div",
                            { className: "nav-wrapper" },
                            a.a.createElement(
                              "a",
                              { href: "/", className: "brand-logo" },
                              "ChatBot"
                            ),
                            a.a.createElement(
                              "ul",
                              {
                                id: "nav-mobile",
                                className: "right hide-on-med-and-down",
                              },
                              a.a.createElement(
                                "li",
                                null,
                                a.a.createElement(
                                  "a",
                                  { href: "/", onClick: this.hide },
                                  "Close"
                                )
                              )
                            )
                          )
                        ),
                        a.a.createElement(
                          "div",
                          {
                            id: "chatbot",
                            style: {
                              minHeight: 388,
                              maxHeight: 388,
                              width: "100%",
                              overflow: "auto",
                            },
                          },
                          this.renderMessages(this.state.messages),
                          a.a.createElement("div", {
                            ref: function (t) {
                              e.messagesEnd = t;
                            },
                            style: { float: "left", clear: "both" },
                          })
                        ),
                        a.a.createElement(
                          "div",
                          { className: " col s12" },
                          a.a.createElement("input", {
                            style: {
                              margin: 0,
                              paddingLeft: "1%",
                              paddingRight: "1%",
                              width: "98%",
                            },
                            ref: function (t) {
                              e.talkInput = t;
                            },
                            placeholder: "type a message:",
                            onKeyPress: this._handleInputKeyPress,
                            id: "user_says",
                            type: "text",
                          })
                        )
                      )
                    : a.a.createElement(
                        "div",
                        {
                          style: {
                            minHeight: 40,
                            maxHeight: 500,
                            width: 400,
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            border: "1px solid lightgray",
                          },
                        },
                        a.a.createElement(
                          "nav",
                          null,
                          a.a.createElement(
                            "div",
                            { className: "nav-wrapper" },
                            a.a.createElement(
                              "a",
                              { href: "/", className: "brand-logo" },
                              "ChatBot"
                            ),
                            a.a.createElement(
                              "ul",
                              {
                                id: "nav-mobile",
                                className: "right hide-on-med-and-down",
                              },
                              a.a.createElement(
                                "li",
                                null,
                                a.a.createElement(
                                  "a",
                                  { href: "/", onClick: this.show },
                                  "Show"
                                )
                              )
                            )
                          )
                        ),
                        a.a.createElement("div", {
                          ref: function (t) {
                            e.messagesEnd = t;
                          },
                          style: { float: "left", clear: "both" },
                        })
                      );
                },
              },
            ]),
            n
          );
        })(r.Component),
        j = Object(y.d)(N),
        L = function () {
          return a.a.createElement(
            "div",
            null,
            a.a.createElement(
              s.a,
              null,
              a.a.createElement(
                "div",
                { className: "container" },
                a.a.createElement(j, null)
              )
            )
          );
        },
        C = Boolean(
          "localhost" === window.location.hostname ||
            "[::1]" === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        );
      function T(e) {
        navigator.serviceWorker
          .register(e)
          .then(function (e) {
            e.onupdatefound = function () {
              var t = e.installing;
              t.onstatechange = function () {
                "installed" === t.state &&
                  (navigator.serviceWorker.controller
                    ? console.log("New content is available; please refresh.")
                    : console.log("Content is cached for offline use."));
              };
            };
          })
          .catch(function (e) {
            console.error("Error during service worker registration:", e);
          });
      }
      i.a.render(a.a.createElement(L, null), document.getElementById("root")),
        (function () {
          if ("serviceWorker" in navigator) {
            if (new URL(".", window.location).origin !== window.location.origin)
              return;
            window.addEventListener("load", function () {
              var e = "".concat(".", "/service-worker.js");
              C
                ? (!(function (e) {
                    fetch(e)
                      .then(function (t) {
                        404 === t.status ||
                        -1 ===
                          t.headers.get("content-type").indexOf("javascript")
                          ? navigator.serviceWorker.ready.then(function (e) {
                              e.unregister().then(function () {
                                window.location.reload();
                              });
                            })
                          : T(e);
                      })
                      .catch(function () {
                        console.log(
                          "No internet connection found. App is running in offline mode."
                        );
                      });
                  })(e),
                  navigator.serviceWorker.ready.then(function () {
                    console.log(
                      "This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ"
                    );
                  }))
                : T(e);
            });
          }
        })();
    },
  },
  [[40, 1, 2]],
]);
//# sourceMappingURL=main.05dbc1fa.chunk.js.map
