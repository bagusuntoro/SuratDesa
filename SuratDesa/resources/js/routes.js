export const routes = [
    {
        path: "/unauthorized",
        name: 'unauthorized',
        component: () => import('./components/Unauthorized.vue')
    },
    {
        path: "/skck",
        name: 'skck',
        component: () => import('./components/admin/SKCK.vue')
    },
    {
        path: "/pengantar",
        name: 'pengantar',
        component: () => import('./components/admin/Pengantar.vue')
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

    // admin
    {
        path: '/admin-dashboard',
        name: 'admin-dashboard',
        component: () => import('./components/admin/Dashboard.vue')
    },
    {
        path: '/admin-surat',
        name: 'admin-surat',
        component: () => import('./components/admin/ListSurat.vue')
    },


    // user
    {
        path: '/user-dashboard',
        name: 'user-dashboard',
        component: () => import('./components/user/Dashboard.vue')
    },
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
]