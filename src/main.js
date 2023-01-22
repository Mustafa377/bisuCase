import 'core-js/stable';
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

Vue.config.performance = true;
Vue.prototype.$log = console.log.bind(console);

// ##### Currency Formatter ##### - https://www.npmjs.com/package/currency-formatter
const moneyFormat = require('currency-formatter');
Vue.prototype.moneyFormat = moneyFormat;

// ##### VueProgressBar ##### - https://github.com/hilongjw/vue-progressbar
import VueProgressBar from 'vue-progressbar';
Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '2px'
});

// ##### CoreUI VUE #####
import CoreuiVue from '@coreui/vue';
import { iconsSet as icons } from './assets/icons/icons.js';
Vue.use(CoreuiVue);

// ##### BootstrapVue #####
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

// ##### AG GRID #####
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import "ag-grid-enterprise";

// ##### VueCtkDateTimePicker #####
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';
Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker);

// ##### VueClipboard ##### - https://www.npmjs.com/package/vue-clipboard2
import VueClipboard from 'vue-clipboard2';
VueClipboard.config.autoSetContainer = true;
Vue.use(VueClipboard);

// ##### CompositionApi #####
import CompositionApi from '@vue/composition-api';
Vue.use(CompositionApi);

// ##### VUE MultiSelect ##### - https://vue-multiselect.js.org/
/* import Multiselect from 'vue-multiselect'
Vue.component('multiselect', Multiselect); */

// ##### CBC Input #####
import CBCInputVue from "@/components/CBCInputVue.vue";
Vue.component('cbcinput-vue', CBCInputVue);

// ##### CBC Search Side bar #####
import CBCSearchSideBar from "@/components/CBCSearchSideBar.vue";
Vue.component('cbc-searchsidebar', CBCSearchSideBar);

// ##### CBC Input #####
/* import CBCInputVue from "cbcinputvue";
import 'cbcinputvue/dist/cbcinputvue.css';
Vue.component('cbcinput-vue', CBCInputVue); */

// ##### VueTelInput ##### - https://www.npmjs.com/package/vue-tel-input (Telefon Numarası Input)
/* import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/dist/vue-tel-input.css';
Vue.use(VueTelInput); */

new Vue({
  el: '#app',
  router,
  store,
  icons,
  template: '<App/>',
  components: {
    App
  }
});