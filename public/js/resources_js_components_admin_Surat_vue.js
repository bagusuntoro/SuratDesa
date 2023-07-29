"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_admin_Surat_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Surat.vue?vue&type=template&id=8633ddb0&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Surat.vue?vue&type=template&id=8633ddb0& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "text-center h3"
  }, [_vm._v("Note Page")]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-1"
  }), _vm._v(" "), _c("div", {
    staticClass: "col-sm-10"
  }, [_c("div", {
    staticClass: "row mt-5"
  }, [_c("div", {
    staticClass: "col-sm-3"
  }, [_c("router-link", {
    staticClass: "btn btn-primary me-2",
    attrs: {
      to: "user-input-note"
    }
  }, [_c("i", {
    staticClass: "bi bi-plus"
  })])], 1), _vm._v(" "), _c("div", {
    staticClass: "col-sm-9"
  })]), _vm._v(" "), _c("table", {
    staticClass: "table table-striped mt-2"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", _vm._l(_vm.note, function (item, index) {
    return _c("tr", {
      key: item.id
    }, [_c("th", {
      attrs: {
        scope: "row"
      }
    }, [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.location))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.date))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(item.destination))]), _vm._v(" "), _c("td", [_c("button", {
      staticClass: "btn btn-warning",
      staticStyle: {
        "float": "right"
      },
      attrs: {
        type: "button"
      },
      on: {
        click: function click($event) {
          return _vm.detail(item.id);
        }
      }
    }, [_c("i", {
      staticClass: "bi bi-ticket-detailed"
    })])])]);
  }), 0)])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-1"
  })])], 1), _vm._v(" "), _c("footer")])], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", [_c("tr", [_c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v("No")]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Location")]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Date")]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Destination")]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Action")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/admin/Surat.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/admin/Surat.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Surat_vue_vue_type_template_id_8633ddb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Surat.vue?vue&type=template&id=8633ddb0& */ "./resources/js/components/admin/Surat.vue?vue&type=template&id=8633ddb0&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Surat_vue_vue_type_template_id_8633ddb0___WEBPACK_IMPORTED_MODULE_0__.render,
  _Surat_vue_vue_type_template_id_8633ddb0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/Surat.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/Surat.vue?vue&type=template&id=8633ddb0&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/admin/Surat.vue?vue&type=template&id=8633ddb0& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Surat_vue_vue_type_template_id_8633ddb0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Surat_vue_vue_type_template_id_8633ddb0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Surat_vue_vue_type_template_id_8633ddb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Surat.vue?vue&type=template&id=8633ddb0& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Surat.vue?vue&type=template&id=8633ddb0&");


/***/ })

}]);