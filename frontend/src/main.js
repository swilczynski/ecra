import { createApp } from 'vue';

import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import ConfirmationService from 'primevue/confirmationservice';
import App from './App.vue';

import router from './router';
import store from './store';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

createApp(App)
    .use(router)
    .use(store)
    .use(PrimeVue)
    .use(ToastService)
    .use(ConfirmationService)
    .mount('#app');
