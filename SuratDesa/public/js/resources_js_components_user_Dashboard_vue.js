"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_user_Dashboard_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/Dashboard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/Dashboard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {};
  },
  methods: {},
  created: function created() {
    var _this = this;
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("http://localhost:8000/api/auth/me/", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    }).then(function (response) {
      var role = response.data.role; // Get the user's role from the response

      var token = localStorage.getItem("token");
      var expires_in = localStorage.getItem("expires_in");
      if (!token || !expires_in || new Date() > new Date(expires_in)) {
        // If token is missing or expired, redirect to the home page
        localStorage.removeItem("token");
        localStorage.removeItem("expires_in");
        _this.$router.push("/");
      } else if (role !== "user") {
        // If the user doesn't have admin privileges, redirect to the unauthorized page
        _this.$router.push("/unauthorized");
        // console.log(response.data.role)
      } else {
        console.log("success");
      }
    })["catch"](function (error) {
      console.error(error);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/Dashboard.vue?vue&type=template&id=4bc4503b&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/Dashboard.vue?vue&type=template&id=4bc4503b& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_c("navbar"), _vm._v(" "), _vm._m(0)], 1), _vm._v(" "), _c("footer")])], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "container-fluid"
  }, [_c("div", {
    staticClass: "d-sm-flex align-items-center justify-content-between mb-4"
  }, [_c("h1", {
    staticClass: "h3 mb-0 text-gray-800"
  }, [_vm._v("Dashboard")]), _vm._v(" "), _c("a", {
    staticClass: "d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm",
    attrs: {
      href: "#"
    }
  }, [_c("i", {
    staticClass: "fas fa-download fa-sm text-white-50"
  }), _vm._v(" Generate\n            Report")])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-xl-3 col-md-6 mb-4"
  }, [_c("div", {
    staticClass: "card border-left-primary shadow h-100 py-2"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row no-gutters align-items-center"
  }, [_c("div", {
    staticClass: "col mr-2"
  }, [_c("div", {
    staticClass: "text-xs font-weight-bold text-primary text-uppercase mb-1"
  }, [_vm._v("\n                      Barang (Bulan ini)\n                    ")]), _vm._v(" "), _c("div", {
    staticClass: "h5 mb-0 font-weight-bold text-gray-800"
  }, [_vm._v("\n                      40,000\n                    ")])]), _vm._v(" "), _c("div", {
    staticClass: "col-auto"
  }, [_c("i", {
    staticClass: "fas fa-calendar fa-2x text-gray-300"
  })])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-3 col-md-6 mb-4"
  }, [_c("div", {
    staticClass: "card border-left-success shadow h-100 py-2"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row no-gutters align-items-center"
  }, [_c("div", {
    staticClass: "col mr-2"
  }, [_c("div", {
    staticClass: "text-xs font-weight-bold text-success text-uppercase mb-1"
  }, [_vm._v("\n                      Note (Bulan ini)\n                    ")]), _vm._v(" "), _c("div", {
    staticClass: "h5 mb-0 font-weight-bold text-gray-800"
  }, [_vm._v("\n                      215,000\n                    ")])]), _vm._v(" "), _c("div", {
    staticClass: "col-auto"
  }, [_c("i", {
    staticClass: "fas fa-dollar-sign fa-2x text-gray-300"
  })])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-3 col-md-6 mb-4"
  }, [_c("div", {
    staticClass: "card border-left-info shadow h-100 py-2"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row no-gutters align-items-center"
  }, [_c("div", {
    staticClass: "col mr-2"
  }, [_c("div", {
    staticClass: "text-xs font-weight-bold text-info text-uppercase mb-1"
  }, [_vm._v("\n                      Belum Ditandatangani\n                    ")]), _vm._v(" "), _c("div", {
    staticClass: "row no-gutters align-items-center"
  }, [_c("div", {
    staticClass: "col-auto"
  }, [_c("div", {
    staticClass: "h5 mb-0 mr-3 font-weight-bold text-gray-800"
  }, [_vm._v("\n                          50\n                        ")])]), _vm._v(" "), _c("div", {
    staticClass: "col"
  }, [_c("div", {
    staticClass: "progress progress-sm mr-2"
  }, [_c("div", {
    staticClass: "progress-bar bg-info",
    staticStyle: {
      width: "50%"
    },
    attrs: {
      role: "progressbar",
      "aria-valuenow": "50",
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }
  })])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-auto"
  }, [_c("i", {
    staticClass: "fas fa-clipboard-list fa-2x text-gray-300"
  })])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-3 col-md-6 mb-4"
  }, [_c("div", {
    staticClass: "card border-left-warning shadow h-100 py-2"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("div", {
    staticClass: "row no-gutters align-items-center"
  }, [_c("div", {
    staticClass: "col mr-2"
  }, [_c("div", {
    staticClass: "text-xs font-weight-bold text-warning text-uppercase mb-1"
  }, [_vm._v("\n                      Petugas\n                    ")]), _vm._v(" "), _c("div", {
    staticClass: "h5 mb-0 font-weight-bold text-gray-800"
  }, [_vm._v("\n                      18\n                    ")])]), _vm._v(" "), _c("div", {
    staticClass: "col-auto"
  }, [_c("i", {
    staticClass: "fas fa-comments fa-2x text-gray-300"
  })])])])])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/user/Dashboard.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/user/Dashboard.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dashboard_vue_vue_type_template_id_4bc4503b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=4bc4503b& */ "./resources/js/components/user/Dashboard.vue?vue&type=template&id=4bc4503b&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/components/user/Dashboard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_4bc4503b___WEBPACK_IMPORTED_MODULE_0__.render,
  _Dashboard_vue_vue_type_template_id_4bc4503b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/Dashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/Dashboard.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/user/Dashboard.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/Dashboard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/Dashboard.vue?vue&type=template&id=4bc4503b&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/user/Dashboard.vue?vue&type=template&id=4bc4503b& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_4bc4503b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_4bc4503b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_4bc4503b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=template&id=4bc4503b& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/user/Dashboard.vue?vue&type=template&id=4bc4503b&");


/***/ })

}]);