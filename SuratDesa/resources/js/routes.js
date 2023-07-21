import Warga from './components/admin/Warga.vue'

export const routes = [
    {
        path: "/pdf",
        name: 'pdf',
        component: () => import('./components/admin/PDF.vue')
    },
    {
        path: "/",
        name: 'login',
        component: () => import('./components/Login.vue')
    },
    {
        path: "/register",
        name: 'register',
        component: () => import('./components/Register.vue')
    },
    {
        path: "/lupa-password",
        name: 'lupa-password',
        component: () => import('./components/LupaPassword.vue')
    },
    {
        path: "/admin-warga",
        name: 'admin-warga',
        component: Warga
    },
    {
        path: '/admin-surat',
        name: 'admin-surat',
        component: () => import('./components/admin/ListSurat.vue')
    },
    {
        path: '/admin-skck',
        name: 'admin-skck',
        component: () => import('./components/admin/Template.vue')
    },


    // user
    {
        path: '/pengajuan-surat',
        name: 'pengajuan-surat',
        component: () => import('./components/user/PengajuanSurat.vue')
    },
    {
        path: '/user-surat',
        name: 'user-surat',
        component: () => import('./components/user/ListSurat.vue')
    },


    {
        path: '/template',
        name: 'template',
        component: () => import('./components/admin/Template.vue')
    }
]