import Vue from "vue";
import CBCInputVue from "./CBCInputVue.vue";
import 'cbcinputvue/dist/cbcinputvue.css';
import Multiselect from 'vue-multiselect';
import 'vue-multiselect/dist/vue-multiselect.min.css';
import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/dist/vue-tel-input.css';
Vue.use(VueTelInput);
import TelAllCountries from '@/assets/js/all-countries';
import { VueMaskDirective } from 'v-mask';
Vue.directive('mask', VueMaskDirective);

const components = {
    CBCInputVue,
    Multiselect
}
Object.keys(components).forEach(name => {
    Vue.component(name, components[name]);
});
export default components;