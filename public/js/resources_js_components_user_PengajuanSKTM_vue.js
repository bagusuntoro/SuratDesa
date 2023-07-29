"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_user_PengajuanSKTM_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/PengajuanSKTM.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/PengajuanSKTM.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      form: {
        nama_pemohon: "",
        ttl_pemohon: "",
        nik_pemohon: "",
        pendidikan_pemohon: "",
        jenis_kelamin_pemohon: "",
        nama_orangtua: "",
        ttl_orangtua: "",
        jenis_kelamin_orangtua: "",
        agama_orangtua: "",
        status_pernikahan_orangtua: "",
        warganegara_orangtua: "",
        no_kk: "",
        nik_orangtua: "",
        pekerjaan_orangtua: "",
        alamat_orangtua: "",
        tujuan: "",
        user_id: ""
      },
      user_id: '',
      posisi: 'pemohon'
    };
  },
  methods: {
    setPosisi: function setPosisi(data) {
      this.posisi = data;
    },
    handleSubmit: function handleSubmit() {
      var _this = this;
      var formData = new FormData();
      formData.append("nama_pemohon", this.form.nama_pemohon);
      formData.append("ttl_pemohon", this.form.ttl_pemohon);
      formData.append("nik_pemohon", this.form.nik_pemohon);
      formData.append("pendidikan_pemohon", this.form.pendidikan_pemohon);
      formData.append("jenis_kelamin_pemohon", this.form.jenis_kelamin_pemohon);
      formData.append("nama_orangtua", this.form.nama_orangtua);
      formData.append("ttl_orangtua", this.form.ttl_orangtua);
      formData.append("jenis_kelamin_orangtua", this.form.jenis_kelamin_orangtua);
      formData.append("agama_orangtua", this.form.agama_orangtua);
      formData.append("status_pernikahan_orangtua", this.form.status_pernikahan_orangtua);
      formData.append("warganegara_orangtua", this.form.warganegara_orangtua);
      formData.append("no_kk", this.form.no_kk);
      formData.append("nik_orangtua", this.form.nik_orangtua);
      formData.append("pekerjaan_orangtua", this.form.pekerjaan_orangtua);
      formData.append("alamat_orangtua", this.form.alamat_orangtua);
      formData.append("tujuan", this.form.tujuan);
      formData.append("user_id", this.user_id);
      axios__WEBPACK_IMPORTED_MODULE_0___default().post("http://localhost:8000/api/auth/pengajuan-sktm/", formData, {
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/PengajuanSKTM.vue?vue&type=template&id=35153f3a&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/PengajuanSKTM.vue?vue&type=template&id=35153f3a& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._v("Form Pengajuan Surat SKCK")]), _vm._v(" "), _c("form", {
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
  }, [this.posisi === "pemohon" ? _c("div", {
    staticClass: "pemohon"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-6"
  }, [_c("div", {
    staticClass: "mb-3"
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
      value: _vm.form.nama_pemohon,
      expression: "form.nama_pemohon"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "nama_pemohon",
      placeholder: "masukkan nama"
    },
    domProps: {
      value: _vm.form.nama_pemohon
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "nama_pemohon", $event.target.value);
      }
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6"
  }, [_c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "ttl_pemohon"
    }
  }, [_vm._v("Tempat tanggal lahir")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.ttl_pemohon,
      expression: "form.ttl_pemohon"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "ttl_pemohon",
      placeholder: "masukkan nama"
    },
    domProps: {
      value: _vm.form.ttl_pemohon
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "ttl_pemohon", $event.target.value);
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
      "for": "nik_pemohon"
    }
  }, [_vm._v("NIK")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.nik_pemohon,
      expression: "form.nik_pemohon"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      id: "nik_pemohon",
      placeholder: "masukkan nik"
    },
    domProps: {
      value: _vm.form.nik_pemohon
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "nik_pemohon", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6"
  }, [_c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "pendidikan_pemohon"
    }
  }, [_vm._v("Pendidikan")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.pendidikan_pemohon,
      expression: "form.pendidikan_pemohon"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "pendidikan_pemohon",
      placeholder: "masukkan pendidikan"
    },
    domProps: {
      value: _vm.form.pendidikan_pemohon
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "pendidikan_pemohon", $event.target.value);
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
      "for": "jenis_kelamin_pemohon"
    }
  }, [_vm._v("Jenis Kelamin")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.jenis_kelamin_pemohon,
      expression: "form.jenis_kelamin_pemohon"
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
        _vm.$set(_vm.form, "jenis_kelamin_pemohon", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
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
  }, [_c("button", {
    staticClass: "btn btn-primary float-end mt-4",
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.setPosisi("orangtua");
      }
    }
  }, [_vm._v("Selanjutnya")])])])]) : _vm._e(), _vm._v(" "), this.posisi === "orangtua" ? _c("div", {
    staticClass: "orangtua"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-6"
  }, [_c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "nama_orangtua"
    }
  }, [_vm._v("Nama Orangtua")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.nama_orangtua,
      expression: "form.nama_orangtua"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "nama_orangtua",
      placeholder: "masukkan nama orangtua"
    },
    domProps: {
      value: _vm.form.nama_orangtua
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "nama_orangtua", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6"
  }, [_c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "ttl_orangtua"
    }
  }, [_vm._v("Tempat tanggal lahir")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.ttl_orangtua,
      expression: "form.ttl_orangtua"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "ttl_orangtua",
      placeholder: "masukkan tempat tanggal lahir"
    },
    domProps: {
      value: _vm.form.ttl_orangtua
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "ttl_orangtua", $event.target.value);
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
      "for": "jenis_kelamin_orangtua"
    }
  }, [_vm._v("Jenis Kelamin")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.jenis_kelamin_orangtua,
      expression: "form.jenis_kelamin_orangtua"
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
        _vm.$set(_vm.form, "jenis_kelamin_orangtua", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
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
      "for": "agama_orangtua"
    }
  }, [_vm._v("Agama")]), _vm._v(" "), _c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.agama_orangtua,
      expression: "form.agama_orangtua"
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
        _vm.$set(_vm.form, "agama_orangtua", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
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
      value: "kristen"
    }
  }, [_vm._v("Kristen")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "hindu"
    }
  }, [_vm._v("Hindu")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "budha"
    }
  }, [_vm._v("Budha")])])])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
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
      value: _vm.form.status_pernikahan_orangtua,
      expression: "form.status_pernikahan_orangtua"
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
        _vm.$set(_vm.form, "status_pernikahan_orangtua", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
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
  }, [_vm._v("Janda/Duda")])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6"
  }, [_c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "warganegara_orangtua"
    }
  }, [_vm._v("Warganegara")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.warganegara_orangtua,
      expression: "form.warganegara_orangtua"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "warganegara_orangtua",
      placeholder: "masukkan warganegara"
    },
    domProps: {
      value: _vm.form.warganegara_orangtua
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "warganegara_orangtua", $event.target.value);
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
      "for": "no_kk"
    }
  }, [_vm._v("Nomor KK")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.no_kk,
      expression: "form.no_kk"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      id: "no_kk",
      placeholder: "masukkan nomor kk"
    },
    domProps: {
      value: _vm.form.no_kk
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "no_kk", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6"
  }, [_c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "nik_orangtua"
    }
  }, [_vm._v("NIK")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.nik_orangtua,
      expression: "form.nik_orangtua"
    }],
    staticClass: "form-control",
    attrs: {
      type: "number",
      id: "nik_orangtua",
      placeholder: "masukkan nik_orangtua"
    },
    domProps: {
      value: _vm.form.nik_orangtua
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "nik_orangtua", $event.target.value);
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
      "for": "pekerjaan_orangtua"
    }
  }, [_vm._v("Pekerjaan")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.pekerjaan_orangtua,
      expression: "form.pekerjaan_orangtua"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "pekerjaan_orangtua",
      placeholder: "masukkan pekerjaan"
    },
    domProps: {
      value: _vm.form.pekerjaan_orangtua
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "pekerjaan_orangtua", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-6"
  }, [_c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "alamat_orangtua"
    }
  }, [_vm._v("Alamat")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.alamat_orangtua,
      expression: "form.alamat_orangtua"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "alamat_orangtua",
      placeholder: "masukkan alamat"
    },
    domProps: {
      value: _vm.form.alamat_orangtua
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "alamat_orangtua", $event.target.value);
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
      value: _vm.form.tujuan,
      expression: "form.tujuan"
    }],
    staticClass: "form-control",
    staticStyle: {
      height: "100px"
    },
    attrs: {
      placeholder: "masukkan tujuan",
      id: "tujuan"
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
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "tujuan"
    }
  }, [_vm._v("Tujuan")])])]), _vm._v(" "), _c("div", {
    staticClass: "row mt-3"
  }, [_c("div", {
    staticClass: "col-sm-6"
  }, [_c("router-link", {
    staticClass: "btn btn-danger mb-5",
    attrs: {
      to: "/user-surat-pengantar"
    }
  }, [_vm._v("Kembali")])], 1), _vm._v(" "), _vm._m(0)])]) : _vm._e()]), _vm._v(" "), _c("div", {
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
  }, [_vm._v("\n                      Kirim\n                    ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/user/PengajuanSKTM.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/user/PengajuanSKTM.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PengajuanSKTM_vue_vue_type_template_id_35153f3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PengajuanSKTM.vue?vue&type=template&id=35153f3a& */ "./resources/js/components/user/PengajuanSKTM.vue?vue&type=template&id=35153f3a&");
/* harmony import */ var _PengajuanSKTM_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PengajuanSKTM.vue?vue&type=script&lang=js& */ "./resources/js/components/user/PengajuanSKTM.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PengajuanSKTM_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PengajuanSKTM_vue_vue_type_template_id_35153f3a___WEBPACK_IMPORTED_MODULE_0__.render,
  _PengajuanSKTM_vue_vue_type_template_id_35153f3a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/PengajuanSKTM.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/PengajuanSKTM.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/user/PengajuanSKTM.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PengajuanSKTM_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PengajuanSKTM.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/PengajuanSKTM.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PengajuanSKTM_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/PengajuanSKTM.vue?vue&type=template&id=35153f3a&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/user/PengajuanSKTM.vue?vue&type=template&id=35153f3a& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PengajuanSKTM_vue_vue_type_template_id_35153f3a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PengajuanSKTM_vue_vue_type_template_id_35153f3a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PengajuanSKTM_vue_vue_type_template_id_35153f3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PengajuanSKTM.vue?vue&type=template&id=35153f3a& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/PengajuanSKTM.vue?vue&type=template&id=35153f3a&");


/***/ })

}]);