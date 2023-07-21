<template>
  <div class="container">
    <div class="card o-hidden border-0 shadow-lg my-5">
      <div class="card-body p-0">
        <!-- Nested Row within Card Body -->
        <div class="row">
          <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
          <div class="col-lg-7">
            <div class="p-5">
              <div class="text-center">
                <h1 class="h4 text-gray-900 mb-4">Buat Akun!</h1>
              </div>
              <form class="user" @submit.prevent="registerUser">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control form-control-user"
                    id="name"
                    aria-describedby="name"
                    placeholder="Masukkan Nama"
                    v-model="name"
                  />
                  <input
                    type="email"
                    class="form-control form-control-user"
                    id="email"
                    aria-describedby="email"
                    placeholder="Masukkan Email"
                    v-model="email"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control form-control-user"
                    id="exampleInputPassword"
                    placeholder="Masukkan Password"
                    v-model="password"
                  />
                </div>
                <button
                  type="submit"
                  class="btn btn-primary btn-user btn-block"
                >
                  Daftar
                </button>
              </form>
              <hr />
              <div class="text-center">
                <router-link class="small" to="/lupa-password"
                  >Lupa Password?</router-link
                >
              </div>
              <div class="text-center">
                <router-link class="small" to="/"
                  >Sudah punya akun? Login!</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  mounted() {
    const body = document.querySelector("body");
    body.style.backgroundImage = "url(/img/wilayah.png)";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundSize = "cover";
  },
  data() {
    return {
      name: "",
      email: "",
      password: ""
    };
  },
  methods: {
    registerUser() {
      const formData = new FormData();
      formData.append("name", this.name);
      formData.append("email", this.email);
      formData.append("password", this.password);

      // Kirim permintaan POST menggunakan Axios
      axios
        .post("http://localhost:8000/api/auth/register", formData)
        .then((response) => {
          console.log(response.data);
          // Menampilkan SweetAlert sukses
          Swal.fire({
            icon: "success",
            title: "Pendaftaran berhasil!",
            text: "Anda telah berhasil mendaftar.",
            confirmButtonText: "OK",
          }).then(() => {
            // Arahkan pengguna ke rute '/'
            this.$router.push("/");
          });
        })
        .catch((error) => {
          console.error(error);
          if (
            error.response &&
            error.response.data &&
            error.response.data.errors
          ) {
            const errors = error.response.data.errors;
            let errorMessages = "";
            Object.keys(errors).forEach((key) => {
              errorMessages += `${errors[key]}\n`;
            });

            // Menampilkan SweetAlert error dengan pesan kesalahan
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: errorMessages,
            });
          } else {
            // Menampilkan SweetAlert error umum
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Terjadi kesalahan saat mendaftar.",
            });
          }
        });
    },
  },
};
</script>
