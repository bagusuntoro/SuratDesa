"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[714],{7714:(t,a,e)=>{e.r(a),e.d(a,{default:()=>i});var s=e(9669),r=e.n(s);const o={data:function(){return{form:{name:"",email:"",password:""}}},methods:{handleSubmit:function(){var t=this,a=new FormData;a.append("name",this.form.name),a.append("email",this.form.email),a.append("password",this.form.password),r().post("http://surat-desa.surabayawebtech.com/api/auth/register/",a,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(a){t.showAlert()})).catch((function(t){console.error(t)}))},showAlert:function(){var t=this;this.$swal("Data Berhasil di inputkan!!").then((function(){t.$router.push("/admin-list-user")}))}},created:function(){var t=this;r().get("http://surat-desa.surabayawebtech.com/api/auth/me/",{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(a){t.user_id=a.data.id;var e=a.data.role,s=localStorage.getItem("token"),r=localStorage.getItem("expires_in");!s||!r||new Date>new Date(r)?(localStorage.removeItem("token"),localStorage.removeItem("expires_in"),t.$router.push("/")):"admin"!==e?t.$router.push("/unauthorized"):console.log("success")})).catch((function(a){console.error(a),t.$router.push("/")}))}};const i=(0,e(1900).Z)(o,(function(){var t=this,a=t._self._c;return a("div",{attrs:{id:"wrapper"}},[a("sidebar-admin"),t._v(" "),a("div",{staticClass:"d-flex flex-column",attrs:{id:"content-wrapper"}},[a("div",{attrs:{id:"content"}},[a("navbar"),t._v(" "),a("h1",{staticClass:"text-center customMargin h3"},[t._v("Tambah User")]),t._v(" "),a("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(a){return a.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-1"}),t._v(" "),a("div",{staticClass:"col-sm-10"},[a("div",{staticClass:"mb-3"},[a("label",{staticClass:"form-label",attrs:{for:"nama"}},[t._v("Nama")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",attrs:{type:"text",id:"nama",placeholder:"masukkan nama"},domProps:{value:t.form.name},on:{input:function(a){a.target.composing||t.$set(t.form,"name",a.target.value)}}})]),t._v(" "),a("div",{staticClass:"mb-3"},[a("label",{staticClass:"form-label",attrs:{for:"email"}},[t._v("Email")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",attrs:{type:"email",id:"email",placeholder:"masukkan email"},domProps:{value:t.form.email},on:{input:function(a){a.target.composing||t.$set(t.form,"email",a.target.value)}}})]),t._v(" "),a("div",{staticClass:"mb-3"},[a("label",{staticClass:"form-label",attrs:{for:"password"}},[t._v("Password")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"masukkan password"},domProps:{value:t.form.password},on:{input:function(a){a.target.composing||t.$set(t.form,"password",a.target.value)}}})]),t._v(" "),a("div",{staticClass:"row mt-3"},[a("div",{staticClass:"col-6"},[a("router-link",{staticClass:"btn btn-danger mb-5",attrs:{to:"/admin-list-user"}},[t._v("Kembali")])],1),t._v(" "),t._m(0)])]),t._v(" "),a("div",{staticClass:"col-sm-1"})])])],1),t._v(" "),a("footer")])],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"col-6"},[t("button",{staticClass:"btn btn-primary",staticStyle:{float:"right"},attrs:{type:"submit"}},[this._v("\n                  Kirim\n                ")])])}],!1,null,null,null).exports}}]);