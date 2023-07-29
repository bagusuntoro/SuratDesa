<template>
    <div class="container">
        <!-- Outer Row -->
        <div class="row justify-content-center">
            <div class="col-xl-10 col-lg-12 col-md-9">
                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        <!-- Nested Row within Card Body -->
                        <div class="row">
                            <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Selamat Datang!</h1>
                                    </div>
                                    <form class="user" @submit.prevent="login">
                                        <div class="form-group">
                                            <input type="email" class="form-control form-control-user"
                                                id="exampleInputEmail" aria-describedby="emailHelp"
                                                placeholder="Masukkan Email" v-model="email">
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control form-control-user"
                                                id="exampleInputPassword" placeholder="Masukkan Password" v-model="password">
                                        </div>
                                        <div class="form-group">
                                            <div class="custom-control custom-checkbox small">
                                                <input type="checkbox" class="custom-control-input" id="customCheck">
                                                <label class="custom-control-label" for="customCheck">Ingat Saya</label>
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-primary btn-user btn-block">Masuk</button>
                                    </form>
                                    <hr>
                                    <div class="text-center">
                                        <router-link class="small" to="/lupa-password">Lupa Password?</router-link>
                                    </div>
                                    <div class="text-center">
                                        <router-link class="small" to="/register">Buat Akun!</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        login() {
            const formData = new FormData();
            formData.append('email', this.email);
            formData.append('password', this.password);

            axios.post('http://localhost:8000/api/auth/login', formData)
                .then(response => {
                    const token = response.data.access_token;
                    const expires = response.data.expires_in;
                    localStorage.setItem('token', token);
                    localStorage.setItem('expires_in', expires);
                    if (response.data.role==='admin') {
                        this.$router.push('/admin-dashboard');
                    }else if (response.data.role === 'user'){
                        this.$router.push('/user-dashboard');
                    }else{
                        this.$router.push('/unauthorized');
                    }
                })
                .catch(error => {
                    console.error(error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Login gagal. Periksa kembali email dan password Anda.'
                    });
                });
        }
    },
    mounted() {
        const body = document.querySelector('body');
        body.style.backgroundImage = 'url(/img/wilayah.png)';
        body.style.backgroundRepeat = 'no-repeat';
        body.style.backgroundSize = 'cover';
    }
};
</script>

<style scoped>
/* Your styles here */
</style>
