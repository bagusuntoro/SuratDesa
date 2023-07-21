import Vue from 'vue';
import VueRouter from 'vue-router';
import {routes} from './routes';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import Swal from 'sweetalert2';


Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes
});

Vue.use(VueSweetalert2);

require('./bootstrap');

window.Vue = require('vue').default;


Vue.component('company-profile-component', require('./components/companyProfile/CompanyProfilePage.vue').default);
Vue.component('navbar-component', require('./components/companyProfile/components/NavbarComponent.vue').default);
Vue.component('jumbotron-component', require('./components/companyProfile/components/JumbotrolComponent.vue').default);
Vue.component('our-service-component', require('./components/companyProfile/components/OurServiceComponent.vue').default);
Vue.component('our-portfolio-component', require('./components/companyProfile/components/OurPortfolioComponent.vue').default);
Vue.component('core-feature-component', require('./components/companyProfile/components/CoreFeatureComponent.vue').default);
Vue.component('testimoni-component', require('./components/companyProfile/components/TestimoniComponent.vue').default);
Vue.component('client-component', require('./components/companyProfile/components/ClientsComponent.vue').default);
Vue.component('tech-component', require('./components/companyProfile/components/TechnologiComponent.vue').default);
Vue.component('project-component', require('./components/companyProfile/components/ProjectComponent.vue').default);
Vue.component('footer-component', require('./components/companyProfile/components/FooterComponent.vue').default);
Vue.component('chat-component', require('./components/companyProfile/components/ChatComponent.vue').default);



Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('navbar', require('./components/NavbarComponent.vue').default);
Vue.component('sidebar', require('./components/Sidebar.vue').default);
Vue.component('footer', require('./components/FooterComponent.vue').default);





const app = new Vue({
    el: '#app',
    router
});
