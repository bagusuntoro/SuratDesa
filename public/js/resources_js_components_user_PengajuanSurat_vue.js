"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_user_PengajuanSurat_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/PengajuanSurat.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/PengajuanSurat.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    var _form;
    return {
      form: (_form = {
        nama: "",
        jenis_surat: ""
      }, _defineProperty(_form, "nama", ""), _defineProperty(_form, "nik", ""), _defineProperty(_form, "ttl", ""), _defineProperty(_form, "jenis_kelamin", ""), _defineProperty(_form, "warganegara", ""), _defineProperty(_form, "agama", ""), _defineProperty(_form, "pekerjaan", ""), _defineProperty(_form, "alamat", ""), _defineProperty(_form, "status", ""), _defineProperty(_form, "bukti_diri", ""), _defineProperty(_form, "keperluan", ""), _defineProperty(_form, "tujuan", ""), _defineProperty(_form, "berlaku_mulai", ""), _defineProperty(_form, "keterangan", ""), _defineProperty(_form, "status_surat", ""), _defineProperty(_form, "user_id", ""), _form),
      user_id: ''
    };
  },
  methods: {
    handleSubmit: function handleSubmit() {
      var _this = this;
      var formData = new FormData();
      formData.append("nama", this.form.nama);
      formData.append("jenis_surat", this.form.jenis_surat);
      formData.append("nik", this.form.nik);
      formData.append("ttl", this.form.ttl);
      formData.append("jenis_kelamin", this.form.jenis_kelamin);
      formData.append("warganegara", this.form.warganegara);
      formData.append("agama", this.form.agama);
      formData.append("pekerjaan", this.form.pekerjaan);
      formData.append("alamat", this.form.alamat);
      formData.append("status", this.form.status);
      formData.append("bukti_diri", this.form.bukti_diri);
      formData.append("keperluan", this.form.keperluan);
      formData.append("tujuan", this.form.tujuan);
      formData.append("berlaku_mulai", this.form.berlaku_mulai);
      formData.append("keterangan", this.form.keterangan);
      formData.append("status_surat", this.form.status_surat);
      formData.append("user_id", this.user_id);
      axios__WEBPACK_IMPORTED_MODULE_0___default().post("http://localhost:8000/api/auth/pengajuan/", formData, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }).then(function (response) {
        _this.$router.push('/user-surat');
      })["catch"](function (error) {
        console.error(error);
      });
    }
  },
  created: function created() {
    var _this2 = this;
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("http://localhost:8000/api/auth/me/", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    }).then(function (response) {
      _this2.user_id = response.data.id;
      var role = response.data.role; // Get the user's role from the response
      var token = localStorage.getItem("token");
      var expires_in = localStorage.getItem("expires_in");
      if (!token || !expires_in || new Date() > new Date(expires_in)) {
        // If token is missing or expired, redirect to the home page
        localStorage.removeItem("token");
        localStorage.removeItem("expires_in");
        _this2.$router.push("/");
      } else if (role !== "user") {
        // If the user doesn't have admin privileges, redirect to the unauthorized page
        _this2.$router.push("/unauthorized");
        // console.log(response.data.role)
      } else {
        console.log("success");
      }
    })["catch"](function (error) {
      console.error(error);
      _this2.$router.push("/");
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/PengajuanSurat.vue?vue&type=template&id=2cfd9f41&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/PengajuanSurat.vue?vue&type=template&id=2cfd9f41& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  }, [_c("sidebar"), _vm._v(" "), _c("div", {
    staticClass: "d-flex flex-column",
    attrs: {
      id: "content-wrapper"
    }
  }, [_c("div", {
    attrs: {
      id: "content"
    }
  }, [_c("navbar"), _vm._v(" "), _c("h1", {
    staticClass: "text-center customMargin h3"
  }, [_vm._v("Form Pengajuan Surat")]), _vm._v(" "), _c("form", {
    attrs: {
      enctype: "multipart/form-data"
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.handleSubmit.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "headerNote"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-1"
  }), _vm._v(" "), _c("div", {
    staticClass: "col-sm-10"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-6"
  }, [_c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "jenis_surat"
    }
  }, [_vm._v("Jenis Surat")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.jenis_surat,
      expression: "form.jenis_surat"
    }],
    staticClass: "form-select",
    attrs: {
      "aria-label": "Default select example"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "jenis_surat", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      disabled: "",
      value: ""
    }
  }, [_vm._v("Pilih")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "SKTM"
    }
  }, [_vm._v("SKTM")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Pengantar SKCK"
    }
  }, [_vm._v("SKCK")])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6"
  }, [_c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "nama"
    }
  }, [_vm._v("Nama")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.nama,
      expression: "form.nama"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "nama",
      placeholder: "masukkan nama"
    },
    domProps: {
      value: _vm.form.nama
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "nama", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-6"
  }, [_c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "nik"
    }
  }, [_vm._v("NIK")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.nik,
      expression: "form.nik"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      id: "no_nik",
      placeholder: "masukkan nik"
    },
    domProps: {
      value: _vm.form.nik
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "nik", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6"
  }, [_c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "ttl"
    }
  }, [_vm._v("Tempat, Tanggal Lahir")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.ttl,
      expression: "form.ttl"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "ttl",
      placeholder: "masukkan tempat tanggal lahir"
    },
    domProps: {
      value: _vm.form.ttl
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "ttl", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-6"
  }, [_c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "jenis_kelamin"
    }
  }, [_vm._v("Jenis Kelamin")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.jenis_kelamin,
      expression: "form.jenis_kelamin"
    }],
    staticClass: "form-select",
    attrs: {
      "aria-label": "Default select example"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "jenis_kelamin", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      disabled: "",
      value: ""
    }
  }, [_vm._v("Pilih")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "laki"
    }
  }, [_vm._v("Laki-laki")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "perempuan"
    }
  }, [_vm._v("Perempuan")])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6"
  }, [_c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "warganegara"
    }
  }, [_vm._v("Warganegara")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.warganegara,
      expression: "form.warganegara"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "warganegara",
      placeholder: "masukkan warganegara"
    },
    domProps: {
      value: _vm.form.warganegara
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "warganegara", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-6"
  }, [_c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "agama"
    }
  }, [_vm._v("Agama")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.agama,
      expression: "form.agama"
    }],
    staticClass: "form-select",
    attrs: {
      "aria-label": "Default select example"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "agama", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      disabled: "",
      value: ""
    }
  }, [_vm._v("Pilih")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "islam"
    }
  }, [_vm._v("Islam")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "x"
    }
  }, [_vm._v("...")])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6"
  }, [_c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "pekerjaan"
    }
  }, [_vm._v("Pekerjaan")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.pekerjaan,
      expression: "form.pekerjaan"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "pekerjaan",
      placeholder: "masukkan pekerjaan"
    },
    domProps: {
      value: _vm.form.pekerjaan
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "pekerjaan", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-6"
  }, [_c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "alamat"
    }
  }, [_vm._v("Alamat")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.alamat,
      expression: "form.alamat"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "alamat",
      placeholder: "masukkan alamat"
    },
    domProps: {
      value: _vm.form.alamat
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "alamat", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6"
  }, [_c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "status"
    }
  }, [_vm._v("Status")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.status,
      expression: "form.status"
    }],
    staticClass: "form-select",
    attrs: {
      "aria-label": "Default select example"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      disabled: "",
      value: ""
    }
  }, [_vm._v("Pilih")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "menikah"
    }
  }, [_vm._v("Menikah")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "jada-duda"
    }
  }, [_vm._v("Janda/Duda")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "pelajar"
    }
  }, [_vm._v("Pelajar/Mahasiswa")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-6"
  }, [_c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "bukti_diri"
    }
  }, [_vm._v("Bukti Diri")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.bukti_diri,
      expression: "form.bukti_diri"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "bukti_diri",
      placeholder: "masukkan bukti diri"
    },
    domProps: {
      value: _vm.form.bukti_diri
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "bukti_diri", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6"
  }, [_c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "keperluan"
    }
  }, [_vm._v("Keperluan")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.keperluan,
      expression: "form.keperluan"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "keperluan",
      placeholder: "masukkan keperluan"
    },
    domProps: {
      value: _vm.form.keperluan
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "keperluan", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-6"
  }, [_c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "tujuan"
    }
  }, [_vm._v("Tujuan")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.tujuan,
      expression: "form.tujuan"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "tujuan",
      placeholder: "masukkan tujuan"
    },
    domProps: {
      value: _vm.form.tujuan
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "tujuan", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6"
  }, [_c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "berlaku_mulai"
    }
  }, [_vm._v("Berlaku Mulai")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.berlaku_mulai,
      expression: "form.berlaku_mulai"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date",
      id: "berlaku_mulai",
      placeholder: "masukkan berlaku_mulai"
    },
    domProps: {
      value: _vm.form.berlaku_mulai
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "berlaku_mulai", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "form-floating"
  }, [_c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.keterangan,
      expression: "form.keterangan"
    }],
    staticClass: "form-control",
    staticStyle: {
      height: "100px"
    },
    attrs: {
      placeholder: "masukkan keterangan tambahan",
      id: "keterangan"
    },
    domProps: {
      value: _vm.form.keterangan
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "keterangan", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "keterangan"
    }
  }, [_vm._v("Keterangan Tambahan")])])]), _vm._v(" "), _c("div", {
    staticClass: "row mt-3"
  }, [_c("div", {
    staticClass: "col-sm-6"
  }, [_c("router-link", {
    staticClass: "btn btn-danger mb-5",
    attrs: {
      to: "/user-note"
    }
  }, [_vm._v("Kembali")])], 1), _vm._v(" "), _vm._m(0)])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-1"
  })])])])], 1), _vm._v(" "), _c("footer")])], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col-sm-6"
  }, [_c("button", {
    staticClass: "btn btn-primary",
    staticStyle: {
      "float": "right"
    },
    attrs: {
      type: "submit"
    }
  }, [_vm._v("\n                    Kirim\n                  ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/user/PengajuanSurat.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/user/PengajuanSurat.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PengajuanSurat_vue_vue_type_template_id_2cfd9f41___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PengajuanSurat.vue?vue&type=template&id=2cfd9f41& */ "./resources/js/components/user/PengajuanSurat.vue?vue&type=template&id=2cfd9f41&");
/* harmony import */ var _PengajuanSurat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PengajuanSurat.vue?vue&type=script&lang=js& */ "./resources/js/components/user/PengajuanSurat.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PengajuanSurat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PengajuanSurat_vue_vue_type_template_id_2cfd9f41___WEBPACK_IMPORTED_MODULE_0__.render,
  _PengajuanSurat_vue_vue_type_template_id_2cfd9f41___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/PengajuanSurat.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/PengajuanSurat.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/user/PengajuanSurat.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PengajuanSurat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PengajuanSurat.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/PengajuanSurat.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PengajuanSurat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/PengajuanSurat.vue?vue&type=template&id=2cfd9f41&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/user/PengajuanSurat.vue?vue&type=template&id=2cfd9f41& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PengajuanSurat_vue_vue_type_template_id_2cfd9f41___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PengajuanSurat_vue_vue_type_template_id_2cfd9f41___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PengajuanSurat_vue_vue_type_template_id_2cfd9f41___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PengajuanSurat.vue?vue&type=template&id=2cfd9f41& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/PengajuanSurat.vue?vue&type=template&id=2cfd9f41&");


/***/ })

}]);