<template>
    <div id="wrapper">
    <sidebar />

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <!-- Main Content -->
      <div id="content">
        <navbar />

        <!-- Begin Page Content -->
        <h1 class="text-center customMargin h3">Edit User</h1>
        <form @submit.prevent="handleSubmit" enctype="multipart/form-data">
            <div class="row">
                <div class="col-sm-1"></div>
                <div class="col-sm-10">
                    <div class="mb-3">
                      <label for="nama" class="form-label">Nama</label>
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        placeholder="masukkan nama"
                        v-model="user.name"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="email" class="form-label">Email</label>
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="masukkan email"
                        v-model="user.email"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="password" class="form-label">Password</label>
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                        placeholder="masukkan password"
                        v-model="user.password"
                      />
                    </div>

                    <div class="row mt-3">
                  <div class="col-sm-6">
                    <router-link
                      to="/admin-list-user"
                      class="btn btn-danger mb-5"
                      >Kembali</router-link
                    >
                  </div>
                  <div class="col-sm-6">
                    <button type="submit" class="btn btn-primary" style="float:right;">
                      Kirim
                    </button>
                  </div>
                </div>
                </div>
                <div class="col-sm-1"></div>
            </div>
        </form>
        <!-- /.container-fluid -->
      </div>
      <!-- End of Main Content -->

      <!-- Footer -->
      <footer />
      <!-- End of Footer -->
    </div>
    <!-- End of Content Wrapper -->
  </div>
  <!-- End of Page Wrapper -->
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user:[],
      itemID: null,
    };
  },
  methods: {
    async fetchData()
    {
      try {
        const response = await axios.get(`https://surat-desa.surabayawebtech.com/api/auth/detail-user/${this.itemID}`,{
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        });
        this.user = response.data.data;
      } catch (error) {
        console.error(error);
      }
    },
    handleSubmit() {
      let formData = new FormData();
      formData.append("name", this.user.name);
      formData.append("email", this.user.email);
      if (this.user.password) {
        formData.append("password", this.user.password);
      }

      axios
        .put(`https://surat-desa.surabayawebtech.com/api/auth/update-user/${this.itemID}`, formData, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((response) => {
          // Redirect to the user list page or show a success message here
          this.$router.push("/admin-list-user");
        })
        .catch((error) => {
          this.errorMessage = "Failed to update user data.";
          console.error(error);
        });
    },
  },
  created() {
    axios
      .get(`https://surat-desa.surabayawebtech.com/api/auth/me`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        const role = response.data.role; // Get the user's role from the response
        const token = localStorage.getItem("token");
        const expires_in = localStorage.getItem("expires_in");
        if (!token || !expires_in || new Date() > new Date(expires_in)) {
          // If token is missing or expired, redirect to the home page
          localStorage.removeItem("token");
          localStorage.removeItem("expires_in");
          this.$router.push("/");
        } else if (role !== "admin") {
          // If the user doesn't have admin privileges, redirect to the unauthorized page
          this.$router.push("/unauthorized");
          // console.log(response.data.role)
        } else {
          this.itemID = this.$route.params.id;
          this.fetchData()
          console.log("success");
        }
      })
      .catch((error) => {
        console.error(error);
        this.$router.push("/");
      });
  },
};
</script>