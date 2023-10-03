import '@/bootstrap';
import '../sass/app.scss'
import '../css/app.css';
import {createApp, h} from 'vue'
import {createPinia} from 'pinia'

import routes from '@/routes';
import axios from '@/services/axios'
import auth from "@/services/auth";
import VueAxios from "vue-axios";
import PermissionsMixin from './mixins/Permissions'
import RolesMixin from './mixins/Roles'

/*PLUGINS*/
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
import {VueMasonryPlugin} from "vue-masonry/src/masonry.plugin";
import App from '@/App.vue'
import breadcrumbs from 'vue-3-breadcrumbs'

import.meta.glob([
    '../images/**',
    // '../fonts/**',
]);

const options = {
    customClass: {
        confirmButton: 'btn btn-sm btn-primary m-1',
        cancelButton: 'btn btn-sm btn-secondary m-1',
    },
    buttonsStyling: false,

};

vSelect.props.components.default = () => ({
    Deselect: {
        render: () => h('span', '❌'),
    },
    OpenIndicator: {
        render: () => h('span', '🔽'),
    },
});

const pinia = createPinia()
const app = createApp(App)
    .use(pinia)
    .use(VueSweetalert2, options)
    .use(routes)
    .use(auth)
    .use(VueMasonryPlugin)
    .use(VueAxios, axios)
    .use(breadcrumbs, {
        includeComponent: true // {boolean} [includeComponent=false] - Include global breadcrumbs component or not
    })
app.mixin(RolesMixin);
app.mixin(PermissionsMixin);
app.component('v-select', vSelect);

app.mount('#app');
