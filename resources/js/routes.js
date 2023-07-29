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
        path: "/sktm",
        name: 'sktm',
        component: () => import('./components/admin/SKTM.vue')
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
        path: '/admin-surat-pengantar',
        name: 'admin-surat-pengantar',
        component: () => import('./components/admin/ListSuratPengantar.vue')
    },
    {
        path: '/admin-surat-sktm',
        name: 'admin-surat-sktm',
        component: () => import('./components/admin/ListSuratSKTM.vue')
    },
    // {
    //     path: '/admin-sktm',
    //     name: 'admin-sktm',
    //     component: () => import('./components/admin/ListSurat.vue')
    // },
    


    // user
    {
        path: '/user-dashboard',
        name: 'user-dashboard',
        component: () => import('./components/user/Dashboard.vue')
    },
    {
        path: '/user-surat-pengantar',
        name: 'user-surat-pengantar',
        component: () => import('./components/user/ListSuratPengantar.vue')
    },
    {
        path: '/user-surat-sktm',
        name: 'user-surat-sktm',
        component: () => import('./components/user/ListSuratSKTM.vue')
    },
    {
        path: '/user-skck',
        name: 'user-skck',
        component: () => import('./components/user/PengajuanSKCK.vue')
    },
    {
        path: '/user-pengantar',
        name: 'user-pengantar',
        component: () => import('./components/user/PengajuanPengantar.vue')
    },
    {
        path: '/user-sktm',
        name: 'user-sktm',
        component: () => import('./components/user/PengajuanSKTM.vue')
    },
]