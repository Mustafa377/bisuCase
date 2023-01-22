<template>
    <div :class="['CBCInputVue noselect', {'anim-shake' : shake}]" :style="{'margin-top' : option.marginTop + '!important', 'margin-right' : option.marginRight + '!important', 'margin-bottom' : option.marginButtom + '!important', 'margin-left' : option.marginLeft + '!important', 'width' : option.width + '!important'}">
        <b-form-group class="m-0">
            <!-- LABEL -->
            <div v-if="option.label !== ''" class="d-flex justify-content-between">
                <div>
                    <p :class="['m-0 mb-2', {'font-weight-bold' : option.labelBold}]" :for="option.name" v-html="option.label"/>
                    <i id="tooltip-input-label-icon" class="far fa-question-circle ml-1 tooltip-hover" style="font-size: 15px" v-if="option.vtooltip.status === true"/>
                    <b-tooltip target="tooltip-input-label-icon" :triggers="option.vtooltip.trigger" :placement="option.vtooltip.placement" v-if="option.vtooltip.status === true" >
                        <div v-html="option.vtooltip.content"/>
                    </b-tooltip>
                </div>
                <div v-if="option.textCounter">
                    <p class="m-0 mb-2 font-weight-bold" v-html="value.value.length + '/∞'" v-if="option.validLengthMax.status === false && option.maxlength === 0" />
                    <p class="m-0 mb-2 font-weight-bold" v-html="value.value.length" v-else-if="option.validLengthMax.status === false" />
                    <p class="m-0 mb-2 font-weight-bold" :style="value.value.length > option.validLengthMax.number ? 'color: red':''" v-html="value.value.length + '/' + option.validLengthMax.number" v-else />
                </div>
            </div>

            <!-- INPUT -->
            <div style="display: flex;">
                <b-input-group>
                    <template v-if="type === 'textarea'">
                        <div class="position-relative" style="width: 100%">
                            <b-icon v-if="option.inputIcon.status === true && option.inputIcon.icon.library === 'bootstrap'" :icon="option.inputIcon.icon.src" :class="['input-icon-' + option.inputIcon.placement]" />
                            <i v-if="option.inputIcon.status === true && option.inputIcon.icon.library === 'fontawesome'" :style="errorState === false ? 'color: red;':''" :class="[option.inputIcon.icon.src[0], 'fa-' + option.inputIcon.icon.src[1], 'input-icon-' + option.inputIcon.placement]" />
                            <v-icon v-if="option.inputIcon.status === true && option.inputIcon.icon.library === 'vuetify-material-design'" :class="['input-icon-' + option.inputIcon.placement + '-mdi']">{{option.inputIcon.icon.src}}</v-icon>
                            <svg v-if="option.inputIcon.status === true && option.inputIcon.icon.library === 'svg'" width="33" height="21" :class="['input-icon-' + option.inputIcon.placement + '-svg']" :viewBox="option.inputIcon.icon.viewBox" version="1.1" xmlns="http://www.w3.org/2000/svg"><path :d="option.inputIcon.icon.src"/></svg>
                            <b-form-textarea
                                :id="id"
                                :name="name"
                                :ref="name"
                                :placeholder="option.placeholder"
                                :state="errorState"
                                :class="[option.inputIcon.status ? 'input-icon-' + option.inputIcon.placement + '-padding ':'']"
                                :style="(option.width !== '' ? 'width: ' + option.width + '!important;':'') + (option.height !== '' ? 'height: ' + option.height + '!important;':'')"
                                :disabled="disabled"
                                :no-resize="option.noResize"
                                v-model="value.value"
                                v-bind="[type === 'number' && {'min':option.min, 'max':option.max}, option.maxlength > 0 && {'maxlength':option.maxlength}]"
                                v-on:keypress="onKeyPress"
                                v-on:keydown="onKeyDown"
                                v-on:keyup="onKeyUp"
                                v-on:blur.native="onBlur"
                                @input="validControl"
                            />
                        </div>
                    </template>
                    <div style="width: 100%; height: 100%;" v-else-if="type === 'select'">
                        <multiselect 
                            v-model="value.value"
                            :placeholder="option.selectSettings.placeholder"
                            :label="option.selectSettings.label"
                            :track-by="option.selectSettings.trackby"
                            :searchable="option.selectSettings.searchable"
                            :close-on-select="option.selectSettings.multiple === true ? false : option.selectSettings.closeOnSelect"
                            :clear-on-select="option.selectSettings.multiple === true ? false : option.selectSettings.clearOnSelect"
                            :show-labels="option.selectSettings.showLabels"
                            :select-label="option.selectSettings.selectLabel"
                            :selected-label="option.selectSettings.selectedLabel"
                            :deselectLabel="option.selectSettings.deselectLabel"
                            :multiple="option.selectSettings.multiple"
                            :max="option.selectSettings.max"
                            :hide-selected="option.selectSettings.hideSelected"
                            :allow-empty="option.selectSettings.allowEmpty"
                            :options="option.selectOptions"
                            :disabled="disabled"
                            @input="validControl"
                        />
                    </div>
                    <template v-else-if="type === 'tel'">
                        <vue-tel-input 
                            v-model="value.value"
                            class="w-100"
                            :id="id"
                            :name="name"
                            :type="type"
                            :ref="name"
                            :allCountries="option.phoneOptions.allCountries"
                            :autoFormat="option.phoneOptions.autoFormat"
                            :customValidate="option.phoneOptions.customValidate"
                            :defaultCountry="option.phoneOptions.defaultCountry"
                            :disabled="disabled"
                            :autoDefaultCountry="option.phoneOptions.autoDefaultCountry"
                            :ignoredCountries="option.phoneOptions.ignoredCountries"
                            :mode="option.phoneOptions.mode"
                            :onlyCountries="option.phoneOptions.onlyCountries"
                            :preferredCountries="option.phoneOptions.preferredCountries"
                            :styleClasses="option.phoneOptions.styleClasses"
                            :validCharactersOnly="option.phoneOptions.validCharactersOnly"
                            :inputOptions="option.phoneOptions.inputOptions"
                            :dropdownOptions="option.phoneOptions.dropdownOptions"
                        />
                    </template>
                    <template v-else>
                        <!-- <b-input-group-append v-if="option.inputWithLeftButtons">
                            <b-button
                                class="input-left-btn"
                                :style="data.bgcolor && 'background-color: ' + data.bgcolor + '!important;'"
                                v-bind="[data.bgcolor && data.bgcolorHover && {'onmouseover':'this.style.setProperty(\'background-color\', \'' + data.bgcolorHover + '\', \'important\');'}, data.bgcolor && data.bgcolorHover && {'onmouseout':'this.style.setProperty(\'background-color\', \'' + data.bgcolor + '\', \'important\');'}]"
                                :disable="data.disable"
                                @click="inputWithLeftButtons.click"
                                v-html="inputWithLeftButtons.text"
                            />
                        </b-input-group-append> -->
                        <div :class="[{'input-with-right-buttons':option.inputWithRightButtons && option.inputWithRightButtons.length > 0}, 'position-relative']" style="width: 100%">
                            <b-icon v-if="option.inputIcon.status === true && option.inputIcon.icon.library === 'bootstrap'" :icon="option.inputIcon.icon.src" :class="['input-icon-' + option.inputIcon.placement]" />
                            <i v-if="option.inputIcon.status === true && option.inputIcon.icon.library === 'fontawesome'" :style="errorState === false ? 'color: red;':option.inputIcon.icon.color !== '' ? `color: ${option.inputIcon.icon.color};`:''" :class="[option.inputIcon.icon.src[0], 'fa-' + option.inputIcon.icon.src[1], 'fa-' + option.inputIcon.icon.size, 'input-icon-' + option.inputIcon.placement]" />
                            <v-icon v-if="option.inputIcon.status === true && option.inputIcon.icon.library === 'vuetify-material-design'" :class="['input-icon-' + option.inputIcon.placement + '-mdi']">{{option.inputIcon.icon.src}}</v-icon>
                            <svg v-if="option.inputIcon.status === true && option.inputIcon.icon.library === 'svg'" width="28" height="18" :class="['input-icon-' + option.inputIcon.placement + '-svg']" :viewBox="option.inputIcon.icon.viewBox" version="1.1" xmlns="http://www.w3.org/2000/svg"><path :d="option.inputIcon.icon.src"/></svg>
                            <b-form-input
                                :id="id"
                                :name="name"
                                :type="type"
                                :ref="name"
                                :placeholder="option.placeholder"
                                :state="errorState"
                                :style="(option.inputWithLeftButtons ? 'border-left: 0!important;':'') + 
                                        (option.inputWithRightButtons && option.inputWithRightButtons.length > 0 ? 'border-right: 0!important; border-start-end-radius: 0!important; border-end-end-radius: 0!important;':'') + 
                                        (option.width !== '' ? 'width: ' + option.width + '!important;':'') + 
                                        (option.height !== '' ? 'height: ' + option.height + '!important;':'') + 
                                        (option.color !== '' ? 'color: ' + option.color + '!important;':'') + 
                                        (option.backgroundColor !== '' ? 'background-color: ' + option.backgroundColor + '!important;':'') + 
                                        (option.fontSize !== '' ? 'font-size: ' + option.fontSize + '!important;':'') + 
                                        (option.passwordEyeButton.status === true ? 'background-size: calc(4.75em + 0.375rem) calc(0.75em + 0.375rem)!important;':'')"
                                :class="[option.inputIcon.status ? 'input-icon-' + option.inputIcon.placement + '-padding':'', type === 'password' && option.passwordEyeButton.status === true ? 'input-password-eye-button':'', option.placeholderColor === '' ? '':'input-placeholder-' + option.placeholderColor, option.focusColor === '' ? '':'input-focus-' + option.focusColor]"
                                :disabled="disabled"
                                v-mask="option.vmask"
                                v-model="value.value"
                                v-bind="[type === 'number' && {'min':option.min, 'max':option.max}, option.maxlength > 0 && {'maxlength':option.maxlength}]"
                                v-on:keypress="onKeyPress"
                                v-on:keydown="onKeyDown"
                                v-on:keyup="onKeyUp"
                                v-on:blur.native="onBlur"
                                @input="validControl"
                            />
                        </div>
                        <!-- <div :class="[{'input-with-right-buttons':inputWithRightButtons.length > 0}, 'position-relative']" style="width: 100%" v-if="inputWithRightButtons">
                            <b-icon v-if="inputIcon.status && inputIcon.icon.library === 'bootstrap'" :icon="inputIcon.icon.src" :class="'input-icon-' + inputIcon.placement"></b-icon>
                            <i :style="errorState === false ? 'color: red;':''" v-if="inputIcon.status && inputIcon.icon.library === 'fontawesome'" :class="inputIcon.icon.src[0] + ' ' + 'fa-' + inputIcon.icon.src[1] + ' ' + 'input-icon-' + inputIcon.placement"/>
                            <v-icon v-if="inputIcon.status && inputIcon.icon.library === 'vuetify-material-design'" :class="'input-icon-' + inputIcon.placement + '-mdi'">{{icon.icon.src}}</v-icon>
                            <b-form-input
                                :id="id"
                                :name="name"
                                :type="type"
                                :ref="name"
                                :value="value.value"
                                :placeholder="placeholder"
                                :state="errorState"
                                :style="(inputWithLeftButtons ? 'border-left: 0!important;':'') + (inputWithRightButtons.length > 0 ? 'border-right: 0!important; border-start-end-radius: 0!important; border-end-end-radius: 0!important;':'') + (width !== '' ? 'width: ' + width + '!important;':'')"
                                :class="(inputIcon.status ? 'input-icon-' + inputIcon.placement + '-padding ':'') + (showPasswordEyeButton ? 'input-password-eye-button ':'')"
                                :disabled="inputDisabled"
                                v-bind="[ type === 'number' && {'min':min, 'max':max}, maxlength > 0 && {'maxlength':maxlength}]"
                                v-on:keypress="onKeyPress"
                                @input="validControl()"
                                v-on:blur.native="onBlur"
                            />
                        </div> -->
                        <!-- <b-input-group-append v-if="inputWithRightButtons && inputWithRightButtons.length > 0">
                            <b-button v-for="(data, i) in inputWithRightButtons" :key="i"
                                :disable="data.disable"
                                :class="(i+1) < inputWithRightButtons.length ? 'input-right-btn nonborder-radius':'input-right-btn'"
                                :style="data.bgcolor && 'background-color: ' + data.bgcolor + '!important;'"
                                v-bind="[data.bgcolor && data.bgcolorHover && {'onmouseover':'this.style.setProperty(\'background-color\', \'' + data.bgcolorHover + '\', \'important\');'}, data.bgcolor && data.bgcolorHover && {'onmouseout':'this.style.setProperty(\'background-color\', \'' + data.bgcolor + '\', \'important\');'}]"
                                @click="data.click"
                                v-html="data.text"
                            />
                        </b-input-group-append> -->

                        <div :class="!passwordShow && option.passwordEyeButton.status === true ? 'display-eye':'d-none'" @click="passwordShow = !passwordShow, passwordShow === true ? type = 'text' : type = 'password'">
                            <i class="fas fa-eye" :style="(option.passwordEyeButton.color === '' ? '':`color: ${option.passwordEyeButton.color};`)"/>
                        </div>
                        <div :class="passwordShow && option.passwordEyeButton.status === true ? 'display-eye':'d-none'" @click="passwordShow = !passwordShow, passwordShow === true ? type = 'text' : type = 'password'">
                            <i class="fas fa-eye-slash" :style="(option.passwordEyeButton.color === '' ? '':`color: ${option.passwordEyeButton.color};`)"/>
                        </div>
                    </template>
                </b-input-group>
            </div>

            <!-- ERROR MESSAGE -->
            <span style="font-size: 12px; color: red; display: block; margin-top: 7px" v-if="errorState === false" v-html="errorMessage"></span>
        </b-form-group>
    </div>
</template>

<script>
/**
 * @author Can Bahadır Ceylan <can.ceylan@metalteknoloji.com>
 */
import Vue from 'vue';
import Multiselect from 'vue-multiselect';
import 'vue-multiselect/dist/vue-multiselect.min.css';
import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/dist/vue-tel-input.css';
Vue.use(VueTelInput);
import TelAllCountries from '@/assets/js/all-countries';
import Func from '@/func';
import { VueMaskDirective } from 'v-mask';
Vue.directive('mask', VueMaskDirective);
const _ = require('lodash');

export default {
    components: {
        Multiselect
    },
    props: {
        id: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true,
            default: 'text'
        },
        value: { // Input value değeri. ÖNEMLİ NOT: Bu ayarı kullanmayabilirsiniz. Ancak modelleme için input'a value değil, v-model verilmelidir. => (Zorunlu Değil)
            type: Object,
            default: () => {
                return {};
            }
        },
        disabled: {
            type: Boolean,
            default: false
        },
        options: {
            type: Object,
            default: () => {
                return {};
            }
        }
    },
    data() {
        var data = {
            shake: false,
            passwordShow: false,
            option: {
                label: '',
                labelBold: true,
                placeholder: '',
                width: '',
                height: '40px',
                color: '',
                backgroundColor: '',
                placeholderColor: '',
                focusColor: '',
                fontSize: '',
                /**
                 * #### INPUT WITH LEFT BUTTON ####
                 * Input'un soluna button ekler.
                 * 
                 * text: Button text
                 * bgcolor: Button rengi
                 * bgcolorHover: Button Hover rengi
                 * bgcolorActive: Button Active rengi
                 * click: Fonksiyon alır. Gelen fonksiyonu tetikler. Not: Fonksiyon içine this.fonksiyon_adi(); şeklinde işlem yapılabilir. Kullanım;
                 *          {
                 *              text: 'text',
                 *              bgcolor: '',
                 *              bgcolorHover: '',
                 *              bgcolorActive: '',
                 *              click: () => {
                 *              
                 *              }
                 *          }
                 */
                inputWithLeftButtons: null,
                /**
                 * #### INPUT WITH RIGHT BUTTON ####
                 * Input'un sağına button ekler.
                 * 
                 * text: Button text
                 * bgcolor: Button rengi
                 * bgcolorHover: Button Hover rengi
                 * bgcolorActive: Button Active rengi
                 * click: Fonksiyon alır. Gelen fonksiyonu tetikler. Not: Fonksiyon içine this.fonksiyon_adi(); şeklinde işlem yapılabilir. Kullanım;
                 *          {
                 *              text: 'text',
                 *              bgcolor: '',
                 *              bgcolorHover: '',
                 *              bgcolorActive: '',
                 *              click: () => {
                 *              
                 *              }
                 *          }
                 */
                inputWithRightButtons: null,
                min: 0, // Minimum karakter sayısı
                max: 1000, // Maksimum karakter sayısı
                maxlength: 0, // Not: Değeri sıfır ise bind edilmez! Input type number'da çalışmaz!
                marginButtom: '12px',
                marginRight: '',
                marginLeft: '',
                marginTop: '',
                noResize: false, // Input'un resize özelliğini kapatır.
                passwordEyeButton: { // Input'un sağ kenarında şifre gizleme gösterme tuşu gösterir.
                    status: false,
                    color: ''
                },
                vtooltip: { // Bootstrap Vue v-tooltip ile çalışır.
                    status: false,
                    content: '-',
                    placement: 'top',
                    classes: ['info'],
                    trigger: 'hover'
                },
                textCounter: false, // Yazılan yazının karakter sayısını ve maksimum girilebilecek karakter sayısını gösterir. Örneğin: 6/50
                vmask: '', // https://www.npmjs.com/package/v-mask adresindeki v-mask ile çalışır. Paket projeye kurulmuş olması gerekir. Örnek: '##.##.####'
                toUpperCase: false, // Input'ta girilen harfleri büyük harfe çevirir
                toLowerCase: false, // Input'ta girilen harfleri küçük harfe çevirir
                onlyNumber: false, // Input'ta yalnızca rakam girilebilir
                onlyLetter: false, // Input'ta yalnızca harf girilebilir
                shaker: false, // Sallanma efekti
                inputIcon: { // Input'un sağ veya sol tarafına ikon ekler
                    status: false,
                    placement: 'left',
                    icon: {
                        library: 'fontawesome', // bootstrap, fontawesome, vuetify-material-design, svg
                        src: ['far', 'user'], // Yalnızca fontawesome'da array değer atanır
                        size: '',
                        color: '',
                        viewBox: '' // Yalnızca SVG için değer atanır
                    }
                },
                selectSettings: { // Select input ayarları
                    placeholder: 'Seçiniz',
                    label: 'label', // selectOptions'dan gösterilecek label key'i
                    trackby: 'value', // selectOptions'dan seçilecek value key'i
                    searchable: false, // Arama seçeneği => Default: false (Arama özelliği yok)
                    closeOnSelect: true, // Seçim yapıldığında kapanma durumu => Default: true (Kapanır)
                    clearOnSelect: false, // Seçim yapıldığında input temizlenir => Default: false (Temizlenmez)
                    showLabels: false, // Hangi seçeneğin seçildiği yazar => Default: false (Kapalı)
                    selectLabel: '', // Seçim yapılabilecek olana yazılan değer yazılır
                    selectedLabel: '', // Seçim yapıldığında seçilen değer yazılır
                    deselectLabel: '', // Seçim yapılmadığında yazılacak değer
                    multiple: false, // Çoklu seçim => Default: false (Tekli seçim)
                    max: 0, // Çoklu seçimde maksimum seçim sayısı => Default: 0 (Sınırsız)
                    hideSelected: false, // Seçilen değerlerin gösterilme durumu (Seçilenleri gizle) => Default: false (Gösterilir)
                    allowEmpty: false, // Seçim yapılmasını zorunlu kılma
                },
                selectOptions: [], // Select inputlarda doldurulacak data
                phoneOptions: {
                    type: this.type,
                    allCountries: TelAllCountries,              // Type: Array =>                   Default: An array of all countries, see allCountries.js =>  All countries that are used in libphonenumber-js, can be overridden by this prop
                    autoFormat: true,                           // Type: Boolean =>                 Default: true =>                                            Auto update the input to the formatted phone number when it's valid
                    customValidate: false,                      // Type: Boolean, RegExp =>         Default: false =>                                           Custom validation RegExp for input
                    defaultCountry: 'TR',                       // Type: String, Number =>          Default: '' =>                                              Default country (by iso2 or dialCode), will override the country fetched from IP address of user
                    disabled: false,                            // Type: Boolean =>                 Default: false =>                                           Disable vue-tel-input, including the input & flag dropdown
                    autoDefaultCountry: false,                  // Type: Boolean =>                 Default: true =>                                            To fetch default country based on IP address of user
                    ignoredCountries: [],                       // Type: Array =>                   Default: [] =>                                              List of countries will NOT be shown on the dropdown
                    errorMessage: '',                           // Type: String =>                  Default: ''                                                 
                    mode: 'international',                      // Type: String =>                  Default: 'auto' =>                                          Allowed values: 'auto' (Default set by phone), 'international' (Format number with the dial code i.e. + 61), 'national' (Format number without dial code i.e. 0321232)
                    onlyCountries: [],                          // Type: Array =>                   Default: [] =>                                              List of countries will be shown on the dropdown
                    preferredCountries: [],                     // Type: Array =>                   Default: [] =>                                              Preferred countries list, will be on top of the dropdown
                    styleClasses: 'text-nowrap',                // Type: String, Array, Object =>   Default: '' =>                                              Custom classes for the wrapper
                    validCharactersOnly: true,                  // Type: Boolean =>                 Default: false =>                                           Only allow valid characters in a phone number (will also verify in mounted, so phone number with invalid characters will be shown as an empty string)

                    inputOptions: {     
                        autocomplete: 'on',                     // Type: String =>                  Default: 'on' =>                                            Native input autocomplete attribute
                        autofocus: false,                       // Type: Boolean =>                 Default: false =>                                           Native input autofocus attribute
                        'aria-describedby': '',                 // Type: String =>                  Default: '' =>                                              Native input aria-describedby attribute
                        id: this.id,                            // Type: String =>                  Default: '' =>                                              Native input id attribute
                        maxlength: 17,                          // Type: Number =>                  Default: 25 =>                                              Native input maxlength attribute
                        name: this.name,                        // Type: String =>                  Default: 'telephone' =>                                     Native input name attribute
                        placeholder: 'Cep telefonu girin',      // Type: String =>                  Default: 'Enter a phone number' =>                          Placeholder for the input
                        readonly: false,                        // Type: Boolean =>                 Default: false =>                                           Native input readonly attribute
                        required: true,                         // Type: Boolean =>                 Default: false =>                                           Native input required attribute
                        tabindex: 0,                            // Type: Number =>                  Default: 0 =>                                               Native input tabindex attribute
                        type: this.type,                        // Type: String =>                  Default: 'tel' =>                                           Native input type attribute
                        styleClasses: 'small text-nowrap',      // Type: String, Array, Object =>   Default: '' =>                                              Custom classes for the input
                    },
                    dropdownOptions: {
                        disabled: false,                        // Type: Boolean =>                 Default: false =>                                           Disable dropdown
                        showDialCodeInList: true,               // Type: Boolean =>                 Default: true =>                                            Show dial code in the dropdown list
                        showDialCodeInSelection: false,         // Type: Boolean =>                 Default: false =>                                           Show dial code in the dropdown selection
                        showFlags: true,                        // Type: Boolean =>                 Default: true =>                                            Show flags in the dropdown selection and list
                        showSearchBox: false,                   // Type: Boolean =>                 Default: false =>                                           Show country search box
                        tabindex: 0,                            // Type: Number =>                  Default: 0 =>                                               Native dropdown tabindex attribute
                        width: '300px'                          // Type: String =>                  Default: '390px' =>                                         Specify dropdown width
                    }
                },
                validRequired: { // Input boş bırakılırsa görüntülenecek hata mesajı
                    status: false,
                    errorMessage: ''
                },
                validLengthMin: { // Input'a en az girilecek karakter sayısı
                    status: false, // Özellik => true (Açık) - false (Kapalı)
                    number: 2, // Karakter sayısı
                    zeroCharDontRun: false, // Sıfır karakter olduğunda çalıştırma => true (Açık) - false (Kapalı)
                    errorMessage: '' // Hata mesajı
                },
                validLengthMax: { // Input'a en fazla girilecek karakter sayısı
                    status: false, // Özellik => true (Açık) - false (Kapalı)
                    number: 2, // Karakter sayısı
                    zeroCharDontRun: false, // Sıfır karakter olduğunda çalıştırma => true (Açık) - false (Kapalı)
                    errorMessage: '' // Hata mesajı
                },
                validRegExp: { // E-Posta formatı gibi işlemlerin yapıldığı RegExp kontrolü içindir.
                    status: false, // Özellik => true (Açık) - false (Kapalı)
                    regexp: new RegExp(), // Regular Expression koşulu
                    errorMessage: '' // Hata mesajı
                },
                validEqualValue: { // Input'a girilen değer ile validEqualValue model'in değerinin birbirine olan eşitliği. İki input'un birbirine olan eşitliği için kullanılır.
                    status: false, // Özellik => true (Açık) - false (Kapalı)
                    value: '', // Girdinin eşit olacağı değer
                    errorMessage: '' // Hata mesajı
                },
                validTCIdentity: { // TC Kimlik kontrolü
                    status: false, // Özellik => true (Açık) - false (Kapalı)
                    errorMessage: '' // Hata mesajı
                },
                validTaxIdentity: { // Vergi No kontrolü
                    status: false, // Özellik => true (Açık) - false (Kapalı)
                    errorMessage: '' // Hata mesajı
                },
                validMinNumber: { // Input eğer onlyNumber true seçilmiş ise bu prop ile minimum sayı kontrolü yapılır
                    status: false, // Özellik => true (Açık) - false (Kapalı)
                    number: 0, // Minimum karakter sayısı
                    errorMessage: '' // Hata mesajı
                },
                validMaxNumber: { // Input eğer onlyNumber true seçilmiş ise bu prop ile maksimum sayı kontrolü yapılır
                    status: false, // Özellik => true (Açık) - false (Kapalı)
                    number: 0, // Maksimum karakter sayısı
                    errorMessage: '' // Hata mesajı
                }
            },
            errorState: null,
            errorMessage: ''
        };

        data.option = _.merge(data.option, this.options);

        return data;
    },
    mounted() {
        if(this.value) {
            this.errorState = this.value.valid;

            if(this.type === 'tel') {
                this.option.phoneOptions.styleClasses = this.option.phoneOptions.styleClasses.split(' ').filter(e => e !== 'valid').filter(e => e !== 'invalid').join(' ');
                this.option.phoneOptions.inputOptions.styleClasses = this.option.phoneOptions.inputOptions.styleClasses.split(' ').filter(e => e !== 'valid').filter(e => e !== 'invalid').join(' ');

                if(this.value.valid !== null) {
                    this.option.phoneOptions.styleClasses = this.option.phoneOptions.styleClasses.concat(this.value.valid === true ? ' valid' : ' invalid');
                    this.option.phoneOptions.inputOptions.styleClasses = this.option.phoneOptions.inputOptions.styleClasses.concat(this.value.valid === true ? ' valid' : ' invalid');
                }
            }

            if(this.type === 'select' && this.value.value && this.value.value !== '') {
                var val = this.option.selectOptions.filter(e => e.value === this.value.value)[0];

                this.$el.querySelector('.multiselect__tags').classList.remove('invalid');
                this.$el.querySelector('.multiselect__tags').classList.remove('valid');
                
                if(val.value !== '') {
                    this.value.value = val;
                    this.$el.querySelector('.multiselect__tags').classList.add('valid');
                } else {
                    this.value.value = '';
                    this.$el.querySelector('.multiselect__tags').classList.add('invalid');
                }
            }
        }
    },
    computed: {
        selectOptions: {
            // getter
            get: function () {
                return this.option.selectOptions;
            },
            // setter
            set: function (newSelectOptions) {
                this.option.selectOptions = newSelectOptions;
            }
        }
    },
    watch: {
        'value.valid': function () {
            this.errorState = this.value.valid;
            
            if(this.value.valid === true || this.value.valid === null) this.errorMessage = '';
        },
        'value.value': function (val) {
            if(this.type === 'select') { // Input tipi select ise
                this.$el.querySelector('.multiselect__tags').classList.remove('valid'); // Select için valid class'ı kaldırıldı
                this.$el.querySelector('.multiselect__tags').classList.remove('invalid'); // Select için invalid class'ı kaldırıldı
                
                if(typeof(val) === 'object') { // val değeri object ise
                    if(this.value.valid !== null) {
                        this.value.value = val;

                        if(val.value !== '') this.$el.querySelector('.multiselect__tags').classList.add('valid');
                        else this.$el.querySelector('.multiselect__tags').classList.add('invalid');
                    }
                } else {
                    if(val !== '') {
                        this.value.value = this.option.selectOptions.filter(e => e.value === val)[0];
                        this.$el.querySelector('.multiselect__tags').classList.add('valid');
                    }
                }
            } else {
                if(val === null || val === undefined) this.value.value = '';

                if(this.option.toUpperCase === true) this.value.value = Func.replaceArrayAll(this.value.value, ['i'], ['İ']).toUpperCase();
                if(this.option.toLowerCase === true) this.value.value = Func.replaceArrayAll(this.value.value, ['İ'], ['i']).toLowerCase();

                if(this.type === 'tel') {
                    this.option.phoneOptions.styleClasses = this.option.phoneOptions.styleClasses.split(' ').filter(e => e !== 'valid').filter(e => e !== 'invalid').join(' ');
                    this.option.phoneOptions.inputOptions.styleClasses = this.option.phoneOptions.inputOptions.styleClasses.split(' ').filter(e => e !== 'valid').filter(e => e !== 'invalid').join(' ');
                    
                    if(this.value.value !== '') this.validControl();
                }
            }
        },
        'options': {
            handler(val) {
                this.option = Func.mergeDeep(this.option, val);

                //if(this.type === 'select') this.selectOptions = val.selectOptions;
            },
            deep: true
        }
    },
    methods: {
        validControl(shake = false) {
            var val = this.value.value;

            if(val === null || val === undefined) val = '';

            if(this.option.validRequired && this.option.validRequired.status === true) {
                if(this.type === 'select' ? (typeof(val) === 'object' ? val.value.length === 0 : val.length === 0) : val.length === 0) {
                    this.errorState = false;
                    this.errorMessage = this.option.validRequired.errorMessage;

                    if(this.type === 'tel') {
                        this.option.phoneOptions.styleClasses = this.option.phoneOptions.styleClasses.split(' ').filter(e => e !== 'valid').join(' ').concat(' invalid');
                        this.option.phoneOptions.inputOptions.styleClasses = this.option.phoneOptions.inputOptions.styleClasses.split(' ').filter(e => e !== 'valid').join(' ').concat(' invalid');
                    }

                    if(this.type === 'select') {
                        this.$el.querySelector('.multiselect__tags').classList.remove('valid');
                        this.$el.querySelector('.multiselect__tags').classList.add('invalid');
                    }

                    this.$emit('input', { value: val, valid: this.errorState });

                    if(shake === true && this.option.shaker === true) this.shaker();

                    return;
                }
            }
            
            if(this.option.validLengthMin && this.option.validLengthMin.status === true) {
                if(this.option.validLengthMin.zeroCharDontRun === true ? val.length > 0 && val.length < this.option.validLengthMin.number : val.length < this.option.validLengthMin.number) {
                    this.errorState = false;
                    this.errorMessage = this.option.validLengthMin.errorMessage;

                    if(this.type === 'tel') {
                        this.option.phoneOptions.styleClasses = this.option.phoneOptions.styleClasses.split(' ').filter(e => e !== 'valid').join(' ').concat(' invalid');
                        this.option.phoneOptions.inputOptions.styleClasses = this.option.phoneOptions.inputOptions.styleClasses.split(' ').filter(e => e !== 'valid').join(' ').concat(' invalid');
                    }

                    if(this.type === 'select') {
                        this.$el.querySelector('.multiselect__tags').classList.remove('valid');
                        this.$el.querySelector('.multiselect__tags').classList.add('invalid');
                    }

                    this.$emit('input', { value: val, valid: this.errorState });

                    if(shake === true && this.option.shaker === true) this.shaker();

                    return;
                }
            }
            
            if(this.option.validLengthMax && this.option.validLengthMax.status === true) {
                if(this.option.validLengthMax.zeroCharDontRun === true ? val.length > 0 && val.length > this.option.validLengthMax.number : val.length > this.option.validLengthMax.number) {
                    this.errorState = false;
                    this.errorMessage = this.option.validLengthMax.errorMessage;

                    if(this.type === 'tel') {
                        this.option.phoneOptions.styleClasses = this.option.phoneOptions.styleClasses.split(' ').filter(e => e !== 'valid').join(' ').concat(' invalid');
                        this.option.phoneOptions.inputOptions.styleClasses = this.option.phoneOptions.inputOptions.styleClasses.split(' ').filter(e => e !== 'valid').join(' ').concat(' invalid');
                    }

                    if(this.type === 'select') {
                        this.$el.querySelector('.multiselect__tags').classList.remove('valid');
                        this.$el.querySelector('.multiselect__tags').classList.add('invalid');
                    }

                    this.$emit('input', { value: val, valid: this.errorState });

                    if(shake === true && this.option.shaker === true) this.shaker();

                    return;
                }
            }
            
            if(this.option.validRegExp && this.option.validRegExp.status === true) {
                if(!val.match(this.option.validRegExp.regexp)) {
                    this.errorState = false;
                    this.errorMessage = this.option.validRegExp.errorMessage;

                    if(this.type === 'tel') {
                        this.option.phoneOptions.styleClasses = this.option.phoneOptions.styleClasses.split(' ').filter(e => e !== 'valid').join(' ').concat(' invalid');
                        this.option.phoneOptions.inputOptions.styleClasses = this.option.phoneOptions.inputOptions.styleClasses.split(' ').filter(e => e !== 'valid').join(' ').concat(' invalid');
                    }

                    if(this.type === 'select') {
                        this.$el.querySelector('.multiselect__tags').classList.remove('valid');
                        this.$el.querySelector('.multiselect__tags').classList.add('invalid');
                    }

                    this.$emit('input', { value: val, valid: this.errorState });

                    if(shake === true && this.option.shaker === true) this.shaker();

                    return;
                }
            }

            if(this.option.validEqualValue && this.option.validEqualValue.status === true) {
                if(val !== this.option.validEqualValue.value) {
                    this.errorState = false;
                    this.errorMessage = this.option.validEqualValue.errorMessage;

                    if(this.type === 'tel') {
                        this.option.phoneOptions.styleClasses = this.option.phoneOptions.styleClasses.split(' ').filter(e => e !== 'valid').join(' ').concat(' invalid');
                        this.option.phoneOptions.inputOptions.styleClasses = this.option.phoneOptions.inputOptions.styleClasses.split(' ').filter(e => e !== 'valid').join(' ').concat(' invalid');
                    }

                    if(this.type === 'select') {
                        this.$el.querySelector('.multiselect__tags').classList.remove('valid');
                        this.$el.querySelector('.multiselect__tags').classList.add('invalid');
                    }

                    this.$emit('input', { value: val, valid: this.errorState });

                    if(shake === true && this.option.shaker === true) this.shaker();

                    return;
                }
            }
            
            if(this.option.onlyNumber === true) {
                if(this.option.validMinNumber && this.option.validMinNumber.status === true) {
                    if(parseInt(val) < this.option.validMinNumber.number) {
                        this.errorState = false;
                        this.errorMessage = this.option.validMinNumber.errorMessage;

                        if(this.type === 'tel') {
                            this.option.phoneOptions.styleClasses = this.option.phoneOptions.styleClasses.split(' ').filter(e => e !== 'valid').join(' ').concat(' invalid');
                            this.option.phoneOptions.inputOptions.styleClasses = this.option.phoneOptions.inputOptions.styleClasses.split(' ').filter(e => e !== 'valid').join(' ').concat(' invalid');
                        }

                        if(this.type === 'select') {
                            this.$el.querySelector('.multiselect__tags').classList.remove('valid');
                            this.$el.querySelector('.multiselect__tags').classList.add('invalid');
                        }

                        this.$emit('input', { value: val, valid: this.errorState });

                        if(shake === true && this.option.shaker === true) this.shaker();

                        return;
                    }
                }
                
                if(this.option.validMaxNumber && this.option.validMaxNumber.status === true) {
                    if(parseInt(val) > this.option.validMaxNumber.number) {
                        this.errorState = false;
                        this.errorMessage = this.option.validMaxNumber.errorMessage;

                        if(this.type === 'tel') {
                            this.option.phoneOptions.styleClasses = this.option.phoneOptions.styleClasses.split(' ').filter(e => e !== 'valid').join(' ').concat(' invalid');
                            this.option.phoneOptions.inputOptions.styleClasses = this.option.phoneOptions.inputOptions.styleClasses.split(' ').filter(e => e !== 'valid').join(' ').concat(' invalid');
                        }

                        if(this.type === 'select') {
                            this.$el.querySelector('.multiselect__tags').classList.remove('valid');
                            this.$el.querySelector('.multiselect__tags').classList.add('invalid');
                        }

                        this.$emit('input', { value: val, valid: this.errorState });

                        if(shake === true && this.option.shaker === true) this.shaker();

                        return;
                    }
                }
            }
            
            if(val.length === 10 && this.option.validTaxIdentity.status === true) {
                let v = [];
                let lastDigit = Number(val.charAt(9));

                for (let i = 0; i < 9; i++) {
                    let tmp = (Number(val.charAt(i)) + (9 - i)) % 10;

                    v[i] = (tmp * 2 ** (9 - i)) % 9;
                    if (tmp !== 0 && v[i] === 0) v[i] = 9;
                }
                
                let sum = v.reduce((a, b) => a + b, 0) % 10;

                if((10 - (sum % 10)) % 10 !== lastDigit) {
                    this.errorState = false;
                    this.errorMessage = this.option.validTaxIdentity.errorMessage;
                    this.$emit('input', { value: val, valid: this.errorState });

                    if(shake === true && this.option.shaker === true) this.shaker();
                    return;
                }
            } else if(val.length === 11 && this.option.validTCIdentity.status === true) {
                var isEleven = /^[0-9]{11}$/.test(val);
                var totalX = 0;
                for (var i = 0; i < 10; i++) {
                    totalX += Number(val.substr(i, 1));
                }
                var isRuleX = totalX % 10 == val.substr(10,1);
                var totalY1 = 0;
                var totalY2 = 0;
                for (var x = 0; x < 10; x+=2) {
                    totalY1 += Number(val.substr(x, 1));
                }
                for (var y = 1; y < 10; y+=2) {
                    totalY2 += Number(val.substr(y, 1));
                }
                var isRuleY = ((totalY1 * 7) - totalY2) % 10 == val.substr(9,0);
                var result = isEleven && isRuleX && isRuleY;

                if(!result || val === '00000000000') {
                    this.errorState = false;
                    this.errorMessage = this.option.validTCIdentity.errorMessage;
                    this.$emit('input', { value: val, valid: this.errorState });

                    if(shake === true && this.option.shaker === true) this.shaker();
                    return;
                }
            }

            this.errorState = val === '' ? null : true;
            this.errorMessages = '';

            if(this.type === 'tel') {
                this.option.phoneOptions.styleClasses = this.option.phoneOptions.styleClasses.split(' ').filter(e => e !== 'invalid').join(' ').concat(' valid');
                this.option.phoneOptions.inputOptions.styleClasses = this.option.phoneOptions.inputOptions.styleClasses.split(' ').filter(e => e !== 'invalid').join(' ').concat(' valid');
            }

            if(this.type === 'select') {
                this.$el.querySelector('.multiselect__tags').classList.remove('invalid');
                this.$el.querySelector('.multiselect__tags').classList.add('valid');
            }

            this.$emit('input', { value: val, valid: this.errorState });

            return;
        },
        showHidePassword() {
            this.passwordShow = !this.passwordShow;
            if(this.passwordShow) this.type = 'text'
            else this.type = 'password'
        },
        inputWithLeftButtonClick() {
            this.$emit('onLeftButtonClick');
        },
        inputWithRightButtonClick() {
            this.$emit('onRightButtonClick');
        },
        onBlur() {
            this.$emit('onBlur', this.option.name);
        },
        setState(state) {
            this.errorState = state;
        },
        shaker() {
            this.shake = true;

            setTimeout(() => {
                this.shake = false;
            }, 1000);
        },
        onKeyPress(event) {
            this.$emit('onKeyPress', this.name, event.key, event.keyCode, this.value.value);

            if(this.option.onlyNumber) {
                if(event.key.match(/[0-9]/g)) return true;
                else event.preventDefault();
            } else if(this.option.onlyLetter) {
                if(event.key.match(/[a-zğüşıöçA-ZĞÜŞİÖÇ ]/g)) return true;
                else event.preventDefault();
            }
        },
        onKeyDown(event) {
            this.$emit('onKeyDown', this.name, event.key, event.keyCode, this.value.value);
        },
        onKeyUp(event) {
            this.$emit('onKeyUp', this.name, event.key, event.keyCode, this.value.value);

            /// ['## S ####', '## S #####', '## SS ###', '## SS ####', '## SSS ##', '## SSS ###']

            /* if(this.option.vmask && this.option.vmask.type === 'plate') {
                if(this.value.match(/(0[1-9]|[1-7][0-9]|8[01])\s/g)) { // Plaka başında iki haneli 01-81 arasında, sonunda boşluklu bir sayı var ise
                    if(this.value.match(/([A-Z]{3})/g) || this.value.match(/([A-Z]{3})\s/g)) { // Plaka içinde, sonunda başluklu üç haneli harf var ise
                        if(this.value.match(/(\d{3})/g)) { // Plaka sonunda üç haneli sayı var ise
                            this.option.inputMask = '## AAA ###';
                            return;
                        } else if(this.value.match(/(\d{2})/g)) { // Plaka sonunda iki haneli sayı var ise,
                            this.option.inputMask = '## AAA ##';
                            return;
                        }
                    } else if(this.value.match(/([A-Z]{2})/g) || this.value.match(/([A-Z]{2})\s/g)) { // Plaka içinde, sonunda başluklu iki haneli harf var ise
                        if(this.value.match(/(\d{4})/g)) { // Plaka sonunda dört haneli sayı var ise
                            this.inputMask = '## AA ####';
                            return;
                        } else if(this.value.match(/(\d{3})/g)) { // Plaka sonunda üç haneli sayı var ise
                            this.inputMask = '## AA ###';
                            return;
                        }
                    } else if(this.value.match(/([A-Z]{1})/g) || this.value.match(/([A-Z]{1})\s/g)) { // Plaka içinde, sonunda başluklu tek haneli harf var ise
                        if(this.value.match(/(\d{5})/g)) { // Plaka sonunda beş haneli sayı var ise
                            this.inputMask = '## A #####';
                            return;
                        } else if(this.value.match(/(\d{4})/g)) { // Plaka sonunda dört haneli sayı var ise
                            this.inputMask = '## A ####';
                            return;
                        }
                    }
                }

                this.inputMask = '';
            } */
            
        }
    }
};
</script>

<style lang="scss">
.CBCInputVue {
    .form-group .form-control {
        font-size: 14px;
        
        &::-webkit-input-placeholder {
            //font-weight: bold;
            color: #00000099;
        }

        &.is-valid {
            border: 1px solid #28a745!important;

            &:focus-within {
                -webkit-box-shadow: 0px 0px 0px 0.2rem #28a74540;
                box-shadow: 0px 0px 0px 0.2rem #28a74540
            }
        }

        &.is-invalid {
            border: 1px solid #dc3545!important;

            &:focus-within {
                -webkit-box-shadow: 0px 0px 0px 0.2rem #dc354540;
                box-shadow: 0px 0px 0px 0.2rem #dc354540
            }
        }
    }

    label {
        font-family: "Inter", sans-serif!important;
        font-feature-settings: "cv11" on!important;
    }

    h6 {
        font-family: "Inter", sans-serif!important;
        font-feature-settings: "cv11" on!important;
    }

    .tooltip-hover {
        &:hover {
            cursor: help;
        }
    }

    // input otomatik doldurma durumundaki background-color
    input:-webkit-autofill, input:-webkit-autofill:focus {
        transition: background-color 600000s 0s, color 600000s 0s;
    }

    input[data-autocompleted] {
        background-color: transparent!important;
    }

    .input-placeholder-white {
        &::-webkit-input-placeholder {
            color: white!important;
        }

        &::-moz-placeholder {
            color: white!important;
        }

        &::-ms-input-placeholder {
            /** notice that ie has only a single colon) */
            color: white!important;
        }

        &::-webkit-input-placeholder {
            color: white!important;
        }

        &::placeholder {
            color: white!important;
        }
    }

    .input-password-eye-button {
        float: left;
        margin-right: -30px;
        padding-right: 55px;
        background-position: right calc(0.375em + 1.5rem) center;
    }

    .input-icon-left {
        position: absolute!important;
        top: 50%;
        left: 25px;
        transform: translate(-50%, -50%);
    }

    .input-icon-right {
        position: absolute!important;
        top: 50%;
        right: 25px;
        transform: translate(-50%, -50%);
    }

    .input-icon-left-mdi {
        position: absolute!important;
        top: 9px!important;
        left: 15px!important;
    }

    .input-icon-right-mdi {
        position: absolute!important;
        top: 9px!important;
        right: 30px!important;
    }
    
    .input-icon-left-svg {
        position: absolute!important;
        top: 12px!important;
        left: 12px!important;
    }

    .input-icon-right-svg {
        position: absolute!important;
        top: 12px!important;
        right: 12px!important;
    }

    .input-icon-left-padding {
        padding-left: 3rem!important;
    }

    .input-icon-right-padding {
        padding-right: 3rem!important;
    }

    input[type='number'] {
        -moz-appearance: textfield!important;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none !important;
    }

    .input-nonborder-y {
        border-left: 0!important;
        border-right: 0!important;
    }

    .input-nonborder-x {
        border-top: 0!important;
        border-bottom: 0!important;
    }

    .display-eye {
        position: absolute;
        top: 50%;
        right: -4px;
        transform: translate(-50%, -50%);
        display: inline-flex;
        padding: 5px;
        cursor: pointer;
        z-index: 3;
    }

    .display-eye-white {

    }

    .input-left-btn {
        background-color: #d65437!important;
        border: 0;
        border-top-left-radius: 0.25rem!important;
        border-bottom-left-radius: 0.25rem!important;
        border-top-right-radius: 0!important;
        border-bottom-right-radius: 0!important;
        color: #fff!important;
        transition: 0.3s;
        box-shadow: unset!important;

        &:hover {
            background-color: #d65437e5!important;
        }

        &:focus {
            box-shadow: unset!important;
        }

        &:active {
            background-color: #c4472c!important;
            box-shadow: unset!important;
        }
    }

    .input-right-btn {
        background-color: #d65437!important;
        border: 0;
        border-top-left-radius: 0!important;
        border-bottom-left-radius: 0!important;
        border-top-right-radius: 0.25rem!important;
        border-bottom-right-radius: 0.25rem!important;
        color: #fff!important;
        transition: 0.3s;
        box-shadow: unset!important;

        &:hover {
            background-color: #d65437e5!important;
        }

        &:focus {
            box-shadow: unset!important;
        }

        &:active {
            background-color: #c4472c!important;
            box-shadow: unset!important;
        }

        &.nonborder-radius {
            border-radius: 0!important;
        }
    }

    .input-focus-white:focus {
        border-color: white !important;
        -webkit-box-shadow: 0px 0px 0px 0.2rem #2f55d340;
        box-shadow: 0px 0px 0px 0.2rem #2f55d340;
    }

    // ##### Tel-Input #####
    .vue-tel-input {
        -webkit-transition: all 0.2s ease;
        transition: all 0.2s ease;
        border: 1px solid #dee2e6;
        border-radius: 0.25rem;
        height: 40px;

        &:focus-within {
            border-color: #2f55d3 !important;
            -webkit-box-shadow: 0px 0px 0px 0.2rem #2f55d340;
            box-shadow: 0px 0px 0px 0.2rem #2f55d340;
        }

        &.valid {
            border: 1px solid #28a745!important;

            &:focus-within {
                -webkit-box-shadow: 0px 0px 0px 0.2rem #28a74540;
                box-shadow: 0px 0px 0px 0.2rem #28a74540
            }
        }

        &.invalid {
            border: 1px solid #dc3545!important;

            &:focus-within {
                -webkit-box-shadow: 0px 0px 0px 0.2rem #dc354540;
                box-shadow: 0px 0px 0px 0.2rem #dc354540
            }
        }

        .vti__input {
            font-size: 14px!important;

            &::-webkit-input-placeholder {
                font-size: 14px!important;
                //font-weight: bold;
            }

            &.valid {
                padding-right: calc(1.5em + 0.75rem);
                background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
                background-repeat: no-repeat;
                background-position: right calc(0.375em + 0.1875rem) center;
                background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
                background-color: #ffffff;
                color: #3c4858;
                border-radius: 6px;
                transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
            }

            &.invalid {
                padding-right: calc(1.5em + 0.75rem);
                background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
                background-repeat: no-repeat;
                background-position: right calc(0.375em + 0.1875rem) center;
                background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
                background-color: #ffffff;
                color: #3c4858;
                border-radius: 6px;
                transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
            }
        }

        .vti__dropdown {
            border-radius: 5px 0 0 5px;

            .vti__dropdown-list { // Tel-Input Dropdown List
                max-height: 150px!important;
                padding-left: 0!important;

                .below {
                    top: 36px;
                }
            }
        }
    }

    // ##### v-autocomplete #####
    .v-autocomplete {
        .v-input__control {
            .v-input__slot {
                margin-bottom: unset!important;
            }

            .v-text-field__details {
                display: none!important;
            }
        }

        input {
            font-size: 14px!important;
        }

        .v-input__append-inner {
            margin-top: 0!important;

            .v-input__icon--clear {
                .v-icon {
                    font-size: 18px!important;
                }
            }

            .v-input__icon--append {
                .v-icon {
                    font-size: 22px!important;
                }
            }
        }

        &.valid {
            /* padding-right: calc(0.8em + 0.75rem);
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
            background-repeat: no-repeat;
            background-position: right calc(1.2em + 0.1875rem) center;
            background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
            background-color: #ffffff;
            color: #3c4858; */
            border: 1px solid #28a745!important;
            //border-radius: 6px;
            transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
        }

        &.invalid {
           /*  padding-right: calc(0.8em + 0.75rem);
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
            background-repeat: no-repeat;
            background-position: right calc(1.2em + 0.1875rem) center;
            background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
            background-color: #ffffff;
            color: #3c4858; */
            border: 1px solid #dc3545!important;
            //border-radius: 6px;
            transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
        }
    }

    // #### Vue Multiselect #####
    .multiselect {
        border-radius: unset!important;
        border: unset!important;

        .multiselect__tags {
            border: 1px solid #dee2e6;
            border-radius: 5px;
            padding: 8px 40px 0 11px !important;
            -webkit-transition: all 0.2s ease;
            transition: all 0.2s ease;

            &.valid {
                border: 1px solid #28a745!important;
            }

            &.invalid {
                border: 1px solid #dc3545!important;
            }

            .multiselect__placeholder {
                font-size:14px!important;
                display: inline-block!important;
                margin-bottom: unset!important;
                color: #666667!important;
            }

            .multiselect__single {
                padding-top: 2px;
                font-size:14px!important;
                padding-left: unset!important;
                margin-bottom: unset!important;
                color: #666667!important;
            }
        }

        &:focus-within {
            .multiselect__tags {
                border-color: #2f55d3;
                -webkit-box-shadow: 0px 0px 0px 0.2rem #2f55d340;
                box-shadow: 0px 0px 0px 0.2rem #2f55d340;
                
                &.valid {
                    -webkit-box-shadow: 0px 0px 0px 0.2rem #28a74540;
                    box-shadow: 0px 0px 0px 0.2rem #28a74540
                }

                &.invalid {
                    -webkit-box-shadow: 0px 0px 0px 0.2rem #dc354540;
                    box-shadow: 0px 0px 0px 0.2rem #dc354540
                }
            }
        }

        .multiselect__content {
            font-size:14px!important;

            .multiselect__element {
                .multiselect__option {
                    /* display: flex;
                    justify-content: center; */

                    &::after {
                        padding: 0 12px!important;
                    }
                }
            }

            .multiselect__option--highlight {
                background: #1565C0!important;
                color: #fff!important;
                font-weight: 500!important;
            }

            .multiselect__option--selected {
                background: #f3f3f3;
                color: #35495e;
                font-weight: 500!important;
            }

            .multiselect__option--selected.multiselect__option--highlight {
                background: #1565C0!important;
                color: #fff!important;
                font-weight: 500!important;
            }
        }
    }
}

.tooltip {
    .tooltip-inner {
        background-color: #1565C0;
    }

    & > .arrow::before {
        border-right-color: #1565C0;
    }
}

/* #### SHAKE ANIMATION #### */
.anim-shake {
    animation: anim-shake 0.82s cubic-bezier(.36, .07, .19, .97) both;
    transform: translate3d(0, 0, 0);
}

@keyframes anim-shake {
    10%,
    90% {
        transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
        transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
        transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
        transform: translate3d(4px, 0, 0);
    }
}

</style>