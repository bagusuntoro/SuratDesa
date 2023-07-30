(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_admin_SKCK_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/SKCK.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/SKCK.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var html2pdf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! html2pdf.js */ "./node_modules/html2pdf.js/dist/html2pdf.js");
/* harmony import */ var html2pdf_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(html2pdf_js__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      pengajuanSurat: [],
      fileName: "",
      itemID: null,
      user_id: "",
      jumlahPengajuan: null
    };
  },
  name: "app",
  methods: {
    fetchPengajuan: function fetchPengajuan() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios.get("https://surat-desa.surabayawebtech.com/api/auth/pengajuan", {
                headers: {
                  Authorization: "Bearer " + localStorage.getItem("token")
                }
              });
            case 3:
              response = _context.sent;
              _this.jumlahPengajuan = response.data.data.length; // jumlah pengajuan
              _context.next = 10;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.error(_context.t0);
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 7]]);
      }))();
    },
    fetchData: function fetchData() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var response, created_at, options;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _this2.itemID = _this2.$route.params.id;
              _context2.next = 3;
              return axios.get("https://surat-desa.surabayawebtech.com/api/auth/pengajuan/".concat(_this2.itemID), {
                headers: {
                  Authorization: "Bearer " + localStorage.getItem("token")
                }
              });
            case 3:
              response = _context2.sent;
              console.log("id :", _this2.itemID);
              _this2.pengajuanSurat = response.data.data;

              // Format the created_at field to Asia/Jakarta timezone with "dd-mm-yyyy" format
              created_at = new Date(_this2.pengajuanSurat.created_at);
              options = {
                timeZone: "Asia/Jakarta",
                day: "2-digit",
                month: "long",
                year: "numeric"
              };
              _this2.pengajuanSurat.created_at = created_at.toLocaleString("en-US", options).replace(",", "");
              console.log("data :", _this2.pengajuanSurat.created_at);
            case 10:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    // tesst
    exportToPDF: function exportToPDF() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var elementToConvert, pdfData, formData, response;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              elementToConvert = document.getElementById("element-to-convert");
              _context3.next = 3;
              return html2pdf_js__WEBPACK_IMPORTED_MODULE_0___default()().from(elementToConvert).output("blob");
            case 3:
              pdfData = _context3.sent;
              formData = new FormData();
              formData.append("surat", pdfData, "surat_pengantar.pdf");
              formData.append("user_id", _this3.pengajuanSurat.user_id); // Memperbaiki 'user_id' yang sebelumnya adalah 'this.user_id'
              formData.append("pengajuan_id", _this3.pengajuanSurat.id);
              _context3.prev = 8;
              _context3.next = 11;
              return axios.post("https://surat-desa.surabayawebtech.com/api/auth/surat", formData, {
                headers: {
                  Authorization: "Bearer " + localStorage.getItem("token")
                }
              });
            case 11:
              response = _context3.sent;
              console.log("test", response.data.message);
              if (response.data.message) {
                _context3.next = 15;
                break;
              }
              throw new Error("Gagal mengirimkan PDF ke API.");
            case 15:
              console.log("PDF berhasil dikirim ke API.");
              _context3.next = 18;
              return _this3.updateStatus();
            case 18:
              _context3.next = 23;
              break;
            case 20:
              _context3.prev = 20;
              _context3.t0 = _context3["catch"](8);
              console.error(_context3.t0);
              // Tangani kesalahan jika terjadi masalah saat mengirimkan PDF ke API
            case 23:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[8, 20]]);
      }))();
    },
    // update status
    updateStatus: function updateStatus() {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var statusData, response;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              statusData = {
                status_surat: "selesai"
              };
              _context4.next = 4;
              return axios.put("https://surat-desa.surabayawebtech.com/api/auth/pengajuan/".concat(_this4.pengajuanSurat.id), statusData, {
                headers: {
                  Authorization: "Bearer " + localStorage.getItem("token")
                }
              });
            case 4:
              response = _context4.sent;
              if (response.data.message) {
                _context4.next = 7;
                break;
              }
              throw new Error("Gagal memperbarui status surat.");
            case 7:
              _this4.showAlert();
              _context4.next = 14;
              break;
            case 10:
              _context4.prev = 10;
              _context4.t0 = _context4["catch"](0);
              console.error(_context4.t0);
              throw _context4.t0;
            case 14:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 10]]);
      }))();
    },
    showAlert: function showAlert() {
      var _this5 = this;
      // Use sweetalert2
      this.$swal("Surat berhasil diexport!!").then(function () {
        _this5.$router.push("/admin-surat");
      });
    }
  },
  created: function created() {
    var _this6 = this;
    axios.get("https://surat-desa.surabayawebtech.com/api/auth/me", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    }).then(function (response) {
      var role = response.data.role; // Get the user's role from the response
      _this6.user_id = response.data.id;
      var token = localStorage.getItem("token");
      var expires_in = localStorage.getItem("expires_in");
      if (!token || !expires_in || new Date() > new Date(expires_in)) {
        // If token is missing or expired, redirect to the home page
        localStorage.removeItem("token");
        localStorage.removeItem("expires_in");
        _this6.$router.push("/");
      } else if (role !== "admin") {
        // If the admin doesn't have admin privileges, redirect to the unauthorized page
        _this6.$router.push("/unauthorized");
        // console.log(response.data.role)
      } else {
        _this6.fetchData();
        _this6.fetchPengajuan();
      }
    })["catch"](function (error) {
      console.error(error);
      _this6.$router.push("/");
    });

    // axios
    //   .get(`https://surat-desa.surabayawebtech.com/api/auth/me/`, {
    //     headers: {
    //       Authorization: "Bearer " + localStorage.getItem("token"),
    //     },
    //   }) // Gunakan properti 'id' sebagai bagian dari URL endpoint
    //   .then((response) => {
    //     this.user_id = response.data.id;
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    // console.log(Vue.version)
  },
  mounted: function mounted() {
    // Panggil method fetchData setiap kali nilai itemID berubah
    this.$watch("itemID", this.fetchData);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/SKCK.vue?vue&type=template&id=9795f7ea&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/SKCK.vue?vue&type=template&id=9795f7ea&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    attrs: {
      id: "wrapper"
    }
  }, [_c("sidebar-admin"), _vm._v(" "), _c("div", {
    staticClass: "d-flex flex-column",
    attrs: {
      id: "content-wrapper"
    }
  }, [_c("div", {
    attrs: {
      id: "content"
    }
  }, [_c("navbar"), _vm._v(" "), _c("div", {
    ref: "document",
    attrs: {
      id: "app"
    }
  }, [_c("button", {
    on: {
      click: _vm.exportToPDF
    }
  }, [_vm._v("Export to PDF")]), _vm._v(" "), _c("div", {
    attrs: {
      id: "element-to-convert"
    }
  }, [_c("div", {
    staticClass: "text-black"
  }, [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-1"
  }), _vm._v(" "), _c("div", {
    staticClass: "col-sm-10 surat"
  }, [_c("p", {
    staticClass: "text-center"
  }, [_vm._v("KETERANGAN")]), _vm._v(" "), _c("p", {
    staticClass: "text-center"
  }, [_vm._v("\n                  Surat " + _vm._s(_vm.pengajuanSurat.jenis_surat) + "\n                ")]), _vm._v(" "), _c("p", {
    staticClass: "text-center"
  }, [_vm._v("PENGANTAR")]), _vm._v(" "), _c("p", {
    staticClass: "text-center"
  }, [_vm._v("\n                  Nomor : 0" + _vm._s(_vm.jumlahPengajuan) + "/0" + _vm._s(_vm.itemID) + "/ VII/2023\n                ")]), _vm._v(" "), _c("p", [_vm._v("\n                  Yang bertandatangan di bawah ini kami Kepala Desa\n                  Tanjungrejo Kecamatan Nguter Kabupaten Sukoharjo,\n                  menerangkan bahwa :\n                ")]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-4"
  }, [_vm._v("Nama")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-4"
  }, [_vm._v(": " + _vm._s(_vm.pengajuanSurat.nama))]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  })]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-4"
  }, [_vm._v("Tempat tanggal lahir")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-4"
  }, [_vm._v(": " + _vm._s(_vm.pengajuanSurat.ttl))]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  })]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-4"
  }, [_vm._v("Kewarganegaraan")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-4"
  }, [_vm._v("\n                    : " + _vm._s(_vm.pengajuanSurat.warganegara) + "\n                  ")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  })]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-4"
  }, [_vm._v("Agama")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-4"
  }, [_vm._v(": " + _vm._s(_vm.pengajuanSurat.agama))]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  })]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-4"
  }, [_vm._v("Pekerjaan")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-4"
  }, [_vm._v(": " + _vm._s(_vm.pengajuanSurat.pekerjaan))]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  })]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-4"
  }, [_vm._v("Alamat KTP")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-4"
  }, [_vm._v(": " + _vm._s(_vm.pengajuanSurat.alamat))]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  })]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-4"
  }, [_vm._v("Surat Bukti Diri")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-4"
  }, [_vm._v("\n                    : " + _vm._s(_vm.pengajuanSurat.bukti_diri) + "\n                  ")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  })]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-4"
  }, [_vm._v("Keperluan")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-4"
  }, [_vm._v(": " + _vm._s(_vm.pengajuanSurat.keperluan))]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  })]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-4"
  }, [_vm._v("Tujuan")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-4"
  }, [_vm._v(": " + _vm._s(_vm.pengajuanSurat.tujuan))]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  })]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-4"
  }, [_vm._v("Berlaku Mulai")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-4"
  }, [_vm._v("\n                    : " + _vm._s(_vm.pengajuanSurat.berlaku_mulai) + "\n                  ")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  })]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-4"
  }, [_vm._v("Keterangan Lain-lain")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-4"
  }, [_vm._v("\n                    : " + _vm._s(_vm.pengajuanSurat.keterangan) + "\n                  ")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  })]), _vm._v(" "), _c("p", [_vm._v("\n                  Demikian untuk menjadikan maklum bagi yang berkepentingan.\n                ")]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-8"
  }), _vm._v(" "), _c("div", {
    staticClass: "col-sm-4"
  }, [_vm._v("\n                    Tanjungrejo, " + _vm._s(_vm.pengajuanSurat.created_at) + "\n                  ")])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-6"
  }, [_c("p", {
    staticClass: "text-center"
  }, [_vm._v("Pemohon")]), _vm._v(" "), _c("div", {
    staticClass: "row mt-5"
  }, [_c("p", {
    staticClass: "fw-bold text-center"
  }, [_vm._v("\n                        (" + _vm._s(_vm.pengajuanSurat.nama) + ")\n                      ")])])]), _vm._v(" "), _vm._m(2)])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-1"
  })])])])])], 1), _vm._v(" "), _c("footer")])], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row mt-5"
  }, [_c("div", {
    staticClass: "col-sm-1"
  }), _vm._v(" "), _c("div", {
    staticClass: "col-sm-2 surat"
  }, [_c("img", {
    attrs: {
      src: "/images/logo.png",
      alt: "logo",
      width: "100"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-8 surat"
  }, [_c("h5", {
    staticClass: "text-center fw-bold"
  }, [_vm._v("\n                  PEMERINTAH KABUPATEN SUKOHARJO\n                ")]), _vm._v(" "), _c("h5", {
    staticClass: "text-center fw-bold"
  }, [_vm._v("KECAMATAN NGUTER")]), _vm._v(" "), _c("h5", {
    staticClass: "text-center fw-bold"
  }, [_vm._v("DESA TANJUNGREJO")]), _vm._v(" "), _c("p", [_vm._v("\n                  Alamat : Jl. Alternatif Pengkol-Wonogiri KM 03 Tanjungrejo,\n                  Sukoharjo\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-1"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-1"
  }), _vm._v(" "), _c("div", {
    staticClass: "col-sm-10 surat"
  }, [_c("hr"), _vm._v(" "), _c("p", [_vm._v("No Kode Desa/Kelurahan")]), _vm._v(" "), _c("p", [_vm._v("33 11 052001")])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-1"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-sm-6"
  }, [_c("p", {
    staticClass: "text-center"
  }, [_vm._v("Sekretaris Desa")]), _vm._v(" "), _c("div", {
    staticClass: "row mt-5"
  }, [_c("p", {
    staticClass: "fw-bold text-center"
  }, [_vm._v("\n                        (FERI PRIHANANTO, S.E)\n                      ")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/html2canvas/dist/html2canvas.js":
/*!******************************************************!*\
  !*** ./node_modules/html2canvas/dist/html2canvas.js ***!
  \******************************************************/
/***/ (function(module) {

/*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
(function (global, factory) {
     true ? module.exports = factory() :
    0;
}(this, (function () { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || from);
    }

    var Bounds = /** @class */ (function () {
        function Bounds(left, top, width, height) {
            this.left = left;
            this.top = top;
            this.width = width;
            this.height = height;
        }
        Bounds.prototype.add = function (x, y, w, h) {
            return new Bounds(this.left + x, this.top + y, this.width + w, this.height + h);
        };
        Bounds.fromClientRect = function (context, clientRect) {
            return new Bounds(clientRect.left + context.windowBounds.left, clientRect.top + context.windowBounds.top, clientRect.width, clientRect.height);
        };
        Bounds.fromDOMRectList = function (context, domRectList) {
            var domRect = Array.from(domRectList).find(function (rect) { return rect.width !== 0; });
            return domRect
                ? new Bounds(domRect.left + context.windowBounds.left, domRect.top + context.windowBounds.top, domRect.width, domRect.height)
                : Bounds.EMPTY;
        };
        Bounds.EMPTY = new Bounds(0, 0, 0, 0);
        return Bounds;
    }());
    var parseBounds = function (context, node) {
        return Bounds.fromClientRect(context, node.getBoundingClientRect());
    };
    var parseDocumentSize = function (document) {
        var body = document.body;
        var documentElement = document.documentElement;
        if (!body || !documentElement) {
            throw new Error("Unable to get document size");
        }
        var width = Math.max(Math.max(body.scrollWidth, documentElement.scrollWidth), Math.max(body.offsetWidth, documentElement.offsetWidth), Math.max(body.clientWidth, documentElement.clientWidth));
        var height = Math.max(Math.max(body.scrollHeight, documentElement.scrollHeight), Math.max(body.offsetHeight, documentElement.offsetHeight), Math.max(body.clientHeight, documentElement.clientHeight));
        return new Bounds(0, 0, width, height);
    };

    /*
     * css-line-break 2.1.0 <https://github.com/niklasvh/css-line-break#readme>
     * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
     * Released under MIT License
     */
    var toCodePoints$1 = function (str) {
        var codePoints = [];
        var i = 0;
        var length = str.length;
        while (i < length) {
            var value = str.charCodeAt(i++);
            if (value >= 0xd800 && value <= 0xdbff && i < length) {
                var extra = str.charCodeAt(i++);
                if ((extra & 0xfc00) === 0xdc00) {
                    codePoints.push(((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000);
                }
                else {
                    codePoints.push(value);
                    i--;
                }
            }
            else {
                codePoints.push(value);
            }
        }
        return codePoints;
    };
    var fromCodePoint$1 = function () {
        var codePoints = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            codePoints[_i] = arguments[_i];
        }
        if (String.fromCodePoint) {
            return String.fromCodePoint.apply(String, codePoints);
        }
        var length = codePoints.length;
        if (!length) {
            return '';
        }
        var codeUnits = [];
        var index = -1;
        var result = '';
        while (++index < length) {
            var codePoint = codePoints[index];
            if (codePoint <= 0xffff) {
                codeUnits.push(codePoint);
            }
            else {
                codePoint -= 0x10000;
                codeUnits.push((codePoint >> 10) + 0xd800, (codePoint % 0x400) + 0xdc00);
            }
            if (index + 1 === length || codeUnits.length > 0x4000) {
                result += String.fromCharCode.apply(String, codeUnits);
                codeUnits.length = 0;
            }
        }
        return result;
    };
    var chars$2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    // Use a lookup table to find the index.
    var lookup$2 = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
    for (var i$2 = 0; i$2 < chars$2.length; i$2++) {
        lookup$2[chars$2.charCodeAt(i$2)] = i$2;
    }

    /*
     * utrie 1.0.2 <https://github.com/niklasvh/utrie>
     * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
     * Released under MIT License
     */
    var chars$1$1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    // Use a lookup table to find the index.
    var lookup$1$1 = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
    for (var i$1$1 = 0; i$1$1 < chars$1$1.length; i$1$1++) {
        lookup$1$1[chars$1$1.charCodeAt(i$1$1)] = i$1$1;
    }
    var decode$1 = function (base64) {
        var bufferLength = base64.length * 0.75, len = base64.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
        if (base64[base64.length - 1] === '=') {
            bufferLength--;
            if (base64[base64.length - 2] === '=') {
                bufferLength--;
            }
        }
        var buffer = typeof ArrayBuffer !== 'undefined' &&
            typeof Uint8Array !== 'undefined' &&
            typeof Uint8Array.prototype.slice !== 'undefined'
            ? new ArrayBuffer(bufferLength)
            : new Array(bufferLength);
        var bytes = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);
        for (i = 0; i < len; i += 4) {
            encoded1 = lookup$1$1[base64.charCodeAt(i)];
            encoded2 = lookup$1$1[base64.charCodeAt(i + 1)];
            encoded3 = lookup$1$1[base64.charCodeAt(i + 2)];
            encoded4 = lookup$1$1[base64.charCodeAt(i + 3)];
            bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
            bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
            bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
        }
        return buffer;
    };
    var polyUint16Array$1 = function (buffer) {
        var length = buffer.length;
        var bytes = [];
        for (var i = 0; i < length; i += 2) {
            bytes.push((buffer[i + 1] << 8) | buffer[i]);
        }
        return bytes;
    };
    var polyUint32Array$1 = function (buffer) {
        var length = buffer.length;
        var bytes = [];
        for (var i = 0; i < length; i += 4) {
            bytes.push((buffer[i + 3] << 24) | (buffer[i + 2] << 16) | (buffer[i + 1] << 8) | buffer[i]);
        }
        return bytes;
    };

    /** Shift size for getting the index-2 table offset. */
    var UTRIE2_SHIFT_2$1 = 5;
    /** Shift size for getting the index-1 table offset. */
    var UTRIE2_SHIFT_1$1 = 6 + 5;
    /**
     * Shift size for shifting left the index array values.
     * Increases possible data size with 16-bit index values at the cost
     * of compactability.
     * This requires data blocks to be aligned by UTRIE2_DATA_GRANULARITY.
     */
    var UTRIE2_INDEX_SHIFT$1 = 2;
    /**
     * Difference between the two shift sizes,
     * for getting an index-1 offset from an index-2 offset. 6=11-5
     */
    var UTRIE2_SHIFT_1_2$1 = UTRIE2_SHIFT_1$1 - UTRIE2_SHIFT_2$1;
    /**
     * The part of the index-2 table for U+D800..U+DBFF stores values for
     * lead surrogate code _units_ not code _points_.
     * Values for lead surrogate code _points_ are indexed with this portion of the table.
     * Length=32=0x20=0x400>>UTRIE2_SHIFT_2. (There are 1024=0x400 lead surrogates.)
     */
    var UTRIE2_LSCP_INDEX_2_OFFSET$1 = 0x10000 >> UTRIE2_SHIFT_2$1;
    /** Number of entries in a data block. 32=0x20 */
    var UTRIE2_DATA_BLOCK_LENGTH$1 = 1 << UTRIE2_SHIFT_2$1;
    /** Mask for getting the lower bits for the in-data-block offset. */
    var UTRIE2_DATA_MASK$1 = UTRIE2_DATA_BLOCK_LENGTH$1 - 1;
    var UTRIE2_LSCP_INDEX_2_LENGTH$1 = 0x400 >> UTRIE2_SHIFT_2$1;
    /** Count the lengths of both BMP pieces. 2080=0x820 */
    var UTRIE2_INDEX_2_BMP_LENGTH$1 = UTRIE2_LSCP_INDEX_2_OFFSET$1 + UTRIE2_LSCP_INDEX_2_LENGTH$1;
    /**
     * The 2-byte UTF-8 version of the index-2 table follows at offset 2080=0x820.
     * Length 32=0x20 for lead bytes C0..DF, regardless of UTRIE2_SHIFT_2.
     */
    var UTRIE2_UTF8_2B_INDEX_2_OFFSET$1 = UTRIE2_INDEX_2_BMP_LENGTH$1;
    var UTRIE2_UTF8_2B_INDEX_2_LENGTH$1 = 0x800 >> 6; /* U+0800 is the first code point after 2-byte UTF-8 */
    /**
     * The index-1 table, only used for supplementary code points, at offset 2112=0x840.
     * Variable length, for code points up to highStart, where the last single-value range starts.
     * Maximum length 512=0x200=0x100000>>UTRIE2_SHIFT_1.
     * (For 0x100000 supplementary code points U+10000..U+10ffff.)
     *
     * The part of the index-2 table for supplementary code points starts
     * after this index-1 table.
     *
     * Both the index-1 table and the following part of the index-2 table
     * are omitted completely if there is only BMP data.
     */
    var UTRIE2_INDEX_1_OFFSET$1 = UTRIE2_UTF8_2B_INDEX_2_OFFSET$1 + UTRIE2_UTF8_2B_INDEX_2_LENGTH$1;
    /**
     * Number of index-1 entries for the BMP. 32=0x20
     * This part of the index-1 table is omitted from the serialized form.
     */
    var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH$1 = 0x10000 >> UTRIE2_SHIFT_1$1;
    /** Number of entries in an index-2 block. 64=0x40 */
    var UTRIE2_INDEX_2_BLOCK_LENGTH$1 = 1 << UTRIE2_SHIFT_1_2$1;
    /** Mask for getting the lower bits for the in-index-2-block offset. */
    var UTRIE2_INDEX_2_MASK$1 = UTRIE2_INDEX_2_BLOCK_LENGTH$1 - 1;
    var slice16$1 = function (view, start, end) {
        if (view.slice) {
            return view.slice(start, end);
        }
        return new Uint16Array(Array.prototype.slice.call(view, start, end));
    };
    var slice32$1 = function (view, start, end) {
        if (view.slice) {
            return view.slice(start, end);
        }
        return new Uint32Array(Array.prototype.slice.call(view, start, end));
    };
    var createTrieFromBase64$1 = function (base64, _byteLength) {
        var buffer = decode$1(base64);
        var view32 = Array.isArray(buffer) ? polyUint32Array$1(buffer) : new Uint32Array(buffer);
        var view16 = Array.isArray(buffer) ? polyUint16Array$1(buffer) : new Uint16Array(buffer);
        var headerLength = 24;
        var index = slice16$1(view16, headerLength / 2, view32[4] / 2);
        var data = view32[5] === 2
            ? slice16$1(view16, (headerLength + view32[4]) / 2)
            : slice32$1(view32, Math.ceil((headerLength + view32[4]) / 4));
        return new Trie$1(view32[0], view32[1], view32[2], view32[3], index, data);
    };
    var Trie$1 = /** @class */ (function () {
        function Trie(initialValue, errorValue, highStart, highValueIndex, index, data) {
            this.initialValue = initialValue;
            this.errorValue = errorValue;
            this.highStart = highStart;
            this.highValueIndex = highValueIndex;
            this.index = index;
            this.data = data;
        }
        /**
         * Get the value for a code point as stored in the Trie.
         *
         * @param codePoint the code point
         * @return the value
         */
        Trie.prototype.get = function (codePoint) {
            var ix;
            if (codePoint >= 0) {
                if (codePoint < 0x0d800 || (codePoint > 0x0dbff && codePoint <= 0x0ffff)) {
                    // Ordinary BMP code point, excluding leading surrogates.
                    // BMP uses a single level lookup.  BMP index starts at offset 0 in the Trie2 index.
                    // 16 bit data is stored in the index array itself.
                    ix = this.index[codePoint >> UTRIE2_SHIFT_2$1];
                    ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
                    return this.data[ix];
                }
                if (codePoint <= 0xffff) {
                    // Lead Surrogate Code Point.  A Separate index section is stored for
                    // lead surrogate code units and code points.
                    //   The main index has the code unit data.
                    //   For this function, we need the code point data.
                    // Note: this expression could be refactored for slightly improved efficiency, but
                    //       surrogate code points will be so rare in practice that it's not worth it.
                    ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET$1 + ((codePoint - 0xd800) >> UTRIE2_SHIFT_2$1)];
                    ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
                    return this.data[ix];
                }
                if (codePoint < this.highStart) {
                    // Supplemental code point, use two-level lookup.
                    ix = UTRIE2_INDEX_1_OFFSET$1 - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH$1 + (codePoint >> UTRIE2_SHIFT_1$1);
                    ix = this.index[ix];
                    ix += (codePoint >> UTRIE2_SHIFT_2$1) & UTRIE2_INDEX_2_MASK$1;
                    ix = this.index[ix];
                    ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
                    return this.data[ix];
                }
                if (codePoint <= 0x10ffff) {
                    return this.data[this.highValueIndex];
                }
            }
            // Fall through.  The code point is outside of the legal range of 0..0x10ffff.
            return this.errorValue;
        };
        return Trie;
    }());

    /*
     * base64-arraybuffer 1.0.2 <https://github.com/niklasvh/base64-arraybuffer>
     * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
     * Released under MIT License
     */
    var chars$3 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    // Use a lookup table to find the index.
    var lookup$3 = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
    for (var i$3 = 0; i$3 < chars$3.length; i$3++) {
        lookup$3[chars$3.charCodeAt(i$3)] = i$3;
    }

    var base64$1 = 'KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==';

    var LETTER_NUMBER_MODIFIER = 50;
    // Non-tailorable Line Breaking Classes
    var BK = 1; //  Cause a line break (after)
    var CR$1 = 2; //  Cause a line break (after), except between CR and LF
    var LF$1 = 3; //  Cause a line break (after)
    var CM = 4; //  Prohibit a line break between the character and the preceding character
    var NL = 5; //  Cause a line break (after)
    var WJ = 7; //  Prohibit line breaks before and after
    var ZW = 8; //  Provide a break opportunity
    var GL = 9; //  Prohibit line breaks before and after
    var SP = 10; // Enable indirect line breaks
    var ZWJ$1 = 11; // Prohibit line breaks within joiner sequences
    // Break Opportunities
    var B2 = 12; //  Provide a line break opportunity before and after the character
    var BA = 13; //  Generally provide a line break opportunity after the character
    var BB = 14; //  Generally provide a line break opportunity before the character
    var HY = 15; //  Provide a line break opportunity after the character, except in numeric context
    var CB = 16; //   Provide a line break opportunity contingent on additional information
    // Characters Prohibiting Certain Breaks
    var CL = 17; //  Prohibit line breaks before
    var CP = 18; //  Prohibit line breaks before
    var EX = 19; //  Prohibit line breaks before
    var IN = 20; //  Allow only indirect line breaks between pairs
    var NS = 21; //  Allow only indirect line breaks before
    var OP = 22; //  Prohibit line breaks after
    var QU = 23; //  Act like they are both opening and closing
    // Numeric Context
    var IS = 24; //  Prevent breaks after any and before numeric
    var NU = 25; //  Form numeric expressions for line breaking purposes
    var PO = 26; //  Do not break following a numeric expression
    var PR = 27; //  Do not break in front of a numeric expression
    var SY = 28; //  Prevent a break before; and allow a break after
    // Other Characters
    var AI = 29; //  Act like AL when the resolvedEAW is N; otherwise; act as ID
    var AL = 30; //  Are alphabetic characters or symbols that are used with alphabetic characters
    var CJ = 31; //  Treat as NS or ID for strict or normal breaking.
    var EB = 32; //  Do not break from following Emoji Modifier
    var EM = 33; //  Do not break from preceding Emoji Base
    var H2 = 34; //  Form Korean syllable blocks
    var H3 = 35; //  Form Korean syllable blocks
    var HL = 36; //  Do not break around a following hyphen; otherwise act as Alphabetic
    var ID = 37; //  Break before or after; except in some numeric context
    var JL = 38; //  Form Korean syllable blocks
    var JV = 39; //  Form Korean syllable blocks
    var JT = 40; //  Form Korean syllable blocks
    var RI$1 = 41; //  Keep pairs together. For pairs; break before and after other classes
    var SA = 42; //  Provide a line break opportunity contingent on additional, language-specific context analysis
    var XX = 43; //  Have as yet unknown line breaking behavior or unassigned code positions
    var ea_OP = [0x2329, 0xff08];
    var BREAK_MANDATORY = '!';
    var BREAK_NOT_ALLOWED$1 = '×';
    var BREAK_ALLOWED$1 = '÷';
    var UnicodeTrie$1 = createTrieFromBase64$1(base64$1);
    var ALPHABETICS = [AL, HL];
    var HARD_LINE_BREAKS = [BK, CR$1, LF$1, NL];
    var SPACE$1 = [SP, ZW];
    var PREFIX_POSTFIX = [PR, PO];
    var LINE_BREAKS = HARD_LINE_BREAKS.concat(SPACE$1);
    var KOREAN_SYLLABLE_BLOCK = [JL, JV, JT, H2, H3];
    var HYPHEN = [HY, BA];
    var codePointsToCharacterClasses = function (codePoints, lineBreak) {
        if (lineBreak === void 0) { lineBreak = 'strict'; }
        var types = [];
        var indices = [];
        var categories = [];
        codePoints.forEach(function (codePoint, index) {
            var classType = UnicodeTrie$1.get(codePoint);
            if (classType > LETTER_NUMBER_MODIFIER) {
                categories.push(true);
                classType -= LETTER_NUMBER_MODIFIER;
            }
            else {
                categories.push(false);
            }
            if (['normal', 'auto', 'loose'].indexOf(lineBreak) !== -1) {
                // U+2010, – U+2013, 〜 U+301C, ゠ U+30A0
                if ([0x2010, 0x2013, 0x301c, 0x30a0].indexOf(codePoint) !== -1) {
                    indices.push(index);
                    return types.push(CB);
                }
            }
            if (classType === CM || classType === ZWJ$1) {
                // LB10 Treat any remaining combining mark or ZWJ as AL.
                if (index === 0) {
                    indices.push(index);
                    return types.push(AL);
                }
                // LB9 Do not break a combining character sequence; treat it as if it has the line breaking class of
                // the base character in all of the following rules. Treat ZWJ as if it were CM.
                var prev = types[index - 1];
                if (LINE_BREAKS.indexOf(prev) === -1) {
                    indices.push(indices[index - 1]);
                    return types.push(prev);
                }
                indices.push(index);
                return types.push(AL);
            }
            indices.push(index);
            if (classType === CJ) {
                return types.push(lineBreak === 'strict' ? NS : ID);
            }
            if (classType === SA) {
                return types.push(AL);
            }
            if (classType === AI) {
                return types.push(AL);
            }
            // For supplementary characters, a useful default is to treat characters in the range 10000..1FFFD as AL
            // and characters in the ranges 20000..2FFFD and 30000..3FFFD as ID, until the implementation can be revised
            // to take into account the actual line breaking properties for these characters.
            if (classType === XX) {
                if ((codePoint >= 0x20000 && codePoint <= 0x2fffd) || (codePoint >= 0x30000 && codePoint <= 0x3fffd)) {
                    return types.push(ID);
                }
                else {
                    return types.push(AL);
                }
            }
            types.push(classType);
        });
        return [indices, types, categories];
    };
    var isAdjacentWithSpaceIgnored = function (a, b, currentIndex, classTypes) {
        var current = classTypes[currentIndex];
        if (Array.isArray(a) ? a.indexOf(current) !== -1 : a === current) {
            var i = currentIndex;
            while (i <= classTypes.length) {
                i++;
                var next = classTypes[i];
                if (next === b) {
                    return true;
                }
                if (next !== SP) {
                    break;
                }
            }
        }
        if (current === SP) {
            var i = currentIndex;
            while (i > 0) {
                i--;
                var prev = classTypes[i];
                if (Array.isArray(a) ? a.indexOf(prev) !== -1 : a === prev) {
                    var n = currentIndex;
                    while (n <= classTypes.length) {
                        n++;
                        var next = classTypes[n];
                        if (next === b) {
                            return true;
                        }
                        if (next !== SP) {
                            break;
                        }
                    }
                }
                if (prev !== SP) {
                    break;
                }
            }
        }
        return false;
    };
    var previousNonSpaceClassType = function (currentIndex, classTypes) {
        var i = currentIndex;
        while (i >= 0) {
            var type = classTypes[i];
            if (type === SP) {
                i--;
            }
            else {
                return type;
            }
        }
        return 0;
    };
    var _lineBreakAtIndex = function (codePoints, classTypes, indicies, index, forbiddenBreaks) {
        if (indicies[index] === 0) {
            return BREAK_NOT_ALLOWED$1;
        }
        var currentIndex = index - 1;
        if (Array.isArray(forbiddenBreaks) && forbiddenBreaks[currentIndex] === true) {
            return BREAK_NOT_ALLOWED$1;
        }
        var beforeIndex = currentIndex - 1;
        var afterIndex = currentIndex + 1;
        var current = classTypes[currentIndex];
        // LB4 Always break after hard line breaks.
        // LB5 Treat CR followed by LF, as well as CR, LF, and NL as hard line breaks.
        var before = beforeIndex >= 0 ? classTypes[beforeIndex] : 0;
        var next = classTypes[afterIndex];
        if (current === CR$1 && next === LF$1) {
            return BREAK_NOT_ALLOWED$1;
        }
        if (HARD_LINE_BREAKS.indexOf(current) !== -1) {
            return BREAK_MANDATORY;
        }
        // LB6 Do not break before hard line breaks.
        if (HARD_LINE_BREAKS.indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB7 Do not break before spaces or zero width space.
        if (SPACE$1.indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB8 Break before any character following a zero-width space, even if one or more spaces intervene.
        if (previousNonSpaceClassType(currentIndex, classTypes) === ZW) {
            return BREAK_ALLOWED$1;
        }
        // LB8a Do not break after a zero width joiner.
        if (UnicodeTrie$1.get(codePoints[currentIndex]) === ZWJ$1) {
            return BREAK_NOT_ALLOWED$1;
        }
        // zwj emojis
        if ((current === EB || current === EM) && UnicodeTrie$1.get(codePoints[afterIndex]) === ZWJ$1) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB11 Do not break before or after Word joiner and related characters.
        if (current === WJ || next === WJ) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB12 Do not break after NBSP and related characters.
        if (current === GL) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB12a Do not break before NBSP and related characters, except after spaces and hyphens.
        if ([SP, BA, HY].indexOf(current) === -1 && next === GL) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB13 Do not break before ‘]’ or ‘!’ or ‘;’ or ‘/’, even after spaces.
        if ([CL, CP, EX, IS, SY].indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB14 Do not break after ‘[’, even after spaces.
        if (previousNonSpaceClassType(currentIndex, classTypes) === OP) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB15 Do not break within ‘”[’, even with intervening spaces.
        if (isAdjacentWithSpaceIgnored(QU, OP, currentIndex, classTypes)) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB16 Do not break between closing punctuation and a nonstarter (lb=NS), even with intervening spaces.
        if (isAdjacentWithSpaceIgnored([CL, CP], NS, currentIndex, classTypes)) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB17 Do not break within ‘——’, even with intervening spaces.
        if (isAdjacentWithSpaceIgnored(B2, B2, currentIndex, classTypes)) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB18 Break after spaces.
        if (current === SP) {
            return BREAK_ALLOWED$1;
        }
        // LB19 Do not break before or after quotation marks, such as ‘ ” ’.
        if (current === QU || next === QU) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB20 Break before and after unresolved CB.
        if (next === CB || current === CB) {
            return BREAK_ALLOWED$1;
        }
        // LB21 Do not break before hyphen-minus, other hyphens, fixed-width spaces, small kana, and other non-starters, or after acute accents.
        if ([BA, HY, NS].indexOf(next) !== -1 || current === BB) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB21a Don't break after Hebrew + Hyphen.
        if (before === HL && HYPHEN.indexOf(current) !== -1) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB21b Don’t break between Solidus and Hebrew letters.
        if (current === SY && next === HL) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB22 Do not break before ellipsis.
        if (next === IN) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB23 Do not break between digits and letters.
        if ((ALPHABETICS.indexOf(next) !== -1 && current === NU) || (ALPHABETICS.indexOf(current) !== -1 && next === NU)) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB23a Do not break between numeric prefixes and ideographs, or between ideographs and numeric postfixes.
        if ((current === PR && [ID, EB, EM].indexOf(next) !== -1) ||
            ([ID, EB, EM].indexOf(current) !== -1 && next === PO)) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB24 Do not break between numeric prefix/postfix and letters, or between letters and prefix/postfix.
        if ((ALPHABETICS.indexOf(current) !== -1 && PREFIX_POSTFIX.indexOf(next) !== -1) ||
            (PREFIX_POSTFIX.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1)) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB25 Do not break between the following pairs of classes relevant to numbers:
        if (
        // (PR | PO) × ( OP | HY )? NU
        ([PR, PO].indexOf(current) !== -1 &&
            (next === NU || ([OP, HY].indexOf(next) !== -1 && classTypes[afterIndex + 1] === NU))) ||
            // ( OP | HY ) × NU
            ([OP, HY].indexOf(current) !== -1 && next === NU) ||
            // NU ×	(NU | SY | IS)
            (current === NU && [NU, SY, IS].indexOf(next) !== -1)) {
            return BREAK_NOT_ALLOWED$1;
        }
        // NU (NU | SY | IS)* × (NU | SY | IS | CL | CP)
        if ([NU, SY, IS, CL, CP].indexOf(next) !== -1) {
            var prevIndex = currentIndex;
            while (prevIndex >= 0) {
                var type = classTypes[prevIndex];
                if (type === NU) {
                    return BREAK_NOT_ALLOWED$1;
                }
                else if ([SY, IS].indexOf(type) !== -1) {
                    prevIndex--;
                }
                else {
                    break;
                }
            }
        }
        // NU (NU | SY | IS)* (CL | CP)? × (PO | PR))
        if ([PR, PO].indexOf(next) !== -1) {
            var prevIndex = [CL, CP].indexOf(current) !== -1 ? beforeIndex : currentIndex;
            while (prevIndex >= 0) {
                var type = classTypes[prevIndex];
                if (type === NU) {
                    return BREAK_NOT_ALLOWED$1;
                }
                else if ([SY, IS].indexOf(type) !== -1) {
                    prevIndex--;
                }
                else {
                    break;
                }
            }
        }
        // LB26 Do not break a Korean syllable.
        if ((JL === current && [JL, JV, H2, H3].indexOf(next) !== -1) ||
            ([JV, H2].indexOf(current) !== -1 && [JV, JT].indexOf(next) !== -1) ||
            ([JT, H3].indexOf(current) !== -1 && next === JT)) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB27 Treat a Korean Syllable Block the same as ID.
        if ((KOREAN_SYLLABLE_BLOCK.indexOf(current) !== -1 && [IN, PO].indexOf(next) !== -1) ||
            (KOREAN_SYLLABLE_BLOCK.indexOf(next) !== -1 && current === PR)) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB28 Do not break between alphabetics (“at”).
        if (ALPHABETICS.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB29 Do not break between numeric punctuation and alphabetics (“e.g.”).
        if (current === IS && ALPHABETICS.indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB30 Do not break between letters, numbers, or ordinary symbols and opening or closing parentheses.
        if ((ALPHABETICS.concat(NU).indexOf(current) !== -1 &&
            next === OP &&
            ea_OP.indexOf(codePoints[afterIndex]) === -1) ||
            (ALPHABETICS.concat(NU).indexOf(next) !== -1 && current === CP)) {
            return BREAK_NOT_ALLOWED$1;
        }
        // LB30a Break between two regional indicator symbols if and only if there are an even number of regional
        // indicators preceding the position of the break.
        if (current === RI$1 && next === RI$1) {
            var i = indicies[currentIndex];
            var count = 1;
            while (i > 0) {
                i--;
                if (classTypes[i] === RI$1) {
                    count++;
                }
                else {
                    break;
                }
            }
            if (count % 2 !== 0) {
                return BREAK_NOT_ALLOWED$1;
            }
        }
        // LB30b Do not break between an emoji base and an emoji modifier.
        if (current === EB && next === EM) {
            return BREAK_NOT_ALLOWED$1;
        }
        return BREAK_ALLOWED$1;
    };
    var cssFormattedClasses = function (codePoints, options) {
        if (!options) {
            options = { lineBreak: 'normal', wordBreak: 'normal' };
        }
        var _a = codePointsToCharacterClasses(codePoints, options.lineBreak), indicies = _a[0], classTypes = _a[1], isLetterNumber = _a[2];
        if (options.wordBreak === 'break-all' || options.wordBreak === 'break-word') {
            classTypes = classTypes.map(function (type) { return ([NU, AL, SA].indexOf(type) !== -1 ? ID : type); });
        }
        var forbiddenBreakpoints = options.wordBreak === 'keep-all'
            ? isLetterNumber.map(function (letterNumber, i) {
                return letterNumber && codePoints[i] >= 0x4e00 && codePoints[i] <= 0x9fff;
            })
            : undefined;
        return [indicies, classTypes, forbiddenBreakpoints];
    };
    var Break = /** @class */ (function () {
        function Break(codePoints, lineBreak, start, end) {
            this.codePoints = codePoints;
            this.required = lineBreak === BREAK_MANDATORY;
            this.start = start;
            this.end = end;
        }
        Break.prototype.slice = function () {
            return fromCodePoint$1.apply(void 0, this.codePoints.slice(this.start, this.end));
        };
        return Break;
    }());
    var LineBreaker = function (str, options) {
        var codePoints = toCodePoints$1(str);
        var _a = cssFormattedClasses(codePoints, options), indicies = _a[0], classTypes = _a[1], forbiddenBreakpoints = _a[2];
        var length = codePoints.length;
        var lastEnd = 0;
        var nextIndex = 0;
        return {
            next: function () {
                if (nextIndex >= length) {
                    return { done: true, value: null };
                }
                var lineBreak = BREAK_NOT_ALLOWED$1;
                while (nextIndex < length &&
                    (lineBreak = _lineBreakAtIndex(codePoints, classTypes, indicies, ++nextIndex, forbiddenBreakpoints)) ===
                        BREAK_NOT_ALLOWED$1) { }
                if (lineBreak !== BREAK_NOT_ALLOWED$1 || nextIndex === length) {
                    var value = new Break(codePoints, lineBreak, lastEnd, nextIndex);
                    lastEnd = nextIndex;
                    return { value: value, done: false };
                }
                return { done: true, value: null };
            },
        };
    };

    // https://www.w3.org/TR/css-syntax-3
    var FLAG_UNRESTRICTED = 1 << 0;
    var FLAG_ID = 1 << 1;
    var FLAG_INTEGER = 1 << 2;
    var FLAG_NUMBER = 1 << 3;
    var LINE_FEED = 0x000a;
    var SOLIDUS = 0x002f;
    var REVERSE_SOLIDUS = 0x005c;
    var CHARACTER_TABULATION = 0x0009;
    var SPACE = 0x0020;
    var QUOTATION_MARK = 0x0022;
    var EQUALS_SIGN = 0x003d;
    var NUMBER_SIGN = 0x0023;
    var DOLLAR_SIGN = 0x0024;
    var PERCENTAGE_SIGN = 0x0025;
    var APOSTROPHE = 0x0027;
    var LEFT_PARENTHESIS = 0x0028;
    var RIGHT_PARENTHESIS = 0x0029;
    var LOW_LINE = 0x005f;
    var HYPHEN_MINUS = 0x002d;
    var EXCLAMATION_MARK = 0x0021;
    var LESS_THAN_SIGN = 0x003c;
    var GREATER_THAN_SIGN = 0x003e;
    var COMMERCIAL_AT = 0x0040;
    var LEFT_SQUARE_BRACKET = 0x005b;
    var RIGHT_SQUARE_BRACKET = 0x005d;
    var CIRCUMFLEX_ACCENT = 0x003d;
    var LEFT_CURLY_BRACKET = 0x007b;
    var QUESTION_MARK = 0x003f;
    var RIGHT_CURLY_BRACKET = 0x007d;
    var VERTICAL_LINE = 0x007c;
    var TILDE = 0x007e;
    var CONTROL = 0x0080;
    var REPLACEMENT_CHARACTER = 0xfffd;
    var ASTERISK = 0x002a;
    var PLUS_SIGN = 0x002b;
    var COMMA = 0x002c;
    var COLON = 0x003a;
    var SEMICOLON = 0x003b;
    var FULL_STOP = 0x002e;
    var NULL = 0x0000;
    var BACKSPACE = 0x0008;
    var LINE_TABULATION = 0x000b;
    var SHIFT_OUT = 0x000e;
    var INFORMATION_SEPARATOR_ONE = 0x001f;
    var DELETE = 0x007f;
    var EOF = -1;
    var ZERO = 0x0030;
    var a = 0x0061;
    var e = 0x0065;
    var f = 0x0066;
    var u = 0x0075;
    var z = 0x007a;
    var A = 0x0041;
    var E = 0x0045;
    var F = 0x0046;
    var U = 0x0055;
    var Z = 0x005a;
    var isDigit = function (codePoint) { return codePoint >= ZERO && codePoint <= 0x0039; };
    var isSurrogateCodePoint = function (codePoint) { return codePoint >= 0xd800 && codePoint <= 0xdfff; };
    var isHex = function (codePoint) {
        return isDigit(codePoint) || (codePoint >= A && codePoint <= F) || (codePoint >= a && codePoint <= f);
    };
    var isLowerCaseLetter = function (codePoint) { return codePoint >= a && codePoint <= z; };
    var isUpperCaseLetter = function (codePoint) { return codePoint >= A && codePoint <= Z; };
    var isLetter = function (codePoint) { return isLowerCaseLetter(codePoint) || isUpperCaseLetter(codePoint); };
    var isNonASCIICodePoint = function (codePoint) { return codePoint >= CONTROL; };
    var isWhiteSpace = function (codePoint) {
        return codePoint === LINE_FEED || codePoint === CHARACTER_TABULATION || codePoint === SPACE;
    };
    var isNameStartCodePoint = function (codePoint) {
        return isLetter(codePoint) || isNonASCIICodePoint(codePoint) || codePoint === LOW_LINE;
    };
    var isNameCodePoint = function (codePoint) {
        return isNameStartCodePoint(codePoint) || isDigit(codePoint) || codePoint === HYPHEN_MINUS;
    };
    var isNonPrintableCodePoint = function (codePoint) {
        return ((codePoint >= NULL && codePoint <= BACKSPACE) ||
            codePoint === LINE_TABULATION ||
            (codePoint >= SHIFT_OUT && codePoint <= INFORMATION_SEPARATOR_ONE) ||
            codePoint === DELETE);
    };
    var isValidEscape = function (c1, c2) {
        if (c1 !== REVERSE_SOLIDUS) {
            return false;
        }
        return c2 !== LINE_FEED;
    };
    var isIdentifierStart = function (c1, c2, c3) {
        if (c1 === HYPHEN_MINUS) {
            return isNameStartCodePoint(c2) || isValidEscape(c2, c3);
        }
        else if (isNameStartCodePoint(c1)) {
            return true;
        }
        else if (c1 === REVERSE_SOLIDUS && isValidEscape(c1, c2)) {
            return true;
        }
        return false;
    };
    var isNumberStart = function (c1, c2, c3) {
        if (c1 === PLUS_SIGN || c1 === HYPHEN_MINUS) {
            if (isDigit(c2)) {
                return true;
            }
            return c2 === FULL_STOP && isDigit(c3);
        }
        if (c1 === FULL_STOP) {
            return isDigit(c2);
        }
        return isDigit(c1);
    };
    var stringToNumber = function (codePoints) {
        var c = 0;
        var sign = 1;
        if (codePoints[c] === PLUS_SIGN || codePoints[c] === HYPHEN_MINUS) {
            if (codePoints[c] === HYPHEN_MINUS) {
                sign = -1;
            }
            c++;
        }
        var integers = [];
        while (isDigit(codePoints[c])) {
            integers.push(codePoints[c++]);
        }
        var int = integers.length ? parseInt(fromCodePoint$1.apply(void 0, integers), 10) : 0;
        if (codePoints[c] === FULL_STOP) {
            c++;
        }
        var fraction = [];
        while (isDigit(codePoints[c])) {
            fraction.push(codePoints[c++]);
        }
        var fracd = fraction.length;
        var frac = fracd ? parseInt(fromCodePoint$1.apply(void 0, fraction), 10) : 0;
        if (codePoints[c] === E || codePoints[c] === e) {
            c++;
        }
        var expsign = 1;
        if (codePoints[c] === PLUS_SIGN || codePoints[c] === HYPHEN_MINUS) {
            if (codePoints[c] === HYPHEN_MINUS) {
                expsign = -1;
            }
            c++;
        }
        var exponent = [];
        while (isDigit(codePoints[c])) {
            exponent.push(codePoints[c++]);
        }
        var exp = exponent.length ? parseInt(fromCodePoint$1.apply(void 0, exponent), 10) : 0;
        return sign * (int + frac * Math.pow(10, -fracd)) * Math.pow(10, expsign * exp);
    };
    var LEFT_PARENTHESIS_TOKEN = {
        type: 2 /* LEFT_PARENTHESIS_TOKEN */
    };
    var RIGHT_PARENTHESIS_TOKEN = {
        type: 3 /* RIGHT_PARENTHESIS_TOKEN */
    };
    var COMMA_TOKEN = { type: 4 /* COMMA_TOKEN */ };
    var SUFFIX_MATCH_TOKEN = { type: 13 /* SUFFIX_MATCH_TOKEN */ };
    var PREFIX_MATCH_TOKEN = { type: 8 /* PREFIX_MATCH_TOKEN */ };
    var COLUMN_TOKEN = { type: 21 /* COLUMN_TOKEN */ };
    var DASH_MATCH_TOKEN = { type: 9 /* DASH_MATCH_TOKEN */ };
    var INCLUDE_MATCH_TOKEN = { type: 10 /* INCLUDE_MATCH_TOKEN */ };
    var LEFT_CURLY_BRACKET_TOKEN = {
        type: 11 /* LEFT_CURLY_BRACKET_TOKEN */
    };
    var RIGHT_CURLY_BRACKET_TOKEN = {
        type: 12 /* RIGHT_CURLY_BRACKET_TOKEN */
    };
    var SUBSTRING_MATCH_TOKEN = { type: 14 /* SUBSTRING_MATCH_TOKEN */ };
    var BAD_URL_TOKEN = { type: 23 /* BAD_URL_TOKEN */ };
    var BAD_STRING_TOKEN = { type: 1 /* BAD_STRING_TOKEN */ };
    var CDO_TOKEN = { type: 25 /* CDO_TOKEN */ };
    var CDC_TOKEN = { type: 24 /* CDC_TOKEN */ };
    var COLON_TOKEN = { type: 26 /* COLON_TOKEN */ };
    var SEMICOLON_TOKEN = { type: 27 /* SEMICOLON_TOKEN */ };
    var LEFT_SQUARE_BRACKET_TOKEN = {
        type: 28 /* LEFT_SQUARE_BRACKET_TOKEN */
    };
    var RIGHT_SQUARE_BRACKET_TOKEN = {
        type: 29 /* RIGHT_SQUARE_BRACKET_TOKEN */
    };
    var WHITESPACE_TOKEN = { type: 31 /* WHITESPACE_TOKEN */ };
    var EOF_TOKEN = { type: 32 /* EOF_TOKEN */ };
    var Tokenizer = /** @class */ (function () {
        function Tokenizer() {
            this._value = [];
        }
        Tokenizer.prototype.write = function (chunk) {
            this._value = this._value.concat(toCodePoints$1(chunk));
        };
        Tokenizer.prototype.read = function () {
            var tokens = [];
            var token = this.consumeToken();
            while (token !== EOF_TOKEN) {
                tokens.push(token);
                token = this.consumeToken();
            }
            return tokens;
        };
        Tokenizer.prototype.consumeToken = function () {
            var codePoint = this.consumeCodePoint();
            switch (codePoint) {
                case QUOTATION_MARK:
                    return this.consumeStringToken(QUOTATION_MARK);
                case NUMBER_SIGN:
                    var c1 = this.peekCodePoint(0);
                    var c2 = this.peekCodePoint(1);
                    var c3 = this.peekCodePoint(2);
                    if (isNameCodePoint(c1) || isValidEscape(c2, c3)) {
                        var flags = isIdentifierStart(c1, c2, c3) ? FLAG_ID : FLAG_UNRESTRICTED;
                        var value = this.consumeName();
                        return { type: 5 /* HASH_TOKEN */, value: value, flags: flags };
                    }
                    break;
                case DOLLAR_SIGN:
                    if (this.peekCodePoint(0) === EQUALS_SIGN) {
                        this.consumeCodePoint();
                        return SUFFIX_MATCH_TOKEN;
                    }
                    break;
                case APOSTROPHE:
                    return this.consumeStringToken(APOSTROPHE);
                case LEFT_PARENTHESIS:
                    return LEFT_PARENTHESIS_TOKEN;
                case RIGHT_PARENTHESIS:
                    return RIGHT_PARENTHESIS_TOKEN;
                case ASTERISK:
                    if (this.peekCodePoint(0) === EQUALS_SIGN) {
                        this.consumeCodePoint();
                        return SUBSTRING_MATCH_TOKEN;
                    }
                    break;
                case PLUS_SIGN:
                    if (isNumberStart(codePoint, this.peekCodePoint(0), this.peekCodePoint(1))) {
                        this.reconsumeCodePoint(codePoint);
                        return this.consumeNumericToken();
                    }
                    break;
                case COMMA:
                    return COMMA_TOKEN;
                case HYPHEN_MINUS:
                    var e1 = codePoint;
                    var e2 = this.peekCodePoint(0);
                    var e3 = this.peekCodePoint(1);
                    if (isNumberStart(e1, e2, e3)) {
                        this.reconsumeCodePoint(codePoint);
                        return this.consumeNumericToken();
                    }
                    if (isIdentifierStart(e1, e2, e3)) {
                        this.reconsumeCodePoint(codePoint);
                        return this.consumeIdentLikeToken();
                    }
                    if (e2 === HYPHEN_MINUS && e3 === GREATER_THAN_SIGN) {
                        this.consumeCodePoint();
                        this.consumeCodePoint();
                        return CDC_TOKEN;
                    }
                    break;
                case FULL_STOP:
                    if (isNumberStart(codePoint, this.peekCodePoint(0), this.peekCodePoint(1))) {
                        this.reconsumeCodePoint(codePoint);
                        return this.consumeNumericToken();
                    }
                    break;
                case SOLIDUS:
                    if (this.peekCodePoint(0) === ASTERISK) {
                        this.consumeCodePoint();
                        while (true) {
                            var c = this.consumeCodePoint();
                            if (c === ASTERISK) {
                                c = this.consumeCodePoint();
                                if (c === SOLIDUS) {
                                    return this.consumeToken();
                                }
                            }
                            if (c === EOF) {
                                return this.consumeToken();
                            }
                        }
                    }
                    break;
                case COLON:
                    return COLON_TOKEN;
                case SEMICOLON:
                    return SEMICOLON_TOKEN;
                case LESS_THAN_SIGN:
                    if (this.peekCodePoint(0) === EXCLAMATION_MARK &&
                        this.peekCodePoint(1) === HYPHEN_MINUS &&
                        this.peekCodePoint(2) === HYPHEN_MINUS) {
                        this.consumeCodePoint();
                        this.consumeCodePoint();
                        return CDO_TOKEN;
                    }
                    break;
                case COMMERCIAL_AT:
                    var a1 = this.peekCodePoint(0);
                    var a2 = this.peekCodePoint(1);
                    var a3 = this.peekCodePoint(2);
                    if (isIdentifierStart(a1, a2, a3)) {
                        var value = this.consumeName();
                        return { type: 7 /* AT_KEYWORD_TOKEN */, value: value };
                    }
                    break;
                case LEFT_SQUARE_BRACKET:
                    return LEFT_SQUARE_BRACKET_TOKEN;
                case REVERSE_SOLIDUS:
                    if (isValidEscape(codePoint, this.peekCodePoint(0))) {
                        this.reconsumeCodePoint(codePoint);
                        return this.consumeIdentLikeToken();
                    }
                    break;
                case RIGHT_SQUARE_BRACKET:
                    return RIGHT_SQUARE_BRACKET_TOKEN;
                case CIRCUMFLEX_ACCENT:
                    if (this.peekCodePoint(0) === EQUALS_SIGN) {
                        this.consumeCodePoint();
                        return PREFIX_MATCH_TOKEN;
                    }
                    break;
                case LEFT_CURLY_BRACKET:
                    return LEFT_CURLY_BRACKET_TOKEN;
                case RIGHT_CURLY_BRACKET:
                    return RIGHT_CURLY_BRACKET_TOKEN;
                case u:
                case U:
                    var u1 = this.peekCodePoint(0);
                    var u2 = this.peekCodePoint(1);
                    if (u1 === PLUS_SIGN && (isHex(u2) || u2 === QUESTION_MARK)) {
                        this.consumeCodePoint();
                        this.consumeUnicodeRangeToken();
                    }
                    this.reconsumeCodePoint(codePoint);
                    return this.consumeIdentLikeToken();
                case VERTICAL_LINE:
                    if (this.peekCodePoint(0) === EQUALS_SIGN) {
                        this.consumeCodePoint();
                        return DASH_MATCH_TOKEN;
                    }
                    if (this.peekCodePoint(0) === VERTICAL_LINE) {
                        this.consumeCodePoint();
                        return COLUMN_TOKEN;
                    }
                    break;
                case TILDE:
                    if (this.peekCodePoint(0) === EQUALS_SIGN) {
                        this.consumeCodePoint();
                        return INCLUDE_MATCH_TOKEN;
                    }
                    break;
                case EOF:
                    return EOF_TOKEN;
            }
            if (isWhiteSpace(codePoint)) {
                this.consumeWhiteSpace();
                return WHITESPACE_TOKEN;
            }
            if (isDigit(codePoint)) {
                this.reconsumeCodePoint(codePoint);
                return this.consumeNumericToken();
            }
            if (isNameStartCodePoint(codePoint)) {
                this.reconsumeCodePoint(codePoint);
                return this.consumeIdentLikeToken();
            }
            return { type: 6 /* DELIM_TOKEN */, value: fromCodePoint$1(codePoint) };
        };
        Tokenizer.prototype.consumeCodePoint = function () {
            var value = this._value.shift();
            return typeof value === 'undefined' ? -1 : value;
        };
        Tokenizer.prototype.reconsumeCodePoint = function (codePoint) {
            this._value.unshift(codePoint);
        };
        Tokenizer.prototype.peekCodePoint = function (delta) {
            if (delta >= this._value.length) {
                return -1;
            }
            return this._value[delta];
        };
        Tokenizer.prototype.consumeUnicodeRangeToken = function () {
            var digits = [];
            var codePoint = this.consumeCodePoint();
            while (isHex(codePoint) && digits.length < 6) {
                digits.push(codePoint);
                codePoint = this.consumeCodePoint();
            }
            var questionMarks = false;
            while (codePoint === QUESTION_MARK && digits.length < 6) {
                digits.push(codePoint);
                codePoint = this.consumeCodePoint();
                questionMarks = true;
            }
            if (questionMarks) {
                var start_1 = parseInt(fromCodePoint$1.apply(void 0, digits.map(function (digit) { return (digit === QUESTION_MARK ? ZERO : digit); })), 16);
                var end = parseInt(fromCodePoint$1.apply(void 0, digits.map(function (digit) { return (digit === QUESTION_MARK ? F : digit); })), 16);
                return { type: 30 /* UNICODE_RANGE_TOKEN */, start: start_1, end: end };
            }
            var start = parseInt(fromCodePoint$1.apply(void 0, digits), 16);
            if (this.peekCodePoint(0) === HYPHEN_MINUS && isHex(this.peekCodePoint(1))) {
                this.consumeCodePoint();
                codePoint = this.consumeCodePoint();
                var endDigits = [];
                while (isHex(codePoint) && endDigits.length < 6) {
                    endDigits.push(codePoint);
                    codePoint = this.consumeCodePoint();
                }
                var end = parseInt(fromCodePoint$1.apply(void 0, endDigits), 16);
                return { type: 30 /* UNICODE_RANGE_TOKEN */, start: start, end: end };
            }
            else {
                return { type: 30 /* UNICODE_RANGE_TOKEN */, start: start, end: start };
            }
        };
        Tokenizer.prototype.consumeIdentLikeToken = function () {
            var value = this.consumeName();
            if (value.toLowerCase() === 'url' && this.peekCodePoint(0) === LEFT_PARENTHESIS) {
                this.consumeCodePoint();
                return this.consumeUrlToken();
            }
            else if (this.peekCodePoint(0) === LEFT_PARENTHESIS) {
                this.consumeCodePoint();
                return { type: 19 /* FUNCTION_TOKEN */, value: value };
            }
            return { type: 20 /* IDENT_TOKEN */, value: value };
        };
        Tokenizer.prototype.consumeUrlToken = function () {
            var value = [];
            this.consumeWhiteSpace();
            if (this.peekCodePoint(0) === EOF) {
                return { type: 22 /* URL_TOKEN */, value: '' };
            }
            var next = this.peekCodePoint(0);
            if (next === APOSTROPHE || next === QUOTATION_MARK) {
                var stringToken = this.consumeStringToken(this.consumeCodePoint());
                if (stringToken.type === 0 /* STRING_TOKEN */) {
                    this.consumeWhiteSpace();
                    if (this.peekCodePoint(0) === EOF || this.peekCodePoint(0) === RIGHT_PARENTHESIS) {
                        this.consumeCodePoint();
                        return { type: 22 /* URL_TOKEN */, value: stringToken.value };
                    }
                }
                this.consumeBadUrlRemnants();
                return BAD_URL_TOKEN;
            }
            while (true) {
                var codePoint = this.consumeCodePoint();
                if (codePoint === EOF || codePoint === RIGHT_PARENTHESIS) {
                    return { type: 22 /* URL_TOKEN */, value: fromCodePoint$1.apply(void 0, value) };
                }
                else if (isWhiteSpace(codePoint)) {
                    this.consumeWhiteSpace();
                    if (this.peekCodePoint(0) === EOF || this.peekCodePoint(0) === RIGHT_PARENTHESIS) {
                        this.consumeCodePoint();
                        return { type: 22 /* URL_TOKEN */, value: fromCodePoint$1.apply(void 0, value) };
                    }
                    this.consumeBadUrlRemnants();
                    return BAD_URL_TOKEN;
                }
                else if (codePoint === QUOTATION_MARK ||
                    codePoint === APOSTROPHE ||
                    codePoint === LEFT_PARENTHESIS ||
                    isNonPrintableCodePoint(codePoint)) {
                    this.consumeBadUrlRemnants();
                    return BAD_URL_TOKEN;
                }
                else if (codePoint === REVERSE_SOLIDUS) {
                    if (isValidEscape(codePoint, this.peekCodePoint(0))) {
                        value.push(this.consumeEscapedCodePoint());
                    }
                    else {
                        this.consumeBadUrlRemnants();
                        return BAD_URL_TOKEN;
                    }
                }
                else {
                    value.push(codePoint);
                }
            }
        };
        Tokenizer.prototype.consumeWhiteSpace = function () {
            while (isWhiteSpace(this.peekCodePoint(0))) {
                this.consumeCodePoint();
            }
        };
        Tokenizer.prototype.consumeBadUrlRemnants = function () {
            while (true) {
                var codePoint = this.consumeCodePoint();
                if (codePoint === RIGHT_PARENTHESIS || codePoint === EOF) {
                    return;
                }
                if (isValidEscape(codePoint, this.peekCodePoint(0))) {
                    this.consumeEscapedCodePoint();
                }
            }
        };
        Tokenizer.prototype.consumeStringSlice = function (count) {
            var SLICE_STACK_SIZE = 50000;
            var value = '';
            while (count > 0) {
                var amount = Math.min(SLICE_STACK_SIZE, count);
                value += fromCodePoint$1.apply(void 0, this._value.splice(0, amount));
                count -= amount;
            }
            this._value.shift();
            return value;
        };
        Tokenizer.prototype.consumeStringToken = function (endingCodePoint) {
            var value = '';
            var i = 0;
            do {
                var codePoint = this._value[i];
                if (codePoint === EOF || codePoint === undefined || codePoint === endingCodePoint) {
                    value += this.consumeStringSlice(i);
                    return { type: 0 /* STRING_TOKEN */, value: value };
                }
                if (codePoint === LINE_FEED) {
                    this._value.splice(0, i);
                    return BAD_STRING_TOKEN;
                }
                if (codePoint === REVERSE_SOLIDUS) {
                    var next = this._value[i + 1];
                    if (next !== EOF && next !== undefined) {
                        if (next === LINE_FEED) {
                            value += this.consumeStringSlice(i);
                            i = -1;
                            this._value.shift();
                        }
                        else if (isValidEscape(codePoint, next)) {
                            value += this.consumeStringSlice(i);
                            value += fromCodePoint$1(this.consumeEscapedCodePoint());
                            i = -1;
                        }
                    }
                }
                i++;
            } while (true);
        };
        Tokenizer.prototype.consumeNumber = function () {
            var repr = [];
            var type = FLAG_INTEGER;
            var c1 = this.peekCodePoint(0);
            if (c1 === PLUS_SIGN || c1 === HYPHEN_MINUS) {
                repr.push(this.consumeCodePoint());
            }
            while (isDigit(this.peekCodePoint(0))) {
                repr.push(this.consumeCodePoint());
            }
            c1 = this.peekCodePoint(0);
            var c2 = this.peekCodePoint(1);
            if (c1 === FULL_STOP && isDigit(c2)) {
                repr.push(this.consumeCodePoint(), this.consumeCodePoint());
                type = FLAG_NUMBER;
                while (isDigit(this.peekCodePoint(0))) {
                    repr.push(this.consumeCodePoint());
                }
            }
            c1 = this.peekCodePoint(0);
            c2 = this.peekCodePoint(1);
            var c3 = this.peekCodePoint(2);
            if ((c1 === E || c1 === e) && (((c2 === PLUS_SIGN || c2 === HYPHEN_MINUS) && isDigit(c3)) || isDigit(c2))) {
                repr.push(this.consumeCodePoint(), this.consumeCodePoint());
                type = FLAG_NUMBER;
                while (isDigit(this.peekCodePoint(0))) {
                    repr.push(this.consumeCodePoint());
                }
            }
            return [stringToNumber(repr), type];
        };
        Tokenizer.prototype.consumeNumericToken = function () {
            var _a = this.consumeNumber(), number = _a[0], flags = _a[1];
            var c1 = this.peekCodePoint(0);
            var c2 = this.peekCodePoint(1);
            var c3 = this.peekCodePoint(2);
            if (isIdentifierStart(c1, c2, c3)) {
                var unit = this.consumeName();
                return { type: 15 /* DIMENSION_TOKEN */, number: number, flags: flags, unit: unit };
            }
            if (c1 === PERCENTAGE_SIGN) {
                this.consumeCodePoint();
                return { type: 16 /* PERCENTAGE_TOKEN */, number: number, flags: flags };
            }
            return { type: 17 /* NUMBER_TOKEN */, number: number, flags: flags };
        };
        Tokenizer.prototype.consumeEscapedCodePoint = function () {
            var codePoint = this.consumeCodePoint();
            if (isHex(codePoint)) {
                var hex = fromCodePoint$1(codePoint);
                while (isHex(this.peekCodePoint(0)) && hex.length < 6) {
                    hex += fromCodePoint$1(this.consumeCodePoint());
                }
                if (isWhiteSpace(this.peekCodePoint(0))) {
                    this.consumeCodePoint();
                }
                var hexCodePoint = parseInt(hex, 16);
                if (hexCodePoint === 0 || isSurrogateCodePoint(hexCodePoint) || hexCodePoint > 0x10ffff) {
                    return REPLACEMENT_CHARACTER;
                }
                return hexCodePoint;
            }
            if (codePoint === EOF) {
                return REPLACEMENT_CHARACTER;
            }
            return codePoint;
        };
        Tokenizer.prototype.consumeName = function () {
            var result = '';
            while (true) {
                var codePoint = this.consumeCodePoint();
                if (isNameCodePoint(codePoint)) {
                    result += fromCodePoint$1(codePoint);
                }
                else if (isValidEscape(codePoint, this.peekCodePoint(0))) {
                    result += fromCodePoint$1(this.consumeEscapedCodePoint());
                }
                else {
                    this.reconsumeCodePoint(codePoint);
                    return result;
                }
            }
        };
        return Tokenizer;
    }());

    var Parser = /** @class */ (function () {
        function Parser(tokens) {
            this._tokens = tokens;
        }
        Parser.create = function (value) {
            var tokenizer = new Tokenizer();
            tokenizer.write(value);
            return new Parser(tokenizer.read());
        };
        Parser.parseValue = function (value) {
            return Parser.create(value).parseComponentValue();
        };
        Parser.parseValues = function (value) {
            return Parser.create(value).parseComponentValues();
        };
        Parser.prototype.parseComponentValue = function () {
            var token = this.consumeToken();
            while (token.type === 31 /* WHITESPACE_TOKEN */) {
                token = this.consumeToken();
            }
            if (token.type === 32 /* EOF_TOKEN */) {
                throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
            }
            this.reconsumeToken(token);
            var value = this.consumeComponentValue();
            do {
                token = this.consumeToken();
            } while (token.type === 31 /* WHITESPACE_TOKEN */);
            if (token.type === 32 /* EOF_TOKEN */) {
                return value;
            }
            throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
        };
        Parser.prototype.parseComponentValues = function () {
            var values = [];
            while (true) {
                var value = this.consumeComponentValue();
                if (value.type === 32 /* EOF_TOKEN */) {
                    return values;
                }
                values.push(value);
                values.push();
            }
        };
        Parser.prototype.consumeComponentValue = function () {
            var token = this.consumeToken();
            switch (token.type) {
                case 11 /* LEFT_CURLY_BRACKET_TOKEN */:
                case 28 /* LEFT_SQUARE_BRACKET_TOKEN */:
                case 2 /* LEFT_PARENTHESIS_TOKEN */:
                    return this.consumeSimpleBlock(token.type);
                case 19 /* FUNCTION_TOKEN */:
                    return this.consumeFunction(token);
            }
            return token;
        };
        Parser.prototype.consumeSimpleBlock = function (type) {
            var block = { type: type, values: [] };
            var token = this.consumeToken();
            while (true) {
                if (token.type === 32 /* EOF_TOKEN */ || isEndingTokenFor(token, type)) {
                    return block;
                }
                this.reconsumeToken(token);
                block.values.push(this.consumeComponentValue());
                token = this.consumeToken();
            }
        };
        Parser.prototype.consumeFunction = function (functionToken) {
            var cssFunction = {
                name: functionToken.value,
                values: [],
                type: 18 /* FUNCTION */
            };
            while (true) {
                var token = this.consumeToken();
                if (token.type === 32 /* EOF_TOKEN */ || token.type === 3 /* RIGHT_PARENTHESIS_TOKEN */) {
                    return cssFunction;
                }
                this.reconsumeToken(token);
                cssFunction.values.push(this.consumeComponentValue());
            }
        };
        Parser.prototype.consumeToken = function () {
            var token = this._tokens.shift();
            return typeof token === 'undefined' ? EOF_TOKEN : token;
        };
        Parser.prototype.reconsumeToken = function (token) {
            this._tokens.unshift(token);
        };
        return Parser;
    }());
    var isDimensionToken = function (token) { return token.type === 15 /* DIMENSION_TOKEN */; };
    var isNumberToken = function (token) { return token.type === 17 /* NUMBER_TOKEN */; };
    var isIdentToken = function (token) { return token.type === 20 /* IDENT_TOKEN */; };
    var isStringToken = function (token) { return token.type === 0 /* STRING_TOKEN */; };
    var isIdentWithValue = function (token, value) {
        return isIdentToken(token) && token.value === value;
    };
    var nonWhiteSpace = function (token) { return token.type !== 31 /* WHITESPACE_TOKEN */; };
    var nonFunctionArgSeparator = function (token) {
        return token.type !== 31 /* WHITESPACE_TOKEN */ && token.type !== 4 /* COMMA_TOKEN */;
    };
    var parseFunctionArgs = function (tokens) {
        var args = [];
        var arg = [];
        tokens.forEach(function (token) {
            if (token.type === 4 /* COMMA_TOKEN */) {
                if (arg.length === 0) {
                    throw new Error("Error parsing function args, zero tokens for arg");
                }
                args.push(arg);
                arg = [];
                return;
            }
            if (token.type !== 31 /* WHITESPACE_TOKEN */) {
                arg.push(token);
            }
        });
        if (arg.length) {
            args.push(arg);
        }
        return args;
    };
    var isEndingTokenFor = function (token, type) {
        if (type === 11 /* LEFT_CURLY_BRACKET_TOKEN */ && token.type === 12 /* RIGHT_CURLY_BRACKET_TOKEN */) {
            return true;
        }
        if (type === 28 /* LEFT_SQUARE_BRACKET_TOKEN */ && token.type === 29 /* RIGHT_SQUARE_BRACKET_TOKEN */) {
            return true;
        }
        return type === 2 /* LEFT_PARENTHESIS_TOKEN */ && token.type === 3 /* RIGHT_PARENTHESIS_TOKEN */;
    };

    var isLength = function (token) {
        return token.type === 17 /* NUMBER_TOKEN */ || token.type === 15 /* DIMENSION_TOKEN */;
    };

    var isLengthPercentage = function (token) {
        return token.type === 16 /* PERCENTAGE_TOKEN */ || isLength(token);
    };
    var parseLengthPercentageTuple = function (tokens) {
        return tokens.length > 1 ? [tokens[0], tokens[1]] : [tokens[0]];
    };
    var ZERO_LENGTH = {
        type: 17 /* NUMBER_TOKEN */,
        number: 0,
        flags: FLAG_INTEGER
    };
    var FIFTY_PERCENT = {
        type: 16 /* PERCENTAGE_TOKEN */,
        number: 50,
        flags: FLAG_INTEGER
    };
    var HUNDRED_PERCENT = {
        type: 16 /* PERCENTAGE_TOKEN */,
        number: 100,
        flags: FLAG_INTEGER
    };
    var getAbsoluteValueForTuple = function (tuple, width, height) {
        var x = tuple[0], y = tuple[1];
        return [getAbsoluteValue(x, width), getAbsoluteValue(typeof y !== 'undefined' ? y : x, height)];
    };
    var getAbsoluteValue = function (token, parent) {
        if (token.type === 16 /* PERCENTAGE_TOKEN */) {
            return (token.number / 100) * parent;
        }
        if (isDimensionToken(token)) {
            switch (token.unit) {
                case 'rem':
                case 'em':
                    return 16 * token.number; // TODO use correct font-size
                case 'px':
                default:
                    return token.number;
            }
        }
        return token.number;
    };

    var DEG = 'deg';
    var GRAD = 'grad';
    var RAD = 'rad';
    var TURN = 'turn';
    var angle = {
        name: 'angle',
        parse: function (_context, value) {
            if (value.type === 15 /* DIMENSION_TOKEN */) {
                switch (value.unit) {
                    case DEG:
                        return (Math.PI * value.number) / 180;
                    case GRAD:
                        return (Math.PI / 200) * value.number;
                    case RAD:
                        return value.number;
                    case TURN:
                        return Math.PI * 2 * value.number;
                }
            }
            throw new Error("Unsupported angle type");
        }
    };
    var isAngle = function (value) {
        if (value.type === 15 /* DIMENSION_TOKEN */) {
            if (value.unit === DEG || value.unit === GRAD || value.unit === RAD || value.unit === TURN) {
                return true;
            }
        }
        return false;
    };
    var parseNamedSide = function (tokens) {
        var sideOrCorner = tokens
            .filter(isIdentToken)
            .map(function (ident) { return ident.value; })
            .join(' ');
        switch (sideOrCorner) {
            case 'to bottom right':
            case 'to right bottom':
            case 'left top':
            case 'top left':
                return [ZERO_LENGTH, ZERO_LENGTH];
            case 'to top':
            case 'bottom':
                return deg(0);
            case 'to bottom left':
            case 'to left bottom':
            case 'right top':
            case 'top right':
                return [ZERO_LENGTH, HUNDRED_PERCENT];
            case 'to right':
            case 'left':
                return deg(90);
            case 'to top left':
            case 'to left top':
            case 'right bottom':
            case 'bottom right':
                return [HUNDRED_PERCENT, HUNDRED_PERCENT];
            case 'to bottom':
            case 'top':
                return deg(180);
            case 'to top right':
            case 'to right top':
            case 'left bottom':
            case 'bottom left':
                return [HUNDRED_PERCENT, ZERO_LENGTH];
            case 'to left':
            case 'right':
                return deg(270);
        }
        return 0;
    };
    var deg = function (deg) { return (Math.PI * deg) / 180; };

    var color$1 = {
        name: 'color',
        parse: function (context, value) {
            if (value.type === 18 /* FUNCTION */) {
                var colorFunction = SUPPORTED_COLOR_FUNCTIONS[value.name];
                if (typeof colorFunction === 'undefined') {
                    throw new Error("Attempting to parse an unsupported color function \"" + value.name + "\"");
                }
                return colorFunction(context, value.values);
            }
            if (value.type === 5 /* HASH_TOKEN */) {
                if (value.value.length === 3) {
                    var r = value.value.substring(0, 1);
                    var g = value.value.substring(1, 2);
                    var b = value.value.substring(2, 3);
                    return pack(parseInt(r + r, 16), parseInt(g + g, 16), parseInt(b + b, 16), 1);
                }
                if (value.value.length === 4) {
                    var r = value.value.substring(0, 1);
                    var g = value.value.substring(1, 2);
                    var b = value.value.substring(2, 3);
                    var a = value.value.substring(3, 4);
                    return pack(parseInt(r + r, 16), parseInt(g + g, 16), parseInt(b + b, 16), parseInt(a + a, 16) / 255);
                }
                if (value.value.length === 6) {
                    var r = value.value.substring(0, 2);
                    var g = value.value.substring(2, 4);
                    var b = value.value.substring(4, 6);
                    return pack(parseInt(r, 16), parseInt(g, 16), parseInt(b, 16), 1);
                }
                if (value.value.length === 8) {
                    var r = value.value.substring(0, 2);
                    var g = value.value.substring(2, 4);
                    var b = value.value.substring(4, 6);
                    var a = value.value.substring(6, 8);
                    return pack(parseInt(r, 16), parseInt(g, 16), parseInt(b, 16), parseInt(a, 16) / 255);
                }
            }
            if (value.type === 20 /* IDENT_TOKEN */) {
                var namedColor = COLORS[value.value.toUpperCase()];
                if (typeof namedColor !== 'undefined') {
                    return namedColor;
                }
            }
            return COLORS.TRANSPARENT;
        }
    };
    var isTransparent = function (color) { return (0xff & color) === 0; };
    var asString = function (color) {
        var alpha = 0xff & color;
        var blue = 0xff & (color >> 8);
        var green = 0xff & (color >> 16);
        var red = 0xff & (color >> 24);
        return alpha < 255 ? "rgba(" + red + "," + green + "," + blue + "," + alpha / 255 + ")" : "rgb(" + red + "," + green + "," + blue + ")";
    };
    var pack = function (r, g, b, a) {
        return ((r << 24) | (g << 16) | (b << 8) | (Math.round(a * 255) << 0)) >>> 0;
    };
    var getTokenColorValue = function (token, i) {
        if (token.type === 17 /* NUMBER_TOKEN */) {
            return token.number;
        }
        if (token.type === 16 /* PERCENTAGE_TOKEN */) {
            var max = i === 3 ? 1 : 255;
            return i === 3 ? (token.number / 100) * max : Math.round((token.number / 100) * max);
        }
        return 0;
    };
    var rgb = function (_context, args) {
        var tokens = args.filter(nonFunctionArgSeparator);
        if (tokens.length === 3) {
            var _a = tokens.map(getTokenColorValue), r = _a[0], g = _a[1], b = _a[2];
            return pack(r, g, b, 1);
        }
        if (tokens.length === 4) {
            var _b = tokens.map(getTokenColorValue), r = _b[0], g = _b[1], b = _b[2], a = _b[3];
            return pack(r, g, b, a);
        }
        return 0;
    };
    function hue2rgb(t1, t2, hue) {
        if (hue < 0) {
            hue += 1;
        }
        if (hue >= 1) {
            hue -= 1;
        }
        if (hue < 1 / 6) {
            return (t2 - t1) * hue * 6 + t1;
        }
        else if (hue < 1 / 2) {
            return t2;
        }
        else if (hue < 2 / 3) {
            return (t2 - t1) * 6 * (2 / 3 - hue) + t1;
        }
        else {
            return t1;
        }
    }
    var hsl = function (context, args) {
        var tokens = args.filter(nonFunctionArgSeparator);
        var hue = tokens[0], saturation = tokens[1], lightness = tokens[2], alpha = tokens[3];
        var h = (hue.type === 17 /* NUMBER_TOKEN */ ? deg(hue.number) : angle.parse(context, hue)) / (Math.PI * 2);
        var s = isLengthPercentage(saturation) ? saturation.number / 100 : 0;
        var l = isLengthPercentage(lightness) ? lightness.number / 100 : 0;
        var a = typeof alpha !== 'undefined' && isLengthPercentage(alpha) ? getAbsoluteValue(alpha, 1) : 1;
        if (s === 0) {
            return pack(l * 255, l * 255, l * 255, 1);
        }
        var t2 = l <= 0.5 ? l * (s + 1) : l + s - l * s;
        var t1 = l * 2 - t2;
        var r = hue2rgb(t1, t2, h + 1 / 3);
        var g = hue2rgb(t1, t2, h);
        var b = hue2rgb(t1, t2, h - 1 / 3);
        return pack(r * 255, g * 255, b * 255, a);
    };
    var SUPPORTED_COLOR_FUNCTIONS = {
        hsl: hsl,
        hsla: hsl,
        rgb: rgb,
        rgba: rgb
    };
    var parseColor = function (context, value) {
        return color$1.parse(context, Parser.create(value).parseComponentValue());
    };
    var COLORS = {
        ALICEBLUE: 0xf0f8ffff,
        ANTIQUEWHITE: 0xfaebd7ff,
        AQUA: 0x00ffffff,
        AQUAMARINE: 0x7fffd4ff,
        AZURE: 0xf0ffffff,
        BEIGE: 0xf5f5dcff,
        BISQUE: 0xffe4c4ff,
        BLACK: 0x000000ff,
        BLANCHEDALMOND: 0xffebcdff,
        BLUE: 0x0000ffff,
        BLUEVIOLET: 0x8a2be2ff,
        BROWN: 0xa52a2aff,
        BURLYWOOD: 0xdeb887ff,
        CADETBLUE: 0x5f9ea0ff,
        CHARTREUSE: 0x7fff00ff,
        CHOCOLATE: 0xd2691eff,
        CORAL: 0xff7f50ff,
        CORNFLOWERBLUE: 0x6495edff,
        CORNSILK: 0xfff8dcff,
        CRIMSON: 0xdc143cff,
        CYAN: 0x00ffffff,
        DARKBLUE: 0x00008bff,
        DARKCYAN: 0x008b8bff,
        DARKGOLDENROD: 0xb886bbff,
        DARKGRAY: 0xa9a9a9ff,
        DARKGREEN: 0x006400ff,
        DARKGREY: 0xa9a9a9ff,
        DARKKHAKI: 0xbdb76bff,
        DARKMAGENTA: 0x8b008bff,
        DARKOLIVEGREEN: 0x556b2fff,
        DARKORANGE: 0xff8c00ff,
        DARKORCHID: 0x9932ccff,
        DARKRED: 0x8b0000ff,
        DARKSALMON: 0xe9967aff,
        DARKSEAGREEN: 0x8fbc8fff,
        DARKSLATEBLUE: 0x483d8bff,
        DARKSLATEGRAY: 0x2f4f4fff,
        DARKSLATEGREY: 0x2f4f4fff,
        DARKTURQUOISE: 0x00ced1ff,
        DARKVIOLET: 0x9400d3ff,
        DEEPPINK: 0xff1493ff,
        DEEPSKYBLUE: 0x00bfffff,
        DIMGRAY: 0x696969ff,
        DIMGREY: 0x696969ff,
        DODGERBLUE: 0x1e90ffff,
        FIREBRICK: 0xb22222ff,
        FLORALWHITE: 0xfffaf0ff,
        FORESTGREEN: 0x228b22ff,
        FUCHSIA: 0xff00ffff,
        GAINSBORO: 0xdcdcdcff,
        GHOSTWHITE: 0xf8f8ffff,
        GOLD: 0xffd700ff,
        GOLDENROD: 0xdaa520ff,
        GRAY: 0x808080ff,
        GREEN: 0x008000ff,
        GREENYELLOW: 0xadff2fff,
        GREY: 0x808080ff,
        HONEYDEW: 0xf0fff0ff,
        HOTPINK: 0xff69b4ff,
        INDIANRED: 0xcd5c5cff,
        INDIGO: 0x4b0082ff,
        IVORY: 0xfffff0ff,
        KHAKI: 0xf0e68cff,
        LAVENDER: 0xe6e6faff,
        LAVENDERBLUSH: 0xfff0f5ff,
        LAWNGREEN: 0x7cfc00ff,
        LEMONCHIFFON: 0xfffacdff,
        LIGHTBLUE: 0xadd8e6ff,
        LIGHTCORAL: 0xf08080ff,
        LIGHTCYAN: 0xe0ffffff,
        LIGHTGOLDENRODYELLOW: 0xfafad2ff,
        LIGHTGRAY: 0xd3d3d3ff,
        LIGHTGREEN: 0x90ee90ff,
        LIGHTGREY: 0xd3d3d3ff,
        LIGHTPINK: 0xffb6c1ff,
        LIGHTSALMON: 0xffa07aff,
        LIGHTSEAGREEN: 0x20b2aaff,
        LIGHTSKYBLUE: 0x87cefaff,
        LIGHTSLATEGRAY: 0x778899ff,
        LIGHTSLATEGREY: 0x778899ff,
        LIGHTSTEELBLUE: 0xb0c4deff,
        LIGHTYELLOW: 0xffffe0ff,
        LIME: 0x00ff00ff,
        LIMEGREEN: 0x32cd32ff,
        LINEN: 0xfaf0e6ff,
        MAGENTA: 0xff00ffff,
        MAROON: 0x800000ff,
        MEDIUMAQUAMARINE: 0x66cdaaff,
        MEDIUMBLUE: 0x0000cdff,
        MEDIUMORCHID: 0xba55d3ff,
        MEDIUMPURPLE: 0x9370dbff,
        MEDIUMSEAGREEN: 0x3cb371ff,
        MEDIUMSLATEBLUE: 0x7b68eeff,
        MEDIUMSPRINGGREEN: 0x00fa9aff,
        MEDIUMTURQUOISE: 0x48d1ccff,
        MEDIUMVIOLETRED: 0xc71585ff,
        MIDNIGHTBLUE: 0x191970ff,
        MINTCREAM: 0xf5fffaff,
        MISTYROSE: 0xffe4e1ff,
        MOCCASIN: 0xffe4b5ff,
        NAVAJOWHITE: 0xffdeadff,
        NAVY: 0x000080ff,
        OLDLACE: 0xfdf5e6ff,
        OLIVE: 0x808000ff,
        OLIVEDRAB: 0x6b8e23ff,
        ORANGE: 0xffa500ff,
        ORANGERED: 0xff4500ff,
        ORCHID: 0xda70d6ff,
        PALEGOLDENROD: 0xeee8aaff,
        PALEGREEN: 0x98fb98ff,
        PALETURQUOISE: 0xafeeeeff,
        PALEVIOLETRED: 0xdb7093ff,
        PAPAYAWHIP: 0xffefd5ff,
        PEACHPUFF: 0xffdab9ff,
        PERU: 0xcd853fff,
        PINK: 0xffc0cbff,
        PLUM: 0xdda0ddff,
        POWDERBLUE: 0xb0e0e6ff,
        PURPLE: 0x800080ff,
        REBECCAPURPLE: 0x663399ff,
        RED: 0xff0000ff,
        ROSYBROWN: 0xbc8f8fff,
        ROYALBLUE: 0x4169e1ff,
        SADDLEBROWN: 0x8b4513ff,
        SALMON: 0xfa8072ff,
        SANDYBROWN: 0xf4a460ff,
        SEAGREEN: 0x2e8b57ff,
        SEASHELL: 0xfff5eeff,
        SIENNA: 0xa0522dff,
        SILVER: 0xc0c0c0ff,
        SKYBLUE: 0x87ceebff,
        SLATEBLUE: 0x6a5acdff,
        SLATEGRAY: 0x708090ff,
        SLATEGREY: 0x708090ff,
        SNOW: 0xfffafaff,
        SPRINGGREEN: 0x00ff7fff,
        STEELBLUE: 0x4682b4ff,
        TAN: 0xd2b48cff,
        TEAL: 0x008080ff,
        THISTLE: 0xd8bfd8ff,
        TOMATO: 0xff6347ff,
        TRANSPARENT: 0x00000000,
        TURQUOISE: 0x40e0d0ff,
        VIOLET: 0xee82eeff,
        WHEAT: 0xf5deb3ff,
        WHITE: 0xffffffff,
        WHITESMOKE: 0xf5f5f5ff,
        YELLOW: 0xffff00ff,
        YELLOWGREEN: 0x9acd32ff
    };

    var backgroundClip = {
        name: 'background-clip',
        initialValue: 'border-box',
        prefix: false,
        type: 1 /* LIST */,
        parse: function (_context, tokens) {
            return tokens.map(function (token) {
                if (isIdentToken(token)) {
                    switch (token.value) {
                        case 'padding-box':
                            return 1 /* PADDING_BOX */;
                        case 'content-box':
                            return 2 /* CONTENT_BOX */;
                    }
                }
                return 0 /* BORDER_BOX */;
            });
        }
    };

    var backgroundColor = {
        name: "background-color",
        initialValue: 'transparent',
        prefix: false,
        type: 3 /* TYPE_VALUE */,
        format: 'color'
    };

    var parseColorStop = function (context, args) {
        var color = color$1.parse(context, args[0]);
        var stop = args[1];
        return stop && isLengthPercentage(stop) ? { color: color, stop: stop } : { color: color, stop: null };
    };
    var processColorStops = function (stops, lineLength) {
        var first = stops[0];
        var last = stops[stops.length - 1];
        if (first.stop === null) {
            first.stop = ZERO_LENGTH;
        }
        if (last.stop === null) {
            last.stop = HUNDRED_PERCENT;
        }
        var processStops = [];
        var previous = 0;
        for (var i = 0; i < stops.length; i++) {
            var stop_1 = stops[i].stop;
            if (stop_1 !== null) {
                var absoluteValue = getAbsoluteValue(stop_1, lineLength);
                if (absoluteValue > previous) {
                    processStops.push(absoluteValue);
                }
                else {
                    processStops.push(previous);
                }
                previous = absoluteValue;
            }
            else {
                processStops.push(null);
            }
        }
        var gapBegin = null;
        for (var i = 0; i < processStops.length; i++) {
            var stop_2 = processStops[i];
            if (stop_2 === null) {
                if (gapBegin === null) {
                    gapBegin = i;
                }
            }
            else if (gapBegin !== null) {
                var gapLength = i - gapBegin;
                var beforeGap = processStops[gapBegin - 1];
                var gapValue = (stop_2 - beforeGap) / (gapLength + 1);
                for (var g = 1; g <= gapLength; g++) {
                    processStops[gapBegin + g - 1] = gapValue * g;
                }
                gapBegin = null;
            }
        }
        return stops.map(function (_a, i) {
            var color = _a.color;
            return { color: color, stop: Math.max(Math.min(1, processStops[i] / lineLength), 0) };
        });
    };
    var getAngleFromCorner = function (corner, width, height) {
        var centerX = width / 2;
        var centerY = height / 2;
        var x = getAbsoluteValue(corner[0], width) - centerX;
        var y = centerY - getAbsoluteValue(corner[1], height);
        return (Math.atan2(y, x) + Math.PI * 2) % (Math.PI * 2);
    };
    var calculateGradientDirection = function (angle, width, height) {
        var radian = typeof angle === 'number' ? angle : getAngleFromCorner(angle, width, height);
        var lineLength = Math.abs(width * Math.sin(radian)) + Math.abs(height * Math.cos(radian));
        var halfWidth = width / 2;
        var halfHeight = height / 2;
        var halfLineLength = lineLength / 2;
        var yDiff = Math.sin(radian - Math.PI / 2) * halfLineLength;
        var xDiff = Math.cos(radian - Math.PI / 2) * halfLineLength;
        return [lineLength, halfWidth - xDiff, halfWidth + xDiff, halfHeight - yDiff, halfHeight + yDiff];
    };
    var distance = function (a, b) { return Math.sqrt(a * a + b * b); };
    var findCorner = function (width, height, x, y, closest) {
        var corners = [
            [0, 0],
            [0, height],
            [width, 0],
            [width, height]
        ];
        return corners.reduce(function (stat, corner) {
            var cx = corner[0], cy = corner[1];
            var d = distance(x - cx, y - cy);
            if (closest ? d < stat.optimumDistance : d > stat.optimumDistance) {
                return {
                    optimumCorner: corner,
                    optimumDistance: d
                };
            }
            return stat;
        }, {
            optimumDistance: closest ? Infinity : -Infinity,
            optimumCorner: null
        }).optimumCorner;
    };
    var calculateRadius = function (gradient, x, y, width, height) {
        var rx = 0;
        var ry = 0;
        switch (gradient.size) {
            case 0 /* CLOSEST_SIDE */:
                // The ending shape is sized so that that it exactly meets the side of the gradient box closest to the gradient’s center.
                // If the shape is an ellipse, it exactly meets the closest side in each dimension.
                if (gradient.shape === 0 /* CIRCLE */) {
                    rx = ry = Math.min(Math.abs(x), Math.abs(x - width), Math.abs(y), Math.abs(y - height));
                }
                else if (gradient.shape === 1 /* ELLIPSE */) {
                    rx = Math.min(Math.abs(x), Math.abs(x - width));
                    ry = Math.min(Math.abs(y), Math.abs(y - height));
                }
                break;
            case 2 /* CLOSEST_CORNER */:
                // The ending shape is sized so that that it passes through the corner of the gradient box closest to the gradient’s center.
                // If the shape is an ellipse, the ending shape is given the same aspect-ratio it would have if closest-side were specified.
                if (gradient.shape === 0 /* CIRCLE */) {
                    rx = ry = Math.min(distance(x, y), distance(x, y - height), distance(x - width, y), distance(x - width, y - height));
                }
                else if (gradient.shape === 1 /* ELLIPSE */) {
                    // Compute the ratio ry/rx (which is to be the same as for "closest-side")
                    var c = Math.min(Math.abs(y), Math.abs(y - height)) / Math.min(Math.abs(x), Math.abs(x - width));
                    var _a = findCorner(width, height, x, y, true), cx = _a[0], cy = _a[1];
                    rx = distance(cx - x, (cy - y) / c);
                    ry = c * rx;
                }
                break;
            case 1 /* FARTHEST_SIDE */:
                // Same as closest-side, except the ending shape is sized based on the farthest side(s)
                if (gradient.shape === 0 /* CIRCLE */) {
                    rx = ry = Math.max(Math.abs(x), Math.abs(x - width), Math.abs(y), Math.abs(y - height));
                }
                else if (gradient.shape === 1 /* ELLIPSE */) {
                    rx = Math.max(Math.abs(x), Math.abs(x - width));
                    ry = Math.max(Math.abs(y), Math.abs(y - height));
                }
                break;
            case 3 /* FARTHEST_CORNER */:
                // Same as closest-corner, except the ending shape is sized based on the farthest corner.
                // If the shape is an ellipse, the ending shape is given the same aspect ratio it would have if farthest-side were specified.
                if (gradient.shape === 0 /* CIRCLE */) {
                    rx = ry = Math.max(distance(x, y), distance(x, y - height), distance(x - width, y), distance(x - width, y - height));
                }
                else if (gradient.shape === 1 /* ELLIPSE */) {
                    // Compute the ratio ry/rx (which is to be the same as for "farthest-side")
                    var c = Math.max(Math.abs(y), Math.abs(y - height)) / Math.max(Math.abs(x), Math.abs(x - width));
                    var _b = findCorner(width, height, x, y, false), cx = _b[0], cy = _b[1];
                    rx = distance(cx - x, (cy - y) / c);
                    ry = c * rx;
                }
                break;
        }
        if (Array.isArray(gradient.size)) {
            rx = getAbsoluteValue(gradient.size[0], width);
            ry = gradient.size.length === 2 ? getAbsoluteValue(gradient.size[1], height) : rx;
        }
        return [rx, ry];
    };

    var linearGradient = function (context, tokens) {
        var angle$1 = deg(180);
        var stops = [];
        parseFunctionArgs(tokens).forEach(function (arg, i) {
            if (i === 0) {
                var firstToken = arg[0];
                if (firstToken.type === 20 /* IDENT_TOKEN */ && firstToken.value === 'to') {
                    angle$1 = parseNamedSide(arg);
                    return;
                }
                else if (isAngle(firstToken)) {
                    angle$1 = angle.parse(context, firstToken);
                    return;
                }
            }
            var colorStop = parseColorStop(context, arg);
            stops.push(colorStop);
        });
        return { angle: angle$1, stops: stops, type: 1 /* LINEAR_GRADIENT */ };
    };

    var prefixLinearGradient = function (context, tokens) {
        var angle$1 = deg(180);
        var stops = [];
        parseFunctionArgs(tokens).forEach(function (arg, i) {
            if (i === 0) {
                var firstToken = arg[0];
                if (firstToken.type === 20 /* IDENT_TOKEN */ &&
                    ['top', 'left', 'right', 'bottom'].indexOf(firstToken.value) !== -1) {
                    angle$1 = parseNamedSide(arg);
                    return;
                }
                else if (isAngle(firstToken)) {
                    angle$1 = (angle.parse(context, firstToken) + deg(270)) % deg(360);
                    return;
                }
            }
            var colorStop = parseColorStop(context, arg);
            stops.push(colorStop);
        });
        return {
            angle: angle$1,
            stops: stops,
            type: 1 /* LINEAR_GRADIENT */
        };
    };

    var webkitGradient = function (context, tokens) {
        var angle = deg(180);
        var stops = [];
        var type = 1 /* LINEAR_GRADIENT */;
        var shape = 0 /* CIRCLE */;
        var size = 3 /* FARTHEST_CORNER */;
        var position = [];
        parseFunctionArgs(tokens).forEach(function (arg, i) {
            var firstToken = arg[0];
            if (i === 0) {
                if (isIdentToken(firstToken) && firstToken.value === 'linear') {
                    type = 1 /* LINEAR_GRADIENT */;
                    return;
                }
                else if (isIdentToken(firstToken) && firstToken.value === 'radial') {
                    type = 2 /* RADIAL_GRADIENT */;
                    return;
                }
            }
            if (firstToken.type === 18 /* FUNCTION */) {
                if (firstToken.name === 'from') {
                    var color = color$1.parse(context, firstToken.values[0]);
                    stops.push({ stop: ZERO_LENGTH, color: color });
                }
                else if (firstToken.name === 'to') {
                    var color = color$1.parse(context, firstToken.values[0]);
                    stops.push({ stop: HUNDRED_PERCENT, color: color });
                }
                else if (firstToken.name === 'color-stop') {
                    var values = firstToken.values.filter(nonFunctionArgSeparator);
                    if (values.length === 2) {
                        var color = color$1.parse(context, values[1]);
                        var stop_1 = values[0];
                        if (isNumberToken(stop_1)) {
                            stops.push({
                                stop: { type: 16 /* PERCENTAGE_TOKEN */, number: stop_1.number * 100, flags: stop_1.flags },
                                color: color
                            });
                        }
                    }
                }
            }
        });
        return type === 1 /* LINEAR_GRADIENT */
            ? {
                angle: (angle + deg(180)) % deg(360),
                stops: stops,
                type: type
            }
            : { size: size, shape: shape, stops: stops, position: position, type: type };
    };

    var CLOSEST_SIDE = 'closest-side';
    var FARTHEST_SIDE = 'farthest-side';
    var CLOSEST_CORNER = 'closest-corner';
    var FARTHEST_CORNER = 'farthest-corner';
    var CIRCLE = 'circle';
    var ELLIPSE = 'ellipse';
    var COVER = 'cover';
    var CONTAIN = 'contain';
    var radialGradient = function (context, tokens) {
        var shape = 0 /* CIRCLE */;
        var size = 3 /* FARTHEST_CORNER */;
        var stops = [];
        var position = [];
        parseFunctionArgs(tokens).forEach(function (arg, i) {
            var isColorStop = true;
            if (i === 0) {
                var isAtPosition_1 = false;
                isColorStop = arg.reduce(function (acc, token) {
                    if (isAtPosition_1) {
                        if (isIdentToken(token)) {
                            switch (token.value) {
                                case 'center':
                                    position.push(FIFTY_PERCENT);
                                    return acc;
                                case 'top':
                                case 'left':
                                    position.push(ZERO_LENGTH);
                                    return acc;
                                case 'right':
                                case 'bottom':
                                    position.push(HUNDRED_PERCENT);
                                    return acc;
                            }
                        }
                        else if (isLengthPercentage(token) || isLength(token)) {
                            position.push(token);
                        }
                    }
                    else if (isIdentToken(token)) {
                        switch (token.value) {
                            case CIRCLE:
                                shape = 0 /* CIRCLE */;
                                return false;
                            case ELLIPSE:
                                shape = 1 /* ELLIPSE */;
                                return false;
                            case 'at':
                                isAtPosition_1 = true;
                                return false;
                            case CLOSEST_SIDE:
                                size = 0 /* CLOSEST_SIDE */;
                                return false;
                            case COVER:
                            case FARTHEST_SIDE:
                                size = 1 /* FARTHEST_SIDE */;
                                return false;
                            case CONTAIN:
                            case CLOSEST_CORNER:
                                size = 2 /* CLOSEST_CORNER */;
                                return false;
                            case FARTHEST_CORNER:
                                size = 3 /* FARTHEST_CORNER */;
                                return false;
                        }
                    }
                    else if (isLength(token) || isLengthPercentage(token)) {
                        if (!Array.isArray(size)) {
                            size = [];
                        }
                        size.push(token);
                        return false;
                    }
                    return acc;
                }, isColorStop);
            }
            if (isColorStop) {
                var colorStop = parseColorStop(context, arg);
                stops.push(colorStop);
            }
        });
        return { size: size, shape: shape, stops: stops, position: position, type: 2 /* RADIAL_GRADIENT */ };
    };

    var prefixRadialGradient = function (context, tokens) {
        var shape = 0 /* CIRCLE */;
        var size = 3 /* FARTHEST_CORNER */;
        var stops = [];
        var position = [];
        parseFunctionArgs(tokens).forEach(function (arg, i) {
            var isColorStop = true;
            if (i === 0) {
                isColorStop = arg.reduce(function (acc, token) {
                    if (isIdentToken(token)) {
                        switch (token.value) {
                            case 'center':
                                position.push(FIFTY_PERCENT);
                                return false;
                            case 'top':
                            case 'left':
                                position.push(ZERO_LENGTH);
                                return false;
                            case 'right':
                            case 'bottom':
                                position.push(HUNDRED_PERCENT);
                                return false;
                        }
                    }
                    else if (isLengthPercentage(token) || isLength(token)) {
                        position.push(token);
                        return false;
                    }
                    return acc;
                }, isColorStop);
            }
            else if (i === 1) {
                isColorStop = arg.reduce(function (acc, token) {
                    if (isIdentToken(token)) {
                        switch (token.value) {
                            case CIRCLE:
                                shape = 0 /* CIRCLE */;
                                return false;
                            case ELLIPSE:
                                shape = 1 /* ELLIPSE */;
                                return false;
                            case CONTAIN:
                            case CLOSEST_SIDE:
                                size = 0 /* CLOSEST_SIDE */;
                                return false;
                            case FARTHEST_SIDE:
                                size = 1 /* FARTHEST_SIDE */;
                                return false;
                            case CLOSEST_CORNER:
                                size = 2 /* CLOSEST_CORNER */;
                                return false;
                            case COVER:
                            case FARTHEST_CORNER:
                                size = 3 /* FARTHEST_CORNER */;
                                return false;
                        }
                    }
                    else if (isLength(token) || isLengthPercentage(token)) {
                        if (!Array.isArray(size)) {
                            size = [];
                        }
                        size.push(token);
                        return false;
                    }
                    return acc;
                }, isColorStop);
            }
            if (isColorStop) {
                var colorStop = parseColorStop(context, arg);
                stops.push(colorStop);
            }
        });
        return { size: size, shape: shape, stops: stops, position: position, type: 2 /* RADIAL_GRADIENT */ };
    };

    var isLinearGradient = function (background) {
        return background.type === 1 /* LINEAR_GRADIENT */;
    };
    var isRadialGradient = function (background) {
        return background.type === 2 /* RADIAL_GRADIENT */;
    };
    var image = {
        name: 'image',
        parse: function (context, value) {
            if (value.type === 22 /* URL_TOKEN */) {
                var image_1 = { url: value.value, type: 0 /* URL */ };
                context.cache.addImage(value.value);
                return image_1;
            }
            if (value.type === 18 /* FUNCTION */) {
                var imageFunction = SUPPORTED_IMAGE_FUNCTIONS[value.name];
                if (typeof imageFunction === 'undefined') {
                    throw new Error("Attempting to parse an unsupported image function \"" + value.name + "\"");
                }
                return imageFunction(context, value.values);
            }
            throw new Error("Unsupported image type " + value.type);
        }
    };
    function isSupportedImage(value) {
        return (!(value.type === 20 /* IDENT_TOKEN */ && value.value === 'none') &&
            (value.type !== 18 /* FUNCTION */ || !!SUPPORTED_IMAGE_FUNCTIONS[value.name]));
    }
    var SUPPORTED_IMAGE_FUNCTIONS = {
        'linear-gradient': linearGradient,
        '-moz-linear-gradient': prefixLinearGradient,
        '-ms-linear-gradient': prefixLinearGradient,
        '-o-linear-gradient': prefixLinearGradient,
        '-webkit-linear-gradient': prefixLinearGradient,
        'radial-gradient': radialGradient,
        '-moz-radial-gradient': prefixRadialGradient,
        '-ms-radial-gradient': prefixRadialGradient,
        '-o-radial-gradient': prefixRadialGradient,
        '-webkit-radial-gradient': prefixRadialGradient,
        '-webkit-gradient': webkitGradient
    };

    var backgroundImage = {
        name: 'background-image',
        initialValue: 'none',
        type: 1 /* LIST */,
        prefix: false,
        parse: function (context, tokens) {
            if (tokens.length === 0) {
                return [];
            }
            var first = tokens[0];
            if (first.type === 20 /* IDENT_TOKEN */ && first.value === 'none') {
                return [];
            }
            return tokens
                .filter(function (value) { return nonFunctionArgSeparator(value) && isSupportedImage(value); })
                .map(function (value) { return image.parse(context, value); });
        }
    };

    var backgroundOrigin = {
        name: 'background-origin',
        initialValue: 'border-box',
        prefix: false,
        type: 1 /* LIST */,
        parse: function (_context, tokens) {
            return tokens.map(function (token) {
                if (isIdentToken(token)) {
                    switch (token.value) {
                        case 'padding-box':
                            return 1 /* PADDING_BOX */;
                        case 'content-box':
                            return 2 /* CONTENT_BOX */;
                    }
                }
                return 0 /* BORDER_BOX */;
            });
        }
    };

    var backgroundPosition = {
        name: 'background-position',
        initialValue: '0% 0%',
        type: 1 /* LIST */,
        prefix: false,
        parse: function (_context, tokens) {
            return parseFunctionArgs(tokens)
                .map(function (values) { return values.filter(isLengthPercentage); })
                .map(parseLengthPercentageTuple);
        }
    };

    var backgroundRepeat = {
        name: 'background-repeat',
        initialValue: 'repeat',
        prefix: false,
        type: 1 /* LIST */,
        parse: function (_context, tokens) {
            return parseFunctionArgs(tokens)
                .map(function (values) {
                return values
                    .filter(isIdentToken)
                    .map(function (token) { return token.value; })
                    .join(' ');
            })
                .map(parseBackgroundRepeat);
        }
    };
    var parseBackgroundRepeat = function (value) {
        switch (value) {
            case 'no-repeat':
                return 1 /* NO_REPEAT */;
            case 'repeat-x':
            case 'repeat no-repeat':
                return 2 /* REPEAT_X */;
            case 'repeat-y':
            case 'no-repeat repeat':
                return 3 /* REPEAT_Y */;
            case 'repeat':
            default:
                return 0 /* REPEAT */;
        }
    };

    var BACKGROUND_SIZE;
    (function (BACKGROUND_SIZE) {
        BACKGROUND_SIZE["AUTO"] = "auto";
        BACKGROUND_SIZE["CONTAIN"] = "contain";
        BACKGROUND_SIZE["COVER"] = "cover";
    })(BACKGROUND_SIZE || (BACKGROUND_SIZE = {}));
    var backgroundSize = {
        name: 'background-size',
        initialValue: '0',
        prefix: false,
        type: 1 /* LIST */,
        parse: function (_context, tokens) {
            return parseFunctionArgs(tokens).map(function (values) { return values.filter(isBackgroundSizeInfoToken); });
        }
    };
    var isBackgroundSizeInfoToken = function (value) {
        return isIdentToken(value) || isLengthPercentage(value);
    };

    var borderColorForSide = function (side) { return ({
        name: "border-" + side + "-color",
        initialValue: 'transparent',
        prefix: false,
        type: 3 /* TYPE_VALUE */,
        format: 'color'
    }); };
    var borderTopColor = borderColorForSide('top');
    var borderRightColor = borderColorForSide('right');
    var borderBottomColor = borderColorForSide('bottom');
    var borderLeftColor = borderColorForSide('left');

    var borderRadiusForSide = function (side) { return ({
        name: "border-radius-" + side,
        initialValue: '0 0',
        prefix: false,
        type: 1 /* LIST */,
        parse: function (_context, tokens) {
            return parseLengthPercentageTuple(tokens.filter(isLengthPercentage));
        }
    }); };
    var borderTopLeftRadius = borderRadiusForSide('top-left');
    var borderTopRightRadius = borderRadiusForSide('top-right');
    var borderBottomRightRadius = borderRadiusForSide('bottom-right');
    var borderBottomLeftRadius = borderRadiusForSide('bottom-left');

    var borderStyleForSide = function (side) { return ({
        name: "border-" + side + "-style",
        initialValue: 'solid',
        prefix: false,
        type: 2 /* IDENT_VALUE */,
        parse: function (_context, style) {
            switch (style) {
                case 'none':
                    return 0 /* NONE */;
                case 'dashed':
                    return 2 /* DASHED */;
                case 'dotted':
                    return 3 /* DOTTED */;
                case 'double':
                    return 4 /* DOUBLE */;
            }
            return 1 /* SOLID */;
        }
    }); };
    var borderTopStyle = borderStyleForSide('top');
    var borderRightStyle = borderStyleForSide('right');
    var borderBottomStyle = borderStyleForSide('bottom');
    var borderLeftStyle = borderStyleForSide('left');

    var borderWidthForSide = function (side) { return ({
        name: "border-" + side + "-width",
        initialValue: '0',
        type: 0 /* VALUE */,
        prefix: false,
        parse: function (_context, token) {
            if (isDimensionToken(token)) {
                return token.number;
            }
            return 0;
        }
    }); };
    var borderTopWidth = borderWidthForSide('top');
    var borderRightWidth = borderWidthForSide('right');
    var borderBottomWidth = borderWidthForSide('bottom');
    var borderLeftWidth = borderWidthForSide('left');

    var color = {
        name: "color",
        initialValue: 'transparent',
        prefix: false,
        type: 3 /* TYPE_VALUE */,
        format: 'color'
    };

    var direction = {
        name: 'direction',
        initialValue: 'ltr',
        prefix: false,
        type: 2 /* IDENT_VALUE */,
        parse: function (_context, direction) {
            switch (direction) {
                case 'rtl':
                    return 1 /* RTL */;
                case 'ltr':
                default:
                    return 0 /* LTR */;
            }
        }
    };

    var display = {
        name: 'display',
        initialValue: 'inline-block',
        prefix: false,
        type: 1 /* LIST */,
        parse: function (_context, tokens) {
            return tokens.filter(isIdentToken).reduce(function (bit, token) {
                return bit | parseDisplayValue(token.value);
            }, 0 /* NONE */);
        }
    };
    var parseDisplayValue = function (display) {
        switch (display) {
            case 'block':
            case '-webkit-box':
                return 2 /* BLOCK */;
            case 'inline':
                return 4 /* INLINE */;
            case 'run-in':
                return 8 /* RUN_IN */;
            case 'flow':
                return 16 /* FLOW */;
            case 'flow-root':
                return 32 /* FLOW_ROOT */;
            case 'table':
                return 64 /* TABLE */;
            case 'flex':
            case '-webkit-flex':
                return 128 /* FLEX */;
            case 'grid':
            case '-ms-grid':
                return 256 /* GRID */;
            case 'ruby':
                return 512 /* RUBY */;
            case 'subgrid':
                return 1024 /* SUBGRID */;
            case 'list-item':
                return 2048 /* LIST_ITEM */;
            case 'table-row-group':
                return 4096 /* TABLE_ROW_GROUP */;
            case 'table-header-group':
                return 8192 /* TABLE_HEADER_GROUP */;
            case 'table-footer-group':
                return 16384 /* TABLE_FOOTER_GROUP */;
            case 'table-row':
                return 32768 /* TABLE_ROW */;
            case 'table-cell':
                return 65536 /* TABLE_CELL */;
            case 'table-column-group':
                return 131072 /* TABLE_COLUMN_GROUP */;
            case 'table-column':
                return 262144 /* TABLE_COLUMN */;
            case 'table-caption':
                return 524288 /* TABLE_CAPTION */;
            case 'ruby-base':
                return 1048576 /* RUBY_BASE */;
            case 'ruby-text':
                return 2097152 /* RUBY_TEXT */;
            case 'ruby-base-container':
                return 4194304 /* RUBY_BASE_CONTAINER */;
            case 'ruby-text-container':
                return 8388608 /* RUBY_TEXT_CONTAINER */;
            case 'contents':
                return 16777216 /* CONTENTS */;
            case 'inline-block':
                return 33554432 /* INLINE_BLOCK */;
            case 'inline-list-item':
                return 67108864 /* INLINE_LIST_ITEM */;
            case 'inline-table':
                return 134217728 /* INLINE_TABLE */;
            case 'inline-flex':
                return 268435456 /* INLINE_FLEX */;
            case 'inline-grid':
                return 536870912 /* INLINE_GRID */;
        }
        return 0 /* NONE */;
    };

    var float = {
        name: 'float',
        initialValue: 'none',
        prefix: false,
        type: 2 /* IDENT_VALUE */,
        parse: function (_context, float) {
            switch (float) {
                case 'left':
                    return 1 /* LEFT */;
                case 'right':
                    return 2 /* RIGHT */;
                case 'inline-start':
                    return 3 /* INLINE_START */;
                case 'inline-end':
                    return 4 /* INLINE_END */;
            }
            return 0 /* NONE */;
        }
    };

    var letterSpacing = {
        name: 'letter-spacing',
        initialValue: '0',
        prefix: false,
        type: 0 /* VALUE */,
        parse: function (_context, token) {
            if (token.type === 20 /* IDENT_TOKEN */ && token.value === 'normal') {
                return 0;
            }
            if (token.type === 17 /* NUMBER_TOKEN */) {
                return token.number;
            }
            if (token.type === 15 /* DIMENSION_TOKEN */) {
                return token.number;
            }
            return 0;
        }
    };

    var LINE_BREAK;
    (function (LINE_BREAK) {
        LINE_BREAK["NORMAL"] = "normal";
        LINE_BREAK["STRICT"] = "strict";
    })(LINE_BREAK || (LINE_BREAK = {}));
    var lineBreak = {
        name: 'line-break',
        initialValue: 'normal',
        prefix: false,
        type: 2 /* IDENT_VALUE */,
        parse: function (_context, lineBreak) {
            switch (lineBreak) {
                case 'strict':
                    return LINE_BREAK.STRICT;
                case 'normal':
                default:
                    return LINE_BREAK.NORMAL;
            }
        }
    };

    var lineHeight = {
        name: 'line-height',
        initialValue: 'normal',
        prefix: false,
        type: 4 /* TOKEN_VALUE */
    };
    var computeLineHeight = function (token, fontSize) {
        if (isIdentToken(token) && token.value === 'normal') {
            return 1.2 * fontSize;
        }
        else if (token.type === 17 /* NUMBER_TOKEN */) {
            return fontSize * token.number;
        }
        else if (isLengthPercentage(token)) {
            return getAbsoluteValue(token, fontSize);
        }
        return fontSize;
    };

    var listStyleImage = {
        name: 'list-style-image',
        initialValue: 'none',
        type: 0 /* VALUE */,
        prefix: false,
        parse: function (context, token) {
            if (token.type === 20 /* IDENT_TOKEN */ && token.value === 'none') {
                return null;
            }
            return image.parse(context, token);
        }
    };

    var listStylePosition = {
        name: 'list-style-position',
        initialValue: 'outside',
        prefix: false,
        type: 2 /* IDENT_VALUE */,
        parse: function (_context, position) {
            switch (position) {
                case 'inside':
                    return 0 /* INSIDE */;
                case 'outside':
                default:
                    return 1 /* OUTSIDE */;
            }
        }
    };

    var listStyleType = {
        name: 'list-style-type',
        initialValue: 'none',
        prefix: false,
        type: 2 /* IDENT_VALUE */,
        parse: function (_context, type) {
            switch (type) {
                case 'disc':
                    return 0 /* DISC */;
                case 'circle':
                    return 1 /* CIRCLE */;
                case 'square':
                    return 2 /* SQUARE */;
                case 'decimal':
                    return 3 /* DECIMAL */;
                case 'cjk-decimal':
                    return 4 /* CJK_DECIMAL */;
                case 'decimal-leading-zero':
                    return 5 /* DECIMAL_LEADING_ZERO */;
                case 'lower-roman':
                    return 6 /* LOWER_ROMAN */;
                case 'upper-roman':
                    return 7 /* UPPER_ROMAN */;
                case 'lower-greek':
                    return 8 /* LOWER_GREEK */;
                case 'lower-alpha':
                    return 9 /* LOWER_ALPHA */;
                case 'upper-alpha':
                    return 10 /* UPPER_ALPHA */;
                case 'arabic-indic':
                    return 11 /* ARABIC_INDIC */;
                case 'armenian':
                    return 12 /* ARMENIAN */;
                case 'bengali':
                    return 13 /* BENGALI */;
                case 'cambodian':
                    return 14 /* CAMBODIAN */;
                case 'cjk-earthly-branch':
                    return 15 /* CJK_EARTHLY_BRANCH */;
                case 'cjk-heavenly-stem':
                    return 16 /* CJK_HEAVENLY_STEM */;
                case 'cjk-ideographic':
                    return 17 /* CJK_IDEOGRAPHIC */;
                case 'devanagari':
                    return 18 /* DEVANAGARI */;
                case 'ethiopic-numeric':
                    return 19 /* ETHIOPIC_NUMERIC */;
                case 'georgian':
                    return 20 /* GEORGIAN */;
                case 'gujarati':
                    return 21 /* GUJARATI */;
                case 'gurmukhi':
                    return 22 /* GURMUKHI */;
                case 'hebrew':
                    return 22 /* HEBREW */;
                case 'hiragana':
                    return 23 /* HIRAGANA */;
                case 'hiragana-iroha':
                    return 24 /* HIRAGANA_IROHA */;
                case 'japanese-formal':
                    return 25 /* JAPANESE_FORMAL */;
                case 'japanese-informal':
                    return 26 /* JAPANESE_INFORMAL */;
                case 'kannada':
                    return 27 /* KANNADA */;
                case 'katakana':
                    return 28 /* KATAKANA */;
                case 'katakana-iroha':
                    return 29 /* KATAKANA_IROHA */;
                case 'khmer':
                    return 30 /* KHMER */;
                case 'korean-hangul-formal':
                    return 31 /* KOREAN_HANGUL_FORMAL */;
                case 'korean-hanja-formal':
                    return 32 /* KOREAN_HANJA_FORMAL */;
                case 'korean-hanja-informal':
                    return 33 /* KOREAN_HANJA_INFORMAL */;
                case 'lao':
                    return 34 /* LAO */;
                case 'lower-armenian':
                    return 35 /* LOWER_ARMENIAN */;
                case 'malayalam':
                    return 36 /* MALAYALAM */;
                case 'mongolian':
                    return 37 /* MONGOLIAN */;
                case 'myanmar':
                    return 38 /* MYANMAR */;
                case 'oriya':
                    return 39 /* ORIYA */;
                case 'persian':
                    return 40 /* PERSIAN */;
                case 'simp-chinese-formal':
                    return 41 /* SIMP_CHINESE_FORMAL */;
                case 'simp-chinese-informal':
                    return 42 /* SIMP_CHINESE_INFORMAL */;
                case 'tamil':
                    return 43 /* TAMIL */;
                case 'telugu':
                    return 44 /* TELUGU */;
                case 'thai':
                    return 45 /* THAI */;
                case 'tibetan':
                    return 46 /* TIBETAN */;
                case 'trad-chinese-formal':
                    return 47 /* TRAD_CHINESE_FORMAL */;
                case 'trad-chinese-informal':
                    return 48 /* TRAD_CHINESE_INFORMAL */;
                case 'upper-armenian':
                    return 49 /* UPPER_ARMENIAN */;
                case 'disclosure-open':
                    return 50 /* DISCLOSURE_OPEN */;
                case 'disclosure-closed':
                    return 51 /* DISCLOSURE_CLOSED */;
                case 'none':
                default:
                    return -1 /* NONE */;
            }
        }
    };

    var marginForSide = function (side) { return ({
        name: "margin-" + side,
        initialValue: '0',
        prefix: false,
        type: 4 /* TOKEN_VALUE */
    }); };
    var marginTop = marginForSide('top');
    var marginRight = marginForSide('right');
    var marginBottom = marginForSide('bottom');
    var marginLeft = marginForSide('left');

    var overflow = {
        name: 'overflow',
        initialValue: 'visible',
        prefix: false,
        type: 1 /* LIST */,
        parse: function (_context, tokens) {
            return tokens.filter(isIdentToken).map(function (overflow) {
                switch (overflow.value) {
                    case 'hidden':
                        return 1 /* HIDDEN */;
                    case 'scroll':
                        return 2 /* SCROLL */;
                    case 'clip':
                        return 3 /* CLIP */;
                    case 'auto':
                        return 4 /* AUTO */;
                    case 'visible':
                    default:
                        return 0 /* VISIBLE */;
                }
            });
        }
    };

    var overflowWrap = {
        name: 'overflow-wrap',
        initialValue: 'normal',
        prefix: false,
        type: 2 /* IDENT_VALUE */,
        parse: function (_context, overflow) {
            switch (overflow) {
                case 'break-word':
                    return "break-word" /* BREAK_WORD */;
                case 'normal':
                default:
                    return "normal" /* NORMAL */;
            }
        }
    };

    var paddingForSide = function (side) { return ({
        name: "padding-" + side,
        initialValue: '0',
        prefix: false,
        type: 3 /* TYPE_VALUE */,
        format: 'length-percentage'
    }); };
    var paddingTop = paddingForSide('top');
    var paddingRight = paddingForSide('right');
    var paddingBottom = paddingForSide('bottom');
    var paddingLeft = paddingForSide('left');

    var textAlign = {
        name: 'text-align',
        initialValue: 'left',
        prefix: false,
        type: 2 /* IDENT_VALUE */,
        parse: function (_context, textAlign) {
            switch (textAlign) {
                case 'right':
                    return 2 /* RIGHT */;
                case 'center':
                case 'justify':
                    return 1 /* CENTER */;
                case 'left':
                default:
                    return 0 /* LEFT */;
            }
        }
    };

    var position = {
        name: 'position',
        initialValue: 'static',
        prefix: false,
        type: 2 /* IDENT_VALUE */,
        parse: function (_context, position) {
            switch (position) {
                case 'relative':
                    return 1 /* RELATIVE */;
                case 'absolute':
                    return 2 /* ABSOLUTE */;
                case 'fixed':
                    return 3 /* FIXED */;
                case 'sticky':
                    return 4 /* STICKY */;
            }
            return 0 /* STATIC */;
        }
    };

    var textShadow = {
        name: 'text-shadow',
        initialValue: 'none',
        type: 1 /* LIST */,
        prefix: false,
        parse: function (context, tokens) {
            if (tokens.length === 1 && isIdentWithValue(tokens[0], 'none')) {
                return [];
            }
            return parseFunctionArgs(tokens).map(function (values) {
                var shadow = {
                    color: COLORS.TRANSPARENT,
                    offsetX: ZERO_LENGTH,
                    offsetY: ZERO_LENGTH,
                    blur: ZERO_LENGTH
                };
                var c = 0;
                for (var i = 0; i < values.length; i++) {
                    var token = values[i];
                    if (isLength(token)) {
                        if (c === 0) {
                            shadow.offsetX = token;
                        }
                        else if (c === 1) {
                            shadow.offsetY = token;
                        }
                        else {
                            shadow.blur = token;
                        }
                        c++;
                    }
                    else {
                        shadow.color = color$1.parse(context, token);
                    }
                }
                return shadow;
            });
        }
    };

    var textTransform = {
        name: 'text-transform',
        initialValue: 'none',
        prefix: false,
        type: 2 /* IDENT_VALUE */,
        parse: function (_context, textTransform) {
            switch (textTransform) {
                case 'uppercase':
                    return 2 /* UPPERCASE */;
                case 'lowercase':
                    return 1 /* LOWERCASE */;
                case 'capitalize':
                    return 3 /* CAPITALIZE */;
            }
            return 0 /* NONE */;
        }
    };

    var transform$1 = {
        name: 'transform',
        initialValue: 'none',
        prefix: true,
        type: 0 /* VALUE */,
        parse: function (_context, token) {
            if (token.type === 20 /* IDENT_TOKEN */ && token.value === 'none') {
                return null;
            }
            if (token.type === 18 /* FUNCTION */) {
                var transformFunction = SUPPORTED_TRANSFORM_FUNCTIONS[token.name];
                if (typeof transformFunction === 'undefined') {
                    throw new Error("Attempting to parse an unsupported transform function \"" + token.name + "\"");
                }
                return transformFunction(token.values);
            }
            return null;
        }
    };
    var matrix = function (args) {
        var values = args.filter(function (arg) { return arg.type === 17 /* NUMBER_TOKEN */; }).map(function (arg) { return arg.number; });
        return values.length === 6 ? values : null;
    };
    // doesn't support 3D transforms at the moment
    var matrix3d = function (args) {
        var values = args.filter(function (arg) { return arg.type === 17 /* NUMBER_TOKEN */; }).map(function (arg) { return arg.number; });
        var a1 = values[0], b1 = values[1]; values[2]; values[3]; var a2 = values[4], b2 = values[5]; values[6]; values[7]; values[8]; values[9]; values[10]; values[11]; var a4 = values[12], b4 = values[13]; values[14]; values[15];
        return values.length === 16 ? [a1, b1, a2, b2, a4, b4] : null;
    };
    var SUPPORTED_TRANSFORM_FUNCTIONS = {
        matrix: matrix,
        matrix3d: matrix3d
    };

    var DEFAULT_VALUE = {
        type: 16 /* PERCENTAGE_TOKEN */,
        number: 50,
        flags: FLAG_INTEGER
    };
    var DEFAULT = [DEFAULT_VALUE, DEFAULT_VALUE];
    var transformOrigin = {
        name: 'transform-origin',
        initialValue: '50% 50%',
        prefix: true,
        type: 1 /* LIST */,
        parse: function (_context, tokens) {
            var origins = tokens.filter(isLengthPercentage);
            if (origins.length !== 2) {
                return DEFAULT;
            }
            return [origins[0], origins[1]];
        }
    };

    var visibility = {
        name: 'visible',
        initialValue: 'none',
        prefix: false,
        type: 2 /* IDENT_VALUE */,
        parse: function (_context, visibility) {
            switch (visibility) {
                case 'hidden':
                    return 1 /* HIDDEN */;
                case 'collapse':
                    return 2 /* COLLAPSE */;
                case 'visible':
                default:
                    return 0 /* VISIBLE */;
            }
        }
    };

    var WORD_BREAK;
    (function (WORD_BREAK) {
        WORD_BREAK["NORMAL"] = "normal";
        WORD_BREAK["BREAK_ALL"] = "break-all";
        WORD_BREAK["KEEP_ALL"] = "keep-all";
    })(WORD_BREAK || (WORD_BREAK = {}));
    var wordBreak = {
        name: 'word-break',
        initialValue: 'normal',
        prefix: false,
        type: 2 /* IDENT_VALUE */,
        parse: function (_context, wordBreak) {
            switch (wordBreak) {
                case 'break-all':
                    return WORD_BREAK.BREAK_ALL;
                case 'keep-all':
                    return WORD_BREAK.KEEP_ALL;
                case 'normal':
                default:
                    return WORD_BREAK.NORMAL;
            }
        }
    };

    var zIndex = {
        name: 'z-index',
        initialValue: 'auto',
        prefix: false,
        type: 0 /* VALUE */,
        parse: function (_context, token) {
            if (token.type === 20 /* IDENT_TOKEN */) {
                return { auto: true, order: 0 };
            }
            if (isNumberToken(token)) {
                return { auto: false, order: token.number };
            }
            throw new Error("Invalid z-index number parsed");
        }
    };

    var time = {
        name: 'time',
        parse: function (_context, value) {
            if (value.type === 15 /* DIMENSION_TOKEN */) {
                switch (value.unit.toLowerCase()) {
                    case 's':
                        return 1000 * value.number;
                    case 'ms':
                        return value.number;
                }
            }
            throw new Error("Unsupported time type");
        }
    };

    var opacity = {
        name: 'opacity',
        initialValue: '1',
        type: 0 /* VALUE */,
        prefix: false,
        parse: function (_context, token) {
            if (isNumberToken(token)) {
                return token.number;
            }
            return 1;
        }
    };

    var textDecorationColor = {
        name: "text-decoration-color",
        initialValue: 'transparent',
        prefix: false,
        type: 3 /* TYPE_VALUE */,
        format: 'color'
    };

    var textDecorationLine = {
        name: 'text-decoration-line',
        initialValue: 'none',
        prefix: false,
        type: 1 /* LIST */,
        parse: function (_context, tokens) {
            return tokens
                .filter(isIdentToken)
                .map(function (token) {
                switch (token.value) {
                    case 'underline':
                        return 1 /* UNDERLINE */;
                    case 'overline':
                        return 2 /* OVERLINE */;
                    case 'line-through':
                        return 3 /* LINE_THROUGH */;
                    case 'none':
                        return 4 /* BLINK */;
                }
                return 0 /* NONE */;
            })
                .filter(function (line) { return line !== 0 /* NONE */; });
        }
    };

    var fontFamily = {
        name: "font-family",
        initialValue: '',
        prefix: false,
        type: 1 /* LIST */,
        parse: function (_context, tokens) {
            var accumulator = [];
            var results = [];
            tokens.forEach(function (token) {
                switch (token.type) {
                    case 20 /* IDENT_TOKEN */:
                    case 0 /* STRING_TOKEN */:
                        accumulator.push(token.value);
                        break;
                    case 17 /* NUMBER_TOKEN */:
                        accumulator.push(token.number.toString());
                        break;
                    case 4 /* COMMA_TOKEN */:
                        results.push(accumulator.join(' '));
                        accumulator.length = 0;
                        break;
                }
            });
            if (accumulator.length) {
                results.push(accumulator.join(' '));
            }
            return results.map(function (result) { return (result.indexOf(' ') === -1 ? result : "'" + result + "'"); });
        }
    };

    var fontSize = {
        name: "font-size",
        initialValue: '0',
        prefix: false,
        type: 3 /* TYPE_VALUE */,
        format: 'length'
    };

    var fontWeight = {
        name: 'font-weight',
        initialValue: 'normal',
        type: 0 /* VALUE */,
        prefix: false,
        parse: function (_context, token) {
            if (isNumberToken(token)) {
                return token.number;
            }
            if (isIdentToken(token)) {
                switch (token.value) {
                    case 'bold':
                        return 700;
                    case 'normal':
                    default:
                        return 400;
                }
            }
            return 400;
        }
    };

    var fontVariant = {
        name: 'font-variant',
        initialValue: 'none',
        type: 1 /* LIST */,
        prefix: false,
        parse: function (_context, tokens) {
            return tokens.filter(isIdentToken).map(function (token) { return token.value; });
        }
    };

    var fontStyle = {
        name: 'font-style',
        initialValue: 'normal',
        prefix: false,
        type: 2 /* IDENT_VALUE */,
        parse: function (_context, overflow) {
            switch (overflow) {
                case 'oblique':
                    return "oblique" /* OBLIQUE */;
                case 'italic':
                    return "italic" /* ITALIC */;
                case 'normal':
                default:
                    return "normal" /* NORMAL */;
            }
        }
    };

    var contains = function (bit, value) { return (bit & value) !== 0; };

    var content = {
        name: 'content',
        initialValue: 'none',
        type: 1 /* LIST */,
        prefix: false,
        parse: function (_context, tokens) {
            if (tokens.length === 0) {
                return [];
            }
            var first = tokens[0];
            if (first.type === 20 /* IDENT_TOKEN */ && first.value === 'none') {
                return [];
            }
            return tokens;
        }
    };

    var counterIncrement = {
        name: 'counter-increment',
        initialValue: 'none',
        prefix: true,
        type: 1 /* LIST */,
        parse: function (_context, tokens) {
            if (tokens.length === 0) {
                return null;
            }
            var first = tokens[0];
            if (first.type === 20 /* IDENT_TOKEN */ && first.value === 'none') {
                return null;
            }
            var increments = [];
            var filtered = tokens.filter(nonWhiteSpace);
            for (var i = 0; i < filtered.length; i++) {
                var counter = filtered[i];
                var next = filtered[i + 1];
                if (counter.type === 20 /* IDENT_TOKEN */) {
                    var increment = next && isNumberToken(next) ? next.number : 1;
                    increments.push({ counter: counter.value, increment: increment });
                }
            }
            return increments;
        }
    };

    var counterReset = {
        name: 'counter-reset',
        initialValue: 'none',
        prefix: true,
        type: 1 /* LIST */,
        parse: function (_context, tokens) {
            if (tokens.length === 0) {
                return [];
            }
            var resets = [];
            var filtered = tokens.filter(nonWhiteSpace);
            for (var i = 0; i < filtered.length; i++) {
                var counter = filtered[i];
                var next = filtered[i + 1];
                if (isIdentToken(counter) && counter.value !== 'none') {
                    var reset = next && isNumberToken(next) ? next.number : 0;
                    resets.push({ counter: counter.value, reset: reset });
                }
            }
            return resets;
        }
    };

    var duration = {
        name: 'duration',
        initialValue: '0s',
        prefix: false,
        type: 1 /* LIST */,
        parse: function (context, tokens) {
            return tokens.filter(isDimensionToken).map(function (token) { return time.parse(context, token); });
        }
    };

    var quotes = {
        name: 'quotes',
        initialValue: 'none',
        prefix: true,
        type: 1 /* LIST */,
        parse: function (_context, tokens) {
            if (tokens.length === 0) {
                return null;
            }
            var first = tokens[0];
            if (first.type === 20 /* IDENT_TOKEN */ && first.value === 'none') {
                return null;
            }
            var quotes = [];
            var filtered = tokens.filter(isStringToken);
            if (filtered.length % 2 !== 0) {
                return null;
            }
            for (var i = 0; i < filtered.length; i += 2) {
                var open_1 = filtered[i].value;
                var close_1 = filtered[i + 1].value;
                quotes.push({ open: open_1, close: close_1 });
            }
            return quotes;
        }
    };
    var getQuote = function (quotes, depth, open) {
        if (!quotes) {
            return '';
        }
        var quote = quotes[Math.min(depth, quotes.length - 1)];
        if (!quote) {
            return '';
        }
        return open ? quote.open : quote.close;
    };

    var boxShadow = {
        name: 'box-shadow',
        initialValue: 'none',
        type: 1 /* LIST */,
        prefix: false,
        parse: function (context, tokens) {
            if (tokens.length === 1 && isIdentWithValue(tokens[0], 'none')) {
                return [];
            }
            return parseFunctionArgs(tokens).map(function (values) {
                var shadow = {
                    color: 0x000000ff,
                    offsetX: ZERO_LENGTH,
                    offsetY: ZERO_LENGTH,
                    blur: ZERO_LENGTH,
                    spread: ZERO_LENGTH,
                    inset: false
                };
                var c = 0;
                for (var i = 0; i < values.length; i++) {
                    var token = values[i];
                    if (isIdentWithValue(token, 'inset')) {
                        shadow.inset = true;
                    }
                    else if (isLength(token)) {
                        if (c === 0) {
                            shadow.offsetX = token;
                        }
                        else if (c === 1) {
                            shadow.offsetY = token;
                        }
                        else if (c === 2) {
                            shadow.blur = token;
                        }
                        else {
                            shadow.spread = token;
                        }
                        c++;
                    }
                    else {
                        shadow.color = color$1.parse(context, token);
                    }
                }
                return shadow;
            });
        }
    };

    var paintOrder = {
        name: 'paint-order',
        initialValue: 'normal',
        prefix: false,
        type: 1 /* LIST */,
        parse: function (_context, tokens) {
            var DEFAULT_VALUE = [0 /* FILL */, 1 /* STROKE */, 2 /* MARKERS */];
            var layers = [];
            tokens.filter(isIdentToken).forEach(function (token) {
                switch (token.value) {
                    case 'stroke':
                        layers.push(1 /* STROKE */);
                        break;
                    case 'fill':
                        layers.push(0 /* FILL */);
                        break;
                    case 'markers':
                        layers.push(2 /* MARKERS */);
                        break;
                }
            });
            DEFAULT_VALUE.forEach(function (value) {
                if (layers.indexOf(value) === -1) {
                    layers.push(value);
                }
            });
            return layers;
        }
    };

    var webkitTextStrokeColor = {
        name: "-webkit-text-stroke-color",
        initialValue: 'currentcolor',
        prefix: false,
        type: 3 /* TYPE_VALUE */,
        format: 'color'
    };

    var webkitTextStrokeWidth = {
        name: "-webkit-text-stroke-width",
        initialValue: '0',
        type: 0 /* VALUE */,
        prefix: false,
        parse: function (_context, token) {
            if (isDimensionToken(token)) {
                return token.number;
            }
            return 0;
        }
    };

    var CSSParsedDeclaration = /** @class */ (function () {
        function CSSParsedDeclaration(context, declaration) {
            var _a, _b;
            this.animationDuration = parse(context, duration, declaration.animationDuration);
            this.backgroundClip = parse(context, backgroundClip, declaration.backgroundClip);
            this.backgroundColor = parse(context, backgroundColor, declaration.backgroundColor);
            this.backgroundImage = parse(context, backgroundImage, declaration.backgroundImage);
            this.backgroundOrigin = parse(context, backgroundOrigin, declaration.backgroundOrigin);
            this.backgroundPosition = parse(context, backgroundPosition, declaration.backgroundPosition);
            this.backgroundRepeat = parse(context, backgroundRepeat, declaration.backgroundRepeat);
            this.backgroundSize = parse(context, backgroundSize, declaration.backgroundSize);
            this.borderTopColor = parse(context, borderTopColor, declaration.borderTopColor);
            this.borderRightColor = parse(context, borderRightColor, declaration.borderRightColor);
            this.borderBottomColor = parse(context, borderBottomColor, declaration.borderBottomColor);
            this.borderLeftColor = parse(context, borderLeftColor, declaration.borderLeftColor);
            this.borderTopLeftRadius = parse(context, borderTopLeftRadius, declaration.borderTopLeftRadius);
            this.borderTopRightRadius = parse(context, borderTopRightRadius, declaration.borderTopRightRadius);
            this.borderBottomRightRadius = parse(context, borderBottomRightRadius, declaration.borderBottomRightRadius);
            this.borderBottomLeftRadius = parse(context, borderBottomLeftRadius, declaration.borderBottomLeftRadius);
            this.borderTopStyle = parse(context, borderTopStyle, declaration.borderTopStyle);
            this.borderRightStyle = parse(context, borderRightStyle, declaration.borderRightStyle);
            this.borderBottomStyle = parse(context, borderBottomStyle, declaration.borderBottomStyle);
            this.borderLeftStyle = parse(context, borderLeftStyle, declaration.borderLeftStyle);
            this.borderTopWidth = parse(context, borderTopWidth, declaration.borderTopWidth);
            this.borderRightWidth = parse(context, borderRightWidth, declaration.borderRightWidth);
            this.borderBottomWidth = parse(context, borderBottomWidth, declaration.borderBottomWidth);
            this.borderLeftWidth = parse(context, borderLeftWidth, declaration.borderLeftWidth);
            this.boxShadow = parse(context, boxShadow, declaration.boxShadow);
            this.color = parse(context, color, declaration.color);
            this.direction = parse(context, direction, declaration.direction);
            this.display = parse(context, display, declaration.display);
            this.float = parse(context, float, declaration.cssFloat);
            this.fontFamily = parse(context, fontFamily, declaration.fontFamily);
            this.fontSize = parse(context, fontSize, declaration.fontSize);
            this.fontStyle = parse(context, fontStyle, declaration.fontStyle);
            this.fontVariant = parse(context, fontVariant, declaration.fontVariant);
            this.fontWeight = parse(context, fontWeight, declaration.fontWeight);
            this.letterSpacing = parse(context, letterSpacing, declaration.letterSpacing);
            this.lineBreak = parse(context, lineBreak, declaration.lineBreak);
            this.lineHeight = parse(context, lineHeight, declaration.lineHeight);
            this.listStyleImage = parse(context, listStyleImage, declaration.listStyleImage);
            this.listStylePosition = parse(context, listStylePosition, declaration.listStylePosition);
            this.listStyleType = parse(context, listStyleType, declaration.listStyleType);
            this.marginTop = parse(context, marginTop, declaration.marginTop);
            this.marginRight = parse(context, marginRight, declaration.marginRight);
            this.marginBottom = parse(context, marginBottom, declaration.marginBottom);
            this.marginLeft = parse(context, marginLeft, declaration.marginLeft);
            this.opacity = parse(context, opacity, declaration.opacity);
            var overflowTuple = parse(context, overflow, declaration.overflow);
            this.overflowX = overflowTuple[0];
            this.overflowY = overflowTuple[overflowTuple.length > 1 ? 1 : 0];
            this.overflowWrap = parse(context, overflowWrap, declaration.overflowWrap);
            this.paddingTop = parse(context, paddingTop, declaration.paddingTop);
            this.paddingRight = parse(context, paddingRight, declaration.paddingRight);
            this.paddingBottom = parse(context, paddingBottom, declaration.paddingBottom);
            this.paddingLeft = parse(context, paddingLeft, declaration.paddingLeft);
            this.paintOrder = parse(context, paintOrder, declaration.paintOrder);
            this.position = parse(context, position, declaration.position);
            this.textAlign = parse(context, textAlign, declaration.textAlign);
            this.textDecorationColor = parse(context, textDecorationColor, (_a = declaration.textDecorationColor) !== null && _a !== void 0 ? _a : declaration.color);
            this.textDecorationLine = parse(context, textDecorationLine, (_b = declaration.textDecorationLine) !== null && _b !== void 0 ? _b : declaration.textDecoration);
            this.textShadow = parse(context, textShadow, declaration.textShadow);
            this.textTransform = parse(context, textTransform, declaration.textTransform);
            this.transform = parse(context, transform$1, declaration.transform);
            this.transformOrigin = parse(context, transformOrigin, declaration.transformOrigin);
            this.visibility = parse(context, visibility, declaration.visibility);
            this.webkitTextStrokeColor = parse(context, webkitTextStrokeColor, declaration.webkitTextStrokeColor);
            this.webkitTextStrokeWidth = parse(context, webkitTextStrokeWidth, declaration.webkitTextStrokeWidth);
            this.wordBreak = parse(context, wordBreak, declaration.wordBreak);
            this.zIndex = parse(context, zIndex, declaration.zIndex);
        }
        CSSParsedDeclaration.prototype.isVisible = function () {
            return this.display > 0 && this.opacity > 0 && this.visibility === 0 /* VISIBLE */;
        };
        CSSParsedDeclaration.prototype.isTransparent = function () {
            return isTransparent(this.backgroundColor);
        };
        CSSParsedDeclaration.prototype.isTransformed = function () {
            return this.transform !== null;
        };
        CSSParsedDeclaration.prototype.isPositioned = function () {
            return this.position !== 0 /* STATIC */;
        };
        CSSParsedDeclaration.prototype.isPositionedWithZIndex = function () {
            return this.isPositioned() && !this.zIndex.auto;
        };
        CSSParsedDeclaration.prototype.isFloating = function () {
            return this.float !== 0 /* NONE */;
        };
        CSSParsedDeclaration.prototype.isInlineLevel = function () {
            return (contains(this.display, 4 /* INLINE */) ||
                contains(this.display, 33554432 /* INLINE_BLOCK */) ||
                contains(this.display, 268435456 /* INLINE_FLEX */) ||
                contains(this.display, 536870912 /* INLINE_GRID */) ||
                contains(this.display, 67108864 /* INLINE_LIST_ITEM */) ||
                contains(this.display, 134217728 /* INLINE_TABLE */));
        };
        return CSSParsedDeclaration;
    }());
    var CSSParsedPseudoDeclaration = /** @class */ (function () {
        function CSSParsedPseudoDeclaration(context, declaration) {
            this.content = parse(context, content, declaration.content);
            this.quotes = parse(context, quotes, declaration.quotes);
        }
        return CSSParsedPseudoDeclaration;
    }());
    var CSSParsedCounterDeclaration = /** @class */ (function () {
        function CSSParsedCounterDeclaration(context, declaration) {
            this.counterIncrement = parse(context, counterIncrement, declaration.counterIncrement);
            this.counterReset = parse(context, counterReset, declaration.counterReset);
        }
        return CSSParsedCounterDeclaration;
    }());
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var parse = function (context, descriptor, style) {
        var tokenizer = new Tokenizer();
        var value = style !== null && typeof style !== 'undefined' ? style.toString() : descriptor.initialValue;
        tokenizer.write(value);
        var parser = new Parser(tokenizer.read());
        switch (descriptor.type) {
            case 2 /* IDENT_VALUE */:
                var token = parser.parseComponentValue();
                return descriptor.parse(context, isIdentToken(token) ? token.value : descriptor.initialValue);
            case 0 /* VALUE */:
                return descriptor.parse(context, parser.parseComponentValue());
            case 1 /* LIST */:
                return descriptor.parse(context, parser.parseComponentValues());
            case 4 /* TOKEN_VALUE */:
                return parser.parseComponentValue();
            case 3 /* TYPE_VALUE */:
                switch (descriptor.format) {
                    case 'angle':
                        return angle.parse(context, parser.parseComponentValue());
                    case 'color':
                        return color$1.parse(context, parser.parseComponentValue());
                    case 'image':
                        return image.parse(context, parser.parseComponentValue());
                    case 'length':
                        var length_1 = parser.parseComponentValue();
                        return isLength(length_1) ? length_1 : ZERO_LENGTH;
                    case 'length-percentage':
                        var value_1 = parser.parseComponentValue();
                        return isLengthPercentage(value_1) ? value_1 : ZERO_LENGTH;
                    case 'time':
                        return time.parse(context, parser.parseComponentValue());
                }
                break;
        }
    };

    var elementDebuggerAttribute = 'data-html2canvas-debug';
    var getElementDebugType = function (element) {
        var attribute = element.getAttribute(elementDebuggerAttribute);
        switch (attribute) {
            case 'all':
                return 1 /* ALL */;
            case 'clone':
                return 2 /* CLONE */;
            case 'parse':
                return 3 /* PARSE */;
            case 'render':
                return 4 /* RENDER */;
            default:
                return 0 /* NONE */;
        }
    };
    var isDebugging = function (element, type) {
        var elementType = getElementDebugType(element);
        return elementType === 1 /* ALL */ || type === elementType;
    };

    var ElementContainer = /** @class */ (function () {
        function ElementContainer(context, element) {
            this.context = context;
            this.textNodes = [];
            this.elements = [];
            this.flags = 0;
            if (isDebugging(element, 3 /* PARSE */)) {
                debugger;
            }
            this.styles = new CSSParsedDeclaration(context, window.getComputedStyle(element, null));
            if (isHTMLElementNode(element)) {
                if (this.styles.animationDuration.some(function (duration) { return duration > 0; })) {
                    element.style.animationDuration = '0s';
                }
                if (this.styles.transform !== null) {
                    // getBoundingClientRect takes transforms into account
                    element.style.transform = 'none';
                }
            }
            this.bounds = parseBounds(this.context, element);
            if (isDebugging(element, 4 /* RENDER */)) {
                this.flags |= 16 /* DEBUG_RENDER */;
            }
        }
        return ElementContainer;
    }());

    /*
     * text-segmentation 1.0.3 <https://github.com/niklasvh/text-segmentation>
     * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
     * Released under MIT License
     */
    var base64 = 'AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=';

    /*
     * utrie 1.0.2 <https://github.com/niklasvh/utrie>
     * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
     * Released under MIT License
     */
    var chars$1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    // Use a lookup table to find the index.
    var lookup$1 = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
    for (var i$1 = 0; i$1 < chars$1.length; i$1++) {
        lookup$1[chars$1.charCodeAt(i$1)] = i$1;
    }
    var decode = function (base64) {
        var bufferLength = base64.length * 0.75, len = base64.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
        if (base64[base64.length - 1] === '=') {
            bufferLength--;
            if (base64[base64.length - 2] === '=') {
                bufferLength--;
            }
        }
        var buffer = typeof ArrayBuffer !== 'undefined' &&
            typeof Uint8Array !== 'undefined' &&
            typeof Uint8Array.prototype.slice !== 'undefined'
            ? new ArrayBuffer(bufferLength)
            : new Array(bufferLength);
        var bytes = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);
        for (i = 0; i < len; i += 4) {
            encoded1 = lookup$1[base64.charCodeAt(i)];
            encoded2 = lookup$1[base64.charCodeAt(i + 1)];
            encoded3 = lookup$1[base64.charCodeAt(i + 2)];
            encoded4 = lookup$1[base64.charCodeAt(i + 3)];
            bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
            bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
            bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
        }
        return buffer;
    };
    var polyUint16Array = function (buffer) {
        var length = buffer.length;
        var bytes = [];
        for (var i = 0; i < length; i += 2) {
            bytes.push((buffer[i + 1] << 8) | buffer[i]);
        }
        return bytes;
    };
    var polyUint32Array = function (buffer) {
        var length = buffer.length;
        var bytes = [];
        for (var i = 0; i < length; i += 4) {
            bytes.push((buffer[i + 3] << 24) | (buffer[i + 2] << 16) | (buffer[i + 1] << 8) | buffer[i]);
        }
        return bytes;
    };

    /** Shift size for getting the index-2 table offset. */
    var UTRIE2_SHIFT_2 = 5;
    /** Shift size for getting the index-1 table offset. */
    var UTRIE2_SHIFT_1 = 6 + 5;
    /**
     * Shift size for shifting left the index array values.
     * Increases possible data size with 16-bit index values at the cost
     * of compactability.
     * This requires data blocks to be aligned by UTRIE2_DATA_GRANULARITY.
     */
    var UTRIE2_INDEX_SHIFT = 2;
    /**
     * Difference between the two shift sizes,
     * for getting an index-1 offset from an index-2 offset. 6=11-5
     */
    var UTRIE2_SHIFT_1_2 = UTRIE2_SHIFT_1 - UTRIE2_SHIFT_2;
    /**
     * The part of the index-2 table for U+D800..U+DBFF stores values for
     * lead surrogate code _units_ not code _points_.
     * Values for lead surrogate code _points_ are indexed with this portion of the table.
     * Length=32=0x20=0x400>>UTRIE2_SHIFT_2. (There are 1024=0x400 lead surrogates.)
     */
    var UTRIE2_LSCP_INDEX_2_OFFSET = 0x10000 >> UTRIE2_SHIFT_2;
    /** Number of entries in a data block. 32=0x20 */
    var UTRIE2_DATA_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_2;
    /** Mask for getting the lower bits for the in-data-block offset. */
    var UTRIE2_DATA_MASK = UTRIE2_DATA_BLOCK_LENGTH - 1;
    var UTRIE2_LSCP_INDEX_2_LENGTH = 0x400 >> UTRIE2_SHIFT_2;
    /** Count the lengths of both BMP pieces. 2080=0x820 */
    var UTRIE2_INDEX_2_BMP_LENGTH = UTRIE2_LSCP_INDEX_2_OFFSET + UTRIE2_LSCP_INDEX_2_LENGTH;
    /**
     * The 2-byte UTF-8 version of the index-2 table follows at offset 2080=0x820.
     * Length 32=0x20 for lead bytes C0..DF, regardless of UTRIE2_SHIFT_2.
     */
    var UTRIE2_UTF8_2B_INDEX_2_OFFSET = UTRIE2_INDEX_2_BMP_LENGTH;
    var UTRIE2_UTF8_2B_INDEX_2_LENGTH = 0x800 >> 6; /* U+0800 is the first code point after 2-byte UTF-8 */
    /**
     * The index-1 table, only used for supplementary code points, at offset 2112=0x840.
     * Variable length, for code points up to highStart, where the last single-value range starts.
     * Maximum length 512=0x200=0x100000>>UTRIE2_SHIFT_1.
     * (For 0x100000 supplementary code points U+10000..U+10ffff.)
     *
     * The part of the index-2 table for supplementary code points starts
     * after this index-1 table.
     *
     * Both the index-1 table and the following part of the index-2 table
     * are omitted completely if there is only BMP data.
     */
    var UTRIE2_INDEX_1_OFFSET = UTRIE2_UTF8_2B_INDEX_2_OFFSET + UTRIE2_UTF8_2B_INDEX_2_LENGTH;
    /**
     * Number of index-1 entries for the BMP. 32=0x20
     * This part of the index-1 table is omitted from the serialized form.
     */
    var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = 0x10000 >> UTRIE2_SHIFT_1;
    /** Number of entries in an index-2 block. 64=0x40 */
    var UTRIE2_INDEX_2_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_1_2;
    /** Mask for getting the lower bits for the in-index-2-block offset. */
    var UTRIE2_INDEX_2_MASK = UTRIE2_INDEX_2_BLOCK_LENGTH - 1;
    var slice16 = function (view, start, end) {
        if (view.slice) {
            return view.slice(start, end);
        }
        return new Uint16Array(Array.prototype.slice.call(view, start, end));
    };
    var slice32 = function (view, start, end) {
        if (view.slice) {
            return view.slice(start, end);
        }
        return new Uint32Array(Array.prototype.slice.call(view, start, end));
    };
    var createTrieFromBase64 = function (base64, _byteLength) {
        var buffer = decode(base64);
        var view32 = Array.isArray(buffer) ? polyUint32Array(buffer) : new Uint32Array(buffer);
        var view16 = Array.isArray(buffer) ? polyUint16Array(buffer) : new Uint16Array(buffer);
        var headerLength = 24;
        var index = slice16(view16, headerLength / 2, view32[4] / 2);
        var data = view32[5] === 2
            ? slice16(view16, (headerLength + view32[4]) / 2)
            : slice32(view32, Math.ceil((headerLength + view32[4]) / 4));
        return new Trie(view32[0], view32[1], view32[2], view32[3], index, data);
    };
    var Trie = /** @class */ (function () {
        function Trie(initialValue, errorValue, highStart, highValueIndex, index, data) {
            this.initialValue = initialValue;
            this.errorValue = errorValue;
            this.highStart = highStart;
            this.highValueIndex = highValueIndex;
            this.index = index;
            this.data = data;
        }
        /**
         * Get the value for a code point as stored in the Trie.
         *
         * @param codePoint the code point
         * @return the value
         */
        Trie.prototype.get = function (codePoint) {
            var ix;
            if (codePoint >= 0) {
                if (codePoint < 0x0d800 || (codePoint > 0x0dbff && codePoint <= 0x0ffff)) {
                    // Ordinary BMP code point, excluding leading surrogates.
                    // BMP uses a single level lookup.  BMP index starts at offset 0 in the Trie2 index.
                    // 16 bit data is stored in the index array itself.
                    ix = this.index[codePoint >> UTRIE2_SHIFT_2];
                    ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                    return this.data[ix];
                }
                if (codePoint <= 0xffff) {
                    // Lead Surrogate Code Point.  A Separate index section is stored for
                    // lead surrogate code units and code points.
                    //   The main index has the code unit data.
                    //   For this function, we need the code point data.
                    // Note: this expression could be refactored for slightly improved efficiency, but
                    //       surrogate code points will be so rare in practice that it's not worth it.
                    ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET + ((codePoint - 0xd800) >> UTRIE2_SHIFT_2)];
                    ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                    return this.data[ix];
                }
                if (codePoint < this.highStart) {
                    // Supplemental code point, use two-level lookup.
                    ix = UTRIE2_INDEX_1_OFFSET - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH + (codePoint >> UTRIE2_SHIFT_1);
                    ix = this.index[ix];
                    ix += (codePoint >> UTRIE2_SHIFT_2) & UTRIE2_INDEX_2_MASK;
                    ix = this.index[ix];
                    ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                    return this.data[ix];
                }
                if (codePoint <= 0x10ffff) {
                    return this.data[this.highValueIndex];
                }
            }
            // Fall through.  The code point is outside of the legal range of 0..0x10ffff.
            return this.errorValue;
        };
        return Trie;
    }());

    /*
     * base64-arraybuffer 1.0.2 <https://github.com/niklasvh/base64-arraybuffer>
     * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
     * Released under MIT License
     */
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    // Use a lookup table to find the index.
    var lookup = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
    for (var i = 0; i < chars.length; i++) {
        lookup[chars.charCodeAt(i)] = i;
    }

    var Prepend = 1;
    var CR = 2;
    var LF = 3;
    var Control = 4;
    var Extend = 5;
    var SpacingMark = 7;
    var L = 8;
    var V = 9;
    var T = 10;
    var LV = 11;
    var LVT = 12;
    var ZWJ = 13;
    var Extended_Pictographic = 14;
    var RI = 15;
    var toCodePoints = function (str) {
        var codePoints = [];
        var i = 0;
        var length = str.length;
        while (i < length) {
            var value = str.charCodeAt(i++);
            if (value >= 0xd800 && value <= 0xdbff && i < length) {
                var extra = str.charCodeAt(i++);
                if ((extra & 0xfc00) === 0xdc00) {
                    codePoints.push(((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000);
                }
                else {
                    codePoints.push(value);
                    i--;
                }
            }
            else {
                codePoints.push(value);
            }
        }
        return codePoints;
    };
    var fromCodePoint = function () {
        var codePoints = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            codePoints[_i] = arguments[_i];
        }
        if (String.fromCodePoint) {
            return String.fromCodePoint.apply(String, codePoints);
        }
        var length = codePoints.length;
        if (!length) {
            return '';
        }
        var codeUnits = [];
        var index = -1;
        var result = '';
        while (++index < length) {
            var codePoint = codePoints[index];
            if (codePoint <= 0xffff) {
                codeUnits.push(codePoint);
            }
            else {
                codePoint -= 0x10000;
                codeUnits.push((codePoint >> 10) + 0xd800, (codePoint % 0x400) + 0xdc00);
            }
            if (index + 1 === length || codeUnits.length > 0x4000) {
                result += String.fromCharCode.apply(String, codeUnits);
                codeUnits.length = 0;
            }
        }
        return result;
    };
    var UnicodeTrie = createTrieFromBase64(base64);
    var BREAK_NOT_ALLOWED = '×';
    var BREAK_ALLOWED = '÷';
    var codePointToClass = function (codePoint) { return UnicodeTrie.get(codePoint); };
    var _graphemeBreakAtIndex = function (_codePoints, classTypes, index) {
        var prevIndex = index - 2;
        var prev = classTypes[prevIndex];
        var current = classTypes[index - 1];
        var next = classTypes[index];
        // GB3 Do not break between a CR and LF
        if (current === CR && next === LF) {
            return BREAK_NOT_ALLOWED;
        }
        // GB4 Otherwise, break before and after controls.
        if (current === CR || current === LF || current === Control) {
            return BREAK_ALLOWED;
        }
        // GB5
        if (next === CR || next === LF || next === Control) {
            return BREAK_ALLOWED;
        }
        // Do not break Hangul syllable sequences.
        // GB6
        if (current === L && [L, V, LV, LVT].indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED;
        }
        // GB7
        if ((current === LV || current === V) && (next === V || next === T)) {
            return BREAK_NOT_ALLOWED;
        }
        // GB8
        if ((current === LVT || current === T) && next === T) {
            return BREAK_NOT_ALLOWED;
        }
        // GB9 Do not break before extending characters or ZWJ.
        if (next === ZWJ || next === Extend) {
            return BREAK_NOT_ALLOWED;
        }
        // Do not break before SpacingMarks, or after Prepend characters.
        // GB9a
        if (next === SpacingMark) {
            return BREAK_NOT_ALLOWED;
        }
        // GB9a
        if (current === Prepend) {
            return BREAK_NOT_ALLOWED;
        }
        // GB11 Do not break within emoji modifier sequences or emoji zwj sequences.
        if (current === ZWJ && next === Extended_Pictographic) {
            while (prev === Extend) {
                prev = classTypes[--prevIndex];
            }
            if (prev === Extended_Pictographic) {
                return BREAK_NOT_ALLOWED;
            }
        }
        // GB12 Do not break within emoji flag sequences.
        // That is, do not break between regional indicator (RI) symbols
        // if there is an odd number of RI characters before the break point.
        if (current === RI && next === RI) {
            var countRI = 0;
            while (prev === RI) {
                countRI++;
                prev = classTypes[--prevIndex];
            }
            if (countRI % 2 === 0) {
                return BREAK_NOT_ALLOWED;
            }
        }
        return BREAK_ALLOWED;
    };
    var GraphemeBreaker = function (str) {
        var codePoints = toCodePoints(str);
        var length = codePoints.length;
        var index = 0;
        var lastEnd = 0;
        var classTypes = codePoints.map(codePointToClass);
        return {
            next: function () {
                if (index >= length) {
                    return { done: true, value: null };
                }
                var graphemeBreak = BREAK_NOT_ALLOWED;
                while (index < length &&
                    (graphemeBreak = _graphemeBreakAtIndex(codePoints, classTypes, ++index)) === BREAK_NOT_ALLOWED) { }
                if (graphemeBreak !== BREAK_NOT_ALLOWED || index === length) {
                    var value = fromCodePoint.apply(null, codePoints.slice(lastEnd, index));
                    lastEnd = index;
                    return { value: value, done: false };
                }
                return { done: true, value: null };
            },
        };
    };
    var splitGraphemes = function (str) {
        var breaker = GraphemeBreaker(str);
        var graphemes = [];
        var bk;
        while (!(bk = breaker.next()).done) {
            if (bk.value) {
                graphemes.push(bk.value.slice());
            }
        }
        return graphemes;
    };

    var testRangeBounds = function (document) {
        var TEST_HEIGHT = 123;
        if (document.createRange) {
            var range = document.createRange();
            if (range.getBoundingClientRect) {
                var testElement = document.createElement('boundtest');
                testElement.style.height = TEST_HEIGHT + "px";
                testElement.style.display = 'block';
                document.body.appendChild(testElement);
                range.selectNode(testElement);
                var rangeBounds = range.getBoundingClientRect();
                var rangeHeight = Math.round(rangeBounds.height);
                document.body.removeChild(testElement);
                if (rangeHeight === TEST_HEIGHT) {
                    return true;
                }
            }
        }
        return false;
    };
    var testIOSLineBreak = function (document) {
        var testElement = document.createElement('boundtest');
        testElement.style.width = '50px';
        testElement.style.display = 'block';
        testElement.style.fontSize = '12px';
        testElement.style.letterSpacing = '0px';
        testElement.style.wordSpacing = '0px';
        document.body.appendChild(testElement);
        var range = document.createRange();
        testElement.innerHTML = typeof ''.repeat === 'function' ? '&#128104;'.repeat(10) : '';
        var node = testElement.firstChild;
        var textList = toCodePoints$1(node.data).map(function (i) { return fromCodePoint$1(i); });
        var offset = 0;
        var prev = {};
        // ios 13 does not handle range getBoundingClientRect line changes correctly #2177
        var supports = textList.every(function (text, i) {
            range.setStart(node, offset);
            range.setEnd(node, offset + text.length);
            var rect = range.getBoundingClientRect();
            offset += text.length;
            var boundAhead = rect.x > prev.x || rect.y > prev.y;
            prev = rect;
            if (i === 0) {
                return true;
            }
            return boundAhead;
        });
        document.body.removeChild(testElement);
        return supports;
    };
    var testCORS = function () { return typeof new Image().crossOrigin !== 'undefined'; };
    var testResponseType = function () { return typeof new XMLHttpRequest().responseType === 'string'; };
    var testSVG = function (document) {
        var img = new Image();
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        if (!ctx) {
            return false;
        }
        img.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
        try {
            ctx.drawImage(img, 0, 0);
            canvas.toDataURL();
        }
        catch (e) {
            return false;
        }
        return true;
    };
    var isGreenPixel = function (data) {
        return data[0] === 0 && data[1] === 255 && data[2] === 0 && data[3] === 255;
    };
    var testForeignObject = function (document) {
        var canvas = document.createElement('canvas');
        var size = 100;
        canvas.width = size;
        canvas.height = size;
        var ctx = canvas.getContext('2d');
        if (!ctx) {
            return Promise.reject(false);
        }
        ctx.fillStyle = 'rgb(0, 255, 0)';
        ctx.fillRect(0, 0, size, size);
        var img = new Image();
        var greenImageSrc = canvas.toDataURL();
        img.src = greenImageSrc;
        var svg = createForeignObjectSVG(size, size, 0, 0, img);
        ctx.fillStyle = 'red';
        ctx.fillRect(0, 0, size, size);
        return loadSerializedSVG$1(svg)
            .then(function (img) {
            ctx.drawImage(img, 0, 0);
            var data = ctx.getImageData(0, 0, size, size).data;
            ctx.fillStyle = 'red';
            ctx.fillRect(0, 0, size, size);
            var node = document.createElement('div');
            node.style.backgroundImage = "url(" + greenImageSrc + ")";
            node.style.height = size + "px";
            // Firefox 55 does not render inline <img /> tags
            return isGreenPixel(data)
                ? loadSerializedSVG$1(createForeignObjectSVG(size, size, 0, 0, node))
                : Promise.reject(false);
        })
            .then(function (img) {
            ctx.drawImage(img, 0, 0);
            // Edge does not render background-images
            return isGreenPixel(ctx.getImageData(0, 0, size, size).data);
        })
            .catch(function () { return false; });
    };
    var createForeignObjectSVG = function (width, height, x, y, node) {
        var xmlns = 'http://www.w3.org/2000/svg';
        var svg = document.createElementNS(xmlns, 'svg');
        var foreignObject = document.createElementNS(xmlns, 'foreignObject');
        svg.setAttributeNS(null, 'width', width.toString());
        svg.setAttributeNS(null, 'height', height.toString());
        foreignObject.setAttributeNS(null, 'width', '100%');
        foreignObject.setAttributeNS(null, 'height', '100%');
        foreignObject.setAttributeNS(null, 'x', x.toString());
        foreignObject.setAttributeNS(null, 'y', y.toString());
        foreignObject.setAttributeNS(null, 'externalResourcesRequired', 'true');
        svg.appendChild(foreignObject);
        foreignObject.appendChild(node);
        return svg;
    };
    var loadSerializedSVG$1 = function (svg) {
        return new Promise(function (resolve, reject) {
            var img = new Image();
            img.onload = function () { return resolve(img); };
            img.onerror = reject;
            img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(svg));
        });
    };
    var FEATURES = {
        get SUPPORT_RANGE_BOUNDS() {
            var value = testRangeBounds(document);
            Object.defineProperty(FEATURES, 'SUPPORT_RANGE_BOUNDS', { value: value });
            return value;
        },
        get SUPPORT_WORD_BREAKING() {
            var value = FEATURES.SUPPORT_RANGE_BOUNDS && testIOSLineBreak(document);
            Object.defineProperty(FEATURES, 'SUPPORT_WORD_BREAKING', { value: value });
            return value;
        },
        get SUPPORT_SVG_DRAWING() {
            var value = testSVG(document);
            Object.defineProperty(FEATURES, 'SUPPORT_SVG_DRAWING', { value: value });
            return value;
        },
        get SUPPORT_FOREIGNOBJECT_DRAWING() {
            var value = typeof Array.from === 'function' && typeof window.fetch === 'function'
                ? testForeignObject(document)
                : Promise.resolve(false);
            Object.defineProperty(FEATURES, 'SUPPORT_FOREIGNOBJECT_DRAWING', { value: value });
            return value;
        },
        get SUPPORT_CORS_IMAGES() {
            var value = testCORS();
            Object.defineProperty(FEATURES, 'SUPPORT_CORS_IMAGES', { value: value });
            return value;
        },
        get SUPPORT_RESPONSE_TYPE() {
            var value = testResponseType();
            Object.defineProperty(FEATURES, 'SUPPORT_RESPONSE_TYPE', { value: value });
            return value;
        },
        get SUPPORT_CORS_XHR() {
            var value = 'withCredentials' in new XMLHttpRequest();
            Object.defineProperty(FEATURES, 'SUPPORT_CORS_XHR', { value: value });
            return value;
        },
        get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var value = !!(typeof Intl !== 'undefined' && Intl.Segmenter);
            Object.defineProperty(FEATURES, 'SUPPORT_NATIVE_TEXT_SEGMENTATION', { value: value });
            return value;
        }
    };

    var TextBounds = /** @class */ (function () {
        function TextBounds(text, bounds) {
            this.text = text;
            this.bounds = bounds;
        }
        return TextBounds;
    }());
    var parseTextBounds = function (context, value, styles, node) {
        var textList = breakText(value, styles);
        var textBounds = [];
        var offset = 0;
        textList.forEach(function (text) {
            if (styles.textDecorationLine.length || text.trim().length > 0) {
                if (FEATURES.SUPPORT_RANGE_BOUNDS) {
                    var clientRects = createRange(node, offset, text.length).getClientRects();
                    if (clientRects.length > 1) {
                        var subSegments = segmentGraphemes(text);
                        var subOffset_1 = 0;
                        subSegments.forEach(function (subSegment) {
                            textBounds.push(new TextBounds(subSegment, Bounds.fromDOMRectList(context, createRange(node, subOffset_1 + offset, subSegment.length).getClientRects())));
                            subOffset_1 += subSegment.length;
                        });
                    }
                    else {
                        textBounds.push(new TextBounds(text, Bounds.fromDOMRectList(context, clientRects)));
                    }
                }
                else {
                    var replacementNode = node.splitText(text.length);
                    textBounds.push(new TextBounds(text, getWrapperBounds(context, node)));
                    node = replacementNode;
                }
            }
            else if (!FEATURES.SUPPORT_RANGE_BOUNDS) {
                node = node.splitText(text.length);
            }
            offset += text.length;
        });
        return textBounds;
    };
    var getWrapperBounds = function (context, node) {
        var ownerDocument = node.ownerDocument;
        if (ownerDocument) {
            var wrapper = ownerDocument.createElement('html2canvaswrapper');
            wrapper.appendChild(node.cloneNode(true));
            var parentNode = node.parentNode;
            if (parentNode) {
                parentNode.replaceChild(wrapper, node);
                var bounds = parseBounds(context, wrapper);
                if (wrapper.firstChild) {
                    parentNode.replaceChild(wrapper.firstChild, wrapper);
                }
                return bounds;
            }
        }
        return Bounds.EMPTY;
    };
    var createRange = function (node, offset, length) {
        var ownerDocument = node.ownerDocument;
        if (!ownerDocument) {
            throw new Error('Node has no owner document');
        }
        var range = ownerDocument.createRange();
        range.setStart(node, offset);
        range.setEnd(node, offset + length);
        return range;
    };
    var segmentGraphemes = function (value) {
        if (FEATURES.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var segmenter = new Intl.Segmenter(void 0, { granularity: 'grapheme' });
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return Array.from(segmenter.segment(value)).map(function (segment) { return segment.segment; });
        }
        return splitGraphemes(value);
    };
    var segmentWords = function (value, styles) {
        if (FEATURES.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var segmenter = new Intl.Segmenter(void 0, {
                granularity: 'word'
            });
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return Array.from(segmenter.segment(value)).map(function (segment) { return segment.segment; });
        }
        return breakWords(value, styles);
    };
    var breakText = function (value, styles) {
        return styles.letterSpacing !== 0 ? segmentGraphemes(value) : segmentWords(value, styles);
    };
    // https://drafts.csswg.org/css-text/#word-separator
    var wordSeparators = [0x0020, 0x00a0, 0x1361, 0x10100, 0x10101, 0x1039, 0x1091];
    var breakWords = function (str, styles) {
        var breaker = LineBreaker(str, {
            lineBreak: styles.lineBreak,
            wordBreak: styles.overflowWrap === "break-word" /* BREAK_WORD */ ? 'break-word' : styles.wordBreak
        });
        var words = [];
        var bk;
        var _loop_1 = function () {
            if (bk.value) {
                var value = bk.value.slice();
                var codePoints = toCodePoints$1(value);
                var word_1 = '';
                codePoints.forEach(function (codePoint) {
                    if (wordSeparators.indexOf(codePoint) === -1) {
                        word_1 += fromCodePoint$1(codePoint);
                    }
                    else {
                        if (word_1.length) {
                            words.push(word_1);
                        }
                        words.push(fromCodePoint$1(codePoint));
                        word_1 = '';
                    }
                });
                if (word_1.length) {
                    words.push(word_1);
                }
            }
        };
        while (!(bk = breaker.next()).done) {
            _loop_1();
        }
        return words;
    };

    var TextContainer = /** @class */ (function () {
        function TextContainer(context, node, styles) {
            this.text = transform(node.data, styles.textTransform);
            this.textBounds = parseTextBounds(context, this.text, styles, node);
        }
        return TextContainer;
    }());
    var transform = function (text, transform) {
        switch (transform) {
            case 1 /* LOWERCASE */:
                return text.toLowerCase();
            case 3 /* CAPITALIZE */:
                return text.replace(CAPITALIZE, capitalize);
            case 2 /* UPPERCASE */:
                return text.toUpperCase();
            default:
                return text;
        }
    };
    var CAPITALIZE = /(^|\s|:|-|\(|\))([a-z])/g;
    var capitalize = function (m, p1, p2) {
        if (m.length > 0) {
            return p1 + p2.toUpperCase();
        }
        return m;
    };

    var ImageElementContainer = /** @class */ (function (_super) {
        __extends(ImageElementContainer, _super);
        function ImageElementContainer(context, img) {
            var _this = _super.call(this, context, img) || this;
            _this.src = img.currentSrc || img.src;
            _this.intrinsicWidth = img.naturalWidth;
            _this.intrinsicHeight = img.naturalHeight;
            _this.context.cache.addImage(_this.src);
            return _this;
        }
        return ImageElementContainer;
    }(ElementContainer));

    var CanvasElementContainer = /** @class */ (function (_super) {
        __extends(CanvasElementContainer, _super);
        function CanvasElementContainer(context, canvas) {
            var _this = _super.call(this, context, canvas) || this;
            _this.canvas = canvas;
            _this.intrinsicWidth = canvas.width;
            _this.intrinsicHeight = canvas.height;
            return _this;
        }
        return CanvasElementContainer;
    }(ElementContainer));

    var SVGElementContainer = /** @class */ (function (_super) {
        __extends(SVGElementContainer, _super);
        function SVGElementContainer(context, img) {
            var _this = _super.call(this, context, img) || this;
            var s = new XMLSerializer();
            var bounds = parseBounds(context, img);
            img.setAttribute('width', bounds.width + "px");
            img.setAttribute('height', bounds.height + "px");
            _this.svg = "data:image/svg+xml," + encodeURIComponent(s.serializeToString(img));
            _this.intrinsicWidth = img.width.baseVal.value;
            _this.intrinsicHeight = img.height.baseVal.value;
            _this.context.cache.addImage(_this.svg);
            return _this;
        }
        return SVGElementContainer;
    }(ElementContainer));

    var LIElementContainer = /** @class */ (function (_super) {
        __extends(LIElementContainer, _super);
        function LIElementContainer(context, element) {
            var _this = _super.call(this, context, element) || this;
            _this.value = element.value;
            return _this;
        }
        return LIElementContainer;
    }(ElementContainer));

    var OLElementContainer = /** @class */ (function (_super) {
        __extends(OLElementContainer, _super);
        function OLElementContainer(context, element) {
            var _this = _super.call(this, context, element) || this;
            _this.start = element.start;
            _this.reversed = typeof element.reversed === 'boolean' && element.reversed === true;
            return _this;
        }
        return OLElementContainer;
    }(ElementContainer));

    var CHECKBOX_BORDER_RADIUS = [
        {
            type: 15 /* DIMENSION_TOKEN */,
            flags: 0,
            unit: 'px',
            number: 3
        }
    ];
    var RADIO_BORDER_RADIUS = [
        {
            type: 16 /* PERCENTAGE_TOKEN */,
            flags: 0,
            number: 50
        }
    ];
    var reformatInputBounds = function (bounds) {
        if (bounds.width > bounds.height) {
            return new Bounds(bounds.left + (bounds.width - bounds.height) / 2, bounds.top, bounds.height, bounds.height);
        }
        else if (bounds.width < bounds.height) {
            return new Bounds(bounds.left, bounds.top + (bounds.height - bounds.width) / 2, bounds.width, bounds.width);
        }
        return bounds;
    };
    var getInputValue = function (node) {
        var value = node.type === PASSWORD ? new Array(node.value.length + 1).join('\u2022') : node.value;
        return value.length === 0 ? node.placeholder || '' : value;
    };
    var CHECKBOX = 'checkbox';
    var RADIO = 'radio';
    var PASSWORD = 'password';
    var INPUT_COLOR = 0x2a2a2aff;
    var InputElementContainer = /** @class */ (function (_super) {
        __extends(InputElementContainer, _super);
        function InputElementContainer(context, input) {
            var _this = _super.call(this, context, input) || this;
            _this.type = input.type.toLowerCase();
            _this.checked = input.checked;
            _this.value = getInputValue(input);
            if (_this.type === CHECKBOX || _this.type === RADIO) {
                _this.styles.backgroundColor = 0xdededeff;
                _this.styles.borderTopColor =
                    _this.styles.borderRightColor =
                        _this.styles.borderBottomColor =
                            _this.styles.borderLeftColor =
                                0xa5a5a5ff;
                _this.styles.borderTopWidth =
                    _this.styles.borderRightWidth =
                        _this.styles.borderBottomWidth =
                            _this.styles.borderLeftWidth =
                                1;
                _this.styles.borderTopStyle =
                    _this.styles.borderRightStyle =
                        _this.styles.borderBottomStyle =
                            _this.styles.borderLeftStyle =
                                1 /* SOLID */;
                _this.styles.backgroundClip = [0 /* BORDER_BOX */];
                _this.styles.backgroundOrigin = [0 /* BORDER_BOX */];
                _this.bounds = reformatInputBounds(_this.bounds);
            }
            switch (_this.type) {
                case CHECKBOX:
                    _this.styles.borderTopRightRadius =
                        _this.styles.borderTopLeftRadius =
                            _this.styles.borderBottomRightRadius =
                                _this.styles.borderBottomLeftRadius =
                                    CHECKBOX_BORDER_RADIUS;
                    break;
                case RADIO:
                    _this.styles.borderTopRightRadius =
                        _this.styles.borderTopLeftRadius =
                            _this.styles.borderBottomRightRadius =
                                _this.styles.borderBottomLeftRadius =
                                    RADIO_BORDER_RADIUS;
                    break;
            }
            return _this;
        }
        return InputElementContainer;
    }(ElementContainer));

    var SelectElementContainer = /** @class */ (function (_super) {
        __extends(SelectElementContainer, _super);
        function SelectElementContainer(context, element) {
            var _this = _super.call(this, context, element) || this;
            var option = element.options[element.selectedIndex || 0];
            _this.value = option ? option.text || '' : '';
            return _this;
        }
        return SelectElementContainer;
    }(ElementContainer));

    var TextareaElementContainer = /** @class */ (function (_super) {
        __extends(TextareaElementContainer, _super);
        function TextareaElementContainer(context, element) {
            var _this = _super.call(this, context, element) || this;
            _this.value = element.value;
            return _this;
        }
        return TextareaElementContainer;
    }(ElementContainer));

    var IFrameElementContainer = /** @class */ (function (_super) {
        __extends(IFrameElementContainer, _super);
        function IFrameElementContainer(context, iframe) {
            var _this = _super.call(this, context, iframe) || this;
            _this.src = iframe.src;
            _this.width = parseInt(iframe.width, 10) || 0;
            _this.height = parseInt(iframe.height, 10) || 0;
            _this.backgroundColor = _this.styles.backgroundColor;
            try {
                if (iframe.contentWindow &&
                    iframe.contentWindow.document &&
                    iframe.contentWindow.document.documentElement) {
                    _this.tree = parseTree(context, iframe.contentWindow.document.documentElement);
                    // http://www.w3.org/TR/css3-background/#special-backgrounds
                    var documentBackgroundColor = iframe.contentWindow.document.documentElement
                        ? parseColor(context, getComputedStyle(iframe.contentWindow.document.documentElement).backgroundColor)
                        : COLORS.TRANSPARENT;
                    var bodyBackgroundColor = iframe.contentWindow.document.body
                        ? parseColor(context, getComputedStyle(iframe.contentWindow.document.body).backgroundColor)
                        : COLORS.TRANSPARENT;
                    _this.backgroundColor = isTransparent(documentBackgroundColor)
                        ? isTransparent(bodyBackgroundColor)
                            ? _this.styles.backgroundColor
                            : bodyBackgroundColor
                        : documentBackgroundColor;
                }
            }
            catch (e) { }
            return _this;
        }
        return IFrameElementContainer;
    }(ElementContainer));

    var LIST_OWNERS = ['OL', 'UL', 'MENU'];
    var parseNodeTree = function (context, node, parent, root) {
        for (var childNode = node.firstChild, nextNode = void 0; childNode; childNode = nextNode) {
            nextNode = childNode.nextSibling;
            if (isTextNode(childNode) && childNode.data.trim().length > 0) {
                parent.textNodes.push(new TextContainer(context, childNode, parent.styles));
            }
            else if (isElementNode(childNode)) {
                if (isSlotElement(childNode) && childNode.assignedNodes) {
                    childNode.assignedNodes().forEach(function (childNode) { return parseNodeTree(context, childNode, parent, root); });
                }
                else {
                    var container = createContainer(context, childNode);
                    if (container.styles.isVisible()) {
                        if (createsRealStackingContext(childNode, container, root)) {
                            container.flags |= 4 /* CREATES_REAL_STACKING_CONTEXT */;
                        }
                        else if (createsStackingContext(container.styles)) {
                            container.flags |= 2 /* CREATES_STACKING_CONTEXT */;
                        }
                        if (LIST_OWNERS.indexOf(childNode.tagName) !== -1) {
                            container.flags |= 8 /* IS_LIST_OWNER */;
                        }
                        parent.elements.push(container);
                        childNode.slot;
                        if (childNode.shadowRoot) {
                            parseNodeTree(context, childNode.shadowRoot, container, root);
                        }
                        else if (!isTextareaElement(childNode) &&
                            !isSVGElement(childNode) &&
                            !isSelectElement(childNode)) {
                            parseNodeTree(context, childNode, container, root);
                        }
                    }
                }
            }
        }
    };
    var createContainer = function (context, element) {
        if (isImageElement(element)) {
            return new ImageElementContainer(context, element);
        }
        if (isCanvasElement(element)) {
            return new CanvasElementContainer(context, element);
        }
        if (isSVGElement(element)) {
            return new SVGElementContainer(context, element);
        }
        if (isLIElement(element)) {
            return new LIElementContainer(context, element);
        }
        if (isOLElement(element)) {
            return new OLElementContainer(context, element);
        }
        if (isInputElement(element)) {
            return new InputElementContainer(context, element);
        }
        if (isSelectElement(element)) {
            return new SelectElementContainer(context, element);
        }
        if (isTextareaElement(element)) {
            return new TextareaElementContainer(context, element);
        }
        if (isIFrameElement(element)) {
            return new IFrameElementContainer(context, element);
        }
        return new ElementContainer(context, element);
    };
    var parseTree = function (context, element) {
        var container = createContainer(context, element);
        container.flags |= 4 /* CREATES_REAL_STACKING_CONTEXT */;
        parseNodeTree(context, element, container, container);
        return container;
    };
    var createsRealStackingContext = function (node, container, root) {
        return (container.styles.isPositionedWithZIndex() ||
            container.styles.opacity < 1 ||
            container.styles.isTransformed() ||
            (isBodyElement(node) && root.styles.isTransparent()));
    };
    var createsStackingContext = function (styles) { return styles.isPositioned() || styles.isFloating(); };
    var isTextNode = function (node) { return node.nodeType === Node.TEXT_NODE; };
    var isElementNode = function (node) { return node.nodeType === Node.ELEMENT_NODE; };
    var isHTMLElementNode = function (node) {
        return isElementNode(node) && typeof node.style !== 'undefined' && !isSVGElementNode(node);
    };
    var isSVGElementNode = function (element) {
        return typeof element.className === 'object';
    };
    var isLIElement = function (node) { return node.tagName === 'LI'; };
    var isOLElement = function (node) { return node.tagName === 'OL'; };
    var isInputElement = function (node) { return node.tagName === 'INPUT'; };
    var isHTMLElement = function (node) { return node.tagName === 'HTML'; };
    var isSVGElement = function (node) { return node.tagName === 'svg'; };
    var isBodyElement = function (node) { return node.tagName === 'BODY'; };
    var isCanvasElement = function (node) { return node.tagName === 'CANVAS'; };
    var isVideoElement = function (node) { return node.tagName === 'VIDEO'; };
    var isImageElement = function (node) { return node.tagName === 'IMG'; };
    var isIFrameElement = function (node) { return node.tagName === 'IFRAME'; };
    var isStyleElement = function (node) { return node.tagName === 'STYLE'; };
    var isScriptElement = function (node) { return node.tagName === 'SCRIPT'; };
    var isTextareaElement = function (node) { return node.tagName === 'TEXTAREA'; };
    var isSelectElement = function (node) { return node.tagName === 'SELECT'; };
    var isSlotElement = function (node) { return node.tagName === 'SLOT'; };
    // https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name
    var isCustomElement = function (node) { return node.tagName.indexOf('-') > 0; };

    var CounterState = /** @class */ (function () {
        function CounterState() {
            this.counters = {};
        }
        CounterState.prototype.getCounterValue = function (name) {
            var counter = this.counters[name];
            if (counter && counter.length) {
                return counter[counter.length - 1];
            }
            return 1;
        };
        CounterState.prototype.getCounterValues = function (name) {
            var counter = this.counters[name];
            return counter ? counter : [];
        };
        CounterState.prototype.pop = function (counters) {
            var _this = this;
            counters.forEach(function (counter) { return _this.counters[counter].pop(); });
        };
        CounterState.prototype.parse = function (style) {
            var _this = this;
            var counterIncrement = style.counterIncrement;
            var counterReset = style.counterReset;
            var canReset = true;
            if (counterIncrement !== null) {
                counterIncrement.forEach(function (entry) {
                    var counter = _this.counters[entry.counter];
                    if (counter && entry.increment !== 0) {
                        canReset = false;
                        if (!counter.length) {
                            counter.push(1);
                        }
                        counter[Math.max(0, counter.length - 1)] += entry.increment;
                    }
                });
            }
            var counterNames = [];
            if (canReset) {
                counterReset.forEach(function (entry) {
                    var counter = _this.counters[entry.counter];
                    counterNames.push(entry.counter);
                    if (!counter) {
                        counter = _this.counters[entry.counter] = [];
                    }
                    counter.push(entry.reset);
                });
            }
            return counterNames;
        };
        return CounterState;
    }());
    var ROMAN_UPPER = {
        integers: [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        values: ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
    };
    var ARMENIAN = {
        integers: [
            9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70,
            60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
        ],
        values: [
            'Ք',
            'Փ',
            'Ւ',
            'Ց',
            'Ր',
            'Տ',
            'Վ',
            'Ս',
            'Ռ',
            'Ջ',
            'Պ',
            'Չ',
            'Ո',
            'Շ',
            'Ն',
            'Յ',
            'Մ',
            'Ճ',
            'Ղ',
            'Ձ',
            'Հ',
            'Կ',
            'Ծ',
            'Խ',
            'Լ',
            'Ի',
            'Ժ',
            'Թ',
            'Ը',
            'Է',
            'Զ',
            'Ե',
            'Դ',
            'Գ',
            'Բ',
            'Ա'
        ]
    };
    var HEBREW = {
        integers: [
            10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20,
            19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
        ],
        values: [
            'י׳',
            'ט׳',
            'ח׳',
            'ז׳',
            'ו׳',
            'ה׳',
            'ד׳',
            'ג׳',
            'ב׳',
            'א׳',
            'ת',
            'ש',
            'ר',
            'ק',
            'צ',
            'פ',
            'ע',
            'ס',
            'נ',
            'מ',
            'ל',
            'כ',
            'יט',
            'יח',
            'יז',
            'טז',
            'טו',
            'י',
            'ט',
            'ח',
            'ז',
            'ו',
            'ה',
            'ד',
            'ג',
            'ב',
            'א'
        ]
    };
    var GEORGIAN = {
        integers: [
            10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90,
            80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
        ],
        values: [
            'ჵ',
            'ჰ',
            'ჯ',
            'ჴ',
            'ხ',
            'ჭ',
            'წ',
            'ძ',
            'ც',
            'ჩ',
            'შ',
            'ყ',
            'ღ',
            'ქ',
            'ფ',
            'ჳ',
            'ტ',
            'ს',
            'რ',
            'ჟ',
            'პ',
            'ო',
            'ჲ',
            'ნ',
            'მ',
            'ლ',
            'კ',
            'ი',
            'თ',
            'ჱ',
            'ზ',
            'ვ',
            'ე',
            'დ',
            'გ',
            'ბ',
            'ა'
        ]
    };
    var createAdditiveCounter = function (value, min, max, symbols, fallback, suffix) {
        if (value < min || value > max) {
            return createCounterText(value, fallback, suffix.length > 0);
        }
        return (symbols.integers.reduce(function (string, integer, index) {
            while (value >= integer) {
                value -= integer;
                string += symbols.values[index];
            }
            return string;
        }, '') + suffix);
    };
    var createCounterStyleWithSymbolResolver = function (value, codePointRangeLength, isNumeric, resolver) {
        var string = '';
        do {
            if (!isNumeric) {
                value--;
            }
            string = resolver(value) + string;
            value /= codePointRangeLength;
        } while (value * codePointRangeLength >= codePointRangeLength);
        return string;
    };
    var createCounterStyleFromRange = function (value, codePointRangeStart, codePointRangeEnd, isNumeric, suffix) {
        var codePointRangeLength = codePointRangeEnd - codePointRangeStart + 1;
        return ((value < 0 ? '-' : '') +
            (createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, isNumeric, function (codePoint) {
                return fromCodePoint$1(Math.floor(codePoint % codePointRangeLength) + codePointRangeStart);
            }) +
                suffix));
    };
    var createCounterStyleFromSymbols = function (value, symbols, suffix) {
        if (suffix === void 0) { suffix = '. '; }
        var codePointRangeLength = symbols.length;
        return (createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, false, function (codePoint) { return symbols[Math.floor(codePoint % codePointRangeLength)]; }) + suffix);
    };
    var CJK_ZEROS = 1 << 0;
    var CJK_TEN_COEFFICIENTS = 1 << 1;
    var CJK_TEN_HIGH_COEFFICIENTS = 1 << 2;
    var CJK_HUNDRED_COEFFICIENTS = 1 << 3;
    var createCJKCounter = function (value, numbers, multipliers, negativeSign, suffix, flags) {
        if (value < -9999 || value > 9999) {
            return createCounterText(value, 4 /* CJK_DECIMAL */, suffix.length > 0);
        }
        var tmp = Math.abs(value);
        var string = suffix;
        if (tmp === 0) {
            return numbers[0] + string;
        }
        for (var digit = 0; tmp > 0 && digit <= 4; digit++) {
            var coefficient = tmp % 10;
            if (coefficient === 0 && contains(flags, CJK_ZEROS) && string !== '') {
                string = numbers[coefficient] + string;
            }
            else if (coefficient > 1 ||
                (coefficient === 1 && digit === 0) ||
                (coefficient === 1 && digit === 1 && contains(flags, CJK_TEN_COEFFICIENTS)) ||
                (coefficient === 1 && digit === 1 && contains(flags, CJK_TEN_HIGH_COEFFICIENTS) && value > 100) ||
                (coefficient === 1 && digit > 1 && contains(flags, CJK_HUNDRED_COEFFICIENTS))) {
                string = numbers[coefficient] + (digit > 0 ? multipliers[digit - 1] : '') + string;
            }
            else if (coefficient === 1 && digit > 0) {
                string = multipliers[digit - 1] + string;
            }
            tmp = Math.floor(tmp / 10);
        }
        return (value < 0 ? negativeSign : '') + string;
    };
    var CHINESE_INFORMAL_MULTIPLIERS = '十百千萬';
    var CHINESE_FORMAL_MULTIPLIERS = '拾佰仟萬';
    var JAPANESE_NEGATIVE = 'マイナス';
    var KOREAN_NEGATIVE = '마이너스';
    var createCounterText = function (value, type, appendSuffix) {
        var defaultSuffix = appendSuffix ? '. ' : '';
        var cjkSuffix = appendSuffix ? '、' : '';
        var koreanSuffix = appendSuffix ? ', ' : '';
        var spaceSuffix = appendSuffix ? ' ' : '';
        switch (type) {
            case 0 /* DISC */:
                return '•' + spaceSuffix;
            case 1 /* CIRCLE */:
                return '◦' + spaceSuffix;
            case 2 /* SQUARE */:
                return '◾' + spaceSuffix;
            case 5 /* DECIMAL_LEADING_ZERO */:
                var string = createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
                return string.length < 4 ? "0" + string : string;
            case 4 /* CJK_DECIMAL */:
                return createCounterStyleFromSymbols(value, '〇一二三四五六七八九', cjkSuffix);
            case 6 /* LOWER_ROMAN */:
                return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, 3 /* DECIMAL */, defaultSuffix).toLowerCase();
            case 7 /* UPPER_ROMAN */:
                return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, 3 /* DECIMAL */, defaultSuffix);
            case 8 /* LOWER_GREEK */:
                return createCounterStyleFromRange(value, 945, 969, false, defaultSuffix);
            case 9 /* LOWER_ALPHA */:
                return createCounterStyleFromRange(value, 97, 122, false, defaultSuffix);
            case 10 /* UPPER_ALPHA */:
                return createCounterStyleFromRange(value, 65, 90, false, defaultSuffix);
            case 11 /* ARABIC_INDIC */:
                return createCounterStyleFromRange(value, 1632, 1641, true, defaultSuffix);
            case 12 /* ARMENIAN */:
            case 49 /* UPPER_ARMENIAN */:
                return createAdditiveCounter(value, 1, 9999, ARMENIAN, 3 /* DECIMAL */, defaultSuffix);
            case 35 /* LOWER_ARMENIAN */:
                return createAdditiveCounter(value, 1, 9999, ARMENIAN, 3 /* DECIMAL */, defaultSuffix).toLowerCase();
            case 13 /* BENGALI */:
                return createCounterStyleFromRange(value, 2534, 2543, true, defaultSuffix);
            case 14 /* CAMBODIAN */:
            case 30 /* KHMER */:
                return createCounterStyleFromRange(value, 6112, 6121, true, defaultSuffix);
            case 15 /* CJK_EARTHLY_BRANCH */:
                return createCounterStyleFromSymbols(value, '子丑寅卯辰巳午未申酉戌亥', cjkSuffix);
            case 16 /* CJK_HEAVENLY_STEM */:
                return createCounterStyleFromSymbols(value, '甲乙丙丁戊己庚辛壬癸', cjkSuffix);
            case 17 /* CJK_IDEOGRAPHIC */:
            case 48 /* TRAD_CHINESE_INFORMAL */:
                return createCJKCounter(value, '零一二三四五六七八九', CHINESE_INFORMAL_MULTIPLIERS, '負', cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
            case 47 /* TRAD_CHINESE_FORMAL */:
                return createCJKCounter(value, '零壹貳參肆伍陸柒捌玖', CHINESE_FORMAL_MULTIPLIERS, '負', cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
            case 42 /* SIMP_CHINESE_INFORMAL */:
                return createCJKCounter(value, '零一二三四五六七八九', CHINESE_INFORMAL_MULTIPLIERS, '负', cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
            case 41 /* SIMP_CHINESE_FORMAL */:
                return createCJKCounter(value, '零壹贰叁肆伍陆柒捌玖', CHINESE_FORMAL_MULTIPLIERS, '负', cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);
            case 26 /* JAPANESE_INFORMAL */:
                return createCJKCounter(value, '〇一二三四五六七八九', '十百千万', JAPANESE_NEGATIVE, cjkSuffix, 0);
            case 25 /* JAPANESE_FORMAL */:
                return createCJKCounter(value, '零壱弐参四伍六七八九', '拾百千万', JAPANESE_NEGATIVE, cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
            case 31 /* KOREAN_HANGUL_FORMAL */:
                return createCJKCounter(value, '영일이삼사오육칠팔구', '십백천만', KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
            case 33 /* KOREAN_HANJA_INFORMAL */:
                return createCJKCounter(value, '零一二三四五六七八九', '十百千萬', KOREAN_NEGATIVE, koreanSuffix, 0);
            case 32 /* KOREAN_HANJA_FORMAL */:
                return createCJKCounter(value, '零壹貳參四五六七八九', '拾百千', KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);
            case 18 /* DEVANAGARI */:
                return createCounterStyleFromRange(value, 0x966, 0x96f, true, defaultSuffix);
            case 20 /* GEORGIAN */:
                return createAdditiveCounter(value, 1, 19999, GEORGIAN, 3 /* DECIMAL */, defaultSuffix);
            case 21 /* GUJARATI */:
                return createCounterStyleFromRange(value, 0xae6, 0xaef, true, defaultSuffix);
            case 22 /* GURMUKHI */:
                return createCounterStyleFromRange(value, 0xa66, 0xa6f, true, defaultSuffix);
            case 22 /* HEBREW */:
                return createAdditiveCounter(value, 1, 10999, HEBREW, 3 /* DECIMAL */, defaultSuffix);
            case 23 /* HIRAGANA */:
                return createCounterStyleFromSymbols(value, 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん');
            case 24 /* HIRAGANA_IROHA */:
                return createCounterStyleFromSymbols(value, 'いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす');
            case 27 /* KANNADA */:
                return createCounterStyleFromRange(value, 0xce6, 0xcef, true, defaultSuffix);
            case 28 /* KATAKANA */:
                return createCounterStyleFromSymbols(value, 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン', cjkSuffix);
            case 29 /* KATAKANA_IROHA */:
                return createCounterStyleFromSymbols(value, 'イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス', cjkSuffix);
            case 34 /* LAO */:
                return createCounterStyleFromRange(value, 0xed0, 0xed9, true, defaultSuffix);
            case 37 /* MONGOLIAN */:
                return createCounterStyleFromRange(value, 0x1810, 0x1819, true, defaultSuffix);
            case 38 /* MYANMAR */:
                return createCounterStyleFromRange(value, 0x1040, 0x1049, true, defaultSuffix);
            case 39 /* ORIYA */:
                return createCounterStyleFromRange(value, 0xb66, 0xb6f, true, defaultSuffix);
            case 40 /* PERSIAN */:
                return createCounterStyleFromRange(value, 0x6f0, 0x6f9, true, defaultSuffix);
            case 43 /* TAMIL */:
                return createCounterStyleFromRange(value, 0xbe6, 0xbef, true, defaultSuffix);
            case 44 /* TELUGU */:
                return createCounterStyleFromRange(value, 0xc66, 0xc6f, true, defaultSuffix);
            case 45 /* THAI */:
                return createCounterStyleFromRange(value, 0xe50, 0xe59, true, defaultSuffix);
            case 46 /* TIBETAN */:
                return createCounterStyleFromRange(value, 0xf20, 0xf29, true, defaultSuffix);
            case 3 /* DECIMAL */:
            default:
                return createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
        }
    };

    var IGNORE_ATTRIBUTE = 'data-html2canvas-ignore';
    var DocumentCloner = /** @class */ (function () {
        function DocumentCloner(context, element, options) {
            this.context = context;
            this.options = options;
            this.scrolledElements = [];
            this.referenceElement = element;
            this.counters = new CounterState();
            this.quoteDepth = 0;
            if (!element.ownerDocument) {
                throw new Error('Cloned element does not have an owner document');
            }
            this.documentElement = this.cloneNode(element.ownerDocument.documentElement, false);
        }
        DocumentCloner.prototype.toIFrame = function (ownerDocument, windowSize) {
            var _this = this;
            var iframe = createIFrameContainer(ownerDocument, windowSize);
            if (!iframe.contentWindow) {
                return Promise.reject("Unable to find iframe window");
            }
            var scrollX = ownerDocument.defaultView.pageXOffset;
            var scrollY = ownerDocument.defaultView.pageYOffset;
            var cloneWindow = iframe.contentWindow;
            var documentClone = cloneWindow.document;
            /* Chrome doesn't detect relative background-images assigned in inline <style> sheets when fetched through getComputedStyle
             if window url is about:blank, we can assign the url to current by writing onto the document
             */
            var iframeLoad = iframeLoader(iframe).then(function () { return __awaiter(_this, void 0, void 0, function () {
                var onclone, referenceElement;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.scrolledElements.forEach(restoreNodeScroll);
                            if (cloneWindow) {
                                cloneWindow.scrollTo(windowSize.left, windowSize.top);
                                if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent) &&
                                    (cloneWindow.scrollY !== windowSize.top || cloneWindow.scrollX !== windowSize.left)) {
                                    this.context.logger.warn('Unable to restore scroll position for cloned document');
                                    this.context.windowBounds = this.context.windowBounds.add(cloneWindow.scrollX - windowSize.left, cloneWindow.scrollY - windowSize.top, 0, 0);
                                }
                            }
                            onclone = this.options.onclone;
                            referenceElement = this.clonedReferenceElement;
                            if (typeof referenceElement === 'undefined') {
                                return [2 /*return*/, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")];
                            }
                            if (!(documentClone.fonts && documentClone.fonts.ready)) return [3 /*break*/, 2];
                            return [4 /*yield*/, documentClone.fonts.ready];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2:
                            if (!/(AppleWebKit)/g.test(navigator.userAgent)) return [3 /*break*/, 4];
                            return [4 /*yield*/, imagesReady(documentClone)];
                        case 3:
                            _a.sent();
                            _a.label = 4;
                        case 4:
                            if (typeof onclone === 'function') {
                                return [2 /*return*/, Promise.resolve()
                                        .then(function () { return onclone(documentClone, referenceElement); })
                                        .then(function () { return iframe; })];
                            }
                            return [2 /*return*/, iframe];
                    }
                });
            }); });
            documentClone.open();
            documentClone.write(serializeDoctype(document.doctype) + "<html></html>");
            // Chrome scrolls the parent document for some reason after the write to the cloned window???
            restoreOwnerScroll(this.referenceElement.ownerDocument, scrollX, scrollY);
            documentClone.replaceChild(documentClone.adoptNode(this.documentElement), documentClone.documentElement);
            documentClone.close();
            return iframeLoad;
        };
        DocumentCloner.prototype.createElementClone = function (node) {
            if (isDebugging(node, 2 /* CLONE */)) {
                debugger;
            }
            if (isCanvasElement(node)) {
                return this.createCanvasClone(node);
            }
            if (isVideoElement(node)) {
                return this.createVideoClone(node);
            }
            if (isStyleElement(node)) {
                return this.createStyleClone(node);
            }
            var clone = node.cloneNode(false);
            if (isImageElement(clone)) {
                if (isImageElement(node) && node.currentSrc && node.currentSrc !== node.src) {
                    clone.src = node.currentSrc;
                    clone.srcset = '';
                }
                if (clone.loading === 'lazy') {
                    clone.loading = 'eager';
                }
            }
            if (isCustomElement(clone)) {
                return this.createCustomElementClone(clone);
            }
            return clone;
        };
        DocumentCloner.prototype.createCustomElementClone = function (node) {
            var clone = document.createElement('html2canvascustomelement');
            copyCSSStyles(node.style, clone);
            return clone;
        };
        DocumentCloner.prototype.createStyleClone = function (node) {
            try {
                var sheet = node.sheet;
                if (sheet && sheet.cssRules) {
                    var css = [].slice.call(sheet.cssRules, 0).reduce(function (css, rule) {
                        if (rule && typeof rule.cssText === 'string') {
                            return css + rule.cssText;
                        }
                        return css;
                    }, '');
                    var style = node.cloneNode(false);
                    style.textContent = css;
                    return style;
                }
            }
            catch (e) {
                // accessing node.sheet.cssRules throws a DOMException
                this.context.logger.error('Unable to access cssRules property', e);
                if (e.name !== 'SecurityError') {
                    throw e;
                }
            }
            return node.cloneNode(false);
        };
        DocumentCloner.prototype.createCanvasClone = function (canvas) {
            var _a;
            if (this.options.inlineImages && canvas.ownerDocument) {
                var img = canvas.ownerDocument.createElement('img');
                try {
                    img.src = canvas.toDataURL();
                    return img;
                }
                catch (e) {
                    this.context.logger.info("Unable to inline canvas contents, canvas is tainted", canvas);
                }
            }
            var clonedCanvas = canvas.cloneNode(false);
            try {
                clonedCanvas.width = canvas.width;
                clonedCanvas.height = canvas.height;
                var ctx = canvas.getContext('2d');
                var clonedCtx = clonedCanvas.getContext('2d');
                if (clonedCtx) {
                    if (!this.options.allowTaint && ctx) {
                        clonedCtx.putImageData(ctx.getImageData(0, 0, canvas.width, canvas.height), 0, 0);
                    }
                    else {
                        var gl = (_a = canvas.getContext('webgl2')) !== null && _a !== void 0 ? _a : canvas.getContext('webgl');
                        if (gl) {
                            var attribs = gl.getContextAttributes();
                            if ((attribs === null || attribs === void 0 ? void 0 : attribs.preserveDrawingBuffer) === false) {
                                this.context.logger.warn('Unable to clone WebGL context as it has preserveDrawingBuffer=false', canvas);
                            }
                        }
                        clonedCtx.drawImage(canvas, 0, 0);
                    }
                }
                return clonedCanvas;
            }
            catch (e) {
                this.context.logger.info("Unable to clone canvas as it is tainted", canvas);
            }
            return clonedCanvas;
        };
        DocumentCloner.prototype.createVideoClone = function (video) {
            var canvas = video.ownerDocument.createElement('canvas');
            canvas.width = video.offsetWidth;
            canvas.height = video.offsetHeight;
            var ctx = canvas.getContext('2d');
            try {
                if (ctx) {
                    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                    if (!this.options.allowTaint) {
                        ctx.getImageData(0, 0, canvas.width, canvas.height);
                    }
                }
                return canvas;
            }
            catch (e) {
                this.context.logger.info("Unable to clone video as it is tainted", video);
            }
            var blankCanvas = video.ownerDocument.createElement('canvas');
            blankCanvas.width = video.offsetWidth;
            blankCanvas.height = video.offsetHeight;
            return blankCanvas;
        };
        DocumentCloner.prototype.appendChildNode = function (clone, child, copyStyles) {
            if (!isElementNode(child) ||
                (!isScriptElement(child) &&
                    !child.hasAttribute(IGNORE_ATTRIBUTE) &&
                    (typeof this.options.ignoreElements !== 'function' || !this.options.ignoreElements(child)))) {
                if (!this.options.copyStyles || !isElementNode(child) || !isStyleElement(child)) {
                    clone.appendChild(this.cloneNode(child, copyStyles));
                }
            }
        };
        DocumentCloner.prototype.cloneChildNodes = function (node, clone, copyStyles) {
            var _this = this;
            for (var child = node.shadowRoot ? node.shadowRoot.firstChild : node.firstChild; child; child = child.nextSibling) {
                if (isElementNode(child) && isSlotElement(child) && typeof child.assignedNodes === 'function') {
                    var assignedNodes = child.assignedNodes();
                    if (assignedNodes.length) {
                        assignedNodes.forEach(function (assignedNode) { return _this.appendChildNode(clone, assignedNode, copyStyles); });
                    }
                }
                else {
                    this.appendChildNode(clone, child, copyStyles);
                }
            }
        };
        DocumentCloner.prototype.cloneNode = function (node, copyStyles) {
            if (isTextNode(node)) {
                return document.createTextNode(node.data);
            }
            if (!node.ownerDocument) {
                return node.cloneNode(false);
            }
            var window = node.ownerDocument.defaultView;
            if (window && isElementNode(node) && (isHTMLElementNode(node) || isSVGElementNode(node))) {
                var clone = this.createElementClone(node);
                clone.style.transitionProperty = 'none';
                var style = window.getComputedStyle(node);
                var styleBefore = window.getComputedStyle(node, ':before');
                var styleAfter = window.getComputedStyle(node, ':after');
                if (this.referenceElement === node && isHTMLElementNode(clone)) {
                    this.clonedReferenceElement = clone;
                }
                if (isBodyElement(clone)) {
                    createPseudoHideStyles(clone);
                }
                var counters = this.counters.parse(new CSSParsedCounterDeclaration(this.context, style));
                var before = this.resolvePseudoContent(node, clone, styleBefore, PseudoElementType.BEFORE);
                if (isCustomElement(node)) {
                    copyStyles = true;
                }
                if (!isVideoElement(node)) {
                    this.cloneChildNodes(node, clone, copyStyles);
                }
                if (before) {
                    clone.insertBefore(before, clone.firstChild);
                }
                var after = this.resolvePseudoContent(node, clone, styleAfter, PseudoElementType.AFTER);
                if (after) {
                    clone.appendChild(after);
                }
                this.counters.pop(counters);
                if ((style && (this.options.copyStyles || isSVGElementNode(node)) && !isIFrameElement(node)) ||
                    copyStyles) {
                    copyCSSStyles(style, clone);
                }
                if (node.scrollTop !== 0 || node.scrollLeft !== 0) {
                    this.scrolledElements.push([clone, node.scrollLeft, node.scrollTop]);
                }
                if ((isTextareaElement(node) || isSelectElement(node)) &&
                    (isTextareaElement(clone) || isSelectElement(clone))) {
                    clone.value = node.value;
                }
                return clone;
            }
            return node.cloneNode(false);
        };
        DocumentCloner.prototype.resolvePseudoContent = function (node, clone, style, pseudoElt) {
            var _this = this;
            if (!style) {
                return;
            }
            var value = style.content;
            var document = clone.ownerDocument;
            if (!document || !value || value === 'none' || value === '-moz-alt-content' || style.display === 'none') {
                return;
            }
            this.counters.parse(new CSSParsedCounterDeclaration(this.context, style));
            var declaration = new CSSParsedPseudoDeclaration(this.context, style);
            var anonymousReplacedElement = document.createElement('html2canvaspseudoelement');
            copyCSSStyles(style, anonymousReplacedElement);
            declaration.content.forEach(function (token) {
                if (token.type === 0 /* STRING_TOKEN */) {
                    anonymousReplacedElement.appendChild(document.createTextNode(token.value));
                }
                else if (token.type === 22 /* URL_TOKEN */) {
                    var img = document.createElement('img');
                    img.src = token.value;
                    img.style.opacity = '1';
                    anonymousReplacedElement.appendChild(img);
                }
                else if (token.type === 18 /* FUNCTION */) {
                    if (token.name === 'attr') {
                        var attr = token.values.filter(isIdentToken);
                        if (attr.length) {
                            anonymousReplacedElement.appendChild(document.createTextNode(node.getAttribute(attr[0].value) || ''));
                        }
                    }
                    else if (token.name === 'counter') {
                        var _a = token.values.filter(nonFunctionArgSeparator), counter = _a[0], counterStyle = _a[1];
                        if (counter && isIdentToken(counter)) {
                            var counterState = _this.counters.getCounterValue(counter.value);
                            var counterType = counterStyle && isIdentToken(counterStyle)
                                ? listStyleType.parse(_this.context, counterStyle.value)
                                : 3 /* DECIMAL */;
                            anonymousReplacedElement.appendChild(document.createTextNode(createCounterText(counterState, counterType, false)));
                        }
                    }
                    else if (token.name === 'counters') {
                        var _b = token.values.filter(nonFunctionArgSeparator), counter = _b[0], delim = _b[1], counterStyle = _b[2];
                        if (counter && isIdentToken(counter)) {
                            var counterStates = _this.counters.getCounterValues(counter.value);
                            var counterType_1 = counterStyle && isIdentToken(counterStyle)
                                ? listStyleType.parse(_this.context, counterStyle.value)
                                : 3 /* DECIMAL */;
                            var separator = delim && delim.type === 0 /* STRING_TOKEN */ ? delim.value : '';
                            var text = counterStates
                                .map(function (value) { return createCounterText(value, counterType_1, false); })
                                .join(separator);
                            anonymousReplacedElement.appendChild(document.createTextNode(text));
                        }
                    }
                    else ;
                }
                else if (token.type === 20 /* IDENT_TOKEN */) {
                    switch (token.value) {
                        case 'open-quote':
                            anonymousReplacedElement.appendChild(document.createTextNode(getQuote(declaration.quotes, _this.quoteDepth++, true)));
                            break;
                        case 'close-quote':
                            anonymousReplacedElement.appendChild(document.createTextNode(getQuote(declaration.quotes, --_this.quoteDepth, false)));
                            break;
                        default:
                            // safari doesn't parse string tokens correctly because of lack of quotes
                            anonymousReplacedElement.appendChild(document.createTextNode(token.value));
                    }
                }
            });
            anonymousReplacedElement.className = PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + " " + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
            var newClassName = pseudoElt === PseudoElementType.BEFORE
                ? " " + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE
                : " " + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
            if (isSVGElementNode(clone)) {
                clone.className.baseValue += newClassName;
            }
            else {
                clone.className += newClassName;
            }
            return anonymousReplacedElement;
        };
        DocumentCloner.destroy = function (container) {
            if (container.parentNode) {
                container.parentNode.removeChild(container);
                return true;
            }
            return false;
        };
        return DocumentCloner;
    }());
    var PseudoElementType;
    (function (PseudoElementType) {
        PseudoElementType[PseudoElementType["BEFORE"] = 0] = "BEFORE";
        PseudoElementType[PseudoElementType["AFTER"] = 1] = "AFTER";
    })(PseudoElementType || (PseudoElementType = {}));
    var createIFrameContainer = function (ownerDocument, bounds) {
        var cloneIframeContainer = ownerDocument.createElement('iframe');
        cloneIframeContainer.className = 'html2canvas-container';
        cloneIframeContainer.style.visibility = 'hidden';
        cloneIframeContainer.style.position = 'fixed';
        cloneIframeContainer.style.left = '-10000px';
        cloneIframeContainer.style.top = '0px';
        cloneIframeContainer.style.border = '0';
        cloneIframeContainer.width = bounds.width.toString();
        cloneIframeContainer.height = bounds.height.toString();
        cloneIframeContainer.scrolling = 'no'; // ios won't scroll without it
        cloneIframeContainer.setAttribute(IGNORE_ATTRIBUTE, 'true');
        ownerDocument.body.appendChild(cloneIframeContainer);
        return cloneIframeContainer;
    };
    var imageReady = function (img) {
        return new Promise(function (resolve) {
            if (img.complete) {
                resolve();
                return;
            }
            if (!img.src) {
                resolve();
                return;
            }
            img.onload = resolve;
            img.onerror = resolve;
        });
    };
    var imagesReady = function (document) {
        return Promise.all([].slice.call(document.images, 0).map(imageReady));
    };
    var iframeLoader = function (iframe) {
        return new Promise(function (resolve, reject) {
            var cloneWindow = iframe.contentWindow;
            if (!cloneWindow) {
                return reject("No window assigned for iframe");
            }
            var documentClone = cloneWindow.document;
            cloneWindow.onload = iframe.onload = function () {
                cloneWindow.onload = iframe.onload = null;
                var interval = setInterval(function () {
                    if (documentClone.body.childNodes.length > 0 && documentClone.readyState === 'complete') {
                        clearInterval(interval);
                        resolve(iframe);
                    }
                }, 50);
            };
        });
    };
    var ignoredStyleProperties = [
        'all',
        'd',
        'content' // Safari shows pseudoelements if content is set
    ];
    var copyCSSStyles = function (style, target) {
        // Edge does not provide value for cssText
        for (var i = style.length - 1; i >= 0; i--) {
            var property = style.item(i);
            if (ignoredStyleProperties.indexOf(property) === -1) {
                target.style.setProperty(property, style.getPropertyValue(property));
            }
        }
        return target;
    };
    var serializeDoctype = function (doctype) {
        var str = '';
        if (doctype) {
            str += '<!DOCTYPE ';
            if (doctype.name) {
                str += doctype.name;
            }
            if (doctype.internalSubset) {
                str += doctype.internalSubset;
            }
            if (doctype.publicId) {
                str += "\"" + doctype.publicId + "\"";
            }
            if (doctype.systemId) {
                str += "\"" + doctype.systemId + "\"";
            }
            str += '>';
        }
        return str;
    };
    var restoreOwnerScroll = function (ownerDocument, x, y) {
        if (ownerDocument &&
            ownerDocument.defaultView &&
            (x !== ownerDocument.defaultView.pageXOffset || y !== ownerDocument.defaultView.pageYOffset)) {
            ownerDocument.defaultView.scrollTo(x, y);
        }
    };
    var restoreNodeScroll = function (_a) {
        var element = _a[0], x = _a[1], y = _a[2];
        element.scrollLeft = x;
        element.scrollTop = y;
    };
    var PSEUDO_BEFORE = ':before';
    var PSEUDO_AFTER = ':after';
    var PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = '___html2canvas___pseudoelement_before';
    var PSEUDO_HIDE_ELEMENT_CLASS_AFTER = '___html2canvas___pseudoelement_after';
    var PSEUDO_HIDE_ELEMENT_STYLE = "{\n    content: \"\" !important;\n    display: none !important;\n}";
    var createPseudoHideStyles = function (body) {
        createStyles(body, "." + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + PSEUDO_BEFORE + PSEUDO_HIDE_ELEMENT_STYLE + "\n         ." + PSEUDO_HIDE_ELEMENT_CLASS_AFTER + PSEUDO_AFTER + PSEUDO_HIDE_ELEMENT_STYLE);
    };
    var createStyles = function (body, styles) {
        var document = body.ownerDocument;
        if (document) {
            var style = document.createElement('style');
            style.textContent = styles;
            body.appendChild(style);
        }
    };

    var CacheStorage = /** @class */ (function () {
        function CacheStorage() {
        }
        CacheStorage.getOrigin = function (url) {
            var link = CacheStorage._link;
            if (!link) {
                return 'about:blank';
            }
            link.href = url;
            link.href = link.href; // IE9, LOL! - http://jsfiddle.net/niklasvh/2e48b/
            return link.protocol + link.hostname + link.port;
        };
        CacheStorage.isSameOrigin = function (src) {
            return CacheStorage.getOrigin(src) === CacheStorage._origin;
        };
        CacheStorage.setContext = function (window) {
            CacheStorage._link = window.document.createElement('a');
            CacheStorage._origin = CacheStorage.getOrigin(window.location.href);
        };
        CacheStorage._origin = 'about:blank';
        return CacheStorage;
    }());
    var Cache = /** @class */ (function () {
        function Cache(context, _options) {
            this.context = context;
            this._options = _options;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this._cache = {};
        }
        Cache.prototype.addImage = function (src) {
            var result = Promise.resolve();
            if (this.has(src)) {
                return result;
            }
            if (isBlobImage(src) || isRenderable(src)) {
                (this._cache[src] = this.loadImage(src)).catch(function () {
                    // prevent unhandled rejection
                });
                return result;
            }
            return result;
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Cache.prototype.match = function (src) {
            return this._cache[src];
        };
        Cache.prototype.loadImage = function (key) {
            return __awaiter(this, void 0, void 0, function () {
                var isSameOrigin, useCORS, useProxy, src;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            isSameOrigin = CacheStorage.isSameOrigin(key);
                            useCORS = !isInlineImage(key) && this._options.useCORS === true && FEATURES.SUPPORT_CORS_IMAGES && !isSameOrigin;
                            useProxy = !isInlineImage(key) &&
                                !isSameOrigin &&
                                !isBlobImage(key) &&
                                typeof this._options.proxy === 'string' &&
                                FEATURES.SUPPORT_CORS_XHR &&
                                !useCORS;
                            if (!isSameOrigin &&
                                this._options.allowTaint === false &&
                                !isInlineImage(key) &&
                                !isBlobImage(key) &&
                                !useProxy &&
                                !useCORS) {
                                return [2 /*return*/];
                            }
                            src = key;
                            if (!useProxy) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.proxy(src)];
                        case 1:
                            src = _a.sent();
                            _a.label = 2;
                        case 2:
                            this.context.logger.debug("Added image " + key.substring(0, 256));
                            return [4 /*yield*/, new Promise(function (resolve, reject) {
                                    var img = new Image();
                                    img.onload = function () { return resolve(img); };
                                    img.onerror = reject;
                                    //ios safari 10.3 taints canvas with data urls unless crossOrigin is set to anonymous
                                    if (isInlineBase64Image(src) || useCORS) {
                                        img.crossOrigin = 'anonymous';
                                    }
                                    img.src = src;
                                    if (img.complete === true) {
                                        // Inline XML images may fail to parse, throwing an Error later on
                                        setTimeout(function () { return resolve(img); }, 500);
                                    }
                                    if (_this._options.imageTimeout > 0) {
                                        setTimeout(function () { return reject("Timed out (" + _this._options.imageTimeout + "ms) loading image"); }, _this._options.imageTimeout);
                                    }
                                })];
                        case 3: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        Cache.prototype.has = function (key) {
            return typeof this._cache[key] !== 'undefined';
        };
        Cache.prototype.keys = function () {
            return Promise.resolve(Object.keys(this._cache));
        };
        Cache.prototype.proxy = function (src) {
            var _this = this;
            var proxy = this._options.proxy;
            if (!proxy) {
                throw new Error('No proxy defined');
            }
            var key = src.substring(0, 256);
            return new Promise(function (resolve, reject) {
                var responseType = FEATURES.SUPPORT_RESPONSE_TYPE ? 'blob' : 'text';
                var xhr = new XMLHttpRequest();
                xhr.onload = function () {
                    if (xhr.status === 200) {
                        if (responseType === 'text') {
                            resolve(xhr.response);
                        }
                        else {
                            var reader_1 = new FileReader();
                            reader_1.addEventListener('load', function () { return resolve(reader_1.result); }, false);
                            reader_1.addEventListener('error', function (e) { return reject(e); }, false);
                            reader_1.readAsDataURL(xhr.response);
                        }
                    }
                    else {
                        reject("Failed to proxy resource " + key + " with status code " + xhr.status);
                    }
                };
                xhr.onerror = reject;
                var queryString = proxy.indexOf('?') > -1 ? '&' : '?';
                xhr.open('GET', "" + proxy + queryString + "url=" + encodeURIComponent(src) + "&responseType=" + responseType);
                if (responseType !== 'text' && xhr instanceof XMLHttpRequest) {
                    xhr.responseType = responseType;
                }
                if (_this._options.imageTimeout) {
                    var timeout_1 = _this._options.imageTimeout;
                    xhr.timeout = timeout_1;
                    xhr.ontimeout = function () { return reject("Timed out (" + timeout_1 + "ms) proxying " + key); };
                }
                xhr.send();
            });
        };
        return Cache;
    }());
    var INLINE_SVG = /^data:image\/svg\+xml/i;
    var INLINE_BASE64 = /^data:image\/.*;base64,/i;
    var INLINE_IMG = /^data:image\/.*/i;
    var isRenderable = function (src) { return FEATURES.SUPPORT_SVG_DRAWING || !isSVG(src); };
    var isInlineImage = function (src) { return INLINE_IMG.test(src); };
    var isInlineBase64Image = function (src) { return INLINE_BASE64.test(src); };
    var isBlobImage = function (src) { return src.substr(0, 4) === 'blob'; };
    var isSVG = function (src) { return src.substr(-3).toLowerCase() === 'svg' || INLINE_SVG.test(src); };

    var Vector = /** @class */ (function () {
        function Vector(x, y) {
            this.type = 0 /* VECTOR */;
            this.x = x;
            this.y = y;
        }
        Vector.prototype.add = function (deltaX, deltaY) {
            return new Vector(this.x + deltaX, this.y + deltaY);
        };
        return Vector;
    }());

    var lerp = function (a, b, t) {
        return new Vector(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t);
    };
    var BezierCurve = /** @class */ (function () {
        function BezierCurve(start, startControl, endControl, end) {
            this.type = 1 /* BEZIER_CURVE */;
            this.start = start;
            this.startControl = startControl;
            this.endControl = endControl;
            this.end = end;
        }
        BezierCurve.prototype.subdivide = function (t, firstHalf) {
            var ab = lerp(this.start, this.startControl, t);
            var bc = lerp(this.startControl, this.endControl, t);
            var cd = lerp(this.endControl, this.end, t);
            var abbc = lerp(ab, bc, t);
            var bccd = lerp(bc, cd, t);
            var dest = lerp(abbc, bccd, t);
            return firstHalf ? new BezierCurve(this.start, ab, abbc, dest) : new BezierCurve(dest, bccd, cd, this.end);
        };
        BezierCurve.prototype.add = function (deltaX, deltaY) {
            return new BezierCurve(this.start.add(deltaX, deltaY), this.startControl.add(deltaX, deltaY), this.endControl.add(deltaX, deltaY), this.end.add(deltaX, deltaY));
        };
        BezierCurve.prototype.reverse = function () {
            return new BezierCurve(this.end, this.endControl, this.startControl, this.start);
        };
        return BezierCurve;
    }());
    var isBezierCurve = function (path) { return path.type === 1 /* BEZIER_CURVE */; };

    var BoundCurves = /** @class */ (function () {
        function BoundCurves(element) {
            var styles = element.styles;
            var bounds = element.bounds;
            var _a = getAbsoluteValueForTuple(styles.borderTopLeftRadius, bounds.width, bounds.height), tlh = _a[0], tlv = _a[1];
            var _b = getAbsoluteValueForTuple(styles.borderTopRightRadius, bounds.width, bounds.height), trh = _b[0], trv = _b[1];
            var _c = getAbsoluteValueForTuple(styles.borderBottomRightRadius, bounds.width, bounds.height), brh = _c[0], brv = _c[1];
            var _d = getAbsoluteValueForTuple(styles.borderBottomLeftRadius, bounds.width, bounds.height), blh = _d[0], blv = _d[1];
            var factors = [];
            factors.push((tlh + trh) / bounds.width);
            factors.push((blh + brh) / bounds.width);
            factors.push((tlv + blv) / bounds.height);
            factors.push((trv + brv) / bounds.height);
            var maxFactor = Math.max.apply(Math, factors);
            if (maxFactor > 1) {
                tlh /= maxFactor;
                tlv /= maxFactor;
                trh /= maxFactor;
                trv /= maxFactor;
                brh /= maxFactor;
                brv /= maxFactor;
                blh /= maxFactor;
                blv /= maxFactor;
            }
            var topWidth = bounds.width - trh;
            var rightHeight = bounds.height - brv;
            var bottomWidth = bounds.width - brh;
            var leftHeight = bounds.height - blv;
            var borderTopWidth = styles.borderTopWidth;
            var borderRightWidth = styles.borderRightWidth;
            var borderBottomWidth = styles.borderBottomWidth;
            var borderLeftWidth = styles.borderLeftWidth;
            var paddingTop = getAbsoluteValue(styles.paddingTop, element.bounds.width);
            var paddingRight = getAbsoluteValue(styles.paddingRight, element.bounds.width);
            var paddingBottom = getAbsoluteValue(styles.paddingBottom, element.bounds.width);
            var paddingLeft = getAbsoluteValue(styles.paddingLeft, element.bounds.width);
            this.topLeftBorderDoubleOuterBox =
                tlh > 0 || tlv > 0
                    ? getCurvePoints(bounds.left + borderLeftWidth / 3, bounds.top + borderTopWidth / 3, tlh - borderLeftWidth / 3, tlv - borderTopWidth / 3, CORNER.TOP_LEFT)
                    : new Vector(bounds.left + borderLeftWidth / 3, bounds.top + borderTopWidth / 3);
            this.topRightBorderDoubleOuterBox =
                tlh > 0 || tlv > 0
                    ? getCurvePoints(bounds.left + topWidth, bounds.top + borderTopWidth / 3, trh - borderRightWidth / 3, trv - borderTopWidth / 3, CORNER.TOP_RIGHT)
                    : new Vector(bounds.left + bounds.width - borderRightWidth / 3, bounds.top + borderTopWidth / 3);
            this.bottomRightBorderDoubleOuterBox =
                brh > 0 || brv > 0
                    ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - borderRightWidth / 3, brv - borderBottomWidth / 3, CORNER.BOTTOM_RIGHT)
                    : new Vector(bounds.left + bounds.width - borderRightWidth / 3, bounds.top + bounds.height - borderBottomWidth / 3);
            this.bottomLeftBorderDoubleOuterBox =
                blh > 0 || blv > 0
                    ? getCurvePoints(bounds.left + borderLeftWidth / 3, bounds.top + leftHeight, blh - borderLeftWidth / 3, blv - borderBottomWidth / 3, CORNER.BOTTOM_LEFT)
                    : new Vector(bounds.left + borderLeftWidth / 3, bounds.top + bounds.height - borderBottomWidth / 3);
            this.topLeftBorderDoubleInnerBox =
                tlh > 0 || tlv > 0
                    ? getCurvePoints(bounds.left + (borderLeftWidth * 2) / 3, bounds.top + (borderTopWidth * 2) / 3, tlh - (borderLeftWidth * 2) / 3, tlv - (borderTopWidth * 2) / 3, CORNER.TOP_LEFT)
                    : new Vector(bounds.left + (borderLeftWidth * 2) / 3, bounds.top + (borderTopWidth * 2) / 3);
            this.topRightBorderDoubleInnerBox =
                tlh > 0 || tlv > 0
                    ? getCurvePoints(bounds.left + topWidth, bounds.top + (borderTopWidth * 2) / 3, trh - (borderRightWidth * 2) / 3, trv - (borderTopWidth * 2) / 3, CORNER.TOP_RIGHT)
                    : new Vector(bounds.left + bounds.width - (borderRightWidth * 2) / 3, bounds.top + (borderTopWidth * 2) / 3);
            this.bottomRightBorderDoubleInnerBox =
                brh > 0 || brv > 0
                    ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - (borderRightWidth * 2) / 3, brv - (borderBottomWidth * 2) / 3, CORNER.BOTTOM_RIGHT)
                    : new Vector(bounds.left + bounds.width - (borderRightWidth * 2) / 3, bounds.top + bounds.height - (borderBottomWidth * 2) / 3);
            this.bottomLeftBorderDoubleInnerBox =
                blh > 0 || blv > 0
                    ? getCurvePoints(bounds.left + (borderLeftWidth * 2) / 3, bounds.top + leftHeight, blh - (borderLeftWidth * 2) / 3, blv - (borderBottomWidth * 2) / 3, CORNER.BOTTOM_LEFT)
                    : new Vector(bounds.left + (borderLeftWidth * 2) / 3, bounds.top + bounds.height - (borderBottomWidth * 2) / 3);
            this.topLeftBorderStroke =
                tlh > 0 || tlv > 0
                    ? getCurvePoints(bounds.left + borderLeftWidth / 2, bounds.top + borderTopWidth / 2, tlh - borderLeftWidth / 2, tlv - borderTopWidth / 2, CORNER.TOP_LEFT)
                    : new Vector(bounds.left + borderLeftWidth / 2, bounds.top + borderTopWidth / 2);
            this.topRightBorderStroke =
                tlh > 0 || tlv > 0
                    ? getCurvePoints(bounds.left + topWidth, bounds.top + borderTopWidth / 2, trh - borderRightWidth / 2, trv - borderTopWidth / 2, CORNER.TOP_RIGHT)
                    : new Vector(bounds.left + bounds.width - borderRightWidth / 2, bounds.top + borderTopWidth / 2);
            this.bottomRightBorderStroke =
                brh > 0 || brv > 0
                    ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - borderRightWidth / 2, brv - borderBottomWidth / 2, CORNER.BOTTOM_RIGHT)
                    : new Vector(bounds.left + bounds.width - borderRightWidth / 2, bounds.top + bounds.height - borderBottomWidth / 2);
            this.bottomLeftBorderStroke =
                blh > 0 || blv > 0
                    ? getCurvePoints(bounds.left + borderLeftWidth / 2, bounds.top + leftHeight, blh - borderLeftWidth / 2, blv - borderBottomWidth / 2, CORNER.BOTTOM_LEFT)
                    : new Vector(bounds.left + borderLeftWidth / 2, bounds.top + bounds.height - borderBottomWidth / 2);
            this.topLeftBorderBox =
                tlh > 0 || tlv > 0
                    ? getCurvePoints(bounds.left, bounds.top, tlh, tlv, CORNER.TOP_LEFT)
                    : new Vector(bounds.left, bounds.top);
            this.topRightBorderBox =
                trh > 0 || trv > 0
                    ? getCurvePoints(bounds.left + topWidth, bounds.top, trh, trv, CORNER.TOP_RIGHT)
                    : new Vector(bounds.left + bounds.width, bounds.top);
            this.bottomRightBorderBox =
                brh > 0 || brv > 0
                    ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh, brv, CORNER.BOTTOM_RIGHT)
                    : new Vector(bounds.left + bounds.width, bounds.top + bounds.height);
            this.bottomLeftBorderBox =
                blh > 0 || blv > 0
                    ? getCurvePoints(bounds.left, bounds.top + leftHeight, blh, blv, CORNER.BOTTOM_LEFT)
                    : new Vector(bounds.left, bounds.top + bounds.height);
            this.topLeftPaddingBox =
                tlh > 0 || tlv > 0
                    ? getCurvePoints(bounds.left + borderLeftWidth, bounds.top + borderTopWidth, Math.max(0, tlh - borderLeftWidth), Math.max(0, tlv - borderTopWidth), CORNER.TOP_LEFT)
                    : new Vector(bounds.left + borderLeftWidth, bounds.top + borderTopWidth);
            this.topRightPaddingBox =
                trh > 0 || trv > 0
                    ? getCurvePoints(bounds.left + Math.min(topWidth, bounds.width - borderRightWidth), bounds.top + borderTopWidth, topWidth > bounds.width + borderRightWidth ? 0 : Math.max(0, trh - borderRightWidth), Math.max(0, trv - borderTopWidth), CORNER.TOP_RIGHT)
                    : new Vector(bounds.left + bounds.width - borderRightWidth, bounds.top + borderTopWidth);
            this.bottomRightPaddingBox =
                brh > 0 || brv > 0
                    ? getCurvePoints(bounds.left + Math.min(bottomWidth, bounds.width - borderLeftWidth), bounds.top + Math.min(rightHeight, bounds.height - borderBottomWidth), Math.max(0, brh - borderRightWidth), Math.max(0, brv - borderBottomWidth), CORNER.BOTTOM_RIGHT)
                    : new Vector(bounds.left + bounds.width - borderRightWidth, bounds.top + bounds.height - borderBottomWidth);
            this.bottomLeftPaddingBox =
                blh > 0 || blv > 0
                    ? getCurvePoints(bounds.left + borderLeftWidth, bounds.top + Math.min(leftHeight, bounds.height - borderBottomWidth), Math.max(0, blh - borderLeftWidth), Math.max(0, blv - borderBottomWidth), CORNER.BOTTOM_LEFT)
                    : new Vector(bounds.left + borderLeftWidth, bounds.top + bounds.height - borderBottomWidth);
            this.topLeftContentBox =
                tlh > 0 || tlv > 0
                    ? getCurvePoints(bounds.left + borderLeftWidth + paddingLeft, bounds.top + borderTopWidth + paddingTop, Math.max(0, tlh - (borderLeftWidth + paddingLeft)), Math.max(0, tlv - (borderTopWidth + paddingTop)), CORNER.TOP_LEFT)
                    : new Vector(bounds.left + borderLeftWidth + paddingLeft, bounds.top + borderTopWidth + paddingTop);
            this.topRightContentBox =
                trh > 0 || trv > 0
                    ? getCurvePoints(bounds.left + Math.min(topWidth, bounds.width + borderLeftWidth + paddingLeft), bounds.top + borderTopWidth + paddingTop, topWidth > bounds.width + borderLeftWidth + paddingLeft ? 0 : trh - borderLeftWidth + paddingLeft, trv - (borderTopWidth + paddingTop), CORNER.TOP_RIGHT)
                    : new Vector(bounds.left + bounds.width - (borderRightWidth + paddingRight), bounds.top + borderTopWidth + paddingTop);
            this.bottomRightContentBox =
                brh > 0 || brv > 0
                    ? getCurvePoints(bounds.left + Math.min(bottomWidth, bounds.width - (borderLeftWidth + paddingLeft)), bounds.top + Math.min(rightHeight, bounds.height + borderTopWidth + paddingTop), Math.max(0, brh - (borderRightWidth + paddingRight)), brv - (borderBottomWidth + paddingBottom), CORNER.BOTTOM_RIGHT)
                    : new Vector(bounds.left + bounds.width - (borderRightWidth + paddingRight), bounds.top + bounds.height - (borderBottomWidth + paddingBottom));
            this.bottomLeftContentBox =
                blh > 0 || blv > 0
                    ? getCurvePoints(bounds.left + borderLeftWidth + paddingLeft, bounds.top + leftHeight, Math.max(0, blh - (borderLeftWidth + paddingLeft)), blv - (borderBottomWidth + paddingBottom), CORNER.BOTTOM_LEFT)
                    : new Vector(bounds.left + borderLeftWidth + paddingLeft, bounds.top + bounds.height - (borderBottomWidth + paddingBottom));
        }
        return BoundCurves;
    }());
    var CORNER;
    (function (CORNER) {
        CORNER[CORNER["TOP_LEFT"] = 0] = "TOP_LEFT";
        CORNER[CORNER["TOP_RIGHT"] = 1] = "TOP_RIGHT";
        CORNER[CORNER["BOTTOM_RIGHT"] = 2] = "BOTTOM_RIGHT";
        CORNER[CORNER["BOTTOM_LEFT"] = 3] = "BOTTOM_LEFT";
    })(CORNER || (CORNER = {}));
    var getCurvePoints = function (x, y, r1, r2, position) {
        var kappa = 4 * ((Math.sqrt(2) - 1) / 3);
        var ox = r1 * kappa; // control point offset horizontal
        var oy = r2 * kappa; // control point offset vertical
        var xm = x + r1; // x-middle
        var ym = y + r2; // y-middle
        switch (position) {
            case CORNER.TOP_LEFT:
                return new BezierCurve(new Vector(x, ym), new Vector(x, ym - oy), new Vector(xm - ox, y), new Vector(xm, y));
            case CORNER.TOP_RIGHT:
                return new BezierCurve(new Vector(x, y), new Vector(x + ox, y), new Vector(xm, ym - oy), new Vector(xm, ym));
            case CORNER.BOTTOM_RIGHT:
                return new BezierCurve(new Vector(xm, y), new Vector(xm, y + oy), new Vector(x + ox, ym), new Vector(x, ym));
            case CORNER.BOTTOM_LEFT:
            default:
                return new BezierCurve(new Vector(xm, ym), new Vector(xm - ox, ym), new Vector(x, y + oy), new Vector(x, y));
        }
    };
    var calculateBorderBoxPath = function (curves) {
        return [curves.topLeftBorderBox, curves.topRightBorderBox, curves.bottomRightBorderBox, curves.bottomLeftBorderBox];
    };
    var calculateContentBoxPath = function (curves) {
        return [
            curves.topLeftContentBox,
            curves.topRightContentBox,
            curves.bottomRightContentBox,
            curves.bottomLeftContentBox
        ];
    };
    var calculatePaddingBoxPath = function (curves) {
        return [
            curves.topLeftPaddingBox,
            curves.topRightPaddingBox,
            curves.bottomRightPaddingBox,
            curves.bottomLeftPaddingBox
        ];
    };

    var TransformEffect = /** @class */ (function () {
        function TransformEffect(offsetX, offsetY, matrix) {
            this.offsetX = offsetX;
            this.offsetY = offsetY;
            this.matrix = matrix;
            this.type = 0 /* TRANSFORM */;
            this.target = 2 /* BACKGROUND_BORDERS */ | 4 /* CONTENT */;
        }
        return TransformEffect;
    }());
    var ClipEffect = /** @class */ (function () {
        function ClipEffect(path, target) {
            this.path = path;
            this.target = target;
            this.type = 1 /* CLIP */;
        }
        return ClipEffect;
    }());
    var OpacityEffect = /** @class */ (function () {
        function OpacityEffect(opacity) {
            this.opacity = opacity;
            this.type = 2 /* OPACITY */;
            this.target = 2 /* BACKGROUND_BORDERS */ | 4 /* CONTENT */;
        }
        return OpacityEffect;
    }());
    var isTransformEffect = function (effect) {
        return effect.type === 0 /* TRANSFORM */;
    };
    var isClipEffect = function (effect) { return effect.type === 1 /* CLIP */; };
    var isOpacityEffect = function (effect) { return effect.type === 2 /* OPACITY */; };

    var equalPath = function (a, b) {
        if (a.length === b.length) {
            return a.some(function (v, i) { return v === b[i]; });
        }
        return false;
    };
    var transformPath = function (path, deltaX, deltaY, deltaW, deltaH) {
        return path.map(function (point, index) {
            switch (index) {
                case 0:
                    return point.add(deltaX, deltaY);
                case 1:
                    return point.add(deltaX + deltaW, deltaY);
                case 2:
                    return point.add(deltaX + deltaW, deltaY + deltaH);
                case 3:
                    return point.add(deltaX, deltaY + deltaH);
            }
            return point;
        });
    };

    var StackingContext = /** @class */ (function () {
        function StackingContext(container) {
            this.element = container;
            this.inlineLevel = [];
            this.nonInlineLevel = [];
            this.negativeZIndex = [];
            this.zeroOrAutoZIndexOrTransformedOrOpacity = [];
            this.positiveZIndex = [];
            this.nonPositionedFloats = [];
            this.nonPositionedInlineLevel = [];
        }
        return StackingContext;
    }());
    var ElementPaint = /** @class */ (function () {
        function ElementPaint(container, parent) {
            this.container = container;
            this.parent = parent;
            this.effects = [];
            this.curves = new BoundCurves(this.container);
            if (this.container.styles.opacity < 1) {
                this.effects.push(new OpacityEffect(this.container.styles.opacity));
            }
            if (this.container.styles.transform !== null) {
                var offsetX = this.container.bounds.left + this.container.styles.transformOrigin[0].number;
                var offsetY = this.container.bounds.top + this.container.styles.transformOrigin[1].number;
                var matrix = this.container.styles.transform;
                this.effects.push(new TransformEffect(offsetX, offsetY, matrix));
            }
            if (this.container.styles.overflowX !== 0 /* VISIBLE */) {
                var borderBox = calculateBorderBoxPath(this.curves);
                var paddingBox = calculatePaddingBoxPath(this.curves);
                if (equalPath(borderBox, paddingBox)) {
                    this.effects.push(new ClipEffect(borderBox, 2 /* BACKGROUND_BORDERS */ | 4 /* CONTENT */));
                }
                else {
                    this.effects.push(new ClipEffect(borderBox, 2 /* BACKGROUND_BORDERS */));
                    this.effects.push(new ClipEffect(paddingBox, 4 /* CONTENT */));
                }
            }
        }
        ElementPaint.prototype.getEffects = function (target) {
            var inFlow = [2 /* ABSOLUTE */, 3 /* FIXED */].indexOf(this.container.styles.position) === -1;
            var parent = this.parent;
            var effects = this.effects.slice(0);
            while (parent) {
                var croplessEffects = parent.effects.filter(function (effect) { return !isClipEffect(effect); });
                if (inFlow || parent.container.styles.position !== 0 /* STATIC */ || !parent.parent) {
                    effects.unshift.apply(effects, croplessEffects);
                    inFlow = [2 /* ABSOLUTE */, 3 /* FIXED */].indexOf(parent.container.styles.position) === -1;
                    if (parent.container.styles.overflowX !== 0 /* VISIBLE */) {
                        var borderBox = calculateBorderBoxPath(parent.curves);
                        var paddingBox = calculatePaddingBoxPath(parent.curves);
                        if (!equalPath(borderBox, paddingBox)) {
                            effects.unshift(new ClipEffect(paddingBox, 2 /* BACKGROUND_BORDERS */ | 4 /* CONTENT */));
                        }
                    }
                }
                else {
                    effects.unshift.apply(effects, croplessEffects);
                }
                parent = parent.parent;
            }
            return effects.filter(function (effect) { return contains(effect.target, target); });
        };
        return ElementPaint;
    }());
    var parseStackTree = function (parent, stackingContext, realStackingContext, listItems) {
        parent.container.elements.forEach(function (child) {
            var treatAsRealStackingContext = contains(child.flags, 4 /* CREATES_REAL_STACKING_CONTEXT */);
            var createsStackingContext = contains(child.flags, 2 /* CREATES_STACKING_CONTEXT */);
            var paintContainer = new ElementPaint(child, parent);
            if (contains(child.styles.display, 2048 /* LIST_ITEM */)) {
                listItems.push(paintContainer);
            }
            var listOwnerItems = contains(child.flags, 8 /* IS_LIST_OWNER */) ? [] : listItems;
            if (treatAsRealStackingContext || createsStackingContext) {
                var parentStack = treatAsRealStackingContext || child.styles.isPositioned() ? realStackingContext : stackingContext;
                var stack = new StackingContext(paintContainer);
                if (child.styles.isPositioned() || child.styles.opacity < 1 || child.styles.isTransformed()) {
                    var order_1 = child.styles.zIndex.order;
                    if (order_1 < 0) {
                        var index_1 = 0;
                        parentStack.negativeZIndex.some(function (current, i) {
                            if (order_1 > current.element.container.styles.zIndex.order) {
                                index_1 = i;
                                return false;
                            }
                            else if (index_1 > 0) {
                                return true;
                            }
                            return false;
                        });
                        parentStack.negativeZIndex.splice(index_1, 0, stack);
                    }
                    else if (order_1 > 0) {
                        var index_2 = 0;
                        parentStack.positiveZIndex.some(function (current, i) {
                            if (order_1 >= current.element.container.styles.zIndex.order) {
                                index_2 = i + 1;
                                return false;
                            }
                            else if (index_2 > 0) {
                                return true;
                            }
                            return false;
                        });
                        parentStack.positiveZIndex.splice(index_2, 0, stack);
                    }
                    else {
                        parentStack.zeroOrAutoZIndexOrTransformedOrOpacity.push(stack);
                    }
                }
                else {
                    if (child.styles.isFloating()) {
                        parentStack.nonPositionedFloats.push(stack);
                    }
                    else {
                        parentStack.nonPositionedInlineLevel.push(stack);
                    }
                }
                parseStackTree(paintContainer, stack, treatAsRealStackingContext ? stack : realStackingContext, listOwnerItems);
            }
            else {
                if (child.styles.isInlineLevel()) {
                    stackingContext.inlineLevel.push(paintContainer);
                }
                else {
                    stackingContext.nonInlineLevel.push(paintContainer);
                }
                parseStackTree(paintContainer, stackingContext, realStackingContext, listOwnerItems);
            }
            if (contains(child.flags, 8 /* IS_LIST_OWNER */)) {
                processListItems(child, listOwnerItems);
            }
        });
    };
    var processListItems = function (owner, elements) {
        var numbering = owner instanceof OLElementContainer ? owner.start : 1;
        var reversed = owner instanceof OLElementContainer ? owner.reversed : false;
        for (var i = 0; i < elements.length; i++) {
            var item = elements[i];
            if (item.container instanceof LIElementContainer &&
                typeof item.container.value === 'number' &&
                item.container.value !== 0) {
                numbering = item.container.value;
            }
            item.listValue = createCounterText(numbering, item.container.styles.listStyleType, true);
            numbering += reversed ? -1 : 1;
        }
    };
    var parseStackingContexts = function (container) {
        var paintContainer = new ElementPaint(container, null);
        var root = new StackingContext(paintContainer);
        var listItems = [];
        parseStackTree(paintContainer, root, root, listItems);
        processListItems(paintContainer.container, listItems);
        return root;
    };

    var parsePathForBorder = function (curves, borderSide) {
        switch (borderSide) {
            case 0:
                return createPathFromCurves(curves.topLeftBorderBox, curves.topLeftPaddingBox, curves.topRightBorderBox, curves.topRightPaddingBox);
            case 1:
                return createPathFromCurves(curves.topRightBorderBox, curves.topRightPaddingBox, curves.bottomRightBorderBox, curves.bottomRightPaddingBox);
            case 2:
                return createPathFromCurves(curves.bottomRightBorderBox, curves.bottomRightPaddingBox, curves.bottomLeftBorderBox, curves.bottomLeftPaddingBox);
            case 3:
            default:
                return createPathFromCurves(curves.bottomLeftBorderBox, curves.bottomLeftPaddingBox, curves.topLeftBorderBox, curves.topLeftPaddingBox);
        }
    };
    var parsePathForBorderDoubleOuter = function (curves, borderSide) {
        switch (borderSide) {
            case 0:
                return createPathFromCurves(curves.topLeftBorderBox, curves.topLeftBorderDoubleOuterBox, curves.topRightBorderBox, curves.topRightBorderDoubleOuterBox);
            case 1:
                return createPathFromCurves(curves.topRightBorderBox, curves.topRightBorderDoubleOuterBox, curves.bottomRightBorderBox, curves.bottomRightBorderDoubleOuterBox);
            case 2:
                return createPathFromCurves(curves.bottomRightBorderBox, curves.bottomRightBorderDoubleOuterBox, curves.bottomLeftBorderBox, curves.bottomLeftBorderDoubleOuterBox);
            case 3:
            default:
                return createPathFromCurves(curves.bottomLeftBorderBox, curves.bottomLeftBorderDoubleOuterBox, curves.topLeftBorderBox, curves.topLeftBorderDoubleOuterBox);
        }
    };
    var parsePathForBorderDoubleInner = function (curves, borderSide) {
        switch (borderSide) {
            case 0:
                return createPathFromCurves(curves.topLeftBorderDoubleInnerBox, curves.topLeftPaddingBox, curves.topRightBorderDoubleInnerBox, curves.topRightPaddingBox);
            case 1:
                return createPathFromCurves(curves.topRightBorderDoubleInnerBox, curves.topRightPaddingBox, curves.bottomRightBorderDoubleInnerBox, curves.bottomRightPaddingBox);
            case 2:
                return createPathFromCurves(curves.bottomRightBorderDoubleInnerBox, curves.bottomRightPaddingBox, curves.bottomLeftBorderDoubleInnerBox, curves.bottomLeftPaddingBox);
            case 3:
            default:
                return createPathFromCurves(curves.bottomLeftBorderDoubleInnerBox, curves.bottomLeftPaddingBox, curves.topLeftBorderDoubleInnerBox, curves.topLeftPaddingBox);
        }
    };
    var parsePathForBorderStroke = function (curves, borderSide) {
        switch (borderSide) {
            case 0:
                return createStrokePathFromCurves(curves.topLeftBorderStroke, curves.topRightBorderStroke);
            case 1:
                return createStrokePathFromCurves(curves.topRightBorderStroke, curves.bottomRightBorderStroke);
            case 2:
                return createStrokePathFromCurves(curves.bottomRightBorderStroke, curves.bottomLeftBorderStroke);
            case 3:
            default:
                return createStrokePathFromCurves(curves.bottomLeftBorderStroke, curves.topLeftBorderStroke);
        }
    };
    var createStrokePathFromCurves = function (outer1, outer2) {
        var path = [];
        if (isBezierCurve(outer1)) {
            path.push(outer1.subdivide(0.5, false));
        }
        else {
            path.push(outer1);
        }
        if (isBezierCurve(outer2)) {
            path.push(outer2.subdivide(0.5, true));
        }
        else {
            path.push(outer2);
        }
        return path;
    };
    var createPathFromCurves = function (outer1, inner1, outer2, inner2) {
        var path = [];
        if (isBezierCurve(outer1)) {
            path.push(outer1.subdivide(0.5, false));
        }
        else {
            path.push(outer1);
        }
        if (isBezierCurve(outer2)) {
            path.push(outer2.subdivide(0.5, true));
        }
        else {
            path.push(outer2);
        }
        if (isBezierCurve(inner2)) {
            path.push(inner2.subdivide(0.5, true).reverse());
        }
        else {
            path.push(inner2);
        }
        if (isBezierCurve(inner1)) {
            path.push(inner1.subdivide(0.5, false).reverse());
        }
        else {
            path.push(inner1);
        }
        return path;
    };

    var paddingBox = function (element) {
        var bounds = element.bounds;
        var styles = element.styles;
        return bounds.add(styles.borderLeftWidth, styles.borderTopWidth, -(styles.borderRightWidth + styles.borderLeftWidth), -(styles.borderTopWidth + styles.borderBottomWidth));
    };
    var contentBox = function (element) {
        var styles = element.styles;
        var bounds = element.bounds;
        var paddingLeft = getAbsoluteValue(styles.paddingLeft, bounds.width);
        var paddingRight = getAbsoluteValue(styles.paddingRight, bounds.width);
        var paddingTop = getAbsoluteValue(styles.paddingTop, bounds.width);
        var paddingBottom = getAbsoluteValue(styles.paddingBottom, bounds.width);
        return bounds.add(paddingLeft + styles.borderLeftWidth, paddingTop + styles.borderTopWidth, -(styles.borderRightWidth + styles.borderLeftWidth + paddingLeft + paddingRight), -(styles.borderTopWidth + styles.borderBottomWidth + paddingTop + paddingBottom));
    };

    var calculateBackgroundPositioningArea = function (backgroundOrigin, element) {
        if (backgroundOrigin === 0 /* BORDER_BOX */) {
            return element.bounds;
        }
        if (backgroundOrigin === 2 /* CONTENT_BOX */) {
            return contentBox(element);
        }
        return paddingBox(element);
    };
    var calculateBackgroundPaintingArea = function (backgroundClip, element) {
        if (backgroundClip === 0 /* BORDER_BOX */) {
            return element.bounds;
        }
        if (backgroundClip === 2 /* CONTENT_BOX */) {
            return contentBox(element);
        }
        return paddingBox(element);
    };
    var calculateBackgroundRendering = function (container, index, intrinsicSize) {
        var backgroundPositioningArea = calculateBackgroundPositioningArea(getBackgroundValueForIndex(container.styles.backgroundOrigin, index), container);
        var backgroundPaintingArea = calculateBackgroundPaintingArea(getBackgroundValueForIndex(container.styles.backgroundClip, index), container);
        var backgroundImageSize = calculateBackgroundSize(getBackgroundValueForIndex(container.styles.backgroundSize, index), intrinsicSize, backgroundPositioningArea);
        var sizeWidth = backgroundImageSize[0], sizeHeight = backgroundImageSize[1];
        var position = getAbsoluteValueForTuple(getBackgroundValueForIndex(container.styles.backgroundPosition, index), backgroundPositioningArea.width - sizeWidth, backgroundPositioningArea.height - sizeHeight);
        var path = calculateBackgroundRepeatPath(getBackgroundValueForIndex(container.styles.backgroundRepeat, index), position, backgroundImageSize, backgroundPositioningArea, backgroundPaintingArea);
        var offsetX = Math.round(backgroundPositioningArea.left + position[0]);
        var offsetY = Math.round(backgroundPositioningArea.top + position[1]);
        return [path, offsetX, offsetY, sizeWidth, sizeHeight];
    };
    var isAuto = function (token) { return isIdentToken(token) && token.value === BACKGROUND_SIZE.AUTO; };
    var hasIntrinsicValue = function (value) { return typeof value === 'number'; };
    var calculateBackgroundSize = function (size, _a, bounds) {
        var intrinsicWidth = _a[0], intrinsicHeight = _a[1], intrinsicProportion = _a[2];
        var first = size[0], second = size[1];
        if (!first) {
            return [0, 0];
        }
        if (isLengthPercentage(first) && second && isLengthPercentage(second)) {
            return [getAbsoluteValue(first, bounds.width), getAbsoluteValue(second, bounds.height)];
        }
        var hasIntrinsicProportion = hasIntrinsicValue(intrinsicProportion);
        if (isIdentToken(first) && (first.value === BACKGROUND_SIZE.CONTAIN || first.value === BACKGROUND_SIZE.COVER)) {
            if (hasIntrinsicValue(intrinsicProportion)) {
                var targetRatio = bounds.width / bounds.height;
                return targetRatio < intrinsicProportion !== (first.value === BACKGROUND_SIZE.COVER)
                    ? [bounds.width, bounds.width / intrinsicProportion]
                    : [bounds.height * intrinsicProportion, bounds.height];
            }
            return [bounds.width, bounds.height];
        }
        var hasIntrinsicWidth = hasIntrinsicValue(intrinsicWidth);
        var hasIntrinsicHeight = hasIntrinsicValue(intrinsicHeight);
        var hasIntrinsicDimensions = hasIntrinsicWidth || hasIntrinsicHeight;
        // If the background-size is auto or auto auto:
        if (isAuto(first) && (!second || isAuto(second))) {
            // If the image has both horizontal and vertical intrinsic dimensions, it's rendered at that size.
            if (hasIntrinsicWidth && hasIntrinsicHeight) {
                return [intrinsicWidth, intrinsicHeight];
            }
            // If the image has no intrinsic dimensions and has no intrinsic proportions,
            // it's rendered at the size of the background positioning area.
            if (!hasIntrinsicProportion && !hasIntrinsicDimensions) {
                return [bounds.width, bounds.height];
            }
            // TODO If the image has no intrinsic dimensions but has intrinsic proportions, it's rendered as if contain had been specified instead.
            // If the image has only one intrinsic dimension and has intrinsic proportions, it's rendered at the size corresponding to that one dimension.
            // The other dimension is computed using the specified dimension and the intrinsic proportions.
            if (hasIntrinsicDimensions && hasIntrinsicProportion) {
                var width_1 = hasIntrinsicWidth
                    ? intrinsicWidth
                    : intrinsicHeight * intrinsicProportion;
                var height_1 = hasIntrinsicHeight
                    ? intrinsicHeight
                    : intrinsicWidth / intrinsicProportion;
                return [width_1, height_1];
            }
            // If the image has only one intrinsic dimension but has no intrinsic proportions,
            // it's rendered using the specified dimension and the other dimension of the background positioning area.
            var width_2 = hasIntrinsicWidth ? intrinsicWidth : bounds.width;
            var height_2 = hasIntrinsicHeight ? intrinsicHeight : bounds.height;
            return [width_2, height_2];
        }
        // If the image has intrinsic proportions, it's stretched to the specified dimension.
        // The unspecified dimension is computed using the specified dimension and the intrinsic proportions.
        if (hasIntrinsicProportion) {
            var width_3 = 0;
            var height_3 = 0;
            if (isLengthPercentage(first)) {
                width_3 = getAbsoluteValue(first, bounds.width);
            }
            else if (isLengthPercentage(second)) {
                height_3 = getAbsoluteValue(second, bounds.height);
            }
            if (isAuto(first)) {
                width_3 = height_3 * intrinsicProportion;
            }
            else if (!second || isAuto(second)) {
                height_3 = width_3 / intrinsicProportion;
            }
            return [width_3, height_3];
        }
        // If the image has no intrinsic proportions, it's stretched to the specified dimension.
        // The unspecified dimension is computed using the image's corresponding intrinsic dimension,
        // if there is one. If there is no such intrinsic dimension,
        // it becomes the corresponding dimension of the background positioning area.
        var width = null;
        var height = null;
        if (isLengthPercentage(first)) {
            width = getAbsoluteValue(first, bounds.width);
        }
        else if (second && isLengthPercentage(second)) {
            height = getAbsoluteValue(second, bounds.height);
        }
        if (width !== null && (!second || isAuto(second))) {
            height =
                hasIntrinsicWidth && hasIntrinsicHeight
                    ? (width / intrinsicWidth) * intrinsicHeight
                    : bounds.height;
        }
        if (height !== null && isAuto(first)) {
            width =
                hasIntrinsicWidth && hasIntrinsicHeight
                    ? (height / intrinsicHeight) * intrinsicWidth
                    : bounds.width;
        }
        if (width !== null && height !== null) {
            return [width, height];
        }
        throw new Error("Unable to calculate background-size for element");
    };
    var getBackgroundValueForIndex = function (values, index) {
        var value = values[index];
        if (typeof value === 'undefined') {
            return values[0];
        }
        return value;
    };
    var calculateBackgroundRepeatPath = function (repeat, _a, _b, backgroundPositioningArea, backgroundPaintingArea) {
        var x = _a[0], y = _a[1];
        var width = _b[0], height = _b[1];
        switch (repeat) {
            case 2 /* REPEAT_X */:
                return [
                    new Vector(Math.round(backgroundPositioningArea.left), Math.round(backgroundPositioningArea.top + y)),
                    new Vector(Math.round(backgroundPositioningArea.left + backgroundPositioningArea.width), Math.round(backgroundPositioningArea.top + y)),
                    new Vector(Math.round(backgroundPositioningArea.left + backgroundPositioningArea.width), Math.round(height + backgroundPositioningArea.top + y)),
                    new Vector(Math.round(backgroundPositioningArea.left), Math.round(height + backgroundPositioningArea.top + y))
                ];
            case 3 /* REPEAT_Y */:
                return [
                    new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top)),
                    new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top)),
                    new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.height + backgroundPositioningArea.top)),
                    new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.height + backgroundPositioningArea.top))
                ];
            case 1 /* NO_REPEAT */:
                return [
                    new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top + y)),
                    new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top + y)),
                    new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top + y + height)),
                    new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top + y + height))
                ];
            default:
                return [
                    new Vector(Math.round(backgroundPaintingArea.left), Math.round(backgroundPaintingArea.top)),
                    new Vector(Math.round(backgroundPaintingArea.left + backgroundPaintingArea.width), Math.round(backgroundPaintingArea.top)),
                    new Vector(Math.round(backgroundPaintingArea.left + backgroundPaintingArea.width), Math.round(backgroundPaintingArea.height + backgroundPaintingArea.top)),
                    new Vector(Math.round(backgroundPaintingArea.left), Math.round(backgroundPaintingArea.height + backgroundPaintingArea.top))
                ];
        }
    };

    var SMALL_IMAGE = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

    var SAMPLE_TEXT = 'Hidden Text';
    var FontMetrics = /** @class */ (function () {
        function FontMetrics(document) {
            this._data = {};
            this._document = document;
        }
        FontMetrics.prototype.parseMetrics = function (fontFamily, fontSize) {
            var container = this._document.createElement('div');
            var img = this._document.createElement('img');
            var span = this._document.createElement('span');
            var body = this._document.body;
            container.style.visibility = 'hidden';
            container.style.fontFamily = fontFamily;
            container.style.fontSize = fontSize;
            container.style.margin = '0';
            container.style.padding = '0';
            container.style.whiteSpace = 'nowrap';
            body.appendChild(container);
            img.src = SMALL_IMAGE;
            img.width = 1;
            img.height = 1;
            img.style.margin = '0';
            img.style.padding = '0';
            img.style.verticalAlign = 'baseline';
            span.style.fontFamily = fontFamily;
            span.style.fontSize = fontSize;
            span.style.margin = '0';
            span.style.padding = '0';
            span.appendChild(this._document.createTextNode(SAMPLE_TEXT));
            container.appendChild(span);
            container.appendChild(img);
            var baseline = img.offsetTop - span.offsetTop + 2;
            container.removeChild(span);
            container.appendChild(this._document.createTextNode(SAMPLE_TEXT));
            container.style.lineHeight = 'normal';
            img.style.verticalAlign = 'super';
            var middle = img.offsetTop - container.offsetTop + 2;
            body.removeChild(container);
            return { baseline: baseline, middle: middle };
        };
        FontMetrics.prototype.getMetrics = function (fontFamily, fontSize) {
            var key = fontFamily + " " + fontSize;
            if (typeof this._data[key] === 'undefined') {
                this._data[key] = this.parseMetrics(fontFamily, fontSize);
            }
            return this._data[key];
        };
        return FontMetrics;
    }());

    var Renderer = /** @class */ (function () {
        function Renderer(context, options) {
            this.context = context;
            this.options = options;
        }
        return Renderer;
    }());

    var MASK_OFFSET = 10000;
    var CanvasRenderer = /** @class */ (function (_super) {
        __extends(CanvasRenderer, _super);
        function CanvasRenderer(context, options) {
            var _this = _super.call(this, context, options) || this;
            _this._activeEffects = [];
            _this.canvas = options.canvas ? options.canvas : document.createElement('canvas');
            _this.ctx = _this.canvas.getContext('2d');
            if (!options.canvas) {
                _this.canvas.width = Math.floor(options.width * options.scale);
                _this.canvas.height = Math.floor(options.height * options.scale);
                _this.canvas.style.width = options.width + "px";
                _this.canvas.style.height = options.height + "px";
            }
            _this.fontMetrics = new FontMetrics(document);
            _this.ctx.scale(_this.options.scale, _this.options.scale);
            _this.ctx.translate(-options.x, -options.y);
            _this.ctx.textBaseline = 'bottom';
            _this._activeEffects = [];
            _this.context.logger.debug("Canvas renderer initialized (" + options.width + "x" + options.height + ") with scale " + options.scale);
            return _this;
        }
        CanvasRenderer.prototype.applyEffects = function (effects) {
            var _this = this;
            while (this._activeEffects.length) {
                this.popEffect();
            }
            effects.forEach(function (effect) { return _this.applyEffect(effect); });
        };
        CanvasRenderer.prototype.applyEffect = function (effect) {
            this.ctx.save();
            if (isOpacityEffect(effect)) {
                this.ctx.globalAlpha = effect.opacity;
            }
            if (isTransformEffect(effect)) {
                this.ctx.translate(effect.offsetX, effect.offsetY);
                this.ctx.transform(effect.matrix[0], effect.matrix[1], effect.matrix[2], effect.matrix[3], effect.matrix[4], effect.matrix[5]);
                this.ctx.translate(-effect.offsetX, -effect.offsetY);
            }
            if (isClipEffect(effect)) {
                this.path(effect.path);
                this.ctx.clip();
            }
            this._activeEffects.push(effect);
        };
        CanvasRenderer.prototype.popEffect = function () {
            this._activeEffects.pop();
            this.ctx.restore();
        };
        CanvasRenderer.prototype.renderStack = function (stack) {
            return __awaiter(this, void 0, void 0, function () {
                var styles;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            styles = stack.element.container.styles;
                            if (!styles.isVisible()) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.renderStackContent(stack)];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            });
        };
        CanvasRenderer.prototype.renderNode = function (paint) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (contains(paint.container.flags, 16 /* DEBUG_RENDER */)) {
                                debugger;
                            }
                            if (!paint.container.styles.isVisible()) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.renderNodeBackgroundAndBorders(paint)];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.renderNodeContent(paint)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        CanvasRenderer.prototype.renderTextWithLetterSpacing = function (text, letterSpacing, baseline) {
            var _this = this;
            if (letterSpacing === 0) {
                this.ctx.fillText(text.text, text.bounds.left, text.bounds.top + baseline);
            }
            else {
                var letters = segmentGraphemes(text.text);
                letters.reduce(function (left, letter) {
                    _this.ctx.fillText(letter, left, text.bounds.top + baseline);
                    return left + _this.ctx.measureText(letter).width;
                }, text.bounds.left);
            }
        };
        CanvasRenderer.prototype.createFontStyle = function (styles) {
            var fontVariant = styles.fontVariant
                .filter(function (variant) { return variant === 'normal' || variant === 'small-caps'; })
                .join('');
            var fontFamily = fixIOSSystemFonts(styles.fontFamily).join(', ');
            var fontSize = isDimensionToken(styles.fontSize)
                ? "" + styles.fontSize.number + styles.fontSize.unit
                : styles.fontSize.number + "px";
            return [
                [styles.fontStyle, fontVariant, styles.fontWeight, fontSize, fontFamily].join(' '),
                fontFamily,
                fontSize
            ];
        };
        CanvasRenderer.prototype.renderTextNode = function (text, styles) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, font, fontFamily, fontSize, _b, baseline, middle, paintOrder;
                var _this = this;
                return __generator(this, function (_c) {
                    _a = this.createFontStyle(styles), font = _a[0], fontFamily = _a[1], fontSize = _a[2];
                    this.ctx.font = font;
                    this.ctx.direction = styles.direction === 1 /* RTL */ ? 'rtl' : 'ltr';
                    this.ctx.textAlign = 'left';
                    this.ctx.textBaseline = 'alphabetic';
                    _b = this.fontMetrics.getMetrics(fontFamily, fontSize), baseline = _b.baseline, middle = _b.middle;
                    paintOrder = styles.paintOrder;
                    text.textBounds.forEach(function (text) {
                        paintOrder.forEach(function (paintOrderLayer) {
                            switch (paintOrderLayer) {
                                case 0 /* FILL */:
                                    _this.ctx.fillStyle = asString(styles.color);
                                    _this.renderTextWithLetterSpacing(text, styles.letterSpacing, baseline);
                                    var textShadows = styles.textShadow;
                                    if (textShadows.length && text.text.trim().length) {
                                        textShadows
                                            .slice(0)
                                            .reverse()
                                            .forEach(function (textShadow) {
                                            _this.ctx.shadowColor = asString(textShadow.color);
                                            _this.ctx.shadowOffsetX = textShadow.offsetX.number * _this.options.scale;
                                            _this.ctx.shadowOffsetY = textShadow.offsetY.number * _this.options.scale;
                                            _this.ctx.shadowBlur = textShadow.blur.number;
                                            _this.renderTextWithLetterSpacing(text, styles.letterSpacing, baseline);
                                        });
                                        _this.ctx.shadowColor = '';
                                        _this.ctx.shadowOffsetX = 0;
                                        _this.ctx.shadowOffsetY = 0;
                                        _this.ctx.shadowBlur = 0;
                                    }
                                    if (styles.textDecorationLine.length) {
                                        _this.ctx.fillStyle = asString(styles.textDecorationColor || styles.color);
                                        styles.textDecorationLine.forEach(function (textDecorationLine) {
                                            switch (textDecorationLine) {
                                                case 1 /* UNDERLINE */:
                                                    // Draws a line at the baseline of the font
                                                    // TODO As some browsers display the line as more than 1px if the font-size is big,
                                                    // need to take that into account both in position and size
                                                    _this.ctx.fillRect(text.bounds.left, Math.round(text.bounds.top + baseline), text.bounds.width, 1);
                                                    break;
                                                case 2 /* OVERLINE */:
                                                    _this.ctx.fillRect(text.bounds.left, Math.round(text.bounds.top), text.bounds.width, 1);
                                                    break;
                                                case 3 /* LINE_THROUGH */:
                                                    // TODO try and find exact position for line-through
                                                    _this.ctx.fillRect(text.bounds.left, Math.ceil(text.bounds.top + middle), text.bounds.width, 1);
                                                    break;
                                            }
                                        });
                                    }
                                    break;
                                case 1 /* STROKE */:
                                    if (styles.webkitTextStrokeWidth && text.text.trim().length) {
                                        _this.ctx.strokeStyle = asString(styles.webkitTextStrokeColor);
                                        _this.ctx.lineWidth = styles.webkitTextStrokeWidth;
                                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                        _this.ctx.lineJoin = !!window.chrome ? 'miter' : 'round';
                                        _this.ctx.strokeText(text.text, text.bounds.left, text.bounds.top + baseline);
                                    }
                                    _this.ctx.strokeStyle = '';
                                    _this.ctx.lineWidth = 0;
                                    _this.ctx.lineJoin = 'miter';
                                    break;
                            }
                        });
                    });
                    return [2 /*return*/];
                });
            });
        };
        CanvasRenderer.prototype.renderReplacedElement = function (container, curves, image) {
            if (image && container.intrinsicWidth > 0 && container.intrinsicHeight > 0) {
                var box = contentBox(container);
                var path = calculatePaddingBoxPath(curves);
                this.path(path);
                this.ctx.save();
                this.ctx.clip();
                this.ctx.drawImage(image, 0, 0, container.intrinsicWidth, container.intrinsicHeight, box.left, box.top, box.width, box.height);
                this.ctx.restore();
            }
        };
        CanvasRenderer.prototype.renderNodeContent = function (paint) {
            return __awaiter(this, void 0, void 0, function () {
                var container, curves, styles, _i, _a, child, image, image, iframeRenderer, canvas, size, _b, fontFamily, fontSize, baseline, bounds, x, textBounds, img, image, url, fontFamily, bounds;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            this.applyEffects(paint.getEffects(4 /* CONTENT */));
                            container = paint.container;
                            curves = paint.curves;
                            styles = container.styles;
                            _i = 0, _a = container.textNodes;
                            _c.label = 1;
                        case 1:
                            if (!(_i < _a.length)) return [3 /*break*/, 4];
                            child = _a[_i];
                            return [4 /*yield*/, this.renderTextNode(child, styles)];
                        case 2:
                            _c.sent();
                            _c.label = 3;
                        case 3:
                            _i++;
                            return [3 /*break*/, 1];
                        case 4:
                            if (!(container instanceof ImageElementContainer)) return [3 /*break*/, 8];
                            _c.label = 5;
                        case 5:
                            _c.trys.push([5, 7, , 8]);
                            return [4 /*yield*/, this.context.cache.match(container.src)];
                        case 6:
                            image = _c.sent();
                            this.renderReplacedElement(container, curves, image);
                            return [3 /*break*/, 8];
                        case 7:
                            _c.sent();
                            this.context.logger.error("Error loading image " + container.src);
                            return [3 /*break*/, 8];
                        case 8:
                            if (container instanceof CanvasElementContainer) {
                                this.renderReplacedElement(container, curves, container.canvas);
                            }
                            if (!(container instanceof SVGElementContainer)) return [3 /*break*/, 12];
                            _c.label = 9;
                        case 9:
                            _c.trys.push([9, 11, , 12]);
                            return [4 /*yield*/, this.context.cache.match(container.svg)];
                        case 10:
                            image = _c.sent();
                            this.renderReplacedElement(container, curves, image);
                            return [3 /*break*/, 12];
                        case 11:
                            _c.sent();
                            this.context.logger.error("Error loading svg " + container.svg.substring(0, 255));
                            return [3 /*break*/, 12];
                        case 12:
                            if (!(container instanceof IFrameElementContainer && container.tree)) return [3 /*break*/, 14];
                            iframeRenderer = new CanvasRenderer(this.context, {
                                scale: this.options.scale,
                                backgroundColor: container.backgroundColor,
                                x: 0,
                                y: 0,
                                width: container.width,
                                height: container.height
                            });
                            return [4 /*yield*/, iframeRenderer.render(container.tree)];
                        case 13:
                            canvas = _c.sent();
                            if (container.width && container.height) {
                                this.ctx.drawImage(canvas, 0, 0, container.width, container.height, container.bounds.left, container.bounds.top, container.bounds.width, container.bounds.height);
                            }
                            _c.label = 14;
                        case 14:
                            if (container instanceof InputElementContainer) {
                                size = Math.min(container.bounds.width, container.bounds.height);
                                if (container.type === CHECKBOX) {
                                    if (container.checked) {
                                        this.ctx.save();
                                        this.path([
                                            new Vector(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79),
                                            new Vector(container.bounds.left + size * 0.16, container.bounds.top + size * 0.5549),
                                            new Vector(container.bounds.left + size * 0.27347, container.bounds.top + size * 0.44071),
                                            new Vector(container.bounds.left + size * 0.39694, container.bounds.top + size * 0.5649),
                                            new Vector(container.bounds.left + size * 0.72983, container.bounds.top + size * 0.23),
                                            new Vector(container.bounds.left + size * 0.84, container.bounds.top + size * 0.34085),
                                            new Vector(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79)
                                        ]);
                                        this.ctx.fillStyle = asString(INPUT_COLOR);
                                        this.ctx.fill();
                                        this.ctx.restore();
                                    }
                                }
                                else if (container.type === RADIO) {
                                    if (container.checked) {
                                        this.ctx.save();
                                        this.ctx.beginPath();
                                        this.ctx.arc(container.bounds.left + size / 2, container.bounds.top + size / 2, size / 4, 0, Math.PI * 2, true);
                                        this.ctx.fillStyle = asString(INPUT_COLOR);
                                        this.ctx.fill();
                                        this.ctx.restore();
                                    }
                                }
                            }
                            if (isTextInputElement(container) && container.value.length) {
                                _b = this.createFontStyle(styles), fontFamily = _b[0], fontSize = _b[1];
                                baseline = this.fontMetrics.getMetrics(fontFamily, fontSize).baseline;
                                this.ctx.font = fontFamily;
                                this.ctx.fillStyle = asString(styles.color);
                                this.ctx.textBaseline = 'alphabetic';
                                this.ctx.textAlign = canvasTextAlign(container.styles.textAlign);
                                bounds = contentBox(container);
                                x = 0;
                                switch (container.styles.textAlign) {
                                    case 1 /* CENTER */:
                                        x += bounds.width / 2;
                                        break;
                                    case 2 /* RIGHT */:
                                        x += bounds.width;
                                        break;
                                }
                                textBounds = bounds.add(x, 0, 0, -bounds.height / 2 + 1);
                                this.ctx.save();
                                this.path([
                                    new Vector(bounds.left, bounds.top),
                                    new Vector(bounds.left + bounds.width, bounds.top),
                                    new Vector(bounds.left + bounds.width, bounds.top + bounds.height),
                                    new Vector(bounds.left, bounds.top + bounds.height)
                                ]);
                                this.ctx.clip();
                                this.renderTextWithLetterSpacing(new TextBounds(container.value, textBounds), styles.letterSpacing, baseline);
                                this.ctx.restore();
                                this.ctx.textBaseline = 'alphabetic';
                                this.ctx.textAlign = 'left';
                            }
                            if (!contains(container.styles.display, 2048 /* LIST_ITEM */)) return [3 /*break*/, 20];
                            if (!(container.styles.listStyleImage !== null)) return [3 /*break*/, 19];
                            img = container.styles.listStyleImage;
                            if (!(img.type === 0 /* URL */)) return [3 /*break*/, 18];
                            image = void 0;
                            url = img.url;
                            _c.label = 15;
                        case 15:
                            _c.trys.push([15, 17, , 18]);
                            return [4 /*yield*/, this.context.cache.match(url)];
                        case 16:
                            image = _c.sent();
                            this.ctx.drawImage(image, container.bounds.left - (image.width + 10), container.bounds.top);
                            return [3 /*break*/, 18];
                        case 17:
                            _c.sent();
                            this.context.logger.error("Error loading list-style-image " + url);
                            return [3 /*break*/, 18];
                        case 18: return [3 /*break*/, 20];
                        case 19:
                            if (paint.listValue && container.styles.listStyleType !== -1 /* NONE */) {
                                fontFamily = this.createFontStyle(styles)[0];
                                this.ctx.font = fontFamily;
                                this.ctx.fillStyle = asString(styles.color);
                                this.ctx.textBaseline = 'middle';
                                this.ctx.textAlign = 'right';
                                bounds = new Bounds(container.bounds.left, container.bounds.top + getAbsoluteValue(container.styles.paddingTop, container.bounds.width), container.bounds.width, computeLineHeight(styles.lineHeight, styles.fontSize.number) / 2 + 1);
                                this.renderTextWithLetterSpacing(new TextBounds(paint.listValue, bounds), styles.letterSpacing, computeLineHeight(styles.lineHeight, styles.fontSize.number) / 2 + 2);
                                this.ctx.textBaseline = 'bottom';
                                this.ctx.textAlign = 'left';
                            }
                            _c.label = 20;
                        case 20: return [2 /*return*/];
                    }
                });
            });
        };
        CanvasRenderer.prototype.renderStackContent = function (stack) {
            return __awaiter(this, void 0, void 0, function () {
                var _i, _a, child, _b, _c, child, _d, _e, child, _f, _g, child, _h, _j, child, _k, _l, child, _m, _o, child;
                return __generator(this, function (_p) {
                    switch (_p.label) {
                        case 0:
                            if (contains(stack.element.container.flags, 16 /* DEBUG_RENDER */)) {
                                debugger;
                            }
                            // https://www.w3.org/TR/css-position-3/#painting-order
                            // 1. the background and borders of the element forming the stacking context.
                            return [4 /*yield*/, this.renderNodeBackgroundAndBorders(stack.element)];
                        case 1:
                            // https://www.w3.org/TR/css-position-3/#painting-order
                            // 1. the background and borders of the element forming the stacking context.
                            _p.sent();
                            _i = 0, _a = stack.negativeZIndex;
                            _p.label = 2;
                        case 2:
                            if (!(_i < _a.length)) return [3 /*break*/, 5];
                            child = _a[_i];
                            return [4 /*yield*/, this.renderStack(child)];
                        case 3:
                            _p.sent();
                            _p.label = 4;
                        case 4:
                            _i++;
                            return [3 /*break*/, 2];
                        case 5: 
                        // 3. For all its in-flow, non-positioned, block-level descendants in tree order:
                        return [4 /*yield*/, this.renderNodeContent(stack.element)];
                        case 6:
                            // 3. For all its in-flow, non-positioned, block-level descendants in tree order:
                            _p.sent();
                            _b = 0, _c = stack.nonInlineLevel;
                            _p.label = 7;
                        case 7:
                            if (!(_b < _c.length)) return [3 /*break*/, 10];
                            child = _c[_b];
                            return [4 /*yield*/, this.renderNode(child)];
                        case 8:
                            _p.sent();
                            _p.label = 9;
                        case 9:
                            _b++;
                            return [3 /*break*/, 7];
                        case 10:
                            _d = 0, _e = stack.nonPositionedFloats;
                            _p.label = 11;
                        case 11:
                            if (!(_d < _e.length)) return [3 /*break*/, 14];
                            child = _e[_d];
                            return [4 /*yield*/, this.renderStack(child)];
                        case 12:
                            _p.sent();
                            _p.label = 13;
                        case 13:
                            _d++;
                            return [3 /*break*/, 11];
                        case 14:
                            _f = 0, _g = stack.nonPositionedInlineLevel;
                            _p.label = 15;
                        case 15:
                            if (!(_f < _g.length)) return [3 /*break*/, 18];
                            child = _g[_f];
                            return [4 /*yield*/, this.renderStack(child)];
                        case 16:
                            _p.sent();
                            _p.label = 17;
                        case 17:
                            _f++;
                            return [3 /*break*/, 15];
                        case 18:
                            _h = 0, _j = stack.inlineLevel;
                            _p.label = 19;
                        case 19:
                            if (!(_h < _j.length)) return [3 /*break*/, 22];
                            child = _j[_h];
                            return [4 /*yield*/, this.renderNode(child)];
                        case 20:
                            _p.sent();
                            _p.label = 21;
                        case 21:
                            _h++;
                            return [3 /*break*/, 19];
                        case 22:
                            _k = 0, _l = stack.zeroOrAutoZIndexOrTransformedOrOpacity;
                            _p.label = 23;
                        case 23:
                            if (!(_k < _l.length)) return [3 /*break*/, 26];
                            child = _l[_k];
                            return [4 /*yield*/, this.renderStack(child)];
                        case 24:
                            _p.sent();
                            _p.label = 25;
                        case 25:
                            _k++;
                            return [3 /*break*/, 23];
                        case 26:
                            _m = 0, _o = stack.positiveZIndex;
                            _p.label = 27;
                        case 27:
                            if (!(_m < _o.length)) return [3 /*break*/, 30];
                            child = _o[_m];
                            return [4 /*yield*/, this.renderStack(child)];
                        case 28:
                            _p.sent();
                            _p.label = 29;
                        case 29:
                            _m++;
                            return [3 /*break*/, 27];
                        case 30: return [2 /*return*/];
                    }
                });
            });
        };
        CanvasRenderer.prototype.mask = function (paths) {
            this.ctx.beginPath();
            this.ctx.moveTo(0, 0);
            this.ctx.lineTo(this.canvas.width, 0);
            this.ctx.lineTo(this.canvas.width, this.canvas.height);
            this.ctx.lineTo(0, this.canvas.height);
            this.ctx.lineTo(0, 0);
            this.formatPath(paths.slice(0).reverse());
            this.ctx.closePath();
        };
        CanvasRenderer.prototype.path = function (paths) {
            this.ctx.beginPath();
            this.formatPath(paths);
            this.ctx.closePath();
        };
        CanvasRenderer.prototype.formatPath = function (paths) {
            var _this = this;
            paths.forEach(function (point, index) {
                var start = isBezierCurve(point) ? point.start : point;
                if (index === 0) {
                    _this.ctx.moveTo(start.x, start.y);
                }
                else {
                    _this.ctx.lineTo(start.x, start.y);
                }
                if (isBezierCurve(point)) {
                    _this.ctx.bezierCurveTo(point.startControl.x, point.startControl.y, point.endControl.x, point.endControl.y, point.end.x, point.end.y);
                }
            });
        };
        CanvasRenderer.prototype.renderRepeat = function (path, pattern, offsetX, offsetY) {
            this.path(path);
            this.ctx.fillStyle = pattern;
            this.ctx.translate(offsetX, offsetY);
            this.ctx.fill();
            this.ctx.translate(-offsetX, -offsetY);
        };
        CanvasRenderer.prototype.resizeImage = function (image, width, height) {
            var _a;
            if (image.width === width && image.height === height) {
                return image;
            }
            var ownerDocument = (_a = this.canvas.ownerDocument) !== null && _a !== void 0 ? _a : document;
            var canvas = ownerDocument.createElement('canvas');
            canvas.width = Math.max(1, width);
            canvas.height = Math.max(1, height);
            var ctx = canvas.getContext('2d');
            ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, width, height);
            return canvas;
        };
        CanvasRenderer.prototype.renderBackgroundImage = function (container) {
            return __awaiter(this, void 0, void 0, function () {
                var index, _loop_1, this_1, _i, _a, backgroundImage;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            index = container.styles.backgroundImage.length - 1;
                            _loop_1 = function (backgroundImage) {
                                var image, url, _c, path, x, y, width, height, pattern, _d, path, x, y, width, height, _e, lineLength, x0, x1, y0, y1, canvas, ctx, gradient_1, pattern, _f, path, left, top_1, width, height, position, x, y, _g, rx, ry, radialGradient_1, midX, midY, f, invF;
                                return __generator(this, function (_h) {
                                    switch (_h.label) {
                                        case 0:
                                            if (!(backgroundImage.type === 0 /* URL */)) return [3 /*break*/, 5];
                                            image = void 0;
                                            url = backgroundImage.url;
                                            _h.label = 1;
                                        case 1:
                                            _h.trys.push([1, 3, , 4]);
                                            return [4 /*yield*/, this_1.context.cache.match(url)];
                                        case 2:
                                            image = _h.sent();
                                            return [3 /*break*/, 4];
                                        case 3:
                                            _h.sent();
                                            this_1.context.logger.error("Error loading background-image " + url);
                                            return [3 /*break*/, 4];
                                        case 4:
                                            if (image) {
                                                _c = calculateBackgroundRendering(container, index, [
                                                    image.width,
                                                    image.height,
                                                    image.width / image.height
                                                ]), path = _c[0], x = _c[1], y = _c[2], width = _c[3], height = _c[4];
                                                pattern = this_1.ctx.createPattern(this_1.resizeImage(image, width, height), 'repeat');
                                                this_1.renderRepeat(path, pattern, x, y);
                                            }
                                            return [3 /*break*/, 6];
                                        case 5:
                                            if (isLinearGradient(backgroundImage)) {
                                                _d = calculateBackgroundRendering(container, index, [null, null, null]), path = _d[0], x = _d[1], y = _d[2], width = _d[3], height = _d[4];
                                                _e = calculateGradientDirection(backgroundImage.angle, width, height), lineLength = _e[0], x0 = _e[1], x1 = _e[2], y0 = _e[3], y1 = _e[4];
                                                canvas = document.createElement('canvas');
                                                canvas.width = width;
                                                canvas.height = height;
                                                ctx = canvas.getContext('2d');
                                                gradient_1 = ctx.createLinearGradient(x0, y0, x1, y1);
                                                processColorStops(backgroundImage.stops, lineLength).forEach(function (colorStop) {
                                                    return gradient_1.addColorStop(colorStop.stop, asString(colorStop.color));
                                                });
                                                ctx.fillStyle = gradient_1;
                                                ctx.fillRect(0, 0, width, height);
                                                if (width > 0 && height > 0) {
                                                    pattern = this_1.ctx.createPattern(canvas, 'repeat');
                                                    this_1.renderRepeat(path, pattern, x, y);
                                                }
                                            }
                                            else if (isRadialGradient(backgroundImage)) {
                                                _f = calculateBackgroundRendering(container, index, [
                                                    null,
                                                    null,
                                                    null
                                                ]), path = _f[0], left = _f[1], top_1 = _f[2], width = _f[3], height = _f[4];
                                                position = backgroundImage.position.length === 0 ? [FIFTY_PERCENT] : backgroundImage.position;
                                                x = getAbsoluteValue(position[0], width);
                                                y = getAbsoluteValue(position[position.length - 1], height);
                                                _g = calculateRadius(backgroundImage, x, y, width, height), rx = _g[0], ry = _g[1];
                                                if (rx > 0 && ry > 0) {
                                                    radialGradient_1 = this_1.ctx.createRadialGradient(left + x, top_1 + y, 0, left + x, top_1 + y, rx);
                                                    processColorStops(backgroundImage.stops, rx * 2).forEach(function (colorStop) {
                                                        return radialGradient_1.addColorStop(colorStop.stop, asString(colorStop.color));
                                                    });
                                                    this_1.path(path);
                                                    this_1.ctx.fillStyle = radialGradient_1;
                                                    if (rx !== ry) {
                                                        midX = container.bounds.left + 0.5 * container.bounds.width;
                                                        midY = container.bounds.top + 0.5 * container.bounds.height;
                                                        f = ry / rx;
                                                        invF = 1 / f;
                                                        this_1.ctx.save();
                                                        this_1.ctx.translate(midX, midY);
                                                        this_1.ctx.transform(1, 0, 0, f, 0, 0);
                                                        this_1.ctx.translate(-midX, -midY);
                                                        this_1.ctx.fillRect(left, invF * (top_1 - midY) + midY, width, height * invF);
                                                        this_1.ctx.restore();
                                                    }
                                                    else {
                                                        this_1.ctx.fill();
                                                    }
                                                }
                                            }
                                            _h.label = 6;
                                        case 6:
                                            index--;
                                            return [2 /*return*/];
                                    }
                                });
                            };
                            this_1 = this;
                            _i = 0, _a = container.styles.backgroundImage.slice(0).reverse();
                            _b.label = 1;
                        case 1:
                            if (!(_i < _a.length)) return [3 /*break*/, 4];
                            backgroundImage = _a[_i];
                            return [5 /*yield**/, _loop_1(backgroundImage)];
                        case 2:
                            _b.sent();
                            _b.label = 3;
                        case 3:
                            _i++;
                            return [3 /*break*/, 1];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        CanvasRenderer.prototype.renderSolidBorder = function (color, side, curvePoints) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.path(parsePathForBorder(curvePoints, side));
                    this.ctx.fillStyle = asString(color);
                    this.ctx.fill();
                    return [2 /*return*/];
                });
            });
        };
        CanvasRenderer.prototype.renderDoubleBorder = function (color, width, side, curvePoints) {
            return __awaiter(this, void 0, void 0, function () {
                var outerPaths, innerPaths;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(width < 3)) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.renderSolidBorder(color, side, curvePoints)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                        case 2:
                            outerPaths = parsePathForBorderDoubleOuter(curvePoints, side);
                            this.path(outerPaths);
                            this.ctx.fillStyle = asString(color);
                            this.ctx.fill();
                            innerPaths = parsePathForBorderDoubleInner(curvePoints, side);
                            this.path(innerPaths);
                            this.ctx.fill();
                            return [2 /*return*/];
                    }
                });
            });
        };
        CanvasRenderer.prototype.renderNodeBackgroundAndBorders = function (paint) {
            return __awaiter(this, void 0, void 0, function () {
                var styles, hasBackground, borders, backgroundPaintingArea, side, _i, borders_1, border;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.applyEffects(paint.getEffects(2 /* BACKGROUND_BORDERS */));
                            styles = paint.container.styles;
                            hasBackground = !isTransparent(styles.backgroundColor) || styles.backgroundImage.length;
                            borders = [
                                { style: styles.borderTopStyle, color: styles.borderTopColor, width: styles.borderTopWidth },
                                { style: styles.borderRightStyle, color: styles.borderRightColor, width: styles.borderRightWidth },
                                { style: styles.borderBottomStyle, color: styles.borderBottomColor, width: styles.borderBottomWidth },
                                { style: styles.borderLeftStyle, color: styles.borderLeftColor, width: styles.borderLeftWidth }
                            ];
                            backgroundPaintingArea = calculateBackgroundCurvedPaintingArea(getBackgroundValueForIndex(styles.backgroundClip, 0), paint.curves);
                            if (!(hasBackground || styles.boxShadow.length)) return [3 /*break*/, 2];
                            this.ctx.save();
                            this.path(backgroundPaintingArea);
                            this.ctx.clip();
                            if (!isTransparent(styles.backgroundColor)) {
                                this.ctx.fillStyle = asString(styles.backgroundColor);
                                this.ctx.fill();
                            }
                            return [4 /*yield*/, this.renderBackgroundImage(paint.container)];
                        case 1:
                            _a.sent();
                            this.ctx.restore();
                            styles.boxShadow
                                .slice(0)
                                .reverse()
                                .forEach(function (shadow) {
                                _this.ctx.save();
                                var borderBoxArea = calculateBorderBoxPath(paint.curves);
                                var maskOffset = shadow.inset ? 0 : MASK_OFFSET;
                                var shadowPaintingArea = transformPath(borderBoxArea, -maskOffset + (shadow.inset ? 1 : -1) * shadow.spread.number, (shadow.inset ? 1 : -1) * shadow.spread.number, shadow.spread.number * (shadow.inset ? -2 : 2), shadow.spread.number * (shadow.inset ? -2 : 2));
                                if (shadow.inset) {
                                    _this.path(borderBoxArea);
                                    _this.ctx.clip();
                                    _this.mask(shadowPaintingArea);
                                }
                                else {
                                    _this.mask(borderBoxArea);
                                    _this.ctx.clip();
                                    _this.path(shadowPaintingArea);
                                }
                                _this.ctx.shadowOffsetX = shadow.offsetX.number + maskOffset;
                                _this.ctx.shadowOffsetY = shadow.offsetY.number;
                                _this.ctx.shadowColor = asString(shadow.color);
                                _this.ctx.shadowBlur = shadow.blur.number;
                                _this.ctx.fillStyle = shadow.inset ? asString(shadow.color) : 'rgba(0,0,0,1)';
                                _this.ctx.fill();
                                _this.ctx.restore();
                            });
                            _a.label = 2;
                        case 2:
                            side = 0;
                            _i = 0, borders_1 = borders;
                            _a.label = 3;
                        case 3:
                            if (!(_i < borders_1.length)) return [3 /*break*/, 13];
                            border = borders_1[_i];
                            if (!(border.style !== 0 /* NONE */ && !isTransparent(border.color) && border.width > 0)) return [3 /*break*/, 11];
                            if (!(border.style === 2 /* DASHED */)) return [3 /*break*/, 5];
                            return [4 /*yield*/, this.renderDashedDottedBorder(border.color, border.width, side, paint.curves, 2 /* DASHED */)];
                        case 4:
                            _a.sent();
                            return [3 /*break*/, 11];
                        case 5:
                            if (!(border.style === 3 /* DOTTED */)) return [3 /*break*/, 7];
                            return [4 /*yield*/, this.renderDashedDottedBorder(border.color, border.width, side, paint.curves, 3 /* DOTTED */)];
                        case 6:
                            _a.sent();
                            return [3 /*break*/, 11];
                        case 7:
                            if (!(border.style === 4 /* DOUBLE */)) return [3 /*break*/, 9];
                            return [4 /*yield*/, this.renderDoubleBorder(border.color, border.width, side, paint.curves)];
                        case 8:
                            _a.sent();
                            return [3 /*break*/, 11];
                        case 9: return [4 /*yield*/, this.renderSolidBorder(border.color, side, paint.curves)];
                        case 10:
                            _a.sent();
                            _a.label = 11;
                        case 11:
                            side++;
                            _a.label = 12;
                        case 12:
                            _i++;
                            return [3 /*break*/, 3];
                        case 13: return [2 /*return*/];
                    }
                });
            });
        };
        CanvasRenderer.prototype.renderDashedDottedBorder = function (color, width, side, curvePoints, style) {
            return __awaiter(this, void 0, void 0, function () {
                var strokePaths, boxPaths, startX, startY, endX, endY, length, dashLength, spaceLength, useLineDash, multiplier, numberOfDashes, minSpace, maxSpace, path1, path2, path1, path2;
                return __generator(this, function (_a) {
                    this.ctx.save();
                    strokePaths = parsePathForBorderStroke(curvePoints, side);
                    boxPaths = parsePathForBorder(curvePoints, side);
                    if (style === 2 /* DASHED */) {
                        this.path(boxPaths);
                        this.ctx.clip();
                    }
                    if (isBezierCurve(boxPaths[0])) {
                        startX = boxPaths[0].start.x;
                        startY = boxPaths[0].start.y;
                    }
                    else {
                        startX = boxPaths[0].x;
                        startY = boxPaths[0].y;
                    }
                    if (isBezierCurve(boxPaths[1])) {
                        endX = boxPaths[1].end.x;
                        endY = boxPaths[1].end.y;
                    }
                    else {
                        endX = boxPaths[1].x;
                        endY = boxPaths[1].y;
                    }
                    if (side === 0 || side === 2) {
                        length = Math.abs(startX - endX);
                    }
                    else {
                        length = Math.abs(startY - endY);
                    }
                    this.ctx.beginPath();
                    if (style === 3 /* DOTTED */) {
                        this.formatPath(strokePaths);
                    }
                    else {
                        this.formatPath(boxPaths.slice(0, 2));
                    }
                    dashLength = width < 3 ? width * 3 : width * 2;
                    spaceLength = width < 3 ? width * 2 : width;
                    if (style === 3 /* DOTTED */) {
                        dashLength = width;
                        spaceLength = width;
                    }
                    useLineDash = true;
                    if (length <= dashLength * 2) {
                        useLineDash = false;
                    }
                    else if (length <= dashLength * 2 + spaceLength) {
                        multiplier = length / (2 * dashLength + spaceLength);
                        dashLength *= multiplier;
                        spaceLength *= multiplier;
                    }
                    else {
                        numberOfDashes = Math.floor((length + spaceLength) / (dashLength + spaceLength));
                        minSpace = (length - numberOfDashes * dashLength) / (numberOfDashes - 1);
                        maxSpace = (length - (numberOfDashes + 1) * dashLength) / numberOfDashes;
                        spaceLength =
                            maxSpace <= 0 || Math.abs(spaceLength - minSpace) < Math.abs(spaceLength - maxSpace)
                                ? minSpace
                                : maxSpace;
                    }
                    if (useLineDash) {
                        if (style === 3 /* DOTTED */) {
                            this.ctx.setLineDash([0, dashLength + spaceLength]);
                        }
                        else {
                            this.ctx.setLineDash([dashLength, spaceLength]);
                        }
                    }
                    if (style === 3 /* DOTTED */) {
                        this.ctx.lineCap = 'round';
                        this.ctx.lineWidth = width;
                    }
                    else {
                        this.ctx.lineWidth = width * 2 + 1.1;
                    }
                    this.ctx.strokeStyle = asString(color);
                    this.ctx.stroke();
                    this.ctx.setLineDash([]);
                    // dashed round edge gap
                    if (style === 2 /* DASHED */) {
                        if (isBezierCurve(boxPaths[0])) {
                            path1 = boxPaths[3];
                            path2 = boxPaths[0];
                            this.ctx.beginPath();
                            this.formatPath([new Vector(path1.end.x, path1.end.y), new Vector(path2.start.x, path2.start.y)]);
                            this.ctx.stroke();
                        }
                        if (isBezierCurve(boxPaths[1])) {
                            path1 = boxPaths[1];
                            path2 = boxPaths[2];
                            this.ctx.beginPath();
                            this.formatPath([new Vector(path1.end.x, path1.end.y), new Vector(path2.start.x, path2.start.y)]);
                            this.ctx.stroke();
                        }
                    }
                    this.ctx.restore();
                    return [2 /*return*/];
                });
            });
        };
        CanvasRenderer.prototype.render = function (element) {
            return __awaiter(this, void 0, void 0, function () {
                var stack;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (this.options.backgroundColor) {
                                this.ctx.fillStyle = asString(this.options.backgroundColor);
                                this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height);
                            }
                            stack = parseStackingContexts(element);
                            return [4 /*yield*/, this.renderStack(stack)];
                        case 1:
                            _a.sent();
                            this.applyEffects([]);
                            return [2 /*return*/, this.canvas];
                    }
                });
            });
        };
        return CanvasRenderer;
    }(Renderer));
    var isTextInputElement = function (container) {
        if (container instanceof TextareaElementContainer) {
            return true;
        }
        else if (container instanceof SelectElementContainer) {
            return true;
        }
        else if (container instanceof InputElementContainer && container.type !== RADIO && container.type !== CHECKBOX) {
            return true;
        }
        return false;
    };
    var calculateBackgroundCurvedPaintingArea = function (clip, curves) {
        switch (clip) {
            case 0 /* BORDER_BOX */:
                return calculateBorderBoxPath(curves);
            case 2 /* CONTENT_BOX */:
                return calculateContentBoxPath(curves);
            case 1 /* PADDING_BOX */:
            default:
                return calculatePaddingBoxPath(curves);
        }
    };
    var canvasTextAlign = function (textAlign) {
        switch (textAlign) {
            case 1 /* CENTER */:
                return 'center';
            case 2 /* RIGHT */:
                return 'right';
            case 0 /* LEFT */:
            default:
                return 'left';
        }
    };
    // see https://github.com/niklasvh/html2canvas/pull/2645
    var iOSBrokenFonts = ['-apple-system', 'system-ui'];
    var fixIOSSystemFonts = function (fontFamilies) {
        return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent)
            ? fontFamilies.filter(function (fontFamily) { return iOSBrokenFonts.indexOf(fontFamily) === -1; })
            : fontFamilies;
    };

    var ForeignObjectRenderer = /** @class */ (function (_super) {
        __extends(ForeignObjectRenderer, _super);
        function ForeignObjectRenderer(context, options) {
            var _this = _super.call(this, context, options) || this;
            _this.canvas = options.canvas ? options.canvas : document.createElement('canvas');
            _this.ctx = _this.canvas.getContext('2d');
            _this.options = options;
            _this.canvas.width = Math.floor(options.width * options.scale);
            _this.canvas.height = Math.floor(options.height * options.scale);
            _this.canvas.style.width = options.width + "px";
            _this.canvas.style.height = options.height + "px";
            _this.ctx.scale(_this.options.scale, _this.options.scale);
            _this.ctx.translate(-options.x, -options.y);
            _this.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + options.width + "x" + options.height + " at " + options.x + "," + options.y + ") with scale " + options.scale);
            return _this;
        }
        ForeignObjectRenderer.prototype.render = function (element) {
            return __awaiter(this, void 0, void 0, function () {
                var svg, img;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            svg = createForeignObjectSVG(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, element);
                            return [4 /*yield*/, loadSerializedSVG(svg)];
                        case 1:
                            img = _a.sent();
                            if (this.options.backgroundColor) {
                                this.ctx.fillStyle = asString(this.options.backgroundColor);
                                this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale);
                            }
                            this.ctx.drawImage(img, -this.options.x * this.options.scale, -this.options.y * this.options.scale);
                            return [2 /*return*/, this.canvas];
                    }
                });
            });
        };
        return ForeignObjectRenderer;
    }(Renderer));
    var loadSerializedSVG = function (svg) {
        return new Promise(function (resolve, reject) {
            var img = new Image();
            img.onload = function () {
                resolve(img);
            };
            img.onerror = reject;
            img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(svg));
        });
    };

    var Logger = /** @class */ (function () {
        function Logger(_a) {
            var id = _a.id, enabled = _a.enabled;
            this.id = id;
            this.enabled = enabled;
            this.start = Date.now();
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Logger.prototype.debug = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (this.enabled) {
                // eslint-disable-next-line no-console
                if (typeof window !== 'undefined' && window.console && typeof console.debug === 'function') {
                    // eslint-disable-next-line no-console
                    console.debug.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
                }
                else {
                    this.info.apply(this, args);
                }
            }
        };
        Logger.prototype.getTime = function () {
            return Date.now() - this.start;
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Logger.prototype.info = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (this.enabled) {
                // eslint-disable-next-line no-console
                if (typeof window !== 'undefined' && window.console && typeof console.info === 'function') {
                    // eslint-disable-next-line no-console
                    console.info.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
                }
            }
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Logger.prototype.warn = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (this.enabled) {
                // eslint-disable-next-line no-console
                if (typeof window !== 'undefined' && window.console && typeof console.warn === 'function') {
                    // eslint-disable-next-line no-console
                    console.warn.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
                }
                else {
                    this.info.apply(this, args);
                }
            }
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Logger.prototype.error = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (this.enabled) {
                // eslint-disable-next-line no-console
                if (typeof window !== 'undefined' && window.console && typeof console.error === 'function') {
                    // eslint-disable-next-line no-console
                    console.error.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
                }
                else {
                    this.info.apply(this, args);
                }
            }
        };
        Logger.instances = {};
        return Logger;
    }());

    var Context = /** @class */ (function () {
        function Context(options, windowBounds) {
            var _a;
            this.windowBounds = windowBounds;
            this.instanceName = "#" + Context.instanceCount++;
            this.logger = new Logger({ id: this.instanceName, enabled: options.logging });
            this.cache = (_a = options.cache) !== null && _a !== void 0 ? _a : new Cache(this, options);
        }
        Context.instanceCount = 1;
        return Context;
    }());

    var html2canvas = function (element, options) {
        if (options === void 0) { options = {}; }
        return renderElement(element, options);
    };
    if (typeof window !== 'undefined') {
        CacheStorage.setContext(window);
    }
    var renderElement = function (element, opts) { return __awaiter(void 0, void 0, void 0, function () {
        var ownerDocument, defaultView, resourceOptions, contextOptions, windowOptions, windowBounds, context, foreignObjectRendering, cloneOptions, documentCloner, clonedElement, container, _a, width, height, left, top, backgroundColor, renderOptions, canvas, renderer, root, renderer;
        var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        return __generator(this, function (_u) {
            switch (_u.label) {
                case 0:
                    if (!element || typeof element !== 'object') {
                        return [2 /*return*/, Promise.reject('Invalid element provided as first argument')];
                    }
                    ownerDocument = element.ownerDocument;
                    if (!ownerDocument) {
                        throw new Error("Element is not attached to a Document");
                    }
                    defaultView = ownerDocument.defaultView;
                    if (!defaultView) {
                        throw new Error("Document is not attached to a Window");
                    }
                    resourceOptions = {
                        allowTaint: (_b = opts.allowTaint) !== null && _b !== void 0 ? _b : false,
                        imageTimeout: (_c = opts.imageTimeout) !== null && _c !== void 0 ? _c : 15000,
                        proxy: opts.proxy,
                        useCORS: (_d = opts.useCORS) !== null && _d !== void 0 ? _d : false
                    };
                    contextOptions = __assign({ logging: (_e = opts.logging) !== null && _e !== void 0 ? _e : true, cache: opts.cache }, resourceOptions);
                    windowOptions = {
                        windowWidth: (_f = opts.windowWidth) !== null && _f !== void 0 ? _f : defaultView.innerWidth,
                        windowHeight: (_g = opts.windowHeight) !== null && _g !== void 0 ? _g : defaultView.innerHeight,
                        scrollX: (_h = opts.scrollX) !== null && _h !== void 0 ? _h : defaultView.pageXOffset,
                        scrollY: (_j = opts.scrollY) !== null && _j !== void 0 ? _j : defaultView.pageYOffset
                    };
                    windowBounds = new Bounds(windowOptions.scrollX, windowOptions.scrollY, windowOptions.windowWidth, windowOptions.windowHeight);
                    context = new Context(contextOptions, windowBounds);
                    foreignObjectRendering = (_k = opts.foreignObjectRendering) !== null && _k !== void 0 ? _k : false;
                    cloneOptions = {
                        allowTaint: (_l = opts.allowTaint) !== null && _l !== void 0 ? _l : false,
                        onclone: opts.onclone,
                        ignoreElements: opts.ignoreElements,
                        inlineImages: foreignObjectRendering,
                        copyStyles: foreignObjectRendering
                    };
                    context.logger.debug("Starting document clone with size " + windowBounds.width + "x" + windowBounds.height + " scrolled to " + -windowBounds.left + "," + -windowBounds.top);
                    documentCloner = new DocumentCloner(context, element, cloneOptions);
                    clonedElement = documentCloner.clonedReferenceElement;
                    if (!clonedElement) {
                        return [2 /*return*/, Promise.reject("Unable to find element in cloned iframe")];
                    }
                    return [4 /*yield*/, documentCloner.toIFrame(ownerDocument, windowBounds)];
                case 1:
                    container = _u.sent();
                    _a = isBodyElement(clonedElement) || isHTMLElement(clonedElement)
                        ? parseDocumentSize(clonedElement.ownerDocument)
                        : parseBounds(context, clonedElement), width = _a.width, height = _a.height, left = _a.left, top = _a.top;
                    backgroundColor = parseBackgroundColor(context, clonedElement, opts.backgroundColor);
                    renderOptions = {
                        canvas: opts.canvas,
                        backgroundColor: backgroundColor,
                        scale: (_o = (_m = opts.scale) !== null && _m !== void 0 ? _m : defaultView.devicePixelRatio) !== null && _o !== void 0 ? _o : 1,
                        x: ((_p = opts.x) !== null && _p !== void 0 ? _p : 0) + left,
                        y: ((_q = opts.y) !== null && _q !== void 0 ? _q : 0) + top,
                        width: (_r = opts.width) !== null && _r !== void 0 ? _r : Math.ceil(width),
                        height: (_s = opts.height) !== null && _s !== void 0 ? _s : Math.ceil(height)
                    };
                    if (!foreignObjectRendering) return [3 /*break*/, 3];
                    context.logger.debug("Document cloned, using foreign object rendering");
                    renderer = new ForeignObjectRenderer(context, renderOptions);
                    return [4 /*yield*/, renderer.render(clonedElement)];
                case 2:
                    canvas = _u.sent();
                    return [3 /*break*/, 5];
                case 3:
                    context.logger.debug("Document cloned, element located at " + left + "," + top + " with size " + width + "x" + height + " using computed rendering");
                    context.logger.debug("Starting DOM parsing");
                    root = parseTree(context, clonedElement);
                    if (backgroundColor === root.styles.backgroundColor) {
                        root.styles.backgroundColor = COLORS.TRANSPARENT;
                    }
                    context.logger.debug("Starting renderer for element at " + renderOptions.x + "," + renderOptions.y + " with size " + renderOptions.width + "x" + renderOptions.height);
                    renderer = new CanvasRenderer(context, renderOptions);
                    return [4 /*yield*/, renderer.render(root)];
                case 4:
                    canvas = _u.sent();
                    _u.label = 5;
                case 5:
                    if ((_t = opts.removeContainer) !== null && _t !== void 0 ? _t : true) {
                        if (!DocumentCloner.destroy(container)) {
                            context.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore");
                        }
                    }
                    context.logger.debug("Finished rendering");
                    return [2 /*return*/, canvas];
            }
        });
    }); };
    var parseBackgroundColor = function (context, element, backgroundColorOverride) {
        var ownerDocument = element.ownerDocument;
        // http://www.w3.org/TR/css3-background/#special-backgrounds
        var documentBackgroundColor = ownerDocument.documentElement
            ? parseColor(context, getComputedStyle(ownerDocument.documentElement).backgroundColor)
            : COLORS.TRANSPARENT;
        var bodyBackgroundColor = ownerDocument.body
            ? parseColor(context, getComputedStyle(ownerDocument.body).backgroundColor)
            : COLORS.TRANSPARENT;
        var defaultBackgroundColor = typeof backgroundColorOverride === 'string'
            ? parseColor(context, backgroundColorOverride)
            : backgroundColorOverride === null
                ? COLORS.TRANSPARENT
                : 0xffffffff;
        return element === ownerDocument.documentElement
            ? isTransparent(documentBackgroundColor)
                ? isTransparent(bodyBackgroundColor)
                    ? defaultBackgroundColor
                    : bodyBackgroundColor
                : documentBackgroundColor
            : defaultBackgroundColor;
    };

    return html2canvas;

})));
//# sourceMappingURL=html2canvas.js.map


/***/ }),

/***/ "./node_modules/html2pdf.js/dist/html2pdf.js":
/*!***************************************************!*\
  !*** ./node_modules/html2pdf.js/dist/html2pdf.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");
/**
 * html2pdf.js v0.9.3
 * Copyright (c) 2021 Erik Koopmans
 * Released under the MIT License.
 */
(function (global, factory) {
	 true ? module.exports = factory(__webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js"), __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js")) :
	0;
}(this, (function (jsPDF,html2canvas) { 'use strict';

jsPDF = jsPDF && jsPDF.hasOwnProperty('default') ? jsPDF['default'] : jsPDF;
html2canvas = html2canvas && html2canvas.hasOwnProperty('default') ? html2canvas['default'] : html2canvas;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





















var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

// Determine the type of a variable/object.
var objType = function objType(obj) {
  var type = typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
  if (type === 'undefined') return 'undefined';else if (type === 'string' || obj instanceof String) return 'string';else if (type === 'number' || obj instanceof Number) return 'number';else if (type === 'function' || obj instanceof Function) return 'function';else if (!!obj && obj.constructor === Array) return 'array';else if (obj && obj.nodeType === 1) return 'element';else if (type === 'object') return 'object';else return 'unknown';
};

// Create an HTML element with optional className, innerHTML, and style.
var createElement = function createElement(tagName, opt) {
  var el = document.createElement(tagName);
  if (opt.className) el.className = opt.className;
  if (opt.innerHTML) {
    el.innerHTML = opt.innerHTML;
    var scripts = el.getElementsByTagName('script');
    for (var i = scripts.length; i-- > 0; null) {
      scripts[i].parentNode.removeChild(scripts[i]);
    }
  }
  for (var key in opt.style) {
    el.style[key] = opt.style[key];
  }
  return el;
};

// Deep-clone a node and preserve contents/properties.
var cloneNode = function cloneNode(node, javascriptEnabled) {
  // Recursively clone the node.
  var clone = node.nodeType === 3 ? document.createTextNode(node.nodeValue) : node.cloneNode(false);
  for (var child = node.firstChild; child; child = child.nextSibling) {
    if (javascriptEnabled === true || child.nodeType !== 1 || child.nodeName !== 'SCRIPT') {
      clone.appendChild(cloneNode(child, javascriptEnabled));
    }
  }

  if (node.nodeType === 1) {
    // Preserve contents/properties of special nodes.
    if (node.nodeName === 'CANVAS') {
      clone.width = node.width;
      clone.height = node.height;
      clone.getContext('2d').drawImage(node, 0, 0);
    } else if (node.nodeName === 'TEXTAREA' || node.nodeName === 'SELECT') {
      clone.value = node.value;
    }

    // Preserve the node's scroll position when it loads.
    clone.addEventListener('load', function () {
      clone.scrollTop = node.scrollTop;
      clone.scrollLeft = node.scrollLeft;
    }, true);
  }

  // Return the cloned node.
  return clone;
};

// Convert units from px using the conversion value 'k' from jsPDF.
var unitConvert = function unitConvert(obj, k) {
  if (objType(obj) === 'number') {
    return obj * 72 / 96 / k;
  } else {
    var newObj = {};
    for (var key in obj) {
      newObj[key] = obj[key] * 72 / 96 / k;
    }
    return newObj;
  }
};

// Convert units to px using the conversion value 'k' from jsPDF.
var toPx = function toPx(val, k) {
  return Math.floor(val * k / 72 * 96);
};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : typeof self !== 'undefined' ? self : {};

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
}



function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var es6Promise = createCommonjsModule(function (module, exports) {
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.5+7f2b526d
 */

(function (global, factory) {
	module.exports = factory();
}(commonjsGlobal, (function () { function objectOrFunction(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isFunction(x) {
  return typeof x === 'function';
}



var _isArray = void 0;
if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
}

var isArray = _isArray;

var len = 0;
var vertxNext = void 0;
var customSchedulerFn = void 0;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var vertx = Function('return this')().require('vertx');
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = void 0;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && typeof commonjsRequire === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;


  if (_state) {
    var callback = arguments[_state - 1];
    asap(function () {
      return invokeCallback(_state, child, callback, parent._result);
    });
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve$1(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(2);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

var TRY_CATCH_ERROR = { error: null };

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function getThen(promise) {
  try {
    return promise.then;
  } catch (error) {
    TRY_CATCH_ERROR.error = error;
    return TRY_CATCH_ERROR;
  }
}

function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
  try {
    then$$1.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then$$1) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then$$1, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return resolve(promise, value);
    }, function (reason) {
      return reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$1) {
  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$1 === TRY_CATCH_ERROR) {
      reject(promise, TRY_CATCH_ERROR.error);
      TRY_CATCH_ERROR.error = null;
    } else if (then$$1 === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$1)) {
      handleForeignThenable(promise, maybeThenable, then$$1);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function resolve(promise, value) {
  if (promise === value) {
    reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    handleMaybeThenable(promise, value, getThen(value));
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;


  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = void 0,
      callback = void 0,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function tryCatch(callback, detail) {
  try {
    return callback(detail);
  } catch (e) {
    TRY_CATCH_ERROR.error = e;
    return TRY_CATCH_ERROR;
  }
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = void 0,
      error = void 0,
      succeeded = void 0,
      failed = void 0;

  if (hasCallback) {
    value = tryCatch(callback, detail);

    if (value === TRY_CATCH_ERROR) {
      failed = true;
      error = value.error;
      value.error = null;
    } else {
      succeeded = true;
    }

    if (promise === value) {
      reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
    succeeded = true;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
    resolve(promise, value);
  } else if (failed) {
    reject(promise, error);
  } else if (settled === FULFILLED) {
    fulfill(promise, value);
  } else if (settled === REJECTED) {
    reject(promise, value);
  }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      resolve(promise, value);
    }, function rejectPromise(reason) {
      reject(promise, reason);
    });
  } catch (e) {
    reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
}

var Enumerator = function () {
  function Enumerator(Constructor, input) {
    this._instanceConstructor = Constructor;
    this.promise = new Constructor(noop);

    if (!this.promise[PROMISE_ID]) {
      makePromise(this.promise);
    }

    if (isArray(input)) {
      this.length = input.length;
      this._remaining = input.length;

      this._result = new Array(this.length);

      if (this.length === 0) {
        fulfill(this.promise, this._result);
      } else {
        this.length = this.length || 0;
        this._enumerate(input);
        if (this._remaining === 0) {
          fulfill(this.promise, this._result);
        }
      }
    } else {
      reject(this.promise, validationError());
    }
  }

  Enumerator.prototype._enumerate = function _enumerate(input) {
    for (var i = 0; this._state === PENDING && i < input.length; i++) {
      this._eachEntry(input[i], i);
    }
  };

  Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
    var c = this._instanceConstructor;
    var resolve$$1 = c.resolve;


    if (resolve$$1 === resolve$1) {
      var _then = getThen(entry);

      if (_then === then && entry._state !== PENDING) {
        this._settledAt(entry._state, i, entry._result);
      } else if (typeof _then !== 'function') {
        this._remaining--;
        this._result[i] = entry;
      } else if (c === Promise$1) {
        var promise = new c(noop);
        handleMaybeThenable(promise, entry, _then);
        this._willSettleAt(promise, i);
      } else {
        this._willSettleAt(new c(function (resolve$$1) {
          return resolve$$1(entry);
        }), i);
      }
    } else {
      this._willSettleAt(resolve$$1(entry), i);
    }
  };

  Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
    var promise = this.promise;


    if (promise._state === PENDING) {
      this._remaining--;

      if (state === REJECTED) {
        reject(promise, value);
      } else {
        this._result[i] = value;
      }
    }

    if (this._remaining === 0) {
      fulfill(promise, this._result);
    }
  };

  Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
    var enumerator = this;

    subscribe(promise, undefined, function (value) {
      return enumerator._settledAt(FULFILLED, i, value);
    }, function (reason) {
      return enumerator._settledAt(REJECTED, i, reason);
    });
  };

  return Enumerator;
}();

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries) {
  return new Enumerator(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject$1(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {Function} resolver
  Useful for tooling.
  @constructor
*/

var Promise$1 = function () {
  function Promise(resolver) {
    this[PROMISE_ID] = nextId();
    this._result = this._state = undefined;
    this._subscribers = [];

    if (noop !== resolver) {
      typeof resolver !== 'function' && needsResolver();
      this instanceof Promise ? initializePromise(this, resolver) : needsNew();
    }
  }

  /**
  The primary way of interacting with a promise is through its `then` method,
  which registers callbacks to receive either a promise's eventual value or the
  reason why the promise cannot be fulfilled.
   ```js
  findUser().then(function(user){
    // user is available
  }, function(reason){
    // user is unavailable, and you are given the reason why
  });
  ```
   Chaining
  --------
   The return value of `then` is itself a promise.  This second, 'downstream'
  promise is resolved with the return value of the first promise's fulfillment
  or rejection handler, or rejected if the handler throws an exception.
   ```js
  findUser().then(function (user) {
    return user.name;
  }, function (reason) {
    return 'default name';
  }).then(function (userName) {
    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
    // will be `'default name'`
  });
   findUser().then(function (user) {
    throw new Error('Found user, but still unhappy');
  }, function (reason) {
    throw new Error('`findUser` rejected and we're unhappy');
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
    // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
  });
  ```
  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
   ```js
  findUser().then(function (user) {
    throw new PedagogicalException('Upstream error');
  }).then(function (value) {
    // never reached
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // The `PedgagocialException` is propagated all the way down to here
  });
  ```
   Assimilation
  ------------
   Sometimes the value you want to propagate to a downstream promise can only be
  retrieved asynchronously. This can be achieved by returning a promise in the
  fulfillment or rejection handler. The downstream promise will then be pending
  until the returned promise is settled. This is called *assimilation*.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // The user's comments are now available
  });
  ```
   If the assimliated promise rejects, then the downstream promise will also reject.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // If `findCommentsByAuthor` fulfills, we'll have the value here
  }, function (reason) {
    // If `findCommentsByAuthor` rejects, we'll have the reason here
  });
  ```
   Simple Example
  --------------
   Synchronous Example
   ```javascript
  let result;
   try {
    result = findResult();
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
  findResult(function(result, err){
    if (err) {
      // failure
    } else {
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findResult().then(function(result){
    // success
  }, function(reason){
    // failure
  });
  ```
   Advanced Example
  --------------
   Synchronous Example
   ```javascript
  let author, books;
   try {
    author = findAuthor();
    books  = findBooksByAuthor(author);
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
   function foundBooks(books) {
   }
   function failure(reason) {
   }
   findAuthor(function(author, err){
    if (err) {
      failure(err);
      // failure
    } else {
      try {
        findBoooksByAuthor(author, function(books, err) {
          if (err) {
            failure(err);
          } else {
            try {
              foundBooks(books);
            } catch(reason) {
              failure(reason);
            }
          }
        });
      } catch(error) {
        failure(err);
      }
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findAuthor().
    then(findBooksByAuthor).
    then(function(books){
      // found books
  }).catch(function(reason){
    // something went wrong
  });
  ```
   @method then
  @param {Function} onFulfilled
  @param {Function} onRejected
  Useful for tooling.
  @return {Promise}
  */

  /**
  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
  as the catch block of a try/catch statement.
  ```js
  function findAuthor(){
  throw new Error('couldn't find that author');
  }
  // synchronous
  try {
  findAuthor();
  } catch(reason) {
  // something went wrong
  }
  // async with promises
  findAuthor().catch(function(reason){
  // something went wrong
  });
  ```
  @method catch
  @param {Function} onRejection
  Useful for tooling.
  @return {Promise}
  */


  Promise.prototype.catch = function _catch(onRejection) {
    return this.then(null, onRejection);
  };

  /**
    `finally` will be invoked regardless of the promise's fate just as native
    try/catch/finally behaves
  
    Synchronous example:
  
    ```js
    findAuthor() {
      if (Math.random() > 0.5) {
        throw new Error();
      }
      return new Author();
    }
  
    try {
      return findAuthor(); // succeed or fail
    } catch(error) {
      return findOtherAuther();
    } finally {
      // always runs
      // doesn't affect the return value
    }
    ```
  
    Asynchronous example:
  
    ```js
    findAuthor().catch(function(reason){
      return findOtherAuther();
    }).finally(function(){
      // author was either found, or not
    });
    ```
  
    @method finally
    @param {Function} callback
    @return {Promise}
  */


  Promise.prototype.finally = function _finally(callback) {
    var promise = this;
    var constructor = promise.constructor;

    if (isFunction(callback)) {
      return promise.then(function (value) {
        return constructor.resolve(callback()).then(function () {
          return value;
        });
      }, function (reason) {
        return constructor.resolve(callback()).then(function () {
          throw reason;
        });
      });
    }

    return promise.then(callback, callback);
  };

  return Promise;
}();

Promise$1.prototype.then = then;
Promise$1.all = all;
Promise$1.race = race;
Promise$1.resolve = resolve$1;
Promise$1.reject = reject$1;
Promise$1._setScheduler = setScheduler;
Promise$1._setAsap = setAsap;
Promise$1._asap = asap;

/*global self*/
function polyfill() {
  var local = void 0;

  if (typeof commonjsGlobal !== 'undefined') {
    local = commonjsGlobal;
  } else if (typeof self !== 'undefined') {
    local = self;
  } else {
    try {
      local = Function('return this')();
    } catch (e) {
      throw new Error('polyfill failed because global object is unavailable in this environment');
    }
  }

  var P = local.Promise;

  if (P) {
    var promiseToString = null;
    try {
      promiseToString = Object.prototype.toString.call(P.resolve());
    } catch (e) {
      // silently ignored
    }

    if (promiseToString === '[object Promise]' && !P.cast) {
      return;
    }
  }

  local.Promise = Promise$1;
}

// Strange compat..
Promise$1.polyfill = polyfill;
Promise$1.Promise = Promise$1;

return Promise$1;

})));




});

var Promise$1 = es6Promise.Promise;

/* ----- CONSTRUCTOR ----- */

var Worker = function Worker(opt) {
  // Create the root parent for the proto chain, and the starting Worker.
  var root = _extends(Worker.convert(Promise$1.resolve()), JSON.parse(JSON.stringify(Worker.template)));
  var self = Worker.convert(Promise$1.resolve(), root);

  // Set progress, optional settings, and return.
  self = self.setProgress(1, Worker, 1, [Worker]);
  self = self.set(opt);
  return self;
};

// Boilerplate for subclassing Promise.
Worker.prototype = Object.create(Promise$1.prototype);
Worker.prototype.constructor = Worker;

// Converts/casts promises into Workers.
Worker.convert = function convert(promise, inherit) {
  // Uses prototypal inheritance to receive changes made to ancestors' properties.
  promise.__proto__ = inherit || Worker.prototype;
  return promise;
};

Worker.template = {
  prop: {
    src: null,
    container: null,
    overlay: null,
    canvas: null,
    img: null,
    pdf: null,
    pageSize: null
  },
  progress: {
    val: 0,
    state: null,
    n: 0,
    stack: []
  },
  opt: {
    filename: 'file.pdf',
    margin: [0, 0, 0, 0],
    image: { type: 'jpeg', quality: 0.95 },
    enableLinks: true,
    html2canvas: {},
    jsPDF: {}
  }
};

/* ----- FROM / TO ----- */

Worker.prototype.from = function from(src, type) {
  function getType(src) {
    switch (objType(src)) {
      case 'string':
        return 'string';
      case 'element':
        return src.nodeName.toLowerCase === 'canvas' ? 'canvas' : 'element';
      default:
        return 'unknown';
    }
  }

  return this.then(function from_main() {
    type = type || getType(src);
    switch (type) {
      case 'string':
        return this.set({ src: createElement('div', { innerHTML: src }) });
      case 'element':
        return this.set({ src: src });
      case 'canvas':
        return this.set({ canvas: src });
      case 'img':
        return this.set({ img: src });
      default:
        return this.error('Unknown source type.');
    }
  });
};

Worker.prototype.to = function to(target) {
  // Route the 'to' request to the appropriate method.
  switch (target) {
    case 'container':
      return this.toContainer();
    case 'canvas':
      return this.toCanvas();
    case 'img':
      return this.toImg();
    case 'pdf':
      return this.toPdf();
    default:
      return this.error('Invalid target.');
  }
};

Worker.prototype.toContainer = function toContainer() {
  // Set up function prerequisites.
  var prereqs = [function checkSrc() {
    return this.prop.src || this.error('Cannot duplicate - no source HTML.');
  }, function checkPageSize() {
    return this.prop.pageSize || this.setPageSize();
  }];

  return this.thenList(prereqs).then(function toContainer_main() {
    // Define the CSS styles for the container and its overlay parent.
    var overlayCSS = {
      position: 'fixed', overflow: 'hidden', zIndex: 1000,
      left: 0, right: 0, bottom: 0, top: 0,
      backgroundColor: 'rgba(0,0,0,0.8)'
    };
    var containerCSS = {
      position: 'absolute', width: this.prop.pageSize.inner.width + this.prop.pageSize.unit,
      left: 0, right: 0, top: 0, height: 'auto', margin: 'auto',
      backgroundColor: 'white'
    };

    // Set the overlay to hidden (could be changed in the future to provide a print preview).
    overlayCSS.opacity = 0;

    // Create and attach the elements.
    var source = cloneNode(this.prop.src, this.opt.html2canvas.javascriptEnabled);
    this.prop.overlay = createElement('div', { className: 'html2pdf__overlay', style: overlayCSS });
    this.prop.container = createElement('div', { className: 'html2pdf__container', style: containerCSS });
    this.prop.container.appendChild(source);
    this.prop.overlay.appendChild(this.prop.container);
    document.body.appendChild(this.prop.overlay);
  });
};

Worker.prototype.toCanvas = function toCanvas() {
  // Set up function prerequisites.
  var prereqs = [function checkContainer() {
    return document.body.contains(this.prop.container) || this.toContainer();
  }];

  // Fulfill prereqs then create the canvas.
  return this.thenList(prereqs).then(function toCanvas_main() {
    // Handle old-fashioned 'onrendered' argument.
    var options = _extends({}, this.opt.html2canvas);
    delete options.onrendered;

    return html2canvas(this.prop.container, options);
  }).then(function toCanvas_post(canvas) {
    // Handle old-fashioned 'onrendered' argument.
    var onRendered = this.opt.html2canvas.onrendered || function () {};
    onRendered(canvas);

    this.prop.canvas = canvas;
    document.body.removeChild(this.prop.overlay);
  });
};

Worker.prototype.toImg = function toImg() {
  // Set up function prerequisites.
  var prereqs = [function checkCanvas() {
    return this.prop.canvas || this.toCanvas();
  }];

  // Fulfill prereqs then create the image.
  return this.thenList(prereqs).then(function toImg_main() {
    var imgData = this.prop.canvas.toDataURL('image/' + this.opt.image.type, this.opt.image.quality);
    this.prop.img = document.createElement('img');
    this.prop.img.src = imgData;
  });
};

Worker.prototype.toPdf = function toPdf() {
  // Set up function prerequisites.
  var prereqs = [function checkCanvas() {
    return this.prop.canvas || this.toCanvas();
  }];

  // Fulfill prereqs then create the image.
  return this.thenList(prereqs).then(function toPdf_main() {
    // Create local copies of frequently used properties.
    var canvas = this.prop.canvas;
    var opt = this.opt;

    // Calculate the number of pages.
    var pxFullHeight = canvas.height;
    var pxPageHeight = Math.floor(canvas.width * this.prop.pageSize.inner.ratio);
    var nPages = Math.ceil(pxFullHeight / pxPageHeight);

    // Define pageHeight separately so it can be trimmed on the final page.
    var pageHeight = this.prop.pageSize.inner.height;

    // Create a one-page canvas to split up the full image.
    var pageCanvas = document.createElement('canvas');
    var pageCtx = pageCanvas.getContext('2d');
    pageCanvas.width = canvas.width;
    pageCanvas.height = pxPageHeight;

    // Initialize the PDF.
    this.prop.pdf = this.prop.pdf || new jsPDF(opt.jsPDF);

    for (var page = 0; page < nPages; page++) {
      // Trim the final page to reduce file size.
      if (page === nPages - 1 && pxFullHeight % pxPageHeight !== 0) {
        pageCanvas.height = pxFullHeight % pxPageHeight;
        pageHeight = pageCanvas.height * this.prop.pageSize.inner.width / pageCanvas.width;
      }

      // Display the page.
      var w = pageCanvas.width;
      var h = pageCanvas.height;
      pageCtx.fillStyle = 'white';
      pageCtx.fillRect(0, 0, w, h);
      pageCtx.drawImage(canvas, 0, page * pxPageHeight, w, h, 0, 0, w, h);

      // Add the page to the PDF.
      if (page) this.prop.pdf.addPage();
      var imgData = pageCanvas.toDataURL('image/' + opt.image.type, opt.image.quality);
      this.prop.pdf.addImage(imgData, opt.image.type, opt.margin[1], opt.margin[0], this.prop.pageSize.inner.width, pageHeight);
    }
  });
};

/* ----- OUTPUT / SAVE ----- */

Worker.prototype.output = function output(type, options, src) {
  // Redirect requests to the correct function (outputPdf / outputImg).
  src = src || 'pdf';
  if (src.toLowerCase() === 'img' || src.toLowerCase() === 'image') {
    return this.outputImg(type, options);
  } else {
    return this.outputPdf(type, options);
  }
};

Worker.prototype.outputPdf = function outputPdf(type, options) {
  // Set up function prerequisites.
  var prereqs = [function checkPdf() {
    return this.prop.pdf || this.toPdf();
  }];

  // Fulfill prereqs then perform the appropriate output.
  return this.thenList(prereqs).then(function outputPdf_main() {
    /* Currently implemented output types:
     *    https://rawgit.com/MrRio/jsPDF/master/docs/jspdf.js.html#line992
     *  save(options), arraybuffer, blob, bloburi/bloburl,
     *  datauristring/dataurlstring, dataurlnewwindow, datauri/dataurl
     */
    return this.prop.pdf.output(type, options);
  });
};

Worker.prototype.outputImg = function outputImg(type, options) {
  // Set up function prerequisites.
  var prereqs = [function checkImg() {
    return this.prop.img || this.toImg();
  }];

  // Fulfill prereqs then perform the appropriate output.
  return this.thenList(prereqs).then(function outputImg_main() {
    switch (type) {
      case undefined:
      case 'img':
        return this.prop.img;
      case 'datauristring':
      case 'dataurlstring':
        return this.prop.img.src;
      case 'datauri':
      case 'dataurl':
        return document.location.href = this.prop.img.src;
      default:
        throw 'Image output type "' + type + '" is not supported.';
    }
  });
};

Worker.prototype.save = function save(filename) {
  // Set up function prerequisites.
  var prereqs = [function checkPdf() {
    return this.prop.pdf || this.toPdf();
  }];

  // Fulfill prereqs, update the filename (if provided), and save the PDF.
  return this.thenList(prereqs).set(filename ? { filename: filename } : null).then(function save_main() {
    this.prop.pdf.save(this.opt.filename);
  });
};

/* ----- SET / GET ----- */

Worker.prototype.set = function set$$1(opt) {
  // TODO: Implement ordered pairs?

  // Silently ignore invalid or empty input.
  if (objType(opt) !== 'object') {
    return this;
  }

  // Build an array of setter functions to queue.
  var fns = Object.keys(opt || {}).map(function (key) {
    if (key in Worker.template.prop) {
      // Set pre-defined properties.
      return function set_prop() {
        this.prop[key] = opt[key];
      };
    } else {
      switch (key) {
        case 'margin':
          return this.setMargin.bind(this, opt.margin);
        case 'jsPDF':
          return function set_jsPDF() {
            this.opt.jsPDF = opt.jsPDF;return this.setPageSize();
          };
        case 'pageSize':
          return this.setPageSize.bind(this, opt.pageSize);
        default:
          // Set any other properties in opt.
          return function set_opt() {
            this.opt[key] = opt[key];
          };
      }
    }
  }, this);

  // Set properties within the promise chain.
  return this.then(function set_main() {
    return this.thenList(fns);
  });
};

Worker.prototype.get = function get$$1(key, cbk) {
  return this.then(function get_main() {
    // Fetch the requested property, either as a predefined prop or in opt.
    var val = key in Worker.template.prop ? this.prop[key] : this.opt[key];
    return cbk ? cbk(val) : val;
  });
};

Worker.prototype.setMargin = function setMargin(margin) {
  return this.then(function setMargin_main() {
    // Parse the margin property: [top, left, bottom, right].
    switch (objType(margin)) {
      case 'number':
        margin = [margin, margin, margin, margin];
      case 'array':
        if (margin.length === 2) {
          margin = [margin[0], margin[1], margin[0], margin[1]];
        }
        if (margin.length === 4) {
          break;
        }
      default:
        return this.error('Invalid margin array.');
    }

    // Set the margin property, then update pageSize.
    this.opt.margin = margin;
  }).then(this.setPageSize);
};

Worker.prototype.setPageSize = function setPageSize(pageSize) {
  return this.then(function setPageSize_main() {
    // Retrieve page-size based on jsPDF settings, if not explicitly provided.
    pageSize = pageSize || jsPDF.getPageSize(this.opt.jsPDF);

    // Add 'inner' field if not present.
    if (!pageSize.hasOwnProperty('inner')) {
      pageSize.inner = {
        width: pageSize.width - this.opt.margin[1] - this.opt.margin[3],
        height: pageSize.height - this.opt.margin[0] - this.opt.margin[2]
      };
      pageSize.inner.px = {
        width: toPx(pageSize.inner.width, pageSize.k),
        height: toPx(pageSize.inner.height, pageSize.k)
      };
      pageSize.inner.ratio = pageSize.inner.height / pageSize.inner.width;
    }

    // Attach pageSize to this.
    this.prop.pageSize = pageSize;
  });
};

Worker.prototype.setProgress = function setProgress(val, state, n, stack) {
  // Immediately update all progress values.
  if (val != null) this.progress.val = val;
  if (state != null) this.progress.state = state;
  if (n != null) this.progress.n = n;
  if (stack != null) this.progress.stack = stack;
  this.progress.ratio = this.progress.val / this.progress.state;

  // Return this for command chaining.
  return this;
};

Worker.prototype.updateProgress = function updateProgress(val, state, n, stack) {
  // Immediately update all progress values, using setProgress.
  return this.setProgress(val ? this.progress.val + val : null, state ? state : null, n ? this.progress.n + n : null, stack ? this.progress.stack.concat(stack) : null);
};

/* ----- PROMISE MAPPING ----- */

Worker.prototype.then = function then(onFulfilled, onRejected) {
  // Wrap `this` for encapsulation.
  var self = this;

  return this.thenCore(onFulfilled, onRejected, function then_main(onFulfilled, onRejected) {
    // Update progress while queuing, calling, and resolving `then`.
    self.updateProgress(null, null, 1, [onFulfilled]);
    return Promise$1.prototype.then.call(this, function then_pre(val) {
      self.updateProgress(null, onFulfilled);
      return val;
    }).then(onFulfilled, onRejected).then(function then_post(val) {
      self.updateProgress(1);
      return val;
    });
  });
};

Worker.prototype.thenCore = function thenCore(onFulfilled, onRejected, thenBase) {
  // Handle optional thenBase parameter.
  thenBase = thenBase || Promise$1.prototype.then;

  // Wrap `this` for encapsulation and bind it to the promise handlers.
  var self = this;
  if (onFulfilled) {
    onFulfilled = onFulfilled.bind(self);
  }
  if (onRejected) {
    onRejected = onRejected.bind(self);
  }

  // Cast self into a Promise to avoid polyfills recursively defining `then`.
  var isNative = Promise$1.toString().indexOf('[native code]') !== -1 && Promise$1.name === 'Promise';
  var selfPromise = isNative ? self : Worker.convert(_extends({}, self), Promise$1.prototype);

  // Return the promise, after casting it into a Worker and preserving props.
  var returnVal = thenBase.call(selfPromise, onFulfilled, onRejected);
  return Worker.convert(returnVal, self.__proto__);
};

Worker.prototype.thenExternal = function thenExternal(onFulfilled, onRejected) {
  // Call `then` and return a standard promise (exits the Worker chain).
  return Promise$1.prototype.then.call(this, onFulfilled, onRejected);
};

Worker.prototype.thenList = function thenList(fns) {
  // Queue a series of promise 'factories' into the promise chain.
  var self = this;
  fns.forEach(function thenList_forEach(fn) {
    self = self.thenCore(fn);
  });
  return self;
};

Worker.prototype['catch'] = function (onRejected) {
  // Bind `this` to the promise handler, call `catch`, and return a Worker.
  if (onRejected) {
    onRejected = onRejected.bind(this);
  }
  var returnVal = Promise$1.prototype['catch'].call(this, onRejected);
  return Worker.convert(returnVal, this);
};

Worker.prototype.catchExternal = function catchExternal(onRejected) {
  // Call `catch` and return a standard promise (exits the Worker chain).
  return Promise$1.prototype['catch'].call(this, onRejected);
};

Worker.prototype.error = function error(msg) {
  // Throw the error in the Promise chain.
  return this.then(function error_main() {
    throw new Error(msg);
  });
};

/* ----- ALIASES ----- */

Worker.prototype.using = Worker.prototype.set;
Worker.prototype.saveAs = Worker.prototype.save;
Worker.prototype.export = Worker.prototype.output;
Worker.prototype.run = Worker.prototype.then;

// Import dependencies.
// Get dimensions of a PDF page, as determined by jsPDF.
jsPDF.getPageSize = function (orientation, unit, format) {
  // Decode options object
  if ((typeof orientation === 'undefined' ? 'undefined' : _typeof(orientation)) === 'object') {
    var options = orientation;
    orientation = options.orientation;
    unit = options.unit || unit;
    format = options.format || format;
  }

  // Default options
  unit = unit || 'mm';
  format = format || 'a4';
  orientation = ('' + (orientation || 'P')).toLowerCase();
  var format_as_string = ('' + format).toLowerCase();

  // Size in pt of various paper formats
  var pageFormats = {
    'a0': [2383.94, 3370.39], 'a1': [1683.78, 2383.94],
    'a2': [1190.55, 1683.78], 'a3': [841.89, 1190.55],
    'a4': [595.28, 841.89], 'a5': [419.53, 595.28],
    'a6': [297.64, 419.53], 'a7': [209.76, 297.64],
    'a8': [147.40, 209.76], 'a9': [104.88, 147.40],
    'a10': [73.70, 104.88], 'b0': [2834.65, 4008.19],
    'b1': [2004.09, 2834.65], 'b2': [1417.32, 2004.09],
    'b3': [1000.63, 1417.32], 'b4': [708.66, 1000.63],
    'b5': [498.90, 708.66], 'b6': [354.33, 498.90],
    'b7': [249.45, 354.33], 'b8': [175.75, 249.45],
    'b9': [124.72, 175.75], 'b10': [87.87, 124.72],
    'c0': [2599.37, 3676.54], 'c1': [1836.85, 2599.37],
    'c2': [1298.27, 1836.85], 'c3': [918.43, 1298.27],
    'c4': [649.13, 918.43], 'c5': [459.21, 649.13],
    'c6': [323.15, 459.21], 'c7': [229.61, 323.15],
    'c8': [161.57, 229.61], 'c9': [113.39, 161.57],
    'c10': [79.37, 113.39], 'dl': [311.81, 623.62],
    'letter': [612, 792],
    'government-letter': [576, 756],
    'legal': [612, 1008],
    'junior-legal': [576, 360],
    'ledger': [1224, 792],
    'tabloid': [792, 1224],
    'credit-card': [153, 243]
  };

  // Unit conversion
  switch (unit) {
    case 'pt':
      var k = 1;break;
    case 'mm':
      var k = 72 / 25.4;break;
    case 'cm':
      var k = 72 / 2.54;break;
    case 'in':
      var k = 72;break;
    case 'px':
      var k = 72 / 96;break;
    case 'pc':
      var k = 12;break;
    case 'em':
      var k = 12;break;
    case 'ex':
      var k = 6;break;
    default:
      throw 'Invalid unit: ' + unit;
  }

  // Dimensions are stored as user units and converted to points on output
  if (pageFormats.hasOwnProperty(format_as_string)) {
    var pageHeight = pageFormats[format_as_string][1] / k;
    var pageWidth = pageFormats[format_as_string][0] / k;
  } else {
    try {
      var pageHeight = format[1];
      var pageWidth = format[0];
    } catch (err) {
      throw new Error('Invalid format: ' + format);
    }
  }

  // Handle page orientation
  if (orientation === 'p' || orientation === 'portrait') {
    orientation = 'p';
    if (pageWidth > pageHeight) {
      var tmp = pageWidth;
      pageWidth = pageHeight;
      pageHeight = tmp;
    }
  } else if (orientation === 'l' || orientation === 'landscape') {
    orientation = 'l';
    if (pageHeight > pageWidth) {
      var tmp = pageWidth;
      pageWidth = pageHeight;
      pageHeight = tmp;
    }
  } else {
    throw 'Invalid orientation: ' + orientation;
  }

  // Return information (k is the unit conversion ratio from pts)
  var info = { 'width': pageWidth, 'height': pageHeight, 'unit': unit, 'k': k };
  return info;
};

/* Pagebreak plugin:

    Adds page-break functionality to the html2pdf library. Page-breaks can be
    enabled by CSS styles, set on individual elements using selectors, or
    avoided from breaking inside all elements.

    Options on the `opt.pagebreak` object:

    mode:   String or array of strings: 'avoid-all', 'css', and/or 'legacy'
            Default: ['css', 'legacy']

    before: String or array of CSS selectors for which to add page-breaks
            before each element. Can be a specific element with an ID
            ('#myID'), all elements of a type (e.g. 'img'), all of a class
            ('.myClass'), or even '*' to match every element.

    after:  Like 'before', but adds a page-break immediately after the element.

    avoid:  Like 'before', but avoids page-breaks on these elements. You can
            enable this feature on every element using the 'avoid-all' mode.
*/

// Refs to original functions.
var orig = {
  toContainer: Worker.prototype.toContainer
};

// Add pagebreak default options to the Worker template.
Worker.template.opt.pagebreak = {
  mode: ['css', 'legacy'],
  before: [],
  after: [],
  avoid: []
};

Worker.prototype.toContainer = function toContainer() {
  return orig.toContainer.call(this).then(function toContainer_pagebreak() {
    // Setup root element and inner page height.
    var root = this.prop.container;
    var pxPageHeight = this.prop.pageSize.inner.px.height;

    // Check all requested modes.
    var modeSrc = [].concat(this.opt.pagebreak.mode);
    var mode = {
      avoidAll: modeSrc.indexOf('avoid-all') !== -1,
      css: modeSrc.indexOf('css') !== -1,
      legacy: modeSrc.indexOf('legacy') !== -1
    };

    // Get arrays of all explicitly requested elements.
    var select = {};
    var self = this;
    ['before', 'after', 'avoid'].forEach(function (key) {
      var all = mode.avoidAll && key === 'avoid';
      select[key] = all ? [] : [].concat(self.opt.pagebreak[key] || []);
      if (select[key].length > 0) {
        select[key] = Array.prototype.slice.call(root.querySelectorAll(select[key].join(', ')));
      }
    });

    // Get all legacy page-break elements.
    var legacyEls = root.querySelectorAll('.html2pdf__page-break');
    legacyEls = Array.prototype.slice.call(legacyEls);

    // Loop through all elements.
    var els = root.querySelectorAll('*');
    Array.prototype.forEach.call(els, function pagebreak_loop(el) {
      // Setup pagebreak rules based on legacy and avoidAll modes.
      var rules = {
        before: false,
        after: mode.legacy && legacyEls.indexOf(el) !== -1,
        avoid: mode.avoidAll
      };

      // Add rules for css mode.
      if (mode.css) {
        // TODO: Check if this is valid with iFrames.
        var style = window.getComputedStyle(el);
        // TODO: Handle 'left' and 'right' correctly.
        // TODO: Add support for 'avoid' on breakBefore/After.
        var breakOpt = ['always', 'page', 'left', 'right'];
        var avoidOpt = ['avoid', 'avoid-page'];
        rules = {
          before: rules.before || breakOpt.indexOf(style.breakBefore || style.pageBreakBefore) !== -1,
          after: rules.after || breakOpt.indexOf(style.breakAfter || style.pageBreakAfter) !== -1,
          avoid: rules.avoid || avoidOpt.indexOf(style.breakInside || style.pageBreakInside) !== -1
        };
      }

      // Add rules for explicit requests.
      Object.keys(rules).forEach(function (key) {
        rules[key] = rules[key] || select[key].indexOf(el) !== -1;
      });

      // Get element position on the screen.
      // TODO: Subtract the top of the container from clientRect.top/bottom?
      var clientRect = el.getBoundingClientRect();

      // Avoid: Check if a break happens mid-element.
      if (rules.avoid && !rules.before) {
        var startPage = Math.floor(clientRect.top / pxPageHeight);
        var endPage = Math.floor(clientRect.bottom / pxPageHeight);
        var nPages = Math.abs(clientRect.bottom - clientRect.top) / pxPageHeight;

        // Turn on rules.before if the el is broken and is at most one page long.
        if (endPage !== startPage && nPages <= 1) {
          rules.before = true;
        }
      }

      // Before: Create a padding div to push the element to the next page.
      if (rules.before) {
        var pad = createElement('div', { style: {
            display: 'block',
            height: pxPageHeight - clientRect.top % pxPageHeight + 'px'
          } });
        el.parentNode.insertBefore(pad, el);
      }

      // After: Create a padding div to fill the remaining page.
      if (rules.after) {
        var pad = createElement('div', { style: {
            display: 'block',
            height: pxPageHeight - clientRect.bottom % pxPageHeight + 'px'
          } });
        el.parentNode.insertBefore(pad, el.nextSibling);
      }
    });
  });
};

// Add hyperlink functionality to the PDF creation.

// Main link array, and refs to original functions.
var linkInfo = [];
var orig$1 = {
  toContainer: Worker.prototype.toContainer,
  toPdf: Worker.prototype.toPdf
};

Worker.prototype.toContainer = function toContainer() {
  return orig$1.toContainer.call(this).then(function toContainer_hyperlink() {
    // Retrieve hyperlink info if the option is enabled.
    if (this.opt.enableLinks) {
      // Find all anchor tags and get the container's bounds for reference.
      var container = this.prop.container;
      var links = container.querySelectorAll('a');
      var containerRect = unitConvert(container.getBoundingClientRect(), this.prop.pageSize.k);
      linkInfo = [];

      // Loop through each anchor tag.
      Array.prototype.forEach.call(links, function (link) {
        // Treat each client rect as a separate link (for text-wrapping).
        var clientRects = link.getClientRects();
        for (var i = 0; i < clientRects.length; i++) {
          var clientRect = unitConvert(clientRects[i], this.prop.pageSize.k);
          clientRect.left -= containerRect.left;
          clientRect.top -= containerRect.top;

          var page = Math.floor(clientRect.top / this.prop.pageSize.inner.height) + 1;
          var top = this.opt.margin[0] + clientRect.top % this.prop.pageSize.inner.height;
          var left = this.opt.margin[1] + clientRect.left;

          linkInfo.push({ page: page, top: top, left: left, clientRect: clientRect, link: link });
        }
      }, this);
    }
  });
};

Worker.prototype.toPdf = function toPdf() {
  return orig$1.toPdf.call(this).then(function toPdf_hyperlink() {
    // Add hyperlinks if the option is enabled.
    if (this.opt.enableLinks) {
      // Attach each anchor tag based on info from toContainer().
      linkInfo.forEach(function (l) {
        this.prop.pdf.setPage(l.page);
        this.prop.pdf.link(l.left, l.top, l.clientRect.width, l.clientRect.height, { url: l.link.href });
      }, this);

      // Reset the active page of the PDF to the final page.
      var nPages = this.prop.pdf.internal.getNumberOfPages();
      this.prop.pdf.setPage(nPages);
    }
  });
};

/**
 * Generate a PDF from an HTML element or string using html2canvas and jsPDF.
 *
 * @param {Element|string} source The source element or HTML string.
 * @param {Object=} opt An object of optional settings: 'margin', 'filename',
 *    'image' ('type' and 'quality'), and 'html2canvas' / 'jspdf', which are
 *    sent as settings to their corresponding functions.
 */
var html2pdf = function html2pdf(src, opt) {
  // Create a new worker with the given options.
  var worker = new html2pdf.Worker(opt);

  if (src) {
    // If src is specified, perform the traditional 'simple' operation.
    return worker.from(src).save();
  } else {
    // Otherwise, return the worker for new Promise-based operation.
    return worker;
  }
};
html2pdf.Worker = Worker;

return html2pdf;

})));


/***/ }),

/***/ "./node_modules/jspdf/dist/jspdf.min.js":
/*!**********************************************!*\
  !*** ./node_modules/jspdf/dist/jspdf.min.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");
var __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_RESULT__;!function(t,e){ true?module.exports=e():0}(this,function(){"use strict";var t,y,e,I,i,o,a,h,C,T,d,p,F,n,r,s,c,P,E,q,g,m,w,l,v,b,x,S,u,k,_,f,A,O,B,R,j,D,M,U,N,z,L,H,W,G,V,Y,X,J,K,Q,Z,vt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$=function(pt){var gt="1.3",mt={a0:[2383.94,3370.39],a1:[1683.78,2383.94],a2:[1190.55,1683.78],a3:[841.89,1190.55],a4:[595.28,841.89],a5:[419.53,595.28],a6:[297.64,419.53],a7:[209.76,297.64],a8:[147.4,209.76],a9:[104.88,147.4],a10:[73.7,104.88],b0:[2834.65,4008.19],b1:[2004.09,2834.65],b2:[1417.32,2004.09],b3:[1000.63,1417.32],b4:[708.66,1000.63],b5:[498.9,708.66],b6:[354.33,498.9],b7:[249.45,354.33],b8:[175.75,249.45],b9:[124.72,175.75],b10:[87.87,124.72],c0:[2599.37,3676.54],c1:[1836.85,2599.37],c2:[1298.27,1836.85],c3:[918.43,1298.27],c4:[649.13,918.43],c5:[459.21,649.13],c6:[323.15,459.21],c7:[229.61,323.15],c8:[161.57,229.61],c9:[113.39,161.57],c10:[79.37,113.39],dl:[311.81,623.62],letter:[612,792],"government-letter":[576,756],legal:[612,1008],"junior-legal":[576,360],ledger:[1224,792],tabloid:[792,1224],"credit-card":[153,243]};function wt(o){var a={};this.subscribe=function(t,e,n){if("function"!=typeof e)return!1;a.hasOwnProperty(t)||(a[t]={});var r=Math.random().toString(35);return a[t][r]=[e,!!n],r},this.unsubscribe=function(t){for(var e in a)if(a[e][t])return delete a[e][t],!0;return!1},this.publish=function(t){if(a.hasOwnProperty(t)){var e=Array.prototype.slice.call(arguments,1),n=[];for(var r in a[t]){var i=a[t][r];try{i[0].apply(o,e)}catch(t){pt.console&&console.error("jsPDF PubSub Error",t.message,t)}i[1]&&n.push(r)}n.length&&n.forEach(this.unsubscribe)}}}function yt(t,e,n,r){var i={};"object"===(void 0===t?"undefined":vt(t))&&(t=(i=t).orientation,e=i.unit||e,n=i.format||n,r=i.compress||i.compressPdf||r),e=e||"mm",n=n||"a4",t=(""+(t||"P")).toLowerCase();(""+n).toLowerCase();var K,w,y,o,u,v,a,s,h,c,l,f=!!r&&"function"==typeof Uint8Array,Q=i.textColor||"0 g",d=i.drawColor||"0 G",Z=i.fontSize||16,$=i.charSpace||0,tt=i.R2L||!1,et=i.lineHeight||1.15,p=i.lineWidth||.200025,g="00000000000000000000000000000000",m=2,b=!1,x=[],nt={},S={},k=0,_=[],A=[],I=[],C=[],T=[],F=0,P=0,E=0,q={title:"",subject:"",author:"",keywords:"",creator:""},O={},rt=new wt(O),B=i.hotfixes||[],R=function(t){var e,n=t.ch1,r=t.ch2,i=t.ch3,o=t.ch4,a=(t.precision,"draw"===t.pdfColorType?["G","RG","K"]:["g","rg","k"]);if("string"==typeof n&&"#"!==n.charAt(0)){var s=new RGBColor(n);s.ok&&(n=s.toHex())}if("string"==typeof n&&/^#[0-9A-Fa-f]{3}$/.test(n)&&(n="#"+n[1]+n[1]+n[2]+n[2]+n[3]+n[3]),"string"==typeof n&&/^#[0-9A-Fa-f]{6}$/.test(n)){var h=parseInt(n.substr(1),16);n=h>>16&255,r=h>>8&255,i=255&h}if(void 0===r||void 0===o&&n===r&&r===i)if("string"==typeof n)e=n+" "+a[0];else switch(t.precision){case 2:e=N(n/255)+" "+a[0];break;case 3:default:e=z(n/255)+" "+a[0]}else if(void 0===o||"object"===(void 0===o?"undefined":vt(o))){if("string"==typeof n)e=[n,r,i,a[1]].join(" ");else switch(t.precision){case 2:e=[N(n/255),N(r/255),N(i/255),a[1]].join(" ");break;default:case 3:e=[z(n/255),z(r/255),z(i/255),a[1]].join(" ")}o&&0===o.a&&(e=["255","255","255",a[1]].join(" "))}else if("string"==typeof n)e=[n,r,i,o,a[2]].join(" ");else switch(t.precision){case 2:e=[N(n),N(r),N(i),N(o),a[2]].join(" ");break;case 3:default:e=[z(n),z(r),z(i),z(o),a[2]].join(" ")}return e},j=function(t){var e=function(t){return("0"+parseInt(t)).slice(-2)},n=t.getTimezoneOffset(),r=n<0?"+":"-",i=Math.floor(Math.abs(n/60)),o=Math.abs(n%60),a=[r,e(i),"'",e(o),"'"].join("");return["D:",t.getFullYear(),e(t.getMonth()+1),e(t.getDate()),e(t.getHours()),e(t.getMinutes()),e(t.getSeconds()),a].join("")},D=function(t){var e;return void 0===(void 0===t?"undefined":vt(t))&&(t=new Date),e="object"===(void 0===t?"undefined":vt(t))&&"[object Date]"===Object.prototype.toString.call(t)?j(t):/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|\-0[0-9]|\-1[0-1])\'(0[0-9]|[1-5][0-9])\'?$/.test(t)?t:j(new Date),c=e},M=function(t){var e=c;return"jsDate"===t&&(e=function(t){var e=parseInt(t.substr(2,4),10),n=parseInt(t.substr(6,2),10)-1,r=parseInt(t.substr(8,2),10),i=parseInt(t.substr(10,2),10),o=parseInt(t.substr(12,2),10),a=parseInt(t.substr(14,2),10);parseInt(t.substr(16,2),10),parseInt(t.substr(20,2),10);return new Date(e,n,r,i,o,a,0)}(c)),e},U=function(t){return t=t||"12345678901234567890123456789012".split("").map(function(){return"ABCDEF0123456789".charAt(Math.floor(16*Math.random()))}).join(""),g=t},N=function(t){return t.toFixed(2)},z=function(t){return t.toFixed(3)},it=function(t){t="string"==typeof t?t:t.toString(),b?_[o].push(t):(E+=t.length+1,C.push(t))},L=function(){return x[++m]=E,it(m+" 0 obj"),m},H=function(t){it("stream"),it(t),it("endstream")},W=function(){for(var t in it("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"),it("/Font <<"),nt)nt.hasOwnProperty(t)&&it("/"+t+" "+nt[t].objectNumber+" 0 R");it(">>"),it("/XObject <<"),rt.publish("putXobjectDict"),it(">>")},G=function(){!function(){for(var t in nt)nt.hasOwnProperty(t)&&(e=nt[t],rt.publish("putFont",{font:e,out:it,newObject:L}),!0!==e.isAlreadyPutted&&(e.objectNumber=L(),it("<<"),it("/Type /Font"),it("/BaseFont /"+e.postScriptName),it("/Subtype /Type1"),"string"==typeof e.encoding&&it("/Encoding /"+e.encoding),it("/FirstChar 32"),it("/LastChar 255"),it(">>"),it("endobj")));var e}(),rt.publish("putResources"),x[2]=E,it("2 0 obj"),it("<<"),W(),it(">>"),it("endobj"),rt.publish("postPutResources")},V=function(t,e,n){S.hasOwnProperty(e)||(S[e]={}),S[e][n]=t},Y=function(t,e,n,r){var i="F"+(Object.keys(nt).length+1).toString(10),o=nt[i]={id:i,postScriptName:t,fontName:e,fontStyle:n,encoding:r,metadata:{}};return V(i,e,n),rt.publish("addFont",o),i},ot=function(t,e){return function(t,e){var n,r,i,o,a,s,h,c,l;if(i=(e=e||{}).sourceEncoding||"Unicode",a=e.outputEncoding,(e.autoencode||a)&&nt[K].metadata&&nt[K].metadata[i]&&nt[K].metadata[i].encoding&&(o=nt[K].metadata[i].encoding,!a&&nt[K].encoding&&(a=nt[K].encoding),!a&&o.codePages&&(a=o.codePages[0]),"string"==typeof a&&(a=o[a]),a)){for(h=!1,s=[],n=0,r=t.length;n<r;n++)(c=a[t.charCodeAt(n)])?s.push(String.fromCharCode(c)):s.push(t[n]),s[n].charCodeAt(0)>>8&&(h=!0);t=s.join("")}for(n=t.length;void 0===h&&0!==n;)t.charCodeAt(n-1)>>8&&(h=!0),n--;if(!h)return t;for(s=e.noBOM?[]:[254,255],n=0,r=t.length;n<r;n++){if((l=(c=t.charCodeAt(n))>>8)>>8)throw new Error("Character at position "+n+" of string '"+t+"' exceeds 16bits. Cannot be encoded into UCS-2 BE");s.push(l),s.push(c-(l<<8))}return String.fromCharCode.apply(void 0,s)}(t,e).replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")},X=function(){(function(t,e){var n="string"==typeof e&&e.toLowerCase();if("string"==typeof t){var r=t.toLowerCase();mt.hasOwnProperty(r)&&(t=mt[r][0]/w,e=mt[r][1]/w)}if(Array.isArray(t)&&(e=t[1],t=t[0]),n){switch(n.substr(0,1)){case"l":t<e&&(n="s");break;case"p":e<t&&(n="s")}"s"===n&&(y=t,t=e,e=y)}b=!0,_[++k]=[],I[k]={width:Number(t)||u,height:Number(e)||v},A[k]={},J(k)}).apply(this,arguments),it(N(p*w)+" w"),it(d),0!==F&&it(F+" J"),0!==P&&it(P+" j"),rt.publish("addPage",{pageNumber:k})},J=function(t){0<t&&t<=k&&(u=I[o=t].width,v=I[t].height)},at=function(t,e,n){var r,i=void 0;return n=n||{},t=void 0!==t?t:nt[K].fontName,e=void 0!==e?e:nt[K].fontStyle,r=t.toLowerCase(),void 0!==S[r]&&void 0!==S[r][e]?i=S[r][e]:void 0!==S[t]&&void 0!==S[t][e]?i=S[t][e]:!1===n.disableWarning&&console.warn("Unable to look up font label for font '"+t+"', '"+e+"'. Refer to getFontList() for available fonts."),i||n.noFallback||null==(i=S.times[e])&&(i=S.times.normal),i},st=function(){b=!1,m=2,E=0,C=[],x=[],T=[],rt.publish("buildDocument"),it("%PDF-"+gt),it("%ºß¬à"),function(){var t,e,n,r,i,o,a,s,h,c=[];for(a=pt.adler32cs||yt.API.adler32cs,f&&void 0===a&&(f=!1),t=1;t<=k;t++){if(c.push(L()),s=(u=I[t].width)*w,h=(v=I[t].height)*w,it("<</Type /Page"),it("/Parent 1 0 R"),it("/Resources 2 0 R"),it("/MediaBox [0 0 "+N(s)+" "+N(h)+"]"),rt.publish("putPage",{pageNumber:t,page:_[t]}),it("/Contents "+(m+1)+" 0 R"),it(">>"),it("endobj"),e=_[t].join("\n"),L(),f){for(n=[],r=e.length;r--;)n[r]=e.charCodeAt(r);o=a.from(e),(i=new Deflater(6)).append(new Uint8Array(n)),e=i.flush(),(n=new Uint8Array(e.length+6)).set(new Uint8Array([120,156])),n.set(e,2),n.set(new Uint8Array([255&o,o>>8&255,o>>16&255,o>>24&255]),e.length+2),e=String.fromCharCode.apply(null,n),it("<</Length "+e.length+" /Filter [/FlateDecode]>>")}else it("<</Length "+e.length+">>");H(e),it("endobj")}x[1]=E,it("1 0 obj"),it("<</Type /Pages");var l="/Kids [";for(r=0;r<k;r++)l+=c[r]+" 0 R ";it(l+"]"),it("/Count "+k),it(">>"),it("endobj"),rt.publish("postPutPages")}(),function(){rt.publish("putAdditionalObjects");for(var t=0;t<T.length;t++){var e=T[t];x[e.objId]=E,it(e.objId+" 0 obj"),it(e.content),it("endobj")}m+=T.length,rt.publish("postPutAdditionalObjects")}(),G(),L(),it("<<"),function(){for(var t in it("/Producer (jsPDF "+yt.version+")"),q)q.hasOwnProperty(t)&&q[t]&&it("/"+t.substr(0,1).toUpperCase()+t.substr(1)+" ("+ot(q[t])+")");it("/CreationDate ("+c+")")}(),it(">>"),it("endobj"),L(),it("<<"),function(){switch(it("/Type /Catalog"),it("/Pages 1 0 R"),s||(s="fullwidth"),s){case"fullwidth":it("/OpenAction [3 0 R /FitH null]");break;case"fullheight":it("/OpenAction [3 0 R /FitV null]");break;case"fullpage":it("/OpenAction [3 0 R /Fit]");break;case"original":it("/OpenAction [3 0 R /XYZ null null 1]");break;default:var t=""+s;"%"===t.substr(t.length-1)&&(s=parseInt(s)/100),"number"==typeof s&&it("/OpenAction [3 0 R /XYZ null null "+N(s)+"]")}switch(h||(h="continuous"),h){case"continuous":it("/PageLayout /OneColumn");break;case"single":it("/PageLayout /SinglePage");break;case"two":case"twoleft":it("/PageLayout /TwoColumnLeft");break;case"tworight":it("/PageLayout /TwoColumnRight")}a&&it("/PageMode /"+a),rt.publish("putCatalog")}(),it(">>"),it("endobj");var t,e=E,n="0000000000";for(it("xref"),it("0 "+(m+1)),it(n+" 65535 f "),t=1;t<=m;t++){var r=x[t];it("function"==typeof r?(n+x[t]()).slice(-10)+" 00000 n ":(n+x[t]).slice(-10)+" 00000 n ")}return it("trailer"),it("<<"),it("/Size "+(m+1)),it("/Root "+m+" 0 R"),it("/Info "+(m-1)+" 0 R"),it("/ID [ <"+g+"> <"+g+"> ]"),it(">>"),it("startxref"),it(""+e),it("%%EOF"),b=!0,C.join("\n")},ht=function(t){var e="S";return"F"===t?e="f":"FD"===t||"DF"===t?e="B":"f"!==t&&"f*"!==t&&"B"!==t&&"B*"!==t||(e=t),e},ct=function(){for(var t=st(),e=t.length,n=new ArrayBuffer(e),r=new Uint8Array(n);e--;)r[e]=t.charCodeAt(e);return n},lt=function(){return new Blob([ct()],{type:"application/pdf"})},ut=((l=function(t,e){var n="dataur"===(""+t).substr(0,6)?"data:application/pdf;base64,"+btoa(st()):0;switch(t){case void 0:return st();case"save":if("object"===("undefined"==typeof navigator?"undefined":vt(navigator))&&navigator.getUserMedia&&(void 0===pt.URL||void 0===pt.URL.createObjectURL))return O.output("dataurlnewwindow");bt(lt(),e),"function"==typeof bt.unload&&pt.setTimeout&&setTimeout(bt.unload,911);break;case"arraybuffer":return ct();case"blob":return lt();case"bloburi":case"bloburl":return pt.URL&&pt.URL.createObjectURL(lt())||void 0;case"datauristring":case"dataurlstring":return n;case"dataurlnewwindow":var r=pt.open(n);if(r||"undefined"==typeof safari)return r;case"datauri":case"dataurl":return pt.document.location.href=n;default:throw new Error('Output type "'+t+'" is not supported.')}}).foo=function(){try{return l.apply(this,arguments)}catch(t){var e=t.stack||"";~e.indexOf(" at ")&&(e=e.split(" at ")[1]);var n="Error in function "+e.split("\n")[0].split("<")[0]+": "+t.message;if(!pt.console)throw new Error(n);pt.console.error(n,t),pt.alert&&alert(n)}},(l.foo.bar=l).foo),ft=function(t){return!0===Array.isArray(B)&&-1<B.indexOf(t)};switch(e){case"pt":w=1;break;case"mm":w=72/25.4;break;case"cm":w=72/2.54;break;case"in":w=72;break;case"px":w=1==ft("px_scaling")?.75:96/72;break;case"pc":case"em":w=12;break;case"ex":w=6;break;default:throw"Invalid unit: "+e}for(var dt in D(),U(),O.internal={pdfEscape:ot,getStyle:ht,getFont:function(){return nt[at.apply(O,arguments)]},getFontSize:function(){return Z},getCharSpace:function(){return $},getTextColor:function(){var t=Q.split(" ");if(2===t.length&&"g"===t[1]){var e=parseFloat(t[0]);t=[e,e,e,"r"]}for(var n="#",r=0;r<3;r++)n+=("0"+Math.floor(255*parseFloat(t[r])).toString(16)).slice(-2);return n},getLineHeight:function(){return Z*et},write:function(t){it(1===arguments.length?t:Array.prototype.join.call(arguments," "))},getCoordinateString:function(t){return N(t*w)},getVerticalCoordinateString:function(t){return N((v-t)*w)},collections:{},newObject:L,newAdditionalObject:function(){var t=2*_.length+1,e={objId:t+=T.length,content:""};return T.push(e),e},newObjectDeferred:function(){return x[++m]=function(){return E},m},newObjectDeferredBegin:function(t){x[t]=E},putStream:H,events:rt,scaleFactor:w,pageSize:{getWidth:function(){return u},getHeight:function(){return v}},output:function(t,e){return ut(t,e)},getNumberOfPages:function(){return _.length-1},pages:_,out:it,f2:N,getPageInfo:function(t){return{objId:2*(t-1)+3,pageNumber:t,pageContext:A[t]}},getCurrentPageInfo:function(){return{objId:2*(o-1)+3,pageNumber:o,pageContext:A[o]}},getPDFVersion:function(){return gt},hasHotfix:ft},O.addPage=function(){return X.apply(this,arguments),this},O.setPage=function(){return J.apply(this,arguments),this},O.insertPage=function(t){return this.addPage(),this.movePage(o,t),this},O.movePage=function(t,e){if(e<t){for(var n=_[t],r=I[t],i=A[t],o=t;e<o;o--)_[o]=_[o-1],I[o]=I[o-1],A[o]=A[o-1];_[e]=n,I[e]=r,A[e]=i,this.setPage(e)}else if(t<e){for(n=_[t],r=I[t],i=A[t],o=t;o<e;o++)_[o]=_[o+1],I[o]=I[o+1],A[o]=A[o+1];_[e]=n,I[e]=r,A[e]=i,this.setPage(e)}return this},O.deletePage=function(){return function(t){0<t&&t<=k&&(_.splice(t,1),I.splice(t,1),--k<o&&(o=k),this.setPage(o))}.apply(this,arguments),this},O.setCreationDate=function(t){return D(t),this},O.getCreationDate=function(t){return M(t)},O.setFileId=function(t){return U(t),this},O.getFileId=function(){return g},O.setDisplayMode=function(t,e,n){if(s=t,h=e,-1==[void 0,null,"UseNone","UseOutlines","UseThumbs","FullScreen"].indexOf(a=n))throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "'+n+'" is not recognized.');return this},O.text=function(t,e,n,i){var r,o,a="",s=et,h=this;function c(t){for(var e,n=t.concat(),r=[],i=n.length;i--;)"string"==typeof(e=n.shift())?r.push(e):"[object Array]"===Object.prototype.toString.call(t)&&1===e.length?r.push(e[0]):r.push([e[0],e[1],e[2]]);return r}function l(t,e){var n;if("string"==typeof t)n=e(t)[0];else if("[object Array]"===Object.prototype.toString.call(t)){for(var r,i,o=t.concat(),a=[],s=o.length;s--;)"string"==typeof(r=o.shift())?a.push(e(r)[0]):"[object Array]"===Object.prototype.toString.call(r)&&"string"===r[0]&&(i=e(r[0],r[1],r[2]),a.push([i[0],i[1],i[2]]));n=a}return n}"number"==typeof t&&(o=n,n=e,e=t,t=o);var u=i,f=arguments[4],d=arguments[5];"object"===(void 0===u?"undefined":vt(u))&&null!==u||("string"==typeof f&&(d=f,f=null),"string"==typeof u&&(d=u,u=null),"number"==typeof u&&(f=u,u=null),i={flags:u,angle:f,align:d});var p=!1,g=!0;if("string"==typeof t)p=!0;else if("[object Array]"===Object.prototype.toString.call(t)){for(var m,w=t.concat(),y=[],v=w.length;v--;)("string"!=typeof(m=w.shift())||"[object Array]"===Object.prototype.toString.call(m)&&"string"!=typeof m[0])&&(g=!1);p=g}if(!1===p)throw new Error('Type of text must be string or Array. "'+t+'" is not recognized.');var b=nt[K].encoding;"WinAnsiEncoding"!==b&&"StandardEncoding"!==b||(t=l(t,function(t,e,n){return[(r=t,r=r.split("\t").join(Array(i.TabLen||9).join(" ")),ot(r,u)),e,n];var r})),"string"==typeof t&&(t=t.match(/[\r?\n]/)?t.split(/\r\n|\r|\n/g):[t]),0<(j=i.maxWidth||0)&&("string"==typeof t?t=h.splitTextToSize(t,j):"[object Array]"===Object.prototype.toString.call(t)&&(t=h.splitTextToSize(t.join(" "),j)));var x={text:t,x:e,y:n,options:i,mutex:{pdfEscape:ot,activeFontKey:K,fonts:nt,activeFontSize:Z}};rt.publish("preProcessText",x),t=x.text;f=(i=x.options).angle;var S=h.internal.scaleFactor,k=(h.internal.pageSize.getHeight(),[]);if(f){f*=Math.PI/180;var _=Math.cos(f),A=Math.sin(f),I=function(t){return t.toFixed(2)};k=[I(_),I(A),I(-1*A),I(_)]}void 0!==(R=i.charSpace)&&(a+=R+" Tc\n");i.lang;var C=-1,T=i.renderingMode||i.stroke,F=h.internal.getCurrentPageInfo().pageContext;switch(T){case 0:case!1:case"fill":C=0;break;case 1:case!0:case"stroke":C=1;break;case 2:case"fillThenStroke":C=2;break;case 3:case"invisible":C=3;break;case 4:case"fillAndAddForClipping":C=4;break;case 5:case"strokeAndAddPathForClipping":C=5;break;case 6:case"fillThenStrokeAndAddToPathForClipping":C=6;break;case 7:case"addToPathForClipping":C=7}var P=F.usedRenderingMode||-1;-1!==C?a+=C+" Tr\n":-1!==P&&(a+="0 Tr\n"),-1!==C&&(F.usedRenderingMode=C);d=i.align||"left";var E=Z*s,q=h.internal.pageSize.getHeight(),O=h.internal.pageSize.getWidth(),B=(S=h.internal.scaleFactor,nt[K]),R=i.charSpace||$,j=i.maxWidth||0,D=(u={},[]);if("[object Array]"===Object.prototype.toString.call(t)){var M,U;y=c(t);"left"!==d&&(U=y.map(function(t){return h.getStringUnitWidth(t,{font:B,charSpace:R,fontSize:Z})*Z/S}));var N,z=Math.max.apply(Math,U),L=0;if("right"===d){e-=U[0],t=[];var H=0;for(v=y.length;H<v;H++)z-U[H],0===H?(N=e*S,M=(q-n)*S):(N=(L-U[H])*S,M=-E),t.push([y[H],N,M]),L=U[H]}else if("center"===d){e-=U[0]/2,t=[];for(H=0,v=y.length;H<v;H++)(z-U[H])/2,0===H?(N=e*S,M=(q-n)*S):(N=(L-U[H])/2*S,M=-E),t.push([y[H],N,M]),L=U[H]}else if("left"===d){t=[];for(H=0,v=y.length;H<v;H++)M=0===H?(q-n)*S:-E,N=0===H?e*S:0,t.push(y[H])}else{if("justify"!==d)throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');t=[];for(j=0!==j?j:O,H=0,v=y.length;H<v;H++)M=0===H?(q-n)*S:-E,N=0===H?e*S:0,H<v-1&&D.push(((j-U[H])/(y[H].split(" ").length-1)*S).toFixed(2)),t.push([y[H],N,M])}}!0===("boolean"==typeof i.R2L?i.R2L:tt)&&(t=l(t,function(t,e,n){return[t.split("").reverse().join(""),e,n]}));x={text:t,x:e,y:n,options:i,mutex:{pdfEscape:ot,activeFontKey:K,fonts:nt,activeFontSize:Z}};rt.publish("postProcessText",x),t=x.text,r=x.mutex.isHex;y=c(t);t=[];var W,G,V,Y=0,X=(v=y.length,"");for(H=0;H<v;H++)X="","[object Array]"!==Object.prototype.toString.call(y[H])?(W=parseFloat(e*S).toFixed(2),G=parseFloat((q-n)*S).toFixed(2),V=(r?"<":"(")+y[H]+(r?">":")")):"[object Array]"===Object.prototype.toString.call(y[H])&&(W=parseFloat(y[H][1]).toFixed(2),G=parseFloat(y[H][2]).toFixed(2),V=(r?"<":"(")+y[H][0]+(r?">":")"),Y=1),void 0!==D&&void 0!==D[H]&&(X=D[H]+" Tw\n"),0!==k.length&&0===H?t.push(X+k.join(" ")+" "+W+" "+G+" Tm\n"+V):1===Y||0===Y&&0===H?t.push(X+W+" "+G+" Td\n"+V):t.push(X+V);t=0===Y?t.join(" Tj\nT* "):t.join(" Tj\n"),t+=" Tj\n";var J="BT\n/"+K+" "+Z+" Tf\n"+(Z*s).toFixed(2)+" TL\n"+Q+"\n";return J+=a,J+=t,it(J+="ET"),h},O.lstext=function(t,e,n,r){console.warn("jsPDF.lstext is deprecated");for(var i=0,o=t.length;i<o;i++,e+=r)this.text(t[i],e,n);return this},O.line=function(t,e,n,r){return this.lines([[n-t,r-e]],t,e)},O.clip=function(){it("W"),it("S")},O.clip_fixed=function(t){it("evenodd"===t?"W*":"W"),it("n")},O.lines=function(t,e,n,r,i,o){var a,s,h,c,l,u,f,d,p,g,m;for("number"==typeof t&&(y=n,n=e,e=t,t=y),r=r||[1,1],it(z(e*w)+" "+z((v-n)*w)+" m "),a=r[0],s=r[1],c=t.length,g=e,m=n,h=0;h<c;h++)2===(l=t[h]).length?(g=l[0]*a+g,m=l[1]*s+m,it(z(g*w)+" "+z((v-m)*w)+" l")):(u=l[0]*a+g,f=l[1]*s+m,d=l[2]*a+g,p=l[3]*s+m,g=l[4]*a+g,m=l[5]*s+m,it(z(u*w)+" "+z((v-f)*w)+" "+z(d*w)+" "+z((v-p)*w)+" "+z(g*w)+" "+z((v-m)*w)+" c"));return o&&it(" h"),null!==i&&it(ht(i)),this},O.rect=function(t,e,n,r,i){ht(i);return it([N(t*w),N((v-e)*w),N(n*w),N(-r*w),"re"].join(" ")),null!==i&&it(ht(i)),this},O.triangle=function(t,e,n,r,i,o,a){return this.lines([[n-t,r-e],[i-n,o-r],[t-i,e-o]],t,e,[1,1],a,!0),this},O.roundedRect=function(t,e,n,r,i,o,a){var s=4/3*(Math.SQRT2-1);return this.lines([[n-2*i,0],[i*s,0,i,o-o*s,i,o],[0,r-2*o],[0,o*s,-i*s,o,-i,o],[2*i-n,0],[-i*s,0,-i,-o*s,-i,-o],[0,2*o-r],[0,-o*s,i*s,-o,i,-o]],t+i,e,[1,1],a),this},O.ellipse=function(t,e,n,r,i){var o=4/3*(Math.SQRT2-1)*n,a=4/3*(Math.SQRT2-1)*r;return it([N((t+n)*w),N((v-e)*w),"m",N((t+n)*w),N((v-(e-a))*w),N((t+o)*w),N((v-(e-r))*w),N(t*w),N((v-(e-r))*w),"c"].join(" ")),it([N((t-o)*w),N((v-(e-r))*w),N((t-n)*w),N((v-(e-a))*w),N((t-n)*w),N((v-e)*w),"c"].join(" ")),it([N((t-n)*w),N((v-(e+a))*w),N((t-o)*w),N((v-(e+r))*w),N(t*w),N((v-(e+r))*w),"c"].join(" ")),it([N((t+o)*w),N((v-(e+r))*w),N((t+n)*w),N((v-(e+a))*w),N((t+n)*w),N((v-e)*w),"c"].join(" ")),null!==i&&it(ht(i)),this},O.circle=function(t,e,n,r){return this.ellipse(t,e,n,n,r)},O.setProperties=function(t){for(var e in q)q.hasOwnProperty(e)&&t[e]&&(q[e]=t[e]);return this},O.setFontSize=function(t){return Z=t,this},O.setFont=function(t,e){return K=at(t,e),this},O.setFontStyle=O.setFontType=function(t){return K=at(void 0,t),this},O.getFontList=function(){var t,e,n,r={};for(t in S)if(S.hasOwnProperty(t))for(e in r[t]=n=[],S[t])S[t].hasOwnProperty(e)&&n.push(e);return r},O.addFont=function(t,e,n,r){Y(t,e,n,r=r||"Identity-H")},O.setLineWidth=function(t){return it((t*w).toFixed(2)+" w"),this},O.setDrawColor=function(t,e,n,r){return it(R({ch1:t,ch2:e,ch3:n,ch4:r,pdfColorType:"draw",precision:2})),this},O.setFillColor=function(t,e,n,r){return it(R({ch1:t,ch2:e,ch3:n,ch4:r,pdfColorType:"fill",precision:2})),this},O.setTextColor=function(t,e,n,r){return Q=R({ch1:t,ch2:e,ch3:n,ch4:r,pdfColorType:"text",precision:3}),this},O.setCharSpace=function(t){return $=t,this},O.setR2L=function(t){return tt=t,this},O.CapJoinStyles={0:0,butt:0,but:0,miter:0,1:1,round:1,rounded:1,circle:1,2:2,projecting:2,project:2,square:2,bevel:2},O.setLineCap=function(t){var e=this.CapJoinStyles[t];if(void 0===e)throw new Error("Line cap style of '"+t+"' is not recognized. See or extend .CapJoinStyles property for valid styles");return it((F=e)+" J"),this},O.setLineJoin=function(t){var e=this.CapJoinStyles[t];if(void 0===e)throw new Error("Line join style of '"+t+"' is not recognized. See or extend .CapJoinStyles property for valid styles");return it((P=e)+" j"),this},O.output=ut,O.save=function(t){O.output("save",t)},yt.API)yt.API.hasOwnProperty(dt)&&("events"===dt&&yt.API.events.length?function(t,e){var n,r,i;for(i=e.length-1;-1!==i;i--)n=e[i][0],r=e[i][1],t.subscribe.apply(t,[n].concat("function"==typeof r?[r]:r))}(rt,yt.API.events):O[dt]=yt.API[dt]);return function(){for(var t="helvetica",e="times",n="courier",r="normal",i="bold",o="italic",a="bolditalic",s=[["Helvetica",t,r,"WinAnsiEncoding"],["Helvetica-Bold",t,i,"WinAnsiEncoding"],["Helvetica-Oblique",t,o,"WinAnsiEncoding"],["Helvetica-BoldOblique",t,a,"WinAnsiEncoding"],["Courier",n,r,"WinAnsiEncoding"],["Courier-Bold",n,i,"WinAnsiEncoding"],["Courier-Oblique",n,o,"WinAnsiEncoding"],["Courier-BoldOblique",n,a,"WinAnsiEncoding"],["Times-Roman",e,r,"WinAnsiEncoding"],["Times-Bold",e,i,"WinAnsiEncoding"],["Times-Italic",e,o,"WinAnsiEncoding"],["Times-BoldItalic",e,a,"WinAnsiEncoding"],["ZapfDingbats","zapfdingbats",r,null],["Symbol","symbol",r,null]],h=0,c=s.length;h<c;h++){var l=Y(s[h][0],s[h][1],s[h][2],s[h][3]),u=s[h][0].split("-");V(l,u[0],u[1]||"")}rt.publish("addFonts",{fonts:nt,dictionary:S})}(),K="F1",X(n,t),rt.publish("initialized"),O}return yt.API={events:[]},yt.version="0.0.0", true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return yt}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0,yt}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||"undefined"!=typeof __webpack_require__.g&&__webpack_require__.g||Function('return typeof this === "object" && this.content')()||Function("return this")());
/** @preserve
   * jsPDF - PDF Document creation from JavaScript
   * Version 1.4.1 Built on 2018-06-06T07:49:34.040Z
   *                           CommitID 3233f44044
   *
   * Copyright (c) 2010-2016 James Hall <james@parall.ax>, https://github.com/MrRio/jsPDF
   *               2010 Aaron Spike, https://github.com/acspike
   *               2012 Willow Systems Corporation, willow-systems.com
   *               2012 Pablo Hess, https://github.com/pablohess
   *               2012 Florian Jenett, https://github.com/fjenett
   *               2013 Warren Weckesser, https://github.com/warrenweckesser
   *               2013 Youssef Beddad, https://github.com/lifof
   *               2013 Lee Driscoll, https://github.com/lsdriscoll
   *               2013 Stefan Slonevskiy, https://github.com/stefslon
   *               2013 Jeremy Morel, https://github.com/jmorel
   *               2013 Christoph Hartmann, https://github.com/chris-rock
   *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
   *               2014 James Makes, https://github.com/dollaruw
   *               2014 Diego Casorran, https://github.com/diegocr
   *               2014 Steven Spungin, https://github.com/Flamenco
   *               2014 Kenneth Glassey, https://github.com/Gavvers
   *
   * Licensed under the MIT License
   *
   * Contributor(s):
   *    siefkenj, ahwolf, rickygu, Midnith, saintclair, eaparango,
   *    kim3er, mfo, alnorth, Flamenco
   */
/**
   * jsPDF AcroForm Plugin Copyright (c) 2016 Alexander Weidt,
   * https://github.com/BiggA94
   * 
   * Licensed under the MIT License. http://opensource.org/licenses/mit-license
   */
!function(n,t){var l,a,e=1,r=function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t},s=function(t){return t*(e/1)},h=function(t){var e=new I,n=N.internal.getHeight(t)||0,r=N.internal.getWidth(t)||0;return e.BBox=[0,0,r.toFixed(2),n.toFixed(2)],e},i=function(t,e,n){t=t||0;var r=1;if(r<<=e-1,1==(n=n||1))t=t|r;else t=t&~r;return t},o=function(t,e,n){n=n||1.3,t=t||0;return 1==e.readOnly&&(t=i(t,1)),1==e.required&&(t=i(t,2)),1==e.noExport&&(t=i(t,3)),1==e.multiline&&(t=i(t,13)),e.password&&(t=i(t,14)),e.noToggleToOff&&(t=i(t,15)),e.radio&&(t=i(t,16)),e.pushbutton&&(t=i(t,17)),e.combo&&(t=i(t,18)),e.edit&&(t=i(t,19)),e.sort&&(t=i(t,20)),e.fileSelect&&1.4<=n&&(t=i(t,21)),e.multiSelect&&1.4<=n&&(t=i(t,22)),e.doNotSpellCheck&&1.4<=n&&(t=i(t,23)),1==e.doNotScroll&&1.4<=n&&(t=i(t,24)),e.richText&&1.4<=n&&(t=i(t,25)),t},u=function(t){var e=t[0],n=t[1],r=t[2],i=t[3],o={};return Array.isArray(e)?(e[0]=s(e[0]),e[1]=s(e[1]),e[2]=s(e[2]),e[3]=s(e[3])):(e=s(e),n=s(n),r=s(r),i=s(i)),o.lowerLeft_X=e||0,o.lowerLeft_Y=s(a)-n-i||0,o.upperRight_X=e+r||0,o.upperRight_Y=s(a)-n||0,[o.lowerLeft_X.toFixed(2),o.lowerLeft_Y.toFixed(2),o.upperRight_X.toFixed(2),o.upperRight_Y.toFixed(2)]},f=function(t){if(t.appearanceStreamContent)return t.appearanceStreamContent;if(t.V||t.DV){var e=[],n=t.V||t.DV,r=c(t,n);e.push("/Tx BMC"),e.push("q"),e.push("/F1 "+r.fontSize.toFixed(2)+" Tf"),e.push("1 0 0 1 0 0 Tm"),e.push("BT"),e.push(r.text),e.push("ET"),e.push("Q"),e.push("EMC");var i=new h(t);return i.stream=e.join("\n"),i}},c=function(t,e,i,n){n=n||12,i=i||"helvetica";var r={text:"",fontSize:""},o=(e=")"==(e="("==e.substr(0,1)?e.substr(1):e).substr(e.length-1)?e.substr(0,e.length-1):e).split(" "),a=n,s=N.internal.getHeight(t)||0;s=s<0?-s:s;var h=N.internal.getWidth(t)||0;h=h<0?-h:h;var c=function(t,e,n){if(t+1<o.length){var r=e+" "+o[t+1];return A(r,n+"px",i).width<=h-4}return!1};a++;t:for(;;){e="";var l=A("3",--a+"px",i).height,u=t.multiline?s-a:(s-l)/2,f=-2,d=u+=2,p=0,g=0,m=0;if(a<=0){a=12,e="(...) Tj\n",e+="% Width of Text: "+A(e,"1px").width+", FieldWidth:"+h+"\n";break}m=A(o[0]+" ",a+"px",i).width;var w="",y=0;for(var v in o){w=" "==(w+=o[v]+" ").substr(w.length-1)?w.substr(0,w.length-1):w;var b=parseInt(v);m=A(w+" ",a+"px",i).width;var x=c(b,w,a),S=v>=o.length-1;if(!x||S){if(x||S){if(S)g=b;else if(t.multiline&&s<(l+2)*(y+2)+2)continue t}else{if(!t.multiline)continue t;if(s<(l+2)*(y+2)+2)continue t;g=b}for(var k="",_=p;_<=g;_++)k+=o[_]+" ";switch(k=" "==k.substr(k.length-1)?k.substr(0,k.length-1):k,m=A(k,a+"px",i).width,t.Q){case 2:f=h-m-2;break;case 1:f=(h-m)/2;break;case 0:default:f=2}e+=f.toFixed(2)+" "+d.toFixed(2)+" Td\n",e+="("+k+") Tj\n",e+=-f.toFixed(2)+" 0 Td\n",d=-(a+2),m=0,p=g+1,y++,w=""}else w+=" "}break}return r.text=e,r.fontSize=a,r},A=function(t,e,n){n=n||"helvetica";var r=l.internal.getFont(n),i=l.getStringUnitWidth(t,{font:r,fontSize:parseFloat(e),charSpace:0})*parseFloat(e);return{height:l.getStringUnitWidth("3",{font:r,fontSize:parseFloat(e),charSpace:0})*parseFloat(e)*1.5,width:i}},d={fields:[],xForms:[],acroFormDictionaryRoot:null,printedOut:!1,internal:null,isInitialized:!1},p=function(){for(var t in l.internal.acroformPlugin.acroFormDictionaryRoot.Fields){var e=l.internal.acroformPlugin.acroFormDictionaryRoot.Fields[t];e.hasAnnotation&&m.call(l,e)}},g=function(t){l.internal.acroformPlugin.printedOut&&(l.internal.acroformPlugin.printedOut=!1,l.internal.acroformPlugin.acroFormDictionaryRoot=null),l.internal.acroformPlugin.acroFormDictionaryRoot||x.call(l),l.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(t)},m=function(t){var e={type:"reference",object:t};l.annotationPlugin.annotations[l.internal.getPageInfo(t.page).pageNumber].push(e)},w=function(){void 0!==l.internal.acroformPlugin.acroFormDictionaryRoot?l.internal.write("/AcroForm "+l.internal.acroformPlugin.acroFormDictionaryRoot.objId+" 0 R"):console.log("Root missing...")},y=function(){l.internal.events.unsubscribe(l.internal.acroformPlugin.acroFormDictionaryRoot._eventID),delete l.internal.acroformPlugin.acroFormDictionaryRoot._eventID,l.internal.acroformPlugin.printedOut=!0},v=function(t){var e=!t;t||(l.internal.newObjectDeferredBegin(l.internal.acroformPlugin.acroFormDictionaryRoot.objId),l.internal.out(l.internal.acroformPlugin.acroFormDictionaryRoot.getString()));t=t||l.internal.acroformPlugin.acroFormDictionaryRoot.Kids;for(var n in t){var r=t[n],i=r.Rect;r.Rect&&(r.Rect=u.call(this,r.Rect)),l.internal.newObjectDeferredBegin(r.objId);var o=r.objId+" 0 obj\n<<\n";if("object"===(void 0===r?"undefined":vt(r))&&"function"==typeof r.getContent&&(o+=r.getContent()),r.Rect=i,r.hasAppearanceStream&&!r.appearanceStreamContent){var a=f.call(this,r);o+="/AP << /N "+a+" >>\n",l.internal.acroformPlugin.xForms.push(a)}if(r.appearanceStreamContent){for(var s in o+="/AP << ",r.appearanceStreamContent){var h=r.appearanceStreamContent[s];if(o+="/"+s+" ",o+="<< ",1<=Object.keys(h).length||Array.isArray(h))for(var n in h){var c;"function"==typeof(c=h[n])&&(c=c.call(this,r)),o+="/"+n+" "+c+" ",0<=l.internal.acroformPlugin.xForms.indexOf(c)||l.internal.acroformPlugin.xForms.push(c)}else"function"==typeof(c=h)&&(c=c.call(this,r)),o+="/"+n+" "+c+" \n",0<=l.internal.acroformPlugin.xForms.indexOf(c)||l.internal.acroformPlugin.xForms.push(c);o+=" >>\n"}o+=">>\n"}o+=">>\nendobj\n",l.internal.out(o)}e&&b.call(this,l.internal.acroformPlugin.xForms)},b=function(t){for(var e in t){var n=e,r=t[e];l.internal.newObjectDeferredBegin(r&&r.objId);var i="";"object"===(void 0===r?"undefined":vt(r))&&"function"==typeof r.getString&&(i=r.getString()),l.internal.out(i),delete t[n]}},x=function(){if(void 0!==this.internal&&(void 0===this.internal.acroformPlugin||!1===this.internal.acroformPlugin.isInitialized)){if(l=this,T.FieldNum=0,this.internal.acroformPlugin=JSON.parse(JSON.stringify(d)),this.internal.acroformPlugin.acroFormDictionaryRoot)throw new Error("Exception while creating AcroformDictionary");e=l.internal.scaleFactor,a=l.internal.pageSize.getHeight(),l.internal.acroformPlugin.acroFormDictionaryRoot=new C,l.internal.acroformPlugin.acroFormDictionaryRoot._eventID=l.internal.events.subscribe("postPutResources",y),l.internal.events.subscribe("buildDocument",p),l.internal.events.subscribe("putCatalog",w),l.internal.events.subscribe("postPutPages",v),l.internal.acroformPlugin.isInitialized=!0}},S=function(t){if(Array.isArray(t)){var e=" [";for(var n in t){e+=t[n].toString(),e+=n<t.length-1?" ":""}return e+="]"}},k=function(t){return 0!==(t=t||"").indexOf("(")&&(t="("+t),")"!=t.substring(t.length-1)&&(t+=")"),t},_=function(){var t;Object.defineProperty(this,"objId",{get:function(){return t||(t=l.internal.newObjectDeferred()),t||console.log("Couldn't create Object ID"),t},configurable:!1})};_.prototype.toString=function(){return this.objId+" 0 R"},_.prototype.getString=function(){var t=this.objId+" 0 obj\n<<";return t+=this.getContent()+">>\n",this.stream&&(t+="stream\n",t+=this.stream,t+="\nendstream\n"),t+="endobj\n"},_.prototype.getContent=function(){var t="";return t+=function(t){var e="",n=Object.keys(t).filter(function(t){return"content"!=t&&"appearanceStreamContent"!=t&&"_"!=t.substring(0,1)});for(var r in n){var i=n[r],o=t[i];o&&(Array.isArray(o)?e+="/"+i+" "+S(o)+"\n":e+=o instanceof _?"/"+i+" "+o.objId+" 0 R\n":"/"+i+" "+o+"\n")}return e}(this)};var I=function(){var e;_.call(this),this.Type="/XObject",this.Subtype="/Form",this.FormType=1,this.BBox,this.Matrix,this.Resources="2 0 R",this.PieceInfo,Object.defineProperty(this,"Length",{enumerable:!0,get:function(){return void 0!==e?e.length:0}}),Object.defineProperty(this,"stream",{enumerable:!1,set:function(t){e=t.trim()},get:function(){return e||null}})};r(I,_);var C=function(){_.call(this);var t=[];Object.defineProperty(this,"Kids",{enumerable:!1,configurable:!0,get:function(){return 0<t.length?t:void 0}}),Object.defineProperty(this,"Fields",{enumerable:!0,configurable:!0,get:function(){return t}}),this.DA};r(C,_);var T=function t(){var e;_.call(this),Object.defineProperty(this,"Rect",{enumerable:!0,configurable:!1,get:function(){if(e)return e},set:function(t){e=t}});var n,r,i,o,a="";Object.defineProperty(this,"FT",{enumerable:!0,set:function(t){a=t},get:function(){return a}}),Object.defineProperty(this,"T",{enumerable:!0,configurable:!1,set:function(t){n=t},get:function(){if(!n||n.length<1){if(this instanceof j)return;return"(FieldObject"+t.FieldNum+++")"}return"("==n.substring(0,1)&&n.substring(n.length-1)?n:"("+n+")"}}),Object.defineProperty(this,"DA",{enumerable:!0,get:function(){if(r)return"("+r+")"},set:function(t){r=t}}),Object.defineProperty(this,"DV",{enumerable:!0,configurable:!0,get:function(){if(i)return i},set:function(t){i=t}}),Object.defineProperty(this,"V",{enumerable:!0,configurable:!0,get:function(){if(o)return o},set:function(t){o=t}}),Object.defineProperty(this,"Type",{enumerable:!0,get:function(){return this.hasAnnotation?"/Annot":null}}),Object.defineProperty(this,"Subtype",{enumerable:!0,get:function(){return this.hasAnnotation?"/Widget":null}}),this.BG,Object.defineProperty(this,"hasAnnotation",{enumerable:!1,get:function(){return!!(this.Rect||this.BC||this.BG)}}),Object.defineProperty(this,"hasAppearanceStream",{enumerable:!1,configurable:!0,writable:!0}),Object.defineProperty(this,"page",{enumerable:!1,configurable:!0,writable:!0})};r(T,_);var F=function(){T.call(this),this.FT="/Ch",this.Opt=[],this.V="()",this.TI=0;var e=!1;Object.defineProperty(this,"combo",{enumerable:!1,get:function(){return e},set:function(t){e=t}}),Object.defineProperty(this,"edit",{enumerable:!0,set:function(t){1==t?(this._edit=!0,this.combo=!0):this._edit=!1},get:function(){return!!this._edit&&this._edit},configurable:!1}),this.hasAppearanceStream=!0};r(F,T);var P=function(){F.call(this),this.combo=!1};r(P,F);var E=function(){P.call(this),this.combo=!0};r(E,P);var q=function(){E.call(this),this.edit=!0};r(q,E);var O=function(){T.call(this),this.FT="/Btn"};r(O,T);var B=function(){O.call(this);var e=!0;Object.defineProperty(this,"pushbutton",{enumerable:!1,get:function(){return e},set:function(t){e=t}})};r(B,O);var R=function(){O.call(this);var e=!0;Object.defineProperty(this,"radio",{enumerable:!1,get:function(){return e},set:function(t){e=t}});var n,t=[];Object.defineProperty(this,"Kids",{enumerable:!0,get:function(){if(0<t.length)return t}}),Object.defineProperty(this,"__Kids",{get:function(){return t}}),Object.defineProperty(this,"noToggleToOff",{enumerable:!1,get:function(){return n},set:function(t){n=t}})};r(R,O);var j=function(t,e){T.call(this),this.Parent=t,this._AppearanceType=N.RadioButton.Circle,this.appearanceStreamContent=this._AppearanceType.createAppearanceStream(e),this.F=i(this.F,3,1),this.MK=this._AppearanceType.createMK(),this.AS="/Off",this._Name=e};r(j,T),R.prototype.setAppearance=function(t){if("createAppearanceStream"in t&&"createMK"in t)for(var e in this.__Kids){var n=this.__Kids[e];n.appearanceStreamContent=t.createAppearanceStream(n._Name),n.MK=t.createMK()}else console.log("Couldn't assign Appearance to RadioButton. Appearance was Invalid!")},R.prototype.createOption=function(t){this.__Kids.length;var e=new j(this,t);return this.__Kids.push(e),n.addField(e),e};var D=function(){O.call(this),this.appearanceStreamContent=N.CheckBox.createAppearanceStream(),this.MK=N.CheckBox.createMK(),this.AS="/On",this.V="/On"};r(D,O);var M=function(){var e,n;T.call(this),this.DA=N.createDefaultAppearanceStream(),this.F=4,Object.defineProperty(this,"V",{get:function(){return e?k(e):e},enumerable:!0,set:function(t){e=t}}),Object.defineProperty(this,"DV",{get:function(){return n?k(n):n},enumerable:!0,set:function(t){n=t}});var r=!1;Object.defineProperty(this,"multiline",{enumerable:!1,get:function(){return r},set:function(t){r=t}});var i=!1;Object.defineProperty(this,"fileSelect",{enumerable:!1,get:function(){return i},set:function(t){i=t}});var o=!1;Object.defineProperty(this,"doNotSpellCheck",{enumerable:!1,get:function(){return o},set:function(t){o=t}});var a=!1;Object.defineProperty(this,"doNotScroll",{enumerable:!1,get:function(){return a},set:function(t){a=t}});var s=!1;Object.defineProperty(this,"MaxLen",{enumerable:!0,get:function(){return s},set:function(t){s=t}}),Object.defineProperty(this,"hasAppearanceStream",{enumerable:!1,get:function(){return this.V||this.DV}})};r(M,T);var U=function(){M.call(this);var e=!0;Object.defineProperty(this,"password",{enumerable:!1,get:function(){return e},set:function(t){e=t}})};r(U,M);var N={CheckBox:{createAppearanceStream:function(){return{N:{On:N.CheckBox.YesNormal},D:{On:N.CheckBox.YesPushDown,Off:N.CheckBox.OffPushDown}}},createMK:function(){return"<< /CA (3)>>"},YesPushDown:function(t){var e=h(t),n=[],r=l.internal.getFont("zapfdingbats","normal").id;t.Q=1;var i=c(t,"3","ZapfDingbats",50);return n.push("0.749023 g"),n.push("0 0 "+N.internal.getWidth(t).toFixed(2)+" "+N.internal.getHeight(t).toFixed(2)+" re"),n.push("f"),n.push("BMC"),n.push("q"),n.push("0 0 1 rg"),n.push("/"+r+" "+i.fontSize.toFixed(2)+" Tf 0 g"),n.push("BT"),n.push(i.text),n.push("ET"),n.push("Q"),n.push("EMC"),e.stream=n.join("\n"),e},YesNormal:function(t){var e=h(t),n=l.internal.getFont("zapfdingbats","normal").id,r=[];t.Q=1;var i=N.internal.getHeight(t),o=N.internal.getWidth(t),a=c(t,"3","ZapfDingbats",.9*i);return r.push("1 g"),r.push("0 0 "+o.toFixed(2)+" "+i.toFixed(2)+" re"),r.push("f"),r.push("q"),r.push("0 0 1 rg"),r.push("0 0 "+(o-1).toFixed(2)+" "+(i-1).toFixed(2)+" re"),r.push("W"),r.push("n"),r.push("0 g"),r.push("BT"),r.push("/"+n+" "+a.fontSize.toFixed(2)+" Tf 0 g"),r.push(a.text),r.push("ET"),r.push("Q"),e.stream=r.join("\n"),e},OffPushDown:function(t){var e=h(t),n=[];return n.push("0.749023 g"),n.push("0 0 "+N.internal.getWidth(t).toFixed(2)+" "+N.internal.getHeight(t).toFixed(2)+" re"),n.push("f"),e.stream=n.join("\n"),e}},RadioButton:{Circle:{createAppearanceStream:function(t){var e={D:{Off:N.RadioButton.Circle.OffPushDown},N:{}};return e.N[t]=N.RadioButton.Circle.YesNormal,e.D[t]=N.RadioButton.Circle.YesPushDown,e},createMK:function(){return"<< /CA (l)>>"},YesNormal:function(t){var e=h(t),n=[],r=N.internal.getWidth(t)<=N.internal.getHeight(t)?N.internal.getWidth(t)/4:N.internal.getHeight(t)/4;r*=.9;var i=N.internal.Bezier_C;return n.push("q"),n.push("1 0 0 1 "+N.internal.getWidth(t)/2+" "+N.internal.getHeight(t)/2+" cm"),n.push(r+" 0 m"),n.push(r+" "+r*i+" "+r*i+" "+r+" 0 "+r+" c"),n.push("-"+r*i+" "+r+" -"+r+" "+r*i+" -"+r+" 0 c"),n.push("-"+r+" -"+r*i+" -"+r*i+" -"+r+" 0 -"+r+" c"),n.push(r*i+" -"+r+" "+r+" -"+r*i+" "+r+" 0 c"),n.push("f"),n.push("Q"),e.stream=n.join("\n"),e},YesPushDown:function(t){var e=h(t),n=[],r=N.internal.getWidth(t)<=N.internal.getHeight(t)?N.internal.getWidth(t)/4:N.internal.getHeight(t)/4,i=2*(r*=.9),o=i*N.internal.Bezier_C,a=r*N.internal.Bezier_C;return n.push("0.749023 g"),n.push("q"),n.push("1 0 0 1 "+(N.internal.getWidth(t)/2).toFixed(2)+" "+(N.internal.getHeight(t)/2).toFixed(2)+" cm"),n.push(i+" 0 m"),n.push(i+" "+o+" "+o+" "+i+" 0 "+i+" c"),n.push("-"+o+" "+i+" -"+i+" "+o+" -"+i+" 0 c"),n.push("-"+i+" -"+o+" -"+o+" -"+i+" 0 -"+i+" c"),n.push(o+" -"+i+" "+i+" -"+o+" "+i+" 0 c"),n.push("f"),n.push("Q"),n.push("0 g"),n.push("q"),n.push("1 0 0 1 "+(N.internal.getWidth(t)/2).toFixed(2)+" "+(N.internal.getHeight(t)/2).toFixed(2)+" cm"),n.push(r+" 0 m"),n.push(r+" "+a+" "+a+" "+r+" 0 "+r+" c"),n.push("-"+a+" "+r+" -"+r+" "+a+" -"+r+" 0 c"),n.push("-"+r+" -"+a+" -"+a+" -"+r+" 0 -"+r+" c"),n.push(a+" -"+r+" "+r+" -"+a+" "+r+" 0 c"),n.push("f"),n.push("Q"),e.stream=n.join("\n"),e},OffPushDown:function(t){var e=h(t),n=[],r=N.internal.getWidth(t)<=N.internal.getHeight(t)?N.internal.getWidth(t)/4:N.internal.getHeight(t)/4,i=2*(r*=.9),o=i*N.internal.Bezier_C;return n.push("0.749023 g"),n.push("q"),n.push("1 0 0 1 "+(N.internal.getWidth(t)/2).toFixed(2)+" "+(N.internal.getHeight(t)/2).toFixed(2)+" cm"),n.push(i+" 0 m"),n.push(i+" "+o+" "+o+" "+i+" 0 "+i+" c"),n.push("-"+o+" "+i+" -"+i+" "+o+" -"+i+" 0 c"),n.push("-"+i+" -"+o+" -"+o+" -"+i+" 0 -"+i+" c"),n.push(o+" -"+i+" "+i+" -"+o+" "+i+" 0 c"),n.push("f"),n.push("Q"),e.stream=n.join("\n"),e}},Cross:{createAppearanceStream:function(t){var e={D:{Off:N.RadioButton.Cross.OffPushDown},N:{}};return e.N[t]=N.RadioButton.Cross.YesNormal,e.D[t]=N.RadioButton.Cross.YesPushDown,e},createMK:function(){return"<< /CA (8)>>"},YesNormal:function(t){var e=h(t),n=[],r=N.internal.calculateCross(t);return n.push("q"),n.push("1 1 "+(N.internal.getWidth(t)-2).toFixed(2)+" "+(N.internal.getHeight(t)-2).toFixed(2)+" re"),n.push("W"),n.push("n"),n.push(r.x1.x.toFixed(2)+" "+r.x1.y.toFixed(2)+" m"),n.push(r.x2.x.toFixed(2)+" "+r.x2.y.toFixed(2)+" l"),n.push(r.x4.x.toFixed(2)+" "+r.x4.y.toFixed(2)+" m"),n.push(r.x3.x.toFixed(2)+" "+r.x3.y.toFixed(2)+" l"),n.push("s"),n.push("Q"),e.stream=n.join("\n"),e},YesPushDown:function(t){var e=h(t),n=N.internal.calculateCross(t),r=[];return r.push("0.749023 g"),r.push("0 0 "+N.internal.getWidth(t).toFixed(2)+" "+N.internal.getHeight(t).toFixed(2)+" re"),r.push("f"),r.push("q"),r.push("1 1 "+(N.internal.getWidth(t)-2).toFixed(2)+" "+(N.internal.getHeight(t)-2).toFixed(2)+" re"),r.push("W"),r.push("n"),r.push(n.x1.x.toFixed(2)+" "+n.x1.y.toFixed(2)+" m"),r.push(n.x2.x.toFixed(2)+" "+n.x2.y.toFixed(2)+" l"),r.push(n.x4.x.toFixed(2)+" "+n.x4.y.toFixed(2)+" m"),r.push(n.x3.x.toFixed(2)+" "+n.x3.y.toFixed(2)+" l"),r.push("s"),r.push("Q"),e.stream=r.join("\n"),e},OffPushDown:function(t){var e=h(t),n=[];return n.push("0.749023 g"),n.push("0 0 "+N.internal.getWidth(t).toFixed(2)+" "+N.internal.getHeight(t).toFixed(2)+" re"),n.push("f"),e.stream=n.join("\n"),e}}},createDefaultAppearanceStream:function(t){return"/F1 0 Tf 0 g"}};N.internal={Bezier_C:.551915024494,calculateCross:function(t){var e,n,r=N.internal.getWidth(t),i=N.internal.getHeight(t),o=(n=i)<(e=r)?n:e;return{x1:{x:(r-o)/2,y:(i-o)/2+o},x2:{x:(r-o)/2+o,y:(i-o)/2},x3:{x:(r-o)/2,y:(i-o)/2},x4:{x:(r-o)/2+o,y:(i-o)/2+o}}}},N.internal.getWidth=function(t){var e=0;return"object"===(void 0===t?"undefined":vt(t))&&(e=s(t.Rect[2])),e},N.internal.getHeight=function(t){var e=0;return"object"===(void 0===t?"undefined":vt(t))&&(e=s(t.Rect[3])),e},n.addField=function(t){return x.call(this),t instanceof M?this.addTextField.call(this,t):t instanceof F?this.addChoiceField.call(this,t):t instanceof O?this.addButton.call(this,t):t instanceof j?g.call(this,t):t&&g.call(this,t),t.page=l.internal.getCurrentPageInfo().pageNumber,this},n.addButton=function(t){x.call(this);var e=t||new T;e.FT="/Btn",e.Ff=o(e.Ff,t,l.internal.getPDFVersion()),g.call(this,e)},n.addTextField=function(t){x.call(this);var e=t||new T;e.FT="/Tx",e.Ff=o(e.Ff,t,l.internal.getPDFVersion()),g.call(this,e)},n.addChoiceField=function(t){x.call(this);var e=t||new T;e.FT="/Ch",e.Ff=o(e.Ff,t,l.internal.getPDFVersion()),g.call(this,e)},"object"==(void 0===t?"undefined":vt(t))&&(t.ChoiceField=F,t.ListBox=P,t.ComboBox=E,t.EditBox=q,t.Button=O,t.PushButton=B,t.RadioButton=R,t.CheckBox=D,t.TextField=M,t.PasswordField=U,t.AcroForm={Appearance:N}),n.AcroFormChoiceField=F,n.AcroFormListBox=P,n.AcroFormComboBox=E,n.AcroFormEditBox=q,n.AcroFormButton=O,n.AcroFormPushButton=B,n.AcroFormRadioButton=R,n.AcroFormCheckBox=D,n.AcroFormTextField=M,n.AcroFormPasswordField=U,n.AcroForm={ChoiceField:F,ListBox:P,ComboBox:E,EditBox:q,Button:O,PushButton:B,RadioButton:R,CheckBox:D,TextField:M,PasswordField:U}}($.API,"undefined"!=typeof window&&window||"undefined"!=typeof __webpack_require__.g&&__webpack_require__.g),$.API.addHTML=function(t,p,g,s,m){if("undefined"==typeof html2canvas&&"undefined"==typeof rasterizeHTML)throw new Error("You need either https://github.com/niklasvh/html2canvas or https://github.com/cburgmer/rasterizeHTML.js");"number"!=typeof p&&(s=p,m=g),"function"==typeof s&&(m=s,s=null),"function"!=typeof m&&(m=function(){});var e=this.internal,w=e.scaleFactor,y=e.pageSize.getWidth(),v=e.pageSize.getHeight();if((s=s||{}).onrendered=function(h){p=parseInt(p)||0,g=parseInt(g)||0;var t=s.dim||{},c=Object.assign({top:0,right:0,bottom:0,left:0,useFor:"content"},s.margin),e=t.h||Math.min(v,h.height/w),l=t.w||Math.min(y,h.width/w)-p,u=s.format||"JPEG",f=s.imageCompression||"SLOW";if(h.height>v-c.top-c.bottom&&s.pagesplit){var d=function(t,e,n,r,i){var o=document.createElement("canvas");o.height=i,o.width=r;var a=o.getContext("2d");return a.mozImageSmoothingEnabled=!1,a.webkitImageSmoothingEnabled=!1,a.msImageSmoothingEnabled=!1,a.imageSmoothingEnabled=!1,a.fillStyle=s.backgroundColor||"#ffffff",a.fillRect(0,0,r,i),a.drawImage(t,e,n,r,i,0,0,r,i),o},n=function(){for(var t,e,n=0,r=0,i={},o=!1;;){var a;if(r=0,i.top=0!==n?c.top:g,i.left=0!==n?c.left:p,o=(y-c.left-c.right)*w<h.width,"content"===c.useFor?0===n?(t=Math.min((y-c.left)*w,h.width),e=Math.min((v-c.top)*w,h.height-n)):(t=Math.min(y*w,h.width),e=Math.min(v*w,h.height-n),i.top=0):(t=Math.min((y-c.left-c.right)*w,h.width),e=Math.min((v-c.bottom-c.top)*w,h.height-n)),o)for(;;){"content"===c.useFor&&(0===r?t=Math.min((y-c.left)*w,h.width):(t=Math.min(y*w,h.width-r),i.left=0));var s=[a=d(h,r,n,t,e),i.left,i.top,a.width/w,a.height/w,u,null,f];if(this.addImage.apply(this,s),(r+=t)>=h.width)break;this.addPage()}else s=[a=d(h,0,n,t,e),i.left,i.top,a.width/w,a.height/w,u,null,f],this.addImage.apply(this,s);if((n+=e)>=h.height)break;this.addPage()}m(l,n,null,s)}.bind(this);if("CANVAS"===h.nodeName){var r=new Image;r.onload=n,r.src=h.toDataURL("image/png"),h=r}else n()}else{var i=Math.random().toString(35),o=[h,p,g,l,e,u,i,f];this.addImage.apply(this,o),m(l,e,i,o)}}.bind(this),"undefined"!=typeof html2canvas&&!s.rstz)return html2canvas(t,s);if("undefined"!=typeof rasterizeHTML){var n="drawDocument";return"string"==typeof t&&(n=/^http/.test(t)?"drawURL":"drawHTML"),s.width=s.width||y*w,rasterizeHTML[n](t,void 0,s).then(function(t){s.onrendered(t.image)},function(t){m(null,t)})}return null},
/** @preserve
   * jsPDF addImage plugin
   * Copyright (c) 2012 Jason Siefken, https://github.com/siefkenj/
   *               2013 Chris Dowling, https://github.com/gingerchris
   *               2013 Trinh Ho, https://github.com/ineedfat
   *               2013 Edwin Alejandro Perez, https://github.com/eaparango
   *               2013 Norah Smith, https://github.com/burnburnrocket
   *               2014 Diego Casorran, https://github.com/diegocr
   *               2014 James Robb, https://github.com/jamesbrobb
   *
   * 
   */
function(b){var x="addImage_",h={PNG:[[137,80,78,71]],TIFF:[[77,77,0,42],[73,73,42,0]],JPEG:[[255,216,255,224,void 0,void 0,74,70,73,70,0],[255,216,255,225,void 0,void 0,69,120,105,102,0,0]],JPEG2000:[[0,0,0,12,106,80,32,32]],GIF87a:[[71,73,70,56,55,97]],GIF89a:[[71,73,70,56,57,97]],BMP:[[66,77],[66,65],[67,73],[67,80],[73,67],[80,84]]};b.getImageFileTypeByImageData=function(t,e){var n,r;e=e||"UNKNOWN";var i,o,a,s="UNKNOWN";for(a in h)for(i=h[a],n=0;n<i.length;n+=1){for(o=!0,r=0;r<i[n].length;r+=1)if(void 0!==i[n][r]&&i[n][r]!==t.charCodeAt(r)){o=!1;break}if(!0===o){s=a;break}}return"UNKOWN"===s&&"UNKNOWN"!==e&&(console.warn('FileType of Image not recognized. Processing image as "'+e+'".'),s=e),s};var n=function t(e){var n=this.internal.newObject(),r=this.internal.write,i=this.internal.putStream;if(e.n=n,r("<</Type /XObject"),r("/Subtype /Image"),r("/Width "+e.w),r("/Height "+e.h),e.cs===this.color_spaces.INDEXED?r("/ColorSpace [/Indexed /DeviceRGB "+(e.pal.length/3-1)+" "+("smask"in e?n+2:n+1)+" 0 R]"):(r("/ColorSpace /"+e.cs),e.cs===this.color_spaces.DEVICE_CMYK&&r("/Decode [1 0 1 0 1 0 1 0]")),r("/BitsPerComponent "+e.bpc),"f"in e&&r("/Filter /"+e.f),"dp"in e&&r("/DecodeParms <<"+e.dp+">>"),"trns"in e&&e.trns.constructor==Array){for(var o="",a=0,s=e.trns.length;a<s;a++)o+=e.trns[a]+" "+e.trns[a]+" ";r("/Mask ["+o+"]")}if("smask"in e&&r("/SMask "+(n+1)+" 0 R"),r("/Length "+e.data.length+">>"),i(e.data),r("endobj"),"smask"in e){var h="/Predictor "+e.p+" /Colors 1 /BitsPerComponent "+e.bpc+" /Columns "+e.w,c={w:e.w,h:e.h,cs:"DeviceGray",bpc:e.bpc,dp:h,data:e.smask};"f"in e&&(c.f=e.f),t.call(this,c)}e.cs===this.color_spaces.INDEXED&&(this.internal.newObject(),r("<< /Length "+e.pal.length+">>"),i(this.arrayBufferToBinaryString(new Uint8Array(e.pal))),r("endobj"))},S=function(){var t=this.internal.collections[x+"images"];for(var e in t)n.call(this,t[e])},k=function(){var t,e=this.internal.collections[x+"images"],n=this.internal.write;for(var r in e)n("/I"+(t=e[r]).i,t.n,"0","R")},_=function(t){return"function"==typeof b["process"+t.toUpperCase()]},A=function(t){return"object"===(void 0===t?"undefined":vt(t))&&1===t.nodeType},I=function(t,e){if("IMG"===t.nodeName&&t.hasAttribute("src")){var n=""+t.getAttribute("src");if(0===n.indexOf("data:image/"))return n;!e&&/\.png(?:[?#].*)?$/i.test(n)&&(e="png")}if("CANVAS"===t.nodeName)var r=t;else{(r=document.createElement("canvas")).width=t.clientWidth||t.width,r.height=t.clientHeight||t.height;var i=r.getContext("2d");if(!i)throw"addImage requires canvas to be supported by browser.";i.drawImage(t,0,0,r.width,r.height)}return r.toDataURL("png"==(""+e).toLowerCase()?"image/png":"image/jpeg")},C=function(t,e){var n;if(e)for(var r in e)if(t===e[r].alias){n=e[r];break}return n};b.color_spaces={DEVICE_RGB:"DeviceRGB",DEVICE_GRAY:"DeviceGray",DEVICE_CMYK:"DeviceCMYK",CAL_GREY:"CalGray",CAL_RGB:"CalRGB",LAB:"Lab",ICC_BASED:"ICCBased",INDEXED:"Indexed",PATTERN:"Pattern",SEPARATION:"Separation",DEVICE_N:"DeviceN"},b.decode={DCT_DECODE:"DCTDecode",FLATE_DECODE:"FlateDecode",LZW_DECODE:"LZWDecode",JPX_DECODE:"JPXDecode",JBIG2_DECODE:"JBIG2Decode",ASCII85_DECODE:"ASCII85Decode",ASCII_HEX_DECODE:"ASCIIHexDecode",RUN_LENGTH_DECODE:"RunLengthDecode",CCITT_FAX_DECODE:"CCITTFaxDecode"},b.image_compression={NONE:"NONE",FAST:"FAST",MEDIUM:"MEDIUM",SLOW:"SLOW"},b.sHashCode=function(t){return t=t||"",Array.prototype.reduce&&t.split("").reduce(function(t,e){return(t=(t<<5)-t+e.charCodeAt(0))&t},0)},b.isString=function(t){return"string"==typeof t},b.validateStringAsBase64=function(t){var e=!0;return(t=t||"").length%4!=0&&(e=!1),!1===/[A-Za-z0-9\/]+/.test(t.substr(0,t.length-2))&&(e=!1),!1===/[A-Za-z0-9\/][A-Za-z0-9+\/]|[A-Za-z0-9+\/]=|==/.test(t.substr(-2))&&(e=!1),e},b.extractInfoFromBase64DataURI=function(t){return/^data:([\w]+?\/([\w]+?));base64,(.+)$/g.exec(t)},b.supportsArrayBuffer=function(){return"undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array},b.isArrayBuffer=function(t){return!!this.supportsArrayBuffer()&&t instanceof ArrayBuffer},b.isArrayBufferView=function(t){return!!this.supportsArrayBuffer()&&("undefined"!=typeof Uint32Array&&(t instanceof Int8Array||t instanceof Uint8Array||"undefined"!=typeof Uint8ClampedArray&&t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Float32Array||t instanceof Float64Array))},b.binaryStringToUint8Array=function(t){for(var e=t.length,n=new Uint8Array(e),r=0;r<e;r++)n[r]=t.charCodeAt(r);return n},b.arrayBufferToBinaryString=function(t){if("function"==typeof atob)return atob(this.arrayBufferToBase64(t));if("function"==typeof TextDecoder){var e=new TextDecoder("ascii");if("ascii"===e.encoding)return e.decode(t)}for(var n=this.isArrayBuffer(t)?t:new Uint8Array(t),r=20480,i="",o=Math.ceil(n.byteLength/r),a=0;a<o;a++)i+=String.fromCharCode.apply(null,n.slice(a*r,a*r+r));return i},b.arrayBufferToBase64=function(t){for(var e,n="",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i=new Uint8Array(t),o=i.byteLength,a=o%3,s=o-a,h=0;h<s;h+=3)n+=r[(16515072&(e=i[h]<<16|i[h+1]<<8|i[h+2]))>>18]+r[(258048&e)>>12]+r[(4032&e)>>6]+r[63&e];return 1==a?n+=r[(252&(e=i[s]))>>2]+r[(3&e)<<4]+"==":2==a&&(n+=r[(64512&(e=i[s]<<8|i[s+1]))>>10]+r[(1008&e)>>4]+r[(15&e)<<2]+"="),n},b.createImageInfo=function(t,e,n,r,i,o,a,s,h,c,l,u,f){var d={alias:s,w:e,h:n,cs:r,bpc:i,i:a,data:t};return o&&(d.f=o),h&&(d.dp=h),c&&(d.trns=c),l&&(d.pal=l),u&&(d.smask=u),f&&(d.p=f),d},b.addImage=function(t,e,n,r,i,o,a,s,h){var c="";if("string"!=typeof e){var l=o;o=i,i=r,r=n,n=e,e=l}if("object"===(void 0===t?"undefined":vt(t))&&!A(t)&&"imageData"in t){var u=t;t=u.imageData,e=u.format||e,n=u.x||n||0,r=u.y||r||0,i=u.w||i,o=u.h||o,a=u.alias||a,s=u.compression||s,h=u.rotation||u.angle||h}if(isNaN(n)||isNaN(r))throw console.error("jsPDF.addImage: Invalid coordinates",arguments),new Error("Invalid coordinates passed to jsPDF.addImage");var f,d,p,g,m,w,y,v=function(){var t=this.internal.collections[x+"images"];return t||(this.internal.collections[x+"images"]=t={},this.internal.events.subscribe("putResources",S),this.internal.events.subscribe("putXobjectDict",k)),t}.call(this);if(!(f=C(t,v))&&(A(t)&&(t=I(t,e)),(null==(y=a)||0===y.length)&&(a="string"==typeof(w=t)&&b.sHashCode(w)),!(f=C(a,v)))){if(this.isString(t)&&(""!==(c=this.convertStringToImageData(t))?t=c:void 0!==(c=this.loadImageFile(t))&&(t=c)),e=this.getImageFileTypeByImageData(t,e),!_(e))throw new Error("addImage does not support files of type '"+e+"', please ensure that a plugin for '"+e+"' support is added.");if(this.supportsArrayBuffer()&&(t instanceof Uint8Array||(d=t,t=this.binaryStringToUint8Array(t))),!(f=this["process"+e.toUpperCase()](t,(m=0,(g=v)&&(m=Object.keys?Object.keys(g).length:function(t){var e=0;for(var n in t)t.hasOwnProperty(n)&&e++;return e}(g)),m),a,((p=s)&&"string"==typeof p&&(p=p.toUpperCase()),p in b.image_compression?p:b.image_compression.NONE),d)))throw new Error("An unkwown error occurred whilst processing the image")}return function(t,e,n,r,i,o,a,s){var h=function(t,e,n){return t||e||(e=t=-96),t<0&&(t=-1*n.w*72/t/this.internal.scaleFactor),e<0&&(e=-1*n.h*72/e/this.internal.scaleFactor),0===t&&(t=e*n.w/n.h),0===e&&(e=t*n.h/n.w),[t,e]}.call(this,n,r,i),c=this.internal.getCoordinateString,l=this.internal.getVerticalCoordinateString;if(n=h[0],r=h[1],a[o]=i,s){s*=Math.PI/180;var u=Math.cos(s),f=Math.sin(s),d=function(t){return t.toFixed(4)},p=[d(u),d(f),d(-1*f),d(u),0,0,"cm"]}this.internal.write("q"),s?(this.internal.write([1,"0","0",1,c(t),l(e+r),"cm"].join(" ")),this.internal.write(p.join(" ")),this.internal.write([c(n),"0","0",c(r),"0","0","cm"].join(" "))):this.internal.write([c(n),"0","0",c(r),c(t),l(e+r),"cm"].join(" ")),this.internal.write("/I"+i.i+" Do"),this.internal.write("Q")}.call(this,n,r,i,o,f,f.i,v,h),this},b.convertStringToImageData=function(t){var e,n="";this.isString(t)&&(null!==(e=this.extractInfoFromBase64DataURI(t))?b.validateStringAsBase64(e[3])&&(n=atob(e[3])):b.validateStringAsBase64(t)&&(n=atob(t)));return n};var c=function(t,e){return t.subarray(e,e+5)};b.processJPEG=function(t,e,n,r,i,o){var a,s=this.decode.DCT_DECODE;if(!this.isString(t)&&!this.isArrayBuffer(t)&&!this.isArrayBufferView(t))return null;if(this.isString(t)&&(a=function(t){var e;if(255===!t.charCodeAt(0)||216===!t.charCodeAt(1)||255===!t.charCodeAt(2)||224===!t.charCodeAt(3)||!t.charCodeAt(6)==="J".charCodeAt(0)||!t.charCodeAt(7)==="F".charCodeAt(0)||!t.charCodeAt(8)==="I".charCodeAt(0)||!t.charCodeAt(9)==="F".charCodeAt(0)||0===!t.charCodeAt(10))throw new Error("getJpegSize requires a binary string jpeg file");for(var n=256*t.charCodeAt(4)+t.charCodeAt(5),r=4,i=t.length;r<i;){if(r+=n,255!==t.charCodeAt(r))throw new Error("getJpegSize could not find the size of the image");if(192===t.charCodeAt(r+1)||193===t.charCodeAt(r+1)||194===t.charCodeAt(r+1)||195===t.charCodeAt(r+1)||196===t.charCodeAt(r+1)||197===t.charCodeAt(r+1)||198===t.charCodeAt(r+1)||199===t.charCodeAt(r+1))return e=256*t.charCodeAt(r+5)+t.charCodeAt(r+6),[256*t.charCodeAt(r+7)+t.charCodeAt(r+8),e,t.charCodeAt(r+9)];r+=2,n=256*t.charCodeAt(r)+t.charCodeAt(r+1)}}(t)),this.isArrayBuffer(t)&&(t=new Uint8Array(t)),this.isArrayBufferView(t)&&(a=function(t){if(65496!=(t[0]<<8|t[1]))throw new Error("Supplied data is not a JPEG");for(var e,n=t.length,r=(t[4]<<8)+t[5],i=4;i<n;){if(r=((e=c(t,i+=r))[2]<<8)+e[3],(192===e[1]||194===e[1])&&255===e[0]&&7<r)return{width:((e=c(t,i+5))[2]<<8)+e[3],height:(e[0]<<8)+e[1],numcomponents:e[4]};i+=2}throw new Error("getJpegSizeFromBytes could not find the size of the image")}(t),t=i||this.arrayBufferToBinaryString(t)),void 0===o)switch(a.numcomponents){case 1:o=this.color_spaces.DEVICE_GRAY;break;case 4:o=this.color_spaces.DEVICE_CMYK;break;default:case 3:o=this.color_spaces.DEVICE_RGB}return this.createImageInfo(t,a.width,a.height,o,8,s,e,n)},b.processJPG=function(){return this.processJPEG.apply(this,arguments)},b.loadImageFile=function(t,e,n){e=e||!0,n=n||function(){};Object.prototype.toString.call("undefined"!=typeof process?process:0);if(void 0!==("undefined"==typeof window?"undefined":vt(window))&&"object"===("undefined"==typeof location?"undefined":vt(location))&&"http"===location.protocol.substr(0,4))return function(t,e,n){var r=new XMLHttpRequest,i=[],o=0,a=function(t){var e=t.length,n=String.fromCharCode;for(o=0;o<e;o+=1)i.push(n(255&t.charCodeAt(o)));return i.join("")};if(r.open("GET",t,!e),r.overrideMimeType("text/plain; charset=x-user-defined"),!1===e&&(r.onload=function(){return a(this.responseText)}),r.send(null),200===r.status)return e?a(r.responseText):void 0;console.warn('Unable to load file "'+t+'"')}(t,e)},b.getImageProperties=function(t){var e,n,r="";if(A(t)&&(t=I(t)),this.isString(t)&&(""!==(r=this.convertStringToImageData(t))?t=r:void 0!==(r=this.loadImageFile(t))&&(t=r)),n=this.getImageFileTypeByImageData(t),!_(n))throw new Error("addImage does not support files of type '"+n+"', please ensure that a plugin for '"+n+"' support is added.");if(this.supportsArrayBuffer()&&(t instanceof Uint8Array||(t=this.binaryStringToUint8Array(t))),!(e=this["process"+n.toUpperCase()](t)))throw new Error("An unkwown error occurred whilst processing the image");return{fileType:n,width:e.w,height:e.h,colorSpace:e.cs,compressionMode:e.f,bitsPerComponent:e.bpc}}}($.API),
/**
   * jsPDF Annotations PlugIn
   * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
   *
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */
t=$.API,y={annotations:[],f2:function(t){return t.toFixed(2)},notEmpty:function(t){if(void 0!==t&&""!=t)return!0}},$.API.annotationPlugin=y,$.API.events.push(["addPage",function(t){this.annotationPlugin.annotations[t.pageNumber]=[]}]),t.events.push(["putPage",function(t){for(var e=this.annotationPlugin.annotations[t.pageNumber],n=!1,r=0;r<e.length&&!n;r++)switch((h=e[r]).type){case"link":if(y.notEmpty(h.options.url)||y.notEmpty(h.options.pageNumber)){n=!0;break}case"reference":case"text":case"freetext":n=!0}if(0!=n){this.internal.write("/Annots [");var i=this.annotationPlugin.f2,o=this.internal.scaleFactor,a=this.internal.pageSize.getHeight(),s=this.internal.getPageInfo(t.pageNumber);for(r=0;r<e.length;r++){var h;switch((h=e[r]).type){case"reference":this.internal.write(" "+h.object.objId+" 0 R ");break;case"text":var c=this.internal.newAdditionalObject(),l=this.internal.newAdditionalObject(),u=h.title||"Note";m="<</Type /Annot /Subtype /Text "+(d="/Rect ["+i(h.bounds.x*o)+" "+i(a-(h.bounds.y+h.bounds.h)*o)+" "+i((h.bounds.x+h.bounds.w)*o)+" "+i((a-h.bounds.y)*o)+"] ")+"/Contents ("+h.contents+")",m+=" /Popup "+l.objId+" 0 R",m+=" /P "+s.objId+" 0 R",m+=" /T ("+u+") >>",c.content=m;var f=c.objId+" 0 R";m="<</Type /Annot /Subtype /Popup "+(d="/Rect ["+i((h.bounds.x+30)*o)+" "+i(a-(h.bounds.y+h.bounds.h)*o)+" "+i((h.bounds.x+h.bounds.w+30)*o)+" "+i((a-h.bounds.y)*o)+"] ")+" /Parent "+f,h.open&&(m+=" /Open true"),m+=" >>",l.content=m,this.internal.write(c.objId,"0 R",l.objId,"0 R");break;case"freetext":var d="/Rect ["+i(h.bounds.x*o)+" "+i((a-h.bounds.y)*o)+" "+i(h.bounds.x+h.bounds.w*o)+" "+i(a-(h.bounds.y+h.bounds.h)*o)+"] ",p=h.color||"#000000";m="<</Type /Annot /Subtype /FreeText "+d+"/Contents ("+h.contents+")",m+=" /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#"+p+")",m+=" /Border [0 0 0]",m+=" >>",this.internal.write(m);break;case"link":if(h.options.name){var g=this.annotations._nameMap[h.options.name];h.options.pageNumber=g.page,h.options.top=g.y}else h.options.top||(h.options.top=0);d="/Rect ["+i(h.x*o)+" "+i((a-h.y)*o)+" "+i((h.x+h.w)*o)+" "+i((a-(h.y+h.h))*o)+"] ";var m="";if(h.options.url)m="<</Type /Annot /Subtype /Link "+d+"/Border [0 0 0] /A <</S /URI /URI ("+h.options.url+") >>";else if(h.options.pageNumber)switch(m="<</Type /Annot /Subtype /Link "+d+"/Border [0 0 0] /Dest ["+(t=this.internal.getPageInfo(h.options.pageNumber)).objId+" 0 R",h.options.magFactor=h.options.magFactor||"XYZ",h.options.magFactor){case"Fit":m+=" /Fit]";break;case"FitH":m+=" /FitH "+h.options.top+"]";break;case"FitV":h.options.left=h.options.left||0,m+=" /FitV "+h.options.left+"]";break;case"XYZ":default:var w=i((a-h.options.top)*o);h.options.left=h.options.left||0,void 0===h.options.zoom&&(h.options.zoom=0),m+=" /XYZ "+h.options.left+" "+w+" "+h.options.zoom+"]"}""!=m&&(m+=" >>",this.internal.write(m))}}this.internal.write("]")}}]),t.createAnnotation=function(t){switch(t.type){case"link":this.link(t.bounds.x,t.bounds.y,t.bounds.w,t.bounds.h,t);break;case"text":case"freetext":this.annotationPlugin.annotations[this.internal.getCurrentPageInfo().pageNumber].push(t)}},t.link=function(t,e,n,r,i){this.annotationPlugin.annotations[this.internal.getCurrentPageInfo().pageNumber].push({x:t,y:e,w:n,h:r,options:i,type:"link"})},t.textWithLink=function(t,e,n,r){var i=this.getTextWidth(t),o=this.internal.getLineHeight()/this.internal.scaleFactor;return this.text(t,e,n),n+=.2*o,this.link(e,n-o,i,o,r),i},t.getTextWidth=function(t){var e=this.internal.getFontSize();return this.getStringUnitWidth(t)*e/this.internal.scaleFactor},t.getLineHeight=function(){return this.internal.getLineHeight()},function(t){var a=Object.keys({ar:"Arabic (Standard)","ar-DZ":"Arabic (Algeria)","ar-BH":"Arabic (Bahrain)","ar-EG":"Arabic (Egypt)","ar-IQ":"Arabic (Iraq)","ar-JO":"Arabic (Jordan)","ar-KW":"Arabic (Kuwait)","ar-LB":"Arabic (Lebanon)","ar-LY":"Arabic (Libya)","ar-MA":"Arabic (Morocco)","ar-OM":"Arabic (Oman)","ar-QA":"Arabic (Qatar)","ar-SA":"Arabic (Saudi Arabia)","ar-SY":"Arabic (Syria)","ar-TN":"Arabic (Tunisia)","ar-AE":"Arabic (U.A.E.)","ar-YE":"Arabic (Yemen)",fa:"Persian","fa-IR":"Persian/Iran",ur:"Urdu"}),u={1569:[65152],1570:[65153,65154,65153,65154],1571:[65155,65156,65155,65156],1572:[65157,65158],1573:[65159,65160,65159,65160],1574:[65161,65162,65163,65164],1575:[65165,65166,65165,65166],1576:[65167,65168,65169,65170],1577:[65171,65172],1578:[65173,65174,65175,65176],1579:[65177,65178,65179,65180],1580:[65181,65182,65183,65184],1581:[65185,65186,65187,65188],1582:[65189,65190,65191,65192],1583:[65193,65194,65193],1584:[65195,65196,65195],1585:[65197,65198,65197],1586:[65199,65200,65199],1587:[65201,65202,65203,65204],1588:[65205,65206,65207,65208],1589:[65209,65210,65211,65212],1590:[65213,65214,65215,65216],1591:[65217,65218,65219,65220],1592:[65221,65222,65223,65224],1593:[65225,65226,65227,65228],1594:[65229,65230,65231,65232],1601:[65233,65234,65235,65236],1602:[65237,65238,65239,65240],1603:[65241,65242,65243,65244],1604:[65245,65246,65247,65248],1605:[65249,65250,65251,65252],1606:[65253,65254,65255,65256],1607:[65257,65258,65259,65260],1608:[65261,65262,65261],1609:[65263,65264,64488,64489],1610:[65265,65266,65267,65268],1649:[64336,64337],1655:[64477],1657:[64358,64359,64360,64361],1658:[64350,64351,64352,64353],1659:[64338,64339,64340,64341],1662:[64342,64343,64344,64345],1663:[64354,64355,64356,64357],1664:[64346,64347,64348,64349],1667:[64374,64375,64376,64377],1668:[64370,64371,64372,64373],1670:[64378,64379,64380,64381],1671:[64382,64383,64384,64385],1672:[64392,64393],1676:[64388,64389],1677:[64386,64387],1678:[64390,64391],1681:[64396,64397],1688:[64394,64395,64394],1700:[64362,64363,64364,64365],1702:[64366,64367,64368,64369],1705:[64398,64399,64400,64401],1709:[64467,64468,64469,64470],1711:[64402,64403,64404,64405],1713:[64410,64411,64412,64413],1715:[64406,64407,64408,64409],1722:[64414,64415],1723:[64416,64417,64418,64419],1726:[64426,64427,64428,64429],1728:[64420,64421],1729:[64422,64423,64424,64425],1733:[64480,64481],1734:[64473,64474],1735:[64471,64472],1736:[64475,64476],1737:[64482,64483],1739:[64478,64479],1740:[64508,64509,64510,64511],1744:[64484,64485,64486,64487],1746:[64430,64431],1747:[64432,64433]},f={1570:[65269,65270,65269,65270],1571:[65271,65272,65271,65272],1573:[65273,65274,65273,65274],1575:[65275,65276,65275,65276]},d={1570:[65153,65154,65153,65154],1571:[65155,65156,65155,65156],1573:[65159,65160,65159,65160],1575:[65165,65166,65165,65166]},p={1612:64606,1613:64607,1614:64608,1615:64609,1616:64610},e=[1570,1571,1573,1575],n=[1569,1570,1571,1572,1573,1575,1577,1583,1584,1585,1586,1608,1688],o=0,s=1,h=2,c=3;function g(t){return void 0!==t&&void 0!==u[t.charCodeAt(0)]}function l(t){return void 0!==t&&0<=n.indexOf(t.charCodeAt(0))}function m(t){return void 0!==t&&0<=e.indexOf(t.charCodeAt(0))}function w(t){return g(t)&&2<=u[t.charCodeAt(0)].length}function y(t,e,n,r){return g(t)?(r=r||{},u=Object.assign(u,r),!w(t)||!g(e)&&!g(n)||!g(n)&&l(e)||l(t)&&!g(e)||l(t)&&m(e)||l(t)&&l(e)?(u=Object.assign(u,d),o):g(i=t)&&4==u[i.charCodeAt(0)].length&&g(e)&&!l(e)&&g(n)&&w(n)?(u=Object.assign(u,d),c):l(t)||!g(n)?(u=Object.assign(u,d),s):(u=Object.assign(u,d),h)):-1;var i}var v=t.processArabic=function(t,e){t=t||"",e=e||!1;var n,r,i,o="",a=0,s=0,h="",c="",l="";for(a=0;a<t.length;a+=1)h=t[a],c=t[a-1],l=t[a+1],g(h)?void 0!==c&&1604===c.charCodeAt(0)&&m(h)?(s=y(h,t[a-2],t[a+1],f),n=String.fromCharCode(f[h.charCodeAt(0)][s]),o=o.substr(0,o.length-1)+n):void 0!==c&&1617===c.charCodeAt(0)&&(void 0!==(r=h)&&void 0!==p[r.charCodeAt(0)])?(s=y(h,t[a-2],t[a+1],d),n=String.fromCharCode(p[h.charCodeAt(0)][s]),o=o.substr(0,o.length-1)+n):(s=y(h,c,l,d),o+=String.fromCharCode(u[h.charCodeAt(0)][s])):o+=e?{"(":")",")":"("}[i=h]||i:h;return e?o.split("").reverse().join(""):o};t.events.push(["preProcessText",function(t){var e=t.text,n=(t.x,t.y,t.options||{}),r=(t.mutex,n.lang),i=[];if(0<=a.indexOf(r)){if("[object Array]"===Object.prototype.toString.call(e)){var o=0;for(i=[],o=0;o<e.length;o+=1)"[object Array]"===Object.prototype.toString.call(e[o])?i.push([v(e[o][0],!0),e[o][1],e[o][2]]):i.push([v(e[o],!0)]);t.text=i}else t.text=v(e,!0);void 0===n.charSpace&&(t.options.charSpace=0),!0===n.R2L&&(t.options.R2L=!1)}}])}($.API),$.API.autoPrint=function(t){var e;switch((t=t||{}).variant=t.variant||"non-conform",t.variant){case"javascript":this.addJS("print({});");break;case"non-conform":default:this.internal.events.subscribe("postPutResources",function(){e=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/S /Named"),this.internal.out("/Type /Action"),this.internal.out("/N /Print"),this.internal.out(">>"),this.internal.out("endobj")}),this.internal.events.subscribe("putCatalog",function(){this.internal.out("/OpenAction "+e+" 0 R")})}return this},(
/**
   * jsPDF Canvas PlugIn
   * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
   *
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */
e=$.API).events.push(["initialized",function(){this.canvas.pdf=this}]),e.canvas={getContext:function(t){return(this.pdf.context2d._canvas=this).pdf.context2d},childNodes:[]},Object.defineProperty(e.canvas,"width",{get:function(){return this._width},set:function(t){this._width=t,this.getContext("2d").pageWrapX=t+1}}),Object.defineProperty(e.canvas,"height",{get:function(){return this._height},set:function(t){this._height=t,this.getContext("2d").pageWrapY=t+1}}),
/** ====================================================================
   * jsPDF Cell plugin
   * Copyright (c) 2013 Youssef Beddad, youssef.beddad@gmail.com
   *               2013 Eduardo Menezes de Morais, eduardo.morais@usp.br
   *               2013 Lee Driscoll, https://github.com/lsdriscoll
   *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
   *               2014 James Hall, james@parall.ax
   *               2014 Diego Casorran, https://github.com/diegocr
   *
   * 
   * ====================================================================
   */
I=$.API,C={x:void 0,y:void 0,w:void 0,h:void 0,ln:void 0},T=1,d=function(t,e,n,r,i){C={x:t,y:e,w:n,h:r,ln:i}},p=function(){return C},F={left:0,top:0,bottom:0},I.setHeaderFunction=function(t){h=t},I.getTextDimensions=function(e){i=this.internal.getFont().fontName,o=this.table_font_size||this.internal.getFontSize(),a=this.internal.getFont().fontStyle;var t,n,r=19.049976/25.4;(n=document.createElement("font")).id="jsPDFCell";try{n.style.fontStyle=a}catch(t){n.style.fontWeight=a}n.style.fontSize=o+"pt",n.style.fontFamily=i;try{n.textContent=e}catch(t){n.innerText=e}return document.body.appendChild(n),t={w:(n.offsetWidth+1)*r,h:(n.offsetHeight+1)*r},document.body.removeChild(n),t},I.cellAddPage=function(){var t=this.margins||F;this.addPage(),d(t.left,t.top,void 0,void 0),T+=1},I.cellInitialize=function(){C={x:void 0,y:void 0,w:void 0,h:void 0,ln:void 0},T=1},I.cell=function(t,e,n,r,i,o,a){var s=p(),h=!1;if(void 0!==s.ln)if(s.ln===o)t=s.x+s.w,e=s.y;else{var c=this.margins||F;s.y+s.h+r+13>=this.internal.pageSize.getHeight()-c.bottom&&(this.cellAddPage(),h=!0,this.printHeaders&&this.tableHeaderRow&&this.printHeaderRow(o,!0)),e=p().y+p().h,h&&(e=23)}if(void 0!==i[0])if(this.printingHeaderRow?this.rect(t,e,n,r,"FD"):this.rect(t,e,n,r),"right"===a){i instanceof Array||(i=[i]);for(var l=0;l<i.length;l++){var u=i[l],f=this.getStringUnitWidth(u)*this.internal.getFontSize();this.text(u,t+n-f-3,e+this.internal.getLineHeight()*(l+1))}}else this.text(i,t+3,e+this.internal.getLineHeight());return d(t,e,n,r,o),this},I.arrayMax=function(t,e){var n,r,i,o=t[0];for(n=0,r=t.length;n<r;n+=1)i=t[n],e?-1===e(o,i)&&(o=i):o<i&&(o=i);return o},I.table=function(t,e,n,r,i){if(!n)throw"No data for PDF table";var o,a,s,h,c,l,u,f,d,p,g=[],m=[],w={},y={},v=[],b=[],x=!1,S=!0,k=12,_=F;if(_.width=this.internal.pageSize.getWidth(),i&&(!0===i.autoSize&&(x=!0),!1===i.printHeaders&&(S=!1),i.fontSize&&(k=i.fontSize),i.css&&void 0!==i.css["font-size"]&&(k=16*i.css["font-size"]),i.margins&&(_=i.margins)),this.lnMod=0,C={x:void 0,y:void 0,w:void 0,h:void 0,ln:void 0},T=1,this.printHeaders=S,this.margins=_,this.setFontSize(k),this.table_font_size=k,null==r)g=Object.keys(n[0]);else if(r[0]&&"string"!=typeof r[0])for(a=0,s=r.length;a<s;a+=1)o=r[a],g.push(o.name),m.push(o.prompt),y[o.name]=o.width*(19.049976/25.4);else g=r;if(x)for(p=function(t){return t[o]},a=0,s=g.length;a<s;a+=1){for(w[o=g[a]]=n.map(p),v.push(this.getTextDimensions(m[a]||o).w),u=0,h=(l=w[o]).length;u<h;u+=1)c=l[u],v.push(this.getTextDimensions(c).w);y[o]=I.arrayMax(v),v=[]}if(S){var A=this.calculateLineHeight(g,y,m.length?m:g);for(a=0,s=g.length;a<s;a+=1)o=g[a],b.push([t,e,y[o],A,String(m.length?m[a]:o)]);this.setTableHeaderRow(b),this.printHeaderRow(1,!1)}for(a=0,s=n.length;a<s;a+=1)for(f=n[a],A=this.calculateLineHeight(g,y,f),u=0,d=g.length;u<d;u+=1)o=g[u],this.cell(t,e,y[o],A,f[o],a+2,o.align);return this.lastCellPos=C,this.table_x=t,this.table_y=e,this},I.calculateLineHeight=function(t,e,n){for(var r,i=0,o=0;o<t.length;o++){n[r=t[o]]=this.splitTextToSize(String(n[r]),e[r]-3);var a=this.internal.getLineHeight()*n[r].length+3;i<a&&(i=a)}return i},I.setTableHeaderRow=function(t){this.tableHeaderRow=t},I.printHeaderRow=function(t,e){if(!this.tableHeaderRow)throw"Property tableHeaderRow does not exist.";var n,r,i,o;if(this.printingHeaderRow=!0,void 0!==h){var a=h(this,T);d(a[0],a[1],a[2],a[3],-1)}this.setFontStyle("bold");var s=[];for(i=0,o=this.tableHeaderRow.length;i<o;i+=1)this.setFillColor(200,200,200),n=this.tableHeaderRow[i],e&&(this.margins.top=13,n[1]=this.margins&&this.margins.top||0,s.push(n)),r=[].concat(n),this.cell.apply(this,r.concat(t));0<s.length&&this.setTableHeaderRow(s),this.setFontStyle("normal"),this.printingHeaderRow=!1},
/**
   * jsPDF Context2D PlugIn Copyright (c) 2014 Steven Spungin (TwelveTone LLC) steven@twelvetone.tv
   *
   * Licensed under the MIT License. http://opensource.org/licenses/mit-license
   */
function(t){t.events.push(["initialized",function(){((this.context2d.pdf=this).context2d.internal.pdf=this).context2d.ctx=new e,this.context2d.ctxStack=[],this.context2d.path=[]}]),t.context2d={pageWrapXEnabled:!1,pageWrapYEnabled:!1,pageWrapX:9999999,pageWrapY:9999999,ctx:new e,f2:function(t){return t.toFixed(2)},fillRect:function(t,e,n,r){if(!this._isFillTransparent()){t=this._wrapX(t),e=this._wrapY(e);var i=this._matrix_map_rect(this.ctx._transform,{x:t,y:e,w:n,h:r});this.pdf.rect(i.x,i.y,i.w,i.h,"f")}},strokeRect:function(t,e,n,r){if(!this._isStrokeTransparent()){t=this._wrapX(t),e=this._wrapY(e);var i=this._matrix_map_rect(this.ctx._transform,{x:t,y:e,w:n,h:r});this.pdf.rect(i.x,i.y,i.w,i.h,"s")}},clearRect:function(t,e,n,r){if(!this.ctx.ignoreClearRect){t=this._wrapX(t),e=this._wrapY(e);var i=this._matrix_map_rect(this.ctx._transform,{x:t,y:e,w:n,h:r});this.save(),this.setFillStyle("#ffffff"),this.pdf.rect(i.x,i.y,i.w,i.h,"f"),this.restore()}},save:function(){this.ctx._fontSize=this.pdf.internal.getFontSize();var t=new e;t.copy(this.ctx),this.ctxStack.push(this.ctx),this.ctx=t},restore:function(){this.ctx=this.ctxStack.pop(),this.setFillStyle(this.ctx.fillStyle),this.setStrokeStyle(this.ctx.strokeStyle),this.setFont(this.ctx.font),this.pdf.setFontSize(this.ctx._fontSize),this.setLineCap(this.ctx.lineCap),this.setLineWidth(this.ctx.lineWidth),this.setLineJoin(this.ctx.lineJoin)},rect:function(t,e,n,r){this.moveTo(t,e),this.lineTo(t+n,e),this.lineTo(t+n,e+r),this.lineTo(t,e+r),this.lineTo(t,e),this.closePath()},beginPath:function(){this.path=[]},closePath:function(){this.path.push({type:"close"})},_getRGBA:function(t){var e,n,r,i,o=new RGBColor(t);if(!t)return{r:0,g:0,b:0,a:0,style:t};if(this.internal.rxTransparent.test(t))i=r=n=e=0;else{var a=this.internal.rxRgb.exec(t);null!=a?(e=parseInt(a[1]),n=parseInt(a[2]),r=parseInt(a[3]),i=1):null!=(a=this.internal.rxRgba.exec(t))?(e=parseInt(a[1]),n=parseInt(a[2]),r=parseInt(a[3]),i=parseFloat(a[4])):(i=1,"#"!=t.charAt(0)&&(t=o.ok?o.toHex():"#000000"),4===t.length?(e=t.substring(1,2),e+=e,n=t.substring(2,3),n+=n,r=t.substring(3,4),r+=r):(e=t.substring(1,3),n=t.substring(3,5),r=t.substring(5,7)),e=parseInt(e,16),n=parseInt(n,16),r=parseInt(r,16))}return{r:e,g:n,b:r,a:i,style:t}},setFillStyle:function(t){var e=this._getRGBA(t);this.ctx.fillStyle=t,this.ctx._isFillTransparent=0===e.a,this.ctx._fillOpacity=e.a,this.pdf.setFillColor(e.r,e.g,e.b,{a:e.a}),this.pdf.setTextColor(e.r,e.g,e.b,{a:e.a})},setStrokeStyle:function(t){var e=this._getRGBA(t);this.ctx.strokeStyle=e.style,this.ctx._isStrokeTransparent=0===e.a,this.ctx._strokeOpacity=e.a,0===e.a?this.pdf.setDrawColor(255,255,255):(e.a,this.pdf.setDrawColor(e.r,e.g,e.b))},fillText:function(t,e,n,r){if(!this._isFillTransparent()){e=this._wrapX(e),n=this._wrapY(n);var i=this._matrix_map_point(this.ctx._transform,[e,n]);e=i[0],n=i[1];var o=57.2958*this._matrix_rotation(this.ctx._transform);if(0<this.ctx._clip_path.length){var a;(a=window.outIntercept?"group"===window.outIntercept.type?window.outIntercept.stream:window.outIntercept:this.internal.getCurrentPage()).push("q");var s=this.path;this.path=this.ctx._clip_path,this.ctx._clip_path=[],this._fill(null,!0),this.ctx._clip_path=this.path,this.path=s}var h=1;try{h=this._matrix_decompose(this._getTransform()).scale[0]}catch(t){console.warn(t)}if(h<.01)this.pdf.text(t,e,this._getBaseline(n),null,o);else{var c=this.pdf.internal.getFontSize();this.pdf.setFontSize(c*h),this.pdf.text(t,e,this._getBaseline(n),null,o),this.pdf.setFontSize(c)}0<this.ctx._clip_path.length&&a.push("Q")}},strokeText:function(t,e,n,r){if(!this._isStrokeTransparent()){e=this._wrapX(e),n=this._wrapY(n);var i=this._matrix_map_point(this.ctx._transform,[e,n]);e=i[0],n=i[1];var o=57.2958*this._matrix_rotation(this.ctx._transform);if(0<this.ctx._clip_path.length){var a;(a=window.outIntercept?"group"===window.outIntercept.type?window.outIntercept.stream:window.outIntercept:this.internal.getCurrentPage()).push("q");var s=this.path;this.path=this.ctx._clip_path,this.ctx._clip_path=[],this._fill(null,!0),this.ctx._clip_path=this.path,this.path=s}var h=1;try{h=this._matrix_decompose(this._getTransform()).scale[0]}catch(t){console.warn(t)}if(1===h)this.pdf.text(t,e,this._getBaseline(n),{stroke:!0},o);else{var c=this.pdf.internal.getFontSize();this.pdf.setFontSize(c*h),this.pdf.text(t,e,this._getBaseline(n),{stroke:!0},o),this.pdf.setFontSize(c)}0<this.ctx._clip_path.length&&a.push("Q")}},setFont:function(t){if(this.ctx.font=t,null!=(c=/\s*(\w+)\s+(\w+)\s+(\w+)\s+([\d\.]+)(px|pt|em)\s+(.*)?/.exec(t))){var e=c[1],n=(c[2],c[3]),r=c[4],i=c[5],o=c[6];r="px"===i?Math.floor(parseFloat(r)):"em"===i?Math.floor(parseFloat(r)*this.pdf.getFontSize()):Math.floor(parseFloat(r)),this.pdf.setFontSize(r),"bold"===n||"700"===n?this.pdf.setFontStyle("bold"):"italic"===e?this.pdf.setFontStyle("italic"):this.pdf.setFontStyle("normal"),l="bold"===n||"700"===n?"italic"===e?"bolditalic":"bold":"italic"===e?"italic":"normal";for(var a=o.toLowerCase().split(/\s*,\s*/),s="Times",h=0;h<a.length;h++){if(void 0!==this.pdf.internal.getFont(a[h],l,{noFallback:!0,disableWarning:!0})){s=a[h];break}if("bolditalic"===l&&void 0!==this.pdf.internal.getFont(a[h],"bold",{noFallback:!0,disableWarning:!0}))s=a[h],l="bold";else if(void 0!==this.pdf.internal.getFont(a[h],"normal",{noFallback:!0,disableWarning:!0})){s=a[h],l="normal";break}}this.pdf.setFont(s,l)}else{var c=/\s*(\d+)(pt|px|em)\s+([\w "]+)\s*([\w "]+)?/.exec(t);if(null!=c){var l,u=c[1],f=(c[2],c[3]);(l=c[4])||(l="normal"),u="em"===i?Math.floor(parseFloat(r)*this.pdf.getFontSize()):Math.floor(parseFloat(u)),this.pdf.setFontSize(u),this.pdf.setFont(f,l)}}},setTextBaseline:function(t){this.ctx.textBaseline=t},getTextBaseline:function(){return this.ctx.textBaseline},setTextAlign:function(t){this.ctx.textAlign=t},getTextAlign:function(){return this.ctx.textAlign},setLineWidth:function(t){this.ctx.lineWidth=t,this.pdf.setLineWidth(t)},setLineCap:function(t){this.ctx.lineCap=t,this.pdf.setLineCap(t)},setLineJoin:function(t){this.ctx.lineJoin=t,this.pdf.setLineJoin(t)},moveTo:function(t,e){t=this._wrapX(t),e=this._wrapY(e);var n=this._matrix_map_point(this.ctx._transform,[t,e]),r={type:"mt",x:t=n[0],y:e=n[1]};this.path.push(r)},_wrapX:function(t){return this.pageWrapXEnabled?t%this.pageWrapX:t},_wrapY:function(t){return this.pageWrapYEnabled?(this._gotoPage(this._page(t)),(t-this.lastBreak)%this.pageWrapY):t},transform:function(t,e,n,r,i,o){this.ctx._transform=this._matrix_multiply(this.ctx._transform,[t,e,n,r,i,o])},setTransform:function(t,e,n,r,i,o){this.ctx._transform=[t,e,n,r,i,o]},_getTransform:function(){return this.ctx._transform},lastBreak:0,pageBreaks:[],_page:function(t){if(this.pageWrapYEnabled){for(var e=this.lastBreak=0,n=0,r=0;r<this.pageBreaks.length;r++)if(t>=this.pageBreaks[r]){e++,0===this.lastBreak&&n++;var i=this.pageBreaks[r]-this.lastBreak;this.lastBreak=this.pageBreaks[r],n+=Math.floor(i/this.pageWrapY)}if(0===this.lastBreak)n+=Math.floor(t/this.pageWrapY)+1;return n+e}return this.pdf.internal.getCurrentPageInfo().pageNumber},_gotoPage:function(t){},lineTo:function(t,e){t=this._wrapX(t),e=this._wrapY(e);var n=this._matrix_map_point(this.ctx._transform,[t,e]),r={type:"lt",x:t=n[0],y:e=n[1]};this.path.push(r)},bezierCurveTo:function(t,e,n,r,i,o){var a;t=this._wrapX(t),e=this._wrapY(e),n=this._wrapX(n),r=this._wrapY(r),i=this._wrapX(i),o=this._wrapY(o),i=(a=this._matrix_map_point(this.ctx._transform,[i,o]))[0],o=a[1];var s={type:"bct",x1:t=(a=this._matrix_map_point(this.ctx._transform,[t,e]))[0],y1:e=a[1],x2:n=(a=this._matrix_map_point(this.ctx._transform,[n,r]))[0],y2:r=a[1],x:i,y:o};this.path.push(s)},quadraticCurveTo:function(t,e,n,r){var i;t=this._wrapX(t),e=this._wrapY(e),n=this._wrapX(n),r=this._wrapY(r),n=(i=this._matrix_map_point(this.ctx._transform,[n,r]))[0],r=i[1];var o={type:"qct",x1:t=(i=this._matrix_map_point(this.ctx._transform,[t,e]))[0],y1:e=i[1],x:n,y:r};this.path.push(o)},arc:function(t,e,n,r,i,o){if(t=this._wrapX(t),e=this._wrapY(e),!this._matrix_is_identity(this.ctx._transform)){var a=this._matrix_map_point(this.ctx._transform,[t,e]);t=a[0],e=a[1];var s=this._matrix_map_point(this.ctx._transform,[0,0]),h=this._matrix_map_point(this.ctx._transform,[0,n]);n=Math.sqrt(Math.pow(h[0]-s[0],2)+Math.pow(h[1]-s[1],2))}var c={type:"arc",x:t,y:e,radius:n,startAngle:r,endAngle:i,anticlockwise:o};this.path.push(c)},drawImage:function(t,e,n,r,i,o,a,s,h){void 0!==o&&(e=o,n=a,r=s,i=h),e=this._wrapX(e),n=this._wrapY(n);var c,l=this._matrix_map_rect(this.ctx._transform,{x:e,y:n,w:r,h:i}),u=(this._matrix_map_rect(this.ctx._transform,{x:o,y:a,w:s,h:h}),/data:image\/(\w+).*/i.exec(t));c=null!=u?u[1]:"png",this.pdf.addImage(t,c,l.x,l.y,l.w,l.h)},_matrix_multiply:function(t,e){var n=e[0],r=e[1],i=e[2],o=e[3],a=e[4],s=e[5],h=n*t[0]+r*t[2],c=i*t[0]+o*t[2],l=a*t[0]+s*t[2]+t[4];return r=n*t[1]+r*t[3],o=i*t[1]+o*t[3],s=a*t[1]+s*t[3]+t[5],[n=h,r,i=c,o,a=l,s]},_matrix_rotation:function(t){return Math.atan2(t[2],t[0])},_matrix_decompose:function(t){var e=t[0],n=t[1],r=t[2],i=t[3],o=Math.sqrt(e*e+n*n),a=(e/=o)*r+(n/=o)*i;r-=e*a,i-=n*a;var s=Math.sqrt(r*r+i*i);return a/=s,e*(i/=s)<n*(r/=s)&&(e=-e,n=-n,a=-a,o=-o),{scale:[o,0,0,s,0,0],translate:[1,0,0,1,t[4],t[5]],rotate:[e,n,-n,e,0,0],skew:[1,0,a,1,0,0]}},_matrix_map_point:function(t,e){var n=t[0],r=t[1],i=t[2],o=t[3],a=t[4],s=t[5],h=e[0],c=e[1];return[h*n+c*i+a,h*r+c*o+s]},_matrix_map_point_obj:function(t,e){var n=this._matrix_map_point(t,[e.x,e.y]);return{x:n[0],y:n[1]}},_matrix_map_rect:function(t,e){var n=this._matrix_map_point(t,[e.x,e.y]),r=this._matrix_map_point(t,[e.x+e.w,e.y+e.h]);return{x:n[0],y:n[1],w:r[0]-n[0],h:r[1]-n[1]}},_matrix_is_identity:function(t){return 1==t[0]&&(0==t[1]&&(0==t[2]&&(1==t[3]&&(0==t[4]&&0==t[5]))))},rotate:function(t){var e=[Math.cos(t),Math.sin(t),-Math.sin(t),Math.cos(t),0,0];this.ctx._transform=this._matrix_multiply(this.ctx._transform,e)},scale:function(t,e){var n=[t,0,0,e,0,0];this.ctx._transform=this._matrix_multiply(this.ctx._transform,n)},translate:function(t,e){var n=[1,0,0,1,t,e];this.ctx._transform=this._matrix_multiply(this.ctx._transform,n)},stroke:function(){if(0<this.ctx._clip_path.length){var t;(t=window.outIntercept?"group"===window.outIntercept.type?window.outIntercept.stream:window.outIntercept:this.internal.getCurrentPage()).push("q");var e=this.path;this.path=this.ctx._clip_path,this.ctx._clip_path=[],this._stroke(!0),this.ctx._clip_path=this.path,this.path=e,this._stroke(!1),t.push("Q")}else this._stroke(!1)},_stroke:function(t){if(t||!this._isStrokeTransparent()){for(var e=[],n=this.path,r=0;r<n.length;r++){var i=n[r];switch(i.type){case"mt":e.push({start:i,deltas:[],abs:[]});break;case"lt":var o=[i.x-n[r-1].x,i.y-n[r-1].y];e[e.length-1].deltas.push(o),e[e.length-1].abs.push(i);break;case"bct":o=[i.x1-n[r-1].x,i.y1-n[r-1].y,i.x2-n[r-1].x,i.y2-n[r-1].y,i.x-n[r-1].x,i.y-n[r-1].y];e[e.length-1].deltas.push(o);break;case"qct":var a=n[r-1].x+2/3*(i.x1-n[r-1].x),s=n[r-1].y+2/3*(i.y1-n[r-1].y),h=i.x+2/3*(i.x1-i.x),c=i.y+2/3*(i.y1-i.y),l=i.x,u=i.y;o=[a-n[r-1].x,s-n[r-1].y,h-n[r-1].x,c-n[r-1].y,l-n[r-1].x,u-n[r-1].y];e[e.length-1].deltas.push(o);break;case"arc":0==e.length&&e.push({start:{x:0,y:0},deltas:[],abs:[]}),e[e.length-1].arc=!0,Array.isArray(e[e.length-1].abs)&&e[e.length-1].abs.push(i)}}for(r=0;r<e.length;r++){var f;if(f=r==e.length-1?"s":null,e[r].arc)for(var d=e[r].abs,p=0;p<d.length;p++){var g=d[p],m=360*g.startAngle/(2*Math.PI),w=360*g.endAngle/(2*Math.PI),y=g.x,v=g.y;this.internal.arc2(this,y,v,g.radius,m,w,g.anticlockwise,f,t)}else{y=e[r].start.x,v=e[r].start.y;t?(this.pdf.lines(e[r].deltas,y,v,null,null),this.pdf.clip_fixed()):this.pdf.lines(e[r].deltas,y,v,null,f)}}}},_isFillTransparent:function(){return this.ctx._isFillTransparent||0==this.globalAlpha},_isStrokeTransparent:function(){return this.ctx._isStrokeTransparent||0==this.globalAlpha},fill:function(t){if(0<this.ctx._clip_path.length){var e;(e=window.outIntercept?"group"===window.outIntercept.type?window.outIntercept.stream:window.outIntercept:this.internal.getCurrentPage()).push("q");var n=this.path;this.path=this.ctx._clip_path,this.ctx._clip_path=[],this._fill(t,!0),this.ctx._clip_path=this.path,this.path=n,this._fill(t,!1),e.push("Q")}else this._fill(t,!1)},_fill:function(t,e){if(!this._isFillTransparent()){var n,r="function"==typeof this.pdf.internal.newObject2;n=window.outIntercept?"group"===window.outIntercept.type?window.outIntercept.stream:window.outIntercept:this.internal.getCurrentPage();var i=[],o=window.outIntercept;if(r)switch(this.ctx.globalCompositeOperation){case"normal":case"source-over":break;case"destination-in":case"destination-out":var a=this.pdf.internal.newStreamObject(),s=this.pdf.internal.newObject2();s.push("<</Type /ExtGState"),s.push("/SMask <</S /Alpha /G "+a.objId+" 0 R>>"),s.push(">>");var h="MASK"+s.objId;this.pdf.internal.addGraphicsState(h,s.objId);var c="/"+h+" gs";n.splice(0,0,"q"),n.splice(1,0,c),n.push("Q"),window.outIntercept=a;break;default:var l="/"+this.pdf.internal.blendModeMap[this.ctx.globalCompositeOperation.toUpperCase()];l&&this.pdf.internal.out(l+" gs")}var u=this.ctx.globalAlpha;if(this.ctx._fillOpacity<1&&(u=this.ctx._fillOpacity),r){var f=this.pdf.internal.newObject2();f.push("<</Type /ExtGState"),f.push("/CA "+u),f.push("/ca "+u),f.push(">>");h="GS_O_"+f.objId;this.pdf.internal.addGraphicsState(h,f.objId),this.pdf.internal.out("/"+h+" gs")}for(var d=this.path,p=0;p<d.length;p++){var g=d[p];switch(g.type){case"mt":i.push({start:g,deltas:[],abs:[]});break;case"lt":var m=[g.x-d[p-1].x,g.y-d[p-1].y];i[i.length-1].deltas.push(m),i[i.length-1].abs.push(g);break;case"bct":m=[g.x1-d[p-1].x,g.y1-d[p-1].y,g.x2-d[p-1].x,g.y2-d[p-1].y,g.x-d[p-1].x,g.y-d[p-1].y];i[i.length-1].deltas.push(m);break;case"qct":var w=d[p-1].x+2/3*(g.x1-d[p-1].x),y=d[p-1].y+2/3*(g.y1-d[p-1].y),v=g.x+2/3*(g.x1-g.x),b=g.y+2/3*(g.y1-g.y),x=g.x,S=g.y;m=[w-d[p-1].x,y-d[p-1].y,v-d[p-1].x,b-d[p-1].y,x-d[p-1].x,S-d[p-1].y];i[i.length-1].deltas.push(m);break;case"arc":0===i.length&&i.push({deltas:[],abs:[]}),i[i.length-1].arc=!0,Array.isArray(i[i.length-1].abs)&&i[i.length-1].abs.push(g);break;case"close":i.push({close:!0})}}for(p=0;p<i.length;p++){var k;if(p==i.length-1?(k="f","evenodd"===t&&(k+="*")):k=null,i[p].close)this.pdf.internal.out("h"),k&&this.pdf.internal.out(k);else if(i[p].arc){i[p].start&&this.internal.move2(this,i[p].start.x,i[p].start.y);for(var _=i[p].abs,A=0;A<_.length;A++){var I=_[A];if(void 0!==I.startAngle){var C=360*I.startAngle/(2*Math.PI),T=360*I.endAngle/(2*Math.PI),F=I.x,P=I.y;if(0===A&&this.internal.move2(this,F,P),this.internal.arc2(this,F,P,I.radius,C,T,I.anticlockwise,null,e),A===_.length-1&&i[p].start){F=i[p].start.x,P=i[p].start.y;this.internal.line2(E,F,P)}}else this.internal.line2(E,I.x,I.y)}}else{F=i[p].start.x,P=i[p].start.y;e?(this.pdf.lines(i[p].deltas,F,P,null,null),this.pdf.clip_fixed()):this.pdf.lines(i[p].deltas,F,P,null,k)}}window.outIntercept=o}},pushMask:function(){if("function"==typeof this.pdf.internal.newObject2){var t=this.pdf.internal.newStreamObject(),e=this.pdf.internal.newObject2();e.push("<</Type /ExtGState"),e.push("/SMask <</S /Alpha /G "+t.objId+" 0 R>>"),e.push(">>");var n="MASK"+e.objId;this.pdf.internal.addGraphicsState(n,e.objId);var r="/"+n+" gs";this.pdf.internal.out(r)}else console.log("jsPDF v2 not enabled")},clip:function(){if(0<this.ctx._clip_path.length)for(var t=0;t<this.path.length;t++)this.ctx._clip_path.push(this.path[t]);else this.ctx._clip_path=this.path;this.path=[]},measureText:function(n){var r=this.pdf;return{getWidth:function(){var t=r.internal.getFontSize(),e=r.getStringUnitWidth(n)*t/r.internal.scaleFactor;return e*=1.3333},get width(){return this.getWidth(n)}}},_getBaseline:function(t){var e=parseInt(this.pdf.internal.getFontSize()),n=.25*e;switch(this.ctx.textBaseline){case"bottom":return t-n;case"top":return t+e;case"hanging":return t+e-n;case"middle":return t+e/2-n;case"ideographic":return t;case"alphabetic":default:return t}}};var E=t.context2d;function e(){this._isStrokeTransparent=!1,this._strokeOpacity=1,this.strokeStyle="#000000",this.fillStyle="#000000",this._isFillTransparent=!1,this._fillOpacity=1,this.font="12pt times",this.textBaseline="alphabetic",this.textAlign="start",this.lineWidth=1,this.lineJoin="miter",this.lineCap="butt",this._transform=[1,0,0,1,0,0],this.globalCompositeOperation="normal",this.globalAlpha=1,this._clip_path=[],this.ignoreClearRect=!1,this.copy=function(t){this._isStrokeTransparent=t._isStrokeTransparent,this._strokeOpacity=t._strokeOpacity,this.strokeStyle=t.strokeStyle,this._isFillTransparent=t._isFillTransparent,this._fillOpacity=t._fillOpacity,this.fillStyle=t.fillStyle,this.font=t.font,this.lineWidth=t.lineWidth,this.lineJoin=t.lineJoin,this.lineCap=t.lineCap,this.textBaseline=t.textBaseline,this.textAlign=t.textAlign,this._fontSize=t._fontSize,this._transform=t._transform.slice(0),this.globalCompositeOperation=t.globalCompositeOperation,this.globalAlpha=t.globalAlpha,this._clip_path=t._clip_path.slice(0),this.ignoreClearRect=t.ignoreClearRect}}Object.defineProperty(E,"fillStyle",{set:function(t){this.setFillStyle(t)},get:function(){return this.ctx.fillStyle}}),Object.defineProperty(E,"strokeStyle",{set:function(t){this.setStrokeStyle(t)},get:function(){return this.ctx.strokeStyle}}),Object.defineProperty(E,"lineWidth",{set:function(t){this.setLineWidth(t)},get:function(){return this.ctx.lineWidth}}),Object.defineProperty(E,"lineCap",{set:function(t){this.setLineCap(t)},get:function(){return this.ctx.lineCap}}),Object.defineProperty(E,"lineJoin",{set:function(t){this.setLineJoin(t)},get:function(){return this.ctx.lineJoin}}),Object.defineProperty(E,"miterLimit",{set:function(t){this.ctx.miterLimit=t},get:function(){return this.ctx.miterLimit}}),Object.defineProperty(E,"textBaseline",{set:function(t){this.setTextBaseline(t)},get:function(){return this.getTextBaseline()}}),Object.defineProperty(E,"textAlign",{set:function(t){this.setTextAlign(t)},get:function(){return this.getTextAlign()}}),Object.defineProperty(E,"font",{set:function(t){this.setFont(t)},get:function(){return this.ctx.font}}),Object.defineProperty(E,"globalCompositeOperation",{set:function(t){this.ctx.globalCompositeOperation=t},get:function(){return this.ctx.globalCompositeOperation}}),Object.defineProperty(E,"globalAlpha",{set:function(t){this.ctx.globalAlpha=t},get:function(){return this.ctx.globalAlpha}}),Object.defineProperty(E,"canvas",{get:function(){return{parentNode:!1,style:!1}}}),Object.defineProperty(E,"ignoreClearRect",{set:function(t){this.ctx.ignoreClearRect=t},get:function(){return this.ctx.ignoreClearRect}}),E.internal={},E.internal.rxRgb=/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/,E.internal.rxRgba=/rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d\.]+)\s*\)/,E.internal.rxTransparent=/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/,E.internal.arc=function(t,e,n,r,i,o,a,s){for(var h=this.pdf.internal.scaleFactor,c=this.pdf.internal.pageSize.getHeight(),l=this.pdf.internal.f2,u=i*(Math.PI/180),f=o*(Math.PI/180),d=this.createArc(r,u,f,a),p=0;p<d.length;p++){var g=d[p];0===p?this.pdf.internal.out([l((g.x1+e)*h),l((c-(g.y1+n))*h),"m",l((g.x2+e)*h),l((c-(g.y2+n))*h),l((g.x3+e)*h),l((c-(g.y3+n))*h),l((g.x4+e)*h),l((c-(g.y4+n))*h),"c"].join(" ")):this.pdf.internal.out([l((g.x2+e)*h),l((c-(g.y2+n))*h),l((g.x3+e)*h),l((c-(g.y3+n))*h),l((g.x4+e)*h),l((c-(g.y4+n))*h),"c"].join(" ")),t._lastPoint={x:e,y:n}}null!==s&&this.pdf.internal.out(this.pdf.internal.getStyle(s))},E.internal.arc2=function(t,e,n,r,i,o,a,s,h){var c=e,l=n;h?(this.arc(t,c,l,r,i,o,a,null),this.pdf.clip_fixed()):this.arc(t,c,l,r,i,o,a,s)},E.internal.move2=function(t,e,n){var r=this.pdf.internal.scaleFactor,i=this.pdf.internal.pageSize.getHeight(),o=this.pdf.internal.f2;this.pdf.internal.out([o(e*r),o((i-n)*r),"m"].join(" ")),t._lastPoint={x:e,y:n}},E.internal.line2=function(t,e,n){var r=this.pdf.internal.scaleFactor,i=this.pdf.internal.pageSize.getHeight(),o=this.pdf.internal.f2,a={x:e,y:n};this.pdf.internal.out([o(a.x*r),o((i-a.y)*r),"l"].join(" ")),t._lastPoint=a},E.internal.createArc=function(t,e,n,r){var i=2*Math.PI,o=Math.PI/2,a=e;for((a<i||i<a)&&(a%=i),a<0&&(a=i+a);n<e;)e-=i;var s=Math.abs(n-e);s<i&&r&&(s=i-s);for(var h=[],c=r?-1:1,l=a;1e-5<s;){var u=l+c*Math.min(s,o);h.push(this.createSmallArc(t,l,u)),s-=Math.abs(u-l),l=u}return h},E.internal.getCurrentPage=function(){return this.pdf.internal.pages[this.pdf.internal.getCurrentPageInfo().pageNumber]},E.internal.createSmallArc=function(t,e,n){var r=(n-e)/2,i=t*Math.cos(r),o=t*Math.sin(r),a=i,s=-o,h=a*a+s*s,c=h+a*i+s*o,l=4/3*(Math.sqrt(2*h*c)-c)/(a*o-s*i),u=a-l*s,f=s+l*a,d=u,p=-f,g=r+e,m=Math.cos(g),w=Math.sin(g);return{x1:t*Math.cos(e),y1:t*Math.sin(e),x2:u*m-f*w,y2:u*w+f*m,x3:d*m-p*w,y3:d*w+p*m,x4:t*Math.cos(n),y4:t*Math.sin(n)}}}($.API,"undefined"!=typeof self&&self||"undefined"!=typeof window&&window||"undefined"!=typeof __webpack_require__.g&&__webpack_require__.g||Function('return typeof this === "object" && this.content')()||Function("return this")()),
/** @preserve
   * jsPDF fromHTML plugin. BETA stage. API subject to change. Needs browser
   * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
   *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
   *               2014 Diego Casorran, https://github.com/diegocr
   *               2014 Daniel Husar, https://github.com/danielhusar
   *               2014 Wolfgang Gassler, https://github.com/woolfg
   *               2014 Steven Spungin, https://github.com/flamenco
   *
   * 
   * ====================================================================
   */
function(t){var T,F,i,a,s,h,c,l,P,v,f,u,d,n,E,q,p,g,m,O;T=function(){return function(t){return e.prototype=t,new e};function e(){}}(),v=function(t){var e,n,r,i,o,a,s;for(n=0,r=t.length,e=void 0,a=i=!1;!i&&n!==r;)(e=t[n]=t[n].trimLeft())&&(i=!0),n++;for(n=r-1;r&&!a&&-1!==n;)(e=t[n]=t[n].trimRight())&&(a=!0),n--;for(o=/\s+$/g,s=!0,n=0;n!==r;)"\u2028"!=t[n]&&(e=t[n].replace(/\s+/g," "),s&&(e=e.trimLeft()),e&&(s=o.test(e)),t[n]=e),n++;return t},u=function(t){var e,n,r;for(e=void 0,n=(r=t.split(",")).shift();!e&&n;)e=i[n.trim().toLowerCase()],n=r.shift();return e},d=function(t){var e;return-1<(t="auto"===t?"0px":t).indexOf("em")&&!isNaN(Number(t.replace("em","")))&&(t=18.719*Number(t.replace("em",""))+"px"),-1<t.indexOf("pt")&&!isNaN(Number(t.replace("pt","")))&&(t=1.333*Number(t.replace("pt",""))+"px"),void 0,16,(e=n[t])?e:void 0!==(e={"xx-small":9,"x-small":11,small:13,medium:16,large:19,"x-large":23,"xx-large":28,auto:0}[t])?n[t]=e/16:(e=parseFloat(t))?n[t]=e/16:(e=t.match(/([\d\.]+)(px)/),Array.isArray(e)&&3===e.length?n[t]=parseFloat(e[1])/16:n[t]=1)},P=function(t){var e,n,r,i,o;return o=t,i=document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(o,null):o.currentStyle?o.currentStyle:o.style,n=void 0,(e={})["font-family"]=u((r=function(t){return t=t.replace(/-\D/g,function(t){return t.charAt(1).toUpperCase()}),i[t]})("font-family"))||"times",e["font-style"]=a[r("font-style")]||"normal",e["text-align"]=s[r("text-align")]||"left","bold"===(n=h[r("font-weight")]||"normal")&&("normal"===e["font-style"]?e["font-style"]=n:e["font-style"]=n+e["font-style"]),e["font-size"]=d(r("font-size"))||1,e["line-height"]=d(r("line-height"))||1,e.display="inline"===r("display")?"inline":"block",n="block"===e.display,e["margin-top"]=n&&d(r("margin-top"))||0,e["margin-bottom"]=n&&d(r("margin-bottom"))||0,e["padding-top"]=n&&d(r("padding-top"))||0,e["padding-bottom"]=n&&d(r("padding-bottom"))||0,e["margin-left"]=n&&d(r("margin-left"))||0,e["margin-right"]=n&&d(r("margin-right"))||0,e["padding-left"]=n&&d(r("padding-left"))||0,e["padding-right"]=n&&d(r("padding-right"))||0,e["page-break-before"]=r("page-break-before")||"auto",e.float=c[r("cssFloat")]||"none",e.clear=l[r("clear")]||"none",e.color=r("color"),e},E=function(t,e,n){var r,i,o,a,s;if(o=!1,a=i=void 0,r=n["#"+t.id])if("function"==typeof r)o=r(t,e);else for(i=0,a=r.length;!o&&i!==a;)o=r[i](t,e),i++;if(r=n[t.nodeName],!o&&r)if("function"==typeof r)o=r(t,e);else for(i=0,a=r.length;!o&&i!==a;)o=r[i](t,e),i++;for(s="string"==typeof t.className?t.className.split(" "):[],i=0;i<s.length;i++)if(r=n["."+s[i]],!o&&r)if("function"==typeof r)o=r(t,e);else for(i=0,a=r.length;!o&&i!==a;)o=r[i](t,e),i++;return o},O=function(t,e){var n,r,i,o,a,s,h,c,l;for(n=[],r=[],i=0,l=t.rows[0].cells.length,h=t.clientWidth;i<l;)c=t.rows[0].cells[i],r[i]={name:c.textContent.toLowerCase().replace(/\s+/g,""),prompt:c.textContent.replace(/\r?\n/g,""),width:c.clientWidth/h*e.pdf.internal.pageSize.getWidth()},i++;for(i=1;i<t.rows.length;){for(s=t.rows[i],a={},o=0;o<s.cells.length;)a[r[o].name]=s.cells[o].textContent.replace(/\r?\n/g,""),o++;n.push(a),i++}return{rows:n,headers:r}};var B={SCRIPT:1,STYLE:1,NOSCRIPT:1,OBJECT:1,EMBED:1,SELECT:1},R=1;F=function(t,i,e){var n,r,o,a,s,h,c,l;for(r=t.childNodes,n=void 0,(s="block"===(o=P(t)).display)&&(i.setBlockBoundary(),i.setBlockStyle(o)),a=0,h=r.length;a<h;){if("object"===(void 0===(n=r[a])?"undefined":vt(n))){if(i.executeWatchFunctions(n),1===n.nodeType&&"HEADER"===n.nodeName){var u=n,f=i.pdf.margins_doc.top;i.pdf.internal.events.subscribe("addPage",function(t){i.y=f,F(u,i,e),i.pdf.margins_doc.top=i.y+10,i.y+=10},!1)}if(8===n.nodeType&&"#comment"===n.nodeName)~n.textContent.indexOf("ADD_PAGE")&&(i.pdf.addPage(),i.y=i.pdf.margins_doc.top);else if(1!==n.nodeType||B[n.nodeName])if(3===n.nodeType){var d=n.nodeValue;if(n.nodeValue&&"LI"===n.parentNode.nodeName)if("OL"===n.parentNode.parentNode.nodeName)d=R+++". "+d;else{var p=o["font-size"],g=(3-.75*p)*i.pdf.internal.scaleFactor,m=.75*p*i.pdf.internal.scaleFactor,w=1.74*p/i.pdf.internal.scaleFactor;l=function(t,e){this.pdf.circle(t+g,e+m,w,"FD")}}16&n.ownerDocument.body.compareDocumentPosition(n)&&i.addText(d,o)}else"string"==typeof n&&i.addText(n,o);else{var y;if("IMG"===n.nodeName){var v=n.getAttribute("src");y=q[i.pdf.sHashCode(v)||v]}if(y){i.pdf.internal.pageSize.getHeight()-i.pdf.margins_doc.bottom<i.y+n.height&&i.y>i.pdf.margins_doc.top&&(i.pdf.addPage(),i.y=i.pdf.margins_doc.top,i.executeWatchFunctions(n));var b=P(n),x=i.x,S=12/i.pdf.internal.scaleFactor,k=(b["margin-left"]+b["padding-left"])*S,_=(b["margin-right"]+b["padding-right"])*S,A=(b["margin-top"]+b["padding-top"])*S,I=(b["margin-bottom"]+b["padding-bottom"])*S;void 0!==b.float&&"right"===b.float?x+=i.settings.width-n.width-_:x+=k,i.pdf.addImage(y,x,i.y+A,n.width,n.height),y=void 0,"right"===b.float||"left"===b.float?(i.watchFunctions.push(function(t,e,n,r){return i.y>=e?(i.x+=t,i.settings.width+=n,!0):!!(r&&1===r.nodeType&&!B[r.nodeName]&&i.x+r.width>i.pdf.margins_doc.left+i.pdf.margins_doc.width)&&(i.x+=t,i.y=e,i.settings.width+=n,!0)}.bind(this,"left"===b.float?-n.width-k-_:0,i.y+n.height+A+I,n.width)),i.watchFunctions.push(function(t,e,n){return!(i.y<t&&e===i.pdf.internal.getNumberOfPages())||1===n.nodeType&&"both"===P(n).clear&&(i.y=t,!0)}.bind(this,i.y+n.height,i.pdf.internal.getNumberOfPages())),i.settings.width-=n.width+k+_,"left"===b.float&&(i.x+=n.width+k+_)):i.y+=n.height+A+I}else if("TABLE"===n.nodeName)c=O(n,i),i.y+=10,i.pdf.table(i.x,i.y,c.rows,c.headers,{autoSize:!1,printHeaders:e.printHeaders,margins:i.pdf.margins_doc,css:P(n)}),i.y=i.pdf.lastCellPos.y+i.pdf.lastCellPos.h+20;else if("OL"===n.nodeName||"UL"===n.nodeName)R=1,E(n,i,e)||F(n,i,e),i.y+=10;else if("LI"===n.nodeName){var C=i.x;i.x+=20/i.pdf.internal.scaleFactor,i.y+=3,E(n,i,e)||F(n,i,e),i.x=C}else"BR"===n.nodeName?(i.y+=o["font-size"]*i.pdf.internal.scaleFactor,i.addText("\u2028",T(o))):E(n,i,e)||F(n,i,e)}}a++}if(e.outY=i.y,s)return i.setBlockBoundary(l)},q={},p=function(t,o,e,n){var a,r=t.getElementsByTagName("img"),i=r.length,s=0;function h(){o.pdf.internal.events.publish("imagesLoaded"),n(a)}function c(e,n,r){if(e){var i=new Image;a=++s,i.crossOrigin="",i.onerror=i.onload=function(){if(i.complete&&(0===i.src.indexOf("data:image/")&&(i.width=n||i.width||0,i.height=r||i.height||0),i.width+i.height)){var t=o.pdf.sHashCode(e)||e;q[t]=q[t]||i}--s||h()},i.src=e}}for(;i--;)c(r[i].getAttribute("src"),r[i].width,r[i].height);return s||h()},g=function(t,o,a){var s=t.getElementsByTagName("footer");if(0<s.length){s=s[0];var e=o.pdf.internal.write,n=o.y;o.pdf.internal.write=function(){},F(s,o,a);var h=Math.ceil(o.y-n)+5;o.y=n,o.pdf.internal.write=e,o.pdf.margins_doc.bottom+=h;for(var r=function(t){var e=void 0!==t?t.pageNumber:1,n=o.y;o.y=o.pdf.internal.pageSize.getHeight()-o.pdf.margins_doc.bottom,o.pdf.margins_doc.bottom-=h;for(var r=s.getElementsByTagName("span"),i=0;i<r.length;++i)-1<(" "+r[i].className+" ").replace(/[\n\t]/g," ").indexOf(" pageCounter ")&&(r[i].innerHTML=e),-1<(" "+r[i].className+" ").replace(/[\n\t]/g," ").indexOf(" totalPages ")&&(r[i].innerHTML="###jsPDFVarTotalPages###");F(s,o,a),o.pdf.margins_doc.bottom+=h,o.y=n},i=s.getElementsByTagName("span"),c=0;c<i.length;++c)-1<(" "+i[c].className+" ").replace(/[\n\t]/g," ").indexOf(" totalPages ")&&o.pdf.internal.events.subscribe("htmlRenderingFinished",o.pdf.putTotalPages.bind(o.pdf,"###jsPDFVarTotalPages###"),!0);o.pdf.internal.events.subscribe("addPage",r,!1),r(),B.FOOTER=1}},m=function(t,e,n,r,i,o){if(!e)return!1;var a,s,h,c;"string"==typeof e||e.parentNode||(e=""+e.innerHTML),"string"==typeof e&&(a=e.replace(/<\/?script[^>]*?>/gi,""),c="jsPDFhtmlText"+Date.now().toString()+(1e3*Math.random()).toFixed(0),(h=document.createElement("div")).style.cssText="position: absolute !important;clip: rect(1px 1px 1px 1px); /* IE6, IE7 */clip: rect(1px, 1px, 1px, 1px);padding:0 !important;border:0 !important;height: 1px !important;width: 1px !important; top:auto;left:-100px;overflow: hidden;",h.innerHTML='<iframe style="height:1px;width:1px" name="'+c+'" />',document.body.appendChild(h),(s=window.frames[c]).document.open(),s.document.writeln(a),s.document.close(),e=s.document.body);var l,u=new f(t,n,r,i);return p.call(this,e,u,i.elementHandlers,function(t){g(e,u,i.elementHandlers),F(e,u,i.elementHandlers),u.pdf.internal.events.publish("htmlRenderingFinished"),l=u.dispose(),"function"==typeof o?o(l):t&&console.error("jsPDF Warning: rendering issues? provide a callback to fromHTML!")}),l||{x:u.x,y:u.y}},(f=function(t,e,n,r){return this.pdf=t,this.x=e,this.y=n,this.settings=r,this.watchFunctions=[],this.init(),this}).prototype.init=function(){return this.paragraph={text:[],style:[]},this.pdf.internal.write("q")},f.prototype.dispose=function(){return this.pdf.internal.write("Q"),{x:this.x,y:this.y,ready:!0}},f.prototype.executeWatchFunctions=function(t){var e=!1,n=[];if(0<this.watchFunctions.length){for(var r=0;r<this.watchFunctions.length;++r)!0===this.watchFunctions[r](t)?e=!0:n.push(this.watchFunctions[r]);this.watchFunctions=n}return e},f.prototype.splitFragmentsIntoLines=function(t,e){var n,r,i,o,a,s,h,c,l,u,f,d,p,g;for(12,u=this.pdf.internal.scaleFactor,o={},s=h=c=g=a=i=l=r=void 0,d=[f=[]],n=0,p=this.settings.width;t.length;)if(a=t.shift(),g=e.shift(),a)if((i=o[(r=g["font-family"])+(l=g["font-style"])])||(i=this.pdf.internal.getFont(r,l).metadata.Unicode,o[r+l]=i),c={widths:i.widths,kerning:i.kerning,fontSize:12*g["font-size"],textIndent:n},h=this.pdf.getStringUnitWidth(a,c)*c.fontSize/u,"\u2028"==a)f=[],d.push(f);else if(p<n+h){for(s=this.pdf.splitTextToSize(a,p,c),f.push([s.shift(),g]);s.length;)f=[[s.shift(),g]],d.push(f);n=this.pdf.getStringUnitWidth(f[0][0],c)*c.fontSize/u}else f.push([a,g]),n+=h;if(void 0!==g["text-align"]&&("center"===g["text-align"]||"right"===g["text-align"]||"justify"===g["text-align"]))for(var m=0;m<d.length;++m){var w=this.pdf.getStringUnitWidth(d[m][0][0],c)*c.fontSize/u;0<m&&(d[m][0][1]=T(d[m][0][1]));var y=p-w;if("right"===g["text-align"])d[m][0][1]["margin-left"]=y;else if("center"===g["text-align"])d[m][0][1]["margin-left"]=y/2;else if("justify"===g["text-align"]){var v=d[m][0][0].split(" ").length-1;d[m][0][1]["word-spacing"]=y/v,m===d.length-1&&(d[m][0][1]["word-spacing"]=0)}}return d},f.prototype.RenderTextFragment=function(t,e){var n,r;r=0,this.pdf.internal.pageSize.getHeight()-this.pdf.margins_doc.bottom<this.y+this.pdf.internal.getFontSize()&&(this.pdf.internal.write("ET","Q"),this.pdf.addPage(),this.y=this.pdf.margins_doc.top,this.pdf.internal.write("q","BT",this.getPdfColor(e.color),this.pdf.internal.getCoordinateString(this.x),this.pdf.internal.getVerticalCoordinateString(this.y),"Td"),r=Math.max(r,e["line-height"],e["font-size"]),this.pdf.internal.write(0,(-12*r).toFixed(2),"Td")),n=this.pdf.internal.getFont(e["font-family"],e["font-style"]);var i=this.getPdfColor(e.color);i!==this.lastTextColor&&(this.pdf.internal.write(i),this.lastTextColor=i),void 0!==e["word-spacing"]&&0<e["word-spacing"]&&this.pdf.internal.write(e["word-spacing"].toFixed(2),"Tw"),this.pdf.internal.write("/"+n.id,(12*e["font-size"]).toFixed(2),"Tf","("+this.pdf.internal.pdfEscape(t)+") Tj"),void 0!==e["word-spacing"]&&this.pdf.internal.write(0,"Tw")},f.prototype.getPdfColor=function(t){var e,n,r,i=new RGBColor(t),o=/rgb\s*\(\s*(\d+),\s*(\d+),\s*(\d+\s*)\)/.exec(t);if(null!=o?(e=parseInt(o[1]),n=parseInt(o[2]),r=parseInt(o[3])):("#"!=t.charAt(0)&&(t=i.ok?i.toHex():"#000000"),e=t.substring(1,3),e=parseInt(e,16),n=t.substring(3,5),n=parseInt(n,16),r=t.substring(5,7),r=parseInt(r,16)),"string"==typeof e&&/^#[0-9A-Fa-f]{6}$/.test(e)){var a=parseInt(e.substr(1),16);e=a>>16&255,n=a>>8&255,r=255&a}var s=this.f3;return 0===e&&0===n&&0===r||void 0===n?s(e/255)+" g":[s(e/255),s(n/255),s(r/255),"rg"].join(" ")},f.prototype.f3=function(t){return t.toFixed(3)},f.prototype.renderParagraph=function(t){var e,n,r,i,o,a,s,h,c,l,u,f,d;if(r=v(this.paragraph.text),f=this.paragraph.style,e=this.paragraph.blockstyle,this.paragraph.priorblockstyle||{},this.paragraph={text:[],style:[],blockstyle:{},priorblockstyle:e},r.join("").trim()){s=this.splitFragmentsIntoLines(r,f),h=a=void 0,n=12/this.pdf.internal.scaleFactor,this.priorMarginBottom=this.priorMarginBottom||0,u=(Math.max((e["margin-top"]||0)-this.priorMarginBottom,0)+(e["padding-top"]||0))*n,l=((e["margin-bottom"]||0)+(e["padding-bottom"]||0))*n,this.priorMarginBottom=e["margin-bottom"]||0,"always"===e["page-break-before"]&&(this.pdf.addPage(),this.y=0,u=((e["margin-top"]||0)+(e["padding-top"]||0))*n),c=this.pdf.internal.write,o=i=void 0,this.y+=u,c("q","BT 0 g",this.pdf.internal.getCoordinateString(this.x),this.pdf.internal.getVerticalCoordinateString(this.y),"Td");for(var p=0;s.length;){for(i=h=0,o=(a=s.shift()).length;i!==o;)a[i][0].trim()&&(h=Math.max(h,a[i][1]["line-height"],a[i][1]["font-size"]),d=7*a[i][1]["font-size"]),i++;var g=0,m=0;for(void 0!==a[0][1]["margin-left"]&&0<a[0][1]["margin-left"]&&(g=(m=this.pdf.internal.getCoordinateString(a[0][1]["margin-left"]))-p,p=m),c(g+Math.max(e["margin-left"]||0,0)*n,(-12*h).toFixed(2),"Td"),i=0,o=a.length;i!==o;)a[i][0]&&this.RenderTextFragment(a[i][0],a[i][1]),i++;if(this.y+=h*n,this.executeWatchFunctions(a[0][1])&&0<s.length){var w=[],y=[];s.forEach(function(t){for(var e=0,n=t.length;e!==n;)t[e][0]&&(w.push(t[e][0]+" "),y.push(t[e][1])),++e}),s=this.splitFragmentsIntoLines(v(w),y),c("ET","Q"),c("q","BT 0 g",this.pdf.internal.getCoordinateString(this.x),this.pdf.internal.getVerticalCoordinateString(this.y),"Td")}}return t&&"function"==typeof t&&t.call(this,this.x-9,this.y-d/2),c("ET","Q"),this.y+=l}},f.prototype.setBlockBoundary=function(t){return this.renderParagraph(t)},f.prototype.setBlockStyle=function(t){return this.paragraph.blockstyle=t},f.prototype.addText=function(t,e){return this.paragraph.text.push(t),this.paragraph.style.push(e)},i={helvetica:"helvetica","sans-serif":"helvetica","times new roman":"times",serif:"times",times:"times",monospace:"courier",courier:"courier"},h={100:"normal",200:"normal",300:"normal",400:"normal",500:"bold",600:"bold",700:"bold",800:"bold",900:"bold",normal:"normal",bold:"bold",bolder:"bold",lighter:"normal"},a={normal:"normal",italic:"italic",oblique:"italic"},s={left:"left",right:"right",center:"center",justify:"justify"},c={none:"none",right:"right",left:"left"},l={none:"none",both:"both"},n={normal:1},t.fromHTML=function(t,e,n,r,i,o){return this.margins_doc=o||{top:0,bottom:0},r||(r={}),r.elementHandlers||(r.elementHandlers={}),m(this,t,isNaN(e)?4:e,isNaN(n)?4:n,r,i)}}($.API),$.API.addJS=function(t){return s=t,this.internal.events.subscribe("postPutResources",function(t){n=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/Names [(EmbeddedJS) "+(n+1)+" 0 R]"),this.internal.out(">>"),this.internal.out("endobj"),r=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/S /JavaScript"),this.internal.out("/JS ("+s+")"),this.internal.out(">>"),this.internal.out("endobj")}),this.internal.events.subscribe("putCatalog",function(){void 0!==n&&void 0!==r&&this.internal.out("/Names <</JavaScript "+n+" 0 R>>")}),this},(
/**
   * jsPDF Outline PlugIn
   * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
   *
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */
c=$.API).events.push(["postPutResources",function(){var t=this,e=/^(\d+) 0 obj$/;if(0<this.outline.root.children.length)for(var n=t.outline.render().split(/\r\n/),r=0;r<n.length;r++){var i=n[r],o=e.exec(i);if(null!=o){var a=o[1];t.internal.newObjectDeferredBegin(a)}t.internal.write(i)}if(this.outline.createNamedDestinations){var s=this.internal.pages.length,h=[];for(r=0;r<s;r++){var c=t.internal.newObject();h.push(c);var l=t.internal.getPageInfo(r+1);t.internal.write("<< /D["+l.objId+" 0 R /XYZ null null null]>> endobj")}var u=t.internal.newObject();for(t.internal.write("<< /Names [ "),r=0;r<h.length;r++)t.internal.write("(page_"+(r+1)+")"+h[r]+" 0 R");t.internal.write(" ] >>","endobj"),t.internal.newObject(),t.internal.write("<< /Dests "+u+" 0 R"),t.internal.write(">>","endobj")}}]),c.events.push(["putCatalog",function(){0<this.outline.root.children.length&&(this.internal.write("/Outlines",this.outline.makeRef(this.outline.root)),this.outline.createNamedDestinations&&this.internal.write("/Names "+namesOid+" 0 R"))}]),c.events.push(["initialized",function(){var o=this;o.outline={createNamedDestinations:!1,root:{children:[]}},o.outline.add=function(t,e,n){var r={title:e,options:n,children:[]};return null==t&&(t=this.root),t.children.push(r),r},o.outline.render=function(){return this.ctx={},this.ctx.val="",this.ctx.pdf=o,this.genIds_r(this.root),this.renderRoot(this.root),this.renderItems(this.root),this.ctx.val},o.outline.genIds_r=function(t){t.id=o.internal.newObjectDeferred();for(var e=0;e<t.children.length;e++)this.genIds_r(t.children[e])},o.outline.renderRoot=function(t){this.objStart(t),this.line("/Type /Outlines"),0<t.children.length&&(this.line("/First "+this.makeRef(t.children[0])),this.line("/Last "+this.makeRef(t.children[t.children.length-1]))),this.line("/Count "+this.count_r({count:0},t)),this.objEnd()},o.outline.renderItems=function(t){for(var e=0;e<t.children.length;e++){var n=t.children[e];this.objStart(n),this.line("/Title "+this.makeString(n.title)),this.line("/Parent "+this.makeRef(t)),0<e&&this.line("/Prev "+this.makeRef(t.children[e-1])),e<t.children.length-1&&this.line("/Next "+this.makeRef(t.children[e+1])),0<n.children.length&&(this.line("/First "+this.makeRef(n.children[0])),this.line("/Last "+this.makeRef(n.children[n.children.length-1])));var r=this.count=this.count_r({count:0},n);if(0<r&&this.line("/Count "+r),n.options&&n.options.pageNumber){var i=o.internal.getPageInfo(n.options.pageNumber);this.line("/Dest ["+i.objId+" 0 R /XYZ 0 "+this.ctx.pdf.internal.pageSize.getHeight()*this.ctx.pdf.internal.scaleFactor+" 0]")}this.objEnd()}for(e=0;e<t.children.length;e++)n=t.children[e],this.renderItems(n)},o.outline.line=function(t){this.ctx.val+=t+"\r\n"},o.outline.makeRef=function(t){return t.id+" 0 R"},o.outline.makeString=function(t){return"("+o.internal.pdfEscape(t)+")"},o.outline.objStart=function(t){this.ctx.val+="\r\n"+t.id+" 0 obj\r\n<<\r\n"},o.outline.objEnd=function(t){this.ctx.val+=">> \r\nendobj\r\n"},o.outline.count_r=function(t,e){for(var n=0;n<e.children.length;n++)t.count++,this.count_r(t,e.children[n]);return t.count}}]),
/**@preserve
   *  ====================================================================
   * jsPDF PNG PlugIn
   * Copyright (c) 2014 James Robb, https://github.com/jamesbrobb
   *
   * 
   * ====================================================================
   */
P=$.API,E=function(){var t="function"==typeof Deflater;if(!t)throw new Error("requires deflate.js for compression");return t},q=function(t,e,n,r){var i=5,o=b;switch(r){case P.image_compression.FAST:i=3,o=v;break;case P.image_compression.MEDIUM:i=6,o=x;break;case P.image_compression.SLOW:i=9,o=S}t=w(t,e,n,o);var a=new Uint8Array(g(i)),s=m(t),h=new Deflater(i),c=h.append(t),l=h.flush(),u=a.length+c.length+l.length,f=new Uint8Array(u+4);return f.set(a),f.set(c,a.length),f.set(l,a.length+c.length),f[u++]=s>>>24&255,f[u++]=s>>>16&255,f[u++]=s>>>8&255,f[u++]=255&s,P.arrayBufferToBinaryString(f)},g=function(t,e){var n=Math.LOG2E*Math.log(32768)-8<<4|8,r=n<<8;return r|=Math.min(3,(e-1&255)>>1)<<6,r|=0,[n,255&(r+=31-r%31)]},m=function(t,e){for(var n,r=1,i=0,o=t.length,a=0;0<o;){for(o-=n=e<o?e:o;i+=r+=t[a++],--n;);r%=65521,i%=65521}return(i<<16|r)>>>0},w=function(t,e,n,r){for(var i,o,a,s=t.length/e,h=new Uint8Array(t.length+s),c=k(),l=0;l<s;l++){if(a=l*e,i=t.subarray(a,a+e),r)h.set(r(i,n,o),a+l);else{for(var u=0,f=c.length,d=[];u<f;u++)d[u]=c[u](i,n,o);var p=_(d.concat());h.set(d[p],a+l)}o=i}return h},l=function(t,e,n){var r=Array.apply([],t);return r.unshift(0),r},v=function(t,e,n){var r,i=[],o=0,a=t.length;for(i[0]=1;o<a;o++)r=t[o-e]||0,i[o+1]=t[o]-r+256&255;return i},b=function(t,e,n){var r,i=[],o=0,a=t.length;for(i[0]=2;o<a;o++)r=n&&n[o]||0,i[o+1]=t[o]-r+256&255;return i},x=function(t,e,n){var r,i,o=[],a=0,s=t.length;for(o[0]=3;a<s;a++)r=t[a-e]||0,i=n&&n[a]||0,o[a+1]=t[a]+256-(r+i>>>1)&255;return o},S=function(t,e,n){var r,i,o,a,s=[],h=0,c=t.length;for(s[0]=4;h<c;h++)r=t[h-e]||0,i=n&&n[h]||0,o=n&&n[h-e]||0,a=u(r,i,o),s[h+1]=t[h]-a+256&255;return s},u=function(t,e,n){var r=t+e-n,i=Math.abs(r-t),o=Math.abs(r-e),a=Math.abs(r-n);return i<=o&&i<=a?t:o<=a?e:n},k=function(){return[l,v,b,x,S]},_=function(t){for(var e,n,r,i=0,o=t.length;i<o;)((e=f(t[i].slice(1)))<n||!n)&&(n=e,r=i),i++;return r},f=function(t){for(var e=0,n=t.length,r=0;e<n;)r+=Math.abs(t[e++]);return r},P.processPNG=function(t,e,n,r,i){var o,a,s,h,c,l,u=this.color_spaces.DEVICE_RGB,f=this.decode.FLATE_DECODE,d=8;if(this.isArrayBuffer(t)&&(t=new Uint8Array(t)),this.isArrayBufferView(t)){if("function"!=typeof PNG||"function"!=typeof kt)throw new Error("PNG support requires png.js and zlib.js");if(t=(o=new PNG(t)).imgData,d=o.bits,u=o.colorSpace,h=o.colors,-1!==[4,6].indexOf(o.colorType)){if(8===o.bits)for(var p,g=(I=32==o.pixelBitlength?new Uint32Array(o.decodePixels().buffer):16==o.pixelBitlength?new Uint16Array(o.decodePixels().buffer):new Uint8Array(o.decodePixels().buffer)).length,m=new Uint8Array(g*o.colors),w=new Uint8Array(g),y=o.pixelBitlength-o.bits,v=0,b=0;v<g;v++){for(x=I[v],p=0;p<y;)m[b++]=x>>>p&255,p+=o.bits;w[v]=x>>>p&255}if(16===o.bits){g=(I=new Uint32Array(o.decodePixels().buffer)).length,m=new Uint8Array(g*(32/o.pixelBitlength)*o.colors),w=new Uint8Array(g*(32/o.pixelBitlength));for(var x,S=1<o.colors,k=b=v=0;v<g;)x=I[v++],m[b++]=x>>>0&255,S&&(m[b++]=x>>>16&255,x=I[v++],m[b++]=x>>>0&255),w[k++]=x>>>16&255;d=8}r!==P.image_compression.NONE&&E()?(t=q(m,o.width*o.colors,o.colors,r),l=q(w,o.width,1,r)):(t=m,l=w,f=null)}if(3===o.colorType&&(u=this.color_spaces.INDEXED,c=o.palette,o.transparency.indexed)){var _=o.transparency.indexed,A=0;for(v=0,g=_.length;v<g;++v)A+=_[v];if((A/=255)==g-1&&-1!==_.indexOf(0))s=[_.indexOf(0)];else if(A!==g){var I=o.decodePixels();for(w=new Uint8Array(I.length),v=0,g=I.length;v<g;v++)w[v]=_[I[v]];l=q(w,o.width,1)}}var C=function(t){var e;switch(t){case P.image_compression.FAST:e=11;break;case P.image_compression.MEDIUM:e=13;break;case P.image_compression.SLOW:e=14;break;default:e=12}return e}(r);return a=f===this.decode.FLATE_DECODE?"/Predictor "+C+" /Colors "+h+" /BitsPerComponent "+d+" /Columns "+o.width:"/Colors "+h+" /BitsPerComponent "+d+" /Columns "+o.width,(this.isArrayBuffer(t)||this.isArrayBufferView(t))&&(t=this.arrayBufferToBinaryString(t)),(l&&this.isArrayBuffer(l)||this.isArrayBufferView(l))&&(l=this.arrayBufferToBinaryString(l)),this.createImageInfo(t,o.width,o.height,u,d,f,e,n,a,s,c,l,C)}throw new Error("Unsupported PNG image data, try using JPEG instead.")},(
/**
   * jsPDF gif Support PlugIn
   * Copyright (c) 2017 Aras Abbasi 
   *
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */
A=$.API).processGIF89A=function(t,e,n,r,i){var o=new mt(t),a=o.width,s=o.height,h=[];o.decodeAndBlitFrameRGBA(0,h);var c={data:h,width:a,height:s},l=new yt(100).encode(c,100);return A.processJPEG.call(this,l,e,n,r)},A.processGIF87A=A.processGIF89A,(
/**
   * jsPDF bmp Support PlugIn
   * Copyright (c) 2018 Aras Abbasi 
   *
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */
O=$.API).processBMP=function(t,e,n,r,i){var o=new xt(t,!1),a=o.width,s=o.height,h={data:o.getData(),width:a,height:s},c=new yt(100).encode(h,100);return O.processJPEG.call(this,c,e,n,r)},$.API.setLanguage=function(t){return void 0===this.internal.languageSettings&&(this.internal.languageSettings={},this.internal.languageSettings.isSubscribed=!1),void 0!=={af:"Afrikaans",sq:"Albanian",ar:"Arabic (Standard)","ar-DZ":"Arabic (Algeria)","ar-BH":"Arabic (Bahrain)","ar-EG":"Arabic (Egypt)","ar-IQ":"Arabic (Iraq)","ar-JO":"Arabic (Jordan)","ar-KW":"Arabic (Kuwait)","ar-LB":"Arabic (Lebanon)","ar-LY":"Arabic (Libya)","ar-MA":"Arabic (Morocco)","ar-OM":"Arabic (Oman)","ar-QA":"Arabic (Qatar)","ar-SA":"Arabic (Saudi Arabia)","ar-SY":"Arabic (Syria)","ar-TN":"Arabic (Tunisia)","ar-AE":"Arabic (U.A.E.)","ar-YE":"Arabic (Yemen)",an:"Aragonese",hy:"Armenian",as:"Assamese",ast:"Asturian",az:"Azerbaijani",eu:"Basque",be:"Belarusian",bn:"Bengali",bs:"Bosnian",br:"Breton",bg:"Bulgarian",my:"Burmese",ca:"Catalan",ch:"Chamorro",ce:"Chechen",zh:"Chinese","zh-HK":"Chinese (Hong Kong)","zh-CN":"Chinese (PRC)","zh-SG":"Chinese (Singapore)","zh-TW":"Chinese (Taiwan)",cv:"Chuvash",co:"Corsican",cr:"Cree",hr:"Croatian",cs:"Czech",da:"Danish",nl:"Dutch (Standard)","nl-BE":"Dutch (Belgian)",en:"English","en-AU":"English (Australia)","en-BZ":"English (Belize)","en-CA":"English (Canada)","en-IE":"English (Ireland)","en-JM":"English (Jamaica)","en-NZ":"English (New Zealand)","en-PH":"English (Philippines)","en-ZA":"English (South Africa)","en-TT":"English (Trinidad & Tobago)","en-GB":"English (United Kingdom)","en-US":"English (United States)","en-ZW":"English (Zimbabwe)",eo:"Esperanto",et:"Estonian",fo:"Faeroese",fj:"Fijian",fi:"Finnish",fr:"French (Standard)","fr-BE":"French (Belgium)","fr-CA":"French (Canada)","fr-FR":"French (France)","fr-LU":"French (Luxembourg)","fr-MC":"French (Monaco)","fr-CH":"French (Switzerland)",fy:"Frisian",fur:"Friulian",gd:"Gaelic (Scots)","gd-IE":"Gaelic (Irish)",gl:"Galacian",ka:"Georgian",de:"German (Standard)","de-AT":"German (Austria)","de-DE":"German (Germany)","de-LI":"German (Liechtenstein)","de-LU":"German (Luxembourg)","de-CH":"German (Switzerland)",el:"Greek",gu:"Gujurati",ht:"Haitian",he:"Hebrew",hi:"Hindi",hu:"Hungarian",is:"Icelandic",id:"Indonesian",iu:"Inuktitut",ga:"Irish",it:"Italian (Standard)","it-CH":"Italian (Switzerland)",ja:"Japanese",kn:"Kannada",ks:"Kashmiri",kk:"Kazakh",km:"Khmer",ky:"Kirghiz",tlh:"Klingon",ko:"Korean","ko-KP":"Korean (North Korea)","ko-KR":"Korean (South Korea)",la:"Latin",lv:"Latvian",lt:"Lithuanian",lb:"Luxembourgish",mk:"FYRO Macedonian",ms:"Malay",ml:"Malayalam",mt:"Maltese",mi:"Maori",mr:"Marathi",mo:"Moldavian",nv:"Navajo",ng:"Ndonga",ne:"Nepali",no:"Norwegian",nb:"Norwegian (Bokmal)",nn:"Norwegian (Nynorsk)",oc:"Occitan",or:"Oriya",om:"Oromo",fa:"Persian","fa-IR":"Persian/Iran",pl:"Polish",pt:"Portuguese","pt-BR":"Portuguese (Brazil)",pa:"Punjabi","pa-IN":"Punjabi (India)","pa-PK":"Punjabi (Pakistan)",qu:"Quechua",rm:"Rhaeto-Romanic",ro:"Romanian","ro-MO":"Romanian (Moldavia)",ru:"Russian","ru-MO":"Russian (Moldavia)",sz:"Sami (Lappish)",sg:"Sango",sa:"Sanskrit",sc:"Sardinian",sd:"Sindhi",si:"Singhalese",sr:"Serbian",sk:"Slovak",sl:"Slovenian",so:"Somani",sb:"Sorbian",es:"Spanish","es-AR":"Spanish (Argentina)","es-BO":"Spanish (Bolivia)","es-CL":"Spanish (Chile)","es-CO":"Spanish (Colombia)","es-CR":"Spanish (Costa Rica)","es-DO":"Spanish (Dominican Republic)","es-EC":"Spanish (Ecuador)","es-SV":"Spanish (El Salvador)","es-GT":"Spanish (Guatemala)","es-HN":"Spanish (Honduras)","es-MX":"Spanish (Mexico)","es-NI":"Spanish (Nicaragua)","es-PA":"Spanish (Panama)","es-PY":"Spanish (Paraguay)","es-PE":"Spanish (Peru)","es-PR":"Spanish (Puerto Rico)","es-ES":"Spanish (Spain)","es-UY":"Spanish (Uruguay)","es-VE":"Spanish (Venezuela)",sx:"Sutu",sw:"Swahili",sv:"Swedish","sv-FI":"Swedish (Finland)","sv-SV":"Swedish (Sweden)",ta:"Tamil",tt:"Tatar",te:"Teluga",th:"Thai",tig:"Tigre",ts:"Tsonga",tn:"Tswana",tr:"Turkish",tk:"Turkmen",uk:"Ukrainian",hsb:"Upper Sorbian",ur:"Urdu",ve:"Venda",vi:"Vietnamese",vo:"Volapuk",wa:"Walloon",cy:"Welsh",xh:"Xhosa",ji:"Yiddish",zu:"Zulu"}[t]&&(this.internal.languageSettings.languageCode=t,!1===this.internal.languageSettings.isSubscribed&&(this.internal.events.subscribe("putCatalog",function(){this.internal.write("/Lang ("+this.internal.languageSettings.languageCode+")")}),this.internal.languageSettings.isSubscribed=!0)),this},
/** @preserve
   * jsPDF split_text_to_size plugin - MIT license.
   * Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
   *               2014 Diego Casorran, https://github.com/diegocr
   */
B=$.API,R=B.getCharWidthsArray=function(t,e){var n,r,i,o=(e=e||{}).font||this.internal.getFont(),a=e.fontSize||this.internal.getFontSize(),s=e.charSpace||this.internal.getCharSpace(),h=e.widths?e.widths:o.metadata.Unicode.widths,c=h.fof?h.fof:1,l=e.kerning?e.kerning:o.metadata.Unicode.kerning,u=l.fof?l.fof:1,f=0,d=h[0]||c,p=[];for(n=0,r=t.length;n<r;n++)i=t.charCodeAt(n),"function"==typeof o.metadata.widthOfString?p.push((o.metadata.widthOfGlyph(o.metadata.characterToGlyph(i))+s*(1e3/a)||0)/1e3):p.push((h[i]||d)/c+(l[i]&&l[i][f]||0)/u),f=i;return p},j=B.getArraySum=function(t){for(var e=t.length,n=0;e;)n+=t[--e];return n},D=B.getStringUnitWidth=function(t,e){var n=(e=e||{}).fontSize||this.internal.getFontSize(),r=e.font||this.internal.getFont(),i=e.charSpace||this.internal.getCharSpace();return"function"==typeof r.metadata.widthOfString?r.metadata.widthOfString(t,n,i)/n:j(R.apply(this,arguments))},M=function(t,e,n,r){for(var i=[],o=0,a=t.length,s=0;o!==a&&s+e[o]<n;)s+=e[o],o++;i.push(t.slice(0,o));var h=o;for(s=0;o!==a;)s+e[o]>r&&(i.push(t.slice(h,o)),s=0,h=o),s+=e[o],o++;return h!==o&&i.push(t.slice(h,o)),i},U=function(t,e,n){n||(n={});var r,i,o,a,s,h,c=[],l=[c],u=n.textIndent||0,f=0,d=0,p=t.split(" "),g=R.apply(this,[" ",n])[0];if(h=-1===n.lineIndent?p[0].length+2:n.lineIndent||0){var m=Array(h).join(" "),w=[];p.map(function(t){1<(t=t.split(/\s*\n/)).length?w=w.concat(t.map(function(t,e){return(e&&t.length?"\n":"")+t})):w.push(t[0])}),p=w,h=D.apply(this,[m,n])}for(o=0,a=p.length;o<a;o++){var y=0;if(r=p[o],h&&"\n"==r[0]&&(r=r.substr(1),y=1),i=R.apply(this,[r,n]),e<u+f+(d=j(i))||y){if(e<d){for(s=M.apply(this,[r,i,e-(u+f),e]),c.push(s.shift()),c=[s.pop()];s.length;)l.push([s.shift()]);d=j(i.slice(r.length-(c[0]?c[0].length:0)))}else c=[r];l.push(c),u=d+h,f=g}else c.push(r),u+=f+d,f=g}if(h)var v=function(t,e){return(e?m:"")+t.join(" ")};else v=function(t){return t.join(" ")};return l.map(v)},B.splitTextToSize=function(t,e,n){var r,i=(n=n||{}).fontSize||this.internal.getFontSize(),o=function(t){var e={0:1},n={};if(t.widths&&t.kerning)return{widths:t.widths,kerning:t.kerning};var r=this.internal.getFont(t.fontName,t.fontStyle),i="Unicode";return r.metadata[i]?{widths:r.metadata[i].widths||e,kerning:r.metadata[i].kerning||n}:{font:r.metadata,fontSize:this.internal.getFontSize(),charSpace:this.internal.getCharSpace()}}.call(this,n);r=Array.isArray(t)?t:t.split(/\r?\n/);var a=1*this.internal.scaleFactor*e/i;o.textIndent=n.textIndent?1*n.textIndent*this.internal.scaleFactor/i:0,o.lineIndent=n.lineIndent;var s,h,c=[];for(s=0,h=r.length;s<h;s++)c=c.concat(U.apply(this,[r[s],a,o]));return c},
/** @preserve 
  jsPDF standard_fonts_metrics plugin
  Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
  MIT license.
  */
N=$.API,L={codePages:["WinAnsiEncoding"],WinAnsiEncoding:(z=function(t){for(var e="klmnopqrstuvwxyz",n={},r=0;r<e.length;r++)n[e[r]]="0123456789abcdef"[r];var i,o,a,s,h,c={},l=1,u=c,f=[],d="",p="",g=t.length-1;for(r=1;r!=g;)h=t[r],r+=1,"'"==h?o?(s=o.join(""),o=i):o=[]:o?o.push(h):"{"==h?(f.push([u,s]),u={},s=i):"}"==h?((a=f.pop())[0][a[1]]=u,s=i,u=a[0]):"-"==h?l=-1:s===i?n.hasOwnProperty(h)?(d+=n[h],s=parseInt(d,16)*l,l=1,d=""):d+=h:n.hasOwnProperty(h)?(p+=n[h],u[s]=parseInt(p,16)*l,l=1,s=i,p=""):p+=h;return c})("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}")},H={Unicode:{Courier:L,"Courier-Bold":L,"Courier-BoldOblique":L,"Courier-Oblique":L,Helvetica:L,"Helvetica-Bold":L,"Helvetica-BoldOblique":L,"Helvetica-Oblique":L,"Times-Roman":L,"Times-Bold":L,"Times-BoldItalic":L,"Times-Italic":L}
/** 
    Resources:
    Font metrics data is reprocessed derivative of contents of
    "Font Metrics for PDF Core 14 Fonts" package, which exhibits the following copyright and license:
    
    Copyright (c) 1989, 1990, 1991, 1992, 1993, 1997 Adobe Systems Incorporated. All Rights Reserved.
    
    This file and the 14 PostScript(R) AFM files it accompanies may be used,
    copied, and distributed for any purpose and without charge, with or without
    modification, provided that all copyright notices are retained; that the AFM
    files are not distributed without this file; that all modifications to this
    file or any of the AFM files are prominently noted in the modified file(s);
    and that this paragraph is not modified. Adobe Systems has no responsibility
    or obligation to support the use of the AFM files.
    
    */},W={Unicode:{"Courier-Oblique":z("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-BoldItalic":z("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"),"Helvetica-Bold":z("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),Courier:z("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Courier-BoldOblique":z("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-Bold":z("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"),Symbol:z("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"),Helvetica:z("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"),"Helvetica-BoldOblique":z("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),ZapfDingbats:z("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"),"Courier-Bold":z("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-Italic":z("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"),"Times-Roman":z("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"),"Helvetica-Oblique":z("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}")}},N.events.push(["addFont",function(t){var e,n,r,i="Unicode";(e=W[i][t.postScriptName])&&((n=t.metadata[i]?t.metadata[i]:t.metadata[i]={}).widths=e.widths,n.kerning=e.kerning),(r=H[i][t.postScriptName])&&((n=t.metadata[i]?t.metadata[i]:t.metadata[i]={}).encoding=r).codePages&&r.codePages.length&&(t.encoding=r.codePages[0])}]),G=$,"undefined"!=typeof self&&self||"undefined"!=typeof __webpack_require__.g&&__webpack_require__.g||"undefined"!=typeof window&&window||Function("return this")(),G.API.events.push(["addFont",function(t){G.API.existsFileInVFS(t.postScriptName)?(t.metadata=G.API.TTFFont.open(t.postScriptName,t.fontName,G.API.getFileFromVFS(t.postScriptName),t.encoding),t.metadata.Unicode=t.metadata.Unicode||{encoding:{},kerning:{},widths:[]}):14<t.id.slice(1)&&console.error("Font does not exist in FileInVFS, import fonts or remove declaration doc.addFont('"+t.postScriptName+"').")}]),(
/** @preserve
  jsPDF SVG plugin
  Copyright (c) 2012 Willow Systems Corporation, willow-systems.com
  */
V=$.API).addSvg=function(t,e,n,r,i){if(void 0===e||void 0===n)throw new Error("addSVG needs values for 'x' and 'y'");function o(t){for(var e=parseFloat(t[1]),n=parseFloat(t[2]),r=[],i=3,o=t.length;i<o;)"c"===t[i]?(r.push([parseFloat(t[i+1]),parseFloat(t[i+2]),parseFloat(t[i+3]),parseFloat(t[i+4]),parseFloat(t[i+5]),parseFloat(t[i+6])]),i+=7):"l"===t[i]?(r.push([parseFloat(t[i+1]),parseFloat(t[i+2])]),i+=3):i+=1;return[e,n,r]}var a,s,h,c,l,u,f,d,p=(c=document,d=c.createElement("iframe"),l=".jsPDF_sillysvg_iframe {display:none;position:absolute;}",(f=(u=c).createElement("style")).type="text/css",f.styleSheet?f.styleSheet.cssText=l:f.appendChild(u.createTextNode(l)),u.getElementsByTagName("head")[0].appendChild(f),d.name="childframe",d.setAttribute("width",0),d.setAttribute("height",0),d.setAttribute("frameborder","0"),d.setAttribute("scrolling","no"),d.setAttribute("seamless","seamless"),d.setAttribute("class","jsPDF_sillysvg_iframe"),c.body.appendChild(d),d),g=(a=t,(h=((s=p).contentWindow||s.contentDocument).document).write(a),h.close(),h.getElementsByTagName("svg")[0]),m=[1,1],w=parseFloat(g.getAttribute("width")),y=parseFloat(g.getAttribute("height"));w&&y&&(r&&i?m=[r/w,i/y]:r?m=[r/w,r/w]:i&&(m=[i/y,i/y]));var v,b,x,S,k=g.childNodes;for(v=0,b=k.length;v<b;v++)(x=k[v]).tagName&&"PATH"===x.tagName.toUpperCase()&&((S=o(x.getAttribute("d").split(" ")))[0]=S[0]*m[0]+e,S[1]=S[1]*m[1]+n,this.lines.call(this,S[2],S[0],S[1],m));return this},V.addSVG=V.addSvg,V.addSvgAsImage=function(t,e,n,r,i,o,a,s){if(isNaN(e)||isNaN(n))throw console.error("jsPDF.addSvgAsImage: Invalid coordinates",arguments),new Error("Invalid coordinates passed to jsPDF.addSvgAsImage");if(isNaN(r)||isNaN(i))throw console.error("jsPDF.addSvgAsImage: Invalid measurements",arguments),new Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");var h=document.createElement("canvas");h.width=r,h.height=i;var c=h.getContext("2d");return c.fillStyle="#fff",c.fillRect(0,0,h.width,h.height),canvg(h,t,{ignoreMouse:!0,ignoreAnimation:!0,ignoreDimensions:!0,ignoreClear:!0}),this.addImage(h.toDataURL("image/jpeg",1),e,n,r,i,a,s),this},$.API.putTotalPages=function(t){for(var e=new RegExp(t,"g"),n=1;n<=this.internal.getNumberOfPages();n++)for(var r=0;r<this.internal.pages[n].length;r++)this.internal.pages[n][r]=this.internal.pages[n][r].replace(e,this.internal.getNumberOfPages());return this},$.API.viewerPreferences=function(t,e){var n;t=t||{},e=e||!1;var r,i,o={HideToolbar:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},HideMenubar:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},HideWindowUI:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},FitWindow:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},CenterWindow:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},DisplayDocTitle:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.4},NonFullScreenPageMode:{defaultValue:"UseNone",value:"UseNone",type:"name",explicitSet:!1,valueSet:["UseNone","UseOutlines","UseThumbs","UseOC"],pdfVersion:1.3},Direction:{defaultValue:"L2R",value:"L2R",type:"name",explicitSet:!1,valueSet:["L2R","R2L"],pdfVersion:1.3},ViewArea:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},ViewClip:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintArea:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintClip:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintScaling:{defaultValue:"AppDefault",value:"AppDefault",type:"name",explicitSet:!1,valueSet:["AppDefault","None"],pdfVersion:1.6},Duplex:{defaultValue:"",value:"none",type:"name",explicitSet:!1,valueSet:["Simplex","DuplexFlipShortEdge","DuplexFlipLongEdge","none"],pdfVersion:1.7},PickTrayByPDFSize:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.7},PrintPageRange:{defaultValue:"",value:"",type:"array",explicitSet:!1,valueSet:null,pdfVersion:1.7},NumCopies:{defaultValue:1,value:1,type:"integer",explicitSet:!1,valueSet:null,pdfVersion:1.7}},a=Object.keys(o),s=[],h=0,c=0,l=0,u=!0;function f(t,e){var n,r=!1;for(n=0;n<t.length;n+=1)t[n]===e&&(r=!0);return r}if(void 0===this.internal.viewerpreferences&&(this.internal.viewerpreferences={},this.internal.viewerpreferences.configuration=JSON.parse(JSON.stringify(o)),this.internal.viewerpreferences.isSubscribed=!1),n=this.internal.viewerpreferences.configuration,"reset"===t||!0===e){var d=a.length;for(l=0;l<d;l+=1)n[a[l]].value=n[a[l]].defaultValue,n[a[l]].explicitSet=!1}if("object"===(void 0===t?"undefined":vt(t)))for(r in t)if(i=t[r],f(a,r)&&void 0!==i){if("boolean"===n[r].type&&"boolean"==typeof i)n[r].value=i;else if("name"===n[r].type&&f(n[r].valueSet,i))n[r].value=i;else if("integer"===n[r].type&&Number.isInteger(i))n[r].value=i;else if("array"===n[r].type){for(h=0;h<i.length;h+=1)if(u=!0,1===i[h].length&&"number"==typeof i[h][0])s.push(String(i[h]));else if(1<i[h].length){for(c=0;c<i[h].length;c+=1)"number"!=typeof i[h][c]&&(u=!1);!0===u&&s.push(String(i[h].join("-")))}n[r].value=String(s)}else n[r].value=n[r].defaultValue;n[r].explicitSet=!0}return!1===this.internal.viewerpreferences.isSubscribed&&(this.internal.events.subscribe("putCatalog",function(){var t,e=[];for(t in n)!0===n[t].explicitSet&&("name"===n[t].type?e.push("/"+t+" /"+n[t].value):e.push("/"+t+" "+n[t].value));0!==e.length&&this.internal.write("/ViewerPreferences\n<<\n"+e.join("\n")+"\n>>")}),this.internal.viewerpreferences.isSubscribed=!0),this.internal.viewerpreferences.configuration=n,this},
/** ==================================================================== 
   * jsPDF XMP metadata plugin
   * Copyright (c) 2016 Jussi Utunen, u-jussi@suomi24.fi
   * 
   * 
   * ====================================================================
   */
Y=$.API,K=J=X="",Y.addMetadata=function(t,e){return J=e||"http://jspdf.default.namespaceuri/",X=t,this.internal.events.subscribe("postPutResources",function(){if(X){var t='<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="'+J+'"><jspdf:metadata>',e=unescape(encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">')),n=unescape(encodeURIComponent(t)),r=unescape(encodeURIComponent(X)),i=unescape(encodeURIComponent("</jspdf:metadata></rdf:Description></rdf:RDF>")),o=unescape(encodeURIComponent("</x:xmpmeta>")),a=n.length+r.length+i.length+e.length+o.length;K=this.internal.newObject(),this.internal.write("<< /Type /Metadata /Subtype /XML /Length "+a+" >>"),this.internal.write("stream"),this.internal.write(e+n+r+i+o),this.internal.write("endstream"),this.internal.write("endobj")}else K=""}),this.internal.events.subscribe("putCatalog",function(){K&&this.internal.write("/Metadata "+K+" 0 R")}),this},function(l,t){var e=l.API,m=[0];e.events.push(["putFont",function(t){!function(t,e,n){if(t.metadata instanceof l.API.TTFFont&&"Identity-H"===t.encoding){for(var r=t.metadata.Unicode.widths,i=t.metadata.subset.encode(m),o="",a=0;a<i.length;a++)o+=String.fromCharCode(i[a]);var s=n();e("<<"),e("/Length "+o.length),e("/Length1 "+o.length),e(">>"),e("stream"),e(o),e("endstream"),e("endobj");var h=n();e("<<"),e("/Type /FontDescriptor"),e("/FontName /"+t.fontName),e("/FontFile2 "+s+" 0 R"),e("/FontBBox "+l.API.PDFObject.convert(t.metadata.bbox)),e("/Flags "+t.metadata.flags),e("/StemV "+t.metadata.stemV),e("/ItalicAngle "+t.metadata.italicAngle),e("/Ascent "+t.metadata.ascender),e("/Descent "+t.metadata.decender),e("/CapHeight "+t.metadata.capHeight),e(">>"),e("endobj");var c=n();e("<<"),e("/Type /Font"),e("/BaseFont /"+t.fontName),e("/FontDescriptor "+h+" 0 R"),e("/W "+l.API.PDFObject.convert(r)),e("/CIDToGIDMap /Identity"),e("/DW 1000"),e("/Subtype /CIDFontType2"),e("/CIDSystemInfo"),e("<<"),e("/Supplement 0"),e("/Registry (Adobe)"),e("/Ordering ("+t.encoding+")"),e(">>"),e(">>"),e("endobj"),t.objectNumber=n(),e("<<"),e("/Type /Font"),e("/Subtype /Type0"),e("/BaseFont /"+t.fontName),e("/Encoding /"+t.encoding),e("/DescendantFonts ["+c+" 0 R]"),e(">>"),e("endobj"),t.isAlreadyPutted=!0}}(t.font,t.out,t.newObject)}]);e.events.push(["putFont",function(t){!function(t,e,n){if(t.metadata instanceof l.API.TTFFont&&"WinAnsiEncoding"===t.encoding){t.metadata.Unicode.widths;for(var r=t.metadata.rawData,i="",o=0;o<r.length;o++)i+=String.fromCharCode(r[o]);var a=n();e("<<"),e("/Length "+i.length),e("/Length1 "+i.length),e(">>"),e("stream"),e(i),e("endstream"),e("endobj");var s=n();for(e("<<"),e("/Descent "+t.metadata.decender),e("/CapHeight "+t.metadata.capHeight),e("/StemV "+t.metadata.stemV),e("/Type /FontDescriptor"),e("/FontFile2 "+a+" 0 R"),e("/Flags 96"),e("/FontBBox "+l.API.PDFObject.convert(t.metadata.bbox)),e("/FontName /"+t.fontName),e("/ItalicAngle "+t.metadata.italicAngle),e("/Ascent "+t.metadata.ascender),e(">>"),e("endobj"),t.objectNumber=n(),o=0;o<t.metadata.hmtx.widths.length;o++)t.metadata.hmtx.widths[o]=parseInt(t.metadata.hmtx.widths[o]*(1e3/t.metadata.head.unitsPerEm));e("<</Subtype/TrueType/Type/Font/BaseFont/"+t.fontName+"/FontDescriptor "+s+" 0 R/Encoding/"+t.encoding+" /FirstChar 29 /LastChar 255 /Widths "+l.API.PDFObject.convert(t.metadata.hmtx.widths)+">>"),e("endobj"),t.isAlreadyPutted=!0}}(t.font,t.out,t.newObject)}]);var c=function(t){var e,n,r=t.text||"",i=t.x,o=t.y,a=t.options||{},s=t.mutex||{},h=s.pdfEscape,c=s.activeFontKey,l=s.fonts,u=(s.activeFontSize,""),f=0,d="",p=l[n=c].encoding;if("Identity-H"!==l[n].encoding)return{text:r,x:i,y:o,options:a,mutex:s};for(d=r,n=c,"[object Array]"===Object.prototype.toString.call(r)&&(d=r[0]),f=0;f<d.length;f+=1)l[n].metadata.hasOwnProperty("cmap")&&(e=l[n].metadata.cmap.unicode.codeMap[d[f].charCodeAt(0)]),e?u+=d[f]:d[f].charCodeAt(0)<256&&l[n].metadata.hasOwnProperty("Unicode")?u+=d[f]:u+="";var g="";return parseInt(n.slice(1))<14||"WinAnsiEncoding"===p?g=function(t){for(var e="",n=0;n<t.length;n++)e+=""+t.charCodeAt(n).toString(16);return e}(h(u,n)):"Identity-H"===p&&(g=function(t,e){for(var n,r=e.metadata.Unicode.widths,i=["","0","00","000","0000"],o=[""],a=0,s=t.length;a<s;++a){if(n=e.metadata.characterToGlyph(t.charCodeAt(a)),m.push(n),-1==r.indexOf(n)&&(r.push(n),r.push([parseInt(e.metadata.widthOfGlyph(n),10)])),"0"==n)return o.join("");n=n.toString(16),o.push(i[4-n.length],n)}return o.join("")}(u,l[n])),s.isHex=!0,{text:g,x:i,y:o,options:a,mutex:s}};e.events.push(["postProcessText",function(t){var e=t.text||"",n=t.x,r=t.y,i=t.options,o=t.mutex,a=(i.lang,[]),s={text:e,x:n,y:r,options:i,mutex:o};if("[object Array]"===Object.prototype.toString.call(e)){var h=0;for(h=0;h<e.length;h+=1)"[object Array]"===Object.prototype.toString.call(e[h])&&3===e[h].length?a.push([c(Object.assign({},s,{text:e[h][0]})).text,e[h][1],e[h][2]]):a.push(c(Object.assign({},s,{text:e[h]})).text);t.text=a}else t.text=c(Object.assign({},s,{text:e})).text}])}($,"undefined"!=typeof self&&self||"undefined"!=typeof __webpack_require__.g&&__webpack_require__.g||"undefined"!=typeof window&&window||Function("return this")()),Q=$.API,Z={},Q.existsFileInVFS=function(t){return Z.hasOwnProperty(t)},Q.addFileToVFS=function(t,e){return Z[t]=e,this},Q.getFileFromVFS=function(t){return Z.hasOwnProperty(t)?Z[t]:null},function(t){if(t.URL=t.URL||t.webkitURL,t.Blob&&t.URL)try{return new Blob}catch(t){}var s=t.BlobBuilder||t.WebKitBlobBuilder||t.MozBlobBuilder||function(t){var s=function(t){return Object.prototype.toString.call(t).match(/^\[object\s(.*)\]$/)[1]},e=function(){this.data=[]},h=function(t,e,n){this.data=t,this.size=t.length,this.type=e,this.encoding=n},n=e.prototype,r=h.prototype,c=t.FileReaderSync,l=function(t){this.code=this[this.name=t]},i="NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR".split(" "),o=i.length,a=t.URL||t.webkitURL||t,u=a.createObjectURL,f=a.revokeObjectURL,d=a,p=t.btoa,g=t.atob,m=t.ArrayBuffer,w=t.Uint8Array,y=/^[\w-]+:\/*\[?[\w\.:-]+\]?(?::[0-9]+)?/;for(h.fake=r.fake=!0;o--;)l.prototype[i[o]]=o+1;return a.createObjectURL||(d=t.URL=function(t){var e,n=document.createElementNS("http://www.w3.org/1999/xhtml","a");return n.href=t,"origin"in n||("data:"===n.protocol.toLowerCase()?n.origin=null:(e=t.match(y),n.origin=e&&e[1])),n}),d.createObjectURL=function(t){var e,n=t.type;return null===n&&(n="application/octet-stream"),t instanceof h?(e="data:"+n,"base64"===t.encoding?e+";base64,"+t.data:"URI"===t.encoding?e+","+decodeURIComponent(t.data):p?e+";base64,"+p(t.data):e+","+encodeURIComponent(t.data)):u?u.call(a,t):void 0},d.revokeObjectURL=function(t){"data:"!==t.substring(0,5)&&f&&f.call(a,t)},n.append=function(t){var e=this.data;if(w&&(t instanceof m||t instanceof w)){for(var n="",r=new w(t),i=0,o=r.length;i<o;i++)n+=String.fromCharCode(r[i]);e.push(n)}else if("Blob"===s(t)||"File"===s(t)){if(!c)throw new l("NOT_READABLE_ERR");var a=new c;e.push(a.readAsBinaryString(t))}else t instanceof h?"base64"===t.encoding&&g?e.push(g(t.data)):"URI"===t.encoding?e.push(decodeURIComponent(t.data)):"raw"===t.encoding&&e.push(t.data):("string"!=typeof t&&(t+=""),e.push(unescape(encodeURIComponent(t))))},n.getBlob=function(t){return arguments.length||(t=null),new h(this.data.join(""),t,"raw")},n.toString=function(){return"[object BlobBuilder]"},r.slice=function(t,e,n){var r=arguments.length;return r<3&&(n=null),new h(this.data.slice(t,1<r?e:this.data.length),n,this.encoding)},r.toString=function(){return"[object Blob]"},r.close=function(){this.size=0,delete this.data},e}(t);t.Blob=function(t,e){var n=e&&e.type||"",r=new s;if(t)for(var i=0,o=t.length;i<o;i++)Uint8Array&&t[i]instanceof Uint8Array?r.append(t[i].buffer):r.append(t[i]);var a=r.getBlob(n);return!a.slice&&a.webkitSlice&&(a.slice=a.webkitSlice),a};var e=Object.getPrototypeOf||function(t){return t.__proto__};t.Blob.prototype=e(new t.Blob)}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||window.content||window);var tt,et,nt,rt,it,ot,at,st,ht,ct,lt,ut,ft,dt,pt,gt,bt=bt||function(s){if(!(void 0===s||"undefined"!=typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))){var t=s.document,h=function(){return s.URL||s.webkitURL||s},c=t.createElementNS("http://www.w3.org/1999/xhtml","a"),l="download"in c,u=/constructor/i.test(s.HTMLElement)||s.safari,f=/CriOS\/[\d]+/.test(navigator.userAgent),d=function(t){(s.setImmediate||s.setTimeout)(function(){throw t},0)},p=function(t){setTimeout(function(){"string"==typeof t?h().revokeObjectURL(t):t.remove()},4e4)},g=function(t){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob([String.fromCharCode(65279),t],{type:t.type}):t},r=function(t,n,e){e||(t=g(t));var r,i=this,o="application/octet-stream"===t.type,a=function(){!function(t,e,n){for(var r=(e=[].concat(e)).length;r--;){var i=t["on"+e[r]];if("function"==typeof i)try{i.call(t,n||t)}catch(t){d(t)}}}(i,"writestart progress write writeend".split(" "))};if(i.readyState=i.INIT,l)return r=h().createObjectURL(t),void setTimeout(function(){var t,e;c.href=r,c.download=n,t=c,e=new MouseEvent("click"),t.dispatchEvent(e),a(),p(r),i.readyState=i.DONE});!function(){if((f||o&&u)&&s.FileReader){var e=new FileReader;return e.onloadend=function(){var t=f?e.result:e.result.replace(/^data:[^;]*;/,"data:attachment/file;");s.open(t,"_blank")||(s.location.href=t),t=void 0,i.readyState=i.DONE,a()},e.readAsDataURL(t),i.readyState=i.INIT}r||(r=h().createObjectURL(t)),o?s.location.href=r:s.open(r,"_blank")||(s.location.href=r);i.readyState=i.DONE,a(),p(r)}()},e=r.prototype;return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(t,e,n){return e=e||t.name||"download",n||(t=g(t)),navigator.msSaveOrOpenBlob(t,e)}:(e.abort=function(){},e.readyState=e.INIT=0,e.WRITING=1,e.DONE=2,e.error=e.onwritestart=e.onprogress=e.onwrite=e.onabort=e.onerror=e.onwriteend=null,function(t,e,n){return new r(t,e||t.name||"download",n)})}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||window.content);function mt(x){var t=0;if(71!==x[t++]||73!==x[t++]||70!==x[t++]||56!==x[t++]||56!=(x[t++]+1&253)||97!==x[t++])throw"Invalid GIF 87a/89a header.";var S=x[t++]|x[t++]<<8,e=x[t++]|x[t++]<<8,n=x[t++],r=n>>7,i=1<<(7&n)+1;x[t++];x[t++];var o=null;r&&(o=t,t+=3*i);var a=!0,s=[],h=0,c=null,l=0,u=null;for(this.width=S,this.height=e;a&&t<x.length;)switch(x[t++]){case 33:switch(x[t++]){case 255:if(11!==x[t]||78==x[t+1]&&69==x[t+2]&&84==x[t+3]&&83==x[t+4]&&67==x[t+5]&&65==x[t+6]&&80==x[t+7]&&69==x[t+8]&&50==x[t+9]&&46==x[t+10]&&48==x[t+11]&&3==x[t+12]&&1==x[t+13]&&0==x[t+16])t+=14,u=x[t++]|x[t++]<<8,t++;else for(t+=12;;){if(0===(_=x[t++]))break;t+=_}break;case 249:if(4!==x[t++]||0!==x[t+4])throw"Invalid graphics extension block.";var f=x[t++];h=x[t++]|x[t++]<<8,c=x[t++],0==(1&f)&&(c=null),l=f>>2&7,t++;break;case 254:for(;;){if(0===(_=x[t++]))break;t+=_}break;default:throw"Unknown graphic control label: 0x"+x[t-1].toString(16)}break;case 44:var d=x[t++]|x[t++]<<8,p=x[t++]|x[t++]<<8,g=x[t++]|x[t++]<<8,m=x[t++]|x[t++]<<8,w=x[t++],y=w>>6&1,v=o,b=!1;if(w>>7){b=!0;v=t,t+=3*(1<<(7&w)+1)}var k=t;for(t++;;){var _;if(0===(_=x[t++]))break;t+=_}s.push({x:d,y:p,width:g,height:m,has_local_palette:b,palette_offset:v,data_offset:k,data_length:t-k,transparent_index:c,interlaced:!!y,delay:h,disposal:l});break;case 59:a=!1;break;default:throw"Unknown gif block: 0x"+x[t-1].toString(16)}this.numFrames=function(){return s.length},this.loopCount=function(){return u},this.frameInfo=function(t){if(t<0||t>=s.length)throw"Frame index out of range.";return s[t]},this.decodeAndBlitFrameBGRA=function(t,e){var n=this.frameInfo(t),r=n.width*n.height,i=new Uint8Array(r);wt(x,n.data_offset,i,r);var o=n.palette_offset,a=n.transparent_index;null===a&&(a=256);var s=n.width,h=S-s,c=s,l=4*(n.y*S+n.x),u=4*((n.y+n.height)*S+n.x),f=l,d=4*h;!0===n.interlaced&&(d+=4*(s+h)*7);for(var p=8,g=0,m=i.length;g<m;++g){var w=i[g];if(0===c&&(c=s,u<=(f+=d)&&(d=h+4*(s+h)*(p-1),f=l+(s+h)*(p<<1),p>>=1)),w===a)f+=4;else{var y=x[o+3*w],v=x[o+3*w+1],b=x[o+3*w+2];e[f++]=b,e[f++]=v,e[f++]=y,e[f++]=255}--c}},this.decodeAndBlitFrameRGBA=function(t,e){var n=this.frameInfo(t),r=n.width*n.height,i=new Uint8Array(r);wt(x,n.data_offset,i,r);var o=n.palette_offset,a=n.transparent_index;null===a&&(a=256);var s=n.width,h=S-s,c=s,l=4*(n.y*S+n.x),u=4*((n.y+n.height)*S+n.x),f=l,d=4*h;!0===n.interlaced&&(d+=4*(s+h)*7);for(var p=8,g=0,m=i.length;g<m;++g){var w=i[g];if(0===c&&(c=s,u<=(f+=d)&&(d=h+4*(s+h)*(p-1),f=l+(s+h)*(p<<1),p>>=1)),w===a)f+=4;else{var y=x[o+3*w],v=x[o+3*w+1],b=x[o+3*w+2];e[f++]=y,e[f++]=v,e[f++]=b,e[f++]=255}--c}}}function wt(t,e,n,r){for(var i=t[e++],o=1<<i,a=o+1,s=a+1,h=i+1,c=(1<<h)-1,l=0,u=0,f=0,d=t[e++],p=new Int32Array(4096),g=null;;){for(;l<16&&0!==d;)u|=t[e++]<<l,l+=8,1===d?d=t[e++]:--d;if(l<h)break;var m=u&c;if(u>>=h,l-=h,m!==o){if(m===a)break;for(var w=m<s?m:g,y=0,v=w;o<v;)v=p[v]>>8,++y;var b=v;if(r<f+y+(w!==m?1:0))return void console.log("Warning, gif stream longer than expected.");n[f++]=b;var x=f+=y;for(w!==m&&(n[f++]=b),v=w;y--;)v=p[v],n[--x]=255&v,v>>=8;null!==g&&s<4096&&(p[s++]=g<<8|b,c+1<=s&&h<12&&(++h,c=c<<1|1)),g=m}else s=a+1,c=(1<<(h=i+1))-1,g=null}return f!==r&&console.log("Warning, gif stream shorter than expected."),n} true&&module.exports?module.exports.saveAs=bt: true&&null!==__webpack_require__.amdD&&null!==__webpack_require__.amdO&&!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return bt}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
/*
   * Copyright (c) 2012 chick307 <chick307@gmail.com>
   *
   * Licensed under the MIT License.
   * http://opensource.org/licenses/mit-license
   */,$.API.adler32cs=(ot="function"==typeof ArrayBuffer&&"function"==typeof Uint8Array,at=null,st=function(){if(!ot)return function(){return!1};try{var t={};"function"==typeof t.Buffer&&(at=t.Buffer)}catch(t){}return function(t){return t instanceof ArrayBuffer||null!==at&&t instanceof at}}(),ht=null!==at?function(t){return new at(t,"utf8").toString("binary")}:function(t){return unescape(encodeURIComponent(t))},ct=65521,lt=function(t,e){for(var n=65535&t,r=t>>>16,i=0,o=e.length;i<o;i++)n=(n+(255&e.charCodeAt(i)))%ct,r=(r+n)%ct;return(r<<16|n)>>>0},ut=function(t,e){for(var n=65535&t,r=t>>>16,i=0,o=e.length;i<o;i++)n=(n+e[i])%ct,r=(r+n)%ct;return(r<<16|n)>>>0},dt=(ft={}).Adler32=(((it=(rt=function(t){if(!(this instanceof rt))throw new TypeError("Constructor cannot called be as a function.");if(!isFinite(t=null==t?1:+t))throw new Error("First arguments needs to be a finite number.");this.checksum=t>>>0}).prototype={}).constructor=rt).from=((tt=function(t){if(!(this instanceof rt))throw new TypeError("Constructor cannot called be as a function.");if(null==t)throw new Error("First argument needs to be a string.");this.checksum=lt(1,t.toString())}).prototype=it,tt),rt.fromUtf8=((et=function(t){if(!(this instanceof rt))throw new TypeError("Constructor cannot called be as a function.");if(null==t)throw new Error("First argument needs to be a string.");var e=ht(t.toString());this.checksum=lt(1,e)}).prototype=it,et),ot&&(rt.fromBuffer=((nt=function(t){if(!(this instanceof rt))throw new TypeError("Constructor cannot called be as a function.");if(!st(t))throw new Error("First argument needs to be ArrayBuffer.");var e=new Uint8Array(t);return this.checksum=ut(1,e)}).prototype=it,nt)),it.update=function(t){if(null==t)throw new Error("First argument needs to be a string.");return t=t.toString(),this.checksum=lt(this.checksum,t)},it.updateUtf8=function(t){if(null==t)throw new Error("First argument needs to be a string.");var e=ht(t.toString());return this.checksum=lt(this.checksum,e)},ot&&(it.updateBuffer=function(t){if(!st(t))throw new Error("First argument needs to be ArrayBuffer.");var e=new Uint8Array(t);return this.checksum=ut(this.checksum,e)}),it.clone=function(){return new dt(this.checksum)},rt),ft.from=function(t){if(null==t)throw new Error("First argument needs to be a string.");return lt(1,t.toString())},ft.fromUtf8=function(t){if(null==t)throw new Error("First argument needs to be a string.");var e=ht(t.toString());return lt(1,e)},ot&&(ft.fromBuffer=function(t){if(!st(t))throw new Error("First argument need to be ArrayBuffer.");var e=new Uint8Array(t);return ut(1,e)}),ft);try{exports.GifWriter=function(w,t,e,n){var y=0,r=void 0===(n=void 0===n?{}:n).loop?null:n.loop,v=void 0===n.palette?null:n.palette;if(t<=0||e<=0||65535<t||65535<e)throw"Width/Height invalid.";function b(t){var e=t.length;if(e<2||256<e||e&e-1)throw"Invalid code/color length, must be power of 2 and 2 .. 256.";return e}w[y++]=71,w[y++]=73,w[y++]=70,w[y++]=56,w[y++]=57,w[y++]=97;var i=0,o=0;if(null!==v){for(var a=b(v);a>>=1;)++i;if(a=1<<i,--i,void 0!==n.background){if(a<=(o=n.background))throw"Background index out of range.";if(0===o)throw"Background index explicitly passed as 0."}}if(w[y++]=255&t,w[y++]=t>>8&255,w[y++]=255&e,w[y++]=e>>8&255,w[y++]=(null!==v?128:0)|i,w[y++]=o,w[y++]=0,null!==v)for(var s=0,h=v.length;s<h;++s){var c=v[s];w[y++]=c>>16&255,w[y++]=c>>8&255,w[y++]=255&c}if(null!==r){if(r<0||65535<r)throw"Loop count invalid.";w[y++]=33,w[y++]=255,w[y++]=11,w[y++]=78,w[y++]=69,w[y++]=84,w[y++]=83,w[y++]=67,w[y++]=65,w[y++]=80,w[y++]=69,w[y++]=50,w[y++]=46,w[y++]=48,w[y++]=3,w[y++]=1,w[y++]=255&r,w[y++]=r>>8&255,w[y++]=0}var x=!1;this.addFrame=function(t,e,n,r,i,o){if(!0===x&&(--y,x=!1),o=void 0===o?{}:o,t<0||e<0||65535<t||65535<e)throw"x/y invalid.";if(n<=0||r<=0||65535<n||65535<r)throw"Width/Height invalid.";if(i.length<n*r)throw"Not enough pixels for the frame size.";var a=!0,s=o.palette;if(null==s&&(a=!1,s=v),null==s)throw"Must supply either a local or global palette.";for(var h=b(s),c=0;h>>=1;)++c;h=1<<c;var l=void 0===o.delay?0:o.delay,u=void 0===o.disposal?0:o.disposal;if(u<0||3<u)throw"Disposal out of range.";var f=!1,d=0;if(void 0!==o.transparent&&null!==o.transparent&&(f=!0,(d=o.transparent)<0||h<=d))throw"Transparent color index.";if((0!==u||f||0!==l)&&(w[y++]=33,w[y++]=249,w[y++]=4,w[y++]=u<<2|(!0===f?1:0),w[y++]=255&l,w[y++]=l>>8&255,w[y++]=d,w[y++]=0),w[y++]=44,w[y++]=255&t,w[y++]=t>>8&255,w[y++]=255&e,w[y++]=e>>8&255,w[y++]=255&n,w[y++]=n>>8&255,w[y++]=255&r,w[y++]=r>>8&255,w[y++]=!0===a?128|c-1:0,!0===a)for(var p=0,g=s.length;p<g;++p){var m=s[p];w[y++]=m>>16&255,w[y++]=m>>8&255,w[y++]=255&m}y=function(e,n,t,r){e[n++]=t;var i=n++,o=1<<t,a=o-1,s=o+1,h=s+1,c=t+1,l=0,u=0;function f(t){for(;t<=l;)e[n++]=255&u,u>>=8,l-=8,n===i+256&&(e[i]=255,i=n++)}function d(t){u|=t<<l,l+=c,f(8)}var p=r[0]&a,g={};d(o);for(var m=1,w=r.length;m<w;++m){var y=r[m]&a,v=p<<8|y,b=g[v];if(void 0===b){for(u|=p<<l,l+=c;8<=l;)e[n++]=255&u,u>>=8,l-=8,n===i+256&&(e[i]=255,i=n++);4096===h?(d(o),h=s+1,c=t+1,g={}):(1<<c<=h&&++c,g[v]=h++),p=y}else p=b}return d(p),d(s),f(1),i+1===n?e[i]=0:(e[i]=n-i-1,e[n++]=0),n}(w,y,c<2?2:c,i)},this.end=function(){return!1===x&&(w[y++]=59,x=!0),y}},exports.GifReader=mt}catch(t){}
/*
    Copyright (c) 2008, Adobe Systems Incorporated
    All rights reserved.

    Redistribution and use in source and binary forms, with or without 
    modification, are permitted provided that the following conditions are
    met:

    * Redistributions of source code must retain the above copyright notice, 
      this list of conditions and the following disclaimer.
    
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the 
      documentation and/or other materials provided with the distribution.
    
    * Neither the name of Adobe Systems Incorporated nor the names of its 
      contributors may be used to endorse or promote products derived from 
      this software without specific prior written permission.

    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
    IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
    THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
    PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR 
    CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
    EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
    PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
    PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
    LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
    NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
    SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
  */function yt(t){var S,k,_,A,e,u=Math.floor,I=new Array(64),C=new Array(64),T=new Array(64),F=new Array(64),w=new Array(65535),y=new Array(65535),Q=new Array(64),v=new Array(64),P=[],E=0,q=7,O=new Array(64),B=new Array(64),R=new Array(64),n=new Array(256),j=new Array(2048),b=[0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63],D=[0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0],M=[0,1,2,3,4,5,6,7,8,9,10,11],U=[0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125],N=[1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250],z=[0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0],L=[0,1,2,3,4,5,6,7,8,9,10,11],H=[0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119],W=[0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250];function r(t,e){for(var n=0,r=0,i=new Array,o=1;o<=16;o++){for(var a=1;a<=t[o];a++)i[e[r]]=[],i[e[r]][0]=n,i[e[r]][1]=o,r++,n++;n*=2}return i}function G(t){for(var e=t[0],n=t[1]-1;0<=n;)e&1<<n&&(E|=1<<q),n--,--q<0&&(255==E?(V(255),V(0)):V(E),q=7,E=0)}function V(t){P.push(t)}function Y(t){V(t>>8&255),V(255&t)}function X(t,e,n,r,i){for(var o,a=i[0],s=i[240],h=function(t,e){var n,r,i,o,a,s,h,c,l,u,f=0;for(l=0;l<8;++l){n=t[f],r=t[f+1],i=t[f+2],o=t[f+3],a=t[f+4],s=t[f+5],h=t[f+6];var d=n+(c=t[f+7]),p=n-c,g=r+h,m=r-h,w=i+s,y=i-s,v=o+a,b=o-a,x=d+v,S=d-v,k=g+w,_=g-w;t[f]=x+k,t[f+4]=x-k;var A=.707106781*(_+S);t[f+2]=S+A,t[f+6]=S-A;var I=.382683433*((x=b+y)-(_=m+p)),C=.5411961*x+I,T=1.306562965*_+I,F=.707106781*(k=y+m),P=p+F,E=p-F;t[f+5]=E+C,t[f+3]=E-C,t[f+1]=P+T,t[f+7]=P-T,f+=8}for(l=f=0;l<8;++l){n=t[f],r=t[f+8],i=t[f+16],o=t[f+24],a=t[f+32],s=t[f+40],h=t[f+48];var q=n+(c=t[f+56]),O=n-c,B=r+h,R=r-h,j=i+s,D=i-s,M=o+a,U=o-a,N=q+M,z=q-M,L=B+j,H=B-j;t[f]=N+L,t[f+32]=N-L;var W=.707106781*(H+z);t[f+16]=z+W,t[f+48]=z-W;var G=.382683433*((N=U+D)-(H=R+O)),V=.5411961*N+G,Y=1.306562965*H+G,X=.707106781*(L=D+R),J=O+X,K=O-X;t[f+40]=K+V,t[f+24]=K-V,t[f+8]=J+Y,t[f+56]=J-Y,f++}for(l=0;l<64;++l)u=t[l]*e[l],Q[l]=0<u?u+.5|0:u-.5|0;return Q}(t,e),c=0;c<64;++c)v[b[c]]=h[c];var l=v[0]-n;n=v[0],0==l?G(r[0]):(G(r[y[o=32767+l]]),G(w[o]));for(var u=63;0<u&&0==v[u];u--);if(0==u)return G(a),n;for(var f,d=1;d<=u;){for(var p=d;0==v[d]&&d<=u;++d);var g=d-p;if(16<=g){f=g>>4;for(var m=1;m<=f;++m)G(s);g&=15}o=32767+v[d],G(i[(g<<4)+y[o]]),G(w[o]),d++}return 63!=u&&G(a),n}function J(t){if(t<=0&&(t=1),100<t&&(t=100),e!=t){(function(t){for(var e=[16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99],n=0;n<64;n++){var r=u((e[n]*t+50)/100);r<1?r=1:255<r&&(r=255),I[b[n]]=r}for(var i=[17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99],o=0;o<64;o++){var a=u((i[o]*t+50)/100);a<1?a=1:255<a&&(a=255),C[b[o]]=a}for(var s=[1,1.387039845,1.306562965,1.175875602,1,.785694958,.5411961,.275899379],h=0,c=0;c<8;c++)for(var l=0;l<8;l++)T[h]=1/(I[b[h]]*s[c]*s[l]*8),F[h]=1/(C[b[h]]*s[c]*s[l]*8),h++})(t<50?Math.floor(5e3/t):Math.floor(200-2*t)),e=t}}this.encode=function(t,e){var n,r;(new Date).getTime();e&&J(e),P=new Array,E=0,q=7,Y(65496),Y(65504),Y(16),V(74),V(70),V(73),V(70),V(0),V(1),V(1),V(0),Y(1),Y(1),V(0),V(0),function(){Y(65499),Y(132),V(0);for(var t=0;t<64;t++)V(I[t]);V(1);for(var e=0;e<64;e++)V(C[e])}(),n=t.width,r=t.height,Y(65472),Y(17),V(8),Y(r),Y(n),V(3),V(1),V(17),V(0),V(2),V(17),V(1),V(3),V(17),V(1),function(){Y(65476),Y(418),V(0);for(var t=0;t<16;t++)V(D[t+1]);for(var e=0;e<=11;e++)V(M[e]);V(16);for(var n=0;n<16;n++)V(U[n+1]);for(var r=0;r<=161;r++)V(N[r]);V(1);for(var i=0;i<16;i++)V(z[i+1]);for(var o=0;o<=11;o++)V(L[o]);V(17);for(var a=0;a<16;a++)V(H[a+1]);for(var s=0;s<=161;s++)V(W[s])}(),Y(65498),Y(12),V(3),V(1),V(0),V(2),V(17),V(3),V(17),V(0),V(63),V(0);var i=0,o=0,a=0;E=0,q=7,this.encode.displayName="_encode_";for(var s,h,c,l,u,f,d,p,g,m=t.data,w=t.width,y=t.height,v=4*w,b=0;b<y;){for(s=0;s<v;){for(f=u=v*b+s,d=-1,g=p=0;g<64;g++)f=u+(p=g>>3)*v+(d=4*(7&g)),y<=b+p&&(f-=v*(b+1+p-y)),v<=s+d&&(f-=s+d-v+4),h=m[f++],c=m[f++],l=m[f++],O[g]=(j[h]+j[c+256>>0]+j[l+512>>0]>>16)-128,B[g]=(j[h+768>>0]+j[c+1024>>0]+j[l+1280>>0]>>16)-128,R[g]=(j[h+1280>>0]+j[c+1536>>0]+j[l+1792>>0]>>16)-128;i=X(O,T,i,S,_),o=X(B,F,o,k,A),a=X(R,F,a,k,A),s+=32}b+=8}if(0<=q){var x=[];x[1]=q+1,x[0]=(1<<q+1)-1,G(x)}return Y(65497),new Uint8Array(P)},function(){(new Date).getTime();t||(t=50),function(){for(var t=String.fromCharCode,e=0;e<256;e++)n[e]=t(e)}(),S=r(D,M),k=r(z,L),_=r(U,N),A=r(H,W),function(){for(var t=1,e=2,n=1;n<=15;n++){for(var r=t;r<e;r++)y[32767+r]=n,w[32767+r]=[],w[32767+r][1]=n,w[32767+r][0]=r;for(var i=-(e-1);i<=-t;i++)y[32767+i]=n,w[32767+i]=[],w[32767+i][1]=n,w[32767+i][0]=e-1+i;t<<=1,e<<=1}}(),function(){for(var t=0;t<256;t++)j[t]=19595*t,j[t+256>>0]=38470*t,j[t+512>>0]=7471*t+32768,j[t+768>>0]=-11059*t,j[t+1024>>0]=-21709*t,j[t+1280>>0]=32768*t+8421375,j[t+1536>>0]=-27439*t,j[t+1792>>0]=-5329*t}(),J(t),(new Date).getTime()}()}try{module.exports=yt}catch(t){}function xt(t,e){if(this.pos=0,this.buffer=t,this.datav=new DataView(t.buffer),this.is_with_alpha=!!e,this.bottom_up=!0,this.flag=String.fromCharCode(this.buffer[0])+String.fromCharCode(this.buffer[1]),this.pos+=2,-1===["BM","BA","CI","CP","IC","PT"].indexOf(this.flag))throw new Error("Invalid BMP File");this.parseHeader(),this.parseBGR()}xt.prototype.parseHeader=function(){if(this.fileSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.reserved=this.datav.getUint32(this.pos,!0),this.pos+=4,this.offset=this.datav.getUint32(this.pos,!0),this.pos+=4,this.headerSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.width=this.datav.getUint32(this.pos,!0),this.pos+=4,this.height=this.datav.getInt32(this.pos,!0),this.pos+=4,this.planes=this.datav.getUint16(this.pos,!0),this.pos+=2,this.bitPP=this.datav.getUint16(this.pos,!0),this.pos+=2,this.compress=this.datav.getUint32(this.pos,!0),this.pos+=4,this.rawSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.hr=this.datav.getUint32(this.pos,!0),this.pos+=4,this.vr=this.datav.getUint32(this.pos,!0),this.pos+=4,this.colors=this.datav.getUint32(this.pos,!0),this.pos+=4,this.importantColors=this.datav.getUint32(this.pos,!0),this.pos+=4,16===this.bitPP&&this.is_with_alpha&&(this.bitPP=15),this.bitPP<15){var t=0===this.colors?1<<this.bitPP:this.colors;this.palette=new Array(t);for(var e=0;e<t;e++){var n=this.datav.getUint8(this.pos++,!0),r=this.datav.getUint8(this.pos++,!0),i=this.datav.getUint8(this.pos++,!0),o=this.datav.getUint8(this.pos++,!0);this.palette[e]={red:i,green:r,blue:n,quad:o}}}this.height<0&&(this.height*=-1,this.bottom_up=!1)},xt.prototype.parseBGR=function(){this.pos=this.offset;try{var t="bit"+this.bitPP,e=this.width*this.height*4;this.data=new Uint8Array(e),this[t]()}catch(t){console.log("bit decode error:"+t)}},xt.prototype.bit1=function(){var t=Math.ceil(this.width/8),e=t%4,n=0<=this.height?this.height-1:-this.height;for(n=this.height-1;0<=n;n--){for(var r=this.bottom_up?n:this.height-1-n,i=0;i<t;i++)for(var o=this.datav.getUint8(this.pos++,!0),a=r*this.width*4+8*i*4,s=0;s<8&&8*i+s<this.width;s++){var h=this.palette[o>>7-s&1];this.data[a+4*s]=h.blue,this.data[a+4*s+1]=h.green,this.data[a+4*s+2]=h.red,this.data[a+4*s+3]=255}0!=e&&(this.pos+=4-e)}},xt.prototype.bit4=function(){for(var t=Math.ceil(this.width/2),e=t%4,n=this.height-1;0<=n;n--){for(var r=this.bottom_up?n:this.height-1-n,i=0;i<t;i++){var o=this.datav.getUint8(this.pos++,!0),a=r*this.width*4+2*i*4,s=o>>4,h=15&o,c=this.palette[s];if(this.data[a]=c.blue,this.data[a+1]=c.green,this.data[a+2]=c.red,this.data[a+3]=255,2*i+1>=this.width)break;c=this.palette[h],this.data[a+4]=c.blue,this.data[a+4+1]=c.green,this.data[a+4+2]=c.red,this.data[a+4+3]=255}0!=e&&(this.pos+=4-e)}},xt.prototype.bit8=function(){for(var t=this.width%4,e=this.height-1;0<=e;e--){for(var n=this.bottom_up?e:this.height-1-e,r=0;r<this.width;r++){var i=this.datav.getUint8(this.pos++,!0),o=n*this.width*4+4*r;if(i<this.palette.length){var a=this.palette[i];this.data[o]=a.red,this.data[o+1]=a.green,this.data[o+2]=a.blue,this.data[o+3]=255}else this.data[o]=255,this.data[o+1]=255,this.data[o+2]=255,this.data[o+3]=255}0!=t&&(this.pos+=4-t)}},xt.prototype.bit15=function(){for(var t=this.width%3,e=parseInt("11111",2),n=this.height-1;0<=n;n--){for(var r=this.bottom_up?n:this.height-1-n,i=0;i<this.width;i++){var o=this.datav.getUint16(this.pos,!0);this.pos+=2;var a=(o&e)/e*255|0,s=(o>>5&e)/e*255|0,h=(o>>10&e)/e*255|0,c=o>>15?255:0,l=r*this.width*4+4*i;this.data[l]=h,this.data[l+1]=s,this.data[l+2]=a,this.data[l+3]=c}this.pos+=t}},xt.prototype.bit16=function(){for(var t=this.width%3,e=parseInt("11111",2),n=parseInt("111111",2),r=this.height-1;0<=r;r--){for(var i=this.bottom_up?r:this.height-1-r,o=0;o<this.width;o++){var a=this.datav.getUint16(this.pos,!0);this.pos+=2;var s=(a&e)/e*255|0,h=(a>>5&n)/n*255|0,c=(a>>11)/e*255|0,l=i*this.width*4+4*o;this.data[l]=c,this.data[l+1]=h,this.data[l+2]=s,this.data[l+3]=255}this.pos+=t}},xt.prototype.bit24=function(){for(var t=this.height-1;0<=t;t--){for(var e=this.bottom_up?t:this.height-1-t,n=0;n<this.width;n++){var r=this.datav.getUint8(this.pos++,!0),i=this.datav.getUint8(this.pos++,!0),o=this.datav.getUint8(this.pos++,!0),a=e*this.width*4+4*n;this.data[a]=o,this.data[a+1]=i,this.data[a+2]=r,this.data[a+3]=255}this.pos+=this.width%4}},xt.prototype.bit32=function(){for(var t=this.height-1;0<=t;t--)for(var e=this.bottom_up?t:this.height-1-t,n=0;n<this.width;n++){var r=this.datav.getUint8(this.pos++,!0),i=this.datav.getUint8(this.pos++,!0),o=this.datav.getUint8(this.pos++,!0),a=this.datav.getUint8(this.pos++,!0),s=e*this.width*4+4*n;this.data[s]=o,this.data[s+1]=i,this.data[s+2]=r,this.data[s+3]=a}},xt.prototype.getData=function(){return this.data};try{module.exports=function(t){var e=new xt(t);return{data:e.getData(),width:e.width,height:e.height}}}catch(t){}
/*
   Copyright (c) 2013 Gildas Lormeau. All rights reserved.

   Redistribution and use in source and binary forms, with or without
   modification, are permitted provided that the following conditions are met:

   1. Redistributions of source code must retain the above copyright notice,
   this list of conditions and the following disclaimer.

   2. Redistributions in binary form must reproduce the above copyright 
   notice, this list of conditions and the following disclaimer in 
   the documentation and/or other materials provided with the distribution.

   3. The names of the authors may not be used to endorse or promote products
   derived from this software without specific prior written permission.

   THIS SOFTWARE IS PROVIDED ``AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
   INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
   FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
   INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
   INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
   LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
   OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
   LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
   NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
   EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
   */
/*
   Copyright (c) 2013 Gildas Lormeau. All rights reserved.

   Redistribution and use in source and binary forms, with or without
   modification, are permitted provided that the following conditions are met:

   1. Redistributions of source code must retain the above copyright notice,
   this list of conditions and the following disclaimer.

   2. Redistributions in binary form must reproduce the above copyright 
   notice, this list of conditions and the following disclaimer in 
   the documentation and/or other materials provided with the distribution.

   3. The names of the authors may not be used to endorse or promote products
   derived from this software without specific prior written permission.

   THIS SOFTWARE IS PROVIDED ``AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
   INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
   FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
   INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
   INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
   LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
   OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
   LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
   NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
   EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
   */
!function(t){var p=15,g=573,e=[0,1,2,3,4,4,5,5,6,6,6,6,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,0,0,16,17,18,18,19,19,20,20,20,20,21,21,21,21,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29,29];function ut(){var d=this;function h(t,e){for(var n=0;n|=1&t,t>>>=1,n<<=1,0<--e;);return n>>>1}d.build_tree=function(t){var e,n,r,i=d.dyn_tree,o=d.stat_desc.static_tree,a=d.stat_desc.elems,s=-1;for(t.heap_len=0,t.heap_max=g,e=0;e<a;e++)0!==i[2*e]?(t.heap[++t.heap_len]=s=e,t.depth[e]=0):i[2*e+1]=0;for(;t.heap_len<2;)i[2*(r=t.heap[++t.heap_len]=s<2?++s:0)]=1,t.depth[r]=0,t.opt_len--,o&&(t.static_len-=o[2*r+1]);for(d.max_code=s,e=Math.floor(t.heap_len/2);1<=e;e--)t.pqdownheap(i,e);for(r=a;e=t.heap[1],t.heap[1]=t.heap[t.heap_len--],t.pqdownheap(i,1),n=t.heap[1],t.heap[--t.heap_max]=e,t.heap[--t.heap_max]=n,i[2*r]=i[2*e]+i[2*n],t.depth[r]=Math.max(t.depth[e],t.depth[n])+1,i[2*e+1]=i[2*n+1]=r,t.heap[1]=r++,t.pqdownheap(i,1),2<=t.heap_len;);t.heap[--t.heap_max]=t.heap[1],function(t){var e,n,r,i,o,a,s=d.dyn_tree,h=d.stat_desc.static_tree,c=d.stat_desc.extra_bits,l=d.stat_desc.extra_base,u=d.stat_desc.max_length,f=0;for(i=0;i<=p;i++)t.bl_count[i]=0;for(s[2*t.heap[t.heap_max]+1]=0,e=t.heap_max+1;e<g;e++)u<(i=s[2*s[2*(n=t.heap[e])+1]+1]+1)&&(i=u,f++),s[2*n+1]=i,n>d.max_code||(t.bl_count[i]++,o=0,l<=n&&(o=c[n-l]),a=s[2*n],t.opt_len+=a*(i+o),h&&(t.static_len+=a*(h[2*n+1]+o)));if(0!==f){do{for(i=u-1;0===t.bl_count[i];)i--;t.bl_count[i]--,t.bl_count[i+1]+=2,t.bl_count[u]--,f-=2}while(0<f);for(i=u;0!==i;i--)for(n=t.bl_count[i];0!==n;)(r=t.heap[--e])>d.max_code||(s[2*r+1]!=i&&(t.opt_len+=(i-s[2*r+1])*s[2*r],s[2*r+1]=i),n--)}}(t),function(t,e,n){var r,i,o,a=[],s=0;for(r=1;r<=p;r++)a[r]=s=s+n[r-1]<<1;for(i=0;i<=e;i++)0!==(o=t[2*i+1])&&(t[2*i]=h(a[o]++,o))}(i,d.max_code,t.bl_count)}}function ft(t,e,n,r,i){var o=this;o.static_tree=t,o.extra_bits=e,o.extra_base=n,o.elems=r,o.max_length=i}ut._length_code=[0,1,2,3,4,5,6,7,8,8,9,9,10,10,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,26,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,27,28],ut.base_length=[0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0],ut.base_dist=[0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576],ut.d_code=function(t){return t<256?e[t]:e[256+(t>>>7)]},ut.extra_lbits=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],ut.extra_dbits=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],ut.extra_blbits=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],ut.bl_order=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],ft.static_ltree=[12,8,140,8,76,8,204,8,44,8,172,8,108,8,236,8,28,8,156,8,92,8,220,8,60,8,188,8,124,8,252,8,2,8,130,8,66,8,194,8,34,8,162,8,98,8,226,8,18,8,146,8,82,8,210,8,50,8,178,8,114,8,242,8,10,8,138,8,74,8,202,8,42,8,170,8,106,8,234,8,26,8,154,8,90,8,218,8,58,8,186,8,122,8,250,8,6,8,134,8,70,8,198,8,38,8,166,8,102,8,230,8,22,8,150,8,86,8,214,8,54,8,182,8,118,8,246,8,14,8,142,8,78,8,206,8,46,8,174,8,110,8,238,8,30,8,158,8,94,8,222,8,62,8,190,8,126,8,254,8,1,8,129,8,65,8,193,8,33,8,161,8,97,8,225,8,17,8,145,8,81,8,209,8,49,8,177,8,113,8,241,8,9,8,137,8,73,8,201,8,41,8,169,8,105,8,233,8,25,8,153,8,89,8,217,8,57,8,185,8,121,8,249,8,5,8,133,8,69,8,197,8,37,8,165,8,101,8,229,8,21,8,149,8,85,8,213,8,53,8,181,8,117,8,245,8,13,8,141,8,77,8,205,8,45,8,173,8,109,8,237,8,29,8,157,8,93,8,221,8,61,8,189,8,125,8,253,8,19,9,275,9,147,9,403,9,83,9,339,9,211,9,467,9,51,9,307,9,179,9,435,9,115,9,371,9,243,9,499,9,11,9,267,9,139,9,395,9,75,9,331,9,203,9,459,9,43,9,299,9,171,9,427,9,107,9,363,9,235,9,491,9,27,9,283,9,155,9,411,9,91,9,347,9,219,9,475,9,59,9,315,9,187,9,443,9,123,9,379,9,251,9,507,9,7,9,263,9,135,9,391,9,71,9,327,9,199,9,455,9,39,9,295,9,167,9,423,9,103,9,359,9,231,9,487,9,23,9,279,9,151,9,407,9,87,9,343,9,215,9,471,9,55,9,311,9,183,9,439,9,119,9,375,9,247,9,503,9,15,9,271,9,143,9,399,9,79,9,335,9,207,9,463,9,47,9,303,9,175,9,431,9,111,9,367,9,239,9,495,9,31,9,287,9,159,9,415,9,95,9,351,9,223,9,479,9,63,9,319,9,191,9,447,9,127,9,383,9,255,9,511,9,0,7,64,7,32,7,96,7,16,7,80,7,48,7,112,7,8,7,72,7,40,7,104,7,24,7,88,7,56,7,120,7,4,7,68,7,36,7,100,7,20,7,84,7,52,7,116,7,3,8,131,8,67,8,195,8,35,8,163,8,99,8,227,8],ft.static_dtree=[0,5,16,5,8,5,24,5,4,5,20,5,12,5,28,5,2,5,18,5,10,5,26,5,6,5,22,5,14,5,30,5,1,5,17,5,9,5,25,5,5,5,21,5,13,5,29,5,3,5,19,5,11,5,27,5,7,5,23,5],ft.static_l_desc=new ft(ft.static_ltree,ut.extra_lbits,257,286,p),ft.static_d_desc=new ft(ft.static_dtree,ut.extra_dbits,0,30,p),ft.static_bl_desc=new ft(null,ut.extra_blbits,0,19,7);function n(t,e,n,r,i){var o=this;o.good_length=t,o.max_lazy=e,o.nice_length=n,o.max_chain=r,o.func=i}var dt=[new n(0,0,0,0,0),new n(4,4,8,4,1),new n(4,5,16,8,1),new n(4,6,32,32,1),new n(4,4,16,16,2),new n(8,16,32,32,2),new n(8,16,128,128,2),new n(8,32,128,256,2),new n(32,128,258,1024,2),new n(32,258,258,4096,2)],pt=["need dictionary","stream end","","","stream error","data error","","buffer error","",""],gt=262;function mt(t,e,n,r){var i=t[2*e],o=t[2*n];return i<o||i==o&&r[e]<=r[n]}function r(){var h,c,l,u,f,d,p,g,i,m,w,y,v,a,b,x,S,k,_,A,I,C,T,F,P,E,q,O,B,R,s,j,D,M,U,N,z,o,L,H,W,G=this,V=new ut,Y=new ut,X=new ut;function J(){var t;for(t=0;t<286;t++)s[2*t]=0;for(t=0;t<30;t++)j[2*t]=0;for(t=0;t<19;t++)D[2*t]=0;s[512]=1,G.opt_len=G.static_len=0,N=o=0}function K(t,e){var n,r,i=-1,o=t[1],a=0,s=7,h=4;for(0===o&&(s=138,h=3),t[2*(e+1)+1]=65535,n=0;n<=e;n++)r=o,o=t[2*(n+1)+1],++a<s&&r==o||(a<h?D[2*r]+=a:0!==r?(r!=i&&D[2*r]++,D[32]++):a<=10?D[34]++:D[36]++,i=r,(a=0)===o?(s=138,h=3):r==o?(s=6,h=3):(s=7,h=4))}function Q(t){G.pending_buf[G.pending++]=t}function Z(t){Q(255&t),Q(t>>>8&255)}function $(t,e){var n,r=e;16-r<W?(Z(H|=(n=t)<<W&65535),H=n>>>16-W,W+=r-16):(H|=t<<W&65535,W+=r)}function tt(t,e){var n=2*t;$(65535&e[n],65535&e[n+1])}function et(t,e){var n,r,i=-1,o=t[1],a=0,s=7,h=4;for(0===o&&(s=138,h=3),n=0;n<=e;n++)if(r=o,o=t[2*(n+1)+1],!(++a<s&&r==o)){if(a<h)for(;tt(r,D),0!=--a;);else 0!==r?(r!=i&&(tt(r,D),a--),tt(16,D),$(a-3,2)):a<=10?(tt(17,D),$(a-3,3)):(tt(18,D),$(a-11,7));i=r,(a=0)===o?(s=138,h=3):r==o?(s=6,h=3):(s=7,h=4)}}function nt(){16==W?(Z(H),W=H=0):8<=W&&(Q(255&H),H>>>=8,W-=8)}function rt(t,e){var n,r,i;if(G.pending_buf[z+2*N]=t>>>8&255,G.pending_buf[z+2*N+1]=255&t,G.pending_buf[M+N]=255&e,N++,0===t?s[2*e]++:(o++,t--,s[2*(ut._length_code[e]+256+1)]++,j[2*ut.d_code(t)]++),0==(8191&N)&&2<q){for(n=8*N,r=I-S,i=0;i<30;i++)n+=j[2*i]*(5+ut.extra_dbits[i]);if(n>>>=3,o<Math.floor(N/2)&&n<Math.floor(r/2))return!0}return N==U-1}function it(t,e){var n,r,i,o,a=0;if(0!==N)for(;n=G.pending_buf[z+2*a]<<8&65280|255&G.pending_buf[z+2*a+1],r=255&G.pending_buf[M+a],a++,0===n?tt(r,t):(tt((i=ut._length_code[r])+256+1,t),0!==(o=ut.extra_lbits[i])&&$(r-=ut.base_length[i],o),tt(i=ut.d_code(--n),e),0!==(o=ut.extra_dbits[i])&&$(n-=ut.base_dist[i],o)),a<N;);tt(256,t),L=t[513]}function ot(){8<W?Z(H):0<W&&Q(255&H),W=H=0}function at(t,e,n){var r,i,o;$(0+(n?1:0),3),r=t,i=e,o=!0,ot(),L=8,o&&(Z(i),Z(~i)),G.pending_buf.set(g.subarray(r,r+i),G.pending),G.pending+=i}function e(t,e,n){var r,i,o=0;0<q?(V.build_tree(G),Y.build_tree(G),o=function(){var t;for(K(s,V.max_code),K(j,Y.max_code),X.build_tree(G),t=18;3<=t&&0===D[2*ut.bl_order[t]+1];t--);return G.opt_len+=3*(t+1)+5+5+4,t}(),r=G.opt_len+3+7>>>3,(i=G.static_len+3+7>>>3)<=r&&(r=i)):r=i=e+5,e+4<=r&&-1!=t?at(t,e,n):i==r?($(2+(n?1:0),3),it(ft.static_ltree,ft.static_dtree)):($(4+(n?1:0),3),function(t,e,n){var r;for($(t-257,5),$(e-1,5),$(n-4,4),r=0;r<n;r++)$(D[2*ut.bl_order[r]+1],3);et(s,t-1),et(j,e-1)}(V.max_code+1,Y.max_code+1,o+1),it(s,j)),J(),n&&ot()}function st(t){e(0<=S?S:-1,I-S,t),S=I,h.flush_pending()}function ht(){var t,e,n,r;do{if(0===(r=i-T-I)&&0===I&&0===T)r=f;else if(-1==r)r--;else if(f+f-gt<=I){for(g.set(g.subarray(f,f+f),0),C-=f,I-=f,S-=f,n=t=v;e=65535&w[--n],w[n]=f<=e?e-f:0,0!=--t;);for(n=t=f;e=65535&m[--n],m[n]=f<=e?e-f:0,0!=--t;);r+=f}if(0===h.avail_in)return;t=h.read_buf(g,I+T,r),3<=(T+=t)&&(y=((y=255&g[I])<<x^255&g[I+1])&b)}while(T<gt&&0!==h.avail_in)}function ct(t){var e,n,r=P,i=I,o=F,a=f-gt<I?I-(f-gt):0,s=R,h=p,c=I+258,l=g[i+o-1],u=g[i+o];B<=F&&(r>>=2),T<s&&(s=T);do{if(g[(e=t)+o]==u&&g[e+o-1]==l&&g[e]==g[i]&&g[++e]==g[i+1]){i+=2,e++;do{}while(g[++i]==g[++e]&&g[++i]==g[++e]&&g[++i]==g[++e]&&g[++i]==g[++e]&&g[++i]==g[++e]&&g[++i]==g[++e]&&g[++i]==g[++e]&&g[++i]==g[++e]&&i<c);if(n=258-(c-i),i=c-258,o<n){if(C=t,s<=(o=n))break;l=g[i+o-1],u=g[i+o]}}}while((t=65535&m[t&h])>a&&0!=--r);return o<=T?o:T}function lt(t){return t.total_in=t.total_out=0,t.msg=null,G.pending=0,G.pending_out=0,c=113,u=0,V.dyn_tree=s,V.stat_desc=ft.static_l_desc,Y.dyn_tree=j,Y.stat_desc=ft.static_d_desc,X.dyn_tree=D,X.stat_desc=ft.static_bl_desc,W=H=0,L=8,J(),function(){var t;for(i=2*f,t=w[v-1]=0;t<v-1;t++)w[t]=0;E=dt[q].max_lazy,B=dt[q].good_length,R=dt[q].nice_length,P=dt[q].max_chain,k=F=2,y=A=T=S=I=0}(),0}G.depth=[],G.bl_count=[],G.heap=[],s=[],j=[],D=[],G.pqdownheap=function(t,e){for(var n=G.heap,r=n[e],i=e<<1;i<=G.heap_len&&(i<G.heap_len&&mt(t,n[i+1],n[i],G.depth)&&i++,!mt(t,r,n[i],G.depth));)n[e]=n[i],e=i,i<<=1;n[e]=r},G.deflateInit=function(t,e,n,r,i,o){return r||(r=8),i||(i=8),o||(o=0),t.msg=null,-1==e&&(e=6),i<1||9<i||8!=r||n<9||15<n||e<0||9<e||o<0||2<o?-2:(t.dstate=G,p=(f=1<<(d=n))-1,b=(v=1<<(a=i+7))-1,x=Math.floor((a+3-1)/3),g=new Uint8Array(2*f),m=[],w=[],U=1<<i+6,G.pending_buf=new Uint8Array(4*U),l=4*U,z=Math.floor(U/2),M=3*U,q=e,O=o,lt(t))},G.deflateEnd=function(){return 42!=c&&113!=c&&666!=c?-2:(G.pending_buf=null,g=m=w=null,G.dstate=null,113==c?-3:0)},G.deflateParams=function(t,e,n){var r=0;return-1==e&&(e=6),e<0||9<e||n<0||2<n?-2:(dt[q].func!=dt[e].func&&0!==t.total_in&&(r=t.deflate(1)),q!=e&&(E=dt[q=e].max_lazy,B=dt[q].good_length,R=dt[q].nice_length,P=dt[q].max_chain),O=n,r)},G.deflateSetDictionary=function(t,e,n){var r,i=n,o=0;if(!e||42!=c)return-2;if(i<3)return 0;for(f-gt<i&&(o=n-(i=f-gt)),g.set(e.subarray(o,o+i),0),S=I=i,y=((y=255&g[0])<<x^255&g[1])&b,r=0;r<=i-3;r++)y=(y<<x^255&g[r+2])&b,m[r&p]=w[y],w[y]=r;return 0},G.deflate=function(t,e){var n,r,i,o,a,s;if(4<e||e<0)return-2;if(!t.next_out||!t.next_in&&0!==t.avail_in||666==c&&4!=e)return t.msg=pt[4],-2;if(0===t.avail_out)return t.msg=pt[7],-5;if(h=t,o=u,u=e,42==c&&(r=8+(d-8<<4)<<8,3<(i=(q-1&255)>>1)&&(i=3),r|=i<<6,0!==I&&(r|=32),c=113,Q((s=r+=31-r%31)>>8&255),Q(255&s)),0!==G.pending){if(h.flush_pending(),0===h.avail_out)return u=-1,0}else if(0===h.avail_in&&e<=o&&4!=e)return h.msg=pt[7],-5;if(666==c&&0!==h.avail_in)return t.msg=pt[7],-5;if(0!==h.avail_in||0!==T||0!=e&&666!=c){switch(a=-1,dt[q].func){case 0:a=function(t){var e,n=65535;for(l-5<n&&(n=l-5);;){if(T<=1){if(ht(),0===T&&0==t)return 0;if(0===T)break}if(I+=T,e=S+n,((T=0)===I||e<=I)&&(T=I-e,I=e,st(!1),0===h.avail_out))return 0;if(f-gt<=I-S&&(st(!1),0===h.avail_out))return 0}return st(4==t),0===h.avail_out?4==t?2:0:4==t?3:1}(e);break;case 1:a=function(t){for(var e,n=0;;){if(T<gt){if(ht(),T<gt&&0==t)return 0;if(0===T)break}if(3<=T&&(y=(y<<x^255&g[I+2])&b,n=65535&w[y],m[I&p]=w[y],w[y]=I),0!==n&&(I-n&65535)<=f-gt&&2!=O&&(k=ct(n)),3<=k)if(e=rt(I-C,k-3),T-=k,k<=E&&3<=T){for(k--;y=(y<<x^255&g[++I+2])&b,n=65535&w[y],m[I&p]=w[y],w[y]=I,0!=--k;);I++}else I+=k,k=0,y=((y=255&g[I])<<x^255&g[I+1])&b;else e=rt(0,255&g[I]),T--,I++;if(e&&(st(!1),0===h.avail_out))return 0}return st(4==t),0===h.avail_out?4==t?2:0:4==t?3:1}(e);break;case 2:a=function(t){for(var e,n,r=0;;){if(T<gt){if(ht(),T<gt&&0==t)return 0;if(0===T)break}if(3<=T&&(y=(y<<x^255&g[I+2])&b,r=65535&w[y],m[I&p]=w[y],w[y]=I),F=k,_=C,k=2,0!==r&&F<E&&(I-r&65535)<=f-gt&&(2!=O&&(k=ct(r)),k<=5&&(1==O||3==k&&4096<I-C)&&(k=2)),3<=F&&k<=F){for(n=I+T-3,e=rt(I-1-_,F-3),T-=F-1,F-=2;++I<=n&&(y=(y<<x^255&g[I+2])&b,r=65535&w[y],m[I&p]=w[y],w[y]=I),0!=--F;);if(A=0,k=2,I++,e&&(st(!1),0===h.avail_out))return 0}else if(0!==A){if((e=rt(0,255&g[I-1]))&&st(!1),I++,T--,0===h.avail_out)return 0}else A=1,I++,T--}return 0!==A&&(e=rt(0,255&g[I-1]),A=0),st(4==t),0===h.avail_out?4==t?2:0:4==t?3:1}(e)}if(2!=a&&3!=a||(c=666),0==a||2==a)return 0===h.avail_out&&(u=-1),0;if(1==a){if(1==e)$(2,3),tt(256,ft.static_ltree),nt(),1+L+10-W<9&&($(2,3),tt(256,ft.static_ltree),nt()),L=7;else if(at(0,0,!1),3==e)for(n=0;n<v;n++)w[n]=0;if(h.flush_pending(),0===h.avail_out)return u=-1,0}}return 4!=e?0:1}}function i(){var t=this;t.next_in_index=0,t.next_out_index=0,t.avail_in=0,t.total_in=0,t.avail_out=0,t.total_out=0}i.prototype={deflateInit:function(t,e){return this.dstate=new r,e||(e=p),this.dstate.deflateInit(this,t,e)},deflate:function(t){return this.dstate?this.dstate.deflate(this,t):-2},deflateEnd:function(){if(!this.dstate)return-2;var t=this.dstate.deflateEnd();return this.dstate=null,t},deflateParams:function(t,e){return this.dstate?this.dstate.deflateParams(this,t,e):-2},deflateSetDictionary:function(t,e){return this.dstate?this.dstate.deflateSetDictionary(this,t,e):-2},read_buf:function(t,e,n){var r=this,i=r.avail_in;return n<i&&(i=n),0===i?0:(r.avail_in-=i,t.set(r.next_in.subarray(r.next_in_index,r.next_in_index+i),e),r.next_in_index+=i,r.total_in+=i,i)},flush_pending:function(){var t=this,e=t.dstate.pending;e>t.avail_out&&(e=t.avail_out),0!==e&&(t.next_out.set(t.dstate.pending_buf.subarray(t.dstate.pending_out,t.dstate.pending_out+e),t.next_out_index),t.next_out_index+=e,t.dstate.pending_out+=e,t.total_out+=e,t.avail_out-=e,t.dstate.pending-=e,0===t.dstate.pending&&(t.dstate.pending_out=0))}};var o=t.zip||t;o.Deflater=o._jzlib_Deflater=function(t){var s=new i,h=new Uint8Array(512),e=t?t.level:-1;void 0===e&&(e=-1),s.deflateInit(e),s.next_out=h,this.append=function(t,e){var n,r=[],i=0,o=0,a=0;if(t.length){s.next_in_index=0,s.next_in=t,s.avail_in=t.length;do{if(s.next_out_index=0,s.avail_out=512,0!=s.deflate(0))throw new Error("deflating: "+s.msg);s.next_out_index&&(512==s.next_out_index?r.push(new Uint8Array(h)):r.push(new Uint8Array(h.subarray(0,s.next_out_index)))),a+=s.next_out_index,e&&0<s.next_in_index&&s.next_in_index!=i&&(e(s.next_in_index),i=s.next_in_index)}while(0<s.avail_in||0===s.avail_out);return n=new Uint8Array(a),r.forEach(function(t){n.set(t,o),o+=t.length}),n}},this.flush=function(){var t,e,n=[],r=0,i=0;do{if(s.next_out_index=0,s.avail_out=512,1!=(t=s.deflate(4))&&0!=t)throw new Error("deflating: "+s.msg);0<512-s.avail_out&&n.push(new Uint8Array(h.subarray(0,s.next_out_index))),i+=s.next_out_index}while(0<s.avail_in||0===s.avail_out);return s.deflateEnd(),e=new Uint8Array(i),n.forEach(function(t){e.set(t,r),r+=t.length}),e}}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||"undefined"!=typeof __webpack_require__.g&&__webpack_require__.g||Function('return typeof this === "object" && this.content')()||Function("return this")()),
/**
   * A class to parse color values
   * @author Stoyan Stefanov <sstoo@gmail.com>
   * @link   http://www.phpied.com/rgb-color-parser-in-javascript/
   * @license Use it if you like it
   */
function(t){function f(t){var e;this.ok=!1,"#"==t.charAt(0)&&(t=t.substr(1,6)),t=(t=t.replace(/ /g,"")).toLowerCase();var l={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dodgerblue:"1e90ff",feldspar:"d19275",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslateblue:"8470ff",lightslategray:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",violetred:"d02090",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32"};for(var n in l)t==n&&(t=l[n]);for(var u=[{re:/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,example:["rgb(123, 234, 45)","rgb(255,234,245)"],process:function(t){return[parseInt(t[1]),parseInt(t[2]),parseInt(t[3])]}},{re:/^(\w{2})(\w{2})(\w{2})$/,example:["#00ff00","336699"],process:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/^(\w{1})(\w{1})(\w{1})$/,example:["#fb0","f0f"],process:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}}],r=0;r<u.length;r++){var i=u[r].re,o=u[r].process,a=i.exec(t);a&&(e=o(a),this.r=e[0],this.g=e[1],this.b=e[2],this.ok=!0)}this.r=this.r<0||isNaN(this.r)?0:255<this.r?255:this.r,this.g=this.g<0||isNaN(this.g)?0:255<this.g?255:this.g,this.b=this.b<0||isNaN(this.b)?0:255<this.b?255:this.b,this.toRGB=function(){return"rgb("+this.r+", "+this.g+", "+this.b+")"},this.toHex=function(){var t=this.r.toString(16),e=this.g.toString(16),n=this.b.toString(16);return 1==t.length&&(t="0"+t),1==e.length&&(e="0"+e),1==n.length&&(n="0"+n),"#"+t+e+n},this.getHelpXML=function(){for(var t=new Array,e=0;e<u.length;e++)for(var n=u[e].example,r=0;r<n.length;r++)t[t.length]=n[r];for(var i in l)t[t.length]=i;var o=document.createElement("ul");o.setAttribute("id","rgbcolor-examples");for(e=0;e<t.length;e++)try{var a=document.createElement("li"),s=new f(t[e]),h=document.createElement("div");h.style.cssText="margin: 3px; border: 1px solid black; background:"+s.toHex()+"; color:"+s.toHex(),h.appendChild(document.createTextNode("test"));var c=document.createTextNode(" "+t[e]+" -> "+s.toRGB()+" -> "+s.toHex());a.appendChild(h),a.appendChild(c),o.appendChild(a)}catch(t){}return o}} true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return f}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0,t.RGBColor=f}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||"undefined"!=typeof __webpack_require__.g&&__webpack_require__.g||Function('return typeof this === "object" && this.content')()||Function("return this")()),function(t){if(true)module.exports=t();else { var e; }}(function(){return function o(a,s,h){function c(n,t){if(!s[n]){if(!a[n]){var e=undefined;if(!t&&e)return require(n,!0);if(l)return l(n,!0);var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}var i=s[n]={exports:{}};a[n][0].call(i.exports,function(t){var e=a[n][1][t];return c(e||t)},i,i.exports,o,a,s,h)}return s[n].exports}for(var l=undefined,t=0;t<h.length;t++)c(h[t]);return c}({1:[function(t,q,O){(function(E){!function(t){var e="object"==typeof O&&O,n="object"==typeof q&&q&&q.exports==e&&q,r="object"==typeof E&&E;r.global!==r&&r.window!==r||(t=r);var i,o,w=2147483647,y=36,v=1,b=26,a=38,s=700,x=72,S=128,k="-",h=/^xn--/,c=/[^ -~]/,l=/\x2E|\u3002|\uFF0E|\uFF61/g,u={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},f=y-v,_=Math.floor,A=String.fromCharCode;function I(t){throw RangeError(u[t])}function d(t,e){for(var n=t.length;n--;)t[n]=e(t[n]);return t}function p(t,e){return d(t.split(l),e).join(".")}function C(t){for(var e,n,r=[],i=0,o=t.length;i<o;)55296<=(e=t.charCodeAt(i++))&&e<=56319&&i<o?56320==(64512&(n=t.charCodeAt(i++)))?r.push(((1023&e)<<10)+(1023&n)+65536):(r.push(e),i--):r.push(e);return r}function T(t){return d(t,function(t){var e="";return 65535<t&&(e+=A((t-=65536)>>>10&1023|55296),t=56320|1023&t),e+=A(t)}).join("")}function F(t,e){return t+22+75*(t<26)-((0!=e)<<5)}function P(t,e,n){var r=0;for(t=n?_(t/s):t>>1,t+=_(t/e);f*b>>1<t;r+=y)t=_(t/f);return _(r+(f+1)*t/(t+a))}function g(t){var e,n,r,i,o,a,s,h,c,l,u,f=[],d=t.length,p=0,g=S,m=x;for((n=t.lastIndexOf(k))<0&&(n=0),r=0;r<n;++r)128<=t.charCodeAt(r)&&I("not-basic"),f.push(t.charCodeAt(r));for(i=0<n?n+1:0;i<d;){for(o=p,a=1,s=y;d<=i&&I("invalid-input"),u=t.charCodeAt(i++),(y<=(h=u-48<10?u-22:u-65<26?u-65:u-97<26?u-97:y)||h>_((w-p)/a))&&I("overflow"),p+=h*a,!(h<(c=s<=m?v:m+b<=s?b:s-m));s+=y)a>_(w/(l=y-c))&&I("overflow"),a*=l;m=P(p-o,e=f.length+1,0==o),_(p/e)>w-g&&I("overflow"),g+=_(p/e),p%=e,f.splice(p++,0,g)}return T(f)}function m(t){var e,n,r,i,o,a,s,h,c,l,u,f,d,p,g,m=[];for(f=(t=C(t)).length,e=S,o=x,a=n=0;a<f;++a)(u=t[a])<128&&m.push(A(u));for(r=i=m.length,i&&m.push(k);r<f;){for(s=w,a=0;a<f;++a)e<=(u=t[a])&&u<s&&(s=u);for(s-e>_((w-n)/(d=r+1))&&I("overflow"),n+=(s-e)*d,e=s,a=0;a<f;++a)if((u=t[a])<e&&++n>w&&I("overflow"),u==e){for(h=n,c=y;!(h<(l=c<=o?v:o+b<=c?b:c-o));c+=y)g=h-l,p=y-l,m.push(A(F(l+g%p,0))),h=_(g/p);m.push(A(F(h,0))),o=P(n,d,r==i),n=0,++r}++n,++e}return m.join("")}if(i={version:"1.2.4",ucs2:{decode:C,encode:T},decode:g,encode:m,toASCII:function(t){return p(t,function(t){return c.test(t)?"xn--"+m(t):t})},toUnicode:function(t){return p(t,function(t){return h.test(t)?g(t.slice(4).toLowerCase()):t})}},e&&!e.nodeType)if(n)n.exports=i;else for(o in i)i.hasOwnProperty(o)&&(e[o]=i[o]);else t.punycode=i}(this)}).call(this,"undefined"!=typeof __webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(t,e,n){var i=t("./log");function u(t,e){for(var n=3===t.nodeType?document.createTextNode(t.nodeValue):t.cloneNode(!1),r=t.firstChild;r;)!0!==e&&1===r.nodeType&&"SCRIPT"===r.nodeName||n.appendChild(u(r,e)),r=r.nextSibling;return 1===t.nodeType&&(n._scrollTop=t.scrollTop,n._scrollLeft=t.scrollLeft,"CANVAS"===t.nodeName?function(e,t){try{t&&(t.width=e.width,t.height=e.height,t.getContext("2d").putImageData(e.getContext("2d").getImageData(0,0,e.width,e.height),0,0))}catch(t){i("Unable to copy canvas content from",e,t)}}(t,n):"TEXTAREA"!==t.nodeName&&"SELECT"!==t.nodeName||(n.value=t.value)),n}e.exports=function(o,t,e,n,a,s,h){var c=u(o.documentElement,a.javascriptEnabled),l=t.createElement("iframe");return l.className="html2canvas-container",l.style.visibility="hidden",l.style.position="fixed",l.style.left="-10000px",l.style.top="0px",l.style.border="0",l.width=e,l.height=n,l.scrolling="no",t.body.appendChild(l),new Promise(function(e){var t,n,r,i=l.contentWindow.document;l.contentWindow.onload=l.onload=function(){var t=setInterval(function(){0<i.body.childNodes.length&&(!function t(e){if(1===e.nodeType){e.scrollTop=e._scrollTop,e.scrollLeft=e._scrollLeft;for(var n=e.firstChild;n;)t(n),n=n.nextSibling}}(i.documentElement),clearInterval(t),"view"===a.type&&(l.contentWindow.scrollTo(s,h),!/(iPad|iPhone|iPod)/g.test(navigator.userAgent)||l.contentWindow.scrollY===h&&l.contentWindow.scrollX===s||(i.documentElement.style.top=-h+"px",i.documentElement.style.left=-s+"px",i.documentElement.style.position="absolute")),e(l))},50)},i.open(),i.write("<!DOCTYPE html><html></html>"),n=s,r=h,!(t=o).defaultView||n===t.defaultView.pageXOffset&&r===t.defaultView.pageYOffset||t.defaultView.scrollTo(n,r),i.replaceChild(i.adoptNode(c),i.documentElement),i.close()})}},{"./log":13}],3:[function(t,e,n){function r(t){this.r=0,this.g=0,this.b=0,this.a=null;this.fromArray(t)||this.namedColor(t)||this.rgb(t)||this.rgba(t)||this.hex6(t)||this.hex3(t)}r.prototype.darken=function(t){var e=1-t;return new r([Math.round(this.r*e),Math.round(this.g*e),Math.round(this.b*e),this.a])},r.prototype.isTransparent=function(){return 0===this.a},r.prototype.isBlack=function(){return 0===this.r&&0===this.g&&0===this.b},r.prototype.fromArray=function(t){return Array.isArray(t)&&(this.r=Math.min(t[0],255),this.g=Math.min(t[1],255),this.b=Math.min(t[2],255),3<t.length&&(this.a=t[3])),Array.isArray(t)};var i=/^#([a-f0-9]{3})$/i;r.prototype.hex3=function(t){var e;return null!==(e=t.match(i))&&(this.r=parseInt(e[1][0]+e[1][0],16),this.g=parseInt(e[1][1]+e[1][1],16),this.b=parseInt(e[1][2]+e[1][2],16)),null!==e};var o=/^#([a-f0-9]{6})$/i;r.prototype.hex6=function(t){var e=null;return null!==(e=t.match(o))&&(this.r=parseInt(e[1].substring(0,2),16),this.g=parseInt(e[1].substring(2,4),16),this.b=parseInt(e[1].substring(4,6),16)),null!==e};var a=/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;r.prototype.rgb=function(t){var e;return null!==(e=t.match(a))&&(this.r=Number(e[1]),this.g=Number(e[2]),this.b=Number(e[3])),null!==e};var s=/^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?\.?\d+)\s*\)$/;r.prototype.rgba=function(t){var e;return null!==(e=t.match(s))&&(this.r=Number(e[1]),this.g=Number(e[2]),this.b=Number(e[3]),this.a=Number(e[4])),null!==e},r.prototype.toString=function(){return null!==this.a&&1!==this.a?"rgba("+[this.r,this.g,this.b,this.a].join(",")+")":"rgb("+[this.r,this.g,this.b].join(",")+")"},r.prototype.namedColor=function(t){t=t.toLowerCase();var e=h[t];if(e)this.r=e[0],this.g=e[1],this.b=e[2];else if("transparent"===t)return this.r=this.g=this.b=this.a=0,!0;return!!e},r.prototype.isColor=!0;var h={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};e.exports=r},{}],4:[function(t,e,n){var p=t("./support"),d=t("./renderers/canvas"),g=t("./imageloader"),m=t("./nodeparser"),r=t("./nodecontainer"),w=t("./log"),i=t("./utils"),y=t("./clone"),v=t("./proxy").loadUrlDocument,b=i.getBounds,x="data-html2canvas-node",S=0;function o(t,e){var n,r,i=S++;if((e=e||{}).logging&&(w.options.logging=!0,w.options.start=Date.now()),e.async=void 0===e.async||e.async,e.allowTaint=void 0!==e.allowTaint&&e.allowTaint,e.removeContainer=void 0===e.removeContainer||e.removeContainer,e.javascriptEnabled=void 0!==e.javascriptEnabled&&e.javascriptEnabled,e.imageTimeout=void 0===e.imageTimeout?1e4:e.imageTimeout,e.renderer="function"==typeof e.renderer?e.renderer:d,e.strict=!!e.strict,"string"==typeof t){if("string"!=typeof e.proxy)return Promise.reject("Proxy must be used when rendering url");var o=null!=e.width?e.width:window.innerWidth,a=null!=e.height?e.height:window.innerHeight;return v((n=t,r=document.createElement("a"),r.href=n,r.href=r.href,r),e.proxy,document,o,a,e).then(function(t){return k(t.contentWindow.document.documentElement,t,e,o,a)})}var s,h,c,l,u,f=(void 0===t?[document.documentElement]:t.length?t:[t])[0];return f.setAttribute(x+i,i),(s=f.ownerDocument,h=e,c=f.ownerDocument.defaultView.innerWidth,l=f.ownerDocument.defaultView.innerHeight,u=i,y(s,s,c,l,h,s.defaultView.pageXOffset,s.defaultView.pageYOffset).then(function(t){w("Document cloned");var e=x+u,n="["+e+"='"+u+"']";s.querySelector(n).removeAttribute(e);var r=t.contentWindow,i=r.document.querySelector(n),o="function"==typeof h.onclone?Promise.resolve(h.onclone(r.document)):Promise.resolve(!0);return o.then(function(){return k(i,t,h,c,l)})})).then(function(t){return"function"==typeof e.onrendered&&(w("options.onrendered is deprecated, html2canvas returns a Promise containing the canvas"),e.onrendered(t)),t})}o.CanvasRenderer=d,o.NodeContainer=r,o.log=w,o.utils=i;var a="undefined"==typeof document||"function"!=typeof Object.create||"function"!=typeof document.createElement("canvas").getContext?function(){return Promise.reject("No canvas support")}:o;function k(n,r,i,t,e){var o,a,s=r.contentWindow,h=new p(s.document),c=new g(i,h),l=b(n),u="view"===i.type?t:(o=s.document,Math.max(Math.max(o.body.scrollWidth,o.documentElement.scrollWidth),Math.max(o.body.offsetWidth,o.documentElement.offsetWidth),Math.max(o.body.clientWidth,o.documentElement.clientWidth))),f="view"===i.type?e:(a=s.document,Math.max(Math.max(a.body.scrollHeight,a.documentElement.scrollHeight),Math.max(a.body.offsetHeight,a.documentElement.offsetHeight),Math.max(a.body.clientHeight,a.documentElement.clientHeight))),d=new i.renderer(u,f,c,i,document);return new m(n,d,h,c,i).ready.then(function(){var t,e;return w("Finished rendering"),t="view"===i.type?_(d.canvas,{width:d.canvas.width,height:d.canvas.height,top:0,left:0,x:0,y:0}):n===s.document.body||n===s.document.documentElement||null!=i.canvas?d.canvas:_(d.canvas,{width:null!=i.width?i.width:l.width,height:null!=i.height?i.height:l.height,top:l.top,left:l.left,x:0,y:0}),e=r,i.removeContainer&&(e.parentNode.removeChild(e),w("Cleaned up container")),t})}function _(t,e){var n=document.createElement("canvas"),r=Math.min(t.width-1,Math.max(0,e.left)),i=Math.min(t.width,Math.max(1,e.left+e.width)),o=Math.min(t.height-1,Math.max(0,e.top)),a=Math.min(t.height,Math.max(1,e.top+e.height));n.width=e.width,n.height=e.height;var s=i-r,h=a-o;return w("Cropping canvas at:","left:",e.left,"top:",e.top,"width:",s,"height:",h),w("Resulting crop with width",e.width,"and height",e.height,"with x",r,"and y",o),n.getContext("2d").drawImage(t,r,o,s,h,e.x,e.y,s,h),n}e.exports=a},{"./clone":2,"./imageloader":11,"./log":13,"./nodecontainer":14,"./nodeparser":15,"./proxy":16,"./renderers/canvas":20,"./support":22,"./utils":26}],5:[function(t,e,n){var r=t("./log"),i=t("./utils").smallImage;e.exports=function t(e){if(this.src=e,r("DummyImageContainer for",e),!this.promise||!this.image){r("Initiating DummyImageContainer"),t.prototype.image=new Image;var n=this.image;t.prototype.promise=new Promise(function(t,e){n.onload=t,n.onerror=e,n.src=i(),!0===n.complete&&t(n)})}}},{"./log":13,"./utils":26}],6:[function(t,e,n){var h=t("./utils").smallImage;e.exports=function(t,e){var n,r,i=document.createElement("div"),o=document.createElement("img"),a=document.createElement("span"),s="Hidden Text";i.style.visibility="hidden",i.style.fontFamily=t,i.style.fontSize=e,i.style.margin=0,i.style.padding=0,document.body.appendChild(i),o.src=h(),o.width=1,o.height=1,o.style.margin=0,o.style.padding=0,o.style.verticalAlign="baseline",a.style.fontFamily=t,a.style.fontSize=e,a.style.margin=0,a.style.padding=0,a.appendChild(document.createTextNode(s)),i.appendChild(a),i.appendChild(o),n=o.offsetTop-a.offsetTop+1,i.removeChild(a),i.appendChild(document.createTextNode(s)),i.style.lineHeight="normal",o.style.verticalAlign="super",r=o.offsetTop-i.offsetTop+1,document.body.removeChild(i),this.baseline=n,this.lineWidth=1,this.middle=r}},{"./utils":26}],7:[function(t,e,n){var r=t("./font");function i(){this.data={}}i.prototype.getMetrics=function(t,e){return void 0===this.data[t+"-"+e]&&(this.data[t+"-"+e]=new r(t,e)),this.data[t+"-"+e]},e.exports=i},{"./font":6}],8:[function(o,t,e){var a=o("./utils").getBounds,i=o("./proxy").loadUrlDocument;function n(e,t,n){this.image=null,this.src=e;var r=this,i=a(e);this.promise=(t?new Promise(function(t){"about:blank"===e.contentWindow.document.URL||null==e.contentWindow.document.documentElement?e.contentWindow.onload=e.onload=function(){t(e)}:t(e)}):this.proxyLoad(n.proxy,i,n)).then(function(t){return o("./core")(t.contentWindow.document.documentElement,{type:"view",width:t.width,height:t.height,proxy:n.proxy,javascriptEnabled:n.javascriptEnabled,removeContainer:n.removeContainer,allowTaint:n.allowTaint,imageTimeout:n.imageTimeout/2})}).then(function(t){return r.image=t})}n.prototype.proxyLoad=function(t,e,n){var r=this.src;return i(r.src,t,r.ownerDocument,e.width,e.height,n)},t.exports=n},{"./core":4,"./proxy":16,"./utils":26}],9:[function(t,e,n){function r(t){this.src=t.value,this.colorStops=[],this.type=null,this.x0=.5,this.y0=.5,this.x1=.5,this.y1=.5,this.promise=Promise.resolve(!0)}r.TYPES={LINEAR:1,RADIAL:2},r.REGEXP_COLORSTOP=/^\s*(rgba?\(\s*\d{1,3},\s*\d{1,3},\s*\d{1,3}(?:,\s*[0-9\.]+)?\s*\)|[a-z]{3,20}|#[a-f0-9]{3,6})(?:\s+(\d{1,3}(?:\.\d+)?)(%|px)?)?(?:\s|$)/i,e.exports=r},{}],10:[function(t,e,n){e.exports=function(n,r){this.src=n,this.image=new Image;var i=this;this.tainted=null,this.promise=new Promise(function(t,e){i.image.onload=t,i.image.onerror=e,r&&(i.image.crossOrigin="anonymous"),i.image.src=n,!0===i.image.complete&&t(i.image)})}},{}],11:[function(t,e,n){var o=t("./log"),r=t("./imagecontainer"),i=t("./dummyimagecontainer"),a=t("./proxyimagecontainer"),s=t("./framecontainer"),h=t("./svgcontainer"),c=t("./svgnodecontainer"),l=t("./lineargradientcontainer"),u=t("./webkitgradientcontainer"),f=t("./utils").bind;function d(t,e){this.link=null,this.options=t,this.support=e,this.origin=this.getOrigin(window.location.href)}d.prototype.findImages=function(t){var e=[];return t.reduce(function(t,e){switch(e.node.nodeName){case"IMG":return t.concat([{args:[e.node.src],method:"url"}]);case"svg":case"IFRAME":return t.concat([{args:[e.node],method:e.node.nodeName}])}return t},[]).forEach(this.addImage(e,this.loadImage),this),e},d.prototype.findBackgroundImage=function(t,e){return e.parseBackgroundImages().filter(this.hasImageBackground).forEach(this.addImage(t,this.loadImage),this),t},d.prototype.addImage=function(n,r){return function(e){e.args.forEach(function(t){this.imageExists(n,t)||(n.splice(0,0,r.call(this,e)),o("Added image #"+n.length,"string"==typeof t?t.substring(0,100):t))},this)}},d.prototype.hasImageBackground=function(t){return"none"!==t.method},d.prototype.loadImage=function(t){if("url"===t.method){var e=t.args[0];return!this.isSVG(e)||this.support.svg||this.options.allowTaint?e.match(/data:image\/.*;base64,/i)?new r(e.replace(/url\(['"]{0,}|['"]{0,}\)$/gi,""),!1):this.isSameOrigin(e)||!0===this.options.allowTaint||this.isSVG(e)?new r(e,!1):this.support.cors&&!this.options.allowTaint&&this.options.useCORS?new r(e,!0):this.options.proxy?new a(e,this.options.proxy):new i(e):new h(e)}return"linear-gradient"===t.method?new l(t):"gradient"===t.method?new u(t):"svg"===t.method?new c(t.args[0],this.support.svg):"IFRAME"===t.method?new s(t.args[0],this.isSameOrigin(t.args[0].src),this.options):new i(t)},d.prototype.isSVG=function(t){return"svg"===t.substring(t.length-3).toLowerCase()||h.prototype.isInline(t)},d.prototype.imageExists=function(t,e){return t.some(function(t){return t.src===e})},d.prototype.isSameOrigin=function(t){return this.getOrigin(t)===this.origin},d.prototype.getOrigin=function(t){var e=this.link||(this.link=document.createElement("a"));return e.href=t,e.href=e.href,e.protocol+e.hostname+e.port},d.prototype.getPromise=function(e){return this.timeout(e,this.options.imageTimeout).catch(function(){return new i(e.src).promise.then(function(t){e.image=t})})},d.prototype.get=function(e){var n=null;return this.images.some(function(t){return(n=t).src===e})?n:null},d.prototype.fetch=function(t){return this.images=t.reduce(f(this.findBackgroundImage,this),this.findImages(t)),this.images.forEach(function(e,n){e.promise.then(function(){o("Succesfully loaded image #"+(n+1),e)},function(t){o("Failed loading image #"+(n+1),e,t)})}),this.ready=Promise.all(this.images.map(this.getPromise,this)),o("Finished searching images"),this},d.prototype.timeout=function(n,r){var i,t=Promise.race([n.promise,new Promise(function(t,e){i=setTimeout(function(){o("Timed out loading image",n),e(n)},r)})]).then(function(t){return clearTimeout(i),t});return t.catch(function(){clearTimeout(i)}),t},e.exports=d},{"./dummyimagecontainer":5,"./framecontainer":8,"./imagecontainer":10,"./lineargradientcontainer":12,"./log":13,"./proxyimagecontainer":17,"./svgcontainer":23,"./svgnodecontainer":24,"./utils":26,"./webkitgradientcontainer":27}],12:[function(t,e,n){var i=t("./gradientcontainer"),o=t("./color");function r(t){i.apply(this,arguments),this.type=i.TYPES.LINEAR;var e=r.REGEXP_DIRECTION.test(t.args[0])||!i.REGEXP_COLORSTOP.test(t.args[0]);e?t.args[0].split(/\s+/).reverse().forEach(function(t,e){switch(t){case"left":this.x0=0,this.x1=1;break;case"top":this.y0=0,this.y1=1;break;case"right":this.x0=1,this.x1=0;break;case"bottom":this.y0=1,this.y1=0;break;case"to":var n=this.y0,r=this.x0;this.y0=this.y1,this.x0=this.x1,this.x1=r,this.y1=n;break;case"center":break;default:var i=.01*parseFloat(t,10);if(isNaN(i))break;0===e?(this.y0=i,this.y1=1-this.y0):(this.x0=i,this.x1=1-this.x0)}},this):(this.y0=0,this.y1=1),this.colorStops=t.args.slice(e?1:0).map(function(t){var e=t.match(i.REGEXP_COLORSTOP),n=+e[2],r=0===n?"%":e[3];return{color:new o(e[1]),stop:"%"===r?n/100:null}}),null===this.colorStops[0].stop&&(this.colorStops[0].stop=0),null===this.colorStops[this.colorStops.length-1].stop&&(this.colorStops[this.colorStops.length-1].stop=1),this.colorStops.forEach(function(n,r){null===n.stop&&this.colorStops.slice(r).some(function(t,e){return null!==t.stop&&(n.stop=(t.stop-this.colorStops[r-1].stop)/(e+1)+this.colorStops[r-1].stop,!0)},this)},this)}r.prototype=Object.create(i.prototype),r.REGEXP_DIRECTION=/^\s*(?:to|left|right|top|bottom|center|\d{1,3}(?:\.\d+)?%?)(?:\s|$)/i,e.exports=r},{"./color":3,"./gradientcontainer":9}],13:[function(t,e,n){var r=function(){r.options.logging&&window.console&&window.console.log&&Function.prototype.bind.call(window.console.log,window.console).apply(window.console,[Date.now()-r.options.start+"ms","html2canvas:"].concat([].slice.call(arguments,0)))};r.options={logging:!1},e.exports=r},{}],14:[function(t,e,n){var o=t("./color"),r=t("./utils"),i=r.getBounds,a=r.parseBackgrounds,s=r.offsetBounds;function h(t,e){this.node=t,this.parent=e,this.stack=null,this.bounds=null,this.borders=null,this.clip=[],this.backgroundClip=[],this.offsetBounds=null,this.visible=null,this.computedStyles=null,this.colors={},this.styles={},this.backgroundImages=null,this.transformData=null,this.transformMatrix=null,this.isPseudoElement=!1,this.opacity=null}function c(t){return-1!==t.toString().indexOf("%")}function l(t){return t.replace("px","")}function u(t){return parseFloat(t)}h.prototype.cloneTo=function(t){t.visible=this.visible,t.borders=this.borders,t.bounds=this.bounds,t.clip=this.clip,t.backgroundClip=this.backgroundClip,t.computedStyles=this.computedStyles,t.styles=this.styles,t.backgroundImages=this.backgroundImages,t.opacity=this.opacity},h.prototype.getOpacity=function(){return null===this.opacity?this.opacity=this.cssFloat("opacity"):this.opacity},h.prototype.assignStack=function(t){(this.stack=t).children.push(this)},h.prototype.isElementVisible=function(){return this.node.nodeType===Node.TEXT_NODE?this.parent.visible:"none"!==this.css("display")&&"hidden"!==this.css("visibility")&&!this.node.hasAttribute("data-html2canvas-ignore")&&("INPUT"!==this.node.nodeName||"hidden"!==this.node.getAttribute("type"))},h.prototype.css=function(t){return this.computedStyles||(this.computedStyles=this.isPseudoElement?this.parent.computedStyle(this.before?":before":":after"):this.computedStyle(null)),this.styles[t]||(this.styles[t]=this.computedStyles[t])},h.prototype.prefixedCss=function(e){var n=this.css(e);return void 0===n&&["webkit","moz","ms","o"].some(function(t){return void 0!==(n=this.css(t+e.substr(0,1).toUpperCase()+e.substr(1)))},this),void 0===n?null:n},h.prototype.computedStyle=function(t){return this.node.ownerDocument.defaultView.getComputedStyle(this.node,t)},h.prototype.cssInt=function(t){var e=parseInt(this.css(t),10);return isNaN(e)?0:e},h.prototype.color=function(t){return this.colors[t]||(this.colors[t]=new o(this.css(t)))},h.prototype.cssFloat=function(t){var e=parseFloat(this.css(t));return isNaN(e)?0:e},h.prototype.fontWeight=function(){var t=this.css("fontWeight");switch(parseInt(t,10)){case 401:t="bold";break;case 400:t="normal"}return t},h.prototype.parseClip=function(){var t=this.css("clip").match(this.CLIP);return t?{top:parseInt(t[1],10),right:parseInt(t[2],10),bottom:parseInt(t[3],10),left:parseInt(t[4],10)}:null},h.prototype.parseBackgroundImages=function(){return this.backgroundImages||(this.backgroundImages=a(this.css("backgroundImage")))},h.prototype.cssList=function(t,e){var n=(this.css(t)||"").split(",");return 1===(n=(n=n[e||0]||n[0]||"auto").trim().split(" ")).length&&(n=[n[0],c(n[0])?"auto":n[0]]),n},h.prototype.parseBackgroundSize=function(t,e,n){var r,i,o=this.cssList("backgroundSize",n);if(c(o[0]))r=t.width*parseFloat(o[0])/100;else{if(/contain|cover/.test(o[0])){var a=t.width/t.height,s=e.width/e.height;return a<s^"contain"===o[0]?{width:t.height*s,height:t.height}:{width:t.width,height:t.width/s}}r=parseInt(o[0],10)}return i="auto"===o[0]&&"auto"===o[1]?e.height:"auto"===o[1]?r/e.width*e.height:c(o[1])?t.height*parseFloat(o[1])/100:parseInt(o[1],10),"auto"===o[0]&&(r=i/e.height*e.width),{width:r,height:i}},h.prototype.parseBackgroundPosition=function(t,e,n,r){var i,o,a=this.cssList("backgroundPosition",n);return i=c(a[0])?(t.width-(r||e).width)*(parseFloat(a[0])/100):parseInt(a[0],10),o="auto"===a[1]?i/e.width*e.height:c(a[1])?(t.height-(r||e).height)*parseFloat(a[1])/100:parseInt(a[1],10),"auto"===a[0]&&(i=o/e.height*e.width),{left:i,top:o}},h.prototype.parseBackgroundRepeat=function(t){return this.cssList("backgroundRepeat",t)[0]},h.prototype.parseTextShadows=function(){var t=this.css("textShadow"),e=[];if(t&&"none"!==t)for(var n=t.match(this.TEXT_SHADOW_PROPERTY),r=0;n&&r<n.length;r++){var i=n[r].match(this.TEXT_SHADOW_VALUES);e.push({color:new o(i[0]),offsetX:i[1]?parseFloat(i[1].replace("px","")):0,offsetY:i[2]?parseFloat(i[2].replace("px","")):0,blur:i[3]?i[3].replace("px",""):0})}return e},h.prototype.parseTransform=function(){if(!this.transformData)if(this.hasTransform()){var t=this.parseBounds(),e=this.prefixedCss("transformOrigin").split(" ").map(l).map(u);e[0]+=t.left,e[1]+=t.top,this.transformData={origin:e,matrix:this.parseTransformMatrix()}}else this.transformData={origin:[0,0],matrix:[1,0,0,1,0,0]};return this.transformData},h.prototype.parseTransformMatrix=function(){if(!this.transformMatrix){var t=this.prefixedCss("transform"),e=t?function(t){{if(t&&"matrix"===t[1])return t[2].split(",").map(function(t){return parseFloat(t.trim())});if(t&&"matrix3d"===t[1]){var e=t[2].split(",").map(function(t){return parseFloat(t.trim())});return[e[0],e[1],e[4],e[5],e[12],e[13]]}}}(t.match(this.MATRIX_PROPERTY)):null;this.transformMatrix=e||[1,0,0,1,0,0]}return this.transformMatrix},h.prototype.parseBounds=function(){return this.bounds||(this.bounds=this.hasTransform()?s(this.node):i(this.node))},h.prototype.hasTransform=function(){return"1,0,0,1,0,0"!==this.parseTransformMatrix().join(",")||this.parent&&this.parent.hasTransform()},h.prototype.getValue=function(){var t,e,n=this.node.value||"";return"SELECT"===this.node.tagName?(t=this.node,n=(e=t.options[t.selectedIndex||0])&&e.text||""):"password"===this.node.type&&(n=Array(n.length+1).join("•")),0===n.length?this.node.placeholder||"":n},h.prototype.MATRIX_PROPERTY=/(matrix|matrix3d)\((.+)\)/,h.prototype.TEXT_SHADOW_PROPERTY=/((rgba|rgb)\([^\)]+\)(\s-?\d+px){0,})/g,h.prototype.TEXT_SHADOW_VALUES=/(-?\d+px)|(#.+)|(rgb\(.+\))|(rgba\(.+\))/g,h.prototype.CLIP=/^rect\((\d+)px,? (\d+)px,? (\d+)px,? (\d+)px\)$/,e.exports=h},{"./color":3,"./utils":26}],15:[function(t,e,n){var s=t("./log"),h=t("punycode"),c=t("./nodecontainer"),f=t("./textcontainer"),d=t("./pseudoelementcontainer"),l=t("./fontmetrics"),u=t("./color"),p=t("./stackingcontext"),r=t("./utils"),g=r.bind,a=r.getBounds,m=r.parseBackgrounds,w=r.offsetBounds;function i(t,e,n,r,i){s("Starting NodeParser"),this.renderer=e,this.options=i,this.range=null,this.support=n,this.renderQueue=[],this.stack=new p(!0,1,t.ownerDocument,null);var o=new c(t,null);if(i.background&&e.rectangle(0,0,e.width,e.height,new u(i.background)),t===t.ownerDocument.documentElement){var a=new c(o.color("backgroundColor").isTransparent()?t.ownerDocument.body:t.ownerDocument.documentElement,null);e.rectangle(0,0,e.width,e.height,a.color("backgroundColor"))}o.visibile=o.isElementVisible(),this.createPseudoHideStyles(t.ownerDocument),this.disableAnimations(t.ownerDocument),this.nodes=L([o].concat(this.getChildren(o)).filter(function(t){return t.visible=t.isElementVisible()}).map(this.getPseudoElements,this)),this.fontMetrics=new l,s("Fetched nodes, total:",this.nodes.length),s("Calculate overflow clips"),this.calculateOverflowClips(),s("Start fetching images"),this.images=r.fetch(this.nodes.filter(j)),this.ready=this.images.ready.then(g(function(){return s("Images loaded, starting parsing"),s("Creating stacking contexts"),this.createStackingContexts(),s("Sorting stacking contexts"),this.sortStackingContexts(this.stack),this.parse(this.stack),s("Render queue created with "+this.renderQueue.length+" items"),new Promise(g(function(t){i.async?"function"==typeof i.async?i.async.call(this,this.renderQueue,t):0<this.renderQueue.length?(this.renderIndex=0,this.asyncRenderer(this.renderQueue,t)):t():(this.renderQueue.forEach(this.paint,this),t())},this))},this))}function o(t){return t.parent&&t.parent.clip.length}function y(){}i.prototype.calculateOverflowClips=function(){this.nodes.forEach(function(t){if(j(t)){D(t)&&t.appendToDOM(),t.borders=this.parseBorders(t);var e="hidden"===t.css("overflow")?[t.borders.clip]:[],n=t.parseClip();n&&-1!==["absolute","fixed"].indexOf(t.css("position"))&&e.push([["rect",t.bounds.left+n.left,t.bounds.top+n.top,n.right-n.left,n.bottom-n.top]]),t.clip=o(t)?t.parent.clip.concat(e):e,t.backgroundClip="hidden"!==t.css("overflow")?t.clip.concat([t.borders.clip]):t.clip,D(t)&&t.cleanDOM()}else M(t)&&(t.clip=o(t)?t.parent.clip:[]);D(t)||(t.bounds=null)},this)},i.prototype.asyncRenderer=function(t,e,n){n=n||Date.now(),this.paint(t[this.renderIndex++]),t.length===this.renderIndex?e():n+20>Date.now()?this.asyncRenderer(t,e,n):setTimeout(g(function(){this.asyncRenderer(t,e)},this),0)},i.prototype.createPseudoHideStyles=function(t){this.createStyles(t,"."+d.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE+':before { content: "" !important; display: none !important; }.'+d.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER+':after { content: "" !important; display: none !important; }')},i.prototype.disableAnimations=function(t){this.createStyles(t,"* { -webkit-animation: none !important; -moz-animation: none !important; -o-animation: none !important; animation: none !important; -webkit-transition: none !important; -moz-transition: none !important; -o-transition: none !important; transition: none !important;}")},i.prototype.createStyles=function(t,e){var n=t.createElement("style");n.innerHTML=e,t.body.appendChild(n)},i.prototype.getPseudoElements=function(t){var e=[[t]];if(t.node.nodeType===Node.ELEMENT_NODE){var n=this.getPseudoElement(t,":before"),r=this.getPseudoElement(t,":after");n&&e.push(n),r&&e.push(r)}return L(e)},i.prototype.getPseudoElement=function(t,e){var n=t.computedStyle(e);if(!n||!n.content||"none"===n.content||"-moz-alt-content"===n.content||"none"===n.display)return null;for(var r,i,o=(r=n.content,(i=r.substr(0,1))===r.substr(r.length-1)&&i.match(/'|"/)?r.substr(1,r.length-2):r),a="url"===o.substr(0,3),s=document.createElement(a?"img":"html2canvaspseudoelement"),h=new d(s,t,e),c=n.length-1;0<=c;c--){var l=n.item(c).replace(/(\-[a-z])/g,function(t){return t.toUpperCase().replace("-","")});s.style[l]=n[l]}if(s.className=d.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE+" "+d.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER,a)return s.src=m(o)[0].args[0],[h];var u=document.createTextNode(o);return s.appendChild(u),[h,new f(u,h)]},i.prototype.getChildren=function(n){return L([].filter.call(n.node.childNodes,q).map(function(t){var e=[t.nodeType===Node.TEXT_NODE?new f(t,n):new c(t,n)].filter(z);return t.nodeType===Node.ELEMENT_NODE&&e.length&&"TEXTAREA"!==t.tagName?e[0].isElementVisible()?e.concat(this.getChildren(e[0])):[]:e},this))},i.prototype.newStackingContext=function(t,e){var n=new p(e,t.getOpacity(),t.node,t.parent);t.cloneTo(n),(e?n.getParentStack(this):n.parent.stack).contexts.push(n),t.stack=n},i.prototype.createStackingContexts=function(){this.nodes.forEach(function(t){var e,n;j(t)&&(this.isRootElement(t)||t.getOpacity()<1||(n=(e=t).css("position"),"auto"!==(-1!==["absolute","relative","fixed"].indexOf(n)?e.css("zIndex"):"auto"))||this.isBodyWithTransparentRoot(t)||t.hasTransform())?this.newStackingContext(t,!0):j(t)&&(O(t)&&T(t)||-1!==["inline-block","inline-table"].indexOf(t.css("display"))||B(t))?this.newStackingContext(t,!1):t.assignStack(t.parent.stack)},this)},i.prototype.isBodyWithTransparentRoot=function(t){return"BODY"===t.node.nodeName&&t.parent.color("backgroundColor").isTransparent()},i.prototype.isRootElement=function(t){return null===t.parent},i.prototype.sortStackingContexts=function(t){var n;t.contexts.sort((n=t.contexts.slice(0),function(t,e){return t.cssInt("zIndex")+n.indexOf(t)/n.length-(e.cssInt("zIndex")+n.indexOf(e)/n.length)})),t.contexts.forEach(this.sortStackingContexts,this)},i.prototype.parseTextBounds=function(a){return function(t,e,n){if("none"!==a.parent.css("textDecoration").substr(0,4)||0!==t.trim().length){if(this.support.rangeBounds&&!a.parent.hasTransform()){var r=n.slice(0,e).join("").length;return this.getRangeBounds(a.node,r,t.length)}if(a.node&&"string"==typeof a.node.data){var i=a.node.splitText(t.length),o=this.getWrapperBounds(a.node,a.parent.hasTransform());return a.node=i,o}}else this.support.rangeBounds&&!a.parent.hasTransform()||(a.node=a.node.splitText(t.length));return{}}},i.prototype.getWrapperBounds=function(t,e){var n=t.ownerDocument.createElement("html2canvaswrapper"),r=t.parentNode,i=t.cloneNode(!0);n.appendChild(t.cloneNode(!0)),r.replaceChild(n,t);var o=e?w(n):a(n);return r.replaceChild(i,n),o},i.prototype.getRangeBounds=function(t,e,n){var r=this.range||(this.range=t.ownerDocument.createRange());return r.setStart(t,e),r.setEnd(t,e+n),r.getBoundingClientRect()},i.prototype.parse=function(t){var e=t.contexts.filter(I),n=t.children.filter(j),r=n.filter(R(B)),i=r.filter(R(O)).filter(R(F)),o=n.filter(R(O)).filter(B),a=r.filter(R(O)).filter(F),s=t.contexts.concat(r.filter(O)).filter(T),h=t.children.filter(M).filter(E),c=t.contexts.filter(C);e.concat(i).concat(o).concat(a).concat(s).concat(h).concat(c).forEach(function(t){this.renderQueue.push(t),P(t)&&(this.parse(t),this.renderQueue.push(new y))},this)},i.prototype.paint=function(t){try{t instanceof y?this.renderer.ctx.restore():M(t)?(D(t.parent)&&t.parent.appendToDOM(),this.paintText(t),D(t.parent)&&t.parent.cleanDOM()):this.paintNode(t)}catch(t){if(s(t),this.options.strict)throw t}},i.prototype.paintNode=function(t){P(t)&&(this.renderer.setOpacity(t.opacity),this.renderer.ctx.save(),t.hasTransform()&&this.renderer.setTransform(t.parseTransform())),"INPUT"===t.node.nodeName&&"checkbox"===t.node.type?this.paintCheckbox(t):"INPUT"===t.node.nodeName&&"radio"===t.node.type?this.paintRadio(t):this.paintElement(t)},i.prototype.paintElement=function(n){var r=n.parseBounds();this.renderer.clip(n.backgroundClip,function(){this.renderer.renderBackground(n,r,n.borders.borders.map(N))},this),this.renderer.clip(n.clip,function(){this.renderer.renderBorders(n.borders.borders)},this),this.renderer.clip(n.backgroundClip,function(){switch(n.node.nodeName){case"svg":case"IFRAME":var t=this.images.get(n.node);t?this.renderer.renderImage(n,r,n.borders,t):s("Error loading <"+n.node.nodeName+">",n.node);break;case"IMG":var e=this.images.get(n.node.src);e?this.renderer.renderImage(n,r,n.borders,e):s("Error loading <img>",n.node.src);break;case"CANVAS":this.renderer.renderImage(n,r,n.borders,{image:n.node});break;case"SELECT":case"INPUT":case"TEXTAREA":this.paintFormValue(n)}},this)},i.prototype.paintCheckbox=function(t){var e=t.parseBounds(),n=Math.min(e.width,e.height),r={width:n-1,height:n-1,top:e.top,left:e.left},i=[3,3],o=[i,i,i,i],a=[1,1,1,1].map(function(t){return{color:new u("#A5A5A5"),width:t}}),s=S(r,o,a);this.renderer.clip(t.backgroundClip,function(){this.renderer.rectangle(r.left+1,r.top+1,r.width-2,r.height-2,new u("#DEDEDE")),this.renderer.renderBorders(b(a,r,s,o)),t.node.checked&&(this.renderer.font(new u("#424242"),"normal","normal","bold",n-3+"px","arial"),this.renderer.text("✔",r.left+n/6,r.top+n-1))},this)},i.prototype.paintRadio=function(t){var e=t.parseBounds(),n=Math.min(e.width,e.height)-2;this.renderer.clip(t.backgroundClip,function(){this.renderer.circleStroke(e.left+1,e.top+1,n,new u("#DEDEDE"),1,new u("#A5A5A5")),t.node.checked&&this.renderer.circle(Math.ceil(e.left+n/4)+1,Math.ceil(e.top+n/4)+1,Math.floor(n/2),new u("#424242"))},this)},i.prototype.paintFormValue=function(e){var t=e.getValue();if(0<t.length){var n=e.node.ownerDocument,r=n.createElement("html2canvaswrapper");["lineHeight","textAlign","fontFamily","fontWeight","fontSize","color","paddingLeft","paddingTop","paddingRight","paddingBottom","width","height","borderLeftStyle","borderTopStyle","borderLeftWidth","borderTopWidth","boxSizing","whiteSpace","wordWrap"].forEach(function(t){try{r.style[t]=e.css(t)}catch(t){s("html2canvas: Parse: Exception caught in renderFormValue: "+t.message)}});var i=e.parseBounds();r.style.position="fixed",r.style.left=i.left+"px",r.style.top=i.top+"px",r.textContent=t,n.body.appendChild(r),this.paintText(new f(r.firstChild,e)),n.body.removeChild(r)}},i.prototype.paintText=function(n){n.applyTextTransform();var t,e=h.ucs2.decode(n.node.data),r=this.options.letterRendering&&!/^(normal|none|0px)$/.test(n.parent.css("letterSpacing"))||(t=n.node.data,/[^\u0000-\u00ff]/.test(t))?e.map(function(t){return h.ucs2.encode([t])}):function(t){var e,n=[],r=0,i=!1;for(;t.length;)o=t[r],-1!==[32,13,10,9,45].indexOf(o)===i?((e=t.splice(0,r)).length&&n.push(h.ucs2.encode(e)),i=!i,r=0):r++,r>=t.length&&(e=t.splice(0,r)).length&&n.push(h.ucs2.encode(e));var o;return n}(e),i=n.parent.fontWeight(),o=n.parent.css("fontSize"),a=n.parent.css("fontFamily"),s=n.parent.parseTextShadows();this.renderer.font(n.parent.color("color"),n.parent.css("fontStyle"),n.parent.css("fontVariant"),i,o,a),s.length?this.renderer.fontShadow(s[0].color,s[0].offsetX,s[0].offsetY,s[0].blur):this.renderer.clearShadow(),this.renderer.clip(n.parent.clip,function(){r.map(this.parseTextBounds(n),this).forEach(function(t,e){t&&!1===/^\s*$/.test(r[e])&&(this.renderer.text(r[e],t.left,t.bottom),this.renderTextDecoration(n.parent,t,this.fontMetrics.getMetrics(a,o)))},this)},this)},i.prototype.renderTextDecoration=function(t,e,n){switch(t.css("textDecoration").split(" ")[0]){case"underline":this.renderer.rectangle(e.left,Math.round(e.top+n.baseline+n.lineWidth),e.width,1,t.color("color"));break;case"overline":this.renderer.rectangle(e.left,Math.round(e.top),e.width,1,t.color("color"));break;case"line-through":this.renderer.rectangle(e.left,Math.ceil(e.top+n.middle+n.lineWidth),e.width,1,t.color("color"))}};var v={inset:[["darken",.6],["darken",.1],["darken",.1],["darken",.6]]};function b(a,s,h,c){return a.map(function(t,e){if(0<t.width){var n=s.left,r=s.top,i=s.width,o=s.height-a[2].width;switch(e){case 0:o=a[0].width,t.args=_({c1:[n,r],c2:[n+i,r],c3:[n+i-a[1].width,r+o],c4:[n+a[3].width,r+o]},c[0],c[1],h.topLeftOuter,h.topLeftInner,h.topRightOuter,h.topRightInner);break;case 1:n=s.left+s.width-a[1].width,i=a[1].width,t.args=_({c1:[n+i,r],c2:[n+i,r+o+a[2].width],c3:[n,r+o],c4:[n,r+a[0].width]},c[1],c[2],h.topRightOuter,h.topRightInner,h.bottomRightOuter,h.bottomRightInner);break;case 2:r=r+s.height-a[2].width,o=a[2].width,t.args=_({c1:[n+i,r+o],c2:[n,r+o],c3:[n+a[3].width,r],c4:[n+i-a[3].width,r]},c[2],c[3],h.bottomRightOuter,h.bottomRightInner,h.bottomLeftOuter,h.bottomLeftInner);break;case 3:i=a[3].width,t.args=_({c1:[n,r+o+a[2].width],c2:[n,r],c3:[n+i,r+a[0].width],c4:[n+i,r+o]},c[3],c[0],h.bottomLeftOuter,h.bottomLeftInner,h.topLeftOuter,h.topLeftInner)}}return t})}function x(t,e,n,r){var i=(Math.sqrt(2)-1)/3*4,o=n*i,a=r*i,s=t+n,h=e+r;return{topLeft:k({x:t,y:h},{x:t,y:h-a},{x:s-o,y:e},{x:s,y:e}),topRight:k({x:t,y:e},{x:t+o,y:e},{x:s,y:h-a},{x:s,y:h}),bottomRight:k({x:s,y:e},{x:s,y:e+a},{x:t+o,y:h},{x:t,y:h}),bottomLeft:k({x:s,y:h},{x:s-o,y:h},{x:t,y:e+a},{x:t,y:e})}}function S(t,e,n){var r=t.left,i=t.top,o=t.width,a=t.height,s=e[0][0]<o/2?e[0][0]:o/2,h=e[0][1]<a/2?e[0][1]:a/2,c=e[1][0]<o/2?e[1][0]:o/2,l=e[1][1]<a/2?e[1][1]:a/2,u=e[2][0]<o/2?e[2][0]:o/2,f=e[2][1]<a/2?e[2][1]:a/2,d=e[3][0]<o/2?e[3][0]:o/2,p=e[3][1]<a/2?e[3][1]:a/2,g=o-c,m=a-f,w=o-u,y=a-p;return{topLeftOuter:x(r,i,s,h).topLeft.subdivide(.5),topLeftInner:x(r+n[3].width,i+n[0].width,Math.max(0,s-n[3].width),Math.max(0,h-n[0].width)).topLeft.subdivide(.5),topRightOuter:x(r+g,i,c,l).topRight.subdivide(.5),topRightInner:x(r+Math.min(g,o+n[3].width),i+n[0].width,g>o+n[3].width?0:c-n[3].width,l-n[0].width).topRight.subdivide(.5),bottomRightOuter:x(r+w,i+m,u,f).bottomRight.subdivide(.5),bottomRightInner:x(r+Math.min(w,o-n[3].width),i+Math.min(m,a+n[0].width),Math.max(0,u-n[1].width),f-n[2].width).bottomRight.subdivide(.5),bottomLeftOuter:x(r,i+y,d,p).bottomLeft.subdivide(.5),bottomLeftInner:x(r+n[3].width,i+y,Math.max(0,d-n[3].width),p-n[2].width).bottomLeft.subdivide(.5)}}function k(s,h,c,l){var u=function(t,e,n){return{x:t.x+(e.x-t.x)*n,y:t.y+(e.y-t.y)*n}};return{start:s,startControl:h,endControl:c,end:l,subdivide:function(t){var e=u(s,h,t),n=u(h,c,t),r=u(c,l,t),i=u(e,n,t),o=u(n,r,t),a=u(i,o,t);return[k(s,e,i,a),k(a,o,r,l)]},curveTo:function(t){t.push(["bezierCurve",h.x,h.y,c.x,c.y,l.x,l.y])},curveToReversed:function(t){t.push(["bezierCurve",c.x,c.y,h.x,h.y,s.x,s.y])}}}function _(t,e,n,r,i,o,a){var s=[];return 0<e[0]||0<e[1]?(s.push(["line",r[1].start.x,r[1].start.y]),r[1].curveTo(s)):s.push(["line",t.c1[0],t.c1[1]]),0<n[0]||0<n[1]?(s.push(["line",o[0].start.x,o[0].start.y]),o[0].curveTo(s),s.push(["line",a[0].end.x,a[0].end.y]),a[0].curveToReversed(s)):(s.push(["line",t.c2[0],t.c2[1]]),s.push(["line",t.c3[0],t.c3[1]])),0<e[0]||0<e[1]?(s.push(["line",i[1].end.x,i[1].end.y]),i[1].curveToReversed(s)):s.push(["line",t.c4[0],t.c4[1]]),s}function A(t,e,n,r,i,o,a){0<e[0]||0<e[1]?(t.push(["line",r[0].start.x,r[0].start.y]),r[0].curveTo(t),r[1].curveTo(t)):t.push(["line",o,a]),(0<n[0]||0<n[1])&&t.push(["line",i[0].start.x,i[0].start.y])}function I(t){return t.cssInt("zIndex")<0}function C(t){return 0<t.cssInt("zIndex")}function T(t){return 0===t.cssInt("zIndex")}function F(t){return-1!==["inline","inline-block","inline-table"].indexOf(t.css("display"))}function P(t){return t instanceof p}function E(t){return 0<t.node.data.trim().length}function q(t){return t.nodeType===Node.TEXT_NODE||t.nodeType===Node.ELEMENT_NODE}function O(t){return"static"!==t.css("position")}function B(t){return"none"!==t.css("float")}function R(t){var e=this;return function(){return!t.apply(e,arguments)}}function j(t){return t.node.nodeType===Node.ELEMENT_NODE}function D(t){return!0===t.isPseudoElement}function M(t){return t.node.nodeType===Node.TEXT_NODE}function U(t){return parseInt(t,10)}function N(t){return t.width}function z(t){return t.node.nodeType!==Node.ELEMENT_NODE||-1===["SCRIPT","HEAD","TITLE","OBJECT","BR","OPTION"].indexOf(t.node.nodeName)}function L(t){return[].concat.apply([],t)}i.prototype.parseBorders=function(o){var r,t=o.parseBounds(),e=(r=o,["TopLeft","TopRight","BottomRight","BottomLeft"].map(function(t){var e=r.css("border"+t+"Radius"),n=e.split(" ");return n.length<=1&&(n[1]=n[0]),n.map(U)})),n=["Top","Right","Bottom","Left"].map(function(t,e){var n=o.css("border"+t+"Style"),r=o.color("border"+t+"Color");"inset"===n&&r.isBlack()&&(r=new u([255,255,255,r.a]));var i=v[n]?v[n][e]:null;return{width:o.cssInt("border"+t+"Width"),color:i?r[i[0]](i[1]):r,args:null}}),i=S(t,e,n);return{clip:this.parseBackgroundClip(o,i,n,e,t),borders:b(n,t,i,e)}},i.prototype.parseBackgroundClip=function(t,e,n,r,i){var o=[];switch(t.css("backgroundClip")){case"content-box":case"padding-box":A(o,r[0],r[1],e.topLeftInner,e.topRightInner,i.left+n[3].width,i.top+n[0].width),A(o,r[1],r[2],e.topRightInner,e.bottomRightInner,i.left+i.width-n[1].width,i.top+n[0].width),A(o,r[2],r[3],e.bottomRightInner,e.bottomLeftInner,i.left+i.width-n[1].width,i.top+i.height-n[2].width),A(o,r[3],r[0],e.bottomLeftInner,e.topLeftInner,i.left+n[3].width,i.top+i.height-n[2].width);break;default:A(o,r[0],r[1],e.topLeftOuter,e.topRightOuter,i.left,i.top),A(o,r[1],r[2],e.topRightOuter,e.bottomRightOuter,i.left+i.width,i.top),A(o,r[2],r[3],e.bottomRightOuter,e.bottomLeftOuter,i.left+i.width,i.top+i.height),A(o,r[3],r[0],e.bottomLeftOuter,e.topLeftOuter,i.left,i.top+i.height)}return o},e.exports=i},{"./color":3,"./fontmetrics":7,"./log":13,"./nodecontainer":14,"./pseudoelementcontainer":18,"./stackingcontext":21,"./textcontainer":25,"./utils":26,punycode:1}],16:[function(t,e,n){var a=t("./xhr"),r=t("./utils"),s=t("./log"),h=t("./clone"),c=r.decode64;function l(t,e,n){var r="withCredentials"in new XMLHttpRequest;if(!e)return Promise.reject("No proxy configured");var i=f(r),o=d(e,t,i);return r?a(o):u(n,o,i).then(function(t){return c(t.content)})}var i=0;function u(i,o,a){return new Promise(function(e,n){var t=i.createElement("script"),r=function(){delete window.html2canvas.proxy[a],i.body.removeChild(t)};window.html2canvas.proxy[a]=function(t){r(),e(t)},t.src=o,t.onerror=function(t){r(),n(t)},i.body.appendChild(t)})}function f(t){return t?"":"html2canvas_"+Date.now()+"_"+ ++i+"_"+Math.round(1e5*Math.random())}function d(t,e,n){return t+"?url="+encodeURIComponent(e)+(n.length?"&callback=html2canvas.proxy."+n:"")}n.Proxy=l,n.ProxyURL=function(t,e,n){var r="crossOrigin"in new Image,i=f(r),o=d(e,t,i);return r?Promise.resolve(o):u(n,o,i).then(function(t){return"data:"+t.type+";base64,"+t.content})},n.loadUrlDocument=function(t,e,n,r,i,o){return new l(t,e,window.document).then((a=t,function(e){var n,t=new DOMParser;try{n=t.parseFromString(e,"text/html")}catch(t){s("DOMParser not supported, falling back to createHTMLDocument"),n=document.implementation.createHTMLDocument("");try{n.open(),n.write(e),n.close()}catch(t){s("createHTMLDocument write not supported, falling back to document.body.innerHTML"),n.body.innerHTML=e}}var r=n.querySelector("base");if(!r||!r.href.host){var i=n.createElement("base");i.href=a,n.head.insertBefore(i,n.head.firstChild)}return n})).then(function(t){return h(t,n,r,i,o,0,0)});var a}},{"./clone":2,"./log":13,"./utils":26,"./xhr":28}],17:[function(t,e,n){var o=t("./proxy").ProxyURL;e.exports=function(n,r){var t=document.createElement("a");t.href=n,n=t.href,this.src=n,this.image=new Image;var i=this;this.promise=new Promise(function(t,e){i.image.crossOrigin="Anonymous",i.image.onload=t,i.image.onerror=e,new o(n,r,document).then(function(t){i.image.src=t}).catch(e)})}},{"./proxy":16}],18:[function(t,e,n){var r=t("./nodecontainer");function i(t,e,n){r.call(this,t,e),this.isPseudoElement=!0,this.before=":before"===n}i.prototype.cloneTo=function(t){i.prototype.cloneTo.call(this,t),t.isPseudoElement=!0,t.before=this.before},(i.prototype=Object.create(r.prototype)).appendToDOM=function(){this.before?this.parent.node.insertBefore(this.node,this.parent.node.firstChild):this.parent.node.appendChild(this.node),this.parent.node.className+=" "+this.getHideClass()},i.prototype.cleanDOM=function(){this.node.parentNode.removeChild(this.node),this.parent.node.className=this.parent.node.className.replace(this.getHideClass(),"")},i.prototype.getHideClass=function(){return this["PSEUDO_HIDE_ELEMENT_CLASS_"+(this.before?"BEFORE":"AFTER")]},i.prototype.PSEUDO_HIDE_ELEMENT_CLASS_BEFORE="___html2canvas___pseudoelement_before",i.prototype.PSEUDO_HIDE_ELEMENT_CLASS_AFTER="___html2canvas___pseudoelement_after",e.exports=i},{"./nodecontainer":14}],19:[function(t,e,n){var h=t("./log");function r(t,e,n,r,i){this.width=t,this.height=e,this.images=n,this.options=r,this.document=i}r.prototype.renderImage=function(t,e,n,r){var i=t.cssInt("paddingLeft"),o=t.cssInt("paddingTop"),a=t.cssInt("paddingRight"),s=t.cssInt("paddingBottom"),h=n.borders,c=e.width-(h[1].width+h[3].width+i+a),l=e.height-(h[0].width+h[2].width+o+s);this.drawImage(r,0,0,r.image.width||c,r.image.height||l,e.left+i+h[3].width,e.top+o+h[0].width,c,l)},r.prototype.renderBackground=function(t,e,n){0<e.height&&0<e.width&&(this.renderBackgroundColor(t,e),this.renderBackgroundImage(t,e,n))},r.prototype.renderBackgroundColor=function(t,e){var n=t.color("backgroundColor");n.isTransparent()||this.rectangle(e.left,e.top,e.width,e.height,n)},r.prototype.renderBorders=function(t){t.forEach(this.renderBorder,this)},r.prototype.renderBorder=function(t){t.color.isTransparent()||null===t.args||this.drawShape(t.args,t.color)},r.prototype.renderBackgroundImage=function(o,a,s){o.parseBackgroundImages().reverse().forEach(function(t,e,n){switch(t.method){case"url":var r=this.images.get(t.args[0]);r?this.renderBackgroundRepeating(o,a,r,n.length-(e+1),s):h("Error loading background-image",t.args[0]);break;case"linear-gradient":case"gradient":var i=this.images.get(t.value);i?this.renderBackgroundGradient(i,a,s):h("Error loading background-image",t.args[0]);break;case"none":break;default:h("Unknown background-image type",t.args[0])}},this)},r.prototype.renderBackgroundRepeating=function(t,e,n,r,i){var o=t.parseBackgroundSize(e,n.image,r),a=t.parseBackgroundPosition(e,n.image,r,o);switch(t.parseBackgroundRepeat(r)){case"repeat-x":case"repeat no-repeat":this.backgroundRepeatShape(n,a,o,e,e.left+i[3],e.top+a.top+i[0],99999,o.height,i);break;case"repeat-y":case"no-repeat repeat":this.backgroundRepeatShape(n,a,o,e,e.left+a.left+i[3],e.top+i[0],o.width,99999,i);break;case"no-repeat":this.backgroundRepeatShape(n,a,o,e,e.left+a.left+i[3],e.top+a.top+i[0],o.width,o.height,i);break;default:this.renderBackgroundRepeat(n,a,o,{top:e.top,left:e.left},i[3],i[0])}},e.exports=r},{"./log":13}],20:[function(t,e,n){var r=t("../renderer"),i=t("../lineargradientcontainer"),o=t("../log");function a(t,e){r.apply(this,arguments),this.canvas=this.options.canvas||this.document.createElement("canvas"),this.options.canvas||(this.canvas.width=t,this.canvas.height=e),this.ctx=this.canvas.getContext("2d"),this.taintCtx=this.document.createElement("canvas").getContext("2d"),this.ctx.textBaseline="bottom",this.variables={},o("Initialized CanvasRenderer with size",t,"x",e)}function s(t){return 0<t.length}(a.prototype=Object.create(r.prototype)).setFillStyle=function(t){return this.ctx.fillStyle="object"==typeof t&&t.isColor?t.toString():t,this.ctx},a.prototype.rectangle=function(t,e,n,r,i){this.setFillStyle(i).fillRect(t,e,n,r)},a.prototype.circle=function(t,e,n,r){this.setFillStyle(r),this.ctx.beginPath(),this.ctx.arc(t+n/2,e+n/2,n/2,0,2*Math.PI,!0),this.ctx.closePath(),this.ctx.fill()},a.prototype.circleStroke=function(t,e,n,r,i,o){this.circle(t,e,n,r),this.ctx.strokeStyle=o.toString(),this.ctx.stroke()},a.prototype.drawShape=function(t,e){this.shape(t),this.setFillStyle(e).fill()},a.prototype.taints=function(e){if(null===e.tainted){this.taintCtx.drawImage(e.image,0,0);try{this.taintCtx.getImageData(0,0,1,1),e.tainted=!1}catch(t){this.taintCtx=document.createElement("canvas").getContext("2d"),e.tainted=!0}}return e.tainted},a.prototype.drawImage=function(t,e,n,r,i,o,a,s,h){this.taints(t)&&!this.options.allowTaint||this.ctx.drawImage(t.image,e,n,r,i,o,a,s,h)},a.prototype.clip=function(t,e,n){this.ctx.save(),t.filter(s).forEach(function(t){this.shape(t).clip()},this),e.call(n),this.ctx.restore()},a.prototype.shape=function(t){return this.ctx.beginPath(),t.forEach(function(t,e){"rect"===t[0]?this.ctx.rect.apply(this.ctx,t.slice(1)):this.ctx[0===e?"moveTo":t[0]+"To"].apply(this.ctx,t.slice(1))},this),this.ctx.closePath(),this.ctx},a.prototype.font=function(t,e,n,r,i,o){this.setFillStyle(t).font=[e,n,r,i,o].join(" ").split(",")[0]},a.prototype.fontShadow=function(t,e,n,r){this.setVariable("shadowColor",t.toString()).setVariable("shadowOffsetY",e).setVariable("shadowOffsetX",n).setVariable("shadowBlur",r)},a.prototype.clearShadow=function(){this.setVariable("shadowColor","rgba(0,0,0,0)")},a.prototype.setOpacity=function(t){this.ctx.globalAlpha=t},a.prototype.setTransform=function(t){this.ctx.translate(t.origin[0],t.origin[1]),this.ctx.transform.apply(this.ctx,t.matrix),this.ctx.translate(-t.origin[0],-t.origin[1])},a.prototype.setVariable=function(t,e){return this.variables[t]!==e&&(this.variables[t]=this.ctx[t]=e),this},a.prototype.text=function(t,e,n){this.ctx.fillText(t,e,n)},a.prototype.backgroundRepeatShape=function(t,e,n,r,i,o,a,s,h){var c=[["line",Math.round(i),Math.round(o)],["line",Math.round(i+a),Math.round(o)],["line",Math.round(i+a),Math.round(s+o)],["line",Math.round(i),Math.round(s+o)]];this.clip([c],function(){this.renderBackgroundRepeat(t,e,n,r,h[3],h[0])},this)},a.prototype.renderBackgroundRepeat=function(t,e,n,r,i,o){var a=Math.round(r.left+e.left+i),s=Math.round(r.top+e.top+o);this.setFillStyle(this.ctx.createPattern(this.resizeImage(t,n),"repeat")),this.ctx.translate(a,s),this.ctx.fill(),this.ctx.translate(-a,-s)},a.prototype.renderBackgroundGradient=function(t,e){if(t instanceof i){var n=this.ctx.createLinearGradient(e.left+e.width*t.x0,e.top+e.height*t.y0,e.left+e.width*t.x1,e.top+e.height*t.y1);t.colorStops.forEach(function(t){n.addColorStop(t.stop,t.color.toString())}),this.rectangle(e.left,e.top,e.width,e.height,n)}},a.prototype.resizeImage=function(t,e){var n=t.image;if(n.width===e.width&&n.height===e.height)return n;var r=document.createElement("canvas");return r.width=e.width,r.height=e.height,r.getContext("2d").drawImage(n,0,0,n.width,n.height,0,0,e.width,e.height),r},e.exports=a},{"../lineargradientcontainer":12,"../log":13,"../renderer":19}],21:[function(t,e,n){var i=t("./nodecontainer");function r(t,e,n,r){i.call(this,n,r),this.ownStacking=t,this.contexts=[],this.children=[],this.opacity=(this.parent?this.parent.stack.opacity:1)*e}(r.prototype=Object.create(i.prototype)).getParentStack=function(t){var e=this.parent?this.parent.stack:null;return e?e.ownStacking?e:e.getParentStack(t):t.stack},e.exports=r},{"./nodecontainer":14}],22:[function(t,e,n){function r(t){this.rangeBounds=this.testRangeBounds(t),this.cors=this.testCORS(),this.svg=this.testSVG()}r.prototype.testRangeBounds=function(t){var e,n,r=!1;return t.createRange&&(e=t.createRange()).getBoundingClientRect&&((n=t.createElement("boundtest")).style.height="123px",n.style.display="block",t.body.appendChild(n),e.selectNode(n),123===e.getBoundingClientRect().height&&(r=!0),t.body.removeChild(n)),r},r.prototype.testCORS=function(){return void 0!==(new Image).crossOrigin},r.prototype.testSVG=function(){var t=new Image,e=document.createElement("canvas"),n=e.getContext("2d");t.src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";try{n.drawImage(t,0,0),e.toDataURL()}catch(t){return!1}return!0},e.exports=r},{}],23:[function(t,e,n){var r=t("./xhr"),i=t("./utils").decode64;function o(t){this.src=t,this.image=null;var n=this;this.promise=this.hasFabric().then(function(){return n.isInline(t)?Promise.resolve(n.inlineFormatting(t)):r(t)}).then(function(e){return new Promise(function(t){window.html2canvas.svg.fabric.loadSVGFromString(e,n.createCanvas.call(n,t))})})}o.prototype.hasFabric=function(){return window.html2canvas.svg&&window.html2canvas.svg.fabric?Promise.resolve():Promise.reject(new Error("html2canvas.svg.js is not loaded, cannot render svg"))},o.prototype.inlineFormatting=function(t){return/^data:image\/svg\+xml;base64,/.test(t)?this.decode64(this.removeContentType(t)):this.removeContentType(t)},o.prototype.removeContentType=function(t){return t.replace(/^data:image\/svg\+xml(;base64)?,/,"")},o.prototype.isInline=function(t){return/^data:image\/svg\+xml/i.test(t)},o.prototype.createCanvas=function(r){var i=this;return function(t,e){var n=new window.html2canvas.svg.fabric.StaticCanvas("c");i.image=n.lowerCanvasEl,n.setWidth(e.width).setHeight(e.height).add(window.html2canvas.svg.fabric.util.groupSVGElements(t,e)).renderAll(),r(n.lowerCanvasEl)}},o.prototype.decode64=function(t){return"function"==typeof window.atob?window.atob(t):i(t)},e.exports=o},{"./utils":26,"./xhr":28}],24:[function(t,e,n){var r=t("./svgcontainer");function i(n,t){this.src=n,this.image=null;var r=this;this.promise=t?new Promise(function(t,e){r.image=new Image,r.image.onload=t,r.image.onerror=e,r.image.src="data:image/svg+xml,"+(new XMLSerializer).serializeToString(n),!0===r.image.complete&&t(r.image)}):this.hasFabric().then(function(){return new Promise(function(t){window.html2canvas.svg.fabric.parseSVGDocument(n,r.createCanvas.call(r,t))})})}i.prototype=Object.create(r.prototype),e.exports=i},{"./svgcontainer":23}],25:[function(t,e,n){var r=t("./nodecontainer");function i(t,e){r.call(this,t,e)}function o(t,e,n){if(0<t.length)return e+n.toUpperCase()}(i.prototype=Object.create(r.prototype)).applyTextTransform=function(){this.node.data=this.transform(this.parent.css("textTransform"))},i.prototype.transform=function(t){var e=this.node.data;switch(t){case"lowercase":return e.toLowerCase();case"capitalize":return e.replace(/(^|\s|:|-|\(|\))([a-z])/g,o);case"uppercase":return e.toUpperCase();default:return e}},e.exports=i},{"./nodecontainer":14}],26:[function(t,e,n){n.smallImage=function(){return"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"},n.bind=function(t,e){return function(){return t.apply(e,arguments)}},
/*
   * base64-arraybuffer
   * https://github.com/niklasvh/base64-arraybuffer
   *
   * Copyright (c) 2012 Niklas von Hertzen
   * Licensed under the MIT license.
   */
n.decode64=function(t){var e,n,r,i,o,a,s,h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=t.length,l="";for(e=0;e<c;e+=4)o=h.indexOf(t[e])<<2|(n=h.indexOf(t[e+1]))>>4,a=(15&n)<<4|(r=h.indexOf(t[e+2]))>>2,s=(3&r)<<6|(i=h.indexOf(t[e+3])),l+=64===r?String.fromCharCode(o):64===i||-1===i?String.fromCharCode(o,a):String.fromCharCode(o,a,s);return l},n.getBounds=function(t){if(t.getBoundingClientRect){var e=t.getBoundingClientRect(),n=null==t.offsetWidth?e.width:t.offsetWidth;return{top:e.top,bottom:e.bottom||e.top+e.height,right:e.left+n,left:e.left,width:n,height:null==t.offsetHeight?e.height:t.offsetHeight}}return{}},n.offsetBounds=function(t){var e=t.offsetParent?n.offsetBounds(t.offsetParent):{top:0,left:0};return{top:t.offsetTop+e.top,bottom:t.offsetTop+t.offsetHeight+e.top,right:t.offsetLeft+e.left+t.offsetWidth,left:t.offsetLeft+e.left,width:t.offsetWidth,height:t.offsetHeight}},n.parseBackgrounds=function(t){var e,n,r,i,o,a,s,h=[],c=0,l=0,u=function(){e&&('"'===n.substr(0,1)&&(n=n.substr(1,n.length-2)),n&&s.push(n),"-"===e.substr(0,1)&&0<(i=e.indexOf("-",1)+1)&&(r=e.substr(0,i),e=e.substr(i)),h.push({prefix:r,method:e.toLowerCase(),value:o,args:s,image:null})),s=[],e=r=n=o=""};return s=[],e=r=n=o="",t.split("").forEach(function(t){if(!(0===c&&-1<" \r\n\t".indexOf(t))){switch(t){case'"':a?a===t&&(a=null):a=t;break;case"(":if(a)break;if(0===c)return c=1,void(o+=t);l++;break;case")":if(a)break;if(1===c){if(0===l)return c=0,o+=t,void u();l--}break;case",":if(a)break;if(0===c)return void u();if(1===c&&0===l&&!e.match(/^url$/i))return s.push(n),n="",void(o+=t)}o+=t,0===c?e+=t:n+=t}}),u(),h}},{}],27:[function(t,e,n){var r=t("./gradientcontainer");function i(t){r.apply(this,arguments),this.type="linear"===t.args[0]?r.TYPES.LINEAR:r.TYPES.RADIAL}i.prototype=Object.create(r.prototype),e.exports=i},{"./gradientcontainer":9}],28:[function(t,e,n){e.exports=function(r){return new Promise(function(t,e){var n=new XMLHttpRequest;n.open("GET",r),n.onload=function(){200===n.status?t(n.responseText):e(new Error(n.statusText))},n.onerror=function(){e(new Error("Network Error"))},n.send()})}},{}]},{},[4])(4)}),function(t){var n="+".charCodeAt(0),r="/".charCodeAt(0),i="0".charCodeAt(0),o="a".charCodeAt(0),a="A".charCodeAt(0),s="-".charCodeAt(0),h="_".charCodeAt(0),l=function(t){var e=t.charCodeAt(0);return e===n||e===s?62:e===r||e===h?63:e<i?-1:e<i+10?e-i+26+26:e<a+26?e-a:e<o+26?e-o+26:void 0};t.API.TTFFont=function(){function i(t,e,n){var r;if(this.rawData=t,r=this.contents=new X(t),this.contents.pos=4,"ttcf"===r.readString(4)){if(!e)throw new Error("Must specify a font name for TTC files.");throw new Error("Font "+e+" not found in TTC file.")}r.pos=0,this.parse(),this.subset=new T(this),this.registerTTF()}return i.open=function(t,e,n,r){return new i(function(t){var e,n,r,i,o,a;if(0<t.length%4)throw new Error("Invalid string. Length must be a multiple of 4");var s=t.length;o="="===t.charAt(s-2)?2:"="===t.charAt(s-1)?1:0,a=new Uint8Array(3*t.length/4-o),r=0<o?t.length-4:t.length;var h=0;function c(t){a[h++]=t}for(n=e=0;e<r;e+=4,n+=3)c((16711680&(i=l(t.charAt(e))<<18|l(t.charAt(e+1))<<12|l(t.charAt(e+2))<<6|l(t.charAt(e+3))))>>16),c((65280&i)>>8),c(255&i);return 2===o?c(255&(i=l(t.charAt(e))<<2|l(t.charAt(e+1))>>4)):1===o&&(c((i=l(t.charAt(e))<<10|l(t.charAt(e+1))<<4|l(t.charAt(e+2))>>2)>>8&255),c(255&i)),a}(n),e,r)},i.prototype.parse=function(){return this.directory=new e(this.contents),this.head=new d(this),this.name=new b(this),this.cmap=new m(this),this.hhea=new g(this),this.maxp=new x(this),this.hmtx=new S(this),this.post=new y(this),this.os2=new w(this),this.loca=new C(this),this.glyf=new _(this),this.ascender=this.os2.exists&&this.os2.ascender||this.hhea.ascender,this.decender=this.os2.exists&&this.os2.decender||this.hhea.decender,this.lineGap=this.os2.exists&&this.os2.lineGap||this.hhea.lineGap,this.bbox=[this.head.xMin,this.head.yMin,this.head.xMax,this.head.yMax]},i.prototype.registerTTF=function(){var i,t,e,n,r;if(this.scaleFactor=1e3/this.head.unitsPerEm,this.bbox=function(){var t,e,n,r;for(r=[],t=0,e=(n=this.bbox).length;t<e;t++)i=n[t],r.push(Math.round(i*this.scaleFactor));return r}.call(this),this.stemV=0,this.post.exists?(e=255&(n=this.post.italic_angle),!0&(t=n>>16)&&(t=-(1+(65535^t))),this.italicAngle=+(t+"."+e)):this.italicAngle=0,this.ascender=Math.round(this.ascender*this.scaleFactor),this.decender=Math.round(this.decender*this.scaleFactor),this.lineGap=Math.round(this.lineGap*this.scaleFactor),this.capHeight=this.os2.exists&&this.os2.capHeight||this.ascender,this.xHeight=this.os2.exists&&this.os2.xHeight||0,this.familyClass=(this.os2.exists&&this.os2.familyClass||0)>>8,this.isSerif=1===(r=this.familyClass)||2===r||3===r||4===r||5===r||7===r,this.isScript=10===this.familyClass,this.flags=0,this.post.isFixedPitch&&(this.flags|=1),this.isSerif&&(this.flags|=2),this.isScript&&(this.flags|=8),0!==this.italicAngle&&(this.flags|=64),this.flags|=32,!this.cmap.unicode)throw new Error("No unicode cmap for font")},i.prototype.characterToGlyph=function(t){var e;return(null!=(e=this.cmap.unicode)?e.codeMap[t]:void 0)||0},i.prototype.widthOfGlyph=function(t){var e;return e=1e3/this.head.unitsPerEm,this.hmtx.forGlyph(t).advance*e},i.prototype.widthOfString=function(t,e,n){var r,i,o,a,s;for(i=a=o=0,s=(t=""+t).length;0<=s?a<s:s<a;i=0<=s?++a:--a)r=t.charCodeAt(i),o+=this.widthOfGlyph(this.characterToGlyph(r))+n*(1e3/e)||0;return o*(e/1e3)},i.prototype.lineHeight=function(t,e){var n;return null==e&&(e=!1),n=e?this.lineGap:0,(this.ascender+n-this.decender)/1e3*t},i}();var c,X=function(){function t(t){this.data=null!=t?t:[],this.pos=0,this.length=this.data.length}return t.prototype.readByte=function(){return this.data[this.pos++]},t.prototype.writeByte=function(t){return this.data[this.pos++]=t},t.prototype.readUInt32=function(){return 16777216*this.readByte()+(this.readByte()<<16)+(this.readByte()<<8)+this.readByte()},t.prototype.writeUInt32=function(t){return this.writeByte(t>>>24&255),this.writeByte(t>>16&255),this.writeByte(t>>8&255),this.writeByte(255&t)},t.prototype.readInt32=function(){var t;return 2147483648<=(t=this.readUInt32())?t-4294967296:t},t.prototype.writeInt32=function(t){return t<0&&(t+=4294967296),this.writeUInt32(t)},t.prototype.readUInt16=function(){return this.readByte()<<8|this.readByte()},t.prototype.writeUInt16=function(t){return this.writeByte(t>>8&255),this.writeByte(255&t)},t.prototype.readInt16=function(){var t;return 32768<=(t=this.readUInt16())?t-65536:t},t.prototype.writeInt16=function(t){return t<0&&(t+=65536),this.writeUInt16(t)},t.prototype.readString=function(t){var e,n,r;for(n=[],e=r=0;0<=t?r<t:t<r;e=0<=t?++r:--r)n[e]=String.fromCharCode(this.readByte());return n.join("")},t.prototype.writeString=function(t){var e,n,r,i;for(i=[],e=n=0,r=t.length;0<=r?n<r:r<n;e=0<=r?++n:--n)i.push(this.writeByte(t.charCodeAt(e)));return i},t.prototype.readShort=function(){return this.readInt16()},t.prototype.writeShort=function(t){return this.writeInt16(t)},t.prototype.readLongLong=function(){var t,e,n,r,i,o,a,s;return t=this.readByte(),e=this.readByte(),n=this.readByte(),r=this.readByte(),i=this.readByte(),o=this.readByte(),a=this.readByte(),s=this.readByte(),128&t?-1*(72057594037927940*(255^t)+281474976710656*(255^e)+1099511627776*(255^n)+4294967296*(255^r)+16777216*(255^i)+65536*(255^o)+256*(255^a)+(255^s)+1):72057594037927940*t+281474976710656*e+1099511627776*n+4294967296*r+16777216*i+65536*o+256*a+s},t.prototype.readInt=function(){return this.readInt32()},t.prototype.writeInt=function(t){return this.writeInt32(t)},t.prototype.read=function(t){var e,n;for(e=[],n=0;0<=t?n<t:t<n;0<=t?++n:--n)e.push(this.readByte());return e},t.prototype.write=function(t){var e,n,r,i;for(i=[],n=0,r=t.length;n<r;n++)e=t[n],i.push(this.writeByte(e));return i},t}(),e=function(){var p;function t(t){var e,n,r;for(this.scalarType=t.readInt(),this.tableCount=t.readShort(),this.searchRange=t.readShort(),this.entrySelector=t.readShort(),this.rangeShift=t.readShort(),this.tables={},n=0,r=this.tableCount;0<=r?n<r:r<n;0<=r?++n:--n)e={tag:t.readString(4),checksum:t.readInt(),offset:t.readInt(),length:t.readInt()},this.tables[e.tag]=e}return t.prototype.encode=function(t){var e,n,r,i,o,a,s,h,c,l,u,f,d;for(d in u=Object.keys(t).length,a=Math.log(2),c=16*Math.floor(Math.log(u)/a),i=Math.floor(c/a),h=16*u-c,(n=new X).writeInt(this.scalarType),n.writeShort(u),n.writeShort(c),n.writeShort(i),n.writeShort(h),r=16*u,s=n.pos+r,o=null,f=[],t)for(l=t[d],n.writeString(d),n.writeInt(p(l)),n.writeInt(s),n.writeInt(l.length),f=f.concat(l),"head"===d&&(o=s),s+=l.length;s%4;)f.push(0),s++;return n.write(f),e=2981146554-p(n.data),n.pos=o+8,n.writeUInt32(e),n.data},p=function(t){var e,n,r,i;for(t=k.call(t);t.length%4;)t.push(0);for(n=new X(t),r=e=0,i=t.length;r<i;r+=4)e+=n.readUInt32();return 4294967295&e},t}(),u={}.hasOwnProperty,f=function(t,e){for(var n in e)u.call(e,n)&&(t[n]=e[n]);function r(){this.constructor=t}return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t};c=function(){function t(t){var e;this.file=t,e=this.file.directory.tables[this.tag],this.exists=!!e,e&&(this.offset=e.offset,this.length=e.length,this.parse(this.file.contents))}return t.prototype.parse=function(){},t.prototype.encode=function(){},t.prototype.raw=function(){return this.exists?(this.file.contents.pos=this.offset,this.file.contents.read(this.length)):null},t}();var d=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return f(e,c),e.prototype.tag="head",e.prototype.parse=function(t){return t.pos=this.offset,this.version=t.readInt(),this.revision=t.readInt(),this.checkSumAdjustment=t.readInt(),this.magicNumber=t.readInt(),this.flags=t.readShort(),this.unitsPerEm=t.readShort(),this.created=t.readLongLong(),this.modified=t.readLongLong(),this.xMin=t.readShort(),this.yMin=t.readShort(),this.xMax=t.readShort(),this.yMax=t.readShort(),this.macStyle=t.readShort(),this.lowestRecPPEM=t.readShort(),this.fontDirectionHint=t.readShort(),this.indexToLocFormat=t.readShort(),this.glyphDataFormat=t.readShort()},e}(),p=function(){function t(n,t){var e,r,i,o,a,s,h,c,l,u,f,d,p,g,m,w,y,v;switch(this.platformID=n.readUInt16(),this.encodingID=n.readShort(),this.offset=t+n.readInt(),l=n.pos,n.pos=this.offset,this.format=n.readUInt16(),this.length=n.readUInt16(),this.language=n.readUInt16(),this.isUnicode=3===this.platformID&&1===this.encodingID&&4===this.format||0===this.platformID&&4===this.format,this.codeMap={},this.format){case 0:for(s=m=0;m<256;s=++m)this.codeMap[s]=n.readByte();break;case 4:for(f=n.readUInt16(),u=f/2,n.pos+=6,i=function(){var t,e;for(e=[],s=t=0;0<=u?t<u:u<t;s=0<=u?++t:--t)e.push(n.readUInt16());return e}(),n.pos+=2,p=function(){var t,e;for(e=[],s=t=0;0<=u?t<u:u<t;s=0<=u?++t:--t)e.push(n.readUInt16());return e}(),h=function(){var t,e;for(e=[],s=t=0;0<=u?t<u:u<t;s=0<=u?++t:--t)e.push(n.readUInt16());return e}(),c=function(){var t,e;for(e=[],s=t=0;0<=u?t<u:u<t;s=0<=u?++t:--t)e.push(n.readUInt16());return e}(),r=(this.length-n.pos+this.offset)/2,a=function(){var t,e;for(e=[],s=t=0;0<=r?t<r:r<t;s=0<=r?++t:--t)e.push(n.readUInt16());return e}(),s=w=0,v=i.length;w<v;s=++w)for(g=i[s],e=y=d=p[s];d<=g?y<=g:g<=y;e=d<=g?++y:--y)0===c[s]?o=e+h[s]:0!==(o=a[c[s]/2+(e-d)-(u-s)]||0)&&(o+=h[s]),this.codeMap[e]=65535&o}n.pos=l}return t.encode=function(t,e){var n,r,i,o,a,s,h,c,l,u,f,d,p,g,m,w,y,v,b,x,S,k,_,A,I,C,T,F,P,E,q,O,B,R,j,D,M,U,N,z,L,H,W,G,V,Y;switch(F=new X,o=Object.keys(t).sort(function(t,e){return t-e}),e){case"macroman":for(p=0,g=function(){var t,e;for(e=[],d=t=0;t<256;d=++t)e.push(0);return e}(),w={0:0},i={},P=0,B=o.length;P<B;P++)null==w[W=t[r=o[P]]]&&(w[W]=++p),i[r]={old:t[r],new:w[t[r]]},g[r]=w[t[r]];return F.writeUInt16(1),F.writeUInt16(0),F.writeUInt32(12),F.writeUInt16(0),F.writeUInt16(262),F.writeUInt16(0),F.write(g),{charMap:i,subtable:F.data,maxGlyphID:p+1};case"unicode":for(C=[],l=[],w={},n={},m=h=null,E=y=0,R=o.length;E<R;E++)null==w[b=t[r=o[E]]]&&(w[b]=++y),n[r]={old:b,new:w[b]},a=w[b]-r,null!=m&&a===h||(m&&l.push(m),C.push(r),h=a),m=r;for(m&&l.push(m),l.push(65535),C.push(65535),A=2*(_=C.length),k=2*Math.pow(Math.log(_)/Math.LN2,2),u=Math.log(k/2)/Math.LN2,S=2*_-k,s=[],x=[],f=[],d=q=0,j=C.length;q<j;d=++q){if(I=C[d],c=l[d],65535===I){s.push(0),x.push(0);break}if(32768<=I-(T=n[I].new))for(s.push(0),x.push(2*(f.length+_-d)),r=O=I;I<=c?O<=c:c<=O;r=I<=c?++O:--O)f.push(n[r].new);else s.push(T-I),x.push(0)}for(F.writeUInt16(3),F.writeUInt16(1),F.writeUInt32(12),F.writeUInt16(4),F.writeUInt16(16+8*_+2*f.length),F.writeUInt16(0),F.writeUInt16(A),F.writeUInt16(k),F.writeUInt16(u),F.writeUInt16(S),L=0,D=l.length;L<D;L++)r=l[L],F.writeUInt16(r);for(F.writeUInt16(0),H=0,M=C.length;H<M;H++)r=C[H],F.writeUInt16(r);for(G=0,U=s.length;G<U;G++)a=s[G],F.writeUInt16(a);for(V=0,N=x.length;V<N;V++)v=x[V],F.writeUInt16(v);for(Y=0,z=f.length;Y<z;Y++)p=f[Y],F.writeUInt16(p);return{charMap:n,subtable:F.data,maxGlyphID:y+1}}},t}(),m=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return f(e,c),e.prototype.tag="cmap",e.prototype.parse=function(t){var e,n,r;for(t.pos=this.offset,this.version=t.readUInt16(),n=t.readUInt16(),this.tables=[],this.unicode=null,r=0;0<=n?r<n:n<r;0<=n?++r:--r)e=new p(t,this.offset),this.tables.push(e),e.isUnicode&&null==this.unicode&&(this.unicode=e);return!0},e.encode=function(t,e){var n,r;return null==e&&(e="macroman"),n=p.encode(t,e),(r=new X).writeUInt16(0),r.writeUInt16(1),n.table=r.data.concat(n.subtable),n},e}(),g=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return f(e,c),e.prototype.tag="hhea",e.prototype.parse=function(t){return t.pos=this.offset,this.version=t.readInt(),this.ascender=t.readShort(),this.decender=t.readShort(),this.lineGap=t.readShort(),this.advanceWidthMax=t.readShort(),this.minLeftSideBearing=t.readShort(),this.minRightSideBearing=t.readShort(),this.xMaxExtent=t.readShort(),this.caretSlopeRise=t.readShort(),this.caretSlopeRun=t.readShort(),this.caretOffset=t.readShort(),t.pos+=8,this.metricDataFormat=t.readShort(),this.numberOfMetrics=t.readUInt16()},e}(),w=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return f(e,c),e.prototype.tag="OS/2",e.prototype.parse=function(n){if(n.pos=this.offset,this.version=n.readUInt16(),this.averageCharWidth=n.readShort(),this.weightClass=n.readUInt16(),this.widthClass=n.readUInt16(),this.type=n.readShort(),this.ySubscriptXSize=n.readShort(),this.ySubscriptYSize=n.readShort(),this.ySubscriptXOffset=n.readShort(),this.ySubscriptYOffset=n.readShort(),this.ySuperscriptXSize=n.readShort(),this.ySuperscriptYSize=n.readShort(),this.ySuperscriptXOffset=n.readShort(),this.ySuperscriptYOffset=n.readShort(),this.yStrikeoutSize=n.readShort(),this.yStrikeoutPosition=n.readShort(),this.familyClass=n.readShort(),this.panose=function(){var t,e;for(e=[],t=0;t<10;++t)e.push(n.readByte());return e}(),this.charRange=function(){var t,e;for(e=[],t=0;t<4;++t)e.push(n.readInt());return e}(),this.vendorID=n.readString(4),this.selection=n.readShort(),this.firstCharIndex=n.readShort(),this.lastCharIndex=n.readShort(),0<this.version&&(this.ascent=n.readShort(),this.descent=n.readShort(),this.lineGap=n.readShort(),this.winAscent=n.readShort(),this.winDescent=n.readShort(),this.codePageRange=function(){var t,e;for(e=[],t=0;t<2;++t)e.push(n.readInt());return e}(),1<this.version))return this.xHeight=n.readShort(),this.capHeight=n.readShort(),this.defaultChar=n.readShort(),this.breakChar=n.readShort(),this.maxContext=n.readShort()},e}(),y=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return f(e,c),e.prototype.tag="post",e.prototype.parse=function(r){var t,e,n,i;switch(r.pos=this.offset,this.format=r.readInt(),this.italicAngle=r.readInt(),this.underlinePosition=r.readShort(),this.underlineThickness=r.readShort(),this.isFixedPitch=r.readInt(),this.minMemType42=r.readInt(),this.maxMemType42=r.readInt(),this.minMemType1=r.readInt(),this.maxMemType1=r.readInt(),this.format){case 65536:break;case 131072:for(e=r.readUInt16(),this.glyphNameIndex=[],n=0;0<=e?n<e:e<n;0<=e?++n:--n)this.glyphNameIndex.push(r.readUInt16());for(this.names=[],i=[];r.pos<this.offset+this.length;)t=r.readByte(),i.push(this.names.push(r.readString(t)));return i;case 151552:return e=r.readUInt16(),this.offsets=r.read(e);case 196608:break;case 262144:return this.map=function(){var t,e,n;for(n=[],t=0,e=this.file.maxp.numGlyphs;0<=e?t<e:e<t;0<=e?++t:--t)n.push(r.readUInt32());return n}.call(this)}},e}(),v=function(t,e){this.raw=t,this.length=t.length,this.platformID=e.platformID,this.encodingID=e.encodingID,this.languageID=e.languageID},b=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return f(e,c),e.prototype.tag="name",e.prototype.parse=function(t){var e,n,r,i,o,a,s,h,c,l,u,f;for(t.pos=this.offset,t.readShort(),e=t.readShort(),a=t.readShort(),n=[],i=c=0;0<=e?c<e:e<c;i=0<=e?++c:--c)n.push({platformID:t.readShort(),encodingID:t.readShort(),languageID:t.readShort(),nameID:t.readShort(),length:t.readShort(),offset:this.offset+a+t.readShort()});for(s={},i=l=0,u=n.length;l<u;i=++l)r=n[i],t.pos=r.offset,h=t.readString(r.length),o=new v(h,r),null==s[f=r.nameID]&&(s[f]=[]),s[r.nameID].push(o);return this.strings=s,this.copyright=s[0],this.fontFamily=s[1],this.fontSubfamily=s[2],this.uniqueSubfamily=s[3],this.fontName=s[4],this.version=s[5],this.postscriptName=s[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g,""),this.trademark=s[7],this.manufacturer=s[8],this.designer=s[9],this.description=s[10],this.vendorUrl=s[11],this.designerUrl=s[12],this.license=s[13],this.licenseUrl=s[14],this.preferredFamily=s[15],this.preferredSubfamily=s[17],this.compatibleFull=s[18],this.sampleText=s[19]},e}(),x=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return f(e,c),e.prototype.tag="maxp",e.prototype.parse=function(t){return t.pos=this.offset,this.version=t.readInt(),this.numGlyphs=t.readUInt16(),this.maxPoints=t.readUInt16(),this.maxContours=t.readUInt16(),this.maxCompositePoints=t.readUInt16(),this.maxComponentContours=t.readUInt16(),this.maxZones=t.readUInt16(),this.maxTwilightPoints=t.readUInt16(),this.maxStorage=t.readUInt16(),this.maxFunctionDefs=t.readUInt16(),this.maxInstructionDefs=t.readUInt16(),this.maxStackElements=t.readUInt16(),this.maxSizeOfInstructions=t.readUInt16(),this.maxComponentElements=t.readUInt16(),this.maxComponentDepth=t.readUInt16()},e}(),S=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return f(e,c),e.prototype.tag="hmtx",e.prototype.parse=function(n){var t,r,i,e,o,a,s;for(n.pos=this.offset,this.metrics=[],e=0,a=this.file.hhea.numberOfMetrics;0<=a?e<a:a<e;0<=a?++e:--e)this.metrics.push({advance:n.readUInt16(),lsb:n.readInt16()});for(r=this.file.maxp.numGlyphs-this.file.hhea.numberOfMetrics,this.leftSideBearings=function(){var t,e;for(e=[],t=0;0<=r?t<r:r<t;0<=r?++t:--t)e.push(n.readInt16());return e}(),this.widths=function(){var t,e,n,r;for(r=[],t=0,e=(n=this.metrics).length;t<e;t++)i=n[t],r.push(i.advance);return r}.call(this),t=this.widths[this.widths.length-1],s=[],o=0;0<=r?o<r:r<o;0<=r?++o:--o)s.push(this.widths.push(t));return s},e.prototype.forGlyph=function(t){return t in this.metrics?this.metrics[t]:{advance:this.metrics[this.metrics.length-1].advance,lsb:this.leftSideBearings[t-this.metrics.length]}},e}(),k=[].slice,_=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return f(e,c),e.prototype.tag="glyf",e.prototype.parse=function(t){return this.cache={}},e.prototype.glyphFor=function(t){var e,n,r,i,o,a,s,h,c,l;return(t=t)in this.cache?this.cache[t]:(i=this.file.loca,e=this.file.contents,n=i.indexOf(t),0===(r=i.lengthOf(t))?this.cache[t]=null:(e.pos=this.offset+n,o=(a=new X(e.read(r))).readShort(),h=a.readShort(),l=a.readShort(),s=a.readShort(),c=a.readShort(),this.cache[t]=-1===o?new I(a,h,l,s,c):new A(a,o,h,l,s,c),this.cache[t]))},e.prototype.encode=function(t,e,n){var r,i,o,a,s;for(o=[],i=[],a=0,s=e.length;a<s;a++)r=t[e[a]],i.push(o.length),r&&(o=o.concat(r.encode(n)));return i.push(o.length),{table:o,offsets:i}},e}(),A=function(){function t(t,e,n,r,i,o){this.raw=t,this.numberOfContours=e,this.xMin=n,this.yMin=r,this.xMax=i,this.yMax=o,this.compound=!1}return t.prototype.encode=function(){return this.raw.data},t}(),I=function(){function t(t,e,n,r,i){var o,a;for(this.raw=t,this.xMin=e,this.yMin=n,this.xMax=r,this.yMax=i,this.compound=!0,this.glyphIDs=[],this.glyphOffsets=[],o=this.raw;a=o.readShort(),this.glyphOffsets.push(o.pos),this.glyphIDs.push(o.readShort()),32&a;)o.pos+=1&a?4:2,128&a?o.pos+=8:64&a?o.pos+=4:8&a&&(o.pos+=2)}return 1,8,32,64,128,t.prototype.encode=function(t){var e,n,r,i,o;for(n=new X(k.call(this.raw.data)),e=r=0,i=(o=this.glyphIDs).length;r<i;e=++r)o[e],n.pos=this.glyphOffsets[e];return n.data},t}(),C=function(t){function e(){return e.__super__.constructor.apply(this,arguments)}return f(e,c),e.prototype.tag="loca",e.prototype.parse=function(r){var t;return r.pos=this.offset,t=this.file.head.indexToLocFormat,this.offsets=0===t?function(){var t,e,n;for(n=[],t=0,e=this.length;t<e;t+=2)n.push(2*r.readUInt16());return n}.call(this):function(){var t,e,n;for(n=[],t=0,e=this.length;t<e;t+=4)n.push(r.readUInt32());return n}.call(this)},e.prototype.indexOf=function(t){return this.offsets[t]},e.prototype.lengthOf=function(t){return this.offsets[t+1]-this.offsets[t]},e.prototype.encode=function(t,e){for(var n=new Uint32Array(this.offsets.length),r=0,i=0,o=0;o<n.length;++o)if(n[o]=r,i<e.length&&e[i]==o){++i,n[o]=r;var a=this.offsets[o],s=this.offsets[o+1]-a;0<s&&(r+=s)}for(var h=new Array(4*n.length),c=0;c<n.length;++c)h[4*c+3]=255&n[c],h[4*c+2]=(65280&n[c])>>8,h[4*c+1]=(16711680&n[c])>>16,h[4*c]=(4278190080&n[c])>>24;return h},e}(),T=function(){function t(t){this.font=t,this.subset={},this.unicodes={},this.next=33}return t.prototype.generateCmap=function(){var t,e,n,r,i;for(e in r=this.font.cmap.tables[0].codeMap,t={},i=this.subset)n=i[e],t[e]=r[n];return t},t.prototype.glyphsFor=function(t){var e,n,r,i,o,a,s;for(r={},o=0,a=t.length;o<a;o++)r[i=t[o]]=this.font.glyf.glyphFor(i);for(i in e=[],r)(null!=(n=r[i])?n.compound:void 0)&&e.push.apply(e,n.glyphIDs);if(0<e.length)for(i in s=this.glyphsFor(e))n=s[i],r[i]=n;return r},t.prototype.encode=function(t){var e,n,r,i,o,a,s,h,c,l,u,f,d,p,g;for(n in e=m.encode(this.generateCmap(),"unicode"),i=this.glyphsFor(t),u={0:0},g=e.charMap)u[(a=g[n]).old]=a.new;for(f in l=e.maxGlyphID,i)f in u||(u[f]=l++);return h=function(t){var e,n;for(e in n={},t)n[t[e]]=e;return n}(u),c=Object.keys(h).sort(function(t,e){return t-e}),d=function(){var t,e,n;for(n=[],t=0,e=c.length;t<e;t++)o=c[t],n.push(h[o]);return n}(),r=this.font.glyf.encode(i,d,u),s=this.font.loca.encode(r.offsets,d),p={cmap:this.font.cmap.raw(),glyf:r.table,loca:s,hmtx:this.font.hmtx.raw(),hhea:this.font.hhea.raw(),maxp:this.font.maxp.raw(),post:this.font.post.raw(),name:this.font.name.raw(),head:this.font.head.raw()},this.font.os2.exists&&(p["OS/2"]=this.font.os2.raw()),this.font.directory.encode(p)},t}();t.API.PDFObject=function(){var o;function a(){}return o=function(t,e){return(Array(e+1).join("0")+t).slice(-e)},a.convert=function(r){var i,t,e,n;if(Array.isArray(r))return"["+function(){var t,e,n;for(n=[],t=0,e=r.length;t<e;t++)i=r[t],n.push(a.convert(i));return n}().join(" ")+"]";if("string"==typeof r)return"/"+r;if(null!=r?r.isString:void 0)return"("+r+")";if(r instanceof Date)return"(D:"+o(r.getUTCFullYear(),4)+o(r.getUTCMonth(),2)+o(r.getUTCDate(),2)+o(r.getUTCHours(),2)+o(r.getUTCMinutes(),2)+o(r.getUTCSeconds(),2)+"Z)";if("[object Object]"==={}.toString.call(r)){for(t in e=["<<"],r)n=r[t],e.push("/"+t+" "+a.convert(n));return e.push(">>"),e.join("\n")}return""+r},a}()}($),
/*
  # PNG.js
  # Copyright (c) 2011 Devon Govett
  # MIT LICENSE
  # 
  # 
  */
pt="undefined"!=typeof self&&self||"undefined"!=typeof window&&window||"undefined"!=typeof __webpack_require__.g&&__webpack_require__.g||Function('return typeof this === "object" && this.content')()||Function("return this")(),gt=function(){var c,n,r;function i(t){var e,n,r,i,o,a,s,h,c,l,u,f,d,p;for(this.data=t,this.pos=8,this.palette=[],this.imgData=[],this.transparency={},this.animation=null,this.text={},a=null;;){switch(e=this.readUInt32(),c=function(){var t,e;for(e=[],t=0;t<4;++t)e.push(String.fromCharCode(this.data[this.pos++]));return e}.call(this).join("")){case"IHDR":this.width=this.readUInt32(),this.height=this.readUInt32(),this.bits=this.data[this.pos++],this.colorType=this.data[this.pos++],this.compressionMethod=this.data[this.pos++],this.filterMethod=this.data[this.pos++],this.interlaceMethod=this.data[this.pos++];break;case"acTL":this.animation={numFrames:this.readUInt32(),numPlays:this.readUInt32()||1/0,frames:[]};break;case"PLTE":this.palette=this.read(e);break;case"fcTL":a&&this.animation.frames.push(a),this.pos+=4,a={width:this.readUInt32(),height:this.readUInt32(),xOffset:this.readUInt32(),yOffset:this.readUInt32()},o=this.readUInt16(),i=this.readUInt16()||100,a.delay=1e3*o/i,a.disposeOp=this.data[this.pos++],a.blendOp=this.data[this.pos++],a.data=[];break;case"IDAT":case"fdAT":for("fdAT"===c&&(this.pos+=4,e-=4),t=(null!=a?a.data:void 0)||this.imgData,f=0;0<=e?f<e:e<f;0<=e?++f:--f)t.push(this.data[this.pos++]);break;case"tRNS":switch(this.transparency={},this.colorType){case 3:if(r=this.palette.length/3,this.transparency.indexed=this.read(e),this.transparency.indexed.length>r)throw new Error("More transparent colors than palette size");if(0<(l=r-this.transparency.indexed.length))for(d=0;0<=l?d<l:l<d;0<=l?++d:--d)this.transparency.indexed.push(255);break;case 0:this.transparency.grayscale=this.read(e)[0];break;case 2:this.transparency.rgb=this.read(e)}break;case"tEXt":s=(u=this.read(e)).indexOf(0),h=String.fromCharCode.apply(String,u.slice(0,s)),this.text[h]=String.fromCharCode.apply(String,u.slice(s+1));break;case"IEND":return a&&this.animation.frames.push(a),this.colors=function(){switch(this.colorType){case 0:case 3:case 4:return 1;case 2:case 6:return 3}}.call(this),this.hasAlphaChannel=4===(p=this.colorType)||6===p,n=this.colors+(this.hasAlphaChannel?1:0),this.pixelBitlength=this.bits*n,this.colorSpace=function(){switch(this.colors){case 1:return"DeviceGray";case 3:return"DeviceRGB"}}.call(this),void(this.imgData=new Uint8Array(this.imgData));default:this.pos+=e}if(this.pos+=4,this.pos>this.data.length)throw new Error("Incomplete or corrupt PNG file")}}i.load=function(t,e,n){var r;return"function"==typeof e&&(n=e),(r=new XMLHttpRequest).open("GET",t,!0),r.responseType="arraybuffer",r.onload=function(){var t;return t=new i(new Uint8Array(r.response||r.mozResponseArrayBuffer)),"function"==typeof(null!=e?e.getContext:void 0)&&t.render(e),"function"==typeof n?n(t):void 0},r.send(null)},i.prototype.read=function(t){var e,n;for(n=[],e=0;0<=t?e<t:t<e;0<=t?++e:--e)n.push(this.data[this.pos++]);return n},i.prototype.readUInt32=function(){return this.data[this.pos++]<<24|this.data[this.pos++]<<16|this.data[this.pos++]<<8|this.data[this.pos++]},i.prototype.readUInt16=function(){return this.data[this.pos++]<<8|this.data[this.pos++]},i.prototype.decodePixels=function(E){var q=this.pixelBitlength/8,O=new Uint8Array(this.width*this.height*q),B=0,R=this;if(null==E&&(E=this.imgData),0===E.length)return new Uint8Array(0);function t(t,e,n,r){var i,o,a,s,h,c,l,u,f,d,p,g,m,w,y,v,b,x,S,k,_,A=Math.ceil((R.width-t)/n),I=Math.ceil((R.height-e)/r),C=R.width==A&&R.height==I;for(w=q*A,g=C?O:new Uint8Array(w*I),c=E.length,o=m=0;m<I&&B<c;){switch(E[B++]){case 0:for(s=b=0;b<w;s=b+=1)g[o++]=E[B++];break;case 1:for(s=x=0;x<w;s=x+=1)i=E[B++],h=s<q?0:g[o-q],g[o++]=(i+h)%256;break;case 2:for(s=S=0;S<w;s=S+=1)i=E[B++],a=(s-s%q)/q,y=m&&g[(m-1)*w+a*q+s%q],g[o++]=(y+i)%256;break;case 3:for(s=k=0;k<w;s=k+=1)i=E[B++],a=(s-s%q)/q,h=s<q?0:g[o-q],y=m&&g[(m-1)*w+a*q+s%q],g[o++]=(i+Math.floor((h+y)/2))%256;break;case 4:for(s=_=0;_<w;s=_+=1)i=E[B++],a=(s-s%q)/q,h=s<q?0:g[o-q],0===m?y=v=0:(y=g[(m-1)*w+a*q+s%q],v=a&&g[(m-1)*w+(a-1)*q+s%q]),l=h+y-v,u=Math.abs(l-h),d=Math.abs(l-y),p=Math.abs(l-v),f=u<=d&&u<=p?h:d<=p?y:v,g[o++]=(i+f)%256;break;default:throw new Error("Invalid filter algorithm: "+E[B-1])}if(!C){var T=((e+m*r)*R.width+t)*q,F=m*w;for(s=0;s<A;s+=1){for(var P=0;P<q;P+=1)O[T++]=g[F++];T+=(n-1)*q}}m++}}return E=(E=new kt(E)).getBytes(),1==R.interlaceMethod?(t(0,0,8,8),t(4,0,8,8),t(0,4,4,8),t(2,0,4,4),t(0,2,2,4),t(1,0,2,2),t(0,1,1,2)):t(0,0,1,1),O},i.prototype.decodePalette=function(){var t,e,n,r,i,o,a,s,h;for(n=this.palette,o=this.transparency.indexed||[],i=new Uint8Array((o.length||0)+n.length),r=0,n.length,e=a=t=0,s=n.length;a<s;e=a+=3)i[r++]=n[e],i[r++]=n[e+1],i[r++]=n[e+2],i[r++]=null!=(h=o[t++])?h:255;return i},i.prototype.copyToImageData=function(t,e){var n,r,i,o,a,s,h,c,l,u,f;if(r=this.colors,l=null,n=this.hasAlphaChannel,this.palette.length&&(l=null!=(f=this._decodedPalette)?f:this._decodedPalette=this.decodePalette(),r=4,n=!0),c=(i=t.data||t).length,a=l||e,o=s=0,1===r)for(;o<c;)h=l?4*e[o/4]:s,u=a[h++],i[o++]=u,i[o++]=u,i[o++]=u,i[o++]=n?a[h++]:255,s=h;else for(;o<c;)h=l?4*e[o/4]:s,i[o++]=a[h++],i[o++]=a[h++],i[o++]=a[h++],i[o++]=n?a[h++]:255,s=h},i.prototype.decode=function(){var t;return t=new Uint8Array(this.width*this.height*4),this.copyToImageData(t,this.decodePixels()),t};try{n=pt.document.createElement("canvas"),r=n.getContext("2d")}catch(t){return-1}return c=function(t){var e;return r.width=t.width,r.height=t.height,r.clearRect(0,0,t.width,t.height),r.putImageData(t,0,0),(e=new Image).src=n.toDataURL(),e},i.prototype.decodeFrames=function(t){var e,n,r,i,o,a,s,h;if(this.animation){for(h=[],n=o=0,a=(s=this.animation.frames).length;o<a;n=++o)e=s[n],r=t.createImageData(e.width,e.height),i=this.decodePixels(new Uint8Array(e.data)),this.copyToImageData(r,i),e.imageData=r,h.push(e.image=c(r));return h}},i.prototype.renderFrame=function(t,e){var n,r,i;return n=(r=this.animation.frames)[e],i=r[e-1],0===e&&t.clearRect(0,0,this.width,this.height),1===(null!=i?i.disposeOp:void 0)?t.clearRect(i.xOffset,i.yOffset,i.width,i.height):2===(null!=i?i.disposeOp:void 0)&&t.putImageData(i.imageData,i.xOffset,i.yOffset),0===n.blendOp&&t.clearRect(n.xOffset,n.yOffset,n.width,n.height),t.drawImage(n.image,n.xOffset,n.yOffset)},i.prototype.animate=function(n){var r,i,o,a,s,t,h=this;return i=0,t=this.animation,a=t.numFrames,o=t.frames,s=t.numPlays,(r=function(){var t,e;if(t=i++%a,e=o[t],h.renderFrame(n,t),1<a&&i/a<s)return h.animation._timeout=setTimeout(r,e.delay)})()},i.prototype.stopAnimation=function(){var t;return clearTimeout(null!=(t=this.animation)?t._timeout:void 0)},i.prototype.render=function(t){var e,n;return t._png&&t._png.stopAnimation(),t._png=this,t.width=this.width,t.height=this.height,e=t.getContext("2d"),this.animation?(this.decodeFrames(e),this.animate(e)):(n=e.createImageData(this.width,this.height),this.copyToImageData(n,this.decodePixels()),e.putImageData(n,0,0))},i}(),pt.PNG=gt;
/*
   * Extracted from pdf.js
   * https://github.com/andreasgal/pdf.js
   *
   * Copyright (c) 2011 Mozilla Foundation
   *
   * Contributors: Andreas Gal <gal@mozilla.com>
   *               Chris G Jones <cjones@mozilla.com>
   *               Shaon Barman <shaon.barman@gmail.com>
   *               Vivien Nicolas <21@vingtetun.org>
   *               Justin D'Arcangelo <justindarc@gmail.com>
   *               Yury Delendik
   *
   * 
   */
var St=function(){function t(){this.pos=0,this.bufferLength=0,this.eof=!1,this.buffer=null}return t.prototype={ensureBuffer:function(t){var e=this.buffer,n=e?e.byteLength:0;if(t<n)return e;for(var r=512;r<t;)r<<=1;for(var i=new Uint8Array(r),o=0;o<n;++o)i[o]=e[o];return this.buffer=i},getByte:function(){for(var t=this.pos;this.bufferLength<=t;){if(this.eof)return null;this.readBlock()}return this.buffer[this.pos++]},getBytes:function(t){var e=this.pos;if(t){this.ensureBuffer(e+t);for(var n=e+t;!this.eof&&this.bufferLength<n;)this.readBlock();var r=this.bufferLength;r<n&&(n=r)}else{for(;!this.eof;)this.readBlock();n=this.bufferLength}return this.pos=n,this.buffer.subarray(e,n)},lookChar:function(){for(var t=this.pos;this.bufferLength<=t;){if(this.eof)return null;this.readBlock()}return String.fromCharCode(this.buffer[this.pos])},getChar:function(){for(var t=this.pos;this.bufferLength<=t;){if(this.eof)return null;this.readBlock()}return String.fromCharCode(this.buffer[this.pos++])},makeSubStream:function(t,e,n){for(var r=t+e;this.bufferLength<=r&&!this.eof;)this.readBlock();return new Stream(this.buffer,t,e,n)},skip:function(t){t||(t=1),this.pos+=t},reset:function(){this.pos=0}},t}(),kt=function(){if("undefined"!=typeof Uint32Array){var F=new Uint32Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),P=new Uint32Array([3,4,5,6,7,8,9,10,65547,65549,65551,65553,131091,131095,131099,131103,196643,196651,196659,196667,262211,262227,262243,262259,327811,327843,327875,327907,258,258,258]),E=new Uint32Array([1,2,3,4,65541,65543,131081,131085,196625,196633,262177,262193,327745,327777,393345,393409,459009,459137,524801,525057,590849,591361,657409,658433,724993,727041,794625,798721,868353,876545]),q=[new Uint32Array([459008,524368,524304,524568,459024,524400,524336,590016,459016,524384,524320,589984,524288,524416,524352,590048,459012,524376,524312,589968,459028,524408,524344,590032,459020,524392,524328,59e4,524296,524424,524360,590064,459010,524372,524308,524572,459026,524404,524340,590024,459018,524388,524324,589992,524292,524420,524356,590056,459014,524380,524316,589976,459030,524412,524348,590040,459022,524396,524332,590008,524300,524428,524364,590072,459009,524370,524306,524570,459025,524402,524338,590020,459017,524386,524322,589988,524290,524418,524354,590052,459013,524378,524314,589972,459029,524410,524346,590036,459021,524394,524330,590004,524298,524426,524362,590068,459011,524374,524310,524574,459027,524406,524342,590028,459019,524390,524326,589996,524294,524422,524358,590060,459015,524382,524318,589980,459031,524414,524350,590044,459023,524398,524334,590012,524302,524430,524366,590076,459008,524369,524305,524569,459024,524401,524337,590018,459016,524385,524321,589986,524289,524417,524353,590050,459012,524377,524313,589970,459028,524409,524345,590034,459020,524393,524329,590002,524297,524425,524361,590066,459010,524373,524309,524573,459026,524405,524341,590026,459018,524389,524325,589994,524293,524421,524357,590058,459014,524381,524317,589978,459030,524413,524349,590042,459022,524397,524333,590010,524301,524429,524365,590074,459009,524371,524307,524571,459025,524403,524339,590022,459017,524387,524323,589990,524291,524419,524355,590054,459013,524379,524315,589974,459029,524411,524347,590038,459021,524395,524331,590006,524299,524427,524363,590070,459011,524375,524311,524575,459027,524407,524343,590030,459019,524391,524327,589998,524295,524423,524359,590062,459015,524383,524319,589982,459031,524415,524351,590046,459023,524399,524335,590014,524303,524431,524367,590078,459008,524368,524304,524568,459024,524400,524336,590017,459016,524384,524320,589985,524288,524416,524352,590049,459012,524376,524312,589969,459028,524408,524344,590033,459020,524392,524328,590001,524296,524424,524360,590065,459010,524372,524308,524572,459026,524404,524340,590025,459018,524388,524324,589993,524292,524420,524356,590057,459014,524380,524316,589977,459030,524412,524348,590041,459022,524396,524332,590009,524300,524428,524364,590073,459009,524370,524306,524570,459025,524402,524338,590021,459017,524386,524322,589989,524290,524418,524354,590053,459013,524378,524314,589973,459029,524410,524346,590037,459021,524394,524330,590005,524298,524426,524362,590069,459011,524374,524310,524574,459027,524406,524342,590029,459019,524390,524326,589997,524294,524422,524358,590061,459015,524382,524318,589981,459031,524414,524350,590045,459023,524398,524334,590013,524302,524430,524366,590077,459008,524369,524305,524569,459024,524401,524337,590019,459016,524385,524321,589987,524289,524417,524353,590051,459012,524377,524313,589971,459028,524409,524345,590035,459020,524393,524329,590003,524297,524425,524361,590067,459010,524373,524309,524573,459026,524405,524341,590027,459018,524389,524325,589995,524293,524421,524357,590059,459014,524381,524317,589979,459030,524413,524349,590043,459022,524397,524333,590011,524301,524429,524365,590075,459009,524371,524307,524571,459025,524403,524339,590023,459017,524387,524323,589991,524291,524419,524355,590055,459013,524379,524315,589975,459029,524411,524347,590039,459021,524395,524331,590007,524299,524427,524363,590071,459011,524375,524311,524575,459027,524407,524343,590031,459019,524391,524327,589999,524295,524423,524359,590063,459015,524383,524319,589983,459031,524415,524351,590047,459023,524399,524335,590015,524303,524431,524367,590079]),9],O=[new Uint32Array([327680,327696,327688,327704,327684,327700,327692,327708,327682,327698,327690,327706,327686,327702,327694,0,327681,327697,327689,327705,327685,327701,327693,327709,327683,327699,327691,327707,327687,327703,327695,0]),5];return(t.prototype=Object.create(St.prototype)).getBits=function(t){for(var e,n=this.codeSize,r=this.codeBuf,i=this.bytes,o=this.bytesPos;n<t;)void 0===(e=i[o++])&&B("Bad encoding in flate stream"),r|=e<<n,n+=8;return e=r&(1<<t)-1,this.codeBuf=r>>t,this.codeSize=n-=t,this.bytesPos=o,e},t.prototype.getCode=function(t){for(var e=t[0],n=t[1],r=this.codeSize,i=this.codeBuf,o=this.bytes,a=this.bytesPos;r<n;){var s;void 0===(s=o[a++])&&B("Bad encoding in flate stream"),i|=s<<r,r+=8}var h=e[i&(1<<n)-1],c=h>>16,l=65535&h;return(0==r||r<c||0==c)&&B("Bad encoding in flate stream"),this.codeBuf=i>>c,this.codeSize=r-c,this.bytesPos=a,l},t.prototype.generateHuffmanTable=function(t){for(var e=t.length,n=0,r=0;r<e;++r)t[r]>n&&(n=t[r]);for(var i=1<<n,o=new Uint32Array(i),a=1,s=0,h=2;a<=n;++a,s<<=1,h<<=1)for(var c=0;c<e;++c)if(t[c]==a){var l=0,u=s;for(r=0;r<a;++r)l=l<<1|1&u,u>>=1;for(r=l;r<i;r+=h)o[r]=a<<16|c;++s}return[o,n]},t.prototype.readBlock=function(){function t(t,e,n,r,i){for(var o=t.getBits(n)+r;0<o--;)e[h++]=i}var e=this.getBits(3);if(1&e&&(this.eof=!0),0!=(e>>=1)){var n,r;if(1==e)n=q,r=O;else if(2==e){for(var i=this.getBits(5)+257,o=this.getBits(5)+1,a=this.getBits(4)+4,s=Array(F.length),h=0;h<a;)s[F[h++]]=this.getBits(3);for(var c=this.generateHuffmanTable(s),l=0,u=(h=0,i+o),f=new Array(u);h<u;){var d=this.getCode(c);16==d?t(this,f,2,3,l):17==d?t(this,f,3,3,l=0):18==d?t(this,f,7,11,l=0):f[h++]=l=d}n=this.generateHuffmanTable(f.slice(0,i)),r=this.generateHuffmanTable(f.slice(i,u))}else B("Unknown block type in flate stream");for(var p=(I=this.buffer)?I.length:0,g=this.bufferLength;;){var m=this.getCode(n);if(m<256)p<=g+1&&(p=(I=this.ensureBuffer(g+1)).length),I[g++]=m;else{if(256==m)return void(this.bufferLength=g);var w=(m=P[m-=257])>>16;0<w&&(w=this.getBits(w));l=(65535&m)+w;m=this.getCode(r),0<(w=(m=E[m])>>16)&&(w=this.getBits(w));var y=(65535&m)+w;p<=g+l&&(p=(I=this.ensureBuffer(g+l)).length);for(var v=0;v<l;++v,++g)I[g]=I[g-y]}}}else{var b,x=this.bytes,S=this.bytesPos;void 0===(b=x[S++])&&B("Bad block header in flate stream");var k=b;void 0===(b=x[S++])&&B("Bad block header in flate stream"),k|=b<<8,void 0===(b=x[S++])&&B("Bad block header in flate stream");var _=b;void 0===(b=x[S++])&&B("Bad block header in flate stream"),(_|=b<<8)!=(65535&~k)&&B("Bad uncompressed block length in flate stream"),this.codeBuf=0,this.codeSize=0;var A=this.bufferLength,I=this.ensureBuffer(A+k),C=A+k;this.bufferLength=C;for(var T=A;T<C;++T){if(void 0===(b=x[S++])){this.eof=!0;break}I[T]=b}this.bytesPos=S}},t}function B(t){throw new Error(t)}function t(t){var e=0,n=t[e++],r=t[e++];-1!=n&&-1!=r||B("Invalid header in flate stream"),8!=(15&n)&&B("Unknown compression method in flate stream"),((n<<8)+r)%31!=0&&B("Bad FCHECK in flate stream"),32&r&&B("FDICT bit set in flate stream"),this.bytes=t,this.bytesPos=2,this.codeSize=0,this.codeBuf=0,St.call(this)}}();return function(t){if("object"!=typeof t.console){t.console={};for(var e,n,r=t.console,i=function(){},o=["memory"],a="assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn".split(",");e=o.pop();)r[e]||(r[e]={});for(;n=a.pop();)r[n]||(r[n]=i)}var s,h,c,l,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";void 0===t.btoa&&(t.btoa=function(t){var e,n,r,i,o,a=0,s=0,h="",c=[];if(!t)return t;for(;e=(o=t.charCodeAt(a++)<<16|t.charCodeAt(a++)<<8|t.charCodeAt(a++))>>18&63,n=o>>12&63,r=o>>6&63,i=63&o,c[s++]=u.charAt(e)+u.charAt(n)+u.charAt(r)+u.charAt(i),a<t.length;);h=c.join("");var l=t.length%3;return(l?h.slice(0,l-3):h)+"===".slice(l||3)}),void 0===t.atob&&(t.atob=function(t){var e,n,r,i,o,a,s=0,h=0,c=[];if(!t)return t;for(t+="";e=(a=u.indexOf(t.charAt(s++))<<18|u.indexOf(t.charAt(s++))<<12|(i=u.indexOf(t.charAt(s++)))<<6|(o=u.indexOf(t.charAt(s++))))>>16&255,n=a>>8&255,r=255&a,c[h++]=64==i?String.fromCharCode(e):64==o?String.fromCharCode(e,n):String.fromCharCode(e,n,r),s<t.length;);return c.join("")}),Array.prototype.map||(Array.prototype.map=function(t){if(null==this||"function"!=typeof t)throw new TypeError;for(var e=Object(this),n=e.length>>>0,r=new Array(n),i=1<arguments.length?arguments[1]:void 0,o=0;o<n;o++)o in e&&(r[o]=t.call(i,e[o],o,e));return r}),Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),Array.prototype.forEach||(Array.prototype.forEach=function(t,e){if(null==this||"function"!=typeof t)throw new TypeError;for(var n=Object(this),r=n.length>>>0,i=0;i<r;i++)i in n&&t.call(e,n[i],i,n)}),Object.keys||(Object.keys=(s=Object.prototype.hasOwnProperty,h=!{toString:null}.propertyIsEnumerable("toString"),l=(c=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]).length,function(t){if("object"!=typeof t&&("function"!=typeof t||null===t))throw new TypeError;var e,n,r=[];for(e in t)s.call(t,e)&&r.push(e);if(h)for(n=0;n<l;n++)s.call(t,c[n])&&r.push(c[n]);return r})),"function"!=typeof Object.assign&&(Object.assign=function(t){if(null==t)throw new TypeError("Cannot convert undefined or null to object");t=Object(t);for(var e=1;e<arguments.length;e++){var n=arguments[e];if(null!=n)for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}),String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),String.prototype.trimLeft||(String.prototype.trimLeft=function(){return this.replace(/^\s+/g,"")}),String.prototype.trimRight||(String.prototype.trimRight=function(){return this.replace(/\s+$/g,"")})}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||"undefined"!=typeof __webpack_require__.g&&__webpack_require__.g||Function('return typeof this === "object" && this.content')()||Function("return this")()),$});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/SKCK.vue?vue&type=style&index=0&id=9795f7ea&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/SKCK.vue?vue&type=style&index=0&id=9795f7ea&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.surat[data-v-9795f7ea] {\r\n  background-color: #ffffff !important;\n}\nhr[data-v-9795f7ea] {\r\n  border: none;\r\n  height: 3px;\r\n  /* Set the hr color */\r\n  color: #000000 !important; /* old IE */\r\n  background-color: #000000 !important; /* Modern Browsers */\n}\n#app[data-v-9795f7ea] {\r\n  margin-top: 60px;\r\n  text-align: center;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/SKCK.vue?vue&type=style&index=0&id=9795f7ea&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/SKCK.vue?vue&type=style&index=0&id=9795f7ea&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SKCK_vue_vue_type_style_index_0_id_9795f7ea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SKCK.vue?vue&type=style&index=0&id=9795f7ea&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/SKCK.vue?vue&type=style&index=0&id=9795f7ea&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SKCK_vue_vue_type_style_index_0_id_9795f7ea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SKCK_vue_vue_type_style_index_0_id_9795f7ea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/admin/SKCK.vue":
/*!************************************************!*\
  !*** ./resources/js/components/admin/SKCK.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SKCK_vue_vue_type_template_id_9795f7ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SKCK.vue?vue&type=template&id=9795f7ea&scoped=true& */ "./resources/js/components/admin/SKCK.vue?vue&type=template&id=9795f7ea&scoped=true&");
/* harmony import */ var _SKCK_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SKCK.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/SKCK.vue?vue&type=script&lang=js&");
/* harmony import */ var _SKCK_vue_vue_type_style_index_0_id_9795f7ea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SKCK.vue?vue&type=style&index=0&id=9795f7ea&scoped=true&lang=css& */ "./resources/js/components/admin/SKCK.vue?vue&type=style&index=0&id=9795f7ea&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SKCK_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SKCK_vue_vue_type_template_id_9795f7ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SKCK_vue_vue_type_template_id_9795f7ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "9795f7ea",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/SKCK.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/SKCK.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/admin/SKCK.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SKCK_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SKCK.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/SKCK.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SKCK_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/SKCK.vue?vue&type=template&id=9795f7ea&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/admin/SKCK.vue?vue&type=template&id=9795f7ea&scoped=true& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SKCK_vue_vue_type_template_id_9795f7ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SKCK_vue_vue_type_template_id_9795f7ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SKCK_vue_vue_type_template_id_9795f7ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SKCK.vue?vue&type=template&id=9795f7ea&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/SKCK.vue?vue&type=template&id=9795f7ea&scoped=true&");


/***/ }),

/***/ "./resources/js/components/admin/SKCK.vue?vue&type=style&index=0&id=9795f7ea&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/admin/SKCK.vue?vue&type=style&index=0&id=9795f7ea&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SKCK_vue_vue_type_style_index_0_id_9795f7ea_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SKCK.vue?vue&type=style&index=0&id=9795f7ea&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/SKCK.vue?vue&type=style&index=0&id=9795f7ea&scoped=true&lang=css&");


/***/ })

}]);